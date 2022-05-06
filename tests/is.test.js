const EsUtils = require('../dist/es-utils.umd.js');

// Undefined, Null
test('isUndefined', () => {
  expect(EsUtils.isUndefined( undefined )).toBe(true);

  expect(EsUtils.isUndefined( null )).toBe(false);
});

test('isNull', () => {
  expect(EsUtils.isNull( null )).toBe(true);

  expect(EsUtils.isNull( undefined )).toBe(false);
});

test('isNil', () => {
  expect(EsUtils.isNil( null )).toBe(true);
  expect(EsUtils.isNil( undefined )).toBe(true);
});


// Boolean
test('isTrue', () => {
  expect(EsUtils.isTrue( true )).toBe(true);

  expect(EsUtils.isTrue( false )).toBe(false);
});

test('isFalse', () => {
  expect(EsUtils.isFalse( true )).toBe(false);

  expect(EsUtils.isFalse( false )).toBe(true);
});

test('isBoolean', () => {
  expect(EsUtils.isBoolean( true )).toBe(true);
  expect(EsUtils.isBoolean( false )).toBe(true);
});


// Number
test('isNumber', () => {
  expect(EsUtils.isNumber( 1 )).toBe(true);
  expect(EsUtils.isNumber( +1 )).toBe(true);
  expect(EsUtils.isNumber( -1 )).toBe(true);
  expect(EsUtils.isNumber( 0 )).toBe(true);
  expect(EsUtils.isNumber( 0.0 )).toBe(true);
  expect(EsUtils.isNumber( 0.00 )).toBe(true);
  expect(EsUtils.isNumber( 0x0 )).toBe(true);
  expect(EsUtils.isNumber( -0 )).toBe(true);
  expect(EsUtils.isNumber( -0.0 )).toBe(true);
  expect(EsUtils.isNumber( -0.00 )).toBe(true);
  expect(EsUtils.isNumber( -0x0 )).toBe(true);
  expect(EsUtils.isNumber( 0n )).toBe(true);
  expect(EsUtils.isNumber( 0x0n )).toBe(true);

  expect(EsUtils.isNumber( NaN )).toBe(false);
  expect(EsUtils.isNumber( Number.NaN )).toBe(false);
  expect(EsUtils.isNumber( null )).toBe(false);
  expect(EsUtils.isNumber( undefined )).toBe(false);
  expect(EsUtils.isNumber( '' )).toBe(false);
  expect(EsUtils.isNumber( ' ' )).toBe(false);
  expect(EsUtils.isNumber( '0' )).toBe(false);
  expect(EsUtils.isNumber( '0.0' )).toBe(false);
  expect(EsUtils.isNumber( false )).toBe(false);
  expect(EsUtils.isNumber( {} )).toBe(false);
});

// Integer
test('isInteger', () => {
  expect(EsUtils.isInteger( 0 )).toBe(true);
  expect(EsUtils.isInteger( 1 )).toBe(true);
  expect(EsUtils.isInteger( -1 )).toBe(true);

  expect(EsUtils.isInteger( NaN )).toBe(false);
  expect(EsUtils.isInteger( Number.NaN )).toBe(false);
  expect(EsUtils.isInteger( null )).toBe(false);
  expect(EsUtils.isInteger( undefined )).toBe(false);
  expect(EsUtils.isInteger( '' )).toBe(false);
  expect(EsUtils.isInteger( ' ' )).toBe(false);
  expect(EsUtils.isInteger( '0' )).toBe(false);
  expect(EsUtils.isInteger( false )).toBe(false);
  expect(EsUtils.isInteger( {} )).toBe(false);
});

// Integeric
test('isIntegeric', () => {
  expect(EsUtils.isIntegeric( 0 )).toBe(true);
  expect(EsUtils.isIntegeric( 1 )).toBe(true);
  expect(EsUtils.isIntegeric( -1 )).toBe(true);

  expect(EsUtils.isIntegeric( '0' )).toBe(true);
  expect(EsUtils.isIntegeric( '-0' )).toBe(false);
  expect(EsUtils.isIntegeric( '+0' )).toBe(false);
  expect(EsUtils.isIntegeric( '00' )).toBe(false);

  expect(EsUtils.isIntegeric( '1' )).toBe(true);
  expect(EsUtils.isIntegeric( '-1' )).toBe(true);

  expect(EsUtils.isIntegeric( '123' )).toBe(true);
  expect(EsUtils.isIntegeric( '-123' )).toBe(true);

  expect(EsUtils.isIntegeric( '0123' )).toBe(false);

  expect(EsUtils.isIntegeric( NaN )).toBe(false);
  expect(EsUtils.isIntegeric( Number.NaN )).toBe(false);
  expect(EsUtils.isIntegeric( null )).toBe(false);
  expect(EsUtils.isIntegeric( undefined )).toBe(false);
  expect(EsUtils.isIntegeric( '' )).toBe(false);
  expect(EsUtils.isIntegeric( ' ' )).toBe(false);
  expect(EsUtils.isIntegeric( false )).toBe(false);
  expect(EsUtils.isIntegeric( {} )).toBe(false);
});


