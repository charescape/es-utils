
// Undefined, Null
export function isUndefined(value: any): boolean {
  return Object.is(value, undefined);
}

export function isNull(value: any): boolean {
  return Object.is(value, null);
}

export function isNil(value: any): boolean {
  return isUndefined(value) || isNull(value);
}


// Boolean
export function isTrue(value: any): boolean {
  return Object.is(value, true);
}

export function isFalse(value: any): boolean {
  return Object.is(value, false);
}

export function isBoolean(value: any): boolean {
  return isTrue(value) || isFalse(value);
}


// Number
export function isNumber(value: any): boolean {
  return ((typeof value === "number") || (typeof value === "bigint")) && !Object.is(value, NaN);
}

export function isInteger(value: any): boolean {
  return Number.isInteger(value);
}

export function isIntegeric(value: any): boolean {
  if (isInteger(value)) {
    return true;
  }

  if (isString(value)) {
    if (value === "0") {
      return true;
    }

    if (value.charAt(0) === "-") {
      value = value.slice(1);
    }

    if (/^[1-9]\d*$/.test(value)) {
      return true;
    }
  }

  return false;
}


// String
export function isString(value: any): boolean {
  return (typeof value === "string");
}

export function isStringFilled(value: any): boolean {
  return isString(value) && value.trim() !== "";
}

export function isStringEmpty(value: any): boolean {
  return isString(value) && value.trim() === "";
}


// Array
export function isArray(value: any): boolean {
  return Array.isArray(value);
}

export function isArrayFilled(value: any): boolean {
  return isArray(value) && value.length > 0;
}

export function isArrayEmpty(value: any): boolean {
  return isArray(value) && value.length === 0;
}


// Object
export function isObject(value: any): boolean {
  return (typeof value === "object") && !isNull(value) && !isArray(value);
}

export function isObjectFilled(value: any): boolean {
  return isObject(value) && Object.keys(value).length > 0;
}

export function isObjectEmpty(value: any): boolean {
  return isObject(value) && Object.keys(value).length === 0;
}

export function isPlainObject(value: any): boolean {
  if (!isObject(value)) {
    return false;
  }

  // eg: Math [object Math], Error [object Function] ...
  if (Object.prototype.toString.call(value) !== "[object Object]") {
    return false;
  }

  // following axios: https://github.com/axios/axios/blob/384b7e6994c7392e4a39056ee5bb56755bcac11a/lib/utils.js#L118
  const prototype = Object.getPrototypeOf(value);

  return prototype === null || prototype === Object.prototype;
}


// Function
export function isFunction(value: any): boolean {
  return (typeof value === "function");
}


// Symbol
export function isSymbol(value: any): boolean {
  return (typeof value === "symbol");
}


// Others
export function isFalsyValue(value: any): boolean {
  return isNil(value) || isFalse(value) || Object.is(value, NaN) || isNumberZero(value) || isStringEmpty(value);
}

export function isStringContainsString(haystack: any, needle: any): boolean {
  if (!isString(haystack) || !isString(needle)) {
    return false;
  }

  return haystack.indexOf(needle) !== -1;
}

export function isNumberZero(value: any): boolean {
  return isNumber(value) && (value == 0);
}

export function isStringContainsChChars(value: any): boolean {
  if (!isString(value)) {
    return false;
  }

  return /[\u4e00-\u9fa5]+/g.test(value);
}
