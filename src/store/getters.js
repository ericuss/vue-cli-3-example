export const isLogued = state => state.login.isLogued;
export const user = state => state.login.user;
export const users = state => state.users;
export const getToken = () => localStorage.getItem('auth-token');
