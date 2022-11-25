import{a as Ut,b as qt}from"./chunk-DWOC4Y3W.js";import{a as Bt,b as Nt,c as kt,d as V,e as Ft,f as Yt}from"./chunk-W676PRQ3.js";import"./chunk-4N336JQO.js";import"./chunk-PVRZZJOU.js";import{a as Dt,i as Ot,j as Rt,l as nt,m as It}from"./chunk-XXPLLLU4.js";import"./chunk-IIMGMDOG.js";import"./chunk-2S74ZO7V.js";import{b as Mt}from"./chunk-HSXMKYAR.js";import"./chunk-DVQRYGQU.js";import{a as wt}from"./chunk-JBG5NKQC.js";import{a as Lt}from"./chunk-E27TCN4W.js";import"./chunk-BL5UKU3H.js";import"./chunk-RC4DYKRG.js";import{Cc as At,Db as ot,Ia as xt,Ja as Ct,K as et,L as gt,M as ht,P as p,Q as P,Rb as vt,S as bt,U as W,Ub as Tt,Xb as St,e as ft,f as pt,ia as yt,j as dt,kb as Pt,l as mt,mc as Et,o as ae,pd as Qt,q as tt,qd as rt}from"./chunk-RMQ4NLAU.js";import"./chunk-5EVNDVHU.js";import"./chunk-Y5BTQH3A.js";import"./chunk-O5GRUDUJ.js";import"./chunk-GMPUNJGK.js";import"./chunk-HQV57N4U.js";import"./chunk-NLLWQ24O.js";import"./chunk-RG677XWH.js";import"./chunk-GPNV76YT.js";import"./chunk-SU3RHPI5.js";import"./chunk-EZ62NCTT.js";import"./chunk-OIJSW4UB.js";import"./chunk-MPXSC7RD.js";import"./chunk-TS65KX6G.js";import{e as K,i as s,k as preactH,l as Fragment,m as H,o as ie,p as u}from"./chunk-LA3C5XP7.js";u();s();ie();u();s();var I=pt("mobile-player-dragging",{getInitialState:async()=>({isOffscreen:!1,quadrant:{x:"right",y:"bottom"}})});u();s();var v=K(et());u();s();ae();var se=(t,e)=>{let o=mt(!1);dt(()=>{if(o.current)return t();o.current=!0},e)},zt=se;u();s();var U=K(et());function it(){let[t,e]=(0,U.useState)(!1),[o,r]=(0,U.useState)(!1);return(0,U.useEffect)(()=>{tt.on("userUpdateLoading",e),tt.on("subscriptionUpdateLoading",r)},[]),{userUpdateLoading:t,subscriptionUpdateLoading:o}}u();s();var _t=p(P)`
  height: ${({collapsed:t})=>t?"40px":"124px"};
  transition: height 300ms ease-in-out;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 8px 0;
  overflow: hidden;

  > * + * {
    margin-top: 8px;
  }

  > * {
    transform: translateY(0px);
    color: #2137fc !important;
    min-height: 36px;
    min-width: 36px;
    transition-duration: 300ms
    transition: transform 0.31s ease-in-out;
  }
`;u();s();var $t=p(P)`
  width: 100%;
  z-index: 100;
`;$t.defaultProps={xAlign:!0,yAlign:!0};var X=p.div`
  position: fixed;
  height: 100vh;
  left: 0;
  right: 0;
  bottom: 0;
  /* TODO: Replace with new Speechify colors */
  background-color: #05070b;
  opacity: ${({show:t})=>t?.6:0};
  ${({show:t})=>!t&&"pointer-events: none;"}
  transition: 250ms opacity;

  z-index: 2147483645;
`,Wt=({children:t})=>preactH(Fragment,null,preactH($t,null,t));u();s();var ue=()=>preactH("svg",{width:"10",height:"30",viewBox:"0 0 10 30",fill:"none",xmlns:"http://www.w3.org/2000/svg"},preactH("path",{d:"M5.5 27.7344L1.10938 17.2812C0.71875 16.3438 0.375 15.5625 0.375 14.6875C0.375 13.8281 0.71875 13.0312 1.10938 12.1094L5.5 1.65625C5.84375 0.890625 6.51562 0.359375 7.34375 0.359375C8.70312 0.375 9.625 1.35938 9.625 2.54688C9.625 3.1875 9.25 4.03125 8.95312 4.6875L4.78125 14.6875L8.95312 24.7031C9.25 25.3594 9.625 26.1875 9.625 26.8438C9.625 28.0312 8.70312 29.0156 7.34375 29.0156C6.51562 29.0156 5.84375 28.4844 5.5 27.7344Z",fill:"#6A79FD"})),le=p("div")`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 8px 0 0 8px;
  width: 24px;
  height: 76px;
  // TODO: glass300
  background: #e4eaf1;
  position: absolute;
  ${({quadrant:t})=>t.y}: 16px;
  transform: ${({quadrant:t})=>t.x==="left"?"rotate(180deg)":""};
  ${({quadrant:t,show:e})=>`${t.x}: calc(100% + ${e?"0px":"-24px"})`};

  opacity: ${({show:t})=>Number(t)};
  transition-duration: 250ms;
  transition-property: right, left;
`,Vt=t=>preactH(le,{...t},preactH(ue,null));u();s();var Xt=p(P)`
  transition: ${({animationDuration:t})=>t??250}ms transform;
  position: fixed;
  right: 0;
  left: 0;
  bottom: 0;

  transform: ${({isCollapsed:t})=>t?"translateY(100%)":"translateY(0)"};

  z-index: 2147483645;
`;u();s();var M=K(et());u();s();u();s();function at(t){let e=t.target,o=t.current,r=document.timeline.currentTime,f=0;return{reset:()=>{o=0,e=0,f=0},getVelocity:()=>f,setVelocity:i=>{f=i},getCurrent:()=>o,setCurrent:i=>{o=i},getTarget:()=>e,setTarget:i=>{e=i},updateInternalTime:()=>{r=document.timeline.currentTime},run:i=>{let l=(i-r)/1e3;r=i;let d=Math.min(1e3,Math.ceil(l*10*1e3)),m=o;for(let E=0;E<d;E++){let T=e-o,{currentDelta:L,velocityDelta:b}=ce(l/d,T,f);o+=L,f+=b}Math.abs(m-o)<.01&&Math.abs(o-e)<.01&&(o=e,f=0)}}}function ce(t,e,o){let r=fe(e,o,.075),f=Math.sign(o)*o**2/2/r>e,l=(e<0?!f:f)?Math.min(o**2/2/r/Math.abs(e),5e4/r):1,d=(f?-1:1)*r*l*t,m=o*t;return{velocityDelta:d,currentDelta:m}}function fe(t,e,o){let r=Math.abs(2*(t-e*o)/o**2);return Math.max(5e3,r)}var pe=(t,e)=>t**2/(2*e)*Math.sign(t),Zt=(t,e)=>{if(t.length!==e.length)throw new Error("Vectors must be the same length");return t.map((o,r)=>o+e[r])},st=(t,e)=>Zt(t,e.map(o=>-o)),B=()=>window.innerWidth,G=()=>window.innerHeight,Q=([t,e])=>({x:t>B()/2?"right":"left",y:e>G()/2?"bottom":"top"}),de=(t,e)=>t<16&&e<32||t>B()-16&&e>B()-32,jt=()=>[0,16],Jt=(t,e,o=Q(e))=>[o.x==="left"?e[0]:B()-e[0]-t.offsetWidth,o.y==="top"?e[1]:G()-e[1]-t.offsetHeight],me=(t,e,o)=>[e.x==="left"?o[0]:B()-t.offsetWidth-o[0],e.y==="top"?o[1]:G()-t.offsetHeight-o[1]],Gt=(t,e,o)=>{let[r,f]=Jt(t,e,o);f!==void 0&&(t.style.setProperty(o.y,`${f}px`),t.style.setProperty(o.y==="top"?"bottom":"top","unset")),r!==void 0&&(t.style.setProperty(o.x,`${r}px`),t.style.setProperty(o.x==="left"?"right":"left","unset"))},ge=(t,e)=>[e.getBoundingClientRect().left-t.getBoundingClientRect().left,e.getBoundingClientRect().top-t.getBoundingClientRect().top],j=t=>{let e=t.match(/(-?[\d.]+)/)?.[0]??void 0;if(e)return Number(e)},he=t=>{let e=getComputedStyle(t),o=j(t.style.getPropertyValue("top")),r=j(t.style.getPropertyValue("left")),f=j(e.getPropertyValue("right")),i=j(e.getPropertyValue("bottom"));return[r??B()-(f??0)-t.offsetWidth,o??G()-(i??0)-t.offsetHeight]};function Kt(t,e={},{onQuadrantChange:o,onOffscreenChange:r,onMouseHasMovedChange:f,onActivate:i}={}){let l=()=>t.current,d=e.quadrant??{x:"right",y:"bottom"},m=jt(),E=()=>g||!T?m:[-l().offsetWidth,m[1]],T=e.isOffscreen??!1,L=n=>{n!==T&&(T=n,r({isOffscreen:T}))},b,g=!1,R=n=>{n!==g&&(g=n,f?.({mouseHasMoved:n}))},A=100,y=[],k=n=>{let a=performance.now();y.push({time:a,pos:[n.clientX,n.clientY]}),y=y.filter(h=>h.time>a-A)},x=at({current:0,target:0}),c=at({current:0,target:0}),S=!0,D=document.timeline.currentTime,F=n=>{if(requestAnimationFrame(F),n>D+250){D=n,x.updateInternalTime(),c.updateInternalTime();return}D=n;let[a,h]=he(l());x.setCurrent(a),c.setCurrent(h);let[w,Y]=me(l(),d,E());x.setTarget(w),c.setTarget(Y);let C=[x.getCurrent(),c.getCurrent()];x.run(n),c.run(n);let Z=[x.getTarget(),c.getTarget()],$=S?Z:[x.getCurrent(),c.getCurrent()],oe=st(Z,$).map(Math.abs);S&&(S=!1,x.setVelocity(0),c.setVelocity(0));let J=Q($);g&&(J.y="top"),g||oe.some(re=>re>.1)?Gt(l(),$,J):Gt(l(),Z,J);let ne=Q(C),ct=Q($);ft(ne,ct)||o?.({quadrant:Object.freeze(ct)})},q=n=>{!g||(n.stopPropagation(),n.preventDefault(),l().removeEventListener("click",q,!0))},z=n=>{let a="clientX"in n?n:n.touches[0];if(k(a),Math.sqrt((b.x-a.clientX)**2+(b.y-a.clientY)**2)<16&&!g)return;let[w,Y]=Zt(ge(l(),b.target),[b.offsetX,b.offsetY]),C=[a.clientX-w,a.clientY-Y];d=Q(C),m=Jt(l(),C),n.preventDefault(),R(!0)},_=n=>{let a="clientX"in n?n:n.touches[0];n.preventDefault();let h=n.target;b={x:a.clientX,y:a.clientY,target:h,offsetX:a.clientX-h.getBoundingClientRect().left,offsetY:a.clientY-h.getBoundingClientRect().top},document.addEventListener("touchmove",z,{passive:!1}),document.addEventListener("touchend",O,{capture:!0,passive:!1}),l().addEventListener("click",q,{passive:!1})},O=n=>{if(document.removeEventListener("touchmove",z),document.removeEventListener("touchend",O,{capture:!0}),!g)return;let a=st(y[0].pos,y[y.length-1].pos).map(w=>w*(1e3/A)).map(w=>pe(w,2e3)),h=st([x.getCurrent(),c.getCurrent()],a);d=Q(h),m=jt(),L(de(h[0],y[y.length-1].pos[0])),R(!1),n.stopImmediatePropagation(),n.stopPropagation(),n.preventDefault()};return new Promise(n=>{let a=()=>{l()?n():requestAnimationFrame(a)};a()}).then(()=>{requestAnimationFrame(F),requestAnimationFrame(()=>{i?.()})}),{startDragging:_,forceUpdate:()=>F(document.timeline.currentTime),getQuadrant:()=>d,setQuadrant:(n,a=!0)=>{S=a,d=n},getPosition:E,bringOnScreen:()=>L(!1),getOffscreen:()=>T,setOffscreen:(n,a=!0)=>{S=a,L(n)}}}function ut(t,e,o={}){let{getQuadrant:r,setQuadrant:f,getOffscreen:i,setOffscreen:l,forceUpdate:d,...m}=(0,M.useMemo)(()=>Kt(t,e,{...o,onQuadrantChange:({quadrant:c})=>{R(c),I.set("quadrant",c),o.onQuadrantChange?.({quadrant:c})},onOffscreenChange:({isOffscreen:c})=>{y(c),I.set("isOffscreen",c),o.onOffscreenChange?.({isOffscreen:c})},onMouseHasMovedChange:({mouseHasMoved:c})=>{c||x(r().y==="top"?"center":r().x==="right"?"left":"right"),o.onMouseHasMovedChange?.({mouseHasMoved:c})},onActivate:()=>{o.onActivate?.(),T(!0)}}),[]),[E,T]=(0,M.useState)(!1),[L,b]=(0,M.useState)(document.visibilityState==="hidden");(0,M.useEffect)(()=>document.addEventListener("visibilitychange",async()=>{if(document.visibilityState==="hidden"){b(!0);return}let{isOffscreen:c,quadrant:S}=await I.getAll();l(c),f(S),d(),b(!1)}),[]);let[g,R]=(0,M.useState)(r()),[A,y]=(0,M.useState)(i()),[k,x]=(0,M.useState)(g.y==="top"?"center":g.x==="right"?"left":"right");return{active:E&&!L,quadrant:g,isOffscreen:A,notifsPosition:k,setQuadrant:f,setOffscreen:l,...m}}u();s();var be=p(P)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background: #ffffff;
  border: 1px solid #e4eaf1;
  box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.06), 0px 2px 6px rgba(0, 0, 0, 0.04),
    0px 0px 1px rgba(0, 0, 0, 0.04);
  border-radius: 12px;

  width: 320px;
  justify-content: center;

  z-index: 2147483645;
