System.register(["./index5-legacy-61496857.js","./index-legacy-48434264.js"],(function(e,t){"use strict";var n,i;return{setters:[e=>{n=e.w},e=>{i=e.r}],execute:function(){
/*!
       * (C) Ionic http://ionicframework.com - MIT License
       */
let t;const o=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),a=e=>{if(void 0===t){const n=void 0!==e.style.animationName,i=void 0!==e.style.webkitAnimationName;t=!n&&i?"-webkit-":""}return t},r=(e,t,n)=>{const i=t.startsWith("animation")?a(e):"";e.style.setProperty(i+t,n)},s=(e,t)=>{const n=t.startsWith("animation")?a(e):"";e.style.removeProperty(n+t)},l=[],f=(e=[],t)=>{if(void 0!==t){const n=Array.isArray(t)?t:[t];return[...e,...n]}return e};e("c",(e=>{let t,c,d,m,h,u,g,p,y,v,E,$,A,b=[],C=[],w=[],S=!1,T={},k=[],D=[],L={},P=0,R=!1,x=!1,F=!0,N=!1,O=!0,W=!1;const j=e,K=[],I=[],M=[],q=[],z=[],Z=[],B=[],G=[],H=[],J=[],Q="function"==typeof AnimationEffect||void 0!==n&&"function"==typeof n.AnimationEffect,U="function"==typeof Element&&"function"==typeof Element.prototype.animate&&Q,V=()=>J,X=e=>{ee(),e&&te()},Y=(e,t)=>(((null==t?void 0:t.oneTimeCallback)?I:K).push({c:e,o:t}),A),_=()=>(K.length=0,I.length=0,A),ee=()=>{if(U)J.forEach((e=>{e.cancel()})),J.length=0;else{const e=M.slice();i((()=>{e.forEach((e=>{s(e,"animation-name"),s(e,"animation-duration"),s(e,"animation-timing-function"),s(e,"animation-iteration-count"),s(e,"animation-delay"),s(e,"animation-play-state"),s(e,"animation-fill-mode"),s(e,"animation-direction")}))}))}},te=()=>{z.forEach((e=>{(null==e?void 0:e.parentNode)&&e.parentNode.removeChild(e)})),z.length=0},ne=()=>void 0!==h?h:g?g.getFill():"both",ie=()=>void 0!==y?y:void 0!==u?u:g?g.getDirection():"normal",oe=()=>R?"linear":void 0!==d?d:g?g.getEasing():"linear",ae=()=>x?0:void 0!==v?v:void 0!==c?c:g?g.getDuration():0,re=()=>void 0!==m?m:g?g.getIterations():1,se=()=>void 0!==E?E:void 0!==t?t:g?g.getDelay():0,le=e=>{U?V().forEach((t=>{if(t.effect.setKeyframes)t.effect.setKeyframes(e);else{const n=new KeyframeEffect(t.effect.target,e,t.effect.getTiming());t.effect=n}})):ce()},fe=()=>{0!==P&&(P--,0===P&&((()=>{ve(),G.forEach((e=>e())),H.forEach((e=>e()));const e=F?1:0,t=k,n=D,i=L;M.forEach((e=>{const o=e.classList;t.forEach((e=>o.add(e))),n.forEach((e=>o.remove(e)));for(const t in i)i.hasOwnProperty(t)&&r(e,t,i[t])})),K.forEach((t=>t.c(e,A))),I.forEach((t=>t.c(e,A))),I.length=0,O=!0,F&&(N=!0),F=!0})(),g&&g.animationFinish()))},ce=(t=!0)=>{te();const n=(e=>(e.forEach((e=>{for(const t in e)if(e.hasOwnProperty(t)){const n=e[t];if("easing"===t)e["animation-timing-function"]=n,delete e[t];else{const i=o(t);i!==t&&(e[i]=n,delete e[t])}}})),e))(b);M.forEach((o=>{if(n.length>0){const s=((e=[])=>e.map((e=>{const t=e.offset,n=[];for(const i in e)e.hasOwnProperty(i)&&"offset"!==i&&n.push(`${i}: ${e[i]};`);return`${100*t}% { ${n.join(" ")} }`})).join(" "))(n);$=void 0!==e?e:(e=>{let t=l.indexOf(e);return t<0&&(t=l.push(e)-1),`ion-animation-${t}`})(s);const f=((e,t,n)=>{var i;const o=(e=>{const t=void 0!==e.getRootNode?e.getRootNode():e;return t.head||t})(n),r=a(n),s=o.querySelector("#"+e);if(s)return s;const l=(null!==(i=n.ownerDocument)&&void 0!==i?i:document).createElement("style");return l.id=e,l.textContent=`@${r}keyframes ${e} { ${t} } @${r}keyframes ${e}-alt { ${t} }`,o.appendChild(l),l})($,s,o);z.push(f),r(o,"animation-duration",`${ae()}ms`),r(o,"animation-timing-function",oe()),r(o,"animation-delay",`${se()}ms`),r(o,"animation-fill-mode",ne()),r(o,"animation-direction",ie());const c=re()===1/0?"infinite":re().toString();r(o,"animation-iteration-count",c),r(o,"animation-play-state","paused"),t&&r(o,"animation-name",`${f.id}-alt`),i((()=>{r(o,"animation-name",f.id||null)}))}}))},de=(e=!0)=>{(()=>{Z.forEach((e=>e())),B.forEach((e=>e()));const e=C,t=w,n=T;M.forEach((i=>{const o=i.classList;e.forEach((e=>o.add(e))),t.forEach((e=>o.remove(e)));for(const e in n)n.hasOwnProperty(e)&&r(i,e,n[e])}))})(),b.length>0&&(U?(M.forEach((e=>{const t=e.animate(b,{id:j,delay:se(),duration:ae(),easing:oe(),iterations:re(),fill:ne(),direction:ie()});t.pause(),J.push(t)})),J.length>0&&(J[0].onfinish=()=>{fe()})):ce(e)),S=!0},me=e=>{if(e=Math.min(Math.max(e,0),.9999),U)J.forEach((t=>{t.currentTime=t.effect.getComputedTiming().delay+ae()*e,t.pause()}));else{const t=`-${ae()*e}ms`;M.forEach((e=>{b.length>0&&(r(e,"animation-delay",t),r(e,"animation-play-state","paused"))}))}},he=e=>{J.forEach((e=>{e.effect.updateTiming({delay:se(),duration:ae(),easing:oe(),iterations:re(),fill:ne(),direction:ie()})})),void 0!==e&&me(e)},ue=(e=!0,t)=>{i((()=>{M.forEach((n=>{r(n,"animation-name",$||null),r(n,"animation-duration",`${ae()}ms`),r(n,"animation-timing-function",oe()),r(n,"animation-delay",void 0!==t?`-${t*ae()}ms`:`${se()}ms`),r(n,"animation-fill-mode",ne()||null),r(n,"animation-direction",ie()||null);const o=re()===1/0?"infinite":re().toString();r(n,"animation-iteration-count",o),e&&r(n,"animation-name",`${$}-alt`),i((()=>{r(n,"animation-name",$||null)}))}))}))},ge=(e=!1,t=!0,n)=>(e&&q.forEach((i=>{i.update(e,t,n)})),U?he(n):ue(t,n),A),pe=()=>{S&&(U?J.forEach((e=>{e.pause()})):M.forEach((e=>{r(e,"animation-play-state","paused")})),W=!0)},ye=()=>{p=void 0,fe()},ve=()=>{p&&clearTimeout(p)},Ee=()=>{M.forEach((e=>{s(e,"animation-duration"),s(e,"animation-delay"),s(e,"animation-play-state")}))},$e=e=>new Promise((t=>{(null==e?void 0:e.sync)&&(x=!0,Y((()=>x=!1),{oneTimeCallback:!0})),S||de(),N&&(U?(me(0),he()):ue(),N=!1),O&&(P=q.length+1,O=!1),Y((()=>t()),{oneTimeCallback:!0}),q.forEach((e=>{e.play()})),U?(J.forEach((e=>{e.play()})),0!==b.length&&0!==M.length||fe()):(()=>{if(ve(),i((()=>{M.forEach((e=>{b.length>0&&r(e,"animation-play-state","running")}))})),0===b.length||0===M.length)fe();else{const e=se()||0,t=ae()||0,n=re()||1;isFinite(n)&&(p=setTimeout(ye,e+t*n+100)),((e,t)=>{let n;const i={passive:!0},o=()=>{n&&n()},a=n=>{e===n.target&&(o(),t(n))};e&&(e.addEventListener("webkitAnimationEnd",a,i),e.addEventListener("animationend",a,i),n=()=>{e.removeEventListener("webkitAnimationEnd",a,i),e.removeEventListener("animationend",a,i)})})(M[0],(()=>{ve(),i((()=>{Ee(),i(fe)}))}))}})(),W=!1})),Ae=(e,t)=>{const n=b[0];return void 0===n||void 0!==n.offset&&0!==n.offset?b=[{offset:0,[e]:t},...b]:n[e]=t,A};return A={parentAnimation:g,elements:M,childAnimations:q,id:j,animationFinish:fe,from:Ae,to:(e,t)=>{const n=b[b.length-1];return void 0===n||void 0!==n.offset&&1!==n.offset?b=[...b,{offset:1,[e]:t}]:n[e]=t,A},fromTo:(e,t,n)=>Ae(e,t).to(e,n),parent:e=>(g=e,A),play:$e,pause:()=>(q.forEach((e=>{e.pause()})),pe(),A),stop:()=>{q.forEach((e=>{e.stop()})),S&&(ee(),S=!1),R=!1,x=!1,O=!0,y=void 0,v=void 0,E=void 0,P=0,N=!1,F=!0,W=!1},destroy:e=>(q.forEach((t=>{t.destroy(e)})),X(e),M.length=0,q.length=0,b.length=0,_(),S=!1,O=!0,A),keyframes:e=>{const t=b!==e;return b=e,t&&le(b),A},addAnimation:e=>{if(null!=e)if(Array.isArray(e))for(const t of e)t.parent(A),q.push(t);else e.parent(A),q.push(e);return A},addElement:e=>{if(null!=e)if(1===e.nodeType)M.push(e);else if(e.length>=0)for(let t=0;t<e.length;t++)M.push(e[t]);else console.error("Invalid addElement value");return A},update:ge,fill:e=>(h=e,ge(!0),A),direction:e=>(u=e,ge(!0),A),iterations:e=>(m=e,ge(!0),A),duration:e=>(U||0!==e||(e=1),c=e,ge(!0),A),easing:e=>(d=e,ge(!0),A),delay:e=>(t=e,ge(!0),A),getWebAnimations:V,getKeyframes:()=>b,getFill:ne,getDirection:ie,getDelay:se,getIterations:re,getEasing:oe,getDuration:ae,afterAddRead:e=>(G.push(e),A),afterAddWrite:e=>(H.push(e),A),afterClearStyles:(e=[])=>{for(const t of e)L[t]="";return A},afterStyles:(e={})=>(L=e,A),afterRemoveClass:e=>(D=f(D,e),A),afterAddClass:e=>(k=f(k,e),A),beforeAddRead:e=>(Z.push(e),A),beforeAddWrite:e=>(B.push(e),A),beforeClearStyles:(e=[])=>{for(const t of e)T[t]="";return A},beforeStyles:(e={})=>(T=e,A),beforeRemoveClass:e=>(w=f(w,e),A),beforeAddClass:e=>(C=f(C,e),A),onFinish:Y,isRunning:()=>0!==P&&!W,progressStart:(e=!1,t)=>(q.forEach((n=>{n.progressStart(e,t)})),pe(),R=e,S||de(),ge(!1,!0,t),A),progressStep:e=>(q.forEach((t=>{t.progressStep(e)})),me(e),A),progressEnd:(e,t,n)=>(R=!1,q.forEach((i=>{i.progressEnd(e,t,n)})),void 0!==n&&(v=n),N=!1,F=!0,0===e?(y="reverse"===ie()?"normal":"reverse","reverse"===y&&(F=!1),U?(ge(),me(1-t)):(E=(1-t)*ae()*-1,ge(!1,!1))):1===e&&(U?(ge(),me(t)):(E=t*ae()*-1,ge(!1,!1))),void 0!==e&&(Y((()=>{v=void 0,y=void 0,E=void 0}),{oneTimeCallback:!0}),g||$e()),A)}}))}}}));
