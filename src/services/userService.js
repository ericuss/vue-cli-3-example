import ServiceCore from '@/services/core/serviceCore';

const urlBase = 'api/usersModule/accounts/';

export const login = (user) => {
    const url = `${urlBase}token`;
    return ServiceCore.post(url, user);
};

export const validateToken = (token) => {
    const url = `${urlBase}validatetoken`;
    return ServiceCore.post(url, { token });
};

export const get = () => {
    const url = `${urlBase}`;
    return ServiceCore.get(url);
};
