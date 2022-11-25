import{a as I}from"./chunk-DVQRYGQU.js";import{c as L}from"./chunk-BL5UKU3H.js";import"./chunk-RC4DYKRG.js";import{$b as k,C as l,Hb as J,J as x,Jb as R,K as v,Mc as C,Nc as A,Oc as u,P as c,Q as b,U as _,V as w,Vc as N,Xb as W,cd as O,gc as T,j as y,o as j,tb as F,wa as h}from"./chunk-RMQ4NLAU.js";import"./chunk-5EVNDVHU.js";import"./chunk-Y5BTQH3A.js";import"./chunk-O5GRUDUJ.js";import"./chunk-GMPUNJGK.js";import"./chunk-HQV57N4U.js";import"./chunk-NLLWQ24O.js";import"./chunk-RG677XWH.js";import"./chunk-GPNV76YT.js";import"./chunk-SU3RHPI5.js";import"./chunk-EZ62NCTT.js";import"./chunk-OIJSW4UB.js";import"./chunk-MPXSC7RD.js";import"./chunk-TS65KX6G.js";import{e as g,i as d,k as preactH,l as Fragment,p}from"./chunk-LA3C5XP7.js";p();d();var B=g(v());p();d();var f=g(v());j();var D=g(J());var Z=c("span")`
  position: relative;
  display: inline-block;
  cursor: pointer;
  transition: all 250ms linear 0ms;
  white-space: nowrap;
`,tt=c("div")`
  position: relative;
  align-items: center;
  display: inline-flex;
  vertical-align: top;
  border-radius: 4px;
  &:hover {
    background-color: ${()=>l.electric[250]};
    color: ${()=>l.electric[400]};
  }
  span {
    ${({highlightBackground:t})=>t&&`background-color: ${l.electric[250]}`};
    ${({highlightBackground:t})=>!t&&`color: ${l.electric[400]}`};
    border-radius: 4px;
    padding: 0 2px;
  }
  svg {
    visibility: hidden;
    margin: 0 3px 0 5px;
  }
  &:hover svg {
    visibility: visible;
  }
  margin-left: -28px;
  white-space: nowrap;
`,et=c(b)`
  font-family: var(--font-family);
  position: absolute;
  margin-top: 8px;
  padding: 12px 16px;
  background-color: ${()=>x.elements.background};
  box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.06), 0px 2px 6px rgba(0, 0, 0, 0.04),
    0px 0px 1px rgba(0, 0, 0, 0.04);
  border-radius: 10px;
  z-index: 2147483645;
  overflow: hidden;
  white-space: nowrap;
`,rt=c(_)`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.01em;
  cursor: default;
`;function G({markedElement:t,firstWord:e}){let{variant:r,isLoading:o}=A("first_word_player_highlight");y(()=>{!o&&r&&u("first_word_player_highlight",r)},[r,o]);let i=r==="background",n=W("First Word Player"),{state:a}=n,s=a==="playing",Y=I(a),z=(0,f.useCallback)(async m=>{if(m.stopPropagation(),m.preventDefault(),!s)return O({triggeredFrom:"First Word Player"}),n.play()},[n,s]),{duration:E,durationSaved:P}=k();if(E===0)return;let[U,q]=(0,f.useState)(!1),K=()=>S(!0),X=()=>S(!1),S=(0,D.debounce)(m=>q(m),30);return y(()=>{t.style.setProperty("display","none")},[]),preactH(Z,null,preactH(tt,{highlightBackground:i,onClick:z,onMouseEnter:K,onMouseLeave:X},preactH(Y,{size:"16px"}),preactH("span",null,e)),U&&preactH(et,{separation:"8px"},preactH(L,{width:"24px",color:x.controls.tints.primary}),preactH(rt,null,P>0?preactH(Fragment,null,"Listen and save"," ",preactH(w,null,T("short")(P))):T("long")(E))))}var H="speechify-first-word-player",V="speechify-first-word-player-root";async function ot(t){let e=await N();if(!e)return;let r=await C("UseFirstWordToPlay");if(u("UseFirstWordToPlay",r),r!=="UseFirstWordToPlay")return;await F(e?.firstElementSelector??"");let o=e?.firstElementSelector,i=(o&&document.querySelector(o))??await lt();if(i){let n=at(i),a=n.textContent,s=document.createElement("span");s.id=V,n.parentElement.insertBefore(s,n),(0,B.render)(preactH(G,{markedElement:n,firstWord:a}),s)}return nt}function nt(){st()}var it=/^\s*$/,$=t=>t.nodeType===Node.TEXT_NODE&&!it.test(t.textContent),M=t=>{if(!t)return null;if($(t))return t;for(let e of Array.from(t.childNodes)){if($(e))return e;let r=M(e);if(r!==null)return r}return null},at=t=>{let e=M(t),r=document.createRange(),o=e.textContent,i=o.length-o.trimLeft().length,n=i+o.trim().split(" ")[0].length;r.setStart(e,i),r.setEnd(e,n);let a=document.createElement(H);return r.surroundContents(a),a},st=()=>{document.querySelector(`#${V}`)?.remove(),document.querySelectorAll(H).forEach(t=>{let e=t.parentElement;t.replaceWith(...Array.from(t.childNodes)),e.normalize()})},lt=async()=>{{let{controller:r,view:o}=h.getState();(!o||!r)&&await R()}let{view:t}=h.getState();return t?t.start.getParentElement()?.ref?.value:null};export{ot as default,nt as destroyFirstWordPlayer};
