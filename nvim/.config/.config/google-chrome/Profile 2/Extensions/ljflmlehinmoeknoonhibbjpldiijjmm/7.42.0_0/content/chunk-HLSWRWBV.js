import{q as H}from"./chunk-HSXMKYAR.js";import{E as F,K as O,L as M,M as R,Mc as U,P as N,Pa as V,Pb as D,Q as q,Xb as X,Zb as G,ad as Y,i as S,j as I,k as A,o as Q,ta as z,ua as Z,wa as P}from"./chunk-RMQ4NLAU.js";import{f as b,g as C}from"./chunk-SU3RHPI5.js";import{e as k,i as y,k as preactH,p as h}from"./chunk-LA3C5XP7.js";h();y();var d=k(O()),x=k(Z());h();y();var v=k(O());Q();var te=N(q)`
  width: 28px;
  height: 20px;

  transition: 0.2s opacity;
  opacity: 0.6;
  transform: translateX(-60px);

  :hover {
    opacity: 1;
  }

  > button {
    pointer-events: all;
    position: absolute;
    right: 0;
    transform: translateX(50%);
  }
`;function re(e,t){return e.find(a=>{let r=a.start.getParentElement().ref.value;return t.isSameNode(r)})}function L({hoveredElem:e,root:t}){let[a,r]=S([]),[c,m]=S(!1),{bundle:i,provider:o}=P(),n=X(),s=n.state==="playing",l=n.state==="buffering",_=n.state==="errored",{activeElement:u}=G();I(()=>{!u||o==="ocr"||(o==="gdocs"?m(u?.parentElement.isSameNode(e)):m(u.isSameNode(e)))},[e,o,u]),A(()=>{if(!i)return;let f=i?.listeningBundle?.contentBundle.standardView;f.getBlocksAroundCursor(f.start,async w=>{let g=await C(w);b(g)&&r(g.value.blocks)})},[i]);let K=(0,v.useCallback)(async()=>{c&&s&&n.pause();let f=i?.listeningBundle?.contentBundle.contentIndex,w=o==="gdocs"?e.children[0]:e,g=re(a,w);f.getProgressFromCursor(g.start,async J=>{let T=await C(J);b(T)&&(n.seek(T.value),D(!0),s||n.play())}),Y()},[e,o,a,i,s,c]),j=(0,v.useMemo)(()=>M({key:"paragraph-emotion-cache",container:t}),[t]);return preactH(R,{value:j},preactH(te,{yAlign:!0,separation:"4px"},preactH(H,{background:F.controls.tints.primary,onClick:K,isPlaying:c&&s,isLoading:l,isLoadingFailed:_})))}var W="speechify-paragraph-hover-button-container",B,E,oe,p;async function $(e){B?.();let t=document.querySelector(`#${W}`),a=({isResize:o}={})=>{requestAnimationFrame(()=>{if(typeof E>"u")return;let n=E.getBoundingClientRect();o&&(t.style.transitionDuration="0s"),t.style.display="block",t.style.top=`${n.top+window.scrollY}px`,t.style.left=`${n.left+window.scrollX-18}px`,o&&setTimeout(()=>requestAnimationFrame(()=>{t.style.transitionDuration="350ms"}),0)})},r=new ResizeObserver((0,x.default)(()=>a(),16)),c=()=>a({isResize:!0});window.addEventListener("resize",c);let m=e,i=(0,x.default)(o=>{let n=m.find(s=>{let l=s.getBoundingClientRect();return o.clientX>l.x&&o.clientX<l.x+l.width&&o.clientY>l.y&&o.clientY<l.y+l.height?s:!1});n&&(ae(n),a(),r.disconnect(),r.observe(n),a())},16);window.addEventListener("mousemove",i),B=()=>{r.disconnect(),window.removeEventListener("resize",c),window.removeEventListener("mousemove",i)}}async function ne(){let{clickToListen:e}=await V();if(e&&window.location.host!=="docs.google.com"&&await U("clickToListen")==="clickToListen")return;if(!p){let r=document.createElement("div");r.id=W,document.body.appendChild(r),p=r.attachShadow({mode:"open"})}let t=p.querySelector("#paragraph-player-root");t&&((0,d.render)(()=>null,t),t.remove());let a=document.createElement("div");return a.id="paragraph-player-root",p.appendChild(a),(0,d.render)(preactH(L,{root:a}),a),P.subscribe(r=>({view:r.view,provider:r.provider}),({view:r,provider:c})=>{!r||c==="ocr"||z(r).then(m=>{let i=m.map(o=>o.start.getParentElement().ref.value);if(c==="gdocs"){let o=i.map(s=>s?.parentElement),n=o.filter(s=>o.find(l=>l.isSameNode(s)));$(n)}else $(i)})},{fireImmediately:!0}),ie}function ae(e){if(E=e,!p)return;let t=p.querySelector("#paragraph-player-root");!t||(0,d.render)(preactH(L,{root:t,hoveredElem:E}),t)}function ie(){if(!p)return;let e=p.querySelector("#paragraph-player-root");e&&((0,d.render)(()=>null,e),e.remove()),B?.(),clearInterval(oe)}export{ne as a,ie as b};