// String
test('isString', () => {
  expect(EsUtils.isString( 'abc' )).toBe(true);
  expect(EsUtils.isString( '0' )).toBe(true);
  expect(EsUtils.isString( '' )).toBe(true);
  expect(EsUtils.isString( ' ' )).toBe(true);

  expect(EsUtils.isString( NaN )).toBe(false);
  expect(EsUtils.isString( Number.NaN )).toBe(false);
  expect(EsUtils.isString( null )).toBe(false);
  expect(EsUtils.isString( undefined )).toBe(false);
  expect(EsUtils.isString( false )).toBe(false);
  expect(EsUtils.isString( {} )).toBe(false);
});

test('isStringFilled', () => {
  expect(EsUtils.isStringFilled( 'abc' )).toBe(true);
  expect(EsUtils.isStringFilled( '0' )).toBe(true);

  expect(EsUtils.isStringFilled( '' )).toBe(false);
  expect(EsUtils.isStringFilled( ' ' )).toBe(false);
});

test('isStringEmpty', () => {
  expect(EsUtils.isStringEmpty( '' )).toBe(true);
  expect(EsUtils.isStringEmpty( ' ' )).toBe(true);

  expect(EsUtils.isStringEmpty( 'abc' )).toBe(false);
  expect(EsUtils.isStringEmpty( '0' )).toBe(false);
});


// Array
test('isArray', () => {
  expect(EsUtils.isArray( [] )).toBe(true);
  expect(EsUtils.isArray( [1] )).toBe(true);
  expect(EsUtils.isArray( new Array() )).toBe(true);
  expect(EsUtils.isArray( new Array('a', 'b', 'c', 'd') )).toBe(true);
  expect(EsUtils.isArray( new Array(3) )).toBe(true);
  expect(EsUtils.isArray( Array.prototype )).toBe(true);

  expect(EsUtils.isArray(  )).toBe(false);
  expect(EsUtils.isArray( {} )).toBe(false);
  expect(EsUtils.isArray( null )).toBe(false);
  expect(EsUtils.isArray( undefined )).toBe(false);
  expect(EsUtils.isArray( 17 )).toBe(false);
  expect(EsUtils.isArray( 'Array' )).toBe(false);
  expect(EsUtils.isArray( true )).toBe(false);
  expect(EsUtils.isArray( false )).toBe(false);
  expect(EsUtils.isArray( new Uint8Array(32) )).toBe(false);
  expect(EsUtils.isArray( { __proto__: Array.prototype } )).toBe(false);
});

test('isArrayEmpty', () => {
  expect(EsUtils.isArrayEmpty( [] )).toBe(true);
  expect(EsUtils.isArrayEmpty( new Array() )).toBe(true);
  expect(EsUtils.isArrayEmpty( Array.prototype )).toBe(true);

  expect(EsUtils.isArrayEmpty( [1] )).toBe(false);
  expect(EsUtils.isArrayEmpty( new Array('a', 'b', 'c', 'd') )).toBe(false);
  expect(EsUtils.isArrayEmpty( new Array(3) )).toBe(false);
});

test('isArrayFilled', () => {
  expect(EsUtils.isArrayFilled( [1] )).toBe(true);
  expect(EsUtils.isArrayFilled( new Array('a', 'b', 'c', 'd') )).toBe(true);
  expect(EsUtils.isArrayFilled( new Array(3) )).toBe(true);

  expect(EsUtils.isArrayFilled( [] )).toBe(false);
  expect(EsUtils.isArrayFilled( new Array() )).toBe(false);
  expect(EsUtils.isArrayFilled( Array.prototype )).toBe(false);
});


