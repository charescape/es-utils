import axios, {AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, Method} from "axios";
import {stringify} from "qs";
import {isIntegeric, isNil, isObject, isStringFilled} from "./is";
import {swalAlert, swalToast} from "./swal";

export function ajaxRequest(method: Method, url: string, config: AxiosRequestConfig): Promise<AxiosResponse> {
  const axiosInstance: AxiosInstance = axios.create();

  axiosInstance.defaults.headers.post['Content-Type']  = 'application/json';
  axiosInstance.defaults.headers.put['Content-Type']   = 'application/json';
  axiosInstance.defaults.headers.patch['Content-Type'] = 'application/json';

  axiosInstance.interceptors.response.use(_onFulfilled, _onRejected);

  return axiosInstance.request({
    method: method,
    url: url,
    timeout: 0,

    paramsSerializer: (params: any): string => {
      return stringify(params, {
        arrayFormat: 'brackets',
      })
    },

    // see https://github.com/axios/axios/blob/master/lib/adapters/xhr.js#L126
    // see https://github.com/axios/axios/blob/master/test/specs/xsrf.spec.js#L70-L81
    // xsrfCookieName: 'XSRF-TOKEN', // default
    // xsrfHeaderName: 'X-XSRF-TOKEN', // default
    withCredentials: false,

    // can be: [arraybuffer] [document] [json] [text] [stream] [blob](browser only)
    responseType: 'json',

    // `maxContentLength` defines the max size of the http response content in bytes allowed in node.js
    // maxContentLength: 2000,

    // `maxBodyLength` (Node only option) defines the max size of the http request content in bytes allowed
    // maxBodyLength: 2000,

    ...config,
  });
}

export function ajaxGet(url: string, query?: object, config?: AxiosRequestConfig): Promise<AxiosResponse> {
  if (isNil(query)) {
    query = {};
  }

  if (isNil(config)) {
    config = {};
  }

  const mergeConfig: AxiosRequestConfig = {
    params: query,

    ...config,
  };

  return ajaxRequest('GET', url, mergeConfig);
}

export function ajaxPost(url: string, data: object, config?: AxiosRequestConfig): Promise<AxiosResponse> {
  if (isNil(config)) {
    config = {};
  }

  const mergeConfig: AxiosRequestConfig = {
    data: data,

    ...config,
  };

  // if (!isObject(mergeConfig.headers)) {
  //   mergeConfig.headers = {};
  // }
  // if (typeof mergeConfig.headers === "undefined") {
  //   mergeConfig.headers = {};
  // }
  // if (isNil(mergeConfig.headers['Content-Type'])) {
  //   mergeConfig.headers['Content-Type'] = 'application/x-www-form-urlencoded';
  // }

  return ajaxRequest('POST', url, mergeConfig);
}

export function ajaxPut(url: string, data: object, config?: AxiosRequestConfig): Promise<AxiosResponse> {
  if (isNil(config)) {
    config = {};
  }

  const mergeConfig: AxiosRequestConfig = {
    data: data,

    ...config,
  };

  return ajaxRequest('PUT', url, mergeConfig);
}

export function ajaxPatch(url: string, data: object, config?: AxiosRequestConfig): Promise<AxiosResponse> {
  if (isNil(config)) {
    config = {};
  }

  const mergeConfig: AxiosRequestConfig = {
    data: data,

    ...config,
  };

  return ajaxRequest('PATCH', url, mergeConfig);
}