`,ye=p(P)`
  padding: 24px;
`,xe=p(P)`
  border-top: 1px solid #e4eaf1;
  padding: 16px;
  justify-content: flex-end;
`,Ce=p(Ot)`
  width: 74px;
  padding: 6px 24px;
`,Ht=({children:t,onClick:e})=>preactH(Fragment,null,preactH(X,{show:!0}),preactH(be,{column:!0},preactH(ye,null,t),preactH(xe,null,preactH(Ce,{onClick:e},preactH(W,{fontSize:"20px",color:"#fff"},"Yes")))));var Pe=p(bt)`
  /* To increase the touch area */
  padding: 16px;

  position: fixed;
  bottom: 16px;
  right: 0;
  z-index: 2147483645;
  ${({hidden:t})=>t&&"opacity: 0;"}
`,ve=p(P)`
  position: fixed;
  bottom: 32px;
  width: 280px;
  max-width: 280px;
  left: ${({position:t})=>t==="center"?"calc(50% - 140px)":t==="right"?"calc(100vw - 32px - 280px)":"32px"};
  transition: 0.2s left;

  z-index: 2147483645;

  > * {
    padding: 0 !important; /* TODO: Temporary */
  }
`,Te=p.div`
  position: fixed;
  background-color: #05070b;
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  opacity: 0.6;
  touch-action: none;
  z-index: 2147483646;
  overflow: hidden;
