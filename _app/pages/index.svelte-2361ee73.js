import{S as t,i as e,s,N as n,e as a,c as i,a as l,d as $,b as r,f as c,O as o,P as f,Q as u,x as m,u as p,A as d,M as g,T as v,j as h,m as x,F as b,o as w,v as y,k as E,n as j,G as I}from"../chunks/vendor-9512bb67.js";import{I as S}from"../chunks/index-37ef4ecd.js";function D(t){let e,s;const d=t[3].default,g=n(d,t,t[2],null);return{c(){e=a("div"),g&&g.c(),this.h()},l(t){e=i(t,"DIV",{class:!0});var s=l(e);g&&g.l(s),s.forEach($),this.h()},h(){r(e,"class","carousel svelte-1v0qxny")},m(n,a){c(n,e,a),g&&g.m(e,null),t[4](e),s=!0},p(t,[e]){g&&g.p&&(!s||4&e)&&o(g,d,t,t[2],s?u(d,t[2],e,null):f(t[2]),null)},i(t){s||(m(g,t),s=!0)},o(t){p(g,t),s=!1},d(s){s&&$(e),g&&g.d(s),t[4](null)}}}function k(t,e,s){let{$$slots:n={},$$scope:a}=e;var i=this&&this.__awaiter||function(t,e,s,n){return new(s||(s=Promise))((function(a,i){function l(t){try{r(n.next(t))}catch(e){i(e)}}function $(t){try{r(n.throw(t))}catch(e){i(e)}}function r(t){var e;t.done?a(t.value):(e=t.value,e instanceof s?e:new s((function(t){t(e)}))).then(l,$)}r((n=n.apply(t,e||[])).next())}))};let{interval:l=5e3}=e,$=null,r=null;return d((()=>i(void 0,void 0,void 0,(function*(){r=$.firstElementChild,setInterval((function(){var t;r.classList.remove("visible"),r=null!==(t=r.nextElementSibling)&&void 0!==t?t:r.parentNode.firstElementChild,r.classList.add("visible")}),l)})))),t.$$set=t=>{"interval"in t&&s(1,l=t.interval),"$$scope"in t&&s(2,a=t.$$scope)},[$,l,a,n,function(t){g[t?"unshift":"push"]((()=>{$=t,s(0,$)}))}]}class C extends t{constructor(t){super(),e(this,t,k,D,s,{interval:1})}}function N(t){let e,s;const d=t[2].default,g=n(d,t,t[1],null);return{c(){e=a("div"),g&&g.c(),this.h()},l(t){e=i(t,"DIV",{class:!0});var s=l(e);g&&g.l(s),s.forEach($),this.h()},h(){r(e,"class","carousel-element svelte-22if6u"),v(e,"visible",t[0])},m(t,n){c(t,e,n),g&&g.m(e,null),s=!0},p(t,[n]){g&&g.p&&(!s||2&n)&&o(g,d,t,t[1],s?u(d,t[1],n,null):f(t[1]),null),1&n&&v(e,"visible",t[0])},i(t){s||(m(g,t),s=!0)},o(t){p(g,t),s=!1},d(t){t&&$(e),g&&g.d(t)}}}function V(t,e,s){let{$$slots:n={},$$scope:a}=e,{visible:i=!1}=e;return t.$$set=t=>{"visible"in t&&s(0,i=t.visible),"$$scope"in t&&s(1,a=t.$$scope)},[i,a,n]}class L extends t{constructor(t){super(),e(this,t,V,N,s,{visible:0})}}function O(t){let e,s;return e=new S({props:{src:"inicio/01.jpg",alt:"Salud, motivación y resultados",message:"Salud, motivación y resultados"}}),{c(){h(e.$$.fragment)},l(t){x(e.$$.fragment,t)},m(t,n){w(e,t,n),s=!0},p:I,i(t){s||(m(e.$$.fragment,t),s=!0)},o(t){p(e.$$.fragment,t),s=!1},d(t){y(e,t)}}}function P(t){let e,s;return e=new S({props:{src:"inicio/02.jpg",alt:"Difícil no significa impostible",message:"Difícil no significa impostible"}}),{c(){h(e.$$.fragment)},l(t){x(e.$$.fragment,t)},m(t,n){w(e,t,n),s=!0},p:I,i(t){s||(m(e.$$.fragment,t),s=!0)},o(t){p(e.$$.fragment,t),s=!1},d(t){y(e,t)}}}function T(t){let e,s;return e=new S({props:{src:"inicio/03.jpg",alt:"Es dif",message:"Salud, motivación y resultados"}}),{c(){h(e.$$.fragment)},l(t){x(e.$$.fragment,t)},m(t,n){w(e,t,n),s=!0},p:I,i(t){s||(m(e.$$.fragment,t),s=!0)},o(t){p(e.$$.fragment,t),s=!1},d(t){y(e,t)}}}function _(t){let e,s;return e=new S({props:{src:"inicio/04.jpg",alt:"Es difícil, por eso vale la pena",message:"Es difícil, por eso vale la pena"}}),{c(){h(e.$$.fragment)},l(t){x(e.$$.fragment,t)},m(t,n){w(e,t,n),s=!0},p:I,i(t){s||(m(e.$$.fragment,t),s=!0)},o(t){p(e.$$.fragment,t),s=!1},d(t){y(e,t)}}}function q(t){let e,s,n,a,i,l,r,o;return e=new L({props:{visible:!0,$$slots:{default:[O]},$$scope:{ctx:t}}}),n=new L({props:{$$slots:{default:[P]},$$scope:{ctx:t}}}),i=new L({props:{$$slots:{default:[T]},$$scope:{ctx:t}}}),r=new L({props:{$$slots:{default:[_]},$$scope:{ctx:t}}}),{c(){h(e.$$.fragment),s=E(),h(n.$$.fragment),a=E(),h(i.$$.fragment),l=E(),h(r.$$.fragment)},l(t){x(e.$$.fragment,t),s=j(t),x(n.$$.fragment,t),a=j(t),x(i.$$.fragment,t),l=j(t),x(r.$$.fragment,t)},m(t,$){w(e,t,$),c(t,s,$),w(n,t,$),c(t,a,$),w(i,t,$),c(t,l,$),w(r,t,$),o=!0},p(t,s){const a={};1&s&&(a.$$scope={dirty:s,ctx:t}),e.$set(a);const l={};1&s&&(l.$$scope={dirty:s,ctx:t}),n.$set(l);const $={};1&s&&($.$$scope={dirty:s,ctx:t}),i.$set($);const c={};1&s&&(c.$$scope={dirty:s,ctx:t}),r.$set(c)},i(t){o||(m(e.$$.fragment,t),m(n.$$.fragment,t),m(i.$$.fragment,t),m(r.$$.fragment,t),o=!0)},o(t){p(e.$$.fragment,t),p(n.$$.fragment,t),p(i.$$.fragment,t),p(r.$$.fragment,t),o=!1},d(t){y(e,t),t&&$(s),y(n,t),t&&$(a),y(i,t),t&&$(l),y(r,t)}}}function A(t){let e,s,n,o;return n=new C({props:{interval:3500,$$slots:{default:[q]},$$scope:{ctx:t}}}),{c(){e=a("section"),s=a("div"),h(n.$$.fragment),this.h()},l(t){e=i(t,"SECTION",{class:!0});var a=l(e);s=i(a,"DIV",{class:!0});var r=l(s);x(n.$$.fragment,r),r.forEach($),a.forEach($),this.h()},h(){r(s,"class","first-screen"),r(e,"class","svelte-1jlhe5t")},m(t,a){c(t,e,a),b(e,s),w(n,s,null),o=!0},p(t,[e]){const s={};1&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s)},i(t){o||(m(n.$$.fragment,t),o=!0)},o(t){p(n.$$.fragment,t),o=!1},d(t){t&&$(e),y(n)}}}const F=!0;class G extends t{constructor(t){super(),e(this,t,null,A,s,{})}}export{G as default,F as prerender};
