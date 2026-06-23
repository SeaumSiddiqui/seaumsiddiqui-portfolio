import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Lenis } from "../_libs/lenis.mjs";
import { g as gsapWithCSS, S as ScrollTrigger } from "../_libs/gsap.mjs";
import { d as useRouterState } from "../_libs/tanstack__react-router.mjs";
import { W as WebGLRenderer, S as SRGBColorSpace, a as Scene, O as OrthographicCamera, P as PlaneGeometry, b as ShaderMaterial, V as Vector2, M as Mesh, T as TextureLoader } from "../_libs/three.mjs";
import { c as createClient } from "../_libs/sanity__client.mjs";
import { c as createImageUrlBuilder } from "../_libs/sanity__image-url.mjs";
gsapWithCSS.registerPlugin(ScrollTrigger);
let lenisInstance = null;
function getLenis() {
  return lenisInstance;
}
function useLenis() {
  const ref = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const lenis = new Lenis({
      duration: 2.4,
      smoothWheel: true
    });
    lenisInstance = lenis;
    ref.current = lenis;
    ScrollTrigger.scrollerProxy(document.documentElement, {
      scrollTop(value) {
        if (arguments.length && value !== void 0) {
          lenis.scrollTo(value, { immediate: true });
        }
        return lenis.scroll;
      },
      getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },
      pinType: document.documentElement.style.transform ? "transform" : "fixed"
    });
    const tick = (time) => lenis.raf(time * 1e3);
    gsapWithCSS.ticker.add(tick);
    gsapWithCSS.ticker.lagSmoothing(0);
    return () => {
      gsapWithCSS.ticker.remove(tick);
      ScrollTrigger.clearScrollMemory();
      ScrollTrigger.scrollerProxy(document.documentElement, void 0);
      lenis.destroy();
      lenisInstance = null;
      ref.current = null;
    };
  }, []);
  return ref;
}
const portraitImg = "/assets/portrait-voMbykUa.png";
const vertexShader = "varying vec2 vUv;\nvoid main() {\n  vUv = uv;\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}\n";
const fragmentShader = "uniform sampler2D uTexture;\nuniform vec2      uResolution;\nuniform vec2      uMouse;\nuniform vec2      uVelocity;\nuniform float     uStrength;\nuniform float     uRadius;\n\nvarying vec2 vUv;\n\nvoid main() {\n  vec2 uv      = vUv;\n  float aspect = uResolution.x / uResolution.y;\n\n  vec2 diff  = uv - uMouse;\n  diff.x    *= aspect;\n  float dist = length(diff);\n\n  float blob = smoothstep(uRadius, 0.0, dist);\n  blob = pow(blob, 1.8);\n\n  vec2 velDir    = normalize(uVelocity + 0.00001);\n  float dispAmt  = blob * uStrength * 0.07;\n  vec2 displaced = uv + velDir * dispAmt;\n\n  vec4 colorClean     = texture2D(uTexture, uv);\n  vec4 colorDisplaced = texture2D(uTexture, displaced);\n\n  if (colorClean.a < 0.05) discard;\n\n  float reveal  = pow(blob, 2.0) * uStrength * step(0.1, blob);\n  vec3 finalRgb = mix(colorClean.rgb, colorDisplaced.rgb, clamp(reveal, 0.0, 1.0));\n\n  // Correct for double gamma — bring brightness back to match original\n  finalRgb = pow(finalRgb, vec3(1.0 / 1.8));\n\n  gl_FragColor = vec4(finalRgb, colorClean.a);\n}";
function PortraitCanvas({ src, alt, className }) {
  const containerRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const renderer = new WebGLRenderer({
      alpha: true,
      antialias: true,
      premultipliedAlpha: false,
      preserveDrawingBuffer: true
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0, 0);
    renderer.outputColorSpace = SRGBColorSpace;
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
        uRadius: { value: 0.3 }
      }
    });
    const mesh = new Mesh(geometry, material);
    scene.add(mesh);
    const loader = new TextureLoader();
    let texture = null;
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
    const vel = { x: 0, y: 0 };
    let strength = 0;
    const onMove = (e) => {
      const r = container.getBoundingClientRect();
      mouse.x = (e.clientX - r.left) / r.width;
      mouse.y = 1 - (e.clientY - r.top) / r.height;
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
      strength += (Math.min(mag * 90, 1) - strength) * 0.06;
      strength *= 0.97;
      material.uniforms.uMouse.value.set(smooth.x, smooth.y);
      material.uniforms.uVelocity.value.set(vel.x, vel.y);
      material.uniforms.uStrength.value = strength;
      renderer.render(scene, camera);
    };
    gsapWithCSS.ticker.add(tick);
    return () => {
      gsapWithCSS.ticker.remove(tick);
      ro.disconnect();
      container.removeEventListener("pointermove", onMove);
      geometry.dispose();
      material.dispose();
      texture?.dispose();
      renderer.dispose();
      if (canvas.parentNode === container) container.removeChild(canvas);
    };
  }, [src, alt]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: containerRef, className, style: { width: "100%", height: "100%" } });
}
const dataset = "production";
const projectId = "ceip4qtp";
const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion: "2024-01-01",
  useCdn: false
});
const builder = createImageUrlBuilder(sanityClient);
const urlFor = (source) => builder.image(source);
function useSanityQuery(query) {
  const [data, setData] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(true);
  const [error, setError] = reactExports.useState(null);
  reactExports.useEffect(() => {
    sanityClient.fetch(query).then(setData).catch(setError).finally(() => setLoading(false));
  }, [query]);
  return { data, loading, error };
}
const NAV_QUERY = `
  *[_type == "navigation"][0] {
    brandName,
    logo { asset->{ url } },
    copyright,
    navLinks[] { label, href, external },
    socialLinks[] { label, href },
    availabilityText,
    availabilitySub
  }
`;
const HERO_QUERY = `
  *[_type == "hero"][0] {
    name,
    roles,
    location,
    portrait,
    copyright
  }
`;
const NAV_FALLBACK = {
  brandName: "SEAUM SIDDIQUI",
  logo: null,
  copyright: "2026",
  navLinks: [
    { label: "ABOUT", href: "/#about", external: false },
    { label: "WORK", href: "/#projects", external: false },
    { label: "ARCHIVE", href: "/#archive-list", external: false }
  ],
  socialLinks: [
    { label: "LINKEDIN", href: "https://linkedin.com" },
    { label: "GITHUB", href: "https://github.com" },
    { label: "LEETCODE", href: "https://instagram.com" }
  ],
  availabilityText: "Available for work",
  availabilitySub: "Open to full-time & freelance"
};
function useNavigation() {
  const { data, loading } = useSanityQuery(NAV_QUERY);
  const mappedNavLinks = (data?.navLinks ?? NAV_FALLBACK.navLinks).map((link) => {
    if (link.href === "/archive") {
      return { ...link, href: "/#archive-list" };
    }
    return link;
  });
  return {
    loading,
    nav: {
      brandName: data?.brandName ?? NAV_FALLBACK.brandName,
      logo: data?.logo ?? NAV_FALLBACK.logo,
      copyright: data?.copyright ?? NAV_FALLBACK.copyright,
      navLinks: mappedNavLinks,
      socialLinks: data?.socialLinks ?? NAV_FALLBACK.socialLinks,
      availabilityText: data?.availabilityText ?? NAV_FALLBACK.availabilityText,
      availabilitySub: data?.availabilitySub ?? NAV_FALLBACK.availabilitySub
    }
  };
}
const hero$1 = "_hero_bk9yr_5";
const hero__primaryRole = "_hero__primaryRole_bk9yr_17";
const hero__body = "_hero__body_bk9yr_42";
const hero__parentBox = "_hero__parentBox_bk9yr_56";
const hero__portrait = "_hero__portrait_bk9yr_69";
const hero__roles = "_hero__roles_bk9yr_82";
const hero__role = "_hero__role_bk9yr_82";
const hero__location = "_hero__location_bk9yr_109";
const hero__locationLabel = "_hero__locationLabel_bk9yr_121";
const styles$5 = {
  hero: hero$1,
  hero__primaryRole,
  hero__body,
  hero__parentBox,
  hero__portrait,
  hero__roles,
  hero__role,
  hero__location,
  hero__locationLabel
};
const navbar = "_navbar_ehsd8_1";
const navbar__logo = "_navbar__logo_ehsd8_23";
const navbar__right = "_navbar__right_ehsd8_49";
const navbar__copyright = "_navbar__copyright_ehsd8_55";
const navbar__links = "_navbar__links_ehsd8_64";
const navbar__col = "_navbar__col_ehsd8_69";
const navbar__link = "_navbar__link_ehsd8_64";
const styles$4 = {
  navbar,
  navbar__logo,
  navbar__right,
  navbar__copyright,
  navbar__links,
  navbar__col,
  navbar__link
};
function Navbar({ position = "absolute" }) {
  const { nav, loading } = useNavigation();
  const handleNavClick = (e, href) => {
    if (!href.startsWith("/#")) return;
    e.preventDefault();
    const id = href.replace("/#", "");
    const target = document.querySelector(`[data-section="${id}"]`);
    if (!target) return;
    const lenis = getLenis();
    if (lenis) {
      lenis.scrollTo(target, { offset: -150, duration: 2 });
    } else {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };
  if (loading) return /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: styles$4.navbar, "data-position": position });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: styles$4.navbar, "data-position": position, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/", className: styles$4.navbar__logo, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles$4.navbar__brand, children: nav.brandName }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$4.navbar__right, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: styles$4.navbar__copyright, children: [
        "© ",
        nav.copyright
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: styles$4.navbar__links, "aria-label": "Primary", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$4.navbar__col, children: nav.navLinks.map((link) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            className: styles$4.navbar__link,
            href: link.href,
            onClick: (e) => handleNavClick(e, link.href),
            ...link.external ? { target: "_blank", rel: "noreferrer" } : {},
            children: link.label
          },
          link.label
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$4.navbar__col, children: nav.socialLinks.map((link) => /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: styles$4.navbar__link, href: link.href, target: "_blank", rel: "noreferrer", children: link.label }, link.label)) })
      ] })
    ] })
  ] });
}
const FALLBACK_ROLES = ["BACKEND ENGINEER", "JAVA, SPRING BOOT", "MICROSERVICES ARCHITECT"];
const FALLBACK_LOCATION = "Dhaka, Bangladesh";
function formatLocation(loc) {
  const parts = loc.split(",").map((s) => s.trim());
  const city = parts[0] ?? "";
  const country = parts[1] ?? "";
  return {
    line1: `Based in ${city},`,
    line2: country
  };
}
function HeroSection() {
  useNavigation();
  const { data, loading } = useSanityQuery(HERO_QUERY);
  const roleRef = reactExports.useRef(null);
  const roles = data?.roles ?? FALLBACK_ROLES;
  const location = data?.location ?? FALLBACK_LOCATION;
  const loc = formatLocation(location);
  const primaryRole = roles[0] ?? "";
  const secondaryRoles = roles.slice(1);
  const portraitSrc = data?.portrait ? urlFor(data.portrait).width(840).url() : portraitImg;
  reactExports.useEffect(() => {
    const el = roleRef.current;
    if (!el || !primaryRole) return;
    const fit = () => {
      const available = el.getBoundingClientRect().width;
      el.style.fontSize = "100px";
      el.style.width = "max-content";
      const naturalWidth = el.getBoundingClientRect().width;
      el.style.width = "";
      el.style.fontSize = `${available / naturalWidth * 100}px`;
      el.style.opacity = "1";
    };
    const rafId = requestAnimationFrame(fit);
    window.addEventListener("resize", fit);
    document.fonts.ready.then(fit);
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", fit);
    };
  }, [primaryRole]);
  if (loading) return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: styles$5.hero, "data-section": "hero", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, { position: "absolute" }) });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: styles$5.hero, "data-section": "hero", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, { position: "absolute" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: roleRef, className: styles$5.hero__primaryRole, children: primaryRole }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$5.hero__location, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: styles$5.hero__locationLabel, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: loc.line1 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: loc.line2 })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$5.hero__body, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$5.hero__parentBox, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$5.hero__roles, children: secondaryRoles.map((role) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: styles$5.hero__role, children: [
        "./ ",
        role
      ] }, role)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$5.hero__portrait, children: /* @__PURE__ */ jsxRuntimeExports.jsx(PortraitCanvas, { src: portraitSrc }) })
    ] }) })
  ] });
}
const overlay$1 = "_overlay_lshbv_6";
const panelLeft = "_panelLeft_lshbv_14";
const panelRight = "_panelRight_lshbv_25";
const panelTop = "_panelTop_lshbv_37";
const panelBottom = "_panelBottom_lshbv_47";
const text = "_text_lshbv_58";
const contentWrapper = "_contentWrapper_lshbv_74";
const textEmail = "_textEmail_lshbv_87";
const socials = "_socials_lshbv_98";
const closingStyles = {
  overlay: overlay$1,
  panelLeft,
  panelRight,
  panelTop,
  panelBottom,
  text,
  contentWrapper,
  textEmail,
  socials
};
gsapWithCSS.registerPlugin(ScrollTrigger);
function HomePage() {
  const containerRef = reactExports.useRef(null);
  const panelLeftRef = reactExports.useRef(null);
  const panelRightRef = reactExports.useRef(null);
  const panelTopRef = reactExports.useRef(null);
  const panelBottomRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const closingDist = window.innerHeight * 1.5;
    const ctx = gsapWithCSS.context(() => {
      const tl = gsapWithCSS.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: `+=${closingDist}`,
          scrub: true,
          pin: true
        }
      });
      tl.to(panelLeftRef.current, {
        width: "50%",
        duration: closingDist,
        ease: "power1.inOut"
      }, 0);
      tl.to(panelRightRef.current, {
        width: "50%",
        duration: closingDist,
        ease: "power1.inOut"
      }, 0);
      tl.to(panelTopRef.current, {
        height: "50%",
        duration: closingDist * 0.9,
        ease: "power1.in"
      }, closingDist * 0.1);
      tl.to(panelBottomRef.current, {
        height: "50%",
        duration: closingDist * 0.9,
        ease: "power1.in"
      }, closingDist * 0.1);
    }, container);
    return () => ctx.revert();
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { style: { position: "relative" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(HeroSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: containerRef, style: { height: "100vh", position: "relative", width: "100vw", overflow: "hidden", zIndex: 3 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: closingStyles.overlay, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: panelLeftRef, className: closingStyles.panelLeft, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: closingStyles.text, children: "Connect" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: panelRightRef, className: closingStyles.panelRight, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: closingStyles.contentWrapper, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: closingStyles.textEmail, children: "seaumsiddiqui@outlook.com" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: closingStyles.socials, children: "LinkedIn • GitHub • LeetCode • Twitter" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: panelTopRef, className: closingStyles.panelTop }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: panelBottomRef, className: closingStyles.panelBottom })
    ] }) })
  ] });
}
function AboutPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("main", {});
}
function ContactPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("main", {});
}
const page = "_page_hs60s_1";
const hero = "_hero_hs60s_12";
const hero__title = "_hero__title_hs60s_20";
const manifest = "_manifest_hs60s_32";
const manifest__label = "_manifest__label_hs60s_38";
const manifest__tags = "_manifest__tags_hs60s_48";
const tag = "_tag_hs60s_54";
const visitLink = "_visitLink_hs60s_66";
const narrative = "_narrative_hs60s_88";
const narrative__notch = "_narrative__notch_hs60s_95";
const narrative__content = "_narrative__content_hs60s_105";
const sectionTitle = "_sectionTitle_hs60s_109";
const narrative__text = "_narrative__text_hs60s_120";
const engineering = "_engineering_hs60s_131";
const separator = "_separator_hs60s_135";
const sectionHeader = "_sectionHeader_hs60s_142";
const sectionHeader__title = "_sectionHeader__title_hs60s_148";
const sectionHeader__meta = "_sectionHeader__meta_hs60s_148";
const grid2x2 = "_grid2x2_hs60s_158";
const card = "_card_hs60s_165";
const card__index = "_card__index_hs60s_173";
const card__title = "_card__title_hs60s_183";
const card__text = "_card__text_hs60s_194";
const visuals = "_visuals_hs60s_205";
const grid4x1 = "_grid4x1_hs60s_209";
const plate = "_plate_hs60s_215";
const plate__imageWrap = "_plate__imageWrap_hs60s_221";
const plate__placeholder = "_plate__placeholder_hs60s_231";
const plate__badge = "_plate__badge_hs60s_242";
const plate__overlayText = "_plate__overlayText_hs60s_258";
const plate__caption = "_plate__caption_hs60s_270";
const styles$3 = {
  page,
  hero,
  hero__title,
  manifest,
  manifest__label,
  manifest__tags,
  tag,
  visitLink,
  narrative,
  narrative__notch,
  narrative__content,
  sectionTitle,
  narrative__text,
  engineering,
  separator,
  sectionHeader,
  sectionHeader__title,
  sectionHeader__meta,
  grid2x2,
  card,
  card__index,
  card__title,
  card__text,
  visuals,
  grid4x1,
  plate,
  plate__imageWrap,
  plate__placeholder,
  plate__badge,
  plate__overlayText,
  plate__caption
};
function ProjectPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: styles$3.page, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: styles$3.hero, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: styles$3.hero__title, children: "EVER BLOOM BANGLADESH" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$3.manifest, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles$3.manifest__label, children: "TECHNICAL MANIFEST" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$3.manifest__tags, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles$3.tag, children: "> SPRING BOOT" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles$3.tag, children: "> JAVA 21" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles$3.tag, children: "> MYSQL" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles$3.tag, children: "> KEYCLOAK" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles$3.tag, children: "> AWS S3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles$3.tag, children: "> DOCKER" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles$3.tag, children: "> REACT" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles$3.tag, children: "> TYPESCRIPT" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: styles$3.visitLink, children: "VISIT LIVE SITE ↗" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("hr", { className: styles$3.separator }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: styles$3.narrative, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$3.narrative__notch }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$3.narrative__content, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: styles$3.sectionTitle, children: "SYSTEM NARRATIVE" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: styles$3.narrative__text, children: "Built and deployed for a charitable organization to replace manual, paper-driven workflows across four beneficiary programs. Field agents use the app to collect, verify, and submit applicant data on behalf of rural citizens with limited digital access. The architecture prioritizes offline-first data collection and secure, role-based synchronization upon network availability, ensuring integrity in low-connectivity environments." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: styles$3.engineering, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$3.sectionHeader, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles$3.sectionHeader__title, children: "ENGINEERING DECISIONS" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("hr", { className: styles$3.separator }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$3.grid2x2, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: styles$3.card, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles$3.card__index, children: "01" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: styles$3.card__title, children: "AUTH ARCHITECTURE" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: styles$3.card__text, children: "Keycloak + JWT auth implemented across three distinct role tiers: Field Agents, Authenticators, and Admins. This separation of concerns ensures strict data governance, where field agents can only submit, authenticators can only verify, and admins maintain system-wide visibility." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: styles$3.card, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles$3.card__index, children: "02" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: styles$3.card__title, children: "DATA QUERYING" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: styles$3.card__text, children: "Engineered multi-field dynamic filtering utilizing JPA Specification. This allows for complex, ad-hoc queries from the administrative dashboard with built-in pagination, crucial for handling tens of thousands of beneficiary records efficiently. Included robust Excel/CSV export pipelines." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: styles$3.card, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles$3.card__index, children: "03" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: styles$3.card__title, children: "STORAGE STRATEGY" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: styles$3.card__text, children: "Compliance documents (IDs, land deeds) are streamed directly to AWS S3, bypassing the application server's local storage entirely. Only metadata URLs are stored in the MySQL relational database, drastically reducing database bloat and backup complexity." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: styles$3.card, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles$3.card__index, children: "04" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: styles$3.card__title, children: "DEPLOYMENT PIPELINE" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: styles$3.card__text, children: "The entire stack is containerized using Docker and deployed on a bare VPS. A custom CI/CD pipeline automates testing and deployment phases, ensuring zero-downtime updates and reliable rollbacks if necessary in the production environment." })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: styles$3.visuals, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$3.sectionHeader, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles$3.sectionHeader__title, children: "VISUAL EVIDENCE" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles$3.sectionHeader__meta, children: "SYS.VIZ.01-04" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("hr", { className: styles$3.separator }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$3.grid4x1, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$3.plate, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$3.plate__imageWrap, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$3.plate__placeholder, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles$3.plate__badge, children: "PLATE 01 // HIERARCHY" }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: styles$3.plate__caption, children: "STRUCTURAL MAPPING OF BENEFICIARY DATA FLOW ACROSS REGIONAL NODES." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$3.plate, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$3.plate__imageWrap, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$3.plate__placeholder, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles$3.plate__badge, children: "PLATE 02 // DATA_SCHEMA" }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: styles$3.plate__caption, children: "RELATIONAL INTEGRITY CONSTRAINTS FOR MULTI-TENANT PROGRAM ISOLATION." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$3.plate, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$3.plate__imageWrap, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$3.plate__placeholder, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles$3.plate__badge, children: "PLATE 03 // INTERFACE" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$3.plate__overlayText, children: "ADMIN CONSOLE [RESTRICTED]" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: styles$3.plate__caption, children: "COMMAND-LINE INTERFACE FOR SYSTEM-WIDE AUDIT LOG EXTRACTION." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$3.plate, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$3.plate__imageWrap, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$3.plate__placeholder, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles$3.plate__badge, children: "PLATE 04 // DATA_DASHBOARD" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$3.plate__overlayText, children: "TELEMETRY [ACTIVE]" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: styles$3.plate__caption, children: "REAL-TIME TELEMETRY AND KPI TRACKING FOR BENEFICIARY ENROLLMENT STATUS." })
        ] })
      ] })
    ] })
  ] });
}
const blob = "_blob_19d19_1";
const styles$2 = {
  blob
};
function CursorBlob() {
  const blobRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const el = blobRef.current;
    if (!el) return;
    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const smooth = { x: pos.x, y: pos.y };
    let overCanvas = false;
    let overTab = false;
    const getPortrait = () => document.querySelector('canvas[data-cursor-exclusion="true"]');
    const enterPortrait = () => {
      overCanvas = true;
      gsapWithCSS.to(el, { width: 120, height: 120, opacity: 0, duration: 0.45, ease: "power2.inOut" });
    };
    const leavePortrait = () => {
      overCanvas = false;
      gsapWithCSS.to(el, { width: 10, height: 10, opacity: 0.9, duration: 0.45, ease: "power2.inOut" });
    };
    const onMove = (e) => {
      pos.x = e.clientX;
      pos.y = e.clientY;
      const topEl = document.elementFromPoint(e.clientX, e.clientY);
      const exclusion = topEl?.closest('[data-cursor-exclusion="true"]');
      const isNonCanvas = exclusion && exclusion.tagName !== "CANVAS";
      if (isNonCanvas && !overTab) {
        overTab = true;
        gsapWithCSS.to(el, { scale: 0, duration: 0.3, ease: "power2.inOut" });
        return;
      }
      if (!isNonCanvas && overTab) {
        overTab = false;
        gsapWithCSS.to(el, { scale: 1, duration: 0.3, ease: "power2.inOut" });
      }
      if (overTab) return;
      const portrait = getPortrait();
      if (!portrait) {
        if (overCanvas) leavePortrait();
        return;
      }
      const rect = portrait.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      if (x < 0 || y < 0 || x > rect.width || y > rect.height) {
        if (overCanvas) leavePortrait();
        return;
      }
      const gl = portrait.getContext("webgl2") || portrait.getContext("webgl");
      if (!gl) return;
      const px = Math.floor(x / rect.width * gl.drawingBufferWidth);
      const py = Math.floor((rect.height - y) / rect.height * gl.drawingBufferHeight);
      const pixel = new Uint8Array(4);
      try {
        gl.readPixels(px, py, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, pixel);
      } catch {
        return;
      }
      const isOverPixel = pixel[3] > 10;
      if (isOverPixel && !overCanvas) enterPortrait();
      else if (!isOverPixel && overCanvas) leavePortrait();
    };
    window.addEventListener("mousemove", onMove);
    const tick = () => {
      smooth.x += (pos.x - smooth.x) * 0.08;
      smooth.y += (pos.y - smooth.y) * 0.08;
      const size = el.offsetWidth || 10;
      gsapWithCSS.set(el, { x: smooth.x - size / 2, y: smooth.y - size / 2 });
    };
    gsapWithCSS.ticker.add(tick);
    const interactiveEnter = (e) => {
      if (e.currentTarget.closest('[data-cursor-exclusion="true"]')) return;
      gsapWithCSS.to(el, { width: 36, height: 36, opacity: 1, duration: 0.25, ease: "power2.out" });
    };
    const interactiveLeave = () => {
      if (overCanvas || overTab) return;
      gsapWithCSS.to(el, { width: 10, height: 10, opacity: 0.9, duration: 0.25, ease: "power2.out" });
    };
    const attached = [];
    const attach = () => {
      document.querySelectorAll("a, button").forEach((node) => {
        if (attached.includes(node)) return;
        if (node.closest('[data-cursor-exclusion="true"]')) return;
        node.addEventListener("mouseenter", interactiveEnter);
        node.addEventListener("mouseleave", interactiveLeave);
        attached.push(node);
      });
    };
    attach();
    const mo = new MutationObserver(() => attach());
    mo.observe(document.body, { childList: true, subtree: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      gsapWithCSS.ticker.remove(tick);
      mo.disconnect();
      attached.forEach((node) => {
        node.removeEventListener("mouseenter", interactiveEnter);
        node.removeEventListener("mouseleave", interactiveLeave);
      });
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: blobRef, className: styles$2.blob, "aria-hidden": "true" });
}
const tab = "_tab_m92mb_1";
const visible = "_visible_m92mb_21";
const tab__inner = "_tab__inner_m92mb_26";
const tab__letterWrap = "_tab__letterWrap_m92mb_33";
const tab__dot = "_tab__dot_m92mb_38";
const tab__letter = "_tab__letter_m92mb_33";
const tab__label = "_tab__label_m92mb_76";
const styles$1 = {
  tab,
  visible,
  tab__inner,
  tab__letterWrap,
  tab__dot,
  tab__letter,
  tab__label
};
function SideNavTab({ onClick, visible: visible2 }) {
  const tabRef = reactExports.useRef(null);
  const enter = () => {
    gsapWithCSS.to(tabRef.current, {
      backgroundColor: "var(--cursor-color)",
      duration: 0.45,
      ease: "power2.out"
    });
  };
  const leave = () => {
    gsapWithCSS.to(tabRef.current, {
      backgroundColor: "var(--color-400)",
      duration: 0.45,
      ease: "power2.inOut"
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      ref: tabRef,
      className: `${styles$1.tab} ${visible2 ? styles$1.visible : ""}`,
      onMouseEnter: enter,
      onMouseLeave: leave,
      onClick,
      "data-cursor-exclusion": "true",
      "aria-label": "Open navigation",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$1.tab__inner, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$1.tab__letterWrap, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles$1.tab__letter, children: "M" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles$1.tab__dot, "aria-hidden": "true" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles$1.tab__label, children: "Menu" })
      ] })
    }
  );
}
const overlay = "_overlay_2aciq_1";
const panel = "_panel_2aciq_10";
const panel__close = "_panel__close_2aciq_25";
const panel__content = "_panel__content_2aciq_38";
const panel__section = "_panel__section_2aciq_45";
const panel__sectionHeader = "_panel__sectionHeader_2aciq_51";
const panel__dot = "_panel__dot_2aciq_57";
const panel__sectionLabel = "_panel__sectionLabel_2aciq_76";
const panel__nav = "_panel__nav_2aciq_85";
const panel__navLink = "_panel__navLink_2aciq_91";
const panel__links = "_panel__links_2aciq_106";
const panel__link = "_panel__link_2aciq_106";
const panel__availability = "_panel__availability_2aciq_126";
const panel__availText = "_panel__availText_2aciq_133";
const panel__availSub = "_panel__availSub_2aciq_140";
const styles = {
  overlay,
  panel,
  panel__close,
  panel__content,
  panel__section,
  panel__sectionHeader,
  panel__dot,
  panel__sectionLabel,
  panel__nav,
  panel__navLink,
  panel__links,
  panel__link,
  panel__availability,
  panel__availText,
  panel__availSub
};
function SideNavPanel({ open, onClose }) {
  const panelRef = reactExports.useRef(null);
  const overlayRef = reactExports.useRef(null);
  const { nav } = useNavigation();
  const handleNavClick = (e, href) => {
    if (!href.startsWith("/#")) {
      onClose();
      return;
    }
    e.preventDefault();
    onClose();
    const id = href.replace("/#", "");
    const target = document.querySelector(`[data-section="${id}"]`);
    if (!target) return;
    const lenis = getLenis();
    if (lenis) {
      lenis.scrollTo(target, { offset: 10, duration: 2 });
    } else {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };
  reactExports.useEffect(() => {
    const panel2 = panelRef.current;
    const overlay2 = overlayRef.current;
    if (!panel2 || !overlay2) return;
    if (open) {
      gsapWithCSS.to(overlay2, { opacity: 1, pointerEvents: "all", duration: 0.3 });
      gsapWithCSS.fromTo(panel2, { x: "100%" }, { x: "0%", duration: 0.55, ease: "power3.inOut" });
    } else {
      gsapWithCSS.to(overlay2, { opacity: 0, pointerEvents: "none", duration: 0.3 });
      gsapWithCSS.to(panel2, { x: "100%", duration: 0.45, ease: "power3.in" });
    }
  }, [open]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: overlayRef, className: styles.overlay, onClick: onClose }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: panelRef, className: styles.panel, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: styles.panel__close, onClick: onClose, "aria-label": "Close", children: "✕" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.panel__content, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.panel__section, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.panel__sectionHeader, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles.panel__dot }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles.panel__sectionLabel, children: "Navigate" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: styles.panel__nav, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/", className: styles.panel__navLink, onClick: onClose, children: "Home" }),
            nav.navLinks.map((link) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: link.href,
                className: styles.panel__navLink,
                onClick: (e) => handleNavClick(e, link.href),
                ...link.external ? { target: "_blank", rel: "noreferrer" } : {},
                children: link.label
              },
              link.label
            ))
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.panel__section, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.panel__sectionHeader, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles.panel__dot }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles.panel__sectionLabel, children: "Connect" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles.panel__links, children: nav.socialLinks.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: l.href,
              className: styles.panel__link,
              target: "_blank",
              rel: "noreferrer",
              children: l.label
            },
            l.label
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.panel__availability, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles.panel__availText, children: nav.availabilityText }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles.panel__availSub, children: nav.availabilitySub })
        ] })
      ] })
    ] })
  ] });
}
function SideNav({ triggerSection = "about" }) {
  const [visible2, setVisible] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const timer = setTimeout(() => {
      const section = document.querySelector(`[data-section='${triggerSection}']`);
      if (!section) return;
      const st = ScrollTrigger.create({
        trigger: section,
        start: "top center",
        onEnter: () => setVisible(true),
        onLeaveBack: () => setVisible(false)
      });
      return () => st.kill();
    }, 500);
    return () => clearTimeout(timer);
  }, [triggerSection]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SideNavTab, { visible: visible2, onClick: () => setOpen(true) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SideNavPanel, { open, onClose: () => setOpen(false) })
  ] });
}
function LenisProvider({ children }) {
  useLenis();
  reactExports.useEffect(() => {
    const handleImageLoad = (e) => {
      const img = e.target;
      if (img.tagName === "IMG") img.classList.add("loaded");
    };
    document.addEventListener("load", handleImageLoad, true);
    return () => document.removeEventListener("load", handleImageLoad, true);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children });
}
function PageRouter() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  if (pathname.startsWith("/project")) return /* @__PURE__ */ jsxRuntimeExports.jsx(ProjectPage, {});
  if (pathname.startsWith("/about")) return /* @__PURE__ */ jsxRuntimeExports.jsx(AboutPage, {});
  if (pathname.startsWith("/contact")) return /* @__PURE__ */ jsxRuntimeExports.jsx(ContactPage, {});
  return /* @__PURE__ */ jsxRuntimeExports.jsx(HomePage, {});
}
function SideNavRouter() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const triggerMap = {
    "/": "work"
    // first section after hero on HomePage
  };
  const trigger = triggerMap[pathname];
  if (!trigger) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(SideNav, { triggerSection: trigger });
}
function App() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(LenisProvider, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CursorBlob, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SideNavRouter, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageRouter, {})
  ] });
}
export {
  App as A
};
