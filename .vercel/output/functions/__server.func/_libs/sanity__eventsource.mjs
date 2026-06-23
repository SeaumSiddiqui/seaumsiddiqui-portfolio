import { g as getDefaultExportFromCjs } from "./react.mjs";
import { r as requireEventsource } from "./eventsource.mjs";
function _mergeNamespaces(n, m) {
  for (var i = 0; i < m.length; i++) {
    const e = m[i];
    if (typeof e !== "string" && !Array.isArray(e)) {
      for (const k in e) {
        if (k !== "default" && !(k in n)) {
          const d = Object.getOwnPropertyDescriptor(e, k);
          if (d) {
            Object.defineProperty(n, k, d.get ? d : {
              enumerable: true,
              get: function() {
                return e[k];
              }
            });
          }
        }
      }
    }
  }
  return Object.freeze(n);
}
var node$2;
var hasRequiredNode;
function requireNode() {
  if (hasRequiredNode) return node$2;
  hasRequiredNode = 1;
  node$2 = requireEventsource();
  return node$2;
}
var nodeExports = /* @__PURE__ */ requireNode();
const node = /* @__PURE__ */ getDefaultExportFromCjs(nodeExports);
const node$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: node
}, [nodeExports]);
export {
  node$1 as n
};
