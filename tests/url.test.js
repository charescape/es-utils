const EsUtils = require('../dist/es-utils.cjs.js');

test('urlsafe_b64*', () => {
  const url1 = 'https://uname:pwd@test.example.com:9090/path1/path-2?arg=value&arg2=value2#abcd';
  const b641 = 'aHR0cHM6Ly91bmFtZTpwd2RAdGVzdC5leGFtcGxlLmNvbTo5MDkwL3BhdGgxL3BhdGgtMj9hcmc9dmFsdWUmYXJnMj12YWx1ZTIjYWJjZA..';

  expect(EsUtils.urlSafeBase64Encode(url1)).toBe(b641);
  expect(EsUtils.urlSafeBase64Decode(b641)).toBe(url1);
});


const testSearchString = 'q=charCodeAt+charAt&cvid=testcvid&aqs=edge..69i57.test&FORM=ANAB01&PC=U531';
const testSearchParams = {
  "q": "charCodeAt charAt",
  "cvid": "testcvid",
  "aqs": "edge..69i57.test",
  "FORM": "ANAB01",
  "PC": "U531",
};

test('urlGetSearchString', () => {
  // expect(EsUtils.urlGetSearchString(test_uri + "?" + testSearchString)).toBe(testSearchString);
  expect(EsUtils.urlGetSearchString("?" + testSearchString)).toBe(testSearchString);
  expect(EsUtils.urlGetSearchString(testSearchString)).toBe(testSearchString);

  expect(EsUtils.urlGetSearchString("??" + testSearchString)).toBe(testSearchString);
  expect(EsUtils.urlGetSearchString("  ??" + testSearchString)).toBe(testSearchString);
  expect(EsUtils.urlGetSearchString("  " + testSearchString)).toBe(testSearchString);

  expect(EsUtils.urlGetSearchString(testSearchString + " ")).toBe(testSearchString + " ");
  expect(EsUtils.urlGetSearchString(testSearchString + "?")).toBe(testSearchString + "?");
  expect(EsUtils.urlGetSearchString(testSearchString + "? ")).toBe(testSearchString + "? ");
});

test('urlGetSearchParams', () => {
  // expect(EsUtils.urlGetSearchParams(test_uri + "?" + testSearchString)).toStrictEqual(testSearchParams);
  expect(EsUtils.urlGetSearchParams("?" + testSearchString)).toStrictEqual(testSearchParams);
  expect(EsUtils.urlGetSearchParams(testSearchString)).toStrictEqual(testSearchParams);

  expect(EsUtils.urlGetSearchParams("??" + testSearchString)).toStrictEqual(testSearchParams);
  expect(EsUtils.urlGetSearchParams("  ??" + testSearchString)).toStrictEqual(testSearchParams);
  expect(EsUtils.urlGetSearchParams("  " + testSearchString)).toStrictEqual(testSearchParams);

  expect(EsUtils.urlGetSearchParams(testSearchString + " ")).toStrictEqual({...testSearchParams, PC: testSearchParams.PC + " "});
  expect(EsUtils.urlGetSearchParams(testSearchString + "?")).toStrictEqual({...testSearchParams, PC: testSearchParams.PC + "?"});
  expect(EsUtils.urlGetSearchParams(testSearchString + "? ")).toStrictEqual({...testSearchParams, PC: testSearchParams.PC + "? "});
});

test('urlGetSearchParam', () => {
  // expect(EsUtils.urlGetSearchParam("aqs", test_uri + "?" + testSearchString)).toBe(testSearchParams.aqs);
  expect(EsUtils.urlGetSearchParam("aqs", "?" + testSearchString)).toBe(testSearchParams.aqs);
  expect(EsUtils.urlGetSearchParam("aqs", testSearchString)).toBe(testSearchParams.aqs);

  expect(EsUtils.urlGetSearchParam("aqs", "??" + testSearchString)).toBe(testSearchParams.aqs);
  expect(EsUtils.urlGetSearchParam("aqs", "  ??" + testSearchString)).toBe(testSearchParams.aqs);
  expect(EsUtils.urlGetSearchParam("aqs", "  " + testSearchString)).toBe(testSearchParams.aqs);

  expect(EsUtils.urlGetSearchParam("aqs", testSearchString + " ")).toBe( testSearchParams.aqs);
  expect(EsUtils.urlGetSearchParam("aqs", testSearchString + "?")).toBe(testSearchParams.aqs);
  expect(EsUtils.urlGetSearchParam("aqs", testSearchString + "? ")).toBe(testSearchParams.aqs);
});
