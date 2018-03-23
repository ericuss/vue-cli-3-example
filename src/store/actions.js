import { login as loginService, validateToken as validateTokenService, get as GetUsersService } from '@/services/userService';
import * as cookieService from '@/services/cookiesService';
import router from '../router';

export const login = (state, user) =>
     new Promise((resolve, reject) => {
      state.commit('authClear');
      cookieService.get('auth-token');

      const catchErrors = (errors) => {
            cookieService.remove('auth-token');
            state.commit('authError', errors);
            reject(errors);
      };

      loginService(user)
      .then((result) => {
            result
              .json()
              .then((authResponse) => {
                cookieService.set('auth-token', authResponse.token);
                state.commit('authSuccess', { username: user.username, authResponse }); // result);
                router.push({ path: '/' });
                resolve(result);
              })
              .catch(catchErrors);
      }).catch(catchErrors);
    });


export const validateToken = (state) => {
  const token = cookieService.get('auth-token');
  if (token != null) {
    const catchErrors = (errors) => {
      cookieService.remove('auth-token');
      state.commit('authError', errors);
    };

    validateTokenService(token)
    .then((r) => {
      if (r.ok) {
        r.json()
        .then((authResponse) => {
          cookieService.set('auth-token', authResponse.token);
          state.commit('authSuccess', { username: '', authResponse });
          router.push({ path: '/' });
        })
        .catch(catchErrors);
      } else {
        catchErrors(r.statusMessage);
      }
    })
    .catch(catchErrors);
  }
};

export const getUsers = (state) => {
  GetUsersService()
  .then((response) => {
    if (response.ok) {
      response.json()
      .then((data) => {
        state.commit('setUsers', data);
      });
    }
  });
};
