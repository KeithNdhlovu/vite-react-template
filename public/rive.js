(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["rive"] = factory();
	else
		root["rive"] = factory();
})(this, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

var Rive = (function() {
  var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
  if (typeof __filename !== 'undefined') _scriptDir = _scriptDir || __filename;
  return (
function(Rive) {
  Rive = Rive || {};


null;var k;k||(k=typeof Rive !== 'undefined' ? Rive : {});var aa,ba;k.ready=new Promise(function(a,b){aa=a;ba=b});
k.onRuntimeInitialized=function(){const a=k.makeRenderer;k.makeRenderer=function(c){var d={alpha:1,depth:1,stencil:8,antialias:0,premultipliedAlpha:1,preserveDrawingBuffer:0,preferLowPowerToHighPerformance:0,failIfMajorPerformanceCaveat:0,enableExtensionsByDefault:1,explicitSwapControl:0,renderViaOffscreenBackBuffer:0},e=c.getContext("webgl2",d);e||(e=c.getContext("webgl",d));var f=e;e=ca(da);var g={Ce:e,attributes:d,version:d.De,Jd:f};f.canvas&&(f.canvas.Ae=g);da[e]=g;("undefined"===typeof d.fe||
d.fe)&&ea(g);l=da[e];k.ce=p=l&&l.Jd;d=a(c.width,c.height);d.ae=e;d.$d=c;d.Rd=c.width;d.Qd=c.height;return d};const b=k.WebGLRenderer.prototype.clear;k.WebGLRenderer.prototype.clear=function(){l=da[this.ae];k.ce=p=l&&l.Jd;const c=this.$d;if(this.Rd!=c.width||this.Qd!=c.height)this.resize(c.width,c.height),this.Rd=c.width,this.Qd=c.height;b.call(this)}};var fa={},u;for(u in k)k.hasOwnProperty(u)&&(fa[u]=k[u]);
var ha="./this.program",ia="object"===typeof window,ja="function"===typeof importScripts,ka="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node,w="",la,ma,na,oa,pa;
if(ka)w=ja?require("path").dirname(w)+"/":__dirname+"/",la=function(a,b){oa||(oa=require("fs"));pa||(pa=require("path"));a=pa.normalize(a);return oa.readFileSync(a,b?null:"utf8")},na=function(a){a=la(a,!0);a.buffer||(a=new Uint8Array(a));a.buffer||qa("Assertion failed: undefined");return a},ma=function(a,b,c){oa||(oa=require("fs"));pa||(pa=require("path"));a=pa.normalize(a);oa.readFile(a,function(d,e){d?c(d):b(e.buffer)})},1<process.argv.length&&(ha=process.argv[1].replace(/\\/g,"/")),process.argv.slice(2),
process.on("uncaughtException",function(a){throw a;}),process.on("unhandledRejection",function(a){throw a;}),k.inspect=function(){return"[Emscripten Module object]"};else if(ia||ja)ja?w=self.location.href:"undefined"!==typeof document&&document.currentScript&&(w=document.currentScript.src),_scriptDir&&(w=_scriptDir),0!==w.indexOf("blob:")?w=w.substr(0,w.replace(/[?#].*/,"").lastIndexOf("/")+1):w="",la=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},ja&&
(na=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),ma=function(a,b,c){var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=function(){200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};var ra=k.print||console.log.bind(console),x=k.printErr||console.warn.bind(console);for(u in fa)fa.hasOwnProperty(u)&&(k[u]=fa[u]);fa=null;k.thisProgram&&(ha=k.thisProgram);
var sa=0,ta;k.wasmBinary&&(ta=k.wasmBinary);var noExitRuntime=k.noExitRuntime||!0;"object"!==typeof WebAssembly&&qa("no native wasm support detected");var ua,va=!1,wa="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function xa(a,b,c){var d=b+c;for(c=b;a[c]&&!(c>=d);)++c;if(16<c-b&&a.subarray&&wa)return wa.decode(a.subarray(b,c));for(d="";b<c;){var e=a[b++];if(e&128){var f=a[b++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|f);else{var g=a[b++]&63;e=224==(e&240)?(e&15)<<12|f<<6|g:(e&7)<<18|f<<12|g<<6|a[b++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}return d}function ya(a,b){return a?xa(z,a,b):""}
function za(a,b,c,d){if(!(0<d))return 0;var e=c;d=c+d-1;for(var f=0;f<a.length;++f){var g=a.charCodeAt(f);if(55296<=g&&57343>=g){var h=a.charCodeAt(++f);g=65536+((g&1023)<<10)|h&1023}if(127>=g){if(c>=d)break;b[c++]=g}else{if(2047>=g){if(c+1>=d)break;b[c++]=192|g>>6}else{if(65535>=g){if(c+2>=d)break;b[c++]=224|g>>12}else{if(c+3>=d)break;b[c++]=240|g>>18;b[c++]=128|g>>12&63}b[c++]=128|g>>6&63}b[c++]=128|g&63}}b[c]=0;return c-e}
function Aa(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}var Ba="undefined"!==typeof TextDecoder?new TextDecoder("utf-16le"):void 0;function Ca(a,b){var c=a>>1;for(var d=c+b/2;!(c>=d)&&Da[c];)++c;c<<=1;if(32<c-a&&Ba)return Ba.decode(z.subarray(a,c));c="";for(d=0;!(d>=b/2);++d){var e=B[a+2*d>>1];if(0==e)break;c+=String.fromCharCode(e)}return c}
function Ea(a,b,c){void 0===c&&(c=2147483647);if(2>c)return 0;c-=2;var d=b;c=c<2*a.length?c/2:a.length;for(var e=0;e<c;++e)B[b>>1]=a.charCodeAt(e),b+=2;B[b>>1]=0;return b-d}function Fa(a){return 2*a.length}function Ga(a,b){for(var c=0,d="";!(c>=b/4);){var e=C[a+4*c>>2];if(0==e)break;++c;65536<=e?(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023)):d+=String.fromCharCode(e)}return d}
function Ha(a,b,c){void 0===c&&(c=2147483647);if(4>c)return 0;var d=b;c=d+c-4;for(var e=0;e<a.length;++e){var f=a.charCodeAt(e);if(55296<=f&&57343>=f){var g=a.charCodeAt(++e);f=65536+((f&1023)<<10)|g&1023}C[b>>2]=f;b+=4;if(b+4>c)break}C[b>>2]=0;return b-d}function Ia(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&++c;b+=4}return b}var Ja,Ka,z,B,Da,C,D,F,Ma;
function Na(){var a=ua.buffer;Ja=a;k.HEAP8=Ka=new Int8Array(a);k.HEAP16=B=new Int16Array(a);k.HEAP32=C=new Int32Array(a);k.HEAPU8=z=new Uint8Array(a);k.HEAPU16=Da=new Uint16Array(a);k.HEAPU32=D=new Uint32Array(a);k.HEAPF32=F=new Float32Array(a);k.HEAPF64=Ma=new Float64Array(a)}var Oa,Pa=[],Qa=[],Ra=[];function Sa(){var a=k.preRun.shift();Pa.unshift(a)}var Ta=0,Ua=null,Va=null;k.preloadedImages={};k.preloadedAudios={};
function qa(a){if(k.onAbort)k.onAbort(a);a="Aborted("+a+")";x(a);va=!0;a=new WebAssembly.RuntimeError(a+". Build with -s ASSERTIONS=1 for more info.");ba(a);throw a;}function Wa(){return G.startsWith("data:application/octet-stream;base64,")}var G;G="webgl_advanced.wasm";if(!Wa()){var Xa=G;G=k.locateFile?k.locateFile(Xa,w):w+Xa}function Ya(){var a=G;try{if(a==G&&ta)return new Uint8Array(ta);if(na)return na(a);throw"both async and sync fetching of the wasm failed";}catch(b){qa(b)}}
function Za(){if(!ta&&(ia||ja)){if("function"===typeof fetch&&!G.startsWith("file://"))return fetch(G,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+G+"'";return a.arrayBuffer()}).catch(function(){return Ya()});if(ma)return new Promise(function(a,b){ma(G,function(c){a(new Uint8Array(c))},b)})}return Promise.resolve().then(function(){return Ya()})}
function $a(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(k);else{var c=b.Be;"number"===typeof c?void 0===b.Kd?H(c)():H(c)(b.Kd):c(void 0===b.Kd?null:b.Kd)}}}function H(a){return Oa.get(a)}var ab={};function bb(a){for(;a.length;){var b=a.pop();a.pop()(b)}}function cb(a){return this.fromWireType(D[a>>2])}var db={},eb={},fb={};function gb(a){if(void 0===a)return"_unknown";a=a.replace(/[^a-zA-Z0-9_]/g,"$");var b=a.charCodeAt(0);return 48<=b&&57>=b?"_"+a:a}
function hb(a,b){a=gb(a);return(new Function("body","return function "+a+'() {\n    "use strict";    return body.apply(this, arguments);\n};\n'))(b)}function ib(a){var b=Error,c=hb(a,function(d){this.name=a;this.message=d;d=Error(d).stack;void 0!==d&&(this.stack=this.toString()+"\n"+d.replace(/^Error(:[^\n]*)?\n/,""))});c.prototype=Object.create(b.prototype);c.prototype.constructor=c;c.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message};return c}
var jb=void 0;function kb(a){throw new jb(a);}function I(a,b,c){function d(h){h=c(h);h.length!==a.length&&kb("Mismatched type converter count");for(var n=0;n<a.length;++n)J(a[n],h[n])}a.forEach(function(h){fb[h]=b});var e=Array(b.length),f=[],g=0;b.forEach(function(h,n){eb.hasOwnProperty(h)?e[n]=eb[h]:(f.push(h),db.hasOwnProperty(h)||(db[h]=[]),db[h].push(function(){e[n]=eb[h];++g;g===f.length&&d(e)}))});0===f.length&&d(e)}
function lb(a){switch(a){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+a);}}var mb=void 0;function K(a){for(var b="";z[a];)b+=mb[z[a++]];return b}var nb=void 0;function L(a){throw new nb(a);}
function J(a,b,c){c=c||{};if(!("argPackAdvance"in b))throw new TypeError("registerType registeredInstance requires argPackAdvance");var d=b.name;a||L('type "'+d+'" must have a positive integer typeid pointer');if(eb.hasOwnProperty(a)){if(c.me)return;L("Cannot register type '"+d+"' twice")}eb[a]=b;delete fb[a];db.hasOwnProperty(a)&&(b=db[a],delete db[a],b.forEach(function(e){e()}))}function ob(a){L(a.ed.jd.gd.name+" instance already deleted")}var pb=!1;function qb(){}
function rb(a){--a.count.value;0===a.count.value&&(a.md?a.od.qd(a.md):a.jd.gd.qd(a.hd))}function sb(a){if("undefined"===typeof FinalizationGroup)return sb=function(b){return b},a;pb=new FinalizationGroup(function(b){for(var c=b.next();!c.done;c=b.next())c=c.value,c.hd?rb(c):console.warn("object already deleted: "+c.hd)});sb=function(b){pb.register(b,b.ed,b.ed);return b};qb=function(b){pb.unregister(b.ed)};return sb(a)}var tb=void 0,ub=[];
function vb(){for(;ub.length;){var a=ub.pop();a.ed.ud=!1;a["delete"]()}}function wb(){}var xb={};function yb(a,b,c){if(void 0===a[b].kd){var d=a[b];a[b]=function(){a[b].kd.hasOwnProperty(arguments.length)||L("Function '"+c+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+a[b].kd+")!");return a[b].kd[arguments.length].apply(this,arguments)};a[b].kd=[];a[b].kd[d.Ad]=d}}
function zb(a,b,c){k.hasOwnProperty(a)?((void 0===c||void 0!==k[a].kd&&void 0!==k[a].kd[c])&&L("Cannot register public name '"+a+"' twice"),yb(k,a,a),k.hasOwnProperty(c)&&L("Cannot register multiple overloads of a function with the same number of arguments ("+c+")!"),k[a].kd[c]=b):(k[a]=b,void 0!==c&&(k[a].Fe=c))}function Ab(a,b,c,d,e,f,g,h){this.name=a;this.constructor=b;this.rd=c;this.qd=d;this.pd=e;this.he=f;this.zd=g;this.ee=h;this.qe=[]}
function Bb(a,b,c){for(;b!==c;)b.zd||L("Expected null or instance of "+c.name+", got an instance of "+b.name),a=b.zd(a),b=b.pd;return a}function Cb(a,b){if(null===b)return this.Md&&L("null is not a valid "+this.name),0;b.ed||L('Cannot pass "'+Db(b)+'" as a '+this.name);b.ed.hd||L("Cannot pass deleted object as a pointer of type "+this.name);return Bb(b.ed.hd,b.ed.jd.gd,this.gd)}
function Eb(a,b){if(null===b){this.Md&&L("null is not a valid "+this.name);if(this.Cd){var c=this.Nd();null!==a&&a.push(this.qd,c);return c}return 0}b.ed||L('Cannot pass "'+Db(b)+'" as a '+this.name);b.ed.hd||L("Cannot pass deleted object as a pointer of type "+this.name);!this.Bd&&b.ed.jd.Bd&&L("Cannot convert argument of type "+(b.ed.od?b.ed.od.name:b.ed.jd.name)+" to parameter type "+this.name);c=Bb(b.ed.hd,b.ed.jd.gd,this.gd);if(this.Cd)switch(void 0===b.ed.md&&L("Passing raw pointer to smart pointer is illegal"),
this.ve){case 0:b.ed.od===this?c=b.ed.md:L("Cannot convert argument of type "+(b.ed.od?b.ed.od.name:b.ed.jd.name)+" to parameter type "+this.name);break;case 1:c=b.ed.md;break;case 2:if(b.ed.od===this)c=b.ed.md;else{var d=b.clone();c=this.re(c,Fb(function(){d["delete"]()}));null!==a&&a.push(this.qd,c)}break;default:L("Unsupporting sharing policy")}return c}
function Gb(a,b){if(null===b)return this.Md&&L("null is not a valid "+this.name),0;b.ed||L('Cannot pass "'+Db(b)+'" as a '+this.name);b.ed.hd||L("Cannot pass deleted object as a pointer of type "+this.name);b.ed.jd.Bd&&L("Cannot convert argument of type "+b.ed.jd.name+" to parameter type "+this.name);return Bb(b.ed.hd,b.ed.jd.gd,this.gd)}function Hb(a,b,c){if(b===c)return a;if(void 0===c.pd)return null;a=Hb(a,b,c.pd);return null===a?null:c.ee(a)}var Ib={};
function Jb(a,b){for(void 0===b&&L("ptr should not be undefined");a.pd;)b=a.zd(b),a=a.pd;return Ib[b]}function Kb(a,b){b.jd&&b.hd||kb("makeClassHandle requires ptr and ptrType");!!b.od!==!!b.md&&kb("Both smartPtrType and smartPtr must be specified");b.count={value:1};return sb(Object.create(a,{ed:{value:b}}))}
function M(a,b,c,d){this.name=a;this.gd=b;this.Md=c;this.Bd=d;this.Cd=!1;this.qd=this.re=this.Nd=this.Xd=this.ve=this.pe=void 0;void 0!==b.pd?this.toWireType=Eb:(this.toWireType=d?Cb:Gb,this.nd=null)}function Lb(a,b,c){k.hasOwnProperty(a)||kb("Replacing nonexistant public symbol");void 0!==k[a].kd&&void 0!==c?k[a].kd[c]=b:(k[a]=b,k[a].Ad=c)}
function Mb(a,b){var c=[];return function(){c.length=arguments.length;for(var d=0;d<arguments.length;d++)c[d]=arguments[d];a.includes("j")?(d=k["dynCall_"+a],d=c&&c.length?d.apply(null,[b].concat(c)):d.call(null,b)):d=H(b).apply(null,c);return d}}function N(a,b){a=K(a);var c=a.includes("j")?Mb(a,b):H(b);"function"!==typeof c&&L("unknown function pointer with signature "+a+": "+b);return c}var Nb=void 0;function Ob(a){a=Pb(a);var b=K(a);O(a);return b}
function Qb(a,b){function c(f){e[f]||eb[f]||(fb[f]?fb[f].forEach(c):(d.push(f),e[f]=!0))}var d=[],e={};b.forEach(c);throw new Nb(a+": "+d.map(Ob).join([", "]));}function Rb(a,b,c){a instanceof Object||L(c+' with invalid "this": '+a);a instanceof b.gd.constructor||L(c+' incompatible with "this" of type '+a.constructor.name);a.ed.hd||L("cannot call emscripten binding method "+c+" on deleted object");return Bb(a.ed.hd,a.ed.jd.gd,b.gd)}
function Sb(a,b){for(var c=[],d=0;d<a;d++)c.push(C[(b>>2)+d]);return c}function Tb(a){var b=Function;if(!(b instanceof Function))throw new TypeError("new_ called with constructor type "+typeof b+" which is not a function");var c=hb(b.name||"unknownFunctionName",function(){});c.prototype=b.prototype;c=new c;a=b.apply(c,a);return a instanceof Object?a:c}
function Ub(a,b,c,d,e){var f=b.length;2>f&&L("argTypes array size mismatch! Must at least get return value and 'this' types!");var g=null!==b[1]&&null!==c,h=!1;for(c=1;c<b.length;++c)if(null!==b[c]&&void 0===b[c].nd){h=!0;break}var n="void"!==b[0].name,q="",r="";for(c=0;c<f-2;++c)q+=(0!==c?", ":"")+"arg"+c,r+=(0!==c?", ":"")+"arg"+c+"Wired";a="return function "+gb(a)+"("+q+") {\nif (arguments.length !== "+(f-2)+") {\nthrowBindingError('function "+a+" called with ' + arguments.length + ' arguments, expected "+
(f-2)+" args!');\n}\n";h&&(a+="var destructors = [];\n");var v=h?"destructors":"null";q="throwBindingError invoker fn runDestructors retType classParam".split(" ");d=[L,d,e,bb,b[0],b[1]];g&&(a+="var thisWired = classParam.toWireType("+v+", this);\n");for(c=0;c<f-2;++c)a+="var arg"+c+"Wired = argType"+c+".toWireType("+v+", arg"+c+"); // "+b[c+2].name+"\n",q.push("argType"+c),d.push(b[c+2]);g&&(r="thisWired"+(0<r.length?", ":"")+r);a+=(n?"var rv = ":"")+"invoker(fn"+(0<r.length?", ":"")+r+");\n";if(h)a+=
"runDestructors(destructors);\n";else for(c=g?1:2;c<b.length;++c)f=1===c?"thisWired":"arg"+(c-2)+"Wired",null!==b[c].nd&&(a+=f+"_dtor("+f+"); // "+b[c].name+"\n",q.push(f+"_dtor"),d.push(b[c].nd));n&&(a+="var ret = retType.fromWireType(rv);\nreturn ret;\n");q.push(a+"}\n");return Tb(q).apply(null,d)}var Vb=[],Q=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function Wb(a){4<a&&0===--Q[a].Od&&(Q[a]=void 0,Vb.push(a))}
function Xb(a){a||L("Cannot use deleted val. handle = "+a);return Q[a].value}function Fb(a){switch(a){case void 0:return 1;case null:return 2;case !0:return 3;case !1:return 4;default:var b=Vb.length?Vb.pop():Q.length;Q[b]={Od:1,value:a};return b}}
function Yb(a,b,c){switch(b){case 0:return function(d){return this.fromWireType((c?Ka:z)[d])};case 1:return function(d){return this.fromWireType((c?B:Da)[d>>1])};case 2:return function(d){return this.fromWireType((c?C:D)[d>>2])};default:throw new TypeError("Unknown integer type: "+a);}}function Zb(a,b){var c=eb[a];void 0===c&&L(b+" has unknown type "+Ob(a));return c}function Db(a){if(null===a)return"null";var b=typeof a;return"object"===b||"array"===b||"function"===b?a.toString():""+a}
function $b(a,b){switch(b){case 2:return function(c){return this.fromWireType(F[c>>2])};case 3:return function(c){return this.fromWireType(Ma[c>>3])};default:throw new TypeError("Unknown float type: "+a);}}
function ac(a,b,c){switch(b){case 0:return c?function(d){return Ka[d]}:function(d){return z[d]};case 1:return c?function(d){return B[d>>1]}:function(d){return Da[d>>1]};case 2:return c?function(d){return C[d>>2]}:function(d){return D[d>>2]};default:throw new TypeError("Unknown integer type: "+a);}}var bc={};function cc(a){var b=bc[a];return void 0===b?K(a):b}var dc=[];function ec(a){var b=dc.length;dc.push(a);return b}
function fc(a,b){for(var c=Array(a),d=0;d<a;++d)c[d]=Zb(C[(b>>2)+d],"parameter "+d);return c}var gc=[],hc;hc=ka?function(){var a=process.hrtime();return 1E3*a[0]+a[1]/1E6}:function(){return performance.now()};
function ic(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,e,f){b.drawArraysInstancedANGLE(c,d,e,f)},a.drawElementsInstanced=function(c,d,e,f,g){b.drawElementsInstancedANGLE(c,d,e,f,g)})}
function jc(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function kc(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}
var lc=1,mc=[],R=[],nc=[],oc=[],pc=[],S=[],qc=[],da=[],rc=[],sc=[],tc={},vc={},wc=4;function U(a){xc||(xc=a)}function ca(a){for(var b=lc++,c=a.length;c<b;c++)a[c]=null;return b}
function ea(a){a||(a=l);if(!a.ne){a.ne=!0;var b=a.Jd;ic(b);jc(b);kc(b);b.Td=b.getExtension("WEBGL_draw_instanced_base_vertex_base_instance");b.Wd=b.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance");2<=a.version&&(b.Ud=b.getExtension("EXT_disjoint_timer_query_webgl2"));if(2>a.version||!b.Ud)b.Ud=b.getExtension("EXT_disjoint_timer_query");b.Ee=b.getExtension("WEBGL_multi_draw");(b.getSupportedExtensions()||[]).forEach(function(c){c.includes("lose_context")||c.includes("debug")||b.getExtension(c)})}}
var xc,l,yc=[];function zc(a,b,c,d){for(var e=0;e<a;e++){var f=p[c](),g=f&&ca(d);f?(f.name=g,d[g]=f):U(1282);C[b+4*e>>2]=g}}
function Ac(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=p.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>l.version){U(1282);return}c=2*(p.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>l.version){U(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=p.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":U(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:U(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)C[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){U(1280);x("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+e+")");return}}break;default:U(1280);x("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}C[b>>2]=c}else U(1281)}
function Bc(a){var b=Aa(a)+1,c=Cc(b);za(a,z,c,b);return c}function Dc(a){return"]"==a.slice(-1)&&a.lastIndexOf("[")}function Ec(a){a-=5120;return 0==a?Ka:1==a?z:2==a?B:4==a?C:6==a?F:5==a||28922==a||28520==a||30779==a||30782==a?D:Da}function Fc(a,b,c,d,e){a=Ec(a);var f=31-Math.clz32(a.BYTES_PER_ELEMENT),g=wc;return a.subarray(e>>f,e+d*(c*({5:3,6:4,8:2,29502:3,29504:4,26917:2,26918:2,29846:3,29847:4}[b-6402]||1)*(1<<f)+g-1&-g)>>f)}
function V(a){var b=p.de;if(b){var c=b.yd[a];"number"===typeof c&&(b.yd[a]=c=p.getUniformLocation(b,b.Yd[a]+(0<c?"["+c+"]":"")));return c}U(1282)}var Gc=[],Hc=[],Ic={};
function Jc(){if(!Kc){var a={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:("object"===typeof navigator&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:ha||"./this.program"},b;for(b in Ic)void 0===Ic[b]?delete a[b]:a[b]=Ic[b];var c=[];for(b in a)c.push(b+"="+a[b]);Kc=c}return Kc}var Kc,Lc=[null,[],[]];function Mc(a){return 0===a%4&&(0!==a%100||0===a%400)}function Nc(a,b){for(var c=0,d=0;d<=b;c+=a[d++]);return c}
var Oc=[31,29,31,30,31,30,31,31,30,31,30,31],Pc=[31,28,31,30,31,30,31,31,30,31,30,31];function Qc(a,b){for(a=new Date(a.getTime());0<b;){var c=a.getMonth(),d=(Mc(a.getFullYear())?Oc:Pc)[c];if(b>d-a.getDate())b-=d-a.getDate()+1,a.setDate(1),11>c?a.setMonth(c+1):(a.setMonth(0),a.setFullYear(a.getFullYear()+1));else{a.setDate(a.getDate()+b);break}}return a}
function Rc(a,b,c,d){function e(m,t,y){for(m="number"===typeof m?m.toString():m||"";m.length<t;)m=y[0]+m;return m}function f(m,t){return e(m,t,"0")}function g(m,t){function y(P){return 0>P?-1:0<P?1:0}var E;0===(E=y(m.getFullYear()-t.getFullYear()))&&0===(E=y(m.getMonth()-t.getMonth()))&&(E=y(m.getDate()-t.getDate()));return E}function h(m){switch(m.getDay()){case 0:return new Date(m.getFullYear()-1,11,29);case 1:return m;case 2:return new Date(m.getFullYear(),0,3);case 3:return new Date(m.getFullYear(),
0,2);case 4:return new Date(m.getFullYear(),0,1);case 5:return new Date(m.getFullYear()-1,11,31);case 6:return new Date(m.getFullYear()-1,11,30)}}function n(m){m=Qc(new Date(m.ld+1900,0,1),m.Id);var t=new Date(m.getFullYear()+1,0,4),y=h(new Date(m.getFullYear(),0,4));t=h(t);return 0>=g(y,m)?0>=g(t,m)?m.getFullYear()+1:m.getFullYear():m.getFullYear()-1}var q=C[d+40>>2];d={ye:C[d>>2],xe:C[d+4>>2],Gd:C[d+8>>2],xd:C[d+12>>2],vd:C[d+16>>2],ld:C[d+20>>2],Hd:C[d+24>>2],Id:C[d+28>>2],Ge:C[d+32>>2],we:C[d+
36>>2],ze:q?ya(q):""};c=ya(c);q={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"};for(var r in q)c=c.replace(new RegExp(r,"g"),q[r]);var v="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
A="January February March April May June July August September October November December".split(" ");q={"%a":function(m){return v[m.Hd].substring(0,3)},"%A":function(m){return v[m.Hd]},"%b":function(m){return A[m.vd].substring(0,3)},"%B":function(m){return A[m.vd]},"%C":function(m){return f((m.ld+1900)/100|0,2)},"%d":function(m){return f(m.xd,2)},"%e":function(m){return e(m.xd,2," ")},"%g":function(m){return n(m).toString().substring(2)},"%G":function(m){return n(m)},"%H":function(m){return f(m.Gd,
2)},"%I":function(m){m=m.Gd;0==m?m=12:12<m&&(m-=12);return f(m,2)},"%j":function(m){return f(m.xd+Nc(Mc(m.ld+1900)?Oc:Pc,m.vd-1),3)},"%m":function(m){return f(m.vd+1,2)},"%M":function(m){return f(m.xe,2)},"%n":function(){return"\n"},"%p":function(m){return 0<=m.Gd&&12>m.Gd?"AM":"PM"},"%S":function(m){return f(m.ye,2)},"%t":function(){return"\t"},"%u":function(m){return m.Hd||7},"%U":function(m){var t=new Date(m.ld+1900,0,1),y=0===t.getDay()?t:Qc(t,7-t.getDay());m=new Date(m.ld+1900,m.vd,m.xd);return 0>
g(y,m)?f(Math.ceil((31-y.getDate()+(Nc(Mc(m.getFullYear())?Oc:Pc,m.getMonth()-1)-31)+m.getDate())/7),2):0===g(y,t)?"01":"00"},"%V":function(m){var t=new Date(m.ld+1901,0,4),y=h(new Date(m.ld+1900,0,4));t=h(t);var E=Qc(new Date(m.ld+1900,0,1),m.Id);return 0>g(E,y)?"53":0>=g(t,E)?"01":f(Math.ceil((y.getFullYear()<m.ld+1900?m.Id+32-y.getDate():m.Id+1-y.getDate())/7),2)},"%w":function(m){return m.Hd},"%W":function(m){var t=new Date(m.ld,0,1),y=1===t.getDay()?t:Qc(t,0===t.getDay()?1:7-t.getDay()+1);m=
new Date(m.ld+1900,m.vd,m.xd);return 0>g(y,m)?f(Math.ceil((31-y.getDate()+(Nc(Mc(m.getFullYear())?Oc:Pc,m.getMonth()-1)-31)+m.getDate())/7),2):0===g(y,t)?"01":"00"},"%y":function(m){return(m.ld+1900).toString().substring(2)},"%Y":function(m){return m.ld+1900},"%z":function(m){m=m.we;var t=0<=m;m=Math.abs(m)/60;return(t?"+":"-")+String("0000"+(m/60*100+m%60)).slice(-4)},"%Z":function(m){return m.ze},"%%":function(){return"%"}};for(r in q)c.includes(r)&&(c=c.replace(new RegExp(r,"g"),q[r](d)));r=Sc(c);
if(r.length>b)return 0;Ka.set(r,a);return r.length-1}jb=k.InternalError=ib("InternalError");for(var Tc=Array(256),Uc=0;256>Uc;++Uc)Tc[Uc]=String.fromCharCode(Uc);mb=Tc;nb=k.BindingError=ib("BindingError");wb.prototype.isAliasOf=function(a){if(!(this instanceof wb&&a instanceof wb))return!1;var b=this.ed.jd.gd,c=this.ed.hd,d=a.ed.jd.gd;for(a=a.ed.hd;b.pd;)c=b.zd(c),b=b.pd;for(;d.pd;)a=d.zd(a),d=d.pd;return b===d&&c===a};
wb.prototype.clone=function(){this.ed.hd||ob(this);if(this.ed.wd)return this.ed.count.value+=1,this;var a=sb,b=Object,c=b.create,d=Object.getPrototypeOf(this),e=this.ed;a=a(c.call(b,d,{ed:{value:{count:e.count,ud:e.ud,wd:e.wd,hd:e.hd,jd:e.jd,md:e.md,od:e.od}}}));a.ed.count.value+=1;a.ed.ud=!1;return a};wb.prototype["delete"]=function(){this.ed.hd||ob(this);this.ed.ud&&!this.ed.wd&&L("Object already scheduled for deletion");qb(this);rb(this.ed);this.ed.wd||(this.ed.md=void 0,this.ed.hd=void 0)};
wb.prototype.isDeleted=function(){return!this.ed.hd};wb.prototype.deleteLater=function(){this.ed.hd||ob(this);this.ed.ud&&!this.ed.wd&&L("Object already scheduled for deletion");ub.push(this);1===ub.length&&tb&&tb(vb);this.ed.ud=!0;return this};M.prototype.ie=function(a){this.Xd&&(a=this.Xd(a));return a};M.prototype.Sd=function(a){this.qd&&this.qd(a)};M.prototype.argPackAdvance=8;M.prototype.readValueFromPointer=cb;M.prototype.deleteObject=function(a){if(null!==a)a["delete"]()};
M.prototype.fromWireType=function(a){function b(){return this.Cd?Kb(this.gd.rd,{jd:this.pe,hd:c,od:this,md:a}):Kb(this.gd.rd,{jd:this,hd:a})}var c=this.ie(a);if(!c)return this.Sd(a),null;var d=Jb(this.gd,c);if(void 0!==d){if(0===d.ed.count.value)return d.ed.hd=c,d.ed.md=a,d.clone();d=d.clone();this.Sd(a);return d}d=this.gd.he(c);d=xb[d];if(!d)return b.call(this);d=this.Bd?d.be:d.pointerType;var e=Hb(c,this.gd,d.gd);return null===e?b.call(this):this.Cd?Kb(d.gd.rd,{jd:d,hd:e,od:this,md:a}):Kb(d.gd.rd,
{jd:d,hd:e})};k.getInheritedInstanceCount=function(){return Object.keys(Ib).length};k.getLiveInheritedInstances=function(){var a=[],b;for(b in Ib)Ib.hasOwnProperty(b)&&a.push(Ib[b]);return a};k.flushPendingDeletes=vb;k.setDelayFunction=function(a){tb=a;ub.length&&tb&&tb(vb)};Nb=k.UnboundTypeError=ib("UnboundTypeError");k.count_emval_handles=function(){for(var a=0,b=5;b<Q.length;++b)void 0!==Q[b]&&++a;return a};k.get_first_emval=function(){for(var a=5;a<Q.length;++a)if(void 0!==Q[a])return Q[a];return null};
for(var p,W=0;32>W;++W)yc.push(Array(W));var Vc=new Float32Array(288);for(W=0;288>W;++W)Gc[W]=Vc.subarray(0,W+1);var Wc=new Int32Array(288);for(W=0;288>W;++W)Hc[W]=Wc.subarray(0,W+1);function Sc(a){var b=Array(Aa(a)+1);za(a,b,0,b.length);return b}
var md={cb:function(a){var b=ab[a];delete ab[a];var c=b.Nd,d=b.qd,e=b.Vd,f=e.map(function(g){return g.le}).concat(e.map(function(g){return g.te}));I([a],f,function(g){var h={};e.forEach(function(n,q){var r=g[q],v=n.je,A=n.ke,m=g[q+e.length],t=n.se,y=n.ue;h[n.ge]={read:function(E){return r.fromWireType(v(A,E))},write:function(E,P){var T=[];t(y,E,m.toWireType(T,P));bb(T)}}});return[{name:b.name,fromWireType:function(n){var q={},r;for(r in h)q[r]=h[r].read(n);d(n);return q},toWireType:function(n,q){for(var r in h)if(!(r in
q))throw new TypeError('Missing field:  "'+r+'"');var v=c();for(r in h)h[r].write(v,q[r]);null!==n&&n.push(d,v);return v},argPackAdvance:8,readValueFromPointer:cb,nd:d}]})},fb:function(){},wb:function(a,b,c,d,e){var f=lb(c);b=K(b);J(a,{name:b,fromWireType:function(g){return!!g},toWireType:function(g,h){return h?d:e},argPackAdvance:8,readValueFromPointer:function(g){if(1===c)var h=Ka;else if(2===c)h=B;else if(4===c)h=C;else throw new TypeError("Unknown boolean type size: "+b);return this.fromWireType(h[g>>
f])},nd:null})},h:function(a,b,c,d,e,f,g,h,n,q,r,v,A){r=K(r);f=N(e,f);h&&(h=N(g,h));q&&(q=N(n,q));A=N(v,A);var m=gb(r);zb(m,function(){Qb("Cannot construct "+r+" due to unbound types",[d])});I([a,b,c],d?[d]:[],function(t){t=t[0];if(d){var y=t.gd;var E=y.rd}else E=wb.prototype;t=hb(m,function(){if(Object.getPrototypeOf(this)!==P)throw new nb("Use 'new' to construct "+r);if(void 0===T.sd)throw new nb(r+" has no accessible constructor");var uc=T.sd[arguments.length];if(void 0===uc)throw new nb("Tried to invoke ctor of "+
r+" with invalid number of parameters ("+arguments.length+") - expected ("+Object.keys(T.sd).toString()+") parameters instead!");return uc.apply(this,arguments)});var P=Object.create(E,{constructor:{value:t}});t.prototype=P;var T=new Ab(r,t,P,A,y,f,h,q);y=new M(r,T,!0,!1);E=new M(r+"*",T,!1,!1);var La=new M(r+" const*",T,!1,!0);xb[a]={pointerType:E,be:La};Lb(m,t);return[y,E,La]})},k:function(a,b,c,d,e,f,g,h){b=K(b);f=N(e,f);I([],[a],function(n){n=n[0];var q=n.name+"."+b,r={get:function(){Qb("Cannot access "+
q+" due to unbound types",[c])},enumerable:!0,configurable:!0};r.set=h?function(){Qb("Cannot access "+q+" due to unbound types",[c])}:function(){L(q+" is a read-only property")};Object.defineProperty(n.gd.constructor,b,r);I([],[c],function(v){v=v[0];var A={get:function(){return v.fromWireType(f(d))},enumerable:!0};h&&(h=N(g,h),A.set=function(m){var t=[];h(d,v.toWireType(t,m));bb(t)});Object.defineProperty(n.gd.constructor,b,A);return[]});return[]})},v:function(a,b,c,d,e,f){0<b||qa("Assertion failed: undefined");
var g=Sb(b,c);e=N(d,e);I([],[a],function(h){h=h[0];var n="constructor "+h.name;void 0===h.gd.sd&&(h.gd.sd=[]);if(void 0!==h.gd.sd[b-1])throw new nb("Cannot register multiple constructors with identical number of parameters ("+(b-1)+") for class '"+h.name+"'! Overload resolution is currently only performed using the parameter count, not actual type info!");h.gd.sd[b-1]=function(){Qb("Cannot construct "+h.name+" due to unbound types",g)};I([],g,function(q){q.splice(1,0,null);h.gd.sd[b-1]=Ub(n,q,null,
e,f);return[]});return[]})},e:function(a,b,c,d,e,f,g,h){var n=Sb(c,d);b=K(b);f=N(e,f);I([],[a],function(q){function r(){Qb("Cannot call "+v+" due to unbound types",n)}q=q[0];var v=q.name+"."+b;b.startsWith("@@")&&(b=Symbol[b.substring(2)]);h&&q.gd.qe.push(b);var A=q.gd.rd,m=A[b];void 0===m||void 0===m.kd&&m.className!==q.name&&m.Ad===c-2?(r.Ad=c-2,r.className=q.name,A[b]=r):(yb(A,b,v),A[b].kd[c-2]=r);I([],n,function(t){t=Ub(v,t,q,f,g);void 0===A[b].kd?(t.Ad=c-2,A[b]=t):A[b].kd[c-2]=t;return[]});return[]})},
f:function(a,b,c,d,e,f,g,h,n,q){b=K(b);e=N(d,e);I([],[a],function(r){r=r[0];var v=r.name+"."+b,A={get:function(){Qb("Cannot access "+v+" due to unbound types",[c,g])},enumerable:!0,configurable:!0};A.set=n?function(){Qb("Cannot access "+v+" due to unbound types",[c,g])}:function(){L(v+" is a read-only property")};Object.defineProperty(r.gd.rd,b,A);I([],n?[c,g]:[c],function(m){var t=m[0],y={get:function(){var P=Rb(this,r,v+" getter");return t.fromWireType(e(f,P))},enumerable:!0};if(n){n=N(h,n);var E=
m[1];y.set=function(P){var T=Rb(this,r,v+" setter"),La=[];n(q,T,E.toWireType(La,P));bb(La)}}Object.defineProperty(r.gd.rd,b,y);return[]});return[]})},vb:function(a,b){b=K(b);J(a,{name:b,fromWireType:function(c){var d=Xb(c);Wb(c);return d},toWireType:function(c,d){return Fb(d)},argPackAdvance:8,readValueFromPointer:cb,nd:null})},sb:function(a,b,c,d){function e(){}c=lb(c);b=K(b);e.values={};J(a,{name:b,constructor:e,fromWireType:function(f){return this.constructor.values[f]},toWireType:function(f,g){return g.value},
argPackAdvance:8,readValueFromPointer:Yb(b,c,d),nd:null});zb(b,e)},mb:function(a,b,c){var d=Zb(a,"enum");b=K(b);a=d.constructor;d=Object.create(d.constructor.prototype,{value:{value:c},constructor:{value:hb(d.name+"_"+b,function(){})}});a.values[c]=d;a[b]=d},w:function(a,b,c){c=lb(c);b=K(b);J(a,{name:b,fromWireType:function(d){return d},toWireType:function(d,e){return e},argPackAdvance:8,readValueFromPointer:$b(b,c),nd:null})},y:function(a,b,c,d,e,f){var g=Sb(b,c);a=K(a);e=N(d,e);zb(a,function(){Qb("Cannot call "+
a+" due to unbound types",g)},b-1);I([],g,function(h){h=[h[0],null].concat(h.slice(1));Lb(a,Ub(a,h,null,e,f),b-1);return[]})},m:function(a,b,c,d,e){function f(q){return q}b=K(b);-1===e&&(e=4294967295);var g=lb(c);if(0===d){var h=32-8*c;f=function(q){return q<<h>>>h}}var n=b.includes("unsigned");J(a,{name:b,fromWireType:f,toWireType:function(q,r){if("number"!==typeof r&&"boolean"!==typeof r)throw new TypeError('Cannot convert "'+Db(r)+'" to '+this.name);if(r<d||r>e)throw new TypeError('Passing a number "'+
Db(r)+'" from JS side to C/C++ side to an argument of type "'+b+'", which is outside the valid range ['+d+", "+e+"]!");return n?r>>>0:r|0},argPackAdvance:8,readValueFromPointer:ac(b,g,0!==d),nd:null})},l:function(a,b,c){function d(f){f>>=2;var g=D;return new e(Ja,g[f+1],g[f])}var e=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][b];c=K(c);J(a,{name:c,fromWireType:d,argPackAdvance:8,readValueFromPointer:d},{me:!0})},x:function(a,b){b=K(b);var c="std::string"===
b;J(a,{name:b,fromWireType:function(d){var e=D[d>>2];if(c)for(var f=d+4,g=0;g<=e;++g){var h=d+4+g;if(g==e||0==z[h]){f=ya(f,h-f);if(void 0===n)var n=f;else n+=String.fromCharCode(0),n+=f;f=h+1}}else{n=Array(e);for(g=0;g<e;++g)n[g]=String.fromCharCode(z[d+4+g]);n=n.join("")}O(d);return n},toWireType:function(d,e){e instanceof ArrayBuffer&&(e=new Uint8Array(e));var f="string"===typeof e;f||e instanceof Uint8Array||e instanceof Uint8ClampedArray||e instanceof Int8Array||L("Cannot pass non-string to std::string");
var g=(c&&f?function(){return Aa(e)}:function(){return e.length})(),h=Cc(4+g+1);D[h>>2]=g;if(c&&f)za(e,z,h+4,g+1);else if(f)for(f=0;f<g;++f){var n=e.charCodeAt(f);255<n&&(O(h),L("String has UTF-16 code units that do not fit in 8 bits"));z[h+4+f]=n}else for(f=0;f<g;++f)z[h+4+f]=e[f];null!==d&&d.push(O,h);return h},argPackAdvance:8,readValueFromPointer:cb,nd:function(d){O(d)}})},u:function(a,b,c){c=K(c);if(2===b){var d=Ca;var e=Ea;var f=Fa;var g=function(){return Da};var h=1}else 4===b&&(d=Ga,e=Ha,
f=Ia,g=function(){return D},h=2);J(a,{name:c,fromWireType:function(n){for(var q=D[n>>2],r=g(),v,A=n+4,m=0;m<=q;++m){var t=n+4+m*b;if(m==q||0==r[t>>h])A=d(A,t-A),void 0===v?v=A:(v+=String.fromCharCode(0),v+=A),A=t+b}O(n);return v},toWireType:function(n,q){"string"!==typeof q&&L("Cannot pass non-string to C++ string type "+c);var r=f(q),v=Cc(4+r+b);D[v>>2]=r>>h;e(q,v+4,r+b);null!==n&&n.push(O,v);return v},argPackAdvance:8,readValueFromPointer:cb,nd:function(n){O(n)}})},ib:function(a,b,c,d,e,f){ab[a]=
{name:K(b),Nd:N(c,d),qd:N(e,f),Vd:[]}},bb:function(a,b,c,d,e,f,g,h,n,q){ab[a].Vd.push({ge:K(b),le:c,je:N(d,e),ke:f,te:g,se:N(h,n),ue:q})},xb:function(a,b){b=K(b);J(a,{oe:!0,name:b,argPackAdvance:0,fromWireType:function(){},toWireType:function(){}})},nb:function(){throw"longjmp";},oa:function(a,b,c){a=Xb(a);b=Zb(b,"emval::as");var d=[],e=Fb(d);C[c>>2]=e;return b.toWireType(d,a)},U:function(a,b,c,d){a=dc[a];b=Xb(b);c=cc(c);a(b,c,null,d)},Fc:Wb,J:function(a,b){var c=fc(a,b),d=c[0];b=d.name+"_$"+c.slice(1).map(function(r){return r.name}).join("_")+
"$";var e=gc[b];if(void 0!==e)return e;e=["retType"];for(var f=[d],g="",h=0;h<a-1;++h)g+=(0!==h?", ":"")+"arg"+h,e.push("argType"+h),f.push(c[1+h]);var n="return function "+gb("methodCaller_"+b)+"(handle, name, destructors, args) {\n",q=0;for(h=0;h<a-1;++h)n+="    var arg"+h+" = argType"+h+".readValueFromPointer(args"+(q?"+"+q:"")+");\n",q+=c[h+1].argPackAdvance;n+="    var rv = handle[name]("+g+");\n";for(h=0;h<a-1;++h)c[h+1].deleteObject&&(n+="    argType"+h+".deleteObject(arg"+h+");\n");d.oe||
(n+="    return retType.toWireType(destructors, rv);\n");e.push(n+"};\n");a=Tb(e).apply(null,f);e=ec(a);return gc[b]=e},Ka:function(a,b){a=Xb(a);b=Xb(b);return Fb(a[b])},Ec:function(a){4<a&&(Q[a].Od+=1)},za:function(a){return Fb(cc(a))},da:function(a){var b=Xb(a);bb(b);Wb(a)},Va:function(a,b){a=Zb(a,"_emval_take_value");a=a.readValueFromPointer(b);return Fb(a)},a:function(){qa("")},ob:function(a,b){if(0===a)a=Date.now();else if(1===a||4===a)a=hc();else return C[Xc()>>2]=28,-1;C[b>>2]=a/1E3|0;C[b+
4>>2]=a%1E3*1E6|0;return 0},Ya:function(a){p.activeTexture(a)},Xa:function(a,b){p.attachShader(R[a],S[b])},Wa:function(a,b,c){p.bindAttribLocation(R[a],b,ya(c))},Ua:function(a,b){35051==a?p.Ld=b:35052==a&&(p.td=b);p.bindBuffer(a,mc[b])},Xb:function(a,b){p.bindFramebuffer(a,nc[b])},Wb:function(a,b){p.bindRenderbuffer(a,oc[b])},Fb:function(a,b){p.bindSampler(a,rc[b])},Ta:function(a,b){p.bindTexture(a,pc[b])},nc:function(a){p.bindVertexArray(qc[a])},kc:function(a){p.bindVertexArray(qc[a])},Sa:function(a,
b,c,d){p.blendColor(a,b,c,d)},Ra:function(a){p.blendEquation(a)},Qa:function(a,b){p.blendFunc(a,b)},Kb:function(a,b,c,d,e,f,g,h,n,q){p.blitFramebuffer(a,b,c,d,e,f,g,h,n,q)},Pa:function(a,b,c,d){2<=l.version?c?p.bufferData(a,z,d,c,b):p.bufferData(a,b,d):p.bufferData(a,c?z.subarray(c,c+b):b,d)},Oa:function(a,b,c,d){2<=l.version?p.bufferSubData(a,b,z,d,c):p.bufferSubData(a,b,z.subarray(d,d+c))},Vb:function(a){return p.checkFramebufferStatus(a)},Na:function(a){p.clear(a)},Ma:function(a,b,c,d){p.clearColor(a,
b,c,d)},La:function(a){p.clearStencil(a)},$a:function(a,b,c,d){return p.clientWaitSync(sc[a],b,(c>>>0)+4294967296*d)},Ja:function(a,b,c,d){p.colorMask(!!a,!!b,!!c,!!d)},Ia:function(a){p.compileShader(S[a])},Ha:function(a,b,c,d,e,f,g,h){2<=l.version?p.td?p.compressedTexImage2D(a,b,c,d,e,f,g,h):p.compressedTexImage2D(a,b,c,d,e,f,z,h,g):p.compressedTexImage2D(a,b,c,d,e,f,h?z.subarray(h,h+g):null)},Ga:function(a,b,c,d,e,f,g,h,n){2<=l.version?p.td?p.compressedTexSubImage2D(a,b,c,d,e,f,g,h,n):p.compressedTexSubImage2D(a,
b,c,d,e,f,g,z,n,h):p.compressedTexSubImage2D(a,b,c,d,e,f,g,n?z.subarray(n,n+h):null)},Fa:function(a,b,c,d,e,f,g,h){p.copyTexSubImage2D(a,b,c,d,e,f,g,h)},Ea:function(){var a=ca(R),b=p.createProgram();b.name=a;b.Fd=b.Dd=b.Ed=0;b.Pd=1;R[a]=b;return a},Da:function(a){var b=ca(S);S[b]=p.createShader(a);return b},Ca:function(a){p.cullFace(a)},Ba:function(a,b){for(var c=0;c<a;c++){var d=C[b+4*c>>2],e=mc[d];e&&(p.deleteBuffer(e),e.name=0,mc[d]=null,d==p.Ld&&(p.Ld=0),d==p.td&&(p.td=0))}},Ub:function(a,b){for(var c=
0;c<a;++c){var d=C[b+4*c>>2],e=nc[d];e&&(p.deleteFramebuffer(e),e.name=0,nc[d]=null)}},Aa:function(a){if(a){var b=R[a];b?(p.deleteProgram(b),b.name=0,R[a]=null):U(1281)}},Tb:function(a,b){for(var c=0;c<a;c++){var d=C[b+4*c>>2],e=oc[d];e&&(p.deleteRenderbuffer(e),e.name=0,oc[d]=null)}},Eb:function(a,b){for(var c=0;c<a;c++){var d=C[b+4*c>>2],e=rc[d];e&&(p.deleteSampler(e),e.name=0,rc[d]=null)}},ya:function(a){if(a){var b=S[a];b?(p.deleteShader(b),S[a]=null):U(1281)}},Ib:function(a){if(a){var b=sc[a];
b?(p.deleteSync(b),b.name=0,sc[a]=null):U(1281)}},xa:function(a,b){for(var c=0;c<a;c++){var d=C[b+4*c>>2],e=pc[d];e&&(p.deleteTexture(e),e.name=0,pc[d]=null)}},mc:function(a,b){for(var c=0;c<a;c++){var d=C[b+4*c>>2];p.deleteVertexArray(qc[d]);qc[d]=null}},jc:function(a,b){for(var c=0;c<a;c++){var d=C[b+4*c>>2];p.deleteVertexArray(qc[d]);qc[d]=null}},wa:function(a){p.depthMask(!!a)},va:function(a){p.disable(a)},ua:function(a){p.disableVertexAttribArray(a)},ta:function(a,b,c){p.drawArrays(a,b,c)},hc:function(a,
b,c,d){p.drawArraysInstanced(a,b,c,d)},fc:function(a,b,c,d,e){p.Td.drawArraysInstancedBaseInstanceWEBGL(a,b,c,d,e)},dc:function(a,b){for(var c=yc[a],d=0;d<a;d++)c[d]=C[b+4*d>>2];p.drawBuffers(c)},sa:function(a,b,c,d){p.drawElements(a,b,c,d)},gc:function(a,b,c,d,e){p.drawElementsInstanced(a,b,c,d,e)},ec:function(a,b,c,d,e,f,g){p.Td.drawElementsInstancedBaseVertexBaseInstanceWEBGL(a,b,c,d,e,f,g)},$b:function(a,b,c,d,e,f){p.drawElements(a,d,e,f)},ra:function(a){p.enable(a)},qa:function(a){p.enableVertexAttribArray(a)},
Hb:function(a,b){return(a=p.fenceSync(a,b))?(b=ca(sc),a.name=b,sc[b]=a,b):0},pa:function(){p.finish()},na:function(){p.flush()},Sb:function(a,b,c,d){p.framebufferRenderbuffer(a,b,c,oc[d])},Rb:function(a,b,c,d,e){p.framebufferTexture2D(a,b,c,pc[d],e)},ma:function(a){p.frontFace(a)},la:function(a,b){zc(a,b,"createBuffer",mc)},Qb:function(a,b){zc(a,b,"createFramebuffer",nc)},Pb:function(a,b){zc(a,b,"createRenderbuffer",oc)},Db:function(a,b){zc(a,b,"createSampler",rc)},ka:function(a,b){zc(a,b,"createTexture",
pc)},lc:function(a,b){zc(a,b,"createVertexArray",qc)},ic:function(a,b){zc(a,b,"createVertexArray",qc)},Ob:function(a){p.generateMipmap(a)},ja:function(a,b,c){c?C[c>>2]=p.getBufferParameter(a,b):U(1281)},ia:function(){var a=p.getError()||xc;xc=0;return a},Nb:function(a,b,c,d){a=p.getFramebufferAttachmentParameter(a,b,c);if(a instanceof WebGLRenderbuffer||a instanceof WebGLTexture)a=a.name|0;C[d>>2]=a},Za:function(a,b){Ac(a,b)},ha:function(a,b,c,d){a=p.getProgramInfoLog(R[a]);null===a&&(a="(unknown error)");
b=0<b&&d?za(a,z,d,b):0;c&&(C[c>>2]=b)},ga:function(a,b,c){if(c)if(a>=lc)U(1281);else if(a=R[a],35716==b)a=p.getProgramInfoLog(a),null===a&&(a="(unknown error)"),C[c>>2]=a.length+1;else if(35719==b){if(!a.Fd)for(b=0;b<p.getProgramParameter(a,35718);++b)a.Fd=Math.max(a.Fd,p.getActiveUniform(a,b).name.length+1);C[c>>2]=a.Fd}else if(35722==b){if(!a.Dd)for(b=0;b<p.getProgramParameter(a,35721);++b)a.Dd=Math.max(a.Dd,p.getActiveAttrib(a,b).name.length+1);C[c>>2]=a.Dd}else if(35381==b){if(!a.Ed)for(b=0;b<
p.getProgramParameter(a,35382);++b)a.Ed=Math.max(a.Ed,p.getActiveUniformBlockName(a,b).length+1);C[c>>2]=a.Ed}else C[c>>2]=p.getProgramParameter(a,b);else U(1281)},Mb:function(a,b,c){c?C[c>>2]=p.getRenderbufferParameter(a,b):U(1281)},fa:function(a,b,c,d){a=p.getShaderInfoLog(S[a]);null===a&&(a="(unknown error)");b=0<b&&d?za(a,z,d,b):0;c&&(C[c>>2]=b)},yb:function(a,b,c,d){a=p.getShaderPrecisionFormat(a,b);C[c>>2]=a.rangeMin;C[c+4>>2]=a.rangeMax;C[d>>2]=a.precision},ea:function(a,b,c){c?35716==b?(a=
p.getShaderInfoLog(S[a]),null===a&&(a="(unknown error)"),C[c>>2]=a?a.length+1:0):35720==b?(a=p.getShaderSource(S[a]),C[c>>2]=a?a.length+1:0):C[c>>2]=p.getShaderParameter(S[a],b):U(1281)},s:function(a){var b=tc[a];if(!b){switch(a){case 7939:b=p.getSupportedExtensions()||[];b=b.concat(b.map(function(d){return"GL_"+d}));b=Bc(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=p.getParameter(a))||U(1280);b=b&&Bc(b);break;case 7938:b=p.getParameter(7938);b=2<=l.version?"OpenGL ES 3.0 ("+b+
")":"OpenGL ES 2.0 ("+b+")";b=Bc(b);break;case 35724:b=p.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=Bc(b);break;default:U(1280)}tc[a]=b}return b},_a:function(a,b){if(2>l.version)return U(1282),0;var c=vc[a];if(c)return 0>b||b>=c.length?(U(1281),0):c[b];switch(a){case 7939:return c=p.getSupportedExtensions()||[],c=c.concat(c.map(function(d){return"GL_"+d})),c=c.map(function(d){return Bc(d)}),
c=vc[a]=c,0>b||b>=c.length?(U(1281),0):c[b];default:return U(1280),0}},ca:function(a,b){b=ya(b);if(a=R[a]){var c=a,d=c.yd,e=c.Zd,f;if(!d)for(c.yd=d={},c.Yd={},f=0;f<p.getProgramParameter(c,35718);++f){var g=p.getActiveUniform(c,f);var h=g.name;g=g.size;var n=Dc(h);n=0<n?h.slice(0,n):h;var q=c.Pd;c.Pd+=g;e[n]=[g,q];for(h=0;h<g;++h)d[q]=h,c.Yd[q++]=n}c=a.yd;d=0;e=b;f=Dc(b);0<f&&(d=parseInt(b.slice(f+1))>>>0,e=b.slice(0,f));if((e=a.Zd[e])&&d<e[0]&&(d+=e[1],c[d]=c[d]||p.getUniformLocation(a,b)))return d}else U(1281);
return-1},Ab:function(a,b,c){for(var d=yc[b],e=0;e<b;e++)d[e]=C[c+4*e>>2];p.invalidateFramebuffer(a,d)},zb:function(a,b,c,d,e,f,g){for(var h=yc[b],n=0;n<b;n++)h[n]=C[c+4*n>>2];p.invalidateSubFramebuffer(a,h,d,e,f,g)},Gb:function(a){return p.isSync(sc[a])},ba:function(a){return(a=pc[a])?p.isTexture(a):0},aa:function(a){p.lineWidth(a)},$:function(a){a=R[a];p.linkProgram(a);a.yd=0;a.Zd={}},bc:function(a,b,c,d,e,f){p.Wd.multiDrawArraysInstancedBaseInstanceWEBGL(a,C,b>>2,C,c>>2,C,d>>2,D,e>>2,f)},ac:function(a,
b,c,d,e,f,g,h){p.Wd.multiDrawElementsInstancedBaseVertexBaseInstanceWEBGL(a,C,b>>2,c,C,d>>2,C,e>>2,C,f>>2,D,g>>2,h)},_:function(a,b){3317==a&&(wc=b);p.pixelStorei(a,b)},cc:function(a){p.readBuffer(a)},Z:function(a,b,c,d,e,f,g){if(2<=l.version)if(p.Ld)p.readPixels(a,b,c,d,e,f,g);else{var h=Ec(f);p.readPixels(a,b,c,d,e,f,h,g>>31-Math.clz32(h.BYTES_PER_ELEMENT))}else(g=Fc(f,e,c,d,g))?p.readPixels(a,b,c,d,e,f,g):U(1280)},Lb:function(a,b,c,d){p.renderbufferStorage(a,b,c,d)},Jb:function(a,b,c,d,e){p.renderbufferStorageMultisample(a,
b,c,d,e)},Cb:function(a,b,c){p.samplerParameteri(rc[a],b,c)},Bb:function(a,b,c){p.samplerParameteri(rc[a],b,C[c>>2])},Y:function(a,b,c,d){p.scissor(a,b,c,d)},X:function(a,b,c,d){for(var e="",f=0;f<b;++f){var g=d?C[d+4*f>>2]:-1;e+=ya(C[c+4*f>>2],0>g?void 0:g)}p.shaderSource(S[a],e)},W:function(a,b,c){p.stencilFunc(a,b,c)},V:function(a,b,c,d){p.stencilFuncSeparate(a,b,c,d)},T:function(a){p.stencilMask(a)},S:function(a,b){p.stencilMaskSeparate(a,b)},R:function(a,b,c){p.stencilOp(a,b,c)},Q:function(a,
b,c,d){p.stencilOpSeparate(a,b,c,d)},P:function(a,b,c,d,e,f,g,h,n){if(2<=l.version)if(p.td)p.texImage2D(a,b,c,d,e,f,g,h,n);else if(n){var q=Ec(h);p.texImage2D(a,b,c,d,e,f,g,h,q,n>>31-Math.clz32(q.BYTES_PER_ELEMENT))}else p.texImage2D(a,b,c,d,e,f,g,h,null);else p.texImage2D(a,b,c,d,e,f,g,h,n?Fc(h,g,d,e,n):null)},O:function(a,b,c){p.texParameterf(a,b,c)},N:function(a,b,c){p.texParameterf(a,b,F[c>>2])},M:function(a,b,c){p.texParameteri(a,b,c)},L:function(a,b,c){p.texParameteri(a,b,C[c>>2])},_b:function(a,
b,c,d,e){p.texStorage2D(a,b,c,d,e)},K:function(a,b,c,d,e,f,g,h,n){if(2<=l.version)if(p.td)p.texSubImage2D(a,b,c,d,e,f,g,h,n);else if(n){var q=Ec(h);p.texSubImage2D(a,b,c,d,e,f,g,h,q,n>>31-Math.clz32(q.BYTES_PER_ELEMENT))}else p.texSubImage2D(a,b,c,d,e,f,g,h,null);else q=null,n&&(q=Fc(h,g,e,f,n)),p.texSubImage2D(a,b,c,d,e,f,g,h,q)},I:function(a,b){p.uniform1f(V(a),b)},H:function(a,b,c){if(2<=l.version)p.uniform1fv(V(a),F,c>>2,b);else{if(288>=b)for(var d=Gc[b-1],e=0;e<b;++e)d[e]=F[c+4*e>>2];else d=
F.subarray(c>>2,c+4*b>>2);p.uniform1fv(V(a),d)}},G:function(a,b){p.uniform1i(V(a),b)},F:function(a,b,c){if(2<=l.version)p.uniform1iv(V(a),C,c>>2,b);else{if(288>=b)for(var d=Hc[b-1],e=0;e<b;++e)d[e]=C[c+4*e>>2];else d=C.subarray(c>>2,c+4*b>>2);p.uniform1iv(V(a),d)}},E:function(a,b,c){p.uniform2f(V(a),b,c)},D:function(a,b,c){if(2<=l.version)p.uniform2fv(V(a),F,c>>2,2*b);else{if(144>=b)for(var d=Gc[2*b-1],e=0;e<2*b;e+=2)d[e]=F[c+4*e>>2],d[e+1]=F[c+(4*e+4)>>2];else d=F.subarray(c>>2,c+8*b>>2);p.uniform2fv(V(a),
d)}},C:function(a,b,c){p.uniform2i(V(a),b,c)},B:function(a,b,c){if(2<=l.version)p.uniform2iv(V(a),C,c>>2,2*b);else{if(144>=b)for(var d=Hc[2*b-1],e=0;e<2*b;e+=2)d[e]=C[c+4*e>>2],d[e+1]=C[c+(4*e+4)>>2];else d=C.subarray(c>>2,c+8*b>>2);p.uniform2iv(V(a),d)}},A:function(a,b,c,d){p.uniform3f(V(a),b,c,d)},z:function(a,b,c){if(2<=l.version)p.uniform3fv(V(a),F,c>>2,3*b);else{if(96>=b)for(var d=Gc[3*b-1],e=0;e<3*b;e+=3)d[e]=F[c+4*e>>2],d[e+1]=F[c+(4*e+4)>>2],d[e+2]=F[c+(4*e+8)>>2];else d=F.subarray(c>>2,c+
12*b>>2);p.uniform3fv(V(a),d)}},Dc:function(a,b,c,d){p.uniform3i(V(a),b,c,d)},Cc:function(a,b,c){if(2<=l.version)p.uniform3iv(V(a),C,c>>2,3*b);else{if(96>=b)for(var d=Hc[3*b-1],e=0;e<3*b;e+=3)d[e]=C[c+4*e>>2],d[e+1]=C[c+(4*e+4)>>2],d[e+2]=C[c+(4*e+8)>>2];else d=C.subarray(c>>2,c+12*b>>2);p.uniform3iv(V(a),d)}},Bc:function(a,b,c,d,e){p.uniform4f(V(a),b,c,d,e)},Ac:function(a,b,c){if(2<=l.version)p.uniform4fv(V(a),F,c>>2,4*b);else{if(72>=b){var d=Gc[4*b-1],e=F;c>>=2;for(var f=0;f<4*b;f+=4){var g=c+f;
d[f]=e[g];d[f+1]=e[g+1];d[f+2]=e[g+2];d[f+3]=e[g+3]}}else d=F.subarray(c>>2,c+16*b>>2);p.uniform4fv(V(a),d)}},zc:function(a,b,c,d,e){p.uniform4i(V(a),b,c,d,e)},yc:function(a,b,c){if(2<=l.version)p.uniform4iv(V(a),C,c>>2,4*b);else{if(72>=b)for(var d=Hc[4*b-1],e=0;e<4*b;e+=4)d[e]=C[c+4*e>>2],d[e+1]=C[c+(4*e+4)>>2],d[e+2]=C[c+(4*e+8)>>2],d[e+3]=C[c+(4*e+12)>>2];else d=C.subarray(c>>2,c+16*b>>2);p.uniform4iv(V(a),d)}},xc:function(a,b,c,d){if(2<=l.version)p.uniformMatrix2fv(V(a),!!c,F,d>>2,4*b);else{if(72>=
b)for(var e=Gc[4*b-1],f=0;f<4*b;f+=4)e[f]=F[d+4*f>>2],e[f+1]=F[d+(4*f+4)>>2],e[f+2]=F[d+(4*f+8)>>2],e[f+3]=F[d+(4*f+12)>>2];else e=F.subarray(d>>2,d+16*b>>2);p.uniformMatrix2fv(V(a),!!c,e)}},wc:function(a,b,c,d){if(2<=l.version)p.uniformMatrix3fv(V(a),!!c,F,d>>2,9*b);else{if(32>=b)for(var e=Gc[9*b-1],f=0;f<9*b;f+=9)e[f]=F[d+4*f>>2],e[f+1]=F[d+(4*f+4)>>2],e[f+2]=F[d+(4*f+8)>>2],e[f+3]=F[d+(4*f+12)>>2],e[f+4]=F[d+(4*f+16)>>2],e[f+5]=F[d+(4*f+20)>>2],e[f+6]=F[d+(4*f+24)>>2],e[f+7]=F[d+(4*f+28)>>2],e[f+
8]=F[d+(4*f+32)>>2];else e=F.subarray(d>>2,d+36*b>>2);p.uniformMatrix3fv(V(a),!!c,e)}},vc:function(a,b,c,d){if(2<=l.version)p.uniformMatrix4fv(V(a),!!c,F,d>>2,16*b);else{if(18>=b){var e=Gc[16*b-1],f=F;d>>=2;for(var g=0;g<16*b;g+=16){var h=d+g;e[g]=f[h];e[g+1]=f[h+1];e[g+2]=f[h+2];e[g+3]=f[h+3];e[g+4]=f[h+4];e[g+5]=f[h+5];e[g+6]=f[h+6];e[g+7]=f[h+7];e[g+8]=f[h+8];e[g+9]=f[h+9];e[g+10]=f[h+10];e[g+11]=f[h+11];e[g+12]=f[h+12];e[g+13]=f[h+13];e[g+14]=f[h+14];e[g+15]=f[h+15]}}else e=F.subarray(d>>2,d+
64*b>>2);p.uniformMatrix4fv(V(a),!!c,e)}},uc:function(a){a=R[a];p.useProgram(a);p.de=a},tc:function(a,b){p.vertexAttrib1f(a,b)},sc:function(a,b){p.vertexAttrib2f(a,F[b>>2],F[b+4>>2])},rc:function(a,b){p.vertexAttrib3f(a,F[b>>2],F[b+4>>2],F[b+8>>2])},qc:function(a,b){p.vertexAttrib4f(a,F[b>>2],F[b+4>>2],F[b+8>>2],F[b+12>>2])},Zb:function(a,b){p.vertexAttribDivisor(a,b)},Yb:function(a,b,c,d,e){p.vertexAttribIPointer(a,b,c,d,e)},pc:function(a,b,c,d,e,f){p.vertexAttribPointer(a,b,c,!!d,e,f)},oc:function(a,
b,c,d){p.viewport(a,b,c,d)},ab:function(a,b,c,d){p.waitSync(sc[a],b,(c>>>0)+4294967296*d)},t:function(a){var b=z.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);d=Math.max(a,d);0<d%65536&&(d+=65536-d%65536);a:{try{ua.grow(Math.min(2147483648,d)-Ja.byteLength+65535>>>16);Na();var e=1;break a}catch(f){}e=void 0}if(e)return!0}return!1},qb:function(a,b){var c=0;Jc().forEach(function(d,e){var f=b+c;e=C[a+4*e>>2]=f;for(f=0;f<d.length;++f)Ka[e++>>
0]=d.charCodeAt(f);Ka[e>>0]=0;c+=d.length+1});return 0},rb:function(a,b){var c=Jc();C[a>>2]=c.length;var d=0;c.forEach(function(e){d+=e.length+1});C[b>>2]=d;return 0},ub:function(){return 0},eb:function(){},tb:function(a,b,c,d){for(var e=0,f=0;f<c;f++){var g=C[b>>2],h=C[b+4>>2];b+=8;for(var n=0;n<h;n++){var q=z[g+n],r=Lc[a];0===q||10===q?((1===a?ra:x)(xa(r,0)),r.length=0):r.push(q)}e+=h}C[d>>2]=e;return 0},b:function(){return sa},db:function(a,b){Ac(a,b)},n:Yc,g:Zc,o:$c,r:ad,hb:bd,jb:cd,q:dd,j:ed,
d:fd,p:gd,i:hd,kb:jd,gb:kd,lb:ld,c:function(a){sa=a},pb:function(a,b,c,d){return Rc(a,b,c,d)}};
(function(){function a(e){k.asm=e.exports;ua=k.asm.Gc;Na();Oa=k.asm.Qc;Qa.unshift(k.asm.Hc);Ta--;k.monitorRunDependencies&&k.monitorRunDependencies(Ta);0==Ta&&(null!==Ua&&(clearInterval(Ua),Ua=null),Va&&(e=Va,Va=null,e()))}function b(e){a(e.instance)}function c(e){return Za().then(function(f){return WebAssembly.instantiate(f,d)}).then(function(f){return f}).then(e,function(f){x("failed to asynchronously prepare wasm: "+f);qa(f)})}var d={a:md};Ta++;k.monitorRunDependencies&&k.monitorRunDependencies(Ta);
if(k.instantiateWasm)try{return k.instantiateWasm(d,a)}catch(e){return x("Module.instantiateWasm callback failed with error: "+e),!1}(function(){return ta||"function"!==typeof WebAssembly.instantiateStreaming||Wa()||G.startsWith("file://")||"function"!==typeof fetch?c(b):fetch(G,{credentials:"same-origin"}).then(function(e){return WebAssembly.instantiateStreaming(e,d).then(b,function(f){x("wasm streaming compile failed: "+f);x("falling back to ArrayBuffer instantiation");return c(b)})})})().catch(ba);
return{}})();k.___wasm_call_ctors=function(){return(k.___wasm_call_ctors=k.asm.Hc).apply(null,arguments)};var Cc=k._malloc=function(){return(Cc=k._malloc=k.asm.Ic).apply(null,arguments)},Xc=k.___errno_location=function(){return(Xc=k.___errno_location=k.asm.Jc).apply(null,arguments)},O=k._free=function(){return(O=k._free=k.asm.Kc).apply(null,arguments)},Pb=k.___getTypeName=function(){return(Pb=k.___getTypeName=k.asm.Lc).apply(null,arguments)};
k.___embind_register_native_and_builtin_types=function(){return(k.___embind_register_native_and_builtin_types=k.asm.Mc).apply(null,arguments)};var X=k.stackSave=function(){return(X=k.stackSave=k.asm.Nc).apply(null,arguments)},Y=k.stackRestore=function(){return(Y=k.stackRestore=k.asm.Oc).apply(null,arguments)},Z=k._setThrew=function(){return(Z=k._setThrew=k.asm.Pc).apply(null,arguments)};k.dynCall_iiiij=function(){return(k.dynCall_iiiij=k.asm.Rc).apply(null,arguments)};
k.dynCall_viiij=function(){return(k.dynCall_viiij=k.asm.Sc).apply(null,arguments)};k.dynCall_iiij=function(){return(k.dynCall_iiij=k.asm.Tc).apply(null,arguments)};k.dynCall_viij=function(){return(k.dynCall_viij=k.asm.Uc).apply(null,arguments)};k.dynCall_viiiiij=function(){return(k.dynCall_viiiiij=k.asm.Vc).apply(null,arguments)};k.dynCall_jii=function(){return(k.dynCall_jii=k.asm.Wc).apply(null,arguments)};k.dynCall_viji=function(){return(k.dynCall_viji=k.asm.Xc).apply(null,arguments)};
k.dynCall_ji=function(){return(k.dynCall_ji=k.asm.Yc).apply(null,arguments)};k.dynCall_iij=function(){return(k.dynCall_iij=k.asm.Zc).apply(null,arguments)};k.dynCall_vij=function(){return(k.dynCall_vij=k.asm._c).apply(null,arguments)};k.dynCall_jiji=function(){return(k.dynCall_jiji=k.asm.$c).apply(null,arguments)};k.dynCall_viijii=function(){return(k.dynCall_viijii=k.asm.ad).apply(null,arguments)};k.dynCall_iiiiij=function(){return(k.dynCall_iiiiij=k.asm.bd).apply(null,arguments)};
k.dynCall_iiiiijj=function(){return(k.dynCall_iiiiijj=k.asm.cd).apply(null,arguments)};k.dynCall_iiiiiijj=function(){return(k.dynCall_iiiiiijj=k.asm.dd).apply(null,arguments)};function fd(a,b,c){var d=X();try{H(a)(b,c)}catch(e){Y(d);if(e!==e+0&&"longjmp"!==e)throw e;Z(1,0)}}function $c(a,b,c,d){var e=X();try{return H(a)(b,c,d)}catch(f){Y(e);if(f!==f+0&&"longjmp"!==f)throw f;Z(1,0)}}function hd(a,b,c,d,e){var f=X();try{H(a)(b,c,d,e)}catch(g){Y(f);if(g!==g+0&&"longjmp"!==g)throw g;Z(1,0)}}
function ed(a,b){var c=X();try{H(a)(b)}catch(d){Y(c);if(d!==d+0&&"longjmp"!==d)throw d;Z(1,0)}}function Zc(a,b,c){var d=X();try{return H(a)(b,c)}catch(e){Y(d);if(e!==e+0&&"longjmp"!==e)throw e;Z(1,0)}}function ad(a,b,c,d,e){var f=X();try{return H(a)(b,c,d,e)}catch(g){Y(f);if(g!==g+0&&"longjmp"!==g)throw g;Z(1,0)}}function Yc(a,b){var c=X();try{return H(a)(b)}catch(d){Y(c);if(d!==d+0&&"longjmp"!==d)throw d;Z(1,0)}}
function dd(a){var b=X();try{H(a)()}catch(c){Y(b);if(c!==c+0&&"longjmp"!==c)throw c;Z(1,0)}}function ld(a,b,c,d,e,f,g,h,n){var q=X();try{H(a)(b,c,d,e,f,g,h,n)}catch(r){Y(q);if(r!==r+0&&"longjmp"!==r)throw r;Z(1,0)}}function gd(a,b,c,d){var e=X();try{H(a)(b,c,d)}catch(f){Y(e);if(f!==f+0&&"longjmp"!==f)throw f;Z(1,0)}}function jd(a,b,c,d,e,f){var g=X();try{H(a)(b,c,d,e,f)}catch(h){Y(g);if(h!==h+0&&"longjmp"!==h)throw h;Z(1,0)}}
function cd(a,b,c,d,e,f,g){var h=X();try{return H(a)(b,c,d,e,f,g)}catch(n){Y(h);if(n!==n+0&&"longjmp"!==n)throw n;Z(1,0)}}function bd(a,b,c,d,e,f){var g=X();try{return H(a)(b,c,d,e,f)}catch(h){Y(g);if(h!==h+0&&"longjmp"!==h)throw h;Z(1,0)}}function kd(a,b,c,d,e,f,g){var h=X();try{H(a)(b,c,d,e,f,g)}catch(n){Y(h);if(n!==n+0&&"longjmp"!==n)throw n;Z(1,0)}}var nd;Va=function od(){nd||pd();nd||(Va=od)};
function pd(){function a(){if(!nd&&(nd=!0,k.calledRun=!0,!va)){$a(Qa);aa(k);if(k.onRuntimeInitialized)k.onRuntimeInitialized();if(k.postRun)for("function"==typeof k.postRun&&(k.postRun=[k.postRun]);k.postRun.length;){var b=k.postRun.shift();Ra.unshift(b)}$a(Ra)}}if(!(0<Ta)){if(k.preRun)for("function"==typeof k.preRun&&(k.preRun=[k.preRun]);k.preRun.length;)Sa();$a(Pa);0<Ta||(k.setStatus?(k.setStatus("Running..."),setTimeout(function(){setTimeout(function(){k.setStatus("")},1);a()},1)):a())}}
k.run=pd;if(k.preInit)for("function"==typeof k.preInit&&(k.preInit=[k.preInit]);0<k.preInit.length;)k.preInit.pop()();pd();


  return Rive.ready
}
);
})();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Rive);

