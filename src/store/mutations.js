export const authClear = (state) => {
  Object.assign(state, {
    login: {
      isLogued: false,
      user: null,
      userId: null,
      error: null,
      auth: null,
    },
  });

	return state;
};

export const authSuccess = (state, data) => {
  Object.assign(state, {
    login: {
      isLogued: true,
      user: data.username,
      userId: null,
      error: null,
      auth: data.authResponse,
    },
  });
};

export const authError = (state, error) => {
  Object.assign(state, {
    login: {
      error,
    },
  });
};

export const setUserLogin = (state, user) => {
  Object.assign(state, { login: user });
};

export const setUsers = (state, users) => {
  Object.assign(state, { users });
};
