/*! EsUtils 2022-03-17T09:22:18.016Z */

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
    var result = wls.trimStart();
    if (result.charAt(0) === '?') {
        result = result.replace(/^[?]+/, '');
    }
    return result;
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
