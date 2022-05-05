import { AxiosError, AxiosRequestConfig, AxiosResponse, Method } from "axios";
export declare function ajaxRequest(method: Method, url: string, config: AxiosRequestConfig): Promise<AxiosResponse>;
export declare function ajaxGet(url: string, query?: object, config?: AxiosRequestConfig): Promise<AxiosResponse>;
export declare function ajaxPost(url: string, data: object, config?: AxiosRequestConfig): Promise<AxiosResponse>;
export declare function ajaxPut(url: string, data: object, config?: AxiosRequestConfig): Promise<AxiosResponse>;
export declare function ajaxPatch(url: string, data: object, config?: AxiosRequestConfig): Promise<AxiosResponse>;
export declare function ajaxHandleError(resp: AxiosResponse | AxiosError | object): void;
