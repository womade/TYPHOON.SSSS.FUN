!function(S) {
    S.fn.marquee = function(k) {
        return this.each(function() {
            var i, n, o, s, a, r = S.extend({}, S.fn.marquee.defaults, k), h = S(this), l = 3, t = "animation-play-state", u = !1, c = function(t, e, i) {
                for (var n = ["webkit", "moz", "MS", "o", ""], o = 0; o < n.length; o++)
                    n[o] || (e = e.toLowerCase()),
                    t.addEventListener(n[o] + e, i, !1)
            }, d = function(t) {
                var e, i = [];
                for (e in t)
                    t.hasOwnProperty(e) && i.push(e + ":" + t[e]);
                return i.push(),
                "{" + i.join(",") + "}"
            }, p = function() {
                h.timer = setTimeout(z, r.delayBeforeStart)
            }, e = {
                pause: function() {
                    u && r.allowCss3Support ? i.css(t, "paused") : S.fn.pause && i.pause(),
                    h.data("runningStatus", "paused"),
                    h.trigger("paused")
                },
                resume: function() {
                    u && r.allowCss3Support ? i.css(t, "running") : S.fn.resume && i.resume(),
                    h.data("runningStatus", "resumed"),
                    h.trigger("resumed")
                },
                toggle: function() {
                    e["resumed" == h.data("runningStatus") ? "pause" : "resume"]()
                },
                destroy: function() {
                    clearTimeout(h.timer),
                    h.find("*").andSelf().unbind(),
                    h.html(h.find(".js-marquee:first").html())
                }
            };
            if ("string" == typeof k)
                S.isFunction(e[k]) && (i = i || h.find(".js-marquee-wrapper"),
                !0 === h.data("css3AnimationIsSupported") && (u = !0),
                e[k]());
            else {
                S.each(r, function(t, e) {
                    if (void 0 !== (_ = h.attr("data-" + t))) {
                        switch (_) {
                        case "true":
                            _ = !0;
                            break;
                        case "false":
                            _ = !1
                        }
                        r[t] = _
                    }
                }),
                r.duration = r.speed || r.duration,
                s = "up" == r.direction || "down" == r.direction,
                r.gap = r.duplicated ? r.gap : 0,
                h.wrapInner('<div class="js-marquee"></div>');
                var _, m, f, g = h.find(".js-marquee").css({
                    "margin-right": r.gap,
                    float: "left"
                });
                if (r.duplicated && g.clone(!0).appendTo(h),
                h.wrapInner('<div style="width:100000px" class="js-marquee-wrapper"></div>'),
                i = h.find(".js-marquee-wrapper"),
                s ? (m = h.height(),
                i.removeAttr("style"),
                h.height(m),
                h.find(".js-marquee").css({
                    float: "none",
                    "margin-bottom": r.gap,
                    "margin-right": 0
                }),
                r.duplicated && h.find(".js-marquee:last").css({
                    "margin-bottom": 0
                }),
                f = h.find(".js-marquee:first").height() + r.gap,
                r.duration = (parseInt(f, 10) + parseInt(m, 10)) / parseInt(m, 10) * r.duration) : (a = h.find(".js-marquee:first").width() + r.gap,
                n = h.width(),
                r.duration = (parseInt(a, 10) + parseInt(n, 10)) / parseInt(n, 10) * r.duration),
                r.duplicated && (r.duration = r.duration / 2),
                r.allowCss3Support) {
                    var y = document.body || document.createElement("div")
                      , v = "marqueeAnimation-" + Math.floor(1e7 * Math.random())
                      , L = "Webkit Moz O ms Khtml".split(" ")
                      , b = "animation"
                      , w = ""
                      , x = "";
                    if (y.style.animation && (x = "@keyframes " + v + " ",
                    u = !0),
                    !1 === u)
                        for (var P = 0; P < L.length; P++)
                            if (void 0 !== y.style[L[P] + "AnimationName"]) {
                                var T = "-" + L[P].toLowerCase() + "-"
                                  , b = T + b
                                  , t = T + t
                                  , x = "@" + T + "keyframes " + v + " "
                                  , u = !0;
                                break
                            }
                    u && (w = v + " " + r.duration / 1e3 + "s " + r.delayBeforeStart / 1e3 + "s infinite " + r.css3easing,
                    h.data("css3AnimationIsSupported", !0))
                }
                var M = function() {
                    i.css("margin-top", "up" == r.direction ? m + "px" : "-" + f + "px")
                }
                  , C = function() {
                    i.css("margin-left", "left" == r.direction ? n + "px" : "-" + a + "px")
                }
                  , z = (r.duplicated ? (s ? i.css("margin-top", "up" == r.direction ? m : "-" + (2 * f - r.gap) + "px") : i.css("margin-left", "left" == r.direction ? n + "px" : "-" + (2 * a - r.gap) + "px"),
                l = 1) : (s ? M : C)(),
                function() {
                    var t, e;
                    r.duplicated && (1 === l ? (r._originalDuration = r.duration,
                    r.duration = s ? "up" == r.direction ? r.duration + m / (f / r.duration) : 2 * r.duration : "left" == r.direction ? r.duration + n / (a / r.duration) : 2 * r.duration,
                    w = w && v + " " + r.duration / 1e3 + "s " + r.delayBeforeStart / 1e3 + "s " + r.css3easing,
                    l++) : 2 === l && (r.duration = r._originalDuration,
                    w && (v += "0",
                    x = S.trim(x) + "0 ",
                    w = v + " " + r.duration / 1e3 + "s 0s infinite " + r.css3easing),
                    l++)),
                    o = s ? r.duplicated ? (2 < l && i.css("margin-top", "up" == r.direction ? 0 : "-" + f + "px"),
                    {
                        "margin-top": "up" == r.direction ? "-" + f + "px" : 0
                    }) : (M(),
                    {
                        "margin-top": "up" == r.direction ? "-" + i.height() + "px" : m + "px"
                    }) : r.duplicated ? (2 < l && i.css("margin-left", "left" == r.direction ? 0 : "-" + a + "px"),
                    {
                        "margin-left": "left" == r.direction ? "-" + a + "px" : 0
                    }) : (C(),
                    {
                        "margin-left": "left" == r.direction ? "-" + a + "px" : n + "px"
                    }),
                    h.trigger("beforeStarting"),
                    u ? (i.css(b, w),
                    t = x + " { 100%  " + d(o) + "}",
                    0 !== (e = S("style")).length ? e.filter(":last").append(t) : S("head").append("<style>" + t + "</style>"),
                    c(i[0], "AnimationIteration", function() {
                        h.trigger("finished")
                    }),
                    c(i[0], "AnimationEnd", function() {
                        z(),
                        h.trigger("finished")
                    })) : i.animate(o, r.duration, r.easing, function() {
                        h.trigger("finished"),
                        (r.pauseOnCycle ? p : z)()
                    }),
                    h.data("runningStatus", "resumed")
                }
                );
                h.bind("pause", e.pause),
                h.bind("resume", e.resume),
                r.pauseOnHover && h.bind("mouseenter mouseleave", e.toggle),
                (u && r.allowCss3Support ? z : p)()
            }
        })
    }
    ,
    S.fn.marquee.defaults = {
        allowCss3Support: !0,
        css3easing: "linear",
        easing: "linear",
        delayBeforeStart: 1e3,
        direction: "left",
        duplicated: !1,
        duration: 5e3,
        gap: 20,
        pauseOnCycle: !1,
        pauseOnHover: !1
    }
}(jQuery);
var Hashtable = function(c) {
    var h = "function"
      , i = "string";
    if ("undefined" == typeof encodeURIComponent || Array.prototype.splice === c || Object.prototype.hasOwnProperty === c)
        return null;
    function o(t) {
        return typeof t == i ? t : "" + t
    }
    function d(t) {
        var e;
        return typeof t == i ? t : typeof t.hashCode == h ? typeof (e = t.hashCode()) == i ? e : d(e) : o(t)
    }
    function e(t, e) {
        return t.equals(e)
    }
    function n(t, e) {
        return typeof e.equals == h ? e.equals(t) : t === e
    }
    function t(e) {
        return function(t) {
            if (null === t)
                throw new Error("null is not a valid " + e);
            if (t === c)
                throw new Error(e + " must not be undefined")
        }
    }
    var p = t("key")
      , _ = t("value");
    function m(t, e, i, n) {
        this[0] = t,
        this.entries = [],
        this.addEntry(e, i),
        null !== n && (this.getEqualityFunction = function() {
            return n
        }
        )
    }
    function s(o) {
        return function(t) {
            for (var e, i = this.entries.length, n = this.getEqualityFunction(t); i--; )
                if (n(t, (e = this.entries[i])[0]))
                    switch (o) {
                    case 0:
                        return !0;
                    case 1:
                        return e;
                    case 2:
                        return [i, e[1]]
                    }
            return !1
        }
    }
    function a(s) {
        return function(t) {
            for (var e = t.length, i = 0, n = this.entries, o = n.length; i < o; ++i)
                t[e + i] = n[i][s]
        }
    }
    function f(t, e) {
        t = t[e];
        return t && t instanceof m ? t : null
    }
    function r() {
        var a = []
          , r = {}
          , h = {
            replaceDuplicateKey: !0,
            hashCode: d,
            equals: null
        }
          , t = arguments[0]
          , e = arguments[1];
        if (e !== c)
            h.hashCode = t,
            h.equals = e;
        else if (t !== c) {
            var i, n = h, o = t;
            for (i in o)
                o.hasOwnProperty(i) && (n[i] = o[i])
        }
        function s(i) {
            return function() {
                for (var t = [], e = a.length; e--; )
                    a[e][i](t);
                return t
            }
        }
        var l = h.hashCode
          , u = h.equals;
        this.properties = h,
        this.put = function(t, e) {
            p(t),
            _(e);
            var i, n = l(t), o = null, s = f(r, n);
            return s ? (i = s.getEntryForKey(t)) ? (h.replaceDuplicateKey && (i[0] = t),
            o = i[1],
            i[1] = e) : s.addEntry(t, e) : (s = new m(n,t,e,u),
            a.push(s),
            r[n] = s),
            o
        }
        ,
        this.get = function(t) {
            p(t);
            var e = l(t)
              , e = f(r, e);
            if (e) {
                e = e.getEntryForKey(t);
                if (e)
                    return e[1]
            }
            return null
        }
        ,
        this.containsKey = function(t) {
            p(t);
            var e = l(t)
              , e = f(r, e);
            return !!e && e.containsKey(t)
        }
        ,
        this.containsValue = function(t) {
            _(t);
            for (var e = a.length; e--; )
                if (a[e].containsValue(t))
                    return !0;
            return !1
        }
        ,
        this.clear = function() {
            a.length = 0,
            r = {}
        }
        ,
        this.isEmpty = function() {
            return !a.length
        }
        ;
        this.keys = s("keys"),
        this.values = s("values"),
        this.entries = s("getEntries"),
        this.remove = function(t) {
            p(t);
            var e = l(t)
              , i = null
              , n = f(r, e);
            return n && null !== (i = n.removeEntryForKey(t)) && 0 == n.entries.length && (t = function(t, e) {
                for (var i = t.length; i--; )
                    if (e === t[i][0])
                        return i;
                return null
            }(a, e),
            a.splice(t, 1),
            delete r[e]),
            i
        }
        ,
        this.size = function() {
            for (var t = 0, e = a.length; e--; )
                t += a[e].entries.length;
            return t
        }
    }
    return m.prototype = {
        getEqualityFunction: function(t) {
            return typeof t.equals == h ? e : n
        },
        getEntryForKey: s(1),
        getEntryAndIndexForKey: s(2),
        removeEntryForKey: function(t) {
            t = this.getEntryAndIndexForKey(t);
            return t ? (this.entries.splice(t[0], 1),
            t[1]) : null
        },
        addEntry: function(t, e) {
            this.entries.push([t, e])
        },
        keys: a(0),
        values: a(1),
        getEntries: function(t) {
            for (var e = t.length, i = 0, n = this.entries, o = n.length; i < o; ++i)
                t[e + i] = n[i].slice(0)
        },
        containsKey: s(0),
        containsValue: function(t) {
            for (var e = this.entries, i = e.length; i--; )
                if (t === e[i][1])
                    return !0;
            return !1
        }
    },
    (r.prototype = {
        each: function(t) {
            for (var e, i = this.entries(), n = i.length; n--; )
                t((e = i[n])[0], e[1])
        },
        equals: function(t) {
            var e, i, n, o = this.size();
            if (o != t.size())
                return !1;
            for (e = this.keys(); o--; )
                if (i = e[o],
                null === (n = t.get(i)) || n !== this.get(i))
                    return !1;
            return !0
        },
        putAll: function(t, e) {
            for (var i, n, o, s = t.entries(), a = s.length, r = typeof e == h; a--; )
                i = (n = s[a])[0],
                n = n[1],
                r && (o = this.get(i)) && (n = e(i, o, n)),
                this.put(i, n)
        },
        clone: function() {
            var t = new r(this.properties);
            return t.putAll(this),
            t
        }
    }).toQueryString = function() {
        for (var t, e = this.entries(), i = e.length, n = []; i--; )
            t = e[i],
            n[i] = encodeURIComponent(o(t[0])) + "=" + encodeURIComponent(o(t[1]));
        return n.join("&")
    }
    ,
    r
}()
  , mbAttr = (!function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e(t.L = {})
}(this, function(t) {
    "use strict";
    function h(t) {
        for (var e, i, n = 1, o = arguments.length; n < o; n++)
            for (e in i = arguments[n])
                t[e] = i[e];
        return t
    }
    function d(t, e) {
        var i = Array.prototype.slice;
        if (t.bind)
            return t.bind.apply(t, i.call(arguments, 1));
        var n = i.call(arguments, 2);
        return function() {
            return t.apply(e, n.length ? n.concat(i.call(arguments)) : arguments)
        }
    }
    function r(t) {
        return t._leaflet_id = t._leaflet_id || ++te,
        t._leaflet_id
    }
    function D(t, e, i) {
        var n, o, s, a = function() {
            n = !1,
            o && (s.apply(i, o),
            o = !1)
        };
        return s = function() {
            n ? o = arguments : (t.apply(i, arguments),
            setTimeout(a, e),
            n = !0)
        }
    }
    function R(t, e, i) {
        var n = e[1]
          , e = e[0]
          , o = n - e;
        return t === n && i ? t : ((t - e) % o + o) % o + e
    }
    function l() {
        return !1
    }
    function i(t, e) {
        e = Math.pow(10, void 0 === e ? 6 : e);
        return Math.round(t * e) / e
    }
    function N(t) {
        return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
    }
    function j(t) {
        return N(t).split(/\s+/)
    }
    function s(t, e) {
        for (var i in t.hasOwnProperty("options") || (t.options = t.options ? Qt(t.options) : {}),
        e)
            t.options[i] = e[i];
        return t.options
    }
    function H(t, e, i) {
        var n, o = [];
        for (n in t)
            o.push(encodeURIComponent(i ? n.toUpperCase() : n) + "=" + encodeURIComponent(t[n]));
        return (e && -1 !== e.indexOf("?") ? "&" : "?") + o.join("&")
    }
    function W(t, i) {
        return t.replace(ee, function(t, e) {
            e = i[e];
            if (void 0 === e)
                throw new Error("No value provided for variable " + t);
            return e = "function" == typeof e ? e(i) : e
        })
    }
    function F(t, e) {
        for (var i = 0; i < t.length; i++)
            if (t[i] === e)
                return i;
        return -1
    }
    function U(t) {
        return window["webkit" + t] || window["moz" + t] || window["ms" + t]
    }
    function q(t) {
        var e = +new Date
          , i = Math.max(0, 16 - (e - oe));
        return oe = e + i,
        window.setTimeout(t, i)
    }
    function b(t, e, i) {
        if (!i || se !== q)
            return se.call(window, d(t, e));
        t.call(e)
    }
    function a(t) {
        t && ae.call(window, t)
    }
    function G() {}
    function _(t, e, i) {
        this.x = i ? Math.round(t) : t,
        this.y = i ? Math.round(e) : e
    }
    function u(t, e, i) {
        return t instanceof _ ? t : ie(t) ? new _(t[0],t[1]) : null == t ? t : "object" == typeof t && "x"in t && "y"in t ? new _(t.x,t.y) : new _(t,e,i)
    }
    function m(t, e) {
        if (t)
            for (var i = e ? [t, e] : t, n = 0, o = i.length; n < o; n++)
                this.extend(i[n])
    }
    function c(t, e) {
        return !t || t instanceof m ? t : new m(t,e)
    }
    function p(t, e) {
        if (t)
            for (var i = e ? [t, e] : t, n = 0, o = i.length; n < o; n++)
                this.extend(i[n])
    }
    function f(t, e) {
        return t instanceof p ? t : new p(t,e)
    }
    function g(t, e, i) {
        if (isNaN(t) || isNaN(e))
            throw new Error("Invalid LatLng object: (" + t + ", " + e + ")");
        this.lat = +t,
        this.lng = +e,
        void 0 !== i && (this.alt = +i)
    }
    function w(t, e, i) {
        return t instanceof g ? t : ie(t) && "object" != typeof t[0] ? 3 === t.length ? new g(t[0],t[1],t[2]) : 2 === t.length ? new g(t[0],t[1]) : null : null == t ? t : "object" == typeof t && "lat"in t ? new g(t.lat,"lng"in t ? t.lng : t.lon,t.alt) : void 0 === e ? null : new g(t,e,i)
    }
    function V(t, e, i, n) {
        ie(t) ? (this._a = t[0],
        this._b = t[1],
        this._c = t[2],
        this._d = t[3]) : (this._a = t,
        this._b = e,
        this._c = i,
        this._d = n)
    }
    function $(t, e, i, n) {
        return new V(t,e,i,n)
    }
    function K(t) {
        return document.createElementNS("http://www.w3.org/2000/svg", t)
    }
    function Y(t, e) {
        for (var i, n, o, s, a = "", r = 0, h = t.length; r < h; r++) {
            for (i = 0,
            n = (o = t[r]).length; i < n; i++)
                a += (i ? "L" : "M") + (s = o[i]).x + " " + s.y;
            a += e ? Ue ? "z" : "x" : ""
        }
        return a || "M0 0"
    }
    function e(t) {
        return 0 <= navigator.userAgent.toLowerCase().indexOf(t)
    }
    function X(t, e, i, n) {
        function o(t) {
            et(t, s)
        }
        var s, a, r, h, l, u;
        function c(t) {
            (t.pointerType !== t.MSPOINTER_TYPE_MOUSE && "mouse" !== t.pointerType || 0 !== t.buttons) && et(t, a)
        }
        "touchstart" === e ? (r = t,
        h = i,
        l = n,
        u = d(function(t) {
            if ("mouse" !== t.pointerType && t.MSPOINTER_TYPE_MOUSE && t.pointerType !== t.MSPOINTER_TYPE_MOUSE) {
                if (!(Ye.indexOf(t.target.tagName) < 0))
                    return;
                z(t)
            }
            et(t, h)
        }),
        r["_leaflet_touchstart" + l] = u,
        r.addEventListener(Ge, u, !1),
        Je || (document.documentElement.addEventListener(Ge, J, !0),
        document.documentElement.addEventListener(Ve, Q, !0),
        document.documentElement.addEventListener($e, tt, !0),
        document.documentElement.addEventListener(Ke, tt, !0),
        Je = !0)) : "touchmove" === e ? (a = i,
        (l = t)["_leaflet_touchmove" + n] = c,
        l.addEventListener(Ve, c, !1)) : "touchend" === e && (s = i,
        (r = t)["_leaflet_touchend" + n] = o,
        r.addEventListener($e, o, !1),
        r.addEventListener(Ke, o, !1))
    }
    function J(t) {
        Xe[t.pointerId] = t,
        Qe++
    }
    function Q(t) {
        Xe[t.pointerId] && (Xe[t.pointerId] = t)
    }
    function tt(t) {
        delete Xe[t.pointerId],
        Qe--
    }
    function et(t, e) {
        for (var i in t.touches = [],
        Xe)
            t.touches.push(Xe[i]);
        t.changedTouches = [t],
        e(t)
    }
    function it(t, o, e) {
        function i(t) {
            var e, i;
            if (A) {
                if (!xe || "mouse" === t.pointerType)
                    return;
                e = Qe
            } else
                e = t.touches.length;
            1 < e || (i = (e = Date.now()) - (s || e),
            a = t.touches ? t.touches[0] : t,
            r = 0 < i && i <= 250,
            s = e)
        }
        function n(t) {
            if (r && !a.cancelBubble) {
                if (A) {
                    if (!xe || "mouse" === t.pointerType)
                        return;
                    var e, i, n = {};
                    for (i in a)
                        e = a[i],
                        n[i] = e && e.bind ? e.bind(a) : e;
                    a = n
                }
                a.type = "dblclick",
                o(a),
                s = null
            }
        }
        var s, a, r = !1;
        return t[ii + ti + e] = i,
        t[ii + ei + e] = n,
        t[ii + "dblclick" + e] = o,
        t.addEventListener(ti, i, !1),
        t.addEventListener(ei, n, !1),
        t.addEventListener("dblclick", o, !1),
        this
    }
    function nt(t, e) {
        var i = t[ii + ti + e]
          , n = t[ii + ei + e]
          , e = t[ii + "dblclick" + e];
        return t.removeEventListener(ti, i, !1),
        t.removeEventListener(ei, n, !1),
        xe || t.removeEventListener("dblclick", e, !1),
        this
    }
    function ot(t) {
        return "string" == typeof t ? document.getElementById(t) : t
    }
    function st(t, e) {
        var i = t.style[e] || t.currentStyle && t.currentStyle[e];
        return "auto" === (i = i && "auto" !== i || !document.defaultView ? i : (t = document.defaultView.getComputedStyle(t, null)) ? t[e] : null) ? null : i
    }
    function y(t, e, i) {
        t = document.createElement(t);
        return t.className = e || "",
        i && i.appendChild(t),
        t
    }
    function v(t) {
        var e = t.parentNode;
        e && e.removeChild(t)
    }
    function at(t) {
        for (; t.firstChild; )
            t.removeChild(t.firstChild)
    }
    function rt(t) {
        var e = t.parentNode;
        e.lastChild !== t && e.appendChild(t)
    }
    function ht(t) {
        var e = t.parentNode;
        e.firstChild !== t && e.insertBefore(t, e.firstChild)
    }
    function lt(t, e) {
        if (void 0 !== t.classList)
            return t.classList.contains(e);
        t = ct(t);
        return 0 < t.length && new RegExp("(^|\\s)" + e + "(\\s|$)").test(t)
    }
    function x(t, e) {
        var i;
        if (void 0 !== t.classList)
            for (var n = j(e), o = 0, s = n.length; o < s; o++)
                t.classList.add(n[o]);
        else
            lt(t, e) || ut(t, ((i = ct(t)) ? i + " " : "") + e)
    }
    function P(t, e) {
        void 0 !== t.classList ? t.classList.remove(e) : ut(t, N((" " + ct(t) + " ").replace(" " + e + " ", " ")))
    }
    function ut(t, e) {
        void 0 === t.className.baseVal ? t.className = e : t.className.baseVal = e
    }
    function ct(t) {
        return void 0 === t.className.baseVal ? t.className : t.className.baseVal
    }
    function T(t, e) {
        if ("opacity"in t.style)
            t.style.opacity = e;
        else if ("filter"in t.style) {
            var i = t
              , t = e
              , e = !1
              , n = "DXImageTransform.Microsoft.Alpha";
            try {
                e = i.filters.item(n)
            } catch (i) {
                if (1 === t)
                    return
            }
            t = Math.round(100 * t),
            e ? (e.Enabled = 100 !== t,
            e.Opacity = t) : i.style.filter += " progid:" + n + "(opacity=" + t + ")"
        }
    }
    function dt(t) {
        for (var e = document.documentElement.style, i = 0; i < t.length; i++)
            if (t[i]in e)
                return t[i];
        return !1
    }
    function pt(t, e, i) {
        e = e || new _(0,0);
        t.style[ni] = (Ze ? "translate(" + e.x + "px," + e.y + "px)" : "translate3d(" + e.x + "px," + e.y + "px,0)") + (i ? " scale(" + i + ")" : "")
    }
    function M(t, e) {
        t._leaflet_pos = e,
        S ? pt(t, e) : (t.style.left = e.x + "px",
        t.style.top = e.y + "px")
    }
    function _t(t) {
        return t._leaflet_pos || new _(0,0)
    }
    function mt() {
        C(window, "dragstart", z)
    }
    function ft() {
        n(window, "dragstart", z)
    }
    function gt(t) {
        for (; -1 === t.tabIndex; )
            t = t.parentNode;
        t.style && (yt(),
        hi = (ri = t).style.outline,
        t.style.outline = "none",
        C(window, "keydown", yt))
    }
    function yt() {
        ri && (ri.style.outline = hi,
        hi = ri = void 0,
        n(window, "keydown", yt))
    }
    function vt(t) {
        for (; !((t = t.parentNode).offsetWidth && t.offsetHeight || t === document.body); )
            ;
        return t
    }
    function Lt(t) {
        var e = t.getBoundingClientRect();
        return {
            x: e.width / t.offsetWidth || 1,
            y: e.height / t.offsetHeight || 1,
            boundingClientRect: e
        }
    }
    function C(t, e, i, n) {
        if ("object" == typeof e)
            for (var o in e)
                bt(t, o, e[o], i);
        else
            for (var s = 0, a = (e = j(e)).length; s < a; s++)
                bt(t, e[s], i, n);
        return this
    }
    function n(t, e, i, n) {
        if ("object" == typeof e)
            for (var o in e)
                wt(t, o, e[o], i);
        else if (e)
            for (var s = 0, a = (e = j(e)).length; s < a; s++)
                wt(t, e[s], i, n);
        else {
            for (var r in t[O])
                wt(t, r, t[O][r]);
            delete t[O]
        }
        return this
    }
    function bt(e, t, i, n) {
        var o, s, a = t + r(i) + (n ? "_" + r(n) : "");
        e[O] && e[O][a] || (s = o = function(t) {
            return i.call(n || e, t || window.event)
        }
        ,
        A && 0 === t.indexOf("touch") ? X(e, t, o, a) : !Ne || "dblclick" !== t || A && ke ? "addEventListener"in e ? "mousewheel" === t ? e.addEventListener("onwheel"in e ? "wheel" : "mousewheel", o, !1) : "mouseenter" === t || "mouseleave" === t ? e.addEventListener("mouseenter" === t ? "mouseover" : "mouseout", o = function(t) {
            t = t || window.event,
            Et(e, t) && s(t)
        }
        , !1) : e.addEventListener(t, o = "click" === t && Te ? function(t) {
            var e, i, n;
            e = s,
            i = (t = t).timeStamp || t.originalEvent && t.originalEvent.timeStamp,
            (n = li && i - li) && 100 < n && n < 500 || t.target._simulatedClick && !t._simulated ? Mt(t) : (li = i,
            e(t))
        }
        : o, !1) : "attachEvent"in e && e.attachEvent("on" + t, o) : it(e, o, a),
        e[O] = e[O] || {},
        e[O][a] = o)
    }
    function wt(t, e, i, n) {
        var o, s, a, i = e + r(i) + (n ? "_" + r(n) : ""), n = t[O] && t[O][i];
        n && (A && 0 === e.indexOf("touch") ? (a = (o = t)["_leaflet_" + (s = e) + (a = i)],
        "touchstart" === s ? o.removeEventListener(Ge, a, !1) : "touchmove" === s ? o.removeEventListener(Ve, a, !1) : "touchend" === s && (o.removeEventListener($e, a, !1),
        o.removeEventListener(Ke, a, !1))) : !Ne || "dblclick" !== e || A && ke ? "removeEventListener"in t ? "mousewheel" === e ? t.removeEventListener("onwheel"in t ? "wheel" : "mousewheel", n, !1) : t.removeEventListener("mouseenter" === e ? "mouseover" : "mouseleave" === e ? "mouseout" : e, n, !1) : "detachEvent"in t && t.detachEvent("on" + e, n) : nt(t, i),
        t[O][i] = null)
    }
    function xt(t) {
        return t.stopPropagation ? t.stopPropagation() : t.originalEvent ? t.originalEvent._stopped = !0 : t.cancelBubble = !0,
        St(t),
        this
    }
    function Pt(t) {
        return bt(t, "mousewheel", xt),
        this
    }
    function Tt(t) {
        return C(t, "mousedown touchstart dblclick", xt),
        bt(t, "click", kt),
        this
    }
    function z(t) {
        return t.preventDefault ? t.preventDefault() : t.returnValue = !1,
        this
    }
    function Mt(t) {
        return z(t),
        xt(t),
        this
    }
    function Ct(t, e) {
        if (!e)
            return new _(t.clientX,t.clientY);
        var i = Lt(e)
          , n = i.boundingClientRect;
        return new _((t.clientX - n.left) / i.x - e.clientLeft,(t.clientY - n.top) / i.y - e.clientTop)
    }
    function zt(t) {
        return xe ? t.wheelDeltaY / 2 : t.deltaY && 0 === t.deltaMode ? -t.deltaY / ui : t.deltaY && 1 === t.deltaMode ? 20 * -t.deltaY : t.deltaY && 2 === t.deltaMode ? 60 * -t.deltaY : t.deltaX || t.deltaZ ? 0 : t.wheelDelta ? (t.wheelDeltaY || t.wheelDelta) / 2 : t.detail && Math.abs(t.detail) < 32765 ? 20 * -t.detail : t.detail ? t.detail / -32765 * 60 : 0
    }
    function kt(t) {
        ci[t.type] = !0
    }
    function St(t) {
        var e = ci[t.type];
        return ci[t.type] = !1,
        e
    }
    function Et(t, e) {
        var i = e.relatedTarget;
        if (!i)
            return !0;
        try {
            for (; i && i !== t; )
                i = i.parentNode
        } catch (t) {
            return !1
        }
        return i !== t
    }
    function At(t, e) {
        if (!e || !t.length)
            return t.slice();
        var e = e * e
          , i = t = function(t, e) {
            for (var i = [t[0]], n = 1, o = 0, s = t.length; n < s; n++)
                (function(t, e) {
                    var i = e.x - t.x
                      , e = e.y - t.y;
                    return i * i + e * e
                }
                )(t[n], t[o]) > e && (i.push(t[n]),
                o = n);
            return o < s - 1 && i.push(t[s - 1]),
            i
        }(t, e)
          , t = e
          , n = i.length
          , o = new (typeof Uint8Array != void 0 + "" ? Uint8Array : Array)(n);
        o[0] = o[n - 1] = 1,
        function t(e, i, n, o, s) {
            var a, r, h, l = 0;
            for (r = o + 1; r <= s - 1; r++)
                (h = Dt(e[r], e[o], e[s], !0)) > l && (a = r,
                l = h);
            n < l && (i[a] = 1,
            t(e, i, n, o, a),
            t(e, i, n, a, s))
        }(i, o, t, 0, n - 1);
        var s, a = [];
        for (s = 0; s < n; s++)
            o[s] && a.push(i[s]);
        return a
    }
    function Ot(t, e, i) {
        return Math.sqrt(Dt(t, e, i, !0))
    }
    function Zt(t, e, i, n, o) {
        var s, a, r, h = n ? gi : Bt(t, i), l = Bt(e, i);
        for (gi = l; ; ) {
            if (!(h | l))
                return [t, e];
            if (h & l)
                return !1;
            r = Bt(a = It(t, e, s = h || l, i, o), i),
            s === h ? (t = a,
            h = r) : (e = a,
            l = r)
        }
    }
    function It(t, e, i, n, o) {
        var s, a, r = e.x - t.x, e = e.y - t.y, h = n.min, n = n.max;
        return 8 & i ? (s = t.x + r * (n.y - t.y) / e,
        a = n.y) : 4 & i ? (s = t.x + r * (h.y - t.y) / e,
        a = h.y) : 2 & i ? (s = n.x,
        a = t.y + e * (n.x - t.x) / r) : 1 & i && (s = h.x,
        a = t.y + e * (h.x - t.x) / r),
        new _(s,a,o)
    }
    function Bt(t, e) {
        var i = 0;
        return t.x < e.min.x ? i |= 1 : t.x > e.max.x && (i |= 2),
        t.y < e.min.y ? i |= 4 : t.y > e.max.y && (i |= 8),
        i
    }
    function Dt(t, e, i, n) {
        var o = e.x
          , e = e.y
          , s = i.x - o
          , a = i.y - e
          , r = s * s + a * a;
        return 0 < r && (1 < (r = ((t.x - o) * s + (t.y - e) * a) / r) ? (o = i.x,
        e = i.y) : 0 < r && (o += s * r,
        e += a * r)),
        s = t.x - o,
        a = t.y - e,
        n ? s * s + a * a : new _(o,e)
    }
    function Rt(t) {
        return !ie(t[0]) || "object" != typeof t[0][0] && void 0 !== t[0][0]
    }
    function Nt(t) {
        return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),
        Rt(t)
    }
    function jt(t, e, i) {
        for (var n, o, s, a, r, h, l, u = [1, 4, 2, 8], c = 0, d = t.length; c < d; c++)
            t[c]._code = Bt(t[c], e);
        for (s = 0; s < 4; s++) {
            for (h = u[s],
            n = [],
            c = 0,
            o = (d = t.length) - 1; c < d; o = c++)
                a = t[c],
                r = t[o],
                a._code & h ? r._code & h || ((l = It(r, a, h, e, i))._code = Bt(l, e),
                n.push(l)) : (r._code & h && ((l = It(r, a, h, e, i))._code = Bt(l, e),
                n.push(l)),
                n.push(a));
            t = n
        }
        return t
    }
    function Ht(t, e) {
        var i, n, o, s, a = "Feature" === t.type ? t.geometry : t, r = a ? a.coordinates : null, h = [], l = e && e.pointToLayer, u = e && e.coordsToLatLng || Wt;
        if (!r && !a)
            return null;
        switch (a.type) {
        case "Point":
            return i = u(r),
            l ? l(t, i) : new zi(i);
        case "MultiPoint":
            for (o = 0,
            s = r.length; o < s; o++)
                i = u(r[o]),
                h.push(l ? l(t, i) : new zi(i));
            return new Pi(h);
        case "LineString":
        case "MultiLineString":
            return n = Ft(r, "LineString" === a.type ? 0 : 1, u),
            new Ai(n,e);
        case "Polygon":
        case "MultiPolygon":
            return n = Ft(r, "Polygon" === a.type ? 1 : 2, u),
            new Oi(n,e);
        case "GeometryCollection":
            for (o = 0,
            s = a.geometries.length; o < s; o++) {
                var c = Ht({
                    geometry: a.geometries[o],
                    type: "Feature",
                    properties: t.properties
                }, e);
                c && h.push(c)
            }
            return new Pi(h);
        default:
            throw new Error("Invalid GeoJSON object.")
        }
    }
    function Wt(t) {
        return new g(t[1],t[0],t[2])
    }
    function Ft(t, e, i) {
        for (var n, o = [], s = 0, a = t.length; s < a; s++)
            n = e ? Ft(t[s], e - 1, i) : (i || Wt)(t[s]),
            o.push(n);
        return o
    }
    function Ut(t, e) {
        return e = "number" == typeof e ? e : 6,
        void 0 !== t.alt ? [i(t.lng, e), i(t.lat, e), i(t.alt, e)] : [i(t.lng, e), i(t.lat, e)]
    }
    function qt(t, e, i, n) {
        for (var o = [], s = 0, a = t.length; s < a; s++)
            o.push(e ? qt(t[s], e - 1, i, n) : Ut(t[s], n));
        return !e && i && o.push(o[0]),
        o
    }
    function Gt(t, e) {
        return t.feature ? h({}, t.feature, {
            geometry: e
        }) : Vt(e)
    }
    function Vt(t) {
        return "Feature" === t.type || "FeatureCollection" === t.type ? t : {
            type: "Feature",
            properties: {},
            geometry: t
        }
    }
    function $t(t, e) {
        return new Zi(t,e)
    }
    function Kt(t, e) {
        return new Wi(t,e)
    }
    function Yt(t) {
        return Fe ? new qi(t) : null
    }
    function Xt(t) {
        return Ue || qe ? new $i(t) : null
    }
    var Jt = Object.freeze
      , Qt = (Object.freeze = function(t) {
        return t
    }
    ,
    Object.create || function(t) {
        return he.prototype = t,
        new he
    }
    )
      , te = 0
      , ee = /\{ *([\w_-]+) *\}/g
      , ie = Array.isArray || function(t) {
        return "[object Array]" === Object.prototype.toString.call(t)
    }
      , ne = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
      , oe = 0
      , se = window.requestAnimationFrame || U("RequestAnimationFrame") || q
      , ae = window.cancelAnimationFrame || U("CancelAnimationFrame") || U("CancelRequestAnimationFrame") || function(t) {
        window.clearTimeout(t)
    }
      , re = (Object.freeze || Object)({
        freeze: Jt,
        extend: h,
        create: Qt,
        bind: d,
        lastId: te,
        stamp: r,
        throttle: D,
        wrapNum: R,
        falseFn: l,
        formatNum: i,
        trim: N,
        splitWords: j,
        setOptions: s,
        getParamString: H,
        template: W,
        isArray: ie,
        indexOf: F,
        emptyImageUrl: ne,
        requestFn: se,
        cancelFn: ae,
        requestAnimFrame: b,
        cancelAnimFrame: a
    });
    function he() {}
    G.extend = function(t) {
        function e() {
            this.initialize && this.initialize.apply(this, arguments),
            this.callInitHooks()
        }
        var i, n = e.__super__ = this.prototype, o = Qt(n);
        for (i in (o.constructor = e).prototype = o,
        this)
            this.hasOwnProperty(i) && "prototype" !== i && "__super__" !== i && (e[i] = this[i]);
        if (t.statics && (h(e, t.statics),
        delete t.statics),
        t.includes) {
            var s = t.includes;
            if ("undefined" != typeof L && L && L.Mixin) {
                s = ie(s) ? s : [s];
                for (var a = 0; a < s.length; a++)
                    s[a] === L.Mixin.Events && console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.", (new Error).stack)
            }
            h.apply(null, [o].concat(t.includes)),
            delete t.includes
        }
        return o.options && (t.options = h(Qt(o.options), t.options)),
        h(o, t),
        o._initHooks = [],
        o.callInitHooks = function() {
            if (!this._initHooksCalled) {
                n.callInitHooks && n.callInitHooks.call(this),
                this._initHooksCalled = !0;
                for (var t = 0, e = o._initHooks.length; t < e; t++)
                    o._initHooks[t].call(this)
            }
        }
        ,
        e
    }
    ,
    G.include = function(t) {
        return h(this.prototype, t),
        this
    }
    ,
    G.mergeOptions = function(t) {
        return h(this.prototype.options, t),
        this
    }
    ,
    G.addInitHook = function(t) {
        var e = Array.prototype.slice.call(arguments, 1)
          , i = "function" == typeof t ? t : function() {
            this[t].apply(this, e)
        }
        ;
        return this.prototype._initHooks = this.prototype._initHooks || [],
        this.prototype._initHooks.push(i),
        this
    }
    ;
    var o = {
        on: function(t, e, i) {
            if ("object" == typeof t)
                for (var n in t)
                    this._on(n, t[n], e);
            else
                for (var o = 0, s = (t = j(t)).length; o < s; o++)
                    this._on(t[o], e, i);
            return this
        },
        off: function(t, e, i) {
            if (t)
                if ("object" == typeof t)
                    for (var n in t)
                        this._off(n, t[n], e);
                else
                    for (var o = 0, s = (t = j(t)).length; o < s; o++)
                        this._off(t[o], e, i);
            else
                delete this._events;
            return this
        },
        _on: function(t, e, i) {
            this._events = this._events || {};
            var n = this._events[t];
            n || (this._events[t] = n = []);
            for (var t = {
                fn: e,
                ctx: i = i === this ? void 0 : i
            }, o = n, s = 0, a = o.length; s < a; s++)
                if (o[s].fn === e && o[s].ctx === i)
                    return;
            o.push(t)
        },
        _off: function(t, e, i) {
            var n, o, s;
            if (this._events && (n = this._events[t]))
                if (e) {
                    if (i === this && (i = void 0),
                    n)
                        for (o = 0,
                        s = n.length; o < s; o++) {
                            var a = n[o];
                            if (a.ctx === i && a.fn === e)
                                return a.fn = l,
                                this._firingCount && (this._events[t] = n = n.slice()),
                                void n.splice(o, 1)
                        }
                } else {
                    for (o = 0,
                    s = n.length; o < s; o++)
                        n[o].fn = l;
                    delete this._events[t]
                }
        },
        fire: function(t, e, i) {
            if (this.listens(t, i)) {
                var n = h({}, e, {
                    type: t,
                    target: this,
                    sourceTarget: e && e.sourceTarget || this
                });
                if (this._events) {
                    var o = this._events[t];
                    if (o) {
                        this._firingCount = this._firingCount + 1 || 1;
                        for (var s = 0, a = o.length; s < a; s++) {
                            var r = o[s];
                            r.fn.call(r.ctx || this, n)
                        }
                        this._firingCount--
                    }
                }
                i && this._propagateEvent(n)
            }
            return this
        },
        listens: function(t, e) {
            var i = this._events && this._events[t];
            if (i && i.length)
                return !0;
            if (e)
                for (var n in this._eventParents)
                    if (this._eventParents[n].listens(t, e))
                        return !0;
            return !1
        },
        once: function(t, e, i) {
            if ("object" == typeof t) {
                for (var n in t)
                    this.once(n, t[n], e);
                return this
            }
            var o = d(function() {
                this.off(t, e, i).off(t, o, i)
            }, this);
            return this.on(t, e, i).on(t, o, i)
        },
        addEventParent: function(t) {
            return this._eventParents = this._eventParents || {},
            this._eventParents[r(t)] = t,
            this
        },
        removeEventParent: function(t) {
            return this._eventParents && delete this._eventParents[r(t)],
            this
        },
        _propagateEvent: function(t) {
            for (var e in this._eventParents)
                this._eventParents[e].fire(t.type, h({
                    layer: t.target,
                    propagatedFrom: t.target
                }, t), !0)
        }
    }
      , le = (o.addEventListener = o.on,
    o.removeEventListener = o.clearAllEventListeners = o.off,
    o.addOneTimeEventListener = o.once,
    o.fireEvent = o.fire,
    o.hasEventListeners = o.listens,
    G.extend(o))
      , ue = Math.trunc || function(t) {
        return 0 < t ? Math.floor(t) : Math.ceil(t)
    }
      , ce = (_.prototype = {
        clone: function() {
            return new _(this.x,this.y)
        },
        add: function(t) {
            return this.clone()._add(u(t))
        },
        _add: function(t) {
            return this.x += t.x,
            this.y += t.y,
            this
        },
        subtract: function(t) {
            return this.clone()._subtract(u(t))
        },
        _subtract: function(t) {
            return this.x -= t.x,
            this.y -= t.y,
            this
        },
        divideBy: function(t) {
            return this.clone()._divideBy(t)
        },
        _divideBy: function(t) {
            return this.x /= t,
            this.y /= t,
            this
        },
        multiplyBy: function(t) {
            return this.clone()._multiplyBy(t)
        },
        _multiplyBy: function(t) {
            return this.x *= t,
            this.y *= t,
            this
        },
        scaleBy: function(t) {
            return new _(this.x * t.x,this.y * t.y)
        },
        unscaleBy: function(t) {
            return new _(this.x / t.x,this.y / t.y)
        },
        round: function() {
            return this.clone()._round()
        },
        _round: function() {
            return this.x = Math.round(this.x),
            this.y = Math.round(this.y),
            this
        },
        floor: function() {
            return this.clone()._floor()
        },
        _floor: function() {
            return this.x = Math.floor(this.x),
            this.y = Math.floor(this.y),
            this
        },
        ceil: function() {
            return this.clone()._ceil()
        },
        _ceil: function() {
            return this.x = Math.ceil(this.x),
            this.y = Math.ceil(this.y),
            this
        },
        trunc: function() {
            return this.clone()._trunc()
        },
        _trunc: function() {
            return this.x = ue(this.x),
            this.y = ue(this.y),
            this
        },
        distanceTo: function(t) {
            var e = (t = u(t)).x - this.x
              , t = t.y - this.y;
            return Math.sqrt(e * e + t * t)
        },
        equals: function(t) {
            return (t = u(t)).x === this.x && t.y === this.y
        },
        contains: function(t) {
            return t = u(t),
            Math.abs(t.x) <= Math.abs(this.x) && Math.abs(t.y) <= Math.abs(this.y)
        },
        toString: function() {
            return "Point(" + i(this.x) + ", " + i(this.y) + ")"
        }
    },
    m.prototype = {
        extend: function(t) {
            return t = u(t),
            this.min || this.max ? (this.min.x = Math.min(t.x, this.min.x),
            this.max.x = Math.max(t.x, this.max.x),
            this.min.y = Math.min(t.y, this.min.y),
            this.max.y = Math.max(t.y, this.max.y)) : (this.min = t.clone(),
            this.max = t.clone()),
            this
        },
        getCenter: function(t) {
            return new _((this.min.x + this.max.x) / 2,(this.min.y + this.max.y) / 2,t)
        },
        getBottomLeft: function() {
            return new _(this.min.x,this.max.y)
        },
        getTopRight: function() {
            return new _(this.max.x,this.min.y)
        },
        getTopLeft: function() {
            return this.min
        },
        getBottomRight: function() {
            return this.max
        },
        getSize: function() {
            return this.max.subtract(this.min)
        },
        contains: function(t) {
            var e, i;
            return (t = ("number" == typeof t[0] || t instanceof _ ? u : c)(t))instanceof m ? (e = t.min,
            i = t.max) : e = i = t,
            e.x >= this.min.x && i.x <= this.max.x && e.y >= this.min.y && i.y <= this.max.y
        },
        intersects: function(t) {
            t = c(t);
            var e = this.min
              , i = this.max
              , n = t.min
              , t = t.max
              , o = t.x >= e.x && n.x <= i.x
              , t = t.y >= e.y && n.y <= i.y;
            return o && t
        },
        overlaps: function(t) {
            t = c(t);
            var e = this.min
              , i = this.max
              , n = t.min
              , t = t.max
              , o = t.x > e.x && n.x < i.x
              , t = t.y > e.y && n.y < i.y;
            return o && t
        },
        isValid: function() {
            return !(!this.min || !this.max)
        }
    },
    p.prototype = {
        extend: function(t) {
            var e, i, n = this._southWest, o = this._northEast;
            if (t instanceof g)
                i = e = t;
            else {
                if (!(t instanceof p))
                    return t ? this.extend(w(t) || f(t)) : this;
                if (e = t._southWest,
                i = t._northEast,
                !e || !i)
                    return this
            }
            return n || o ? (n.lat = Math.min(e.lat, n.lat),
            n.lng = Math.min(e.lng, n.lng),
            o.lat = Math.max(i.lat, o.lat),
            o.lng = Math.max(i.lng, o.lng)) : (this._southWest = new g(e.lat,e.lng),
            this._northEast = new g(i.lat,i.lng)),
            this
        },
        pad: function(t) {
            var e = this._southWest
              , i = this._northEast
              , n = Math.abs(e.lat - i.lat) * t
              , t = Math.abs(e.lng - i.lng) * t;
            return new p(new g(e.lat - n,e.lng - t),new g(i.lat + n,i.lng + t))
        },
        getCenter: function() {
            return new g((this._southWest.lat + this._northEast.lat) / 2,(this._southWest.lng + this._northEast.lng) / 2)
        },
        getSouthWest: function() {
            return this._southWest
        },
        getNorthEast: function() {
            return this._northEast
        },
        getNorthWest: function() {
            return new g(this.getNorth(),this.getWest())
        },
        getSouthEast: function() {
            return new g(this.getSouth(),this.getEast())
        },
        getWest: function() {
            return this._southWest.lng
        },
        getSouth: function() {
            return this._southWest.lat
        },
        getEast: function() {
            return this._northEast.lng
        },
        getNorth: function() {
            return this._northEast.lat
        },
        contains: function(t) {
            t = ("number" == typeof t[0] || t instanceof g || "lat"in t ? w : f)(t);
            var e, i, n = this._southWest, o = this._northEast;
            return t instanceof p ? (e = t.getSouthWest(),
            i = t.getNorthEast()) : e = i = t,
            e.lat >= n.lat && i.lat <= o.lat && e.lng >= n.lng && i.lng <= o.lng
        },
        intersects: function(t) {
            t = f(t);
            var e = this._southWest
              , i = this._northEast
              , n = t.getSouthWest()
              , t = t.getNorthEast()
              , o = t.lat >= e.lat && n.lat <= i.lat
              , t = t.lng >= e.lng && n.lng <= i.lng;
            return o && t
        },
        overlaps: function(t) {
            t = f(t);
            var e = this._southWest
              , i = this._northEast
              , n = t.getSouthWest()
              , t = t.getNorthEast()
              , o = t.lat > e.lat && n.lat < i.lat
              , t = t.lng > e.lng && n.lng < i.lng;
            return o && t
        },
        toBBoxString: function() {
            return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",")
        },
        equals: function(t, e) {
            return !!t && (t = f(t),
            this._southWest.equals(t.getSouthWest(), e) && this._northEast.equals(t.getNorthEast(), e))
        },
        isValid: function() {
            return !(!this._southWest || !this._northEast)
        }
    },
    {
        latLngToPoint: function(t, e) {
            t = this.projection.project(t),
            e = this.scale(e);
            return this.transformation._transform(t, e)
        },
        pointToLatLng: function(t, e) {
            e = this.scale(e),
            t = this.transformation.untransform(t, e);
            return this.projection.unproject(t)
        },
        project: function(t) {
            return this.projection.project(t)
        },
        unproject: function(t) {
            return this.projection.unproject(t)
        },
        scale: function(t) {
            return 256 * Math.pow(2, t)
        },
        zoom: function(t) {
            return Math.log(t / 256) / Math.LN2
        },
        getProjectedBounds: function(t) {
            if (this.infinite)
                return null;
            var e = this.projection.bounds
              , t = this.scale(t);
            return new m(this.transformation.transform(e.min, t),this.transformation.transform(e.max, t))
        },
        infinite: !(g.prototype = {
            equals: function(t, e) {
                return !!t && (t = w(t),
                Math.max(Math.abs(this.lat - t.lat), Math.abs(this.lng - t.lng)) <= (void 0 === e ? 1e-9 : e))
            },
            toString: function(t) {
                return "LatLng(" + i(this.lat, t) + ", " + i(this.lng, t) + ")"
            },
            distanceTo: function(t) {
                return de.distance(this, w(t))
            },
            wrap: function() {
                return de.wrapLatLng(this)
            },
            toBounds: function(t) {
                var t = 180 * t / 40075017
                  , e = t / Math.cos(Math.PI / 180 * this.lat);
                return f([this.lat - t, this.lng - e], [this.lat + t, this.lng + e])
            },
            clone: function() {
                return new g(this.lat,this.lng,this.alt)
            }
        }),
        wrapLatLng: function(t) {
            var e = this.wrapLng ? R(t.lng, this.wrapLng, !0) : t.lng;
            return new g(this.wrapLat ? R(t.lat, this.wrapLat, !0) : t.lat,e,t.alt)
        },
        wrapLatLngBounds: function(t) {
            var e = t.getCenter()
              , i = this.wrapLatLng(e)
              , n = e.lat - i.lat
              , e = e.lng - i.lng;
            if (0 == n && 0 == e)
                return t;
            i = t.getSouthWest(),
            t = t.getNorthEast();
            return new p(new g(i.lat - n,i.lng - e),new g(t.lat - n,t.lng - e))
        }
    })
      , de = h({}, ce, {
        wrapLng: [-180, 180],
        R: 6371e3,
        distance: function(t, e) {
            var i = Math.PI / 180
              , n = t.lat * i
              , o = e.lat * i
              , s = Math.sin((e.lat - t.lat) * i / 2)
              , e = Math.sin((e.lng - t.lng) * i / 2)
              , t = s * s + Math.cos(n) * Math.cos(o) * e * e
              , i = 2 * Math.atan2(Math.sqrt(t), Math.sqrt(1 - t));
            return this.R * i
        }
    })
      , pe = {
        R: 6378137,
        MAX_LATITUDE: 85.0511287798,
        project: function(t) {
            var e = Math.PI / 180
              , i = this.MAX_LATITUDE
              , i = Math.max(Math.min(i, t.lat), -i)
              , i = Math.sin(i * e);
            return new _(this.R * t.lng * e,this.R * Math.log((1 + i) / (1 - i)) / 2)
        },
        unproject: function(t) {
            var e = 180 / Math.PI;
            return new g((2 * Math.atan(Math.exp(t.y / this.R)) - Math.PI / 2) * e,t.x * e / this.R)
        },
        bounds: new m([-(pe = 6378137 * Math.PI), -pe],[pe, pe])
    };
    V.prototype = {
        transform: function(t, e) {
            return this._transform(t.clone(), e)
        },
        _transform: function(t, e) {
            return t.x = (e = e || 1) * (this._a * t.x + this._b),
            t.y = e * (this._c * t.y + this._d),
            t
        },
        untransform: function(t, e) {
            return new _((t.x / (e = e || 1) - this._b) / this._a,(t.y / e - this._d) / this._c)
        }
    };
    var _e, me, fe, ge, ye = h({}, de, {
        code: "EPSG:3857",
        projection: pe,
        transformation: $(ye = .5 / (Math.PI * pe.R), .5, -ye, .5)
    }), ve = h({}, ye, {
        code: "EPSG:900913"
    }), Le = document.documentElement.style, be = "ActiveXObject"in window, we = be && !document.addEventListener, xe = "msLaunchUri"in navigator && !("documentMode"in document), Pe = e("webkit"), Te = e("android"), Me = e("android 2") || e("android 3"), Ce = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10), ze = Te && e("Google") && Ce < 537 && !("AudioNode"in window), Ce = !!window.opera, ke = e("chrome"), Se = e("gecko") && !Pe && !Ce && !be, Ee = !ke && e("safari"), k = e("phantom"), Ae = "OTransition"in Le, Oe = 0 === navigator.platform.indexOf("Win"), Ze = be && "transition"in Le, Ie = "WebKitCSSMatrix"in window && "m11"in new window.WebKitCSSMatrix && !Me, Le = "MozPerspective"in Le, S = !window.L_DISABLE_3D && (Ze || Ie || Le) && !Ae && !k, Be = "undefined" != typeof orientation || e("mobile"), De = Be && Pe, Re = Be && Ie, E = !window.PointerEvent && window.MSPointerEvent, A = !(!window.PointerEvent && !E), Ne = !window.L_NO_TOUCH && (A || "ontouchstart"in window || window.DocumentTouch && document instanceof window.DocumentTouch), je = Be && Ce, He = Be && Se, We = 1 < (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI), Fe = !!document.createElement("canvas").getContext, Ue = !(!document.createElementNS || !K("svg").createSVGRect), qe = !Ue && function() {
        try {
            var t = document.createElement("div")
              , e = (t.innerHTML = '<v:shape adj="1"/>',
            t.firstChild);
            return e.style.behavior = "url(#default#VML)",
            e && "object" == typeof e.adj
        } catch (t) {
            return !1
        }
    }(), be = (Object.freeze || Object)({
        ie: be,
        ielt9: we,
        edge: xe,
        webkit: Pe,
        android: Te,
        android23: Me,
        androidStock: ze,
        opera: Ce,
        chrome: ke,
        gecko: Se,
        safari: Ee,
        phantom: k,
        opera12: Ae,
        win: Oe,
        ie3d: Ze,
        webkit3d: Ie,
        gecko3d: Le,
        any3d: S,
        mobile: Be,
        mobileWebkit: De,
        mobileWebkit3d: Re,
        msPointer: E,
        pointer: A,
        touch: Ne,
        mobileOpera: je,
        mobileGecko: He,
        retina: We,
        canvas: Fe,
        svg: Ue,
        vml: qe
    }), Ge = E ? "MSPointerDown" : "pointerdown", Ve = E ? "MSPointerMove" : "pointermove", $e = E ? "MSPointerUp" : "pointerup", Ke = E ? "MSPointerCancel" : "pointercancel", Ye = ["INPUT", "SELECT", "OPTION"], Xe = {}, Je = !1, Qe = 0, ti = E ? "MSPointerDown" : A ? "pointerdown" : "touchstart", ei = E ? "MSPointerUp" : A ? "pointerup" : "touchend", ii = "_leaflet_", ni = dt(["transform", "WebkitTransform", "OTransform", "MozTransform", "msTransform"]), oi = dt(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]), si = "webkitTransition" === oi || "OTransition" === oi ? oi + "End" : "transitionend";
    ge = "onselectstart"in document ? (fe = function() {
        C(window, "selectstart", z)
    }
    ,
    function() {
        n(window, "selectstart", z)
    }
    ) : (me = dt(["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]),
    fe = function() {
        var t;
        me && (t = document.documentElement.style,
        _e = t[me],
        t[me] = "none")
    }
    ,
    function() {
        me && (document.documentElement.style[me] = _e,
        _e = void 0)
    }
    );
    function ai(t) {
        return new I(t)
    }
    var ri, hi, li, Pe = (Object.freeze || Object)({
        TRANSFORM: ni,
        TRANSITION: oi,
        TRANSITION_END: si,
        get: ot,
        getStyle: st,
        create: y,
        remove: v,
        empty: at,
        toFront: rt,
        toBack: ht,
        hasClass: lt,
        addClass: x,
        removeClass: P,
        setClass: ut,
        getClass: ct,
        setOpacity: T,
        testProp: dt,
        setTransform: pt,
        setPosition: M,
        getPosition: _t,
        disableTextSelection: fe,
        enableTextSelection: ge,
        disableImageDrag: mt,
        enableImageDrag: ft,
        preventOutline: gt,
        restoreOutline: yt,
        getSizedParentNode: vt,
        getScale: Lt
    }), O = "_leaflet_events", ui = Oe && ke ? 2 * window.devicePixelRatio : Se ? window.devicePixelRatio : 1, ci = {}, Ce = (Object.freeze || Object)({
        on: C,
        off: n,
        stopPropagation: xt,
        disableScrollPropagation: Pt,
        disableClickPropagation: Tt,
        preventDefault: z,
        stop: Mt,
        getMousePosition: Ct,
        getWheelDelta: zt,
        fakeStop: kt,
        skipped: St,
        isExternalTarget: Et,
        addListener: C,
        removeListener: n
    }), di = le.extend({
        run: function(t, e, i, n) {
            this.stop(),
            this._el = t,
            this._inProgress = !0,
            this._duration = i || .25,
            this._easeOutPower = 1 / Math.max(n || .5, .2),
            this._startPos = _t(t),
            this._offset = e.subtract(this._startPos),
            this._startTime = +new Date,
            this.fire("start"),
            this._animate()
        },
        stop: function() {
            this._inProgress && (this._step(!0),
            this._complete())
        },
        _animate: function() {
            this._animId = b(this._animate, this),
            this._step()
        },
        _step: function(t) {
            var e = +new Date - this._startTime
              , i = 1e3 * this._duration;
            e < i ? this._runFrame(this._easeOut(e / i), t) : (this._runFrame(1),
            this._complete())
        },
        _runFrame: function(t, e) {
            t = this._startPos.add(this._offset.multiplyBy(t));
            e && t._round(),
            M(this._el, t),
            this.fire("step")
        },
        _complete: function() {
            a(this._animId),
            this._inProgress = !1,
            this.fire("end")
        },
        _easeOut: function(t) {
            return 1 - Math.pow(1 - t, this._easeOutPower)
        }
    }), Z = le.extend({
        options: {
            crs: ye,
            center: void 0,
            zoom: void 0,
            minZoom: void 0,
            maxZoom: void 0,
            layers: [],
            maxBounds: void 0,
            renderer: void 0,
            zoomAnimation: !0,
            zoomAnimationThreshold: 4,
            fadeAnimation: !0,
            markerZoomAnimation: !0,
            transform3DLimit: 8388608,
            zoomSnap: 1,
            zoomDelta: 1,
            trackResize: !0
        },
        initialize: function(t, e) {
            e = s(this, e),
            this._initContainer(t),
            this._initLayout(),
            this._onResize = d(this._onResize, this),
            this._initEvents(),
            e.maxBounds && this.setMaxBounds(e.maxBounds),
            void 0 !== e.zoom && (this._zoom = this._limitZoom(e.zoom)),
            e.center && void 0 !== e.zoom && this.setView(w(e.center), e.zoom, {
                reset: !0
            }),
            this._handlers = [],
            this._layers = {},
            this._zoomBoundLayers = {},
            this._sizeChanged = !0,
            this.callInitHooks(),
            this._zoomAnimated = oi && S && !je && this.options.zoomAnimation,
            this._zoomAnimated && (this._createAnimProxy(),
            C(this._proxy, si, this._catchTransitionEnd, this)),
            this._addLayers(this.options.layers)
        },
        setView: function(t, e, i) {
            return e = void 0 === e ? this._zoom : this._limitZoom(e),
            t = this._limitCenter(w(t), e, this.options.maxBounds),
            i = i || {},
            this._stop(),
            this._loaded && !i.reset && !0 !== i && (void 0 !== i.animate && (i.zoom = h({
                animate: i.animate
            }, i.zoom),
            i.pan = h({
                animate: i.animate,
                duration: i.duration
            }, i.pan)),
            this._zoom !== e ? this._tryAnimatedZoom && this._tryAnimatedZoom(t, e, i.zoom) : this._tryAnimatedPan(t, i.pan)) ? clearTimeout(this._sizeTimer) : this._resetView(t, e),
            this
        },
        setZoom: function(t, e) {
            return this._loaded ? this.setView(this.getCenter(), t, {
                zoom: e
            }) : (this._zoom = t,
            this)
        },
        zoomIn: function(t, e) {
            return t = t || (S ? this.options.zoomDelta : 1),
            this.setZoom(this._zoom + t, e)
        },
        zoomOut: function(t, e) {
            return t = t || (S ? this.options.zoomDelta : 1),
            this.setZoom(this._zoom - t, e)
        },
        setZoomAround: function(t, e, i) {
            var n = this.getZoomScale(e)
              , o = this.getSize().divideBy(2)
              , t = (t instanceof _ ? t : this.latLngToContainerPoint(t)).subtract(o).multiplyBy(1 - 1 / n)
              , n = this.containerPointToLatLng(o.add(t));
            return this.setView(n, e, {
                zoom: i
            })
        },
        _getBoundsCenterZoom: function(t, e) {
            e = e || {},
            t = t.getBounds ? t.getBounds() : f(t);
            var i = u(e.paddingTopLeft || e.padding || [0, 0])
              , n = u(e.paddingBottomRight || e.padding || [0, 0])
              , o = this.getBoundsZoom(t, !1, i.add(n));
            if ((o = "number" == typeof e.maxZoom ? Math.min(e.maxZoom, o) : o) === 1 / 0)
                return {
                    center: t.getCenter(),
                    zoom: o
                };
            e = n.subtract(i).divideBy(2),
            n = this.project(t.getSouthWest(), o),
            i = this.project(t.getNorthEast(), o);
            return {
                center: this.unproject(n.add(i).divideBy(2).add(e), o),
                zoom: o
            }
        },
        fitBounds: function(t, e) {
            if (!(t = f(t)).isValid())
                throw new Error("Bounds are not valid.");
            t = this._getBoundsCenterZoom(t, e);
            return this.setView(t.center, t.zoom, e)
        },
        fitWorld: function(t) {
            return this.fitBounds([[-90, -180], [90, 180]], t)
        },
        panTo: function(t, e) {
            return this.setView(t, this._zoom, {
                pan: e
            })
        },
        panBy: function(t, e) {
            return e = e || {},
            (t = u(t).round()).x || t.y ? (!0 === e.animate || this.getSize().contains(t) ? (this._panAnim || (this._panAnim = new di,
            this._panAnim.on({
                step: this._onPanTransitionStep,
                end: this._onPanTransitionEnd
            }, this)),
            e.noMoveStart || this.fire("movestart"),
            !1 !== e.animate ? (x(this._mapPane, "leaflet-pan-anim"),
            i = this._getMapPanePos().subtract(t).round(),
            this._panAnim.run(this._mapPane, i, e.duration || .25, e.easeLinearity)) : (this._rawPanBy(t),
            this.fire("move").fire("moveend"))) : this._resetView(this.unproject(this.project(this.getCenter()).add(t)), this.getZoom()),
            this) : this.fire("moveend");
            var i
        },
        flyTo: function(n, o, t) {
            function e(t) {
                t = (d * d - c * c + (t ? -1 : 1) * m * m * p * p) / (2 * (t ? d : c) * m * p),
                t = Math.sqrt(t * t + 1) - t;
                return t < 1e-9 ? -18 : Math.log(t)
            }
            function i(t) {
                return (Math.exp(t) - Math.exp(-t)) / 2
            }
            function s(t) {
                return (Math.exp(t) + Math.exp(-t)) / 2
            }
            function a(t) {
                return c * (s(f) * (i(t = f + _ * t) / s(t)) - i(f)) / m
            }
            if (!1 === (t = t || {}).animate || !S)
                return this.setView(n, o, t);
            this._stop();
            var r = this.project(this.getCenter())
              , h = this.project(n)
              , l = this.getSize()
              , u = this._zoom
              , c = (n = w(n),
            o = void 0 === o ? u : o,
            Math.max(l.x, l.y))
              , d = c * this.getZoomScale(u, o)
              , p = h.distanceTo(r) || 1
              , _ = 1.42
              , m = _ * _
              , f = e(0)
              , g = Date.now()
              , y = (e(1) - f) / _
              , v = t.duration ? 1e3 * t.duration : 1e3 * y * .8;
            return this._moveStart(!0, t.noMoveStart),
            function t() {
                var e = (Date.now() - g) / v
                  , i = (1 - Math.pow(1 - e, 1.5)) * y;
                e <= 1 ? (this._flyToFrame = b(t, this),
                this._move(this.unproject(r.add(h.subtract(r).multiplyBy(a(i) / p)), u), this.getScaleZoom(c / (e = i,
                c * (s(f) / s(f + _ * e))), u), {
                    flyTo: !0
                })) : this._move(n, o)._moveEnd(!0)
            }
            .call(this),
            this
        },
        flyToBounds: function(t, e) {
            t = this._getBoundsCenterZoom(t, e);
            return this.flyTo(t.center, t.zoom, e)
        },
        setMaxBounds: function(t) {
            return (t = f(t)).isValid() ? (this.options.maxBounds && this.off("moveend", this._panInsideMaxBounds),
            this.options.maxBounds = t,
            this._loaded && this._panInsideMaxBounds(),
            this.on("moveend", this._panInsideMaxBounds)) : (this.options.maxBounds = null,
            this.off("moveend", this._panInsideMaxBounds))
        },
        setMinZoom: function(t) {
            var e = this.options.minZoom;
            return this.options.minZoom = t,
            this._loaded && e !== t && (this.fire("zoomlevelschange"),
            this.getZoom() < this.options.minZoom) ? this.setZoom(t) : this
        },
        setMaxZoom: function(t) {
            var e = this.options.maxZoom;
            return this.options.maxZoom = t,
            this._loaded && e !== t && (this.fire("zoomlevelschange"),
            this.getZoom() > this.options.maxZoom) ? this.setZoom(t) : this
        },
        panInsideBounds: function(t, e) {
            this._enforcingBounds = !0;
            var i = this.getCenter()
              , t = this._limitCenter(i, this._zoom, f(t));
            return i.equals(t) || this.panTo(t, e),
            this._enforcingBounds = !1,
            this
        },
        invalidateSize: function(t) {
            if (!this._loaded)
                return this;
            t = h({
                animate: !1,
                pan: !0
            }, !0 === t ? {
                animate: !0
            } : t);
            var e = this.getSize()
              , i = (this._sizeChanged = !0,
            this._lastCenter = null,
            this.getSize())
              , n = e.divideBy(2).round()
              , o = i.divideBy(2).round()
              , n = n.subtract(o);
            return n.x || n.y ? (t.animate && t.pan ? this.panBy(n) : (t.pan && this._rawPanBy(n),
            this.fire("move"),
            t.debounceMoveend ? (clearTimeout(this._sizeTimer),
            this._sizeTimer = setTimeout(d(this.fire, this, "moveend"), 200)) : this.fire("moveend")),
            this.fire("resize", {
                oldSize: e,
                newSize: i
            })) : this
        },
        stop: function() {
            return this.setZoom(this._limitZoom(this._zoom)),
            this.options.zoomSnap || this.fire("viewreset"),
            this._stop()
        },
        locate: function(t) {
            var e, i;
            return (t = this._locateOptions = h({
                timeout: 1e4,
                watch: !1
            }, t),
            "geolocation"in navigator) ? (e = d(this._handleGeolocationResponse, this),
            i = d(this._handleGeolocationError, this),
            t.watch ? this._locationWatchId = navigator.geolocation.watchPosition(e, i, t) : navigator.geolocation.getCurrentPosition(e, i, t)) : this._handleGeolocationError({
                code: 0,
                message: "Geolocation not supported."
            }),
            this
        },
        stopLocate: function() {
            return navigator.geolocation && navigator.geolocation.clearWatch && navigator.geolocation.clearWatch(this._locationWatchId),
            this._locateOptions && (this._locateOptions.setView = !1),
            this
        },
        _handleGeolocationError: function(t) {
            var e = t.code
              , t = t.message || (1 === e ? "permission denied" : 2 === e ? "position unavailable" : "timeout");
            this._locateOptions.setView && !this._loaded && this.fitWorld(),
            this.fire("locationerror", {
                code: e,
                message: "Geolocation error: " + t + "."
            })
        },
        _handleGeolocationResponse: function(t) {
            var e, i, n = new g(t.coords.latitude,t.coords.longitude), o = n.toBounds(2 * t.coords.accuracy), s = this._locateOptions, a = (s.setView && (e = this.getBoundsZoom(o),
            this.setView(n, s.maxZoom ? Math.min(e, s.maxZoom) : e)),
            {
                latlng: n,
                bounds: o,
                timestamp: t.timestamp
            });
            for (i in t.coords)
                "number" == typeof t.coords[i] && (a[i] = t.coords[i]);
            this.fire("locationfound", a)
        },
        addHandler: function(t, e) {
            return e && (e = this[t] = new e(this),
            this._handlers.push(e),
            this.options[t] && e.enable()),
            this
        },
        remove: function() {
            if (this._initEvents(!0),
            this._containerId !== this._container._leaflet_id)
                throw new Error("Map container is being reused by another instance");
            try {
                delete this._container._leaflet_id,
                delete this._containerId
            } catch (t) {
                this._container._leaflet_id = void 0,
                this._containerId = void 0
            }
            for (var t in void 0 !== this._locationWatchId && this.stopLocate(),
            this._stop(),
            v(this._mapPane),
            this._clearControlPos && this._clearControlPos(),
            this._resizeRequest && (a(this._resizeRequest),
            this._resizeRequest = null),
            this._clearHandlers(),
            this._loaded && this.fire("unload"),
            this._layers)
                this._layers[t].remove();
            for (t in this._panes)
                v(this._panes[t]);
            return this._layers = [],
            this._panes = [],
            delete this._mapPane,
            delete this._renderer,
            this
        },
        createPane: function(t, e) {
            e = y("div", "leaflet-pane" + (t ? " leaflet-" + t.replace("Pane", "") + "-pane" : ""), e || this._mapPane);
            return t && (this._panes[t] = e),
            e
        },
        getCenter: function() {
            return this._checkIfLoaded(),
            this._lastCenter && !this._moved() ? this._lastCenter : this.layerPointToLatLng(this._getCenterLayerPoint())
        },
        getZoom: function() {
            return this._zoom
        },
        getBounds: function() {
            var t = this.getPixelBounds();
            return new p(this.unproject(t.getBottomLeft()),this.unproject(t.getTopRight()))
        },
        getMinZoom: function() {
            return void 0 === this.options.minZoom ? this._layersMinZoom || 0 : this.options.minZoom
        },
        getMaxZoom: function() {
            return void 0 === this.options.maxZoom ? void 0 === this._layersMaxZoom ? 1 / 0 : this._layersMaxZoom : this.options.maxZoom
        },
        getBoundsZoom: function(t, e, i) {
            t = f(t),
            i = u(i || [0, 0]);
            var n = this.getZoom() || 0
              , o = this.getMinZoom()
              , s = this.getMaxZoom()
              , a = t.getNorthWest()
              , t = t.getSouthEast()
              , i = this.getSize().subtract(i)
              , t = c(this.project(t, n), this.project(a, n)).getSize()
              , a = S ? this.options.zoomSnap : 1
              , r = i.x / t.x
              , i = i.y / t.y
              , t = e ? Math.max(r, i) : Math.min(r, i)
              , n = this.getScaleZoom(t, n);
            return a && (n = Math.round(n / (a / 100)) * (a / 100),
            n = e ? Math.ceil(n / a) * a : Math.floor(n / a) * a),
            Math.max(o, Math.min(s, n))
        },
        getSize: function() {
            return this._size && !this._sizeChanged || (this._size = new _(this._container.clientWidth || 0,this._container.clientHeight || 0),
            this._sizeChanged = !1),
            this._size.clone()
        },
        getPixelBounds: function(t, e) {
            t = this._getTopLeftPoint(t, e);
            return new m(t,t.add(this.getSize()))
        },
        getPixelOrigin: function() {
            return this._checkIfLoaded(),
            this._pixelOrigin
        },
        getPixelWorldBounds: function(t) {
            return this.options.crs.getProjectedBounds(void 0 === t ? this.getZoom() : t)
        },
        getPane: function(t) {
            return "string" == typeof t ? this._panes[t] : t
        },
        getPanes: function() {
            return this._panes
        },
        getContainer: function() {
            return this._container
        },
        getZoomScale: function(t, e) {
            var i = this.options.crs;
            return e = void 0 === e ? this._zoom : e,
            i.scale(t) / i.scale(e)
        },
        getScaleZoom: function(t, e) {
            var i = this.options.crs
              , t = (e = void 0 === e ? this._zoom : e,
            i.zoom(t * i.scale(e)));
            return isNaN(t) ? 1 / 0 : t
        },
        project: function(t, e) {
            return e = void 0 === e ? this._zoom : e,
            this.options.crs.latLngToPoint(w(t), e)
        },
        unproject: function(t, e) {
            return e = void 0 === e ? this._zoom : e,
            this.options.crs.pointToLatLng(u(t), e)
        },
        layerPointToLatLng: function(t) {
            t = u(t).add(this.getPixelOrigin());
            return this.unproject(t)
        },
        latLngToLayerPoint: function(t) {
            return this.project(w(t))._round()._subtract(this.getPixelOrigin())
        },
        wrapLatLng: function(t) {
            return this.options.crs.wrapLatLng(w(t))
        },
        wrapLatLngBounds: function(t) {
            return this.options.crs.wrapLatLngBounds(f(t))
        },
        distance: function(t, e) {
            return this.options.crs.distance(w(t), w(e))
        },
        containerPointToLayerPoint: function(t) {
            return u(t).subtract(this._getMapPanePos())
        },
        layerPointToContainerPoint: function(t) {
            return u(t).add(this._getMapPanePos())
        },
        containerPointToLatLng: function(t) {
            t = this.containerPointToLayerPoint(u(t));
            return this.layerPointToLatLng(t)
        },
        latLngToContainerPoint: function(t) {
            return this.layerPointToContainerPoint(this.latLngToLayerPoint(w(t)))
        },
        mouseEventToContainerPoint: function(t) {
            return Ct(t, this._container)
        },
        mouseEventToLayerPoint: function(t) {
            return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))
        },
        mouseEventToLatLng: function(t) {
            return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))
        },
        _initContainer: function(t) {
            t = this._container = ot(t);
            if (!t)
                throw new Error("Map container not found.");
            if (t._leaflet_id)
                throw new Error("Map container is already initialized.");
            C(t, "scroll", this._onScroll, this),
            this._containerId = r(t)
        },
        _initLayout: function() {
            var t = this._container
              , e = (this._fadeAnimated = this.options.fadeAnimation && S,
            x(t, "leaflet-container" + (Ne ? " leaflet-touch" : "") + (We ? " leaflet-retina" : "") + (we ? " leaflet-oldie" : "") + (Ee ? " leaflet-safari" : "") + (this._fadeAnimated ? " leaflet-fade-anim" : "")),
            st(t, "position"));
            "absolute" !== e && "relative" !== e && "fixed" !== e && (t.style.position = "relative"),
            this._initPanes(),
            this._initControlPos && this._initControlPos()
        },
        _initPanes: function() {
            var t = this._panes = {};
            this._paneRenderers = {},
            this._mapPane = this.createPane("mapPane", this._container),
            M(this._mapPane, new _(0,0)),
            this.createPane("tilePane"),
            this.createPane("shadowPane"),
            this.createPane("overlayPane"),
            this.createPane("markerPane"),
            this.createPane("tooltipPane"),
            this.createPane("popupPane"),
            this.options.markerZoomAnimation || (x(t.markerPane, "leaflet-zoom-hide"),
            x(t.shadowPane, "leaflet-zoom-hide"))
        },
        _resetView: function(t, e) {
            M(this._mapPane, new _(0,0));
            var i = !this._loaded
              , n = (this._loaded = !0,
            e = this._limitZoom(e),
            this.fire("viewprereset"),
            this._zoom !== e);
            this._moveStart(n, !1)._move(t, e)._moveEnd(n),
            this.fire("viewreset"),
            i && this.fire("load")
        },
        _moveStart: function(t, e) {
            return t && this.fire("zoomstart"),
            e || this.fire("movestart"),
            this
        },
        _move: function(t, e, i) {
            void 0 === e && (e = this._zoom);
            var n = this._zoom !== e;
            return this._zoom = e,
            this._lastCenter = t,
            this._pixelOrigin = this._getNewPixelOrigin(t),
            (n || i && i.pinch) && this.fire("zoom", i),
            this.fire("move", i)
        },
        _moveEnd: function(t) {
            return t && this.fire("zoomend"),
            this.fire("moveend")
        },
        _stop: function() {
            return a(this._flyToFrame),
            this._panAnim && this._panAnim.stop(),
            this
        },
        _rawPanBy: function(t) {
            M(this._mapPane, this._getMapPanePos().subtract(t))
        },
        _getZoomSpan: function() {
            return this.getMaxZoom() - this.getMinZoom()
        },
        _panInsideMaxBounds: function() {
            this._enforcingBounds || this.panInsideBounds(this.options.maxBounds)
        },
        _checkIfLoaded: function() {
            if (!this._loaded)
                throw new Error("Set map center and zoom first.")
        },
        _initEvents: function(t) {
            this._targets = {};
            var e = t ? n : C;
            e((this._targets[r(this._container)] = this)._container, "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress", this._handleDOMEvent, this),
            this.options.trackResize && e(window, "resize", this._onResize, this),
            S && this.options.transform3DLimit && (t ? this.off : this.on).call(this, "moveend", this._onMoveEnd)
        },
        _onResize: function() {
            a(this._resizeRequest),
            this._resizeRequest = b(function() {
                this.invalidateSize({
                    debounceMoveend: !0
                })
            }, this)
        },
        _onScroll: function() {
            this._container.scrollTop = 0,
            this._container.scrollLeft = 0
        },
        _onMoveEnd: function() {
            var t = this._getMapPanePos();
            Math.max(Math.abs(t.x), Math.abs(t.y)) >= this.options.transform3DLimit && this._resetView(this.getCenter(), this.getZoom())
        },
        _findEventTargets: function(t, e) {
            for (var i, n = [], o = "mouseout" === e || "mouseover" === e, s = t.target || t.srcElement, a = !1; s; ) {
                if ((i = this._targets[r(s)]) && ("click" === e || "preclick" === e) && !t._simulated && this._draggableMoved(i)) {
                    a = !0;
                    break
                }
                if (i && i.listens(e, !0)) {
                    if (o && !Et(s, t))
                        break;
                    if (n.push(i),
                    o)
                        break
                }
                if (s === this._container)
                    break;
                s = s.parentNode
            }
            return n = n.length || a || o || !Et(s, t) ? n : [this]
        },
        _handleDOMEvent: function(t) {
            var e;
            this._loaded && !St(t) && ("mousedown" !== (e = t.type) && "keypress" !== e || gt(t.target || t.srcElement),
            this._fireDOMEvent(t, e))
        },
        _mouseEvents: ["click", "dblclick", "mouseover", "mouseout", "contextmenu"],
        _fireDOMEvent: function(t, e, i) {
            if ("click" === t.type && ((o = h({}, t)).type = "preclick",
            this._fireDOMEvent(o, o.type, i)),
            !t._stopped && (i = (i || []).concat(this._findEventTargets(t, e))).length) {
                var n, o = i[0], s = ("contextmenu" === e && o.listens(e, !0) && z(t),
                {
                    originalEvent: t
                });
                "keypress" !== t.type && (n = o.getLatLng && (!o._radius || o._radius <= 10),
                s.containerPoint = n ? this.latLngToContainerPoint(o.getLatLng()) : this.mouseEventToContainerPoint(t),
                s.layerPoint = this.containerPointToLayerPoint(s.containerPoint),
                s.latlng = n ? o.getLatLng() : this.layerPointToLatLng(s.layerPoint));
                for (var a = 0; a < i.length; a++)
                    if (i[a].fire(e, s, !0),
                    s.originalEvent._stopped || !1 === i[a].options.bubblingMouseEvents && -1 !== F(this._mouseEvents, e))
                        return
            }
        },
        _draggableMoved: function(t) {
            return (t = t.dragging && t.dragging.enabled() ? t : this).dragging && t.dragging.moved() || this.boxZoom && this.boxZoom.moved()
        },
        _clearHandlers: function() {
            for (var t = 0, e = this._handlers.length; t < e; t++)
                this._handlers[t].disable()
        },
        whenReady: function(t, e) {
            return this._loaded ? t.call(e || this, {
                target: this
            }) : this.on("load", t, e),
            this
        },
        _getMapPanePos: function() {
            return _t(this._mapPane) || new _(0,0)
        },
        _moved: function() {
            var t = this._getMapPanePos();
            return t && !t.equals([0, 0])
        },
        _getTopLeftPoint: function(t, e) {
            return (t && void 0 !== e ? this._getNewPixelOrigin(t, e) : this.getPixelOrigin()).subtract(this._getMapPanePos())
        },
        _getNewPixelOrigin: function(t, e) {
            var i = this.getSize()._divideBy(2);
            return this.project(t, e)._subtract(i)._add(this._getMapPanePos())._round()
        },
        _latLngToNewLayerPoint: function(t, e, i) {
            i = this._getNewPixelOrigin(i, e);
            return this.project(t, e)._subtract(i)
        },
        _latLngBoundsToNewLayerBounds: function(t, e, i) {
            i = this._getNewPixelOrigin(i, e);
            return c([this.project(t.getSouthWest(), e)._subtract(i), this.project(t.getNorthWest(), e)._subtract(i), this.project(t.getSouthEast(), e)._subtract(i), this.project(t.getNorthEast(), e)._subtract(i)])
        },
        _getCenterLayerPoint: function() {
            return this.containerPointToLayerPoint(this.getSize()._divideBy(2))
        },
        _getCenterOffset: function(t) {
            return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())
        },
        _limitCenter: function(t, e, i) {
            if (!i)
                return t;
            var n = this.project(t, e)
              , o = this.getSize().divideBy(2)
              , o = new m(n.subtract(o),n.add(o))
              , o = this._getBoundsOffset(o, i, e);
            return o.round().equals([0, 0]) ? t : this.unproject(n.add(o), e)
        },
        _limitOffset: function(t, e) {
            if (!e)
                return t;
            var i = this.getPixelBounds()
              , i = new m(i.min.add(t),i.max.add(t));
            return t.add(this._getBoundsOffset(i, e))
        },
        _getBoundsOffset: function(t, e, i) {
            e = c(this.project(e.getNorthEast(), i), this.project(e.getSouthWest(), i)),
            i = e.min.subtract(t.min),
            e = e.max.subtract(t.max);
            return new _(this._rebound(i.x, -e.x),this._rebound(i.y, -e.y))
        },
        _rebound: function(t, e) {
            return 0 < t + e ? Math.round(t - e) / 2 : Math.max(0, Math.ceil(t)) - Math.max(0, Math.floor(e))
        },
        _limitZoom: function(t) {
            var e = this.getMinZoom()
              , i = this.getMaxZoom()
              , n = S ? this.options.zoomSnap : 1;
            return n && (t = Math.round(t / n) * n),
            Math.max(e, Math.min(i, t))
        },
        _onPanTransitionStep: function() {
            this.fire("move")
        },
        _onPanTransitionEnd: function() {
            P(this._mapPane, "leaflet-pan-anim"),
            this.fire("moveend")
        },
        _tryAnimatedPan: function(t, e) {
            t = this._getCenterOffset(t)._trunc();
            return !(!0 !== (e && e.animate) && !this.getSize().contains(t) || (this.panBy(t, e),
            0))
        },
        _createAnimProxy: function() {
            var t = this._proxy = y("div", "leaflet-proxy leaflet-zoom-animated");
            this._panes.mapPane.appendChild(t),
            this.on("zoomanim", function(t) {
                var e = ni
                  , i = this._proxy.style[e];
                pt(this._proxy, this.project(t.center, t.zoom), this.getZoomScale(t.zoom, 1)),
                i === this._proxy.style[e] && this._animatingZoom && this._onZoomTransitionEnd()
            }, this),
            this.on("load moveend", function() {
                var t = this.getCenter()
                  , e = this.getZoom();
                pt(this._proxy, this.project(t, e), this.getZoomScale(e, 1))
            }, this),
            this._on("unload", this._destroyAnimProxy, this)
        },
        _destroyAnimProxy: function() {
            v(this._proxy),
            delete this._proxy
        },
        _catchTransitionEnd: function(t) {
            this._animatingZoom && 0 <= t.propertyName.indexOf("transform") && this._onZoomTransitionEnd()
        },
        _nothingToAnimate: function() {
            return !this._container.getElementsByClassName("leaflet-zoom-animated").length
        },
        _tryAnimatedZoom: function(t, e, i) {
            if (this._animatingZoom)
                return !0;
            if (i = i || {},
            !this._zoomAnimated || !1 === i.animate || this._nothingToAnimate() || Math.abs(e - this._zoom) > this.options.zoomAnimationThreshold)
                return !1;
            var n = this.getZoomScale(e)
              , n = this._getCenterOffset(t)._divideBy(1 - 1 / n);
            return !(!0 !== i.animate && !this.getSize().contains(n) || (b(function() {
                this._moveStart(!0, !1)._animateZoom(t, e, !0)
            }, this),
            0))
        },
        _animateZoom: function(t, e, i, n) {
            this._mapPane && (i && (this._animatingZoom = !0,
            this._animateToCenter = t,
            this._animateToZoom = e,
            x(this._mapPane, "leaflet-zoom-anim")),
            this.fire("zoomanim", {
                center: t,
                zoom: e,
                noUpdate: n
            }),
            setTimeout(d(this._onZoomTransitionEnd, this), 250))
        },
        _onZoomTransitionEnd: function() {
            this._animatingZoom && (this._mapPane && P(this._mapPane, "leaflet-zoom-anim"),
            this._animatingZoom = !1,
            this._move(this._animateToCenter, this._animateToZoom),
            b(function() {
                this._moveEnd(!0)
            }, this))
        }
    }), I = G.extend({
        options: {
            position: "topright"
        },
        initialize: function(t) {
            s(this, t)
        },
        getPosition: function() {
            return this.options.position
        },
        setPosition: function(t) {
            var e = this._map;
            return e && e.removeControl(this),
            this.options.position = t,
            e && e.addControl(this),
            this
        },
        getContainer: function() {
            return this._container
        },
        addTo: function(t) {
            this.remove(),
            this._map = t;
            var e = this._container = this.onAdd(t)
              , i = this.getPosition()
              , t = t._controlCorners[i];
            return x(e, "leaflet-control"),
            -1 !== i.indexOf("bottom") ? t.insertBefore(e, t.firstChild) : t.appendChild(e),
            this
        },
        remove: function() {
            return this._map && (v(this._container),
            this.onRemove && this.onRemove(this._map),
            this._map = null),
            this
        },
        _refocusOnMap: function(t) {
            this._map && t && 0 < t.screenX && 0 < t.screenY && this._map.getContainer().focus()
        }
    }), pi = (Z.include({
        addControl: function(t) {
            return t.addTo(this),
            this
        },
        removeControl: function(t) {
            return t.remove(),
            this
        },
        _initControlPos: function() {
            function t(t, e) {
                i[t + e] = y("div", n + t + " " + n + e, o)
            }
            var i = this._controlCorners = {}
              , n = "leaflet-"
              , o = this._controlContainer = y("div", n + "control-container", this._container);
            t("top", "left"),
            t("top", "right"),
            t("bottom", "left"),
            t("bottom", "right")
        },
        _clearControlPos: function() {
            for (var t in this._controlCorners)
                v(this._controlCorners[t]);
            v(this._controlContainer),
            delete this._controlCorners,
            delete this._controlContainer
        }
    }),
    I.extend({
        options: {
            collapsed: !0,
            position: "topright",
            autoZIndex: !0,
            hideSingleBase: !1,
            sortLayers: !1,
            sortFunction: function(t, e, i, n) {
                return i < n ? -1 : n < i ? 1 : 0
            }
        },
        initialize: function(t, e, i) {
            for (var n in s(this, i),
            this._layerControlInputs = [],
            this._layers = [],
            this._lastZIndex = 0,
            this._handlingClick = !1,
            t)
                this._addLayer(t[n], n);
            for (n in e)
                this._addLayer(e[n], n, !0)
        },
        onAdd: function(t) {
            this._initLayout(),
            this._update(),
            (this._map = t).on("zoomend", this._checkDisabledLayers, this);
            for (var e = 0; e < this._layers.length; e++)
                this._layers[e].layer.on("add remove", this._onLayerChange, this);
            return this._container
        },
        addTo: function(t) {
            return I.prototype.addTo.call(this, t),
            this._expandIfNotCollapsed()
        },
        onRemove: function() {
            this._map.off("zoomend", this._checkDisabledLayers, this);
            for (var t = 0; t < this._layers.length; t++)
                this._layers[t].layer.off("add remove", this._onLayerChange, this)
        },
        addBaseLayer: function(t, e) {
            return this._addLayer(t, e),
            this._map ? this._update() : this
        },
        addOverlay: function(t, e) {
            return this._addLayer(t, e, !0),
            this._map ? this._update() : this
        },
        removeLayer: function(t) {
            t.off("add remove", this._onLayerChange, this);
            t = this._getLayer(r(t));
            return t && this._layers.splice(this._layers.indexOf(t), 1),
            this._map ? this._update() : this
        },
        expand: function() {
            x(this._container, "leaflet-control-layers-expanded"),
            this._form.style.height = null;
            var t = this._map.getSize().y - (this._container.offsetTop + 50);
            return t < this._form.clientHeight ? (x(this._form, "leaflet-control-layers-scrollbar"),
            this._form.style.height = t + "px") : P(this._form, "leaflet-control-layers-scrollbar"),
            this._checkDisabledLayers(),
            this
        },
        collapse: function() {
            return P(this._container, "leaflet-control-layers-expanded"),
            this
        },
        _initLayout: function() {
            var t = "leaflet-control-layers"
              , e = this._container = y("div", t)
              , i = this.options.collapsed
              , n = (e.setAttribute("aria-haspopup", !0),
            Tt(e),
            Pt(e),
            this._form = y("form", t + "-list"))
              , o = (i && (this._map.on("click", this.collapse, this),
            Te || C(e, {
                mouseenter: this.expand,
                mouseleave: this.collapse
            }, this)),
            this._layersLink = y("a", t + "-toggle", e));
            o.href = "#",
            o.title = "Layers",
            Ne ? (C(o, "click", Mt),
            C(o, "click", this.expand, this)) : C(o, "focus", this.expand, this),
            i || this.expand(),
            this._baseLayersList = y("div", t + "-base", n),
            this._separator = y("div", t + "-separator", n),
            this._overlaysList = y("div", t + "-overlays", n),
            e.appendChild(n)
        },
        _getLayer: function(t) {
            for (var e = 0; e < this._layers.length; e++)
                if (this._layers[e] && r(this._layers[e].layer) === t)
                    return this._layers[e]
        },
        _addLayer: function(t, e, i) {
            this._map && t.on("add remove", this._onLayerChange, this),
            this._layers.push({
                layer: t,
                name: e,
                overlay: i
            }),
            this.options.sortLayers && this._layers.sort(d(function(t, e) {
                return this.options.sortFunction(t.layer, e.layer, t.name, e.name)
            }, this)),
            this.options.autoZIndex && t.setZIndex && (this._lastZIndex++,
            t.setZIndex(this._lastZIndex)),
            this._expandIfNotCollapsed()
        },
        _update: function() {
            if (this._container) {
                at(this._baseLayersList),
                at(this._overlaysList),
                this._layerControlInputs = [];
                for (var t, e, i, n = 0, o = 0; o < this._layers.length; o++)
                    i = this._layers[o],
                    this._addItem(i),
                    e = e || i.overlay,
                    t = t || !i.overlay,
                    n += i.overlay ? 0 : 1;
                this.options.hideSingleBase && (this._baseLayersList.style.display = (t = t && 1 < n) ? "" : "none"),
                this._separator.style.display = e && t ? "" : "none"
            }
            return this
        },
        _onLayerChange: function(t) {
            this._handlingClick || this._update();
            var e = this._getLayer(r(t.target))
              , t = e.overlay ? "add" === t.type ? "overlayadd" : "overlayremove" : "add" === t.type ? "baselayerchange" : null;
            t && this._map.fire(t, e)
        },
        _createRadioElement: function(t, e) {
            t = '<input type="radio" class="leaflet-control-layers-selector" name="' + t + '"' + (e ? ' checked="checked"' : "") + "/>",
            e = document.createElement("div");
            return e.innerHTML = t,
            e.firstChild
        },
        _addItem: function(t) {
            var e, i = document.createElement("label"), n = this._map.hasLayer(t.layer), n = (t.overlay ? ((e = document.createElement("input")).type = "checkbox",
            e.className = "leaflet-control-layers-selector",
            e.defaultChecked = n) : e = this._createRadioElement("leaflet-base-layers", n),
            this._layerControlInputs.push(e),
            e.layerId = r(t.layer),
            C(e, "click", this._onInputClick, this),
            document.createElement("span")), o = (n.innerHTML = " " + t.name,
            document.createElement("div"));
            return i.appendChild(o),
            o.appendChild(e),
            o.appendChild(n),
            (t.overlay ? this._overlaysList : this._baseLayersList).appendChild(i),
            this._checkDisabledLayers(),
            i
        },
        _onInputClick: function() {
            var t, e, i = this._layerControlInputs, n = [], o = [];
            this._handlingClick = !0;
            for (var s = i.length - 1; 0 <= s; s--)
                t = i[s],
                e = this._getLayer(t.layerId).layer,
                t.checked ? n.push(e) : t.checked || o.push(e);
            for (s = 0; s < o.length; s++)
                this._map.hasLayer(o[s]) && this._map.removeLayer(o[s]);
            for (s = 0; s < n.length; s++)
                this._map.hasLayer(n[s]) || this._map.addLayer(n[s]);
            this._handlingClick = !1,
            this._refocusOnMap()
        },
        _checkDisabledLayers: function() {
            for (var t, e, i = this._layerControlInputs, n = this._map.getZoom(), o = i.length - 1; 0 <= o; o--)
                t = i[o],
                e = this._getLayer(t.layerId).layer,
                t.disabled = void 0 !== e.options.minZoom && n < e.options.minZoom || void 0 !== e.options.maxZoom && n > e.options.maxZoom
        },
        _expandIfNotCollapsed: function() {
            return this._map && !this.options.collapsed && this.expand(),
            this
        },
        _expand: function() {
            return this.expand()
        },
        _collapse: function() {
            return this.collapse()
        }
    })), _i = I.extend({
        options: {
            position: "topleft",
            zoomInText: "+",
            zoomInTitle: "Zoom in",
            zoomOutText: "&#x2212;",
            zoomOutTitle: "Zoom out"
        },
        onAdd: function(t) {
            var e = "leaflet-control-zoom"
              , i = y("div", e + " leaflet-bar")
              , n = this.options;
            return this._zoomInButton = this._createButton(n.zoomInText, n.zoomInTitle, e + "-in", i, this._zoomIn),
            this._zoomOutButton = this._createButton(n.zoomOutText, n.zoomOutTitle, e + "-out", i, this._zoomOut),
            this._updateDisabled(),
            t.on("zoomend zoomlevelschange", this._updateDisabled, this),
            i
        },
        onRemove: function(t) {
            t.off("zoomend zoomlevelschange", this._updateDisabled, this)
        },
        disable: function() {
            return this._disabled = !0,
            this._updateDisabled(),
            this
        },
        enable: function() {
            return this._disabled = !1,
            this._updateDisabled(),
            this
        },
        _zoomIn: function(t) {
            !this._disabled && this._map._zoom < this._map.getMaxZoom() && this._map.zoomIn(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1))
        },
        _zoomOut: function(t) {
            !this._disabled && this._map._zoom > this._map.getMinZoom() && this._map.zoomOut(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1))
        },
        _createButton: function(t, e, i, n, o) {
            i = y("a", i, n);
            return i.innerHTML = t,
            i.href = "#",
            i.title = e,
            i.setAttribute("role", "button"),
            i.setAttribute("aria-label", e),
            Tt(i),
            C(i, "click", Mt),
            C(i, "click", o, this),
            C(i, "click", this._refocusOnMap, this),
            i
        },
        _updateDisabled: function() {
            var t = this._map
              , e = "leaflet-disabled";
            P(this._zoomInButton, e),
            P(this._zoomOutButton, e),
            !this._disabled && t._zoom !== t.getMinZoom() || x(this._zoomOutButton, e),
            !this._disabled && t._zoom !== t.getMaxZoom() || x(this._zoomInButton, e)
        }
    }), mi = (Z.mergeOptions({
        zoomControl: !0
    }),
    Z.addInitHook(function() {
        this.options.zoomControl && (this.zoomControl = new _i,
        this.addControl(this.zoomControl))
    }),
    I.extend({
        options: {
            position: "bottomleft",
            maxWidth: 100,
            metric: !0,
            imperial: !0
        },
        onAdd: function(t) {
            var e = y("div", "leaflet-control-scale")
              , i = this.options;
            return this._addScales(i, "leaflet-control-scale-line", e),
            t.on(i.updateWhenIdle ? "moveend" : "move", this._update, this),
            t.whenReady(this._update, this),
            e
        },
        onRemove: function(t) {
            t.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this)
        },
        _addScales: function(t, e, i) {
            t.metric && (this._mScale = y("div", e, i)),
            t.imperial && (this._iScale = y("div", e, i))
        },
        _update: function() {
            var t = this._map
              , e = t.getSize().y / 2
              , t = t.distance(t.containerPointToLatLng([0, e]), t.containerPointToLatLng([this.options.maxWidth, e]));
            this._updateScales(t)
        },
        _updateScales: function(t) {
            this.options.metric && t && this._updateMetric(t),
            this.options.imperial && t && this._updateImperial(t)
        },
        _updateMetric: function(t) {
            var e = this._getRoundNum(t);
            this._updateScale(this._mScale, e < 1e3 ? e + " m" : e / 1e3 + " km", e / t)
        },
        _updateImperial: function(t) {
            var e, i, t = 3.2808399 * t;
            5280 < t ? (i = this._getRoundNum(e = t / 5280),
            this._updateScale(this._iScale, i + " mi", i / e)) : (i = this._getRoundNum(t),
            this._updateScale(this._iScale, i + " ft", i / t))
        },
        _updateScale: function(t, e, i) {
            t.style.width = Math.round(this.options.maxWidth * i) + "px",
            t.innerHTML = e
        },
        _getRoundNum: function(t) {
            var e = Math.pow(10, (Math.floor(t) + "").length - 1)
              , t = t / e;
            return e * (t = 10 <= t ? 10 : 5 <= t ? 5 : 3 <= t ? 3 : 2 <= t ? 2 : 1)
        }
    })), fi = I.extend({
        options: {
            position: "bottomright",
            prefix: ""
        },
        initialize: function(t) {
            s(this, t),
            this._attributions = {}
        },
        onAdd: function(t) {
            for (var e in (t.attributionControl = this)._container = y("div", "leaflet-control-attribution"),
            Tt(this._container),
            t._layers)
                t._layers[e].getAttribution && this.addAttribution(t._layers[e].getAttribution());
            return this._update(),
            this._container
        },
        setPrefix: function(t) {
            return this.options.prefix = t,
            this._update(),
            this
        },
        addAttribution: function(t) {
            return t && (this._attributions[t] || (this._attributions[t] = 0),
            this._attributions[t]++,
            this._update()),
            this
        },
        removeAttribution: function(t) {
            return t && this._attributions[t] && (this._attributions[t]--,
            this._update()),
            this
        },
        _update: function() {
            if (this._map) {
                var t, e = [];
                for (t in this._attributions)
                    this._attributions[t] && e.push(t);
                var i = [];
                this.options.prefix && i.push(this.options.prefix),
                e.length && i.push(e.join(", ")),
                this._container.innerHTML = i.join(" | ")
            }
        }
    }), k = (Z.mergeOptions({
        attributionControl: !0
    }),
    Z.addInitHook(function() {
        this.options.attributionControl && (new fi).addTo(this)
    }),
    I.Layers = pi,
    I.Zoom = _i,
    I.Scale = mi,
    I.Attribution = fi,
    ai.layers = function(t, e, i) {
        return new pi(t,e,i)
    }
    ,
    ai.zoom = function(t) {
        return new _i(t)
    }
    ,
    ai.scale = function(t) {
        return new mi(t)
    }
    ,
    ai.attribution = function(t) {
        return new fi(t)
    }
    ,
    G.extend({
        initialize: function(t) {
            this._map = t
        },
        enable: function() {
            return this._enabled || (this._enabled = !0,
            this.addHooks()),
            this
        },
        disable: function() {
            return this._enabled && (this._enabled = !1,
            this.removeHooks()),
            this
        },
        enabled: function() {
            return !!this._enabled
        }
    }));
    k.addTo = function(t, e) {
        return t.addHandler(e, this),
        this
    }
    ;
    var gi, Ae = {
        Events: o
    }, yi = Ne ? "touchstart mousedown" : "mousedown", vi = {
        mousedown: "mouseup",
        touchstart: "touchend",
        pointerdown: "touchend",
        MSPointerDown: "touchend"
    }, Li = {
        mousedown: "mousemove",
        touchstart: "touchmove",
        pointerdown: "touchmove",
        MSPointerDown: "touchmove"
    }, bi = le.extend({
        options: {
            clickTolerance: 3
        },
        initialize: function(t, e, i, n) {
            s(this, n),
            this._element = t,
            this._dragStartTarget = e || t,
            this._preventOutline = i
        },
        enable: function() {
            this._enabled || (C(this._dragStartTarget, yi, this._onDown, this),
            this._enabled = !0)
        },
        disable: function() {
            this._enabled && (bi._dragging === this && this.finishDrag(),
            n(this._dragStartTarget, yi, this._onDown, this),
            this._enabled = !1,
            this._moved = !1)
        },
        _onDown: function(t) {
            var e, i;
            t._simulated || !this._enabled || (this._moved = !1,
            lt(this._element, "leaflet-zoom-anim") || bi._dragging || t.shiftKey || 1 !== t.which && 1 !== t.button && !t.touches || ((bi._dragging = this)._preventOutline && gt(this._element),
            mt(),
            fe(),
            this._moving)) || (this.fire("down"),
            e = t.touches ? t.touches[0] : t,
            i = vt(this._element),
            this._startPoint = new _(e.clientX,e.clientY),
            this._parentScale = Lt(i),
            C(document, Li[t.type], this._onMove, this),
            C(document, vi[t.type], this._onUp, this))
        },
        _onMove: function(t) {
            var e;
            !t._simulated && this._enabled && (t.touches && 1 < t.touches.length ? this._moved = !0 : !(e = new _((e = t.touches && 1 === t.touches.length ? t.touches[0] : t).clientX,e.clientY)._subtract(this._startPoint)).x && !e.y || Math.abs(e.x) + Math.abs(e.y) < this.options.clickTolerance || (e.x /= this._parentScale.x,
            e.y /= this._parentScale.y,
            z(t),
            this._moved || (this.fire("dragstart"),
            this._moved = !0,
            this._startPos = _t(this._element).subtract(e),
            x(document.body, "leaflet-dragging"),
            this._lastTarget = t.target || t.srcElement,
            window.SVGElementInstance && this._lastTarget instanceof SVGElementInstance && (this._lastTarget = this._lastTarget.correspondingUseElement),
            x(this._lastTarget, "leaflet-drag-target")),
            this._newPos = this._startPos.add(e),
            this._moving = !0,
            a(this._animRequest),
            this._lastEvent = t,
            this._animRequest = b(this._updatePosition, this, !0)))
        },
        _updatePosition: function() {
            var t = {
                originalEvent: this._lastEvent
            };
            this.fire("predrag", t),
            M(this._element, this._newPos),
            this.fire("drag", t)
        },
        _onUp: function(t) {
            !t._simulated && this._enabled && this.finishDrag()
        },
        finishDrag: function() {
            for (var t in P(document.body, "leaflet-dragging"),
            this._lastTarget && (P(this._lastTarget, "leaflet-drag-target"),
            this._lastTarget = null),
            Li)
                n(document, Li[t], this._onMove, this),
                n(document, vi[t], this._onUp, this);
            ft(),
            ge(),
            this._moved && this._moving && (a(this._animRequest),
            this.fire("dragend", {
                distance: this._newPos.distanceTo(this._startPos)
            })),
            this._moving = !1,
            bi._dragging = !1
        }
    }), Ie = (Object.freeze || Object)({
        simplify: At,
        pointToSegmentDistance: Ot,
        closestPointOnSegment: function(t, e, i) {
            return Dt(t, e, i)
        },
        clipSegment: Zt,
        _getEdgeIntersection: It,
        _getBitCode: Bt,
        _sqClosestPointOnSegment: Dt,
        isFlat: Rt,
        _flat: Nt
    }), Le = (Object.freeze || Object)({
        clipPolygon: jt
    }), De = {
        project: function(t) {
            return new _(t.lng,t.lat)
        },
        unproject: function(t) {
            return new g(t.y,t.x)
        },
        bounds: new m([-180, -90],[180, 90])
    }, Re = {
        R: 6378137,
        R_MINOR: 6356752.314245179,
        bounds: new m([-20037508.34279, -15496570.73972],[20037508.34279, 18764656.23138]),
        project: function(t) {
            var e = Math.PI / 180
              , i = this.R
              , n = t.lat * e
              , o = this.R_MINOR / i
              , o = Math.sqrt(1 - o * o)
              , s = o * Math.sin(n)
              , s = Math.tan(Math.PI / 4 - n / 2) / Math.pow((1 - s) / (1 + s), o / 2)
              , n = -i * Math.log(Math.max(s, 1e-10));
            return new _(t.lng * e * i,n)
        },
        unproject: function(t) {
            for (var e, i = 180 / Math.PI, n = this.R, o = this.R_MINOR / n, s = Math.sqrt(1 - o * o), a = Math.exp(-t.y / n), r = Math.PI / 2 - 2 * Math.atan(a), h = 0, l = .1; h < 15 && 1e-7 < Math.abs(l); h++)
                e = s * Math.sin(r),
                e = Math.pow((1 - e) / (1 + e), s / 2),
                r += l = Math.PI / 2 - 2 * Math.atan(a * e) - r;
            return new g(r * i,t.x * i / n)
        }
    }, He = (Object.freeze || Object)({
        LonLat: De,
        Mercator: Re,
        SphericalMercator: pe
    }), Oe = h({}, de, {
        code: "EPSG:3395",
        projection: Re,
        transformation: $(E = .5 / (Math.PI * Re.R), .5, -E, .5)
    }), wi = h({}, de, {
        code: "EPSG:4326",
        projection: De,
        transformation: $(1 / 180, 1, -1 / 180, .5)
    }), Se = h({}, ce, {
        projection: De,
        transformation: $(1, 0, -1, 0),
        scale: function(t) {
            return Math.pow(2, t)
        },
        zoom: function(t) {
            return Math.log(t) / Math.LN2
        },
        distance: function(t, e) {
            var i = e.lng - t.lng
              , e = e.lat - t.lat;
            return Math.sqrt(i * i + e * e)
        },
        infinite: !0
    }), B = (ce.Earth = de,
    ce.EPSG3395 = Oe,
    ce.EPSG3857 = ye,
    ce.EPSG900913 = ve,
    ce.EPSG4326 = wi,
    ce.Simple = Se,
    le.extend({
        options: {
            pane: "overlayPane",
            attribution: null,
            bubblingMouseEvents: !0
        },
        addTo: function(t) {
            return t.addLayer(this),
            this
        },
        remove: function() {
            return this.removeFrom(this._map || this._mapToAdd)
        },
        removeFrom: function(t) {
            return t && t.removeLayer(this),
            this
        },
        getPane: function(t) {
            return this._map.getPane(t ? this.options[t] || t : this.options.pane)
        },
        addInteractiveTarget: function(t) {
            return this._map._targets[r(t)] = this
        },
        removeInteractiveTarget: function(t) {
            return delete this._map._targets[r(t)],
            this
        },
        getAttribution: function() {
            return this.options.attribution
        },
        _layerAdd: function(t) {
            var e, i = t.target;
            i.hasLayer(this) && (this._map = i,
            this._zoomAnimated = i._zoomAnimated,
            this.getEvents && (e = this.getEvents(),
            i.on(e, this),
            this.once("remove", function() {
                i.off(e, this)
            }, this)),
            this.onAdd(i),
            this.getAttribution && i.attributionControl && i.attributionControl.addAttribution(this.getAttribution()),
            this.fire("add"),
            i.fire("layeradd", {
                layer: this
            }))
        }
    })), xi = (Z.include({
        addLayer: function(t) {
            if (!t._layerAdd)
                throw new Error("The provided object is not a Layer.");
            var e = r(t);
            return this._layers[e] || ((this._layers[e] = t)._mapToAdd = this,
            t.beforeAdd && t.beforeAdd(this),
            this.whenReady(t._layerAdd, t)),
            this
        },
        removeLayer: function(t) {
            var e = r(t);
            return this._layers[e] && (this._loaded && t.onRemove(this),
            t.getAttribution && this.attributionControl && this.attributionControl.removeAttribution(t.getAttribution()),
            delete this._layers[e],
            this._loaded && (this.fire("layerremove", {
                layer: t
            }),
            t.fire("remove")),
            t._map = t._mapToAdd = null),
            this
        },
        hasLayer: function(t) {
            return !!t && r(t)in this._layers
        },
        eachLayer: function(t, e) {
            for (var i in this._layers)
                t.call(e, this._layers[i]);
            return this
        },
        _addLayers: function(t) {
            for (var e = 0, i = (t = t ? ie(t) ? t : [t] : []).length; e < i; e++)
                this.addLayer(t[e])
        },
        _addZoomLimit: function(t) {
            !isNaN(t.options.maxZoom) && isNaN(t.options.minZoom) || (this._zoomBoundLayers[r(t)] = t,
            this._updateZoomLevels())
        },
        _removeZoomLimit: function(t) {
            t = r(t);
            this._zoomBoundLayers[t] && (delete this._zoomBoundLayers[t],
            this._updateZoomLevels())
        },
        _updateZoomLevels: function() {
            var t, e = 1 / 0, i = -1 / 0, n = this._getZoomSpan();
            for (t in this._zoomBoundLayers)
                var o = this._zoomBoundLayers[t].options
                  , e = void 0 === o.minZoom ? e : Math.min(e, o.minZoom)
                  , i = void 0 === o.maxZoom ? i : Math.max(i, o.maxZoom);
            this._layersMaxZoom = i === -1 / 0 ? void 0 : i,
            this._layersMinZoom = e === 1 / 0 ? void 0 : e,
            n !== this._getZoomSpan() && this.fire("zoomlevelschange"),
            void 0 === this.options.maxZoom && this._layersMaxZoom && this.getZoom() > this._layersMaxZoom && this.setZoom(this._layersMaxZoom),
            void 0 === this.options.minZoom && this._layersMinZoom && this.getZoom() < this._layersMinZoom && this.setZoom(this._layersMinZoom)
        }
    }),
    B.extend({
        initialize: function(t, e) {
            var i, n;
            if (s(this, e),
            this._layers = {},
            t)
                for (i = 0,
                n = t.length; i < n; i++)
                    this.addLayer(t[i])
        },
        addLayer: function(t) {
            var e = this.getLayerId(t);
            return this._layers[e] = t,
            this._map && this._map.addLayer(t),
            this
        },
        removeLayer: function(t) {
            t = t in this._layers ? t : this.getLayerId(t);
            return this._map && this._layers[t] && this._map.removeLayer(this._layers[t]),
            delete this._layers[t],
            this
        },
        hasLayer: function(t) {
            return !!t && (t in this._layers || this.getLayerId(t)in this._layers)
        },
        clearLayers: function() {
            return this.eachLayer(this.removeLayer, this)
        },
        invoke: function(t) {
            var e, i, n = Array.prototype.slice.call(arguments, 1);
            for (e in this._layers)
                (i = this._layers[e])[t] && i[t].apply(i, n);
            return this
        },
        onAdd: function(t) {
            this.eachLayer(t.addLayer, t)
        },
        onRemove: function(t) {
            this.eachLayer(t.removeLayer, t)
        },
        eachLayer: function(t, e) {
            for (var i in this._layers)
                t.call(e, this._layers[i]);
            return this
        },
        getLayer: function(t) {
            return this._layers[t]
        },
        getLayers: function() {
            var t = [];
            return this.eachLayer(t.push, t),
            t
        },
        setZIndex: function(t) {
            return this.invoke("setZIndex", t)
        },
        getLayerId: r
    })), Pi = xi.extend({
        addLayer: function(t) {
            return this.hasLayer(t) ? this : (t.addEventParent(this),
            xi.prototype.addLayer.call(this, t),
            this.fire("layeradd", {
                layer: t
            }))
        },
        removeLayer: function(t) {
            return this.hasLayer(t) ? ((t = t in this._layers ? this._layers[t] : t).removeEventParent(this),
            xi.prototype.removeLayer.call(this, t),
            this.fire("layerremove", {
                layer: t
            })) : this
        },
        setStyle: function(t) {
            return this.invoke("setStyle", t)
        },
        bringToFront: function() {
            return this.invoke("bringToFront")
        },
        bringToBack: function() {
            return this.invoke("bringToBack")
        },
        getBounds: function() {
            var t, e = new p;
            for (t in this._layers) {
                var i = this._layers[t];
                e.extend(i.getBounds ? i.getBounds() : i.getLatLng())
            }
            return e
        }
    }), Ti = G.extend({
        options: {
            popupAnchor: [0, 0],
            tooltipAnchor: [0, 0]
        },
        initialize: function(t) {
            s(this, t)
        },
        createIcon: function(t) {
            return this._createIcon("icon", t)
        },
        createShadow: function(t) {
            return this._createIcon("shadow", t)
        },
        _createIcon: function(t, e) {
            var i = this._getIconUrl(t);
            if (!i) {
                if ("icon" === t)
                    throw new Error("iconUrl not set in Icon options (see the docs).");
                return null
            }
            i = this._createImg(i, e && "IMG" === e.tagName ? e : null);
            return this._setIconStyles(i, t),
            i
        },
        _setIconStyles: function(t, e) {
            var i = this.options
              , n = i[e + "Size"]
              , n = u(n = "number" == typeof n ? [n, n] : n)
              , o = u("shadow" === e && i.shadowAnchor || i.iconAnchor || n && n.divideBy(2, !0));
            t.className = "leaflet-marker-" + e + " " + (i.className || ""),
            o && (t.style.marginLeft = -o.x + "px",
            t.style.marginTop = -o.y + "px"),
            n && (t.style.width = n.x + "px",
            t.style.height = n.y + "px")
        },
        _createImg: function(t, e) {
            return (e = e || document.createElement("img")).src = t,
            e
        },
        _getIconUrl: function(t) {
            return We && this.options[t + "RetinaUrl"] || this.options[t + "Url"]
        }
    }), Mi = Ti.extend({
        options: {
            iconUrl: "marker-icon.png",
            iconRetinaUrl: "marker-icon-2x.png",
            shadowUrl: "marker-shadow.png",
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            tooltipAnchor: [16, -28],
            shadowSize: [41, 41]
        },
        _getIconUrl: function(t) {
            return Mi.imagePath || (Mi.imagePath = this._detectIconPath()),
            (this.options.imagePath || Mi.imagePath) + Ti.prototype._getIconUrl.call(this, t)
        },
        _detectIconPath: function() {
            var t = y("div", "leaflet-default-icon-path", document.body)
              , e = st(t, "background-image") || st(t, "backgroundImage");
            return document.body.removeChild(t),
            null === e || 0 !== e.indexOf("url") ? "" : e.replace(/^url\(["']?/, "").replace(/marker-icon\.png["']?\)$/, "")
        }
    }), Ci = k.extend({
        initialize: function(t) {
            this._marker = t
        },
        addHooks: function() {
            var t = this._marker._icon;
            this._draggable || (this._draggable = new bi(t,t,!0)),
            this._draggable.on({
                dragstart: this._onDragStart,
                predrag: this._onPreDrag,
                drag: this._onDrag,
                dragend: this._onDragEnd
            }, this).enable(),
            x(t, "leaflet-marker-draggable")
        },
        removeHooks: function() {
            this._draggable.off({
                dragstart: this._onDragStart,
                predrag: this._onPreDrag,
                drag: this._onDrag,
                dragend: this._onDragEnd
            }, this).disable(),
            this._marker._icon && P(this._marker._icon, "leaflet-marker-draggable")
        },
        moved: function() {
            return this._draggable && this._draggable._moved
        },
        _adjustPan: function(t) {
            var e = this._marker
              , i = e._map
              , n = this._marker.options.autoPanSpeed
              , o = this._marker.options.autoPanPadding
              , s = _t(e._icon)
              , a = i.getPixelBounds()
              , r = i.getPixelOrigin()
              , r = c(a.min._subtract(r).add(o), a.max._subtract(r).subtract(o));
            r.contains(s) || (o = u((Math.max(r.max.x, s.x) - r.max.x) / (a.max.x - r.max.x) - (Math.min(r.min.x, s.x) - r.min.x) / (a.min.x - r.min.x), (Math.max(r.max.y, s.y) - r.max.y) / (a.max.y - r.max.y) - (Math.min(r.min.y, s.y) - r.min.y) / (a.min.y - r.min.y)).multiplyBy(n),
            i.panBy(o, {
                animate: !1
            }),
            this._draggable._newPos._add(o),
            this._draggable._startPos._add(o),
            M(e._icon, this._draggable._newPos),
            this._onDrag(t),
            this._panRequest = b(this._adjustPan.bind(this, t)))
        },
        _onDragStart: function() {
            this._oldLatLng = this._marker.getLatLng(),
            this._marker.closePopup().fire("movestart").fire("dragstart")
        },
        _onPreDrag: function(t) {
            this._marker.options.autoPan && (a(this._panRequest),
            this._panRequest = b(this._adjustPan.bind(this, t)))
        },
        _onDrag: function(t) {
            var e = this._marker
              , i = e._shadow
              , n = _t(e._icon)
              , o = e._map.layerPointToLatLng(n);
            i && M(i, n),
            e._latlng = o,
            t.latlng = o,
            t.oldLatLng = this._oldLatLng,
            e.fire("move", t).fire("drag", t)
        },
        _onDragEnd: function(t) {
            a(this._panRequest),
            delete this._oldLatLng,
            this._marker.fire("moveend").fire("dragend", t)
        }
    }), zi = B.extend({
        options: {
            icon: new Mi,
            interactive: !0,
            draggable: !1,
            autoPan: !1,
            autoPanPadding: [50, 50],
            autoPanSpeed: 10,
            keyboard: !0,
            title: "",
            alt: "",
            zIndexOffset: 0,
            opacity: 1,
            riseOnHover: !1,
            riseOffset: 250,
            pane: "markerPane",
            bubblingMouseEvents: !1
        },
        initialize: function(t, e) {
            s(this, e),
            this._latlng = w(t)
        },
        onAdd: function(t) {
            this._zoomAnimated = this._zoomAnimated && t.options.markerZoomAnimation,
            this._zoomAnimated && t.on("zoomanim", this._animateZoom, this),
            this._initIcon(),
            this.update()
        },
        onRemove: function(t) {
            this.dragging && this.dragging.enabled() && (this.options.draggable = !0,
            this.dragging.removeHooks()),
            delete this.dragging,
            this._zoomAnimated && t.off("zoomanim", this._animateZoom, this),
            this._removeIcon(),
            this._removeShadow()
        },
        getEvents: function() {
            return {
                zoom: this.update,
                viewreset: this.update
            }
        },
        getLatLng: function() {
            return this._latlng
        },
        setLatLng: function(t) {
            var e = this._latlng;
            return this._latlng = w(t),
            this.update(),
            this.fire("move", {
                oldLatLng: e,
                latlng: this._latlng
            })
        },
        setZIndexOffset: function(t) {
            return this.options.zIndexOffset = t,
            this.update()
        },
        setIcon: function(t) {
            return this.options.icon = t,
            this._map && (this._initIcon(),
            this.update()),
            this._popup && this.bindPopup(this._popup, this._popup.options),
            this
        },
        getElement: function() {
            return this._icon
        },
        update: function() {
            var t;
            return this._icon && this._map && (t = this._map.latLngToLayerPoint(this._latlng).round(),
            this._setPos(t)),
            this
        },
        _initIcon: function() {
            var t = this.options
              , e = "leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide")
              , i = t.icon.createIcon(this._icon)
              , n = !1
              , i = (i !== this._icon && (this._icon && this._removeIcon(),
            n = !0,
            t.title && (i.title = t.title),
            "IMG" === i.tagName && (i.alt = t.alt || "")),
            x(i, e),
            t.keyboard && (i.tabIndex = "0"),
            this._icon = i,
            t.riseOnHover && this.on({
                mouseover: this._bringToFront,
                mouseout: this._resetZIndex
            }),
            t.icon.createShadow(this._shadow))
              , o = !1;
            i !== this._shadow && (this._removeShadow(),
            o = !0),
            i && (x(i, e),
            i.alt = ""),
            this._shadow = i,
            t.opacity < 1 && this._updateOpacity(),
            n && this.getPane().appendChild(this._icon),
            this._initInteraction(),
            i && o && this.getPane("shadowPane").appendChild(this._shadow)
        },
        _removeIcon: function() {
            this.options.riseOnHover && this.off({
                mouseover: this._bringToFront,
                mouseout: this._resetZIndex
            }),
            v(this._icon),
            this.removeInteractiveTarget(this._icon),
            this._icon = null
        },
        _removeShadow: function() {
            this._shadow && v(this._shadow),
            this._shadow = null
        },
        _setPos: function(t) {
            M(this._icon, t),
            this._shadow && M(this._shadow, t),
            this._zIndex = t.y + this.options.zIndexOffset,
            this._resetZIndex()
        },
        _updateZIndex: function(t) {
            this._icon.style.zIndex = this._zIndex + t
        },
        _animateZoom: function(t) {
            t = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center).round();
            this._setPos(t)
        },
        _initInteraction: function() {
            var t;
            this.options.interactive && (x(this._icon, "leaflet-interactive"),
            this.addInteractiveTarget(this._icon),
            Ci) && (t = this.options.draggable,
            this.dragging && (t = this.dragging.enabled(),
            this.dragging.disable()),
            this.dragging = new Ci(this),
            t && this.dragging.enable())
        },
        setOpacity: function(t) {
            return this.options.opacity = t,
            this._map && this._updateOpacity(),
            this
        },
        _updateOpacity: function() {
            var t = this.options.opacity;
            T(this._icon, t),
            this._shadow && T(this._shadow, t)
        },
        _bringToFront: function() {
            this._updateZIndex(this.options.riseOffset)
        },
        _resetZIndex: function() {
            this._updateZIndex(0)
        },
        _getPopupAnchor: function() {
            return this.options.icon.options.popupAnchor
        },
        _getTooltipAnchor: function() {
            return this.options.icon.options.tooltipAnchor
        }
    }), ki = B.extend({
        options: {
            stroke: !0,
            color: "#3388ff",
            weight: 3,
            opacity: 1,
            lineCap: "round",
            lineJoin: "round",
            dashArray: null,
            dashOffset: null,
            fill: !1,
            fillColor: null,
            fillOpacity: .2,
            fillRule: "evenodd",
            interactive: !0,
            bubblingMouseEvents: !0
        },
        beforeAdd: function(t) {
            this._renderer = t.getRenderer(this)
        },
        onAdd: function() {
            this._renderer._initPath(this),
            this._reset(),
            this._renderer._addPath(this)
        },
        onRemove: function() {
            this._renderer._removePath(this)
        },
        redraw: function() {
            return this._map && this._renderer._updatePath(this),
            this
        },
        setStyle: function(t) {
            return s(this, t),
            this._renderer && this._renderer._updateStyle(this),
            this
        },
        bringToFront: function() {
            return this._renderer && this._renderer._bringToFront(this),
            this
        },
        bringToBack: function() {
            return this._renderer && this._renderer._bringToBack(this),
            this
        },
        getElement: function() {
            return this._path
        },
        _reset: function() {
            this._project(),
            this._update()
        },
        _clickTolerance: function() {
            return (this.options.stroke ? this.options.weight / 2 : 0) + this._renderer.options.tolerance
        }
    }), Si = ki.extend({
        options: {
            fill: !0,
            radius: 10
        },
        initialize: function(t, e) {
            s(this, e),
            this._latlng = w(t),
            this._radius = this.options.radius
        },
        setLatLng: function(t) {
            return this._latlng = w(t),
            this.redraw(),
            this.fire("move", {
                latlng: this._latlng
            })
        },
        getLatLng: function() {
            return this._latlng
        },
        setRadius: function(t) {
            return this.options.radius = this._radius = t,
            this.redraw()
        },
        getRadius: function() {
            return this._radius
        },
        setStyle: function(t) {
            var e = t && t.radius || this._radius;
            return ki.prototype.setStyle.call(this, t),
            this.setRadius(e),
            this
        },
        _project: function() {
            this._point = this._map.latLngToLayerPoint(this._latlng),
            this._updateBounds()
        },
        _updateBounds: function() {
            var t = this._radius
              , e = this._radiusY || t
              , i = this._clickTolerance()
              , t = [t + i, e + i];
            this._pxBounds = new m(this._point.subtract(t),this._point.add(t))
        },
        _update: function() {
            this._map && this._updatePath()
        },
        _updatePath: function() {
            this._renderer._updateCircle(this)
        },
        _empty: function() {
            return this._radius && !this._renderer._bounds.intersects(this._pxBounds)
        },
        _containsPoint: function(t) {
            return t.distanceTo(this._point) <= this._radius + this._clickTolerance()
        }
    }), Ei = Si.extend({
        initialize: function(t, e, i) {
            if (s(this, e = "number" == typeof e ? h({}, i, {
                radius: e
            }) : e),
            this._latlng = w(t),
            isNaN(this.options.radius))
                throw new Error("Circle radius cannot be NaN");
            this._mRadius = this.options.radius
        },
        setRadius: function(t) {
            return this._mRadius = t,
            this.redraw()
        },
        getRadius: function() {
            return this._mRadius
        },
        getBounds: function() {
            var t = [this._radius, this._radiusY || this._radius];
            return new p(this._map.layerPointToLatLng(this._point.subtract(t)),this._map.layerPointToLatLng(this._point.add(t)))
        },
        setStyle: ki.prototype.setStyle,
        _project: function() {
            var t, e, i, n, o, s = this._latlng.lng, a = this._latlng.lat, r = this._map, h = r.options.crs;
            h.distance === de.distance ? (n = Math.PI / 180,
            o = this._mRadius / de.R / n,
            t = r.project([a + o, s]),
            e = r.project([a - o, s]),
            e = t.add(e).divideBy(2),
            i = r.unproject(e).lat,
            n = Math.acos((Math.cos(o * n) - Math.sin(a * n) * Math.sin(i * n)) / (Math.cos(a * n) * Math.cos(i * n))) / n,
            !isNaN(n) && 0 !== n || (n = o / Math.cos(Math.PI / 180 * a)),
            this._point = e.subtract(r.getPixelOrigin()),
            this._radius = isNaN(n) ? 0 : e.x - r.project([i, s - n]).x,
            this._radiusY = e.y - t.y) : (o = h.unproject(h.project(this._latlng).subtract([this._mRadius, 0])),
            this._point = r.latLngToLayerPoint(this._latlng),
            this._radius = this._point.x - r.latLngToLayerPoint(o).x),
            this._updateBounds()
        }
    }), Ai = ki.extend({
        options: {
            smoothFactor: 1,
            noClip: !1
        },
        initialize: function(t, e) {
            s(this, e),
            this._setLatLngs(t)
        },
        getLatLngs: function() {
            return this._latlngs
        },
        setLatLngs: function(t) {
            return this._setLatLngs(t),
            this.redraw()
        },
        isEmpty: function() {
            return !this._latlngs.length
        },
        closestLayerPoint: function(t) {
            for (var e, i, n = 1 / 0, o = null, s = Dt, a = 0, r = this._parts.length; a < r; a++)
                for (var h = this._parts[a], l = 1, u = h.length; l < u; l++) {
                    var c = s(t, e = h[l - 1], i = h[l], !0);
                    c < n && (n = c,
                    o = s(t, e, i))
                }
            return o && (o.distance = Math.sqrt(n)),
            o
        },
        getCenter: function() {
            if (!this._map)
                throw new Error("Must add layer to map before using getCenter()");
            var t, e, i, n, o, s, a = this._rings[0], r = a.length;
            if (!r)
                return null;
            for (e = t = 0; t < r - 1; t++)
                e += a[t].distanceTo(a[t + 1]) / 2;
            if (0 === e)
                return this._map.layerPointToLatLng(a[0]);
            for (i = t = 0; t < r - 1; t++)
                if (n = a[t],
                o = a[t + 1],
                (i += s = n.distanceTo(o)) > e)
                    return this._map.layerPointToLatLng([o.x - (s = (i - e) / s) * (o.x - n.x), o.y - s * (o.y - n.y)])
        },
        getBounds: function() {
            return this._bounds
        },
        addLatLng: function(t, e) {
            return e = e || this._defaultShape(),
            t = w(t),
            e.push(t),
            this._bounds.extend(t),
            this.redraw()
        },
        _setLatLngs: function(t) {
            this._bounds = new p,
            this._latlngs = this._convertLatLngs(t)
        },
        _defaultShape: function() {
            return Rt(this._latlngs) ? this._latlngs : this._latlngs[0]
        },
        _convertLatLngs: function(t) {
            for (var e = [], i = Rt(t), n = 0, o = t.length; n < o; n++)
                i ? (e[n] = w(t[n]),
                this._bounds.extend(e[n])) : e[n] = this._convertLatLngs(t[n]);
            return e
        },
        _project: function() {
            var t = new m
              , e = (this._rings = [],
            this._projectLatlngs(this._latlngs, this._rings, t),
            this._clickTolerance())
              , e = new _(e,e);
            this._bounds.isValid() && t.isValid() && (t.min._subtract(e),
            t.max._add(e),
            this._pxBounds = t)
        },
        _projectLatlngs: function(t, e, i) {
            var n, o, s = t[0]instanceof g, a = t.length;
            if (s) {
                for (o = [],
                n = 0; n < a; n++)
                    o[n] = this._map.latLngToLayerPoint(t[n]),
                    i.extend(o[n]);
                e.push(o)
            } else
                for (n = 0; n < a; n++)
                    this._projectLatlngs(t[n], e, i)
        },
        _clipPoints: function() {
            var t = this._renderer._bounds;
            if (this._parts = [],
            this._pxBounds && this._pxBounds.intersects(t))
                if (this.options.noClip)
                    this._parts = this._rings;
                else
                    for (var e, i, n, o, s = this._parts, a = 0, r = 0, h = this._rings.length; a < h; a++)
                        for (e = 0,
                        i = (o = this._rings[a]).length; e < i - 1; e++)
                            (n = Zt(o[e], o[e + 1], t, e, !0)) && (s[r] = s[r] || [],
                            s[r].push(n[0]),
                            n[1] === o[e + 1] && e !== i - 2 || (s[r].push(n[1]),
                            r++))
        },
        _simplifyPoints: function() {
            for (var t = this._parts, e = this.options.smoothFactor, i = 0, n = t.length; i < n; i++)
                t[i] = At(t[i], e)
        },
        _update: function() {
            this._map && (this._clipPoints(),
            this._simplifyPoints(),
            this._updatePath())
        },
        _updatePath: function() {
            this._renderer._updatePoly(this)
        },
        _containsPoint: function(t, e) {
            var i, n, o, s, a, r, h = this._clickTolerance();
            if (this._pxBounds && this._pxBounds.contains(t))
                for (i = 0,
                s = this._parts.length; i < s; i++)
                    for (n = 0,
                    o = (a = (r = this._parts[i]).length) - 1; n < a; o = n++)
                        if ((e || 0 !== n) && Ot(t, r[o], r[n]) <= h)
                            return !0;
            return !1
        }
    }), Oi = (Ai._flat = Nt,
    Ai.extend({
        options: {
            fill: !0
        },
        isEmpty: function() {
            return !this._latlngs.length || !this._latlngs[0].length
        },
        getCenter: function() {
            if (!this._map)
                throw new Error("Must add layer to map before using getCenter()");
            var t, e, i, n, o, s, a, r, h, l = this._rings[0], u = l.length;
            if (!u)
                return null;
            for (t = s = a = r = 0,
            e = u - 1; t < u; e = t++)
                i = l[t],
                n = l[e],
                o = i.y * n.x - n.y * i.x,
                a += (i.x + n.x) * o,
                r += (i.y + n.y) * o,
                s += 3 * o;
            return h = 0 === s ? l[0] : [a / s, r / s],
            this._map.layerPointToLatLng(h)
        },
        _convertLatLngs: function(t) {
            var t = Ai.prototype._convertLatLngs.call(this, t)
              , e = t.length;
            return 2 <= e && t[0]instanceof g && t[0].equals(t[e - 1]) && t.pop(),
            t
        },
        _setLatLngs: function(t) {
            Ai.prototype._setLatLngs.call(this, t),
            Rt(this._latlngs) && (this._latlngs = [this._latlngs])
        },
        _defaultShape: function() {
            return (Rt(this._latlngs[0]) ? this._latlngs : this._latlngs[0])[0]
        },
        _clipPoints: function() {
            var t = this._renderer._bounds
              , e = this.options.weight
              , e = new _(e,e)
              , t = new m(t.min.subtract(e),t.max.add(e));
            if (this._parts = [],
            this._pxBounds && this._pxBounds.intersects(t))
                if (this.options.noClip)
                    this._parts = this._rings;
                else
                    for (var i, n = 0, o = this._rings.length; n < o; n++)
                        (i = jt(this._rings[n], t, !0)).length && this._parts.push(i)
        },
        _updatePath: function() {
            this._renderer._updatePoly(this, !0)
        },
        _containsPoint: function(t) {
            var e, i, n, o, s, a, r, h, l = !1;
            if (!this._pxBounds || !this._pxBounds.contains(t))
                return !1;
            for (o = 0,
            r = this._parts.length; o < r; o++)
                for (s = 0,
                a = (h = (e = this._parts[o]).length) - 1; s < h; a = s++)
                    i = e[s],
                    n = e[a],
                    i.y > t.y != n.y > t.y && t.x < (n.x - i.x) * (t.y - i.y) / (n.y - i.y) + i.x && (l = !l);
            return l || Ai.prototype._containsPoint.call(this, t, !0)
        }
    })), Zi = Pi.extend({
        initialize: function(t, e) {
            s(this, e),
            this._layers = {},
            t && this.addData(t)
        },
        addData: function(t) {
            var e, i, n, o = ie(t) ? t : t.features;
            if (o) {
                for (e = 0,
                i = o.length; e < i; e++)
                    ((n = o[e]).geometries || n.geometry || n.features || n.coordinates) && this.addData(n);
                return this
            }
            var s = this.options;
            if (s.filter && !s.filter(t))
                return this;
            var a = Ht(t, s);
            return a ? (a.feature = Vt(t),
            a.defaultOptions = a.options,
            this.resetStyle(a),
            s.onEachFeature && s.onEachFeature(t, a),
            this.addLayer(a)) : this
        },
        resetStyle: function(t) {
            return t.options = h({}, t.defaultOptions),
            this._setLayerStyle(t, this.options.style),
            this
        },
        setStyle: function(e) {
            return this.eachLayer(function(t) {
                this._setLayerStyle(t, e)
            }, this)
        },
        _setLayerStyle: function(t, e) {
            "function" == typeof e && (e = e(t.feature)),
            t.setStyle && t.setStyle(e)
        }
    }), o = {
        toGeoJSON: function(t) {
            return Gt(this, {
                type: "Point",
                coordinates: Ut(this.getLatLng(), t)
            })
        }
    }, pe = (zi.include(o),
    Ei.include(o),
    Si.include(o),
    Ai.include({
        toGeoJSON: function(t) {
            var e = !Rt(this._latlngs);
            return Gt(this, {
                type: (e ? "Multi" : "") + "LineString",
                coordinates: qt(this._latlngs, e ? 1 : 0, !1, t)
            })
        }
    }),
    Oi.include({
        toGeoJSON: function(t) {
            var e = !Rt(this._latlngs)
              , i = e && !Rt(this._latlngs[0])
              , t = qt(this._latlngs, i ? 2 : e ? 1 : 0, !0, t);
            return Gt(this, {
                type: (i ? "Multi" : "") + "Polygon",
                coordinates: t = e ? t : [t]
            })
        }
    }),
    xi.include({
        toMultiPoint: function(e) {
            var i = [];
            return this.eachLayer(function(t) {
                i.push(t.toGeoJSON(e).geometry.coordinates)
            }),
            Gt(this, {
                type: "MultiPoint",
                coordinates: i
            })
        },
        toGeoJSON: function(e) {
            var t = this.feature && this.feature.geometry && this.feature.geometry.type;
            if ("MultiPoint" === t)
                return this.toMultiPoint(e);
            var i = "GeometryCollection" === t
              , n = [];
            return this.eachLayer(function(t) {
                t.toGeoJSON && (t = t.toGeoJSON(e),
                i ? n.push(t.geometry) : "FeatureCollection" === (t = Vt(t)).type ? n.push.apply(n, t.features) : n.push(t))
            }),
            i ? Gt(this, {
                geometries: n,
                type: "GeometryCollection"
            }) : {
                type: "FeatureCollection",
                features: n
            }
        }
    }),
    $t), Ii = B.extend({
        options: {
            opacity: 1,
            alt: "",
            interactive: !1,
            crossOrigin: !1,
            errorOverlayUrl: "",
            zIndex: 1,
            className: ""
        },
        initialize: function(t, e, i) {
            this._url = t,
            this._bounds = f(e),
            s(this, i)
        },
        onAdd: function() {
            this._image || (this._initImage(),
            this.options.opacity < 1 && this._updateOpacity()),
            this.options.interactive && (x(this._image, "leaflet-interactive"),
            this.addInteractiveTarget(this._image)),
            this.getPane().appendChild(this._image),
            this._reset()
        },
        onRemove: function() {
            v(this._image),
            this.options.interactive && this.removeInteractiveTarget(this._image)
        },
        setOpacity: function(t) {
            return this.options.opacity = t,
            this._image && this._updateOpacity(),
            this
        },
        setStyle: function(t) {
            return t.opacity && this.setOpacity(t.opacity),
            this
        },
        bringToFront: function() {
            return this._map && rt(this._image),
            this
        },
        bringToBack: function() {
            return this._map && ht(this._image),
            this
        },
        setUrl: function(t) {
            return this._url = t,
            this._image && (this._image.src = t),
            this
        },
        setBounds: function(t) {
            return this._bounds = f(t),
            this._map && this._reset(),
            this
        },
        getEvents: function() {
            var t = {
                zoom: this._reset,
                viewreset: this._reset
            };
            return this._zoomAnimated && (t.zoomanim = this._animateZoom),
            t
        },
        setZIndex: function(t) {
            return this.options.zIndex = t,
            this._updateZIndex(),
            this
        },
        getBounds: function() {
            return this._bounds
        },
        getElement: function() {
            return this._image
        },
        _initImage: function() {
            var t = "IMG" === this._url.tagName
              , e = this._image = t ? this._url : y("img");
            x(e, "leaflet-image-layer"),
            this._zoomAnimated && x(e, "leaflet-zoom-animated"),
            this.options.className && x(e, this.options.className),
            e.onselectstart = l,
            e.onmousemove = l,
            e.onload = d(this.fire, this, "load"),
            e.onerror = d(this._overlayOnError, this, "error"),
            !this.options.crossOrigin && "" !== this.options.crossOrigin || (e.crossOrigin = !0 === this.options.crossOrigin ? "" : this.options.crossOrigin),
            this.options.zIndex && this._updateZIndex(),
            t ? this._url = e.src : (e.src = this._url,
            e.alt = this.options.alt)
        },
        _animateZoom: function(t) {
            var e = this._map.getZoomScale(t.zoom)
              , t = this._map._latLngBoundsToNewLayerBounds(this._bounds, t.zoom, t.center).min;
            pt(this._image, t, e)
        },
        _reset: function() {
            var t = this._image
              , e = new m(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast()))
              , i = e.getSize();
            M(t, e.min),
            t.style.width = i.x + "px",
            t.style.height = i.y + "px"
        },
        _updateOpacity: function() {
            T(this._image, this.options.opacity)
        },
        _updateZIndex: function() {
            this._image && void 0 !== this.options.zIndex && null !== this.options.zIndex && (this._image.style.zIndex = this.options.zIndex)
        },
        _overlayOnError: function() {
            this.fire("error");
            var t = this.options.errorOverlayUrl;
            t && this._url !== t && (this._url = t,
            this._image.src = t)
        }
    }), Bi = Ii.extend({
        options: {
            autoplay: !0,
            loop: !0
        },
        _initImage: function() {
            var t = "VIDEO" === this._url.tagName
              , e = this._image = t ? this._url : y("video");
            if (x(e, "leaflet-image-layer"),
            this._zoomAnimated && x(e, "leaflet-zoom-animated"),
            e.onselectstart = l,
            e.onmousemove = l,
            e.onloadeddata = d(this.fire, this, "load"),
            t) {
                for (var i = e.getElementsByTagName("source"), n = [], o = 0; o < i.length; o++)
                    n.push(i[o].src);
                this._url = 0 < i.length ? n : [e.src]
            } else {
                ie(this._url) || (this._url = [this._url]),
                e.autoplay = !!this.options.autoplay,
                e.loop = !!this.options.loop;
                for (var s = 0; s < this._url.length; s++) {
                    var a = y("source");
                    a.src = this._url[s],
                    e.appendChild(a)
                }
            }
        }
    }), Di = B.extend({
        options: {
            offset: [0, 7],
            className: "",
            pane: "popupPane"
        },
        initialize: function(t, e) {
            s(this, t),
            this._source = e
        },
        onAdd: function(t) {
            this._zoomAnimated = t._zoomAnimated,
            this._container || this._initLayout(),
            t._fadeAnimated && T(this._container, 0),
            clearTimeout(this._removeTimeout),
            this.getPane().appendChild(this._container),
            this.update(),
            t._fadeAnimated && T(this._container, 1),
            this.bringToFront()
        },
        onRemove: function(t) {
            t._fadeAnimated ? (T(this._container, 0),
            this._removeTimeout = setTimeout(d(v, void 0, this._container), 200)) : v(this._container)
        },
        getLatLng: function() {
            return this._latlng
        },
        setLatLng: function(t) {
            return this._latlng = w(t),
            this._map && (this._updatePosition(),
            this._adjustPan()),
            this
        },
        getContent: function() {
            return this._content
        },
        setContent: function(t) {
            return this._content = t,
            this.update(),
            this
        },
        getElement: function() {
            return this._container
        },
        update: function() {
            this._map && (this._container.style.visibility = "hidden",
            this._updateContent(),
            this._updateLayout(),
            this._updatePosition(),
            this._container.style.visibility = "",
            this._adjustPan())
        },
        getEvents: function() {
            var t = {
                zoom: this._updatePosition,
                viewreset: this._updatePosition
            };
            return this._zoomAnimated && (t.zoomanim = this._animateZoom),
            t
        },
        isOpen: function() {
            return !!this._map && this._map.hasLayer(this)
        },
        bringToFront: function() {
            return this._map && rt(this._container),
            this
        },
        bringToBack: function() {
            return this._map && ht(this._container),
            this
        },
        _updateContent: function() {
            if (this._content) {
                var t = this._contentNode
                  , e = "function" == typeof this._content ? this._content(this._source || this) : this._content;
                if ("string" == typeof e)
                    t.innerHTML = e;
                else {
                    for (; t.hasChildNodes(); )
                        t.removeChild(t.firstChild);
                    t.appendChild(e)
                }
                this.fire("contentupdate")
            }
        },
        _updatePosition: function() {
            var t, e, i;
            this._map && (e = this._map.latLngToLayerPoint(this._latlng),
            t = u(this.options.offset),
            i = this._getAnchor(),
            this._zoomAnimated ? M(this._container, e.add(i)) : t = t.add(e).add(i),
            e = this._containerBottom = -t.y,
            i = this._containerLeft = -Math.round(this._containerWidth / 2) + t.x,
            this._container.style.bottom = e + "px",
            this._container.style.left = i + "px")
        },
        _getAnchor: function() {
            return [0, 0]
        }
    }), Ri = Di.extend({
        options: {
            maxWidth: 300,
            minWidth: 50,
            maxHeight: null,
            autoPan: !0,
            autoPanPaddingTopLeft: null,
            autoPanPaddingBottomRight: null,
            autoPanPadding: [5, 5],
            keepInView: !1,
            closeButton: !0,
            autoClose: !0,
            closeOnEscapeKey: !0,
            className: ""
        },
        openOn: function(t) {
            return t.openPopup(this),
            this
        },
        onAdd: function(t) {
            Di.prototype.onAdd.call(this, t),
            t.fire("popupopen", {
                popup: this
            }),
            this._source && (this._source.fire("popupopen", {
                popup: this
            }, !0),
            this._source instanceof ki || this._source.on("preclick", xt))
        },
        onRemove: function(t) {
            Di.prototype.onRemove.call(this, t),
            t.fire("popupclose", {
                popup: this
            }),
            this._source && (this._source.fire("popupclose", {
                popup: this
            }, !0),
            this._source instanceof ki || this._source.off("preclick", xt))
        },
        getEvents: function() {
            var t = Di.prototype.getEvents.call(this);
            return (void 0 !== this.options.closeOnClick ? this.options.closeOnClick : this._map.options.closePopupOnClick) && (t.preclick = this._close),
            this.options.keepInView && (t.moveend = this._adjustPan),
            t
        },
        _close: function() {
            this._map && this._map.closePopup(this)
        },
        _initLayout: function() {
            var t = "leaflet-popup"
              , e = this._container = y("div", t + " " + (this.options.className || "") + " leaflet-zoom-animated")
              , i = this._wrapper = y("div", t + "-content-wrapper", e);
            this._contentNode = y("div", t + "-content", i),
            Tt(i),
            Pt(this._contentNode),
            C(i, "contextmenu", xt),
            this._tipContainer = y("div", t + "-tip-container", e),
            this._tip = y("div", t + "-tip", this._tipContainer),
            this.options.closeButton && ((i = this._closeButton = y("a", t + "-close-button", e)).href = "#close",
            i.innerHTML = "&#215;",
            C(i, "click", this._onCloseButtonClick, this))
        },
        _updateLayout: function() {
            var t = this._contentNode
              , e = t.style
              , i = (e.width = "",
            e.whiteSpace = "nowrap",
            t.offsetWidth)
              , i = Math.min(i, this.options.maxWidth)
              , i = (i = Math.max(i, this.options.minWidth),
            e.width = i + 1 + "px",
            e.whiteSpace = "",
            e.height = "",
            t.offsetHeight)
              , n = this.options.maxHeight;
            n && n < i ? (e.height = n + "px",
            x(t, "leaflet-popup-scrolled")) : P(t, "leaflet-popup-scrolled"),
            this._containerWidth = this._container.offsetWidth
        },
        _animateZoom: function(t) {
            var t = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center)
              , e = this._getAnchor();
            M(this._container, t.add(e))
        },
        _adjustPan: function() {
            var t, e, i, n, o, s, a, r;
            !this.options.autoPan || this._map._panAnim && this._map._panAnim._inProgress || (t = this._map,
            e = parseInt(st(this._container, "marginBottom"), 10) || 0,
            e = this._container.offsetHeight + e,
            r = this._containerWidth,
            (i = new _(this._containerLeft,-e - this._containerBottom))._add(_t(this._container)),
            i = t.layerPointToContainerPoint(i),
            o = u(this.options.autoPanPadding),
            n = u(this.options.autoPanPaddingTopLeft || o),
            o = u(this.options.autoPanPaddingBottomRight || o),
            s = t.getSize(),
            a = 0,
            i.x + r + o.x > s.x && (a = i.x + r - s.x + o.x),
            i.x - a - n.x < (r = 0) && (a = i.x - n.x),
            i.y + e + o.y > s.y && (r = i.y + e - s.y + o.y),
            i.y - r - n.y < 0 && (r = i.y - n.y),
            (a || r) && t.fire("autopanstart").panBy([a, r]))
        },
        _onCloseButtonClick: function(t) {
            this._close(),
            Mt(t)
        },
        _getAnchor: function() {
            return u(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0])
        }
    }), Ni = (Z.mergeOptions({
        closePopupOnClick: !0
    }),
    Z.include({
        openPopup: function(t, e, i) {
            return t instanceof Ri || (t = new Ri(i).setContent(t)),
            e && t.setLatLng(e),
            this.hasLayer(t) ? this : (this._popup && this._popup.options.autoClose && this.closePopup(),
            this._popup = t,
            this.addLayer(t))
        },
        closePopup: function(t) {
            return t && t !== this._popup || (t = this._popup,
            this._popup = null),
            t && this.removeLayer(t),
            this
        }
    }),
    B.include({
        bindPopup: function(t, e) {
            return t instanceof Ri ? (s(t, e),
            (this._popup = t)._source = this) : (this._popup && !e || (this._popup = new Ri(e,this)),
            this._popup.setContent(t)),
            this._popupHandlersAdded || (this.on({
                click: this._openPopup,
                keypress: this._onKeyPress,
                remove: this.closePopup,
                move: this._movePopup
            }),
            this._popupHandlersAdded = !0),
            this
        },
        unbindPopup: function() {
            return this._popup && (this.off({
                click: this._openPopup,
                keypress: this._onKeyPress,
                remove: this.closePopup,
                move: this._movePopup
            }),
            this._popupHandlersAdded = !1,
            this._popup = null),
            this
        },
        openPopup: function(t, e) {
            if (t instanceof B || (e = t,
            t = this),
            t instanceof Pi)
                for (var i in this._layers) {
                    t = this._layers[i];
                    break
                }
            return e = e || (t.getCenter ? t.getCenter() : t.getLatLng()),
            this._popup && this._map && (this._popup._source = t,
            this._popup.update(),
            this._map.openPopup(this._popup, e)),
            this
        },
        closePopup: function() {
            return this._popup && this._popup._close(),
            this
        },
        togglePopup: function(t) {
            return this._popup && (this._popup._map ? this.closePopup() : this.openPopup(t)),
            this
        },
        isPopupOpen: function() {
            return !!this._popup && this._popup.isOpen()
        },
        setPopupContent: function(t) {
            return this._popup && this._popup.setContent(t),
            this
        },
        getPopup: function() {
            return this._popup
        },
        _openPopup: function(t) {
            var e = t.layer || t.target;
            this._popup && this._map && (Mt(t),
            e instanceof ki ? this.openPopup(t.layer || t.target, t.latlng) : this._map.hasLayer(this._popup) && this._popup._source === e ? this.closePopup() : this.openPopup(e, t.latlng))
        },
        _movePopup: function(t) {
            this._popup.setLatLng(t.latlng)
        },
        _onKeyPress: function(t) {
            13 === t.originalEvent.keyCode && this._openPopup(t)
        }
    }),
    Di.extend({
        options: {
            pane: "tooltipPane",
            offset: [0, 0],
            direction: "auto",
            permanent: !1,
            sticky: !1,
            interactive: !1,
            opacity: .9
        },
        onAdd: function(t) {
            Di.prototype.onAdd.call(this, t),
            this.setOpacity(this.options.opacity),
            t.fire("tooltipopen", {
                tooltip: this
            }),
            this._source && this._source.fire("tooltipopen", {
                tooltip: this
            }, !0)
        },
        onRemove: function(t) {
            Di.prototype.onRemove.call(this, t),
            t.fire("tooltipclose", {
                tooltip: this
            }),
            this._source && this._source.fire("tooltipclose", {
                tooltip: this
            }, !0)
        },
        getEvents: function() {
            var t = Di.prototype.getEvents.call(this);
            return Ne && !this.options.permanent && (t.preclick = this._close),
            t
        },
        _close: function() {
            this._map && this._map.closeTooltip(this)
        },
        _initLayout: function() {
            var t = "leaflet-tooltip " + (this.options.className || "") + " leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide");
            this._contentNode = this._container = y("div", t)
        },
        _updateLayout: function() {},
        _adjustPan: function() {},
        _setPosition: function(t) {
            var e = this._map
              , i = this._container
              , n = e.latLngToContainerPoint(e.getCenter())
              , e = e.layerPointToContainerPoint(t)
              , o = this.options.direction
              , s = i.offsetWidth
              , a = i.offsetHeight
              , r = u(this.options.offset)
              , h = this._getAnchor();
            t = "top" === o ? t.add(u(-s / 2 + r.x, -a + r.y + h.y, !0)) : "bottom" === o ? t.subtract(u(s / 2 - r.x, -r.y, !0)) : "center" === o ? t.subtract(u(s / 2 + r.x, a / 2 - h.y + r.y, !0)) : "right" === o || "auto" === o && e.x < n.x ? (o = "right",
            t.add(u(r.x + h.x, h.y - a / 2 + r.y, !0))) : (o = "left",
            t.subtract(u(s + h.x - r.x, a / 2 - h.y - r.y, !0))),
            P(i, "leaflet-tooltip-right"),
            P(i, "leaflet-tooltip-left"),
            P(i, "leaflet-tooltip-top"),
            P(i, "leaflet-tooltip-bottom"),
            x(i, "leaflet-tooltip-" + o),
            M(i, t)
        },
        _updatePosition: function() {
            var t = this._map.latLngToLayerPoint(this._latlng);
            this._setPosition(t)
        },
        setOpacity: function(t) {
            this.options.opacity = t,
            this._container && T(this._container, t)
        },
        _animateZoom: function(t) {
            t = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center);
            this._setPosition(t)
        },
        _getAnchor: function() {
            return u(this._source && this._source._getTooltipAnchor && !this.options.sticky ? this._source._getTooltipAnchor() : [0, 0])
        }
    })), ji = (Z.include({
        openTooltip: function(t, e, i) {
            return t instanceof Ni || (t = new Ni(i).setContent(t)),
            e && t.setLatLng(e),
            this.hasLayer(t) ? this : this.addLayer(t)
        },
        closeTooltip: function(t) {
            return t && this.removeLayer(t),
            this
        }
    }),
    B.include({
        bindTooltip: function(t, e) {
            return t instanceof Ni ? (s(t, e),
            (this._tooltip = t)._source = this) : (this._tooltip && !e || (this._tooltip = new Ni(e,this)),
            this._tooltip.setContent(t)),
            this._initTooltipInteractions(),
            this._tooltip.options.permanent && this._map && this._map.hasLayer(this) && this.openTooltip(),
            this
        },
        unbindTooltip: function() {
            return this._tooltip && (this._initTooltipInteractions(!0),
            this.closeTooltip(),
            this._tooltip = null),
            this
        },
        _initTooltipInteractions: function(t) {
            var e, i;
            !t && this._tooltipHandlersAdded || (e = t ? "off" : "on",
            i = {
                remove: this.closeTooltip,
                move: this._moveTooltip
            },
            this._tooltip.options.permanent ? i.add = this._openTooltip : (i.mouseover = this._openTooltip,
            i.mouseout = this.closeTooltip,
            this._tooltip.options.sticky && (i.mousemove = this._moveTooltip),
            Ne && (i.click = this._openTooltip)),
            this[e](i),
            this._tooltipHandlersAdded = !t)
        },
        openTooltip: function(t, e) {
            if (t instanceof B || (e = t,
            t = this),
            t instanceof Pi)
                for (var i in this._layers) {
                    t = this._layers[i];
                    break
                }
            return e = e || (t.getCenter ? t.getCenter() : t.getLatLng()),
            this._tooltip && this._map && (this._tooltip._source = t,
            this._tooltip.update(),
            this._map.openTooltip(this._tooltip, e),
            this._tooltip.options.interactive && this._tooltip._container && (x(this._tooltip._container, "leaflet-clickable"),
            this.addInteractiveTarget(this._tooltip._container))),
            this
        },
        closeTooltip: function() {
            return this._tooltip && (this._tooltip._close(),
            this._tooltip.options.interactive && this._tooltip._container && (P(this._tooltip._container, "leaflet-clickable"),
            this.removeInteractiveTarget(this._tooltip._container))),
            this
        },
        toggleTooltip: function(t) {
            return this._tooltip && (this._tooltip._map ? this.closeTooltip() : this.openTooltip(t)),
            this
        },
        isTooltipOpen: function() {
            return this._tooltip.isOpen()
        },
        setTooltipContent: function(t) {
            return this._tooltip && this._tooltip.setContent(t),
            this
        },
        getTooltip: function() {
            return this._tooltip
        },
        _openTooltip: function(t) {
            var e = t.layer || t.target;
            this._tooltip && this._map && this.openTooltip(e, this._tooltip.options.sticky ? t.latlng : void 0)
        },
        _moveTooltip: function(t) {
            var e = t.latlng;
            this._tooltip.options.sticky && t.originalEvent && (t = this._map.mouseEventToContainerPoint(t.originalEvent),
            t = this._map.containerPointToLayerPoint(t),
            e = this._map.layerPointToLatLng(t)),
            this._tooltip.setLatLng(e)
        }
    }),
    Ti.extend({
        options: {
            iconSize: [12, 12],
            html: !1,
            bgPos: null,
            className: "leaflet-div-icon"
        },
        createIcon: function(t) {
            var t = t && "DIV" === t.tagName ? t : document.createElement("div")
              , e = this.options;
            return t.innerHTML = !1 !== e.html ? e.html : "",
            e.bgPos && (e = u(e.bgPos),
            t.style.backgroundPosition = -e.x + "px " + -e.y + "px"),
            this._setIconStyles(t, "icon"),
            t
        },
        createShadow: function() {
            return null
        }
    })), Hi = (Ti.Default = Mi,
    B.extend({
        options: {
            tileSize: 256,
            opacity: 1,
            updateWhenIdle: Be,
            updateWhenZooming: !0,
            updateInterval: 200,
            zIndex: 1,
            bounds: null,
            minZoom: 0,
            maxZoom: void 0,
            maxNativeZoom: void 0,
            minNativeZoom: void 0,
            noWrap: !1,
            pane: "tilePane",
            className: "",
            keepBuffer: 2
        },
        initialize: function(t) {
            s(this, t)
        },
        onAdd: function() {
            this._initContainer(),
            this._levels = {},
            this._tiles = {},
            this._resetView(),
            this._update()
        },
        beforeAdd: function(t) {
            t._addZoomLimit(this)
        },
        onRemove: function(t) {
            this._removeAllTiles(),
            v(this._container),
            t._removeZoomLimit(this),
            this._container = null,
            this._tileZoom = void 0
        },
        bringToFront: function() {
            return this._map && (rt(this._container),
            this._setAutoZIndex(Math.max)),
            this
        },
        bringToBack: function() {
            return this._map && (ht(this._container),
            this._setAutoZIndex(Math.min)),
            this
        },
        getContainer: function() {
            return this._container
        },
        setOpacity: function(t) {
            return this.options.opacity = t,
            this._updateOpacity(),
            this
        },
        setZIndex: function(t) {
            return this.options.zIndex = t,
            this._updateZIndex(),
            this
        },
        isLoading: function() {
            return this._loading
        },
        redraw: function() {
            return this._map && (this._removeAllTiles(),
            this._update()),
            this
        },
        getEvents: function() {
            var t = {
                viewprereset: this._invalidateAll,
                viewreset: this._resetView,
                zoom: this._resetView,
                moveend: this._onMoveEnd
            };
            return this.options.updateWhenIdle || (this._onMove || (this._onMove = D(this._onMoveEnd, this.options.updateInterval, this)),
            t.move = this._onMove),
            this._zoomAnimated && (t.zoomanim = this._animateZoom),
            t
        },
        createTile: function() {
            return document.createElement("div")
        },
        getTileSize: function() {
            var t = this.options.tileSize;
            return t instanceof _ ? t : new _(t,t)
        },
        _updateZIndex: function() {
            this._container && void 0 !== this.options.zIndex && null !== this.options.zIndex && (this._container.style.zIndex = this.options.zIndex)
        },
        _setAutoZIndex: function(t) {
            for (var e, i = this.getPane().children, n = -t(-1 / 0, 1 / 0), o = 0, s = i.length; o < s; o++)
                e = i[o].style.zIndex,
                i[o] !== this._container && e && (n = t(n, +e));
            isFinite(n) && (this.options.zIndex = n + t(-1, 1),
            this._updateZIndex())
        },
        _updateOpacity: function() {
            if (this._map && !we) {
                T(this._container, this.options.opacity);
                var t, e = +new Date, i = !1, n = !1;
                for (t in this._tiles) {
                    var o, s = this._tiles[t];
                    s.current && s.loaded && (o = Math.min(1, (e - s.loaded) / 200),
                    T(s.el, o),
                    o < 1 ? i = !0 : (s.active ? n = !0 : this._onOpaqueTile(s),
                    s.active = !0))
                }
                n && !this._noPrune && this._pruneTiles(),
                i && (a(this._fadeFrame),
                this._fadeFrame = b(this._updateOpacity, this))
            }
        },
        _onOpaqueTile: l,
        _initContainer: function() {
            this._container || (this._container = y("div", "leaflet-layer " + (this.options.className || "")),
            this._updateZIndex(),
            this.options.opacity < 1 && this._updateOpacity(),
            this.getPane().appendChild(this._container))
        },
        _updateLevels: function() {
            var t = this._tileZoom
              , e = this.options.maxZoom;
            if (void 0 !== t) {
                for (var i in this._levels)
                    this._levels[i].el.children.length || i === t ? (this._levels[i].el.style.zIndex = e - Math.abs(t - i),
                    this._onUpdateLevel(i)) : (v(this._levels[i].el),
                    this._removeTilesAtZoom(i),
                    this._onRemoveLevel(i),
                    delete this._levels[i]);
                var n = this._levels[t]
                  , o = this._map;
                return n || ((n = this._levels[t] = {}).el = y("div", "leaflet-tile-container leaflet-zoom-animated", this._container),
                n.el.style.zIndex = e,
                n.origin = o.project(o.unproject(o.getPixelOrigin()), t).round(),
                n.zoom = t,
                this._setZoomTransform(n, o.getCenter(), o.getZoom()),
                n.el.offsetWidth,
                this._onCreateLevel(n)),
                this._level = n
            }
        },
        _onUpdateLevel: l,
        _onRemoveLevel: l,
        _onCreateLevel: l,
        _pruneTiles: function() {
            if (this._map) {
                var t, e, i, n = this._map.getZoom();
                if (n > this.options.maxZoom || n < this.options.minZoom)
                    this._removeAllTiles();
                else {
                    for (t in this._tiles)
                        (e = this._tiles[t]).retain = e.current;
                    for (t in this._tiles)
                        (e = this._tiles[t]).current && !e.active && (i = e.coords,
                        this._retainParent(i.x, i.y, i.z, i.z - 5) || this._retainChildren(i.x, i.y, i.z, i.z + 2));
                    for (t in this._tiles)
                        this._tiles[t].retain || this._removeTile(t)
                }
            }
        },
        _removeTilesAtZoom: function(t) {
            for (var e in this._tiles)
                this._tiles[e].coords.z === t && this._removeTile(e)
        },
        _removeAllTiles: function() {
            for (var t in this._tiles)
                this._removeTile(t)
        },
        _invalidateAll: function() {
            for (var t in this._levels)
                v(this._levels[t].el),
                this._onRemoveLevel(t),
                delete this._levels[t];
            this._removeAllTiles(),
            this._tileZoom = void 0
        },
        _retainParent: function(t, e, i, n) {
            var t = Math.floor(t / 2)
              , e = Math.floor(e / 2)
              , i = i - 1
              , o = new _(+t,+e)
              , o = (o.z = i,
            this._tileCoordsToKey(o))
              , o = this._tiles[o];
            return o && o.active ? o.retain = !0 : (o && o.loaded && (o.retain = !0),
            n < i && this._retainParent(t, e, i, n))
        },
        _retainChildren: function(t, e, i, n) {
            for (var o = 2 * t; o < 2 * t + 2; o++)
                for (var s = 2 * e; s < 2 * e + 2; s++) {
                    var a = new _(o,s)
                      , a = (a.z = i + 1,
                    this._tileCoordsToKey(a))
                      , a = this._tiles[a];
                    a && a.active ? a.retain = !0 : (a && a.loaded && (a.retain = !0),
                    i + 1 < n && this._retainChildren(o, s, i + 1, n))
                }
        },
        _resetView: function(t) {
            t = t && (t.pinch || t.flyTo);
            this._setView(this._map.getCenter(), this._map.getZoom(), t, t)
        },
        _animateZoom: function(t) {
            this._setView(t.center, t.zoom, !0, t.noUpdate)
        },
        _clampZoom: function(t) {
            var e = this.options;
            return void 0 !== e.minNativeZoom && t < e.minNativeZoom ? e.minNativeZoom : void 0 !== e.maxNativeZoom && e.maxNativeZoom < t ? e.maxNativeZoom : t
        },
        _setView: function(t, e, i, n) {
            var o = this._clampZoom(Math.round(e))
              , s = ((void 0 !== this.options.maxZoom && o > this.options.maxZoom || void 0 !== this.options.minZoom && o < this.options.minZoom) && (o = void 0),
            this.options.updateWhenZooming && o !== this._tileZoom);
            n && !s || (this._tileZoom = o,
            this._abortLoading && this._abortLoading(),
            this._updateLevels(),
            this._resetGrid(),
            void 0 !== o && this._update(t),
            i || this._pruneTiles(),
            this._noPrune = !!i),
            this._setZoomTransforms(t, e)
        },
        _setZoomTransforms: function(t, e) {
            for (var i in this._levels)
                this._setZoomTransform(this._levels[i], t, e)
        },
        _setZoomTransform: function(t, e, i) {
            var n = this._map.getZoomScale(i, t.zoom)
              , e = t.origin.multiplyBy(n).subtract(this._map._getNewPixelOrigin(e, i)).round();
            S ? pt(t.el, e, n) : M(t.el, e)
        },
        _resetGrid: function() {
            var t = this._map
              , e = t.options.crs
              , i = this._tileSize = this.getTileSize()
              , n = this._tileZoom
              , o = this._map.getPixelWorldBounds(this._tileZoom);
            o && (this._globalTileRange = this._pxBoundsToTileRange(o)),
            this._wrapX = e.wrapLng && !this.options.noWrap && [Math.floor(t.project([0, e.wrapLng[0]], n).x / i.x), Math.ceil(t.project([0, e.wrapLng[1]], n).x / i.y)],
            this._wrapY = e.wrapLat && !this.options.noWrap && [Math.floor(t.project([e.wrapLat[0], 0], n).y / i.x), Math.ceil(t.project([e.wrapLat[1], 0], n).y / i.y)]
        },
        _onMoveEnd: function() {
            this._map && !this._map._animatingZoom && this._update()
        },
        _getTiledPixelBounds: function(t) {
            var e = this._map
              , i = e._animatingZoom ? Math.max(e._animateToZoom, e.getZoom()) : e.getZoom()
              , i = e.getZoomScale(i, this._tileZoom)
              , t = e.project(t, this._tileZoom).floor()
              , e = e.getSize().divideBy(2 * i);
            return new m(t.subtract(e),t.add(e))
        },
        _update: function(t) {
            var e = this._map;
            if (e) {
                var i = this._clampZoom(e.getZoom());
                if (void 0 === t && (t = e.getCenter()),
                void 0 !== this._tileZoom) {
                    var n, e = this._getTiledPixelBounds(t), o = this._pxBoundsToTileRange(e), s = o.getCenter(), a = [], e = this.options.keepBuffer, r = new m(o.getBottomLeft().subtract([e, -e]),o.getTopRight().add([e, -e]));
                    if (!(isFinite(o.min.x) && isFinite(o.min.y) && isFinite(o.max.x) && isFinite(o.max.y)))
                        throw new Error("Attempted to load an infinite number of tiles");
                    for (n in this._tiles) {
                        var h = this._tiles[n].coords;
                        h.z === this._tileZoom && r.contains(new _(h.x,h.y)) || (this._tiles[n].current = !1)
                    }
                    if (1 < Math.abs(i - this._tileZoom))
                        this._setView(t, i);
                    else {
                        for (var l = o.min.y; l <= o.max.y; l++)
                            for (var u = o.min.x; u <= o.max.x; u++) {
                                var c, d = new _(u,l);
                                d.z = this._tileZoom,
                                this._isValidTile(d) && ((c = this._tiles[this._tileCoordsToKey(d)]) ? c.current = !0 : a.push(d))
                            }
                        if (a.sort(function(t, e) {
                            return t.distanceTo(s) - e.distanceTo(s)
                        }),
                        0 !== a.length) {
                            this._loading || (this._loading = !0,
                            this.fire("loading"));
                            for (var p = document.createDocumentFragment(), u = 0; u < a.length; u++)
                                this._addTile(a[u], p);
                            this._level.el.appendChild(p)
                        }
                    }
                }
            }
        },
        _isValidTile: function(t) {
            var e = this._map.options.crs;
            if (!e.infinite) {
                var i = this._globalTileRange;
                if (!e.wrapLng && (t.x < i.min.x || t.x > i.max.x) || !e.wrapLat && (t.y < i.min.y || t.y > i.max.y))
                    return !1
            }
            if (!this.options.bounds)
                return !0;
            e = this._tileCoordsToBounds(t);
            return f(this.options.bounds).overlaps(e)
        },
        _keyToBounds: function(t) {
            return this._tileCoordsToBounds(this._keyToTileCoords(t))
        },
        _tileCoordsToNwSe: function(t) {
            var e = this._map
              , i = this.getTileSize()
              , n = t.scaleBy(i)
              , i = n.add(i);
            return [e.unproject(n, t.z), e.unproject(i, t.z)]
        },
        _tileCoordsToBounds: function(t) {
            t = this._tileCoordsToNwSe(t),
            t = new p(t[0],t[1]);
            return t = this.options.noWrap ? t : this._map.wrapLatLngBounds(t)
        },
        _tileCoordsToKey: function(t) {
            return t.x + ":" + t.y + ":" + t.z
        },
        _keyToTileCoords: function(t) {
            var t = t.split(":")
              , e = new _(+t[0],+t[1]);
            return e.z = +t[2],
            e
        },
        _removeTile: function(t) {
            var e = this._tiles[t];
            e && (ze || e.el.setAttribute("src", ne),
            v(e.el),
            delete this._tiles[t],
            this.fire("tileunload", {
                tile: e.el,
                coords: this._keyToTileCoords(t)
            }))
        },
        _initTile: function(t) {
            x(t, "leaflet-tile");
            var e = this.getTileSize();
            t.style.width = e.x + "px",
            t.style.height = e.y + "px",
            t.onselectstart = l,
            t.onmousemove = l,
            we && this.options.opacity < 1 && T(t, this.options.opacity),
            Te && !Me && (t.style.WebkitBackfaceVisibility = "hidden")
        },
        _addTile: function(t, e) {
            var i = this._getTilePos(t)
              , n = this._tileCoordsToKey(t)
              , o = this.createTile(this._wrapCoords(t), d(this._tileReady, this, t));
            this._initTile(o),
            this.createTile.length < 2 && b(d(this._tileReady, this, t, null, o)),
            M(o, i),
            this._tiles[n] = {
                el: o,
                coords: t,
                current: !0
            },
            e.appendChild(o),
            this.fire("tileloadstart", {
                tile: o,
                coords: t
            })
        },
        _tileReady: function(t, e, i) {
            var n;
            this._map && i.getAttribute("src") !== ne && (e && this.fire("tileerror", {
                error: e,
                tile: i,
                coords: t
            }),
            n = this._tileCoordsToKey(t),
            (i = this._tiles[n]) && (i.loaded = +new Date,
            this._map._fadeAnimated ? (T(i.el, 0),
            a(this._fadeFrame),
            this._fadeFrame = b(this._updateOpacity, this)) : (i.active = !0,
            this._pruneTiles()),
            e || (x(i.el, "leaflet-tile-loaded"),
            this.fire("tileload", {
                tile: i.el,
                coords: t
            })),
            this._noTilesToLoad() && (this._loading = !1,
            this.fire("load"),
            we || !this._map._fadeAnimated ? b(this._pruneTiles, this) : setTimeout(d(this._pruneTiles, this), 250))))
        },
        _getTilePos: function(t) {
            return t.scaleBy(this.getTileSize()).subtract(this._level.origin)
        },
        _wrapCoords: function(t) {
            var e = new _(this._wrapX ? R(t.x, this._wrapX) : t.x,this._wrapY ? R(t.y, this._wrapY) : t.y);
            return e.z = t.z,
            e
        },
        _pxBoundsToTileRange: function(t) {
            var e = this.getTileSize();
            return new m(t.min.unscaleBy(e).floor(),t.max.unscaleBy(e).ceil().subtract([1, 1]))
        },
        _noTilesToLoad: function() {
            for (var t in this._tiles)
                if (!this._tiles[t].loaded)
                    return !1;
            return !0
        }
    })), Wi = Hi.extend({
        options: {
            minZoom: 0,
            maxZoom: 18,
            subdomains: "abc",
            errorTileUrl: "",
            zoomOffset: 0,
            tms: !1,
            zoomReverse: !1,
            detectRetina: !1,
            crossOrigin: !1
        },
        initialize: function(t, e) {
            this._url = t,
            (e = s(this, e)).detectRetina && We && 0 < e.maxZoom && (e.tileSize = Math.floor(e.tileSize / 2),
            e.zoomReverse ? (e.zoomOffset--,
            e.minZoom++) : (e.zoomOffset++,
            e.maxZoom--),
            e.minZoom = Math.max(0, e.minZoom)),
            "string" == typeof e.subdomains && (e.subdomains = e.subdomains.split("")),
            Te || this.on("tileunload", this._onTileRemove)
        },
        setUrl: function(t, e) {
            return this._url = t,
            e || this.redraw(),
            this
        },
        createTile: function(t, e) {
            var i = document.createElement("img");
            return C(i, "load", d(this._tileOnLoad, this, e, i)),
            C(i, "error", d(this._tileOnError, this, e, i)),
            !this.options.crossOrigin && "" !== this.options.crossOrigin || (i.crossOrigin = !0 === this.options.crossOrigin ? "" : this.options.crossOrigin),
            i.alt = "",
            i.setAttribute("role", "presentation"),
            i.src = this.getTileUrl(t),
            i
        },
        getTileUrl: function(t) {
            var e = {
                r: We ? "@2x" : "",
                s: this._getSubdomain(t),
                x: t.x,
                y: t.y,
                z: this._getZoomForUrl()
            };
            return this._map && !this._map.options.crs.infinite && (t = this._globalTileRange.max.y - t.y,
            this.options.tms && (e.y = t),
            e["-y"] = t),
            W(this._url, h(e, this.options))
        },
        _tileOnLoad: function(t, e) {
            we ? setTimeout(d(t, this, null, e), 0) : t(null, e)
        },
        _tileOnError: function(t, e, i) {
            var n = this.options.errorTileUrl;
            n && e.getAttribute("src") !== n && (e.src = n),
            t(i, e)
        },
        _onTileRemove: function(t) {
            t.tile.onload = null
        },
        _getZoomForUrl: function() {
            var t = this._tileZoom
              , e = this.options.maxZoom;
            return (t = this.options.zoomReverse ? e - t : t) + this.options.zoomOffset
        },
        _getSubdomain: function(t) {
            t = Math.abs(t.x + t.y) % this.options.subdomains.length;
            return this.options.subdomains[t]
        },
        _abortLoading: function() {
            var t, e;
            for (t in this._tiles)
                this._tiles[t].coords.z !== this._tileZoom && ((e = this._tiles[t].el).onload = l,
                e.onerror = l,
                e.complete || (e.src = ne,
                v(e),
                delete this._tiles[t]))
        }
    }), Fi = Wi.extend({
        defaultWmsParams: {
            service: "WMS",
            request: "GetMap",
            layers: "",
            styles: "",
            format: "image/jpeg",
            transparent: !1,
            version: "1.1.1"
        },
        options: {
            crs: null,
            uppercase: !1
        },
        initialize: function(t, e) {
            this._url = t;
            var i, n = h({}, this.defaultWmsParams);
            for (i in e)
                i in this.options || (n[i] = e[i]);
            var t = (e = s(this, e)).detectRetina && We ? 2 : 1
              , o = this.getTileSize();
            n.width = o.x * t,
            n.height = o.y * t,
            this.wmsParams = n
        },
        onAdd: function(t) {
            this._crs = this.options.crs || t.options.crs,
            this._wmsVersion = parseFloat(this.wmsParams.version);
            var e = 1.3 <= this._wmsVersion ? "crs" : "srs";
            this.wmsParams[e] = this._crs.code,
            Wi.prototype.onAdd.call(this, t)
        },
        getTileUrl: function(t) {
            var e = this._tileCoordsToNwSe(t)
              , i = this._crs
              , i = c(i.project(e[0]), i.project(e[1]))
              , e = i.min
              , i = i.max
              , e = (1.3 <= this._wmsVersion && this._crs === wi ? [e.y, e.x, i.y, i.x] : [e.x, e.y, i.x, i.y]).join(",")
              , i = Wi.prototype.getTileUrl.call(this, t);
            return i + H(this.wmsParams, i, this.options.uppercase) + (this.options.uppercase ? "&BBOX=" : "&bbox=") + e
        },
        setParams: function(t, e) {
            return h(this.wmsParams, t),
            e || this.redraw(),
            this
        }
    }), Ui = (Wi.WMS = Fi,
    Kt.wms = function(t, e) {
        return new Fi(t,e)
    }
    ,
    B.extend({
        options: {
            padding: .1,
            tolerance: 0
        },
        initialize: function(t) {
            s(this, t),
            r(this),
            this._layers = this._layers || {}
        },
        onAdd: function() {
            this._container || (this._initContainer(),
            this._zoomAnimated && x(this._container, "leaflet-zoom-animated")),
            this.getPane().appendChild(this._container),
            this._update(),
            this.on("update", this._updatePaths, this)
        },
        onRemove: function() {
            this.off("update", this._updatePaths, this),
            this._destroyContainer()
        },
        getEvents: function() {
            var t = {
                viewreset: this._reset,
                zoom: this._onZoom,
                moveend: this._update,
                zoomend: this._onZoomEnd
            };
            return this._zoomAnimated && (t.zoomanim = this._onAnimZoom),
            t
        },
        _onAnimZoom: function(t) {
            this._updateTransform(t.center, t.zoom)
        },
        _onZoom: function() {
            this._updateTransform(this._map.getCenter(), this._map.getZoom())
        },
        _updateTransform: function(t, e) {
            var i = this._map.getZoomScale(e, this._zoom)
              , n = _t(this._container)
              , o = this._map.getSize().multiplyBy(.5 + this.options.padding)
              , s = this._map.project(this._center, e)
              , t = this._map.project(t, e).subtract(s)
              , e = o.multiplyBy(-i).add(n).add(o).subtract(t);
            S ? pt(this._container, e, i) : M(this._container, e)
        },
        _reset: function() {
            for (var t in this._update(),
            this._updateTransform(this._center, this._zoom),
            this._layers)
                this._layers[t]._reset()
        },
        _onZoomEnd: function() {
            for (var t in this._layers)
                this._layers[t]._project()
        },
        _updatePaths: function() {
            for (var t in this._layers)
                this._layers[t]._update()
        },
        _update: function() {
            var t = this.options.padding
              , e = this._map.getSize()
              , i = this._map.containerPointToLayerPoint(e.multiplyBy(-t)).round();
            this._bounds = new m(i,i.add(e.multiplyBy(1 + 2 * t)).round()),
            this._center = this._map.getCenter(),
            this._zoom = this._map.getZoom()
        }
    })), qi = Ui.extend({
        getEvents: function() {
            var t = Ui.prototype.getEvents.call(this);
            return t.viewprereset = this._onViewPreReset,
            t
        },
        _onViewPreReset: function() {
            this._postponeUpdatePaths = !0
        },
        onAdd: function() {
            Ui.prototype.onAdd.call(this),
            this._draw()
        },
        _initContainer: function() {
            var t = this._container = document.createElement("canvas");
            C(t, "mousemove", D(this._onMouseMove, 32, this), this),
            C(t, "click dblclick mousedown mouseup contextmenu", this._onClick, this),
            C(t, "mouseout", this._handleMouseOut, this),
            this._ctx = t.getContext("2d")
        },
        _destroyContainer: function() {
            a(this._redrawRequest),
            delete this._ctx,
            v(this._container),
            n(this._container),
            delete this._container
        },
        _updatePaths: function() {
            if (!this._postponeUpdatePaths) {
                for (var t in this._redrawBounds = null,
                this._layers)
                    this._layers[t]._update();
                this._redraw()
            }
        },
        _update: function() {
            var t, e, i, n;
            this._map._animatingZoom && this._bounds || (this._drawnLayers = {},
            Ui.prototype._update.call(this),
            t = this._bounds,
            e = this._container,
            i = t.getSize(),
            n = We ? 2 : 1,
            M(e, t.min),
            e.width = n * i.x,
            e.height = n * i.y,
            e.style.width = i.x + "px",
            e.style.height = i.y + "px",
            We && this._ctx.scale(2, 2),
            this._ctx.translate(-t.min.x, -t.min.y),
            this.fire("update"))
        },
        _reset: function() {
            Ui.prototype._reset.call(this),
            this._postponeUpdatePaths && (this._postponeUpdatePaths = !1,
            this._updatePaths())
        },
        _initPath: function(t) {
            this._updateDashArray(t);
            t = (this._layers[r(t)] = t)._order = {
                layer: t,
                prev: this._drawLast,
                next: null
            };
            this._drawLast && (this._drawLast.next = t),
            this._drawLast = t,
            this._drawFirst = this._drawFirst || this._drawLast
        },
        _addPath: function(t) {
            this._requestRedraw(t)
        },
        _removePath: function(t) {
            var e = t._order
              , i = e.next
              , e = e.prev;
            i ? i.prev = e : this._drawLast = e,
            e ? e.next = i : this._drawFirst = i,
            delete this._drawnLayers[t._leaflet_id],
            delete t._order,
            delete this._layers[r(t)],
            this._requestRedraw(t)
        },
        _updatePath: function(t) {
            this._extendRedrawBounds(t),
            t._project(),
            t._update(),
            this._requestRedraw(t)
        },
        _updateStyle: function(t) {
            this._updateDashArray(t),
            this._requestRedraw(t)
        },
        _updateDashArray: function(t) {
            if ("string" == typeof t.options.dashArray) {
                for (var e = t.options.dashArray.split(","), i = [], n = 0; n < e.length; n++)
                    i.push(Number(e[n]));
                t.options._dashArray = i
            } else
                t.options._dashArray = t.options.dashArray
        },
        _requestRedraw: function(t) {
            this._map && (this._extendRedrawBounds(t),
            this._redrawRequest = this._redrawRequest || b(this._redraw, this))
        },
        _extendRedrawBounds: function(t) {
            var e;
            t._pxBounds && (e = (t.options.weight || 0) + 1,
            this._redrawBounds = this._redrawBounds || new m,
            this._redrawBounds.extend(t._pxBounds.min.subtract([e, e])),
            this._redrawBounds.extend(t._pxBounds.max.add([e, e])))
        },
        _redraw: function() {
            this._redrawRequest = null,
            this._redrawBounds && (this._redrawBounds.min._floor(),
            this._redrawBounds.max._ceil()),
            this._clear(),
            this._draw(),
            this._redrawBounds = null
        },
        _clear: function() {
            var t, e = this._redrawBounds;
            e ? (t = e.getSize(),
            this._ctx.clearRect(e.min.x, e.min.y, t.x, t.y)) : this._ctx.clearRect(0, 0, this._container.width, this._container.height)
        },
        _draw: function() {
            var t, e, i = this._redrawBounds;
            this._ctx.save(),
            i && (e = i.getSize(),
            this._ctx.beginPath(),
            this._ctx.rect(i.min.x, i.min.y, e.x, e.y),
            this._ctx.clip()),
            this._drawing = !0;
            for (var n = this._drawFirst; n; n = n.next)
                t = n.layer,
                (!i || t._pxBounds && t._pxBounds.intersects(i)) && t._updatePath();
            this._drawing = !1,
            this._ctx.restore()
        },
        _updatePoly: function(t, e) {
            if (this._drawing) {
                var i, n, o, s, a = t._parts, r = a.length, h = this._ctx;
                if (r) {
                    for (this._drawnLayers[t._leaflet_id] = t,
                    h.beginPath(),
                    i = 0; i < r; i++) {
                        for (n = 0,
                        o = a[i].length; n < o; n++)
                            s = a[i][n],
                            h[n ? "lineTo" : "moveTo"](s.x, s.y);
                        e && h.closePath()
                    }
                    this._fillStroke(h, t)
                }
            }
        },
        _updateCircle: function(t) {
            var e, i, n, o;
            this._drawing && !t._empty() && (e = t._point,
            i = this._ctx,
            n = Math.max(Math.round(t._radius), 1),
            o = (Math.max(Math.round(t._radiusY), 1) || n) / n,
            this._drawnLayers[t._leaflet_id] = t,
            1 != o && (i.save(),
            i.scale(1, o)),
            i.beginPath(),
            i.arc(e.x, e.y / o, n, 0, 2 * Math.PI, !1),
            1 != o && i.restore(),
            this._fillStroke(i, t))
        },
        _fillStroke: function(t, e) {
            var i = e.options;
            i.fill && (t.globalAlpha = i.fillOpacity,
            t.fillStyle = i.fillColor || i.color,
            t.fill(i.fillRule || "evenodd")),
            i.stroke && 0 !== i.weight && (t.setLineDash && t.setLineDash(e.options && e.options._dashArray || []),
            t.globalAlpha = i.opacity,
            t.lineWidth = i.weight,
            t.strokeStyle = i.color,
            t.lineCap = i.lineCap,
            t.lineJoin = i.lineJoin,
            t.stroke())
        },
        _onClick: function(t) {
            for (var e, i, n = this._map.mouseEventToLayerPoint(t), o = this._drawFirst; o; o = o.next)
                (e = o.layer).options.interactive && e._containsPoint(n) && !this._map._draggableMoved(e) && (i = e);
            i && (kt(t),
            this._fireEvent([i], t))
        },
        _onMouseMove: function(t) {
            var e;
            !this._map || this._map.dragging.moving() || this._map._animatingZoom || (e = this._map.mouseEventToLayerPoint(t),
            this._handleMouseHover(t, e))
        },
        _handleMouseOut: function(t) {
            var e = this._hoveredLayer;
            e && (P(this._container, "leaflet-interactive"),
            this._fireEvent([e], t, "mouseout"),
            this._hoveredLayer = null)
        },
        _handleMouseHover: function(t, e) {
            for (var i, n, o = this._drawFirst; o; o = o.next)
                (i = o.layer).options.interactive && i._containsPoint(e) && (n = i);
            n !== this._hoveredLayer && (this._handleMouseOut(t),
            n && (x(this._container, "leaflet-interactive"),
            this._fireEvent([n], t, "mouseover"),
            this._hoveredLayer = n)),
            this._hoveredLayer && this._fireEvent([this._hoveredLayer], t)
        },
        _fireEvent: function(t, e, i) {
            this._map._fireDOMEvent(e, i || e.type, t)
        },
        _bringToFront: function(t) {
            var e = t._order
              , i = e.next
              , n = e.prev;
            i && ((i.prev = n) ? n.next = i : i && (this._drawFirst = i),
            e.prev = this._drawLast,
            (this._drawLast.next = e).next = null,
            this._drawLast = e,
            this._requestRedraw(t))
        },
        _bringToBack: function(t) {
            var e = t._order
              , i = e.next
              , n = e.prev;
            n && ((n.next = i) ? i.prev = n : n && (this._drawLast = n),
            e.prev = null,
            e.next = this._drawFirst,
            this._drawFirst.prev = e,
            this._drawFirst = e,
            this._requestRedraw(t))
        }
    }), Gi = function() {
        try {
            return document.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"),
            function(t) {
                return document.createElement("<lvml:" + t + ' class="lvml">')
            }
        } catch (t) {
            return function(t) {
                return document.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')
            }
        }
    }(), Re = {
        _initContainer: function() {
            this._container = y("div", "leaflet-vml-container")
        },
        _update: function() {
            this._map._animatingZoom || (Ui.prototype._update.call(this),
            this.fire("update"))
        },
        _initPath: function(t) {
            var e = t._container = Gi("shape");
            x(e, "leaflet-vml-shape " + (this.options.className || "")),
            e.coordsize = "1 1",
            t._path = Gi("path"),
            e.appendChild(t._path),
            this._updateStyle(t),
            this._layers[r(t)] = t
        },
        _addPath: function(t) {
            var e = t._container;
            this._container.appendChild(e),
            t.options.interactive && t.addInteractiveTarget(e)
        },
        _removePath: function(t) {
            var e = t._container;
            v(e),
            t.removeInteractiveTarget(e),
            delete this._layers[r(t)]
        },
        _updateStyle: function(t) {
            var e = t._stroke
              , i = t._fill
              , n = t.options
              , o = t._container;
            o.stroked = !!n.stroke,
            o.filled = !!n.fill,
            n.stroke ? (e = e || (t._stroke = Gi("stroke")),
            o.appendChild(e),
            e.weight = n.weight + "px",
            e.color = n.color,
            e.opacity = n.opacity,
            n.dashArray ? e.dashStyle = ie(n.dashArray) ? n.dashArray.join(" ") : n.dashArray.replace(/( *, *)/g, " ") : e.dashStyle = "",
            e.endcap = n.lineCap.replace("butt", "flat"),
            e.joinstyle = n.lineJoin) : e && (o.removeChild(e),
            t._stroke = null),
            n.fill ? (i = i || (t._fill = Gi("fill")),
            o.appendChild(i),
            i.color = n.fillColor || n.color,
            i.opacity = n.fillOpacity) : i && (o.removeChild(i),
            t._fill = null)
        },
        _updateCircle: function(t) {
            var e = t._point.round()
              , i = Math.round(t._radius)
              , n = Math.round(t._radiusY || i);
            this._setPath(t, t._empty() ? "M0 0" : "AL " + e.x + "," + e.y + " " + i + "," + n + " 0,23592600")
        },
        _setPath: function(t, e) {
            t._path.v = e
        },
        _bringToFront: function(t) {
            rt(t._container)
        },
        _bringToBack: function(t) {
            ht(t._container)
        }
    }, Vi = qe ? Gi : K, $i = Ui.extend({
        getEvents: function() {
            var t = Ui.prototype.getEvents.call(this);
            return t.zoomstart = this._onZoomStart,
            t
        },
        _initContainer: function() {
            this._container = Vi("svg"),
            this._container.setAttribute("pointer-events", "none"),
            this._rootGroup = Vi("g"),
            this._container.appendChild(this._rootGroup)
        },
        _destroyContainer: function() {
            v(this._container),
            n(this._container),
            delete this._container,
            delete this._rootGroup,
            delete this._svgSize
        },
        _onZoomStart: function() {
            this._update()
        },
        _update: function() {
            var t, e, i;
            this._map._animatingZoom && this._bounds || (Ui.prototype._update.call(this),
            e = (t = this._bounds).getSize(),
            i = this._container,
            this._svgSize && this._svgSize.equals(e) || (this._svgSize = e,
            i.setAttribute("width", e.x),
            i.setAttribute("height", e.y)),
            M(i, t.min),
            i.setAttribute("viewBox", [t.min.x, t.min.y, e.x, e.y].join(" ")),
            this.fire("update"))
        },
        _initPath: function(t) {
            var e = t._path = Vi("path");
            t.options.className && x(e, t.options.className),
            t.options.interactive && x(e, "leaflet-interactive"),
            this._updateStyle(t),
            this._layers[r(t)] = t
        },
        _addPath: function(t) {
            this._rootGroup || this._initContainer(),
            this._rootGroup.appendChild(t._path),
            t.addInteractiveTarget(t._path)
        },
        _removePath: function(t) {
            v(t._path),
            t.removeInteractiveTarget(t._path),
            delete this._layers[r(t)]
        },
        _updatePath: function(t) {
            t._project(),
            t._update()
        },
        _updateStyle: function(t) {
            var e = t._path
              , t = t.options;
            e && (t.stroke ? (e.setAttribute("stroke", t.color),
            e.setAttribute("stroke-opacity", t.opacity),
            e.setAttribute("stroke-width", t.weight),
            e.setAttribute("stroke-linecap", t.lineCap),
            e.setAttribute("stroke-linejoin", t.lineJoin),
            t.dashArray ? e.setAttribute("stroke-dasharray", t.dashArray) : e.removeAttribute("stroke-dasharray"),
            t.dashOffset ? e.setAttribute("stroke-dashoffset", t.dashOffset) : e.removeAttribute("stroke-dashoffset")) : e.setAttribute("stroke", "none"),
            t.fill ? (e.setAttribute("fill", t.fillColor || t.color),
            e.setAttribute("fill-opacity", t.fillOpacity),
            e.setAttribute("fill-rule", t.fillRule || "evenodd")) : e.setAttribute("fill", "none"))
        },
        _updatePoly: function(t, e) {
            this._setPath(t, Y(t._parts, e))
        },
        _updateCircle: function(t) {
            var e = t._point
              , i = Math.max(Math.round(t._radius), 1)
              , n = "a" + i + "," + (Math.max(Math.round(t._radiusY), 1) || i) + " 0 1,0 "
              , e = t._empty() ? "M0 0" : "M" + (e.x - i) + "," + e.y + n + 2 * i + ",0 " + n + 2 * -i + ",0 ";
            this._setPath(t, e)
        },
        _setPath: function(t, e) {
            t._path.setAttribute("d", e)
        },
        _bringToFront: function(t) {
            rt(t._path)
        },
        _bringToBack: function(t) {
            ht(t._path)
        }
    }), Ki = (qe && $i.include(Re),
    Z.include({
        getRenderer: function(t) {
            t = (t = t.options.renderer || this._getPaneRenderer(t.options.pane) || this.options.renderer || this._renderer) || (this._renderer = this._createRenderer());
            return this.hasLayer(t) || this.addLayer(t),
            t
        },
        _getPaneRenderer: function(t) {
            if ("overlayPane" === t || void 0 === t)
                return !1;
            var e = this._paneRenderers[t];
            return void 0 === e && (e = this._createRenderer({
                pane: t
            }),
            this._paneRenderers[t] = e),
            e
        },
        _createRenderer: function(t) {
            return this.options.preferCanvas && Yt(t) || Xt(t)
        }
    }),
    Oi.extend({
        initialize: function(t, e) {
            Oi.prototype.initialize.call(this, this._boundsToLatLngs(t), e)
        },
        setBounds: function(t) {
            return this.setLatLngs(this._boundsToLatLngs(t))
        },
        _boundsToLatLngs: function(t) {
            return [(t = f(t)).getSouthWest(), t.getNorthWest(), t.getNorthEast(), t.getSouthEast()]
        }
    })), E = ($i.create = Vi,
    $i.pointsToPath = Y,
    Zi.geometryToLayer = Ht,
    Zi.coordsToLatLng = Wt,
    Zi.coordsToLatLngs = Ft,
    Zi.latLngToCoords = Ut,
    Zi.latLngsToCoords = qt,
    Zi.getFeature = Gt,
    Zi.asFeature = Vt,
    Z.mergeOptions({
        boxZoom: !0
    }),
    k.extend({
        initialize: function(t) {
            this._map = t,
            this._container = t._container,
            this._pane = t._panes.overlayPane,
            this._resetStateTimeout = 0,
            t.on("unload", this._destroy, this)
        },
        addHooks: function() {
            C(this._container, "mousedown", this._onMouseDown, this)
        },
        removeHooks: function() {
            n(this._container, "mousedown", this._onMouseDown, this)
        },
        moved: function() {
            return this._moved
        },
        _destroy: function() {
            v(this._pane),
            delete this._pane
        },
        _resetState: function() {
            this._resetStateTimeout = 0,
            this._moved = !1
        },
        _clearDeferredResetState: function() {
            0 !== this._resetStateTimeout && (clearTimeout(this._resetStateTimeout),
            this._resetStateTimeout = 0)
        },
        _onMouseDown: function(t) {
            if (!t.shiftKey || 1 !== t.which && 1 !== t.button)
                return !1;
            this._clearDeferredResetState(),
            this._resetState(),
            fe(),
            mt(),
            this._startPoint = this._map.mouseEventToContainerPoint(t),
            C(document, {
                contextmenu: Mt,
                mousemove: this._onMouseMove,
                mouseup: this._onMouseUp,
                keydown: this._onKeyDown
            }, this)
        },
        _onMouseMove: function(t) {
            this._moved || (this._moved = !0,
            this._box = y("div", "leaflet-zoom-box", this._container),
            x(this._container, "leaflet-crosshair"),
            this._map.fire("boxzoomstart")),
            this._point = this._map.mouseEventToContainerPoint(t);
            var t = new m(this._point,this._startPoint)
              , e = t.getSize();
            M(this._box, t.min),
            this._box.style.width = e.x + "px",
            this._box.style.height = e.y + "px"
        },
        _finish: function() {
            this._moved && (v(this._box),
            P(this._container, "leaflet-crosshair")),
            ge(),
            ft(),
            n(document, {
                contextmenu: Mt,
                mousemove: this._onMouseMove,
                mouseup: this._onMouseUp,
                keydown: this._onKeyDown
            }, this)
        },
        _onMouseUp: function(t) {
            1 !== t.which && 1 !== t.button || (this._finish(),
            !this._moved) || (this._clearDeferredResetState(),
            this._resetStateTimeout = setTimeout(d(this._resetState, this), 0),
            t = new p(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point)),
            this._map.fitBounds(t).fire("boxzoomend", {
                boxZoomBounds: t
            }))
        },
        _onKeyDown: function(t) {
            27 === t.keyCode && this._finish()
        }
    })), De = (Z.addInitHook("addHandler", "boxZoom", E),
    Z.mergeOptions({
        doubleClickZoom: !0
    }),
    k.extend({
        addHooks: function() {
            this._map.on("dblclick", this._onDoubleClick, this)
        },
        removeHooks: function() {
            this._map.off("dblclick", this._onDoubleClick, this)
        },
        _onDoubleClick: function(t) {
            var e = this._map
              , i = e.getZoom()
              , n = e.options.zoomDelta
              , i = t.originalEvent.shiftKey ? i - n : i + n;
            "center" === e.options.doubleClickZoom ? e.setZoom(i) : e.setZoomAround(t.containerPoint, i)
        }
    })), Oe = (Z.addInitHook("addHandler", "doubleClickZoom", De),
    Z.mergeOptions({
        dragging: !0,
        inertia: !Me,
        inertiaDeceleration: 3400,
        inertiaMaxSpeed: 1 / 0,
        easeLinearity: .2,
        worldCopyJump: !1,
        maxBoundsViscosity: 0
    }),
    k.extend({
        addHooks: function() {
            var t;
            this._draggable || (t = this._map,
            this._draggable = new bi(t._mapPane,t._container),
            this._draggable.on({
                dragstart: this._onDragStart,
                drag: this._onDrag,
                dragend: this._onDragEnd
            }, this),
            this._draggable.on("predrag", this._onPreDragLimit, this),
            t.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDragWrap, this),
            t.on("zoomend", this._onZoomEnd, this),
            t.whenReady(this._onZoomEnd, this))),
            x(this._map._container, "leaflet-grab leaflet-touch-drag"),
            this._draggable.enable(),
            this._positions = [],
            this._times = []
        },
        removeHooks: function() {
            P(this._map._container, "leaflet-grab"),
            P(this._map._container, "leaflet-touch-drag"),
            this._draggable.disable()
        },
        moved: function() {
            return this._draggable && this._draggable._moved
        },
        moving: function() {
            return this._draggable && this._draggable._moving
        },
        _onDragStart: function() {
            var t, e = this._map;
            e._stop(),
            this._map.options.maxBounds && this._map.options.maxBoundsViscosity ? (t = f(this._map.options.maxBounds),
            this._offsetLimit = c(this._map.latLngToContainerPoint(t.getNorthWest()).multiplyBy(-1), this._map.latLngToContainerPoint(t.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),
            this._viscosity = Math.min(1, Math.max(0, this._map.options.maxBoundsViscosity))) : this._offsetLimit = null,
            e.fire("movestart").fire("dragstart"),
            e.options.inertia && (this._positions = [],
            this._times = [])
        },
        _onDrag: function(t) {
            var e, i;
            this._map.options.inertia && (e = this._lastTime = +new Date,
            i = this._lastPos = this._draggable._absPos || this._draggable._newPos,
            this._positions.push(i),
            this._times.push(e),
            this._prunePositions(e)),
            this._map.fire("move", t).fire("drag", t)
        },
        _prunePositions: function(t) {
            for (; 1 < this._positions.length && 50 < t - this._times[0]; )
                this._positions.shift(),
                this._times.shift()
        },
        _onZoomEnd: function() {
            var t = this._map.getSize().divideBy(2)
              , e = this._map.latLngToLayerPoint([0, 0]);
            this._initialWorldOffset = e.subtract(t).x,
            this._worldWidth = this._map.getPixelWorldBounds().getSize().x
        },
        _viscousLimit: function(t, e) {
            return t - (t - e) * this._viscosity
        },
        _onPreDragLimit: function() {
            var t, e;
            this._viscosity && this._offsetLimit && (t = this._draggable._newPos.subtract(this._draggable._startPos),
            e = this._offsetLimit,
            t.x < e.min.x && (t.x = this._viscousLimit(t.x, e.min.x)),
            t.y < e.min.y && (t.y = this._viscousLimit(t.y, e.min.y)),
            t.x > e.max.x && (t.x = this._viscousLimit(t.x, e.max.x)),
            t.y > e.max.y && (t.y = this._viscousLimit(t.y, e.max.y)),
            this._draggable._newPos = this._draggable._startPos.add(t))
        },
        _onPreDragWrap: function() {
            var t = this._worldWidth
              , e = Math.round(t / 2)
              , i = this._initialWorldOffset
              , n = this._draggable._newPos.x
              , o = (n - e + i) % t + e - i
              , n = (n + e + i) % t - e - i
              , t = Math.abs(o + i) < Math.abs(n + i) ? o : n;
            this._draggable._absPos = this._draggable._newPos.clone(),
            this._draggable._newPos.x = t
        },
        _onDragEnd: function(t) {
            var e, i, n, o, s = this._map, a = s.options, r = !a.inertia || this._times.length < 2;
            s.fire("dragend", t),
            r ? s.fire("moveend") : (this._prunePositions(+new Date),
            t = this._lastPos.subtract(this._positions[0]),
            r = (this._lastTime - this._times[0]) / 1e3,
            e = a.easeLinearity,
            r = (t = t.multiplyBy(e / r)).distanceTo([0, 0]),
            i = Math.min(a.inertiaMaxSpeed, r),
            t = t.multiplyBy(i / r),
            n = i / (a.inertiaDeceleration * e),
            (o = t.multiplyBy(-n / 2).round()).x || o.y ? (o = s._limitOffset(o, s.options.maxBounds),
            b(function() {
                s.panBy(o, {
                    duration: n,
                    easeLinearity: e,
                    noMoveStart: !0,
                    animate: !0
                })
            })) : s.fire("moveend"))
        }
    })), ye = (Z.addInitHook("addHandler", "dragging", Oe),
    Z.mergeOptions({
        keyboard: !0,
        keyboardPanDelta: 80
    }),
    k.extend({
        keyCodes: {
            left: [37],
            right: [39],
            down: [40],
            up: [38],
            zoomIn: [187, 107, 61, 171],
            zoomOut: [189, 109, 54, 173]
        },
        initialize: function(t) {
            this._map = t,
            this._setPanDelta(t.options.keyboardPanDelta),
            this._setZoomDelta(t.options.zoomDelta)
        },
        addHooks: function() {
            var t = this._map._container;
            t.tabIndex <= 0 && (t.tabIndex = "0"),
            C(t, {
                focus: this._onFocus,
                blur: this._onBlur,
                mousedown: this._onMouseDown
            }, this),
            this._map.on({
                focus: this._addHooks,
                blur: this._removeHooks
            }, this)
        },
        removeHooks: function() {
            this._removeHooks(),
            n(this._map._container, {
                focus: this._onFocus,
                blur: this._onBlur,
                mousedown: this._onMouseDown
            }, this),
            this._map.off({
                focus: this._addHooks,
                blur: this._removeHooks
            }, this)
        },
        _onMouseDown: function() {
            var t, e, i;
            this._focused || (i = document.body,
            t = document.documentElement,
            e = i.scrollTop || t.scrollTop,
            i = i.scrollLeft || t.scrollLeft,
            this._map._container.focus(),
            window.scrollTo(i, e))
        },
        _onFocus: function() {
            this._focused = !0,
            this._map.fire("focus")
        },
        _onBlur: function() {
            this._focused = !1,
            this._map.fire("blur")
        },
        _setPanDelta: function(t) {
            for (var e = this._panKeys = {}, i = this.keyCodes, n = 0, o = i.left.length; n < o; n++)
                e[i.left[n]] = [-1 * t, 0];
            for (n = 0,
            o = i.right.length; n < o; n++)
                e[i.right[n]] = [t, 0];
            for (n = 0,
            o = i.down.length; n < o; n++)
                e[i.down[n]] = [0, t];
            for (n = 0,
            o = i.up.length; n < o; n++)
                e[i.up[n]] = [0, -1 * t]
        },
        _setZoomDelta: function(t) {
            for (var e = this._zoomKeys = {}, i = this.keyCodes, n = 0, o = i.zoomIn.length; n < o; n++)
                e[i.zoomIn[n]] = t;
            for (n = 0,
            o = i.zoomOut.length; n < o; n++)
                e[i.zoomOut[n]] = -t
        },
        _addHooks: function() {
            C(document, "keydown", this._onKeyDown, this)
        },
        _removeHooks: function() {
            n(document, "keydown", this._onKeyDown, this)
        },
        _onKeyDown: function(t) {
            if (!(t.altKey || t.ctrlKey || t.metaKey)) {
                var e, i = t.keyCode, n = this._map;
                if (i in this._panKeys)
                    n._panAnim && n._panAnim._inProgress || (e = this._panKeys[i],
                    t.shiftKey && (e = u(e).multiplyBy(3)),
                    n.panBy(e),
                    n.options.maxBounds && n.panInsideBounds(n.options.maxBounds));
                else if (i in this._zoomKeys)
                    n.setZoom(n.getZoom() + (t.shiftKey ? 3 : 1) * this._zoomKeys[i]);
                else {
                    if (27 !== i || !n._popup || !n._popup.options.closeOnEscapeKey)
                        return;
                    n.closePopup()
                }
                Mt(t)
            }
        }
    })), ve = (Z.addInitHook("addHandler", "keyboard", ye),
    Z.mergeOptions({
        scrollWheelZoom: !0,
        wheelDebounceTime: 40,
        wheelPxPerZoomLevel: 60
    }),
    k.extend({
        addHooks: function() {
            C(this._map._container, "mousewheel", this._onWheelScroll, this),
            this._delta = 0
        },
        removeHooks: function() {
            n(this._map._container, "mousewheel", this._onWheelScroll, this)
        },
        _onWheelScroll: function(t) {
            var e = zt(t)
              , i = this._map.options.wheelDebounceTime
              , e = (this._delta += e,
            this._lastMousePos = this._map.mouseEventToContainerPoint(t),
            this._startTime || (this._startTime = +new Date),
            Math.max(i - (+new Date - this._startTime), 0));
            clearTimeout(this._timer),
            this._timer = setTimeout(d(this._performZoom, this), e),
            Mt(t)
        },
        _performZoom: function() {
            var t = this._map
              , e = t.getZoom()
              , i = this._map.options.zoomSnap || 0
              , n = (t._stop(),
            this._delta / (4 * this._map.options.wheelPxPerZoomLevel))
              , n = 4 * Math.log(2 / (1 + Math.exp(-Math.abs(n)))) / Math.LN2
              , i = i ? Math.ceil(n / i) * i : n
              , n = t._limitZoom(e + (0 < this._delta ? i : -i)) - e;
            this._delta = 0,
            this._startTime = null,
            n && ("center" === t.options.scrollWheelZoom ? t.setZoom(e + n) : t.setZoomAround(this._lastMousePos, e + n))
        }
    })), Se = (Z.addInitHook("addHandler", "scrollWheelZoom", ve),
    Z.mergeOptions({
        tap: !0,
        tapTolerance: 15
    }),
    k.extend({
        addHooks: function() {
            C(this._map._container, "touchstart", this._onDown, this)
        },
        removeHooks: function() {
            n(this._map._container, "touchstart", this._onDown, this)
        },
        _onDown: function(t) {
            var e;
            t.touches && (z(t),
            this._fireClick = !0,
            1 < t.touches.length ? (this._fireClick = !1,
            clearTimeout(this._holdTimeout)) : (t = (e = t.touches[0]).target,
            this._startPos = this._newPos = new _(e.clientX,e.clientY),
            t.tagName && "a" === t.tagName.toLowerCase() && x(t, "leaflet-active"),
            this._holdTimeout = setTimeout(d(function() {
                this._isTapValid() && (this._fireClick = !1,
                this._onUp(),
                this._simulateEvent("contextmenu", e))
            }, this), 1e3),
            this._simulateEvent("mousedown", e),
            C(document, {
                touchmove: this._onMove,
                touchend: this._onUp
            }, this)))
        },
        _onUp: function(t) {
            var e;
            clearTimeout(this._holdTimeout),
            n(document, {
                touchmove: this._onMove,
                touchend: this._onUp
            }, this),
            this._fireClick && t && t.changedTouches && ((e = (t = t.changedTouches[0]).target) && e.tagName && "a" === e.tagName.toLowerCase() && P(e, "leaflet-active"),
            this._simulateEvent("mouseup", t),
            this._isTapValid() && this._simulateEvent("click", t))
        },
        _isTapValid: function() {
            return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance
        },
        _onMove: function(t) {
            t = t.touches[0];
            this._newPos = new _(t.clientX,t.clientY),
            this._simulateEvent("mousemove", t)
        },
        _simulateEvent: function(t, e) {
            var i = document.createEvent("MouseEvents");
            i._simulated = !0,
            e.target._simulatedClick = !0,
            i.initMouseEvent(t, !0, !0, window, 1, e.screenX, e.screenY, e.clientX, e.clientY, !1, !1, !1, !1, 0, null),
            e.target.dispatchEvent(i)
        }
    })), o = (Ne && !A && Z.addInitHook("addHandler", "tap", Se),
    Z.mergeOptions({
        touchZoom: Ne && !Me,
        bounceAtZoomLimits: !0
    }),
    k.extend({
        addHooks: function() {
            x(this._map._container, "leaflet-touch-zoom"),
            C(this._map._container, "touchstart", this._onTouchStart, this)
        },
        removeHooks: function() {
            P(this._map._container, "leaflet-touch-zoom"),
            n(this._map._container, "touchstart", this._onTouchStart, this)
        },
        _onTouchStart: function(t) {
            var e, i, n = this._map;
            !t.touches || 2 !== t.touches.length || n._animatingZoom || this._zooming || (e = n.mouseEventToContainerPoint(t.touches[0]),
            i = n.mouseEventToContainerPoint(t.touches[1]),
            this._centerPoint = n.getSize()._divideBy(2),
            this._startLatLng = n.containerPointToLatLng(this._centerPoint),
            "center" !== n.options.touchZoom && (this._pinchStartLatLng = n.containerPointToLatLng(e.add(i)._divideBy(2))),
            this._startDist = e.distanceTo(i),
            this._startZoom = n.getZoom(),
            this._moved = !1,
            this._zooming = !0,
            n._stop(),
            C(document, "touchmove", this._onTouchMove, this),
            C(document, "touchend", this._onTouchEnd, this),
            z(t))
        },
        _onTouchMove: function(t) {
            if (t.touches && 2 === t.touches.length && this._zooming) {
                var e = this._map
                  , i = e.mouseEventToContainerPoint(t.touches[0])
                  , n = e.mouseEventToContainerPoint(t.touches[1])
                  , o = i.distanceTo(n) / this._startDist;
                if (this._zoom = e.getScaleZoom(o, this._startZoom),
                !e.options.bounceAtZoomLimits && (this._zoom < e.getMinZoom() && o < 1 || this._zoom > e.getMaxZoom() && 1 < o) && (this._zoom = e._limitZoom(this._zoom)),
                "center" === e.options.touchZoom) {
                    if (this._center = this._startLatLng,
                    1 == o)
                        return
                } else {
                    i = i._add(n)._divideBy(2)._subtract(this._centerPoint);
                    if (1 == o && 0 === i.x && 0 === i.y)
                        return;
                    this._center = e.unproject(e.project(this._pinchStartLatLng, this._zoom).subtract(i), this._zoom)
                }
                this._moved || (e._moveStart(!0, !1),
                this._moved = !0),
                a(this._animRequest);
                n = d(e._move, e, this._center, this._zoom, {
                    pinch: !0,
                    round: !1
                });
                this._animRequest = b(n, this, !0),
                z(t)
            }
        },
        _onTouchEnd: function() {
            this._moved && this._zooming ? (this._zooming = !1,
            a(this._animRequest),
            n(document, "touchmove", this._onTouchMove),
            n(document, "touchend", this._onTouchEnd),
            this._map.options.zoomAnimation ? this._map._animateZoom(this._center, this._map._limitZoom(this._zoom), !0, this._map.options.zoomSnap) : this._map._resetView(this._center, this._map._limitZoom(this._zoom))) : this._zooming = !1
        }
    })), Yi = (Z.addInitHook("addHandler", "touchZoom", o),
    Z.BoxZoom = E,
    Z.DoubleClickZoom = De,
    Z.Drag = Oe,
    Z.Keyboard = ye,
    Z.ScrollWheelZoom = ve,
    Z.Tap = Se,
    Z.TouchZoom = o,
    Object.freeze = Jt,
    t.version = "1.3.3+HEAD.b22aef4",
    t.Control = I,
    t.control = ai,
    t.Browser = be,
    t.Evented = le,
    t.Mixin = Ae,
    t.Util = re,
    t.Class = G,
    t.Handler = k,
    t.extend = h,
    t.bind = d,
    t.stamp = r,
    t.setOptions = s,
    t.DomEvent = Ce,
    t.DomUtil = Pe,
    t.PosAnimation = di,
    t.Draggable = bi,
    t.LineUtil = Ie,
    t.PolyUtil = Le,
    t.Point = _,
    t.point = u,
    t.Bounds = m,
    t.bounds = c,
    t.Transformation = V,
    t.transformation = $,
    t.Projection = He,
    t.LatLng = g,
    t.latLng = w,
    t.LatLngBounds = p,
    t.latLngBounds = f,
    t.CRS = ce,
    t.GeoJSON = Zi,
    t.geoJSON = $t,
    t.geoJson = pe,
    t.Layer = B,
    t.LayerGroup = xi,
    t.layerGroup = function(t, e) {
        return new xi(t,e)
    }
    ,
    t.FeatureGroup = Pi,
    t.featureGroup = function(t) {
        return new Pi(t)
    }
    ,
    t.ImageOverlay = Ii,
    t.imageOverlay = function(t, e, i) {
        return new Ii(t,e,i)
    }
    ,
    t.VideoOverlay = Bi,
    t.videoOverlay = function(t, e, i) {
        return new Bi(t,e,i)
    }
    ,
    t.DivOverlay = Di,
    t.Popup = Ri,
    t.popup = function(t, e) {
        return new Ri(t,e)
    }
    ,
    t.Tooltip = Ni,
    t.tooltip = function(t, e) {
        return new Ni(t,e)
    }
    ,
    t.Icon = Ti,
    t.icon = function(t) {
        return new Ti(t)
    }
    ,
    t.DivIcon = ji,
    t.divIcon = function(t) {
        return new ji(t)
    }
    ,
    t.Marker = zi,
    t.marker = function(t, e) {
        return new zi(t,e)
    }
    ,
    t.TileLayer = Wi,
    t.tileLayer = Kt,
    t.GridLayer = Hi,
    t.gridLayer = function(t) {
        return new Hi(t)
    }
    ,
    t.SVG = $i,
    t.svg = Xt,
    t.Renderer = Ui,
    t.Canvas = qi,
    t.canvas = Yt,
    t.Path = ki,
    t.CircleMarker = Si,
    t.circleMarker = function(t, e) {
        return new Si(t,e)
    }
    ,
    t.Circle = Ei,
    t.circle = function(t, e, i) {
        return new Ei(t,e,i)
    }
    ,
    t.Polyline = Ai,
    t.polyline = function(t, e) {
        return new Ai(t,e)
    }
    ,
    t.Polygon = Oi,
    t.polygon = function(t, e) {
        return new Oi(t,e)
    }
    ,
    t.Rectangle = Ki,
    t.rectangle = function(t, e) {
        return new Ki(t,e)
    }
    ,
    t.Map = Z,
    t.map = function(t, e) {
        return new Z(t,e)
    }
    ,
    window.L);
    t.noConflict = function() {
        return window.L = Yi,
        this
    }
    ,
    window.L = t
}),
!function(t, e) {
    "function" == typeof define && define.amd ? define(["leaflet"], t) : "object" == typeof exports && (module.exports = t(require("leaflet"))),
    void 0 !== e && e.L && (e.LeafletLabel = t(L))
}(function(r) {
    r.labelVersion = "0.2.4";
    var n = r.Layer.extend({
        options: {
            className: "",
            clickable: !1,
            direction: "right",
            noHide: !1,
            offset: [12, -15],
            opacity: 1,
            zoomAnimation: !0
        },
        initialize: function(t, e) {
            r.setOptions(this, t),
            this._source = e,
            this._animated = r.Browser.any3d && this.options.zoomAnimation,
            this._isOpen = !1
        },
        onAdd: function(t) {
            this._map = t,
            this._pane = this.options.pane ? t._panes[this.options.pane] : this._source instanceof r.Marker ? t._panes.markerPane : t._panes.popupPane,
            this._container || this._initLayout(),
            this._pane.appendChild(this._container),
            this._initInteraction(),
            this._update(),
            this.setOpacity(this.options.opacity),
            t.on("moveend", this._onMoveEnd, this).on("viewreset", this._onViewReset, this),
            this._animated && t.on("zoomanim", this._zoomAnimation, this),
            r.Browser.touch && !this.options.noHide && (r.DomEvent.on(this._container, "click", this.close, this),
            t.on("click", this.close, this))
        },
        onRemove: function(t) {
            this._pane.removeChild(this._container),
            t.off({
                zoomanim: this._zoomAnimation,
                moveend: this._onMoveEnd,
                viewreset: this._onViewReset
            }, this),
            this._removeInteraction(),
            this._map = null
        },
        setLatLng: function(t) {
            return this._latlng = r.latLng(t),
            this._map && this._updatePosition(),
            this
        },
        setContent: function(t) {
            return this._previousContent = this._content,
            this._content = t,
            this._updateContent(),
            this
        },
        close: function() {
            var t = this._map;
            t && (r.Browser.touch && !this.options.noHide && (r.DomEvent.off(this._container, "click", this.close),
            t.off("click", this.close, this)),
            t.removeLayer(this))
        },
        updateZIndex: function(t) {
            this._zIndex = t,
            this._container && this._zIndex && (this._container.style.zIndex = t)
        },
        setOpacity: function(t) {
            this.options.opacity = t,
            this._container && r.DomUtil.setOpacity(this._container, t)
        },
        _initLayout: function() {
            this._container = r.DomUtil.create("div", "leaflet-label " + this.options.className + " leaflet-zoom-animated"),
            this.updateZIndex(this._zIndex)
        },
        _update: function() {
            this._map && (this._container.style.visibility = "hidden",
            this._updateContent(),
            this._updatePosition(),
            this._container.style.visibility = "")
        },
        _updateContent: function() {
            this._content && this._map && this._prevContent !== this._content && "string" == typeof this._content && (this._container.innerHTML = this._content,
            this._prevContent = this._content,
            this._labelWidth = this._container.offsetWidth)
        },
        _updatePosition: function() {
            var t = this._map.latLngToLayerPoint(this._latlng);
            this._setPosition(t)
        },
        _setPosition: function(t) {
            var e = this._map
              , i = this._container
              , n = e.latLngToContainerPoint(e.getCenter())
              , e = e.layerPointToContainerPoint(t)
              , o = this.options.direction
              , s = this._labelWidth
              , a = r.point(this.options.offset);
            t = ("right" === o || "auto" === o) && e.x < n.x ? (r.DomUtil.addClass(i, "leaflet-label-right"),
            r.DomUtil.removeClass(i, "leaflet-label-left"),
            t.add(a)) : (r.DomUtil.addClass(i, "leaflet-label-left"),
            r.DomUtil.removeClass(i, "leaflet-label-right"),
            t.add(r.point(-a.x - s, a.y))),
            r.DomUtil.setPosition(i, t)
        },
        _zoomAnimation: function(t) {
            t = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center).round();
            this._setPosition(t)
        },
        _onMoveEnd: function() {
            this._animated && "auto" !== this.options.direction || this._updatePosition()
        },
        _onViewReset: function(t) {
            t && t.hard && this._update()
        },
        _initInteraction: function() {
            if (this.options.clickable) {
                var t = this._container
                  , e = ["dblclick", "mousedown", "mouseover", "mouseout", "contextmenu"];
                r.DomUtil.addClass(t, "leaflet-clickable"),
                r.DomEvent.on(t, "click", this._onMouseClick, this);
                for (var i = 0; i < e.length; i++)
                    r.DomEvent.on(t, e[i], this._fireMouseEvent, this)
            }
        },
        _removeInteraction: function() {
            if (this.options.clickable) {
                var t = this._container
                  , e = ["dblclick", "mousedown", "mouseover", "mouseout", "contextmenu"];
                r.DomUtil.removeClass(t, "leaflet-clickable"),
                r.DomEvent.off(t, "click", this._onMouseClick, this);
                for (var i = 0; i < e.length; i++)
                    r.DomEvent.off(t, e[i], this._fireMouseEvent, this)
            }
        },
        _onMouseClick: function(t) {
            this.hasEventListeners(t.type) && r.DomEvent.stopPropagation(t),
            this.fire(t.type, {
                originalEvent: t
            })
        },
        _fireMouseEvent: function(t) {
            this.fire(t.type, {
                originalEvent: t
            }),
            "contextmenu" === t.type && this.hasEventListeners(t.type) && r.DomEvent.preventDefault(t),
            "mousedown" !== t.type ? r.DomEvent.stopPropagation(t) : r.DomEvent.preventDefault(t)
        }
    });
    return r.BaseMarkerMethods = {
        showLabel: function() {
            return this.label && this._map && (this.label.setLatLng(this._latlng),
            this._map.addLayer(this.label)),
            this
        },
        hideLabel: function() {
            return this.label && this.label.close(),
            this
        },
        setLabelNoHide: function(t) {
            this._labelNoHide !== t && ((this._labelNoHide = t) ? (this._removeLabelRevealHandlers(),
            this.showLabel()) : (this._addLabelRevealHandlers(),
            this.hideLabel()))
        },
        bindLabel: function(t, e) {
            var i = (this.options.icon || this).options.labelAnchor
              , i = (i = r.point(i) || r.point(0, 0)).add(n.prototype.options.offset);
            return e && e.offset && (i = i.add(e.offset)),
            e = r.Util.extend({
                offset: i
            }, e),
            this._labelNoHide = e.noHide,
            this.label || (this._labelNoHide || this._addLabelRevealHandlers(),
            this.on("remove", this.hideLabel, this).on("move", this._moveLabel, this).on("add", this._onMarkerAdd, this),
            this._hasLabelHandlers = !0),
            this.label = new n(e,this).setContent(t),
            this
        },
        unbindLabel: function() {
            return this.label && (this.hideLabel(),
            this.label = null,
            this._hasLabelHandlers && (this._labelNoHide || this._removeLabelRevealHandlers(),
            this.off("remove", this.hideLabel, this).off("move", this._moveLabel, this).off("add", this._onMarkerAdd, this)),
            this._hasLabelHandlers = !1),
            this
        },
        updateLabelContent: function(t) {
            this.label && this.label.setContent(t)
        },
        getLabel: function() {
            return this.label
        },
        _onMarkerAdd: function() {
            this._labelNoHide && this.showLabel()
        },
        _addLabelRevealHandlers: function() {
            this.on("mouseover", this.showLabel, this).on("mouseout", this.hideLabel, this),
            r.Browser.touch && this.on("click", this.showLabel, this)
        },
        _removeLabelRevealHandlers: function() {
            this.off("mouseover", this.showLabel, this).off("mouseout", this.hideLabel, this),
            r.Browser.touch && this.off("click", this.showLabel, this)
        },
        _moveLabel: function(t) {
            this.label.setLatLng(t.latlng)
        }
    },
    r.Icon.Default.mergeOptions({
        labelAnchor: new r.Point(9,-20)
    }),
    r.Marker.mergeOptions({
        icon: new r.Icon.Default
    }),
    r.Marker.include(r.BaseMarkerMethods),
    r.Marker.include({
        _originalUpdateZIndex: r.Marker.prototype._updateZIndex,
        _updateZIndex: function(t) {
            var e = this._zIndex + t;
            this._originalUpdateZIndex(t),
            this.label && this.label.updateZIndex(e)
        },
        _originalSetOpacity: r.Marker.prototype.setOpacity,
        setOpacity: function(t, e) {
            this.options.labelHasSemiTransparency = e,
            this._originalSetOpacity(t)
        },
        _originalUpdateOpacity: r.Marker.prototype._updateOpacity,
        _updateOpacity: function() {
            var t = 0 === this.options.opacity ? 0 : 1;
            this._originalUpdateOpacity(),
            this.label && this.label.setOpacity(this.options.labelHasSemiTransparency ? this.options.opacity : t)
        },
        _originalSetLatLng: r.Marker.prototype.setLatLng,
        setLatLng: function(t) {
            return this.label && !this._labelNoHide && this.hideLabel(),
            this._originalSetLatLng(t)
        }
    }),
    r.CircleMarker.mergeOptions({
        labelAnchor: new r.Point(0,0)
    }),
    r.CircleMarker.include(r.BaseMarkerMethods),
    r.Path.include({
        bindLabel: function(t, e) {
            return this.label && this.label.options === e || (this.label = new n(e,this)),
            this.label.setContent(t),
            this._showLabelAdded || (this.on("mouseover", this._showLabel, this).on("mousemove", this._moveLabel, this).on("mouseout remove", this._hideLabel, this),
            r.Browser.touch && this.on("click", this._showLabel, this),
            this._showLabelAdded = !0),
            this
        },
        unbindLabel: function() {
            return this.label && (this._hideLabel(),
            this.label = null,
            this._showLabelAdded = !1,
            this.off("mouseover", this._showLabel, this).off("mousemove", this._moveLabel, this).off("mouseout remove", this._hideLabel, this)),
            this
        },
        updateLabelContent: function(t) {
            this.label && this.label.setContent(t)
        },
        _showLabel: function(t) {
            this.label.setLatLng(t.latlng),
            this._map.addLayer(this.label)
        },
        _moveLabel: function(t) {
            this.label.setLatLng(t.latlng)
        },
        _hideLabel: function() {
            this.label.close()
        }
    }),
    r.FeatureGroup.include({
        clearLayers: function() {
            return this.unbindLabel(),
            this.eachLayer(this.removeLayer, this),
            this
        },
        bindLabel: function(t, e) {
            return this.invoke("bindLabel", t, e)
        },
        unbindLabel: function() {
            return this.invoke("unbindLabel")
        },
        updateLabelContent: function(t) {
            this.invoke("updateLabelContent", t)
        }
    }),
    n
}, window),
!function(t) {
    if ("function" == typeof define && define.amd)
        define(["leaflet"], t);
    else if ("undefined" != typeof module)
        module.exports = t(require("leaflet"));
    else {
        if (void 0 === window.L)
            throw "Leaflet must be loaded first";
        t(window.L)
    }
}(function(s) {
    var e = Math.PI / 180;
    s.Point.prototype.rotated = function(t, e) {
        return t = t,
        e = e,
        this.add(s.point(Math.cos(t), Math.sin(t)).multiplyBy(e))
    }
    ;
    s.WindCircle = s.Circle.extend({
        options: {
            NORTHEAST: 0,
            SOUTHEAST: 0,
            NORTHWEST: 0,
            SOUTHWEST: 0
        },
        resizeR: function(t) {
            this._mRadius = t,
            this._project()
        },
        getStartOrEndPrint: function(t) {
            return this._point.rotated((t - 90) * e, this._radius)
        },
        getNe: function() {
            return this.resizeR(this.options.NORTHEAST),
            {
                start: this.getStartOrEndPrint(0),
                end: this.getStartOrEndPrint(90),
                r: this._radius
            }
        },
        getSe: function() {
            return this.resizeR(this.options.SOUTHEAST),
            {
                start: this.getStartOrEndPrint(90),
                end: this.getStartOrEndPrint(180),
                r: this._radius
            }
        },
        getNw: function() {
            return this.resizeR(this.options.NORTHWEST),
            {
                start: this.getStartOrEndPrint(270),
                end: this.getStartOrEndPrint(360),
                r: this._radius
            }
        },
        getSw: function() {
            return this.resizeR(this.options.SOUTHWEST),
            {
                start: this.getStartOrEndPrint(180),
                end: this.getStartOrEndPrint(270),
                r: this._radius
            }
        }
    }),
    s.windCircle = function(t, e) {
        return new s.WindCircle(t,e)
    }
    ;
    var a = s.SVG.prototype._updateCircle
      , r = s.Canvas.prototype._updateCircle;
    s.SVG.include({
        _updateCircle: function(t) {
            if (!(t instanceof s.WindCircle))
                return a.call(this, t);
            if (t._empty())
                return this._setPath(t, "M0 0");
            var e = t.getNe()
              , i = t.getSe()
              , n = t.getNw()
              , o = t.getSw()
              , e = ["M", e.start.x, e.start.y, "A", e.r, e.r, 0, 0, 1, e.end.x, e.end.y, "L", i.start.x, i.start.y, "A", i.r, i.r, 0, 0, 1, i.end.x, i.end.y, "L", o.start.x, o.start.y, "A", o.r, o.r, 0, 0, 1, o.end.x, o.end.y, "L", n.start.x, n.start.y, "A", n.r, n.r, 0, 0, 1, n.end.x, n.end.y, "z"].join(" ");
            this._setPath(t, e)
        }
    }),
    s.Canvas.include({
        _updateCircle: function(t) {
            if (!t.isWindcircle())
                return r.call(this, t);
            var e = t._point
              , i = this._ctx
              , n = t._radius
              , o = (t._radiusY || n) / n
              , s = e.rotated(t.startAngle(), n);
            this._drawnLayers[t._leaflet_id] = t,
            1 != o && (i.save(),
            i.scale(1, o)),
            i.beginPath(),
            i.moveTo(e.x, e.y),
            i.lineTo(s.x, s.y),
            i.arc(e.x, e.y, n, t.startAngle(), t.stopAngle()),
            i.lineTo(e.x, e.y),
            1 != o && i.restore(),
            this._fillStroke(i, t)
        }
    })
}),
"")
  , mbAttr = '© <a href="https://i.ssss.fun" target="_blank">中國遠徵</a> | <a href="https://msg.ssss.fun" target="_blank">留言</a>&nbsp;&nbsp;GS(2023)1号'
  , url = (String.prototype.getQuery = function(t) {
    t = new RegExp("(^|&)" + t + "=([^&]*)(&|$)"),
    t = this.substr(this.indexOf("?") + 1).match(t);
    return null != t ? unescape(t[2]) : null
}
,
new String(window.location))
  , attr = url.getQuery("attr");
