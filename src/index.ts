import {encode, decode} from "js-base64";

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