`,Se=p(Et)`
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;function lt({root:t,initialDraggingState:e}){let o=(0,v.useMemo)(()=>gt({key:"ios-player-emotion-cache",container:t}),[t]),{controller:r,view:f}=vt();Pt("player",{controller:r,view:f});let i=St("Popup"),l={isPlaying:i.state==="playing",isLoading:i.state==="buffering",isLoadingFailed:i.state==="errored"},d=Lt(l.isPlaying?"PAUSE_BUTTON":"PLAY_BUTTON"),m=Dt(),{playbackSpeed:E}=Tt(),{saveToMobile:T}=At(),L=(0,v.useCallback)(()=>{!m||!m.email?V("/signup"):T()},[m]),{route:b,collapseState:g}=wt(Bt,["route","collapseState"]),R=Ft(b),A=["collapsing","collapsed"].includes(g),y=(0,v.useRef)(),{startDragging:k,bringOnScreen:x,active:c,isOffscreen:S,quadrant:D,notifsPosition:F}=ut(y,e),{userUpdateLoading:q,subscriptionUpdateLoading:z}=it(),_=q||z,O=_,n=qt(),[a,h]=(0,v.useState)(!0);zt(()=>{if(h(!1),i.state!=="playing"&&i.state!=="errored"){let C=setTimeout(()=>h(!0),5e3);return()=>clearTimeout(C)}},[i.state]);let{NotificationBoard:w}=Ut({mobileOnly:!0});(0,v.useEffect)(()=>{!l.isLoadingFailed||rt({id:"player-error",timeSensitive:!0,priority:150,duration:0,showOnMobile:!0,render:({dismiss:C})=>preactH(yt,{onClick:()=>{C(),i.refresh()}},preactH("span",null,"Error playing page. Tap \u21BB to retry"))})},[l.isLoadingFailed]);let Y=()=>{if(i.state!=="buffering")return i.state==="playing"?i.pause():i.play()};return(0,v.useEffect)(()=>{n&&(Ct(),rt({id:"still-listening",priority:100,duration:0,showOnMobile:!0,timeSensitive:!0,render:({dismiss:C})=>preactH(Ht,{onClick:()=>{C(),xt()}},preactH("span",null,"Audio paused. Continue listening?"))}))},[n]),(0,v.useEffect)(()=>{l.isPlaying&&Qt("still-listening")},[l.isPlaying]),preactH(ht,{value:o},preactH(ve,{position:F},preactH(w,null)),preactH(Pe,{hidden:!c,ref:y,reverse:D.y==="top",onTouchStart:C=>!S&&k(C),align:!0},preactH(Vt,{onTouchEnd:ot(x),quadrant:D,show:S}),preactH(_t,{reverse:D.y==="top",collapsed:a},preactH(It,{onTouchStart:ot(L),background:"#fff",size:"36px",iconSize:"24px",disabled:O}),preactH(nt,{background:"#fff",size:"36px",margin:"5px 0 0 0",onTouchStart:()=>V("/voices"),disabled:O},preactH(Mt,{size:"24px"})),preactH(nt,{background:"#fff",size:"36px",margin:"5px 0 0 0",onTouchStart:()=>V("/speed"),disabled:O},preactH(W,{fontSize:"13px",color:"#2137FC",fixedWidthNumbers:!0,style:{letterSpacing:"-0.03em",fontWeight:"bold"}},(E??1).toFixed(1),"x"))),preactH(Rt,{"aria-label":d,source:"MobilePlayer",failed:l.isLoadingFailed,disabled:O,onClick:Y,state:i.state})),preactH(X,{show:!A}),_&&!A&&preactH(Te,null,preactH(Se,{color:"#fff",height:"30px",width:"30px"})),preactH(Xt,{isCollapsed:A,column:!0},preactH(Wt,null,preactH(R,null))))}var Me="speechify-mobile-player",ee="speechify-mobile-player-root",N;async function Ee({defaultRoute:t,allowCollapse:e}){if(!N){let r=document.createElement("div");r.id=Me,r.style.cssText="z-index: 2147483645; pointer-events: none;",document.body.appendChild(r),N=r.attachShadow({mode:"open"})}te(),t&&kt(t),e!==void 0&&Yt(e);let o=document.createElement("div");return o.id=ee,o.style.cssText="z-index: 2147483646; pointer-events: all;",N.appendChild(o),H(preactH(lt,{root:o,initialDraggingState:await I.getAll()}),o),te}function te(){if(Nt(),!N)return;let t=N.querySelector(`#${ee}`);!t||(H(()=>null,t),N.removeChild(t))}export{Ee as default,te as destroyPlayer};
