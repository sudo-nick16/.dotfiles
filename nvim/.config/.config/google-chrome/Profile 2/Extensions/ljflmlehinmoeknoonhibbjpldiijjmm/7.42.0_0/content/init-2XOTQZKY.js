import{a as O}from"./chunk-575CQTPS.js";import{t as D}from"./chunk-HSXMKYAR.js";import"./chunk-DVQRYGQU.js";import"./chunk-JBG5NKQC.js";import"./chunk-E27TCN4W.js";import"./chunk-BL5UKU3H.js";import"./chunk-RC4DYKRG.js";import{$ as x,Ba as b,K as j,Nc as W,Oc as v,P as s,Q as T,U as h,_a as w,_c as F,ec as E,lc as y,mc as B,n as S,nc as A,o as I,qc as R,qd as G,rd as C,tc as _,v as P,zb as L}from"./chunk-RMQ4NLAU.js";import"./chunk-5EVNDVHU.js";import"./chunk-Y5BTQH3A.js";import"./chunk-O5GRUDUJ.js";import"./chunk-GMPUNJGK.js";import"./chunk-HQV57N4U.js";import"./chunk-NLLWQ24O.js";import"./chunk-RG677XWH.js";import"./chunk-GPNV76YT.js";import"./chunk-SU3RHPI5.js";import"./chunk-EZ62NCTT.js";import"./chunk-OIJSW4UB.js";import"./chunk-MPXSC7RD.js";import"./chunk-TS65KX6G.js";import{e as V,i as l,k as preactH,p as u}from"./chunk-LA3C5XP7.js";u();l();u();l();var k=V(j());I();var U=s(T)`
  width: 235px;
`,z=s(h)`
  font-size: 0.825em;
  color: #587393;
`,K=s(h)`
  font-size: 1em;
  color: #fff;
`,$=s(x)`
  font-size: 0.825em;
  color: #fc7377;
  text-decoration: underline;
`,q=s(D)`
  width: 100%;
  min-height: 3em;
  background: ${({generatedSoundBiteLink:n})=>n?"#0fa41e":"#2137fc"};
  opacity: ${({copying:n})=>n?"0.2":"1"};
`,M=({id:n,removeNotification:r})=>{let{variant:o}=W("ce_share_cta_prompt");if(o&&v("ce_share_cta_prompt",o),o==="control"){r();return}let[t,g]=(0,k.useState)(!1),[p,i]=(0,k.useState)(!1),f=S(async()=>{if(t)return;i(!0);let a=document.title,d=(await L())?.flatMap(c=>c.textContent).join("")??"",e=await(await fetch("https://soundbite.speechify.com/api/bite/add",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({content:d,title:a})})).json();e.shortLink&&navigator.clipboard.writeText(e.shortLink),i(!1),g(!0)},[t]);return preactH(O,{removeNotification:r},preactH(U,{column:!0,separation:"10px"},preactH(z,null,"Want to share this article?"),preactH(q,{xAlign:!0,yAlign:!0,onClick:f,generatedSoundBiteLink:t,copying:p},p?preactH(B,null):preactH(K,null,t?"Copied":"Copy link")),preactH($,{onClick:r},"Don't show again")))};function J(){let n=[{min:0,max:25,logged:!1},{min:25,max:5,logged:!1},{min:5,max:75,logged:!1},{min:75,max:100,logged:!1}],r=n,o,t=0,g=A.on("contentchanged",()=>{o=void 0,t=0,r=n}),p=b("boundary",async i=>{if(!o){o=y(i,{fillToLength:3});return}let f=y(i,{fillToLength:3}),a=E(o,f,await R()).length;if(a===0||(t+=a,t<20)||(o=f,i.isSeek||a>20))return;let d=await w().then(P),m=await _();for(let e of r)if(m>=e.min&&m<=e.max){e.logged||(F({progress:m,isPremium:Boolean(d?.premium)}),e.logged=!0);break}if(t=0,m>90){let e=await C("desktop-feedback-csat"),c=await C("share-prompt");(e?.displayCount??0)>=1&&(c?.displayCount??0)<1&&!c?.dismissedByUser&&G({id:"share-prompt",timeSensitive:!0,priority:100,duration:5e3,showOnMobile:!1,wrapperPadding:"20px",render:({dismiss:N})=>preactH(M,{removeNotification:N})})}});return()=>[g,p].forEach(i=>i())}export{J as default};
