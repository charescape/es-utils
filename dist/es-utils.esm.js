/*! EsUtils 2022-03-18T09:58:21.429Z */

import { encode, decode } from 'js-base64';
import { isString, isNil } from '@charescape/js-utils';
import { parse } from 'qs';

function urlsafe_b64encode(value) {
    return encode(value)
        .replaceAll('+', '-')
        .replaceAll('/', '_')
        .replaceAll('=', '.');
}
function urlsafe_b64decode(value) {
    return decode(value
        .replaceAll('.', '=')
        .replaceAll('_', '/')
        .replaceAll('-', '+'));
}
function urlGetSearchString(wls) {
    if (!isString(wls)) {
        wls = window.location.search;
    }
    wls = wls.trimStart();
    if (wls.startsWith('http:') || wls.startsWith('https:')) {
        var arr = wls.split('?');
        if (arr.length > 1) {
            delete arr[0];
        }
        wls = arr.join('');
    }
    else {
        if (wls.charAt(0) === '?') {
            wls = wls.replace(/^[?]+/, '');
        }
    }
    return "".concat(wls);
}
function urlGetSearchParams(wls) {
    return parse(urlGetSearchString(wls));
}
function urlGetSearchParam(param, wls) {
    var params = urlGetSearchParams(wls);
    if (!isNil(params[param])) {
        return params[param];
    }
    return null;
}

export { urlGetSearchParam, urlGetSearchParams, urlGetSearchString, urlsafe_b64decode, urlsafe_b64encode };
