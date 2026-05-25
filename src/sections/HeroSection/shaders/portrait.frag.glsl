uniform sampler2D uTexture;
uniform vec2      uResolution;
uniform vec2      uMouse;
uniform vec2      uVelocity;
uniform float     uStrength;
uniform float     uRadius;

varying vec2 vUv;

void main() {
  vec2 uv      = vUv;
  float aspect = uResolution.x / uResolution.y;

  vec2 diff  = uv - uMouse;
  diff.x    *= aspect;
  float dist = length(diff);

  float blob = smoothstep(uRadius, 0.0, dist);
  blob = pow(blob, 1.8);

  vec2 velDir    = normalize(uVelocity + 0.00001);
  float dispAmt  = blob * uStrength * 0.07;
  vec2 displaced = uv + velDir * dispAmt;

  float aberr = blob * uStrength * 0.038;
  vec4 colR = texture2D(uTexture, displaced + velDir * aberr * 2.0);
  vec4 colG = texture2D(uTexture, displaced);
  vec4 colB = texture2D(uTexture, displaced - velDir * aberr * 1.8);
  vec4 colorAber = vec4(colR.r, colG.g, colB.b, colG.a);

  vec4 colorClean = texture2D(uTexture, uv);

  // Discard fully transparent pixels — keep PNG cutout clean
  if (colorClean.a < 0.05) discard;

  float luma       = dot(colorClean.rgb, vec3(0.299, 0.587, 0.114));
  float lumaBright = clamp(luma * 1.5 + 0.22, 0.0, 1.0);
  vec4 gray        = vec4(vec3(lumaBright), colorClean.a);

  float colorReveal = pow(blob, 0.6) * uStrength;
  vec3 finalRgb = mix(gray.rgb, colorAber.rgb, colorReveal);
  gl_FragColor = vec4(finalRgb, colorClean.a);
}
