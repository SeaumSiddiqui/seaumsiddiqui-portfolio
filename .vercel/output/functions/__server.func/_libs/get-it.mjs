import { t as t$2 } from "./decompress-response.mjs";
import r$2 from "url";
import s$2, { Agent } from "http";
import n$3, { Agent as Agent$1 } from "https";
import require$$0$1, { Readable } from "stream";
import require$$5 from "assert";
import d$1 from "querystring";
import { l as l$1 } from "./tunnel-agent.mjs";
import e$1 from "tty";
import require$$0 from "util";
import { n as n$2 } from "./through2.mjs";
import { a as a$2 } from "./is-retry-allowed.mjs";
const e = !(typeof navigator > "u") && "ReactNative" === navigator.product, t$1 = { timeout: e ? 6e4 : 12e4 }, r$1 = function(r2) {
  const a2 = { ...t$1, ..."string" == typeof r2 ? { url: r2 } : r2 };
  if (a2.timeout = n$1(a2.timeout), a2.query) {
    const { url: t2, searchParams: r3 } = (function(t3) {
      const r4 = t3.indexOf("?");
      if (-1 === r4) return { url: t3, searchParams: new URLSearchParams() };
      const n2 = t3.slice(0, r4), a3 = t3.slice(r4 + 1);
      if (!e) return { url: n2, searchParams: new URLSearchParams(a3) };
      if ("function" != typeof decodeURIComponent) throw new Error("Broken `URLSearchParams` implementation, and `decodeURIComponent` is not defined");
      const s2 = new URLSearchParams();
      for (const e2 of a3.split("&")) {
        const [t4, r5] = e2.split("=");
        t4 && s2.append(o$2(t4), o$2(r5 || ""));
      }
      return { url: n2, searchParams: s2 };
    })(a2.url);
    for (const [e2, o2] of Object.entries(a2.query)) {
      if (void 0 !== o2) if (Array.isArray(o2)) for (const t3 of o2) r3.append(e2, t3);
      else r3.append(e2, o2);
      const n2 = r3.toString();
      n2 && (a2.url = `${t2}?${n2}`);
    }
  }
  return a2.method = a2.body && !a2.method ? "POST" : (a2.method || "GET").toUpperCase(), a2;
};
function o$2(e2) {
  return decodeURIComponent(e2.replace(/\+/g, " "));
}
function n$1(e2) {
  if (false === e2 || 0 === e2) return false;
  if (e2.connect || e2.socket) return e2;
  const r2 = Number(e2);
  return isNaN(r2) ? n$1(t$1.timeout) : { connect: r2, socket: r2 };
}
const a$1 = /^https?:\/\//i, s$1 = function(e2) {
  if (!a$1.test(e2.url)) throw new Error(`"${e2.url}" is not a valid URL`);
};
function c$1(e2) {
  return e2 && e2.__esModule && Object.prototype.hasOwnProperty.call(e2, "default") ? e2.default : e2;
}
const t = ["request", "response", "progress", "error", "abort"], o$1 = ["processOptions", "validateOptions", "interceptRequest", "finalizeOptions", "onRequest", "onResponse", "onError", "onReturn", "onHeaders"];
function n(s2, i2) {
  const u2 = [], a2 = o$1.reduce((e2, r2) => (e2[r2] = e2[r2] || [], e2), { processOptions: [r$1], validateOptions: [s$1] });
  function c2(e2) {
    const r2 = t.reduce((e3, r3) => (e3[r3] = /* @__PURE__ */ (function() {
      const e4 = /* @__PURE__ */ Object.create(null);
      let r4 = 0;
      return { publish: function(r5) {
        for (const t2 in e4) e4[t2](r5);
      }, subscribe: function(t2) {
        const o3 = r4++;
        return e4[o3] = t2, function() {
          delete e4[o3];
        };
      } };
    })(), e3), {}), o2 = /* @__PURE__ */ ((e3) => function(r3, t2, ...o3) {
      const n3 = "onError" === r3;
      let s4 = t2;
      for (let t3 = 0; t3 < e3[r3].length && (s4 = (0, e3[r3][t3])(s4, ...o3), !n3 || s4); t3++) ;
      return s4;
    })(a2), n2 = o2("processOptions", e2);
    o2("validateOptions", n2);
    const s3 = { options: n2, channels: r2, applyMiddleware: o2 };
    let u3;
    const c3 = r2.request.subscribe((e3) => {
      u3 = i2(e3, (t2, n3) => ((e4, t3, n4) => {
        let s4 = e4, i3 = t3;
        if (!s4) try {
          i3 = o2("onResponse", t3, n4);
        } catch (e5) {
          i3 = null, s4 = e5;
        }
        s4 = s4 && o2("onError", s4, n4), s4 ? r2.error.publish(s4) : i3 && r2.response.publish(i3);
      })(t2, n3, e3));
    });
    r2.abort.subscribe(() => {
      c3(), u3 && u3.abort();
    });
    const l2 = o2("onReturn", r2, s3);
    return l2 === r2 && r2.request.publish(s3), l2;
  }
  return c2.use = function(e2) {
    if (!e2) throw new Error("Tried to add middleware that resolved to falsey value");
    if ("function" == typeof e2) throw new Error("Tried to add middleware that was a function. It probably expects you to pass options to it.");
    if (e2.onReturn && a2.onReturn.length > 0) throw new Error("Tried to add new middleware with `onReturn` handler, but another handler has already been registered for this event");
    return o$1.forEach((r2) => {
      e2[r2] && a2[r2].push(e2[r2]);
    }), u2.push(e2), c2;
  }, c2.clone = () => n(u2, i2), s2.forEach(c2.use), c2;
}
var r, s, o, c, i, a = { exports: {} }, u$1 = { exports: {} };
function l() {
  return c ? o : (c = 1, o = function(e2) {
    function t2(e3) {
      let r2, s2, o3, c2 = null;
      function i2(...e4) {
        if (!i2.enabled) return;
        const n3 = i2, s3 = Number(/* @__PURE__ */ new Date()), o4 = s3 - (r2 || s3);
        n3.diff = o4, n3.prev = r2, n3.curr = s3, r2 = s3, e4[0] = t2.coerce(e4[0]), "string" != typeof e4[0] && e4.unshift("%O");
        let c3 = 0;
        e4[0] = e4[0].replace(/%([a-zA-Z%])/g, (r3, s4) => {
          if ("%%" === r3) return "%";
          c3++;
          const o5 = t2.formatters[s4];
          if ("function" == typeof o5) {
            const t3 = e4[c3];
            r3 = o5.call(n3, t3), e4.splice(c3, 1), c3--;
          }
          return r3;
        }), t2.formatArgs.call(n3, e4), (n3.log || t2.log).apply(n3, e4);
      }
      return i2.namespace = e3, i2.useColors = t2.useColors(), i2.color = t2.selectColor(e3), i2.extend = n2, i2.destroy = t2.destroy, Object.defineProperty(i2, "enabled", { enumerable: true, configurable: false, get: () => null !== c2 ? c2 : (s2 !== t2.namespaces && (s2 = t2.namespaces, o3 = t2.enabled(e3)), o3), set: (e4) => {
        c2 = e4;
      } }), "function" == typeof t2.init && t2.init(i2), i2;
    }
    function n2(e3, n3) {
      const r2 = t2(this.namespace + (typeof n3 > "u" ? ":" : n3) + e3);
      return r2.log = this.log, r2;
    }
    function o2(e3, t3) {
      let n3 = 0, r2 = 0, s2 = -1, o3 = 0;
      for (; n3 < e3.length; ) if (r2 < t3.length && (t3[r2] === e3[n3] || "*" === t3[r2])) "*" === t3[r2] ? (s2 = r2, o3 = n3, r2++) : (n3++, r2++);
      else {
        if (-1 === s2) return false;
        r2 = s2 + 1, o3++, n3 = o3;
      }
      for (; r2 < t3.length && "*" === t3[r2]; ) r2++;
      return r2 === t3.length;
    }
    return t2.debug = t2, t2.default = t2, t2.coerce = function(e3) {
      return e3 instanceof Error ? e3.stack || e3.message : e3;
    }, t2.disable = function() {
      const e3 = [...t2.names, ...t2.skips.map((e4) => "-" + e4)].join(",");
      return t2.enable(""), e3;
    }, t2.enable = function(e3) {
      t2.save(e3), t2.namespaces = e3, t2.names = [], t2.skips = [];
      const n3 = ("string" == typeof e3 ? e3 : "").trim().replace(/\s+/g, ",").split(",").filter(Boolean);
      for (const e4 of n3) "-" === e4[0] ? t2.skips.push(e4.slice(1)) : t2.names.push(e4);
    }, t2.enabled = function(e3) {
      for (const n3 of t2.skips) if (o2(e3, n3)) return false;
      for (const n3 of t2.names) if (o2(e3, n3)) return true;
      return false;
    }, t2.humanize = (function() {
      if (s) return r;
      s = 1;
      var e3 = 1e3, t3 = 60 * e3, n3 = 60 * t3, o3 = 24 * n3, c2 = 7 * o3;
      function i2(e4, t4, n4, r2) {
        var s2 = t4 >= 1.5 * n4;
        return Math.round(e4 / n4) + " " + r2 + (s2 ? "s" : "");
      }
      return r = function(r2, s2) {
        s2 = s2 || {};
        var a2, u2, l2 = typeof r2;
        if ("string" === l2 && r2.length > 0) return (function(r3) {
          if (!((r3 = String(r3)).length > 100)) {
            var s3 = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(r3);
            if (s3) {
              var i3 = parseFloat(s3[1]);
              switch ((s3[2] || "ms").toLowerCase()) {
                case "years":
                case "year":
                case "yrs":
                case "yr":
                case "y":
                  return 315576e5 * i3;
                case "weeks":
                case "week":
                case "w":
                  return i3 * c2;
                case "days":
                case "day":
                case "d":
                  return i3 * o3;
                case "hours":
                case "hour":
                case "hrs":
                case "hr":
                case "h":
                  return i3 * n3;
                case "minutes":
                case "minute":
                case "mins":
                case "min":
                case "m":
                  return i3 * t3;
                case "seconds":
                case "second":
                case "secs":
                case "sec":
                case "s":
                  return i3 * e3;
                case "milliseconds":
                case "millisecond":
                case "msecs":
                case "msec":
                case "ms":
                  return i3;
                default:
                  return;
              }
            }
          }
        })(r2);
        if ("number" === l2 && isFinite(r2)) return s2.long ? (a2 = r2, (u2 = Math.abs(a2)) >= o3 ? i2(a2, u2, o3, "day") : u2 >= n3 ? i2(a2, u2, n3, "hour") : u2 >= t3 ? i2(a2, u2, t3, "minute") : u2 >= e3 ? i2(a2, u2, e3, "second") : a2 + " ms") : (function(r3) {
          var s3 = Math.abs(r3);
          return s3 >= o3 ? Math.round(r3 / o3) + "d" : s3 >= n3 ? Math.round(r3 / n3) + "h" : s3 >= t3 ? Math.round(r3 / t3) + "m" : s3 >= e3 ? Math.round(r3 / e3) + "s" : r3 + "ms";
        })(r2);
        throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(r2));
      };
    })(), t2.destroy = function() {
      console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
    }, Object.keys(e2).forEach((n3) => {
      t2[n3] = e2[n3];
    }), t2.names = [], t2.skips = [], t2.formatters = {}, t2.selectColor = function(e3) {
      let n3 = 0;
      for (let t3 = 0; t3 < e3.length; t3++) n3 = (n3 << 5) - n3 + e3.charCodeAt(t3), n3 |= 0;
      return t2.colors[Math.abs(n3) % t2.colors.length];
    }, t2.enable(t2.load()), t2;
  });
}
var p$1, f$1, d, C$1, g$2 = { exports: {} };
function h$1() {
  return C$1 || (C$1 = 1, typeof process > "u" || "renderer" === process.type || true === process.browser || process.__nwjs ? a.exports = (i || (i = 1, (function(e2, t2) {
    t2.formatArgs = function(t3) {
      if (t3[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + t3[0] + (this.useColors ? "%c " : " ") + "+" + e2.exports.humanize(this.diff), !this.useColors) return;
      const n3 = "color: " + this.color;
      t3.splice(1, 0, n3, "color: inherit");
      let r2 = 0, s2 = 0;
      t3[0].replace(/%[a-zA-Z%]/g, (e3) => {
        "%%" !== e3 && (r2++, "%c" === e3 && (s2 = r2));
      }), t3.splice(s2, 0, n3);
    }, t2.save = function(e3) {
      try {
        e3 ? t2.storage.setItem("debug", e3) : t2.storage.removeItem("debug");
      } catch {
      }
    }, t2.load = function() {
      let e3;
      try {
        e3 = t2.storage.getItem("debug") || t2.storage.getItem("DEBUG");
      } catch {
      }
      return !e3 && typeof process < "u" && "env" in process && (e3 = process.env.DEBUG), e3;
    }, t2.useColors = function() {
      if (typeof window < "u" && window.process && ("renderer" === window.process.type || window.process.__nwjs)) return true;
      if (typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) return false;
      let e3;
      return typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator < "u" && navigator.userAgent && (e3 = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(e3[1], 10) >= 31 || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }, t2.storage = (function() {
      try {
        return localStorage;
      } catch {
      }
    })(), t2.destroy = /* @__PURE__ */ (() => {
      let e3 = false;
      return () => {
        e3 || (e3 = true, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
      };
    })(), t2.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"], t2.log = console.debug || console.log || (() => {
    }), e2.exports = l()(t2);
    const { formatters: n2 } = e2.exports;
    n2.j = function(e3) {
      try {
        return JSON.stringify(e3);
      } catch (e4) {
        return "[UnexpectedJSONParseError]: " + e4.message;
      }
    };
  })(u$1, u$1.exports)), u$1.exports) : a.exports = (d || (d = 1, (function(n2, r2) {
    const s2 = e$1, o2 = require$$0;
    r2.init = function(e2) {
      e2.inspectOpts = {};
      const t2 = Object.keys(r2.inspectOpts);
      for (let n3 = 0; n3 < t2.length; n3++) e2.inspectOpts[t2[n3]] = r2.inspectOpts[t2[n3]];
    }, r2.log = function(...e2) {
      return process.stderr.write(o2.formatWithOptions(r2.inspectOpts, ...e2) + "\n");
    }, r2.formatArgs = function(e2) {
      const { namespace: t2, useColors: s3 } = this;
      if (s3) {
        const r3 = this.color, s4 = "\x1B[3" + (r3 < 8 ? r3 : "8;5;" + r3), o3 = `  ${s4};1m${t2} \x1B[0m`;
        e2[0] = o3 + e2[0].split("\n").join("\n" + o3), e2.push(s4 + "m+" + n2.exports.humanize(this.diff) + "\x1B[0m");
      } else e2[0] = (r2.inspectOpts.hideDate ? "" : /* @__PURE__ */ (/* @__PURE__ */ new Date()).toISOString() + " ") + t2 + " " + e2[0];
    }, r2.save = function(e2) {
      e2 ? process.env.DEBUG = e2 : delete process.env.DEBUG;
    }, r2.load = function() {
      return process.env.DEBUG;
    }, r2.useColors = function() {
      return "colors" in r2.inspectOpts ? !!r2.inspectOpts.colors : s2.isatty(process.stderr.fd);
    }, r2.destroy = o2.deprecate(() => {
    }, "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."), r2.colors = [6, 2, 3, 4, 5, 1];
    try {
      const e2 = (function() {
        if (f$1) return p$1;
        f$1 = 1;
        const e3 = (function() {
          const e4 = /(Chrome|Chromium)\/(?<chromeVersion>\d+)\./.exec(navigator.userAgent);
          if (e4) return Number.parseInt(e4.groups.chromeVersion, 10);
        })() >= 69 && { level: 1, hasBasic: true, has256: false, has16m: false };
        return p$1 = { stdout: e3, stderr: e3 };
      })();
      e2 && (e2.stderr || e2).level >= 2 && (r2.colors = [20, 21, 26, 27, 32, 33, 38, 39, 40, 41, 42, 43, 44, 45, 56, 57, 62, 63, 68, 69, 74, 75, 76, 77, 78, 79, 80, 81, 92, 93, 98, 99, 112, 113, 128, 129, 134, 135, 148, 149, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 178, 179, 184, 185, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 214, 215, 220, 221]);
    } catch {
    }
    r2.inspectOpts = Object.keys(process.env).filter((e2) => /^debug_/i.test(e2)).reduce((e2, t2) => {
      const n3 = t2.substring(6).toLowerCase().replace(/_([a-z])/g, (e3, t3) => t3.toUpperCase());
      let r3 = process.env[t2];
      return r3 = !!/^(yes|on|true|enabled)$/i.test(r3) || !/^(no|off|false|disabled)$/i.test(r3) && ("null" === r3 ? null : Number(r3)), e2[n3] = r3, e2;
    }, {}), n2.exports = l()(r2);
    const { formatters: c2 } = n2.exports;
    c2.o = function(e2) {
      return this.inspectOpts.colors = this.useColors, o2.inspect(e2, this.inspectOpts).split("\n").map((e3) => e3.trim()).join(" ");
    }, c2.O = function(e2) {
      return this.inspectOpts.colors = this.useColors, o2.inspect(e2, this.inspectOpts);
    };
  })(g$2, g$2.exports)), g$2.exports)), a.exports;
}
let m$2 = 1;
const F = 65535;
let y$2 = null;
const b$2 = function() {
  m$2 = m$2 + 1 & F;
};
function w$1(e2) {
  let t2 = e2.length || 0, r2 = 0, s2 = Date.now() + e2.time, o2 = 0;
  const c2 = (function() {
    y$2 || (y$2 = setInterval(b$2, 250), y$2.unref && y$2.unref());
    const e3 = [0];
    let t3 = 1, n2 = m$2 - 1 & F;
    return { getSpeed: function(r3) {
      let s3 = m$2 - n2 & F;
      for (s3 > 20 && (s3 = 20), n2 = m$2; s3--; ) 20 === t3 && (t3 = 0), e3[t3] = e3[0 === t3 ? 19 : t3 - 1], t3++;
      r3 && (e3[t3 - 1] += r3);
      const o3 = e3[t3 - 1], c3 = e3.length < 20 ? 0 : e3[20 === t3 ? 0 : t3];
      return e3.length < 4 ? o3 : 4 * (o3 - c3) / e3.length;
    }, clear: function() {
      y$2 && (clearInterval(y$2), y$2 = null);
    } };
  })(), i2 = Date.now(), a2 = { percentage: 0, transferred: r2, length: t2, remaining: t2, eta: 0, runtime: 0, speed: 0, delta: 0 }, u2 = function(n2) {
    a2.delta = o2, a2.percentage = n2 ? 100 : t2 ? r2 / t2 * 100 : 0, a2.speed = c2.getSpeed(o2), a2.eta = Math.round(a2.remaining / a2.speed), a2.runtime = Math.floor((Date.now() - i2) / 1e3), s2 = Date.now() + e2.time, o2 = 0, l2.emit("progress", a2);
  }, l2 = n$2({}, function(e3, n2, c3) {
    const i3 = e3.length;
    r2 += i3, o2 += i3, a2.transferred = r2, a2.remaining = t2 >= r2 ? t2 - r2 : 0, Date.now() >= s2 && u2(false), c3(null, e3);
  }, function(e3) {
    u2(true), c2.clear(), e3();
  }), p2 = function(e3) {
    t2 = e3, a2.length = t2, a2.remaining = t2 - a2.transferred, l2.emit("length", t2);
  };
  return l2.on("pipe", function(e3) {
    if (!(t2 > 0)) {
      if (e3.readable && !("writable" in e3) && "headers" in e3 && "object" == typeof (n2 = e3.headers) && null !== n2 && !Array.isArray(n2)) {
        const t3 = "string" == typeof e3.headers["content-length"] ? parseInt(e3.headers["content-length"], 10) : 0;
        return p2(t3);
      }
      if ("length" in e3 && "number" == typeof e3.length) return p2(e3.length);
      e3.on("response", function(e4) {
        if (e4 && e4.headers && "gzip" !== e4.headers["content-encoding"] && e4.headers["content-length"]) return p2(parseInt(e4.headers["content-length"]));
      });
    }
    var n2;
  }), l2.progress = function() {
    return a2.speed = c2.getSpeed(0), a2.eta = Math.round(a2.remaining / a2.speed), a2;
  }, l2;
}
let v$2 = class v extends Error {
  request;
  code;
  constructor(e2, t2) {
    super(e2.message), this.request = t2, this.code = e2.code;
  }
};
var f, m$1, y$1, _$1 = { exports: {} }, g$1 = /* @__PURE__ */ c$1((function() {
  if (y$1) return _$1.exports;
  y$1 = 1;
  var e2, t2, o2, a2 = r$2, h2 = a2.URL, p2 = s$2, d2 = n$3, l2 = require$$0$1.Writable, g2 = require$$5, b2 = (function() {
    return m$1 || (m$1 = 1, f = function() {
      if (!e3) {
        try {
          e3 = h$1()("follow-redirects");
        } catch {
        }
        "function" != typeof e3 && (e3 = function() {
        });
      }
      e3.apply(null, arguments);
    }), f;
    var e3;
  })();
  e2 = typeof process < "u", t2 = typeof window < "u" && typeof document < "u", o2 = M2(Error.captureStackTrace), !e2 && (t2 || !o2) && console.warn("The follow-redirects package should be excluded from browser builds.");
  var R2 = false;
  try {
    g2(new h2(""));
  } catch (e3) {
    R2 = "ERR_INVALID_URL" === e3.code;
  }
  var v3 = ["auth", "host", "hostname", "href", "path", "pathname", "port", "protocol", "query", "search", "hash"], w2 = ["abort", "aborted", "connect", "error", "socket", "timeout"], x2 = /* @__PURE__ */ Object.create(null);
  w2.forEach(function(e3) {
    x2[e3] = function(t3, o3, r2) {
      this._redirectable.emit(e3, t3, o3, r2);
    };
  });
  var q2 = P("ERR_INVALID_URL", "Invalid URL", TypeError), E2 = P("ERR_FR_REDIRECTION_FAILURE", "Redirected request failed"), O2 = P("ERR_FR_TOO_MANY_REDIRECTS", "Maximum number of redirects exceeded", E2), T2 = P("ERR_FR_MAX_BODY_LENGTH_EXCEEDED", "Request body larger than maxBodyLength limit"), L2 = P("ERR_STREAM_WRITE_AFTER_END", "write after end"), k2 = l2.prototype.destroy || C2;
  function j(e3, t3) {
    l2.call(this), this._sanitizeOptions(e3), this._options = e3, this._ended = false, this._ending = false, this._redirectCount = 0, this._redirects = [], this._requestBodyLength = 0, this._requestBodyBuffers = [], t3 && this.on("response", t3);
    var o3 = this;
    this._onNativeResponse = function(e4) {
      try {
        o3._processResponse(e4);
      } catch (e5) {
        o3.emit("error", e5 instanceof E2 ? e5 : new E2({ cause: e5 }));
      }
    }, this._performRequest();
  }
  function B(e3) {
    var t3 = { maxRedirects: 21, maxBodyLength: 10485760 }, o3 = {};
    return Object.keys(e3).forEach(function(r2) {
      var s2 = r2 + ":", n2 = o3[s2] = e3[r2], i2 = t3[r2] = Object.create(n2);
      Object.defineProperties(i2, { request: { value: function(e4, r3, n3) {
        return h2 && e4 instanceof h2 ? e4 = $2(e4) : A(e4) ? e4 = $2(H(e4)) : (n3 = r3, r3 = S2(e4), e4 = { protocol: s2 }), M2(r3) && (n3 = r3, r3 = null), (r3 = Object.assign({ maxRedirects: t3.maxRedirects, maxBodyLength: t3.maxBodyLength }, e4, r3)).nativeProtocols = o3, !A(r3.host) && !A(r3.hostname) && (r3.hostname = "::1"), g2.equal(r3.protocol, s2, "protocol mismatch"), b2("options", r3), new j(r3, n3);
      }, configurable: true, enumerable: true, writable: true }, get: { value: function(e4, t4, o4) {
        var r3 = i2.request(e4, t4, o4);
        return r3.end(), r3;
      }, configurable: true, enumerable: true, writable: true } });
    }), t3;
  }
  function C2() {
  }
  function H(e3) {
    var t3;
    if (R2) t3 = new h2(e3);
    else if (!A((t3 = S2(a2.parse(e3))).protocol)) throw new q2({ input: e3 });
    return t3;
  }
  function S2(e3) {
    if (/^\[/.test(e3.hostname) && !/^\[[:0-9a-f]+\]$/i.test(e3.hostname)) throw new q2({ input: e3.href || e3 });
    if (/^\[/.test(e3.host) && !/^\[[:0-9a-f]+\](:\d+)?$/i.test(e3.host)) throw new q2({ input: e3.href || e3 });
    return e3;
  }
  function $2(e3, t3) {
    var o3 = t3 || {};
    for (var r2 of v3) o3[r2] = e3[r2];
    return o3.hostname.startsWith("[") && (o3.hostname = o3.hostname.slice(1, -1)), "" !== o3.port && (o3.port = Number(o3.port)), o3.path = o3.search ? o3.pathname + o3.search : o3.pathname, o3;
  }
  function U(e3, t3) {
    var o3;
    for (var r2 in t3) e3.test(r2) && (o3 = t3[r2], delete t3[r2]);
    return null === o3 || typeof o3 > "u" ? void 0 : String(o3).trim();
  }
  function P(e3, t3, o3) {
    function r2(o4) {
      M2(Error.captureStackTrace) && Error.captureStackTrace(this, this.constructor), Object.assign(this, o4 || {}), this.code = e3, this.message = this.cause ? t3 + ": " + this.cause.message : t3;
    }
    return r2.prototype = new (o3 || Error)(), Object.defineProperties(r2.prototype, { constructor: { value: r2, enumerable: false }, name: { value: "Error [" + e3 + "]", enumerable: false } }), r2;
  }
  function z2(e3, t3) {
    for (var o3 of w2) e3.removeListener(o3, x2[o3]);
    e3.on("error", C2), e3.destroy(t3);
  }
  function A(e3) {
    return "string" == typeof e3 || e3 instanceof String;
  }
  function M2(e3) {
    return "function" == typeof e3;
  }
  return j.prototype = Object.create(l2.prototype), j.prototype.abort = function() {
    z2(this._currentRequest), this._currentRequest.abort(), this.emit("abort");
  }, j.prototype.destroy = function(e3) {
    return z2(this._currentRequest, e3), k2.call(this, e3), this;
  }, j.prototype.write = function(e3, t3, o3) {
    if (this._ending) throw new L2();
    if (!(A(e3) || "object" == typeof (r2 = e3) && "length" in r2)) throw new TypeError("data should be a string, Buffer or Uint8Array");
    var r2;
    M2(t3) && (o3 = t3, t3 = null), 0 !== e3.length ? this._requestBodyLength + e3.length <= this._options.maxBodyLength ? (this._requestBodyLength += e3.length, this._requestBodyBuffers.push({ data: e3, encoding: t3 }), this._currentRequest.write(e3, t3, o3)) : (this.emit("error", new T2()), this.abort()) : o3 && o3();
  }, j.prototype.end = function(e3, t3, o3) {
    if (M2(e3) ? (o3 = e3, e3 = t3 = null) : M2(t3) && (o3 = t3, t3 = null), e3) {
      var r2 = this, s2 = this._currentRequest;
      this.write(e3, t3, function() {
        r2._ended = true, s2.end(null, null, o3);
      }), this._ending = true;
    } else this._ended = this._ending = true, this._currentRequest.end(null, null, o3);
  }, j.prototype.setHeader = function(e3, t3) {
    this._options.headers[e3] = t3, this._currentRequest.setHeader(e3, t3);
  }, j.prototype.removeHeader = function(e3) {
    delete this._options.headers[e3], this._currentRequest.removeHeader(e3);
  }, j.prototype.setTimeout = function(e3, t3) {
    var o3 = this;
    function r2(t4) {
      t4.setTimeout(e3), t4.removeListener("timeout", t4.destroy), t4.addListener("timeout", t4.destroy);
    }
    function s2(t4) {
      o3._timeout && clearTimeout(o3._timeout), o3._timeout = setTimeout(function() {
        o3.emit("timeout"), n2();
      }, e3), r2(t4);
    }
    function n2() {
      o3._timeout && (clearTimeout(o3._timeout), o3._timeout = null), o3.removeListener("abort", n2), o3.removeListener("error", n2), o3.removeListener("response", n2), o3.removeListener("close", n2), t3 && o3.removeListener("timeout", t3), o3.socket || o3._currentRequest.removeListener("socket", s2);
    }
    return t3 && this.on("timeout", t3), this.socket ? s2(this.socket) : this._currentRequest.once("socket", s2), this.on("socket", r2), this.on("abort", n2), this.on("error", n2), this.on("response", n2), this.on("close", n2), this;
  }, ["flushHeaders", "getHeader", "setNoDelay", "setSocketKeepAlive"].forEach(function(e3) {
    j.prototype[e3] = function(t3, o3) {
      return this._currentRequest[e3](t3, o3);
    };
  }), ["aborted", "connection", "socket"].forEach(function(e3) {
    Object.defineProperty(j.prototype, e3, { get: function() {
      return this._currentRequest[e3];
    } });
  }), j.prototype._sanitizeOptions = function(e3) {
    if (e3.headers || (e3.headers = {}), e3.host && (e3.hostname || (e3.hostname = e3.host), delete e3.host), !e3.pathname && e3.path) {
      var t3 = e3.path.indexOf("?");
      t3 < 0 ? e3.pathname = e3.path : (e3.pathname = e3.path.substring(0, t3), e3.search = e3.path.substring(t3));
    }
  }, j.prototype._performRequest = function() {
    var e3 = this._options.protocol, t3 = this._options.nativeProtocols[e3];
    if (!t3) throw new TypeError("Unsupported protocol " + e3);
    if (this._options.agents) {
      var o3 = e3.slice(0, -1);
      this._options.agent = this._options.agents[o3];
    }
    var r2 = this._currentRequest = t3.request(this._options, this._onNativeResponse);
    for (var s2 of (r2._redirectable = this, w2)) r2.on(s2, x2[s2]);
    if (this._currentUrl = /^\//.test(this._options.path) ? a2.format(this._options) : this._options.path, this._isRedirect) {
      var n2 = 0, i2 = this, c2 = this._requestBodyBuffers;
      !(function e4(t4) {
        if (r2 === i2._currentRequest) if (t4) i2.emit("error", t4);
        else if (n2 < c2.length) {
          var o4 = c2[n2++];
          r2.finished || r2.write(o4.data, o4.encoding, e4);
        } else i2._ended && r2.end();
      })();
    }
  }, j.prototype._processResponse = function(e3) {
    var t3 = e3.statusCode;
    this._options.trackRedirects && this._redirects.push({ url: this._currentUrl, headers: e3.headers, statusCode: t3 });
    var o3 = e3.headers.location;
    if (!o3 || false === this._options.followRedirects || t3 < 300 || t3 >= 400) return e3.responseUrl = this._currentUrl, e3.redirects = this._redirects, this.emit("response", e3), void (this._requestBodyBuffers = []);
    if (z2(this._currentRequest), e3.destroy(), ++this._redirectCount > this._options.maxRedirects) throw new O2();
    var r2, s2 = this._options.beforeRedirect;
    s2 && (r2 = Object.assign({ Host: e3.req.getHeader("host") }, this._options.headers));
    var n2 = this._options.method;
    ((301 === t3 || 302 === t3) && "POST" === this._options.method || 303 === t3 && !/^(?:GET|HEAD)$/.test(this._options.method)) && (this._options.method = "GET", this._requestBodyBuffers = [], U(/^content-/i, this._options.headers));
    var i2, c2, u2 = U(/^host$/i, this._options.headers), p3 = H(this._currentUrl), d3 = u2 || p3.host, l3 = /^\w+:/.test(o3) ? this._currentUrl : a2.format(Object.assign(p3, { host: d3 })), f2 = (i2 = o3, c2 = l3, R2 ? new h2(i2, c2) : H(a2.resolve(c2, i2)));
    if (b2("redirecting to", f2.href), this._isRedirect = true, $2(f2, this._options), (f2.protocol !== p3.protocol && "https:" !== f2.protocol || f2.host !== d3 && !(function(e4, t4) {
      g2(A(e4) && A(t4));
      var o4 = e4.length - t4.length - 1;
      return o4 > 0 && "." === e4[o4] && e4.endsWith(t4);
    })(f2.host, d3)) && U(/^(?:(?:proxy-)?authorization|cookie)$/i, this._options.headers), M2(s2)) {
      var m2 = { headers: e3.headers, statusCode: t3 }, y2 = { url: l3, method: n2, headers: r2 };
      s2(this._options, m2, y2), this._sanitizeOptions(this._options);
    }
    this._performRequest();
  }, _$1.exports = B({ http: p2, https: d2 }), _$1.exports.wrap = B, _$1.exports;
})());
function b$1(e2) {
  return Object.keys(e2 || {}).reduce((t2, o2) => (t2[o2.toLowerCase()] = e2[o2], t2), {});
}
function R$1(e2) {
  return e2.replace(/^\.*/, ".").toLowerCase();
}
function v$1(e2) {
  const t2 = e2.trim().toLowerCase(), o2 = t2.split(":", 2);
  return { hostname: R$1(o2[0]), port: o2[1], hasPort: t2.indexOf(":") > -1 };
}
const w = ["protocol", "slashes", "auth", "host", "port", "hostname", "hash", "search", "query", "pathname", "path", "href"], x$1 = ["accept", "accept-charset", "accept-encoding", "accept-language", "accept-ranges", "cache-control", "content-encoding", "content-language", "content-location", "content-md5", "content-range", "content-type", "connection", "date", "expect", "max-forwards", "pragma", "referer", "te", "user-agent", "via"], q$1 = ["proxy-authorization"], E$1 = (e2) => null !== e2 && "object" == typeof e2 && "function" == typeof e2.pipe, O = "node", T$1 = (e2, t2, o2, r2, s2) => ({ body: s2, url: o2, method: r2, headers: e2.headers, statusCode: e2.statusCode || 0, statusMessage: e2.statusMessage || "", remoteAddress: t2 }), L = (e2, o2) => {
  const { options: i2 } = e2, c2 = Object.assign({}, r$2.parse(i2.url));
  if ("function" == typeof fetch && i2.fetch) {
    const t2 = new AbortController(), r2 = e2.applyMiddleware("finalizeOptions", { ...c2, method: i2.method, headers: { ..."object" == typeof i2.fetch && i2.fetch.headers ? b$1(i2.fetch.headers) : {}, ...b$1(i2.headers) }, maxRedirects: i2.maxRedirects }), s2 = { credentials: i2.withCredentials ? "include" : "omit", ..."object" == typeof i2.fetch ? i2.fetch : {}, method: r2.method, headers: r2.headers, body: i2.body, signal: t2.signal }, n2 = e2.applyMiddleware("interceptRequest", void 0, { adapter: O, context: e2 });
    if (n2) {
      const e3 = setTimeout(o2, 0, null, n2);
      return { abort: () => clearTimeout(e3) };
    }
    const a2 = fetch(i2.url, s2);
    return e2.applyMiddleware("onRequest", { options: i2, adapter: O, request: a2, context: e2 }), a2.then(async (e3) => {
      const t3 = i2.rawBody ? e3.body : await e3.text(), r3 = {};
      e3.headers.forEach((e4, t4) => {
        r3[t4] = e4;
      }), o2(null, { body: t3, url: e3.url, method: i2.method, headers: r3, statusCode: e3.status, statusMessage: e3.statusText });
    }).catch((e3) => {
      "AbortError" != e3.name && o2(e3);
    }), { abort: () => t2.abort() };
  }
  const u2 = E$1(i2.body) ? "stream" : typeof i2.body;
  if ("undefined" !== u2 && "stream" !== u2 && "string" !== u2 && !Buffer.isBuffer(i2.body)) throw new Error(`Request body must be a string, buffer or stream, got ${u2}`);
  const f2 = {};
  i2.bodySize ? f2["content-length"] = i2.bodySize : i2.body && "stream" !== u2 && (f2["content-length"] = Buffer.byteLength(i2.body));
  let m2 = false;
  const y2 = (e3, t2) => !m2 && o2(e3, t2);
  e2.channels.abort.subscribe(() => {
    m2 = true;
  });
  let _2 = Object.assign({}, c2, { method: i2.method, headers: Object.assign({}, b$1(i2.headers), f2), maxRedirects: i2.maxRedirects });
  const L2 = (function(e3) {
    const t2 = typeof e3.proxy > "u" ? (function(e4) {
      const t3 = process.env.NO_PROXY || process.env.no_proxy || "";
      return "*" === t3 || "" !== t3 && (function(e5, t4) {
        const o3 = e5.port || ("https:" === e5.protocol ? "443" : "80"), r2 = R$1(e5.hostname || "");
        return t4.split(",").map(v$1).some((e6) => {
          const t5 = r2.indexOf(e6.hostname), s2 = t5 > -1 && t5 === r2.length - e6.hostname.length;
          return e6.hasPort ? o3 === e6.port && s2 : s2;
        });
      })(e4, t3) ? null : "http:" === e4.protocol ? process.env.HTTP_PROXY || process.env.http_proxy || null : "https:" === e4.protocol && (process.env.HTTPS_PROXY || process.env.https_proxy || process.env.HTTP_PROXY || process.env.http_proxy) || null;
    })(r$2.parse(e3.url)) : e3.proxy;
    return "string" == typeof t2 ? r$2.parse(t2) : t2 || null;
  })(i2), k2 = L2 && (function(e3) {
    return typeof e3.tunnel < "u" ? !!e3.tunnel : "https:" === r$2.parse(e3.url).protocol;
  })(i2), j = e2.applyMiddleware("interceptRequest", void 0, { adapter: O, context: e2 });
  if (j) {
    const e3 = setImmediate(y2, null, j);
    return { abort: () => clearImmediate(e3) };
  }
  if (0 !== i2.maxRedirects && (_2.maxRedirects = i2.maxRedirects || 5), L2 && k2 ? _2 = (function(e3 = {}, t2) {
    const o3 = Object.assign({}, e3), r2 = x$1.concat(o3.proxyHeaderWhiteList || []).map((e4) => e4.toLowerCase()), s2 = q$1.concat(o3.proxyHeaderExclusiveList || []).map((e4) => e4.toLowerCase()), n2 = (i3 = o3.headers, a2 = r2, Object.keys(i3).filter((e4) => -1 !== a2.indexOf(e4.toLowerCase())).reduce((e4, t3) => (e4[t3] = i3[t3], e4), {}));
    var i3, a2;
    n2.host = (function(e4) {
      const t3 = e4.port, o4 = e4.protocol;
      let r3 = `${e4.hostname}:`;
      return r3 += t3 || ("https:" === o4 ? "443" : "80"), r3;
    })(o3), o3.headers = Object.keys(o3.headers || {}).reduce((e4, t3) => (-1 === s2.indexOf(t3.toLowerCase()) && (e4[t3] = o3.headers[t3]), e4), {});
    const c3 = (function(e4, t3) {
      const o4 = (function(e5) {
        return w.reduce((t4, o5) => (t4[o5] = e5[o5], t4), {});
      })(e4), r3 = (function(e5, t4) {
        return `${"https:" === e5.protocol ? "https" : "http"}Over${"https:" === t4.protocol ? "Https" : "Http"}`;
      })(o4, t3);
      return l$1[r3];
    })(o3, t2), u3 = (function(e4, t3, o4) {
      return { proxy: { host: t3.hostname, port: +t3.port, proxyAuth: t3.auth, headers: o4 }, headers: e4.headers, ca: e4.ca, cert: e4.cert, key: e4.key, passphrase: e4.passphrase, pfx: e4.pfx, ciphers: e4.ciphers, rejectUnauthorized: e4.rejectUnauthorized, secureOptions: e4.secureOptions, secureProtocol: e4.secureProtocol };
    })(o3, t2, n2);
    return o3.agent = c3(u3), o3;
  })(_2, L2) : L2 && !k2 && (_2 = (function(e3, t2, o3) {
    const s2 = e3.headers || {}, n2 = Object.assign({}, e3, { headers: s2 });
    return s2.host = s2.host || (function(e4) {
      const t3 = e4.port || ("https:" === e4.protocol ? "443" : "80");
      return `${e4.hostname}:${t3}`;
    })(t2), n2.protocol = o3.protocol || n2.protocol, n2.hostname = (o3.host || "hostname" in o3 && o3.hostname || n2.hostname || "").replace(/:\d+/, ""), n2.port = o3.port ? `${o3.port}` : n2.port, n2.host = (function(e4) {
      let t3 = e4.host;
      return e4.port && ("80" === e4.port && "http:" === e4.protocol || "443" === e4.port && "https:" === e4.protocol) && (t3 = e4.hostname), t3;
    })(Object.assign({}, t2, o3)), n2.href = `${n2.protocol}//${n2.host}${n2.path}`, n2.path = r$2.format(t2), n2;
  })(_2, c2, L2)), !k2 && L2 && L2.auth && !_2.headers["proxy-authorization"]) {
    const [e3, t2] = "string" == typeof L2.auth ? L2.auth.split(":").map((e4) => d$1.unescape(e4)) : [L2.auth.username, L2.auth.password], o3 = Buffer.from(`${e3}:${t2}`, "utf8").toString("base64");
    _2.headers["proxy-authorization"] = `Basic ${o3}`;
  }
  const B = (function(e3, t2, o3) {
    const r2 = "https:" === e3.protocol, i3 = 0 === e3.maxRedirects ? { http: s$2, https: n$3 } : { http: g$1.http, https: g$1.https };
    if (!t2 || o3) return r2 ? i3.https : i3.http;
    let a2 = 443 === t2.port;
    return t2.protocol && (a2 = /^https:?/.test(t2.protocol)), a2 ? i3.https : i3.http;
  })(_2, L2, k2);
  "function" == typeof i2.debug && L2 && i2.debug("Proxying using %s", _2.agent ? "tunnel agent" : `${_2.host}:${_2.port}`);
  const C2 = "HEAD" !== _2.method;
  let H;
  C2 && !_2.headers["accept-encoding"] && false !== i2.compress && (_2.headers["accept-encoding"] = typeof Bun < "u" ? "gzip, deflate" : "br, gzip, deflate");
  const S2 = e2.applyMiddleware("finalizeOptions", _2), $2 = B.request(S2, (o3) => {
    const r2 = o3.complete && 0 === o3.readableLength, s2 = C2 ? t$2(o3) : o3;
    H = s2;
    const n2 = e2.applyMiddleware("onHeaders", s2, { headers: o3.headers, adapter: O, context: e2 }), a2 = "responseUrl" in o3 ? o3.responseUrl : i2.url, c3 = s2.socket?.remoteAddress;
    if (i2.stream) return y2(null, T$1(s2, c3, a2, _2.method, n2)), void process.nextTick(() => {
      if (!n2.readableFlowing) {
        if (r2 || o3.complete && 0 === o3.readableLength && !o3.readableFlowing) return void n2.resume();
        o3.complete && o3.readableFlowing && n2.once("readable", () => {
          if (n2.readableFlowing) return;
          const e3 = n2.read(1);
          null === e3 ? n2.resume() : n2.unshift(e3);
        });
      }
    });
    !(function(e3, t2) {
      const o4 = [];
      e3.on("data", function(e4) {
        o4.push(e4);
      }), e3.once("end", function() {
        t2 && t2(null, Buffer.concat(o4)), t2 = null;
      }), e3.once("error", function(e4) {
        t2 && t2(e4), t2 = null;
      });
    })(n2, (e3, t2) => {
      if (e3) return y2(e3);
      const o4 = i2.rawBody ? t2 : t2.toString(), r3 = T$1(s2, c3, a2, _2.method, o4);
      return y2(null, r3);
    });
  });
  function U(e3) {
    H && H.destroy(e3), $2.destroy(e3);
  }
  $2.once("socket", (e3) => {
    e3.once("error", U), $2.once("response", (t2) => {
      t2.once("end", () => {
        e3.removeListener("error", U);
      });
    });
  }), $2.once("error", (e3) => {
    H || y2(new v$2(e3, $2));
  }), i2.timeout && (function(e3, t2) {
    if (e3.timeoutTimer) return e3;
    const o3 = isNaN(t2) ? t2 : { socket: t2, connect: t2 }, r2 = e3.getHeader("host"), s2 = r2 ? " to " + r2 : "";
    function n2() {
      e3.timeoutTimer && (clearTimeout(e3.timeoutTimer), e3.timeoutTimer = null);
    }
    function i3(t3) {
      if (n2(), void 0 !== o3.socket) {
        const r3 = () => {
          const e4 = new Error("Socket timed out on request" + s2);
          e4.code = "ESOCKETTIMEDOUT", t3.destroy(e4);
        };
        t3.setTimeout(o3.socket, r3), e3.once("response", (e4) => {
          e4.once("end", () => {
            t3.removeListener("timeout", r3);
          });
        });
      }
    }
    void 0 !== o3.connect && (e3.timeoutTimer = setTimeout(function() {
      const t3 = new Error("Connection timed out on request" + s2);
      t3.code = "ETIMEDOUT", e3.destroy(t3);
    }, o3.connect)), e3.on("socket", function(e4) {
      e4.connecting ? e4.once("connect", () => i3(e4)) : i3(e4);
    }), e3.on("error", n2);
  })($2, i2.timeout);
  const { bodyStream: P, progress: z2 } = (function(e3) {
    if (!e3.body) return {};
    const t2 = E$1(e3.body), o3 = e3.bodySize || (t2 ? null : Buffer.byteLength(e3.body));
    if (!o3) return t2 ? { bodyStream: e3.body } : {};
    const r2 = w$1({ time: 32, length: o3 });
    return { bodyStream: (t2 ? e3.body : Readable.from(e3.body)).pipe(r2), progress: r2 };
  })(i2);
  return e2.applyMiddleware("onRequest", { options: i2, adapter: O, request: $2, context: e2, progress: z2 }), P ? P.pipe($2) : $2.end(i2.body), { abort: () => $2.abort() };
}, k = (t2 = [], o2 = L) => n(t2, o2);
const u = /^https:/i;
function p(s2) {
  const r2 = new Agent(s2), n2 = new Agent$1(s2), o2 = { http: r2, https: n2 };
  return { finalizeOptions: (e2) => {
    if (e2.agent) return e2;
    if (e2.maxRedirects > 0) return { ...e2, agents: o2 };
    const t2 = u.test(e2.href || e2.protocol);
    return { ...e2, agent: t2 ? n2 : r2 };
  } };
}
var b = /* @__PURE__ */ c$1(h$1());
const h = ["cookie", "authorization"], m = Object.prototype.hasOwnProperty;
function y(e2 = {}) {
  const t2 = e2.verbose, s2 = e2.namespace || "get-it", r2 = b(s2), n2 = e2.log || r2, o2 = n2 === r2 && !b.enabled(s2);
  let i2 = 0;
  return { processOptions: (e3) => (e3.debug = n2, e3.requestId = e3.requestId || ++i2, e3), onRequest: (s3) => {
    if (o2 || !s3) return s3;
    const r3 = s3.options;
    if (n2("[%s] HTTP %s %s", r3.requestId, r3.method, r3.url), t2 && r3.body && "string" == typeof r3.body && n2("[%s] Request body: %s", r3.requestId, r3.body), t2 && r3.headers) {
      const t3 = false === e2.redactSensitiveHeaders ? r3.headers : ((e3, t4) => {
        const s4 = {};
        for (const r4 in e3) m.call(e3, r4) && (s4[r4] = t4.indexOf(r4.toLowerCase()) > -1 ? "<redacted>" : e3[r4]);
        return s4;
      })(r3.headers, h);
      n2("[%s] Request headers: %s", r3.requestId, JSON.stringify(t3, null, 2));
    }
    return s3;
  }, onResponse: (e3, s3) => {
    if (o2 || !e3) return e3;
    const r3 = s3.options.requestId;
    return n2("[%s] Response code: %s %s", r3, e3.statusCode, e3.statusMessage), t2 && e3.body && n2("[%s] Response body: %s", r3, (function(e4) {
      return -1 !== (e4.headers["content-type"] || "").toLowerCase().indexOf("application/json") ? (function(e5) {
        try {
          const t3 = "string" == typeof e5 ? JSON.parse(e5) : e5;
          return JSON.stringify(t3, null, 2);
        } catch {
          return e5;
        }
      })(e4.body) : e4.body;
    })(e3)), e3;
  }, onError: (e3, t3) => {
    const s3 = t3.options.requestId;
    return e3 ? (n2("[%s] ERROR: %s", s3, e3.message), e3) : (n2("[%s] Error encountered, but handled by an earlier middleware", s3), e3);
  } };
}
function g(e2, t2 = {}) {
  return { processOptions: (s2) => {
    const r2 = s2.headers || {};
    return s2.headers = t2.override ? Object.assign({}, r2, e2) : Object.assign({}, e2, r2), s2;
  } };
}
const R = typeof Buffer > "u" ? () => false : (e2) => Buffer.isBuffer(e2);
function q(e2) {
  return "[object Object]" === Object.prototype.toString.call(e2);
}
function E(e2) {
  if (false === q(e2)) return false;
  const t2 = e2.constructor;
  if (void 0 === t2) return true;
  const s2 = t2.prototype;
  return !(false === q(s2) || false === s2.hasOwnProperty("isPrototypeOf"));
}
const x = ["boolean", "string", "number"];
function C() {
  return { processOptions: (e2) => {
    const t2 = e2.body;
    return !t2 || "function" == typeof t2.pipe || R(t2) || -1 === x.indexOf(typeof t2) && !Array.isArray(t2) && !E(t2) ? e2 : Object.assign({}, e2, { body: JSON.stringify(e2.body), headers: Object.assign({}, e2.headers, { "Content-Type": "application/json" }) });
  } };
}
function T(e2) {
  return { onResponse: (s2) => {
    const r2 = s2.headers["content-type"] || "", n2 = e2 && e2.force || -1 !== r2.indexOf("application/json");
    return s2.body && r2 && n2 ? Object.assign({}, s2, { body: t2(s2.body) }) : s2;
  }, processOptions: (e3) => Object.assign({}, e3, { headers: Object.assign({ Accept: "application/json" }, e3.headers) }) };
  function t2(e3) {
    try {
      return JSON.parse(e3);
    } catch (e4) {
      throw e4.message = `Failed to parsed response body as JSON: ${e4.message}`, e4;
    }
  }
}
let v2 = {};
typeof globalThis < "u" ? v2 = globalThis : typeof window < "u" ? v2 = window : typeof global < "u" ? v2 = global : typeof self < "u" && (v2 = self);
var S = v2;
function N(e2 = {}) {
  const t2 = e2.implementation || S.Observable;
  if (!t2) throw new Error("`Observable` is not available in global scope, and no implementation was passed");
  return { onReturn: (e3, s2) => new t2((t3) => (e3.error.subscribe((e4) => t3.error(e4)), e3.progress.subscribe((e4) => t3.next(Object.assign({ type: "progress" }, e4))), e3.response.subscribe((e4) => {
    t3.next(Object.assign({ type: "response" }, e4)), t3.complete();
  }), e3.request.publish(s2), () => e3.abort.publish())) };
}
function $(e2) {
  return (t2) => ({ stage: e2, percent: t2.percentage, total: t2.length, loaded: t2.transferred, lengthComputable: !(0 === t2.length && 0 === t2.percentage) });
}
function _() {
  let e2 = false;
  const t2 = $("download"), s2 = $("upload");
  return { onHeaders: (e3, s3) => {
    const r2 = w$1({ time: 32 });
    return r2.on("progress", (e4) => s3.context.channels.progress.publish(t2(e4))), e3.pipe(r2);
  }, onRequest: (t3) => {
    t3.progress && t3.progress.on("progress", (r2) => {
      e2 = true, t3.context.channels.progress.publish(s2(r2));
    });
  }, onResponse: (t3, r2) => (!e2 && typeof r2.options.body < "u" && r2.channels.progress.publish(s2({ length: 0, transferred: 0, percentage: 100 })), t3) };
}
var J = (e2, t2, s2) => !("GET" !== s2.method && "HEAD" !== s2.method || e2.response && e2.response.statusCode) && a$2(e2);
function M(e2) {
  return 100 * Math.pow(2, e2) + 100 * Math.random();
}
const z = (e2 = {}) => ((e3) => {
  const t2 = e3.maxRetries || 5, s2 = e3.retryDelay || M, r2 = e3.shouldRetry;
  return { onError: (e4, n2) => {
    const o2 = n2.options, i2 = o2.maxRetries || t2, c2 = o2.retryDelay || s2, a2 = o2.shouldRetry || r2, u2 = o2.attemptNumber || 0;
    if (null !== (p2 = o2.body) && "object" == typeof p2 && "function" == typeof p2.pipe || !a2(e4, u2, o2) || u2 >= i2) return e4;
    var p2;
    const l2 = Object.assign({}, n2, { options: Object.assign({}, o2, { attemptNumber: u2 + 1 }) });
    return setTimeout(() => n2.channels.request.publish(l2), c2(u2)), null;
  } };
})({ shouldRetry: J, ...e2 });
z.shouldRetry = J;
export {
  C,
  N,
  T,
  _,
  g,
  k,
  p,
  y,
  z
};
