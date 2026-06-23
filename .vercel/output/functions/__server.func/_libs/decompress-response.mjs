import require$$1 from "zlib";
import { g as getDefaultExportFromCjs } from "./react.mjs";
import require$$0 from "stream";
import { r as requireMimicResponse } from "./mimic-response.mjs";
var decompressResponse;
var hasRequiredDecompressResponse;
function requireDecompressResponse() {
  if (hasRequiredDecompressResponse) return decompressResponse;
  hasRequiredDecompressResponse = 1;
  const { Transform, PassThrough } = require$$0;
  const zlib = require$$1;
  const mimicResponse = requireMimicResponse();
  decompressResponse = (response) => {
    const contentEncoding = (response.headers["content-encoding"] || "").toLowerCase();
    delete response.headers["content-encoding"];
    if (!["gzip", "deflate", "br"].includes(contentEncoding)) {
      return response;
    }
    const isBrotli = contentEncoding === "br";
    if (isBrotli && typeof zlib.createBrotliDecompress !== "function") {
      response.destroy(new Error("Brotli is not supported on Node.js < 12"));
      return response;
    }
    let isEmpty = true;
    const checker = new Transform({
      transform(data, _encoding, callback) {
        isEmpty = false;
        callback(null, data);
      },
      flush(callback) {
        callback();
      }
    });
    const finalStream = new PassThrough({
      autoDestroy: false,
      destroy(error, callback) {
        response.destroy();
        callback(error);
      }
    });
    const decompressStream = isBrotli ? zlib.createBrotliDecompress() : zlib.createUnzip();
    decompressStream.once("error", (error) => {
      if (isEmpty && !response.readable) {
        finalStream.end();
        return;
      }
      finalStream.destroy(error);
    });
    mimicResponse(response, finalStream);
    response.pipe(checker).pipe(decompressStream).pipe(finalStream);
    return finalStream;
  };
  return decompressResponse;
}
var decompressResponseExports = requireDecompressResponse();
const t = /* @__PURE__ */ getDefaultExportFromCjs(decompressResponseExports);
export {
  t
};
