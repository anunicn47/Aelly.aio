(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{110:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return h}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=o.a.createContext({}),s=function(e){var t=o.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=s(r),b=n,h=p["".concat(a,".").concat(b)]||p[b]||d[b]||i;return r?o.a.createElement(h,l(l({ref:t},c),{},{components:r})):o.a.createElement(h,l({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=b;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},88:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return s}));var n=r(3),o=r(7),i=(r(0),r(110)),a={id:"intro",title:"Ultroid",sidebar_label:"Introduction",slug:"/"},l={unversionedId:"ultroid/intro",id:"ultroid/intro",isDocsHomePage:!1,title:"Ultroid",description:"Ultroid is a pluggable telegram userbot, made in python using Telethon!",source:"@site/docs/ultroid/intro.md",slug:"/",permalink:"/docs/",version:"current",sidebar_label:"Introduction",sidebar:"sidebar",next:{title:"Deploy to Heroku",permalink:"/docs/installation/heroku"}},u=[{value:"1. Built From Scratch",id:"1-built-from-scratch",children:[]},{value:"2. Better Error Handling",id:"2-better-error-handling",children:[]},{value:"3. Lightweight",id:"3-lightweight",children:[]},{value:"4. Install any plugin",id:"4-install-any-plugin",children:[]},{value:"5. Safety First",id:"5-safety-first",children:[]},{value:"6. Multi-Language Support",id:"6-multi-language-support",children:[]},{value:"7. Many Cool Features",id:"7-many-cool-features",children:[]},{value:"8. py-Ultroid",id:"8-py-ultroid",children:[]}],c={toc:u};function s(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Ultroid is a pluggable telegram userbot, made in python using Telethon!"),Object(i.b)("h1",{id:"why-ultroid-"},"Why Ultroid ?"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"1-built-from-scratch"},"1. Built From Scratch"),Object(i.b)("p",null,"Ultroid has been written from scratch, making it more stable and less of crashes."),Object(i.b)("h3",{id:"2-better-error-handling"},"2. Better Error Handling"),Object(i.b)("p",null,"Error handling been done in the best way possible, such that the bot doesn't crash and stop all of a sudden."),Object(i.b)("h3",{id:"3-lightweight"},"3. Lightweight"),Object(i.b)("p",null,"Ultroid has minimal amount of plugins (just the necessary ones) in the main repository, and all the other less-usefull stuff in the addons repository. This facilitates quick deployments and lag free use."),Object(i.b)("h3",{id:"4-install-any-plugin"},"4. Install any plugin"),Object(i.b)("p",null,"Ultroid can install any plugin from the most of the other 'userbots' without any issue."),Object(i.b)("h3",{id:"5-safety-first"},"5. Safety First"),Object(i.b)("p",null,"Ultroid warns you when you try to install/execute dangerous stuff (people nowadays make plugins to hack user accounts, Ultroid is safe)"),Object(i.b)("h3",{id:"6-multi-language-support"},"6. Multi-Language Support"),Object(i.b)("p",null,"Currently We Have 22 Language Support, More will be added Soon \ud83d\ude01."),Object(i.b)("h3",{id:"7-many-cool-features"},"7. Many Cool Features"),Object(i.b)("h3",{id:"8-py-ultroid"},"8. py-Ultroid"),Object(i.b)("p",null,"We have managed to pack the core into a pip package, Check it out ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://pypi.org/project/py-Ultroid/"}),Object(i.b)("inlineCode",{parentName:"a"},"py-Ultroid")),"."))}s.isMDXComponent=!0}}]);