function GetPointColor(t) {
    var e;
    switch (t) {
    case "热带低压":
    case "热带低气压":
        e = "#51FB52";
        break;
    case "热带风暴":
        e = "#588AF6";
        break;
    case "强热带风暴":
        e = "#F8F92A";
        break;
    case "台风":
        e = "#FAAB2A";
        break;
    case "强台风":
        e = "#FA83F6";
        break;
    case "超强台风":
        e = "#FF0000";
        break;
    default:
        e = "#FFFFFF"
    }
    return e
}
function stringTodate(t, e) {
    try {
        return new Date(t.replace(/-/g, "/")).Format(e)
    } catch (t) {
        return ""
    }
}
mbAttr = null != attr ? "" : mbAttr,
L.TencentLayer = L.TileLayer.extend({
    options: {
        subdomains: [0, 1, 2],
        attribution: mbAttr
    },
    initialize: function(t, e) {
        L.Util.setOptions(this, e),
        this._type = t || "ROADMAP"
    },
    getTileUrl: function(t) {
        this._url = "https://rt{s}.map.gtimg.com/realtimerender?z={z}&x={x}&y={y}&type=vector&style={t}";
        var e = {
            z: t.z,
            x: t.x,
            y: Math.pow(2, t.z) - 1 - t.y
        };
        switch (this._type) {
        case "ROADMAP":
            this._url = this._url.replace("{t}", 0);
            break;
        case "RealROADMAP":
            this._url = "https://rt{s}.map.gtimg.com/tile?z={z}&x={x}&y={y}&type=vector&styleid=1&version=1998";
            break;
        case "SATELLITE":
            this._url = "https://p{s}.map.gtimg.com/sateTiles/{z}/{x16}/{y16}/{x}_{y}.jpg",
            e.x16 = Math.floor(t.x / 16),
            e.y16 = Math.floor((Math.pow(2, t.z) - 1 - t.y) / 16);
            break;
        case "TERRAIN":
            this._url = "https://p{s}.map.gtimg.com/demTiles/{z}/{x16}/{y16}/{x}_{y}.jpg",
            e.x16 = Math.floor(t.x / 16),
            e.y16 = Math.floor((Math.pow(2, t.z) - 1 - t.y) / 16)
        }
        return L.Util.template(this._url, L.extend(e, this.options, {
            s: this._getSubdomain(t)
        }))
    }
}),
L.tencentLayer = function(t, e) {
    return new L.TencentLayer(t,e)
}
,
Date.prototype.Format = function(t) {
    var e, i = {
        "M+": this.getMonth() + 1,
        "d+": this.getDate(),
        "h+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds(),
        "q+": Math.floor((this.getMonth() + 3) / 3),
        S: this.getMilliseconds()
    };
    for (e in /(y+)/.test(t) && (t = t.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length))),
    i)
        new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
    return t
}
;
var MapLayer, MapLabelLayer, map, CloudLayer, RainImgLayer, LabelingLayer, TaipeiImageLayer, MulchLayer, TaipeiMarker, HongkongMarker, MacaoMarker, MyCustomMarker = L.CircleMarker.extend({
    bindPopup: function(t, e) {
        e && e.showOnMouseOver && (L.CircleMarker.prototype.bindPopup.apply(this, [t, e]),
        this.off("click", this.openPopup, this),
        this.on("mouseover", function(t) {
            t = t.originalEvent.fromElement || t.originalEvent.relatedTarget;
            if (this._getParent(t, "leaflet-popup") == this._popup._container)
                return !0;
            5 <= this.getRadius() ? this.setRadius(10) : this.setRadius(7),
            this.openPopup(),
            e.latlng
        }, this),
        this.on("mouseout", function(t) {
            t = t.originalEvent.toElement || t.originalEvent.relatedTarget;
            if (this._getParent(t, "leaflet-popup"))
                return L.DomEvent.on(this._popup._container, "mouseout", this._popupMouseOut, this),
                !0;
            7 < this.getRadius() ? this.setRadius(6) : this.setRadius(4),
            e.latlng,
            this.closePopup()
        }, this))
    },
    _popupMouseOut: function(t) {
        7 < this.getRadius() ? this.setRadius(6) : this.setRadius(4),
        L.DomEvent.off(this._popup, "mouseout", this._popupMouseOut, this);
        t = t.toElement || t.relatedTarget;
        return !!this._getParent(t, "leaflet-popup") || (t == this._icon || void this.closePopup())
    },
    _getParent: function(t, e) {
        try {
            for (var i = t.parentNode; null != i; ) {
                if (i.className && L.DomUtil.hasClass(i, e))
                    return i;
                i = i.parentNode
            }
            return !1
        } catch (t) {
            return !1
        }
    }
}), hashtable = new Hashtable, browser = {
    versions: function() {
        var t = navigator.userAgent;
        navigator.appVersion;
        return {
            trident: -1 < t.indexOf("Trident"),
            presto: -1 < t.indexOf("Presto"),
            webKit: -1 < t.indexOf("AppleWebKit"),
            gecko: -1 < t.indexOf("Gecko") && -1 == t.indexOf("KHTML"),
            mobile: !!t.match(/AppleWebKit.*Mobile.*/),
            ios: !!t.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
            android: -1 < t.indexOf("Android") || -1 < t.indexOf("Linux"),
            iPhone: -1 < t.indexOf("iPhone"),
            iPad: -1 < t.indexOf("iPad"),
            webApp: -1 == t.indexOf("Safari")
        }
    }(),
    language: (navigator.browserLanguage || navigator.language).toLowerCase()
}, isPlaying = ($(document).ready(function() {
    $("#map").on("touchmove", function(t) {
        t.preventDefault()
    }),
    $(".tf-list").css("height", .6 * $(window).height() - 66),
    $(".tflist-close").click(function() {
        $("#tfbox").animate({
            top: $(window).height() + 1 + "px"
        }, "normal", function() {
            $("#tflist-icon").show(),
            $("#tfbox").hide()
        }),
        $("#tflist-icon").attr("src", "images/wap_tf_1.png"),
        $(".leaflet-control-attribution").show()
    }),
    $("#map").click(function() {
        $("#tfbox").is("hide") || $(".tflist-close").click()
    }),
    $("#tflist-icon").click(function() {
        $("#tflist-icon").hide(),
        $(".leaflet-control-attribution").hide();
        var t = .4 * $(window).height() - 40;
        $("#tfbox").show(),
        $("#tfbox").animate({
            top: t + "px"
        }, "normal")
    }),
    $(".tf-head ul li").click(function() {
        $(".tf-head ul li").removeClass("select"),
        $(this).addClass("select")
    }),
    $("#wap_cloud").click(function() {
        var t = $(this).attr("alt");
        "hide" == t || null == t ? (HideClouds(),
        $(this).attr("alt", "show")) : (DisplayCloud(),
        $(this).attr("alt", "hide"))
    }),
    $("#wap_legend").click(function() {
        $(".tuli").fadeToggle()
    }),
    $(".wap_icon").click(function() {
        var t = $(this).attr("src");
        0 < t.indexOf("_1") ? $(this).attr("src", t.replace("_1.png", ".png")) : $(this).attr("src", t.replace(".png", "_1.png"))
    }),
    $("#wap_rain").click(function() {
        0 < RainImgLayer.getLayers().length ? RainImgLayer.clearLayers() : DisplayRainPublic(24)
    });
    $("#map").css("height", +$(window).height()),
    map = L.map("map", {
        zoomControl: !1
    }).setView([29.6, 124.5], 5);
    var t = [new L.LatLng(34,127), new L.LatLng(22,127), new L.LatLng(18,120), new L.LatLng(11,120), new L.LatLng(4.5,113), new L.LatLng(0,105)]
      , e = [new L.LatLng(34,132), new L.LatLng(15,132), new L.LatLng(0,120), new L.LatLng(0,105)]
      , t = (L.polyline(t, {
        color: "#FFFF00",
        weight: 1.5
    }).addTo(map),
    L.polyline(e, {
        color: "#0000FF",
        weight: .8
    }).addTo(map),
    MapLayer = new L.TencentLayer("RealROADMAP").addTo(map),
    MapLabelLayer = new L.TencentLayer("RealROADMAP").addTo(map),
    LabelingLayer = L.featureGroup([]).addTo(map),
    TaipeiImageLayer = L.featureGroup([]),
    MulchLayer = L.featureGroup([]).addTo(map),
    CloudLayer = L.featureGroup([]).addTo(map),
    RainImgLayer = L.featureGroup([]).addTo(map),
    L.icon({
        iconUrl: "images/hour24.png",
        iconSize: [15, 89]
    }))
      , e = L.icon({
        iconUrl: "images/hour48.png",
        iconSize: [15, 89]
    })
      , t = L.marker([26, 127], {
        icon: t
    })
      , e = L.marker([26, 132], {
        icon: e
    });
    function i(t, e) {
        var i = hashtable.get("tfids");
        if (null != i && 0 < i.length)
            for (var n = i.split(","), o = 0; o < n.length; o++) {
                var s = hashtable.get(n[o] + t);
                e ? map.addLayer(s) : map.removeLayer(s)
            }
    }
    LabelingLayer.addLayer(t),
    LabelingLayer.addLayer(e),
    map.on("zoomend", function(t) {
        this.getZoom() < 5 ? (i("eventLayer", !1),
        map.removeLayer(LabelingLayer)) : (i("eventLayer", !0),
        map.addLayer(LabelingLayer))
    }),
    $(".tuli,.typhoonNameLabel").blur(function() {
        $(".tuli").fadeOut("slow")
    });
    var m = "";
    $.ajax({
        type: "GET",
        url: "https://cors.eu.org/http://typhoon.zjwater.gov.cn/Api/TyhoonActivity",
        success: function(t) {
            if ("" != t && null != t && "undefined" != t && "null" != t && null != t)
                if (t && t.length) {
                    for (var e = "", i = 0; i < t.length; i++) {
                        var n, o, s, a, r, h, l, u, c, d, p = t[i].tfid;
                        "" != p && null != p && "null" != p ? ($("#tflist-icon").show(),
                        n = t[i].name,
                        c = "" != (c = t[i].enname) || null != c || "null" != c.toLowerCase() ? "(" + c + ")" : "",
                        d = t[i].timeformate,
                        o = "" != (o = t[i].lng) || null != o || "null" != o.toLowerCase() ? o + "°" : "--",
                        s = "" != (s = t[i].lat) || null != s || "null" != s.toLowerCase() ? s + "°" : "--",
                        a = t[i].strong,
                        r = "" != (r = t[i].power) || null != r || "null" != r.toLowerCase() ? 17 < r ? "17级以上" : r + "级" : "--",
                        h = "" != (h = t[i].speed) || null != h || "null" != h.toLowerCase() ? h + "米/秒" : "--",
                        l = "" != (l = t[i].pressure) || null != l || "null" != l.toLowerCase() ? l + "百帕" : "--",
                        u = "" != (u = t[i].movespeed) || null != u || "null" != u.toLowerCase() ? u + "公里/小时" : "--",
                        t[i].movedirection,
                        m = m + "<span>" + p.substr(0, 4) + "年第" + p.substr(4, 2) + "号" + a + n + c + "</span> &nbsp; " + d + "，风速" + h + "，移速" + u + "，东经" + o + "，北纬" + s + "，气压" + l + "，近中心最大风力" + r + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp",
                        c = "" == (c = hashtable.get("tfids")) || null == c || null == c ? p : c + "," + p,
                        hashtable.put("tfids", c),
                        hashtable.put("typhoon" + p, t[i]),
                        e = 0 == i ? (DrawTyphoonPath(p, a, !0),
                        e + "<li id='li" + p + '\' class ="select" onclick="javascript:TabClick(\'' + p + "','" + a + "')\">" + p + n + "</li>") : (DrawTyphoonPath(p, a, !1, !1),
                        e + "<li id='li" + p + "' onclick=\"javascript:TabClick('" + p + "','" + a + "')\">" + p + n + "</li>")) : (d = new Date,
                        m = "<span>" + stringTodate(d.toString(), "yyyy年MM月dd日") + "</span>&nbsp;&nbsp;&nbsp;当前西太平洋无台风")
                    }
                    ShowTyphoonList("tuli", null, !1),
                    $("#titleTab").empty().html(e)
                } else {
                    var _ = (new Date).toString();
                    m = "<span>" + stringTodate(_, "yyyy年MM月dd日") + "</span>&nbsp;&nbsp;&nbsp;当前西太平洋无台风",
                    $("#notf").show()
                }
            else {
                _ = (new Date).toString();
                m = "<span>" + stringTodate(_, "yyyy年MM月dd日") + "</span>&nbsp;&nbsp;&nbsp;当前西太平洋无台风",
                $("#notf").show()
            }
            $("#tfinfomarqueen").empty().html(m).css("width", $(window).width()).marquee({
                duration: 18e3,
                gap: 50,
                delayBeforeStart: 0,
                pauseOnHover: !0
            })
        }
    })
}),
!1);
function DrawTyphoonPath(b, i, n, o) {
    o = null == o ? 1 : 0;
    var w = new L.featureGroup([])
      , x = (w.addTo(map),
    new L.featureGroup([]))
      , P = (x.addTo(map),
    new L.featureGroup([]))
      , T = (P.addTo(map),
    new L.featureGroup([]))
      , M = (T.addTo(map),
    new L.featureGroup([]))
      , C = (M.addTo(map),
    new L.featureGroup([]))
      , z = (C.addTo(map),
    new L.featureGroup([]));
    hashtable.put(b + "tfpathLayer", T),
    hashtable.put(b + "tfpointLayer", M),
    hashtable.put(b + "forecastLayer", C),
    hashtable.put(b + "eventLayer", z),
    hashtable.put(b + "circle7Layer", w),
    hashtable.put(b + "circle10Layer", x),
    hashtable.put(b + "circle12Layer", P),
    $.ajax({
        type: "GET",
        url: "https://cors.eu.org/http://typhoon.zjwater.gov.cn/Api/TyphoonInfo/" + b,
        success: function(d) {
            var t, p, e, _, m, f, g, y, v;
            d && (t = d.isactive,
            hashtable.put(b + "datas", d),
            t = "1" == t ? L.icon({
                iconUrl: "images/typhoon.gif",
                iconSize: [32, 32],
                iconAnchor: [17, 17]
            }) : L.icon({
                iconUrl: "images/typhoon.png",
                iconSize: [32, 32],
                iconAnchor: [17, 17]
            }),
            p = d.points,
            e = d.enname,
            _ = d.name,
            o && $(".typhoonNameLabel,#box-typhoonname").empty().html(b + _ + "(" + e + ")</br><span style='font-size:15px;'>等级:" + i + "<span>"),
            ShowTyphoonList(b, p, n),
            m = {
                stroke: !0,
                color: "#353433",
                weight: 1,
                opacity: .5,
                fill: !0,
                fillOpacity: 1,
                fillColor: "#ffffff",
                clickable: !0
            },
            f = new L.Polyline([],{
                stroke: !0,
                color: "#0076c9",
                weight: 2,
                opacity: 1,
                fill: !1,
                clickable: !0
            }),
            T.addLayer(f),
            g = L.marker([0, 0], {
                icon: t
            }),
            M.addLayer(g),
            y = 0,
            v = function() {
                isPlaying = !0;
                var t = b
                  , e = p[y].lng
                  , i = p[y].lat
                  , n = p[y].strong
                  , o = p[y].radius7
                  , s = p[y].radius10
                  , a = p[y].radius12
                  , r = stringTodate(p[y].time, "yyyyMMddhh").toString()
                  , h = stringTodate(p[y].time, "MM月dd日hh时").toString()
                  , a = (map.removeLayer(w),
                map.removeLayer(x),
                DrawCircle(i, e, a, 12, P),
                DrawCircle(i, e, s, 10, x),
                DrawCircle(i, e, o, 7, w),
                g.setLatLng([i, e]),
                f.addLatLng(new L.LatLng(i,e)),
                GetPopupContent(p[y]))
                  , s = (m.fillColor = GetPointColor(n),
                new MyCustomMarker(new L.LatLng(i,e),m));
                if (s.tag = p[y],
                s.bindPopup(a, {
                    showOnMouseOver: !0,
                    closeButton: !1,
                    latlng: t + "" + r
                }),
                2 < y && n != p[y - 1].strong ? s.setRadius(6) : s.setRadius(4),
                M.addLayer(s),
                y == p.length - 1) {
                    isPlaying = !1,
                    DrawForecastLine(b, _, p[y].forecast, C);
                    var o = L.marker(new L.LatLng(p[p.length - 1].lat,p[p.length - 1].lng), {
                        icon: new L.divIcon({
                            className: "DistanceLabelStyle",
                            iconAnchor: [-13, 10],
                            html: "<span class='bubbleLabel'><span class='bubbleLabel-bot bubbleLabel-bot-left'></span><span class='bubbleLabel-top bubbleLabel-top-left'></span><span class=''>" + _ + "(" + h + ")</span></span>"
                        })
                    })
                      , l = (T.addLayer(o),
                    d.land);
                    if (0 < l.length)
                        for (var u = 0; u < l.length; u++) {
                            var c = L.marker([l[u].lat, l[u].lng], {
                                icon: new L.divIcon({
                                    className: "leaflet-div-land",
                                    html: "<img src='images/flag.png' style='width:24px; height:24px;'/><div style='position: relative;bottom: 135px;left:2px; '><span style='padding: 5px;border: 1px #34A4CD solid;background-color: #F0F4F7;border-radius: 3px;color: #428BCA;float: left;'>" + l[u].info + "</span><img src='images/zx.png' style='position: relative;display:block;bottom: 1px;float: left;'/></div>",
                                    iconAnchor: [24, 24]
                                })
                            });
                            z.addLayer(c)
                        }
                } else
                    y++,
                    SetTimeoutId = setTimeout(v, 20)
            }
            ,
            1 <= p.length ? v() : map.setView([d.centerlat, d.centerlng], 5))
        },
        error: function(t, e, i) {}
    }),
    $("#titleTab").find("li").eq(0).click()
}
function DrawCircle(t, e, i, n, o) {
    o.clearLayers();
    var s, a = {
        stroke: !0,
        color: "#FF0000",
        weight: 1,
        opacity: .8,
        fill: !0,
        fillOpacity: .1,
        fillColor: "#FF0000",
        clickable: !0
    };
    4 == (i = i.split("|")).length && 0 != i[0] && 0 != i[1] && 0 != i[2] && 0 != i[3] && (a = $.extend({
        NORTHEAST: 1e3 * i[0],
        SOUTHEAST: 1e3 * i[1],
        NORTHWEST: 1e3 * i[2],
        SOUTHWEST: 1e3 * i[3]
    }, a),
    i = (n + "").replace("7", "七").replace("10", "十").replace("12", "十二") + "级风圈<br/>西北:" + i[2] + "km | 东北:" + i[0] + "km<br/>西南:" + i[3] + "km | 东南:" + i[1] + "km",
    7 == n && (s = new L.windCircle(new L.LatLng(t,e),a),
    o.bindPopup(i, {
        className: "windCircle"
    }).addLayer(s)),
    10 == n && (a.fillOpacity = .2,
    s = new L.windCircle(new L.LatLng(t,e),a),
    o.bindPopup(i, {
        className: "windCircle"
    }).addLayer(s)),
    12 == n && (a.fillOpacity = .3,
    s = new L.windCircle(new L.LatLng(t,e),a),
    o.bindPopup(i, {
        className: "windCircle"
    }).addLayer(s)),
    o.on("mouseover", function() {
        this.openPopup()
    }).on("mouseout", function() {
        this.closePopup()
    }),
    o.addTo(map),
    o.bringToBack())
}
function DrawForecastLine(t, e, i, n) {
    n.clearLayers();
    for (var o = 0; o < i.length; o++) {
        var s = ""
          , a = i[o].tm;
        switch (a) {
        case "中国":
            s = "#FF0000";
            break;
        case "日本":
            s = "#2BBE00";
            break;
        case "中国香港":
            s = "#FE9104";
            break;
        case "中国台湾":
            s = "#FF00FF";
            break;
        case "美国":
            s = "#11F7F7"
        }
        for (var r = {
            stroke: !0,
            color: "#353433",
            weight: 1,
            opacity: .5,
            fill: !0,
            fillOpacity: 1,
            fillColor: "#FFFFFF",
            clickable: !0
        }, h = new L.Polyline([],{
            stroke: !0,
            color: s,
            dashArray: "10,5",
            weight: 1.6,
            opacity: 1,
            fill: !1,
            clickable: !0
        }), l = (n.addLayer(h),
        i[o].forecastpoints), u = 0; u < l.length; u++) {
            var c = l[u].time
              , d = l[u].lng
              , p = l[u].lat
              , _ = l[u].speed
              , m = l[u].pressure
              , f = l[u].strong
              , g = l[u].power
              , y = (h.addLatLng(new L.LatLng(p,d)),
            g = "" != g || null != g || "null" != g.toLowerCase() ? 17 < g ? "17级以上" : g + "级" : "--",
            "<div><ul class='tfinfo' style='top: 20%; left: 50%;'>")
              , y = (y = (y = (y = (y += "<li class='tfinfo-head'><span style='font-weight:bold;font-size:14px;'>" + a + "</span>&nbsp;&nbsp;&nbsp;&nbsp;" + stringTodate(c, "M月d日h时") + "&nbsp;预报</li>") + ("<li>当前位置<span>" + CheckData(d) + "°&nbsp;/&nbsp;" + CheckData(p) + "°</span></li>")) + ("<li>中心气压<span>" + CheckData(m) + "&nbsp;百帕</span></li>")) + ("<li>最大风速<span>" + CheckData(_) + "&nbsp;米/秒</span></li>")) + ("<li style='background: #fff;'>风&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;力<span>" + g + "</span></li>") + " </ul></div>";
            r.fillColor = GetPointColor(f),
            0 != u && ((c = new MyCustomMarker(new L.LatLng(p,d),r)).tag = l[u],
            c.tm = a,
            c.bindPopup(y, {
                showOnMouseOver: !0,
                closeButton: !1,
                latlng: p + "" + d
            }),
            c.setRadius(4),
            n.addLayer(c))
        }
    }
}
function GetPopupContent(t) {
    var e = "<div><ul class='tfinfo' style='top: 20%; left: 50%;'>";
    function i(t) {
        t = t.split("|");
        return 4 == t.length ? (t.sort(function(t, e) {
            return t - e
        }),
        (t[0] == t[3] ? t[3] : t[0] + "~" + t[3]) + "&nbsp;公里") : ""
    }
    try {
        var n = "" != t.power || null != t.power || "null" != t.power.toLowerCase() ? 17 < t.power ? "17级以上" : t.power + "级" : "--"
          , e = (e = (e = (e = (e += "<li class='tfinfo-head'><span style='font-weight:bold;font-size:14px;'>" + name + "</span>&nbsp;&nbsp;&nbsp;&nbsp;" + stringTodate(t.time, "M月d日h时") + "</li>") + ("<li>中心位置<span>" + CheckData(t.lng) + "°&nbsp;/&nbsp;" + CheckData(t.lat) + "°</span></li>")) + ("<li>风速风力<span>" + CheckData(t.speed) + "&nbsp;米/秒,<span style='font-weight:700;color:red;'>" + n + "(" + CheckData(t.strong) + ")</span></span></li>")) + ("<li>中心气压<span>" + CheckData(t.pressure) + "&nbsp;百帕</span></li>")) + ("<li>移速移向<span>" + CheckData(t.movespeed) + "公里/小时，" + CheckData(t.movedirection) + "</span></li>");
        t.radius7 && "" != t.radius7 && (e += " <li>七级半径<span>" + i(CheckData(t.radius7)) + "</li>"),
        t.radius10 && "" != t.radius10 && (e += " <li>十级半径<span>" + i(CheckData(t.radius10)) + "</span></li>"),
        t.radius12 && "" != t.radius12 && (e += " <li>十二级半径<span>" + i(CheckData(t.radius12)) + "</span></li>"),
        t.ckposition && "" != t.ckposition && (e += " <li class='multiline'>参考位置<span>" + CheckData(t.ckposition) + "</span></li>"),
        t.jl && "" != t.jl && (/(.*)(（.*?）)/.exec(CheckData(t.jl)),
        e += " <li class='multiline'>未来趋势<span>" + CheckData(RegExp.$1) + "</span></li>")
    } catch (t) {}
    return e += " </ul></div>"
}
function CheckData(t) {
    return "0" == t || null == t || "null" == t || null == t || "undefined" == t ? "--" : t
}
function ShowTyphoonList(t, e, i) {
    var i = 1 == i ? "block" : "none"
      , n = "";
    if ("tuli" == t)
        n = "<div class='tf-list-head' id='div" + t + "' style='display:" + i + '\'><div class="tuli" tabindex="1"><div class="tuli-head">预报台</div><ul><li><img src="images/legend/forecast-01.png" alt="" />中国大陆</li><li><img src="images/legend/forecast-02.png" alt="" />中国香港</li><li><img src="images/legend/forecast-04.png" alt="" />中国台湾</li><li><img src="images/legend/forecast-03.png" alt="" />日本</li><li><img src="images/legend/forecast-05.png" alt="" />美国</li></ul><div class="tuli-head">台风等级</div><ul><br/><li><img src="images/legend/t-01.png" alt="" />热带低压</li><li><img src="images/legend/t-02.png" alt="" />热带风暴</li><li><img src="images/legend/t-03.png" alt="" />强热带风暴</li><li><img src="images/legend/t-04.png" alt="" />台风</li><li><img src="images/legend/t-05.png" alt="" />强台风</li><li><img src="images/legend/t-06.png" alt="" />超强台风</li></ul></div></div>';
    else {
        for (var n = "<div class='tf-list-head' id='div" + t + "' style='display:" + i + "'><table><thead><tr><td class='td40'>时间</td><td class='td20'>气压</td><td class='td20'>风力</td><td class='td20'>移速</td></tr></thead></table></div><div class='tf-list-body'  id='body" + t + "'  style='display:" + i + "'><table><tbody>", o = e.length - 1; 0 <= o; o--) {
            var s = e[o].time
              , a = e[o].pressure
              , r = e[o].movespeed
              , h = e[o].power;
            n += "<tr id='" + t + stringTodate(s, "yyyyMMddhh").toString() + "'   style='cursor:pointer'><td class='td40'>" + stringTodate(s, "MM月dd日 hh时") + "</td><td class='td20'>" + a + "</td><td class='td20'>" + h + "</td><td class='td20'>" + r + "</td></tr>"
        }
        n += "</tbody></table> </div>"
    }
    $("#tflist").append(n),
    $(".tf-list-body").css("height", .6 * $(window).height() - 106)
}
function TabClick(t, e) {
    $("#tflist .tf-list-head,#tflist .tf-list-body").hide(),
    $("#tflist").find("#div" + t).show(),
    $("#tflist").find("#body" + t).show(),
    $("#titleTab li").removeClass("select"),
    $("#titleTab").find("#li" + t).addClass("select");
    var i, n = hashtable.get(t + "datas");
    n && (i = n.enname,
    n = n.name,
    "" != e && $(".typhoonNameLabel,#box-typhoonname").empty().html(t + n + "(" + i + ")</br><span style='font-size:15px;'>等级:" + e + "<span>"))
}
function DisplayCloud() {
    try {
        $.ajax({
            type: "GET",
            url: "https://cors.eu.org/http://typhoon.zjwater.gov.cn/Api/LeastCloud",
            success: function(t) {
                var e, i, n, o, s, a;
                t ? (e = t.cloudFullPath,
                i = "",
                i = t.cloudname,
                t.cloudtime,
                n = t.diffTime,
                o = t.minLng,
                s = t.maxLng,
                a = t.minLat,
                t = t.maxLat,
                parseFloat(n) < 3 ? (map.removeLayer(CloudLayer),
                (CloudLayer = L.imageOverlay(e + "/" + i, [[a, o], [t, s]], {
                    maxZoom: 11
                })).addTo(map),
                map._panes.overlayPane.children[0].style.zIndex = "2",
                map._panes.overlayPane.children[1].style.zIndex = "-1") : (toastr.options = {
                    closeButton: !0,
                    progressBar: !0,
                    showMethod: "slideDown",
                    positionClass: "toast-bottom-right",
                    timeOut: 4e3
                },
                toastr.warning("", "无最新云图！"))) : (toastr.options = {
                    closeButton: !0,
                    progressBar: !0,
                    showMethod: "slideDown",
                    positionClass: "toast-bottom-right",
                    timeOut: 4e3
                },
                toastr.error("", "获取云图失败！"))
            }
        })
    } catch (t) {
        toastr.options = {
            closeButton: !0,
            progressBar: !0,
            showMethod: "slideDown",
            positionClass: "toast-bottom-right",
            timeOut: 4e3
        },
        toastr.error("", "获取云图失败！")
    }
}
function HideClouds() {
    map.removeLayer(CloudLayer)
}
var uPos = L.marker([30, 120], {
    icon: L.icon({
        iconUrl: "../images/upos1.png",
        iconSize: [14, 14],
        iconAnchor: [7, 7],
        className: "amShadow"
    })
});
function UserPosition(o) {
    map.removeLayer(uPos),
    $.ajax({
        url: "https://ip.seeip.org/geoip",
        dataType: "json",
        success: function(t) {
            for (var e = [], i = 0; i < o.length; i++) {
                var n = GetDistanceInEarth({
                    x: +o[i].lng,
                    y: +o[i].lat
                }, {
                    x: t.longitude,
                    y: t.latitude
                });
                e.push("距" + o[i].name + "<b>" + n + "</b>公里")
            }
            uPos.setLatLng([t.latitude, t.longitude]).bindPopup('<div style="padding:7px;">' + e.join("<br/>") + "</div>", {
                closeButton: !1,
                offset: [0, 0]
            }).addTo(map).openPopup(),
            setTimeout(function() {
                uPos.closePopup()
            }, 5e3)
        }
    })
}
var TranslateLonLatToDistance = function(t) {
    var e = Math.PI / 180
      , i = 2 * Math.PI * 6378137;
    return {
        x: Math.cos(t.y * e) * i * Math.abs(t.x / 360),
        y: i * Math.abs(t.y / 360)
    }
}
  , GetDistanceInEarth = function(t, e) {
    var i = Math.abs(TranslateLonLatToDistance({
        x: t.x,
        y: e.y
    }).x - TranslateLonLatToDistance({
        x: e.x,
        y: e.y
    }).x)
      , n = Math.abs(TranslateLonLatToDistance({
        x: t.x,
        y: t.y
    }).x - TranslateLonLatToDistance({
        x: e.x,
        y: t.y
    }).x)
      , e = Math.abs(TranslateLonLatToDistance({
        x: t.x,
        y: e.y
    }).y - TranslateLonLatToDistance({
        x: t.x,
        y: t.y
    }).y)
      , t = Math.sqrt(Math.pow(e, 2) - Math.pow(Math.abs(i - n) / 2, 2) + Math.pow(Math.abs(i - n) / 2 + Math.min(i, n), 2));
    return (Math.ceil(t) / 1e3).toFixed(0)
}
  , rainLevel = {
    0: "小雨",
    2.5: "小雨",
    5: "小雨",
    10: "中雨",
    25: "大雨",
    50: "暴雨",
    100: "大暴雨",
    250: "特大暴雨"
};
function DisplayRainPublic(t) {
    try {
        $.ajax({
            type: "GET",
            url: "https://cors.eu.org/http://typhoon.zjwater.gov.cn/Api/LeastRain/" + t,
            success: function(t) {
                RainImgLayer.clearLayers();
                for (var e = JSON.parse(t.contours), i = 0; i < e.length; i++) {
                    for (var n = [], o = e[i], s = 0; s < o.latAndLong.length; s++)
                        n.push([o.latAndLong[s][0], o.latAndLong[s][1]]);
                    var a = e[i].color.substring(0, e[i].color.lastIndexOf(","));
                    L.polygon(n, {
                        fillOpacity: .3,
                        color: "rgb(" + a + ")",
                        weight: 0
                    }).bindLabel(rainLevel[o.symbol], {
                        pane: "popupPane"
                    }).addTo(RainImgLayer)
                }
                RainImgLayer.addTo(map)
            }
        })
    } catch (t) {}
}
