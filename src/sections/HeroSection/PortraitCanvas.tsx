import { useEffect, useRef } from "react";
import {
  Mesh,
  OrthographicCamera,
  PlaneGeometry,
  Scene,
  ShaderMaterial,
  TextureLoader,
  Vector2,
  WebGLRenderer,
  SRGBColorSpace,
} from "three";
import { gsap } from "gsap";
import vertexShader from "./shaders/portrait.vert.glsl?raw";
import fragmentShader from "./shaders/portrait.frag.glsl?raw";

type Props = {
  src: string;
  alt?: string;
  className?: string;
};

export default function PortraitCanvas({ src, alt, className }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const renderer = new WebGLRenderer({
      alpha: true,
      antialias: true,
      premultipliedAlpha: false,
      preserveDrawingBuffer: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    const canvas = renderer.domElement;
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.display = "block";
    canvas.setAttribute("role", "img");
    canvas.setAttribute("data-cursor-exclusion", "true");
    if (alt) canvas.setAttribute("aria-label", alt);
    container.appendChild(canvas);

    const scene = new Scene();
    const camera = new OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const geometry = new PlaneGeometry(2, 2);
    const material = new ShaderMaterial({
      vertexShader,
      fragmentShader,
      transparent: true,
      uniforms: {
        uTexture: { value: null },
        uResolution: { value: new Vector2(1, 1) },
        uMouse: { value: new Vector2(0.5, 0.5) },
        uVelocity: { value: new Vector2(0, 0) },
        uStrength: { value: 0 },
        uRadius: { value: 0.3 },
      },
    });

    const mesh = new Mesh(geometry, material);
    scene.add(mesh);

    const loader = new TextureLoader();
    let texture: import("three").Texture | null = null;
    loader.load(src, (tex) => {
      tex.colorSpace = SRGBColorSpace;
      texture = tex;
      material.uniforms.uTexture.value = tex;
    });

    const resize = () => {
      const { clientWidth: w, clientHeight: h } = container;
      if (w === 0 || h === 0) return;
      renderer.setSize(w, h, false);
      material.uniforms.uResolution.value.set(w, h);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(container);

    const mouse = { x: 0.5, y: 0.5 };
    const prev = { x: 0.5, y: 0.5 };
    const smooth = { x: 0.5, y: 0.5 };
    const vel = { x: 0.0, y: 0.0 };
    let strength = 0.0;

    const onMove = (e: PointerEvent) => {
      const r = container.getBoundingClientRect();
      mouse.x = (e.clientX - r.left) / r.width;
      mouse.y = 1.0 - (e.clientY - r.top) / r.height;
    };
    container.addEventListener("pointermove", onMove);

    const tick = () => {
      smooth.x += (mouse.x - smooth.x) * 0.06;
      smooth.y += (mouse.y - smooth.y) * 0.06;

      vel.x = smooth.x - prev.x;
      vel.y = smooth.y - prev.y;
      prev.x = smooth.x;
      prev.y = smooth.y;

      const mag = Math.sqrt(vel.x * vel.x + vel.y * vel.y);
      strength += (Math.min(mag * 90.0, 1.0) - strength) * 0.06;
      strength *= 0.97;

      material.uniforms.uMouse.value.set(smooth.x, smooth.y);
      material.uniforms.uVelocity.value.set(vel.x, vel.y);
      material.uniforms.uStrength.value = strength;

      renderer.render(scene, camera);
    };
    gsap.ticker.add(tick);

    return () => {
      gsap.ticker.remove(tick);
      ro.disconnect();
      container.removeEventListener("pointermove", onMove);
      geometry.dispose();
      material.dispose();
      texture?.dispose();
      renderer.dispose();
      if (canvas.parentNode === container) container.removeChild(canvas);
    };
  }, [src, alt]);

  return <div ref={containerRef} className={className} style={{ width: "100%", height: "100%" }} />;
}
