function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function o(){return Object.create(null)}function i(t){t.forEach(e)}function l(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}let r;function s(t,n){return r||(r=document.createElement("a")),r.href=n,t===r.href}function a(t,n,e,o){if(t){const i=f(t,n,e,o);return t[0](i)}}function f(t,e,o,i){return t[1]&&i?n(o.ctx.slice(),t[1](i(e))):o.ctx}function u(t,n,e,o){if(t[2]&&o){const i=t[2](o(e));if(void 0===n.dirty)return i;if("object"==typeof i){const t=[],e=Math.max(n.dirty.length,i.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|i[o];return t}return n.dirty|i}return n.dirty}function d(t,n,e,o,i,l){if(i){const c=f(n,e,o,l);t.p(c,i)}}function h(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let t=0;t<e;t++)n[t]=-1;return n}return-1}let p,m=!1;function $(t,n,e,o){for(;t<n;){const i=t+(n-t>>1);e(i)<=o?t=i+1:n=i}return t}function g(t,n){if(m){for(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if("HEAD"===t.nodeName){const t=[];for(let e=0;e<n.length;e++){const o=n[e];void 0!==o.claim_order&&t.push(o)}n=t}const e=new Int32Array(n.length+1),o=new Int32Array(n.length);e[0]=-1;let i=0;for(let s=0;s<n.length;s++){const t=n[s].claim_order,l=(i>0&&n[e[i]].claim_order<=t?i+1:$(1,i,(t=>n[e[t]].claim_order),t))-1;o[s]=e[l]+1;const c=l+1;e[c]=s,i=Math.max(c,i)}const l=[],c=[];let r=n.length-1;for(let s=e[i]+1;0!=s;s=o[s-1]){for(l.push(n[s-1]);r>=s;r--)c.push(n[r]);r--}for(;r>=0;r--)c.push(n[r]);l.reverse(),c.sort(((t,n)=>t.claim_order-n.claim_order));for(let s=0,a=0;s<c.length;s++){for(;a<l.length&&c[s].claim_order>=l[a].claim_order;)a++;const n=a<l.length?l[a]:null;t.insertBefore(c[s],n)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);null!==t.actual_end_child&&void 0===t.actual_end_child.claim_order;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?void 0===n.claim_order&&n.parentNode===t||t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else n.parentNode===t&&null===n.nextSibling||t.appendChild(n)}function v(t,n,e){m&&!e?g(t,n):n.parentNode===t&&n.nextSibling==e||t.insertBefore(n,e||null)}function y(t){t.parentNode.removeChild(t)}function _(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function x(t){return document.createElement(t)}function b(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function w(t){return document.createTextNode(t)}function z(){return w(" ")}function N(){return w("")}function M(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function V(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function E(t,n){for(const e in n)V(t,e,n[e])}function k(t){return Array.from(t.childNodes)}function H(t,n,e,o,i=!1){!function(t){void 0===t.claim_info&&(t.claim_info={last_index:0,total_claimed:0})}(t);const l=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const l=t[o];if(n(l)){const n=e(l);return void 0===n?t.splice(o,1):t[o]=n,i||(t.claim_info.last_index=o),l}}for(let o=t.claim_info.last_index-1;o>=0;o--){const l=t[o];if(n(l)){const n=e(l);return void 0===n?t.splice(o,1):t[o]=n,i?void 0===n&&t.claim_info.last_index--:t.claim_info.last_index=o,l}}return o()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function S(t,n,e,o){return H(t,(t=>t.nodeName===n),(t=>{const n=[];for(let o=0;o<t.attributes.length;o++){const i=t.attributes[o];e[i.name]||n.push(i.name)}n.forEach((n=>t.removeAttribute(n)))}),(()=>o?b(n):x(n)))}function A(t,n){return H(t,(t=>3===t.nodeType),(t=>{const e=""+n;if(t.data.startsWith(e)){if(t.data.length!==e.length)return t.splitText(e.length)}else t.data=e}),(()=>w(n)),!0)}function B(t){return A(t," ")}function L(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function C(t,n,e,o){t.style.setProperty(n,e,o?"important":"")}function j(t,n,e){t.classList[e?"add":"remove"](n)}function T(t,n=document.body){return Array.from(n.querySelectorAll(t))}function O(t){p=t}function q(){if(!p)throw new Error("Function called outside component initialization");return p}function I(t){q().$$.on_mount.push(t)}function P(t){q().$$.after_update.push(t)}function W(t,n){q().$$.context.set(t,n)}const D=[],F=[],G=[],J=[],K=Promise.resolve();let Q=!1;function R(t){G.push(t)}let U=!1;const X=new Set;function Y(){if(!U){U=!0;do{for(let t=0;t<D.length;t+=1){const n=D[t];O(n),Z(n.$$)}for(O(null),D.length=0;F.length;)F.pop()();for(let t=0;t<G.length;t+=1){const n=G[t];X.has(n)||(X.add(n),n())}G.length=0}while(D.length);for(;J.length;)J.pop()();Q=!1,U=!1,X.clear()}}function Z(t){if(null!==t.fragment){t.update(),i(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(R)}}const tt=new Set;let nt;function et(){nt={r:0,c:[],p:nt}}function ot(){nt.r||i(nt.c),nt=nt.p}function it(t,n){t&&t.i&&(tt.delete(t),t.i(n))}function lt(t,n,e,o){if(t&&t.o){if(tt.has(t))return;tt.add(t),nt.c.push((()=>{tt.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function ct(t,n){const e={},o={},i={$$scope:1};let l=t.length;for(;l--;){const c=t[l],r=n[l];if(r){for(const t in c)t in r||(o[t]=1);for(const t in r)i[t]||(e[t]=r[t],i[t]=1);t[l]=r}else for(const t in c)i[t]=1}for(const c in o)c in e||(e[c]=void 0);return e}function rt(t){return"object"==typeof t&&null!==t?t:{}}function st(t){t&&t.c()}function at(t,n){t&&t.l(n)}function ft(t,n,o,c){const{fragment:r,on_mount:s,on_destroy:a,after_update:f}=t.$$;r&&r.m(n,o),c||R((()=>{const n=s.map(e).filter(l);a?a.push(...n):i(n),t.$$.on_mount=[]})),f.forEach(R)}function ut(t,n){const e=t.$$;null!==e.fragment&&(i(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function dt(t,n){-1===t.$$.dirty[0]&&(D.push(t),Q||(Q=!0,K.then(Y)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function ht(n,e,l,c,r,s,a,f=[-1]){const u=p;O(n);const d=n.$$={fragment:null,ctx:null,props:s,update:t,not_equal:r,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:e.context||[]),callbacks:o(),dirty:f,skip_bound:!1,root:e.target||u.$$.root};a&&a(d.root);let h=!1;if(d.ctx=l?l(n,e.props||{},((t,e,...o)=>{const i=o.length?o[0]:e;return d.ctx&&r(d.ctx[t],d.ctx[t]=i)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](i),h&&dt(n,t)),e})):[],d.update(),h=!0,i(d.before_update),d.fragment=!!c&&c(d.ctx),e.target){if(e.hydrate){m=!0;const t=k(e.target);d.fragment&&d.fragment.l(t),t.forEach(y)}else d.fragment&&d.fragment.c();e.intro&&it(n.$$.fragment),ft(n,e.target,e.anchor,e.customElement),m=!1,Y()}O(u)}class pt{$destroy(){ut(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const mt=[];function $t(n,e=t){let o;const i=new Set;function l(t){if(c(n,t)&&(n=t,o)){const t=!mt.length;for(const e of i)e[1](),mt.push(e,n);if(t){for(let t=0;t<mt.length;t+=2)mt[t][0](mt[t+1]);mt.length=0}}}return{set:l,update:function(t){l(t(n))},subscribe:function(c,r=t){const s=[c,r];return i.add(s),1===i.size&&(o=e(l)||t),c(n),()=>{i.delete(s),0===i.size&&(o(),o=null)}}}}function gt(e){let o,i,l=[{key:i="path-"+e[0]},e[1]],c={};for(let t=0;t<l.length;t+=1)c=n(c,l[t]);return{c(){o=b("path"),this.h()},l(t){o=S(t,"path",{key:!0},1),k(o).forEach(y),this.h()},h(){E(o,c)},m(t,n){v(t,o,n)},p(t,[n]){E(o,c=ct(l,[1&n&&i!==(i="path-"+t[0])&&{key:i},2&n&&t[1]]))},i:t,o:t,d(t){t&&y(o)}}}function vt(t,n,e){let{id:o=""}=n,{data:i={}}=n;return t.$$set=t=>{"id"in t&&e(0,o=t.id),"data"in t&&e(1,i=t.data)},[o,i]}class yt extends pt{constructor(t){super(),ht(this,t,vt,gt,c,{id:0,data:1})}}function _t(e){let o,i,l=[{key:i="polygon-"+e[0]},e[1]],c={};for(let t=0;t<l.length;t+=1)c=n(c,l[t]);return{c(){o=b("polygon"),this.h()},l(t){o=S(t,"polygon",{key:!0},1),k(o).forEach(y),this.h()},h(){E(o,c)},m(t,n){v(t,o,n)},p(t,[n]){E(o,c=ct(l,[1&n&&i!==(i="polygon-"+t[0])&&{key:i},2&n&&t[1]]))},i:t,o:t,d(t){t&&y(o)}}}function xt(t,n,e){let{id:o=""}=n,{data:i={}}=n;return t.$$set=t=>{"id"in t&&e(0,o=t.id),"data"in t&&e(1,i=t.data)},[o,i]}class bt extends pt{constructor(t){super(),ht(this,t,xt,_t,c,{id:0,data:1})}}function wt(n){let e;return{c(){e=b("g")},l(t){e=S(t,"g",{},1),k(e).forEach(y)},m(t,o){v(t,e,o),e.innerHTML=n[0]},p(t,[n]){1&n&&(e.innerHTML=t[0])},i:t,o:t,d(t){t&&y(e)}}}function zt(t,n,e){let o,i=870711;let{data:l}=n;function c(t){if(!t||!t.raw)return null;let n=t.raw;const e={};return n=n.replace(/\s(?:xml:)?id=["']?([^"')\s]+)/g,((t,n)=>{const o=(i+=1,`fa-${i.toString(16)}`);return e[n]=o,` id="${o}"`})),n=n.replace(/#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g,((t,n,o,i)=>{const l=n||i;return l&&e[l]?`#${e[l]}`:t})),n}return t.$$set=t=>{"data"in t&&e(1,l=t.data)},t.$$.update=()=>{2&t.$$.dirty&&e(0,o=c(l))},[o,l]}class Nt extends pt{constructor(t){super(),ht(this,t,zt,wt,c,{data:1})}}function Mt(t){let n,e,o,i;const l=t[13].default,c=a(l,t,t[12],null);return{c(){n=b("svg"),c&&c.c(),this.h()},l(t){n=S(t,"svg",{version:!0,class:!0,x:!0,y:!0,width:!0,height:!0,"aria-label":!0,role:!0,viewBox:!0,style:!0},1);var e=k(n);c&&c.l(e),e.forEach(y),this.h()},h(){V(n,"version","1.1"),V(n,"class",e="fa-icon "+t[0]+" svelte-1dof0an"),V(n,"x",t[8]),V(n,"y",t[9]),V(n,"width",t[1]),V(n,"height",t[2]),V(n,"aria-label",t[11]),V(n,"role",o=t[11]?"img":"presentation"),V(n,"viewBox",t[3]),V(n,"style",t[10]),j(n,"fa-spin",t[4]),j(n,"fa-pulse",t[6]),j(n,"fa-inverse",t[5]),j(n,"fa-flip-horizontal","horizontal"===t[7]),j(n,"fa-flip-vertical","vertical"===t[7])},m(t,e){v(t,n,e),c&&c.m(n,null),i=!0},p(t,[r]){c&&c.p&&(!i||4096&r)&&d(c,l,t,t[12],i?u(l,t[12],r,null):h(t[12]),null),(!i||1&r&&e!==(e="fa-icon "+t[0]+" svelte-1dof0an"))&&V(n,"class",e),(!i||256&r)&&V(n,"x",t[8]),(!i||512&r)&&V(n,"y",t[9]),(!i||2&r)&&V(n,"width",t[1]),(!i||4&r)&&V(n,"height",t[2]),(!i||2048&r)&&V(n,"aria-label",t[11]),(!i||2048&r&&o!==(o=t[11]?"img":"presentation"))&&V(n,"role",o),(!i||8&r)&&V(n,"viewBox",t[3]),(!i||1024&r)&&V(n,"style",t[10]),17&r&&j(n,"fa-spin",t[4]),65&r&&j(n,"fa-pulse",t[6]),33&r&&j(n,"fa-inverse",t[5]),129&r&&j(n,"fa-flip-horizontal","horizontal"===t[7]),129&r&&j(n,"fa-flip-vertical","vertical"===t[7])},i(t){i||(it(c,t),i=!0)},o(t){lt(c,t),i=!1},d(t){t&&y(n),c&&c.d(t)}}}function Vt(t,n,e){let{$$slots:o={},$$scope:i}=n,{class:l}=n,{width:c}=n,{height:r}=n,{box:s}=n,{spin:a=!1}=n,{inverse:f=!1}=n,{pulse:u=!1}=n,{flip:d=null}=n,{x:h}=n,{y:p}=n,{style:m}=n,{label:$}=n;return t.$$set=t=>{"class"in t&&e(0,l=t.class),"width"in t&&e(1,c=t.width),"height"in t&&e(2,r=t.height),"box"in t&&e(3,s=t.box),"spin"in t&&e(4,a=t.spin),"inverse"in t&&e(5,f=t.inverse),"pulse"in t&&e(6,u=t.pulse),"flip"in t&&e(7,d=t.flip),"x"in t&&e(8,h=t.x),"y"in t&&e(9,p=t.y),"style"in t&&e(10,m=t.style),"label"in t&&e(11,$=t.label),"$$scope"in t&&e(12,i=t.$$scope)},[l,c,r,s,a,f,u,d,h,p,m,$,i,o]}class Et extends pt{constructor(t){super(),ht(this,t,Vt,Mt,c,{class:0,width:1,height:2,box:3,spin:4,inverse:5,pulse:6,flip:7,x:8,y:9,style:10,label:11})}}function kt(t,n,e){const o=t.slice();return o[24]=n[e],o[26]=e,o}function Ht(t,n,e){const o=t.slice();return o[27]=n[e],o[26]=e,o}function St(t){let n,e,o,i,l=t[0].paths&&At(t),c=t[0].polygons&&Lt(t),r=t[0].raw&&jt(t);return{c(){l&&l.c(),n=z(),c&&c.c(),e=z(),r&&r.c(),o=N()},l(t){l&&l.l(t),n=B(t),c&&c.l(t),e=B(t),r&&r.l(t),o=N()},m(t,s){l&&l.m(t,s),v(t,n,s),c&&c.m(t,s),v(t,e,s),r&&r.m(t,s),v(t,o,s),i=!0},p(t,i){t[0].paths?l?(l.p(t,i),1&i&&it(l,1)):(l=At(t),l.c(),it(l,1),l.m(n.parentNode,n)):l&&(et(),lt(l,1,1,(()=>{l=null})),ot()),t[0].polygons?c?(c.p(t,i),1&i&&it(c,1)):(c=Lt(t),c.c(),it(c,1),c.m(e.parentNode,e)):c&&(et(),lt(c,1,1,(()=>{c=null})),ot()),t[0].raw?r?(r.p(t,i),1&i&&it(r,1)):(r=jt(t),r.c(),it(r,1),r.m(o.parentNode,o)):r&&(et(),lt(r,1,1,(()=>{r=null})),ot())},i(t){i||(it(l),it(c),it(r),i=!0)},o(t){lt(l),lt(c),lt(r),i=!1},d(t){l&&l.d(t),t&&y(n),c&&c.d(t),t&&y(e),r&&r.d(t),t&&y(o)}}}function At(t){let n,e,o=t[0].paths,i=[];for(let c=0;c<o.length;c+=1)i[c]=Bt(Ht(t,o,c));const l=t=>lt(i[t],1,1,(()=>{i[t]=null}));return{c(){for(let t=0;t<i.length;t+=1)i[t].c();n=N()},l(t){for(let n=0;n<i.length;n+=1)i[n].l(t);n=N()},m(t,o){for(let n=0;n<i.length;n+=1)i[n].m(t,o);v(t,n,o),e=!0},p(t,e){if(1&e){let c;for(o=t[0].paths,c=0;c<o.length;c+=1){const l=Ht(t,o,c);i[c]?(i[c].p(l,e),it(i[c],1)):(i[c]=Bt(l),i[c].c(),it(i[c],1),i[c].m(n.parentNode,n))}for(et(),c=o.length;c<i.length;c+=1)l(c);ot()}},i(t){if(!e){for(let t=0;t<o.length;t+=1)it(i[t]);e=!0}},o(t){i=i.filter(Boolean);for(let n=0;n<i.length;n+=1)lt(i[n]);e=!1},d(t){_(i,t),t&&y(n)}}}function Bt(t){let n,e;return n=new yt({props:{id:t[26],data:t[27]}}),{c(){st(n.$$.fragment)},l(t){at(n.$$.fragment,t)},m(t,o){ft(n,t,o),e=!0},p(t,e){const o={};1&e&&(o.data=t[27]),n.$set(o)},i(t){e||(it(n.$$.fragment,t),e=!0)},o(t){lt(n.$$.fragment,t),e=!1},d(t){ut(n,t)}}}function Lt(t){let n,e,o=t[0].polygons,i=[];for(let c=0;c<o.length;c+=1)i[c]=Ct(kt(t,o,c));const l=t=>lt(i[t],1,1,(()=>{i[t]=null}));return{c(){for(let t=0;t<i.length;t+=1)i[t].c();n=N()},l(t){for(let n=0;n<i.length;n+=1)i[n].l(t);n=N()},m(t,o){for(let n=0;n<i.length;n+=1)i[n].m(t,o);v(t,n,o),e=!0},p(t,e){if(1&e){let c;for(o=t[0].polygons,c=0;c<o.length;c+=1){const l=kt(t,o,c);i[c]?(i[c].p(l,e),it(i[c],1)):(i[c]=Ct(l),i[c].c(),it(i[c],1),i[c].m(n.parentNode,n))}for(et(),c=o.length;c<i.length;c+=1)l(c);ot()}},i(t){if(!e){for(let t=0;t<o.length;t+=1)it(i[t]);e=!0}},o(t){i=i.filter(Boolean);for(let n=0;n<i.length;n+=1)lt(i[n]);e=!1},d(t){_(i,t),t&&y(n)}}}function Ct(t){let n,e;return n=new bt({props:{id:t[26],data:t[24]}}),{c(){st(n.$$.fragment)},l(t){at(n.$$.fragment,t)},m(t,o){ft(n,t,o),e=!0},p(t,e){const o={};1&e&&(o.data=t[24]),n.$set(o)},i(t){e||(it(n.$$.fragment,t),e=!0)},o(t){lt(n.$$.fragment,t),e=!1},d(t){ut(n,t)}}}function jt(t){let n,e,o;function i(n){t[15](n)}let l={};return void 0!==t[0]&&(l.data=t[0]),n=new Nt({props:l}),F.push((()=>function(t,n,e){const o=t.$$.props[n];void 0!==o&&(t.$$.bound[o]=e,e(t.$$.ctx[o]))}(n,"data",i))),{c(){st(n.$$.fragment)},l(t){at(n.$$.fragment,t)},m(t,e){ft(n,t,e),o=!0},p(t,o){const i={};var l;!e&&1&o&&(e=!0,i.data=t[0],l=()=>e=!1,J.push(l)),n.$set(i)},i(t){o||(it(n.$$.fragment,t),o=!0)},o(t){lt(n.$$.fragment,t),o=!1},d(t){ut(n,t)}}}function Tt(t){let n;const e=t[14].default,o=a(e,t,t[16],null),i=o||function(t){let n,e,o=t[0]&&St(t);return{c(){o&&o.c(),n=N()},l(t){o&&o.l(t),n=N()},m(t,i){o&&o.m(t,i),v(t,n,i),e=!0},p(t,e){t[0]?o?(o.p(t,e),1&e&&it(o,1)):(o=St(t),o.c(),it(o,1),o.m(n.parentNode,n)):o&&(et(),lt(o,1,1,(()=>{o=null})),ot())},i(t){e||(it(o),e=!0)},o(t){lt(o),e=!1},d(t){o&&o.d(t),t&&y(n)}}}(t);return{c(){i&&i.c()},l(t){i&&i.l(t)},m(t,e){i&&i.m(t,e),n=!0},p(t,l){o?o.p&&(!n||65536&l)&&d(o,e,t,t[16],n?u(e,t[16],l,null):h(t[16]),null):i&&i.p&&(!n||1&l)&&i.p(t,n?l:-1)},i(t){n||(it(i,t),n=!0)},o(t){lt(i,t),n=!1},d(t){i&&i.d(t)}}}function Ot(t){let n,e;return n=new Et({props:{label:t[6],width:t[7],height:t[8],box:t[10],style:t[9],spin:t[2],flip:t[5],inverse:t[3],pulse:t[4],class:t[1],$$slots:{default:[Tt]},$$scope:{ctx:t}}}),{c(){st(n.$$.fragment)},l(t){at(n.$$.fragment,t)},m(t,o){ft(n,t,o),e=!0},p(t,[e]){const o={};64&e&&(o.label=t[6]),128&e&&(o.width=t[7]),256&e&&(o.height=t[8]),1024&e&&(o.box=t[10]),512&e&&(o.style=t[9]),4&e&&(o.spin=t[2]),32&e&&(o.flip=t[5]),8&e&&(o.inverse=t[3]),16&e&&(o.pulse=t[4]),2&e&&(o.class=t[1]),65537&e&&(o.$$scope={dirty:e,ctx:t}),n.$set(o)},i(t){e||(it(n.$$.fragment,t),e=!0)},o(t){lt(n.$$.fragment,t),e=!1},d(t){ut(n,t)}}}function qt(t,n,e){let o,i,l,c,{$$slots:r={},$$scope:s}=n,{class:a=""}=n,{data:f}=n,{scale:u=1}=n,{spin:d=!1}=n,{inverse:h=!1}=n,{pulse:p=!1}=n,{flip:m=null}=n,{label:$=null}=n,{self:g=null}=n,{style:v=null}=n;function y(){let t=1;return void 0!==u&&(t=Number(u)),isNaN(t)||t<=0?(console.warn('Invalid prop: prop "scale" should be a number over 0.'),1):1*t}function _(){return g?Math.max(g.width,g.height)/16:1}return t.$$set=t=>{"class"in t&&e(1,a=t.class),"data"in t&&e(11,f=t.data),"scale"in t&&e(12,u=t.scale),"spin"in t&&e(2,d=t.spin),"inverse"in t&&e(3,h=t.inverse),"pulse"in t&&e(4,p=t.pulse),"flip"in t&&e(5,m=t.flip),"label"in t&&e(6,$=t.label),"self"in t&&e(0,g=t.self),"style"in t&&e(13,v=t.style),"$$scope"in t&&e(16,s=t.$$scope)},t.$$.update=()=>{14336&t.$$.dirty&&(!function(){if(void 0===f)return;const t=function(t){if("iconName"in t&&"icon"in t){let n={},e=t.icon,o=t.iconName,i={width:e[0],height:e[1],paths:[{d:e[4]}]};return n[o]=i,n}return t}(f),[n]=Object.keys(t),o=t[n];o.paths||(o.paths=[]),o.d&&o.paths.push({d:o.d}),o.polygons||(o.polygons=[]),o.points&&o.polygons.push({points:o.points}),e(0,g=o)}(),e(7,o=g?g.width/_()*y():0),e(8,i=g?g.height/_()*y():0),e(9,l=function(){let t="";null!==v&&(t+=v);let n=y();if(1===n){if(0===t.length)return;return t}return""===t||t.endsWith(";")||(t+="; "),`${t}font-size: ${n}em`}()),e(10,c=g?`0 0 ${g.width} ${g.height}`:`0 0 ${o} ${i}`))},[g,a,d,h,p,m,$,o,i,l,c,f,u,v,r,function(t){g=t,e(0,g)},s]}class It extends pt{constructor(t){super(),ht(this,t,qt,Ot,c,{class:1,data:11,scale:12,spin:2,inverse:3,pulse:4,flip:5,label:6,self:0,style:13})}}
/*!
 * Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */var Pt={prefix:"fas",iconName:"bars",icon:[448,512,[],"f0c9","M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"]},Wt={prefix:"fas",iconName:"dumbbell",icon:[640,512,[],"f44b","M104 96H56c-13.3 0-24 10.7-24 24v104H8c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h24v104c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24V120c0-13.3-10.7-24-24-24zm528 128h-24V120c0-13.3-10.7-24-24-24h-48c-13.3 0-24 10.7-24 24v272c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24V288h24c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM456 32h-48c-13.3 0-24 10.7-24 24v168H256V56c0-13.3-10.7-24-24-24h-48c-13.3 0-24 10.7-24 24v400c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24V288h128v168c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24z"]},Dt={prefix:"fas",iconName:"pencil-alt",icon:[512,512,[],"f303","M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z"]},Ft={prefix:"fas",iconName:"stopwatch",icon:[448,512,[],"f2f2","M432 304c0 114.9-93.1 208-208 208S16 418.9 16 304c0-104 76.3-190.2 176-205.5V64h-28c-6.6 0-12-5.4-12-12V12c0-6.6 5.4-12 12-12h120c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-28v34.5c37.5 5.8 71.7 21.6 99.7 44.6l27.5-27.5c4.7-4.7 12.3-4.7 17 0l28.3 28.3c4.7 4.7 4.7 12.3 0 17l-29.4 29.4-.6.6C419.7 223.3 432 262.2 432 304zm-176 36V188.5c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12V340c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12z"]},Gt={prefix:"fas",iconName:"user",icon:[448,512,[],"f007","M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"]},Jt={prefix:"fas",iconName:"utensils",icon:[416,512,[],"f2e7","M207.9 15.2c.8 4.7 16.1 94.5 16.1 128.8 0 52.3-27.8 89.6-68.9 104.6L168 486.7c.7 13.7-10.2 25.3-24 25.3H80c-13.7 0-24.7-11.5-24-25.3l12.9-238.1C27.7 233.6 0 196.2 0 144 0 109.6 15.3 19.9 16.1 15.2 19.3-5.1 61.4-5.4 64 16.3v141.2c1.3 3.4 15.1 3.2 16 0 1.4-25.3 7.9-139.2 8-141.8 3.3-20.8 44.7-20.8 47.9 0 .2 2.7 6.6 116.5 8 141.8.9 3.2 14.8 3.4 16 0V16.3c2.6-21.6 44.8-21.4 48-1.1zm119.2 285.7l-15 185.1c-1.2 14 9.9 26 23.9 26h56c13.3 0 24-10.7 24-24V24c0-13.2-10.7-24-24-24-82.5 0-221.4 178.5-64.9 300.9z"]},Kt={prefix:"fab",iconName:"facebook-square",icon:[448,512,[],"f082","M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"]},Qt={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]};export{I as A,n as B,$t as C,T as D,s as E,g as F,t as G,Pt as H,Qt as I,Kt as J,M as K,i as L,F as M,a as N,d as O,h as P,u as Q,It as R,pt as S,j as T,Wt as U,Gt as V,Ft as W,Dt as X,Jt as Y,C as Z,k as a,V as b,S as c,y as d,x as e,v as f,A as g,L as h,ht as i,st as j,z as k,N as l,at as m,B as n,ft as o,ct as p,rt as q,et as r,c as s,w as t,lt as u,ut as v,ot as w,it as x,W as y,P as z};