/***/ }),
/* 2 */
/***/ ((module) => {

module.exports = JSON.parse('{"name":"@rive-app/webgl","version":"1.0.19","description":"Rive\'s webgl based web api.","main":"rive.js","homepage":"https://rive.app","repository":{"type":"git","url":"https://github.com/rive-app/rive-wasm/tree/master/js"},"keywords":["rive","animation"],"author":"Rive","contributors":["Luigi Rosso <luigi@rive.app> (https://rive.app)","Maxwell Talbot <max@rive.app> (https://rive.app)","Arthur Vivian <arthur@rive.app> (https://rive.app)","Umberto Sonnino <umberto@rive.app> (https://rive.app)","Matthew Sullivan <matt.j.sullivan@gmail.com> (mailto:matt.j.sullivan@gmail.com)"],"license":"MIT","files":["rive.js","rive.wasm","rive.js.map","rive.d.ts","rive_advanced.mjs.d.ts"],"typings":"rive.d.ts","dependencies":{},"browser":{"fs":false,"path":false}}');

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Fit": () => (/* binding */ Fit),
/* harmony export */   "Alignment": () => (/* binding */ Alignment),
/* harmony export */   "Layout": () => (/* binding */ Layout),
/* harmony export */   "RuntimeLoader": () => (/* binding */ RuntimeLoader),
/* harmony export */   "StateMachineInputType": () => (/* binding */ StateMachineInputType),
/* harmony export */   "StateMachineInput": () => (/* binding */ StateMachineInput),
/* harmony export */   "EventType": () => (/* binding */ EventType),
/* harmony export */   "LoopType": () => (/* binding */ LoopType),
/* harmony export */   "Rive": () => (/* binding */ Rive),
/* harmony export */   "Testing": () => (/* binding */ Testing)
/* harmony export */ });
/* harmony import */ var _rive_advanced_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var package_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


