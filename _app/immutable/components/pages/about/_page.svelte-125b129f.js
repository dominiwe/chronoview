import{B as ne,S as yt,i as te,s as ee,a3 as Kt,k as m,a as B,a4 as Ot,l as p,m as d,h as o,c as V,a5 as Ft,n as w,b as H,G as l,T as ae,a6 as se,f as G,t as R,N as oe,q as h,r as u,I as y,w as Q,x as X,y as Y,u as le,z as Z,J as Jt}from"../../../chunks/index-d08134e9.js";import{L as rt}from"../../../chunks/Link-bae7be88.js";import"../../../chunks/store-17401e42.js";const Mt=ne();function re(s){let t,e;return{c(){t=m("p"),e=h("Could not fetch information about latest commit...")},l(n){t=p(n,"P",{});var r=d(t);e=u(r,"Could not fetch information about latest commit..."),r.forEach(o)},m(n,r){H(n,t,r),l(t,e)},p:y,i:y,o:y,d(n){n&&o(t)}}}function ie(s){let t,e,n,r,i,E,I,x,g,S=s[6].date+"",P,C,L;return i=new rt({props:{href:s[6].link,$$slots:{default:[ce]},$$scope:{ctx:s}}}),{c(){t=m("p"),e=m("span"),n=h("Latest commit"),r=B(),Q(i.$$.fragment),E=B(),I=m("span"),x=h("was created on "),g=m("span"),P=h(S),C=h(".")},l(c){t=p(c,"P",{});var f=d(t);e=p(f,"SPAN",{});var $=d(e);n=u($,"Latest commit"),$.forEach(o),r=V(f),X(i.$$.fragment,f),E=V(f),I=p(f,"SPAN",{});var z=d(I);x=u(z,"was created on "),z.forEach(o),g=p(f,"SPAN",{});var j=d(g);P=u(j,S),j.forEach(o),C=u(f,"."),f.forEach(o)},m(c,f){H(c,t,f),l(t,e),l(e,n),l(t,r),Y(i,t,null),l(t,E),l(t,I),l(I,x),l(t,g),l(g,P),l(t,C),L=!0},p(c,f){const $={};f&2&&($.href=c[6].link),f&258&&($.$$scope={dirty:f,ctx:c}),i.$set($),(!L||f&2)&&S!==(S=c[6].date+"")&&le(P,S)},i(c){L||(G(i.$$.fragment,c),L=!0)},o(c){R(i.$$.fragment,c),L=!1},d(c){c&&o(t),Z(i)}}}function ce(s){let t=s[6].shortHash+"",e;return{c(){e=h(t)},l(n){e=u(n,t)},m(n,r){H(n,e,r)},p(n,r){r&2&&t!==(t=n[6].shortHash+"")&&le(e,t)},d(n){n&&o(e)}}}function fe(s){let t,e;return{c(){t=m("p"),e=h("Loading...")},l(n){t=p(n,"P",{});var r=d(t);e=u(r,"Loading..."),r.forEach(o)},m(n,r){H(n,t,r),l(t,e)},p:y,i:y,o:y,d(n){n&&o(t)}}}function he(s){let t,e,n,r,i,E,I,x,g,S,P,C,L,c={ctx:s,current:null,token:null,hasCatch:!0,pending:fe,then:ie,catch:re,value:6,error:7,blocks:[,,,]};return Kt(r=s[1],c),{c(){t=m("div"),e=m("div"),n=m("div"),c.block.c(),i=B(),E=m("div"),I=m("button"),x=Ot("svg"),g=Ot("path"),this.h()},l(f){t=p(f,"DIV",{class:!0});var $=d(t);e=p($,"DIV",{class:!0});var z=d(e);n=p(z,"DIV",{});var j=d(n);c.block.l(j),j.forEach(o),z.forEach(o),i=V($),E=p($,"DIV",{class:!0});var b=d(E);I=p(b,"BUTTON",{class:!0});var it=d(I);x=Ft(it,"svg",{xmlns:!0,viewBox:!0,fill:!0,class:!0});var W=d(x);g=Ft(W,"path",{"fill-rule":!0,d:!0,"clip-rule":!0}),d(g).forEach(o),W.forEach(o),it.forEach(o),b.forEach(o),$.forEach(o),this.h()},h(){w(e,"class","flex flex-col justify-center"),w(g,"fill-rule","evenodd"),w(g,"d","M4.755 10.059a7.5 7.5 0 0112.548-3.364l1.903 1.903h-3.183a.75.75 0 100 1.5h4.992a.75.75 0 00.75-.75V4.356a.75.75 0 00-1.5 0v3.18l-1.9-1.9A9 9 0 003.306 9.67a.75.75 0 101.45.388zm15.408 3.352a.75.75 0 00-.919.53 7.5 7.5 0 01-12.548 3.364l-1.902-1.903h3.183a.75.75 0 000-1.5H2.984a.75.75 0 00-.75.75v4.992a.75.75 0 001.5 0v-3.18l1.9 1.9a9 9 0 0015.059-4.035.75.75 0 00-.53-.918z"),w(g,"clip-rule","evenodd"),w(x,"xmlns","http://www.w3.org/2000/svg"),w(x,"viewBox","0 0 24 24"),w(x,"fill","currentColor"),w(x,"class",S="h-5 w-5 text-slate-500 "+(s[0]?"motion-safe:animate-spin":"")),w(I,"class","rounded bg-slate-300 p-2"),w(E,"class","ml-2"),w(t,"class","flex justify-between")},m(f,$){H(f,t,$),l(t,e),l(e,n),c.block.m(n,c.anchor=null),c.mount=()=>n,c.anchor=null,l(t,i),l(t,E),l(E,I),l(I,x),l(x,g),P=!0,C||(L=ae(I,"click",s[2]),C=!0)},p(f,[$]){s=f,c.ctx=s,$&2&&r!==(r=s[1])&&Kt(r,c)||se(c,s,$),(!P||$&1&&S!==(S="h-5 w-5 text-slate-500 "+(s[0]?"motion-safe:animate-spin":"")))&&w(x,"class",S)},i(f){P||(G(c.block),P=!0)},o(f){for(let $=0;$<3;$+=1){const z=c.blocks[$];R(z)}P=!1},d(f){f&&o(t),c.block.d(),c.token=null,c=null,C=!1,L()}}}function ue(s,t,e){let{ghUsernameRepo:n="dominiwe/chronoview"}=t,{ghBranch:r="main"}=t,i=!1;async function E(g=!1){const S=oe(Mt);if(!S||g){e(0,i=!0);const P=await fetch("https://api.github.com/repos/"+n+"/branches/"+r).then(C=>C.json()).then(C=>{const L=new Date(C.commit.commit.author.date);return{date:L.toLocaleDateString()+" at "+L.toLocaleTimeString(),shortHash:C.commit.sha.substring(0,7),link:C.commit.html_url}}).catch(C=>{throw e(0,i=!1),C});return Mt.update(()=>P),e(0,i=!1),P}return S}let I=E();function x(){e(1,I=E(!0))}return s.$$set=g=>{"ghUsernameRepo"in g&&e(3,n=g.ghUsernameRepo),"ghBranch"in g&&e(4,r=g.ghBranch)},[i,I,x,n,r]}class de extends yt{constructor(t){super(),te(this,t,ue,he,ee,{ghUsernameRepo:3,ghBranch:4})}}function Qt(s,t,e){const n=s.slice();return n[2]=t[e],n}function Xt(s,t,e){const n=s.slice();return n[5]=t[e],n}function me(s){let t;return{c(){t=h("IndexedDB")},l(e){t=u(e,"IndexedDB")},m(e,n){H(e,t,n)},d(e){e&&o(t)}}}function pe(s){let t;return{c(){t=h("SvelteKit")},l(e){t=u(e,"SvelteKit")},m(e,n){H(e,t,n)},d(e){e&&o(t)}}}function _e(s){let t;return{c(){t=h("Tailwind")},l(e){t=u(e,"Tailwind")},m(e,n){H(e,t,n)},d(e){e&&o(t)}}}function ge(s){let t;return{c(){t=h("Event Calendar")},l(e){t=u(e,"Event Calendar")},m(e,n){H(e,t,n)},d(e){e&&o(t)}}}function $e(s){let t;return{c(){t=h("Plot")},l(e){t=u(e,"Plot")},m(e,n){H(e,t,n)},d(e){e&&o(t)}}}function ve(s){let t;return{c(){t=h("adapter-static")},l(e){t=u(e,"adapter-static")},m(e,n){H(e,t,n)},d(e){e&&o(t)}}}function Yt(s){let t,e=s[5].text+"",n;return{c(){t=m("li"),n=h(e)},l(r){t=p(r,"LI",{});var i=d(t);n=u(i,e),i.forEach(o)},m(r,i){H(r,t,i),l(t,n)},p:y,d(r){r&&o(t)}}}function Zt(s){let t,e=s[2].text+"",n;return{c(){t=m("li"),n=h(e)},l(r){t=p(r,"LI",{});var i=d(t);n=u(i,e),i.forEach(o)},m(r,i){H(r,t,i),l(t,n)},p:y,d(r){r&&o(t)}}}function be(s){let t,e,n,r,i,E,I,x,g,S,P,C,L,c,f,$,z,j,b,it,W,vt,q,bt,K,kt,O,wt,F,Et,It,xt,J,Pt,Ct,T,ct,St,Dt,dt,At,Lt,tt,Bt,mt,Vt,Ht,et,Tt,M,ft,Ut,zt,lt,gt;W=new rt({props:{href:"https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API",$$slots:{default:[me]},$$scope:{ctx:s}}}),q=new rt({props:{href:"https://kit.svelte.dev/",$$slots:{default:[pe]},$$scope:{ctx:s}}}),K=new rt({props:{href:"https://tailwindcss.com/",$$slots:{default:[_e]},$$scope:{ctx:s}}}),O=new rt({props:{href:"https://github.com/vkurko/calendar",$$slots:{default:[ge]},$$scope:{ctx:s}}}),F=new rt({props:{href:"https://observablehq.com/@observablehq/plot",$$slots:{default:[$e]},$$scope:{ctx:s}}}),J=new rt({props:{href:"https://github.com/sveltejs/kit/tree/master/packages/adapter-static",$$slots:{default:[ve]},$$scope:{ctx:s}}});let ht=s[0],D=[];for(let a=0;a<ht.length;a+=1)D[a]=Yt(Xt(s,ht,a));let ut=s[1],A=[];for(let a=0;a<ut.length;a+=1)A[a]=Zt(Qt(s,ut,a));return lt=new de({}),{c(){t=m("div"),e=m("h1"),n=h("About"),r=B(),i=m("div"),E=m("h2"),I=h("What is this?"),x=B(),g=m("p"),S=h(`The main purpose of this tool is to visualize time tracking data. It can interact with
			different tools called `),P=m("span"),C=h("connectors"),L=h(` using their APIs in order to visualize
			gathered data.`),c=B(),f=m("div"),$=m("h2"),z=h("How does it work?"),j=B(),b=m("p"),it=h(`This app runs client-side in the browser and stores data locally using
			`),Q(W.$$.fragment),vt=h(`.
			It is built with `),Q(q.$$.fragment),bt=h(`,
			`),Q(K.$$.fragment),kt=h(`,
			`),Q(O.$$.fragment),wt=h(` and
			`),Q(F.$$.fragment),Et=h("."),It=m("br"),xt=h(` It uses SvelteKit
			with `),Q(J.$$.fragment),Pt=h(" in order to be deployable to Github Pages."),Ct=B(),T=m("div"),ct=m("h2"),St=h("Which connectors are supported?"),Dt=B(),dt=m("p"),At=h("Currently supported:"),Lt=B(),tt=m("ul");for(let a=0;a<D.length;a+=1)D[a].c();Bt=B(),mt=m("p"),Vt=h("Support planned:"),Ht=B(),et=m("ul");for(let a=0;a<A.length;a+=1)A[a].c();Tt=B(),M=m("div"),ft=m("h2"),Ut=h("Version Information"),zt=B(),Q(lt.$$.fragment),this.h()},l(a){t=p(a,"DIV",{class:!0});var _=d(t);e=p(_,"H1",{class:!0});var U=d(e);n=u(U,"About"),U.forEach(o),r=V(_),i=p(_,"DIV",{});var nt=d(i);E=p(nt,"H2",{class:!0});var pt=d(E);I=u(pt,"What is this?"),pt.forEach(o),x=V(nt),g=p(nt,"P",{});var at=d(g);S=u(at,`The main purpose of this tool is to visualize time tracking data. It can interact with
			different tools called `),P=p(at,"SPAN",{class:!0});var _t=d(P);C=u(_t,"connectors"),_t.forEach(o),L=u(at,` using their APIs in order to visualize
			gathered data.`),at.forEach(o),nt.forEach(o),c=V(_),f=p(_,"DIV",{});var st=d(f);$=p(st,"H2",{class:!0});var v=d($);z=u(v,"How does it work?"),v.forEach(o),j=V(st),b=p(st,"P",{});var k=d(b);it=u(k,`This app runs client-side in the browser and stores data locally using
			`),X(W.$$.fragment,k),vt=u(k,`.
			It is built with `),X(q.$$.fragment,k),bt=u(k,`,
			`),X(K.$$.fragment,k),kt=u(k,`,
			`),X(O.$$.fragment,k),wt=u(k,` and
			`),X(F.$$.fragment,k),Et=u(k,"."),It=p(k,"BR",{}),xt=u(k,` It uses SvelteKit
			with `),X(J.$$.fragment,k),Pt=u(k," in order to be deployable to Github Pages."),k.forEach(o),st.forEach(o),Ct=V(_),T=p(_,"DIV",{});var N=d(T);ct=p(N,"H2",{class:!0});var Wt=d(ct);St=u(Wt,"Which connectors are supported?"),Wt.forEach(o),Dt=V(N),dt=p(N,"P",{});var Nt=d(dt);At=u(Nt,"Currently supported:"),Nt.forEach(o),Lt=V(N),tt=p(N,"UL",{class:!0});var jt=d(tt);for(let ot=0;ot<D.length;ot+=1)D[ot].l(jt);jt.forEach(o),Bt=V(N),mt=p(N,"P",{});var Gt=d(mt);Vt=u(Gt,"Support planned:"),Gt.forEach(o),Ht=V(N),et=p(N,"UL",{class:!0});var Rt=d(et);for(let ot=0;ot<A.length;ot+=1)A[ot].l(Rt);Rt.forEach(o),N.forEach(o),Tt=V(_),M=p(_,"DIV",{class:!0});var $t=d(M);ft=p($t,"H2",{class:!0});var qt=d(ft);Ut=u(qt,"Version Information"),qt.forEach(o),zt=V($t),X(lt.$$.fragment,$t),$t.forEach(o),_.forEach(o),this.h()},h(){w(e,"class","hidden text-lg font-medium sm:text-lg"),w(E,"class","text-lg font-medium sm:text-lg"),w(P,"class","italic"),w($,"class","text-lg font-medium sm:text-lg"),w(ct,"class","text-lg font-medium sm:text-lg"),w(tt,"class","ml-5 list-disc"),w(et,"class","ml-5 list-disc"),w(ft,"class","text-lg font-medium sm:text-lg"),w(M,"class","mt-2 border-t-2 pt-1"),w(t,"class","mx-auto max-w-4xl rounded-xl bg-slate-100 p-4")},m(a,_){H(a,t,_),l(t,e),l(e,n),l(t,r),l(t,i),l(i,E),l(E,I),l(i,x),l(i,g),l(g,S),l(g,P),l(P,C),l(g,L),l(t,c),l(t,f),l(f,$),l($,z),l(f,j),l(f,b),l(b,it),Y(W,b,null),l(b,vt),Y(q,b,null),l(b,bt),Y(K,b,null),l(b,kt),Y(O,b,null),l(b,wt),Y(F,b,null),l(b,Et),l(b,It),l(b,xt),Y(J,b,null),l(b,Pt),l(t,Ct),l(t,T),l(T,ct),l(ct,St),l(T,Dt),l(T,dt),l(dt,At),l(T,Lt),l(T,tt);for(let U=0;U<D.length;U+=1)D[U].m(tt,null);l(T,Bt),l(T,mt),l(mt,Vt),l(T,Ht),l(T,et);for(let U=0;U<A.length;U+=1)A[U].m(et,null);l(t,Tt),l(t,M),l(M,ft),l(ft,Ut),l(M,zt),Y(lt,M,null),gt=!0},p(a,[_]){const U={};_&256&&(U.$$scope={dirty:_,ctx:a}),W.$set(U);const nt={};_&256&&(nt.$$scope={dirty:_,ctx:a}),q.$set(nt);const pt={};_&256&&(pt.$$scope={dirty:_,ctx:a}),K.$set(pt);const at={};_&256&&(at.$$scope={dirty:_,ctx:a}),O.$set(at);const _t={};_&256&&(_t.$$scope={dirty:_,ctx:a}),F.$set(_t);const st={};if(_&256&&(st.$$scope={dirty:_,ctx:a}),J.$set(st),_&1){ht=a[0];let v;for(v=0;v<ht.length;v+=1){const k=Xt(a,ht,v);D[v]?D[v].p(k,_):(D[v]=Yt(k),D[v].c(),D[v].m(tt,null))}for(;v<D.length;v+=1)D[v].d(1);D.length=ht.length}if(_&2){ut=a[1];let v;for(v=0;v<ut.length;v+=1){const k=Qt(a,ut,v);A[v]?A[v].p(k,_):(A[v]=Zt(k),A[v].c(),A[v].m(et,null))}for(;v<A.length;v+=1)A[v].d(1);A.length=ut.length}},i(a){gt||(G(W.$$.fragment,a),G(q.$$.fragment,a),G(K.$$.fragment,a),G(O.$$.fragment,a),G(F.$$.fragment,a),G(J.$$.fragment,a),G(lt.$$.fragment,a),gt=!0)},o(a){R(W.$$.fragment,a),R(q.$$.fragment,a),R(K.$$.fragment,a),R(O.$$.fragment,a),R(F.$$.fragment,a),R(J.$$.fragment,a),R(lt.$$.fragment,a),gt=!1},d(a){a&&o(t),Z(W),Z(q),Z(K),Z(O),Z(F),Z(J),Jt(D,a),Jt(A,a),Z(lt)}}}function ke(s){return[[{text:"ActivityWatch (WIP)"}],[{text:"Clockify"},{text:"OpenProject"},{text:"SAP"}]]}class xe extends yt{constructor(t){super(),te(this,t,ke,be,ee,{})}}export{xe as default};