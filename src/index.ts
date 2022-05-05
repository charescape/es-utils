import {encode, decode} from "js-base64";
import {isNil, isString} from "./is";
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

  wls = (wls as string).trimStart();

  if ((wls as string).startsWith('http:') || (wls as string).startsWith('https:')) {
    const arr = (wls as string).split('?');
    if (arr.length > 1) {
      delete arr[0];
    }

    wls = arr.join('');
  } else {
    if (wls.charAt(0) === '?') {
      wls = wls.replace(/^[?]+/, '');
    }
  }

  return `${wls}`;
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
