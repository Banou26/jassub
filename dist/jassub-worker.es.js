var jassubWorker = {exports: {}};

(function (module, exports) {
var Module = (() => {
  var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
  
  return (
function(Module = {})  {

var Module=typeof Module!="undefined"?Module:{};var readyPromiseResolve,readyPromiseReject;Module["ready"]=new Promise(function(resolve,reject){readyPromiseResolve=resolve;readyPromiseReject=reject;});var moduleOverrides=Object.assign({},Module);var thisProgram="./this.program";var quit_=(status,toThrow)=>{throw toThrow};var scriptDirectory="";function locateFile(path){if(Module["locateFile"]){return Module["locateFile"](path,scriptDirectory)}return scriptDirectory+path}var readBinary;{if(typeof document!="undefined"&&document.currentScript){scriptDirectory=document.currentScript.src;}if(_scriptDir){scriptDirectory=_scriptDir;}if(scriptDirectory.indexOf("blob:")!==0){scriptDirectory=scriptDirectory.substr(0,scriptDirectory.replace(/[?#].*/,"").lastIndexOf("/")+1);}else {scriptDirectory="";}}var out=Module["print"]||console.log.bind(console);var err=Module["printErr"]||console.warn.bind(console);Object.assign(Module,moduleOverrides);moduleOverrides=null;if(Module["arguments"])Module["arguments"];var wasmBinary;if(typeof WebAssembly!="object"){abort("no native wasm support detected");}var wasmMemory;var ABORT=false;var UTF8Decoder=typeof TextDecoder!="undefined"?new TextDecoder("utf8"):undefined;function UTF8ArrayToString(heapOrArray,idx,maxBytesToRead){var endIdx=idx+maxBytesToRead;var endPtr=idx;while(heapOrArray[endPtr]&&!(endPtr>=endIdx))++endPtr;if(endPtr-idx>16&&heapOrArray.buffer&&UTF8Decoder){return UTF8Decoder.decode(heapOrArray.subarray(idx,endPtr))}var str="";while(idx<endPtr){var u0=heapOrArray[idx++];if(!(u0&128)){str+=String.fromCharCode(u0);continue}var u1=heapOrArray[idx++]&63;if((u0&224)==192){str+=String.fromCharCode((u0&31)<<6|u1);continue}var u2=heapOrArray[idx++]&63;if((u0&240)==224){u0=(u0&15)<<12|u1<<6|u2;}else {u0=(u0&7)<<18|u1<<12|u2<<6|heapOrArray[idx++]&63;}if(u0<65536){str+=String.fromCharCode(u0);}else {var ch=u0-65536;str+=String.fromCharCode(55296|ch>>10,56320|ch&1023);}}return str}function UTF8ToString(ptr,maxBytesToRead){return ptr?UTF8ArrayToString(HEAPU8,ptr,maxBytesToRead):""}function stringToUTF8Array(str,heap,outIdx,maxBytesToWrite){if(!(maxBytesToWrite>0))return 0;var startIdx=outIdx;var endIdx=outIdx+maxBytesToWrite-1;for(var i=0;i<str.length;++i){var u=str.charCodeAt(i);if(u>=55296&&u<=57343){var u1=str.charCodeAt(++i);u=65536+((u&1023)<<10)|u1&1023;}if(u<=127){if(outIdx>=endIdx)break;heap[outIdx++]=u;}else if(u<=2047){if(outIdx+1>=endIdx)break;heap[outIdx++]=192|u>>6;heap[outIdx++]=128|u&63;}else if(u<=65535){if(outIdx+2>=endIdx)break;heap[outIdx++]=224|u>>12;heap[outIdx++]=128|u>>6&63;heap[outIdx++]=128|u&63;}else {if(outIdx+3>=endIdx)break;heap[outIdx++]=240|u>>18;heap[outIdx++]=128|u>>12&63;heap[outIdx++]=128|u>>6&63;heap[outIdx++]=128|u&63;}}heap[outIdx]=0;return outIdx-startIdx}function stringToUTF8(str,outPtr,maxBytesToWrite){return stringToUTF8Array(str,HEAPU8,outPtr,maxBytesToWrite)}function lengthBytesUTF8(str){var len=0;for(var i=0;i<str.length;++i){var c=str.charCodeAt(i);if(c<=127){len++;}else if(c<=2047){len+=2;}else if(c>=55296&&c<=57343){len+=4;++i;}else {len+=3;}}return len}var HEAP8,HEAPU8,HEAP16,HEAPU16,HEAP32,HEAPU32,HEAPF32,HEAPF64;function updateMemoryViews(){var b=wasmMemory.buffer;Module["HEAP8"]=HEAP8=new Int8Array(b);Module["HEAP16"]=HEAP16=new Int16Array(b);Module["HEAP32"]=HEAP32=new Int32Array(b);Module["HEAPU8"]=HEAPU8=new Uint8Array(b);Module["HEAPU16"]=HEAPU16=new Uint16Array(b);Module["HEAPU32"]=HEAPU32=new Uint32Array(b);Module["HEAPF32"]=HEAPF32=new Float32Array(b);Module["HEAPF64"]=HEAPF64=new Float64Array(b);}var wasmTable;var __ATPRERUN__=[];var __ATINIT__=[];var __ATPOSTRUN__=[];function preRun(){callRuntimeCallbacks(__ATPRERUN__);}function initRuntime(){callRuntimeCallbacks(__ATINIT__);}function postRun(){callRuntimeCallbacks(__ATPOSTRUN__);}function addOnInit(cb){__ATINIT__.unshift(cb);}var runDependencies=0;var dependenciesFulfilled=null;function addRunDependency(id){runDependencies++;}function removeRunDependency(id){runDependencies--;if(runDependencies==0){if(dependenciesFulfilled){var callback=dependenciesFulfilled;dependenciesFulfilled=null;callback();}}}function abort(what){what="Aborted("+what+")";err(what);ABORT=true;what+=". Build with -sASSERTIONS for more info.";var e=new WebAssembly.RuntimeError(what);readyPromiseReject(e);throw e}var dataURIPrefix="data:application/octet-stream;base64,";function isDataURI(filename){return filename.startsWith(dataURIPrefix)}var wasmBinaryFile;wasmBinaryFile="jassub-worker.wasm";if(!isDataURI(wasmBinaryFile)){wasmBinaryFile=locateFile(wasmBinaryFile);}function getBinary(file){try{if(file==wasmBinaryFile&&wasmBinary){return new Uint8Array(wasmBinary)}if(readBinary);throw "both async and sync fetching of the wasm failed"}catch(err){abort(err);}}function getBinaryPromise(){{if(typeof fetch=="function"){return fetch(wasmBinaryFile,{credentials:"same-origin"}).then(function(response){if(!response["ok"]){throw "failed to load wasm binary file at '"+wasmBinaryFile+"'"}return response["arrayBuffer"]()}).catch(function(){return getBinary(wasmBinaryFile)})}}return Promise.resolve().then(function(){return getBinary(wasmBinaryFile)})}function createWasm(){var info={"a":wasmImports};function receiveInstance(instance,module){var exports=instance.exports;Module["asm"]=exports;wasmMemory=Module["asm"]["T"];updateMemoryViews();wasmTable=Module["asm"]["Lc"];addOnInit(Module["asm"]["U"]);removeRunDependency();}addRunDependency();function receiveInstantiationResult(result){receiveInstance(result["instance"]);}function instantiateArrayBuffer(receiver){return getBinaryPromise().then(function(binary){return WebAssembly.instantiate(binary,info)}).then(function(instance){return instance}).then(receiver,function(reason){err("failed to asynchronously prepare wasm: "+reason);abort(reason);})}function instantiateAsync(){if(typeof WebAssembly.instantiateStreaming=="function"&&!isDataURI(wasmBinaryFile)&&typeof fetch=="function"){return fetch(wasmBinaryFile,{credentials:"same-origin"}).then(function(response){var result=WebAssembly.instantiateStreaming(response,info);return result.then(receiveInstantiationResult,function(reason){err("wasm streaming compile failed: "+reason);err("falling back to ArrayBuffer instantiation");return instantiateArrayBuffer(receiveInstantiationResult)})})}else {return instantiateArrayBuffer(receiveInstantiationResult)}}if(Module["instantiateWasm"]){try{var exports=Module["instantiateWasm"](info,receiveInstance);return exports}catch(e){err("Module.instantiateWasm callback failed with error: "+e);readyPromiseReject(e);}}instantiateAsync().catch(readyPromiseReject);return {}}function ExitStatus(status){this.name="ExitStatus";this.message="Program terminated with exit("+status+")";this.status=status;}function callRuntimeCallbacks(callbacks){while(callbacks.length>0){callbacks.shift()(Module);}}function ___assert_fail(condition,filename,line,func){abort("Assertion failed: "+UTF8ToString(condition)+", at: "+[filename?UTF8ToString(filename):"unknown filename",line,func?UTF8ToString(func):"unknown function"]);}var SYSCALLS={varargs:undefined,get:function(){SYSCALLS.varargs+=4;var ret=HEAP32[SYSCALLS.varargs-4>>2];return ret},getStr:function(ptr){var ret=UTF8ToString(ptr);return ret}};function ___syscall_chmod(path,mode){}function ___syscall_faccessat(dirfd,path,amode,flags){}function ___syscall_fcntl64(fd,cmd,varargs){SYSCALLS.varargs=varargs;return 0}function ___syscall_fstat64(fd,buf){}function ___syscall_statfs64(path,size,buf){}function ___syscall_fstatfs64(fd,size,buf){SYSCALLS.getStreamFromFD(fd);return ___syscall_statfs64()}function ___syscall_getcwd(buf,size){}function ___syscall_getdents64(fd,dirp,count){}function ___syscall_ioctl(fd,op,varargs){SYSCALLS.varargs=varargs;return 0}function ___syscall_lstat64(path,buf){}function ___syscall_mkdirat(dirfd,path,mode){}function ___syscall_newfstatat(dirfd,path,buf,flags){}function ___syscall_openat(dirfd,path,flags,varargs){SYSCALLS.varargs=varargs;}function ___syscall_readlinkat(dirfd,path,buf,bufsize){}function ___syscall_renameat(olddirfd,oldpath,newdirfd,newpath){}function ___syscall_rmdir(path){}function ___syscall_stat64(path,buf){}function ___syscall_symlink(target,linkpath){}function ___syscall_unlinkat(dirfd,path,flags){}function __embind_register_bigint(primitiveType,name,size,minRange,maxRange){}function getShiftFromSize(size){switch(size){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+size)}}function embind_init_charCodes(){var codes=new Array(256);for(var i=0;i<256;++i){codes[i]=String.fromCharCode(i);}embind_charCodes=codes;}var embind_charCodes=undefined;function readLatin1String(ptr){var ret="";var c=ptr;while(HEAPU8[c]){ret+=embind_charCodes[HEAPU8[c++]];}return ret}var awaitingDependencies={};var registeredTypes={};var char_0=48;var char_9=57;function makeLegalFunctionName(name){if(undefined===name){return "_unknown"}name=name.replace(/[^a-zA-Z0-9_]/g,"$");var f=name.charCodeAt(0);if(f>=char_0&&f<=char_9){return "_"+name}return name}function createNamedFunction(name,body){name=makeLegalFunctionName(name);return new Function("body","return function "+name+"() {\n"+'    "use strict";'+"    return body.apply(this, arguments);\n"+"};\n")(body)}function extendError(baseErrorType,errorName){var errorClass=createNamedFunction(errorName,function(message){this.name=errorName;this.message=message;var stack=new Error(message).stack;if(stack!==undefined){this.stack=this.toString()+"\n"+stack.replace(/^Error(:[^\n]*)?\n/,"");}});errorClass.prototype=Object.create(baseErrorType.prototype);errorClass.prototype.constructor=errorClass;errorClass.prototype.toString=function(){if(this.message===undefined){return this.name}else {return this.name+": "+this.message}};return errorClass}var BindingError=undefined;function throwBindingError(message){throw new BindingError(message)}function registerType(rawType,registeredInstance,options={}){if(!("argPackAdvance"in registeredInstance)){throw new TypeError("registerType registeredInstance requires argPackAdvance")}var name=registeredInstance.name;if(!rawType){throwBindingError('type "'+name+'" must have a positive integer typeid pointer');}if(registeredTypes.hasOwnProperty(rawType)){if(options.ignoreDuplicateRegistrations){return}else {throwBindingError("Cannot register type '"+name+"' twice");}}registeredTypes[rawType]=registeredInstance;if(awaitingDependencies.hasOwnProperty(rawType)){var callbacks=awaitingDependencies[rawType];delete awaitingDependencies[rawType];callbacks.forEach(cb=>cb());}}function __embind_register_bool(rawType,name,size,trueValue,falseValue){var shift=getShiftFromSize(size);name=readLatin1String(name);registerType(rawType,{name:name,"fromWireType":function(wt){return !!wt},"toWireType":function(destructors,o){return o?trueValue:falseValue},"argPackAdvance":8,"readValueFromPointer":function(pointer){var heap;if(size===1){heap=HEAP8;}else if(size===2){heap=HEAP16;}else if(size===4){heap=HEAP32;}else {throw new TypeError("Unknown boolean type size: "+name)}return this["fromWireType"](heap[pointer>>shift])},destructorFunction:null});}var emval_free_list=[];var emval_handle_array=[{},{value:undefined},{value:null},{value:true},{value:false}];function __emval_decref(handle){if(handle>4&&0===--emval_handle_array[handle].refcount){emval_handle_array[handle]=undefined;emval_free_list.push(handle);}}function count_emval_handles(){var count=0;for(var i=5;i<emval_handle_array.length;++i){if(emval_handle_array[i]!==undefined){++count;}}return count}function get_first_emval(){for(var i=5;i<emval_handle_array.length;++i){if(emval_handle_array[i]!==undefined){return emval_handle_array[i]}}return null}function init_emval(){Module["count_emval_handles"]=count_emval_handles;Module["get_first_emval"]=get_first_emval;}var Emval={toValue:handle=>{if(!handle){throwBindingError("Cannot use deleted val. handle = "+handle);}return emval_handle_array[handle].value},toHandle:value=>{switch(value){case undefined:return 1;case null:return 2;case true:return 3;case false:return 4;default:{var handle=emval_free_list.length?emval_free_list.pop():emval_handle_array.length;emval_handle_array[handle]={refcount:1,value:value};return handle}}}};function simpleReadValueFromPointer(pointer){return this["fromWireType"](HEAP32[pointer>>2])}function __embind_register_emval(rawType,name){name=readLatin1String(name);registerType(rawType,{name:name,"fromWireType":function(handle){var rv=Emval.toValue(handle);__emval_decref(handle);return rv},"toWireType":function(destructors,value){return Emval.toHandle(value)},"argPackAdvance":8,"readValueFromPointer":simpleReadValueFromPointer,destructorFunction:null});}function floatReadValueFromPointer(name,shift){switch(shift){case 2:return function(pointer){return this["fromWireType"](HEAPF32[pointer>>2])};case 3:return function(pointer){return this["fromWireType"](HEAPF64[pointer>>3])};default:throw new TypeError("Unknown float type: "+name)}}function __embind_register_float(rawType,name,size){var shift=getShiftFromSize(size);name=readLatin1String(name);registerType(rawType,{name:name,"fromWireType":function(value){return value},"toWireType":function(destructors,value){return value},"argPackAdvance":8,"readValueFromPointer":floatReadValueFromPointer(name,shift),destructorFunction:null});}function integerReadValueFromPointer(name,shift,signed){switch(shift){case 0:return signed?function readS8FromPointer(pointer){return HEAP8[pointer]}:function readU8FromPointer(pointer){return HEAPU8[pointer]};case 1:return signed?function readS16FromPointer(pointer){return HEAP16[pointer>>1]}:function readU16FromPointer(pointer){return HEAPU16[pointer>>1]};case 2:return signed?function readS32FromPointer(pointer){return HEAP32[pointer>>2]}:function readU32FromPointer(pointer){return HEAPU32[pointer>>2]};default:throw new TypeError("Unknown integer type: "+name)}}function __embind_register_integer(primitiveType,name,size,minRange,maxRange){name=readLatin1String(name);var shift=getShiftFromSize(size);var fromWireType=value=>value;if(minRange===0){var bitshift=32-8*size;fromWireType=value=>value<<bitshift>>>bitshift;}var isUnsignedType=name.includes("unsigned");var checkAssertions=(value,toTypeName)=>{};var toWireType;if(isUnsignedType){toWireType=function(destructors,value){checkAssertions(value,this.name);return value>>>0};}else {toWireType=function(destructors,value){checkAssertions(value,this.name);return value};}registerType(primitiveType,{name:name,"fromWireType":fromWireType,"toWireType":toWireType,"argPackAdvance":8,"readValueFromPointer":integerReadValueFromPointer(name,shift,minRange!==0),destructorFunction:null});}function __embind_register_memory_view(rawType,dataTypeIndex,name){var typeMapping=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array];var TA=typeMapping[dataTypeIndex];function decodeMemoryView(handle){handle=handle>>2;var heap=HEAPU32;var size=heap[handle];var data=heap[handle+1];return new TA(heap.buffer,data,size)}name=readLatin1String(name);registerType(rawType,{name:name,"fromWireType":decodeMemoryView,"argPackAdvance":8,"readValueFromPointer":decodeMemoryView},{ignoreDuplicateRegistrations:true});}function __embind_register_std_string(rawType,name){name=readLatin1String(name);var stdStringIsUTF8=name==="std::string";registerType(rawType,{name:name,"fromWireType":function(value){var length=HEAPU32[value>>2];var payload=value+4;var str;if(stdStringIsUTF8){var decodeStartPtr=payload;for(var i=0;i<=length;++i){var currentBytePtr=payload+i;if(i==length||HEAPU8[currentBytePtr]==0){var maxRead=currentBytePtr-decodeStartPtr;var stringSegment=UTF8ToString(decodeStartPtr,maxRead);if(str===undefined){str=stringSegment;}else {str+=String.fromCharCode(0);str+=stringSegment;}decodeStartPtr=currentBytePtr+1;}}}else {var a=new Array(length);for(var i=0;i<length;++i){a[i]=String.fromCharCode(HEAPU8[payload+i]);}str=a.join("");}_free(value);return str},"toWireType":function(destructors,value){if(value instanceof ArrayBuffer){value=new Uint8Array(value);}var length;var valueIsOfTypeString=typeof value=="string";if(!(valueIsOfTypeString||value instanceof Uint8Array||value instanceof Uint8ClampedArray||value instanceof Int8Array)){throwBindingError("Cannot pass non-string to std::string");}if(stdStringIsUTF8&&valueIsOfTypeString){length=lengthBytesUTF8(value);}else {length=value.length;}var base=_malloc(4+length+1);var ptr=base+4;HEAPU32[base>>2]=length;if(stdStringIsUTF8&&valueIsOfTypeString){stringToUTF8(value,ptr,length+1);}else {if(valueIsOfTypeString){for(var i=0;i<length;++i){var charCode=value.charCodeAt(i);if(charCode>255){_free(ptr);throwBindingError("String has UTF-16 code units that do not fit in 8 bits");}HEAPU8[ptr+i]=charCode;}}else {for(var i=0;i<length;++i){HEAPU8[ptr+i]=value[i];}}}if(destructors!==null){destructors.push(_free,base);}return base},"argPackAdvance":8,"readValueFromPointer":simpleReadValueFromPointer,destructorFunction:function(ptr){_free(ptr);}});}var UTF16Decoder=typeof TextDecoder!="undefined"?new TextDecoder("utf-16le"):undefined;function UTF16ToString(ptr,maxBytesToRead){var endPtr=ptr;var idx=endPtr>>1;var maxIdx=idx+maxBytesToRead/2;while(!(idx>=maxIdx)&&HEAPU16[idx])++idx;endPtr=idx<<1;if(endPtr-ptr>32&&UTF16Decoder)return UTF16Decoder.decode(HEAPU8.subarray(ptr,endPtr));var str="";for(var i=0;!(i>=maxBytesToRead/2);++i){var codeUnit=HEAP16[ptr+i*2>>1];if(codeUnit==0)break;str+=String.fromCharCode(codeUnit);}return str}function stringToUTF16(str,outPtr,maxBytesToWrite){if(maxBytesToWrite===undefined){maxBytesToWrite=2147483647;}if(maxBytesToWrite<2)return 0;maxBytesToWrite-=2;var startPtr=outPtr;var numCharsToWrite=maxBytesToWrite<str.length*2?maxBytesToWrite/2:str.length;for(var i=0;i<numCharsToWrite;++i){var codeUnit=str.charCodeAt(i);HEAP16[outPtr>>1]=codeUnit;outPtr+=2;}HEAP16[outPtr>>1]=0;return outPtr-startPtr}function lengthBytesUTF16(str){return str.length*2}function UTF32ToString(ptr,maxBytesToRead){var i=0;var str="";while(!(i>=maxBytesToRead/4)){var utf32=HEAP32[ptr+i*4>>2];if(utf32==0)break;++i;if(utf32>=65536){var ch=utf32-65536;str+=String.fromCharCode(55296|ch>>10,56320|ch&1023);}else {str+=String.fromCharCode(utf32);}}return str}function stringToUTF32(str,outPtr,maxBytesToWrite){if(maxBytesToWrite===undefined){maxBytesToWrite=2147483647;}if(maxBytesToWrite<4)return 0;var startPtr=outPtr;var endPtr=startPtr+maxBytesToWrite-4;for(var i=0;i<str.length;++i){var codeUnit=str.charCodeAt(i);if(codeUnit>=55296&&codeUnit<=57343){var trailSurrogate=str.charCodeAt(++i);codeUnit=65536+((codeUnit&1023)<<10)|trailSurrogate&1023;}HEAP32[outPtr>>2]=codeUnit;outPtr+=4;if(outPtr+4>endPtr)break}HEAP32[outPtr>>2]=0;return outPtr-startPtr}function lengthBytesUTF32(str){var len=0;for(var i=0;i<str.length;++i){var codeUnit=str.charCodeAt(i);if(codeUnit>=55296&&codeUnit<=57343)++i;len+=4;}return len}function __embind_register_std_wstring(rawType,charSize,name){name=readLatin1String(name);var decodeString,encodeString,getHeap,lengthBytesUTF,shift;if(charSize===2){decodeString=UTF16ToString;encodeString=stringToUTF16;lengthBytesUTF=lengthBytesUTF16;getHeap=()=>HEAPU16;shift=1;}else if(charSize===4){decodeString=UTF32ToString;encodeString=stringToUTF32;lengthBytesUTF=lengthBytesUTF32;getHeap=()=>HEAPU32;shift=2;}registerType(rawType,{name:name,"fromWireType":function(value){var length=HEAPU32[value>>2];var HEAP=getHeap();var str;var decodeStartPtr=value+4;for(var i=0;i<=length;++i){var currentBytePtr=value+4+i*charSize;if(i==length||HEAP[currentBytePtr>>shift]==0){var maxReadBytes=currentBytePtr-decodeStartPtr;var stringSegment=decodeString(decodeStartPtr,maxReadBytes);if(str===undefined){str=stringSegment;}else {str+=String.fromCharCode(0);str+=stringSegment;}decodeStartPtr=currentBytePtr+charSize;}}_free(value);return str},"toWireType":function(destructors,value){if(!(typeof value=="string")){throwBindingError("Cannot pass non-string to C++ string type "+name);}var length=lengthBytesUTF(value);var ptr=_malloc(4+length+charSize);HEAPU32[ptr>>2]=length>>shift;encodeString(value,ptr+4,length+charSize);if(destructors!==null){destructors.push(_free,ptr);}return ptr},"argPackAdvance":8,"readValueFromPointer":simpleReadValueFromPointer,destructorFunction:function(ptr){_free(ptr);}});}function __embind_register_void(rawType,name){name=readLatin1String(name);registerType(rawType,{isVoid:true,name:name,"argPackAdvance":0,"fromWireType":function(){return undefined},"toWireType":function(destructors,o){return undefined}});}var nowIsMonotonic=true;function __emscripten_get_now_is_monotonic(){return nowIsMonotonic}function __emscripten_throw_longjmp(){throw Infinity}function _abort(){abort("");}function _emscripten_date_now(){return Date.now()}var _emscripten_get_now;_emscripten_get_now=()=>performance.now();function _emscripten_memcpy_big(dest,src,num){HEAPU8.copyWithin(dest,src,src+num);}function getHeapMax(){return 2147483648}function emscripten_realloc_buffer(size){var b=wasmMemory.buffer;try{wasmMemory.grow(size-b.byteLength+65535>>>16);updateMemoryViews();return 1}catch(e){}}function _emscripten_resize_heap(requestedSize){var oldSize=HEAPU8.length;requestedSize=requestedSize>>>0;var maxHeapSize=getHeapMax();if(requestedSize>maxHeapSize){return false}let alignUp=(x,multiple)=>x+(multiple-x%multiple)%multiple;for(var cutDown=1;cutDown<=4;cutDown*=2){var overGrownHeapSize=oldSize*(1+.2/cutDown);overGrownHeapSize=Math.min(overGrownHeapSize,requestedSize+100663296);var newSize=Math.min(maxHeapSize,alignUp(Math.max(requestedSize,overGrownHeapSize),65536));var replacement=emscripten_realloc_buffer(newSize);if(replacement){return true}}return false}var ENV={};function getExecutableName(){return thisProgram}function getEnvStrings(){if(!getEnvStrings.strings){var lang=(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8";var env={"USER":"web_user","LOGNAME":"web_user","PATH":"/","PWD":"/","HOME":"/home/web_user","LANG":lang,"_":getExecutableName()};for(var x in ENV){if(ENV[x]===undefined)delete env[x];else env[x]=ENV[x];}var strings=[];for(var x in env){strings.push(x+"="+env[x]);}getEnvStrings.strings=strings;}return getEnvStrings.strings}function writeAsciiToMemory(str,buffer,dontAddNull){for(var i=0;i<str.length;++i){HEAP8[buffer++>>0]=str.charCodeAt(i);}if(!dontAddNull)HEAP8[buffer>>0]=0;}function _environ_get(__environ,environ_buf){var bufSize=0;getEnvStrings().forEach(function(string,i){var ptr=environ_buf+bufSize;HEAPU32[__environ+i*4>>2]=ptr;writeAsciiToMemory(string,ptr);bufSize+=string.length+1;});return 0}function _environ_sizes_get(penviron_count,penviron_buf_size){var strings=getEnvStrings();HEAPU32[penviron_count>>2]=strings.length;var bufSize=0;strings.forEach(function(string){bufSize+=string.length+1;});HEAPU32[penviron_buf_size>>2]=bufSize;return 0}function _proc_exit(code){quit_(code,new ExitStatus(code));}function exitJS(status,implicit){_proc_exit(status);}var _exit=exitJS;function _fd_close(fd){return 52}function _fd_read(fd,iov,iovcnt,pnum){return 52}function _fd_seek(fd,offset_low,offset_high,whence,newOffset){return 70}var printCharBuffers=[null,[],[]];function printChar(stream,curr){var buffer=printCharBuffers[stream];if(curr===0||curr===10){(stream===1?out:err)(UTF8ArrayToString(buffer,0));buffer.length=0;}else {buffer.push(curr);}}function _fd_write(fd,iov,iovcnt,pnum){var num=0;for(var i=0;i<iovcnt;i++){var ptr=HEAPU32[iov>>2];var len=HEAPU32[iov+4>>2];iov+=8;for(var j=0;j<len;j++){printChar(fd,HEAPU8[ptr+j]);}num+=len;}HEAPU32[pnum>>2]=num;return 0}var wasmTableMirror=[];function getWasmTableEntry(funcPtr){var func=wasmTableMirror[funcPtr];if(!func){if(funcPtr>=wasmTableMirror.length)wasmTableMirror.length=funcPtr+1;wasmTableMirror[funcPtr]=func=wasmTable.get(funcPtr);}return func}embind_init_charCodes();BindingError=Module["BindingError"]=extendError(Error,"BindingError");Module["InternalError"]=extendError(Error,"InternalError");init_emval();var wasmImports={"a":___assert_fail,"Q":___syscall_chmod,"R":___syscall_faccessat,"h":___syscall_fcntl64,"N":___syscall_fstat64,"B":___syscall_fstatfs64,"J":___syscall_getcwd,"F":___syscall_getdents64,"S":___syscall_ioctl,"L":___syscall_lstat64,"G":___syscall_mkdirat,"K":___syscall_newfstatat,"k":___syscall_openat,"E":___syscall_readlinkat,"D":___syscall_renameat,"C":___syscall_rmdir,"M":___syscall_stat64,"A":___syscall_symlink,"z":___syscall_unlinkat,"s":__embind_register_bigint,"q":__embind_register_bool,"p":__embind_register_emval,"o":__embind_register_float,"c":__embind_register_integer,"b":__embind_register_memory_view,"i":__embind_register_std_string,"g":__embind_register_std_wstring,"w":__embind_register_void,"O":__emscripten_get_now_is_monotonic,"x":__emscripten_throw_longjmp,"j":_abort,"l":_emscripten_date_now,"e":_emscripten_get_now,"P":_emscripten_memcpy_big,"y":_emscripten_resize_heap,"H":_environ_get,"I":_environ_sizes_get,"f":_exit,"d":_fd_close,"n":_fd_read,"r":_fd_seek,"m":_fd_write,"v":invoke_iii,"t":invoke_iiii,"u":invoke_iiiii};createWasm();Module["_emscripten_bind_VoidPtr___destroy___0"]=function(){return (Module["_emscripten_bind_VoidPtr___destroy___0"]=Module["asm"]["V"]).apply(null,arguments)};Module["_emscripten_bind_ASS_Style_get_Name_0"]=function(){return (Module["_emscripten_bind_ASS_Style_get_Name_0"]=Module["asm"]["W"]).apply(null,arguments)};Module["_emscripten_bind_ASS_Style_set_Name_1"]=function(){return (Module["_emscripten_bind_ASS_Style_set_Name_1"]=Module["asm"]["X"]).apply(null,arguments)};Module["_emscripten_bind_ASS_Style_get_FontName_0"]=function(){return (Module["_emscripten_bind_ASS_Style_get_FontName_0"]=Module["asm"]["Y"]).apply(null,arguments)};Module["_emscripten_bind_ASS_Style_set_FontName_1"]=function(){return (Module["_emscripten_bind_ASS_Style_set_FontName_1"]=Module["asm"]["Z"]).apply(null,arguments)};Module["_emscripten_bind_ASS_Style_get_FontSize_0"]=function(){return (Module["_emscripten_bind_ASS_Style_get_FontSize_0"]=Module["asm"]["_"]).apply(null,arguments)};Module["_emscripten_bind_ASS_Style_set_FontSize_1"]=function(){return (Module["_emscripten_bind_ASS_Style_set_FontSize_1"]=Module["asm"]["$"]).apply(null,arguments)};Module["_emscripten_bind_ASS_Style_get_PrimaryColour_0"]=function(){return (Module["_emscripten_bind_ASS_Style_get_PrimaryColour_0"]=Module["asm"]["aa"]).apply(null,arguments)};Module["_emscripten_bind_ASS_Style_set_PrimaryColour_1"]=function(){return (Module["_emscripten_bind_ASS_Style_set_PrimaryColour_1"]=Module["asm"]["ba"]).apply(null,arguments)};Module["_emscripten_bind_ASS_Style_get_SecondaryColour_0"]=function(){return (Module["_emscripten_bind_ASS_Style_get_SecondaryColour_0"]=Module["asm"]["ca"]).apply(null,arguments)};Module["_emscripten_bind_ASS_Style_set_SecondaryColour_1"]=function(){return (Module["_emscripten_bind_ASS_Style_set_SecondaryColour_1"]=Module["asm"]["da"]).apply(null,arguments)};Module["_emscripten_bind_ASS_Style_get_OutlineColour_0"]=function(){return (Module["_emscripten_bind_ASS_Style_get_OutlineColour_0"]=Module["asm"]["ea"]).apply(null,arguments)};Module["_emscripten_bind_ASS_Style_set_OutlineColour_1"]=function(){return (Module["_emscripten_bind_ASS_Style_set_OutlineColour_1"]=Module["asm"]["fa"]).apply(null,arguments)};Module["_emscripten_bind_ASS_Style_get_BackColour_0"]=function(){return (Module["_emscripten_bind_ASS_Style_get_BackColour_0"]=Module["asm"]["ga"]).apply(null,arguments)};Module["_emscripten_bind_ASS_Style_set_BackColour_1"]=function(){return (Module["_emscripten_bind_ASS_Style_set_BackColour_1"]=Module["asm"]["ha"]).apply(null,arguments)};Module["_emscripten_bind_ASS_Style_get_Bold_0"]=function(){return (Module["_emscripten_bind_ASS_Style_get_Bold_0"]=Module["asm"]["ia"]).apply(null,arguments)};Module["_emscripten_bind_ASS_Style_set_Bold_1"]=function(){return (Module["_emscripten_bind_ASS_Style_set_Bold_1"]=Module["asm"]["ja"]).apply(null,arguments)};Module["_emscripten_bind_ASS_Style_get_Italic_0"]=function(){return (Module["_emscripten_bind_ASS_Style_get_Italic_0"]=Module["asm"]["ka"]).apply(null,arguments)};Module["_emscripten_bind_ASS_Style_set_Italic_1"]=function(){return (Module["_emscripten_bind_ASS_Style_set_Italic_1"]=Module["asm"]["la"]).apply(null,arguments)};Module["_emscripten_bind_ASS_Style_get_Underline_0"]=function(){return (Module["_emscripten_bind_ASS_Style_get_Underline_0"]=Module["asm"]["ma"]).apply(null,arguments)};Module["_emscripten_bind_ASS_Style_set_Underline_1"]=function(){return (Module["_emscripten_bind_ASS_Style_set_Underline_1"]=Module["asm"]["na"]).apply(null,arguments)};Module["_emscripten_bind_ASS_Style_get_StrikeOut_0"]=function(){return (Module["_emscripten_bind_ASS_Style_get_StrikeOut_0"]=Module["asm"]["oa"]).apply(null,arguments)};Module["_emscripten_bind_ASS_Style_set_StrikeOut_1"]=function(){return (Module["_emscripten_bind_ASS_Style_set_StrikeOut_1"]=Module["asm"]["pa"]).apply(null,arguments)};Module["_emscripten_bind_ASS_Style_get_ScaleX_0"]=function(){return (Module["_emscripten_bind_ASS_Style_get_ScaleX_0"]=Module["asm"]["qa"]).apply(null,arguments)};Module["_emscripten_bind_ASS_Style_set_ScaleX_1"]=function(){return (Module["_emscripten_bind_ASS_Style_set_ScaleX_1"]=Module["asm"]["ra"]).apply(null,arguments)};Module["_emscripten_bind_ASS_Style_get_ScaleY_0"]=function(){return (Module["_emscripten_bind_ASS_Style_get_ScaleY_0"]=Module["asm"]["sa"]).apply(null,arguments)};Module["_emscripten_bind_ASS_Style_set_ScaleY_1"]=function(){return (Module["_emscripten_bind_ASS_Style_set_ScaleY_1"]=Module["asm"]["ta"]).apply(null,arguments)};Module["_emscripten_bind_ASS_Style_get_Spacing_0"]=function(){return (Module["_emscripten_bind_ASS_Style_get_Spacing_0"]=Module["asm"]["ua"]).apply(null,arguments)};Module["_emscripten_bind_ASS_Style_set_Spacing_1"]=function(){return (Module["_emscripten_bind_ASS_Style_set_Spacing_1"]=Module["asm"]["va"]).apply(null,arguments)};Module["_emscripten_bind_ASS_Style_get_Angle_0"]=function(){return (Module["_emscripten_bind_ASS_Style_get_Angle_0"]=Module["asm"]["wa"]).apply(null,arguments)};Module["_emscripten_bind_ASS_Style_set_Angle_1"]=function(){return (Module["_emscripten_bind_ASS_Style_set_Angle_1"]=Module["asm"]["xa"]).apply(null,arguments)};Module["_emscripten_bind_ASS_Style_get_BorderStyle_0"]=function(){return (Module["_emscripten_bind_ASS_Style_get_BorderStyle_0"]=Module["asm"]["ya"]).apply(null,arguments)};Module["_emscripten_bind_ASS_Style_set_BorderStyle_1"]=function(){return (Module["_emscripten_bind_ASS_Style_set_BorderStyle_1"]=Module["asm"]["za"]).apply(null,arguments)};Module["_emscripten_bind_ASS_Style_get_Outline_0"]=function(){return (Module["_emscripten_bind_ASS_Style_get_Outline_0"]=Module["asm"]["Aa"]).apply(null,arguments)};Module["_emscripten_bind_ASS_Style_set_Outline_1"]=function(){return (Module["_emscripten_bind_ASS_Style_set_Outline_1"]=Module["asm"]["Ba"]).apply(null,arguments)};Module["_emscripten_bind_ASS_Style_get_Shadow_0"]=function(){return (Module["_emscripten_bind_ASS_Style_get_Shadow_0"]=Module["asm"]["Ca"]).apply(null,arguments)};Module["_emscripten_bind_ASS_Style_set_Shadow_1"]=function(){return (Module["_emscripten_bind_ASS_Style_set_Shadow_1"]=Module["asm"]["Da"]).apply(null,arguments)};Module["_emscripten_bind_ASS_Style_get_Alignment_0"]=function(){return (Module["_emscripten_bind_ASS_Style_get_Alignment_0"]=Module["asm"]["Ea"]).apply(null,arguments)};Module["_emscripten_bind_ASS_Style_set_Alignment_1"]=function(){return (Module["_emscripten_bind_ASS_Style_set_Alignment_1"]=Module["asm"]["Fa"]).apply(null,arguments)};Module["_emscripten_bind_ASS_Style_get_MarginL_0"]=function(){return (Module["_emscripten_bind_ASS_Style_get_MarginL_0"]=Module["asm"]["Ga"]).apply(null,arguments)};Module["_emscripten_bind_ASS_Style_set_MarginL_1"]=function(){return (Module["_emscripten_bind_ASS_Style_set_MarginL_1"]=Module["asm"]["Ha"]).apply(null,arguments)};Module["_emscripten_bind_ASS_Style_get_MarginR_0"]=function(){return (Module["_emscripten_bind_ASS_Style_get_MarginR_0"]=Module["asm"]["Ia"]).apply(null,arguments)};Module["_emscripten_bind_ASS_Style_set_MarginR_1"]=function(){return (Module["_emscripten_bind_ASS_Style_set_MarginR_1"]=Module["asm"]["Ja"]).apply(null,arguments)};Module["_emscripten_bind_ASS_Style_get_MarginV_0"]=function(){return (Module["_emscripten_bind_ASS_Style_get_MarginV_0"]=Module["asm"]["Ka"]).apply(null,arguments)};Module["_emscripten_bind_ASS_Style_set_MarginV_1"]=function(){return (Module["_emscripten_bind_ASS_Style_set_MarginV_1"]=Module["asm"]["La"]).apply(null,arguments)};Module["_emscripten_bind_ASS_Style_get_Encoding_0"]=function(){return (Module["_emscripten_bind_ASS_Style_get_Encoding_0"]=Module["asm"]["Ma"]).apply(null,arguments)};Module["_emscripten_bind_ASS_Style_set_Encoding_1"]=function(){return (Module["_emscripten_bind_ASS_Style_set_Encoding_1"]=Module["asm"]["Na"]).apply(null,arguments)};Module["_emscripten_bind_ASS_Style_get_treat_fontname_as_pattern_0"]=function(){return (Module["_emscripten_bind_ASS_Style_get_treat_fontname_as_pattern_0"]=Module["asm"]["Oa"]).apply(null,arguments)};Module["_emscripten_bind_ASS_Style_set_treat_fontname_as_pattern_1"]=function(){return (Module["_emscripten_bind_ASS_Style_set_treat_fontname_as_pattern_1"]=Module["asm"]["Pa"]).apply(null,arguments)};Module["_emscripten_bind_ASS_Style_get_Blur_0"]=function(){return (Module["_emscripten_bind_ASS_Style_get_Blur_0"]=Module["asm"]["Qa"]).apply(null,arguments)};Module["_emscripten_bind_ASS_Style_set_Blur_1"]=function(){return (Module["_emscripten_bind_ASS_Style_set_Blur_1"]=Module["asm"]["Ra"]).apply(null,arguments)};Module["_emscripten_bind_ASS_Style_get_Justify_0"]=function(){return (Module["_emscripten_bind_ASS_Style_get_Justify_0"]=Module["asm"]["Sa"]).apply(null,arguments)};Module["_emscripten_bind_ASS_Style_set_Justify_1"]=function(){return (Module["_emscripten_bind_ASS_Style_set_Justify_1"]=Module["asm"]["Ta"]).apply(null,arguments)};Module["_emscripten_bind_ASS_Event_get_Start_0"]=function(){return (Module["_emscripten_bind_ASS_Event_get_Start_0"]=Module["asm"]["Ua"]).apply(null,arguments)};Module["_emscripten_bind_ASS_Event_set_Start_1"]=function(){return (Module["_emscripten_bind_ASS_Event_set_Start_1"]=Module["asm"]["Va"]).apply(null,arguments)};Module["_emscripten_bind_ASS_Event_get_Duration_0"]=function(){return (Module["_emscripten_bind_ASS_Event_get_Duration_0"]=Module["asm"]["Wa"]).apply(null,arguments)};Module["_emscripten_bind_ASS_Event_set_Duration_1"]=function(){return (Module["_emscripten_bind_ASS_Event_set_Duration_1"]=Module["asm"]["Xa"]).apply(null,arguments)};Module["_emscripten_bind_ASS_Event_get_ReadOrder_0"]=function(){return (Module["_emscripten_bind_ASS_Event_get_ReadOrder_0"]=Module["asm"]["Ya"]).apply(null,arguments)};Module["_emscripten_bind_ASS_Event_set_ReadOrder_1"]=function(){return (Module["_emscripten_bind_ASS_Event_set_ReadOrder_1"]=Module["asm"]["Za"]).apply(null,arguments)};Module["_emscripten_bind_ASS_Event_get_Layer_0"]=function(){return (Module["_emscripten_bind_ASS_Event_get_Layer_0"]=Module["asm"]["_a"]).apply(null,arguments)};Module["_emscripten_bind_ASS_Event_set_Layer_1"]=function(){return (Module["_emscripten_bind_ASS_Event_set_Layer_1"]=Module["asm"]["$a"]).apply(null,arguments)};Module["_emscripten_bind_ASS_Event_get_Style_0"]=function(){return (Module["_emscripten_bind_ASS_Event_get_Style_0"]=Module["asm"]["ab"]).apply(null,arguments)};Module["_emscripten_bind_ASS_Event_set_Style_1"]=function(){return (Module["_emscripten_bind_ASS_Event_set_Style_1"]=Module["asm"]["bb"]).apply(null,arguments)};Module["_emscripten_bind_ASS_Event_get_Name_0"]=function(){return (Module["_emscripten_bind_ASS_Event_get_Name_0"]=Module["asm"]["cb"]).apply(null,arguments)};Module["_emscripten_bind_ASS_Event_set_Name_1"]=function(){return (Module["_emscripten_bind_ASS_Event_set_Name_1"]=Module["asm"]["db"]).apply(null,arguments)};Module["_emscripten_bind_ASS_Event_get_MarginL_0"]=function(){return (Module["_emscripten_bind_ASS_Event_get_MarginL_0"]=Module["asm"]["eb"]).apply(null,arguments)};Module["_emscripten_bind_ASS_Event_set_MarginL_1"]=function(){return (Module["_emscripten_bind_ASS_Event_set_MarginL_1"]=Module["asm"]["fb"]).apply(null,arguments)};Module["_emscripten_bind_ASS_Event_get_MarginR_0"]=function(){return (Module["_emscripten_bind_ASS_Event_get_MarginR_0"]=Module["asm"]["gb"]).apply(null,arguments)};Module["_emscripten_bind_ASS_Event_set_MarginR_1"]=function(){return (Module["_emscripten_bind_ASS_Event_set_MarginR_1"]=Module["asm"]["hb"]).apply(null,arguments)};Module["_emscripten_bind_ASS_Event_get_MarginV_0"]=function(){return (Module["_emscripten_bind_ASS_Event_get_MarginV_0"]=Module["asm"]["ib"]).apply(null,arguments)};Module["_emscripten_bind_ASS_Event_set_MarginV_1"]=function(){return (Module["_emscripten_bind_ASS_Event_set_MarginV_1"]=Module["asm"]["jb"]).apply(null,arguments)};Module["_emscripten_bind_ASS_Event_get_Effect_0"]=function(){return (Module["_emscripten_bind_ASS_Event_get_Effect_0"]=Module["asm"]["kb"]).apply(null,arguments)};Module["_emscripten_bind_ASS_Event_set_Effect_1"]=function(){return (Module["_emscripten_bind_ASS_Event_set_Effect_1"]=Module["asm"]["lb"]).apply(null,arguments)};Module["_emscripten_bind_ASS_Event_get_Text_0"]=function(){return (Module["_emscripten_bind_ASS_Event_get_Text_0"]=Module["asm"]["mb"]).apply(null,arguments)};Module["_emscripten_bind_ASS_Event_set_Text_1"]=function(){return (Module["_emscripten_bind_ASS_Event_set_Text_1"]=Module["asm"]["nb"]).apply(null,arguments)};Module["_emscripten_bind_RenderResult_get_changed_0"]=function(){return (Module["_emscripten_bind_RenderResult_get_changed_0"]=Module["asm"]["ob"]).apply(null,arguments)};Module["_emscripten_bind_RenderResult_set_changed_1"]=function(){return (Module["_emscripten_bind_RenderResult_set_changed_1"]=Module["asm"]["pb"]).apply(null,arguments)};Module["_emscripten_bind_RenderResult_get_time_0"]=function(){return (Module["_emscripten_bind_RenderResult_get_time_0"]=Module["asm"]["qb"]).apply(null,arguments)};Module["_emscripten_bind_RenderResult_set_time_1"]=function(){return (Module["_emscripten_bind_RenderResult_set_time_1"]=Module["asm"]["rb"]).apply(null,arguments)};Module["_emscripten_bind_RenderResult_get_x_0"]=function(){return (Module["_emscripten_bind_RenderResult_get_x_0"]=Module["asm"]["sb"]).apply(null,arguments)};Module["_emscripten_bind_RenderResult_set_x_1"]=function(){return (Module["_emscripten_bind_RenderResult_set_x_1"]=Module["asm"]["tb"]).apply(null,arguments)};Module["_emscripten_bind_RenderResult_get_y_0"]=function(){return (Module["_emscripten_bind_RenderResult_get_y_0"]=Module["asm"]["ub"]).apply(null,arguments)};Module["_emscripten_bind_RenderResult_set_y_1"]=function(){return (Module["_emscripten_bind_RenderResult_set_y_1"]=Module["asm"]["vb"]).apply(null,arguments)};Module["_emscripten_bind_RenderResult_get_w_0"]=function(){return (Module["_emscripten_bind_RenderResult_get_w_0"]=Module["asm"]["wb"]).apply(null,arguments)};Module["_emscripten_bind_RenderResult_set_w_1"]=function(){return (Module["_emscripten_bind_RenderResult_set_w_1"]=Module["asm"]["xb"]).apply(null,arguments)};Module["_emscripten_bind_RenderResult_get_h_0"]=function(){return (Module["_emscripten_bind_RenderResult_get_h_0"]=Module["asm"]["yb"]).apply(null,arguments)};Module["_emscripten_bind_RenderResult_set_h_1"]=function(){return (Module["_emscripten_bind_RenderResult_set_h_1"]=Module["asm"]["zb"]).apply(null,arguments)};Module["_emscripten_bind_RenderResult_get_image_0"]=function(){return (Module["_emscripten_bind_RenderResult_get_image_0"]=Module["asm"]["Ab"]).apply(null,arguments)};Module["_emscripten_bind_RenderResult_set_image_1"]=function(){return (Module["_emscripten_bind_RenderResult_set_image_1"]=Module["asm"]["Bb"]).apply(null,arguments)};Module["_emscripten_bind_RenderResult_get_next_0"]=function(){return (Module["_emscripten_bind_RenderResult_get_next_0"]=Module["asm"]["Cb"]).apply(null,arguments)};Module["_emscripten_bind_RenderResult_set_next_1"]=function(){return (Module["_emscripten_bind_RenderResult_set_next_1"]=Module["asm"]["Db"]).apply(null,arguments)};Module["_emscripten_bind_ASS_Track_get_n_styles_0"]=function(){return (Module["_emscripten_bind_ASS_Track_get_n_styles_0"]=Module["asm"]["Eb"]).apply(null,arguments)};Module["_emscripten_bind_ASS_Track_set_n_styles_1"]=function(){return (Module["_emscripten_bind_ASS_Track_set_n_styles_1"]=Module["asm"]["Fb"]).apply(null,arguments)};Module["_emscripten_bind_ASS_Track_get_max_styles_0"]=function(){return (Module["_emscripten_bind_ASS_Track_get_max_styles_0"]=Module["asm"]["Gb"]).apply(null,arguments)};Module["_emscripten_bind_ASS_Track_set_max_styles_1"]=function(){return (Module["_emscripten_bind_ASS_Track_set_max_styles_1"]=Module["asm"]["Hb"]).apply(null,arguments)};Module["_emscripten_bind_ASS_Track_get_n_events_0"]=function(){return (Module["_emscripten_bind_ASS_Track_get_n_events_0"]=Module["asm"]["Ib"]).apply(null,arguments)};Module["_emscripten_bind_ASS_Track_set_n_events_1"]=function(){return (Module["_emscripten_bind_ASS_Track_set_n_events_1"]=Module["asm"]["Jb"]).apply(null,arguments)};Module["_emscripten_bind_ASS_Track_get_max_events_0"]=function(){return (Module["_emscripten_bind_ASS_Track_get_max_events_0"]=Module["asm"]["Kb"]).apply(null,arguments)};Module["_emscripten_bind_ASS_Track_set_max_events_1"]=function(){return (Module["_emscripten_bind_ASS_Track_set_max_events_1"]=Module["asm"]["Lb"]).apply(null,arguments)};Module["_emscripten_bind_ASS_Track_get_styles_1"]=function(){return (Module["_emscripten_bind_ASS_Track_get_styles_1"]=Module["asm"]["Mb"]).apply(null,arguments)};Module["_emscripten_bind_ASS_Track_set_styles_2"]=function(){return (Module["_emscripten_bind_ASS_Track_set_styles_2"]=Module["asm"]["Nb"]).apply(null,arguments)};Module["_emscripten_bind_ASS_Track_get_events_1"]=function(){return (Module["_emscripten_bind_ASS_Track_get_events_1"]=Module["asm"]["Ob"]).apply(null,arguments)};Module["_emscripten_bind_ASS_Track_set_events_2"]=function(){return (Module["_emscripten_bind_ASS_Track_set_events_2"]=Module["asm"]["Pb"]).apply(null,arguments)};Module["_emscripten_bind_ASS_Track_get_style_format_0"]=function(){return (Module["_emscripten_bind_ASS_Track_get_style_format_0"]=Module["asm"]["Qb"]).apply(null,arguments)};Module["_emscripten_bind_ASS_Track_set_style_format_1"]=function(){return (Module["_emscripten_bind_ASS_Track_set_style_format_1"]=Module["asm"]["Rb"]).apply(null,arguments)};Module["_emscripten_bind_ASS_Track_get_event_format_0"]=function(){return (Module["_emscripten_bind_ASS_Track_get_event_format_0"]=Module["asm"]["Sb"]).apply(null,arguments)};Module["_emscripten_bind_ASS_Track_set_event_format_1"]=function(){return (Module["_emscripten_bind_ASS_Track_set_event_format_1"]=Module["asm"]["Tb"]).apply(null,arguments)};Module["_emscripten_bind_ASS_Track_get_PlayResX_0"]=function(){return (Module["_emscripten_bind_ASS_Track_get_PlayResX_0"]=Module["asm"]["Ub"]).apply(null,arguments)};Module["_emscripten_bind_ASS_Track_set_PlayResX_1"]=function(){return (Module["_emscripten_bind_ASS_Track_set_PlayResX_1"]=Module["asm"]["Vb"]).apply(null,arguments)};Module["_emscripten_bind_ASS_Track_get_PlayResY_0"]=function(){return (Module["_emscripten_bind_ASS_Track_get_PlayResY_0"]=Module["asm"]["Wb"]).apply(null,arguments)};Module["_emscripten_bind_ASS_Track_set_PlayResY_1"]=function(){return (Module["_emscripten_bind_ASS_Track_set_PlayResY_1"]=Module["asm"]["Xb"]).apply(null,arguments)};Module["_emscripten_bind_ASS_Track_get_Timer_0"]=function(){return (Module["_emscripten_bind_ASS_Track_get_Timer_0"]=Module["asm"]["Yb"]).apply(null,arguments)};Module["_emscripten_bind_ASS_Track_set_Timer_1"]=function(){return (Module["_emscripten_bind_ASS_Track_set_Timer_1"]=Module["asm"]["Zb"]).apply(null,arguments)};Module["_emscripten_bind_ASS_Track_get_WrapStyle_0"]=function(){return (Module["_emscripten_bind_ASS_Track_get_WrapStyle_0"]=Module["asm"]["_b"]).apply(null,arguments)};Module["_emscripten_bind_ASS_Track_set_WrapStyle_1"]=function(){return (Module["_emscripten_bind_ASS_Track_set_WrapStyle_1"]=Module["asm"]["$b"]).apply(null,arguments)};Module["_emscripten_bind_ASS_Track_get_ScaledBorderAndShadow_0"]=function(){return (Module["_emscripten_bind_ASS_Track_get_ScaledBorderAndShadow_0"]=Module["asm"]["ac"]).apply(null,arguments)};Module["_emscripten_bind_ASS_Track_set_ScaledBorderAndShadow_1"]=function(){return (Module["_emscripten_bind_ASS_Track_set_ScaledBorderAndShadow_1"]=Module["asm"]["bc"]).apply(null,arguments)};Module["_emscripten_bind_ASS_Track_get_Kerning_0"]=function(){return (Module["_emscripten_bind_ASS_Track_get_Kerning_0"]=Module["asm"]["cc"]).apply(null,arguments)};Module["_emscripten_bind_ASS_Track_set_Kerning_1"]=function(){return (Module["_emscripten_bind_ASS_Track_set_Kerning_1"]=Module["asm"]["dc"]).apply(null,arguments)};Module["_emscripten_bind_ASS_Track_get_Language_0"]=function(){return (Module["_emscripten_bind_ASS_Track_get_Language_0"]=Module["asm"]["ec"]).apply(null,arguments)};Module["_emscripten_bind_ASS_Track_set_Language_1"]=function(){return (Module["_emscripten_bind_ASS_Track_set_Language_1"]=Module["asm"]["fc"]).apply(null,arguments)};Module["_emscripten_bind_ASS_Track_get_default_style_0"]=function(){return (Module["_emscripten_bind_ASS_Track_get_default_style_0"]=Module["asm"]["gc"]).apply(null,arguments)};Module["_emscripten_bind_ASS_Track_set_default_style_1"]=function(){return (Module["_emscripten_bind_ASS_Track_set_default_style_1"]=Module["asm"]["hc"]).apply(null,arguments)};Module["_emscripten_bind_ASS_Track_get_name_0"]=function(){return (Module["_emscripten_bind_ASS_Track_get_name_0"]=Module["asm"]["ic"]).apply(null,arguments)};Module["_emscripten_bind_ASS_Track_set_name_1"]=function(){return (Module["_emscripten_bind_ASS_Track_set_name_1"]=Module["asm"]["jc"]).apply(null,arguments)};Module["_emscripten_bind_JASSUB_JASSUB_0"]=function(){return (Module["_emscripten_bind_JASSUB_JASSUB_0"]=Module["asm"]["kc"]).apply(null,arguments)};Module["_emscripten_bind_JASSUB_setLogLevel_1"]=function(){return (Module["_emscripten_bind_JASSUB_setLogLevel_1"]=Module["asm"]["lc"]).apply(null,arguments)};Module["_emscripten_bind_JASSUB_setDropAnimations_1"]=function(){return (Module["_emscripten_bind_JASSUB_setDropAnimations_1"]=Module["asm"]["mc"]).apply(null,arguments)};Module["_emscripten_bind_JASSUB_initLibrary_3"]=function(){return (Module["_emscripten_bind_JASSUB_initLibrary_3"]=Module["asm"]["nc"]).apply(null,arguments)};var _free=Module["_free"]=function(){return (_free=Module["_free"]=Module["asm"]["oc"]).apply(null,arguments)};Module["_emscripten_bind_JASSUB_createTrackMem_2"]=function(){return (Module["_emscripten_bind_JASSUB_createTrackMem_2"]=Module["asm"]["pc"]).apply(null,arguments)};Module["_emscripten_bind_JASSUB_removeTrack_0"]=function(){return (Module["_emscripten_bind_JASSUB_removeTrack_0"]=Module["asm"]["qc"]).apply(null,arguments)};Module["_emscripten_bind_JASSUB_resizeCanvas_2"]=function(){return (Module["_emscripten_bind_JASSUB_resizeCanvas_2"]=Module["asm"]["rc"]).apply(null,arguments)};Module["_emscripten_bind_JASSUB_renderImage_2"]=function(){return (Module["_emscripten_bind_JASSUB_renderImage_2"]=Module["asm"]["sc"]).apply(null,arguments)};Module["_emscripten_bind_JASSUB_quitLibrary_0"]=function(){return (Module["_emscripten_bind_JASSUB_quitLibrary_0"]=Module["asm"]["tc"]).apply(null,arguments)};Module["_emscripten_bind_JASSUB_reloadLibrary_0"]=function(){return (Module["_emscripten_bind_JASSUB_reloadLibrary_0"]=Module["asm"]["uc"]).apply(null,arguments)};Module["_emscripten_bind_JASSUB_addFont_3"]=function(){return (Module["_emscripten_bind_JASSUB_addFont_3"]=Module["asm"]["vc"]).apply(null,arguments)};Module["_emscripten_bind_JASSUB_reloadFonts_0"]=function(){return (Module["_emscripten_bind_JASSUB_reloadFonts_0"]=Module["asm"]["wc"]).apply(null,arguments)};Module["_emscripten_bind_JASSUB_setMargin_4"]=function(){return (Module["_emscripten_bind_JASSUB_setMargin_4"]=Module["asm"]["xc"]).apply(null,arguments)};Module["_emscripten_bind_JASSUB_getEventCount_0"]=function(){return (Module["_emscripten_bind_JASSUB_getEventCount_0"]=Module["asm"]["yc"]).apply(null,arguments)};Module["_emscripten_bind_JASSUB_allocEvent_0"]=function(){return (Module["_emscripten_bind_JASSUB_allocEvent_0"]=Module["asm"]["zc"]).apply(null,arguments)};Module["_emscripten_bind_JASSUB_allocStyle_0"]=function(){return (Module["_emscripten_bind_JASSUB_allocStyle_0"]=Module["asm"]["Ac"]).apply(null,arguments)};Module["_emscripten_bind_JASSUB_removeEvent_1"]=function(){return (Module["_emscripten_bind_JASSUB_removeEvent_1"]=Module["asm"]["Bc"]).apply(null,arguments)};Module["_emscripten_bind_JASSUB_getStyleCount_0"]=function(){return (Module["_emscripten_bind_JASSUB_getStyleCount_0"]=Module["asm"]["Cc"]).apply(null,arguments)};Module["_emscripten_bind_JASSUB_getStyleByName_1"]=function(){return (Module["_emscripten_bind_JASSUB_getStyleByName_1"]=Module["asm"]["Dc"]).apply(null,arguments)};Module["_emscripten_bind_JASSUB_removeStyle_1"]=function(){return (Module["_emscripten_bind_JASSUB_removeStyle_1"]=Module["asm"]["Ec"]).apply(null,arguments)};Module["_emscripten_bind_JASSUB_removeAllEvents_0"]=function(){return (Module["_emscripten_bind_JASSUB_removeAllEvents_0"]=Module["asm"]["Fc"]).apply(null,arguments)};Module["_emscripten_bind_JASSUB_setMemoryLimits_2"]=function(){return (Module["_emscripten_bind_JASSUB_setMemoryLimits_2"]=Module["asm"]["Gc"]).apply(null,arguments)};Module["_emscripten_bind_JASSUB_renderBlend_2"]=function(){return (Module["_emscripten_bind_JASSUB_renderBlend_2"]=Module["asm"]["Hc"]).apply(null,arguments)};Module["_emscripten_bind_JASSUB_get_track_0"]=function(){return (Module["_emscripten_bind_JASSUB_get_track_0"]=Module["asm"]["Ic"]).apply(null,arguments)};Module["_emscripten_bind_JASSUB_set_track_1"]=function(){return (Module["_emscripten_bind_JASSUB_set_track_1"]=Module["asm"]["Jc"]).apply(null,arguments)};Module["_emscripten_bind_JASSUB___destroy___0"]=function(){return (Module["_emscripten_bind_JASSUB___destroy___0"]=Module["asm"]["Kc"]).apply(null,arguments)};var _malloc=Module["_malloc"]=function(){return (_malloc=Module["_malloc"]=Module["asm"]["Mc"]).apply(null,arguments)};Module["___getTypeName"]=function(){return (Module["___getTypeName"]=Module["asm"]["Nc"]).apply(null,arguments)};Module["__embind_initialize_bindings"]=function(){return (Module["__embind_initialize_bindings"]=Module["asm"]["Oc"]).apply(null,arguments)};var _setThrew=function(){return (_setThrew=Module["asm"]["Pc"]).apply(null,arguments)};var stackSave=function(){return (stackSave=Module["asm"]["Qc"]).apply(null,arguments)};var stackRestore=function(){return (stackRestore=Module["asm"]["Rc"]).apply(null,arguments)};Module["___start_em_js"]=668364;Module["___stop_em_js"]=668462;function invoke_iii(index,a1,a2){var sp=stackSave();try{return getWasmTableEntry(index)(a1,a2)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iiiii(index,a1,a2,a3,a4){var sp=stackSave();try{return getWasmTableEntry(index)(a1,a2,a3,a4)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}function invoke_iiii(index,a1,a2,a3){var sp=stackSave();try{return getWasmTableEntry(index)(a1,a2,a3)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0);}}var calledRun;dependenciesFulfilled=function runCaller(){if(!calledRun)run();if(!calledRun)dependenciesFulfilled=runCaller;};function run(){if(runDependencies>0){return}preRun();if(runDependencies>0){return}function doRun(){if(calledRun)return;calledRun=true;Module["calledRun"]=true;if(ABORT)return;initRuntime();readyPromiseResolve(Module);if(Module["onRuntimeInitialized"])Module["onRuntimeInitialized"]();postRun();}{doRun();}}run();


  return Module.ready
}
);
})();
module.exports = Module;
}(jassubWorker));

var WASMModule = jassubWorker.exports;

// @ts-ignore

/* global Module, HEAPU8, readAsync, read_, calledRun, addRunDependency, removeRunDependency, buffer */

const encoder = new TextEncoder();
const textByteLength = (input) => encoder.encode(input).buffer.byteLength;

self.out = function (text) {
  if (text === 'libass: No usable fontconfig configuration file found, using fallback.') {
    console.debug(text);
  } else {
    console.log(text);
  }
};
self.err = function (text) {
  if (text === 'Fontconfig error: Cannot load default config file: No such file: (null)') {
    console.debug(text);
  } else {
    console.error(text);
  }
};

self.delay = 0; // approximate delay (time of render + postMessage + drawImage), for example 1/60 or 0
self.lastCurrentTime = 0;
self.rate = 1;
self.rafId = null;
self.nextIsRaf = false;
self.lastCurrentTimeReceivedAt = Date.now();
self.targetFps = 24;
self.libassMemoryLimit = 0; // in MiB
self.dropAllAnimations = false;

self.width = 0;
self.height = 0;

self.fontMap_ = {};
self.fontId = 0;

let asyncRender = false;

self.addFont = (data) => {
  self.asyncWrite(data.font);
};

self.findAvailableFonts = (font) => {
  font = font.trim().toLowerCase();

  if (font.startsWith('@')) {
    font = font.substring(1);
  }

  if (self.fontMap_[font]) return

  self.fontMap_[font] = true;

  if (!self.availableFonts[font]) {
    if (self.useLocalFonts) {
      postMessage({ target: 'getLocalFont', font });
    }
    return
  }

  self.asyncWrite(self.availableFonts[font]);
};

self.asyncWrite = (font) => {
  if (ArrayBuffer.isView(font)) {
    self.allocFont(font);
  } else {
    readAsync(font, fontData => {
      self.allocFont(new Uint8Array(fontData));
    }, console.error);
  }
};

// TODO: this should re-draw last frame!
self.allocFont = (uint8) => {
  const ptr = Module._malloc(uint8.byteLength);
  HEAPU8.set(uint8, ptr);
  self.jassubObj.addFont('font-' + (self.fontId++), ptr, uint8.byteLength);
  self.jassubObj.reloadFonts();
};

self.processAvailableFonts = (content) => {
  if (!self.availableFonts) return

  const sections = parseAss(content);

  for (let i = 0; i < sections.length; i++) {
    for (let j = 0; j < sections[i].body.length; j++) {
      if (sections[i].body[j].key === 'Style') {
        self.findAvailableFonts(sections[i].body[j].value.Fontname);
      }
    }
  }

  const regex = /\\fn([^\\}]*?)[\\}]/g;
  let matches;
  while ((matches = regex.exec(self.subContent)) !== null) {
    self.findAvailableFonts(matches[1]);
  }
};
/**
 * Set the subtitle track.
 * @param {!string} content the content of the subtitle file.
 */
self.setTrack = (data) => {
  // Make sure that the fonts are loaded
  self.processAvailableFonts(data.content);

  self.subContent = data.content;

  // Tell libass to render the new track
  self.jassubObj.createTrackMem(self.subContent, textByteLength(self.subContent));
  self.renderLoop();
};

/**
 * Remove subtitle track.
 */
self.freeTrack = () => {
  self.jassubObj.removeTrack();
  self.renderLoop();
};

/**
 * Set the subtitle track.
 * @param {!string} url the URL of the subtitle file.
 */
self.setTrackByUrl = (data) => {
  const content = read_(data.url);

  self.setTrack({ content });
};

self.resize = (width, height) => {
  self.width = width;
  self.height = height;
  self.jassubObj.resizeCanvas(width, height);
};

self.getCurrentTime = () => {
  const diff = (Date.now() - self.lastCurrentTimeReceivedAt) / 1000;
  if (self._isPaused) {
    return self.lastCurrentTime
  } else {
    if (diff > 5) {
      console.error('Didn\'t received currentTime > 5 seconds. Assuming video was paused.');
      self.setIsPaused(true);
    }
    return self.lastCurrentTime + (diff * self.rate)
  }
};
self.setCurrentTime = (currentTime) => {
  self.lastCurrentTime = currentTime;
  self.lastCurrentTimeReceivedAt = Date.now();
  if (!self.rafId) {
    if (self.nextIsRaf) {
      self.rafId = self.requestAnimationFrame(self.renderLoop);
    } else {
      self.renderLoop();

      // Give onmessage chance to receive all queued messages
      setTimeout(() => {
        self.nextIsRaf = false;
      }, 20);
    }
  }
};

self._isPaused = true;
self.setIsPaused = (isPaused) => {
  if (isPaused !== self._isPaused) {
    self._isPaused = isPaused;
    if (isPaused) {
      if (self.rafId) {
        clearTimeout(self.rafId);
        self.rafId = null;
      }
    } else {
      self.lastCurrentTimeReceivedAt = Date.now();
      self.rafId = self.requestAnimationFrame(self.renderLoop);
    }
  }
};

self.renderImageData = (time, force) => {
  const renderStartTime = Date.now();
  let result = null;
  if (self.blendMode === 'wasm') {
    result = self.jassubObj.renderBlend(time, force);
    result.times = {
      renderTime: Date.now() - renderStartTime - result.time | 0,
      blendTime: result.time | 0
    };
  } else {
    result = self.jassubObj.renderImage(time, force);
    result.times = {
      renderTime: Date.now() - renderStartTime - result.time | 0,
      cppDecodeTime: result.time | 0
    };
  }
  return result
};

self.processRender = (result) => {
  const images = [];
  let buffers = [];
  const decodeStartTime = Date.now();
  // use callback to not rely on async/await
  if (asyncRender) {
    const promises = [];
    for (let image = result; image.ptr !== 0; image = image.next) {
      if (image.image) {
        images.push({ w: image.w, h: image.h, x: image.x, y: image.y });
        promises.push(createImageBitmap(new ImageData(new Uint8ClampedArray(HEAPU8).subarray(image.image, image.image + image.w * image.h * 4), image.w, image.h)));
      }
    }
    Promise.all(promises).then(bitmaps => {
      for (let i = 0; i < images.length; i++) {
        images[i].image = bitmaps[i];
      }
      buffers = bitmaps;
      self.paintImages({ images, buffers, times: result.times, decodeStartTime });
    });
  } else {
    for (let image = result; image.ptr !== 0; image = image.next) {
      if (image.image) {
        const img = { w: image.w, h: image.h, x: image.x, y: image.y, image: image.image };
        if (!self.offscreenCanvasCtx) {
          const buf = buffer.slice(image.image, image.image + image.w * image.h * 4);
          buffers.push(buf);
          img.image = buf;
        }
        images.push(img);
      }
    }
    self.paintImages({ images, buffers, times: result.times, decodeStartTime });
  }
};

self.render = (time, force) => {
  const result = self.renderImageData(time, force);
  if (result.changed !== 0 || force) {
    self.processRender(result);
  } else {
    postMessage({
      target: 'unbusy'
    });
  }
};

self.demand = data => {
  self.lastCurrentTime = data.time;
  self.render(data.time);
};

self.renderLoop = (force) => {
  self.rafId = 0;
  self.renderPending = false;
  self.render(self.getCurrentTime() + self.delay, force);
  if (!self._isPaused) {
    self.rafId = self.requestAnimationFrame(self.renderLoop);
  }
};

self.paintImages = (data) => {
  data.times.decodeTime = Date.now() - data.decodeStartTime;
  if (self.offscreenCanvasCtx) {
    const drawStartTime = Date.now();
    // force updates
    self.offscreenCanvas.width = self.width;
    if (self.offscreenCanvas.height !== self.height) {
      self.offscreenCanvas.height = self.height;
    } else {
      self.offscreenCanvasCtx.clearRect(0, 0, self.width, self.height);
    }
    for (const image of data.images) {
      if (image.image) {
        if (asyncRender) {
          self.offscreenCanvasCtx.drawImage(image.image, image.x, image.y);
          image.image.close();
        } else {
          self.bufferCanvas.width = image.w;
          self.bufferCanvas.height = image.h;
          self.bufferCtx.putImageData(new ImageData(new Uint8ClampedArray(HEAPU8).subarray(image.image, image.image + image.w * image.h * 4), image.w, image.h), 0, 0);
          self.offscreenCanvasCtx.drawImage(self.bufferCanvas, image.x, image.y);
        }
      }
    }
    if (self.debug) {
      data.times.drawTime = Date.now() - drawStartTime;
      let total = 0;
      for (const key in data.times) total += data.times[key];
      console.log('Bitmaps: ' + data.images.length + ' Total: ' + Math.round(total) + 'ms', data.times);
    }
    postMessage({
      target: 'unbusy'
    });
  } else {
    postMessage({
      target: 'render',
      async: asyncRender,
      images: data.images,
      times: data.times,
      width: self.width,
      height: self.height
    }, data.buffers);
  }
};

/**
 * Parse the content of an .ass file.
 * @param {!string} content the content of the file
 */
function parseAss (content) {
  let m, format, lastPart, parts, key, value, tmp, i, j, body;
  const sections = [];
  const lines = content.split(/[\r\n]+/g);
  for (i = 0; i < lines.length; i++) {
    m = lines[i].match(/^\[(.*)\]$/);
    if (m) {
      format = null;
      sections.push({
        name: m[1],
        body: []
      });
    } else {
      if (/^\s*$/.test(lines[i])) continue
      if (sections.length === 0) continue
      body = sections[sections.length - 1].body;
      if (lines[i][0] === ';') {
        body.push({
          type: 'comment',
          value: lines[i].substring(1)
        });
      } else {
        parts = lines[i].split(':');
        key = parts[0];
        value = parts.slice(1).join(':').trim();
        if (format || key === 'Format') {
          value = value.split(',');
          if (format && value.length > format.length) {
            lastPart = value.slice(format.length - 1).join(',');
            value = value.slice(0, format.length - 1);
            value.push(lastPart);
          }
          value = value.map(s => {
            return s.trim()
          });
          if (format) {
            tmp = {};
            for (j = 0; j < value.length; j++) {
              tmp[format[j]] = value[j];
            }
            value = tmp;
          }
        }
        if (key === 'Format') {
          format = value;
        }
        body.push({
          key,
          value
        });
      }
    }
  }

  return sections
}
self.requestAnimationFrame = (() => {
  // similar to Browser.requestAnimationFrame
  let nextRAF = 0;
  return func => {
    // try to keep target fps (30fps) between calls to here
    const now = Date.now();
    if (nextRAF === 0) {
      nextRAF = now + 1000 / self.targetFps;
    } else {
      while (now + 2 >= nextRAF) { // fudge a little, to avoid timer jitter causing us to do lots of delay:0
        nextRAF += 1000 / self.targetFps;
      }
    }
    const delay = Math.max(nextRAF - now, 0);
    return setTimeout(func, delay)
    // return setTimeout(func, 1);
  }
})();

// Frame throttling

// Wait to start running until we receive some info from the client

// buffer messages until the program starts to run

let messageBuffer = null;
let messageResenderTimeout = null;

function messageResender () {
  if (globalThis.Module?.calledRun) {
    if (messageBuffer && messageBuffer.length > 0) {
      messageResenderTimeout = null;
      messageBuffer.forEach(message => {
        onmessage(message);
      });
      messageBuffer = null;
    }
  } else {
    messageResenderTimeout = setTimeout(messageResender, 50);
  }
}

function _applyKeys (input, output) {
  const vargs = Object.keys(input);

  for (let i = 0; i < vargs.length; i++) {
    output[vargs[i]] = input[vargs[i]];
  }
}

self.init = async data => {
  self.publicPath = data.publicPath;
  self.width = data.width;
  self.height = data.height;
  self.subUrl = data.subUrl;
  self.subContent = data.subContent;
  self.fontFiles = data.fonts;
  self.fallbackFont = data.fallbackFont.toLowerCase();
  self.blendMode = data.blendMode;
  asyncRender = data.asyncRender;
  self.onDemandRender = data.onDemandRender;
  self.dropAllAnimations = !!data.dropAllAnimations || self.dropAllAnimations;
  // Force fallback if engine does not support 'lossy' mode.
  // We only use createImageBitmap in the worker and historic WebKit versions supported
  // the API in the normal but not the worker scope, so we can't check this earlier.
  if (asyncRender && typeof createImageBitmap === 'undefined') {
    asyncRender = false;
    console.error("'createImageBitmap' needed for 'asyncRender' unsupported!");
  }

  self.availableFonts = data.availableFonts;
  self.debug = data.debug;
  self.targetFps = data.targetFps || self.targetFps;
  self.libassMemoryLimit = data.libassMemoryLimit || self.libassMemoryLimit;
  self.libassGlyphLimit = data.libassGlyphLimit || 0;
  self.useLocalFonts = data.useLocalFonts;

  globalThis.Module = await WASMModule({
    locateFile: (path) => `${publicPath}${path.replace('/dist', '')}`
  });
  self.jassubObj = new globalThis.Module.JASSUB();

  self.jassubObj.initLibrary(self.width, self.height, self.fallbackFont || null);

  if (self.fallbackFont) self.findAvailableFonts(self.fallbackFont);

  if (!self.subContent) self.subContent = read_(self.subUrl);

  self.processAvailableFonts(self.subContent);

  for (const font of self.fontFiles || []) self.asyncWrite(font);

  self.jassubObj.createTrackMem(self.subContent, textByteLength(self.subContent));
  self.jassubObj.setDropAnimations(self.dropAllAnimations);

  if (self.libassMemoryLimit > 0 || self.libassGlyphLimit > 0) {
    self.jassubObj.setMemoryLimits(self.libassGlyphLimit, self.libassMemoryLimit);
  }

  postMessage({
    target: 'ready'
  });
};

self.canvas = data => {
  if (data.width == null) throw new Error('Invalid canvas size specified')
  self.resize(data.width, data.height, data.force);
  if (data.force) self.render(self.lastCurrentTime);
};

self.video = data => {
  if (data.currentTime != null) self.setCurrentTime(data.currentTime);
  if (data.isPaused != null) self.setIsPaused(data.isPaused);
  self.rate = data.rate || self.rate;
};

self.offscreenCanvas = data => {
  self.offscreenCanvas = data.transferable[0];
  self.offscreenCanvasCtx = self.offscreenCanvas.getContext('2d', { desynchronized: true });
  if (!asyncRender) {
    self.bufferCanvas = new OffscreenCanvas(self.height, self.width);
    self.bufferCtx = self.bufferCanvas.getContext('2d', { desynchronized: true });
  }
};

self.destroy = () => {
  self.jassubObj.quitLibrary();
};

self.createEvent = data => {
  _applyKeys(data.event, self.jassubObj.track.get_events(self.jassubObj.allocEvent()));
};

self.getEvents = () => {
  const events = [];
  for (let i = 0; i < self.jassubObj.getEventCount(); i++) {
    const evntPtr = self.jassubObj.track.get_events(i);
    events.push({
      Start: evntPtr.get_Start(),
      Duration: evntPtr.get_Duration(),
      ReadOrder: evntPtr.get_ReadOrder(),
      Layer: evntPtr.get_Layer(),
      Style: evntPtr.get_Style(),
      Name: evntPtr.get_Name(),
      MarginL: evntPtr.get_MarginL(),
      MarginR: evntPtr.get_MarginR(),
      MarginV: evntPtr.get_MarginV(),
      Effect: evntPtr.get_Effect(),
      Text: evntPtr.get_Text()
    });
  }
  postMessage({
    target: 'getEvents',
    events
  });
};

self.setEvent = data => {
  _applyKeys(data.event, self.jassubObj.track.get_events(data.index));
};

self.removeEvent = data => {
  self.jassubObj.removeEvent(data.index);
};

self.createStyle = data => {
  _applyKeys(data.style, self.jassubObj.track.get_styles(self.jassubObj.allocStyle()));
};

self.getStyles = () => {
  const styles = [];
  for (let i = 0; i < self.jassubObj.getStyleCount(); i++) {
    const stylPtr = self.jassubObj.track.get_styles(i);
    styles.push({
      Name: stylPtr.get_Name(),
      FontName: stylPtr.get_FontName(),
      FontSize: stylPtr.get_FontSize(),
      PrimaryColour: stylPtr.get_PrimaryColour(),
      SecondaryColour: stylPtr.get_SecondaryColour(),
      OutlineColour: stylPtr.get_OutlineColour(),
      BackColour: stylPtr.get_BackColour(),
      Bold: stylPtr.get_Bold(),
      Italic: stylPtr.get_Italic(),
      Underline: stylPtr.get_Underline(),
      StrikeOut: stylPtr.get_StrikeOut(),
      ScaleX: stylPtr.get_ScaleX(),
      ScaleY: stylPtr.get_ScaleY(),
      Spacing: stylPtr.get_Spacing(),
      Angle: stylPtr.get_Angle(),
      BorderStyle: stylPtr.get_BorderStyle(),
      Outline: stylPtr.get_Outline(),
      Shadow: stylPtr.get_Shadow(),
      Alignment: stylPtr.get_Alignment(),
      MarginL: stylPtr.get_MarginL(),
      MarginR: stylPtr.get_MarginR(),
      MarginV: stylPtr.get_MarginV(),
      Encoding: stylPtr.get_Encoding(),
      treat_fontname_as_pattern: stylPtr.get_treat_fontname_as_pattern(),
      Blur: stylPtr.get_Blur(),
      Justify: stylPtr.get_Justify()
    });
  }
  postMessage({
    target: 'getStyles',
    time: Date.now(),
    styles
  });
};

self.setStyle = data => {
  _applyKeys(data.style, self.jassubObj.track.get_styles(data.index));
};

self.removeStyle = data => {
  self.jassubObj.removeStyle(data.index);
};

onmessage = message => {
  if (!globalThis.Module?.calledRun && !message.data.preMain) {
    if (!messageBuffer) {
      messageBuffer = [];
      messageResenderTimeout = setTimeout(messageResender, 50);
    }
    messageBuffer.push(message);
    return
  }
  if (globalThis.Module?.calledRun && messageResenderTimeout) {
    clearTimeout(messageResenderTimeout);
    messageResender();
  }
  const data = message.data;
  if (self[data.target]) {
    self[data.target](data);
  } else {
    throw new Error('Unknown event target ' + message.data.target)
  }
};
