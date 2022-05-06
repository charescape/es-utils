!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t||self).EsUtils={})}(this,function(t){const e="function"==typeof atob,r="function"==typeof btoa,o="function"==typeof Buffer,n="function"==typeof TextDecoder?new TextDecoder:void 0,a="function"==typeof TextEncoder?new TextEncoder:void 0,p=Array.prototype.slice.call("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="),i=(t=>{let e={};return t.forEach((t,r)=>e[t]=r),e})(p),y=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,c=String.fromCharCode.bind(String),f="function"==typeof Uint8Array.from?Uint8Array.from.bind(Uint8Array):(t,e=(t=>t))=>new Uint8Array(Array.prototype.slice.call(t,0).map(e)),l=t=>t.replace(/[^A-Za-z0-9\+\/]/g,""),u=r?t=>btoa(t):o?t=>Buffer.from(t,"binary").toString("base64"):t=>{let e,r,o,n,a="";const i=t.length%3;for(let i=0;i<t.length;){if((r=t.charCodeAt(i++))>255||(o=t.charCodeAt(i++))>255||(n=t.charCodeAt(i++))>255)throw new TypeError("invalid character found");e=r<<16|o<<8|n,a+=p[e>>18&63]+p[e>>12&63]+p[e>>6&63]+p[63&e]}return i?a.slice(0,i-3)+"===".substring(i):a},s=o?t=>Buffer.from(t).toString("base64"):t=>{let e=[];for(let r=0,o=t.length;r<o;r+=4096)e.push(c.apply(null,t.subarray(r,r+4096)));return u(e.join(""))},d=t=>{if(t.length<2)return(e=t.charCodeAt(0))<128?t:e<2048?c(192|e>>>6)+c(128|63&e):c(224|e>>>12&15)+c(128|e>>>6&63)+c(128|63&e);var e=65536+1024*(t.charCodeAt(0)-55296)+(t.charCodeAt(1)-56320);return c(240|e>>>18&7)+c(128|e>>>12&63)+c(128|e>>>6&63)+c(128|63&e)},b=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,g=o?t=>Buffer.from(t,"utf8").toString("base64"):a?t=>s(a.encode(t)):t=>u(t.replace(b,d)),A=/[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,h=t=>{switch(t.length){case 4:var e=((7&t.charCodeAt(0))<<18|(63&t.charCodeAt(1))<<12|(63&t.charCodeAt(2))<<6|63&t.charCodeAt(3))-65536;return c(55296+(e>>>10))+c(56320+(1023&e));case 3:return c((15&t.charCodeAt(0))<<12|(63&t.charCodeAt(1))<<6|63&t.charCodeAt(2));default:return c((31&t.charCodeAt(0))<<6|63&t.charCodeAt(1))}},m=e?t=>atob(l(t)):o?t=>Buffer.from(t,"base64").toString("binary"):t=>{if(t=t.replace(/\s+/g,""),!y.test(t))throw new TypeError("malformed base64.");t+="==".slice(2-(3&t.length));let e,r,o,n="";for(let a=0;a<t.length;)e=i[t.charAt(a++)]<<18|i[t.charAt(a++)]<<12|(r=i[t.charAt(a++)])<<6|(o=i[t.charAt(a++)]),n+=64===r?c(e>>16&255):64===o?c(e>>16&255,e>>8&255):c(e>>16&255,e>>8&255,255&e);return n},S=o?t=>f(Buffer.from(t,"base64")):t=>f(m(t),t=>t.charCodeAt(0)),P=o?t=>Buffer.from(t,"base64").toString("utf8"):n?t=>n.decode(S(t)):t=>m(t).replace(A,h);var O,v="undefined"!=typeof Symbol&&Symbol,j="Function.prototype.bind called on incompatible ",w=Array.prototype.slice,x=Object.prototype.toString,E="[object Function]",F=Function.prototype.bind||function(t){var e=this;if("function"!=typeof e||x.call(e)!==E)throw new TypeError(j+e);for(var r,o=w.call(arguments,1),n=function(){if(this instanceof r){var n=e.apply(this,o.concat(w.call(arguments)));return Object(n)===n?n:this}return e.apply(t,o.concat(w.call(arguments)))},a=Math.max(0,e.length-o.length),p=[],i=0;i<a;i++)p.push("$"+i);if(r=Function("binder","return function ("+p.join(",")+"){ return binder.apply(this,arguments); }")(n),e.prototype){var y=function(){};y.prototype=e.prototype,r.prototype=new y,y.prototype=null}return r},I=F.call(Function.call,Object.prototype.hasOwnProperty),R=SyntaxError,U=Function,B=TypeError,C=function(t){try{return U('"use strict"; return ('+t+").constructor;")()}catch(t){}},k=Object.getOwnPropertyDescriptor;if(k)try{k({},"")}catch(t){k=null}var M=function(){throw new B},D=k?function(){try{return M}catch(t){try{return k(arguments,"callee").get}catch(t){return M}}}():M,W="function"==typeof v&&"function"==typeof Symbol&&"symbol"==typeof v("foo")&&"symbol"==typeof Symbol("bar")&&function(){if("function"!=typeof Symbol||"function"!=typeof Object.getOwnPropertySymbols)return!1;if("symbol"==typeof Symbol.iterator)return!0;var t={},e=Symbol("test"),r=Object(e);if("string"==typeof e)return!1;if("[object Symbol]"!==Object.prototype.toString.call(e))return!1;if("[object Symbol]"!==Object.prototype.toString.call(r))return!1;for(e in t[e]=42,t)return!1;if("function"==typeof Object.keys&&0!==Object.keys(t).length)return!1;if("function"==typeof Object.getOwnPropertyNames&&0!==Object.getOwnPropertyNames(t).length)return!1;var o=Object.getOwnPropertySymbols(t);if(1!==o.length||o[0]!==e)return!1;if(!Object.prototype.propertyIsEnumerable.call(t,e))return!1;if("function"==typeof Object.getOwnPropertyDescriptor){var n=Object.getOwnPropertyDescriptor(t,e);if(42!==n.value||!0!==n.enumerable)return!1}return!0}(),_=Object.getPrototypeOf||function(t){return t.__proto__},N={},T="undefined"==typeof Uint8Array?O:_(Uint8Array),G={"%AggregateError%":"undefined"==typeof AggregateError?O:AggregateError,"%Array%":Array,"%ArrayBuffer%":"undefined"==typeof ArrayBuffer?O:ArrayBuffer,"%ArrayIteratorPrototype%":W?_([][Symbol.iterator]()):O,"%AsyncFromSyncIteratorPrototype%":O,"%AsyncFunction%":N,"%AsyncGenerator%":N,"%AsyncGeneratorFunction%":N,"%AsyncIteratorPrototype%":N,"%Atomics%":"undefined"==typeof Atomics?O:Atomics,"%BigInt%":"undefined"==typeof BigInt?O:BigInt,"%Boolean%":Boolean,"%DataView%":"undefined"==typeof DataView?O:DataView,"%Date%":Date,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":Error,"%eval%":eval,"%EvalError%":EvalError,"%Float32Array%":"undefined"==typeof Float32Array?O:Float32Array,"%Float64Array%":"undefined"==typeof Float64Array?O:Float64Array,"%FinalizationRegistry%":"undefined"==typeof FinalizationRegistry?O:FinalizationRegistry,"%Function%":U,"%GeneratorFunction%":N,"%Int8Array%":"undefined"==typeof Int8Array?O:Int8Array,"%Int16Array%":"undefined"==typeof Int16Array?O:Int16Array,"%Int32Array%":"undefined"==typeof Int32Array?O:Int32Array,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":W?_(_([][Symbol.iterator]())):O,"%JSON%":"object"==typeof JSON?JSON:O,"%Map%":"undefined"==typeof Map?O:Map,"%MapIteratorPrototype%":"undefined"!=typeof Map&&W?_((new Map)[Symbol.iterator]()):O,"%Math%":Math,"%Number%":Number,"%Object%":Object,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":"undefined"==typeof Promise?O:Promise,"%Proxy%":"undefined"==typeof Proxy?O:Proxy,"%RangeError%":RangeError,"%ReferenceError%":ReferenceError,"%Reflect%":"undefined"==typeof Reflect?O:Reflect,"%RegExp%":RegExp,"%Set%":"undefined"==typeof Set?O:Set,"%SetIteratorPrototype%":"undefined"!=typeof Set&&W?_((new Set)[Symbol.iterator]()):O,"%SharedArrayBuffer%":"undefined"==typeof SharedArrayBuffer?O:SharedArrayBuffer,"%String%":String,"%StringIteratorPrototype%":W?_(""[Symbol.iterator]()):O,"%Symbol%":W?Symbol:O,"%SyntaxError%":R,"%ThrowTypeError%":D,"%TypedArray%":T,"%TypeError%":B,"%Uint8Array%":"undefined"==typeof Uint8Array?O:Uint8Array,"%Uint8ClampedArray%":"undefined"==typeof Uint8ClampedArray?O:Uint8ClampedArray,"%Uint16Array%":"undefined"==typeof Uint16Array?O:Uint16Array,"%Uint32Array%":"undefined"==typeof Uint32Array?O:Uint32Array,"%URIError%":URIError,"%WeakMap%":"undefined"==typeof WeakMap?O:WeakMap,"%WeakRef%":"undefined"==typeof WeakRef?O:WeakRef,"%WeakSet%":"undefined"==typeof WeakSet?O:WeakSet},z=function t(e){var r;if("%AsyncFunction%"===e)r=C("async function () {}");else if("%GeneratorFunction%"===e)r=C("function* () {}");else if("%AsyncGeneratorFunction%"===e)r=C("async function* () {}");else if("%AsyncGenerator%"===e){var o=t("%AsyncGeneratorFunction%");o&&(r=o.prototype)}else if("%AsyncIteratorPrototype%"===e){var n=t("%AsyncGenerator%");n&&(r=_(n.prototype))}return G[e]=r,r},J={"%ArrayBufferPrototype%":["ArrayBuffer","prototype"],"%ArrayPrototype%":["Array","prototype"],"%ArrayProto_entries%":["Array","prototype","entries"],"%ArrayProto_forEach%":["Array","prototype","forEach"],"%ArrayProto_keys%":["Array","prototype","keys"],"%ArrayProto_values%":["Array","prototype","values"],"%AsyncFunctionPrototype%":["AsyncFunction","prototype"],"%AsyncGenerator%":["AsyncGeneratorFunction","prototype"],"%AsyncGeneratorPrototype%":["AsyncGeneratorFunction","prototype","prototype"],"%BooleanPrototype%":["Boolean","prototype"],"%DataViewPrototype%":["DataView","prototype"],"%DatePrototype%":["Date","prototype"],"%ErrorPrototype%":["Error","prototype"],"%EvalErrorPrototype%":["EvalError","prototype"],"%Float32ArrayPrototype%":["Float32Array","prototype"],"%Float64ArrayPrototype%":["Float64Array","prototype"],"%FunctionPrototype%":["Function","prototype"],"%Generator%":["GeneratorFunction","prototype"],"%GeneratorPrototype%":["GeneratorFunction","prototype","prototype"],"%Int8ArrayPrototype%":["Int8Array","prototype"],"%Int16ArrayPrototype%":["Int16Array","prototype"],"%Int32ArrayPrototype%":["Int32Array","prototype"],"%JSONParse%":["JSON","parse"],"%JSONStringify%":["JSON","stringify"],"%MapPrototype%":["Map","prototype"],"%NumberPrototype%":["Number","prototype"],"%ObjectPrototype%":["Object","prototype"],"%ObjProto_toString%":["Object","prototype","toString"],"%ObjProto_valueOf%":["Object","prototype","valueOf"],"%PromisePrototype%":["Promise","prototype"],"%PromiseProto_then%":["Promise","prototype","then"],"%Promise_all%":["Promise","all"],"%Promise_reject%":["Promise","reject"],"%Promise_resolve%":["Promise","resolve"],"%RangeErrorPrototype%":["RangeError","prototype"],"%ReferenceErrorPrototype%":["ReferenceError","prototype"],"%RegExpPrototype%":["RegExp","prototype"],"%SetPrototype%":["Set","prototype"],"%SharedArrayBufferPrototype%":["SharedArrayBuffer","prototype"],"%StringPrototype%":["String","prototype"],"%SymbolPrototype%":["Symbol","prototype"],"%SyntaxErrorPrototype%":["SyntaxError","prototype"],"%TypedArrayPrototype%":["TypedArray","prototype"],"%TypeErrorPrototype%":["TypeError","prototype"],"%Uint8ArrayPrototype%":["Uint8Array","prototype"],"%Uint8ClampedArrayPrototype%":["Uint8ClampedArray","prototype"],"%Uint16ArrayPrototype%":["Uint16Array","prototype"],"%Uint32ArrayPrototype%":["Uint32Array","prototype"],"%URIErrorPrototype%":["URIError","prototype"],"%WeakMapPrototype%":["WeakMap","prototype"],"%WeakSetPrototype%":["WeakSet","prototype"]},V=F.call(Function.call,Array.prototype.concat),L=F.call(Function.apply,Array.prototype.splice),Z=F.call(Function.call,String.prototype.replace),$=F.call(Function.call,String.prototype.slice),q=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,H=/\\(\\)?/g,Q=function(t){var e=$(t,0,1),r=$(t,-1);if("%"===e&&"%"!==r)throw new R("invalid intrinsic syntax, expected closing `%`");if("%"===r&&"%"!==e)throw new R("invalid intrinsic syntax, expected opening `%`");var o=[];return Z(t,q,function(t,e,r,n){o[o.length]=r?Z(n,H,"$1"):e||t}),o},K=function(t,e){var r,o=t;if(I(J,o)&&(o="%"+(r=J[o])[0]+"%"),I(G,o)){var n=G[o];if(n===N&&(n=z(o)),void 0===n&&!e)throw new B("intrinsic "+t+" exists, but is not available. Please file an issue!");return{alias:r,name:o,value:n}}throw new R("intrinsic "+t+" does not exist!")},X=function(t,e){if("string"!=typeof t||0===t.length)throw new B("intrinsic name must be a non-empty string");if(arguments.length>1&&"boolean"!=typeof e)throw new B('"allowMissing" argument must be a boolean');var r=Q(t),o=r.length>0?r[0]:"",n=K("%"+o+"%",e),a=n.name,p=n.value,i=!1,y=n.alias;y&&(o=y[0],L(r,V([0,1],y)));for(var c=1,f=!0;c<r.length;c+=1){var l=r[c],u=$(l,0,1),s=$(l,-1);if(('"'===u||"'"===u||"`"===u||'"'===s||"'"===s||"`"===s)&&u!==s)throw new R("property names with quotes must have matching quotes");if("constructor"!==l&&f||(i=!0),I(G,a="%"+(o+="."+l)+"%"))p=G[a];else if(null!=p){if(!(l in p)){if(!e)throw new B("base intrinsic for "+t+" exists, but the property is not available.");return}if(k&&c+1>=r.length){var d=k(p,l);p=(f=!!d)&&"get"in d&&!("originalValue"in d.get)?d.get:p[l]}else f=I(p,l),p=p[l];f&&!i&&(G[a]=p)}}return p},Y=function(t){var e={exports:{}};return function(t){var e=X("%Function.prototype.apply%"),r=X("%Function.prototype.call%"),o=X("%Reflect.apply%",!0)||F.call(r,e),n=X("%Object.getOwnPropertyDescriptor%",!0),a=X("%Object.defineProperty%",!0),p=X("%Math.max%");if(a)try{a({},"a",{value:1})}catch(t){a=null}t.exports=function(t){var e=o(F,r,arguments);return n&&a&&n(e,"length").configurable&&a(e,"length",{value:1+p(0,t.length-(arguments.length-1))}),e};var i=function(){return o(F,e,arguments)};a?a(t.exports,"apply",{value:i}):t.exports.apply=i}(e),e.exports}(),tt=Y(X("String.prototype.indexOf")),et=function(t,e){var r=X(t,!!e);return"function"==typeof r&&tt(t,".prototype.")>-1?Y(r):r},rt="function"==typeof Map&&Map.prototype,ot=(Object.getOwnPropertyDescriptor&&rt&&Object.getOwnPropertyDescriptor(Map.prototype,"size"),rt&&Map,"function"==typeof Set&&Set.prototype),nt=(Object.getOwnPropertyDescriptor&&ot&&Object.getOwnPropertyDescriptor(Set.prototype,"size"),ot&&Set,"function"==typeof WeakMap&&WeakMap.prototype&&WeakMap,"function"==typeof WeakSet&&WeakSet.prototype&&WeakSet,"function"==typeof WeakRef&&WeakRef.prototype&&WeakRef,Boolean,RegExp,Math,"function"==typeof BigInt&&BigInt,"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?Symbol.prototype.toString:null),at="function"==typeof Symbol&&"object"==typeof Symbol.iterator;"function"==typeof Symbol&&Symbol.toStringTag&&(typeof Symbol.toStringTag===at||"symbol")&&Symbol,"function"==typeof Reflect&&Reflect;var pt={__proto__:null,default:{}}.custom;pt&&function(t){if(at)return t&&"object"==typeof t&&t instanceof Symbol;if("symbol"==typeof t)return!0;if(!t||"object"!=typeof t||!nt)return!1;try{nt.call(t)}catch(t){}}(pt),X("%TypeError%"),X("%WeakMap%",!0),X("%Map%",!0),et("WeakMap.prototype.get",!0),et("WeakMap.prototype.set",!0),et("WeakMap.prototype.has",!0),et("Map.prototype.get",!0),et("Map.prototype.set",!0),et("Map.prototype.has",!0);var it=Object.prototype.hasOwnProperty,yt=Array.isArray,ct=function(){for(var t=[],e=0;e<256;++e)t.push("%"+((e<16?"0":"")+e.toString(16)).toUpperCase());return t}(),ft=function(t,e){for(var r=e&&e.plainObjects?Object.create(null):{},o=0;o<t.length;++o)void 0!==t[o]&&(r[o]=t[o]);return r},lt={arrayToObject:ft,assign:function(t,e){return Object.keys(e).reduce(function(t,r){return t[r]=e[r],t},t)},combine:function(t,e){return[].concat(t,e)},compact:function(t){for(var e=[{obj:{o:t},prop:"o"}],r=[],o=0;o<e.length;++o)for(var n=e[o],a=n.obj[n.prop],p=Object.keys(a),i=0;i<p.length;++i){var y=p[i],c=a[y];"object"==typeof c&&null!==c&&-1===r.indexOf(c)&&(e.push({obj:a,prop:y}),r.push(c))}return function(t){for(;t.length>1;){var e=t.pop(),r=e.obj[e.prop];if(yt(r)){for(var o=[],n=0;n<r.length;++n)void 0!==r[n]&&o.push(r[n]);e.obj[e.prop]=o}}}(e),t},decode:function(t,e,r){var o=t.replace(/\+/g," ");if("iso-8859-1"===r)return o.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(o)}catch(t){return o}},encode:function(t,e,r,o,n){if(0===t.length)return t;var a=t;if("symbol"==typeof t?a=Symbol.prototype.toString.call(t):"string"!=typeof t&&(a=String(t)),"iso-8859-1"===r)return escape(a).replace(/%u[0-9a-f]{4}/gi,function(t){return"%26%23"+parseInt(t.slice(2),16)+"%3B"});for(var p="",i=0;i<a.length;++i){var y=a.charCodeAt(i);45===y||46===y||95===y||126===y||y>=48&&y<=57||y>=65&&y<=90||y>=97&&y<=122||"RFC1738"===n&&(40===y||41===y)?p+=a.charAt(i):y<128?p+=ct[y]:y<2048?p+=ct[192|y>>6]+ct[128|63&y]:y<55296||y>=57344?p+=ct[224|y>>12]+ct[128|y>>6&63]+ct[128|63&y]:(y=65536+((1023&y)<<10|1023&a.charCodeAt(i+=1)),p+=ct[240|y>>18]+ct[128|y>>12&63]+ct[128|y>>6&63]+ct[128|63&y])}return p},isBuffer:function(t){return!(!t||"object"!=typeof t||!(t.constructor&&t.constructor.isBuffer&&t.constructor.isBuffer(t)))},isRegExp:function(t){return"[object RegExp]"===Object.prototype.toString.call(t)},maybeMap:function(t,e){if(yt(t)){for(var r=[],o=0;o<t.length;o+=1)r.push(e(t[o]));return r}return e(t)},merge:function t(e,r,o){if(!r)return e;if("object"!=typeof r){if(yt(e))e.push(r);else{if(!e||"object"!=typeof e)return[e,r];(o&&(o.plainObjects||o.allowPrototypes)||!it.call(Object.prototype,r))&&(e[r]=!0)}return e}if(!e||"object"!=typeof e)return[e].concat(r);var n=e;return yt(e)&&!yt(r)&&(n=ft(e,o)),yt(e)&&yt(r)?(r.forEach(function(r,n){if(it.call(e,n)){var a=e[n];a&&"object"==typeof a&&r&&"object"==typeof r?e[n]=t(a,r,o):e.push(r)}else e[n]=r}),e):Object.keys(r).reduce(function(e,n){var a=r[n];return e[n]=it.call(e,n)?t(e[n],a,o):a,e},n)}},ut=(Date,Object.prototype.hasOwnProperty),st=Array.isArray,dt={allowDots:!1,allowPrototypes:!1,allowSparse:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:lt.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},bt=function(t){return t.replace(/&#(\d+);/g,function(t,e){return String.fromCharCode(parseInt(e,10))})},gt=function(t,e){return t&&"string"==typeof t&&e.comma&&t.indexOf(",")>-1?t.split(","):t},At=function(t,e,r,o){if(t){var n=r.allowDots?t.replace(/\.([^.[]+)/g,"[$1]"):t,a=/(\[[^[\]]*])/g,p=r.depth>0&&/(\[[^[\]]*])/.exec(n),i=p?n.slice(0,p.index):n,y=[];if(i){if(!r.plainObjects&&ut.call(Object.prototype,i)&&!r.allowPrototypes)return;y.push(i)}for(var c=0;r.depth>0&&null!==(p=a.exec(n))&&c<r.depth;){if(c+=1,!r.plainObjects&&ut.call(Object.prototype,p[1].slice(1,-1))&&!r.allowPrototypes)return;y.push(p[1])}return p&&y.push("["+n.slice(p.index)+"]"),function(t,e,r,o){for(var n=o?e:gt(e,r),a=t.length-1;a>=0;--a){var p,i=t[a];if("[]"===i&&r.parseArrays)p=[].concat(n);else{p=r.plainObjects?Object.create(null):{};var y="["===i.charAt(0)&&"]"===i.charAt(i.length-1)?i.slice(1,-1):i,c=parseInt(y,10);r.parseArrays||""!==y?!isNaN(c)&&i!==y&&String(c)===y&&c>=0&&r.parseArrays&&c<=r.arrayLimit?(p=[])[c]=n:"__proto__"!==y&&(p[y]=n):p={0:n}}n=p}return n}(y,e,r,o)}};function ht(t){if("string"!=typeof t&&(t=window.location.search),(t=t.trimStart()).startsWith("http:")||t.startsWith("https:")){const e=t.split("?");e.length>1&&delete e[0],t=e.join("")}else"?"===t.charAt(0)&&(t=t.replace(/^[?]+/,""));return""+t}function mt(t){return function(t,e){var r=dt;if(""===t||null==t)return r.plainObjects?Object.create(null):{};for(var o="string"==typeof t?function(t,e){var r,o={},n=(e.ignoreQueryPrefix?t.replace(/^\?/,""):t).split(e.delimiter,Infinity===e.parameterLimit?void 0:e.parameterLimit),a=-1,p=e.charset;if(e.charsetSentinel)for(r=0;r<n.length;++r)0===n[r].indexOf("utf8=")&&("utf8=%E2%9C%93"===n[r]?p="utf-8":"utf8=%26%2310003%3B"===n[r]&&(p="iso-8859-1"),a=r,r=n.length);for(r=0;r<n.length;++r)if(r!==a){var i,y,c=n[r],f=c.indexOf("]="),l=-1===f?c.indexOf("="):f+1;-1===l?(i=e.decoder(c,dt.decoder,p,"key"),y=e.strictNullHandling?null:""):(i=e.decoder(c.slice(0,l),dt.decoder,p,"key"),y=lt.maybeMap(gt(c.slice(l+1),e),function(t){return e.decoder(t,dt.decoder,p,"value")})),y&&e.interpretNumericEntities&&"iso-8859-1"===p&&(y=bt(y)),c.indexOf("[]=")>-1&&(y=st(y)?[y]:y),o[i]=ut.call(o,i)?lt.combine(o[i],y):y}return o}(t,r):t,n=r.plainObjects?Object.create(null):{},a=Object.keys(o),p=0;p<a.length;++p){var i=a[p],y=At(i,o[i],r,"string"==typeof t);n=lt.merge(n,y,r)}return!0===r.allowSparse?n:lt.compact(n)}(ht(t))}t.urlGetSearchParam=function(t,e){const r=mt(e);return function(t){return Object.is(t,void 0)}(o=r[t])||function(t){return Object.is(t,null)}(o)?null:r[t];var o},t.urlGetSearchParams=mt,t.urlGetSearchString=ht,t.urlSafeBase64Decode=function(t){return(t=>P(l(t.replace(/[-_]/g,t=>"-"==t?"+":"/"))))(t.replaceAll(".","=").replaceAll("_","/").replaceAll("-","+"))},t.urlSafeBase64Encode=function(t){return((t,e=!1)=>e?(t=>t.replace(/=/g,"").replace(/[+\/]/g,t=>"+"==t?"-":"_"))(g(t)):g(t))(t).replaceAll("+","-").replaceAll("/","_").replaceAll("=",".")}});
//# sourceMappingURL=url.umd.js.map
