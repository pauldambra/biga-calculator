(()=>{var t={262:t=>{t.exports.bigaFor=t=>({startingFlour:t,stepOne:{gramsOfWater:Math.floor(.5*t),gramsOfYeast:+(.0083*t).toFixed(1),gramsOfHoney:+(.0083*t).toFixed(1)},stepTwo:{gramsOfWater:Math.floor(.167*t),gramsOfSalt:Math.floor(.025*t),teaspoonsOfOliveOil:Math.floor(.0017*t)}})}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={exports:{}};return t[o](a,a.exports,n),a.exports}(()=>{"use strict";function t(){}function e(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(e)}function a(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(t){return 0===Object.keys(t).length}new Set;let l,u=!1;function c(t,e,n,o){for(;t<e;){const r=t+(e-t>>1);n(r)<=o?t=r+1:e=r}return t}function d(t,e){u?(function(t){if(t.hydrate_init)return;t.hydrate_init=!0;const e=t.childNodes,n=new Int32Array(e.length+1),o=new Int32Array(e.length);n[0]=-1;let r=0;for(let t=0;t<e.length;t++){const a=c(1,r+1,(t=>e[n[t]].claim_order),e[t].claim_order)-1;o[t]=n[a]+1;const s=a+1;n[s]=t,r=Math.max(s,r)}const a=[],s=[];let i=e.length-1;for(let t=n[r]+1;0!=t;t=o[t-1]){for(a.push(e[t-1]);i>=t;i--)s.push(e[i]);i--}for(;i>=0;i--)s.push(e[i]);a.reverse(),s.sort(((t,e)=>t.claim_order-e.claim_order));for(let e=0,n=0;e<s.length;e++){for(;n<a.length&&s[e].claim_order>=a[n].claim_order;)n++;const o=n<a.length?a[n]:null;t.insertBefore(s[e],o)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild),e!==t.actual_end_child?t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling):e.parentNode!==t&&t.appendChild(e)}function f(t,e,n){u&&!n?d(t,e):(e.parentNode!==t||n&&e.nextSibling!==n)&&t.insertBefore(e,n||null)}function h(t){t.parentNode.removeChild(t)}function p(t){return document.createElement(t)}function m(t){return document.createTextNode(t)}function g(){return m(" ")}function $(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function _(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function b(t){return""===t?null:+t}function x(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function y(t,e){t.value=null==e?"":e}function O(t){l=t}new Set;const w=[],v=[],k=[],C=[],T=Promise.resolve();let S=!1;function E(t){k.push(t)}let M=!1;const A=new Set;function F(){if(!M){M=!0;do{for(let t=0;t<w.length;t+=1){const e=w[t];O(e),H(e.$$)}for(O(null),w.length=0;v.length;)v.pop()();for(let t=0;t<k.length;t+=1){const e=k[t];A.has(e)||(A.add(e),e())}k.length=0}while(w.length);for(;C.length;)C.pop()();S=!1,M=!1,A.clear()}}function H(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(E)}}const L=new Set;let N;function W(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function j(n,s,i,c,d,f,p=[-1]){const m=l;O(n);const g=n.$$={fragment:null,ctx:null,props:f,update:t,not_equal:d,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(m?m.$$.context:s.context||[]),callbacks:o(),dirty:p,skip_bound:!1};let $=!1;if(g.ctx=i?i(n,s.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return g.ctx&&d(g.ctx[t],g.ctx[t]=r)&&(!g.skip_bound&&g.bound[t]&&g.bound[t](r),$&&function(t,e){-1===t.$$.dirty[0]&&(w.push(t),S||(S=!0,T.then(F)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(n,t)),e})):[],g.update(),$=!0,r(g.before_update),g.fragment=!!c&&c(g.ctx),s.target){if(s.hydrate){u=!0;const t=(x=s.target,Array.from(x.childNodes));g.fragment&&g.fragment.l(t),t.forEach(h)}else g.fragment&&g.fragment.c();s.intro&&((_=n.$$.fragment)&&_.i&&(L.delete(_),_.i(b))),function(t,n,o,s){const{fragment:i,on_mount:l,on_destroy:u,after_update:c}=t.$$;i&&i.m(n,o),s||E((()=>{const n=l.map(e).filter(a);u?u.push(...n):r(n),t.$$.on_mount=[]})),c.forEach(E)}(n,s.target,s.anchor,s.customElement),u=!1,F()}var _,b,x;O(m)}"undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global,new Set(["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"]),"function"==typeof HTMLElement&&(N=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const{on_mount:t}=this.$$;this.$$.on_disconnect=t.map(e).filter(a);for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,e,n){this[t]=n}disconnectedCallback(){r(this.$$.on_disconnect)}$destroy(){W(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){this.$$set&&!i(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}});function B(t){let e,n,o,r,a,s,i,l,u,c,$,_,b,y,O,w,v,k,C,T,S,E,M,A,F,H,L,N,W,j,B,I,Y,q,V=t[1].startingFlour+"",G=t[1].stepOne.gramsOfYeast+"",P=t[1].stepOne.gramsOfHoney+"",R=t[1].stepOne.gramsOfWater+"";return{c(){e=p("div"),n=p("h1"),n.textContent="First Step",o=g(),r=p("ul"),a=p("li"),s=m("Add "),i=p("strong"),l=m(V),u=m(" grams of flour"),c=m(" to the container"),$=g(),_=p("li"),b=m("Add "),y=p("strong"),O=m(G),w=m(" grams of yeast"),v=g(),k=p("li"),k.textContent="Shake to mix",C=g(),T=p("li"),S=m("mix the "),E=p("strong"),M=m(P),A=m(" grams of honey"),F=m(" into the "),H=p("strong"),L=m(R),N=m(" grams of water"),W=g(),j=p("li"),j.textContent="add the water to the flour, shaking to mix",B=g(),I=p("li"),I.textContent="keep shaking until it forms straccetti",Y=g(),q=p("li"),q.textContent="leave at room temperature for 2 to 5 hours and then in the fridge for up to 2 days"},m(t,h){f(t,e,h),d(e,n),d(e,o),d(e,r),d(r,a),d(a,s),d(a,i),d(i,l),d(i,u),d(a,c),d(r,$),d(r,_),d(_,b),d(_,y),d(y,O),d(y,w),d(r,v),d(r,k),d(r,C),d(r,T),d(T,S),d(T,E),d(E,M),d(E,A),d(T,F),d(T,H),d(H,L),d(H,N),d(r,W),d(r,j),d(r,B),d(r,I),d(r,Y),d(r,q)},p(t,e){2&e&&V!==(V=t[1].startingFlour+"")&&x(l,V),2&e&&G!==(G=t[1].stepOne.gramsOfYeast+"")&&x(O,G),2&e&&P!==(P=t[1].stepOne.gramsOfHoney+"")&&x(M,P),2&e&&R!==(R=t[1].stepOne.gramsOfWater+"")&&x(L,R)},d(t){t&&h(e)}}}function I(t){let e,n,o,r,a,s,i,l,u,c,$,_,b,y,O,w,v,k,C,T,S,E,M,A,F,H,L,N,W,j=t[1].stepTwo.gramsOfWater+"",B=t[1].stepTwo.gramsOfSalt+"",I=t[1].stepTwo.teaspoonsOfOliveOil+"";return{c(){e=p("div"),n=p("h1"),n.textContent="Second Step",o=g(),r=p("ul"),a=p("li"),a.textContent="take out of the fridge",s=g(),i=p("li"),i.textContent="leave at room temperature for an hour",l=g(),u=p("li"),c=m("add "),$=p("strong"),_=m(j),b=m(" grams of water"),y=g(),O=p("li"),w=m("add "),v=p("strong"),k=m(B),C=m(" grams of salt"),T=g(),S=p("li"),E=m("add "),M=p("strong"),A=m(I),F=m(" teaspoons of extra virgin olive oil"),H=g(),L=p("li"),L.textContent="knead and the rest for 1 hour",N=g(),W=p("li"),W.textContent="form balls and rest for 1 hours"},m(t,h){f(t,e,h),d(e,n),d(e,o),d(e,r),d(r,a),d(r,s),d(r,i),d(r,l),d(r,u),d(u,c),d(u,$),d($,_),d($,b),d(r,y),d(r,O),d(O,w),d(O,v),d(v,k),d(v,C),d(r,T),d(r,S),d(S,E),d(S,M),d(M,A),d(M,F),d(r,H),d(r,L),d(r,N),d(r,W)},p(t,e){2&e&&j!==(j=t[1].stepTwo.gramsOfWater+"")&&x(_,j),2&e&&B!==(B=t[1].stepTwo.gramsOfSalt+"")&&x(k,B),2&e&&I!==(I=t[1].stepTwo.teaspoonsOfOliveOil+"")&&x(A,I)},d(t){t&&h(e)}}}function Y(e){let n,o,a,s,i,l,u,c,m,x,O,w,v,k,C,T,S,E,M=e[1]&&e[1].stepOne&&B(e),A=e[1]&&e[1].stepTwo&&I(e);return{c(){n=p("base"),o=g(),a=p("main"),s=p("h1"),s.textContent="Biga Calculator",i=g(),l=p("p"),l.innerHTML='I keep having to jump around in <a href="https://www.youtube.com/watch?v=V2RCYjVhb9w">a video on how to make\n        biga</a> and then figure out ingredients',u=g(),c=p("p"),c.textContent="Obviously I need to automate this!",m=g(),x=p("p"),x.textContent="Add the grams of flour you want to use and get the ingredients for each step",O=g(),w=p("label"),w.innerHTML="<strong>Grams of flour</strong>",v=g(),k=p("input"),C=g(),M&&M.c(),T=g(),A&&A.c(),_(n,"href","/biga-calculator/"),_(w,"for","flour"),_(k,"type","number"),_(k,"min","0"),_(k,"id","flour")},m(t,r){d(document.head,n),f(t,o,r),f(t,a,r),d(a,s),d(a,i),d(a,l),d(a,u),d(a,c),d(a,m),d(a,x),d(a,O),d(a,w),d(a,v),d(a,k),y(k,e[0]),d(a,C),M&&M.m(a,null),d(a,T),A&&A.m(a,null),S||(E=[$(k,"input",e[3]),$(k,"input",e[2])],S=!0)},p(t,[e]){1&e&&b(k.value)!==t[0]&&y(k,t[0]),t[1]&&t[1].stepOne?M?M.p(t,e):(M=B(t),M.c(),M.m(a,T)):M&&(M.d(1),M=null),t[1]&&t[1].stepTwo?A?A.p(t,e):(A=I(t),A.c(),A.m(a,null)):A&&(A.d(1),A=null)},i:t,o:t,d(t){h(n),t&&h(o),t&&h(a),M&&M.d(),A&&A.d(),S=!1,r(E)}}}function q(t,e,o){let r,a;const{bigaFor:s}=n(262);return[r,a,()=>{o(1,a=s(r))},function(){r=b(this.value),o(0,r)}]}new class extends class{$destroy(){W(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){this.$$set&&!i(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),j(this,t,q,Y,s,{})}}({target:document.body})})()})();