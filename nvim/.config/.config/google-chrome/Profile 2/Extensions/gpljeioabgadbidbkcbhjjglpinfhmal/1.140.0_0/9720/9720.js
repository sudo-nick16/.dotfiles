/*! For license information please see 9720.js.LICENSE.txt */
(self.webpackChunk_realtimeskills_universal=self.webpackChunk_realtimeskills_universal||[]).push([[9720],{77162:function(e,t,r){e.exports=r(25047)},64153:function(e,t,r){"use strict";function n(){return null}r.d(t,{t:function(){return n}})},6556:function(e,t,r){!function(e,t,r){"use strict";var n=function(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(r){if("default"!==r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})}})),t.default=e,Object.freeze(t)}(t);class o{constructor(){this.listeners=[],this.subscribe=this.subscribe.bind(this)}subscribe(e){return this.listeners.push(e),this.onSubscribe(),()=>{this.listeners=this.listeners.filter((t=>t!==e)),this.onUnsubscribe()}}hasListeners(){return this.listeners.length>0}onSubscribe(){}onUnsubscribe(){}}const i="undefined"==typeof window;function s(e){return e.state.isPaused}function a(e){return"success"===e.state.status}function u(e,t={}){const r=[],n=[];if(!1!==t.dehydrateMutations){const n=t.shouldDehydrateMutation||s;e.getMutationCache().getAll().forEach((e=>{n(e)&&r.push(function(e){return{mutationKey:e.options.mutationKey,state:e.state}}(e))}))}if(!1!==t.dehydrateQueries){const r=t.shouldDehydrateQuery||a;e.getQueryCache().getAll().forEach((e=>{r(e)&&n.push(function(e){return{state:e.state,queryKey:e.queryKey,queryHash:e.queryHash}}(e))}))}return{mutations:r,queries:n}}async function c({queryClient:e,persister:t,maxAge:r=864e5,buster:n="",hydrateOptions:o}){try{const i=await t.restoreClient();if(i)if(i.timestamp){const s=Date.now()-i.timestamp>r,a=i.buster!==n;s||a?t.removeClient():function(e,t,r){if("object"!=typeof t||null===t)return;const n=e.getMutationCache(),o=e.getQueryCache(),i=t.mutations||[],s=t.queries||[];i.forEach((t=>{var o;n.build(e,{...null==r||null==(o=r.defaultOptions)?void 0:o.mutations,mutationKey:t.mutationKey},t.state)})),s.forEach((t=>{var n;const i=o.get(t.queryHash);i?i.state.dataUpdatedAt<t.state.dataUpdatedAt&&i.setState(t.state):o.build(e,{...null==r||null==(n=r.defaultOptions)?void 0:n.queries,queryKey:t.queryKey,queryHash:t.queryHash},t.state)}))}(e,i.clientState,o)}else t.removeClient()}catch(e){t.removeClient()}}async function l({queryClient:e,persister:t,buster:r="",dehydrateOptions:n}){const o={buster:r,timestamp:Date.now(),clientState:u(e,n)};await t.persistClient(o)}function f(e){const t=e.queryClient.getQueryCache().subscribe((()=>{l(e)})),r=e.queryClient.getMutationCache().subscribe((()=>{l(e)}));return()=>{t(),r()}}function d(e){let t,r=!1;return[()=>{r=!0,null==t||t()},c(e).then((()=>{r||(t=f(e))}))]}function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},p.apply(this,arguments)}new class extends o{constructor(){super(),this.setup=e=>{if(!i&&window.addEventListener){const t=()=>e();return window.addEventListener("visibilitychange",t,!1),window.addEventListener("focus",t,!1),()=>{window.removeEventListener("visibilitychange",t),window.removeEventListener("focus",t)}}}}onSubscribe(){this.cleanup||this.setEventListener(this.setup)}onUnsubscribe(){var e;this.hasListeners()||(null==(e=this.cleanup)||e.call(this),this.cleanup=void 0)}setEventListener(e){var t;this.setup=e,null==(t=this.cleanup)||t.call(this),this.cleanup=e((e=>{"boolean"==typeof e?this.setFocused(e):this.onFocus()}))}setFocused(e){this.focused=e,e&&this.onFocus()}onFocus(){this.listeners.forEach((e=>{e()}))}isFocused(){return"boolean"==typeof this.focused?this.focused:"undefined"==typeof document||[void 0,"visible","prerender"].includes(document.visibilityState)}},new class extends o{constructor(){super(),this.setup=e=>{if(!i&&window.addEventListener){const t=()=>e();return window.addEventListener("online",t,!1),window.addEventListener("offline",t,!1),()=>{window.removeEventListener("online",t),window.removeEventListener("offline",t)}}}}onSubscribe(){this.cleanup||this.setEventListener(this.setup)}onUnsubscribe(){var e;this.hasListeners()||(null==(e=this.cleanup)||e.call(this),this.cleanup=void 0)}setEventListener(e){var t;this.setup=e,null==(t=this.cleanup)||t.call(this),this.cleanup=e((e=>{"boolean"==typeof e?this.setOnline(e):this.onOnline()}))}setOnline(e){this.online=e,e&&this.onOnline()}onOnline(){this.listeners.forEach((e=>{e()}))}isOnline(){return"boolean"==typeof this.online?this.online:"undefined"==typeof navigator||void 0===navigator.onLine||navigator.onLine}},e.PersistQueryClientProvider=({client:e,children:t,persistOptions:o,onSuccess:i,...s})=>{const[a,u]=n.useState(!0),c=n.useRef({persistOptions:o,onSuccess:i});return n.useEffect((()=>{c.current={persistOptions:o,onSuccess:i}})),n.useEffect((()=>{let t=!1;u(!0);const[r,n]=d({...c.current.persistOptions,queryClient:e});return n.then((()=>{t||(null==c.current.onSuccess||c.current.onSuccess(),u(!1))})),()=>{t=!0,r()}}),[e]),n.createElement(r.QueryClientProvider,p({client:e},s),n.createElement(r.IsRestoringProvider,{value:a},t))},e.persistQueryClient=d,e.persistQueryClientRestore=c,e.persistQueryClientSave=l,e.persistQueryClientSubscribe=f,e.removeOldestQuery=({persistedClient:e})=>{const t=[...e.clientState.mutations],r=[...e.clientState.queries],n={...e,clientState:{mutations:t,queries:r}},o=[...r].sort(((e,t)=>e.state.dataUpdatedAt-t.state.dataUpdatedAt));if(o.length>0){const e=o.shift();return n.clientState.queries=r.filter((t=>t!==e)),n}},Object.defineProperty(e,"__esModule",{value:!0})}(t,r(2784),r(60431))},82609:function(e){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r=e(t);return t[2]?"@media ".concat(t[2]," {").concat(r,"}"):r})).join("")},t.i=function(e,r,n){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(n)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(o[s]=!0)}for(var a=0;a<e.length;a++){var u=[].concat(e[a]);n&&o[u[0]]||(r&&(u[2]?u[2]="".concat(r," and ").concat(u[2]):u[2]=r),t.push(u))}},t}},1799:function(e){"use strict";function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}e.exports=function(e){var r,n,o=(n=4,function(e){if(Array.isArray(e))return e}(r=e)||function(e,t){var r=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=r){var n,o,i=[],s=!0,a=!1;try{for(r=r.call(e);!(s=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);s=!0);}catch(e){a=!0,o=e}finally{try{s||null==r.return||r.return()}finally{if(a)throw o}}return i}}(r,n)||function(e,r){if(e){if("string"==typeof e)return t(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?t(e,r):void 0}}(r,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=o[1],s=o[3];if(!s)return i;if("function"==typeof btoa){var a=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),c="/*# ".concat(u," */"),l=s.sources.map((function(e){return"/*# sourceURL=".concat(s.sourceRoot||"").concat(e," */")}));return[i].concat(l).concat([c]).join("\n")}return[i].join("\n")}},28316:function(e,t,r){"use strict";var n=r(23716);!function e(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(e){n.error(e)}}(),e.exports=r(52967)},83426:function(e,t){"use strict";var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),u=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),p=Symbol.iterator,y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,m={};function b(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||y}function v(){}function g(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||y}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=b.prototype;var w=g.prototype=new v;w.constructor=g,h(w,b.prototype),w.isPureReactComponent=!0;var E=Array.isArray,x=Object.prototype.hasOwnProperty,_={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function O(e,t,n){var o,i={},s=null,a=null;if(null!=t)for(o in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(s=""+t.key),t)x.call(t,o)&&!S.hasOwnProperty(o)&&(i[o]=t[o]);var u=arguments.length-2;if(1===u)i.children=n;else if(1<u){for(var c=Array(u),l=0;l<u;l++)c[l]=arguments[l+2];i.children=c}if(e&&e.defaultProps)for(o in u=e.defaultProps)void 0===i[o]&&(i[o]=u[o]);return{$$typeof:r,type:e,key:s,ref:a,props:i,_owner:_.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var j=/\/+/g;function k(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function $(e,t,o,i,s){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var u=!1;if(null===e)u=!0;else switch(a){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case r:case n:u=!0}}if(u)return s=s(u=e),e=""===i?"."+k(u,0):i,E(s)?(o="",null!=e&&(o=e.replace(j,"$&/")+"/"),$(s,t,o,"",(function(e){return e}))):null!=s&&(C(s)&&(s=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,o+(!s.key||u&&u.key===s.key?"":(""+s.key).replace(j,"$&/")+"/")+e)),t.push(s)),1;if(u=0,i=""===i?".":i+":",E(e))for(var c=0;c<e.length;c++){var l=i+k(a=e[c],c);u+=$(a,t,o,l,s)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),c=0;!(a=e.next()).done;)u+=$(a=a.value,t,o,l=i+k(a,c++),s);else if("object"===a)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return u}function L(e,t,r){if(null==e)return e;var n=[],o=0;return $(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function A(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var R={current:null},P={transition:null},T={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:P,ReactCurrentOwner:_};t.Children={map:L,forEach:function(e,t,r){L(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return L(e,(function(){t++})),t},toArray:function(e){return L(e,(function(e){return e}))||[]},only:function(e){if(!C(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=b,t.Fragment=o,t.Profiler=s,t.PureComponent=g,t.StrictMode=i,t.Suspense=l,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,t.cloneElement=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=h({},e.props),i=e.key,s=e.ref,a=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,a=_.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(c in t)x.call(t,c)&&!S.hasOwnProperty(c)&&(o[c]=void 0===t[c]&&void 0!==u?u[c]:t[c])}var c=arguments.length-2;if(1===c)o.children=n;else if(1<c){u=Array(c);for(var l=0;l<c;l++)u[l]=arguments[l+2];o.children=u}return{$$typeof:r,type:e.type,key:i,ref:s,props:o,_owner:a}},t.createContext=function(e){return(e={$$typeof:u,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},t.createElement=O,t.createFactory=function(e){var t=O.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:A}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=P.transition;P.transition={};try{e()}finally{P.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return R.current.useCallback(e,t)},t.useContext=function(e){return R.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return R.current.useDeferredValue(e)},t.useEffect=function(e,t){return R.current.useEffect(e,t)},t.useId=function(){return R.current.useId()},t.useImperativeHandle=function(e,t,r){return R.current.useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return R.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return R.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return R.current.useMemo(e,t)},t.useReducer=function(e,t,r){return R.current.useReducer(e,t,r)},t.useRef=function(e){return R.current.useRef(e)},t.useState=function(e){return R.current.useState(e)},t.useSyncExternalStore=function(e,t,r){return R.current.useSyncExternalStore(e,t,r)},t.useTransition=function(){return R.current.useTransition()},t.version="18.2.0"},2784:function(e,t,r){"use strict";e.exports=r(83426)},46062:function(e,t,r){"use strict";var n,o=function(){var e={};return function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}e[t]=r}return e[t]}}(),i=[];function s(e){for(var t=-1,r=0;r<i.length;r++)if(i[r].identifier===e){t=r;break}return t}function a(e,t){for(var r={},n=[],o=0;o<e.length;o++){var a=e[o],u=t.base?a[0]+t.base:a[0],c=r[u]||0,l="".concat(u," ").concat(c);r[u]=c+1;var f=s(l),d={css:a[1],media:a[2],sourceMap:a[3]};-1!==f?(i[f].references++,i[f].updater(d)):i.push({identifier:l,updater:h(d,t),references:1}),n.push(l)}return n}function u(e){var t=document.createElement("style"),n=e.attributes||{};if(void 0===n.nonce){var i=r.nc;i&&(n.nonce=i)}if(Object.keys(n).forEach((function(e){t.setAttribute(e,n[e])})),"function"==typeof e.insert)e.insert(t);else{var s=o(e.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(t)}return t}var c,l=(c=[],function(e,t){return c[e]=t,c.filter(Boolean).join("\n")});function f(e,t,r,n){var o=r?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(e.styleSheet)e.styleSheet.cssText=l(t,o);else{var i=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}function d(e,t,r){var n=r.css,o=r.media,i=r.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var p=null,y=0;function h(e,t){var r,n,o;if(t.singleton){var i=y++;r=p||(p=u(t)),n=f.bind(null,r,i,!1),o=f.bind(null,r,i,!0)}else r=u(t),n=d.bind(null,r,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n));var r=a(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var n=0;n<r.length;n++){var o=s(r[n]);i[o].references--}for(var u=a(e,t),c=0;c<r.length;c++){var l=s(r[c]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}r=u}}}},93225:function(e,t,r){"use strict";r.d(t,{x7:function(){return Z}});var n=r(2784);let o={data:""},i=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||o,s=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,a=/\/\*[^]*?\*\/|  +/g,u=/\n+/g,c=(e,t)=>{let r="",n="",o="";for(let i in e){let s=e[i];"@"==i[0]?"i"==i[1]?r=i+" "+s+";":n+="f"==i[1]?c(s,i):i+"{"+c(s,"k"==i[1]?"":t)+"}":"object"==typeof s?n+=c(s,t?t.replace(/([^,])+/g,(e=>i.replace(/(^:.*)|([^,])+/g,(t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)))):i):null!=s&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=c.p?c.p(i,s):i+":"+s+";")}return r+(t&&o?t+"{"+o+"}":o)+n},l={},f=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+f(e[r]);return t}return e},d=(e,t,r,n,o)=>{let i=f(e),d=l[i]||(l[i]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(i));if(!l[d]){let t=i!==e?e:(e=>{let t,r,n=[{}];for(;t=s.exec(e.replace(a,""));)t[4]?n.shift():t[3]?(r=t[3].replace(u," ").trim(),n.unshift(n[0][r]=n[0][r]||{})):n[0][t[1]]=t[2].replace(u," ").trim();return n[0]})(e);l[d]=c(o?{["@keyframes "+d]:t}:t,r?"":"."+d)}let p=r&&l.g?l.g:null;return r&&(l.g=l[d]),((e,t,r,n)=>{n?t.data=t.data.replace(n,e):-1===t.data.indexOf(e)&&(t.data=r?e+t.data:t.data+e)})(l[d],t,n,p),d},p=(e,t,r)=>e.reduce(((e,n,o)=>{let i=t[o];if(i&&i.call){let e=i(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;i=t?"."+t:e&&"object"==typeof e?e.props?"":c(e,""):!1===e?"":e}return e+n+(null==i?"":i)}),"");function y(e){let t=this||{},r=e.call?e(t.p):e;return d(r.unshift?r.raw?p(r,[].slice.call(arguments,1),t.p):r.reduce(((e,r)=>Object.assign(e,r&&r.call?r(t.p):r)),{}):r,i(t.target),t.g,t.o,t.k)}y.bind({g:1});let h,m,b,v=y.bind({k:1});function g(e,t){let r=this||{};return function(){let n=arguments;function o(i,s){let a=Object.assign({},i),u=a.className||o.className;r.p=Object.assign({theme:m&&m()},a),r.o=/ *go\d+/.test(u),a.className=y.apply(r,n)+(u?" "+u:""),t&&(a.ref=s);let c=e;return e[0]&&(c=a.as||e,delete a.as),b&&c[0]&&b(a),h(c,a)}return t?t(o):o}}var w=(e,t)=>(e=>"function"==typeof e)(e)?e(t):e,E=(()=>{let e=0;return()=>(++e).toString()})(),x=(()=>{let e;return()=>{if(void 0===e&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),_=new Map,S=e=>{if(_.has(e))return;let t=setTimeout((()=>{_.delete(e),k({type:4,toastId:e})}),1e3);_.set(e,t)},O=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&(e=>{let t=_.get(e);t&&clearTimeout(t)})(t.toast.id),{...e,toasts:e.toasts.map((e=>e.id===t.toast.id?{...e,...t.toast}:e))};case 2:let{toast:r}=t;return e.toasts.find((e=>e.id===r.id))?O(e,{type:1,toast:r}):O(e,{type:0,toast:r});case 3:let{toastId:n}=t;return n?S(n):e.toasts.forEach((e=>{S(e.id)})),{...e,toasts:e.toasts.map((e=>e.id===n||void 0===n?{...e,visible:!1}:e))};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter((e=>e.id!==t.toastId))};case 5:return{...e,pausedAt:t.time};case 6:let o=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map((e=>({...e,pauseDuration:e.pauseDuration+o})))}}},C=[],j={toasts:[],pausedAt:void 0},k=e=>{j=O(j,e),C.forEach((e=>{e(j)}))},$={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},L=e=>(t,r)=>{let n=((e,t="blank",r)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(null==r?void 0:r.id)||E()}))(t,e,r);return k({type:2,toast:n}),n.id},A=(e,t)=>L("blank")(e,t);A.error=L("error"),A.success=L("success"),A.loading=L("loading"),A.custom=L("custom"),A.dismiss=e=>{k({type:3,toastId:e})},A.remove=e=>k({type:4,toastId:e}),A.promise=(e,t,r)=>{let n=A.loading(t.loading,{...r,...null==r?void 0:r.loading});return e.then((e=>(A.success(w(t.success,e),{id:n,...r,...null==r?void 0:r.success}),e))).catch((e=>{A.error(w(t.error,e),{id:n,...r,...null==r?void 0:r.error})})),e};var R=v`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,P=v`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,T=v`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,q=g("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${R} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${P} 0.15s ease-out forwards;
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
    animation: ${T} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,I=v`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,M=g("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${I} 1s linear infinite;
`,D=v`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,N=v`
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
}`,U=g("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${D} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${N} 0.2s ease-out forwards;
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
`,F=g("div")`
  position: absolute;
`,H=g("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,z=v`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Q=g("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${z} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,K=({toast:e})=>{let{icon:t,type:r,iconTheme:o}=e;return void 0!==t?"string"==typeof t?n.createElement(Q,null,t):t:"blank"===r?null:n.createElement(H,null,n.createElement(M,{...o}),"loading"!==r&&n.createElement(F,null,"error"===r?n.createElement(q,{...o}):n.createElement(U,{...o})))},V=e=>`\n0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n`,B=e=>`\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}\n`,G=g("div",n.forwardRef)`
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
`,J=g("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Y=n.memo((({toast:e,position:t,style:r,children:o})=>{let i=null!=e&&e.height?((e,t)=>{let r=e.includes("top")?1:-1,[n,o]=x()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[V(r),B(r)];return{animation:t?`${v(n)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${v(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(e.position||t||"top-center",e.visible):{opacity:0},s=n.createElement(K,{toast:e}),a=n.createElement(J,{...e.ariaProps},w(e.message,e));return n.createElement(G,{className:e.className,style:{...i,...r,...e.style}},"function"==typeof o?o({icon:s,message:a}):n.createElement(n.Fragment,null,s,a))}));!function(e,t,r,n){c.p=void 0,h=e,m=void 0,b=void 0}(n.createElement);var W=y`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Z=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:o,children:i,containerStyle:s,containerClassName:a})=>{let{toasts:u,handlers:c}=(e=>{let{toasts:t,pausedAt:r}=((e={})=>{let[t,r]=(0,n.useState)(j);(0,n.useEffect)((()=>(C.push(r),()=>{let e=C.indexOf(r);e>-1&&C.splice(e,1)})),[t]);let o=t.toasts.map((t=>{var r,n;return{...e,...e[t.type],...t,duration:t.duration||(null==(r=e[t.type])?void 0:r.duration)||(null==e?void 0:e.duration)||$[t.type],style:{...e.style,...null==(n=e[t.type])?void 0:n.style,...t.style}}}));return{...t,toasts:o}})(e);(0,n.useEffect)((()=>{if(r)return;let e=Date.now(),n=t.map((t=>{if(t.duration===1/0)return;let r=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(!(r<0))return setTimeout((()=>A.dismiss(t.id)),r);t.visible&&A.dismiss(t.id)}));return()=>{n.forEach((e=>e&&clearTimeout(e)))}}),[t,r]);let o=(0,n.useMemo)((()=>({startPause:()=>{k({type:5,time:Date.now()})},endPause:()=>{r&&k({type:6,time:Date.now()})},updateHeight:(e,t)=>k({type:1,toast:{id:e,height:t}}),calculateOffset:(e,r)=>{let{reverseOrder:n=!1,gutter:o=8,defaultPosition:i}=r||{},s=t.filter((t=>(t.position||i)===(e.position||i)&&t.height)),a=s.findIndex((t=>t.id===e.id)),u=s.filter(((e,t)=>t<a&&e.visible)).length;return s.filter((e=>e.visible)).slice(...n?[u+1]:[0,u]).reduce(((e,t)=>e+(t.height||0)+o),0)}})),[t,r]);return{toasts:t,handlers:o}})(r);return n.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...s},className:a,onMouseEnter:c.startPause,onMouseLeave:c.endPause},u.map((r=>{let s=r.position||t,a=((e,t)=>{let r=e.includes("top"),n=r?{top:0}:{bottom:0},o=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:x()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...n,...o}})(s,c.calculateOffset(r,{reverseOrder:e,gutter:o,defaultPosition:t})),u=r.height?void 0:e=>{e&&setTimeout((()=>{let t=e.getBoundingClientRect();var n;n=t,c.updateHeight(r.id,n.height)}))};return n.createElement("div",{ref:u,className:r.visible?W:"",key:r.id,style:a},"custom"===r.type?w(r.message,r):i?i(r):n.createElement(Y,{toast:r,position:s}))})))}}}]);
//# sourceMappingURL=9720.js.map