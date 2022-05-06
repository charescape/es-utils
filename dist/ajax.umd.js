!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("axios"),require("qs"),require("sweetalert2")):"function"==typeof define&&define.amd?define(["exports","axios","qs","sweetalert2"],t):t((e||self).EsUtils={},e.axios,e.qs,e.sweetalert2)}(this,function(e,t,r,a){function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=/*#__PURE__*/n(t),i=/*#__PURE__*/n(a);function s(e){return Object.is(e,null)}function u(e){return function(e){return Object.is(e,void 0)}(e)||s(e)}function f(e){return"string"==typeof e}function d(e){return f(e)&&""!==e.trim()}function c(e){return"object"==typeof e&&!s(e)&&!function(e){return Array.isArray(e)}(e)}function l(e){const t={width:500,iconHtml:'<i class="bi bi-exclamation-circle text-primary"></i>',customClass:{icon:"border-0 mt-0 mb-3",confirmButton:"btn btn-primary px-4 py-2"},showClass:{popup:"animate__animated animate__fadeInUp animate__faster",backdrop:"swal2-backdrop-show"},hideClass:{popup:"animate__animated animate__fadeOutDown animate__faster",backdrop:"swal2-backdrop-hide"},...e};return i.default.fire(t)}function p(e,t,a){const n=o.default.create();return n.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",n.defaults.headers.put["Content-Type"]="application/x-www-form-urlencoded",n.defaults.headers.patch["Content-Type"]="application/x-www-form-urlencoded",n.interceptors.response.use(x,h),n.request({method:e,url:t,timeout:0,paramsSerializer:e=>r.stringify(e,{arrayFormat:"brackets"}),withCredentials:!1,responseType:"json",...a})}function m(e){let t;if(e instanceof Error){if(u(e.response))return void l({text:"网络繁忙（400001），请稍后再试",confirmButtonText:"关 闭"}).then(()=>{});c(e.response)&&!u(e.response.data)&&(e=e.response)}c(e)||l({text:"网络繁忙（400002），请稍后再试",confirmButtonText:"关 闭"}).then(()=>{});const r={...e}.data;if(c(r)||l({text:"网络繁忙（400003），请稍后再试",confirmButtonText:"关 闭"}).then(()=>{}),t="网络繁忙（400000），请稍后再试",d(r.err)&&(t=r.err),r.retCode>=500)t="网络繁忙（400500），请稍后再试";else if(401===r.retCode)t="网络繁忙（400401），请稍后再试";else if(403===r.retCode)t="网络繁忙（400403），请稍后再试";else if(404===r.retCode)t="网络繁忙（400404），请稍后再试";else if(r.retCode>=400)if(Array.isArray(r.data))c(r.data[0])&&d(r.data[0].message)&&(t=r.data[0].message);else if(c(r.data))if(d(r.data.err))t=r.data.err;else if(c(r.data.err)){const e=Object.values(r.data.err);d(e[0])?t=e[0]:Array.isArray(e[0])&&d(e[0][0])&&(t=e[0][0])}else d(r.data.message)&&(t=r.data.message);l({text:t,confirmButtonText:"关 闭"}).then(()=>{})}const x=e=>{if("blob"===e.config.responseType)return e;const t={...e.headers},r={};Object.keys(t).forEach(e=>{const a=e.toLowerCase();let n=t[e];0===a.indexOf("x-pagination-")&&function(e){if(function(e){return Number.isInteger(e)}(e))return!0;if(f(e)){if("0"===e)return!0;if("-"===e.charAt(0)&&(e=e.slice(1)),/^[1-9]\d*$/.test(e))return!0}return!1}(n)&&(n*=1),r[a]=n}),e.headers=r;const a={...e}.data;return a.isOk?(c(a.data)&&(e.data=a.data),d(e.data.toast)&&function(e){const t={toast:!0,showConfirmButton:!1,timer:3e3,...e};return i.default.fire(t)}({title:e.data.toast,icon:"success"}).then(()=>{}),e):(m(e),!1)},h=e=>(m(e),!1);e.ajaxGet=function(e,t,r){return u(t)&&(t={}),u(r)&&(r={}),p("GET",e,{params:t,...r})},e.ajaxHandleError=m,e.ajaxPatch=function(e,t,r){return u(r)&&(r={}),p("PATCH",e,{data:t,...r})},e.ajaxPost=function(e,t,r){return u(r)&&(r={}),p("POST",e,{data:t,...r})},e.ajaxPut=function(e,t,r){return u(r)&&(r={}),p("PUT",e,{data:t,...r})},e.ajaxRequest=p});
//# sourceMappingURL=ajax.umd.js.map
