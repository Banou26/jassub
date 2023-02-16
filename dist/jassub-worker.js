var Ze = {}, Sn = {
  get exports() {
    return Ze;
  },
  set exports(i) {
    Ze = i;
  }
};
(function(i, d) {
  var p = (() => {
    var v = typeof document < "u" && document.currentScript ? document.currentScript.src : void 0;
    return function(a) {
      a = a || {};
      var a = typeof a < "u" ? a : {}, w, _;
      a.ready = new Promise(function(e, t) {
        w = e, _ = t;
      });
      var b = Object.assign({}, a), P = (e, t) => {
        throw t;
      }, T = "";
      function D(e) {
        return a.locateFile ? a.locateFile(e, T) : T + e;
      }
      var k;
      T = self.location.href, v && (T = v), T.indexOf("blob:") !== 0 ? T = T.substr(0, T.replace(/[?#].*/, "").lastIndexOf("/") + 1) : T = "", k = (e) => {
        var t = new XMLHttpRequest();
        return t.open("GET", e, !1), t.responseType = "arraybuffer", t.send(null), new Uint8Array(t.response);
      };
      var te = console.log.bind(console), x = console.warn.bind(console);
      Object.assign(a, b), b = null;
      var ge;
      typeof WebAssembly != "object" && Y("no native wasm support detected");
      var K, ye = !1;
      function We(e, t) {
        e || Y(t);
      }
      var me = new TextDecoder("utf8");
      function Me(e, t, r) {
        for (var n = t + r, s = t; e[s] && !(s >= n); )
          ++s;
        return me.decode(e.buffer ? e.subarray(t, s) : new Uint8Array(e.slice(t, s)));
      }
      function Q(e, t) {
        if (!e)
          return "";
        for (var r = e + t, n = e; !(n >= r) && A[n]; )
          ++n;
        return me.decode(A.subarray(e, n));
      }
      function He(e, t, r, n) {
        if (!(n > 0))
          return 0;
        for (var s = r, l = r + n - 1, f = 0; f < e.length; ++f) {
          var o = e.charCodeAt(f);
          if (o >= 55296 && o <= 57343) {
            var u = e.charCodeAt(++f);
            o = 65536 + ((o & 1023) << 10) | u & 1023;
          }
          if (o <= 127) {
            if (r >= l)
              break;
            t[r++] = o;
          } else if (o <= 2047) {
            if (r + 1 >= l)
              break;
            t[r++] = 192 | o >> 6, t[r++] = 128 | o & 63;
          } else if (o <= 65535) {
            if (r + 2 >= l)
              break;
            t[r++] = 224 | o >> 12, t[r++] = 128 | o >> 6 & 63, t[r++] = 128 | o & 63;
          } else {
            if (r + 3 >= l)
              break;
            t[r++] = 240 | o >> 18, t[r++] = 128 | o >> 12 & 63, t[r++] = 128 | o >> 6 & 63, t[r++] = 128 | o & 63;
          }
        }
        return t[r] = 0, r - s;
      }
      function Ie(e, t, r) {
        return He(e, A, t, r);
      }
      function Le(e) {
        for (var t = 0, r = 0; r < e.length; ++r) {
          var n = e.charCodeAt(r);
          n <= 127 ? t++ : n <= 2047 ? t += 2 : n >= 55296 && n <= 57343 ? (t += 4, ++r) : t += 3;
        }
        return t;
      }
      var re, ne, A, ie, be, G, E, it, st;
      function at(e) {
        re = e, a.HEAP8 = ne = new Int8Array(e), a.HEAP16 = ie = new Int16Array(e), a.HEAP32 = G = new Int32Array(e), a.HEAPU8 = A = new Uint8Array(e), a.HEAPU16 = be = new Uint16Array(e), a.HEAPU32 = E = new Uint32Array(e), a.HEAPF32 = it = new Float32Array(e), a.HEAPF64 = st = new Float64Array(e);
      }
      var ot, Bt = [], ut = [], Vt = [];
      function zt() {
        xe(Bt);
      }
      function Gt() {
        xe(ut);
      }
      function qt() {
        xe(Vt);
      }
      function Jt(e) {
        ut.unshift(e);
      }
      var se = 0, ae = null;
      function Xt(e) {
        se++;
      }
      function Kt(e) {
        if (se--, se == 0 && ae) {
          var t = ae;
          ae = null, t();
        }
      }
      function Y(e) {
        e = "Aborted(" + e + ")", x(e), ye = !0, e += ". Build with -sASSERTIONS for more info.";
        var t = new WebAssembly.RuntimeError(e);
        throw _(t), t;
      }
      var Qt = "data:application/octet-stream;base64,";
      function lt(e) {
        return e.startsWith(Qt);
      }
      var R;
      R = "jassub-worker.wasm", lt(R) || (R = D(R));
      function ft(e) {
        try {
          if (e == R && ge)
            return new Uint8Array(ge);
          if (k)
            return k(e);
          throw "both async and sync fetching of the wasm failed";
        } catch (t) {
          Y(t);
        }
      }
      function Yt() {
        return typeof fetch == "function" ? fetch(R, { credentials: "same-origin" }).then(function(e) {
          if (!e.ok)
            throw "failed to load wasm binary file at '" + R + "'";
          return e.arrayBuffer();
        }).catch(function() {
          return ft(R);
        }) : Promise.resolve().then(function() {
          return ft(R);
        });
      }
      function Zt() {
        var e = { a: Fn };
        function t(f, o) {
          var u = f.exports;
          a.asm = u, K = a.asm.I, at(K.buffer), ot = a.asm.O, Jt(a.asm.J), Kt();
        }
        Xt();
        function r(f) {
          t(f.instance);
        }
        function n(f) {
          return Yt().then(function(o) {
            return WebAssembly.instantiate(o, e);
          }).then(function(o) {
            return o;
          }).then(f, function(o) {
            x("failed to asynchronously prepare wasm: " + o), Y(o);
          });
        }
        function s() {
          return typeof WebAssembly.instantiateStreaming == "function" && !lt(R) && typeof fetch == "function" ? fetch(R, { credentials: "same-origin" }).then(function(f) {
            var o = WebAssembly.instantiateStreaming(f, e);
            return o.then(r, function(u) {
              return x("wasm streaming compile failed: " + u), x("falling back to ArrayBuffer instantiation"), n(r);
            });
          }) : n(r);
        }
        if (a.instantiateWasm)
          try {
            var l = a.instantiateWasm(e, t);
            return l;
          } catch (f) {
            x("Module.instantiateWasm callback failed with error: " + f), _(f);
          }
        return s().catch(_), {};
      }
      function Nt(e) {
        this.name = "ExitStatus", this.message = "Program terminated with exit(" + e + ")", this.status = e;
      }
      function xe(e) {
        for (; e.length > 0; )
          e.shift()(a);
      }
      function er(e, t, r, n) {
        Y("Assertion failed: " + Q(e) + ", at: " + [t ? Q(t) : "unknown filename", r, n ? Q(n) : "unknown function"]);
      }
      function tr(e, t, r) {
        return 0;
      }
      function rr(e, t, r) {
      }
      function nr(e, t, r) {
        return 0;
      }
      function ir(e, t, r, n) {
      }
      function sr(e, t, r, n, s) {
      }
      function Be(e) {
        switch (e) {
          case 1:
            return 0;
          case 2:
            return 1;
          case 4:
            return 2;
          case 8:
            return 3;
          default:
            throw new TypeError("Unknown type size: " + e);
        }
      }
      function ar() {
        for (var e = new Array(256), t = 0; t < 256; ++t)
          e[t] = String.fromCharCode(t);
        ct = e;
      }
      var ct = void 0;
      function O(e) {
        for (var t = "", r = e; A[r]; )
          t += ct[A[r++]];
        return t;
      }
      var Z = {}, q = {}, _e = {}, or = 48, ur = 57;
      function Ve(e) {
        if (e === void 0)
          return "_unknown";
        e = e.replace(/[^a-zA-Z0-9_]/g, "$");
        var t = e.charCodeAt(0);
        return t >= or && t <= ur ? "_" + e : e;
      }
      function ze(e, t) {
        return e = Ve(e), new Function("body", "return function " + e + `() {
    "use strict";    return body.apply(this, arguments);
};
`)(t);
      }
      function Ge(e, t) {
        var r = ze(t, function(n) {
          this.name = t, this.message = n;
          var s = new Error(n).stack;
          s !== void 0 && (this.stack = this.toString() + `
` + s.replace(/^Error(:[^\n]*)?\n/, ""));
        });
        return r.prototype = Object.create(e.prototype), r.prototype.constructor = r, r.prototype.toString = function() {
          return this.message === void 0 ? this.name : this.name + ": " + this.message;
        }, r;
      }
      var N = void 0;
      function m(e) {
        throw new N(e);
      }
      var dt = void 0;
      function we(e) {
        throw new dt(e);
      }
      function J(e, t, r) {
        e.forEach(function(o) {
          _e[o] = t;
        });
        function n(o) {
          var u = r(o);
          u.length !== e.length && we("Mismatched type converter count");
          for (var c = 0; c < e.length; ++c)
            M(e[c], u[c]);
        }
        var s = new Array(t.length), l = [], f = 0;
        t.forEach((o, u) => {
          q.hasOwnProperty(o) ? s[u] = q[o] : (l.push(o), Z.hasOwnProperty(o) || (Z[o] = []), Z[o].push(() => {
            s[u] = q[o], ++f, f === l.length && n(s);
          }));
        }), l.length === 0 && n(s);
      }
      function M(e, t, r = {}) {
        if (!("argPackAdvance" in t))
          throw new TypeError("registerType registeredInstance requires argPackAdvance");
        var n = t.name;
        if (e || m('type "' + n + '" must have a positive integer typeid pointer'), q.hasOwnProperty(e)) {
          if (r.ignoreDuplicateRegistrations)
            return;
          m("Cannot register type '" + n + "' twice");
        }
        if (q[e] = t, delete _e[e], Z.hasOwnProperty(e)) {
          var s = Z[e];
          delete Z[e], s.forEach((l) => l());
        }
      }
      function lr(e, t, r, n, s) {
        var l = Be(r);
        t = O(t), M(e, { name: t, fromWireType: function(f) {
          return !!f;
        }, toWireType: function(f, o) {
          return o ? n : s;
        }, argPackAdvance: 8, readValueFromPointer: function(f) {
          var o;
          if (r === 1)
            o = ne;
          else if (r === 2)
            o = ie;
          else if (r === 4)
            o = G;
          else
            throw new TypeError("Unknown boolean type size: " + t);
          return this.fromWireType(o[f >> l]);
        }, destructorFunction: null });
      }
      function fr(e) {
        if (!(this instanceof B) || !(e instanceof B))
          return !1;
        for (var t = this.$$.ptrType.registeredClass, r = this.$$.ptr, n = e.$$.ptrType.registeredClass, s = e.$$.ptr; t.baseClass; )
          r = t.upcast(r), t = t.baseClass;
        for (; n.baseClass; )
          s = n.upcast(s), n = n.baseClass;
        return t === n && r === s;
      }
      function cr(e) {
        return { count: e.count, deleteScheduled: e.deleteScheduled, preservePointerOnDelete: e.preservePointerOnDelete, ptr: e.ptr, ptrType: e.ptrType, smartPtr: e.smartPtr, smartPtrType: e.smartPtrType };
      }
      function qe(e) {
        function t(r) {
          return r.$$.ptrType.registeredClass.name;
        }
        m(t(e) + " instance already deleted");
      }
      var Je = !1;
      function pt(e) {
      }
      function dr(e) {
        e.smartPtr ? e.smartPtrType.rawDestructor(e.smartPtr) : e.ptrType.registeredClass.rawDestructor(e.ptr);
      }
      function vt(e) {
        e.count.value -= 1;
        var t = e.count.value === 0;
        t && dr(e);
      }
      function ht(e, t, r) {
        if (t === r)
          return e;
        if (r.baseClass === void 0)
          return null;
        var n = ht(e, t, r.baseClass);
        return n === null ? null : r.downcast(n);
      }
      var gt = {};
      function pr() {
        return Object.keys(le).length;
      }
      function vr() {
        var e = [];
        for (var t in le)
          le.hasOwnProperty(t) && e.push(le[t]);
        return e;
      }
      var oe = [];
      function Xe() {
        for (; oe.length; ) {
          var e = oe.pop();
          e.$$.deleteScheduled = !1, e.delete();
        }
      }
      var ue = void 0;
      function hr(e) {
        ue = e, oe.length && ue && ue(Xe);
      }
      function gr() {
        a.getInheritedInstanceCount = pr, a.getLiveInheritedInstances = vr, a.flushPendingDeletes = Xe, a.setDelayFunction = hr;
      }
      var le = {};
      function yr(e, t) {
        for (t === void 0 && m("ptr should not be undefined"); e.baseClass; )
          t = e.upcast(t), e = e.baseClass;
        return t;
      }
      function mr(e, t) {
        return t = yr(e, t), le[t];
      }
      function Ce(e, t) {
        (!t.ptrType || !t.ptr) && we("makeClassHandle requires ptr and ptrType");
        var r = !!t.smartPtrType, n = !!t.smartPtr;
        return r !== n && we("Both smartPtrType and smartPtr must be specified"), t.count = { value: 1 }, fe(Object.create(e, { $$: { value: t } }));
      }
      function br(e) {
        var t = this.getPointee(e);
        if (!t)
          return this.destructor(e), null;
        var r = mr(this.registeredClass, t);
        if (r !== void 0) {
          if (r.$$.count.value === 0)
            return r.$$.ptr = t, r.$$.smartPtr = e, r.clone();
          var n = r.clone();
          return this.destructor(e), n;
        }
        function s() {
          return this.isSmartPointer ? Ce(this.registeredClass.instancePrototype, { ptrType: this.pointeeType, ptr: t, smartPtrType: this, smartPtr: e }) : Ce(this.registeredClass.instancePrototype, { ptrType: this, ptr: e });
        }
        var l = this.registeredClass.getActualType(t), f = gt[l];
        if (!f)
          return s.call(this);
        var o;
        this.isConst ? o = f.constPointerType : o = f.pointerType;
        var u = ht(t, this.registeredClass, o.registeredClass);
        return u === null ? s.call(this) : this.isSmartPointer ? Ce(o.registeredClass.instancePrototype, { ptrType: o, ptr: u, smartPtrType: this, smartPtr: e }) : Ce(o.registeredClass.instancePrototype, { ptrType: o, ptr: u });
      }
      function fe(e) {
        return typeof FinalizationRegistry > "u" ? (fe = (t) => t, e) : (Je = new FinalizationRegistry((t) => {
          vt(t.$$);
        }), fe = (t) => {
          var r = t.$$, n = !!r.smartPtr;
          if (n) {
            var s = { $$: r };
            Je.register(t, s, t);
          }
          return t;
        }, pt = (t) => Je.unregister(t), fe(e));
      }
      function _r() {
        if (this.$$.ptr || qe(this), this.$$.preservePointerOnDelete)
          return this.$$.count.value += 1, this;
        var e = fe(Object.create(Object.getPrototypeOf(this), { $$: { value: cr(this.$$) } }));
        return e.$$.count.value += 1, e.$$.deleteScheduled = !1, e;
      }
      function wr() {
        this.$$.ptr || qe(this), this.$$.deleteScheduled && !this.$$.preservePointerOnDelete && m("Object already scheduled for deletion"), pt(this), vt(this.$$), this.$$.preservePointerOnDelete || (this.$$.smartPtr = void 0, this.$$.ptr = void 0);
      }
      function Cr() {
        return !this.$$.ptr;
      }
      function Pr() {
        return this.$$.ptr || qe(this), this.$$.deleteScheduled && !this.$$.preservePointerOnDelete && m("Object already scheduled for deletion"), oe.push(this), oe.length === 1 && ue && ue(Xe), this.$$.deleteScheduled = !0, this;
      }
      function Tr() {
        B.prototype.isAliasOf = fr, B.prototype.clone = _r, B.prototype.delete = wr, B.prototype.isDeleted = Cr, B.prototype.deleteLater = Pr;
      }
      function B() {
      }
      function yt(e, t, r) {
        if (e[t].overloadTable === void 0) {
          var n = e[t];
          e[t] = function() {
            return e[t].overloadTable.hasOwnProperty(arguments.length) || m("Function '" + r + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + e[t].overloadTable + ")!"), e[t].overloadTable[arguments.length].apply(this, arguments);
          }, e[t].overloadTable = [], e[t].overloadTable[n.argCount] = n;
        }
      }
      function $r(e, t, r) {
        a.hasOwnProperty(e) ? ((r === void 0 || a[e].overloadTable !== void 0 && a[e].overloadTable[r] !== void 0) && m("Cannot register public name '" + e + "' twice"), yt(a, e, e), a.hasOwnProperty(r) && m("Cannot register multiple overloads of a function with the same number of arguments (" + r + ")!"), a[e].overloadTable[r] = t) : (a[e] = t, r !== void 0 && (a[e].numArguments = r));
      }
      function Ar(e, t, r, n, s, l, f, o) {
        this.name = e, this.constructor = t, this.instancePrototype = r, this.rawDestructor = n, this.baseClass = s, this.getActualType = l, this.upcast = f, this.downcast = o, this.pureVirtualFunctions = [];
      }
      function Pe(e, t, r) {
        for (; t !== r; )
          t.upcast || m("Expected null or instance of " + r.name + ", got an instance of " + t.name), e = t.upcast(e), t = t.baseClass;
        return e;
      }
      function Fr(e, t) {
        if (t === null)
          return this.isReference && m("null is not a valid " + this.name), 0;
        t.$$ || m('Cannot pass "' + Qe(t) + '" as a ' + this.name), t.$$.ptr || m("Cannot pass deleted object as a pointer of type " + this.name);
        var r = t.$$.ptrType.registeredClass, n = Pe(t.$$.ptr, r, this.registeredClass);
        return n;
      }
      function jr(e, t) {
        var r;
        if (t === null)
          return this.isReference && m("null is not a valid " + this.name), this.isSmartPointer ? (r = this.rawConstructor(), e !== null && e.push(this.rawDestructor, r), r) : 0;
        t.$$ || m('Cannot pass "' + Qe(t) + '" as a ' + this.name), t.$$.ptr || m("Cannot pass deleted object as a pointer of type " + this.name), !this.isConst && t.$$.ptrType.isConst && m("Cannot convert argument of type " + (t.$$.smartPtrType ? t.$$.smartPtrType.name : t.$$.ptrType.name) + " to parameter type " + this.name);
        var n = t.$$.ptrType.registeredClass;
        if (r = Pe(t.$$.ptr, n, this.registeredClass), this.isSmartPointer)
          switch (t.$$.smartPtr === void 0 && m("Passing raw pointer to smart pointer is illegal"), this.sharingPolicy) {
            case 0:
              t.$$.smartPtrType === this ? r = t.$$.smartPtr : m("Cannot convert argument of type " + (t.$$.smartPtrType ? t.$$.smartPtrType.name : t.$$.ptrType.name) + " to parameter type " + this.name);
              break;
            case 1:
              r = t.$$.smartPtr;
              break;
            case 2:
              if (t.$$.smartPtrType === this)
                r = t.$$.smartPtr;
              else {
                var s = t.clone();
                r = this.rawShare(r, Ae.toHandle(function() {
                  s.delete();
                })), e !== null && e.push(this.rawDestructor, r);
              }
              break;
            default:
              m("Unsupporting sharing policy");
          }
        return r;
      }
      function kr(e, t) {
        if (t === null)
          return this.isReference && m("null is not a valid " + this.name), 0;
        t.$$ || m('Cannot pass "' + Qe(t) + '" as a ' + this.name), t.$$.ptr || m("Cannot pass deleted object as a pointer of type " + this.name), t.$$.ptrType.isConst && m("Cannot convert argument of type " + t.$$.ptrType.name + " to parameter type " + this.name);
        var r = t.$$.ptrType.registeredClass, n = Pe(t.$$.ptr, r, this.registeredClass);
        return n;
      }
      function Te(e) {
        return this.fromWireType(G[e >> 2]);
      }
      function Or(e) {
        return this.rawGetPointee && (e = this.rawGetPointee(e)), e;
      }
      function Er(e) {
        this.rawDestructor && this.rawDestructor(e);
      }
      function Sr(e) {
        e !== null && e.delete();
      }
      function Dr() {
        H.prototype.getPointee = Or, H.prototype.destructor = Er, H.prototype.argPackAdvance = 8, H.prototype.readValueFromPointer = Te, H.prototype.deleteObject = Sr, H.prototype.fromWireType = br;
      }
      function H(e, t, r, n, s, l, f, o, u, c, h) {
        this.name = e, this.registeredClass = t, this.isReference = r, this.isConst = n, this.isSmartPointer = s, this.pointeeType = l, this.sharingPolicy = f, this.rawGetPointee = o, this.rawConstructor = u, this.rawShare = c, this.rawDestructor = h, !s && t.baseClass === void 0 ? n ? (this.toWireType = Fr, this.destructorFunction = null) : (this.toWireType = kr, this.destructorFunction = null) : this.toWireType = jr;
      }
      function Rr(e, t, r) {
        a.hasOwnProperty(e) || we("Replacing nonexistant public symbol"), a[e].overloadTable !== void 0 && r !== void 0 ? a[e].overloadTable[r] = t : (a[e] = t, a[e].argCount = r);
      }
      function Ur(e, t, r) {
        var n = a["dynCall_" + e];
        return r && r.length ? n.apply(null, [t].concat(r)) : n.call(null, t);
      }
      var $e = [];
      function ce(e) {
        var t = $e[e];
        return t || (e >= $e.length && ($e.length = e + 1), $e[e] = t = ot.get(e)), t;
      }
      function Wr(e, t, r) {
        if (e.includes("j"))
          return Ur(e, t, r);
        var n = ce(t).apply(null, r);
        return n;
      }
      function Mr(e, t) {
        var r = [];
        return function() {
          return r.length = 0, Object.assign(r, arguments), Wr(e, t, r);
        };
      }
      function V(e, t) {
        e = O(e);
        function r() {
          return e.includes("j") ? Mr(e, t) : ce(t);
        }
        var n = r();
        return typeof n != "function" && m("unknown function pointer with signature " + e + ": " + t), n;
      }
      var mt = void 0;
      function bt(e) {
        var t = At(e), r = O(t);
        return I(t), r;
      }
      function de(e, t) {
        var r = [], n = {};
        function s(l) {
          if (!n[l] && !q[l]) {
            if (_e[l]) {
              _e[l].forEach(s);
              return;
            }
            r.push(l), n[l] = !0;
          }
        }
        throw t.forEach(s), new mt(e + ": " + r.map(bt).join([", "]));
      }
      function Hr(e, t, r, n, s, l, f, o, u, c, h, g, y) {
        h = O(h), l = V(s, l), o && (o = V(f, o)), c && (c = V(u, c)), y = V(g, y);
        var $ = Ve(h);
        $r($, function() {
          de("Cannot construct " + h + " due to unbound types", [n]);
        }), J([e, t, r], n ? [n] : [], function(F) {
          F = F[0];
          var j, S;
          n ? (j = F.registeredClass, S = j.instancePrototype) : S = B.prototype;
          var W = ze($, function() {
            if (Object.getPrototypeOf(this) !== pe)
              throw new N("Use 'new' to construct " + h);
            if (L.constructor_body === void 0)
              throw new N(h + " has no accessible constructor");
            var Ot = L.constructor_body[arguments.length];
            if (Ot === void 0)
              throw new N("Tried to invoke ctor of " + h + " with invalid number of parameters (" + arguments.length + ") - expected (" + Object.keys(L.constructor_body).toString() + ") parameters instead!");
            return Ot.apply(this, arguments);
          }), pe = Object.create(S, { constructor: { value: W } });
          W.prototype = pe;
          var L = new Ar(h, W, pe, y, j, l, o, c), En = new H(h, L, !0, !1, !1), jt = new H(h + "*", L, !1, !1, !1), kt = new H(h + " const*", L, !1, !0, !1);
          return gt[e] = { pointerType: jt, constPointerType: kt }, Rr($, W), [En, jt, kt];
        });
      }
      function _t(e, t) {
        for (var r = [], n = 0; n < e; n++)
          r.push(E[t + n * 4 >> 2]);
        return r;
      }
      function wt(e) {
        for (; e.length; ) {
          var t = e.pop(), r = e.pop();
          r(t);
        }
      }
      function Ir(e, t) {
        if (!(e instanceof Function))
          throw new TypeError("new_ called with constructor type " + typeof e + " which is not a function");
        var r = ze(e.name || "unknownFunctionName", function() {
        });
        r.prototype = e.prototype;
        var n = new r(), s = e.apply(n, t);
        return s instanceof Object ? s : n;
      }
      function Ct(e, t, r, n, s) {
        var l = t.length;
        l < 2 && m("argTypes array size mismatch! Must at least get return value and 'this' types!");
        for (var f = t[1] !== null && r !== null, o = !1, u = 1; u < t.length; ++u)
          if (t[u] !== null && t[u].destructorFunction === void 0) {
            o = !0;
            break;
          }
        for (var c = t[0].name !== "void", h = "", g = "", u = 0; u < l - 2; ++u)
          h += (u !== 0 ? ", " : "") + "arg" + u, g += (u !== 0 ? ", " : "") + "arg" + u + "Wired";
        var y = "return function " + Ve(e) + "(" + h + `) {
if (arguments.length !== ` + (l - 2) + `) {
throwBindingError('function ` + e + " called with ' + arguments.length + ' arguments, expected " + (l - 2) + ` args!');
}
`;
        o && (y += `var destructors = [];
`);
        var $ = o ? "destructors" : "null", F = ["throwBindingError", "invoker", "fn", "runDestructors", "retType", "classParam"], j = [m, n, s, wt, t[0], t[1]];
        f && (y += "var thisWired = classParam.toWireType(" + $ + `, this);
`);
        for (var u = 0; u < l - 2; ++u)
          y += "var arg" + u + "Wired = argType" + u + ".toWireType(" + $ + ", arg" + u + "); // " + t[u + 2].name + `
`, F.push("argType" + u), j.push(t[u + 2]);
        if (f && (g = "thisWired" + (g.length > 0 ? ", " : "") + g), y += (c ? "var rv = " : "") + "invoker(fn" + (g.length > 0 ? ", " : "") + g + `);
`, o)
          y += `runDestructors(destructors);
`;
        else
          for (var u = f ? 1 : 2; u < t.length; ++u) {
            var S = u === 1 ? "thisWired" : "arg" + (u - 2) + "Wired";
            t[u].destructorFunction !== null && (y += S + "_dtor(" + S + "); // " + t[u].name + `
`, F.push(S + "_dtor"), j.push(t[u].destructorFunction));
          }
        c && (y += `var ret = retType.fromWireType(rv);
return ret;
`), y += `}
`, F.push(y);
        var W = Ir(Function, F).apply(null, j);
        return W;
      }
      function Lr(e, t, r, n, s, l) {
        We(t > 0);
        var f = _t(t, r);
        s = V(n, s), J([], [e], function(o) {
          o = o[0];
          var u = "constructor " + o.name;
          if (o.registeredClass.constructor_body === void 0 && (o.registeredClass.constructor_body = []), o.registeredClass.constructor_body[t - 1] !== void 0)
            throw new N("Cannot register multiple constructors with identical number of parameters (" + (t - 1) + ") for class '" + o.name + "'! Overload resolution is currently only performed using the parameter count, not actual type info!");
          return o.registeredClass.constructor_body[t - 1] = () => {
            de("Cannot construct " + o.name + " due to unbound types", f);
          }, J([], f, function(c) {
            return c.splice(1, 0, null), o.registeredClass.constructor_body[t - 1] = Ct(u, c, null, s, l), [];
          }), [];
        });
      }
      function xr(e, t, r, n, s, l, f, o) {
        var u = _t(r, n);
        t = O(t), l = V(s, l), J([], [e], function(c) {
          c = c[0];
          var h = c.name + "." + t;
          t.startsWith("@@") && (t = Symbol[t.substring(2)]), o && c.registeredClass.pureVirtualFunctions.push(t);
          function g() {
            de("Cannot call " + h + " due to unbound types", u);
          }
          var y = c.registeredClass.instancePrototype, $ = y[t];
          return $ === void 0 || $.overloadTable === void 0 && $.className !== c.name && $.argCount === r - 2 ? (g.argCount = r - 2, g.className = c.name, y[t] = g) : (yt(y, t, h), y[t].overloadTable[r - 2] = g), J([], u, function(F) {
            var j = Ct(h, F, c, l, f);
            return y[t].overloadTable === void 0 ? (j.argCount = r - 2, y[t] = j) : y[t].overloadTable[r - 2] = j, [];
          }), [];
        });
      }
      function Pt(e, t, r) {
        return e instanceof Object || m(r + ' with invalid "this": ' + e), e instanceof t.registeredClass.constructor || m(r + ' incompatible with "this" of type ' + e.constructor.name), e.$$.ptr || m("cannot call emscripten binding method " + r + " on deleted object"), Pe(e.$$.ptr, e.$$.ptrType.registeredClass, t.registeredClass);
      }
      function Br(e, t, r, n, s, l, f, o, u, c) {
        t = O(t), s = V(n, s), J([], [e], function(h) {
          h = h[0];
          var g = h.name + "." + t, y = { get: function() {
            de("Cannot access " + g + " due to unbound types", [r, f]);
          }, enumerable: !0, configurable: !0 };
          return u ? y.set = () => {
            de("Cannot access " + g + " due to unbound types", [r, f]);
          } : y.set = ($) => {
            m(g + " is a read-only property");
          }, Object.defineProperty(h.registeredClass.instancePrototype, t, y), J([], u ? [r, f] : [r], function($) {
            var F = $[0], j = { get: function() {
              var W = Pt(this, h, g + " getter");
              return F.fromWireType(s(l, W));
            }, enumerable: !0 };
            if (u) {
              u = V(o, u);
              var S = $[1];
              j.set = function(W) {
                var pe = Pt(this, h, g + " setter"), L = [];
                u(c, pe, S.toWireType(L, W)), wt(L);
              };
            }
            return Object.defineProperty(h.registeredClass.instancePrototype, t, j), [];
          }), [];
        });
      }
      var Ke = [], U = [{}, { value: void 0 }, { value: null }, { value: !0 }, { value: !1 }];
      function Tt(e) {
        e > 4 && --U[e].refcount === 0 && (U[e] = void 0, Ke.push(e));
      }
      function Vr() {
        for (var e = 0, t = 5; t < U.length; ++t)
          U[t] !== void 0 && ++e;
        return e;
      }
      function zr() {
        for (var e = 5; e < U.length; ++e)
          if (U[e] !== void 0)
            return U[e];
        return null;
      }
      function Gr() {
        a.count_emval_handles = Vr, a.get_first_emval = zr;
      }
      var Ae = { toValue: (e) => (e || m("Cannot use deleted val. handle = " + e), U[e].value), toHandle: (e) => {
        switch (e) {
          case void 0:
            return 1;
          case null:
            return 2;
          case !0:
            return 3;
          case !1:
            return 4;
          default: {
            var t = Ke.length ? Ke.pop() : U.length;
            return U[t] = { refcount: 1, value: e }, t;
          }
        }
      } };
      function qr(e, t) {
        t = O(t), M(e, { name: t, fromWireType: function(r) {
          var n = Ae.toValue(r);
          return Tt(r), n;
        }, toWireType: function(r, n) {
          return Ae.toHandle(n);
        }, argPackAdvance: 8, readValueFromPointer: Te, destructorFunction: null });
      }
      function Qe(e) {
        if (e === null)
          return "null";
        var t = typeof e;
        return t === "object" || t === "array" || t === "function" ? e.toString() : "" + e;
      }
      function Jr(e, t) {
        switch (t) {
          case 2:
            return function(r) {
              return this.fromWireType(it[r >> 2]);
            };
          case 3:
            return function(r) {
              return this.fromWireType(st[r >> 3]);
            };
          default:
            throw new TypeError("Unknown float type: " + e);
        }
      }
      function Xr(e, t, r) {
        var n = Be(r);
        t = O(t), M(e, { name: t, fromWireType: function(s) {
          return s;
        }, toWireType: function(s, l) {
          return l;
        }, argPackAdvance: 8, readValueFromPointer: Jr(t, n), destructorFunction: null });
      }
      function Kr(e, t, r) {
        switch (t) {
          case 0:
            return r ? function(s) {
              return ne[s];
            } : function(s) {
              return A[s];
            };
          case 1:
            return r ? function(s) {
              return ie[s >> 1];
            } : function(s) {
              return be[s >> 1];
            };
          case 2:
            return r ? function(s) {
              return G[s >> 2];
            } : function(s) {
              return E[s >> 2];
            };
          default:
            throw new TypeError("Unknown integer type: " + e);
        }
      }
      function Qr(e, t, r, n, s) {
        t = O(t);
        var l = Be(r), f = (g) => g;
        if (n === 0) {
          var o = 32 - 8 * r;
          f = (g) => g << o >>> o;
        }
        var u = t.includes("unsigned"), c = (g, y) => {
        }, h;
        u ? h = function(g, y) {
          return c(y, this.name), y >>> 0;
        } : h = function(g, y) {
          return c(y, this.name), y;
        }, M(e, { name: t, fromWireType: f, toWireType: h, argPackAdvance: 8, readValueFromPointer: Kr(t, l, n !== 0), destructorFunction: null });
      }
      function Yr(e, t, r) {
        var n = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array], s = n[t];
        function l(f) {
          f = f >> 2;
          var o = E, u = o[f], c = o[f + 1];
          return new s(re, c, u);
        }
        r = O(r), M(e, { name: r, fromWireType: l, argPackAdvance: 8, readValueFromPointer: l }, { ignoreDuplicateRegistrations: !0 });
      }
      function Zr(e, t) {
        t = O(t);
        var r = t === "std::string";
        M(e, { name: t, fromWireType: function(n) {
          var s = E[n >> 2], l = n + 4, f;
          if (r)
            for (var o = l, u = 0; u <= s; ++u) {
              var c = l + u;
              if (u == s || A[c] == 0) {
                var h = c - o, g = Q(o, h);
                f === void 0 ? f = g : (f += String.fromCharCode(0), f += g), o = c + 1;
              }
            }
          else {
            for (var y = new Array(s), u = 0; u < s; ++u)
              y[u] = String.fromCharCode(A[l + u]);
            f = y.join("");
          }
          return I(n), f;
        }, toWireType: function(n, s) {
          s instanceof ArrayBuffer && (s = new Uint8Array(s));
          var l, f = typeof s == "string";
          f || s instanceof Uint8Array || s instanceof Uint8ClampedArray || s instanceof Int8Array || m("Cannot pass non-string to std::string"), r && f ? l = Le(s) : l = s.length;
          var o = Ye(4 + l + 1), u = o + 4;
          if (E[o >> 2] = l, r && f)
            Ie(s, u, l + 1);
          else if (f)
            for (var c = 0; c < l; ++c) {
              var h = s.charCodeAt(c);
              h > 255 && (I(u), m("String has UTF-16 code units that do not fit in 8 bits")), A[u + c] = h;
            }
          else
            for (var c = 0; c < l; ++c)
              A[u + c] = s[c];
          return n !== null && n.push(I, o), o;
        }, argPackAdvance: 8, readValueFromPointer: Te, destructorFunction: function(n) {
          I(n);
        } });
      }
      var Nr = new TextDecoder("utf-16le");
      function en(e, t) {
        for (var r = e, n = r >> 1, s = n + t / 2; !(n >= s) && be[n]; )
          ++n;
        return r = n << 1, Nr.decode(A.subarray(e, r));
      }
      function tn(e, t, r) {
        if (r === void 0 && (r = 2147483647), r < 2)
          return 0;
        r -= 2;
        for (var n = t, s = r < e.length * 2 ? r / 2 : e.length, l = 0; l < s; ++l) {
          var f = e.charCodeAt(l);
          ie[t >> 1] = f, t += 2;
        }
        return ie[t >> 1] = 0, t - n;
      }
      function rn(e) {
        return e.length * 2;
      }
      function nn(e, t) {
        for (var r = 0, n = ""; !(r >= t / 4); ) {
          var s = G[e + r * 4 >> 2];
          if (s == 0)
            break;
          if (++r, s >= 65536) {
            var l = s - 65536;
            n += String.fromCharCode(55296 | l >> 10, 56320 | l & 1023);
          } else
            n += String.fromCharCode(s);
        }
        return n;
      }
      function sn(e, t, r) {
        if (r === void 0 && (r = 2147483647), r < 4)
          return 0;
        for (var n = t, s = n + r - 4, l = 0; l < e.length; ++l) {
          var f = e.charCodeAt(l);
          if (f >= 55296 && f <= 57343) {
            var o = e.charCodeAt(++l);
            f = 65536 + ((f & 1023) << 10) | o & 1023;
          }
          if (G[t >> 2] = f, t += 4, t + 4 > s)
            break;
        }
        return G[t >> 2] = 0, t - n;
      }
      function an(e) {
        for (var t = 0, r = 0; r < e.length; ++r) {
          var n = e.charCodeAt(r);
          n >= 55296 && n <= 57343 && ++r, t += 4;
        }
        return t;
      }
      function on(e, t, r) {
        r = O(r);
        var n, s, l, f, o;
        t === 2 ? (n = en, s = tn, f = rn, l = () => be, o = 1) : t === 4 && (n = nn, s = sn, f = an, l = () => E, o = 2), M(e, { name: r, fromWireType: function(u) {
          for (var c = E[u >> 2], h = l(), g, y = u + 4, $ = 0; $ <= c; ++$) {
            var F = u + 4 + $ * t;
            if ($ == c || h[F >> o] == 0) {
              var j = F - y, S = n(y, j);
              g === void 0 ? g = S : (g += String.fromCharCode(0), g += S), y = F + t;
            }
          }
          return I(u), g;
        }, toWireType: function(u, c) {
          typeof c != "string" && m("Cannot pass non-string to C++ string type " + r);
          var h = f(c), g = Ye(4 + h + t);
          return E[g >> 2] = h >> o, s(c, g + 4, h + t), u !== null && u.push(I, g), g;
        }, argPackAdvance: 8, readValueFromPointer: Te, destructorFunction: function(u) {
          I(u);
        } });
      }
      function un(e, t) {
        t = O(t), M(e, { isVoid: !0, name: t, argPackAdvance: 0, fromWireType: function() {
        }, toWireType: function(r, n) {
        } });
      }
      function ln() {
        throw 1 / 0;
      }
      function fn(e) {
        e > 4 && (U[e].refcount += 1);
      }
      function cn(e, t) {
        var r = q[e];
        return r === void 0 && m(t + " has unknown type " + bt(e)), r;
      }
      function dn(e, t) {
        e = cn(e, "_emval_take_value");
        var r = e.readValueFromPointer(t);
        return Ae.toHandle(r);
      }
      function pn() {
        Y("");
      }
      var $t;
      $t = () => performance.now();
      function vn(e, t, r) {
        A.copyWithin(e, t, t + r);
      }
      function hn() {
        return 2147483648;
      }
      function gn(e) {
        try {
          return K.grow(e - re.byteLength + 65535 >>> 16), at(K.buffer), 1;
        } catch {
        }
      }
      function yn(e) {
        var t = A.length;
        e = e >>> 0;
        var r = hn();
        if (e > r)
          return !1;
        let n = (u, c) => u + (c - u % c) % c;
        for (var s = 1; s <= 4; s *= 2) {
          var l = t * (1 + 0.2 / s);
          l = Math.min(l, e + 100663296);
          var f = Math.min(r, n(Math.max(e, l), 65536)), o = gn(f);
          if (o)
            return !0;
        }
        return !1;
      }
      function mn(e) {
        P(e, new Nt(e));
      }
      function bn(e, t) {
        mn(e);
      }
      var _n = bn;
      function wn(e) {
        return 52;
      }
      function Cn(e, t, r, n) {
        return 52;
      }
      function Pn(e, t, r, n, s) {
        return 70;
      }
      var Tn = [null, [], []];
      function $n(e, t) {
        var r = Tn[e];
        t === 0 || t === 10 ? ((e === 1 ? te : x)(Me(r, 0)), r.length = 0) : r.push(t);
      }
      function An(e, t, r, n) {
        for (var s = 0, l = 0; l < r; l++) {
          var f = E[t >> 2], o = E[t + 4 >> 2];
          t += 8;
          for (var u = 0; u < o; u++)
            $n(e, A[f + u]);
          s += o;
        }
        return E[n >> 2] = s, 0;
      }
      ar(), N = a.BindingError = Ge(Error, "BindingError"), dt = a.InternalError = Ge(Error, "InternalError"), Tr(), gr(), Dr(), mt = a.UnboundTypeError = Ge(Error, "UnboundTypeError"), Gr();
      var Fn = { a: er, n: tr, A: rr, E: nr, l: ir, u: sr, G: lr, g: Hr, m: Lr, c: xr, b: Br, F: qr, o: Xr, f: Qr, d: Yr, p: Zr, k: on, H: un, y: ln, r: Tt, s: fn, q: dn, e: pn, h: $t, B: vn, z: yn, i: _n, j: wn, D: Cn, t: Pn, C: An, x: jn, v: On, w: kn };
      Zt(), a.___wasm_call_ctors = function() {
        return (a.___wasm_call_ctors = a.asm.J).apply(null, arguments);
      };
      var Ye = a._malloc = function() {
        return (Ye = a._malloc = a.asm.K).apply(null, arguments);
      }, I = a._free = function() {
        return (I = a._free = a.asm.L).apply(null, arguments);
      }, At = a.___getTypeName = function() {
        return (At = a.___getTypeName = a.asm.M).apply(null, arguments);
      };
      a.__embind_initialize_bindings = function() {
        return (a.__embind_initialize_bindings = a.asm.N).apply(null, arguments);
      };
      var Fe = a._setThrew = function() {
        return (Fe = a._setThrew = a.asm.P).apply(null, arguments);
      }, je = a.stackSave = function() {
        return (je = a.stackSave = a.asm.Q).apply(null, arguments);
      }, ke = a.stackRestore = function() {
        return (ke = a.stackRestore = a.asm.R).apply(null, arguments);
      };
      a.dynCall_jiji = function() {
        return (a.dynCall_jiji = a.asm.S).apply(null, arguments);
      }, a.dynCall_jij = function() {
        return (a.dynCall_jij = a.asm.T).apply(null, arguments);
      }, a.dynCall_viiiiji = function() {
        return (a.dynCall_viiiiji = a.asm.U).apply(null, arguments);
      };
      function jn(e, t, r) {
        var n = je();
        try {
          return ce(e)(t, r);
        } catch (s) {
          if (ke(n), s !== s + 0)
            throw s;
          Fe(1, 0);
        }
      }
      function kn(e, t, r, n, s) {
        var l = je();
        try {
          return ce(e)(t, r, n, s);
        } catch (f) {
          if (ke(l), f !== f + 0)
            throw f;
          Fe(1, 0);
        }
      }
      function On(e, t, r, n) {
        var s = je();
        try {
          return ce(e)(t, r, n);
        } catch (l) {
          if (ke(s), l !== l + 0)
            throw l;
          Fe(1, 0);
        }
      }
      var Oe;
      ae = function e() {
        Oe || Ft(), Oe || (ae = e);
      };
      function Ft(e) {
        if (se > 0 || (zt(), se > 0))
          return;
        function t() {
          Oe || (Oe = !0, a.calledRun = !0, !ye && (Gt(), w(a), qt()));
        }
        t();
      }
      return Ft(), a.ready;
    };
  })();
  i.exports = p;
})(Sn);
const Dn = Ze, Wt = (i, d) => {
  const p = new XMLHttpRequest();
  return p.open("GET", i, !1), p.responseType = d ? "arraybuffer" : "text", p.send(null), p.response;
}, Rn = (i, d, p) => {
  const v = new XMLHttpRequest();
  v.open("GET", i, !0), v.responseType = "arraybuffer", v.onload = () => {
    if ((v.status === 200 || v.status === 0) && v.response)
      return d(v.response);
    p();
  }, v.onerror = p, v.send(null);
};
self.out = (i) => {
  i === "libass: No usable fontconfig configuration file found, using fallback." ? console.debug(i) : console.log(i);
};
self.err = (i) => {
  i === "Fontconfig error: Cannot load default config file: No such file: (null)" ? console.debug(i) : console.error(i);
};
let he = 0;
const Un = 1;
let z = null, Et = !1, et = Date.now(), Ee = 24, Mt = !1, Ht = "js", Se = {};
const St = {};
let Wn = 0, It;
self.width = 0;
self.height = 0;
let X = !1;
self.addFont = ({ font: i }) => tt(i);
const Ne = (i) => {
  if (i = i.trim().toLowerCase(), i.startsWith("@") && (i = i.substring(1)), !St[i]) {
    if (St[i] = !0, !Se[i] && Mt)
      return postMessage({ target: "getLocalFont", font: i });
    tt(Se[i]);
  }
}, tt = (i) => {
  ArrayBuffer.isView(i) ? Dt(i) : Rn(i, (d) => {
    Dt(new Uint8Array(d));
  }, console.error);
}, Dt = (i) => {
  const d = Module._malloc(i.byteLength);
  Module.HEAPU8.set(i, d), self.jassubObj.addFont("font-" + Wn++, d, i.byteLength), self.jassubObj.reloadFonts();
}, Lt = (i) => {
  if (!Se)
    return;
  const d = Ln(i);
  for (let C = 0; C < d.length; C++)
    for (let a = 0; a < d[C].body.length; a++)
      d[C].body[a].key === "Style" && Ne(d[C].body[a].value.Fontname);
  const p = /\\fn([^\\}]*?)[\\}]/g;
  let v;
  for (; (v = p.exec(i)) !== null; )
    Ne(v[1]);
};
self.setTrack = ({ content: i }) => {
  Lt(i), self.jassubObj.createTrackMem(i);
};
self.freeTrack = () => {
  self.jassubObj.removeTrack();
};
self.setTrackByUrl = ({ url: i }) => {
  self.setTrack({ content: Wt(i) });
};
const Mn = (i, d) => {
  self.width = i, self.height = d, self.jassubObj.resizeCanvas(i, d);
}, Hn = () => {
  const i = (Date.now() - et) / 1e3;
  return De ? he : (i > 5 && (console.error("Didn't received currentTime > 5 seconds. Assuming video was paused."), xt(!0)), he + i * Un);
}, In = (i) => {
  he = i, et = Date.now(), z || (Et ? z = nt(Re) : (Re(), setTimeout(() => {
    Et = !1;
  }, 20)));
};
let De = !0;
const xt = (i) => {
  i !== De && (De = i, i ? z && (clearTimeout(z), z = null) : (et = Date.now(), z = nt(Re)));
}, rt = (i, d) => {
  const p = Date.now();
  let v = null;
  if (Ht === "wasm" ? (v = self.jassubObj.renderBlend(i, d), v && (v.times = {
    renderTime: Date.now() - p - (v && v.time) | 0,
    blendTime: (v && v.time) | 0
  })) : (v = self.jassubObj.renderImage(i, d), v && (v.times = {
    renderTime: Date.now() - p - (v && v.time) | 0,
    cppDecodeTime: (v && v.time) | 0
  })), v && (self.jassubObj.changed !== 0 || d)) {
    const C = [];
    let a = [];
    const w = Date.now();
    if (X) {
      const _ = [];
      for (let b = v, P = 0; P < self.jassubObj.count; b = b.next, ++P)
        b.image && (C.push({ w: b.w, h: b.h, x: b.x, y: b.y }), _.push(createImageBitmap(new ImageData(new Uint8ClampedArray(Module.HEAPU8).subarray(b.image, b.image + b.w * b.h * 4), b.w, b.h))));
      Promise.all(_).then((b) => {
        for (let P = 0; P < C.length; P++)
          C[P].image = b[P];
        a = b, Rt({ images: C, buffers: a, times: v.times, decodeStartTime: w });
      });
    } else {
      for (let _ = v, b = 0; b < self.jassubObj.count; _ = _.next, ++b)
        if (_.image) {
          const P = { w: _.w, h: _.h, x: _.x, y: _.y, image: _.image };
          if (!ee) {
            const T = buffer.slice(_.image, _.image + _.w * _.h * 4);
            a.push(T), P.image = T;
          }
          C.push(P);
        }
      Rt({ images: C, buffers: a, times: v.times, decodeStartTime: w });
    }
  } else
    postMessage({
      target: "unbusy"
    });
};
self.demand = ({ time: i }) => {
  he = i, rt(i);
};
const Re = (i) => {
  z = 0, rt(Hn(), i), De || (z = nt(Re));
}, Rt = ({ times: i, images: d, decodeStartTime: p, buffers: v }) => {
  if (i.decodeTime = Date.now() - p, ee) {
    const C = Date.now();
    ve.width = self.width, ve.height !== self.height ? ve.height = self.height : ee.clearRect(0, 0, self.width, self.height);
    for (const a of d)
      a.image && (X ? (ee.drawImage(a.image, a.x, a.y), a.image.close()) : (self.bufferCanvas.width = a.w, self.bufferCanvas.height = a.h, self.bufferCtx.putImageData(new ImageData(new Uint8ClampedArray(Module.HEAPU8).subarray(a.image, a.image + a.w * a.h * 4), a.w, a.h), 0, 0), ee.drawImage(self.bufferCanvas, a.x, a.y)));
    if (It) {
      i.drawTime = Date.now() - C;
      let a = 0;
      for (const w in i)
        a += i[w];
      console.log("Bitmaps: " + d.length + " Total: " + Math.round(a) + "ms", i);
    }
    postMessage({
      target: "unbusy"
    });
  } else
    postMessage({
      target: "render",
      async: X,
      images: d,
      times: i,
      width: self.width,
      height: self.height
    }, v);
}, Ln = (i) => {
  let d, p, v, C, a, w, _, b, P, T;
  const D = [], k = i.split(/[\r\n]+/g);
  for (b = 0; b < k.length; b++)
    if (d = k[b].match(/^\[(.*)\]$/), d)
      p = null, D.push({
        name: d[1],
        body: []
      });
    else {
      if (/^\s*$/.test(k[b]) || D.length === 0)
        continue;
      if (T = D[D.length - 1].body, k[b][0] === ";")
        T.push({
          type: "comment",
          value: k[b].substring(1)
        });
      else {
        if (C = k[b].split(":"), a = C[0], w = C.slice(1).join(":").trim(), (p || a === "Format") && (w = w.split(","), p && w.length > p.length && (v = w.slice(p.length - 1).join(","), w = w.slice(0, p.length - 1), w.push(v)), w = w.map((te) => te.trim()), p)) {
          for (_ = {}, P = 0; P < w.length; P++)
            _[p[P]] = w[P];
          w = _;
        }
        a === "Format" && (p = w), T.push({
          key: a,
          value: w
        });
      }
    }
  return D;
}, nt = (() => {
  let i = 0;
  return (d) => {
    const p = Date.now();
    if (i === 0)
      i = p + 1e3 / Ee;
    else
      for (; p + 2 >= i; )
        i += 1e3 / Ee;
    const v = Math.max(i - p, 0);
    return setTimeout(d, v);
  };
})(), Ue = (i, d) => {
  for (const p of Object.keys(i))
    d[p] = i[p];
};
let Ut;
self.preInit = async (i) => {
  Ut = i.publicPath, globalThis.Module = await Dn({
    locateFile: (d) => `${Ut}${d.replace("/dist", "")}`
  }), postMessage({ target: "ready" });
};
self.init = (i) => {
  self.publicPath = i.publicPath, self.width = i.width, self.height = i.height, Ht = i.blendMode, X = i.asyncRender, X && typeof createImageBitmap > "u" && (X = !1, console.error("'createImageBitmap' needed for 'asyncRender' unsupported!")), Se = i.availableFonts, It = i.debug, Ee = i.targetFps || Ee, Mt = i.useLocalFonts;
  const d = i.fallbackFont.toLowerCase();
  self.jassubObj = new Module.JASSUB(self.width, self.height, d || null), d && Ne(d);
  let p = i.subContent;
  p || (p = Wt(i.subUrl)), Lt(p);
  for (const v of i.fonts || [])
    tt(v);
  self.jassubObj.createTrackMem(p), self.jassubObj.setDropAnimations(i.dropAllAnimations), (i.libassMemoryLimit > 0 || i.libassGlyphLimit > 0) && self.jassubObj.setMemoryLimits(i.libassGlyphLimit || 0, i.libassMemoryLimit || 0);
};
self.canvas = ({ width: i, height: d, force: p }) => {
  if (i == null)
    throw new Error("Invalid canvas size specified");
  Mn(i, d), p && rt(he);
};
self.video = ({ currentTime: i, isPaused: d, rate: p }) => {
  i != null && In(i), d != null && xt(d), p = p || p;
};
let ve, ee;
self.offscreenCanvas = ({ transferable: i }) => {
  ve = i[0], ee = ve.getContext("2d", { desynchronized: !0 }), X || (self.bufferCanvas = new OffscreenCanvas(self.height, self.width), self.bufferCtx = self.bufferCanvas.getContext("2d", { desynchronized: !0 }));
};
self.destroy = () => {
  self.jassubObj.quitLibrary();
};
self.createEvent = ({ event: i }) => {
  Ue(i, self.jassubObj.getEvent(self.jassubObj.allocEvent()));
};
self.getEvents = () => {
  const i = [];
  for (let d = 0; d < self.jassubObj.getEventCount(); d++) {
    const { Start: p, Duration: v, ReadOrder: C, Layer: a, Style: w, MarginL: _, MarginR: b, MarginV: P, Name: T, Text: D, Effect: k } = self.jassubObj.getEvent(d);
    i.push({ Start: p, Duration: v, ReadOrder: C, Layer: a, Style: w, MarginL: _, MarginR: b, MarginV: P, Name: T, Text: D, Effect: k });
  }
  postMessage({
    target: "getEvents",
    events: i
  });
};
self.setEvent = ({ event: i, index: d }) => {
  Ue(i, self.jassubObj.getEvent(d));
};
self.removeEvent = ({ index: i }) => {
  self.jassubObj.removeEvent(i);
};
self.createStyle = ({ style: i }) => {
  Ue(i, self.jassubObj.getStyle(self.jassubObj.allocStyle()));
};
self.getStyles = () => {
  const i = [];
  for (let d = 0; d < self.jassubObj.getStyleCount(); d++) {
    const { Name: p, FontName: v, FontSize: C, PrimaryColour: a, SecondaryColour: w, OutlineColour: _, BackColour: b, Bold: P, Italic: T, Underline: D, StrikeOut: k, ScaleX: te, ScaleY: x, Spacing: ge, Angle: K, BorderStyle: ye, Outline: We, Shadow: me, Alignment: Me, MarginL: Q, MarginR: He, MarginV: Ie, Encoding: Le, treat_fontname_as_pattern: re, Blur: ne, Justify: A } = self.jassubObj.getStyle(d);
    i.push({ Name: p, FontName: v, FontSize: C, PrimaryColour: a, SecondaryColour: w, OutlineColour: _, BackColour: b, Bold: P, Italic: T, Underline: D, StrikeOut: k, ScaleX: te, ScaleY: x, Spacing: ge, Angle: K, BorderStyle: ye, Outline: We, Shadow: me, Alignment: Me, MarginL: Q, MarginR: He, MarginV: Ie, Encoding: Le, treat_fontname_as_pattern: re, Blur: ne, Justify: A });
  }
  postMessage({
    target: "getStyles",
    time: Date.now(),
    styles: i
  });
};
self.setStyle = ({ style: i, index: d }) => {
  Ue(i, self.jassubObj.getStyle(d));
};
self.removeStyle = ({ index: i }) => {
  self.jassubObj.removeStyle(i);
};
onmessage = ({ data: i }) => {
  if (self[i.target])
    self[i.target](i);
  else
    throw new Error("Unknown event target " + i.target);
};
