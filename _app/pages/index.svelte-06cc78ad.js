import{S as s,i as e,s as a,M as t,e as n,c as l,a as r,d as i,b as c,f as o,N as u,O as $,P as f,x as m,u as v,A as h,L as d,t as g,g as p,H as b,h as E,k as x,n as y,R as I,T as w,Q as j,j as k,m as D,o as S,v as V}from"../chunks/vendor-254f72b9.js";import{t as q}from"../chunks/stores-b3fc156e.js";function z(s){let e,a;const h=s[3].default,d=t(h,s,s[2],null);return{c(){e=n("div"),d&&d.c(),this.h()},l(s){e=l(s,"DIV",{class:!0});var a=r(e);d&&d.l(a),a.forEach(i),this.h()},h(){c(e,"class","carousel svelte-16y0qe0")},m(t,n){o(t,e,n),d&&d.m(e,null),s[4](e),a=!0},p(s,[e]){d&&d.p&&(!a||4&e)&&u(d,h,s,s[2],a?f(h,s[2],e,null):$(s[2]),null)},i(s){a||(m(d,s),a=!0)},o(s){v(d,s),a=!1},d(a){a&&i(e),d&&d.d(a),s[4](null)}}}function C(s,e,a){let{$$slots:t={},$$scope:n}=e;var l=this&&this.__awaiter||function(s,e,a,t){return new(a||(a=Promise))((function(n,l){function r(s){try{c(t.next(s))}catch(e){l(e)}}function i(s){try{c(t.throw(s))}catch(e){l(e)}}function c(s){var e;s.done?n(s.value):(e=s.value,e instanceof a?e:new a((function(s){s(e)}))).then(r,i)}c((t=t.apply(s,e||[])).next())}))};let{interval:r=5e3}=e,i=null,c=null;return h((()=>l(void 0,void 0,void 0,(function*(){c=i.firstElementChild,setInterval((function(){var s;c.classList.remove("visible"),c=null!==(s=c.nextElementSibling)&&void 0!==s?s:c.parentNode.firstElementChild,c.classList.add("visible")}),r)})))),s.$$set=s=>{"interval"in s&&a(1,r=s.interval),"$$scope"in s&&a(2,n=s.$$scope)},[i,r,n,t,function(s){d[s?"unshift":"push"]((()=>{i=s,a(0,i)}))}]}class N extends s{constructor(s){super(),e(this,s,C,z,a,{interval:1})}}function H(s){let e,a,t;return{c(){e=n("div"),a=n("div"),t=g(s[2]),this.h()},l(n){e=l(n,"DIV",{class:!0});var c=r(e);a=l(c,"DIV",{class:!0});var o=r(a);t=p(o,s[2]),o.forEach(i),c.forEach(i),this.h()},h(){c(a,"class","message svelte-1l8ksd8"),c(e,"class","message-container svelte-1l8ksd8")},m(s,n){o(s,e,n),b(e,a),b(a,t)},p(s,e){4&e&&E(t,s[2])},d(s){s&&i(e)}}}function L(s){let e,a,t,u,$=""!=s[2]&&H(s);return{c(){e=n("div"),a=n("img"),u=x(),$&&$.c(),this.h()},l(s){e=l(s,"DIV",{class:!0});var t=r(e);a=l(t,"IMG",{src:!0,alt:!0,class:!0}),u=y(t),$&&$.l(t),t.forEach(i),this.h()},h(){I(a.src,t=s[0])||c(a,"src",t),c(a,"alt",s[1]),c(a,"class","svelte-1l8ksd8"),c(e,"class","item svelte-1l8ksd8"),w(e,"visible",s[3])},m(s,t){o(s,e,t),b(e,a),b(e,u),$&&$.m(e,null)},p(s,[n]){1&n&&!I(a.src,t=s[0])&&c(a,"src",t),2&n&&c(a,"alt",s[1]),""!=s[2]?$?$.p(s,n):($=H(s),$.c(),$.m(e,null)):$&&($.d(1),$=null),8&n&&w(e,"visible",s[3])},i:j,o:j,d(s){s&&i(e),$&&$.d()}}}function P(s,e,a){let{src:t}=e,{alt:n=""}=e,{message:l=""}=e,{visible:r=!1}=e;return s.$$set=s=>{"src"in s&&a(0,t=s.src),"alt"in s&&a(1,n=s.alt),"message"in s&&a(2,l=s.message),"visible"in s&&a(3,r=s.visible)},[t,n,l,r]}class B extends s{constructor(s){super(),e(this,s,P,L,a,{src:0,alt:1,message:2,visible:3})}}function M(s){let e,a,t,n,l,r,c,u;return e=new B({props:{visible:!0,src:"grupos.jpg",alt:"grupo"}}),t=new B({props:{src:"individual.jpg",alt:"individual",message:"No te ahogues"}}),l=new B({props:{src:"intro.jpg",alt:"intro",message:"Porque yo lo valgo"}}),c=new B({props:{src:"mamas.jpg",alt:"mamas",message:"Slurp!!!"}}),{c(){k(e.$$.fragment),a=x(),k(t.$$.fragment),n=x(),k(l.$$.fragment),r=x(),k(c.$$.fragment)},l(s){D(e.$$.fragment,s),a=y(s),D(t.$$.fragment,s),n=y(s),D(l.$$.fragment,s),r=y(s),D(c.$$.fragment,s)},m(s,i){S(e,s,i),o(s,a,i),S(t,s,i),o(s,n,i),S(l,s,i),o(s,r,i),S(c,s,i),u=!0},p:j,i(s){u||(m(e.$$.fragment,s),m(t.$$.fragment,s),m(l.$$.fragment,s),m(c.$$.fragment,s),u=!0)},o(s){v(e.$$.fragment,s),v(t.$$.fragment,s),v(l.$$.fragment,s),v(c.$$.fragment,s),u=!1},d(s){V(e,s),s&&i(a),V(t,s),s&&i(n),V(l,s),s&&i(r),V(c,s)}}}function O(s){let e,a,t,u,$,f,h,d,E,I,w;return f=new N({props:{interval:3500,$$slots:{default:[M]},$$scope:{ctx:s}}}),{c(){e=n("section"),a=n("div"),t=n("h1"),u=g("Salud y bienestar"),$=x(),k(f.$$.fragment),h=x(),d=n("div"),E=n("h1"),I=g("Chorizo y Bacon"),this.h()},l(s){e=l(s,"SECTION",{class:!0});var n=r(e);a=l(n,"DIV",{class:!0});var c=r(a);t=l(c,"H1",{});var o=r(t);u=p(o,"Salud y bienestar"),o.forEach(i),c.forEach(i),$=y(n),D(f.$$.fragment,n),h=y(n),d=l(n,"DIV",{class:!0});var m=r(d);E=l(m,"H1",{});var v=r(E);I=p(v,"Chorizo y Bacon"),v.forEach(i),m.forEach(i),n.forEach(i),this.h()},h(){c(a,"class","motivational svelte-igqdez"),c(d,"class","motivational svelte-igqdez"),c(e,"class","svelte-igqdez")},m(s,n){o(s,e,n),b(e,a),b(a,t),b(t,u),b(e,$),S(f,e,null),b(e,h),b(e,d),b(d,E),b(E,I),w=!0},p(s,[e]){const a={};1&e&&(a.$$scope={dirty:e,ctx:s}),f.$set(a)},i(s){w||(m(f.$$.fragment,s),w=!0)},o(s){v(f.$$.fragment,s),w=!1},d(s){s&&i(e),V(f)}}}q.set("Inicio");const T=!0;class _ extends s{constructor(s){super(),e(this,s,null,O,a,{})}}export{_ as default,T as prerender};