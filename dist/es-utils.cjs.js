/*! EsUtils 2022-03-17T04:42:24.109Z */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsBase64 = require('js-base64');

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

exports.urlsafe_b64decode = urlsafe_b64decode;
exports.urlsafe_b64encode = urlsafe_b64encode;
