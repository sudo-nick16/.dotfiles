import{i as T,k as K,m as U,s as X,w as d}from"./chunk-HSXMKYAR.js";import{a as O}from"./chunk-JBG5NKQC.js";import{c as W}from"./chunk-BL5UKU3H.js";import{a as B}from"./chunk-RC4DYKRG.js";import{Cc as A,H as L,I as w,J as t,K as _,L as z,M as R,P as D,Q as a,U as c,Xc as F,i as g,j as v,o as Q}from"./chunk-RMQ4NLAU.js";import{e as $,g as browser,i as h,k as preactH,p as b}from"./chunk-LA3C5XP7.js";b();h();Q();var u=$(_());b();h();var C=$(_()),V=D(a)`
  font-family: var(--font-family);
  font-size: 16px;
  display: flex !important;
  position: absolute;
  top: 0;
  right: calc(100% + 16px);

  width: 380px;
  border-radius: 6px;

  color: ${()=>t.typography.primary};

  a {
    color: ${()=>t.controls.tints.primary};
  }

  background: ${()=>t.elements.background};
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04),
    0px 0px 1px rgba(0, 0, 0, 0.04);

  padding: 24px;

  transition: 200ms opacity;
  opacity: 1;

  ${({isHidden:o})=>o&&"opacity: 0; pointer-events: none;"}
`,Y=({isHidden:o,isLocalFile:n,isTooBig:e,webAppHref:r})=>{let[l,i]=(0,C.useState)(!0);(0,C.useEffect)(async()=>{if(n||e)i(!0);else{let{pdfNudge:f}=await new Promise(p=>browser.storage.sync.get(["pdfNudge"],p));f?.notificationDisabled&&i(!1)}},[n,e]);let P=async()=>{i(!1);let{pdfNudge:f}=await new Promise(p=>browser.storage.sync.get(["pdfNudge"],p));browser.storage.sync.set({pdfNudge:{...f,notificationDisabled:!0}})};if(!!l)return preactH(V,{separation:"12px",isHidden:o},preactH(W,{color:t.controls.tints.primary,width:"100px",height:"19px",style:{marginTop:"14px"}}),e&&preactH(a,{column:!0,separation:"6px"},preactH(c,{bold:!0},"This PDF file is too big"),preactH(c,null,"Please drag & drop it on"," ",preactH("a",{target:"_blank",rel:"noopener noreferrer",href:r},r.replace(/^https?:\/\//,"").replace(/\/$/,"")))),n&&!e&&preactH(a,{column:!0,separation:"6px"},preactH(c,{bold:!0},"This a local PDF file"),preactH(c,null,"To listen to this local file, drag & drop it on"," ",preactH("a",{target:"_blank",rel:"noopener noreferrer",href:r},r.replace(/^https?:\/\//,"").replace(/\/$/,"")))),!n&&!e&&preactH(a,{column:!0,separation:"6px"},preactH(c,{bold:!0},"Listen now or save for later"),preactH(c,null,"Click play to listen to this PDF. Or click the bookmark to save it to your library.")),preactH(d,{size:"16px",style:{position:"absolute",top:"16px",right:"16px"}},preactH(T,{color:t.controls.tints.secondary,onClick:P})))};var Z=({duration:o,immediateToggle:n})=>{let[e,r]=g("start"),l=async()=>{if(!["forward","backward"].includes(e)){if(e==="start")return r("forward"),new Promise(i=>setTimeout(()=>{r("end"),i()},[o]));if(e==="end")return r("backward"),new Promise(i=>setTimeout(()=>{r("start"),i()},[o]))}};return v(()=>{!n||setTimeout(l,0)},[]),{state:e,toggleState:l}},H=D(a)`
  font-family: var(--font-family);
  background: ${()=>t.elements.background};
  border-radius: 6px;
  pointer-events: all;

  padding: 6px 4px;

  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04),
    0px 0px 1px rgba(0, 0, 0, 0.04);

  color: ${()=>t.typography.primary};

  transition-duration: 200ms;
  transition-property: height, transform;
  height: ${({noSaveToMobile:o})=>o?"36px":"62px"};
  overflow: hidden;

  transform: ${({isHidden:o,root:n})=>o?"translateX(calc(100% + "+n.style.right+"))":"translateX(0)"};

  > * {
    transition: 200ms transform;
    transform: translateY(-20px);
  }

  ${({forceExpanded:o})=>o?"&":":hover"} {
    height: ${({noSaveToMobile:o})=>o?"88px":"112px"};
    transform: translateY(-24px) !important;

    & > * {
      transform: none;
    }
  }
`,So=({doc:o,noSaveToMobile:n,root:e,pdfUrl:r=null})=>{O(L);let[l,i]=g(),[P,f]=g(!1),p=(o||document).location.href;r||(r=new URLSearchParams(window.location.search).get("url")??p);let x=(0,u.useMemo)(()=>p.startsWith("file://"),[]),y=(0,u.useMemo)(()=>l>25*1e3*1e3,[l]),m=x||y,N=(0,u.useMemo)(()=>`https://app.speechify.com/${x||y?"":`importFile?type=pdf&url=${encodeURIComponent(r)}`}`,[x,y]);v(()=>{let s=browser.runtime.connect();s.onMessage.addListener(i),s.postMessage({domain:"com.speechify.pdf",fnName:"getPdfSize",payload:{href:p}})},[]);let{saveToMobileStatus:I}=A(),G=(0,u.useMemo)(()=>z({key:"pdf-emotion-cache",container:e}),[e]),{state:M}=Z({duration:200,immediateToggle:!0}),[k,S]=g(!1),{handleDrag:E,startDragging:j}=(0,u.useMemo)(()=>U(e,{isManual:!0}),[]);v(()=>{if(!k)return;let s=()=>S(!1);return(o||document).addEventListener("mousemove",E),(o||document).addEventListener("mouseup",s),()=>{(o||document).removeEventListener("mousemove",E),(o||document).removeEventListener("mouseup",s)}},[k]);let q=()=>{f(!0),F("extension_pdf_nudge_dismiss_clicked")},J=()=>{m||(F(o?"extension_iframe_pdf_import_click":"extension_pdf_import_click",{href:(o||document).location.href}),window.open(N,"_blank"))};return P?null:preactH(R,{value:G},preactH(a,null,preactH(H,{className:"notranslate",xAlign:!0,relative:!0,column:!0,separation:"2px",forceExpanded:k||I==="saving"||I==="saved",isHidden:["start","backward"].includes(M),noSaveToMobile:n,root:e},preactH(d,{onMouseDown:s=>{j(s.nativeEvent),S(!0)},onMouseUp:()=>S(!1),noResponsive:!0,size:"24px",color:t.controls.tints.tertiary},preactH(K,null)),preactH(d,{disabled:m,noResponsive:!0,size:"32px",color:m?t.controls.tints.tertiary:w(t.controls.tints.secondary,t.controls.tints.primary),onClick:J,style:m?{cursor:"default",opacity:.5}:{}},preactH(B,{size:"16px"})),!n&&preactH(X,{disabled:m,source:"PDF",background:"transparent",color:m?t.controls.tints.tertiary:w(t.controls.tints.secondary,t.controls.tints.primary),boxShadow:"none",size:"24px",style:m?{cursor:"default",opacity:.5}:{}}),preactH(d,{noResponsive:!0,size:"32px",color:w(t.controls.tints.secondary,t.controls.tints.primary),onClick:q},preactH(T,{width:"15px"}))),preactH(Y,{isHidden:M!=="end",isLocalFile:x,isTooBig:y,webAppHref:N})))};export{So as a};
