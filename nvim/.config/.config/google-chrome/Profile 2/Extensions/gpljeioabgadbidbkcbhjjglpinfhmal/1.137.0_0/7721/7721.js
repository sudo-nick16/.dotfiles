/*! For license information please see 7721.js.LICENSE.txt */
(self.webpackChunk_realtimeskills_universal=self.webpackChunk_realtimeskills_universal||[]).push([[7721],{33299:function(e,t,n){"use strict";var r=n(34406),o=n(14859),i=n(58921);Object.defineProperty(t,"__esModule",{value:!0});var s={useSession:!0,getSession:!0,getCsrfToken:!0,getProviders:!0,signIn:!0,signOut:!0,SessionProvider:!0};t.SessionProvider=function(e){var t=e.children,n=e.basePath;n&&(O.basePath=n);var r=void 0!==e.session;O._lastSync=r?(0,b.now)():0;var o=y.useState((function(){return r&&(O._session=e.session),e.session})),i=(0,p.default)(o,2),s=i[0],a=i[1],u=y.useState(!r),c=(0,p.default)(u,2),l=c[0],d=c[1];y.useEffect((function(){return O._getSession=(0,h.default)(f.default.mark((function e(){var t,n,r,o=arguments;return f.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=o.length>0&&void 0!==o[0]?o[0]:{},n=t.event,e.prev=1,!(r="storage"===n)&&void 0!==O._session){e.next=10;break}return O._lastSync=(0,b.now)(),e.next=7,L({broadcast:!r});case 7:return O._session=e.sent,a(O._session),e.abrupt("return");case 10:if(n&&null!==O._session&&!((0,b.now)()<O._lastSync)){e.next=12;break}return e.abrupt("return");case 12:return O._lastSync=(0,b.now)(),e.next=15,L();case 15:O._session=e.sent,a(O._session),e.next=22;break;case 19:e.prev=19,e.t0=e.catch(1),C.error("CLIENT_SESSION_ERROR",e.t0);case 22:return e.prev=22,d(!1),e.finish(22);case 25:case"end":return e.stop()}}),e,null,[[1,19,22,25]])}))),O._getSession(),function(){O._lastSync=0,O._session=void 0,O._getSession=function(){}}}),[]),y.useEffect((function(){var e=k.receive((function(){return O._getSession({event:"storage"})}));return function(){return e()}}),[]),y.useEffect((function(){var t=e.refetchOnWindowFocus,n=void 0===t||t,r=function(){n&&"visible"===document.visibilityState&&O._getSession({event:"visibilitychange"})};return document.addEventListener("visibilitychange",r,!1),function(){return document.removeEventListener("visibilitychange",r,!1)}}),[e.refetchOnWindowFocus]),y.useEffect((function(){var t=e.refetchInterval;if(t){var n=setInterval((function(){O._session&&O._getSession({event:"poll"})}),1e3*t);return function(){return clearInterval(n)}}}),[e.refetchInterval]);var v=y.useMemo((function(){return{data:s,status:l?"loading":s?"authenticated":"unauthenticated"}}),[s,l]);return(0,g.jsx)(j.Provider,{value:v,children:t})},t.getCsrfToken=R,t.getProviders=T,t.getSession=L,t.signIn=function(e,t,n){return $.apply(this,arguments)},t.signOut=function(e){return I.apply(this,arguments)},t.useSession=function(e){var t=y.useContext(j),n=null!=e?e:{},r=n.required,o=n.onUnauthenticated,i=r&&"unauthenticated"===t.status;return y.useEffect((function(){if(i){var e="/api/auth/signin?".concat(new URLSearchParams({error:"SessionRequired",callbackUrl:window.location.href}));o?o():window.location.href=e}}),[i,o]),i?{data:t.data,status:"loading"}:t};var a,u,c,l,f=o(n(77162)),d=o(n(81260)),p=o(n(51068)),h=o(n(52954)),y=x(n(2784)),v=x(n(26553)),m=o(n(30762)),b=n(29548),g=n(52322),w=n(527);function _(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(_=function(e){return e?n:t})(e)}function x(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==i(e)&&"function"!=typeof e)return{default:e};var n=_(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if("default"!==s&&Object.prototype.hasOwnProperty.call(e,s)){var a=o?Object.getOwnPropertyDescriptor(e,s):null;a&&(a.get||a.set)?Object.defineProperty(r,s,a):r[s]=e[s]}return r.default=e,n&&n.set(e,r),r}function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(Object(n),!0).forEach((function(t){(0,d.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}Object.keys(w).forEach((function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(s,e)||e in t&&t[e]===w[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return w[e]}}))}));var O={baseUrl:(0,m.default)(null!==(a=r.env.NEXTAUTH_URL)&&void 0!==a?a:r.env.VERCEL_URL).origin,basePath:(0,m.default)(r.env.NEXTAUTH_URL).path,baseUrlServer:(0,m.default)(null!==(u=null!==(c=r.env.NEXTAUTH_URL_INTERNAL)&&void 0!==c?c:r.env.NEXTAUTH_URL)&&void 0!==u?u:r.env.VERCEL_URL).origin,basePathServer:(0,m.default)(null!==(l=r.env.NEXTAUTH_URL_INTERNAL)&&void 0!==l?l:r.env.NEXTAUTH_URL).path,_lastSync:0,_session:void 0,_getSession:function(){}},k=(0,b.BroadcastChannel)(),C=(0,v.proxyLogger)(v.default,O.basePath),j=y.createContext(void 0);function L(e){return P.apply(this,arguments)}function P(){return(P=(0,h.default)(f.default.mark((function e(t){var n,r;return f.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,b.fetchData)("session",O,C,t);case 2:return r=e.sent,(null===(n=null==t?void 0:t.broadcast)||void 0===n||n)&&k.post({event:"session",data:{trigger:"getSession"}}),e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function R(e){return U.apply(this,arguments)}function U(){return(U=(0,h.default)(f.default.mark((function e(t){var n;return f.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,b.fetchData)("csrf",O,C,t);case 2:return n=e.sent,e.abrupt("return",null==n?void 0:n.csrfToken);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(){return A.apply(this,arguments)}function A(){return(A=(0,h.default)(f.default.mark((function e(){return f.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,b.fetchData)("providers",O,C);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function $(){return($=(0,h.default)(f.default.mark((function e(t,n,r){var o,i,s,a,u,c,l,d,p,h,y,v,m,g,w,_,x;return f.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=(o=null!=n?n:{}).callbackUrl,s=void 0===i?window.location.href:i,a=o.redirect,u=void 0===a||a,c=(0,b.apiBaseUrl)(O),e.next=4,T();case 4:if(l=e.sent){e.next=8;break}return window.location.href="".concat(c,"/error"),e.abrupt("return");case 8:if(t&&t in l){e.next=11;break}return window.location.href="".concat(c,"/signin?").concat(new URLSearchParams({callbackUrl:s})),e.abrupt("return");case 11:return d="credentials"===l[t].type,p="email"===l[t].type,h=d||p,y="".concat(c,"/").concat(d?"callback":"signin","/").concat(t),v="".concat(y,"?").concat(new URLSearchParams(r)),e.t0=fetch,e.t1=v,e.t2={"Content-Type":"application/x-www-form-urlencoded"},e.t3=URLSearchParams,e.t4=E,e.t5=E({},n),e.t6={},e.next=25,R();case 25:return e.t7=e.sent,e.t8=s,e.t9={csrfToken:e.t7,callbackUrl:e.t8,json:!0},e.t10=(0,e.t4)(e.t5,e.t6,e.t9),e.t11=new e.t3(e.t10),e.t12={method:"post",headers:e.t2,body:e.t11},e.next=33,(0,e.t0)(e.t1,e.t12);case 33:return m=e.sent,e.next=36,m.json();case 36:if(g=e.sent,!u&&h){e.next=42;break}return _=null!==(w=g.url)&&void 0!==w?w:s,window.location.href=_,_.includes("#")&&window.location.reload(),e.abrupt("return");case 42:if(x=new URL(g.url).searchParams.get("error"),!m.ok){e.next=46;break}return e.next=46,O._getSession({event:"storage"});case 46:return e.abrupt("return",{error:x,status:m.status,ok:m.ok,url:x?null:g.url});case 47:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(){return(I=(0,h.default)(f.default.mark((function e(t){var n,r,o,i,s,a,u,c,l;return f.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=(null!=t?t:{}).callbackUrl,o=void 0===r?window.location.href:r,i=(0,b.apiBaseUrl)(O),e.t0={"Content-Type":"application/x-www-form-urlencoded"},e.t1=URLSearchParams,e.next=6,R();case 6:return e.t2=e.sent,e.t3=o,e.t4={csrfToken:e.t2,callbackUrl:e.t3,json:!0},e.t5=new e.t1(e.t4),s={method:"post",headers:e.t0,body:e.t5},e.next=13,fetch("".concat(i,"/signout"),s);case 13:return a=e.sent,e.next=16,a.json();case 16:if(u=e.sent,k.post({event:"session",data:{trigger:"signout"}}),null!==(n=null==t?void 0:t.redirect)&&void 0!==n&&!n){e.next=23;break}return l=null!==(c=u.url)&&void 0!==c?c:o,window.location.href=l,l.includes("#")&&window.location.reload(),e.abrupt("return");case 23:return e.next=25,O._getSession({event:"storage"});case 25:return e.abrupt("return",u);case 26:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},77162:function(e,t,n){e.exports=n(25047)},64153:function(e,t,n){"use strict";function r(){return null}n.d(t,{t:function(){return r}})},6556:function(e,t,n){!function(e,t,n){"use strict";var r=function(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(n){if("default"!==n){var r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return e[n]}})}})),t.default=e,Object.freeze(t)}(t);class o{constructor(){this.listeners=[],this.subscribe=this.subscribe.bind(this)}subscribe(e){return this.listeners.push(e),this.onSubscribe(),()=>{this.listeners=this.listeners.filter((t=>t!==e)),this.onUnsubscribe()}}hasListeners(){return this.listeners.length>0}onSubscribe(){}onUnsubscribe(){}}const i="undefined"==typeof window;function s(e){return e.state.isPaused}function a(e){return"success"===e.state.status}function u(e,t={}){const n=[],r=[];if(!1!==t.dehydrateMutations){const r=t.shouldDehydrateMutation||s;e.getMutationCache().getAll().forEach((e=>{r(e)&&n.push(function(e){return{mutationKey:e.options.mutationKey,state:e.state}}(e))}))}if(!1!==t.dehydrateQueries){const n=t.shouldDehydrateQuery||a;e.getQueryCache().getAll().forEach((e=>{n(e)&&r.push(function(e){return{state:e.state,queryKey:e.queryKey,queryHash:e.queryHash}}(e))}))}return{mutations:n,queries:r}}async function c({queryClient:e,persister:t,maxAge:n=864e5,buster:r="",hydrateOptions:o}){try{const i=await t.restoreClient();if(i)if(i.timestamp){const s=Date.now()-i.timestamp>n,a=i.buster!==r;s||a?t.removeClient():function(e,t,n){if("object"!=typeof t||null===t)return;const r=e.getMutationCache(),o=e.getQueryCache(),i=t.mutations||[],s=t.queries||[];i.forEach((t=>{var o;r.build(e,{...null==n||null==(o=n.defaultOptions)?void 0:o.mutations,mutationKey:t.mutationKey},t.state)})),s.forEach((t=>{var r;const i=o.get(t.queryHash);i?i.state.dataUpdatedAt<t.state.dataUpdatedAt&&i.setState(t.state):o.build(e,{...null==n||null==(r=n.defaultOptions)?void 0:r.queries,queryKey:t.queryKey,queryHash:t.queryHash},t.state)}))}(e,i.clientState,o)}else t.removeClient()}catch(e){t.removeClient()}}async function l({queryClient:e,persister:t,buster:n="",dehydrateOptions:r}){const o={buster:n,timestamp:Date.now(),clientState:u(e,r)};await t.persistClient(o)}function f(e){const t=e.queryClient.getQueryCache().subscribe((()=>{l(e)})),n=e.queryClient.getMutationCache().subscribe((()=>{l(e)}));return()=>{t(),n()}}function d(e){let t,n=!1;return[()=>{n=!0,null==t||t()},c(e).then((()=>{n||(t=f(e))}))]}function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(this,arguments)}new class extends o{constructor(){super(),this.setup=e=>{if(!i&&window.addEventListener){const t=()=>e();return window.addEventListener("visibilitychange",t,!1),window.addEventListener("focus",t,!1),()=>{window.removeEventListener("visibilitychange",t),window.removeEventListener("focus",t)}}}}onSubscribe(){this.cleanup||this.setEventListener(this.setup)}onUnsubscribe(){var e;this.hasListeners()||(null==(e=this.cleanup)||e.call(this),this.cleanup=void 0)}setEventListener(e){var t;this.setup=e,null==(t=this.cleanup)||t.call(this),this.cleanup=e((e=>{"boolean"==typeof e?this.setFocused(e):this.onFocus()}))}setFocused(e){this.focused=e,e&&this.onFocus()}onFocus(){this.listeners.forEach((e=>{e()}))}isFocused(){return"boolean"==typeof this.focused?this.focused:"undefined"==typeof document||[void 0,"visible","prerender"].includes(document.visibilityState)}},new class extends o{constructor(){super(),this.setup=e=>{if(!i&&window.addEventListener){const t=()=>e();return window.addEventListener("online",t,!1),window.addEventListener("offline",t,!1),()=>{window.removeEventListener("online",t),window.removeEventListener("offline",t)}}}}onSubscribe(){this.cleanup||this.setEventListener(this.setup)}onUnsubscribe(){var e;this.hasListeners()||(null==(e=this.cleanup)||e.call(this),this.cleanup=void 0)}setEventListener(e){var t;this.setup=e,null==(t=this.cleanup)||t.call(this),this.cleanup=e((e=>{"boolean"==typeof e?this.setOnline(e):this.onOnline()}))}setOnline(e){this.online=e,e&&this.onOnline()}onOnline(){this.listeners.forEach((e=>{e()}))}isOnline(){return"boolean"==typeof this.online?this.online:"undefined"==typeof navigator||void 0===navigator.onLine||navigator.onLine}},e.PersistQueryClientProvider=({client:e,children:t,persistOptions:o,onSuccess:i,...s})=>{const[a,u]=r.useState(!0),c=r.useRef({persistOptions:o,onSuccess:i});return r.useEffect((()=>{c.current={persistOptions:o,onSuccess:i}})),r.useEffect((()=>{let t=!1;u(!0);const[n,r]=d({...c.current.persistOptions,queryClient:e});return r.then((()=>{t||(null==c.current.onSuccess||c.current.onSuccess(),u(!1))})),()=>{t=!0,n()}}),[e]),r.createElement(n.QueryClientProvider,p({client:e},s),r.createElement(n.IsRestoringProvider,{value:a},t))},e.persistQueryClient=d,e.persistQueryClientRestore=c,e.persistQueryClientSave=l,e.persistQueryClientSubscribe=f,e.removeOldestQuery=({persistedClient:e})=>{const t=[...e.clientState.mutations],n=[...e.clientState.queries],r={...e,clientState:{mutations:t,queries:n}},o=[...n].sort(((e,t)=>e.state.dataUpdatedAt-t.state.dataUpdatedAt));if(o.length>0){const e=o.shift();return r.clientState.queries=n.filter((t=>t!==e)),r}},Object.defineProperty(e,"__esModule",{value:!0})}(t,n(2784),n(60431))},82609:function(e){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(o[s]=!0)}for(var a=0;a<e.length;a++){var u=[].concat(e[a]);r&&o[u[0]]||(n&&(u[2]?u[2]="".concat(n," and ").concat(u[2]):u[2]=n),t.push(u))}},t}},1799:function(e){"use strict";function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}e.exports=function(e){var n,r,o=(r=4,function(e){if(Array.isArray(e))return e}(n=e)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=n){var r,o,i=[],s=!0,a=!1;try{for(n=n.call(e);!(s=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);s=!0);}catch(e){a=!0,o=e}finally{try{s||null==n.return||n.return()}finally{if(a)throw o}}return i}}(n,r)||function(e,n){if(e){if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,n):void 0}}(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=o[1],s=o[3];if(!s)return i;if("function"==typeof btoa){var a=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),c="/*# ".concat(u," */"),l=s.sources.map((function(e){return"/*# sourceURL=".concat(s.sourceRoot||"").concat(e," */")}));return[i].concat(l).concat([c]).join("\n")}return[i].join("\n")}},28316:function(e,t,n){"use strict";var r=n(23716);!function e(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(e){r.error(e)}}(),e.exports=n(52967)},83426:function(e,t){"use strict";var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),u=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),p=Symbol.iterator,h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,v={};function m(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||h}function b(){}function g(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||h}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=m.prototype;var w=g.prototype=new b;w.constructor=g,y(w,m.prototype),w.isPureReactComponent=!0;var _=Array.isArray,x=Object.prototype.hasOwnProperty,S={current:null},E={key:!0,ref:!0,__self:!0,__source:!0};function O(e,t,r){var o,i={},s=null,a=null;if(null!=t)for(o in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(s=""+t.key),t)x.call(t,o)&&!E.hasOwnProperty(o)&&(i[o]=t[o]);var u=arguments.length-2;if(1===u)i.children=r;else if(1<u){for(var c=Array(u),l=0;l<u;l++)c[l]=arguments[l+2];i.children=c}if(e&&e.defaultProps)for(o in u=e.defaultProps)void 0===i[o]&&(i[o]=u[o]);return{$$typeof:n,type:e,key:s,ref:a,props:i,_owner:S.current}}function k(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var C=/\/+/g;function j(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function L(e,t,o,i,s){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var u=!1;if(null===e)u=!0;else switch(a){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case n:case r:u=!0}}if(u)return s=s(u=e),e=""===i?"."+j(u,0):i,_(s)?(o="",null!=e&&(o=e.replace(C,"$&/")+"/"),L(s,t,o,"",(function(e){return e}))):null!=s&&(k(s)&&(s=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,o+(!s.key||u&&u.key===s.key?"":(""+s.key).replace(C,"$&/")+"/")+e)),t.push(s)),1;if(u=0,i=""===i?".":i+":",_(e))for(var c=0;c<e.length;c++){var l=i+j(a=e[c],c);u+=L(a,t,o,l,s)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),c=0;!(a=e.next()).done;)u+=L(a=a.value,t,o,l=i+j(a,c++),s);else if("object"===a)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return u}function P(e,t,n){if(null==e)return e;var r=[],o=0;return L(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function R(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var U={current:null},T={transition:null},A={ReactCurrentDispatcher:U,ReactCurrentBatchConfig:T,ReactCurrentOwner:S};t.Children={map:P,forEach:function(e,t,n){P(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return P(e,(function(){t++})),t},toArray:function(e){return P(e,(function(e){return e}))||[]},only:function(e){if(!k(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=m,t.Fragment=o,t.Profiler=s,t.PureComponent=g,t.StrictMode=i,t.Suspense=l,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A,t.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=y({},e.props),i=e.key,s=e.ref,a=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,a=S.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(c in t)x.call(t,c)&&!E.hasOwnProperty(c)&&(o[c]=void 0===t[c]&&void 0!==u?u[c]:t[c])}var c=arguments.length-2;if(1===c)o.children=r;else if(1<c){u=Array(c);for(var l=0;l<c;l++)u[l]=arguments[l+2];o.children=u}return{$$typeof:n,type:e.type,key:i,ref:s,props:o,_owner:a}},t.createContext=function(e){return(e={$$typeof:u,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},t.createElement=O,t.createFactory=function(e){var t=O.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=k,t.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:R}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=T.transition;T.transition={};try{e()}finally{T.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return U.current.useCallback(e,t)},t.useContext=function(e){return U.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return U.current.useDeferredValue(e)},t.useEffect=function(e,t){return U.current.useEffect(e,t)},t.useId=function(){return U.current.useId()},t.useImperativeHandle=function(e,t,n){return U.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return U.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return U.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return U.current.useMemo(e,t)},t.useReducer=function(e,t,n){return U.current.useReducer(e,t,n)},t.useRef=function(e){return U.current.useRef(e)},t.useState=function(e){return U.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return U.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return U.current.useTransition()},t.version="18.2.0"},2784:function(e,t,n){"use strict";e.exports=n(83426)},52322:function(e,t,n){"use strict";e.exports=n(11837)},46062:function(e,t,n){"use strict";var r,o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function s(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function a(e,t){for(var n={},r=[],o=0;o<e.length;o++){var a=e[o],u=t.base?a[0]+t.base:a[0],c=n[u]||0,l="".concat(u," ").concat(c);n[u]=c+1;var f=s(l),d={css:a[1],media:a[2],sourceMap:a[3]};-1!==f?(i[f].references++,i[f].updater(d)):i.push({identifier:l,updater:y(d,t),references:1}),r.push(l)}return r}function u(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var s=o(e.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(t)}return t}var c,l=(c=[],function(e,t){return c[e]=t,c.filter(Boolean).join("\n")});function f(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=l(t,o);else{var i=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}function d(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var p=null,h=0;function y(e,t){var n,r,o;if(t.singleton){var i=h++;n=p||(p=u(t)),r=f.bind(null,n,i,!1),o=f.bind(null,n,i,!0)}else n=u(t),r=d.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=a(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=s(n[r]);i[o].references--}for(var u=a(e,t),c=0;c<n.length;c++){var l=s(n[c]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}n=u}}}},91738:function(e,t,n){"use strict";n.d(t,{x7:function(){return D}});var r=n(2784),o=n(52551),i=(e,t)=>(e=>"function"==typeof e)(e)?e(t):e,s=(()=>{let e=0;return()=>(++e).toString()})(),a=(()=>{let e;return()=>{if(void 0===e&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),u=new Map,c=e=>{if(u.has(e))return;let t=setTimeout((()=>{u.delete(e),p({type:4,toastId:e})}),1e3);u.set(e,t)},l=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&(e=>{let t=u.get(e);t&&clearTimeout(t)})(t.toast.id),{...e,toasts:e.toasts.map((e=>e.id===t.toast.id?{...e,...t.toast}:e))};case 2:let{toast:n}=t;return e.toasts.find((e=>e.id===n.id))?l(e,{type:1,toast:n}):l(e,{type:0,toast:n});case 3:let{toastId:r}=t;return r?c(r):e.toasts.forEach((e=>{c(e.id)})),{...e,toasts:e.toasts.map((e=>e.id===r||void 0===r?{...e,visible:!1}:e))};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter((e=>e.id!==t.toastId))};case 5:return{...e,pausedAt:t.time};case 6:let o=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map((e=>({...e,pauseDuration:e.pauseDuration+o})))}}},f=[],d={toasts:[],pausedAt:void 0},p=e=>{d=l(d,e),f.forEach((e=>{e(d)}))},h={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},y=e=>(t,n)=>{let r=((e,t="blank",n)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...n,id:(null==n?void 0:n.id)||s()}))(t,e,n);return p({type:2,toast:r}),r.id},v=(e,t)=>y("blank")(e,t);v.error=y("error"),v.success=y("success"),v.loading=y("loading"),v.custom=y("custom"),v.dismiss=e=>{p({type:3,toastId:e})},v.remove=e=>p({type:4,toastId:e}),v.promise=(e,t,n)=>{let r=v.loading(t.loading,{...n,...null==n?void 0:n.loading});return e.then((e=>(v.success(i(t.success,e),{id:r,...n,...null==n?void 0:n.success}),e))).catch((e=>{v.error(i(t.error,e),{id:r,...n,...null==n?void 0:n.error})})),e};var m=o.F4`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,b=o.F4`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,g=o.F4`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,w=(0,o.zo)("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${m} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${b} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${g} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,_=o.F4`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,x=(0,o.zo)("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${_} 1s linear infinite;
`,S=o.F4`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,E=o.F4`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,O=(0,o.zo)("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${S} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${E} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,k=(0,o.zo)("div")`
  position: absolute;
`,C=(0,o.zo)("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,j=o.F4`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,L=(0,o.zo)("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${j} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,P=({toast:e})=>{let{icon:t,type:n,iconTheme:o}=e;return void 0!==t?"string"==typeof t?r.createElement(L,null,t):t:"blank"===n?null:r.createElement(C,null,r.createElement(x,{...o}),"loading"!==n&&r.createElement(k,null,"error"===n?r.createElement(w,{...o}):r.createElement(O,{...o})))},R=e=>`\n0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n`,U=e=>`\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}\n`,T=(0,o.zo)("div",r.forwardRef)`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,A=(0,o.zo)("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,$=r.memo((({toast:e,position:t,style:n,children:s})=>{let u=null!=e&&e.height?((e,t)=>{let n=e.includes("top")?1:-1,[r,i]=a()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[R(n),U(n)];return{animation:t?`${(0,o.F4)(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${(0,o.F4)(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(e.position||t||"top-center",e.visible):{opacity:0},c=r.createElement(P,{toast:e}),l=r.createElement(A,{...e.ariaProps},i(e.message,e));return r.createElement(T,{className:e.className,style:{...u,...n,...e.style}},"function"==typeof s?s({icon:c,message:l}):r.createElement(r.Fragment,null,c,l))}));(0,o.cY)(r.createElement);var I=o.iv`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,D=({reverseOrder:e,position:t="top-center",toastOptions:n,gutter:o,children:s,containerStyle:u,containerClassName:c})=>{let{toasts:l,handlers:y}=(e=>{let{toasts:t,pausedAt:n}=((e={})=>{let[t,n]=(0,r.useState)(d);(0,r.useEffect)((()=>(f.push(n),()=>{let e=f.indexOf(n);e>-1&&f.splice(e,1)})),[t]);let o=t.toasts.map((t=>{var n,r;return{...e,...e[t.type],...t,duration:t.duration||(null==(n=e[t.type])?void 0:n.duration)||(null==e?void 0:e.duration)||h[t.type],style:{...e.style,...null==(r=e[t.type])?void 0:r.style,...t.style}}}));return{...t,toasts:o}})(e);(0,r.useEffect)((()=>{if(n)return;let e=Date.now(),r=t.map((t=>{if(t.duration===1/0)return;let n=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(!(n<0))return setTimeout((()=>v.dismiss(t.id)),n);t.visible&&v.dismiss(t.id)}));return()=>{r.forEach((e=>e&&clearTimeout(e)))}}),[t,n]);let o=(0,r.useMemo)((()=>({startPause:()=>{p({type:5,time:Date.now()})},endPause:()=>{n&&p({type:6,time:Date.now()})},updateHeight:(e,t)=>p({type:1,toast:{id:e,height:t}}),calculateOffset:(e,n)=>{let{reverseOrder:r=!1,gutter:o=8,defaultPosition:i}=n||{},s=t.filter((t=>(t.position||i)===(e.position||i)&&t.height)),a=s.findIndex((t=>t.id===e.id)),u=s.filter(((e,t)=>t<a&&e.visible)).length;return s.filter((e=>e.visible)).slice(...r?[u+1]:[0,u]).reduce(((e,t)=>e+(t.height||0)+o),0)}})),[t,n]);return{toasts:t,handlers:o}})(n);return r.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...u},className:c,onMouseEnter:y.startPause,onMouseLeave:y.endPause},l.map((n=>{let u=n.position||t,c=((e,t)=>{let n=e.includes("top"),r=n?{top:0}:{bottom:0},o=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:a()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(n?1:-1)}px)`,...r,...o}})(u,y.calculateOffset(n,{reverseOrder:e,gutter:o,defaultPosition:t})),l=n.height?void 0:e=>{e&&setTimeout((()=>{let t=e.getBoundingClientRect();var r;r=t,y.updateHeight(n.id,r.height)}))};return r.createElement("div",{ref:l,className:n.visible?I:"",key:n.id,style:c},"custom"===n.type?i(n.message,n):s?s(n):r.createElement($,{toast:n,position:u}))})))}}}]);
//# sourceMappingURL=7721.js.map