// Tracks playback states; numbers map to the runtime's numerical values
// i.e. play: 0, pause: 1, stop: 2
var PlaybackState;
(function (PlaybackState) {
    PlaybackState[PlaybackState["Play"] = 0] = "Play";
    PlaybackState[PlaybackState["Pause"] = 1] = "Pause";
    PlaybackState[PlaybackState["Stop"] = 2] = "Stop";
})(PlaybackState || (PlaybackState = {}));
// #region layout
// Fit options for the canvas
var Fit;
(function (Fit) {
    Fit["Cover"] = "cover";
    Fit["Contain"] = "contain";
    Fit["Fill"] = "fill";
    Fit["FitWidth"] = "fitWidth";
    Fit["FitHeight"] = "fitHeight";
    Fit["None"] = "none";
    Fit["ScaleDown"] = "scaleDown";
})(Fit || (Fit = {}));
// Alignment options for the canvas
var Alignment;
(function (Alignment) {
    Alignment["Center"] = "center";
    Alignment["TopLeft"] = "topLeft";
    Alignment["TopCenter"] = "topCenter";
    Alignment["TopRight"] = "topRight";
    Alignment["CenterLeft"] = "centerLeft";
    Alignment["CenterRight"] = "centerRight";
    Alignment["BottomLeft"] = "bottomLeft";
    Alignment["BottomCenter"] = "bottomCenter";
    Alignment["BottomRight"] = "bottomRight";
})(Alignment || (Alignment = {}));
// Alignment options for Rive animations in a HTML canvas
var Layout = /** @class */ (function () {
    function Layout(params) {
        var _a, _b, _c, _d, _e, _f;
        this.fit = (_a = params === null || params === void 0 ? void 0 : params.fit) !== null && _a !== void 0 ? _a : Fit.Contain;
        this.alignment = (_b = params === null || params === void 0 ? void 0 : params.alignment) !== null && _b !== void 0 ? _b : Alignment.Center;
        this.minX = (_c = params === null || params === void 0 ? void 0 : params.minX) !== null && _c !== void 0 ? _c : 0;
        this.minY = (_d = params === null || params === void 0 ? void 0 : params.minY) !== null && _d !== void 0 ? _d : 0;
        this.maxX = (_e = params === null || params === void 0 ? void 0 : params.maxX) !== null && _e !== void 0 ? _e : 0;
        this.maxY = (_f = params === null || params === void 0 ? void 0 : params.maxY) !== null && _f !== void 0 ? _f : 0;
    }
    // Alternative constructor to build a Layout from an interface/object
    Layout.new = function (_a) {
        var fit = _a.fit, alignment = _a.alignment, minX = _a.minX, minY = _a.minY, maxX = _a.maxX, maxY = _a.maxY;
        console.warn('This function is deprecated: please use `new Layout({})` instead');
        return new Layout({ fit: fit, alignment: alignment, minX: minX, minY: minY, maxX: maxX, maxY: maxY });
    };
    /**
     * Makes a copy of the layout, replacing any specified parameters
     */
    Layout.prototype.copyWith = function (_a) {
        var fit = _a.fit, alignment = _a.alignment, minX = _a.minX, minY = _a.minY, maxX = _a.maxX, maxY = _a.maxY;
        return new Layout({
            fit: fit !== null && fit !== void 0 ? fit : this.fit,
            alignment: alignment !== null && alignment !== void 0 ? alignment : this.alignment,
            minX: minX !== null && minX !== void 0 ? minX : this.minX,
            minY: minY !== null && minY !== void 0 ? minY : this.minY,
            maxX: maxX !== null && maxX !== void 0 ? maxX : this.maxX,
            maxY: maxY !== null && maxY !== void 0 ? maxY : this.maxY
        });
    };
    // Returns fit for the Wasm runtime format
    Layout.prototype.runtimeFit = function (rive) {
        if (this.cachedRuntimeFit)
            return this.cachedRuntimeFit;
        var fit;
        if (this.fit === Fit.Cover)
            fit = rive.Fit.cover;
        else if (this.fit === Fit.Contain)
            fit = rive.Fit.contain;
        else if (this.fit === Fit.Fill)
            fit = rive.Fit.fill;
        else if (this.fit === Fit.FitWidth)
            fit = rive.Fit.fitWidth;
        else if (this.fit === Fit.FitHeight)
            fit = rive.Fit.fitHeight;
        else if (this.fit === Fit.ScaleDown)
            fit = rive.Fit.scaleDown;
        else
            fit = rive.Fit.none;
        this.cachedRuntimeFit = fit;
        return fit;
    };
    // Returns alignment for the Wasm runtime format
    Layout.prototype.runtimeAlignment = function (rive) {
        if (this.cachedRuntimeAlignment)
            return this.cachedRuntimeAlignment;
        var alignment;
        if (this.alignment === Alignment.TopLeft)
            alignment = rive.Alignment.topLeft;
        else if (this.alignment === Alignment.TopCenter)
            alignment = rive.Alignment.topCenter;
        else if (this.alignment === Alignment.TopRight)
            alignment = rive.Alignment.topRight;
        else if (this.alignment === Alignment.CenterLeft)
            alignment = rive.Alignment.centerLeft;
        else if (this.alignment === Alignment.CenterRight)
            alignment = rive.Alignment.centerRight;
        else if (this.alignment === Alignment.BottomLeft)
            alignment = rive.Alignment.bottomLeft;
        else if (this.alignment === Alignment.BottomCenter)
            alignment = rive.Alignment.bottomCenter;
        else if (this.alignment === Alignment.BottomRight)
            alignment = rive.Alignment.bottomRight;
        else
            alignment = rive.Alignment.center;
        this.cachedRuntimeAlignment = alignment;
        return alignment;
    };
    return Layout;
}());