// Object
test('isObject', () => {
  function ObjectConstructor() {}
  ObjectConstructor.prototype.constructor = Object;

  function FnFoo() { this.a = 1 }


  expect(EsUtils.isObject( {} )).toBe(true);
  expect(EsUtils.isObject( {foo: 'bar'} )).toBe(true);
  expect(EsUtils.isObject( {valueOf: 0} )).toBe(true);
  expect(EsUtils.isObject( /foo/ )).toBe(true);

  expect(EsUtils.isObject( Math )).toBe(true);
  expect(EsUtils.isObject( Object.prototype )).toBe(true);
  expect(EsUtils.isObject( Object.create(null) )).toBe(true);
  expect(EsUtils.isObject( Object.create(Object.prototype) )).toBe(true);
  expect(EsUtils.isObject( Object.create({}) )).toBe(true);
  expect(EsUtils.isObject( Object.create({foo: 'bar'}) )).toBe(true);

  (function () {
    expect(EsUtils.isObject(arguments)).toBe(true);
  })();
  (function (a, b) {
    expect(EsUtils.isObject(arguments)).toBe(true);
  })('a', 'b');

  expect(EsUtils.isObject( {constructor: FnFoo} )).toBe(true);
  expect(EsUtils.isObject( new ObjectConstructor )).toBe(true);
  expect(EsUtils.isObject( new FnFoo )).toBe(true);

  const foo = new FnFoo; foo.constructor = Object;
  expect(EsUtils.isObject(foo)).toBe(true);


  // not Nil, not Array
  expect(EsUtils.isObject( null )).toBe(false);
  expect(EsUtils.isObject( undefined )).toBe(false);
  expect(EsUtils.isObject( [] )).toBe(false);
  expect(EsUtils.isObject( ['foo', 'bar'] )).toBe(false);
  expect(EsUtils.isObject( new Array() )).toBe(false);
  expect(EsUtils.isObject( new Array('a', 'b', 'c', 'd') )).toBe(false);
  expect(EsUtils.isObject( new Array(3) )).toBe(false);
  expect(EsUtils.isObject( Array.prototype )).toBe(false);

  // not others
  expect(EsUtils.isObject( 'abc' )).toBe(false);
  expect(EsUtils.isObject( 1 )).toBe(false);
  expect(EsUtils.isObject( 1n )).toBe(false);
  expect(EsUtils.isObject( Error )).toBe(false);
  expect(EsUtils.isObject( NaN )).toBe(false);
  expect(EsUtils.isObject( Number.NaN )).toBe(false);
  expect(EsUtils.isObject( function () {} )).toBe(false);
});

test('isObjectEmpty', () => {
  expect(EsUtils.isObjectEmpty( {} )).toBe(true);
  expect(EsUtils.isObjectEmpty( /foo/ )).toBe(true);
  expect(EsUtils.isObjectEmpty( Math )).toBe(true);
  expect(EsUtils.isObjectEmpty( Object.prototype )).toBe(true);
  expect(EsUtils.isObjectEmpty( Object.create(null) )).toBe(true);
  expect(EsUtils.isObjectEmpty( Object.create(Object.prototype) )).toBe(true);
  expect(EsUtils.isObjectEmpty( Object.create({}) )).toBe(true);

  expect(EsUtils.isObjectEmpty( Object.create({foo: 'bar'}) )).toBe(true);

  (function () {
    expect(EsUtils.isObjectEmpty(arguments)).toBe(true);
  })();


  expect(EsUtils.isObjectEmpty( {foo: 'bar'} )).toBe(false);
  expect(EsUtils.isObjectEmpty( {valueOf: 0} )).toBe(false);
  (function (a, b) {
    expect(EsUtils.isObjectEmpty(arguments)).toBe(false);
  })('a', 'b');
});

test('isObjectFilled', () => {
  expect(EsUtils.isObjectFilled( {foo: 'bar'} )).toBe(true);
  expect(EsUtils.isObjectFilled( {valueOf: 0} )).toBe(true);
  (function (a, b) {
    expect(EsUtils.isObjectFilled(arguments)).toBe(true);
  })('a', 'b');

  expect(EsUtils.isObjectFilled( {} )).toBe(false);
  expect(EsUtils.isObjectFilled( /foo/ )).toBe(false);
  expect(EsUtils.isObjectFilled( Math )).toBe(false);
  expect(EsUtils.isObjectFilled( Object.prototype )).toBe(false);
  expect(EsUtils.isObjectFilled( Object.create(null) )).toBe(false);
  expect(EsUtils.isObjectFilled( Object.create(Object.prototype) )).toBe(false);
  expect(EsUtils.isObjectFilled( Object.create({}) )).toBe(false);

  expect(EsUtils.isObjectFilled( Object.create({foo: 'bar'}) )).toBe(false);

  (function () {
    expect(EsUtils.isObjectFilled(arguments)).toBe(false);
  })();
});


