import{S as Yt,i as Zt,s as yt,k as d,a as L,$ as Kt,l as m,m as u,h as o,c as V,a0 as Ot,n as E,b as B,G as n,T as ee,g as ne,t as R,d as le,f as q,o as se,q as c,r as f,I as tt,w as X,x as Y,y as Z,u as te,z as y,J as Mt}from"../../../chunks/index-18d6858c.js";import{L as it}from"../../../chunks/Link-39bec63d.js";import"../../../chunks/store-24c06a72.js";function ae(i){let t,e;return{c(){t=d("p"),e=c("Loading...")},l(l){t=m(l,"P",{});var a=u(t);e=f(a,"Loading..."),a.forEach(o)},m(l,a){B(l,t,a),n(t,e)},p:tt,i:tt,o:tt,d(l){l&&o(t)}}}function oe(i){let t,e;return{c(){t=d("p"),e=c("Could not fetch information about latest commit...")},l(l){t=m(l,"P",{});var a=u(t);e=f(a,"Could not fetch information about latest commit..."),a.forEach(o)},m(l,a){B(l,t,a),n(t,e)},p:tt,i:tt,o:tt,d(l){l&&o(t)}}}function re(i){let t,e,l,a,r,P,x,_,$,S=i[1].date+"",C,H,T;return r=new it({props:{href:i[1].link,$$slots:{default:[ie]},$$scope:{ctx:i}}}),{c(){t=d("p"),e=d("span"),l=c("Latest commit"),a=L(),X(r.$$.fragment),P=L(),x=d("span"),_=c("was created on "),$=d("span"),C=c(S),H=c(".")},l(I){t=m(I,"P",{});var v=u(t);e=m(v,"SPAN",{});var b=u(e);l=f(b,"Latest commit"),b.forEach(o),a=V(v),Y(r.$$.fragment,v),P=V(v),x=m(v,"SPAN",{});var K=u(x);_=f(K,"was created on "),K.forEach(o),$=m(v,"SPAN",{});var k=u($);C=f(k,S),k.forEach(o),H=f(v,"."),v.forEach(o)},m(I,v){B(I,t,v),n(t,e),n(e,l),n(t,a),Z(r,t,null),n(t,P),n(t,x),n(x,_),n(t,$),n($,C),n(t,H),T=!0},p(I,v){const b={};v&2&&(b.href=I[1].link),v&34&&(b.$$scope={dirty:v,ctx:I}),r.$set(b),(!T||v&2)&&S!==(S=I[1].date+"")&&te(C,S)},i(I){T||(q(r.$$.fragment,I),T=!0)},o(I){R(r.$$.fragment,I),T=!1},d(I){I&&o(t),y(r)}}}function ie(i){let t=i[1].shortHash+"",e;return{c(){e=c(t)},l(l){e=f(l,t)},m(l,a){B(l,e,a)},p(l,a){a&2&&t!==(t=l[1].shortHash+"")&&te(e,t)},d(l){l&&o(e)}}}function ce(i){let t,e,l,a,r,P,x,_,$,S,C,H,T,I;const v=[re,oe,ae],b=[];function K(k,h){return k[0]===!0?0:k[0]===!1?1:2}return a=K(i),r=b[a]=v[a](i),{c(){t=d("div"),e=d("div"),l=d("div"),r.c(),P=L(),x=d("div"),_=d("button"),$=Kt("svg"),S=Kt("path"),this.h()},l(k){t=m(k,"DIV",{class:!0});var h=u(t);e=m(h,"DIV",{class:!0});var j=u(e);l=m(j,"DIV",{});var N=u(l);r.l(N),N.forEach(o),j.forEach(o),P=V(h),x=m(h,"DIV",{class:!0});var ct=u(x);_=m(ct,"BUTTON",{class:!0});var W=u(_);$=Ot(W,"svg",{xmlns:!0,viewBox:!0,fill:!0,class:!0});var ft=u($);S=Ot(ft,"path",{"fill-rule":!0,d:!0,"clip-rule":!0}),u(S).forEach(o),ft.forEach(o),W.forEach(o),ct.forEach(o),h.forEach(o),this.h()},h(){E(e,"class","flex flex-col justify-center"),E(S,"fill-rule","evenodd"),E(S,"d","M4.755 10.059a7.5 7.5 0 0112.548-3.364l1.903 1.903h-3.183a.75.75 0 100 1.5h4.992a.75.75 0 00.75-.75V4.356a.75.75 0 00-1.5 0v3.18l-1.9-1.9A9 9 0 003.306 9.67a.75.75 0 101.45.388zm15.408 3.352a.75.75 0 00-.919.53 7.5 7.5 0 01-12.548 3.364l-1.902-1.903h3.183a.75.75 0 000-1.5H2.984a.75.75 0 00-.75.75v4.992a.75.75 0 001.5 0v-3.18l1.9 1.9a9 9 0 0015.059-4.035.75.75 0 00-.53-.918z"),E(S,"clip-rule","evenodd"),E($,"xmlns","http://www.w3.org/2000/svg"),E($,"viewBox","0 0 24 24"),E($,"fill","currentColor"),E($,"class",C="h-5 w-5 text-slate-500 "+(i[0]===void 0?"motion-safe:animate-spin":"")),E(_,"class","rounded bg-slate-300 p-2"),E(x,"class","ml-2"),E(t,"class","flex justify-between")},m(k,h){B(k,t,h),n(t,e),n(e,l),b[a].m(l,null),n(t,P),n(t,x),n(x,_),n(_,$),n($,S),H=!0,T||(I=ee(_,"click",i[2]),T=!0)},p(k,[h]){let j=a;a=K(k),a===j?b[a].p(k,h):(ne(),R(b[j],1,1,()=>{b[j]=null}),le(),r=b[a],r?r.p(k,h):(r=b[a]=v[a](k),r.c()),q(r,1),r.m(l,null)),(!H||h&1&&C!==(C="h-5 w-5 text-slate-500 "+(k[0]===void 0?"motion-safe:animate-spin":"")))&&E($,"class",C)},i(k){H||(q(r),H=!0)},o(k){R(r),H=!1},d(k){k&&o(t),b[a].d(),T=!1,I()}}}function fe(i,t,e){let{ghUsernameRepo:l="dominiwe/planner"}=t,{ghBranch:a="main"}=t,r,P;async function x(){e(0,r=void 0),await fetch("https://api.github.com/repos/"+l+"/branches/"+a).then(_=>_.json()).then(_=>{const $=new Date(_.commit.commit.author.date);e(1,P={date:$.toLocaleDateString()+" at "+$.toLocaleTimeString(),shortHash:_.commit.sha.substring(0,7),link:_.commit.html_url}),e(0,r=!0)}).catch(_=>{e(0,r=!1),console.log(_)})}return se(async()=>{x()}),i.$$set=_=>{"ghUsernameRepo"in _&&e(3,l=_.ghUsernameRepo),"ghBranch"in _&&e(4,a=_.ghBranch)},[r,P,x,l,a]}class ue extends Yt{constructor(t){super(),Zt(this,t,fe,ce,yt,{ghUsernameRepo:3,ghBranch:4})}}function Jt(i,t,e){const l=i.slice();return l[2]=t[e],l}function Ft(i,t,e){const l=i.slice();return l[5]=t[e],l}function he(i){let t;return{c(){t=c("IndexedDB")},l(e){t=f(e,"IndexedDB")},m(e,l){B(e,t,l)},d(e){e&&o(t)}}}function de(i){let t;return{c(){t=c("SvelteKit")},l(e){t=f(e,"SvelteKit")},m(e,l){B(e,t,l)},d(e){e&&o(t)}}}function me(i){let t;return{c(){t=c("Tailwind")},l(e){t=f(e,"Tailwind")},m(e,l){B(e,t,l)},d(e){e&&o(t)}}}function pe(i){let t;return{c(){t=c("Event Calendar")},l(e){t=f(e,"Event Calendar")},m(e,l){B(e,t,l)},d(e){e&&o(t)}}}function _e(i){let t;return{c(){t=c("Plot")},l(e){t=f(e,"Plot")},m(e,l){B(e,t,l)},d(e){e&&o(t)}}}function ge(i){let t;return{c(){t=c("adapter-static")},l(e){t=f(e,"adapter-static")},m(e,l){B(e,t,l)},d(e){e&&o(t)}}}function Qt(i){let t,e=i[5].text+"",l;return{c(){t=d("li"),l=c(e)},l(a){t=m(a,"LI",{});var r=u(t);l=f(r,e),r.forEach(o)},m(a,r){B(a,t,r),n(t,l)},p:tt,d(a){a&&o(t)}}}function Xt(i){let t,e=i[2].text+"",l;return{c(){t=d("li"),l=c(e)},l(a){t=m(a,"LI",{});var r=u(t);l=f(r,e),r.forEach(o)},m(a,r){B(a,t,r),n(t,l)},p:tt,d(a){a&&o(t)}}}function $e(i){let t,e,l,a,r,P,x,_,$,S,C,H,T,I,v,b,K,k,h,j,N,ct,W,ft,O,bt,M,wt,J,Et,It,xt,F,Pt,St,z,ut,Ct,Dt,pt,At,Lt,et,Vt,_t,Bt,Ht,nt,Tt,Q,ht,zt,Ut,lt,vt;N=new it({props:{href:"https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API",$$slots:{default:[he]},$$scope:{ctx:i}}}),W=new it({props:{href:"https://kit.svelte.dev/",$$slots:{default:[de]},$$scope:{ctx:i}}}),O=new it({props:{href:"https://tailwindcss.com/",$$slots:{default:[me]},$$scope:{ctx:i}}}),M=new it({props:{href:"https://github.com/vkurko/calendar",$$slots:{default:[pe]},$$scope:{ctx:i}}}),J=new it({props:{href:"https://observablehq.com/@observablehq/plot",$$slots:{default:[_e]},$$scope:{ctx:i}}}),F=new it({props:{href:"https://github.com/sveltejs/kit/tree/master/packages/adapter-static",$$slots:{default:[ge]},$$scope:{ctx:i}}});let dt=i[0],D=[];for(let s=0;s<dt.length;s+=1)D[s]=Qt(Ft(i,dt,s));let mt=i[1],A=[];for(let s=0;s<mt.length;s+=1)A[s]=Xt(Jt(i,mt,s));return lt=new ue({}),{c(){t=d("div"),e=d("h1"),l=c("About"),a=L(),r=d("div"),P=d("h2"),x=c("What is this?"),_=L(),$=d("p"),S=c(`The main purpose of this tool is to visualize time tracking and planning information. It can
			interact with different tools called `),C=d("span"),H=c("connectors"),T=c(` using their APIs and
			visualize gathered data.`),I=L(),v=d("div"),b=d("h2"),K=c("How does it work?"),k=L(),h=d("p"),j=c(`This app runs client-side in the browser and stores data locally using
			`),X(N.$$.fragment),ct=c(`.
			It is built with `),X(W.$$.fragment),ft=c(`,
			`),X(O.$$.fragment),bt=c(`,
			`),X(M.$$.fragment),wt=c(` and
			`),X(J.$$.fragment),Et=c("."),It=d("br"),xt=c(` It uses SvelteKit
			with `),X(F.$$.fragment),Pt=c(" in order to work with Github Pages."),St=L(),z=d("div"),ut=d("h2"),Ct=c("Which connectors are supported?"),Dt=L(),pt=d("p"),At=c("Currently supported:"),Lt=L(),et=d("ul");for(let s=0;s<D.length;s+=1)D[s].c();Vt=L(),_t=d("p"),Bt=c("Support planned:"),Ht=L(),nt=d("ul");for(let s=0;s<A.length;s+=1)A[s].c();Tt=L(),Q=d("div"),ht=d("h2"),zt=c("Version Information"),Ut=L(),X(lt.$$.fragment),this.h()},l(s){t=m(s,"DIV",{class:!0});var p=u(t);e=m(p,"H1",{class:!0});var U=u(e);l=f(U,"About"),U.forEach(o),a=V(p),r=m(p,"DIV",{});var st=u(r);P=m(st,"H2",{class:!0});var gt=u(P);x=f(gt,"What is this?"),gt.forEach(o),_=V(st),$=m(st,"P",{});var at=u($);S=f(at,`The main purpose of this tool is to visualize time tracking and planning information. It can
			interact with different tools called `),C=m(at,"SPAN",{class:!0});var $t=u(C);H=f($t,"connectors"),$t.forEach(o),T=f(at,` using their APIs and
			visualize gathered data.`),at.forEach(o),st.forEach(o),I=V(p),v=m(p,"DIV",{});var ot=u(v);b=m(ot,"H2",{class:!0});var g=u(b);K=f(g,"How does it work?"),g.forEach(o),k=V(ot),h=m(ot,"P",{});var w=u(h);j=f(w,`This app runs client-side in the browser and stores data locally using
			`),Y(N.$$.fragment,w),ct=f(w,`.
			It is built with `),Y(W.$$.fragment,w),ft=f(w,`,
			`),Y(O.$$.fragment,w),bt=f(w,`,
			`),Y(M.$$.fragment,w),wt=f(w,` and
			`),Y(J.$$.fragment,w),Et=f(w,"."),It=m(w,"BR",{}),xt=f(w,` It uses SvelteKit
			with `),Y(F.$$.fragment,w),Pt=f(w," in order to work with Github Pages."),w.forEach(o),ot.forEach(o),St=V(p),z=m(p,"DIV",{});var G=u(z);ut=m(G,"H2",{class:!0});var Nt=u(ut);Ct=f(Nt,"Which connectors are supported?"),Nt.forEach(o),Dt=V(G),pt=m(G,"P",{});var Wt=u(pt);At=f(Wt,"Currently supported:"),Wt.forEach(o),Lt=V(G),et=m(G,"UL",{class:!0});var jt=u(et);for(let rt=0;rt<D.length;rt+=1)D[rt].l(jt);jt.forEach(o),Vt=V(G),_t=m(G,"P",{});var Gt=u(_t);Bt=f(Gt,"Support planned:"),Gt.forEach(o),Ht=V(G),nt=m(G,"UL",{class:!0});var Rt=u(nt);for(let rt=0;rt<A.length;rt+=1)A[rt].l(Rt);Rt.forEach(o),G.forEach(o),Tt=V(p),Q=m(p,"DIV",{class:!0});var kt=u(Q);ht=m(kt,"H2",{class:!0});var qt=u(ht);zt=f(qt,"Version Information"),qt.forEach(o),Ut=V(kt),Y(lt.$$.fragment,kt),kt.forEach(o),p.forEach(o),this.h()},h(){E(e,"class","hidden text-lg font-medium sm:text-lg"),E(P,"class","text-lg font-medium sm:text-lg"),E(C,"class","italic"),E(b,"class","text-lg font-medium sm:text-lg"),E(ut,"class","text-lg font-medium sm:text-lg"),E(et,"class","ml-5 list-disc"),E(nt,"class","ml-5 list-disc"),E(ht,"class","text-lg font-medium sm:text-lg"),E(Q,"class","mt-2 border-t-2 pt-1"),E(t,"class","mx-auto max-w-4xl rounded-xl bg-slate-100 p-4")},m(s,p){B(s,t,p),n(t,e),n(e,l),n(t,a),n(t,r),n(r,P),n(P,x),n(r,_),n(r,$),n($,S),n($,C),n(C,H),n($,T),n(t,I),n(t,v),n(v,b),n(b,K),n(v,k),n(v,h),n(h,j),Z(N,h,null),n(h,ct),Z(W,h,null),n(h,ft),Z(O,h,null),n(h,bt),Z(M,h,null),n(h,wt),Z(J,h,null),n(h,Et),n(h,It),n(h,xt),Z(F,h,null),n(h,Pt),n(t,St),n(t,z),n(z,ut),n(ut,Ct),n(z,Dt),n(z,pt),n(pt,At),n(z,Lt),n(z,et);for(let U=0;U<D.length;U+=1)D[U].m(et,null);n(z,Vt),n(z,_t),n(_t,Bt),n(z,Ht),n(z,nt);for(let U=0;U<A.length;U+=1)A[U].m(nt,null);n(t,Tt),n(t,Q),n(Q,ht),n(ht,zt),n(Q,Ut),Z(lt,Q,null),vt=!0},p(s,[p]){const U={};p&256&&(U.$$scope={dirty:p,ctx:s}),N.$set(U);const st={};p&256&&(st.$$scope={dirty:p,ctx:s}),W.$set(st);const gt={};p&256&&(gt.$$scope={dirty:p,ctx:s}),O.$set(gt);const at={};p&256&&(at.$$scope={dirty:p,ctx:s}),M.$set(at);const $t={};p&256&&($t.$$scope={dirty:p,ctx:s}),J.$set($t);const ot={};if(p&256&&(ot.$$scope={dirty:p,ctx:s}),F.$set(ot),p&1){dt=s[0];let g;for(g=0;g<dt.length;g+=1){const w=Ft(s,dt,g);D[g]?D[g].p(w,p):(D[g]=Qt(w),D[g].c(),D[g].m(et,null))}for(;g<D.length;g+=1)D[g].d(1);D.length=dt.length}if(p&2){mt=s[1];let g;for(g=0;g<mt.length;g+=1){const w=Jt(s,mt,g);A[g]?A[g].p(w,p):(A[g]=Xt(w),A[g].c(),A[g].m(nt,null))}for(;g<A.length;g+=1)A[g].d(1);A.length=mt.length}},i(s){vt||(q(N.$$.fragment,s),q(W.$$.fragment,s),q(O.$$.fragment,s),q(M.$$.fragment,s),q(J.$$.fragment,s),q(F.$$.fragment,s),q(lt.$$.fragment,s),vt=!0)},o(s){R(N.$$.fragment,s),R(W.$$.fragment,s),R(O.$$.fragment,s),R(M.$$.fragment,s),R(J.$$.fragment,s),R(F.$$.fragment,s),R(lt.$$.fragment,s),vt=!1},d(s){s&&o(t),y(N),y(W),y(O),y(M),y(J),y(F),Mt(D,s),Mt(A,s),y(lt)}}}function ve(i){return[[{text:"None"}],[{text:"ActivityWatch (in Development)"},{text:"Clockify"},{text:"OpenProject"},{text:"SAP"},{text:"Outlook"}]]}class Ee extends Yt{constructor(t){super(),Zt(this,t,ve,$e,yt,{})}}export{Ee as default};