// Runtime singleton; use getInstance to provide a callback that returns the
// Rive runtime
var RuntimeLoader = /** @class */ (function () {
    // Class is never instantiated
    function RuntimeLoader() {
    }
    // Loads the runtime
    RuntimeLoader.loadRuntime = function () {
        _rive_advanced_mjs__WEBPACK_IMPORTED_MODULE_0__.default({
            // Loads Wasm bundle
            locateFile: function (_) { return RuntimeLoader.wasmURL; }
        }).then(function (rive) {
            var _a;
            RuntimeLoader.runtime = rive;
            // Fire all the callbacks
            while (RuntimeLoader.callBackQueue.length > 0) {
                (_a = RuntimeLoader.callBackQueue.shift()) === null || _a === void 0 ? void 0 : _a(RuntimeLoader.runtime);
            }
        });
    };
    // Provides a runtime instance via a callback
    RuntimeLoader.getInstance = function (callback) {
        // If it's not loading, start loading runtime
        if (!RuntimeLoader.isLoading) {
            RuntimeLoader.isLoading = true;
            RuntimeLoader.loadRuntime();
        }
        if (!RuntimeLoader.runtime) {
            RuntimeLoader.callBackQueue.push(callback);
        }
        else {
            callback(RuntimeLoader.runtime);
        }
    };
    // Provides a runtime instance via a promise
    RuntimeLoader.awaitInstance = function () {
        return new Promise(function (resolve, reject) {
            return RuntimeLoader.getInstance(function (rive) { return resolve(rive); });
        });
    };
    // Manually sets the wasm url
    RuntimeLoader.setWasmUrl = function (url) {
        RuntimeLoader.wasmURL = url;
    };
    // Flag to indicate that loading has started/completed
    RuntimeLoader.isLoading = false;
    // List of callbacks for the runtime that come in while loading
    RuntimeLoader.callBackQueue = [];
    // Path to the Wasm file; default path works for testing only;
    // if embedded wasm is used then this is never used.
    RuntimeLoader.wasmURL = "https://unpkg.com/" + package_json__WEBPACK_IMPORTED_MODULE_1__.name + "@" + package_json__WEBPACK_IMPORTED_MODULE_1__.version + "/rive.wasm";
    return RuntimeLoader;
}());

