/*! EsUtils 2022-03-17T03:02:01.780Z */

import { encode, decode } from 'js-base64';

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

export { urlsafe_b64decode, urlsafe_b64encode };
