function t(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var a=/*#__PURE__*/t(require("sweetalert2"));exports.swalAlert=function(t){const e={width:500,iconHtml:'<i class="bi bi-exclamation-circle text-primary"></i>',customClass:{icon:"border-0 mt-0 mb-3",confirmButton:"btn btn-primary px-4 py-2"},showClass:{popup:"animate__animated animate__fadeInUp animate__faster",backdrop:"swal2-backdrop-show"},hideClass:{popup:"animate__animated animate__fadeOutDown animate__faster",backdrop:"swal2-backdrop-hide"},...t};return a.default.fire(e)},exports.swalToast=function(t){const e={toast:!0,showConfirmButton:!1,timer:3e3,...t};return a.default.fire(e)};
//# sourceMappingURL=swal.cjs.map
