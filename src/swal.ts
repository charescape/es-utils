import Swal, {SweetAlertOptions, SweetAlertResult} from "sweetalert2";

export function swalToast(config: SweetAlertOptions): Promise<SweetAlertResult<Awaited<any>>> {
  const mergeConfig: SweetAlertOptions = {
    // title: "...",
    // icon: "success",
    toast: true,
    showConfirmButton: false,
    timer: 3000,

    ...config
  };

  return Swal.fire(mergeConfig);
}

export function swalAlert(config: SweetAlertOptions): Promise<SweetAlertResult<Awaited<any>>> {
  const mergeConfig: SweetAlertOptions = {
    // html: `<p>...</p>`,
    // confirmButtonText: 'Close',
    width: 500,
    iconHtml: '<i class="bi bi-exclamation-circle text-primary"></i>',
    customClass: {
      icon: 'border-0 mt-0 mb-3',
      confirmButton: 'btn btn-primary px-4 py-2',
    },
    showClass: {
      popup: 'animate__animated animate__fadeInUp animate__faster',
      backdrop: 'swal2-backdrop-show',
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutDown animate__faster',
      backdrop: 'swal2-backdrop-hide',
    },

    ...config
  };

  return Swal.fire(mergeConfig);
}
