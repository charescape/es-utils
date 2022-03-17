import { ParsedQs } from "qs";
export declare function urlsafe_b64encode(value: string): string;
export declare function urlsafe_b64decode(value: string): string;
export declare function urlGetSearchString(wls?: string): string;
export declare function urlGetSearchParams(wls?: string): ParsedQs;
export declare function urlGetSearchParam(param: string, wls?: string): any;
