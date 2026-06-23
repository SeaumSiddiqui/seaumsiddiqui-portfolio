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

  vec4 colorClean     = texture2D(uTexture, uv);
  vec4 colorDisplaced = texture2D(uTexture, displaced);

  if (colorClean.a < 0.05) discard;

  float reveal  = pow(blob, 2.0) * uStrength * step(0.1, blob);
  vec3 finalRgb = mix(colorClean.rgb, colorDisplaced.rgb, clamp(reveal, 0.0, 1.0));

  // Correct for double gamma — bring brightness back to match original
  finalRgb = pow(finalRgb, vec3(1.0 / 1.8));

  gl_FragColor = vec4(finalRgb, colorClean.a);
}