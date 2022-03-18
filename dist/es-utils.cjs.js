/*! EsUtils 2022-03-18T09:58:21.429Z */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsBase64 = require('js-base64');
var jsUtils = require('@charescape/js-utils');
var qs = require('qs');

function urlsafe_b64encode(value) {
    return jsBase64.encode(value)
        .replaceAll('+', '-')
        .replaceAll('/', '_')
        .replaceAll('=', '.');
}
function urlsafe_b64decode(value) {
    return jsBase64.decode(value
        .replaceAll('.', '=')
        .replaceAll('_', '/')
        .replaceAll('-', '+'));
}
function urlGetSearchString(wls) {
    if (!jsUtils.isString(wls)) {
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
    return qs.parse(urlGetSearchString(wls));
}
function urlGetSearchParam(param, wls) {
    var params = urlGetSearchParams(wls);
    if (!jsUtils.isNil(params[param])) {
        return params[param];
    }
    return null;
}

exports.urlGetSearchParam = urlGetSearchParam;
exports.urlGetSearchParams = urlGetSearchParams;
exports.urlGetSearchString = urlGetSearchString;
exports.urlsafe_b64decode = urlsafe_b64decode;
exports.urlsafe_b64encode = urlsafe_b64encode;
