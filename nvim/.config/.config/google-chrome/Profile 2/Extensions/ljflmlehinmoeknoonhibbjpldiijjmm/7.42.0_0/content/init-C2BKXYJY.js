import{b as ri,k as ni,r as ce}from"./chunk-Y436CPQW.js";import"./chunk-YARRUQT4.js";import{b as oi}from"./chunk-HLSWRWBV.js";import"./chunk-3FJ4SFT7.js";import"./chunk-575CQTPS.js";import"./chunk-XXPLLLU4.js";import"./chunk-IIMGMDOG.js";import"./chunk-2S74ZO7V.js";import{i as ai}from"./chunk-HSXMKYAR.js";import"./chunk-DVQRYGQU.js";import{a as ii}from"./chunk-JBG5NKQC.js";import"./chunk-E27TCN4W.js";import"./chunk-BL5UKU3H.js";import"./chunk-RC4DYKRG.js";import{Bb as Qe,Cb as Ze,J as $e,K as he,L as Ge,M as qe,Mb as Ke,Nb as Je,Ob as ti,P as Ht,Qc as si,Rc as hi,Ua as At,Ub as ei,i as Yt,j as Rt,l as Xt,m as Ue,n as je,na as Fe,o as Ve,pd as ci,wa as Wt}from"./chunk-RMQ4NLAU.js";import"./chunk-5EVNDVHU.js";import"./chunk-Y5BTQH3A.js";import"./chunk-O5GRUDUJ.js";import"./chunk-GMPUNJGK.js";import"./chunk-HQV57N4U.js";import"./chunk-NLLWQ24O.js";import"./chunk-RG677XWH.js";import"./chunk-GPNV76YT.js";import"./chunk-SU3RHPI5.js";import"./chunk-EZ62NCTT.js";import"./chunk-OIJSW4UB.js";import"./chunk-MPXSC7RD.js";import"./chunk-TS65KX6G.js";import{c as We,e as se,i as rt,k as preactH,p as ot}from"./chunk-LA3C5XP7.js";var li=We((le,pe)=>{ot();rt();(function(u,b){typeof le=="object"&&typeof pe<"u"?pe.exports=b():typeof define=="function"&&define.amd?define(b):(u=typeof globalThis<"u"?globalThis:u||self,u.Cropper=b())})(le,function(){"use strict";function u(a,t){var i=Object.keys(a);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(a);t&&(e=e.filter(function(n){return Object.getOwnPropertyDescriptor(a,n).enumerable})),i.push.apply(i,e)}return i}function b(a){for(var t=1;t<arguments.length;t++){var i=arguments[t]!=null?arguments[t]:{};t%2?u(Object(i),!0).forEach(function(e){Y(a,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(i)):u(Object(i)).forEach(function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(i,e))})}return a}function m(a){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?m=function(t){return typeof t}:m=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m(a)}function g(a,t){if(!(a instanceof t))throw new TypeError("Cannot call a class as a function")}function M(a,t){for(var i=0;i<t.length;i++){var e=t[i];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(a,e.key,e)}}function S(a,t,i){return t&&M(a.prototype,t),i&&M(a,i),a}function Y(a,t,i){return t in a?Object.defineProperty(a,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):a[t]=i,a}function $(a){return tt(a)||G(a)||T(a)||q()}function tt(a){if(Array.isArray(a))return B(a)}function G(a){if(typeof Symbol<"u"&&a[Symbol.iterator]!=null||a["@@iterator"]!=null)return Array.from(a)}function T(a,t){if(!!a){if(typeof a=="string")return B(a,t);var i=Object.prototype.toString.call(a).slice(8,-1);if(i==="Object"&&a.constructor&&(i=a.constructor.name),i==="Map"||i==="Set")return Array.from(a);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return B(a,t)}}function B(a,t){(t==null||t>a.length)&&(t=a.length);for(var i=0,e=new Array(t);i<t;i++)e[i]=a[i];return e}function q(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var X=typeof window<"u"&&typeof window.document<"u",A=X?window:{},H=X&&A.document.documentElement?"ontouchstart"in A.document.documentElement:!1,W=X?"PointerEvent"in A:!1,E="cropper",dt="all",It="crop",zt="move",Q="zoom",L="e",P="w",et="s",ht="n",Et="ne",Mt="nw",Tt="se",Ct="sw",Gt="".concat(E,"-crop"),ue="".concat(E,"-disabled"),U="".concat(E,"-hidden"),me="".concat(E,"-hide"),Ei="".concat(E,"-invisible"),_t="".concat(E,"-modal"),qt="".concat(E,"-move"),Ot="".concat(E,"Action"),Bt="".concat(E,"Preview"),Ft="crop",ge="move",ve="none",Qt="crop",Zt="cropend",Kt="cropmove",Jt="cropstart",we="dblclick",Mi=H?"touchstart":"mousedown",Ti=H?"touchmove":"mousemove",Ci=H?"touchend touchcancel":"mouseup",be=W?"pointerdown":Mi,ye=W?"pointermove":Ti,xe=W?"pointerup pointercancel":Ci,De="ready",Ee="resize",Me="wheel",te="zoom",Te="image/jpeg",Oi=/^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/,Si=/^data:/,Ni=/^data:image\/jpeg;base64,/,Ri=/^img|canvas$/i,Ce=200,Oe=100,Se={viewMode:0,dragMode:Ft,initialAspectRatio:NaN,aspectRatio:NaN,data:null,preview:"",responsive:!0,restore:!0,checkCrossOrigin:!0,checkOrientation:!0,modal:!0,guides:!0,center:!0,highlight:!0,background:!0,autoCrop:!0,autoCropArea:.8,movable:!0,rotatable:!0,scalable:!0,zoomable:!0,zoomOnTouch:!0,zoomOnWheel:!0,wheelZoomRatio:.1,cropBoxMovable:!0,cropBoxResizable:!0,toggleDragModeOnDblclick:!0,minCanvasWidth:0,minCanvasHeight:0,minCropBoxWidth:0,minCropBoxHeight:0,minContainerWidth:Ce,minContainerHeight:Oe,ready:null,cropstart:null,cropmove:null,cropend:null,crop:null,zoom:null},Ai='<div class="cropper-container" touch-action="none"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-cropper-action="e"></span><span class="cropper-line line-n" data-cropper-action="n"></span><span class="cropper-line line-w" data-cropper-action="w"></span><span class="cropper-line line-s" data-cropper-action="s"></span><span class="cropper-point point-e" data-cropper-action="e"></span><span class="cropper-point point-n" data-cropper-action="n"></span><span class="cropper-point point-w" data-cropper-action="w"></span><span class="cropper-point point-s" data-cropper-action="s"></span><span class="cropper-point point-ne" data-cropper-action="ne"></span><span class="cropper-point point-nw" data-cropper-action="nw"></span><span class="cropper-point point-sw" data-cropper-action="sw"></span><span class="cropper-point point-se" data-cropper-action="se"></span></div></div>',ki=Number.isNaN||A.isNaN;function v(a){return typeof a=="number"&&!ki(a)}var Ne=function(t){return t>0&&t<1/0};function ee(a){return typeof a>"u"}function ft(a){return m(a)==="object"&&a!==null}var Ii=Object.prototype.hasOwnProperty;function vt(a){if(!ft(a))return!1;try{var t=a.constructor,i=t.prototype;return t&&i&&Ii.call(i,"isPrototypeOf")}catch{return!1}}function j(a){return typeof a=="function"}var zi=Array.prototype.slice;function Re(a){return Array.from?Array.from(a):zi.call(a)}function N(a,t){return a&&j(t)&&(Array.isArray(a)||v(a.length)?Re(a).forEach(function(i,e){t.call(a,i,e,a)}):ft(a)&&Object.keys(a).forEach(function(i){t.call(a,a[i],i,a)})),a}var C=Object.assign||function(t){for(var i=arguments.length,e=new Array(i>1?i-1:0),n=1;n<i;n++)e[n-1]=arguments[n];return ft(t)&&e.length>0&&e.forEach(function(r){ft(r)&&Object.keys(r).forEach(function(o){t[o]=r[o]})}),t},_i=/\.\d*(?:0|9){12}\d*$/;function wt(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1e11;return _i.test(a)?Math.round(a*t)/t:a}var Bi=/^width|height|left|top|marginLeft|marginTop$/;function ct(a,t){var i=a.style;N(t,function(e,n){Bi.test(n)&&v(e)&&(e="".concat(e,"px")),i[n]=e})}function Li(a,t){return a.classList?a.classList.contains(t):a.className.indexOf(t)>-1}function z(a,t){if(!!t){if(v(a.length)){N(a,function(e){z(e,t)});return}if(a.classList){a.classList.add(t);return}var i=a.className.trim();i?i.indexOf(t)<0&&(a.className="".concat(i," ").concat(t)):a.className=t}}function it(a,t){if(!!t){if(v(a.length)){N(a,function(i){it(i,t)});return}if(a.classList){a.classList.remove(t);return}a.className.indexOf(t)>=0&&(a.className=a.className.replace(t,""))}}function bt(a,t,i){if(!!t){if(v(a.length)){N(a,function(e){bt(e,t,i)});return}i?z(a,t):it(a,t)}}var Pi=/([a-z\d])([A-Z])/g;function ie(a){return a.replace(Pi,"$1-$2").toLowerCase()}function ae(a,t){return ft(a[t])?a[t]:a.dataset?a.dataset[t]:a.getAttribute("data-".concat(ie(t)))}function St(a,t,i){ft(i)?a[t]=i:a.dataset?a.dataset[t]=i:a.setAttribute("data-".concat(ie(t)),i)}function Yi(a,t){if(ft(a[t]))try{delete a[t]}catch{a[t]=void 0}else if(a.dataset)try{delete a.dataset[t]}catch{a.dataset[t]=void 0}else a.removeAttribute("data-".concat(ie(t)))}var Ae=/\s\s*/,ke=function(){var a=!1;if(X){var t=!1,i=function(){},e=Object.defineProperty({},"once",{get:function(){return a=!0,t},set:function(r){t=r}});A.addEventListener("test",i,e),A.removeEventListener("test",i,e)}return a}();function J(a,t,i){var e=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},n=i;t.trim().split(Ae).forEach(function(r){if(!ke){var o=a.listeners;o&&o[r]&&o[r][i]&&(n=o[r][i],delete o[r][i],Object.keys(o[r]).length===0&&delete o[r],Object.keys(o).length===0&&delete a.listeners)}a.removeEventListener(r,n,e)})}function Z(a,t,i){var e=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},n=i;t.trim().split(Ae).forEach(function(r){if(e.once&&!ke){var o=a.listeners,s=o===void 0?{}:o;n=function(){delete s[r][i],a.removeEventListener(r,n,e);for(var l=arguments.length,h=new Array(l),c=0;c<l;c++)h[c]=arguments[c];i.apply(a,h)},s[r]||(s[r]={}),s[r][i]&&a.removeEventListener(r,s[r][i],e),s[r][i]=n,a.listeners=s}a.addEventListener(r,n,e)})}function yt(a,t,i){var e;return j(Event)&&j(CustomEvent)?e=new CustomEvent(t,{detail:i,bubbles:!0,cancelable:!0}):(e=document.createEvent("CustomEvent"),e.initCustomEvent(t,!0,!0,i)),a.dispatchEvent(e)}function Ie(a){var t=a.getBoundingClientRect();return{left:t.left+(window.pageXOffset-document.documentElement.clientLeft),top:t.top+(window.pageYOffset-document.documentElement.clientTop)}}var re=A.location,Xi=/^(\w+:)\/\/([^:/?#]*):?(\d*)/i;function ze(a){var t=a.match(Xi);return t!==null&&(t[1]!==re.protocol||t[2]!==re.hostname||t[3]!==re.port)}function _e(a){var t="timestamp=".concat(new Date().getTime());return a+(a.indexOf("?")===-1?"?":"&")+t}function Nt(a){var t=a.rotate,i=a.scaleX,e=a.scaleY,n=a.translateX,r=a.translateY,o=[];v(n)&&n!==0&&o.push("translateX(".concat(n,"px)")),v(r)&&r!==0&&o.push("translateY(".concat(r,"px)")),v(t)&&t!==0&&o.push("rotate(".concat(t,"deg)")),v(i)&&i!==1&&o.push("scaleX(".concat(i,")")),v(e)&&e!==1&&o.push("scaleY(".concat(e,")"));var s=o.length?o.join(" "):"none";return{WebkitTransform:s,msTransform:s,transform:s}}function Hi(a){var t=b({},a),i=0;return N(a,function(e,n){delete t[n],N(t,function(r){var o=Math.abs(e.startX-r.startX),s=Math.abs(e.startY-r.startY),d=Math.abs(e.endX-r.endX),l=Math.abs(e.endY-r.endY),h=Math.sqrt(o*o+s*s),c=Math.sqrt(d*d+l*l),p=(c-h)/h;Math.abs(p)>Math.abs(i)&&(i=p)})}),i}function Lt(a,t){var i=a.pageX,e=a.pageY,n={endX:i,endY:e};return t?n:b({startX:i,startY:e},n)}function Wi(a){var t=0,i=0,e=0;return N(a,function(n){var r=n.startX,o=n.startY;t+=r,i+=o,e+=1}),t/=e,i/=e,{pageX:t,pageY:i}}function lt(a){var t=a.aspectRatio,i=a.height,e=a.width,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"contain",r=Ne(e),o=Ne(i);if(r&&o){var s=i*t;n==="contain"&&s>e||n==="cover"&&s<e?i=e/t:e=i*t}else r?i=e/t:o&&(e=i*t);return{width:e,height:i}}function Ui(a){var t=a.width,i=a.height,e=a.degree;if(e=Math.abs(e)%180,e===90)return{width:i,height:t};var n=e%90*Math.PI/180,r=Math.sin(n),o=Math.cos(n),s=t*o+i*r,d=t*r+i*o;return e>90?{width:d,height:s}:{width:s,height:d}}function ji(a,t,i,e){var n=t.aspectRatio,r=t.naturalWidth,o=t.naturalHeight,s=t.rotate,d=s===void 0?0:s,l=t.scaleX,h=l===void 0?1:l,c=t.scaleY,p=c===void 0?1:c,y=i.aspectRatio,w=i.naturalWidth,O=i.naturalHeight,x=e.fillColor,k=x===void 0?"transparent":x,_=e.imageSmoothingEnabled,R=_===void 0?!0:_,nt=e.imageSmoothingQuality,F=nt===void 0?"low":nt,f=e.maxWidth,D=f===void 0?1/0:f,I=e.maxHeight,K=I===void 0?1/0:I,st=e.minWidth,ut=st===void 0?0:st,mt=e.minHeight,pt=mt===void 0?0:mt,at=document.createElement("canvas"),V=at.getContext("2d"),gt=lt({aspectRatio:y,width:D,height:K}),Pt=lt({aspectRatio:y,width:ut,height:pt},"cover"),oe=Math.min(gt.width,Math.max(Pt.width,w)),ne=Math.min(gt.height,Math.max(Pt.height,O)),Pe=lt({aspectRatio:n,width:D,height:K}),Ye=lt({aspectRatio:n,width:ut,height:pt},"cover"),Xe=Math.min(Pe.width,Math.max(Ye.width,r)),He=Math.min(Pe.height,Math.max(Ye.height,o)),ra=[-Xe/2,-He/2,Xe,He];return at.width=wt(oe),at.height=wt(ne),V.fillStyle=k,V.fillRect(0,0,oe,ne),V.save(),V.translate(oe/2,ne/2),V.rotate(d*Math.PI/180),V.scale(h,p),V.imageSmoothingEnabled=R,V.imageSmoothingQuality=F,V.drawImage.apply(V,[a].concat($(ra.map(function(oa){return Math.floor(wt(oa))})))),V.restore(),at}var Be=String.fromCharCode;function Vi(a,t,i){var e="";i+=t;for(var n=t;n<i;n+=1)e+=Be(a.getUint8(n));return e}var $i=/^data:.*,/;function Gi(a){var t=a.replace($i,""),i=atob(t),e=new ArrayBuffer(i.length),n=new Uint8Array(e);return N(n,function(r,o){n[o]=i.charCodeAt(o)}),e}function qi(a,t){for(var i=[],e=8192,n=new Uint8Array(a);n.length>0;)i.push(Be.apply(null,Re(n.subarray(0,e)))),n=n.subarray(e);return"data:".concat(t,";base64,").concat(btoa(i.join("")))}function Fi(a){var t=new DataView(a),i;try{var e,n,r;if(t.getUint8(0)===255&&t.getUint8(1)===216)for(var o=t.byteLength,s=2;s+1<o;){if(t.getUint8(s)===255&&t.getUint8(s+1)===225){n=s;break}s+=1}if(n){var d=n+4,l=n+10;if(Vi(t,d,4)==="Exif"){var h=t.getUint16(l);if(e=h===18761,(e||h===19789)&&t.getUint16(l+2,e)===42){var c=t.getUint32(l+4,e);c>=8&&(r=l+c)}}}if(r){var p=t.getUint16(r,e),y,w;for(w=0;w<p;w+=1)if(y=r+w*12+2,t.getUint16(y,e)===274){y+=8,i=t.getUint16(y,e),t.setUint16(y,1,e);break}}}catch{i=1}return i}function Qi(a){var t=0,i=1,e=1;switch(a){case 2:i=-1;break;case 3:t=-180;break;case 4:e=-1;break;case 5:t=90,e=-1;break;case 6:t=90;break;case 7:t=90,i=-1;break;case 8:t=-90;break}return{rotate:t,scaleX:i,scaleY:e}}var Zi={render:function(){this.initContainer(),this.initCanvas(),this.initCropBox(),this.renderCanvas(),this.cropped&&this.renderCropBox()},initContainer:function(){var t=this.element,i=this.options,e=this.container,n=this.cropper,r=Number(i.minContainerWidth),o=Number(i.minContainerHeight);z(n,U),it(t,U);var s={width:Math.max(e.offsetWidth,r>=0?r:Ce),height:Math.max(e.offsetHeight,o>=0?o:Oe)};this.containerData=s,ct(n,{width:s.width,height:s.height}),z(t,U),it(n,U)},initCanvas:function(){var t=this.containerData,i=this.imageData,e=this.options.viewMode,n=Math.abs(i.rotate)%180===90,r=n?i.naturalHeight:i.naturalWidth,o=n?i.naturalWidth:i.naturalHeight,s=r/o,d=t.width,l=t.height;t.height*s>t.width?e===3?d=t.height*s:l=t.width/s:e===3?l=t.width/s:d=t.height*s;var h={aspectRatio:s,naturalWidth:r,naturalHeight:o,width:d,height:l};this.canvasData=h,this.limited=e===1||e===2,this.limitCanvas(!0,!0),h.width=Math.min(Math.max(h.width,h.minWidth),h.maxWidth),h.height=Math.min(Math.max(h.height,h.minHeight),h.maxHeight),h.left=(t.width-h.width)/2,h.top=(t.height-h.height)/2,h.oldLeft=h.left,h.oldTop=h.top,this.initialCanvasData=C({},h)},limitCanvas:function(t,i){var e=this.options,n=this.containerData,r=this.canvasData,o=this.cropBoxData,s=e.viewMode,d=r.aspectRatio,l=this.cropped&&o;if(t){var h=Number(e.minCanvasWidth)||0,c=Number(e.minCanvasHeight)||0;s>1?(h=Math.max(h,n.width),c=Math.max(c,n.height),s===3&&(c*d>h?h=c*d:c=h/d)):s>0&&(h?h=Math.max(h,l?o.width:0):c?c=Math.max(c,l?o.height:0):l&&(h=o.width,c=o.height,c*d>h?h=c*d:c=h/d));var p=lt({aspectRatio:d,width:h,height:c});h=p.width,c=p.height,r.minWidth=h,r.minHeight=c,r.maxWidth=1/0,r.maxHeight=1/0}if(i)if(s>(l?0:1)){var y=n.width-r.width,w=n.height-r.height;r.minLeft=Math.min(0,y),r.minTop=Math.min(0,w),r.maxLeft=Math.max(0,y),r.maxTop=Math.max(0,w),l&&this.limited&&(r.minLeft=Math.min(o.left,o.left+(o.width-r.width)),r.minTop=Math.min(o.top,o.top+(o.height-r.height)),r.maxLeft=o.left,r.maxTop=o.top,s===2&&(r.width>=n.width&&(r.minLeft=Math.min(0,y),r.maxLeft=Math.max(0,y)),r.height>=n.height&&(r.minTop=Math.min(0,w),r.maxTop=Math.max(0,w))))}else r.minLeft=-r.width,r.minTop=-r.height,r.maxLeft=n.width,r.maxTop=n.height},renderCanvas:function(t,i){var e=this.canvasData,n=this.imageData;if(i){var r=Ui({width:n.naturalWidth*Math.abs(n.scaleX||1),height:n.naturalHeight*Math.abs(n.scaleY||1),degree:n.rotate||0}),o=r.width,s=r.height,d=e.width*(o/e.naturalWidth),l=e.height*(s/e.naturalHeight);e.left-=(d-e.width)/2,e.top-=(l-e.height)/2,e.width=d,e.height=l,e.aspectRatio=o/s,e.naturalWidth=o,e.naturalHeight=s,this.limitCanvas(!0,!1)}(e.width>e.maxWidth||e.width<e.minWidth)&&(e.left=e.oldLeft),(e.height>e.maxHeight||e.height<e.minHeight)&&(e.top=e.oldTop),e.width=Math.min(Math.max(e.width,e.minWidth),e.maxWidth),e.height=Math.min(Math.max(e.height,e.minHeight),e.maxHeight),this.limitCanvas(!1,!0),e.left=Math.min(Math.max(e.left,e.minLeft),e.maxLeft),e.top=Math.min(Math.max(e.top,e.minTop),e.maxTop),e.oldLeft=e.left,e.oldTop=e.top,ct(this.canvas,C({width:e.width,height:e.height},Nt({translateX:e.left,translateY:e.top}))),this.renderImage(t),this.cropped&&this.limited&&this.limitCropBox(!0,!0)},renderImage:function(t){var i=this.canvasData,e=this.imageData,n=e.naturalWidth*(i.width/i.naturalWidth),r=e.naturalHeight*(i.height/i.naturalHeight);C(e,{width:n,height:r,left:(i.width-n)/2,top:(i.height-r)/2}),ct(this.image,C({width:e.width,height:e.height},Nt(C({translateX:e.left,translateY:e.top},e)))),t&&this.output()},initCropBox:function(){var t=this.options,i=this.canvasData,e=t.aspectRatio||t.initialAspectRatio,n=Number(t.autoCropArea)||.8,r={width:i.width,height:i.height};e&&(i.height*e>i.width?r.height=r.width/e:r.width=r.height*e),this.cropBoxData=r,this.limitCropBox(!0,!0),r.width=Math.min(Math.max(r.width,r.minWidth),r.maxWidth),r.height=Math.min(Math.max(r.height,r.minHeight),r.maxHeight),r.width=Math.max(r.minWidth,r.width*n),r.height=Math.max(r.minHeight,r.height*n),r.left=i.left+(i.width-r.width)/2,r.top=i.top+(i.height-r.height)/2,r.oldLeft=r.left,r.oldTop=r.top,this.initialCropBoxData=C({},r)},limitCropBox:function(t,i){var e=this.options,n=this.containerData,r=this.canvasData,o=this.cropBoxData,s=this.limited,d=e.aspectRatio;if(t){var l=Number(e.minCropBoxWidth)||0,h=Number(e.minCropBoxHeight)||0,c=s?Math.min(n.width,r.width,r.width+r.left,n.width-r.left):n.width,p=s?Math.min(n.height,r.height,r.height+r.top,n.height-r.top):n.height;l=Math.min(l,n.width),h=Math.min(h,n.height),d&&(l&&h?h*d>l?h=l/d:l=h*d:l?h=l/d:h&&(l=h*d),p*d>c?p=c/d:c=p*d),o.minWidth=Math.min(l,c),o.minHeight=Math.min(h,p),o.maxWidth=c,o.maxHeight=p}i&&(s?(o.minLeft=Math.max(0,r.left),o.minTop=Math.max(0,r.top),o.maxLeft=Math.min(n.width,r.left+r.width)-o.width,o.maxTop=Math.min(n.height,r.top+r.height)-o.height):(o.minLeft=0,o.minTop=0,o.maxLeft=n.width-o.width,o.maxTop=n.height-o.height))},renderCropBox:function(){var t=this.options,i=this.containerData,e=this.cropBoxData;(e.width>e.maxWidth||e.width<e.minWidth)&&(e.left=e.oldLeft),(e.height>e.maxHeight||e.height<e.minHeight)&&(e.top=e.oldTop),e.width=Math.min(Math.max(e.width,e.minWidth),e.maxWidth),e.height=Math.min(Math.max(e.height,e.minHeight),e.maxHeight),this.limitCropBox(!1,!0),e.left=Math.min(Math.max(e.left,e.minLeft),e.maxLeft),e.top=Math.min(Math.max(e.top,e.minTop),e.maxTop),e.oldLeft=e.left,e.oldTop=e.top,t.movable&&t.cropBoxMovable&&St(this.face,Ot,e.width>=i.width&&e.height>=i.height?zt:dt),ct(this.cropBox,C({width:e.width,height:e.height},Nt({translateX:e.left,translateY:e.top}))),this.cropped&&this.limited&&this.limitCanvas(!0,!0),this.disabled||this.output()},output:function(){this.preview(),yt(this.element,Qt,this.getData())}},Ki={initPreview:function(){var t=this.element,i=this.crossOrigin,e=this.options.preview,n=i?this.crossOriginUrl:this.url,r=t.alt||"The image to preview",o=document.createElement("img");if(i&&(o.crossOrigin=i),o.src=n,o.alt=r,this.viewBox.appendChild(o),this.viewBoxImage=o,!!e){var s=e;typeof e=="string"?s=t.ownerDocument.querySelectorAll(e):e.querySelector&&(s=[e]),this.previews=s,N(s,function(d){var l=document.createElement("img");St(d,Bt,{width:d.offsetWidth,height:d.offsetHeight,html:d.innerHTML}),i&&(l.crossOrigin=i),l.src=n,l.alt=r,l.style.cssText='display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"',d.innerHTML="",d.appendChild(l)})}},resetPreview:function(){N(this.previews,function(t){var i=ae(t,Bt);ct(t,{width:i.width,height:i.height}),t.innerHTML=i.html,Yi(t,Bt)})},preview:function(){var t=this.imageData,i=this.canvasData,e=this.cropBoxData,n=e.width,r=e.height,o=t.width,s=t.height,d=e.left-i.left-t.left,l=e.top-i.top-t.top;!this.cropped||this.disabled||(ct(this.viewBoxImage,C({width:o,height:s},Nt(C({translateX:-d,translateY:-l},t)))),N(this.previews,function(h){var c=ae(h,Bt),p=c.width,y=c.height,w=p,O=y,x=1;n&&(x=p/n,O=r*x),r&&O>y&&(x=y/r,w=n*x,O=y),ct(h,{width:w,height:O}),ct(h.getElementsByTagName("img")[0],C({width:o*x,height:s*x},Nt(C({translateX:-d*x,translateY:-l*x},t))))}))}},Ji={bind:function(){var t=this.element,i=this.options,e=this.cropper;j(i.cropstart)&&Z(t,Jt,i.cropstart),j(i.cropmove)&&Z(t,Kt,i.cropmove),j(i.cropend)&&Z(t,Zt,i.cropend),j(i.crop)&&Z(t,Qt,i.crop),j(i.zoom)&&Z(t,te,i.zoom),Z(e,be,this.onCropStart=this.cropStart.bind(this)),i.zoomable&&i.zoomOnWheel&&Z(e,Me,this.onWheel=this.wheel.bind(this),{passive:!1,capture:!0}),i.toggleDragModeOnDblclick&&Z(e,we,this.onDblclick=this.dblclick.bind(this)),Z(t.ownerDocument,ye,this.onCropMove=this.cropMove.bind(this)),Z(t.ownerDocument,xe,this.onCropEnd=this.cropEnd.bind(this)),i.responsive&&Z(window,Ee,this.onResize=this.resize.bind(this))},unbind:function(){var t=this.element,i=this.options,e=this.cropper;j(i.cropstart)&&J(t,Jt,i.cropstart),j(i.cropmove)&&J(t,Kt,i.cropmove),j(i.cropend)&&J(t,Zt,i.cropend),j(i.crop)&&J(t,Qt,i.crop),j(i.zoom)&&J(t,te,i.zoom),J(e,be,this.onCropStart),i.zoomable&&i.zoomOnWheel&&J(e,Me,this.onWheel,{passive:!1,capture:!0}),i.toggleDragModeOnDblclick&&J(e,we,this.onDblclick),J(t.ownerDocument,ye,this.onCropMove),J(t.ownerDocument,xe,this.onCropEnd),i.responsive&&J(window,Ee,this.onResize)}},ta={resize:function(){if(!this.disabled){var t=this.options,i=this.container,e=this.containerData,n=i.offsetWidth/e.width,r=i.offsetHeight/e.height,o=Math.abs(n-1)>Math.abs(r-1)?n:r;if(o!==1){var s,d;t.restore&&(s=this.getCanvasData(),d=this.getCropBoxData()),this.render(),t.restore&&(this.setCanvasData(N(s,function(l,h){s[h]=l*o})),this.setCropBoxData(N(d,function(l,h){d[h]=l*o})))}}},dblclick:function(){this.disabled||this.options.dragMode===ve||this.setDragMode(Li(this.dragBox,Gt)?ge:Ft)},wheel:function(t){var i=this,e=Number(this.options.wheelZoomRatio)||.1,n=1;this.disabled||(t.preventDefault(),!this.wheeling&&(this.wheeling=!0,setTimeout(function(){i.wheeling=!1},50),t.deltaY?n=t.deltaY>0?1:-1:t.wheelDelta?n=-t.wheelDelta/120:t.detail&&(n=t.detail>0?1:-1),this.zoom(-n*e,t)))},cropStart:function(t){var i=t.buttons,e=t.button;if(!(this.disabled||(t.type==="mousedown"||t.type==="pointerdown"&&t.pointerType==="mouse")&&(v(i)&&i!==1||v(e)&&e!==0||t.ctrlKey))){var n=this.options,r=this.pointers,o;t.changedTouches?N(t.changedTouches,function(s){r[s.identifier]=Lt(s)}):r[t.pointerId||0]=Lt(t),Object.keys(r).length>1&&n.zoomable&&n.zoomOnTouch?o=Q:o=ae(t.target,Ot),!!Oi.test(o)&&yt(this.element,Jt,{originalEvent:t,action:o})!==!1&&(t.preventDefault(),this.action=o,this.cropping=!1,o===It&&(this.cropping=!0,z(this.dragBox,_t)))}},cropMove:function(t){var i=this.action;if(!(this.disabled||!i)){var e=this.pointers;t.preventDefault(),yt(this.element,Kt,{originalEvent:t,action:i})!==!1&&(t.changedTouches?N(t.changedTouches,function(n){C(e[n.identifier]||{},Lt(n,!0))}):C(e[t.pointerId||0]||{},Lt(t,!0)),this.change(t))}},cropEnd:function(t){if(!this.disabled){var i=this.action,e=this.pointers;t.changedTouches?N(t.changedTouches,function(n){delete e[n.identifier]}):delete e[t.pointerId||0],i&&(t.preventDefault(),Object.keys(e).length||(this.action=""),this.cropping&&(this.cropping=!1,bt(this.dragBox,_t,this.cropped&&this.options.modal)),yt(this.element,Zt,{originalEvent:t,action:i}))}}},ea={change:function(t){var i=this.options,e=this.canvasData,n=this.containerData,r=this.cropBoxData,o=this.pointers,s=this.action,d=i.aspectRatio,l=r.left,h=r.top,c=r.width,p=r.height,y=l+c,w=h+p,O=0,x=0,k=n.width,_=n.height,R=!0,nt;!d&&t.shiftKey&&(d=c&&p?c/p:1),this.limited&&(O=r.minLeft,x=r.minTop,k=O+Math.min(n.width,e.width,e.left+e.width),_=x+Math.min(n.height,e.height,e.top+e.height));var F=o[Object.keys(o)[0]],f={x:F.endX-F.startX,y:F.endY-F.startY},D=function(K){switch(K){case L:y+f.x>k&&(f.x=k-y);break;case P:l+f.x<O&&(f.x=O-l);break;case ht:h+f.y<x&&(f.y=x-h);break;case et:w+f.y>_&&(f.y=_-w);break}};switch(s){case dt:l+=f.x,h+=f.y;break;case L:if(f.x>=0&&(y>=k||d&&(h<=x||w>=_))){R=!1;break}D(L),c+=f.x,c<0&&(s=P,c=-c,l-=c),d&&(p=c/d,h+=(r.height-p)/2);break;case ht:if(f.y<=0&&(h<=x||d&&(l<=O||y>=k))){R=!1;break}D(ht),p-=f.y,h+=f.y,p<0&&(s=et,p=-p,h-=p),d&&(c=p*d,l+=(r.width-c)/2);break;case P:if(f.x<=0&&(l<=O||d&&(h<=x||w>=_))){R=!1;break}D(P),c-=f.x,l+=f.x,c<0&&(s=L,c=-c,l-=c),d&&(p=c/d,h+=(r.height-p)/2);break;case et:if(f.y>=0&&(w>=_||d&&(l<=O||y>=k))){R=!1;break}D(et),p+=f.y,p<0&&(s=ht,p=-p,h-=p),d&&(c=p*d,l+=(r.width-c)/2);break;case Et:if(d){if(f.y<=0&&(h<=x||y>=k)){R=!1;break}D(ht),p-=f.y,h+=f.y,c=p*d}else D(ht),D(L),f.x>=0?y<k?c+=f.x:f.y<=0&&h<=x&&(R=!1):c+=f.x,f.y<=0?h>x&&(p-=f.y,h+=f.y):(p-=f.y,h+=f.y);c<0&&p<0?(s=Ct,p=-p,c=-c,h-=p,l-=c):c<0?(s=Mt,c=-c,l-=c):p<0&&(s=Tt,p=-p,h-=p);break;case Mt:if(d){if(f.y<=0&&(h<=x||l<=O)){R=!1;break}D(ht),p-=f.y,h+=f.y,c=p*d,l+=r.width-c}else D(ht),D(P),f.x<=0?l>O?(c-=f.x,l+=f.x):f.y<=0&&h<=x&&(R=!1):(c-=f.x,l+=f.x),f.y<=0?h>x&&(p-=f.y,h+=f.y):(p-=f.y,h+=f.y);c<0&&p<0?(s=Tt,p=-p,c=-c,h-=p,l-=c):c<0?(s=Et,c=-c,l-=c):p<0&&(s=Ct,p=-p,h-=p);break;case Ct:if(d){if(f.x<=0&&(l<=O||w>=_)){R=!1;break}D(P),c-=f.x,l+=f.x,p=c/d}else D(et),D(P),f.x<=0?l>O?(c-=f.x,l+=f.x):f.y>=0&&w>=_&&(R=!1):(c-=f.x,l+=f.x),f.y>=0?w<_&&(p+=f.y):p+=f.y;c<0&&p<0?(s=Et,p=-p,c=-c,h-=p,l-=c):c<0?(s=Tt,c=-c,l-=c):p<0&&(s=Mt,p=-p,h-=p);break;case Tt:if(d){if(f.x>=0&&(y>=k||w>=_)){R=!1;break}D(L),c+=f.x,p=c/d}else D(et),D(L),f.x>=0?y<k?c+=f.x:f.y>=0&&w>=_&&(R=!1):c+=f.x,f.y>=0?w<_&&(p+=f.y):p+=f.y;c<0&&p<0?(s=Mt,p=-p,c=-c,h-=p,l-=c):c<0?(s=Ct,c=-c,l-=c):p<0&&(s=Et,p=-p,h-=p);break;case zt:this.move(f.x,f.y),R=!1;break;case Q:this.zoom(Hi(o),t),R=!1;break;case It:if(!f.x||!f.y){R=!1;break}nt=Ie(this.cropper),l=F.startX-nt.left,h=F.startY-nt.top,c=r.minWidth,p=r.minHeight,f.x>0?s=f.y>0?Tt:Et:f.x<0&&(l-=c,s=f.y>0?Ct:Mt),f.y<0&&(h-=p),this.cropped||(it(this.cropBox,U),this.cropped=!0,this.limited&&this.limitCropBox(!0,!0));break}R&&(r.width=c,r.height=p,r.left=l,r.top=h,this.action=s,this.renderCropBox()),N(o,function(I){I.startX=I.endX,I.startY=I.endY})}},ia={crop:function(){return this.ready&&!this.cropped&&!this.disabled&&(this.cropped=!0,this.limitCropBox(!0,!0),this.options.modal&&z(this.dragBox,_t),it(this.cropBox,U),this.setCropBoxData(this.initialCropBoxData)),this},reset:function(){return this.ready&&!this.disabled&&(this.imageData=C({},this.initialImageData),this.canvasData=C({},this.initialCanvasData),this.cropBoxData=C({},this.initialCropBoxData),this.renderCanvas(),this.cropped&&this.renderCropBox()),this},clear:function(){return this.cropped&&!this.disabled&&(C(this.cropBoxData,{left:0,top:0,width:0,height:0}),this.cropped=!1,this.renderCropBox(),this.limitCanvas(!0,!0),this.renderCanvas(),it(this.dragBox,_t),z(this.cropBox,U)),this},replace:function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return!this.disabled&&t&&(this.isImg&&(this.element.src=t),i?(this.url=t,this.image.src=t,this.ready&&(this.viewBoxImage.src=t,N(this.previews,function(e){e.getElementsByTagName("img")[0].src=t}))):(this.isImg&&(this.replaced=!0),this.options.data=null,this.uncreate(),this.load(t))),this},enable:function(){return this.ready&&this.disabled&&(this.disabled=!1,it(this.cropper,ue)),this},disable:function(){return this.ready&&!this.disabled&&(this.disabled=!0,z(this.cropper,ue)),this},destroy:function(){var t=this.element;return t[E]?(t[E]=void 0,this.isImg&&this.replaced&&(t.src=this.originalUrl),this.uncreate(),this):this},move:function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:t,e=this.canvasData,n=e.left,r=e.top;return this.moveTo(ee(t)?t:n+Number(t),ee(i)?i:r+Number(i))},moveTo:function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:t,e=this.canvasData,n=!1;return t=Number(t),i=Number(i),this.ready&&!this.disabled&&this.options.movable&&(v(t)&&(e.left=t,n=!0),v(i)&&(e.top=i,n=!0),n&&this.renderCanvas(!0)),this},zoom:function(t,i){var e=this.canvasData;return t=Number(t),t<0?t=1/(1-t):t=1+t,this.zoomTo(e.width*t/e.naturalWidth,null,i)},zoomTo:function(t,i,e){var n=this.options,r=this.canvasData,o=r.width,s=r.height,d=r.naturalWidth,l=r.naturalHeight;if(t=Number(t),t>=0&&this.ready&&!this.disabled&&n.zoomable){var h=d*t,c=l*t;if(yt(this.element,te,{ratio:t,oldRatio:o/d,originalEvent:e})===!1)return this;if(e){var p=this.pointers,y=Ie(this.cropper),w=p&&Object.keys(p).length?Wi(p):{pageX:e.pageX,pageY:e.pageY};r.left-=(h-o)*((w.pageX-y.left-r.left)/o),r.top-=(c-s)*((w.pageY-y.top-r.top)/s)}else vt(i)&&v(i.x)&&v(i.y)?(r.left-=(h-o)*((i.x-r.left)/o),r.top-=(c-s)*((i.y-r.top)/s)):(r.left-=(h-o)/2,r.top-=(c-s)/2);r.width=h,r.height=c,this.renderCanvas(!0)}return this},rotate:function(t){return this.rotateTo((this.imageData.rotate||0)+Number(t))},rotateTo:function(t){return t=Number(t),v(t)&&this.ready&&!this.disabled&&this.options.rotatable&&(this.imageData.rotate=t%360,this.renderCanvas(!0,!0)),this},scaleX:function(t){var i=this.imageData.scaleY;return this.scale(t,v(i)?i:1)},scaleY:function(t){var i=this.imageData.scaleX;return this.scale(v(i)?i:1,t)},scale:function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:t,e=this.imageData,n=!1;return t=Number(t),i=Number(i),this.ready&&!this.disabled&&this.options.scalable&&(v(t)&&(e.scaleX=t,n=!0),v(i)&&(e.scaleY=i,n=!0),n&&this.renderCanvas(!0,!0)),this},getData:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,i=this.options,e=this.imageData,n=this.canvasData,r=this.cropBoxData,o;if(this.ready&&this.cropped){o={x:r.left-n.left,y:r.top-n.top,width:r.width,height:r.height};var s=e.width/e.naturalWidth;if(N(o,function(h,c){o[c]=h/s}),t){var d=Math.round(o.y+o.height),l=Math.round(o.x+o.width);o.x=Math.round(o.x),o.y=Math.round(o.y),o.width=l-o.x,o.height=d-o.y}}else o={x:0,y:0,width:0,height:0};return i.rotatable&&(o.rotate=e.rotate||0),i.scalable&&(o.scaleX=e.scaleX||1,o.scaleY=e.scaleY||1),o},setData:function(t){var i=this.options,e=this.imageData,n=this.canvasData,r={};if(this.ready&&!this.disabled&&vt(t)){var o=!1;i.rotatable&&v(t.rotate)&&t.rotate!==e.rotate&&(e.rotate=t.rotate,o=!0),i.scalable&&(v(t.scaleX)&&t.scaleX!==e.scaleX&&(e.scaleX=t.scaleX,o=!0),v(t.scaleY)&&t.scaleY!==e.scaleY&&(e.scaleY=t.scaleY,o=!0)),o&&this.renderCanvas(!0,!0);var s=e.width/e.naturalWidth;v(t.x)&&(r.left=t.x*s+n.left),v(t.y)&&(r.top=t.y*s+n.top),v(t.width)&&(r.width=t.width*s),v(t.height)&&(r.height=t.height*s),this.setCropBoxData(r)}return this},getContainerData:function(){return this.ready?C({},this.containerData):{}},getImageData:function(){return this.sized?C({},this.imageData):{}},getCanvasData:function(){var t=this.canvasData,i={};return this.ready&&N(["left","top","width","height","naturalWidth","naturalHeight"],function(e){i[e]=t[e]}),i},setCanvasData:function(t){var i=this.canvasData,e=i.aspectRatio;return this.ready&&!this.disabled&&vt(t)&&(v(t.left)&&(i.left=t.left),v(t.top)&&(i.top=t.top),v(t.width)?(i.width=t.width,i.height=t.width/e):v(t.height)&&(i.height=t.height,i.width=t.height*e),this.renderCanvas(!0)),this},getCropBoxData:function(){var t=this.cropBoxData,i;return this.ready&&this.cropped&&(i={left:t.left,top:t.top,width:t.width,height:t.height}),i||{}},setCropBoxData:function(t){var i=this.cropBoxData,e=this.options.aspectRatio,n,r;return this.ready&&this.cropped&&!this.disabled&&vt(t)&&(v(t.left)&&(i.left=t.left),v(t.top)&&(i.top=t.top),v(t.width)&&t.width!==i.width&&(n=!0,i.width=t.width),v(t.height)&&t.height!==i.height&&(r=!0,i.height=t.height),e&&(n?i.height=i.width/e:r&&(i.width=i.height*e)),this.renderCropBox()),this},getCroppedCanvas:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!this.ready||!window.HTMLCanvasElement)return null;var i=this.canvasData,e=ji(this.image,this.imageData,i,t);if(!this.cropped)return e;var n=this.getData(),r=n.x,o=n.y,s=n.width,d=n.height,l=e.width/Math.floor(i.naturalWidth);l!==1&&(r*=l,o*=l,s*=l,d*=l);var h=s/d,c=lt({aspectRatio:h,width:t.maxWidth||1/0,height:t.maxHeight||1/0}),p=lt({aspectRatio:h,width:t.minWidth||0,height:t.minHeight||0},"cover"),y=lt({aspectRatio:h,width:t.width||(l!==1?e.width:s),height:t.height||(l!==1?e.height:d)}),w=y.width,O=y.height;w=Math.min(c.width,Math.max(p.width,w)),O=Math.min(c.height,Math.max(p.height,O));var x=document.createElement("canvas"),k=x.getContext("2d");x.width=wt(w),x.height=wt(O),k.fillStyle=t.fillColor||"transparent",k.fillRect(0,0,w,O);var _=t.imageSmoothingEnabled,R=_===void 0?!0:_,nt=t.imageSmoothingQuality;k.imageSmoothingEnabled=R,nt&&(k.imageSmoothingQuality=nt);var F=e.width,f=e.height,D=r,I=o,K,st,ut,mt,pt,at;D<=-s||D>F?(D=0,K=0,ut=0,pt=0):D<=0?(ut=-D,D=0,K=Math.min(F,s+D),pt=K):D<=F&&(ut=0,K=Math.min(s,F-D),pt=K),K<=0||I<=-d||I>f?(I=0,st=0,mt=0,at=0):I<=0?(mt=-I,I=0,st=Math.min(f,d+I),at=st):I<=f&&(mt=0,st=Math.min(d,f-I),at=st);var V=[D,I,K,st];if(pt>0&&at>0){var gt=w/s;V.push(ut*gt,mt*gt,pt*gt,at*gt)}return k.drawImage.apply(k,[e].concat($(V.map(function(Pt){return Math.floor(wt(Pt))})))),x},setAspectRatio:function(t){var i=this.options;return!this.disabled&&!ee(t)&&(i.aspectRatio=Math.max(0,t)||NaN,this.ready&&(this.initCropBox(),this.cropped&&this.renderCropBox())),this},setDragMode:function(t){var i=this.options,e=this.dragBox,n=this.face;if(this.ready&&!this.disabled){var r=t===Ft,o=i.movable&&t===ge;t=r||o?t:ve,i.dragMode=t,St(e,Ot,t),bt(e,Gt,r),bt(e,qt,o),i.cropBoxMovable||(St(n,Ot,t),bt(n,Gt,r),bt(n,qt,o))}return this}},aa=A.Cropper,Le=function(){function a(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(g(this,a),!t||!Ri.test(t.tagName))throw new Error("The first argument is required and must be an <img> or <canvas> element.");this.element=t,this.options=C({},Se,vt(i)&&i),this.cropped=!1,this.disabled=!1,this.pointers={},this.ready=!1,this.reloading=!1,this.replaced=!1,this.sized=!1,this.sizing=!1,this.init()}return S(a,[{key:"init",value:function(){var i=this.element,e=i.tagName.toLowerCase(),n;if(!i[E]){if(i[E]=this,e==="img"){if(this.isImg=!0,n=i.getAttribute("src")||"",this.originalUrl=n,!n)return;n=i.src}else e==="canvas"&&window.HTMLCanvasElement&&(n=i.toDataURL());this.load(n)}}},{key:"load",value:function(i){var e=this;if(!!i){this.url=i,this.imageData={};var n=this.element,r=this.options;if(!r.rotatable&&!r.scalable&&(r.checkOrientation=!1),!r.checkOrientation||!window.ArrayBuffer){this.clone();return}if(Si.test(i)){Ni.test(i)?this.read(Gi(i)):this.clone();return}var o=new XMLHttpRequest,s=this.clone.bind(this);this.reloading=!0,this.xhr=o,o.onabort=s,o.onerror=s,o.ontimeout=s,o.onprogress=function(){o.getResponseHeader("content-type")!==Te&&o.abort()},o.onload=function(){e.read(o.response)},o.onloadend=function(){e.reloading=!1,e.xhr=null},r.checkCrossOrigin&&ze(i)&&n.crossOrigin&&(i=_e(i)),o.open("GET",i,!0),o.responseType="arraybuffer",o.withCredentials=n.crossOrigin==="use-credentials",o.send()}}},{key:"read",value:function(i){var e=this.options,n=this.imageData,r=Fi(i),o=0,s=1,d=1;if(r>1){this.url=qi(i,Te);var l=Qi(r);o=l.rotate,s=l.scaleX,d=l.scaleY}e.rotatable&&(n.rotate=o),e.scalable&&(n.scaleX=s,n.scaleY=d),this.clone()}},{key:"clone",value:function(){var i=this.element,e=this.url,n=i.crossOrigin,r=e;this.options.checkCrossOrigin&&ze(e)&&(n||(n="anonymous"),r=_e(e)),this.crossOrigin=n,this.crossOriginUrl=r;var o=document.createElement("img");n&&(o.crossOrigin=n),o.src=r||e,o.alt=i.alt||"The image to crop",this.image=o,o.onload=this.start.bind(this),o.onerror=this.stop.bind(this),z(o,me),i.parentNode.insertBefore(o,i.nextSibling)}},{key:"start",value:function(){var i=this,e=this.image;e.onload=null,e.onerror=null,this.sizing=!0;var n=A.navigator&&/(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(A.navigator.userAgent),r=function(l,h){C(i.imageData,{naturalWidth:l,naturalHeight:h,aspectRatio:l/h}),i.initialImageData=C({},i.imageData),i.sizing=!1,i.sized=!0,i.build()};if(e.naturalWidth&&!n){r(e.naturalWidth,e.naturalHeight);return}var o=document.createElement("img"),s=document.body||document.documentElement;this.sizingImage=o,o.onload=function(){r(o.width,o.height),n||s.removeChild(o)},o.src=e.src,n||(o.style.cssText="left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;",s.appendChild(o))}},{key:"stop",value:function(){var i=this.image;i.onload=null,i.onerror=null,i.parentNode.removeChild(i),this.image=null}},{key:"build",value:function(){if(!(!this.sized||this.ready)){var i=this.element,e=this.options,n=this.image,r=i.parentNode,o=document.createElement("div");o.innerHTML=Ai;var s=o.querySelector(".".concat(E,"-container")),d=s.querySelector(".".concat(E,"-canvas")),l=s.querySelector(".".concat(E,"-drag-box")),h=s.querySelector(".".concat(E,"-crop-box")),c=h.querySelector(".".concat(E,"-face"));this.container=r,this.cropper=s,this.canvas=d,this.dragBox=l,this.cropBox=h,this.viewBox=s.querySelector(".".concat(E,"-view-box")),this.face=c,d.appendChild(n),z(i,U),r.insertBefore(s,i.nextSibling),this.isImg||it(n,me),this.initPreview(),this.bind(),e.initialAspectRatio=Math.max(0,e.initialAspectRatio)||NaN,e.aspectRatio=Math.max(0,e.aspectRatio)||NaN,e.viewMode=Math.max(0,Math.min(3,Math.round(e.viewMode)))||0,z(h,U),e.guides||z(h.getElementsByClassName("".concat(E,"-dashed")),U),e.center||z(h.getElementsByClassName("".concat(E,"-center")),U),e.background&&z(s,"".concat(E,"-bg")),e.highlight||z(c,Ei),e.cropBoxMovable&&(z(c,qt),St(c,Ot,dt)),e.cropBoxResizable||(z(h.getElementsByClassName("".concat(E,"-line")),U),z(h.getElementsByClassName("".concat(E,"-point")),U)),this.render(),this.ready=!0,this.setDragMode(e.dragMode),e.autoCrop&&this.crop(),this.setData(e.data),j(e.ready)&&Z(i,De,e.ready,{once:!0}),yt(i,De)}}},{key:"unbuild",value:function(){!this.ready||(this.ready=!1,this.unbind(),this.resetPreview(),this.cropper.parentNode.removeChild(this.cropper),it(this.element,U))}},{key:"uncreate",value:function(){this.ready?(this.unbuild(),this.ready=!1,this.cropped=!1):this.sizing?(this.sizingImage.onload=null,this.sizing=!1,this.sized=!1):this.reloading?(this.xhr.onabort=null,this.xhr.abort()):this.image&&this.stop()}}],[{key:"noConflict",value:function(){return window.Cropper=aa,a}},{key:"setDefaults",value:function(i){C(Se,vt(i)&&i)}}]),a}();return C(Le.prototype,Zi,Ki,Ji,ta,ea,ia),Le})});var ui=We(Vt=>{"use strict";ot();rt();Object.defineProperty(Vt,"__esModule",{value:!0});var xt=he(),na=li();function di(u){return u&&typeof u=="object"&&"default"in u?u:{default:u}}var Ut=di(xt),sa=di(na);var jt=function(){return jt=Object.assign||function(b){for(var m,g=1,M=arguments.length;g<M;g++){m=arguments[g];for(var S in m)Object.prototype.hasOwnProperty.call(m,S)&&(b[S]=m[S])}return b},jt.apply(this,arguments)};function pi(u,b){var m={};for(var g in u)Object.prototype.hasOwnProperty.call(u,g)&&b.indexOf(g)<0&&(m[g]=u[g]);if(u!=null&&typeof Object.getOwnPropertySymbols=="function")for(var M=0,g=Object.getOwnPropertySymbols(u);M<g.length;M++)b.indexOf(g[M])<0&&Object.prototype.propertyIsEnumerable.call(u,g[M])&&(m[g[M]]=u[g[M]]);return m}var ha=function(u,b){b===void 0&&(b={});var m=b.enable,g=m===void 0?!0:m,M=b.scaleX,S=M===void 0?1:M,Y=b.scaleY,$=Y===void 0?1:Y,tt=b.zoomTo,G=tt===void 0?0:tt,T=b.rotateTo;g?u.enable():u.disable(),u.scaleX(S),u.scaleY($),T!==void 0&&u.rotateTo(T),G>0&&u.zoomTo(G)},ca=function(){for(var u=[],b=0;b<arguments.length;b++)u[b]=arguments[b];var m=xt.useRef(null);return Ut.default.useEffect(function(){u.forEach(function(g){!g||(typeof g=="function"?g(m.current):g.current=m.current)})},[u]),m},fi=Ut.default.forwardRef(function(u,b){var m=pi(u,[]),g=m.dragMode,M=g===void 0?"crop":g,S=m.src,Y=m.style,$=m.className,tt=m.crossOrigin,G=m.scaleX,T=m.scaleY,B=m.enable,q=m.zoomTo,X=m.rotateTo,A=m.alt,H=A===void 0?"picture":A,W=m.ready,E=m.onInitialized,dt=pi(m,["dragMode","src","style","className","crossOrigin","scaleX","scaleY","enable","zoomTo","rotateTo","alt","ready","onInitialized"]),It={scaleY:T,scaleX:G,enable:B,zoomTo:q,rotateTo:X},zt=xt.useRef(null),Q=ca(b,zt);return xt.useEffect(function(){var L;((L=Q.current)===null||L===void 0?void 0:L.cropper)&&typeof q=="number"&&Q.current.cropper.zoomTo(q)},[m.zoomTo]),xt.useEffect(function(){var L;((L=Q.current)===null||L===void 0?void 0:L.cropper)&&typeof S<"u"&&Q.current.cropper.reset().clear().replace(S)},[S]),xt.useEffect(function(){if(Q.current!==null){var L=new sa.default(Q.current,jt(jt({dragMode:M},dt),{ready:function(P){P.currentTarget!==null&&ha(P.currentTarget.cropper,It),W&&W(P)}}));E&&E(L)}return function(){var P,et;(et=(P=Q.current)===null||P===void 0?void 0:P.cropper)===null||et===void 0||et.destroy()}},[Q]),Ut.default.createElement("div",{style:Y,className:$},Ut.default.createElement("img",{crossOrigin:tt,src:S,alt:H,style:{opacity:0,maxWidth:"100%"},ref:Q}))});Vt.Cropper=fi;Vt.default=fi});ot();rt();var fe=se(he());Ve();ot();rt();var vi=se(he());Ve();var wi=se(ui());ot();rt();var mi=Ht.div`
  .cropper-container {
    direction: ltr;
    font-size: 0;
    line-height: 0;
    position: relative;
    -ms-touch-action: none;
    touch-action: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .cropper-container img {
    display: block;
    height: 100%;
    image-orientation: 0deg;
    max-height: none !important;
    max-width: none !important;
    min-height: 0 !important;
    min-width: 0 !important;
    width: 100%;
  }

  .cropper-wrap-box,
  .cropper-canvas,
  .cropper-drag-box,
  .cropper-crop-box,
  .cropper-modal {
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
  }

  .cropper-wrap-box,
  .cropper-canvas {
    overflow: hidden;
  }

  .cropper-drag-box,
  .cropper-modal {
    mix-blend-mode: multiply;
    background-color: #587393;
  }

  .cropper-view-box {
    display: block;
    height: 100%;
    outline: 1px solid #39f;
    outline-color: rgba(51, 153, 255, 0.75);
    overflow: hidden;
    width: 100%;
  }

  .cropper-dashed {
    border: 0 dashed #eee;
    display: block;
    opacity: 0.5;
    position: absolute;
  }

  .cropper-dashed.dashed-h {
    border-bottom-width: 1px;
    border-top-width: 1px;
    height: calc(100% / 3);
    left: 0;
    top: calc(100% / 3);
    width: 100%;
  }

  .cropper-dashed.dashed-v {
    border-left-width: 1px;
    border-right-width: 1px;
    height: 100%;
    left: calc(100% / 3);
    top: 0;
    width: calc(100% / 3);
  }

  .cropper-center {
    display: block;
    height: 0;
    left: 50%;
    opacity: 0.75;
    position: absolute;
    top: 50%;
    width: 0;
  }

  .cropper-center::before,
  .cropper-center::after {
    background-color: #eee;
    content: ' ';
    display: block;
    position: absolute;
  }

  .cropper-center::before {
    height: 1px;
    left: -3px;
    top: 0;
    width: 7px;
  }

  .cropper-center::after {
    height: 7px;
    left: 0;
    top: -3px;
    width: 1px;
  }

  .cropper-face,
  .cropper-line,
  .cropper-point {
    display: block;
    height: 100%;
    opacity: 0.1;
    position: absolute;
    width: 100%;
  }

  .cropper-face {
    background-color: #fff;
    left: 0;
    top: 0;
  }

  .cropper-line {
    background-color: #39f;
  }

  .cropper-line.line-e {
    cursor: ew-resize;
    right: -3px;
    top: 0;
    width: 5px;
  }

  .cropper-line.line-n {
    cursor: ns-resize;
    height: 5px;
    left: 0;
    top: -3px;
  }

  .cropper-line.line-w {
    cursor: ew-resize;
    left: -3px;
    top: 0;
    width: 5px;
  }

  .cropper-line.line-s {
    bottom: -3px;
    cursor: ns-resize;
    height: 5px;
    left: 0;
  }

  .cropper-point {
    background-color: #39f;
    height: 5px;
    opacity: 0.75;
    width: 5px;
  }

  .cropper-point.point-e {
    cursor: ew-resize;
    margin-top: -3px;
    right: -3px;
    top: 50%;
  }

  .cropper-point.point-n {
    cursor: ns-resize;
    left: 50%;
    margin-left: -3px;
    top: -3px;
  }

  .cropper-point.point-w {
    cursor: ew-resize;
    left: -3px;
    margin-top: -3px;
    top: 50%;
  }

  .cropper-point.point-s {
    bottom: -3px;
    cursor: s-resize;
    left: 50%;
    margin-left: -3px;
  }

  .cropper-point.point-ne {
    cursor: nesw-resize;
    right: -3px;
    top: -3px;
  }

  .cropper-point.point-nw {
    cursor: nwse-resize;
    left: -3px;
    top: -3px;
  }

  .cropper-point.point-sw {
    bottom: -3px;
    cursor: nesw-resize;
    left: -3px;
  }

  .cropper-point.point-se {
    bottom: -3px;
    cursor: nwse-resize;
    right: -3px;
  }

  .cropper-point.point-se::before {
    background-color: #39f;
    bottom: -50%;
    content: ' ';
    display: block;
    height: 200%;
    opacity: 0;
    position: absolute;
    right: -50%;
    width: 200%;
  }

  .cropper-invisible {
    opacity: 0;
  }

  .cropper-hide {
    display: block;
    height: 0;
    position: absolute;
    width: 0;
  }

  .cropper-hidden {
    display: none !important;
  }

  .cropper-move {
    cursor: move;
  }

  .cropper-crop {
    cursor: crosshair;
  }

  .cropper-disabled .cropper-drag-box,
  .cropper-disabled .cropper-face,
  .cropper-disabled .cropper-line,
  .cropper-disabled .cropper-point {
    cursor: not-allowed;
  }
`,gi=Ht.div`
  position: absolute;
  display: ${({showHelper:u})=>u?"flex":"none"};
  align-items: center;
  top: 60px;
  left: 0;
  right: 0;
  z-index: 9999;
  margin: auto;
  border-radius: 3px;
  background-color: #fff;
  max-width: 296px;
  color: #1c2c40;
  padding-left: 10px;

  p {
    font-family: 'ABC Diatype';
    margin: 0px;
    padding: 8px;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.01em;
  }

  #scan-icon {
    position: absolute;
    left: -48px;
    color: #fff;
    cursor: pointer;
  }
`,wa=Ht.div`
  position: absolute;
  width: ${({width:u})=>u}px;
  height: ${({height:u})=>u}px;
  left: ${({left:u})=>u}px;
  top: ${({top:u})=>u}px;

  border: 1px dashed #778fad;
`;var la=({src:u,root:b,onClose:m})=>{let g=Xt(null),[M,S]=Yt(!0),Y=()=>{S(!1),(g?.current?.cropper).destroy(),At()},$=async()=>{try{let T=g?.current?.cropper,{top:B,left:q,width:X,height:A}=T.cropBoxData,H=T.getCroppedCanvas().toDataURL(),W=T.getCroppedCanvas();T.disable(),W.width===window.innerWidth&&W.height===window.innerHeight?await m(H,{top:0,left:0,width:W.width,height:W.height}):await m(H,{top:B,left:q,width:X,height:A}),T.destroy()}catch(G){console.error(G)}},tt=Ue(()=>Ge({key:"crop-emotion-cache",container:b}),[b]);return(0,vi.useEffect)(()=>()=>{g?.current?.cropper?.destroy()},[]),preactH(qe,{value:tt},preactH(gi,{showHelper:M},preactH(ri,{id:"scan-icon",size:"32px",color:$e.controls.tints.primary}),preactH(ai,{width:"8px",onClick:Y}),preactH("p",null,"Drag your mouse across the area you want to listen to")),preactH(mi,null,preactH(wi.default,{src:u,ref:g,style:{height:"100%",width:"100%"},initialAspectRatio:1/1,guides:!1,autoCrop:!1,cropend:$,cropstart:()=>S(!1)})))},bi=la;var kt="speechify-screenshot-mode",de="speechify-screenshot-marker",Dt,xi="",Di="",$t=u=>u.preventDefault(),pa=()=>{let{controller:u}=Wt.getState();u&&u.pause(),document.body.style.position="relative",document.body.style.overflow="hidden",document.querySelector(`#${kt}`).style.display="block",window.addEventListener("scroll",$t,{capture:!0}),window.addEventListener("wheel",$t,{capture:!0})},yi=()=>{document.body.style.position=xi,document.body.style.overflow=Di,document.querySelector(`#${kt}`).style.display="none",window.removeEventListener("scroll",$t,{capture:!0}),window.removeEventListener("wheel",$t,{capture:!0})},da=()=>(hi(),document.querySelector(".kix-rotatingtilemanager"));async function fa(){if(!Dt){let g=document.createElement("div");g.id=kt,g.style.cssText="position: fixed; top: 0; right: 0; width: 100%; min-height: 100%; z-index: 2147483640; display: none;",document.body.appendChild(g),Dt=g.attachShadow({mode:"open"})}let u=document.createElement("div");u.id=`${kt}-root`,u.style.width="100%",u.style.height="100%",u.style.position="relative",Dt.appendChild(u);let b=document.getElementsByTagName("body")[0],m=window.getComputedStyle(b);return xi=m.getPropertyValue("position"),Di=m.getPropertyValue("overflow"),(0,fe.render)(preactH(ma,{root:u}),u),ua}function ua(){if(!Dt)return;let u=Dt.querySelector(`#${kt}-root`);!u||((0,fe.render)(()=>null,u),Dt.removeChild(u))}function ma({root:u}){let{screenshotMode:b}=ei(),[m,g]=Yt([]),{enabled:M,visibleTabDataUrl:S,takingScreenshot:Y}=b,{hidePlayerPill:$}=ii(ni,["hidePlayerPill"]),tt=Xt($),G=je(async(T,B)=>{try{ti(T,B.width,B.height).then(Je);let q=B.top+document.documentElement.scrollTop,X=T.replace("data:image/png;base64,","");g([q,B.left,B.width,B.height]);let A=await Qe(X,q,B.left);Wt.setState({view:A,controller:null,bundle:null,provider:"ocr"}),await yi(),await At()}catch{await yi(),await At();let X=await Ze();Wt.setState({view:X,controller:null,bundle:null,provider:"ocr"}),Fe("No text detected. Please take another screenshot.",{wrapperPadding:"5px",duration:0})}},[]);return Rt(()=>{Y&&S&&pa()},[Y,S]),Rt(()=>{if(M&&m.length>=3&&!Y){document.getElementById(de)?.remove();let T=document.createElement("div"),[B,q,X,A]=m,H=si()?da():document.body,W=H.getBoundingClientRect();Ke();let E=H===document.body?0:W.top-H.scrollTop,dt=H===document.body?0:W.left;T.id=de,T.setAttribute("style",`
        position: absolute;
        width: ${X}px;
        height: ${A}px;
        left: ${q-dt}px;
        top: ${B-E}px;
        border: 1px dashed #778fad;
        z-index: 2147483640;
        `),H.append(T)}else{let T=document.getElementById(de);T&&T.remove()}},[M,m,Y]),Rt(()=>{M&&(oi(),ci("screenshot-recommendation"))},[M]),Rt(()=>{$&&M?ce({hidePlayerPill:!1,collapseState:"collapsed"}):tt.current&&!M&&!$&&ce({hidePlayerPill:!0,collapseState:"expanded"})},[M,$]),S&&Y&&M?preactH(bi,{src:S,root:u,onClose:G}):null}export{fa as default,ua as destroyScreenshotMode};
/*!
 * Cropper.js v1.5.12
 * https://fengyuanchen.github.io/cropperjs
 *
 * Copyright 2015-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2021-06-12T08:00:17.411Z
 */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