// Function
test('isFunction', () => {
  expect(EsUtils.isFunction( function () {} )).toBe(true);
  expect(EsUtils.isFunction( Array.isArray )).toBe(true);
  expect(EsUtils.isFunction( Error )).toBe(true);

  expect(EsUtils.isFunction(  )).toBe(false);
  expect(EsUtils.isFunction( {} )).toBe(false);
  expect(EsUtils.isFunction( null )).toBe(false);
  expect(EsUtils.isFunction( undefined )).toBe(false);
  expect(EsUtils.isFunction( 17 )).toBe(false);
  expect(EsUtils.isFunction( '' )).toBe(false);
  expect(EsUtils.isFunction( true )).toBe(false);
  expect(EsUtils.isFunction( false )).toBe(false);
});

// Symbol
test('isSymbol', () => {
  expect(EsUtils.isSymbol( Symbol() )).toBe(true);
  expect(EsUtils.isSymbol( Symbol('foo') )).toBe(true);

  expect(EsUtils.isSymbol(  )).toBe(false);
  expect(EsUtils.isSymbol( function () {} )).toBe(false);
  expect(EsUtils.isSymbol( {} )).toBe(false);
  expect(EsUtils.isSymbol( null )).toBe(false);
  expect(EsUtils.isSymbol( undefined )).toBe(false);
  expect(EsUtils.isSymbol( 17 )).toBe(false);
  expect(EsUtils.isSymbol( '' )).toBe(false);
  expect(EsUtils.isSymbol( true )).toBe(false);
  expect(EsUtils.isSymbol( false )).toBe(false);
});


// Others
test('isPlainObject', () => {
  function ObjectConstructor() {}
  ObjectConstructor.prototype.constructor = Object;

  function FnFoo() { this.a = 1 }

  expect(EsUtils.isPlainObject( {} )).toBe(true);
  expect(EsUtils.isPlainObject( {foo: 'bar'} )).toBe(true);
  expect(EsUtils.isPlainObject( {valueOf: 0} )).toBe(true);
  expect(EsUtils.isPlainObject( Object.prototype )).toBe(true);
  expect(EsUtils.isPlainObject( Object.create(null) )).toBe(true);
  expect(EsUtils.isPlainObject( Object.create(Object.prototype) )).toBe(true);

  expect(EsUtils.isPlainObject( {constructor: FnFoo} )).toBe(true);

  expect(EsUtils.isPlainObject( Object.create({}) )).toBe(false);
  expect(EsUtils.isPlainObject( Object.create({foo: 'bar'}) )).toBe(false);
  expect(EsUtils.isPlainObject( new ObjectConstructor )).toBe(false);

  expect(EsUtils.isPlainObject( /foo/ )).toBe(false);
  expect(EsUtils.isPlainObject( new FnFoo )).toBe(false);
  expect(EsUtils.isPlainObject( Math )).toBe(false);

  (function () {
    expect(EsUtils.isPlainObject(arguments)).toBe(false);
  })();
  (function (a, b) {
    expect(EsUtils.isPlainObject(arguments)).toBe(false);
  })('a', 'b');

  const foo = new FnFoo; foo.constructor = Object;
  expect(EsUtils.isPlainObject(foo)).toBe(false);
});

test('isNumberZero', () => {
  expect(EsUtils.isNumberZero( 0 )).toBe(true);
  expect(EsUtils.isNumberZero( 0.0 )).toBe(true);
  expect(EsUtils.isNumberZero( 0.00 )).toBe(true);
  expect(EsUtils.isNumberZero( 0.000 )).toBe(true);
  expect(EsUtils.isNumberZero( 0x0 )).toBe(true);
  expect(EsUtils.isNumberZero( -0 )).toBe(true);
  expect(EsUtils.isNumberZero( -0.0 )).toBe(true);
  expect(EsUtils.isNumberZero( -0.00 )).toBe(true);
  expect(EsUtils.isNumberZero( -0.000 )).toBe(true);
  expect(EsUtils.isNumberZero( -0x0 )).toBe(true);
  expect(EsUtils.isNumberZero( 0n )).toBe(true);
  expect(EsUtils.isNumberZero( 0x0n )).toBe(true);

  expect(EsUtils.isNumberZero( null )).toBe(false);
  expect(EsUtils.isNumberZero( undefined )).toBe(false);
  expect(EsUtils.isNumberZero( '' )).toBe(false);
  expect(EsUtils.isNumberZero( ' ' )).toBe(false);
  expect(EsUtils.isNumberZero( '0' )).toBe(false);
  expect(EsUtils.isNumberZero( '0.0' )).toBe(false);
  expect(EsUtils.isNumberZero( false )).toBe(false);
  expect(EsUtils.isNumberZero( 1 )).toBe(false);
  expect(EsUtils.isNumberZero( 0.1 )).toBe(false);
  expect(EsUtils.isNumberZero( 0.01 )).toBe(false);
  expect(EsUtils.isNumberZero( -1 )).toBe(false);
  expect(EsUtils.isNumberZero( -0.1 )).toBe(false);
  expect(EsUtils.isNumberZero( -0.01 )).toBe(false);
  expect(EsUtils.isNumberZero( NaN )).toBe(false);
  expect(EsUtils.isNumberZero( Number.NaN )).toBe(false);
});