// #endregion
// #region animations
// Wraps animations and instances from the runtime and keeps track of playback
// state
var Animation = /** @class */ (function () {
    /**
     * Constructs a new animation
     * @constructor
     * @param {any} animation: runtime animation object
     * @param {any} instance: runtime animation instance object
     */
    function Animation(animation, runtime, playing) {
        this.animation = animation;
        this.playing = playing;
        this.loopCount = 0;
        // Time to which the animation should move to on the next render
        this.scrubTo = null;
        this.instance = new runtime.LinearAnimationInstance(animation);
    }
    Object.defineProperty(Animation.prototype, "name", {
        // Returns the animation's name
        get: function () {
            return this.animation.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Animation.prototype, "time", {
        // Returns the animation's current time
        get: function () {
            return this.instance.time;
        },
        // Sets the animation's current time
        set: function (value) {
            this.instance.time = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Animation.prototype, "loopValue", {
        // Returns the animation's loop type
        get: function () {
            return this.animation.loopValue;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Advances the animation by the give time. If the animation needs scrubbing,
     * time is ignored and the stored scrub value is used.
     * @param time the time to advance the animation by if no scrubbing required
     */
    Animation.prototype.advance = function (time) {
        if (this.scrubTo === null) {
            this.instance.advance(time);
        }
        else {
            this.instance.time = 0;
            this.instance.advance(this.scrubTo);
            this.scrubTo = null;
        }
    };
    Object.defineProperty(Animation.prototype, "needsScrub", {
        get: function () {
            return this.scrubTo !== null;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Deletes the backing Wasm animation instance; once this is called, this
     * animation is no more.
     */
    Animation.prototype.cleanup = function () {
        this.instance.delete();
    };
    return Animation;
}());
// #endregion
// #region state machines
var StateMachineInputType;
(function (StateMachineInputType) {
    StateMachineInputType[StateMachineInputType["Number"] = 56] = "Number";
    StateMachineInputType[StateMachineInputType["Trigger"] = 58] = "Trigger";
    StateMachineInputType[StateMachineInputType["Boolean"] = 59] = "Boolean";
})(StateMachineInputType || (StateMachineInputType = {}));
/**
 * An input for a state machine
 */
var StateMachineInput = /** @class */ (function () {
    function StateMachineInput(type, runtimeInput) {
        this.type = type;
        this.runtimeInput = runtimeInput;
    }
    Object.defineProperty(StateMachineInput.prototype, "name", {
        /**
         * Returns the name of the input
         */
        get: function () {
            return this.runtimeInput.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StateMachineInput.prototype, "value", {
        /**
         * Returns the current value of the input
         */
        get: function () {
            return this.runtimeInput.value;
        },
        /**
         * Sets the value of the input
         */
        set: function (value) {
            this.runtimeInput.value = value;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Fires a trigger; does nothing on Number or Boolean input types
     */
    StateMachineInput.prototype.fire = function () {
        if (this.type === StateMachineInputType.Trigger) {
            this.runtimeInput.fire();
        }
    };
    return StateMachineInput;
}());

var StateMachine = /** @class */ (function () {
    /**
     * @constructor
     * @param stateMachine runtime state machine object
     * @param instance runtime state machine instance object
     */
    function StateMachine(stateMachine, runtime, playing) {
        this.stateMachine = stateMachine;
        this.playing = playing;
        /**
         * Caches the inputs from the runtime
         */
        this.inputs = [];
        this.instance = new runtime.StateMachineInstance(stateMachine);
        this.initInputs(runtime);
    }
    Object.defineProperty(StateMachine.prototype, "name", {
        get: function () {
            return this.stateMachine.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StateMachine.prototype, "statesChanged", {
        /**
         * Returns a list of state names that have changed on this frame
         */
        get: function () {
            var names = [];
            for (var i = 0; i < this.instance.stateChangedCount(); i++) {
                names.push(this.instance.stateChangedNameByIndex(i));
            }
            return names;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Fetches references to the state machine's inputs and caches them
     * @param runtime an instance of the runtime; needed for the SMIInput types
     */
    StateMachine.prototype.initInputs = function (runtime) {
        // Fetch the inputs from the runtime if we don't have them
        for (var i = 0; i < this.instance.inputCount(); i++) {
            var input = this.instance.input(i);
            this.inputs.push(this.mapRuntimeInput(input, runtime));
        }
    };
    /**
     * Maps a runtime input to it's appropriate type
     * @param input
     */
    StateMachine.prototype.mapRuntimeInput = function (input, runtime) {
        if (input.type === runtime.SMIInput.bool) {
            return new StateMachineInput(StateMachineInputType.Boolean, input.asBool());
        }
        else if (input.type === runtime.SMIInput.number) {
            return new StateMachineInput(StateMachineInputType.Number, input.asNumber());
        }
        else if (input.type === runtime.SMIInput.trigger) {
            return new StateMachineInput(StateMachineInputType.Trigger, input.asTrigger());
        }
    };
    /**
     * Deletes the backing Wasm state machine instance; once this is called, this
     * state machine is no more.
     */
    StateMachine.prototype.cleanup = function () {
        this.instance.delete();
    };
    return StateMachine;
}());
// #endregion
// #region animator
/**
 * Manages animation
 */
var Animator = /** @class */ (function () {
    /**
     * Constructs a new animator
     * @constructor
     * @param runtime Rive runtime; needed to instance animations & state machines
     * @param artboard the artboard that holds all animations and state machines
     * @param animations optional list of animations
     * @param stateMachines optional list of state machines
     */
    function Animator(runtime, artboard, eventManager, animations, stateMachines) {
        if (animations === void 0) { animations = []; }
        if (stateMachines === void 0) { stateMachines = []; }
        this.runtime = runtime;
        this.artboard = artboard;
        this.eventManager = eventManager;
        this.animations = animations;
        this.stateMachines = stateMachines;
    }
    /**
     * Adds animations and state machines by their names. If names are shared
     * between animations & state machines, then the first one found will be
     * created. Best not to use the same names for these in your Rive file.
     * @param animatable the name(s) of animations and state machines to add
     * @returns a list of names of the playing animations and state machines
     */
    Animator.prototype.add = function (animatables, playing, fireEvent) {
        if (fireEvent === void 0) { fireEvent = true; }
        animatables = mapToStringArray(animatables);
        // If animatables is empty, play or pause everything
        if (animatables.length === 0) {
            this.animations.forEach(function (a) { return a.playing = playing; });
            this.stateMachines.forEach(function (m) { return m.playing = playing; });
        }
        else {
            // Play/pause already instanced items, or create new instances
            var instancedAnimationNames = this.animations.map(function (a) { return a.name; });
            var instancedMachineNames = this.stateMachines.map(function (m) { return m.name; });
            for (var i in animatables) {
                var aIndex = instancedAnimationNames.indexOf(animatables[i]);
                var mIndex = instancedMachineNames.indexOf(animatables[i]);
                if (aIndex >= 0 || mIndex >= 0) {
                    if (aIndex >= 0) {
                        // Animation is instanced, play/pause it
                        this.animations[aIndex].playing = playing;
                    }
                    else {
                        // State machine is instanced, play/pause it
                        this.stateMachines[mIndex].playing = playing;
                    }
                }
                else {
                    // Try to create a new animation instance
                    var anim = this.artboard.animationByName(animatables[i]);
                    if (anim) {
                        this.animations.push(new Animation(anim, this.runtime, playing));
                    }
                    else {
                        // Try to create a new state machine instance
                        var sm = this.artboard.stateMachineByName(animatables[i]);
                        if (sm) {
                            this.stateMachines.push(new StateMachine(sm, this.runtime, playing));
                        }
                    }
                }
            }
        }
        // Fire play/paused events for animations
        if (fireEvent) {
            if (playing) {
                this.eventManager.fire({
                    type: EventType.Play,
                    data: this.playing,
                });
            }
            else {
                this.eventManager.fire({
                    type: EventType.Pause,
                    data: this.paused,
                });
            }
        }
        return playing ? this.playing : this.paused;
    };
    /**
     * Play the named animations/state machines
     * @param animatables the names of the animations/machines to play; plays all if empty
     * @returns a list of the playing items
     */
    Animator.prototype.play = function (animatables) {
        return this.add(animatables, true);
    };
    /**
   * Pauses named animations and state machines, or everything if nothing is
   * specified
   * @param animatables names of the animations and state machines to pause
   * @returns a list of names of the animations and state machines paused
   */
    Animator.prototype.pause = function (animatables) {
        return this.add(animatables, false);
    };
    /**
     * Set time of named animations
     * @param animations names of the animations to scrub
     * @param value time scrub value, a floating point number to which the playhead is jumped
     * @returns a list of names of the animations that were scrubbed
     */
    Animator.prototype.scrub = function (animatables, value) {
        var forScrubbing = this.animations.filter(function (a) { return animatables.includes(a.name); });
        forScrubbing.forEach(function (a) { return a.scrubTo = value; });
        return forScrubbing.map(function (a) { return a.name; });
    };
    Object.defineProperty(Animator.prototype, "playing", {
        /**
         * Returns a list of names of all animations and state machines currently
         * playing
         */
        get: function () {
            return this.animations.filter(function (a) { return a.playing; }).map(function (a) { return a.name; }).concat(this.stateMachines.filter(function (m) { return m.playing; }).map(function (m) { return m.name; }));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Animator.prototype, "paused", {
        /**
         * Returns a list of names of all animations and state machines currently
         * paused
         */
        get: function () {
            return this.animations.filter(function (a) { return !a.playing; }).map(function (a) { return a.name; }).concat(this.stateMachines.filter(function (m) { return !m.playing; }).map(function (m) { return m.name; }));
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Stops and removes all named animations and state machines
     * @param animatables animations and state machines to remove
     * @returns a list of names of removed items
     */
    Animator.prototype.stop = function (animatables) {
        var _this = this;
        animatables = mapToStringArray(animatables);
        // If nothing's specified, wipe them out, all of them
        var removedNames = [];
        // Stop everything
        if (animatables.length === 0) {
            removedNames = this.animations.map(function (a) { return a.name; }).concat(this.stateMachines.map(function (m) { return m.name; }));
            // Clean up before emptying the arrays
            this.animations.forEach(function (a) { return a.cleanup(); });
            this.stateMachines.forEach(function (m) { return m.cleanup(); });
            // Empty out the arrays
            this.animations.splice(0, this.animations.length);
            this.stateMachines.splice(0, this.stateMachines.length);
        }
        else {
            // Remove only the named animations/state machines
            var animationsToRemove = this.animations.filter(function (a) { return animatables.includes(a.name); });
            animationsToRemove.forEach(function (a) {
                a.cleanup();
                _this.animations.splice(_this.animations.indexOf(a), 1);
            });
            var machinesToRemove = this.stateMachines.filter(function (m) { return animatables.includes(m.name); });
            machinesToRemove.forEach(function (m) {
                m.cleanup();
                _this.stateMachines.splice(_this.stateMachines.indexOf(m), 1);
            });
            removedNames = animationsToRemove.map(function (a) { return a.name; }).concat(machinesToRemove.map(function (m) { return m.name; }));
        }
        this.eventManager.fire({
            type: EventType.Stop,
            data: removedNames,
        });
        // Return the list of animations removed
        return removedNames;
    };
    Object.defineProperty(Animator.prototype, "isPlaying", {
        /**
         * Returns true if at least one animation is active
         */
        get: function () {
            return this.animations.reduce(function (acc, curr) { return acc || curr.playing; }, false)
                || this.stateMachines.reduce(function (acc, curr) { return acc || curr.playing; }, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Animator.prototype, "isPaused", {
        /**
         * Returns true if all animations are paused and there's at least one animation
         */
        get: function () {
            return !this.isPlaying &&
                (this.animations.length > 0 || this.stateMachines.length > 0);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Animator.prototype, "isStopped", {
        /**
         * Returns true if there are no playing or paused animations/state machines
         */
        get: function () {
            return this.animations.length === 0 && this.stateMachines.length === 0;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * If there are no animations or state machines, add the first one found
     * @returns the name of the animation or state machine instanced
     */
    Animator.prototype.atLeastOne = function (playing, fireEvent) {
        if (fireEvent === void 0) { fireEvent = true; }
        var instancedName;
        if (this.animations.length === 0 && this.stateMachines.length === 0) {
            if (this.artboard.animationCount() > 0) {
                // Add the first animation
                this.add([instancedName = this.artboard.animationByIndex(0).name], playing, fireEvent);
            }
            else if (this.artboard.stateMachineCount() > 0) {
                // Add the first state machine
                this.add([instancedName = this.artboard.stateMachineByIndex(0).name], playing, fireEvent);
            }
        }
        return instancedName;
    };
    /**
     * Checks if any animations have looped and if so, fire the appropriate event
     */
    Animator.prototype.handleLooping = function () {
        for (var _i = 0, _a = this.animations.filter(function (a) { return a.playing; }); _i < _a.length; _i++) {
            var animation = _a[_i];
            // Emit if the animation looped
            if (animation.loopValue === 0 && animation.loopCount) {
                animation.loopCount = 0;
                // This is a one-shot; if it has ended, delete the instance
                this.stop(animation.name);
            }
            else if (animation.loopValue === 1 && animation.loopCount) {
                this.eventManager.fire({
                    type: EventType.Loop,
                    data: { animation: animation.name, type: LoopType.Loop }
                });
                animation.loopCount = 0;
            }
            // Wasm indicates a loop at each time the animation
            // changes direction, so a full loop/lap occurs every
            // two loop counts
            else if (animation.loopValue === 2 && animation.loopCount > 1) {
                this.eventManager.fire({
                    type: EventType.Loop,
                    data: { animation: animation.name, type: LoopType.PingPong }
                });
                animation.loopCount = 0;
            }
        }
    };
    /**
     * Checks if states have changed in state machines and fires a statechange
     * event
     */
    Animator.prototype.handleStateChanges = function () {
        var statesChanged = [];
        for (var _i = 0, _a = this.stateMachines.filter(function (sm) { return sm.playing; }); _i < _a.length; _i++) {
            var stateMachine = _a[_i];
            statesChanged.push.apply(statesChanged, stateMachine.statesChanged);
        }
        if (statesChanged.length > 0) {
            this.eventManager.fire({
                type: EventType.StateChange,
                data: statesChanged,
            });
        }
    };
    return Animator;
}());
// #endregion
// #region events
/**
 * Supported event types triggered in Rive
 */
var EventType;
(function (EventType) {
    EventType["Load"] = "load";
    EventType["LoadError"] = "loaderror";
    EventType["Play"] = "play";
    EventType["Pause"] = "pause";
    EventType["Stop"] = "stop";
    EventType["Loop"] = "loop";
    EventType["Draw"] = "draw";
    EventType["StateChange"] = "statechange";
})(EventType || (EventType = {}));
/**
 * Looping types: one-shot, loop, and ping-pong
 */
var LoopType;
(function (LoopType) {
    LoopType["OneShot"] = "oneshot";
    LoopType["Loop"] = "loop";
    LoopType["PingPong"] = "pingpong"; // has value 2 in runtime
})(LoopType || (LoopType = {}));
// Manages Rive events and listeners
var EventManager = /** @class */ (function () {
    function EventManager(listeners) {
        if (listeners === void 0) { listeners = []; }
        this.listeners = listeners;
    }
    // Gets listeners of specified type
    EventManager.prototype.getListeners = function (type) {
        return this.listeners.filter(function (e) { return e.type === type; });
    };
    // Adds a listener
    EventManager.prototype.add = function (listener) {
        if (!this.listeners.includes(listener)) {
            this.listeners.push(listener);
        }
    };
    /**
     * Removes a listener
     * @param listener the listener with the callback to be removed
     */
    EventManager.prototype.remove = function (listener) {
        // We can't simply look for the listener as it'll be a different instance to
        // one originally subscribed. Find all the listeners of the right type and
        // then check their callbacks which should match.
        for (var i = 0; i < this.listeners.length; i++) {
            var currentListener = this.listeners[i];
            if (currentListener.type === listener.type) {
                if (currentListener.callback === listener.callback) {
                    this.listeners.splice(i, 1);
                    break;
                }
            }
        }
    };
    /**
     * Clears all listeners of specified type, or every listener if no type is
     * specified
     * @param type the type of listeners to clear, or all listeners if not
     * specified
     */
    EventManager.prototype.removeAll = function (type) {
        var _this = this;
        if (!type) {
            this.listeners.splice(0, this.listeners.length);
        }
        else {
            this.listeners
                .filter(function (l) { return l.type === type; })
                .forEach(function (l) { return _this.remove(l); });
        }
    };
    // Fires an event
    EventManager.prototype.fire = function (event) {
        var eventListeners = this.getListeners(event.type);
        eventListeners.forEach(function (listener) { return listener.callback(event); });
    };
    return EventManager;
}());
// Manages a queue of tasks
var TaskQueueManager = /** @class */ (function () {
    function TaskQueueManager(eventManager) {
        this.eventManager = eventManager;
        this.queue = [];
    }
    // Adds a task top the queue
    TaskQueueManager.prototype.add = function (task) {
        this.queue.push(task);
    };
    // Processes all tasks in the queue
    TaskQueueManager.prototype.process = function () {
        while (this.queue.length > 0) {
            var task = this.queue.shift();
            task === null || task === void 0 ? void 0 : task.action();
            if (task === null || task === void 0 ? void 0 : task.event) {
                this.eventManager.fire(task.event);
            }
        }
    };
    return TaskQueueManager;
}());
var Rive = /** @class */ (function () {
    function Rive(params) {
        var _a;
        // Flag to indicate if the layout has changed; used by the renderer to know
        // when to align
        this._updateLayout = true;
        /**
         * Flag to active/deactivate renderer
         */
        this.isRendererActive = true;
        // Tracks if a Rive file is loaded
        this.loaded = false;
        /**
         * Tracks if a Rive file is loaded; we need this in addition to loaded as some
         * commands (e.g. contents) can be called as soon as the file is loaded.
         * However, playback commands need to be queued and run in order once initial
         * animations and autoplay has been sorted out. This applies to play, pause,
         * and start.
         */
        this.readyForPlaying = false;
        // Runtime artboard
        this.artboard = null;
        // Durations to generate a frame for the last second. Used for performance profiling.
        this.durations = [];
        this.frameTimes = [];
        this.frameCount = 0;
        /**
         * Used be draw to track when a second of active rendering time has passed. Used for debugging purposes
         */
        this.renderSecondTimer = 0;
        this.canvas = params.canvas;
        this.src = params.src;
        this.buffer = params.buffer;
        this.layout = (_a = params.layout) !== null && _a !== void 0 ? _a : new Layout();
        // New event management system
        this.eventManager = new EventManager();
        if (params.onLoad)
            this.on(EventType.Load, params.onLoad);
        if (params.onLoadError)
            this.on(EventType.LoadError, params.onLoadError);
        if (params.onPlay)
            this.on(EventType.Play, params.onPlay);
        if (params.onPause)
            this.on(EventType.Pause, params.onPause);
        if (params.onStop)
            this.on(EventType.Stop, params.onStop);
        if (params.onLoop)
            this.on(EventType.Loop, params.onLoop);
        if (params.onStateChange)
            this.on(EventType.StateChange, params.onStateChange);
        /**
         * @deprecated Use camelCase'd versions instead.
         */
        if (params.onload && !params.onLoad)
            this.on(EventType.Load, params.onload);
        if (params.onloaderror && !params.onLoadError)
            this.on(EventType.LoadError, params.onloaderror);
        if (params.onplay && !params.onPlay)
            this.on(EventType.Play, params.onplay);
        if (params.onpause && !params.onPause)
            this.on(EventType.Pause, params.onpause);
        if (params.onstop && !params.onStop)
            this.on(EventType.Stop, params.onstop);
        if (params.onloop && !params.onLoop)
            this.on(EventType.Loop, params.onloop);
        if (params.onstatechange && !params.onStateChange)
            this.on(EventType.StateChange, params.onstatechange);
        // Hook up the task queue
        this.taskQueue = new TaskQueueManager(this.eventManager);
        this.init({
            src: this.src,
            buffer: this.buffer,
            autoplay: params.autoplay,
            animations: params.animations,
            stateMachines: params.stateMachines,
            artboard: params.artboard,
        });
    }
    // Alternative constructor to build a Rive instance from an interface/object
    Rive.new = function (params) {
        console.warn('This function is deprecated: please use `new Rive({})` instead');
        return new Rive(params);
    };
    // Initializes the Rive object either from constructor or load()
    Rive.prototype.init = function (_a) {
        var _this = this;
        var src = _a.src, buffer = _a.buffer, animations = _a.animations, stateMachines = _a.stateMachines, artboard = _a.artboard, _b = _a.autoplay, autoplay = _b === void 0 ? false : _b;
        this.src = src;
        this.buffer = buffer;
        // If no source file url specified, it's a bust
        if (!this.src && !this.buffer) {
            throw new Error(Rive.missingErrorMessage);
        }
        // List of animations that should be initialized.
        var startingAnimationNames = mapToStringArray(animations);
        // List of state machines that should be initialized
        var startingStateMachineNames = mapToStringArray(stateMachines);
        // Ensure loaded is marked as false if loading new file
        this.loaded = false;
        this.readyForPlaying = false;
        // Ensure the runtime is loaded
        RuntimeLoader.awaitInstance().then(function (runtime) {
            _this.runtime = runtime;
            // Get the canvas where you want to render the animation and create a renderer
            _this.renderer = _this.runtime.makeRenderer(_this.canvas);
            // Initial size adjustment based on devicePixelRatio if no width/height are specified explicitly
            if (!(_this.canvas.width || _this.canvas.height)) {
                _this.resizeDrawingSurfaceToCanvas();
            }
            // Load Rive data from a source uri or a data buffer
            _this.initData(artboard, startingAnimationNames, startingStateMachineNames, autoplay).catch(function (e) {
                console.error(e);
            });
        }).catch(function (e) {
            console.error(e);
        });
    };
    // Initializes runtime with Rive data and preps for playing
    Rive.prototype.initData = function (artboardName, animationNames, stateMachineNames, autoplay) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var _b, _c, msg;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (!this.src) return [3 /*break*/, 2];
                        _b = this;
                        return [4 /*yield*/, loadRiveFile(this.src)];
                    case 1:
                        _b.buffer = _d.sent();
                        _d.label = 2;
                    case 2:
                        // Load the Rive file
                        _c = this;
                        return [4 /*yield*/, this.runtime.load(new Uint8Array(this.buffer))];
                    case 3:
                        // Load the Rive file
                        _c.file = _d.sent();
                        if (this.file) {
                            // Initialize and draw frame
                            this.initArtboard(artboardName, animationNames, stateMachineNames, autoplay);
                            // Everything's set up, emit a load event
                            this.loaded = true;
                            this.eventManager.fire({
                                type: EventType.Load,
                                data: (_a = this.src) !== null && _a !== void 0 ? _a : 'buffer'
                            });
                            // Flag ready for playback commands and clear the task queue; this order
                            // is important or it may infinitely recurse
                            this.readyForPlaying = true;
                            this.taskQueue.process();
                            this.drawFrame();
                            return [2 /*return*/, Promise.resolve()];
                        }
                        else {
                            msg = 'Problem loading file; may be corrupt!';
                            console.warn(msg);
                            this.eventManager.fire({ type: EventType.LoadError, data: msg });
                            return [2 /*return*/, Promise.reject(msg)];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    // Initialize for playback
    Rive.prototype.initArtboard = function (artboardName, animationNames, stateMachineNames, autoplay) {
        // Fetch the artboard
        var rootArtboard = artboardName ?
            this.file.artboardByName(artboardName) :
            this.file.defaultArtboard();
        // Check we have a working artboard
        if (!rootArtboard) {
            var msg = 'Invalid artboard name or no default artboard';
            console.warn(msg);
            this.eventManager.fire({ type: EventType.LoadError, data: msg });
            return;
        }
        // Instance the artboard
        this.artboard = rootArtboard.instance();
        // Check that the artboard has at least 1 animation
        if (this.artboard.animationCount() < 1) {
            var msg = 'Artboard has no animations';
            this.eventManager.fire({ type: EventType.LoadError, data: msg });
            throw msg;
        }
        // Initialize the animator
        this.animator = new Animator(this.runtime, this.artboard, this.eventManager);
        // Initialize the animations; as loaded hasn't happened yet, we need to
        // suppress firing the play/pause events until the load event has fired. To
        // do this we tell the animator to suppress firing events, and add event
        // firing to the task queue.
        var instanceNames;
        if (animationNames.length > 0 || stateMachineNames.length > 0) {
            instanceNames = animationNames.concat(stateMachineNames);
            this.animator.add(instanceNames, autoplay, false);
        }
        else {
            instanceNames = [this.animator.atLeastOne(autoplay, false)];
        }
        // Queue up firing the playback events
        this.taskQueue.add({
            action: function () { },
            event: {
                type: autoplay ? EventType.Play : EventType.Pause,
                data: instanceNames,
            }
        });
    };
    // Draws the current artboard frame
    Rive.prototype.drawFrame = function () {
        this.startRendering();
    };
    /**
     * Draw rendering loop; renders animation frames at the correct time interval.
     * @param time the time at which to render a frame
     */
    Rive.prototype.draw = function (time, onSecond) {
        var before = performance.now();
        // Clear the frameRequestId, as we're now rendering a fresh frame
        this.frameRequestId = null;
        // On the first pass, make sure lastTime has a valid value
        if (!this.lastRenderTime) {
            this.lastRenderTime = time;
        }
        // Handle the onSecond callback
        this.renderSecondTimer += (time - this.lastRenderTime);
        if (this.renderSecondTimer > 5000) {
            this.renderSecondTimer = 0;
            onSecond === null || onSecond === void 0 ? void 0 : onSecond();
        }
        // Calculate the elapsed time between frames in seconds
        var elapsedTime = (time - this.lastRenderTime) / 1000;
        this.lastRenderTime = time;
        // Advance non-paused animations by the elapsed number of seconds
        // Also advance any animations that require scrubbing
        var activeAnimations = this.animator.animations.filter(function (a) { return a.playing || a.needsScrub; })
            // The scrubbed animations must be applied first to prevent weird artifacts
            // if the playing animations conflict with the scrubbed animating attribuates.
            .sort(function (first, second) { return first.needsScrub ? -1 : 1; });
        for (var _i = 0, activeAnimations_1 = activeAnimations; _i < activeAnimations_1.length; _i++) {
            var animation = activeAnimations_1[_i];
            animation.advance(elapsedTime);
            if (animation.instance.didLoop) {
                animation.loopCount += 1;
            }
            animation.instance.apply(this.artboard, 1.0);
        }
        // Advance non-paused state machines by the elapsed number of seconds
        var activeStateMachines = this.animator.stateMachines.filter(function (a) { return a.playing; });
        for (var _a = 0, activeStateMachines_1 = activeStateMachines; _a < activeStateMachines_1.length; _a++) {
            var stateMachine = activeStateMachines_1[_a];
            stateMachine.instance.advance(this.artboard, elapsedTime);
            // stateMachine.instance.apply(this.artboard);
        }
        // Once the animations have been applied to the artboard, advance it
        // by the elapsed time.
        this.artboard.advance(elapsedTime);
        var renderer = this.renderer;
        renderer.save();
        // Update the renderer alignment if necessary
        this.alignRenderer();
        this.artboard.draw(renderer);
        renderer.restore();
        renderer.flush();
        // Check for any animations that looped
        this.animator.handleLooping();
        // Check for any state machines that had a state change
        this.animator.handleStateChanges();
        // Add duration to create frame to durations array
        this.frameCount++;
        var after = performance.now();
        this.frameTimes.push(after);
        this.durations.push(after - before);
        while (this.frameTimes[0] <= after - 1000) {
            this.frameTimes.shift();
            this.durations.shift();
        }
        // Calling requestAnimationFrame will rerun draw() at the correct rate:
        // https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_animations
        if (this.animator.isPlaying) {
            // Request a new rendering frame
            this.startRendering();
        }
        else if (this.animator.isPaused) {
            // Reset the end time so on playback it starts at the correct frame
            this.lastRenderTime = 0;
        }
        else if (this.animator.isStopped) {
            // Reset animation instances, artboard and time
            // TODO: implement this properly when we have instancing
            // this.initArtboard();
            // this.drawFrame();
            this.lastRenderTime = 0;
        }
    };
    /**
     * Align the renderer
     */
    Rive.prototype.alignRenderer = function () {
        var _a = this, renderer = _a.renderer, runtime = _a.runtime, _layout = _a._layout, artboard = _a.artboard;
        // Canvas must be wiped to prevent artifacts
        renderer.clear();
        // Align things up safe in the knowledge we can restore if changed
        renderer.align(_layout.runtimeFit(runtime), _layout.runtimeAlignment(runtime), {
            minX: _layout.minX,
            minY: _layout.minY,
            maxX: _layout.maxX,
            maxY: _layout.maxY
        }, artboard.bounds);
    };
    Object.defineProperty(Rive.prototype, "fps", {
        get: function () {
            return this.durations.length;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rive.prototype, "frameTime", {
        get: function () {
            if (this.durations.length === 0) {
                return 0;
            }
            return (this.durations.reduce(function (a, b) { return a + b; }, 0) / this.durations.length).toFixed(4);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Cleans up any Wasm-generated objects that need to be manually destroyed:
     * artboard instances, animation instances, state machine instances.
     *
     * Once this is called, things will need to be reinitialized or bad things
     * might happen.
     */
    Rive.prototype.cleanup = function () {
        this.artboard.delete();
        // TODO: delete animation and state machine instances
    };
    // Plays specified animations; if none specified, it unpauses everything.
    Rive.prototype.play = function (animationNames, autoplay) {
        var _this = this;
        animationNames = mapToStringArray(animationNames);
        // If the file's not loaded, queue up the play
        if (!this.readyForPlaying) {
            this.taskQueue.add({
                action: function () { return _this.play(animationNames, autoplay); },
            });
            return;
        }
        this.animator.play(animationNames);
        this.startRendering();
    };
    // Pauses specified animations; if none specified, pauses all.
    Rive.prototype.pause = function (animationNames) {
        var _this = this;
        animationNames = mapToStringArray(animationNames);
        // If the file's not loaded, early out, nothing to pause
        if (!this.readyForPlaying) {
            this.taskQueue.add({
                action: function () { return _this.pause(animationNames); },
            });
            return;
        }
        this.animator.pause(animationNames);
    };
    Rive.prototype.scrub = function (animationNames, value) {
        var _this = this;
        animationNames = mapToStringArray(animationNames);
        // If the file's not loaded, early out, nothing to pause
        if (!this.readyForPlaying) {
            this.taskQueue.add({
                action: function () { return _this.scrub(animationNames, value); },
            });
            return;
        }
        // Scrub the animation time; we draw a single frame here so that if
        // nothing's currently playing, the scrubbed animation is still rendered/
        this.animator.scrub(animationNames, value || 0);
        this.drawFrame();
    };
    // Stops specified animations; if none specifies, stops them all.
    Rive.prototype.stop = function (animationNames) {
        var _this = this;
        animationNames = mapToStringArray(animationNames);
        // If the file's not loaded, early out, nothing to pause
        if (!this.readyForPlaying) {
            this.taskQueue.add({
                action: function () { return _this.stop(animationNames); },
            });
            return;
        }
        this.animator.stop(animationNames);
    };
    /**
     * Resets the animation
     * @param artboard the name of the artboard, or default if none given
     * @param animations the names of animations for playback
     * @param stateMachines the names of state machines for playback
     * @param autoplay whether to autoplay when reset, defaults to false
     *
     */
    Rive.prototype.reset = function (params) {
        var _a;
        // Get the current artboard, animations, state machines, and playback states
        var artBoardName = params === null || params === void 0 ? void 0 : params.artboard;
        var animationNames = mapToStringArray(params === null || params === void 0 ? void 0 : params.animations);
        var stateMachineNames = mapToStringArray(params === null || params === void 0 ? void 0 : params.stateMachines);
        var autoplay = (_a = params === null || params === void 0 ? void 0 : params.autoplay) !== null && _a !== void 0 ? _a : false;
        // Stop everything and clean up
        this.stop();
        this.cleanup();
        // Reinitialize an artboard instance with the state
        this.initArtboard(artBoardName, animationNames, stateMachineNames, autoplay);
    };
    // Loads a new Rive file, keeping listeners in place
    Rive.prototype.load = function (params) {
        // Stop all animations
        this.stop();
        // Reinitialize
        this.init(params);
    };
    Object.defineProperty(Rive.prototype, "layout", {
        /**
         * Returns the current layout. Note that layout should be treated as
         * immutable. If you want to change the layout, create a new one use the
         * layout setter
         */
        get: function () {
            return this._layout;
        },
        // Sets a new layout
        set: function (layout) {
            this._layout = layout;
            // If the maxX or maxY are 0, then set them to the canvas width and height
            if (!layout.maxX || !layout.maxY) {
                this.resizeToCanvas();
            }
            if (this.loaded && !this.animator.isPlaying) {
                this.drawFrame();
            }
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Sets the layout bounds to the current canvas size; this is typically called
     * when the canvas is resized
     */
    Rive.prototype.resizeToCanvas = function () {
        this._layout = this.layout.copyWith({
            minX: 0,
            minY: 0,
            maxX: this.canvas.width,
            maxY: this.canvas.height
        });
    };
    /**
     * Accounts for devicePixelRatio as a multiplier to render the size of the canvas drawing surface.
     * Uses the size of the backing canvas to set new width/height attributes. Need to re-render
     * and resize the layout to match the new drawing surface afterwards. Useful function for consumers
     * to include in a window resize listener
     */
    Rive.prototype.resizeDrawingSurfaceToCanvas = function () {
        if (this.canvas instanceof HTMLCanvasElement && !!window) {
            var _a = this.canvas.getBoundingClientRect(), width = _a.width, height = _a.height;
            var dpr = window.devicePixelRatio || 1;
            this.canvas.width = dpr * width;
            this.canvas.height = dpr * height;
            this.startRendering();
            this.resizeToCanvas();
        }
    };
    Object.defineProperty(Rive.prototype, "source", {
        // Returns the animation source, which may be undefined
        get: function () {
            return this.src;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rive.prototype, "activeArtboard", {
        /**
         * Returns the name of the active artboard
         */
        get: function () {
            return this.artboard.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rive.prototype, "animationNames", {
        // Returns a list of animation names on the chosen artboard
        get: function () {
            // If the file's not loaded, we got nothing to return
            if (!this.loaded) {
                return [];
            }
            var animationNames = [];
            for (var i = 0; i < this.artboard.animationCount(); i++) {
                animationNames.push(this.artboard.animationByIndex(i).name);
            }
            return animationNames;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rive.prototype, "stateMachineNames", {
        /**
         * Returns a list of state machine names from the current artboard
         */
        get: function () {
            // If the file's not loaded, we got nothing to return
            if (!this.loaded) {
                return [];
            }
            var stateMachineNames = [];
            for (var i = 0; i < this.artboard.stateMachineCount(); i++) {
                stateMachineNames.push(this.artboard.stateMachineByIndex(i).name);
            }
            return stateMachineNames;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Returns the inputs for the specified instanced state machine, or an empty
     * list if the name is invalid or the state machine is not instanced
     * @param name the state machine name
     * @returns the inputs for the named state machine
     */
    Rive.prototype.stateMachineInputs = function (name) {
        // If the file's not loaded, early out, nothing to pause
        if (!this.loaded) {
            return;
        }
        var stateMachine = this.animator.stateMachines.find(function (m) { return m.name === name; });
        return stateMachine === null || stateMachine === void 0 ? void 0 : stateMachine.inputs;
    };
    Object.defineProperty(Rive.prototype, "playingStateMachineNames", {
        // Returns a list of playing machine names
        get: function () {
            // If the file's not loaded, we got nothing to return
            if (!this.loaded) {
                return [];
            }
            return this.animator.stateMachines
                .filter(function (m) { return m.playing; })
                .map(function (m) { return m.name; });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rive.prototype, "playingAnimationNames", {
        // Returns a list of playing animation names
        get: function () {
            // If the file's not loaded, we got nothing to return
            if (!this.loaded) {
                return [];
            }
            return this.animator.animations
                .filter(function (a) { return a.playing; })
                .map(function (a) { return a.name; });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rive.prototype, "pausedAnimationNames", {
        // Returns a list of paused animation names
        get: function () {
            // If the file's not loaded, we got nothing to return
            if (!this.loaded) {
                return [];
            }
            return this.animator.animations
                .filter(function (a) { return !a.playing; })
                .map(function (a) { return a.name; });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rive.prototype, "pausedStateMachineNames", {
        /**
         *  Returns a list of paused machine names
         * @returns a list of state machine names that are paused
         */
        get: function () {
            // If the file's not loaded, we got nothing to return
            if (!this.loaded) {
                return [];
            }
            return this.animator.stateMachines
                .filter(function (m) { return !m.playing; })
                .map(function (m) { return m.name; });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rive.prototype, "isPlaying", {
        /**
         * @returns true if any animation is playing
         */
        get: function () {
            return this.animator.isPlaying;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rive.prototype, "isPaused", {
        /**
         * @returns true if all instanced animations are paused
         */
        get: function () {
            return this.animator.isPaused;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rive.prototype, "isStopped", {
        /**
         * @returns true if no animations are playing or paused
         */
        get: function () {
            return this.animator.isStopped;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rive.prototype, "bounds", {
        /**
         * @returns the bounds of the current artboard, or undefined if the artboard
         * isn't loaded yet.
         */
        get: function () {
            return this.artboard ? this.artboard.bounds : undefined;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Subscribe to Rive-generated events
     * @param type the type of event to subscribe to
     * @param callback callback to fire when the event occurs
     */
    Rive.prototype.on = function (type, callback) {
        this.eventManager.add({
            type: type,
            callback: callback,
        });
    };
    /**
     * Unsubscribes from a Rive-generated event
     * @param callback the callback to unsubscribe from
     */
    Rive.prototype.unsubscribe = function (type, callback) {
        this.eventManager.remove({
            type: type,
            callback: callback,
        });
    };
    /**
     * Unsubscribes all listeners from an event type, or everything if no type is
     * given
     * @param type the type of event to unsubscribe from, or all types if
     * undefined
     */
    Rive.prototype.unsubscribeAll = function (type) {
        this.eventManager.removeAll(type);
    };
    /**
     * Stops the rendering loop; this is different from pausing in that it doesn't
     * change the state of any animation. It stops rendering from occurring. This
     * is designed for situations such as when Rive isn't visible.
     *
     * The only way to start rendering again is to call `startRendering`.
     * Animations that are marked as playing will start from the position that
     * they would have been at if rendering had not been stopped.
     */
    Rive.prototype.stopRendering = function () {
        if (this.loaded && this.frameRequestId) {
            cancelAnimationFrame(this.frameRequestId);
            this.frameRequestId = null;
        }
    };
    /**
     * Starts the rendering loop if it has been previously stopped. If the
     * renderer is already active, then this will have zero effect.
     */
    Rive.prototype.startRendering = function () {
        if (this.loaded && !this.frameRequestId) {
            this.frameRequestId = requestAnimationFrame(this.draw.bind(this));
        }
    };
    Object.defineProperty(Rive.prototype, "contents", {
        /**
         * Returns the contents of a Rive file: the artboards, animations, and state machines
         */
        get: function () {
            if (!this.loaded) {
                return undefined;
            }
            var riveContents = {
                artboards: [],
            };
            for (var i = 0; i < this.file.artboardCount(); i++) {
                var artboard = this.file.artboardByIndex(i);
                var artboardContents = {
                    name: artboard.name,
                    animations: [],
                    stateMachines: [],
                };
                for (var j = 0; j < artboard.animationCount(); j++) {
                    var animation = artboard.animationByIndex(j);
                    artboardContents.animations.push(animation.name);
                }
                for (var k = 0; k < artboard.stateMachineCount(); k++) {
                    var stateMachine = artboard.stateMachineByIndex(k);
                    var name_1 = stateMachine.name;
                    var instance = new this.runtime.StateMachineInstance(stateMachine);
                    var inputContents = [];
                    for (var l = 0; l < instance.inputCount(); l++) {
                        var input = instance.input(l);
                        inputContents.push({ name: input.name, type: input.type });
                    }
                    artboardContents.stateMachines.push({ name: name_1, inputs: inputContents });
                }
                riveContents.artboards.push(artboardContents);
            }
            return riveContents;
        },
        enumerable: false,
        configurable: true
    });
    // Error message for missing source or buffer
    Rive.missingErrorMessage = 'Rive source file or data buffer required';
    return Rive;
}());

// Loads Rive data from a URI via fetch.
var loadRiveFile = function (src) { return __awaiter(void 0, void 0, void 0, function () {
    var req, res, buffer;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                req = new Request(src);
                return [4 /*yield*/, fetch(req)];
            case 1:
                res = _a.sent();
                return [4 /*yield*/, res.arrayBuffer()];
            case 2:
                buffer = _a.sent();
                return [2 /*return*/, buffer];
        }
    });
}); };
// #endregion
// #region utility functions
/*
 * Utility function to ensure an object is a string array
 */
var mapToStringArray = function (obj) {
    if (typeof obj === 'string') {
        return [obj];
    }
    else if (obj instanceof Array) {
        return obj;
    }
    // If obj is undefined, return empty array
    return [];
};
// #endregion
// #region testing utilities
// Exports to only be used for tests
var Testing = {
    EventManager: EventManager,
    TaskQueueManager: TaskQueueManager,
};
// #endregion

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=rive.js.map