import{S as O,i as U,s as j,k as u,q as I,a as q,l as f,m as p,r as S,h as l,c as B,n as b,b as G,G as n,T as C,u as P,I as N,W}from"./index-18d6858c.js";import{c as V}from"./store-24c06a72.js";function w(c){let a,t,s,h,m,e,v,_,x,o,E,T,$;return{c(){a=u("div"),t=u("div"),s=u("button"),h=I("+"),m=q(),e=u("div"),v=u("p"),_=I(c[0]),x=q(),o=u("button"),E=I("-"),this.h()},l(r){a=f(r,"DIV",{class:!0});var i=p(a);t=f(i,"DIV",{class:!0});var d=p(t);s=f(d,"BUTTON",{class:!0});var k=p(s);h=S(k,"+"),k.forEach(l),m=B(d),e=f(d,"DIV",{});var y=p(e);v=f(y,"P",{});var D=p(v);_=S(D,c[0]),D.forEach(l),y.forEach(l),x=B(d),o=f(d,"BUTTON",{class:!0});var g=p(o);E=S(g,"-"),g.forEach(l),d.forEach(l),i.forEach(l),this.h()},h(){b(s,"class","border-2 px-2"),b(o,"class","border-2 px-2"),b(t,"class","flex flex-col gap-5"),b(a,"class","m-auto flex justify-around")},m(r,i){G(r,a,i),n(a,t),n(t,s),n(s,h),n(t,m),n(t,e),n(e,v),n(v,_),n(t,x),n(t,o),n(o,E),T||($=[C(s,"click",c[1]),C(o,"click",c[2])],T=!0)},p(r,[i]){i&1&&P(_,r[0])},i:N,o:N,d(r){r&&l(a),T=!1,W($)}}}function z(c,a,t){let s;function h(){V.update(e=>e+1)}function m(){V.update(e=>e-1)}return V.subscribe(e=>{t(0,s=e)}),[s,h,m]}class H extends O{constructor(a){super(),U(this,a,z,w,j,{})}}export{H as S};