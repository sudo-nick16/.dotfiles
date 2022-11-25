import{a as k}from"./chunk-E27TCN4W.js";import{J as x,K as U,P as v,Q as h,W as E,gc as A,i as S,o as C,ya as g}from"./chunk-RMQ4NLAU.js";import{e as D,i as p,k as preactH,p as f}from"./chunk-LA3C5XP7.js";f();p();f();p();var s=D(U());f();p();var L=({stroke:i,strokeLineCap:e,...o})=>preactH("path",{d:"M 1,1 L 99,1","fill-opacity":"0","stroke-width":"2",stroke:i??x.controls.tints.tertiary,"stroke-linecap":e??"square",...o}),b=({percent:i,strokeColor:e,strokeLineCap:o,...l})=>preactH("svg",{viewBox:"0 0 100 2",preserveAspectRatio:"none","aria-label":k("SEEKBAR"),style:{width:"100%",cursor:"pointer"},...l},preactH(L,{strokeLineCap:o}),preactH(L,{stroke:e,strokeLineCap:o,style:`stroke-dashoffset: 0.2px; stroke-dasharray: ${Math.max(i-.2,0)}px, 100px;`}));var P=v(h)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`,y=x.controls.seekbar.holder,B=v("div")`
  width: 4px;
  height: 12px;
  background: ${()=>y};
  border-radius: 1px;
  pointer-events: none;

  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`,T=({ariaElement:i,time:e})=>preactH(E,{"aria-label":k(i),fixedWidthNumbers:!0,fontSize:"12px"},A("short")(e)),R=({isMinimizedPlayer:i,currentTime:e,duration:o,onChange:l,onMouseUp:d,...c})=>{let a=(0,s.useRef)(),[n,w]=(0,s.useState)(!1),t=e/Math.max(o,1)*100,m=(0,s.useCallback)(r=>{let u=a.current.base.getBoundingClientRect();return Math.max(0,(r.clientX-u.x)/u.width*o)},[a,o]),M=(0,s.useCallback)(r=>{r.stopPropagation(),l(m(r)),w(!0)},[n,m,l]);return(0,s.useEffect)(()=>{if(!n)return;let r=u=>l(m(u));return window.addEventListener("mousemove",r),()=>window.removeEventListener("mousemove",r)},[n,m,l]),(0,s.useEffect)(()=>{if(!n)return;let r=u=>{w(!1),typeof d=="function"&&d(m(u)),window.removeEventListener("mouseup",r)};return window.addEventListener("mouseup",r),()=>window.removeEventListener("mouseup",r)},[n,m,l]),i?preactH(P,{yAlign:!0,relative:!0,...c},preactH(b,{ref:a,percent:t,strokeColor:y,onMouseDown:M}),preactH(B,{percent:t,disableAnimation:n,style:{left:`${t}%`,height:"4px"}})):preactH(h,{separation:"16px",yAlign:!0,...c},preactH(T,{ariaElement:"CURRENT_TIME",time:e}),preactH(h,{yAlign:!0,relative:!0},preactH(b,{ref:a,percent:t,strokeColor:y,strokeLineCap:"round",onMouseDown:M,style:{width:"100%",cursor:"pointer",padding:"8px 0"}}),preactH(B,{percent:t,disableAnimation:n,style:{left:`${t}%`}})),preactH(T,{ariaElement:"DURATION",time:o}))};C();var J=({isMinimizedPlayer:i=!1,duration:e,seek:o,...l})=>{let{progress:d}=g(),c=Math.floor((d??0)*e),[a,n]=S(null);return preactH(R,{isMinimizedPlayer:i,currentTime:a??c,duration:e,onChange:async t=>{t<=e&&n(t)},onMouseUp:t=>{o(t/e).then(()=>n(null))},...l})};export{J as a};
