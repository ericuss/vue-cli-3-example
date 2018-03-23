import { getToken } from '@/services/cookiesService';
import { urlApi } from '@/constants';

export default class ServiceCore {
	static getById(urlRaw, id) {
        const url = ServiceCore.formatUrlWithId(urlRaw, id);
        return ServiceCore.get(url);
	}
	static get(url) {
        return ServiceCore.send('GET', url, null, null);
	}
	static patch(url, data, options) {
        return ServiceCore.send('PATCH', url, data, options);
	}
	static post(url, data, options) {
        return ServiceCore.send('POST', url, data, options);
	}
	static put(url, data, options) {
        return ServiceCore.send('PUT', url, data, options);
	}
	static delete(url, options) {
        return ServiceCore.send('DELETE', url, null, options);
    }
    static send(verb, url, data, optionsRaw) {
        const options = {
            ...ServiceCore.baseOptions(data, optionsRaw),
            ...{ method: verb },
        };

        return fetch(ServiceCore.formatFullUrl(url), options);
    }
    static formatFullUrl(urlRaw) {
        let url = urlRaw || '';
        if (urlApi[urlApi.length - 1] === '/' && url[0] === '/') {
            url = url.substring(1, url.length);
        }
        return urlApi + url;
    }
	static formatUrlWithId(urlRaw, id) {
		let url = urlRaw || '';

		if (id != null && id.toString().trim() !== '') {
			if (url.trim() !== '' && url.substring(url.length - 1) !== '/') {
				url += '/';
			}

			url += id;
		}

		return url;
    }
	static baseOptions(data, optionsRaw) {
        const options = optionsRaw || {};
        return {
            body: data != null ? JSON.stringify(data) : null, // must match 'Content-Type' header
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, same-origin, *omit
            headers: {
                'content-type': options.contentType || 'application/json',
                Authorization: `Bearer ${getToken()}`,
            },
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, cors, *same-origin
            // redirect: 'follow', // *manual, follow, error
            referrer: 'no-referrer', // *client, no-referrer
        };
	}
}
