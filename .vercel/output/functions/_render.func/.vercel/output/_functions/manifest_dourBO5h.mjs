import 'cookie';
import { bold, red, yellow, dim, blue } from 'kleur/colors';
import './chunks/astro_CAOiRXV7.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

const dateTimeFormat = new Intl.DateTimeFormat([], {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false
});
const levels = {
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  silent: 90
};
function log(opts, level, label, message, newLine = true) {
  const logLevel = opts.level;
  const dest = opts.dest;
  const event = {
    label,
    level,
    message,
    newLine
  };
  if (!isLogLevelEnabled(logLevel, level)) {
    return;
  }
  dest.write(event);
}
function isLogLevelEnabled(configuredLogLevel, level) {
  return levels[configuredLogLevel] <= levels[level];
}
function info(opts, label, message, newLine = true) {
  return log(opts, "info", label, message, newLine);
}
function warn(opts, label, message, newLine = true) {
  return log(opts, "warn", label, message, newLine);
}
function error(opts, label, message, newLine = true) {
  return log(opts, "error", label, message, newLine);
}
function debug(...args) {
  if ("_astroGlobalDebug" in globalThis) {
    globalThis._astroGlobalDebug(...args);
  }
}
function getEventPrefix({ level, label }) {
  const timestamp = `${dateTimeFormat.format(/* @__PURE__ */ new Date())}`;
  const prefix = [];
  if (level === "error" || level === "warn") {
    prefix.push(bold(timestamp));
    prefix.push(`[${level.toUpperCase()}]`);
  } else {
    prefix.push(timestamp);
  }
  if (label) {
    prefix.push(`[${label}]`);
  }
  if (level === "error") {
    return red(prefix.join(" "));
  }
  if (level === "warn") {
    return yellow(prefix.join(" "));
  }
  if (prefix.length === 1) {
    return dim(prefix[0]);
  }
  return dim(prefix[0]) + " " + blue(prefix.splice(1).join(" "));
}
if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}
class Logger {
  options;
  constructor(options) {
    this.options = options;
  }
  info(label, message, newLine = true) {
    info(this.options, label, message, newLine);
  }
  warn(label, message, newLine = true) {
    warn(this.options, label, message, newLine);
  }
  error(label, message, newLine = true) {
    error(this.options, label, message, newLine);
  }
  debug(label, ...messages) {
    debug(label, ...messages);
  }
  level() {
    return this.options.level;
  }
  forkIntegrationLogger(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
}
class AstroIntegrationLogger {
  options;
  label;
  constructor(logging, label) {
    this.options = logging;
    this.label = label;
  }
  /**
   * Creates a new logger instance with a new label, but the same log options.
   */
  fork(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
  info(message) {
    info(this.options, this.label, message);
  }
  warn(message) {
    warn(this.options, this.label, message);
  }
  error(message) {
    error(this.options, this.label, message);
  }
  debug(message) {
    debug(this.label, message);
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
    }),
    isIndex: rawRouteData.isIndex
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
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.CNBjOhKV.css"}],"routeData":{"route":"/about/about","isIndex":false,"type":"page","pattern":"^\\/about\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}],[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about/about.md","pathname":"/about/about","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.CNBjOhKV.css"}],"routeData":{"route":"/blogs/blog","isIndex":false,"type":"page","pattern":"^\\/blogs\\/blog\\/?$","segments":[[{"content":"blogs","dynamic":false,"spread":false}],[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blogs/blog.md","pathname":"/blogs/blog","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.CNBjOhKV.css"}],"routeData":{"route":"/certificates/pmp","isIndex":false,"type":"page","pattern":"^\\/certificates\\/pmp\\/?$","segments":[[{"content":"certificates","dynamic":false,"spread":false}],[{"content":"pmp","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/certificates/pmp.md","pathname":"/certificates/pmp","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.CNBjOhKV.css"}],"routeData":{"route":"/certificates/sei","isIndex":false,"type":"page","pattern":"^\\/certificates\\/sei\\/?$","segments":[[{"content":"certificates","dynamic":false,"spread":false}],[{"content":"sei","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/certificates/sei.md","pathname":"/certificates/sei","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.CNBjOhKV.css"}],"routeData":{"route":"/contact/email","isIndex":false,"type":"page","pattern":"^\\/contact\\/email\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}],[{"content":"email","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact/email.md","pathname":"/contact/email","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.CNBjOhKV.css"}],"routeData":{"route":"/contact/github","isIndex":false,"type":"page","pattern":"^\\/contact\\/github\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}],[{"content":"github","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact/github.md","pathname":"/contact/github","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.CNBjOhKV.css"}],"routeData":{"route":"/contact/linkedin","isIndex":false,"type":"page","pattern":"^\\/contact\\/linkedin\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}],[{"content":"linkedin","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact/linkedin.md","pathname":"/contact/linkedin","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.CNBjOhKV.css"}],"routeData":{"route":"/more/email","isIndex":false,"type":"page","pattern":"^\\/more\\/email\\/?$","segments":[[{"content":"more","dynamic":false,"spread":false}],[{"content":"email","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/more/email.md","pathname":"/more/email","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.CNBjOhKV.css"}],"routeData":{"route":"/more/github","isIndex":false,"type":"page","pattern":"^\\/more\\/github\\/?$","segments":[[{"content":"more","dynamic":false,"spread":false}],[{"content":"github","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/more/github.md","pathname":"/more/github","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.CNBjOhKV.css"}],"routeData":{"route":"/more/linkedin","isIndex":false,"type":"page","pattern":"^\\/more\\/linkedin\\/?$","segments":[[{"content":"more","dynamic":false,"spread":false}],[{"content":"linkedin","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/more/linkedin.md","pathname":"/more/linkedin","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.CNBjOhKV.css"}],"routeData":{"route":"/projects/hqpsec","isIndex":false,"type":"page","pattern":"^\\/projects\\/hqpsec\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}],[{"content":"hqpsec","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects/hqpsec.md","pathname":"/projects/hqpsec","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.CNBjOhKV.css"}],"routeData":{"route":"/projects/techmatch","isIndex":false,"type":"page","pattern":"^\\/projects\\/techmatch\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}],[{"content":"techmatch","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects/techmatch.md","pathname":"/projects/techmatch","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.CNBjOhKV.css"}],"routeData":{"route":"/studies/csuglobal","isIndex":false,"type":"page","pattern":"^\\/studies\\/csuGlobal\\/?$","segments":[[{"content":"studies","dynamic":false,"spread":false}],[{"content":"csuGlobal","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/studies/csuGlobal.md","pathname":"/studies/csuGlobal","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.CNBjOhKV.css"}],"routeData":{"route":"/studies/csusoc","isIndex":false,"type":"page","pattern":"^\\/studies\\/csuSoc\\/?$","segments":[[{"content":"studies","dynamic":false,"spread":false}],[{"content":"csuSoc","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/studies/csuSoc.md","pathname":"/studies/csuSoc","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.CNBjOhKV.css"}],"routeData":{"route":"/studies/csusw","isIndex":false,"type":"page","pattern":"^\\/studies\\/csuSw\\/?$","segments":[[{"content":"studies","dynamic":false,"spread":false}],[{"content":"csuSw","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/studies/csuSw.md","pathname":"/studies/csuSw","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.CNBjOhKV.css"}],"routeData":{"route":"/studies/gasei","isIndex":false,"type":"page","pattern":"^\\/studies\\/gaSei\\/?$","segments":[[{"content":"studies","dynamic":false,"spread":false}],[{"content":"gaSei","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/studies/gaSei.md","pathname":"/studies/gaSei","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.CNBjOhKV.css"}],"routeData":{"route":"/works/work1","isIndex":false,"type":"page","pattern":"^\\/works\\/work1\\/?$","segments":[[{"content":"works","dynamic":false,"spread":false}],[{"content":"work1","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/works/work1.md","pathname":"/works/work1","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.CNBjOhKV.css"}],"routeData":{"route":"/works/work2","isIndex":false,"type":"page","pattern":"^\\/works\\/work2\\/?$","segments":[[{"content":"works","dynamic":false,"spread":false}],[{"content":"work2","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/works/work2.md","pathname":"/works/work2","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.CNBjOhKV.css"}],"routeData":{"route":"/works/work3","isIndex":false,"type":"page","pattern":"^\\/works\\/work3\\/?$","segments":[[{"content":"works","dynamic":false,"spread":false}],[{"content":"work3","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/works/work3.md","pathname":"/works/work3","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.CNBjOhKV.css"}],"routeData":{"route":"/works/work4","isIndex":false,"type":"page","pattern":"^\\/works\\/work4\\/?$","segments":[[{"content":"works","dynamic":false,"spread":false}],[{"content":"work4","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/works/work4.md","pathname":"/works/work4","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"var u={exports:{}};(function(r,g){function l(){var c=document.querySelector(\"[data-toggle-theme]\"),t=c?c.getAttribute(\"data-key\"):null;(function(e=localStorage.getItem(t||\"theme\")){localStorage.getItem(t||\"theme\")&&(document.documentElement.setAttribute(\"data-theme\",e),c&&[...document.querySelectorAll(\"[data-toggle-theme]\")].forEach(a=>{a.classList.add(c.getAttribute(\"data-act-class\"))}))})(),c&&[...document.querySelectorAll(\"[data-toggle-theme]\")].forEach(e=>{e.addEventListener(\"click\",function(){var a=e.getAttribute(\"data-toggle-theme\");if(a){var o=a.split(\",\");document.documentElement.getAttribute(\"data-theme\")==o[0]?o.length==1?(document.documentElement.removeAttribute(\"data-theme\"),localStorage.removeItem(t||\"theme\")):(document.documentElement.setAttribute(\"data-theme\",o[1]),localStorage.setItem(t||\"theme\",o[1])):(document.documentElement.setAttribute(\"data-theme\",o[0]),localStorage.setItem(t||\"theme\",o[0]))}[...document.querySelectorAll(\"[data-toggle-theme]\")].forEach(s=>{s.classList.toggle(this.getAttribute(\"data-act-class\"))})})})}function m(){var c=document.querySelector(\"[data-set-theme='']\"),t=c?c.getAttribute(\"data-key\"):null;(function(e=localStorage.getItem(t||\"theme\")){if(e!=null&&e!=\"\")if(localStorage.getItem(t||\"theme\")&&localStorage.getItem(t||\"theme\")!=\"\"){document.documentElement.setAttribute(\"data-theme\",e);var a=document.querySelector(\"[data-set-theme='\"+e.toString()+\"']\");a&&([...document.querySelectorAll(\"[data-set-theme]\")].forEach(o=>{o.classList.remove(o.getAttribute(\"data-act-class\"))}),a.getAttribute(\"data-act-class\")&&a.classList.add(a.getAttribute(\"data-act-class\")))}else{var a=document.querySelector(\"[data-set-theme='']\");a.getAttribute(\"data-act-class\")&&a.classList.add(a.getAttribute(\"data-act-class\"))}})(),[...document.querySelectorAll(\"[data-set-theme]\")].forEach(e=>{e.addEventListener(\"click\",function(){document.documentElement.setAttribute(\"data-theme\",this.getAttribute(\"data-set-theme\")),localStorage.setItem(t||\"theme\",document.documentElement.getAttribute(\"data-theme\")),[...document.querySelectorAll(\"[data-set-theme]\")].forEach(a=>{a.classList.remove(a.getAttribute(\"data-act-class\"))}),e.getAttribute(\"data-act-class\")&&e.classList.add(e.getAttribute(\"data-act-class\"))})})}function d(){var c=document.querySelector(\"select[data-choose-theme]\"),t=c?c.getAttribute(\"data-key\"):null;(function(e=localStorage.getItem(t||\"theme\")){if(localStorage.getItem(t||\"theme\")){document.documentElement.setAttribute(\"data-theme\",e);var a=document.querySelector(\"select[data-choose-theme] [value='\"+e.toString()+\"']\");a&&[...document.querySelectorAll(\"select[data-choose-theme] [value='\"+e.toString()+\"']\")].forEach(o=>{o.selected=!0})}})(),c&&[...document.querySelectorAll(\"select[data-choose-theme]\")].forEach(e=>{e.addEventListener(\"change\",function(){document.documentElement.setAttribute(\"data-theme\",this.value),localStorage.setItem(t||\"theme\",document.documentElement.getAttribute(\"data-theme\")),[...document.querySelectorAll(\"select[data-choose-theme] [value='\"+localStorage.getItem(t||\"theme\")+\"']\")].forEach(a=>{a.selected=!0})})})}function n(c=!0){c===!0?document.addEventListener(\"DOMContentLoaded\",function(t){l(),d(),m()}):(l(),d(),m())}r.exports={themeChange:n}})(u);var i=u.exports;i.themeChange();\n"}],"styles":[{"type":"inline","content":"@font-face{font-family:DM Sans Variable;font-style:normal;font-display:swap;font-weight:100 1000;src:url(/_astro/dm-sans-latin-ext-wght-normal.C24VDuKN.woff2) format(\"woff2-variations\");unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:DM Sans Variable;font-style:normal;font-display:swap;font-weight:100 1000;src:url(/_astro/dm-sans-latin-wght-normal.B1c0Y_ic.woff2) format(\"woff2-variations\");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}.collapse[data-astro-cid-5gutpwss]{transition-duration:.35s;transition-timing-function:ease-in-out}@media (max-width: 768px){.flex-col[data-astro-cid-3ef6ksr2].justify-end{display:flex;flex-direction:column;justify-content:center;align-items:center}}body{font-family:DM Sans Variable,sans-serif}@media only screen and (max-width: 480px){*{font-size:12px}}.overflow-y-scroll::-webkit-scrollbar{width:3px}.overflow-y-scroll::-webkit-scrollbar-thumb{background-color:#171717}.overflow-y-scroll{scrollbar-width:1px}@media (max-width: 768px){.container{flex-direction:column}}@media (min-width: 768px){.container{display:flex;flex-wrap:wrap}}\n"},{"type":"external","src":"/_astro/about.CNBjOhKV.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/trevormcelhaney/code/portfolio/astro-cv-Kate/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/src/pages/about/about.md":"chunks/pages/about_COFqG_2f.mjs","/src/pages/blogs/blog.md":"chunks/pages/blog_BmrLZ2hY.mjs","/src/pages/studies/csuGlobal.md":"chunks/pages/csuGlobal_BfYO3uOf.mjs","/src/pages/studies/csuSoc.md":"chunks/pages/csuSoc_lEc4SpvJ.mjs","/src/pages/studies/csuSw.md":"chunks/pages/csuSw_DpbTDwwD.mjs","/src/pages/studies/gaSei.md":"chunks/pages/gaSei_CdL9wd2M.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_CBAVYZiC.mjs","/src/pages/projects/hqpsec.md":"chunks/pages/hqpsec_CIV5Kksm.mjs","/src/pages/index.astro":"chunks/pages/index_B1ozt8go.mjs","/src/pages/certificates/pmp.md":"chunks/pages/pmp_Dvu6GaJo.mjs","/src/pages/certificates/sei.md":"chunks/pages/sei_DeGfJ3H5.mjs","/src/pages/projects/techmatch.md":"chunks/pages/techmatch_BdTN9ve2.mjs","/src/pages/works/work1.md":"chunks/pages/work1_C567hb0i.mjs","/src/pages/works/work2.md":"chunks/pages/work2_BzxPDMBQ.mjs","/src/pages/works/work3.md":"chunks/pages/work3_TxyOBmNL.mjs","/src/pages/works/work4.md":"chunks/pages/work4_CVNWZTx_.mjs","\u0000@astrojs-manifest":"manifest_dourBO5h.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_DtxfhQei.mjs","\u0000@astro-page:src/pages/about/about@_@md":"chunks/about_C9oBCVst.mjs","\u0000@astro-page:src/pages/blogs/blog@_@md":"chunks/blog_D05_v10I.mjs","\u0000@astro-page:src/pages/certificates/pmp@_@md":"chunks/pmp_L0e5bluJ.mjs","\u0000@astro-page:src/pages/certificates/sei@_@md":"chunks/sei_CiF47mat.mjs","\u0000@astro-page:src/pages/contact/email@_@md":"chunks/email_DSn_BUKi.mjs","\u0000@astro-page:src/pages/contact/github@_@md":"chunks/github_CB7Dn4Q-.mjs","\u0000@astro-page:src/pages/contact/linkedin@_@md":"chunks/linkedin_Dr8GAKWR.mjs","\u0000@astro-page:src/pages/more/email@_@md":"chunks/email__6GH-n1Q.mjs","\u0000@astro-page:src/pages/more/github@_@md":"chunks/github_CVBiEbEp.mjs","\u0000@astro-page:src/pages/more/linkedin@_@md":"chunks/linkedin_DqbKepD5.mjs","\u0000@astro-page:src/pages/projects/hqpsec@_@md":"chunks/hqpsec_BcE2XsKk.mjs","\u0000@astro-page:src/pages/projects/techmatch@_@md":"chunks/techmatch_6MXNy08L.mjs","\u0000@astro-page:src/pages/studies/csuGlobal@_@md":"chunks/csuGlobal_C5VBhLPF.mjs","\u0000@astro-page:src/pages/studies/csuSoc@_@md":"chunks/csuSoc_CALPgmQO.mjs","\u0000@astro-page:src/pages/studies/csuSw@_@md":"chunks/csuSw_Ba_-8RnE.mjs","\u0000@astro-page:src/pages/studies/gaSei@_@md":"chunks/gaSei_DEvfLPzD.mjs","\u0000@astro-page:src/pages/works/work1@_@md":"chunks/work1_KHwoMgDv.mjs","\u0000@astro-page:src/pages/works/work2@_@md":"chunks/work2_DOQZQ7bc.mjs","\u0000@astro-page:src/pages/works/work3@_@md":"chunks/work3_CkxGi7oD.mjs","\u0000@astro-page:src/pages/works/work4@_@md":"chunks/work4_1aShrSXP.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_BvY_ibyF.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.yzwUO3MD.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/dm-sans-latin-ext-wght-normal.C24VDuKN.woff2","/_astro/dm-sans-latin-wght-normal.B1c0Y_ic.woff2","/_astro/about.CNBjOhKV.css","/cv-20240219.pdf","/favicon.webp","/gl_flag_128x.png","/profile.webp","/snap-items.png","/snap-md.png","/snap_laptop.webp","/snap_mobile.webp","/snap_project.webp"],"buildFormat":"directory"});

export { AstroIntegrationLogger as A, Logger as L, getEventPrefix as g, levels as l, manifest };
