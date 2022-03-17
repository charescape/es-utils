const EsUtils = require('../dist/es-utils.cjs.js');

test('urlsafe_b64', () => {
  const url1 = 'https://uname:pwd@test.example.com:9090/path1/path-2?arg=value&arg2=value2#abcd';
  const b641 = 'aHR0cHM6Ly91bmFtZTpwd2RAdGVzdC5leGFtcGxlLmNvbTo5MDkwL3BhdGgxL3BhdGgtMj9hcmc9dmFsdWUmYXJnMj12YWx1ZTIjYWJjZA..';

  expect(EsUtils.urlsafe_b64encode(url1)).toBe(b641);
  expect(EsUtils.urlsafe_b64decode(b641)).toBe(url1);
});
