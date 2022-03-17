/*! EsUtils 2022-03-17T09:22:18.016Z */

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
    var result = wls.trimStart();
    if (result.charAt(0) === '?') {
        result = result.replace(/^[?]+/, '');
    }
    return result;
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
