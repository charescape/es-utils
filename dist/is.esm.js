function t(t){return Object.is(t,void 0)}function n(t){return Object.is(t,null)}function r(r){return t(r)||n(r)}function e(t){return Object.is(t,!0)}function u(t){return Object.is(t,!1)}function i(t){return e(t)||u(t)}function o(t){return("number"==typeof t||"bigint"==typeof t)&&!Object.is(t,NaN)}function f(t){return Number.isInteger(t)}function c(t){if(f(t))return!0;if(b(t)){if("0"===t)return!0;if("-"===t.charAt(0)&&(t=t.slice(1)),/^[1-9]\d*$/.test(t))return!0}return!1}function b(t){return"string"==typeof t}function O(t){return b(t)&&""!==t.trim()}function j(t){return b(t)&&""===t.trim()}function y(t){return Array.isArray(t)}function l(t){return y(t)&&t.length>0}function s(t){return y(t)&&0===t.length}function g(t){return"object"==typeof t&&!n(t)&&!y(t)}function p(t){return g(t)&&Object.keys(t).length>0}function a(t){return g(t)&&0===Object.keys(t).length}function h(t){if(!g(t))return!1;if("[object Object]"!==Object.prototype.toString.call(t))return!1;if(null===Object.getPrototypeOf(t))return!0;let n=t;for(;null!==Object.getPrototypeOf(n);)n=Object.getPrototypeOf(n);return Object.getPrototypeOf(t)===n}function m(t){return"function"==typeof t}function N(t){return"symbol"==typeof t}function P(t){return r(t)||u(t)||Object.is(t,NaN)||A(t)||j(t)}function d(t,n){return!(!b(t)||!b(n))&&-1!==t.indexOf(n)}function A(t){return o(t)&&0==t}function k(t){return!!b(t)&&/[\u4e00-\u9fa5]+/g.test(t)}export{y as isArray,s as isArrayEmpty,l as isArrayFilled,i as isBoolean,u as isFalse,P as isFalsyValue,m as isFunction,f as isInteger,c as isIntegeric,r as isNil,n as isNull,o as isNumber,A as isNumberZero,g as isObject,a as isObjectEmpty,p as isObjectFilled,h as isPlainObject,b as isString,k as isStringContainsChChars,d as isStringContainsString,j as isStringEmpty,O as isStringFilled,N as isSymbol,e as isTrue,t as isUndefined};
//# sourceMappingURL=is.esm.js.map
