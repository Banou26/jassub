(function(K){typeof define=="function"&&define.amd?define(K):K()})(function(){"use strict";var K={},Bt={get exports(){return K},set exports(i){K=i}};(function(i,d){var p=(()=>{var v=typeof document<"u"&&document.currentScript?document.currentScript.src:void 0;return function(a){a=a||{};var a=typeof a<"u"?a:{},w,_;a.ready=new Promise(function(e,t){w=e,_=t});var b=Object.assign({},a),P=(e,t)=>{throw t},T="";function D(e){return a.locateFile?a.locateFile(e,T):T+e}var k;T=self.location.href,v&&(T=v),T.indexOf("blob:")!==0?T=T.substr(0,T.replace(/[?#].*/,"").lastIndexOf("/")+1):T="",k=e=>{var t=new XMLHttpRequest;return t.open("GET",e,!1),t.responseType="arraybuffer",t.send(null),new Uint8Array(t.response)};var ie=console.log.bind(console),B=console.warn.bind(console);Object.assign(a,b),b=null;var Ce;typeof WebAssembly!="object"&&N("no native wasm support detected");var Y,Pe=!1;function Be(e,t){e||N(t)}var Te=new TextDecoder("utf8");function Ve(e,t,r){for(var n=t+r,s=t;e[s]&&!(s>=n);)++s;return Te.decode(e.buffer?e.subarray(t,s):new Uint8Array(e.slice(t,s)))}function Z(e,t){if(!e)return"";for(var r=e+t,n=e;!(n>=r)&&A[n];)++n;return Te.decode(A.subarray(e,n))}function ze(e,t,r,n){if(!(n>0))return 0;for(var s=r,l=r+n-1,f=0;f<e.length;++f){var o=e.charCodeAt(f);if(o>=55296&&o<=57343){var u=e.charCodeAt(++f);o=65536+((o&1023)<<10)|u&1023}if(o<=127){if(r>=l)break;t[r++]=o}else if(o<=2047){if(r+1>=l)break;t[r++]=192|o>>6,t[r++]=128|o&63}else if(o<=65535){if(r+2>=l)break;t[r++]=224|o>>12,t[r++]=128|o>>6&63,t[r++]=128|o&63}else{if(r+3>=l)break;t[r++]=240|o>>18,t[r++]=128|o>>12&63,t[r++]=128|o>>6&63,t[r++]=128|o&63}}return t[r]=0,r-s}function Ge(e,t,r){return ze(e,A,t,r)}function qe(e){for(var t=0,r=0;r<e.length;++r){var n=e.charCodeAt(r);n<=127?t++:n<=2047?t+=2:n>=55296&&n<=57343?(t+=4,++r):t+=3}return t}var se,ae,A,oe,$e,q,E,ht,gt;function yt(e){se=e,a.HEAP8=ae=new Int8Array(e),a.HEAP16=oe=new Int16Array(e),a.HEAP32=q=new Int32Array(e),a.HEAPU8=A=new Uint8Array(e),a.HEAPU16=$e=new Uint16Array(e),a.HEAPU32=E=new Uint32Array(e),a.HEAPF32=ht=new Float32Array(e),a.HEAPF64=gt=new Float64Array(e)}var mt,Yt=[],bt=[],Zt=[];function Nt(){Je(Yt)}function er(){Je(bt)}function tr(){Je(Zt)}function rr(e){bt.unshift(e)}var ue=0,le=null;function nr(e){ue++}function ir(e){if(ue--,ue==0&&le){var t=le;le=null,t()}}function N(e){e="Aborted("+e+")",B(e),Pe=!0,e+=". Build with -sASSERTIONS for more info.";var t=new WebAssembly.RuntimeError(e);throw _(t),t}var sr="data:application/octet-stream;base64,";function _t(e){return e.startsWith(sr)}var R;R="jassub-worker.wasm",_t(R)||(R=D(R));function wt(e){try{if(e==R&&Ce)return new Uint8Array(Ce);if(k)return k(e);throw"both async and sync fetching of the wasm failed"}catch(t){N(t)}}function ar(){return typeof fetch=="function"?fetch(R,{credentials:"same-origin"}).then(function(e){if(!e.ok)throw"failed to load wasm binary file at '"+R+"'";return e.arrayBuffer()}).catch(function(){return wt(R)}):Promise.resolve().then(function(){return wt(R)})}function or(){var e={a:Wn};function t(f,o){var u=f.exports;a.asm=u,Y=a.asm.I,yt(Y.buffer),mt=a.asm.O,rr(a.asm.J),ir()}nr();function r(f){t(f.instance)}function n(f){return ar().then(function(o){return WebAssembly.instantiate(o,e)}).then(function(o){return o}).then(f,function(o){B("failed to asynchronously prepare wasm: "+o),N(o)})}function s(){return typeof WebAssembly.instantiateStreaming=="function"&&!_t(R)&&typeof fetch=="function"?fetch(R,{credentials:"same-origin"}).then(function(f){var o=WebAssembly.instantiateStreaming(f,e);return o.then(r,function(u){return B("wasm streaming compile failed: "+u),B("falling back to ArrayBuffer instantiation"),n(r)})}):n(r)}if(a.instantiateWasm)try{var l=a.instantiateWasm(e,t);return l}catch(f){B("Module.instantiateWasm callback failed with error: "+f),_(f)}return s().catch(_),{}}function ur(e){this.name="ExitStatus",this.message="Program terminated with exit("+e+")",this.status=e}function Je(e){for(;e.length>0;)e.shift()(a)}function lr(e,t,r,n){N("Assertion failed: "+Z(e)+", at: "+[t?Z(t):"unknown filename",r,n?Z(n):"unknown function"])}function fr(e,t,r){return 0}function cr(e,t,r){}function dr(e,t,r){return 0}function pr(e,t,r,n){}function vr(e,t,r,n,s){}function Xe(e){switch(e){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+e)}}function hr(){for(var e=new Array(256),t=0;t<256;++t)e[t]=String.fromCharCode(t);Ct=e}var Ct=void 0;function O(e){for(var t="",r=e;A[r];)t+=Ct[A[r++]];return t}var ee={},J={},Ae={},gr=48,yr=57;function Ke(e){if(e===void 0)return"_unknown";e=e.replace(/[^a-zA-Z0-9_]/g,"$");var t=e.charCodeAt(0);return t>=gr&&t<=yr?"_"+e:e}function Qe(e,t){return e=Ke(e),new Function("body","return function "+e+`() {
    "use strict";    return body.apply(this, arguments);
};
`)(t)}function Ye(e,t){var r=Qe(t,function(n){this.name=t,this.message=n;var s=new Error(n).stack;s!==void 0&&(this.stack=this.toString()+`
`+s.replace(/^Error(:[^\n]*)?\n/,""))});return r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.prototype.toString=function(){return this.message===void 0?this.name:this.name+": "+this.message},r}var te=void 0;function m(e){throw new te(e)}var Pt=void 0;function Fe(e){throw new Pt(e)}function X(e,t,r){e.forEach(function(o){Ae[o]=t});function n(o){var u=r(o);u.length!==e.length&&Fe("Mismatched type converter count");for(var c=0;c<e.length;++c)M(e[c],u[c])}var s=new Array(t.length),l=[],f=0;t.forEach((o,u)=>{J.hasOwnProperty(o)?s[u]=J[o]:(l.push(o),ee.hasOwnProperty(o)||(ee[o]=[]),ee[o].push(()=>{s[u]=J[o],++f,f===l.length&&n(s)}))}),l.length===0&&n(s)}function M(e,t,r={}){if(!("argPackAdvance"in t))throw new TypeError("registerType registeredInstance requires argPackAdvance");var n=t.name;if(e||m('type "'+n+'" must have a positive integer typeid pointer'),J.hasOwnProperty(e)){if(r.ignoreDuplicateRegistrations)return;m("Cannot register type '"+n+"' twice")}if(J[e]=t,delete Ae[e],ee.hasOwnProperty(e)){var s=ee[e];delete ee[e],s.forEach(l=>l())}}function mr(e,t,r,n,s){var l=Xe(r);t=O(t),M(e,{name:t,fromWireType:function(f){return!!f},toWireType:function(f,o){return o?n:s},argPackAdvance:8,readValueFromPointer:function(f){var o;if(r===1)o=ae;else if(r===2)o=oe;else if(r===4)o=q;else throw new TypeError("Unknown boolean type size: "+t);return this.fromWireType(o[f>>l])},destructorFunction:null})}function br(e){if(!(this instanceof V)||!(e instanceof V))return!1;for(var t=this.$$.ptrType.registeredClass,r=this.$$.ptr,n=e.$$.ptrType.registeredClass,s=e.$$.ptr;t.baseClass;)r=t.upcast(r),t=t.baseClass;for(;n.baseClass;)s=n.upcast(s),n=n.baseClass;return t===n&&r===s}function _r(e){return{count:e.count,deleteScheduled:e.deleteScheduled,preservePointerOnDelete:e.preservePointerOnDelete,ptr:e.ptr,ptrType:e.ptrType,smartPtr:e.smartPtr,smartPtrType:e.smartPtrType}}function Ze(e){function t(r){return r.$$.ptrType.registeredClass.name}m(t(e)+" instance already deleted")}var Ne=!1;function Tt(e){}function wr(e){e.smartPtr?e.smartPtrType.rawDestructor(e.smartPtr):e.ptrType.registeredClass.rawDestructor(e.ptr)}function $t(e){e.count.value-=1;var t=e.count.value===0;t&&wr(e)}function At(e,t,r){if(t===r)return e;if(r.baseClass===void 0)return null;var n=At(e,t,r.baseClass);return n===null?null:r.downcast(n)}var Ft={};function Cr(){return Object.keys(de).length}function Pr(){var e=[];for(var t in de)de.hasOwnProperty(t)&&e.push(de[t]);return e}var fe=[];function et(){for(;fe.length;){var e=fe.pop();e.$$.deleteScheduled=!1,e.delete()}}var ce=void 0;function Tr(e){ce=e,fe.length&&ce&&ce(et)}function $r(){a.getInheritedInstanceCount=Cr,a.getLiveInheritedInstances=Pr,a.flushPendingDeletes=et,a.setDelayFunction=Tr}var de={};function Ar(e,t){for(t===void 0&&m("ptr should not be undefined");e.baseClass;)t=e.upcast(t),e=e.baseClass;return t}function Fr(e,t){return t=Ar(e,t),de[t]}function je(e,t){(!t.ptrType||!t.ptr)&&Fe("makeClassHandle requires ptr and ptrType");var r=!!t.smartPtrType,n=!!t.smartPtr;return r!==n&&Fe("Both smartPtrType and smartPtr must be specified"),t.count={value:1},pe(Object.create(e,{$$:{value:t}}))}function jr(e){var t=this.getPointee(e);if(!t)return this.destructor(e),null;var r=Fr(this.registeredClass,t);if(r!==void 0){if(r.$$.count.value===0)return r.$$.ptr=t,r.$$.smartPtr=e,r.clone();var n=r.clone();return this.destructor(e),n}function s(){return this.isSmartPointer?je(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:t,smartPtrType:this,smartPtr:e}):je(this.registeredClass.instancePrototype,{ptrType:this,ptr:e})}var l=this.registeredClass.getActualType(t),f=Ft[l];if(!f)return s.call(this);var o;this.isConst?o=f.constPointerType:o=f.pointerType;var u=At(t,this.registeredClass,o.registeredClass);return u===null?s.call(this):this.isSmartPointer?je(o.registeredClass.instancePrototype,{ptrType:o,ptr:u,smartPtrType:this,smartPtr:e}):je(o.registeredClass.instancePrototype,{ptrType:o,ptr:u})}function pe(e){return typeof FinalizationRegistry>"u"?(pe=t=>t,e):(Ne=new FinalizationRegistry(t=>{$t(t.$$)}),pe=t=>{var r=t.$$,n=!!r.smartPtr;if(n){var s={$$:r};Ne.register(t,s,t)}return t},Tt=t=>Ne.unregister(t),pe(e))}function kr(){if(this.$$.ptr||Ze(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var e=pe(Object.create(Object.getPrototypeOf(this),{$$:{value:_r(this.$$)}}));return e.$$.count.value+=1,e.$$.deleteScheduled=!1,e}function Or(){this.$$.ptr||Ze(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&m("Object already scheduled for deletion"),Tt(this),$t(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)}function Er(){return!this.$$.ptr}function Sr(){return this.$$.ptr||Ze(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&m("Object already scheduled for deletion"),fe.push(this),fe.length===1&&ce&&ce(et),this.$$.deleteScheduled=!0,this}function Dr(){V.prototype.isAliasOf=br,V.prototype.clone=kr,V.prototype.delete=Or,V.prototype.isDeleted=Er,V.prototype.deleteLater=Sr}function V(){}function jt(e,t,r){if(e[t].overloadTable===void 0){var n=e[t];e[t]=function(){return e[t].overloadTable.hasOwnProperty(arguments.length)||m("Function '"+r+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+e[t].overloadTable+")!"),e[t].overloadTable[arguments.length].apply(this,arguments)},e[t].overloadTable=[],e[t].overloadTable[n.argCount]=n}}function Rr(e,t,r){a.hasOwnProperty(e)?((r===void 0||a[e].overloadTable!==void 0&&a[e].overloadTable[r]!==void 0)&&m("Cannot register public name '"+e+"' twice"),jt(a,e,e),a.hasOwnProperty(r)&&m("Cannot register multiple overloads of a function with the same number of arguments ("+r+")!"),a[e].overloadTable[r]=t):(a[e]=t,r!==void 0&&(a[e].numArguments=r))}function Ur(e,t,r,n,s,l,f,o){this.name=e,this.constructor=t,this.instancePrototype=r,this.rawDestructor=n,this.baseClass=s,this.getActualType=l,this.upcast=f,this.downcast=o,this.pureVirtualFunctions=[]}function ke(e,t,r){for(;t!==r;)t.upcast||m("Expected null or instance of "+r.name+", got an instance of "+t.name),e=t.upcast(e),t=t.baseClass;return e}function Wr(e,t){if(t===null)return this.isReference&&m("null is not a valid "+this.name),0;t.$$||m('Cannot pass "'+rt(t)+'" as a '+this.name),t.$$.ptr||m("Cannot pass deleted object as a pointer of type "+this.name);var r=t.$$.ptrType.registeredClass,n=ke(t.$$.ptr,r,this.registeredClass);return n}function Mr(e,t){var r;if(t===null)return this.isReference&&m("null is not a valid "+this.name),this.isSmartPointer?(r=this.rawConstructor(),e!==null&&e.push(this.rawDestructor,r),r):0;t.$$||m('Cannot pass "'+rt(t)+'" as a '+this.name),t.$$.ptr||m("Cannot pass deleted object as a pointer of type "+this.name),!this.isConst&&t.$$.ptrType.isConst&&m("Cannot convert argument of type "+(t.$$.smartPtrType?t.$$.smartPtrType.name:t.$$.ptrType.name)+" to parameter type "+this.name);var n=t.$$.ptrType.registeredClass;if(r=ke(t.$$.ptr,n,this.registeredClass),this.isSmartPointer)switch(t.$$.smartPtr===void 0&&m("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:t.$$.smartPtrType===this?r=t.$$.smartPtr:m("Cannot convert argument of type "+(t.$$.smartPtrType?t.$$.smartPtrType.name:t.$$.ptrType.name)+" to parameter type "+this.name);break;case 1:r=t.$$.smartPtr;break;case 2:if(t.$$.smartPtrType===this)r=t.$$.smartPtr;else{var s=t.clone();r=this.rawShare(r,Se.toHandle(function(){s.delete()})),e!==null&&e.push(this.rawDestructor,r)}break;default:m("Unsupporting sharing policy")}return r}function Hr(e,t){if(t===null)return this.isReference&&m("null is not a valid "+this.name),0;t.$$||m('Cannot pass "'+rt(t)+'" as a '+this.name),t.$$.ptr||m("Cannot pass deleted object as a pointer of type "+this.name),t.$$.ptrType.isConst&&m("Cannot convert argument of type "+t.$$.ptrType.name+" to parameter type "+this.name);var r=t.$$.ptrType.registeredClass,n=ke(t.$$.ptr,r,this.registeredClass);return n}function Oe(e){return this.fromWireType(q[e>>2])}function Ir(e){return this.rawGetPointee&&(e=this.rawGetPointee(e)),e}function Lr(e){this.rawDestructor&&this.rawDestructor(e)}function xr(e){e!==null&&e.delete()}function Br(){H.prototype.getPointee=Ir,H.prototype.destructor=Lr,H.prototype.argPackAdvance=8,H.prototype.readValueFromPointer=Oe,H.prototype.deleteObject=xr,H.prototype.fromWireType=jr}function H(e,t,r,n,s,l,f,o,u,c,h){this.name=e,this.registeredClass=t,this.isReference=r,this.isConst=n,this.isSmartPointer=s,this.pointeeType=l,this.sharingPolicy=f,this.rawGetPointee=o,this.rawConstructor=u,this.rawShare=c,this.rawDestructor=h,!s&&t.baseClass===void 0?n?(this.toWireType=Wr,this.destructorFunction=null):(this.toWireType=Hr,this.destructorFunction=null):this.toWireType=Mr}function Vr(e,t,r){a.hasOwnProperty(e)||Fe("Replacing nonexistant public symbol"),a[e].overloadTable!==void 0&&r!==void 0?a[e].overloadTable[r]=t:(a[e]=t,a[e].argCount=r)}function zr(e,t,r){var n=a["dynCall_"+e];return r&&r.length?n.apply(null,[t].concat(r)):n.call(null,t)}var Ee=[];function ve(e){var t=Ee[e];return t||(e>=Ee.length&&(Ee.length=e+1),Ee[e]=t=mt.get(e)),t}function Gr(e,t,r){if(e.includes("j"))return zr(e,t,r);var n=ve(t).apply(null,r);return n}function qr(e,t){var r=[];return function(){return r.length=0,Object.assign(r,arguments),Gr(e,t,r)}}function z(e,t){e=O(e);function r(){return e.includes("j")?qr(e,t):ve(t)}var n=r();return typeof n!="function"&&m("unknown function pointer with signature "+e+": "+t),n}var kt=void 0;function Ot(e){var t=Mt(e),r=O(t);return I(t),r}function he(e,t){var r=[],n={};function s(l){if(!n[l]&&!J[l]){if(Ae[l]){Ae[l].forEach(s);return}r.push(l),n[l]=!0}}throw t.forEach(s),new kt(e+": "+r.map(Ot).join([", "]))}function Jr(e,t,r,n,s,l,f,o,u,c,h,g,y){h=O(h),l=z(s,l),o&&(o=z(f,o)),c&&(c=z(u,c)),y=z(g,y);var $=Ke(h);Rr($,function(){he("Cannot construct "+h+" due to unbound types",[n])}),X([e,t,r],n?[n]:[],function(F){F=F[0];var j,S;n?(j=F.registeredClass,S=j.instancePrototype):S=V.prototype;var W=Qe($,function(){if(Object.getPrototypeOf(this)!==ge)throw new te("Use 'new' to construct "+h);if(L.constructor_body===void 0)throw new te(h+" has no accessible constructor");var xt=L.constructor_body[arguments.length];if(xt===void 0)throw new te("Tried to invoke ctor of "+h+" with invalid number of parameters ("+arguments.length+") - expected ("+Object.keys(L.constructor_body).toString()+") parameters instead!");return xt.apply(this,arguments)}),ge=Object.create(S,{constructor:{value:W}});W.prototype=ge;var L=new Ur(h,W,ge,y,j,l,o,c),Ln=new H(h,L,!0,!1,!1),It=new H(h+"*",L,!1,!1,!1),Lt=new H(h+" const*",L,!1,!0,!1);return Ft[e]={pointerType:It,constPointerType:Lt},Vr($,W),[Ln,It,Lt]})}function Et(e,t){for(var r=[],n=0;n<e;n++)r.push(E[t+n*4>>2]);return r}function St(e){for(;e.length;){var t=e.pop(),r=e.pop();r(t)}}function Xr(e,t){if(!(e instanceof Function))throw new TypeError("new_ called with constructor type "+typeof e+" which is not a function");var r=Qe(e.name||"unknownFunctionName",function(){});r.prototype=e.prototype;var n=new r,s=e.apply(n,t);return s instanceof Object?s:n}function Dt(e,t,r,n,s){var l=t.length;l<2&&m("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var f=t[1]!==null&&r!==null,o=!1,u=1;u<t.length;++u)if(t[u]!==null&&t[u].destructorFunction===void 0){o=!0;break}for(var c=t[0].name!=="void",h="",g="",u=0;u<l-2;++u)h+=(u!==0?", ":"")+"arg"+u,g+=(u!==0?", ":"")+"arg"+u+"Wired";var y="return function "+Ke(e)+"("+h+`) {
if (arguments.length !== `+(l-2)+`) {
throwBindingError('function `+e+" called with ' + arguments.length + ' arguments, expected "+(l-2)+` args!');
}
`;o&&(y+=`var destructors = [];
`);var $=o?"destructors":"null",F=["throwBindingError","invoker","fn","runDestructors","retType","classParam"],j=[m,n,s,St,t[0],t[1]];f&&(y+="var thisWired = classParam.toWireType("+$+`, this);
`);for(var u=0;u<l-2;++u)y+="var arg"+u+"Wired = argType"+u+".toWireType("+$+", arg"+u+"); // "+t[u+2].name+`
`,F.push("argType"+u),j.push(t[u+2]);if(f&&(g="thisWired"+(g.length>0?", ":"")+g),y+=(c?"var rv = ":"")+"invoker(fn"+(g.length>0?", ":"")+g+`);
`,o)y+=`runDestructors(destructors);
`;else for(var u=f?1:2;u<t.length;++u){var S=u===1?"thisWired":"arg"+(u-2)+"Wired";t[u].destructorFunction!==null&&(y+=S+"_dtor("+S+"); // "+t[u].name+`
`,F.push(S+"_dtor"),j.push(t[u].destructorFunction))}c&&(y+=`var ret = retType.fromWireType(rv);
return ret;
`),y+=`}
`,F.push(y);var W=Xr(Function,F).apply(null,j);return W}function Kr(e,t,r,n,s,l){Be(t>0);var f=Et(t,r);s=z(n,s),X([],[e],function(o){o=o[0];var u="constructor "+o.name;if(o.registeredClass.constructor_body===void 0&&(o.registeredClass.constructor_body=[]),o.registeredClass.constructor_body[t-1]!==void 0)throw new te("Cannot register multiple constructors with identical number of parameters ("+(t-1)+") for class '"+o.name+"'! Overload resolution is currently only performed using the parameter count, not actual type info!");return o.registeredClass.constructor_body[t-1]=()=>{he("Cannot construct "+o.name+" due to unbound types",f)},X([],f,function(c){return c.splice(1,0,null),o.registeredClass.constructor_body[t-1]=Dt(u,c,null,s,l),[]}),[]})}function Qr(e,t,r,n,s,l,f,o){var u=Et(r,n);t=O(t),l=z(s,l),X([],[e],function(c){c=c[0];var h=c.name+"."+t;t.startsWith("@@")&&(t=Symbol[t.substring(2)]),o&&c.registeredClass.pureVirtualFunctions.push(t);function g(){he("Cannot call "+h+" due to unbound types",u)}var y=c.registeredClass.instancePrototype,$=y[t];return $===void 0||$.overloadTable===void 0&&$.className!==c.name&&$.argCount===r-2?(g.argCount=r-2,g.className=c.name,y[t]=g):(jt(y,t,h),y[t].overloadTable[r-2]=g),X([],u,function(F){var j=Dt(h,F,c,l,f);return y[t].overloadTable===void 0?(j.argCount=r-2,y[t]=j):y[t].overloadTable[r-2]=j,[]}),[]})}function Rt(e,t,r){return e instanceof Object||m(r+' with invalid "this": '+e),e instanceof t.registeredClass.constructor||m(r+' incompatible with "this" of type '+e.constructor.name),e.$$.ptr||m("cannot call emscripten binding method "+r+" on deleted object"),ke(e.$$.ptr,e.$$.ptrType.registeredClass,t.registeredClass)}function Yr(e,t,r,n,s,l,f,o,u,c){t=O(t),s=z(n,s),X([],[e],function(h){h=h[0];var g=h.name+"."+t,y={get:function(){he("Cannot access "+g+" due to unbound types",[r,f])},enumerable:!0,configurable:!0};return u?y.set=()=>{he("Cannot access "+g+" due to unbound types",[r,f])}:y.set=$=>{m(g+" is a read-only property")},Object.defineProperty(h.registeredClass.instancePrototype,t,y),X([],u?[r,f]:[r],function($){var F=$[0],j={get:function(){var W=Rt(this,h,g+" getter");return F.fromWireType(s(l,W))},enumerable:!0};if(u){u=z(o,u);var S=$[1];j.set=function(W){var ge=Rt(this,h,g+" setter"),L=[];u(c,ge,S.toWireType(L,W)),St(L)}}return Object.defineProperty(h.registeredClass.instancePrototype,t,j),[]}),[]})}var tt=[],U=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function Ut(e){e>4&&--U[e].refcount===0&&(U[e]=void 0,tt.push(e))}function Zr(){for(var e=0,t=5;t<U.length;++t)U[t]!==void 0&&++e;return e}function Nr(){for(var e=5;e<U.length;++e)if(U[e]!==void 0)return U[e];return null}function en(){a.count_emval_handles=Zr,a.get_first_emval=Nr}var Se={toValue:e=>(e||m("Cannot use deleted val. handle = "+e),U[e].value),toHandle:e=>{switch(e){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:{var t=tt.length?tt.pop():U.length;return U[t]={refcount:1,value:e},t}}}};function tn(e,t){t=O(t),M(e,{name:t,fromWireType:function(r){var n=Se.toValue(r);return Ut(r),n},toWireType:function(r,n){return Se.toHandle(n)},argPackAdvance:8,readValueFromPointer:Oe,destructorFunction:null})}function rt(e){if(e===null)return"null";var t=typeof e;return t==="object"||t==="array"||t==="function"?e.toString():""+e}function rn(e,t){switch(t){case 2:return function(r){return this.fromWireType(ht[r>>2])};case 3:return function(r){return this.fromWireType(gt[r>>3])};default:throw new TypeError("Unknown float type: "+e)}}function nn(e,t,r){var n=Xe(r);t=O(t),M(e,{name:t,fromWireType:function(s){return s},toWireType:function(s,l){return l},argPackAdvance:8,readValueFromPointer:rn(t,n),destructorFunction:null})}function sn(e,t,r){switch(t){case 0:return r?function(s){return ae[s]}:function(s){return A[s]};case 1:return r?function(s){return oe[s>>1]}:function(s){return $e[s>>1]};case 2:return r?function(s){return q[s>>2]}:function(s){return E[s>>2]};default:throw new TypeError("Unknown integer type: "+e)}}function an(e,t,r,n,s){t=O(t);var l=Xe(r),f=g=>g;if(n===0){var o=32-8*r;f=g=>g<<o>>>o}var u=t.includes("unsigned"),c=(g,y)=>{},h;u?h=function(g,y){return c(y,this.name),y>>>0}:h=function(g,y){return c(y,this.name),y},M(e,{name:t,fromWireType:f,toWireType:h,argPackAdvance:8,readValueFromPointer:sn(t,l,n!==0),destructorFunction:null})}function on(e,t,r){var n=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array],s=n[t];function l(f){f=f>>2;var o=E,u=o[f],c=o[f+1];return new s(se,c,u)}r=O(r),M(e,{name:r,fromWireType:l,argPackAdvance:8,readValueFromPointer:l},{ignoreDuplicateRegistrations:!0})}function un(e,t){t=O(t);var r=t==="std::string";M(e,{name:t,fromWireType:function(n){var s=E[n>>2],l=n+4,f;if(r)for(var o=l,u=0;u<=s;++u){var c=l+u;if(u==s||A[c]==0){var h=c-o,g=Z(o,h);f===void 0?f=g:(f+=String.fromCharCode(0),f+=g),o=c+1}}else{for(var y=new Array(s),u=0;u<s;++u)y[u]=String.fromCharCode(A[l+u]);f=y.join("")}return I(n),f},toWireType:function(n,s){s instanceof ArrayBuffer&&(s=new Uint8Array(s));var l,f=typeof s=="string";f||s instanceof Uint8Array||s instanceof Uint8ClampedArray||s instanceof Int8Array||m("Cannot pass non-string to std::string"),r&&f?l=qe(s):l=s.length;var o=nt(4+l+1),u=o+4;if(E[o>>2]=l,r&&f)Ge(s,u,l+1);else if(f)for(var c=0;c<l;++c){var h=s.charCodeAt(c);h>255&&(I(u),m("String has UTF-16 code units that do not fit in 8 bits")),A[u+c]=h}else for(var c=0;c<l;++c)A[u+c]=s[c];return n!==null&&n.push(I,o),o},argPackAdvance:8,readValueFromPointer:Oe,destructorFunction:function(n){I(n)}})}var ln=new TextDecoder("utf-16le");function fn(e,t){for(var r=e,n=r>>1,s=n+t/2;!(n>=s)&&$e[n];)++n;return r=n<<1,ln.decode(A.subarray(e,r))}function cn(e,t,r){if(r===void 0&&(r=2147483647),r<2)return 0;r-=2;for(var n=t,s=r<e.length*2?r/2:e.length,l=0;l<s;++l){var f=e.charCodeAt(l);oe[t>>1]=f,t+=2}return oe[t>>1]=0,t-n}function dn(e){return e.length*2}function pn(e,t){for(var r=0,n="";!(r>=t/4);){var s=q[e+r*4>>2];if(s==0)break;if(++r,s>=65536){var l=s-65536;n+=String.fromCharCode(55296|l>>10,56320|l&1023)}else n+=String.fromCharCode(s)}return n}function vn(e,t,r){if(r===void 0&&(r=2147483647),r<4)return 0;for(var n=t,s=n+r-4,l=0;l<e.length;++l){var f=e.charCodeAt(l);if(f>=55296&&f<=57343){var o=e.charCodeAt(++l);f=65536+((f&1023)<<10)|o&1023}if(q[t>>2]=f,t+=4,t+4>s)break}return q[t>>2]=0,t-n}function hn(e){for(var t=0,r=0;r<e.length;++r){var n=e.charCodeAt(r);n>=55296&&n<=57343&&++r,t+=4}return t}function gn(e,t,r){r=O(r);var n,s,l,f,o;t===2?(n=fn,s=cn,f=dn,l=()=>$e,o=1):t===4&&(n=pn,s=vn,f=hn,l=()=>E,o=2),M(e,{name:r,fromWireType:function(u){for(var c=E[u>>2],h=l(),g,y=u+4,$=0;$<=c;++$){var F=u+4+$*t;if($==c||h[F>>o]==0){var j=F-y,S=n(y,j);g===void 0?g=S:(g+=String.fromCharCode(0),g+=S),y=F+t}}return I(u),g},toWireType:function(u,c){typeof c!="string"&&m("Cannot pass non-string to C++ string type "+r);var h=f(c),g=nt(4+h+t);return E[g>>2]=h>>o,s(c,g+4,h+t),u!==null&&u.push(I,g),g},argPackAdvance:8,readValueFromPointer:Oe,destructorFunction:function(u){I(u)}})}function yn(e,t){t=O(t),M(e,{isVoid:!0,name:t,argPackAdvance:0,fromWireType:function(){},toWireType:function(r,n){}})}function mn(){throw 1/0}function bn(e){e>4&&(U[e].refcount+=1)}function _n(e,t){var r=J[e];return r===void 0&&m(t+" has unknown type "+Ot(e)),r}function wn(e,t){e=_n(e,"_emval_take_value");var r=e.readValueFromPointer(t);return Se.toHandle(r)}function Cn(){N("")}var Wt;Wt=()=>performance.now();function Pn(e,t,r){A.copyWithin(e,t,t+r)}function Tn(){return 2147483648}function $n(e){try{return Y.grow(e-se.byteLength+65535>>>16),yt(Y.buffer),1}catch{}}function An(e){var t=A.length;e=e>>>0;var r=Tn();if(e>r)return!1;let n=(u,c)=>u+(c-u%c)%c;for(var s=1;s<=4;s*=2){var l=t*(1+.2/s);l=Math.min(l,e+100663296);var f=Math.min(r,n(Math.max(e,l),65536)),o=$n(f);if(o)return!0}return!1}function Fn(e){P(e,new ur(e))}function jn(e,t){Fn(e)}var kn=jn;function On(e){return 52}function En(e,t,r,n){return 52}function Sn(e,t,r,n,s){return 70}var Dn=[null,[],[]];function Rn(e,t){var r=Dn[e];t===0||t===10?((e===1?ie:B)(Ve(r,0)),r.length=0):r.push(t)}function Un(e,t,r,n){for(var s=0,l=0;l<r;l++){var f=E[t>>2],o=E[t+4>>2];t+=8;for(var u=0;u<o;u++)Rn(e,A[f+u]);s+=o}return E[n>>2]=s,0}hr(),te=a.BindingError=Ye(Error,"BindingError"),Pt=a.InternalError=Ye(Error,"InternalError"),Dr(),$r(),Br(),kt=a.UnboundTypeError=Ye(Error,"UnboundTypeError"),en();var Wn={a:lr,n:fr,A:cr,E:dr,l:pr,u:vr,G:mr,g:Jr,m:Kr,c:Qr,b:Yr,F:tn,o:nn,f:an,d:on,p:un,k:gn,H:yn,y:mn,r:Ut,s:bn,q:wn,e:Cn,h:Wt,B:Pn,z:An,i:kn,j:On,D:En,t:Sn,C:Un,x:Mn,v:In,w:Hn};or(),a.___wasm_call_ctors=function(){return(a.___wasm_call_ctors=a.asm.J).apply(null,arguments)};var nt=a._malloc=function(){return(nt=a._malloc=a.asm.K).apply(null,arguments)},I=a._free=function(){return(I=a._free=a.asm.L).apply(null,arguments)},Mt=a.___getTypeName=function(){return(Mt=a.___getTypeName=a.asm.M).apply(null,arguments)};a.__embind_initialize_bindings=function(){return(a.__embind_initialize_bindings=a.asm.N).apply(null,arguments)};var De=a._setThrew=function(){return(De=a._setThrew=a.asm.P).apply(null,arguments)},Re=a.stackSave=function(){return(Re=a.stackSave=a.asm.Q).apply(null,arguments)},Ue=a.stackRestore=function(){return(Ue=a.stackRestore=a.asm.R).apply(null,arguments)};a.dynCall_jiji=function(){return(a.dynCall_jiji=a.asm.S).apply(null,arguments)},a.dynCall_jij=function(){return(a.dynCall_jij=a.asm.T).apply(null,arguments)},a.dynCall_viiiiji=function(){return(a.dynCall_viiiiji=a.asm.U).apply(null,arguments)};function Mn(e,t,r){var n=Re();try{return ve(e)(t,r)}catch(s){if(Ue(n),s!==s+0)throw s;De(1,0)}}function Hn(e,t,r,n,s){var l=Re();try{return ve(e)(t,r,n,s)}catch(f){if(Ue(l),f!==f+0)throw f;De(1,0)}}function In(e,t,r,n){var s=Re();try{return ve(e)(t,r,n)}catch(l){if(Ue(s),l!==l+0)throw l;De(1,0)}}var We;le=function e(){We||Ht(),We||(le=e)};function Ht(e){if(ue>0||(Nt(),ue>0))return;function t(){We||(We=!0,a.calledRun=!0,!Pe&&(er(),w(a),tr()))}t()}return Ht(),a.ready}})();i.exports=p})(Bt);const Vt=K,it=(i,d)=>{const p=new XMLHttpRequest;return p.open("GET",i,!1),p.responseType=d?"arraybuffer":"text",p.send(null),p.response},zt=(i,d,p)=>{const v=new XMLHttpRequest;v.open("GET",i,!0),v.responseType="arraybuffer",v.onload=()=>{if((v.status===200||v.status===0)&&v.response)return d(v.response);p()},v.onerror=p,v.send(null)};self.out=i=>{i==="libass: No usable fontconfig configuration file found, using fallback."?console.debug(i):console.log(i)},self.err=i=>{i==="Fontconfig error: Cannot load default config file: No such file: (null)"?console.debug(i):console.error(i)};let re=0;const Gt=1;let x=null,st=!1,Me=Date.now(),ye=24,at=!1,ot="js",me={};const ut={};let qt=0,lt;self.width=0,self.height=0;let G=!1;self.addFont=({font:i})=>Ie(i);const He=i=>{if(i=i.trim().toLowerCase(),i.startsWith("@")&&(i=i.substring(1)),!ut[i]){if(ut[i]=!0,!me[i]&&at)return postMessage({target:"getLocalFont",font:i});Ie(me[i])}},Ie=i=>{ArrayBuffer.isView(i)?ft(i):zt(i,d=>{ft(new Uint8Array(d))},console.error)},ft=i=>{const d=Module._malloc(i.byteLength);Module.HEAPU8.set(i,d),self.jassubObj.addFont("font-"+qt++,d,i.byteLength),self.jassubObj.reloadFonts()},ct=i=>{if(!me)return;const d=Qt(i);for(let C=0;C<d.length;C++)for(let a=0;a<d[C].body.length;a++)d[C].body[a].key==="Style"&&He(d[C].body[a].value.Fontname);const p=/\\fn([^\\}]*?)[\\}]/g;let v;for(;(v=p.exec(i))!==null;)He(v[1])};self.setTrack=({content:i})=>{ct(i),self.jassubObj.createTrackMem(i)},self.freeTrack=()=>{self.jassubObj.removeTrack()},self.setTrackByUrl=({url:i})=>{self.setTrack({content:it(i)})};const Jt=(i,d)=>{self.width=i,self.height=d,self.jassubObj.resizeCanvas(i,d)},Xt=()=>{const i=(Date.now()-Me)/1e3;return be?re:(i>5&&(console.error("Didn't received currentTime > 5 seconds. Assuming video was paused."),dt(!0)),re+i*Gt)},Kt=i=>{re=i,Me=Date.now(),x||(st?x=xe(_e):(_e(),setTimeout(()=>{st=!1},20)))};let be=!0;const dt=i=>{i!==be&&(be=i,i?x&&(clearTimeout(x),x=null):(Me=Date.now(),x=xe(_e)))},Le=(i,d)=>{const p=Date.now();let v=null;if(ot==="wasm"?(v=self.jassubObj.renderBlend(i,d),v&&(v.times={renderTime:Date.now()-p-(v&&v.time)|0,blendTime:(v&&v.time)|0})):(v=self.jassubObj.renderImage(i,d),v&&(v.times={renderTime:Date.now()-p-(v&&v.time)|0,cppDecodeTime:(v&&v.time)|0})),v&&(self.jassubObj.changed!==0||d)){const C=[];let a=[];const w=Date.now();if(G){const _=[];for(let b=v,P=0;P<self.jassubObj.count;b=b.next,++P)b.image&&(C.push({w:b.w,h:b.h,x:b.x,y:b.y}),_.push(createImageBitmap(new ImageData(new Uint8ClampedArray(Module.HEAPU8).subarray(b.image,b.image+b.w*b.h*4),b.w,b.h))));Promise.all(_).then(b=>{for(let P=0;P<C.length;P++)C[P].image=b[P];a=b,pt({images:C,buffers:a,times:v.times,decodeStartTime:w})})}else{for(let _=v,b=0;b<self.jassubObj.count;_=_.next,++b)if(_.image){const P={w:_.w,h:_.h,x:_.x,y:_.y,image:_.image};if(!Q){const T=buffer.slice(_.image,_.image+_.w*_.h*4);a.push(T),P.image=T}C.push(P)}pt({images:C,buffers:a,times:v.times,decodeStartTime:w})}}else postMessage({target:"unbusy"})};self.demand=({time:i})=>{re=i,Le(i)};const _e=i=>{x=0,Le(Xt(),i),be||(x=xe(_e))},pt=({times:i,images:d,decodeStartTime:p,buffers:v})=>{if(i.decodeTime=Date.now()-p,Q){const C=Date.now();ne.width=self.width,ne.height!==self.height?ne.height=self.height:Q.clearRect(0,0,self.width,self.height);for(const a of d)a.image&&(G?(Q.drawImage(a.image,a.x,a.y),a.image.close()):(self.bufferCanvas.width=a.w,self.bufferCanvas.height=a.h,self.bufferCtx.putImageData(new ImageData(new Uint8ClampedArray(Module.HEAPU8).subarray(a.image,a.image+a.w*a.h*4),a.w,a.h),0,0),Q.drawImage(self.bufferCanvas,a.x,a.y)));if(lt){i.drawTime=Date.now()-C;let a=0;for(const w in i)a+=i[w];console.log("Bitmaps: "+d.length+" Total: "+Math.round(a)+"ms",i)}postMessage({target:"unbusy"})}else postMessage({target:"render",async:G,images:d,times:i,width:self.width,height:self.height},v)},Qt=i=>{let d,p,v,C,a,w,_,b,P,T;const D=[],k=i.split(/[\r\n]+/g);for(b=0;b<k.length;b++)if(d=k[b].match(/^\[(.*)\]$/),d)p=null,D.push({name:d[1],body:[]});else{if(/^\s*$/.test(k[b])||D.length===0)continue;if(T=D[D.length-1].body,k[b][0]===";")T.push({type:"comment",value:k[b].substring(1)});else{if(C=k[b].split(":"),a=C[0],w=C.slice(1).join(":").trim(),(p||a==="Format")&&(w=w.split(","),p&&w.length>p.length&&(v=w.slice(p.length-1).join(","),w=w.slice(0,p.length-1),w.push(v)),w=w.map(ie=>ie.trim()),p)){for(_={},P=0;P<w.length;P++)_[p[P]]=w[P];w=_}a==="Format"&&(p=w),T.push({key:a,value:w})}}return D},xe=(()=>{let i=0;return d=>{const p=Date.now();if(i===0)i=p+1e3/ye;else for(;p+2>=i;)i+=1e3/ye;const v=Math.max(i-p,0);return setTimeout(d,v)}})(),we=(i,d)=>{for(const p of Object.keys(i))d[p]=i[p]};let vt;self.preInit=async i=>{vt=i.publicPath,globalThis.Module=await Vt({locateFile:d=>`${vt}${d.replace("/dist","")}`}),postMessage({target:"ready"})},self.init=i=>{self.publicPath=i.publicPath,self.width=i.width,self.height=i.height,ot=i.blendMode,G=i.asyncRender,G&&typeof createImageBitmap>"u"&&(G=!1,console.error("'createImageBitmap' needed for 'asyncRender' unsupported!")),me=i.availableFonts,lt=i.debug,ye=i.targetFps||ye,at=i.useLocalFonts;const d=i.fallbackFont.toLowerCase();self.jassubObj=new Module.JASSUB(self.width,self.height,d||null),d&&He(d);let p=i.subContent;p||(p=it(i.subUrl)),ct(p);for(const v of i.fonts||[])Ie(v);self.jassubObj.createTrackMem(p),self.jassubObj.setDropAnimations(i.dropAllAnimations),(i.libassMemoryLimit>0||i.libassGlyphLimit>0)&&self.jassubObj.setMemoryLimits(i.libassGlyphLimit||0,i.libassMemoryLimit||0)},self.canvas=({width:i,height:d,force:p})=>{if(i==null)throw new Error("Invalid canvas size specified");Jt(i,d),p&&Le(re)},self.video=({currentTime:i,isPaused:d,rate:p})=>{i!=null&&Kt(i),d!=null&&dt(d),p=p||p};let ne,Q;self.offscreenCanvas=({transferable:i})=>{ne=i[0],Q=ne.getContext("2d",{desynchronized:!0}),G||(self.bufferCanvas=new OffscreenCanvas(self.height,self.width),self.bufferCtx=self.bufferCanvas.getContext("2d",{desynchronized:!0}))},self.destroy=()=>{self.jassubObj.quitLibrary()},self.createEvent=({event:i})=>{we(i,self.jassubObj.getEvent(self.jassubObj.allocEvent()))},self.getEvents=()=>{const i=[];for(let d=0;d<self.jassubObj.getEventCount();d++){const{Start:p,Duration:v,ReadOrder:C,Layer:a,Style:w,MarginL:_,MarginR:b,MarginV:P,Name:T,Text:D,Effect:k}=self.jassubObj.getEvent(d);i.push({Start:p,Duration:v,ReadOrder:C,Layer:a,Style:w,MarginL:_,MarginR:b,MarginV:P,Name:T,Text:D,Effect:k})}postMessage({target:"getEvents",events:i})},self.setEvent=({event:i,index:d})=>{we(i,self.jassubObj.getEvent(d))},self.removeEvent=({index:i})=>{self.jassubObj.removeEvent(i)},self.createStyle=({style:i})=>{we(i,self.jassubObj.getStyle(self.jassubObj.allocStyle()))},self.getStyles=()=>{const i=[];for(let d=0;d<self.jassubObj.getStyleCount();d++){const{Name:p,FontName:v,FontSize:C,PrimaryColour:a,SecondaryColour:w,OutlineColour:_,BackColour:b,Bold:P,Italic:T,Underline:D,StrikeOut:k,ScaleX:ie,ScaleY:B,Spacing:Ce,Angle:Y,BorderStyle:Pe,Outline:Be,Shadow:Te,Alignment:Ve,MarginL:Z,MarginR:ze,MarginV:Ge,Encoding:qe,treat_fontname_as_pattern:se,Blur:ae,Justify:A}=self.jassubObj.getStyle(d);i.push({Name:p,FontName:v,FontSize:C,PrimaryColour:a,SecondaryColour:w,OutlineColour:_,BackColour:b,Bold:P,Italic:T,Underline:D,StrikeOut:k,ScaleX:ie,ScaleY:B,Spacing:Ce,Angle:Y,BorderStyle:Pe,Outline:Be,Shadow:Te,Alignment:Ve,MarginL:Z,MarginR:ze,MarginV:Ge,Encoding:qe,treat_fontname_as_pattern:se,Blur:ae,Justify:A})}postMessage({target:"getStyles",time:Date.now(),styles:i})},self.setStyle=({style:i,index:d})=>{we(i,self.jassubObj.getStyle(d))},self.removeStyle=({index:i})=>{self.jassubObj.removeStyle(i)},onmessage=({data:i})=>{if(self[i.target])self[i.target](i);else throw new Error("Unknown event target "+i.target)}});