export function ajaxHandleError(resp: AxiosResponse | AxiosError | object): void {
  let err: string;

  if (resp instanceof Error) {
    // Error Case 1: blocked by CORS
    if (isNil(resp.response)) {
      swalAlert({
        text: `网络繁忙（400001），请稍后再试`,
        confirmButtonText: '关 闭',
      }).then(() => {});

      return;
    }

    // Error Case 2: HTTP_STATUS !== 200
    if (isObject(resp.response) && !isNil((resp.response as any).data)) {
      resp = resp.response as object;
    }
  }

  if (!isObject(resp)) {
    swalAlert({
      text: `网络繁忙（400002），请稍后再试`,
      confirmButtonText: '关 闭',
    }).then(() => {});
  }

  const respData: {isOk: boolean, retCode: number, data?: any, err?: string} = ({...resp} as any).data;

  if (!isObject(respData)) {
    swalAlert({
      text: `网络繁忙（400003），请稍后再试`,
      confirmButtonText: '关 闭',
    }).then(() => {});
  }

  err = '网络繁忙（400000），请稍后再试';
  if (isStringFilled(respData.err)) {
    err = respData.err as string;
  }

  if (respData.retCode >= 500) {
    err = '网络繁忙（400500），请稍后再试';
  } else if (respData.retCode === 401) {
    err = `网络繁忙（400401），请稍后再试`;
  } else if (respData.retCode === 403) {
    err = '网络繁忙（400403），请稍后再试';
  } else if (respData.retCode === 404) {
    err = '网络繁忙（400404），请稍后再试';
  } else if (respData.retCode >= 400) {
    if (Array.isArray(respData.data)) {
      if (isObject(respData.data[0])) {
        if (isStringFilled(respData.data[0].message)) {
          // {
          //   retCode: 4xx,
          //   data: [
          //     {message: "An error occurred!"},
          //     ...
          //   ]
          // }
          err = respData.data[0].message;
        }
      }
    } else if (isObject(respData.data)) {
      if (isStringFilled(respData.data.err)) {
        // {
        //   retCode: 4xx,
        //   data: {
        //     err: "An error occurred!"
        //   }
        // }
        err = respData.data.err;
      } else if (isObject(respData.data.err)) {
        const errors: any[] = Object.values(respData.data.err);
        if (isStringFilled(errors[0])) {
          // {
          //   retCode: 4xx,
          //   data: {
          //     err: {
          //       desc: "An error occurred!"
          //     }
          //   }
          // }
          err = errors[0];
        } else if (Array.isArray(errors[0])) {
          if (isStringFilled(errors[0][0])) {
            // {
            //   retCode: 4xx,
            //   data: {
            //     err: {
            //       desc: ["An error occurred!"]
            //     }
            //   }
            // }
            err = errors[0][0];
          }
        }
      } else if (isStringFilled(respData.data.message)) {
        // {
        //   retCode: 4xx,
        //   data: {
        //     message: "An error occurred!"
        //   }
        // }
        err = respData.data.message;
      }
    }
  }

  swalAlert({
    text: err,
    confirmButtonText: '关 闭',
  }).then(() => {});
}

const _onFulfilled = (resp: AxiosResponse): object | false => {
  if (resp.config.responseType === 'blob') {
    return resp;
  }

  // normalize headers
  const respHeaders = {...resp.headers};
  const stdHeaders: any = {};

  Object.keys(respHeaders).forEach((k: string) => {
    const name: string = k.toLowerCase();
    let value: any = respHeaders[k];

    // for special headers
    if ((name.indexOf('x-pagination-') === 0) && isIntegeric(value)) {
      value *= 1;
    }

    stdHeaders[name] = value;
  });

  // override: resp.headers
  resp.headers = stdHeaders;

  const respData: {isOk: boolean, retCode: number, data?: any, err?: string} = {...resp}.data;

  if (respData.isOk) {
    // override: resp.data
    if (isObject(respData.data)) {
      resp.data = respData.data;
    }

    // quick toast
    if (isStringFilled(resp.data.toast)) {
      swalToast({
        title: resp.data.toast,
        icon: 'success',
      }).then(() => {});
    }

    return {...respData};
  }

  ajaxHandleError(resp);

  return false;
}

const _onRejected = (error: any): false => {
  ajaxHandleError(error);

  return false;
}
