/*! EsUtils 2022-03-17T04:42:24.109Z */

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('js-base64')) :
    typeof define === 'function' && define.amd ? define(['exports', 'js-base64'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.EsUtils = {}, global.jsBase64));
})(this, (function (exports, jsBase64) { 'use strict';

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

    Object.defineProperty(exports, '__esModule', { value: true });

}));
