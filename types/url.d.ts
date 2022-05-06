import { ParsedQs } from "qs";
export declare function urlSafeBase64Encode(value: string): string;
export declare function urlSafeBase64Decode(value: string): string;
export declare function urlGetSearchString(wls?: string): string;
export declare function urlGetSearchParams(wls?: string): ParsedQs;
export declare function urlGetSearchParam(param: string, wls?: string): any;