test('isFalsyValue', () => {
  expect(EsUtils.isFalsyValue( false )).toBe(true);

  // from isNumberZero
  expect(EsUtils.isFalsyValue( 0 )).toBe(true);
  expect(EsUtils.isFalsyValue( 0.0 )).toBe(true);
  expect(EsUtils.isFalsyValue( 0.00 )).toBe(true);
  expect(EsUtils.isFalsyValue( 0.000 )).toBe(true);
  expect(EsUtils.isFalsyValue( 0x0 )).toBe(true);
  expect(EsUtils.isFalsyValue( -0 )).toBe(true);
  expect(EsUtils.isFalsyValue( -0.0 )).toBe(true);
  expect(EsUtils.isFalsyValue( -0.00 )).toBe(true);
  expect(EsUtils.isFalsyValue( -0.000 )).toBe(true);
  expect(EsUtils.isFalsyValue( -0x0 )).toBe(true);
  expect(EsUtils.isFalsyValue( 0n )).toBe(true);
  expect(EsUtils.isFalsyValue( 0x0n )).toBe(true);
  expect(EsUtils.isFalsyValue( NaN )).toBe(true);
  expect(EsUtils.isFalsyValue( Number.NaN )).toBe(true);

  // from isStringEmpty
  expect(EsUtils.isFalsyValue( '' )).toBe(true);
  expect(EsUtils.isFalsyValue( ' ' )).toBe(true);
  expect(EsUtils.isFalsyValue( '  ' )).toBe(true);

  expect(EsUtils.isFalsyValue( null )).toBe(true);
  expect(EsUtils.isFalsyValue( undefined )).toBe(true);
});

test('isStringContainsString', () => {
  expect(EsUtils.isStringContainsString( '', '' )).toBe(true);
  expect(EsUtils.isStringContainsString( ' ', '' )).toBe(true);
  expect(EsUtils.isStringContainsString( '', ' ' )).toBe(false);

  expect(EsUtils.isStringContainsString( 'abc', 'a')).toBe(true);
  expect(EsUtils.isStringContainsString( 'abc', 'd')).toBe(false);

  expect(EsUtils.isStringContainsString( '123', '1')).toBe(true);
  expect(EsUtils.isStringContainsString( '123', '23')).toBe(true);
  expect(EsUtils.isStringContainsString( 123, 1)).toBe(false);
  expect(EsUtils.isStringContainsString( '123', 1)).toBe(false);

  expect(EsUtils.isStringContainsString( [], '')).toBe(false);
  expect(EsUtils.isStringContainsString( ['1', '2', '3'], '1')).toBe(false);
  expect(EsUtils.isStringContainsString( ['1', '2', '3'], '2')).toBe(false);
});

test('isStringContainsChChars', () => {
  expect(EsUtils.isStringContainsChChars( '你好' )).toBe(true);
  expect(EsUtils.isStringContainsChChars( '你好abc' )).toBe(true);
  expect(EsUtils.isStringContainsChChars( 'abc哈哈' )).toBe(true);

  expect(EsUtils.isStringContainsChChars( '？' )).toBe(false);
  expect(EsUtils.isStringContainsChChars( '¥' )).toBe(false);

  expect(EsUtils.isStringContainsChChars( '' )).toBe(false);
  expect(EsUtils.isStringContainsChChars( ' ' )).toBe(false);
  expect(EsUtils.isStringContainsChChars( '-' )).toBe(false);
  expect(EsUtils.isStringContainsChChars( '?' )).toBe(false);
  expect(EsUtils.isStringContainsChChars( '$' )).toBe(false);
  expect(EsUtils.isStringContainsChChars( '123' )).toBe(false);
  expect(EsUtils.isStringContainsChChars( 'abc' )).toBe(false);
});
