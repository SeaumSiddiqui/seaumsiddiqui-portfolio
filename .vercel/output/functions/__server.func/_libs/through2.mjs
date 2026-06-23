import { g as getDefaultExportFromCjs } from "./react.mjs";
import { r as requireReadable } from "./readable-stream.mjs";
var through2 = { exports: {} };
var hasRequiredThrough2;
function requireThrough2() {
  if (hasRequiredThrough2) return through2.exports;
  hasRequiredThrough2 = 1;
  const { Transform } = requireReadable();
  function inherits(fn, sup) {
    fn.super_ = sup;
    fn.prototype = Object.create(sup.prototype, {
      constructor: { value: fn, enumerable: false, writable: true, configurable: true }
    });
  }
  function through2$1(construct) {
    return (options, transform, flush) => {
      if (typeof options === "function") {
        flush = transform;
        transform = options;
        options = {};
      }
      if (typeof transform !== "function") {
        transform = (chunk, enc, cb) => cb(null, chunk);
      }
      if (typeof flush !== "function") {
        flush = null;
      }
      return construct(options, transform, flush);
    };
  }
  const make = through2$1((options, transform, flush) => {
    const t2 = new Transform(options);
    t2._transform = transform;
    if (flush) {
      t2._flush = flush;
    }
    return t2;
  });
  const ctor = through2$1((options, transform, flush) => {
    function Through2(override) {
      if (!(this instanceof Through2)) {
        return new Through2(override);
      }
      this.options = Object.assign({}, options, override);
      Transform.call(this, this.options);
      this._transform = transform;
      if (flush) {
        this._flush = flush;
      }
    }
    inherits(Through2, Transform);
    return Through2;
  });
  const obj = through2$1(function(options, transform, flush) {
    const t2 = new Transform(Object.assign({ objectMode: true, highWaterMark: 16 }, options));
    t2._transform = transform;
    if (flush) {
      t2._flush = flush;
    }
    return t2;
  });
  through2.exports = make;
  through2.exports.ctor = ctor;
  through2.exports.obj = obj;
  return through2.exports;
}
var through2Exports = requireThrough2();
const n = /* @__PURE__ */ getDefaultExportFromCjs(through2Exports);
export {
  n
};
