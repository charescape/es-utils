import{encode as t,decode as r}from"js-base64";import{parse as e}from"qs";function n(r){return t(r).replaceAll("+","-").replaceAll("/","_").replaceAll("=",".")}function l(t){return r(t.replaceAll(".","=").replaceAll("_","/").replaceAll("-","+"))}function c(t){if("string"!=typeof t&&(t=window.location.search),(t=t.trimStart()).startsWith("http:")||t.startsWith("https:")){const r=t.split("?");r.length>1&&delete r[0],t=r.join("")}else"?"===t.charAt(0)&&(t=t.replace(/^[?]+/,""));return""+t}function i(t){return e(c(t))}function o(t,r){const e=i(r);return function(t){return Object.is(t,void 0)}(n=e[t])||function(t){return Object.is(t,null)}(n)?null:e[t];var n}export{o as urlGetSearchParam,i as urlGetSearchParams,c as urlGetSearchString,l as urlSafeBase64Decode,n as urlSafeBase64Encode};
//# sourceMappingURL=url.esm.js.map
