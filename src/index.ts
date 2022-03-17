import {encode, decode} from "js-base64";
import {isNil, isString} from "@charescape/js-utils";
import {parse, ParsedQs} from "qs";

export function urlsafe_b64encode(value: string): string {
  return encode(value)
    .replaceAll('+', '-')
    .replaceAll('/', '_')
    .replaceAll('=', '.')
    ;
}

export function urlsafe_b64decode(value: string): string {
  return decode(
    value
      .replaceAll('.', '=')
      .replaceAll('_', '/')
      .replaceAll('-', '+')
  );
}

export function urlGetSearchString(wls?: string): string {
  if (!isString(wls)) {
    wls = window.location.search;
  }

  let result: string = (wls as string).trimStart();

  if (result.charAt(0) === '?') {
    result = result.replace(/^[?]+/, '');
  }

  return result;
}

export function urlGetSearchParams(wls?: string): ParsedQs {
  return parse(urlGetSearchString(wls));
}

export function urlGetSearchParam(param: string, wls?: string): any {
  const params = urlGetSearchParams(wls);

  if (!isNil(params[param])) {
    return params[param];
  }

  return null;
}
