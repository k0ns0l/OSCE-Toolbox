/*!
 * TinyMCE
 *
 * Copyright (c) 2023 Ephox Corporation DBA Tiny Technologies, Inc.
 * Licensed under the Tiny commercial license. See https://www.tiny.cloud/legal/
 *
 * Version: 6.4.1
 */
!function() {
    "use strict";
    var e = function(e) {
        if (null === e)
            return "null";
        if (void 0 === e)
            return "undefined";
        var t = typeof e;
        return "object" === t && (Array.prototype.isPrototypeOf(e) || e.constructor && "Array" === e.constructor.name) ? "array" : "object" === t && (String.prototype.isPrototypeOf(e) || e.constructor && "String" === e.constructor.name) ? "string" : t
    }
      , t = function(e) {
        return {
            eq: e
        }
    }
      , n = t((function(e, t) {
        return e === t
    }
    ))
      , o = function(e) {
        return t((function(t, n) {
            if (t.length !== n.length)
                return !1;
            for (var o = t.length, r = 0; r < o; r++)
                if (!e.eq(t[r], n[r]))
                    return !1;
            return !0
        }
        ))
    }
      , r = function(e) {
        return t((function(r, s) {
            var a = Object.keys(r)
              , i = Object.keys(s);
            if (!function(e, n) {
                return function(e, n) {
                    return t((function(t, o) {
                        return e.eq(n(t), n(o))
                    }
                    ))
                }(o(e), (function(e) {
                    return function(e, t) {
                        return Array.prototype.slice.call(e).sort(t)
                    }(e, n)
                }
                ))
            }(n).eq(a, i))
                return !1;
            for (var l = a.length, d = 0; d < l; d++) {
                var c = a[d];
                if (!e.eq(r[c], s[c]))
                    return !1
            }
            return !0
        }
        ))
    }
      , s = t((function(t, n) {
        if (t === n)
            return !0;
        var a = e(t);
        return a === e(n) && (function(e) {
            return -1 !== ["undefined", "boolean", "number", "string", "function", "xml", "null"].indexOf(e)
        }(a) ? t === n : "array" === a ? o(s).eq(t, n) : "object" === a && r(s).eq(t, n))
    }
    ));
    const a = Object.getPrototypeOf
      , i = (e,t,n)=>{
        var o;
        return !!n(e, t.prototype) || (null === (o = e.constructor) || void 0 === o ? void 0 : o.name) === t.name
    }
      , l = e=>t=>(e=>{
        const t = typeof e;
        return null === e ? "null" : "object" === t && Array.isArray(e) ? "array" : "object" === t && i(e, String, ((e,t)=>t.isPrototypeOf(e))) ? "string" : t
    }
    )(t) === e
      , d = e=>t=>typeof t === e
      , c = e=>t=>e === t
      , u = (e,t)=>f(e) && i(e, t, ((e,t)=>a(e) === t))
      , m = l("string")
      , f = l("object")
      , g = e=>u(e, Object)
      , p = l("array")
      , h = c(null)
      , b = d("boolean")
      , v = c(void 0)
      , y = e=>null == e
      , C = e=>!y(e)
      , w = d("function")
      , x = d("number")
      , k = (e,t)=>{
        if (p(e)) {
            for (let n = 0, o = e.length; n < o; ++n)
                if (!t(e[n]))
                    return !1;
            return !0
        }
        return !1
    }
      , E = ()=>{}
      , S = (e,t)=>(...n)=>e(t.apply(null, n))
      , _ = (e,t)=>n=>e(t(n))
      , N = e=>()=>e
      , R = e=>e
      , A = (e,t)=>e === t;
    function O(e, ...t) {
        return (...n)=>{
            const o = t.concat(n);
            return e.apply(null, o)
        }
    }
    const T = e=>t=>!e(t)
      , B = e=>()=>{
        throw new Error(e)
    }
      , D = e=>e()
      , P = e=>{
        e()
    }
      , L = N(!1)
      , M = N(!0);
    class I {
        constructor(e, t) {
            this.tag = e,
            this.value = t
        }
        static some(e) {
            return new I(!0,e)
        }
        static none() {
            return I.singletonNone
        }
        fold(e, t) {
            return this.tag ? t(this.value) : e()
        }
        isSome() {
            return this.tag
        }
        isNone() {
            return !this.tag
        }
        map(e) {
            return this.tag ? I.some(e(this.value)) : I.none()
        }
        bind(e) {
            return this.tag ? e(this.value) : I.none()
        }
        exists(e) {
            return this.tag && e(this.value)
        }
        forall(e) {
            return !this.tag || e(this.value)
        }
        filter(e) {
            return !this.tag || e(this.value) ? this : I.none()
        }
        getOr(e) {
            return this.tag ? this.value : e
        }
        or(e) {
            return this.tag ? this : e
        }
        getOrThunk(e) {
            return this.tag ? this.value : e()
        }
        orThunk(e) {
            return this.tag ? this : e()
        }
        getOrDie(e) {
            if (this.tag)
                return this.value;
            throw new Error(null != e ? e : "Called getOrDie on None")
        }
        static from(e) {
            return C(e) ? I.some(e) : I.none()
        }
        getOrNull() {
            return this.tag ? this.value : null
        }
        getOrUndefined() {
            return this.value
        }
        each(e) {
            this.tag && e(this.value)
        }
        toArray() {
            return this.tag ? [this.value] : []
        }
        toString() {
            return this.tag ? `some(${this.value})` : "none()"
        }
    }
    I.singletonNone = new I(!1);
    const F = Array.prototype.slice
      , U = Array.prototype.indexOf
      , z = Array.prototype.push
      , j = (e,t)=>U.call(e, t)
      , H = (e,t)=>j(e, t) > -1
      , $ = (e,t)=>{
        for (let n = 0, o = e.length; n < o; n++)
            if (t(e[n], n))
                return !0;
        return !1
    }
      , V = (e,t)=>{
        const n = e.length
          , o = new Array(n);
        for (let r = 0; r < n; r++) {
            const n = e[r];
            o[r] = t(n, r)
        }
        return o
    }
      , q = (e,t)=>{
        for (let n = 0, o = e.length; n < o; n++)
            t(e[n], n)
    }
      , W = (e,t)=>{
        for (let n = e.length - 1; n >= 0; n--)
            t(e[n], n)
    }
      , K = (e,t)=>{
        const n = []
          , o = [];
        for (let r = 0, s = e.length; r < s; r++) {
            const s = e[r];
            (t(s, r) ? n : o).push(s)
        }
        return {
            pass: n,
            fail: o
        }
    }
      , G = (e,t)=>{
        const n = [];
        for (let o = 0, r = e.length; o < r; o++) {
            const r = e[o];
            t(r, o) && n.push(r)
        }
        return n
    }
      , Y = (e,t,n)=>(W(e, ((e,o)=>{
        n = t(n, e, o)
    }
    )),
    n)
      , X = (e,t,n)=>(q(e, ((e,o)=>{
        n = t(n, e, o)
    }
    )),
    n)
      , Q = (e,t,n)=>{
        for (let o = 0, r = e.length; o < r; o++) {
            const r = e[o];
            if (t(r, o))
                return I.some(r);
            if (n(r, o))
                break
        }
        return I.none()
    }
      , J = (e,t)=>Q(e, t, L)
      , Z = (e,t)=>{
        for (let n = 0, o = e.length; n < o; n++)
            if (t(e[n], n))
                return I.some(n);
        return I.none()
    }
      , ee = e=>{
        const t = [];
        for (let n = 0, o = e.length; n < o; ++n) {
            if (!p(e[n]))
                throw new Error("Arr.flatten item " + n + " was not an array, input: " + e);
            z.apply(t, e[n])
        }
        return t
    }
      , te = (e,t)=>ee(V(e, t))
      , ne = (e,t)=>{
        for (let n = 0, o = e.length; n < o; ++n)
            if (!0 !== t(e[n], n))
                return !1;
        return !0
    }
      , oe = e=>{
        const t = F.call(e, 0);
        return t.reverse(),
        t
    }
      , re = (e,t)=>G(e, (e=>!H(t, e)))
      , se = (e,t)=>{
        const n = {};
        for (let o = 0, r = e.length; o < r; o++) {
            const r = e[o];
            n[String(r)] = t(r, o)
        }
        return n
    }
      , ae = (e,t)=>{
        const n = F.call(e, 0);
        return n.sort(t),
        n
    }
      , ie = (e,t)=>t >= 0 && t < e.length ? I.some(e[t]) : I.none()
      , le = e=>ie(e, 0)
      , de = e=>ie(e, e.length - 1)
      , ce = w(Array.from) ? Array.from : e=>F.call(e)
      , ue = (e,t)=>{
        for (let n = 0; n < e.length; n++) {
            const o = t(e[n], n);
            if (o.isSome())
                return o
        }
        return I.none()
    }
      , me = Object.keys
      , fe = Object.hasOwnProperty
      , ge = (e,t)=>{
        const n = me(e);
        for (let o = 0, r = n.length; o < r; o++) {
            const r = n[o];
            t(e[r], r)
        }
    }
      , pe = (e,t)=>he(e, ((e,n)=>({
        k: n,
        v: t(e, n)
    })))
      , he = (e,t)=>{
        const n = {};
        return ge(e, ((e,o)=>{
            const r = t(e, o);
            n[r.k] = r.v
        }
        )),
        n
    }
      , be = e=>(t,n)=>{
        e[n] = t
    }
      , ve = (e,t,n,o)=>{
        ge(e, ((e,r)=>{
            (t(e, r) ? n : o)(e, r)
        }
        ))
    }
      , ye = (e,t)=>{
        const n = {};
        return ve(e, t, be(n), E),
        n
    }
      , Ce = (e,t)=>{
        const n = [];
        return ge(e, ((e,o)=>{
            n.push(t(e, o))
        }
        )),
        n
    }
      , we = e=>Ce(e, R)
      , xe = (e,t)=>ke(e, t) ? I.from(e[t]) : I.none()
      , ke = (e,t)=>fe.call(e, t)
      , Ee = (e,t)=>ke(e, t) && void 0 !== e[t] && null !== e[t]
      , Se = e=>{
        const t = {};
        return q(e, (e=>{
            t[e] = {}
        }
        )),
        me(t)
    }
      , _e = e=>void 0 !== e.length
      , Ne = Array.isArray
      , Re = (e,t,n)=>{
        if (!e)
            return !1;
        if (n = n || e,
        _e(e)) {
            for (let o = 0, r = e.length; o < r; o++)
                if (!1 === t.call(n, e[o], o, e))
                    return !1
        } else
            for (const o in e)
                if (ke(e, o) && !1 === t.call(n, e[o], o, e))
                    return !1;
        return !0
    }
      , Ae = (e,t)=>{
        const n = [];
        return Re(e, ((o,r)=>{
            n.push(t(o, r, e))
        }
        )),
        n
    }
      , Oe = (e,t)=>{
        const n = [];
        return Re(e, ((o,r)=>{
            t && !t(o, r, e) || n.push(o)
        }
        )),
        n
    }
      , Te = (e,t,n,o)=>{
        let r = v(n) ? e[0] : n;
        for (let n = 0; n < e.length; n++)
            r = t.call(o, r, e[n], n);
        return r
    }
      , Be = (e,t,n)=>{
        for (let o = 0, r = e.length; o < r; o++)
            if (t.call(n, e[o], o, e))
                return o;
        return -1
    }
      , De = e=>e[e.length - 1]
      , Pe = e=>{
        let t, n = !1;
        return (...o)=>(n || (n = !0,
        t = e.apply(null, o)),
        t)
    }
      , Le = ()=>Me(0, 0)
      , Me = (e,t)=>({
        major: e,
        minor: t
    })
      , Ie = {
        nu: Me,
        detect: (e,t)=>{
            const n = String(t).toLowerCase();
            return 0 === e.length ? Le() : ((e,t)=>{
                const n = ((e,t)=>{
                    for (let n = 0; n < e.length; n++) {
                        const o = e[n];
                        if (o.test(t))
                            return o
                    }
                }
                )(e, t);
                if (!n)
                    return {
                        major: 0,
                        minor: 0
                    };
                const o = e=>Number(t.replace(n, "$" + e));
                return Me(o(1), o(2))
            }
            )(e, n)
        }
        ,
        unknown: Le
    }
      , Fe = (e,t)=>{
        const n = String(t).toLowerCase();
        return J(e, (e=>e.search(n)))
    }
      , Ue = (e,t,n)=>"" === t || e.length >= t.length && e.substr(n, n + t.length) === t
      , ze = (e,t)=>He(e, t) ? ((e,t)=>e.substring(t))(e, t.length) : e
      , je = (e,t,n=0,o)=>{
        const r = e.indexOf(t, n);
        return -1 !== r && (!!v(o) || r + t.length <= o)
    }
      , He = (e,t)=>Ue(e, t, 0)
      , $e = (e,t)=>Ue(e, t, e.length - t.length)
      , Ve = e=>t=>t.replace(e, "")
      , qe = Ve(/^\s+|\s+$/g)
      , We = Ve(/^\s+/g)
      , Ke = Ve(/\s+$/g)
      , Ge = e=>e.length > 0
      , Ye = e=>!Ge(e)
      , Xe = (e,t=10)=>{
        const n = parseInt(e, t);
        return isNaN(n) ? I.none() : I.some(n)
    }
      , Qe = /.*?version\/\ ?([0-9]+)\.([0-9]+).*/
      , Je = e=>t=>je(t, e)
      , Ze = [{
        name: "Edge",
        versionRegexes: [/.*?edge\/ ?([0-9]+)\.([0-9]+)$/],
        search: e=>je(e, "edge/") && je(e, "chrome") && je(e, "safari") && je(e, "applewebkit")
    }, {
        name: "Chromium",
        brand: "Chromium",
        versionRegexes: [/.*?chrome\/([0-9]+)\.([0-9]+).*/, Qe],
        search: e=>je(e, "chrome") && !je(e, "chromeframe")
    }, {
        name: "IE",
        versionRegexes: [/.*?msie\ ?([0-9]+)\.([0-9]+).*/, /.*?rv:([0-9]+)\.([0-9]+).*/],
        search: e=>je(e, "msie") || je(e, "trident")
    }, {
        name: "Opera",
        versionRegexes: [Qe, /.*?opera\/([0-9]+)\.([0-9]+).*/],
        search: Je("opera")
    }, {
        name: "Firefox",
        versionRegexes: [/.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/],
        search: Je("firefox")
    }, {
        name: "Safari",
        versionRegexes: [Qe, /.*?cpu os ([0-9]+)_([0-9]+).*/],
        search: e=>(je(e, "safari") || je(e, "mobile/")) && je(e, "applewebkit")
    }]
      , et = [{
        name: "Windows",
        search: Je("win"),
        versionRegexes: [/.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/]
    }, {
        name: "iOS",
        search: e=>je(e, "iphone") || je(e, "ipad"),
        versionRegexes: [/.*?version\/\ ?([0-9]+)\.([0-9]+).*/, /.*cpu os ([0-9]+)_([0-9]+).*/, /.*cpu iphone os ([0-9]+)_([0-9]+).*/]
    }, {
        name: "Android",
        search: Je("android"),
        versionRegexes: [/.*?android\ ?([0-9]+)\.([0-9]+).*/]
    }, {
        name: "macOS",
        search: Je("mac os x"),
        versionRegexes: [/.*?mac\ os\ x\ ?([0-9]+)_([0-9]+).*/]
    }, {
        name: "Linux",
        search: Je("linux"),
        versionRegexes: []
    }, {
        name: "Solaris",
        search: Je("sunos"),
        versionRegexes: []
    }, {
        name: "FreeBSD",
        search: Je("freebsd"),
        versionRegexes: []
    }, {
        name: "ChromeOS",
        search: Je("cros"),
        versionRegexes: [/.*?chrome\/([0-9]+)\.([0-9]+).*/]
    }]
      , tt = {
        browsers: N(Ze),
        oses: N(et)
    }
      , nt = "Edge"
      , ot = "Chromium"
      , rt = "Opera"
      , st = "Firefox"
      , at = "Safari"
      , it = e=>{
        const t = e.current
          , n = e.version
          , o = e=>()=>t === e;
        return {
            current: t,
            version: n,
            isEdge: o(nt),
            isChromium: o(ot),
            isIE: o("IE"),
            isOpera: o(rt),
            isFirefox: o(st),
            isSafari: o(at)
        }
    }
      , lt = ()=>it({
        current: void 0,
        version: Ie.unknown()
    })
      , dt = it
      , ct = (N(nt),
    N(ot),
    N("IE"),
    N(rt),
    N(st),
    N(at),
    "Windows")
      , ut = "Android"
      , mt = "Linux"
      , ft = "macOS"
      , gt = "Solaris"
      , pt = "FreeBSD"
      , ht = "ChromeOS"
      , bt = e=>{
        const t = e.current
          , n = e.version
          , o = e=>()=>t === e;
        return {
            current: t,
            version: n,
            isWindows: o(ct),
            isiOS: o("iOS"),
            isAndroid: o(ut),
            isMacOS: o(ft),
            isLinux: o(mt),
            isSolaris: o(gt),
            isFreeBSD: o(pt),
            isChromeOS: o(ht)
        }
    }
      , vt = ()=>bt({
        current: void 0,
        version: Ie.unknown()
    })
      , yt = bt
      , Ct = (N(ct),
    N("iOS"),
    N(ut),
    N(mt),
    N(ft),
    N(gt),
    N(pt),
    N(ht),
    e=>window.matchMedia(e).matches);
    let wt = Pe((()=>((e,t,n)=>{
        const o = tt.browsers()
          , r = tt.oses()
          , s = t.bind((e=>((e,t)=>ue(t.brands, (t=>{
            const n = t.brand.toLowerCase();
            return J(e, (e=>{
                var t;
                return n === (null === (t = e.brand) || void 0 === t ? void 0 : t.toLowerCase())
            }
            )).map((e=>({
                current: e.name,
                version: Ie.nu(parseInt(t.version, 10), 0)
            })))
        }
        )))(o, e))).orThunk((()=>((e,t)=>Fe(e, t).map((e=>{
            const n = Ie.detect(e.versionRegexes, t);
            return {
                current: e.name,
                version: n
            }
        }
        )))(o, e))).fold(lt, dt)
          , a = ((e,t)=>Fe(e, t).map((e=>{
            const n = Ie.detect(e.versionRegexes, t);
            return {
                current: e.name,
                version: n
            }
        }
        )))(r, e).fold(vt, yt)
          , i = ((e,t,n,o)=>{
            const r = e.isiOS() && !0 === /ipad/i.test(n)
              , s = e.isiOS() && !r
              , a = e.isiOS() || e.isAndroid()
              , i = a || o("(pointer:coarse)")
              , l = r || !s && a && o("(min-device-width:768px)")
              , d = s || a && !l
              , c = t.isSafari() && e.isiOS() && !1 === /safari/i.test(n)
              , u = !d && !l && !c;
            return {
                isiPad: N(r),
                isiPhone: N(s),
                isTablet: N(l),
                isPhone: N(d),
                isTouch: N(i),
                isAndroid: e.isAndroid,
                isiOS: e.isiOS,
                isWebView: N(c),
                isDesktop: N(u)
            }
        }
        )(a, s, e, n);
        return {
            browser: s,
            os: a,
            deviceType: i
        }
    }
    )(navigator.userAgent, I.from(navigator.userAgentData), Ct)));
    const xt = ()=>wt()
      , kt = navigator.userAgent
      , Et = xt()
      , St = Et.browser
      , _t = Et.os
      , Nt = Et.deviceType
      , Rt = -1 !== kt.indexOf("Windows Phone")
      , At = {
        transparentSrc: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
        documentMode: St.isIE() ? document.documentMode || 7 : 10,
        cacheSuffix: null,
        container: null,
        canHaveCSP: !St.isIE(),
        windowsPhone: Rt,
        browser: {
            current: St.current,
            version: St.version,
            isChromium: St.isChromium,
            isEdge: St.isEdge,
            isFirefox: St.isFirefox,
            isIE: St.isIE,
            isOpera: St.isOpera,
            isSafari: St.isSafari
        },
        os: {
            current: _t.current,
            version: _t.version,
            isAndroid: _t.isAndroid,
            isChromeOS: _t.isChromeOS,
            isFreeBSD: _t.isFreeBSD,
            isiOS: _t.isiOS,
            isLinux: _t.isLinux,
            isMacOS: _t.isMacOS,
            isSolaris: _t.isSolaris,
            isWindows: _t.isWindows
        },
        deviceType: {
            isDesktop: Nt.isDesktop,
            isiPad: Nt.isiPad,
            isiPhone: Nt.isiPhone,
            isPhone: Nt.isPhone,
            isTablet: Nt.isTablet,
            isTouch: Nt.isTouch,
            isWebView: Nt.isWebView
        }
    }
      , Ot = /^\s*|\s*$/g
      , Tt = e=>y(e) ? "" : ("" + e).replace(Ot, "")
      , Bt = function(e, t, n, o) {
        o = o || this,
        e && (n && (e = e[n]),
        Re(e, ((e,r)=>!1 !== t.call(o, e, r, n) && (Bt(e, t, n, o),
        !0))))
    }
      , Dt = {
        trim: Tt,
        isArray: Ne,
        is: (e,t)=>t ? !("array" !== t || !Ne(e)) || typeof e === t : void 0 !== e,
        toArray: e=>{
            if (Ne(e))
                return e;
            {
                const t = [];
                for (let n = 0, o = e.length; n < o; n++)
                    t[n] = e[n];
                return t
            }
        }
        ,
        makeMap: (e,t,n={})=>{
            const o = m(e) ? e.split(t || ",") : e || [];
            let r = o.length;
            for (; r--; )
                n[o[r]] = {};
            return n
        }
        ,
        each: Re,
        map: Ae,
        grep: Oe,
        inArray: (e,t)=>{
            if (e)
                for (let n = 0, o = e.length; n < o; n++)
                    if (e[n] === t)
                        return n;
            return -1
        }
        ,
        hasOwn: ke,
        extend: (e,...t)=>{
            for (let n = 0; n < t.length; n++) {
                const o = t[n];
                for (const t in o)
                    if (ke(o, t)) {
                        const n = o[t];
                        void 0 !== n && (e[t] = n)
                    }
            }
            return e
        }
        ,
        walk: Bt,
        resolve: (e,t=window)=>{
            const n = e.split(".");
            for (let e = 0, o = n.length; e < o && (t = t[n[e]]); e++)
                ;
            return t
        }
        ,
        explode: (e,t)=>p(e) ? e : "" === e ? [] : Ae(e.split(t || ","), Tt),
        _addCacheSuffix: e=>{
            const t = At.cacheSuffix;
            return t && (e += (-1 === e.indexOf("?") ? "?" : "&") + t),
            e
        }
    }
      , Pt = (e,t,n=A)=>e.exists((e=>n(e, t)))
      , Lt = (e,t,n)=>e.isSome() && t.isSome() ? I.some(n(e.getOrDie(), t.getOrDie())) : I.none()
      , Mt = (e,t)=>e ? I.some(t) : I.none()
      , It = "undefined" != typeof window ? window : Function("return this;")()
      , Ft = (e,t)=>((e,t)=>{
        let n = null != t ? t : It;
        for (let t = 0; t < e.length && null != n; ++t)
            n = n[e[t]];
        return n
    }
    )(e.split("."), t)
      , Ut = Object.getPrototypeOf
      , zt = e=>{
        const t = Ft("ownerDocument.defaultView", e);
        return f(e) && ((e=>((e,t)=>{
            const n = ((e,t)=>Ft(e, t))(e, t);
            if (null == n)
                throw new Error(e + " not available on this browser");
            return n
        }
        )("HTMLElement", e))(t).prototype.isPrototypeOf(e) || /^HTML\w*Element$/.test(Ut(e).constructor.name))
    }
      , jt = e=>e.dom.nodeName.toLowerCase()
      , Ht = e=>e.dom.nodeType
      , $t = e=>t=>Ht(t) === e
      , Vt = $t(1)
      , qt = $t(3)
      , Wt = $t(9)
      , Kt = $t(11)
      , Gt = e=>t=>Vt(t) && jt(t) === e
      , Yt = (e,t,n)=>{
        if (!(m(n) || b(n) || x(n)))
            throw console.error("Invalid call to Attribute.set. Key ", t, ":: Value ", n, ":: Element ", e),
            new Error("Attribute value was not simple");
        e.setAttribute(t, n + "")
    }
      , Xt = (e,t,n)=>{
        Yt(e.dom, t, n)
    }
      , Qt = (e,t)=>{
        const n = e.dom;
        ge(t, ((e,t)=>{
            Yt(n, t, e)
        }
        ))
    }
      , Jt = (e,t)=>{
        const n = e.dom.getAttribute(t);
        return null === n ? void 0 : n
    }
      , Zt = (e,t)=>I.from(Jt(e, t))
      , en = (e,t)=>{
        const n = e.dom;
        return !(!n || !n.hasAttribute) && n.hasAttribute(t)
    }
      , tn = (e,t)=>{
        e.dom.removeAttribute(t)
    }
      , nn = e=>X(e.dom.attributes, ((e,t)=>(e[t.name] = t.value,
    e)), {})
      , on = (e,t)=>{
        const n = Jt(e, t);
        return void 0 === n || "" === n ? [] : n.split(" ")
    }
      , rn = e=>void 0 !== e.dom.classList
      , sn = e=>on(e, "class")
      , an = (e,t)=>((e,t,n)=>{
        const o = on(e, t).concat([n]);
        return Xt(e, t, o.join(" ")),
        !0
    }
    )(e, "class", t)
      , ln = (e,t)=>((e,t,n)=>{
        const o = G(on(e, t), (e=>e !== n));
        return o.length > 0 ? Xt(e, t, o.join(" ")) : tn(e, t),
        !1
    }
    )(e, "class", t)
      , dn = (e,t)=>{
        rn(e) ? e.dom.classList.add(t) : an(e, t)
    }
      , cn = e=>{
        0 === (rn(e) ? e.dom.classList : sn(e)).length && tn(e, "class")
    }
      , un = (e,t)=>{
        rn(e) ? e.dom.classList.remove(t) : ln(e, t),
        cn(e)
    }
      , mn = (e,t)=>rn(e) && e.dom.classList.contains(t)
      , fn = e=>{
        if (null == e)
            throw new Error("Node cannot be null or undefined");
        return {
            dom: e
        }
    }
      , gn = (e,t)=>{
        const n = (t || document).createElement("div");
        if (n.innerHTML = e,
        !n.hasChildNodes() || n.childNodes.length > 1) {
            const t = "HTML does not have a single root node";
            throw console.error(t, e),
            new Error(t)
        }
        return fn(n.childNodes[0])
    }
      , pn = (e,t)=>{
        const n = (t || document).createElement(e);
        return fn(n)
    }
      , hn = (e,t)=>{
        const n = (t || document).createTextNode(e);
        return fn(n)
    }
      , bn = fn
      , vn = (e,t,n)=>I.from(e.dom.elementFromPoint(t, n)).map(fn)
      , yn = (e,t)=>{
        const n = []
          , o = e=>(n.push(e),
        t(e));
        let r = t(e);
        do {
            r = r.bind(o)
        } while (r.isSome());
        return n
    }
      , Cn = (e,t)=>{
        const n = e.dom;
        if (1 !== n.nodeType)
            return !1;
        {
            const e = n;
            if (void 0 !== e.matches)
                return e.matches(t);
            if (void 0 !== e.msMatchesSelector)
                return e.msMatchesSelector(t);
            if (void 0 !== e.webkitMatchesSelector)
                return e.webkitMatchesSelector(t);
            if (void 0 !== e.mozMatchesSelector)
                return e.mozMatchesSelector(t);
            throw new Error("Browser lacks native selectors")
        }
    }
      , wn = e=>1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType || 0 === e.childElementCount
      , xn = (e,t)=>e.dom === t.dom
      , kn = (e,t)=>{
        const n = e.dom
          , o = t.dom;
        return n !== o && n.contains(o)
    }
      , En = e=>bn(e.dom.ownerDocument)
      , Sn = e=>Wt(e) ? e : En(e)
      , _n = e=>bn(Sn(e).dom.defaultView)
      , Nn = e=>I.from(e.dom.parentNode).map(bn)
      , Rn = e=>I.from(e.dom.parentElement).map(bn)
      , An = (e,t)=>{
        const n = w(t) ? t : L;
        let o = e.dom;
        const r = [];
        for (; null !== o.parentNode && void 0 !== o.parentNode; ) {
            const e = o.parentNode
              , t = bn(e);
            if (r.push(t),
            !0 === n(t))
                break;
            o = e
        }
        return r
    }
      , On = e=>I.from(e.dom.previousSibling).map(bn)
      , Tn = e=>I.from(e.dom.nextSibling).map(bn)
      , Bn = e=>oe(yn(e, On))
      , Dn = e=>yn(e, Tn)
      , Pn = e=>V(e.dom.childNodes, bn)
      , Ln = (e,t)=>{
        const n = e.dom.childNodes;
        return I.from(n[t]).map(bn)
    }
      , Mn = e=>Ln(e, 0)
      , In = e=>Ln(e, e.dom.childNodes.length - 1)
      , Fn = e=>e.dom.childNodes.length
      , Un = e=>Kt(e) && C(e.dom.host)
      , zn = w(Element.prototype.attachShadow) && w(Node.prototype.getRootNode)
      , jn = N(zn)
      , Hn = zn ? e=>bn(e.dom.getRootNode()) : Sn
      , $n = e=>Un(e) ? e : (e=>{
        const t = e.dom.head;
        if (null == t)
            throw new Error("Head is not available yet");
        return bn(t)
    }
    )(Sn(e))
      , Vn = e=>bn(e.dom.host)
      , qn = e=>{
        if (jn() && C(e.target)) {
            const t = bn(e.target);
            if (Vt(t) && Wn(t) && e.composed && e.composedPath) {
                const t = e.composedPath();
                if (t)
                    return le(t)
            }
        }
        return I.from(e.target)
    }
      , Wn = e=>C(e.dom.shadowRoot)
      , Kn = e=>{
        const t = qt(e) ? e.dom.parentNode : e.dom;
        if (null == t || null === t.ownerDocument)
            return !1;
        const n = t.ownerDocument;
        return (e=>{
            const t = Hn(e);
            return Un(t) ? I.some(t) : I.none()
        }
        )(bn(t)).fold((()=>n.body.contains(t)), _(Kn, Vn))
    }
    ;
    var Gn = (e,t,n,o,r)=>e(n, o) ? I.some(n) : w(r) && r(n) ? I.none() : t(n, o, r);
    const Yn = (e,t,n)=>{
        let o = e.dom;
        const r = w(n) ? n : L;
        for (; o.parentNode; ) {
            o = o.parentNode;
            const e = bn(o);
            if (t(e))
                return I.some(e);
            if (r(e))
                break
        }
        return I.none()
    }
      , Xn = (e,t,n)=>Gn(((e,t)=>t(e)), Yn, e, t, n)
      , Qn = (e,t,n)=>Yn(e, (e=>Cn(e, t)), n)
      , Jn = (e,t)=>((e,t)=>{
        const n = void 0 === t ? document : t.dom;
        return wn(n) ? I.none() : I.from(n.querySelector(e)).map(bn)
    }
    )(t, e)
      , Zn = (e,t,n)=>Gn(((e,t)=>Cn(e, t)), Qn, e, t, n)
      , eo = (e,t=!1)=>{
        return Kn(e) ? e.dom.isContentEditable : (n = e,
        Zn(n, "[contenteditable]")).fold(N(t), (e=>"true" === to(e)));
        var n
    }
      , to = e=>e.dom.contentEditable
      , no = e=>void 0 !== e.style && w(e.style.getPropertyValue)
      , oo = (e,t,n)=>{
        if (!m(n))
            throw console.error("Invalid call to CSS.set. Property ", t, ":: Value ", n, ":: Element ", e),
            new Error("CSS value must be a string: " + n);
        no(e) && e.style.setProperty(t, n)
    }
      , ro = (e,t,n)=>{
        const o = e.dom;
        oo(o, t, n)
    }
      , so = (e,t)=>{
        const n = e.dom;
        ge(t, ((e,t)=>{
            oo(n, t, e)
        }
        ))
    }
      , ao = (e,t)=>{
        const n = e.dom
          , o = window.getComputedStyle(n).getPropertyValue(t);
        return "" !== o || Kn(e) ? o : io(n, t)
    }
      , io = (e,t)=>no(e) ? e.style.getPropertyValue(t) : ""
      , lo = (e,t)=>{
        const n = e.dom
          , o = io(n, t);
        return I.from(o).filter((e=>e.length > 0))
    }
      , co = e=>{
        const t = {}
          , n = e.dom;
        if (no(n))
            for (let e = 0; e < n.style.length; e++) {
                const o = n.style.item(e);
                t[o] = n.style[o]
            }
        return t
    }
      , uo = (e,t)=>{
        ((e,t)=>{
            no(e) && e.style.removeProperty(t)
        }
        )(e.dom, t),
        Pt(Zt(e, "style").map(qe), "") && tn(e, "style")
    }
      , mo = (e,t)=>{
        Nn(e).each((n=>{
            n.dom.insertBefore(t.dom, e.dom)
        }
        ))
    }
      , fo = (e,t)=>{
        Tn(e).fold((()=>{
            Nn(e).each((e=>{
                po(e, t)
            }
            ))
        }
        ), (e=>{
            mo(e, t)
        }
        ))
    }
      , go = (e,t)=>{
        Mn(e).fold((()=>{
            po(e, t)
        }
        ), (n=>{
            e.dom.insertBefore(t.dom, n.dom)
        }
        ))
    }
      , po = (e,t)=>{
        e.dom.appendChild(t.dom)
    }
      , ho = (e,t)=>{
        mo(e, t),
        po(t, e)
    }
      , bo = (e,t)=>{
        q(t, (t=>{
            po(e, t)
        }
        ))
    }
      , vo = e=>{
        e.dom.textContent = "",
        q(Pn(e), (e=>{
            yo(e)
        }
        ))
    }
      , yo = e=>{
        const t = e.dom;
        null !== t.parentNode && t.parentNode.removeChild(t)
    }
      , Co = e=>{
        const t = Pn(e);
        var n, o;
        t.length > 0 && (n = e,
        q(o = t, ((e,t)=>{
            const r = 0 === t ? n : o[t - 1];
            fo(r, e)
        }
        ))),
        yo(e)
    }
      , wo = e=>V(e, bn)
      , xo = e=>e.dom.innerHTML
      , ko = (e,t)=>{
        const n = En(e).dom
          , o = bn(n.createDocumentFragment())
          , r = ((e,t)=>{
            const n = (t || document).createElement("div");
            return n.innerHTML = e,
            Pn(bn(n))
        }
        )(t, n);
        bo(o, r),
        vo(e),
        po(e, o)
    }
      , Eo = (e,t,n,o)=>((e,t,n,o,r)=>{
        const s = ((e,t)=>n=>{
            e(n) && t((e=>{
                const t = bn(qn(e).getOr(e.target))
                  , n = ()=>e.stopPropagation()
                  , o = ()=>e.preventDefault()
                  , r = S(o, n);
                return ((e,t,n,o,r,s,a)=>({
                    target: e,
                    x: t,
                    y: n,
                    stop: o,
                    prevent: r,
                    kill: s,
                    raw: a
                }))(t, e.clientX, e.clientY, n, o, r, e)
            }
            )(n))
        }
        )(n, o);
        return e.dom.addEventListener(t, s, false),
        {
            unbind: O(So, e, t, s, false)
        }
    }
    )(e, t, n, o)
      , So = (e,t,n,o)=>{
        e.dom.removeEventListener(t, n, o)
    }
      , _o = (e,t)=>({
        left: e,
        top: t,
        translate: (n,o)=>_o(e + n, t + o)
    })
      , No = _o
      , Ro = (e,t)=>void 0 !== e ? e : void 0 !== t ? t : 0
      , Ao = e=>{
        const t = e.dom
          , n = t.ownerDocument.body;
        return n === t ? No(n.offsetLeft, n.offsetTop) : Kn(e) ? (e=>{
            const t = e.getBoundingClientRect();
            return No(t.left, t.top)
        }
        )(t) : No(0, 0)
    }
      , Oo = e=>{
        const t = void 0 !== e ? e.dom : document
          , n = t.body.scrollLeft || t.documentElement.scrollLeft
          , o = t.body.scrollTop || t.documentElement.scrollTop;
        return No(n, o)
    }
      , To = (e,t,n)=>{
        const o = (void 0 !== n ? n.dom : document).defaultView;
        o && o.scrollTo(e, t)
    }
      , Bo = (e,t)=>{
        xt().browser.isSafari() && w(e.dom.scrollIntoViewIfNeeded) ? e.dom.scrollIntoViewIfNeeded(!1) : e.dom.scrollIntoView(t)
    }
      , Do = (e,t,n,o)=>({
        x: e,
        y: t,
        width: n,
        height: o,
        right: e + n,
        bottom: t + o
    })
      , Po = e=>{
        const t = void 0 === e ? window : e
          , n = t.document
          , o = Oo(bn(n));
        return (e=>{
            const t = void 0 === e ? window : e;
            return xt().browser.isFirefox() ? I.none() : I.from(t.visualViewport)
        }
        )(t).fold((()=>{
            const e = t.document.documentElement
              , n = e.clientWidth
              , r = e.clientHeight;
            return Do(o.left, o.top, n, r)
        }
        ), (e=>Do(Math.max(e.pageLeft, o.left), Math.max(e.pageTop, o.top), e.width, e.height)))
    }
      , Lo = (e,t)=>{
        let n = [];
        return q(Pn(e), (e=>{
            t(e) && (n = n.concat([e])),
            n = n.concat(Lo(e, t))
        }
        )),
        n
    }
      , Mo = (e,t)=>((e,t)=>{
        const n = void 0 === t ? document : t.dom;
        return wn(n) ? [] : V(n.querySelectorAll(e), bn)
    }
    )(t, e)
      , Io = (e,t,n)=>Qn(e, t, n).isSome();
    class Fo {
        constructor(e, t) {
            this.node = e,
            this.rootNode = t,
            this.current = this.current.bind(this),
            this.next = this.next.bind(this),
            this.prev = this.prev.bind(this),
            this.prev2 = this.prev2.bind(this)
        }
        current() {
            return this.node
        }
        next(e) {
            return this.node = this.findSibling(this.node, "firstChild", "nextSibling", e),
            this.node
        }
        prev(e) {
            return this.node = this.findSibling(this.node, "lastChild", "previousSibling", e),
            this.node
        }
        prev2(e) {
            return this.node = this.findPreviousNode(this.node, e),
            this.node
        }
        findSibling(e, t, n, o) {
            if (e) {
                if (!o && e[t])
                    return e[t];
                if (e !== this.rootNode) {
                    let t = e[n];
                    if (t)
                        return t;
                    for (let o = e.parentNode; o && o !== this.rootNode; o = o.parentNode)
                        if (t = o[n],
                        t)
                            return t
                }
            }
        }
        findPreviousNode(e, t) {
            if (e) {
                const n = e.previousSibling;
                if (this.rootNode && n === this.rootNode)
                    return;
                if (n) {
                    if (!t)
                        for (let e = n.lastChild; e; e = e.lastChild)
                            if (!e.lastChild)
                                return e;
                    return n
                }
                const o = e.parentNode;
                if (o && o !== this.rootNode)
                    return o
            }
        }
    }
    const Uo = e=>t=>!!t && t.nodeType === e
      , zo = e=>!!e && !Object.getPrototypeOf(e)
      , jo = Uo(1)
      , Ho = e=>{
        const t = e.toLowerCase();
        return e=>C(e) && e.nodeName.toLowerCase() === t
    }
      , $o = e=>{
        const t = e.map((e=>e.toLowerCase()));
        return e=>{
            if (e && e.nodeName) {
                const n = e.nodeName.toLowerCase();
                return H(t, n)
            }
            return !1
        }
    }
      , Vo = (e,t)=>{
        const n = t.toLowerCase().split(" ");
        return t=>{
            if (jo(t)) {
                const o = t.ownerDocument.defaultView;
                if (o)
                    for (let r = 0; r < n.length; r++) {
                        const s = o.getComputedStyle(t, null);
                        if ((s ? s.getPropertyValue(e) : null) === n[r])
                            return !0
                    }
            }
            return !1
        }
    }
      , qo = e=>t=>jo(t) && t.hasAttribute(e)
      , Wo = e=>jo(e) && e.hasAttribute("data-mce-bogus")
      , Ko = e=>jo(e) && "TABLE" === e.tagName
      , Go = e=>t=>{
        if (jo(t)) {
            if (t.contentEditable === e)
                return !0;
            if (t.getAttribute("data-mce-contenteditable") === e)
                return !0
        }
        return !1
    }
      , Yo = $o(["textarea", "input"])
      , Xo = Uo(3)
      , Qo = Uo(4)
      , Jo = Uo(7)
      , Zo = Uo(8)
      , er = Uo(9)
      , tr = Uo(11)
      , nr = Ho("br")
      , or = Ho("img")
      , rr = Go("true")
      , sr = Go("false")
      , ar = $o(["td", "th"])
      , ir = $o(["td", "th", "caption"])
      , lr = $o(["video", "audio", "object", "embed"])
      , dr = Ho("li")
      , cr = "\ufeff"
      , ur = "\xa0"
      , mr = e=>e === cr
      , fr = ((e,t)=>{
        const n = t=>e(t) ? I.from(t.dom.nodeValue) : I.none();
        return {
            get: t=>{
                if (!e(t))
                    throw new Error("Can only get text value of a text node");
                return n(t).getOr("")
            }
            ,
            getOption: n,
            set: (t,n)=>{
                if (!e(t))
                    throw new Error("Can only set raw text value of a text node");
                t.dom.nodeValue = n
            }
        }
    }
    )(qt)
      , gr = e=>fr.get(e)
      , pr = e=>fr.getOption(e)
      , hr = ["pre"].concat(["h1", "h2", "h3", "h4", "h5", "h6"])
      , br = e=>{
        let t;
        return n=>(t = t || se(e, M),
        ke(t, jt(n)))
    }
      , vr = br(["article", "aside", "details", "div", "dt", "figcaption", "footer", "form", "fieldset", "header", "hgroup", "html", "main", "nav", "section", "summary", "body", "p", "dl", "multicol", "dd", "figure", "address", "center", "blockquote", "h1", "h2", "h3", "h4", "h5", "h6", "listing", "xmp", "pre", "plaintext", "menu", "dir", "ul", "ol", "li", "hr", "table", "tbody", "thead", "tfoot", "th", "tr", "td", "caption"])
      , yr = e=>Vt(e) && !vr(e)
      , Cr = e=>Vt(e) && "br" === jt(e)
      , wr = br(["h1", "h2", "h3", "h4", "h5", "h6", "p", "div", "address", "pre", "form", "blockquote", "center", "dir", "fieldset", "header", "footer", "article", "section", "hgroup", "aside", "nav", "figure"])
      , xr = br(["ul", "ol", "dl"])
      , kr = br(["li", "dd", "dt"])
      , Er = br(["thead", "tbody", "tfoot"])
      , Sr = br(["td", "th"])
      , _r = br(["pre", "script", "textarea", "style"])
      , Nr = br(hr)
      , Rr = e=>Nr(e) || yr(e)
      , Ar = ()=>{
        const e = pn("br");
        return Xt(e, "data-mce-bogus", "1"),
        e
    }
      , Or = e=>{
        vo(e),
        po(e, Ar())
    }
      , Tr = e=>{
        In(e).each((t=>{
            On(t).each((n=>{
                vr(e) && Cr(t) && vr(n) && yo(t)
            }
            ))
        }
        ))
    }
      , Br = cr
      , Dr = mr
      , Pr = e=>e.replace(/\uFEFF/g, "")
      , Lr = jo
      , Mr = Xo
      , Ir = e=>(Mr(e) && (e = e.parentNode),
    Lr(e) && e.hasAttribute("data-mce-caret"))
      , Fr = e=>Mr(e) && Dr(e.data)
      , Ur = e=>Ir(e) || Fr(e)
      , zr = e=>e.firstChild !== e.lastChild || !nr(e.firstChild)
      , jr = e=>{
        const t = e.container();
        return !!Xo(t) && (t.data.charAt(e.offset()) === Br || e.isAtStart() && Fr(t.previousSibling))
    }
      , Hr = e=>{
        const t = e.container();
        return !!Xo(t) && (t.data.charAt(e.offset() - 1) === Br || e.isAtEnd() && Fr(t.nextSibling))
    }
      , $r = e=>Mr(e) && e.data[0] === Br
      , Vr = e=>Mr(e) && e.data[e.data.length - 1] === Br
      , qr = e=>e && e.hasAttribute("data-mce-caret") ? ((e=>{
        var t;
        const n = e.getElementsByTagName("br")
          , o = n[n.length - 1];
        Wo(o) && (null === (t = o.parentNode) || void 0 === t || t.removeChild(o))
    }
    )(e),
    e.removeAttribute("data-mce-caret"),
    e.removeAttribute("data-mce-bogus"),
    e.removeAttribute("style"),
    e.removeAttribute("data-mce-style"),
    e.removeAttribute("_moz_abspos"),
    e) : null
      , Wr = e=>Ir(e.startContainer)
      , Kr = rr
      , Gr = sr
      , Yr = nr
      , Xr = Xo
      , Qr = $o(["script", "style", "textarea"])
      , Jr = $o(["img", "input", "textarea", "hr", "iframe", "video", "audio", "object", "embed"])
      , Zr = $o(["table"])
      , es = Ur
      , ts = e=>!es(e) && (Xr(e) ? !Qr(e.parentNode) : Jr(e) || Yr(e) || Zr(e) || ns(e))
      , ns = e=>!(e=>jo(e) && "true" === e.getAttribute("unselectable"))(e) && Gr(e)
      , os = (e,t)=>ts(e) && ((e,t)=>{
        for (let n = e.parentNode; n && n !== t; n = n.parentNode) {
            if (ns(n))
                return !1;
            if (Kr(n))
                return !0
        }
        return !0
    }
    )(e, t)
      , rs = /^[ \t\r\n]*$/
      , ss = e=>rs.test(e)
      , as = e=>"\n" === e || "\r" === e
      , is = (e,t=4,n=!0,o=!0)=>{
        const r = ((e,t)=>t <= 0 ? "" : new Array(t + 1).join(" "))(0, t)
          , s = e.replace(/\t/g, r)
          , a = X(s, ((e,t)=>(e=>-1 !== " \f\t\v".indexOf(e))(t) || t === ur ? e.pcIsSpace || "" === e.str && n || e.str.length === s.length - 1 && o || ((e,t)=>t < e.length && t >= 0 && as(e[t]))(s, e.str.length + 1) ? {
            pcIsSpace: !1,
            str: e.str + ur
        } : {
            pcIsSpace: !0,
            str: e.str + " "
        } : {
            pcIsSpace: as(t),
            str: e.str + t
        }), {
            pcIsSpace: !1,
            str: ""
        });
        return a.str
    }
      , ls = (e,t)=>ts(e) && !((e,t)=>Xo(e) && ss(e.data) && !((e,t)=>{
        const n = bn(t)
          , o = bn(e);
        return Io(o, "pre,code", O(xn, n))
    }
    )(e, t))(e, t) || (e=>jo(e) && "A" === e.nodeName && !e.hasAttribute("href") && (e.hasAttribute("name") || e.hasAttribute("id")))(e) || ds(e)
      , ds = qo("data-mce-bookmark")
      , cs = qo("data-mce-bogus")
      , us = ("data-mce-bogus",
    "all",
    e=>jo(e) && "all" === e.getAttribute("data-mce-bogus"));
    const ms = (e,t=!0)=>((e,t)=>{
        let n = 0;
        if (ls(e, e))
            return !1;
        {
            let o = e.firstChild;
            if (!o)
                return !0;
            const r = new Fo(o,e);
            do {
                if (t) {
                    if (us(o)) {
                        o = r.next(!0);
                        continue
                    }
                    if (cs(o)) {
                        o = r.next();
                        continue
                    }
                }
                if (nr(o))
                    n++,
                    o = r.next();
                else {
                    if (ls(o, e))
                        return !1;
                    o = r.next()
                }
            } while (o);
            return n <= 1
        }
    }
    )(e.dom, t)
      , fs = "data-mce-block"
      , gs = e=>(e=>G(me(e), (e=>!/[A-Z]/.test(e))))(e).join(",")
      , ps = (e,t)=>C(t.querySelector(e)) ? (t.setAttribute(fs, "true"),
    "inline-boundary" === t.getAttribute("data-mce-selected") && t.removeAttribute("data-mce-selected"),
    !0) : (t.removeAttribute(fs),
    !1)
      , hs = (e,t)=>{
        const n = gs(e.getTransparentElements())
          , o = gs(e.getBlockElements());
        return G(t.querySelectorAll(n), (e=>ps(o, e)))
    }
      , bs = (e,t)=>{
        var n;
        const o = t ? "lastChild" : "firstChild";
        for (let t = e[o]; t; t = t[o])
            if (ms(bn(t)))
                return void (null === (n = t.parentNode) || void 0 === n || n.removeChild(t))
    }
      , vs = (e,t,n)=>{
        const o = e.getBlockElements()
          , r = bn(t)
          , s = e=>jt(e)in o
          , a = e=>xn(e, r);
        q(wo(n), (t=>{
            Yn(t, s, a).each((n=>{
                const o = ((t,o)=>G(Pn(t), (t=>s(t) && !e.isValidChild(jt(n), jt(t)))))(t);
                if (o.length > 0) {
                    const t = Rn(n);
                    q(o, (e=>{
                        Yn(e, s, a).each((t=>{
                            ((e,t)=>{
                                const n = document.createRange()
                                  , o = e.parentNode;
                                if (o) {
                                    n.setStartBefore(e),
                                    n.setEndBefore(t);
                                    const r = n.extractContents();
                                    bs(r, !0),
                                    n.setStartAfter(t),
                                    n.setEndAfter(e);
                                    const s = n.extractContents();
                                    bs(s, !1),
                                    ms(bn(r)) || o.insertBefore(r, e),
                                    ms(bn(t)) || o.insertBefore(t, e),
                                    ms(bn(s)) || o.insertBefore(s, e),
                                    o.removeChild(e)
                                }
                            }
                            )(t.dom, e.dom)
                        }
                        ))
                    }
                    )),
                    t.each((t=>hs(e, t.dom)))
                }
            }
            ))
        }
        ))
    }
      , ys = (e,t)=>{
        const n = hs(e, t);
        vs(e, t, n),
        ((e,t,n)=>{
            q([...n, ...Es(e, t) ? [t] : []], (t=>q(Mo(bn(t), t.nodeName.toLowerCase()), (t=>{
                Ss(e, t.dom) && Co(t)
            }
            ))))
        }
        )(e, t, n)
    }
      , Cs = (e,t)=>{
        if (ks(e, t)) {
            const n = gs(e.getBlockElements());
            ps(n, t)
        }
    }
      , ws = e=>e.hasAttribute(fs)
      , xs = (e,t)=>ke(e.getTransparentElements(), t)
      , ks = (e,t)=>jo(t) && xs(e, t.nodeName)
      , Es = (e,t)=>ks(e, t) && ws(t)
      , Ss = (e,t)=>ks(e, t) && !ws(t)
      , _s = (e,t)=>1 === t.type && xs(e, t.name) && v(t.attr(fs))
      , Ns = xt().browser
      , Rs = e=>J(e, Vt)
      , As = (e,t)=>e.children && H(e.children, t)
      , Os = (e,t={})=>{
        let n = 0;
        const o = {}
          , r = bn(e)
          , s = Sn(r)
          , a = e=>new Promise(((a,i)=>{
            let l;
            const d = Dt._addCacheSuffix(e)
              , c = (e=>xe(o, e).getOrThunk((()=>({
                id: "mce-u" + n++,
                passed: [],
                failed: [],
                count: 0
            }))))(d);
            o[d] = c,
            c.count++;
            const u = (e,t)=>{
                q(e, P),
                c.status = t,
                c.passed = [],
                c.failed = [],
                l && (l.onload = null,
                l.onerror = null,
                l = null)
            }
              , m = ()=>u(c.passed, 2)
              , f = ()=>u(c.failed, 3);
            if (a && c.passed.push(a),
            i && c.failed.push(i),
            1 === c.status)
                return;
            if (2 === c.status)
                return void m();
            if (3 === c.status)
                return void f();
            c.status = 1;
            const g = pn("link", s.dom);
            var p;
            Qt(g, {
                rel: "stylesheet",
                type: "text/css",
                id: c.id
            }),
            t.contentCssCors && Xt(g, "crossOrigin", "anonymous"),
            t.referrerPolicy && Xt(g, "referrerpolicy", t.referrerPolicy),
            l = g.dom,
            l.onload = m,
            l.onerror = f,
            p = g,
            po($n(r), p),
            Xt(g, "href", d)
        }
        ))
          , i = e=>{
            const t = Dt._addCacheSuffix(e);
            xe(o, t).each((e=>{
                0 == --e.count && (delete o[t],
                (e=>{
                    const t = $n(r);
                    Jn(t, "#" + e).each(yo)
                }
                )(e.id))
            }
            ))
        }
        ;
        return {
            load: a,
            loadAll: e=>Promise.allSettled(V(e, (e=>a(e).then(N(e))))).then((e=>{
                const t = K(e, (e=>"fulfilled" === e.status));
                return t.fail.length > 0 ? Promise.reject(V(t.fail, (e=>e.reason))) : V(t.pass, (e=>e.value))
            }
            )),
            unload: i,
            unloadAll: e=>{
                q(e, (e=>{
                    i(e)
                }
                ))
            }
            ,
            _setReferrerPolicy: e=>{
                t.referrerPolicy = e
            }
            ,
            _setContentCssCors: e=>{
                t.contentCssCors = e
            }
        }
    }
      , Ts = (()=>{
        const e = new WeakMap;
        return {
            forElement: (t,n)=>{
                const o = Hn(t).dom;
                return I.from(e.get(o)).getOrThunk((()=>{
                    const t = Os(o, n);
                    return e.set(o, t),
                    t
                }
                ))
            }
        }
    }
    )()
      , Bs = (e,t)=>C(e) && (ls(e, t) || yr(bn(e)))
      , Ds = e=>(e=>"span" === e.nodeName.toLowerCase())(e) && "bookmark" === e.getAttribute("data-mce-type")
      , Ps = (e,t,n)=>{
        var o;
        const r = n || t;
        if (jo(t) && Ds(t))
            return t;
        const s = t.childNodes;
        for (let t = s.length - 1; t >= 0; t--)
            Ps(e, s[t], r);
        if (jo(t)) {
            const e = t.childNodes;
            1 === e.length && Ds(e[0]) && (null === (o = t.parentNode) || void 0 === o || o.insertBefore(e[0], t))
        }
        return (e=>tr(e) || er(e))(t) || ls(t, r) || (e=>!!jo(e) && e.childNodes.length > 0)(t) || ((e,t)=>Xo(e) && e.data.length > 0 && ((e,t)=>{
            const n = new Fo(e,t).prev(!1)
              , o = new Fo(e,t).next(!1)
              , r = v(n) || Bs(n, t)
              , s = v(o) || Bs(o, t);
            return r && s
        }
        )(e, t))(t, r) || e.remove(t),
        t
    }
      , Ls = Dt.makeMap
      , Ms = /[&<>\"\u0060\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g
      , Is = /[<>&\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g
      , Fs = /[<>&\"\']/g
      , Us = /&#([a-z0-9]+);?|&([a-z0-9]+);/gi
      , zs = {
        128: "\u20ac",
        130: "\u201a",
        131: "\u0192",
        132: "\u201e",
        133: "\u2026",
        134: "\u2020",
        135: "\u2021",
        136: "\u02c6",
        137: "\u2030",
        138: "\u0160",
        139: "\u2039",
        140: "\u0152",
        142: "\u017d",
        145: "\u2018",
        146: "\u2019",
        147: "\u201c",
        148: "\u201d",
        149: "\u2022",
        150: "\u2013",
        151: "\u2014",
        152: "\u02dc",
        153: "\u2122",
        154: "\u0161",
        155: "\u203a",
        156: "\u0153",
        158: "\u017e",
        159: "\u0178"
    }
      , js = {
        '"': "&quot;",
        "'": "&#39;",
        "<": "&lt;",
        ">": "&gt;",
        "&": "&amp;",
        "`": "&#96;"
    }
      , Hs = {
        "&lt;": "<",
        "&gt;": ">",
        "&amp;": "&",
        "&quot;": '"',
        "&apos;": "'"
    }
      , $s = (e,t)=>{
        const n = {};
        if (e) {
            const o = e.split(",");
            t = t || 10;
            for (let e = 0; e < o.length; e += 2) {
                const r = String.fromCharCode(parseInt(o[e], t));
                if (!js[r]) {
                    const t = "&" + o[e + 1] + ";";
                    n[r] = t,
                    n[t] = r
                }
            }
            return n
        }
    }
      , Vs = $s("50,nbsp,51,iexcl,52,cent,53,pound,54,curren,55,yen,56,brvbar,57,sect,58,uml,59,copy,5a,ordf,5b,laquo,5c,not,5d,shy,5e,reg,5f,macr,5g,deg,5h,plusmn,5i,sup2,5j,sup3,5k,acute,5l,micro,5m,para,5n,middot,5o,cedil,5p,sup1,5q,ordm,5r,raquo,5s,frac14,5t,frac12,5u,frac34,5v,iquest,60,Agrave,61,Aacute,62,Acirc,63,Atilde,64,Auml,65,Aring,66,AElig,67,Ccedil,68,Egrave,69,Eacute,6a,Ecirc,6b,Euml,6c,Igrave,6d,Iacute,6e,Icirc,6f,Iuml,6g,ETH,6h,Ntilde,6i,Ograve,6j,Oacute,6k,Ocirc,6l,Otilde,6m,Ouml,6n,times,6o,Oslash,6p,Ugrave,6q,Uacute,6r,Ucirc,6s,Uuml,6t,Yacute,6u,THORN,6v,szlig,70,agrave,71,aacute,72,acirc,73,atilde,74,auml,75,aring,76,aelig,77,ccedil,78,egrave,79,eacute,7a,ecirc,7b,euml,7c,igrave,7d,iacute,7e,icirc,7f,iuml,7g,eth,7h,ntilde,7i,ograve,7j,oacute,7k,ocirc,7l,otilde,7m,ouml,7n,divide,7o,oslash,7p,ugrave,7q,uacute,7r,ucirc,7s,uuml,7t,yacute,7u,thorn,7v,yuml,ci,fnof,sh,Alpha,si,Beta,sj,Gamma,sk,Delta,sl,Epsilon,sm,Zeta,sn,Eta,so,Theta,sp,Iota,sq,Kappa,sr,Lambda,ss,Mu,st,Nu,su,Xi,sv,Omicron,t0,Pi,t1,Rho,t3,Sigma,t4,Tau,t5,Upsilon,t6,Phi,t7,Chi,t8,Psi,t9,Omega,th,alpha,ti,beta,tj,gamma,tk,delta,tl,epsilon,tm,zeta,tn,eta,to,theta,tp,iota,tq,kappa,tr,lambda,ts,mu,tt,nu,tu,xi,tv,omicron,u0,pi,u1,rho,u2,sigmaf,u3,sigma,u4,tau,u5,upsilon,u6,phi,u7,chi,u8,psi,u9,omega,uh,thetasym,ui,upsih,um,piv,812,bull,816,hellip,81i,prime,81j,Prime,81u,oline,824,frasl,88o,weierp,88h,image,88s,real,892,trade,89l,alefsym,8cg,larr,8ch,uarr,8ci,rarr,8cj,darr,8ck,harr,8dl,crarr,8eg,lArr,8eh,uArr,8ei,rArr,8ej,dArr,8ek,hArr,8g0,forall,8g2,part,8g3,exist,8g5,empty,8g7,nabla,8g8,isin,8g9,notin,8gb,ni,8gf,prod,8gh,sum,8gi,minus,8gn,lowast,8gq,radic,8gt,prop,8gu,infin,8h0,ang,8h7,and,8h8,or,8h9,cap,8ha,cup,8hb,int,8hk,there4,8hs,sim,8i5,cong,8i8,asymp,8j0,ne,8j1,equiv,8j4,le,8j5,ge,8k2,sub,8k3,sup,8k4,nsub,8k6,sube,8k7,supe,8kl,oplus,8kn,otimes,8l5,perp,8m5,sdot,8o8,lceil,8o9,rceil,8oa,lfloor,8ob,rfloor,8p9,lang,8pa,rang,9ea,loz,9j0,spades,9j3,clubs,9j5,hearts,9j6,diams,ai,OElig,aj,oelig,b0,Scaron,b1,scaron,bo,Yuml,m6,circ,ms,tilde,802,ensp,803,emsp,809,thinsp,80c,zwnj,80d,zwj,80e,lrm,80f,rlm,80j,ndash,80k,mdash,80o,lsquo,80p,rsquo,80q,sbquo,80s,ldquo,80t,rdquo,80u,bdquo,810,dagger,811,Dagger,81g,permil,81p,lsaquo,81q,rsaquo,85c,euro", 32)
      , qs = (e,t)=>e.replace(t ? Ms : Is, (e=>js[e] || e))
      , Ws = (e,t)=>e.replace(t ? Ms : Is, (e=>e.length > 1 ? "&#" + (1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320) + 65536) + ";" : js[e] || "&#" + e.charCodeAt(0) + ";"))
      , Ks = (e,t,n)=>{
        const o = n || Vs;
        return e.replace(t ? Ms : Is, (e=>js[e] || o[e] || e))
    }
      , Gs = {
        encodeRaw: qs,
        encodeAllRaw: e=>("" + e).replace(Fs, (e=>js[e] || e)),
        encodeNumeric: Ws,
        encodeNamed: Ks,
        getEncodeFunc: (e,t)=>{
            const n = $s(t) || Vs
              , o = Ls(e.replace(/\+/g, ","));
            return o.named && o.numeric ? (e,t)=>e.replace(t ? Ms : Is, (e=>void 0 !== js[e] ? js[e] : void 0 !== n[e] ? n[e] : e.length > 1 ? "&#" + (1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320) + 65536) + ";" : "&#" + e.charCodeAt(0) + ";")) : o.named ? t ? (e,t)=>Ks(e, t, n) : Ks : o.numeric ? Ws : qs
        }
        ,
        decode: e=>e.replace(Us, ((e,t)=>t ? (t = "x" === t.charAt(0).toLowerCase() ? parseInt(t.substr(1), 16) : parseInt(t, 10)) > 65535 ? (t -= 65536,
        String.fromCharCode(55296 + (t >> 10), 56320 + (1023 & t))) : zs[t] || String.fromCharCode(t) : Hs[e] || Vs[e] || (e=>{
            const t = pn("div").dom;
            return t.innerHTML = e,
            t.textContent || t.innerText || e
        }
        )(e)))
    }
      , Ys = {}
      , Xs = {}
      , Qs = {}
      , Js = Dt.makeMap
      , Zs = Dt.each
      , ea = Dt.extend
      , ta = Dt.explode
      , na = Dt.inArray
      , oa = (e,t)=>(e = Dt.trim(e)) ? e.split(t || " ") : []
      , ra = (e,t={})=>{
        const n = Js(e, " ", Js(e.toUpperCase(), " "));
        return ea(n, t)
    }
      , sa = e=>ra("td th li dt dd figcaption caption details summary", e.getTextBlockElements())
      , aa = (e,t)=>{
        if (e) {
            const n = {};
            return m(e) && (e = {
                "*": e
            }),
            Zs(e, ((e,o)=>{
                n[o] = n[o.toUpperCase()] = "map" === t ? Js(e, /[, ]/) : ta(e, /[, ]/)
            }
            )),
            n
        }
    }
      , ia = (e={})=>{
        var t;
        const n = {}
          , o = {};
        let r = [];
        const s = {}
          , a = {}
          , i = (t,n,o)=>{
            const r = e[t];
            if (r)
                return Js(r, /[, ]/, Js(r.toUpperCase(), /[, ]/));
            {
                let e = Xs[t];
                return e || (e = ra(n, o),
                Xs[t] = e),
                e
            }
        }
          , l = null !== (t = e.schema) && void 0 !== t ? t : "html5"
          , d = (e=>{
            const t = {};
            let n, o, r, s;
            const a = (e,o="",r="")=>{
                const s = oa(r)
                  , a = oa(e);
                let i = a.length;
                for (; i--; ) {
                    const e = oa([n, o].join(" "));
                    t[a[i]] = {
                        attributes: se(e, (()=>({}))),
                        attributesOrder: e,
                        children: se(s, N(Qs))
                    }
                }
            }
              , i = (e,n)=>{
                const o = oa(e)
                  , r = oa(n);
                let s = o.length;
                for (; s--; ) {
                    const e = t[o[s]];
                    for (let t = 0, n = r.length; t < n; t++)
                        e.attributes[r[t]] = {},
                        e.attributesOrder.push(r[t])
                }
            }
            ;
            if (Ys[e])
                return Ys[e];
            if (n = "id accesskey class dir lang style tabindex title role",
            o = "address blockquote div dl fieldset form h1 h2 h3 h4 h5 h6 hr menu ol p pre table ul",
            r = "a abbr b bdo br button cite code del dfn em embed i iframe img input ins kbd label map noscript object q s samp script select small span strong sub sup textarea u var #text #comment",
            "html4" !== e && (n += " contenteditable contextmenu draggable dropzone hidden spellcheck translate",
            o += " article aside details dialog figure main header footer hgroup section nav a ins del canvas map",
            r += " audio canvas command datalist mark meter output picture progress time wbr video ruby bdi keygen"),
            "html5-strict" !== e) {
                n += " xml:lang";
                const e = "acronym applet basefont big font strike tt";
                r = [r, e].join(" "),
                Zs(oa(e), (e=>{
                    a(e, "", r)
                }
                ));
                const t = "center dir isindex noframes";
                o = [o, t].join(" "),
                s = [o, r].join(" "),
                Zs(oa(t), (e=>{
                    a(e, "", s)
                }
                ))
            }
            return s = s || [o, r].join(" "),
            a("html", "manifest", "head body"),
            a("head", "", "base command link meta noscript script style title"),
            a("title hr noscript br"),
            a("base", "href target"),
            a("link", "href rel media hreflang type sizes hreflang"),
            a("meta", "name http-equiv content charset"),
            a("style", "media type scoped"),
            a("script", "src async defer type charset"),
            a("body", "onafterprint onbeforeprint onbeforeunload onblur onerror onfocus onhashchange onload onmessage onoffline ononline onpagehide onpageshow onpopstate onresize onscroll onstorage onunload", s),
            a("address dt dd div caption", "", s),
            a("h1 h2 h3 h4 h5 h6 pre p abbr code var samp kbd sub sup i b u bdo span legend em strong small s cite dfn", "", r),
            a("blockquote", "cite", s),
            a("ol", "reversed start type", "li"),
            a("ul", "", "li"),
            a("li", "value", s),
            a("dl", "", "dt dd"),
            a("a", "href target rel media hreflang type", s),
            a("q", "cite", r),
            a("ins del", "cite datetime", s),
            a("img", "src sizes srcset alt usemap ismap width height"),
            a("iframe", "src name width height", s),
            a("embed", "src type width height"),
            a("object", "data type typemustmatch name usemap form width height", [s, "param"].join(" ")),
            a("param", "name value"),
            a("map", "name", [s, "area"].join(" ")),
            a("area", "alt coords shape href target rel media hreflang type"),
            a("table", "border", "caption colgroup thead tfoot tbody tr" + ("html4" === e ? " col" : "")),
            a("colgroup", "span", "col"),
            a("col", "span"),
            a("tbody thead tfoot", "", "tr"),
            a("tr", "", "td th"),
            a("td", "colspan rowspan headers", s),
            a("th", "colspan rowspan headers scope abbr", s),
            a("form", "accept-charset action autocomplete enctype method name novalidate target", s),
            a("fieldset", "disabled form name", [s, "legend"].join(" ")),
            a("label", "form for", r),
            a("input", "accept alt autocomplete checked dirname disabled form formaction formenctype formmethod formnovalidate formtarget height list max maxlength min multiple name pattern readonly required size src step type value width"),
            a("button", "disabled form formaction formenctype formmethod formnovalidate formtarget name type value", "html4" === e ? s : r),
            a("select", "disabled form multiple name required size", "option optgroup"),
            a("optgroup", "disabled label", "option"),
            a("option", "disabled label selected value"),
            a("textarea", "cols dirname disabled form maxlength name readonly required rows wrap"),
            a("menu", "type label", [s, "li"].join(" ")),
            a("noscript", "", s),
            "html4" !== e && (a("wbr"),
            a("ruby", "", [r, "rt rp"].join(" ")),
            a("figcaption", "", s),
            a("mark rt rp summary bdi", "", r),
            a("canvas", "width height", s),
            a("video", "src crossorigin poster preload autoplay mediagroup loop muted controls width height buffered", [s, "track source"].join(" ")),
            a("audio", "src crossorigin preload autoplay mediagroup loop muted controls buffered volume", [s, "track source"].join(" ")),
            a("picture", "", "img source"),
            a("source", "src srcset type media sizes"),
            a("track", "kind src srclang label default"),
            a("datalist", "", [r, "option"].join(" ")),
            a("article section nav aside main header footer", "", s),
            a("hgroup", "", "h1 h2 h3 h4 h5 h6"),
            a("figure", "", [s, "figcaption"].join(" ")),
            a("time", "datetime", r),
            a("dialog", "open", s),
            a("command", "type label icon disabled checked radiogroup command"),
            a("output", "for form name", r),
            a("progress", "value max", r),
            a("meter", "value min max low high optimum", r),
            a("details", "open", [s, "summary"].join(" ")),
            a("keygen", "autofocus challenge disabled form keytype name")),
            "html5-strict" !== e && (i("script", "language xml:space"),
            i("style", "xml:space"),
            i("object", "declare classid code codebase codetype archive standby align border hspace vspace"),
            i("embed", "align name hspace vspace"),
            i("param", "valuetype type"),
            i("a", "charset name rev shape coords"),
            i("br", "clear"),
            i("applet", "codebase archive code object alt name width height align hspace vspace"),
            i("img", "name longdesc align border hspace vspace"),
            i("iframe", "longdesc frameborder marginwidth marginheight scrolling align"),
            i("font basefont", "size color face"),
            i("input", "usemap align"),
            i("select"),
            i("textarea"),
            i("h1 h2 h3 h4 h5 h6 div p legend caption", "align"),
            i("ul", "type compact"),
            i("li", "type"),
            i("ol dl menu dir", "compact"),
            i("pre", "width xml:space"),
            i("hr", "align noshade size width"),
            i("isindex", "prompt"),
            i("table", "summary width frame rules cellspacing cellpadding align bgcolor"),
            i("col", "width align char charoff valign"),
            i("colgroup", "width align char charoff valign"),
            i("thead", "align char charoff valign"),
            i("tr", "align char charoff valign bgcolor"),
            i("th", "axis align char charoff valign nowrap bgcolor width height"),
            i("form", "accept"),
            i("td", "abbr axis scope align char charoff valign nowrap bgcolor width height"),
            i("tfoot", "align char charoff valign"),
            i("tbody", "align char charoff valign"),
            i("area", "nohref"),
            i("body", "background bgcolor text link vlink alink")),
            "html4" !== e && (i("input button select textarea", "autofocus"),
            i("input textarea", "placeholder"),
            i("a", "download"),
            i("link script img", "crossorigin"),
            i("img", "loading"),
            i("iframe", "sandbox seamless allow allowfullscreen loading")),
            "html4" !== e && q([t.video, t.audio], (e=>{
                delete e.children.audio,
                delete e.children.video
            }
            )),
            Zs(oa("a form meter progress dfn"), (e=>{
                t[e] && delete t[e].children[e]
            }
            )),
            delete t.caption.children.table,
            delete t.script,
            Ys[e] = t,
            t
        }
        )(l);
        !1 === e.verify_html && (e.valid_elements = "*[*]");
        const c = aa(e.valid_styles)
          , u = aa(e.invalid_styles, "map")
          , m = aa(e.valid_classes, "map")
          , f = i("whitespace_elements", "pre script noscript style textarea video audio iframe object code")
          , g = i("self_closing_elements", "colgroup dd dt li option p td tfoot th thead tr")
          , p = i("void_elements", "area base basefont br col frame hr img input isindex link meta param embed source wbr track")
          , h = i("boolean_attributes", "checked compact declare defer disabled ismap multiple nohref noresize noshade nowrap readonly selected autoplay loop controls allowfullscreen")
          , b = "td th iframe video audio object script code"
          , v = i("non_empty_elements", b + " pre", p)
          , y = i("move_caret_before_on_enter_elements", b + " table", p)
          , C = i("text_block_elements", "h1 h2 h3 h4 h5 h6 p div address pre form blockquote center dir fieldset header footer article section hgroup aside main nav figure")
          , w = i("block_elements", "hr table tbody thead tfoot th tr td li ol ul caption dl dt dd noscript menu isindex option datalist select optgroup figcaption details summary", C)
          , x = i("text_inline_elements", "span strong b em i font s strike u var cite dfn code mark q sup sub samp")
          , k = i("transparent_elements", "a ins del canvas map");
        Zs("script noscript iframe noframes noembed title style textarea xmp plaintext".split(" "), (e=>{
            a[e] = new RegExp("</" + e + "[^>]*>","gi")
        }
        ));
        const E = e=>new RegExp("^" + e.replace(/([?+*])/g, ".$1") + "$")
          , S = e=>{
            const t = /^([#+\-])?([^\[!\/]+)(?:\/([^\[!]+))?(?:(!?)\[([^\]]+)])?$/
              , o = /^([!\-])?(\w+[\\:]:\w+|[^=~<]+)?(?:([=~<])(.*))?$/
              , s = /[*?+]/;
            if (e) {
                const a = oa(e, ",");
                let i, l;
                n["@"] && (i = n["@"].attributes,
                l = n["@"].attributesOrder);
                for (let e = 0, d = a.length; e < d; e++) {
                    let d = t.exec(a[e]);
                    if (d) {
                        const e = d[1]
                          , t = d[2]
                          , a = d[3]
                          , c = d[5]
                          , u = {}
                          , m = []
                          , f = {
                            attributes: u,
                            attributesOrder: m
                        };
                        if ("#" === e && (f.paddEmpty = !0),
                        "-" === e && (f.removeEmpty = !0),
                        "!" === d[4] && (f.removeEmptyAttrs = !0),
                        i && (ge(i, ((e,t)=>{
                            u[t] = e
                        }
                        )),
                        l && m.push(...l)),
                        c) {
                            const e = oa(c, "|");
                            for (let t = 0, n = e.length; t < n; t++)
                                if (d = o.exec(e[t]),
                                d) {
                                    const e = {}
                                      , t = d[1]
                                      , n = d[2].replace(/[\\:]:/g, ":")
                                      , o = d[3]
                                      , r = d[4];
                                    if ("!" === t && (f.attributesRequired = f.attributesRequired || [],
                                    f.attributesRequired.push(n),
                                    e.required = !0),
                                    "-" === t) {
                                        delete u[n],
                                        m.splice(na(m, n), 1);
                                        continue
                                    }
                                    if (o && ("=" === o && (f.attributesDefault = f.attributesDefault || [],
                                    f.attributesDefault.push({
                                        name: n,
                                        value: r
                                    }),
                                    e.defaultValue = r),
                                    "~" === o && (f.attributesForced = f.attributesForced || [],
                                    f.attributesForced.push({
                                        name: n,
                                        value: r
                                    }),
                                    e.forcedValue = r),
                                    "<" === o && (e.validValues = Js(r, "?"))),
                                    s.test(n)) {
                                        const t = e;
                                        f.attributePatterns = f.attributePatterns || [],
                                        t.pattern = E(n),
                                        f.attributePatterns.push(t)
                                    } else
                                        u[n] || m.push(n),
                                        u[n] = e
                                }
                        }
                        if (i || "@" !== t || (i = u,
                        l = m),
                        a && (f.outputName = t,
                        n[a] = f),
                        s.test(t)) {
                            const e = f;
                            e.pattern = E(t),
                            r.push(e)
                        } else
                            n[t] = f
                    }
                }
            }
        }
          , _ = e=>{
            r = [],
            q(me(n), (e=>{
                delete n[e]
            }
            )),
            S(e),
            Zs(d, ((e,t)=>{
                o[t] = e.children
            }
            ))
        }
          , R = e=>{
            const t = /^(~)?(.+)$/;
            e && (delete Xs.text_block_elements,
            delete Xs.block_elements,
            Zs(oa(e, ","), (e=>{
                const r = t.exec(e);
                if (r) {
                    const e = "~" === r[1]
                      , t = e ? "span" : "div"
                      , a = r[2];
                    if (o[a] = o[t],
                    s[a] = t,
                    v[a.toUpperCase()] = {},
                    v[a] = {},
                    e || (w[a.toUpperCase()] = {},
                    w[a] = {}),
                    !n[a]) {
                        let e = n[t];
                        e = ea({}, e),
                        delete e.removeEmptyAttrs,
                        delete e.removeEmpty,
                        n[a] = e
                    }
                    Zs(o, ((e,n)=>{
                        e[t] && (o[n] = e = ea({}, o[n]),
                        e[a] = e[t])
                    }
                    ))
                }
            }
            )))
        }
          , A = e=>{
            const t = /^([+\-]?)([A-Za-z0-9_\-.\u00b7\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u037d\u037f-\u1fff\u200c-\u200d\u203f-\u2040\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]+)\[([^\]]+)]$/;
            delete Ys[l],
            e && Zs(oa(e, ","), (e=>{
                const n = t.exec(e);
                if (n) {
                    const e = n[1];
                    let t;
                    t = e ? o[n[2]] : o[n[2]] = {
                        "#comment": {}
                    },
                    t = o[n[2]],
                    Zs(oa(n[3], "|"), (n=>{
                        "-" === e ? delete t[n] : t[n] = {}
                    }
                    ))
                }
            }
            ))
        }
          , O = e=>{
            const t = n[e];
            if (t)
                return t;
            let o = r.length;
            for (; o--; ) {
                const t = r[o];
                if (t.pattern.test(e))
                    return t
            }
        }
        ;
        e.valid_elements ? _(e.valid_elements) : (Zs(d, ((e,t)=>{
            n[t] = {
                attributes: e.attributes,
                attributesOrder: e.attributesOrder
            },
            o[t] = e.children
        }
        )),
        Zs(oa("strong/b em/i"), (e=>{
            const t = oa(e, "/");
            n[t[1]].outputName = t[0]
        }
        )),
        Zs(x, ((t,o)=>{
            n[o] && (e.padd_empty_block_inline_children && (n[o].paddInEmptyBlock = !0),
            n[o].removeEmpty = !0)
        }
        )),
        Zs(oa("ol ul blockquote a table tbody"), (e=>{
            n[e] && (n[e].removeEmpty = !0)
        }
        )),
        Zs(oa("p h1 h2 h3 h4 h5 h6 th td pre div address caption li"), (e=>{
            n[e].paddEmpty = !0
        }
        )),
        Zs(oa("span"), (e=>{
            n[e].removeEmptyAttrs = !0
        }
        ))),
        R(e.custom_elements),
        A(e.valid_children),
        S(e.extended_valid_elements),
        A("+ol[ul|ol],+ul[ul|ol]"),
        Zs({
            dd: "dl",
            dt: "dl",
            li: "ul ol",
            td: "tr",
            th: "tr",
            tr: "tbody thead tfoot",
            tbody: "table",
            thead: "table",
            tfoot: "table",
            legend: "fieldset",
            area: "map",
            param: "video audio object"
        }, ((e,t)=>{
            n[t] && (n[t].parentsRequired = oa(e))
        }
        )),
        e.invalid_elements && Zs(ta(e.invalid_elements), (e=>{
            n[e] && delete n[e]
        }
        )),
        O("span") || S("span[!data-mce-type|*]");
        const T = N(c)
          , B = N(u)
          , D = N(m)
          , P = N(h)
          , L = N(w)
          , M = N(C)
          , I = N(x)
          , F = N(Object.seal(p))
          , U = N(g)
          , z = N(v)
          , j = N(y)
          , H = N(f)
          , $ = N(k)
          , V = N(Object.seal(a))
          , W = N(s);
        return {
            type: l,
            children: o,
            elements: n,
            getValidStyles: T,
            getValidClasses: D,
            getBlockElements: L,
            getInvalidStyles: B,
            getVoidElements: F,
            getTextBlockElements: M,
            getTextInlineElements: I,
            getBoolAttrs: P,
            getElementRule: O,
            getSelfClosingElements: U,
            getNonEmptyElements: z,
            getMoveCaretBeforeOnEnterElements: j,
            getWhitespaceElements: H,
            getTransparentElements: $,
            getSpecialElements: V,
            isValidChild: (e,t)=>{
                const n = o[e.toLowerCase()];
                return !(!n || !n[t.toLowerCase()])
            }
            ,
            isValid: (e,t)=>{
                const n = O(e);
                if (n) {
                    if (!t)
                        return !0;
                    {
                        if (n.attributes[t])
                            return !0;
                        const e = n.attributePatterns;
                        if (e) {
                            let n = e.length;
                            for (; n--; )
                                if (e[n].pattern.test(t))
                                    return !0
                        }
                    }
                }
                return !1
            }
            ,
            getCustomElements: W,
            addValidElements: S,
            setValidElements: _,
            addCustomElements: R,
            addValidChildren: A
        }
    }
      , la = (e={},t)=>{
        const n = /(?:url(?:(?:\(\s*\"([^\"]+)\"\s*\))|(?:\(\s*\'([^\']+)\'\s*\))|(?:\(\s*([^)\s]+)\s*\))))|(?:\'([^\']+)\')|(?:\"([^\"]+)\")/gi
          , o = /\s*([^:]+):\s*([^;]+);?/g
          , r = /\s+$/
          , s = {};
        let a, i;
        t && (a = t.getValidStyles(),
        i = t.getInvalidStyles());
        const l = "\\\" \\' \\; \\: ; : \ufeff".split(" ");
        for (let e = 0; e < l.length; e++)
            s[l[e]] = "\ufeff" + e,
            s["\ufeff" + e] = l[e];
        const d = {
            parse: t=>{
                const a = {};
                let i = !1;
                const l = e.url_converter
                  , c = e.url_converter_scope || d
                  , u = (e,t,n)=>{
                    const o = a[e + "-top" + t];
                    if (!o)
                        return;
                    const r = a[e + "-right" + t];
                    if (!r)
                        return;
                    const s = a[e + "-bottom" + t];
                    if (!s)
                        return;
                    const i = a[e + "-left" + t];
                    if (!i)
                        return;
                    const l = [o, r, s, i];
                    let d = l.length - 1;
                    for (; d-- && l[d] === l[d + 1]; )
                        ;
                    d > -1 && n || (a[e + t] = -1 === d ? l[0] : l.join(" "),
                    delete a[e + "-top" + t],
                    delete a[e + "-right" + t],
                    delete a[e + "-bottom" + t],
                    delete a[e + "-left" + t])
                }
                  , m = e=>{
                    const t = a[e];
                    if (!t)
                        return;
                    const n = t.split(" ");
                    let o = n.length;
                    for (; o--; )
                        if (n[o] !== n[0])
                            return !1;
                    return a[e] = n[0],
                    !0
                }
                  , f = e=>(i = !0,
                s[e])
                  , g = (e,t)=>(i && (e = e.replace(/\uFEFF[0-9]/g, (e=>s[e]))),
                t || (e = e.replace(/\\([\'\";:])/g, "$1")),
                e)
                  , p = e=>String.fromCharCode(parseInt(e.slice(1), 16))
                  , h = e=>e.replace(/\\[0-9a-f]+/gi, p)
                  , b = (t,n,o,r,s,a)=>{
                    if (s = s || a)
                        return "'" + (s = g(s)).replace(/\'/g, "\\'") + "'";
                    if (n = g(n || o || r || ""),
                    !e.allow_script_urls) {
                        const t = n.replace(/[\s\r\n]+/g, "");
                        if (/(java|vb)script:/i.test(t))
                            return "";
                        if (!e.allow_svg_data_urls && /^data:image\/svg/i.test(t))
                            return ""
                    }
                    return l && (n = l.call(c, n, "style")),
                    "url('" + n.replace(/\'/g, "\\'") + "')"
                }
                ;
                if (t) {
                    let s;
                    for (t = (t = t.replace(/[\u0000-\u001F]/g, "")).replace(/\\[\"\';:\uFEFF]/g, f).replace(/\"[^\"]+\"|\'[^\']+\'/g, (e=>e.replace(/[;:]/g, f))); s = o.exec(t); ) {
                        o.lastIndex = s.index + s[0].length;
                        let t = s[1].replace(r, "").toLowerCase()
                          , l = s[2].replace(r, "");
                        if (t && l) {
                            if (t = h(t),
                            l = h(l),
                            -1 !== t.indexOf("\ufeff") || -1 !== t.indexOf('"'))
                                continue;
                            if (!e.allow_script_urls && ("behavior" === t || /expression\s*\(|\/\*|\*\//.test(l)))
                                continue;
                            "font-weight" === t && "700" === l ? l = "bold" : "color" !== t && "background-color" !== t || (l = l.toLowerCase()),
                            l = l.replace(n, b),
                            a[t] = i ? g(l, !0) : l
                        }
                    }
                    u("border", "", !0),
                    u("border", "-width"),
                    u("border", "-color"),
                    u("border", "-style"),
                    u("padding", ""),
                    u("margin", ""),
                    "border",
                    y = "border-style",
                    C = "border-color",
                    m(v = "border-width") && m(y) && m(C) && (a.border = a[v] + " " + a[y] + " " + a[C],
                    delete a[v],
                    delete a[y],
                    delete a[C]),
                    "medium none" === a.border && delete a.border,
                    "none" === a["border-image"] && delete a["border-image"]
                }
                var v, y, C;
                return a
            }
            ,
            serialize: (e,t)=>{
                let n = "";
                const o = (t,o)=>{
                    const r = o[t];
                    if (r)
                        for (let t = 0, o = r.length; t < o; t++) {
                            const o = r[t]
                              , s = e[o];
                            s && (n += (n.length > 0 ? " " : "") + o + ": " + s + ";")
                        }
                }
                ;
                return t && a ? (o("*", a),
                o(t, a)) : ge(e, ((e,o)=>{
                    e && ((e,t)=>{
                        if (!i || !t)
                            return !0;
                        let n = i["*"];
                        return !(n && n[e] || (n = i[t],
                        n && n[e]))
                    }
                    )(o, t) && (n += (n.length > 0 ? " " : "") + o + ": " + e + ";")
                }
                )),
                n
            }
        };
        return d
    }
      , da = {
        keyLocation: !0,
        layerX: !0,
        layerY: !0,
        returnValue: !0,
        webkitMovementX: !0,
        webkitMovementY: !0,
        keyIdentifier: !0,
        mozPressure: !0
    }
      , ca = (e,t)=>{
        const n = null != t ? t : {};
        for (const t in e)
            ke(da, t) || (n[t] = e[t]);
        return C(e.composedPath) && (n.composedPath = ()=>e.composedPath()),
        n
    }
      , ua = (e,t,n,o)=>{
        var r;
        const s = ca(t, o);
        return s.type = e,
        y(s.target) && (s.target = null !== (r = s.srcElement) && void 0 !== r ? r : n),
        (e=>y(e.preventDefault) || (e=>e instanceof Event || w(e.initEvent))(e))(t) && (s.preventDefault = ()=>{
            s.defaultPrevented = !0,
            s.isDefaultPrevented = M,
            w(t.preventDefault) && t.preventDefault()
        }
        ,
        s.stopPropagation = ()=>{
            s.cancelBubble = !0,
            s.isPropagationStopped = M,
            w(t.stopPropagation) && t.stopPropagation()
        }
        ,
        s.stopImmediatePropagation = ()=>{
            s.isImmediatePropagationStopped = M,
            s.stopPropagation()
        }
        ,
        (e=>e.isDefaultPrevented === M || e.isDefaultPrevented === L)(s) || (s.isDefaultPrevented = !0 === s.defaultPrevented ? M : L,
        s.isPropagationStopped = !0 === s.cancelBubble ? M : L,
        s.isImmediatePropagationStopped = L)),
        s
    }
      , ma = /^(?:mouse|contextmenu)|click/
      , fa = (e,t,n,o)=>{
        e.addEventListener(t, n, o || !1)
    }
      , ga = (e,t,n,o)=>{
        e.removeEventListener(t, n, o || !1)
    }
      , pa = (e,t)=>{
        const n = ua(e.type, e, document, t);
        if ((e=>C(e) && ma.test(e.type))(e) && v(e.pageX) && !v(e.clientX)) {
            const t = n.target.ownerDocument || document
              , o = t.documentElement
              , r = t.body
              , s = n;
            s.pageX = e.clientX + (o && o.scrollLeft || r && r.scrollLeft || 0) - (o && o.clientLeft || r && r.clientLeft || 0),
            s.pageY = e.clientY + (o && o.scrollTop || r && r.scrollTop || 0) - (o && o.clientTop || r && r.clientTop || 0)
        }
        return n
    }
      , ha = (e,t,n)=>{
        const o = e.document
          , r = {
            type: "ready"
        };
        if (n.domLoaded)
            return void t(r);
        const s = ()=>{
            ga(e, "DOMContentLoaded", s),
            ga(e, "load", s),
            n.domLoaded || (n.domLoaded = !0,
            t(r)),
            e = null
        }
        ;
        "complete" === o.readyState || "interactive" === o.readyState && o.body ? s() : fa(e, "DOMContentLoaded", s),
        n.domLoaded || fa(e, "load", s)
    }
    ;
    class ba {
        constructor() {
            this.domLoaded = !1,
            this.events = {},
            this.count = 1,
            this.expando = "mce-data-" + (+new Date).toString(32),
            this.hasFocusIn = "onfocusin"in document.documentElement,
            this.count = 1
        }
        bind(e, t, n, o) {
            const r = this;
            let s;
            const a = window
              , i = e=>{
                r.executeHandlers(pa(e || a.event), l)
            }
            ;
            if (!e || Xo(e) || Zo(e))
                return n;
            let l;
            e[r.expando] ? l = e[r.expando] : (l = r.count++,
            e[r.expando] = l,
            r.events[l] = {}),
            o = o || e;
            const d = t.split(" ");
            let c = d.length;
            for (; c--; ) {
                let t = d[c]
                  , u = i
                  , m = !1
                  , f = !1;
                "DOMContentLoaded" === t && (t = "ready"),
                r.domLoaded && "ready" === t && "complete" === e.readyState ? n.call(o, pa({
                    type: t
                })) : (r.hasFocusIn || "focusin" !== t && "focusout" !== t || (m = !0,
                f = "focusin" === t ? "focus" : "blur",
                u = e=>{
                    const t = pa(e || a.event);
                    t.type = "focus" === t.type ? "focusin" : "focusout",
                    r.executeHandlers(t, l)
                }
                ),
                s = r.events[l][t],
                s ? "ready" === t && r.domLoaded ? n(pa({
                    type: t
                })) : s.push({
                    func: n,
                    scope: o
                }) : (r.events[l][t] = s = [{
                    func: n,
                    scope: o
                }],
                s.fakeName = f,
                s.capture = m,
                s.nativeHandler = u,
                "ready" === t ? ha(e, u, r) : fa(e, f || t, u, m)))
            }
            return e = s = null,
            n
        }
        unbind(e, t, n) {
            if (!e || Xo(e) || Zo(e))
                return this;
            const o = e[this.expando];
            if (o) {
                let r = this.events[o];
                if (t) {
                    const o = t.split(" ");
                    let s = o.length;
                    for (; s--; ) {
                        const t = o[s]
                          , a = r[t];
                        if (a) {
                            if (n) {
                                let e = a.length;
                                for (; e--; )
                                    if (a[e].func === n) {
                                        const n = a.nativeHandler
                                          , o = a.fakeName
                                          , s = a.capture
                                          , i = a.slice(0, e).concat(a.slice(e + 1));
                                        i.nativeHandler = n,
                                        i.fakeName = o,
                                        i.capture = s,
                                        r[t] = i
                                    }
                            }
                            n && 0 !== a.length || (delete r[t],
                            ga(e, a.fakeName || t, a.nativeHandler, a.capture))
                        }
                    }
                } else
                    ge(r, ((t,n)=>{
                        ga(e, t.fakeName || n, t.nativeHandler, t.capture)
                    }
                    )),
                    r = {};
                for (const e in r)
                    if (ke(r, e))
                        return this;
                delete this.events[o];
                try {
                    delete e[this.expando]
                } catch (t) {
                    e[this.expando] = null
                }
            }
            return this
        }
        fire(e, t, n) {
            return this.dispatch(e, t, n)
        }
        dispatch(e, t, n) {
            if (!e || Xo(e) || Zo(e))
                return this;
            const o = pa({
                type: t,
                target: e
            }, n);
            do {
                const t = e[this.expando];
                t && this.executeHandlers(o, t),
                e = e.parentNode || e.ownerDocument || e.defaultView || e.parentWindow
            } while (e && !o.isPropagationStopped());
            return this
        }
        clean(e) {
            if (!e || Xo(e) || Zo(e))
                return this;
            if (e[this.expando] && this.unbind(e),
            e.getElementsByTagName || (e = e.document),
            e && e.getElementsByTagName) {
                this.unbind(e);
                const t = e.getElementsByTagName("*");
                let n = t.length;
                for (; n--; )
                    (e = t[n])[this.expando] && this.unbind(e)
            }
            return this
        }
        destroy() {
            this.events = {}
        }
        cancel(e) {
            return e && (e.preventDefault(),
            e.stopImmediatePropagation()),
            !1
        }
        executeHandlers(e, t) {
            const n = this.events[t]
              , o = n && n[e.type];
            if (o)
                for (let t = 0, n = o.length; t < n; t++) {
                    const n = o[t];
                    if (n && !1 === n.func.call(n.scope, e) && e.preventDefault(),
                    e.isImmediatePropagationStopped())
                        return
                }
        }
    }
    ba.Event = new ba;
    const va = Dt.each
      , ya = Dt.grep
      , Ca = "data-mce-style"
      , wa = Dt.makeMap("fill-opacity font-weight line-height opacity orphans widows z-index zoom", " ")
      , xa = (e,t,n)=>{
        y(n) || "" === n ? tn(e, t) : Xt(e, t, n)
    }
      , ka = e=>e.replace(/[A-Z]/g, (e=>"-" + e.toLowerCase()))
      , Ea = (e,t)=>{
        let n = 0;
        if (e)
            for (let o = e.nodeType, r = e.previousSibling; r; r = r.previousSibling) {
                const e = r.nodeType;
                (!t || !Xo(r) || e !== o && r.data.length) && (n++,
                o = e)
            }
        return n
    }
      , Sa = (e,t)=>{
        const n = Jt(t, "style")
          , o = e.serialize(e.parse(n), jt(t));
        xa(t, Ca, o)
    }
      , _a = (e,t,n)=>{
        const o = ka(t);
        y(n) || "" === n ? uo(e, o) : ro(e, o, ((e,t)=>x(e) ? ke(wa, t) ? e + "" : e + "px" : e)(n, o))
    }
      , Na = (e,t={})=>{
        const n = {}
          , o = window
          , r = {};
        let s = 0;
        const a = Ts.forElement(bn(e), {
            contentCssCors: t.contentCssCors,
            referrerPolicy: t.referrerPolicy
        })
          , i = []
          , l = t.schema ? t.schema : ia({})
          , d = la({
            url_converter: t.url_converter,
            url_converter_scope: t.url_converter_scope
        }, t.schema)
          , c = t.ownEvents ? new ba : ba.Event
          , u = l.getBlockElements()
          , f = t=>t && e && m(t) ? e.getElementById(t) : t
          , g = e=>{
            const t = f(e);
            return C(t) ? bn(t) : null
        }
          , h = (e,t,n="")=>{
            let o;
            const r = g(e);
            if (C(r) && Vt(r)) {
                const e = Y[t];
                o = e && e.get ? e.get(r.dom, t) : Jt(r, t)
            }
            return C(o) ? o : n
        }
          , b = e=>{
            const t = f(e);
            return y(t) ? [] : t.attributes
        }
          , v = (e,n,o)=>{
            T(e, (e=>{
                if (jo(e)) {
                    const r = bn(e)
                      , s = "" === o ? null : o
                      , a = Jt(r, n)
                      , i = Y[n];
                    i && i.set ? i.set(r.dom, s, n) : xa(r, n, s),
                    a !== s && t.onSetAttrib && t.onSetAttrib({
                        attrElm: r.dom,
                        attrName: n,
                        attrValue: s
                    })
                }
            }
            ))
        }
          , x = ()=>t.root_element || e.body
          , k = (t,n)=>((e,t,n)=>{
            let o = 0
              , r = 0;
            const s = e.ownerDocument;
            if (n = n || e,
            t) {
                if (n === e && t.getBoundingClientRect && "static" === ao(bn(e), "position")) {
                    const n = t.getBoundingClientRect();
                    return o = n.left + (s.documentElement.scrollLeft || e.scrollLeft) - s.documentElement.clientLeft,
                    r = n.top + (s.documentElement.scrollTop || e.scrollTop) - s.documentElement.clientTop,
                    {
                        x: o,
                        y: r
                    }
                }
                let a = t;
                for (; a && a !== n && a.nodeType && !As(a, n); ) {
                    const e = a;
                    o += e.offsetLeft || 0,
                    r += e.offsetTop || 0,
                    a = e.offsetParent
                }
                for (a = t.parentNode; a && a !== n && a.nodeType && !As(a, n); )
                    o -= a.scrollLeft || 0,
                    r -= a.scrollTop || 0,
                    a = a.parentNode;
                r += (e=>Ns.isFirefox() && "table" === jt(e) ? Rs(Pn(e)).filter((e=>"caption" === jt(e))).bind((e=>Rs(Dn(e)).map((t=>{
                    const n = t.dom.offsetTop
                      , o = e.dom.offsetTop
                      , r = e.dom.offsetHeight;
                    return n <= o ? -r : 0
                }
                )))).getOr(0) : 0)(bn(t))
            }
            return {
                x: o,
                y: r
            }
        }
        )(e.body, f(t), n)
          , S = (e,t,n)=>{
            const o = f(e);
            if (!y(o) && jo(o))
                return n ? ao(bn(o), ka(t)) : ("float" === (t = t.replace(/-(\D)/g, ((e,t)=>t.toUpperCase()))) && (t = "cssFloat"),
                o.style ? o.style[t] : void 0)
        }
          , _ = e=>{
            const t = f(e);
            if (!t)
                return {
                    w: 0,
                    h: 0
                };
            let n = S(t, "width")
              , o = S(t, "height");
            return n && -1 !== n.indexOf("px") || (n = "0"),
            o && -1 !== o.indexOf("px") || (o = "0"),
            {
                w: parseInt(n, 10) || t.offsetWidth || t.clientWidth,
                h: parseInt(o, 10) || t.offsetHeight || t.clientHeight
            }
        }
          , R = (e,t)=>{
            if (!e)
                return !1;
            const n = p(e) ? e : [e];
            return $(n, (e=>Cn(bn(e), t)))
        }
          , A = (e,t,n,o)=>{
            const r = [];
            let s = f(e);
            o = void 0 === o;
            const a = n || ("BODY" !== x().nodeName ? x().parentNode : null);
            if (m(t))
                if ("*" === t)
                    t = jo;
                else {
                    const e = t;
                    t = t=>R(t, e)
                }
            for (; s && !(s === a || y(s.nodeType) || er(s) || tr(s)); ) {
                if (!t || t(s)) {
                    if (!o)
                        return [s];
                    r.push(s)
                }
                s = s.parentNode
            }
            return o ? r : null
        }
          , O = (e,t,n)=>{
            let o = t;
            if (e) {
                m(t) && (o = e=>R(e, t));
                for (let t = e[n]; t; t = t[n])
                    if (w(o) && o(t))
                        return t
            }
            return null
        }
          , T = function(e, t, n) {
            const o = null != n ? n : this;
            if (p(e)) {
                const n = [];
                return va(e, ((e,r)=>{
                    const s = f(e);
                    s && n.push(t.call(o, s, r))
                }
                )),
                n
            }
            {
                const n = f(e);
                return !!n && t.call(o, n)
            }
        }
          , B = (e,t)=>{
            T(e, (e=>{
                ge(t, ((t,n)=>{
                    v(e, n, t)
                }
                ))
            }
            ))
        }
          , D = (e,t)=>{
            T(e, (e=>{
                const n = bn(e);
                ko(n, t)
            }
            ))
        }
          , P = (t,n,o,r,s)=>T(t, (t=>{
            const a = m(n) ? e.createElement(n) : n;
            return C(o) && B(a, o),
            r && (!m(r) && r.nodeType ? a.appendChild(r) : m(r) && D(a, r)),
            s ? a : t.appendChild(a)
        }
        ))
          , L = (t,n,o)=>P(e.createElement(t), t, n, o, !0)
          , M = Gs.encodeAllRaw
          , I = (e,t)=>T(e, (e=>{
            const n = bn(e);
            return t && q(Pn(n), (e=>{
                qt(e) && 0 === e.dom.length ? yo(e) : mo(n, e)
            }
            )),
            yo(n),
            n.dom
        }
        ))
          , F = (e,t,n)=>{
            T(e, (e=>{
                if (jo(e)) {
                    const o = bn(e)
                      , r = t.split(" ");
                    q(r, (e=>{
                        C(n) ? (n ? dn : un)(o, e) : ((e,t)=>{
                            const n = rn(e) ? e.dom.classList.toggle(t) : ((e,t)=>H(sn(e), t) ? ln(e, t) : an(e, t))(e, t);
                            cn(e)
                        }
                        )(o, e)
                    }
                    ))
                }
            }
            ))
        }
          , U = (e,t,n)=>T(t, (o=>{
            var r;
            const s = p(t) ? e.cloneNode(!0) : e;
            return n && va(ya(o.childNodes), (e=>{
                s.appendChild(e)
            }
            )),
            null === (r = o.parentNode) || void 0 === r || r.replaceChild(s, o),
            o
        }
        ))
          , z = e=>{
            if (jo(e)) {
                const t = "a" === e.nodeName.toLowerCase() && !h(e, "href") && h(e, "id");
                if (h(e, "name") || h(e, "data-mce-bookmark") || t)
                    return !0
            }
            return !1
        }
          , j = ()=>e.createRange()
          , V = (n,r,s,a)=>{
            if (p(n)) {
                let e = n.length;
                const t = [];
                for (; e--; )
                    t[e] = V(n[e], r, s, a);
                return t
            }
            return !t.collect || n !== e && n !== o || i.push([n, r, s, a]),
            c.bind(n, r, s, a || G)
        }
          , W = (t,n,r)=>{
            if (p(t)) {
                let e = t.length;
                const o = [];
                for (; e--; )
                    o[e] = W(t[e], n, r);
                return o
            }
            if (i.length > 0 && (t === e || t === o)) {
                let e = i.length;
                for (; e--; ) {
                    const [o,s,a] = i[e];
                    t !== o || n && n !== s || r && r !== a || c.unbind(o, s, a)
                }
            }
            return c.unbind(t, n, r)
        }
          , K = e=>{
            if (e && jo(e)) {
                const t = e.getAttribute("data-mce-contenteditable");
                return t && "inherit" !== t ? t : "inherit" !== e.contentEditable ? e.contentEditable : null
            }
            return null
        }
          , G = {
            doc: e,
            settings: t,
            win: o,
            files: r,
            stdMode: !0,
            boxModel: !0,
            styleSheetLoader: a,
            boundEvents: i,
            styles: d,
            schema: l,
            events: c,
            isBlock: e=>m(e) ? ke(u, e) : jo(e) && (ke(u, e.nodeName) || Es(l, e)),
            root: null,
            clone: (e,t)=>e.cloneNode(t),
            getRoot: x,
            getViewPort: e=>{
                const t = Po(e);
                return {
                    x: t.x,
                    y: t.y,
                    w: t.width,
                    h: t.height
                }
            }
            ,
            getRect: e=>{
                const t = f(e)
                  , n = k(t)
                  , o = _(t);
                return {
                    x: n.x,
                    y: n.y,
                    w: o.w,
                    h: o.h
                }
            }
            ,
            getSize: _,
            getParent: (e,t,n)=>{
                const o = A(e, t, n, !1);
                return o && o.length > 0 ? o[0] : null
            }
            ,
            getParents: A,
            get: f,
            getNext: (e,t)=>O(e, t, "nextSibling"),
            getPrev: (e,t)=>O(e, t, "previousSibling"),
            select: (n,o)=>{
                var r, s;
                const a = null !== (s = null !== (r = f(o)) && void 0 !== r ? r : t.root_element) && void 0 !== s ? s : e;
                return w(a.querySelectorAll) ? ce(a.querySelectorAll(n)) : []
            }
            ,
            is: R,
            add: P,
            create: L,
            createHTML: (e,t,n="")=>{
                let o = "<" + e;
                for (const e in t)
                    Ee(t, e) && (o += " " + e + '="' + M(t[e]) + '"');
                return Ye(n) && ke(l.getVoidElements(), e) ? o + " />" : o + ">" + n + "</" + e + ">"
            }
            ,
            createFragment: t=>{
                const n = e.createElement("div")
                  , o = e.createDocumentFragment();
                let r;
                for (o.appendChild(n),
                t && (n.innerHTML = t); r = n.firstChild; )
                    o.appendChild(r);
                return o.removeChild(n),
                o
            }
            ,
            remove: I,
            setStyle: (e,n,o)=>{
                T(e, (e=>{
                    const r = bn(e);
                    _a(r, n, o),
                    t.update_styles && Sa(d, r)
                }
                ))
            }
            ,
            getStyle: S,
            setStyles: (e,n)=>{
                T(e, (e=>{
                    const o = bn(e);
                    ge(n, ((e,t)=>{
                        _a(o, t, e)
                    }
                    )),
                    t.update_styles && Sa(d, o)
                }
                ))
            }
            ,
            removeAllAttribs: e=>T(e, (e=>{
                const t = e.attributes;
                for (let n = t.length - 1; n >= 0; n--)
                    e.removeAttributeNode(t.item(n))
            }
            )),
            setAttrib: v,
            setAttribs: B,
            getAttrib: h,
            getPos: k,
            parseStyle: e=>d.parse(e),
            serializeStyle: (e,t)=>d.serialize(e, t),
            addStyle: t=>{
                if (G !== Na.DOM && e === document) {
                    if (n[t])
                        return;
                    n[t] = !0
                }
                let o = e.getElementById("mceDefaultStyles");
                if (!o) {
                    o = e.createElement("style"),
                    o.id = "mceDefaultStyles",
                    o.type = "text/css";
                    const t = e.head;
                    t.firstChild ? t.insertBefore(o, t.firstChild) : t.appendChild(o)
                }
                o.styleSheet ? o.styleSheet.cssText += t : o.appendChild(e.createTextNode(t))
            }
            ,
            loadCSS: e=>{
                e || (e = ""),
                q(e.split(","), (e=>{
                    r[e] = !0,
                    a.load(e).catch(E)
                }
                ))
            }
            ,
            addClass: (e,t)=>{
                F(e, t, !0)
            }
            ,
            removeClass: (e,t)=>{
                F(e, t, !1)
            }
            ,
            hasClass: (e,t)=>{
                const n = g(e)
                  , o = t.split(" ");
                return C(n) && ne(o, (e=>mn(n, e)))
            }
            ,
            toggleClass: F,
            show: e=>{
                T(e, (e=>uo(bn(e), "display")))
            }
            ,
            hide: e=>{
                T(e, (e=>ro(bn(e), "display", "none")))
            }
            ,
            isHidden: e=>{
                const t = g(e);
                return C(t) && Pt(lo(t, "display"), "none")
            }
            ,
            uniqueId: e=>(e || "mce_") + s++,
            setHTML: D,
            getOuterHTML: e=>{
                const t = g(e);
                return C(t) ? jo(t.dom) ? t.dom.outerHTML : (e=>{
                    const t = pn("div")
                      , n = bn(e.dom.cloneNode(!0));
                    return po(t, n),
                    xo(t)
                }
                )(t) : ""
            }
            ,
            setOuterHTML: (e,t)=>{
                T(e, (e=>{
                    jo(e) && (e.outerHTML = t)
                }
                ))
            }
            ,
            decode: Gs.decode,
            encode: M,
            insertAfter: (e,t)=>{
                const n = f(t);
                return T(e, (e=>{
                    const t = null == n ? void 0 : n.parentNode
                      , o = null == n ? void 0 : n.nextSibling;
                    return t && (o ? t.insertBefore(e, o) : t.appendChild(e)),
                    e
                }
                ))
            }
            ,
            replace: U,
            rename: (e,t)=>{
                if (e.nodeName !== t.toUpperCase()) {
                    const n = L(t);
                    return va(b(e), (t=>{
                        v(n, t.nodeName, h(e, t.nodeName))
                    }
                    )),
                    U(n, e, !0),
                    n
                }
                return e
            }
            ,
            findCommonAncestor: (e,t)=>{
                let n = e;
                for (; n; ) {
                    let e = t;
                    for (; e && n !== e; )
                        e = e.parentNode;
                    if (n === e)
                        break;
                    n = n.parentNode
                }
                return !n && e.ownerDocument ? e.ownerDocument.documentElement : n
            }
            ,
            run: T,
            getAttribs: b,
            isEmpty: (e,t)=>{
                let n = 0;
                if (z(e))
                    return !1;
                const o = e.firstChild;
                if (o) {
                    const r = new Fo(o,e)
                      , s = l ? l.getWhitespaceElements() : {}
                      , a = t || (l ? l.getNonEmptyElements() : null);
                    let i = o;
                    do {
                        if (jo(i)) {
                            const e = i.getAttribute("data-mce-bogus");
                            if (e) {
                                i = r.next("all" === e);
                                continue
                            }
                            const t = i.nodeName.toLowerCase();
                            if (a && a[t]) {
                                if ("br" === t) {
                                    n++,
                                    i = r.next();
                                    continue
                                }
                                return !1
                            }
                            if (z(i))
                                return !1
                        }
                        if (Zo(i))
                            return !1;
                        if (Xo(i) && !ss(i.data))
                            return !1;
                        if (Xo(i) && i.parentNode && s[i.parentNode.nodeName] && ss(i.data))
                            return !1;
                        i = r.next()
                    } while (i)
                }
                return n <= 1
            }
            ,
            createRng: j,
            nodeIndex: Ea,
            split: (e,t,n)=>{
                let o, r, s = j();
                if (e && t && e.parentNode && t.parentNode) {
                    const a = e.parentNode;
                    return s.setStart(a, Ea(e)),
                    s.setEnd(t.parentNode, Ea(t)),
                    o = s.extractContents(),
                    s = j(),
                    s.setStart(t.parentNode, Ea(t) + 1),
                    s.setEnd(a, Ea(e) + 1),
                    r = s.extractContents(),
                    a.insertBefore(Ps(G, o), e),
                    n ? a.insertBefore(n, e) : a.insertBefore(t, e),
                    a.insertBefore(Ps(G, r), e),
                    I(e),
                    n || t
                }
            }
            ,
            bind: V,
            unbind: W,
            fire: (e,t,n)=>c.dispatch(e, t, n),
            dispatch: (e,t,n)=>c.dispatch(e, t, n),
            getContentEditable: K,
            getContentEditableParent: e=>{
                const t = x();
                let n = null;
                for (let o = e; o && o !== t && (n = K(o),
                null === n); o = o.parentNode)
                    ;
                return n
            }
            ,
            isEditable: e=>{
                if (C(e)) {
                    const t = jo(e) ? e : e.parentElement
                      , n = "true" === K(x());
                    return C(t) && eo(bn(t), n)
                }
                return !1
            }
            ,
            destroy: ()=>{
                if (i.length > 0) {
                    let e = i.length;
                    for (; e--; ) {
                        const [t,n,o] = i[e];
                        c.unbind(t, n, o)
                    }
                }
                ge(r, ((e,t)=>{
                    a.unload(t),
                    delete r[t]
                }
                ))
            }
            ,
            isChildOf: (e,t)=>e === t || t.contains(e),
            dumpRng: e=>"startContainer: " + e.startContainer.nodeName + ", startOffset: " + e.startOffset + ", endContainer: " + e.endContainer.nodeName + ", endOffset: " + e.endOffset
        }
          , Y = ((e,t,n)=>{
            const o = t.keep_values
              , r = {
                set: (e,o,r)=>{
                    const s = bn(e);
                    w(t.url_converter) && C(o) && (o = t.url_converter.call(t.url_converter_scope || n(), String(o), r, e)),
                    xa(s, "data-mce-" + r, o),
                    xa(s, r, o)
                }
                ,
                get: (e,t)=>{
                    const n = bn(e);
                    return Jt(n, "data-mce-" + t) || Jt(n, t)
                }
            }
              , s = {
                style: {
                    set: (t,n)=>{
                        const r = bn(t);
                        o && xa(r, Ca, n),
                        tn(r, "style"),
                        m(n) && so(r, e.parse(n))
                    }
                    ,
                    get: t=>{
                        const n = bn(t)
                          , o = Jt(n, Ca) || Jt(n, "style");
                        return e.serialize(e.parse(o), jt(n))
                    }
                }
            };
            return o && (s.href = s.src = r),
            s
        }
        )(d, t, N(G));
        return G
    }
    ;
    Na.DOM = Na(document),
    Na.nodeIndex = Ea;
    const Ra = Na.DOM;
    class Aa {
        constructor(e={}) {
            this.states = {},
            this.queue = [],
            this.scriptLoadedCallbacks = {},
            this.queueLoadedCallbacks = [],
            this.loading = !1,
            this.settings = e
        }
        _setReferrerPolicy(e) {
            this.settings.referrerPolicy = e
        }
        loadScript(e) {
            return new Promise(((t,n)=>{
                const o = Ra;
                let r;
                const s = ()=>{
                    o.remove(a),
                    r && (r.onerror = r.onload = r = null)
                }
                  , a = o.uniqueId();
                r = document.createElement("script"),
                r.id = a,
                r.type = "text/javascript",
                r.src = Dt._addCacheSuffix(e),
                this.settings.referrerPolicy && o.setAttrib(r, "referrerpolicy", this.settings.referrerPolicy),
                r.onload = ()=>{
                    s(),
                    t()
                }
                ,
                r.onerror = ()=>{
                    s(),
                    n("Failed to load script: " + e)
                }
                ,
                (document.getElementsByTagName("head")[0] || document.body).appendChild(r)
            }
            ))
        }
        isDone(e) {
            return 2 === this.states[e]
        }
        markDone(e) {
            this.states[e] = 2
        }
        add(e) {
            const t = this;
            return t.queue.push(e),
            void 0 === t.states[e] && (t.states[e] = 0),
            new Promise(((n,o)=>{
                t.scriptLoadedCallbacks[e] || (t.scriptLoadedCallbacks[e] = []),
                t.scriptLoadedCallbacks[e].push({
                    resolve: n,
                    reject: o
                })
            }
            ))
        }
        load(e) {
            return this.add(e)
        }
        remove(e) {
            delete this.states[e],
            delete this.scriptLoadedCallbacks[e]
        }
        loadQueue() {
            const e = this.queue;
            return this.queue = [],
            this.loadScripts(e)
        }
        loadScripts(e) {
            const t = this
              , n = (e,n)=>{
                xe(t.scriptLoadedCallbacks, n).each((t=>{
                    q(t, (t=>t[e](n)))
                }
                )),
                delete t.scriptLoadedCallbacks[n]
            }
              , o = e=>{
                const t = G(e, (e=>"rejected" === e.status));
                return t.length > 0 ? Promise.reject(te(t, (({reason: e})=>p(e) ? e : [e]))) : Promise.resolve()
            }
              , r = e=>Promise.allSettled(V(e, (e=>2 === t.states[e] ? (n("resolve", e),
            Promise.resolve()) : 3 === t.states[e] ? (n("reject", e),
            Promise.reject(e)) : (t.states[e] = 1,
            t.loadScript(e).then((()=>{
                t.states[e] = 2,
                n("resolve", e);
                const s = t.queue;
                return s.length > 0 ? (t.queue = [],
                r(s).then(o)) : Promise.resolve()
            }
            ), (()=>(t.states[e] = 3,
            n("reject", e),
            Promise.reject(e))))))))
              , s = e=>(t.loading = !0,
            r(e).then((e=>{
                t.loading = !1;
                const n = t.queueLoadedCallbacks.shift();
                return I.from(n).each(P),
                o(e)
            }
            )))
              , a = Se(e);
            return t.loading ? new Promise(((e,n)=>{
                t.queueLoadedCallbacks.push((()=>s(a).then(e, n)))
            }
            )) : s(a)
        }
    }
    Aa.ScriptLoader = new Aa;
    const Oa = e=>{
        let t = e;
        return {
            get: ()=>t,
            set: e=>{
                t = e
            }
        }
    }
      , Ta = {}
      , Ba = Oa("en")
      , Da = ()=>xe(Ta, Ba.get())
      , Pa = {
        getData: ()=>pe(Ta, (e=>({
            ...e
        }))),
        setCode: e=>{
            e && Ba.set(e)
        }
        ,
        getCode: ()=>Ba.get(),
        add: (e,t)=>{
            let n = Ta[e];
            n || (Ta[e] = n = {}),
            ge(t, ((e,t)=>{
                n[t.toLowerCase()] = e
            }
            ))
        }
        ,
        translate: e=>{
            const t = Da().getOr({})
              , n = e=>w(e) ? Object.prototype.toString.call(e) : o(e) ? "" : "" + e
              , o = e=>"" === e || null == e
              , r = e=>{
                const o = n(e);
                return xe(t, o.toLowerCase()).map(n).getOr(o)
            }
              , s = e=>e.replace(/{context:\w+}$/, "");
            if (o(e))
                return "";
            if (f(a = e) && ke(a, "raw"))
                return n(e.raw);
            var a;
            if ((e=>p(e) && e.length > 1)(e)) {
                const t = e.slice(1);
                return s(r(e[0]).replace(/\{([0-9]+)\}/g, ((e,o)=>ke(t, o) ? n(t[o]) : e)))
            }
            return s(r(e))
        }
        ,
        isRtl: ()=>Da().bind((e=>xe(e, "_dir"))).exists((e=>"rtl" === e)),
        hasCode: e=>ke(Ta, e)
    }
      , La = ()=>{
        const e = []
          , t = {}
          , n = {}
          , o = []
          , r = (e,t)=>{
            const n = G(o, (n=>n.name === e && n.state === t));
            q(n, (e=>e.resolve()))
        }
          , s = e=>ke(t, e)
          , a = (e,n)=>{
            const o = Pa.getCode();
            !o || n && -1 === ("," + (n || "") + ",").indexOf("," + o + ",") || Aa.ScriptLoader.add(t[e] + "/langs/" + o + ".js")
        }
          , i = (e,t="added")=>"added" === t && (e=>ke(n, e))(e) || "loaded" === t && s(e) ? Promise.resolve() : new Promise((n=>{
            o.push({
                name: e,
                state: t,
                resolve: n
            })
        }
        ));
        return {
            items: e,
            urls: t,
            lookup: n,
            get: e=>{
                if (n[e])
                    return n[e].instance
            }
            ,
            requireLangPack: (e,t)=>{
                !1 !== La.languageLoad && (s(e) ? a(e, t) : i(e, "loaded").then((()=>a(e, t))))
            }
            ,
            add: (t,o)=>(e.push(o),
            n[t] = {
                instance: o
            },
            r(t, "added"),
            o),
            remove: e=>{
                delete t[e],
                delete n[e]
            }
            ,
            createUrl: (e,t)=>m(t) ? m(e) ? {
                prefix: "",
                resource: t,
                suffix: ""
            } : {
                prefix: e.prefix,
                resource: t,
                suffix: e.suffix
            } : t,
            load: (e,o)=>{
                if (t[e])
                    return Promise.resolve();
                let s = m(o) ? o : o.prefix + o.resource + o.suffix;
                0 !== s.indexOf("/") && -1 === s.indexOf("://") && (s = La.baseURL + "/" + s),
                t[e] = s.substring(0, s.lastIndexOf("/"));
                const a = ()=>(r(e, "loaded"),
                Promise.resolve());
                return n[e] ? a() : Aa.ScriptLoader.add(s).then(a)
            }
            ,
            waitFor: i
        }
    }
    ;
    La.languageLoad = !0,
    La.baseURL = "",
    La.PluginManager = La(),
    La.ThemeManager = La(),
    La.ModelManager = La();
    const Ma = e=>{
        const t = Oa(I.none())
          , n = ()=>t.get().each((e=>clearInterval(e)));
        return {
            clear: ()=>{
                n(),
                t.set(I.none())
            }
            ,
            isSet: ()=>t.get().isSome(),
            get: ()=>t.get(),
            set: o=>{
                n(),
                t.set(I.some(setInterval(o, e)))
            }
        }
    }
      , Ia = ()=>{
        const e = (e=>{
            const t = Oa(I.none())
              , n = ()=>t.get().each(e);
            return {
                clear: ()=>{
                    n(),
                    t.set(I.none())
                }
                ,
                isSet: ()=>t.get().isSome(),
                get: ()=>t.get(),
                set: e=>{
                    n(),
                    t.set(I.some(e))
                }
            }
        }
        )(E);
        return {
            ...e,
            on: t=>e.get().each(t)
        }
    }
      , Fa = (e,t)=>{
        let n = null;
        return {
            cancel: ()=>{
                h(n) || (clearTimeout(n),
                n = null)
            }
            ,
            throttle: (...o)=>{
                h(n) && (n = setTimeout((()=>{
                    n = null,
                    e.apply(null, o)
                }
                ), t))
            }
        }
    }
      , Ua = (e,t)=>{
        let n = null;
        const o = ()=>{
            h(n) || (clearTimeout(n),
            n = null)
        }
        ;
        return {
            cancel: o,
            throttle: (...r)=>{
                o(),
                n = setTimeout((()=>{
                    n = null,
                    e.apply(null, r)
                }
                ), t)
            }
        }
    }
      , za = N("mce-annotation")
      , ja = N("data-mce-annotation")
      , Ha = N("data-mce-annotation-uid")
      , $a = N("data-mce-annotation-active")
      , Va = N("data-mce-annotation-classes")
      , qa = N("data-mce-annotation-attrs")
      , Wa = e=>t=>xn(t, e)
      , Ka = (e,t)=>{
        const n = e.selection.getRng()
          , o = bn(n.startContainer)
          , r = bn(e.getBody())
          , s = t.fold((()=>"." + za()), (e=>`[${ja()}="${e}"]`))
          , a = Ln(o, n.startOffset).getOr(o);
        return Zn(a, s, Wa(r)).bind((t=>Zt(t, `${Ha()}`).bind((n=>Zt(t, `${ja()}`).map((t=>{
            const o = Ya(e, n);
            return {
                uid: n,
                name: t,
                elements: o
            }
        }
        ))))))
    }
      , Ga = (e,t)=>en(e, "data-mce-bogus") || Io(e, '[data-mce-bogus="all"]', Wa(t))
      , Ya = (e,t)=>{
        const n = bn(e.getBody())
          , o = Mo(n, `[${Ha()}="${t}"]`);
        return G(o, (e=>!Ga(e, n)))
    }
      , Xa = (e,t)=>{
        const n = bn(e.getBody())
          , o = Mo(n, `[${ja()}="${t}"]`)
          , r = {};
        return q(o, (e=>{
            if (!Ga(e, n)) {
                const t = Jt(e, Ha())
                  , n = xe(r, t).getOr([]);
                r[t] = n.concat([e])
            }
        }
        )),
        r
    }
    ;
    let Qa = 0;
    const Ja = e=>{
        const t = (new Date).getTime()
          , n = Math.floor(1e9 * Math.random());
        return Qa++,
        e + "_" + n + Qa + String(t)
    }
      , Za = (e,t)=>bn(e.dom.cloneNode(t))
      , ei = e=>Za(e, !1)
      , ti = e=>Za(e, !0)
      , ni = (e,t,n=L)=>{
        const o = new Fo(e,t)
          , r = e=>{
            let t;
            do {
                t = o[e]()
            } while (t && !Xo(t) && !n(t));
            return I.from(t).filter(Xo)
        }
        ;
        return {
            current: ()=>I.from(o.current()).filter(Xo),
            next: ()=>r("next"),
            prev: ()=>r("prev"),
            prev2: ()=>r("prev2")
        }
    }
      , oi = (e,t)=>{
        const n = t || (t=>e.isBlock(t) || nr(t) || sr(t))
          , o = (e,t,n,r)=>{
            if (Xo(e)) {
                const n = r(e, t, e.data);
                if (-1 !== n)
                    return I.some({
                        container: e,
                        offset: n
                    })
            }
            return n().bind((e=>o(e.container, e.offset, n, r)))
        }
        ;
        return {
            backwards: (t,r,s,a)=>{
                const i = ni(t, null != a ? a : e.getRoot(), n);
                return o(t, r, (()=>i.prev().map((e=>({
                    container: e,
                    offset: e.length
                })))), s).getOrNull()
            }
            ,
            forwards: (t,r,s,a)=>{
                const i = ni(t, null != a ? a : e.getRoot(), n);
                return o(t, r, (()=>i.next().map((e=>({
                    container: e,
                    offset: 0
                })))), s).getOrNull()
            }
        }
    }
      , ri = Math.round
      , si = e=>e ? {
        left: ri(e.left),
        top: ri(e.top),
        bottom: ri(e.bottom),
        right: ri(e.right),
        width: ri(e.width),
        height: ri(e.height)
    } : {
        left: 0,
        top: 0,
        bottom: 0,
        right: 0,
        width: 0,
        height: 0
    }
      , ai = (e,t)=>(e = si(e),
    t || (e.left = e.left + e.width),
    e.right = e.left,
    e.width = 0,
    e)
      , ii = (e,t,n)=>e >= 0 && e <= Math.min(t.height, n.height) / 2
      , li = (e,t)=>{
        const n = Math.min(t.height / 2, e.height / 2);
        return e.bottom - n < t.top || !(e.top > t.bottom) && ii(t.top - e.bottom, e, t)
    }
      , di = (e,t)=>e.top > t.bottom || !(e.bottom < t.top) && ii(t.bottom - e.top, e, t)
      , ci = (e,t,n)=>{
        const o = Math.max(Math.min(t, e.left + e.width), e.left)
          , r = Math.max(Math.min(n, e.top + e.height), e.top);
        return Math.sqrt((t - o) * (t - o) + (n - r) * (n - r))
    }
      , ui = e=>{
        const t = e.startContainer
          , n = e.startOffset;
        return t === e.endContainer && t.hasChildNodes() && e.endOffset === n + 1 ? t.childNodes[n] : null
    }
      , mi = (e,t)=>{
        if (jo(e) && e.hasChildNodes()) {
            const n = e.childNodes
              , o = ((e,t,n)=>Math.min(Math.max(e, 0), n))(t, 0, n.length - 1);
            return n[o]
        }
        return e
    }
      , fi = new RegExp("[\u0300-\u036f\u0483-\u0487\u0488-\u0489\u0591-\u05bd\u05bf\u05c1-\u05c2\u05c4-\u05c5\u05c7\u0610-\u061a\u064b-\u065f\u0670\u06d6-\u06dc\u06df-\u06e4\u06e7-\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0859-\u085b\u08e3-\u0902\u093a\u093c\u0941-\u0948\u094d\u0951-\u0957\u0962-\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2-\u09e3\u0a01-\u0a02\u0a3c\u0a41-\u0a42\u0a47-\u0a48\u0a4b-\u0a4d\u0a51\u0a70-\u0a71\u0a75\u0a81-\u0a82\u0abc\u0ac1-\u0ac5\u0ac7-\u0ac8\u0acd\u0ae2-\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62-\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c00\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55-\u0c56\u0c62-\u0c63\u0c81\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc-\u0ccd\u0cd5-\u0cd6\u0ce2-\u0ce3\u0d01\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62-\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb-\u0ebc\u0ec8-\u0ecd\u0f18-\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86-\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039-\u103a\u103d-\u103e\u1058-\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085-\u1086\u108d\u109d\u135d-\u135f\u1712-\u1714\u1732-\u1734\u1752-\u1753\u1772-\u1773\u17b4-\u17b5\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927-\u1928\u1932\u1939-\u193b\u1a17-\u1a18\u1a1b\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1ab0-\u1abd\u1abe\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80-\u1b81\u1ba2-\u1ba5\u1ba8-\u1ba9\u1bab-\u1bad\u1be6\u1be8-\u1be9\u1bed\u1bef-\u1bf1\u1c2c-\u1c33\u1c36-\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1cf4\u1cf8-\u1cf9\u1dc0-\u1df5\u1dfc-\u1dff\u200c-\u200d\u20d0-\u20dc\u20dd-\u20e0\u20e1\u20e2-\u20e4\u20e5-\u20f0\u2cef-\u2cf1\u2d7f\u2de0-\u2dff\u302a-\u302d\u302e-\u302f\u3099-\u309a\ua66f\ua670-\ua672\ua674-\ua67d\ua69e-\ua69f\ua6f0-\ua6f1\ua802\ua806\ua80b\ua825-\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\ua9e5\uaa29-\uaa2e\uaa31-\uaa32\uaa35-\uaa36\uaa43\uaa4c\uaa7c\uaab0\uaab2-\uaab4\uaab7-\uaab8\uaabe-\uaabf\uaac1\uaaec-\uaaed\uaaf6\uabe5\uabe8\uabed\ufb1e\ufe00-\ufe0f\ufe20-\ufe2f\uff9e-\uff9f]")
      , gi = e=>m(e) && e.charCodeAt(0) >= 768 && fi.test(e)
      , pi = jo
      , hi = ts
      , bi = Vo("display", "block table")
      , vi = Vo("float", "left right")
      , yi = ((...e)=>t=>{
        for (let n = 0; n < e.length; n++)
            if (!e[n](t))
                return !1;
        return !0
    }
    )(pi, hi, T(vi))
      , Ci = T(Vo("white-space", "pre pre-line pre-wrap"))
      , wi = Xo
      , xi = nr
      , ki = Na.nodeIndex
      , Ei = (e,t)=>t < 0 && jo(e) && e.hasChildNodes() ? void 0 : mi(e, t)
      , Si = e=>e ? e.createRange() : Na.DOM.createRng()
      , _i = e=>m(e) && /[\r\n\t ]/.test(e)
      , Ni = e=>!!e.setStart && !!e.setEnd
      , Ri = e=>{
        const t = e.startContainer
          , n = e.startOffset;
        if (_i(e.toString()) && Ci(t.parentNode) && Xo(t)) {
            const e = t.data;
            if (_i(e[n - 1]) || _i(e[n + 1]))
                return !0
        }
        return !1
    }
      , Ai = e=>0 === e.left && 0 === e.right && 0 === e.top && 0 === e.bottom
      , Oi = e=>{
        var t;
        let n;
        const o = e.getClientRects();
        return n = o.length > 0 ? si(o[0]) : si(e.getBoundingClientRect()),
        !Ni(e) && xi(e) && Ai(n) ? (e=>{
            const t = e.ownerDocument
              , n = Si(t)
              , o = t.createTextNode(ur)
              , r = e.parentNode;
            r.insertBefore(o, e),
            n.setStart(o, 0),
            n.setEnd(o, 1);
            const s = si(n.getBoundingClientRect());
            return r.removeChild(o),
            s
        }
        )(e) : Ai(n) && Ni(e) && null !== (t = (e=>{
            const t = e.startContainer
              , n = e.endContainer
              , o = e.startOffset
              , r = e.endOffset;
            if (t === n && Xo(n) && 0 === o && 1 === r) {
                const t = e.cloneRange();
                return t.setEndAfter(n),
                Oi(t)
            }
            return null
        }
        )(e)) && void 0 !== t ? t : n
    }
      , Ti = (e,t)=>{
        const n = ai(e, t);
        return n.width = 1,
        n.right = n.left + 1,
        n
    }
      , Bi = (e,t,n)=>{
        const o = ()=>(n || (n = (e=>{
            const t = []
              , n = e=>{
                var n, o;
                0 !== e.height && (t.length > 0 && (n = e,
                o = t[t.length - 1],
                n.left === o.left && n.top === o.top && n.bottom === o.bottom && n.right === o.right) || t.push(e))
            }
              , o = (e,t)=>{
                const o = Si(e.ownerDocument);
                if (t < e.data.length) {
                    if (gi(e.data[t]))
                        return;
                    if (gi(e.data[t - 1]) && (o.setStart(e, t),
                    o.setEnd(e, t + 1),
                    !Ri(o)))
                        return void n(Ti(Oi(o), !1))
                }
                t > 0 && (o.setStart(e, t - 1),
                o.setEnd(e, t),
                Ri(o) || n(Ti(Oi(o), !1))),
                t < e.data.length && (o.setStart(e, t),
                o.setEnd(e, t + 1),
                Ri(o) || n(Ti(Oi(o), !0)))
            }
              , r = e.container()
              , s = e.offset();
            if (wi(r))
                return o(r, s),
                t;
            if (pi(r))
                if (e.isAtEnd()) {
                    const e = Ei(r, s);
                    wi(e) && o(e, e.data.length),
                    yi(e) && !xi(e) && n(Ti(Oi(e), !1))
                } else {
                    const a = Ei(r, s);
                    if (wi(a) && o(a, 0),
                    yi(a) && e.isAtEnd())
                        return n(Ti(Oi(a), !1)),
                        t;
                    const i = Ei(e.container(), e.offset() - 1);
                    yi(i) && !xi(i) && (bi(i) || bi(a) || !yi(a)) && n(Ti(Oi(i), !1)),
                    yi(a) && n(Ti(Oi(a), !0))
                }
            return t
        }
        )(Bi(e, t))),
        n);
        return {
            container: N(e),
            offset: N(t),
            toRange: ()=>{
                const n = Si(e.ownerDocument);
                return n.setStart(e, t),
                n.setEnd(e, t),
                n
            }
            ,
            getClientRects: o,
            isVisible: ()=>o().length > 0,
            isAtStart: ()=>(wi(e),
            0 === t),
            isAtEnd: ()=>wi(e) ? t >= e.data.length : t >= e.childNodes.length,
            isEqual: n=>n && e === n.container() && t === n.offset(),
            getNode: n=>Ei(e, n ? t - 1 : t)
        }
    }
    ;
    Bi.fromRangeStart = e=>Bi(e.startContainer, e.startOffset),
    Bi.fromRangeEnd = e=>Bi(e.endContainer, e.endOffset),
    Bi.after = e=>Bi(e.parentNode, ki(e) + 1),
    Bi.before = e=>Bi(e.parentNode, ki(e)),
    Bi.isAbove = (e,t)=>Lt(le(t.getClientRects()), de(e.getClientRects()), li).getOr(!1),
    Bi.isBelow = (e,t)=>Lt(de(t.getClientRects()), le(e.getClientRects()), di).getOr(!1),
    Bi.isAtStart = e=>!!e && e.isAtStart(),
    Bi.isAtEnd = e=>!!e && e.isAtEnd(),
    Bi.isTextPosition = e=>!!e && Xo(e.container()),
    Bi.isElementPosition = e=>!Bi.isTextPosition(e);
    const Di = (e,t)=>{
        Xo(t) && 0 === t.data.length && e.remove(t)
    }
      , Pi = (e,t,n)=>{
        tr(n) ? ((e,t,n)=>{
            const o = I.from(n.firstChild)
              , r = I.from(n.lastChild);
            t.insertNode(n),
            o.each((t=>Di(e, t.previousSibling))),
            r.each((t=>Di(e, t.nextSibling)))
        }
        )(e, t, n) : ((e,t,n)=>{
            t.insertNode(n),
            Di(e, n.previousSibling),
            Di(e, n.nextSibling)
        }
        )(e, t, n)
    }
      , Li = Xo
      , Mi = Wo
      , Ii = Na.nodeIndex
      , Fi = e=>{
        const t = e.parentNode;
        return Mi(t) ? Fi(t) : t
    }
      , Ui = e=>e ? Te(e.childNodes, ((e,t)=>(Mi(t) && "BR" !== t.nodeName ? e = e.concat(Ui(t)) : e.push(t),
    e)), []) : []
      , zi = e=>t=>e === t
      , ji = e=>(Li(e) ? "text()" : e.nodeName.toLowerCase()) + "[" + (e=>{
        let t, n;
        t = Ui(Fi(e)),
        n = Be(t, zi(e), e),
        t = t.slice(0, n + 1);
        const o = Te(t, ((e,n,o)=>(Li(n) && Li(t[o - 1]) && e++,
        e)), 0);
        return t = Oe(t, $o([e.nodeName])),
        n = Be(t, zi(e), e),
        n - o
    }
    )(e) + "]"
      , Hi = (e,t)=>{
        let n, o = [], r = t.container(), s = t.offset();
        if (Li(r))
            n = ((e,t)=>{
                let n = e;
                for (; (n = n.previousSibling) && Li(n); )
                    t += n.data.length;
                return t
            }
            )(r, s);
        else {
            const e = r.childNodes;
            s >= e.length ? (n = "after",
            s = e.length - 1) : n = "before",
            r = e[s]
        }
        o.push(ji(r));
        let a = ((e,t,n)=>{
            const o = [];
            for (let n = t.parentNode; n && n !== e; n = n.parentNode)
                o.push(n);
            return o
        }
        )(e, r);
        return a = Oe(a, T(Wo)),
        o = o.concat(Ae(a, (e=>ji(e)))),
        o.reverse().join("/") + "," + n
    }
      , $i = (e,t)=>{
        if (!t)
            return null;
        const n = t.split(",")
          , o = n[0].split("/")
          , r = n.length > 1 ? n[1] : "before"
          , s = Te(o, ((e,t)=>{
            const n = /([\w\-\(\)]+)\[([0-9]+)\]/.exec(t);
            return n ? ("text()" === n[1] && (n[1] = "#text"),
            ((e,t,n)=>{
                let o = Ui(e);
                return o = Oe(o, ((e,t)=>!Li(e) || !Li(o[t - 1]))),
                o = Oe(o, $o([t])),
                o[n]
            }
            )(e, n[1], parseInt(n[2], 10))) : null
        }
        ), e);
        if (!s)
            return null;
        if (!Li(s) && s.parentNode) {
            let e;
            return e = "after" === r ? Ii(s) + 1 : Ii(s),
            Bi(s.parentNode, e)
        }
        return ((e,t)=>{
            let n = e
              , o = 0;
            for (; Li(n); ) {
                const r = n.data.length;
                if (t >= o && t <= o + r) {
                    e = n,
                    t -= o;
                    break
                }
                if (!Li(n.nextSibling)) {
                    e = n,
                    t = r;
                    break
                }
                o += r,
                n = n.nextSibling
            }
            return Li(e) && t > e.data.length && (t = e.data.length),
            Bi(e, t)
        }
        )(s, parseInt(r, 10))
    }
      , Vi = sr
      , qi = (e,t,n,o,r)=>{
        const s = r ? o.startContainer : o.endContainer;
        let a = r ? o.startOffset : o.endOffset;
        const i = []
          , l = e.getRoot();
        if (Xo(s))
            i.push(n ? ((e,t,n)=>{
                let o = e(t.data.slice(0, n)).length;
                for (let n = t.previousSibling; n && Xo(n); n = n.previousSibling)
                    o += e(n.data).length;
                return o
            }
            )(t, s, a) : a);
        else {
            let t = 0;
            const o = s.childNodes;
            a >= o.length && o.length && (t = 1,
            a = Math.max(0, o.length - 1)),
            i.push(e.nodeIndex(o[a], n) + t)
        }
        for (let t = s; t && t !== l; t = t.parentNode)
            i.push(e.nodeIndex(t, n));
        return i
    }
      , Wi = (e,t,n)=>{
        let o = 0;
        return Dt.each(e.select(t), (e=>"all" === e.getAttribute("data-mce-bogus") ? void 0 : e !== n && void o++)),
        o
    }
      , Ki = (e,t)=>{
        let n = t ? e.startContainer : e.endContainer
          , o = t ? e.startOffset : e.endOffset;
        if (jo(n) && "TR" === n.nodeName) {
            const r = n.childNodes;
            n = r[Math.min(t ? o : o - 1, r.length - 1)],
            n && (o = t ? 0 : n.childNodes.length,
            t ? e.setStart(n, o) : e.setEnd(n, o))
        }
    }
      , Gi = e=>(Ki(e, !0),
    Ki(e, !1),
    e)
      , Yi = (e,t)=>{
        if (jo(e) && (e = mi(e, t),
        Vi(e)))
            return e;
        if (Ur(e)) {
            Xo(e) && Ir(e) && (e = e.parentNode);
            let t = e.previousSibling;
            if (Vi(t))
                return t;
            if (t = e.nextSibling,
            Vi(t))
                return t
        }
    }
      , Xi = (e,t,n)=>{
        const o = n.getNode()
          , r = n.getRng();
        if ("IMG" === o.nodeName || Vi(o)) {
            const e = o.nodeName;
            return {
                name: e,
                index: Wi(n.dom, e, o)
            }
        }
        const s = (e=>Yi(e.startContainer, e.startOffset) || Yi(e.endContainer, e.endOffset))(r);
        if (s) {
            const e = s.tagName;
            return {
                name: e,
                index: Wi(n.dom, e, s)
            }
        }
        return ((e,t,n,o)=>{
            const r = t.dom
              , s = qi(r, e, n, o, !0)
              , a = t.isForward()
              , i = Wr(o) ? {
                isFakeCaret: !0
            } : {};
            return t.isCollapsed() ? {
                start: s,
                forward: a,
                ...i
            } : {
                start: s,
                end: qi(r, e, n, o, !1),
                forward: a,
                ...i
            }
        }
        )(e, n, t, r)
    }
      , Qi = (e,t,n)=>{
        const o = {
            "data-mce-type": "bookmark",
            id: t,
            style: "overflow:hidden;line-height:0px"
        };
        return n ? e.create("span", o, "&#xFEFF;") : e.create("span", o)
    }
      , Ji = (e,t)=>{
        const n = e.dom;
        let o = e.getRng();
        const r = n.uniqueId()
          , s = e.isCollapsed()
          , a = e.getNode()
          , i = a.nodeName
          , l = e.isForward();
        if ("IMG" === i)
            return {
                name: i,
                index: Wi(n, i, a)
            };
        const d = Gi(o.cloneRange());
        if (!s) {
            d.collapse(!1);
            const e = Qi(n, r + "_end", t);
            Pi(n, d, e)
        }
        o = Gi(o),
        o.collapse(!0);
        const c = Qi(n, r + "_start", t);
        return Pi(n, o, c),
        e.moveToBookmark({
            id: r,
            keep: !0,
            forward: l
        }),
        {
            id: r,
            forward: l
        }
    }
      , Zi = O(Xi, R, !0)
      , el = e=>{
        const t = t=>t(e)
          , n = N(e)
          , o = ()=>r
          , r = {
            tag: !0,
            inner: e,
            fold: (t,n)=>n(e),
            isValue: M,
            isError: L,
            map: t=>nl.value(t(e)),
            mapError: o,
            bind: t,
            exists: t,
            forall: t,
            getOr: n,
            or: o,
            getOrThunk: n,
            orThunk: o,
            getOrDie: n,
            each: t=>{
                t(e)
            }
            ,
            toOptional: ()=>I.some(e)
        };
        return r
    }
      , tl = e=>{
        const t = ()=>n
          , n = {
            tag: !1,
            inner: e,
            fold: (t,n)=>t(e),
            isValue: L,
            isError: M,
            map: t,
            mapError: t=>nl.error(t(e)),
            bind: t,
            exists: L,
            forall: M,
            getOr: R,
            or: R,
            getOrThunk: D,
            orThunk: D,
            getOrDie: B(String(e)),
            each: E,
            toOptional: I.none
        };
        return n
    }
      , nl = {
        value: el,
        error: tl,
        fromOption: (e,t)=>e.fold((()=>tl(t)), el)
    }
      , ol = e=>{
        if (!p(e))
            throw new Error("cases must be an array");
        if (0 === e.length)
            throw new Error("there must be at least one case");
        const t = []
          , n = {};
        return q(e, ((o,r)=>{
            const s = me(o);
            if (1 !== s.length)
                throw new Error("one and only one name per case");
            const a = s[0]
              , i = o[a];
            if (void 0 !== n[a])
                throw new Error("duplicate key detected:" + a);
            if ("cata" === a)
                throw new Error("cannot have a case named cata (sorry)");
            if (!p(i))
                throw new Error("case arguments must be an array");
            t.push(a),
            n[a] = (...n)=>{
                const o = n.length;
                if (o !== i.length)
                    throw new Error("Wrong number of arguments to case " + a + ". Expected " + i.length + " (" + i + "), got " + o);
                return {
                    fold: (...t)=>{
                        if (t.length !== e.length)
                            throw new Error("Wrong number of arguments to fold. Expected " + e.length + ", got " + t.length);
                        return t[r].apply(null, n)
                    }
                    ,
                    match: e=>{
                        const o = me(e);
                        if (t.length !== o.length)
                            throw new Error("Wrong number of arguments to match. Expected: " + t.join(",") + "\nActual: " + o.join(","));
                        if (!ne(t, (e=>H(o, e))))
                            throw new Error("Not all branches were specified when using match. Specified: " + o.join(", ") + "\nRequired: " + t.join(", "));
                        return e[a].apply(null, n)
                    }
                    ,
                    log: e=>{
                        console.log(e, {
                            constructors: t,
                            constructor: a,
                            params: n
                        })
                    }
                }
            }
        }
        )),
        n
    }
    ;
    ol([{
        bothErrors: ["error1", "error2"]
    }, {
        firstError: ["error1", "value2"]
    }, {
        secondError: ["value1", "error2"]
    }, {
        bothValues: ["value1", "value2"]
    }]);
    const rl = e=>"inline-command" === e.type || "inline-format" === e.type
      , sl = e=>"block-command" === e.type || "block-format" === e.type
      , al = e=>{
        const t = t=>nl.error({
            message: t,
            pattern: e
        })
          , n = (n,o,r)=>{
            if (void 0 !== e.format) {
                let r;
                if (p(e.format)) {
                    if (!ne(e.format, m))
                        return t(n + " pattern has non-string items in the `format` array");
                    r = e.format
                } else {
                    if (!m(e.format))
                        return t(n + " pattern has non-string `format` parameter");
                    r = [e.format]
                }
                return nl.value(o(r))
            }
            return void 0 !== e.cmd ? m(e.cmd) ? nl.value(r(e.cmd, e.value)) : t(n + " pattern has non-string `cmd` parameter") : t(n + " pattern is missing both `format` and `cmd` parameters")
        }
        ;
        if (!f(e))
            return t("Raw pattern is not an object");
        if (!m(e.start))
            return t("Raw pattern is missing `start` parameter");
        if (void 0 !== e.end) {
            if (!m(e.end))
                return t("Inline pattern has non-string `end` parameter");
            if (0 === e.start.length && 0 === e.end.length)
                return t("Inline pattern has empty `start` and `end` parameters");
            let o = e.start
              , r = e.end;
            return 0 === r.length && (r = o,
            o = ""),
            n("Inline", (e=>({
                type: "inline-format",
                start: o,
                end: r,
                format: e
            })), ((e,t)=>({
                type: "inline-command",
                start: o,
                end: r,
                cmd: e,
                value: t
            })))
        }
        return void 0 !== e.replacement ? m(e.replacement) ? 0 === e.start.length ? t("Replacement pattern has empty `start` parameter") : nl.value({
            type: "inline-command",
            start: "",
            end: e.start,
            cmd: "mceInsertContent",
            value: e.replacement
        }) : t("Replacement pattern has non-string `replacement` parameter") : 0 === e.start.length ? t("Block pattern has empty `start` parameter") : n("Block", (t=>({
            type: "block-format",
            start: e.start,
            format: t[0]
        })), ((t,n)=>({
            type: "block-command",
            start: e.start,
            cmd: t,
            value: n
        })))
    }
      , il = e=>G(e, sl)
      , ll = e=>G(e, rl)
      , dl = e=>{
        const t = (e=>{
            const t = []
              , n = [];
            return q(e, (e=>{
                e.fold((e=>{
                    t.push(e)
                }
                ), (e=>{
                    n.push(e)
                }
                ))
            }
            )),
            {
                errors: t,
                values: n
            }
        }
        )(V(e, al));
        return q(t.errors, (e=>console.error(e.message, e.pattern))),
        t.values
    }
      , cl = xt().deviceType
      , ul = cl.isTouch()
      , ml = Na.DOM
      , fl = e=>u(e, RegExp)
      , gl = e=>t=>t.options.get(e)
      , pl = e=>m(e) || f(e)
      , hl = (e,t="")=>n=>{
        const o = m(n);
        if (o) {
            if (-1 !== n.indexOf("=")) {
                const r = (e=>{
                    const t = e.indexOf("=") > 0 ? e.split(/[;,](?![^=;,]*(?:[;,]|$))/) : e.split(",");
                    return X(t, ((e,t)=>{
                        const n = t.split("=")
                          , o = n[0]
                          , r = n.length > 1 ? n[1] : o;
                        return e[qe(o)] = qe(r),
                        e
                    }
                    ), {})
                }
                )(n);
                return {
                    value: xe(r, e.id).getOr(t),
                    valid: o
                }
            }
            return {
                value: n,
                valid: o
            }
        }
        return {
            valid: !1,
            message: "Must be a string."
        }
    }
      , bl = gl("iframe_attrs")
      , vl = gl("doctype")
      , yl = gl("document_base_url")
      , Cl = gl("body_id")
      , wl = gl("body_class")
      , xl = gl("content_security_policy")
      , kl = gl("br_in_pre")
      , El = gl("forced_root_block")
      , Sl = gl("forced_root_block_attrs")
      , _l = gl("newline_behavior")
      , Nl = gl("br_newline_selector")
      , Rl = gl("no_newline_selector")
      , Al = gl("keep_styles")
      , Ol = gl("end_container_on_empty_block")
      , Tl = gl("automatic_uploads")
      , Bl = gl("images_reuse_filename")
      , Dl = gl("images_replace_blob_uris")
      , Pl = gl("icons")
      , Ll = gl("icons_url")
      , Ml = gl("images_upload_url")
      , Il = gl("images_upload_base_path")
      , Fl = gl("images_upload_credentials")
      , Ul = gl("images_upload_handler")
      , zl = gl("content_css_cors")
      , jl = gl("referrer_policy")
      , Hl = gl("language")
      , $l = gl("language_url")
      , Vl = gl("indent_use_margin")
      , ql = gl("indentation")
      , Wl = gl("content_css")
      , Kl = gl("content_style")
      , Gl = gl("font_css")
      , Yl = gl("directionality")
      , Xl = gl("inline_boundaries_selector")
      , Ql = gl("object_resizing")
      , Jl = gl("resize_img_proportional")
      , Zl = gl("placeholder")
      , ed = gl("event_root")
      , td = gl("service_message")
      , nd = gl("theme")
      , od = gl("theme_url")
      , rd = gl("model")
      , sd = gl("model_url")
      , ad = gl("inline_boundaries")
      , id = gl("formats")
      , ld = gl("preview_styles")
      , dd = gl("format_empty_lines")
      , cd = gl("format_noneditable_selector")
      , ud = gl("custom_ui_selector")
      , md = gl("inline")
      , fd = gl("hidden_input")
      , gd = gl("submit_patch")
      , pd = gl("add_form_submit_trigger")
      , hd = gl("add_unload_trigger")
      , bd = gl("custom_undo_redo_levels")
      , vd = gl("disable_nodechange")
      , yd = gl("readonly")
      , Cd = gl("content_css_cors")
      , wd = gl("plugins")
      , xd = gl("external_plugins")
      , kd = gl("block_unsupported_drop")
      , Ed = gl("visual")
      , Sd = gl("visual_table_class")
      , _d = gl("visual_anchor_class")
      , Nd = gl("iframe_aria_text")
      , Rd = gl("setup")
      , Ad = gl("init_instance_callback")
      , Od = gl("urlconverter_callback")
      , Td = gl("auto_focus")
      , Bd = gl("browser_spellcheck")
      , Dd = gl("protect")
      , Pd = gl("paste_block_drop")
      , Ld = gl("paste_data_images")
      , Md = gl("paste_preprocess")
      , Id = gl("paste_postprocess")
      , Fd = gl("paste_webkit_styles")
      , Ud = gl("paste_remove_styles_if_webkit")
      , zd = gl("paste_merge_formats")
      , jd = gl("smart_paste")
      , Hd = gl("paste_as_text")
      , $d = gl("paste_tab_spaces")
      , Vd = gl("allow_html_data_urls")
      , qd = gl("text_patterns")
      , Wd = gl("text_patterns_lookup")
      , Kd = gl("noneditable_class")
      , Gd = gl("editable_class")
      , Yd = gl("noneditable_regexp")
      , Xd = gl("preserve_cdata")
      , Qd = gl("highlight_on_focus")
      , Jd = gl("xss_sanitization")
      , Zd = e=>Dt.explode(e.options.get("images_file_types"))
      , ec = gl("table_tab_navigation")
      , tc = jo
      , nc = Xo
      , oc = e=>{
        const t = e.parentNode;
        t && t.removeChild(e)
    }
      , rc = e=>{
        const t = Pr(e);
        return {
            count: e.length - t.length,
            text: t
        }
    }
      , sc = e=>{
        let t;
        for (; -1 !== (t = e.data.lastIndexOf(Br)); )
            e.deleteData(t, 1)
    }
      , ac = (e,t)=>(lc(e),
    t)
      , ic = (e,t)=>Bi.isTextPosition(t) ? ((e,t)=>nc(e) && t.container() === e ? ((e,t)=>{
        const n = rc(e.data.substr(0, t.offset()))
          , o = rc(e.data.substr(t.offset()));
        return (n.text + o.text).length > 0 ? (sc(e),
        Bi(e, t.offset() - n.count)) : t
    }
    )(e, t) : ac(e, t))(e, t) : ((e,t)=>t.container() === e.parentNode ? ((e,t)=>{
        const n = t.container()
          , o = ((e,t)=>{
            const n = j(e, t);
            return -1 === n ? I.none() : I.some(n)
        }
        )(ce(n.childNodes), e).map((e=>e < t.offset() ? Bi(n, t.offset() - 1) : t)).getOr(t);
        return lc(e),
        o
    }
    )(e, t) : ac(e, t))(e, t)
      , lc = e=>{
        tc(e) && Ur(e) && (zr(e) ? e.removeAttribute("data-mce-caret") : oc(e)),
        nc(e) && (sc(e),
        0 === e.data.length && oc(e))
    }
      , dc = sr
      , cc = lr
      , uc = ar
      , mc = (e,t,n)=>{
        const o = ai(t.getBoundingClientRect(), n);
        let r, s;
        if ("BODY" === e.tagName) {
            const t = e.ownerDocument.documentElement;
            r = e.scrollLeft || t.scrollLeft,
            s = e.scrollTop || t.scrollTop
        } else {
            const t = e.getBoundingClientRect();
            r = e.scrollLeft - t.left,
            s = e.scrollTop - t.top
        }
        o.left += r,
        o.right += r,
        o.top += s,
        o.bottom += s,
        o.width = 1;
        let a = t.offsetWidth - t.clientWidth;
        return a > 0 && (n && (a *= -1),
        o.left += a,
        o.right += a),
        o
    }
      , fc = (e,t,n,o)=>{
        const r = Ia();
        let s, a;
        const i = El(e)
          , l = e.dom
          , d = ()=>{
            (e=>{
                var t, n;
                const o = Mo(bn(e), "*[contentEditable=false],video,audio,embed,object");
                for (let e = 0; e < o.length; e++) {
                    const r = o[e].dom;
                    let s = r.previousSibling;
                    if (Vr(s)) {
                        const e = s.data;
                        1 === e.length ? null === (t = s.parentNode) || void 0 === t || t.removeChild(s) : s.deleteData(e.length - 1, 1)
                    }
                    s = r.nextSibling,
                    $r(s) && (1 === s.data.length ? null === (n = s.parentNode) || void 0 === n || n.removeChild(s) : s.deleteData(0, 1))
                }
            }
            )(t),
            a && (lc(a),
            a = null),
            r.on((e=>{
                l.remove(e.caret),
                r.clear()
            }
            )),
            s && (clearInterval(s),
            s = void 0)
        }
        ;
        return {
            show: (e,c)=>{
                let u;
                if (d(),
                uc(c))
                    return null;
                if (!n(c))
                    return a = ((e,t)=>{
                        var n;
                        const o = (null !== (n = e.ownerDocument) && void 0 !== n ? n : document).createTextNode(Br)
                          , r = e.parentNode;
                        if (t) {
                            const t = e.previousSibling;
                            if (Mr(t)) {
                                if (Ur(t))
                                    return t;
                                if (Vr(t))
                                    return t.splitText(t.data.length - 1)
                            }
                            null == r || r.insertBefore(o, e)
                        } else {
                            const t = e.nextSibling;
                            if (Mr(t)) {
                                if (Ur(t))
                                    return t;
                                if ($r(t))
                                    return t.splitText(1),
                                    t
                            }
                            e.nextSibling ? null == r || r.insertBefore(o, e.nextSibling) : null == r || r.appendChild(o)
                        }
                        return o
                    }
                    )(c, e),
                    u = c.ownerDocument.createRange(),
                    pc(a.nextSibling) ? (u.setStart(a, 0),
                    u.setEnd(a, 0)) : (u.setStart(a, 1),
                    u.setEnd(a, 1)),
                    u;
                {
                    const n = ((e,t,n)=>{
                        var o;
                        const r = (null !== (o = t.ownerDocument) && void 0 !== o ? o : document).createElement(e);
                        r.setAttribute("data-mce-caret", n ? "before" : "after"),
                        r.setAttribute("data-mce-bogus", "all"),
                        r.appendChild(Ar().dom);
                        const s = t.parentNode;
                        return n ? null == s || s.insertBefore(r, t) : t.nextSibling ? null == s || s.insertBefore(r, t.nextSibling) : null == s || s.appendChild(r),
                        r
                    }
                    )(i, c, e)
                      , d = mc(t, c, e);
                    l.setStyle(n, "top", d.top),
                    a = n;
                    const m = l.create("div", {
                        class: "mce-visual-caret",
                        "data-mce-bogus": "all"
                    });
                    l.setStyles(m, {
                        ...d
                    }),
                    l.add(t, m),
                    r.set({
                        caret: m,
                        element: c,
                        before: e
                    }),
                    e && l.addClass(m, "mce-visual-caret-before"),
                    s = setInterval((()=>{
                        r.on((e=>{
                            o() ? l.toggleClass(e.caret, "mce-visual-caret-hidden") : l.addClass(e.caret, "mce-visual-caret-hidden")
                        }
                        ))
                    }
                    ), 500),
                    u = c.ownerDocument.createRange(),
                    u.setStart(n, 0),
                    u.setEnd(n, 0)
                }
                return u
            }
            ,
            hide: d,
            getCss: ()=>".mce-visual-caret {position: absolute;background-color: black;background-color: currentcolor;}.mce-visual-caret-hidden {display: none;}*[data-mce-caret] {position: absolute;left: -1000px;right: auto;top: 0;margin: 0;padding: 0;}",
            reposition: ()=>{
                r.on((e=>{
                    const n = mc(t, e.element, e.before);
                    l.setStyles(e.caret, {
                        ...n
                    })
                }
                ))
            }
            ,
            destroy: ()=>clearInterval(s)
        }
    }
      , gc = ()=>At.browser.isFirefox()
      , pc = e=>dc(e) || cc(e)
      , hc = e=>(pc(e) || Ko(e) && gc()) && Rn(bn(e)).exists(eo)
      , bc = rr
      , vc = sr
      , yc = lr
      , Cc = Vo("display", "block table table-cell table-caption list-item")
      , wc = Ur
      , xc = Ir
      , kc = jo
      , Ec = Xo
      , Sc = ts
      , _c = e=>e > 0
      , Nc = e=>e < 0
      , Rc = (e,t)=>{
        let n;
        for (; n = e(t); )
            if (!xc(n))
                return n;
        return null
    }
      , Ac = (e,t,n,o,r)=>{
        const s = new Fo(e,o)
          , a = vc(e) || xc(e);
        let i;
        if (Nc(t)) {
            if (a && (i = Rc(s.prev.bind(s), !0),
            n(i)))
                return i;
            for (; i = Rc(s.prev.bind(s), r); )
                if (n(i))
                    return i
        }
        if (_c(t)) {
            if (a && (i = Rc(s.next.bind(s), !0),
            n(i)))
                return i;
            for (; i = Rc(s.next.bind(s), r); )
                if (n(i))
                    return i
        }
        return null
    }
      , Oc = (e,t)=>{
        for (; e && e !== t; ) {
            if (Cc(e))
                return e;
            e = e.parentNode
        }
        return null
    }
      , Tc = (e,t,n)=>Oc(e.container(), n) === Oc(t.container(), n)
      , Bc = (e,t)=>{
        if (!t)
            return I.none();
        const n = t.container()
          , o = t.offset();
        return kc(n) ? I.from(n.childNodes[o + e]) : I.none()
    }
      , Dc = (e,t)=>{
        var n;
        const o = (null !== (n = t.ownerDocument) && void 0 !== n ? n : document).createRange();
        return e ? (o.setStartBefore(t),
        o.setEndBefore(t)) : (o.setStartAfter(t),
        o.setEndAfter(t)),
        o
    }
      , Pc = (e,t,n)=>Oc(t, e) === Oc(n, e)
      , Lc = (e,t,n)=>{
        const o = e ? "previousSibling" : "nextSibling";
        let r = n;
        for (; r && r !== t; ) {
            let e = r[o];
            if (e && wc(e) && (e = e[o]),
            vc(e) || yc(e)) {
                if (Pc(t, e, r))
                    return e;
                break
            }
            if (Sc(e))
                break;
            r = r.parentNode
        }
        return null
    }
      , Mc = O(Dc, !0)
      , Ic = O(Dc, !1)
      , Fc = (e,t,n)=>{
        let o;
        const r = O(Lc, !0, t)
          , s = O(Lc, !1, t)
          , a = n.startContainer
          , i = n.startOffset;
        if (Ir(a)) {
            const e = Ec(a) ? a.parentNode : a
              , t = e.getAttribute("data-mce-caret");
            if ("before" === t && (o = e.nextSibling,
            hc(o)))
                return Mc(o);
            if ("after" === t && (o = e.previousSibling,
            hc(o)))
                return Ic(o)
        }
        if (!n.collapsed)
            return n;
        if (Xo(a)) {
            if (wc(a)) {
                if (1 === e) {
                    if (o = s(a),
                    o)
                        return Mc(o);
                    if (o = r(a),
                    o)
                        return Ic(o)
                }
                if (-1 === e) {
                    if (o = r(a),
                    o)
                        return Ic(o);
                    if (o = s(a),
                    o)
                        return Mc(o)
                }
                return n
            }
            if (Vr(a) && i >= a.data.length - 1)
                return 1 === e && (o = s(a),
                o) ? Mc(o) : n;
            if ($r(a) && i <= 1)
                return -1 === e && (o = r(a),
                o) ? Ic(o) : n;
            if (i === a.data.length)
                return o = s(a),
                o ? Mc(o) : n;
            if (0 === i)
                return o = r(a),
                o ? Ic(o) : n
        }
        return n
    }
      , Uc = (e,t)=>Bc(e ? 0 : -1, t).filter(vc)
      , zc = (e,t,n)=>{
        const o = Fc(e, t, n);
        return -1 === e ? Bi.fromRangeStart(o) : Bi.fromRangeEnd(o)
    }
      , jc = e=>I.from(e.getNode()).map(bn)
      , Hc = (e,t)=>{
        let n = t;
        for (; n = e(n); )
            if (n.isVisible())
                return n;
        return n
    }
      , $c = (e,t)=>{
        const n = Tc(e, t);
        return !(n || !nr(e.getNode())) || n
    }
    ;
    var Vc;
    !function(e) {
        e[e.Backwards = -1] = "Backwards",
        e[e.Forwards = 1] = "Forwards"
    }(Vc || (Vc = {}));
    const qc = sr
      , Wc = Xo
      , Kc = jo
      , Gc = nr
      , Yc = ts
      , Xc = e=>Jr(e) || (e=>!!ns(e) && !X(ce(e.getElementsByTagName("*")), ((e,t)=>e || Kr(t)), !1))(e)
      , Qc = os
      , Jc = (e,t)=>e.hasChildNodes() && t < e.childNodes.length ? e.childNodes[t] : null
      , Zc = (e,t)=>{
        if (_c(e)) {
            if (Yc(t.previousSibling) && !Wc(t.previousSibling))
                return Bi.before(t);
            if (Wc(t))
                return Bi(t, 0)
        }
        if (Nc(e)) {
            if (Yc(t.nextSibling) && !Wc(t.nextSibling))
                return Bi.after(t);
            if (Wc(t))
                return Bi(t, t.data.length)
        }
        return Nc(e) ? Gc(t) ? Bi.before(t) : Bi.after(t) : Bi.before(t)
    }
      , eu = (e,t,n)=>{
        let o, r, s, a;
        if (!Kc(n) || !t)
            return null;
        if (t.isEqual(Bi.after(n)) && n.lastChild) {
            if (a = Bi.after(n.lastChild),
            Nc(e) && Yc(n.lastChild) && Kc(n.lastChild))
                return Gc(n.lastChild) ? Bi.before(n.lastChild) : a
        } else
            a = t;
        const i = a.container();
        let l = a.offset();
        if (Wc(i)) {
            if (Nc(e) && l > 0)
                return Bi(i, --l);
            if (_c(e) && l < i.length)
                return Bi(i, ++l);
            o = i
        } else {
            if (Nc(e) && l > 0 && (r = Jc(i, l - 1),
            Yc(r)))
                return !Xc(r) && (s = Ac(r, e, Qc, r),
                s) ? Wc(s) ? Bi(s, s.data.length) : Bi.after(s) : Wc(r) ? Bi(r, r.data.length) : Bi.before(r);
            if (_c(e) && l < i.childNodes.length && (r = Jc(i, l),
            Yc(r)))
                return Gc(r) ? ((e,t)=>{
                    const n = t.nextSibling;
                    return n && Yc(n) ? Wc(n) ? Bi(n, 0) : Bi.before(n) : eu(Vc.Forwards, Bi.after(t), e)
                }
                )(n, r) : !Xc(r) && (s = Ac(r, e, Qc, r),
                s) ? Wc(s) ? Bi(s, 0) : Bi.before(s) : Wc(r) ? Bi(r, 0) : Bi.after(r);
            o = r || a.getNode()
        }
        if (o && (_c(e) && a.isAtEnd() || Nc(e) && a.isAtStart()) && (o = Ac(o, e, M, n, !0),
        Qc(o, n)))
            return Zc(e, o);
        r = o ? Ac(o, e, Qc, n) : o;
        const d = De(G(((e,t)=>{
            const n = [];
            let o = e;
            for (; o && o !== t; )
                n.push(o),
                o = o.parentNode;
            return n
        }
        )(i, n), qc));
        return !d || r && d.contains(r) ? r ? Zc(e, r) : null : (a = _c(e) ? Bi.after(d) : Bi.before(d),
        a)
    }
      , tu = e=>({
        next: t=>eu(Vc.Forwards, t, e),
        prev: t=>eu(Vc.Backwards, t, e)
    })
      , nu = e=>Bi.isTextPosition(e) ? 0 === e.offset() : ts(e.getNode())
      , ou = e=>{
        if (Bi.isTextPosition(e)) {
            const t = e.container();
            return e.offset() === t.data.length
        }
        return ts(e.getNode(!0))
    }
      , ru = (e,t)=>!Bi.isTextPosition(e) && !Bi.isTextPosition(t) && e.getNode() === t.getNode(!0)
      , su = (e,t,n)=>{
        const o = tu(t);
        return I.from(e ? o.next(n) : o.prev(n))
    }
      , au = (e,t,n)=>su(e, t, n).bind((o=>Tc(n, o, t) && ((e,t,n)=>{
        return e ? !ru(t, n) && (o = t,
        !(!Bi.isTextPosition(o) && nr(o.getNode()))) && ou(t) && nu(n) : !ru(n, t) && nu(t) && ou(n);
        var o
    }
    )(e, n, o) ? su(e, t, o) : I.some(o)))
      , iu = (e,t,n,o)=>au(e, t, n).bind((n=>o(n) ? iu(e, t, n, o) : I.some(n)))
      , lu = (e,t)=>{
        const n = e ? t.firstChild : t.lastChild;
        return Xo(n) ? I.some(Bi(n, e ? 0 : n.data.length)) : n ? ts(n) ? I.some(e ? Bi.before(n) : nr(o = n) ? Bi.before(o) : Bi.after(o)) : ((e,t,n)=>{
            const o = e ? Bi.before(n) : Bi.after(n);
            return su(e, t, o)
        }
        )(e, t, n) : I.none();
        var o
    }
      , du = O(su, !0)
      , cu = O(su, !1)
      , uu = O(lu, !0)
      , mu = O(lu, !1)
      , fu = "_mce_caret"
      , gu = e=>jo(e) && e.id === fu
      , pu = (e,t)=>{
        let n = t;
        for (; n && n !== e; ) {
            if (gu(n))
                return n;
            n = n.parentNode
        }
        return null
    }
      , hu = e=>ke(e, "name")
      , bu = e=>Dt.isArray(e.start)
      , vu = e=>!(!hu(e) && b(e.forward)) || e.forward
      , yu = (e,t)=>(jo(t) && e.isBlock(t) && !t.innerHTML && (t.innerHTML = '<br data-mce-bogus="1" />'),
    t)
      , Cu = (e,t)=>mu(e).fold(L, (e=>(t.setStart(e.container(), e.offset()),
    t.setEnd(e.container(), e.offset()),
    !0)))
      , wu = (e,t,n)=>!(!(e=>!e.hasChildNodes())(t) || !pu(e, t) || (((e,t)=>{
        var n;
        const o = (null !== (n = e.ownerDocument) && void 0 !== n ? n : document).createTextNode(Br);
        e.appendChild(o),
        t.setStart(o, 0),
        t.setEnd(o, 0)
    }
    )(t, n),
    0))
      , xu = (e,t,n,o)=>{
        const r = n[t ? "start" : "end"]
          , s = e.getRoot();
        if (r) {
            let e = s
              , n = r[0];
            for (let t = r.length - 1; e && t >= 1; t--) {
                const n = e.childNodes;
                if (wu(s, e, o))
                    return !0;
                if (r[t] > n.length - 1)
                    return !!wu(s, e, o) || Cu(e, o);
                e = n[r[t]]
            }
            Xo(e) && (n = Math.min(r[0], e.data.length)),
            jo(e) && (n = Math.min(r[0], e.childNodes.length)),
            t ? o.setStart(e, n) : o.setEnd(e, n)
        }
        return !0
    }
      , ku = e=>Xo(e) && e.data.length > 0
      , Eu = (e,t,n)=>{
        const o = e.get(n.id + "_" + t)
          , r = null == o ? void 0 : o.parentNode
          , s = n.keep;
        if (o && r) {
            let a, i;
            if ("start" === t ? s ? o.hasChildNodes() ? (a = o.firstChild,
            i = 1) : ku(o.nextSibling) ? (a = o.nextSibling,
            i = 0) : ku(o.previousSibling) ? (a = o.previousSibling,
            i = o.previousSibling.data.length) : (a = r,
            i = e.nodeIndex(o) + 1) : (a = r,
            i = e.nodeIndex(o)) : s ? o.hasChildNodes() ? (a = o.firstChild,
            i = 1) : ku(o.previousSibling) ? (a = o.previousSibling,
            i = o.previousSibling.data.length) : (a = r,
            i = e.nodeIndex(o)) : (a = r,
            i = e.nodeIndex(o)),
            !s) {
                const r = o.previousSibling
                  , s = o.nextSibling;
                let l;
                for (Dt.each(Dt.grep(o.childNodes), (e=>{
                    Xo(e) && (e.data = e.data.replace(/\uFEFF/g, ""))
                }
                )); l = e.get(n.id + "_" + t); )
                    e.remove(l, !0);
                if (Xo(s) && Xo(r) && !At.browser.isOpera()) {
                    const t = r.data.length;
                    r.appendData(s.data),
                    e.remove(s),
                    a = r,
                    i = t
                }
            }
            return I.some(Bi(a, i))
        }
        return I.none()
    }
      , Su = (e,t,n)=>((e,t,n=!1)=>2 === t ? Xi(Pr, n, e) : 3 === t ? (e=>{
        const t = e.getRng();
        return {
            start: Hi(e.dom.getRoot(), Bi.fromRangeStart(t)),
            end: Hi(e.dom.getRoot(), Bi.fromRangeEnd(t)),
            forward: e.isForward()
        }
    }
    )(e) : t ? (e=>({
        rng: e.getRng(),
        forward: e.isForward()
    }))(e) : Ji(e, !1))(e, t, n)
      , _u = (e,t)=>{
        ((e,t)=>{
            const n = e.dom;
            if (t) {
                if (bu(t))
                    return ((e,t)=>{
                        const n = e.createRng();
                        return xu(e, !0, t, n) && xu(e, !1, t, n) ? I.some({
                            range: n,
                            forward: vu(t)
                        }) : I.none()
                    }
                    )(n, t);
                if ((e=>m(e.start))(t))
                    return ((e,t)=>{
                        const n = I.from($i(e.getRoot(), t.start))
                          , o = I.from($i(e.getRoot(), t.end));
                        return Lt(n, o, ((n,o)=>{
                            const r = e.createRng();
                            return r.setStart(n.container(), n.offset()),
                            r.setEnd(o.container(), o.offset()),
                            {
                                range: r,
                                forward: vu(t)
                            }
                        }
                        ))
                    }
                    )(n, t);
                if ((e=>ke(e, "id"))(t))
                    return ((e,t)=>{
                        const n = Eu(e, "start", t)
                          , o = Eu(e, "end", t);
                        return Lt(n, o.or(n), ((n,o)=>{
                            const r = e.createRng();
                            return r.setStart(yu(e, n.container()), n.offset()),
                            r.setEnd(yu(e, o.container()), o.offset()),
                            {
                                range: r,
                                forward: vu(t)
                            }
                        }
                        ))
                    }
                    )(n, t);
                if (hu(t))
                    return ((e,t)=>I.from(e.select(t.name)[t.index]).map((t=>{
                        const n = e.createRng();
                        return n.selectNode(t),
                        {
                            range: n,
                            forward: !0
                        }
                    }
                    )))(n, t);
                if ((e=>ke(e, "rng"))(t))
                    return I.some({
                        range: t.rng,
                        forward: vu(t)
                    })
            }
            return I.none()
        }
        )(e, t).each((({range: t, forward: n})=>{
            e.setRng(t, n)
        }
        ))
    }
      , Nu = e=>jo(e) && "SPAN" === e.tagName && "bookmark" === e.getAttribute("data-mce-type")
      , Ru = (ur,
    e=>"\xa0" === e);
    const Au = e=>"" !== e && -1 !== " \f\n\r\t\v".indexOf(e)
      , Ou = e=>!Au(e) && !Ru(e) && !mr(e)
      , Tu = e=>{
        const t = e.toString(16);
        return (1 === t.length ? "0" + t : t).toUpperCase()
    }
      , Bu = e=>(e=>{
        return {
            value: (t = e,
            ze(t, "#").toUpperCase())
        };
        var t
    }
    )(Tu(e.red) + Tu(e.green) + Tu(e.blue))
      , Du = /^\s*rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)\s*$/i
      , Pu = /^\s*rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d?(?:\.\d+)?)\s*\)\s*$/i
      , Lu = (e,t,n,o)=>({
        red: e,
        green: t,
        blue: n,
        alpha: o
    })
      , Mu = (e,t,n,o)=>{
        const r = parseInt(e, 10)
          , s = parseInt(t, 10)
          , a = parseInt(n, 10)
          , i = parseFloat(o);
        return Lu(r, s, a, i)
    }
      , Iu = e=>(e=>{
        if ("transparent" === e)
            return I.some(Lu(0, 0, 0, 0));
        const t = Du.exec(e);
        if (null !== t)
            return I.some(Mu(t[1], t[2], t[3], "1"));
        const n = Pu.exec(e);
        return null !== n ? I.some(Mu(n[1], n[2], n[3], n[4])) : I.none()
    }
    )(e).map(Bu).map((e=>"#" + e.value)).getOr(e)
      , Fu = e=>{
        const t = [];
        if (e)
            for (let n = 0; n < e.rangeCount; n++)
                t.push(e.getRangeAt(n));
        return t
    }
      , Uu = (e,t)=>{
        const n = Mo(t, "td[data-mce-selected],th[data-mce-selected]");
        return n.length > 0 ? n : (e=>G((e=>te(e, (e=>{
            const t = ui(e);
            return t ? [bn(t)] : []
        }
        )))(e), Sr))(e)
    }
      , zu = e=>Uu(Fu(e.selection.getSel()), bn(e.getBody()))
      , ju = (e,t)=>Qn(e, "table", t)
      , Hu = e=>Mn(e).fold(N([e]), (t=>[e].concat(Hu(t))))
      , $u = e=>In(e).fold(N([e]), (t=>"br" === jt(t) ? On(t).map((t=>[e].concat($u(t)))).getOr([]) : [e].concat($u(t))))
      , Vu = (e,t)=>Lt((e=>{
        const t = e.startContainer
          , n = e.startOffset;
        return Xo(t) ? 0 === n ? I.some(bn(t)) : I.none() : I.from(t.childNodes[n]).map(bn)
    }
    )(t), (e=>{
        const t = e.endContainer
          , n = e.endOffset;
        return Xo(t) ? n === t.data.length ? I.some(bn(t)) : I.none() : I.from(t.childNodes[n - 1]).map(bn)
    }
    )(t), ((t,n)=>{
        const o = J(Hu(e), O(xn, t))
          , r = J($u(e), O(xn, n));
        return o.isSome() && r.isSome()
    }
    )).getOr(!1)
      , qu = (e,t,n,o)=>{
        const r = n
          , s = new Fo(n,r)
          , a = ye(e.schema.getMoveCaretBeforeOnEnterElements(), ((e,t)=>!H(["td", "th", "table"], t.toLowerCase())));
        let i = n;
        do {
            if (Xo(i) && 0 !== Dt.trim(i.data).length)
                return void (o ? t.setStart(i, 0) : t.setEnd(i, i.data.length));
            if (a[i.nodeName])
                return void (o ? t.setStartBefore(i) : "BR" === i.nodeName ? t.setEndBefore(i) : t.setEndAfter(i))
        } while (i = o ? s.next() : s.prev());
        "BODY" === r.nodeName && (o ? t.setStart(r, 0) : t.setEnd(r, r.childNodes.length))
    }
      , Wu = e=>{
        const t = e.selection.getSel();
        return C(t) && t.rangeCount > 0
    }
      , Ku = (e,t)=>{
        const n = zu(e);
        n.length > 0 ? q(n, (n=>{
            const o = n.dom
              , r = e.dom.createRng();
            r.setStartBefore(o),
            r.setEndAfter(o),
            t(r, !0)
        }
        )) : t(e.selection.getRng(), !1)
    }
      , Gu = (e,t,n)=>{
        const o = Ji(e, t);
        n(o),
        e.moveToBookmark(o)
    }
      , Yu = e=>x(null == e ? void 0 : e.nodeType)
      , Xu = e=>jo(e) && !Nu(e) && !gu(e) && !Wo(e)
      , Qu = e=>!0 === e.isContentEditable
      , Ju = (e,t,n)=>{
        const {selection: o, dom: r} = e
          , s = o.getNode()
          , a = sr(s);
        Gu(o, !0, (()=>{
            t()
        }
        )),
        a && sr(s) && r.isChildOf(s, e.getBody()) ? e.selection.select(s) : n(o.getStart()) && Zu(r, o)
    }
      , Zu = (e,t)=>{
        var n, o;
        const r = t.getRng()
          , {startContainer: s, startOffset: a} = r;
        if (!((e,t)=>{
            if (Xu(t) && !/^(TD|TH)$/.test(t.nodeName)) {
                const n = e.getAttrib(t, "data-mce-selected")
                  , o = parseInt(n, 10);
                return !isNaN(o) && o > 0
            }
            return !1
        }
        )(e, t.getNode()) && jo(s)) {
            const i = s.childNodes
              , l = e.getRoot();
            let d;
            if (a < i.length) {
                const t = i[a];
                d = new Fo(t,null !== (n = e.getParent(t, e.isBlock)) && void 0 !== n ? n : l)
            } else {
                const t = i[i.length - 1];
                d = new Fo(t,null !== (o = e.getParent(t, e.isBlock)) && void 0 !== o ? o : l),
                d.next(!0)
            }
            for (let n = d.current(); n; n = d.next()) {
                if ("false" === e.getContentEditable(n))
                    return;
                if (Xo(n) && !om(n))
                    return r.setStart(n, 0),
                    void t.setRng(r)
            }
        }
    }
      , em = (e,t,n)=>{
        if (e) {
            const o = t ? "nextSibling" : "previousSibling";
            for (e = n ? e : e[o]; e; e = e[o])
                if (jo(e) || !om(e))
                    return e
        }
    }
      , tm = (e,t)=>!!e.getTextBlockElements()[t.nodeName.toLowerCase()] || Es(e, t)
      , nm = (e,t,n)=>e.schema.isValidChild(t, n)
      , om = (e,t=!1)=>{
        if (C(e) && Xo(e)) {
            const n = t ? e.data.replace(/ /g, "\xa0") : e.data;
            return ss(n)
        }
        return !1
    }
      , rm = (e,t)=>{
        const n = e.dom;
        return Xu(t) && "false" === n.getContentEditable(t) && ((e,t)=>{
            const n = "[data-mce-cef-wrappable]"
              , o = cd(e)
              , r = Ye(o) ? n : `${n},${o}`;
            return Cn(bn(t), r)
        }
        )(e, t) && 0 === n.select('[contenteditable="true"]', t).length
    }
      , sm = (e,t)=>w(e) ? e(t) : (C(t) && (e = e.replace(/%(\w+)/g, ((e,n)=>t[n] || e))),
    e)
      , am = (e,t)=>(t = t || "",
    e = "" + ((e = e || "").nodeName || e),
    t = "" + (t.nodeName || t),
    e.toLowerCase() === t.toLowerCase())
      , im = (e,t)=>{
        if (y(e))
            return null;
        {
            let n = String(e);
            return "color" !== t && "backgroundColor" !== t || (n = Iu(n)),
            "fontWeight" === t && 700 === e && (n = "bold"),
            "fontFamily" === t && (n = n.replace(/[\'\"]/g, "").replace(/,\s+/g, ",")),
            n
        }
    }
      , lm = (e,t,n)=>{
        const o = e.getStyle(t, n);
        return im(o, n)
    }
      , dm = (e,t)=>{
        let n;
        return e.getParent(t, (t=>!!jo(t) && (n = e.getStyle(t, "text-decoration"),
        !!n && "none" !== n))),
        n
    }
      , cm = (e,t,n)=>e.getParents(t, n, e.getRoot())
      , um = (e,t,n)=>{
        const o = e.formatter.get(t);
        return C(o) && $(o, n)
    }
      , mm = e=>Ee(e, "block")
      , fm = e=>Ee(e, "selector")
      , gm = e=>Ee(e, "inline")
      , pm = e=>fm(e) && !1 !== e.expand && !gm(e)
      , hm = Nu
      , bm = cm
      , vm = om
      , ym = tm
      , Cm = (e,t)=>{
        let n = t;
        for (; n; ) {
            if (jo(n) && e.getContentEditable(n))
                return "false" === e.getContentEditable(n) ? n : t;
            n = n.parentNode
        }
        return t
    }
      , wm = (e,t,n,o)=>{
        const r = t.data;
        if (e) {
            for (let e = n; e > 0; e--)
                if (o(r.charAt(e - 1)))
                    return e
        } else
            for (let e = n; e < r.length; e++)
                if (o(r.charAt(e)))
                    return e;
        return -1
    }
      , xm = (e,t,n)=>wm(e, t, n, (e=>Ru(e) || Au(e)))
      , km = (e,t,n)=>wm(e, t, n, Ou)
      , Em = (e,t,n,o,r,s)=>{
        let a;
        const i = e.getParent(n, e.isBlock) || t
          , l = (t,n,o)=>{
            const s = oi(e)
              , l = r ? s.backwards : s.forwards;
            return I.from(l(t, n, ((e,t)=>hm(e.parentNode) ? -1 : (a = e,
            o(r, e, t))), i))
        }
        ;
        return l(n, o, xm).bind((e=>s ? l(e.container, e.offset + (r ? -1 : 0), km) : I.some(e))).orThunk((()=>a ? I.some({
            container: a,
            offset: r ? 0 : a.length
        }) : I.none()))
    }
      , Sm = (e,t,n,o,r)=>{
        const s = o[r];
        Xo(o) && Ye(o.data) && s && (o = s);
        const a = bm(e, o);
        for (let o = 0; o < a.length; o++)
            for (let r = 0; r < t.length; r++) {
                const s = t[r];
                if ((!C(s.collapsed) || s.collapsed === n.collapsed) && fm(s) && e.is(a[o], s.selector))
                    return a[o]
            }
        return o
    }
      , _m = (e,t,n,o)=>{
        var r;
        let s = n;
        const a = e.getRoot()
          , i = t[0];
        if (mm(i) && (s = i.wrapper ? null : e.getParent(n, i.block, a)),
        !s) {
            const t = null !== (r = e.getParent(n, "LI,TD,TH")) && void 0 !== r ? r : a;
            s = e.getParent(Xo(n) ? n.parentNode : n, (t=>t !== a && ym(e.schema, t)), t)
        }
        if (s && mm(i) && i.wrapper && (s = bm(e, s, "ul,ol").reverse()[0] || s),
        !s)
            for (s = n; s && s[o] && !e.isBlock(s[o]) && (s = s[o],
            !am(s, "br")); )
                ;
        return s || n
    }
      , Nm = (e,t,n,o)=>{
        const r = n.parentNode;
        return !C(n[o]) && (!(r !== t && !y(r) && !e.isBlock(r)) || Nm(e, t, r, o))
    }
      , Rm = (e,t,n,o,r)=>{
        let s = n;
        const a = r ? "previousSibling" : "nextSibling"
          , i = e.getRoot();
        if (Xo(n) && !vm(n) && (r ? o > 0 : o < n.data.length))
            return n;
        for (; s; ) {
            if (!t[0].block_expand && e.isBlock(s))
                return s;
            for (let t = s[a]; t; t = t[a]) {
                const n = Xo(t) && !Nm(e, i, t, a);
                if (!hm(t) && (!nr(l = t) || !l.getAttribute("data-mce-bogus") || l.nextSibling) && !vm(t, n))
                    return s
            }
            if (s === i || s.parentNode === i) {
                n = s;
                break
            }
            s = s.parentNode
        }
        var l;
        return n
    }
      , Am = e=>hm(e.parentNode) || hm(e)
      , Om = (e,t,n,o=!1)=>{
        let {startContainer: r, startOffset: s, endContainer: a, endOffset: i} = t;
        const l = n[0];
        return jo(r) && r.hasChildNodes() && (r = mi(r, s),
        Xo(r) && (s = 0)),
        jo(a) && a.hasChildNodes() && (a = mi(a, t.collapsed ? i : i - 1),
        Xo(a) && (i = a.data.length)),
        r = Cm(e, r),
        a = Cm(e, a),
        Am(r) && (r = hm(r) ? r : r.parentNode,
        r = t.collapsed ? r.previousSibling || r : r.nextSibling || r,
        Xo(r) && (s = t.collapsed ? r.length : 0)),
        Am(a) && (a = hm(a) ? a : a.parentNode,
        a = t.collapsed ? a.nextSibling || a : a.previousSibling || a,
        Xo(a) && (i = t.collapsed ? 0 : a.length)),
        t.collapsed && (Em(e, e.getRoot(), r, s, !0, o).each((({container: e, offset: t})=>{
            r = e,
            s = t
        }
        )),
        Em(e, e.getRoot(), a, i, !1, o).each((({container: e, offset: t})=>{
            a = e,
            i = t
        }
        ))),
        (gm(l) || l.block_expand) && (gm(l) && Xo(r) && 0 !== s || (r = Rm(e, n, r, s, !0)),
        gm(l) && Xo(a) && i !== a.data.length || (a = Rm(e, n, a, i, !1))),
        pm(l) && (r = Sm(e, n, t, r, "previousSibling"),
        a = Sm(e, n, t, a, "nextSibling")),
        (mm(l) || fm(l)) && (r = _m(e, n, r, "previousSibling"),
        a = _m(e, n, a, "nextSibling"),
        mm(l) && (e.isBlock(r) || (r = Rm(e, n, r, s, !0)),
        e.isBlock(a) || (a = Rm(e, n, a, i, !1)))),
        jo(r) && r.parentNode && (s = e.nodeIndex(r),
        r = r.parentNode),
        jo(a) && a.parentNode && (i = e.nodeIndex(a) + 1,
        a = a.parentNode),
        {
            startContainer: r,
            startOffset: s,
            endContainer: a,
            endOffset: i
        }
    }
      , Tm = (e,t,n)=>{
        var o;
        const r = t.startOffset
          , s = mi(t.startContainer, r)
          , a = t.endOffset
          , i = mi(t.endContainer, a - 1)
          , l = e=>{
            const t = e[0];
            Xo(t) && t === s && r >= t.data.length && e.splice(0, 1);
            const n = e[e.length - 1];
            return 0 === a && e.length > 0 && n === i && Xo(n) && e.splice(e.length - 1, 1),
            e
        }
          , d = (e,t,n)=>{
            const o = [];
            for (; e && e !== n; e = e[t])
                o.push(e);
            return o
        }
          , c = (t,n)=>e.getParent(t, (e=>e.parentNode === n), n)
          , u = (e,t,o)=>{
            const r = o ? "nextSibling" : "previousSibling";
            for (let s = e, a = s.parentNode; s && s !== t; s = a) {
                a = s.parentNode;
                const t = d(s === e ? s : s[r], r);
                t.length && (o || t.reverse(),
                n(l(t)))
            }
        }
        ;
        if (s === i)
            return n(l([s]));
        const m = null !== (o = e.findCommonAncestor(s, i)) && void 0 !== o ? o : e.getRoot();
        if (e.isChildOf(s, i))
            return u(s, m, !0);
        if (e.isChildOf(i, s))
            return u(i, m);
        const f = c(s, m) || s
          , g = c(i, m) || i;
        u(s, f, !0);
        const p = d(f === s ? f : f.nextSibling, "nextSibling", g === i ? g.nextSibling : g);
        p.length && n(l(p)),
        u(i, g)
    }
      , Bm = ['pre[class*=language-][contenteditable="false"]', "figure.image", "div[data-ephox-embed-iri]", "div.tiny-pageembed", "div.mce-toc", "div[data-mce-toc]"]
      , Dm = (e,t,n,o,r,s)=>{
        const {uid: a=t, ...i} = n;
        dn(e, za()),
        Xt(e, `${Ha()}`, a),
        Xt(e, `${ja()}`, o);
        const {attributes: l={}, classes: d=[]} = r(a, i);
        if (Qt(e, l),
        ((e,t)=>{
            q(t, (t=>{
                dn(e, t)
            }
            ))
        }
        )(e, d),
        s) {
            d.length > 0 && Xt(e, `${Va()}`, d.join(","));
            const t = me(l);
            t.length > 0 && Xt(e, `${qa()}`, t.join(","))
        }
    }
      , Pm = (e,t,n,o,r)=>{
        const s = pn("span", e);
        return Dm(s, t, n, o, r, !1),
        s
    }
      , Lm = (e,t,n,o,r,s)=>{
        const a = []
          , i = Pm(e.getDoc(), n, s, o, r)
          , l = Ia()
          , d = ()=>{
            l.clear()
        }
          , c = e=>{
            q(e, u)
        }
          , u = t=>{
            switch (((e,t,n,o)=>Nn(t).fold((()=>"skipping"), (r=>"br" === o || (e=>qt(e) && gr(e) === Br)(t) ? "valid" : (e=>Vt(e) && mn(e, za()))(t) ? "existing" : gu(t.dom) ? "caret" : $(Bm, (e=>Cn(t, e))) ? "valid-block" : nm(e, n, o) && nm(e, jt(r), n) ? "valid" : "invalid-child")))(e, t, "span", jt(t))) {
            case "invalid-child":
                {
                    d();
                    const e = Pn(t);
                    c(e),
                    d();
                    break
                }
            case "valid-block":
                d(),
                Dm(t, n, s, o, r, !0);
                break;
            case "valid":
                {
                    const e = l.get().getOrThunk((()=>{
                        const e = ei(i);
                        return a.push(e),
                        l.set(e),
                        e
                    }
                    ));
                    ho(t, e);
                    break
                }
            }
        }
        ;
        return Tm(e.dom, t, (e=>{
            d(),
            (e=>{
                const t = V(e, bn);
                c(t)
            }
            )(e)
        }
        )),
        a
    }
      , Mm = e=>{
        const t = (()=>{
            const e = {};
            return {
                register: (t,n)=>{
                    e[t] = {
                        name: t,
                        settings: n
                    }
                }
                ,
                lookup: t=>xe(e, t).map((e=>e.settings)),
                getNames: ()=>me(e)
            }
        }
        )();
        ((e,t)=>{
            const n = ja()
              , o = e=>I.from(e.attr(n)).bind(t.lookup)
              , r = e=>{
                var t, n;
                e.attr(Ha(), null),
                e.attr(ja(), null),
                e.attr($a(), null);
                const o = I.from(e.attr(qa())).map((e=>e.split(","))).getOr([])
                  , r = I.from(e.attr(Va())).map((e=>e.split(","))).getOr([]);
                q(o, (t=>e.attr(t, null)));
                const s = null !== (n = null === (t = e.attr("class")) || void 0 === t ? void 0 : t.split(" ")) && void 0 !== n ? n : []
                  , a = re(s, [za()].concat(r));
                e.attr("class", a.length > 0 ? a.join(" ") : null),
                e.attr(Va(), null),
                e.attr(qa(), null)
            }
            ;
            e.serializer.addTempAttr($a()),
            e.serializer.addAttributeFilter(n, (e=>{
                for (const t of e)
                    o(t).each((e=>{
                        !1 === e.persistent && ("span" === t.name ? t.unwrap() : r(t))
                    }
                    ))
            }
            ))
        }
        )(e, t);
        const n = ((e,t)=>{
            const n = Oa({})
              , o = ()=>({
                listeners: [],
                previous: Ia()
            })
              , r = (e,t)=>{
                s(e, (e=>(t(e),
                e)))
            }
              , s = (e,t)=>{
                const r = n.get()
                  , s = t(xe(r, e).getOrThunk(o));
                r[e] = s,
                n.set(r)
            }
              , a = (t,n)=>{
                q(Ya(e, t), (e=>{
                    n ? Xt(e, $a(), "true") : tn(e, $a())
                }
                ))
            }
              , i = Ua((()=>{
                const n = ae(t.getNames());
                q(n, (t=>{
                    s(t, (n=>{
                        const o = n.previous.get();
                        return Ka(e, I.some(t)).fold((()=>{
                            o.each((e=>{
                                (e=>{
                                    r(e, (t=>{
                                        q(t.listeners, (t=>t(!1, e)))
                                    }
                                    ))
                                }
                                )(t),
                                n.previous.clear(),
                                a(e, !1)
                            }
                            ))
                        }
                        ), (({uid: e, name: t, elements: s})=>{
                            Pt(o, e) || (o.each((e=>a(e, !1))),
                            ((e,t,n)=>{
                                r(e, (o=>{
                                    q(o.listeners, (o=>o(!0, e, {
                                        uid: t,
                                        nodes: V(n, (e=>e.dom))
                                    })))
                                }
                                ))
                            }
                            )(t, e, s),
                            n.previous.set(e),
                            a(e, !0))
                        }
                        )),
                        {
                            previous: n.previous,
                            listeners: n.listeners
                        }
                    }
                    ))
                }
                ))
            }
            ), 30);
            return e.on("remove", (()=>{
                i.cancel()
            }
            )),
            e.on("NodeChange", (()=>{
                i.throttle()
            }
            )),
            {
                addListener: (e,t)=>{
                    s(e, (e=>({
                        previous: e.previous,
                        listeners: e.listeners.concat([t])
                    })))
                }
            }
        }
        )(e, t)
          , o = Gt("span")
          , r = e=>{
            q(e, (e=>{
                o(e) ? Co(e) : (e=>{
                    un(e, za()),
                    tn(e, `${Ha()}`),
                    tn(e, `${ja()}`),
                    tn(e, `${$a()}`);
                    const t = Zt(e, `${qa()}`).map((e=>e.split(","))).getOr([])
                      , n = Zt(e, `${Va()}`).map((e=>e.split(","))).getOr([]);
                    var o;
                    q(t, (t=>tn(e, t))),
                    o = e,
                    q(n, (e=>{
                        un(o, e)
                    }
                    )),
                    tn(e, `${Va()}`),
                    tn(e, `${qa()}`)
                }
                )(e)
            }
            ))
        }
        ;
        return {
            register: (e,n)=>{
                t.register(e, n)
            }
            ,
            annotate: (n,o)=>{
                t.lookup(n).each((t=>{
                    ((e,t,n,o)=>{
                        e.undoManager.transact((()=>{
                            const r = e.selection
                              , s = r.getRng()
                              , a = zu(e).length > 0
                              , i = Ja("mce-annotation");
                            if (s.collapsed && !a && ((e,t)=>{
                                const n = Om(e.dom, t, [{
                                    inline: "span"
                                }]);
                                t.setStart(n.startContainer, n.startOffset),
                                t.setEnd(n.endContainer, n.endOffset),
                                e.selection.setRng(t)
                            }
                            )(e, s),
                            r.getRng().collapsed && !a) {
                                const s = Pm(e.getDoc(), i, o, t, n.decorate);
                                ko(s, ur),
                                r.getRng().insertNode(s.dom),
                                r.select(s.dom)
                            } else
                                Gu(r, !1, (()=>{
                                    Ku(e, (r=>{
                                        Lm(e, r, i, t, n.decorate, o)
                                    }
                                    ))
                                }
                                ))
                        }
                        ))
                    }
                    )(e, n, t, o)
                }
                ))
            }
            ,
            annotationChanged: (e,t)=>{
                n.addListener(e, t)
            }
            ,
            remove: t=>{
                Ka(e, I.some(t)).each((({elements: t})=>{
                    const n = e.selection.getBookmark();
                    r(t),
                    e.selection.moveToBookmark(n)
                }
                ))
            }
            ,
            removeAll: t=>{
                const n = e.selection.getBookmark();
                ge(Xa(e, t), ((e,t)=>{
                    r(e)
                }
                )),
                e.selection.moveToBookmark(n)
            }
            ,
            getAll: t=>{
                const n = Xa(e, t);
                return pe(n, (e=>V(e, (e=>e.dom))))
            }
        }
    }
      , Im = e=>({
        getBookmark: O(Su, e),
        moveToBookmark: O(_u, e)
    });
    Im.isBookmarkNode = Nu;
    const Fm = (e,t,n)=>!n.collapsed && $(n.getClientRects(), (n=>((e,t,n)=>t >= e.left && t <= e.right && n >= e.top && n <= e.bottom)(n, e, t)))
      , Um = (e,t,n)=>{
        e.dispatch(t, n)
    }
      , zm = (e,t,n,o)=>{
        e.dispatch("FormatApply", {
            format: t,
            node: n,
            vars: o
        })
    }
      , jm = (e,t,n,o)=>{
        e.dispatch("FormatRemove", {
            format: t,
            node: n,
            vars: o
        })
    }
      , Hm = (e,t)=>e.dispatch("SetContent", t)
      , $m = (e,t)=>e.dispatch("GetContent", t)
      , Vm = (e,t)=>e.dispatch("PastePlainTextToggle", {
        state: t
    })
      , qm = {
        BACKSPACE: 8,
        DELETE: 46,
        DOWN: 40,
        ENTER: 13,
        ESC: 27,
        LEFT: 37,
        RIGHT: 39,
        SPACEBAR: 32,
        TAB: 9,
        UP: 38,
        PAGE_UP: 33,
        PAGE_DOWN: 34,
        END: 35,
        HOME: 36,
        modifierPressed: e=>e.shiftKey || e.ctrlKey || e.altKey || qm.metaKeyPressed(e),
        metaKeyPressed: e=>At.os.isMacOS() || At.os.isiOS() ? e.metaKey : e.ctrlKey && !e.altKey
    }
      , Wm = "data-mce-selected"
      , Km = Math.abs
      , Gm = Math.round
      , Ym = {
        nw: [0, 0, -1, -1],
        ne: [1, 0, 1, -1],
        se: [1, 1, 1, 1],
        sw: [0, 1, -1, 1]
    }
      , Xm = (e,t)=>{
        const n = t.dom
          , o = t.getDoc()
          , r = document
          , s = t.getBody();
        let a, i, l, d, c, u, m, f, g, p, h, b, v, y, w;
        const x = e=>C(e) && (or(e) || n.is(e, "figure.image"))
          , k = e=>lr(e) || n.hasClass(e, "mce-preview-object")
          , E = e=>{
            const n = e.target;
            ((e,t)=>{
                if ((e=>"longpress" === e.type || 0 === e.type.indexOf("touch"))(e)) {
                    const n = e.touches[0];
                    return x(e.target) && !Fm(n.clientX, n.clientY, t)
                }
                return x(e.target) && !Fm(e.clientX, e.clientY, t)
            }
            )(e, t.selection.getRng()) && !e.isDefaultPrevented() && t.selection.select(n)
        }
          , S = e=>n.hasClass(e, "mce-preview-object") && C(e.firstElementChild) ? [e, e.firstElementChild] : n.is(e, "figure.image") ? [e.querySelector("img")] : [e]
          , _ = e=>{
            const o = Ql(t);
            return !!o && "false" !== e.getAttribute("data-mce-resize") && e !== t.getBody() && (n.hasClass(e, "mce-preview-object") && C(e.firstElementChild) ? Cn(bn(e.firstElementChild), o) : Cn(bn(e), o))
        }
          , N = (e,o,r)=>{
            if (C(r)) {
                const s = S(e);
                q(s, (e=>{
                    e.style[o] || !t.schema.isValid(e.nodeName.toLowerCase(), o) ? n.setStyle(e, o, r) : n.setAttrib(e, o, "" + r)
                }
                ))
            }
        }
          , R = (e,t,n)=>{
            N(e, "width", t),
            N(e, "height", n)
        }
          , A = e=>{
            let o, r, c, C, E;
            o = e.screenX - u,
            r = e.screenY - m,
            b = o * d[2] + f,
            v = r * d[3] + g,
            b = b < 5 ? 5 : b,
            v = v < 5 ? 5 : v,
            c = (x(a) || k(a)) && !1 !== Jl(t) ? !qm.modifierPressed(e) : qm.modifierPressed(e),
            c && (Km(o) > Km(r) ? (v = Gm(b * p),
            b = Gm(v / p)) : (b = Gm(v / p),
            v = Gm(b * p))),
            R(i, b, v),
            C = d.startPos.x + o,
            E = d.startPos.y + r,
            C = C > 0 ? C : 0,
            E = E > 0 ? E : 0,
            n.setStyles(l, {
                left: C,
                top: E,
                display: "block"
            }),
            l.innerHTML = b + " &times; " + v,
            d[2] < 0 && i.clientWidth <= b && n.setStyle(i, "left", void 0 + (f - b)),
            d[3] < 0 && i.clientHeight <= v && n.setStyle(i, "top", void 0 + (g - v)),
            o = s.scrollWidth - y,
            r = s.scrollHeight - w,
            o + r !== 0 && n.setStyles(l, {
                left: C - o,
                top: E - r
            }),
            h || (((e,t,n,o,r)=>{
                e.dispatch("ObjectResizeStart", {
                    target: t,
                    width: n,
                    height: o,
                    origin: r
                })
            }
            )(t, a, f, g, "corner-" + d.name),
            h = !0)
        }
          , O = ()=>{
            const e = h;
            h = !1,
            e && (N(a, "width", b),
            N(a, "height", v)),
            n.unbind(o, "mousemove", A),
            n.unbind(o, "mouseup", O),
            r !== o && (n.unbind(r, "mousemove", A),
            n.unbind(r, "mouseup", O)),
            n.remove(i),
            n.remove(l),
            n.remove(c),
            T(a),
            e && (((e,t,n,o,r)=>{
                e.dispatch("ObjectResized", {
                    target: t,
                    width: n,
                    height: o,
                    origin: r
                })
            }
            )(t, a, b, v, "corner-" + d.name),
            n.setAttrib(a, "style", n.getAttrib(a, "style"))),
            t.nodeChanged()
        }
          , T = e=>{
            M();
            const h = n.getPos(e, s)
              , C = h.x
              , x = h.y
              , E = e.getBoundingClientRect()
              , N = E.width || E.right - E.left
              , T = E.height || E.bottom - E.top;
            a !== e && (D(),
            a = e,
            b = v = 0);
            const B = t.dispatch("ObjectSelected", {
                target: e
            });
            _(e) && !B.isDefaultPrevented() ? ge(Ym, ((e,t)=>{
                let h = n.get("mceResizeHandle" + t);
                h && n.remove(h),
                h = n.add(s, "div", {
                    id: "mceResizeHandle" + t,
                    "data-mce-bogus": "all",
                    class: "mce-resizehandle",
                    unselectable: !0,
                    style: "cursor:" + t + "-resize; margin:0; padding:0"
                }),
                n.bind(h, "mousedown", (h=>{
                    h.stopImmediatePropagation(),
                    h.preventDefault(),
                    (h=>{
                        const b = S(a)[0];
                        var v;
                        u = h.screenX,
                        m = h.screenY,
                        f = b.clientWidth,
                        g = b.clientHeight,
                        p = g / f,
                        d = e,
                        d.name = t,
                        d.startPos = {
                            x: N * e[0] + C,
                            y: T * e[1] + x
                        },
                        y = s.scrollWidth,
                        w = s.scrollHeight,
                        c = n.add(s, "div", {
                            class: "mce-resize-backdrop",
                            "data-mce-bogus": "all"
                        }),
                        n.setStyles(c, {
                            position: "fixed",
                            left: "0",
                            top: "0",
                            width: "100%",
                            height: "100%"
                        }),
                        i = k(v = a) ? n.create("img", {
                            src: At.transparentSrc
                        }) : v.cloneNode(!0),
                        n.addClass(i, "mce-clonedresizable"),
                        n.setAttrib(i, "data-mce-bogus", "all"),
                        i.contentEditable = "false",
                        n.setStyles(i, {
                            left: C,
                            top: x,
                            margin: 0
                        }),
                        R(i, N, T),
                        i.removeAttribute(Wm),
                        s.appendChild(i),
                        n.bind(o, "mousemove", A),
                        n.bind(o, "mouseup", O),
                        r !== o && (n.bind(r, "mousemove", A),
                        n.bind(r, "mouseup", O)),
                        l = n.add(s, "div", {
                            class: "mce-resize-helper",
                            "data-mce-bogus": "all"
                        }, f + " &times; " + g)
                    }
                    )(h)
                }
                )),
                e.elm = h,
                n.setStyles(h, {
                    left: N * e[0] + C - h.offsetWidth / 2,
                    top: T * e[1] + x - h.offsetHeight / 2
                })
            }
            )) : D(!1)
        }
          , B = Fa(T, 0)
          , D = (e=!0)=>{
            B.cancel(),
            M(),
            a && e && a.removeAttribute(Wm),
            ge(Ym, ((e,t)=>{
                const o = n.get("mceResizeHandle" + t);
                o && (n.unbind(o),
                n.remove(o))
            }
            ))
        }
          , P = (e,t)=>n.isChildOf(e, t)
          , L = o=>{
            if (h || t.removed || t.composing)
                return;
            const r = "mousedown" === o.type ? o.target : e.getNode()
              , a = Zn(bn(r), "table,img,figure.image,hr,video,span.mce-preview-object").map((e=>e.dom)).filter((e=>n.isEditable(e.parentElement))).getOrUndefined()
              , i = C(a) ? n.getAttrib(a, Wm, "1") : "1";
            if (q(n.select("img[data-mce-selected],hr[data-mce-selected]"), (e=>{
                e.removeAttribute(Wm)
            }
            )),
            C(a) && P(a, s)) {
                I();
                const t = e.getStart(!0);
                if (P(t, a) && P(e.getEnd(!0), a))
                    return n.setAttrib(a, Wm, i),
                    void B.throttle(a)
            }
            D()
        }
          , M = ()=>{
            ge(Ym, (e=>{
                e.elm && (n.unbind(e.elm),
                delete e.elm)
            }
            ))
        }
          , I = ()=>{
            try {
                t.getDoc().execCommand("enableObjectResizing", !1, "false")
            } catch (e) {}
        }
        ;
        return t.on("init", (()=>{
            I(),
            t.on("NodeChange ResizeEditor ResizeWindow ResizeContent drop", L),
            t.on("keyup compositionend", (e=>{
                a && "TABLE" === a.nodeName && L(e)
            }
            )),
            t.on("hide blur", D),
            t.on("contextmenu longpress", E, !0)
        }
        )),
        t.on("remove", M),
        {
            isResizable: _,
            showResizeRect: T,
            hideResizeRect: D,
            updateResizeRect: L,
            destroy: ()=>{
                B.cancel(),
                a = i = c = null
            }
        }
    }
      , Qm = (e,t,n)=>{
        const o = e.document.createRange();
        var r;
        return r = o,
        t.fold((e=>{
            r.setStartBefore(e.dom)
        }
        ), ((e,t)=>{
            r.setStart(e.dom, t)
        }
        ), (e=>{
            r.setStartAfter(e.dom)
        }
        )),
        ((e,t)=>{
            t.fold((t=>{
                e.setEndBefore(t.dom)
            }
            ), ((t,n)=>{
                e.setEnd(t.dom, n)
            }
            ), (t=>{
                e.setEndAfter(t.dom)
            }
            ))
        }
        )(o, n),
        o
    }
      , Jm = (e,t,n,o,r)=>{
        const s = e.document.createRange();
        return s.setStart(t.dom, n),
        s.setEnd(o.dom, r),
        s
    }
      , Zm = ol([{
        ltr: ["start", "soffset", "finish", "foffset"]
    }, {
        rtl: ["start", "soffset", "finish", "foffset"]
    }])
      , ef = (e,t,n)=>t(bn(n.startContainer), n.startOffset, bn(n.endContainer), n.endOffset);
    Zm.ltr,
    Zm.rtl;
    const tf = (e,t,n,o)=>({
        start: e,
        soffset: t,
        finish: n,
        foffset: o
    })
      , nf = document.caretPositionFromPoint ? (e,t,n)=>{
        var o, r;
        return I.from(null === (r = (o = e.dom).caretPositionFromPoint) || void 0 === r ? void 0 : r.call(o, t, n)).bind((t=>{
            if (null === t.offsetNode)
                return I.none();
            const n = e.dom.createRange();
            return n.setStart(t.offsetNode, t.offset),
            n.collapse(),
            I.some(n)
        }
        ))
    }
    : document.caretRangeFromPoint ? (e,t,n)=>{
        var o, r;
        return I.from(null === (r = (o = e.dom).caretRangeFromPoint) || void 0 === r ? void 0 : r.call(o, t, n))
    }
    : I.none
      , of = ol([{
        before: ["element"]
    }, {
        on: ["element", "offset"]
    }, {
        after: ["element"]
    }])
      , rf = {
        before: of.before,
        on: of.on,
        after: of.after,
        cata: (e,t,n,o)=>e.fold(t, n, o),
        getStart: e=>e.fold(R, R, R)
    }
      , sf = ol([{
        domRange: ["rng"]
    }, {
        relative: ["startSitu", "finishSitu"]
    }, {
        exact: ["start", "soffset", "finish", "foffset"]
    }])
      , af = {
        domRange: sf.domRange,
        relative: sf.relative,
        exact: sf.exact,
        exactFromRange: e=>sf.exact(e.start, e.soffset, e.finish, e.foffset),
        getWin: e=>{
            const t = (e=>e.match({
                domRange: e=>bn(e.startContainer),
                relative: (e,t)=>rf.getStart(e),
                exact: (e,t,n,o)=>e
            }))(e);
            return _n(t)
        }
        ,
        range: tf
    }
      , lf = (e,t)=>{
        const n = jt(e);
        return "input" === n ? rf.after(e) : H(["br", "img"], n) ? 0 === t ? rf.before(e) : rf.after(e) : rf.on(e, t)
    }
      , df = (e,t)=>{
        const n = e.fold(rf.before, lf, rf.after)
          , o = t.fold(rf.before, lf, rf.after);
        return af.relative(n, o)
    }
      , cf = (e,t,n,o)=>{
        const r = lf(e, t)
          , s = lf(n, o);
        return af.relative(r, s)
    }
      , uf = (e,t)=>{
        const n = (t || document).createDocumentFragment();
        return q(e, (e=>{
            n.appendChild(e.dom)
        }
        )),
        bn(n)
    }
      , mf = e=>{
        const t = af.getWin(e).dom
          , n = (e,n,o,r)=>Jm(t, e, n, o, r)
          , o = (e=>e.match({
            domRange: e=>{
                const t = bn(e.startContainer)
                  , n = bn(e.endContainer);
                return cf(t, e.startOffset, n, e.endOffset)
            }
            ,
            relative: df,
            exact: cf
        }))(e);
        return ((e,t)=>{
            const n = ((e,t)=>t.match({
                domRange: e=>({
                    ltr: N(e),
                    rtl: I.none
                }),
                relative: (t,n)=>({
                    ltr: Pe((()=>Qm(e, t, n))),
                    rtl: Pe((()=>I.some(Qm(e, n, t))))
                }),
                exact: (t,n,o,r)=>({
                    ltr: Pe((()=>Jm(e, t, n, o, r))),
                    rtl: Pe((()=>I.some(Jm(e, o, r, t, n))))
                })
            }))(e, t);
            return ((e,t)=>{
                const n = t.ltr();
                return n.collapsed ? t.rtl().filter((e=>!1 === e.collapsed)).map((e=>Zm.rtl(bn(e.endContainer), e.endOffset, bn(e.startContainer), e.startOffset))).getOrThunk((()=>ef(0, Zm.ltr, n))) : ef(0, Zm.ltr, n)
            }
            )(0, n)
        }
        )(t, o).match({
            ltr: n,
            rtl: n
        })
    }
      , ff = (e,t,n)=>((e,t,n)=>((e,t,n)=>{
        const o = bn(e.document);
        return nf(o, t, n).map((e=>tf(bn(e.startContainer), e.startOffset, bn(e.endContainer), e.endOffset)))
    }
    )(e, t, n))(_n(bn(n)).dom, e, t).map((e=>{
        const t = n.createRange();
        return t.setStart(e.start.dom, e.soffset),
        t.setEnd(e.finish.dom, e.foffset),
        t
    }
    )).getOrUndefined()
      , gf = (e,t)=>C(e) && C(t) && e.startContainer === t.startContainer && e.startOffset === t.startOffset && e.endContainer === t.endContainer && e.endOffset === t.endOffset
      , pf = (e,t,n)=>null !== ((e,t,n)=>{
        let o = e;
        for (; o && o !== t; ) {
            if (n(o))
                return o;
            o = o.parentNode
        }
        return null
    }
    )(e, t, n)
      , hf = (e,t,n)=>pf(e, t, (e=>e.nodeName === n))
      , bf = (e,t)=>Ur(e) && !pf(e, t, gu)
      , vf = (e,t,n)=>{
        const o = t.parentNode;
        if (o) {
            const r = new Fo(t,e.getParent(o, e.isBlock) || e.getRoot());
            let s;
            for (; s = r[n ? "prev" : "next"](); )
                if (nr(s))
                    return !0
        }
        return !1
    }
      , yf = (e,t,n,o,r)=>{
        const s = e.getRoot()
          , a = e.schema.getNonEmptyElements()
          , i = r.parentNode;
        let l, d;
        if (!i)
            return I.none();
        const c = e.getParent(i, e.isBlock) || s;
        if (o && nr(r) && t && e.isEmpty(c))
            return I.some(Bi(i, e.nodeIndex(r)));
        const u = new Fo(r,c);
        for (; d = u[o ? "prev" : "next"](); ) {
            if ("false" === e.getContentEditableParent(d) || bf(d, s))
                return I.none();
            if (Xo(d) && d.data.length > 0)
                return hf(d, s, "A") ? I.none() : I.some(Bi(d, o ? d.data.length : 0));
            if (e.isBlock(d) || a[d.nodeName.toLowerCase()])
                return I.none();
            l = d
        }
        return Zo(l) ? I.none() : n && l ? I.some(Bi(l, 0)) : I.none()
    }
      , Cf = (e,t,n,o)=>{
        const r = e.getRoot();
        let s, a = !1, i = n ? o.startContainer : o.endContainer, l = n ? o.startOffset : o.endOffset;
        const d = jo(i) && l === i.childNodes.length
          , c = e.schema.getNonEmptyElements();
        let u = n;
        if (Ur(i))
            return I.none();
        if (jo(i) && l > i.childNodes.length - 1 && (u = !1),
        er(i) && (i = r,
        l = 0),
        i === r) {
            if (u && (s = i.childNodes[l > 0 ? l - 1 : 0],
            s)) {
                if (Ur(s))
                    return I.none();
                if (c[s.nodeName] || Ko(s))
                    return I.none()
            }
            if (i.hasChildNodes()) {
                if (l = Math.min(!u && l > 0 ? l - 1 : l, i.childNodes.length - 1),
                i = i.childNodes[l],
                l = Xo(i) && d ? i.data.length : 0,
                !t && i === r.lastChild && Ko(i))
                    return I.none();
                if (((e,t)=>{
                    let n = t;
                    for (; n && n !== e; ) {
                        if (sr(n))
                            return !0;
                        n = n.parentNode
                    }
                    return !1
                }
                )(r, i) || Ur(i))
                    return I.none();
                if (i.hasChildNodes() && !Ko(i)) {
                    s = i;
                    const t = new Fo(i,r);
                    do {
                        if (sr(s) || Ur(s)) {
                            a = !1;
                            break
                        }
                        if (Xo(s) && s.data.length > 0) {
                            l = u ? 0 : s.data.length,
                            i = s,
                            a = !0;
                            break
                        }
                        if (c[s.nodeName.toLowerCase()] && !ir(s)) {
                            l = e.nodeIndex(s),
                            i = s.parentNode,
                            u || l++,
                            a = !0;
                            break
                        }
                    } while (s = u ? t.next() : t.prev())
                }
            }
        }
        return t && (Xo(i) && 0 === l && yf(e, d, t, !0, i).each((e=>{
            i = e.container(),
            l = e.offset(),
            a = !0
        }
        )),
        jo(i) && (s = i.childNodes[l],
        s || (s = i.childNodes[l - 1]),
        !s || !nr(s) || ((e,t)=>{
            var n;
            return "A" === (null === (n = e.previousSibling) || void 0 === n ? void 0 : n.nodeName)
        }
        )(s) || vf(e, s, !1) || vf(e, s, !0) || yf(e, d, t, !0, s).each((e=>{
            i = e.container(),
            l = e.offset(),
            a = !0
        }
        )))),
        u && !t && Xo(i) && l === i.data.length && yf(e, d, t, !1, i).each((e=>{
            i = e.container(),
            l = e.offset(),
            a = !0
        }
        )),
        a && i ? I.some(Bi(i, l)) : I.none()
    }
      , wf = (e,t)=>{
        const n = t.collapsed
          , o = t.cloneRange()
          , r = Bi.fromRangeStart(t);
        return Cf(e, n, !0, o).each((e=>{
            n && Bi.isAbove(r, e) || o.setStart(e.container(), e.offset())
        }
        )),
        n || Cf(e, n, !1, o).each((e=>{
            o.setEnd(e.container(), e.offset())
        }
        )),
        n && o.collapse(!0),
        gf(t, o) ? I.none() : I.some(o)
    }
      , xf = (e,t)=>e.splitText(t)
      , kf = e=>{
        let t = e.startContainer
          , n = e.startOffset
          , o = e.endContainer
          , r = e.endOffset;
        if (t === o && Xo(t)) {
            if (n > 0 && n < t.data.length)
                if (o = xf(t, n),
                t = o.previousSibling,
                r > n) {
                    r -= n;
                    const e = xf(o, r).previousSibling;
                    t = o = e,
                    r = e.data.length,
                    n = 0
                } else
                    r = 0
        } else if (Xo(t) && n > 0 && n < t.data.length && (t = xf(t, n),
        n = 0),
        Xo(o) && r > 0 && r < o.data.length) {
            const e = xf(o, r).previousSibling;
            o = e,
            r = e.data.length
        }
        return {
            startContainer: t,
            startOffset: n,
            endContainer: o,
            endOffset: r
        }
    }
      , Ef = e=>({
        walk: (t,n)=>Tm(e, t, n),
        split: kf,
        expand: (t,n={
            type: "word"
        })=>{
            if ("word" === n.type) {
                const n = Om(e, t, [{
                    inline: "span"
                }])
                  , o = e.createRng();
                return o.setStart(n.startContainer, n.startOffset),
                o.setEnd(n.endContainer, n.endOffset),
                o
            }
            return t
        }
        ,
        normalize: t=>wf(e, t).fold(L, (e=>(t.setStart(e.startContainer, e.startOffset),
        t.setEnd(e.endContainer, e.endOffset),
        !0)))
    });
    Ef.compareRanges = gf,
    Ef.getCaretRangeFromPoint = ff,
    Ef.getSelectedNode = ui,
    Ef.getNode = mi;
    const Sf = ((e,t)=>{
        const n = t=>{
            const n = (e=>{
                const t = e.dom;
                return Kn(e) ? t.getBoundingClientRect().height : t.offsetHeight
            }
            )(t);
            if (n <= 0 || null === n) {
                const n = ao(t, e);
                return parseFloat(n) || 0
            }
            return n
        }
          , o = (e,t)=>X(t, ((t,n)=>{
            const o = ao(e, n)
              , r = void 0 === o ? 0 : parseInt(o, 10);
            return isNaN(r) ? t : t + r
        }
        ), 0);
        return {
            set: (t,n)=>{
                if (!x(n) && !n.match(/^[0-9]+$/))
                    throw new Error(e + ".set accepts only positive integer values. Value was " + n);
                const o = t.dom;
                no(o) && (o.style[e] = n + "px")
            }
            ,
            get: n,
            getOuter: n,
            aggregate: o,
            max: (e,t,n)=>{
                const r = o(e, n);
                return t > r ? t - r : 0
            }
        }
    }
    )("height")
      , _f = ()=>bn(document)
      , Nf = (e,t)=>e.view(t).fold(N([]), (t=>{
        const n = e.owner(t)
          , o = Nf(e, n);
        return [t].concat(o)
    }
    ));
    var Rf = Object.freeze({
        __proto__: null,
        view: e=>{
            var t;
            return (e.dom === document ? I.none() : I.from(null === (t = e.dom.defaultView) || void 0 === t ? void 0 : t.frameElement)).map(bn)
        }
        ,
        owner: e=>Sn(e)
    });
    const Af = e=>"textarea" === jt(e)
      , Of = (e,t)=>{
        const n = (e=>{
            const t = e.dom.ownerDocument
              , n = t.body
              , o = t.defaultView
              , r = t.documentElement;
            if (n === e.dom)
                return No(n.offsetLeft, n.offsetTop);
            const s = Ro(null == o ? void 0 : o.pageYOffset, r.scrollTop)
              , a = Ro(null == o ? void 0 : o.pageXOffset, r.scrollLeft)
              , i = Ro(r.clientTop, n.clientTop)
              , l = Ro(r.clientLeft, n.clientLeft);
            return Ao(e).translate(a - l, s - i)
        }
        )(e)
          , o = (e=>Sf.get(e))(e);
        return {
            element: e,
            bottom: n.top + o,
            height: o,
            pos: n,
            cleanup: t
        }
    }
      , Tf = (e,t,n,o)=>{
        Lf(e, ((r,s)=>Df(e, t, n, o)), n)
    }
      , Bf = (e,t,n,o,r)=>{
        const s = {
            elm: o.element.dom,
            alignToTop: r
        };
        ((e,t)=>e.dispatch("ScrollIntoView", t).isDefaultPrevented())(e, s) || (n(t, Oo(t).top, o, r),
        ((e,t)=>{
            e.dispatch("AfterScrollIntoView", t)
        }
        )(e, s))
    }
      , Df = (e,t,n,o)=>{
        const r = bn(e.getBody())
          , s = bn(e.getDoc());
        r.dom.offsetWidth;
        const a = ((e,t)=>{
            const n = ((e,t)=>{
                const n = Pn(e);
                if (0 === n.length || Af(e))
                    return {
                        element: e,
                        offset: t
                    };
                if (t < n.length && !Af(n[t]))
                    return {
                        element: n[t],
                        offset: 0
                    };
                {
                    const o = n[n.length - 1];
                    return Af(o) ? {
                        element: e,
                        offset: t
                    } : "img" === jt(o) ? {
                        element: o,
                        offset: 1
                    } : qt(o) ? {
                        element: o,
                        offset: gr(o).length
                    } : {
                        element: o,
                        offset: Pn(o).length
                    }
                }
            }
            )(e, t)
              , o = gn('<span data-mce-bogus="all" style="display: inline-block;">\ufeff</span>');
            return mo(n.element, o),
            Of(o, (()=>yo(o)))
        }
        )(bn(n.startContainer), n.startOffset);
        Bf(e, s, t, a, o),
        a.cleanup()
    }
      , Pf = (e,t,n,o)=>{
        const r = bn(e.getDoc());
        Bf(e, r, n, (e=>Of(bn(e), E))(t), o)
    }
      , Lf = (e,t,n)=>{
        const o = n.startContainer
          , r = n.startOffset
          , s = n.endContainer
          , a = n.endOffset;
        t(bn(o), bn(s));
        const i = e.dom.createRng();
        i.setStart(o, r),
        i.setEnd(s, a),
        e.selection.setRng(n)
    }
      , Mf = (e,t,n,o)=>{
        const r = e.pos;
        if (n)
            To(r.left, r.top, o);
        else {
            const n = r.top - t + e.height;
            To(r.left, n, o)
        }
    }
      , If = (e,t,n,o,r)=>{
        const s = n + t
          , a = o.pos.top
          , i = o.bottom
          , l = i - a >= n;
        a < t ? Mf(o, n, !1 !== r, e) : a > s ? Mf(o, n, l ? !1 !== r : !0 === r, e) : i > s && !l && Mf(o, n, !0 === r, e)
    }
      , Ff = (e,t,n,o)=>{
        const r = _n(e).dom.innerHeight;
        If(e, t, r, n, o)
    }
      , Uf = (e,t,n,o)=>{
        const r = _n(e).dom.innerHeight;
        If(e, t, r, n, o);
        const s = (e=>{
            const t = _f()
              , n = Oo(t)
              , o = ((e,t)=>{
                const n = t.owner(e);
                return Nf(t, n)
            }
            )(e, Rf)
              , r = Ao(e)
              , s = Y(o, ((e,t)=>{
                const n = Ao(t);
                return {
                    left: e.left + n.left,
                    top: e.top + n.top
                }
            }
            ), {
                left: 0,
                top: 0
            });
            return No(s.left + r.left + n.left, s.top + r.top + n.top)
        }
        )(n.element)
          , a = Po(window);
        s.top < a.y ? Bo(n.element, !1 !== o) : s.top > a.bottom && Bo(n.element, !0 === o)
    }
      , zf = (e,t,n)=>Tf(e, Ff, t, n)
      , jf = (e,t,n)=>Pf(e, t, Ff, n)
      , Hf = (e,t,n)=>Tf(e, Uf, t, n)
      , $f = (e,t,n)=>Pf(e, t, Uf, n)
      , Vf = (e,t,n)=>{
        (e.inline ? zf : Hf)(e, t, n)
    }
      , qf = e=>e.dom.focus()
      , Wf = e=>{
        const t = Hn(e).dom;
        return e.dom === t.activeElement
    }
      , Kf = (e=_f())=>I.from(e.dom.activeElement).map(bn)
      , Gf = (e,t)=>{
        const n = qt(t) ? gr(t).length : Pn(t).length + 1;
        return e > n ? n : e < 0 ? 0 : e
    }
      , Yf = e=>af.range(e.start, Gf(e.soffset, e.start), e.finish, Gf(e.foffset, e.finish))
      , Xf = (e,t)=>!zo(t.dom) && (kn(e, t) || xn(e, t))
      , Qf = e=>t=>Xf(e, t.start) && Xf(e, t.finish)
      , Jf = e=>af.range(bn(e.startContainer), e.startOffset, bn(e.endContainer), e.endOffset)
      , Zf = e=>{
        const t = document.createRange();
        try {
            return t.setStart(e.start.dom, e.soffset),
            t.setEnd(e.finish.dom, e.foffset),
            I.some(t)
        } catch (e) {
            return I.none()
        }
    }
      , eg = e=>{
        const t = (e=>e.inline || At.browser.isFirefox())(e) ? (n = bn(e.getBody()),
        (e=>{
            const t = e.getSelection();
            return (t && 0 !== t.rangeCount ? I.from(t.getRangeAt(0)) : I.none()).map(Jf)
        }
        )(_n(n).dom).filter(Qf(n))) : I.none();
        var n;
        e.bookmark = t.isSome() ? t : e.bookmark
    }
      , tg = e=>(e.bookmark ? e.bookmark : I.none()).bind((t=>{
        return n = bn(e.getBody()),
        o = t,
        I.from(o).filter(Qf(n)).map(Yf);
        var n, o
    }
    )).bind(Zf)
      , ng = {
        isEditorUIElement: e=>{
            const t = e.className.toString();
            return -1 !== t.indexOf("tox-") || -1 !== t.indexOf("mce-")
        }
    }
      , og = {
        setEditorTimeout: (e,t,n)=>((e,t)=>(x(t) || (t = 0),
        setTimeout(e, t)))((()=>{
            e.removed || t()
        }
        ), n),
        setEditorInterval: (e,t,n)=>{
            const o = ((e,t)=>(x(t) || (t = 0),
            setInterval(e, t)))((()=>{
                e.removed ? clearInterval(o) : t()
            }
            ), n);
            return o
        }
    };
    let rg;
    const sg = Na.DOM
      , ag = e=>{
        const t = e.classList;
        return void 0 !== t && (t.contains("tox-edit-area") || t.contains("tox-edit-area__iframe") || t.contains("mce-content-body"))
    }
      , ig = (e,t)=>{
        const n = ud(e)
          , o = sg.getParent(t, (t=>(e=>jo(e) && ng.isEditorUIElement(e))(t) || !!n && e.dom.is(t, n)));
        return null !== o
    }
      , lg = e=>{
        try {
            const t = Hn(bn(e.getElement()));
            return Kf(t).fold((()=>document.body), (e=>e.dom))
        } catch (e) {
            return document.body
        }
    }
      , dg = (e,t)=>{
        const n = t.editor;
        (e=>{
            const t = Fa((()=>{
                eg(e)
            }
            ), 0);
            e.on("init", (()=>{
                e.inline && ((e,t)=>{
                    const n = ()=>{
                        t.throttle()
                    }
                    ;
                    Na.DOM.bind(document, "mouseup", n),
                    e.on("remove", (()=>{
                        Na.DOM.unbind(document, "mouseup", n)
                    }
                    ))
                }
                )(e, t),
                ((e,t)=>{
                    ((e,t)=>{
                        e.on("mouseup touchend", (e=>{
                            t.throttle()
                        }
                        ))
                    }
                    )(e, t),
                    e.on("keyup NodeChange AfterSetSelectionRange", (t=>{
                        (e=>"nodechange" === e.type && e.selectionChange)(t) || eg(e)
                    }
                    ))
                }
                )(e, t)
            }
            )),
            e.on("remove", (()=>{
                t.cancel()
            }
            ))
        }
        )(n);
        const o = (e,t)=>{
            Qd(e) && !0 !== e.inline && t(bn(e.getContainer()), "tox-edit-focus")
        }
        ;
        n.on("focusin", (()=>{
            const t = e.focusedEditor;
            ag(lg(n)) && o(n, dn),
            t !== n && (t && t.dispatch("blur", {
                focusedEditor: n
            }),
            e.setActive(n),
            e.focusedEditor = n,
            n.dispatch("focus", {
                blurredEditor: t
            }),
            n.focus(!0))
        }
        )),
        n.on("focusout", (()=>{
            og.setEditorTimeout(n, (()=>{
                const t = e.focusedEditor;
                ag(lg(n)) && t === n || o(n, un),
                ig(n, lg(n)) || t !== n || (n.dispatch("blur", {
                    focusedEditor: null
                }),
                e.focusedEditor = null)
            }
            ))
        }
        )),
        rg || (rg = t=>{
            const n = e.activeEditor;
            n && qn(t).each((t=>{
                const o = t;
                o.ownerDocument === document && (o === document.body || ig(n, o) || e.focusedEditor !== n || (n.dispatch("blur", {
                    focusedEditor: null
                }),
                e.focusedEditor = null))
            }
            ))
        }
        ,
        sg.bind(document, "focusin", rg))
    }
      , cg = (e,t)=>{
        e.focusedEditor === t.editor && (e.focusedEditor = null),
        !e.activeEditor && rg && (sg.unbind(document, "focusin", rg),
        rg = null)
    }
      , ug = (e,t)=>{
        ((e,t)=>(e=>e.collapsed ? I.from(mi(e.startContainer, e.startOffset)).map(bn) : I.none())(t).bind((t=>Er(t) ? I.some(t) : kn(e, t) ? I.none() : I.some(e))))(bn(e.getBody()), t).bind((e=>uu(e.dom))).fold((()=>{
            e.selection.normalize()
        }
        ), (t=>e.selection.setRng(t.toRange())))
    }
      , mg = e=>{
        if (e.setActive)
            try {
                e.setActive()
            } catch (t) {
                e.focus()
            }
        else
            e.focus()
    }
      , fg = e=>e.inline ? (e=>{
        const t = e.getBody();
        return t && (n = bn(t),
        Wf(n) || (o = n,
        Kf(Hn(o)).filter((e=>o.dom.contains(e.dom)))).isSome());
        var n, o
    }
    )(e) : (e=>C(e.iframeElement) && Wf(bn(e.iframeElement)))(e)
      , gg = e=>e.editorManager.setActive(e)
      , pg = (e,t,n,o,r)=>{
        const s = n ? t.startContainer : t.endContainer
          , a = n ? t.startOffset : t.endOffset;
        return I.from(s).map(bn).map((e=>o && t.collapsed ? e : Ln(e, r(e, a)).getOr(e))).bind((e=>Vt(e) ? I.some(e) : Nn(e).filter(Vt))).map((e=>e.dom)).getOr(e)
    }
      , hg = (e,t,n=!1)=>pg(e, t, !0, n, ((e,t)=>Math.min(Fn(e), t)))
      , bg = (e,t,n=!1)=>pg(e, t, !1, n, ((e,t)=>t > 0 ? t - 1 : t))
      , vg = (e,t)=>{
        const n = e;
        for (; e && Xo(e) && 0 === e.length; )
            e = t ? e.nextSibling : e.previousSibling;
        return e || n
    }
      , yg = (e,t)=>V(t, (t=>{
        const n = e.dispatch("GetSelectionRange", {
            range: t
        });
        return n.range !== t ? n.range : t
    }
    ))
      , Cg = ["img", "br"]
      , wg = e=>{
        const t = pr(e).filter((e=>0 !== e.trim().length || e.indexOf(ur) > -1)).isSome();
        return t || H(Cg, jt(e)) || (e=>{
            return Vt(t = e) && zt(t.dom) && "false" === Jt(e, "contenteditable");
            var t
        }
        )(e)
    }
      , xg = "[data-mce-autocompleter]"
      , kg = (e,t)=>{
        if (Eg(bn(e.getBody())).isNone()) {
            const o = gn('<span data-mce-autocompleter="1" data-mce-bogus="1"></span>', e.getDoc());
            po(o, bn(t.extractContents())),
            t.insertNode(o.dom),
            Nn(o).each((e=>e.dom.normalize())),
            (n = o,
            ((e,t)=>{
                const n = e=>{
                    const o = Pn(e);
                    for (let e = o.length - 1; e >= 0; e--) {
                        const r = o[e];
                        if (t(r))
                            return I.some(r);
                        const s = n(r);
                        if (s.isSome())
                            return s
                    }
                    return I.none()
                }
                ;
                return n(e)
            }
            )(n, wg)).map((t=>{
                e.selection.setCursorLocation(t.dom, (e=>"img" === jt(e) ? 1 : pr(e).fold((()=>Pn(e).length), (e=>e.length)))(t))
            }
            ))
        }
        var n
    }
      , Eg = e=>Jn(e, xg)
      , Sg = {
        "#text": 3,
        "#comment": 8,
        "#cdata": 4,
        "#pi": 7,
        "#doctype": 10,
        "#document-fragment": 11
    }
      , _g = (e,t,n)=>{
        const o = n ? "lastChild" : "firstChild"
          , r = n ? "prev" : "next";
        if (e[o])
            return e[o];
        if (e !== t) {
            let n = e[r];
            if (n)
                return n;
            for (let o = e.parent; o && o !== t; o = o.parent)
                if (n = o[r],
                n)
                    return n
        }
    }
      , Ng = e=>{
        var t;
        const n = null !== (t = e.value) && void 0 !== t ? t : "";
        if (!ss(n))
            return !1;
        const o = e.parent;
        return !o || "span" === o.name && !o.attr("style") || !/^[ ]+$/.test(n)
    }
      , Rg = e=>{
        const t = "a" === e.name && !e.attr("href") && e.attr("id");
        return e.attr("name") || e.attr("id") && !e.firstChild || e.attr("data-mce-bookmark") || t
    }
    ;
    class Ag {
        constructor(e, t) {
            this.name = e,
            this.type = t,
            1 === t && (this.attributes = [],
            this.attributes.map = {})
        }
        static create(e, t) {
            const n = new Ag(e,Sg[e] || 1);
            return t && ge(t, ((e,t)=>{
                n.attr(t, e)
            }
            )),
            n
        }
        replace(e) {
            const t = this;
            return e.parent && e.remove(),
            t.insert(e, t),
            t.remove(),
            t
        }
        attr(e, t) {
            const n = this;
            if (!m(e))
                return C(e) && ge(e, ((e,t)=>{
                    n.attr(t, e)
                }
                )),
                n;
            const o = n.attributes;
            if (o) {
                if (void 0 !== t) {
                    if (null === t) {
                        if (e in o.map) {
                            delete o.map[e];
                            let t = o.length;
                            for (; t--; )
                                if (o[t].name === e)
                                    return o.splice(t, 1),
                                    n
                        }
                        return n
                    }
                    if (e in o.map) {
                        let n = o.length;
                        for (; n--; )
                            if (o[n].name === e) {
                                o[n].value = t;
                                break
                            }
                    } else
                        o.push({
                            name: e,
                            value: t
                        });
                    return o.map[e] = t,
                    n
                }
                return o.map[e]
            }
        }
        clone() {
            const e = this
              , t = new Ag(e.name,e.type)
              , n = e.attributes;
            if (n) {
                const e = [];
                e.map = {};
                for (let t = 0, o = n.length; t < o; t++) {
                    const o = n[t];
                    "id" !== o.name && (e[e.length] = {
                        name: o.name,
                        value: o.value
                    },
                    e.map[o.name] = o.value)
                }
                t.attributes = e
            }
            return t.value = e.value,
            t
        }
        wrap(e) {
            const t = this;
            return t.parent && (t.parent.insert(e, t),
            e.append(t)),
            t
        }
        unwrap() {
            const e = this;
            for (let t = e.firstChild; t; ) {
                const n = t.next;
                e.insert(t, e, !0),
                t = n
            }
            e.remove()
        }
        remove() {
            const e = this
              , t = e.parent
              , n = e.next
              , o = e.prev;
            return t && (t.firstChild === e ? (t.firstChild = n,
            n && (n.prev = null)) : o && (o.next = n),
            t.lastChild === e ? (t.lastChild = o,
            o && (o.next = null)) : n && (n.prev = o),
            e.parent = e.next = e.prev = null),
            e
        }
        append(e) {
            const t = this;
            e.parent && e.remove();
            const n = t.lastChild;
            return n ? (n.next = e,
            e.prev = n,
            t.lastChild = e) : t.lastChild = t.firstChild = e,
            e.parent = t,
            e
        }
        insert(e, t, n) {
            e.parent && e.remove();
            const o = t.parent || this;
            return n ? (t === o.firstChild ? o.firstChild = e : t.prev && (t.prev.next = e),
            e.prev = t.prev,
            e.next = t,
            t.prev = e) : (t === o.lastChild ? o.lastChild = e : t.next && (t.next.prev = e),
            e.next = t.next,
            e.prev = t,
            t.next = e),
            e.parent = o,
            e
        }
        getAll(e) {
            const t = this
              , n = [];
            for (let o = t.firstChild; o; o = _g(o, t))
                o.name === e && n.push(o);
            return n
        }
        children() {
            const e = [];
            for (let t = this.firstChild; t; t = t.next)
                e.push(t);
            return e
        }
        empty() {
            const e = this;
            if (e.firstChild) {
                const t = [];
                for (let n = e.firstChild; n; n = _g(n, e))
                    t.push(n);
                let n = t.length;
                for (; n--; ) {
                    const e = t[n];
                    e.parent = e.firstChild = e.lastChild = e.next = e.prev = null
                }
            }
            return e.firstChild = e.lastChild = null,
            e
        }
        isEmpty(e, t={}, n) {
            var o;
            const r = this;
            let s = r.firstChild;
            if (Rg(r))
                return !1;
            if (s)
                do {
                    if (1 === s.type) {
                        if (s.attr("data-mce-bogus"))
                            continue;
                        if (e[s.name])
                            return !1;
                        if (Rg(s))
                            return !1
                    }
                    if (8 === s.type)
                        return !1;
                    if (3 === s.type && !Ng(s))
                        return !1;
                    if (3 === s.type && s.parent && t[s.parent.name] && ss(null !== (o = s.value) && void 0 !== o ? o : ""))
                        return !1;
                    if (n && n(s))
                        return !1
                } while (s = _g(s, r));
            return !0
        }
        walk(e) {
            return _g(this, null, e)
        }
    }
    const Og = (e,t,n=0)=>{
        const o = e.toLowerCase();
        if (-1 !== o.indexOf("[if ", n) && ((e,t)=>/^\s*\[if [\w\W]+\]>.*<!\[endif\](--!?)?>/.test(e.substr(t)))(o, n)) {
            const e = o.indexOf("[endif]", n);
            return o.indexOf(">", e)
        }
        if (t) {
            const e = o.indexOf(">", n);
            return -1 !== e ? e : o.length
        }
        {
            const t = /--!?>/g;
            t.lastIndex = n;
            const r = t.exec(e);
            return r ? r.index + r[0].length : o.length
        }
    }
      , Tg = (e,t,n)=>{
        const o = /<([!?\/])?([A-Za-z0-9\-_:.]+)/g
          , r = /(?:\s(?:[^'">]+(?:"[^"]*"|'[^']*'))*[^"'>]*(?:"[^">]*|'[^'>]*)?|\s*|\/)>/g
          , s = e.getVoidElements();
        let a = 1
          , i = n;
        for (; 0 !== a; )
            for (o.lastIndex = i; ; ) {
                const e = o.exec(t);
                if (null === e)
                    return i;
                if ("!" === e[1]) {
                    i = He(e[2], "--") ? Og(t, !1, e.index + "!--".length) : Og(t, !0, e.index + 1);
                    break
                }
                {
                    r.lastIndex = o.lastIndex;
                    const n = r.exec(t);
                    if (h(n) || n.index !== o.lastIndex)
                        continue;
                    "/" === e[1] ? a -= 1 : ke(s, e[2]) || (a += 1),
                    i = o.lastIndex + n[0].length;
                    break
                }
            }
        return i
    }
      , Bg = (e,t)=>{
        const n = /<(\w+) [^>]*data-mce-bogus="all"[^>]*>/g
          , o = e.schema;
        let r = ((e,t)=>{
            const n = new RegExp(["\\s?(" + e.join("|") + ')="[^"]+"'].join("|"),"gi");
            return t.replace(n, "")
        }
        )(e.getTempAttrs(), t);
        const s = o.getVoidElements();
        let a;
        for (; a = n.exec(r); ) {
            const e = n.lastIndex
              , t = a[0].length;
            let i;
            i = s[a[1]] ? e : Tg(o, r, e),
            r = r.substring(0, e - t) + r.substring(i),
            n.lastIndex = e - t
        }
        return Pr(r)
    }
      , Dg = Bg
      , Pg = e=>{
        const t = Mo(e, "[data-mce-bogus]");
        q(t, (e=>{
            "all" === Jt(e, "data-mce-bogus") ? yo(e) : Cr(e) ? (mo(e, hn(cr)),
            yo(e)) : Co(e)
        }
        ))
    }
      , Lg = e=>{
        const t = Mo(e, "input");
        q(t, (e=>{
            tn(e, "name")
        }
        ))
    }
      , Mg = (e,t,n)=>{
        let o;
        return o = "raw" === t.format ? Dt.trim(Dg(e.serializer, n.innerHTML)) : "text" === t.format ? ((e,t)=>{
            const n = e.getDoc()
              , o = Hn(bn(e.getBody()))
              , r = pn("div", n);
            Xt(r, "data-mce-bogus", "all"),
            so(r, {
                position: "fixed",
                left: "-9999999px",
                top: "0"
            }),
            ko(r, t.innerHTML),
            Pg(r),
            Lg(r);
            const s = (e=>Un(e) ? e : bn(Sn(e).dom.body))(o);
            po(s, r);
            const a = Pr(r.dom.innerText);
            return yo(r),
            a
        }
        )(e, n) : "tree" === t.format ? e.serializer.serialize(n, t) : ((e,t)=>{
            const n = El(e)
              , o = new RegExp(`^(<${n}[^>]*>(&nbsp;|&#160;|\\s|\xa0|<br \\/>|)<\\/${n}>[\r\n]*|<br \\/>[\r\n]*)$`);
            return t.replace(o, "")
        }
        )(e, e.serializer.serialize(n, t)),
        "text" !== t.format && !_r(bn(n)) && m(o) ? Dt.trim(o) : o
    }
      , Ig = Dt.makeMap
      , Fg = e=>{
        const t = []
          , n = (e = e || {}).indent
          , o = Ig(e.indent_before || "")
          , r = Ig(e.indent_after || "")
          , s = Gs.getEncodeFunc(e.entity_encoding || "raw", e.entities)
          , a = "xhtml" !== e.element_format;
        return {
            start: (e,i,l)=>{
                if (n && o[e] && t.length > 0) {
                    const e = t[t.length - 1];
                    e.length > 0 && "\n" !== e && t.push("\n")
                }
                if (t.push("<", e),
                i)
                    for (let e = 0, n = i.length; e < n; e++) {
                        const n = i[e];
                        t.push(" ", n.name, '="', s(n.value, !0), '"')
                    }
                if (t[t.length] = !l || a ? ">" : " />",
                l && n && r[e] && t.length > 0) {
                    const e = t[t.length - 1];
                    e.length > 0 && "\n" !== e && t.push("\n")
                }
            }
            ,
            end: e=>{
                let o;
                t.push("</", e, ">"),
                n && r[e] && t.length > 0 && (o = t[t.length - 1],
                o.length > 0 && "\n" !== o && t.push("\n"))
            }
            ,
            text: (e,n)=>{
                e.length > 0 && (t[t.length] = n ? e : s(e))
            }
            ,
            cdata: e=>{
                t.push("<![CDATA[", e, "]]>")
            }
            ,
            comment: e=>{
                t.push("\x3c!--", e, "--\x3e")
            }
            ,
            pi: (e,o)=>{
                o ? t.push("<?", e, " ", s(o), "?>") : t.push("<?", e, "?>"),
                n && t.push("\n")
            }
            ,
            doctype: e=>{
                t.push("<!DOCTYPE", e, ">", n ? "\n" : "")
            }
            ,
            reset: ()=>{
                t.length = 0
            }
            ,
            getContent: ()=>t.join("").replace(/\n$/, "")
        }
    }
      , Ug = (e={},t=ia())=>{
        const n = Fg(e);
        return e.validate = !("validate"in e) || e.validate,
        {
            serialize: o=>{
                const r = e.validate
                  , s = {
                    3: e=>{
                        var t;
                        n.text(null !== (t = e.value) && void 0 !== t ? t : "", e.raw)
                    }
                    ,
                    8: e=>{
                        var t;
                        n.comment(null !== (t = e.value) && void 0 !== t ? t : "")
                    }
                    ,
                    7: e=>{
                        n.pi(e.name, e.value)
                    }
                    ,
                    10: e=>{
                        var t;
                        n.doctype(null !== (t = e.value) && void 0 !== t ? t : "")
                    }
                    ,
                    4: e=>{
                        var t;
                        n.cdata(null !== (t = e.value) && void 0 !== t ? t : "")
                    }
                    ,
                    11: e=>{
                        let t = e;
                        if (t = t.firstChild)
                            do {
                                a(t)
                            } while (t = t.next)
                    }
                };
                n.reset();
                const a = e=>{
                    var o;
                    const i = s[e.type];
                    if (i)
                        i(e);
                    else {
                        const s = e.name
                          , i = s in t.getVoidElements();
                        let l = e.attributes;
                        if (r && l && l.length > 1) {
                            const n = [];
                            n.map = {};
                            const o = t.getElementRule(e.name);
                            if (o) {
                                for (let e = 0, t = o.attributesOrder.length; e < t; e++) {
                                    const t = o.attributesOrder[e];
                                    if (t in l.map) {
                                        const e = l.map[t];
                                        n.map[t] = e,
                                        n.push({
                                            name: t,
                                            value: e
                                        })
                                    }
                                }
                                for (let e = 0, t = l.length; e < t; e++) {
                                    const t = l[e].name;
                                    if (!(t in n.map)) {
                                        const e = l.map[t];
                                        n.map[t] = e,
                                        n.push({
                                            name: t,
                                            value: e
                                        })
                                    }
                                }
                                l = n
                            }
                        }
                        if (n.start(s, l, i),
                        !i) {
                            let t = e.firstChild;
                            if (t) {
                                "pre" !== s && "textarea" !== s || 3 !== t.type || "\n" !== (null === (o = t.value) || void 0 === o ? void 0 : o[0]) || n.text("\n", !0);
                                do {
                                    a(t)
                                } while (t = t.next)
                            }
                            n.end(s)
                        }
                    }
                }
                ;
                return 1 !== o.type || e.inner ? 3 === o.type ? s[3](o) : s[11](o) : a(o),
                n.getContent()
            }
        }
    }
      , zg = new Set;
    q(["margin", "margin-left", "margin-right", "margin-top", "margin-bottom", "padding", "padding-left", "padding-right", "padding-top", "padding-bottom", "border", "border-width", "border-style", "border-color", "background", "background-attachment", "background-clip", "background-color", "background-image", "background-origin", "background-position", "background-repeat", "background-size", "float", "position", "left", "right", "top", "bottom", "z-index", "display", "transform", "width", "max-width", "min-width", "height", "max-height", "min-height", "overflow", "overflow-x", "overflow-y", "text-overflow", "vertical-align", "transition", "transition-delay", "transition-duration", "transition-property", "transition-timing-function"], (e=>{
        zg.add(e)
    }
    ));
    const jg = ["font", "text-decoration", "text-emphasis"]
      , Hg = (e,t)=>me(e.parseStyle(e.getAttrib(t, "style")))
      , $g = (e,t,n)=>{
        const o = Hg(e, t)
          , r = Hg(e, n)
          , s = o=>{
            var r, s;
            const a = null !== (r = e.getStyle(t, o)) && void 0 !== r ? r : ""
              , i = null !== (s = e.getStyle(n, o)) && void 0 !== s ? s : "";
            return Ge(a) && Ge(i) && a !== i
        }
        ;
        return $(o, (e=>{
            const t = t=>$(t, (t=>t === e));
            if (!t(r) && t(jg)) {
                const e = G(r, (e=>$(jg, (t=>He(e, t)))));
                return $(e, s)
            }
            return s(e)
        }
        ))
    }
      , Vg = (e,t,n)=>I.from(n.container()).filter(Xo).exists((o=>{
        const r = e ? 0 : -1;
        return t(o.data.charAt(n.offset() + r))
    }
    ))
      , qg = O(Vg, !0, Au)
      , Wg = O(Vg, !1, Au)
      , Kg = e=>{
        const t = e.container();
        return Xo(t) && (0 === t.data.length || Dr(t.data) && Im.isBookmarkNode(t.parentNode))
    }
      , Gg = (e,t)=>n=>Bc(e ? 0 : -1, n).filter(t).isSome()
      , Yg = e=>or(e) && "block" === ao(bn(e), "display")
      , Xg = e=>sr(e) && !(e=>jo(e) && "all" === e.getAttribute("data-mce-bogus"))(e)
      , Qg = Gg(!0, Yg)
      , Jg = Gg(!1, Yg)
      , Zg = Gg(!0, lr)
      , ep = Gg(!1, lr)
      , tp = Gg(!0, Ko)
      , np = Gg(!1, Ko)
      , op = Gg(!0, Xg)
      , rp = Gg(!1, Xg)
      , sp = (e,t)=>((e,t,n)=>kn(t, e) ? An(e, (e=>n(e) || xn(e, t))).slice(0, -1) : [])(e, t, L)
      , ap = (e,t)=>[e].concat(sp(e, t))
      , ip = (e,t,n)=>iu(e, t, n, Kg)
      , lp = (e,t)=>J(ap(bn(t.container()), e), vr)
      , dp = (e,t,n)=>ip(e, t.dom, n).forall((e=>lp(t, n).fold((()=>!Tc(e, n, t.dom)), (o=>!Tc(e, n, t.dom) && kn(o, bn(e.container()))))))
      , cp = (e,t,n)=>lp(t, n).fold((()=>ip(e, t.dom, n).forall((e=>!Tc(e, n, t.dom)))), (t=>ip(e, t.dom, n).isNone()))
      , up = O(cp, !1)
      , mp = O(cp, !0)
      , fp = O(dp, !1)
      , gp = O(dp, !0)
      , pp = e=>jc(e).exists(Cr)
      , hp = (e,t,n)=>{
        const o = G(ap(bn(n.container()), t), vr)
          , r = le(o).getOr(t);
        return su(e, r.dom, n).filter(pp)
    }
      , bp = (e,t)=>jc(t).exists(Cr) || hp(!0, e, t).isSome()
      , vp = (e,t)=>(e=>I.from(e.getNode(!0)).map(bn))(t).exists(Cr) || hp(!1, e, t).isSome()
      , yp = O(hp, !1)
      , Cp = O(hp, !0)
      , wp = e=>Bi.isTextPosition(e) && !e.isAtStart() && !e.isAtEnd()
      , xp = (e,t)=>{
        const n = G(ap(bn(t.container()), e), vr);
        return le(n).getOr(e)
    }
      , kp = (e,t)=>wp(t) ? Wg(t) : Wg(t) || cu(xp(e, t).dom, t).exists(Wg)
      , Ep = (e,t)=>wp(t) ? qg(t) : qg(t) || du(xp(e, t).dom, t).exists(qg)
      , Sp = e=>jc(e).bind((e=>Xn(e, Vt))).exists((e=>(e=>H(["pre", "pre-wrap"], e))(ao(e, "white-space"))))
      , _p = (e,t)=>n=>{
        return o = new Fo(n,e)[t](),
        C(o) && sr(o) && Cc(o);
        var o
    }
      , Np = (e,t)=>!Sp(t) && (up(e, t) || fp(e, t) || vp(e, t) || kp(e, t) || ((e,t)=>{
        const n = cu(e.dom, t).getOr(t)
          , o = _p(e.dom, "prev");
        return t.isAtStart() && (o(t.container()) || o(n.container()))
    }
    )(e, t))
      , Rp = (e,t)=>!Sp(t) && (mp(e, t) || gp(e, t) || bp(e, t) || Ep(e, t) || ((e,t)=>{
        const n = du(e.dom, t).getOr(t)
          , o = _p(e.dom, "next");
        return t.isAtEnd() && (o(t.container()) || o(n.container()))
    }
    )(e, t))
      , Ap = (e,t)=>Np(e, t) || Rp(e, (e=>{
        const t = e.container()
          , n = e.offset();
        return Xo(t) && n < t.data.length ? Bi(t, n + 1) : e
    }
    )(t))
      , Op = (e,t)=>Ru(e.charAt(t))
      , Tp = (e,t)=>Au(e.charAt(t))
      , Bp = (e,t,n)=>{
        const o = t.data
          , r = Bi(t, 0);
        return n || !Op(o, 0) || Ap(e, r) ? !!(n && Tp(o, 0) && Np(e, r)) && (t.data = ur + o.slice(1),
        !0) : (t.data = " " + o.slice(1),
        !0)
    }
      , Dp = (e,t,n)=>{
        const o = t.data
          , r = Bi(t, o.length - 1);
        return n || !Op(o, o.length - 1) || Ap(e, r) ? !!(n && Tp(o, o.length - 1) && Rp(e, r)) && (t.data = o.slice(0, -1) + ur,
        !0) : (t.data = o.slice(0, -1) + " ",
        !0)
    }
      , Pp = (e,t)=>{
        const n = t.container();
        if (!Xo(n))
            return I.none();
        if ((e=>{
            const t = e.container();
            return Xo(t) && je(t.data, ur)
        }
        )(t)) {
            const o = Bp(e, n, !1) || (e=>{
                const t = e.data
                  , n = (e=>{
                    const t = e.split("");
                    return V(t, ((e,n)=>Ru(e) && n > 0 && n < t.length - 1 && Ou(t[n - 1]) && Ou(t[n + 1]) ? " " : e)).join("")
                }
                )(t);
                return n !== t && (e.data = n,
                !0)
            }
            )(n) || Dp(e, n, !1);
            return Mt(o, t)
        }
        if (Ap(e, t)) {
            const o = Bp(e, n, !0) || Dp(e, n, !0);
            return Mt(o, t)
        }
        return I.none()
    }
      , Lp = (e,t,n)=>{
        if (0 === n)
            return;
        const o = bn(e)
          , r = Yn(o, vr).getOr(o)
          , s = e.data.slice(t, t + n)
          , a = t + n >= e.data.length && Rp(r, Bi(e, e.data.length))
          , i = 0 === t && Np(r, Bi(e, 0));
        e.replaceData(t, n, is(s, 4, i, a))
    }
      , Mp = (e,t)=>{
        const n = e.data.slice(t)
          , o = n.length - We(n).length;
        Lp(e, t, o)
    }
      , Ip = (e,t)=>{
        const n = e.data.slice(0, t)
          , o = n.length - Ke(n).length;
        Lp(e, t - o, o)
    }
      , Fp = (e,t,n,o=!0)=>{
        const r = Ke(e.data).length
          , s = o ? e : t
          , a = o ? t : e;
        return o ? s.appendData(a.data) : s.insertData(0, a.data),
        yo(bn(a)),
        n && Mp(s, r),
        s
    }
      , Up = (e,t)=>((e,t)=>{
        const n = e.container()
          , o = e.offset();
        return !Bi.isTextPosition(e) && n === t.parentNode && o > Bi.before(t).offset()
    }
    )(t, e) ? Bi(t.container(), t.offset() - 1) : t
      , zp = e=>{
        return ts(e.previousSibling) ? I.some((t = e.previousSibling,
        Xo(t) ? Bi(t, t.data.length) : Bi.after(t))) : e.previousSibling ? mu(e.previousSibling) : I.none();
        var t
    }
      , jp = e=>{
        return ts(e.nextSibling) ? I.some((t = e.nextSibling,
        Xo(t) ? Bi(t, 0) : Bi.before(t))) : e.nextSibling ? uu(e.nextSibling) : I.none();
        var t
    }
      , Hp = (e,t,n)=>((e,t,n)=>e ? ((e,t)=>jp(t).orThunk((()=>zp(t))).orThunk((()=>((e,t)=>du(e, Bi.after(t)).orThunk((()=>cu(e, Bi.before(t)))))(e, t))))(t, n) : ((e,t)=>zp(t).orThunk((()=>jp(t))).orThunk((()=>((e,t)=>I.from(t.previousSibling ? t.previousSibling : t.parentNode).bind((t=>cu(e, Bi.before(t)))).orThunk((()=>du(e, Bi.after(t)))))(e, t))))(t, n))(e, t, n).map(O(Up, n))
      , $p = (e,t,n)=>{
        n.fold((()=>{
            e.focus()
        }
        ), (n=>{
            e.selection.setRng(n.toRange(), t)
        }
        ))
    }
      , Vp = (e,t)=>t && ke(e.schema.getBlockElements(), jt(t))
      , qp = e=>{
        if (ms(e)) {
            const t = gn('<br data-mce-bogus="1">');
            return vo(e),
            po(e, t),
            I.some(Bi.before(t.dom))
        }
        return I.none()
    }
      , Wp = (e,t,n,o=!0)=>{
        const r = Hp(t, e.getBody(), n.dom)
          , s = Yn(n, O(Vp, e), (a = e.getBody(),
        e=>e.dom === a));
        var a;
        const i = ((e,t,n)=>{
            const o = On(e).filter(qt)
              , r = Tn(e).filter(qt);
            return yo(e),
            (s = o,
            a = r,
            i = t,
            l = (e,t,o)=>{
                const r = e.dom
                  , s = t.dom
                  , a = r.data.length;
                return Fp(r, s, n),
                o.container() === s ? Bi(r, a) : o
            }
            ,
            s.isSome() && a.isSome() && i.isSome() ? I.some(l(s.getOrDie(), a.getOrDie(), i.getOrDie())) : I.none()).orThunk((()=>(n && (o.each((e=>Ip(e.dom, e.dom.length))),
            r.each((e=>Mp(e.dom, 0)))),
            t)));
            var s, a, i, l
        }
        )(n, r, ((e,t)=>ke(e.schema.getTextInlineElements(), jt(t)))(e, n));
        e.dom.isEmpty(e.getBody()) ? (e.setContent(""),
        e.selection.setCursorLocation()) : s.bind(qp).fold((()=>{
            o && $p(e, t, i)
        }
        ), (n=>{
            o && $p(e, t, I.some(n))
        }
        ))
    }
      , Kp = /[\u0591-\u07FF\uFB1D-\uFDFF\uFE70-\uFEFC]/
      , Gp = (e,t)=>Cn(bn(t), Xl(e)) && !Es(e.schema, t) && e.dom.isEditable(t)
      , Yp = (e,t,n)=>{
        const o = ((e,t,n)=>G(Na.DOM.getParents(n.container(), "*", t), e))(e, t, n);
        return I.from(o[o.length - 1])
    }
      , Xp = (e,t)=>{
        const n = t.container()
          , o = t.offset();
        return e ? Fr(n) ? Xo(n.nextSibling) ? Bi(n.nextSibling, 0) : Bi.after(n) : jr(t) ? Bi(n, o + 1) : t : Fr(n) ? Xo(n.previousSibling) ? Bi(n.previousSibling, n.previousSibling.data.length) : Bi.before(n) : Hr(t) ? Bi(n, o - 1) : t
    }
      , Qp = O(Xp, !0)
      , Jp = O(Xp, !1)
      , Zp = (e,t)=>{
        const n = e=>e.stopImmediatePropagation();
        e.on("beforeinput input", n, !0),
        e.getDoc().execCommand(t),
        e.off("beforeinput input", n)
    }
      , eh = e=>Zp(e, "Delete")
      , th = e=>wr(e) || kr(e)
      , nh = (e,t)=>kn(e, t) ? Xn(t, th, (e=>t=>Pt(Nn(t), e, xn))(e)) : I.none()
      , oh = (e,t=!0)=>{
        e.dom.isEmpty(e.getBody()) && e.setContent("", {
            no_selection: !t
        })
    }
      , rh = e=>{
        var t;
        return (8 === Ht(t = e) || "#comment" === jt(t) ? On(e) : In(e)).bind(rh).orThunk((()=>I.some(e)))
    }
      , sh = (e,t,n,o=!0)=>{
        var r;
        t.deleteContents();
        const s = rh(n).getOr(n)
          , a = bn(null !== (r = e.dom.getParent(s.dom, e.dom.isBlock)) && void 0 !== r ? r : n.dom);
        if (a.dom === e.getBody() ? oh(e, o) : ms(a) && (Or(a),
        o && e.selection.setCursorLocation(a.dom, 0)),
        !xn(n, a)) {
            const e = Pt(Nn(a), n) ? [] : Nn(i = a).map(Pn).map((e=>G(e, (e=>!xn(i, e))))).getOr([]);
            q(e.concat(Pn(n)), (e=>{
                xn(e, a) || kn(e, a) || !ms(e) || yo(e)
            }
            ))
        }
        var i
    }
      , ah = e=>Mo(e, "td,th")
      , ih = (e,t)=>({
        start: e,
        end: t
    })
      , lh = ol([{
        singleCellTable: ["rng", "cell"]
    }, {
        fullTable: ["table"]
    }, {
        partialTable: ["cells", "outsideDetails"]
    }, {
        multiTable: ["startTableCells", "endTableCells", "betweenRng"]
    }])
      , dh = (e,t)=>Zn(bn(e), "td,th", t)
      , ch = e=>!xn(e.start, e.end)
      , uh = (e,t)=>ju(e.start, t).bind((n=>ju(e.end, t).bind((e=>Mt(xn(n, e), n)))))
      , mh = e=>t=>uh(t, e).map((e=>((e,t,n)=>({
        rng: e,
        table: t,
        cells: n
    }))(t, e, ah(e))))
      , fh = (e,t,n,o)=>{
        if (n.collapsed || !e.forall(ch))
            return I.none();
        if (t.isSameTable) {
            const t = e.bind(mh(o));
            return I.some({
                start: t,
                end: t
            })
        }
        {
            const e = dh(n.startContainer, o)
              , t = dh(n.endContainer, o)
              , r = e.bind((e=>t=>ju(t, e).bind((e=>de(ah(e)).map((e=>ih(t, e))))))(o)).bind(mh(o))
              , s = t.bind((e=>t=>ju(t, e).bind((e=>le(ah(e)).map((e=>ih(e, t))))))(o)).bind(mh(o));
            return I.some({
                start: r,
                end: s
            })
        }
    }
      , gh = (e,t)=>Z(e, (e=>xn(e, t)))
      , ph = e=>Lt(gh(e.cells, e.rng.start), gh(e.cells, e.rng.end), ((t,n)=>e.cells.slice(t, n + 1)))
      , hh = (e,t)=>{
        const {startTable: n, endTable: o} = t
          , r = e.cloneRange();
        return n.each((e=>r.setStartAfter(e.dom))),
        o.each((e=>r.setEndBefore(e.dom))),
        r
    }
      , bh = (e,t)=>{
        const n = (e=>t=>xn(e, t))(e)
          , o = ((e,t)=>{
            const n = dh(e.startContainer, t)
              , o = dh(e.endContainer, t);
            return Lt(n, o, ih)
        }
        )(t, n)
          , r = ((e,t)=>{
            const n = e=>ju(bn(e), t)
              , o = n(e.startContainer)
              , r = n(e.endContainer)
              , s = o.isSome()
              , a = r.isSome()
              , i = Lt(o, r, xn).getOr(!1);
            return {
                startTable: o,
                endTable: r,
                isStartInTable: s,
                isEndInTable: a,
                isSameTable: i,
                isMultiTable: !i && s && a
            }
        }
        )(t, n);
        return ((e,t,n)=>e.exists((e=>((e,t)=>!ch(e) && uh(e, t).exists((e=>{
            const t = e.dom.rows;
            return 1 === t.length && 1 === t[0].cells.length
        }
        )))(e, n) && Vu(e.start, t))))(o, t, n) ? o.map((e=>lh.singleCellTable(t, e.start))) : r.isMultiTable ? ((e,t,n,o)=>fh(e, t, n, o).bind((({start: e, end: o})=>{
            const r = e.bind(ph).getOr([])
              , s = o.bind(ph).getOr([]);
            if (r.length > 0 && s.length > 0) {
                const e = hh(n, t);
                return I.some(lh.multiTable(r, s, e))
            }
            return I.none()
        }
        )))(o, r, t, n) : ((e,t,n,o)=>fh(e, t, n, o).bind((({start: e, end: t})=>e.or(t))).bind((e=>{
            const {isSameTable: o} = t
              , r = ph(e).getOr([]);
            if (o && e.cells.length === r.length)
                return I.some(lh.fullTable(e.table));
            if (r.length > 0) {
                if (o)
                    return I.some(lh.partialTable(r, I.none()));
                {
                    const e = hh(n, t);
                    return I.some(lh.partialTable(r, I.some({
                        ...t,
                        rng: e
                    })))
                }
            }
            return I.none()
        }
        )))(o, r, t, n)
    }
      , vh = e=>q(e, (e=>{
        tn(e, "contenteditable"),
        Or(e)
    }
    ))
      , yh = (e,t,n,o)=>{
        const r = n.cloneRange();
        o ? (r.setStart(n.startContainer, n.startOffset),
        r.setEndAfter(t.dom.lastChild)) : (r.setStartBefore(t.dom.firstChild),
        r.setEnd(n.endContainer, n.endOffset)),
        kh(e, r, t, !1).each((e=>e()))
    }
      , Ch = e=>{
        const t = zu(e)
          , n = bn(e.selection.getNode());
        ar(n.dom) && ms(n) ? e.selection.setCursorLocation(n.dom, 0) : e.selection.collapse(!0),
        t.length > 1 && $(t, (e=>xn(e, n))) && Xt(n, "data-mce-selected", "1")
    }
      , wh = (e,t,n)=>I.some((()=>{
        const o = e.selection.getRng()
          , r = n.bind((({rng: n, isStartInTable: r})=>{
            const s = ((e,t)=>I.from(e.dom.getParent(t, e.dom.isBlock)).map(bn))(e, r ? n.endContainer : n.startContainer);
            n.deleteContents(),
            ((e,t,n)=>{
                n.each((n=>{
                    t ? yo(n) : (Or(n),
                    e.selection.setCursorLocation(n.dom, 0))
                }
                ))
            }
            )(e, r, s.filter(ms));
            const a = r ? t[0] : t[t.length - 1];
            return yh(e, a, o, r),
            ms(a) ? I.none() : I.some(r ? t.slice(1) : t.slice(0, -1))
        }
        )).getOr(t);
        vh(r),
        Ch(e)
    }
    ))
      , xh = (e,t,n,o)=>I.some((()=>{
        const r = e.selection.getRng()
          , s = t[0]
          , a = n[n.length - 1];
        yh(e, s, r, !0),
        yh(e, a, r, !1);
        const i = ms(s) ? t : t.slice(1)
          , l = ms(a) ? n : n.slice(0, -1);
        vh(i.concat(l)),
        o.deleteContents(),
        Ch(e)
    }
    ))
      , kh = (e,t,n,o=!0)=>I.some((()=>{
        sh(e, t, n, o)
    }
    ))
      , Eh = (e,t)=>I.some((()=>Wp(e, !1, t)))
      , Sh = (e,t)=>J(ap(t, e), Sr)
      , _h = (e,t)=>J(ap(t, e), Gt("caption"))
      , Nh = (e,t)=>I.some((()=>{
        Or(t),
        e.selection.setCursorLocation(t.dom, 0)
    }
    ))
      , Rh = (e,t)=>e ? tp(t) : np(t)
      , Ah = (e,t,n)=>{
        const o = bn(e.getBody());
        return _h(o, n).fold((()=>((e,t,n,o)=>{
            const r = Bi.fromRangeStart(e.selection.getRng());
            return Sh(n, o).bind((o=>ms(o) ? Nh(e, o) : ((e,t,n,o,r)=>au(n, e.getBody(), r).bind((e=>Sh(t, bn(e.getNode())).bind((e=>xn(e, o) ? I.none() : I.some(E))))))(e, n, t, o, r)))
        }
        )(e, t, o, n).orThunk((()=>Mt(((e,t)=>{
            const n = Bi.fromRangeStart(e.selection.getRng());
            return Rh(t, n) || su(t, e.getBody(), n).exists((e=>Rh(t, e)))
        }
        )(e, t), E)))), (n=>((e,t,n,o)=>{
            const r = Bi.fromRangeStart(e.selection.getRng());
            return ms(o) ? Nh(e, o) : ((e,t,n,o,r)=>au(n, e.getBody(), r).fold((()=>I.some(E)), (s=>((e,t,n,o)=>uu(e.dom).bind((r=>mu(e.dom).map((e=>t ? n.isEqual(r) && o.isEqual(e) : n.isEqual(e) && o.isEqual(r))))).getOr(!0))(o, n, r, s) ? ((e,t)=>Nh(e, t))(e, o) : ((e,t,n)=>_h(e, bn(n.getNode())).fold((()=>I.some(E)), (e=>Mt(!xn(e, t), E))))(t, o, s))))(e, n, t, o, r)
        }
        )(e, t, o, n)))
    }
      , Oh = (e,t)=>{
        const n = bn(e.selection.getStart(!0))
          , o = zu(e);
        return e.selection.isCollapsed() && 0 === o.length ? Ah(e, t, n) : ((e,t,n)=>{
            const o = bn(e.getBody())
              , r = e.selection.getRng();
            return 0 !== n.length ? wh(e, n, I.none()) : ((e,t,n,o)=>_h(t, o).fold((()=>((e,t,n)=>bh(t, n).bind((t=>t.fold(O(kh, e), O(Eh, e), O(wh, e), O(xh, e)))))(e, t, n)), (t=>((e,t)=>Nh(e, t))(e, t))))(e, o, r, t)
        }
        )(e, n, o)
    }
      , Th = (e,t)=>{
        let n = t;
        for (; n && n !== e; ) {
            if (rr(n) || sr(n))
                return n;
            n = n.parentNode
        }
        return null
    }
      , Bh = ["data-ephox-", "data-mce-", "data-alloy-", "data-snooker-", "_"]
      , Dh = Dt.each
      , Ph = e=>{
        const t = e.dom
          , n = new Set(e.serializer.getTempAttrs())
          , o = e=>$(Bh, (t=>He(e, t))) || n.has(e);
        return {
            compare: (e,n)=>{
                if (e.nodeName !== n.nodeName || e.nodeType !== n.nodeType)
                    return !1;
                const r = e=>{
                    const n = {};
                    return Dh(t.getAttribs(e), (r=>{
                        const s = r.nodeName.toLowerCase();
                        "style" === s || o(s) || (n[s] = t.getAttrib(e, s))
                    }
                    )),
                    n
                }
                  , s = (e,t)=>{
                    for (const n in e)
                        if (ke(e, n)) {
                            const o = t[n];
                            if (v(o))
                                return !1;
                            if (e[n] !== o)
                                return !1;
                            delete t[n]
                        }
                    for (const e in t)
                        if (ke(t, e))
                            return !1;
                    return !0
                }
                ;
                if (jo(e) && jo(n)) {
                    if (!s(r(e), r(n)))
                        return !1;
                    if (!s(t.parseStyle(t.getAttrib(e, "style")), t.parseStyle(t.getAttrib(n, "style"))))
                        return !1
                }
                return !Nu(e) && !Nu(n)
            }
            ,
            isAttributeInternal: o
        }
    }
      , Lh = (e,t,n,o)=>{
        const r = n.name;
        for (let t = 0, s = e.length; t < s; t++) {
            const s = e[t];
            if (s.name === r) {
                const e = o.nodes[r];
                e ? e.nodes.push(n) : o.nodes[r] = {
                    filter: s,
                    nodes: [n]
                }
            }
        }
        if (n.attributes)
            for (let e = 0, r = t.length; e < r; e++) {
                const r = t[e]
                  , s = r.name;
                if (s in n.attributes.map) {
                    const e = o.attributes[s];
                    e ? e.nodes.push(n) : o.attributes[s] = {
                        filter: r,
                        nodes: [n]
                    }
                }
            }
    }
      , Mh = (e,t)=>{
        const n = (e,n)=>{
            ge(e, (e=>{
                const o = ce(e.nodes);
                q(e.filter.callbacks, (r=>{
                    for (let t = o.length - 1; t >= 0; t--) {
                        const r = o[t];
                        (n ? void 0 !== r.attr(e.filter.name) : r.name === e.filter.name) && !y(r.parent) || o.splice(t, 1)
                    }
                    o.length > 0 && r(o, e.filter.name, t)
                }
                ))
            }
            ))
        }
        ;
        n(e.nodes, !1),
        n(e.attributes, !0)
    }
      , Ih = (e,t,n,o={})=>{
        const r = ((e,t,n)=>{
            const o = {
                nodes: {},
                attributes: {}
            };
            return n.firstChild && ((n,r)=>{
                let s = n;
                for (; s = s.walk(); )
                    Lh(e, t, s, o)
            }
            )(n),
            o
        }
        )(e, t, n);
        Mh(r, o)
    }
      , Fh = (e,t,n)=>{
        if (e.insert && t(n)) {
            const e = new Ag("br",1);
            e.attr("data-mce-bogus", "1"),
            n.empty().append(e)
        } else
            n.empty().append(new Ag("#text",3)).value = ur
    }
      , Uh = (e,t)=>{
        const n = null == e ? void 0 : e.firstChild;
        return C(n) && n === e.lastChild && n.name === t
    }
      , zh = (e,t,n,o)=>o.isEmpty(t, n, (t=>((e,t)=>{
        const n = e.getElementRule(t.name);
        return !0 === (null == n ? void 0 : n.paddEmpty)
    }
    )(e, t)))
      , jh = e=>{
        let t;
        for (let n = e; n; n = n.parent) {
            const e = n.attr("contenteditable");
            if ("false" === e)
                break;
            "true" === e && (t = n)
        }
        return I.from(t)
    }
      , Hh = (e,t,n=e.parent)=>{
        if (t.getSpecialElements()[e.name])
            e.empty().remove();
        else {
            const o = e.children();
            for (const e of o)
                n && !t.isValidChild(n.name, e.name) && Hh(e, t, n);
            e.unwrap()
        }
    }
      , $h = (e,t,n,o=E)=>{
        const r = t.getTextBlockElements()
          , s = t.getNonEmptyElements()
          , a = t.getWhitespaceElements()
          , i = Dt.makeMap("tr,td,th,tbody,thead,tfoot,table")
          , l = new Set
          , d = e=>e !== n && !i[e.name];
        for (let n = 0; n < e.length; n++) {
            const i = e[n];
            let c, u, m;
            if (!i.parent || l.has(i))
                continue;
            if (r[i.name] && "li" === i.parent.name) {
                let e = i.next;
                for (; e && r[e.name]; )
                    e.name = "li",
                    l.add(e),
                    i.parent.insert(e, i.parent),
                    e = e.next;
                i.unwrap();
                continue
            }
            const f = [i];
            for (c = i.parent; c && !t.isValidChild(c.name, i.name) && d(c); c = c.parent)
                f.push(c);
            if (c && f.length > 1)
                if (t.isValidChild(c.name, i.name)) {
                    f.reverse(),
                    u = f[0].clone(),
                    o(u);
                    let e = u;
                    for (let n = 0; n < f.length - 1; n++) {
                        t.isValidChild(e.name, f[n].name) && n > 0 ? (m = f[n].clone(),
                        o(m),
                        e.append(m)) : m = e;
                        for (let e = f[n].firstChild; e && e !== f[n + 1]; ) {
                            const t = e.next;
                            m.append(e),
                            e = t
                        }
                        e = m
                    }
                    zh(t, s, a, u) ? c.insert(i, f[0], !0) : (c.insert(u, f[0], !0),
                    c.insert(i, u)),
                    c = f[0],
                    (zh(t, s, a, c) || Uh(c, "br")) && c.empty().remove()
                } else
                    Hh(i, t);
            else if (i.parent) {
                if ("li" === i.name) {
                    let e = i.prev;
                    if (e && ("ul" === e.name || "ol" === e.name)) {
                        e.append(i);
                        continue
                    }
                    if (e = i.next,
                    e && ("ul" === e.name || "ol" === e.name) && e.firstChild) {
                        e.insert(i, e.firstChild, !0);
                        continue
                    }
                    const t = new Ag("ul",1);
                    o(t),
                    i.wrap(t);
                    continue
                }
                if (t.isValidChild(i.parent.name, "div") && t.isValidChild("div", i.name)) {
                    const e = new Ag("div",1);
                    o(e),
                    i.wrap(e)
                } else
                    Hh(i, t)
            }
        }
    }
      , Vh = (e,t,n=t.parent)=>!(!n || !e.children[t.name] || e.isValidChild(n.name, t.name)) || !(!n || "a" !== t.name || !((e,t)=>{
        let n = e;
        for (; n; ) {
            if ("a" === n.name)
                return !0;
            n = n.parent
        }
        return !1
    }
    )(n))
      , qh = e=>e.collapsed ? e : (e=>{
        const t = Bi.fromRangeStart(e)
          , n = Bi.fromRangeEnd(e)
          , o = e.commonAncestorContainer;
        return su(!1, o, n).map((r=>!Tc(t, n, o) && Tc(t, r, o) ? ((e,t,n,o)=>{
            const r = document.createRange();
            return r.setStart(e, t),
            r.setEnd(n, o),
            r
        }
        )(t.container(), t.offset(), r.container(), r.offset()) : e)).getOr(e)
    }
    )(e)
      , Wh = (e,t)=>{
        let n = t.firstChild
          , o = t.lastChild;
        return n && "meta" === n.name && (n = n.next),
        o && "mce_marker" === o.attr("id") && (o = o.prev),
        ((e,t)=>{
            const n = e.getNonEmptyElements();
            return C(t) && (t.isEmpty(n) || ((e,t)=>e.getBlockElements()[t.name] && (e=>C(e.firstChild) && e.firstChild === e.lastChild)(t) && (e=>"br" === e.name || e.value === ur)(t.firstChild))(e, t))
        }
        )(e, o) && (o = null == o ? void 0 : o.prev),
        !(!n || n !== o || "ul" !== n.name && "ol" !== n.name)
    }
      , Kh = e=>{
        return e.length > 0 && (!(n = e[e.length - 1]).firstChild || C(null == (t = n) ? void 0 : t.firstChild) && t.firstChild === t.lastChild && (e=>e.data === ur || nr(e))(t.firstChild)) ? e.slice(0, -1) : e;
        var t, n
    }
      , Gh = (e,t)=>{
        const n = e.getParent(t, e.isBlock);
        return n && "LI" === n.nodeName ? n : null
    }
      , Yh = (e,t)=>{
        const n = Bi.after(e)
          , o = tu(t).prev(n);
        return o ? o.toRange() : null
    }
      , Xh = (e,t,n,o)=>{
        const r = ((e,t,n)=>{
            const o = t.serialize(n);
            return (e=>{
                var t, n;
                const o = e.firstChild
                  , r = e.lastChild;
                return o && "META" === o.nodeName && (null === (t = o.parentNode) || void 0 === t || t.removeChild(o)),
                r && "mce_marker" === r.id && (null === (n = r.parentNode) || void 0 === n || n.removeChild(r)),
                e
            }
            )(e.createFragment(o))
        }
        )(t, e, o)
          , s = Gh(t, n.startContainer)
          , a = Kh((i = r.firstChild,
        G(null !== (l = null == i ? void 0 : i.childNodes) && void 0 !== l ? l : [], (e=>"LI" === e.nodeName))));
        var i, l;
        const d = t.getRoot()
          , c = e=>{
            const o = Bi.fromRangeStart(n)
              , r = tu(t.getRoot())
              , a = 1 === e ? r.prev(o) : r.next(o)
              , i = null == a ? void 0 : a.getNode();
            return !i || Gh(t, i) !== s
        }
        ;
        return s ? c(1) ? ((e,t,n)=>{
            const o = e.parentNode;
            return o && Dt.each(t, (t=>{
                o.insertBefore(t, e)
            }
            )),
            ((e,t)=>{
                const n = Bi.before(e)
                  , o = tu(t).next(n);
                return o ? o.toRange() : null
            }
            )(e, n)
        }
        )(s, a, d) : c(2) ? ((e,t,n,o)=>(o.insertAfter(t.reverse(), e),
        Yh(t[0], n)))(s, a, d, t) : ((e,t,n,o)=>{
            const r = ((e,t)=>{
                const n = t.cloneRange()
                  , o = t.cloneRange();
                return n.setStartBefore(e),
                o.setEndAfter(e),
                [n.cloneContents(), o.cloneContents()]
            }
            )(e, o)
              , s = e.parentNode;
            return s && (s.insertBefore(r[0], e),
            Dt.each(t, (t=>{
                s.insertBefore(t, e)
            }
            )),
            s.insertBefore(r[1], e),
            s.removeChild(e)),
            Yh(t[t.length - 1], n)
        }
        )(s, a, d, n) : null
    }
      , Qh = ["pre"]
      , Jh = ar
      , Zh = (e,t,n)=>{
        var o, r;
        const s = e.selection
          , a = e.dom
          , i = e.parser
          , l = n.merge
          , d = Ug({
            validate: !0
        }, e.schema)
          , c = '<span id="mce_marker" data-mce-type="bookmark">&#xFEFF;</span>';
        -1 === t.indexOf("{$caret}") && (t += "{$caret}"),
        t = t.replace(/\{\$caret\}/, c);
        let u = s.getRng();
        const m = u.startContainer
          , f = e.getBody();
        m === f && s.isCollapsed() && a.isBlock(f.firstChild) && ((e,t)=>C(t) && !e.schema.getVoidElements()[t.nodeName])(e, f.firstChild) && a.isEmpty(f.firstChild) && (u = a.createRng(),
        u.setStart(f.firstChild, 0),
        u.setEnd(f.firstChild, 0),
        s.setRng(u)),
        s.isCollapsed() || (e=>{
            const t = e.dom
              , n = qh(e.selection.getRng());
            e.selection.setRng(n);
            const o = t.getParent(n.startContainer, Jh);
            ((e,t,n)=>!!C(n) && n === e.getParent(t.endContainer, Jh) && Vu(bn(n), t))(t, n, o) ? kh(e, n, bn(o)) : n.startContainer === n.endContainer && n.endOffset - n.startOffset == 1 && Xo(n.startContainer.childNodes[n.startOffset]) ? n.deleteContents() : e.getDoc().execCommand("Delete", !1)
        }
        )(e);
        const g = s.getNode()
          , p = {
            context: g.nodeName.toLowerCase(),
            data: n.data,
            insert: !0
        }
          , h = i.parse(t, p);
        if (!0 === n.paste && Wh(e.schema, h) && ((e,t)=>!!Gh(e, t))(a, g))
            return u = Xh(d, a, s.getRng(), h),
            u && s.setRng(u),
            t;
        !0 === n.paste && ((e,t,n,o)=>{
            var r;
            const s = t.firstChild
              , a = t.lastChild
              , i = s === ("bookmark" === a.attr("data-mce-type") ? a.prev : a)
              , l = H(Qh, s.name);
            if (i && l) {
                const t = "false" !== s.attr("contenteditable")
                  , a = (null === (r = e.getParent(n, e.isBlock)) || void 0 === r ? void 0 : r.nodeName.toLowerCase()) === s.name
                  , i = I.from(Th(o, n)).forall(rr);
                return t && a && i
            }
            return !1
        }
        )(a, h, g, e.getBody()) && (null === (o = h.firstChild) || void 0 === o || o.unwrap()),
        (e=>{
            let t = e;
            for (; t = t.walk(); )
                1 === t.type && t.attr("data-mce-fragment", "1")
        }
        )(h);
        let b = h.lastChild;
        if (b && "mce_marker" === b.attr("id")) {
            const t = b;
            for (b = b.prev; b; b = b.walk(!0))
                if (3 === b.type || !a.isBlock(b.name)) {
                    b.parent && e.schema.isValidChild(b.parent.name, "span") && b.parent.insert(t, b, "br" === b.name);
                    break
                }
        }
        if (e._selectionOverrides.showBlockCaretContainer(g),
        p.invalid) {
            e.selection.setContent(c);
            let n, o = s.getNode();
            const l = e.getBody();
            for (er(o) ? o = n = l : n = o; n && n !== l; )
                o = n,
                n = n.parentNode;
            t = o === l ? l.innerHTML : a.getOuterHTML(o);
            const u = i.parse(t)
              , m = (e=>{
                for (let t = e; t; t = t.walk())
                    if ("mce_marker" === t.attr("id"))
                        return I.some(t);
                return I.none()
            }
            )(u)
              , f = m.bind(jh).getOr(u);
            m.each((e=>e.replace(h)));
            const g = h.children()
              , p = null !== (r = h.parent) && void 0 !== r ? r : u;
            h.unwrap();
            const b = G(g, (t=>Vh(e.schema, t, p)));
            $h(b, e.schema, f),
            Ih(i.getNodeFilters(), i.getAttributeFilters(), u),
            t = d.serialize(u),
            o === l ? a.setHTML(l, t) : a.setOuterHTML(o, t)
        } else
            t = d.serialize(h),
            ((e,t,n)=>{
                var o;
                if ("all" === n.getAttribute("data-mce-bogus"))
                    null === (o = n.parentNode) || void 0 === o || o.insertBefore(e.dom.createFragment(t), n);
                else {
                    const o = n.firstChild
                      , r = n.lastChild;
                    !o || o === r && "BR" === o.nodeName ? e.dom.setHTML(n, t) : e.selection.setContent(t, {
                        no_events: !0
                    })
                }
            }
            )(e, t, g);
        var v;
        return ((e,t)=>{
            const n = e.schema.getTextInlineElements()
              , o = e.dom;
            if (t) {
                const t = e.getBody()
                  , r = Ph(e);
                Dt.each(o.select("*[data-mce-fragment]"), (e=>{
                    if (C(n[e.nodeName.toLowerCase()]) && ((e,t)=>ne(Hg(e, t), (e=>!(e=>zg.has(e))(e))))(o, e))
                        for (let n = e.parentElement; C(n) && n !== t && !$g(o, e, n); n = n.parentElement)
                            if (r.compare(n, e)) {
                                o.remove(e, !0);
                                break
                            }
                }
                ))
            }
        }
        )(e, l),
        ((e,t)=>{
            var n, o, r;
            let s;
            const a = e.dom
              , i = e.selection;
            if (!t)
                return;
            i.scrollIntoView(t);
            const l = Th(e.getBody(), t);
            if (l && "false" === a.getContentEditable(l))
                return a.remove(t),
                void i.select(l);
            let d = a.createRng();
            const c = t.previousSibling;
            if (Xo(c)) {
                d.setStart(c, null !== (o = null === (n = c.nodeValue) || void 0 === n ? void 0 : n.length) && void 0 !== o ? o : 0);
                const e = t.nextSibling;
                Xo(e) && (c.appendData(e.data),
                null === (r = e.parentNode) || void 0 === r || r.removeChild(e))
            } else
                d.setStartBefore(t),
                d.setEndBefore(t);
            const u = a.getParent(t, a.isBlock);
            a.remove(t),
            u && a.isEmpty(u) && (vo(bn(u)),
            d.setStart(u, 0),
            d.setEnd(u, 0),
            Jh(u) || (e=>!!e.getAttribute("data-mce-fragment"))(u) || !(s = (t=>{
                let n = Bi.fromRangeStart(t);
                return n = tu(e.getBody()).next(n),
                null == n ? void 0 : n.toRange()
            }
            )(d)) ? a.add(u, a.create("br", {
                "data-mce-bogus": "1"
            })) : (d = s,
            a.remove(u))),
            i.setRng(d)
        }
        )(e, a.get("mce_marker")),
        v = e.getBody(),
        Dt.each(v.getElementsByTagName("*"), (e=>{
            e.removeAttribute("data-mce-fragment")
        }
        )),
        ((e,t)=>{
            I.from(e.getParent(t, "td,th")).map(bn).each(Tr)
        }
        )(a, s.getStart()),
        ((e,t,n)=>{
            const o = An(bn(n), (e=>xn(e, bn(t))));
            ie(o, o.length - 2).filter(Vt).fold((()=>ys(e, t)), (t=>ys(e, t.dom)))
        }
        )(e.schema, e.getBody(), s.getStart()),
        t
    }
      , eb = e=>e instanceof Ag
      , tb = (e,t,n)=>{
        e.dom.setHTML(e.getBody(), t),
        !0 !== n && (e=>{
            fg(e) && uu(e.getBody()).each((t=>{
                const n = t.getNode()
                  , o = Ko(n) ? uu(n).getOr(t) : t;
                e.selection.setRng(o.toRange())
            }
            ))
        }
        )(e)
    }
      , nb = (e,t)=>((e,t)=>{
        const n = e.dom;
        return n.parentNode ? ((e,t)=>J(e.dom.childNodes, (e=>t(bn(e)))).map(bn))(bn(n.parentNode), (n=>!xn(e, n) && t(n))) : I.none()
    }
    )(e, t).isSome()
      , ob = e=>w(e) ? e : L
      , rb = (e,t,n)=>{
        const o = t(e)
          , r = ob(n);
        return o.orThunk((()=>r(e) ? I.none() : ((e,t,n)=>{
            let o = e.dom;
            const r = ob(n);
            for (; o.parentNode; ) {
                o = o.parentNode;
                const e = bn(o)
                  , n = t(e);
                if (n.isSome())
                    return n;
                if (r(e))
                    break
            }
            return I.none()
        }
        )(e, t, r)))
    }
      , sb = am
      , ab = (e,t,n)=>{
        const o = e.formatter.get(n);
        if (o)
            for (let n = 0; n < o.length; n++) {
                const r = o[n];
                if (fm(r) && !1 === r.inherit && e.dom.is(t, r.selector))
                    return !0
            }
        return !1
    }
      , ib = (e,t,n,o,r)=>{
        const s = e.dom.getRoot();
        if (t === s)
            return !1;
        const a = e.dom.getParent(t, (t=>!!ab(e, t, n) || t.parentNode === s || !!cb(e, t, n, o, !0)));
        return !!cb(e, a, n, o, r)
    }
      , lb = (e,t,n)=>!(!gm(n) || !sb(t, n.inline)) || !(!mm(n) || !sb(t, n.block)) || !!fm(n) && jo(t) && e.is(t, n.selector)
      , db = (e,t,n,o,r,s)=>{
        const a = n[o]
          , i = "attributes" === o;
        if (w(n.onmatch))
            return n.onmatch(t, n, o);
        if (a)
            if (_e(a)) {
                for (let n = 0; n < a.length; n++)
                    if (i ? e.getAttrib(t, a[n]) : lm(e, t, a[n]))
                        return !0
            } else
                for (const o in a)
                    if (ke(a, o)) {
                        const l = i ? e.getAttrib(t, o) : lm(e, t, o)
                          , d = sm(a[o], s)
                          , c = y(l) || Ye(l);
                        if (c && y(d))
                            continue;
                        if (r && c && !n.exact)
                            return !1;
                        if ((!r || n.exact) && !sb(l, im(d, o)))
                            return !1
                    }
        return !0
    }
      , cb = (e,t,n,o,r)=>{
        const s = e.formatter.get(n)
          , a = e.dom;
        if (s && jo(t))
            for (let n = 0; n < s.length; n++) {
                const i = s[n];
                if (lb(e.dom, t, i) && db(a, t, i, "attributes", r, o) && db(a, t, i, "styles", r, o)) {
                    const n = i.classes;
                    if (n)
                        for (let r = 0; r < n.length; r++)
                            if (!e.dom.hasClass(t, sm(n[r], o)))
                                return;
                    return i
                }
            }
    }
      , ub = (e,t,n,o,r)=>{
        if (o)
            return ib(e, o, t, n, r);
        if (o = e.selection.getNode(),
        ib(e, o, t, n, r))
            return !0;
        const s = e.selection.getStart();
        return !(s === o || !ib(e, s, t, n, r))
    }
      , mb = Br
      , fb = e=>(e=>{
        const t = [];
        let n = e;
        for (; n; ) {
            if (Xo(n) && n.data !== mb || n.childNodes.length > 1)
                return [];
            jo(n) && t.push(n),
            n = n.firstChild
        }
        return t
    }
    )(e).length > 0
      , gb = e=>{
        if (e) {
            const t = new Fo(e,e);
            for (let e = t.current(); e; e = t.next())
                if (Xo(e))
                    return e
        }
        return null
    }
      , pb = e=>{
        const t = pn("span");
        return Qt(t, {
            id: fu,
            "data-mce-bogus": "1",
            "data-mce-type": "format-caret"
        }),
        e && po(t, hn(mb)),
        t
    }
      , hb = (e,t,n=!0)=>{
        const o = e.dom
          , r = e.selection;
        if (fb(t))
            Wp(e, !1, bn(t), n);
        else {
            const e = r.getRng()
              , n = o.getParent(t, o.isBlock)
              , s = e.startContainer
              , a = e.startOffset
              , i = e.endContainer
              , l = e.endOffset
              , d = (e=>{
                const t = gb(e);
                return t && t.data.charAt(0) === mb && t.deleteData(0, 1),
                t
            }
            )(t);
            o.remove(t, !0),
            s === d && a > 0 && e.setStart(d, a - 1),
            i === d && l > 0 && e.setEnd(d, l - 1),
            n && o.isEmpty(n) && Or(bn(n)),
            r.setRng(e)
        }
    }
      , bb = (e,t,n=!0)=>{
        const o = e.dom
          , r = e.selection;
        if (t)
            hb(e, t, n);
        else if (!(t = pu(e.getBody(), r.getStart())))
            for (; t = o.get(fu); )
                hb(e, t, !1)
    }
      , vb = (e,t)=>(e.appendChild(t),
    t)
      , yb = (e,t)=>{
        var n;
        const o = Y(e, ((e,t)=>vb(e, t.cloneNode(!1))), t)
          , r = null !== (n = o.ownerDocument) && void 0 !== n ? n : document;
        return vb(o, r.createTextNode(mb))
    }
      , Cb = (e,t,n,o)=>{
        const a = e.dom
          , i = e.selection;
        let l = !1;
        const d = e.formatter.get(t);
        if (!d)
            return;
        const c = i.getRng()
          , u = c.startContainer
          , m = c.startOffset;
        let f = u;
        Xo(u) && (m !== u.data.length && (l = !0),
        f = f.parentNode);
        const g = [];
        let h;
        for (; f; ) {
            if (cb(e, f, t, n, o)) {
                h = f;
                break
            }
            f.nextSibling && (l = !0),
            g.push(f),
            f = f.parentNode
        }
        if (h)
            if (l) {
                const r = i.getBookmark();
                c.collapse(!0);
                let s = Om(a, c, d, !0);
                s = kf(s),
                e.formatter.remove(t, n, s, o),
                i.moveToBookmark(r)
            } else {
                const l = pu(e.getBody(), h)
                  , d = pb(!1).dom;
                ((e,t,n)=>{
                    var o, r;
                    const s = e.dom
                      , a = s.getParent(n, O(tm, e.schema));
                    a && s.isEmpty(a) ? null === (o = n.parentNode) || void 0 === o || o.replaceChild(t, n) : ((e=>{
                        const t = Mo(e, "br")
                          , n = G((e=>{
                            const t = [];
                            let n = e.dom;
                            for (; n; )
                                t.push(bn(n)),
                                n = n.lastChild;
                            return t
                        }
                        )(e).slice(-1), Cr);
                        t.length === n.length && q(n, yo)
                    }
                    )(bn(n)),
                    s.isEmpty(n) ? null === (r = n.parentNode) || void 0 === r || r.replaceChild(t, n) : s.insertAfter(t, n))
                }
                )(e, d, null != l ? l : h);
                const c = ((e,t,n,o,a,i)=>{
                    const l = e.formatter
                      , d = e.dom
                      , c = G(me(l.get()), (e=>e !== o && !je(e, "removeformat")))
                      , u = ((e,t,n)=>X(n, ((n,o)=>{
                        const r = ((e,t)=>um(e, t, (e=>{
                            const t = e=>w(e) || e.length > 1 && "%" === e.charAt(0);
                            return $(["styles", "attributes"], (n=>xe(e, n).exists((e=>{
                                const n = p(e) ? e : we(e);
                                return $(n, t)
                            }
                            ))))
                        }
                        )))(e, o);
                        return e.formatter.matchNode(t, o, {}, r) ? n.concat([o]) : n
                    }
                    ), []))(e, n, c);
                    if (G(u, (t=>!((e,t,n)=>{
                        const o = ["inline", "block", "selector", "attributes", "styles", "classes"]
                          , a = e=>ye(e, ((e,t)=>$(o, (e=>e === t))));
                        return um(e, t, (t=>{
                            const o = a(t);
                            return um(e, n, (e=>{
                                const t = a(e);
                                return ((e,t,n=s)=>r(n).eq(e, t))(o, t)
                            }
                            ))
                        }
                        ))
                    }
                    )(e, t, o))).length > 0) {
                        const e = n.cloneNode(!1);
                        return d.add(t, e),
                        l.remove(o, a, e, i),
                        d.remove(e),
                        I.some(e)
                    }
                    return I.none()
                }
                )(e, d, h, t, n, o)
                  , u = yb(g.concat(c.toArray()), d);
                l && hb(e, l, !1),
                i.setCursorLocation(u, 1),
                a.isEmpty(h) && a.remove(h)
            }
    }
      , wb = e=>{
        const t = pb(!1)
          , n = yb(e, t.dom);
        return {
            caretContainer: t,
            caretPosition: Bi(n, 0)
        }
    }
      , xb = (e,t)=>{
        const {caretContainer: n, caretPosition: o} = wb(t);
        return mo(bn(e), n),
        yo(bn(e)),
        o
    }
      , kb = (e,t)=>{
        const n = e.schema.getTextInlineElements();
        return ke(n, jt(t)) && !gu(t.dom) && !Wo(t.dom)
    }
      , Eb = e=>gu(e.dom) && fb(e.dom)
      , Sb = {}
      , _b = $o(["pre"]);
    Sb.pre || (Sb.pre = []),
    Sb.pre.push((e=>{
        if (!e.selection.getRng().collapsed) {
            const t = e.selection.getSelectedBlocks()
              , n = G(G(t, _b), (e=>t=>{
                const n = t.previousSibling;
                return _b(n) && H(e, n)
            }
            )(t));
            q(n, (e=>{
                ((e,t)=>{
                    const n = bn(t)
                      , o = Sn(n).dom;
                    yo(n),
                    bo(bn(e), [pn("br", o), pn("br", o), ...Pn(n)])
                }
                )(e.previousSibling, e)
            }
            ))
        }
    }
    ));
    const Nb = ["fontWeight", "fontStyle", "color", "fontSize", "fontFamily"]
      , Rb = (e,t)=>{
        const n = e.get(t);
        return p(n) ? J(n, (e=>gm(e) && "span" === e.inline && (e=>f(e.styles) && $(me(e.styles), (e=>H(Nb, e))))(e))) : I.none()
    }
      , Ab = (e,t)=>cu(t, Bi.fromRangeStart(e)).isNone()
      , Ob = (e,t)=>!1 === du(t, Bi.fromRangeEnd(e)).exists((e=>!nr(e.getNode()) || du(t, e).isSome()))
      , Tb = e=>t=>dr(t) && e.isEditable(t)
      , Bb = e=>G(e.getSelectedBlocks(), Tb(e.dom))
      , Db = Dt.each
      , Pb = e=>jo(e) && !Nu(e) && !gu(e) && !Wo(e)
      , Lb = (e,t)=>{
        for (let n = e; n; n = n[t]) {
            if (Xo(n) && Ge(n.data))
                return e;
            if (jo(n) && !Nu(n))
                return n
        }
        return e
    }
      , Mb = (e,t,n)=>{
        const o = Ph(e)
          , r = jo(t) && Qu(t)
          , s = jo(n) && Qu(n);
        if (r && s) {
            const r = Lb(t, "previousSibling")
              , s = Lb(n, "nextSibling");
            if (o.compare(r, s)) {
                for (let e = r.nextSibling; e && e !== s; ) {
                    const t = e;
                    e = e.nextSibling,
                    r.appendChild(t)
                }
                return e.dom.remove(s),
                Dt.each(Dt.grep(s.childNodes), (e=>{
                    r.appendChild(e)
                }
                )),
                r
            }
        }
        return n
    }
      , Ib = (e,t,n,o)=>{
        var r;
        if (o && !1 !== t.merge_siblings) {
            const t = null !== (r = Mb(e, em(o), o)) && void 0 !== r ? r : o;
            Mb(e, t, em(t, !0))
        }
    }
      , Fb = (e,t,n)=>{
        Db(e.childNodes, (e=>{
            Pb(e) && (t(e) && n(e),
            e.hasChildNodes() && Fb(e, t, n))
        }
        ))
    }
      , Ub = (e,t)=>n=>!(!n || !lm(e, n, t))
      , zb = (e,t,n)=>o=>{
        e.setStyle(o, t, n),
        "" === o.getAttribute("style") && o.removeAttribute("style"),
        ((e,t)=>{
            "SPAN" === t.nodeName && 0 === e.getAttribs(t).length && e.remove(t, !0)
        }
        )(e, o)
    }
      , jb = ol([{
        keep: []
    }, {
        rename: ["name"]
    }, {
        removed: []
    }])
      , Hb = /^(src|href|style)$/
      , $b = Dt.each
      , Vb = am
      , qb = (e,t,n)=>e.isChildOf(t, n) && t !== n && !e.isBlock(n)
      , Wb = (e,t,n)=>{
        let o = t[n ? "startContainer" : "endContainer"]
          , r = t[n ? "startOffset" : "endOffset"];
        if (jo(o)) {
            const e = o.childNodes.length - 1;
            !n && r && r--,
            o = o.childNodes[r > e ? e : r]
        }
        return Xo(o) && n && r >= o.data.length && (o = new Fo(o,e.getBody()).next() || o),
        Xo(o) && !n && 0 === r && (o = new Fo(o,e.getBody()).prev() || o),
        o
    }
      , Kb = (e,t)=>{
        const n = t ? "firstChild" : "lastChild"
          , o = e[n];
        return (e=>/^(TR|TH|TD)$/.test(e.nodeName))(e) && o ? "TR" === e.nodeName && o[n] || o : e
    }
      , Gb = (e,t,n,o)=>{
        var r;
        const s = e.create(n, o);
        return null === (r = t.parentNode) || void 0 === r || r.insertBefore(s, t),
        s.appendChild(t),
        s
    }
      , Yb = (e,t,n,o,r)=>{
        const s = bn(t)
          , a = bn(e.create(o, r))
          , i = n ? Dn(s) : Bn(s);
        return bo(a, i),
        n ? (mo(s, a),
        go(a, s)) : (fo(s, a),
        po(a, s)),
        a.dom
    }
      , Xb = (e,t,n)=>{
        const o = t.parentNode;
        let r;
        const s = e.dom
          , a = El(e);
        mm(n) && o === s.getRoot() && (n.list_block && Vb(t, n.list_block) || q(ce(t.childNodes), (t=>{
            nm(e, a, t.nodeName.toLowerCase()) ? r ? r.appendChild(t) : (r = Gb(s, t, a),
            s.setAttribs(r, Sl(e))) : r = null
        }
        ))),
        (e=>fm(e) && gm(e) && Pt(xe(e, "mixed"), !0))(n) && !Vb(n.inline, t) || s.remove(t, !0)
    }
      , Qb = (e,t,n)=>x(e) ? {
        name: t,
        value: null
    } : {
        name: e,
        value: sm(t, n)
    }
      , Jb = (e,t)=>{
        "" === e.getAttrib(t, "style") && (t.removeAttribute("style"),
        t.removeAttribute("data-mce-style"))
    }
      , Zb = (e,t,n,o,r)=>{
        let s = !1;
        $b(n.styles, ((a,i)=>{
            const {name: l, value: d} = Qb(i, a, o)
              , c = im(d, l);
            (n.remove_similar || h(d) || !jo(r) || Vb(lm(e, r, l), c)) && e.setStyle(t, l, ""),
            s = !0
        }
        )),
        s && Jb(e, t)
    }
      , ev = (e,t,n,o,r)=>{
        const s = e.dom
          , a = Ph(e)
          , i = e.schema;
        if (gm(t) && xs(i, t.inline) && Es(i, o) && o.parentElement === e.getBody())
            return Xb(e, o, t),
            jb.removed();
        if (!t.ceFalseOverride && o && "false" === s.getContentEditableParent(o))
            return jb.keep();
        if (o && !lb(s, o, t) && !((e,t)=>t.links && "A" === e.nodeName)(o, t))
            return jb.keep();
        const l = o
          , d = t.preserve_attributes;
        if (gm(t) && "all" === t.remove && p(d)) {
            const e = G(s.getAttribs(l), (e=>H(d, e.name.toLowerCase())));
            if (s.removeAllAttribs(l),
            q(e, (e=>s.setAttrib(l, e.name, e.value))),
            e.length > 0)
                return jb.rename("span")
        }
        if ("all" !== t.remove) {
            Zb(s, l, t, n, r),
            $b(t.attributes, ((e,o)=>{
                const {name: a, value: i} = Qb(o, e, n);
                if (t.remove_similar || h(i) || !jo(r) || Vb(s.getAttrib(r, a), i)) {
                    if ("class" === a) {
                        const e = s.getAttrib(l, a);
                        if (e) {
                            let t = "";
                            if (q(e.split(/\s+/), (e=>{
                                /mce\-\w+/.test(e) && (t += (t ? " " : "") + e)
                            }
                            )),
                            t)
                                return void s.setAttrib(l, a, t)
                        }
                    }
                    if (Hb.test(a) && l.removeAttribute("data-mce-" + a),
                    "style" === a && $o(["li"])(l) && "none" === s.getStyle(l, "list-style-type"))
                        return l.removeAttribute(a),
                        void s.setStyle(l, "list-style-type", "none");
                    "class" === a && l.removeAttribute("className"),
                    l.removeAttribute(a)
                }
            }
            )),
            $b(t.classes, (e=>{
                e = sm(e, n),
                jo(r) && !s.hasClass(r, e) || s.removeClass(l, e)
            }
            ));
            const e = s.getAttribs(l);
            for (let t = 0; t < e.length; t++) {
                const n = e[t].nodeName;
                if (!a.isAttributeInternal(n))
                    return jb.keep()
            }
        }
        return "none" !== t.remove ? (Xb(e, l, t),
        jb.removed()) : jb.keep()
    }
      , tv = (e,t,n,o,r)=>ev(e, t, n, o, r).fold(L, (t=>(e.dom.rename(o, t),
    !0)), M)
      , nv = (e,t,n,o)=>ev(e, t, n, o, o).fold(N(o), (t=>(e.dom.createFragment().appendChild(o),
    e.dom.rename(o, t))), N(null))
      , ov = (e,t,n,o,r)=>{
        const s = e.formatter.get(t)
          , a = s[0]
          , i = e.dom
          , l = e.selection
          , d = o=>{
            const i = ((e,t,n,o,r)=>{
                let s;
                return t.parentNode && q(cm(e.dom, t.parentNode).reverse(), (t=>{
                    if (!s && jo(t) && "_start" !== t.id && "_end" !== t.id) {
                        const a = cb(e, t, n, o, r);
                        a && !1 !== a.split && (s = t)
                    }
                }
                )),
                s
            }
            )(e, o, t, n, r);
            return ((e,t,n,o,r,s,a,i)=>{
                var l, d;
                let c, u;
                const m = e.dom;
                if (n) {
                    const s = n.parentNode;
                    for (let n = o.parentNode; n && n !== s; n = n.parentNode) {
                        let o = m.clone(n, !1);
                        for (let n = 0; n < t.length && (o = nv(e, t[n], i, o),
                        null !== o); n++)
                            ;
                        o && (c && o.appendChild(c),
                        u || (u = o),
                        c = o)
                    }
                    a.mixed && m.isBlock(n) || (o = null !== (l = m.split(n, o)) && void 0 !== l ? l : o),
                    c && u && (null === (d = r.parentNode) || void 0 === d || d.insertBefore(c, r),
                    u.appendChild(r),
                    gm(a) && Ib(e, a, 0, c))
                }
                return o
            }
            )(e, s, i, o, o, 0, a, n)
        }
          , c = t=>$(s, (o=>tv(e, o, n, t, t)))
          , u = t=>{
            const n = ce(t.childNodes)
              , o = c(t) || $(s, (e=>lb(i, t, e)))
              , r = t.parentNode;
            if (!o && C(r) && pm(a) && c(r),
            a.deep && n.length)
                for (let e = 0; e < n.length; e++)
                    u(n[e]);
            q(["underline", "line-through", "overline"], (n=>{
                jo(t) && e.dom.getStyle(t, "text-decoration") === n && t.parentNode && dm(i, t.parentNode) === n && tv(e, {
                    deep: !1,
                    exact: !0,
                    inline: "span",
                    styles: {
                        textDecoration: n
                    }
                }, void 0, t)
            }
            ))
        }
          , m = e=>{
            const t = i.get(e ? "_start" : "_end");
            if (t) {
                let n = t[e ? "firstChild" : "lastChild"];
                return (e=>Nu(e) && jo(e) && ("_start" === e.id || "_end" === e.id))(n) && (n = n[e ? "firstChild" : "lastChild"]),
                Xo(n) && 0 === n.data.length && (n = e ? t.previousSibling || t.nextSibling : t.nextSibling || t.previousSibling),
                i.remove(t, !0),
                n
            }
            return null
        }
          , f = t=>{
            let n, o, r = Om(i, t, s, t.collapsed);
            if (a.split) {
                if (r = kf(r),
                n = Wb(e, r, !0),
                o = Wb(e, r),
                n !== o) {
                    if (n = Kb(n, !0),
                    o = Kb(o, !1),
                    qb(i, n, o)) {
                        const e = I.from(n.firstChild).getOr(n);
                        return d(Yb(i, e, !0, "span", {
                            id: "_start",
                            "data-mce-type": "bookmark"
                        })),
                        void m(!0)
                    }
                    if (qb(i, o, n)) {
                        const e = I.from(o.lastChild).getOr(o);
                        return d(Yb(i, e, !1, "span", {
                            id: "_end",
                            "data-mce-type": "bookmark"
                        })),
                        void m(!1)
                    }
                    n = Gb(i, n, "span", {
                        id: "_start",
                        "data-mce-type": "bookmark"
                    }),
                    o = Gb(i, o, "span", {
                        id: "_end",
                        "data-mce-type": "bookmark"
                    });
                    const e = i.createRng();
                    e.setStartAfter(n),
                    e.setEndBefore(o),
                    Tm(i, e, (e=>{
                        q(e, (e=>{
                            Nu(e) || Nu(e.parentNode) || d(e)
                        }
                        ))
                    }
                    )),
                    d(n),
                    d(o),
                    n = m(!0),
                    o = m()
                } else
                    n = o = d(n);
                r.startContainer = n.parentNode ? n.parentNode : n,
                r.startOffset = i.nodeIndex(n),
                r.endContainer = o.parentNode ? o.parentNode : o,
                r.endOffset = i.nodeIndex(o) + 1
            }
            Tm(i, r, (e=>{
                q(e, u)
            }
            ))
        }
        ;
        if (o) {
            if (Yu(o)) {
                const e = i.createRng();
                e.setStartBefore(o),
                e.setEndAfter(o),
                f(e)
            } else
                f(o);
            jm(e, t, o, n)
        } else
            l.isCollapsed() && gm(a) && !zu(e).length ? Cb(e, t, n, r) : (Ju(e, (()=>Ku(e, f)), (o=>gm(a) && ub(e, t, n, o))),
            e.nodeChanged()),
            ((e,t,n)=>{
                "removeformat" === t ? q(Bb(e.selection), (t=>{
                    q(Nb, (n=>e.dom.setStyle(t, n, ""))),
                    Jb(e.dom, t)
                }
                )) : Rb(e.formatter, t).each((t=>{
                    q(Bb(e.selection), (o=>Zb(e.dom, o, t, n, null)))
                }
                ))
            }
            )(e, t, n),
            jm(e, t, o, n)
    }
      , rv = Dt.each
      , sv = Dt.each
      , av = (e,t,n,o)=>{
        if (sv(n.styles, ((n,r)=>{
            e.setStyle(t, r, sm(n, o))
        }
        )),
        n.styles) {
            const n = e.getAttrib(t, "style");
            n && e.setAttrib(t, "data-mce-style", n)
        }
    }
      , iv = (e,t,n,o)=>{
        const r = e.formatter.get(t)
          , s = r[0]
          , a = !o && e.selection.isCollapsed()
          , i = e.dom
          , l = e.selection
          , d = (e,t=s)=>{
            w(t.onformat) && t.onformat(e, t, n, o),
            av(i, e, t, n),
            sv(t.attributes, ((t,o)=>{
                i.setAttrib(e, o, sm(t, n))
            }
            )),
            sv(t.classes, (t=>{
                const o = sm(t, n);
                i.hasClass(e, o) || i.addClass(e, o)
            }
            ))
        }
          , c = (e,t)=>{
            let n = !1;
            return sv(e, (e=>!(!fm(e) || ("false" !== i.getContentEditable(t) || e.ceFalseOverride) && (!C(e.collapsed) || e.collapsed === a) && i.is(t, e.selector) && !gu(t) && (d(t, e),
            n = !0,
            1)))),
            n
        }
          , u = e=>{
            if (m(e)) {
                const t = i.create(e);
                return d(t),
                t
            }
            return null
        }
          , f = (o,a,i)=>{
            const l = [];
            let m = !0;
            const f = s.inline || s.block
              , g = u(f);
            Tm(o, a, (a=>{
                let u;
                const p = a=>{
                    let h = !1
                      , b = m
                      , v = !1;
                    const y = a.parentNode
                      , w = y.nodeName.toLowerCase()
                      , x = o.getContentEditable(a);
                    C(x) && (b = m,
                    m = "true" === x,
                    h = !0,
                    v = rm(e, a));
                    const k = m && !h;
                    if (nr(a) && !((e,t,n,o)=>{
                        if (dd(e) && gm(t) && n.parentNode) {
                            const t = sa(e.schema)
                              , r = nb(bn(n), (e=>gu(e.dom)));
                            return Ee(t, o) && ms(bn(n.parentNode), !1) && !r
                        }
                        return !1
                    }
                    )(e, s, a, w))
                        return u = null,
                        void (mm(s) && o.remove(a));
                    if ((o=>(e=>mm(e) && !0 === e.wrapper)(s) && cb(e, o, t, n))(a))
                        u = null;
                    else {
                        if (((t,n,o)=>{
                            const r = (e=>mm(e) && !0 !== e.wrapper)(s) && tm(e.schema, t) && nm(e, n, f);
                            return o && r
                        }
                        )(a, w, k)) {
                            const e = o.rename(a, f);
                            return d(e),
                            l.push(e),
                            void (u = null)
                        }
                        if (fm(s)) {
                            let e = c(r, a);
                            if (!e && C(y) && pm(s) && (e = c(r, y)),
                            !gm(s) || e)
                                return void (u = null)
                        }
                        C(g) && ((t,n,r,a)=>{
                            const l = t.nodeName.toLowerCase()
                              , d = nm(e, f, l) && nm(e, n, f)
                              , c = !i && Xo(t) && Dr(t.data)
                              , u = gu(t)
                              , m = !gm(s) || !o.isBlock(t);
                            return (r || a) && d && !c && !u && m
                        }
                        )(a, w, k, v) ? (u || (u = o.clone(g, !1),
                        y.insertBefore(u, a),
                        l.push(u)),
                        v && h && (m = b),
                        u.appendChild(a)) : (u = null,
                        q(ce(a.childNodes), p),
                        h && (m = b),
                        u = null)
                    }
                }
                ;
                q(a, p)
            }
            )),
            !0 === s.links && q(l, (e=>{
                const t = e=>{
                    "A" === e.nodeName && d(e, s),
                    q(ce(e.childNodes), t)
                }
                ;
                t(e)
            }
            )),
            q(l, (a=>{
                const i = (e=>{
                    let t = 0;
                    return q(e.childNodes, (e=>{
                        (e=>C(e) && Xo(e) && 0 === e.length)(e) || Nu(e) || t++
                    }
                    )),
                    t
                }
                )(a);
                !(l.length > 1) && o.isBlock(a) || 0 !== i ? (gm(s) || mm(s) && s.wrapper) && (s.exact || 1 !== i || (a = (e=>{
                    const t = J(e.childNodes, Xu).filter((e=>"false" !== o.getContentEditable(e) && lb(o, e, s)));
                    return t.map((t=>{
                        const n = o.clone(t, !1);
                        return d(n),
                        o.replace(n, e, !0),
                        o.remove(t, !0),
                        n
                    }
                    )).getOr(e)
                }
                )(a)),
                ((e,t,n,o)=>{
                    rv(t, (t=>{
                        gm(t) && rv(e.dom.select(t.inline, o), (o=>{
                            Pb(o) && tv(e, t, n, o, t.exact ? o : null)
                        }
                        )),
                        ((e,t,n)=>{
                            if (t.clear_child_styles) {
                                const o = t.links ? "*:not(a)" : "*";
                                Db(e.select(o, n), (n=>{
                                    Pb(n) && Qu(n) && Db(t.styles, ((t,o)=>{
                                        e.setStyle(n, o, "")
                                    }
                                    ))
                                }
                                ))
                            }
                        }
                        )(e.dom, t, o)
                    }
                    ))
                }
                )(e, r, n, a),
                ((e,t,n,o,r)=>{
                    const s = r.parentNode;
                    cb(e, s, n, o) && tv(e, t, o, r) || t.merge_with_parents && s && e.dom.getParent(s, (s=>!!cb(e, s, n, o) && (tv(e, t, o, r),
                    !0)))
                }
                )(e, s, t, n, a),
                ((e,t,n,o)=>{
                    if (t.styles && t.styles.backgroundColor) {
                        const r = Ub(e, "fontSize");
                        Fb(o, (e=>r(e) && Qu(e)), zb(e, "backgroundColor", sm(t.styles.backgroundColor, n)))
                    }
                }
                )(o, s, n, a),
                ((e,t,n,o)=>{
                    const r = t=>{
                        if (jo(t) && jo(t.parentNode) && Qu(t)) {
                            const n = dm(e, t.parentNode);
                            e.getStyle(t, "color") && n ? e.setStyle(t, "text-decoration", n) : e.getStyle(t, "text-decoration") === n && e.setStyle(t, "text-decoration", null)
                        }
                    }
                    ;
                    t.styles && (t.styles.color || t.styles.textDecoration) && (Dt.walk(o, r, "childNodes"),
                    r(o))
                }
                )(o, s, 0, a),
                ((e,t,n,o)=>{
                    if (gm(t) && ("sub" === t.inline || "sup" === t.inline)) {
                        const n = Ub(e, "fontSize");
                        Fb(o, (e=>n(e) && Qu(e)), zb(e, "fontSize", ""));
                        const r = G(e.select("sup" === t.inline ? "sub" : "sup", o), Qu);
                        e.remove(r, !0)
                    }
                }
                )(o, s, 0, a),
                Ib(e, s, 0, a)) : o.remove(a, !0)
            }
            ))
        }
          , g = Yu(o) ? o : l.getNode();
        if ("false" === i.getContentEditable(g) && !rm(e, g))
            return c(r, o = g),
            void zm(e, t, o, n);
        if (s) {
            if (o)
                if (Yu(o)) {
                    if (!c(r, o)) {
                        const e = i.createRng();
                        e.setStartBefore(o),
                        e.setEndAfter(o),
                        f(i, Om(i, e, r), !0)
                    }
                } else
                    f(i, o, !0);
            else
                a && gm(s) && !zu(e).length ? ((e,t,n)=>{
                    let o;
                    const r = e.selection
                      , s = e.formatter.get(t);
                    if (!s)
                        return;
                    const a = r.getRng();
                    let i = a.startOffset;
                    const l = a.startContainer.nodeValue;
                    o = pu(e.getBody(), r.getStart());
                    const d = /[^\s\u00a0\u00ad\u200b\ufeff]/;
                    if (l && i > 0 && i < l.length && d.test(l.charAt(i)) && d.test(l.charAt(i - 1))) {
                        const o = r.getBookmark();
                        a.collapse(!0);
                        let i = Om(e.dom, a, s);
                        i = kf(i),
                        e.formatter.apply(t, n, i),
                        r.moveToBookmark(o)
                    } else {
                        let s = o ? gb(o) : null;
                        o && (null == s ? void 0 : s.data) === mb || (c = e.getDoc(),
                        u = pb(!0).dom,
                        o = c.importNode(u, !0),
                        s = o.firstChild,
                        a.insertNode(o),
                        i = 1),
                        e.formatter.apply(t, n, o),
                        r.setCursorLocation(s, i)
                    }
                    var c, u
                }
                )(e, t, n) : (l.setRng(qh(l.getRng())),
                Ju(e, (()=>{
                    Ku(e, ((e,t)=>{
                        const n = t ? e : Om(i, e, r);
                        f(i, n, !1)
                    }
                    ))
                }
                ), M),
                e.nodeChanged()),
                Rb(e.formatter, t).each((t=>{
                    q((e=>G((e=>{
                        const t = e.getSelectedBlocks()
                          , n = e.getRng();
                        if (e.isCollapsed())
                            return [];
                        if (1 === t.length)
                            return Ab(n, t[0]) && Ob(n, t[0]) ? t : [];
                        {
                            const e = le(t).filter((e=>Ab(n, e))).toArray()
                              , o = de(t).filter((e=>Ob(n, e))).toArray()
                              , r = t.slice(1, -1);
                            return e.concat(r).concat(o)
                        }
                    }
                    )(e), Tb(e.dom)))(e.selection), (e=>av(i, e, t, n)))
                }
                ));
            ((e,t)=>{
                ke(Sb, e) && q(Sb[e], (e=>{
                    e(t)
                }
                ))
            }
            )(t, e)
        }
        zm(e, t, o, n)
    }
      , lv = e=>ke(e, "vars")
      , dv = e=>e.selection.getStart()
      , cv = (e,t,n,o,r)=>Q(t, (t=>{
        const s = e.formatter.matchNode(t, n, null != r ? r : {}, o);
        return !v(s)
    }
    ), (t=>!!ab(e, t, n) || !o && C(e.formatter.matchNode(t, n, r, !0))))
      , uv = (e,t)=>{
        const n = null != t ? t : dv(e);
        return G(cm(e.dom, n), (e=>jo(e) && !Wo(e)))
    }
      , mv = (e,t,n)=>{
        const o = uv(e, t);
        ge(n, ((n,r)=>{
            const s = n=>{
                const s = cv(e, o, r, n.similar, lv(n) ? n.vars : void 0)
                  , a = s.isSome();
                if (n.state.get() !== a) {
                    n.state.set(a);
                    const e = s.getOr(t);
                    lv(n) ? n.callback(a, {
                        node: e,
                        format: r,
                        parents: o
                    }) : q(n.callbacks, (t=>t(a, {
                        node: e,
                        format: r,
                        parents: o
                    })))
                }
            }
            ;
            q([n.withSimilar, n.withoutSimilar], s),
            q(n.withVars, s)
        }
        ))
    }
      , fv = Dt.explode
      , gv = ()=>{
        const e = {};
        return {
            addFilter: (t,n)=>{
                q(fv(t), (t=>{
                    ke(e, t) || (e[t] = {
                        name: t,
                        callbacks: []
                    }),
                    e[t].callbacks.push(n)
                }
                ))
            }
            ,
            getFilters: ()=>we(e),
            removeFilter: (t,n)=>{
                q(fv(t), (t=>{
                    if (ke(e, t))
                        if (C(n)) {
                            const o = e[t]
                              , r = G(o.callbacks, (e=>e !== n));
                            r.length > 0 ? o.callbacks = r : delete e[t]
                        } else
                            delete e[t]
                }
                ))
            }
        }
    }
      , pv = (e,t,n)=>{
        var o;
        const r = la();
        t.convert_fonts_to_spans && ((e,t,n)=>{
            e.addNodeFilter("font", (e=>{
                q(e, (e=>{
                    const o = t.parse(e.attr("style"))
                      , r = e.attr("color")
                      , s = e.attr("face")
                      , a = e.attr("size");
                    r && (o.color = r),
                    s && (o["font-family"] = s),
                    a && Xe(a).each((e=>{
                        o["font-size"] = n[e - 1]
                    }
                    )),
                    e.name = "span",
                    e.attr("style", t.serialize(o)),
                    ((e,t)=>{
                        q(["color", "face", "size"], (t=>{
                            e.attr(t, null)
                        }
                        ))
                    }
                    )(e)
                }
                ))
            }
            ))
        }
        )(e, r, Dt.explode(null !== (o = t.font_size_legacy_values) && void 0 !== o ? o : "")),
        ((e,t,n)=>{
            e.addNodeFilter("strike", (e=>{
                const o = "html4" !== t.type;
                q(e, (e=>{
                    if (o)
                        e.name = "s";
                    else {
                        const t = n.parse(e.attr("style"));
                        t["text-decoration"] = "line-through",
                        e.name = "span",
                        e.attr("style", n.serialize(t))
                    }
                }
                ))
            }
            ))
        }
        )(e, n, r)
    }
      , hv = e=>{
        const [t,...n] = e.split(",")
          , o = n.join(",")
          , r = /data:([^/]+\/[^;]+)(;.+)?/.exec(t);
        if (r) {
            const e = ";base64" === r[2]
              , t = e ? (e=>{
                const t = /([a-z0-9+\/=\s]+)/i.exec(e);
                return t ? t[1] : ""
            }
            )(o) : decodeURIComponent(o);
            return I.some({
                type: r[1],
                data: t,
                base64Encoded: e
            })
        }
        return I.none()
    }
      , bv = (e,t,n=!0)=>{
        let o = t;
        if (n)
            try {
                o = atob(t)
            } catch (e) {
                return I.none()
            }
        const r = new Uint8Array(o.length);
        for (let e = 0; e < r.length; e++)
            r[e] = o.charCodeAt(e);
        return I.some(new Blob([r],{
            type: e
        }))
    }
      , vv = e=>new Promise(((t,n)=>{
        const o = new FileReader;
        o.onloadend = ()=>{
            t(o.result)
        }
        ,
        o.onerror = ()=>{
            var e;
            n(null === (e = o.error) || void 0 === e ? void 0 : e.message)
        }
        ,
        o.readAsDataURL(e)
    }
    ));
    let yv = 0;
    const Cv = (e,t,n)=>hv(e).bind((({data: e, type: o, base64Encoded: r})=>{
        if (t && !r)
            return I.none();
        {
            const t = r ? e : btoa(e);
            return n(t, o)
        }
    }
    ))
      , wv = (e,t,n)=>{
        const o = e.create("blobid" + yv++, t, n);
        return e.add(o),
        o
    }
      , xv = (e,t,n=!1)=>Cv(t, n, ((t,n)=>I.from(e.getByData(t, n)).orThunk((()=>bv(n, t).map((n=>wv(e, n, t)))))));
    function kv(e) {
        return kv = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        ,
        kv(e)
    }
    function Ev(e, t) {
        return Ev = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t,
            e
        }
        ,
        Ev(e, t)
    }
    function Sv() {
        if ("undefined" == typeof Reflect || !Reflect.construct)
            return !1;
        if (Reflect.construct.sham)
            return !1;
        if ("function" == typeof Proxy)
            return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
            ))),
            !0
        } catch (e) {
            return !1
        }
    }
    function _v(e, t, n) {
        return _v = Sv() ? Reflect.construct : function(e, t, n) {
            var o = [null];
            o.push.apply(o, t);
            var r = new (Function.bind.apply(e, o));
            return n && Ev(r, n.prototype),
            r
        }
        ,
        _v.apply(null, arguments)
    }
    function Nv(e) {
        return function(e) {
            if (Array.isArray(e))
                return Rv(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                return Array.from(e)
        }(e) || function(e, t) {
            if (e) {
                if ("string" == typeof e)
                    return Rv(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Rv(e, t) : void 0
            }
        }(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    function Rv(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, o = new Array(t); n < t; n++)
            o[n] = e[n];
        return o
    }
    var Av = Object.hasOwnProperty
      , Ov = Object.setPrototypeOf
      , Tv = Object.isFrozen
      , Bv = Object.getPrototypeOf
      , Dv = Object.getOwnPropertyDescriptor
      , Pv = Object.freeze
      , Lv = Object.seal
      , Mv = Object.create
      , Iv = "undefined" != typeof Reflect && Reflect
      , Fv = Iv.apply
      , Uv = Iv.construct;
    Fv || (Fv = function(e, t, n) {
        return e.apply(t, n)
    }
    ),
    Pv || (Pv = function(e) {
        return e
    }
    ),
    Lv || (Lv = function(e) {
        return e
    }
    ),
    Uv || (Uv = function(e, t) {
        return _v(e, Nv(t))
    }
    );
    var zv, jv = Qv(Array.prototype.forEach), Hv = Qv(Array.prototype.pop), $v = Qv(Array.prototype.push), Vv = Qv(String.prototype.toLowerCase), qv = Qv(String.prototype.match), Wv = Qv(String.prototype.replace), Kv = Qv(String.prototype.indexOf), Gv = Qv(String.prototype.trim), Yv = Qv(RegExp.prototype.test), Xv = (zv = TypeError,
    function() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
        return Uv(zv, t)
    }
    );
    function Qv(e) {
        return function(t) {
            for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
                o[r - 1] = arguments[r];
            return Fv(e, t, o)
        }
    }
    function Jv(e, t) {
        Ov && Ov(e, null);
        for (var n = t.length; n--; ) {
            var o = t[n];
            if ("string" == typeof o) {
                var r = Vv(o);
                r !== o && (Tv(t) || (t[n] = r),
                o = r)
            }
            e[o] = !0
        }
        return e
    }
    function Zv(e) {
        var t, n = Mv(null);
        for (t in e)
            Fv(Av, e, [t]) && (n[t] = e[t]);
        return n
    }
    function ey(e, t) {
        for (; null !== e; ) {
            var n = Dv(e, t);
            if (n) {
                if (n.get)
                    return Qv(n.get);
                if ("function" == typeof n.value)
                    return Qv(n.value)
            }
            e = Bv(e)
        }
        return function(e) {
            return console.warn("fallback value for", e),
            null
        }
    }
    var ty = Pv(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"])
      , ny = Pv(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"])
      , oy = Pv(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"])
      , ry = Pv(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"])
      , sy = Pv(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"])
      , ay = Pv(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"])
      , iy = Pv(["#text"])
      , ly = Pv(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"])
      , dy = Pv(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"])
      , cy = Pv(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"])
      , uy = Pv(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"])
      , my = Lv(/\{\{[\w\W]*|[\w\W]*\}\}/gm)
      , fy = Lv(/<%[\w\W]*|[\w\W]*%>/gm)
      , gy = Lv(/^data-[\-\w.\u00B7-\uFFFF]/)
      , py = Lv(/^aria-[\-\w]+$/)
      , hy = Lv(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i)
      , by = Lv(/^(?:\w+script|data):/i)
      , vy = Lv(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g)
      , yy = Lv(/^html$/i)
      , Cy = function() {
        return "undefined" == typeof window ? null : window
    }
      , wy = function(e, t) {
        if ("object" !== kv(e) || "function" != typeof e.createPolicy)
            return null;
        var n = null
          , o = "data-tt-policy-suffix";
        t.currentScript && t.currentScript.hasAttribute(o) && (n = t.currentScript.getAttribute(o));
        var r = "dompurify" + (n ? "#" + n : "");
        try {
            return e.createPolicy(r, {
                createHTML: function(e) {
                    return e
                }
            })
        } catch (e) {
            return console.warn("TrustedTypes policy " + r + " could not be created."),
            null
        }
    }
      , xy = function e() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Cy()
          , n = function(t) {
            return e(t)
        };
        if (n.version = "2.3.8",
        n.removed = [],
        !t || !t.document || 9 !== t.document.nodeType)
            return n.isSupported = !1,
            n;
        var o = t.document
          , r = t.document
          , s = t.DocumentFragment
          , a = t.HTMLTemplateElement
          , i = t.Node
          , l = t.Element
          , d = t.NodeFilter
          , c = t.NamedNodeMap
          , u = void 0 === c ? t.NamedNodeMap || t.MozNamedAttrMap : c
          , m = t.HTMLFormElement
          , f = t.DOMParser
          , g = t.trustedTypes
          , p = l.prototype
          , h = ey(p, "cloneNode")
          , b = ey(p, "nextSibling")
          , v = ey(p, "childNodes")
          , y = ey(p, "parentNode");
        if ("function" == typeof a) {
            var C = r.createElement("template");
            C.content && C.content.ownerDocument && (r = C.content.ownerDocument)
        }
        var w = wy(g, o)
          , x = w ? w.createHTML("") : ""
          , k = r
          , E = k.implementation
          , S = k.createNodeIterator
          , _ = k.createDocumentFragment
          , N = k.getElementsByTagName
          , R = o.importNode
          , A = {};
        try {
            A = Zv(r).documentMode ? r.documentMode : {}
        } catch (e) {}
        var O = {};
        n.isSupported = "function" == typeof y && E && void 0 !== E.createHTMLDocument && 9 !== A;
        var T, B, D = my, P = fy, L = gy, M = py, I = by, F = vy, U = hy, z = null, j = Jv({}, [].concat(Nv(ty), Nv(ny), Nv(oy), Nv(sy), Nv(iy))), H = null, $ = Jv({}, [].concat(Nv(ly), Nv(dy), Nv(cy), Nv(uy))), V = Object.seal(Object.create(null, {
            tagNameCheck: {
                writable: !0,
                configurable: !1,
                enumerable: !0,
                value: null
            },
            attributeNameCheck: {
                writable: !0,
                configurable: !1,
                enumerable: !0,
                value: null
            },
            allowCustomizedBuiltInElements: {
                writable: !0,
                configurable: !1,
                enumerable: !0,
                value: !1
            }
        })), q = null, W = null, K = !0, G = !0, Y = !1, X = !1, Q = !1, J = !1, Z = !1, ee = !1, te = !1, ne = !1, oe = !0, re = !0, se = !1, ae = {}, ie = null, le = Jv({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), de = null, ce = Jv({}, ["audio", "video", "img", "source", "image", "track"]), ue = null, me = Jv({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), fe = "http://www.w3.org/1998/Math/MathML", ge = "http://www.w3.org/2000/svg", pe = "http://www.w3.org/1999/xhtml", he = pe, be = !1, ve = ["application/xhtml+xml", "text/html"], ye = "text/html", Ce = null, we = r.createElement("form"), xe = function(e) {
            return e instanceof RegExp || e instanceof Function
        }, ke = function(e) {
            Ce && Ce === e || (e && "object" === kv(e) || (e = {}),
            e = Zv(e),
            z = "ALLOWED_TAGS"in e ? Jv({}, e.ALLOWED_TAGS) : j,
            H = "ALLOWED_ATTR"in e ? Jv({}, e.ALLOWED_ATTR) : $,
            ue = "ADD_URI_SAFE_ATTR"in e ? Jv(Zv(me), e.ADD_URI_SAFE_ATTR) : me,
            de = "ADD_DATA_URI_TAGS"in e ? Jv(Zv(ce), e.ADD_DATA_URI_TAGS) : ce,
            ie = "FORBID_CONTENTS"in e ? Jv({}, e.FORBID_CONTENTS) : le,
            q = "FORBID_TAGS"in e ? Jv({}, e.FORBID_TAGS) : {},
            W = "FORBID_ATTR"in e ? Jv({}, e.FORBID_ATTR) : {},
            ae = "USE_PROFILES"in e && e.USE_PROFILES,
            K = !1 !== e.ALLOW_ARIA_ATTR,
            G = !1 !== e.ALLOW_DATA_ATTR,
            Y = e.ALLOW_UNKNOWN_PROTOCOLS || !1,
            X = e.SAFE_FOR_TEMPLATES || !1,
            Q = e.WHOLE_DOCUMENT || !1,
            ee = e.RETURN_DOM || !1,
            te = e.RETURN_DOM_FRAGMENT || !1,
            ne = e.RETURN_TRUSTED_TYPE || !1,
            Z = e.FORCE_BODY || !1,
            oe = !1 !== e.SANITIZE_DOM,
            re = !1 !== e.KEEP_CONTENT,
            se = e.IN_PLACE || !1,
            U = e.ALLOWED_URI_REGEXP || U,
            he = e.NAMESPACE || pe,
            e.CUSTOM_ELEMENT_HANDLING && xe(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (V.tagNameCheck = e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),
            e.CUSTOM_ELEMENT_HANDLING && xe(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (V.attributeNameCheck = e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),
            e.CUSTOM_ELEMENT_HANDLING && "boolean" == typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && (V.allowCustomizedBuiltInElements = e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),
            T = T = -1 === ve.indexOf(e.PARSER_MEDIA_TYPE) ? ye : e.PARSER_MEDIA_TYPE,
            B = "application/xhtml+xml" === T ? function(e) {
                return e
            }
            : Vv,
            X && (G = !1),
            te && (ee = !0),
            ae && (z = Jv({}, Nv(iy)),
            H = [],
            !0 === ae.html && (Jv(z, ty),
            Jv(H, ly)),
            !0 === ae.svg && (Jv(z, ny),
            Jv(H, dy),
            Jv(H, uy)),
            !0 === ae.svgFilters && (Jv(z, oy),
            Jv(H, dy),
            Jv(H, uy)),
            !0 === ae.mathMl && (Jv(z, sy),
            Jv(H, cy),
            Jv(H, uy))),
            e.ADD_TAGS && (z === j && (z = Zv(z)),
            Jv(z, e.ADD_TAGS)),
            e.ADD_ATTR && (H === $ && (H = Zv(H)),
            Jv(H, e.ADD_ATTR)),
            e.ADD_URI_SAFE_ATTR && Jv(ue, e.ADD_URI_SAFE_ATTR),
            e.FORBID_CONTENTS && (ie === le && (ie = Zv(ie)),
            Jv(ie, e.FORBID_CONTENTS)),
            re && (z["#text"] = !0),
            Q && Jv(z, ["html", "head", "body"]),
            z.table && (Jv(z, ["tbody"]),
            delete q.tbody),
            Pv && Pv(e),
            Ce = e)
        }, Ee = Jv({}, ["mi", "mo", "mn", "ms", "mtext"]), Se = Jv({}, ["foreignobject", "desc", "title", "annotation-xml"]), _e = Jv({}, ["title", "style", "font", "a", "script"]), Ne = Jv({}, ny);
        Jv(Ne, oy),
        Jv(Ne, ry);
        var Re = Jv({}, sy);
        Jv(Re, ay);
        var Ae = function(e) {
            var t = y(e);
            t && t.tagName || (t = {
                namespaceURI: pe,
                tagName: "template"
            });
            var n = Vv(e.tagName)
              , o = Vv(t.tagName);
            return e.namespaceURI === ge ? t.namespaceURI === pe ? "svg" === n : t.namespaceURI === fe ? "svg" === n && ("annotation-xml" === o || Ee[o]) : Boolean(Ne[n]) : e.namespaceURI === fe ? t.namespaceURI === pe ? "math" === n : t.namespaceURI === ge ? "math" === n && Se[o] : Boolean(Re[n]) : e.namespaceURI === pe && !(t.namespaceURI === ge && !Se[o]) && !(t.namespaceURI === fe && !Ee[o]) && !Re[n] && (_e[n] || !Ne[n])
        }
          , Oe = function(e) {
            $v(n.removed, {
                element: e
            });
            try {
                e.parentNode.removeChild(e)
            } catch (t) {
                try {
                    e.outerHTML = x
                } catch (t) {
                    e.remove()
                }
            }
        }
          , Te = function(e, t) {
            try {
                $v(n.removed, {
                    attribute: t.getAttributeNode(e),
                    from: t
                })
            } catch (e) {
                $v(n.removed, {
                    attribute: null,
                    from: t
                })
            }
            if (t.removeAttribute(e),
            "is" === e && !H[e])
                if (ee || te)
                    try {
                        Oe(t)
                    } catch (e) {}
                else
                    try {
                        t.setAttribute(e, "")
                    } catch (e) {}
        }
          , Be = function(e) {
            var t, n;
            if (Z)
                e = "<remove></remove>" + e;
            else {
                var o = qv(e, /^[\r\n\t ]+/);
                n = o && o[0]
            }
            "application/xhtml+xml" === T && (e = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + e + "</body></html>");
            var s = w ? w.createHTML(e) : e;
            if (he === pe)
                try {
                    t = (new f).parseFromString(s, T)
                } catch (e) {}
            if (!t || !t.documentElement) {
                t = E.createDocument(he, "template", null);
                try {
                    t.documentElement.innerHTML = be ? "" : s
                } catch (e) {}
            }
            var a = t.body || t.documentElement;
            return e && n && a.insertBefore(r.createTextNode(n), a.childNodes[0] || null),
            he === pe ? N.call(t, Q ? "html" : "body")[0] : Q ? t.documentElement : a
        }
          , De = function(e) {
            return S.call(e.ownerDocument || e, e, d.SHOW_ELEMENT | d.SHOW_COMMENT | d.SHOW_TEXT, null, !1)
        }
          , Pe = function(e) {
            return e instanceof m && ("string" != typeof e.nodeName || "string" != typeof e.textContent || "function" != typeof e.removeChild || !(e.attributes instanceof u) || "function" != typeof e.removeAttribute || "function" != typeof e.setAttribute || "string" != typeof e.namespaceURI || "function" != typeof e.insertBefore)
        }
          , Le = function(e) {
            return "object" === kv(i) ? e instanceof i : e && "object" === kv(e) && "number" == typeof e.nodeType && "string" == typeof e.nodeName
        }
          , Me = function(e, t, o) {
            O[e] && jv(O[e], (function(e) {
                e.call(n, t, o, Ce)
            }
            ))
        }
          , Ie = function(e) {
            var t;
            if (Me("beforeSanitizeElements", e, null),
            Pe(e))
                return Oe(e),
                !0;
            if (Yv(/[\u0080-\uFFFF]/, e.nodeName))
                return Oe(e),
                !0;
            var o = B(e.nodeName);
            if (Me("uponSanitizeElement", e, {
                tagName: o,
                allowedTags: z
            }),
            e.hasChildNodes() && !Le(e.firstElementChild) && (!Le(e.content) || !Le(e.content.firstElementChild)) && Yv(/<[/\w]/g, e.innerHTML) && Yv(/<[/\w]/g, e.textContent))
                return Oe(e),
                !0;
            if ("select" === o && Yv(/<template/i, e.innerHTML))
                return Oe(e),
                !0;
            if (!z[o] || q[o]) {
                if (!q[o] && Ue(o)) {
                    if (V.tagNameCheck instanceof RegExp && Yv(V.tagNameCheck, o))
                        return !1;
                    if (V.tagNameCheck instanceof Function && V.tagNameCheck(o))
                        return !1
                }
                if (re && !ie[o]) {
                    var r = y(e) || e.parentNode
                      , s = v(e) || e.childNodes;
                    if (s && r)
                        for (var a = s.length - 1; a >= 0; --a)
                            r.insertBefore(h(s[a], !0), b(e))
                }
                return Oe(e),
                !0
            }
            return e instanceof l && !Ae(e) ? (Oe(e),
            !0) : "noscript" !== o && "noembed" !== o || !Yv(/<\/no(script|embed)/i, e.innerHTML) ? (X && 3 === e.nodeType && (t = e.textContent,
            t = Wv(t, D, " "),
            t = Wv(t, P, " "),
            e.textContent !== t && ($v(n.removed, {
                element: e.cloneNode()
            }),
            e.textContent = t)),
            Me("afterSanitizeElements", e, null),
            !1) : (Oe(e),
            !0)
        }
          , Fe = function(e, t, n) {
            if (oe && ("id" === t || "name" === t) && (n in r || n in we))
                return !1;
            if (G && !W[t] && Yv(L, t))
                ;
            else if (K && Yv(M, t))
                ;
            else if (!H[t] || W[t]) {
                if (!(Ue(e) && (V.tagNameCheck instanceof RegExp && Yv(V.tagNameCheck, e) || V.tagNameCheck instanceof Function && V.tagNameCheck(e)) && (V.attributeNameCheck instanceof RegExp && Yv(V.attributeNameCheck, t) || V.attributeNameCheck instanceof Function && V.attributeNameCheck(t)) || "is" === t && V.allowCustomizedBuiltInElements && (V.tagNameCheck instanceof RegExp && Yv(V.tagNameCheck, n) || V.tagNameCheck instanceof Function && V.tagNameCheck(n))))
                    return !1
            } else if (ue[t])
                ;
            else if (Yv(U, Wv(n, F, "")))
                ;
            else if ("src" !== t && "xlink:href" !== t && "href" !== t || "script" === e || 0 !== Kv(n, "data:") || !de[e])
                if (Y && !Yv(I, Wv(n, F, "")))
                    ;
                else if (n)
                    return !1;
            return !0
        }
          , Ue = function(e) {
            return e.indexOf("-") > 0
        }
          , ze = function(e) {
            var t, n, o, r;
            Me("beforeSanitizeAttributes", e, null);
            var s = e.attributes;
            if (s) {
                var a = {
                    attrName: "",
                    attrValue: "",
                    keepAttr: !0,
                    allowedAttributes: H
                };
                for (r = s.length; r--; ) {
                    var i = t = s[r]
                      , l = i.name
                      , d = i.namespaceURI;
                    n = "value" === l ? t.value : Gv(t.value),
                    o = B(l);
                    var c = n;
                    if (a.attrName = o,
                    a.attrValue = n,
                    a.keepAttr = !0,
                    a.forceKeepAttr = void 0,
                    Me("uponSanitizeAttribute", e, a),
                    n = a.attrValue,
                    !a.forceKeepAttr)
                        if (a.keepAttr)
                            if (Yv(/\/>/i, n))
                                Te(l, e);
                            else {
                                X && (n = Wv(n, D, " "),
                                n = Wv(n, P, " "));
                                var u = B(e.nodeName);
                                if (Fe(u, o, n)) {
                                    if (n !== c)
                                        try {
                                            d ? e.setAttributeNS(d, l, n) : e.setAttribute(l, n)
                                        } catch (t) {
                                            Te(l, e)
                                        }
                                } else
                                    Te(l, e)
                            }
                        else
                            Te(l, e)
                }
                Me("afterSanitizeAttributes", e, null)
            }
        }
          , je = function e(t) {
            var n, o = De(t);
            for (Me("beforeSanitizeShadowDOM", t, null); n = o.nextNode(); )
                Me("uponSanitizeShadowNode", n, null),
                Ie(n) || (n.content instanceof s && e(n.content),
                ze(n));
            Me("afterSanitizeShadowDOM", t, null)
        };
        return n.sanitize = function(e, r) {
            var a, l, d, c, u;
            if ((be = !e) && (e = "\x3c!--\x3e"),
            "string" != typeof e && !Le(e)) {
                if ("function" != typeof e.toString)
                    throw Xv("toString is not a function");
                if ("string" != typeof (e = e.toString()))
                    throw Xv("dirty is not a string, aborting")
            }
            if (!n.isSupported) {
                if ("object" === kv(t.toStaticHTML) || "function" == typeof t.toStaticHTML) {
                    if ("string" == typeof e)
                        return t.toStaticHTML(e);
                    if (Le(e))
                        return t.toStaticHTML(e.outerHTML)
                }
                return e
            }
            if (J || ke(r),
            n.removed = [],
            "string" == typeof e && (se = !1),
            se) {
                if (e.nodeName) {
                    var m = B(e.nodeName);
                    if (!z[m] || q[m])
                        throw Xv("root node is forbidden and cannot be sanitized in-place")
                }
            } else if (e instanceof i)
                1 === (l = (a = Be("\x3c!----\x3e")).ownerDocument.importNode(e, !0)).nodeType && "BODY" === l.nodeName || "HTML" === l.nodeName ? a = l : a.appendChild(l);
            else {
                if (!ee && !X && !Q && -1 === e.indexOf("<"))
                    return w && ne ? w.createHTML(e) : e;
                if (!(a = Be(e)))
                    return ee ? null : ne ? x : ""
            }
            a && Z && Oe(a.firstChild);
            for (var f = De(se ? e : a); d = f.nextNode(); )
                3 === d.nodeType && d === c || Ie(d) || (d.content instanceof s && je(d.content),
                ze(d),
                c = d);
            if (c = null,
            se)
                return e;
            if (ee) {
                if (te)
                    for (u = _.call(a.ownerDocument); a.firstChild; )
                        u.appendChild(a.firstChild);
                else
                    u = a;
                return H.shadowroot && (u = R.call(o, u, !0)),
                u
            }
            var g = Q ? a.outerHTML : a.innerHTML;
            return Q && z["!doctype"] && a.ownerDocument && a.ownerDocument.doctype && a.ownerDocument.doctype.name && Yv(yy, a.ownerDocument.doctype.name) && (g = "<!DOCTYPE " + a.ownerDocument.doctype.name + ">\n" + g),
            X && (g = Wv(g, D, " "),
            g = Wv(g, P, " ")),
            w && ne ? w.createHTML(g) : g
        }
        ,
        n.setConfig = function(e) {
            ke(e),
            J = !0
        }
        ,
        n.clearConfig = function() {
            Ce = null,
            J = !1
        }
        ,
        n.isValidAttribute = function(e, t, n) {
            Ce || ke({});
            var o = B(e)
              , r = B(t);
            return Fe(o, r, n)
        }
        ,
        n.addHook = function(e, t) {
            "function" == typeof t && (O[e] = O[e] || [],
            $v(O[e], t))
        }
        ,
        n.removeHook = function(e) {
            if (O[e])
                return Hv(O[e])
        }
        ,
        n.removeHooks = function(e) {
            O[e] && (O[e] = [])
        }
        ,
        n.removeAllHooks = function() {
            O = {}
        }
        ,
        n
    }();
    const ky = Dt.each
      , Ey = Dt.trim
      , Sy = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"]
      , _y = {
        ftp: 21,
        http: 80,
        https: 443,
        mailto: 25
    }
      , Ny = ["img", "video"]
      , Ry = (e,t,n)=>{
        const o = (e=>{
            try {
                return decodeURIComponent(e)
            } catch (t) {
                return unescape(e)
            }
        }
        )(t).replace(/\s/g, "");
        return !e.allow_script_urls && (!!/((java|vb)script|mhtml):/i.test(o) || !e.allow_html_data_urls && (/^data:image\//i.test(o) ? ((e,t)=>C(e) ? !e : !C(t) || !H(Ny, t))(e.allow_svg_data_urls, n) && /^data:image\/svg\+xml/i.test(o) : /^data:/i.test(o)))
    }
    ;
    class Ay {
        constructor(e, t={}) {
            this.path = "",
            this.directory = "",
            e = Ey(e),
            this.settings = t;
            const n = t.base_uri
              , o = this;
            if (/^([\w\-]+):([^\/]{2})/i.test(e) || /^\s*#/.test(e))
                return void (o.source = e);
            const r = 0 === e.indexOf("//");
            if (0 !== e.indexOf("/") || r || (e = (n && n.protocol || "http") + "://mce_host" + e),
            !/^[\w\-]*:?\/\//.test(e)) {
                const t = n ? n.path : new Ay(document.location.href).directory;
                if ("" === (null == n ? void 0 : n.protocol))
                    e = "//mce_host" + o.toAbsPath(t, e);
                else {
                    const r = /([^#?]*)([#?]?.*)/.exec(e);
                    r && (e = (n && n.protocol || "http") + "://mce_host" + o.toAbsPath(t, r[1]) + r[2])
                }
            }
            e = e.replace(/@@/g, "(mce_at)");
            const s = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@\/]*):?([^:@\/]*))?@)?(\[[a-zA-Z0-9:.%]+\]|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/.exec(e);
            s && ky(Sy, ((e,t)=>{
                let n = s[t];
                n && (n = n.replace(/\(mce_at\)/g, "@@")),
                o[e] = n
            }
            )),
            n && (o.protocol || (o.protocol = n.protocol),
            o.userInfo || (o.userInfo = n.userInfo),
            o.port || "mce_host" !== o.host || (o.port = n.port),
            o.host && "mce_host" !== o.host || (o.host = n.host),
            o.source = ""),
            r && (o.protocol = "")
        }
        static parseDataUri(e) {
            let t;
            const n = decodeURIComponent(e).split(",")
              , o = /data:([^;]+)/.exec(n[0]);
            return o && (t = o[1]),
            {
                type: t,
                data: n[1]
            }
        }
        static isDomSafe(e, t, n={}) {
            if (n.allow_script_urls)
                return !0;
            {
                const o = Gs.decode(e).replace(/[\s\u0000-\u001F]+/g, "");
                return !Ry(n, o, t)
            }
        }
        static getDocumentBaseUrl(e) {
            var t;
            let n;
            return n = 0 !== e.protocol.indexOf("http") && "file:" !== e.protocol ? null !== (t = e.href) && void 0 !== t ? t : "" : e.protocol + "//" + e.host + e.pathname,
            /^[^:]+:\/\/\/?[^\/]+\//.test(n) && (n = n.replace(/[\?#].*$/, "").replace(/[\/\\][^\/]+$/, ""),
            /[\/\\]$/.test(n) || (n += "/")),
            n
        }
        setPath(e) {
            const t = /^(.*?)\/?(\w+)?$/.exec(e);
            t && (this.path = t[0],
            this.directory = t[1],
            this.file = t[2]),
            this.source = "",
            this.getURI()
        }
        toRelative(e) {
            if ("./" === e)
                return e;
            const t = new Ay(e,{
                base_uri: this
            });
            if ("mce_host" !== t.host && this.host !== t.host && t.host || this.port !== t.port || this.protocol !== t.protocol && "" !== t.protocol)
                return t.getURI();
            const n = this.getURI()
              , o = t.getURI();
            if (n === o || "/" === n.charAt(n.length - 1) && n.substr(0, n.length - 1) === o)
                return n;
            let r = this.toRelPath(this.path, t.path);
            return t.query && (r += "?" + t.query),
            t.anchor && (r += "#" + t.anchor),
            r
        }
        toAbsolute(e, t) {
            const n = new Ay(e,{
                base_uri: this
            });
            return n.getURI(t && this.isSameOrigin(n))
        }
        isSameOrigin(e) {
            if (this.host == e.host && this.protocol == e.protocol) {
                if (this.port == e.port)
                    return !0;
                const t = this.protocol ? _y[this.protocol] : null;
                if (t && (this.port || t) == (e.port || t))
                    return !0
            }
            return !1
        }
        toRelPath(e, t) {
            let n, o, r = 0, s = "";
            const a = e.substring(0, e.lastIndexOf("/")).split("/")
              , i = t.split("/");
            if (a.length >= i.length)
                for (n = 0,
                o = a.length; n < o; n++)
                    if (n >= i.length || a[n] !== i[n]) {
                        r = n + 1;
                        break
                    }
            if (a.length < i.length)
                for (n = 0,
                o = i.length; n < o; n++)
                    if (n >= a.length || a[n] !== i[n]) {
                        r = n + 1;
                        break
                    }
            if (1 === r)
                return t;
            for (n = 0,
            o = a.length - (r - 1); n < o; n++)
                s += "../";
            for (n = r - 1,
            o = i.length; n < o; n++)
                s += n !== r - 1 ? "/" + i[n] : i[n];
            return s
        }
        toAbsPath(e, t) {
            let n = 0;
            const o = /\/$/.test(t) ? "/" : ""
              , r = e.split("/")
              , s = t.split("/")
              , a = [];
            ky(r, (e=>{
                e && a.push(e)
            }
            ));
            const i = [];
            for (let e = s.length - 1; e >= 0; e--)
                0 !== s[e].length && "." !== s[e] && (".." !== s[e] ? n > 0 ? n-- : i.push(s[e]) : n++);
            const l = a.length - n;
            let d;
            return d = l <= 0 ? oe(i).join("/") : a.slice(0, l).join("/") + "/" + oe(i).join("/"),
            0 !== d.indexOf("/") && (d = "/" + d),
            o && d.lastIndexOf("/") !== d.length - 1 && (d += o),
            d
        }
        getURI(e=!1) {
            let t;
            return this.source && !e || (t = "",
            e || (this.protocol ? t += this.protocol + "://" : t += "//",
            this.userInfo && (t += this.userInfo + "@"),
            this.host && (t += this.host),
            this.port && (t += ":" + this.port)),
            this.path && (t += this.path),
            this.query && (t += "?" + this.query),
            this.anchor && (t += "#" + this.anchor),
            this.source = t),
            this.source
        }
    }
    const Oy = Dt.makeMap("src,href,data,background,action,formaction,poster,xlink:href")
      , Ty = "data-mce-type";
    let By = 0;
    const Dy = (e,t,n,o)=>{
        var r, s, a, i;
        const l = t.validate
          , d = n.getSpecialElements();
        8 === e.nodeType && !t.allow_conditional_comments && /^\[if/i.test(null !== (r = e.nodeValue) && void 0 !== r ? r : "") && (e.nodeValue = " " + e.nodeValue);
        const c = null !== (s = null == o ? void 0 : o.tagName) && void 0 !== s ? s : e.nodeName.toLowerCase();
        if (1 !== e.nodeType || "body" === c)
            return;
        const u = bn(e)
          , f = en(u, Ty)
          , g = Jt(u, "data-mce-bogus");
        if (!f && m(g))
            return void ("all" === g ? yo(u) : Co(u));
        const p = n.getElementRule(c);
        if (!l || p) {
            if (C(o) && (o.allowedTags[c] = !0),
            l && p && !f) {
                if (q(null !== (a = p.attributesForced) && void 0 !== a ? a : [], (e=>{
                    Xt(u, e.name, "{$uid}" === e.value ? "mce_" + By++ : e.value)
                }
                )),
                q(null !== (i = p.attributesDefault) && void 0 !== i ? i : [], (e=>{
                    en(u, e.name) || Xt(u, e.name, "{$uid}" === e.value ? "mce_" + By++ : e.value)
                }
                )),
                p.attributesRequired && !$(p.attributesRequired, (e=>en(u, e))))
                    return void Co(u);
                if (p.removeEmptyAttrs && (e=>{
                    const t = e.dom.attributes;
                    return null == t || 0 === t.length
                }
                )(u))
                    return void Co(u);
                p.outputName && p.outputName !== c && ((e,t)=>{
                    const n = ((e,t)=>{
                        const n = pn(t)
                          , o = nn(e);
                        return Qt(n, o),
                        n
                    }
                    )(e, t);
                    fo(e, n);
                    const o = Pn(e);
                    bo(n, o),
                    yo(e)
                }
                )(u, p.outputName)
            }
        } else
            ke(d, c) ? yo(u) : Co(u)
    }
      , Py = (e,t,n,o,r)=>!(o in Oy && Ry(e, r, n)) && (!e.validate || t.isValid(n, o) || He(o, "data-") || He(o, "aria-"))
      , Ly = (e,t)=>e.hasAttribute(Ty) && ("id" === t || "class" === t || "style" === t)
      , My = (e,t)=>e in t.getBoolAttrs()
      , Iy = (e,t,n)=>{
        const {attributes: o} = e;
        for (let r = o.length - 1; r >= 0; r--) {
            const s = o[r]
              , a = s.name
              , i = s.value;
            Py(t, n, e.tagName.toLowerCase(), a, i) || Ly(e, a) ? My(a, n) && e.setAttribute(a, a) : e.removeAttribute(a)
        }
    }
      , Fy = (e,t)=>{
        const n = xy();
        return n.addHook("uponSanitizeElement", ((n,o)=>{
            Dy(n, e, t, o)
        }
        )),
        n.addHook("uponSanitizeAttribute", ((n,o)=>{
            const r = n.tagName.toLowerCase()
              , {attrName: s, attrValue: a} = o;
            o.keepAttr = Py(e, t, r, s, a),
            o.keepAttr ? (o.allowedAttributes[s] = !0,
            My(s, t) && (o.attrValue = s),
            e.allow_svg_data_urls && He(a, "data:image/svg+xml") && (o.forceKeepAttr = !0)) : Ly(n, s) && (o.forceKeepAttr = !0)
        }
        )),
        n
    }
      , Uy = Dt.makeMap
      , zy = Dt.extend
      , jy = (e,t,n)=>{
        const o = e.name
          , r = o in n && "title" !== o && "textarea" !== o
          , s = t.childNodes;
        for (let t = 0, o = s.length; t < o; t++) {
            const o = s[t]
              , a = new Ag(o.nodeName.toLowerCase(),o.nodeType);
            if (jo(o)) {
                const e = o.attributes;
                for (let t = 0, n = e.length; t < n; t++) {
                    const n = e[t];
                    a.attr(n.name, n.value)
                }
            } else
                Xo(o) ? (a.value = o.data,
                r && (a.raw = !0)) : (Zo(o) || Qo(o) || Jo(o)) && (a.value = o.data);
            jy(a, o, n),
            e.append(a)
        }
    }
      , Hy = (e={},t=ia())=>{
        const n = gv()
          , o = gv()
          , r = {
            validate: !0,
            root_name: "body",
            sanitize: !0,
            ...e
        }
          , s = new DOMParser
          , a = ((e,t)=>{
            if (e.sanitize) {
                const n = Fy(e, t);
                return (t,o)=>{
                    n.sanitize(t, ((e,t)=>{
                        const n = {
                            IN_PLACE: !0,
                            ALLOW_UNKNOWN_PROTOCOLS: !0,
                            ALLOWED_TAGS: ["#comment", "#cdata-section", "body"],
                            ALLOWED_ATTR: []
                        };
                        return n.PARSER_MEDIA_TYPE = t,
                        e.allow_script_urls ? n.ALLOWED_URI_REGEXP = /.*/ : e.allow_html_data_urls && (n.ALLOWED_URI_REGEXP = /^(?!(\w+script|mhtml):)/i),
                        n
                    }
                    )(e, o)),
                    n.removed = []
                }
            }
            return (n,o)=>{
                const r = document.createNodeIterator(n, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_TEXT);
                let s;
                for (; s = r.nextNode(); )
                    Dy(s, e, t),
                    jo(s) && Iy(s, e, t)
            }
        }
        )(r, t)
          , i = n.addFilter
          , l = n.getFilters
          , d = n.removeFilter
          , c = o.addFilter
          , u = o.getFilters
          , f = o.removeFilter
          , g = (e,n)=>{
            const o = m(n.attr(Ty))
              , r = 1 === n.type && !ke(e, n.name) && !((e,t)=>1 === t.type && xs(e, t.name) && m(t.attr(fs)))(t, n);
            return 3 === n.type || r && !o
        }
          , p = {
            schema: t,
            addAttributeFilter: c,
            getAttributeFilters: u,
            removeAttributeFilter: f,
            addNodeFilter: i,
            getNodeFilters: l,
            removeNodeFilter: d,
            parse: (e,n={})=>{
                var o;
                const i = r.validate
                  , d = null !== (o = n.context) && void 0 !== o ? o : r.root_name
                  , c = ((e,n,o="html")=>{
                    const r = "xhtml" === o ? "application/xhtml+xml" : "text/html"
                      , i = ke(t.getSpecialElements(), n.toLowerCase())
                      , l = i ? `<${n}>${e}</${n}>` : e
                      , d = "xhtml" === o ? `<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>${l}</body></html>` : `<body>${l}</body>`
                      , c = s.parseFromString(d, r).body;
                    return a(c, r),
                    i ? c.firstChild : c
                }
                )(e, d, n.format);
                ys(t, c);
                const m = new Ag(d,11);
                jy(m, c, t.getSpecialElements()),
                c.innerHTML = "";
                const [f,p] = ((e,t,n,o)=>{
                    const r = n.validate
                      , s = t.getNonEmptyElements()
                      , a = t.getWhitespaceElements()
                      , i = zy(Uy("script,style,head,html,body,title,meta,param"), t.getBlockElements())
                      , l = sa(t)
                      , d = /[ \t\r\n]+/g
                      , c = /^[ \t\r\n]+/
                      , u = /[ \t\r\n]+$/
                      , m = e=>{
                        let t = e.parent;
                        for (; C(t); ) {
                            if (t.name in a)
                                return !0;
                            t = t.parent
                        }
                        return !1
                    }
                      , f = e=>e.name in i && !_s(t, e)
                      , g = (t,n)=>{
                        const r = n ? t.prev : t.next;
                        return !C(r) && !y(t.parent) && f(t.parent) && (t.parent !== e || !0 === o.isRootContent)
                    }
                    ;
                    return [e=>{
                        var t;
                        if (3 === e.type && !m(e)) {
                            let n = null !== (t = e.value) && void 0 !== t ? t : "";
                            n = n.replace(d, " "),
                            (((e,t)=>C(e) && (t(e) || "br" === e.name))(e.prev, f) || g(e, !0)) && (n = n.replace(c, "")),
                            0 === n.length ? e.remove() : e.value = n
                        }
                    }
                    , e=>{
                        var n;
                        if (1 === e.type) {
                            const n = t.getElementRule(e.name);
                            if (r && n) {
                                const r = zh(t, s, a, e);
                                n.paddInEmptyBlock && r && (e=>{
                                    let n = e;
                                    for (; C(n); ) {
                                        if (n.name in l)
                                            return zh(t, s, a, n);
                                        n = n.parent
                                    }
                                    return !1
                                }
                                )(e) ? Fh(o, f, e) : n.removeEmpty && r ? f(e) ? e.remove() : e.unwrap() : n.paddEmpty && (r || (e=>{
                                    var t;
                                    return Uh(e, "#text") && (null === (t = null == e ? void 0 : e.firstChild) || void 0 === t ? void 0 : t.value) === ur
                                }
                                )(e)) && Fh(o, f, e)
                            }
                        } else if (3 === e.type && !m(e)) {
                            let t = null !== (n = e.value) && void 0 !== n ? n : "";
                            (e.next && f(e.next) || g(e, !1)) && (t = t.replace(u, "")),
                            0 === t.length ? e.remove() : e.value = t
                        }
                    }
                    ]
                }
                )(m, t, r, n)
                  , h = []
                  , b = i ? e=>((e,n)=>{
                    Vh(t, e) && n.push(e)
                }
                )(e, h) : E
                  , v = {
                    nodes: {},
                    attributes: {}
                }
                  , w = e=>Lh(l(), u(), e, v);
                if (((e,t,n)=>{
                    const o = [];
                    for (let n = e, r = n; n; r = n,
                    n = n.walk()) {
                        const s = n;
                        q(t, (e=>e(s))),
                        y(s.parent) && s !== e ? n = r : o.push(s)
                    }
                    for (let e = o.length - 1; e >= 0; e--) {
                        const t = o[e];
                        q(n, (e=>e(t)))
                    }
                }
                )(m, [f, w], [p, b]),
                h.reverse(),
                i && h.length > 0)
                    if (n.context) {
                        const {pass: e, fail: o} = K(h, (e=>e.parent === m));
                        $h(o, t, m, w),
                        n.invalid = e.length > 0
                    } else
                        $h(h, t, m, w);
                const x = ((e,t)=>{
                    var n;
                    const o = null !== (n = t.forced_root_block) && void 0 !== n ? n : e.forced_root_block;
                    return !1 === o ? "" : !0 === o ? "p" : o
                }
                )(r, n);
                return x && ("body" === m.name || n.isRootContent) && ((e,n)=>{
                    const o = zy(Uy("script,style,head,html,body,title,meta,param"), t.getBlockElements())
                      , s = /^[ \t\r\n]+/
                      , a = /[ \t\r\n]+$/;
                    let i = e.firstChild
                      , l = null;
                    const d = e=>{
                        var t, n;
                        e && (i = e.firstChild,
                        i && 3 === i.type && (i.value = null === (t = i.value) || void 0 === t ? void 0 : t.replace(s, "")),
                        i = e.lastChild,
                        i && 3 === i.type && (i.value = null === (n = i.value) || void 0 === n ? void 0 : n.replace(a, "")))
                    }
                    ;
                    if (t.isValidChild(e.name, n.toLowerCase())) {
                        for (; i; ) {
                            const t = i.next;
                            g(o, i) ? (l || (l = new Ag(n,1),
                            l.attr(r.forced_root_block_attrs),
                            e.insert(l, i)),
                            l.append(i)) : (d(l),
                            l = null),
                            i = t
                        }
                        d(l)
                    }
                }
                )(m, x),
                n.invalid || Mh(v, n),
                m
            }
        };
        return ((e,t)=>{
            const n = e.schema;
            t.remove_trailing_brs && e.addNodeFilter("br", ((e,t,o)=>{
                const r = Dt.extend({}, n.getBlockElements())
                  , s = n.getNonEmptyElements()
                  , a = n.getWhitespaceElements();
                r.body = 1;
                const i = e=>e.name in r && _s(n, e);
                for (let t = 0, l = e.length; t < l; t++) {
                    let l = e[t]
                      , d = l.parent;
                    if (d && r[d.name] && l === d.lastChild) {
                        let e = l.prev;
                        for (; e; ) {
                            const t = e.name;
                            if ("span" !== t || "bookmark" !== e.attr("data-mce-type")) {
                                "br" === t && (l = null);
                                break
                            }
                            e = e.prev
                        }
                        if (l && (l.remove(),
                        zh(n, s, a, d))) {
                            const e = n.getElementRule(d.name);
                            e && (e.removeEmpty ? d.remove() : e.paddEmpty && Fh(o, i, d))
                        }
                    } else {
                        let e = l;
                        for (; d && d.firstChild === e && d.lastChild === e && (e = d,
                        !r[d.name]); )
                            d = d.parent;
                        if (e === d) {
                            const e = new Ag("#text",3);
                            e.value = ur,
                            l.replace(e)
                        }
                    }
                }
            }
            )),
            e.addAttributeFilter("href", (e=>{
                let n = e.length;
                const o = e=>{
                    const t = e ? Dt.trim(e) : "";
                    return /\b(noopener)\b/g.test(t) ? t : (e=>e.split(" ").filter((e=>e.length > 0)).concat(["noopener"]).sort().join(" "))(t)
                }
                ;
                if (!t.allow_unsafe_link_target)
                    for (; n--; ) {
                        const t = e[n];
                        "a" === t.name && "_blank" === t.attr("target") && t.attr("rel", o(t.attr("rel")))
                    }
            }
            )),
            t.allow_html_in_named_anchor || e.addAttributeFilter("id,name", (e=>{
                let t, n, o, r, s = e.length;
                for (; s--; )
                    if (r = e[s],
                    "a" === r.name && r.firstChild && !r.attr("href"))
                        for (o = r.parent,
                        t = r.lastChild; t && o; )
                            n = t.prev,
                            o.insert(t, r),
                            t = n
            }
            )),
            t.fix_list_elements && e.addNodeFilter("ul,ol", (e=>{
                let t, n, o = e.length;
                for (; o--; )
                    if (t = e[o],
                    n = t.parent,
                    n && ("ul" === n.name || "ol" === n.name))
                        if (t.prev && "li" === t.prev.name)
                            t.prev.append(t);
                        else {
                            const e = new Ag("li",1);
                            e.attr("style", "list-style-type: none"),
                            t.wrap(e)
                        }
            }
            ));
            const o = n.getValidClasses();
            t.validate && o && e.addAttributeFilter("class", (e=>{
                var t;
                let n = e.length;
                for (; n--; ) {
                    const r = e[n]
                      , s = null !== (t = r.attr("class")) && void 0 !== t ? t : ""
                      , a = Dt.explode(s, " ");
                    let i = "";
                    for (let e = 0; e < a.length; e++) {
                        const t = a[e];
                        let n = !1
                          , s = o["*"];
                        s && s[t] && (n = !0),
                        s = o[r.name],
                        !n && s && s[t] && (n = !0),
                        n && (i && (i += " "),
                        i += t)
                    }
                    i.length || (i = null),
                    r.attr("class", i)
                }
            }
            )),
            ((e,t)=>{
                const {blob_cache: n} = t;
                if (n) {
                    const t = e=>{
                        const t = e.attr("src");
                        (e=>e.attr("src") === At.transparentSrc || C(e.attr("data-mce-placeholder")))(e) || (e=>C(e.attr("data-mce-bogus")))(e) || y(t) || xv(n, t, !0).each((t=>{
                            e.attr("src", t.blobUri())
                        }
                        ))
                    }
                    ;
                    e.addAttributeFilter("src", (e=>q(e, t)))
                }
            }
            )(e, t)
        }
        )(p, r),
        ((e,t,n)=>{
            t.inline_styles && pv(e, t, n)
        }
        )(p, r, t),
        p
    }
      , $y = (e,t,n)=>{
        const o = (e=>eb(e) ? Ug({
            validate: !1
        }).serialize(e) : e)(e)
          , r = t(o);
        if (r.isDefaultPrevented())
            return r;
        if (eb(e)) {
            if (r.content !== o) {
                const t = Hy({
                    validate: !1,
                    forced_root_block: !1,
                    sanitize: n
                }).parse(r.content, {
                    context: e.name
                });
                return {
                    ...r,
                    content: t
                }
            }
            return {
                ...r,
                content: e
            }
        }
        return r
    }
      , Vy = (e,t)=>{
        if (t.no_events)
            return nl.value(t);
        {
            const n = ((e,t)=>e.dispatch("BeforeGetContent", t))(e, t);
            return n.isDefaultPrevented() ? nl.error($m(e, {
                content: "",
                ...n
            }).content) : nl.value(n)
        }
    }
      , qy = (e,t,n)=>{
        if (n.no_events)
            return t;
        {
            const o = $y(t, (t=>$m(e, {
                ...n,
                content: t
            })), Jd(e));
            return o.content
        }
    }
      , Wy = (e,t)=>{
        if (t.no_events)
            return nl.value(t);
        {
            const n = $y(t.content, (n=>((e,t)=>e.dispatch("BeforeSetContent", t))(e, {
                ...t,
                content: n
            })), Jd(e));
            return n.isDefaultPrevented() ? (Hm(e, n),
            nl.error(void 0)) : nl.value(n)
        }
    }
      , Ky = (e,t,n)=>{
        n.no_events || Hm(e, {
            ...n,
            content: t
        })
    }
      , Gy = (e,t,n)=>({
        element: e,
        width: t,
        rows: n
    })
      , Yy = (e,t)=>({
        element: e,
        cells: t
    })
      , Xy = (e,t)=>({
        x: e,
        y: t
    })
      , Qy = (e,t)=>Zt(e, t).bind(Xe).getOr(1)
      , Jy = (e,t,n)=>{
        const o = e.rows;
        return !!(o[n] ? o[n].cells : [])[t]
    }
      , Zy = e=>X(e, ((e,t)=>t.cells.length > e ? t.cells.length : e), 0)
      , eC = (e,t)=>{
        const n = e.rows;
        for (let e = 0; e < n.length; e++) {
            const o = n[e].cells;
            for (let n = 0; n < o.length; n++)
                if (xn(o[n], t))
                    return I.some(Xy(n, e))
        }
        return I.none()
    }
      , tC = (e,t,n,o,r)=>{
        const s = []
          , a = e.rows;
        for (let e = n; e <= r; e++) {
            const n = a[e].cells
              , r = t < o ? n.slice(t, o + 1) : n.slice(o, t + 1);
            s.push(Yy(a[e].element, r))
        }
        return s
    }
      , nC = e=>((e,t)=>{
        const n = ei(e.element)
          , o = pn("tbody");
        return bo(o, t),
        po(n, o),
        n
    }
    )(e, (e=>V(e.rows, (e=>{
        const t = V(e.cells, (e=>{
            const t = ti(e);
            return tn(t, "colspan"),
            tn(t, "rowspan"),
            t
        }
        ))
          , n = ei(e.element);
        return bo(n, t),
        n
    }
    )))(e))
      , oC = (e,t)=>{
        const n = bn(t.commonAncestorContainer)
          , o = ap(n, e)
          , r = G(o, Rr)
          , s = ((e,t)=>J(e, (e=>"li" === jt(e) && Vu(e, t))).fold(N([]), (t=>(e=>J(e, (e=>"ul" === jt(e) || "ol" === jt(e))))(e).map((e=>{
            const t = pn(jt(e))
              , n = ye(co(e), ((e,t)=>He(t, "list-style")));
            return so(t, n),
            [pn("li"), t]
        }
        )).getOr([]))))(o, t)
          , a = r.concat(s.length ? s : (e=>kr(e) ? Nn(e).filter(xr).fold(N([]), (t=>[e, t])) : xr(e) ? [e] : [])(n));
        return V(a, ei)
    }
      , rC = ()=>uf([])
      , sC = (e,t)=>((e,t)=>Qn(t, "table", O(xn, e)))(e, t[0]).bind((e=>{
        const n = t[0]
          , o = t[t.length - 1]
          , r = (e=>{
            const t = Gy(ei(e), 0, []);
            return q(Mo(e, "tr"), ((e,n)=>{
                q(Mo(e, "td,th"), ((o,r)=>{
                    ((e,t,n,o,r)=>{
                        const s = Qy(r, "rowspan")
                          , a = Qy(r, "colspan")
                          , i = e.rows;
                        for (let e = n; e < n + s; e++) {
                            i[e] || (i[e] = Yy(ti(o), []));
                            for (let o = t; o < t + a; o++)
                                i[e].cells[o] = e === n && o === t ? r : ei(r)
                        }
                    }
                    )(t, ((e,t,n)=>{
                        for (; Jy(e, t, n); )
                            t++;
                        return t
                    }
                    )(t, r, n), n, e, o)
                }
                ))
            }
            )),
            Gy(t.element, Zy(t.rows), t.rows)
        }
        )(e);
        return ((e,t,n)=>eC(e, t).bind((t=>eC(e, n).map((n=>((e,t,n)=>{
            const o = t.x
              , r = t.y
              , s = n.x
              , a = n.y
              , i = r < a ? tC(e, o, r, s, a) : tC(e, o, a, s, r);
            return Gy(e.element, Zy(i), i)
        }
        )(e, t, n))))))(r, n, o).map((e=>uf([nC(e)])))
    }
    )).getOrThunk(rC)
      , aC = (e,t)=>{
        const n = Uu(t, e);
        return n.length > 0 ? sC(e, n) : ((e,t)=>t.length > 0 && t[0].collapsed ? rC() : ((e,t)=>((e,t)=>{
            const n = X(t, ((e,t)=>(po(t, e),
            t)), e);
            return t.length > 0 ? uf([n]) : n
        }
        )(bn(t.cloneContents()), oC(e, t)))(e, t[0]))(e, t)
    }
      , iC = (e,t)=>t >= 0 && t < e.length && Au(e.charAt(t))
      , lC = e=>Pr(e.innerText)
      , dC = e=>jo(e) ? e.outerHTML : Xo(e) ? Gs.encodeRaw(e.data, !1) : Zo(e) ? "\x3c!--" + e.data + "--\x3e" : ""
      , cC = (e,t)=>(((e,t)=>{
        let n = 0;
        q(e, (e=>{
            0 === e[0] ? n++ : 1 === e[0] ? (((e,t,n)=>{
                const o = (e=>{
                    let t;
                    const n = document.createElement("div")
                      , o = document.createDocumentFragment();
                    for (e && (n.innerHTML = e); t = n.firstChild; )
                        o.appendChild(t);
                    return o
                }
                )(t);
                if (e.hasChildNodes() && n < e.childNodes.length) {
                    const t = e.childNodes[n];
                    e.insertBefore(o, t)
                } else
                    e.appendChild(o)
            }
            )(t, e[1], n),
            n++) : 2 === e[0] && ((e,t)=>{
                if (e.hasChildNodes() && t < e.childNodes.length) {
                    const n = e.childNodes[t];
                    e.removeChild(n)
                }
            }
            )(t, n)
        }
        ))
    }
    )(((e,t)=>{
        const n = e.length + t.length + 2
          , o = new Array(n)
          , r = new Array(n)
          , s = (n,o,r,a,l)=>{
            const d = i(n, o, r, a);
            if (null === d || d.start === o && d.diag === o - a || d.end === n && d.diag === n - r) {
                let s = n
                  , i = r;
                for (; s < o || i < a; )
                    s < o && i < a && e[s] === t[i] ? (l.push([0, e[s]]),
                    ++s,
                    ++i) : o - n > a - r ? (l.push([2, e[s]]),
                    ++s) : (l.push([1, t[i]]),
                    ++i)
            } else {
                s(n, d.start, r, d.start - d.diag, l);
                for (let t = d.start; t < d.end; ++t)
                    l.push([0, e[t]]);
                s(d.end, o, d.end - d.diag, a, l)
            }
        }
          , a = (n,o,r,s)=>{
            let a = n;
            for (; a - o < s && a < r && e[a] === t[a - o]; )
                ++a;
            return ((e,t,n)=>({
                start: e,
                end: t,
                diag: n
            }))(n, a, o)
        }
          , i = (n,s,i,l)=>{
            const d = s - n
              , c = l - i;
            if (0 === d || 0 === c)
                return null;
            const u = d - c
              , m = c + d
              , f = (m % 2 == 0 ? m : m + 1) / 2;
            let g, p, h, b, v;
            for (o[1 + f] = n,
            r[1 + f] = s + 1,
            g = 0; g <= f; ++g) {
                for (p = -g; p <= g; p += 2) {
                    for (h = p + f,
                    p === -g || p !== g && o[h - 1] < o[h + 1] ? o[h] = o[h + 1] : o[h] = o[h - 1] + 1,
                    b = o[h],
                    v = b - n + i - p; b < s && v < l && e[b] === t[v]; )
                        o[h] = ++b,
                        ++v;
                    if (u % 2 != 0 && u - g <= p && p <= u + g && r[h - u] <= o[h])
                        return a(r[h - u], p + n - i, s, l)
                }
                for (p = u - g; p <= u + g; p += 2) {
                    for (h = p + f - u,
                    p === u - g || p !== u + g && r[h + 1] <= r[h - 1] ? r[h] = r[h + 1] - 1 : r[h] = r[h - 1],
                    b = r[h] - 1,
                    v = b - n + i - p; b >= n && v >= i && e[b] === t[v]; )
                        r[h] = b--,
                        v--;
                    if (u % 2 == 0 && -g <= p && p <= g && r[h] <= o[h + u])
                        return a(r[h], p + n - i, s, l)
                }
            }
            return null
        }
          , l = [];
        return s(0, e.length, 0, t.length, l),
        l
    }
    )(V(ce(t.childNodes), dC), e), t),
    t)
      , uC = Pe((()=>document.implementation.createHTMLDocument("undo")))
      , mC = e=>{
        const t = (n = e.getBody(),
        G(V(ce(n.childNodes), dC), (e=>e.length > 0)));
        var n;
        const o = te(t, (t=>{
            const n = Bg(e.serializer, t);
            return n.length > 0 ? [n] : []
        }
        ))
          , r = o.join("");
        return (e=>-1 !== e.indexOf("</iframe>"))(r) ? (e=>({
            type: "fragmented",
            fragments: e,
            content: "",
            bookmark: null,
            beforeBookmark: null
        }))(o) : (e=>({
            type: "complete",
            fragments: null,
            content: e,
            bookmark: null,
            beforeBookmark: null
        }))(r)
    }
      , fC = (e,t,n)=>{
        const o = n ? t.beforeBookmark : t.bookmark;
        "fragmented" === t.type ? cC(t.fragments, e.getBody()) : e.setContent(t.content, {
            format: "raw",
            no_selection: !C(o) || !bu(o) || !o.isFakeCaret
        }),
        o && (e.selection.moveToBookmark(o),
        e.selection.scrollIntoView())
    }
      , gC = e=>"fragmented" === e.type ? e.fragments.join("") : e.content
      , pC = e=>{
        const t = pn("body", uC());
        return ko(t, gC(e)),
        q(Mo(t, "*[data-mce-bogus]"), Co),
        xo(t)
    }
      , hC = (e,t)=>!(!e || !t) && (!!((e,t)=>gC(e) === gC(t))(e, t) || ((e,t)=>pC(e) === pC(t))(e, t))
      , bC = e=>0 === e.get()
      , vC = (e,t,n)=>{
        bC(n) && (e.typing = t)
    }
      , yC = (e,t)=>{
        e.typing && (vC(e, !1, t),
        e.add())
    }
      , CC = e=>({
        init: {
            bindEvents: E
        },
        undoManager: {
            beforeChange: (t,n)=>((e,t,n)=>{
                bC(t) && n.set(Zi(e.selection))
            }
            )(e, t, n),
            add: (t,n,o,r,s,a)=>((e,t,n,o,r,s,a)=>{
                const i = mC(e)
                  , l = Dt.extend(s || {}, i);
                if (!bC(o) || e.removed)
                    return null;
                const d = t.data[n.get()];
                if (e.dispatch("BeforeAddUndo", {
                    level: l,
                    lastLevel: d,
                    originalEvent: a
                }).isDefaultPrevented())
                    return null;
                if (d && hC(d, l))
                    return null;
                t.data[n.get()] && r.get().each((e=>{
                    t.data[n.get()].beforeBookmark = e
                }
                ));
                const c = bd(e);
                if (c && t.data.length > c) {
                    for (let e = 0; e < t.data.length - 1; e++)
                        t.data[e] = t.data[e + 1];
                    t.data.length--,
                    n.set(t.data.length)
                }
                l.bookmark = Zi(e.selection),
                n.get() < t.data.length - 1 && (t.data.length = n.get() + 1),
                t.data.push(l),
                n.set(t.data.length - 1);
                const u = {
                    level: l,
                    lastLevel: d,
                    originalEvent: a
                };
                return n.get() > 0 ? (e.setDirty(!0),
                e.dispatch("AddUndo", u),
                e.dispatch("change", u)) : e.dispatch("AddUndo", u),
                l
            }
            )(e, t, n, o, r, s, a),
            undo: (t,n,o)=>((e,t,n,o)=>{
                let r;
                return t.typing && (t.add(),
                t.typing = !1,
                vC(t, !1, n)),
                o.get() > 0 && (o.set(o.get() - 1),
                r = t.data[o.get()],
                fC(e, r, !0),
                e.setDirty(!0),
                e.dispatch("Undo", {
                    level: r
                })),
                r
            }
            )(e, t, n, o),
            redo: (t,n)=>((e,t,n)=>{
                let o;
                return t.get() < n.length - 1 && (t.set(t.get() + 1),
                o = n[t.get()],
                fC(e, o, !1),
                e.setDirty(!0),
                e.dispatch("Redo", {
                    level: o
                })),
                o
            }
            )(e, t, n),
            clear: (t,n)=>((e,t,n)=>{
                t.data = [],
                n.set(0),
                t.typing = !1,
                e.dispatch("ClearUndos")
            }
            )(e, t, n),
            reset: e=>(e=>{
                e.clear(),
                e.add()
            }
            )(e),
            hasUndo: (t,n)=>((e,t,n)=>n.get() > 0 || t.typing && t.data[0] && !hC(mC(e), t.data[0]))(e, t, n),
            hasRedo: (e,t)=>((e,t)=>t.get() < e.data.length - 1 && !e.typing)(e, t),
            transact: (e,t,n)=>((e,t,n)=>(yC(e, t),
            e.beforeChange(),
            e.ignore(n),
            e.add()))(e, t, n),
            ignore: (e,t)=>((e,t)=>{
                try {
                    e.set(e.get() + 1),
                    t()
                } finally {
                    e.set(e.get() - 1)
                }
            }
            )(e, t),
            extra: (t,n,o,r)=>((e,t,n,o,r)=>{
                if (t.transact(o)) {
                    const o = t.data[n.get()].bookmark
                      , s = t.data[n.get() - 1];
                    fC(e, s, !0),
                    t.transact(r) && (t.data[n.get() - 1].beforeBookmark = o)
                }
            }
            )(e, t, n, o, r)
        },
        formatter: {
            match: (t,n,o,r)=>ub(e, t, n, o, r),
            matchAll: (t,n)=>((e,t,n)=>{
                const o = []
                  , r = {}
                  , s = e.selection.getStart();
                return e.dom.getParent(s, (s=>{
                    for (let a = 0; a < t.length; a++) {
                        const i = t[a];
                        !r[i] && cb(e, s, i, n) && (r[i] = !0,
                        o.push(i))
                    }
                }
                ), e.dom.getRoot()),
                o
            }
            )(e, t, n),
            matchNode: (t,n,o,r)=>cb(e, t, n, o, r),
            canApply: t=>((e,t)=>{
                const n = e.formatter.get(t)
                  , o = e.dom;
                if (n) {
                    const t = e.selection.getStart()
                      , r = cm(o, t);
                    for (let e = n.length - 1; e >= 0; e--) {
                        const t = n[e];
                        if (!fm(t))
                            return !0;
                        for (let e = r.length - 1; e >= 0; e--)
                            if (o.is(r[e], t.selector))
                                return !0
                    }
                }
                return !1
            }
            )(e, t),
            closest: t=>((e,t)=>{
                const n = t=>xn(t, bn(e.getBody()));
                return I.from(e.selection.getStart(!0)).bind((o=>rb(bn(o), (n=>ue(t, (t=>((t,n)=>cb(e, t.dom, n) ? I.some(n) : I.none())(n, t)))), n))).getOrNull()
            }
            )(e, t),
            apply: (t,n,o)=>iv(e, t, n, o),
            remove: (t,n,o,r)=>ov(e, t, n, o, r),
            toggle: (t,n,o)=>((e,t,n,o)=>{
                const r = e.formatter.get(t);
                r && (!ub(e, t, n, o) || "toggle"in r[0] && !r[0].toggle ? iv(e, t, n, o) : ov(e, t, n, o))
            }
            )(e, t, n, o),
            formatChanged: (t,n,o,r,s)=>((e,t,n,o,r,s)=>(((e,t,n,o,r,s)=>{
                const a = t.get();
                q(n.split(","), (t=>{
                    const n = xe(a, t).getOrThunk((()=>{
                        const e = {
                            withSimilar: {
                                state: Oa(!1),
                                similar: !0,
                                callbacks: []
                            },
                            withoutSimilar: {
                                state: Oa(!1),
                                similar: !1,
                                callbacks: []
                            },
                            withVars: []
                        };
                        return a[t] = e,
                        e
                    }
                    ))
                      , i = ()=>{
                        const n = uv(e);
                        return cv(e, n, t, r, s).isSome()
                    }
                    ;
                    if (v(s)) {
                        const e = r ? n.withSimilar : n.withoutSimilar;
                        e.callbacks.push(o),
                        1 === e.callbacks.length && e.state.set(i())
                    } else
                        n.withVars.push({
                            state: Oa(i()),
                            similar: r,
                            vars: s,
                            callback: o
                        })
                }
                )),
                t.set(a)
            }
            )(e, t, n, o, r, s),
            {
                unbind: ()=>((e,t,n)=>{
                    const o = e.get();
                    q(t.split(","), (e=>xe(o, e).each((t=>{
                        o[e] = {
                            withSimilar: {
                                ...t.withSimilar,
                                callbacks: G(t.withSimilar.callbacks, (e=>e !== n))
                            },
                            withoutSimilar: {
                                ...t.withoutSimilar,
                                callbacks: G(t.withoutSimilar.callbacks, (e=>e !== n))
                            },
                            withVars: G(t.withVars, (e=>e.callback !== n))
                        }
                    }
                    )))),
                    e.set(o)
                }
                )(t, n, o)
            }))(e, t, n, o, r, s)
        },
        editor: {
            getContent: t=>((e,t)=>I.from(e.getBody()).fold(N("tree" === t.format ? new Ag("body",11) : ""), (n=>Mg(e, t, n))))(e, t),
            setContent: (t,n)=>((e,t,n)=>I.from(e.getBody()).map((o=>eb(t) ? ((e,t,n,o)=>{
                Ih(e.parser.getNodeFilters(), e.parser.getAttributeFilters(), n);
                const r = Ug({
                    validate: !1
                }, e.schema).serialize(n)
                  , s = _r(bn(t)) ? r : Dt.trim(r);
                return tb(e, s, o.no_selection),
                {
                    content: n,
                    html: s
                }
            }
            )(e, o, t, n) : ((e,t,n,o)=>{
                if (0 === n.length || /^\s+$/.test(n)) {
                    const r = '<br data-mce-bogus="1">';
                    "TABLE" === t.nodeName ? n = "<tr><td>" + r + "</td></tr>" : /^(UL|OL)$/.test(t.nodeName) && (n = "<li>" + r + "</li>");
                    const s = El(e);
                    return e.schema.isValidChild(t.nodeName.toLowerCase(), s.toLowerCase()) ? (n = r,
                    n = e.dom.createHTML(s, Sl(e), n)) : n || (n = r),
                    tb(e, n, o.no_selection),
                    {
                        content: n,
                        html: n
                    }
                }
                {
                    "raw" !== o.format && (n = Ug({
                        validate: !1
                    }, e.schema).serialize(e.parser.parse(n, {
                        isRootContent: !0,
                        insert: !0
                    })));
                    const r = _r(bn(t)) ? n : Dt.trim(n);
                    return tb(e, r, o.no_selection),
                    {
                        content: r,
                        html: r
                    }
                }
            }
            )(e, o, t, n))).getOr({
                content: t,
                html: eb(n.content) ? "" : n.content
            }))(e, t, n),
            insertContent: (t,n)=>Zh(e, t, n),
            addVisual: t=>((e,t)=>{
                const n = e.dom
                  , o = C(t) ? t : e.getBody();
                q(n.select("table,a", o), (t=>{
                    switch (t.nodeName) {
                    case "TABLE":
                        const o = Sd(e)
                          , r = n.getAttrib(t, "border");
                        r && "0" !== r || !e.hasVisual ? n.removeClass(t, o) : n.addClass(t, o);
                        break;
                    case "A":
                        if (!n.getAttrib(t, "href")) {
                            const o = n.getAttrib(t, "name") || t.id
                              , r = _d(e);
                            o && e.hasVisual ? n.addClass(t, r) : n.removeClass(t, r)
                        }
                    }
                }
                )),
                e.dispatch("VisualAid", {
                    element: t,
                    hasVisual: e.hasVisual
                })
            }
            )(e, t)
        },
        selection: {
            getContent: (t,n)=>((e,t,n={})=>{
                const o = ((e,t)=>({
                    ...e,
                    format: t,
                    get: !0,
                    selection: !0,
                    getInner: !0
                }))(n, t);
                return Vy(e, o).fold(R, (t=>{
                    const n = ((e,t)=>{
                        if ("text" === t.format)
                            return (e=>I.from(e.selection.getRng()).map((t=>{
                                var n;
                                const o = I.from(e.dom.getParent(t.commonAncestorContainer, e.dom.isBlock))
                                  , r = e.getBody()
                                  , s = (e=>e.map((e=>e.nodeName)).getOr("div").toLowerCase())(o)
                                  , a = bn(t.cloneContents());
                                Pg(a),
                                Lg(a);
                                const i = e.dom.add(r, s, {
                                    "data-mce-bogus": "all",
                                    style: "overflow: hidden; opacity: 0;"
                                }, a.dom)
                                  , l = lC(i)
                                  , d = Pr(null !== (n = i.textContent) && void 0 !== n ? n : "");
                                if (e.dom.remove(i),
                                iC(d, 0) || iC(d, d.length - 1)) {
                                    const e = o.getOr(r)
                                      , t = lC(e)
                                      , n = t.indexOf(l);
                                    return -1 === n ? l : (iC(t, n - 1) ? " " : "") + l + (iC(t, n + l.length) ? " " : "")
                                }
                                return l
                            }
                            )).getOr(""))(e);
                        {
                            const n = ((e,t)=>{
                                const n = e.selection.getRng()
                                  , o = e.dom.create("body")
                                  , r = e.selection.getSel()
                                  , s = yg(e, Fu(r))
                                  , a = t.contextual ? aC(bn(e.getBody()), s).dom : n.cloneContents();
                                return a && o.appendChild(a),
                                e.selection.serializer.serialize(o, t)
                            }
                            )(e, t);
                            return "tree" === t.format ? n : e.selection.isCollapsed() ? "" : n
                        }
                    }
                    )(e, t);
                    return qy(e, n, t)
                }
                ))
            }
            )(e, t, n)
        },
        autocompleter: {
            addDecoration: t=>kg(e, t),
            removeDecoration: ()=>((e,t)=>Eg(t).each((t=>{
                const n = e.selection.getBookmark();
                Co(t),
                e.selection.moveToBookmark(n)
            }
            )))(e, bn(e.getBody()))
        },
        raw: {
            getModel: ()=>I.none()
        }
    })
      , wC = e=>ke(e.plugins, "rtc")
      , xC = e=>e.rtcInstance ? e.rtcInstance : CC(e)
      , kC = e=>{
        const t = e.rtcInstance;
        if (t)
            return t;
        throw new Error("Failed to get RTC instance not yet initialized.")
    }
      , EC = e=>kC(e).init.bindEvents()
      , SC = e=>0 === e.dom.length ? (yo(e),
    I.none()) : I.some(e)
      , _C = (e,t,n,o)=>{
        e.bind((e=>((o ? Ip : Mp)(e.dom, o ? e.dom.length : 0),
        t.filter(qt).map((t=>((e,t,n,o)=>{
            const r = e.dom
              , s = t.dom
              , a = o ? r.length : s.length;
            o ? (Fp(r, s, !1, !o),
            n.setStart(s, a)) : (Fp(s, r, !1, !o),
            n.setEnd(s, a))
        }
        )(e, t, n, o)))))).orThunk((()=>{
            const e = ((e,t)=>e.filter((e=>Im.isBookmarkNode(e.dom))).bind(t ? Tn : On))(t, o).or(t).filter(qt);
            return e.map((e=>((e,t)=>{
                Nn(e).each((n=>{
                    const o = e.dom;
                    t && Np(n, Bi(o, 0)) ? Mp(o, 0) : !t && Rp(n, Bi(o, o.length)) && Ip(o, o.length)
                }
                ))
            }
            )(e, o)))
        }
        ))
    }
      , NC = (e,t,n)=>{
        if (ke(e, t)) {
            const o = G(e[t], (e=>e !== n));
            0 === o.length ? delete e[t] : e[t] = o
        }
    }
    ;
    const RC = e=>!(!e || !e.ownerDocument) && kn(bn(e.ownerDocument), bn(e))
      , AC = (e,t,n,o)=>{
        let r, s;
        const {selectorChangedWithUnbind: a} = ((e,t)=>{
            let n, o;
            const r = (t,n)=>J(n, (n=>e.is(n, t)))
              , s = t=>e.getParents(t, void 0, e.getRoot());
            return {
                selectorChangedWithUnbind: (e,a)=>(n || (n = {},
                o = {},
                t.on("NodeChange", (e=>{
                    const t = e.element
                      , a = s(t)
                      , i = {};
                    ge(n, ((e,t)=>{
                        r(t, a).each((n=>{
                            o[t] || (q(e, (e=>{
                                e(!0, {
                                    node: n,
                                    selector: t,
                                    parents: a
                                })
                            }
                            )),
                            o[t] = e),
                            i[t] = e
                        }
                        ))
                    }
                    )),
                    ge(o, ((e,n)=>{
                        i[n] || (delete o[n],
                        q(e, (e=>{
                            e(!1, {
                                node: t,
                                selector: n,
                                parents: a
                            })
                        }
                        )))
                    }
                    ))
                }
                ))),
                n[e] || (n[e] = []),
                n[e].push(a),
                r(e, s(t.selection.getStart())).each((()=>{
                    o[e] = n[e]
                }
                )),
                {
                    unbind: ()=>{
                        NC(n, e, a),
                        NC(o, e, a)
                    }
                })
            }
        }
        )(e, o)
          , i = (e,t)=>((e,t,n={})=>{
            const o = ((e,t)=>({
                format: "html",
                ...e,
                set: !0,
                selection: !0,
                content: t
            }))(n, t);
            Wy(e, o).each((t=>{
                const n = ((e,t)=>{
                    if ("raw" !== t.format) {
                        const n = e.selection.getRng()
                          , o = e.dom.getParent(n.commonAncestorContainer, e.dom.isBlock)
                          , r = o ? {
                            context: o.nodeName.toLowerCase()
                        } : {}
                          , s = e.parser.parse(t.content, {
                            forced_root_block: !1,
                            ...r,
                            ...t
                        });
                        return Ug({
                            validate: !1
                        }, e.schema).serialize(s)
                    }
                    return t.content
                }
                )(e, t)
                  , o = e.selection.getRng();
                ((e,t)=>{
                    const n = I.from(t.firstChild).map(bn)
                      , o = I.from(t.lastChild).map(bn);
                    e.deleteContents(),
                    e.insertNode(t);
                    const r = n.bind(On).filter(qt).bind(SC)
                      , s = o.bind(Tn).filter(qt).bind(SC);
                    _C(r, n, e, !0),
                    _C(s, o, e, !1),
                    e.collapse(!1)
                }
                )(o, o.createContextualFragment(n)),
                e.selection.setRng(o),
                Vf(e, o),
                Ky(e, n, t)
            }
            ))
        }
        )(o, e, t)
          , l = e=>{
            const t = c();
            t.collapse(!!e),
            u(t)
        }
          , d = ()=>t.getSelection ? t.getSelection() : t.document.selection
          , c = ()=>{
            let n;
            const a = (e,t,n)=>{
                try {
                    return t.compareBoundaryPoints(e, n)
                } catch (e) {
                    return -1
                }
            }
              , i = t.document;
            if (C(o.bookmark) && !fg(o)) {
                const e = tg(o);
                if (e.isSome())
                    return e.map((e=>yg(o, [e])[0])).getOr(i.createRange())
            }
            try {
                const e = d();
                e && !zo(e.anchorNode) && (n = e.rangeCount > 0 ? e.getRangeAt(0) : i.createRange(),
                n = yg(o, [n])[0])
            } catch (e) {}
            if (n || (n = i.createRange()),
            er(n.startContainer) && n.collapsed) {
                const t = e.getRoot();
                n.setStart(t, 0),
                n.setEnd(t, 0)
            }
            return r && s && (0 === a(n.START_TO_START, n, r) && 0 === a(n.END_TO_END, n, r) ? n = s : (r = null,
            s = null)),
            n
        }
          , u = (e,t)=>{
            if (!(e=>!!e && RC(e.startContainer) && RC(e.endContainer))(e))
                return;
            const n = d();
            if (e = o.dispatch("SetSelectionRange", {
                range: e,
                forward: t
            }).range,
            n) {
                s = e;
                try {
                    n.removeAllRanges(),
                    n.addRange(e)
                } catch (e) {}
                !1 === t && n.extend && (n.collapse(e.endContainer, e.endOffset),
                n.extend(e.startContainer, e.startOffset)),
                r = n.rangeCount > 0 ? n.getRangeAt(0) : null
            }
            if (!e.collapsed && e.startContainer === e.endContainer && (null == n ? void 0 : n.setBaseAndExtent) && e.endOffset - e.startOffset < 2 && e.startContainer.hasChildNodes()) {
                const t = e.startContainer.childNodes[e.startOffset];
                t && "IMG" === t.nodeName && (n.setBaseAndExtent(e.startContainer, e.startOffset, e.endContainer, e.endOffset),
                n.anchorNode === e.startContainer && n.focusNode === e.endContainer || n.setBaseAndExtent(t, 0, t, 1))
            }
            o.dispatch("AfterSetSelectionRange", {
                range: e,
                forward: t
            })
        }
          , m = ()=>{
            const t = d()
              , n = null == t ? void 0 : t.anchorNode
              , o = null == t ? void 0 : t.focusNode;
            if (!t || !n || !o || zo(n) || zo(o))
                return !0;
            const r = e.createRng()
              , s = e.createRng();
            try {
                r.setStart(n, t.anchorOffset),
                r.collapse(!0),
                s.setStart(o, t.focusOffset),
                s.collapse(!0)
            } catch (e) {
                return !0
            }
            return r.compareBoundaryPoints(r.START_TO_START, s) <= 0
        }
          , f = {
            dom: e,
            win: t,
            serializer: n,
            editor: o,
            expand: (t={
                type: "word"
            })=>u(Ef(e).expand(c(), t)),
            collapse: l,
            setCursorLocation: (t,n)=>{
                const r = e.createRng();
                C(t) && C(n) ? (r.setStart(t, n),
                r.setEnd(t, n),
                u(r),
                l(!1)) : (qu(e, r, o.getBody(), !0),
                u(r))
            }
            ,
            getContent: e=>((e,t={})=>((e,t,n)=>kC(e).selection.getContent(t, n))(e, t.format ? t.format : "html", t))(o, e),
            setContent: i,
            getBookmark: (e,t)=>g.getBookmark(e, t),
            moveToBookmark: e=>g.moveToBookmark(e),
            select: (t,n)=>(((e,t,n)=>I.from(t).bind((t=>I.from(t.parentNode).map((o=>{
                const r = e.nodeIndex(t)
                  , s = e.createRng();
                return s.setStart(o, r),
                s.setEnd(o, r + 1),
                n && (qu(e, s, t, !0),
                qu(e, s, t, !1)),
                s
            }
            )))))(e, t, n).each(u),
            t),
            isCollapsed: ()=>{
                const e = c()
                  , t = d();
                return !(!e || e.item) && (e.compareEndPoints ? 0 === e.compareEndPoints("StartToEnd", e) : !t || e.collapsed)
            }
            ,
            isEditable: ()=>{
                const t = c()
                  , n = o.getBody().querySelectorAll('[data-mce-selected="1"]');
                return n.length > 0 ? ne(n, (t=>e.isEditable(t.parentElement))) : t.startContainer === t.endContainer ? e.isEditable(t.startContainer) : e.isEditable(t.startContainer) && e.isEditable(t.endContainer)
            }
            ,
            isForward: m,
            setNode: t=>(i(e.getOuterHTML(t)),
            t),
            getNode: ()=>((e,t)=>{
                if (!t)
                    return e;
                let n = t.startContainer
                  , o = t.endContainer;
                const r = t.startOffset
                  , s = t.endOffset;
                let a = t.commonAncestorContainer;
                t.collapsed || (n === o && s - r < 2 && n.hasChildNodes() && (a = n.childNodes[r]),
                Xo(n) && Xo(o) && (n = n.length === r ? vg(n.nextSibling, !0) : n.parentNode,
                o = 0 === s ? vg(o.previousSibling, !1) : o.parentNode,
                n && n === o && (a = n)));
                const i = Xo(a) ? a.parentNode : a;
                return jo(i) ? i : e
            }
            )(o.getBody(), c()),
            getSel: d,
            setRng: u,
            getRng: c,
            getStart: e=>hg(o.getBody(), c(), e),
            getEnd: e=>bg(o.getBody(), c(), e),
            getSelectedBlocks: (t,n)=>((e,t,n,o)=>{
                const r = []
                  , s = e.getRoot()
                  , a = e.getParent(n || hg(s, t, t.collapsed), e.isBlock)
                  , i = e.getParent(o || bg(s, t, t.collapsed), e.isBlock);
                if (a && a !== s && r.push(a),
                a && i && a !== i) {
                    let t;
                    const n = new Fo(a,s);
                    for (; (t = n.next()) && t !== i; )
                        e.isBlock(t) && r.push(t)
                }
                return i && a !== i && i !== s && r.push(i),
                r
            }
            )(e, c(), t, n),
            normalize: ()=>{
                const t = c()
                  , n = d();
                if (!(Fu(n).length > 1) && Wu(o)) {
                    const n = wf(e, t);
                    return n.each((e=>{
                        u(e, m())
                    }
                    )),
                    n.getOr(t)
                }
                return t
            }
            ,
            selectorChanged: (e,t)=>(a(e, t),
            f),
            selectorChangedWithUnbind: a,
            getScrollContainer: ()=>{
                let t, n = e.getRoot();
                for (; n && "BODY" !== n.nodeName; ) {
                    if (n.scrollHeight > n.clientHeight) {
                        t = n;
                        break
                    }
                    n = n.parentNode
                }
                return t
            }
            ,
            scrollIntoView: (e,t)=>{
                C(e) ? ((e,t,n)=>{
                    (e.inline ? jf : $f)(e, t, n)
                }
                )(o, e, t) : Vf(o, c(), t)
            }
            ,
            placeCaretAt: (e,t)=>u(ff(e, t, o.getDoc())),
            getBoundingClientRect: ()=>{
                const e = c();
                return e.collapsed ? Bi.fromRangeStart(e).getClientRects()[0] : e.getBoundingClientRect()
            }
            ,
            destroy: ()=>{
                t = r = s = null,
                p.destroy()
            }
        }
          , g = Im(f)
          , p = Xm(f, o);
        return f.bookmarkManager = g,
        f.controlSelection = p,
        f
    }
      , OC = (e,t,n)=>{
        -1 === Dt.inArray(t, n) && (e.addAttributeFilter(n, ((e,t)=>{
            let n = e.length;
            for (; n--; )
                e[n].attr(t, null)
        }
        )),
        t.push(n))
    }
      , TC = (e,t)=>{
        const n = ["data-mce-selected"]
          , o = t && t.dom ? t.dom : Na.DOM
          , r = t && t.schema ? t.schema : ia(e);
        e.entity_encoding = e.entity_encoding || "named",
        e.remove_trailing_brs = !("remove_trailing_brs"in e) || e.remove_trailing_brs;
        const s = Hy(e, r);
        return ((e,t,n)=>{
            e.addAttributeFilter("data-mce-tabindex", ((e,t)=>{
                let n = e.length;
                for (; n--; ) {
                    const o = e[n];
                    o.attr("tabindex", o.attr("data-mce-tabindex")),
                    o.attr(t, null)
                }
            }
            )),
            e.addAttributeFilter("src,href,style", ((e,o)=>{
                const r = "data-mce-" + o
                  , s = t.url_converter
                  , a = t.url_converter_scope;
                let i = e.length;
                for (; i--; ) {
                    const t = e[i];
                    let l = t.attr(r);
                    void 0 !== l ? (t.attr(o, l.length > 0 ? l : null),
                    t.attr(r, null)) : (l = t.attr(o),
                    "style" === o ? l = n.serializeStyle(n.parseStyle(l), t.name) : s && (l = s.call(a, l, o, t.name)),
                    t.attr(o, l.length > 0 ? l : null))
                }
            }
            )),
            e.addAttributeFilter("class", (e=>{
                let t = e.length;
                for (; t--; ) {
                    const n = e[t];
                    let o = n.attr("class");
                    o && (o = o.replace(/(?:^|\s)mce-item-\w+(?!\S)/g, ""),
                    n.attr("class", o.length > 0 ? o : null))
                }
            }
            )),
            e.addAttributeFilter("data-mce-type", ((e,t,n)=>{
                let o = e.length;
                for (; o--; ) {
                    const t = e[o];
                    if ("bookmark" === t.attr("data-mce-type") && !n.cleanup) {
                        const e = I.from(t.firstChild).exists((e=>{
                            var t;
                            return !Dr(null !== (t = e.value) && void 0 !== t ? t : "")
                        }
                        ));
                        e ? t.unwrap() : t.remove()
                    }
                }
            }
            )),
            e.addNodeFilter("noscript", (e=>{
                var t;
                let n = e.length;
                for (; n--; ) {
                    const o = e[n].firstChild;
                    o && (o.value = Gs.decode(null !== (t = o.value) && void 0 !== t ? t : ""))
                }
            }
            )),
            e.addNodeFilter("script,style", ((e,n)=>{
                var o;
                const r = e=>e.replace(/(<!--\[CDATA\[|\]\]-->)/g, "\n").replace(/^[\r\n]*|[\r\n]*$/g, "").replace(/^\s*((<!--)?(\s*\/\/)?\s*<!\[CDATA\[|(<!--\s*)?\/\*\s*<!\[CDATA\[\s*\*\/|(\/\/)?\s*<!--|\/\*\s*<!--\s*\*\/)\s*[\r\n]*/gi, "").replace(/\s*(\/\*\s*\]\]>\s*\*\/(-->)?|\s*\/\/\s*\]\]>(-->)?|\/\/\s*(-->)?|\]\]>|\/\*\s*-->\s*\*\/|\s*-->\s*)\s*$/g, "");
                let s = e.length;
                for (; s--; ) {
                    const a = e[s]
                      , i = a.firstChild
                      , l = null !== (o = null == i ? void 0 : i.value) && void 0 !== o ? o : "";
                    if ("script" === n) {
                        const e = a.attr("type");
                        e && a.attr("type", "mce-no/type" === e ? null : e.replace(/^mce\-/, "")),
                        "xhtml" === t.element_format && i && l.length > 0 && (i.value = "// <![CDATA[\n" + r(l) + "\n// ]]>")
                    } else
                        "xhtml" === t.element_format && i && l.length > 0 && (i.value = "\x3c!--\n" + r(l) + "\n--\x3e")
                }
            }
            )),
            e.addNodeFilter("#comment", (e=>{
                let o = e.length;
                for (; o--; ) {
                    const r = e[o]
                      , s = r.value;
                    t.preserve_cdata && 0 === (null == s ? void 0 : s.indexOf("[CDATA[")) ? (r.name = "#cdata",
                    r.type = 4,
                    r.value = n.decode(s.replace(/^\[CDATA\[|\]\]$/g, ""))) : 0 === (null == s ? void 0 : s.indexOf("mce:protected ")) && (r.name = "#text",
                    r.type = 3,
                    r.raw = !0,
                    r.value = unescape(s).substr(14))
                }
            }
            )),
            e.addNodeFilter("xml:namespace,input", ((e,t)=>{
                let n = e.length;
                for (; n--; ) {
                    const o = e[n];
                    7 === o.type ? o.remove() : 1 === o.type && ("input" !== t || o.attr("type") || o.attr("type", "text"))
                }
            }
            )),
            e.addAttributeFilter("data-mce-type", (t=>{
                q(t, (t=>{
                    "format-caret" === t.attr("data-mce-type") && (t.isEmpty(e.schema.getNonEmptyElements()) ? t.remove() : t.unwrap())
                }
                ))
            }
            )),
            e.addAttributeFilter("data-mce-src,data-mce-href,data-mce-style,data-mce-selected,data-mce-expando,data-mce-block,data-mce-type,data-mce-resize,data-mce-placeholder", ((e,t)=>{
                let n = e.length;
                for (; n--; )
                    e[n].attr(t, null)
            }
            ))
        }
        )(s, e, o),
        {
            schema: r,
            addNodeFilter: s.addNodeFilter,
            addAttributeFilter: s.addAttributeFilter,
            serialize: (n,a={})=>{
                const i = {
                    format: "html",
                    ...a
                }
                  , l = ((e,t,n)=>((e,t)=>C(e) && e.hasEventListeners("PreProcess") && !t.no_events)(e, n) ? ((e,t,n)=>{
                    let o;
                    const r = e.dom;
                    let s = t.cloneNode(!0);
                    const a = document.implementation;
                    if (a.createHTMLDocument) {
                        const e = a.createHTMLDocument("");
                        Dt.each("BODY" === s.nodeName ? s.childNodes : [s], (t=>{
                            e.body.appendChild(e.importNode(t, !0))
                        }
                        )),
                        s = "BODY" !== s.nodeName ? e.body.firstChild : e.body,
                        o = r.doc,
                        r.doc = e
                    }
                    return ((e,t)=>{
                        e.dispatch("PreProcess", t)
                    }
                    )(e, {
                        ...n,
                        node: s
                    }),
                    o && (r.doc = o),
                    s
                }
                )(e, t, n) : t)(t, n, i)
                  , d = ((e,t,n)=>{
                    const o = Pr(n.getInner ? t.innerHTML : e.getOuterHTML(t));
                    return n.selection || _r(bn(t)) ? o : Dt.trim(o)
                }
                )(o, l, i)
                  , c = ((e,t,n)=>{
                    const o = n.selection ? {
                        forced_root_block: !1,
                        ...n
                    } : n
                      , r = e.parse(t, o);
                    return (e=>{
                        const t = e=>"br" === (null == e ? void 0 : e.name)
                          , n = e.lastChild;
                        if (t(n)) {
                            const e = n.prev;
                            t(e) && (n.remove(),
                            e.remove())
                        }
                    }
                    )(r),
                    r
                }
                )(s, d, i);
                return "tree" === i.format ? c : ((e,t,n,o,r)=>{
                    const s = ((e,t,n)=>Ug(e, t).serialize(n))(t, n, o);
                    return ((e,t,n)=>{
                        if (!t.no_events && e) {
                            const o = ((e,t)=>e.dispatch("PostProcess", t))(e, {
                                ...t,
                                content: n
                            });
                            return o.content
                        }
                        return n
                    }
                    )(e, r, s)
                }
                )(t, e, r, c, i)
            }
            ,
            addRules: r.addValidElements,
            setRules: r.setValidElements,
            addTempAttr: O(OC, s, n),
            getTempAttrs: N(n),
            getNodeFilters: s.getNodeFilters,
            getAttributeFilters: s.getAttributeFilters,
            removeNodeFilter: s.removeNodeFilter,
            removeAttributeFilter: s.removeAttributeFilter
        }
    }
      , BC = (e,t)=>{
        const n = TC(e, t);
        return {
            schema: n.schema,
            addNodeFilter: n.addNodeFilter,
            addAttributeFilter: n.addAttributeFilter,
            serialize: n.serialize,
            addRules: n.addRules,
            setRules: n.setRules,
            addTempAttr: n.addTempAttr,
            getTempAttrs: n.getTempAttrs,
            getNodeFilters: n.getNodeFilters,
            getAttributeFilters: n.getAttributeFilters,
            removeNodeFilter: n.removeNodeFilter,
            removeAttributeFilter: n.removeAttributeFilter
        }
    }
      , DC = (e,t,n={})=>{
        const o = ((e,t)=>({
            format: "html",
            ...e,
            set: !0,
            content: t
        }))(n, t);
        return Wy(e, o).map((t=>{
            const n = ((e,t,n)=>xC(e).editor.setContent(t, n))(e, t.content, t);
            return Ky(e, n.html, t),
            n.content
        }
        )).getOr(t)
    }
      , PC = "autoresize_on_init,content_editable_state,padd_empty_with_br,block_elements,boolean_attributes,editor_deselector,editor_selector,elements,file_browser_callback_types,filepicker_validator_handler,force_hex_style_colors,force_p_newlines,gecko_spellcheck,images_dataimg_filter,media_scripts,mode,move_caret_before_on_enter_elements,non_empty_elements,self_closing_elements,short_ended_elements,special,spellchecker_select_languages,spellchecker_whitelist,tab_focus,tabfocus_elements,table_responsive_width,text_block_elements,text_inline_elements,toolbar_drawer,types,validate,whitespace_elements,paste_enable_default_filters,paste_filter_drop,paste_word_valid_elements,paste_retain_style_properties,paste_convert_word_fake_lists".split(",")
      , LC = "template_cdate_classes,template_mdate_classes,template_selected_content_classes,template_preview_replace_values,template_replace_values,templates,template_cdate_format,template_mdate_format".split(",")
      , MC = "bbcode,colorpicker,contextmenu,fullpage,legacyoutput,spellchecker,textcolor".split(",")
      , IC = [{
        name: "template",
        replacedWith: "Advanced Template"
    }]
      , FC = (e,t)=>{
        const n = G(t, (t=>ke(e, t)));
        return ae(n)
    }
      , UC = e=>{
        const t = FC(e, PC)
          , n = e.forced_root_block;
        return !1 !== n && "" !== n || t.push("forced_root_block (false only)"),
        ae(t)
    }
      , zC = e=>FC(e, LC)
      , jC = (e,t)=>{
        const n = Dt.makeMap(e.plugins, " ")
          , o = G(t, (e=>ke(n, e)));
        return ae(o)
    }
      , HC = e=>jC(e, MC)
      , $C = e=>jC(e, IC.map((e=>e.name)))
      , VC = e=>J(IC, (t=>t.name === e)).fold((()=>e), (t=>`${e}, replaced by ${t.replacedWith}`))
      , qC = Na.DOM
      , WC = e=>I.from(e).each((e=>e.destroy()))
      , KC = (()=>{
        const e = {};
        return {
            add: (t,n)=>{
                e[t] = n
            }
            ,
            get: t=>e[t] ? e[t] : {
                icons: {}
            },
            has: t=>ke(e, t)
        }
    }
    )()
      , GC = La.ModelManager
      , YC = (e,t)=>t.dom[e]
      , XC = (e,t)=>parseInt(ao(t, e), 10)
      , QC = O(YC, "clientWidth")
      , JC = O(YC, "clientHeight")
      , ZC = O(XC, "margin-top")
      , ew = O(XC, "margin-left")
      , tw = e=>{
        const t = []
          , n = ()=>{
            const t = e.theme;
            return t && t.getNotificationManagerImpl ? t.getNotificationManagerImpl() : (()=>{
                const e = ()=>{
                    throw new Error("Theme did not provide a NotificationManager implementation.")
                }
                ;
                return {
                    open: e,
                    close: e,
                    getArgs: e
                }
            }
            )()
        }
          , o = ()=>I.from(t[0])
          , r = ()=>{
            q(t, (e=>{
                e.reposition()
            }
            ))
        }
          , s = e=>{
            Z(t, (t=>t === e)).each((e=>{
                t.splice(e, 1)
            }
            ))
        }
          , a = (a,i=!0)=>e.removed || !(e=>{
            return (t = e.inline ? e.getBody() : e.getContentAreaContainer(),
            I.from(t).map(bn)).map(Kn).getOr(!1);
            var t
        }
        )(e) ? {} : (i && e.dispatch("BeforeOpenNotification", {
            notification: a
        }),
        J(t, (e=>{
            return t = n().getArgs(e),
            o = a,
            !(t.type !== o.type || t.text !== o.text || t.progressBar || t.timeout || o.progressBar || o.timeout);
            var t, o
        }
        )).getOrThunk((()=>{
            e.editorManager.setActive(e);
            const i = n().open(a, (()=>{
                s(i),
                r(),
                o().fold((()=>e.focus()), (e=>qf(bn(e.getEl()))))
            }
            ));
            return (e=>{
                t.push(e)
            }
            )(i),
            r(),
            e.dispatch("OpenNotification", {
                notification: {
                    ...i
                }
            }),
            i
        }
        )))
          , i = N(t);
        return (e=>{
            e.on("SkinLoaded", (()=>{
                const t = td(e);
                t && a({
                    text: t,
                    type: "warning",
                    timeout: 0
                }, !1),
                r()
            }
            )),
            e.on("show ResizeEditor ResizeWindow NodeChange", (()=>{
                requestAnimationFrame(r)
            }
            )),
            e.on("remove", (()=>{
                q(t.slice(), (e=>{
                    n().close(e)
                }
                ))
            }
            ))
        }
        )(e),
        {
            open: a,
            close: ()=>{
                o().each((e=>{
                    n().close(e),
                    s(e),
                    r()
                }
                ))
            }
            ,
            getNotifications: i
        }
    }
      , nw = La.PluginManager
      , ow = La.ThemeManager
      , rw = e=>{
        let t = [];
        const n = ()=>{
            const t = e.theme;
            return t && t.getWindowManagerImpl ? t.getWindowManagerImpl() : (()=>{
                const e = ()=>{
                    throw new Error("Theme did not provide a WindowManager implementation.")
                }
                ;
                return {
                    open: e,
                    openUrl: e,
                    alert: e,
                    confirm: e,
                    close: e
                }
            }
            )()
        }
          , o = (e,t)=>(...n)=>t ? t.apply(e, n) : void 0
          , r = n=>{
            (t=>{
                e.dispatch("CloseWindow", {
                    dialog: t
                })
            }
            )(n),
            t = G(t, (e=>e !== n)),
            0 === t.length && e.focus()
        }
          , s = n=>{
            e.editorManager.setActive(e),
            eg(e),
            e.ui.show();
            const o = n();
            return (n=>{
                t.push(n),
                (t=>{
                    e.dispatch("OpenWindow", {
                        dialog: t
                    })
                }
                )(n)
            }
            )(o),
            o
        }
        ;
        return e.on("remove", (()=>{
            q(t, (e=>{
                n().close(e)
            }
            ))
        }
        )),
        {
            open: (e,t)=>s((()=>n().open(e, t, r))),
            openUrl: e=>s((()=>n().openUrl(e, r))),
            alert: (e,t,r)=>{
                const s = n();
                s.alert(e, o(r || s, t))
            }
            ,
            confirm: (e,t,r)=>{
                const s = n();
                s.confirm(e, o(r || s, t))
            }
            ,
            close: ()=>{
                I.from(t[t.length - 1]).each((e=>{
                    n().close(e),
                    r(e)
                }
                ))
            }
        }
    }
      , sw = (e,t)=>{
        e.notificationManager.open({
            type: "error",
            text: t
        })
    }
      , aw = (e,t)=>{
        e._skinLoaded ? sw(e, t) : e.on("SkinLoaded", (()=>{
            sw(e, t)
        }
        ))
    }
      , iw = (e,t,n)=>{
        Um(e, t, {
            message: n
        }),
        console.error(n)
    }
      , lw = (e,t,n)=>n ? `Failed to load ${e}: ${n} from url ${t}` : `Failed to load ${e} url: ${t}`
      , dw = (e,...t)=>{
        const n = window.console;
        n && (n.error ? n.error(e, ...t) : n.log(e, ...t))
    }
      , cw = (e,t)=>{
        const n = e.editorManager.baseURL + "/skins/content"
          , o = `content${e.editorManager.suffix}.css`;
        return V(t, (t=>(e=>/^[a-z0-9\-]+$/i.test(e))(t) && !e.inline ? `${n}/${t}/${o}` : e.documentBaseURI.toAbsolute(t)))
    }
      , uw = (e,t)=>{
        const n = {};
        return {
            findAll: (o,r=M)=>{
                const s = G((e=>e ? ce(e.getElementsByTagName("img")) : [])(o), (t=>{
                    const n = t.src;
                    return !t.hasAttribute("data-mce-bogus") && !t.hasAttribute("data-mce-placeholder") && !(!n || n === At.transparentSrc) && (He(n, "blob:") ? !e.isUploaded(n) && r(t) : !!He(n, "data:") && r(t))
                }
                ))
                  , a = V(s, (e=>{
                    const o = e.src;
                    if (ke(n, o))
                        return n[o].then((t=>m(t) ? t : {
                            image: e,
                            blobInfo: t.blobInfo
                        }));
                    {
                        const r = ((e,t)=>{
                            const n = ()=>Promise.reject("Invalid data URI");
                            if (He(t, "blob:")) {
                                const s = e.getByUri(t);
                                return C(s) ? Promise.resolve(s) : (o = t,
                                He(o, "blob:") ? (e=>fetch(e).then((e=>e.ok ? e.blob() : Promise.reject())).catch((()=>Promise.reject(`Cannot convert ${e} to Blob. Resource might not exist or is inaccessible.`))))(o) : He(o, "data:") ? (r = o,
                                new Promise(((e,t)=>{
                                    hv(r).bind((({type: e, data: t, base64Encoded: n})=>bv(e, t, n))).fold((()=>t("Invalid data URI")), e)
                                }
                                ))) : Promise.reject("Unknown URI format")).then((t=>vv(t).then((o=>Cv(o, !1, (n=>I.some(wv(e, t, n)))).getOrThunk(n)))))
                            }
                            var o, r;
                            return He(t, "data:") ? xv(e, t).fold(n, (e=>Promise.resolve(e))) : Promise.reject("Unknown image data format")
                        }
                        )(t, o).then((t=>(delete n[o],
                        {
                            image: e,
                            blobInfo: t
                        }))).catch((e=>(delete n[o],
                        e)));
                        return n[o] = r,
                        r
                    }
                }
                ));
                return Promise.all(a)
            }
        }
    }
      , mw = ()=>{
        let e = {};
        const t = (e,t)=>({
            status: e,
            resultUri: t
        })
          , n = t=>t in e;
        return {
            hasBlobUri: n,
            getResultUri: t=>{
                const n = e[t];
                return n ? n.resultUri : null
            }
            ,
            isPending: t=>!!n(t) && 1 === e[t].status,
            isUploaded: t=>!!n(t) && 2 === e[t].status,
            markPending: n=>{
                e[n] = t(1, null)
            }
            ,
            markUploaded: (n,o)=>{
                e[n] = t(2, o)
            }
            ,
            removeFailed: t=>{
                delete e[t]
            }
            ,
            destroy: ()=>{
                e = {}
            }
        }
    }
    ;
    let fw = 0;
    const gw = (e,t)=>{
        const n = {}
          , o = (e,n)=>new Promise(((o,r)=>{
            const s = new XMLHttpRequest;
            s.open("POST", t.url),
            s.withCredentials = t.credentials,
            s.upload.onprogress = e=>{
                n(e.loaded / e.total * 100)
            }
            ,
            s.onerror = ()=>{
                r("Image upload failed due to a XHR Transport error. Code: " + s.status)
            }
            ,
            s.onload = ()=>{
                if (s.status < 200 || s.status >= 300)
                    return void r("HTTP Error: " + s.status);
                console.log(s.responseText);
                const e = JSON.parse(s.responseText);
                var n, a;
                e && m(e.location) ? o((n = t.basePath,
                a = e.location,
                n ? n.replace(/\/$/, "") + "/" + a.replace(/^\//, "") : a)) : r("Invalid JSON: " + s.responseText)
            }
            ;
            const a = new FormData;
            a.append("file", e.blob(), e.filename()),
            s.send(a)
        }
        ))
          , r = w(t.handler) ? t.handler : o
          , s = (e,t)=>({
            url: t,
            blobInfo: e,
            status: !0
        })
          , a = (e,t)=>({
            url: "",
            blobInfo: e,
            status: !1,
            error: t
        })
          , i = (e,t)=>{
            Dt.each(n[e], (e=>{
                e(t)
            }
            )),
            delete n[e]
        }
        ;
        return {
            upload: (l,d)=>t.url || r !== o ? ((t,o)=>(t = Dt.grep(t, (t=>!e.isUploaded(t.blobUri()))),
            Promise.all(Dt.map(t, (t=>e.isPending(t.blobUri()) ? (e=>{
                const t = e.blobUri();
                return new Promise((e=>{
                    n[t] = n[t] || [],
                    n[t].push(e)
                }
                ))
            }
            )(t) : ((t,n,o)=>(e.markPending(t.blobUri()),
            new Promise((r=>{
                let l, d;
                try {
                    const c = ()=>{
                        l && (l.close(),
                        d = E)
                    }
                      , u = n=>{
                        c(),
                        e.markUploaded(t.blobUri(), n),
                        i(t.blobUri(), s(t, n)),
                        r(s(t, n))
                    }
                      , f = n=>{
                        c(),
                        e.removeFailed(t.blobUri()),
                        i(t.blobUri(), a(t, n)),
                        r(a(t, n))
                    }
                    ;
                    d = e=>{
                        e < 0 || e > 100 || I.from(l).orThunk((()=>I.from(o).map(D))).each((t=>{
                            l = t,
                            t.progressBar.value(e)
                        }
                        ))
                    }
                    ,
                    n(t, d).then(u, (e=>{
                        f(m(e) ? {
                            message: e
                        } : e)
                    }
                    ))
                } catch (e) {
                    r(a(t, e))
                }
            }
            ))))(t, r, o))))))(l, d) : new Promise((e=>{
                e([])
            }
            ))
        }
    }
      , pw = e=>()=>e.notificationManager.open({
        text: e.translate("Image uploading..."),
        type: "info",
        timeout: -1,
        progressBar: !0
    })
      , hw = (e,t)=>gw(t, {
        url: Ml(e),
        basePath: Il(e),
        credentials: Fl(e),
        handler: Ul(e)
    })
      , bw = e=>{
        const t = (()=>{
            let e = [];
            const t = e=>{
                if (!e.blob || !e.base64)
                    throw new Error("blob and base64 representations of the image are required for BlobInfo to be created");
                const t = e.id || "blobid" + fw++ + (()=>{
                    const e = ()=>Math.round(4294967295 * Math.random()).toString(36);
                    return "s" + (new Date).getTime().toString(36) + e() + e() + e()
                }
                )()
                  , n = e.name || t
                  , o = e.blob;
                var r;
                return {
                    id: N(t),
                    name: N(n),
                    filename: N(e.filename || n + "." + (r = o.type,
                    {
                        "image/jpeg": "jpg",
                        "image/jpg": "jpg",
                        "image/gif": "gif",
                        "image/png": "png",
                        "image/apng": "apng",
                        "image/avif": "avif",
                        "image/svg+xml": "svg",
                        "image/webp": "webp",
                        "image/bmp": "bmp",
                        "image/tiff": "tiff"
                    }[r.toLowerCase()] || "dat")),
                    blob: N(o),
                    base64: N(e.base64),
                    blobUri: N(e.blobUri || URL.createObjectURL(o)),
                    uri: N(e.uri)
                }
            }
              , n = t=>J(e, t).getOrUndefined()
              , o = e=>n((t=>t.id() === e));
            return {
                create: (e,n,o,r,s)=>{
                    if (m(e))
                        return t({
                            id: e,
                            name: r,
                            filename: s,
                            blob: n,
                            base64: o
                        });
                    if (f(e))
                        return t(e);
                    throw new Error("Unknown input type")
                }
                ,
                add: t=>{
                    o(t.id()) || e.push(t)
                }
                ,
                get: o,
                getByUri: e=>n((t=>t.blobUri() === e)),
                getByData: (e,t)=>n((n=>n.base64() === e && n.blob().type === t)),
                findFirst: n,
                removeByUri: t=>{
                    e = G(e, (e=>e.blobUri() !== t || (URL.revokeObjectURL(e.blobUri()),
                    !1)))
                }
                ,
                destroy: ()=>{
                    q(e, (e=>{
                        URL.revokeObjectURL(e.blobUri())
                    }
                    )),
                    e = []
                }
            }
        }
        )();
        let n, o;
        const r = mw()
          , s = []
          , a = t=>n=>e.selection ? t(n) : []
          , i = (e,t,n)=>{
            let o = 0;
            do {
                o = e.indexOf(t, o),
                -1 !== o && (e = e.substring(0, o) + n + e.substr(o + t.length),
                o += n.length - t.length + 1)
            } while (-1 !== o);
            return e
        }
          , l = (e,t,n)=>{
            const o = `src="${n}"${n === At.transparentSrc ? ' data-mce-placeholder="1"' : ""}`;
            return e = i(e, `src="${t}"`, o),
            i(e, 'data-mce-src="' + t + '"', 'data-mce-src="' + n + '"')
        }
          , d = (t,n)=>{
            q(e.undoManager.data, (e=>{
                "fragmented" === e.type ? e.fragments = V(e.fragments, (e=>l(e, t, n))) : e.content = l(e.content, t, n)
            }
            ))
        }
          , c = ()=>(n || (n = hw(e, r)),
        p().then(a((o=>{
            const r = V(o, (e=>e.blobInfo));
            return n.upload(r, pw(e)).then(a((n=>{
                const r = [];
                let s = !1;
                const a = V(n, ((n,a)=>{
                    const {blobInfo: i, image: l} = o[a];
                    let c = !1;
                    return n.status && Dl(e) ? (n.url && !je(l.src, n.url) && (s = !0),
                    t.removeByUri(l.src),
                    wC(e) || ((t,n)=>{
                        const o = e.convertURL(n, "src");
                        var r;
                        d(t.src, n),
                        Qt(bn(t), {
                            src: Bl(e) ? (r = n,
                            r + (-1 === r.indexOf("?") ? "?" : "&") + (new Date).getTime()) : n,
                            "data-mce-src": o
                        })
                    }
                    )(l, n.url)) : n.error && (n.error.remove && (d(l.src, At.transparentSrc),
                    r.push(l),
                    c = !0),
                    ((e,t)=>{
                        aw(e, Pa.translate(["Failed to upload image: {0}", t]))
                    }
                    )(e, n.error.message)),
                    {
                        element: l,
                        status: n.status,
                        uploadUri: n.url,
                        blobInfo: i,
                        removed: c
                    }
                }
                ));
                return r.length > 0 && !wC(e) ? e.undoManager.transact((()=>{
                    q(r, (n=>{
                        e.dom.remove(n),
                        t.removeByUri(n.src)
                    }
                    ))
                }
                )) : s && e.undoManager.dispatchChange(),
                a
            }
            )))
        }
        ))))
          , u = ()=>Tl(e) ? c() : Promise.resolve([])
          , g = e=>ne(s, (t=>t(e)))
          , p = ()=>(o || (o = uw(r, t)),
        o.findAll(e.getBody(), g).then(a((t=>{
            const n = G(t, (t=>!m(t) || (aw(e, t),
            !1)));
            return wC(e) || q(n, (e=>{
                d(e.image.src, e.blobInfo.blobUri()),
                e.image.src = e.blobInfo.blobUri(),
                e.image.removeAttribute("data-mce-src")
            }
            )),
            n
        }
        ))))
          , h = n=>n.replace(/src="(blob:[^"]+)"/g, ((n,o)=>{
            const s = r.getResultUri(o);
            if (s)
                return 'src="' + s + '"';
            let a = t.getByUri(o);
            return a || (a = X(e.editorManager.get(), ((e,t)=>e || t.editorUpload && t.editorUpload.blobCache.getByUri(o)), void 0)),
            a ? 'src="data:' + a.blob().type + ";base64," + a.base64() + '"' : n
        }
        ));
        return e.on("SetContent", (()=>{
            Tl(e) ? u() : p()
        }
        )),
        e.on("RawSaveContent", (e=>{
            e.content = h(e.content)
        }
        )),
        e.on("GetContent", (e=>{
            e.source_view || "raw" === e.format || "tree" === e.format || (e.content = h(e.content))
        }
        )),
        e.on("PostRender", (()=>{
            e.parser.addNodeFilter("img", (e=>{
                q(e, (e=>{
                    const n = e.attr("src");
                    if (!n || t.getByUri(n))
                        return;
                    const o = r.getResultUri(n);
                    o && e.attr("src", o)
                }
                ))
            }
            ))
        }
        )),
        {
            blobCache: t,
            addFilter: e=>{
                s.push(e)
            }
            ,
            uploadImages: c,
            uploadImagesAuto: u,
            scanForImages: p,
            destroy: ()=>{
                t.destroy(),
                r.destroy(),
                o = n = null
            }
        }
    }
      , vw = {
        remove_similar: !0,
        inherit: !1
    }
      , yw = {
        selector: "td,th",
        ...vw
    }
      , Cw = {
        tablecellbackgroundcolor: {
            styles: {
                backgroundColor: "%value"
            },
            ...yw
        },
        tablecellverticalalign: {
            styles: {
                "vertical-align": "%value"
            },
            ...yw
        },
        tablecellbordercolor: {
            styles: {
                borderColor: "%value"
            },
            ...yw
        },
        tablecellclass: {
            classes: ["%value"],
            ...yw
        },
        tableclass: {
            selector: "table",
            classes: ["%value"],
            ...vw
        },
        tablecellborderstyle: {
            styles: {
                borderStyle: "%value"
            },
            ...yw
        },
        tablecellborderwidth: {
            styles: {
                borderWidth: "%value"
            },
            ...yw
        }
    }
      , ww = N(Cw)
      , xw = Dt.each
      , kw = Na.DOM
      , Ew = e=>C(e) && f(e)
      , Sw = (e,t)=>{
        const n = t && t.schema || ia({})
          , o = e=>{
            const t = m(e) ? {
                name: e,
                classes: [],
                attrs: {}
            } : e
              , n = kw.create(t.name);
            return ((e,t)=>{
                t.classes.length > 0 && kw.addClass(e, t.classes.join(" ")),
                kw.setAttribs(e, t.attrs)
            }
            )(n, t),
            n
        }
          , r = (e,t,s)=>{
            let a;
            const i = t[0]
              , l = Ew(i) ? i.name : void 0
              , d = ((e,t)=>{
                const o = n.getElementRule(e.nodeName.toLowerCase())
                  , r = null == o ? void 0 : o.parentsRequired;
                return !(!r || !r.length) && (t && H(r, t) ? t : r[0])
            }
            )(e, l);
            if (d)
                l === d ? (a = i,
                t = t.slice(1)) : a = d;
            else if (i)
                a = i,
                t = t.slice(1);
            else if (!s)
                return e;
            const c = a ? o(a) : kw.create("div");
            c.appendChild(e),
            s && Dt.each(s, (t=>{
                const n = o(t);
                c.insertBefore(n, e)
            }
            ));
            const u = Ew(a) ? a.siblings : void 0;
            return r(c, t, u)
        }
          , s = kw.create("div");
        if (e.length > 0) {
            const t = e[0]
              , n = o(t)
              , a = Ew(t) ? t.siblings : void 0;
            s.appendChild(r(n, e.slice(1), a))
        }
        return s
    }
      , _w = e=>{
        let t = "div";
        const n = {
            name: t,
            classes: [],
            attrs: {},
            selector: e = Dt.trim(e)
        };
        return "*" !== e && (t = e.replace(/(?:([#\.]|::?)([\w\-]+)|(\[)([^\]]+)\]?)/g, ((e,t,o,r,s)=>{
            switch (t) {
            case "#":
                n.attrs.id = o;
                break;
            case ".":
                n.classes.push(o);
                break;
            case ":":
                -1 !== Dt.inArray("checked disabled enabled read-only required".split(" "), o) && (n.attrs[o] = o)
            }
            if ("[" === r) {
                const e = s.match(/([\w\-]+)(?:\=\"([^\"]+))?/);
                e && (n.attrs[e[1]] = e[2])
            }
            return ""
        }
        ))),
        n.name = t || "div",
        n
    }
      , Nw = (e,t)=>{
        let n = ""
          , o = ld(e);
        if ("" === o)
            return "";
        const r = e=>m(e) ? e.replace(/%(\w+)/g, "") : ""
          , s = (t,n)=>kw.getStyle(null != n ? n : e.getBody(), t, !0);
        if (m(t)) {
            const n = e.formatter.get(t);
            if (!n)
                return "";
            t = n[0]
        }
        if ("preview"in t) {
            const e = t.preview;
            if (!1 === e)
                return "";
            o = e || o
        }
        let a, i = t.block || t.inline || "span";
        const l = (d = t.selector,
        m(d) ? (d = (d = d.split(/\s*,\s*/)[0]).replace(/\s*(~\+|~|\+|>)\s*/g, "$1"),
        Dt.map(d.split(/(?:>|\s+(?![^\[\]]+\]))/), (e=>{
            const t = Dt.map(e.split(/(?:~\+|~|\+)/), _w)
              , n = t.pop();
            return t.length && (n.siblings = t),
            n
        }
        )).reverse()) : []);
        var d;
        l.length > 0 ? (l[0].name || (l[0].name = i),
        i = t.selector,
        a = Sw(l, e)) : a = Sw([i], e);
        const c = kw.select(i, a)[0] || a.firstChild;
        xw(t.styles, ((e,t)=>{
            const n = r(e);
            n && kw.setStyle(c, t, n)
        }
        )),
        xw(t.attributes, ((e,t)=>{
            const n = r(e);
            n && kw.setAttrib(c, t, n)
        }
        )),
        xw(t.classes, (e=>{
            const t = r(e);
            kw.hasClass(c, t) || kw.addClass(c, t)
        }
        )),
        e.dispatch("PreviewFormats"),
        kw.setStyles(a, {
            position: "absolute",
            left: -65535
        }),
        e.getBody().appendChild(a);
        const u = s("fontSize")
          , f = /px$/.test(u) ? parseInt(u, 10) : 0;
        return xw(o.split(" "), (e=>{
            let t = s(e, c);
            if (!("background-color" === e && /transparent|rgba\s*\([^)]+,\s*0\)/.test(t) && (t = s(e),
            "#ffffff" === Iu(t).toLowerCase()) || "color" === e && "#000000" === Iu(t).toLowerCase())) {
                if ("font-size" === e && /em|%$/.test(t)) {
                    if (0 === f)
                        return;
                    t = parseFloat(t) / (/%$/.test(t) ? 100 : 1) * f + "px"
                }
                "border" === e && t && (n += "padding:0 2px;"),
                n += e + ":" + t + ";"
            }
        }
        )),
        e.dispatch("AfterPreviewFormats"),
        kw.remove(a),
        n
    }
      , Rw = e=>{
        const t = (e=>{
            const t = {}
              , n = (e,o)=>{
                e && (m(e) ? (p(o) || (o = [o]),
                q(o, (e=>{
                    v(e.deep) && (e.deep = !fm(e)),
                    v(e.split) && (e.split = !fm(e) || gm(e)),
                    v(e.remove) && fm(e) && !gm(e) && (e.remove = "none"),
                    fm(e) && gm(e) && (e.mixed = !0,
                    e.block_expand = !0),
                    m(e.classes) && (e.classes = e.classes.split(/\s+/))
                }
                )),
                t[e] = o) : ge(e, ((e,t)=>{
                    n(t, e)
                }
                )))
            }
            ;
            return n((e=>{
                const t = e.dom
                  , n = e.schema.type
                  , o = {
                    valigntop: [{
                        selector: "td,th",
                        styles: {
                            verticalAlign: "top"
                        }
                    }],
                    valignmiddle: [{
                        selector: "td,th",
                        styles: {
                            verticalAlign: "middle"
                        }
                    }],
                    valignbottom: [{
                        selector: "td,th",
                        styles: {
                            verticalAlign: "bottom"
                        }
                    }],
                    alignleft: [{
                        selector: "figure.image",
                        collapsed: !1,
                        classes: "align-left",
                        ceFalseOverride: !0,
                        preview: "font-family font-size"
                    }, {
                        selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li,pre",
                        styles: {
                            textAlign: "left"
                        },
                        inherit: !1,
                        preview: !1
                    }, {
                        selector: "img,audio,video",
                        collapsed: !1,
                        styles: {
                            float: "left"
                        },
                        preview: "font-family font-size"
                    }, {
                        selector: "table",
                        collapsed: !1,
                        styles: {
                            marginLeft: "0px",
                            marginRight: "auto"
                        },
                        onformat: e=>{
                            t.setStyle(e, "float", null)
                        }
                        ,
                        preview: "font-family font-size"
                    }, {
                        selector: ".mce-preview-object,[data-ephox-embed-iri]",
                        ceFalseOverride: !0,
                        styles: {
                            float: "left"
                        }
                    }],
                    aligncenter: [{
                        selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li,pre",
                        styles: {
                            textAlign: "center"
                        },
                        inherit: !1,
                        preview: "font-family font-size"
                    }, {
                        selector: "figure.image",
                        collapsed: !1,
                        classes: "align-center",
                        ceFalseOverride: !0,
                        preview: "font-family font-size"
                    }, {
                        selector: "img,audio,video",
                        collapsed: !1,
                        styles: {
                            display: "block",
                            marginLeft: "auto",
                            marginRight: "auto"
                        },
                        preview: !1
                    }, {
                        selector: "table",
                        collapsed: !1,
                        styles: {
                            marginLeft: "auto",
                            marginRight: "auto"
                        },
                        preview: "font-family font-size"
                    }, {
                        selector: ".mce-preview-object",
                        ceFalseOverride: !0,
                        styles: {
                            display: "table",
                            marginLeft: "auto",
                            marginRight: "auto"
                        },
                        preview: !1
                    }, {
                        selector: "[data-ephox-embed-iri]",
                        ceFalseOverride: !0,
                        styles: {
                            marginLeft: "auto",
                            marginRight: "auto"
                        },
                        preview: !1
                    }],
                    alignright: [{
                        selector: "figure.image",
                        collapsed: !1,
                        classes: "align-right",
                        ceFalseOverride: !0,
                        preview: "font-family font-size"
                    }, {
                        selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li,pre",
                        styles: {
                            textAlign: "right"
                        },
                        inherit: !1,
                        preview: "font-family font-size"
                    }, {
                        selector: "img,audio,video",
                        collapsed: !1,
                        styles: {
                            float: "right"
                        },
                        preview: "font-family font-size"
                    }, {
                        selector: "table",
                        collapsed: !1,
                        styles: {
                            marginRight: "0px",
                            marginLeft: "auto"
                        },
                        onformat: e=>{
                            t.setStyle(e, "float", null)
                        }
                        ,
                        preview: "font-family font-size"
                    }, {
                        selector: ".mce-preview-object,[data-ephox-embed-iri]",
                        ceFalseOverride: !0,
                        styles: {
                            float: "right"
                        },
                        preview: !1
                    }],
                    alignjustify: [{
                        selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li,pre",
                        styles: {
                            textAlign: "justify"
                        },
                        inherit: !1,
                        preview: "font-family font-size"
                    }],
                    bold: [{
                        inline: "strong",
                        remove: "all",
                        preserve_attributes: ["class", "style"]
                    }, {
                        inline: "span",
                        styles: {
                            fontWeight: "bold"
                        }
                    }, {
                        inline: "b",
                        remove: "all",
                        preserve_attributes: ["class", "style"]
                    }],
                    italic: [{
                        inline: "em",
                        remove: "all",
                        preserve_attributes: ["class", "style"]
                    }, {
                        inline: "span",
                        styles: {
                            fontStyle: "italic"
                        }
                    }, {
                        inline: "i",
                        remove: "all",
                        preserve_attributes: ["class", "style"]
                    }],
                    underline: [{
                        inline: "span",
                        styles: {
                            textDecoration: "underline"
                        },
                        exact: !0
                    }, {
                        inline: "u",
                        remove: "all",
                        preserve_attributes: ["class", "style"]
                    }],
                    strikethrough: (()=>{
                        const e = {
                            inline: "span",
                            styles: {
                                textDecoration: "line-through"
                            },
                            exact: !0
                        }
                          , t = {
                            inline: "strike",
                            remove: "all",
                            preserve_attributes: ["class", "style"]
                        }
                          , o = {
                            inline: "s",
                            remove: "all",
                            preserve_attributes: ["class", "style"]
                        };
                        return "html4" !== n ? [o, e, t] : [e, o, t]
                    }
                    )(),
                    forecolor: {
                        inline: "span",
                        styles: {
                            color: "%value"
                        },
                        links: !0,
                        remove_similar: !0,
                        clear_child_styles: !0
                    },
                    hilitecolor: {
                        inline: "span",
                        styles: {
                            backgroundColor: "%value"
                        },
                        links: !0,
                        remove_similar: !0,
                        clear_child_styles: !0
                    },
                    fontname: {
                        inline: "span",
                        toggle: !1,
                        styles: {
                            fontFamily: "%value"
                        },
                        clear_child_styles: !0
                    },
                    fontsize: {
                        inline: "span",
                        toggle: !1,
                        styles: {
                            fontSize: "%value"
                        },
                        clear_child_styles: !0
                    },
                    lineheight: {
                        selector: "h1,h2,h3,h4,h5,h6,p,li,td,th,div",
                        styles: {
                            lineHeight: "%value"
                        }
                    },
                    fontsize_class: {
                        inline: "span",
                        attributes: {
                            class: "%value"
                        }
                    },
                    blockquote: {
                        block: "blockquote",
                        wrapper: !0,
                        remove: "all"
                    },
                    subscript: {
                        inline: "sub"
                    },
                    superscript: {
                        inline: "sup"
                    },
                    code: {
                        inline: "code"
                    },
                    link: {
                        inline: "a",
                        selector: "a",
                        remove: "all",
                        split: !0,
                        deep: !0,
                        onmatch: (e,t,n)=>jo(e) && e.hasAttribute("href"),
                        onformat: (e,n,o)=>{
                            Dt.each(o, ((n,o)=>{
                                t.setAttrib(e, o, n)
                            }
                            ))
                        }
                    },
                    lang: {
                        inline: "span",
                        clear_child_styles: !0,
                        remove_similar: !0,
                        attributes: {
                            lang: "%value",
                            "data-mce-lang": e=>{
                                var t;
                                return null !== (t = null == e ? void 0 : e.customValue) && void 0 !== t ? t : null
                            }
                        }
                    },
                    removeformat: [{
                        selector: "b,strong,em,i,font,u,strike,s,sub,sup,dfn,code,samp,kbd,var,cite,mark,q,del,ins,small",
                        remove: "all",
                        split: !0,
                        expand: !1,
                        block_expand: !0,
                        deep: !0
                    }, {
                        selector: "span",
                        attributes: ["style", "class"],
                        remove: "empty",
                        split: !0,
                        expand: !1,
                        deep: !0
                    }, {
                        selector: "*",
                        attributes: ["style", "class"],
                        split: !1,
                        expand: !1,
                        deep: !0
                    }]
                };
                return Dt.each("p h1 h2 h3 h4 h5 h6 div address pre dt dd samp".split(/\s/), (e=>{
                    o[e] = {
                        block: e,
                        remove: "all"
                    }
                }
                )),
                o
            }
            )(e)),
            n(ww()),
            n(id(e)),
            {
                get: e=>C(e) ? t[e] : t,
                has: e=>ke(t, e),
                register: n,
                unregister: e=>(e && t[e] && delete t[e],
                t)
            }
        }
        )(e)
          , n = Oa({});
        return (e=>{
            e.addShortcut("meta+b", "", "Bold"),
            e.addShortcut("meta+i", "", "Italic"),
            e.addShortcut("meta+u", "", "Underline");
            for (let t = 1; t <= 6; t++)
                e.addShortcut("access+" + t, "", ["FormatBlock", !1, "h" + t]);
            e.addShortcut("access+7", "", ["FormatBlock", !1, "p"]),
            e.addShortcut("access+8", "", ["FormatBlock", !1, "div"]),
            e.addShortcut("access+9", "", ["FormatBlock", !1, "address"])
        }
        )(e),
        (e=>{
            e.on("mouseup keydown", (t=>{
                ((e,t)=>{
                    const n = e.selection
                      , o = e.getBody();
                    bb(e, null, !1),
                    8 !== t && 46 !== t || !n.isCollapsed() || n.getStart().innerHTML !== mb || bb(e, pu(o, n.getStart())),
                    37 !== t && 39 !== t || bb(e, pu(o, n.getStart()))
                }
                )(e, t.keyCode)
            }
            ))
        }
        )(e),
        wC(e) || ((e,t)=>{
            e.set({}),
            t.on("NodeChange", (n=>{
                mv(t, n.element, e.get())
            }
            )),
            t.on("FormatApply FormatRemove", (n=>{
                const o = I.from(n.node).map((e=>Yu(e) ? e : e.startContainer)).bind((e=>jo(e) ? I.some(e) : I.from(e.parentElement))).getOrThunk((()=>dv(t)));
                mv(t, o, e.get())
            }
            ))
        }
        )(n, e),
        {
            get: t.get,
            has: t.has,
            register: t.register,
            unregister: t.unregister,
            apply: (t,n,o)=>{
                ((e,t,n,o)=>{
                    kC(e).formatter.apply(t, n, o)
                }
                )(e, t, n, o)
            }
            ,
            remove: (t,n,o,r)=>{
                ((e,t,n,o,r)=>{
                    kC(e).formatter.remove(t, n, o, r)
                }
                )(e, t, n, o, r)
            }
            ,
            toggle: (t,n,o)=>{
                ((e,t,n,o)=>{
                    kC(e).formatter.toggle(t, n, o)
                }
                )(e, t, n, o)
            }
            ,
            match: (t,n,o,r)=>((e,t,n,o,r)=>kC(e).formatter.match(t, n, o, r))(e, t, n, o, r),
            closest: t=>((e,t)=>kC(e).formatter.closest(t))(e, t),
            matchAll: (t,n)=>((e,t,n)=>kC(e).formatter.matchAll(t, n))(e, t, n),
            matchNode: (t,n,o,r)=>((e,t,n,o,r)=>kC(e).formatter.matchNode(t, n, o, r))(e, t, n, o, r),
            canApply: t=>((e,t)=>kC(e).formatter.canApply(t))(e, t),
            formatChanged: (t,o,r,s)=>((e,t,n,o,r,s)=>kC(e).formatter.formatChanged(t, n, o, r, s))(e, n, t, o, r, s),
            getCssText: O(Nw, e)
        }
    }
      , Aw = e=>{
        switch (e.toLowerCase()) {
        case "undo":
        case "redo":
        case "mcefocus":
            return !0;
        default:
            return !1
        }
    }
      , Ow = e=>{
        const t = Ia()
          , n = Oa(0)
          , o = Oa(0)
          , r = {
            data: [],
            typing: !1,
            beforeChange: ()=>{
                ((e,t,n)=>{
                    kC(e).undoManager.beforeChange(t, n)
                }
                )(e, n, t)
            }
            ,
            add: (s,a)=>((e,t,n,o,r,s,a)=>kC(e).undoManager.add(t, n, o, r, s, a))(e, r, o, n, t, s, a),
            dispatchChange: ()=>{
                e.setDirty(!0);
                const t = mC(e);
                t.bookmark = Zi(e.selection),
                e.dispatch("change", {
                    level: t,
                    lastLevel: ie(r.data, o.get()).getOrUndefined()
                })
            }
            ,
            undo: ()=>((e,t,n,o)=>kC(e).undoManager.undo(t, n, o))(e, r, n, o),
            redo: ()=>((e,t,n)=>kC(e).undoManager.redo(t, n))(e, o, r.data),
            clear: ()=>{
                ((e,t,n)=>{
                    kC(e).undoManager.clear(t, n)
                }
                )(e, r, o)
            }
            ,
            reset: ()=>{
                ((e,t)=>{
                    kC(e).undoManager.reset(t)
                }
                )(e, r)
            }
            ,
            hasUndo: ()=>((e,t,n)=>kC(e).undoManager.hasUndo(t, n))(e, r, o),
            hasRedo: ()=>((e,t,n)=>kC(e).undoManager.hasRedo(t, n))(e, r, o),
            transact: t=>((e,t,n,o)=>kC(e).undoManager.transact(t, n, o))(e, r, n, t),
            ignore: t=>{
                ((e,t,n)=>{
                    kC(e).undoManager.ignore(t, n)
                }
                )(e, n, t)
            }
            ,
            extra: (t,n)=>{
                ((e,t,n,o,r)=>{
                    kC(e).undoManager.extra(t, n, o, r)
                }
                )(e, r, o, t, n)
            }
        };
        return wC(e) || ((e,t,n)=>{
            const o = Oa(!1)
              , r = e=>{
                vC(t, !1, n),
                t.add({}, e)
            }
            ;
            e.on("init", (()=>{
                t.add()
            }
            )),
            e.on("BeforeExecCommand", (e=>{
                const o = e.command;
                Aw(o) || (yC(t, n),
                t.beforeChange())
            }
            )),
            e.on("ExecCommand", (e=>{
                const t = e.command;
                Aw(t) || r(e)
            }
            )),
            e.on("ObjectResizeStart cut", (()=>{
                t.beforeChange()
            }
            )),
            e.on("SaveContent ObjectResized blur", r),
            e.on("dragend", r),
            e.on("keyup", (n=>{
                const s = n.keyCode;
                n.isDefaultPrevented() || ((s >= 33 && s <= 36 || s >= 37 && s <= 40 || 45 === s || n.ctrlKey) && (r(),
                e.nodeChanged()),
                46 !== s && 8 !== s || e.nodeChanged(),
                o.get() && t.typing && !hC(mC(e), t.data[0]) && (e.isDirty() || e.setDirty(!0),
                e.dispatch("TypingUndo"),
                o.set(!1),
                e.nodeChanged()))
            }
            )),
            e.on("keydown", (e=>{
                const s = e.keyCode;
                if (e.isDefaultPrevented())
                    return;
                if (s >= 33 && s <= 36 || s >= 37 && s <= 40 || 45 === s)
                    return void (t.typing && r(e));
                const a = e.ctrlKey && !e.altKey || e.metaKey;
                !(s < 16 || s > 20) || 224 === s || 91 === s || t.typing || a || (t.beforeChange(),
                vC(t, !0, n),
                t.add({}, e),
                o.set(!0))
            }
            )),
            e.on("mousedown", (e=>{
                t.typing && r(e)
            }
            )),
            e.on("input", (e=>{
                var t;
                e.inputType && ("insertReplacementText" === e.inputType || "insertText" === (t = e).inputType && null === t.data || (e=>"insertFromPaste" === e.inputType || "insertFromDrop" === e.inputType)(e)) && r(e)
            }
            )),
            e.on("AddUndo Undo Redo ClearUndos", (t=>{
                t.isDefaultPrevented() || e.nodeChanged()
            }
            ))
        }
        )(e, r, n),
        (e=>{
            e.addShortcut("meta+z", "", "Undo"),
            e.addShortcut("meta+y,meta+shift+z", "", "Redo")
        }
        )(e),
        r
    }
      , Tw = [9, 27, qm.HOME, qm.END, 19, 20, 44, 144, 145, 33, 34, 45, 16, 17, 18, 91, 92, 93, qm.DOWN, qm.UP, qm.LEFT, qm.RIGHT].concat(At.browser.isFirefox() ? [224] : [])
      , Bw = "data-mce-placeholder"
      , Dw = e=>"keydown" === e.type || "keyup" === e.type
      , Pw = e=>{
        const t = e.keyCode;
        return t === qm.BACKSPACE || t === qm.DELETE
    }
      , Lw = (e,t)=>({
        from: e,
        to: t
    })
      , Mw = (e,t)=>{
        const n = bn(e)
          , o = bn(t.container());
        return nh(n, o).map((e=>((e,t)=>({
            block: e,
            position: t
        }))(e, t)))
    }
      , Iw = (e,t)=>Xn(t, (e=>Sr(e) || rr(e.dom)), (t=>xn(t, e))).filter(Vt).getOr(e)
      , Fw = e=>{
        const t = (e=>{
            const t = Pn(e);
            return Z(t, vr).fold(N(t), (e=>t.slice(0, e)))
        }
        )(e);
        return q(t, yo),
        t
    }
      , Uw = (e,t)=>{
        const n = ap(t, e);
        return J(n.reverse(), (e=>ms(e))).each(yo)
    }
      , zw = (e,t,n,o)=>{
        if (ms(n))
            return Or(n),
            uu(n.dom);
        0 === G(Bn(o), (e=>!ms(e))).length && ms(t) && mo(o, pn("br"));
        const r = cu(n.dom, Bi.before(o.dom));
        return q(Fw(t), (e=>{
            mo(o, e)
        }
        )),
        Uw(e, t),
        r
    }
      , jw = (e,t,n)=>{
        if (ms(n)) {
            if (ms(t)) {
                const e = e=>{
                    const t = (e,n)=>Mn(e).fold((()=>n), (e=>yr(e) ? t(e, n.concat(ei(e))) : n));
                    return t(e, [])
                }
                  , o = Y(e(n), ((e,t)=>(ho(e, t),
                t)), Ar());
                vo(t),
                po(t, o)
            }
            return yo(n),
            uu(t.dom)
        }
        const o = mu(n.dom);
        return q(Fw(t), (e=>{
            po(n, e)
        }
        )),
        Uw(e, t),
        o
    }
      , Hw = (e,t)=>{
        lu(e, t.dom).bind((e=>I.from(e.getNode()))).map(bn).filter(Cr).each(yo)
    }
      , $w = (e,t,n)=>(Hw(!0, t),
    Hw(!1, n),
    ((e,t)=>kn(t, e) ? ((e,t)=>{
        const n = ap(t, e);
        return I.from(n[n.length - 1])
    }
    )(t, e) : I.none())(t, n).fold(O(jw, e, t, n), O(zw, e, t, n)))
      , Vw = (e,t,n,o)=>t ? $w(e, o, n) : $w(e, n, o)
      , qw = (e,t)=>{
        const n = bn(e.getBody())
          , o = ((e,t,n)=>n.collapsed ? ((e,t,n)=>{
            const o = Mw(e, Bi.fromRangeStart(n))
              , r = o.bind((n=>su(t, e, n.position).bind((n=>Mw(e, n).map((n=>((e,t,n)=>nr(n.position.getNode()) && !ms(n.block) ? lu(!1, n.block.dom).bind((o=>o.isEqual(n.position) ? su(t, e, o).bind((t=>Mw(e, t))) : I.some(n))).getOr(n) : n)(e, t, n)))))));
            return Lt(o, r, Lw).filter((t=>(e=>!xn(e.from.block, e.to.block))(t) && ((e,t)=>{
                const n = bn(e);
                return xn(Iw(n, t.from.block), Iw(n, t.to.block))
            }
            )(e, t) && (e=>!1 === sr(e.from.block.dom) && !1 === sr(e.to.block.dom))(t) && (e=>{
                const t = e=>wr(e) || ws(e.dom);
                return t(e.from.block) && t(e.to.block)
            }
            )(t)))
        }
        )(e, t, n) : I.none())(n.dom, t, e.selection.getRng()).map((o=>()=>{
            Vw(n, t, o.from.block, o.to.block).each((t=>{
                e.selection.setRng(t.toRange())
            }
            ))
        }
        ));
        return o
    }
      , Ww = (e,t)=>{
        const n = bn(t)
          , o = O(xn, e);
        return Yn(n, Sr, o).isSome()
    }
      , Kw = e=>{
        const t = bn(e.getBody());
        return ((e,t)=>{
            const n = cu(e.dom, Bi.fromRangeStart(t)).isNone()
              , o = du(e.dom, Bi.fromRangeEnd(t)).isNone();
            return !((e,t)=>Ww(e, t.startContainer) || Ww(e, t.endContainer))(e, t) && n && o
        }
        )(t, e.selection.getRng()) ? (e=>I.some((()=>{
            e.setContent(""),
            e.selection.setCursorLocation()
        }
        )))(e) : ((e,t)=>{
            const n = t.getRng();
            return Lt(nh(e, bn(n.startContainer)), nh(e, bn(n.endContainer)), ((o,r)=>xn(o, r) ? I.none() : I.some((()=>{
                n.deleteContents(),
                Vw(e, !0, o, r).each((e=>{
                    t.setRng(e.toRange())
                }
                ))
            }
            )))).getOr(I.none())
        }
        )(t, e.selection)
    }
      , Gw = (e,t)=>e.selection.isCollapsed() ? I.none() : Kw(e)
      , Yw = (e,t,n,o,r)=>I.from(t._selectionOverrides.showCaret(e, n, o, r))
      , Xw = (e,t)=>e.dispatch("BeforeObjectSelected", {
        target: t
    }).isDefaultPrevented() ? I.none() : I.some((e=>{
        const t = e.ownerDocument.createRange();
        return t.selectNode(e),
        t
    }
    )(t))
      , Qw = (e,t,n)=>t.collapsed ? ((e,t,n)=>{
        const o = Fc(1, e.getBody(), t)
          , r = Bi.fromRangeStart(o)
          , s = r.getNode();
        if (pc(s))
            return Yw(1, e, s, !r.isAtEnd(), !1);
        const a = r.getNode(!0);
        if (pc(a))
            return Yw(1, e, a, !1, !1);
        const i = Th(e.dom.getRoot(), r.getNode());
        return pc(i) ? Yw(1, e, i, !1, n) : I.none()
    }
    )(e, t, n).getOr(t) : t
      , Jw = e=>op(e) || Zg(e)
      , Zw = e=>rp(e) || ep(e)
      , ex = (e,t,n,o,r,s)=>{
        Yw(o, e, s.getNode(!r), r, !0).each((n=>{
            if (t.collapsed) {
                const e = t.cloneRange();
                r ? e.setEnd(n.startContainer, n.startOffset) : e.setStart(n.endContainer, n.endOffset),
                e.deleteContents()
            } else
                t.deleteContents();
            e.selection.setRng(n)
        }
        )),
        ((e,t)=>{
            Xo(t) && 0 === t.data.length && e.remove(t)
        }
        )(e.dom, n)
    }
      , tx = (e,t)=>((e,t)=>{
        const n = e.selection.getRng();
        if (!Xo(n.commonAncestorContainer))
            return I.none();
        const o = t ? Vc.Forwards : Vc.Backwards
          , r = tu(e.getBody())
          , s = O(Hc, t ? r.next : r.prev)
          , a = t ? Jw : Zw
          , i = zc(o, e.getBody(), n)
          , l = s(i)
          , d = l ? Xp(t, l) : l;
        if (!d || !$c(i, d))
            return I.none();
        if (a(d))
            return I.some((()=>ex(e, n, i.getNode(), o, t, d)));
        const c = s(d);
        return c && a(c) && $c(d, c) ? I.some((()=>ex(e, n, i.getNode(), o, t, c))) : I.none()
    }
    )(e, t)
      , nx = (e,t)=>{
        const n = e.getBody();
        return t ? uu(n).filter(op) : mu(n).filter(rp)
    }
      , ox = e=>{
        const t = e.selection.getRng();
        return !t.collapsed && (nx(e, !0).exists((e=>e.isEqual(Bi.fromRangeStart(t)))) || nx(e, !1).exists((e=>e.isEqual(Bi.fromRangeEnd(t)))))
    }
      , rx = ol([{
        remove: ["element"]
    }, {
        moveToElement: ["element"]
    }, {
        moveToPosition: ["position"]
    }])
      , sx = (e,t,n)=>su(t, e, n).bind((o=>{
        return r = o.getNode(),
        C(r) && (Sr(bn(r)) || kr(bn(r))) || ((e,t,n,o)=>{
            const r = t=>yr(bn(t)) && !Tc(n, o, e);
            return Uc(!t, n).fold((()=>Uc(t, o).fold(L, r)), r)
        }
        )(e, t, n, o) ? I.none() : t && sr(o.getNode()) || !t && sr(o.getNode(!0)) ? ((e,t,n,o)=>{
            const r = o.getNode(!t);
            return nh(bn(e), bn(n.getNode())).map((e=>ms(e) ? rx.remove(e.dom) : rx.moveToElement(r))).orThunk((()=>I.some(rx.moveToElement(r))))
        }
        )(e, t, n, o) : t && rp(n) || !t && op(n) ? I.some(rx.moveToPosition(o)) : I.none();
        var r
    }
    ))
      , ax = (e,t)=>I.from(Th(e.getBody(), t))
      , ix = (e,t)=>{
        const n = e.selection.getNode();
        return ax(e, n).filter(sr).fold((()=>((e,t,n)=>{
            const o = Fc(t ? 1 : -1, e, n)
              , r = Bi.fromRangeStart(o)
              , s = bn(e);
            return !t && rp(r) ? I.some(rx.remove(r.getNode(!0))) : t && op(r) ? I.some(rx.remove(r.getNode())) : !t && op(r) && vp(s, r) ? yp(s, r).map((e=>rx.remove(e.getNode()))) : t && rp(r) && bp(s, r) ? Cp(s, r).map((e=>rx.remove(e.getNode()))) : ((e,t,n)=>((e,t)=>{
                const n = t.getNode(!e)
                  , o = e ? "after" : "before";
                return jo(n) && n.getAttribute("data-mce-caret") === o
            }
            )(t, n) ? ((e,t)=>y(t) ? I.none() : e && sr(t.nextSibling) ? I.some(rx.moveToElement(t.nextSibling)) : !e && sr(t.previousSibling) ? I.some(rx.moveToElement(t.previousSibling)) : I.none())(t, n.getNode(!t)).orThunk((()=>sx(e, t, n))) : sx(e, t, n).bind((t=>((e,t,n)=>n.fold((e=>I.some(rx.remove(e))), (e=>I.some(rx.moveToElement(e))), (n=>Tc(t, n, e) ? I.none() : I.some(rx.moveToPosition(n)))))(e, n, t))))(e, t, r)
        }
        )(e.getBody(), t, e.selection.getRng()).map((n=>()=>n.fold(((e,t)=>n=>(e._selectionOverrides.hideFakeCaret(),
        Wp(e, t, bn(n)),
        !0))(e, t), ((e,t)=>n=>{
            const o = t ? Bi.before(n) : Bi.after(n);
            return e.selection.setRng(o.toRange()),
            !0
        }
        )(e, t), (e=>t=>(e.selection.setRng(t.toRange()),
        !0))(e))))), (()=>I.some(E)))
    }
      , lx = e=>{
        const t = e.dom
          , n = e.selection
          , o = Th(e.getBody(), n.getNode());
        if (rr(o) && t.isBlock(o) && t.isEmpty(o)) {
            const e = t.create("br", {
                "data-mce-bogus": "1"
            });
            t.setHTML(o, ""),
            o.appendChild(e),
            n.setRng(Bi.before(e).toRange())
        }
        return !0
    }
      , dx = (e,t)=>e.selection.isCollapsed() ? ix(e, t) : ((e,t)=>{
        const n = e.selection.getNode();
        return sr(n) && !ar(n) ? ax(e, n.parentNode).filter(sr).fold((()=>I.some((()=>{
            var n;
            n = bn(e.getBody()),
            q(Mo(n, ".mce-offscreen-selection"), yo),
            Wp(e, t, bn(e.selection.getNode())),
            oh(e)
        }
        ))), (()=>I.some(E))) : ox(e) ? I.some((()=>{
            sh(e, e.selection.getRng(), bn(e.getBody()))
        }
        )) : I.none()
    }
    )(e, t)
      , cx = (e,t)=>e.selection.isCollapsed() ? ((e,t)=>{
        const n = Bi.fromRangeStart(e.selection.getRng());
        return su(t, e.getBody(), n).filter((e=>t ? Qg(e) : Jg(e))).bind((e=>Bc(t ? 0 : -1, e))).map((t=>()=>e.selection.select(t)))
    }
    )(e, t) : I.none()
      , ux = Xo
      , mx = e=>ux(e) && e.data[0] === Br
      , fx = e=>ux(e) && e.data[e.data.length - 1] === Br
      , gx = e=>{
        var t;
        return (null !== (t = e.ownerDocument) && void 0 !== t ? t : document).createTextNode(Br)
    }
      , px = (e,t)=>e ? (e=>{
        var t;
        if (ux(e.previousSibling))
            return fx(e.previousSibling) || e.previousSibling.appendData(Br),
            e.previousSibling;
        if (ux(e))
            return mx(e) || e.insertData(0, Br),
            e;
        {
            const n = gx(e);
            return null === (t = e.parentNode) || void 0 === t || t.insertBefore(n, e),
            n
        }
    }
    )(t) : (e=>{
        var t, n;
        if (ux(e.nextSibling))
            return mx(e.nextSibling) || e.nextSibling.insertData(0, Br),
            e.nextSibling;
        if (ux(e))
            return fx(e) || e.appendData(Br),
            e;
        {
            const o = gx(e);
            return e.nextSibling ? null === (t = e.parentNode) || void 0 === t || t.insertBefore(o, e.nextSibling) : null === (n = e.parentNode) || void 0 === n || n.appendChild(o),
            o
        }
    }
    )(t)
      , hx = O(px, !0)
      , bx = O(px, !1)
      , vx = (e,t)=>Xo(e.container()) ? px(t, e.container()) : px(t, e.getNode())
      , yx = (e,t)=>{
        const n = t.get();
        return n && e.container() === n && Fr(n)
    }
      , Cx = (e,t)=>t.fold((t=>{
        lc(e.get());
        const n = hx(t);
        return e.set(n),
        I.some(Bi(n, n.length - 1))
    }
    ), (t=>uu(t).map((t=>{
        if (yx(t, e)) {
            const t = e.get();
            return Bi(t, 1)
        }
        {
            lc(e.get());
            const n = vx(t, !0);
            return e.set(n),
            Bi(n, 1)
        }
    }
    ))), (t=>mu(t).map((t=>{
        if (yx(t, e)) {
            const t = e.get();
            return Bi(t, t.length - 1)
        }
        {
            lc(e.get());
            const n = vx(t, !1);
            return e.set(n),
            Bi(n, n.length - 1)
        }
    }
    ))), (t=>{
        lc(e.get());
        const n = bx(t);
        return e.set(n),
        I.some(Bi(n, 1))
    }
    ))
      , wx = (e,t)=>{
        for (let n = 0; n < e.length; n++) {
            const o = e[n].apply(null, t);
            if (o.isSome())
                return o
        }
        return I.none()
    }
      , xx = ol([{
        before: ["element"]
    }, {
        start: ["element"]
    }, {
        end: ["element"]
    }, {
        after: ["element"]
    }])
      , kx = (e,t)=>Oc(t, e) || e
      , Ex = (e,t,n)=>{
        const o = Qp(n)
          , r = kx(t, o.container());
        return Yp(e, r, o).fold((()=>du(r, o).bind(O(Yp, e, r)).map((e=>xx.before(e)))), I.none)
    }
      , Sx = (e,t)=>null === pu(e, t)
      , _x = (e,t,n)=>Yp(e, t, n).filter(O(Sx, t))
      , Nx = (e,t,n)=>{
        const o = Jp(n);
        return _x(e, t, o).bind((e=>cu(e, o).isNone() ? I.some(xx.start(e)) : I.none()))
    }
      , Rx = (e,t,n)=>{
        const o = Qp(n);
        return _x(e, t, o).bind((e=>du(e, o).isNone() ? I.some(xx.end(e)) : I.none()))
    }
      , Ax = (e,t,n)=>{
        const o = Jp(n)
          , r = kx(t, o.container());
        return Yp(e, r, o).fold((()=>cu(r, o).bind(O(Yp, e, r)).map((e=>xx.after(e)))), I.none)
    }
      , Ox = e=>{
        return t = Bx(e),
        !("rtl" === Na.DOM.getStyle(t, "direction", !0) || (e=>Kp.test(e))(null !== (n = t.textContent) && void 0 !== n ? n : ""));
        var t, n
    }
      , Tx = (e,t,n)=>wx([Ex, Nx, Rx, Ax], [e, t, n]).filter(Ox)
      , Bx = e=>e.fold(R, R, R, R)
      , Dx = e=>e.fold(N("before"), N("start"), N("end"), N("after"))
      , Px = e=>e.fold(xx.before, xx.before, xx.after, xx.after)
      , Lx = e=>e.fold(xx.start, xx.start, xx.end, xx.end)
      , Mx = (e,t,n,o,r,s)=>Lt(Yp(t, n, o), Yp(t, n, r), ((t,o)=>t !== o && ((e,t,n)=>{
        const o = Oc(t, e)
          , r = Oc(n, e);
        return C(o) && o === r
    }
    )(n, t, o) ? xx.after(e ? t : o) : s)).getOr(s)
      , Ix = (e,t)=>e.fold(M, (e=>{
        return o = t,
        !(Dx(n = e) === Dx(o) && Bx(n) === Bx(o));
        var n, o
    }
    ))
      , Fx = (e,t)=>e ? t.fold(S(I.some, xx.start), I.none, S(I.some, xx.after), I.none) : t.fold(I.none, S(I.some, xx.before), I.none, S(I.some, xx.end))
      , Ux = (e,t,n)=>{
        const o = e ? 1 : -1;
        return t.setRng(Bi(n.container(), n.offset() + o).toRange()),
        t.getSel().modify("move", e ? "forward" : "backward", "word"),
        !0
    }
    ;
    var zx;
    !function(e) {
        e[e.Br = 0] = "Br",
        e[e.Block = 1] = "Block",
        e[e.Wrap = 2] = "Wrap",
        e[e.Eol = 3] = "Eol"
    }(zx || (zx = {}));
    const jx = (e,t)=>e === Vc.Backwards ? oe(t) : t
      , Hx = (e,t,n)=>e === Vc.Forwards ? t.next(n) : t.prev(n)
      , $x = (e,t,n,o)=>nr(o.getNode(t === Vc.Forwards)) ? zx.Br : !1 === Tc(n, o) ? zx.Block : zx.Wrap
      , Vx = (e,t,n,o)=>{
        const r = tu(n);
        let s = o;
        const a = [];
        for (; s; ) {
            const n = Hx(t, r, s);
            if (!n)
                break;
            if (nr(n.getNode(!1)))
                return t === Vc.Forwards ? {
                    positions: jx(t, a).concat([n]),
                    breakType: zx.Br,
                    breakAt: I.some(n)
                } : {
                    positions: jx(t, a),
                    breakType: zx.Br,
                    breakAt: I.some(n)
                };
            if (n.isVisible()) {
                if (e(s, n)) {
                    const e = $x(0, t, s, n);
                    return {
                        positions: jx(t, a),
                        breakType: e,
                        breakAt: I.some(n)
                    }
                }
                a.push(n),
                s = n
            } else
                s = n
        }
        return {
            positions: jx(t, a),
            breakType: zx.Eol,
            breakAt: I.none()
        }
    }
      , qx = (e,t,n,o)=>t(n, o).breakAt.map((o=>{
        const r = t(n, o).positions;
        return e === Vc.Backwards ? r.concat(o) : [o].concat(r)
    }
    )).getOr([])
      , Wx = (e,t)=>X(e, ((e,n)=>e.fold((()=>I.some(n)), (o=>Lt(le(o.getClientRects()), le(n.getClientRects()), ((e,r)=>{
        const s = Math.abs(t - e.left);
        return Math.abs(t - r.left) <= s ? n : o
    }
    )).or(e)))), I.none())
      , Kx = (e,t)=>le(t.getClientRects()).bind((t=>Wx(e, t.left)))
      , Gx = O(Vx, Bi.isAbove, -1)
      , Yx = O(Vx, Bi.isBelow, 1)
      , Xx = O(qx, -1, Gx)
      , Qx = O(qx, 1, Yx)
      , Jx = (e,t)=>Kx(Xx(e, t), t)
      , Zx = (e,t)=>Kx(Qx(e, t), t)
      , ek = sr
      , tk = (e,t)=>Math.abs(e.left - t)
      , nk = (e,t)=>Math.abs(e.right - t)
      , ok = (e,t)=>Te(e, ((e,n)=>{
        const o = Math.min(tk(e, t), nk(e, t))
          , r = Math.min(tk(n, t), nk(n, t));
        return r === o && Ee(n, "node") && ek(n.node) || r < o ? n : e
    }
    ))
      , rk = e=>{
        const t = t=>V(t, (t=>{
            const n = si(t);
            return n.node = e,
            n
        }
        ));
        if (jo(e))
            return t(e.getClientRects());
        if (Xo(e)) {
            const n = e.ownerDocument.createRange();
            return n.setStart(e, 0),
            n.setEnd(e, e.data.length),
            t(n.getClientRects())
        }
        return []
    }
      , sk = e=>te(e, rk);
    var ak;
    !function(e) {
        e[e.Up = -1] = "Up",
        e[e.Down = 1] = "Down"
    }(ak || (ak = {}));
    const ik = (e,t,n,o,r,s)=>{
        let a = 0;
        const i = []
          , l = o=>{
            let s = sk([o]);
            -1 === e && (s = s.reverse());
            for (let e = 0; e < s.length; e++) {
                const o = s[e];
                if (!n(o, d)) {
                    if (i.length > 0 && t(o, De(i)) && a++,
                    o.line = a,
                    r(o))
                        return !0;
                    i.push(o)
                }
            }
            return !1
        }
          , d = De(s.getClientRects());
        if (!d)
            return i;
        const c = s.getNode();
        return c && (l(c),
        ((e,t,n,o)=>{
            let r = o;
            for (; r = Ac(r, e, os, t); )
                if (n(r))
                    return
        }
        )(e, o, l, c)),
        i
    }
      , lk = O(ik, ak.Up, li, di)
      , dk = O(ik, ak.Down, di, li)
      , ck = e=>De(e.getClientRects())
      , uk = e=>t=>((e,t)=>t.line > e)(e, t)
      , mk = e=>t=>((e,t)=>t.line === e)(e, t)
      , fk = (e,t)=>{
        e.selection.setRng(t),
        Vf(e, e.selection.getRng())
    }
      , gk = (e,t,n)=>I.some(Qw(e, t, n))
      , pk = (e,t,n,o,r,s)=>{
        const a = t === Vc.Forwards
          , i = tu(e.getBody())
          , l = O(Hc, a ? i.next : i.prev)
          , d = a ? o : r;
        if (!n.collapsed) {
            const o = ui(n);
            if (s(o))
                return Yw(t, e, o, t === Vc.Backwards, !1);
            if (ox(e)) {
                const e = n.cloneRange();
                return e.collapse(t === Vc.Backwards),
                I.from(e)
            }
        }
        const c = zc(t, e.getBody(), n);
        if (d(c))
            return Xw(e, c.getNode(!a));
        let u = l(c);
        const m = Wr(n);
        if (!u)
            return m ? I.some(n) : I.none();
        if (u = Xp(a, u),
        d(u))
            return Yw(t, e, u.getNode(!a), a, !1);
        const f = l(u);
        return f && d(f) && $c(u, f) ? Yw(t, e, f.getNode(!a), a, !1) : m ? gk(e, u.toRange(), !1) : I.none()
    }
      , hk = (e,t,n,o,r,s)=>{
        const a = zc(t, e.getBody(), n)
          , i = De(a.getClientRects())
          , l = t === ak.Down
          , d = e.getBody();
        if (!i)
            return I.none();
        if (ox(e)) {
            const e = l ? Bi.fromRangeEnd(n) : Bi.fromRangeStart(n);
            return (l ? Zx : Jx)(d, e).orThunk((()=>I.from(e))).map((e=>e.toRange()))
        }
        const c = (l ? dk : lk)(d, uk(1), a)
          , u = G(c, mk(1))
          , m = i.left
          , f = ok(u, m);
        if (f && s(f.node)) {
            const n = Math.abs(m - f.left)
              , o = Math.abs(m - f.right);
            return Yw(t, e, f.node, n < o, !1)
        }
        let g;
        if (g = o(a) ? a.getNode() : r(a) ? a.getNode(!0) : ui(n),
        g) {
            const n = ((e,t,n,o)=>{
                const r = tu(t);
                let s, a, i, l;
                const d = [];
                let c = 0;
                1 === e ? (s = r.next,
                a = di,
                i = li,
                l = Bi.after(o)) : (s = r.prev,
                a = li,
                i = di,
                l = Bi.before(o));
                const u = ck(l);
                do {
                    if (!l.isVisible())
                        continue;
                    const e = ck(l);
                    if (i(e, u))
                        continue;
                    d.length > 0 && a(e, De(d)) && c++;
                    const t = si(e);
                    if (t.position = l,
                    t.line = c,
                    n(t))
                        return d;
                    d.push(t)
                } while (l = s(l));
                return d
            }
            )(t, d, uk(1), g);
            let o = ok(G(n, mk(1)), m);
            if (o)
                return gk(e, o.position.toRange(), !1);
            if (o = De(G(n, mk(0))),
            o)
                return gk(e, o.position.toRange(), !1)
        }
        return 0 === u.length ? bk(e, l).filter(l ? r : o).map((t=>Qw(e, t.toRange(), !1))) : I.none()
    }
      , bk = (e,t)=>{
        const n = e.selection.getRng()
          , o = t ? Bi.fromRangeEnd(n) : Bi.fromRangeStart(n)
          , r = (s = o.container(),
        a = e.getBody(),
        Yn(bn(s), (e=>bc(e.dom)), (e=>e.dom === a)).map((e=>e.dom)).getOr(a));
        var s, a;
        if (t) {
            const e = Yx(r, o);
            return de(e.positions)
        }
        {
            const e = Gx(r, o);
            return le(e.positions)
        }
    }
      , vk = (e,t,n)=>bk(e, t).filter(n).exists((t=>(e.selection.setRng(t.toRange()),
    !0)))
      , yk = (e,t)=>{
        const n = e.dom.createRng();
        n.setStart(t.container(), t.offset()),
        n.setEnd(t.container(), t.offset()),
        e.selection.setRng(n)
    }
      , Ck = (e,t)=>{
        e ? t.setAttribute("data-mce-selected", "inline-boundary") : t.removeAttribute("data-mce-selected")
    }
      , wk = (e,t,n)=>Cx(t, n).map((t=>(yk(e, t),
    n)))
      , xk = (e,t,n)=>{
        const o = e.getBody()
          , r = ((e,t,n)=>{
            const o = Bi.fromRangeStart(e);
            if (e.collapsed)
                return o;
            {
                const r = Bi.fromRangeEnd(e);
                return n ? cu(t, r).getOr(r) : du(t, o).getOr(o)
            }
        }
        )(e.selection.getRng(), o, n);
        return ((e,t,n,o)=>{
            const r = Xp(e, o)
              , s = Tx(t, n, r);
            return Tx(t, n, r).bind(O(Fx, e)).orThunk((()=>((e,t,n,o,r)=>{
                const s = Xp(e, r);
                return su(e, n, s).map(O(Xp, e)).fold((()=>o.map(Px)), (r=>Tx(t, n, r).map(O(Mx, e, t, n, s, r)).filter(O(Ix, o)))).filter(Ox)
            }
            )(e, t, n, s, o)))
        }
        )(n, O(Gp, e), o, r).bind((n=>wk(e, t, n)))
    }
      , kk = (e,t,n)=>!!ad(e) && xk(e, t, n).isSome()
      , Ek = (e,t,n)=>!!ad(t) && ((e,t)=>{
        const n = t.selection.getRng()
          , o = e ? Bi.fromRangeEnd(n) : Bi.fromRangeStart(n);
        return !!(e=>w(e.selection.getSel().modify))(t) && (e && jr(o) ? Ux(!0, t.selection, o) : !(e || !Hr(o)) && Ux(!1, t.selection, o))
    }
    )(e, t)
      , Sk = e=>{
        const t = Oa(null)
          , n = O(Gp, e);
        return e.on("NodeChange", (o=>{
            ad(e) && (((e,t,n)=>{
                const o = V(Mo(bn(t.getRoot()), '*[data-mce-selected="inline-boundary"]'), (e=>e.dom))
                  , r = G(o, e)
                  , s = G(n, e);
                q(re(r, s), O(Ck, !1)),
                q(re(s, r), O(Ck, !0))
            }
            )(n, e.dom, o.parents),
            ((e,t)=>{
                const n = t.get();
                if (e.selection.isCollapsed() && !e.composing && n) {
                    const o = Bi.fromRangeStart(e.selection.getRng());
                    Bi.isTextPosition(o) && !(e=>jr(e) || Hr(e))(o) && (yk(e, ic(n, o)),
                    t.set(null))
                }
            }
            )(e, t),
            ((e,t,n,o)=>{
                if (t.selection.isCollapsed()) {
                    const r = G(o, e);
                    q(r, (o=>{
                        const r = Bi.fromRangeStart(t.selection.getRng());
                        Tx(e, t.getBody(), r).bind((e=>wk(t, n, e)))
                    }
                    ))
                }
            }
            )(n, e, t, o.parents))
        }
        )),
        t
    }
      , _k = O(Ek, !0)
      , Nk = O(Ek, !1)
      , Rk = (e,t,n)=>{
        if (ad(e)) {
            const o = bk(e, t).getOrThunk((()=>{
                const n = e.selection.getRng();
                return t ? Bi.fromRangeEnd(n) : Bi.fromRangeStart(n)
            }
            ));
            return Tx(O(Gp, e), e.getBody(), o).exists((t=>{
                const o = Px(t);
                return Cx(n, o).exists((t=>(yk(e, t),
                !0)))
            }
            ))
        }
        return !1
    }
      , Ak = (e,t)=>n=>Cx(t, n).map((t=>()=>yk(e, t)))
      , Ok = (e,t,n,o)=>{
        const r = e.getBody()
          , s = O(Gp, e);
        e.undoManager.ignore((()=>{
            e.selection.setRng(((e,t)=>{
                const n = document.createRange();
                return n.setStart(e.container(), e.offset()),
                n.setEnd(t.container(), t.offset()),
                n
            }
            )(n, o)),
            eh(e),
            Tx(s, r, Bi.fromRangeStart(e.selection.getRng())).map(Lx).bind(Ak(e, t)).each(P)
        }
        )),
        e.nodeChanged()
    }
      , Tk = (e,t,n)=>{
        if (e.selection.isCollapsed() && ad(e)) {
            const o = Bi.fromRangeStart(e.selection.getRng());
            return ((e,t,n,o)=>{
                const r = ((e,t)=>Oc(t, e) || e)(e.getBody(), o.container())
                  , s = O(Gp, e)
                  , a = Tx(s, r, o);
                return a.bind((e=>n ? e.fold(N(I.some(Lx(e))), I.none, N(I.some(Px(e))), I.none) : e.fold(I.none, N(I.some(Px(e))), I.none, N(I.some(Lx(e)))))).map(Ak(e, t)).getOrThunk((()=>{
                    const i = au(n, r, o)
                      , l = i.bind((e=>Tx(s, r, e)));
                    return Lt(a, l, (()=>Yp(s, r, o).bind((t=>(e=>Lt(uu(e), mu(e), ((t,n)=>{
                        const o = Xp(!0, t)
                          , r = Xp(!1, n);
                        return du(e, o).forall((e=>e.isEqual(r)))
                    }
                    )).getOr(!0))(t) ? I.some((()=>{
                        Wp(e, n, bn(t))
                    }
                    )) : I.none())))).getOrThunk((()=>l.bind((()=>i.map((r=>()=>{
                        n ? Ok(e, t, o, r) : Ok(e, t, r, o)
                    }
                    ))))))
                }
                ))
            }
            )(e, t, n, o)
        }
        return I.none()
    }
      , Bk = (e,t)=>{
        const n = bn(e.getBody())
          , o = bn(e.selection.getStart())
          , r = ap(o, n);
        return Z(r, t).fold(N(r), (e=>r.slice(0, e)))
    }
      , Dk = (e,t)=>{
        const n = O(kb, e);
        return te(t, (e=>n(e) ? [e.dom] : []))
    }
      , Pk = e=>{
        const t = (e=>Bk(e, vr))(e);
        return Dk(e, t)
    }
      , Lk = (e,t)=>{
        const n = (e=>Bk(e, (e=>vr(e) || (e=>Fn(e) > 1)(e))))(e);
        return de(n).bind((o=>{
            const r = Bi.fromRangeStart(e.selection.getRng());
            return ((e,t,n)=>Lt(uu(n), mu(n), ((o,r)=>{
                const s = Xp(!0, o)
                  , a = Xp(!1, r)
                  , i = Xp(!1, t);
                return e ? du(n, i).exists((e=>e.isEqual(a) && t.isEqual(s))) : cu(n, i).exists((e=>e.isEqual(s) && t.isEqual(a)))
            }
            )).getOr(!0))(t, r, o.dom) && !Eb(o) ? I.some((()=>((e,t,n,o)=>{
                const r = Dk(t, o);
                if (0 === r.length)
                    Wp(t, e, n);
                else {
                    const e = xb(n.dom, r);
                    t.selection.setRng(e.toRange())
                }
            }
            )(t, e, o, n))) : I.none()
        }
        ))
    }
      , Mk = (e,t)=>{
        const n = e.selection.getStart()
          , o = ((e,t)=>{
            const n = t.parentElement;
            return nr(t) && !h(n) && e.dom.isEmpty(n)
        }
        )(e, n) || Eb(bn(n)) ? xb(n, t) : ((e,t)=>{
            const {caretContainer: n, caretPosition: o} = wb(t);
            return e.selection.getRng().insertNode(n.dom),
            o
        }
        )(e, t);
        e.selection.setRng(o.toRange())
    }
      , Ik = e=>Xo(e.startContainer)
      , Fk = e=>{
        const t = e.selection.getRng();
        return (e=>0 === e.startOffset && Ik(e))(t) && ((e,t)=>{
            const n = t.startContainer.parentElement;
            return !h(n) && kb(e, bn(n))
        }
        )(e, t) && (e=>(e=>(e=>{
            const t = e.startContainer.parentNode
              , n = e.endContainer.parentNode;
            return !h(t) && !h(n) && t.isEqualNode(n)
        }
        )(e) && (e=>{
            const t = e.endContainer;
            return e.endOffset === (Xo(t) ? t.length : t.childNodes.length)
        }
        )(e))(e) || (e=>!e.endContainer.isEqualNode(e.commonAncestorContainer))(e))(t)
    }
      , Uk = (e,t)=>e.selection.isCollapsed() ? Lk(e, t) : (e=>{
        if (Fk(e)) {
            const t = Pk(e);
            return I.some((()=>{
                eh(e),
                ((e,t)=>{
                    const n = re(t, Pk(e));
                    n.length > 0 && Mk(e, n)
                }
                )(e, t)
            }
            ))
        }
        return I.none()
    }
    )(e)
      , zk = e=>((e,t,n)=>Yn(e, (e=>gu(e.dom)), n).isSome())(e, 0, vr)
      , jk = e=>((e=>{
        const t = e.selection.getRng();
        return t.collapsed && (Ik(t) || e.dom.isEmpty(t.startContainer)) && !(e=>zk(bn(e.selection.getStart())))(e)
    }
    )(e) && Mk(e, []),
    !0)
      , Hk = (e,t,n)=>C(n) ? I.some((()=>{
        e._selectionOverrides.hideFakeCaret(),
        Wp(e, t, bn(n))
    }
    )) : I.none()
      , $k = (e,t)=>e.selection.isCollapsed() ? ((e,t)=>{
        const n = t ? Zg : ep
          , o = t ? Vc.Forwards : Vc.Backwards
          , r = zc(o, e.getBody(), e.selection.getRng());
        return n(r) ? Hk(e, t, r.getNode(!t)) : I.from(Xp(t, r)).filter((e=>n(e) && $c(r, e))).bind((n=>Hk(e, t, n.getNode(!t))))
    }
    )(e, t) : ((e,t)=>{
        const n = e.selection.getNode();
        return lr(n) ? Hk(e, t, n) : I.none()
    }
    )(e, t)
      , Vk = e=>Xe(null != e ? e : "").getOr(0)
      , qk = (e,t)=>(e || "table" === jt(t) ? "margin" : "padding") + ("rtl" === ao(t, "direction") ? "-right" : "-left")
      , Wk = e=>{
        const t = Gk(e);
        return !e.mode.isReadOnly() && (t.length > 1 || ((e,t)=>ne(t, (t=>{
            const n = qk(Vl(e), t)
              , o = lo(t, n).map(Vk).getOr(0);
            return "false" !== e.dom.getContentEditable(t.dom) && o > 0
        }
        )))(e, t))
    }
      , Kk = e=>xr(e) || kr(e)
      , Gk = e=>G(wo(e.selection.getSelectedBlocks()), (e=>!Kk(e) && !(e=>Nn(e).exists(Kk))(e) && Xn(e, (e=>rr(e.dom) || sr(e.dom))).exists((e=>rr(e.dom)))))
      , Yk = (e,t)=>{
        var n, o;
        const {dom: r} = e
          , s = ql(e)
          , a = null !== (o = null === (n = /[a-z%]+$/i.exec(s)) || void 0 === n ? void 0 : n[0]) && void 0 !== o ? o : "px"
          , i = Vk(s)
          , l = Vl(e);
        q(Gk(e), (e=>{
            ((e,t,n,o,r,s)=>{
                const a = qk(n, bn(s))
                  , i = Vk(e.getStyle(s, a));
                if ("outdent" === t) {
                    const t = Math.max(0, i - o);
                    e.setStyle(s, a, t ? t + r : "")
                } else {
                    const t = i + o + r;
                    e.setStyle(s, a, t)
                }
            }
            )(r, t, l, i, a, e.dom)
        }
        ))
    }
      , Xk = e=>Yk(e, "outdent")
      , Qk = e=>{
        if (e.selection.isCollapsed() && Wk(e)) {
            const t = e.dom
              , n = e.selection.getRng()
              , o = Bi.fromRangeStart(n)
              , r = t.getParent(n.startContainer, t.isBlock);
            if (null !== r && up(bn(r), o))
                return I.some((()=>Xk(e)))
        }
        return I.none()
    }
      , Jk = (e,t,n)=>ue([Qk, dx, tx, (e,n)=>Tk(e, t, n), qw, Oh, cx, $k, Gw, Uk], (t=>t(e, n))).filter((t=>e.selection.isEditable()))
      , Zk = (e,t)=>{
        e.addCommand("delete", (()=>{
            ((e,t)=>{
                Jk(e, t, !1).fold((()=>{
                    eh(e),
                    oh(e)
                }
                ), P)
            }
            )(e, t)
        }
        )),
        e.addCommand("forwardDelete", (()=>{
            ((e,t)=>{
                Jk(e, t, !0).fold((()=>(e=>Zp(e, "ForwardDelete"))(e)), P)
            }
            )(e, t)
        }
        ))
    }
      , eE = e=>void 0 === e.touches || 1 !== e.touches.length ? I.none() : I.some(e.touches[0])
      , tE = (e,t)=>ke(e, t.nodeName)
      , nE = (e,t)=>!!Xo(t) || !!jo(t) && !tE(e.getBlockElements(), t) && !Nu(t) && !Es(e, t)
      , oE = (e,t)=>{
        if (Xo(t)) {
            if (0 === t.data.length)
                return !0;
            if (/^\s+$/.test(t.data) && (!t.nextSibling || tE(e, t.nextSibling)))
                return !0
        }
        return !1
    }
      , rE = e=>e.dom.create(El(e), Sl(e))
      , sE = e=>{
        const t = e.dom
          , n = e.selection
          , o = e.schema
          , r = o.getBlockElements()
          , s = n.getStart()
          , a = e.getBody();
        let i, l, d = !1;
        const c = El(e);
        if (!s || !jo(s))
            return;
        const u = a.nodeName.toLowerCase();
        if (!o.isValidChild(u, c.toLowerCase()) || ((e,t,n)=>$(sp(bn(n), bn(t)), (t=>tE(e, t.dom))))(r, a, s))
            return;
        const m = n.getRng()
          , {startContainer: f, startOffset: g, endContainer: p, endOffset: h} = m
          , b = fg(e);
        let v = a.firstChild;
        for (; v; )
            if (jo(v) && Cs(o, v),
            nE(o, v)) {
                if (oE(r, v)) {
                    l = v,
                    v = v.nextSibling,
                    t.remove(l);
                    continue
                }
                i || (i = rE(e),
                a.insertBefore(i, v),
                d = !0),
                l = v,
                v = v.nextSibling,
                i.appendChild(l)
            } else
                i = null,
                v = v.nextSibling;
        d && b && (m.setStart(f, g),
        m.setEnd(p, h),
        n.setRng(m),
        e.nodeChanged())
    }
      , aE = (e,t,n)=>{
        const o = bn(rE(e))
          , r = Ar();
        po(o, r),
        n(t, o);
        const s = document.createRange();
        return s.setStartBefore(r.dom),
        s.setEndBefore(r.dom),
        s
    }
      , iE = e=>t=>-1 !== (" " + t.attr("class") + " ").indexOf(e)
      , lE = (e,t,n)=>function(o) {
        const r = arguments
          , s = r[r.length - 2]
          , a = s > 0 ? t.charAt(s - 1) : "";
        if ('"' === a)
            return o;
        if (">" === a) {
            const e = t.lastIndexOf("<", s);
            if (-1 !== e && -1 !== t.substring(e, s).indexOf('contenteditable="false"'))
                return o
        }
        return '<span class="' + n + '" data-mce-content="' + e.dom.encode(r[0]) + '">' + e.dom.encode("string" == typeof r[1] ? r[1] : r[0]) + "</span>"
    }
      , dE = (e,t)=>{
        t.hasAttribute("data-mce-caret") && (qr(t),
        e.selection.setRng(e.selection.getRng()),
        e.selection.scrollIntoView(t))
    }
      , cE = (e,t)=>{
        const n = (e=>Jn(bn(e.getBody()), "*[data-mce-caret]").map((e=>e.dom)).getOrNull())(e);
        if (n)
            return "compositionstart" === t.type ? (t.preventDefault(),
            t.stopPropagation(),
            void dE(e, n)) : void (zr(n) && (dE(e, n),
            e.undoManager.add()))
    }
      , uE = sr
      , mE = (e,t,n)=>{
        const o = tu(e.getBody())
          , r = O(Hc, 1 === t ? o.next : o.prev);
        if (n.collapsed) {
            const o = e.dom.getParent(n.startContainer, "PRE");
            if (!o)
                return;
            if (!r(Bi.fromRangeStart(n))) {
                const n = bn((e=>{
                    const t = e.dom.create(El(e));
                    return t.innerHTML = '<br data-mce-bogus="1">',
                    t
                }
                )(e));
                1 === t ? fo(bn(o), n) : mo(bn(o), n),
                e.selection.select(n.dom, !0),
                e.selection.collapse()
            }
        }
    }
      , fE = (e,t)=>((e,t)=>{
        const n = t ? Vc.Forwards : Vc.Backwards
          , o = e.selection.getRng();
        return ((e,t,n)=>pk(t, e, n, op, rp, uE))(n, e, o).orThunk((()=>(mE(e, n, o),
        I.none())))
    }
    )(e, t).exists((t=>(fk(e, t),
    !0)))
      , gE = (e,t)=>((e,t)=>{
        const n = t ? 1 : -1
          , o = e.selection.getRng();
        return ((e,t,n)=>hk(t, e, n, (e=>op(e) || tp(e)), (e=>rp(e) || np(e)), uE))(n, e, o).orThunk((()=>(mE(e, n, o),
        I.none())))
    }
    )(e, t).exists((t=>(fk(e, t),
    !0)))
      , pE = (e,t)=>vk(e, t, t ? rp : op)
      , hE = (e,t)=>nx(e, !t).map((n=>{
        const o = n.toRange()
          , r = e.selection.getRng();
        return t ? o.setStart(r.startContainer, r.startOffset) : o.setEnd(r.endContainer, r.endOffset),
        o
    }
    )).exists((t=>(fk(e, t),
    !0)))
      , bE = e=>H(["figcaption"], jt(e))
      , vE = (e,t)=>{
        const n = bn(e.getBody())
          , o = Bi.fromRangeStart(e.selection.getRng());
        return ((e,t)=>{
            const n = O(xn, t);
            return Xn(bn(e.container()), vr, n).filter(bE)
        }
        )(o, n).exists((()=>{
            if (((e,t,n)=>t ? ((e,t)=>Yx(e, t).breakAt.isNone())(e.dom, n) : ((e,t)=>Gx(e, t).breakAt.isNone())(e.dom, n))(n, t, o)) {
                const o = aE(e, n, t ? po : go);
                return e.selection.setRng(o),
                !0
            }
            return !1
        }
        ))
    }
      , yE = (e,t)=>!!e.selection.isCollapsed() && vE(e, t)
      , CE = {
        shiftKey: !1,
        altKey: !1,
        ctrlKey: !1,
        metaKey: !1,
        keyCode: 0
    }
      , wE = (e,t)=>t.keyCode === e.keyCode && t.shiftKey === e.shiftKey && t.altKey === e.altKey && t.ctrlKey === e.ctrlKey && t.metaKey === e.metaKey
      , xE = (e,...t)=>()=>e.apply(null, t)
      , kE = (e,t)=>J(((e,t)=>te((e=>V(e, (e=>({
        ...CE,
        ...e
    }))))(e), (e=>wE(e, t) ? [e] : [])))(e, t), (e=>e.action()))
      , EE = (e,t)=>ue(((e,t)=>te((e=>V(e, (e=>({
        ...CE,
        ...e
    }))))(e), (e=>wE(e, t) ? [e] : [])))(e, t), (e=>e.action()))
      , SE = (e,t)=>{
        const n = t ? Vc.Forwards : Vc.Backwards
          , o = e.selection.getRng();
        return pk(e, n, o, Zg, ep, lr).exists((t=>(fk(e, t),
        !0)))
    }
      , _E = (e,t)=>{
        const n = t ? 1 : -1
          , o = e.selection.getRng();
        return hk(e, n, o, Zg, ep, lr).exists((t=>(fk(e, t),
        !0)))
    }
      , NE = (e,t)=>vk(e, t, t ? ep : Zg)
      , RE = ol([{
        none: ["current"]
    }, {
        first: ["current"]
    }, {
        middle: ["current", "target"]
    }, {
        last: ["current"]
    }])
      , AE = {
        ...RE,
        none: e=>RE.none(e)
    }
      , OE = (e,t,n)=>te(Pn(e), (e=>Cn(e, t) ? n(e) ? [e] : [] : OE(e, t, n)))
      , TE = (e,t)=>Zn(e, "table", t)
      , BE = (e,t,n,o,r=M)=>{
        const s = 1 === o;
        if (!s && n <= 0)
            return AE.first(e[0]);
        if (s && n >= e.length - 1)
            return AE.last(e[e.length - 1]);
        {
            const s = n + o
              , a = e[s];
            return r(a) ? AE.middle(t, a) : BE(e, t, s, o, r)
        }
    }
      , DE = (e,t)=>TE(e, t).bind((t=>{
        const n = OE(t, "th,td", M);
        return Z(n, (t=>xn(e, t))).map((e=>({
            index: e,
            all: n
        })))
    }
    ))
      , PE = (e,t,n,o,r)=>{
        const s = Mo(bn(n), "td,th,caption").map((e=>e.dom))
          , a = G(((e,t)=>te(t, (t=>{
            const n = ((e,t)=>({
                left: e.left - t,
                top: e.top - t,
                right: e.right + -2,
                bottom: e.bottom + -2,
                width: e.width + t,
                height: e.height + t
            }))(si(t.getBoundingClientRect()), -1);
            return [{
                x: n.left,
                y: e(n),
                cell: t
            }, {
                x: n.right,
                y: e(n),
                cell: t
            }]
        }
        )))(e, s), (e=>t(e, r)));
        return ((e,t,n)=>X(e, ((e,o)=>e.fold((()=>I.some(o)), (e=>{
            const r = Math.sqrt(Math.abs(e.x - t) + Math.abs(e.y - n))
              , s = Math.sqrt(Math.abs(o.x - t) + Math.abs(o.y - n));
            return I.some(s < r ? o : e)
        }
        ))), I.none()))(a, o, r).map((e=>e.cell))
    }
      , LE = O(PE, (e=>e.bottom), ((e,t)=>e.y < t))
      , ME = O(PE, (e=>e.top), ((e,t)=>e.y > t))
      , IE = (e,t,n)=>{
        const o = e(t, n);
        return (e=>e.breakType === zx.Wrap && 0 === e.positions.length)(o) || !nr(n.getNode()) && (e=>e.breakType === zx.Br && 1 === e.positions.length)(o) ? !((e,t,n)=>n.breakAt.exists((n=>e(t, n).breakAt.isSome())))(e, t, o) : o.breakAt.isNone()
    }
      , FE = O(IE, Gx)
      , UE = O(IE, Yx)
      , zE = (e,t,n,o)=>{
        const r = e.selection.getRng()
          , s = t ? 1 : -1;
        return !(!gc() || !((e,t,n)=>{
            const o = Bi.fromRangeStart(t);
            return lu(!e, n).exists((e=>e.isEqual(o)))
        }
        )(t, r, n) || (Yw(s, e, n, !t, !1).each((t=>{
            fk(e, t)
        }
        )),
        0))
    }
      , jE = (e,t,n)=>{
        const o = ((e,t)=>{
            const n = t.getNode(e);
            return Ko(n) ? I.some(n) : I.none()
        }
        )(!!t, n)
          , r = !1 === t;
        o.fold((()=>fk(e, n.toRange())), (o=>lu(r, e.getBody()).filter((e=>e.isEqual(n))).fold((()=>fk(e, n.toRange())), (n=>((e,t,n)=>{
            t.undoManager.transact((()=>{
                const o = e ? fo : mo
                  , r = aE(t, bn(n), o);
                fk(t, r)
            }
            ))
        }
        )(t, e, o)))))
    }
      , HE = (e,t,n,o)=>{
        const r = e.selection.getRng()
          , s = Bi.fromRangeStart(r)
          , a = e.getBody();
        if (!t && FE(o, s)) {
            const o = ((e,t,n)=>((e,t)=>le(t.getClientRects()).bind((t=>LE(e, t.left, t.top))).bind((e=>{
                return Kx(mu(n = e).map((e=>Gx(n, e).positions.concat(e))).getOr([]), t);
                var n
            }
            )))(t, n).orThunk((()=>le(n.getClientRects()).bind((n=>Wx(Xx(e, Bi.before(t)), n.left))))).getOr(Bi.before(t)))(a, n, s);
            return jE(e, t, o),
            !0
        }
        if (t && UE(o, s)) {
            const o = ((e,t,n)=>((e,t)=>de(t.getClientRects()).bind((t=>ME(e, t.left, t.top))).bind((e=>{
                return Kx(uu(n = e).map((e=>[e].concat(Yx(n, e).positions))).getOr([]), t);
                var n
            }
            )))(t, n).orThunk((()=>le(n.getClientRects()).bind((n=>Wx(Qx(e, Bi.after(t)), n.left))))).getOr(Bi.after(t)))(a, n, s);
            return jE(e, t, o),
            !0
        }
        return !1
    }
      , $E = (e,t,n)=>I.from(e.dom.getParent(e.selection.getNode(), "td,th")).bind((o=>I.from(e.dom.getParent(o, "table")).map((r=>n(e, t, r, o))))).getOr(!1)
      , VE = (e,t)=>$E(e, t, zE)
      , qE = (e,t)=>$E(e, t, HE)
      , WE = (e,t,n)=>n.fold(I.none, I.none, ((e,t)=>{
        return (n = t,
        ((e,t)=>{
            const n = e=>{
                for (let o = 0; o < e.childNodes.length; o++) {
                    const r = bn(e.childNodes[o]);
                    if (t(r))
                        return I.some(r);
                    const s = n(e.childNodes[o]);
                    if (s.isSome())
                        return s
                }
                return I.none()
            }
            ;
            return n(e.dom)
        }
        )(n, wg)).map((e=>(e=>{
            const t = af.exact(e, 0, e, 0);
            return mf(t)
        }
        )(e)));
        var n
    }
    ), (n=>(e.execCommand("mceTableInsertRowAfter"),
    KE(e, t, n))))
      , KE = (e,t,n)=>{
        return WE(e, t, (r = eo,
        DE(o = n, void 0).fold((()=>AE.none(o)), (e=>BE(e.all, o, e.index, 1, r)))));
        var o, r
    }
      , GE = (e,t,n)=>{
        return WE(e, t, (r = eo,
        DE(o = n, void 0).fold((()=>AE.none()), (e=>BE(e.all, o, e.index, -1, r)))));
        var o, r
    }
      , YE = (e,t)=>{
        const n = ["table", "li", "dl"]
          , o = bn(e.getBody())
          , r = e=>{
            const t = jt(e);
            return xn(e, o) || H(n, t)
        }
          , s = e.selection.getRng();
        return ((e,t)=>((e,t,n=L)=>n(t) ? I.none() : H(e, jt(t)) ? I.some(t) : Qn(t, e.join(","), (e=>Cn(e, "table") || n(e))))(["td", "th"], e, t))(bn(t ? s.endContainer : s.startContainer), r).map((n=>(TE(n, r).each((t=>{
            e.model.table.clearSelectedCells(t.dom)
        }
        )),
        e.selection.collapse(!t),
        (t ? KE : GE)(e, r, n).each((t=>{
            e.selection.setRng(t)
        }
        )),
        !0))).getOr(!1)
    }
      , XE = (e,t)=>({
        container: e,
        offset: t
    })
      , QE = Na.DOM
      , JE = e=>t=>e === t ? -1 : 0
      , ZE = (e,t,n)=>{
        if (Xo(e) && t >= 0)
            return I.some(XE(e, t));
        {
            const o = oi(QE);
            return I.from(o.backwards(e, t, JE(e), n)).map((e=>XE(e.container, e.container.data.length)))
        }
    }
      , eS = (e,t,n)=>{
        if (!Xo(e))
            return I.none();
        const o = e.data;
        if (t >= 0 && t <= o.length)
            return I.some(XE(e, t));
        {
            const o = oi(QE);
            return I.from(o.backwards(e, t, JE(e), n)).bind((e=>{
                const o = e.container.data;
                return eS(e.container, t + o.length, n)
            }
            ))
        }
    }
      , tS = (e,t,n)=>{
        if (!Xo(e))
            return I.none();
        const o = e.data;
        if (t <= o.length)
            return I.some(XE(e, t));
        {
            const r = oi(QE);
            return I.from(r.forwards(e, t, JE(e), n)).bind((e=>tS(e.container, t - o.length, n)))
        }
    }
      , nS = (e,t,n,o,r)=>{
        const s = oi(e, (e=>t=>e.isBlock(t) || H(["BR", "IMG", "HR", "INPUT"], t.nodeName) || "false" === e.getContentEditable(t))(e));
        return I.from(s.backwards(t, n, o, r))
    }
      , oS = e=>Pr(e.toString().replace(/\u00A0/g, " "))
      , rS = e=>"" !== e && -1 !== " \xa0\f\n\r\t\v".indexOf(e)
      , sS = (e,t)=>e.substring(t.length)
      , aS = (e,t,n,o=0)=>{
        return (r = bn(t.startContainer),
        Zn(r, xg)).fold((()=>((e,t,n,o=0)=>{
            if (!(r = t).collapsed || !Xo(r.startContainer))
                return I.none();
            var r;
            const s = {
                text: "",
                offset: 0
            }
              , a = e.getParent(t.startContainer, e.isBlock) || e.getRoot();
            return nS(e, t.startContainer, t.startOffset, ((e,t,o)=>(s.text = o + s.text,
            s.offset += t,
            ((e,t,n)=>{
                let o;
                const r = n.charAt(0);
                for (o = t - 1; o >= 0; o--) {
                    const s = e.charAt(o);
                    if (rS(s))
                        return I.none();
                    if (r === s && je(e, n, o, t))
                        break
                }
                return I.some(o)
            }
            )(s.text, s.offset, n).getOr(t))), a).bind((e=>{
                const r = t.cloneRange();
                if (r.setStart(e.container, e.offset),
                r.setEnd(t.endContainer, t.endOffset),
                r.collapsed)
                    return I.none();
                const s = oS(r);
                return 0 !== s.lastIndexOf(n) || sS(s, n).length < o ? I.none() : I.some({
                    text: sS(s, n),
                    range: r,
                    trigger: n
                })
            }
            ))
        }
        )(e, t, n, o)), (t=>{
            const o = e.createRng();
            o.selectNode(t.dom);
            const r = oS(o);
            return I.some({
                range: o,
                text: sS(r, n),
                trigger: n
            })
        }
        ));
        var r
    }
      , iS = e=>{
        if ((e=>3 === e.nodeType)(e))
            return XE(e, e.data.length);
        {
            const t = e.childNodes;
            return t.length > 0 ? iS(t[t.length - 1]) : XE(e, t.length)
        }
    }
      , lS = (e,t)=>{
        const n = e.childNodes;
        return n.length > 0 && t < n.length ? lS(n[t], 0) : n.length > 0 && (e=>1 === e.nodeType)(e) && n.length === t ? iS(n[n.length - 1]) : XE(e, t)
    }
      , dS = (e,t,n,o={})=>{
        var r;
        const s = t()
          , a = null !== (r = e.selection.getRng().startContainer.nodeValue) && void 0 !== r ? r : ""
          , i = G(s.lookupByTrigger(n.trigger), (t=>n.text.length >= t.minChars && t.matches.getOrThunk((()=>(e=>t=>{
            const n = lS(t.startContainer, t.startOffset);
            return !((e,t)=>{
                var n;
                const o = null !== (n = e.getParent(t.container, e.isBlock)) && void 0 !== n ? n : e.getRoot();
                return nS(e, t.container, t.offset, ((e,t)=>0 === t ? -1 : t), o).filter((e=>{
                    const t = e.container.data.charAt(e.offset - 1);
                    return !rS(t)
                }
                )).isSome()
            }
            )(e, n)
        }
        )(e.dom)))(n.range, a, n.text)));
        if (0 === i.length)
            return I.none();
        const l = Promise.all(V(i, (e=>e.fetch(n.text, e.maxResults, o).then((t=>({
            matchText: n.text,
            items: t,
            columns: e.columns,
            onAction: e.onAction,
            highlightOn: e.highlightOn
        }))))));
        return I.some({
            lookupData: l,
            context: n
        })
    }
    ;
    var cS;
    !function(e) {
        e[e.Error = 0] = "Error",
        e[e.Value = 1] = "Value"
    }(cS || (cS = {}));
    const uS = (e,t,n)=>e.stype === cS.Error ? t(e.serror) : n(e.svalue)
      , mS = e=>({
        stype: cS.Value,
        svalue: e
    })
      , fS = e=>({
        stype: cS.Error,
        serror: e
    })
      , gS = uS
      , pS = e=>f(e) && me(e).length > 100 ? " removed due to size" : JSON.stringify(e, null, 2)
      , hS = (e,t)=>fS([{
        path: e,
        getErrorInfo: t
    }])
      , bS = (e,t)=>({
        extract: (n,o)=>xe(o, e).fold((()=>((e,t)=>hS(e, (()=>'Choice schema did not contain choice key: "' + t + '"')))(n, e)), (e=>((e,t,n,o)=>xe(n, o).fold((()=>((e,t,n)=>hS(e, (()=>'The chosen schema: "' + n + '" did not exist in branches: ' + pS(t))))(e, n, o)), (n=>n.extract(e.concat(["branch: " + o]), t))))(n, o, t, e))),
        toString: ()=>"chooseOn(" + e + "). Possible values: " + me(t)
    })
      , vS = e=>(...t)=>{
        if (0 === t.length)
            throw new Error("Can't merge zero objects");
        const n = {};
        for (let o = 0; o < t.length; o++) {
            const r = t[o];
            for (const t in r)
                ke(r, t) && (n[t] = e(n[t], r[t]))
        }
        return n
    }
      , yS = vS(((e,t)=>g(e) && g(t) ? yS(e, t) : t))
      , CS = (vS(((e,t)=>t)),
    e=>({
        tag: "defaultedThunk",
        process: N(e)
    }))
      , wS = e=>{
        const t = (e=>{
            const t = []
              , n = [];
            return q(e, (e=>{
                uS(e, (e=>n.push(e)), (e=>t.push(e)))
            }
            )),
            {
                values: t,
                errors: n
            }
        }
        )(e);
        return t.errors.length > 0 ? (n = t.errors,
        S(fS, ee)(n)) : mS(t.values);
        var n
    }
      , xS = (e,t,n)=>{
        switch (e.tag) {
        case "field":
            return t(e.key, e.newKey, e.presence, e.prop);
        case "custom":
            return n(e.newKey, e.instantiator)
        }
    }
      , kS = e=>({
        extract: (t,n)=>{
            return o = e(n),
            r = e=>((e,t)=>hS(e, N(t)))(t, e),
            o.stype === cS.Error ? r(o.serror) : o;
            var o, r
        }
        ,
        toString: N("val")
    })
      , ES = kS(mS)
      , SS = (e,t,n,o)=>o(xe(e, t).getOrThunk((()=>n(e))))
      , _S = (e,t,n,o,r)=>{
        const s = e=>r.extract(t.concat([o]), e)
          , a = e=>e.fold((()=>mS(I.none())), (e=>{
            const n = r.extract(t.concat([o]), e);
            return s = n,
            a = I.some,
            s.stype === cS.Value ? {
                stype: cS.Value,
                svalue: a(s.svalue)
            } : s;
            var s, a
        }
        ));
        switch (e.tag) {
        case "required":
            return ((e,t,n,o)=>xe(t, n).fold((()=>((e,t,n)=>hS(e, (()=>'Could not find valid *required* value for "' + t + '" in ' + pS(n))))(e, n, t)), o))(t, n, o, s);
        case "defaultedThunk":
            return SS(n, o, e.process, s);
        case "option":
            return ((e,t,n)=>n(xe(e, t)))(n, o, a);
        case "defaultedOptionThunk":
            return ((e,t,n,o)=>o(xe(e, t).map((t=>!0 === t ? n(e) : t))))(n, o, e.process, a);
        case "mergeWithThunk":
            return SS(n, o, N({}), (t=>{
                const o = yS(e.process(n), t);
                return s(o)
            }
            ))
        }
    }
      , NS = e=>({
        extract: (t,n)=>((e,t,n)=>{
            const o = {}
              , r = [];
            for (const s of n)
                xS(s, ((n,s,a,i)=>{
                    const l = _S(a, e, t, n, i);
                    gS(l, (e=>{
                        r.push(...e)
                    }
                    ), (e=>{
                        o[s] = e
                    }
                    ))
                }
                ), ((e,n)=>{
                    o[e] = n(t)
                }
                ));
            return r.length > 0 ? fS(r) : mS(o)
        }
        )(t, n, e),
        toString: ()=>{
            const t = V(e, (e=>xS(e, ((e,t,n,o)=>e + " -> " + o.toString()), ((e,t)=>"state(" + e + ")"))));
            return "obj{\n" + t.join("\n") + "}"
        }
    })
      , RS = e=>({
        extract: (t,n)=>{
            const o = V(n, ((n,o)=>e.extract(t.concat(["[" + o + "]"]), n)));
            return wS(o)
        }
        ,
        toString: ()=>"array(" + e.toString() + ")"
    })
      , AS = (e,t,n)=>{
        return o = ((e,t,n)=>((e,t)=>e.stype === cS.Error ? {
            stype: cS.Error,
            serror: t(e.serror)
        } : e)(t.extract([e], n), (e=>({
            input: n,
            errors: e
        }))))(e, t, n),
        uS(o, nl.error, nl.value);
        var o
    }
      , OS = (e,t)=>bS(e, pe(t, NS))
      , TS = N(ES)
      , BS = (e,t)=>kS((n=>{
        const o = typeof n;
        return e(n) ? mS(n) : fS(`Expected type: ${t} but got: ${o}`)
    }
    ))
      , DS = BS(x, "number")
      , PS = BS(m, "string")
      , LS = BS(b, "boolean")
      , MS = BS(w, "function")
      , IS = (e,t,n,o)=>({
        tag: "field",
        key: e,
        newKey: t,
        presence: n,
        prop: o
    })
      , FS = (e,t)=>({
        tag: "custom",
        newKey: e,
        instantiator: t
    })
      , US = (e,t)=>IS(e, e, {
        tag: "required",
        process: {}
    }, t)
      , zS = e=>US(e, PS)
      , jS = e=>US(e, MS)
      , HS = (e,t)=>IS(e, e, {
        tag: "option",
        process: {}
    }, t)
      , $S = e=>HS(e, PS)
      , VS = (e,t,n)=>IS(e, e, CS(t), n)
      , qS = (e,t)=>VS(e, t, DS)
      , WS = (e,t,n)=>VS(e, t, (e=>{
        return t = t=>H(e, t) ? nl.value(t) : nl.error(`Unsupported value: "${t}", choose one of "${e.join(", ")}".`),
        kS((e=>t(e).fold(fS, mS)));
        var t
    }
    )(n))
      , KS = (e,t)=>VS(e, t, LS)
      , GS = (e,t)=>VS(e, t, MS)
      , YS = zS("type")
      , XS = jS("fetch")
      , QS = jS("onAction")
      , JS = GS("onSetup", (()=>E))
      , ZS = $S("text")
      , e_ = $S("icon")
      , t_ = $S("tooltip")
      , n_ = $S("label")
      , o_ = KS("active", !1)
      , r_ = KS("enabled", !0)
      , s_ = KS("primary", !1)
      , a_ = e=>((e,t)=>VS("type", t, PS))(0, e)
      , i_ = NS([YS, zS("trigger"), qS("minChars", 1), (1,
    ((e,t)=>IS(e, e, CS(1), TS()))("columns")), qS("maxResults", 10), ("matches",
    HS("matches", MS)), XS, QS, (l_ = PS,
    VS("highlightOn", [], RS(l_)))]);
    var l_;
    const d_ = [r_, t_, e_, ZS, JS]
      , c_ = [o_].concat(d_)
      , u_ = [GS("predicate", L), WS("scope", "node", ["node", "editor"]), WS("position", "selection", ["node", "selection", "line"])]
      , m_ = d_.concat([a_("contextformbutton"), s_, QS, FS("original", R)])
      , f_ = c_.concat([a_("contextformbutton"), s_, QS, FS("original", R)])
      , g_ = d_.concat([a_("contextformbutton")])
      , p_ = c_.concat([a_("contextformtogglebutton")])
      , h_ = OS("type", {
        contextformbutton: m_,
        contextformtogglebutton: f_
    });
    NS([a_("contextform"), GS("initValue", N("")), n_, ((e,t)=>IS(e, e, {
        tag: "required",
        process: {}
    }, RS(t)))("commands", h_), HS("launch", OS("type", {
        contextformbutton: g_,
        contextformtogglebutton: p_
    }))].concat(u_));
    const b_ = e=>{
        const t = e.ui.registry.getAll().popups
          , n = pe(t, (e=>{
            return (t = e,
            AS("Autocompleter", i_, {
                trigger: t.ch,
                ...t
            })).fold((e=>{
                throw new Error("Errors: \n" + (e=>{
                    const t = e.length > 10 ? e.slice(0, 10).concat([{
                        path: [],
                        getErrorInfo: N("... (only showing first ten failures)")
                    }]) : e;
                    return V(t, (e=>"Failed path: (" + e.path.join(" > ") + ")\n" + e.getErrorInfo()))
                }
                )((t = e).errors).join("\n") + "\n\nInput object: " + pS(t.input));
                var t
            }
            ), R);
            var t
        }
        ))
          , o = Se(Ce(n, (e=>e.trigger)))
          , r = we(n);
        return {
            dataset: n,
            triggers: o,
            lookupByTrigger: e=>G(r, (t=>t.trigger === e))
        }
    }
      , v_ = e=>{
        const t = Ia()
          , n = Oa(!1)
          , o = t.isSet
          , r = ()=>{
            o() && ((e=>{
                kC(e).autocompleter.removeDecoration()
            }
            )(e),
            (e=>{
                e.dispatch("AutocompleterEnd")
            }
            )(e),
            n.set(!1),
            t.clear())
        }
          , s = Pe((()=>b_(e)))
          , a = a=>{
            (n=>t.get().map((t=>aS(e.dom, e.selection.getRng(), t.trigger).bind((t=>dS(e, s, t, n))))).getOrThunk((()=>((e,t)=>{
                const n = t()
                  , o = e.selection.getRng();
                return ((e,t,n)=>ue(n.triggers, (n=>aS(e, t, n))))(e.dom, o, n).bind((n=>dS(e, t, n)))
            }
            )(e, s))))(a).fold(r, (s=>{
                (n=>{
                    o() || (((e,t)=>{
                        kC(e).autocompleter.addDecoration(t)
                    }
                    )(e, n.range),
                    t.set({
                        trigger: n.trigger,
                        matchLength: n.text.length
                    }))
                }
                )(s.context),
                s.lookupData.then((o=>{
                    t.get().map((a=>{
                        const i = s.context;
                        a.trigger === i.trigger && (i.text.length - a.matchLength >= 10 ? r() : (t.set({
                            ...a,
                            matchLength: i.text.length
                        }),
                        n.get() ? ((e,t)=>{
                            e.dispatch("AutocompleterUpdate", t)
                        }
                        )(e, {
                            lookupData: o
                        }) : (n.set(!0),
                        ((e,t)=>{
                            e.dispatch("AutocompleterStart", t)
                        }
                        )(e, {
                            lookupData: o
                        }))))
                    }
                    ))
                }
                ))
            }
            ))
        }
        ;
        e.addCommand("mceAutocompleterReload", ((e,t)=>{
            const n = f(t) ? t.fetchOptions : {};
            a(n)
        }
        )),
        e.addCommand("mceAutocompleterClose", r),
        ((e,t)=>{
            const n = Ua(t.load, 50);
            e.on("keypress compositionend", (e=>{
                27 !== e.which && n.throttle()
            }
            )),
            e.on("keydown", (e=>{
                const o = e.which;
                8 === o ? n.throttle() : 27 === o && t.cancelIfNecessary()
            }
            )),
            e.on("remove", n.cancel)
        }
        )(e, {
            cancelIfNecessary: r,
            load: a
        })
    }
      , y_ = e=>(t,n,o={})=>{
        const r = t.getBody()
          , s = {
            bubbles: !0,
            composed: !0,
            data: null,
            isComposing: !1,
            detail: 0,
            view: null,
            target: r,
            currentTarget: r,
            eventPhase: Event.AT_TARGET,
            originalTarget: r,
            explicitOriginalTarget: r,
            isTrusted: !1,
            srcElement: r,
            cancelable: !1,
            preventDefault: E,
            inputType: n
        }
          , a = ca(new InputEvent(e));
        return t.dispatch(e, {
            ...a,
            ...s,
            ...o
        })
    }
      , C_ = y_("input")
      , w_ = y_("beforeinput")
      , x_ = (e,t)=>{
        const n = e.dom
          , o = e.schema.getMoveCaretBeforeOnEnterElements();
        if (!t)
            return;
        if (/^(LI|DT|DD)$/.test(t.nodeName)) {
            const e = (e=>{
                for (; e; ) {
                    if (jo(e) || Xo(e) && e.data && /[\r\n\s]/.test(e.data))
                        return e;
                    e = e.nextSibling
                }
                return null
            }
            )(t.firstChild);
            e && /^(UL|OL|DL)$/.test(e.nodeName) && t.insertBefore(n.doc.createTextNode(ur), t.firstChild)
        }
        const r = n.createRng();
        if (t.normalize(),
        t.hasChildNodes()) {
            const e = new Fo(t,t);
            let n, s = t;
            for (; n = e.current(); ) {
                if (Xo(n)) {
                    r.setStart(n, 0),
                    r.setEnd(n, 0);
                    break
                }
                if (o[n.nodeName.toLowerCase()]) {
                    r.setStartBefore(n),
                    r.setEndBefore(n);
                    break
                }
                s = n,
                n = e.next()
            }
            n || (r.setStart(s, 0),
            r.setEnd(s, 0))
        } else
            nr(t) ? t.nextSibling && n.isBlock(t.nextSibling) ? (r.setStartBefore(t),
            r.setEndBefore(t)) : (r.setStartAfter(t),
            r.setEndAfter(t)) : (r.setStart(t, 0),
            r.setEnd(t, 0));
        e.selection.setRng(r),
        Vf(e, r)
    }
      , k_ = (e,t)=>{
        const n = e.getRoot();
        let o, r = t;
        for (; r !== n && r && "false" !== e.getContentEditable(r); )
            "true" === e.getContentEditable(r) && (o = r),
            r = r.parentNode;
        return r !== n ? o : n
    }
      , E_ = e=>I.from(e.dom.getParent(e.selection.getStart(!0), e.dom.isBlock))
      , S_ = (e,t)=>{
        const n = null == e ? void 0 : e.parentNode;
        return C(n) && n.nodeName === t
    }
      , __ = e=>C(e) && /^(OL|UL|LI)$/.test(e.nodeName)
      , N_ = e=>{
        const t = e.parentNode;
        return C(n = t) && /^(LI|DT|DD)$/.test(n.nodeName) ? t : e;
        var n
    }
      , R_ = (e,t,n)=>{
        let o = e[n ? "firstChild" : "lastChild"];
        for (; o && !jo(o); )
            o = o[n ? "nextSibling" : "previousSibling"];
        return o === t
    }
      , A_ = (e,t)=>t && "A" === t.nodeName && e.isEmpty(t)
      , O_ = e=>{
        e.innerHTML = '<br data-mce-bogus="1">'
    }
      , T_ = (e,t)=>e.nodeName === t || e.previousSibling && e.previousSibling.nodeName === t
      , B_ = (e,t)=>C(t) && e.isBlock(t) && !/^(TD|TH|CAPTION|FORM)$/.test(t.nodeName) && !/^(fixed|absolute)/i.test(t.style.position) && e.isEditable(t.parentNode) && "false" !== e.getContentEditable(t)
      , D_ = (e,t,n)=>Xo(t) ? e ? 1 === n && t.data.charAt(n - 1) === Br ? 0 : n : n === t.data.length - 1 && t.data.charAt(n) === Br ? t.data.length : n : n
      , P_ = (e,t)=>{
        El(e).toLowerCase() === t.tagName.toLowerCase() && ((e,t,n)=>{
            const o = e.dom;
            I.from(n.style).map(o.parseStyle).each((e=>{
                const n = {
                    ...co(bn(t)),
                    ...e
                };
                o.setStyles(t, n)
            }
            ));
            const r = I.from(n.class).map((e=>e.split(/\s+/)))
              , s = I.from(t.className).map((e=>G(e.split(/\s+/), (e=>"" !== e))));
            Lt(r, s, ((e,n)=>{
                const r = G(n, (t=>!H(e, t)))
                  , s = [...e, ...r];
                o.setAttrib(t, "class", s.join(" "))
            }
            ));
            const a = ["style", "class"]
              , i = ye(n, ((e,t)=>!H(a, t)));
            o.setAttribs(t, i)
        }
        )(e, t, Sl(e))
    }
      , L_ = {
        insert: (e,t)=>{
            let n, o, r, s, a = !1;
            const i = e.dom
              , l = e.schema
              , d = l.getNonEmptyElements()
              , c = e.selection.getRng()
              , u = El(e)
              , f = t=>{
                let o = n;
                const s = l.getTextInlineElements();
                let a;
                a = t || "TABLE" === r || "HR" === r ? i.create(t || u) : w.cloneNode(!1);
                let d = a;
                if (!1 === Al(e))
                    i.setAttrib(a, "style", null),
                    i.setAttrib(a, "class", null);
                else
                    do {
                        if (s[o.nodeName]) {
                            if (gu(o) || Nu(o))
                                continue;
                            const e = o.cloneNode(!1);
                            i.setAttrib(e, "id", ""),
                            a.hasChildNodes() ? (e.appendChild(a.firstChild),
                            a.appendChild(e)) : (d = e,
                            a.appendChild(e))
                        }
                    } while ((o = o.parentNode) && o !== v);
                return P_(e, a),
                O_(d),
                a
            }
              , g = e=>{
                const t = D_(e, n, o);
                if (Xo(n) && (e ? t > 0 : t < n.data.length))
                    return !1;
                if (n.parentNode === w && a && !e)
                    return !0;
                if (e && jo(n) && n === w.firstChild)
                    return !0;
                if (T_(n, "TABLE") || T_(n, "HR"))
                    return a && !e || !a && e;
                const r = new Fo(n,w);
                let s;
                for (Xo(n) && (e && 0 === t ? r.prev() : e || t !== n.data.length || r.next()); s = r.current(); ) {
                    if (jo(s)) {
                        if (!s.getAttribute("data-mce-bogus")) {
                            const e = s.nodeName.toLowerCase();
                            if (d[e] && "br" !== e)
                                return !1
                        }
                    } else if (Xo(s) && !ss(s.data))
                        return !1;
                    e ? r.prev() : r.next()
                }
                return !0
            }
              , p = ()=>{
                let t;
                return t = /^(H[1-6]|PRE|FIGURE)$/.test(r) && "HGROUP" !== x ? f(u) : f(),
                ((e,t)=>{
                    const n = Ol(e);
                    return !y(t) && (m(n) ? H(Dt.explode(n), t.nodeName.toLowerCase()) : n)
                }
                )(e, s) && B_(i, s) && i.isEmpty(w) ? t = i.split(s, w) : i.insertAfter(t, w),
                x_(e, t),
                t
            }
            ;
            wf(i, c).each((e=>{
                c.setStart(e.startContainer, e.startOffset),
                c.setEnd(e.endContainer, e.endOffset)
            }
            )),
            n = c.startContainer,
            o = c.startOffset;
            const h = !(!t || !t.shiftKey)
              , b = !(!t || !t.ctrlKey);
            jo(n) && n.hasChildNodes() && (a = o > n.childNodes.length - 1,
            n = n.childNodes[Math.min(o, n.childNodes.length - 1)] || n,
            o = a && Xo(n) ? n.data.length : 0);
            const v = k_(i, n);
            if (!v || ((e,t)=>{
                const n = e.dom.getParent(t, "ol,ul,dl");
                return null !== n && "false" === e.dom.getContentEditableParent(n)
            }
            )(e, n))
                return;
            h || (n = ((e,t,n,o,r)=>{
                var s, a;
                const i = e.dom
                  , l = null !== (s = k_(i, o)) && void 0 !== s ? s : i.getRoot();
                let d = i.getParent(o, i.isBlock);
                if (!d || !B_(i, d)) {
                    if (d = d || l,
                    !d.hasChildNodes()) {
                        const o = i.create(t);
                        return P_(e, o),
                        d.appendChild(o),
                        n.setStart(o, 0),
                        n.setEnd(o, 0),
                        o
                    }
                    let s, c = o;
                    for (; c && c.parentNode !== d; )
                        c = c.parentNode;
                    for (; c && !i.isBlock(c); )
                        s = c,
                        c = c.previousSibling;
                    const u = null === (a = null == s ? void 0 : s.parentElement) || void 0 === a ? void 0 : a.nodeName;
                    if (s && u && e.schema.isValidChild(u, t.toLowerCase())) {
                        const a = s.parentNode
                          , l = i.create(t);
                        for (P_(e, l),
                        a.insertBefore(l, s),
                        c = s; c && !i.isBlock(c); ) {
                            const e = c.nextSibling;
                            l.appendChild(c),
                            c = e
                        }
                        n.setStart(o, r),
                        n.setEnd(o, r)
                    }
                }
                return o
            }
            )(e, u, c, n, o));
            let w = i.getParent(n, i.isBlock) || i.getRoot();
            s = C(null == w ? void 0 : w.parentNode) ? i.getParent(w.parentNode, i.isBlock) : null,
            r = w ? w.nodeName.toUpperCase() : "";
            const x = s ? s.nodeName.toUpperCase() : "";
            if ("LI" !== x || b || (w = s,
            s = s.parentNode,
            r = x),
            /^(LI|DT|DD)$/.test(r) && jo(s) && i.isEmpty(w))
                return void ((e,t,n,o,r)=>{
                    const s = e.dom
                      , a = e.selection.getRng()
                      , i = n.parentNode;
                    if (n === e.getBody() || !i)
                        return;
                    var l;
                    __(l = n) && __(l.parentNode) && (r = "LI");
                    let d = t(r);
                    if (R_(n, o, !0) && R_(n, o, !1))
                        if (S_(n, "LI")) {
                            const e = N_(n);
                            s.insertAfter(d, e),
                            (e=>{
                                var t;
                                return (null === (t = e.parentNode) || void 0 === t ? void 0 : t.firstChild) === e
                            }
                            )(n) ? s.remove(e) : s.remove(n)
                        } else
                            s.replace(d, n);
                    else if (R_(n, o, !0))
                        S_(n, "LI") ? (s.insertAfter(d, N_(n)),
                        d.appendChild(s.doc.createTextNode(" ")),
                        d.appendChild(n)) : i.insertBefore(d, n),
                        s.remove(o);
                    else if (R_(n, o, !1))
                        s.insertAfter(d, N_(n)),
                        s.remove(o);
                    else {
                        n = N_(n);
                        const e = a.cloneRange();
                        e.setStartAfter(o),
                        e.setEndAfter(n);
                        const t = e.extractContents();
                        "LI" === r && ((e,t)=>e.firstChild && "LI" === e.firstChild.nodeName)(t) ? (d = t.firstChild,
                        s.insertAfter(t, n)) : (s.insertAfter(t, n),
                        s.insertAfter(d, n)),
                        s.remove(o)
                    }
                    x_(e, d)
                }
                )(e, f, s, w, u);
            if (w === e.getBody() || !B_(i, w))
                return;
            const k = w.parentNode;
            let E;
            if (Ir(w))
                E = qr(w),
                i.isEmpty(w) && O_(w),
                P_(e, E),
                x_(e, E);
            else if (g(!1))
                E = p();
            else if (g(!0) && k)
                E = k.insertBefore(f(), w),
                x_(e, T_(w, "HR") ? E : w);
            else {
                const t = (e=>{
                    const t = e.cloneRange();
                    return t.setStart(e.startContainer, D_(!0, e.startContainer, e.startOffset)),
                    t.setEnd(e.endContainer, D_(!1, e.endContainer, e.endOffset)),
                    t
                }
                )(c).cloneRange();
                t.setEndAfter(w);
                const n = t.extractContents();
                (e=>{
                    q(Lo(bn(e), qt), (e=>{
                        const t = e.dom;
                        t.nodeValue = Pr(t.data)
                    }
                    ))
                }
                )(n),
                (e=>{
                    let t = e;
                    do {
                        Xo(t) && (t.data = t.data.replace(/^[\r\n]+/, "")),
                        t = t.firstChild
                    } while (t)
                }
                )(n),
                E = n.firstChild,
                i.insertAfter(n, w),
                ((e,t,n)=>{
                    var o;
                    const r = [];
                    if (!n)
                        return;
                    let s = n;
                    for (; s = s.firstChild; ) {
                        if (e.isBlock(s))
                            return;
                        jo(s) && !t[s.nodeName.toLowerCase()] && r.push(s)
                    }
                    let a = r.length;
                    for (; a--; )
                        s = r[a],
                        (!s.hasChildNodes() || s.firstChild === s.lastChild && "" === (null === (o = s.firstChild) || void 0 === o ? void 0 : o.nodeValue) || A_(e, s)) && e.remove(s)
                }
                )(i, d, E),
                ((e,t)=>{
                    t.normalize();
                    const n = t.lastChild;
                    (!n || jo(n) && /^(left|right)$/gi.test(e.getStyle(n, "float", !0))) && e.add(t, "br")
                }
                )(i, w),
                i.isEmpty(w) && O_(w),
                E.normalize(),
                i.isEmpty(E) ? (i.remove(E),
                p()) : (P_(e, E),
                x_(e, E))
            }
            i.setAttrib(E, "id", ""),
            e.dispatch("NewBlock", {
                newBlock: E
            })
        }
        ,
        fakeEventName: "insertParagraph"
    }
      , M_ = (e,t,n)=>{
        const o = e.dom.createRng();
        n ? (o.setStartBefore(t),
        o.setEndBefore(t)) : (o.setStartAfter(t),
        o.setEndAfter(t)),
        e.selection.setRng(o),
        Vf(e, o)
    }
      , I_ = (e,t)=>{
        const n = pn("br");
        mo(bn(t), n),
        e.undoManager.add()
    }
      , F_ = (e,t)=>{
        U_(e.getBody(), t) || fo(bn(t), pn("br"));
        const n = pn("br");
        fo(bn(t), n),
        M_(e, n.dom, !1),
        e.undoManager.add()
    }
      , U_ = (e,t)=>{
        return n = Bi.after(t),
        !!nr(n.getNode()) || du(e, Bi.after(t)).map((e=>nr(e.getNode()))).getOr(!1);
        var n
    }
      , z_ = e=>e && "A" === e.nodeName && "href"in e
      , j_ = e=>e.fold(L, z_, z_, L)
      , H_ = (e,t)=>{
        t.fold(E, O(I_, e), O(F_, e), E)
    }
      , $_ = {
        insert: (e,t)=>{
            const n = (e=>{
                const t = O(Gp, e)
                  , n = Bi.fromRangeStart(e.selection.getRng());
                return Tx(t, e.getBody(), n).filter(j_)
            }
            )(e);
            n.isSome() ? n.each(O(H_, e)) : ((e,t)=>{
                const n = e.selection
                  , o = e.dom
                  , r = n.getRng();
                let s, a = !1;
                wf(o, r).each((e=>{
                    r.setStart(e.startContainer, e.startOffset),
                    r.setEnd(e.endContainer, e.endOffset)
                }
                ));
                let i = r.startOffset
                  , l = r.startContainer;
                if (jo(l) && l.hasChildNodes()) {
                    const e = i > l.childNodes.length - 1;
                    l = l.childNodes[Math.min(i, l.childNodes.length - 1)] || l,
                    i = e && Xo(l) ? l.data.length : 0
                }
                let d = o.getParent(l, o.isBlock);
                const c = d && d.parentNode ? o.getParent(d.parentNode, o.isBlock) : null
                  , u = c ? c.nodeName.toUpperCase() : ""
                  , m = !(!t || !t.ctrlKey);
                "LI" !== u || m || (d = c),
                Xo(l) && i >= l.data.length && (((e,t,n)=>{
                    const o = new Fo(t,n);
                    let r;
                    const s = e.getNonEmptyElements();
                    for (; r = o.next(); )
                        if (s[r.nodeName.toLowerCase()] || Xo(r) && r.length > 0)
                            return !0;
                    return !1
                }
                )(e.schema, l, d || o.getRoot()) || (s = o.create("br"),
                r.insertNode(s),
                r.setStartAfter(s),
                r.setEndAfter(s),
                a = !0)),
                s = o.create("br"),
                Pi(o, r, s),
                M_(e, s, a),
                e.undoManager.add()
            }
            )(e, t)
        }
        ,
        fakeEventName: "insertLineBreak"
    }
      , V_ = (e,t)=>E_(e).filter((e=>t.length > 0 && Cn(bn(e), t))).isSome()
      , q_ = ol([{
        br: []
    }, {
        block: []
    }, {
        none: []
    }])
      , W_ = (e,t)=>(e=>V_(e, Rl(e)))(e)
      , K_ = e=>(t,n)=>(e=>E_(e).filter((e=>kr(bn(e)))).isSome())(t) === e
      , G_ = (e,t)=>(n,o)=>{
        const r = (e=>E_(e).fold(N(""), (e=>e.nodeName.toUpperCase())))(n) === e.toUpperCase();
        return r === t
    }
      , Y_ = e=>{
        const t = k_(e.dom, e.selection.getStart());
        return y(t)
    }
      , X_ = e=>G_("pre", e)
      , Q_ = e=>(t,n)=>kl(t) === e
      , J_ = (e,t)=>(e=>V_(e, Nl(e)))(e)
      , Z_ = (e,t)=>t
      , eN = e=>{
        const t = El(e)
          , n = k_(e.dom, e.selection.getStart());
        return C(n) && e.schema.isValidChild(n.nodeName, t)
    }
      , tN = (e,t)=>(n,o)=>X(e, ((e,t)=>e && t(n, o)), !0) ? I.some(t) : I.none()
      , nN = (e,t,n)=>{
        t.selection.isCollapsed() || (e=>{
            e.execCommand("delete")
        }
        )(t),
        C(n) && w_(t, e.fakeEventName).isDefaultPrevented() || (e.insert(t, n),
        C(n) && C_(t, e.fakeEventName))
    }
      , oN = (e,t)=>{
        const n = ()=>nN($_, e, t)
          , o = ()=>nN(L_, e, t)
          , r = ((e,t)=>wx([tN([W_], q_.none()), tN([X_(!0), Y_], q_.none()), tN([G_("summary", !0)], q_.br()), tN([X_(!0), Q_(!1), Z_], q_.br()), tN([X_(!0), Q_(!1)], q_.block()), tN([X_(!0), Q_(!0), Z_], q_.block()), tN([X_(!0), Q_(!0)], q_.br()), tN([K_(!0), Z_], q_.br()), tN([K_(!0)], q_.block()), tN([J_], q_.br()), tN([Z_], q_.br()), tN([eN], q_.block())], [e, !(!t || !t.shiftKey)]).getOr(q_.none()))(e, t);
        switch (_l(e)) {
        case "linebreak":
            r.fold(n, n, E);
            break;
        case "block":
            r.fold(o, o, E);
            break;
        case "invert":
            r.fold(o, n, E);
            break;
        default:
            r.fold(n, o, E)
        }
    }
      , rN = xt()
      , sN = e=>e.stopImmediatePropagation()
      , aN = e=>e.keyCode === qm.PAGE_UP || e.keyCode === qm.PAGE_DOWN
      , iN = (e,t,n)=>{
        n && !e.get() ? t.on("NodeChange", sN, !0) : !n && e.get() && t.off("NodeChange", sN),
        e.set(n)
    }
      , lN = (e,t)=>{
        const n = t.container()
          , o = t.offset();
        return Xo(n) ? (n.insertData(o, e),
        I.some(Bi(n, o + e.length))) : jc(t).map((n=>{
            const o = hn(e);
            return t.isAtEnd() ? fo(n, o) : mo(n, o),
            Bi(o.dom, e.length)
        }
        ))
    }
      , dN = O(lN, ur)
      , cN = O(lN, " ")
      , uN = (e,t)=>n=>((e,t)=>!Sp(t) && (((e,t)=>((e,t)=>cu(e.dom, t).isNone())(e, t) || ((e,t)=>du(e.dom, t).isNone())(e, t) || up(e, t) || mp(e, t) || vp(e, t) || bp(e, t))(e, t) || kp(e, t) || Ep(e, t)))(e, n) ? dN(t) : cN(t)
      , mN = e=>{
        const t = Bi.fromRangeStart(e.selection.getRng())
          , n = bn(e.getBody());
        if (e.selection.isCollapsed()) {
            const o = O(Gp, e)
              , r = Bi.fromRangeStart(e.selection.getRng());
            return Tx(o, e.getBody(), r).bind((e=>t=>t.fold((t=>cu(e.dom, Bi.before(t))), (e=>uu(e)), (e=>mu(e)), (t=>du(e.dom, Bi.after(t)))))(n)).map((o=>()=>uN(n, t)(o).each((e=>t=>(e.selection.setRng(t.toRange()),
            e.nodeChanged(),
            !0))(e))))
        }
        return I.none()
    }
      , fN = e=>ec(e) ? [{
        keyCode: qm.TAB,
        action: xE(YE, e, !0)
    }, {
        keyCode: qm.TAB,
        shiftKey: !0,
        action: xE(YE, e, !1)
    }] : []
      , gN = e=>{
        if (e.addShortcut("Meta+P", "", "mcePrint"),
        v_(e),
        wC(e))
            return Oa(null);
        {
            const t = Sk(e);
            return (e=>{
                e.on("keyup compositionstart", O(cE, e))
            }
            )(e),
            ((e,t)=>{
                e.on("keydown", (n=>{
                    n.isDefaultPrevented() || ((e,t,n)=>{
                        const o = At.os.isMacOS() || At.os.isiOS();
                        kE([{
                            keyCode: qm.RIGHT,
                            action: xE(fE, e, !0)
                        }, {
                            keyCode: qm.LEFT,
                            action: xE(fE, e, !1)
                        }, {
                            keyCode: qm.UP,
                            action: xE(gE, e, !1)
                        }, {
                            keyCode: qm.DOWN,
                            action: xE(gE, e, !0)
                        }, ...o ? [{
                            keyCode: qm.UP,
                            action: xE(hE, e, !1),
                            metaKey: !0,
                            shiftKey: !0
                        }, {
                            keyCode: qm.DOWN,
                            action: xE(hE, e, !0),
                            metaKey: !0,
                            shiftKey: !0
                        }] : [], {
                            keyCode: qm.RIGHT,
                            action: xE(VE, e, !0)
                        }, {
                            keyCode: qm.LEFT,
                            action: xE(VE, e, !1)
                        }, {
                            keyCode: qm.UP,
                            action: xE(qE, e, !1)
                        }, {
                            keyCode: qm.DOWN,
                            action: xE(qE, e, !0)
                        }, {
                            keyCode: qm.RIGHT,
                            action: xE(SE, e, !0)
                        }, {
                            keyCode: qm.LEFT,
                            action: xE(SE, e, !1)
                        }, {
                            keyCode: qm.UP,
                            action: xE(_E, e, !1)
                        }, {
                            keyCode: qm.DOWN,
                            action: xE(_E, e, !0)
                        }, {
                            keyCode: qm.RIGHT,
                            action: xE(kk, e, t, !0)
                        }, {
                            keyCode: qm.LEFT,
                            action: xE(kk, e, t, !1)
                        }, {
                            keyCode: qm.RIGHT,
                            ctrlKey: !o,
                            altKey: o,
                            action: xE(_k, e, t)
                        }, {
                            keyCode: qm.LEFT,
                            ctrlKey: !o,
                            altKey: o,
                            action: xE(Nk, e, t)
                        }, {
                            keyCode: qm.UP,
                            action: xE(yE, e, !1)
                        }, {
                            keyCode: qm.DOWN,
                            action: xE(yE, e, !0)
                        }], n).each((e=>{
                            n.preventDefault()
                        }
                        ))
                    }
                    )(e, t, n)
                }
                ))
            }
            )(e, t),
            ((e,t)=>{
                let n = !1;
                e.on("keydown", (o=>{
                    n = o.keyCode === qm.BACKSPACE,
                    o.isDefaultPrevented() || ((e,t,n)=>{
                        const o = n.keyCode === qm.BACKSPACE ? "deleteContentBackward" : "deleteContentForward";
                        EE([{
                            keyCode: qm.BACKSPACE,
                            action: xE(Qk, e)
                        }, {
                            keyCode: qm.BACKSPACE,
                            action: xE(dx, e, !1)
                        }, {
                            keyCode: qm.DELETE,
                            action: xE(dx, e, !0)
                        }, {
                            keyCode: qm.BACKSPACE,
                            action: xE(tx, e, !1)
                        }, {
                            keyCode: qm.DELETE,
                            action: xE(tx, e, !0)
                        }, {
                            keyCode: qm.BACKSPACE,
                            action: xE(Tk, e, t, !1)
                        }, {
                            keyCode: qm.DELETE,
                            action: xE(Tk, e, t, !0)
                        }, {
                            keyCode: qm.BACKSPACE,
                            action: xE(Oh, e, !1)
                        }, {
                            keyCode: qm.DELETE,
                            action: xE(Oh, e, !0)
                        }, {
                            keyCode: qm.BACKSPACE,
                            action: xE(cx, e, !1)
                        }, {
                            keyCode: qm.DELETE,
                            action: xE(cx, e, !0)
                        }, {
                            keyCode: qm.BACKSPACE,
                            action: xE($k, e, !1)
                        }, {
                            keyCode: qm.DELETE,
                            action: xE($k, e, !0)
                        }, {
                            keyCode: qm.BACKSPACE,
                            action: xE(Gw, e, !1)
                        }, {
                            keyCode: qm.DELETE,
                            action: xE(Gw, e, !0)
                        }, {
                            keyCode: qm.BACKSPACE,
                            action: xE(qw, e, !1)
                        }, {
                            keyCode: qm.DELETE,
                            action: xE(qw, e, !0)
                        }, {
                            keyCode: qm.BACKSPACE,
                            action: xE(Uk, e, !1)
                        }, {
                            keyCode: qm.DELETE,
                            action: xE(Uk, e, !0)
                        }], n).filter((t=>e.selection.isEditable())).each((t=>{
                            n.preventDefault(),
                            w_(e, o).isDefaultPrevented() || (t(),
                            C_(e, o))
                        }
                        ))
                    }
                    )(e, t, o)
                }
                )),
                e.on("keyup", (t=>{
                    t.isDefaultPrevented() || ((e,t,n)=>{
                        const o = xt()
                          , r = o.os
                          , s = o.browser
                          , a = r.isMacOS() ? [{
                            keyCode: qm.BACKSPACE,
                            altKey: !0,
                            action: xE(jk, e)
                        }, {
                            keyCode: qm.DELETE,
                            altKey: !0,
                            action: xE(jk, e)
                        }] : [{
                            keyCode: qm.BACKSPACE,
                            ctrlKey: !0,
                            action: xE(jk, e)
                        }, {
                            keyCode: qm.DELETE,
                            ctrlKey: !0,
                            action: xE(jk, e)
                        }];
                        r.isMacOS() && n && a.push({
                            keyCode: s.isFirefox() ? 224 : 91,
                            action: xE(jk, e)
                        }),
                        kE([{
                            keyCode: qm.BACKSPACE,
                            action: xE(lx, e)
                        }, {
                            keyCode: qm.DELETE,
                            action: xE(lx, e)
                        }, ...a], t)
                    }
                    )(e, t, n),
                    n = !1
                }
                ))
            }
            )(e, t),
            (e=>{
                e.on("keydown", (t=>{
                    t.keyCode === qm.ENTER && ((e,t)=>{
                        var n;
                        t.isDefaultPrevented() || (t.preventDefault(),
                        (n = e.undoManager).typing && (n.typing = !1,
                        n.add()),
                        e.undoManager.transact((()=>{
                            oN(e, t)
                        }
                        )))
                    }
                    )(e, t)
                }
                ))
            }
            )(e),
            (e=>{
                e.on("keydown", (t=>{
                    t.isDefaultPrevented() || ((e,t)=>{
                        EE([{
                            keyCode: qm.SPACEBAR,
                            action: xE(mN, e)
                        }], t).each((n=>{
                            t.preventDefault(),
                            w_(e, "insertText", {
                                data: " "
                            }).isDefaultPrevented() || (n(),
                            C_(e, "insertText", {
                                data: " "
                            }))
                        }
                        ))
                    }
                    )(e, t)
                }
                ))
            }
            )(e),
            (e=>{
                e.on("input", (t=>{
                    t.isComposing || (e=>{
                        const t = bn(e.getBody());
                        e.selection.isCollapsed() && Pp(t, Bi.fromRangeStart(e.selection.getRng())).each((t=>{
                            e.selection.setRng(t.toRange())
                        }
                        ))
                    }
                    )(e)
                }
                ))
            }
            )(e),
            (e=>{
                e.on("keydown", (t=>{
                    t.isDefaultPrevented() || ((e,t)=>{
                        kE([...fN(e)], t).each((e=>{
                            t.preventDefault()
                        }
                        ))
                    }
                    )(e, t)
                }
                ))
            }
            )(e),
            ((e,t)=>{
                e.on("keydown", (n=>{
                    n.isDefaultPrevented() || ((e,t,n)=>{
                        const o = At.os.isMacOS() || At.os.isiOS();
                        kE([{
                            keyCode: qm.END,
                            action: xE(pE, e, !0)
                        }, {
                            keyCode: qm.HOME,
                            action: xE(pE, e, !1)
                        }, ...o ? [] : [{
                            keyCode: qm.HOME,
                            action: xE(hE, e, !1),
                            ctrlKey: !0,
                            shiftKey: !0
                        }, {
                            keyCode: qm.END,
                            action: xE(hE, e, !0),
                            ctrlKey: !0,
                            shiftKey: !0
                        }], {
                            keyCode: qm.END,
                            action: xE(NE, e, !0)
                        }, {
                            keyCode: qm.HOME,
                            action: xE(NE, e, !1)
                        }, {
                            keyCode: qm.END,
                            action: xE(Rk, e, !0, t)
                        }, {
                            keyCode: qm.HOME,
                            action: xE(Rk, e, !1, t)
                        }], n).each((e=>{
                            n.preventDefault()
                        }
                        ))
                    }
                    )(e, t, n)
                }
                ))
            }
            )(e, t),
            ((e,t)=>{
                if (rN.os.isMacOS())
                    return;
                const n = Oa(!1);
                e.on("keydown", (t=>{
                    aN(t) && iN(n, e, !0)
                }
                )),
                e.on("keyup", (o=>{
                    o.isDefaultPrevented() || ((e,t,n)=>{
                        kE([{
                            keyCode: qm.PAGE_UP,
                            action: xE(Rk, e, !1, t)
                        }, {
                            keyCode: qm.PAGE_DOWN,
                            action: xE(Rk, e, !0, t)
                        }], n)
                    }
                    )(e, t, o),
                    aN(o) && n.get() && (iN(n, e, !1),
                    e.nodeChanged())
                }
                ))
            }
            )(e, t),
            t
        }
    }
    ;
    class pN {
        constructor(e) {
            let t;
            this.lastPath = [],
            this.editor = e;
            const n = this;
            "onselectionchange"in e.getDoc() || e.on("NodeChange click mouseup keyup focus", (n=>{
                const o = e.selection.getRng()
                  , r = {
                    startContainer: o.startContainer,
                    startOffset: o.startOffset,
                    endContainer: o.endContainer,
                    endOffset: o.endOffset
                };
                "nodechange" !== n.type && gf(r, t) || e.dispatch("SelectionChange"),
                t = r
            }
            )),
            e.on("contextmenu", (()=>{
                e.dispatch("SelectionChange")
            }
            )),
            e.on("SelectionChange", (()=>{
                const t = e.selection.getStart(!0);
                t && Wu(e) && !n.isSameElementPath(t) && e.dom.isChildOf(t, e.getBody()) && e.nodeChanged({
                    selectionChange: !0
                })
            }
            )),
            e.on("mouseup", (t=>{
                !t.isDefaultPrevented() && Wu(e) && ("IMG" === e.selection.getNode().nodeName ? og.setEditorTimeout(e, (()=>{
                    e.nodeChanged()
                }
                )) : e.nodeChanged())
            }
            ))
        }
        nodeChanged(e={}) {
            const t = this.editor.selection;
            let n;
            if (this.editor.initialized && t && !vd(this.editor) && !this.editor.mode.isReadOnly()) {
                const o = this.editor.getBody();
                n = t.getStart(!0) || o,
                n.ownerDocument === this.editor.getDoc() && this.editor.dom.isChildOf(n, o) || (n = o);
                const r = [];
                this.editor.dom.getParent(n, (e=>e === o || (r.push(e),
                !1))),
                this.editor.dispatch("NodeChange", {
                    ...e,
                    element: n,
                    parents: r
                })
            }
        }
        isSameElementPath(e) {
            let t;
            const n = this.editor
              , o = oe(n.dom.getParents(e, M, n.getBody()));
            if (o.length === this.lastPath.length) {
                for (t = o.length; t >= 0 && o[t] === this.lastPath[t]; t--)
                    ;
                if (-1 === t)
                    return this.lastPath = o,
                    !0
            }
            return this.lastPath = o,
            !1
        }
    }
    const hN = N("x-tinymce/html")
      , bN = "\x3c!-- x-tinymce/html --\x3e"
      , vN = e=>bN + e
      , yN = e=>-1 !== e.indexOf(bN)
      , CN = "%MCEPASTEBIN%"
      , wN = e=>e.dom.get("mcepastebin")
      , xN = e=>C(e) && "mcepastebin" === e.id
      , kN = e=>e === CN
      , EN = (e,t)=>(Dt.each(t, (t=>{
        e = u(t, RegExp) ? e.replace(t, "") : e.replace(t[0], t[1])
    }
    )),
    e)
      , SN = e=>EN(e, [/^[\s\S]*<body[^>]*>\s*|\s*<\/body[^>]*>[\s\S]*$/gi, /<!--StartFragment-->|<!--EndFragment-->/g, [/( ?)<span class="Apple-converted-space">\u00a0<\/span>( ?)/g, (e,t,n)=>t || n ? ur : " "], /<br class="Apple-interchange-newline">/g, /<br>$/i])
      , _N = (e,t)=>({
        content: e,
        cancelled: t
    })
      , NN = (e,t)=>(e.insertContent(t, {
        merge: zd(e),
        paste: !0
    }),
    !0)
      , RN = e=>/^https?:\/\/[\w\-\/+=.,!;:&%@^~(){}?#]+$/i.test(e)
      , AN = (e,t,n)=>!(e.selection.isCollapsed() || !RN(t)) && ((e,t,n)=>(e.undoManager.extra((()=>{
        n(e, t)
    }
    ), (()=>{
        e.execCommand("mceInsertLink", !1, t)
    }
    )),
    !0))(e, t, n)
      , ON = (e,t,n)=>!!((e,t)=>RN(t) && $(Zd(e), (e=>$e(t.toLowerCase(), `.${e.toLowerCase()}`))))(e, t) && ((e,t,n)=>(e.undoManager.extra((()=>{
        n(e, t)
    }
    ), (()=>{
        e.insertContent('<img src="' + t + '">')
    }
    )),
    !0))(e, t, n)
      , TN = (e=>{
        let t = 0;
        return ()=>"mceclip" + t++
    }
    )()
      , BN = (e,t,n,o)=>{
        const r = ((e,t,n)=>((e,t,n)=>{
            const o = ((e,t,n)=>e.dispatch("PastePreProcess", {
                content: t,
                internal: n
            }))(e, t, n)
              , r = ((e,t)=>{
                const n = Hy({
                    sanitize: Jd(e)
                }, e.schema);
                n.addNodeFilter("meta", (e=>{
                    Dt.each(e, (e=>{
                        e.remove()
                    }
                    ))
                }
                ));
                const o = n.parse(t, {
                    forced_root_block: !1,
                    isRootContent: !0
                });
                return Ug({
                    validate: !0
                }, e.schema).serialize(o)
            }
            )(e, o.content);
            return e.hasEventListeners("PastePostProcess") && !o.isDefaultPrevented() ? ((e,t,n)=>{
                const o = e.dom.create("div", {
                    style: "display:none"
                }, t)
                  , r = ((e,t,n)=>e.dispatch("PastePostProcess", {
                    node: t,
                    internal: n
                }))(e, o, n);
                return _N(r.node.innerHTML, r.isDefaultPrevented())
            }
            )(e, r, n) : _N(r, o.isDefaultPrevented())
        }
        )(e, t, n))(e, t, n);
        r.cancelled || ((e,t,n)=>{
            n || !jd(e) ? NN(e, t) : ((e,t)=>{
                Dt.each([AN, ON, NN], (n=>!n(e, t, NN)))
            }
            )(e, t)
        }
        )(e, r.content, o)
    }
      , DN = (e,t,n)=>{
        const o = n || yN(t);
        BN(e, (e=>e.replace(bN, ""))(t), o, !1)
    }
      , PN = (e,t)=>{
        const n = e.dom.encode(t).replace(/\r\n/g, "\n")
          , o = ((e,t,n)=>{
            const o = e.split(/\n\n/)
              , r = ((e,t)=>{
                let n = "<" + e;
                const o = Ce(t, ((e,t)=>t + '="' + Gs.encodeAllRaw(e) + '"'));
                return o.length && (n += " " + o.join(" ")),
                n + ">"
            }
            )(t, n)
              , s = "</" + t + ">"
              , a = V(o, (e=>e.split(/\n/).join("<br />")));
            return 1 === a.length ? a[0] : V(a, (e=>r + e + s)).join("")
        }
        )(is(n, $d(e)), El(e), Sl(e));
        BN(e, o, !1, !0)
    }
      , LN = e=>{
        const t = {};
        if (e && e.types)
            for (let n = 0; n < e.types.length; n++) {
                const o = e.types[n];
                try {
                    t[o] = e.getData(o)
                } catch (e) {
                    t[o] = ""
                }
            }
        return t
    }
      , MN = (e,t)=>t in e && e[t].length > 0
      , IN = e=>MN(e, "text/html") || MN(e, "text/plain")
      , FN = (e,t,n)=>{
        const o = "paste" === t.type ? t.clipboardData : t.dataTransfer;
        var r;
        if (Ld(e) && o) {
            const s = ((e,t)=>{
                const n = t.items ? te(ce(t.items), (e=>"file" === e.kind ? [e.getAsFile()] : [])) : []
                  , o = t.files ? ce(t.files) : [];
                return G(n.length > 0 ? n : o, (e=>{
                    const t = Zd(e);
                    return e=>He(e.type, "image/") && $(t, (t=>(e=>{
                        const t = e.toLowerCase()
                          , n = {
                            jpg: "jpeg",
                            jpe: "jpeg",
                            jfi: "jpeg",
                            jif: "jpeg",
                            jfif: "jpeg",
                            pjpeg: "jpeg",
                            pjp: "jpeg",
                            svg: "svg+xml"
                        };
                        return Dt.hasOwn(n, t) ? "image/" + n[t] : "image/" + t
                    }
                    )(t) === e.type))
                }
                )(e))
            }
            )(e, o);
            if (s.length > 0)
                return t.preventDefault(),
                (r = s,
                Promise.all(V(r, (e=>vv(e).then((t=>({
                    file: e,
                    uri: t
                }))))))).then((t=>{
                    n && e.selection.setRng(n),
                    q(t, (t=>{
                        ((e,t)=>{
                            hv(t.uri).each((({data: n, type: o, base64Encoded: r})=>{
                                const s = r ? n : btoa(n)
                                  , a = t.file
                                  , i = e.editorUpload.blobCache
                                  , l = i.getByData(s, o)
                                  , d = null != l ? l : ((e,t,n,o)=>{
                                    const r = TN()
                                      , s = Bl(e) && C(n.name)
                                      , a = s ? ((e,t)=>{
                                        const n = t.match(/([\s\S]+?)(?:\.[a-z0-9.]+)$/i);
                                        return C(n) ? e.dom.encode(n[1]) : void 0
                                    }
                                    )(e, n.name) : r
                                      , i = s ? n.name : void 0
                                      , l = t.create(r, n, o, a, i);
                                    return t.add(l),
                                    l
                                }
                                )(e, i, a, s);
                                DN(e, `<img src="${d.blobUri()}">`, !1)
                            }
                            ))
                        }
                        )(e, t)
                    }
                    ))
                }
                )),
                !0
        }
        return !1
    }
      , UN = (e,t,n,o)=>{
        let r = SN(n);
        const s = MN(t, hN()) || yN(n)
          , a = !s && (e=>!/<(?:\/?(?!(?:div|p|br|span)>)\w+|(?:(?!(?:span style="white-space:\s?pre;?">)|br\s?\/>))\w+\s[^>]+)>/i.test(e))(r)
          , i = RN(r);
        (kN(r) || !r.length || a && !i) && (o = !0),
        (o || i) && (r = MN(t, "text/plain") && a ? t["text/plain"] : (e=>{
            const t = ia()
              , n = Hy({}, t);
            let o = "";
            const r = t.getVoidElements()
              , s = Dt.makeMap("script noscript style textarea video audio iframe object", " ")
              , a = t.getBlockElements()
              , i = e=>{
                const n = e.name
                  , l = e;
                if ("br" !== n) {
                    if ("wbr" !== n)
                        if (r[n] && (o += " "),
                        s[n])
                            o += " ";
                        else {
                            if (3 === e.type && (o += e.value),
                            !(e.name in t.getVoidElements())) {
                                let t = e.firstChild;
                                if (t)
                                    do {
                                        i(t)
                                    } while (t = t.next)
                            }
                            a[n] && l.next && (o += "\n",
                            "p" === n && (o += "\n"))
                        }
                } else
                    o += "\n"
            }
            ;
            return e = EN(e, [/<!\[[^\]]+\]>/g]),
            i(n.parse(e)),
            o
        }
        )(r)),
        kN(r) || (o ? PN(e, r) : DN(e, r, s))
    }
      , zN = (e,t,n)=>{
        ((e,t,n)=>{
            let o;
            e.on("keydown", (e=>{
                (e=>qm.metaKeyPressed(e) && 86 === e.keyCode || e.shiftKey && 45 === e.keyCode)(e) && !e.isDefaultPrevented() && (o = e.shiftKey && 86 === e.keyCode)
            }
            )),
            e.on("paste", (r=>{
                if (r.isDefaultPrevented() || (e=>{
                    var t, n;
                    return At.os.isAndroid() && 0 === (null === (n = null === (t = e.clipboardData) || void 0 === t ? void 0 : t.items) || void 0 === n ? void 0 : n.length)
                }
                )(r))
                    return;
                const s = "text" === n.get() || o;
                o = !1;
                const a = LN(r.clipboardData);
                !IN(a) && FN(e, r, t.getLastRng() || e.selection.getRng()) || (MN(a, "text/html") ? (r.preventDefault(),
                UN(e, a, a["text/html"], s)) : MN(a, "text/plain") && MN(a, "text/uri-list") ? (r.preventDefault(),
                UN(e, a, a["text/plain"], s)) : (t.create(),
                og.setEditorTimeout(e, (()=>{
                    const n = t.getHtml();
                    t.remove(),
                    UN(e, a, n, s)
                }
                ), 0)))
            }
            ))
        }
        )(e, t, n),
        (e=>{
            const t = e=>He(e, "webkit-fake-url")
              , n = e=>He(e, "data:");
            e.parser.addNodeFilter("img", ((o,r,s)=>{
                if (!Ld(e) && (e=>{
                    var t;
                    return !0 === (null === (t = e.data) || void 0 === t ? void 0 : t.paste)
                }
                )(s))
                    for (const r of o) {
                        const o = r.attr("src");
                        m(o) && !r.attr("data-mce-object") && o !== At.transparentSrc && (t(o) || !Vd(e) && n(o)) && r.remove()
                    }
            }
            ))
        }
        )(e)
    }
      , jN = (e,t,n,o)=>{
        ((e,t,n)=>{
            if (!e)
                return !1;
            try {
                return e.clearData(),
                e.setData("text/html", t),
                e.setData("text/plain", n),
                e.setData(hN(), t),
                !0
            } catch (e) {
                return !1
            }
        }
        )(e.clipboardData, t.html, t.text) ? (e.preventDefault(),
        o()) : n(t.html, o)
    }
      , HN = e=>(t,n)=>{
        const {dom: o, selection: r} = e
          , s = o.create("div", {
            contenteditable: "false",
            "data-mce-bogus": "all"
        })
          , a = o.create("div", {
            contenteditable: "true"
        }, t);
        o.setStyles(s, {
            position: "fixed",
            top: "0",
            left: "-3000px",
            width: "1000px",
            overflow: "hidden"
        }),
        s.appendChild(a),
        o.add(e.getBody(), s);
        const i = r.getRng();
        a.focus();
        const l = o.createRng();
        l.selectNodeContents(a),
        r.setRng(l),
        og.setEditorTimeout(e, (()=>{
            r.setRng(i),
            o.remove(s),
            n()
        }
        ), 0)
    }
      , $N = e=>({
        html: vN(e.selection.getContent({
            contextual: !0
        })),
        text: e.selection.getContent({
            format: "text"
        })
    })
      , VN = e=>!e.selection.isCollapsed() || (e=>!!e.dom.getParent(e.selection.getStart(), "td[data-mce-selected],th[data-mce-selected]", e.getBody()))(e)
      , qN = (e,t)=>{
        var n, o;
        return Ef.getCaretRangeFromPoint(null !== (n = t.clientX) && void 0 !== n ? n : 0, null !== (o = t.clientY) && void 0 !== o ? o : 0, e.getDoc())
    }
      , WN = (e,t)=>{
        e.focus(),
        t && e.selection.setRng(t)
    }
      , KN = /rgb\s*\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\s*\)/gi
      , GN = e=>Dt.trim(e).replace(KN, Iu).toLowerCase()
      , YN = (e,t,n)=>{
        const o = Fd(e);
        if (n || "all" === o || !Ud(e))
            return t;
        const r = o ? o.split(/[, ]/) : [];
        if (r && "none" !== o) {
            const n = e.dom
              , o = e.selection.getNode();
            t = t.replace(/(<[^>]+) style="([^"]*)"([^>]*>)/gi, ((e,t,s,a)=>{
                const i = n.parseStyle(n.decode(s))
                  , l = {};
                for (let e = 0; e < r.length; e++) {
                    const t = i[r[e]];
                    let s = t
                      , a = n.getStyle(o, r[e], !0);
                    /color/.test(r[e]) && (s = GN(s),
                    a = GN(a)),
                    a !== s && (l[r[e]] = t)
                }
                const d = n.serializeStyle(l, "span");
                return d ? t + ' style="' + d + '"' + a : t + a
            }
            ))
        } else
            t = t.replace(/(<[^>]+) style="([^"]*)"([^>]*>)/gi, "$1$3");
        return t = t.replace(/(<[^>]+) data-mce-style="([^"]+)"([^>]*>)/gi, ((e,t,n,o)=>t + ' style="' + n + '"' + o)),
        t
    }
      , XN = e=>{
        const t = Oa(!1)
          , n = Oa(Hd(e) ? "text" : "html")
          , o = (e=>{
            const t = Oa(null);
            return {
                create: ()=>((e,t)=>{
                    const {dom: n, selection: o} = e
                      , r = e.getBody();
                    t.set(o.getRng());
                    const s = n.add(e.getBody(), "div", {
                        id: "mcepastebin",
                        class: "mce-pastebin",
                        contentEditable: !0,
                        "data-mce-bogus": "all",
                        style: "position: fixed; top: 50%; width: 10px; height: 10px; overflow: hidden; opacity: 0"
                    }, CN);
                    At.browser.isFirefox() && n.setStyle(s, "left", "rtl" === n.getStyle(r, "direction", !0) ? 65535 : -65535),
                    n.bind(s, "beforedeactivate focusin focusout", (e=>{
                        e.stopPropagation()
                    }
                    )),
                    s.focus(),
                    o.select(s, !0)
                }
                )(e, t),
                remove: ()=>((e,t)=>{
                    const n = e.dom;
                    if (wN(e)) {
                        let o;
                        const r = t.get();
                        for (; o = wN(e); )
                            n.remove(o),
                            n.unbind(o);
                        r && e.selection.setRng(r)
                    }
                    t.set(null)
                }
                )(e, t),
                getEl: ()=>wN(e),
                getHtml: ()=>(e=>{
                    const t = e.dom
                      , n = (e,n)=>{
                        e.appendChild(n),
                        t.remove(n, !0)
                    }
                      , [o,...r] = G(e.getBody().childNodes, xN);
                    q(r, (e=>{
                        n(o, e)
                    }
                    ));
                    const s = t.select("div[id=mcepastebin]", o);
                    for (let e = s.length - 1; e >= 0; e--) {
                        const r = t.create("div");
                        o.insertBefore(r, s[e]),
                        n(r, s[e])
                    }
                    return o ? o.innerHTML : ""
                }
                )(e),
                getLastRng: t.get
            }
        }
        )(e);
        (e=>{
            (At.browser.isChromium() || At.browser.isSafari()) && ((e,t)=>{
                e.on("PastePreProcess", (n=>{
                    n.content = t(e, n.content, n.internal)
                }
                ))
            }
            )(e, YN)
        }
        )(e),
        ((e,t)=>{
            e.addCommand("mceTogglePlainTextPaste", (()=>{
                ((e,t)=>{
                    "text" === t.get() ? (t.set("html"),
                    Vm(e, !1)) : (t.set("text"),
                    Vm(e, !0)),
                    e.focus()
                }
                )(e, t)
            }
            )),
            e.addCommand("mceInsertClipboardContent", ((t,n)=>{
                n.html && DN(e, n.html, n.internal),
                n.text && PN(e, n.text)
            }
            ))
        }
        )(e, n),
        (e=>{
            const t = t=>n=>{
                t(e, n)
            }
              , n = Md(e);
            w(n) && e.on("PastePreProcess", t(n));
            const o = Id(e);
            w(o) && e.on("PastePostProcess", t(o))
        }
        )(e),
        e.on("PreInit", (()=>{
            (e=>{
                e.on("cut", (e=>t=>{
                    !t.isDefaultPrevented() && VN(e) && jN(t, $N(e), HN(e), (()=>{
                        if (At.browser.isChromium() || At.browser.isFirefox()) {
                            const t = e.selection.getRng();
                            og.setEditorTimeout(e, (()=>{
                                e.selection.setRng(t),
                                e.execCommand("Delete")
                            }
                            ), 0)
                        } else
                            e.execCommand("Delete")
                    }
                    ))
                }
                )(e)),
                e.on("copy", (e=>t=>{
                    !t.isDefaultPrevented() && VN(e) && jN(t, $N(e), HN(e), E)
                }
                )(e))
            }
            )(e),
            ((e,t)=>{
                Pd(e) && e.on("dragend dragover draggesture dragdrop drop drag", (e=>{
                    e.preventDefault(),
                    e.stopPropagation()
                }
                )),
                Ld(e) || e.on("drop", (e=>{
                    const t = e.dataTransfer;
                    t && (e=>$(e.files, (e=>/^image\//.test(e.type))))(t) && e.preventDefault()
                }
                )),
                e.on("drop", (n=>{
                    if (n.isDefaultPrevented())
                        return;
                    const o = qN(e, n);
                    if (y(o))
                        return;
                    const r = LN(n.dataTransfer)
                      , s = MN(r, hN());
                    if ((!IN(r) || (e=>{
                        const t = e["text/plain"];
                        return !!t && 0 === t.indexOf("file://")
                    }
                    )(r)) && FN(e, n, o))
                        return;
                    const a = r[hN()]
                      , i = a || r["text/html"] || r["text/plain"]
                      , l = ((e,t,n,o)=>{
                        const r = e.getParent(n, (e=>Es(t, e)));
                        if (r && ke(o, "text/html")) {
                            const e = (new DOMParser).parseFromString(o["text/html"], "text/html").body;
                            return !h(e.querySelector(r.nodeName.toLowerCase()))
                        }
                        return !1
                    }
                    )(e.dom, e.schema, o.startContainer, r);
                    t.get() && !l || i && (n.preventDefault(),
                    og.setEditorTimeout(e, (()=>{
                        e.undoManager.transact((()=>{
                            a && e.execCommand("Delete"),
                            WN(e, o);
                            const t = SN(i);
                            r["text/html"] ? DN(e, t, s) : PN(e, t)
                        }
                        ))
                    }
                    )))
                }
                )),
                e.on("dragstart", (e=>{
                    t.set(!0)
                }
                )),
                e.on("dragover dragend", (n=>{
                    Ld(e) && !t.get() && (n.preventDefault(),
                    WN(e, qN(e, n))),
                    "dragend" === n.type && t.set(!1)
                }
                ))
            }
            )(e, t),
            zN(e, o, n)
        }
        ))
    }
      , QN = nr
      , JN = Xo
      , ZN = e=>sr(e.dom)
      , eR = e=>t=>xn(bn(e), t)
      , tR = (e,t)=>Xn(bn(e), ZN, eR(t))
      , nR = (e,t,n)=>{
        const o = new Fo(e,t)
          , r = n ? o.next.bind(o) : o.prev.bind(o);
        let s = e;
        for (let t = n ? e : r(); t && !QN(t); t = r())
            ts(t) && (s = t);
        return s
    }
      , oR = e=>{
        const t = ((e,t)=>{
            const n = Bi.fromRangeStart(e).getNode()
              , o = ((e,t)=>Xn(bn(e), (e=>(e=>rr(e.dom))(e) || vr(e)), eR(t)).getOr(bn(t)).dom)(n, t)
              , r = nR(n, o, !1)
              , s = nR(n, o, !0)
              , a = document.createRange();
            return tR(r, o).fold((()=>{
                JN(r) ? a.setStart(r, 0) : a.setStartBefore(r)
            }
            ), (e=>a.setStartBefore(e.dom))),
            tR(s, o).fold((()=>{
                JN(s) ? a.setEnd(s, s.data.length) : a.setEndAfter(s)
            }
            ), (e=>a.setEndAfter(e.dom))),
            a
        }
        )(e.selection.getRng(), e.getBody());
        e.selection.setRng(qh(t))
    }
    ;
    var rR;
    !function(e) {
        e.Before = "before",
        e.After = "after"
    }(rR || (rR = {}));
    const sR = (e,t)=>Math.abs(e.left - t)
      , aR = (e,t)=>Math.abs(e.right - t)
      , iR = (e,t)=>(e=>X(e, ((e,t)=>e.fold((()=>I.some(t)), (e=>{
        const n = Math.min(t.left, e.left)
          , o = Math.min(t.top, e.top)
          , r = Math.max(t.right, e.right)
          , s = Math.max(t.bottom, e.bottom);
        return I.some({
            top: o,
            right: r,
            bottom: s,
            left: n,
            width: r - n,
            height: s - o
        })
    }
    ))), I.none()))(G(e, (e=>{
        return (n = t) >= (o = e).top && n <= o.bottom;
        var n, o
    }
    ))).fold((()=>[[], e]), (t=>{
        const {pass: n, fail: o} = K(e, (e=>((e,t)=>{
            const n = ((e,t)=>Math.max(0, Math.min(e.bottom, t.bottom) - Math.max(e.top, t.top)))(e, t) / Math.min(e.height, t.height);
            return ((e,t)=>e.top < t.bottom && e.bottom > t.top)(e, t) && n > .5
        }
        )(e, t)));
        return [n, o]
    }
    ))
      , lR = (e,t,n)=>t > e.left && t < e.right ? 0 : Math.min(Math.abs(e.left - t), Math.abs(e.right - t))
      , dR = (e,t,n)=>{
        const o = e=>ts(e.node) ? I.some(e) : jo(e.node) ? dR(ce(e.node.childNodes), t, n) : I.none()
          , r = (e,r)=>{
            const s = ae(e, ((e,o)=>r(e, t, n) - r(o, t, n)));
            return ((e,r)=>{
                if (e.length >= 2) {
                    const s = o(e[0]).getOr(e[0])
                      , a = o(e[1]).getOr(e[1]);
                    if (Math.abs(r(s, t, n) - r(a, t, n)) < 2) {
                        if (Xo(s.node))
                            return I.some(s);
                        if (Xo(a.node))
                            return I.some(a)
                    }
                }
                return I.none()
            }
            )(s, r).orThunk((()=>ue(s, o)))
        }
          , [s,a] = iR(sk(e), n)
          , {pass: i, fail: l} = K(a, (e=>e.top < n));
        return r(s, lR).orThunk((()=>r(l, ci))).orThunk((()=>r(i, ci)))
    }
      , cR = (e,t,n)=>((e,t,n)=>{
        const o = bn(e)
          , r = Sn(o)
          , s = vn(r, t, n).filter((e=>kn(o, e))).getOr(o);
        return ((e,t,n,o)=>{
            const r = (t,s)=>{
                const a = G(t.dom.childNodes, T((e=>jo(e) && e.classList.contains("mce-drag-container"))));
                return s.fold((()=>dR(a, n, o)), (e=>{
                    const t = G(a, (t=>t !== e.dom));
                    return dR(t, n, o)
                }
                )).orThunk((()=>(xn(t, e) ? I.none() : Rn(t)).bind((e=>r(e, I.some(t))))))
            }
            ;
            return r(t, I.none())
        }
        )(o, s, t, n)
    }
    )(e, t, n).filter((e=>hc(e.node))).map((e=>((e,t)=>({
        node: e.node,
        position: sR(e, t) < aR(e, t) ? rR.Before : rR.After
    }))(e, t)))
      , uR = e=>{
        var t, n;
        const o = e.getBoundingClientRect()
          , r = e.ownerDocument
          , s = r.documentElement
          , a = r.defaultView;
        return {
            top: o.top + (null !== (t = null == a ? void 0 : a.scrollY) && void 0 !== t ? t : 0) - s.clientTop,
            left: o.left + (null !== (n = null == a ? void 0 : a.scrollX) && void 0 !== n ? n : 0) - s.clientLeft
        }
    }
      , mR = e=>({
        target: e,
        srcElement: e
    })
      , fR = e=>(t,n)=>((e,t,n)=>({
        ...t,
        dataTransfer: null,
        type: e,
        ...n
    }))(e, t, mR(n))
      , gR = fR("dragstart")
      , pR = fR("drop")
      , hR = e=>((e,t)=>{
        const n = B("Function not supported on simulated event.");
        return {
            bubbles: !0,
            cancelBubble: !1,
            cancelable: !0,
            composed: !1,
            currentTarget: null,
            defaultPrevented: !1,
            eventPhase: 0,
            isTrusted: !0,
            returnValue: !1,
            srcElement: null,
            target: null,
            timeStamp: 0,
            type: "dragend",
            composedPath: n,
            initEvent: n,
            preventDefault: E,
            stopImmediatePropagation: E,
            stopPropagation: E,
            AT_TARGET: window.Event.AT_TARGET,
            BUBBLING_PHASE: window.Event.BUBBLING_PHASE,
            CAPTURING_PHASE: window.Event.CAPTURING_PHASE,
            NONE: window.Event.NONE,
            altKey: !1,
            button: 0,
            buttons: 0,
            clientX: 0,
            clientY: 0,
            ctrlKey: !1,
            metaKey: !1,
            movementX: 0,
            movementY: 0,
            offsetX: 0,
            offsetY: 0,
            pageX: 0,
            pageY: 0,
            relatedTarget: null,
            screenX: 0,
            screenY: 0,
            shiftKey: !1,
            x: 0,
            y: 0,
            detail: 0,
            view: null,
            which: 0,
            initUIEvent: n,
            initMouseEvent: n,
            getModifierState: n,
            dataTransfer: null,
            ...t
        }
    }
    )(0, mR(e))
      , bR = fR("dragend")
      , vR = sr
      , yR = ((...e)=>t=>{
        for (let n = 0; n < e.length; n++)
            if (e[n](t))
                return !0;
        return !1
    }
    )(vR, rr)
      , CR = (e,t,n,o)=>{
        const r = e.dom
          , s = t.cloneNode(!0);
        r.setStyles(s, {
            width: n,
            height: o
        }),
        r.setAttrib(s, "data-mce-selected", null);
        const a = r.create("div", {
            class: "mce-drag-container",
            "data-mce-bogus": "all",
            unselectable: "on",
            contenteditable: "false"
        });
        return r.setStyles(a, {
            position: "absolute",
            opacity: .5,
            overflow: "hidden",
            border: 0,
            padding: 0,
            margin: 0,
            width: n,
            height: o
        }),
        r.setStyles(s, {
            margin: 0,
            boxSizing: "border-box"
        }),
        a.appendChild(s),
        a
    }
      , wR = (e,t)=>n=>()=>{
        const o = "left" === e ? n.scrollX : n.scrollY;
        n.scroll({
            [e]: o + t,
            behavior: "smooth"
        })
    }
      , xR = wR("left", -32)
      , kR = wR("left", 32)
      , ER = wR("top", -32)
      , SR = wR("top", 32)
      , _R = e=>{
        e && e.parentNode && e.parentNode.removeChild(e)
    }
      , NR = (e,t)=>{
        const n = Fa(((e,n)=>((e,t,n)=>{
            e._selectionOverrides.hideFakeCaret(),
            cR(e.getBody(), t, n).fold((()=>e.selection.placeCaretAt(t, n)), (o=>{
                const r = e._selectionOverrides.showCaret(1, o.node, o.position === rR.Before, !1);
                r ? e.selection.setRng(r) : e.selection.placeCaretAt(t, n)
            }
            ))
        }
        )(t, e, n)), 0);
        t.on("remove", n.cancel);
        const o = e;
        return r=>e.on((e=>{
            const s = Math.max(Math.abs(r.screenX - e.screenX), Math.abs(r.screenY - e.screenY));
            if (!e.dragging && s > 10) {
                if (t.dispatch("dragstart", gR(r, e.element)).isDefaultPrevented())
                    return;
                e.dragging = !0,
                t.focus()
            }
            if (e.dragging) {
                const s = r.currentTarget === t.getDoc().documentElement
                  , l = ((e,t)=>({
                    pageX: t.pageX - e.relX,
                    pageY: t.pageY + 5
                }))(e, ((e,t)=>{
                    return n = (e=>e.inline ? uR(e.getBody()) : {
                        left: 0,
                        top: 0
                    })(e),
                    o = (e=>{
                        const t = e.getBody();
                        return e.inline ? {
                            left: t.scrollLeft,
                            top: t.scrollTop
                        } : {
                            left: 0,
                            top: 0
                        }
                    }
                    )(e),
                    r = ((e,t)=>{
                        if (t.target.ownerDocument !== e.getDoc()) {
                            const n = uR(e.getContentAreaContainer())
                              , o = (e=>{
                                const t = e.getBody()
                                  , n = e.getDoc().documentElement
                                  , o = {
                                    left: t.scrollLeft,
                                    top: t.scrollTop
                                }
                                  , r = {
                                    left: t.scrollLeft || n.scrollLeft,
                                    top: t.scrollTop || n.scrollTop
                                };
                                return e.inline ? o : r
                            }
                            )(e);
                            return {
                                left: t.pageX - n.left + o.left,
                                top: t.pageY - n.top + o.top
                            }
                        }
                        return {
                            left: t.pageX,
                            top: t.pageY
                        }
                    }
                    )(e, t),
                    {
                        pageX: r.left - n.left + o.left,
                        pageY: r.top - n.top + o.top
                    };
                    var n, o, r
                }
                )(t, r));
                a = e.ghost,
                i = t.getBody(),
                a.parentNode !== i && i.appendChild(a),
                ((e,t,n,o,r,s,a,i,l,d,c,u)=>{
                    let m = 0
                      , f = 0;
                    e.style.left = t.pageX + "px",
                    e.style.top = t.pageY + "px",
                    t.pageX + n > r && (m = t.pageX + n - r),
                    t.pageY + o > s && (f = t.pageY + o - s),
                    e.style.width = n - m + "px",
                    e.style.height = o - f + "px";
                    const g = l.clientHeight
                      , p = l.clientWidth
                      , h = a + l.getBoundingClientRect().top
                      , b = i + l.getBoundingClientRect().left;
                    c.on((e=>{
                        e.intervalId.clear(),
                        e.dragging && u && (a + 8 >= g ? e.intervalId.set(SR(d)) : a - 8 <= 0 ? e.intervalId.set(ER(d)) : i + 8 >= p ? e.intervalId.set(kR(d)) : i - 8 <= 0 ? e.intervalId.set(xR(d)) : h + 16 >= window.innerHeight ? e.intervalId.set(SR(window)) : h - 16 <= 0 ? e.intervalId.set(ER(window)) : b + 16 >= window.innerWidth ? e.intervalId.set(kR(window)) : b - 16 <= 0 && e.intervalId.set(xR(window)))
                    }
                    ))
                }
                )(e.ghost, l, e.width, e.height, e.maxX, e.maxY, r.clientY, r.clientX, t.getContentAreaContainer(), t.getWin(), o, s),
                n.throttle(r.clientX, r.clientY)
            }
            var a, i
        }
        ))
    }
      , RR = (e,t,n)=>{
        e.on((e=>{
            if (e.intervalId.clear(),
            e.dragging) {
                const o = n.fold((()=>hR(e.element)), (t=>bR(t, e.element)));
                t.dispatch("dragend", o)
            }
        }
        )),
        AR(e)
    }
      , AR = e=>{
        e.on((e=>{
            e.intervalId.clear(),
            _R(e.ghost)
        }
        )),
        e.clear()
    }
      , OR = e=>{
        const t = Ia()
          , n = Na.DOM
          , o = document
          , r = ((e,t)=>n=>{
            if ((e=>0 === e.button)(n)) {
                const o = J(t.dom.getParents(n.target), yR).getOr(null);
                if (C(o) && ((e,t,n)=>vR(n) && n !== t && e.isEditable(n.parentElement))(t.dom, t.getBody(), o)) {
                    const r = t.dom.getPos(o)
                      , s = t.getBody()
                      , a = t.getDoc().documentElement;
                    e.set({
                        element: o,
                        dragging: !1,
                        screenX: n.screenX,
                        screenY: n.screenY,
                        maxX: (t.inline ? s.scrollWidth : a.offsetWidth) - 2,
                        maxY: (t.inline ? s.scrollHeight : a.offsetHeight) - 2,
                        relX: n.pageX - r.x,
                        relY: n.pageY - r.y,
                        width: o.offsetWidth,
                        height: o.offsetHeight,
                        ghost: CR(t, o, o.offsetWidth, o.offsetHeight),
                        intervalId: Ma(100)
                    })
                }
            }
        }
        )(t, e)
          , s = NR(t, e)
          , a = ((e,t)=>n=>{
            e.on((e=>{
                var o;
                if (e.intervalId.clear(),
                e.dragging) {
                    if (((e,t,n)=>!y(t) && t !== n && !e.dom.isChildOf(t, n) && e.dom.isEditable(t))(t, (e=>{
                        const t = e.getSel();
                        if (C(t)) {
                            const e = t.getRangeAt(0).startContainer;
                            return Xo(e) ? e.parentNode : e
                        }
                        return null
                    }
                    )(t.selection), e.element)) {
                        const r = (e=>{
                            const t = e.cloneNode(!0);
                            return t.removeAttribute("data-mce-selected"),
                            t
                        }
                        )(e.element)
                          , s = null !== (o = t.getDoc().elementFromPoint(n.clientX, n.clientY)) && void 0 !== o ? o : t.getBody();
                        t.dispatch("drop", pR(n, s)).isDefaultPrevented() || t.undoManager.transact((()=>{
                            ((e,t)=>{
                                const n = e.getParent(t.parentNode, e.isBlock);
                                _R(t),
                                n && n !== e.getRoot() && e.isEmpty(n) && Or(bn(n))
                            }
                            )(t.dom, e.element),
                            t.insertContent(t.dom.getOuterHTML(r)),
                            t._selectionOverrides.hideFakeCaret()
                        }
                        ))
                    }
                    t.dispatch("dragend", bR(n, t.getBody()))
                }
            }
            )),
            AR(e)
        }
        )(t, e)
          , i = ((e,t)=>n=>RR(e, t, I.some(n)))(t, e);
        e.on("mousedown", r),
        e.on("mousemove", s),
        e.on("mouseup", a),
        n.bind(o, "mousemove", s),
        n.bind(o, "mouseup", i),
        e.on("remove", (()=>{
            n.unbind(o, "mousemove", s),
            n.unbind(o, "mouseup", i)
        }
        )),
        e.on("keydown", (n=>{
            n.keyCode === qm.ESC && RR(t, e, I.none())
        }
        ))
    }
      , TR = sr
      , BR = (e,t)=>Th(e.getBody(), t)
      , DR = e=>{
        const t = e.selection
          , n = e.dom
          , o = e.getBody()
          , r = fc(e, o, n.isBlock, (()=>fg(e)))
          , s = "sel-" + n.uniqueId()
          , a = "data-mce-selected";
        let i;
        const l = e=>e !== o && (TR(e) || lr(e)) && n.isChildOf(e, o) && n.isEditable(e.parentNode)
          , d = (n,o,s,a=!0)=>e.dispatch("ShowCaret", {
            target: o,
            direction: n,
            before: s
        }).isDefaultPrevented() ? null : (a && t.scrollIntoView(o, -1 === n),
        r.show(s, o))
          , c = e=>Ur(e) || $r(e) || Vr(e)
          , u = e=>c(e.startContainer) || c(e.endContainer)
          , m = t=>{
            const o = e.schema.getVoidElements()
              , r = n.createRng()
              , s = t.startContainer
              , a = t.startOffset
              , i = t.endContainer
              , l = t.endOffset;
            return ke(o, s.nodeName.toLowerCase()) ? 0 === a ? r.setStartBefore(s) : r.setStartAfter(s) : r.setStart(s, a),
            ke(o, i.nodeName.toLowerCase()) ? 0 === l ? r.setEndBefore(i) : r.setEndAfter(i) : r.setEnd(i, l),
            r
        }
          , f = (r,c)=>{
            if (!r)
                return null;
            if (r.collapsed) {
                if (!u(r)) {
                    const e = c ? 1 : -1
                      , t = zc(e, o, r)
                      , s = t.getNode(!c);
                    if (C(s)) {
                        if (hc(s))
                            return d(e, s, !!c && !t.isAtEnd(), !1);
                        if (Fr(s) && sr(s.nextSibling)) {
                            const e = n.createRng();
                            return e.setStart(s, 0),
                            e.setEnd(s, 0),
                            e
                        }
                    }
                    const a = t.getNode(c);
                    if (C(a)) {
                        if (hc(a))
                            return d(e, a, !c && !t.isAtEnd(), !1);
                        if (Fr(a) && sr(a.previousSibling)) {
                            const e = n.createRng();
                            return e.setStart(a, 1),
                            e.setEnd(a, 1),
                            e
                        }
                    }
                }
                return null
            }
            let m = r.startContainer
              , f = r.startOffset;
            const g = r.endOffset;
            if (Xo(m) && 0 === f && TR(m.parentNode) && (m = m.parentNode,
            f = n.nodeIndex(m),
            m = m.parentNode),
            !jo(m))
                return null;
            if (g === f + 1 && m === r.endContainer) {
                const o = m.childNodes[f];
                if (l(o))
                    return (o=>{
                        const r = o.cloneNode(!0)
                          , l = e.dispatch("ObjectSelected", {
                            target: o,
                            targetClone: r
                        });
                        if (l.isDefaultPrevented())
                            return null;
                        const d = ((o,r)=>{
                            const a = bn(e.getBody())
                              , i = e.getDoc()
                              , l = Jn(a, "#" + s).getOrThunk((()=>{
                                const e = gn('<div data-mce-bogus="all" class="mce-offscreen-selection"></div>', i);
                                return Xt(e, "id", s),
                                po(a, e),
                                e
                            }
                            ))
                              , d = n.createRng();
                            vo(l),
                            bo(l, [hn(ur, i), bn(r), hn(ur, i)]),
                            d.setStart(l.dom.firstChild, 1),
                            d.setEnd(l.dom.lastChild, 0),
                            so(l, {
                                top: n.getPos(o, e.getBody()).y + "px"
                            }),
                            qf(l);
                            const c = t.getSel();
                            return c && (c.removeAllRanges(),
                            c.addRange(d)),
                            d
                        }
                        )(o, l.targetClone)
                          , c = bn(o);
                        return q(Mo(bn(e.getBody()), "*[data-mce-selected]"), (e=>{
                            xn(c, e) || tn(e, a)
                        }
                        )),
                        n.getAttrib(o, a) || o.setAttribute(a, "1"),
                        i = o,
                        p(),
                        d
                    }
                    )(o)
            }
            return null
        }
          , g = ()=>{
            i && i.removeAttribute(a),
            Jn(bn(e.getBody()), "#" + s).each(yo),
            i = null
        }
          , p = ()=>{
            r.hide()
        }
        ;
        return wC(e) || (e.on("click", (t=>{
            n.isEditable(t.target) || (t.preventDefault(),
            e.focus())
        }
        )),
        e.on("blur NewBlock", g),
        e.on("ResizeWindow FullscreenStateChanged", r.reposition),
        e.on("tap", (t=>{
            const n = t.target
              , o = BR(e, n);
            TR(o) ? (t.preventDefault(),
            Xw(e, o).each(f)) : l(n) && Xw(e, n).each(f)
        }
        ), !0),
        e.on("mousedown", (r=>{
            const s = r.target;
            if (s !== o && "HTML" !== s.nodeName && !n.isChildOf(s, o))
                return;
            if (!((e,t,n)=>{
                const o = bn(e.getBody())
                  , r = e.inline ? o : bn(Sn(o).dom.documentElement)
                  , s = ((e,t,n,o)=>{
                    const r = (e=>e.dom.getBoundingClientRect())(t);
                    return {
                        x: n - (e ? r.left + t.dom.clientLeft + ew(t) : 0),
                        y: o - (e ? r.top + t.dom.clientTop + ZC(t) : 0)
                    }
                }
                )(e.inline, r, t, n);
                return ((e,t,n)=>{
                    const o = QC(e)
                      , r = JC(e);
                    return t >= 0 && n >= 0 && t <= o && n <= r
                }
                )(r, s.x, s.y)
            }
            )(e, r.clientX, r.clientY))
                return;
            g(),
            p();
            const a = BR(e, s);
            TR(a) ? (r.preventDefault(),
            Xw(e, a).each(f)) : cR(o, r.clientX, r.clientY).each((n=>{
                var o;
                r.preventDefault(),
                (o = d(1, n.node, n.position === rR.Before, !1)) && t.setRng(o),
                jo(a) ? a.focus() : e.getBody().focus()
            }
            ))
        }
        )),
        e.on("keypress", (e=>{
            qm.modifierPressed(e) || TR(t.getNode()) && e.preventDefault()
        }
        )),
        e.on("GetSelectionRange", (e=>{
            let t = e.range;
            if (i) {
                if (!i.parentNode)
                    return void (i = null);
                t = t.cloneRange(),
                t.selectNode(i),
                e.range = t
            }
        }
        )),
        e.on("SetSelectionRange", (e=>{
            e.range = m(e.range);
            const t = f(e.range, e.forward);
            t && (e.range = t)
        }
        )),
        e.on("AfterSetSelectionRange", (e=>{
            const t = e.range
              , o = t.startContainer.parentElement;
            var r;
            u(t) || jo(r = o) && "mcepastebin" === r.id || p(),
            (e=>C(e) && n.hasClass(e, "mce-offscreen-selection"))(o) || g()
        }
        )),
        (e=>{
            OR(e),
            kd(e) && (e=>{
                const t = t=>{
                    if (!t.isDefaultPrevented()) {
                        const n = t.dataTransfer;
                        n && (H(n.types, "Files") || n.files.length > 0) && (t.preventDefault(),
                        "drop" === t.type && aw(e, "Dropped file type is not supported"))
                    }
                }
                  , n = n=>{
                    ig(e, n.target) && t(n)
                }
                  , o = ()=>{
                    const o = Na.DOM
                      , r = e.dom
                      , s = document
                      , a = e.inline ? e.getBody() : e.getDoc()
                      , i = ["drop", "dragover"];
                    q(i, (e=>{
                        o.bind(s, e, n),
                        r.bind(a, e, t)
                    }
                    )),
                    e.on("remove", (()=>{
                        q(i, (e=>{
                            o.unbind(s, e, n),
                            r.unbind(a, e, t)
                        }
                        ))
                    }
                    ))
                }
                ;
                e.on("init", (()=>{
                    og.setEditorTimeout(e, o, 0)
                }
                ))
            }
            )(e)
        }
        )(e),
        (e=>{
            const t = Fa((()=>{
                if (!e.removed && e.getBody().contains(document.activeElement)) {
                    const t = e.selection.getRng();
                    if (t.collapsed) {
                        const n = Qw(e, t, !1);
                        e.selection.setRng(n)
                    }
                }
            }
            ), 0);
            e.on("focus", (()=>{
                t.throttle()
            }
            )),
            e.on("blur", (()=>{
                t.cancel()
            }
            ))
        }
        )(e),
        (e=>{
            e.on("init", (()=>{
                e.on("focusin", (t=>{
                    const n = t.target;
                    if (lr(n)) {
                        const t = Th(e.getBody(), n)
                          , o = sr(t) ? t : n;
                        e.selection.getNode() !== o && Xw(e, o).each((t=>e.selection.setRng(t)))
                    }
                }
                ))
            }
            ))
        }
        )(e)),
        {
            showCaret: d,
            showBlockCaretContainer: e=>{
                e.hasAttribute("data-mce-caret") && (qr(e),
                t.scrollIntoView(e))
            }
            ,
            hideFakeCaret: p,
            destroy: ()=>{
                r.destroy(),
                i = null
            }
        }
    }
      , PR = (e,t)=>{
        let n = t;
        for (let t = e.previousSibling; Xo(t); t = t.previousSibling)
            n += t.data.length;
        return n
    }
      , LR = (e,t,n,o,r)=>{
        if (Xo(n) && (o < 0 || o > n.data.length))
            return [];
        const s = r && Xo(n) ? [PR(n, o)] : [o];
        let a = n;
        for (; a !== t && a.parentNode; )
            s.push(e.nodeIndex(a, r)),
            a = a.parentNode;
        return a === t ? s.reverse() : []
    }
      , MR = (e,t,n,o,r,s,a=!1)=>({
        start: LR(e, t, n, o, a),
        end: LR(e, t, r, s, a)
    })
      , IR = (e,t)=>{
        const n = t.slice()
          , o = n.pop();
        return x(o) ? X(n, ((e,t)=>e.bind((e=>I.from(e.childNodes[t])))), I.some(e)).bind((e=>Xo(e) && (o < 0 || o > e.data.length) ? I.none() : I.some({
            node: e,
            offset: o
        }))) : I.none()
    }
      , FR = (e,t)=>IR(e, t.start).bind((({node: n, offset: o})=>IR(e, t.end).map((({node: e, offset: t})=>{
        const r = document.createRange();
        return r.setStart(n, o),
        r.setEnd(e, t),
        r
    }
    ))))
      , UR = (e,t,n)=>{
        if (t && e.isEmpty(t) && !n(t)) {
            const o = t.parentNode;
            e.remove(t),
            UR(e, o, n)
        }
    }
      , zR = (e,t,n,o=!0)=>{
        const r = t.startContainer.parentNode
          , s = t.endContainer.parentNode;
        t.deleteContents(),
        o && !n(t.startContainer) && (Xo(t.startContainer) && 0 === t.startContainer.data.length && e.remove(t.startContainer),
        Xo(t.endContainer) && 0 === t.endContainer.data.length && e.remove(t.endContainer),
        UR(e, r, n),
        r !== s && UR(e, s, n))
    }
      , jR = (e,t)=>I.from(e.dom.getParent(t.startContainer, e.dom.isBlock))
      , HR = (e,t,n)=>{
        const o = e.dynamicPatternsLookup({
            text: n,
            block: t
        });
        return {
            ...e,
            blockPatterns: il(o).concat(e.blockPatterns),
            inlinePatterns: ll(o).concat(e.inlinePatterns)
        }
    }
      , $R = (e,t,n,o)=>{
        const r = e.createRng();
        return r.setStart(t, 0),
        r.setEnd(n, o),
        r.toString()
    }
      , VR = (e,t,n)=>{
        ((e,t,n)=>{
            if (Xo(e) && 0 >= e.length)
                return I.some(XE(e, 0));
            {
                const t = oi(QE);
                return I.from(t.forwards(e, 0, JE(e), n)).map((e=>XE(e.container, 0)))
            }
        }
        )(t, 0, t).each((o=>{
            const r = o.container;
            tS(r, n.start.length, t).each((n=>{
                const o = e.createRng();
                o.setStart(r, 0),
                o.setEnd(n.container, n.offset),
                zR(e, o, (e=>e === t))
            }
            ));
            const s = bn(r)
              , a = gr(s);
            /^\s[^\s]/.test(a) && ((e,t)=>{
                fr.set(e, t)
            }
            )(s, a.slice(1))
        }
        ))
    }
      , qR = (e,t)=>e.create("span", {
        "data-mce-type": "bookmark",
        id: t
    })
      , WR = (e,t)=>{
        const n = e.createRng();
        return n.setStartAfter(t.start),
        n.setEndBefore(t.end),
        n
    }
      , KR = (e,t,n)=>{
        const o = FR(e.getRoot(), n).getOrDie("Unable to resolve path range")
          , r = o.startContainer
          , s = o.endContainer
          , a = 0 === o.endOffset ? s : s.splitText(o.endOffset)
          , i = 0 === o.startOffset ? r : r.splitText(o.startOffset)
          , l = i.parentNode;
        return {
            prefix: t,
            end: a.parentNode.insertBefore(qR(e, t + "-end"), a),
            start: l.insertBefore(qR(e, t + "-start"), i)
        }
    }
      , GR = (e,t,n)=>{
        UR(e, e.get(t.prefix + "-end"), n),
        UR(e, e.get(t.prefix + "-start"), n)
    }
      , YR = e=>0 === e.start.length
      , XR = (e,t,n,o)=>{
        const r = t.start;
        var s;
        return nS(e, o.container, o.offset, (s = r,
        (e,t)=>{
            const n = e.data.substring(0, t)
              , o = n.lastIndexOf(s.charAt(s.length - 1))
              , r = n.lastIndexOf(s);
            return -1 !== r ? r + s.length : -1 !== o ? o + 1 : -1
        }
        ), n).bind((o=>{
            var s, a;
            const i = null !== (a = null === (s = n.textContent) || void 0 === s ? void 0 : s.indexOf(r)) && void 0 !== a ? a : -1;
            if (-1 !== i && o.offset >= i + r.length) {
                const t = e.createRng();
                return t.setStart(o.container, o.offset - r.length),
                t.setEnd(o.container, o.offset),
                I.some(t)
            }
            {
                const s = o.offset - r.length;
                return eS(o.container, s, n).map((t=>{
                    const n = e.createRng();
                    return n.setStart(t.container, t.offset),
                    n.setEnd(o.container, o.offset),
                    n
                }
                )).filter((e=>e.toString() === r)).orThunk((()=>XR(e, t, n, XE(o.container, 0))))
            }
        }
        ))
    }
      , QR = (e,t,n,o)=>{
        const r = e.dom
          , s = r.getRoot()
          , a = n.pattern
          , i = n.position.container
          , l = n.position.offset;
        return eS(i, l - n.pattern.end.length, t).bind((d=>{
            const c = MR(r, s, d.container, d.offset, i, l, o);
            if (YR(a))
                return I.some({
                    matches: [{
                        pattern: a,
                        startRng: c,
                        endRng: c
                    }],
                    position: d
                });
            {
                const i = JR(e, n.remainingPatterns, d.container, d.offset, t, o)
                  , l = i.getOr({
                    matches: [],
                    position: d
                })
                  , u = l.position
                  , m = ((e,t,n,o,r,s=!1)=>{
                    if (0 === t.start.length && !s) {
                        const t = e.createRng();
                        return t.setStart(n, o),
                        t.setEnd(n, o),
                        I.some(t)
                    }
                    return ZE(n, o, r).bind((n=>XR(e, t, r, n).bind((e=>{
                        var t;
                        if (s) {
                            if (e.endContainer === n.container && e.endOffset === n.offset)
                                return I.none();
                            if (0 === n.offset && (null === (t = e.endContainer.textContent) || void 0 === t ? void 0 : t.length) === e.endOffset)
                                return I.none()
                        }
                        return I.some(e)
                    }
                    ))))
                }
                )(r, a, u.container, u.offset, t, i.isNone());
                return m.map((e=>{
                    const t = ((e,t,n,o=!1)=>MR(e, t, n.startContainer, n.startOffset, n.endContainer, n.endOffset, o))(r, s, e, o);
                    return {
                        matches: l.matches.concat([{
                            pattern: a,
                            startRng: t,
                            endRng: c
                        }]),
                        position: XE(e.startContainer, e.startOffset)
                    }
                }
                ))
            }
        }
        ))
    }
      , JR = (e,t,n,o,r,s)=>{
        const a = e.dom;
        return ZE(n, o, a.getRoot()).bind((i=>{
            const l = $R(a, r, n, o);
            for (let a = 0; a < t.length; a++) {
                const d = t[a];
                if (!$e(l, d.end))
                    continue;
                const c = t.slice();
                c.splice(a, 1);
                const u = QR(e, r, {
                    pattern: d,
                    remainingPatterns: c,
                    position: i
                }, s);
                if (u.isNone() && o > 0)
                    return JR(e, t, n, o - 1, r, s);
                if (u.isSome())
                    return u
            }
            return I.none()
        }
        ))
    }
      , ZR = (e,t,n)=>{
        e.selection.setRng(n),
        "inline-format" === t.type ? q(t.format, (t=>{
            e.formatter.apply(t)
        }
        )) : e.execCommand(t.cmd, !1, t.value)
    }
      , eA = (e,t,n,o,r,s)=>{
        var a;
        return ((e,t)=>{
            const n = ne(e, (e=>$(t, (t=>e.pattern.start === t.pattern.start && e.pattern.end === t.pattern.end))));
            return e.length === t.length ? n ? e : t : e.length > t.length ? e : t
        }
        )(JR(e, r.inlinePatterns, n, o, t, s).fold((()=>[]), (e=>e.matches)), JR(e, (a = r.inlinePatterns,
        ae(a, ((e,t)=>t.end.length - e.end.length))), n, o, t, s).fold((()=>[]), (e=>e.matches)))
    }
      , tA = (e,t)=>{
        if (0 === t.length)
            return;
        const n = e.dom
          , o = e.selection.getBookmark()
          , r = ((e,t)=>{
            const n = Ja("mce_textpattern")
              , o = Y(t, ((t,o)=>{
                const r = KR(e, n + `_end${t.length}`, o.endRng);
                return t.concat([{
                    ...o,
                    endMarker: r
                }])
            }
            ), []);
            return Y(o, ((t,r)=>{
                const s = o.length - t.length - 1
                  , a = YR(r.pattern) ? r.endMarker : KR(e, n + `_start${s}`, r.startRng);
                return t.concat([{
                    ...r,
                    startMarker: a
                }])
            }
            ), [])
        }
        )(n, t);
        q(r, (t=>{
            const o = n.getParent(t.startMarker.start, n.isBlock)
              , r = e=>e === o;
            YR(t.pattern) ? ((e,t,n,o)=>{
                const r = WR(e.dom, n);
                zR(e.dom, r, o),
                ZR(e, t, r)
            }
            )(e, t.pattern, t.endMarker, r) : ((e,t,n,o,r)=>{
                const s = e.dom
                  , a = WR(s, o)
                  , i = WR(s, n);
                zR(s, i, r),
                zR(s, a, r);
                const l = {
                    prefix: n.prefix,
                    start: n.end,
                    end: o.start
                }
                  , d = WR(s, l);
                ZR(e, t, d)
            }
            )(e, t.pattern, t.startMarker, t.endMarker, r),
            GR(n, t.endMarker, r),
            GR(n, t.startMarker, r)
        }
        )),
        e.selection.moveToBookmark(o)
    }
      , nA = (e,t)=>{
        const n = e.selection.getRng();
        return jR(e, n).map((o=>{
            var r;
            const s = Math.max(0, n.startOffset)
              , a = HR(t, o, null !== (r = o.textContent) && void 0 !== r ? r : "")
              , i = eA(e, o, n.startContainer, s, a, !0)
              , l = ((e,t,n,o)=>{
                var r;
                const s = e.dom
                  , a = El(e);
                if (!s.is(t, a))
                    return [];
                const i = null !== (r = t.textContent) && void 0 !== r ? r : "";
                return ((e,t)=>{
                    const n = (e=>ae(e, ((e,t)=>t.start.length - e.start.length)))(e)
                      , o = t.replace(ur, " ");
                    return J(n, (e=>0 === t.indexOf(e.start) || 0 === o.indexOf(e.start)))
                }
                )(n.blockPatterns, i).map((e=>Dt.trim(i).length === e.start.length ? [] : [{
                    pattern: e,
                    range: MR(s, s.getRoot(), t, 0, t, 0, true)
                }])).getOr([])
            }
            )(e, o, a);
            return (l.length > 0 || i.length > 0) && (e.undoManager.add(),
            e.undoManager.extra((()=>{
                e.execCommand("mceInsertNewLine")
            }
            ), (()=>{
                e.insertContent(cr),
                tA(e, i),
                ((e,t)=>{
                    if (0 === t.length)
                        return;
                    const n = e.selection.getBookmark();
                    q(t, (t=>((e,t)=>{
                        const n = e.dom
                          , o = t.pattern
                          , r = FR(n.getRoot(), t.range).getOrDie("Unable to resolve path range");
                        return jR(e, r).each((t=>{
                            "block-format" === o.type ? ((e,t)=>{
                                const n = t.get(e);
                                return p(n) && le(n).exists((e=>ke(e, "block")))
                            }
                            )(o.format, e.formatter) && e.undoManager.transact((()=>{
                                VR(e.dom, t, o),
                                e.formatter.apply(o.format)
                            }
                            )) : "block-command" === o.type && e.undoManager.transact((()=>{
                                VR(e.dom, t, o),
                                e.execCommand(o.cmd, !1, o.value)
                            }
                            ))
                        }
                        )),
                        !0
                    }
                    )(e, t))),
                    e.selection.moveToBookmark(n)
                }
                )(e, l);
                const t = e.selection.getRng()
                  , n = ZE(t.startContainer, t.startOffset, e.dom.getRoot());
                e.execCommand("mceInsertNewLine"),
                n.each((t=>{
                    const n = t.container;
                    n.data.charAt(t.offset - 1) === cr && (n.deleteData(t.offset - 1, 1),
                    UR(e.dom, n.parentNode, (t=>t === e.dom.getRoot())))
                }
                ))
            }
            )),
            !0)
        }
        )).getOr(!1)
    }
      , oA = (e,t,n)=>{
        for (let o = 0; o < e.length; o++)
            if (n(e[o], t))
                return !0;
        return !1
    }
      , rA = e=>{
        const t = Dt.each
          , n = qm.BACKSPACE
          , o = qm.DELETE
          , r = e.dom
          , s = e.selection
          , a = e.parser
          , i = At.browser
          , l = i.isFirefox()
          , d = i.isChromium() || i.isSafari()
          , c = At.deviceType.isiPhone() || At.deviceType.isiPad()
          , u = At.os.isMacOS() || At.os.isiOS()
          , m = (t,n)=>{
            try {
                e.getDoc().execCommand(t, !1, String(n))
            } catch (e) {}
        }
          , f = e=>e.isDefaultPrevented()
          , g = ()=>{
            e.shortcuts.add("meta+a", null, "SelectAll")
        }
          , p = ()=>{
            e.inline || r.bind(e.getDoc(), "mousedown mouseup", (t=>{
                let n;
                if (t.target === e.getDoc().documentElement)
                    if (n = s.getRng(),
                    e.getBody().focus(),
                    "mousedown" === t.type) {
                        if (Ur(n.startContainer))
                            return;
                        s.placeCaretAt(t.clientX, t.clientY)
                    } else
                        s.setRng(n)
            }
            ))
        }
          , h = ()=>{
            Range.prototype.getClientRects || e.on("mousedown", (t=>{
                if (!f(t) && "HTML" === t.target.nodeName) {
                    const t = e.getBody();
                    t.blur(),
                    og.setEditorTimeout(e, (()=>{
                        t.focus()
                    }
                    ))
                }
            }
            ))
        }
          , b = ()=>{
            const t = _d(e);
            e.on("click", (n=>{
                const o = n.target;
                /^(IMG|HR)$/.test(o.nodeName) && r.isEditable(o.parentNode) && (n.preventDefault(),
                e.selection.select(o),
                e.nodeChanged()),
                "A" === o.nodeName && r.hasClass(o, t) && 0 === o.childNodes.length && r.isEditable(o.parentNode) && (n.preventDefault(),
                s.select(o))
            }
            ))
        }
          , v = ()=>{
            e.on("keydown", (e=>{
                if (!f(e) && e.keyCode === n && s.isCollapsed() && 0 === s.getRng().startOffset) {
                    const t = s.getNode().previousSibling;
                    if (t && t.nodeName && "table" === t.nodeName.toLowerCase())
                        return e.preventDefault(),
                        !1
                }
                return !0
            }
            ))
        }
          , y = ()=>{
            yd(e) || e.on("BeforeExecCommand mousedown", (()=>{
                m("StyleWithCSS", !1),
                m("enableInlineTableEditing", !1),
                Ql(e) || m("enableObjectResizing", !1)
            }
            ))
        }
          , C = ()=>{
            e.contentStyles.push("img:-moz-broken {-moz-force-broken-image-icon:1;min-width:24px;min-height:24px}")
        }
          , w = ()=>{
            e.inline || e.on("keydown", (()=>{
                document.activeElement === document.body && e.getWin().focus()
            }
            ))
        }
          , x = ()=>{
            e.inline || (e.contentStyles.push("body {min-height: 150px}"),
            e.on("click", (t=>{
                let n;
                "HTML" === t.target.nodeName && (n = e.selection.getRng(),
                e.getBody().focus(),
                e.selection.setRng(n),
                e.selection.normalize(),
                e.nodeChanged())
            }
            )))
        }
          , k = ()=>{
            u && e.on("keydown", (t=>{
                !qm.metaKeyPressed(t) || t.shiftKey || 37 !== t.keyCode && 39 !== t.keyCode || (t.preventDefault(),
                e.selection.getSel().modify("move", 37 === t.keyCode ? "backward" : "forward", "lineboundary"))
            }
            ))
        }
          , S = ()=>{
            e.on("click", (e=>{
                let t = e.target;
                do {
                    if ("A" === t.tagName)
                        return void e.preventDefault()
                } while (t = t.parentNode)
            }
            )),
            e.contentStyles.push(".mce-content-body {-webkit-touch-callout: none}")
        }
          , _ = ()=>{
            e.on("init", (()=>{
                e.dom.bind(e.getBody(), "submit", (e=>{
                    e.preventDefault()
                }
                ))
            }
            ))
        }
          , N = E;
        return wC(e) ? (d && (p(),
        b(),
        _(),
        g(),
        c && (w(),
        x(),
        S())),
        l && (h(),
        y(),
        C(),
        k())) : (e.on("keydown", (t=>{
            if (f(t) || t.keyCode !== qm.BACKSPACE)
                return;
            let n = s.getRng();
            const o = n.startContainer
              , a = n.startOffset
              , i = r.getRoot();
            let l = o;
            if (n.collapsed && 0 === a) {
                for (; l.parentNode && l.parentNode.firstChild === l && l.parentNode !== i; )
                    l = l.parentNode;
                "BLOCKQUOTE" === l.nodeName && (e.formatter.toggle("blockquote", void 0, l),
                n = r.createRng(),
                n.setStart(o, 0),
                n.setEnd(o, 0),
                s.setRng(n))
            }
        }
        )),
        (()=>{
            const t = e=>{
                const t = r.create("body")
                  , n = e.cloneContents();
                return t.appendChild(n),
                s.serializer.serialize(t, {
                    format: "html"
                })
            }
            ;
            e.on("keydown", (s=>{
                const a = s.keyCode;
                if (!f(s) && (a === o || a === n) && e.selection.isEditable()) {
                    const n = e.selection.isCollapsed()
                      , o = e.getBody();
                    if (n && !r.isEmpty(o))
                        return;
                    if (!n && !(n=>{
                        const o = t(n)
                          , s = r.createRng();
                        return s.selectNode(e.getBody()),
                        o === t(s)
                    }
                    )(e.selection.getRng()))
                        return;
                    s.preventDefault(),
                    e.setContent(""),
                    o.firstChild && r.isBlock(o.firstChild) ? e.selection.setCursorLocation(o.firstChild, 0) : e.selection.setCursorLocation(o, 0),
                    e.nodeChanged()
                }
            }
            ))
        }
        )(),
        At.windowsPhone || e.on("keyup focusin mouseup", (t=>{
            qm.modifierPressed(t) || (e=>{
                const t = e.getBody()
                  , n = e.selection.getRng();
                return n.startContainer === n.endContainer && n.startContainer === t && 0 === n.startOffset && n.endOffset === t.childNodes.length
            }
            )(e) || s.normalize()
        }
        ), !0),
        d && (p(),
        b(),
        e.on("init", (()=>{
            m("DefaultParagraphSeparator", El(e))
        }
        )),
        _(),
        v(),
        a.addNodeFilter("br", (e=>{
            let t = e.length;
            for (; t--; )
                "Apple-interchange-newline" === e[t].attr("class") && e[t].remove()
        }
        )),
        c ? (w(),
        x(),
        S()) : g()),
        l && (e.on("keydown", (t=>{
            if (!f(t) && t.keyCode === n) {
                if (!e.getBody().getElementsByTagName("hr").length)
                    return;
                if (s.isCollapsed() && 0 === s.getRng().startOffset) {
                    const e = s.getNode()
                      , n = e.previousSibling;
                    if ("HR" === e.nodeName)
                        return r.remove(e),
                        void t.preventDefault();
                    n && n.nodeName && "hr" === n.nodeName.toLowerCase() && (r.remove(n),
                    t.preventDefault())
                }
            }
        }
        )),
        h(),
        (()=>{
            const n = ()=>{
                const n = r.getAttribs(s.getStart().cloneNode(!1));
                return ()=>{
                    const o = s.getStart();
                    o !== e.getBody() && (r.setAttrib(o, "style", null),
                    t(n, (e=>{
                        o.setAttributeNode(e.cloneNode(!0))
                    }
                    )))
                }
            }
              , o = ()=>!s.isCollapsed() && r.getParent(s.getStart(), r.isBlock) !== r.getParent(s.getEnd(), r.isBlock);
            e.on("keypress", (t=>{
                let r;
                return !(!(f(t) || 8 !== t.keyCode && 46 !== t.keyCode) && o() && (r = n(),
                e.getDoc().execCommand("delete", !1),
                r(),
                t.preventDefault(),
                1))
            }
            )),
            r.bind(e.getDoc(), "cut", (t=>{
                if (!f(t) && o()) {
                    const t = n();
                    og.setEditorTimeout(e, (()=>{
                        t()
                    }
                    ))
                }
            }
            ))
        }
        )(),
        y(),
        e.on("SetContent ExecCommand", (e=>{
            "setcontent" !== e.type && "mceInsertLink" !== e.command || t(r.select("a:not([data-mce-block])"), (e=>{
                var t;
                let n = e.parentNode;
                const o = r.getRoot();
                if ((null == n ? void 0 : n.lastChild) === e) {
                    for (; n && !r.isBlock(n); ) {
                        if ((null === (t = n.parentNode) || void 0 === t ? void 0 : t.lastChild) !== n || n === o)
                            return;
                        n = n.parentNode
                    }
                    r.add(n, "br", {
                        "data-mce-bogus": 1
                    })
                }
            }
            ))
        }
        )),
        C(),
        k(),
        v())),
        {
            refreshContentEditable: N,
            isHidden: ()=>{
                if (!l || e.removed)
                    return !1;
                const t = e.selection.getSel();
                return !t || !t.rangeCount || 0 === t.rangeCount
            }
        }
    }
      , sA = Na.DOM
      , aA = e=>e.inline ? e.getElement().nodeName.toLowerCase() : void 0
      , iA = e=>ye(e, (e=>!1 === v(e)))
      , lA = e=>{
        const t = e.options.get
          , n = e.editorUpload.blobCache;
        return iA({
            allow_conditional_comments: t("allow_conditional_comments"),
            allow_html_data_urls: t("allow_html_data_urls"),
            allow_svg_data_urls: t("allow_svg_data_urls"),
            allow_html_in_named_anchor: t("allow_html_in_named_anchor"),
            allow_script_urls: t("allow_script_urls"),
            allow_unsafe_link_target: t("allow_unsafe_link_target"),
            convert_fonts_to_spans: t("convert_fonts_to_spans"),
            fix_list_elements: t("fix_list_elements"),
            font_size_legacy_values: t("font_size_legacy_values"),
            forced_root_block: t("forced_root_block"),
            forced_root_block_attrs: t("forced_root_block_attrs"),
            preserve_cdata: t("preserve_cdata"),
            remove_trailing_brs: t("remove_trailing_brs"),
            inline_styles: t("inline_styles"),
            root_name: aA(e),
            sanitize: t("xss_sanitization"),
            validate: !0,
            blob_cache: n,
            document: e.getDoc()
        })
    }
      , dA = e=>{
        const t = e.options.get;
        return iA({
            custom_elements: t("custom_elements"),
            extended_valid_elements: t("extended_valid_elements"),
            invalid_elements: t("invalid_elements"),
            invalid_styles: t("invalid_styles"),
            schema: t("schema"),
            valid_children: t("valid_children"),
            valid_classes: t("valid_classes"),
            valid_elements: t("valid_elements"),
            valid_styles: t("valid_styles"),
            verify_html: t("verify_html"),
            padd_empty_block_inline_children: t("format_empty_lines")
        })
    }
      , cA = e=>e.inline ? e.ui.styleSheetLoader : e.dom.styleSheetLoader
      , uA = e=>{
        const t = cA(e)
          , n = Gl(e)
          , o = e.contentCSS
          , r = ()=>{
            t.unloadAll(o),
            e.inline || e.ui.styleSheetLoader.unloadAll(n)
        }
          , s = ()=>{
            e.removed ? r() : e.on("remove", r)
        }
        ;
        if (e.contentStyles.length > 0) {
            let t = "";
            Dt.each(e.contentStyles, (e=>{
                t += e + "\r\n"
            }
            )),
            e.dom.addStyle(t)
        }
        const a = Promise.all(((e,t,n)=>{
            const o = [cA(e).loadAll(t)];
            return e.inline ? o : o.concat([e.ui.styleSheetLoader.loadAll(n)])
        }
        )(e, o, n)).then(s).catch(s)
          , i = Kl(e);
        return i && ((e,t)=>{
            const n = bn(e.getBody())
              , o = $n(Hn(n))
              , r = pn("style");
            Xt(r, "type", "text/css"),
            po(r, hn(t)),
            po(o, r),
            e.on("remove", (()=>{
                yo(r)
            }
            ))
        }
        )(e, i),
        a
    }
      , mA = e=>{
        !0 !== e.removed && ((e=>{
            wC(e) || e.load({
                initial: !0,
                format: "html"
            }),
            e.startContent = e.getContent({
                format: "raw"
            })
        }
        )(e),
        (e=>{
            e.bindPendingEventDelegates(),
            e.initialized = !0,
            (e=>{
                e.dispatch("Init")
            }
            )(e),
            e.focus(!0),
            (e=>{
                const t = e.dom.getRoot();
                e.inline || Wu(e) && e.selection.getStart(!0) !== t || uu(t).each((t=>{
                    const n = t.getNode()
                      , o = Ko(n) ? uu(n).getOr(t) : t;
                    e.selection.setRng(o.toRange())
                }
                ))
            }
            )(e),
            e.nodeChanged({
                initial: !0
            });
            const t = Ad(e);
            w(t) && t.call(e, e),
            (e=>{
                const t = Td(e);
                t && og.setEditorTimeout(e, (()=>{
                    let n;
                    n = !0 === t ? e : e.editorManager.get(t),
                    n && !n.destroyed && (n.focus(),
                    n.selection.scrollIntoView())
                }
                ), 100)
            }
            )(e)
        }
        )(e))
    }
      , fA = e=>{
        const t = e.getElement();
        let n = e.getDoc();
        e.inline && (sA.addClass(t, "mce-content-body"),
        e.contentDocument = n = document,
        e.contentWindow = window,
        e.bodyElement = t,
        e.contentAreaContainer = t);
        const o = e.getBody();
        o.disabled = !0,
        e.readonly = yd(e),
        e.readonly || (e.inline && "static" === sA.getStyle(o, "position", !0) && (o.style.position = "relative"),
        o.contentEditable = "true"),
        o.disabled = !1,
        e.editorUpload = bw(e),
        e.schema = ia(dA(e)),
        e.dom = Na(n, {
            keep_values: !0,
            url_converter: e.convertURL,
            url_converter_scope: e,
            update_styles: !0,
            root_element: e.inline ? e.getBody() : null,
            collect: e.inline,
            schema: e.schema,
            contentCssCors: zl(e),
            referrerPolicy: jl(e),
            onSetAttrib: t=>{
                e.dispatch("SetAttrib", t)
            }
        }),
        e.parser = (e=>{
            const t = Hy(lA(e), e.schema);
            return t.addAttributeFilter("src,href,style,tabindex", ((t,n)=>{
                const o = e.dom
                  , r = "data-mce-" + n;
                let s = t.length;
                for (; s--; ) {
                    const a = t[s];
                    let i = a.attr(n);
                    if (i && !a.attr(r)) {
                        if (0 === i.indexOf("data:") || 0 === i.indexOf("blob:"))
                            continue;
                        "style" === n ? (i = o.serializeStyle(o.parseStyle(i), a.name),
                        i.length || (i = null),
                        a.attr(r, i),
                        a.attr(n, i)) : "tabindex" === n ? (a.attr(r, i),
                        a.attr(n, null)) : a.attr(r, e.convertURL(i, n, a.name))
                    }
                }
            }
            )),
            t.addNodeFilter("script", (e=>{
                let t = e.length;
                for (; t--; ) {
                    const n = e[t]
                      , o = n.attr("type") || "no/type";
                    0 !== o.indexOf("mce-") && n.attr("type", "mce-" + o)
                }
            }
            )),
            Xd(e) && t.addNodeFilter("#cdata", (t=>{
                var n;
                let o = t.length;
                for (; o--; ) {
                    const r = t[o];
                    r.type = 8,
                    r.name = "#comment",
                    r.value = "[CDATA[" + e.dom.encode(null !== (n = r.value) && void 0 !== n ? n : "") + "]]"
                }
            }
            )),
            t.addNodeFilter("p,h1,h2,h3,h4,h5,h6,div", (t=>{
                let n = t.length;
                const o = e.schema.getNonEmptyElements();
                for (; n--; ) {
                    const e = t[n];
                    e.isEmpty(o) && 0 === e.getAll("br").length && e.append(new Ag("br",1))
                }
            }
            )),
            t
        }
        )(e),
        e.serializer = BC((e=>{
            const t = e.options.get;
            return {
                ...lA(e),
                ...dA(e),
                ...iA({
                    url_converter: t("url_converter"),
                    url_converter_scope: t("url_converter_scope"),
                    element_format: t("element_format"),
                    entities: t("entities"),
                    entity_encoding: t("entity_encoding"),
                    indent: t("indent"),
                    indent_after: t("indent_after"),
                    indent_before: t("indent_before")
                })
            }
        }
        )(e), e),
        e.selection = AC(e.dom, e.getWin(), e.serializer, e),
        e.annotator = Mm(e),
        e.formatter = Rw(e),
        e.undoManager = Ow(e),
        e._nodeChangeDispatcher = new pN(e),
        e._selectionOverrides = DR(e),
        (e=>{
            const t = Ia()
              , n = Oa(!1)
              , o = Ua((t=>{
                e.dispatch("longpress", {
                    ...t,
                    type: "longpress"
                }),
                n.set(!0)
            }
            ), 400);
            e.on("touchstart", (e=>{
                eE(e).each((r=>{
                    o.cancel();
                    const s = {
                        x: r.clientX,
                        y: r.clientY,
                        target: e.target
                    };
                    o.throttle(e),
                    n.set(!1),
                    t.set(s)
                }
                ))
            }
            ), !0),
            e.on("touchmove", (r=>{
                o.cancel(),
                eE(r).each((o=>{
                    t.on((r=>{
                        ((e,t)=>{
                            const n = Math.abs(e.clientX - t.x)
                              , o = Math.abs(e.clientY - t.y);
                            return n > 5 || o > 5
                        }
                        )(o, r) && (t.clear(),
                        n.set(!1),
                        e.dispatch("longpresscancel"))
                    }
                    ))
                }
                ))
            }
            ), !0),
            e.on("touchend touchcancel", (r=>{
                o.cancel(),
                "touchcancel" !== r.type && t.get().filter((e=>e.target.isEqualNode(r.target))).each((()=>{
                    n.get() ? r.preventDefault() : e.dispatch("tap", {
                        ...r,
                        type: "tap"
                    })
                }
                ))
            }
            ), !0)
        }
        )(e),
        (e=>{
            (e=>{
                e.on("click", (t=>{
                    e.dom.getParent(t.target, "details") && t.preventDefault()
                }
                ))
            }
            )(e),
            (e=>{
                e.parser.addNodeFilter("details", (e=>{
                    q(e, (e=>{
                        e.attr("data-mce-open", e.attr("open")),
                        e.attr("open", "open")
                    }
                    ))
                }
                )),
                e.serializer.addNodeFilter("details", (e=>{
                    q(e, (e=>{
                        const t = e.attr("data-mce-open");
                        e.attr("open", m(t) ? t : null),
                        e.attr("data-mce-open", null)
                    }
                    ))
                }
                ))
            }
            )(e)
        }
        )(e),
        (e=>{
            const t = "contenteditable"
              , n = " " + Dt.trim(Gd(e)) + " "
              , o = " " + Dt.trim(Kd(e)) + " "
              , r = iE(n)
              , s = iE(o)
              , a = Yd(e);
            a.length > 0 && e.on("BeforeSetContent", (t=>{
                ((e,t,n)=>{
                    let o = t.length
                      , r = n.content;
                    if ("raw" !== n.format) {
                        for (; o--; )
                            r = r.replace(t[o], lE(e, r, Kd(e)));
                        n.content = r
                    }
                }
                )(e, a, t)
            }
            )),
            e.parser.addAttributeFilter("class", (e=>{
                let n = e.length;
                for (; n--; ) {
                    const o = e[n];
                    r(o) ? o.attr(t, "true") : s(o) && o.attr(t, "false")
                }
            }
            )),
            e.serializer.addAttributeFilter(t, (e=>{
                let n = e.length;
                for (; n--; ) {
                    const o = e[n];
                    (r(o) || s(o)) && (a.length > 0 && o.attr("data-mce-content") ? (o.name = "#text",
                    o.type = 3,
                    o.raw = !0,
                    o.value = o.attr("data-mce-content")) : o.attr(t, null))
                }
            }
            ))
        }
        )(e),
        wC(e) || ((e=>{
            e.on("mousedown", (t=>{
                t.detail >= 3 && (t.preventDefault(),
                oR(e))
            }
            ))
        }
        )(e),
        (e=>{
            (e=>{
                const t = [",", ".", ";", ":", "!", "?"]
                  , n = [32]
                  , o = ()=>{
                    return t = qd(e),
                    n = Wd(e),
                    {
                        inlinePatterns: ll(t),
                        blockPatterns: il(t),
                        dynamicPatternsLookup: n
                    };
                    var t, n
                }
                  , r = ()=>(e=>e.options.isSet("text_patterns_lookup"))(e);
                e.on("keydown", (t=>{
                    if (13 === t.keyCode && !qm.modifierPressed(t) && e.selection.isCollapsed()) {
                        const n = o();
                        (n.inlinePatterns.length > 0 || n.blockPatterns.length > 0 || r()) && nA(e, n) && t.preventDefault()
                    }
                }
                ), !0);
                const s = ()=>{
                    if (e.selection.isCollapsed()) {
                        const t = o();
                        (t.inlinePatterns.length > 0 || r()) && ((e,t)=>{
                            const n = e.selection.getRng();
                            jR(e, n).map((o=>{
                                const r = Math.max(0, n.startOffset - 1)
                                  , s = $R(e.dom, o, n.startContainer, r)
                                  , a = HR(t, o, s)
                                  , i = eA(e, o, n.startContainer, r, a, !1);
                                i.length > 0 && e.undoManager.transact((()=>{
                                    tA(e, i)
                                }
                                ))
                            }
                            ))
                        }
                        )(e, t)
                    }
                }
                ;
                e.on("keyup", (e=>{
                    oA(n, e, ((e,t)=>e === t.keyCode && !qm.modifierPressed(t))) && s()
                }
                )),
                e.on("keypress", (n=>{
                    oA(t, n, ((e,t)=>e.charCodeAt(0) === t.charCode)) && og.setEditorTimeout(e, s)
                }
                ))
            }
            )(e)
        }
        )(e));
        const r = gN(e);
        Zk(e, r),
        (e=>{
            e.on("NodeChange", O(sE, e))
        }
        )(e),
        (e=>{
            var t;
            const n = e.dom
              , o = El(e)
              , r = null !== (t = Zl(e)) && void 0 !== t ? t : ""
              , s = (t,a)=>{
                if ((e=>{
                    if (Dw(e)) {
                        const t = e.keyCode;
                        return !Pw(e) && (qm.metaKeyPressed(e) || e.altKey || t >= 112 && t <= 123 || H(Tw, t))
                    }
                    return !1
                }
                )(t))
                    return;
                const i = e.getBody()
                  , l = !(e=>Dw(e) && !(Pw(e) || "keyup" === e.type && 229 === e.keyCode))(t) && ((e,t,n)=>{
                    if (ms(bn(t), !1)) {
                        const o = t.firstElementChild;
                        return !o || !e.getStyle(t.firstElementChild, "padding-left") && !e.getStyle(t.firstElementChild, "padding-right") && n === o.nodeName.toLowerCase()
                    }
                    return !1
                }
                )(n, i, o);
                ("" !== n.getAttrib(i, Bw) !== l || a) && (n.setAttrib(i, Bw, l ? r : null),
                n.setAttrib(i, "aria-placeholder", l ? r : null),
                ((e,t)=>{
                    e.dispatch("PlaceholderToggle", {
                        state: t
                    })
                }
                )(e, l),
                e.on(l ? "keydown" : "keyup", s),
                e.off(l ? "keyup" : "keydown", s))
            }
            ;
            Ge(r) && e.on("init", (t=>{
                s(t, !0),
                e.on("change SetContent ExecCommand", s),
                e.on("paste", (t=>og.setEditorTimeout(e, (()=>s(t)))))
            }
            ))
        }
        )(e),
        XN(e);
        const s = (e=>{
            const t = e;
            return (e=>xe(e.plugins, "rtc").bind((e=>I.from(e.setup))))(e).fold((()=>(t.rtcInstance = CC(e),
            I.none())), (e=>(t.rtcInstance = (()=>{
                const e = N(null)
                  , t = N("");
                return {
                    init: {
                        bindEvents: E
                    },
                    undoManager: {
                        beforeChange: E,
                        add: e,
                        undo: e,
                        redo: e,
                        clear: E,
                        reset: E,
                        hasUndo: L,
                        hasRedo: L,
                        transact: e,
                        ignore: E,
                        extra: E
                    },
                    formatter: {
                        match: L,
                        matchAll: N([]),
                        matchNode: N(void 0),
                        canApply: L,
                        closest: t,
                        apply: E,
                        remove: E,
                        toggle: E,
                        formatChanged: N({
                            unbind: E
                        })
                    },
                    editor: {
                        getContent: t,
                        setContent: N({
                            content: "",
                            html: ""
                        }),
                        insertContent: N(""),
                        addVisual: E
                    },
                    selection: {
                        getContent: t
                    },
                    autocompleter: {
                        addDecoration: E,
                        removeDecoration: E
                    },
                    raw: {
                        getModel: N(I.none())
                    }
                }
            }
            )(),
            I.some((()=>e().then((e=>(t.rtcInstance = (e=>{
                const t = e=>f(e) ? e : {}
                  , {init: n, undoManager: o, formatter: r, editor: s, selection: a, autocompleter: i, raw: l} = e;
                return {
                    init: {
                        bindEvents: n.bindEvents
                    },
                    undoManager: {
                        beforeChange: o.beforeChange,
                        add: o.add,
                        undo: o.undo,
                        redo: o.redo,
                        clear: o.clear,
                        reset: o.reset,
                        hasUndo: o.hasUndo,
                        hasRedo: o.hasRedo,
                        transact: (e,t,n)=>o.transact(n),
                        ignore: (e,t)=>o.ignore(t),
                        extra: (e,t,n,r)=>o.extra(n, r)
                    },
                    formatter: {
                        match: (e,n,o,s)=>r.match(e, t(n), s),
                        matchAll: r.matchAll,
                        matchNode: r.matchNode,
                        canApply: e=>r.canApply(e),
                        closest: e=>r.closest(e),
                        apply: (e,n,o)=>r.apply(e, t(n)),
                        remove: (e,n,o,s)=>r.remove(e, t(n)),
                        toggle: (e,n,o)=>r.toggle(e, t(n)),
                        formatChanged: (e,t,n,o,s)=>r.formatChanged(t, n, o, s)
                    },
                    editor: {
                        getContent: e=>s.getContent(e),
                        setContent: (e,t)=>({
                            content: s.setContent(e, t),
                            html: ""
                        }),
                        insertContent: (e,t)=>(s.insertContent(e),
                        ""),
                        addVisual: s.addVisual
                    },
                    selection: {
                        getContent: (e,t)=>a.getContent(t)
                    },
                    autocompleter: {
                        addDecoration: i.addDecoration,
                        removeDecoration: i.removeDecoration
                    },
                    raw: {
                        getModel: ()=>I.some(l.getRawModel())
                    }
                }
            }
            )(e),
            e.rtc.isRemote))))))))
        }
        )(e);
        (e=>{
            const t = e.getDoc()
              , n = e.getBody();
            (e=>{
                e.dispatch("PreInit")
            }
            )(e),
            Bd(e) || (t.body.spellcheck = !1,
            sA.setAttrib(n, "spellcheck", "false")),
            e.quirks = rA(e),
            (e=>{
                e.dispatch("PostRender")
            }
            )(e);
            const o = Yl(e);
            void 0 !== o && (n.dir = o);
            const r = Dd(e);
            r && e.on("BeforeSetContent", (e=>{
                Dt.each(r, (t=>{
                    e.content = e.content.replace(t, (e=>"\x3c!--mce:protected " + escape(e) + "--\x3e"))
                }
                ))
            }
            )),
            e.on("SetContent", (()=>{
                e.addVisual(e.getBody())
            }
            )),
            e.on("compositionstart compositionend", (t=>{
                e.composing = "compositionstart" === t.type
            }
            ))
        }
        )(e),
        s.fold((()=>{
            uA(e).then((()=>mA(e)))
        }
        ), (t=>{
            e.setProgressState(!0),
            uA(e).then((()=>{
                t().then((t=>{
                    e.setProgressState(!1),
                    mA(e),
                    EC(e)
                }
                ), (t=>{
                    e.notificationManager.open({
                        type: "error",
                        text: String(t)
                    }),
                    mA(e),
                    EC(e)
                }
                ))
            }
            ))
        }
        ))
    }
      , gA = M
      , pA = Na.DOM
      , hA = Na.DOM
      , bA = (e,t)=>({
        editorContainer: e,
        iframeContainer: t,
        api: {}
    })
      , vA = e=>{
        const t = e.getElement();
        return e.inline ? bA(null) : (e=>{
            const t = hA.create("div");
            return hA.insertAfter(t, e),
            bA(t, t)
        }
        )(t)
    }
      , yA = async e=>{
        e.dispatch("ScriptsLoaded"),
        (e=>{
            const t = Dt.trim(Pl(e))
              , n = e.ui.registry.getAll().icons
              , o = {
                ...KC.get("default").icons,
                ...KC.get(t).icons
            };
            ge(o, ((t,o)=>{
                ke(n, o) || e.ui.registry.addIcon(o, t)
            }
            ))
        }
        )(e),
        (e=>{
            const t = nd(e);
            if (m(t)) {
                const n = ow.get(t);
                e.theme = n(e, ow.urls[t]) || {},
                w(e.theme.init) && e.theme.init(e, ow.urls[t] || e.documentBaseUrl.replace(/\/$/, ""))
            } else
                e.theme = {}
        }
        )(e),
        (e=>{
            const t = rd(e)
              , n = GC.get(t);
            e.model = n(e, GC.urls[t])
        }
        )(e),
        (e=>{
            const t = [];
            q(wd(e), (n=>{
                ((e,t,n)=>{
                    const o = nw.get(n)
                      , r = nw.urls[n] || e.documentBaseUrl.replace(/\/$/, "");
                    if (n = Dt.trim(n),
                    o && -1 === Dt.inArray(t, n)) {
                        if (e.plugins[n])
                            return;
                        try {
                            const s = o(e, r) || {};
                            e.plugins[n] = s,
                            w(s.init) && (s.init(e, r),
                            t.push(n))
                        } catch (t) {
                            ((e,t,n)=>{
                                const o = Pa.translate(["Failed to initialize plugin: {0}", t]);
                                Um(e, "PluginLoadError", {
                                    message: o
                                }),
                                dw(o, n),
                                aw(e, o)
                            }
                            )(e, n, t)
                        }
                    }
                }
                )(e, t, (e=>e.replace(/^\-/, ""))(n))
            }
            ))
        }
        )(e);
        const t = await (e=>{
            const t = e.getElement();
            return e.orgDisplay = t.style.display,
            m(nd(e)) ? (e=>{
                const t = e.theme.renderUI;
                return t ? t() : vA(e)
            }
            )(e) : w(nd(e)) ? (e=>{
                const t = e.getElement()
                  , n = nd(e)(e, t);
                return n.editorContainer.nodeType && (n.editorContainer.id = n.editorContainer.id || e.id + "_parent"),
                n.iframeContainer && n.iframeContainer.nodeType && (n.iframeContainer.id = n.iframeContainer.id || e.id + "_iframecontainer"),
                n.height = n.iframeHeight ? n.iframeHeight : t.offsetHeight,
                n
            }
            )(e) : vA(e)
        }
        )(e);
        ((e,t)=>{
            const n = {
                show: I.from(t.show).getOr(E),
                hide: I.from(t.hide).getOr(E),
                isEnabled: I.from(t.isEnabled).getOr(M),
                setEnabled: n=>{
                    e.mode.isReadOnly() || I.from(t.setEnabled).each((e=>e(n)))
                }
            };
            e.ui = {
                ...e.ui,
                ...n
            }
        }
        )(e, I.from(t.api).getOr({})),
        e.editorContainer = t.editorContainer,
        (e=>{
            e.contentCSS = e.contentCSS.concat((e=>cw(e, Wl(e)))(e), (e=>cw(e, Gl(e)))(e))
        }
        )(e),
        e.inline ? fA(e) : ((e,t)=>{
            ((e,t)=>{
                const n = e.translate("Rich Text Area")
                  , o = Zt(bn(e.getElement()), "tabindex").bind(Xe)
                  , r = ((e,t,n,o)=>{
                    const r = pn("iframe");
                    return o.each((e=>Xt(r, "tabindex", e))),
                    Qt(r, n),
                    Qt(r, {
                        id: e + "_ifr",
                        frameBorder: "0",
                        allowTransparency: "true",
                        title: t
                    }),
                    dn(r, "tox-edit-area__iframe"),
                    r
                }
                )(e.id, n, bl(e), o).dom;
                r.onload = ()=>{
                    r.onload = null,
                    e.dispatch("load")
                }
                ,
                e.contentAreaContainer = t.iframeContainer,
                e.iframeElement = r,
                e.iframeHTML = (e=>{
                    let t = vl(e) + "<html><head>";
                    yl(e) !== e.documentBaseUrl && (t += '<base href="' + e.documentBaseURI.getURI() + '" />'),
                    t += '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />';
                    const n = Cl(e)
                      , o = wl(e)
                      , r = e.translate(Nd(e));
                    return xl(e) && (t += '<meta http-equiv="Content-Security-Policy" content="' + xl(e) + '" />'),
                    t += `</head><body id="${n}" class="mce-content-body ${o}" data-id="${e.id}" aria-label="${r}"><br></body></html>`,
                    t
                }
                )(e),
                pA.add(t.iframeContainer, r)
            }
            )(e, t),
            t.editorContainer && (t.editorContainer.style.display = e.orgDisplay,
            e.hidden = pA.isHidden(t.editorContainer)),
            e.getElement().style.display = "none",
            pA.setAttrib(e.id, "aria-hidden", "true"),
            e.getElement().style.visibility = e.orgVisibility,
            (e=>{
                const t = e.iframeElement
                  , n = (o = bn(t),
                Eo(o, "load", gA, (()=>{
                    n.unbind(),
                    e.contentDocument = t.contentDocument,
                    fA(e)
                }
                )));
                var o;
                if (At.browser.isFirefox()) {
                    const t = e.getDoc();
                    t.open(),
                    t.write(e.iframeHTML),
                    t.close()
                } else
                    t.srcdoc = e.iframeHTML
            }
            )(e)
        }
        )(e, {
            editorContainer: t.editorContainer,
            iframeContainer: t.iframeContainer
        })
    }
      , CA = Na.DOM
      , wA = e=>"-" === e.charAt(0)
      , xA = (e,t,n)=>I.from(t).filter((e=>Ge(e) && !KC.has(e))).map((t=>({
        url: `${e.editorManager.baseURL}/icons/${t}/icons${n}.js`,
        name: I.some(t)
    })))
      , kA = (e,t)=>{
        const n = Aa.ScriptLoader
          , o = ()=>{
            !e.removed && (e=>{
                const t = nd(e);
                return !m(t) || C(ow.get(t))
            }
            )(e) && (e=>{
                const t = rd(e);
                return C(GC.get(t))
            }
            )(e) && yA(e)
        }
        ;
        ((e,t)=>{
            const n = nd(e);
            if (m(n) && !wA(n) && !ke(ow.urls, n)) {
                const o = od(e)
                  , r = o ? e.documentBaseURI.toAbsolute(o) : `themes/${n}/theme${t}.js`;
                ow.load(n, r).catch((()=>{
                    ((e,t,n)=>{
                        iw(e, "ThemeLoadError", lw("theme", t, n))
                    }
                    )(e, r, n)
                }
                ))
            }
        }
        )(e, t),
        ((e,t)=>{
            const n = rd(e);
            if ("plugin" !== n && !ke(GC.urls, n)) {
                const o = sd(e)
                  , r = m(o) ? e.documentBaseURI.toAbsolute(o) : `models/${n}/model${t}.js`;
                GC.load(n, r).catch((()=>{
                    ((e,t,n)=>{
                        iw(e, "ModelLoadError", lw("model", t, n))
                    }
                    )(e, r, n)
                }
                ))
            }
        }
        )(e, t),
        ((e,t)=>{
            const n = Hl(t)
              , o = $l(t);
            if (!Pa.hasCode(n) && "en" !== n) {
                const r = Ge(o) ? o : `${t.editorManager.baseURL}/langs/${n}.js`;
                e.add(r).catch((()=>{
                    ((e,t,n)=>{
                        iw(e, "LanguageLoadError", lw("language", t, n))
                    }
                    )(t, r, n)
                }
                ))
            }
        }
        )(n, e),
        ((e,t,n)=>{
            const o = xA(t, "default", n)
              , r = (e=>I.from(Ll(e)).filter(Ge).map((e=>({
                url: e,
                name: I.none()
            }))))(t).orThunk((()=>xA(t, Pl(t), "")));
            q((e=>{
                const t = []
                  , n = e=>{
                    t.push(e)
                }
                ;
                for (let t = 0; t < e.length; t++)
                    e[t].each(n);
                return t
            }
            )([o, r]), (n=>{
                e.add(n.url).catch((()=>{
                    ((e,t,n)=>{
                        iw(e, "IconsLoadError", lw("icons", t, n))
                    }
                    )(t, n.url, n.name.getOrUndefined())
                }
                ))
            }
            ))
        }
        )(n, e, t),
        ((e,t)=>{
            const n = (t,n)=>{
                nw.load(t, n).catch((()=>{
                    ((e,t,n)=>{
                        iw(e, "PluginLoadError", lw("plugin", t, n))
                    }
                    )(e, n, t)
                }
                ))
            }
            ;
            ge(xd(e), ((t,o)=>{
                n(o, t),
                e.options.set("plugins", wd(e).concat(o))
            }
            )),
            q(wd(e), (e=>{
                !(e = Dt.trim(e)) || nw.urls[e] || wA(e) || n(e, `plugins/${e}/plugin${t}.js`)
            }
            ))
        }
        )(e, t),
        n.loadQueue().then(o, o)
    }
      , EA = xt().deviceType
      , SA = EA.isPhone()
      , _A = EA.isTablet()
      , NA = e=>{
        if (y(e))
            return [];
        {
            const t = p(e) ? e : e.split(/[ ,]/)
              , n = V(t, qe);
            return G(n, Ge)
        }
    }
      , RA = (e,t)=>{
        const n = ((t,n)=>{
            const o = {}
              , r = {};
            return ve(t, ((t,n)=>H(e, n)), be(o), be(r)),
            {
                t: o,
                f: r
            }
        }
        )(t);
        return o = n.t,
        r = n.f,
        {
            sections: N(o),
            options: N(r)
        };
        var o, r
    }
      , AA = (e,t)=>ke(e.sections(), t)
      , OA = (e,t)=>({
        table_grid: !1,
        object_resizing: !1,
        resize: !1,
        toolbar_mode: xe(e, "toolbar_mode").getOr("scrolling"),
        toolbar_sticky: !1,
        ...t ? {
            menubar: !1
        } : {}
    })
      , TA = (e,t)=>{
        var n;
        const o = null !== (n = t.external_plugins) && void 0 !== n ? n : {};
        return e && e.external_plugins ? Dt.extend({}, e.external_plugins, o) : o
    }
      , BA = (e,t,n,o,r)=>{
        var s;
        const a = e ? {
            mobile: OA(null !== (s = r.mobile) && void 0 !== s ? s : {}, t)
        } : {}
          , i = RA(["mobile"], yS(a, r))
          , l = Dt.extend(n, o, i.options(), ((e,t)=>e && AA(t, "mobile"))(e, i) ? ((e,t,n={})=>{
            const o = e.sections()
              , r = xe(o, t).getOr({});
            return Dt.extend({}, n, r)
        }
        )(i, "mobile") : {}, {
            external_plugins: TA(o, i.options())
        });
        return ((e,t,n,o)=>{
            const r = NA(n.forced_plugins)
              , s = NA(o.plugins)
              , a = ((e,t)=>AA(e, t) ? e.sections()[t] : {})(t, "mobile")
              , i = ((e,t,n,o)=>e && AA(t, "mobile") ? o : n)(e, t, s, a.plugins ? NA(a.plugins) : s)
              , l = ((e,t)=>[...NA(e), ...NA(t)])(r, i);
            return Dt.extend(o, {
                forced_plugins: r,
                plugins: l
            })
        }
        )(e, i, o, l)
    }
      , DA = e=>{
        (e=>{
            const t = t=>()=>{
                q("left,center,right,justify".split(","), (n=>{
                    t !== n && e.formatter.remove("align" + n)
                }
                )),
                "none" !== t && ((t,n)=>{
                    e.formatter.toggle(t, void 0),
                    e.nodeChanged()
                }
                )("align" + t)
            }
            ;
            e.editorCommands.addCommands({
                JustifyLeft: t("left"),
                JustifyCenter: t("center"),
                JustifyRight: t("right"),
                JustifyFull: t("justify"),
                JustifyNone: t("none")
            })
        }
        )(e),
        (e=>{
            const t = t=>()=>{
                const n = e.selection
                  , o = n.isCollapsed() ? [e.dom.getParent(n.getNode(), e.dom.isBlock)] : n.getSelectedBlocks();
                return $(o, (n=>C(e.formatter.matchNode(n, t))))
            }
            ;
            e.editorCommands.addCommands({
                JustifyLeft: t("alignleft"),
                JustifyCenter: t("aligncenter"),
                JustifyRight: t("alignright"),
                JustifyFull: t("alignjustify")
            }, "state")
        }
        )(e)
    }
      , PA = (e,t)=>{
        const n = e.selection
          , o = e.dom;
        return /^ | $/.test(t) ? ((e,t,n)=>{
            const o = bn(e.getRoot());
            return n = Np(o, Bi.fromRangeStart(t)) ? n.replace(/^ /, "&nbsp;") : n.replace(/^&nbsp;/, " "),
            Rp(o, Bi.fromRangeEnd(t)) ? n.replace(/(&nbsp;| )(<br( \/)>)?$/, "&nbsp;") : n.replace(/&nbsp;(<br( \/)?>)?$/, " ")
        }
        )(o, n.getRng(), t) : t
    }
      , LA = (e,t)=>{
        if (e.selection.isEditable()) {
            const {content: n, details: o} = (e=>{
                if ("string" != typeof e) {
                    const t = Dt.extend({
                        paste: e.paste,
                        data: {
                            paste: e.paste
                        }
                    }, e);
                    return {
                        content: e.content,
                        details: t
                    }
                }
                return {
                    content: e,
                    details: {}
                }
            }
            )(t);
            Wy(e, {
                ...o,
                content: PA(e, n),
                format: "html",
                set: !1,
                selection: !0
            }).each((t=>{
                const n = ((e,t,n)=>xC(e).editor.insertContent(t, n))(e, t.content, o);
                Ky(e, n, t),
                e.addVisual()
            }
            ))
        }
    }
      , MA = {
        "font-size": "size",
        "font-family": "face"
    }
      , IA = Gt("font")
      , FA = e=>(t,n)=>I.from(n).map(bn).filter(Vt).bind((n=>((e,t,n)=>rb(bn(n), (t=>(t=>lo(t, e).orThunk((()=>IA(t) ? xe(MA, e).bind((e=>Zt(t, e))) : I.none())))(t)), (e=>xn(bn(t), e))))(e, t, n.dom).or(((e,t)=>I.from(Na.DOM.getStyle(t, e, !0)))(e, n.dom)))).getOr("")
      , UA = FA("font-size")
      , zA = S((e=>e.replace(/[\'\"\\]/g, "").replace(/,\s+/g, ",")), FA("font-family"))
      , jA = e=>uu(e.getBody()).bind((e=>{
        const t = e.container();
        return I.from(Xo(t) ? t.parentNode : t)
    }
    ))
      , HA = (e,t)=>((e,t)=>(e=>I.from(e.selection.getRng()).bind((t=>{
        const n = e.getBody();
        return t.startContainer === n && 0 === t.startOffset ? I.none() : I.from(e.selection.getStart(!0))
    }
    )))(e).orThunk(O(jA, e)).map(bn).filter(Vt).bind(t))(e, _(I.some, t))
      , $A = (e,t)=>{
        if (/^[0-9.]+$/.test(t)) {
            const n = parseInt(t, 10);
            if (n >= 1 && n <= 7) {
                const o = (e=>Dt.explode(e.options.get("font_size_style_values")))(e)
                  , r = (e=>Dt.explode(e.options.get("font_size_classes")))(e);
                return r.length > 0 ? r[n - 1] || t : o[n - 1] || t
            }
            return t
        }
        return t
    }
      , VA = e=>{
        const t = e.split(/\s*,\s*/);
        return V(t, (e=>-1 === e.indexOf(" ") || He(e, '"') || He(e, "'") ? e : `'${e}'`)).join(",")
    }
      , qA = e=>{
        DA(e),
        (e=>{
            e.editorCommands.addCommands({
                "Cut,Copy,Paste": t=>{
                    const n = e.getDoc();
                    let o;
                    try {
                        n.execCommand(t)
                    } catch (e) {
                        o = !0
                    }
                    if ("paste" !== t || n.queryCommandEnabled(t) || (o = !0),
                    o || !n.queryCommandSupported(t)) {
                        let t = e.translate("Your browser doesn't support direct access to the clipboard. Please use the Ctrl+X/C/V keyboard shortcuts instead.");
                        (At.os.isMacOS() || At.os.isiOS()) && (t = t.replace(/Ctrl\+/g, "\u2318+")),
                        e.notificationManager.open({
                            text: t,
                            type: "error"
                        })
                    }
                }
            })
        }
        )(e),
        (e=>{
            e.editorCommands.addCommands({
                mceAddUndoLevel: ()=>{
                    e.undoManager.add()
                }
                ,
                mceEndUndoLevel: ()=>{
                    e.undoManager.add()
                }
                ,
                Undo: ()=>{
                    e.undoManager.undo()
                }
                ,
                Redo: ()=>{
                    e.undoManager.redo()
                }
            })
        }
        )(e),
        (e=>{
            e.editorCommands.addCommands({
                mceSelectNodeDepth: (t,n,o)=>{
                    let r = 0;
                    e.dom.getParent(e.selection.getNode(), (t=>!jo(t) || r++ !== o || (e.selection.select(t),
                    !1)), e.getBody())
                }
                ,
                mceSelectNode: (t,n,o)=>{
                    e.selection.select(o)
                }
                ,
                selectAll: ()=>{
                    const t = e.dom.getParent(e.selection.getStart(), rr);
                    if (t) {
                        const n = e.dom.createRng();
                        n.selectNodeContents(t),
                        e.selection.setRng(n)
                    }
                }
            })
        }
        )(e),
        (e=>{
            e.editorCommands.addCommands({
                mceCleanup: ()=>{
                    const t = e.selection.getBookmark();
                    e.setContent(e.getContent()),
                    e.selection.moveToBookmark(t)
                }
                ,
                insertImage: (t,n,o)=>{
                    LA(e, e.dom.createHTML("img", {
                        src: o
                    }))
                }
                ,
                insertHorizontalRule: ()=>{
                    e.execCommand("mceInsertContent", !1, "<hr>")
                }
                ,
                insertText: (t,n,o)=>{
                    LA(e, e.dom.encode(o))
                }
                ,
                insertHTML: (t,n,o)=>{
                    LA(e, o)
                }
                ,
                mceInsertContent: (t,n,o)=>{
                    LA(e, o)
                }
                ,
                mceSetContent: (t,n,o)=>{
                    e.setContent(o)
                }
                ,
                mceReplaceContent: (t,n,o)=>{
                    e.execCommand("mceInsertContent", !1, o.replace(/\{\$selection\}/g, e.selection.getContent({
                        format: "text"
                    })))
                }
                ,
                mceNewDocument: ()=>{
                    e.setContent("")
                }
            })
        }
        )(e),
        (e=>{
            const t = (t,n,o)=>{
                const r = m(o) ? {
                    href: o
                } : o
                  , s = e.dom.getParent(e.selection.getNode(), "a");
                f(r) && m(r.href) && (r.href = r.href.replace(/ /g, "%20"),
                s && r.href || e.formatter.remove("link"),
                r.href && e.formatter.apply("link", r, s))
            }
            ;
            e.editorCommands.addCommands({
                unlink: ()=>{
                    if (e.selection.isCollapsed()) {
                        const t = e.dom.getParent(e.selection.getStart(), "a");
                        t && e.dom.remove(t, !0)
                    } else
                        e.formatter.remove("link")
                }
                ,
                mceInsertLink: t,
                createLink: t
            })
        }
        )(e),
        (e=>{
            e.editorCommands.addCommands({
                Indent: ()=>{
                    (e=>{
                        Yk(e, "indent")
                    }
                    )(e)
                }
                ,
                Outdent: ()=>{
                    Xk(e)
                }
            }),
            e.editorCommands.addCommands({
                Outdent: ()=>Wk(e)
            }, "state")
        }
        )(e),
        (e=>{
            e.editorCommands.addCommands({
                insertParagraph: ()=>{
                    nN(L_, e)
                }
                ,
                mceInsertNewLine: (t,n,o)=>{
                    oN(e, o)
                }
                ,
                InsertLineBreak: (t,n,o)=>{
                    nN($_, e)
                }
            })
        }
        )(e),
        (e=>{
            (e=>{
                e.editorCommands.addCommands({
                    "InsertUnorderedList,InsertOrderedList": t=>{
                        e.getDoc().execCommand(t);
                        const n = e.dom.getParent(e.selection.getNode(), "ol,ul");
                        if (n) {
                            const t = n.parentNode;
                            if (t && /^(H[1-6]|P|ADDRESS|PRE)$/.test(t.nodeName)) {
                                const o = e.selection.getBookmark();
                                e.dom.split(t, n),
                                e.selection.moveToBookmark(o)
                            }
                        }
                    }
                })
            }
            )(e),
            (e=>{
                e.editorCommands.addCommands({
                    "InsertUnorderedList,InsertOrderedList": t=>{
                        const n = e.dom.getParent(e.selection.getNode(), "ul,ol");
                        return n && ("insertunorderedlist" === t && "UL" === n.tagName || "insertorderedlist" === t && "OL" === n.tagName)
                    }
                }, "state")
            }
            )(e)
        }
        )(e),
        (e=>{
            (e=>{
                const t = (t,n)=>{
                    e.formatter.toggle(t, n),
                    e.nodeChanged()
                }
                ;
                e.editorCommands.addCommands({
                    "Bold,Italic,Underline,Strikethrough,Superscript,Subscript": e=>{
                        t(e)
                    }
                    ,
                    "ForeColor,HiliteColor": (e,n,o)=>{
                        t(e, {
                            value: o
                        })
                    }
                    ,
                    BackColor: (e,n,o)=>{
                        t("hilitecolor", {
                            value: o
                        })
                    }
                    ,
                    FontName: (t,n,o)=>{
                        ((e,t)=>{
                            const n = $A(e, t);
                            e.formatter.toggle("fontname", {
                                value: VA(n)
                            }),
                            e.nodeChanged()
                        }
                        )(e, o)
                    }
                    ,
                    FontSize: (t,n,o)=>{
                        ((e,t)=>{
                            e.formatter.toggle("fontsize", {
                                value: $A(e, t)
                            }),
                            e.nodeChanged()
                        }
                        )(e, o)
                    }
                    ,
                    LineHeight: (t,n,o)=>{
                        ((e,t)=>{
                            e.formatter.toggle("lineheight", {
                                value: String(t)
                            }),
                            e.nodeChanged()
                        }
                        )(e, o)
                    }
                    ,
                    Lang: (e,n,o)=>{
                        var r;
                        t(e, {
                            value: o.code,
                            customValue: null !== (r = o.customCode) && void 0 !== r ? r : null
                        })
                    }
                    ,
                    RemoveFormat: t=>{
                        e.formatter.remove(t)
                    }
                    ,
                    mceBlockQuote: ()=>{
                        t("blockquote")
                    }
                    ,
                    FormatBlock: (e,n,o)=>{
                        t(m(o) ? o : "p")
                    }
                    ,
                    mceToggleFormat: (e,n,o)=>{
                        t(o)
                    }
                })
            }
            )(e),
            (e=>{
                const t = t=>e.formatter.match(t);
                e.editorCommands.addCommands({
                    "Bold,Italic,Underline,Strikethrough,Superscript,Subscript": e=>t(e),
                    mceBlockQuote: ()=>t("blockquote")
                }, "state"),
                e.editorCommands.addQueryValueHandler("FontName", (()=>(e=>HA(e, (t=>zA(e.getBody(), t.dom))).getOr(""))(e))),
                e.editorCommands.addQueryValueHandler("FontSize", (()=>(e=>HA(e, (t=>UA(e.getBody(), t.dom))).getOr(""))(e))),
                e.editorCommands.addQueryValueHandler("LineHeight", (()=>(e=>HA(e, (t=>{
                    const n = bn(e.getBody())
                      , o = rb(t, (e=>lo(e, "line-height")), O(xn, n));
                    return o.getOrThunk((()=>{
                        const e = parseFloat(ao(t, "line-height"))
                          , n = parseFloat(ao(t, "font-size"));
                        return String(e / n)
                    }
                    ))
                }
                )).getOr(""))(e)))
            }
            )(e)
        }
        )(e),
        (e=>{
            e.editorCommands.addCommands({
                mceRemoveNode: (t,n,o)=>{
                    const r = null != o ? o : e.selection.getNode();
                    if (r !== e.getBody()) {
                        const t = e.selection.getBookmark();
                        e.dom.remove(r, !0),
                        e.selection.moveToBookmark(t)
                    }
                }
                ,
                mcePrint: ()=>{
                    e.getWin().print()
                }
                ,
                mceFocus: (t,n,o)=>{
                    ((e,t)=>{
                        e.removed || (t ? gg(e) : (e=>{
                            const t = e.selection
                              , n = e.getBody();
                            let o = t.getRng();
                            e.quirks.refreshContentEditable(),
                            C(e.bookmark) && !fg(e) && tg(e).each((t=>{
                                e.selection.setRng(t),
                                o = t
                            }
                            ));
                            const r = ((e,t)=>e.dom.getParent(t, (t=>"true" === e.dom.getContentEditable(t))))(e, t.getNode());
                            if (r && e.dom.isChildOf(r, n))
                                return mg(r),
                                ug(e, o),
                                void gg(e);
                            e.inline || (At.browser.isOpera() || mg(n),
                            e.getWin().focus()),
                            (At.browser.isFirefox() || e.inline) && (mg(n),
                            ug(e, o)),
                            gg(e)
                        }
                        )(e))
                    }
                    )(e, !0 === o)
                }
                ,
                mceToggleVisualAid: ()=>{
                    e.hasVisual = !e.hasVisual,
                    e.addVisual()
                }
            })
        }
        )(e)
    }
      , WA = ["toggleview"]
      , KA = e=>H(WA, e.toLowerCase());
    class GA {
        constructor(e) {
            this.commands = {
                state: {},
                exec: {},
                value: {}
            },
            this.editor = e
        }
        execCommand(e, t=!1, n, o) {
            const r = this.editor
              , s = e.toLowerCase()
              , a = null == o ? void 0 : o.skip_focus;
            if (r.removed)
                return !1;
            if ("mcefocus" !== s && (/^(mceAddUndoLevel|mceEndUndoLevel)$/i.test(s) || a ? (e=>{
                tg(e).each((t=>e.selection.setRng(t)))
            }
            )(r) : r.focus()),
            r.dispatch("BeforeExecCommand", {
                command: e,
                ui: t,
                value: n
            }).isDefaultPrevented())
                return !1;
            const i = this.commands.exec[s];
            return !!w(i) && (i(s, t, n),
            r.dispatch("ExecCommand", {
                command: e,
                ui: t,
                value: n
            }),
            !0)
        }
        queryCommandState(e) {
            if (!KA(e) && this.editor.quirks.isHidden() || this.editor.removed)
                return !1;
            const t = e.toLowerCase()
              , n = this.commands.state[t];
            return !!w(n) && n(t)
        }
        queryCommandValue(e) {
            if (!KA(e) && this.editor.quirks.isHidden() || this.editor.removed)
                return "";
            const t = e.toLowerCase()
              , n = this.commands.value[t];
            return w(n) ? n(t) : ""
        }
        addCommands(e, t="exec") {
            const n = this.commands;
            ge(e, ((e,o)=>{
                q(o.toLowerCase().split(","), (o=>{
                    n[t][o] = e
                }
                ))
            }
            ))
        }
        addCommand(e, t, n) {
            const o = e.toLowerCase();
            this.commands.exec[o] = (e,o,r)=>t.call(null != n ? n : this.editor, o, r)
        }
        queryCommandSupported(e) {
            const t = e.toLowerCase();
            return !!this.commands.exec[t]
        }
        addQueryStateHandler(e, t, n) {
            this.commands.state[e.toLowerCase()] = ()=>t.call(null != n ? n : this.editor)
        }
        addQueryValueHandler(e, t, n) {
            this.commands.value[e.toLowerCase()] = ()=>t.call(null != n ? n : this.editor)
        }
    }
    const YA = "data-mce-contenteditable"
      , XA = (e,t,n)=>{
        try {
            e.getDoc().execCommand(t, !1, String(n))
        } catch (e) {}
    }
      , QA = (e,t)=>{
        e.dom.contentEditable = t ? "true" : "false"
    }
      , JA = (e,t)=>{
        const n = bn(e.getBody());
        ((e,t,n)=>{
            mn(e, t) && !n ? un(e, t) : n && dn(e, t)
        }
        )(n, "mce-content-readonly", t),
        t ? (e.selection.controlSelection.hideResizeRect(),
        e._selectionOverrides.hideFakeCaret(),
        (e=>{
            I.from(e.selection.getNode()).each((e=>{
                e.removeAttribute("data-mce-selected")
            }
            ))
        }
        )(e),
        e.readonly = !0,
        QA(n, !1),
        q(Mo(n, '*[contenteditable="true"]'), (e=>{
            Xt(e, YA, "true"),
            QA(e, !1)
        }
        ))) : (e.readonly = !1,
        QA(n, !0),
        q(Mo(n, '*[data-mce-contenteditable="true"]'), (e=>{
            tn(e, YA),
            QA(e, !0)
        }
        )),
        XA(e, "StyleWithCSS", !1),
        XA(e, "enableInlineTableEditing", !1),
        XA(e, "enableObjectResizing", !1),
        (e=>fg(e) || (e=>{
            const t = Hn(bn(e.getElement()));
            return Kf(t).filter((t=>!ag(t.dom) && ig(e, t.dom))).isSome()
        }
        )(e))(e) && e.focus(),
        (e=>{
            e.selection.setRng(e.selection.getRng())
        }
        )(e),
        e.nodeChanged())
    }
      , ZA = e=>e.readonly
      , eO = e=>{
        e.parser.addAttributeFilter("contenteditable", (t=>{
            ZA(e) && q(t, (e=>{
                e.attr(YA, e.attr("contenteditable")),
                e.attr("contenteditable", "false")
            }
            ))
        }
        )),
        e.serializer.addAttributeFilter(YA, (t=>{
            ZA(e) && q(t, (e=>{
                e.attr("contenteditable", e.attr(YA))
            }
            ))
        }
        )),
        e.serializer.addTempAttr(YA)
    }
      , tO = ["copy"]
      , nO = Dt.makeMap("focus blur focusin focusout click dblclick mousedown mouseup mousemove mouseover beforepaste paste cut copy selectionchange mouseout mouseenter mouseleave wheel keydown keypress keyup input beforeinput contextmenu dragstart dragend dragover draggesture dragdrop drop drag submit compositionstart compositionend compositionupdate touchstart touchmove touchend touchcancel", " ");
    class oO {
        constructor(e) {
            this.bindings = {},
            this.settings = e || {},
            this.scope = this.settings.scope || this,
            this.toggleEvent = this.settings.toggleEvent || L
        }
        static isNative(e) {
            return !!nO[e.toLowerCase()]
        }
        fire(e, t) {
            return this.dispatch(e, t)
        }
        dispatch(e, t) {
            const n = e.toLowerCase()
              , o = ua(n, null != t ? t : {}, this.scope);
            this.settings.beforeFire && this.settings.beforeFire(o);
            const r = this.bindings[n];
            if (r)
                for (let e = 0, t = r.length; e < t; e++) {
                    const t = r[e];
                    if (!t.removed) {
                        if (t.once && this.off(n, t.func),
                        o.isImmediatePropagationStopped())
                            return o;
                        if (!1 === t.func.call(this.scope, o))
                            return o.preventDefault(),
                            o
                    }
                }
            return o
        }
        on(e, t, n, o) {
            if (!1 === t && (t = L),
            t) {
                const r = {
                    func: t,
                    removed: !1
                };
                o && Dt.extend(r, o);
                const s = e.toLowerCase().split(" ");
                let a = s.length;
                for (; a--; ) {
                    const e = s[a];
                    let t = this.bindings[e];
                    t || (t = [],
                    this.toggleEvent(e, !0)),
                    t = n ? [r, ...t] : [...t, r],
                    this.bindings[e] = t
                }
            }
            return this
        }
        off(e, t) {
            if (e) {
                const n = e.toLowerCase().split(" ");
                let o = n.length;
                for (; o--; ) {
                    const r = n[o];
                    let s = this.bindings[r];
                    if (!r)
                        return ge(this.bindings, ((e,t)=>{
                            this.toggleEvent(t, !1),
                            delete this.bindings[t]
                        }
                        )),
                        this;
                    if (s) {
                        if (t) {
                            const e = K(s, (e=>e.func === t));
                            s = e.fail,
                            this.bindings[r] = s,
                            q(e.pass, (e=>{
                                e.removed = !0
                            }
                            ))
                        } else
                            s.length = 0;
                        s.length || (this.toggleEvent(e, !1),
                        delete this.bindings[r])
                    }
                }
            } else
                ge(this.bindings, ((e,t)=>{
                    this.toggleEvent(t, !1)
                }
                )),
                this.bindings = {};
            return this
        }
        once(e, t, n) {
            return this.on(e, t, n, {
                once: !0
            })
        }
        has(e) {
            e = e.toLowerCase();
            const t = this.bindings[e];
            return !(!t || 0 === t.length)
        }
    }
    const rO = e=>(e._eventDispatcher || (e._eventDispatcher = new oO({
        scope: e,
        toggleEvent: (t,n)=>{
            oO.isNative(t) && e.toggleNativeEvent && e.toggleNativeEvent(t, n)
        }
    })),
    e._eventDispatcher)
      , sO = {
        fire(e, t, n) {
            return this.dispatch(e, t, n)
        },
        dispatch(e, t, n) {
            const o = this;
            if (o.removed && "remove" !== e && "detach" !== e)
                return ua(e.toLowerCase(), null != t ? t : {}, o);
            const r = rO(o).dispatch(e, t);
            if (!1 !== n && o.parent) {
                let t = o.parent();
                for (; t && !r.isPropagationStopped(); )
                    t.dispatch(e, r, !1),
                    t = t.parent ? t.parent() : void 0
            }
            return r
        },
        on(e, t, n) {
            return rO(this).on(e, t, n)
        },
        off(e, t) {
            return rO(this).off(e, t)
        },
        once(e, t) {
            return rO(this).once(e, t)
        },
        hasEventListeners(e) {
            return rO(this).has(e)
        }
    }
      , aO = Na.DOM;
    let iO;
    const lO = (e,t)=>{
        if ("selectionchange" === t)
            return e.getDoc();
        if (!e.inline && /^(?:mouse|touch|click|contextmenu|drop|dragover|dragend)/.test(t))
            return e.getDoc().documentElement;
        const n = ed(e);
        return n ? (e.eventRoot || (e.eventRoot = aO.select(n)[0]),
        e.eventRoot) : e.getBody()
    }
      , dO = (e,t,n)=>{
        (e=>!e.hidden && !ZA(e))(e) ? e.dispatch(t, n) : ZA(e) && ((e,t)=>{
            if ((e=>"click" === e.type)(t) && !qm.metaKeyPressed(t)) {
                const n = bn(t.target);
                ((e,t)=>Zn(t, "a", (t=>xn(t, bn(e.getBody())))).bind((e=>Zt(e, "href"))))(e, n).each((n=>{
                    if (t.preventDefault(),
                    /^#/.test(n)) {
                        const t = e.dom.select(`${n},[name="${ze(n, "#")}"]`);
                        t.length && e.selection.scrollIntoView(t[0], !0)
                    } else
                        window.open(n, "_blank", "rel=noopener noreferrer,menubar=yes,toolbar=yes,location=yes,status=yes,resizable=yes,scrollbars=yes")
                }
                ))
            } else
                (e=>H(tO, e.type))(t) && e.dispatch(t.type, t)
        }
        )(e, n)
    }
      , cO = (e,t)=>{
        if (e.delegates || (e.delegates = {}),
        e.delegates[t] || e.removed)
            return;
        const n = lO(e, t);
        if (ed(e)) {
            if (iO || (iO = {},
            e.editorManager.on("removeEditor", (()=>{
                e.editorManager.activeEditor || iO && (ge(iO, ((t,n)=>{
                    e.dom.unbind(lO(e, n))
                }
                )),
                iO = null)
            }
            ))),
            iO[t])
                return;
            const o = n=>{
                const o = n.target
                  , r = e.editorManager.get();
                let s = r.length;
                for (; s--; ) {
                    const e = r[s].getBody();
                    (e === o || aO.isChildOf(o, e)) && dO(r[s], t, n)
                }
            }
            ;
            iO[t] = o,
            aO.bind(n, t, o)
        } else {
            const o = n=>{
                dO(e, t, n)
            }
            ;
            aO.bind(n, t, o),
            e.delegates[t] = o
        }
    }
      , uO = {
        ...sO,
        bindPendingEventDelegates() {
            const e = this;
            Dt.each(e._pendingNativeEvents, (t=>{
                cO(e, t)
            }
            ))
        },
        toggleNativeEvent(e, t) {
            const n = this;
            "focus" !== e && "blur" !== e && (n.removed || (t ? n.initialized ? cO(n, e) : n._pendingNativeEvents ? n._pendingNativeEvents.push(e) : n._pendingNativeEvents = [e] : n.initialized && n.delegates && (n.dom.unbind(lO(n, e), e, n.delegates[e]),
            delete n.delegates[e])))
        },
        unbindAllNativeEvents() {
            const e = this
              , t = e.getBody()
              , n = e.dom;
            e.delegates && (ge(e.delegates, ((t,n)=>{
                e.dom.unbind(lO(e, n), n, t)
            }
            )),
            delete e.delegates),
            !e.inline && t && n && (t.onload = null,
            n.unbind(e.getWin()),
            n.unbind(e.getDoc())),
            n && (n.unbind(t),
            n.unbind(e.getContainer()))
        }
    }
      , mO = e=>m(e) ? {
        value: e.split(/[ ,]/),
        valid: !0
    } : k(e, m) ? {
        value: e,
        valid: !0
    } : {
        valid: !1,
        message: "The value must be a string[] or a comma/space separated string."
    }
      , fO = (e,t)=>e + (Ye(t.message) ? "" : `. ${t.message}`)
      , gO = e=>e.valid
      , pO = (e,t,n="")=>{
        const o = t(e);
        return b(o) ? o ? {
            value: e,
            valid: !0
        } : {
            valid: !1,
            message: n
        } : o
    }
      , hO = ["design", "readonly"]
      , bO = (e,t,n,o)=>{
        const r = n[t.get()]
          , s = n[o];
        try {
            s.activate()
        } catch (e) {
            return void console.error(`problem while activating editor mode ${o}:`, e)
        }
        r.deactivate(),
        r.editorReadOnly !== s.editorReadOnly && JA(e, s.editorReadOnly),
        t.set(o),
        ((e,t)=>{
            e.dispatch("SwitchMode", {
                mode: t
            })
        }
        )(e, o)
    }
      , vO = Dt.each
      , yO = Dt.explode
      , CO = {
        f1: 112,
        f2: 113,
        f3: 114,
        f4: 115,
        f5: 116,
        f6: 117,
        f7: 118,
        f8: 119,
        f9: 120,
        f10: 121,
        f11: 122,
        f12: 123
    }
      , wO = Dt.makeMap("alt,ctrl,shift,meta,access")
      , xO = e=>{
        const t = {}
          , n = At.os.isMacOS() || At.os.isiOS();
        vO(yO(e.toLowerCase(), "+"), (e=>{
            (e=>e in wO)(e) ? t[e] = !0 : /^[0-9]{2,}$/.test(e) ? t.keyCode = parseInt(e, 10) : (t.charCode = e.charCodeAt(0),
            t.keyCode = CO[e] || e.toUpperCase().charCodeAt(0))
        }
        ));
        const o = [t.keyCode];
        let r;
        for (r in wO)
            t[r] ? o.push(r) : t[r] = !1;
        return t.id = o.join(","),
        t.access && (t.alt = !0,
        n ? t.ctrl = !0 : t.shift = !0),
        t.meta && (n ? t.meta = !0 : (t.ctrl = !0,
        t.meta = !1)),
        t
    }
    ;
    class kO {
        constructor(e) {
            this.shortcuts = {},
            this.pendingPatterns = [],
            this.editor = e;
            const t = this;
            e.on("keyup keypress keydown", (e=>{
                !t.hasModifier(e) && !t.isFunctionKey(e) || e.isDefaultPrevented() || (vO(t.shortcuts, (n=>{
                    t.matchShortcut(e, n) && (t.pendingPatterns = n.subpatterns.slice(0),
                    "keydown" === e.type && t.executeShortcutAction(n))
                }
                )),
                t.matchShortcut(e, t.pendingPatterns[0]) && (1 === t.pendingPatterns.length && "keydown" === e.type && t.executeShortcutAction(t.pendingPatterns[0]),
                t.pendingPatterns.shift()))
            }
            ))
        }
        add(e, t, n, o) {
            const r = this
              , s = r.normalizeCommandFunc(n);
            return vO(yO(Dt.trim(e)), (e=>{
                const n = r.createShortcut(e, t, s, o);
                r.shortcuts[n.id] = n
            }
            )),
            !0
        }
        remove(e) {
            const t = this.createShortcut(e);
            return !!this.shortcuts[t.id] && (delete this.shortcuts[t.id],
            !0)
        }
        normalizeCommandFunc(e) {
            const t = this
              , n = e;
            return "string" == typeof n ? ()=>{
                t.editor.execCommand(n, !1, null)
            }
            : Dt.isArray(n) ? ()=>{
                t.editor.execCommand(n[0], n[1], n[2])
            }
            : n
        }
        createShortcut(e, t, n, o) {
            const r = Dt.map(yO(e, ">"), xO);
            return r[r.length - 1] = Dt.extend(r[r.length - 1], {
                func: n,
                scope: o || this.editor
            }),
            Dt.extend(r[0], {
                desc: this.editor.translate(t),
                subpatterns: r.slice(1)
            })
        }
        hasModifier(e) {
            return e.altKey || e.ctrlKey || e.metaKey
        }
        isFunctionKey(e) {
            return "keydown" === e.type && e.keyCode >= 112 && e.keyCode <= 123
        }
        matchShortcut(e, t) {
            return !!t && t.ctrl === e.ctrlKey && t.meta === e.metaKey && t.alt === e.altKey && t.shift === e.shiftKey && !!(e.keyCode === t.keyCode || e.charCode && e.charCode === t.charCode) && (e.preventDefault(),
            !0)
        }
        executeShortcutAction(e) {
            return e.func ? e.func.call(e.scope) : null
        }
    }
    const EO = ()=>{
        const e = (()=>{
            const e = {}
              , t = {}
              , n = {}
              , o = {}
              , r = {}
              , s = {}
              , a = {}
              , i = {}
              , l = (e,t)=>(n,o)=>{
                e[n.toLowerCase()] = {
                    ...o,
                    type: t
                }
            }
            ;
            return {
                addButton: l(e, "button"),
                addGroupToolbarButton: l(e, "grouptoolbarbutton"),
                addToggleButton: l(e, "togglebutton"),
                addMenuButton: l(e, "menubutton"),
                addSplitButton: l(e, "splitbutton"),
                addMenuItem: l(t, "menuitem"),
                addNestedMenuItem: l(t, "nestedmenuitem"),
                addToggleMenuItem: l(t, "togglemenuitem"),
                addAutocompleter: l(n, "autocompleter"),
                addContextMenu: l(r, "contextmenu"),
                addContextToolbar: l(s, "contexttoolbar"),
                addContextForm: l(s, "contextform"),
                addSidebar: l(a, "sidebar"),
                addView: l(i, "views"),
                addIcon: (e,t)=>o[e.toLowerCase()] = t,
                getAll: ()=>({
                    buttons: e,
                    menuItems: t,
                    icons: o,
                    popups: n,
                    contextMenus: r,
                    contextToolbars: s,
                    sidebars: a,
                    views: i
                })
            }
        }
        )();
        return {
            addAutocompleter: e.addAutocompleter,
            addButton: e.addButton,
            addContextForm: e.addContextForm,
            addContextMenu: e.addContextMenu,
            addContextToolbar: e.addContextToolbar,
            addIcon: e.addIcon,
            addMenuButton: e.addMenuButton,
            addMenuItem: e.addMenuItem,
            addNestedMenuItem: e.addNestedMenuItem,
            addSidebar: e.addSidebar,
            addSplitButton: e.addSplitButton,
            addToggleButton: e.addToggleButton,
            addGroupToolbarButton: e.addGroupToolbarButton,
            addToggleMenuItem: e.addToggleMenuItem,
            addView: e.addView,
            getAll: e.getAll
        }
    }
      , SO = Na.DOM
      , _O = Dt.extend
      , NO = Dt.each;
    class RO {
        constructor(e, t, n) {
            this.plugins = {},
            this.contentCSS = [],
            this.contentStyles = [],
            this.loadedCSS = {},
            this.isNotDirty = !1,
            this.composing = !1,
            this.destroyed = !1,
            this.hasHiddenInput = !1,
            this.iframeElement = null,
            this.initialized = !1,
            this.readonly = !1,
            this.removed = !1,
            this.startContent = "",
            this._pendingNativeEvents = [],
            this._skinLoaded = !1,
            this.editorManager = n,
            this.documentBaseUrl = n.documentBaseURL,
            _O(this, uO);
            const o = this;
            this.id = e,
            this.hidden = !1;
            const r = ((e,t)=>BA(SA || _A, SA, t, e, t))(n.defaultOptions, t);
            this.options = ((e,t)=>{
                const n = {}
                  , o = {}
                  , r = (e,t,n)=>{
                    const r = pO(t, n);
                    return gO(r) ? (o[e] = r.value,
                    !0) : (console.warn(fO(`Invalid value passed for the ${e} option`, r)),
                    !1)
                }
                  , s = e=>ke(n, e);
                return {
                    register: (e,s)=>{
                        const a = (e=>m(e.processor))(s) ? (e=>{
                            const t = (()=>{
                                switch (e) {
                                case "array":
                                    return p;
                                case "boolean":
                                    return b;
                                case "function":
                                    return w;
                                case "number":
                                    return x;
                                case "object":
                                    return f;
                                case "string":
                                    return m;
                                case "string[]":
                                    return mO;
                                case "object[]":
                                    return e=>k(e, f);
                                case "regexp":
                                    return e=>u(e, RegExp);
                                default:
                                    return M
                                }
                            }
                            )();
                            return n=>pO(n, t, `The value must be a ${e}.`)
                        }
                        )(s.processor) : s.processor
                          , i = ((e,t,n)=>{
                            if (!v(t)) {
                                const o = pO(t, n);
                                if (gO(o))
                                    return o.value;
                                console.error(fO(`Invalid default value passed for the "${e}" option`, o))
                            }
                        }
                        )(e, s.default, a);
                        n[e] = {
                            ...s,
                            default: i,
                            processor: a
                        },
                        xe(o, e).orThunk((()=>xe(t, e))).each((t=>r(e, t, a)))
                    }
                    ,
                    isRegistered: s,
                    get: e=>xe(o, e).orThunk((()=>xe(n, e).map((e=>e.default)))).getOrUndefined(),
                    set: (e,t)=>{
                        if (s(e)) {
                            const o = n[e];
                            return o.immutable ? (console.error(`"${e}" is an immutable option and cannot be updated`),
                            !1) : r(e, t, o.processor)
                        }
                        return console.warn(`"${e}" is not a registered option. Ensure the option has been registered before setting a value.`),
                        !1
                    }
                    ,
                    unset: e=>{
                        const t = s(e);
                        return t && delete o[e],
                        t
                    }
                    ,
                    isSet: e=>ke(o, e)
                }
            }
            )(0, r),
            (e=>{
                const t = e.options.register;
                t("id", {
                    processor: "string",
                    default: e.id
                }),
                t("selector", {
                    processor: "string"
                }),
                t("target", {
                    processor: "object"
                }),
                t("suffix", {
                    processor: "string"
                }),
                t("cache_suffix", {
                    processor: "string"
                }),
                t("base_url", {
                    processor: "string"
                }),
                t("referrer_policy", {
                    processor: "string",
                    default: ""
                }),
                t("language_load", {
                    processor: "boolean",
                    default: !0
                }),
                t("inline", {
                    processor: "boolean",
                    default: !1
                }),
                t("iframe_attrs", {
                    processor: "object",
                    default: {}
                }),
                t("doctype", {
                    processor: "string",
                    default: "<!DOCTYPE html>"
                }),
                t("document_base_url", {
                    processor: "string",
                    default: e.documentBaseUrl
                }),
                t("body_id", {
                    processor: hl(e, "tinymce"),
                    default: "tinymce"
                }),
                t("body_class", {
                    processor: hl(e),
                    default: ""
                }),
                t("content_security_policy", {
                    processor: "string",
                    default: ""
                }),
                t("br_in_pre", {
                    processor: "boolean",
                    default: !0
                }),
                t("forced_root_block", {
                    processor: e=>{
                        const t = m(e) && Ge(e);
                        return t ? {
                            value: e,
                            valid: t
                        } : {
                            valid: !1,
                            message: "Must be a non-empty string."
                        }
                    }
                    ,
                    default: "p"
                }),
                t("forced_root_block_attrs", {
                    processor: "object",
                    default: {}
                }),
                t("newline_behavior", {
                    processor: e=>{
                        const t = H(["block", "linebreak", "invert", "default"], e);
                        return t ? {
                            value: e,
                            valid: t
                        } : {
                            valid: !1,
                            message: "Must be one of: block, linebreak, invert or default."
                        }
                    }
                    ,
                    default: "default"
                }),
                t("br_newline_selector", {
                    processor: "string",
                    default: ".mce-toc h2,figcaption,caption"
                }),
                t("no_newline_selector", {
                    processor: "string",
                    default: ""
                }),
                t("keep_styles", {
                    processor: "boolean",
                    default: !0
                }),
                t("end_container_on_empty_block", {
                    processor: e=>b(e) || m(e) ? {
                        valid: !0,
                        value: e
                    } : {
                        valid: !1,
                        message: "Must be boolean or a string"
                    },
                    default: "blockquote"
                }),
                t("font_size_style_values", {
                    processor: "string",
                    default: "xx-small,x-small,small,medium,large,x-large,xx-large"
                }),
                t("font_size_legacy_values", {
                    processor: "string",
                    default: "xx-small,small,medium,large,x-large,xx-large,300%"
                }),
                t("font_size_classes", {
                    processor: "string",
                    default: ""
                }),
                t("automatic_uploads", {
                    processor: "boolean",
                    default: !0
                }),
                t("images_reuse_filename", {
                    processor: "boolean",
                    default: !1
                }),
                t("images_replace_blob_uris", {
                    processor: "boolean",
                    default: !0
                }),
                t("icons", {
                    processor: "string",
                    default: ""
                }),
                t("icons_url", {
                    processor: "string",
                    default: ""
                }),
                t("images_upload_url", {
                    processor: "string",
                    default: ""
                }),
                t("images_upload_base_path", {
                    processor: "string",
                    default: ""
                }),
                t("images_upload_credentials", {
                    processor: "boolean",
                    default: !1
                }),
                t("images_upload_handler", {
                    processor: "function"
                }),
                t("language", {
                    processor: "string",
                    default: "en"
                }),
                t("language_url", {
                    processor: "string",
                    default: ""
                }),
                t("entity_encoding", {
                    processor: "string",
                    default: "named"
                }),
                t("indent", {
                    processor: "boolean",
                    default: !0
                }),
                t("indent_before", {
                    processor: "string",
                    default: "p,h1,h2,h3,h4,h5,h6,blockquote,div,title,style,pre,script,td,th,ul,ol,li,dl,dt,dd,area,table,thead,tfoot,tbody,tr,section,summary,article,hgroup,aside,figure,figcaption,option,optgroup,datalist"
                }),
                t("indent_after", {
                    processor: "string",
                    default: "p,h1,h2,h3,h4,h5,h6,blockquote,div,title,style,pre,script,td,th,ul,ol,li,dl,dt,dd,area,table,thead,tfoot,tbody,tr,section,summary,article,hgroup,aside,figure,figcaption,option,optgroup,datalist"
                }),
                t("indent_use_margin", {
                    processor: "boolean",
                    default: !1
                }),
                t("indentation", {
                    processor: "string",
                    default: "40px"
                }),
                t("content_css", {
                    processor: e=>{
                        const t = !1 === e || m(e) || k(e, m);
                        return t ? m(e) ? {
                            value: V(e.split(","), qe),
                            valid: t
                        } : p(e) ? {
                            value: e,
                            valid: t
                        } : !1 === e ? {
                            value: [],
                            valid: t
                        } : {
                            value: e,
                            valid: t
                        } : {
                            valid: !1,
                            message: "Must be false, a string or an array of strings."
                        }
                    }
                    ,
                    default: md(e) ? [] : ["default"]
                }),
                t("content_style", {
                    processor: "string"
                }),
                t("content_css_cors", {
                    processor: "boolean",
                    default: !1
                }),
                t("font_css", {
                    processor: e=>{
                        const t = m(e) || k(e, m);
                        return t ? {
                            value: p(e) ? e : V(e.split(","), qe),
                            valid: t
                        } : {
                            valid: !1,
                            message: "Must be a string or an array of strings."
                        }
                    }
                    ,
                    default: []
                }),
                t("inline_boundaries", {
                    processor: "boolean",
                    default: !0
                }),
                t("inline_boundaries_selector", {
                    processor: "string",
                    default: "a[href],code,span.mce-annotation"
                }),
                t("object_resizing", {
                    processor: e=>{
                        const t = b(e) || m(e);
                        return t ? !1 === e || cl.isiPhone() || cl.isiPad() ? {
                            value: "",
                            valid: t
                        } : {
                            value: !0 === e ? "table,img,figure.image,div,video,iframe" : e,
                            valid: t
                        } : {
                            valid: !1,
                            message: "Must be boolean or a string"
                        }
                    }
                    ,
                    default: !ul
                }),
                t("resize_img_proportional", {
                    processor: "boolean",
                    default: !0
                }),
                t("event_root", {
                    processor: "object"
                }),
                t("service_message", {
                    processor: "string"
                }),
                t("theme", {
                    processor: e=>!1 === e || m(e) || w(e),
                    default: "silver"
                }),
                t("theme_url", {
                    processor: "string"
                }),
                t("formats", {
                    processor: "object"
                }),
                t("format_empty_lines", {
                    processor: "boolean",
                    default: !1
                }),
                t("format_noneditable_selector", {
                    processor: "string",
                    default: ""
                }),
                t("preview_styles", {
                    processor: e=>{
                        const t = !1 === e || m(e);
                        return t ? {
                            value: !1 === e ? "" : e,
                            valid: t
                        } : {
                            valid: !1,
                            message: "Must be false or a string"
                        }
                    }
                    ,
                    default: "font-family font-size font-weight font-style text-decoration text-transform color background-color border border-radius outline text-shadow"
                }),
                t("custom_ui_selector", {
                    processor: "string",
                    default: ""
                }),
                t("hidden_input", {
                    processor: "boolean",
                    default: !0
                }),
                t("submit_patch", {
                    processor: "boolean",
                    default: !0
                }),
                t("encoding", {
                    processor: "string"
                }),
                t("add_form_submit_trigger", {
                    processor: "boolean",
                    default: !0
                }),
                t("add_unload_trigger", {
                    processor: "boolean",
                    default: !0
                }),
                t("custom_undo_redo_levels", {
                    processor: "number",
                    default: 0
                }),
                t("disable_nodechange", {
                    processor: "boolean",
                    default: !1
                }),
                t("readonly", {
                    processor: "boolean",
                    default: !1
                }),
                t("plugins", {
                    processor: "string[]",
                    default: []
                }),
                t("external_plugins", {
                    processor: "object"
                }),
                t("forced_plugins", {
                    processor: "string[]"
                }),
                t("model", {
                    processor: "string",
                    default: e.hasPlugin("rtc") ? "plugin" : "dom"
                }),
                t("model_url", {
                    processor: "string"
                }),
                t("block_unsupported_drop", {
                    processor: "boolean",
                    default: !0
                }),
                t("visual", {
                    processor: "boolean",
                    default: !0
                }),
                t("visual_table_class", {
                    processor: "string",
                    default: "mce-item-table"
                }),
                t("visual_anchor_class", {
                    processor: "string",
                    default: "mce-item-anchor"
                }),
                t("iframe_aria_text", {
                    processor: "string",
                    default: "Rich Text Area. Press ALT-0 for help."
                }),
                t("setup", {
                    processor: "function"
                }),
                t("init_instance_callback", {
                    processor: "function"
                }),
                t("url_converter", {
                    processor: "function",
                    default: e.convertURL
                }),
                t("url_converter_scope", {
                    processor: "object",
                    default: e
                }),
                t("urlconverter_callback", {
                    processor: "function"
                }),
                t("allow_conditional_comments", {
                    processor: "boolean",
                    default: !1
                }),
                t("allow_html_data_urls", {
                    processor: "boolean",
                    default: !1
                }),
                t("allow_svg_data_urls", {
                    processor: "boolean"
                }),
                t("allow_html_in_named_anchor", {
                    processor: "boolean",
                    default: !1
                }),
                t("allow_script_urls", {
                    processor: "boolean",
                    default: !1
                }),
                t("allow_unsafe_link_target", {
                    processor: "boolean",
                    default: !1
                }),
                t("convert_fonts_to_spans", {
                    processor: "boolean",
                    default: !0,
                    deprecated: !0
                }),
                t("fix_list_elements", {
                    processor: "boolean",
                    default: !1
                }),
                t("preserve_cdata", {
                    processor: "boolean",
                    default: !1
                }),
                t("remove_trailing_brs", {
                    processor: "boolean"
                }),
                t("inline_styles", {
                    processor: "boolean",
                    default: !0,
                    deprecated: !0
                }),
                t("element_format", {
                    processor: "string",
                    default: "html"
                }),
                t("entities", {
                    processor: "string"
                }),
                t("schema", {
                    processor: "string",
                    default: "html5"
                }),
                t("convert_urls", {
                    processor: "boolean",
                    default: !0
                }),
                t("relative_urls", {
                    processor: "boolean",
                    default: !0
                }),
                t("remove_script_host", {
                    processor: "boolean",
                    default: !0
                }),
                t("custom_elements", {
                    processor: "string"
                }),
                t("extended_valid_elements", {
                    processor: "string"
                }),
                t("invalid_elements", {
                    processor: "string"
                }),
                t("invalid_styles", {
                    processor: pl
                }),
                t("valid_children", {
                    processor: "string"
                }),
                t("valid_classes", {
                    processor: pl
                }),
                t("valid_elements", {
                    processor: "string"
                }),
                t("valid_styles", {
                    processor: pl
                }),
                t("verify_html", {
                    processor: "boolean",
                    default: !0
                }),
                t("auto_focus", {
                    processor: e=>m(e) || !0 === e
                }),
                t("browser_spellcheck", {
                    processor: "boolean",
                    default: !1
                }),
                t("protect", {
                    processor: "array"
                }),
                t("images_file_types", {
                    processor: "string",
                    default: "jpeg,jpg,jpe,jfi,jif,jfif,png,gif,bmp,webp"
                }),
                t("deprecation_warnings", {
                    processor: "boolean",
                    default: !0
                }),
                t("a11y_advanced_options", {
                    processor: "boolean",
                    default: !1
                }),
                t("api_key", {
                    processor: "string"
                }),
                t("paste_block_drop", {
                    processor: "boolean",
                    default: !1
                }),
                t("paste_data_images", {
                    processor: "boolean",
                    default: !0
                }),
                t("paste_preprocess", {
                    processor: "function"
                }),
                t("paste_postprocess", {
                    processor: "function"
                }),
                t("paste_webkit_styles", {
                    processor: "string",
                    default: "none"
                }),
                t("paste_remove_styles_if_webkit", {
                    processor: "boolean",
                    default: !0
                }),
                t("paste_merge_formats", {
                    processor: "boolean",
                    default: !0
                }),
                t("smart_paste", {
                    processor: "boolean",
                    default: !0
                }),
                t("paste_as_text", {
                    processor: "boolean",
                    default: !1
                }),
                t("paste_tab_spaces", {
                    processor: "number",
                    default: 4
                }),
                t("text_patterns", {
                    processor: e=>k(e, f) || !1 === e ? {
                        value: dl(!1 === e ? [] : e),
                        valid: !0
                    } : {
                        valid: !1,
                        message: "Must be an array of objects or false."
                    },
                    default: [{
                        start: "*",
                        end: "*",
                        format: "italic"
                    }, {
                        start: "**",
                        end: "**",
                        format: "bold"
                    }, {
                        start: "#",
                        format: "h1"
                    }, {
                        start: "##",
                        format: "h2"
                    }, {
                        start: "###",
                        format: "h3"
                    }, {
                        start: "####",
                        format: "h4"
                    }, {
                        start: "#####",
                        format: "h5"
                    }, {
                        start: "######",
                        format: "h6"
                    }, {
                        start: "1. ",
                        cmd: "InsertOrderedList"
                    }, {
                        start: "* ",
                        cmd: "InsertUnorderedList"
                    }, {
                        start: "- ",
                        cmd: "InsertUnorderedList"
                    }]
                }),
                t("text_patterns_lookup", {
                    processor: e=>{
                        return w(e) ? {
                            value: (t = e,
                            e=>{
                                const n = t(e);
                                return dl(n)
                            }
                            ),
                            valid: !0
                        } : {
                            valid: !1,
                            message: "Must be a single function"
                        };
                        var t
                    }
                    ,
                    default: e=>[]
                }),
                t("noneditable_class", {
                    processor: "string",
                    default: "mceNonEditable"
                }),
                t("editable_class", {
                    processor: "string",
                    default: "mceEditable"
                }),
                t("noneditable_regexp", {
                    processor: e=>k(e, fl) ? {
                        value: e,
                        valid: !0
                    } : fl(e) ? {
                        value: [e],
                        valid: !0
                    } : {
                        valid: !1,
                        message: "Must be a RegExp or an array of RegExp."
                    },
                    default: []
                }),
                t("table_tab_navigation", {
                    processor: "boolean",
                    default: !0
                }),
                t("highlight_on_focus", {
                    processor: "boolean",
                    default: !1
                }),
                t("xss_sanitization", {
                    processor: "boolean",
                    default: !0
                }),
                e.on("ScriptsLoaded", (()=>{
                    t("directionality", {
                        processor: "string",
                        default: Pa.isRtl() ? "rtl" : void 0
                    }),
                    t("placeholder", {
                        processor: "string",
                        default: ml.getAttrib(e.getElement(), "placeholder")
                    })
                }
                ))
            }
            )(o);
            const s = this.options.get;
            s("deprecation_warnings") && ((e,t)=>{
                ((e,t)=>{
                    const n = UC(e)
                      , o = HC(t)
                      , r = o.length > 0
                      , s = n.length > 0
                      , a = "mobile" === t.theme;
                    if (r || s || a) {
                        const e = "\n- "
                          , t = a ? `\n\nThemes:${e}mobile` : ""
                          , i = r ? `\n\nPlugins:${e}${o.join(e)}` : ""
                          , l = s ? `\n\nOptions:${e}${n.join(e)}` : "";
                        console.warn("The following deprecated features are currently enabled and have been removed in TinyMCE 6.0. These features will no longer work and should be removed from the TinyMCE configuration. See https://www.tiny.cloud/docs/tinymce/6/migration-from-5x/ for more information." + t + i + l)
                    }
                }
                )(e, t),
                ((e,t)=>{
                    const n = zC(e)
                      , o = $C(t)
                      , r = o.length > 0
                      , s = n.length > 0;
                    if (r || s) {
                        const e = "\n- "
                          , t = r ? `\n\nPlugins:${e}${o.map(VC).join(e)}` : ""
                          , a = s ? `\n\nOptions:${e}${n.join(e)}` : "";
                        console.warn("The following deprecated features are currently enabled but will be removed soon." + t + a)
                    }
                }
                )(e, t)
            }
            )(t, r);
            const a = s("suffix");
            a && (n.suffix = a),
            this.suffix = n.suffix;
            const i = s("base_url");
            i && n._setBaseUrl(i),
            this.baseUri = n.baseURI;
            const l = jl(o);
            l && (Aa.ScriptLoader._setReferrerPolicy(l),
            Na.DOM.styleSheetLoader._setReferrerPolicy(l));
            const d = Cd(o);
            C(d) && Na.DOM.styleSheetLoader._setContentCssCors(d),
            La.languageLoad = s("language_load"),
            La.baseURL = n.baseURL,
            this.setDirty(!1),
            this.documentBaseURI = new Ay(yl(o),{
                base_uri: this.baseUri
            }),
            this.baseURI = this.baseUri,
            this.inline = md(o),
            this.hasVisual = Ed(o),
            this.shortcuts = new kO(this),
            this.editorCommands = new GA(this),
            qA(this);
            const c = s("cache_suffix");
            c && (At.cacheSuffix = c.replace(/^[\?\&]+/, "")),
            this.ui = {
                registry: EO(),
                styleSheetLoader: void 0,
                show: E,
                hide: E,
                setEnabled: E,
                isEnabled: M
            },
            this.mode = (e=>{
                const t = Oa("design")
                  , n = Oa({
                    design: {
                        activate: E,
                        deactivate: E,
                        editorReadOnly: !1
                    },
                    readonly: {
                        activate: E,
                        deactivate: E,
                        editorReadOnly: !0
                    }
                });
                return (e=>{
                    e.serializer ? eO(e) : e.on("PreInit", (()=>{
                        eO(e)
                    }
                    ))
                }
                )(e),
                (e=>{
                    e.on("ShowCaret", (t=>{
                        ZA(e) && t.preventDefault()
                    }
                    )),
                    e.on("ObjectSelected", (t=>{
                        ZA(e) && t.preventDefault()
                    }
                    ))
                }
                )(e),
                {
                    isReadOnly: ()=>ZA(e),
                    set: o=>((e,t,n,o)=>{
                        if (o !== n.get()) {
                            if (!ke(t, o))
                                throw new Error(`Editor mode '${o}' is invalid`);
                            e.initialized ? bO(e, n, t, o) : e.on("init", (()=>bO(e, n, t, o)))
                        }
                    }
                    )(e, n.get(), t, o),
                    get: ()=>t.get(),
                    register: (e,t)=>{
                        n.set(((e,t,n)=>{
                            if (H(hO, t))
                                throw new Error(`Cannot override default mode ${t}`);
                            return {
                                ...e,
                                [t]: {
                                    ...n,
                                    deactivate: ()=>{
                                        try {
                                            n.deactivate()
                                        } catch (e) {
                                            console.error(`problem while deactivating editor mode ${t}:`, e)
                                        }
                                    }
                                }
                            }
                        }
                        )(n.get(), e, t))
                    }
                }
            }
            )(o),
            n.dispatch("SetupEditor", {
                editor: this
            });
            const g = Rd(o);
            w(g) && g.call(o, o)
        }
        render() {
            (e=>{
                const t = e.id;
                Pa.setCode(Hl(e));
                const n = ()=>{
                    CA.unbind(window, "ready", n),
                    e.render()
                }
                ;
                if (!ba.Event.domLoaded)
                    return void CA.bind(window, "ready", n);
                if (!e.getElement())
                    return;
                const o = bn(e.getElement())
                  , r = nn(o);
                e.on("remove", (()=>{
                    W(o.dom.attributes, (e=>tn(o, e.name))),
                    Qt(o, r)
                }
                )),
                e.ui.styleSheetLoader = ((e,t)=>Ts.forElement(e, {
                    contentCssCors: Cd(t),
                    referrerPolicy: jl(t)
                }))(o, e),
                md(e) ? e.inline = !0 : (e.orgVisibility = e.getElement().style.visibility,
                e.getElement().style.visibility = "hidden");
                const s = e.getElement().form || CA.getParent(t, "form");
                s && (e.formElement = s,
                fd(e) && !Yo(e.getElement()) && (CA.insertAfter(CA.create("input", {
                    type: "hidden",
                    name: t
                }), t),
                e.hasHiddenInput = !0),
                e.formEventDelegate = t=>{
                    e.dispatch(t.type, t)
                }
                ,
                CA.bind(s, "submit reset", e.formEventDelegate),
                e.on("reset", (()=>{
                    e.resetContent()
                }
                )),
                !gd(e) || s.submit.nodeType || s.submit.length || s._mceOldSubmit || (s._mceOldSubmit = s.submit,
                s.submit = ()=>(e.editorManager.triggerSave(),
                e.setDirty(!1),
                s._mceOldSubmit(s)))),
                e.windowManager = rw(e),
                e.notificationManager = tw(e),
                (e=>"xml" === e.options.get("encoding"))(e) && e.on("GetContent", (e=>{
                    e.save && (e.content = CA.encode(e.content))
                }
                )),
                pd(e) && e.on("submit", (()=>{
                    e.initialized && e.save()
                }
                )),
                hd(e) && (e._beforeUnload = ()=>{
                    !e.initialized || e.destroyed || e.isHidden() || e.save({
                        format: "raw",
                        no_events: !0,
                        set_dirty: !1
                    })
                }
                ,
                e.editorManager.on("BeforeUnload", e._beforeUnload)),
                e.editorManager.add(e),
                kA(e, e.suffix)
            }
            )(this)
        }
        focus(e) {
            this.execCommand("mceFocus", !1, e)
        }
        hasFocus() {
            return fg(this)
        }
        translate(e) {
            return Pa.translate(e)
        }
        getParam(e, t, n) {
            const o = this.options;
            return o.isRegistered(e) || (C(n) ? o.register(e, {
                processor: n,
                default: t
            }) : o.register(e, {
                processor: M,
                default: t
            })),
            o.isSet(e) || v(t) ? o.get(e) : t
        }
        hasPlugin(e, t) {
            return !(!H(wd(this), e) || t && void 0 === nw.get(e))
        }
        nodeChanged(e) {
            this._nodeChangeDispatcher.nodeChanged(e)
        }
        addCommand(e, t, n) {
            this.editorCommands.addCommand(e, t, n)
        }
        addQueryStateHandler(e, t, n) {
            this.editorCommands.addQueryStateHandler(e, t, n)
        }
        addQueryValueHandler(e, t, n) {
            this.editorCommands.addQueryValueHandler(e, t, n)
        }
        addShortcut(e, t, n, o) {
            this.shortcuts.add(e, t, n, o)
        }
        execCommand(e, t, n, o) {
            return this.editorCommands.execCommand(e, t, n, o)
        }
        queryCommandState(e) {
            return this.editorCommands.queryCommandState(e)
        }
        queryCommandValue(e) {
            return this.editorCommands.queryCommandValue(e)
        }
        queryCommandSupported(e) {
            return this.editorCommands.queryCommandSupported(e)
        }
        show() {
            const e = this;
            e.hidden && (e.hidden = !1,
            e.inline ? e.getBody().contentEditable = "true" : (SO.show(e.getContainer()),
            SO.hide(e.id)),
            e.load(),
            e.dispatch("show"))
        }
        hide() {
            const e = this;
            e.hidden || (e.save(),
            e.inline ? (e.getBody().contentEditable = "false",
            e === e.editorManager.focusedEditor && (e.editorManager.focusedEditor = null)) : (SO.hide(e.getContainer()),
            SO.setStyle(e.id, "display", e.orgDisplay)),
            e.hidden = !0,
            e.dispatch("hide"))
        }
        isHidden() {
            return this.hidden
        }
        setProgressState(e, t) {
            this.dispatch("ProgressState", {
                state: e,
                time: t
            })
        }
        load(e={}) {
            const t = this
              , n = t.getElement();
            if (t.removed)
                return "";
            if (n) {
                const o = {
                    ...e,
                    load: !0
                }
                  , r = Yo(n) ? n.value : n.innerHTML
                  , s = t.setContent(r, o);
                return o.no_events || t.dispatch("LoadContent", {
                    ...o,
                    element: n
                }),
                s
            }
            return ""
        }
        save(e={}) {
            const t = this;
            let n = t.getElement();
            if (!n || !t.initialized || t.removed)
                return "";
            const o = {
                ...e,
                save: !0,
                element: n
            };
            let r = t.getContent(o);
            const s = {
                ...o,
                content: r
            };
            if (s.no_events || t.dispatch("SaveContent", s),
            "raw" === s.format && t.dispatch("RawSaveContent", s),
            r = s.content,
            Yo(n))
                n.value = r;
            else {
                !e.is_removing && t.inline || (n.innerHTML = r);
                const o = SO.getParent(t.id, "form");
                o && NO(o.elements, (e=>e.name !== t.id || (e.value = r,
                !1)))
            }
            return s.element = o.element = n = null,
            !1 !== s.set_dirty && t.setDirty(!1),
            r
        }
        setContent(e, t) {
            return DC(this, e, t)
        }
        getContent(e) {
            return ((e,t={})=>{
                const n = ((e,t)=>({
                    ...e,
                    format: t,
                    get: !0,
                    getInner: !0
                }))(t, t.format ? t.format : "html");
                return Vy(e, n).fold(R, (t=>{
                    const n = ((e,t)=>xC(e).editor.getContent(t))(e, t);
                    return qy(e, n, t)
                }
                ))
            }
            )(this, e)
        }
        insertContent(e, t) {
            t && (e = _O({
                content: e
            }, t)),
            this.execCommand("mceInsertContent", !1, e)
        }
        resetContent(e) {
            void 0 === e ? DC(this, this.startContent, {
                format: "raw"
            }) : DC(this, e),
            this.undoManager.reset(),
            this.setDirty(!1),
            this.nodeChanged()
        }
        isDirty() {
            return !this.isNotDirty
        }
        setDirty(e) {
            const t = !this.isNotDirty;
            this.isNotDirty = !e,
            e && e !== t && this.dispatch("dirty")
        }
        getContainer() {
            const e = this;
            return e.container || (e.container = e.editorContainer || SO.get(e.id + "_parent")),
            e.container
        }
        getContentAreaContainer() {
            return this.contentAreaContainer
        }
        getElement() {
            return this.targetElm || (this.targetElm = SO.get(this.id)),
            this.targetElm
        }
        getWin() {
            const e = this;
            if (!e.contentWindow) {
                const t = e.iframeElement;
                t && (e.contentWindow = t.contentWindow)
            }
            return e.contentWindow
        }
        getDoc() {
            const e = this;
            if (!e.contentDocument) {
                const t = e.getWin();
                t && (e.contentDocument = t.document)
            }
            return e.contentDocument
        }
        getBody() {
            var e, t;
            const n = this.getDoc();
            return null !== (t = null !== (e = this.bodyElement) && void 0 !== e ? e : null == n ? void 0 : n.body) && void 0 !== t ? t : null
        }
        convertURL(e, t, n) {
            const o = this
              , r = o.options.get
              , s = Od(o);
            return w(s) ? s.call(o, e, n, !0, t) : !r("convert_urls") || "link" === n || f(n) && "LINK" === n.nodeName || 0 === e.indexOf("file:") || 0 === e.length ? e : r("relative_urls") ? o.documentBaseURI.toRelative(e) : e = o.documentBaseURI.toAbsolute(e, r("remove_script_host"))
        }
        addVisual(e) {
            ((e,t)=>{
                ((e,t)=>{
                    kC(e).editor.addVisual(t)
                }
                )(e, t)
            }
            )(this, e)
        }
        remove() {
            (e=>{
                if (!e.removed) {
                    const {_selectionOverrides: t, editorUpload: n} = e
                      , o = e.getBody()
                      , r = e.getElement();
                    o && e.save({
                        is_removing: !0
                    }),
                    e.removed = !0,
                    e.unbindAllNativeEvents(),
                    e.hasHiddenInput && C(null == r ? void 0 : r.nextSibling) && qC.remove(r.nextSibling),
                    (e=>{
                        e.dispatch("remove")
                    }
                    )(e),
                    e.editorManager.remove(e),
                    !e.inline && o && (e=>{
                        qC.setStyle(e.id, "display", e.orgDisplay)
                    }
                    )(e),
                    (e=>{
                        e.dispatch("detach")
                    }
                    )(e),
                    qC.remove(e.getContainer()),
                    WC(t),
                    WC(n),
                    e.destroy()
                }
            }
            )(this)
        }
        destroy(e) {
            ((e,t)=>{
                const {selection: n, dom: o} = e;
                e.destroyed || (t || e.removed ? (t || (e.editorManager.off("beforeunload", e._beforeUnload),
                e.theme && e.theme.destroy && e.theme.destroy(),
                WC(n),
                WC(o)),
                (e=>{
                    const t = e.formElement;
                    t && (t._mceOldSubmit && (t.submit = t._mceOldSubmit,
                    delete t._mceOldSubmit),
                    qC.unbind(t, "submit reset", e.formEventDelegate))
                }
                )(e),
                (e=>{
                    const t = e;
                    t.contentAreaContainer = t.formElement = t.container = t.editorContainer = null,
                    t.bodyElement = t.contentDocument = t.contentWindow = null,
                    t.iframeElement = t.targetElm = null;
                    const n = e.selection;
                    if (n) {
                        const e = n.dom;
                        t.selection = n.win = n.dom = e.doc = null
                    }
                }
                )(e),
                e.destroyed = !0) : e.remove())
            }
            )(this, e)
        }
        uploadImages() {
            return this.editorUpload.uploadImages()
        }
        _scanForImages() {
            return this.editorUpload.scanForImages()
        }
    }
    const AO = Na.DOM
      , OO = Dt.each;
    let TO, BO = !1, DO = [];
    const PO = e=>{
        const t = e.type;
        OO(FO.get(), (n=>{
            switch (t) {
            case "scroll":
                n.dispatch("ScrollWindow", e);
                break;
            case "resize":
                n.dispatch("ResizeWindow", e)
            }
        }
        ))
    }
      , LO = e=>{
        if (e !== BO) {
            const t = Na.DOM;
            e ? (t.bind(window, "resize", PO),
            t.bind(window, "scroll", PO)) : (t.unbind(window, "resize", PO),
            t.unbind(window, "scroll", PO)),
            BO = e
        }
    }
      , MO = e=>{
        const t = DO;
        return DO = G(DO, (t=>e !== t)),
        FO.activeEditor === e && (FO.activeEditor = DO.length > 0 ? DO[0] : null),
        FO.focusedEditor === e && (FO.focusedEditor = null),
        t.length !== DO.length
    }
      , IO = "CSS1Compat" !== document.compatMode
      , FO = {
        ...sO,
        baseURI: null,
        baseURL: null,
        defaultOptions: {},
        documentBaseURL: null,
        suffix: null,
        majorVersion: "6",
        minorVersion: "4.1",
        releaseDate: "2023-03-29",
        i18n: Pa,
        activeEditor: null,
        focusedEditor: null,
        setup() {
            const e = this;
            let t = ""
              , n = ""
              , o = Ay.getDocumentBaseUrl(document.location);
            /^[^:]+:\/\/\/?[^\/]+\//.test(o) && (o = o.replace(/[\?#].*$/, "").replace(/[\/\\][^\/]+$/, ""),
            /[\/\\]$/.test(o) || (o += "/"));
            const r = window.tinymce || window.tinyMCEPreInit;
            if (r)
                t = r.base || r.baseURL,
                n = r.suffix;
            else {
                const e = document.getElementsByTagName("script");
                for (let o = 0; o < e.length; o++) {
                    const r = e[o].src || "";
                    if ("" === r)
                        continue;
                    const s = r.substring(r.lastIndexOf("/"));
                    if (/tinymce(\.full|\.jquery|)(\.min|\.dev|)\.js/.test(r)) {
                        -1 !== s.indexOf(".min") && (n = ".min"),
                        t = r.substring(0, r.lastIndexOf("/"));
                        break
                    }
                }
                if (!t && document.currentScript) {
                    const e = document.currentScript.src;
                    -1 !== e.indexOf(".min") && (n = ".min"),
                    t = e.substring(0, e.lastIndexOf("/"))
                }
            }
            var s;
            e.baseURL = new Ay(o).toAbsolute(t),
            e.documentBaseURL = o,
            e.baseURI = new Ay(e.baseURL),
            e.suffix = n,
            (s = e).on("AddEditor", O(dg, s)),
            s.on("RemoveEditor", O(cg, s))
        },
        overrideDefaults(e) {
            const t = e.base_url;
            t && this._setBaseUrl(t);
            const n = e.suffix;
            n && (this.suffix = n),
            this.defaultOptions = e;
            const o = e.plugin_base_urls;
            void 0 !== o && ge(o, ((e,t)=>{
                La.PluginManager.urls[t] = e
            }
            ))
        },
        init(e) {
            const t = this;
            let n;
            const o = Dt.makeMap("area base basefont br col frame hr img input isindex link meta param embed source wbr track colgroup option table tbody tfoot thead tr th td script noscript style textarea video audio iframe object menu", " ");
            let r = e=>{
                n = e
            }
            ;
            const s = ()=>{
                let n = 0;
                const a = [];
                let i;
                AO.unbind(window, "ready", s),
                (n=>{
                    const o = e.onpageload;
                    o && o.apply(t, [])
                }
                )(),
                i = ((e,t)=>{
                    const n = []
                      , o = w(t) ? e=>$(n, (n=>t(n, e))) : e=>H(n, e);
                    for (let t = 0, r = e.length; t < r; t++) {
                        const r = e[t];
                        o(r) || n.push(r)
                    }
                    return n
                }
                )((e=>At.browser.isIE() || At.browser.isEdge() ? (dw("TinyMCE does not support the browser you are using. For a list of supported browsers please see: https://www.tiny.cloud/docs/tinymce/6/support/#supportedwebbrowsers"),
                []) : IO ? (dw("Failed to initialize the editor as the document is not in standards mode. TinyMCE requires standards mode."),
                []) : m(e.selector) ? AO.select(e.selector) : C(e.target) ? [e.target] : [])(e)),
                Dt.each(i, (e=>{
                    var n;
                    (n = t.get(e.id)) && n.initialized && !(n.getContainer() || n.getBody()).parentNode && (MO(n),
                    n.unbindAllNativeEvents(),
                    n.destroy(!0),
                    n.removed = !0)
                }
                )),
                i = Dt.grep(i, (e=>!t.get(e.id))),
                0 === i.length ? r([]) : OO(i, (s=>{
                    ((e,t)=>e.inline && t.tagName.toLowerCase()in o)(e, s) ? dw("Could not initialize inline editor on invalid inline target element", s) : ((e,o,s)=>{
                        const l = new RO(e,o,t);
                        a.push(l),
                        l.on("init", (()=>{
                            ++n === i.length && r(a)
                        }
                        )),
                        l.targetElm = l.targetElm || s,
                        l.render()
                    }
                    )((e=>{
                        let t = e.id;
                        return t || (t = xe(e, "name").filter((e=>!AO.get(e))).getOrThunk(AO.uniqueId),
                        e.setAttribute("id", t)),
                        t
                    }
                    )(s), e, s)
                }
                ))
            }
            ;
            return AO.bind(window, "ready", s),
            new Promise((e=>{
                n ? e(n) : r = t=>{
                    e(t)
                }
            }
            ))
        },
        get(e) {
            return 0 === arguments.length ? DO.slice(0) : m(e) ? J(DO, (t=>t.id === e)).getOr(null) : x(e) && DO[e] ? DO[e] : null
        },
        add(e) {
            const t = this
              , n = t.get(e.id);
            return n === e || (null === n && DO.push(e),
            LO(!0),
            t.activeEditor = e,
            t.dispatch("AddEditor", {
                editor: e
            }),
            TO || (TO = e=>{
                const n = t.dispatch("BeforeUnload");
                if (n.returnValue)
                    return e.preventDefault(),
                    e.returnValue = n.returnValue,
                    n.returnValue
            }
            ,
            window.addEventListener("beforeunload", TO))),
            e
        },
        createEditor(e, t) {
            return this.add(new RO(e,t,this))
        },
        remove(e) {
            const t = this;
            let n;
            if (e) {
                if (!m(e))
                    return n = e,
                    h(t.get(n.id)) ? null : (MO(n) && t.dispatch("RemoveEditor", {
                        editor: n
                    }),
                    0 === DO.length && window.removeEventListener("beforeunload", TO),
                    n.remove(),
                    LO(DO.length > 0),
                    n);
                OO(AO.select(e), (e=>{
                    n = t.get(e.id),
                    n && t.remove(n)
                }
                ))
            } else
                for (let e = DO.length - 1; e >= 0; e--)
                    t.remove(DO[e])
        },
        execCommand(e, t, n) {
            var o;
            const r = this
              , s = f(n) ? null !== (o = n.id) && void 0 !== o ? o : n.index : n;
            switch (e) {
            case "mceAddEditor":
                if (!r.get(s)) {
                    const e = n.options;
                    new RO(s,e,r).render()
                }
                return !0;
            case "mceRemoveEditor":
                {
                    const e = r.get(s);
                    return e && e.remove(),
                    !0
                }
            case "mceToggleEditor":
                {
                    const e = r.get(s);
                    return e ? (e.isHidden() ? e.show() : e.hide(),
                    !0) : (r.execCommand("mceAddEditor", !1, n),
                    !0)
                }
            }
            return !!r.activeEditor && r.activeEditor.execCommand(e, t, n)
        },
        triggerSave: ()=>{
            OO(DO, (e=>{
                e.save()
            }
            ))
        }
        ,
        addI18n: (e,t)=>{
            Pa.add(e, t)
        }
        ,
        translate: e=>Pa.translate(e),
        setActive(e) {
            const t = this.activeEditor;
            this.activeEditor !== e && (t && t.dispatch("deactivate", {
                relatedTarget: e
            }),
            e.dispatch("activate", {
                relatedTarget: t
            })),
            this.activeEditor = e
        },
        _setBaseUrl(e) {
            this.baseURL = new Ay(this.documentBaseURL).toAbsolute(e.replace(/\/+$/, "")),
            this.baseURI = new Ay(this.baseURL)
        }
    };
    FO.setup();
    const UO = (()=>{
        const e = Ia();
        return {
            FakeClipboardItem: e=>({
                items: e,
                types: me(e),
                getType: t=>xe(e, t).getOrUndefined()
            }),
            write: t=>{
                e.set(t)
            }
            ,
            read: ()=>e.get().getOrUndefined(),
            clear: e.clear
        }
    }
    )()
      , zO = Math.min
      , jO = Math.max
      , HO = Math.round
      , $O = (e,t,n)=>{
        let o = t.x
          , r = t.y;
        const s = e.w
          , a = e.h
          , i = t.w
          , l = t.h
          , d = (n || "").split("");
        return "b" === d[0] && (r += l),
        "r" === d[1] && (o += i),
        "c" === d[0] && (r += HO(l / 2)),
        "c" === d[1] && (o += HO(i / 2)),
        "b" === d[3] && (r -= a),
        "r" === d[4] && (o -= s),
        "c" === d[3] && (r -= HO(a / 2)),
        "c" === d[4] && (o -= HO(s / 2)),
        VO(o, r, s, a)
    }
      , VO = (e,t,n,o)=>({
        x: e,
        y: t,
        w: n,
        h: o
    })
      , qO = {
        inflate: (e,t,n)=>VO(e.x - t, e.y - n, e.w + 2 * t, e.h + 2 * n),
        relativePosition: $O,
        findBestRelativePosition: (e,t,n,o)=>{
            for (let r = 0; r < o.length; r++) {
                const s = $O(e, t, o[r]);
                if (s.x >= n.x && s.x + s.w <= n.w + n.x && s.y >= n.y && s.y + s.h <= n.h + n.y)
                    return o[r]
            }
            return null
        }
        ,
        intersect: (e,t)=>{
            const n = jO(e.x, t.x)
              , o = jO(e.y, t.y)
              , r = zO(e.x + e.w, t.x + t.w)
              , s = zO(e.y + e.h, t.y + t.h);
            return r - n < 0 || s - o < 0 ? null : VO(n, o, r - n, s - o)
        }
        ,
        clamp: (e,t,n)=>{
            let o = e.x
              , r = e.y
              , s = e.x + e.w
              , a = e.y + e.h;
            const i = t.x + t.w
              , l = t.y + t.h
              , d = jO(0, t.x - o)
              , c = jO(0, t.y - r)
              , u = jO(0, s - i)
              , m = jO(0, a - l);
            return o += d,
            r += c,
            n && (s += d,
            a += c,
            o -= u,
            r -= m),
            s -= u,
            a -= m,
            VO(o, r, s - o, a - r)
        }
        ,
        create: VO,
        fromClientRect: e=>VO(e.left, e.top, e.width, e.height)
    }
      , WO = (()=>{
        const e = {}
          , t = {};
        return {
            load: (n,o)=>{
                const r = `Script at URL "${o}" failed to load`
                  , s = `Script at URL "${o}" did not call \`tinymce.Resource.add('${n}', data)\` within 1 second`;
                if (void 0 !== e[n])
                    return e[n];
                {
                    const a = new Promise(((e,a)=>{
                        const i = ((e,t,n=1e3)=>{
                            let o = !1
                              , r = null;
                            const s = e=>(...t)=>{
                                o || (o = !0,
                                null !== r && (clearTimeout(r),
                                r = null),
                                e.apply(null, t))
                            }
                              , a = s(e)
                              , i = s(t);
                            return {
                                start: (...e)=>{
                                    o || null !== r || (r = setTimeout((()=>i.apply(null, e)), n))
                                }
                                ,
                                resolve: a,
                                reject: i
                            }
                        }
                        )(e, a);
                        t[n] = i.resolve,
                        Aa.ScriptLoader.loadScript(o).then((()=>i.start(s)), (()=>i.reject(r)))
                    }
                    ));
                    return e[n] = a,
                    a
                }
            }
            ,
            add: (n,o)=>{
                void 0 !== t[n] && (t[n](o),
                delete t[n]),
                e[n] = Promise.resolve(o)
            }
            ,
            unload: t=>{
                delete e[t]
            }
        }
    }
    )();
    let KO;
    try {
        const e = "__storage_test__";
        KO = window.localStorage,
        KO.setItem(e, e),
        KO.removeItem(e)
    } catch (e) {
        KO = (()=>{
            let e = {}
              , t = [];
            const n = {
                getItem: t=>e[t] || null,
                setItem: (n,o)=>{
                    t.push(n),
                    e[n] = String(o)
                }
                ,
                key: e=>t[e],
                removeItem: n=>{
                    t = t.filter((e=>e === n)),
                    delete e[n]
                }
                ,
                clear: ()=>{
                    t = [],
                    e = {}
                }
                ,
                length: 0
            };
            return Object.defineProperty(n, "length", {
                get: ()=>t.length,
                configurable: !1,
                enumerable: !1
            }),
            n
        }
        )()
    }
    const GO = {
        geom: {
            Rect: qO
        },
        util: {
            Delay: og,
            Tools: Dt,
            VK: qm,
            URI: Ay,
            EventDispatcher: oO,
            Observable: sO,
            I18n: Pa,
            LocalStorage: KO,
            ImageUploader: e=>{
                const t = mw()
                  , n = hw(e, t);
                return {
                    upload: (t,o=!0)=>n.upload(t, o ? pw(e) : void 0)
                }
            }
        },
        dom: {
            EventUtils: ba,
            TreeWalker: Fo,
            TextSeeker: oi,
            DOMUtils: Na,
            ScriptLoader: Aa,
            RangeUtils: Ef,
            Serializer: BC,
            StyleSheetLoader: Os,
            ControlSelection: Xm,
            BookmarkManager: Im,
            Selection: AC,
            Event: ba.Event
        },
        html: {
            Styles: la,
            Entities: Gs,
            Node: Ag,
            Schema: ia,
            DomParser: Hy,
            Writer: Fg,
            Serializer: Ug
        },
        Env: At,
        AddOnManager: La,
        Annotator: Mm,
        Formatter: Rw,
        UndoManager: Ow,
        EditorCommands: GA,
        WindowManager: rw,
        NotificationManager: tw,
        EditorObservable: uO,
        Shortcuts: kO,
        Editor: RO,
        FocusManager: ng,
        EditorManager: FO,
        DOM: Na.DOM,
        ScriptLoader: Aa.ScriptLoader,
        PluginManager: nw,
        ThemeManager: ow,
        ModelManager: GC,
        IconManager: KC,
        Resource: WO,
        FakeClipboard: UO,
        trim: Dt.trim,
        isArray: Dt.isArray,
        is: Dt.is,
        toArray: Dt.toArray,
        makeMap: Dt.makeMap,
        each: Dt.each,
        map: Dt.map,
        grep: Dt.grep,
        inArray: Dt.inArray,
        extend: Dt.extend,
        walk: Dt.walk,
        resolve: Dt.resolve,
        explode: Dt.explode,
        _addCacheSuffix: Dt._addCacheSuffix
    }
      , YO = Dt.extend(FO, GO);
    (e=>{
        window.tinymce = e,
        window.tinyMCE = e
    }
    )(YO),
    (e=>{
        if ("object" == typeof module)
            try {
                module.exports = e
            } catch (e) {}
    }
    )(YO)
}();
tinymce.overrideDefaults({
    promotion: false
});

/* Ephox Fluffy plugin
 *
 * Copyright 2010-2016 Ephox Corporation.  All rights reserved.
 *
 * Version: 2.7.0-15
 */

!function() {
    "use strict";
    function n(r) {
        return function(n) {
            return t = typeof (n = n),
            (null === n ? "null" : "object" == t && (Array.prototype.isPrototypeOf(n) || n.constructor && "Array" === n.constructor.name) ? "array" : "object" == t && (String.prototype.isPrototypeOf(n) || n.constructor && "String" === n.constructor.name) ? "string" : t) === r;
            var t
        }
    }
    function t(n, t) {
        return {
            isRequired: n,
            applyPatch: t
        }
    }
    function u(e, i) {
        return function() {
            for (var n = [], t = 0; t < arguments.length; t++)
                n[t] = arguments[t];
            var r = i.apply(this, n)
              , r = d(r) ? n : r;
            return e.apply(this, r)
        }
    }
    function r() {
        return l
    }
    function e(n, t) {
        for (var r = function(n, t) {
            for (var r = n.length, e = new Array(r), i = 0; i < r; i++) {
                var o = n[i];
                e[i] = t(o, i)
            }
            return e
        }(n, t), e = [], i = 0, o = r.length; i < o; ++i) {
            if (!p(r[i]))
                throw new Error("Arr.flatten item " + i + " was not an array, input: " + r);
            y.apply(e, r[i])
        }
        return e
    }
    function a(r) {
        return function(n, t) {
            r[t] = n
        }
    }
    function i(c) {
        return function() {
            for (var n = [], t = 0; t < arguments.length; t++)
                n[t] = arguments[t];
            if (0 === n.length)
                throw new Error("Can't merge zero objects");
            for (var r, e, i = {}, o = 0; o < n.length; o++) {
                var u, a = n[o];
                for (u in a)
                    r = a,
                    e = u,
                    w.call(r, e) && (i[u] = c(i[u], a[u]))
            }
            return i
        }
    }
    function o(n) {
        var t;
        return null != (t = n.defaultOptions) ? t : n.defaultSettings
    }
    function c(n, t) {
        var n = j(n, t)
          , r = A(t.plugins)
          , e = n.custom_plugin_urls || {}
          , e = E(e, function(n, t) {
            return h(r, t)
        })
          , n = n.external_plugins || {}
          , i = {}
          , e = (b(e.t, function(n, t) {
            i[t] = n
        }),
        x(i, n))
          , n = 0 === m(e).length ? {} : {
            external_plugins: e
        };
        return x(t, n)
    }
    var f, l, s = n("object"), p = n("array"), d = (f = void 0,
    function(n) {
        return f === n
    }
    ), g = "undefined" != typeof window ? window : Function("return this;")(), v = (l = !0,
    Array.prototype.indexOf), y = Array.prototype.push, h = function(n, t) {
        return -1 < v.call(n, t)
    }, m = Object.keys, w = Object.hasOwnProperty, b = function(n, t) {
        for (var r = m(n), e = 0, i = r.length; e < i; e++) {
            var o = r[e];
            t(n[o], o)
        }
    }, E = function(n, t) {
        var r, e, i, o = {}, u = {};
        return r = t,
        e = a(o),
        i = a(u),
        b(n, function(n, t) {
            (r(n, t) ? e : i)(n, t)
        }),
        {
            t: o,
            f: u
        }
    }, j = i(function(n, t) {
        return s(n) && s(t) ? j(n, t) : t
    }), x = i(function(n, t) {
        return t
    }), A = function(n) {
        if (d(n) || "" === n)
            return [];
        n = p(n) ? e(n, function(n) {
            return n.split(/[\s+,]/)
        }) : n.split(/[\s+,]/);
        return e(n, function(n) {
            return 0 < n.length ? [n.trim()] : []
        })
    }, _ = t(r, function(r) {
        var n = r.EditorManager;
        n.init = u(n.init, function(n) {
            return [c(o(r), n)]
        }),
        n.createEditor = u(n.createEditor, function(n, t) {
            return [n, c(o(r), t)]
        })
    });
    function M(n, t, r) {
        if (r || 2 === arguments.length)
            for (var e, i = 0, o = t.length; i < o; i++)
                !e && i in t || ((e = e || Array.prototype.slice.call(t, 0, i))[i] = t[i]);
        return n.concat(e || Array.prototype.slice.call(t))
    }
    function O(n) {
        return parseInt(n, 10)
    }
    function R(n, t) {
        return 0 == (n -= t) ? 0 : 0 < n ? 1 : -1
    }
    function S(n, t, r) {
        return {
            major: n,
            minor: t,
            patch: r
        }
    }
    function I(n, t) {
        return !!n && -1 === q(N(n), L(t))
    }
    function P(e, i) {
        return function(n) {
            var t = A(n.plugins)
              , r = V(i)
              , r = 0 < r.length ? t.concat(r) : t;
            return [e.util.Tools.extend({}, n, {
                plugins: r
            })]
        }
    }
    function C() {
        return (new Date).getTime()
    }
    function D(r) {
        return function() {
            n = "position";
            var n, t = (((t = r).currentStyle || window.getComputedStyle(t, null))[n] || "").toLowerCase();
            return "absolute" === t || "fixed" === t
        }
    }
    function U(n) {
        n.parentNode.removeChild(n)
    }
    function T(n) {
        var t = n
          , r = [$, G, k, _];
        if (t)
            for (var e = 0; e < r.length; e++)
                r[e].isRequired(t) && r[e].applyPatch(t)
    }
    var L = function(n) {
        n = /([0-9]+)\.([0-9]+)\.([0-9]+)(?:(\-.+)?)/.exec(n);
        return n ? S(O(n[1]), O(n[2]), O(n[3])) : S(0, 0, 0)
    }
      , q = function(n, t) {
        var r = R(n.major, t.major);
        if (0 !== r)
            return r;
        r = R(n.minor, t.minor);
        if (0 !== r)
            return r;
        r = R(n.patch, t.patch);
        return 0 !== r ? r : 0
    }
      , N = function(n) {
        return L([n.majorVersion, n.minorVersion].join(".").split(".").slice(0, 3).join("."))
    }
      , V = function(n) {
        n = o(n).forced_plugins;
        return n || []
    }
      , k = t(function(n) {
        return I(n, "4.7.0")
    }, function(n) {
        var r = n
          , e = r.EditorManager;
        e.init = u(e.init, P(r, e)),
        e.createEditor = u(e.createEditor, function(n, t) {
            return M([n], P(r, e)(t), !0)
        })
    })
      , z = function(n, t, r, e, i) {
        var o = C()
          , u = setInterval(function() {
            n() && (clearInterval(u),
            t()),
            C() - o > i && (clearInterval(u),
            r())
        }, e)
    }
      , B = function(n, t) {
        (r = document.createElement("div")).style.display = "none",
        r.className = "mce-floatpanel";
        var r, e = r;
        document.body.appendChild(e),
        z(D(e), function() {
            U(e),
            n()
        }, function() {
            U(e),
            t()
        }, 10, 5e3)
    }
      , F = function(n, t) {
        n.notificationManager ? n.notificationManager.open({
            text: t,
            type: "warning",
            timeout: 0,
            icon: ""
        }) : n.windowManager.alert(t)
    }
      , $ = t(function(n) {
        return "function" != typeof n.overrideDefaults
    }, function(n) {
        var t, e, r = n, i = r.EditorManager, o = (r.EditorManager.on("AddEditor", function(n) {
            var t = n.editor
              , r = t.settings.service_message;
            r && B(function() {
                F(t, r)
            }, function() {
                window.alert(r)
            })
        }),
        t = r,
        function(n) {
            return [t.util.Tools.extend({}, this.defaultSettings, n)]
        }
        );
        n.overrideDefaults = (e = r,
        function(n) {
            var t = e.util.URI
              , r = n.base_url
              , r = (r && (this.baseURL = new t(this.documentBaseURL).toAbsolute(r.replace(/\/+$/, "")),
            this.baseURI = new t(this.baseURL)),
            n.suffix);
            r && (this.suffix = r),
            this.defaultSettings = n
        }
        ),
        i.init = u(i.init, o),
        i.createEditor = u(i.createEditor, function(n, t) {
            return M([n], o.call(i, t), !0)
        })
    })
      , G = t(function(n) {
        return I(n, "4.5.0")
    }, function(n) {
        var e;
        n.overrideDefaults = u(n.overrideDefaults, (e = n,
        function(n) {
            var t, r = n.plugin_base_urls;
            for (t in r)
                e.PluginManager.urls[t] = r[t]
        }
        ))
    });
    T(g.tinymce)
}();

(function(cloudSettings) {
    tinymce.overrideDefaults(cloudSettings);
}
)({
    "rtc_tenant_id": "m3g5dx3oqe9t04rx2imglf5ohh8bdzgbcnybnwg3r50eag1s",
    "editimage_api_key": "m3g5dx3oqe9t04rx2imglf5ohh8bdzgbcnybnwg3r50eag1s",
    "imagetools_proxy": "https://imageproxy.tiny.cloud/2/image",
    "autocorrect_service_url": "https://spelling.tiny.cloud",
    "suffix": ".min",
    "linkchecker_service_url": "https://hyperlinking.tiny.cloud",
    "spellchecker_rpc_url": "https://spelling.tiny.cloud",
    "spellchecker_api_key": "m3g5dx3oqe9t04rx2imglf5ohh8bdzgbcnybnwg3r50eag1s",
    "tinydrive_service_url": "https://catalog.tiny.cloud",
    "api_key": "m3g5dx3oqe9t04rx2imglf5ohh8bdzgbcnybnwg3r50eag1s",
    "imagetools_api_key": "m3g5dx3oqe9t04rx2imglf5ohh8bdzgbcnybnwg3r50eag1s",
    "tinydrive_api_key": "m3g5dx3oqe9t04rx2imglf5ohh8bdzgbcnybnwg3r50eag1s",
    "export_image_proxy_service_url": "https://imageproxy.tiny.cloud",
    "forced_plugins": ["chiffer"],
    "referrer_policy": "origin",
    "content_css_cors": true,
    "custom_plugin_urls": {},
    "chiffer_snowplow_service_url": "https://sp.tinymce.com/i",
    "mediaembed_api_key": "m3g5dx3oqe9t04rx2imglf5ohh8bdzgbcnybnwg3r50eag1s",
    "promotion": false,
    "rtc_service_url": "https://rtc.tiny.cloud",
    "editimage_proxy_service_url": "https://imageproxy.tiny.cloud",
    "linkchecker_api_key": "m3g5dx3oqe9t04rx2imglf5ohh8bdzgbcnybnwg3r50eag1s",
    "mediaembed_service_url": "https://hyperlinking.tiny.cloud"
});
tinymce.baseURL = "https://cdn.tiny.cloud/1/m3g5dx3oqe9t04rx2imglf5ohh8bdzgbcnybnwg3r50eag1s/tinymce/6.4.1-16"

/* Ephox chiffer plugin
*
* Copyright 2010-2019 Tiny Technologies Inc. All rights reserved.
*
* Version: 2.1.0-21
*/

!function() {
    "use strict";
    function e(t) {
        return !p(t)
    }
    function s() {}
    function u(t, n, o, r) {
        for (var e = t, c = function(t, e) {
            (n(t, e) ? o : r)(t, e)
        }, a = g(e), i = 0, s = a.length; i < s; i++) {
            var u = a[i];
            c(e[u], u)
        }
    }
    function l(t, e) {
        return -1 < P.call(t, e)
    }
    function d(t) {
        return "plugin_".concat(t, "_loaded")
    }
    function f() {
        return (new Date).getTime()
    }
    n = "string";
    var n, o, r, t, c, a, i = function(t) {
        return e = typeof (t = t),
        (null === t ? "null" : "object" == e && (Array.prototype.isPrototypeOf(t) || t.constructor && "Array" === t.constructor.name) ? "array" : "object" == e && (String.prototype.isPrototypeOf(t) || t.constructor && "String" === t.constructor.name) ? "string" : e) === n;
        var e
    }, m = (o = void 0,
    function(t) {
        return o === t
    }
    ), p = function(t) {
        return null == t
    }, g = Object.keys, _ = Object.hasOwnProperty, y = function(t, e) {
        return _.call(t, e)
    }, v = {
        mceInsertToc: "toc_insert",
        mceUpdateToc: "toc_update"
    }, S = {
        mceEditImage: "imagetools_open_dialog",
        mceImageRotateLeft: "imagetools_rotate",
        mceImageRotateRight: "imagetools_rotate",
        mceImageFlipVertical: "imagetools_flip",
        mceImageFlipHorizontal: "imagetools_flip"
    }, h = {
        InsertUnorderedList: !0,
        InsertOrderedList: !0
    }, I = {
        mceInsertTemplate: "template_insert",
        mceInsertDate: "insertdatetime_insert",
        mceInsertTime: "insertdatetime_insert",
        mcePreview: "preview_open_dialog",
        mceAnchor: "anchor_open_dialog"
    }, w = function(t) {
        if (e(t.value) && y(t.value, "list-style-type"))
            return t = t.value["list-style-type"],
            "advlist_".concat("" === t ? "default" : t)
    }, P = Array.prototype.indexOf, b = function(t, e) {
        for (var n = 0, o = t.length; n < o; n++)
            e(t[n], n)
    }, k = ["a11ychecker", "advcode", "advtable", "autocorrect", "casechange", "checklist", "editimage", "export", "footnotes", "formatpainter", "inlinecss", "linkchecker", "mediaembed", "mentions", "mergetags", "pageembed", "permanentpen", "powerpaste", "rtc", "tableofcontents", "tinycomments", "tinydrive", "tinymcespellchecker", "typography"], O = function(t) {
        u(t, function(t, e) {
            t = !!t.isStub;
            return !!e && !t && l(k, e)
        }, (n = t = {},
        function(t, e) {
            n[e] = t
        }
        ), s);
        for (var n, e = g(t), o = d, r = e.length, c = new Array(r), a = 0; a < r; a++) {
            var i = e[a];
            c[a] = o(i, a)
        }
        return c
    }, R = function(s, u) {
        return {
            send: function(t, e, n) {
                function o(t) {
                    return function() {
                        i.onload = null,
                        i.onerror = null,
                        n(t)
                    }
                }
                var r = u
                  , c = f()
                  , a = "undefined" != typeof Intl ? encodeURIComponent(Intl.DateTimeFormat().resolvedOptions().timeZone) : "N%2FA"
                  , r = "?aid=".concat(r, "&tna=").concat("tinymce_cloud", "&p=").concat("web", "&dtm=").concat(e, "&stm=").concat(c, "&tz=").concat(a, "&e=").concat("se", "&se_ca=").concat(t)
                  , i = document.createElement("img");
                i.src = s.chiffer_snowplow_service_url + r;
                i.onload = o(!0),
                i.onerror = o(!1)
            }
        }
    }, T = function(e) {
        return {
            sendStat: function(t) {
                e.send(t, f(), s)
            }
        }
    };
    t = null != (t = tinymce.defaultOptions) ? t : tinymce.defaultSettings,
    c = {
        load: s
    },
    a = function(t) {
        t = t.api_key;
        return i(t) ? t : void 0
    }(t),
    c = void 0 === a ? c : ((r = function(t, e) {
        t = R(t, e);
        return T(t)
    }(t, a)).sendStat("script_load"),
    {
        load: function(n) {
            n.once("init", function() {
                return r.sendStat("init")
            }),
            n.once("focus", function() {
                return r.sendStat("focus")
            }),
            n.on("ExportPdf", function() {
                return r.sendStat("export_pdf")
            }),
            n.on("InlineCSS", function() {
                return r.sendStat("inlinecss_get_content")
            }),
            n.on("PastePreProcess PowerPasteTempStats", function(t) {
                t = t.source;
                e(t) && r.sendStat("powerpaste_".concat(t))
            }),
            n.on("VisualChars", function(t) {
                !0 === t.state && r.sendStat("visualchars_true")
            }),
            n.on("RtcSessionConnected", function(t) {
                var e = t.time;
                switch (e) {
                case 0:
                    r.sendStat("rtc_started");
                    break;
                case 5:
                case 10:
                case 20:
                    r.sendStat("rtc_connected_".concat(e, "min"))
                }
            }),
            n.on("RtcSessionError", function() {
                return r.sendStat("rtc_error")
            }),
            n.on("RtcSessionDirty", function() {
                return r.sendStat("rtc_edited")
            }),
            n.on("SpellcheckerLanguageChanged", function(t) {
                t = t.language;
                r.sendStat("spellcheckerpro_language_changed_".concat(t))
            }),
            n.on("ExecCommand", function(t) {
                e = (t = t).command;
                var e, t = y(h, e) ? w(t) : y(S, e) ? S[e] : y(v, e) ? v[e] : y(I, e) ? I[e] : void 0;
                m(t) || r.sendStat(t)
            }),
            n.on("PreInit", function() {
                var t = r
                  , e = n.plugins;
                e = O(e),
                b(e, t.sendStat)
            })
        }
    }),
    tinymce.PluginManager.add("chiffer", c.load)
}();
