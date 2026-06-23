const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/stegaEncodeSourceMap-Dlh8tYJz.js","assets/index-BRvxhV6v.js","assets/browser-DtluMbhg.js"])))=>i.map(i=>d[i]);
import{u as Q0,r as At,b as ev,a as tv,j as W,_ as Sm}from"./index-BRvxhV6v.js";function bm(i){const e=Q0({warn:i?.router===void 0}),t=i?.router||e,n=At.useRef(void 0);return ev(t.stores.__store,r=>{if(i?.select){if(i.structuralSharing??t.options.defaultStructuralSharing){const s=tv(n.current,i.select(r));return n.current=s,s}return i.select(r)}return r})}var ad="1.3.23";function Mm(i,e,t){return Math.max(i,Math.min(e,t))}function nv(i,e,t){return(1-t)*i+t*e}function iv(i,e,t,n){return nv(i,e,1-Math.exp(-t*n))}function rv(i,e){return(i%e+e)%e}var sv=class{isRunning=!1;value=0;from=0;to=0;currentTime=0;lerp;duration;easing;onUpdate;advance(i){if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=i;const t=Mm(0,this.currentTime/this.duration,1);e=t>=1;const n=e?1:this.easing(t);this.value=this.from+(this.to-this.from)*n}else this.lerp?(this.value=iv(this.value,this.to,this.lerp*60,i),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),this.onUpdate?.(this.value,e)}stop(){this.isRunning=!1}fromTo(i,e,{lerp:t,duration:n,easing:r,onStart:s,onUpdate:a}){this.from=this.value=i,this.to=e,this.lerp=t,this.duration=n,this.easing=r,this.currentTime=0,this.isRunning=!0,s?.(),this.onUpdate=a}};function av(i,e){let t;return function(...n){clearTimeout(t),t=setTimeout(()=>{t=void 0,i.apply(this,n)},e)}}var ov=class{width=0;height=0;scrollHeight=0;scrollWidth=0;debouncedResize;wrapperResizeObserver;contentResizeObserver;constructor(i,e,{autoResize:t=!0,debounce:n=250}={}){this.wrapper=i,this.content=e,t&&(this.debouncedResize=av(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}resize=()=>{this.onWrapperResize(),this.onContentResize()};onWrapperResize=()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)};onContentResize=()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)};get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},Em=class{events={};emit(i,...e){const t=this.events[i]||[];for(let n=0,r=t.length;n<r;n++)t[n]?.(...e)}on(i,e){return this.events[i]?this.events[i].push(e):this.events[i]=[e],()=>{this.events[i]=this.events[i]?.filter(t=>e!==t)}}off(i,e){this.events[i]=this.events[i]?.filter(t=>e!==t)}destroy(){this.events={}}};const lv=100/6,Cr={passive:!1};function od(i,e){return i===1?lv:i===2?e:1}var cv=class{touchStart={x:0,y:0};lastDelta={x:0,y:0};window={width:0,height:0};emitter=new Em;constructor(i,e={wheelMultiplier:1,touchMultiplier:1}){this.element=i,this.options=e,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Cr),this.element.addEventListener("touchstart",this.onTouchStart,Cr),this.element.addEventListener("touchmove",this.onTouchMove,Cr),this.element.addEventListener("touchend",this.onTouchEnd,Cr)}on(i,e){return this.emitter.on(i,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,Cr),this.element.removeEventListener("touchstart",this.onTouchStart,Cr),this.element.removeEventListener("touchmove",this.onTouchMove,Cr),this.element.removeEventListener("touchend",this.onTouchEnd,Cr)}onTouchStart=i=>{const{clientX:e,clientY:t}=i.targetTouches?i.targetTouches[0]:i;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:i})};onTouchMove=i=>{const{clientX:e,clientY:t}=i.targetTouches?i.targetTouches[0]:i,n=-(e-this.touchStart.x)*this.options.touchMultiplier,r=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:n,y:r},this.emitter.emit("scroll",{deltaX:n,deltaY:r,event:i})};onTouchEnd=i=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:i})};onWheel=i=>{let{deltaX:e,deltaY:t,deltaMode:n}=i;const r=od(n,this.window.width),s=od(n,this.window.height);e*=r,t*=s,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:i})};onWindowResize=()=>{this.window={width:window.innerWidth,height:window.innerHeight}}};const ld=i=>Math.min(1,1.001-2**(-10*i));var uv=class{_isScrolling=!1;_isStopped=!1;_isLocked=!1;_preventNextNativeScrollEvent=!1;_resetVelocityTimeout=null;_rafId=null;isTouching;time=0;userData={};lastVelocity=0;velocity=0;direction=0;options;targetScroll;animatedScroll;animate=new sv;emitter=new Em;dimensions;virtualScroll;constructor({wrapper:i=window,content:e=document.documentElement,eventsTarget:t=i,smoothWheel:n=!0,syncTouch:r=!1,syncTouchLerp:s=.075,touchInertiaExponent:a=1.7,duration:o,easing:l,lerp:c=.1,infinite:u=!1,orientation:d="vertical",gestureOrientation:h=d==="horizontal"?"both":"vertical",touchMultiplier:f=1,wheelMultiplier:m=1,autoResize:_=!0,prevent:p,virtualScroll:g,overscroll:v=!0,autoRaf:b=!1,anchors:S=!1,autoToggle:A=!1,allowNestedScroll:E=!1,__experimental__naiveDimensions:T=!1,naiveDimensions:x=T,stopInertiaOnNavigate:w=!1}={}){window.lenisVersion=ad,window.lenis||(window.lenis={}),window.lenis.version=ad,d==="horizontal"&&(window.lenis.horizontal=!0),r===!0&&(window.lenis.touch=!0),(!i||i===document.documentElement)&&(i=window),typeof o=="number"&&typeof l!="function"?l=ld:typeof l=="function"&&typeof o!="number"&&(o=1),this.options={wrapper:i,content:e,eventsTarget:t,smoothWheel:n,syncTouch:r,syncTouchLerp:s,touchInertiaExponent:a,duration:o,easing:l,lerp:c,infinite:u,gestureOrientation:h,orientation:d,touchMultiplier:f,wheelMultiplier:m,autoResize:_,prevent:p,virtualScroll:g,overscroll:v,autoRaf:b,anchors:S,autoToggle:A,allowNestedScroll:E,naiveDimensions:x,stopInertiaOnNavigate:w},this.dimensions=new ov(i,e,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new cv(t,{touchMultiplier:f,wheelMultiplier:m}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(i,e){return this.emitter.on(i,e)}off(i,e){return this.emitter.off(i,e)}onScrollEnd=i=>{i instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&i.stopPropagation()};dispatchScrollendEvent=()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))};get overflow(){const i=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[i]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}onTransitionEnd=i=>{i.propertyName?.includes("overflow")&&i.target===this.rootElement&&this.checkOverflow()};setScroll(i){this.isHorizontal?this.options.wrapper.scrollTo({left:i,behavior:"instant"}):this.options.wrapper.scrollTo({top:i,behavior:"instant"})}onClick=i=>{const e=i.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),t=new URL(window.location.href);if(this.options.anchors){const n=e.find(r=>t.host===r.host&&t.pathname===r.pathname&&r.hash);if(n){const r=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=`#${n.hash.split("#")[1]}`;this.scrollTo(s,r);return}}if(this.options.stopInertiaOnNavigate&&e.some(n=>t.host===n.host&&t.pathname!==n.pathname)){this.reset();return}};onPointerDown=i=>{i.button===1&&this.reset()};onVirtualScroll=i=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(i)===!1)return;const{deltaX:e,deltaY:t,event:n}=i;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const r=n.type.includes("touch"),s=n.type.includes("wheel");this.isTouching=n.type==="touchstart"||n.type==="touchmove";const a=e===0&&t===0;if(this.options.syncTouch&&r&&n.type==="touchstart"&&a&&!this.isStopped&&!this.isLocked){this.reset();return}const o=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(a||o)return;let l=n.composedPath();l=l.slice(0,l.indexOf(this.rootElement));const c=this.options.prevent,u=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";if(l.find(m=>m instanceof HTMLElement&&(typeof c=="function"&&c?.(m)||m.hasAttribute?.("data-lenis-prevent")||u==="vertical"&&m.hasAttribute?.("data-lenis-prevent-vertical")||u==="horizontal"&&m.hasAttribute?.("data-lenis-prevent-horizontal")||r&&m.hasAttribute?.("data-lenis-prevent-touch")||s&&m.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.hasNestedScroll(m,{deltaX:e,deltaY:t}))))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&r||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let d=t;this.options.gestureOrientation==="both"?d=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(d=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();const h=r&&this.options.syncTouch,f=r&&n.type==="touchend";f&&(d=Math.sign(d)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+d,{programmatic:!1,...h?{lerp:f?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})};resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}onNativeScroll=()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const i=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-i,this.direction=Math.sign(this.animatedScroll-i),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}};reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}raf=i=>{const e=i-(this.time||i);this.time=i,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))};scrollTo(i,{offset:e=0,immediate:t=!1,lock:n=!1,programmatic:r=!0,lerp:s=r?this.options.lerp:void 0,duration:a=r?this.options.duration:void 0,easing:o=r?this.options.easing:void 0,onStart:l,onComplete:c,force:u=!1,userData:d}={}){if((this.isStopped||this.isLocked)&&!u)return;let h=i,f=e;if(typeof h=="string"&&["top","left","start","#"].includes(h))h=0;else if(typeof h=="string"&&["bottom","right","end"].includes(h))h=this.limit;else{let m=null;if(typeof h=="string"?(m=document.querySelector(h),m||(h==="#top"?h=0:console.warn("Lenis: Target not found",h))):h instanceof HTMLElement&&h?.nodeType&&(m=h),m){if(this.options.wrapper!==window){const S=this.rootElement.getBoundingClientRect();f-=this.isHorizontal?S.left:S.top}const _=m.getBoundingClientRect(),p=getComputedStyle(m),g=this.isHorizontal?Number.parseFloat(p.scrollMarginLeft):Number.parseFloat(p.scrollMarginTop),v=getComputedStyle(this.rootElement),b=this.isHorizontal?Number.parseFloat(v.scrollPaddingLeft):Number.parseFloat(v.scrollPaddingTop);h=(this.isHorizontal?_.left:_.top)+this.animatedScroll-(Number.isNaN(g)?0:g)-(Number.isNaN(b)?0:b)}}if(typeof h=="number"){if(h+=f,this.options.infinite){if(r){this.targetScroll=this.animatedScroll=this.scroll;const m=h-this.animatedScroll;m>this.limit/2?h-=this.limit:m<-this.limit/2&&(h+=this.limit)}}else h=Mm(0,h,this.limit);if(h===this.targetScroll){l?.(this),c?.(this);return}if(this.userData=d??{},t){this.animatedScroll=this.targetScroll=h,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}r||(this.targetScroll=h),typeof a=="number"&&typeof o!="function"?o=ld:typeof o=="function"&&typeof a!="number"&&(a=1),this.animate.fromTo(this.animatedScroll,h,{duration:a,easing:o,lerp:s,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l?.(this)},onUpdate:(m,_)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=m-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=m,this.setScroll(this.scroll),r&&(this.targetScroll=m),_||this.emit(),_&&(this.reset(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(i,{deltaX:e,deltaY:t}){const n=Date.now();i._lenis||(i._lenis={});const r=i._lenis;let s,a,o,l,c,u,d,h,f,m;if(n-(r.time??0)>2e3){r.time=Date.now();const E=window.getComputedStyle(i);if(r.computedStyle=E,s=["auto","overlay","scroll"].includes(E.overflowX),a=["auto","overlay","scroll"].includes(E.overflowY),c=["auto"].includes(E.overscrollBehaviorX),u=["auto"].includes(E.overscrollBehaviorY),r.hasOverflowX=s,r.hasOverflowY=a,!(s||a))return!1;d=i.scrollWidth,h=i.scrollHeight,f=i.clientWidth,m=i.clientHeight,o=d>f,l=h>m,r.isScrollableX=o,r.isScrollableY=l,r.scrollWidth=d,r.scrollHeight=h,r.clientWidth=f,r.clientHeight=m,r.hasOverscrollBehaviorX=c,r.hasOverscrollBehaviorY=u}else o=r.isScrollableX,l=r.isScrollableY,s=r.hasOverflowX,a=r.hasOverflowY,d=r.scrollWidth,h=r.scrollHeight,f=r.clientWidth,m=r.clientHeight,c=r.hasOverscrollBehaviorX,u=r.hasOverscrollBehaviorY;if(!(s&&o||a&&l))return!1;const _=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";let p,g,v,b,S,A;if(_==="horizontal")p=Math.round(i.scrollLeft),g=d-f,v=e,b=s,S=o,A=c;else if(_==="vertical")p=Math.round(i.scrollTop),g=h-m,v=t,b=a,S=l,A=u;else return!1;return!A&&(p>=g||p<=0)?!0:(v>0?p<g:p>0)&&b&&S}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const i=this.options.wrapper;return this.isHorizontal?i.scrollX??i.scrollLeft:i.scrollY??i.scrollTop}get scroll(){return this.options.infinite?rv(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(i){this._isScrolling!==i&&(this._isScrolling=i,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(i){this._isStopped!==i&&(this._isStopped=i,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(i){this._isLocked!==i&&(this._isLocked=i,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let i="lenis";return this.options.autoToggle&&(i+=" lenis-autoToggle"),this.isStopped&&(i+=" lenis-stopped"),this.isLocked&&(i+=" lenis-locked"),this.isScrolling&&(i+=" lenis-scrolling"),this.isScrolling==="smooth"&&(i+=" lenis-smooth"),i}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(i=>{this.rootElement.classList.add(i)})}cleanUpClassName(){for(const i of Array.from(this.rootElement.classList))(i==="lenis"||i.startsWith("lenis-"))&&this.rootElement.classList.remove(i)}};function ar(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function Tm(i,e){i.prototype=Object.create(e.prototype),i.prototype.constructor=i,i.__proto__=e}var oi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ao={duration:.5,overwrite:!1,delay:0},nf,xn,Nt,vi=1e8,wt=1/vi,Fu=Math.PI*2,hv=Fu/4,fv=0,wm=Math.sqrt,dv=Math.cos,pv=Math.sin,_n=function(e){return typeof e=="string"},Ht=function(e){return typeof e=="function"},_r=function(e){return typeof e=="number"},rf=function(e){return typeof e>"u"},ji=function(e){return typeof e=="object"},Gn=function(e){return e!==!1},sf=function(){return typeof window<"u"},Ko=function(e){return Ht(e)||_n(e)},Am=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Rn=Array.isArray,mv=/random\([^)]+\)/g,_v=/,\s*/g,cd=/(?:-?\.?\d|\.)+/gi,Cm=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ca=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Oc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Rm=/[+-]=-?[.\d]+/,gv=/[^,'"\[\]\s]+/gi,vv=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Bt,Ui,Bu,af,ci={},Yl={},Pm,Dm=function(e){return(Yl=Ta(e,ci))&&jn},of=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Co=function(e,t){return!t&&console.warn(e)},Im=function(e,t){return e&&(ci[e]=t)&&Yl&&(Yl[e]=t)||ci},Ro=function(){return 0},xv={suppressEvents:!0,isStart:!0,kill:!1},Ll={suppressEvents:!0,kill:!1},yv={suppressEvents:!0},lf={},Xr=[],ku={},Lm,ti={},Fc={},ud=30,Nl=[],cf="",uf=function(e){var t=e[0],n,r;if(ji(t)||Ht(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=Nl.length;r--&&!Nl[r].targetTest(t););n=Nl[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new t_(e[r],n)))||e.splice(r,1);return e},xs=function(e){return e._gsap||uf(xi(e))[0]._gsap},Nm=function(e,t,n){return(n=e[t])&&Ht(n)?e[t]():rf(n)&&e.getAttribute&&e.getAttribute(t)||n},Wn=function(e,t){return(e=e.split(",")).forEach(t)||e},$t=function(e){return Math.round(e*1e5)/1e5||0},Ft=function(e){return Math.round(e*1e7)/1e7||0},fa=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+r:n==="-"?e-r:n==="*"?e*r:e/r},Sv=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},Kl=function(){var e=Xr.length,t=Xr.slice(0),n,r;for(ku={},Xr.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},hf=function(e){return!!(e._initted||e._startAt||e.add)},Um=function(e,t,n,r){Xr.length&&!xn&&Kl(),e.render(t,n,!!(xn&&t<0&&hf(e))),Xr.length&&!xn&&Kl()},Om=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(gv).length<2?t:_n(e)?e.trim():e},Fm=function(e){return e},ui=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},bv=function(e){return function(t,n){for(var r in n)r in t||r==="duration"&&e||r==="ease"||(t[r]=n[r])}},Ta=function(e,t){for(var n in t)e[n]=t[n];return e},hd=function i(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=ji(t[n])?i(e[n]||(e[n]={}),t[n]):t[n]);return e},Zl=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},fo=function(e){var t=e.parent||Bt,n=e.keyframes?bv(Rn(e.keyframes)):ui;if(Gn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Mv=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},Bm=function(e,t,n,r,s){var a=e[r],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=a,t.parent=t._dp=e,t},Sc=function(e,t,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},jr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},ys=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Ev=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},zu=function(e,t,n,r){return e._startAt&&(xn?e._startAt.revert(Ll):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},Tv=function i(e){return!e||e._ts&&i(e.parent)},fd=function(e){return e._repeat?wa(e._tTime,e=e.duration()+e._rDelay)*e:0},wa=function(e,t){var n=Math.floor(e=Ft(e/t));return e&&n===e?n-1:n},Jl=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},bc=function(e){return e._end=Ft(e._start+(e._tDur/Math.abs(e._ts||e._rts||wt)||0))},Mc=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Ft(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),bc(e),n._dirty||ys(n,e)),e},km=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Jl(e.rawTime(),t),(!t._dur||zo(0,t.totalDuration(),n)-t._tTime>wt)&&t.render(n,!0)),ys(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-wt}},ki=function(e,t,n,r){return t.parent&&jr(t),t._start=Ft((_r(n)?n:n||e!==Bt?pi(e,n,t):e._time)+t._delay),t._end=Ft(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Bm(e,t,"_first","_last",e._sort?"_start":0),Vu(t)||(e._recent=t),r||km(e,t),e._ts<0&&Mc(e,e._tTime),e},zm=function(e,t){return(ci.ScrollTrigger||of("scrollTrigger",t))&&ci.ScrollTrigger.create(t,e)},Vm=function(e,t,n,r,s){if(df(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!xn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Lm!==ii.frame)return Xr.push(e),e._lazy=[s,r],1},wv=function i(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||i(t))},Vu=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Av=function(e,t,n,r){var s=e.ratio,a=t<0||!t&&(!e._start&&wv(e)&&!(!e._initted&&Vu(e))||(e._ts<0||e._dp._ts<0)&&!Vu(e))?0:1,o=e._rDelay,l=0,c,u,d;if(o&&e._repeat&&(l=zo(0,e._tDur,t),u=wa(l,o),e._yoyo&&u&1&&(a=1-a),u!==wa(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||xn||r||e._zTime===wt||!t&&e._zTime){if(!e._initted&&Vm(e,t,r,n,l))return;for(d=e._zTime,e._zTime=t||(n?wt:0),n||(n=t&&!d),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&zu(e,t,n,!0),e._onUpdate&&!n&&si(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&si(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&jr(e,1),!n&&!xn&&(si(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Cv=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},Aa=function(e,t,n,r){var s=e._repeat,a=Ft(t)||0,o=e._tTime/e._tDur;return o&&!r&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:Ft(a*(s+1)+e._rDelay*s):a,o>0&&!r&&Mc(e,e._tTime=e._tDur*o),e.parent&&bc(e),n||ys(e.parent,e),e},dd=function(e){return e instanceof Hn?ys(e):Aa(e,e._dur)},Rv={_start:0,endTime:Ro,totalDuration:Ro},pi=function i(e,t,n){var r=e.labels,s=e._recent||Rv,a=e.duration()>=vi?s.endTime(!1):e._dur,o,l,c;return _n(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(t in r||(r[t]=a),r[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(Rn(n)?n[0]:n).totalDuration()),o>1?i(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},po=function(e,t,n){var r=_r(t[1]),s=(r?2:1)+(e<2?0:1),a=t[s],o,l;if(r&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Gn(l.vars.inherit)&&l.parent;a.immediateRender=Gn(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new nn(t[0],a,t[s+1])},es=function(e,t){return e||e===0?t(e):t},zo=function(e,t,n){return n<e?e:n>t?t:n},wn=function(e,t){return!_n(e)||!(t=vv.exec(e))?"":t[1]},Pv=function(e,t,n){return es(n,function(r){return zo(e,t,r)})},Hu=[].slice,Hm=function(e,t){return e&&ji(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&ji(e[0]))&&!e.nodeType&&e!==Ui},Dv=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(r){var s;return _n(r)&&!t||Hm(r,1)?(s=n).push.apply(s,xi(r)):n.push(r)})||n},xi=function(e,t,n){return Nt&&!t&&Nt.selector?Nt.selector(e):_n(e)&&!n&&(Bu||!Ca())?Hu.call((t||af).querySelectorAll(e),0):Rn(e)?Dv(e,n):Hm(e)?Hu.call(e,0):e?[e]:[]},Gu=function(e){return e=xi(e)[0]||Co("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return xi(t,n.querySelectorAll?n:n===e?Co("Invalid scope")||af.createElement("div"):e)}},Gm=function(e){return e.sort(function(){return .5-Math.random()})},Wm=function(e){if(Ht(e))return e;var t=ji(e)?e:{each:e},n=Ss(t.ease),r=t.from||0,s=parseFloat(t.base)||0,a={},o=r>0&&r<1,l=isNaN(r)||o,c=t.axis,u=r,d=r;return _n(r)?u=d={center:.5,edges:.5,end:1}[r]||0:!o&&l&&(u=r[0],d=r[1]),function(h,f,m){var _=(m||t).length,p=a[_],g,v,b,S,A,E,T,x,w;if(!p){if(w=t.grid==="auto"?0:(t.grid||[1,vi])[1],!w){for(T=-vi;T<(T=m[w++].getBoundingClientRect().left)&&w<_;);w<_&&w--}for(p=a[_]=[],g=l?Math.min(w,_)*u-.5:r%w,v=w===vi?0:l?_*d/w-.5:r/w|0,T=0,x=vi,E=0;E<_;E++)b=E%w-g,S=v-(E/w|0),p[E]=A=c?Math.abs(c==="y"?S:b):wm(b*b+S*S),A>T&&(T=A),A<x&&(x=A);r==="random"&&Gm(p),p.max=T-x,p.min=x,p.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(w>_?_-1:c?c==="y"?_/w:w:Math.max(w,_/w))||0)*(r==="edges"?-1:1),p.b=_<0?s-_:s,p.u=wn(t.amount||t.each)||0,n=n&&_<0?Wv(n):n}return _=(p[h]-p.min)/p.max||0,Ft(p.b+(n?n(_):_)*p.v)+p.u}},Wu=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var r=Ft(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(_r(n)?0:wn(n))}},Xm=function(e,t){var n=Rn(e),r,s;return!n&&ji(e)&&(r=n=e.radius||vi,e.values?(e=xi(e.values),(s=!_r(e[0]))&&(r*=r)):e=Wu(e.increment)),es(t,n?Ht(e)?function(a){return s=e(a),Math.abs(s-a)<=r?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=vi,u=0,d=e.length,h,f;d--;)s?(h=e[d].x-o,f=e[d].y-l,h=h*h+f*f):h=Math.abs(e[d]-o),h<c&&(c=h,u=d);return u=!r||c<=r?e[u]:a,s||u===a||_r(a)?u:u+wn(a)}:Wu(e))},qm=function(e,t,n,r){return es(Rn(e)?!t:n===!0?!!(n=0):!r,function(){return Rn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},Iv=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduce(function(s,a){return a(s)},r)}},Lv=function(e,t){return function(n){return e(parseFloat(n))+(t||wn(n))}},Nv=function(e,t,n){return jm(e,t,0,1,n)},$m=function(e,t,n){return es(n,function(r){return e[~~t(r)]})},Uv=function i(e,t,n){var r=t-e;return Rn(e)?$m(e,i(0,e.length),t):es(n,function(s){return(r+(s-e)%r)%r+e})},Ov=function i(e,t,n){var r=t-e,s=r*2;return Rn(e)?$m(e,i(0,e.length-1),t):es(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>r?s-a:a)})},Po=function(e){return e.replace(mv,function(t){var n=t.indexOf("[")+1,r=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(_v);return qm(n?r:+r[0],n?0:+r[1],+r[2]||1e-5)})},jm=function(e,t,n,r,s){var a=t-e,o=r-n;return es(s,function(l){return n+((l-e)/a*o||0)})},Fv=function i(e,t,n,r){var s=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!s){var a=_n(e),o={},l,c,u,d,h;if(n===!0&&(r=1)&&(n=null),a)e={p:e},t={p:t};else if(Rn(e)&&!Rn(t)){for(u=[],d=e.length,h=d-2,c=1;c<d;c++)u.push(i(e[c-1],e[c]));d--,s=function(m){m*=d;var _=Math.min(h,~~m);return u[_](m-_)},n=t}else r||(e=Ta(Rn(e)?[]:{},e));if(!u){for(l in t)ff.call(o,e,l,"get",t[l]);s=function(m){return _f(m,o)||(a?e.p:e)}}}return es(n,s)},pd=function(e,t,n){var r=e.labels,s=vi,a,o,l;for(a in r)o=r[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},si=function(e,t,n){var r=e.vars,s=r[t],a=Nt,o=e._ctx,l,c,u;if(s)return l=r[t+"Params"],c=r.callbackScope||e,n&&Xr.length&&Kl(),o&&(Nt=o),u=l?s.apply(c,l):s.call(c),Nt=a,u},eo=function(e){return jr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!xn),e.progress()<1&&si(e,"onInterrupt"),e},ua,Ym=[],Km=function(e){if(e)if(e=!e.name&&e.default||e,sf()||e.headless){var t=e.name,n=Ht(e),r=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Ro,render:_f,add:ff,kill:ex,modifier:Qv,rawVars:0},a={targetTest:0,get:0,getSetter:mf,aliases:{},register:0};if(Ca(),e!==r){if(ti[t])return;ui(r,ui(Zl(e,s),a)),Ta(r.prototype,Ta(s,Zl(e,a))),ti[r.prop=t]=r,e.targetTest&&(Nl.push(r),lf[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Im(t,r),e.register&&e.register(jn,r,Xn)}else Ym.push(e)},Tt=255,to={aqua:[0,Tt,Tt],lime:[0,Tt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Tt],navy:[0,0,128],white:[Tt,Tt,Tt],olive:[128,128,0],yellow:[Tt,Tt,0],orange:[Tt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Tt,0,0],pink:[Tt,192,203],cyan:[0,Tt,Tt],transparent:[Tt,Tt,Tt,0]},Bc=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Tt+.5|0},Zm=function(e,t,n){var r=e?_r(e)?[e>>16,e>>8&Tt,e&Tt]:0:to.black,s,a,o,l,c,u,d,h,f,m;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),to[e])r=to[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&Tt,r&Tt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&Tt,e&Tt]}else if(e.substr(0,3)==="hsl"){if(r=m=e.match(cd),!t)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,r.length>3&&(r[3]*=1),r[0]=Bc(l+1/3,s,a),r[1]=Bc(l,s,a),r[2]=Bc(l-1/3,s,a);else if(~e.indexOf("="))return r=e.match(Cm),n&&r.length<4&&(r[3]=1),r}else r=e.match(cd)||to.transparent;r=r.map(Number)}return t&&!m&&(s=r[0]/Tt,a=r[1]/Tt,o=r[2]/Tt,d=Math.max(s,a,o),h=Math.min(s,a,o),u=(d+h)/2,d===h?l=c=0:(f=d-h,c=u>.5?f/(2-d-h):f/(d+h),l=d===s?(a-o)/f+(a<o?6:0):d===a?(o-s)/f+2:(s-a)/f+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),n&&r.length<4&&(r[3]=1),r},Jm=function(e){var t=[],n=[],r=-1;return e.split(qr).forEach(function(s){var a=s.match(ca)||[];t.push.apply(t,a),n.push(r+=a.length+1)}),t.c=n,t},md=function(e,t,n){var r="",s=(e+r).match(qr),a=t?"hsla(":"rgba(",o=0,l,c,u,d;if(!s)return e;if(s=s.map(function(h){return(h=Zm(h,t,1))&&a+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=Jm(e),l=n.c,l.join(r)!==u.c.join(r)))for(c=e.replace(qr,"1").split(ca),d=c.length-1;o<d;o++)r+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(qr),d=c.length-1;o<d;o++)r+=c[o]+s[o];return r+c[d]},qr=(function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in to)i+="|"+e+"\\b";return new RegExp(i+")","gi")})(),Bv=/hsl[a]?\(/,Qm=function(e){var t=e.join(" "),n;if(qr.lastIndex=0,qr.test(t))return n=Bv.test(t),e[1]=md(e[1],n),e[0]=md(e[0],n,Jm(e[1])),!0},Do,ii=(function(){var i=Date.now,e=500,t=33,n=i(),r=n,s=1e3/240,a=s,o=[],l,c,u,d,h,f,m=function _(p){var g=i()-r,v=p===!0,b,S,A,E;if((g>e||g<0)&&(n+=g-t),r+=g,A=r-n,b=A-a,(b>0||v)&&(E=++d.frame,h=A-d.time*1e3,d.time=A=A/1e3,a+=b+(b>=s?4:s-b),S=1),v||(l=c(_)),S)for(f=0;f<o.length;f++)o[f](A,h,E,p)};return d={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(p){return h/(1e3/(p||60))},wake:function(){Pm&&(!Bu&&sf()&&(Ui=Bu=window,af=Ui.document||{},ci.gsap=jn,(Ui.gsapVersions||(Ui.gsapVersions=[])).push(jn.version),Dm(Yl||Ui.GreenSockGlobals||!Ui.gsap&&Ui||{}),Ym.forEach(Km)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=u||function(p){return setTimeout(p,a-d.time*1e3+1|0)},Do=1,m(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Do=0,c=Ro},lagSmoothing:function(p,g){e=p||1/0,t=Math.min(g||33,e)},fps:function(p){s=1e3/(p||240),a=d.time*1e3+s},add:function(p,g,v){var b=g?function(S,A,E,T){p(S,A,E,T),d.remove(b)}:p;return d.remove(p),o[v?"unshift":"push"](b),Ca(),b},remove:function(p,g){~(g=o.indexOf(p))&&o.splice(g,1)&&f>=g&&f--},_listeners:o},d})(),Ca=function(){return!Do&&ii.wake()},ft={},kv=/^[\d.\-M][\d.\-,\s]/,zv=/["']/g,Vv=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),r=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[r]=isNaN(c)?c.replace(zv,"").trim():+c,r=l.substr(o+1).trim();return t},Hv=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<n?e.indexOf(")",n+1):n)},Gv=function(e){var t=(e+"").split("("),n=ft[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Vv(t[1])]:Hv(e).split(",").map(Om)):ft._CE&&kv.test(e)?ft._CE("",e):n},Wv=function(e){return function(t){return 1-e(1-t)}},Ss=function(e,t){return e&&(Ht(e)?e:ft[e]||Gv(e))||t},Us=function(e,t,n,r){n===void 0&&(n=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:r},a;return Wn(e,function(o){ft[o]=ci[o]=s,ft[a=o.toLowerCase()]=n;for(var l in s)ft[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ft[o+"."+l]=s[l]}),s},e_=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},kc=function i(e,t,n){var r=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/Fu*(Math.asin(1/r)||0),o=function(u){return u===1?1:r*Math.pow(2,-10*u)*pv((u-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:e_(o);return s=Fu/s,l.config=function(c,u){return i(e,c,u)},l},zc=function i(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},r=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:e_(n);return r.config=function(s){return i(e,s)},r};Wn("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,e){var t=e<5?e+1:e;Us(i+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});ft.Linear.easeNone=ft.none=ft.Linear.easeIn;Us("Elastic",kc("in"),kc("out"),kc());(function(i,e){var t=1/e,n=2*t,r=2.5*t,s=function(o){return o<t?i*o*o:o<n?i*Math.pow(o-1.5/e,2)+.75:o<r?i*(o-=2.25/e)*o+.9375:i*Math.pow(o-2.625/e,2)+.984375};Us("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);Us("Expo",function(i){return Math.pow(2,10*(i-1))*i+i*i*i*i*i*i*(1-i)});Us("Circ",function(i){return-(wm(1-i*i)-1)});Us("Sine",function(i){return i===1?1:-dv(i*hv)+1});Us("Back",zc("in"),zc("out"),zc());ft.SteppedEase=ft.steps=ci.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+(t?0:1),s=t?1:0,a=1-wt;return function(o){return((r*zo(0,a,o)|0)+s)*n}}};Ao.ease=ft["quad.out"];Wn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return cf+=i+","+i+"Params,"});var t_=function(e,t){this.id=fv++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Nm,this.set=t?t.getSetter:mf},Io=(function(){function i(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Aa(this,+t.duration,1,1),this.data=t.data,Nt&&(this._ctx=Nt,Nt.data.push(this)),Do||ii.wake()}var e=i.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Aa(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,r){if(Ca(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Mc(this,n),!s._dp||s.parent||km(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&ki(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===wt||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Um(this,n,r)),this},e.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+fd(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},e.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+fd(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,r):this._repeat?wa(this._tTime,s)+1:1},e.timeScale=function(n,r){if(!arguments.length)return this._rts===-wt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Jl(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-wt?0:this._rts,this.totalTime(zo(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),bc(this),Ev(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ca(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==wt&&(this._tTime-=wt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=Ft(n);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&ki(r,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Gn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Jl(r.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=yv);var r=xn;return xn=n,hf(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),xn=r,this},e.globalTime=function(n){for(var r=this,s=arguments.length?n:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,dd(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,dd(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,r){return this.totalTime(pi(this,n),Gn(r))},e.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,Gn(r)),this._dur||(this._zTime=-wt),this},e.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},e.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-wt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-wt,this},e.isActive=function(){var n=this.parent||this._dp,r=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=r&&s<this.endTime(!0)-wt)},e.eventCallback=function(n,r,s){var a=this.vars;return arguments.length>1?(r?(a[n]=r,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=r)):delete a[n],this):a[n]},e.then=function(n){var r=this,s=r._prom;return new Promise(function(a){var o=Ht(n)?n:Fm,l=function(){var u=r.then;r.then=null,s&&s(),Ht(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=u),a(o),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){eo(this)},i})();ui(Io.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-wt,_prom:0,_ps:!1,_rts:1});var Hn=(function(i){Tm(e,i);function e(n,r){var s;return n===void 0&&(n={}),s=i.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Gn(n.sortChildren),Bt&&ki(n.parent||Bt,ar(s),r),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&zm(ar(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,a){return po(0,arguments,this),this},t.from=function(r,s,a){return po(1,arguments,this),this},t.fromTo=function(r,s,a,o){return po(2,arguments,this),this},t.set=function(r,s,a){return s.duration=0,s.parent=this,fo(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new nn(r,s,pi(this,a),1),this},t.call=function(r,s,a){return ki(this,nn.delayedCall(0,r,s),a)},t.staggerTo=function(r,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new nn(r,a,pi(this,l)),this},t.staggerFrom=function(r,s,a,o,l,c,u){return a.runBackwards=1,fo(a).immediateRender=Gn(a.immediateRender),this.staggerTo(r,s,a,o,l,c,u)},t.staggerFromTo=function(r,s,a,o,l,c,u,d){return o.startAt=a,fo(o).immediateRender=Gn(o.immediateRender),this.staggerTo(r,s,o,l,c,u,d)},t.render=function(r,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:Ft(r),d=this._zTime<0!=r<0&&(this._initted||!c),h,f,m,_,p,g,v,b,S,A,E,T;if(this!==Bt&&u>l&&r>=0&&(u=l),u!==this._tTime||a||d){if(o!==this._time&&c&&(u+=this._time-o,r+=this._time-o),h=u,S=this._start,b=this._ts,g=!b,d&&(c||(o=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(E=this._yoyo,p=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(p*100+r,s,a);if(h=Ft(u%p),u===l?(_=this._repeat,h=c):(A=Ft(u/p),_=~~A,_&&_===A&&(h=c,_--),h>c&&(h=c)),A=wa(this._tTime,p),!o&&this._tTime&&A!==_&&this._tTime-A*p-this._dur<=0&&(A=_),E&&_&1&&(h=c-h,T=1),_!==A&&!this._lock){var x=E&&A&1,w=x===(E&&_&1);if(_<A&&(x=!x),o=x?0:u%c?c:u,this._lock=1,this.render(o||(T?0:Ft(_*p)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&si(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1,A=_),o&&o!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,w&&(this._lock=2,o=x?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!g)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=Cv(this,Ft(o),Ft(h)),v&&(u-=h-(h=v._start))),this._tTime=u,this._time=h,this._act=!!b,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,o=0),!o&&u&&c&&!s&&!A&&(si(this,"onStart"),this._tTime!==u))return this;if(h>=o&&r>=0)for(f=this._first;f;){if(m=f._next,(f._act||h>=f._start)&&f._ts&&v!==f){if(f.parent!==this)return this.render(r,s,a);if(f.render(f._ts>0?(h-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(h-f._start)*f._ts,s,a),h!==this._time||!this._ts&&!g){v=0,m&&(u+=this._zTime=-wt);break}}f=m}else{f=this._last;for(var R=r<0?r:h;f;){if(m=f._prev,(f._act||R<=f._end)&&f._ts&&v!==f){if(f.parent!==this)return this.render(r,s,a);if(f.render(f._ts>0?(R-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(R-f._start)*f._ts,s,a||xn&&hf(f)),h!==this._time||!this._ts&&!g){v=0,m&&(u+=this._zTime=R?-wt:wt);break}}f=m}}if(v&&!s&&(this.pause(),v.render(h>=o?0:-wt)._zTime=h>=o?1:-1,this._ts))return this._start=S,bc(this),this.render(r,s,a);this._onUpdate&&!s&&si(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(S===this._start||Math.abs(b)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&jr(this,1),!s&&!(r<0&&!o)&&(u||o||!l)&&(si(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var a=this;if(_r(s)||(s=pi(this,s,r)),!(r instanceof Io)){if(Rn(r))return r.forEach(function(o){return a.add(o,s)}),this;if(_n(r))return this.addLabel(r,s);if(Ht(r))r=nn.delayedCall(0,r);else return this}return this!==r?ki(this,r,s):this},t.getChildren=function(r,s,a,o){r===void 0&&(r=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-vi);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof nn?s&&l.push(c):(a&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===r)return s[a]},t.remove=function(r){return _n(r)?this.removeLabel(r):Ht(r)?this.killTweensOf(r):(r.parent===this&&Sc(this,r),r===this._recent&&(this._recent=this._last),ys(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ft(ii.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),i.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=pi(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,a){var o=nn.delayedCall(0,s||Ro,a);return o.data="isPause",this._hasPause=1,ki(this,o,pi(this,r))},t.removePause=function(r){var s=this._first;for(r=pi(this,r);s;)s._start===r&&s.data==="isPause"&&jr(s),s=s._next},t.killTweensOf=function(r,s,a){for(var o=this.getTweensOf(r,a),l=o.length;l--;)Br!==o[l]&&o[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var a=[],o=xi(r),l=this._first,c=_r(s),u;l;)l instanceof nn?Sv(l._targets,o)&&(c?(!Br||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(r,s){s=s||{};var a=this,o=pi(a,r),l=s,c=l.startAt,u=l.onStart,d=l.onStartParams,h=l.immediateRender,f,m=nn.to(a,ui({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||wt,onStart:function(){if(a.pause(),!f){var p=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());m._dur!==p&&Aa(m,p,0,1).render(m._time,!0,!0),f=1}u&&u.apply(m,d||[])}},s));return h?m.render(0):m},t.tweenFromTo=function(r,s,a){return this.tweenTo(s,ui({startAt:{time:pi(this,r)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),pd(this,pi(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),pd(this,pi(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+wt)},t.shiftChildren=function(r,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(r=Ft(r);o;)o._start>=a&&(o._start+=r,o._end+=r),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=r);return ys(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return i.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),ys(this)},t.totalDuration=function(r){var s=0,a=this,o=a._last,l=vi,c,u,d;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-r:r));if(a._dirty){for(d=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,ki(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!d&&!a._dp||d&&d.smoothChildTiming)&&(a._start+=Ft(u/a._ts),a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;Aa(a,a===Bt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(r){if(Bt._ts&&(Um(Bt,Jl(r,Bt)),Lm=ii.frame),ii.frame>=ud){ud+=oi.autoSleep||120;var s=Bt._first;if((!s||!s._ts)&&oi.autoSleep&&ii._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||ii.sleep()}}},e})(Io);ui(Hn.prototype,{_lock:0,_hasPause:0,_forcing:0});var Xv=function(e,t,n,r,s,a,o){var l=new Xn(this._pt,e,t,0,1,o_,null,s),c=0,u=0,d,h,f,m,_,p,g,v;for(l.b=n,l.e=r,n+="",r+="",(g=~r.indexOf("random("))&&(r=Po(r)),a&&(v=[n,r],a(v,e,t),n=v[0],r=v[1]),h=n.match(Oc)||[];d=Oc.exec(r);)m=d[0],_=r.substring(c,d.index),f?f=(f+1)%5:_.substr(-5)==="rgba("&&(f=1),m!==h[u++]&&(p=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:p,c:m.charAt(1)==="="?fa(p,m)-p:parseFloat(m)-p,m:f&&f<4?Math.round:0},c=Oc.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=o,(Rm.test(r)||g)&&(l.e=0),this._pt=l,l},ff=function(e,t,n,r,s,a,o,l,c,u){Ht(r)&&(r=r(s||0,e,a));var d=e[t],h=n!=="get"?n:Ht(d)?c?e[t.indexOf("set")||!Ht(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():d,f=Ht(d)?c?Kv:s_:pf,m;if(_n(r)&&(~r.indexOf("random(")&&(r=Po(r)),r.charAt(1)==="="&&(m=fa(h,r)+(wn(h)||0),(m||m===0)&&(r=m))),!u||h!==r||Xu)return!isNaN(h*r)&&r!==""?(m=new Xn(this._pt,e,t,+h||0,r-(h||0),typeof d=="boolean"?Jv:a_,0,f),c&&(m.fp=c),o&&m.modifier(o,this,e),this._pt=m):(!d&&!(t in e)&&of(t,r),Xv.call(this,e,t,h,r,f,l||oi.stringFilter,c))},qv=function(e,t,n,r,s){if(Ht(e)&&(e=mo(e,s,t,n,r)),!ji(e)||e.style&&e.nodeType||Rn(e)||Am(e))return _n(e)?mo(e,s,t,n,r):e;var a={},o;for(o in e)a[o]=mo(e[o],s,t,n,r);return a},n_=function(e,t,n,r,s,a){var o,l,c,u;if(ti[e]&&(o=new ti[e]).init(s,o.rawVars?t[e]:qv(t[e],r,s,a,n),n,r,a)!==!1&&(n._pt=l=new Xn(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==ua))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},Br,Xu,df=function i(e,t,n){var r=e.vars,s=r.ease,a=r.startAt,o=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,d=r.yoyoEase,h=r.keyframes,f=r.autoRevert,m=e._dur,_=e._startAt,p=e._targets,g=e.parent,v=g&&g.data==="nested"?g.vars.targets:p,b=e._overwrite==="auto"&&!nf,S=e.timeline,A=r.easeReverse||d,E,T,x,w,R,P,I,G,V,N,B,O,Y;if(S&&(!h||!s)&&(s="none"),e._ease=Ss(s,Ao.ease),e._rEase=A&&(Ss(A)||e._ease),e._from=!S&&!!r.runBackwards,e._from&&(e.ratio=1),!S||h&&!r.stagger){if(G=p[0]?xs(p[0]).harness:0,O=G&&r[G.prop],E=Zl(r,lf),_&&(_._zTime<0&&_.progress(1),t<0&&u&&o&&!f?_.render(-1,!0):_.revert(u&&m?Ll:xv),_._lazy=0),a){if(jr(e._startAt=nn.set(p,ui({data:"isStart",overwrite:!1,parent:g,immediateRender:!0,lazy:!_&&Gn(l),startAt:null,delay:0,onUpdate:c&&function(){return si(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(xn||!o&&!f)&&e._startAt.revert(Ll),o&&m&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&m&&!_){if(t&&(o=!1),x=ui({overwrite:!1,data:"isFromStart",lazy:o&&!_&&Gn(l),immediateRender:o,stagger:0,parent:g},E),O&&(x[G.prop]=O),jr(e._startAt=nn.set(p,x)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(xn?e._startAt.revert(Ll):e._startAt.render(-1,!0)),e._zTime=t,!o)i(e._startAt,wt,wt);else if(!t)return}for(e._pt=e._ptCache=0,l=m&&Gn(l)||l&&!m,T=0;T<p.length;T++){if(R=p[T],I=R._gsap||uf(p)[T]._gsap,e._ptLookup[T]=N={},ku[I.id]&&Xr.length&&Kl(),B=v===p?T:v.indexOf(R),G&&(V=new G).init(R,O||E,e,B,v)!==!1&&(e._pt=w=new Xn(e._pt,R,V.name,0,1,V.render,V,0,V.priority),V._props.forEach(function(ee){N[ee]=w}),V.priority&&(P=1)),!G||O)for(x in E)ti[x]&&(V=n_(x,E,e,B,R,v))?V.priority&&(P=1):N[x]=w=ff.call(e,R,x,"get",E[x],B,v,0,r.stringFilter);e._op&&e._op[T]&&e.kill(R,e._op[T]),b&&e._pt&&(Br=e,Bt.killTweensOf(R,N,e.globalTime(t)),Y=!e.parent,Br=0),e._pt&&l&&(ku[I.id]=1)}P&&l_(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!Y,h&&t<=0&&S.render(vi,!0,!0)},$v=function(e,t,n,r,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,d,h,f;if(!c)for(c=e._ptCache[t]=[],h=e._ptLookup,f=e._targets.length;f--;){if(u=h[f][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Xu=1,e.vars[t]="+=0",df(e,o),Xu=0,l?Co(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(f=c.length;f--;)d=c[f],u=d._pt||d,u.s=(r||r===0)&&!s?r:u.s+(r||0)+a*u.c,u.c=n-u.s,d.e&&(d.e=$t(n)+wn(d.e)),d.b&&(d.b=u.s+wn(d.b))},jv=function(e,t){var n=e[0]?xs(e[0]).harness:0,r=n&&n.aliases,s,a,o,l;if(!r)return t;s=Ta({},t);for(a in r)if(a in s)for(l=r[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},Yv=function(e,t,n,r){var s=t.ease||r||"power1.inOut",a,o;if(Rn(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},mo=function(e,t,n,r,s){return Ht(e)?e.call(t,n,r,s):_n(e)&&~e.indexOf("random(")?Po(e):e},i_=cf+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",r_={};Wn(i_+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return r_[i]=1});var nn=(function(i){Tm(e,i);function e(n,r,s,a){var o;typeof r=="number"&&(s.duration=r,r=s,s=null),o=i.call(this,a?r:fo(r))||this;var l=o.vars,c=l.duration,u=l.delay,d=l.immediateRender,h=l.stagger,f=l.overwrite,m=l.keyframes,_=l.defaults,p=l.scrollTrigger,g=r.parent||Bt,v=(Rn(n)||Am(n)?_r(n[0]):"length"in r)?[n]:xi(n),b,S,A,E,T,x,w,R;if(o._targets=v.length?uf(v):Co("GSAP target "+n+" not found. https://gsap.com",!oi.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=f,m||h||Ko(c)||Ko(u)){r=o.vars;var P=r.easeReverse||r.yoyoEase;if(b=o.timeline=new Hn({data:"nested",defaults:_||{},targets:g&&g.data==="nested"?g.vars.targets:v}),b.kill(),b.parent=b._dp=ar(o),b._start=0,h||Ko(c)||Ko(u)){if(E=v.length,w=h&&Wm(h),ji(h))for(T in h)~i_.indexOf(T)&&(R||(R={}),R[T]=h[T]);for(S=0;S<E;S++)A=Zl(r,r_),A.stagger=0,P&&(A.easeReverse=P),R&&Ta(A,R),x=v[S],A.duration=+mo(c,ar(o),S,x,v),A.delay=(+mo(u,ar(o),S,x,v)||0)-o._delay,!h&&E===1&&A.delay&&(o._delay=u=A.delay,o._start+=u,A.delay=0),b.to(x,A,w?w(S,x,v):0),b._ease=ft.none;b.duration()?c=u=0:o.timeline=0}else if(m){fo(ui(b.vars.defaults,{ease:"none"})),b._ease=Ss(m.ease||r.ease||"none");var I=0,G,V,N;if(Rn(m))m.forEach(function(B){return b.to(v,B,">")}),b.duration();else{A={};for(T in m)T==="ease"||T==="easeEach"||Yv(T,m[T],A,m.easeEach);for(T in A)for(G=A[T].sort(function(B,O){return B.t-O.t}),I=0,S=0;S<G.length;S++)V=G[S],N={ease:V.e,duration:(V.t-(S?G[S-1].t:0))/100*c},N[T]=V.v,b.to(v,N,I),I+=N.duration;b.duration()<c&&b.to({},{duration:c-b.duration()})}}c||o.duration(c=b.duration())}else o.timeline=0;return f===!0&&!nf&&(Br=ar(o),Bt.killTweensOf(v),Br=0),ki(g,ar(o),s),r.reversed&&o.reverse(),r.paused&&o.paused(!0),(d||!c&&!m&&o._start===Ft(g._time)&&Gn(d)&&Tv(ar(o))&&g.data!=="nested")&&(o._tTime=-wt,o.render(Math.max(0,-u)||0)),p&&zm(ar(o),p),o}var t=e.prototype;return t.render=function(r,s,a){var o=this._time,l=this._tDur,c=this._dur,u=r<0,d=r>l-wt&&!u?l:r<wt?0:r,h,f,m,_,p,g,v,b;if(!c)Av(this,r,s,a);else if(d!==this._tTime||!r||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(h=d,b=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+r,s,a);if(h=Ft(d%_),d===l?(m=this._repeat,h=c):(p=Ft(d/_),m=~~p,m&&m===p?(h=c,m--):h>c&&(h=c)),g=this._yoyo&&m&1,g&&(h=c-h),p=wa(this._tTime,_),h===o&&!a&&this._initted&&m===p)return this._tTime=d,this;m!==p&&this.vars.repeatRefresh&&!g&&!this._lock&&h!==_&&this._initted&&(this._lock=a=1,this.render(Ft(_*m),!0).invalidate()._lock=0)}if(!this._initted){if(Vm(this,u?r:h,a,s,d))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&m!==p))return this;if(c!==this._dur)return this.render(r,s,a)}if(this._rEase){var S=h<o;if(S!==this._inv){var A=S?o:c-o;this._inv=S,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=A?(S?-1:1)/A:0,this._invScale=S?-this.ratio:1-this.ratio,this._invEase=S?this._rEase:this._ease}this.ratio=v=this._invRatio+this._invScale*this._invEase((h-this._invTime)*this._invRecip)}else this.ratio=v=this._ease(h/c);if(this._from&&(this.ratio=v=1-v),this._tTime=d,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&d&&!s&&!p&&(si(this,"onStart"),this._tTime!==d))return this;for(f=this._pt;f;)f.r(v,f.d),f=f._next;b&&b.render(r<0?r:b._dur*b._ease(h/this._dur),s,a)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&zu(this,r,s,a),si(this,"onUpdate")),this._repeat&&m!==p&&this.vars.onRepeat&&!s&&this.parent&&si(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(u&&!this._onUpdate&&zu(this,r,!0,!0),(r||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&jr(this,1),!s&&!(u&&!o)&&(d||o||g)&&(si(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),i.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,a,o,l){Do||ii.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||df(this,c),u=this._ease(c/this._dur),$v(this,r,s,a,o,u,c,l)?this.resetTo(r,s,a,o,1):(Mc(this,0),this.parent||Bm(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?eo(this):this.scrollTrigger&&this.scrollTrigger.kill(!!xn),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,Br&&Br.vars.overwrite!==!0)._first||eo(this),this.parent&&a!==this.timeline.totalDuration()&&Aa(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=r?xi(r):o,c=this._ptLookup,u=this._pt,d,h,f,m,_,p,g;if((!s||s==="all")&&Mv(o,l))return s==="all"&&(this._pt=0),eo(this);for(d=this._op=this._op||[],s!=="all"&&(_n(s)&&(_={},Wn(s,function(v){return _[v]=1}),s=_),s=jv(o,s)),g=o.length;g--;)if(~l.indexOf(o[g])){h=c[g],s==="all"?(d[g]=s,m=h,f={}):(f=d[g]=d[g]||{},m=s);for(_ in m)p=h&&h[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&Sc(this,p,"_pt"),delete h[_]),f!=="all"&&(f[_]=1)}return this._initted&&!this._pt&&u&&eo(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return po(1,arguments)},e.delayedCall=function(r,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(r,s,a){return po(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,a){return Bt.killTweensOf(r,s,a)},e})(Io);ui(nn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Wn("staggerTo,staggerFrom,staggerFromTo",function(i){nn[i]=function(){var e=new Hn,t=Hu.call(arguments,0);return t.splice(i==="staggerFromTo"?5:4,0,0),e[i].apply(e,t)}});var pf=function(e,t,n){return e[t]=n},s_=function(e,t,n){return e[t](n)},Kv=function(e,t,n,r){return e[t](r.fp,n)},Zv=function(e,t,n){return e.setAttribute(t,n)},mf=function(e,t){return Ht(e[t])?s_:rf(e[t])&&e.setAttribute?Zv:pf},a_=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Jv=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},o_=function(e,t){var n=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},_f=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Qv=function(e,t,n,r){for(var s=this._pt,a;s;)a=s._next,s.p===r&&s.modifier(e,t,n),s=a},ex=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Sc(this,t,"_pt"):t.dep||(n=1),t=r;return!n},tx=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},l_=function(e){for(var t=e._pt,n,r,s,a;t;){for(n=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:a)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:a=t,t=n}e._pt=s},Xn=(function(){function i(t,n,r,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=r,this.r=o||a_,this.d=l||this,this.set=c||pf,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=i.prototype;return e.modifier=function(n,r,s){this.mSet=this.mSet||this.set,this.set=tx,this.m=n,this.mt=s,this.tween=r},i})();Wn(cf+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(i){return lf[i]=1});ci.TweenMax=ci.TweenLite=nn;ci.TimelineLite=ci.TimelineMax=Hn;Bt=new Hn({sortChildren:!1,defaults:Ao,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});oi.stringFilter=Qm;var bs=[],Ul={},nx=[],_d=0,ix=0,Vc=function(e){return(Ul[e]||nx).map(function(t){return t()})},qu=function(){var e=Date.now(),t=[];e-_d>2&&(Vc("matchMediaInit"),bs.forEach(function(n){var r=n.queries,s=n.conditions,a,o,l,c;for(o in r)a=Ui.matchMedia(r[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),Vc("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(r){return n.add(null,r)})}),_d=e,Vc("matchMedia"))},c_=(function(){function i(t,n){this.selector=n&&Gu(n),this.data=[],this._r=[],this.isReverted=!1,this.id=ix++,t&&this.add(t)}var e=i.prototype;return e.add=function(n,r,s){Ht(n)&&(s=r,r=n,n=Ht);var a=this,o=function(){var c=Nt,u=a.selector,d;return c&&c!==a&&c.data.push(a),s&&(a.selector=Gu(s)),Nt=a,d=r.apply(a,arguments),Ht(d)&&a._r.push(d),Nt=c,a.selector=u,a.isReverted=!1,d};return a.last=o,n===Ht?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var r=Nt;Nt=null,n(this),Nt=r},e.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof i?n.push.apply(n,r.getTweens()):r instanceof nn&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,r){var s=this;if(n?(function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,d){return d.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Hn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof nn)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),r)for(var a=bs.length;a--;)bs[a].id===this.id&&bs.splice(a,1)},e.revert=function(n){this.kill(n||{})},i})(),rx=(function(){function i(t){this.contexts=[],this.scope=t,Nt&&Nt.data.push(this)}var e=i.prototype;return e.add=function(n,r,s){ji(n)||(n={matches:n});var a=new c_(0,s||this.scope),o=a.conditions={},l,c,u;Nt&&!a.selector&&(a.selector=Nt.selector),this.contexts.push(a),r=a.add("onMatch",r),a.queries=n;for(c in n)c==="all"?u=1:(l=Ui.matchMedia(n[c]),l&&(bs.indexOf(a)<0&&bs.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(qu):l.addEventListener("change",qu)));return u&&r(a,function(d){return a.add(null,d)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},i})(),Ql={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(r){return Km(r)})},timeline:function(e){return new Hn(e)},getTweensOf:function(e,t){return Bt.getTweensOf(e,t)},getProperty:function(e,t,n,r){_n(e)&&(e=xi(e)[0]);var s=xs(e||{}).get,a=n?Fm:Om;return n==="native"&&(n=""),e&&(t?a((ti[t]&&ti[t].get||s)(e,t,n,r)):function(o,l,c){return a((ti[o]&&ti[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=xi(e),e.length>1){var r=e.map(function(u){return jn.quickSetter(u,t,n)}),s=r.length;return function(u){for(var d=s;d--;)r[d](u)}}e=e[0]||{};var a=ti[t],o=xs(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var d=new a;ua._pt=0,d.init(e,n?u+n:u,ua,0,[e]),d.render(1,d),ua._pt&&_f(1,ua)}:o.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var r,s=jn.to(e,ui((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),n||{})),a=function(l,c,u){return s.resetTo(t,l,c,u)};return a.tween=s,a},isTweening:function(e){return Bt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Ss(e.ease,Ao.ease)),hd(Ao,e||{})},config:function(e){return hd(oi,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,s=e.defaults,a=e.extendTimeline;(r||"").split(",").forEach(function(o){return o&&!ti[o]&&!ci[o]&&Co(t+" effect requires "+o+" plugin.")}),Fc[t]=function(o,l,c){return n(xi(o),ui(l||{},s),c)},a&&(Hn.prototype[t]=function(o,l,c){return this.add(Fc[t](o,ji(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){ft[e]=Ss(t)},parseEase:function(e,t){return arguments.length?Ss(e,t):ft},getById:function(e){return Bt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Hn(e),r,s;for(n.smoothChildTiming=Gn(e.smoothChildTiming),Bt.remove(n),n._dp=0,n._time=n._tTime=Bt._time,r=Bt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof nn&&r.vars.onComplete===r._targets[0]))&&ki(n,r,r._start-r._delay),r=s;return ki(Bt,n,0),n},context:function(e,t){return e?new c_(e,t):Nt},matchMedia:function(e){return new rx(e)},matchMediaRefresh:function(){return bs.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||qu()},addEventListener:function(e,t){var n=Ul[e]||(Ul[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Ul[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:Uv,wrapYoyo:Ov,distribute:Wm,random:qm,snap:Xm,normalize:Nv,getUnit:wn,clamp:Pv,splitColor:Zm,toArray:xi,selector:Gu,mapRange:jm,pipe:Iv,unitize:Lv,interpolate:Fv,shuffle:Gm},install:Dm,effects:Fc,ticker:ii,updateRoot:Hn.updateRoot,plugins:ti,globalTimeline:Bt,core:{PropTween:Xn,globals:Im,Tween:nn,Timeline:Hn,Animation:Io,getCache:xs,_removeLinkedListItem:Sc,reverting:function(){return xn},context:function(e){return e&&Nt&&(Nt.data.push(e),e._ctx=Nt),Nt},suppressOverwrites:function(e){return nf=e}}};Wn("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return Ql[i]=nn[i]});ii.add(Hn.updateRoot);ua=Ql.to({},{duration:0});var sx=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},ax=function(e,t){var n=e._targets,r,s,a;for(r in t)for(s=n.length;s--;)a=e._ptLookup[s][r],a&&(a=a.d)&&(a._pt&&(a=sx(a,r)),a&&a.modifier&&a.modifier(t[r],e,n[s],r))},Hc=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,a){a._onInit=function(o){var l,c;if(_n(s)&&(l={},Wn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}ax(o,s)}}}},jn=Ql.registerPlugin({name:"attr",init:function(e,t,n,r,s){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],r,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)xn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Hc("roundProps",Wu),Hc("modifiers"),Hc("snap",Xm))||Ql;nn.version=Hn.version=jn.version="3.15.0";Pm=1;sf()&&Ca();ft.Power0;ft.Power1;ft.Power2;ft.Power3;ft.Power4;ft.Linear;ft.Quad;ft.Cubic;ft.Quart;ft.Quint;ft.Strong;ft.Elastic;ft.Back;ft.SteppedEase;ft.Bounce;ft.Sine;ft.Expo;ft.Circ;var gd,kr,da,gf,ms,vd,vf,ox=function(){return typeof window<"u"},gr={},cs=180/Math.PI,pa=Math.PI/180,Hs=Math.atan2,xd=1e8,xf=/([A-Z])/g,lx=/(left|right|width|margin|padding|x)/i,cx=/[\s,\(]\S/,zi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},$u=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},ux=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},hx=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},fx=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},dx=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},u_=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},h_=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},px=function(e,t,n){return e.style[t]=n},mx=function(e,t,n){return e.style.setProperty(t,n)},_x=function(e,t,n){return e._gsap[t]=n},gx=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},vx=function(e,t,n,r,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},xx=function(e,t,n,r,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},zt="transform",qn=zt+"Origin",yx=function i(e,t){var n=this,r=this.target,s=r.style,a=r._gsap;if(e in gr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=zi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=or(r,o)}):this.tfm[e]=a.x?a[e]:or(r,e),e===qn&&(this.tfm.zOrigin=a.zOrigin);else return zi.transform.split(",").forEach(function(o){return i.call(n,o,t)});if(this.props.indexOf(zt)>=0)return;a.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(qn,t,"")),e=zt}(s||t)&&this.props.push(e,t,s[e])},f_=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Sx=function(){var e=this.props,t=this.target,n=t.style,r=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(xf,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)r[a]=this.tfm[a];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=vf(),(!s||!s.isStart)&&!n[zt]&&(f_(n),r.zOrigin&&n[qn]&&(n[qn]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},d_=function(e,t){var n={target:e,props:[],revert:Sx,save:yx};return e._gsap||jn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return n.save(r)}),n},p_,ju=function(e,t){var n=kr.createElementNS?kr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):kr.createElement(e);return n&&n.style?n:kr.createElement(e)},ai=function i(e,t,n){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(xf,"-$1").toLowerCase())||r.getPropertyValue(t)||!n&&i(e,Ra(t)||t,1)||""},yd="O,Moz,ms,Ms,Webkit".split(","),Ra=function(e,t,n){var r=t||ms,s=r.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(yd[a]+e in s););return a<0?null:(a===3?"ms":a>=0?yd[a]:"")+e},Yu=function(){ox()&&window.document&&(gd=window,kr=gd.document,da=kr.documentElement,ms=ju("div")||{style:{}},ju("div"),zt=Ra(zt),qn=zt+"Origin",ms.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",p_=!!Ra("perspective"),vf=jn.core.reverting,gf=1)},Sd=function(e){var t=e.ownerSVGElement,n=ju("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",n.appendChild(r),da.appendChild(n);try{s=r.getBBox()}catch{}return n.removeChild(r),da.removeChild(n),s},bd=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},m_=function(e){var t,n;try{t=e.getBBox()}catch{t=Sd(e),n=1}return t&&(t.width||t.height)||n||(t=Sd(e)),t&&!t.width&&!t.x&&!t.y?{x:+bd(e,["x","cx","x1"])||0,y:+bd(e,["y","cy","y1"])||0,width:0,height:0}:t},__=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&m_(e))},Yr=function(e,t){if(t){var n=e.style,r;t in gr&&t!==qn&&(t=zt),n.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(r==="--"?t:t.replace(xf,"-$1").toLowerCase())):n.removeAttribute(t)}},zr=function(e,t,n,r,s,a){var o=new Xn(e._pt,t,n,0,1,a?h_:u_);return e._pt=o,o.b=r,o.e=s,e._props.push(n),o},Md={deg:1,rad:1,turn:1},bx={grid:1,flex:1},Kr=function i(e,t,n,r){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=ms.style,l=lx.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),d=100,h=r==="px",f=r==="%",m,_,p,g;if(r===a||!s||Md[r]||Md[a])return s;if(a!=="px"&&!h&&(s=i(e,t,n,"px")),g=e.getCTM&&__(e),(f||a==="%")&&(gr[t]||~t.indexOf("adius")))return m=g?e.getBBox()[l?"width":"height"]:e[u],$t(f?s/m*d:s/100*m);if(o[l?"width":"height"]=d+(h?a:r),_=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,g&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===kr||!_.appendChild)&&(_=kr.body),p=_._gsap,p&&f&&p.width&&l&&p.time===ii.time&&!p.uncache)return $t(s/p.width*d);if(f&&(t==="height"||t==="width")){var v=e.style[t];e.style[t]=d+r,m=e[u],v?e.style[t]=v:Yr(e,t)}else(f||a==="%")&&!bx[ai(_,"display")]&&(o.position=ai(e,"position")),_===e&&(o.position="static"),_.appendChild(ms),m=ms[u],_.removeChild(ms),o.position="absolute";return l&&f&&(p=xs(_),p.time=ii.time,p.width=_[u]),$t(h?m*s/d:m&&s?d/m*s:0)},or=function(e,t,n,r){var s;return gf||Yu(),t in zi&&t!=="transform"&&(t=zi[t],~t.indexOf(",")&&(t=t.split(",")[0])),gr[t]&&t!=="transform"?(s=No(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:tc(ai(e,qn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=ec[t]&&ec[t](e,t,n)||ai(e,t)||Nm(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Kr(e,t,s,n)+n:s},Mx=function(e,t,n,r){if(!n||n==="none"){var s=Ra(t,e,1),a=s&&ai(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=ai(e,"borderTopColor"))}var o=new Xn(this._pt,e.style,t,0,1,o_),l=0,c=0,u,d,h,f,m,_,p,g,v,b,S,A;if(o.b=n,o.e=r,n+="",r+="",r.substring(0,6)==="var(--"&&(r=ai(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(_=e.style[t],e.style[t]=r,r=ai(e,t)||r,_?e.style[t]=_:Yr(e,t)),u=[n,r],Qm(u),n=u[0],r=u[1],h=n.match(ca)||[],A=r.match(ca)||[],A.length){for(;d=ca.exec(r);)p=d[0],v=r.substring(l,d.index),m?m=(m+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(m=1),p!==(_=h[c++]||"")&&(f=parseFloat(_)||0,S=_.substr((f+"").length),p.charAt(1)==="="&&(p=fa(f,p)+S),g=parseFloat(p),b=p.substr((g+"").length),l=ca.lastIndex-b.length,b||(b=b||oi.units[t]||S,l===r.length&&(r+=b,o.e+=b)),S!==b&&(f=Kr(e,t,_,b)||0),o._pt={_next:o._pt,p:v||c===1?v:",",s:f,c:g-f,m:m&&m<4||t==="zIndex"?Math.round:0});o.c=l<r.length?r.substring(l,r.length):""}else o.r=t==="display"&&r==="none"?h_:u_;return Rm.test(r)&&(o.e=0),this._pt=o,o},Ed={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Ex=function(e){var t=e.split(" "),n=t[0],r=t[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(e=n,n=r,r=e),t[0]=Ed[n]||n,t[1]=Ed[r]||r,t.join(" ")},Tx=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,s=t.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],gr[o]&&(l=1,o=o==="transformOrigin"?qn:zt),Yr(n,o);l&&(Yr(n,zt),a&&(a.svg&&n.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",No(n,1),a.uncache=1,f_(r)))}},ec={clearProps:function(e,t,n,r,s){if(s.data!=="isFromStart"){var a=e._pt=new Xn(e._pt,t,n,0,0,Tx);return a.u=r,a.pr=-10,a.tween=s,e._props.push(n),1}}},Lo=[1,0,0,1,0,0],g_={},v_=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Td=function(e){var t=ai(e,zt);return v_(t)?Lo:t.substr(7).match(Cm).map($t)},yf=function(e,t){var n=e._gsap||xs(e),r=e.style,s=Td(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Lo:s):(s===Lo&&!e.offsetParent&&e!==da&&!n.svg&&(l=r.display,r.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,da.appendChild(e)),s=Td(e),l?r.display=l:Yr(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):da.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Ku=function(e,t,n,r,s,a){var o=e._gsap,l=s||yf(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,d=o.xOffset||0,h=o.yOffset||0,f=l[0],m=l[1],_=l[2],p=l[3],g=l[4],v=l[5],b=t.split(" "),S=parseFloat(b[0])||0,A=parseFloat(b[1])||0,E,T,x,w;n?l!==Lo&&(T=f*p-m*_)&&(x=S*(p/T)+A*(-_/T)+(_*v-p*g)/T,w=S*(-m/T)+A*(f/T)-(f*v-m*g)/T,S=x,A=w):(E=m_(e),S=E.x+(~b[0].indexOf("%")?S/100*E.width:S),A=E.y+(~(b[1]||b[0]).indexOf("%")?A/100*E.height:A)),r||r!==!1&&o.smooth?(g=S-c,v=A-u,o.xOffset=d+(g*f+v*_)-g,o.yOffset=h+(g*m+v*p)-v):o.xOffset=o.yOffset=0,o.xOrigin=S,o.yOrigin=A,o.smooth=!!r,o.origin=t,o.originIsAbsolute=!!n,e.style[qn]="0px 0px",a&&(zr(a,o,"xOrigin",c,S),zr(a,o,"yOrigin",u,A),zr(a,o,"xOffset",d,o.xOffset),zr(a,o,"yOffset",h,o.yOffset)),e.setAttribute("data-svg-origin",S+" "+A)},No=function(e,t){var n=e._gsap||new t_(e);if("x"in n&&!t&&!n.uncache)return n;var r=e.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=ai(e,qn)||"0",u,d,h,f,m,_,p,g,v,b,S,A,E,T,x,w,R,P,I,G,V,N,B,O,Y,ee,D,pe,Ee,qe,ke,Le;return u=d=h=_=p=g=v=b=S=0,f=m=1,n.svg=!!(e.getCTM&&__(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[zt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[zt]!=="none"?l[zt]:"")),r.scale=r.rotate=r.translate="none"),T=yf(e,n.svg),n.svg&&(n.uncache?(Y=e.getBBox(),c=n.xOrigin-Y.x+"px "+(n.yOrigin-Y.y)+"px",O=""):O=!t&&e.getAttribute("data-svg-origin"),Ku(e,O||c,!!O||n.originIsAbsolute,n.smooth!==!1,T)),A=n.xOrigin||0,E=n.yOrigin||0,T!==Lo&&(P=T[0],I=T[1],G=T[2],V=T[3],u=N=T[4],d=B=T[5],T.length===6?(f=Math.sqrt(P*P+I*I),m=Math.sqrt(V*V+G*G),_=P||I?Hs(I,P)*cs:0,v=G||V?Hs(G,V)*cs+_:0,v&&(m*=Math.abs(Math.cos(v*pa))),n.svg&&(u-=A-(A*P+E*G),d-=E-(A*I+E*V))):(Le=T[6],qe=T[7],D=T[8],pe=T[9],Ee=T[10],ke=T[11],u=T[12],d=T[13],h=T[14],x=Hs(Le,Ee),p=x*cs,x&&(w=Math.cos(-x),R=Math.sin(-x),O=N*w+D*R,Y=B*w+pe*R,ee=Le*w+Ee*R,D=N*-R+D*w,pe=B*-R+pe*w,Ee=Le*-R+Ee*w,ke=qe*-R+ke*w,N=O,B=Y,Le=ee),x=Hs(-G,Ee),g=x*cs,x&&(w=Math.cos(-x),R=Math.sin(-x),O=P*w-D*R,Y=I*w-pe*R,ee=G*w-Ee*R,ke=V*R+ke*w,P=O,I=Y,G=ee),x=Hs(I,P),_=x*cs,x&&(w=Math.cos(x),R=Math.sin(x),O=P*w+I*R,Y=N*w+B*R,I=I*w-P*R,B=B*w-N*R,P=O,N=Y),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,g=180-g),f=$t(Math.sqrt(P*P+I*I+G*G)),m=$t(Math.sqrt(B*B+Le*Le)),x=Hs(N,B),v=Math.abs(x)>2e-4?x*cs:0,S=ke?1/(ke<0?-ke:ke):0),n.svg&&(O=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!v_(ai(e,zt)),O&&e.setAttribute("transform",O))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(f*=-1,v+=_<=0?180:-180,_+=_<=0?180:-180):(m*=-1,v+=v<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=d-((n.yPercent=d&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=h+a,n.scaleX=$t(f),n.scaleY=$t(m),n.rotation=$t(_)+o,n.rotationX=$t(p)+o,n.rotationY=$t(g)+o,n.skewX=v+o,n.skewY=b+o,n.transformPerspective=S+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(r[qn]=tc(c)),n.xOffset=n.yOffset=0,n.force3D=oi.force3D,n.renderTransform=n.svg?Ax:p_?x_:wx,n.uncache=0,n},tc=function(e){return(e=e.split(" "))[0]+" "+e[1]},Gc=function(e,t,n){var r=wn(t);return $t(parseFloat(t)+parseFloat(Kr(e,"x",n+"px",r)))+r},wx=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,x_(e,t)},ts="0deg",Wa="0px",ns=") ",x_=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,d=n.rotationX,h=n.skewX,f=n.skewY,m=n.scaleX,_=n.scaleY,p=n.transformPerspective,g=n.force3D,v=n.target,b=n.zOrigin,S="",A=g==="auto"&&e&&e!==1||g===!0;if(b&&(d!==ts||u!==ts)){var E=parseFloat(u)*pa,T=Math.sin(E),x=Math.cos(E),w;E=parseFloat(d)*pa,w=Math.cos(E),a=Gc(v,a,T*w*-b),o=Gc(v,o,-Math.sin(E)*-b),l=Gc(v,l,x*w*-b+b)}p!==Wa&&(S+="perspective("+p+ns),(r||s)&&(S+="translate("+r+"%, "+s+"%) "),(A||a!==Wa||o!==Wa||l!==Wa)&&(S+=l!==Wa||A?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+ns),c!==ts&&(S+="rotate("+c+ns),u!==ts&&(S+="rotateY("+u+ns),d!==ts&&(S+="rotateX("+d+ns),(h!==ts||f!==ts)&&(S+="skew("+h+", "+f+ns),(m!==1||_!==1)&&(S+="scale("+m+", "+_+ns),v.style[zt]=S||"translate(0, 0)"},Ax=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,d=n.scaleX,h=n.scaleY,f=n.target,m=n.xOrigin,_=n.yOrigin,p=n.xOffset,g=n.yOffset,v=n.forceCSS,b=parseFloat(a),S=parseFloat(o),A,E,T,x,w;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=pa,c*=pa,A=Math.cos(l)*d,E=Math.sin(l)*d,T=Math.sin(l-c)*-h,x=Math.cos(l-c)*h,c&&(u*=pa,w=Math.tan(c-u),w=Math.sqrt(1+w*w),T*=w,x*=w,u&&(w=Math.tan(u),w=Math.sqrt(1+w*w),A*=w,E*=w)),A=$t(A),E=$t(E),T=$t(T),x=$t(x)):(A=d,x=h,E=T=0),(b&&!~(a+"").indexOf("px")||S&&!~(o+"").indexOf("px"))&&(b=Kr(f,"x",a,"px"),S=Kr(f,"y",o,"px")),(m||_||p||g)&&(b=$t(b+m-(m*A+_*T)+p),S=$t(S+_-(m*E+_*x)+g)),(r||s)&&(w=f.getBBox(),b=$t(b+r/100*w.width),S=$t(S+s/100*w.height)),w="matrix("+A+","+E+","+T+","+x+","+b+","+S+")",f.setAttribute("transform",w),v&&(f.style[zt]=w)},Cx=function(e,t,n,r,s){var a=360,o=_n(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?cs:1),c=l-r,u=r+c+"deg",d,h;return o&&(d=s.split("_")[1],d==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),d==="cw"&&c<0?c=(c+a*xd)%a-~~(c/a)*a:d==="ccw"&&c>0&&(c=(c-a*xd)%a-~~(c/a)*a)),e._pt=h=new Xn(e._pt,t,n,r,c,ux),h.e=u,h.u="deg",e._props.push(n),h},wd=function(e,t){for(var n in t)e[n]=t[n];return e},Rx=function(e,t,n){var r=wd({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,d,h,f,m;r.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[zt]=t,o=No(n,1),Yr(n,zt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[zt],a[zt]=t,o=No(n,1),a[zt]=c);for(l in gr)c=r[l],u=o[l],c!==u&&s.indexOf(l)<0&&(f=wn(c),m=wn(u),d=f!==m?Kr(n,l,c,m):parseFloat(c),h=parseFloat(u),e._pt=new Xn(e._pt,o,l,d,h-d,$u),e._pt.u=m||0,e._props.push(l));wd(o,r)};Wn("padding,margin,Width,Radius",function(i,e){var t="Top",n="Right",r="Bottom",s="Left",a=(e<3?[t,n,r,s]:[t+s,t+n,r+n,r+s]).map(function(o){return e<2?i+o:"border"+o+i});ec[e>1?"border"+i:i]=function(o,l,c,u,d){var h,f;if(arguments.length<4)return h=a.map(function(m){return or(o,m,c)}),f=h.join(" "),f.split(h[0]).length===5?h[0]:f;h=(u+"").split(" "),f={},a.forEach(function(m,_){return f[m]=h[_]=h[_]||h[(_-1)/2|0]}),o.init(l,f,d)}});var y_={name:"css",register:Yu,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,s){var a=this._props,o=e.style,l=n.vars.startAt,c,u,d,h,f,m,_,p,g,v,b,S,A,E,T,x,w;gf||Yu(),this.styles=this.styles||d_(e),x=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(ti[_]&&n_(_,t,n,r,e,s)))){if(f=typeof u,m=ec[_],f==="function"&&(u=u.call(n,r,e,s),f=typeof u),f==="string"&&~u.indexOf("random(")&&(u=Po(u)),m)m(this,e,_,u,n)&&(T=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",qr.lastIndex=0,qr.test(c)||(p=wn(c),g=wn(u),g?p!==g&&(c=Kr(e,_,c,g)+g):p&&(u+=p)),this.add(o,"setProperty",c,u,r,s,0,0,_),a.push(_),x.push(_,0,o[_]);else if(f!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,r,e,s):l[_],_n(c)&&~c.indexOf("random(")&&(c=Po(c)),wn(c+"")||c==="auto"||(c+=oi.units[_]||wn(or(e,_))||""),(c+"").charAt(1)==="="&&(c=or(e,_))):c=or(e,_),h=parseFloat(c),v=f==="string"&&u.charAt(1)==="="&&u.substr(0,2),v&&(u=u.substr(2)),d=parseFloat(u),_ in zi&&(_==="autoAlpha"&&(h===1&&or(e,"visibility")==="hidden"&&d&&(h=0),x.push("visibility",0,o.visibility),zr(this,o,"visibility",h?"inherit":"hidden",d?"inherit":"hidden",!d)),_!=="scale"&&_!=="transform"&&(_=zi[_],~_.indexOf(",")&&(_=_.split(",")[0]))),b=_ in gr,b){if(this.styles.save(_),w=u,f==="string"&&u.substring(0,6)==="var(--"){if(u=ai(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var R=e.style.perspective;e.style.perspective=u,u=ai(e,"perspective"),R?e.style.perspective=R:Yr(e,"perspective")}d=parseFloat(u)}if(S||(A=e._gsap,A.renderTransform&&!t.parseTransform||No(e,t.parseTransform),E=t.smoothOrigin!==!1&&A.smooth,S=this._pt=new Xn(this._pt,o,zt,0,1,A.renderTransform,A,0,-1),S.dep=1),_==="scale")this._pt=new Xn(this._pt,A,"scaleY",A.scaleY,(v?fa(A.scaleY,v+d):d)-A.scaleY||0,$u),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){x.push(qn,0,o[qn]),u=Ex(u),A.svg?Ku(e,u,0,E,0,this):(g=parseFloat(u.split(" ")[2])||0,g!==A.zOrigin&&zr(this,A,"zOrigin",A.zOrigin,g),zr(this,o,_,tc(c),tc(u)));continue}else if(_==="svgOrigin"){Ku(e,u,1,E,0,this);continue}else if(_ in g_){Cx(this,A,_,h,v?fa(h,v+u):u);continue}else if(_==="smoothOrigin"){zr(this,A,"smooth",A.smooth,u);continue}else if(_==="force3D"){A[_]=u;continue}else if(_==="transform"){Rx(this,u,e);continue}}else _ in o||(_=Ra(_)||_);if(b||(d||d===0)&&(h||h===0)&&!cx.test(u)&&_ in o)p=(c+"").substr((h+"").length),d||(d=0),g=wn(u)||(_ in oi.units?oi.units[_]:p),p!==g&&(h=Kr(e,_,c,g)),this._pt=new Xn(this._pt,b?A:o,_,h,(v?fa(h,v+d):d)-h,!b&&(g==="px"||_==="zIndex")&&t.autoRound!==!1?dx:$u),this._pt.u=g||0,b&&w!==u?(this._pt.b=c,this._pt.e=w,this._pt.r=fx):p!==g&&g!=="%"&&(this._pt.b=c,this._pt.r=hx);else if(_ in o)Mx.call(this,e,_,c,v?v+u:u);else if(_ in e)this.add(e,_,c||e[_],v?v+u:u,r,s);else if(_!=="parseTransform"){of(_,u);continue}b||(_ in o?x.push(_,0,o[_]):typeof e[_]=="function"?x.push(_,2,e[_]()):x.push(_,1,c||e[_])),a.push(_)}}T&&l_(this)},render:function(e,t){if(t.tween._time||!vf())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:or,aliases:zi,getSetter:function(e,t,n){var r=zi[t];return r&&r.indexOf(",")<0&&(t=r),t in gr&&t!==qn&&(e._gsap.x||or(e,"x"))?n&&vd===n?t==="scale"?gx:_x:(vd=n||{})&&(t==="scale"?vx:xx):e.style&&!rf(e.style[t])?px:~t.indexOf("-")?mx:mf(e,t)},core:{_removeProperty:Yr,_getMatrix:yf}};jn.utils.checkPrefix=Ra;jn.core.getStyleSaver=d_;(function(i,e,t,n){var r=Wn(i+","+e+","+t,function(s){gr[s]=1});Wn(e,function(s){oi.units[s]="deg",g_[s]=1}),zi[r[13]]=i+","+e,Wn(n,function(s){var a=s.split(":");zi[a[1]]=r[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Wn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){oi.units[i]="px"});jn.registerPlugin(y_);var Dt=jn.registerPlugin(y_)||jn;Dt.core.Tween;function Px(i,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(i,n.key,n)}}function Dx(i,e,t){return e&&Px(i.prototype,e),i}var gn,Ol,ri,Vr,Hr,ma,S_,us,_a,b_,ur,wi,M_,E_=function(){return gn||typeof window<"u"&&(gn=window.gsap)&&gn.registerPlugin&&gn},T_=1,ha=[],ot=[],Wi=[],_o=Date.now,Zu=function(e,t){return t},Ix=function(){var e=_a.core,t=e.bridge||{},n=e._scrollers,r=e._proxies;n.push.apply(n,ot),r.push.apply(r,Wi),ot=n,Wi=r,Zu=function(a,o){return t[a](o)}},$r=function(e,t){return~Wi.indexOf(e)&&Wi[Wi.indexOf(e)+1][t]},go=function(e){return!!~b_.indexOf(e)},Ln=function(e,t,n,r,s){return e.addEventListener(t,n,{passive:r!==!1,capture:!!s})},In=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},Zo="scrollLeft",Jo="scrollTop",Ju=function(){return ur&&ur.isPressed||ot.cache++},nc=function(e,t){var n=function r(s){if(s||s===0){T_&&(ri.history.scrollRestoration="manual");var a=ur&&ur.isPressed;s=r.v=Math.round(s)||(ur&&ur.iOS?1:0),e(s),r.cacheID=ot.cache,a&&Zu("ss",s)}else(t||ot.cache!==r.cacheID||Zu("ref"))&&(r.cacheID=ot.cache,r.v=e());return r.v+r.offset};return n.offset=0,e&&n},Bn={s:Zo,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:nc(function(i){return arguments.length?ri.scrollTo(i,an.sc()):ri.pageXOffset||Vr[Zo]||Hr[Zo]||ma[Zo]||0})},an={s:Jo,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Bn,sc:nc(function(i){return arguments.length?ri.scrollTo(Bn.sc(),i):ri.pageYOffset||Vr[Jo]||Hr[Jo]||ma[Jo]||0})},zn=function(e,t){return(t&&t._ctx&&t._ctx.selector||gn.utils.toArray)(e)[0]||(typeof e=="string"&&gn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},Lx=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},Zr=function(e,t){var n=t.s,r=t.sc;go(e)&&(e=Vr.scrollingElement||Hr);var s=ot.indexOf(e),a=r===an.sc?1:2;!~s&&(s=ot.push(e)-1),ot[s+a]||Ln(e,"scroll",Ju);var o=ot[s+a],l=o||(ot[s+a]=nc($r(e,n),!0)||(go(e)?r:nc(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,o||(l.smooth=gn.getProperty(e,"scrollBehavior")==="smooth"),l},Qu=function(e,t,n){var r=e,s=e,a=_o(),o=a,l=t||50,c=Math.max(500,l*3),u=function(m,_){var p=_o();_||p-a>l?(s=r,r=m,o=a,a=p):n?r+=m:r=s+(m-s)/(p-o)*(a-o)},d=function(){s=r=n?0:r,o=a=0},h=function(m){var _=o,p=s,g=_o();return(m||m===0)&&m!==r&&u(m),a===o||g-o>c?0:(r+(n?p:-p))/((n?g:a)-_)*1e3};return{update:u,reset:d,getVelocity:h}},Xa=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Ad=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},w_=function(){_a=gn.core.globals().ScrollTrigger,_a&&_a.core&&Ix()},A_=function(e){return gn=e||E_(),!Ol&&gn&&typeof document<"u"&&document.body&&(ri=window,Vr=document,Hr=Vr.documentElement,ma=Vr.body,b_=[ri,Vr,Hr,ma],gn.utils.clamp,M_=gn.core.context||function(){},us="onpointerenter"in ma?"pointer":"mouse",S_=Yt.isTouch=ri.matchMedia&&ri.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in ri||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,wi=Yt.eventTypes=("ontouchstart"in Hr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Hr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return T_=0},500),Ol=1),_a||w_(),Ol};Bn.op=an;ot.cache=0;var Yt=(function(){function i(t){this.init(t)}var e=i.prototype;return e.init=function(n){Ol||A_(gn)||console.warn("Please gsap.registerPlugin(Observer)"),_a||w_();var r=n.tolerance,s=n.dragMinimum,a=n.type,o=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,d=n.onStop,h=n.onStopDelay,f=n.ignore,m=n.wheelSpeed,_=n.event,p=n.onDragStart,g=n.onDragEnd,v=n.onDrag,b=n.onPress,S=n.onRelease,A=n.onRight,E=n.onLeft,T=n.onUp,x=n.onDown,w=n.onChangeX,R=n.onChangeY,P=n.onChange,I=n.onToggleX,G=n.onToggleY,V=n.onHover,N=n.onHoverEnd,B=n.onMove,O=n.ignoreCheck,Y=n.isNormalizer,ee=n.onGestureStart,D=n.onGestureEnd,pe=n.onWheel,Ee=n.onEnable,qe=n.onDisable,ke=n.onClick,Le=n.scrollSpeed,J=n.capture,le=n.allowClicks,ae=n.lockAxis,Ce=n.onLockAxis;this.target=o=zn(o)||Hr,this.vars=n,f&&(f=gn.utils.toArray(f)),r=r||1e-9,s=s||0,m=m||1,Le=Le||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(ri.getComputedStyle(ma).lineHeight)||22);var Be,Pe,nt,Te,Ve,Qe,ze,X=this,lt=0,Ot=0,U=n.passive||!u&&n.passive!==!1,Ye=Zr(o,Bn),Xe=Zr(o,an),ct=Ye(),me=Xe(),Je=~a.indexOf("touch")&&!~a.indexOf("pointer")&&wi[0]==="pointerdown",C=go(o),y=o.ownerDocument||Vr,k=[0,0,0],K=[0,0,0],te=0,fe=function(){return te=_o()},ie=function(he,Oe){return(X.event=he)&&f&&Lx(he.target,f)||Oe&&Je&&he.pointerType!=="touch"||O&&O(he,Oe)},j=function(){X._vx.reset(),X._vy.reset(),Pe.pause(),d&&d(X)},Q=function(){var he=X.deltaX=Ad(k),Oe=X.deltaY=Ad(K),re=Math.abs(he)>=r,Fe=Math.abs(Oe)>=r;P&&(re||Fe)&&P(X,he,Oe,k,K),re&&(A&&X.deltaX>0&&A(X),E&&X.deltaX<0&&E(X),w&&w(X),I&&X.deltaX<0!=lt<0&&I(X),lt=X.deltaX,k[0]=k[1]=k[2]=0),Fe&&(x&&X.deltaY>0&&x(X),T&&X.deltaY<0&&T(X),R&&R(X),G&&X.deltaY<0!=Ot<0&&G(X),Ot=X.deltaY,K[0]=K[1]=K[2]=0),(Te||nt)&&(B&&B(X),nt&&(p&&nt===1&&p(X),v&&v(X),nt=0),Te=!1),Qe&&!(Qe=!1)&&Ce&&Ce(X),Ve&&(pe(X),Ve=!1),Be=0},ge=function(he,Oe,re){k[re]+=he,K[re]+=Oe,X._vx.update(he),X._vy.update(Oe),c?Be||(Be=requestAnimationFrame(Q)):Q()},Me=function(he,Oe){ae&&!ze&&(X.axis=ze=Math.abs(he)>Math.abs(Oe)?"x":"y",Qe=!0),ze!=="y"&&(k[2]+=he,X._vx.update(he,!0)),ze!=="x"&&(K[2]+=Oe,X._vy.update(Oe,!0)),c?Be||(Be=requestAnimationFrame(Q)):Q()},de=function(he){if(!ie(he,1)){he=Xa(he,u);var Oe=he.clientX,re=he.clientY,Fe=Oe-X.x,De=re-X.y,Ge=X.isDragging;X.x=Oe,X.y=re,(Ge||(Fe||De)&&(Math.abs(X.startX-Oe)>=s||Math.abs(X.startY-re)>=s))&&(nt||(nt=Ge?2:1),Ge||(X.isDragging=!0),Me(Fe,De))}},ce=X.onPress=function(se){ie(se,1)||se&&se.button||(X.axis=ze=null,Pe.pause(),X.isPressed=!0,se=Xa(se),lt=Ot=0,X.startX=X.x=se.clientX,X.startY=X.y=se.clientY,X._vx.reset(),X._vy.reset(),Ln(Y?o:y,wi[1],de,U,!0),X.deltaX=X.deltaY=0,b&&b(X))},_e=X.onRelease=function(se){if(!ie(se,1)){In(Y?o:y,wi[1],de,!0);var he=!isNaN(X.y-X.startY),Oe=X.isDragging,re=Oe&&(Math.abs(X.x-X.startX)>3||Math.abs(X.y-X.startY)>3),Fe=Xa(se);!re&&he&&(X._vx.reset(),X._vy.reset(),u&&le&&gn.delayedCall(.08,function(){if(_o()-te>300&&!se.defaultPrevented){if(se.target.click)se.target.click();else if(y.createEvent){var De=y.createEvent("MouseEvents");De.initMouseEvent("click",!0,!0,ri,1,Fe.screenX,Fe.screenY,Fe.clientX,Fe.clientY,!1,!1,!1,!1,0,null),se.target.dispatchEvent(De)}}})),X.isDragging=X.isGesturing=X.isPressed=!1,d&&Oe&&!Y&&Pe.restart(!0),nt&&Q(),g&&Oe&&g(X),S&&S(X,re)}},He=function(he){return he.touches&&he.touches.length>1&&(X.isGesturing=!0)&&ee(he,X.isDragging)},$e=function(){return(X.isGesturing=!1)||D(X)},L=function(he){if(!ie(he)){var Oe=Ye(),re=Xe();ge((Oe-ct)*Le,(re-me)*Le,1),ct=Oe,me=re,d&&Pe.restart(!0)}},oe=function(he){if(!ie(he)){he=Xa(he,u),pe&&(Ve=!0);var Oe=(he.deltaMode===1?l:he.deltaMode===2?ri.innerHeight:1)*m;ge(he.deltaX*Oe,he.deltaY*Oe,0),d&&!Y&&Pe.restart(!0)}},Z=function(he){if(!ie(he)){var Oe=he.clientX,re=he.clientY,Fe=Oe-X.x,De=re-X.y;X.x=Oe,X.y=re,Te=!0,d&&Pe.restart(!0),(Fe||De)&&Me(Fe,De)}},xe=function(he){X.event=he,V(X)},ue=function(he){X.event=he,N(X)},ne=function(he){return ie(he)||Xa(he,u)&&ke(X)};Pe=X._dc=gn.delayedCall(h||.25,j).pause(),X.deltaX=X.deltaY=0,X._vx=Qu(0,50,!0),X._vy=Qu(0,50,!0),X.scrollX=Ye,X.scrollY=Xe,X.isDragging=X.isGesturing=X.isPressed=!1,M_(this),X.enable=function(se){return X.isEnabled||(Ln(C?y:o,"scroll",Ju),a.indexOf("scroll")>=0&&Ln(C?y:o,"scroll",L,U,J),a.indexOf("wheel")>=0&&Ln(o,"wheel",oe,U,J),(a.indexOf("touch")>=0&&S_||a.indexOf("pointer")>=0)&&(Ln(o,wi[0],ce,U,J),Ln(y,wi[2],_e),Ln(y,wi[3],_e),le&&Ln(o,"click",fe,!0,!0),ke&&Ln(o,"click",ne),ee&&Ln(y,"gesturestart",He),D&&Ln(y,"gestureend",$e),V&&Ln(o,us+"enter",xe),N&&Ln(o,us+"leave",ue),B&&Ln(o,us+"move",Z)),X.isEnabled=!0,X.isDragging=X.isGesturing=X.isPressed=Te=nt=!1,X._vx.reset(),X._vy.reset(),ct=Ye(),me=Xe(),se&&se.type&&ce(se),Ee&&Ee(X)),X},X.disable=function(){X.isEnabled&&(ha.filter(function(se){return se!==X&&go(se.target)}).length||In(C?y:o,"scroll",Ju),X.isPressed&&(X._vx.reset(),X._vy.reset(),In(Y?o:y,wi[1],de,!0)),In(C?y:o,"scroll",L,J),In(o,"wheel",oe,J),In(o,wi[0],ce,J),In(y,wi[2],_e),In(y,wi[3],_e),In(o,"click",fe,!0),In(o,"click",ne),In(y,"gesturestart",He),In(y,"gestureend",$e),In(o,us+"enter",xe),In(o,us+"leave",ue),In(o,us+"move",Z),X.isEnabled=X.isPressed=X.isDragging=!1,qe&&qe(X))},X.kill=X.revert=function(){X.disable();var se=ha.indexOf(X);se>=0&&ha.splice(se,1),ur===X&&(ur=0)},ha.push(X),Y&&go(o)&&(ur=X),X.enable(_)},Dx(i,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),i})();Yt.version="3.15.0";Yt.create=function(i){return new Yt(i)};Yt.register=A_;Yt.getAll=function(){return ha.slice()};Yt.getById=function(i){return ha.filter(function(e){return e.vars.id===i})[0]};E_()&&gn.registerPlugin(Yt);var Re,oa,at,vt,ni,gt,Sf,ic,Uo,vo,no,Qo,En,Ec,eh,On,Cd,Rd,la,C_,Wc,R_,Un,th,P_,D_,Or,nh,bf,ga,Mf,xo,ih,Xc,el=1,Tn=Date.now,qc=Tn(),yi=0,io=0,Pd=function(e,t,n){var r=ei(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=r,r?e.substr(6,e.length-7):e},Dd=function(e,t){return t&&(!ei(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},Nx=function i(){return io&&requestAnimationFrame(i)},Id=function(){return Ec=1},Ld=function(){return Ec=0},Oi=function(e){return e},ro=function(e){return Math.round(e*1e5)/1e5||0},I_=function(){return typeof window<"u"},L_=function(){return Re||I_()&&(Re=window.gsap)&&Re.registerPlugin&&Re},Rs=function(e){return!!~Sf.indexOf(e)},N_=function(e){return(e==="Height"?Mf:at["inner"+e])||ni["client"+e]||gt["client"+e]},U_=function(e){return $r(e,"getBoundingClientRect")||(Rs(e)?function(){return Vl.width=at.innerWidth,Vl.height=Mf,Vl}:function(){return lr(e)})},Ux=function(e,t,n){var r=n.d,s=n.d2,a=n.a;return(a=$r(e,"getBoundingClientRect"))?function(){return a()[r]}:function(){return(t?N_(s):e["client"+s])||0}},Ox=function(e,t){return!t||~Wi.indexOf(e)?U_(e):function(){return Vl}},Vi=function(e,t){var n=t.s,r=t.d2,s=t.d,a=t.a;return Math.max(0,(n="scroll"+r)&&(a=$r(e,n))?a()-U_(e)()[s]:Rs(e)?(ni[n]||gt[n])-N_(r):e[n]-e["offset"+r])},tl=function(e,t){for(var n=0;n<la.length;n+=3)(!t||~t.indexOf(la[n+1]))&&e(la[n],la[n+1],la[n+2])},ei=function(e){return typeof e=="string"},An=function(e){return typeof e=="function"},so=function(e){return typeof e=="number"},hs=function(e){return typeof e=="object"},qa=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},Gs=function(e,t,n){if(e.enabled){var r=e._ctx?e._ctx.add(function(){return t(e,n)}):t(e,n);r&&r.totalTime&&(e.callbackAnimation=r)}},Ws=Math.abs,O_="left",F_="top",Ef="right",Tf="bottom",Ms="width",Es="height",yo="Right",So="Left",bo="Top",Mo="Bottom",tn="padding",mi="margin",Pa="Width",wf="Height",sn="px",_i=function(e){return at.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},Fx=function(e){var t=_i(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Nd=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},lr=function(e,t){var n=t&&_i(e)[eh]!=="matrix(1, 0, 0, 1, 0, 0)"&&Re.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),r},rc=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},B_=function(e){var t=[],n=e.labels,r=e.duration(),s;for(s in n)t.push(n[s]/r);return t},Bx=function(e){return function(t){return Re.utils.snap(B_(e),t)}},Af=function(e){var t=Re.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(r,s){return r-s});return n?function(r,s,a){a===void 0&&(a=.001);var o;if(!s)return t(r);if(s>0){for(r-=a,o=0;o<n.length;o++)if(n[o]>=r)return n[o];return n[o-1]}else for(o=n.length,r+=a;o--;)if(n[o]<=r)return n[o];return n[0]}:function(r,s,a){a===void 0&&(a=.001);var o=t(r);return!s||Math.abs(o-r)<a||o-r<0==s<0?o:t(s<0?r-e:r+e)}},kx=function(e){return function(t,n){return Af(B_(e))(t,n.direction)}},nl=function(e,t,n,r){return n.split(",").forEach(function(s){return e(t,s,r)})},mn=function(e,t,n,r,s){return e.addEventListener(t,n,{passive:!r,capture:!!s})},pn=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},il=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},Ud={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},rl={toggleActions:"play",anticipatePin:0},sc={top:0,left:0,center:.5,bottom:1,right:1},Fl=function(e,t){if(ei(e)){var n=e.indexOf("="),r=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(r*=t/100),e=e.substr(0,n-1)),e=r+(e in sc?sc[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},sl=function(e,t,n,r,s,a,o,l){var c=s.startColor,u=s.endColor,d=s.fontSize,h=s.indent,f=s.fontWeight,m=vt.createElement("div"),_=Rs(n)||$r(n,"pinType")==="fixed",p=e.indexOf("scroller")!==-1,g=_?gt:n.tagName==="IFRAME"?n.contentDocument.body:n,v=e.indexOf("start")!==-1,b=v?c:u,S="border-color:"+b+";font-size:"+d+";color:"+b+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return S+="position:"+((p||l)&&_?"fixed;":"absolute;"),(p||l||!_)&&(S+=(r===an?Ef:Tf)+":"+(a+parseFloat(h))+"px;"),o&&(S+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),m._isStart=v,m.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),m.style.cssText=S,m.innerText=t||t===0?e+"-"+t:e,g.children[0]?g.insertBefore(m,g.children[0]):g.appendChild(m),m._offset=m["offset"+r.op.d2],Bl(m,0,r,v),m},Bl=function(e,t,n,r){var s={display:"block"},a=n[r?"os2":"p2"],o=n[r?"p2":"os2"];e._isFlipped=r,s[n.a+"Percent"]=r?-100:0,s[n.a]=r?"1px":0,s["border"+a+Pa]=1,s["border"+o+Pa]=0,s[n.p]=t+"px",Re.set(e,s)},rt=[],rh={},Oo,Od=function(){return Tn()-yi>34&&(Oo||(Oo=requestAnimationFrame(fr)))},Xs=function(){(!Un||!Un.isPressed||Un.startX>gt.clientWidth)&&(ot.cache++,Un?Oo||(Oo=requestAnimationFrame(fr)):fr(),yi||Ds("scrollStart"),yi=Tn())},$c=function(){D_=at.innerWidth,P_=at.innerHeight},ao=function(e){ot.cache++,(e===!0||!En&&!R_&&!vt.fullscreenElement&&!vt.webkitFullscreenElement&&(!th||D_!==at.innerWidth||Math.abs(at.innerHeight-P_)>at.innerHeight*.25))&&ic.restart(!0)},Ps={},zx=[],k_=function i(){return pn(Ze,"scrollEnd",i)||_s(!0)},Ds=function(e){return Ps[e]&&Ps[e].map(function(t){return t()})||zx},Qn=[],z_=function(e){for(var t=0;t<Qn.length;t+=5)(!e||Qn[t+4]&&Qn[t+4].query===e)&&(Qn[t].style.cssText=Qn[t+1],Qn[t].getBBox&&Qn[t].setAttribute("transform",Qn[t+2]||""),Qn[t+3].uncache=1)},V_=function(){return ot.forEach(function(e){return An(e)&&++e.cacheID&&(e.rec=e())})},Cf=function(e,t){var n;for(On=0;On<rt.length;On++)n=rt[On],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));xo=!0,t&&z_(t),t||Ds("revert")},H_=function(e,t){ot.cache++,(t||!Fn)&&ot.forEach(function(n){return An(n)&&n.cacheID++&&(n.rec=0)}),ei(e)&&(at.history.scrollRestoration=bf=e)},Fn,Ts=0,Fd,Vx=function(){if(Fd!==Ts){var e=Fd=Ts;requestAnimationFrame(function(){return e===Ts&&_s(!0)})}},G_=function(){gt.appendChild(ga),Mf=!Un&&ga.offsetHeight||at.innerHeight,gt.removeChild(ga)},Bd=function(e){return Uo(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},_s=function(e,t){if(ni=vt.documentElement,gt=vt.body,Sf=[at,vt,ni,gt],yi&&!e&&!xo){mn(Ze,"scrollEnd",k_);return}G_(),Fn=Ze.isRefreshing=!0,xo||V_();var n=Ds("refreshInit");C_&&Ze.sort(),t||Cf(),ot.forEach(function(r){An(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),rt.slice(0).forEach(function(r){return r.refresh()}),xo=!1,rt.forEach(function(r){if(r._subPinOffset&&r.pin){var s=r.vars.horizontal?"offsetWidth":"offsetHeight",a=r.pin[s];r.revert(!0,1),r.adjustPinSpacing(r.pin[s]-a),r.refresh()}}),ih=1,Bd(!0),rt.forEach(function(r){var s=Vi(r.scroller,r._dir),a=r.vars.end==="max"||r._endClamp&&r.end>s,o=r._startClamp&&r.start>=s;(a||o)&&r.setPositions(o?s-1:r.start,a?Math.max(o?s:r.start+1,s):r.end,!0)}),Bd(!1),ih=0,n.forEach(function(r){return r&&r.render&&r.render(-1)}),ot.forEach(function(r){An(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),H_(bf,1),ic.pause(),Ts++,Fn=2,fr(2),rt.forEach(function(r){return An(r.vars.onRefresh)&&r.vars.onRefresh(r)}),Fn=Ze.isRefreshing=!1,Ds("refresh")},sh=0,kl=1,Eo,fr=function(e){if(e===2||!Fn&&!xo){Ze.isUpdating=!0,Eo&&Eo.update(0);var t=rt.length,n=Tn(),r=n-qc>=50,s=t&&rt[0].scroll();if(kl=sh>s?-1:1,Fn||(sh=s),r&&(yi&&!Ec&&n-yi>200&&(yi=0,Ds("scrollEnd")),no=qc,qc=n),kl<0){for(On=t;On-- >0;)rt[On]&&rt[On].update(0,r);kl=1}else for(On=0;On<t;On++)rt[On]&&rt[On].update(0,r);Ze.isUpdating=!1}Oo=0},ah=[O_,F_,Tf,Ef,mi+Mo,mi+yo,mi+bo,mi+So,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],zl=ah.concat([Ms,Es,"boxSizing","max"+Pa,"max"+wf,"position",mi,tn,tn+bo,tn+yo,tn+Mo,tn+So]),Hx=function(e,t,n){va(n);var r=e._gsap;if(r.spacerIsNative)va(r.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},jc=function(e,t,n,r){if(!e._gsap.swappedIn){for(var s=ah.length,a=t.style,o=e.style,l;s--;)l=ah[s],a[l]=n[l];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[Tf]=o[Ef]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[Ms]=rc(e,Bn)+sn,a[Es]=rc(e,an)+sn,a[tn]=o[mi]=o[F_]=o[O_]="0",va(r),o[Ms]=o["max"+Pa]=n[Ms],o[Es]=o["max"+wf]=n[Es],o[tn]=n[tn],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},Gx=/([A-Z])/g,va=function(e){if(e){var t=e.t.style,n=e.length,r=0,s,a;for((e.t._gsap||Re.core.getCache(e.t)).uncache=1;r<n;r+=2)a=e[r+1],s=e[r],a?t[s]=a:t[s]&&t.removeProperty(s.replace(Gx,"-$1").toLowerCase())}},al=function(e){for(var t=zl.length,n=e.style,r=[],s=0;s<t;s++)r.push(zl[s],n[zl[s]]);return r.t=e,r},Wx=function(e,t,n){for(var r=[],s=e.length,a=n?8:0,o;a<s;a+=2)o=e[a],r.push(o,o in t?t[o]:e[a+1]);return r.t=e.t,r},Vl={left:0,top:0},kd=function(e,t,n,r,s,a,o,l,c,u,d,h,f,m){An(e)&&(e=e(l)),ei(e)&&e.substr(0,3)==="max"&&(e=h+(e.charAt(4)==="="?Fl("0"+e.substr(3),n):0));var _=f?f.time():0,p,g,v;if(f&&f.seek(0),isNaN(e)||(e=+e),so(e))f&&(e=Re.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,h,e)),o&&Bl(o,n,r,!0);else{An(t)&&(t=t(l));var b=(e||"0").split(" "),S,A,E,T;v=zn(t,l)||gt,S=lr(v)||{},(!S||!S.left&&!S.top)&&_i(v).display==="none"&&(T=v.style.display,v.style.display="block",S=lr(v),T?v.style.display=T:v.style.removeProperty("display")),A=Fl(b[0],S[r.d]),E=Fl(b[1]||"0",n),e=S[r.p]-c[r.p]-u+A+s-E,o&&Bl(o,E,r,n-E<20||o._isStart&&E>20),n-=n-E}if(m&&(l[m]=e||-.001,e<0&&(e=0)),a){var x=e+n,w=a._isStart;p="scroll"+r.d2,Bl(a,x,r,w&&x>20||!w&&(d?Math.max(gt[p],ni[p]):a.parentNode[p])<=x+1),d&&(c=lr(o),d&&(a.style[r.op.p]=c[r.op.p]-r.op.m-a._offset+sn))}return f&&v&&(p=lr(v),f.seek(h),g=lr(v),f._caScrollDist=p[r.p]-g[r.p],e=e/f._caScrollDist*h),f&&f.seek(_),f?e:Math.round(e)},Xx=/(webkit|moz|length|cssText|inset)/i,zd=function(e,t,n,r){if(e.parentNode!==t){var s=e.style,a,o;if(t===gt){e._stOrig=s.cssText,o=_i(e);for(a in o)!+a&&!Xx.test(a)&&o[a]&&typeof s[a]=="string"&&a!=="0"&&(s[a]=o[a]);s.top=n,s.left=r}else s.cssText=e._stOrig;Re.core.getCache(e).uncache=1,t.appendChild(e)}},W_=function(e,t,n){var r=t,s=r;return function(a){var o=Math.round(e());return o!==r&&o!==s&&Math.abs(o-r)>3&&Math.abs(o-s)>3&&(a=o,n&&n()),s=r,r=Math.round(a),r}},ol=function(e,t,n){var r={};r[t.p]="+="+n,Re.set(e,r)},Vd=function(e,t){var n=Zr(e,t),r="_scroll"+t.p2,s=function a(o,l,c,u,d){var h=a.tween,f=l.onComplete,m={};c=c||n();var _=W_(n,c,function(){h.kill(),a.tween=0});return d=u&&d||0,u=u||o-c,h&&h.kill(),l[r]=o,l.inherit=!1,l.modifiers=m,m[r]=function(){return _(c+u*h.ratio+d*h.ratio*h.ratio)},l.onUpdate=function(){ot.cache++,a.tween&&fr()},l.onComplete=function(){a.tween=0,f&&f.call(h)},h=a.tween=Re.to(e,l),h};return e[r]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},mn(e,"wheel",n.wheelHandler),Ze.isTouch&&mn(e,"touchmove",n.wheelHandler),s},Ze=(function(){function i(t,n){oa||i.register(Re)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),nh(this),this.init(t,n)}var e=i.prototype;return e.init=function(n,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!io){this.update=this.refresh=this.kill=Oi;return}n=Nd(ei(n)||so(n)||n.nodeType?{trigger:n}:n,rl);var s=n,a=s.onUpdate,o=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,d=s.scrub,h=s.trigger,f=s.pin,m=s.pinSpacing,_=s.invalidateOnRefresh,p=s.anticipatePin,g=s.onScrubComplete,v=s.onSnapComplete,b=s.once,S=s.snap,A=s.pinReparent,E=s.pinSpacer,T=s.containerAnimation,x=s.fastScrollEnd,w=s.preventOverlaps,R=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Bn:an,P=!d&&d!==0,I=zn(n.scroller||at),G=Re.core.getCache(I),V=Rs(I),N=("pinType"in n?n.pinType:$r(I,"pinType")||V&&"fixed")==="fixed",B=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],O=P&&n.toggleActions.split(" "),Y="markers"in n?n.markers:rl.markers,ee=V?0:parseFloat(_i(I)["border"+R.p2+Pa])||0,D=this,pe=n.onRefreshInit&&function(){return n.onRefreshInit(D)},Ee=Ux(I,V,R),qe=Ox(I,V),ke=0,Le=0,J=0,le=Zr(I,R),ae,Ce,Be,Pe,nt,Te,Ve,Qe,ze,X,lt,Ot,U,Ye,Xe,ct,me,Je,C,y,k,K,te,fe,ie,j,Q,ge,Me,de,ce,_e,He,$e,L,oe,Z,xe,ue;if(D._startClamp=D._endClamp=!1,D._dir=R,p*=45,D.scroller=I,D.scroll=T?T.time.bind(T):le,Pe=le(),D.vars=n,r=r||n.animation,"refreshPriority"in n&&(C_=1,n.refreshPriority===-9999&&(Eo=D)),G.tweenScroll=G.tweenScroll||{top:Vd(I,an),left:Vd(I,Bn)},D.tweenTo=ae=G.tweenScroll[R.p],D.scrubDuration=function(re){He=so(re)&&re,He?_e?_e.duration(re):_e=Re.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:He,paused:!0,onComplete:function(){return g&&g(D)}}):(_e&&_e.progress(1).kill(),_e=0)},r&&(r.vars.lazy=!1,r._initted&&!D.isReverted||r.vars.immediateRender!==!1&&n.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),D.animation=r.pause(),r.scrollTrigger=D,D.scrubDuration(d),de=0,l||(l=r.vars.id)),S&&((!hs(S)||S.push)&&(S={snapTo:S}),"scrollBehavior"in gt.style&&Re.set(V?[gt,ni]:I,{scrollBehavior:"auto"}),ot.forEach(function(re){return An(re)&&re.target===(V?vt.scrollingElement||ni:I)&&(re.smooth=!1)}),Be=An(S.snapTo)?S.snapTo:S.snapTo==="labels"?Bx(r):S.snapTo==="labelsDirectional"?kx(r):S.directional!==!1?function(re,Fe){return Af(S.snapTo)(re,Tn()-Le<500?0:Fe.direction)}:Re.utils.snap(S.snapTo),$e=S.duration||{min:.1,max:2},$e=hs($e)?vo($e.min,$e.max):vo($e,$e),L=Re.delayedCall(S.delay||He/2||.1,function(){var re=le(),Fe=Tn()-Le<500,De=ae.tween;if((Fe||Math.abs(D.getVelocity())<10)&&!De&&!Ec&&ke!==re){var Ge=(re-Te)/Ye,Zt=r&&!P?r.totalProgress():Ge,st=Fe?0:(Zt-ce)/(Tn()-no)*1e3||0,It=Re.utils.clamp(-Ge,1-Ge,Ws(st/2)*st/.185),Lt=Ge+(S.inertia===!1?0:It),Ct,bt,_t=S,yn=_t.onStart,Rt=_t.onInterrupt,un=_t.onComplete;if(Ct=Be(Lt,D),so(Ct)||(Ct=Lt),bt=Math.max(0,Math.round(Te+Ct*Ye)),re<=Ve&&re>=Te&&bt!==re){if(De&&!De._initted&&De.data<=Ws(bt-re))return;S.inertia===!1&&(It=Ct-Ge),ae(bt,{duration:$e(Ws(Math.max(Ws(Lt-Zt),Ws(Ct-Zt))*.185/st/.05||0)),ease:S.ease||"power3",data:Ws(bt-re),onInterrupt:function(){return L.restart(!0)&&Rt&&Gs(D,Rt)},onComplete:function(){D.update(),ke=le(),r&&!P&&(_e?_e.resetTo("totalProgress",Ct,r._tTime/r._tDur):r.progress(Ct)),de=ce=r&&!P?r.totalProgress():D.progress,v&&v(D),un&&Gs(D,un)}},re,It*Ye,bt-re-It*Ye),yn&&Gs(D,yn,ae.tween)}}else D.isActive&&ke!==re&&L.restart(!0)}).pause()),l&&(rh[l]=D),h=D.trigger=zn(h||f!==!0&&f),ue=h&&h._gsap&&h._gsap.stRevert,ue&&(ue=ue(D)),f=f===!0?h:zn(f),ei(o)&&(o={targets:h,className:o}),f&&(m===!1||m===mi||(m=!m&&f.parentNode&&f.parentNode.style&&_i(f.parentNode).display==="flex"?!1:tn),D.pin=f,Ce=Re.core.getCache(f),Ce.spacer?Xe=Ce.pinState:(E&&(E=zn(E),E&&!E.nodeType&&(E=E.current||E.nativeElement),Ce.spacerIsNative=!!E,E&&(Ce.spacerState=al(E))),Ce.spacer=Je=E||vt.createElement("div"),Je.classList.add("pin-spacer"),l&&Je.classList.add("pin-spacer-"+l),Ce.pinState=Xe=al(f)),n.force3D!==!1&&Re.set(f,{force3D:!0}),D.spacer=Je=Ce.spacer,Me=_i(f),fe=Me[m+R.os2],y=Re.getProperty(f),k=Re.quickSetter(f,R.a,sn),jc(f,Je,Me),me=al(f)),Y){Ot=hs(Y)?Nd(Y,Ud):Ud,X=sl("scroller-start",l,I,R,Ot,0),lt=sl("scroller-end",l,I,R,Ot,0,X),C=X["offset"+R.op.d2];var ne=zn($r(I,"content")||I);Qe=this.markerStart=sl("start",l,ne,R,Ot,C,0,T),ze=this.markerEnd=sl("end",l,ne,R,Ot,C,0,T),T&&(xe=Re.quickSetter([Qe,ze],R.a,sn)),!N&&!(Wi.length&&$r(I,"fixedMarkers")===!0)&&(Fx(V?gt:I),Re.set([X,lt],{force3D:!0}),j=Re.quickSetter(X,R.a,sn),ge=Re.quickSetter(lt,R.a,sn))}if(T){var se=T.vars.onUpdate,he=T.vars.onUpdateParams;T.eventCallback("onUpdate",function(){D.update(0,0,1),se&&se.apply(T,he||[])})}if(D.previous=function(){return rt[rt.indexOf(D)-1]},D.next=function(){return rt[rt.indexOf(D)+1]},D.revert=function(re,Fe){if(!Fe)return D.kill(!0);var De=re!==!1||!D.enabled,Ge=En;De!==D.isReverted&&(De&&(oe=Math.max(le(),D.scroll.rec||0),J=D.progress,Z=r&&r.progress()),Qe&&[Qe,ze,X,lt].forEach(function(Zt){return Zt.style.display=De?"none":"block"}),De&&(En=D,D.update(De)),f&&(!A||!D.isActive)&&(De?Hx(f,Je,Xe):jc(f,Je,_i(f),ie)),De||D.update(De),En=Ge,D.isReverted=De)},D.refresh=function(re,Fe,De,Ge){if(!((En||!D.enabled)&&!Fe)){if(f&&re&&yi){mn(i,"scrollEnd",k_);return}!Fn&&pe&&pe(D),En=D,ae.tween&&!De&&(ae.tween.kill(),ae.tween=0),_e&&_e.pause(),_&&r&&(r.revert({kill:!1}).invalidate(),r.getChildren?r.getChildren(!0,!0,!1).forEach(function(ye){return ye.vars.immediateRender&&ye.render(0,!0,!0)}):r.vars.immediateRender&&r.render(0,!0,!0)),D.isReverted||D.revert(!0,!0),D._subPinOffset=!1;var Zt=Ee(),st=qe(),It=T?T.duration():Vi(I,R),Lt=Ye<=.01||!Ye,Ct=0,bt=Ge||0,_t=hs(De)?De.end:n.end,yn=n.endTrigger||h,Rt=hs(De)?De.start:n.start||(n.start===0||!h?0:f?"0 0":"0 100%"),un=D.pinnedContainer=n.pinnedContainer&&zn(n.pinnedContainer,D),Yn=h&&Math.max(0,rt.indexOf(D))||0,Jt=Yn,rn,hn,Qi,ks,fn,Wt,hi,M,F,q,z,H,ve;for(Y&&hs(De)&&(H=Re.getProperty(X,R.p),ve=Re.getProperty(lt,R.p));Jt-- >0;)Wt=rt[Jt],Wt.end||Wt.refresh(0,1)||(En=D),hi=Wt.pin,hi&&(hi===h||hi===f||hi===un)&&!Wt.isReverted&&(q||(q=[]),q.unshift(Wt),Wt.revert(!0,!0)),Wt!==rt[Jt]&&(Yn--,Jt--);for(An(Rt)&&(Rt=Rt(D)),Rt=Pd(Rt,"start",D),Te=kd(Rt,h,Zt,R,le(),Qe,X,D,st,ee,N,It,T,D._startClamp&&"_startClamp")||(f?-.001:0),An(_t)&&(_t=_t(D)),ei(_t)&&!_t.indexOf("+=")&&(~_t.indexOf(" ")?_t=(ei(Rt)?Rt.split(" ")[0]:"")+_t:(Ct=Fl(_t.substr(2),Zt),_t=ei(Rt)?Rt:(T?Re.utils.mapRange(0,T.duration(),T.scrollTrigger.start,T.scrollTrigger.end,Te):Te)+Ct,yn=h)),_t=Pd(_t,"end",D),Ve=Math.max(Te,kd(_t||(yn?"100% 0":It),yn,Zt,R,le()+Ct,ze,lt,D,st,ee,N,It,T,D._endClamp&&"_endClamp"))||-.001,Ct=0,Jt=Yn;Jt--;)Wt=rt[Jt]||{},hi=Wt.pin,hi&&Wt.start-Wt._pinPush<=Te&&!T&&Wt.end>0&&(rn=Wt.end-(D._startClamp?Math.max(0,Wt.start):Wt.start),(hi===h&&Wt.start-Wt._pinPush<Te||hi===un)&&isNaN(Rt)&&(Ct+=rn*(1-Wt.progress)),hi===f&&(bt+=rn));if(Te+=Ct,Ve+=Ct,D._startClamp&&(D._startClamp+=Ct),D._endClamp&&!Fn&&(D._endClamp=Ve||-.001,Ve=Math.min(Ve,Vi(I,R))),Ye=Ve-Te||(Te-=.01)&&.001,Lt&&(J=Re.utils.clamp(0,1,Re.utils.normalize(Te,Ve,oe))),D._pinPush=bt,Qe&&Ct&&(rn={},rn[R.a]="+="+Ct,un&&(rn[R.p]="-="+le()),Re.set([Qe,ze],rn)),f&&!(ih&&D.end>=Vi(I,R)))rn=_i(f),ks=R===an,Qi=le(),K=parseFloat(y(R.a))+bt,!It&&Ve>1&&(z=(V?vt.scrollingElement||ni:I).style,z={style:z,value:z["overflow"+R.a.toUpperCase()]},V&&_i(gt)["overflow"+R.a.toUpperCase()]!=="scroll"&&(z.style["overflow"+R.a.toUpperCase()]="scroll")),jc(f,Je,rn),me=al(f),hn=lr(f,!0),M=N&&Zr(I,ks?Bn:an)(),m?(ie=[m+R.os2,Ye+bt+sn],ie.t=Je,Jt=m===tn?rc(f,R)+Ye+bt:0,Jt&&(ie.push(R.d,Jt+sn),Je.style.flexBasis!=="auto"&&(Je.style.flexBasis=Jt+sn)),va(ie),un&&rt.forEach(function(ye){ye.pin===un&&ye.vars.pinSpacing!==!1&&(ye._subPinOffset=!0)}),N&&le(oe)):(Jt=rc(f,R),Jt&&Je.style.flexBasis!=="auto"&&(Je.style.flexBasis=Jt+sn)),N&&(fn={top:hn.top+(ks?Qi-Te:M)+sn,left:hn.left+(ks?M:Qi-Te)+sn,boxSizing:"border-box",position:"fixed"},fn[Ms]=fn["max"+Pa]=Math.ceil(hn.width)+sn,fn[Es]=fn["max"+wf]=Math.ceil(hn.height)+sn,fn[mi]=fn[mi+bo]=fn[mi+yo]=fn[mi+Mo]=fn[mi+So]="0",fn[tn]=rn[tn],fn[tn+bo]=rn[tn+bo],fn[tn+yo]=rn[tn+yo],fn[tn+Mo]=rn[tn+Mo],fn[tn+So]=rn[tn+So],ct=Wx(Xe,fn,A),Fn&&le(0)),r?(F=r._initted,Wc(1),r.render(r.duration(),!0,!0),te=y(R.a)-K+Ye+bt,Q=Math.abs(Ye-te)>1,N&&Q&&ct.splice(ct.length-2,2),r.render(0,!0,!0),F||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),Wc(0)):te=Ye,z&&(z.value?z.style["overflow"+R.a.toUpperCase()]=z.value:z.style.removeProperty("overflow-"+R.a));else if(h&&le()&&!T)for(hn=h.parentNode;hn&&hn!==gt;)hn._pinOffset&&(Te-=hn._pinOffset,Ve-=hn._pinOffset),hn=hn.parentNode;q&&q.forEach(function(ye){return ye.revert(!1,!0)}),D.start=Te,D.end=Ve,Pe=nt=Fn?oe:le(),!T&&!Fn&&(Pe<oe&&le(oe),D.scroll.rec=0),D.revert(!1,!0),Le=Tn(),L&&(ke=-1,L.restart(!0)),En=0,r&&P&&(r._initted||Z)&&r.progress()!==Z&&r.progress(Z||0,!0).render(r.time(),!0,!0),(Lt||J!==D.progress||T||_||r&&!r._initted)&&(r&&!P&&(r._initted||J||r.vars.immediateRender!==!1)&&r.totalProgress(T&&Te<-.001&&!J?Re.utils.normalize(Te,Ve,0):J,!0),D.progress=Lt||(Pe-Te)/Ye===J?0:J),f&&m&&(Je._pinOffset=Math.round(D.progress*te)),_e&&_e.invalidate(),isNaN(H)||(H-=Re.getProperty(X,R.p),ve-=Re.getProperty(lt,R.p),ol(X,R,H),ol(Qe,R,H-(Ge||0)),ol(lt,R,ve),ol(ze,R,ve-(Ge||0))),Lt&&!Fn&&D.update(),u&&!Fn&&!U&&(U=!0,u(D),U=!1)}},D.getVelocity=function(){return(le()-nt)/(Tn()-no)*1e3||0},D.endAnimation=function(){qa(D.callbackAnimation),r&&(_e?_e.progress(1):r.paused()?P||qa(r,D.direction<0,1):qa(r,r.reversed()))},D.labelToScroll=function(re){return r&&r.labels&&(Te||D.refresh()||Te)+r.labels[re]/r.duration()*Ye||0},D.getTrailing=function(re){var Fe=rt.indexOf(D),De=D.direction>0?rt.slice(0,Fe).reverse():rt.slice(Fe+1);return(ei(re)?De.filter(function(Ge){return Ge.vars.preventOverlaps===re}):De).filter(function(Ge){return D.direction>0?Ge.end<=Te:Ge.start>=Ve})},D.update=function(re,Fe,De){if(!(T&&!De&&!re)){var Ge=Fn===!0?oe:D.scroll(),Zt=re?0:(Ge-Te)/Ye,st=Zt<0?0:Zt>1?1:Zt||0,It=D.progress,Lt,Ct,bt,_t,yn,Rt,un,Yn;if(Fe&&(nt=Pe,Pe=T?le():Ge,S&&(ce=de,de=r&&!P?r.totalProgress():st)),p&&f&&!En&&!el&&yi&&(!st&&Te<Ge+(Ge-nt)/(Tn()-no)*p?st=1e-4:st===1&&Ve>Ge+(Ge-nt)/(Tn()-no)*p&&(st=.9999)),st!==It&&D.enabled){if(Lt=D.isActive=!!st&&st<1,Ct=!!It&&It<1,Rt=Lt!==Ct,yn=Rt||!!st!=!!It,D.direction=st>It?1:-1,D.progress=st,yn&&!En&&(bt=st&&!It?0:st===1?1:It===1?2:3,P&&(_t=!Rt&&O[bt+1]!=="none"&&O[bt+1]||O[bt],Yn=r&&(_t==="complete"||_t==="reset"||_t in r))),w&&(Rt||Yn)&&(Yn||d||!r)&&(An(w)?w(D):D.getTrailing(w).forEach(function(Qi){return Qi.endAnimation()})),P||(_e&&!En&&!el?(_e._dp._time-_e._start!==_e._time&&_e.render(_e._dp._time-_e._start),_e.resetTo?_e.resetTo("totalProgress",st,r._tTime/r._tDur):(_e.vars.totalProgress=st,_e.invalidate().restart())):r&&r.totalProgress(st,!!(En&&(Le||re)))),f){if(re&&m&&(Je.style[m+R.os2]=fe),!N)k(ro(K+te*st));else if(yn){if(un=!re&&st>It&&Ve+1>Ge&&Ge+1>=Vi(I,R),A)if(!re&&(Lt||un)){var Jt=lr(f,!0),rn=Ge-Te;zd(f,gt,Jt.top+(R===an?rn:0)+sn,Jt.left+(R===an?0:rn)+sn)}else zd(f,Je);va(Lt||un?ct:me),Q&&st<1&&Lt||k(K+(st===1&&!un?te:0))}}S&&!ae.tween&&!En&&!el&&L.restart(!0),o&&(Rt||b&&st&&(st<1||!Xc))&&Uo(o.targets).forEach(function(Qi){return Qi.classList[Lt||b?"add":"remove"](o.className)}),a&&!P&&!re&&a(D),yn&&!En?(P&&(Yn&&(_t==="complete"?r.pause().totalProgress(1):_t==="reset"?r.restart(!0).pause():_t==="restart"?r.restart(!0):r[_t]()),a&&a(D)),(Rt||!Xc)&&(c&&Rt&&Gs(D,c),B[bt]&&Gs(D,B[bt]),b&&(st===1?D.kill(!1,1):B[bt]=0),Rt||(bt=st===1?1:3,B[bt]&&Gs(D,B[bt]))),x&&!Lt&&Math.abs(D.getVelocity())>(so(x)?x:2500)&&(qa(D.callbackAnimation),_e?_e.progress(1):qa(r,_t==="reverse"?1:!st,1))):P&&a&&!En&&a(D)}if(ge){var hn=T?Ge/T.duration()*(T._caScrollDist||0):Ge;j(hn+(X._isFlipped?1:0)),ge(hn)}xe&&xe(-Ge/T.duration()*(T._caScrollDist||0))}},D.enable=function(re,Fe){D.enabled||(D.enabled=!0,mn(I,"resize",ao),V||mn(I,"scroll",Xs),pe&&mn(i,"refreshInit",pe),re!==!1&&(D.progress=J=0,Pe=nt=ke=le()),Fe!==!1&&D.refresh())},D.getTween=function(re){return re&&ae?ae.tween:_e},D.setPositions=function(re,Fe,De,Ge){if(T){var Zt=T.scrollTrigger,st=T.duration(),It=Zt.end-Zt.start;re=Zt.start+It*re/st,Fe=Zt.start+It*Fe/st}D.refresh(!1,!1,{start:Dd(re,De&&!!D._startClamp),end:Dd(Fe,De&&!!D._endClamp)},Ge),D.update()},D.adjustPinSpacing=function(re){if(ie&&re){var Fe=ie.indexOf(R.d)+1;ie[Fe]=parseFloat(ie[Fe])+re+sn,ie[1]=parseFloat(ie[1])+re+sn,va(ie)}},D.disable=function(re,Fe){if(re!==!1&&D.revert(!0,!0),D.enabled&&(D.enabled=D.isActive=!1,Fe||_e&&_e.pause(),oe=0,Ce&&(Ce.uncache=1),pe&&pn(i,"refreshInit",pe),L&&(L.pause(),ae.tween&&ae.tween.kill()&&(ae.tween=0)),!V)){for(var De=rt.length;De--;)if(rt[De].scroller===I&&rt[De]!==D)return;pn(I,"resize",ao),V||pn(I,"scroll",Xs)}},D.kill=function(re,Fe){D.disable(re,Fe),_e&&!Fe&&_e.kill(),l&&delete rh[l];var De=rt.indexOf(D);De>=0&&rt.splice(De,1),De===On&&kl>0&&On--,De=0,rt.forEach(function(Ge){return Ge.scroller===D.scroller&&(De=1)}),De||Fn||(D.scroll.rec=0),r&&(r.scrollTrigger=null,re&&r.revert({kill:!1}),Fe||r.kill()),Qe&&[Qe,ze,X,lt].forEach(function(Ge){return Ge.parentNode&&Ge.parentNode.removeChild(Ge)}),Eo===D&&(Eo=0),f&&(Ce&&(Ce.uncache=1),De=0,rt.forEach(function(Ge){return Ge.pin===f&&De++}),De||(Ce.spacer=0)),n.onKill&&n.onKill(D)},rt.push(D),D.enable(!1,!1),ue&&ue(D),r&&r.add&&!Ye){var Oe=D.update;D.update=function(){D.update=Oe,ot.cache++,Te||Ve||D.refresh()},Re.delayedCall(.01,D.update),Ye=.01,Te=Ve=0}else D.refresh();f&&Vx()},i.register=function(n){return oa||(Re=n||L_(),I_()&&window.document&&i.enable(),oa=io),oa},i.defaults=function(n){if(n)for(var r in n)rl[r]=n[r];return rl},i.disable=function(n,r){io=0,rt.forEach(function(a){return a[r?"kill":"disable"](n)}),pn(at,"wheel",Xs),pn(vt,"scroll",Xs),clearInterval(Qo),pn(vt,"touchcancel",Oi),pn(gt,"touchstart",Oi),nl(pn,vt,"pointerdown,touchstart,mousedown",Id),nl(pn,vt,"pointerup,touchend,mouseup",Ld),ic.kill(),tl(pn);for(var s=0;s<ot.length;s+=3)il(pn,ot[s],ot[s+1]),il(pn,ot[s],ot[s+2])},i.enable=function(){if(at=window,vt=document,ni=vt.documentElement,gt=vt.body,Re){if(Uo=Re.utils.toArray,vo=Re.utils.clamp,nh=Re.core.context||Oi,Wc=Re.core.suppressOverwrites||Oi,bf=at.history.scrollRestoration||"auto",sh=at.pageYOffset||0,Re.core.globals("ScrollTrigger",i),gt){io=1,ga=document.createElement("div"),ga.style.height="100vh",ga.style.position="absolute",G_(),Nx(),Yt.register(Re),i.isTouch=Yt.isTouch,Or=Yt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),th=Yt.isTouch===1,mn(at,"wheel",Xs),Sf=[at,vt,ni,gt],Re.matchMedia?(i.matchMedia=function(u){var d=Re.matchMedia(),h;for(h in u)d.add(h,u[h]);return d},Re.addEventListener("matchMediaInit",function(){V_(),Cf()}),Re.addEventListener("matchMediaRevert",function(){return z_()}),Re.addEventListener("matchMedia",function(){_s(0,1),Ds("matchMedia")}),Re.matchMedia().add("(orientation: portrait)",function(){return $c(),$c})):console.warn("Requires GSAP 3.11.0 or later"),$c(),mn(vt,"scroll",Xs);var n=gt.hasAttribute("style"),r=gt.style,s=r.borderTopStyle,a=Re.core.Animation.prototype,o,l;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",o=lr(gt),an.m=Math.round(o.top+an.sc())||0,Bn.m=Math.round(o.left+Bn.sc())||0,s?r.borderTopStyle=s:r.removeProperty("border-top-style"),n||(gt.setAttribute("style",""),gt.removeAttribute("style")),Qo=setInterval(Od,250),Re.delayedCall(.5,function(){return el=0}),mn(vt,"touchcancel",Oi),mn(gt,"touchstart",Oi),nl(mn,vt,"pointerdown,touchstart,mousedown",Id),nl(mn,vt,"pointerup,touchend,mouseup",Ld),eh=Re.utils.checkPrefix("transform"),zl.push(eh),oa=Tn(),ic=Re.delayedCall(.2,_s).pause(),la=[vt,"visibilitychange",function(){var u=at.innerWidth,d=at.innerHeight;vt.hidden?(Cd=u,Rd=d):(Cd!==u||Rd!==d)&&ao()},vt,"DOMContentLoaded",_s,at,"load",_s,at,"resize",ao],tl(mn),rt.forEach(function(u){return u.enable(0,1)}),l=0;l<ot.length;l+=3)il(pn,ot[l],ot[l+1]),il(pn,ot[l],ot[l+2])}else if(vt){var c=function u(){i.enable(),vt.removeEventListener("DOMContentLoaded",u)};vt.addEventListener("DOMContentLoaded",c)}}},i.config=function(n){"limitCallbacks"in n&&(Xc=!!n.limitCallbacks);var r=n.syncInterval;r&&clearInterval(Qo)||(Qo=r)&&setInterval(Od,r),"ignoreMobileResize"in n&&(th=i.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(tl(pn)||tl(mn,n.autoRefreshEvents||"none"),R_=(n.autoRefreshEvents+"").indexOf("resize")===-1)},i.scrollerProxy=function(n,r){var s=zn(n),a=ot.indexOf(s),o=Rs(s);~a&&ot.splice(a,o?6:2),r&&(o?Wi.unshift(at,r,gt,r,ni,r):Wi.unshift(s,r))},i.clearMatchMedia=function(n){rt.forEach(function(r){return r._ctx&&r._ctx.query===n&&r._ctx.kill(!0,!0)})},i.isInViewport=function(n,r,s){var a=(ei(n)?zn(n):n).getBoundingClientRect(),o=a[s?Ms:Es]*r||0;return s?a.right-o>0&&a.left+o<at.innerWidth:a.bottom-o>0&&a.top+o<at.innerHeight},i.positionInViewport=function(n,r,s){ei(n)&&(n=zn(n));var a=n.getBoundingClientRect(),o=a[s?Ms:Es],l=r==null?o/2:r in sc?sc[r]*o:~r.indexOf("%")?parseFloat(r)*o/100:parseFloat(r)||0;return s?(a.left+l)/at.innerWidth:(a.top+l)/at.innerHeight},i.killAll=function(n){if(rt.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var r=Ps.killAll||[];Ps={},r.forEach(function(s){return s()})}},i})();Ze.version="3.15.0";Ze.saveStyles=function(i){return i?Uo(i).forEach(function(e){if(e&&e.style){var t=Qn.indexOf(e);t>=0&&Qn.splice(t,5),Qn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Re.core.getCache(e),nh())}}):Qn};Ze.revert=function(i,e){return Cf(!i,e)};Ze.create=function(i,e){return new Ze(i,e)};Ze.refresh=function(i){return i?ao(!0):(oa||Ze.register())&&_s(!0)};Ze.update=function(i){return++ot.cache&&fr(i===!0?2:0)};Ze.clearScrollMemory=H_;Ze.maxScroll=function(i,e){return Vi(i,e?Bn:an)};Ze.getScrollFunc=function(i,e){return Zr(zn(i),e?Bn:an)};Ze.getById=function(i){return rh[i]};Ze.getAll=function(){return rt.filter(function(i){return i.vars.id!=="ScrollSmoother"})};Ze.isScrolling=function(){return!!yi};Ze.snapDirectional=Af;Ze.addEventListener=function(i,e){var t=Ps[i]||(Ps[i]=[]);~t.indexOf(e)||t.push(e)};Ze.removeEventListener=function(i,e){var t=Ps[i],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};Ze.batch=function(i,e){var t=[],n={},r=e.interval||.016,s=e.batchMax||1e9,a=function(c,u){var d=[],h=[],f=Re.delayedCall(r,function(){u(d,h),d=[],h=[]}).pause();return function(m){d.length||f.restart(!0),d.push(m.trigger),h.push(m),s<=d.length&&f.progress(1)}},o;for(o in e)n[o]=o.substr(0,2)==="on"&&An(e[o])&&o!=="onRefreshInit"?a(o,e[o]):e[o];return An(s)&&(s=s(),mn(Ze,"refresh",function(){return s=e.batchMax()})),Uo(i).forEach(function(l){var c={};for(o in n)c[o]=n[o];c.trigger=l,t.push(Ze.create(c))}),t};var Hd=function(e,t,n,r){return t>r?e(r):t<0&&e(0),n>r?(r-t)/(n-t):n<0?t/(t-n):1},Yc=function i(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Yt.isTouch?" pinch-zoom":""):"none",e===ni&&i(gt,t)},ll={auto:1,scroll:1},qx=function(e){var t=e.event,n=e.target,r=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,a=s._gsap||Re.core.getCache(s),o=Tn(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;s&&s!==gt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(ll[(l=_i(s)).overflowY]||ll[l.overflowX]));)s=s.parentNode;a._isScroll=s&&s!==n&&!Rs(s)&&(ll[(l=_i(s)).overflowY]||ll[l.overflowX]),a._isScrollT=o}(a._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},X_=function(e,t,n,r){return Yt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&qx,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return n&&mn(vt,Yt.eventTypes[0],Wd,!1,!0)},onDisable:function(){return pn(vt,Yt.eventTypes[0],Wd,!0)}})},$x=/(input|label|select|textarea)/i,Gd,Wd=function(e){var t=$x.test(e.target.tagName);(t||Gd)&&(e._gsapAllow=!0,Gd=t)},jx=function(e){hs(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,r=t.momentum,s=t.allowNestedScroll,a=t.onRelease,o,l,c=zn(e.target)||ni,u=Re.core.globals().ScrollSmoother,d=u&&u.get(),h=Or&&(e.content&&zn(e.content)||d&&e.content!==!1&&!d.smooth()&&d.content()),f=Zr(c,an),m=Zr(c,Bn),_=1,p=(Yt.isTouch&&at.visualViewport?at.visualViewport.scale*at.visualViewport.width:at.outerWidth)/at.innerWidth,g=0,v=An(r)?function(){return r(o)}:function(){return r||2.8},b,S,A=X_(c,e.type,!0,s),E=function(){return S=!1},T=Oi,x=Oi,w=function(){l=Vi(c,an),x=vo(Or?1:0,l),n&&(T=vo(0,Vi(c,Bn))),b=Ts},R=function(){h._gsap.y=ro(parseFloat(h._gsap.y)+f.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},P=function(){if(S){requestAnimationFrame(E);var Y=ro(o.deltaY/2),ee=x(f.v-Y);if(h&&ee!==f.v+f.offset){f.offset=ee-f.v;var D=ro((parseFloat(h&&h._gsap.y)||0)-f.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+D+", 0, 1)",h._gsap.y=D+"px",f.cacheID=ot.cache,fr()}return!0}f.offset&&R(),S=!0},I,G,V,N,B=function(){w(),I.isActive()&&I.vars.scrollY>l&&(f()>l?I.progress(1)&&f(l):I.resetTo("scrollY",l))};return h&&Re.set(h,{y:"+=0"}),e.ignoreCheck=function(O){return Or&&O.type==="touchmove"&&P()||_>1.05&&O.type!=="touchstart"||o.isGesturing||O.touches&&O.touches.length>1},e.onPress=function(){S=!1;var O=_;_=ro((at.visualViewport&&at.visualViewport.scale||1)/p),I.pause(),O!==_&&Yc(c,_>1.01?!0:n?!1:"x"),G=m(),V=f(),w(),b=Ts},e.onRelease=e.onGestureStart=function(O,Y){if(f.offset&&R(),!Y)N.restart(!0);else{ot.cache++;var ee=v(),D,pe;n&&(D=m(),pe=D+ee*.05*-O.velocityX/.227,ee*=Hd(m,D,pe,Vi(c,Bn)),I.vars.scrollX=T(pe)),D=f(),pe=D+ee*.05*-O.velocityY/.227,ee*=Hd(f,D,pe,Vi(c,an)),I.vars.scrollY=x(pe),I.invalidate().duration(ee).play(.01),(Or&&I.vars.scrollY>=l||D>=l-1)&&Re.to({},{onUpdate:B,duration:ee})}a&&a(O)},e.onWheel=function(){I._ts&&I.pause(),Tn()-g>1e3&&(b=0,g=Tn())},e.onChange=function(O,Y,ee,D,pe){if(Ts!==b&&w(),Y&&n&&m(T(D[2]===Y?G+(O.startX-O.x):m()+Y-D[1])),ee){f.offset&&R();var Ee=pe[2]===ee,qe=Ee?V+O.startY-O.y:f()+ee-pe[1],ke=x(qe);Ee&&qe!==ke&&(V+=ke-qe),f(ke)}(ee||Y)&&fr()},e.onEnable=function(){Yc(c,n?!1:"x"),Ze.addEventListener("refresh",B),mn(at,"resize",B),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=m.smooth=!1),A.enable()},e.onDisable=function(){Yc(c,!0),pn(at,"resize",B),Ze.removeEventListener("refresh",B),A.kill()},e.lockAxis=e.lockAxis!==!1,o=new Yt(e),o.iOS=Or,Or&&!f()&&f(1),Or&&Re.ticker.add(Oi),N=o._dc,I=Re.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:W_(f,f(),function(){return I.pause()})},onUpdate:fr,onComplete:N.vars.onComplete}),o};Ze.sort=function(i){if(An(i))return rt.sort(i);var e=at.pageYOffset||0;return Ze.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+at.innerHeight}),rt.sort(i||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};Ze.observe=function(i){return new Yt(i)};Ze.normalizeScroll=function(i){if(typeof i>"u")return Un;if(i===!0&&Un)return Un.enable();if(i===!1){Un&&Un.kill(),Un=i;return}var e=i instanceof Yt?i:jx(i);return Un&&Un.target===e.target&&Un.kill(),Rs(e.target)&&(Un=e),e};Ze.core={_getVelocityProp:Qu,_inputObserver:X_,_scrollers:ot,_proxies:Wi,bridge:{ss:function(){yi||Ds("scrollStart"),yi=Tn()},ref:function(){return En}}};L_()&&Re.registerPlugin(Ze);Dt.registerPlugin(Ze);let oh=null;function q_(){return oh}function Yx(){const i=At.useRef(null);return At.useEffect(()=>{const e=new uv({duration:2.4,smoothWheel:!0});oh=e,i.current=e,Ze.scrollerProxy(document.documentElement,{scrollTop(n){return arguments.length&&n!==void 0&&e.scrollTo(n,{immediate:!0}),e.scroll},getBoundingClientRect(){return{top:0,left:0,width:window.innerWidth,height:window.innerHeight}},pinType:document.documentElement.style.transform?"transform":"fixed"});const t=n=>e.raf(n*1e3);return Dt.ticker.add(t),Dt.ticker.lagSmoothing(0),()=>{Dt.ticker.remove(t),Ze.clearScrollMemory(),Ze.scrollerProxy(document.documentElement,void 0),e.destroy(),oh=null,i.current=null}},[]),i}const Kx="/assets/portrait-voMbykUa.png";const Rf="184",Zx=0,Xd=1,Jx=2,Hl=1,Qx=2,oo=3,Jr=0,$n=1,cr=2,dr=0,xa=1,qd=2,$d=3,jd=4,ey=5,ds=100,ty=101,ny=102,iy=103,ry=104,sy=200,ay=201,oy=202,ly=203,lh=204,ch=205,cy=206,uy=207,hy=208,fy=209,dy=210,py=211,my=212,_y=213,gy=214,uh=0,hh=1,fh=2,Da=3,dh=4,ph=5,mh=6,_h=7,$_=0,vy=1,xy=2,Xi=0,j_=1,Y_=2,K_=3,Z_=4,J_=5,Q_=6,eg=7,tg=300,Is=301,Ia=302,Kc=303,Zc=304,Tc=306,gh=1e3,hr=1001,vh=1002,vn=1003,yy=1004,cl=1005,Cn=1006,Jc=1007,gs=1008,gi=1009,ng=1010,ig=1011,Fo=1012,Pf=1013,Yi=1014,Hi=1015,vr=1016,Df=1017,If=1018,Bo=1020,rg=35902,sg=35899,ag=1021,og=1022,Ri=1023,xr=1026,vs=1027,lg=1028,Lf=1029,Ls=1030,Nf=1031,Uf=1033,Gl=33776,Wl=33777,Xl=33778,ql=33779,xh=35840,yh=35841,Sh=35842,bh=35843,Mh=36196,Eh=37492,Th=37496,wh=37488,Ah=37489,ac=37490,Ch=37491,Rh=37808,Ph=37809,Dh=37810,Ih=37811,Lh=37812,Nh=37813,Uh=37814,Oh=37815,Fh=37816,Bh=37817,kh=37818,zh=37819,Vh=37820,Hh=37821,Gh=36492,Wh=36494,Xh=36495,qh=36283,$h=36284,oc=36285,jh=36286,Sy=3200,Yd=0,by=1,Fr="",Vn="srgb",lc="srgb-linear",cc="linear",xt="srgb",qs=7680,Kd=519,My=512,Ey=513,Ty=514,Of=515,wy=516,Ay=517,Ff=518,Cy=519,Zd=35044,Jd="300 es",Gi=2e3,uc=2001;function Ry(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ko(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Py(){const i=ko("canvas");return i.style.display="block",i}const Qd={};function ep(...i){const e="THREE."+i.shift();console.log(e,...i)}function cg(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function We(...i){i=cg(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function pt(...i){i=cg(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Yh(...i){const e=i.join(" ");e in Qd||(Qd[e]=!0,We(...i))}function Dy(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const Iy={[uh]:hh,[fh]:mh,[dh]:_h,[Da]:ph,[hh]:uh,[mh]:fh,[_h]:dh,[ph]:Da};class Os{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Qc=Math.PI/180,Kh=180/Math.PI;function Vo(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(bn[i&255]+bn[i>>8&255]+bn[i>>16&255]+bn[i>>24&255]+"-"+bn[e&255]+bn[e>>8&255]+"-"+bn[e>>16&15|64]+bn[e>>24&255]+"-"+bn[t&63|128]+bn[t>>8&255]+"-"+bn[t>>16&255]+bn[t>>24&255]+bn[n&255]+bn[n>>8&255]+bn[n>>16&255]+bn[n>>24&255]).toLowerCase()}function ht(i,e,t){return Math.max(e,Math.min(t,i))}function Ly(i,e){return(i%e+e)%e}function eu(i,e,t){return(1-t)*i+t*e}function $a(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function kn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const ed=class ed{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ht(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ed.prototype.isVector2=!0;let mt=ed;class Va{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],c=n[r+1],u=n[r+2],d=n[r+3],h=s[a+0],f=s[a+1],m=s[a+2],_=s[a+3];if(d!==_||l!==h||c!==f||u!==m){let p=l*h+c*f+u*m+d*_;p<0&&(h=-h,f=-f,m=-m,_=-_,p=-p);let g=1-o;if(p<.9995){const v=Math.acos(p),b=Math.sin(v);g=Math.sin(g*v)/b,o=Math.sin(o*v)/b,l=l*g+h*o,c=c*g+f*o,u=u*g+m*o,d=d*g+_*o}else{l=l*g+h*o,c=c*g+f*o,u=u*g+m*o,d=d*g+_*o;const v=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=v,c*=v,u*=v,d*=v}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],u=n[r+3],d=s[a],h=s[a+1],f=s[a+2],m=s[a+3];return e[t]=o*m+u*d+l*f-c*h,e[t+1]=l*m+u*h+c*d-o*f,e[t+2]=c*m+u*f+o*h-l*d,e[t+3]=u*m-o*d-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(r/2),d=o(s/2),h=l(n/2),f=l(r/2),m=l(s/2);switch(a){case"XYZ":this._x=h*u*d+c*f*m,this._y=c*f*d-h*u*m,this._z=c*u*m+h*f*d,this._w=c*u*d-h*f*m;break;case"YXZ":this._x=h*u*d+c*f*m,this._y=c*f*d-h*u*m,this._z=c*u*m-h*f*d,this._w=c*u*d+h*f*m;break;case"ZXY":this._x=h*u*d-c*f*m,this._y=c*f*d+h*u*m,this._z=c*u*m+h*f*d,this._w=c*u*d-h*f*m;break;case"ZYX":this._x=h*u*d-c*f*m,this._y=c*f*d+h*u*m,this._z=c*u*m-h*f*d,this._w=c*u*d+h*f*m;break;case"YZX":this._x=h*u*d+c*f*m,this._y=c*f*d+h*u*m,this._z=c*u*m-h*f*d,this._w=c*u*d-h*f*m;break;case"XZY":this._x=h*u*d-c*f*m,this._y=c*f*d-h*u*m,this._z=c*u*m+h*f*d,this._w=c*u*d+h*f*m;break;default:We("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=n+o+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(a-r)*f}else if(n>o&&n>d){const f=2*Math.sqrt(1+n-o-d);this._w=(u-l)/f,this._x=.25*f,this._y=(r+a)/f,this._z=(s+c)/f}else if(o>d){const f=2*Math.sqrt(1+o-n-d);this._w=(s-c)/f,this._x=(r+a)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+d-n-o);this._w=(a-r)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ht(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-r*o,this._w=a*u-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const td=class td{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(tp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(tp.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*n),u=2*(o*t-s*r),d=2*(s*n-a*t);return this.x=t+l*c+a*d-o*u,this.y=n+l*u+o*c-s*d,this.z=r+l*d+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this.z=ht(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this.z=ht(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ht(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return tu.copy(this).projectOnVector(e),this.sub(tu)}reflect(e){return this.sub(tu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};td.prototype.isVector3=!0;let $=td;const tu=new $,tp=new Va,nd=class nd{constructor(e,t,n,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c)}set(e,t,n,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],f=n[5],m=n[8],_=r[0],p=r[3],g=r[6],v=r[1],b=r[4],S=r[7],A=r[2],E=r[5],T=r[8];return s[0]=a*_+o*v+l*A,s[3]=a*p+o*b+l*E,s[6]=a*g+o*S+l*T,s[1]=c*_+u*v+d*A,s[4]=c*p+u*b+d*E,s[7]=c*g+u*S+d*T,s[2]=h*_+f*v+m*A,s[5]=h*p+f*b+m*E,s[8]=h*g+f*S+m*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,h=o*l-u*s,f=c*s-a*l,m=t*d+n*h+r*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return e[0]=d*_,e[1]=(r*c-u*n)*_,e[2]=(o*n-r*a)*_,e[3]=h*_,e[4]=(u*t-r*l)*_,e[5]=(r*s-o*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(nu.makeScale(e,t)),this}rotate(e){return this.premultiply(nu.makeRotation(-e)),this}translate(e,t){return this.premultiply(nu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};nd.prototype.isMatrix3=!0;let je=nd;const nu=new je,np=new je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ip=new je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ny(){const i={enabled:!0,workingColorSpace:lc,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===xt&&(r.r=pr(r.r),r.g=pr(r.g),r.b=pr(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===xt&&(r.r=ya(r.r),r.g=ya(r.g),r.b=ya(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Fr?cc:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Yh("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Yh("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[lc]:{primaries:e,whitePoint:n,transfer:cc,toXYZ:np,fromXYZ:ip,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Vn},outputColorSpaceConfig:{drawingBufferColorSpace:Vn}},[Vn]:{primaries:e,whitePoint:n,transfer:xt,toXYZ:np,fromXYZ:ip,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Vn}}}),i}const ut=Ny();function pr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ya(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let $s;class Uy{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{$s===void 0&&($s=ko("canvas")),$s.width=e.width,$s.height=e.height;const r=$s.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=$s}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ko("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=pr(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(pr(t[n]/255)*255):t[n]=pr(t[n]);return{data:t,width:e.width,height:e.height}}else return We("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Oy=0;class Bf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Oy++}),this.uuid=Vo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(iu(r[a].image)):s.push(iu(r[a]))}else s=iu(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function iu(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Uy.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(We("Texture: Unable to serialize Texture."),{})}let Fy=0;const ru=new $;class Pn extends Os{constructor(e=Pn.DEFAULT_IMAGE,t=Pn.DEFAULT_MAPPING,n=hr,r=hr,s=Cn,a=gs,o=Ri,l=gi,c=Pn.DEFAULT_ANISOTROPY,u=Fr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fy++}),this.uuid=Vo(),this.name="",this.source=new Bf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new mt(0,0),this.repeat=new mt(1,1),this.center=new mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ru).x}get height(){return this.source.getSize(ru).y}get depth(){return this.source.getSize(ru).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){We(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){We(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==tg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case gh:e.x=e.x-Math.floor(e.x);break;case hr:e.x=e.x<0?0:1;break;case vh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case gh:e.y=e.y-Math.floor(e.y);break;case hr:e.y=e.y<0?0:1;break;case vh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=tg;Pn.DEFAULT_ANISOTROPY=1;const id=class id{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],m=l[9],_=l[2],p=l[6],g=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-_)<.01&&Math.abs(m-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+_)<.1&&Math.abs(m+p)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,S=(f+1)/2,A=(g+1)/2,E=(u+h)/4,T=(d+_)/4,x=(m+p)/4;return b>S&&b>A?b<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(b),r=E/n,s=T/n):S>A?S<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),n=E/r,s=x/r):A<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),n=T/s,r=x/s),this.set(n,r,s,t),this}let v=Math.sqrt((p-m)*(p-m)+(d-_)*(d-_)+(h-u)*(h-u));return Math.abs(v)<.001&&(v=1),this.x=(p-m)/v,this.y=(d-_)/v,this.z=(h-u)/v,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this.z=ht(this.z,e.z,t.z),this.w=ht(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this.z=ht(this.z,e,t),this.w=ht(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ht(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};id.prototype.isVector4=!0;let jt=id;class By extends Os{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new jt(0,0,e,t),this.scissorTest=!1,this.viewport=new jt(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:n.depth},s=new Pn(r),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Cn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Bf(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qi extends By{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class ug extends Pn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=vn,this.minFilter=vn,this.wrapR=hr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ky extends Pn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=vn,this.minFilter=vn,this.wrapR=hr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const yc=class yc{constructor(e,t,n,r,s,a,o,l,c,u,d,h,f,m,_,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c,u,d,h,f,m,_,p)}set(e,t,n,r,s,a,o,l,c,u,d,h,f,m,_,p){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=s,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=u,g[10]=d,g[14]=h,g[3]=f,g[7]=m,g[11]=_,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yc().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,r=1/js.setFromMatrixColumn(e,0).length(),s=1/js.setFromMatrixColumn(e,1).length(),a=1/js.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=a*u,f=a*d,m=o*u,_=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=f+m*c,t[5]=h-_*c,t[9]=-o*l,t[2]=_-h*c,t[6]=m+f*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,f=l*d,m=c*u,_=c*d;t[0]=h+_*o,t[4]=m*o-f,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=f*o-m,t[6]=_+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,f=l*d,m=c*u,_=c*d;t[0]=h-_*o,t[4]=-a*d,t[8]=m+f*o,t[1]=f+m*o,t[5]=a*u,t[9]=_-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,f=a*d,m=o*u,_=o*d;t[0]=l*u,t[4]=m*c-f,t[8]=h*c+_,t[1]=l*d,t[5]=_*c+h,t[9]=f*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,f=a*c,m=o*l,_=o*c;t[0]=l*u,t[4]=_-h*d,t[8]=m*d+f,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*d+m,t[10]=h-_*d}else if(e.order==="XZY"){const h=a*l,f=a*c,m=o*l,_=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+_,t[5]=a*u,t[9]=f*d-m,t[2]=m*d-f,t[6]=o*u,t[10]=_*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zy,e,Vy)}lookAt(e,t,n){const r=this.elements;return Zn.subVectors(e,t),Zn.lengthSq()===0&&(Zn.z=1),Zn.normalize(),Rr.crossVectors(n,Zn),Rr.lengthSq()===0&&(Math.abs(n.z)===1?Zn.x+=1e-4:Zn.z+=1e-4,Zn.normalize(),Rr.crossVectors(n,Zn)),Rr.normalize(),ul.crossVectors(Zn,Rr),r[0]=Rr.x,r[4]=ul.x,r[8]=Zn.x,r[1]=Rr.y,r[5]=ul.y,r[9]=Zn.y,r[2]=Rr.z,r[6]=ul.z,r[10]=Zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],f=n[13],m=n[2],_=n[6],p=n[10],g=n[14],v=n[3],b=n[7],S=n[11],A=n[15],E=r[0],T=r[4],x=r[8],w=r[12],R=r[1],P=r[5],I=r[9],G=r[13],V=r[2],N=r[6],B=r[10],O=r[14],Y=r[3],ee=r[7],D=r[11],pe=r[15];return s[0]=a*E+o*R+l*V+c*Y,s[4]=a*T+o*P+l*N+c*ee,s[8]=a*x+o*I+l*B+c*D,s[12]=a*w+o*G+l*O+c*pe,s[1]=u*E+d*R+h*V+f*Y,s[5]=u*T+d*P+h*N+f*ee,s[9]=u*x+d*I+h*B+f*D,s[13]=u*w+d*G+h*O+f*pe,s[2]=m*E+_*R+p*V+g*Y,s[6]=m*T+_*P+p*N+g*ee,s[10]=m*x+_*I+p*B+g*D,s[14]=m*w+_*G+p*O+g*pe,s[3]=v*E+b*R+S*V+A*Y,s[7]=v*T+b*P+S*N+A*ee,s[11]=v*x+b*I+S*B+A*D,s[15]=v*w+b*G+S*O+A*pe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],f=e[14],m=e[3],_=e[7],p=e[11],g=e[15],v=l*f-c*h,b=o*f-c*d,S=o*h-l*d,A=a*f-c*u,E=a*h-l*u,T=a*d-o*u;return t*(_*v-p*b+g*S)-n*(m*v-p*A+g*E)+r*(m*b-_*A+g*T)-s*(m*S-_*E+p*T)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],f=e[11],m=e[12],_=e[13],p=e[14],g=e[15],v=t*o-n*a,b=t*l-r*a,S=t*c-s*a,A=n*l-r*o,E=n*c-s*o,T=r*c-s*l,x=u*_-d*m,w=u*p-h*m,R=u*g-f*m,P=d*p-h*_,I=d*g-f*_,G=h*g-f*p,V=v*G-b*I+S*P+A*R-E*w+T*x;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/V;return e[0]=(o*G-l*I+c*P)*N,e[1]=(r*I-n*G-s*P)*N,e[2]=(_*T-p*E+g*A)*N,e[3]=(h*E-d*T-f*A)*N,e[4]=(l*R-a*G-c*w)*N,e[5]=(t*G-r*R+s*w)*N,e[6]=(p*S-m*T-g*b)*N,e[7]=(u*T-h*S+f*b)*N,e[8]=(a*I-o*R+c*x)*N,e[9]=(n*R-t*I-s*x)*N,e[10]=(m*E-_*S+g*v)*N,e[11]=(d*S-u*E-f*v)*N,e[12]=(o*w-a*P-l*x)*N,e[13]=(t*P-n*w+r*x)*N,e[14]=(_*b-m*A-p*v)*N,e[15]=(u*A-d*b+h*v)*N,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+n,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,d=o+o,h=s*c,f=s*u,m=s*d,_=a*u,p=a*d,g=o*d,v=l*c,b=l*u,S=l*d,A=n.x,E=n.y,T=n.z;return r[0]=(1-(_+g))*A,r[1]=(f+S)*A,r[2]=(m-b)*A,r[3]=0,r[4]=(f-S)*E,r[5]=(1-(h+g))*E,r[6]=(p+v)*E,r[7]=0,r[8]=(m+b)*T,r[9]=(p-v)*T,r[10]=(1-(h+_))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return n.set(1,1,1),t.identity(),this;let a=js.set(r[0],r[1],r[2]).length();const o=js.set(r[4],r[5],r[6]).length(),l=js.set(r[8],r[9],r[10]).length();s<0&&(a=-a),bi.copy(this);const c=1/a,u=1/o,d=1/l;return bi.elements[0]*=c,bi.elements[1]*=c,bi.elements[2]*=c,bi.elements[4]*=u,bi.elements[5]*=u,bi.elements[6]*=u,bi.elements[8]*=d,bi.elements[9]*=d,bi.elements[10]*=d,t.setFromRotationMatrix(bi),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,r,s,a,o=Gi,l=!1){const c=this.elements,u=2*s/(t-e),d=2*s/(n-r),h=(t+e)/(t-e),f=(n+r)/(n-r);let m,_;if(l)m=s/(a-s),_=a*s/(a-s);else if(o===Gi)m=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===uc)m=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=Gi,l=!1){const c=this.elements,u=2/(t-e),d=2/(n-r),h=-(t+e)/(t-e),f=-(n+r)/(n-r);let m,_;if(l)m=1/(a-s),_=a/(a-s);else if(o===Gi)m=-2/(a-s),_=-(a+s)/(a-s);else if(o===uc)m=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};yc.prototype.isMatrix4=!0;let on=yc;const js=new $,bi=new on,zy=new $(0,0,0),Vy=new $(1,1,1),Rr=new $,ul=new $,Zn=new $,rp=new on,sp=new Va;class Ns{constructor(e=0,t=0,n=0,r=Ns.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],d=r[2],h=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ht(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(ht(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ht(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ht(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:We("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return rp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(rp,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return sp.setFromEuler(this),this.setFromQuaternion(sp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ns.DEFAULT_ORDER="XYZ";class hg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Hy=0;const ap=new $,Ys=new Va,er=new on,hl=new $,ja=new $,Gy=new $,Wy=new Va,op=new $(1,0,0),lp=new $(0,1,0),cp=new $(0,0,1),up={type:"added"},Xy={type:"removed"},Ks={type:"childadded",child:null},su={type:"childremoved",child:null};class li extends Os{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hy++}),this.uuid=Vo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=li.DEFAULT_UP.clone();const e=new $,t=new Ns,n=new Va,r=new $(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new on},normalMatrix:{value:new je}}),this.matrix=new on,this.matrixWorld=new on,this.matrixAutoUpdate=li.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=li.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ys.setFromAxisAngle(e,t),this.quaternion.multiply(Ys),this}rotateOnWorldAxis(e,t){return Ys.setFromAxisAngle(e,t),this.quaternion.premultiply(Ys),this}rotateX(e){return this.rotateOnAxis(op,e)}rotateY(e){return this.rotateOnAxis(lp,e)}rotateZ(e){return this.rotateOnAxis(cp,e)}translateOnAxis(e,t){return ap.copy(e).applyQuaternion(this.quaternion),this.position.add(ap.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(op,e)}translateY(e){return this.translateOnAxis(lp,e)}translateZ(e){return this.translateOnAxis(cp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(er.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?hl.copy(e):hl.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),ja.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?er.lookAt(ja,hl,this.up):er.lookAt(hl,ja,this.up),this.quaternion.setFromRotationMatrix(er),r&&(er.extractRotation(r.matrixWorld),Ys.setFromRotationMatrix(er),this.quaternion.premultiply(Ys.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(pt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(up),Ks.child=e,this.dispatchEvent(Ks),Ks.child=null):pt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Xy),su.child=e,this.dispatchEvent(su),su.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),er.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),er.multiply(e.parent.matrixWorld)),e.applyMatrix4(er),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(up),Ks.child=e,this.dispatchEvent(Ks),Ks.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ja,e,Gy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ja,Wy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*r,s[13]+=n-s[1]*t-s[5]*n-s[9]*r,s[14]+=r-s[2]*t-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),h=a(e.skeletons),f=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=r,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}li.DEFAULT_UP=new $(0,1,0);li.DEFAULT_MATRIX_AUTO_UPDATE=!0;li.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class fl extends li{constructor(){super(),this.isGroup=!0,this.type="Group"}}const qy={type:"move"};class au{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),g=this._getHandJoint(c,_);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,m=.005;c.inputState.pinching&&h>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(qy)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new fl;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const fg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pr={h:0,s:0,l:0},dl={h:0,s:0,l:0};function ou(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class St{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Vn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=ut.workingColorSpace){return this.r=e,this.g=t,this.b=n,ut.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=ut.workingColorSpace){if(e=Ly(e,1),t=ht(t,0,1),n=ht(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=ou(a,s,e+1/3),this.g=ou(a,s,e),this.b=ou(a,s,e-1/3)}return ut.colorSpaceToWorking(this,r),this}setStyle(e,t=Vn){function n(s){s!==void 0&&parseFloat(s)<1&&We("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:We("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);We("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Vn){const n=fg[e.toLowerCase()];return n!==void 0?this.setHex(n,t):We("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=pr(e.r),this.g=pr(e.g),this.b=pr(e.b),this}copyLinearToSRGB(e){return this.r=ya(e.r),this.g=ya(e.g),this.b=ya(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vn){return ut.workingToColorSpace(Mn.copy(this),e),Math.round(ht(Mn.r*255,0,255))*65536+Math.round(ht(Mn.g*255,0,255))*256+Math.round(ht(Mn.b*255,0,255))}getHexString(e=Vn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ut.workingColorSpace){ut.workingToColorSpace(Mn.copy(this),t);const n=Mn.r,r=Mn.g,s=Mn.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-n)/d+2;break;case s:l=(n-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ut.workingColorSpace){return ut.workingToColorSpace(Mn.copy(this),t),e.r=Mn.r,e.g=Mn.g,e.b=Mn.b,e}getStyle(e=Vn){ut.workingToColorSpace(Mn.copy(this),e);const t=Mn.r,n=Mn.g,r=Mn.b;return e!==Vn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Pr),this.setHSL(Pr.h+e,Pr.s+t,Pr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Pr),e.getHSL(dl);const n=eu(Pr.h,dl.h,t),r=eu(Pr.s,dl.s,t),s=eu(Pr.l,dl.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Mn=new St;St.NAMES=fg;class $y extends li{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ns,this.environmentIntensity=1,this.environmentRotation=new Ns,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Mi=new $,tr=new $,lu=new $,nr=new $,Zs=new $,Js=new $,hp=new $,cu=new $,uu=new $,hu=new $,fu=new jt,du=new jt,pu=new jt;class Ci{constructor(e=new $,t=new $,n=new $){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Mi.subVectors(e,t),r.cross(Mi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Mi.subVectors(r,t),tr.subVectors(n,t),lu.subVectors(e,t);const a=Mi.dot(Mi),o=Mi.dot(tr),l=Mi.dot(lu),c=tr.dot(tr),u=tr.dot(lu),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const h=1/d,f=(c*l-o*u)*h,m=(a*u-o*l)*h;return s.set(1-f-m,m,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,nr)===null?!1:nr.x>=0&&nr.y>=0&&nr.x+nr.y<=1}static getInterpolation(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,nr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,nr.x),l.addScaledVector(a,nr.y),l.addScaledVector(o,nr.z),l)}static getInterpolatedAttribute(e,t,n,r,s,a){return fu.setScalar(0),du.setScalar(0),pu.setScalar(0),fu.fromBufferAttribute(e,t),du.fromBufferAttribute(e,n),pu.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(fu,s.x),a.addScaledVector(du,s.y),a.addScaledVector(pu,s.z),a}static isFrontFacing(e,t,n,r){return Mi.subVectors(n,t),tr.subVectors(e,t),Mi.cross(tr).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mi.subVectors(this.c,this.b),tr.subVectors(this.a,this.b),Mi.cross(tr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ci.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ci.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Ci.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Ci.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ci.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;Zs.subVectors(r,n),Js.subVectors(s,n),cu.subVectors(e,n);const l=Zs.dot(cu),c=Js.dot(cu);if(l<=0&&c<=0)return t.copy(n);uu.subVectors(e,r);const u=Zs.dot(uu),d=Js.dot(uu);if(u>=0&&d<=u)return t.copy(r);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Zs,a);hu.subVectors(e,s);const f=Zs.dot(hu),m=Js.dot(hu);if(m>=0&&f<=m)return t.copy(s);const _=f*c-l*m;if(_<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(n).addScaledVector(Js,o);const p=u*m-f*d;if(p<=0&&d-u>=0&&f-m>=0)return hp.subVectors(s,r),o=(d-u)/(d-u+(f-m)),t.copy(r).addScaledVector(hp,o);const g=1/(p+_+h);return a=_*g,o=h*g,t.copy(n).addScaledVector(Zs,a).addScaledVector(Js,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ho{constructor(e=new $(1/0,1/0,1/0),t=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ei.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ei.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Ei.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Ei):Ei.fromBufferAttribute(s,a),Ei.applyMatrix4(e.matrixWorld),this.expandByPoint(Ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),pl.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),pl.copy(n.boundingBox)),pl.applyMatrix4(e.matrixWorld),this.union(pl)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ei),Ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ya),ml.subVectors(this.max,Ya),Qs.subVectors(e.a,Ya),ea.subVectors(e.b,Ya),ta.subVectors(e.c,Ya),Dr.subVectors(ea,Qs),Ir.subVectors(ta,ea),is.subVectors(Qs,ta);let t=[0,-Dr.z,Dr.y,0,-Ir.z,Ir.y,0,-is.z,is.y,Dr.z,0,-Dr.x,Ir.z,0,-Ir.x,is.z,0,-is.x,-Dr.y,Dr.x,0,-Ir.y,Ir.x,0,-is.y,is.x,0];return!mu(t,Qs,ea,ta,ml)||(t=[1,0,0,0,1,0,0,0,1],!mu(t,Qs,ea,ta,ml))?!1:(_l.crossVectors(Dr,Ir),t=[_l.x,_l.y,_l.z],mu(t,Qs,ea,ta,ml))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ir[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ir[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ir[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ir[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ir[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ir[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ir[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ir[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ir),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ir=[new $,new $,new $,new $,new $,new $,new $,new $],Ei=new $,pl=new Ho,Qs=new $,ea=new $,ta=new $,Dr=new $,Ir=new $,is=new $,Ya=new $,ml=new $,_l=new $,rs=new $;function mu(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){rs.fromArray(i,s);const o=r.x*Math.abs(rs.x)+r.y*Math.abs(rs.y)+r.z*Math.abs(rs.z),l=e.dot(rs),c=t.dot(rs),u=n.dot(rs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Qt=new $,gl=new mt;let jy=0;class $i extends Os{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:jy++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Zd,this.updateRanges=[],this.gpuType=Hi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)gl.fromBufferAttribute(this,t),gl.applyMatrix3(e),this.setXY(t,gl.x,gl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix3(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix4(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyNormalMatrix(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.transformDirection(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=$a(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=kn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=$a(t,this.array)),t}setX(e,t){return this.normalized&&(t=kn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=$a(t,this.array)),t}setY(e,t){return this.normalized&&(t=kn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=$a(t,this.array)),t}setZ(e,t){return this.normalized&&(t=kn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=$a(t,this.array)),t}setW(e,t){return this.normalized&&(t=kn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=kn(t,this.array),n=kn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=kn(t,this.array),n=kn(n,this.array),r=kn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=kn(t,this.array),n=kn(n,this.array),r=kn(r,this.array),s=kn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Zd&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class dg extends $i{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class pg extends $i{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class mr extends $i{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Yy=new Ho,Ka=new $,_u=new $;class kf{constructor(e=new $,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Yy.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ka.subVectors(e,this.center);const t=Ka.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Ka,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_u.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ka.copy(e.center).add(_u)),this.expandByPoint(Ka.copy(e.center).sub(_u))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Ky=0;const di=new on,gu=new li,na=new $,Jn=new Ho,Za=new Ho,dn=new $;class br extends Os{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ky++}),this.uuid=Vo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ry(e)?pg:dg)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new je().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return di.makeRotationFromQuaternion(e),this.applyMatrix4(di),this}rotateX(e){return di.makeRotationX(e),this.applyMatrix4(di),this}rotateY(e){return di.makeRotationY(e),this.applyMatrix4(di),this}rotateZ(e){return di.makeRotationZ(e),this.applyMatrix4(di),this}translate(e,t,n){return di.makeTranslation(e,t,n),this.applyMatrix4(di),this}scale(e,t,n){return di.makeScale(e,t,n),this.applyMatrix4(di),this}lookAt(e){return gu.lookAt(e),gu.updateMatrix(),this.applyMatrix4(gu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(na).negate(),this.translate(na.x,na.y,na.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new mr(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&We("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ho);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){pt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Jn.setFromBufferAttribute(s),this.morphTargetsRelative?(dn.addVectors(this.boundingBox.min,Jn.min),this.boundingBox.expandByPoint(dn),dn.addVectors(this.boundingBox.max,Jn.max),this.boundingBox.expandByPoint(dn)):(this.boundingBox.expandByPoint(Jn.min),this.boundingBox.expandByPoint(Jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&pt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new kf);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){pt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){const n=this.boundingSphere.center;if(Jn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Za.setFromBufferAttribute(o),this.morphTargetsRelative?(dn.addVectors(Jn.min,Za.min),Jn.expandByPoint(dn),dn.addVectors(Jn.max,Za.max),Jn.expandByPoint(dn)):(Jn.expandByPoint(Za.min),Jn.expandByPoint(Za.max))}Jn.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)dn.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(dn));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)dn.fromBufferAttribute(o,c),l&&(na.fromBufferAttribute(e,c),dn.add(na)),r=Math.max(r,n.distanceToSquared(dn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&pt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){pt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $i(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let x=0;x<n.count;x++)o[x]=new $,l[x]=new $;const c=new $,u=new $,d=new $,h=new mt,f=new mt,m=new mt,_=new $,p=new $;function g(x,w,R){c.fromBufferAttribute(n,x),u.fromBufferAttribute(n,w),d.fromBufferAttribute(n,R),h.fromBufferAttribute(s,x),f.fromBufferAttribute(s,w),m.fromBufferAttribute(s,R),u.sub(c),d.sub(c),f.sub(h),m.sub(h);const P=1/(f.x*m.y-m.x*f.y);isFinite(P)&&(_.copy(u).multiplyScalar(m.y).addScaledVector(d,-f.y).multiplyScalar(P),p.copy(d).multiplyScalar(f.x).addScaledVector(u,-m.x).multiplyScalar(P),o[x].add(_),o[w].add(_),o[R].add(_),l[x].add(p),l[w].add(p),l[R].add(p))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let x=0,w=v.length;x<w;++x){const R=v[x],P=R.start,I=R.count;for(let G=P,V=P+I;G<V;G+=3)g(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const b=new $,S=new $,A=new $,E=new $;function T(x){A.fromBufferAttribute(r,x),E.copy(A);const w=o[x];b.copy(w),b.sub(A.multiplyScalar(A.dot(w))).normalize(),S.crossVectors(E,w);const P=S.dot(l[x])<0?-1:1;a.setXYZW(x,b.x,b.y,b.z,P)}for(let x=0,w=v.length;x<w;++x){const R=v[x],P=R.start,I=R.count;for(let G=P,V=P+I;G<V;G+=3)T(e.getX(G+0)),T(e.getX(G+1)),T(e.getX(G+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new $i(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);const r=new $,s=new $,a=new $,o=new $,l=new $,c=new $,u=new $,d=new $;if(e)for(let h=0,f=e.count;h<f;h+=3){const m=e.getX(h+0),_=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(t,m),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,p),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),o.add(u),l.add(u),c.add(u),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)dn.fromBufferAttribute(e,t),dn.normalize(),e.setXYZ(t,dn.x,dn.y,dn.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u);let f=0,m=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*u;for(let g=0;g<u;g++)h[m++]=c[f++]}return new $i(h,u,d)}if(this.index===null)return We("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new br,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,d=c.length;u<d;u++){const h=c[u],f=e(h,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const f=c[d];u.push(f.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Zy=0;class wc extends Os{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zy++}),this.uuid=Vo(),this.name="",this.type="Material",this.blending=xa,this.side=Jr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=lh,this.blendDst=ch,this.blendEquation=ds,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new St(0,0,0),this.blendAlpha=0,this.depthFunc=Da,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Kd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qs,this.stencilZFail=qs,this.stencilZPass=qs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){We(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){We(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==xa&&(n.blending=this.blending),this.side!==Jr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==lh&&(n.blendSrc=this.blendSrc),this.blendDst!==ch&&(n.blendDst=this.blendDst),this.blendEquation!==ds&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Da&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Kd&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==qs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==qs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const rr=new $,vu=new $,vl=new $,Lr=new $,xu=new $,xl=new $,yu=new $;class Jy{constructor(e=new $,t=new $(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,rr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=rr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(rr.copy(this.origin).addScaledVector(this.direction,t),rr.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){vu.copy(e).add(t).multiplyScalar(.5),vl.copy(t).sub(e).normalize(),Lr.copy(this.origin).sub(vu);const s=e.distanceTo(t)*.5,a=-this.direction.dot(vl),o=Lr.dot(this.direction),l=-Lr.dot(vl),c=Lr.lengthSq(),u=Math.abs(1-a*a);let d,h,f,m;if(u>0)if(d=a*l-o,h=a*o-l,m=s*u,d>=0)if(h>=-m)if(h<=m){const _=1/u;d*=_,h*=_,f=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=s,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h<=-m?(d=Math.max(0,-(-a*s+o)),h=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+h*(h+2*l)+c):h<=m?(d=0,h=Math.min(Math.max(-s,-l),s),f=h*(h+2*l)+c):(d=Math.max(0,-(a*s+o)),h=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+h*(h+2*l)+c);else h=a>0?-s:s,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(vu).addScaledVector(vl,h),f}intersectSphere(e,t){rr.subVectors(e.center,this.origin);const n=rr.dot(this.direction),r=rr.dot(rr)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,rr)!==null}intersectTriangle(e,t,n,r,s){xu.subVectors(t,e),xl.subVectors(n,e),yu.crossVectors(xu,xl);let a=this.direction.dot(yu),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Lr.subVectors(this.origin,e);const l=o*this.direction.dot(xl.crossVectors(Lr,xl));if(l<0)return null;const c=o*this.direction.dot(xu.cross(Lr));if(c<0||l+c>a)return null;const u=-o*Lr.dot(yu);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class mg extends wc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new St(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ns,this.combine=$_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const fp=new on,ss=new Jy,yl=new kf,dp=new $,Sl=new $,bl=new $,Ml=new $,Su=new $,El=new $,pp=new $,Tl=new $;class Ki extends li{constructor(e=new br,t=new mg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){El.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],d=s[l];u!==0&&(Su.fromBufferAttribute(d,e),a?El.addScaledVector(Su,u):El.addScaledVector(Su.sub(t),u))}t.add(El)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),yl.copy(n.boundingSphere),yl.applyMatrix4(s),ss.copy(e.ray).recast(e.near),!(yl.containsPoint(ss.origin)===!1&&(ss.intersectSphere(yl,dp)===null||ss.origin.distanceToSquared(dp)>(e.far-e.near)**2))&&(fp.copy(s).invert(),ss.copy(e.ray).applyMatrix4(fp),!(n.boundingBox!==null&&ss.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ss)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,_=h.length;m<_;m++){const p=h[m],g=a[p.materialIndex],v=Math.max(p.start,f.start),b=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let S=v,A=b;S<A;S+=3){const E=o.getX(S),T=o.getX(S+1),x=o.getX(S+2);r=wl(this,g,e,n,c,u,d,E,T,x),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const m=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let p=m,g=_;p<g;p+=3){const v=o.getX(p),b=o.getX(p+1),S=o.getX(p+2);r=wl(this,a,e,n,c,u,d,v,b,S),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,_=h.length;m<_;m++){const p=h[m],g=a[p.materialIndex],v=Math.max(p.start,f.start),b=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let S=v,A=b;S<A;S+=3){const E=S,T=S+1,x=S+2;r=wl(this,g,e,n,c,u,d,E,T,x),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const m=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let p=m,g=_;p<g;p+=3){const v=p,b=p+1,S=p+2;r=wl(this,a,e,n,c,u,d,v,b,S),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function Qy(i,e,t,n,r,s,a,o){let l;if(e.side===$n?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,e.side===Jr,o),l===null)return null;Tl.copy(o),Tl.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Tl);return c<t.near||c>t.far?null:{distance:c,point:Tl.clone(),object:i}}function wl(i,e,t,n,r,s,a,o,l,c){i.getVertexPosition(o,Sl),i.getVertexPosition(l,bl),i.getVertexPosition(c,Ml);const u=Qy(i,e,t,n,Sl,bl,Ml,pp);if(u){const d=new $;Ci.getBarycoord(pp,Sl,bl,Ml,d),r&&(u.uv=Ci.getInterpolatedAttribute(r,o,l,c,d,new mt)),s&&(u.uv1=Ci.getInterpolatedAttribute(s,o,l,c,d,new mt)),a&&(u.normal=Ci.getInterpolatedAttribute(a,o,l,c,d,new $),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new $,materialIndex:0};Ci.getNormal(Sl,bl,Ml,h.normal),u.face=h,u.barycoord=d}return u}class eS extends Pn{constructor(e=null,t=1,n=1,r,s,a,o,l,c=vn,u=vn,d,h){super(null,a,o,l,c,u,r,s,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const bu=new $,tS=new $,nS=new je;class fs{constructor(e=new $(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=bu.subVectors(n,t).cross(tS.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const r=e.delta(bu),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||nS.getNormalMatrix(e),r=this.coplanarPoint(bu).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const as=new kf,iS=new mt(.5,.5),Al=new $;class _g{constructor(e=new fs,t=new fs,n=new fs,r=new fs,s=new fs,a=new fs){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Gi,n=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],d=s[5],h=s[6],f=s[7],m=s[8],_=s[9],p=s[10],g=s[11],v=s[12],b=s[13],S=s[14],A=s[15];if(r[0].setComponents(c-a,f-u,g-m,A-v).normalize(),r[1].setComponents(c+a,f+u,g+m,A+v).normalize(),r[2].setComponents(c+o,f+d,g+_,A+b).normalize(),r[3].setComponents(c-o,f-d,g-_,A-b).normalize(),n)r[4].setComponents(l,h,p,S).normalize(),r[5].setComponents(c-l,f-h,g-p,A-S).normalize();else if(r[4].setComponents(c-l,f-h,g-p,A-S).normalize(),t===Gi)r[5].setComponents(c+l,f+h,g+p,A+S).normalize();else if(t===uc)r[5].setComponents(l,h,p,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),as.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),as.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(as)}intersectsSprite(e){as.center.set(0,0,0);const t=iS.distanceTo(e.center);return as.radius=.7071067811865476+t,as.applyMatrix4(e.matrixWorld),this.intersectsSphere(as)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Al.x=r.normal.x>0?e.max.x:e.min.x,Al.y=r.normal.y>0?e.max.y:e.min.y,Al.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Al)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class gg extends Pn{constructor(e=[],t=Is,n,r,s,a,o,l,c,u){super(e,t,n,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class La extends Pn{constructor(e,t,n=Yi,r,s,a,o=vn,l=vn,c,u=xr,d=1){if(u!==xr&&u!==vs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:d};super(h,r,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Bf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class rS extends La{constructor(e,t=Yi,n=Is,r,s,a=vn,o=vn,l,c=xr){const u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,r,s,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class vg extends Pn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Go extends br{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],d=[];let h=0,f=0;m("z","y","x",-1,-1,n,t,e,a,s,0),m("z","y","x",1,-1,n,t,-e,a,s,1),m("x","z","y",1,1,e,n,t,r,a,2),m("x","z","y",1,-1,e,n,-t,r,a,3),m("x","y","z",1,-1,e,t,n,r,s,4),m("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new mr(c,3)),this.setAttribute("normal",new mr(u,3)),this.setAttribute("uv",new mr(d,2));function m(_,p,g,v,b,S,A,E,T,x,w){const R=S/T,P=A/x,I=S/2,G=A/2,V=E/2,N=T+1,B=x+1;let O=0,Y=0;const ee=new $;for(let D=0;D<B;D++){const pe=D*P-G;for(let Ee=0;Ee<N;Ee++){const qe=Ee*R-I;ee[_]=qe*v,ee[p]=pe*b,ee[g]=V,c.push(ee.x,ee.y,ee.z),ee[_]=0,ee[p]=0,ee[g]=E>0?1:-1,u.push(ee.x,ee.y,ee.z),d.push(Ee/T),d.push(1-D/x),O+=1}}for(let D=0;D<x;D++)for(let pe=0;pe<T;pe++){const Ee=h+pe+N*D,qe=h+pe+N*(D+1),ke=h+(pe+1)+N*(D+1),Le=h+(pe+1)+N*D;l.push(Ee,qe,Le),l.push(qe,ke,Le),Y+=6}o.addGroup(f,Y,w),f+=Y,h+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Go(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Wo extends br{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,u=l+1,d=e/o,h=t/l,f=[],m=[],_=[],p=[];for(let g=0;g<u;g++){const v=g*h-a;for(let b=0;b<c;b++){const S=b*d-s;m.push(S,-v,0),_.push(0,0,1),p.push(b/o),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let v=0;v<o;v++){const b=v+c*g,S=v+c*(g+1),A=v+1+c*(g+1),E=v+1+c*g;f.push(b,S,E),f.push(S,A,E)}this.setIndex(f),this.setAttribute("position",new mr(m,3)),this.setAttribute("normal",new mr(_,3)),this.setAttribute("uv",new mr(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wo(e.width,e.height,e.widthSegments,e.heightSegments)}}function Na(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];if(mp(r))r.isRenderTargetTexture?(We("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(mp(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][n]=s}else e[t][n]=r.slice();else e[t][n]=r}}return e}function Nn(i){const e={};for(let t=0;t<i.length;t++){const n=Na(i[t]);for(const r in n)e[r]=n[r]}return e}function mp(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function sS(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function xg(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ut.workingColorSpace}const aS={clone:Na,merge:Nn};var oS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pi extends wc{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=oS,this.fragmentShader=lS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Na(e.uniforms),this.uniformsGroups=sS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class cS extends Pi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class uS extends wc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Sy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class hS extends wc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Mu={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(_p(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!_p(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function _p(i){try{const e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class fS{constructor(e,t,n){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){const f=c[d],m=c[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const dS=new fS;class zf{constructor(e){this.manager=e!==void 0?e:dS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}zf.DEFAULT_MATERIAL_NAME="__DEFAULT";const ia=new WeakMap;class pS extends zf{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Mu.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let d=ia.get(a);d===void 0&&(d=[],ia.set(a,d)),d.push({onLoad:t,onError:r})}return a}const o=ko("img");function l(){u(),t&&t(this);const d=ia.get(this)||[];for(let h=0;h<d.length;h++){const f=d[h];f.onLoad&&f.onLoad(this)}ia.delete(this),s.manager.itemEnd(e)}function c(d){u(),r&&r(d),Mu.remove(`image:${e}`);const h=ia.get(this)||[];for(let f=0;f<h.length;f++){const m=h[f];m.onError&&m.onError(d)}ia.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Mu.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class mS extends zf{constructor(e){super(e)}load(e,t,n,r){const s=new Pn,a=new pS(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}const Cl=new $,Rl=new Va,Ii=new $;class yg extends li{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new on,this.projectionMatrix=new on,this.projectionMatrixInverse=new on,this.coordinateSystem=Gi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Cl,Rl,Ii),Ii.x===1&&Ii.y===1&&Ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Cl,Rl,Ii.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Cl,Rl,Ii),Ii.x===1&&Ii.y===1&&Ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Cl,Rl,Ii.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Nr=new $,gp=new mt,vp=new mt;class Ai extends yg{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Kh*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Qc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Kh*2*Math.atan(Math.tan(Qc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Nr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Nr.x,Nr.y).multiplyScalar(-e/Nr.z),Nr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Nr.x,Nr.y).multiplyScalar(-e/Nr.z)}getViewSize(e,t){return this.getViewBounds(e,gp,vp),t.subVectors(vp,gp)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Qc*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Vf extends yg{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ra=-90,sa=1;class _S extends li{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ai(ra,sa,e,t);r.layers=this.layers,this.add(r);const s=new Ai(ra,sa,e,t);s.layers=this.layers,this.add(s);const a=new Ai(ra,sa,e,t);a.layers=this.layers,this.add(a);const o=new Ai(ra,sa,e,t);o.layers=this.layers,this.add(o);const l=new Ai(ra,sa,e,t);l.layers=this.layers,this.add(l);const c=new Ai(ra,sa,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Gi)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===uc)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class gS extends Ai{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const rd=class rd{constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=r,this}};rd.prototype.isMatrix2=!0;let xp=rd;function yp(i,e,t,n){const r=vS(n);switch(t){case ag:return i*e;case lg:return i*e/r.components*r.byteLength;case Lf:return i*e/r.components*r.byteLength;case Ls:return i*e*2/r.components*r.byteLength;case Nf:return i*e*2/r.components*r.byteLength;case og:return i*e*3/r.components*r.byteLength;case Ri:return i*e*4/r.components*r.byteLength;case Uf:return i*e*4/r.components*r.byteLength;case Gl:case Wl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Xl:case ql:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case yh:case bh:return Math.max(i,16)*Math.max(e,8)/4;case xh:case Sh:return Math.max(i,8)*Math.max(e,8)/2;case Mh:case Eh:case wh:case Ah:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Th:case ac:case Ch:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Rh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ph:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Dh:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ih:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Lh:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Nh:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Uh:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Oh:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Fh:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Bh:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case kh:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case zh:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Vh:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Hh:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Gh:case Wh:case Xh:return Math.ceil(i/4)*Math.ceil(e/4)*16;case qh:case $h:return Math.ceil(i/4)*Math.ceil(e/4)*8;case oc:case jh:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function vS(i){switch(i){case gi:case ng:return{byteLength:1,components:1};case Fo:case ig:case vr:return{byteLength:2,components:1};case Df:case If:return{byteLength:2,components:4};case Yi:case Pf:case Hi:return{byteLength:4,components:1};case rg:case sg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Rf}}));typeof window<"u"&&(window.__THREE__?We("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Rf);function Sg(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function xS(i){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,d=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const u=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,u);else{d.sort((f,m)=>f.start-m.start);let h=0;for(let f=1;f<d.length;f++){const m=d[h],_=d[f];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++h,d[h]=_)}d.length=h+1;for(let f=0,m=d.length;f<m;f++){const _=d[f];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var yS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,SS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,bS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,MS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ES=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,TS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,AS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,CS=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,RS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,PS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,DS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,IS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,LS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,NS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,US=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,OS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,FS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,BS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,zS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,VS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,HS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,GS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,WS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,XS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,qS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$S=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,YS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,KS="gl_FragColor = linearToOutputTexel( gl_FragColor );",ZS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,JS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,QS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,eb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,tb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ib=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ab=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ob=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ub=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,fb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,db=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_b=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,vb=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,xb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,yb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Sb=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bb=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Mb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Eb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ab=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Cb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Rb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Pb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Db=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ib=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Lb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Nb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ub=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ob=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Fb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,kb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,zb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Gb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Wb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Xb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$b=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Yb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Kb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Jb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Qb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,eM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,iM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,rM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,sM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,aM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,oM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,lM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,uM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,pM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,mM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,_M=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,xM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const yM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,SM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,MM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,EM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,TM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,AM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,CM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,RM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,PM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,DM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,LM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,NM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,UM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,FM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,kM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,VM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,HM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,GM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,XM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$M=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,YM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,KM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ZM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,JM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,QM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,et={alphahash_fragment:yS,alphahash_pars_fragment:SS,alphamap_fragment:bS,alphamap_pars_fragment:MS,alphatest_fragment:ES,alphatest_pars_fragment:TS,aomap_fragment:wS,aomap_pars_fragment:AS,batching_pars_vertex:CS,batching_vertex:RS,begin_vertex:PS,beginnormal_vertex:DS,bsdfs:IS,iridescence_fragment:LS,bumpmap_pars_fragment:NS,clipping_planes_fragment:US,clipping_planes_pars_fragment:OS,clipping_planes_pars_vertex:FS,clipping_planes_vertex:BS,color_fragment:kS,color_pars_fragment:zS,color_pars_vertex:VS,color_vertex:HS,common:GS,cube_uv_reflection_fragment:WS,defaultnormal_vertex:XS,displacementmap_pars_vertex:qS,displacementmap_vertex:$S,emissivemap_fragment:jS,emissivemap_pars_fragment:YS,colorspace_fragment:KS,colorspace_pars_fragment:ZS,envmap_fragment:JS,envmap_common_pars_fragment:QS,envmap_pars_fragment:eb,envmap_pars_vertex:tb,envmap_physical_pars_fragment:fb,envmap_vertex:nb,fog_vertex:ib,fog_pars_vertex:rb,fog_fragment:sb,fog_pars_fragment:ab,gradientmap_pars_fragment:ob,lightmap_pars_fragment:lb,lights_lambert_fragment:cb,lights_lambert_pars_fragment:ub,lights_pars_begin:hb,lights_toon_fragment:db,lights_toon_pars_fragment:pb,lights_phong_fragment:mb,lights_phong_pars_fragment:_b,lights_physical_fragment:gb,lights_physical_pars_fragment:vb,lights_fragment_begin:xb,lights_fragment_maps:yb,lights_fragment_end:Sb,lightprobes_pars_fragment:bb,logdepthbuf_fragment:Mb,logdepthbuf_pars_fragment:Eb,logdepthbuf_pars_vertex:Tb,logdepthbuf_vertex:wb,map_fragment:Ab,map_pars_fragment:Cb,map_particle_fragment:Rb,map_particle_pars_fragment:Pb,metalnessmap_fragment:Db,metalnessmap_pars_fragment:Ib,morphinstance_vertex:Lb,morphcolor_vertex:Nb,morphnormal_vertex:Ub,morphtarget_pars_vertex:Ob,morphtarget_vertex:Fb,normal_fragment_begin:Bb,normal_fragment_maps:kb,normal_pars_fragment:zb,normal_pars_vertex:Vb,normal_vertex:Hb,normalmap_pars_fragment:Gb,clearcoat_normal_fragment_begin:Wb,clearcoat_normal_fragment_maps:Xb,clearcoat_pars_fragment:qb,iridescence_pars_fragment:$b,opaque_fragment:jb,packing:Yb,premultiplied_alpha_fragment:Kb,project_vertex:Zb,dithering_fragment:Jb,dithering_pars_fragment:Qb,roughnessmap_fragment:eM,roughnessmap_pars_fragment:tM,shadowmap_pars_fragment:nM,shadowmap_pars_vertex:iM,shadowmap_vertex:rM,shadowmask_pars_fragment:sM,skinbase_vertex:aM,skinning_pars_vertex:oM,skinning_vertex:lM,skinnormal_vertex:cM,specularmap_fragment:uM,specularmap_pars_fragment:hM,tonemapping_fragment:fM,tonemapping_pars_fragment:dM,transmission_fragment:pM,transmission_pars_fragment:mM,uv_pars_fragment:_M,uv_pars_vertex:gM,uv_vertex:vM,worldpos_vertex:xM,background_vert:yM,background_frag:SM,backgroundCube_vert:bM,backgroundCube_frag:MM,cube_vert:EM,cube_frag:TM,depth_vert:wM,depth_frag:AM,distance_vert:CM,distance_frag:RM,equirect_vert:PM,equirect_frag:DM,linedashed_vert:IM,linedashed_frag:LM,meshbasic_vert:NM,meshbasic_frag:UM,meshlambert_vert:OM,meshlambert_frag:FM,meshmatcap_vert:BM,meshmatcap_frag:kM,meshnormal_vert:zM,meshnormal_frag:VM,meshphong_vert:HM,meshphong_frag:GM,meshphysical_vert:WM,meshphysical_frag:XM,meshtoon_vert:qM,meshtoon_frag:$M,points_vert:jM,points_frag:YM,shadow_vert:KM,shadow_frag:ZM,sprite_vert:JM,sprite_frag:QM},Se={common:{diffuse:{value:new St(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new St(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new $},probesMax:{value:new $},probesResolution:{value:new $}},points:{diffuse:{value:new St(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new St(16777215)},opacity:{value:1},center:{value:new mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},Fi={basic:{uniforms:Nn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:Nn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new St(0)},envMapIntensity:{value:1}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:Nn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new St(0)},specular:{value:new St(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:Nn([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new St(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:Nn([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new St(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:Nn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:Nn([Se.points,Se.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:Nn([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:Nn([Se.common,Se.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:Nn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:Nn([Se.sprite,Se.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distance:{uniforms:Nn([Se.common,Se.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distance_vert,fragmentShader:et.distance_frag},shadow:{uniforms:Nn([Se.lights,Se.fog,{color:{value:new St(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};Fi.physical={uniforms:Nn([Fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new St(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new St(0)},specularColor:{value:new St(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};const Pl={r:0,b:0,g:0},eE=new on,bg=new je;bg.set(-1,0,0,0,1,0,0,0,1);function tE(i,e,t,n,r,s){const a=new St(0);let o=r===!0?0:1,l,c,u=null,d=0,h=null;function f(v){let b=v.isScene===!0?v.background:null;if(b&&b.isTexture){const S=v.backgroundBlurriness>0;b=e.get(b,S)}return b}function m(v){let b=!1;const S=f(v);S===null?p(a,o):S&&S.isColor&&(p(S,1),b=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,s):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(v,b){const S=f(b);S&&(S.isCubeTexture||S.mapping===Tc)?(c===void 0&&(c=new Ki(new Go(1,1,1),new Pi({name:"BackgroundCubeMaterial",uniforms:Na(Fi.backgroundCube.uniforms),vertexShader:Fi.backgroundCube.vertexShader,fragmentShader:Fi.backgroundCube.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,E,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(eE.makeRotationFromEuler(b.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(bg),c.material.toneMapped=ut.getTransfer(S.colorSpace)!==xt,(u!==S||d!==S.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=S,d=S.version,h=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Ki(new Wo(2,2),new Pi({name:"BackgroundMaterial",uniforms:Na(Fi.background.uniforms),vertexShader:Fi.background.vertexShader,fragmentShader:Fi.background.fragmentShader,side:Jr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=ut.getTransfer(S.colorSpace)!==xt,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||d!==S.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=S,d=S.version,h=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,b){v.getRGB(Pl,xg(i)),t.buffers.color.setClear(Pl.r,Pl.g,Pl.b,b,s)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,b=1){a.set(v),o=b,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,p(a,o)},render:m,addToRenderList:_,dispose:g}}function nE(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=h(null);let s=r,a=!1;function o(P,I,G,V,N){let B=!1;const O=d(P,V,G,I);s!==O&&(s=O,c(s.object)),B=f(P,V,G,N),B&&m(P,V,G,N),N!==null&&e.update(N,i.ELEMENT_ARRAY_BUFFER),(B||a)&&(a=!1,S(P,I,G,V),N!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function l(){return i.createVertexArray()}function c(P){return i.bindVertexArray(P)}function u(P){return i.deleteVertexArray(P)}function d(P,I,G,V){const N=V.wireframe===!0;let B=n[I.id];B===void 0&&(B={},n[I.id]=B);const O=P.isInstancedMesh===!0?P.id:0;let Y=B[O];Y===void 0&&(Y={},B[O]=Y);let ee=Y[G.id];ee===void 0&&(ee={},Y[G.id]=ee);let D=ee[N];return D===void 0&&(D=h(l()),ee[N]=D),D}function h(P){const I=[],G=[],V=[];for(let N=0;N<t;N++)I[N]=0,G[N]=0,V[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:G,attributeDivisors:V,object:P,attributes:{},index:null}}function f(P,I,G,V){const N=s.attributes,B=I.attributes;let O=0;const Y=G.getAttributes();for(const ee in Y)if(Y[ee].location>=0){const pe=N[ee];let Ee=B[ee];if(Ee===void 0&&(ee==="instanceMatrix"&&P.instanceMatrix&&(Ee=P.instanceMatrix),ee==="instanceColor"&&P.instanceColor&&(Ee=P.instanceColor)),pe===void 0||pe.attribute!==Ee||Ee&&pe.data!==Ee.data)return!0;O++}return s.attributesNum!==O||s.index!==V}function m(P,I,G,V){const N={},B=I.attributes;let O=0;const Y=G.getAttributes();for(const ee in Y)if(Y[ee].location>=0){let pe=B[ee];pe===void 0&&(ee==="instanceMatrix"&&P.instanceMatrix&&(pe=P.instanceMatrix),ee==="instanceColor"&&P.instanceColor&&(pe=P.instanceColor));const Ee={};Ee.attribute=pe,pe&&pe.data&&(Ee.data=pe.data),N[ee]=Ee,O++}s.attributes=N,s.attributesNum=O,s.index=V}function _(){const P=s.newAttributes;for(let I=0,G=P.length;I<G;I++)P[I]=0}function p(P){g(P,0)}function g(P,I){const G=s.newAttributes,V=s.enabledAttributes,N=s.attributeDivisors;G[P]=1,V[P]===0&&(i.enableVertexAttribArray(P),V[P]=1),N[P]!==I&&(i.vertexAttribDivisor(P,I),N[P]=I)}function v(){const P=s.newAttributes,I=s.enabledAttributes;for(let G=0,V=I.length;G<V;G++)I[G]!==P[G]&&(i.disableVertexAttribArray(G),I[G]=0)}function b(P,I,G,V,N,B,O){O===!0?i.vertexAttribIPointer(P,I,G,N,B):i.vertexAttribPointer(P,I,G,V,N,B)}function S(P,I,G,V){_();const N=V.attributes,B=G.getAttributes(),O=I.defaultAttributeValues;for(const Y in B){const ee=B[Y];if(ee.location>=0){let D=N[Y];if(D===void 0&&(Y==="instanceMatrix"&&P.instanceMatrix&&(D=P.instanceMatrix),Y==="instanceColor"&&P.instanceColor&&(D=P.instanceColor)),D!==void 0){const pe=D.normalized,Ee=D.itemSize,qe=e.get(D);if(qe===void 0)continue;const ke=qe.buffer,Le=qe.type,J=qe.bytesPerElement,le=Le===i.INT||Le===i.UNSIGNED_INT||D.gpuType===Pf;if(D.isInterleavedBufferAttribute){const ae=D.data,Ce=ae.stride,Be=D.offset;if(ae.isInstancedInterleavedBuffer){for(let Pe=0;Pe<ee.locationSize;Pe++)g(ee.location+Pe,ae.meshPerAttribute);P.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Pe=0;Pe<ee.locationSize;Pe++)p(ee.location+Pe);i.bindBuffer(i.ARRAY_BUFFER,ke);for(let Pe=0;Pe<ee.locationSize;Pe++)b(ee.location+Pe,Ee/ee.locationSize,Le,pe,Ce*J,(Be+Ee/ee.locationSize*Pe)*J,le)}else{if(D.isInstancedBufferAttribute){for(let ae=0;ae<ee.locationSize;ae++)g(ee.location+ae,D.meshPerAttribute);P.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=D.meshPerAttribute*D.count)}else for(let ae=0;ae<ee.locationSize;ae++)p(ee.location+ae);i.bindBuffer(i.ARRAY_BUFFER,ke);for(let ae=0;ae<ee.locationSize;ae++)b(ee.location+ae,Ee/ee.locationSize,Le,pe,Ee*J,Ee/ee.locationSize*ae*J,le)}}else if(O!==void 0){const pe=O[Y];if(pe!==void 0)switch(pe.length){case 2:i.vertexAttrib2fv(ee.location,pe);break;case 3:i.vertexAttrib3fv(ee.location,pe);break;case 4:i.vertexAttrib4fv(ee.location,pe);break;default:i.vertexAttrib1fv(ee.location,pe)}}}}v()}function A(){w();for(const P in n){const I=n[P];for(const G in I){const V=I[G];for(const N in V){const B=V[N];for(const O in B)u(B[O].object),delete B[O];delete V[N]}}delete n[P]}}function E(P){if(n[P.id]===void 0)return;const I=n[P.id];for(const G in I){const V=I[G];for(const N in V){const B=V[N];for(const O in B)u(B[O].object),delete B[O];delete V[N]}}delete n[P.id]}function T(P){for(const I in n){const G=n[I];for(const V in G){const N=G[V];if(N[P.id]===void 0)continue;const B=N[P.id];for(const O in B)u(B[O].object),delete B[O];delete N[P.id]}}}function x(P){for(const I in n){const G=n[I],V=P.isInstancedMesh===!0?P.id:0,N=G[V];if(N!==void 0){for(const B in N){const O=N[B];for(const Y in O)u(O[Y].object),delete O[Y];delete N[B]}delete G[V],Object.keys(G).length===0&&delete n[I]}}}function w(){R(),a=!0,s!==r&&(s=r,c(s.object))}function R(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:w,resetDefaultState:R,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfObject:x,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:p,disableUnusedAttributes:v}}function iE(i,e,t){let n;function r(l){n=l}function s(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let f=0;f<u;f++)h+=c[f];t.update(h,n,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function rE(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(T){return!(T!==Ri&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const x=T===vr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==gi&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Hi&&!x)}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(We("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&We("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:v,maxVaryings:b,maxFragmentUniforms:S,maxSamples:A,samples:E}}function sE(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new fs,o=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||n!==0||r;return r=h,n=d.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){const m=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,g=i.get(d);if(!r||m===null||m.length===0||s&&!p)s?u(null):c();else{const v=s?0:n,b=v*4;let S=g.clippingState||null;l.value=S,S=u(m,h,b,f);for(let A=0;A!==b;++A)S[A]=t[A];g.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,f,m){const _=d!==null?d.length:0;let p=null;if(_!==0){if(p=l.value,m!==!0||p===null){const g=f+_*4,v=h.matrixWorldInverse;o.getNormalMatrix(v),(p===null||p.length<g)&&(p=new Float32Array(g));for(let b=0,S=f;b!==_;++b,S+=4)a.copy(d[b]).applyMatrix4(v,o),a.normal.toArray(p,S),p[S+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}const Gr=4,Sp=[.125,.215,.35,.446,.526,.582],ps=20,aE=256,Ja=new Vf,bp=new St;let Eu=null,Tu=0,wu=0,Au=!1;const oE=new $;class Mp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){const{size:a=256,position:o=oE}=s;Eu=this._renderer.getRenderTarget(),Tu=this._renderer.getActiveCubeFace(),wu=this._renderer.getActiveMipmapLevel(),Au=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Tp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Eu,Tu,wu),this._renderer.xr.enabled=Au,e.scissorTest=!1,aa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Is||e.mapping===Ia?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Eu=this._renderer.getRenderTarget(),Tu=this._renderer.getActiveCubeFace(),wu=this._renderer.getActiveMipmapLevel(),Au=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Cn,minFilter:Cn,generateMipmaps:!1,type:vr,format:Ri,colorSpace:lc,depthBuffer:!1},r=Ep(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ep(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=lE(s)),this._blurMaterial=uE(s,e,t),this._ggxMaterial=cE(s,e,t)}return r}_compileMaterial(e){const t=new Ki(new br,e);this._renderer.compile(t,Ja)}_sceneToCubeUV(e,t,n,r,s){const l=new Ai(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(bp),d.toneMapping=Xi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ki(new Go,new mg({name:"PMREM.Background",side:$n,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,p=_.material;let g=!1;const v=e.background;v?v.isColor&&(p.color.copy(v),e.background=null,g=!0):(p.color.copy(bp),g=!0);for(let b=0;b<6;b++){const S=b%3;S===0?(l.up.set(0,c[b],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[b],s.y,s.z)):S===1?(l.up.set(0,0,c[b]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[b],s.z)):(l.up.set(0,c[b],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[b]));const A=this._cubeSize;aa(r,S*A,b>2?A:0,A,A),d.setRenderTarget(r),g&&d.render(_,l),d.render(e,l)}d.toneMapping=f,d.autoClear=h,e.background=v}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Is||e.mapping===Ia;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=wp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Tp());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;aa(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Ja)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),h=0+c*1.25,f=d*h,{_lodMax:m}=this,_=this._sizeLods[n],p=3*_*(n>m-Gr?n-m+Gr:0),g=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=m-t,aa(s,p,g,3*_,2*_),r.setRenderTarget(s),r.render(o,Ja),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=m-n,aa(e,p,g,3*_,2*_),r.setRenderTarget(e),r.render(o,Ja)}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&pt("blur direction must be either latitudinal or longitudinal!");const u=3,d=this._lodMeshes[r];d.material=c;const h=c.uniforms,f=this._sizeLods[n]-1,m=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*ps-1),_=s/m,p=isFinite(s)?1+Math.floor(u*_):ps;p>ps&&We(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ps}`);const g=[];let v=0;for(let T=0;T<ps;++T){const x=T/_,w=Math.exp(-x*x/2);g.push(w),T===0?v+=w:T<p&&(v+=2*w)}for(let T=0;T<g.length;T++)g[T]=g[T]/v;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=g,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:b}=this;h.dTheta.value=m,h.mipInt.value=b-n;const S=this._sizeLods[r],A=3*S*(r>b-Gr?r-b+Gr:0),E=4*(this._cubeSize-S);aa(t,A,E,3*S,2*S),l.setRenderTarget(t),l.render(d,Ja)}}function lE(i){const e=[],t=[],n=[];let r=i;const s=i-Gr+1+Sp.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>i-Gr?l=Sp[a-i+Gr-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,m=6,_=3,p=2,g=1,v=new Float32Array(_*m*f),b=new Float32Array(p*m*f),S=new Float32Array(g*m*f);for(let E=0;E<f;E++){const T=E%3*2/3-1,x=E>2?0:-1,w=[T,x,0,T+2/3,x,0,T+2/3,x+1,0,T,x,0,T+2/3,x+1,0,T,x+1,0];v.set(w,_*m*E),b.set(h,p*m*E);const R=[E,E,E,E,E,E];S.set(R,g*m*E)}const A=new br;A.setAttribute("position",new $i(v,_)),A.setAttribute("uv",new $i(b,p)),A.setAttribute("faceIndex",new $i(S,g)),n.push(new Ki(A,null)),r>Gr&&r--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Ep(i,e,t){const n=new qi(i,e,t);return n.texture.mapping=Tc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function aa(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function cE(i,e,t){return new Pi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:aE,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ac(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:dr,depthTest:!1,depthWrite:!1})}function uE(i,e,t){const n=new Float32Array(ps),r=new $(0,1,0);return new Pi({name:"SphericalGaussianBlur",defines:{n:ps,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ac(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:dr,depthTest:!1,depthWrite:!1})}function Tp(){return new Pi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ac(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:dr,depthTest:!1,depthWrite:!1})}function wp(){return new Pi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ac(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:dr,depthTest:!1,depthWrite:!1})}function Ac(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Mg extends qi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new gg(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Go(5,5,5),s=new Pi({name:"CubemapFromEquirect",uniforms:Na(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:$n,blending:dr});s.uniforms.tEquirect.value=t;const a=new Ki(r,s),o=t.minFilter;return t.minFilter===gs&&(t.minFilter=Cn),new _S(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}function hE(i){let e=new WeakMap,t=new WeakMap,n=null;function r(h,f=!1){return h==null?null:f?a(h):s(h)}function s(h){if(h&&h.isTexture){const f=h.mapping;if(f===Kc||f===Zc)if(e.has(h)){const m=e.get(h).texture;return o(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const _=new Mg(m.height);return _.fromEquirectangularTexture(i,h),e.set(h,_),h.addEventListener("dispose",c),o(_.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const f=h.mapping,m=f===Kc||f===Zc,_=f===Is||f===Ia;if(m||_){let p=t.get(h);const g=p!==void 0?p.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==g)return n===null&&(n=new Mp(i)),p=m?n.fromEquirectangular(h,p):n.fromCubemap(h,p),p.texture.pmremVersion=h.pmremVersion,t.set(h,p),p.texture;if(p!==void 0)return p.texture;{const v=h.image;return m&&v&&v.height>0||_&&v&&l(v)?(n===null&&(n=new Mp(i)),p=m?n.fromEquirectangular(h):n.fromCubemap(h),p.texture.pmremVersion=h.pmremVersion,t.set(h,p),h.addEventListener("dispose",u),p.texture):null}}}return h}function o(h,f){return f===Kc?h.mapping=Is:f===Zc&&(h.mapping=Ia),h}function l(h){let f=0;const m=6;for(let _=0;_<m;_++)h[_]!==void 0&&f++;return f===m}function c(h){const f=h.target;f.removeEventListener("dispose",c);const m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function u(h){const f=h.target;f.removeEventListener("dispose",u);const m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:d}}function fE(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Yh("WebGLRenderer: "+n+" extension not supported."),r}}}function dE(i,e,t,n){const r={},s=new WeakMap;function a(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const m in h.attributes)e.remove(h.attributes[m]);h.removeEventListener("dispose",a),delete r[h.id];const f=s.get(h);f&&(e.remove(f),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(d,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const f in h)e.update(h[f],i.ARRAY_BUFFER)}function c(d){const h=[],f=d.index,m=d.attributes.position;let _=0;if(m===void 0)return;if(f!==null){const v=f.array;_=f.version;for(let b=0,S=v.length;b<S;b+=3){const A=v[b+0],E=v[b+1],T=v[b+2];h.push(A,E,E,T,T,A)}}else{const v=m.array;_=m.version;for(let b=0,S=v.length/3-1;b<S;b+=3){const A=b+0,E=b+1,T=b+2;h.push(A,E,E,T,T,A)}}const p=new(m.count>=65535?pg:dg)(h,1);p.version=_;const g=s.get(d);g&&e.remove(g),s.set(d,p)}function u(d){const h=s.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function pE(i,e,t){let n;function r(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,h){i.drawElements(n,h,s,d*a),t.update(h,n,1)}function c(d,h,f){f!==0&&(i.drawElementsInstanced(n,h,s,d*a,f),t.update(h,n,f))}function u(d,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,s,d,0,f);let _=0;for(let p=0;p<f;p++)_+=h[p];t.update(_,n,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function mE(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:pt("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function _E(i,e,t){const n=new WeakMap,r=new jt;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let h=n.get(o);if(h===void 0||h.count!==d){let w=function(){T.dispose(),n.delete(o),o.removeEventListener("dispose",w)};h!==void 0&&h.texture.dispose();const f=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let b=0;f===!0&&(b=1),m===!0&&(b=2),_===!0&&(b=3);let S=o.attributes.position.count*b,A=1;S>e.maxTextureSize&&(A=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const E=new Float32Array(S*A*4*d),T=new ug(E,S,A,d);T.type=Hi,T.needsUpdate=!0;const x=b*4;for(let R=0;R<d;R++){const P=p[R],I=g[R],G=v[R],V=S*A*4*R;for(let N=0;N<P.count;N++){const B=N*x;f===!0&&(r.fromBufferAttribute(P,N),E[V+B+0]=r.x,E[V+B+1]=r.y,E[V+B+2]=r.z,E[V+B+3]=0),m===!0&&(r.fromBufferAttribute(I,N),E[V+B+4]=r.x,E[V+B+5]=r.y,E[V+B+6]=r.z,E[V+B+7]=0),_===!0&&(r.fromBufferAttribute(G,N),E[V+B+8]=r.x,E[V+B+9]=r.y,E[V+B+10]=r.z,E[V+B+11]=G.itemSize===4?r.w:1)}}h={count:d,texture:T,size:new mt(S,A)},n.set(o,h),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];const m=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:s}}function gE(i,e,t,n,r){let s=new WeakMap;function a(c){const u=r.render.frame,d=c.geometry,h=e.get(c,d);if(s.get(h)!==u&&(e.update(h),s.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==u&&(f.update(),s.set(f,u))}return h}function o(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const vE={[j_]:"LINEAR_TONE_MAPPING",[Y_]:"REINHARD_TONE_MAPPING",[K_]:"CINEON_TONE_MAPPING",[Z_]:"ACES_FILMIC_TONE_MAPPING",[Q_]:"AGX_TONE_MAPPING",[eg]:"NEUTRAL_TONE_MAPPING",[J_]:"CUSTOM_TONE_MAPPING"};function xE(i,e,t,n,r){const s=new qi(e,t,{type:i,depthBuffer:n,stencilBuffer:r,depthTexture:n?new La(e,t):void 0}),a=new qi(e,t,{type:vr,depthBuffer:!1,stencilBuffer:!1}),o=new br;o.setAttribute("position",new mr([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new mr([0,2,0,0,2,0],2));const l=new cS({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new Ki(o,l),u=new Vf(-1,1,1,-1,0,1);let d=null,h=null,f=!1,m,_=null,p=[],g=!1;this.setSize=function(v,b){s.setSize(v,b),a.setSize(v,b);for(let S=0;S<p.length;S++){const A=p[S];A.setSize&&A.setSize(v,b)}},this.setEffects=function(v){p=v,g=p.length>0&&p[0].isRenderPass===!0;const b=s.width,S=s.height;for(let A=0;A<p.length;A++){const E=p[A];E.setSize&&E.setSize(b,S)}},this.begin=function(v,b){if(f||v.toneMapping===Xi&&p.length===0)return!1;if(_=b,b!==null){const S=b.width,A=b.height;(s.width!==S||s.height!==A)&&this.setSize(S,A)}return g===!1&&v.setRenderTarget(s),m=v.toneMapping,v.toneMapping=Xi,!0},this.hasRenderPass=function(){return g},this.end=function(v,b){v.toneMapping=m,f=!0;let S=s,A=a;for(let E=0;E<p.length;E++){const T=p[E];if(T.enabled!==!1&&(T.render(v,A,S,b),T.needsSwap!==!1)){const x=S;S=A,A=x}}if(d!==v.outputColorSpace||h!==v.toneMapping){d=v.outputColorSpace,h=v.toneMapping,l.defines={},ut.getTransfer(d)===xt&&(l.defines.SRGB_TRANSFER="");const E=vE[h];E&&(l.defines[E]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=S.texture,v.setRenderTarget(_),v.render(c,u),_=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const Eg=new Pn,Zh=new La(1,1),Tg=new ug,wg=new ky,Ag=new gg,Ap=[],Cp=[],Rp=new Float32Array(16),Pp=new Float32Array(9),Dp=new Float32Array(4);function Ha(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Ap[r];if(s===void 0&&(s=new Float32Array(r),Ap[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function ln(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function cn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Cc(i,e){let t=Cp[e];t===void 0&&(t=new Int32Array(e),Cp[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function yE(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function SE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;i.uniform2fv(this.addr,e),cn(t,e)}}function bE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ln(t,e))return;i.uniform3fv(this.addr,e),cn(t,e)}}function ME(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;i.uniform4fv(this.addr,e),cn(t,e)}}function EE(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ln(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),cn(t,e)}else{if(ln(t,n))return;Dp.set(n),i.uniformMatrix2fv(this.addr,!1,Dp),cn(t,n)}}function TE(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ln(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),cn(t,e)}else{if(ln(t,n))return;Pp.set(n),i.uniformMatrix3fv(this.addr,!1,Pp),cn(t,n)}}function wE(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ln(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),cn(t,e)}else{if(ln(t,n))return;Rp.set(n),i.uniformMatrix4fv(this.addr,!1,Rp),cn(t,n)}}function AE(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function CE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;i.uniform2iv(this.addr,e),cn(t,e)}}function RE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ln(t,e))return;i.uniform3iv(this.addr,e),cn(t,e)}}function PE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;i.uniform4iv(this.addr,e),cn(t,e)}}function DE(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function IE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;i.uniform2uiv(this.addr,e),cn(t,e)}}function LE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ln(t,e))return;i.uniform3uiv(this.addr,e),cn(t,e)}}function NE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;i.uniform4uiv(this.addr,e),cn(t,e)}}function UE(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Zh.compareFunction=t.isReversedDepthBuffer()?Ff:Of,s=Zh):s=Eg,t.setTexture2D(e||s,r)}function OE(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||wg,r)}function FE(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Ag,r)}function BE(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Tg,r)}function kE(i){switch(i){case 5126:return yE;case 35664:return SE;case 35665:return bE;case 35666:return ME;case 35674:return EE;case 35675:return TE;case 35676:return wE;case 5124:case 35670:return AE;case 35667:case 35671:return CE;case 35668:case 35672:return RE;case 35669:case 35673:return PE;case 5125:return DE;case 36294:return IE;case 36295:return LE;case 36296:return NE;case 35678:case 36198:case 36298:case 36306:case 35682:return UE;case 35679:case 36299:case 36307:return OE;case 35680:case 36300:case 36308:case 36293:return FE;case 36289:case 36303:case 36311:case 36292:return BE}}function zE(i,e){i.uniform1fv(this.addr,e)}function VE(i,e){const t=Ha(e,this.size,2);i.uniform2fv(this.addr,t)}function HE(i,e){const t=Ha(e,this.size,3);i.uniform3fv(this.addr,t)}function GE(i,e){const t=Ha(e,this.size,4);i.uniform4fv(this.addr,t)}function WE(i,e){const t=Ha(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function XE(i,e){const t=Ha(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function qE(i,e){const t=Ha(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function $E(i,e){i.uniform1iv(this.addr,e)}function jE(i,e){i.uniform2iv(this.addr,e)}function YE(i,e){i.uniform3iv(this.addr,e)}function KE(i,e){i.uniform4iv(this.addr,e)}function ZE(i,e){i.uniform1uiv(this.addr,e)}function JE(i,e){i.uniform2uiv(this.addr,e)}function QE(i,e){i.uniform3uiv(this.addr,e)}function eT(i,e){i.uniform4uiv(this.addr,e)}function tT(i,e,t){const n=this.cache,r=e.length,s=Cc(t,r);ln(n,s)||(i.uniform1iv(this.addr,s),cn(n,s));let a;this.type===i.SAMPLER_2D_SHADOW?a=Zh:a=Eg;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function nT(i,e,t){const n=this.cache,r=e.length,s=Cc(t,r);ln(n,s)||(i.uniform1iv(this.addr,s),cn(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||wg,s[a])}function iT(i,e,t){const n=this.cache,r=e.length,s=Cc(t,r);ln(n,s)||(i.uniform1iv(this.addr,s),cn(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Ag,s[a])}function rT(i,e,t){const n=this.cache,r=e.length,s=Cc(t,r);ln(n,s)||(i.uniform1iv(this.addr,s),cn(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Tg,s[a])}function sT(i){switch(i){case 5126:return zE;case 35664:return VE;case 35665:return HE;case 35666:return GE;case 35674:return WE;case 35675:return XE;case 35676:return qE;case 5124:case 35670:return $E;case 35667:case 35671:return jE;case 35668:case 35672:return YE;case 35669:case 35673:return KE;case 5125:return ZE;case 36294:return JE;case 36295:return QE;case 36296:return eT;case 35678:case 36198:case 36298:case 36306:case 35682:return tT;case 35679:case 36299:case 36307:return nT;case 35680:case 36300:case 36308:case 36293:return iT;case 36289:case 36303:case 36311:case 36292:return rT}}class aT{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=kE(t.type)}}class oT{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=sT(t.type)}}class lT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const Cu=/(\w+)(\])?(\[|\.)?/g;function Ip(i,e){i.seq.push(e),i.map[e.id]=e}function cT(i,e,t){const n=i.name,r=n.length;for(Cu.lastIndex=0;;){const s=Cu.exec(n),a=Cu.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Ip(t,c===void 0?new aT(o,i,e):new oT(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new lT(o),Ip(t,d)),t=d}}}class $l{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);cT(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function Lp(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const uT=37297;let hT=0;function fT(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Np=new je;function dT(i){ut._getMatrix(Np,ut.workingColorSpace,i);const e=`mat3( ${Np.elements.map(t=>t.toFixed(4))} )`;switch(ut.getTransfer(i)){case cc:return[e,"LinearTransferOETF"];case xt:return[e,"sRGBTransferOETF"];default:return We("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Up(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+fT(i.getShaderSource(e),o)}else return s}function pT(i,e){const t=dT(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const mT={[j_]:"Linear",[Y_]:"Reinhard",[K_]:"Cineon",[Z_]:"ACESFilmic",[Q_]:"AgX",[eg]:"Neutral",[J_]:"Custom"};function _T(i,e){const t=mT[e];return t===void 0?(We("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Dl=new $;function gT(){ut.getLuminanceCoefficients(Dl);const i=Dl.x.toFixed(4),e=Dl.y.toFixed(4),t=Dl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vT(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(lo).join(`
`)}function xT(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function yT(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function lo(i){return i!==""}function Op(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Fp(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ST=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jh(i){return i.replace(ST,MT)}const bT=new Map;function MT(i,e){let t=et[e];if(t===void 0){const n=bT.get(e);if(n!==void 0)t=et[n],We('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Jh(t)}const ET=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bp(i){return i.replace(ET,TT)}function TT(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function kp(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const wT={[Hl]:"SHADOWMAP_TYPE_PCF",[oo]:"SHADOWMAP_TYPE_VSM"};function AT(i){return wT[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const CT={[Is]:"ENVMAP_TYPE_CUBE",[Ia]:"ENVMAP_TYPE_CUBE",[Tc]:"ENVMAP_TYPE_CUBE_UV"};function RT(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":CT[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const PT={[Ia]:"ENVMAP_MODE_REFRACTION"};function DT(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":PT[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const IT={[$_]:"ENVMAP_BLENDING_MULTIPLY",[vy]:"ENVMAP_BLENDING_MIX",[xy]:"ENVMAP_BLENDING_ADD"};function LT(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":IT[i.combine]||"ENVMAP_BLENDING_NONE"}function NT(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function UT(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=AT(t),c=RT(t),u=DT(t),d=LT(t),h=NT(t),f=vT(t),m=xT(s),_=r.createProgram();let p,g,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(lo).join(`
`),p.length>0&&(p+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(lo).join(`
`),g.length>0&&(g+=`
`)):(p=[kp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(lo).join(`
`),g=[kp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Xi?"#define TONE_MAPPING":"",t.toneMapping!==Xi?et.tonemapping_pars_fragment:"",t.toneMapping!==Xi?_T("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,pT("linearToOutputTexel",t.outputColorSpace),gT(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(lo).join(`
`)),a=Jh(a),a=Op(a,t),a=Fp(a,t),o=Jh(o),o=Op(o,t),o=Fp(o,t),a=Bp(a),o=Bp(o),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",t.glslVersion===Jd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Jd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const b=v+p+a,S=v+g+o,A=Lp(r,r.VERTEX_SHADER,b),E=Lp(r,r.FRAGMENT_SHADER,S);r.attachShader(_,A),r.attachShader(_,E),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function T(P){if(i.debug.checkShaderErrors){const I=r.getProgramInfoLog(_)||"",G=r.getShaderInfoLog(A)||"",V=r.getShaderInfoLog(E)||"",N=I.trim(),B=G.trim(),O=V.trim();let Y=!0,ee=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,A,E);else{const D=Up(r,A,"vertex"),pe=Up(r,E,"fragment");pt("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+N+`
`+D+`
`+pe)}else N!==""?We("WebGLProgram: Program Info Log:",N):(B===""||O==="")&&(ee=!1);ee&&(P.diagnostics={runnable:Y,programLog:N,vertexShader:{log:B,prefix:p},fragmentShader:{log:O,prefix:g}})}r.deleteShader(A),r.deleteShader(E),x=new $l(r,_),w=yT(r,_)}let x;this.getUniforms=function(){return x===void 0&&T(this),x};let w;this.getAttributes=function(){return w===void 0&&T(this),w};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=r.getProgramParameter(_,uT)),R},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=hT++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=E,this}let OT=0;class FT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new BT(e),t.set(e,n)),n}}class BT{constructor(e){this.id=OT++,this.code=e,this.usedTimes=0}}function kT(i){return i===Ls||i===ac||i===oc}function zT(i,e,t,n,r,s){const a=new hg,o=new FT,l=new Set,c=[],u=new Map,d=n.logarithmicDepthBuffer;let h=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){return l.add(x),x===0?"uv":`uv${x}`}function _(x,w,R,P,I,G){const V=P.fog,N=I.geometry,B=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?P.environment:null,O=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,Y=e.get(x.envMap||B,O),ee=Y&&Y.mapping===Tc?Y.image.height:null,D=f[x.type];x.precision!==null&&(h=n.getMaxPrecision(x.precision),h!==x.precision&&We("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));const pe=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,Ee=pe!==void 0?pe.length:0;let qe=0;N.morphAttributes.position!==void 0&&(qe=1),N.morphAttributes.normal!==void 0&&(qe=2),N.morphAttributes.color!==void 0&&(qe=3);let ke,Le,J,le;if(D){const he=Fi[D];ke=he.vertexShader,Le=he.fragmentShader}else ke=x.vertexShader,Le=x.fragmentShader,o.update(x),J=o.getVertexShaderID(x),le=o.getFragmentShaderID(x);const ae=i.getRenderTarget(),Ce=i.state.buffers.depth.getReversed(),Be=I.isInstancedMesh===!0,Pe=I.isBatchedMesh===!0,nt=!!x.map,Te=!!x.matcap,Ve=!!Y,Qe=!!x.aoMap,ze=!!x.lightMap,X=!!x.bumpMap,lt=!!x.normalMap,Ot=!!x.displacementMap,U=!!x.emissiveMap,Ye=!!x.metalnessMap,Xe=!!x.roughnessMap,ct=x.anisotropy>0,me=x.clearcoat>0,Je=x.dispersion>0,C=x.iridescence>0,y=x.sheen>0,k=x.transmission>0,K=ct&&!!x.anisotropyMap,te=me&&!!x.clearcoatMap,fe=me&&!!x.clearcoatNormalMap,ie=me&&!!x.clearcoatRoughnessMap,j=C&&!!x.iridescenceMap,Q=C&&!!x.iridescenceThicknessMap,ge=y&&!!x.sheenColorMap,Me=y&&!!x.sheenRoughnessMap,de=!!x.specularMap,ce=!!x.specularColorMap,_e=!!x.specularIntensityMap,He=k&&!!x.transmissionMap,$e=k&&!!x.thicknessMap,L=!!x.gradientMap,oe=!!x.alphaMap,Z=x.alphaTest>0,xe=!!x.alphaHash,ue=!!x.extensions;let ne=Xi;x.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(ne=i.toneMapping);const se={shaderID:D,shaderType:x.type,shaderName:x.name,vertexShader:ke,fragmentShader:Le,defines:x.defines,customVertexShaderID:J,customFragmentShaderID:le,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:Pe,batchingColor:Pe&&I._colorsTexture!==null,instancing:Be,instancingColor:Be&&I.instanceColor!==null,instancingMorph:Be&&I.morphTexture!==null,outputColorSpace:ae===null?i.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:ut.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:nt,matcap:Te,envMap:Ve,envMapMode:Ve&&Y.mapping,envMapCubeUVHeight:ee,aoMap:Qe,lightMap:ze,bumpMap:X,normalMap:lt,displacementMap:Ot,emissiveMap:U,normalMapObjectSpace:lt&&x.normalMapType===by,normalMapTangentSpace:lt&&x.normalMapType===Yd,packedNormalMap:lt&&x.normalMapType===Yd&&kT(x.normalMap.format),metalnessMap:Ye,roughnessMap:Xe,anisotropy:ct,anisotropyMap:K,clearcoat:me,clearcoatMap:te,clearcoatNormalMap:fe,clearcoatRoughnessMap:ie,dispersion:Je,iridescence:C,iridescenceMap:j,iridescenceThicknessMap:Q,sheen:y,sheenColorMap:ge,sheenRoughnessMap:Me,specularMap:de,specularColorMap:ce,specularIntensityMap:_e,transmission:k,transmissionMap:He,thicknessMap:$e,gradientMap:L,opaque:x.transparent===!1&&x.blending===xa&&x.alphaToCoverage===!1,alphaMap:oe,alphaTest:Z,alphaHash:xe,combine:x.combine,mapUv:nt&&m(x.map.channel),aoMapUv:Qe&&m(x.aoMap.channel),lightMapUv:ze&&m(x.lightMap.channel),bumpMapUv:X&&m(x.bumpMap.channel),normalMapUv:lt&&m(x.normalMap.channel),displacementMapUv:Ot&&m(x.displacementMap.channel),emissiveMapUv:U&&m(x.emissiveMap.channel),metalnessMapUv:Ye&&m(x.metalnessMap.channel),roughnessMapUv:Xe&&m(x.roughnessMap.channel),anisotropyMapUv:K&&m(x.anisotropyMap.channel),clearcoatMapUv:te&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:fe&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&m(x.clearcoatRoughnessMap.channel),iridescenceMapUv:j&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:Me&&m(x.sheenRoughnessMap.channel),specularMapUv:de&&m(x.specularMap.channel),specularColorMapUv:ce&&m(x.specularColorMap.channel),specularIntensityMapUv:_e&&m(x.specularIntensityMap.channel),transmissionMapUv:He&&m(x.transmissionMap.channel),thicknessMapUv:$e&&m(x.thicknessMap.channel),alphaMapUv:oe&&m(x.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(lt||ct),vertexNormals:!!N.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!N.attributes.uv&&(nt||oe),fog:!!V,useFog:x.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||N.attributes.normal===void 0&&lt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Ce,skinning:I.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:Ee,morphTextureStride:qe,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:G.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:ne,decodeVideoTexture:nt&&x.map.isVideoTexture===!0&&ut.getTransfer(x.map.colorSpace)===xt,decodeVideoTextureEmissive:U&&x.emissiveMap.isVideoTexture===!0&&ut.getTransfer(x.emissiveMap.colorSpace)===xt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===cr,flipSided:x.side===$n,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ue&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ue&&x.extensions.multiDraw===!0||Pe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return se.vertexUv1s=l.has(1),se.vertexUv2s=l.has(2),se.vertexUv3s=l.has(3),l.clear(),se}function p(x){const w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(const R in x.defines)w.push(R),w.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(g(w,x),v(w,x),w.push(i.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function g(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapCubeUVHeight),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.anisotropyMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.morphAttributeCount),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.numLightProbes),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function v(x,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),x.push(a.mask)}function b(x){const w=f[x.type];let R;if(w){const P=Fi[w];R=aS.clone(P.uniforms)}else R=x.uniforms;return R}function S(x,w){let R=u.get(w);return R!==void 0?++R.usedTimes:(R=new UT(i,w,x,r),c.push(R),u.set(w,R)),R}function A(x){if(--x.usedTimes===0){const w=c.indexOf(x);c[w]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function E(x){o.remove(x)}function T(){o.dispose()}return{getParameters:_,getProgramCacheKey:p,getUniforms:b,acquireProgram:S,releaseProgram:A,releaseShaderCache:E,programs:c,dispose:T}}function VT(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,l){i.get(a)[o]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function HT(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function zp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Vp(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function o(h,f,m,_,p,g){let v=i[e];return v===void 0?(v={id:h.id,object:h,geometry:f,material:m,materialVariant:a(h),groupOrder:_,renderOrder:h.renderOrder,z:p,group:g},i[e]=v):(v.id=h.id,v.object=h,v.geometry=f,v.material=m,v.materialVariant=a(h),v.groupOrder=_,v.renderOrder=h.renderOrder,v.z=p,v.group=g),e++,v}function l(h,f,m,_,p,g){const v=o(h,f,m,_,p,g);m.transmission>0?n.push(v):m.transparent===!0?r.push(v):t.push(v)}function c(h,f,m,_,p,g){const v=o(h,f,m,_,p,g);m.transmission>0?n.unshift(v):m.transparent===!0?r.unshift(v):t.unshift(v)}function u(h,f){t.length>1&&t.sort(h||HT),n.length>1&&n.sort(f||zp),r.length>1&&r.sort(f||zp)}function d(){for(let h=e,f=i.length;h<f;h++){const m=i[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:l,unshift:c,finish:d,sort:u}}function GT(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new Vp,i.set(n,[a])):r>=s.length?(a=new Vp,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function WT(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new $,color:new St};break;case"SpotLight":t={position:new $,direction:new $,color:new St,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new $,color:new St,distance:0,decay:0};break;case"HemisphereLight":t={direction:new $,skyColor:new St,groundColor:new St};break;case"RectAreaLight":t={color:new St,position:new $,halfWidth:new $,halfHeight:new $};break}return i[e.id]=t,t}}}function XT(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let qT=0;function $T(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function jT(i){const e=new WT,t=XT(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new $);const r=new $,s=new on,a=new on;function o(c){let u=0,d=0,h=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let f=0,m=0,_=0,p=0,g=0,v=0,b=0,S=0,A=0,E=0,T=0;c.sort($T);for(let w=0,R=c.length;w<R;w++){const P=c[w],I=P.color,G=P.intensity,V=P.distance;let N=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Ls?N=P.shadow.map.texture:N=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)u+=I.r*G,d+=I.g*G,h+=I.b*G;else if(P.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(P.sh.coefficients[B],G);T++}else if(P.isDirectionalLight){const B=e.get(P);if(B.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const O=P.shadow,Y=t.get(P);Y.shadowIntensity=O.intensity,Y.shadowBias=O.bias,Y.shadowNormalBias=O.normalBias,Y.shadowRadius=O.radius,Y.shadowMapSize=O.mapSize,n.directionalShadow[f]=Y,n.directionalShadowMap[f]=N,n.directionalShadowMatrix[f]=P.shadow.matrix,v++}n.directional[f]=B,f++}else if(P.isSpotLight){const B=e.get(P);B.position.setFromMatrixPosition(P.matrixWorld),B.color.copy(I).multiplyScalar(G),B.distance=V,B.coneCos=Math.cos(P.angle),B.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),B.decay=P.decay,n.spot[_]=B;const O=P.shadow;if(P.map&&(n.spotLightMap[A]=P.map,A++,O.updateMatrices(P),P.castShadow&&E++),n.spotLightMatrix[_]=O.matrix,P.castShadow){const Y=t.get(P);Y.shadowIntensity=O.intensity,Y.shadowBias=O.bias,Y.shadowNormalBias=O.normalBias,Y.shadowRadius=O.radius,Y.shadowMapSize=O.mapSize,n.spotShadow[_]=Y,n.spotShadowMap[_]=N,S++}_++}else if(P.isRectAreaLight){const B=e.get(P);B.color.copy(I).multiplyScalar(G),B.halfWidth.set(P.width*.5,0,0),B.halfHeight.set(0,P.height*.5,0),n.rectArea[p]=B,p++}else if(P.isPointLight){const B=e.get(P);if(B.color.copy(P.color).multiplyScalar(P.intensity),B.distance=P.distance,B.decay=P.decay,P.castShadow){const O=P.shadow,Y=t.get(P);Y.shadowIntensity=O.intensity,Y.shadowBias=O.bias,Y.shadowNormalBias=O.normalBias,Y.shadowRadius=O.radius,Y.shadowMapSize=O.mapSize,Y.shadowCameraNear=O.camera.near,Y.shadowCameraFar=O.camera.far,n.pointShadow[m]=Y,n.pointShadowMap[m]=N,n.pointShadowMatrix[m]=P.shadow.matrix,b++}n.point[m]=B,m++}else if(P.isHemisphereLight){const B=e.get(P);B.skyColor.copy(P.color).multiplyScalar(G),B.groundColor.copy(P.groundColor).multiplyScalar(G),n.hemi[g]=B,g++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Se.LTC_FLOAT_1,n.rectAreaLTC2=Se.LTC_FLOAT_2):(n.rectAreaLTC1=Se.LTC_HALF_1,n.rectAreaLTC2=Se.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;const x=n.hash;(x.directionalLength!==f||x.pointLength!==m||x.spotLength!==_||x.rectAreaLength!==p||x.hemiLength!==g||x.numDirectionalShadows!==v||x.numPointShadows!==b||x.numSpotShadows!==S||x.numSpotMaps!==A||x.numLightProbes!==T)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=p,n.point.length=m,n.hemi.length=g,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=S+A-E,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=T,x.directionalLength=f,x.pointLength=m,x.spotLength=_,x.rectAreaLength=p,x.hemiLength=g,x.numDirectionalShadows=v,x.numPointShadows=b,x.numSpotShadows=S,x.numSpotMaps=A,x.numLightProbes=T,n.version=qT++)}function l(c,u){let d=0,h=0,f=0,m=0,_=0;const p=u.matrixWorldInverse;for(let g=0,v=c.length;g<v;g++){const b=c[g];if(b.isDirectionalLight){const S=n.directional[d];S.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),d++}else if(b.isSpotLight){const S=n.spot[f];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),f++}else if(b.isRectAreaLight){const S=n.rectArea[m];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(p),a.identity(),s.copy(b.matrixWorld),s.premultiply(p),a.extractRotation(s),S.halfWidth.set(b.width*.5,0,0),S.halfHeight.set(0,b.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),m++}else if(b.isPointLight){const S=n.point[h];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(p),h++}else if(b.isHemisphereLight){const S=n.hemi[_];S.direction.setFromMatrixPosition(b.matrixWorld),S.direction.transformDirection(p),_++}}}return{setup:o,setupView:l,state:n}}function Hp(i){const e=new jT(i),t=[],n=[],r=[];function s(h){d.camera=h,t.length=0,n.length=0,r.length=0}function a(h){t.push(h)}function o(h){n.push(h)}function l(h){r.push(h)}function c(){e.setup(t)}function u(h){e.setupView(t,h)}const d={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function YT(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Hp(i),e.set(r,[o])):s>=a.length?(o=new Hp(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const KT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ZT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,JT=[new $(1,0,0),new $(-1,0,0),new $(0,1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1)],QT=[new $(0,-1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1),new $(0,-1,0),new $(0,-1,0)],Gp=new on,Qa=new $,Ru=new $;function ew(i,e,t){let n=new _g;const r=new mt,s=new mt,a=new jt,o=new uS,l=new hS,c={},u=t.maxTextureSize,d={[Jr]:$n,[$n]:Jr,[cr]:cr},h=new Pi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new mt},radius:{value:4}},vertexShader:KT,fragmentShader:ZT}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const m=new br;m.setAttribute("position",new $i(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ki(m,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hl;let g=this.type;this.render=function(E,T,x){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;this.type===Qx&&(We("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Hl);const w=i.getRenderTarget(),R=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),I=i.state;I.setBlending(dr),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const G=g!==this.type;G&&T.traverse(function(V){V.material&&(Array.isArray(V.material)?V.material.forEach(N=>N.needsUpdate=!0):V.material.needsUpdate=!0)});for(let V=0,N=E.length;V<N;V++){const B=E[V],O=B.shadow;if(O===void 0){We("WebGLShadowMap:",B,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;r.copy(O.mapSize);const Y=O.getFrameExtents();r.multiply(Y),s.copy(O.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Y.x),r.x=s.x*Y.x,O.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Y.y),r.y=s.y*Y.y,O.mapSize.y=s.y));const ee=i.state.buffers.depth.getReversed();if(O.camera._reversedDepth=ee,O.map===null||G===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===oo){if(B.isPointLight){We("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new qi(r.x,r.y,{format:Ls,type:vr,minFilter:Cn,magFilter:Cn,generateMipmaps:!1}),O.map.texture.name=B.name+".shadowMap",O.map.depthTexture=new La(r.x,r.y,Hi),O.map.depthTexture.name=B.name+".shadowMapDepth",O.map.depthTexture.format=xr,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=vn,O.map.depthTexture.magFilter=vn}else B.isPointLight?(O.map=new Mg(r.x),O.map.depthTexture=new rS(r.x,Yi)):(O.map=new qi(r.x,r.y),O.map.depthTexture=new La(r.x,r.y,Yi)),O.map.depthTexture.name=B.name+".shadowMap",O.map.depthTexture.format=xr,this.type===Hl?(O.map.depthTexture.compareFunction=ee?Ff:Of,O.map.depthTexture.minFilter=Cn,O.map.depthTexture.magFilter=Cn):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=vn,O.map.depthTexture.magFilter=vn);O.camera.updateProjectionMatrix()}const D=O.map.isWebGLCubeRenderTarget?6:1;for(let pe=0;pe<D;pe++){if(O.map.isWebGLCubeRenderTarget)i.setRenderTarget(O.map,pe),i.clear();else{pe===0&&(i.setRenderTarget(O.map),i.clear());const Ee=O.getViewport(pe);a.set(s.x*Ee.x,s.y*Ee.y,s.x*Ee.z,s.y*Ee.w),I.viewport(a)}if(B.isPointLight){const Ee=O.camera,qe=O.matrix,ke=B.distance||Ee.far;ke!==Ee.far&&(Ee.far=ke,Ee.updateProjectionMatrix()),Qa.setFromMatrixPosition(B.matrixWorld),Ee.position.copy(Qa),Ru.copy(Ee.position),Ru.add(JT[pe]),Ee.up.copy(QT[pe]),Ee.lookAt(Ru),Ee.updateMatrixWorld(),qe.makeTranslation(-Qa.x,-Qa.y,-Qa.z),Gp.multiplyMatrices(Ee.projectionMatrix,Ee.matrixWorldInverse),O._frustum.setFromProjectionMatrix(Gp,Ee.coordinateSystem,Ee.reversedDepth)}else O.updateMatrices(B);n=O.getFrustum(),S(T,x,O.camera,B,this.type)}O.isPointLightShadow!==!0&&this.type===oo&&v(O,x),O.needsUpdate=!1}g=this.type,p.needsUpdate=!1,i.setRenderTarget(w,R,P)};function v(E,T){const x=e.update(_);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new qi(r.x,r.y,{format:Ls,type:vr})),h.uniforms.shadow_pass.value=E.map.depthTexture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(T,null,x,h,_,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(T,null,x,f,_,null)}function b(E,T,x,w){let R=null;const P=x.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)R=P;else if(R=x.isPointLight===!0?l:o,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const I=R.uuid,G=T.uuid;let V=c[I];V===void 0&&(V={},c[I]=V);let N=V[G];N===void 0&&(N=R.clone(),V[G]=N,T.addEventListener("dispose",A)),R=N}if(R.visible=T.visible,R.wireframe=T.wireframe,w===oo?R.side=T.shadowSide!==null?T.shadowSide:T.side:R.side=T.shadowSide!==null?T.shadowSide:d[T.side],R.alphaMap=T.alphaMap,R.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,R.map=T.map,R.clipShadows=T.clipShadows,R.clippingPlanes=T.clippingPlanes,R.clipIntersection=T.clipIntersection,R.displacementMap=T.displacementMap,R.displacementScale=T.displacementScale,R.displacementBias=T.displacementBias,R.wireframeLinewidth=T.wireframeLinewidth,R.linewidth=T.linewidth,x.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const I=i.properties.get(R);I.light=x}return R}function S(E,T,x,w,R){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&R===oo)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,E.matrixWorld);const G=e.update(E),V=E.material;if(Array.isArray(V)){const N=G.groups;for(let B=0,O=N.length;B<O;B++){const Y=N[B],ee=V[Y.materialIndex];if(ee&&ee.visible){const D=b(E,ee,w,R);E.onBeforeShadow(i,E,T,x,G,D,Y),i.renderBufferDirect(x,null,G,D,E,Y),E.onAfterShadow(i,E,T,x,G,D,Y)}}}else if(V.visible){const N=b(E,V,w,R);E.onBeforeShadow(i,E,T,x,G,N,null),i.renderBufferDirect(x,null,G,N,E,null),E.onAfterShadow(i,E,T,x,G,N,null)}}const I=E.children;for(let G=0,V=I.length;G<V;G++)S(I[G],T,x,w,R)}function A(E){E.target.removeEventListener("dispose",A);for(const x in c){const w=c[x],R=E.target.uuid;R in w&&(w[R].dispose(),delete w[R])}}}function tw(i,e){function t(){let L=!1;const oe=new jt;let Z=null;const xe=new jt(0,0,0,0);return{setMask:function(ue){Z!==ue&&!L&&(i.colorMask(ue,ue,ue,ue),Z=ue)},setLocked:function(ue){L=ue},setClear:function(ue,ne,se,he,Oe){Oe===!0&&(ue*=he,ne*=he,se*=he),oe.set(ue,ne,se,he),xe.equals(oe)===!1&&(i.clearColor(ue,ne,se,he),xe.copy(oe))},reset:function(){L=!1,Z=null,xe.set(-1,0,0,0)}}}function n(){let L=!1,oe=!1,Z=null,xe=null,ue=null;return{setReversed:function(ne){if(oe!==ne){const se=e.get("EXT_clip_control");ne?se.clipControlEXT(se.LOWER_LEFT_EXT,se.ZERO_TO_ONE_EXT):se.clipControlEXT(se.LOWER_LEFT_EXT,se.NEGATIVE_ONE_TO_ONE_EXT),oe=ne;const he=ue;ue=null,this.setClear(he)}},getReversed:function(){return oe},setTest:function(ne){ne?ae(i.DEPTH_TEST):Ce(i.DEPTH_TEST)},setMask:function(ne){Z!==ne&&!L&&(i.depthMask(ne),Z=ne)},setFunc:function(ne){if(oe&&(ne=Iy[ne]),xe!==ne){switch(ne){case uh:i.depthFunc(i.NEVER);break;case hh:i.depthFunc(i.ALWAYS);break;case fh:i.depthFunc(i.LESS);break;case Da:i.depthFunc(i.LEQUAL);break;case dh:i.depthFunc(i.EQUAL);break;case ph:i.depthFunc(i.GEQUAL);break;case mh:i.depthFunc(i.GREATER);break;case _h:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}xe=ne}},setLocked:function(ne){L=ne},setClear:function(ne){ue!==ne&&(ue=ne,oe&&(ne=1-ne),i.clearDepth(ne))},reset:function(){L=!1,Z=null,xe=null,ue=null,oe=!1}}}function r(){let L=!1,oe=null,Z=null,xe=null,ue=null,ne=null,se=null,he=null,Oe=null;return{setTest:function(re){L||(re?ae(i.STENCIL_TEST):Ce(i.STENCIL_TEST))},setMask:function(re){oe!==re&&!L&&(i.stencilMask(re),oe=re)},setFunc:function(re,Fe,De){(Z!==re||xe!==Fe||ue!==De)&&(i.stencilFunc(re,Fe,De),Z=re,xe=Fe,ue=De)},setOp:function(re,Fe,De){(ne!==re||se!==Fe||he!==De)&&(i.stencilOp(re,Fe,De),ne=re,se=Fe,he=De)},setLocked:function(re){L=re},setClear:function(re){Oe!==re&&(i.clearStencil(re),Oe=re)},reset:function(){L=!1,oe=null,Z=null,xe=null,ue=null,ne=null,se=null,he=null,Oe=null}}}const s=new t,a=new n,o=new r,l=new WeakMap,c=new WeakMap;let u={},d={},h={},f=new WeakMap,m=[],_=null,p=!1,g=null,v=null,b=null,S=null,A=null,E=null,T=null,x=new St(0,0,0),w=0,R=!1,P=null,I=null,G=null,V=null,N=null;const B=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,Y=0;const ee=i.getParameter(i.VERSION);ee.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(ee)[1]),O=Y>=1):ee.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),O=Y>=2);let D=null,pe={};const Ee=i.getParameter(i.SCISSOR_BOX),qe=i.getParameter(i.VIEWPORT),ke=new jt().fromArray(Ee),Le=new jt().fromArray(qe);function J(L,oe,Z,xe){const ue=new Uint8Array(4),ne=i.createTexture();i.bindTexture(L,ne),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let se=0;se<Z;se++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(oe,0,i.RGBA,1,1,xe,0,i.RGBA,i.UNSIGNED_BYTE,ue):i.texImage2D(oe+se,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ue);return ne}const le={};le[i.TEXTURE_2D]=J(i.TEXTURE_2D,i.TEXTURE_2D,1),le[i.TEXTURE_CUBE_MAP]=J(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[i.TEXTURE_2D_ARRAY]=J(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),le[i.TEXTURE_3D]=J(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ae(i.DEPTH_TEST),a.setFunc(Da),X(!1),lt(Xd),ae(i.CULL_FACE),Qe(dr);function ae(L){u[L]!==!0&&(i.enable(L),u[L]=!0)}function Ce(L){u[L]!==!1&&(i.disable(L),u[L]=!1)}function Be(L,oe){return h[L]!==oe?(i.bindFramebuffer(L,oe),h[L]=oe,L===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=oe),L===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=oe),!0):!1}function Pe(L,oe){let Z=m,xe=!1;if(L){Z=f.get(oe),Z===void 0&&(Z=[],f.set(oe,Z));const ue=L.textures;if(Z.length!==ue.length||Z[0]!==i.COLOR_ATTACHMENT0){for(let ne=0,se=ue.length;ne<se;ne++)Z[ne]=i.COLOR_ATTACHMENT0+ne;Z.length=ue.length,xe=!0}}else Z[0]!==i.BACK&&(Z[0]=i.BACK,xe=!0);xe&&i.drawBuffers(Z)}function nt(L){return _!==L?(i.useProgram(L),_=L,!0):!1}const Te={[ds]:i.FUNC_ADD,[ty]:i.FUNC_SUBTRACT,[ny]:i.FUNC_REVERSE_SUBTRACT};Te[iy]=i.MIN,Te[ry]=i.MAX;const Ve={[sy]:i.ZERO,[ay]:i.ONE,[oy]:i.SRC_COLOR,[lh]:i.SRC_ALPHA,[dy]:i.SRC_ALPHA_SATURATE,[hy]:i.DST_COLOR,[cy]:i.DST_ALPHA,[ly]:i.ONE_MINUS_SRC_COLOR,[ch]:i.ONE_MINUS_SRC_ALPHA,[fy]:i.ONE_MINUS_DST_COLOR,[uy]:i.ONE_MINUS_DST_ALPHA,[py]:i.CONSTANT_COLOR,[my]:i.ONE_MINUS_CONSTANT_COLOR,[_y]:i.CONSTANT_ALPHA,[gy]:i.ONE_MINUS_CONSTANT_ALPHA};function Qe(L,oe,Z,xe,ue,ne,se,he,Oe,re){if(L===dr){p===!0&&(Ce(i.BLEND),p=!1);return}if(p===!1&&(ae(i.BLEND),p=!0),L!==ey){if(L!==g||re!==R){if((v!==ds||A!==ds)&&(i.blendEquation(i.FUNC_ADD),v=ds,A=ds),re)switch(L){case xa:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case qd:i.blendFunc(i.ONE,i.ONE);break;case $d:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case jd:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:pt("WebGLState: Invalid blending: ",L);break}else switch(L){case xa:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case qd:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case $d:pt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case jd:pt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:pt("WebGLState: Invalid blending: ",L);break}b=null,S=null,E=null,T=null,x.set(0,0,0),w=0,g=L,R=re}return}ue=ue||oe,ne=ne||Z,se=se||xe,(oe!==v||ue!==A)&&(i.blendEquationSeparate(Te[oe],Te[ue]),v=oe,A=ue),(Z!==b||xe!==S||ne!==E||se!==T)&&(i.blendFuncSeparate(Ve[Z],Ve[xe],Ve[ne],Ve[se]),b=Z,S=xe,E=ne,T=se),(he.equals(x)===!1||Oe!==w)&&(i.blendColor(he.r,he.g,he.b,Oe),x.copy(he),w=Oe),g=L,R=!1}function ze(L,oe){L.side===cr?Ce(i.CULL_FACE):ae(i.CULL_FACE);let Z=L.side===$n;oe&&(Z=!Z),X(Z),L.blending===xa&&L.transparent===!1?Qe(dr):Qe(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),s.setMask(L.colorWrite);const xe=L.stencilWrite;o.setTest(xe),xe&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),U(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ae(i.SAMPLE_ALPHA_TO_COVERAGE):Ce(i.SAMPLE_ALPHA_TO_COVERAGE)}function X(L){P!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),P=L)}function lt(L){L!==Zx?(ae(i.CULL_FACE),L!==I&&(L===Xd?i.cullFace(i.BACK):L===Jx?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ce(i.CULL_FACE),I=L}function Ot(L){L!==G&&(O&&i.lineWidth(L),G=L)}function U(L,oe,Z){L?(ae(i.POLYGON_OFFSET_FILL),(V!==oe||N!==Z)&&(V=oe,N=Z,a.getReversed()&&(oe=-oe),i.polygonOffset(oe,Z))):Ce(i.POLYGON_OFFSET_FILL)}function Ye(L){L?ae(i.SCISSOR_TEST):Ce(i.SCISSOR_TEST)}function Xe(L){L===void 0&&(L=i.TEXTURE0+B-1),D!==L&&(i.activeTexture(L),D=L)}function ct(L,oe,Z){Z===void 0&&(D===null?Z=i.TEXTURE0+B-1:Z=D);let xe=pe[Z];xe===void 0&&(xe={type:void 0,texture:void 0},pe[Z]=xe),(xe.type!==L||xe.texture!==oe)&&(D!==Z&&(i.activeTexture(Z),D=Z),i.bindTexture(L,oe||le[L]),xe.type=L,xe.texture=oe)}function me(){const L=pe[D];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Je(){try{i.compressedTexImage2D(...arguments)}catch(L){pt("WebGLState:",L)}}function C(){try{i.compressedTexImage3D(...arguments)}catch(L){pt("WebGLState:",L)}}function y(){try{i.texSubImage2D(...arguments)}catch(L){pt("WebGLState:",L)}}function k(){try{i.texSubImage3D(...arguments)}catch(L){pt("WebGLState:",L)}}function K(){try{i.compressedTexSubImage2D(...arguments)}catch(L){pt("WebGLState:",L)}}function te(){try{i.compressedTexSubImage3D(...arguments)}catch(L){pt("WebGLState:",L)}}function fe(){try{i.texStorage2D(...arguments)}catch(L){pt("WebGLState:",L)}}function ie(){try{i.texStorage3D(...arguments)}catch(L){pt("WebGLState:",L)}}function j(){try{i.texImage2D(...arguments)}catch(L){pt("WebGLState:",L)}}function Q(){try{i.texImage3D(...arguments)}catch(L){pt("WebGLState:",L)}}function ge(L){return d[L]!==void 0?d[L]:i.getParameter(L)}function Me(L,oe){d[L]!==oe&&(i.pixelStorei(L,oe),d[L]=oe)}function de(L){ke.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),ke.copy(L))}function ce(L){Le.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),Le.copy(L))}function _e(L,oe){let Z=c.get(oe);Z===void 0&&(Z=new WeakMap,c.set(oe,Z));let xe=Z.get(L);xe===void 0&&(xe=i.getUniformBlockIndex(oe,L.name),Z.set(L,xe))}function He(L,oe){const xe=c.get(oe).get(L);l.get(oe)!==xe&&(i.uniformBlockBinding(oe,xe,L.__bindingPointIndex),l.set(oe,xe))}function $e(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},d={},D=null,pe={},h={},f=new WeakMap,m=[],_=null,p=!1,g=null,v=null,b=null,S=null,A=null,E=null,T=null,x=new St(0,0,0),w=0,R=!1,P=null,I=null,G=null,V=null,N=null,ke.set(0,0,i.canvas.width,i.canvas.height),Le.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ae,disable:Ce,bindFramebuffer:Be,drawBuffers:Pe,useProgram:nt,setBlending:Qe,setMaterial:ze,setFlipSided:X,setCullFace:lt,setLineWidth:Ot,setPolygonOffset:U,setScissorTest:Ye,activeTexture:Xe,bindTexture:ct,unbindTexture:me,compressedTexImage2D:Je,compressedTexImage3D:C,texImage2D:j,texImage3D:Q,pixelStorei:Me,getParameter:ge,updateUBOMapping:_e,uniformBlockBinding:He,texStorage2D:fe,texStorage3D:ie,texSubImage2D:y,texSubImage3D:k,compressedTexSubImage2D:K,compressedTexSubImage3D:te,scissor:de,viewport:ce,reset:$e}}function nw(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new mt,u=new WeakMap,d=new Set;let h;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,y){return m?new OffscreenCanvas(C,y):ko("canvas")}function p(C,y,k){let K=1;const te=Je(C);if((te.width>k||te.height>k)&&(K=k/Math.max(te.width,te.height)),K<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const fe=Math.floor(K*te.width),ie=Math.floor(K*te.height);h===void 0&&(h=_(fe,ie));const j=y?_(fe,ie):h;return j.width=fe,j.height=ie,j.getContext("2d").drawImage(C,0,0,fe,ie),We("WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+fe+"x"+ie+")."),j}else return"data"in C&&We("WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),C;return C}function g(C){return C.generateMipmaps}function v(C){i.generateMipmap(C)}function b(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(C,y,k,K,te,fe=!1){if(C!==null){if(i[C]!==void 0)return i[C];We("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ie;K&&(ie=e.get("EXT_texture_norm16"),ie||We("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=y;if(y===i.RED&&(k===i.FLOAT&&(j=i.R32F),k===i.HALF_FLOAT&&(j=i.R16F),k===i.UNSIGNED_BYTE&&(j=i.R8),k===i.UNSIGNED_SHORT&&ie&&(j=ie.R16_EXT),k===i.SHORT&&ie&&(j=ie.R16_SNORM_EXT)),y===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(j=i.R8UI),k===i.UNSIGNED_SHORT&&(j=i.R16UI),k===i.UNSIGNED_INT&&(j=i.R32UI),k===i.BYTE&&(j=i.R8I),k===i.SHORT&&(j=i.R16I),k===i.INT&&(j=i.R32I)),y===i.RG&&(k===i.FLOAT&&(j=i.RG32F),k===i.HALF_FLOAT&&(j=i.RG16F),k===i.UNSIGNED_BYTE&&(j=i.RG8),k===i.UNSIGNED_SHORT&&ie&&(j=ie.RG16_EXT),k===i.SHORT&&ie&&(j=ie.RG16_SNORM_EXT)),y===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(j=i.RG8UI),k===i.UNSIGNED_SHORT&&(j=i.RG16UI),k===i.UNSIGNED_INT&&(j=i.RG32UI),k===i.BYTE&&(j=i.RG8I),k===i.SHORT&&(j=i.RG16I),k===i.INT&&(j=i.RG32I)),y===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(j=i.RGB8UI),k===i.UNSIGNED_SHORT&&(j=i.RGB16UI),k===i.UNSIGNED_INT&&(j=i.RGB32UI),k===i.BYTE&&(j=i.RGB8I),k===i.SHORT&&(j=i.RGB16I),k===i.INT&&(j=i.RGB32I)),y===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),k===i.UNSIGNED_INT&&(j=i.RGBA32UI),k===i.BYTE&&(j=i.RGBA8I),k===i.SHORT&&(j=i.RGBA16I),k===i.INT&&(j=i.RGBA32I)),y===i.RGB&&(k===i.UNSIGNED_SHORT&&ie&&(j=ie.RGB16_EXT),k===i.SHORT&&ie&&(j=ie.RGB16_SNORM_EXT),k===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),k===i.UNSIGNED_INT_10F_11F_11F_REV&&(j=i.R11F_G11F_B10F)),y===i.RGBA){const Q=fe?cc:ut.getTransfer(te);k===i.FLOAT&&(j=i.RGBA32F),k===i.HALF_FLOAT&&(j=i.RGBA16F),k===i.UNSIGNED_BYTE&&(j=Q===xt?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT&&ie&&(j=ie.RGBA16_EXT),k===i.SHORT&&ie&&(j=ie.RGBA16_SNORM_EXT),k===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function A(C,y){let k;return C?y===null||y===Yi||y===Bo?k=i.DEPTH24_STENCIL8:y===Hi?k=i.DEPTH32F_STENCIL8:y===Fo&&(k=i.DEPTH24_STENCIL8,We("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Yi||y===Bo?k=i.DEPTH_COMPONENT24:y===Hi?k=i.DEPTH_COMPONENT32F:y===Fo&&(k=i.DEPTH_COMPONENT16),k}function E(C,y){return g(C)===!0||C.isFramebufferTexture&&C.minFilter!==vn&&C.minFilter!==Cn?Math.log2(Math.max(y.width,y.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?y.mipmaps.length:1}function T(C){const y=C.target;y.removeEventListener("dispose",T),w(y),y.isVideoTexture&&u.delete(y),y.isHTMLTexture&&d.delete(y)}function x(C){const y=C.target;y.removeEventListener("dispose",x),P(y)}function w(C){const y=n.get(C);if(y.__webglInit===void 0)return;const k=C.source,K=f.get(k);if(K){const te=K[y.__cacheKey];te.usedTimes--,te.usedTimes===0&&R(C),Object.keys(K).length===0&&f.delete(k)}n.remove(C)}function R(C){const y=n.get(C);i.deleteTexture(y.__webglTexture);const k=C.source,K=f.get(k);delete K[y.__cacheKey],a.memory.textures--}function P(C){const y=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(y.__webglFramebuffer[K]))for(let te=0;te<y.__webglFramebuffer[K].length;te++)i.deleteFramebuffer(y.__webglFramebuffer[K][te]);else i.deleteFramebuffer(y.__webglFramebuffer[K]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[K])}else{if(Array.isArray(y.__webglFramebuffer))for(let K=0;K<y.__webglFramebuffer.length;K++)i.deleteFramebuffer(y.__webglFramebuffer[K]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let K=0;K<y.__webglColorRenderbuffer.length;K++)y.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[K]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const k=C.textures;for(let K=0,te=k.length;K<te;K++){const fe=n.get(k[K]);fe.__webglTexture&&(i.deleteTexture(fe.__webglTexture),a.memory.textures--),n.remove(k[K])}n.remove(C)}let I=0;function G(){I=0}function V(){return I}function N(C){I=C}function B(){const C=I;return C>=r.maxTextures&&We("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),I+=1,C}function O(C){const y=[];return y.push(C.wrapS),y.push(C.wrapT),y.push(C.wrapR||0),y.push(C.magFilter),y.push(C.minFilter),y.push(C.anisotropy),y.push(C.internalFormat),y.push(C.format),y.push(C.type),y.push(C.generateMipmaps),y.push(C.premultiplyAlpha),y.push(C.flipY),y.push(C.unpackAlignment),y.push(C.colorSpace),y.join()}function Y(C,y){const k=n.get(C);if(C.isVideoTexture&&ct(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&k.__version!==C.version){const K=C.image;if(K===null)We("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)We("WebGLRenderer: Texture marked for update but image is incomplete");else{Ce(k,C,y);return}}else C.isExternalTexture&&(k.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+y)}function ee(C,y){const k=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){Ce(k,C,y);return}else C.isExternalTexture&&(k.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+y)}function D(C,y){const k=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){Ce(k,C,y);return}t.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+y)}function pe(C,y){const k=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&k.__version!==C.version){Be(k,C,y);return}t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+y)}const Ee={[gh]:i.REPEAT,[hr]:i.CLAMP_TO_EDGE,[vh]:i.MIRRORED_REPEAT},qe={[vn]:i.NEAREST,[yy]:i.NEAREST_MIPMAP_NEAREST,[cl]:i.NEAREST_MIPMAP_LINEAR,[Cn]:i.LINEAR,[Jc]:i.LINEAR_MIPMAP_NEAREST,[gs]:i.LINEAR_MIPMAP_LINEAR},ke={[My]:i.NEVER,[Cy]:i.ALWAYS,[Ey]:i.LESS,[Of]:i.LEQUAL,[Ty]:i.EQUAL,[Ff]:i.GEQUAL,[wy]:i.GREATER,[Ay]:i.NOTEQUAL};function Le(C,y){if(y.type===Hi&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Cn||y.magFilter===Jc||y.magFilter===cl||y.magFilter===gs||y.minFilter===Cn||y.minFilter===Jc||y.minFilter===cl||y.minFilter===gs)&&We("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,Ee[y.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,Ee[y.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,Ee[y.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,qe[y.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,qe[y.minFilter]),y.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,ke[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===vn||y.minFilter!==cl&&y.minFilter!==gs||y.type===Hi&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");i.texParameterf(C,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function J(C,y){let k=!1;C.__webglInit===void 0&&(C.__webglInit=!0,y.addEventListener("dispose",T));const K=y.source;let te=f.get(K);te===void 0&&(te={},f.set(K,te));const fe=O(y);if(fe!==C.__cacheKey){te[fe]===void 0&&(te[fe]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,k=!0),te[fe].usedTimes++;const ie=te[C.__cacheKey];ie!==void 0&&(te[C.__cacheKey].usedTimes--,ie.usedTimes===0&&R(y)),C.__cacheKey=fe,C.__webglTexture=te[fe].texture}return k}function le(C,y,k){return Math.floor(Math.floor(C/k)/y)}function ae(C,y,k,K){const fe=C.updateRanges;if(fe.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,y.width,y.height,k,K,y.data);else{fe.sort((Me,de)=>Me.start-de.start);let ie=0;for(let Me=1;Me<fe.length;Me++){const de=fe[ie],ce=fe[Me],_e=de.start+de.count,He=le(ce.start,y.width,4),$e=le(de.start,y.width,4);ce.start<=_e+1&&He===$e&&le(ce.start+ce.count-1,y.width,4)===He?de.count=Math.max(de.count,ce.start+ce.count-de.start):(++ie,fe[ie]=ce)}fe.length=ie+1;const j=t.getParameter(i.UNPACK_ROW_LENGTH),Q=t.getParameter(i.UNPACK_SKIP_PIXELS),ge=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,y.width);for(let Me=0,de=fe.length;Me<de;Me++){const ce=fe[Me],_e=Math.floor(ce.start/4),He=Math.ceil(ce.count/4),$e=_e%y.width,L=Math.floor(_e/y.width),oe=He,Z=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,$e),t.pixelStorei(i.UNPACK_SKIP_ROWS,L),t.texSubImage2D(i.TEXTURE_2D,0,$e,L,oe,Z,k,K,y.data)}C.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,j),t.pixelStorei(i.UNPACK_SKIP_PIXELS,Q),t.pixelStorei(i.UNPACK_SKIP_ROWS,ge)}}function Ce(C,y,k){let K=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(K=i.TEXTURE_3D);const te=J(C,y),fe=y.source;t.bindTexture(K,C.__webglTexture,i.TEXTURE0+k);const ie=n.get(fe);if(fe.version!==ie.__version||te===!0){if(t.activeTexture(i.TEXTURE0+k),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){const Z=ut.getPrimaries(ut.workingColorSpace),xe=y.colorSpace===Fr?null:ut.getPrimaries(y.colorSpace),ue=y.colorSpace===Fr||Z===xe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue)}t.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment);let Q=p(y.image,!1,r.maxTextureSize);Q=me(y,Q);const ge=s.convert(y.format,y.colorSpace),Me=s.convert(y.type);let de=S(y.internalFormat,ge,Me,y.normalized,y.colorSpace,y.isVideoTexture);Le(K,y);let ce;const _e=y.mipmaps,He=y.isVideoTexture!==!0,$e=ie.__version===void 0||te===!0,L=fe.dataReady,oe=E(y,Q);if(y.isDepthTexture)de=A(y.format===vs,y.type),$e&&(He?t.texStorage2D(i.TEXTURE_2D,1,de,Q.width,Q.height):t.texImage2D(i.TEXTURE_2D,0,de,Q.width,Q.height,0,ge,Me,null));else if(y.isDataTexture)if(_e.length>0){He&&$e&&t.texStorage2D(i.TEXTURE_2D,oe,de,_e[0].width,_e[0].height);for(let Z=0,xe=_e.length;Z<xe;Z++)ce=_e[Z],He?L&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,ce.width,ce.height,ge,Me,ce.data):t.texImage2D(i.TEXTURE_2D,Z,de,ce.width,ce.height,0,ge,Me,ce.data);y.generateMipmaps=!1}else He?($e&&t.texStorage2D(i.TEXTURE_2D,oe,de,Q.width,Q.height),L&&ae(y,Q,ge,Me)):t.texImage2D(i.TEXTURE_2D,0,de,Q.width,Q.height,0,ge,Me,Q.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){He&&$e&&t.texStorage3D(i.TEXTURE_2D_ARRAY,oe,de,_e[0].width,_e[0].height,Q.depth);for(let Z=0,xe=_e.length;Z<xe;Z++)if(ce=_e[Z],y.format!==Ri)if(ge!==null)if(He){if(L)if(y.layerUpdates.size>0){const ue=yp(ce.width,ce.height,y.format,y.type);for(const ne of y.layerUpdates){const se=ce.data.subarray(ne*ue/ce.data.BYTES_PER_ELEMENT,(ne+1)*ue/ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,ne,ce.width,ce.height,1,ge,se)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,ce.width,ce.height,Q.depth,ge,ce.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Z,de,ce.width,ce.height,Q.depth,0,ce.data,0,0);else We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else He?L&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,ce.width,ce.height,Q.depth,ge,Me,ce.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Z,de,ce.width,ce.height,Q.depth,0,ge,Me,ce.data)}else{He&&$e&&t.texStorage2D(i.TEXTURE_2D,oe,de,_e[0].width,_e[0].height);for(let Z=0,xe=_e.length;Z<xe;Z++)ce=_e[Z],y.format!==Ri?ge!==null?He?L&&t.compressedTexSubImage2D(i.TEXTURE_2D,Z,0,0,ce.width,ce.height,ge,ce.data):t.compressedTexImage2D(i.TEXTURE_2D,Z,de,ce.width,ce.height,0,ce.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?L&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,ce.width,ce.height,ge,Me,ce.data):t.texImage2D(i.TEXTURE_2D,Z,de,ce.width,ce.height,0,ge,Me,ce.data)}else if(y.isDataArrayTexture)if(He){if($e&&t.texStorage3D(i.TEXTURE_2D_ARRAY,oe,de,Q.width,Q.height,Q.depth),L)if(y.layerUpdates.size>0){const Z=yp(Q.width,Q.height,y.format,y.type);for(const xe of y.layerUpdates){const ue=Q.data.subarray(xe*Z/Q.data.BYTES_PER_ELEMENT,(xe+1)*Z/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,xe,Q.width,Q.height,1,ge,Me,ue)}y.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ge,Me,Q.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,de,Q.width,Q.height,Q.depth,0,ge,Me,Q.data);else if(y.isData3DTexture)He?($e&&t.texStorage3D(i.TEXTURE_3D,oe,de,Q.width,Q.height,Q.depth),L&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ge,Me,Q.data)):t.texImage3D(i.TEXTURE_3D,0,de,Q.width,Q.height,Q.depth,0,ge,Me,Q.data);else if(y.isFramebufferTexture){if($e)if(He)t.texStorage2D(i.TEXTURE_2D,oe,de,Q.width,Q.height);else{let Z=Q.width,xe=Q.height;for(let ue=0;ue<oe;ue++)t.texImage2D(i.TEXTURE_2D,ue,de,Z,xe,0,ge,Me,null),Z>>=1,xe>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in i){const Z=i.canvas;if(Z.hasAttribute("layoutsubtree")||Z.setAttribute("layoutsubtree","true"),Q.parentNode!==Z){Z.appendChild(Q),d.add(y),Z.onpaint=he=>{const Oe=he.changedElements;for(const re of d)Oe.includes(re.image)&&(re.needsUpdate=!0)},Z.requestPaint();return}const xe=0,ue=i.RGBA,ne=i.RGBA,se=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,xe,ue,ne,se,Q),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(_e.length>0){if(He&&$e){const Z=Je(_e[0]);t.texStorage2D(i.TEXTURE_2D,oe,de,Z.width,Z.height)}for(let Z=0,xe=_e.length;Z<xe;Z++)ce=_e[Z],He?L&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,ge,Me,ce):t.texImage2D(i.TEXTURE_2D,Z,de,ge,Me,ce);y.generateMipmaps=!1}else if(He){if($e){const Z=Je(Q);t.texStorage2D(i.TEXTURE_2D,oe,de,Z.width,Z.height)}L&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ge,Me,Q)}else t.texImage2D(i.TEXTURE_2D,0,de,ge,Me,Q);g(y)&&v(K),ie.__version=fe.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function Be(C,y,k){if(y.image.length!==6)return;const K=J(C,y),te=y.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+k);const fe=n.get(te);if(te.version!==fe.__version||K===!0){t.activeTexture(i.TEXTURE0+k);const ie=ut.getPrimaries(ut.workingColorSpace),j=y.colorSpace===Fr?null:ut.getPrimaries(y.colorSpace),Q=y.colorSpace===Fr||ie===j?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);const ge=y.isCompressedTexture||y.image[0].isCompressedTexture,Me=y.image[0]&&y.image[0].isDataTexture,de=[];for(let ne=0;ne<6;ne++)!ge&&!Me?de[ne]=p(y.image[ne],!0,r.maxCubemapSize):de[ne]=Me?y.image[ne].image:y.image[ne],de[ne]=me(y,de[ne]);const ce=de[0],_e=s.convert(y.format,y.colorSpace),He=s.convert(y.type),$e=S(y.internalFormat,_e,He,y.normalized,y.colorSpace),L=y.isVideoTexture!==!0,oe=fe.__version===void 0||K===!0,Z=te.dataReady;let xe=E(y,ce);Le(i.TEXTURE_CUBE_MAP,y);let ue;if(ge){L&&oe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,xe,$e,ce.width,ce.height);for(let ne=0;ne<6;ne++){ue=de[ne].mipmaps;for(let se=0;se<ue.length;se++){const he=ue[se];y.format!==Ri?_e!==null?L?Z&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,se,0,0,he.width,he.height,_e,he.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,se,$e,he.width,he.height,0,he.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?Z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,se,0,0,he.width,he.height,_e,He,he.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,se,$e,he.width,he.height,0,_e,He,he.data)}}}else{if(ue=y.mipmaps,L&&oe){ue.length>0&&xe++;const ne=Je(de[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,xe,$e,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(Me){L?Z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,de[ne].width,de[ne].height,_e,He,de[ne].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,$e,de[ne].width,de[ne].height,0,_e,He,de[ne].data);for(let se=0;se<ue.length;se++){const Oe=ue[se].image[ne].image;L?Z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,se+1,0,0,Oe.width,Oe.height,_e,He,Oe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,se+1,$e,Oe.width,Oe.height,0,_e,He,Oe.data)}}else{L?Z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,_e,He,de[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,$e,_e,He,de[ne]);for(let se=0;se<ue.length;se++){const he=ue[se];L?Z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,se+1,0,0,_e,He,he.image[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,se+1,$e,_e,He,he.image[ne])}}}g(y)&&v(i.TEXTURE_CUBE_MAP),fe.__version=te.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function Pe(C,y,k,K,te,fe){const ie=s.convert(k.format,k.colorSpace),j=s.convert(k.type),Q=S(k.internalFormat,ie,j,k.normalized,k.colorSpace),ge=n.get(y),Me=n.get(k);if(Me.__renderTarget=y,!ge.__hasExternalTextures){const de=Math.max(1,y.width>>fe),ce=Math.max(1,y.height>>fe);te===i.TEXTURE_3D||te===i.TEXTURE_2D_ARRAY?t.texImage3D(te,fe,Q,de,ce,y.depth,0,ie,j,null):t.texImage2D(te,fe,Q,de,ce,0,ie,j,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),Xe(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,te,Me.__webglTexture,0,Ye(y)):(te===i.TEXTURE_2D||te>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,te,Me.__webglTexture,fe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function nt(C,y,k){if(i.bindRenderbuffer(i.RENDERBUFFER,C),y.depthBuffer){const K=y.depthTexture,te=K&&K.isDepthTexture?K.type:null,fe=A(y.stencilBuffer,te),ie=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Xe(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ye(y),fe,y.width,y.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ye(y),fe,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,fe,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ie,i.RENDERBUFFER,C)}else{const K=y.textures;for(let te=0;te<K.length;te++){const fe=K[te],ie=s.convert(fe.format,fe.colorSpace),j=s.convert(fe.type),Q=S(fe.internalFormat,ie,j,fe.normalized,fe.colorSpace);Xe(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ye(y),Q,y.width,y.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ye(y),Q,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,Q,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Te(C,y,k){const K=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const te=n.get(y.depthTexture);if(te.__renderTarget=y,(!te.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),K){if(te.__webglInit===void 0&&(te.__webglInit=!0,y.depthTexture.addEventListener("dispose",T)),te.__webglTexture===void 0){te.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,te.__webglTexture),Le(i.TEXTURE_CUBE_MAP,y.depthTexture);const ge=s.convert(y.depthTexture.format),Me=s.convert(y.depthTexture.type);let de;y.depthTexture.format===xr?de=i.DEPTH_COMPONENT24:y.depthTexture.format===vs&&(de=i.DEPTH24_STENCIL8);for(let ce=0;ce<6;ce++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,de,y.width,y.height,0,ge,Me,null)}}else Y(y.depthTexture,0);const fe=te.__webglTexture,ie=Ye(y),j=K?i.TEXTURE_CUBE_MAP_POSITIVE_X+k:i.TEXTURE_2D,Q=y.depthTexture.format===vs?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(y.depthTexture.format===xr)Xe(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,j,fe,0,ie):i.framebufferTexture2D(i.FRAMEBUFFER,Q,j,fe,0);else if(y.depthTexture.format===vs)Xe(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,j,fe,0,ie):i.framebufferTexture2D(i.FRAMEBUFFER,Q,j,fe,0);else throw new Error("Unknown depthTexture format")}function Ve(C){const y=n.get(C),k=C.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==C.depthTexture){const K=C.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),K){const te=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,K.removeEventListener("dispose",te)};K.addEventListener("dispose",te),y.__depthDisposeCallback=te}y.__boundDepthTexture=K}if(C.depthTexture&&!y.__autoAllocateDepthBuffer)if(k)for(let K=0;K<6;K++)Te(y.__webglFramebuffer[K],C,K);else{const K=C.texture.mipmaps;K&&K.length>0?Te(y.__webglFramebuffer[0],C,0):Te(y.__webglFramebuffer,C,0)}else if(k){y.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[K]),y.__webglDepthbuffer[K]===void 0)y.__webglDepthbuffer[K]=i.createRenderbuffer(),nt(y.__webglDepthbuffer[K],C,!1);else{const te=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=y.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,fe),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,fe)}}else{const K=C.texture.mipmaps;if(K&&K.length>0?t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),nt(y.__webglDepthbuffer,C,!1);else{const te=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,fe),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,fe)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Qe(C,y,k){const K=n.get(C);y!==void 0&&Pe(K.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&Ve(C)}function ze(C){const y=C.texture,k=n.get(C),K=n.get(y);C.addEventListener("dispose",x);const te=C.textures,fe=C.isWebGLCubeRenderTarget===!0,ie=te.length>1;if(ie||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=y.version,a.memory.textures++),fe){k.__webglFramebuffer=[];for(let j=0;j<6;j++)if(y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer[j]=[];for(let Q=0;Q<y.mipmaps.length;Q++)k.__webglFramebuffer[j][Q]=i.createFramebuffer()}else k.__webglFramebuffer[j]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer=[];for(let j=0;j<y.mipmaps.length;j++)k.__webglFramebuffer[j]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(ie)for(let j=0,Q=te.length;j<Q;j++){const ge=n.get(te[j]);ge.__webglTexture===void 0&&(ge.__webglTexture=i.createTexture(),a.memory.textures++)}if(C.samples>0&&Xe(C)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let j=0;j<te.length;j++){const Q=te[j];k.__webglColorRenderbuffer[j]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[j]);const ge=s.convert(Q.format,Q.colorSpace),Me=s.convert(Q.type),de=S(Q.internalFormat,ge,Me,Q.normalized,Q.colorSpace,C.isXRRenderTarget===!0),ce=Ye(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,ce,de,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+j,i.RENDERBUFFER,k.__webglColorRenderbuffer[j])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),nt(k.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(fe){t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),Le(i.TEXTURE_CUBE_MAP,y);for(let j=0;j<6;j++)if(y.mipmaps&&y.mipmaps.length>0)for(let Q=0;Q<y.mipmaps.length;Q++)Pe(k.__webglFramebuffer[j][Q],C,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+j,Q);else Pe(k.__webglFramebuffer[j],C,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);g(y)&&v(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ie){for(let j=0,Q=te.length;j<Q;j++){const ge=te[j],Me=n.get(ge);let de=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(de=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(de,Me.__webglTexture),Le(de,ge),Pe(k.__webglFramebuffer,C,ge,i.COLOR_ATTACHMENT0+j,de,0),g(ge)&&v(de)}t.unbindTexture()}else{let j=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(j=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(j,K.__webglTexture),Le(j,y),y.mipmaps&&y.mipmaps.length>0)for(let Q=0;Q<y.mipmaps.length;Q++)Pe(k.__webglFramebuffer[Q],C,y,i.COLOR_ATTACHMENT0,j,Q);else Pe(k.__webglFramebuffer,C,y,i.COLOR_ATTACHMENT0,j,0);g(y)&&v(j),t.unbindTexture()}C.depthBuffer&&Ve(C)}function X(C){const y=C.textures;for(let k=0,K=y.length;k<K;k++){const te=y[k];if(g(te)){const fe=b(C),ie=n.get(te).__webglTexture;t.bindTexture(fe,ie),v(fe),t.unbindTexture()}}}const lt=[],Ot=[];function U(C){if(C.samples>0){if(Xe(C)===!1){const y=C.textures,k=C.width,K=C.height;let te=i.COLOR_BUFFER_BIT;const fe=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=n.get(C),j=y.length>1;if(j)for(let ge=0;ge<y.length;ge++)t.bindFramebuffer(i.FRAMEBUFFER,ie.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ie.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ie.__webglMultisampledFramebuffer);const Q=C.texture.mipmaps;Q&&Q.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ie.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ie.__webglFramebuffer);for(let ge=0;ge<y.length;ge++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(te|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(te|=i.STENCIL_BUFFER_BIT)),j){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ie.__webglColorRenderbuffer[ge]);const Me=n.get(y[ge]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Me,0)}i.blitFramebuffer(0,0,k,K,0,0,k,K,te,i.NEAREST),l===!0&&(lt.length=0,Ot.length=0,lt.push(i.COLOR_ATTACHMENT0+ge),C.depthBuffer&&C.resolveDepthBuffer===!1&&(lt.push(fe),Ot.push(fe),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ot)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,lt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),j)for(let ge=0;ge<y.length;ge++){t.bindFramebuffer(i.FRAMEBUFFER,ie.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,ie.__webglColorRenderbuffer[ge]);const Me=n.get(y[ge]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ie.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.TEXTURE_2D,Me,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ie.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const y=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function Ye(C){return Math.min(r.maxSamples,C.samples)}function Xe(C){const y=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function ct(C){const y=a.render.frame;u.get(C)!==y&&(u.set(C,y),C.update())}function me(C,y){const k=C.colorSpace,K=C.format,te=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||k!==lc&&k!==Fr&&(ut.getTransfer(k)===xt?(K!==Ri||te!==gi)&&We("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):pt("WebGLTextures: Unsupported texture color space:",k)),y}function Je(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=G,this.getTextureUnits=V,this.setTextureUnits=N,this.setTexture2D=Y,this.setTexture2DArray=ee,this.setTexture3D=D,this.setTextureCube=pe,this.rebindTextures=Qe,this.setupRenderTarget=ze,this.updateRenderTargetMipmap=X,this.updateMultisampleRenderTarget=U,this.setupDepthRenderbuffer=Ve,this.setupFrameBufferTexture=Pe,this.useMultisampledRTT=Xe,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function iw(i,e){function t(n,r=Fr){let s;const a=ut.getTransfer(r);if(n===gi)return i.UNSIGNED_BYTE;if(n===Df)return i.UNSIGNED_SHORT_4_4_4_4;if(n===If)return i.UNSIGNED_SHORT_5_5_5_1;if(n===rg)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===sg)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===ng)return i.BYTE;if(n===ig)return i.SHORT;if(n===Fo)return i.UNSIGNED_SHORT;if(n===Pf)return i.INT;if(n===Yi)return i.UNSIGNED_INT;if(n===Hi)return i.FLOAT;if(n===vr)return i.HALF_FLOAT;if(n===ag)return i.ALPHA;if(n===og)return i.RGB;if(n===Ri)return i.RGBA;if(n===xr)return i.DEPTH_COMPONENT;if(n===vs)return i.DEPTH_STENCIL;if(n===lg)return i.RED;if(n===Lf)return i.RED_INTEGER;if(n===Ls)return i.RG;if(n===Nf)return i.RG_INTEGER;if(n===Uf)return i.RGBA_INTEGER;if(n===Gl||n===Wl||n===Xl||n===ql)if(a===xt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Gl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Wl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Xl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ql)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Gl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Wl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Xl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ql)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===xh||n===yh||n===Sh||n===bh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===xh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===yh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Sh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===bh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Mh||n===Eh||n===Th||n===wh||n===Ah||n===ac||n===Ch)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Mh||n===Eh)return a===xt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Th)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===wh)return s.COMPRESSED_R11_EAC;if(n===Ah)return s.COMPRESSED_SIGNED_R11_EAC;if(n===ac)return s.COMPRESSED_RG11_EAC;if(n===Ch)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Rh||n===Ph||n===Dh||n===Ih||n===Lh||n===Nh||n===Uh||n===Oh||n===Fh||n===Bh||n===kh||n===zh||n===Vh||n===Hh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Rh)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ph)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Dh)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ih)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Lh)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Nh)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Uh)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Oh)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Fh)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Bh)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===kh)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===zh)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Vh)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Hh)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Gh||n===Wh||n===Xh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Gh)return a===xt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Wh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Xh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===qh||n===$h||n===oc||n===jh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===qh)return s.COMPRESSED_RED_RGTC1_EXT;if(n===$h)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===oc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===jh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Bo?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const rw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class aw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new vg(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Pi({vertexShader:rw,fragmentShader:sw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ki(new Wo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ow extends Os{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,m=null;const _=typeof XRWebGLBinding<"u",p=new aw,g={},v=t.getContextAttributes();let b=null,S=null;const A=[],E=[],T=new mt;let x=null;const w=new Ai;w.viewport=new jt;const R=new Ai;R.viewport=new jt;const P=[w,R],I=new gS;let G=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let le=A[J];return le===void 0&&(le=new au,A[J]=le),le.getTargetRaySpace()},this.getControllerGrip=function(J){let le=A[J];return le===void 0&&(le=new au,A[J]=le),le.getGripSpace()},this.getHand=function(J){let le=A[J];return le===void 0&&(le=new au,A[J]=le),le.getHandSpace()};function N(J){const le=E.indexOf(J.inputSource);if(le===-1)return;const ae=A[le];ae!==void 0&&(ae.update(J.inputSource,J.frame,c||a),ae.dispatchEvent({type:J.type,data:J.inputSource}))}function B(){r.removeEventListener("select",N),r.removeEventListener("selectstart",N),r.removeEventListener("selectend",N),r.removeEventListener("squeeze",N),r.removeEventListener("squeezestart",N),r.removeEventListener("squeezeend",N),r.removeEventListener("end",B),r.removeEventListener("inputsourceschange",O);for(let J=0;J<A.length;J++){const le=E[J];le!==null&&(E[J]=null,A[J].disconnect(le))}G=null,V=null,p.reset();for(const J in g)delete g[J];e.setRenderTarget(b),f=null,h=null,d=null,r=null,S=null,Le.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,n.isPresenting===!0&&We("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&We("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(J){if(r=J,r!==null){if(b=e.getRenderTarget(),r.addEventListener("select",N),r.addEventListener("selectstart",N),r.addEventListener("selectend",N),r.addEventListener("squeeze",N),r.addEventListener("squeezestart",N),r.addEventListener("squeezeend",N),r.addEventListener("end",B),r.addEventListener("inputsourceschange",O),v.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(T),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ae=null,Ce=null,Be=null;v.depth&&(Be=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=v.stencil?vs:xr,Ce=v.stencil?Bo:Yi);const Pe={colorFormat:t.RGBA8,depthFormat:Be,scaleFactor:s};d=this.getBinding(),h=d.createProjectionLayer(Pe),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),S=new qi(h.textureWidth,h.textureHeight,{format:Ri,type:gi,depthTexture:new La(h.textureWidth,h.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const ae={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,ae),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new qi(f.framebufferWidth,f.framebufferHeight,{format:Ri,type:gi,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Le.setContext(r),Le.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function O(J){for(let le=0;le<J.removed.length;le++){const ae=J.removed[le],Ce=E.indexOf(ae);Ce>=0&&(E[Ce]=null,A[Ce].disconnect(ae))}for(let le=0;le<J.added.length;le++){const ae=J.added[le];let Ce=E.indexOf(ae);if(Ce===-1){for(let Pe=0;Pe<A.length;Pe++)if(Pe>=E.length){E.push(ae),Ce=Pe;break}else if(E[Pe]===null){E[Pe]=ae,Ce=Pe;break}if(Ce===-1)break}const Be=A[Ce];Be&&Be.connect(ae)}}const Y=new $,ee=new $;function D(J,le,ae){Y.setFromMatrixPosition(le.matrixWorld),ee.setFromMatrixPosition(ae.matrixWorld);const Ce=Y.distanceTo(ee),Be=le.projectionMatrix.elements,Pe=ae.projectionMatrix.elements,nt=Be[14]/(Be[10]-1),Te=Be[14]/(Be[10]+1),Ve=(Be[9]+1)/Be[5],Qe=(Be[9]-1)/Be[5],ze=(Be[8]-1)/Be[0],X=(Pe[8]+1)/Pe[0],lt=nt*ze,Ot=nt*X,U=Ce/(-ze+X),Ye=U*-ze;if(le.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Ye),J.translateZ(U),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Be[10]===-1)J.projectionMatrix.copy(le.projectionMatrix),J.projectionMatrixInverse.copy(le.projectionMatrixInverse);else{const Xe=nt+U,ct=Te+U,me=lt-Ye,Je=Ot+(Ce-Ye),C=Ve*Te/ct*Xe,y=Qe*Te/ct*Xe;J.projectionMatrix.makePerspective(me,Je,C,y,Xe,ct),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function pe(J,le){le===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(le.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(r===null)return;let le=J.near,ae=J.far;p.texture!==null&&(p.depthNear>0&&(le=p.depthNear),p.depthFar>0&&(ae=p.depthFar)),I.near=R.near=w.near=le,I.far=R.far=w.far=ae,(G!==I.near||V!==I.far)&&(r.updateRenderState({depthNear:I.near,depthFar:I.far}),G=I.near,V=I.far),I.layers.mask=J.layers.mask|6,w.layers.mask=I.layers.mask&-5,R.layers.mask=I.layers.mask&-3;const Ce=J.parent,Be=I.cameras;pe(I,Ce);for(let Pe=0;Pe<Be.length;Pe++)pe(Be[Pe],Ce);Be.length===2?D(I,w,R):I.projectionMatrix.copy(w.projectionMatrix),Ee(J,I,Ce)};function Ee(J,le,ae){ae===null?J.matrix.copy(le.matrixWorld):(J.matrix.copy(ae.matrixWorld),J.matrix.invert(),J.matrix.multiply(le.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(le.projectionMatrix),J.projectionMatrixInverse.copy(le.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Kh*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(J){l=J,h!==null&&(h.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(I)},this.getCameraTexture=function(J){return g[J]};let qe=null;function ke(J,le){if(u=le.getViewerPose(c||a),m=le,u!==null){const ae=u.views;f!==null&&(e.setRenderTargetFramebuffer(S,f.framebuffer),e.setRenderTarget(S));let Ce=!1;ae.length!==I.cameras.length&&(I.cameras.length=0,Ce=!0);for(let Te=0;Te<ae.length;Te++){const Ve=ae[Te];let Qe=null;if(f!==null)Qe=f.getViewport(Ve);else{const X=d.getViewSubImage(h,Ve);Qe=X.viewport,Te===0&&(e.setRenderTargetTextures(S,X.colorTexture,X.depthStencilTexture),e.setRenderTarget(S))}let ze=P[Te];ze===void 0&&(ze=new Ai,ze.layers.enable(Te),ze.viewport=new jt,P[Te]=ze),ze.matrix.fromArray(Ve.transform.matrix),ze.matrix.decompose(ze.position,ze.quaternion,ze.scale),ze.projectionMatrix.fromArray(Ve.projectionMatrix),ze.projectionMatrixInverse.copy(ze.projectionMatrix).invert(),ze.viewport.set(Qe.x,Qe.y,Qe.width,Qe.height),Te===0&&(I.matrix.copy(ze.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Ce===!0&&I.cameras.push(ze)}const Be=r.enabledFeatures;if(Be&&Be.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){d=n.getBinding();const Te=d.getDepthInformation(ae[0]);Te&&Te.isValid&&Te.texture&&p.init(Te,r.renderState)}if(Be&&Be.includes("camera-access")&&_){e.state.unbindTexture(),d=n.getBinding();for(let Te=0;Te<ae.length;Te++){const Ve=ae[Te].camera;if(Ve){let Qe=g[Ve];Qe||(Qe=new vg,g[Ve]=Qe);const ze=d.getCameraImage(Ve);Qe.sourceTexture=ze}}}}for(let ae=0;ae<A.length;ae++){const Ce=E[ae],Be=A[ae];Ce!==null&&Be!==void 0&&Be.update(Ce,le,c||a)}qe&&qe(J,le),le.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:le}),m=null}const Le=new Sg;Le.setAnimationLoop(ke),this.setAnimationLoop=function(J){qe=J},this.dispose=function(){}}}const lw=new on,Cg=new je;Cg.set(-1,0,0,0,1,0,0,0,1);function cw(i,e){function t(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,xg(i)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function r(p,g,v,b,S){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?s(p,g):g.isMeshLambertMaterial?(s(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(s(p,g),d(p,g)):g.isMeshPhongMaterial?(s(p,g),u(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(s(p,g),h(p,g),g.isMeshPhysicalMaterial&&f(p,g,S)):g.isMeshMatcapMaterial?(s(p,g),m(p,g)):g.isMeshDepthMaterial?s(p,g):g.isMeshDistanceMaterial?(s(p,g),_(p,g)):g.isMeshNormalMaterial?s(p,g):g.isLineBasicMaterial?(a(p,g),g.isLineDashedMaterial&&o(p,g)):g.isPointsMaterial?l(p,g,v,b):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,t(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===$n&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,t(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===$n&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,t(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,t(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);const v=e.get(g),b=v.envMap,S=v.envMapRotation;b&&(p.envMap.value=b,p.envMapRotation.value.setFromMatrix4(lw.makeRotationFromEuler(S)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Cg),p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,p.aoMapTransform))}function a(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform))}function o(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,v,b){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*v,p.scale.value=b*.5,g.map&&(p.map.value=g.map,t(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function u(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function d(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function h(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function f(p,g,v){p.ior.value=g.ior,g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===$n&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function _(p,g){const v=e.get(g).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function uw(i,e,t,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,b){const S=b.program;n.uniformBlockBinding(v,S)}function c(v,b){let S=r[v.id];S===void 0&&(m(v),S=u(v),r[v.id]=S,v.addEventListener("dispose",p));const A=b.program;n.updateUBOMapping(v,A);const E=e.render.frame;s[v.id]!==E&&(h(v),s[v.id]=E)}function u(v){const b=d();v.__bindingPointIndex=b;const S=i.createBuffer(),A=v.__size,E=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,A,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,S),S}function d(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return pt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const b=r[v.id],S=v.uniforms,A=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let E=0,T=S.length;E<T;E++){const x=Array.isArray(S[E])?S[E]:[S[E]];for(let w=0,R=x.length;w<R;w++){const P=x[w];if(f(P,E,w,A)===!0){const I=P.__offset,G=Array.isArray(P.value)?P.value:[P.value];let V=0;for(let N=0;N<G.length;N++){const B=G[N],O=_(B);typeof B=="number"||typeof B=="boolean"?(P.__data[0]=B,i.bufferSubData(i.UNIFORM_BUFFER,I+V,P.__data)):B.isMatrix3?(P.__data[0]=B.elements[0],P.__data[1]=B.elements[1],P.__data[2]=B.elements[2],P.__data[3]=0,P.__data[4]=B.elements[3],P.__data[5]=B.elements[4],P.__data[6]=B.elements[5],P.__data[7]=0,P.__data[8]=B.elements[6],P.__data[9]=B.elements[7],P.__data[10]=B.elements[8],P.__data[11]=0):ArrayBuffer.isView(B)?P.__data.set(new B.constructor(B.buffer,B.byteOffset,P.__data.length)):(B.toArray(P.__data,V),V+=O.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,I,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(v,b,S,A){const E=v.value,T=b+"_"+S;if(A[T]===void 0)return typeof E=="number"||typeof E=="boolean"?A[T]=E:ArrayBuffer.isView(E)?A[T]=E.slice():A[T]=E.clone(),!0;{const x=A[T];if(typeof E=="number"||typeof E=="boolean"){if(x!==E)return A[T]=E,!0}else{if(ArrayBuffer.isView(E))return!0;if(x.equals(E)===!1)return x.copy(E),!0}}return!1}function m(v){const b=v.uniforms;let S=0;const A=16;for(let T=0,x=b.length;T<x;T++){const w=Array.isArray(b[T])?b[T]:[b[T]];for(let R=0,P=w.length;R<P;R++){const I=w[R],G=Array.isArray(I.value)?I.value:[I.value];for(let V=0,N=G.length;V<N;V++){const B=G[V],O=_(B),Y=S%A,ee=Y%O.boundary,D=Y+ee;S+=ee,D!==0&&A-D<O.storage&&(S+=A-D),I.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=S,S+=O.storage}}}const E=S%A;return E>0&&(S+=A-E),v.__size=S,v.__cache={},this}function _(v){const b={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(b.boundary=4,b.storage=4):v.isVector2?(b.boundary=8,b.storage=8):v.isVector3||v.isColor?(b.boundary=16,b.storage=12):v.isVector4?(b.boundary=16,b.storage=16):v.isMatrix3?(b.boundary=48,b.storage=48):v.isMatrix4?(b.boundary=64,b.storage=64):v.isTexture?We("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(b.boundary=16,b.storage=v.byteLength):We("WebGLRenderer: Unsupported uniform value type.",v),b}function p(v){const b=v.target;b.removeEventListener("dispose",p);const S=a.indexOf(b.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function g(){for(const v in r)i.deleteBuffer(r[v]);a=[],r={},s={}}return{bind:l,update:c,dispose:g}}const hw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Li=null;function fw(){return Li===null&&(Li=new eS(hw,16,16,Ls,vr),Li.name="DFG_LUT",Li.minFilter=Cn,Li.magFilter=Cn,Li.wrapS=hr,Li.wrapT=hr,Li.generateMipmaps=!1,Li.needsUpdate=!0),Li}class dw{constructor(e={}){const{canvas:t=Py(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=gi}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;const _=f,p=new Set([Uf,Nf,Lf]),g=new Set([gi,Yi,Fo,Bo,Df,If]),v=new Uint32Array(4),b=new Int32Array(4),S=new $;let A=null,E=null;const T=[],x=[];let w=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let P=!1,I=null;this._outputColorSpace=Vn;let G=0,V=0,N=null,B=-1,O=null;const Y=new jt,ee=new jt;let D=null;const pe=new St(0);let Ee=0,qe=t.width,ke=t.height,Le=1,J=null,le=null;const ae=new jt(0,0,qe,ke),Ce=new jt(0,0,qe,ke);let Be=!1;const Pe=new _g;let nt=!1,Te=!1;const Ve=new on,Qe=new $,ze=new jt,X={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let lt=!1;function Ot(){return N===null?Le:1}let U=n;function Ye(M,F){return t.getContext(M,F)}try{const M={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Rf}`),t.addEventListener("webglcontextlost",ne,!1),t.addEventListener("webglcontextrestored",se,!1),t.addEventListener("webglcontextcreationerror",he,!1),U===null){const F="webgl2";if(U=Ye(F,M),U===null)throw Ye(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw pt("WebGLRenderer: "+M.message),M}let Xe,ct,me,Je,C,y,k,K,te,fe,ie,j,Q,ge,Me,de,ce,_e,He,$e,L,oe,Z;function xe(){Xe=new fE(U),Xe.init(),L=new iw(U,Xe),ct=new rE(U,Xe,e,L),me=new tw(U,Xe),ct.reversedDepthBuffer&&h&&me.buffers.depth.setReversed(!0),Je=new mE(U),C=new VT,y=new nw(U,Xe,me,C,ct,L,Je),k=new hE(R),K=new xS(U),oe=new nE(U,K),te=new dE(U,K,Je,oe),fe=new gE(U,te,K,oe,Je),_e=new _E(U,ct,y),Me=new sE(C),ie=new zT(R,k,Xe,ct,oe,Me),j=new cw(R,C),Q=new GT,ge=new YT(Xe),ce=new tE(R,k,me,fe,m,l),de=new ew(R,fe,ct),Z=new uw(U,Je,ct,me),He=new iE(U,Xe,Je),$e=new pE(U,Xe,Je),Je.programs=ie.programs,R.capabilities=ct,R.extensions=Xe,R.properties=C,R.renderLists=Q,R.shadowMap=de,R.state=me,R.info=Je}xe(),_!==gi&&(w=new xE(_,t.width,t.height,r,s));const ue=new ow(R,U);this.xr=ue,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const M=Xe.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Xe.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return Le},this.setPixelRatio=function(M){M!==void 0&&(Le=M,this.setSize(qe,ke,!1))},this.getSize=function(M){return M.set(qe,ke)},this.setSize=function(M,F,q=!0){if(ue.isPresenting){We("WebGLRenderer: Can't change size while VR device is presenting.");return}qe=M,ke=F,t.width=Math.floor(M*Le),t.height=Math.floor(F*Le),q===!0&&(t.style.width=M+"px",t.style.height=F+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,M,F)},this.getDrawingBufferSize=function(M){return M.set(qe*Le,ke*Le).floor()},this.setDrawingBufferSize=function(M,F,q){qe=M,ke=F,Le=q,t.width=Math.floor(M*q),t.height=Math.floor(F*q),this.setViewport(0,0,M,F)},this.setEffects=function(M){if(_===gi){pt("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let F=0;F<M.length;F++)if(M[F].isOutputPass===!0){We("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(Y)},this.getViewport=function(M){return M.copy(ae)},this.setViewport=function(M,F,q,z){M.isVector4?ae.set(M.x,M.y,M.z,M.w):ae.set(M,F,q,z),me.viewport(Y.copy(ae).multiplyScalar(Le).round())},this.getScissor=function(M){return M.copy(Ce)},this.setScissor=function(M,F,q,z){M.isVector4?Ce.set(M.x,M.y,M.z,M.w):Ce.set(M,F,q,z),me.scissor(ee.copy(Ce).multiplyScalar(Le).round())},this.getScissorTest=function(){return Be},this.setScissorTest=function(M){me.setScissorTest(Be=M)},this.setOpaqueSort=function(M){J=M},this.setTransparentSort=function(M){le=M},this.getClearColor=function(M){return M.copy(ce.getClearColor())},this.setClearColor=function(){ce.setClearColor(...arguments)},this.getClearAlpha=function(){return ce.getClearAlpha()},this.setClearAlpha=function(){ce.setClearAlpha(...arguments)},this.clear=function(M=!0,F=!0,q=!0){let z=0;if(M){let H=!1;if(N!==null){const ve=N.texture.format;H=p.has(ve)}if(H){const ve=N.texture.type,ye=g.has(ve),be=ce.getClearColor(),Ie=ce.getClearAlpha(),Ne=be.r,Ke=be.g,it=be.b;ye?(v[0]=Ne,v[1]=Ke,v[2]=it,v[3]=Ie,U.clearBufferuiv(U.COLOR,0,v)):(b[0]=Ne,b[1]=Ke,b[2]=it,b[3]=Ie,U.clearBufferiv(U.COLOR,0,b))}else z|=U.COLOR_BUFFER_BIT}F&&(z|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(z|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&U.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),I=M},this.dispose=function(){t.removeEventListener("webglcontextlost",ne,!1),t.removeEventListener("webglcontextrestored",se,!1),t.removeEventListener("webglcontextcreationerror",he,!1),ce.dispose(),Q.dispose(),ge.dispose(),C.dispose(),k.dispose(),fe.dispose(),oe.dispose(),Z.dispose(),ie.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",st),ue.removeEventListener("sessionend",It),Lt.stop()};function ne(M){M.preventDefault(),ep("WebGLRenderer: Context Lost."),P=!0}function se(){ep("WebGLRenderer: Context Restored."),P=!1;const M=Je.autoReset,F=de.enabled,q=de.autoUpdate,z=de.needsUpdate,H=de.type;xe(),Je.autoReset=M,de.enabled=F,de.autoUpdate=q,de.needsUpdate=z,de.type=H}function he(M){pt("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Oe(M){const F=M.target;F.removeEventListener("dispose",Oe),re(F)}function re(M){Fe(M),C.remove(M)}function Fe(M){const F=C.get(M).programs;F!==void 0&&(F.forEach(function(q){ie.releaseProgram(q)}),M.isShaderMaterial&&ie.releaseShaderCache(M))}this.renderBufferDirect=function(M,F,q,z,H,ve){F===null&&(F=X);const ye=H.isMesh&&H.matrixWorld.determinant()<0,be=hn(M,F,q,z,H);me.setMaterial(z,ye);let Ie=q.index,Ne=1;if(z.wireframe===!0){if(Ie=te.getWireframeAttribute(q),Ie===void 0)return;Ne=2}const Ke=q.drawRange,it=q.attributes.position;let Ue=Ke.start*Ne,yt=(Ke.start+Ke.count)*Ne;ve!==null&&(Ue=Math.max(Ue,ve.start*Ne),yt=Math.min(yt,(ve.start+ve.count)*Ne)),Ie!==null?(Ue=Math.max(Ue,0),yt=Math.min(yt,Ie.count)):it!=null&&(Ue=Math.max(Ue,0),yt=Math.min(yt,it.count));const Xt=yt-Ue;if(Xt<0||Xt===1/0)return;oe.setup(H,z,be,q,Ie);let Vt,Mt=He;if(Ie!==null&&(Vt=K.get(Ie),Mt=$e,Mt.setIndex(Vt)),H.isMesh)z.wireframe===!0?(me.setLineWidth(z.wireframeLinewidth*Ot()),Mt.setMode(U.LINES)):Mt.setMode(U.TRIANGLES);else if(H.isLine){let Sn=z.linewidth;Sn===void 0&&(Sn=1),me.setLineWidth(Sn*Ot()),H.isLineSegments?Mt.setMode(U.LINES):H.isLineLoop?Mt.setMode(U.LINE_LOOP):Mt.setMode(U.LINE_STRIP)}else H.isPoints?Mt.setMode(U.POINTS):H.isSprite&&Mt.setMode(U.TRIANGLES);if(H.isBatchedMesh)if(Xe.get("WEBGL_multi_draw"))Mt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Sn=H._multiDrawStarts,Ae=H._multiDrawCounts,Kn=H._multiDrawCount,dt=Ie?K.get(Ie).bytesPerElement:1,fi=C.get(z).currentProgram.getUniforms();for(let Di=0;Di<Kn;Di++)fi.setValue(U,"_gl_DrawID",Di),Mt.render(Sn[Di]/dt,Ae[Di])}else if(H.isInstancedMesh)Mt.renderInstances(Ue,Xt,H.count);else if(q.isInstancedBufferGeometry){const Sn=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Ae=Math.min(q.instanceCount,Sn);Mt.renderInstances(Ue,Xt,Ae)}else Mt.render(Ue,Xt)};function De(M,F,q){M.transparent===!0&&M.side===cr&&M.forceSinglePass===!1?(M.side=$n,M.needsUpdate=!0,un(M,F,q),M.side=Jr,M.needsUpdate=!0,un(M,F,q),M.side=cr):un(M,F,q)}this.compile=function(M,F,q=null){q===null&&(q=M),E=ge.get(q),E.init(F),x.push(E),q.traverseVisible(function(H){H.isLight&&H.layers.test(F.layers)&&(E.pushLight(H),H.castShadow&&E.pushShadow(H))}),M!==q&&M.traverseVisible(function(H){H.isLight&&H.layers.test(F.layers)&&(E.pushLight(H),H.castShadow&&E.pushShadow(H))}),E.setupLights();const z=new Set;return M.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const ve=H.material;if(ve)if(Array.isArray(ve))for(let ye=0;ye<ve.length;ye++){const be=ve[ye];De(be,q,H),z.add(be)}else De(ve,q,H),z.add(ve)}),E=x.pop(),z},this.compileAsync=function(M,F,q=null){const z=this.compile(M,F,q);return new Promise(H=>{function ve(){if(z.forEach(function(ye){C.get(ye).currentProgram.isReady()&&z.delete(ye)}),z.size===0){H(M);return}setTimeout(ve,10)}Xe.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let Ge=null;function Zt(M){Ge&&Ge(M)}function st(){Lt.stop()}function It(){Lt.start()}const Lt=new Sg;Lt.setAnimationLoop(Zt),typeof self<"u"&&Lt.setContext(self),this.setAnimationLoop=function(M){Ge=M,ue.setAnimationLoop(M),M===null?Lt.stop():Lt.start()},ue.addEventListener("sessionstart",st),ue.addEventListener("sessionend",It),this.render=function(M,F){if(F!==void 0&&F.isCamera!==!0){pt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;I!==null&&I.renderStart(M,F);const q=ue.enabled===!0&&ue.isPresenting===!0,z=w!==null&&(N===null||q)&&w.begin(R,N);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(F),F=ue.getCamera()),M.isScene===!0&&M.onBeforeRender(R,M,F,N),E=ge.get(M,x.length),E.init(F),E.state.textureUnits=y.getTextureUnits(),x.push(E),Ve.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Pe.setFromProjectionMatrix(Ve,Gi,F.reversedDepth),Te=this.localClippingEnabled,nt=Me.init(this.clippingPlanes,Te),A=Q.get(M,T.length),A.init(),T.push(A),ue.enabled===!0&&ue.isPresenting===!0){const ye=R.xr.getDepthSensingMesh();ye!==null&&Ct(ye,F,-1/0,R.sortObjects)}Ct(M,F,0,R.sortObjects),A.finish(),R.sortObjects===!0&&A.sort(J,le),lt=ue.enabled===!1||ue.isPresenting===!1||ue.hasDepthSensing()===!1,lt&&ce.addToRenderList(A,M),this.info.render.frame++,nt===!0&&Me.beginShadows();const H=E.state.shadowsArray;if(de.render(H,M,F),nt===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset(),(z&&w.hasRenderPass())===!1){const ye=A.opaque,be=A.transmissive;if(E.setupLights(),F.isArrayCamera){const Ie=F.cameras;if(be.length>0)for(let Ne=0,Ke=Ie.length;Ne<Ke;Ne++){const it=Ie[Ne];_t(ye,be,M,it)}lt&&ce.render(M);for(let Ne=0,Ke=Ie.length;Ne<Ke;Ne++){const it=Ie[Ne];bt(A,M,it,it.viewport)}}else be.length>0&&_t(ye,be,M,F),lt&&ce.render(M),bt(A,M,F)}N!==null&&V===0&&(y.updateMultisampleRenderTarget(N),y.updateRenderTargetMipmap(N)),z&&w.end(R),M.isScene===!0&&M.onAfterRender(R,M,F),oe.resetDefaultState(),B=-1,O=null,x.pop(),x.length>0?(E=x[x.length-1],y.setTextureUnits(E.state.textureUnits),nt===!0&&Me.setGlobalState(R.clippingPlanes,E.state.camera)):E=null,T.pop(),T.length>0?A=T[T.length-1]:A=null,I!==null&&I.renderEnd()};function Ct(M,F,q,z){if(M.visible===!1)return;if(M.layers.test(F.layers)){if(M.isGroup)q=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(F);else if(M.isLightProbeGrid)E.pushLightProbeGrid(M);else if(M.isLight)E.pushLight(M),M.castShadow&&E.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Pe.intersectsSprite(M)){z&&ze.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Ve);const ye=fe.update(M),be=M.material;be.visible&&A.push(M,ye,be,q,ze.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Pe.intersectsObject(M))){const ye=fe.update(M),be=M.material;if(z&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),ze.copy(M.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),ze.copy(ye.boundingSphere.center)),ze.applyMatrix4(M.matrixWorld).applyMatrix4(Ve)),Array.isArray(be)){const Ie=ye.groups;for(let Ne=0,Ke=Ie.length;Ne<Ke;Ne++){const it=Ie[Ne],Ue=be[it.materialIndex];Ue&&Ue.visible&&A.push(M,ye,Ue,q,ze.z,it)}}else be.visible&&A.push(M,ye,be,q,ze.z,null)}}const ve=M.children;for(let ye=0,be=ve.length;ye<be;ye++)Ct(ve[ye],F,q,z)}function bt(M,F,q,z){const{opaque:H,transmissive:ve,transparent:ye}=M;E.setupLightsView(q),nt===!0&&Me.setGlobalState(R.clippingPlanes,q),z&&me.viewport(Y.copy(z)),H.length>0&&yn(H,F,q),ve.length>0&&yn(ve,F,q),ye.length>0&&yn(ye,F,q),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function _t(M,F,q,z){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[z.id]===void 0){const Ue=Xe.has("EXT_color_buffer_half_float")||Xe.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[z.id]=new qi(1,1,{generateMipmaps:!0,type:Ue?vr:gi,minFilter:gs,samples:Math.max(4,ct.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ut.workingColorSpace})}const ve=E.state.transmissionRenderTarget[z.id],ye=z.viewport||Y;ve.setSize(ye.z*R.transmissionResolutionScale,ye.w*R.transmissionResolutionScale);const be=R.getRenderTarget(),Ie=R.getActiveCubeFace(),Ne=R.getActiveMipmapLevel();R.setRenderTarget(ve),R.getClearColor(pe),Ee=R.getClearAlpha(),Ee<1&&R.setClearColor(16777215,.5),R.clear(),lt&&ce.render(q);const Ke=R.toneMapping;R.toneMapping=Xi;const it=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),E.setupLightsView(z),nt===!0&&Me.setGlobalState(R.clippingPlanes,z),yn(M,q,z),y.updateMultisampleRenderTarget(ve),y.updateRenderTargetMipmap(ve),Xe.has("WEBGL_multisampled_render_to_texture")===!1){let Ue=!1;for(let yt=0,Xt=F.length;yt<Xt;yt++){const Vt=F[yt],{object:Mt,geometry:Sn,material:Ae,group:Kn}=Vt;if(Ae.side===cr&&Mt.layers.test(z.layers)){const dt=Ae.side;Ae.side=$n,Ae.needsUpdate=!0,Rt(Mt,q,z,Sn,Ae,Kn),Ae.side=dt,Ae.needsUpdate=!0,Ue=!0}}Ue===!0&&(y.updateMultisampleRenderTarget(ve),y.updateRenderTargetMipmap(ve))}R.setRenderTarget(be,Ie,Ne),R.setClearColor(pe,Ee),it!==void 0&&(z.viewport=it),R.toneMapping=Ke}function yn(M,F,q){const z=F.isScene===!0?F.overrideMaterial:null;for(let H=0,ve=M.length;H<ve;H++){const ye=M[H],{object:be,geometry:Ie,group:Ne}=ye;let Ke=ye.material;Ke.allowOverride===!0&&z!==null&&(Ke=z),be.layers.test(q.layers)&&Rt(be,F,q,Ie,Ke,Ne)}}function Rt(M,F,q,z,H,ve){M.onBeforeRender(R,F,q,z,H,ve),M.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),H.onBeforeRender(R,F,q,z,M,ve),H.transparent===!0&&H.side===cr&&H.forceSinglePass===!1?(H.side=$n,H.needsUpdate=!0,R.renderBufferDirect(q,F,z,H,M,ve),H.side=Jr,H.needsUpdate=!0,R.renderBufferDirect(q,F,z,H,M,ve),H.side=cr):R.renderBufferDirect(q,F,z,H,M,ve),M.onAfterRender(R,F,q,z,H,ve)}function un(M,F,q){F.isScene!==!0&&(F=X);const z=C.get(M),H=E.state.lights,ve=E.state.shadowsArray,ye=H.state.version,be=ie.getParameters(M,H.state,ve,F,q,E.state.lightProbeGridArray),Ie=ie.getProgramCacheKey(be);let Ne=z.programs;z.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?F.environment:null,z.fog=F.fog;const Ke=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;z.envMap=k.get(M.envMap||z.environment,Ke),z.envMapRotation=z.environment!==null&&M.envMap===null?F.environmentRotation:M.envMapRotation,Ne===void 0&&(M.addEventListener("dispose",Oe),Ne=new Map,z.programs=Ne);let it=Ne.get(Ie);if(it!==void 0){if(z.currentProgram===it&&z.lightsStateVersion===ye)return Jt(M,be),it}else be.uniforms=ie.getUniforms(M),I!==null&&M.isNodeMaterial&&I.build(M,q,be),M.onBeforeCompile(be,R),it=ie.acquireProgram(be,Ie),Ne.set(Ie,it),z.uniforms=be.uniforms;const Ue=z.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ue.clippingPlanes=Me.uniform),Jt(M,be),z.needsLights=ks(M),z.lightsStateVersion=ye,z.needsLights&&(Ue.ambientLightColor.value=H.state.ambient,Ue.lightProbe.value=H.state.probe,Ue.directionalLights.value=H.state.directional,Ue.directionalLightShadows.value=H.state.directionalShadow,Ue.spotLights.value=H.state.spot,Ue.spotLightShadows.value=H.state.spotShadow,Ue.rectAreaLights.value=H.state.rectArea,Ue.ltc_1.value=H.state.rectAreaLTC1,Ue.ltc_2.value=H.state.rectAreaLTC2,Ue.pointLights.value=H.state.point,Ue.pointLightShadows.value=H.state.pointShadow,Ue.hemisphereLights.value=H.state.hemi,Ue.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ue.spotLightMatrix.value=H.state.spotLightMatrix,Ue.spotLightMap.value=H.state.spotLightMap,Ue.pointShadowMatrix.value=H.state.pointShadowMatrix),z.lightProbeGrid=E.state.lightProbeGridArray.length>0,z.currentProgram=it,z.uniformsList=null,it}function Yn(M){if(M.uniformsList===null){const F=M.currentProgram.getUniforms();M.uniformsList=$l.seqWithValue(F.seq,M.uniforms)}return M.uniformsList}function Jt(M,F){const q=C.get(M);q.outputColorSpace=F.outputColorSpace,q.batching=F.batching,q.batchingColor=F.batchingColor,q.instancing=F.instancing,q.instancingColor=F.instancingColor,q.instancingMorph=F.instancingMorph,q.skinning=F.skinning,q.morphTargets=F.morphTargets,q.morphNormals=F.morphNormals,q.morphColors=F.morphColors,q.morphTargetsCount=F.morphTargetsCount,q.numClippingPlanes=F.numClippingPlanes,q.numIntersection=F.numClipIntersection,q.vertexAlphas=F.vertexAlphas,q.vertexTangents=F.vertexTangents,q.toneMapping=F.toneMapping}function rn(M,F){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;S.setFromMatrixPosition(F.matrixWorld);for(let q=0,z=M.length;q<z;q++){const H=M[q];if(H.texture!==null&&H.boundingBox.containsPoint(S))return H}return null}function hn(M,F,q,z,H){F.isScene!==!0&&(F=X),y.resetTextureUnits();const ve=F.fog,ye=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?F.environment:null,be=N===null?R.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:ut.workingColorSpace,Ie=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,Ne=k.get(z.envMap||ye,Ie),Ke=z.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,it=!!q.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Ue=!!q.morphAttributes.position,yt=!!q.morphAttributes.normal,Xt=!!q.morphAttributes.color;let Vt=Xi;z.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Vt=R.toneMapping);const Mt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Sn=Mt!==void 0?Mt.length:0,Ae=C.get(z),Kn=E.state.lights;if(nt===!0&&(Te===!0||M!==O)){const Pt=M===O&&z.id===B;Me.setState(z,M,Pt)}let dt=!1;z.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==Kn.state.version||Ae.outputColorSpace!==be||H.isBatchedMesh&&Ae.batching===!1||!H.isBatchedMesh&&Ae.batching===!0||H.isBatchedMesh&&Ae.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Ae.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Ae.instancing===!1||!H.isInstancedMesh&&Ae.instancing===!0||H.isSkinnedMesh&&Ae.skinning===!1||!H.isSkinnedMesh&&Ae.skinning===!0||H.isInstancedMesh&&Ae.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Ae.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Ae.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Ae.instancingMorph===!1&&H.morphTexture!==null||Ae.envMap!==Ne||z.fog===!0&&Ae.fog!==ve||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==Me.numPlanes||Ae.numIntersection!==Me.numIntersection)||Ae.vertexAlphas!==Ke||Ae.vertexTangents!==it||Ae.morphTargets!==Ue||Ae.morphNormals!==yt||Ae.morphColors!==Xt||Ae.toneMapping!==Vt||Ae.morphTargetsCount!==Sn||!!Ae.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(dt=!0):(dt=!0,Ae.__version=z.version);let fi=Ae.currentProgram;dt===!0&&(fi=un(z,F,H),I&&z.isNodeMaterial&&I.onUpdateProgram(z,fi,Ae));let Di=!1,Tr=!1,zs=!1;const Et=fi.getUniforms(),qt=Ae.uniforms;if(me.useProgram(fi.program)&&(Di=!0,Tr=!0,zs=!0),z.id!==B&&(B=z.id,Tr=!0),Ae.needsLights){const Pt=rn(E.state.lightProbeGridArray,H);Ae.lightProbeGrid!==Pt&&(Ae.lightProbeGrid=Pt,Tr=!0)}if(Di||O!==M){me.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),Et.setValue(U,"projectionMatrix",M.projectionMatrix),Et.setValue(U,"viewMatrix",M.matrixWorldInverse);const Ar=Et.map.cameraPosition;Ar!==void 0&&Ar.setValue(U,Qe.setFromMatrixPosition(M.matrixWorld)),ct.logarithmicDepthBuffer&&Et.setValue(U,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&Et.setValue(U,"isOrthographic",M.isOrthographicCamera===!0),O!==M&&(O=M,Tr=!0,zs=!0)}if(Ae.needsLights&&(Kn.state.directionalShadowMap.length>0&&Et.setValue(U,"directionalShadowMap",Kn.state.directionalShadowMap,y),Kn.state.spotShadowMap.length>0&&Et.setValue(U,"spotShadowMap",Kn.state.spotShadowMap,y),Kn.state.pointShadowMap.length>0&&Et.setValue(U,"pointShadowMap",Kn.state.pointShadowMap,y)),H.isSkinnedMesh){Et.setOptional(U,H,"bindMatrix"),Et.setOptional(U,H,"bindMatrixInverse");const Pt=H.skeleton;Pt&&(Pt.boneTexture===null&&Pt.computeBoneTexture(),Et.setValue(U,"boneTexture",Pt.boneTexture,y))}H.isBatchedMesh&&(Et.setOptional(U,H,"batchingTexture"),Et.setValue(U,"batchingTexture",H._matricesTexture,y),Et.setOptional(U,H,"batchingIdTexture"),Et.setValue(U,"batchingIdTexture",H._indirectTexture,y),Et.setOptional(U,H,"batchingColorTexture"),H._colorsTexture!==null&&Et.setValue(U,"batchingColorTexture",H._colorsTexture,y));const wr=q.morphAttributes;if((wr.position!==void 0||wr.normal!==void 0||wr.color!==void 0)&&_e.update(H,q,fi),(Tr||Ae.receiveShadow!==H.receiveShadow)&&(Ae.receiveShadow=H.receiveShadow,Et.setValue(U,"receiveShadow",H.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&F.environment!==null&&(qt.envMapIntensity.value=F.environmentIntensity),qt.dfgLUT!==void 0&&(qt.dfgLUT.value=fw()),Tr){if(Et.setValue(U,"toneMappingExposure",R.toneMappingExposure),Ae.needsLights&&Qi(qt,zs),ve&&z.fog===!0&&j.refreshFogUniforms(qt,ve),j.refreshMaterialUniforms(qt,z,Le,ke,E.state.transmissionRenderTarget[M.id]),Ae.needsLights&&Ae.lightProbeGrid){const Pt=Ae.lightProbeGrid;qt.probesSH.value=Pt.texture,qt.probesMin.value.copy(Pt.boundingBox.min),qt.probesMax.value.copy(Pt.boundingBox.max),qt.probesResolution.value.copy(Pt.resolution)}$l.upload(U,Yn(Ae),qt,y)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&($l.upload(U,Yn(Ae),qt,y),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&Et.setValue(U,"center",H.center),Et.setValue(U,"modelViewMatrix",H.modelViewMatrix),Et.setValue(U,"normalMatrix",H.normalMatrix),Et.setValue(U,"modelMatrix",H.matrixWorld),z.uniformsGroups!==void 0){const Pt=z.uniformsGroups;for(let Ar=0,Vs=Pt.length;Ar<Vs;Ar++){const sd=Pt[Ar];Z.update(sd,fi),Z.bind(sd,fi)}}return fi}function Qi(M,F){M.ambientLightColor.needsUpdate=F,M.lightProbe.needsUpdate=F,M.directionalLights.needsUpdate=F,M.directionalLightShadows.needsUpdate=F,M.pointLights.needsUpdate=F,M.pointLightShadows.needsUpdate=F,M.spotLights.needsUpdate=F,M.spotLightShadows.needsUpdate=F,M.rectAreaLights.needsUpdate=F,M.hemisphereLights.needsUpdate=F}function ks(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(M,F,q){const z=C.get(M);z.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),C.get(M.texture).__webglTexture=F,C.get(M.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:q,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,F){const q=C.get(M);q.__webglFramebuffer=F,q.__useDefaultFramebuffer=F===void 0};const fn=U.createFramebuffer();this.setRenderTarget=function(M,F=0,q=0){N=M,G=F,V=q;let z=null,H=!1,ve=!1;if(M){const be=C.get(M);if(be.__useDefaultFramebuffer!==void 0){me.bindFramebuffer(U.FRAMEBUFFER,be.__webglFramebuffer),Y.copy(M.viewport),ee.copy(M.scissor),D=M.scissorTest,me.viewport(Y),me.scissor(ee),me.setScissorTest(D),B=-1;return}else if(be.__webglFramebuffer===void 0)y.setupRenderTarget(M);else if(be.__hasExternalTextures)y.rebindTextures(M,C.get(M.texture).__webglTexture,C.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Ke=M.depthTexture;if(be.__boundDepthTexture!==Ke){if(Ke!==null&&C.has(Ke)&&(M.width!==Ke.image.width||M.height!==Ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");y.setupDepthRenderbuffer(M)}}const Ie=M.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(ve=!0);const Ne=C.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ne[F])?z=Ne[F][q]:z=Ne[F],H=!0):M.samples>0&&y.useMultisampledRTT(M)===!1?z=C.get(M).__webglMultisampledFramebuffer:Array.isArray(Ne)?z=Ne[q]:z=Ne,Y.copy(M.viewport),ee.copy(M.scissor),D=M.scissorTest}else Y.copy(ae).multiplyScalar(Le).floor(),ee.copy(Ce).multiplyScalar(Le).floor(),D=Be;if(q!==0&&(z=fn),me.bindFramebuffer(U.FRAMEBUFFER,z)&&me.drawBuffers(M,z),me.viewport(Y),me.scissor(ee),me.setScissorTest(D),H){const be=C.get(M.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+F,be.__webglTexture,q)}else if(ve){const be=F;for(let Ie=0;Ie<M.textures.length;Ie++){const Ne=C.get(M.textures[Ie]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Ie,Ne.__webglTexture,q,be)}}else if(M!==null&&q!==0){const be=C.get(M.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,be.__webglTexture,q)}B=-1},this.readRenderTargetPixels=function(M,F,q,z,H,ve,ye,be=0){if(!(M&&M.isWebGLRenderTarget)){pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=C.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ye!==void 0&&(Ie=Ie[ye]),Ie){me.bindFramebuffer(U.FRAMEBUFFER,Ie);try{const Ne=M.textures[be],Ke=Ne.format,it=Ne.type;if(M.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+be),!ct.textureFormatReadable(Ke)){pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ct.textureTypeReadable(it)){pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=M.width-z&&q>=0&&q<=M.height-H&&U.readPixels(F,q,z,H,L.convert(Ke),L.convert(it),ve)}finally{const Ne=N!==null?C.get(N).__webglFramebuffer:null;me.bindFramebuffer(U.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(M,F,q,z,H,ve,ye,be=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=C.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ye!==void 0&&(Ie=Ie[ye]),Ie)if(F>=0&&F<=M.width-z&&q>=0&&q<=M.height-H){me.bindFramebuffer(U.FRAMEBUFFER,Ie);const Ne=M.textures[be],Ke=Ne.format,it=Ne.type;if(M.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+be),!ct.textureFormatReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ct.textureTypeReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ue=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Ue),U.bufferData(U.PIXEL_PACK_BUFFER,ve.byteLength,U.STREAM_READ),U.readPixels(F,q,z,H,L.convert(Ke),L.convert(it),0);const yt=N!==null?C.get(N).__webglFramebuffer:null;me.bindFramebuffer(U.FRAMEBUFFER,yt);const Xt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Dy(U,Xt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Ue),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,ve),U.deleteBuffer(Ue),U.deleteSync(Xt),ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,F=null,q=0){const z=Math.pow(2,-q),H=Math.floor(M.image.width*z),ve=Math.floor(M.image.height*z),ye=F!==null?F.x:0,be=F!==null?F.y:0;y.setTexture2D(M,0),U.copyTexSubImage2D(U.TEXTURE_2D,q,0,0,ye,be,H,ve),me.unbindTexture()};const Wt=U.createFramebuffer(),hi=U.createFramebuffer();this.copyTextureToTexture=function(M,F,q=null,z=null,H=0,ve=0){let ye,be,Ie,Ne,Ke,it,Ue,yt,Xt;const Vt=M.isCompressedTexture?M.mipmaps[ve]:M.image;if(q!==null)ye=q.max.x-q.min.x,be=q.max.y-q.min.y,Ie=q.isBox3?q.max.z-q.min.z:1,Ne=q.min.x,Ke=q.min.y,it=q.isBox3?q.min.z:0;else{const qt=Math.pow(2,-H);ye=Math.floor(Vt.width*qt),be=Math.floor(Vt.height*qt),M.isDataArrayTexture?Ie=Vt.depth:M.isData3DTexture?Ie=Math.floor(Vt.depth*qt):Ie=1,Ne=0,Ke=0,it=0}z!==null?(Ue=z.x,yt=z.y,Xt=z.z):(Ue=0,yt=0,Xt=0);const Mt=L.convert(F.format),Sn=L.convert(F.type);let Ae;F.isData3DTexture?(y.setTexture3D(F,0),Ae=U.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(y.setTexture2DArray(F,0),Ae=U.TEXTURE_2D_ARRAY):(y.setTexture2D(F,0),Ae=U.TEXTURE_2D),me.activeTexture(U.TEXTURE0),me.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,F.flipY),me.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),me.pixelStorei(U.UNPACK_ALIGNMENT,F.unpackAlignment);const Kn=me.getParameter(U.UNPACK_ROW_LENGTH),dt=me.getParameter(U.UNPACK_IMAGE_HEIGHT),fi=me.getParameter(U.UNPACK_SKIP_PIXELS),Di=me.getParameter(U.UNPACK_SKIP_ROWS),Tr=me.getParameter(U.UNPACK_SKIP_IMAGES);me.pixelStorei(U.UNPACK_ROW_LENGTH,Vt.width),me.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Vt.height),me.pixelStorei(U.UNPACK_SKIP_PIXELS,Ne),me.pixelStorei(U.UNPACK_SKIP_ROWS,Ke),me.pixelStorei(U.UNPACK_SKIP_IMAGES,it);const zs=M.isDataArrayTexture||M.isData3DTexture,Et=F.isDataArrayTexture||F.isData3DTexture;if(M.isDepthTexture){const qt=C.get(M),wr=C.get(F),Pt=C.get(qt.__renderTarget),Ar=C.get(wr.__renderTarget);me.bindFramebuffer(U.READ_FRAMEBUFFER,Pt.__webglFramebuffer),me.bindFramebuffer(U.DRAW_FRAMEBUFFER,Ar.__webglFramebuffer);for(let Vs=0;Vs<Ie;Vs++)zs&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,C.get(M).__webglTexture,H,it+Vs),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,C.get(F).__webglTexture,ve,Xt+Vs)),U.blitFramebuffer(Ne,Ke,ye,be,Ue,yt,ye,be,U.DEPTH_BUFFER_BIT,U.NEAREST);me.bindFramebuffer(U.READ_FRAMEBUFFER,null),me.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(H!==0||M.isRenderTargetTexture||C.has(M)){const qt=C.get(M),wr=C.get(F);me.bindFramebuffer(U.READ_FRAMEBUFFER,Wt),me.bindFramebuffer(U.DRAW_FRAMEBUFFER,hi);for(let Pt=0;Pt<Ie;Pt++)zs?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,qt.__webglTexture,H,it+Pt):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,qt.__webglTexture,H),Et?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,wr.__webglTexture,ve,Xt+Pt):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,wr.__webglTexture,ve),H!==0?U.blitFramebuffer(Ne,Ke,ye,be,Ue,yt,ye,be,U.COLOR_BUFFER_BIT,U.NEAREST):Et?U.copyTexSubImage3D(Ae,ve,Ue,yt,Xt+Pt,Ne,Ke,ye,be):U.copyTexSubImage2D(Ae,ve,Ue,yt,Ne,Ke,ye,be);me.bindFramebuffer(U.READ_FRAMEBUFFER,null),me.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Et?M.isDataTexture||M.isData3DTexture?U.texSubImage3D(Ae,ve,Ue,yt,Xt,ye,be,Ie,Mt,Sn,Vt.data):F.isCompressedArrayTexture?U.compressedTexSubImage3D(Ae,ve,Ue,yt,Xt,ye,be,Ie,Mt,Vt.data):U.texSubImage3D(Ae,ve,Ue,yt,Xt,ye,be,Ie,Mt,Sn,Vt):M.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,ve,Ue,yt,ye,be,Mt,Sn,Vt.data):M.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,ve,Ue,yt,Vt.width,Vt.height,Mt,Vt.data):U.texSubImage2D(U.TEXTURE_2D,ve,Ue,yt,ye,be,Mt,Sn,Vt);me.pixelStorei(U.UNPACK_ROW_LENGTH,Kn),me.pixelStorei(U.UNPACK_IMAGE_HEIGHT,dt),me.pixelStorei(U.UNPACK_SKIP_PIXELS,fi),me.pixelStorei(U.UNPACK_SKIP_ROWS,Di),me.pixelStorei(U.UNPACK_SKIP_IMAGES,Tr),ve===0&&F.generateMipmaps&&U.generateMipmap(Ae),me.unbindTexture()},this.initRenderTarget=function(M){C.get(M).__webglFramebuffer===void 0&&y.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?y.setTextureCube(M,0):M.isData3DTexture?y.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?y.setTexture2DArray(M,0):y.setTexture2D(M,0),me.unbindTexture()},this.resetState=function(){G=0,V=0,N=null,me.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ut._getDrawingBufferColorSpace(e),t.unpackColorSpace=ut._getUnpackColorSpace()}}const pw=`varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,mw=`uniform sampler2D uTexture;
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
}`;function _w({src:i,alt:e,className:t}){const n=At.useRef(null);return At.useEffect(()=>{const r=n.current;if(!r)return;const s=new dw({alpha:!0,antialias:!0,premultipliedAlpha:!1,preserveDrawingBuffer:!0});s.setPixelRatio(Math.min(window.devicePixelRatio,2)),s.setClearColor(0,0),s.outputColorSpace=Vn;const a=s.domElement;a.style.width="100%",a.style.height="100%",a.style.display="block",a.setAttribute("role","img"),a.setAttribute("data-cursor-exclusion","true"),e&&a.setAttribute("aria-label",e),r.appendChild(a);const o=new $y,l=new Vf(-1,1,1,-1,0,1),c=new Wo(2,2),u=new Pi({vertexShader:pw,fragmentShader:mw,transparent:!0,uniforms:{uTexture:{value:null},uResolution:{value:new mt(1,1)},uMouse:{value:new mt(.5,.5)},uVelocity:{value:new mt(0,0)},uStrength:{value:0},uRadius:{value:.3}}}),d=new Ki(c,u);o.add(d);const h=new mS;let f=null;h.load(i,T=>{T.colorSpace=Vn,f=T,u.uniforms.uTexture.value=T});const m=()=>{const{clientWidth:T,clientHeight:x}=r;T===0||x===0||(s.setSize(T,x,!1),u.uniforms.uResolution.value.set(T,x))};m();const _=new ResizeObserver(m);_.observe(r);const p={x:.5,y:.5},g={x:.5,y:.5},v={x:.5,y:.5},b={x:0,y:0};let S=0;const A=T=>{const x=r.getBoundingClientRect();p.x=(T.clientX-x.left)/x.width,p.y=1-(T.clientY-x.top)/x.height};r.addEventListener("pointermove",A);const E=()=>{v.x+=(p.x-v.x)*.06,v.y+=(p.y-v.y)*.06,b.x=v.x-g.x,b.y=v.y-g.y,g.x=v.x,g.y=v.y;const T=Math.sqrt(b.x*b.x+b.y*b.y);S+=(Math.min(T*90,1)-S)*.06,S*=.97,u.uniforms.uMouse.value.set(v.x,v.y),u.uniforms.uVelocity.value.set(b.x,b.y),u.uniforms.uStrength.value=S,s.render(o,l)};return Dt.ticker.add(E),()=>{Dt.ticker.remove(E),_.disconnect(),r.removeEventListener("pointermove",A),c.dispose(),u.dispose(),f?.dispose(),s.dispose(),a.parentNode===r&&r.removeChild(a)}},[i,e]),W.jsx("div",{ref:n,className:t,style:{width:"100%",height:"100%"}})}const Rg=!(typeof navigator>"u")&&navigator.product==="ReactNative",Pg={timeout:Rg?6e4:12e4},gw=function(i){const e={...Pg,...typeof i=="string"?{url:i}:i};if(e.timeout=Dg(e.timeout),e.query){const{url:t,searchParams:n}=(function(r){const s=r.indexOf("?");if(s===-1)return{url:r,searchParams:new URLSearchParams};const a=r.slice(0,s),o=r.slice(s+1);if(!Rg)return{url:a,searchParams:new URLSearchParams(o)};if(typeof decodeURIComponent!="function")throw new Error("Broken `URLSearchParams` implementation, and `decodeURIComponent` is not defined");const l=new URLSearchParams;for(const c of o.split("&")){const[u,d]=c.split("=");u&&l.append(Wp(u),Wp(d||""))}return{url:a,searchParams:l}})(e.url);for(const[r,s]of Object.entries(e.query)){if(s!==void 0)if(Array.isArray(s))for(const o of s)n.append(r,o);else n.append(r,s);const a=n.toString();a&&(e.url=`${t}?${a}`)}}return e.method=e.body&&!e.method?"POST":(e.method||"GET").toUpperCase(),e};function Wp(i){return decodeURIComponent(i.replace(/\+/g," "))}function Dg(i){if(i===!1||i===0)return!1;if(i.connect||i.socket)return i;const e=Number(i);return isNaN(e)?Dg(Pg.timeout):{connect:e,socket:e}}const vw=/^https?:\/\//i,xw=function(i){if(!vw.test(i.url))throw new Error(`"${i.url}" is not a valid URL`)};function Ig(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}const yw=["request","response","progress","error","abort"],Xp=["processOptions","validateOptions","interceptRequest","finalizeOptions","onRequest","onResponse","onError","onReturn","onHeaders"];function Lg(i,e){const t=[],n=Xp.reduce((s,a)=>(s[a]=s[a]||[],s),{processOptions:[gw],validateOptions:[xw]});function r(s){const a=yw.reduce((f,m)=>(f[m]=(function(){const _=Object.create(null);let p=0;return{publish:function(g){for(const v in _)_[v](g)},subscribe:function(g){const v=p++;return _[v]=g,function(){delete _[v]}}}})(),f),{}),o=(f=>function(m,_,...p){const g=m==="onError";let v=_;for(let b=0;b<f[m].length&&(v=(0,f[m][b])(v,...p),!g||v);b++);return v})(n),l=o("processOptions",s);o("validateOptions",l);const c={options:l,channels:a,applyMiddleware:o};let u;const d=a.request.subscribe(f=>{u=e(f,(m,_)=>((p,g,v)=>{let b=p,S=g;if(!b)try{S=o("onResponse",g,v)}catch(A){S=null,b=A}b=b&&o("onError",b,v),b?a.error.publish(b):S&&a.response.publish(S)})(m,_,f))});a.abort.subscribe(()=>{d(),u&&u.abort()});const h=o("onReturn",a,c);return h===a&&a.request.publish(c),h}return r.use=function(s){if(!s)throw new Error("Tried to add middleware that resolved to falsey value");if(typeof s=="function")throw new Error("Tried to add middleware that was a function. It probably expects you to pass options to it.");if(s.onReturn&&n.onReturn.length>0)throw new Error("Tried to add new middleware with `onReturn` handler, but another handler has already been registered for this event");return Xp.forEach(a=>{s[a]&&n[a].push(s[a])}),t.push(s),r},r.clone=()=>Lg(t,e),i.forEach(r.use),r}var qp,$p,Sw=Ig((function(){if($p)return qp;$p=1;var i=function(t){return t.replace(/^\s+|\s+$/g,"")},e=function(t){return Object.prototype.toString.call(t)==="[object Array]"};return qp=function(t){if(!t)return{};for(var n=Object.create(null),r=i(t).split(`
`),s=0;s<r.length;s++){var a=r[s],o=a.indexOf(":"),l=i(a.slice(0,o)).toLowerCase(),c=i(a.slice(o+1));typeof n[l]>"u"?n[l]=c:e(n[l])?n[l].push(c):n[l]=[n[l],c]}return n}})());let Qh=class{onabort;onerror;onreadystatechange;ontimeout;readyState=0;response;responseText="";responseType="";status;statusText;withCredentials;#e;#t;#n;#r={};#i;#s={};#a;open(e,t,n){this.#e=e,this.#t=t,this.#n="",this.readyState=1,this.onreadystatechange?.(),this.#i=void 0}abort(){this.#i&&this.#i.abort()}getAllResponseHeaders(){return this.#n}setRequestHeader(e,t){this.#r[e]=t}setInit(e,t=!0){this.#s=e,this.#a=t}send(e){const t=this.responseType!=="arraybuffer",n={...this.#s,method:this.#e,headers:this.#r,body:e};typeof AbortController=="function"&&this.#a&&(this.#i=new AbortController,typeof EventTarget<"u"&&this.#i.signal instanceof EventTarget&&(n.signal=this.#i.signal)),typeof document<"u"&&(n.credentials=this.withCredentials?"include":"omit"),fetch(this.#t,n).then(r=>(r.headers.forEach((s,a)=>{this.#n+=`${a}: ${s}\r
`}),this.status=r.status,this.statusText=r.statusText,this.readyState=3,this.onreadystatechange?.(),t?r.text():r.arrayBuffer())).then(r=>{typeof r=="string"?this.responseText=r:this.response=r,this.readyState=4,this.onreadystatechange?.()}).catch(r=>{r.name!=="AbortError"?this.onerror?.(r):this.onabort?.()})}};const ef=typeof XMLHttpRequest=="function"?"xhr":"fetch",bw=ef==="xhr"?XMLHttpRequest:Qh,Mw=(i,e)=>{const t=i.options,n=i.applyMiddleware("finalizeOptions",t),r={},s=i.applyMiddleware("interceptRequest",void 0,{adapter:ef,context:i});if(s){const _=setTimeout(e,0,null,s);return{abort:()=>clearTimeout(_)}}let a=new bw;a instanceof Qh&&typeof n.fetch=="object"&&a.setInit(n.fetch,n.useAbortSignal??!0);const o=n.headers,l=n.timeout;let c=!1,u=!1,d=!1;if(a.onerror=_=>{m(a instanceof Qh?_ instanceof Error?_:new Error(`Request error while attempting to reach is ${n.url}`,{cause:_}):new Error(`Request error while attempting to reach is ${n.url}${_.lengthComputable?`(${_.loaded} of ${_.total} bytes transferred)`:""}`))},a.ontimeout=_=>{m(new Error(`Request timeout while attempting to reach ${n.url}${_.lengthComputable?`(${_.loaded} of ${_.total} bytes transferred)`:""}`))},a.onabort=()=>{f(!0),c=!0},a.onreadystatechange=function(){l&&(f(),r.socket=setTimeout(()=>h("ESOCKETTIMEDOUT"),l.socket)),!c&&a&&a.readyState===4&&a.status!==0&&(function(){if(!(c||u||d)){if(a.status===0)return void m(new Error("Unknown XHR error"));f(),u=!0,e(null,{body:a.response||(a.responseType===""||a.responseType==="text"?a.responseText:""),url:n.url,method:n.method,headers:Sw(a.getAllResponseHeaders()),statusCode:a.status,statusMessage:a.statusText})}})()},a.open(n.method,n.url,!0),a.withCredentials=!!n.withCredentials,o&&a.setRequestHeader)for(const _ in o)o.hasOwnProperty(_)&&a.setRequestHeader(_,o[_]);return n.rawBody&&(a.responseType="arraybuffer"),i.applyMiddleware("onRequest",{options:n,adapter:ef,request:a,context:i}),a.send(n.body||null),l&&(r.connect=setTimeout(()=>h("ETIMEDOUT"),l.connect)),{abort:function(){c=!0,a&&a.abort()}};function h(_){d=!0,a.abort();const p=new Error(_==="ESOCKETTIMEDOUT"?`Socket timed out on request to ${n.url}`:`Connection timed out on request to ${n.url}`);p.code=_,i.channels.error.publish(p)}function f(_){(_||c||a&&a.readyState>=2&&r.connect)&&clearTimeout(r.connect),r.socket&&clearTimeout(r.socket)}function m(_){if(u)return;f(!0),u=!0,a=null;const p=_||new Error(`Network error while attempting to reach ${n.url}`);p.isNetworkError=!0,p.request=n,e(p)}},Ew=(i=[],e=Mw)=>Lg(i,e);var Tw={},jp,Yp,Kp,Zp,Jp,Pu={exports:{}};Jp||(Jp=1,(function(i,e){e.formatArgs=function(n){if(n[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+n[0]+(this.useColors?"%c ":" ")+"+"+i.exports.humanize(this.diff),!this.useColors)return;const r="color: "+this.color;n.splice(1,0,r,"color: inherit");let s=0,a=0;n[0].replace(/%[a-zA-Z%]/g,o=>{o!=="%%"&&(s++,o==="%c"&&(a=s))}),n.splice(a,0,r)},e.save=function(n){try{n?e.storage.setItem("debug",n):e.storage.removeItem("debug")}catch{}},e.load=function(){let n;try{n=e.storage.getItem("debug")||e.storage.getItem("DEBUG")}catch{}return!n&&typeof process<"u"&&"env"in process&&(n=Tw.DEBUG),n},e.useColors=function(){if(typeof window<"u"&&window.process&&(window.process.type==="renderer"||window.process.__nwjs))return!0;if(typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))return!1;let n;return typeof document<"u"&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||typeof window<"u"&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||typeof navigator<"u"&&navigator.userAgent&&(n=navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/))&&parseInt(n[1],10)>=31||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},e.storage=(function(){try{return localStorage}catch{}})(),e.destroy=(()=>{let n=!1;return()=>{n||(n=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))}})(),e.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],e.log=console.debug||console.log||(()=>{}),i.exports=(Zp?Kp:(Zp=1,Kp=function(n){function r(o){let l,c,u,d=null;function h(...f){if(!h.enabled)return;const m=h,_=Number(new Date),p=_-(l||_);m.diff=p,m.prev=l,m.curr=_,l=_,f[0]=r.coerce(f[0]),typeof f[0]!="string"&&f.unshift("%O");let g=0;f[0]=f[0].replace(/%([a-zA-Z%])/g,(v,b)=>{if(v==="%%")return"%";g++;const S=r.formatters[b];if(typeof S=="function"){const A=f[g];v=S.call(m,A),f.splice(g,1),g--}return v}),r.formatArgs.call(m,f),(m.log||r.log).apply(m,f)}return h.namespace=o,h.useColors=r.useColors(),h.color=r.selectColor(o),h.extend=s,h.destroy=r.destroy,Object.defineProperty(h,"enabled",{enumerable:!0,configurable:!1,get:()=>d!==null?d:(c!==r.namespaces&&(c=r.namespaces,u=r.enabled(o)),u),set:f=>{d=f}}),typeof r.init=="function"&&r.init(h),h}function s(o,l){const c=r(this.namespace+(typeof l>"u"?":":l)+o);return c.log=this.log,c}function a(o,l){let c=0,u=0,d=-1,h=0;for(;c<o.length;)if(u<l.length&&(l[u]===o[c]||l[u]==="*"))l[u]==="*"?(d=u,h=c,u++):(c++,u++);else{if(d===-1)return!1;u=d+1,h++,c=h}for(;u<l.length&&l[u]==="*";)u++;return u===l.length}return r.debug=r,r.default=r,r.coerce=function(o){return o instanceof Error?o.stack||o.message:o},r.disable=function(){const o=[...r.names,...r.skips.map(l=>"-"+l)].join(",");return r.enable(""),o},r.enable=function(o){r.save(o),r.namespaces=o,r.names=[],r.skips=[];const l=(typeof o=="string"?o:"").trim().replace(/\s+/g,",").split(",").filter(Boolean);for(const c of l)c[0]==="-"?r.skips.push(c.slice(1)):r.names.push(c)},r.enabled=function(o){for(const l of r.skips)if(a(o,l))return!1;for(const l of r.names)if(a(o,l))return!0;return!1},r.humanize=(function(){if(Yp)return jp;Yp=1;var o=1e3,l=60*o,c=60*l,u=24*c,d=7*u;function h(f,m,_,p){var g=m>=1.5*_;return Math.round(f/_)+" "+p+(g?"s":"")}return jp=function(f,m){m=m||{};var _,p,g=typeof f;if(g==="string"&&f.length>0)return(function(v){if(!((v=String(v)).length>100)){var b=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(v);if(b){var S=parseFloat(b[1]);switch((b[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return 315576e5*S;case"weeks":case"week":case"w":return S*d;case"days":case"day":case"d":return S*u;case"hours":case"hour":case"hrs":case"hr":case"h":return S*c;case"minutes":case"minute":case"mins":case"min":case"m":return S*l;case"seconds":case"second":case"secs":case"sec":case"s":return S*o;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return S;default:return}}}})(f);if(g==="number"&&isFinite(f))return m.long?(_=f,(p=Math.abs(_))>=u?h(_,p,u,"day"):p>=c?h(_,p,c,"hour"):p>=l?h(_,p,l,"minute"):p>=o?h(_,p,o,"second"):_+" ms"):(function(v){var b=Math.abs(v);return b>=u?Math.round(v/u)+"d":b>=c?Math.round(v/c)+"h":b>=l?Math.round(v/l)+"m":b>=o?Math.round(v/o)+"s":v+"ms"})(f);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(f))}})(),r.destroy=function(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")},Object.keys(n).forEach(o=>{r[o]=n[o]}),r.names=[],r.skips=[],r.formatters={},r.selectColor=function(o){let l=0;for(let c=0;c<o.length;c++)l=(l<<5)-l+o.charCodeAt(c),l|=0;return r.colors[Math.abs(l)%r.colors.length]},r.enable(r.load()),r}))(e);const{formatters:t}=i.exports;t.j=function(n){try{return JSON.stringify(n)}catch(r){return"[UnexpectedJSONParseError]: "+r.message}}})(Pu,Pu.exports)),Pu.exports;const ww=typeof Buffer>"u"?()=>!1:i=>Buffer.isBuffer(i);function Qp(i){return Object.prototype.toString.call(i)==="[object Object]"}function Aw(i){if(Qp(i)===!1)return!1;const e=i.constructor;if(e===void 0)return!0;const t=e.prototype;return!(Qp(t)===!1||t.hasOwnProperty("isPrototypeOf")===!1)}const Cw=["boolean","string","number"];function Rw(){return{processOptions:i=>{const e=i.body;return!e||typeof e.pipe=="function"||ww(e)||Cw.indexOf(typeof e)===-1&&!Array.isArray(e)&&!Aw(e)?i:Object.assign({},i,{body:JSON.stringify(i.body),headers:Object.assign({},i.headers,{"Content-Type":"application/json"})})}}}function Pw(i){return{onResponse:t=>{const n=t.headers["content-type"]||"",r=i&&i.force||n.indexOf("application/json")!==-1;return t.body&&n&&r?Object.assign({},t,{body:e(t.body)}):t},processOptions:t=>Object.assign({},t,{headers:Object.assign({Accept:"application/json"},t.headers)})};function e(t){try{return JSON.parse(t)}catch(n){throw n.message=`Failed to parsed response body as JSON: ${n.message}`,n}}}let co={};typeof globalThis<"u"?co=globalThis:typeof window<"u"?co=window:typeof global<"u"?co=global:typeof self<"u"&&(co=self);var Dw=co;function Iw(i={}){const e=i.implementation||Dw.Observable;if(!e)throw new Error("`Observable` is not available in global scope, and no implementation was passed");return{onReturn:(t,n)=>new e(r=>(t.error.subscribe(s=>r.error(s)),t.progress.subscribe(s=>r.next(Object.assign({type:"progress"},s))),t.response.subscribe(s=>{r.next(Object.assign({type:"response"},s)),r.complete()}),t.request.publish(n),()=>t.abort.publish()))}}function Lw(){return{onRequest:i=>{if(i.adapter!=="xhr")return;const e=i.request,t=i.context;function n(r){return s=>{const a=s.lengthComputable?s.loaded/s.total*100:-1;t.channels.progress.publish({stage:r,percent:a,total:s.total,loaded:s.loaded,lengthComputable:s.lengthComputable})}}"upload"in e&&"onprogress"in e.upload&&(e.upload.onprogress=n("upload")),"onprogress"in e&&(e.onprogress=n("download"))}}}var Ng=(i,e,t)=>(t.method==="GET"||t.method==="HEAD")&&(i.isNetworkError||!1);function Nw(i){return 100*Math.pow(2,i)+100*Math.random()}const Hf=(i={})=>(e=>{const t=e.maxRetries||5,n=e.retryDelay||Nw,r=e.shouldRetry;return{onError:(s,a)=>{const o=a.options,l=o.maxRetries||t,c=o.retryDelay||n,u=o.shouldRetry||r,d=o.attemptNumber||0;if((h=o.body)!==null&&typeof h=="object"&&typeof h.pipe=="function"||!u(s,d,o)||d>=l)return s;var h;const f=Object.assign({},a,{options:Object.assign({},o,{attemptNumber:d+1})});return setTimeout(()=>a.channels.request.publish(f),c(d)),null}}})({shouldRetry:Ng,...i});Hf.shouldRetry=Ng;var tf=function(i,e){return tf=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])},tf(i,e)};function Mr(i,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");tf(i,e);function t(){this.constructor=i}i.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}function Uw(i,e,t,n){function r(s){return s instanceof t?s:new t(function(a){a(s)})}return new(t||(t=Promise))(function(s,a){function o(u){try{c(n.next(u))}catch(d){a(d)}}function l(u){try{c(n.throw(u))}catch(d){a(d)}}function c(u){u.done?s(u.value):r(u.value).then(o,l)}c((n=n.apply(i,e||[])).next())})}function Ug(i,e){var t={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},n,r,s,a=Object.create((typeof Iterator=="function"?Iterator:Object).prototype);return a.next=o(0),a.throw=o(1),a.return=o(2),typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function o(c){return function(u){return l([c,u])}}function l(c){if(n)throw new TypeError("Generator is already executing.");for(;a&&(a=0,c[0]&&(t=0)),t;)try{if(n=1,r&&(s=c[0]&2?r.return:c[0]?r.throw||((s=r.return)&&s.call(r),0):r.next)&&!(s=s.call(r,c[1])).done)return s;switch(r=0,s&&(c=[c[0]&2,s.value]),c[0]){case 0:case 1:s=c;break;case 4:return t.label++,{value:c[1],done:!1};case 5:t.label++,r=c[1],c=[0];continue;case 7:c=t.ops.pop(),t.trys.pop();continue;default:if(s=t.trys,!(s=s.length>0&&s[s.length-1])&&(c[0]===6||c[0]===2)){t=0;continue}if(c[0]===3&&(!s||c[1]>s[0]&&c[1]<s[3])){t.label=c[1];break}if(c[0]===6&&t.label<s[1]){t.label=s[1],s=c;break}if(s&&t.label<s[2]){t.label=s[2],t.ops.push(c);break}s[2]&&t.ops.pop(),t.trys.pop();continue}c=e.call(i,t)}catch(u){c=[6,u],r=0}finally{n=s=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}function Ua(i){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&i[e],n=0;if(t)return t.call(i);if(i&&typeof i.length=="number")return{next:function(){return i&&n>=i.length&&(i=void 0),{value:i&&i[n++],done:!i}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function yr(i,e){var t=typeof Symbol=="function"&&i[Symbol.iterator];if(!t)return i;var n=t.call(i),r,s=[],a;try{for(;(e===void 0||e-- >0)&&!(r=n.next()).done;)s.push(r.value)}catch(o){a={error:o}}finally{try{r&&!r.done&&(t=n.return)&&t.call(n)}finally{if(a)throw a.error}}return s}function Sr(i,e,t){if(t||arguments.length===2)for(var n=0,r=e.length,s;n<r;n++)(s||!(n in e))&&(s||(s=Array.prototype.slice.call(e,0,n)),s[n]=e[n]);return i.concat(s||Array.prototype.slice.call(e))}function Sa(i){return this instanceof Sa?(this.v=i,this):new Sa(i)}function Ow(i,e,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=t.apply(i,e||[]),r,s=[];return r=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),o("next"),o("throw"),o("return",a),r[Symbol.asyncIterator]=function(){return this},r;function a(f){return function(m){return Promise.resolve(m).then(f,d)}}function o(f,m){n[f]&&(r[f]=function(_){return new Promise(function(p,g){s.push([f,_,p,g])>1||l(f,_)})},m&&(r[f]=m(r[f])))}function l(f,m){try{c(n[f](m))}catch(_){h(s[0][3],_)}}function c(f){f.value instanceof Sa?Promise.resolve(f.value.v).then(u,d):h(s[0][2],f)}function u(f){l("next",f)}function d(f){l("throw",f)}function h(f,m){f(m),s.shift(),s.length&&l(s[0][0],s[0][1])}}function Fw(i){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=i[Symbol.asyncIterator],t;return e?e.call(i):(i=typeof Ua=="function"?Ua(i):i[Symbol.iterator](),t={},n("next"),n("throw"),n("return"),t[Symbol.asyncIterator]=function(){return this},t);function n(s){t[s]=i[s]&&function(a){return new Promise(function(o,l){a=i[s](a),r(o,l,a.done,a.value)})}}function r(s,a,o,l){Promise.resolve(l).then(function(c){s({value:c,done:o})},a)}}function Ut(i){return typeof i=="function"}function Gf(i){var e=function(n){Error.call(n),n.stack=new Error().stack},t=i(e);return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}var Du=Gf(function(i){return function(t){i(this),this.message=t?t.length+` errors occurred during unsubscription:
`+t.map(function(n,r){return r+1+") "+n.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=t}});function hc(i,e){if(i){var t=i.indexOf(e);0<=t&&i.splice(t,1)}}var Xo=(function(){function i(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}return i.prototype.unsubscribe=function(){var e,t,n,r,s;if(!this.closed){this.closed=!0;var a=this._parentage;if(a)if(this._parentage=null,Array.isArray(a))try{for(var o=Ua(a),l=o.next();!l.done;l=o.next()){var c=l.value;c.remove(this)}}catch(_){e={error:_}}finally{try{l&&!l.done&&(t=o.return)&&t.call(o)}finally{if(e)throw e.error}}else a.remove(this);var u=this.initialTeardown;if(Ut(u))try{u()}catch(_){s=_ instanceof Du?_.errors:[_]}var d=this._finalizers;if(d){this._finalizers=null;try{for(var h=Ua(d),f=h.next();!f.done;f=h.next()){var m=f.value;try{em(m)}catch(_){s=s??[],_ instanceof Du?s=Sr(Sr([],yr(s)),yr(_.errors)):s.push(_)}}}catch(_){n={error:_}}finally{try{f&&!f.done&&(r=h.return)&&r.call(h)}finally{if(n)throw n.error}}}if(s)throw new Du(s)}},i.prototype.add=function(e){var t;if(e&&e!==this)if(this.closed)em(e);else{if(e instanceof i){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(t=this._finalizers)!==null&&t!==void 0?t:[]).push(e)}},i.prototype._hasParent=function(e){var t=this._parentage;return t===e||Array.isArray(t)&&t.includes(e)},i.prototype._addParent=function(e){var t=this._parentage;this._parentage=Array.isArray(t)?(t.push(e),t):t?[t,e]:e},i.prototype._removeParent=function(e){var t=this._parentage;t===e?this._parentage=null:Array.isArray(t)&&hc(t,e)},i.prototype.remove=function(e){var t=this._finalizers;t&&hc(t,e),e instanceof i&&e._removeParent(this)},i.EMPTY=(function(){var e=new i;return e.closed=!0,e})(),i})(),Og=Xo.EMPTY;function Fg(i){return i instanceof Xo||i&&"closed"in i&&Ut(i.remove)&&Ut(i.add)&&Ut(i.unsubscribe)}function em(i){Ut(i)?i():i.unsubscribe()}var Bw={Promise:void 0},kw={setTimeout:function(i,e){for(var t=[],n=2;n<arguments.length;n++)t[n-2]=arguments[n];return setTimeout.apply(void 0,Sr([i,e],yr(t)))},clearTimeout:function(i){return clearTimeout(i)},delegate:void 0};function Bg(i){kw.setTimeout(function(){throw i})}function tm(){}function jl(i){i()}var Wf=(function(i){Mr(e,i);function e(t){var n=i.call(this)||this;return n.isStopped=!1,t?(n.destination=t,Fg(t)&&t.add(n)):n.destination=Hw,n}return e.create=function(t,n,r){return new Oa(t,n,r)},e.prototype.next=function(t){this.isStopped||this._next(t)},e.prototype.error=function(t){this.isStopped||(this.isStopped=!0,this._error(t))},e.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},e.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,i.prototype.unsubscribe.call(this),this.destination=null)},e.prototype._next=function(t){this.destination.next(t)},e.prototype._error=function(t){try{this.destination.error(t)}finally{this.unsubscribe()}},e.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},e})(Xo),zw=(function(){function i(e){this.partialObserver=e}return i.prototype.next=function(e){var t=this.partialObserver;if(t.next)try{t.next(e)}catch(n){Il(n)}},i.prototype.error=function(e){var t=this.partialObserver;if(t.error)try{t.error(e)}catch(n){Il(n)}else Il(e)},i.prototype.complete=function(){var e=this.partialObserver;if(e.complete)try{e.complete()}catch(t){Il(t)}},i})(),Oa=(function(i){Mr(e,i);function e(t,n,r){var s=i.call(this)||this,a;return Ut(t)||!t?a={next:t??void 0,error:n??void 0,complete:r??void 0}:a=t,s.destination=new zw(a),s}return e})(Wf);function Il(i){Bg(i)}function Vw(i){throw i}var Hw={closed:!0,next:tm,error:Vw,complete:tm},Xf=(function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"})();function Rc(i){return i}function Gw(){for(var i=[],e=0;e<arguments.length;e++)i[e]=arguments[e];return kg(i)}function kg(i){return i.length===0?Rc:i.length===1?i[0]:function(t){return i.reduce(function(n,r){return r(n)},t)}}var Gt=(function(){function i(e){e&&(this._subscribe=e)}return i.prototype.lift=function(e){var t=new i;return t.source=this,t.operator=e,t},i.prototype.subscribe=function(e,t,n){var r=this,s=Xw(e)?e:new Oa(e,t,n);return jl(function(){var a=r,o=a.operator,l=a.source;s.add(o?o.call(s,l):l?r._subscribe(s):r._trySubscribe(s))}),s},i.prototype._trySubscribe=function(e){try{return this._subscribe(e)}catch(t){e.error(t)}},i.prototype.forEach=function(e,t){var n=this;return t=nm(t),new t(function(r,s){var a=new Oa({next:function(o){try{e(o)}catch(l){s(l),a.unsubscribe()}},error:s,complete:r});n.subscribe(a)})},i.prototype._subscribe=function(e){var t;return(t=this.source)===null||t===void 0?void 0:t.subscribe(e)},i.prototype[Xf]=function(){return this},i.prototype.pipe=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return kg(e)(this)},i.prototype.toPromise=function(e){var t=this;return e=nm(e),new e(function(n,r){var s;t.subscribe(function(a){return s=a},function(a){return r(a)},function(){return n(s)})})},i.create=function(e){return new i(e)},i})();function nm(i){var e;return(e=i??Bw.Promise)!==null&&e!==void 0?e:Promise}function Ww(i){return i&&Ut(i.next)&&Ut(i.error)&&Ut(i.complete)}function Xw(i){return i&&i instanceof Wf||Ww(i)&&Fg(i)}function qw(i){return Ut(i?.lift)}function Zi(i){return function(e){if(qw(e))return e.lift(function(t){try{return i(t,this)}catch(n){this.error(n)}});throw new TypeError("Unable to lift unknown Observable type")}}function Qr(i,e,t,n,r){return new $w(i,e,t,n,r)}var $w=(function(i){Mr(e,i);function e(t,n,r,s,a,o){var l=i.call(this,t)||this;return l.onFinalize=a,l.shouldUnsubscribe=o,l._next=n?function(c){try{n(c)}catch(u){t.error(u)}}:i.prototype._next,l._error=s?function(c){try{s(c)}catch(u){t.error(u)}finally{this.unsubscribe()}}:i.prototype._error,l._complete=r?function(){try{r()}catch(c){t.error(c)}finally{this.unsubscribe()}}:i.prototype._complete,l}return e.prototype.unsubscribe=function(){var t;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var n=this.closed;i.prototype.unsubscribe.call(this),!n&&((t=this.onFinalize)===null||t===void 0||t.call(this))}},e})(Wf),jw=Gf(function(i){return function(){i(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}}),qf=(function(i){Mr(e,i);function e(){var t=i.call(this)||this;return t.closed=!1,t.currentObservers=null,t.observers=[],t.isStopped=!1,t.hasError=!1,t.thrownError=null,t}return e.prototype.lift=function(t){var n=new im(this,this);return n.operator=t,n},e.prototype._throwIfClosed=function(){if(this.closed)throw new jw},e.prototype.next=function(t){var n=this;jl(function(){var r,s;if(n._throwIfClosed(),!n.isStopped){n.currentObservers||(n.currentObservers=Array.from(n.observers));try{for(var a=Ua(n.currentObservers),o=a.next();!o.done;o=a.next()){var l=o.value;l.next(t)}}catch(c){r={error:c}}finally{try{o&&!o.done&&(s=a.return)&&s.call(a)}finally{if(r)throw r.error}}}})},e.prototype.error=function(t){var n=this;jl(function(){if(n._throwIfClosed(),!n.isStopped){n.hasError=n.isStopped=!0,n.thrownError=t;for(var r=n.observers;r.length;)r.shift().error(t)}})},e.prototype.complete=function(){var t=this;jl(function(){if(t._throwIfClosed(),!t.isStopped){t.isStopped=!0;for(var n=t.observers;n.length;)n.shift().complete()}})},e.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(e.prototype,"observed",{get:function(){var t;return((t=this.observers)===null||t===void 0?void 0:t.length)>0},enumerable:!1,configurable:!0}),e.prototype._trySubscribe=function(t){return this._throwIfClosed(),i.prototype._trySubscribe.call(this,t)},e.prototype._subscribe=function(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)},e.prototype._innerSubscribe=function(t){var n=this,r=this,s=r.hasError,a=r.isStopped,o=r.observers;return s||a?Og:(this.currentObservers=null,o.push(t),new Xo(function(){n.currentObservers=null,hc(o,t)}))},e.prototype._checkFinalizedStatuses=function(t){var n=this,r=n.hasError,s=n.thrownError,a=n.isStopped;r?t.error(s):a&&t.complete()},e.prototype.asObservable=function(){var t=new Gt;return t.source=this,t},e.create=function(t,n){return new im(t,n)},e})(Gt),im=(function(i){Mr(e,i);function e(t,n){var r=i.call(this)||this;return r.destination=t,r.source=n,r}return e.prototype.next=function(t){var n,r;(r=(n=this.destination)===null||n===void 0?void 0:n.next)===null||r===void 0||r.call(n,t)},e.prototype.error=function(t){var n,r;(r=(n=this.destination)===null||n===void 0?void 0:n.error)===null||r===void 0||r.call(n,t)},e.prototype.complete=function(){var t,n;(n=(t=this.destination)===null||t===void 0?void 0:t.complete)===null||n===void 0||n.call(t)},e.prototype._subscribe=function(t){var n,r;return(r=(n=this.source)===null||n===void 0?void 0:n.subscribe(t))!==null&&r!==void 0?r:Og},e})(qf),$f={now:function(){return($f.delegate||Date).now()},delegate:void 0},Yw=(function(i){Mr(e,i);function e(t,n,r){t===void 0&&(t=1/0),n===void 0&&(n=1/0),r===void 0&&(r=$f);var s=i.call(this)||this;return s._bufferSize=t,s._windowTime=n,s._timestampProvider=r,s._buffer=[],s._infiniteTimeWindow=!0,s._infiniteTimeWindow=n===1/0,s._bufferSize=Math.max(1,t),s._windowTime=Math.max(1,n),s}return e.prototype.next=function(t){var n=this,r=n.isStopped,s=n._buffer,a=n._infiniteTimeWindow,o=n._timestampProvider,l=n._windowTime;r||(s.push(t),!a&&s.push(o.now()+l)),this._trimBuffer(),i.prototype.next.call(this,t)},e.prototype._subscribe=function(t){this._throwIfClosed(),this._trimBuffer();for(var n=this._innerSubscribe(t),r=this,s=r._infiniteTimeWindow,a=r._buffer,o=a.slice(),l=0;l<o.length&&!t.closed;l+=s?1:2)t.next(o[l]);return this._checkFinalizedStatuses(t),n},e.prototype._trimBuffer=function(){var t=this,n=t._bufferSize,r=t._timestampProvider,s=t._buffer,a=t._infiniteTimeWindow,o=(a?1:2)*n;if(n<1/0&&o<s.length&&s.splice(0,s.length-o),!a){for(var l=r.now(),c=0,u=1;u<s.length&&s[u]<=l;u+=2)c=u;c&&s.splice(0,c+1)}},e})(qf),Kw=(function(i){Mr(e,i);function e(t,n){return i.call(this)||this}return e.prototype.schedule=function(t,n){return this},e})(Xo),rm={setInterval:function(i,e){for(var t=[],n=2;n<arguments.length;n++)t[n-2]=arguments[n];return setInterval.apply(void 0,Sr([i,e],yr(t)))},clearInterval:function(i){return clearInterval(i)},delegate:void 0},Zw=(function(i){Mr(e,i);function e(t,n){var r=i.call(this,t,n)||this;return r.scheduler=t,r.work=n,r.pending=!1,r}return e.prototype.schedule=function(t,n){var r;if(n===void 0&&(n=0),this.closed)return this;this.state=t;var s=this.id,a=this.scheduler;return s!=null&&(this.id=this.recycleAsyncId(a,s,n)),this.pending=!0,this.delay=n,this.id=(r=this.id)!==null&&r!==void 0?r:this.requestAsyncId(a,this.id,n),this},e.prototype.requestAsyncId=function(t,n,r){return r===void 0&&(r=0),rm.setInterval(t.flush.bind(t,this),r)},e.prototype.recycleAsyncId=function(t,n,r){if(r===void 0&&(r=0),r!=null&&this.delay===r&&this.pending===!1)return n;n!=null&&rm.clearInterval(n)},e.prototype.execute=function(t,n){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var r=this._execute(t,n);if(r)return r;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},e.prototype._execute=function(t,n){var r=!1,s;try{this.work(t)}catch(a){r=!0,s=a||new Error("Scheduled action threw falsy error")}if(r)return this.unsubscribe(),s},e.prototype.unsubscribe=function(){if(!this.closed){var t=this,n=t.id,r=t.scheduler,s=r.actions;this.work=this.state=this.scheduler=null,this.pending=!1,hc(s,this),n!=null&&(this.id=this.recycleAsyncId(r,n,null)),this.delay=null,i.prototype.unsubscribe.call(this)}},e})(Kw),sm=(function(){function i(e,t){t===void 0&&(t=i.now),this.schedulerActionCtor=e,this.now=t}return i.prototype.schedule=function(e,t,n){return t===void 0&&(t=0),new this.schedulerActionCtor(this,e).schedule(n,t)},i.now=$f.now,i})(),Jw=(function(i){Mr(e,i);function e(t,n){n===void 0&&(n=sm.now);var r=i.call(this,t,n)||this;return r.actions=[],r._active=!1,r}return e.prototype.flush=function(t){var n=this.actions;if(this._active){n.push(t);return}var r;this._active=!0;do if(r=t.execute(t.state,t.delay))break;while(t=n.shift());if(this._active=!1,r){for(;t=n.shift();)t.unsubscribe();throw r}},e})(sm),Qw=new Jw(Zw),eA=Qw,tA=new Gt(function(i){return i.complete()});function nA(i){return i&&Ut(i.schedule)}function jf(i){return i[i.length-1]}function iA(i){return Ut(jf(i))?i.pop():void 0}function Yf(i){return nA(jf(i))?i.pop():void 0}function rA(i,e){return typeof jf(i)=="number"?i.pop():e}var zg=(function(i){return i&&typeof i.length=="number"&&typeof i!="function"});function Vg(i){return Ut(i?.then)}function Hg(i){return Ut(i[Xf])}function Gg(i){return Symbol.asyncIterator&&Ut(i?.[Symbol.asyncIterator])}function Wg(i){return new TypeError("You provided "+(i!==null&&typeof i=="object"?"an invalid object":"'"+i+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}function sA(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var Xg=sA();function qg(i){return Ut(i?.[Xg])}function $g(i){return Ow(this,arguments,function(){var t,n,r,s;return Ug(this,function(a){switch(a.label){case 0:t=i.getReader(),a.label=1;case 1:a.trys.push([1,,9,10]),a.label=2;case 2:return[4,Sa(t.read())];case 3:return n=a.sent(),r=n.value,s=n.done,s?[4,Sa(void 0)]:[3,5];case 4:return[2,a.sent()];case 5:return[4,Sa(r)];case 6:return[4,a.sent()];case 7:return a.sent(),[3,2];case 8:return[3,10];case 9:return t.releaseLock(),[7];case 10:return[2]}})})}function jg(i){return Ut(i?.getReader)}function Ji(i){if(i instanceof Gt)return i;if(i!=null){if(Hg(i))return aA(i);if(zg(i))return oA(i);if(Vg(i))return lA(i);if(Gg(i))return Yg(i);if(qg(i))return cA(i);if(jg(i))return uA(i)}throw Wg(i)}function aA(i){return new Gt(function(e){var t=i[Xf]();if(Ut(t.subscribe))return t.subscribe(e);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function oA(i){return new Gt(function(e){for(var t=0;t<i.length&&!e.closed;t++)e.next(i[t]);e.complete()})}function lA(i){return new Gt(function(e){i.then(function(t){e.closed||(e.next(t),e.complete())},function(t){return e.error(t)}).then(null,Bg)})}function cA(i){return new Gt(function(e){var t,n;try{for(var r=Ua(i),s=r.next();!s.done;s=r.next()){var a=s.value;if(e.next(a),e.closed)return}}catch(o){t={error:o}}finally{try{s&&!s.done&&(n=r.return)&&n.call(r)}finally{if(t)throw t.error}}e.complete()})}function Yg(i){return new Gt(function(e){hA(i,e).catch(function(t){return e.error(t)})})}function uA(i){return Yg($g(i))}function hA(i,e){var t,n,r,s;return Uw(this,void 0,void 0,function(){var a,o;return Ug(this,function(l){switch(l.label){case 0:l.trys.push([0,5,6,11]),t=Fw(i),l.label=1;case 1:return[4,t.next()];case 2:if(n=l.sent(),!!n.done)return[3,4];if(a=n.value,e.next(a),e.closed)return[2];l.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return o=l.sent(),r={error:o},[3,11];case 6:return l.trys.push([6,,9,10]),n&&!n.done&&(s=t.return)?[4,s.call(t)]:[3,8];case 7:l.sent(),l.label=8;case 8:return[3,10];case 9:if(r)throw r.error;return[7];case 10:return[7];case 11:return e.complete(),[2]}})})}function ws(i,e,t,n,r){n===void 0&&(n=0),r===void 0&&(r=!1);var s=e.schedule(function(){t(),r?i.add(this.schedule(null,n)):this.unsubscribe()},n);if(i.add(s),!r)return s}function Kg(i,e){return e===void 0&&(e=0),Zi(function(t,n){t.subscribe(Qr(n,function(r){return ws(n,i,function(){return n.next(r)},e)},function(){return ws(n,i,function(){return n.complete()},e)},function(r){return ws(n,i,function(){return n.error(r)},e)}))})}function Zg(i,e){return e===void 0&&(e=0),Zi(function(t,n){n.add(i.schedule(function(){return t.subscribe(n)},e))})}function fA(i,e){return Ji(i).pipe(Zg(e),Kg(e))}function dA(i,e){return Ji(i).pipe(Zg(e),Kg(e))}function pA(i,e){return new Gt(function(t){var n=0;return e.schedule(function(){n===i.length?t.complete():(t.next(i[n++]),t.closed||this.schedule())})})}function mA(i,e){return new Gt(function(t){var n;return ws(t,e,function(){n=i[Xg](),ws(t,e,function(){var r,s,a;try{r=n.next(),s=r.value,a=r.done}catch(o){t.error(o);return}a?t.complete():t.next(s)},0,!0)}),function(){return Ut(n?.return)&&n.return()}})}function Jg(i,e){if(!i)throw new Error("Iterable cannot be null");return new Gt(function(t){ws(t,e,function(){var n=i[Symbol.asyncIterator]();ws(t,e,function(){n.next().then(function(r){r.done?t.complete():t.next(r.value)})},0,!0)})})}function _A(i,e){return Jg($g(i),e)}function gA(i,e){if(i!=null){if(Hg(i))return fA(i,e);if(zg(i))return pA(i,e);if(Vg(i))return dA(i,e);if(Gg(i))return Jg(i,e);if(qg(i))return mA(i,e);if(jg(i))return _A(i,e)}throw Wg(i)}function qo(i,e){return e?gA(i,e):Ji(i)}function ba(){for(var i=[],e=0;e<arguments.length;e++)i[e]=arguments[e];var t=Yf(i);return qo(i,t)}function Qg(i,e){var t=Ut(i)?i:function(){return i},n=function(r){return r.error(t())};return new Gt(n)}function vA(i){return!!i&&(i instanceof Gt||Ut(i.lift)&&Ut(i.subscribe))}var e0=Gf(function(i){return function(){i(this),this.name="EmptyError",this.message="no elements in sequence"}});function tt(i,e){return new Promise(function(t,n){var r=!1,s;i.subscribe({next:function(a){s=a,r=!0},error:n,complete:function(){r?t(s):n(new e0)}})})}function Iu(i,e){return new Promise(function(t,n){var r=new Oa({next:function(s){t(s),r.unsubscribe()},error:n,complete:function(){n(new e0)}});i.subscribe(r)})}function xA(i){return i instanceof Date&&!isNaN(i)}function Dn(i,e){return Zi(function(t,n){var r=0;t.subscribe(Qr(n,function(s){n.next(i.call(e,s,r++))}))})}var yA=Array.isArray;function SA(i,e){return yA(e)?i.apply(void 0,Sr([],yr(e))):i(e)}function bA(i){return Dn(function(e){return SA(i,e)})}function MA(i,e,t){return t===void 0&&(t=Rc),function(n){am(e,function(){for(var r=i.length,s=new Array(r),a=r,o=r,l=function(u){am(e,function(){var d=qo(i[u],e),h=!1;d.subscribe(Qr(n,function(f){s[u]=f,h||(h=!0,o--),o||n.next(t(s.slice()))},function(){--a||n.complete()}))},n)},c=0;c<r;c++)l(c)})}}function am(i,e,t){e()}function EA(i,e,t,n,r,s,a,o){var l=[],c=0,u=0,d=!1,h=function(){d&&!l.length&&!c&&e.complete()},f=function(_){return c<n?m(_):l.push(_)},m=function(_){c++;var p=!1;Ji(t(_,u++)).subscribe(Qr(e,function(g){e.next(g)},function(){p=!0},void 0,function(){if(p)try{c--;for(var g=function(){var v=l.shift();a||m(v)};l.length&&c<n;)g();h()}catch(v){e.error(v)}}))};return i.subscribe(Qr(e,f,function(){d=!0,h()})),function(){}}function As(i,e,t){return t===void 0&&(t=1/0),Ut(e)?As(function(n,r){return Dn(function(s,a){return e(n,s,r,a)})(Ji(i(n,r)))},t):(typeof e=="number"&&(t=e),Zi(function(n,r){return EA(n,r,i,t)}))}function t0(i){return i===void 0&&(i=1/0),As(Rc,i)}function TA(){return t0(1)}function wA(){for(var i=[],e=0;e<arguments.length;e++)i[e]=arguments[e];return TA()(qo(i,Yf(i)))}function n0(i){return new Gt(function(e){Ji(i()).subscribe(e)})}function AA(i,e,t){return t===void 0&&(t=eA),new Gt(function(n){var r=xA(i)?+i-t.now():i;r<0&&(r=0);var s=0;return t.schedule(function(){n.closed||(n.next(s++),n.complete())},r)})}function CA(){for(var i=[],e=0;e<arguments.length;e++)i[e]=arguments[e];var t=Yf(i),n=rA(i,1/0),r=i;return r.length?r.length===1?Ji(r[0]):t0(n)(qo(r,t)):tA}var RA=Array.isArray;function PA(i){return i.length===1&&RA(i[0])?i[0]:i}function Ga(i,e){return Zi(function(t,n){var r=0;t.subscribe(Qr(n,function(s){return i.call(e,s,r++)&&n.next(s)}))})}function fc(i){return Zi(function(e,t){var n=null,r=!1,s;n=e.subscribe(Qr(t,void 0,void 0,function(a){s=Ji(i(a,fc(i)(e))),n?(n.unsubscribe(),n=null,s.subscribe(t)):r=!0})),r&&(n.unsubscribe(),n=null,s.subscribe(t))})}function i0(){for(var i=[],e=0;e<arguments.length;e++)i[e]=arguments[e];var t=iA(i);return t?Gw(i0.apply(void 0,Sr([],yr(i))),bA(t)):Zi(function(n,r){MA(Sr([n],yr(PA(i))))(r)})}function DA(){for(var i=[],e=0;e<arguments.length;e++)i[e]=arguments[e];return i0.apply(void 0,Sr([],yr(i)))}function r0(i){return Zi(function(e,t){try{e.subscribe(t)}finally{t.add(i)}})}function s0(i){i===void 0&&(i={});var e=i.connector,t=e===void 0?function(){return new qf}:e,n=i.resetOnError,r=n===void 0?!0:n,s=i.resetOnComplete,a=s===void 0?!0:s,o=i.resetOnRefCountZero,l=o===void 0?!0:o;return function(c){var u,d,h,f=0,m=!1,_=!1,p=function(){d?.unsubscribe(),d=void 0},g=function(){p(),u=h=void 0,m=_=!1},v=function(){var b=u;g(),b?.unsubscribe()};return Zi(function(b,S){f++,!_&&!m&&p();var A=h=h??t();S.add(function(){f--,f===0&&!_&&!m&&(d=Lu(v,l))}),A.subscribe(S),!u&&f>0&&(u=new Oa({next:function(E){return A.next(E)},error:function(E){_=!0,p(),d=Lu(g,r,E),A.error(E)},complete:function(){m=!0,p(),d=Lu(g,a),A.complete()}}),Ji(b).subscribe(u))})(c)}}function Lu(i,e){for(var t=[],n=2;n<arguments.length;n++)t[n-2]=arguments[n];if(e===!0){i();return}if(e!==!1){var r=new Oa({next:function(){r.unsubscribe(),i()}});return Ji(e.apply(void 0,Sr([],yr(t)))).subscribe(r)}}function IA(i,e,t){var n,r=!1;return n=i,s0({connector:function(){return new Yw(n,e,t)},resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:r})}function LA(i,e,t){var n=Ut(i)||e||t?{next:i,error:e,complete:t}:i;return n?Zi(function(r,s){var a;(a=n.subscribe)===null||a===void 0||a.call(n);var o=!0;r.subscribe(Qr(s,function(l){var c;(c=n.next)===null||c===void 0||c.call(n,l),s.next(l)},function(){var l;o=!1,(l=n.complete)===null||l===void 0||l.call(n),s.complete()},function(l){var c;o=!1,(c=n.error)===null||c===void 0||c.call(n,l),s.error(l)},function(){var l,c;o&&((l=n.unsubscribe)===null||l===void 0||l.call(n)),(c=n.finalize)===null||c===void 0||c.call(n)}))}):Rc}function a0(i){return typeof i=="object"&&i!==null&&!Array.isArray(i)}var o0={0:8203,1:8204,2:8205,3:8290,4:8291,5:8288,6:65279,7:8289,8:119155,9:119156,a:119157,b:119158,c:119159,d:119160,e:119161,f:119162},uo={0:8203,1:8204,2:8205,3:65279},ho={0:String.fromCodePoint(uo[0]),1:String.fromCodePoint(uo[1]),2:String.fromCodePoint(uo[2]),3:String.fromCodePoint(uo[3])},NA=new Array(4).fill(String.fromCodePoint(uo[0])).join("");function UA(i){let e=JSON.stringify(i),t=new TextEncoder().encode(e),n="";for(let r=0;r<t.length;r++){let s=t[r];n+=ho[s>>6&3]+ho[s>>4&3]+ho[s>>2&3]+ho[s&3]}return NA+n}function OA(i){return!Number.isNaN(Number(i))||/[a-z]/i.test(i)&&!/\d+(?:[-:\/]\d+){2}(?:T\d+(?:[-:\/]\d+){1,2}(\.\d+)?Z?)?/.test(i)?!1:!!Date.parse(i)}function FA(i){try{new URL(i,i.startsWith("/")?"https://acme.com":void 0)}catch{return!1}return!0}function XP(i,e,t="auto"){return t===!0||t==="auto"&&(OA(i)||FA(i))?i:`${i}${UA(e)}`}Object.fromEntries(Object.entries(ho).map(i=>[i[1],+i[0]]));Object.fromEntries(Object.entries(o0).map(i=>i.reverse()));var BA=`${Object.values(o0).map(i=>`\\u{${i.toString(16)}}`).join("")}`,om=new RegExp(`[${BA}]{4,}`,"gu");function kA(i){var e;return{cleaned:i.replace(om,""),encoded:((e=i.match(om))==null?void 0:e[0])||""}}function zA(i){return i&&JSON.parse(kA(JSON.stringify(i)).cleaned)}function VA(i){return zA(i)}const HA="drafts",GA="versions",Fa=".",dc=`${HA}${Fa}`,l0=`${GA}${Fa}`;function Pc(i){return i.startsWith(dc)}function Dc(i){return i.startsWith(l0)}function c0(i){if(Dc(i)){const e=Ic(i);return dc+e}return Pc(i)?i:dc+i}function $o(i,e){if(e==="drafts"||e==="published")throw new Error('Version can not be "published" or "drafts"');return`${l0}${e}${Fa}${Ic(i)}`}function u0(i){if(!Dc(i))return;const[e,t]=i.split(Fa);return t}function Ic(i){return Dc(i)?i.split(Fa).slice(2).join(Fa):Pc(i)?i.slice(dc.length):i}let WA=i=>crypto.getRandomValues(new Uint8Array(i)),XA=(i,e,t)=>{let n=(2<<Math.log(i.length-1)/Math.LN2)-1,r=-~(1.6*n*e/i.length);return(s=e)=>{let a="";for(;;){let o=t(r),l=r|0;for(;l--;)if(a+=i[o[l]&n]||"",a.length===s)return a}}},qA=(i,e=21)=>XA(i,e,WA);const lm=/\r\n|[\n\r\u2028\u2029]/;function $A(i,e,t){const n=i.split(lm),r={start:cm(e.start,n),end:e.end?cm(e.end,n):void 0},{start:s,end:a,markerLines:o}=jA(r,n),l=`${a}`.length;return i.split(lm,a).slice(s,a).map((c,u)=>{const d=s+1+u,h=` ${` ${d}`.slice(-l)} |`,f=o[d],m=!o[d+1];if(!f)return` ${h}${c.length>0?` ${c}`:""}`;let _="";if(Array.isArray(f)){const p=c.slice(0,Math.max(f[0]-1,0)).replace(/[^\t]/g," "),g=f[1]||1;_=[`
 `,h.replace(/\d/g," ")," ",p,"^".repeat(g)].join(""),m&&t&&(_+=" "+t)}return[">",h,c.length>0?` ${c}`:"",_].join("")}).join(`
`)}function jA(i,e){const t={...i.start},n={...t,...i.end},r=2,s=3,a=t.line??-1,o=t.column??0,l=n.line,c=n.column;let u=Math.max(a-(r+1),0),d=Math.min(e.length,l+s);a===-1&&(u=0),l===-1&&(d=e.length);const h=l-a,f={};if(h)for(let m=0;m<=h;m++){const _=m+a;if(!o)f[_]=!0;else if(m===0){const p=e[_-1].length;f[_]=[o,p-o+1]}else if(m===h)f[_]=[0,c];else{const p=e[_-m].length;f[_]=[0,p]}}else o===c?o?f[a]=[o,0]:f[a]=!0:f[a]=[o,c-o];return{start:u,end:d,markerLines:f}}function cm(i,e){let t=0;for(let n=0;n<e.length;n++){const r=e[n].length+1;if(t+r>i)return{line:n+1,column:i-t};t+=r}return{line:e.length,column:e[e.length-1]?.length??0}}const Nu=5;class YA extends Error{response;statusCode=400;responseBody;traceId;details;constructor(e,t){const n=h0(e,t);super(n.message),Object.assign(this,n)}}class KA extends Error{response;statusCode=500;responseBody;traceId;details;constructor(e){const t=h0(e);super(t.message),Object.assign(this,t)}}function h0(i,e){const t=i.body,n={response:i,statusCode:i.statusCode,responseBody:e1(t,i),traceId:QA(i),message:"",details:void 0};if(!a0(t))return n.message=`${Uu(i,t)}${Ur(n.traceId)}`,n;const r=t.error;if(typeof r=="string"&&typeof t.message=="string")return n.message=`${r} - ${t.message}${Ur(n.traceId)}`,n;if(typeof r!="object"||r===null)return typeof r=="string"?n.message=`${r}${Ur(n.traceId)}`:typeof t.message=="string"?n.message=`${t.message}${Ur(n.traceId)}`:n.message=`${Uu(i,t)}${Ur(n.traceId)}`,n;if(ZA(r)||JA(r)){const s=r.items||[],a=s.slice(0,Nu).map(l=>l.error?.description).filter(Boolean);let o=a.length?`:
- ${a.join(`
- `)}`:"";return s.length>Nu&&(o+=`
...and ${s.length-Nu} more`),n.message=`${r.description}${Ur(n.traceId)}${o}`,n.details=t.error,n}if(f0(r)){const s=e?.options?.query?.tag;return n.message=d0(r,s,n.traceId),n.details=t.error,n}return"description"in r&&typeof r.description=="string"?(n.message=`${r.description}${Ur(n.traceId)}`,n.details=r,n):(n.message=`${Uu(i,t)}${Ur(n.traceId)}`,n)}function ZA(i){return"type"in i&&i.type==="mutationError"&&"description"in i&&typeof i.description=="string"}function JA(i){return"type"in i&&i.type==="actionError"&&"description"in i&&typeof i.description=="string"}function f0(i){return a0(i)&&i.type==="queryParseError"&&typeof i.query=="string"&&typeof i.start=="number"&&typeof i.end=="number"}function d0(i,e,t){const{query:n,start:r,end:s,description:a}=i,o=t?`
(traceId: ${t})`:"";if(!n||typeof r>"u")return`GROQ query parse error: ${a}${o}`;const l=e?`

Tag: ${e}`:"";return`GROQ query parse error:
${$A(n,{start:r,end:s},a)}${l}${o}`}function Uu(i,e){const t=typeof e=="string"?` (${t1(e,100)})`:"",n=i.statusMessage?` ${i.statusMessage}`:"";return`${i.method}-request to ${i.url} resulted in HTTP ${i.statusCode}${n}${t}`}function QA(i){const e=i?.headers?.traceparent;if(e)return e.split("-")[1]}function e1(i,e){return(e.headers["content-type"]||"").toLowerCase().indexOf("application/json")!==-1?JSON.stringify(i,null,2):i}function Ur(i){return i?` (traceId: ${i})`:""}function t1(i,e){return i.length>e?`${i.slice(0,e)}…`:i}class n1 extends Error{projectId;addOriginUrl;constructor({projectId:e}){super("CorsOriginError"),this.name="CorsOriginError",this.projectId=e;const t=new URL(`https://sanity.io/manage/project/${e}/api`);if(typeof location<"u"){const{origin:n}=location;t.searchParams.set("cors","add"),t.searchParams.set("origin",n),this.addOriginUrl=t,this.message=`The current origin is not allowed to connect to the Live Content API. Add it here: ${t}`}else this.message=`The current origin is not allowed to connect to the Live Content API. Change your configuration here: ${t}`}}const i1={onResponse:(i,e)=>{if(i.statusCode>=500)throw new KA(i);if(i.statusCode>=400)throw new YA(i,e);return i}};function r1(i={}){const e={},t=n=>i.ignoreWarnings===void 0?!1:(Array.isArray(i.ignoreWarnings)?i.ignoreWarnings:[i.ignoreWarnings]).some(r=>typeof r=="string"?n.includes(r):r instanceof RegExp?r.test(n):!1);return{onResponse:n=>{const r=n.headers["x-sanity-warning"],s=Array.isArray(r)?r:[r];for(const a of s)!a||e[a]||t(a)||(e[a]=!0,console.warn(a));return n}}}function um(i,e={}){return Ew([Hf({shouldRetry:s1}),...i,r1(e),Rw(),Pw(),Lw(),i1,Iw({implementation:Gt})])}function s1(i,e,t){if(t.maxRetries===0)return!1;const n=t.method==="GET"||t.method==="HEAD",r=(t.uri||t.url).startsWith("/data/query"),s=i.response&&(i.response.statusCode===429||i.response.statusCode===502||i.response.statusCode===503);return(n||r)&&s?!0:Hf.shouldRetry(i,e,t)}const a1="https://www.sanity.io/help/";function Kf(i){return a1+i}const hm=["image","file"],fm=["before","after","replace"],Ba=i=>{if(!/^(~[a-z0-9]{1}[-\w]{0,63}|[a-z0-9]{1}[-\w]{0,63})$/.test(i))throw new Error("Datasets can only contain lowercase characters, numbers, underscores and dashes, and start with tilde, and be maximum 64 characters")},o1=i=>{if(!/^[-a-z0-9]+$/i.test(i))throw new Error("`projectId` can only contain only a-z, 0-9 and dashes")},l1=i=>{if(hm.indexOf(i)===-1)throw new Error(`Invalid asset type: ${i}. Must be one of ${hm.join(", ")}`)},To=(i,e)=>{if(e===null||typeof e!="object"||Array.isArray(e))throw new Error(`${i}() takes an object of properties`)},pc=(i,e)=>{if(typeof e!="string"||!/^[a-z0-9_][a-z0-9_.-]{0,127}$/i.test(e)||e.includes(".."))throw new Error(`${i}(): "${e}" is not a valid document ID`)},ka=(i,e)=>{if(!e._id)throw new Error(`${i}() requires that the document contains an ID ("_id" property)`);pc(i,e._id)},c1=(i,e)=>{if(typeof e!="string")throw new Error(`\`${i}()\`: \`${e}\` is not a valid document type`)},p0=(i,e)=>{if(!e._type)throw new Error(`\`${i}()\` requires that the document contains a type (\`_type\` property)`);c1(i,e._type)},u1=(i,e)=>{if(e._id&&e._id!==i)throw new Error(`The provided document ID (\`${e._id}\`) does not match the generated version ID (\`${i}\`)`)},h1=(i,e,t)=>{const n="insert(at, selector, items)";if(fm.indexOf(i)===-1){const r=fm.map(s=>`"${s}"`).join(", ");throw new Error(`${n} takes an "at"-argument which is one of: ${r}`)}if(typeof e!="string")throw new Error(`${n} takes a "selector"-argument which must be a string`);if(!Array.isArray(t))throw new Error(`${n} takes an "items"-argument which must be an array`)},Fs=i=>{if(i.dataset)return i.dataset;const e=i.resource;if(e&&e.type==="dataset"){const t=e.id.split(".");if(t.length!==2)throw new Error('Dataset resource ID must be in the format "project.dataset"');return t[1]}throw new Error("`dataset` must be provided to perform queries")},m0=i=>{if(typeof i!="string"||!/^[a-z0-9._-]{1,75}$/i.test(i))throw new Error("Tag can only contain alphanumeric characters, underscores, dashes and dots, and be between one and 75 characters long.");return i},_0=i=>{const e=i.resource;if(!e)throw new Error("`resource` must be provided to perform resource queries");const{type:t,id:n}=e;switch(t){case"dataset":{if(n.split(".").length!==2)throw new Error('Dataset resource ID must be in the format "project.dataset"');return}case"dashboard":case"media-library":case"canvas":return;default:throw new Error(`Unsupported resource type: ${t.toString()}`)}},Bi=(i,e)=>{if(e.resource)throw new Error(`\`${i}\` does not support resource-based operations`)};function f1(i){let e=!1,t;return(...n)=>(e||(t=i(...n),e=!0),t)}const Er=i=>f1((...e)=>console.warn(i.join(" "),...e)),d1=Er(["Because you set `withCredentials` to true, we will override your `useCdn`","setting to be false since (cookie-based) credentials are never set on the CDN"]),p1=Er(["Since you haven't set a value for `useCdn`, we will deliver content using our","global, edge-cached API-CDN. If you wish to have content delivered faster, set","`useCdn: false` to use the Live API. Note: You may incur higher costs using the live API."]),m1=Er(["The Sanity client is configured with the `perspective` set to `drafts` or `previewDrafts`, which doesn't support the API-CDN.","The Live API will be used instead. Set `useCdn: false` in your configuration to hide this warning."]),_1=Er(["The `previewDrafts` perspective has been renamed to  `drafts` and will be removed in a future API version"]),g1=Er(["You have configured Sanity client to use a token in the browser. This may cause unintentional security issues.",`See ${Kf("js-client-browser-token")} for more information and how to hide this warning.`]),v1=Er(["You have configured Sanity client to use a token, but also provided `withCredentials: true`.","This is no longer supported - only token will be used - remove `withCredentials: true`."]),x1=Er(["Using the Sanity client without specifying an API version is deprecated.",`See ${Kf("js-client-api-version")}`]),y1=Er(["You have called `createVersion()` with a defined `document`. The recommended approach is to provide a `baseId` and `releaseId` instead."]),S1=Er(["The `~experimental_resource` configuration property has been renamed to `resource`.","Please update your client configuration to use `resource` instead. Support for `~experimental_resource` will be removed in a future version."]),b1="apicdn.sanity.io",wo={apiHost:"https://api.sanity.io",apiVersion:"1",useProjectHostname:!0,stega:{enabled:!1}},M1=["localhost","127.0.0.1","0.0.0.0"],E1=i=>M1.indexOf(i)!==-1;function T1(i){if(i==="1"||i==="X")return;const e=new Date(i);if(!(/^\d{4}-\d{2}-\d{2}$/.test(i)&&e instanceof Date&&e.getTime()>0))throw new Error("Invalid API version string, expected `1` or date in format `YYYY-MM-DD`")}function g0(i){if(Array.isArray(i)&&i.length>1&&i.includes("raw"))throw new TypeError('Invalid API perspective value: "raw". The raw-perspective can not be combined with other perspectives')}const v0=(i,e)=>{const t={...e,...i,stega:{...typeof e.stega=="boolean"?{enabled:e.stega}:e.stega||wo.stega,...typeof i.stega=="boolean"?{enabled:i.stega}:i.stega||{}}};t.apiVersion||x1();const n={...wo,...t};n["~experimental_resource"]&&!n.resource&&(S1(),n.resource=n["~experimental_resource"]);const r=n.resource,s=n.useProjectHostname&&!r;if(typeof Promise>"u"){const f=Kf("js-client-promise-polyfill");throw new Error(`No native Promise-implementation found, polyfill needed - see ${f}`)}if(s&&!n.projectId)throw new Error("Configuration must contain `projectId`");if(r&&_0(n),typeof n.perspective<"u"&&g0(n.perspective),"encodeSourceMap"in n)throw new Error("It looks like you're using options meant for '@sanity/preview-kit/client'. 'encodeSourceMap' is not supported in '@sanity/client'. Did you mean 'stega.enabled'?");if("encodeSourceMapAtPath"in n)throw new Error("It looks like you're using options meant for '@sanity/preview-kit/client'. 'encodeSourceMapAtPath' is not supported in '@sanity/client'. Did you mean 'stega.filter'?");if(typeof n.stega.enabled!="boolean")throw new Error(`stega.enabled must be a boolean, received ${n.stega.enabled}`);if(n.stega.enabled&&n.stega.studioUrl===void 0)throw new Error("stega.studioUrl must be defined when stega.enabled is true");if(n.stega.enabled&&typeof n.stega.studioUrl!="string"&&typeof n.stega.studioUrl!="function")throw new Error(`stega.studioUrl must be a string or a function, received ${n.stega.studioUrl}`);const a=typeof window<"u"&&window.location&&window.location.hostname,o=a&&E1(window.location.hostname),l=!!n.token;n.withCredentials&&l&&(v1(),n.withCredentials=!1),a&&o&&l&&n.ignoreBrowserTokenWarning!==!0?g1():typeof n.useCdn>"u"&&p1(),s&&o1(n.projectId),n.dataset&&Ba(n.dataset),"requestTagPrefix"in n&&(n.requestTagPrefix=n.requestTagPrefix?m0(n.requestTagPrefix).replace(/\.+$/,""):void 0),n.apiVersion=`${n.apiVersion}`.replace(/^v/,""),n.isDefaultApi=n.apiHost===wo.apiHost,n.useCdn===!0&&n.withCredentials&&d1(),n.useCdn=n.useCdn!==!1&&!n.withCredentials,T1(n.apiVersion);const c=n.apiHost.split("://",2),u=c[0],d=c[1],h=n.isDefaultApi?b1:d;return s?(n.url=`${u}://${n.projectId}.${d}/v${n.apiVersion}`,n.cdnUrl=`${u}://${n.projectId}.${h}/v${n.apiVersion}`):(n.url=`${n.apiHost}/v${n.apiVersion}`,n.cdnUrl=n.url),n};class x0 extends Error{name="ConnectionFailedError"}class w1 extends Error{name="DisconnectError";reason;constructor(e,t,n={}){super(e,n),this.reason=t}}class A1 extends Error{name="ChannelError";data;constructor(e,t){super(e),this.data=t}}class C1 extends Error{name="MessageError";data;constructor(e,t,n={}){super(e,n),this.data=t}}class dm extends Error{name="MessageParseError"}const R1=["channelError","disconnect"];function y0(i,e){return n0(()=>{const t=i();return vA(t)?t:ba(t)}).pipe(As(t=>P1(t,e)))}function P1(i,e){return new Gt(t=>{const n=e.includes("open"),r=e.includes("reconnect");function s(c){if("data"in c){const[u,d]=pm(c);t.error(u?new dm("Unable to parse EventSource error message",{cause:d}):new C1((d?.data).message,d));return}i.readyState===i.CLOSED?t.error(new x0("EventSource connection failed")):r&&t.next({type:"reconnect"})}function a(){t.next({type:"open"})}function o(c){const[u,d]=pm(c);if(u){t.error(new dm("Unable to parse EventSource message",{cause:u}));return}if(c.type==="channelError"){const h=new URL(i.url).searchParams.get("tag");t.error(new A1(D1(d?.data,h),d.data));return}if(c.type==="disconnect"){t.error(new w1(`Server disconnected client: ${d.data?.reason||"unknown error"}`));return}t.next({type:c.type,id:c.lastEventId,...d.data?{data:d.data}:{}})}i.addEventListener("error",s),n&&i.addEventListener("open",a);const l=[...new Set([...R1,...e])].filter(c=>c!=="error"&&c!=="open"&&c!=="reconnect");return l.forEach(c=>i.addEventListener(c,o)),()=>{i.removeEventListener("error",s),n&&i.removeEventListener("open",a),l.forEach(c=>i.removeEventListener(c,o)),i.close()}})}function pm(i){try{const e=typeof i.data=="string"&&JSON.parse(i.data);return[null,{type:i.type,id:i.lastEventId,...I1(e)?{}:{data:e}}]}catch(e){return[e,null]}}function D1(i,e){const t=i.error;return t?f0(t)?d0(t,e):t.description?t.description:typeof t=="string"?t:JSON.stringify(t,null,2):i.message||"Unknown listener error"}function I1(i){for(const e in i)return!1;return!0}function S0(i){if(typeof i=="string")return{id:i};if(Array.isArray(i))return{query:"*[_id in $ids]",params:{ids:i}};if(typeof i=="object"&&i!==null&&"query"in i&&typeof i.query=="string")return"params"in i&&typeof i.params=="object"&&i.params!==null?{query:i.query,params:i.params}:{query:i.query};const e=["* Document ID (<docId>)","* Array of document IDs","* Object containing `query`"].join(`
`);throw new Error(`Unknown selection - must be one of:

${e}`)}class b0{selection;operations;constructor(e,t={}){this.selection=e,this.operations=t}set(e){return this._assign("set",e)}setIfMissing(e){return this._assign("setIfMissing",e)}diffMatchPatch(e){return To("diffMatchPatch",e),this._assign("diffMatchPatch",e)}unset(e){if(!Array.isArray(e))throw new Error("unset(attrs) takes an array of attributes to unset, non-array given");return this.operations=Object.assign({},this.operations,{unset:e}),this}inc(e){return this._assign("inc",e)}dec(e){return this._assign("dec",e)}insert(e,t,n){return h1(e,t,n),this._assign("insert",{[e]:t,items:n})}append(e,t){return this.insert("after",`${e}[-1]`,t)}prepend(e,t){return this.insert("before",`${e}[0]`,t)}splice(e,t,n,r){const s=typeof n>"u"||n===-1,a=t<0?t-1:t,o=s?-1:Math.max(0,t+n),l=a<0&&o>=0?"":o,c=`${e}[${a}:${l}]`;return this.insert("replace",c,r||[])}ifRevisionId(e){return this.operations.ifRevisionID=e,this}serialize(){return{...S0(this.selection),...this.operations}}toJSON(){return this.serialize()}reset(){return this.operations={},this}_assign(e,t,n=!0){return To(e,t),this.operations=Object.assign({},this.operations,{[e]:Object.assign({},n&&this.operations[e]||{},t)}),this}_set(e,t){return this._assign(e,t,!1)}}class Cs extends b0{#e;constructor(e,t,n){super(e,t),this.#e=n}clone(){return new Cs(this.selection,{...this.operations},this.#e)}commit(e){if(!this.#e)throw new Error("No `client` passed to patch, either provide one or pass the patch to a clients `mutate()` method");const t=typeof this.selection=="string",n=Object.assign({returnFirst:t,returnDocuments:!0},e);return this.#e.mutate({patch:this.serialize()},n)}}class Wr extends b0{#e;constructor(e,t,n){super(e,t),this.#e=n}clone(){return new Wr(this.selection,{...this.operations},this.#e)}commit(e){if(!this.#e)throw new Error("No `client` passed to patch, either provide one or pass the patch to a clients `mutate()` method");const t=typeof this.selection=="string",n=Object.assign({returnFirst:t,returnDocuments:!0},e);return this.#e.mutate({patch:this.serialize()},n)}}const M0={returnDocuments:!1};class E0{operations;trxId;constructor(e=[],t){this.operations=e,this.trxId=t}create(e){return To("create",e),this._add({create:e})}createIfNotExists(e){const t="createIfNotExists";return To(t,e),ka(t,e),this._add({[t]:e})}createOrReplace(e){const t="createOrReplace";return To(t,e),ka(t,e),this._add({[t]:e})}delete(e){return pc("delete",e),this._add({delete:{id:e}})}transactionId(e){return e?(this.trxId=e,this):this.trxId}serialize(){return[...this.operations]}toJSON(){return this.serialize()}reset(){return this.operations=[],this}_add(e){return this.operations.push(e),this}}class Lc extends E0{#e;constructor(e,t,n){super(e,n),this.#e=t}clone(){return new Lc([...this.operations],this.#e,this.trxId)}commit(e){if(!this.#e)throw new Error("No `client` passed to transaction, either provide one or pass the transaction to a clients `mutate()` method");return this.#e.mutate(this.serialize(),Object.assign({transactionId:this.trxId},M0,e||{}))}patch(e,t){const n=typeof t=="function",r=typeof e!="string"&&e instanceof Wr,s=typeof e=="object"&&("query"in e||"id"in e);if(r)return this._add({patch:e.serialize()});if(n){const a=t(new Wr(e,{},this.#e));if(!(a instanceof Wr))throw new Error("function passed to `patch()` must return the patch");return this._add({patch:a.serialize()})}if(s){const a=new Wr(e,t||{},this.#e);return this._add({patch:a.serialize()})}return this._add({patch:{id:e,...t}})}}class Nc extends E0{#e;constructor(e,t,n){super(e,n),this.#e=t}clone(){return new Nc([...this.operations],this.#e,this.trxId)}commit(e){if(!this.#e)throw new Error("No `client` passed to transaction, either provide one or pass the transaction to a clients `mutate()` method");return this.#e.mutate(this.serialize(),Object.assign({transactionId:this.trxId},M0,e||{}))}patch(e,t){const n=typeof t=="function";if(typeof e!="string"&&e instanceof Cs)return this._add({patch:e.serialize()});if(n){const r=t(new Cs(e,{},this.#e));if(!(r instanceof Cs))throw new Error("function passed to `patch()` must return the patch");return this._add({patch:r.serialize()})}return this._add({patch:{id:e,...t}})}}const L1="X-Sanity-Project-ID";function N1(i,e={}){const t={};i.headers&&Object.assign(t,i.headers);const n=e.token||i.token;n&&(t.Authorization=`Bearer ${n}`),!e.useGlobalApi&&!i.useProjectHostname&&i.projectId&&(t[L1]=i.projectId);const r=!!(typeof e.withCredentials>"u"?i.withCredentials:e.withCredentials),s=typeof e.timeout>"u"?i.timeout:e.timeout;return Object.assign({},e,{headers:Object.assign({},t,e.headers||{}),timeout:typeof s>"u"?300*1e3:s,proxy:e.proxy||i.proxy,json:!0,withCredentials:r,fetch:typeof e.fetch=="object"&&typeof i.fetch=="object"?{...i.fetch,...e.fetch}:e.fetch||i.fetch})}const T0=({query:i,params:e={},options:t={}})=>{const n=new URLSearchParams,{tag:r,includeMutations:s,returnQuery:a,...o}=t;r&&n.append("tag",r),n.append("query",i);for(const[l,c]of Object.entries(e))c!==void 0&&n.append(`$${l}`,JSON.stringify(c));for(const[l,c]of Object.entries(o))c&&n.append(l,`${c}`);return a===!1&&n.append("returnQuery","false"),s===!1&&n.append("includeMutations","false"),`?${n}`},U1=(i,e)=>i===!1?void 0:typeof i>"u"?e:i,O1=(i={})=>({dryRun:i.dryRun,returnIds:!0,returnDocuments:U1(i.returnDocuments,!0),visibility:i.visibility||"sync",autoGenerateArrayKeys:i.autoGenerateArrayKeys,skipCrossDatasetReferenceValidation:i.skipCrossDatasetReferenceValidation}),Zf=i=>i.type==="response",F1=i=>i.body,B1=(i,e)=>i.reduce((t,n)=>(t[e(n)]=n,t),Object.create(null)),k1=11264;function w0(i,e,t,n,r={},s={}){const a="stega"in s?{...t||{},...typeof s.stega=="boolean"?{enabled:s.stega}:s.stega||{}}:t,o=a.enabled?VA(r):r,l=s.filterResponse===!1?m=>m:m=>m.result,{cache:c,next:u,...d}={useAbortSignal:typeof s.signal<"u",resultSourceMap:a.enabled?"withKeyArraySelector":s.resultSourceMap,...s,returnQuery:s.filterResponse===!1&&s.returnQuery!==!1},h=typeof c<"u"||typeof u<"u"?{...d,fetch:{cache:c,next:u}}:d,f=Bs(i,e,"query",{query:n,params:o},h);return a.enabled?f.pipe(DA(qo(Sm(()=>import("./stegaEncodeSourceMap-Dlh8tYJz.js"),__vite__mapDeps([0,1])).then(function(m){return m.stegaEncodeSourceMap$1}).then(({stegaEncodeSourceMap:m})=>m))),Dn(([m,_])=>{const p=_(m.result,m.resultSourceMap,a);return l({...m,result:p})})):f.pipe(Dn(l))}function za(i,e,t,n={}){const r=(()=>{if(!n.releaseId)return t;const a=u0(t);if(!a){if(Pc(t))throw new Error(`The document ID (\`${t}\`) is a draft, but \`options.releaseId\` is set as \`${n.releaseId}\``);return $o(t,n.releaseId)}if(a!==n.releaseId)throw new Error(`The document ID (\`${t}\`) is already a version of \`${a}\` release, but this does not match the provided \`options.releaseId\` (\`${n.releaseId}\`)`);return t})(),s={uri:Si(i,"doc",r),json:!0,tag:n.tag,signal:n.signal,query:n.includeAllVersions!==void 0?{includeAllVersions:n.includeAllVersions}:void 0};return Yo(i,e,s).pipe(Ga(Zf),Dn(a=>{const o=a.body.documents;return o?n.includeAllVersions?o:o[0]:n.includeAllVersions?[]:void 0}))}function A0(i,e,t,n={}){const r={uri:Si(i,"doc",t.join(",")),json:!0,tag:n.tag,signal:n.signal};return Yo(i,e,r).pipe(Ga(Zf),Dn(s=>{const a=B1(s.body.documents||[],o=>o._id);return t.map(o=>a[o]||null)}))}function C0(i,e,t,n={}){return Bs(i,e,"query",{query:"*[sanity::partOfRelease($releaseId)]",params:{releaseId:t}},n)}function R0(i,e,t,n){return ka("createIfNotExists",t),Uc(i,e,t,"createIfNotExists",n)}function P0(i,e,t,n){return ka("createOrReplace",t),Uc(i,e,t,"createOrReplace",n)}function D0(i,e,t,n,r){return ka("createVersion",t),p0("createVersion",t),y1(),kt(i,e,{actionType:"sanity.action.document.version.create",publishedId:n,document:t},r)}function I0(i,e,t,n,r,s,a){if(!n)throw new Error("`createVersion()` requires `baseId` when no `document` is provided");if(!t)throw new Error("`createVersion()` requires `publishedId` when `baseId` is provided");pc("createVersion",n),pc("createVersion",t);const o={actionType:"sanity.action.document.version.create",publishedId:t,baseId:n,versionId:r?$o(t,r):c0(t),ifBaseRevisionId:s};return kt(i,e,o,a)}function L0(i,e,t,n){return Bs(i,e,"mutate",{mutations:[{delete:S0(t)}]},n)}function N0(i,e,t,n=!1,r){return kt(i,e,{actionType:"sanity.action.document.version.discard",versionId:t,purge:n},r)}function U0(i,e,t,n){return ka("replaceVersion",t),p0("replaceVersion",t),kt(i,e,{actionType:"sanity.action.document.version.replace",document:t},n)}function O0(i,e,t,n,r){return kt(i,e,{actionType:"sanity.action.document.version.unpublish",versionId:t,publishedId:n},r)}function F0(i,e,t,n){let r;t instanceof Wr||t instanceof Cs?r={patch:t.serialize()}:t instanceof Lc||t instanceof Nc?r=t.serialize():r=t;const s=Array.isArray(r)?r:[r],a=n&&n.transactionId||void 0;return Bs(i,e,"mutate",{mutations:s,transactionId:a},n)}function kt(i,e,t,n){const r=Array.isArray(t)?t:[t],s=n&&n.transactionId||void 0,a=n&&n.skipCrossDatasetReferenceValidation||void 0,o=n&&n.dryRun||void 0;return Bs(i,e,"actions",{actions:r,transactionId:s,skipCrossDatasetReferenceValidation:a,dryRun:o},n)}function Bs(i,e,t,n,r={}){const s=t==="mutate",a=t==="actions",o=t==="query",l=s||a?"":T0(n),c=!s&&!a&&l.length<k1,u=c?l:"",d=r.returnFirst,{timeout:h,token:f,tag:m,headers:_,returnQuery:p,lastLiveEventId:g,cacheMode:v}=r,b=Si(i,t,u),S={method:c?"GET":"POST",uri:b,json:!0,body:c?void 0:n,query:s&&O1(r),timeout:h,headers:_,token:f,tag:m,returnQuery:p,perspective:r.perspective,resultSourceMap:r.resultSourceMap,lastLiveEventId:Array.isArray(g)?g[0]:g,cacheMode:v,canUseCdn:o,signal:r.signal,fetch:r.fetch,useAbortSignal:r.useAbortSignal,useCdn:r.useCdn};return Yo(i,e,S).pipe(Ga(Zf),Dn(F1),Dn(A=>{if(!s)return A;const E=A.results||[];if(r.returnDocuments)return d?E[0]&&E[0].document:E.map(w=>w.document);const T=d?"documentId":"documentIds",x=d?E[0]&&E[0].id:E.map(w=>w.id);return{transactionId:A.transactionId,results:E,[T]:x}}))}function Uc(i,e,t,n,r={}){const s={[n]:t},a=Object.assign({returnFirst:!0,returnDocuments:!0},r);return Bs(i,e,"mutate",{mutations:[s]},a)}const jo=i=>{const e=i.config();return e.dataset!==void 0&&e.projectId!==void 0||e.resource!==void 0},B0=(i,e)=>jo(i)&&e.startsWith(Si(i,"query")),z1=(i,e)=>jo(i)&&e.startsWith(Si(i,"mutate")),V1=(i,e)=>jo(i)&&e.startsWith(Si(i,"doc","")),H1=(i,e)=>jo(i)&&e.startsWith(Si(i,"listen")),G1=(i,e)=>jo(i)&&e.startsWith(Si(i,"history","")),W1=(i,e)=>e.startsWith("/data/")||B0(i,e)||z1(i,e)||V1(i,e)||H1(i,e)||G1(i,e);function Yo(i,e,t){const n=t.url||t.uri,r=i.config(),s=typeof t.canUseCdn>"u"?["GET","HEAD"].indexOf(t.method||"GET")>=0&&W1(i,n):t.canUseCdn;let a=(t.useCdn??r.useCdn)&&s;const o=t.tag&&r.requestTagPrefix?[r.requestTagPrefix,t.tag].join("."):t.tag||r.requestTagPrefix;if(o&&t.tag!==null&&(t.query={tag:m0(o),...t.query}),["GET","HEAD","POST"].indexOf(t.method||"GET")>=0&&B0(i,n)){const u=t.resultSourceMap??r.resultSourceMap;u!==void 0&&u!==!1&&(t.query={resultSourceMap:u,...t.query});const d=t.perspective||r.perspective;typeof d<"u"&&(d==="previewDrafts"&&_1(),g0(d),t.query={perspective:Array.isArray(d)?d.join(","):d,...t.query},(Array.isArray(d)&&d.length>0||d==="previewDrafts"||d==="drafts")&&a&&(a=!1,m1())),t.lastLiveEventId&&(t.query={...t.query,lastLiveEventId:t.lastLiveEventId}),t.returnQuery===!1&&(t.query={returnQuery:"false",...t.query}),a&&t.cacheMode=="noStale"&&(t.query={cacheMode:"noStale",...t.query})}const l=N1(r,Object.assign({},t,{url:Jf(i,n,a)})),c=new Gt(u=>e(l,r.requester).subscribe(u));return t.signal?c.pipe(X1(t.signal)):c}function Kt(i,e,t){return Yo(i,e,t).pipe(Ga(n=>n.type==="response"),Dn(n=>n.body))}function Si(i,e,t){const n=i.config();if(n.resource){_0(n);const a=j1(n),o=t!==void 0?`${e}/${t}`:e;return`${a}/${o}`.replace(/\/($|\?)/,"$1")}const r=Fs(n),s=`/${e}/${r}`;return`/data${t!==void 0?`${s}/${t}`:s}`.replace(/\/($|\?)/,"$1")}function Jf(i,e,t=!1){const{url:n,cdnUrl:r}=i.config();return`${t?r:n}/${e.replace(/^\//,"")}`}function X1(i){return e=>new Gt(t=>{const n=()=>t.error($1(i));if(i&&i.aborted){n();return}const r=e.subscribe(t);return i.addEventListener("abort",n),()=>{i.removeEventListener("abort",n),r.unsubscribe()}})}const q1=!!globalThis.DOMException;function $1(i){if(q1)return new DOMException(i?.reason??"The operation was aborted.","AbortError");const e=new Error(i?.reason??"The operation was aborted.");return e.name="AbortError",e}const j1=i=>{const e=i.resource;if(!e)throw new Error("`resource` must be provided to perform resource queries");const{type:t,id:n}=e;switch(t){case"dataset":{const r=n.split(".");if(r.length!==2)throw new Error('Dataset ID must be in the format "project.dataset"');return`/projects/${r[0]}/datasets/${r[1]}`}case"canvas":return`/canvases/${n}`;case"media-library":return`/media-libraries/${n}`;case"dashboard":return`/dashboards/${n}`;default:throw new Error(`Unsupported resource type: ${t.toString()}`)}};function k0(i,e,t){const n=Fs(i.config());return Kt(i,e,{method:"POST",uri:`/agent/action/generate/${n}`,body:t})}function Y1(i,e,t){const n=Fs(i.config());return Kt(i,e,{method:"POST",uri:`/agent/action/patch/${n}`,body:t})}function K1(i,e,t){const n=Fs(i.config());return Kt(i,e,{method:"POST",uri:`/agent/action/prompt/${n}`,body:t})}function z0(i,e,t){const n=Fs(i.config());return Kt(i,e,{method:"POST",uri:`/agent/action/transform/${n}`,body:t})}function V0(i,e,t){const n=Fs(i.config());return Kt(i,e,{method:"POST",uri:`/agent/action/translate/${n}`,body:t})}class Z1{#e;#t;constructor(e,t){this.#e=e,this.#t=t}generate(e){return k0(this.#e,this.#t,e)}transform(e){return z0(this.#e,this.#t,e)}translate(e){return V0(this.#e,this.#t,e)}}class J1{#e;#t;constructor(e,t){this.#e=e,this.#t=t}generate(e){return tt(k0(this.#e,this.#t,e))}transform(e){return tt(z0(this.#e,this.#t,e))}translate(e){return tt(V0(this.#e,this.#t,e))}prompt(e){return tt(K1(this.#e,this.#t,e))}patch(e){return tt(Y1(this.#e,this.#t,e))}}class Q1{#e;#t;constructor(e,t){this.#e=e,this.#t=t}upload(e,t,n){return H0(this.#e,this.#t,e,t,n)}}class eC{#e;#t;constructor(e,t){this.#e=e,this.#t=t}upload(e,t,n){const r=H0(this.#e,this.#t,e,t,n);return tt(r.pipe(Ga(s=>s.type==="response"),Dn(s=>s.body.document)))}}function H0(i,e,t,n,r={}){l1(t);let s=r.extract||void 0;s&&!s.length&&(s=["none"]);const a=i.config(),o=nC(r,n),{tag:l,label:c,title:u,description:d,creditLine:h,filename:f,source:m}=o,_=a.resource?.type==="media-library",p=_?{title:u,filename:f}:{label:c,title:u,description:d,filename:f,meta:s,creditLine:h};return m&&!_&&(p.sourceId=m.id,p.sourceName=m.name,p.sourceUrl=m.url),Yo(i,e,{tag:l,method:"POST",timeout:o.timeout||0,uri:tC(a,t),headers:o.contentType?{"Content-Type":o.contentType}:{},query:p,body:n})}function tC(i,e){const t=e==="image"?"images":"files",n=i.resource;if(n){const{type:s,id:a}=n;switch(s){case"dataset":throw new Error("Assets are not supported for dataset resources, yet. Configure the client with `{projectId: <projectId>, dataset: <datasetId>}` instead.");case"canvas":return`/canvases/${a}/assets/${t}`;case"media-library":return`/media-libraries/${a}/upload`;case"dashboard":return`/dashboards/${a}/assets/${t}`;default:throw new Error(`Unsupported resource type: ${s.toString()}`)}}const r=Fs(i);return`assets/${t}/${r}`}function nC(i,e){return typeof File>"u"||!(e instanceof File)?i:Object.assign({filename:i.preserveFilename===!1?void 0:e.name,contentType:e.type},i)}var iC=(i,e)=>Object.keys(e).concat(Object.keys(i)).reduce((t,n)=>(t[n]=typeof i[n]>"u"?e[n]:i[n],t),{});const rC=(i,e)=>e.reduce((t,n)=>(typeof i[n]>"u"||(t[n]=i[n]),t),{}),G0=n0(()=>Sm(()=>import("./browser-DtluMbhg.js").then(i=>i.b),__vite__mapDeps([2,1]))).pipe(Dn(({default:i})=>i),IA(1));function W0(){return function(i){return i.pipe(fc((e,t)=>e instanceof x0?wA(ba({type:"reconnect"}),AA(1e3).pipe(As(()=>t))):Qg(()=>e)))}}const sC=14800,aC=["includePreviousRevision","includeResult","includeMutations","includeAllVersions","visibility","effectFormat","enableResume","tag"],oC={includeResult:!0};function X0(i,e,t={}){const{url:n,token:r,withCredentials:s,requestTagPrefix:a,headers:o}=this.config(),l=t.tag&&a?[a,t.tag].join("."):t.tag,c={...iC(t,oC),tag:l},u=rC(c,aC),d=T0({query:i,params:e,options:{tag:l,...u}}),h=`${n}${Si(this,"listen",d)}`;if(h.length>sC)return Qg(()=>new Error("Query too large for listener"));const f=c.events?c.events:["mutation"],m={};return s&&(m.withCredentials=!0),(r||o)&&(m.headers={},r&&(m.headers.Authorization=`Bearer ${r}`),o&&Object.assign(m.headers,o)),y0(()=>(typeof EventSource>"u"||m.headers?G0:ba(EventSource)).pipe(Dn(_=>new _(h,m))),f).pipe(W0(),Ga(_=>f.includes(_.type)),Dn(_=>({type:_.type,..."data"in _?_.data:{}})))}function lC(i,e){return cC(typeof i=="function"?{predicate:i,...e}:i)}function cC(i){return e=>{let t,n=!1;const{predicate:r,...s}=i,a=e.pipe(LA(l=>{i.predicate(l)&&(n=!0,t=l)}),r0(()=>{n=!1,t=void 0}),s0(s)),o=new Gt(l=>{n&&l.next(t),l.complete()});return CA(a,o)}}const mm="2021-03-25";class q0{#e;constructor(e){this.#e=e}events({includeDrafts:e=!1,tag:t,waitFor:n}={}){const{projectId:r,apiVersion:s,token:a,withCredentials:o,requestTagPrefix:l,headers:c}=this.#e.config(),u=s.replace(/^v/,"");if(u!=="X"&&u<mm)throw new Error(`The live events API requires API version ${mm} or later. The current API version is ${u}. Please update your API version to use this feature.`);if(e&&!a&&!o)throw new Error("The live events API requires a token or withCredentials when 'includeDrafts: true'. Please update your client configuration. The token should have the lowest possible access role.");const d=Si(this.#e,"live/events"),h=new URL(this.#e.getUrl(d,!1)),f=t&&l?[l,t].join("."):t;f&&h.searchParams.set("tag",f),e&&h.searchParams.set("includeDrafts","true"),n&&h.searchParams.set("waitFor",n);const m={};e&&o&&(m.withCredentials=!0),(e&&a||c)&&(m.headers={},e&&a&&(m.headers.Authorization=`Bearer ${a}`),c&&Object.assign(m.headers,c));const _=`${h.href}::${JSON.stringify(m)}`,p=Ou.get(_);if(p)return p;const g=y0(()=>(typeof EventSource>"u"||m.headers?G0:ba(EventSource)).pipe(Dn(S=>new S(h.href,m))),["message","restart","welcome","reconnect","goaway"]),v=uC(h,{method:"OPTIONS",mode:"cors",credentials:m.withCredentials?"include":"omit",headers:m.headers}).pipe(fc(()=>{throw new n1({projectId:r})})),b=g.pipe(W0(),As(S=>S.type==="reconnect"?v.pipe(As(()=>ba(S))):ba(S)),fc(S=>v.pipe(As(()=>{throw S}))),Dn(S=>{if(S.type==="message"){const{data:A,...E}=S;return{...E,tags:A.tags}}return S})).pipe(r0(()=>Ou.delete(_)),lC({predicate:S=>S.type==="welcome"}));return Ou.set(_,b),b}}function uC(i,e){return new Gt(t=>{const n=new AbortController,r=n.signal;return fetch(i,{...e,signal:n.signal}).then(s=>{t.next(s),t.complete()},s=>{r.aborted||t.error(s)}),()=>n.abort()})}const Ou=new Map;class hC{#e;#t;constructor(e,t){this.#e=e,this.#t=t}create(e,t){return Ma(this.#e,this.#t,"PUT",e,t)}edit(e,t){return Ma(this.#e,this.#t,"PATCH",e,t)}delete(e){return Ma(this.#e,this.#t,"DELETE",e)}list(){Bi("dataset",this.#e.config());const e=this.#e.config(),t=e.projectId;let n="/datasets";return e.useProjectHostname===!1&&(n=`/projects/${t}/datasets`),Kt(this.#e,this.#t,{uri:n,tag:null})}getEmbeddingsSettings(e){return Bi("dataset",this.#e.config()),Ba(e),Kt(this.#e,this.#t,{uri:mc(this.#e,e),tag:null})}editEmbeddingsSettings(e,t){return Bi("dataset",this.#e.config()),Ba(e),Kt(this.#e,this.#t,{method:"PUT",uri:mc(this.#e,e),body:t,tag:null})}}class fC{#e;#t;constructor(e,t){this.#e=e,this.#t=t}create(e,t){return Bi("dataset",this.#e.config()),tt(Ma(this.#e,this.#t,"PUT",e,t))}edit(e,t){return Bi("dataset",this.#e.config()),tt(Ma(this.#e,this.#t,"PATCH",e,t))}delete(e){return Bi("dataset",this.#e.config()),tt(Ma(this.#e,this.#t,"DELETE",e))}list(){Bi("dataset",this.#e.config());const e=this.#e.config(),t=e.projectId;let n="/datasets";return e.useProjectHostname===!1&&(n=`/projects/${t}/datasets`),tt(Kt(this.#e,this.#t,{uri:n,tag:null}))}getEmbeddingsSettings(e){return Bi("dataset",this.#e.config()),Ba(e),tt(Kt(this.#e,this.#t,{uri:mc(this.#e,e),tag:null}))}editEmbeddingsSettings(e,t){return Bi("dataset",this.#e.config()),Ba(e),tt(Kt(this.#e,this.#t,{method:"PUT",uri:mc(this.#e,e),body:t,tag:null}))}}function mc(i,e){const t=i.config();return t.useProjectHostname===!1?`/projects/${t.projectId}/datasets/${e}/settings/embeddings`:`/datasets/${e}/settings/embeddings`}function Ma(i,e,t,n,r){return Bi("dataset",i.config()),Ba(n),Kt(i,e,{method:t,uri:`/datasets/${n}`,body:r,tag:null})}class $0{#e;#t;constructor(e,t){this.#e=e,this.#t=t}getPlaybackInfo(e,t={}){const n=this.#e.config(),r=(n.resource||n["~experimental_resource"])?.id,{instanceId:s,libraryId:a}=_C(e),o=a||r;if(!o)throw new Error("Could not determine Media Library ID - you need to provide a valid Media Library ID in the client config or a Media Library GDR");const l=gC(s,o),c=vC(t);return Kt(this.#e,this.#t,{method:"GET",uri:l,query:c})}}class dC{#e;#t;constructor(e,t){this.#e=e,this.#t=t}getPlaybackInfo(e,t={}){return tt(new $0(this.#e.observable,this.#t).getPlaybackInfo(e,t))}}const pC=/^media-library:(ml[^:]+):([^:]+)$/;function mC(i){return typeof i=="object"&&"_ref"in i}function _C(i){const e=mC(i)?i._ref:i,t=pC.exec(e);if(t){const[,n,r]=t;return{libraryId:n,instanceId:r}}if(typeof i=="string"&&i.startsWith("video-"))return{instanceId:i};throw new Error(`Invalid video asset instance identifier "${e}": must be a valid video instance id or a Global Dataset Reference (GDR) to the video asset in the Media Library`)}function gC(i,e){return`/media-libraries/${e}/video/${i}/playback-info`}function vC(i){const e={};if(i.transformations){const{thumbnail:t,animated:n,storyboard:r}=i.transformations;t&&(t.width&&(e.thumbnailWidth=t.width),t.height&&(e.thumbnailHeight=t.height),t.time!==void 0&&(e.thumbnailTime=t.time),t.fit&&(e.thumbnailFit=t.fit),t.format&&(e.thumbnailFormat=t.format)),n&&(n.width&&(e.animatedWidth=n.width),n.height&&(e.animatedHeight=n.height),n.start!==void 0&&(e.animatedStart=n.start),n.end!==void 0&&(e.animatedEnd=n.end),n.fps&&(e.animatedFps=n.fps),n.format&&(e.animatedFormat=n.format)),r&&r.format&&(e.storyboardFormat=r.format)}return i.expiration&&(e.expiration=i.expiration),e}class xC{#e;#t;constructor(e,t){this.#e=e,this.#t=t}list(e){const t={},n="/projects";return e?.includeMembers===!1&&(t.includeMembers="false"),e?.includeFeatures===!1&&(t.includeFeatures="false"),e?.organizationId&&(t.organizationId=e.organizationId),e?.onlyExplicitMembership&&(t.onlyExplicitMembership="true"),Kt(this.#e,this.#t,{uri:n,query:t})}getById(e){return Kt(this.#e,this.#t,{uri:`/projects/${e}`})}}class yC{#e;#t;constructor(e,t){this.#e=e,this.#t=t}list(e){const t={},n="/projects";return e?.includeMembers===!1&&(t.includeMembers="false"),e?.includeFeatures===!1&&(t.includeFeatures="false"),e?.organizationId&&(t.organizationId=e.organizationId),e?.onlyExplicitMembership&&(t.onlyExplicitMembership="true"),tt(Kt(this.#e,this.#t,{uri:n,query:t}))}getById(e){return tt(Kt(this.#e,this.#t,{uri:`/projects/${e}`}))}}const _m=qA("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",8),_c=(i,e)=>e?$o(i,e):c0(i);function gc(i,{releaseId:e,publishedId:t,document:n}){if(t&&n._id){const r=_c(t,e);return u1(r,n),r}if(n._id){const r=Pc(n._id),s=Dc(n._id);if(!r&&!s)throw new Error(`\`${i}()\` requires a document with an \`_id\` that is a version or draft ID`);if(e){if(r)throw new Error(`\`${i}()\` was called with a document ID (\`${n._id}\`) that is a draft ID, but a release ID (\`${e}\`) was also provided.`);const a=u0(n._id);if(a!==e)throw new Error(`\`${i}()\` was called with a document ID (\`${n._id}\`) that is a version ID, but the release ID (\`${e}\`) does not match the document's version ID (\`${a}\`).`)}return n._id}if(t)return _c(t,e);throw new Error(`\`${i}()\` requires either a publishedId or a document with an \`_id\``)}const SC=(i,e)=>{if(typeof i=="object"&&i!==null&&("releaseId"in i||"metadata"in i)){const{releaseId:t=_m(),metadata:n={}}=i;return[t,n,e]}return[_m(),{},i]},j0=(i,e)=>{const[t,n,r]=SC(i,e),s={...n,releaseType:n.releaseType||"undecided"};return{action:{actionType:"sanity.action.release.create",releaseId:t,metadata:s},options:r}};class bC{#e;#t;constructor(e,t){this.#e=e,this.#t=t}get({releaseId:e},t){return za(this.#e,this.#t,`_.releases.${e}`,t)}create(e,t){const{action:n,options:r}=j0(e,t),{releaseId:s,metadata:a}=n;return kt(this.#e,this.#t,n,r).pipe(Dn(o=>({...o,releaseId:s,metadata:a})))}edit({releaseId:e,patch:t},n){const r={actionType:"sanity.action.release.edit",releaseId:e,patch:t};return kt(this.#e,this.#t,r,n)}publish({releaseId:e},t){const n={actionType:"sanity.action.release.publish",releaseId:e};return kt(this.#e,this.#t,n,t)}archive({releaseId:e},t){const n={actionType:"sanity.action.release.archive",releaseId:e};return kt(this.#e,this.#t,n,t)}unarchive({releaseId:e},t){const n={actionType:"sanity.action.release.unarchive",releaseId:e};return kt(this.#e,this.#t,n,t)}schedule({releaseId:e,publishAt:t},n){const r={actionType:"sanity.action.release.schedule",releaseId:e,publishAt:t};return kt(this.#e,this.#t,r,n)}unschedule({releaseId:e},t){const n={actionType:"sanity.action.release.unschedule",releaseId:e};return kt(this.#e,this.#t,n,t)}delete({releaseId:e},t){const n={actionType:"sanity.action.release.delete",releaseId:e};return kt(this.#e,this.#t,n,t)}fetchDocuments({releaseId:e},t){return C0(this.#e,this.#t,e,t)}}class MC{#e;#t;constructor(e,t){this.#e=e,this.#t=t}get({releaseId:e},t){return tt(za(this.#e,this.#t,`_.releases.${e}`,t))}async create(e,t){const{action:n,options:r}=j0(e,t),{releaseId:s,metadata:a}=n;return{...await tt(kt(this.#e,this.#t,n,r)),releaseId:s,metadata:a}}edit({releaseId:e,patch:t},n){const r={actionType:"sanity.action.release.edit",releaseId:e,patch:t};return tt(kt(this.#e,this.#t,r,n))}publish({releaseId:e},t){const n={actionType:"sanity.action.release.publish",releaseId:e};return tt(kt(this.#e,this.#t,n,t))}archive({releaseId:e},t){const n={actionType:"sanity.action.release.archive",releaseId:e};return tt(kt(this.#e,this.#t,n,t))}unarchive({releaseId:e},t){const n={actionType:"sanity.action.release.unarchive",releaseId:e};return tt(kt(this.#e,this.#t,n,t))}schedule({releaseId:e,publishAt:t},n){const r={actionType:"sanity.action.release.schedule",releaseId:e,publishAt:t};return tt(kt(this.#e,this.#t,r,n))}unschedule({releaseId:e},t){const n={actionType:"sanity.action.release.unschedule",releaseId:e};return tt(kt(this.#e,this.#t,n,t))}delete({releaseId:e},t){const n={actionType:"sanity.action.release.delete",releaseId:e};return tt(kt(this.#e,this.#t,n,t))}fetchDocuments({releaseId:e},t){return tt(C0(this.#e,this.#t,e,t))}}class EC{#e;#t;constructor(e,t){this.#e=e,this.#t=t}getById(e){return Kt(this.#e,this.#t,{uri:`/users/${e}`})}}class TC{#e;#t;constructor(e,t){this.#e=e,this.#t=t}getById(e){return tt(Kt(this.#e,this.#t,{uri:`/users/${e}`}))}}class vc{assets;datasets;live;mediaLibrary;projects;users;agent;releases;#e;#t;#n;listen=X0;constructor(e,t=wo){this.config(t),this.#t=e;const n=t._requestHandler;this.#n=n?(()=>{let r;return(s,a)=>{const o=s;return r||(r=new Ea(e,{...t,_requestHandler:void 0})),n(o,l=>e(l,a),r)}})():e,this.assets=new Q1(this,this.#n),this.datasets=new hC(this,this.#n),this.live=new q0(this),this.mediaLibrary={video:new $0(this,this.#n)},this.projects=new xC(this,this.#n),this.users=new EC(this,this.#n),this.agent={action:new Z1(this,this.#n)},this.releases=new bC(this,this.#n)}clone(){return new vc(this.#t,this.config())}config(e){if(e===void 0)return{...this.#e};if(this.#e&&this.#e.allowReconfigure===!1)throw new Error("Existing client instance cannot be reconfigured - use `withConfig(newConfig)` to return a new client");return this.#e=v0(e,this.#e||{}),this}withConfig(e){const t=this.config();return new vc(this.#t,{...t,...e,stega:{...t.stega||{},...typeof e?.stega=="boolean"?{enabled:e.stega}:e?.stega||{}}})}fetch(e,t,n){return w0(this,this.#n,this.#e.stega,e,t,n)}getDocument(e,t){if(t?.includeAllVersions===!0)return za(this,this.#n,e,{...t,includeAllVersions:!0});const n={signal:t?.signal,tag:t?.tag,releaseId:t?.releaseId,...t&&"includeAllVersions"in t?{includeAllVersions:!1}:{}};return za(this,this.#n,e,n)}getDocuments(e,t){return A0(this,this.#n,e,t)}create(e,t){return Uc(this,this.#n,e,"create",t)}createIfNotExists(e,t){return R0(this,this.#n,e,t)}createOrReplace(e,t){return P0(this,this.#n,e,t)}createVersion({document:e,publishedId:t,releaseId:n,baseId:r,ifBaseRevisionId:s},a){if(!e)return I0(this,this.#n,t,r,n,s,a);const o=gc("createVersion",{document:e,publishedId:t,releaseId:n}),l={...e,_id:o},c=t||Ic(e._id);return D0(this,this.#n,l,c,a)}delete(e,t){return L0(this,this.#n,e,t)}discardVersion({releaseId:e,publishedId:t},n,r){const s=_c(t,e);return N0(this,this.#n,s,n,r)}replaceVersion({document:e,publishedId:t,releaseId:n},r){const s=gc("replaceVersion",{document:e,publishedId:t,releaseId:n}),a={...e,_id:s};return U0(this,this.#n,a,r)}unpublishVersion({releaseId:e,publishedId:t},n){const r=$o(t,e);return O0(this,this.#n,r,t,n)}mutate(e,t){return F0(this,this.#n,e,t)}patch(e,t){return new Cs(e,t,this)}transaction(e){return new Nc(e,this)}action(e,t){return kt(this,this.#n,e,t)}request(e){return Kt(this,this.#n,e)}getUrl(e,t){return Jf(this,e,t)}getDataUrl(e,t){return Si(this,e,t)}}class Ea{assets;datasets;live;mediaLibrary;projects;users;agent;releases;observable;#e;#t;#n;listen=X0;constructor(e,t=wo){this.config(t),this.#t=e;const n=t._requestHandler;this.#n=n?(()=>{let r;return(s,a)=>{const o=s;return r||(r=new Ea(e,{...t,_requestHandler:void 0})),n(o,l=>e(l,a),r)}})():e,this.assets=new eC(this,this.#n),this.datasets=new fC(this,this.#n),this.live=new q0(this),this.mediaLibrary={video:new dC(this,this.#n)},this.projects=new yC(this,this.#n),this.users=new TC(this,this.#n),this.agent={action:new J1(this,this.#n)},this.releases=new MC(this,this.#n),this.observable=new vc(e,t)}clone(){return new Ea(this.#t,this.config())}config(e){if(e===void 0)return{...this.#e};if(this.#e&&this.#e.allowReconfigure===!1)throw new Error("Existing client instance cannot be reconfigured - use `withConfig(newConfig)` to return a new client");return this.observable&&this.observable.config(e),this.#e=v0(e,this.#e||{}),this}withConfig(e){const t=this.config();return new Ea(this.#t,{...t,...e,stega:{...t.stega||{},...typeof e?.stega=="boolean"?{enabled:e.stega}:e?.stega||{}}})}fetch(e,t,n){return tt(w0(this,this.#n,this.#e.stega,e,t,n))}getDocument(e,t){if(t?.includeAllVersions===!0)return tt(za(this,this.#n,e,{...t,includeAllVersions:!0}));const n={signal:t?.signal,tag:t?.tag,releaseId:t?.releaseId,...t&&"includeAllVersions"in t?{includeAllVersions:!1}:{}};return tt(za(this,this.#n,e,n))}getDocuments(e,t){return tt(A0(this,this.#n,e,t))}create(e,t){return tt(Uc(this,this.#n,e,"create",t))}createIfNotExists(e,t){return tt(R0(this,this.#n,e,t))}createOrReplace(e,t){return tt(P0(this,this.#n,e,t))}createVersion({document:e,publishedId:t,releaseId:n,baseId:r,ifBaseRevisionId:s},a){if(!e)return Iu(I0(this,this.#n,t,r,n,s,a));const o=gc("createVersion",{document:e,publishedId:t,releaseId:n}),l={...e,_id:o},c=t||Ic(e._id);return Iu(D0(this,this.#n,l,c,a))}delete(e,t){return tt(L0(this,this.#n,e,t))}discardVersion({releaseId:e,publishedId:t},n,r){const s=_c(t,e);return tt(N0(this,this.#n,s,n,r))}replaceVersion({document:e,publishedId:t,releaseId:n},r){const s=gc("replaceVersion",{document:e,publishedId:t,releaseId:n}),a={...e,_id:s};return Iu(U0(this,this.#n,a,r))}unpublishVersion({releaseId:e,publishedId:t},n){const r=$o(t,e);return tt(O0(this,this.#n,r,t,n))}mutate(e,t){return tt(F0(this,this.#n,e,t))}patch(e,t){return new Wr(e,t,this)}transaction(e){return new Lc(e,this)}action(e,t){return tt(kt(this,this.#n,e,t))}request(e){return tt(Kt(this,this.#n,e))}dataRequest(e,t,n){return tt(Bs(this,this.#n,e,t,n))}getUrl(e,t){return Jf(this,e,t)}getDataUrl(e,t){return Si(this,e,t)}}function wC(i,e){return{requester:um(i),createClient:t=>{const n=um(i,{ignoreWarnings:t.ignoreWarnings});return new e((r,s)=>(s||n)({maxRedirects:0,maxRetries:t.maxRetries,retryDelay:t.retryDelay,lineage:t.lineage,...r}),t)}}}var AC=[];const CC=wC(AC,Ea),RC=CC.createClient,gm="image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg";function PC(i){const[,e,t,n]=i.split("-");if(!e||!t||!n)throw new Error(`Malformed asset _ref '${i}'. Expected an id like "${gm}".`);const[r,s]=t.split("x"),a=+r,o=+s;if(!(isFinite(a)&&isFinite(o)))throw new Error(`Malformed asset _ref '${i}'. Expected an id like "${gm}".`);return{id:e,width:a,height:o,format:n}}const DC=i=>{const e=i;return e?typeof e._ref=="string":!1},IC=i=>{const e=i;return e?typeof e._id=="string":!1},LC=i=>{const e=i;return e&&e.asset?typeof e.asset.url=="string":!1},NC=i=>{if(typeof i=="object"&&i!==null){const e=i;return e._upload&&(!e.asset||!e.asset._ref)}return!1};function UC(i){if(!i)return null;let e;if(typeof i=="string"&&OC(i))e={asset:{_ref:vm(i)}};else if(typeof i=="string")e={asset:{_ref:i}};else if(DC(i))e={asset:i};else if(IC(i))e={asset:{_ref:i._id||""}};else if(LC(i))e={asset:{_ref:vm(i.asset.url)}};else if(typeof i.asset=="object")e={...i};else return null;const t=i;return t.crop&&(e.crop=t.crop),t.hotspot&&(e.hotspot=t.hotspot),FC(e)}function OC(i){return/^https?:\/\//.test(`${i}`)}function vm(i){return`image-${i.split("/").slice(-1)[0]}`.replace(/\.([a-z]+)$/,"-$1")}function FC(i){if(i.crop&&i.hotspot)return i;const e={...i};return e.crop||(e.crop={left:0,top:0,bottom:0,right:0}),e.hotspot||(e.hotspot={x:.5,y:.5,height:1,width:1}),e}const Y0=[["width","w"],["height","h"],["format","fm"],["download","dl"],["blur","blur"],["sharpen","sharp"],["invert","invert"],["orientation","or"],["minHeight","min-h"],["maxHeight","max-h"],["minWidth","min-w"],["maxWidth","max-w"],["quality","q"],["fit","fit"],["crop","crop"],["saturation","sat"],["auto","auto"],["dpr","dpr"],["pad","pad"],["frame","frame"]];function BC(i){let e={...i||{}};const t=e.source;delete e.source;const n=UC(t);if(!n){if(t&&NC(t))return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8HwQACfsD/QNViZkAAAAASUVORK5CYII=";throw new Error(`Unable to resolve image URL from source (${JSON.stringify(t)})`)}const r=n.asset._ref||n.asset._id||"",s=PC(r),a=Math.round(n.crop.left*s.width),o=Math.round(n.crop.top*s.height),l={left:a,top:o,width:Math.round(s.width-n.crop.right*s.width-a),height:Math.round(s.height-n.crop.bottom*s.height-o)},c=n.hotspot.height*s.height/2,u=n.hotspot.width*s.width/2,d=n.hotspot.x*s.width,h=n.hotspot.y*s.height,f={left:d-u,top:h-c,right:d+u,bottom:h+c};return e.rect||e.focalPoint||e.ignoreImageParams||e.crop||(e={...e,...zC({crop:l,hotspot:f},e)}),kC({...e,asset:s})}function kC(i){const e=(i.baseUrl||"https://cdn.sanity.io").replace(/\/+$/,""),t=i.vanityName?`/${i.vanityName}`:"",n=`${i.asset.id}-${i.asset.width}x${i.asset.height}.${i.asset.format}${t}`;let r;i.mediaLibraryId?r=`${e}/media-libraries/${i.mediaLibraryId}/images/${n}`:i.canvasId?r=`${e}/images/canvases/${i.canvasId}/${n}`:r=`${e}/images/${i.projectId}/${i.dataset}/${n}`;const s=[];if(i.rect){const{left:o,top:l,width:c,height:u}=i.rect;(o!==0||l!==0||u!==i.asset.height||c!==i.asset.width)&&s.push(`rect=${o},${l},${c},${u}`)}i.bg&&s.push(`bg=${i.bg}`),i.focalPoint&&(s.push(`fp-x=${i.focalPoint.x}`),s.push(`fp-y=${i.focalPoint.y}`));const a=[i.flipHorizontal&&"h",i.flipVertical&&"v"].filter(Boolean).join("");return a&&s.push(`flip=${a}`),Y0.forEach(o=>{const[l,c]=o;typeof i[l]<"u"?s.push(`${c}=${encodeURIComponent(i[l])}`):typeof i[c]<"u"&&s.push(`${c}=${encodeURIComponent(i[c])}`)}),s.length===0?r:`${r}?${s.join("&")}`}function zC(i,e){let t;const n=e.width,r=e.height;if(!(n&&r))return{width:n,height:r,rect:i.crop};const s=i.crop,a=i.hotspot,o=n/r;if(s.width/s.height>o){const l=Math.round(s.height),c=Math.round(l*o),u=Math.max(0,Math.round(s.top)),d=Math.round((a.right-a.left)/2+a.left);let h=Math.max(0,Math.round(d-c/2));h<s.left?h=s.left:h+c>s.left+s.width&&(h=s.left+s.width-c),t={left:h,top:u,width:c,height:l}}else{const l=s.width,c=Math.round(l/o),u=Math.max(0,Math.round(s.left)),d=Math.round((a.bottom-a.top)/2+a.top);let h=Math.max(0,Math.round(d-c/2));h<s.top?h=s.top:h+c>s.top+s.height&&(h=s.top+s.height-c),t={left:u,top:h,width:l,height:c}}return{width:n,height:r,rect:t}}const VC=["clip","crop","fill","fillmax","max","scale","min"],HC=["top","bottom","left","right","center","focalpoint","entropy"],GC=["format"];function WC(i){return i&&"config"in i?typeof i.config=="function":!1}function XC(i){return i&&"clientConfig"in i?typeof i.clientConfig=="object":!1}function xm(i){const{apiHost:e,projectId:t,dataset:n}=i,r={baseUrl:(e||"https://api.sanity.io").replace(/^https:\/\/api\./,"https://cdn.")},s=i.resource??i["~experimental_resource"];if(s?.type==="media-library"){if(typeof s.id!="string"||s.id.length===0)throw new Error('Media library clients must include an id in "resource"');return{...r,mediaLibraryId:s.id}}if(s?.type==="canvas"){if(typeof s.id!="string"||s.id.length===0)throw new Error('Canvas clients must include an id in "resource"');return{...r,canvasId:s.id}}if(s?.type==="dataset"){if(typeof s.id!="string"||s.id.length===0)throw new Error('Dataset clients must include an id in "resource"');const[a,o]=s.id.split(".");if(!a||!o)throw new Error('Dataset resource id must be in the format "projectId.dataset", got: '+s.id);return{...r,projectId:a,dataset:o}}return{...r,projectId:t,dataset:n}}function qC(i){const e=Y0;for(const t of e){const[n,r]=t;if(i===n||i===r)return n}return i}function K0(i){let e={};return WC(i)?e=xm(i.config()):XC(i)?e=xm(i.clientConfig):e=i||{},e}function $C(i,e){const t=K0(e);return new i(null,t)}function jC(i){return $C(xc,i)}function YC(i,e){const t=e.baseUrl||i.baseUrl,n={baseUrl:t};for(const r in e)if(e.hasOwnProperty(r)){const s=qC(r);n[s]=e[r]}return{baseUrl:t,...n}}class xc{options;constructor(e,t){this.options=e?{...e.options||{},...t||{}}:{...t||{}}}withOptions(e){const t=YC(this.options,e);return new xc(this,t)}image(e){return this.withOptions({source:e})}dataset(e){return this.withOptions({dataset:e})}projectId(e){return this.withOptions({projectId:e})}withClient(e){const t=K0(e),n={...this.options};return delete n.baseUrl,delete n.projectId,delete n.dataset,delete n.mediaLibraryId,delete n.canvasId,new xc(null,{...t,...n})}bg(e){return this.withOptions({bg:e})}dpr(e){return this.withOptions(e&&e!==1?{dpr:e}:{})}width(e){return this.withOptions({width:e})}height(e){return this.withOptions({height:e})}focalPoint(e,t){return this.withOptions({focalPoint:{x:e,y:t}})}maxWidth(e){return this.withOptions({maxWidth:e})}minWidth(e){return this.withOptions({minWidth:e})}maxHeight(e){return this.withOptions({maxHeight:e})}minHeight(e){return this.withOptions({minHeight:e})}size(e,t){return this.withOptions({width:e,height:t})}blur(e){return this.withOptions({blur:e})}sharpen(e){return this.withOptions({sharpen:e})}rect(e,t,n,r){return this.withOptions({rect:{left:e,top:t,width:n,height:r}})}format(e){return this.withOptions({format:e})}invert(e){return this.withOptions({invert:e})}orientation(e){return this.withOptions({orientation:e})}quality(e){return this.withOptions({quality:e})}forceDownload(e){return this.withOptions({download:e})}flipHorizontal(){return this.withOptions({flipHorizontal:!0})}flipVertical(){return this.withOptions({flipVertical:!0})}ignoreImageParams(){return this.withOptions({ignoreImageParams:!0})}fit(e){if(VC.indexOf(e)===-1)throw new Error(`Invalid fit mode "${e}"`);return this.withOptions({fit:e})}crop(e){if(HC.indexOf(e)===-1)throw new Error(`Invalid crop mode "${e}"`);return this.withOptions({crop:e})}saturation(e){return this.withOptions({saturation:e})}auto(e){if(GC.indexOf(e)===-1)throw new Error(`Invalid auto mode "${e}"`);return this.withOptions({auto:e})}pad(e){return this.withOptions({pad:e})}vanityName(e){return this.withOptions({vanityName:e})}frame(e){if(e!==1)throw new Error(`Invalid frame value "${e}"`);return this.withOptions({frame:e})}url(){return BC(this.options)}toString(){return this.url()}}const KC="production",ZC="ceip4qtp",Z0=RC({projectId:ZC,dataset:KC,apiVersion:"2024-01-01",useCdn:!1}),JC=jC(Z0),QC=i=>JC.image(i);function J0(i){const[e,t]=At.useState(null),[n,r]=At.useState(!0),[s,a]=At.useState(null);return At.useEffect(()=>{Z0.fetch(i).then(t).catch(a).finally(()=>r(!1))},[i]),{data:e,loading:n,error:s}}const eR=`
  *[_type == "navigation"][0] {
    brandName,
    logo { asset->{ url } },
    copyright,
    navLinks[] { label, href, external },
    socialLinks[] { label, href },
    availabilityText,
    availabilitySub
  }
`,tR=`
  *[_type == "hero"][0] {
    name,
    roles,
    location,
    portrait,
    copyright
  }
`,os={brandName:"SEAUM SIDDIQUI",logo:null,copyright:"2026",navLinks:[{label:"ABOUT",href:"/#about",external:!1},{label:"WORK",href:"/#projects",external:!1},{label:"ARCHIVE",href:"/#archive-list",external:!1}],socialLinks:[{label:"LINKEDIN",href:"https://linkedin.com"},{label:"GITHUB",href:"https://github.com"},{label:"LEETCODE",href:"https://instagram.com"}],availabilityText:"Available for work",availabilitySub:"Open to full-time & freelance"};function Qf(){const{data:i,loading:e}=J0(eR),t=(i?.navLinks??os.navLinks).map(n=>n.href==="/archive"?{...n,href:"/#archive-list"}:n);return{loading:e,nav:{brandName:i?.brandName??os.brandName,logo:i?.logo??os.logo,copyright:i?.copyright??os.copyright,navLinks:t,socialLinks:i?.socialLinks??os.socialLinks,availabilityText:i?.availabilityText??os.availabilityText,availabilitySub:i?.availabilitySub??os.availabilitySub}}}const nR="_hero_bk9yr_5",iR="_hero__primaryRole_bk9yr_17",rR="_hero__body_bk9yr_42",sR="_hero__parentBox_bk9yr_56",aR="_hero__portrait_bk9yr_69",oR="_hero__roles_bk9yr_82",lR="_hero__role_bk9yr_82",cR="_hero__location_bk9yr_109",uR="_hero__locationLabel_bk9yr_121",Ni={hero:nR,hero__primaryRole:iR,hero__body:rR,hero__parentBox:sR,hero__portrait:aR,hero__roles:oR,hero__role:lR,hero__location:cR,hero__locationLabel:uR},hR="_navbar_ehsd8_1",fR="_navbar__logo_ehsd8_23",dR="_navbar__right_ehsd8_49",pR="_navbar__copyright_ehsd8_55",mR="_navbar__links_ehsd8_64",_R="_navbar__col_ehsd8_69",gR="_navbar__link_ehsd8_64",Ti={navbar:hR,navbar__logo:fR,navbar__right:dR,navbar__copyright:pR,navbar__links:mR,navbar__col:_R,navbar__link:gR};function ym({position:i="absolute"}){const{nav:e,loading:t}=Qf(),n=(r,s)=>{if(!s.startsWith("/#"))return;r.preventDefault();const a=s.replace("/#",""),o=document.querySelector(`[data-section="${a}"]`);if(!o)return;const l=q_();l?l.scrollTo(o,{offset:-150,duration:2}):o.scrollIntoView({behavior:"smooth"})};return t?W.jsx("header",{className:Ti.navbar,"data-position":i}):W.jsxs("header",{className:Ti.navbar,"data-position":i,children:[W.jsx("a",{href:"/",className:Ti.navbar__logo,children:W.jsx("span",{className:Ti.navbar__brand,children:e.brandName})}),W.jsxs("div",{className:Ti.navbar__right,children:[W.jsxs("span",{className:Ti.navbar__copyright,children:["© ",e.copyright]}),W.jsxs("nav",{className:Ti.navbar__links,"aria-label":"Primary",children:[W.jsx("div",{className:Ti.navbar__col,children:e.navLinks.map(r=>W.jsx("a",{className:Ti.navbar__link,href:r.href,onClick:s=>n(s,r.href),...r.external?{target:"_blank",rel:"noreferrer"}:{},children:r.label},r.label))}),W.jsx("div",{className:Ti.navbar__col,children:e.socialLinks.map(r=>W.jsx("a",{className:Ti.navbar__link,href:r.href,target:"_blank",rel:"noreferrer",children:r.label},r.label))})]})]})]})}const vR=["BACKEND ENGINEER","JAVA, SPRING BOOT","MICROSERVICES ARCHITECT"],xR="Dhaka, Bangladesh";function yR(i){const e=i.split(",").map(r=>r.trim()),t=e[0]??"",n=e[1]??"";return{line1:`Based in ${t},`,line2:n}}function SR(){Qf();const{data:i,loading:e}=J0(tR),t=At.useRef(null),n=i?.roles??vR,r=i?.location??xR,s=yR(r),a=n[0]??"",o=n.slice(1),l=i?.portrait?QC(i.portrait).width(840).url():Kx;return At.useEffect(()=>{const c=t.current;if(!c||!a)return;const u=()=>{const h=c.getBoundingClientRect().width;c.style.fontSize="100px",c.style.width="max-content";const f=c.getBoundingClientRect().width;c.style.width="",c.style.fontSize=`${h/f*100}px`,c.style.opacity="1"},d=requestAnimationFrame(u);return window.addEventListener("resize",u),document.fonts.ready.then(u),()=>{cancelAnimationFrame(d),window.removeEventListener("resize",u)}},[a]),e?W.jsx("section",{className:Ni.hero,"data-section":"hero",children:W.jsx(ym,{position:"absolute"})}):W.jsxs("section",{className:Ni.hero,"data-section":"hero",children:[W.jsx(ym,{position:"absolute"}),W.jsx("div",{ref:t,className:Ni.hero__primaryRole,children:a}),W.jsx("div",{className:Ni.hero__location,children:W.jsxs("span",{className:Ni.hero__locationLabel,children:[W.jsx("span",{children:s.line1}),W.jsx("span",{children:s.line2})]})}),W.jsx("div",{className:Ni.hero__body,children:W.jsxs("div",{className:Ni.hero__parentBox,children:[W.jsx("div",{className:Ni.hero__roles,children:o.map(c=>W.jsxs("span",{className:Ni.hero__role,children:["./ ",c]},c))}),W.jsx("div",{className:Ni.hero__portrait,children:W.jsx(_w,{src:l})})]})})]})}const bR="_overlay_lshbv_6",MR="_panelLeft_lshbv_14",ER="_panelRight_lshbv_25",TR="_panelTop_lshbv_37",wR="_panelBottom_lshbv_47",AR="_text_lshbv_58",CR="_contentWrapper_lshbv_74",RR="_textEmail_lshbv_87",PR="_socials_lshbv_98",sr={overlay:bR,panelLeft:MR,panelRight:ER,panelTop:TR,panelBottom:wR,text:AR,contentWrapper:CR,textEmail:RR,socials:PR};Dt.registerPlugin(Ze);function DR(){const i=At.useRef(null),e=At.useRef(null),t=At.useRef(null),n=At.useRef(null),r=At.useRef(null);return At.useEffect(()=>{const s=i.current;if(!s)return;const a=window.innerHeight*1.5,o=Dt.context(()=>{const l=Dt.timeline({scrollTrigger:{trigger:s,start:"top top",end:`+=${a}`,scrub:!0,pin:!0}});l.to(e.current,{width:"50%",duration:a,ease:"power1.inOut"},0),l.to(t.current,{width:"50%",duration:a,ease:"power1.inOut"},0),l.to(n.current,{height:"50%",duration:a*.9,ease:"power1.in"},a*.1),l.to(r.current,{height:"50%",duration:a*.9,ease:"power1.in"},a*.1)},s);return()=>o.revert()},[]),W.jsxs("main",{style:{position:"relative"},children:[W.jsx(SR,{}),W.jsx("div",{ref:i,style:{height:"100vh",position:"relative",width:"100vw",overflow:"hidden",zIndex:3},children:W.jsxs("div",{className:sr.overlay,children:[W.jsx("div",{ref:e,className:sr.panelLeft,children:W.jsx("span",{className:sr.text,children:"Connect"})}),W.jsx("div",{ref:t,className:sr.panelRight,children:W.jsxs("div",{className:sr.contentWrapper,children:[W.jsx("span",{className:sr.textEmail,children:"seaumsiddiqui@outlook.com"}),W.jsx("div",{className:sr.socials,children:"LinkedIn • GitHub • LeetCode • Twitter"})]})}),W.jsx("div",{ref:n,className:sr.panelTop}),W.jsx("div",{ref:r,className:sr.panelBottom})]})})]})}function IR(){return W.jsx("main",{})}function LR(){return W.jsx("main",{})}const NR="_page_hs60s_1",UR="_hero_hs60s_12",OR="_hero__title_hs60s_20",FR="_manifest_hs60s_32",BR="_manifest__label_hs60s_38",kR="_manifest__tags_hs60s_48",zR="_tag_hs60s_54",VR="_visitLink_hs60s_66",HR="_narrative_hs60s_88",GR="_narrative__notch_hs60s_95",WR="_narrative__content_hs60s_105",XR="_sectionTitle_hs60s_109",qR="_narrative__text_hs60s_120",$R="_engineering_hs60s_131",jR="_separator_hs60s_135",YR="_sectionHeader_hs60s_142",KR="_sectionHeader__title_hs60s_148",ZR="_sectionHeader__meta_hs60s_148",JR="_grid2x2_hs60s_158",QR="_card_hs60s_165",eP="_card__index_hs60s_173",tP="_card__title_hs60s_183",nP="_card__text_hs60s_194",iP="_visuals_hs60s_205",rP="_grid4x1_hs60s_209",sP="_plate_hs60s_215",aP="_plate__imageWrap_hs60s_221",oP="_plate__placeholder_hs60s_231",lP="_plate__badge_hs60s_242",cP="_plate__overlayText_hs60s_258",uP="_plate__caption_hs60s_270",we={page:NR,hero:UR,hero__title:OR,manifest:FR,manifest__label:BR,manifest__tags:kR,tag:zR,visitLink:VR,narrative:HR,narrative__notch:GR,narrative__content:WR,sectionTitle:XR,narrative__text:qR,engineering:$R,separator:jR,sectionHeader:YR,sectionHeader__title:KR,sectionHeader__meta:ZR,grid2x2:JR,card:QR,card__index:eP,card__title:tP,card__text:nP,visuals:iP,grid4x1:rP,plate:sP,plate__imageWrap:aP,plate__placeholder:oP,plate__badge:lP,plate__overlayText:cP,plate__caption:uP};function hP(){return W.jsxs("main",{className:we.page,children:[W.jsxs("section",{className:we.hero,children:[W.jsx("h1",{className:we.hero__title,children:"EVER BLOOM BANGLADESH"}),W.jsxs("div",{className:we.manifest,children:[W.jsx("span",{className:we.manifest__label,children:"TECHNICAL MANIFEST"}),W.jsxs("div",{className:we.manifest__tags,children:[W.jsx("span",{className:we.tag,children:"> SPRING BOOT"}),W.jsx("span",{className:we.tag,children:"> JAVA 21"}),W.jsx("span",{className:we.tag,children:"> MYSQL"}),W.jsx("span",{className:we.tag,children:"> KEYCLOAK"}),W.jsx("span",{className:we.tag,children:"> AWS S3"}),W.jsx("span",{className:we.tag,children:"> DOCKER"}),W.jsx("span",{className:we.tag,children:"> REACT"}),W.jsx("span",{className:we.tag,children:"> TYPESCRIPT"})]})]}),W.jsx("button",{className:we.visitLink,children:"VISIT LIVE SITE ↗"})]}),W.jsx("hr",{className:we.separator}),W.jsxs("section",{className:we.narrative,children:[W.jsx("div",{className:we.narrative__notch}),W.jsxs("div",{className:we.narrative__content,children:[W.jsx("h2",{className:we.sectionTitle,children:"SYSTEM NARRATIVE"}),W.jsx("p",{className:we.narrative__text,children:"Built and deployed for a charitable organization to replace manual, paper-driven workflows across four beneficiary programs. Field agents use the app to collect, verify, and submit applicant data on behalf of rural citizens with limited digital access. The architecture prioritizes offline-first data collection and secure, role-based synchronization upon network availability, ensuring integrity in low-connectivity environments."})]})]}),W.jsxs("section",{className:we.engineering,children:[W.jsx("div",{className:we.sectionHeader,children:W.jsx("span",{className:we.sectionHeader__title,children:"ENGINEERING DECISIONS"})}),W.jsx("hr",{className:we.separator}),W.jsxs("div",{className:we.grid2x2,children:[W.jsxs("article",{className:we.card,children:[W.jsx("span",{className:we.card__index,children:"01"}),W.jsx("h3",{className:we.card__title,children:"AUTH ARCHITECTURE"}),W.jsx("p",{className:we.card__text,children:"Keycloak + JWT auth implemented across three distinct role tiers: Field Agents, Authenticators, and Admins. This separation of concerns ensures strict data governance, where field agents can only submit, authenticators can only verify, and admins maintain system-wide visibility."})]}),W.jsxs("article",{className:we.card,children:[W.jsx("span",{className:we.card__index,children:"02"}),W.jsx("h3",{className:we.card__title,children:"DATA QUERYING"}),W.jsx("p",{className:we.card__text,children:"Engineered multi-field dynamic filtering utilizing JPA Specification. This allows for complex, ad-hoc queries from the administrative dashboard with built-in pagination, crucial for handling tens of thousands of beneficiary records efficiently. Included robust Excel/CSV export pipelines."})]}),W.jsxs("article",{className:we.card,children:[W.jsx("span",{className:we.card__index,children:"03"}),W.jsx("h3",{className:we.card__title,children:"STORAGE STRATEGY"}),W.jsx("p",{className:we.card__text,children:"Compliance documents (IDs, land deeds) are streamed directly to AWS S3, bypassing the application server's local storage entirely. Only metadata URLs are stored in the MySQL relational database, drastically reducing database bloat and backup complexity."})]}),W.jsxs("article",{className:we.card,children:[W.jsx("span",{className:we.card__index,children:"04"}),W.jsx("h3",{className:we.card__title,children:"DEPLOYMENT PIPELINE"}),W.jsx("p",{className:we.card__text,children:"The entire stack is containerized using Docker and deployed on a bare VPS. A custom CI/CD pipeline automates testing and deployment phases, ensuring zero-downtime updates and reliable rollbacks if necessary in the production environment."})]})]})]}),W.jsxs("section",{className:we.visuals,children:[W.jsxs("div",{className:we.sectionHeader,children:[W.jsx("span",{className:we.sectionHeader__title,children:"VISUAL EVIDENCE"}),W.jsx("span",{className:we.sectionHeader__meta,children:"SYS.VIZ.01-04"})]}),W.jsx("hr",{className:we.separator}),W.jsxs("div",{className:we.grid4x1,children:[W.jsxs("div",{className:we.plate,children:[W.jsx("div",{className:we.plate__imageWrap,children:W.jsx("div",{className:we.plate__placeholder,children:W.jsx("span",{className:we.plate__badge,children:"PLATE 01 // HIERARCHY"})})}),W.jsx("p",{className:we.plate__caption,children:"STRUCTURAL MAPPING OF BENEFICIARY DATA FLOW ACROSS REGIONAL NODES."})]}),W.jsxs("div",{className:we.plate,children:[W.jsx("div",{className:we.plate__imageWrap,children:W.jsx("div",{className:we.plate__placeholder,children:W.jsx("span",{className:we.plate__badge,children:"PLATE 02 // DATA_SCHEMA"})})}),W.jsx("p",{className:we.plate__caption,children:"RELATIONAL INTEGRITY CONSTRAINTS FOR MULTI-TENANT PROGRAM ISOLATION."})]}),W.jsxs("div",{className:we.plate,children:[W.jsx("div",{className:we.plate__imageWrap,children:W.jsxs("div",{className:we.plate__placeholder,children:[W.jsx("span",{className:we.plate__badge,children:"PLATE 03 // INTERFACE"}),W.jsx("div",{className:we.plate__overlayText,children:"ADMIN CONSOLE [RESTRICTED]"})]})}),W.jsx("p",{className:we.plate__caption,children:"COMMAND-LINE INTERFACE FOR SYSTEM-WIDE AUDIT LOG EXTRACTION."})]}),W.jsxs("div",{className:we.plate,children:[W.jsx("div",{className:we.plate__imageWrap,children:W.jsxs("div",{className:we.plate__placeholder,children:[W.jsx("span",{className:we.plate__badge,children:"PLATE 04 // DATA_DASHBOARD"}),W.jsx("div",{className:we.plate__overlayText,children:"TELEMETRY [ACTIVE]"})]})}),W.jsx("p",{className:we.plate__caption,children:"REAL-TIME TELEMETRY AND KPI TRACKING FOR BENEFICIARY ENROLLMENT STATUS."})]})]})]})]})}const fP="_blob_19d19_1",dP={blob:fP};function pP(){const i=At.useRef(null);return At.useEffect(()=>{const e=i.current;if(!e)return;const t={x:window.innerWidth/2,y:window.innerHeight/2},n={x:t.x,y:t.y};let r=!1,s=!1;const a=()=>document.querySelector('canvas[data-cursor-exclusion="true"]'),o=()=>{r=!0,Dt.to(e,{width:120,height:120,opacity:0,duration:.45,ease:"power2.inOut"})},l=()=>{r=!1,Dt.to(e,{width:10,height:10,opacity:.9,duration:.45,ease:"power2.inOut"})},c=p=>{t.x=p.clientX,t.y=p.clientY;const v=document.elementFromPoint(p.clientX,p.clientY)?.closest('[data-cursor-exclusion="true"]'),b=v&&v.tagName!=="CANVAS";if(b&&!s){s=!0,Dt.to(e,{scale:0,duration:.3,ease:"power2.inOut"});return}if(!b&&s&&(s=!1,Dt.to(e,{scale:1,duration:.3,ease:"power2.inOut"})),s)return;const S=a();if(!S){r&&l();return}const A=S.getBoundingClientRect(),E=p.clientX-A.left,T=p.clientY-A.top;if(E<0||T<0||E>A.width||T>A.height){r&&l();return}const x=S.getContext("webgl2")||S.getContext("webgl");if(!x)return;const w=Math.floor(E/A.width*x.drawingBufferWidth),R=Math.floor((A.height-T)/A.height*x.drawingBufferHeight),P=new Uint8Array(4);try{x.readPixels(w,R,1,1,x.RGBA,x.UNSIGNED_BYTE,P)}catch{return}const I=P[3]>10;I&&!r?o():!I&&r&&l()};window.addEventListener("mousemove",c);const u=()=>{n.x+=(t.x-n.x)*.08,n.y+=(t.y-n.y)*.08;const p=e.offsetWidth||10;Dt.set(e,{x:n.x-p/2,y:n.y-p/2})};Dt.ticker.add(u);const d=p=>{p.currentTarget.closest('[data-cursor-exclusion="true"]')||Dt.to(e,{width:36,height:36,opacity:1,duration:.25,ease:"power2.out"})},h=()=>{r||s||Dt.to(e,{width:10,height:10,opacity:.9,duration:.25,ease:"power2.out"})},f=[],m=()=>{document.querySelectorAll("a, button").forEach(p=>{f.includes(p)||p.closest('[data-cursor-exclusion="true"]')||(p.addEventListener("mouseenter",d),p.addEventListener("mouseleave",h),f.push(p))})};m();const _=new MutationObserver(()=>m());return _.observe(document.body,{childList:!0,subtree:!0}),()=>{window.removeEventListener("mousemove",c),Dt.ticker.remove(u),_.disconnect(),f.forEach(p=>{p.removeEventListener("mouseenter",d),p.removeEventListener("mouseleave",h)})}},[]),W.jsx("div",{ref:i,className:dP.blob,"aria-hidden":"true"})}const mP="_tab_m92mb_1",_P="_visible_m92mb_21",gP="_tab__inner_m92mb_26",vP="_tab__letterWrap_m92mb_33",xP="_tab__dot_m92mb_38",yP="_tab__letter_m92mb_33",SP="_tab__label_m92mb_76",ls={tab:mP,visible:_P,tab__inner:gP,tab__letterWrap:vP,tab__dot:xP,tab__letter:yP,tab__label:SP};function bP({onClick:i,visible:e}){const t=At.useRef(null),n=()=>{Dt.to(t.current,{backgroundColor:"var(--cursor-color)",duration:.45,ease:"power2.out"})},r=()=>{Dt.to(t.current,{backgroundColor:"var(--color-400)",duration:.45,ease:"power2.inOut"})};return W.jsx("button",{ref:t,className:`${ls.tab} ${e?ls.visible:""}`,onMouseEnter:n,onMouseLeave:r,onClick:i,"data-cursor-exclusion":"true","aria-label":"Open navigation",children:W.jsxs("div",{className:ls.tab__inner,children:[W.jsxs("div",{className:ls.tab__letterWrap,children:[W.jsx("span",{className:ls.tab__letter,children:"M"}),W.jsx("span",{className:ls.tab__dot,"aria-hidden":"true"})]}),W.jsx("span",{className:ls.tab__label,children:"Menu"})]})})}const MP="_overlay_2aciq_1",EP="_panel_2aciq_10",TP="_panel__close_2aciq_25",wP="_panel__content_2aciq_38",AP="_panel__section_2aciq_45",CP="_panel__sectionHeader_2aciq_51",RP="_panel__dot_2aciq_57",PP="_panel__sectionLabel_2aciq_76",DP="_panel__nav_2aciq_85",IP="_panel__navLink_2aciq_91",LP="_panel__links_2aciq_106",NP="_panel__link_2aciq_106",UP="_panel__availability_2aciq_126",OP="_panel__availText_2aciq_133",FP="_panel__availSub_2aciq_140",en={overlay:MP,panel:EP,panel__close:TP,panel__content:wP,panel__section:AP,panel__sectionHeader:CP,panel__dot:RP,panel__sectionLabel:PP,panel__nav:DP,panel__navLink:IP,panel__links:LP,panel__link:NP,panel__availability:UP,panel__availText:OP,panel__availSub:FP};function BP({open:i,onClose:e}){const t=At.useRef(null),n=At.useRef(null),{nav:r}=Qf(),s=(a,o)=>{if(!o.startsWith("/#")){e();return}a.preventDefault(),e();const l=o.replace("/#",""),c=document.querySelector(`[data-section="${l}"]`);if(!c)return;const u=q_();u?u.scrollTo(c,{offset:10,duration:2}):c.scrollIntoView({behavior:"smooth"})};return At.useEffect(()=>{const a=t.current,o=n.current;!a||!o||(i?(Dt.to(o,{opacity:1,pointerEvents:"all",duration:.3}),Dt.fromTo(a,{x:"100%"},{x:"0%",duration:.55,ease:"power3.inOut"})):(Dt.to(o,{opacity:0,pointerEvents:"none",duration:.3}),Dt.to(a,{x:"100%",duration:.45,ease:"power3.in"})))},[i]),W.jsxs(W.Fragment,{children:[W.jsx("div",{ref:n,className:en.overlay,onClick:e}),W.jsxs("div",{ref:t,className:en.panel,children:[W.jsx("button",{className:en.panel__close,onClick:e,"aria-label":"Close",children:"✕"}),W.jsxs("div",{className:en.panel__content,children:[W.jsxs("div",{className:en.panel__section,children:[W.jsxs("div",{className:en.panel__sectionHeader,children:[W.jsx("span",{className:en.panel__dot}),W.jsx("span",{className:en.panel__sectionLabel,children:"Navigate"})]}),W.jsxs("nav",{className:en.panel__nav,children:[W.jsx("a",{href:"/",className:en.panel__navLink,onClick:e,children:"Home"}),r.navLinks.map(a=>W.jsx("a",{href:a.href,className:en.panel__navLink,onClick:o=>s(o,a.href),...a.external?{target:"_blank",rel:"noreferrer"}:{},children:a.label},a.label))]})]}),W.jsxs("div",{className:en.panel__section,children:[W.jsxs("div",{className:en.panel__sectionHeader,children:[W.jsx("span",{className:en.panel__dot}),W.jsx("span",{className:en.panel__sectionLabel,children:"Connect"})]}),W.jsx("div",{className:en.panel__links,children:r.socialLinks.map(a=>W.jsx("a",{href:a.href,className:en.panel__link,target:"_blank",rel:"noreferrer",children:a.label},a.label))})]}),W.jsxs("div",{className:en.panel__availability,children:[W.jsx("span",{className:en.panel__availText,children:r.availabilityText}),W.jsx("span",{className:en.panel__availSub,children:r.availabilitySub})]})]})]})]})}function kP({triggerSection:i="about"}){const[e,t]=At.useState(!1),[n,r]=At.useState(!1);return At.useEffect(()=>{const s=setTimeout(()=>{const a=document.querySelector(`[data-section='${i}']`);if(!a)return;const o=Ze.create({trigger:a,start:"top center",onEnter:()=>t(!0),onLeaveBack:()=>t(!1)});return()=>o.kill()},500);return()=>clearTimeout(s)},[i]),W.jsxs(W.Fragment,{children:[W.jsx(bP,{visible:e,onClick:()=>r(!0)}),W.jsx(BP,{open:n,onClose:()=>r(!1)})]})}function zP({children:i}){return Yx(),At.useEffect(()=>{const e=t=>{const n=t.target;n.tagName==="IMG"&&n.classList.add("loaded")};return document.addEventListener("load",e,!0),()=>document.removeEventListener("load",e,!0)},[]),W.jsx(W.Fragment,{children:i})}function VP(){const i=bm({select:e=>e.location.pathname});return i.startsWith("/project")?W.jsx(hP,{}):i.startsWith("/about")?W.jsx(IR,{}):i.startsWith("/contact")?W.jsx(LR,{}):W.jsx(DR,{})}function HP(){const i=bm({select:n=>n.location.pathname}),t={"/":"work"}[i];return t?W.jsx(kP,{triggerSection:t}):null}function qP(){return W.jsxs(zP,{children:[W.jsx(pP,{}),W.jsx(HP,{}),W.jsx(VP,{})]})}export{qP as A,a0 as i,XP as y};
