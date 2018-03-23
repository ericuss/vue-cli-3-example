/* global __API_URL__ */

import { getToken } from '@/services/cookiesService';

const urlApi = __API_URL__;
const urlBase = `${urlApi}api/usersModule/accounts/`;

const fetchObject = data => ({
        body: data != null ? JSON.stringify(data) : null, // must match 'Content-Type' header
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, same-origin, *omit
        headers: {
            'content-type': 'application/json',
            Authorization: `Bearer ${getToken()}`,
        },
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, cors, *same-origin
        // redirect: 'follow', // *manual, follow, error
        referrer: 'no-referrer', // *client, no-referrer
    });

export const test = () => 'test';

export const login = (user) => {
    const url = `${urlBase}token`;

    return fetch(url, { ...fetchObject(user), ...{ method: 'POST' } });
};

export const validateToken = (token) => {
    const url = `${urlBase}validatetoken`;
    const options = {
        ...fetchObject({ token }),
        ...{
            method: 'POST',
            // headers: {
            //     'content-type': 'application/json',
            //     Authorization: `Bearer ${token}`,
            // },
        },
    };
    return fetch(url, options);
};

export const get = () => {
    const url = `${urlBase}`;
    const options = {
        ...fetchObject(),
        ...{
            method: 'GET',
            // headers: {
            //     'content-type': 'application/json',
            //     Authorization: `Bearer ${token}`,
            // },
        },
    };
    return fetch(url, options);
};

// {
//     body: JSON.stringify(user), // must match 'Content-Type' header
//     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//     credentials: 'same-origin', // include, same-origin, *omit
//     headers: {
//       'content-type': 'application/json',
//     },
//     method: 'POST', // *GET, POST, PUT, DELETE, etc.
//     mode: 'cors', // no-cors, cors, *same-origin
//     // redirect: 'follow', // *manual, follow, error
//     referrer: 'no-referrer', // *client, no-referrer
//   }
