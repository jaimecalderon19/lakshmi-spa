import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import 'html-escaper';
import 'clsx';
import './chunks/astro_MCnfm83P.mjs';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    })
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"","routes":[{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.sGPSBwR8.js"}],"styles":[{"type":"external","src":"/_astro/about.Bsebjc0z.css"},{"type":"inline","content":".pricing-card[data-astro-cid-dohjnao5]{margin:2rem;background-color:var(--color-golden-300);border-radius:8px;box-shadow:0 0 10px #0000001a;text-align:center;padding:20px;max-width:300px;width:100%}.containerImg[data-astro-cid-dohjnao5]{margin-bottom:15px}.containerImg[data-astro-cid-dohjnao5] img[data-astro-cid-dohjnao5]{width:100%;height:auto;border-radius:8px}.pricing-title[data-astro-cid-dohjnao5]{color:#333;font-size:1.5rem;margin-bottom:10px}.pricing-features[data-astro-cid-dohjnao5]{max-width:100%;display:flex;flex-direction:column;flex-wrap:wrap}.pricing-features[data-astro-cid-dohjnao5] div[data-astro-cid-dohjnao5]{display:flex;align-items:center;text-align:start;line-height:1.3}.pricing-features[data-astro-cid-dohjnao5] div[data-astro-cid-dohjnao5] svg[data-astro-cid-dohjnao5]{min-width:20px}h3[data-astro-cid-dohjnao5]{color:#333}hr[data-astro-cid-dohjnao5]{flex-grow:3;margin:0 10px;border:none;border-top:1px solid var(--color-vinotinto)}.container-pricing[data-astro-cid-dohjnao5]{display:flex;justify-content:space-between;align-items:center}.pricing-features[data-astro-cid-dohjnao5] .time[data-astro-cid-dohjnao5],.pricing-features[data-astro-cid-dohjnao5] .include[data-astro-cid-dohjnao5]{flex-grow:1}.description[data-astro-cid-dohjnao5]{font-size:1.1rem}.pricing-button[data-astro-cid-dohjnao5]{background-color:var(--color-vinotinto);color:#fff;border:none;padding:10px 20px;border-radius:4px;cursor:pointer;font-size:1rem;text-decoration:none;display:inline-block;transition:background-color .3s ease;margin-top:20px}.pricing-button[data-astro-cid-dohjnao5]:hover{background-color:#3a0309}@media only screen and (max-width: 600px){.pricing-card[data-astro-cid-dohjnao5]{margin:1rem 0}.description[data-astro-cid-dohjnao5]{font-size:.8rem}}\n"},{"type":"external","src":"/_astro/index.lyRtYlpt.css"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.SBU9btyj.js"}],"styles":[{"type":"external","src":"/_astro/about.Bsebjc0z.css"},{"type":"inline","content":".pricing-card[data-astro-cid-dohjnao5]{margin:2rem;background-color:var(--color-golden-300);border-radius:8px;box-shadow:0 0 10px #0000001a;text-align:center;padding:20px;max-width:300px;width:100%}.containerImg[data-astro-cid-dohjnao5]{margin-bottom:15px}.containerImg[data-astro-cid-dohjnao5] img[data-astro-cid-dohjnao5]{width:100%;height:auto;border-radius:8px}.pricing-title[data-astro-cid-dohjnao5]{color:#333;font-size:1.5rem;margin-bottom:10px}.pricing-features[data-astro-cid-dohjnao5]{max-width:100%;display:flex;flex-direction:column;flex-wrap:wrap}.pricing-features[data-astro-cid-dohjnao5] div[data-astro-cid-dohjnao5]{display:flex;align-items:center;text-align:start;line-height:1.3}.pricing-features[data-astro-cid-dohjnao5] div[data-astro-cid-dohjnao5] svg[data-astro-cid-dohjnao5]{min-width:20px}h3[data-astro-cid-dohjnao5]{color:#333}hr[data-astro-cid-dohjnao5]{flex-grow:3;margin:0 10px;border:none;border-top:1px solid var(--color-vinotinto)}.container-pricing[data-astro-cid-dohjnao5]{display:flex;justify-content:space-between;align-items:center}.pricing-features[data-astro-cid-dohjnao5] .time[data-astro-cid-dohjnao5],.pricing-features[data-astro-cid-dohjnao5] .include[data-astro-cid-dohjnao5]{flex-grow:1}.description[data-astro-cid-dohjnao5]{font-size:1.1rem}.pricing-button[data-astro-cid-dohjnao5]{background-color:var(--color-vinotinto);color:#fff;border:none;padding:10px 20px;border-radius:4px;cursor:pointer;font-size:1rem;text-decoration:none;display:inline-block;transition:background-color .3s ease;margin-top:20px}.pricing-button[data-astro-cid-dohjnao5]:hover{background-color:#3a0309}@media only screen and (max-width: 600px){.pricing-card[data-astro-cid-dohjnao5]{margin:1rem 0}.description[data-astro-cid-dohjnao5]{font-size:.8rem}}\n.contentInfo[data-astro-cid-ucd2ps2b] p[data-astro-cid-ucd2ps2b]{text-align:center}.visible[data-astro-cid-ucd2ps2b]{display:block!important}.slidem[data-astro-cid-ucd2ps2b],.slides[data-astro-cid-ucd2ps2b]{display:none}.setionMain[data-astro-cid-ucd2ps2b]{max-width:100%;max-height:100vh;overflow:hidden;position:relative}.setionMain[data-astro-cid-ucd2ps2b] div[data-astro-cid-ucd2ps2b]{z-index:2}.setionMain[data-astro-cid-ucd2ps2b] img[data-astro-cid-ucd2ps2b]{width:100vw;height:100vh;object-fit:cover;object-position:center}\n"}],"routeData":{"route":"/services","type":"page","pattern":"^\\/services\\/?$","segments":[[{"content":"services","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/services.astro","pathname":"/services","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.948uEkLF.js"}],"styles":[{"type":"external","src":"/_astro/about.Bsebjc0z.css"},{"type":"inline","content":"main[data-astro-cid-uw5kdbxl]{margin-top:3rem}.contentInfo[data-astro-cid-uw5kdbxl]{width:60%;margin:0 auto}.contentInfo[data-astro-cid-uw5kdbxl] div[data-astro-cid-uw5kdbxl] img[data-astro-cid-uw5kdbxl]{max-width:95%}.frase[data-astro-cid-uw5kdbxl]{color:var(--color-vinotinto);font-size:23px;font-style:oblique}.linkIg[data-astro-cid-uw5kdbxl]{text-decoration:none;color:var(--color-golden-200);font-weight:600}.containerImgIg[data-astro-cid-uw5kdbxl] img[data-astro-cid-uw5kdbxl]{border-radius:5px}@media only screen and (max-width: 600px){h1[data-astro-cid-uw5kdbxl]{font-size:30px}.contentInfo[data-astro-cid-uw5kdbxl]{width:90%}.contentInfo[data-astro-cid-uw5kdbxl] div[data-astro-cid-uw5kdbxl]{max-width:100%}.containerImgIg[data-astro-cid-uw5kdbxl] img[data-astro-cid-uw5kdbxl]{width:45%;margin:.4rem}}\n"}],"routeData":{"route":"/contact","type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.4t8kbN5H.js"}],"styles":[{"type":"external","src":"/_astro/about.Bsebjc0z.css"},{"type":"inline","content":".slider-container[data-astro-cid-idexnvxr]{width:100%;height:100%;text-align:center;position:relative}.slidesecond[data-astro-cid-idexnvxr]{display:none;background-color:#d6c58a;border-radius:20px}.slide-image[data-astro-cid-idexnvxr]{width:100%;object-fit:cover;object-position:center;filter:brightness(.6)}.slide-content[data-astro-cid-idexnvxr]{position:absolute;top:0;left:0;z-index:5;width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:1rem;text-align:center;padding:1rem}.slide-title[data-astro-cid-idexnvxr]{width:100%;max-width:50rem;color:#fff;font-size:2rem;font-weight:500;text-transform:capitalize}.slide-desc[data-astro-cid-idexnvxr]{width:100%;max-width:50rem;color:#d3d3d3;font-size:1rem;font-weight:300}.slide-btn[data-astro-cid-idexnvxr]{color:#000;background-color:#fff;display:flex;align-items:center;justify-content:center;gap:.5rem;font-size:1.2rem;font-weight:500;margin-top:1rem;border-radius:.5rem;padding:.5rem 1rem;text-transform:capitalize;transition:ease .3s}.slide-btn[data-astro-cid-idexnvxr]:hover{gap:1rem}.slide-number-container[data-astro-cid-idexnvxr]{position:absolute;bottom:1rem;left:1rem;z-index:5;font-size:1.5rem;display:flex;gap:.5rem;align-items:center;color:#d3d3d3c9;letter-spacing:.2rem}.slide-number-container[data-astro-cid-idexnvxr] hr[data-astro-cid-idexnvxr]{width:3rem;transform:rotate(130deg);border-color:#d3d3d3c9}.slider-nav[data-astro-cid-idexnvxr]{width:110%;position:absolute;bottom:37%;left:-1rem;z-index:5;display:flex;align-items:center;justify-content:space-between;gap:1rem}.slider-nav-btn[data-astro-cid-idexnvxr]{cursor:pointer;background-color:var(--color-vinotinto);font-size:1.5rem;padding:.5rem;border-radius:.5rem;display:flex;align-items:center;width:2rem;height:1.5rem;justify-content:center;transition:ease .3s}.icon[data-astro-cid-idexnvxr]{stroke:var(--color-golden-200)}.slider-nav-btn[data-astro-cid-idexnvxr]:hover{background-color:#fff;color:#000}.dot-container[data-astro-cid-idexnvxr]{position:absolute;bottom:1rem;left:0;z-index:4;width:100%;display:flex;align-items:center;justify-content:center;gap:.5rem}.dotSecont[data-astro-cid-idexnvxr]{cursor:pointer;height:1rem;width:1rem;background-color:bisque;border-radius:50%;display:inline-block;transition:ease .3s}.active[data-astro-cid-idexnvxr],.dotSecont[data-astro-cid-idexnvxr]:hover{background-color:var(--color-vinotinto)}.fade[data-astro-cid-idexnvxr]{width:100%;height:98%;overflow:hidden;animation-name:fade;animation-duration:1s}@keyframes fade{0%{opacity:.8}to{opacity:1}}@media only screen and (max-width: 600px){.slider-container[data-astro-cid-idexnvxr]{width:320px;margin:0 auto}}main[data-astro-cid-kh7btl4r]{margin-top:3rem}.contentInfo[data-astro-cid-kh7btl4r]{width:60%;margin:0 auto}.contentInfo[data-astro-cid-kh7btl4r] div[data-astro-cid-kh7btl4r] img[data-astro-cid-kh7btl4r]{max-width:95%}.frase[data-astro-cid-kh7btl4r]{color:var(--color-vinotinto);font-size:23px;font-style:oblique}.containerSlide[data-astro-cid-kh7btl4r]{margin:0 auto;max-width:70%;height:300px}.linkIg[data-astro-cid-kh7btl4r]{text-decoration:none;color:var(--color-golden-200);font-weight:600}.containerImgIg[data-astro-cid-kh7btl4r]{display:flex;flex-wrap:wrap;justify-content:space-around}.containerImgIg[data-astro-cid-kh7btl4r] div[data-astro-cid-kh7btl4r]{width:40%;height:260px;overflow:hidden;position:relative;border-radius:10px;margin:.5rem}.containerImgIg[data-astro-cid-kh7btl4r] div[data-astro-cid-kh7btl4r] img[data-astro-cid-kh7btl4r]{object-position:center}@media only screen and (max-width: 600px){.contentInfo[data-astro-cid-kh7btl4r]{width:92%}.containerSlide[data-astro-cid-kh7btl4r]{width:95%;max-width:100%;height:180px}.containerImgIg[data-astro-cid-kh7btl4r] div[data-astro-cid-kh7btl4r]{width:46%;height:85px;margin:.4rem}}\n"}],"routeData":{"route":"/about","type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/JaimeDS3/Desktop/laskshmi/src/pages/about.astro",{"propagation":"none","containsHead":true}],["C:/Users/JaimeDS3/Desktop/laskshmi/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["C:/Users/JaimeDS3/Desktop/laskshmi/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/JaimeDS3/Desktop/laskshmi/src/pages/services.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,s)=>{let n=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),n();break}});for(let e of s.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:src/pages/services@_@astro":"pages/services.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/src/pages/contact.astro":"chunks/pages/contact_8CMoPD2_.mjs","/src/pages/services.astro":"chunks/pages/services_hxjD8Dev.mjs","\u0000@astrojs-manifest":"manifest_hDS_6CHu.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.SBU9btyj.js","/astro/hoisted.js?q=2":"_astro/hoisted.948uEkLF.js","/astro/hoisted.js?q=1":"_astro/hoisted.4t8kbN5H.js","/astro/hoisted.js?q=3":"_astro/hoisted.sGPSBwR8.js","astro:scripts/before-hydration.js":""},"assets":[]});

export { manifest };
