export const sample = (state, isVisible) => {
  console.log('sampleMutation');
  console.log(isVisible);
  //	state.menu.drawer = isVisible;
	return state;
};

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
