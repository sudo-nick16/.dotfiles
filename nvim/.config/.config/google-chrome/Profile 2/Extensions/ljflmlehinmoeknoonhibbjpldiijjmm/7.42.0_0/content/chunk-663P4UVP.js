import{a as P}from"./chunk-PVRZZJOU.js";import{t as _}from"./chunk-HSXMKYAR.js";import{a as D}from"./chunk-JBG5NKQC.js";import{H as v,J as i,K as W,Mc as I,Oc as R,P as a,Pa as S,Q as n,U as F,Xc as b,_ as p,gb as T,i as u,ma as B,md as y,o as q,qd as h,rd as E,za as k}from"./chunk-RMQ4NLAU.js";import{a as w}from"./chunk-GPNV76YT.js";import{e as M,i as l,k as preactH,l as Fragment,p as m}from"./chunk-LA3C5XP7.js";m();l();m();l();var z=M(W());q();m();l();var C=a("input")`
  box-sizing: border-box;
  background-color: ${()=>i.elements.opaqueSurface};
  color: ${()=>i.typography.primary};
  border: none;
  border-radius: 5px;
  outline: none;
  padding: 12px;
  width: 100%;

  font-size: 14px;
  font-family: var(--font-family);
`,K=a(C.withComponent("textarea"))`
  font-family: Inter;
  ${({resize:e})=>e===!1&&"resize: none;"}
`;var $=a(n)`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.42);
`,j=a(n)`
  background: ${()=>i.elements.background};
  font-family: var(--font-family);
  width: 340px;
  max-width: 100%;
  box-shadow: 0 25px 25px -15px rgb(80 80 80 / 82%);
  border-radius: 20px;
  padding: 48px 20px;
`,g=a(n)`
  font-family: Arial, Helvetica, sans-serif;
  width: 72px;
  height: 72px;
  border-radius: 36px;
  background-color: ${()=>i.elements.separator};
  font-size: 1.75em;
`;g.defaultProps={xAlign:!0,yAlign:!0};var V=a(B)`
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
`,A=e=>preactH(F,{fontSize:"1.1em",align:!0,color:i.typography.primary,lineHeight:"1.7",...e}),c=({emoteOnly:e,secondary:o,...t})=>preactH(_,{background:o&&i.elements.opaqueSurface,color:o&&i.typography.primary,fontSize:e?"1.25em":"1em",borderRadius:"20px",xAlign:!0,yAlign:!0,style:{minWidth:"140px",minHeight:"40px"},...t}),O=({root:e,close:o,product:t})=>{let[s,r]=u("default");D(v),(0,z.useEffect)(()=>{T(!0),b("feedback_form_opened",{product:t})},[]);let f=d=>{b("feedback_form_rating",{rating:d==="positive"?1:0,product:t})};return preactH($,{xAlign:!0,yAlign:!0,onClick:o},preactH(j,{column:!0,xAlign:!0,yAlign:!0,relative:!0,separation:"16px",onClick:d=>d.stopPropagation()},preactH(V,{onClick:o}),s==="default"&&preactH(G,{setRoutePositive:()=>{r("positive"),f("positive")},setRouteNegative:()=>{r("negative"),f("negative")}}),s==="negative"&&preactH(Q,{close:o,product:t}),s==="positive"&&preactH(Y,{close:o})))},G=({setRoutePositive:e,setRouteNegative:o})=>preactH(Fragment,null,preactH(g,null,"\u2764\uFE0F"),preactH(n,{column:!0,xAlign:!0,width:"80%"},preactH(p,{fontSize:"1.25em"},"Do you like Speechify?"),preactH(A,null,"The team at Speechify works hard to make your experience the best possible. Your feedback means a lot!")),preactH(n,{separation:"8px"},preactH(c,{onClick:o,emoteOnly:!0,secondary:!0},"\u{1F494}\u{1F44E}"),preactH(c,{onClick:e,emoteOnly:!0},"\u2764\uFE0F\u{1F44D}"))),U=e=>preactH(F,{align:!0,fontSize:"0.95em",color:i.controls.tints.pessimistic,...e}),Q=({close:e,product:o})=>{let[t,s]=u(""),[r,f]=u(""),[d,N]=u();return preactH(Fragment,null,preactH(g,null,"\u{1F494}"),preactH(n,{column:!0,xAlign:!0,width:"80%"},preactH(p,{fontSize:"1.25em"},"We're so sorry..."),preactH(A,null,"Let us know how we can help enhance the quality of your experience by sending us a message!")),preactH(C,{placeholder:"Email",value:t,onChange:x=>s(x.target.value)}),preactH(K,{placeholder:"Feedback",value:r,onChange:x=>f(x.target.value),rows:6,resize:!1}),preactH(U,null,d),preactH(n,{separation:"8px"},preactH(c,{secondary:!0,onClick:e},"Not Now"),preactH(c,{onClick:()=>{if(!r)return N("Please type in some feedback");b("feedback_form_feedback",{rating:0,feedback:r,email:t,product:o}),e()}},"Let us know")))},Y=({close:e})=>preactH(Fragment,null,preactH(g,null,"\u2B50"),preactH(n,{column:!0,xAlign:!0,width:"80%"},preactH(p,{fontSize:"1.25em"},"Thank you!"),preactH(A,null,"We\u2019re thrilled to have you among our users. \u{1F929} Please help Speechify by rating us 5 stars and leaving us a comment on the Chrome Web Store!")),preactH(c,{as:"a",target:"_blank",href:"https://chrome.google.com/webstore/detail/speechify-for-chrome/ljflmlehinmoeknoonhibbjpldiijjmm/reviews",onClick:e},"Rate us \u2728"));var L=500;var J=()=>{k("end",async()=>{let e=await y(),o=await E("feedback-csat");e>=L&&(o?.displayCount??0)<1&&h({id:"feedback-csat",duration:0,timeSensitive:!1,global:!0,render:P,priority:150})})};async function X(){w()&&J()}var Z=e=>{k("end",async()=>{let{hasSeenFeedbackCsat:o}=await S(),t=await y(),s=await E("feedback-form");t>=L&&!o&&(s?.displayCount??0)<1&&h({id:"feedback-form",duration:0,timeSensitive:!1,global:!0,render:({dismiss:r})=>preactH(O,{close:r,product:e}),priority:150})})};async function De(e){let o=await I("desktopFeedback").then(t=>t);o==="feedback_form"&&(R("desktopFeedback",o),Z(e))}export{X as a,De as b};
