(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function vc(t,e){const n=Object.create(null),i=t.split(",");for(let r=0;r<i.length;r++)n[i[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const lg="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",cg=vc(lg);function th(t){return!!t||t===""}function da(t){if(De(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=ut(i)?dg(i):da(i);if(r)for(const s in r)e[s]=r[s]}return e}else{if(ut(t))return t;if(pt(t))return t}}const ug=/;(?![^(]*\))/g,fg=/:(.+)/;function dg(t){const e={};return t.split(ug).forEach(n=>{if(n){const i=n.split(fg);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function js(t){let e="";if(ut(t))e=t;else if(De(t))for(let n=0;n<t.length;n++){const i=js(t[n]);i&&(e+=i+" ")}else if(pt(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function hg(t){if(!t)return null;let{class:e,style:n}=t;return e&&!ut(e)&&(t.class=js(e)),n&&(t.style=da(n)),t}const Na=t=>ut(t)?t:t==null?"":De(t)||pt(t)&&(t.toString===sh||!Ne(t.toString))?JSON.stringify(t,nh,2):String(t),nh=(t,e)=>e&&e.__v_isRef?nh(t,e.value):Ur(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r])=>(n[`${i} =>`]=r,n),{})}:ih(e)?{[`Set(${e.size})`]:[...e.values()]}:pt(e)&&!De(e)&&!oh(e)?String(e):e,et={},kr=[],dn=()=>{},pg=()=>!1,mg=/^on[^a-z]/,ha=t=>mg.test(t),_c=t=>t.startsWith("onUpdate:"),yt=Object.assign,xc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},gg=Object.prototype.hasOwnProperty,Ge=(t,e)=>gg.call(t,e),De=Array.isArray,Ur=t=>pa(t)==="[object Map]",ih=t=>pa(t)==="[object Set]",Ne=t=>typeof t=="function",ut=t=>typeof t=="string",yc=t=>typeof t=="symbol",pt=t=>t!==null&&typeof t=="object",rh=t=>pt(t)&&Ne(t.then)&&Ne(t.catch),sh=Object.prototype.toString,pa=t=>sh.call(t),vg=t=>pa(t).slice(8,-1),oh=t=>pa(t)==="[object Object]",bc=t=>ut(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ho=vc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ma=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},_g=/-(\w)/g,rn=ma(t=>t.replace(_g,(e,n)=>n?n.toUpperCase():"")),xg=/\B([A-Z])/g,es=ma(t=>t.replace(xg,"-$1").toLowerCase()),Ys=ma(t=>t.charAt(0).toUpperCase()+t.slice(1)),Go=ma(t=>t?`on${Ys(t)}`:""),Ds=(t,e)=>!Object.is(t,e),Oa=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Yo=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},ah=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let du;const yg=()=>du||(du=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Zt;class lh{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&Zt&&(this.parent=Zt,this.index=(Zt.scopes||(Zt.scopes=[])).push(this)-1)}run(e){if(this.active){const n=Zt;try{return Zt=this,e()}finally{Zt=n}}}on(){Zt=this}off(){Zt=this.parent}stop(e){if(this.active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.active=!1}}}function Ks(t){return new lh(t)}function bg(t,e=Zt){e&&e.active&&e.effects.push(t)}function tr(t){Zt&&Zt.cleanups.push(t)}const Sc=t=>{const e=new Set(t);return e.w=0,e.n=0,e},ch=t=>(t.w&gi)>0,uh=t=>(t.n&gi)>0,Sg=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=gi},Mg=t=>{const{deps:e}=t;if(e.length){let n=0;for(let i=0;i<e.length;i++){const r=e[i];ch(r)&&!uh(r)?r.delete(t):e[n++]=r,r.w&=~gi,r.n&=~gi}e.length=n}},Pl=new WeakMap;let _s=0,gi=1;const Rl=30;let cn;const Gi=Symbol(""),Dl=Symbol("");class Mc{constructor(e,n=null,i){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,bg(this,i)}run(){if(!this.active)return this.fn();let e=cn,n=pi;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=cn,cn=this,pi=!0,gi=1<<++_s,_s<=Rl?Sg(this):hu(this),this.fn()}finally{_s<=Rl&&Mg(this),gi=1<<--_s,cn=this.parent,pi=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){cn===this?this.deferStop=!0:this.active&&(hu(this),this.onStop&&this.onStop(),this.active=!1)}}function hu(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let pi=!0;const fh=[];function nr(){fh.push(pi),pi=!1}function ir(){const t=fh.pop();pi=t===void 0?!0:t}function Gt(t,e,n){if(pi&&cn){let i=Pl.get(t);i||Pl.set(t,i=new Map);let r=i.get(n);r||i.set(n,r=Sc()),dh(r)}}function dh(t,e){let n=!1;_s<=Rl?uh(t)||(t.n|=gi,n=!ch(t)):n=!t.has(cn),n&&(t.add(cn),cn.deps.push(t))}function qn(t,e,n,i,r,s){const o=Pl.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&De(t))o.forEach((l,c)=>{(c==="length"||c>=i)&&a.push(l)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":De(t)?bc(n)&&a.push(o.get("length")):(a.push(o.get(Gi)),Ur(t)&&a.push(o.get(Dl)));break;case"delete":De(t)||(a.push(o.get(Gi)),Ur(t)&&a.push(o.get(Dl)));break;case"set":Ur(t)&&a.push(o.get(Gi));break}if(a.length===1)a[0]&&Il(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Il(Sc(l))}}function Il(t,e){const n=De(t)?t:[...t];for(const i of n)i.computed&&pu(i);for(const i of n)i.computed||pu(i)}function pu(t,e){(t!==cn||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const wg=vc("__proto__,__v_isRef,__isVue"),hh=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(yc)),Eg=wc(),Cg=wc(!1,!0),Tg=wc(!0),mu=Ag();function Ag(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const i=He(this);for(let s=0,o=this.length;s<o;s++)Gt(i,"get",s+"");const r=i[e](...n);return r===-1||r===!1?i[e](...n.map(He)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){nr();const i=He(this)[e].apply(this,n);return ir(),i}}),t}function wc(t=!1,e=!1){return function(i,r,s){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&s===(t?e?Wg:_h:e?vh:gh).get(i))return i;const o=De(i);if(!t&&o&&Ge(mu,r))return Reflect.get(mu,r,s);const a=Reflect.get(i,r,s);return(yc(r)?hh.has(r):wg(r))||(t||Gt(i,"get",r),e)?a:rt(a)?o&&bc(r)?a:a.value:pt(a)?t?Zs(a):Ct(a):a}}const Lg=ph(),Pg=ph(!0);function ph(t=!1){return function(n,i,r,s){let o=n[i];if(Is(o)&&rt(o)&&!rt(r))return!1;if(!t&&!Is(r)&&(Fl(r)||(r=He(r),o=He(o)),!De(n)&&rt(o)&&!rt(r)))return o.value=r,!0;const a=De(n)&&bc(i)?Number(i)<n.length:Ge(n,i),l=Reflect.set(n,i,r,s);return n===He(s)&&(a?Ds(r,o)&&qn(n,"set",i,r):qn(n,"add",i,r)),l}}function Rg(t,e){const n=Ge(t,e);t[e];const i=Reflect.deleteProperty(t,e);return i&&n&&qn(t,"delete",e,void 0),i}function Dg(t,e){const n=Reflect.has(t,e);return(!yc(e)||!hh.has(e))&&Gt(t,"has",e),n}function Ig(t){return Gt(t,"iterate",De(t)?"length":Gi),Reflect.ownKeys(t)}const mh={get:Eg,set:Lg,deleteProperty:Rg,has:Dg,ownKeys:Ig},Fg={get:Tg,set(t,e){return!0},deleteProperty(t,e){return!0}},Ng=yt({},mh,{get:Cg,set:Pg}),Ec=t=>t,ga=t=>Reflect.getPrototypeOf(t);function uo(t,e,n=!1,i=!1){t=t.__v_raw;const r=He(t),s=He(e);n||(e!==s&&Gt(r,"get",e),Gt(r,"get",s));const{has:o}=ga(r),a=i?Ec:n?Ac:Fs;if(o.call(r,e))return a(t.get(e));if(o.call(r,s))return a(t.get(s));t!==r&&t.get(e)}function fo(t,e=!1){const n=this.__v_raw,i=He(n),r=He(t);return e||(t!==r&&Gt(i,"has",t),Gt(i,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function ho(t,e=!1){return t=t.__v_raw,!e&&Gt(He(t),"iterate",Gi),Reflect.get(t,"size",t)}function gu(t){t=He(t);const e=He(this);return ga(e).has.call(e,t)||(e.add(t),qn(e,"add",t,t)),this}function vu(t,e){e=He(e);const n=He(this),{has:i,get:r}=ga(n);let s=i.call(n,t);s||(t=He(t),s=i.call(n,t));const o=r.call(n,t);return n.set(t,e),s?Ds(e,o)&&qn(n,"set",t,e):qn(n,"add",t,e),this}function _u(t){const e=He(this),{has:n,get:i}=ga(e);let r=n.call(e,t);r||(t=He(t),r=n.call(e,t)),i&&i.call(e,t);const s=e.delete(t);return r&&qn(e,"delete",t,void 0),s}function xu(){const t=He(this),e=t.size!==0,n=t.clear();return e&&qn(t,"clear",void 0,void 0),n}function po(t,e){return function(i,r){const s=this,o=s.__v_raw,a=He(o),l=e?Ec:t?Ac:Fs;return!t&&Gt(a,"iterate",Gi),o.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function mo(t,e,n){return function(...i){const r=this.__v_raw,s=He(r),o=Ur(s),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=r[t](...i),u=n?Ec:e?Ac:Fs;return!e&&Gt(s,"iterate",l?Dl:Gi),{next(){const{value:d,done:f}=c.next();return f?{value:d,done:f}:{value:a?[u(d[0]),u(d[1])]:u(d),done:f}},[Symbol.iterator](){return this}}}}function Qn(t){return function(...e){return t==="delete"?!1:this}}function Og(){const t={get(s){return uo(this,s)},get size(){return ho(this)},has:fo,add:gu,set:vu,delete:_u,clear:xu,forEach:po(!1,!1)},e={get(s){return uo(this,s,!1,!0)},get size(){return ho(this)},has:fo,add:gu,set:vu,delete:_u,clear:xu,forEach:po(!1,!0)},n={get(s){return uo(this,s,!0)},get size(){return ho(this,!0)},has(s){return fo.call(this,s,!0)},add:Qn("add"),set:Qn("set"),delete:Qn("delete"),clear:Qn("clear"),forEach:po(!0,!1)},i={get(s){return uo(this,s,!0,!0)},get size(){return ho(this,!0)},has(s){return fo.call(this,s,!0)},add:Qn("add"),set:Qn("set"),delete:Qn("delete"),clear:Qn("clear"),forEach:po(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=mo(s,!1,!1),n[s]=mo(s,!0,!1),e[s]=mo(s,!1,!0),i[s]=mo(s,!0,!0)}),[t,n,e,i]}const[Bg,zg,kg,Ug]=Og();function Cc(t,e){const n=e?t?Ug:kg:t?zg:Bg;return(i,r,s)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(Ge(n,r)&&r in i?n:i,r,s)}const Vg={get:Cc(!1,!1)},Hg={get:Cc(!1,!0)},Gg={get:Cc(!0,!1)},gh=new WeakMap,vh=new WeakMap,_h=new WeakMap,Wg=new WeakMap;function $g(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function qg(t){return t.__v_skip||!Object.isExtensible(t)?0:$g(vg(t))}function Ct(t){return Is(t)?t:Tc(t,!1,mh,Vg,gh)}function xh(t){return Tc(t,!1,Ng,Hg,vh)}function Zs(t){return Tc(t,!0,Fg,Gg,_h)}function Tc(t,e,n,i,r){if(!pt(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=r.get(t);if(s)return s;const o=qg(t);if(o===0)return t;const a=new Proxy(t,o===2?i:n);return r.set(t,a),a}function Vr(t){return Is(t)?Vr(t.__v_raw):!!(t&&t.__v_isReactive)}function Is(t){return!!(t&&t.__v_isReadonly)}function Fl(t){return!!(t&&t.__v_isShallow)}function yh(t){return Vr(t)||Is(t)}function He(t){const e=t&&t.__v_raw;return e?He(e):t}function bh(t){return Yo(t,"__v_skip",!0),t}const Fs=t=>pt(t)?Ct(t):t,Ac=t=>pt(t)?Zs(t):t;function Sh(t){pi&&cn&&(t=He(t),dh(t.dep||(t.dep=Sc())))}function Mh(t,e){t=He(t),t.dep&&Il(t.dep)}function rt(t){return!!(t&&t.__v_isRef===!0)}function Pe(t){return Eh(t,!1)}function wh(t){return Eh(t,!0)}function Eh(t,e){return rt(t)?t:new Xg(t,e)}class Xg{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:He(e),this._value=n?e:Fs(e)}get value(){return Sh(this),this._value}set value(e){e=this.__v_isShallow?e:He(e),Ds(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:Fs(e),Mh(this))}}function hn(t){return rt(t)?t.value:t}const jg={get:(t,e,n)=>hn(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return rt(r)&&!rt(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function Ch(t){return Vr(t)?t:new Proxy(t,jg)}function Th(t){const e=De(t)?new Array(t.length):{};for(const n in t)e[n]=Ve(t,n);return e}class Yg{constructor(e,n,i){this._object=e,this._key=n,this._defaultValue=i,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}}function Ve(t,e,n){const i=t[e];return rt(i)?i:new Yg(t,e,n)}class Kg{constructor(e,n,i,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Mc(e,()=>{this._dirty||(this._dirty=!0,Mh(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=He(this);return Sh(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Zg(t,e,n=!1){let i,r;const s=Ne(t);return s?(i=t,r=dn):(i=t.get,r=t.set),new Kg(i,r,s||!r,n)}const Ms=[];function Jg(t,...e){nr();const n=Ms.length?Ms[Ms.length-1].component:null,i=n&&n.appContext.config.warnHandler,r=Qg();if(i)Gn(i,n,11,[t+e.join(""),n&&n.proxy,r.map(({vnode:s})=>`at <${lp(n,s.type)}>`).join(`
`),r]);else{const s=[`[Vue warn]: ${t}`,...e];r.length&&s.push(`
`,...ev(r)),console.warn(...s)}ir()}function Qg(){let t=Ms[Ms.length-1];if(!t)return[];const e=[];for(;t;){const n=e[0];n&&n.vnode===t?n.recurseCount++:e.push({vnode:t,recurseCount:0});const i=t.component&&t.component.parent;t=i&&i.vnode}return e}function ev(t){const e=[];return t.forEach((n,i)=>{e.push(...i===0?[]:[`
`],...tv(n))}),e}function tv({vnode:t,recurseCount:e}){const n=e>0?`... (${e} recursive calls)`:"",i=t.component?t.component.parent==null:!1,r=` at <${lp(t.component,t.type,i)}`,s=">"+n;return t.props?[r,...nv(t.props),s]:[r+s]}function nv(t){const e=[],n=Object.keys(t);return n.slice(0,3).forEach(i=>{e.push(...Ah(i,t[i]))}),n.length>3&&e.push(" ..."),e}function Ah(t,e,n){return ut(e)?(e=JSON.stringify(e),n?e:[`${t}=${e}`]):typeof e=="number"||typeof e=="boolean"||e==null?n?e:[`${t}=${e}`]:rt(e)?(e=Ah(t,He(e.value),!0),n?e:[`${t}=Ref<`,e,">"]):Ne(e)?[`${t}=fn${e.name?`<${e.name}>`:""}`]:(e=He(e),n?e:[`${t}=`,e])}function Gn(t,e,n,i){let r;try{r=i?t(...i):t()}catch(s){va(s,e,n)}return r}function nn(t,e,n,i){if(Ne(t)){const s=Gn(t,e,n,i);return s&&rh(s)&&s.catch(o=>{va(o,e,n)}),s}const r=[];for(let s=0;s<t.length;s++)r.push(nn(t[s],e,n,i));return r}function va(t,e,n,i=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=n;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){Gn(l,null,10,[t,o,a]);return}}iv(t,n,r,i)}function iv(t,e,n,i=!0){console.error(t)}let Ko=!1,Nl=!1;const Vt=[];let kn=0;const ws=[];let xs=null,Fr=0;const Es=[];let ui=null,Nr=0;const Lh=Promise.resolve();let Lc=null,Ol=null;function xn(t){const e=Lc||Lh;return t?e.then(this?t.bind(this):t):e}function rv(t){let e=kn+1,n=Vt.length;for(;e<n;){const i=e+n>>>1;Ns(Vt[i])<t?e=i+1:n=i}return e}function Ph(t){(!Vt.length||!Vt.includes(t,Ko&&t.allowRecurse?kn+1:kn))&&t!==Ol&&(t.id==null?Vt.push(t):Vt.splice(rv(t.id),0,t),Rh())}function Rh(){!Ko&&!Nl&&(Nl=!0,Lc=Lh.then(Fh))}function sv(t){const e=Vt.indexOf(t);e>kn&&Vt.splice(e,1)}function Dh(t,e,n,i){De(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?i+1:i))&&n.push(t),Rh()}function ov(t){Dh(t,xs,ws,Fr)}function av(t){Dh(t,ui,Es,Nr)}function _a(t,e=null){if(ws.length){for(Ol=e,xs=[...new Set(ws)],ws.length=0,Fr=0;Fr<xs.length;Fr++)xs[Fr]();xs=null,Fr=0,Ol=null,_a(t,e)}}function Ih(t){if(_a(),Es.length){const e=[...new Set(Es)];if(Es.length=0,ui){ui.push(...e);return}for(ui=e,ui.sort((n,i)=>Ns(n)-Ns(i)),Nr=0;Nr<ui.length;Nr++)ui[Nr]();ui=null,Nr=0}}const Ns=t=>t.id==null?1/0:t.id;function Fh(t){Nl=!1,Ko=!0,_a(t),Vt.sort((n,i)=>Ns(n)-Ns(i));const e=dn;try{for(kn=0;kn<Vt.length;kn++){const n=Vt[kn];n&&n.active!==!1&&Gn(n,null,14)}}finally{kn=0,Vt.length=0,Ih(),Ko=!1,Lc=null,(Vt.length||ws.length||Es.length)&&Fh(t)}}function lv(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||et;let r=n;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:f}=i[u]||et;f&&(r=n.map(h=>h.trim())),d&&(r=n.map(ah))}let a,l=i[a=Go(e)]||i[a=Go(rn(e))];!l&&s&&(l=i[a=Go(es(e))]),l&&nn(l,t,6,r);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,nn(c,t,6,r)}}function Nh(t,e,n=!1){const i=e.emitsCache,r=i.get(t);if(r!==void 0)return r;const s=t.emits;let o={},a=!1;if(!Ne(t)){const l=c=>{const u=Nh(c,e,!0);u&&(a=!0,yt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!a?(i.set(t,null),null):(De(s)?s.forEach(l=>o[l]=null):yt(o,s),i.set(t,o),o)}function xa(t,e){return!t||!ha(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ge(t,e[0].toLowerCase()+e.slice(1))||Ge(t,es(e))||Ge(t,e))}let en=null,Oh=null;function Zo(t){const e=en;return en=t,Oh=t&&t.type.__scopeId||null,e}function Pt(t,e=en,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&Du(-1);const s=Zo(e),o=t(...r);return Zo(s),i._d&&Du(1),o};return i._n=!0,i._c=!0,i._d=!0,i}function Ba(t){const{type:e,vnode:n,proxy:i,withProxy:r,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:d,data:f,setupState:h,ctx:g,inheritAttrs:m}=t;let p,v;const x=Zo(t);try{if(n.shapeFlag&4){const y=r||i;p=Mn(u.call(y,y,d,s,h,f,g)),v=l}else{const y=e;p=Mn(y.length>1?y(s,{attrs:l,slots:a,emit:c}):y(s,null)),v=e.props?l:cv(l)}}catch(y){Ts.length=0,va(y,t,1),p=k(pn)}let w=p;if(v&&m!==!1){const y=Object.keys(v),{shapeFlag:M}=w;y.length&&M&7&&(o&&y.some(_c)&&(v=uv(v,o)),w=vi(w,v))}return n.dirs&&(w=vi(w),w.dirs=w.dirs?w.dirs.concat(n.dirs):n.dirs),n.transition&&(w.transition=n.transition),p=w,Zo(x),p}const cv=t=>{let e;for(const n in t)(n==="class"||n==="style"||ha(n))&&((e||(e={}))[n]=t[n]);return e},uv=(t,e)=>{const n={};for(const i in t)(!_c(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function fv(t,e,n){const{props:i,children:r,component:s}=t,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?yu(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const f=u[d];if(o[f]!==i[f]&&!xa(c,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?yu(i,o,c):!0:!!o;return!1}function yu(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==t[s]&&!xa(n,s))return!0}return!1}function dv({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const hv=t=>t.__isSuspense;function pv(t,e){e&&e.pendingBranch?De(t)?e.effects.push(...t):e.effects.push(t):av(t)}function Tt(t,e){if(_t){let n=_t.provides;const i=_t.parent&&_t.parent.provides;i===n&&(n=_t.provides=Object.create(i)),n[t]=e}}function it(t,e,n=!1){const i=_t||en;if(i){const r=i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&Ne(e)?e.call(i.proxy):e}}function _i(t,e){return Pc(t,null,e)}const bu={};function Ke(t,e,n){return Pc(t,e,n)}function Pc(t,e,{immediate:n,deep:i,flush:r,onTrack:s,onTrigger:o}=et){const a=_t;let l,c=!1,u=!1;if(rt(t)?(l=()=>t.value,c=Fl(t)):Vr(t)?(l=()=>t,i=!0):De(t)?(u=!0,c=t.some(v=>Vr(v)||Fl(v)),l=()=>t.map(v=>{if(rt(v))return v.value;if(Vr(v))return ki(v);if(Ne(v))return Gn(v,a,2)})):Ne(t)?e?l=()=>Gn(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return d&&d(),nn(t,a,3,[f])}:l=dn,e&&i){const v=l;l=()=>ki(v())}let d,f=v=>{d=p.onStop=()=>{Gn(v,a,4)}};if(ks)return f=dn,e?n&&nn(e,a,3,[l(),u?[]:void 0,f]):l(),dn;let h=u?[]:bu;const g=()=>{if(!!p.active)if(e){const v=p.run();(i||c||(u?v.some((x,w)=>Ds(x,h[w])):Ds(v,h)))&&(d&&d(),nn(e,a,3,[v,h===bu?void 0:h,f]),h=v)}else p.run()};g.allowRecurse=!!e;let m;r==="sync"?m=g:r==="post"?m=()=>Ft(g,a&&a.suspense):m=()=>ov(g);const p=new Mc(l,m);return e?n?g():h=p.run():r==="post"?Ft(p.run.bind(p),a&&a.suspense):p.run(),()=>{p.stop(),a&&a.scope&&xc(a.scope.effects,p)}}function mv(t,e,n){const i=this.proxy,r=ut(t)?t.includes(".")?Bh(i,t):()=>i[t]:t.bind(i,i);let s;Ne(e)?s=e:(s=e.handler,n=e);const o=_t;qr(this);const a=Pc(r,s.bind(i),n);return o?qr(o):$i(),a}function Bh(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}function ki(t,e){if(!pt(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),rt(t))ki(t.value,e);else if(De(t))for(let n=0;n<t.length;n++)ki(t[n],e);else if(ih(t)||Ur(t))t.forEach(n=>{ki(n,e)});else if(oh(t))for(const n in t)ki(t[n],e);return t}function zh(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return sr(()=>{t.isMounted=!0}),yn(()=>{t.isUnmounting=!0}),t}const Yt=[Function,Array],gv={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Yt,onEnter:Yt,onAfterEnter:Yt,onEnterCancelled:Yt,onBeforeLeave:Yt,onLeave:Yt,onAfterLeave:Yt,onLeaveCancelled:Yt,onBeforeAppear:Yt,onAppear:Yt,onAfterAppear:Yt,onAppearCancelled:Yt},setup(t,{slots:e}){const n=Ma(),i=zh();let r;return()=>{const s=e.default&&Rc(e.default(),!0);if(!s||!s.length)return;let o=s[0];if(s.length>1){for(const m of s)if(m.type!==pn){o=m;break}}const a=He(t),{mode:l}=a;if(i.isLeaving)return za(o);const c=Su(o);if(!c)return za(o);const u=Os(c,a,i,n);Bs(c,u);const d=n.subTree,f=d&&Su(d);let h=!1;const{getTransitionKey:g}=c.type;if(g){const m=g();r===void 0?r=m:m!==r&&(r=m,h=!0)}if(f&&f.type!==pn&&(!Ni(c,f)||h)){const m=Os(f,a,i,n);if(Bs(f,m),l==="out-in")return i.isLeaving=!0,m.afterLeave=()=>{i.isLeaving=!1,n.update()},za(o);l==="in-out"&&c.type!==pn&&(m.delayLeave=(p,v,x)=>{const w=Uh(i,f);w[String(f.key)]=f,p._leaveCb=()=>{v(),p._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=x})}return o}}},kh=gv;function Uh(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function Os(t,e,n,i){const{appear:r,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:d,onLeave:f,onAfterLeave:h,onLeaveCancelled:g,onBeforeAppear:m,onAppear:p,onAfterAppear:v,onAppearCancelled:x}=e,w=String(t.key),y=Uh(n,t),M=(_,C)=>{_&&nn(_,i,9,C)},T=(_,C)=>{const P=C[1];M(_,C),De(_)?_.every(D=>D.length<=1)&&P():_.length<=1&&P()},L={mode:s,persisted:o,beforeEnter(_){let C=a;if(!n.isMounted)if(r)C=m||a;else return;_._leaveCb&&_._leaveCb(!0);const P=y[w];P&&Ni(t,P)&&P.el._leaveCb&&P.el._leaveCb(),M(C,[_])},enter(_){let C=l,P=c,D=u;if(!n.isMounted)if(r)C=p||l,P=v||c,D=x||u;else return;let F=!1;const W=_._enterCb=N=>{F||(F=!0,N?M(D,[_]):M(P,[_]),L.delayedLeave&&L.delayedLeave(),_._enterCb=void 0)};C?T(C,[_,W]):W()},leave(_,C){const P=String(t.key);if(_._enterCb&&_._enterCb(!0),n.isUnmounting)return C();M(d,[_]);let D=!1;const F=_._leaveCb=W=>{D||(D=!0,C(),W?M(g,[_]):M(h,[_]),_._leaveCb=void 0,y[P]===t&&delete y[P])};y[P]=t,f?T(f,[_,F]):F()},clone(_){return Os(_,e,n,i)}};return L}function za(t){if(ya(t))return t=vi(t),t.children=null,t}function Su(t){return ya(t)?t.children?t.children[0]:void 0:t}function Bs(t,e){t.shapeFlag&6&&t.component?Bs(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Rc(t,e=!1,n){let i=[],r=0;for(let s=0;s<t.length;s++){let o=t[s];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:s);o.type===Et?(o.patchFlag&128&&r++,i=i.concat(Rc(o.children,e,a))):(e||o.type!==pn)&&i.push(a!=null?vi(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function rr(t){return Ne(t)?{setup:t,name:t.name}:t}const Wo=t=>!!t.type.__asyncLoader,ya=t=>t.type.__isKeepAlive;function Vh(t,e){Gh(t,"a",e)}function Hh(t,e){Gh(t,"da",e)}function Gh(t,e,n=_t){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(ba(e,i,n),n){let r=n.parent;for(;r&&r.parent;)ya(r.parent.vnode)&&vv(i,e,n,r),r=r.parent}}function vv(t,e,n,i){const r=ba(e,t,i,!0);$h(()=>{xc(i[e],r)},n)}function ba(t,e,n=_t,i=!1){if(n){const r=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;nr(),qr(n);const a=nn(e,n,t,o);return $i(),ir(),a});return i?r.unshift(s):r.push(s),s}}const jn=t=>(e,n=_t)=>(!ks||t==="sp")&&ba(t,e,n),Dc=jn("bm"),sr=jn("m"),_v=jn("bu"),Wh=jn("u"),yn=jn("bum"),$h=jn("um"),xv=jn("sp"),yv=jn("rtg"),bv=jn("rtc");function Sv(t,e=_t){ba("ec",t,e)}function Yi(t,e){const n=en;if(n===null)return t;const i=wa(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[o,a,l,c=et]=e[s];Ne(o)&&(o={mounted:o,updated:o}),o.deep&&ki(a),r.push({dir:o,instance:i,value:a,oldValue:void 0,arg:l,modifiers:c})}return t}function Ei(t,e,n,i){const r=t.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(nr(),nn(l,n,8,[t.el,a,t,e]),ir())}}const Ic="components",Mv="directives";function Fc(t,e){return Nc(Ic,t,!0,e)||t}const qh=Symbol();function wv(t){return ut(t)?Nc(Ic,t,!1)||t:t||qh}function Js(t){return Nc(Mv,t)}function Nc(t,e,n=!0,i=!1){const r=en||_t;if(r){const s=r.type;if(t===Ic){const a=ap(s,!1);if(a&&(a===e||a===rn(e)||a===Ys(rn(e))))return s}const o=Mu(r[t]||s[t],e)||Mu(r.appContext[t],e);return!o&&i?s:o}}function Mu(t,e){return t&&(t[e]||t[rn(e)]||t[Ys(rn(e))])}function Ev(t,e,n,i){let r;const s=n&&n[i];if(De(t)||ut(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,s&&s[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,s&&s[o])}else if(pt(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];r[a]=e(t[c],c,a,s&&s[a])}}else r=[];return n&&(n[i]=r),r}function wu(t){const e={};for(const n in t)e[Go(n)]=t[n];return e}const Bl=t=>t?sp(t)?wa(t)||t.proxy:Bl(t.parent):null,Jo=yt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Bl(t.parent),$root:t=>Bl(t.root),$emit:t=>t.emit,$options:t=>jh(t),$forceUpdate:t=>t.f||(t.f=()=>Ph(t.update)),$nextTick:t=>t.n||(t.n=xn.bind(t.proxy)),$watch:t=>mv.bind(t)}),Cv={get({_:t},e){const{ctx:n,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const h=o[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return s[e]}else{if(i!==et&&Ge(i,e))return o[e]=1,i[e];if(r!==et&&Ge(r,e))return o[e]=2,r[e];if((c=t.propsOptions[0])&&Ge(c,e))return o[e]=3,s[e];if(n!==et&&Ge(n,e))return o[e]=4,n[e];zl&&(o[e]=0)}}const u=Jo[e];let d,f;if(u)return e==="$attrs"&&Gt(t,"get",e),u(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==et&&Ge(n,e))return o[e]=4,n[e];if(f=l.config.globalProperties,Ge(f,e))return f[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:s}=t;return r!==et&&Ge(r,e)?(r[e]=n,!0):i!==et&&Ge(i,e)?(i[e]=n,!0):Ge(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!n[o]||t!==et&&Ge(t,o)||e!==et&&Ge(e,o)||(a=s[0])&&Ge(a,o)||Ge(i,o)||Ge(Jo,o)||Ge(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ge(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let zl=!0;function Tv(t){const e=jh(t),n=t.proxy,i=t.ctx;zl=!1,e.beforeCreate&&Eu(e.beforeCreate,t,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:f,beforeUpdate:h,updated:g,activated:m,deactivated:p,beforeDestroy:v,beforeUnmount:x,destroyed:w,unmounted:y,render:M,renderTracked:T,renderTriggered:L,errorCaptured:_,serverPrefetch:C,expose:P,inheritAttrs:D,components:F,directives:W,filters:N}=e;if(c&&Av(c,i,null,t.appContext.config.unwrapInjectedRef),o)for(const V in o){const $=o[V];Ne($)&&(i[V]=$.bind(n))}if(r){const V=r.call(n,n);pt(V)&&(t.data=Ct(V))}if(zl=!0,s)for(const V in s){const $=s[V],H=Ne($)?$.bind(n,n):Ne($.get)?$.get.bind(n,n):dn,J=!Ne($)&&Ne($.set)?$.set.bind(n):dn,de=Y({get:H,set:J});Object.defineProperty(i,V,{enumerable:!0,configurable:!0,get:()=>de.value,set:se=>de.value=se})}if(a)for(const V in a)Xh(a[V],i,n,V);if(l){const V=Ne(l)?l.call(n):l;Reflect.ownKeys(V).forEach($=>{Tt($,V[$])})}u&&Eu(u,t,"c");function I(V,$){De($)?$.forEach(H=>V(H.bind(n))):$&&V($.bind(n))}if(I(Dc,d),I(sr,f),I(_v,h),I(Wh,g),I(Vh,m),I(Hh,p),I(Sv,_),I(bv,T),I(yv,L),I(yn,x),I($h,y),I(xv,C),De(P))if(P.length){const V=t.exposed||(t.exposed={});P.forEach($=>{Object.defineProperty(V,$,{get:()=>n[$],set:H=>n[$]=H})})}else t.exposed||(t.exposed={});M&&t.render===dn&&(t.render=M),D!=null&&(t.inheritAttrs=D),F&&(t.components=F),W&&(t.directives=W)}function Av(t,e,n=dn,i=!1){De(t)&&(t=kl(t));for(const r in t){const s=t[r];let o;pt(s)?"default"in s?o=it(s.from||r,s.default,!0):o=it(s.from||r):o=it(s),rt(o)&&i?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function Eu(t,e,n){nn(De(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function Xh(t,e,n,i){const r=i.includes(".")?Bh(n,i):()=>n[i];if(ut(t)){const s=e[t];Ne(s)&&Ke(r,s)}else if(Ne(t))Ke(r,t.bind(n));else if(pt(t))if(De(t))t.forEach(s=>Xh(s,e,n,i));else{const s=Ne(t.handler)?t.handler.bind(n):e[t.handler];Ne(s)&&Ke(r,s,t)}}function jh(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!n&&!i?l=e:(l={},r.length&&r.forEach(c=>Qo(l,c,o,!0)),Qo(l,e,o)),s.set(e,l),l}function Qo(t,e,n,i=!1){const{mixins:r,extends:s}=e;s&&Qo(t,s,n,!0),r&&r.forEach(o=>Qo(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=Lv[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Lv={data:Cu,props:Di,emits:Di,methods:Di,computed:Di,beforeCreate:Lt,created:Lt,beforeMount:Lt,mounted:Lt,beforeUpdate:Lt,updated:Lt,beforeDestroy:Lt,beforeUnmount:Lt,destroyed:Lt,unmounted:Lt,activated:Lt,deactivated:Lt,errorCaptured:Lt,serverPrefetch:Lt,components:Di,directives:Di,watch:Rv,provide:Cu,inject:Pv};function Cu(t,e){return e?t?function(){return yt(Ne(t)?t.call(this,this):t,Ne(e)?e.call(this,this):e)}:e:t}function Pv(t,e){return Di(kl(t),kl(e))}function kl(t){if(De(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Lt(t,e){return t?[...new Set([].concat(t,e))]:e}function Di(t,e){return t?yt(yt(Object.create(null),t),e):e}function Rv(t,e){if(!t)return e;if(!e)return t;const n=yt(Object.create(null),t);for(const i in e)n[i]=Lt(t[i],e[i]);return n}function Dv(t,e,n,i=!1){const r={},s={};Yo(s,Sa,1),t.propsDefaults=Object.create(null),Yh(t,e,r,s);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=i?r:xh(r):t.type.props?t.props=r:t.props=s,t.attrs=s}function Iv(t,e,n,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=t,a=He(r),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let f=u[d];if(xa(t.emitsOptions,f))continue;const h=e[f];if(l)if(Ge(s,f))h!==s[f]&&(s[f]=h,c=!0);else{const g=rn(f);r[g]=Ul(l,a,g,h,t,!1)}else h!==s[f]&&(s[f]=h,c=!0)}}}else{Yh(t,e,r,s)&&(c=!0);let u;for(const d in a)(!e||!Ge(e,d)&&((u=es(d))===d||!Ge(e,u)))&&(l?n&&(n[d]!==void 0||n[u]!==void 0)&&(r[d]=Ul(l,a,d,void 0,t,!0)):delete r[d]);if(s!==a)for(const d in s)(!e||!Ge(e,d)&&!0)&&(delete s[d],c=!0)}c&&qn(t,"set","$attrs")}function Yh(t,e,n,i){const[r,s]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Ho(l))continue;const c=e[l];let u;r&&Ge(r,u=rn(l))?!s||!s.includes(u)?n[u]=c:(a||(a={}))[u]=c:xa(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=He(n),c=a||et;for(let u=0;u<s.length;u++){const d=s[u];n[d]=Ul(r,l,d,c[d],t,!Ge(c,d))}}return o}function Ul(t,e,n,i,r,s){const o=t[n];if(o!=null){const a=Ge(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&Ne(l)){const{propsDefaults:c}=r;n in c?i=c[n]:(qr(r),i=c[n]=l.call(null,e),$i())}else i=l}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===es(n))&&(i=!0))}return i}function Kh(t,e,n=!1){const i=e.propsCache,r=i.get(t);if(r)return r;const s=t.props,o={},a=[];let l=!1;if(!Ne(t)){const u=d=>{l=!0;const[f,h]=Kh(d,e,!0);yt(o,f),h&&a.push(...h)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!l)return i.set(t,kr),kr;if(De(s))for(let u=0;u<s.length;u++){const d=rn(s[u]);Tu(d)&&(o[d]=et)}else if(s)for(const u in s){const d=rn(u);if(Tu(d)){const f=s[u],h=o[d]=De(f)||Ne(f)?{type:f}:f;if(h){const g=Pu(Boolean,h.type),m=Pu(String,h.type);h[0]=g>-1,h[1]=m<0||g<m,(g>-1||Ge(h,"default"))&&a.push(d)}}}const c=[o,a];return i.set(t,c),c}function Tu(t){return t[0]!=="$"}function Au(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Lu(t,e){return Au(t)===Au(e)}function Pu(t,e){return De(e)?e.findIndex(n=>Lu(n,t)):Ne(e)&&Lu(e,t)?0:-1}const Zh=t=>t[0]==="_"||t==="$stable",Oc=t=>De(t)?t.map(Mn):[Mn(t)],Fv=(t,e,n)=>{if(e._n)return e;const i=Pt((...r)=>Oc(e(...r)),n);return i._c=!1,i},Jh=(t,e,n)=>{const i=t._ctx;for(const r in t){if(Zh(r))continue;const s=t[r];if(Ne(s))e[r]=Fv(r,s,i);else if(s!=null){const o=Oc(s);e[r]=()=>o}}},Qh=(t,e)=>{const n=Oc(e);t.slots.default=()=>n},Nv=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=He(e),Yo(e,"_",n)):Jh(e,t.slots={})}else t.slots={},e&&Qh(t,e);Yo(t.slots,Sa,1)},Ov=(t,e,n)=>{const{vnode:i,slots:r}=t;let s=!0,o=et;if(i.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:(yt(r,e),!n&&a===1&&delete r._):(s=!e.$stable,Jh(e,r)),o=e}else e&&(Qh(t,e),o={default:1});if(s)for(const a in r)!Zh(a)&&!(a in o)&&delete r[a]};function ep(){return{app:null,config:{isNativeTag:pg,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Bv=0;function zv(t,e){return function(i,r=null){Ne(i)||(i=Object.assign({},i)),r!=null&&!pt(r)&&(r=null);const s=ep(),o=new Set;let a=!1;const l=s.app={_uid:Bv++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:s_,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&Ne(c.install)?(o.add(c),c.install(l,...u)):Ne(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,d){if(!a){const f=k(i,r);return f.appContext=s,u&&e?e(f,c):t(f,c,d),a=!0,l._container=c,c.__vue_app__=l,wa(f.component)||f.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l}};return l}}function Vl(t,e,n,i,r=!1){if(De(t)){t.forEach((f,h)=>Vl(f,e&&(De(e)?e[h]:e),n,i,r));return}if(Wo(i)&&!r)return;const s=i.shapeFlag&4?wa(i.component)||i.component.proxy:i.el,o=r?null:s,{i:a,r:l}=t,c=e&&e.r,u=a.refs===et?a.refs={}:a.refs,d=a.setupState;if(c!=null&&c!==l&&(ut(c)?(u[c]=null,Ge(d,c)&&(d[c]=null)):rt(c)&&(c.value=null)),Ne(l))Gn(l,a,12,[o,u]);else{const f=ut(l),h=rt(l);if(f||h){const g=()=>{if(t.f){const m=f?u[l]:l.value;r?De(m)&&xc(m,s):De(m)?m.includes(s)||m.push(s):f?(u[l]=[s],Ge(d,l)&&(d[l]=u[l])):(l.value=[s],t.k&&(u[t.k]=l.value))}else f?(u[l]=o,Ge(d,l)&&(d[l]=o)):h&&(l.value=o,t.k&&(u[t.k]=o))};o?(g.id=-1,Ft(g,n)):g()}}}const Ft=pv;function kv(t){return Uv(t)}function Uv(t,e){const n=yg();n.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:f,setScopeId:h=dn,cloneNode:g,insertStaticContent:m}=t,p=(E,R,q,ie=null,re=null,ue=null,fe=!1,he=null,me=!!R.dynamicChildren)=>{if(E===R)return;E&&!Ni(E,R)&&(ie=ce(E),pe(E,re,ue,!0),E=null),R.patchFlag===-2&&(me=!1,R.dynamicChildren=null);const{type:S,ref:b,shapeFlag:B}=R;switch(S){case zc:v(E,R,q,ie);break;case pn:x(E,R,q,ie);break;case ka:E==null&&w(R,q,ie,fe);break;case Et:W(E,R,q,ie,re,ue,fe,he,me);break;default:B&1?T(E,R,q,ie,re,ue,fe,he,me):B&6?N(E,R,q,ie,re,ue,fe,he,me):(B&64||B&128)&&S.process(E,R,q,ie,re,ue,fe,he,me,ge)}b!=null&&re&&Vl(b,E&&E.ref,ue,R||E,!R)},v=(E,R,q,ie)=>{if(E==null)i(R.el=a(R.children),q,ie);else{const re=R.el=E.el;R.children!==E.children&&c(re,R.children)}},x=(E,R,q,ie)=>{E==null?i(R.el=l(R.children||""),q,ie):R.el=E.el},w=(E,R,q,ie)=>{[E.el,E.anchor]=m(E.children,R,q,ie,E.el,E.anchor)},y=({el:E,anchor:R},q,ie)=>{let re;for(;E&&E!==R;)re=f(E),i(E,q,ie),E=re;i(R,q,ie)},M=({el:E,anchor:R})=>{let q;for(;E&&E!==R;)q=f(E),r(E),E=q;r(R)},T=(E,R,q,ie,re,ue,fe,he,me)=>{fe=fe||R.type==="svg",E==null?L(R,q,ie,re,ue,fe,he,me):P(E,R,re,ue,fe,he,me)},L=(E,R,q,ie,re,ue,fe,he)=>{let me,S;const{type:b,props:B,shapeFlag:K,transition:te,patchFlag:le,dirs:Se}=E;if(E.el&&g!==void 0&&le===-1)me=E.el=g(E.el);else{if(me=E.el=o(E.type,ue,B&&B.is,B),K&8?u(me,E.children):K&16&&C(E.children,me,null,ie,re,ue&&b!=="foreignObject",fe,he),Se&&Ei(E,null,ie,"created"),B){for(const _e in B)_e!=="value"&&!Ho(_e)&&s(me,_e,null,B[_e],ue,E.children,ie,re,oe);"value"in B&&s(me,"value",null,B.value),(S=B.onVnodeBeforeMount)&&Sn(S,ie,E)}_(me,E,E.scopeId,fe,ie)}Se&&Ei(E,null,ie,"beforeMount");const G=(!re||re&&!re.pendingBranch)&&te&&!te.persisted;G&&te.beforeEnter(me),i(me,R,q),((S=B&&B.onVnodeMounted)||G||Se)&&Ft(()=>{S&&Sn(S,ie,E),G&&te.enter(me),Se&&Ei(E,null,ie,"mounted")},re)},_=(E,R,q,ie,re)=>{if(q&&h(E,q),ie)for(let ue=0;ue<ie.length;ue++)h(E,ie[ue]);if(re){let ue=re.subTree;if(R===ue){const fe=re.vnode;_(E,fe,fe.scopeId,fe.slotScopeIds,re.parent)}}},C=(E,R,q,ie,re,ue,fe,he,me=0)=>{for(let S=me;S<E.length;S++){const b=E[S]=he?di(E[S]):Mn(E[S]);p(null,b,R,q,ie,re,ue,fe,he)}},P=(E,R,q,ie,re,ue,fe)=>{const he=R.el=E.el;let{patchFlag:me,dynamicChildren:S,dirs:b}=R;me|=E.patchFlag&16;const B=E.props||et,K=R.props||et;let te;q&&Ci(q,!1),(te=K.onVnodeBeforeUpdate)&&Sn(te,q,R,E),b&&Ei(R,E,q,"beforeUpdate"),q&&Ci(q,!0);const le=re&&R.type!=="foreignObject";if(S?D(E.dynamicChildren,S,he,q,ie,le,ue):fe||H(E,R,he,null,q,ie,le,ue,!1),me>0){if(me&16)F(he,R,B,K,q,ie,re);else if(me&2&&B.class!==K.class&&s(he,"class",null,K.class,re),me&4&&s(he,"style",B.style,K.style,re),me&8){const Se=R.dynamicProps;for(let G=0;G<Se.length;G++){const _e=Se[G],ye=B[_e],Le=K[_e];(Le!==ye||_e==="value")&&s(he,_e,ye,Le,re,E.children,q,ie,oe)}}me&1&&E.children!==R.children&&u(he,R.children)}else!fe&&S==null&&F(he,R,B,K,q,ie,re);((te=K.onVnodeUpdated)||b)&&Ft(()=>{te&&Sn(te,q,R,E),b&&Ei(R,E,q,"updated")},ie)},D=(E,R,q,ie,re,ue,fe)=>{for(let he=0;he<R.length;he++){const me=E[he],S=R[he],b=me.el&&(me.type===Et||!Ni(me,S)||me.shapeFlag&70)?d(me.el):q;p(me,S,b,null,ie,re,ue,fe,!0)}},F=(E,R,q,ie,re,ue,fe)=>{if(q!==ie){for(const he in ie){if(Ho(he))continue;const me=ie[he],S=q[he];me!==S&&he!=="value"&&s(E,he,S,me,fe,R.children,re,ue,oe)}if(q!==et)for(const he in q)!Ho(he)&&!(he in ie)&&s(E,he,q[he],null,fe,R.children,re,ue,oe);"value"in ie&&s(E,"value",q.value,ie.value)}},W=(E,R,q,ie,re,ue,fe,he,me)=>{const S=R.el=E?E.el:a(""),b=R.anchor=E?E.anchor:a("");let{patchFlag:B,dynamicChildren:K,slotScopeIds:te}=R;te&&(he=he?he.concat(te):te),E==null?(i(S,q,ie),i(b,q,ie),C(R.children,q,b,re,ue,fe,he,me)):B>0&&B&64&&K&&E.dynamicChildren?(D(E.dynamicChildren,K,q,re,ue,fe,he),(R.key!=null||re&&R===re.subTree)&&Bc(E,R,!0)):H(E,R,q,b,re,ue,fe,he,me)},N=(E,R,q,ie,re,ue,fe,he,me)=>{R.slotScopeIds=he,E==null?R.shapeFlag&512?re.ctx.activate(R,q,ie,fe,me):Q(R,q,ie,re,ue,fe,me):I(E,R,me)},Q=(E,R,q,ie,re,ue,fe)=>{const he=E.component=Zv(E,ie,re);if(ya(E)&&(he.ctx.renderer=ge),Jv(he),he.asyncDep){if(re&&re.registerDep(he,V),!E.el){const me=he.subTree=k(pn);x(null,me,R,q)}return}V(he,E,R,q,re,ue,fe)},I=(E,R,q)=>{const ie=R.component=E.component;if(fv(E,R,q))if(ie.asyncDep&&!ie.asyncResolved){$(ie,R,q);return}else ie.next=R,sv(ie.update),ie.update();else R.el=E.el,ie.vnode=R},V=(E,R,q,ie,re,ue,fe)=>{const he=()=>{if(E.isMounted){let{next:b,bu:B,u:K,parent:te,vnode:le}=E,Se=b,G;Ci(E,!1),b?(b.el=le.el,$(E,b,fe)):b=le,B&&Oa(B),(G=b.props&&b.props.onVnodeBeforeUpdate)&&Sn(G,te,b,le),Ci(E,!0);const _e=Ba(E),ye=E.subTree;E.subTree=_e,p(ye,_e,d(ye.el),ce(ye),E,re,ue),b.el=_e.el,Se===null&&dv(E,_e.el),K&&Ft(K,re),(G=b.props&&b.props.onVnodeUpdated)&&Ft(()=>Sn(G,te,b,le),re)}else{let b;const{el:B,props:K}=R,{bm:te,m:le,parent:Se}=E,G=Wo(R);if(Ci(E,!1),te&&Oa(te),!G&&(b=K&&K.onVnodeBeforeMount)&&Sn(b,Se,R),Ci(E,!0),B&&ve){const _e=()=>{E.subTree=Ba(E),ve(B,E.subTree,E,re,null)};G?R.type.__asyncLoader().then(()=>!E.isUnmounted&&_e()):_e()}else{const _e=E.subTree=Ba(E);p(null,_e,q,ie,E,re,ue),R.el=_e.el}if(le&&Ft(le,re),!G&&(b=K&&K.onVnodeMounted)){const _e=R;Ft(()=>Sn(b,Se,_e),re)}(R.shapeFlag&256||Se&&Wo(Se.vnode)&&Se.vnode.shapeFlag&256)&&E.a&&Ft(E.a,re),E.isMounted=!0,R=q=ie=null}},me=E.effect=new Mc(he,()=>Ph(S),E.scope),S=E.update=()=>me.run();S.id=E.uid,Ci(E,!0),S()},$=(E,R,q)=>{R.component=E;const ie=E.vnode.props;E.vnode=R,E.next=null,Iv(E,R.props,ie,q),Ov(E,R.children,q),nr(),_a(void 0,E.update),ir()},H=(E,R,q,ie,re,ue,fe,he,me=!1)=>{const S=E&&E.children,b=E?E.shapeFlag:0,B=R.children,{patchFlag:K,shapeFlag:te}=R;if(K>0){if(K&128){de(S,B,q,ie,re,ue,fe,he,me);return}else if(K&256){J(S,B,q,ie,re,ue,fe,he,me);return}}te&8?(b&16&&oe(S,re,ue),B!==S&&u(q,B)):b&16?te&16?de(S,B,q,ie,re,ue,fe,he,me):oe(S,re,ue,!0):(b&8&&u(q,""),te&16&&C(B,q,ie,re,ue,fe,he,me))},J=(E,R,q,ie,re,ue,fe,he,me)=>{E=E||kr,R=R||kr;const S=E.length,b=R.length,B=Math.min(S,b);let K;for(K=0;K<B;K++){const te=R[K]=me?di(R[K]):Mn(R[K]);p(E[K],te,q,null,re,ue,fe,he,me)}S>b?oe(E,re,ue,!0,!1,B):C(R,q,ie,re,ue,fe,he,me,B)},de=(E,R,q,ie,re,ue,fe,he,me)=>{let S=0;const b=R.length;let B=E.length-1,K=b-1;for(;S<=B&&S<=K;){const te=E[S],le=R[S]=me?di(R[S]):Mn(R[S]);if(Ni(te,le))p(te,le,q,null,re,ue,fe,he,me);else break;S++}for(;S<=B&&S<=K;){const te=E[B],le=R[K]=me?di(R[K]):Mn(R[K]);if(Ni(te,le))p(te,le,q,null,re,ue,fe,he,me);else break;B--,K--}if(S>B){if(S<=K){const te=K+1,le=te<b?R[te].el:ie;for(;S<=K;)p(null,R[S]=me?di(R[S]):Mn(R[S]),q,le,re,ue,fe,he,me),S++}}else if(S>K)for(;S<=B;)pe(E[S],re,ue,!0),S++;else{const te=S,le=S,Se=new Map;for(S=le;S<=K;S++){const Ue=R[S]=me?di(R[S]):Mn(R[S]);Ue.key!=null&&Se.set(Ue.key,S)}let G,_e=0;const ye=K-le+1;let Le=!1,Ae=0;const Ie=new Array(ye);for(S=0;S<ye;S++)Ie[S]=0;for(S=te;S<=B;S++){const Ue=E[S];if(_e>=ye){pe(Ue,re,ue,!0);continue}let O;if(Ue.key!=null)O=Se.get(Ue.key);else for(G=le;G<=K;G++)if(Ie[G-le]===0&&Ni(Ue,R[G])){O=G;break}O===void 0?pe(Ue,re,ue,!0):(Ie[O-le]=S+1,O>=Ae?Ae=O:Le=!0,p(Ue,R[O],q,null,re,ue,fe,he,me),_e++)}const We=Le?Vv(Ie):kr;for(G=We.length-1,S=ye-1;S>=0;S--){const Ue=le+S,O=R[Ue],we=Ue+1<b?R[Ue+1].el:ie;Ie[S]===0?p(null,O,q,we,re,ue,fe,he,me):Le&&(G<0||S!==We[G]?se(O,q,we,2):G--)}}},se=(E,R,q,ie,re=null)=>{const{el:ue,type:fe,transition:he,children:me,shapeFlag:S}=E;if(S&6){se(E.component.subTree,R,q,ie);return}if(S&128){E.suspense.move(R,q,ie);return}if(S&64){fe.move(E,R,q,ge);return}if(fe===Et){i(ue,R,q);for(let B=0;B<me.length;B++)se(me[B],R,q,ie);i(E.anchor,R,q);return}if(fe===ka){y(E,R,q);return}if(ie!==2&&S&1&&he)if(ie===0)he.beforeEnter(ue),i(ue,R,q),Ft(()=>he.enter(ue),re);else{const{leave:B,delayLeave:K,afterLeave:te}=he,le=()=>i(ue,R,q),Se=()=>{B(ue,()=>{le(),te&&te()})};K?K(ue,le,Se):Se()}else i(ue,R,q)},pe=(E,R,q,ie=!1,re=!1)=>{const{type:ue,props:fe,ref:he,children:me,dynamicChildren:S,shapeFlag:b,patchFlag:B,dirs:K}=E;if(he!=null&&Vl(he,null,q,E,!0),b&256){R.ctx.deactivate(E);return}const te=b&1&&K,le=!Wo(E);let Se;if(le&&(Se=fe&&fe.onVnodeBeforeUnmount)&&Sn(Se,R,E),b&6)z(E.component,q,ie);else{if(b&128){E.suspense.unmount(q,ie);return}te&&Ei(E,null,R,"beforeUnmount"),b&64?E.type.remove(E,R,q,re,ge,ie):S&&(ue!==Et||B>0&&B&64)?oe(S,R,q,!1,!0):(ue===Et&&B&384||!re&&b&16)&&oe(me,R,q),ie&&Me(E)}(le&&(Se=fe&&fe.onVnodeUnmounted)||te)&&Ft(()=>{Se&&Sn(Se,R,E),te&&Ei(E,null,R,"unmounted")},q)},Me=E=>{const{type:R,el:q,anchor:ie,transition:re}=E;if(R===Et){U(q,ie);return}if(R===ka){M(E);return}const ue=()=>{r(q),re&&!re.persisted&&re.afterLeave&&re.afterLeave()};if(E.shapeFlag&1&&re&&!re.persisted){const{leave:fe,delayLeave:he}=re,me=()=>fe(q,ue);he?he(E.el,ue,me):me()}else ue()},U=(E,R)=>{let q;for(;E!==R;)q=f(E),r(E),E=q;r(R)},z=(E,R,q)=>{const{bum:ie,scope:re,update:ue,subTree:fe,um:he}=E;ie&&Oa(ie),re.stop(),ue&&(ue.active=!1,pe(fe,E,R,q)),he&&Ft(he,R),Ft(()=>{E.isUnmounted=!0},R),R&&R.pendingBranch&&!R.isUnmounted&&E.asyncDep&&!E.asyncResolved&&E.suspenseId===R.pendingId&&(R.deps--,R.deps===0&&R.resolve())},oe=(E,R,q,ie=!1,re=!1,ue=0)=>{for(let fe=ue;fe<E.length;fe++)pe(E[fe],R,q,ie,re)},ce=E=>E.shapeFlag&6?ce(E.component.subTree):E.shapeFlag&128?E.suspense.next():f(E.anchor||E.el),be=(E,R,q)=>{E==null?R._vnode&&pe(R._vnode,null,null,!0):p(R._vnode||null,E,R,null,null,null,q),Ih(),R._vnode=E},ge={p,um:pe,m:se,r:Me,mt:Q,mc:C,pc:H,pbc:D,n:ce,o:t};let Te,ve;return e&&([Te,ve]=e(ge)),{render:be,hydrate:Te,createApp:zv(be,Te)}}function Ci({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Bc(t,e,n=!1){const i=t.children,r=e.children;if(De(i)&&De(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=di(r[s]),a.el=o.el),n||Bc(o,a))}}function Vv(t){const e=t.slice(),n=[0];let i,r,s,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(r=n[n.length-1],t[r]<c){e[i]=r,n.push(i);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[i]=n[s-1]),n[s]=i)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}const Hv=t=>t.__isTeleport,Cs=t=>t&&(t.disabled||t.disabled===""),Ru=t=>typeof SVGElement<"u"&&t instanceof SVGElement,Hl=(t,e)=>{const n=t&&t.to;return ut(n)?e?e(n):null:n},Gv={__isTeleport:!0,process(t,e,n,i,r,s,o,a,l,c){const{mc:u,pc:d,pbc:f,o:{insert:h,querySelector:g,createText:m,createComment:p}}=c,v=Cs(e.props);let{shapeFlag:x,children:w,dynamicChildren:y}=e;if(t==null){const M=e.el=m(""),T=e.anchor=m("");h(M,n,i),h(T,n,i);const L=e.target=Hl(e.props,g),_=e.targetAnchor=m("");L&&(h(_,L),o=o||Ru(L));const C=(P,D)=>{x&16&&u(w,P,D,r,s,o,a,l)};v?C(n,T):L&&C(L,_)}else{e.el=t.el;const M=e.anchor=t.anchor,T=e.target=t.target,L=e.targetAnchor=t.targetAnchor,_=Cs(t.props),C=_?n:T,P=_?M:L;if(o=o||Ru(T),y?(f(t.dynamicChildren,y,C,r,s,o,a),Bc(t,e,!0)):l||d(t,e,C,P,r,s,o,a,!1),v)_||go(e,n,M,c,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const D=e.target=Hl(e.props,g);D&&go(e,D,null,c,0)}else _&&go(e,T,L,c,1)}},remove(t,e,n,i,{um:r,o:{remove:s}},o){const{shapeFlag:a,children:l,anchor:c,targetAnchor:u,target:d,props:f}=t;if(d&&s(u),(o||!Cs(f))&&(s(c),a&16))for(let h=0;h<l.length;h++){const g=l[h];r(g,e,n,!0,!!g.dynamicChildren)}},move:go,hydrate:Wv};function go(t,e,n,{o:{insert:i},m:r},s=2){s===0&&i(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:l,children:c,props:u}=t,d=s===2;if(d&&i(o,e,n),(!d||Cs(u))&&l&16)for(let f=0;f<c.length;f++)r(c[f],e,n,2);d&&i(a,e,n)}function Wv(t,e,n,i,r,s,{o:{nextSibling:o,parentNode:a,querySelector:l}},c){const u=e.target=Hl(e.props,l);if(u){const d=u._lpa||u.firstChild;if(e.shapeFlag&16)if(Cs(e.props))e.anchor=c(o(t),e,a(t),n,i,r,s),e.targetAnchor=d;else{e.anchor=o(t);let f=d;for(;f;)if(f=o(f),f&&f.nodeType===8&&f.data==="teleport anchor"){e.targetAnchor=f,u._lpa=e.targetAnchor&&o(e.targetAnchor);break}c(d,e,u,n,i,r,s)}}return e.anchor&&o(e.anchor)}const $v=Gv,Et=Symbol(void 0),zc=Symbol(void 0),pn=Symbol(void 0),ka=Symbol(void 0),Ts=[];let fn=null;function Vn(t=!1){Ts.push(fn=t?null:[])}function qv(){Ts.pop(),fn=Ts[Ts.length-1]||null}let zs=1;function Du(t){zs+=t}function tp(t){return t.dynamicChildren=zs>0?fn||kr:null,qv(),zs>0&&fn&&fn.push(t),t}function np(t,e,n,i,r,s){return tp(kc(t,e,n,i,r,s,!0))}function Wi(t,e,n,i,r){return tp(k(t,e,n,i,r,!0))}function Gl(t){return t?t.__v_isVNode===!0:!1}function Ni(t,e){return t.type===e.type&&t.key===e.key}const Sa="__vInternal",ip=({key:t})=>t!=null?t:null,$o=({ref:t,ref_key:e,ref_for:n})=>t!=null?ut(t)||rt(t)||Ne(t)?{i:en,r:t,k:e,f:!!n}:t:null;function kc(t,e=null,n=null,i=0,r=null,s=t===Et?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&ip(e),ref:e&&$o(e),scopeId:Oh,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null};return a?(Uc(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=ut(n)?8:16),zs>0&&!o&&fn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&fn.push(l),l}const k=Xv;function Xv(t,e=null,n=null,i=0,r=null,s=!1){if((!t||t===qh)&&(t=pn),Gl(t)){const a=vi(t,e,!0);return n&&Uc(a,n),zs>0&&!s&&fn&&(a.shapeFlag&6?fn[fn.indexOf(t)]=a:fn.push(a)),a.patchFlag|=-2,a}if(r_(t)&&(t=t.__vccOpts),e){e=rp(e);let{class:a,style:l}=e;a&&!ut(a)&&(e.class=js(a)),pt(l)&&(yh(l)&&!De(l)&&(l=yt({},l)),e.style=da(l))}const o=ut(t)?1:hv(t)?128:Hv(t)?64:pt(t)?4:Ne(t)?2:0;return kc(t,e,n,i,r,o,s,!0)}function rp(t){return t?yh(t)||Sa in t?yt({},t):t:null}function vi(t,e,n=!1){const{props:i,ref:r,patchFlag:s,children:o}=t,a=e?Cn(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&ip(a),ref:e&&e.ref?n&&r?De(r)?r.concat($o(e)):[r,$o(e)]:$o(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Et?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&vi(t.ssContent),ssFallback:t.ssFallback&&vi(t.ssFallback),el:t.el,anchor:t.anchor}}function ea(t=" ",e=0){return k(zc,null,t,e)}function jv(t="",e=!1){return e?(Vn(),Wi(pn,null,t)):k(pn,null,t)}function Mn(t){return t==null||typeof t=="boolean"?k(pn):De(t)?k(Et,null,t.slice()):typeof t=="object"?di(t):k(zc,null,String(t))}function di(t){return t.el===null||t.memo?t:vi(t)}function Uc(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(De(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Uc(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(Sa in e)?e._ctx=en:r===3&&en&&(en.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Ne(e)?(e={default:e,_ctx:en},n=32):(e=String(e),i&64?(n=16,e=[ea(e)]):n=8);t.children=e,t.shapeFlag|=n}function Cn(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=js([e.class,i.class]));else if(r==="style")e.style=da([e.style,i.style]);else if(ha(r)){const s=e[r],o=i[r];o&&s!==o&&!(De(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function Sn(t,e,n,i=null){nn(t,e,7,[n,i])}const Yv=ep();let Kv=0;function Zv(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||Yv,s={uid:Kv++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new lh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Kh(i,r),emitsOptions:Nh(i,r),emit:null,emitted:null,propsDefaults:et,inheritAttrs:i.inheritAttrs,ctx:et,data:et,props:et,attrs:et,slots:et,refs:et,setupState:et,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=lv.bind(null,s),t.ce&&t.ce(s),s}let _t=null;const Ma=()=>_t||en,qr=t=>{_t=t,t.scope.on()},$i=()=>{_t&&_t.scope.off(),_t=null};function sp(t){return t.vnode.shapeFlag&4}let ks=!1;function Jv(t,e=!1){ks=e;const{props:n,children:i}=t.vnode,r=sp(t);Dv(t,n,r,e),Nv(t,i);const s=r?Qv(t,e):void 0;return ks=!1,s}function Qv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=bh(new Proxy(t.ctx,Cv));const{setup:i}=n;if(i){const r=t.setupContext=i.length>1?t_(t):null;qr(t),nr();const s=Gn(i,t,0,[t.props,r]);if(ir(),$i(),rh(s)){if(s.then($i,$i),e)return s.then(o=>{Iu(t,o,e)}).catch(o=>{va(o,t,0)});t.asyncDep=s}else Iu(t,s,e)}else op(t,e)}function Iu(t,e,n){Ne(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:pt(e)&&(t.setupState=Ch(e)),op(t,n)}let Fu;function op(t,e,n){const i=t.type;if(!t.render){if(!e&&Fu&&!i.render){const r=i.template;if(r){const{isCustomElement:s,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=i,c=yt(yt({isCustomElement:s,delimiters:a},o),l);i.render=Fu(r,c)}}t.render=i.render||dn}qr(t),nr(),Tv(t),ir(),$i()}function e_(t){return new Proxy(t.attrs,{get(e,n){return Gt(t,"get","$attrs"),e[n]}})}function t_(t){const e=i=>{t.exposed=i||{}};let n;return{get attrs(){return n||(n=e_(t))},slots:t.slots,emit:t.emit,expose:e}}function wa(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Ch(bh(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Jo)return Jo[n](t)}}))}const n_=/(?:^|[-_])(\w)/g,i_=t=>t.replace(n_,e=>e.toUpperCase()).replace(/[-_]/g,"");function ap(t,e=!0){return Ne(t)?t.displayName||t.name:t.name||e&&t.__name}function lp(t,e,n=!1){let i=ap(e);if(!i&&e.__file){const r=e.__file.match(/([^/\\]+)\.\w+$/);r&&(i=r[1])}if(!i&&t&&t.parent){const r=s=>{for(const o in s)if(s[o]===e)return o};i=r(t.components||t.parent.type.components)||r(t.appContext.components)}return i?i_(i):n?"App":"Anonymous"}function r_(t){return Ne(t)&&"__vccOpts"in t}const Y=(t,e)=>Zg(t,e,ks);function Yn(t,e,n){const i=arguments.length;return i===2?pt(e)&&!De(e)?Gl(e)?k(t,null,[e]):k(t,e):k(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Gl(n)&&(n=[n]),k(t,e,n))}const s_="3.2.37",o_="http://www.w3.org/2000/svg",Oi=typeof document<"u"?document:null,Nu=Oi&&Oi.createElement("template"),a_={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e?Oi.createElementNS(o_,t):Oi.createElement(t,n?{is:n}:void 0);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>Oi.createTextNode(t),createComment:t=>Oi.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Oi.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,i,r,s){const o=n?n.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{Nu.innerHTML=i?`<svg>${t}</svg>`:t;const a=Nu.content;if(i){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function l_(t,e,n){const i=t._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function c_(t,e,n){const i=t.style,r=ut(n);if(n&&!r){for(const s in n)Wl(i,s,n[s]);if(e&&!ut(e))for(const s in e)n[s]==null&&Wl(i,s,"")}else{const s=i.display;r?e!==n&&(i.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(i.display=s)}}const Ou=/\s*!important$/;function Wl(t,e,n){if(De(n))n.forEach(i=>Wl(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=u_(t,e);Ou.test(n)?t.setProperty(es(i),n.replace(Ou,""),"important"):t[i]=n}}const Bu=["Webkit","Moz","ms"],Ua={};function u_(t,e){const n=Ua[e];if(n)return n;let i=rn(e);if(i!=="filter"&&i in t)return Ua[e]=i;i=Ys(i);for(let r=0;r<Bu.length;r++){const s=Bu[r]+i;if(s in t)return Ua[e]=s}return e}const zu="http://www.w3.org/1999/xlink";function f_(t,e,n,i,r){if(i&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(zu,e.slice(6,e.length)):t.setAttributeNS(zu,e,n);else{const s=cg(e);n==null||s&&!th(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function d_(t,e,n,i,r,s,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,r,s),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const l=n==null?"":n;(t.value!==l||t.tagName==="OPTION")&&(t.value=l),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=th(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}const[cp,h_]=(()=>{let t=Date.now,e=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let $l=0;const p_=Promise.resolve(),m_=()=>{$l=0},g_=()=>$l||(p_.then(m_),$l=cp());function v_(t,e,n,i){t.addEventListener(e,n,i)}function __(t,e,n,i){t.removeEventListener(e,n,i)}function x_(t,e,n,i,r=null){const s=t._vei||(t._vei={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=y_(e);if(i){const c=s[e]=b_(i,r);v_(t,a,c,l)}else o&&(__(t,a,o,l),s[e]=void 0)}}const ku=/(?:Once|Passive|Capture)$/;function y_(t){let e;if(ku.test(t)){e={};let n;for(;n=t.match(ku);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[es(t.slice(2)),e]}function b_(t,e){const n=i=>{const r=i.timeStamp||cp();(h_||r>=n.attached-1)&&nn(S_(i,n.value),e,5,[i])};return n.value=t,n.attached=g_(),n}function S_(t,e){if(De(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Uu=/^on[a-z]/,M_=(t,e,n,i,r=!1,s,o,a,l)=>{e==="class"?l_(t,i,r):e==="style"?c_(t,n,i):ha(e)?_c(e)||x_(t,e,n,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):w_(t,e,i,r))?d_(t,e,i,s,o,a,l):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),f_(t,e,i,r))};function w_(t,e,n,i){return i?!!(e==="innerHTML"||e==="textContent"||e in t&&Uu.test(e)&&Ne(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Uu.test(e)&&ut(n)?!1:e in t}const ei="transition",cs="animation",xi=(t,{slots:e})=>Yn(kh,fp(t),e);xi.displayName="Transition";const up={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},E_=xi.props=yt({},kh.props,up),Ti=(t,e=[])=>{De(t)?t.forEach(n=>n(...e)):t&&t(...e)},Vu=t=>t?De(t)?t.some(e=>e.length>1):t.length>1:!1;function fp(t){const e={};for(const F in t)F in up||(e[F]=t[F]);if(t.css===!1)return e;const{name:n="v",type:i,duration:r,enterFromClass:s=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:h=`${n}-leave-to`}=t,g=C_(r),m=g&&g[0],p=g&&g[1],{onBeforeEnter:v,onEnter:x,onEnterCancelled:w,onLeave:y,onLeaveCancelled:M,onBeforeAppear:T=v,onAppear:L=x,onAppearCancelled:_=w}=e,C=(F,W,N)=>{fi(F,W?u:a),fi(F,W?c:o),N&&N()},P=(F,W)=>{F._isLeaving=!1,fi(F,d),fi(F,h),fi(F,f),W&&W()},D=F=>(W,N)=>{const Q=F?L:x,I=()=>C(W,F,N);Ti(Q,[W,I]),Hu(()=>{fi(W,F?l:s),Bn(W,F?u:a),Vu(Q)||Gu(W,i,m,I)})};return yt(e,{onBeforeEnter(F){Ti(v,[F]),Bn(F,s),Bn(F,o)},onBeforeAppear(F){Ti(T,[F]),Bn(F,l),Bn(F,c)},onEnter:D(!1),onAppear:D(!0),onLeave(F,W){F._isLeaving=!0;const N=()=>P(F,W);Bn(F,d),hp(),Bn(F,f),Hu(()=>{!F._isLeaving||(fi(F,d),Bn(F,h),Vu(y)||Gu(F,i,p,N))}),Ti(y,[F,N])},onEnterCancelled(F){C(F,!1),Ti(w,[F])},onAppearCancelled(F){C(F,!0),Ti(_,[F])},onLeaveCancelled(F){P(F),Ti(M,[F])}})}function C_(t){if(t==null)return null;if(pt(t))return[Va(t.enter),Va(t.leave)];{const e=Va(t);return[e,e]}}function Va(t){return ah(t)}function Bn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function fi(t,e){e.split(/\s+/).forEach(i=>i&&t.classList.remove(i));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function Hu(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let T_=0;function Gu(t,e,n,i){const r=t._endId=++T_,s=()=>{r===t._endId&&i()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:l}=dp(t,e);if(!o)return i();const c=o+"end";let u=0;const d=()=>{t.removeEventListener(c,f),s()},f=h=>{h.target===t&&++u>=l&&d()};setTimeout(()=>{u<l&&d()},a+1),t.addEventListener(c,f)}function dp(t,e){const n=window.getComputedStyle(t),i=g=>(n[g]||"").split(", "),r=i(ei+"Delay"),s=i(ei+"Duration"),o=Wu(r,s),a=i(cs+"Delay"),l=i(cs+"Duration"),c=Wu(a,l);let u=null,d=0,f=0;e===ei?o>0&&(u=ei,d=o,f=s.length):e===cs?c>0&&(u=cs,d=c,f=l.length):(d=Math.max(o,c),u=d>0?o>c?ei:cs:null,f=u?u===ei?s.length:l.length:0);const h=u===ei&&/\b(transform|all)(,|$)/.test(n[ei+"Property"]);return{type:u,timeout:d,propCount:f,hasTransform:h}}function Wu(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,i)=>$u(n)+$u(t[i])))}function $u(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function hp(){return document.body.offsetHeight}const pp=new WeakMap,mp=new WeakMap,A_={name:"TransitionGroup",props:yt({},E_,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=Ma(),i=zh();let r,s;return Wh(()=>{if(!r.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!I_(r[0].el,n.vnode.el,o))return;r.forEach(P_),r.forEach(R_);const a=r.filter(D_);hp(),a.forEach(l=>{const c=l.el,u=c.style;Bn(c,o),u.transform=u.webkitTransform=u.transitionDuration="";const d=c._moveCb=f=>{f&&f.target!==c||(!f||/transform$/.test(f.propertyName))&&(c.removeEventListener("transitionend",d),c._moveCb=null,fi(c,o))};c.addEventListener("transitionend",d)})}),()=>{const o=He(t),a=fp(o);let l=o.tag||Et;r=s,s=e.default?Rc(e.default()):[];for(let c=0;c<s.length;c++){const u=s[c];u.key!=null&&Bs(u,Os(u,a,i,n))}if(r)for(let c=0;c<r.length;c++){const u=r[c];Bs(u,Os(u,a,i,n)),pp.set(u,u.el.getBoundingClientRect())}return k(l,null,s)}}},L_=A_;function P_(t){const e=t.el;e._moveCb&&e._moveCb(),e._enterCb&&e._enterCb()}function R_(t){mp.set(t,t.el.getBoundingClientRect())}function D_(t){const e=pp.get(t),n=mp.get(t),i=e.left-n.left,r=e.top-n.top;if(i||r){const s=t.el.style;return s.transform=s.webkitTransform=`translate(${i}px,${r}px)`,s.transitionDuration="0s",t}}function I_(t,e,n){const i=t.cloneNode();t._vtc&&t._vtc.forEach(o=>{o.split(/\s+/).forEach(a=>a&&i.classList.remove(a))}),n.split(/\s+/).forEach(o=>o&&i.classList.add(o)),i.style.display="none";const r=e.nodeType===1?e:e.parentNode;r.appendChild(i);const{hasTransform:s}=dp(i);return r.removeChild(i),s}const Vc={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):us(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:i}){!e!=!n&&(i?e?(i.beforeEnter(t),us(t,!0),i.enter(t)):i.leave(t,()=>{us(t,!1)}):us(t,e))},beforeUnmount(t,{value:e}){us(t,e)}};function us(t,e){t.style.display=e?t._vod:"none"}const F_=yt({patchProp:M_},a_);let qu;function N_(){return qu||(qu=kv(F_))}const O_=(...t)=>{const e=N_().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=B_(i);if(!r)return;const s=e._component;!Ne(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function B_(t){return ut(t)?document.querySelector(t):t}const z_="/assets/icon.0ae8a43c.svg";const Qs=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n};const ct=typeof window<"u",Hc=ct&&"IntersectionObserver"in window,k_=ct&&("ontouchstart"in window||window.navigator.maxTouchPoints>0),U_=ct&&CSS.supports("selector(:focus-visible)");function gp(t){const e=Pe(),n=Pe();if(ct){const i=new ResizeObserver(r=>{t==null||t(r,i),r.length&&(n.value=r[0].contentRect)});yn(()=>{i.disconnect()}),Ke(e,(r,s)=>{s&&(i.unobserve(s),n.value=void 0),r&&i.observe(r)},{flush:"post"})}return{resizeRef:e,contentRect:Zs(n)}}function Xu(t,e,n){V_(t,e),e.set(t,n)}function V_(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}function H_(t,e,n){var i=vp(t,e,"set");return G_(t,i,n),n}function G_(t,e,n){if(e.set)e.set.call(t,n);else{if(!e.writable)throw new TypeError("attempted to set read only private field");e.value=n}}function Ai(t,e){var n=vp(t,e,"get");return W_(t,n)}function vp(t,e,n){if(!e.has(t))throw new TypeError("attempted to "+n+" private field on non-instance");return e.get(t)}function W_(t,e){return e.get?e.get.call(t):e.value}function _p(t,e,n){const i=e.length-1;if(i<0)return t===void 0?n:t;for(let r=0;r<i;r++){if(t==null)return n;t=t[e[r]]}return t==null||t[e[i]]===void 0?n:t[e[i]]}function xp(t,e){if(t===e)return!0;if(t instanceof Date&&e instanceof Date&&t.getTime()!==e.getTime()||t!==Object(t)||e!==Object(e))return!1;const n=Object.keys(t);return n.length!==Object.keys(e).length?!1:n.every(i=>xp(t[i],e[i]))}function ql(t,e,n){return t==null||!e||typeof e!="string"?n:t[e]!==void 0?t[e]:(e=e.replace(/\[(\w+)\]/g,".$1"),e=e.replace(/^\./,""),_p(t,e.split("."),n))}function fs(t,e,n){if(e==null)return t===void 0?n:t;if(t!==Object(t))return n;if(typeof e=="string")return ql(t,e,n);if(Array.isArray(e))return _p(t,e,n);if(typeof e!="function")return n;const i=e(t,n);return typeof i>"u"?n:i}function $_(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return Array.from({length:t},(n,i)=>e+i)}function Re(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"px";if(!(t==null||t===""))return isNaN(+t)?String(t):isFinite(+t)?`${Number(t)}${e}`:void 0}function Xl(t){return t!==null&&typeof t=="object"&&!Array.isArray(t)}function q_(t){return t==null?void 0:t.$el}const ju=Object.freeze({enter:13,tab:9,delete:46,esc:27,space:32,up:38,down:40,left:37,right:39,end:35,home:36,del:46,backspace:8,insert:45,pageup:33,pagedown:34,shift:16});Object.freeze({enter:"Enter",tab:"Tab",delete:"Delete",esc:"Escape",space:"Space",up:"ArrowUp",down:"ArrowDown",left:"ArrowLeft",right:"ArrowRight",end:"End",home:"Home",del:"Delete",backspace:"Backspace",insert:"Insert",pageup:"PageUp",pagedown:"PageDown",shift:"Shift"});function yp(t,e){const n=Object.create(null),i=Object.create(null);for(const r in t)e.some(s=>s instanceof RegExp?s.test(r):s===r)?n[r]=t[r]:i[r]=t[r];return[n,i]}function X_(t){return t==null?[]:Array.isArray(t)?t:[t]}function jl(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1;return Math.max(e,Math.min(n,t))}function Xn(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;const i={};for(const r in t)i[r]=t[r];for(const r in e){const s=t[r],o=e[r];if(Xl(s)&&Xl(o)){i[r]=Xn(s,o,n);continue}if(Array.isArray(s)&&Array.isArray(o)&&n){i[r]=n(s,o);continue}i[r]=o}return i}function bp(t){return t.map(e=>e.type===Et?bp(e.children):e).flat()}function Gc(){return(arguments.length>0&&arguments[0]!==void 0?arguments[0]:"").replace(/[^a-z]/gi,"-").replace(/\B([A-Z])/g,"-$1").toLowerCase()}function As(t,e){if(!e||typeof e!="object")return[];if(Array.isArray(e))return e.map(n=>As(t,n)).flat(1);if(Array.isArray(e.children))return e.children.map(n=>As(t,n)).flat(1);if(e.component){if(Object.getOwnPropertySymbols(e.component.provides).includes(t))return[e.component];if(e.component.subTree)return As(t,e.component.subTree).flat(1)}return[]}var vo=new WeakMap,pr=new WeakMap;class j_{constructor(e){Xu(this,vo,{writable:!0,value:[]}),Xu(this,pr,{writable:!0,value:0}),this.size=e}push(e){Ai(this,vo)[Ai(this,pr)]=e,H_(this,pr,(Ai(this,pr)+1)%this.size)}values(){return Ai(this,vo).slice(Ai(this,pr)).concat(Ai(this,vo).slice(0,Ai(this,pr)))}}function Wc(t){const e={},n=Y(t);for(const i in n.value)e[i]=Ve(n.value,i);return Ke(n,i=>{for(const r in i)e[r].value=i[r]},{flush:"sync"}),e}function ta(t,e){return t.includes(e)}const Sp=["top","bottom"],Y_=["start","end","left","right"];function Yl(t,e){let[n,i]=t.split(" ");return i||(i=ta(Sp,n)?"start":ta(Y_,n)?"top":"center"),{side:Kl(n,e),align:Kl(i,e)}}function Kl(t,e){return t==="start"?e?"right":"left":t==="end"?e?"left":"right":t}function Ha(t){return{side:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[t.side],align:t.align}}function Ga(t){return{side:t.side,align:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[t.align]}}function Yu(t){return{side:t.align,align:t.side}}function Ku(t){return ta(Sp,t.side)?"y":"x"}class Hr{constructor(e){let{x:n,y:i,width:r,height:s}=e;this.x=n,this.y=i,this.width=r,this.height=s}get top(){return this.y}get bottom(){return this.y+this.height}get left(){return this.x}get right(){return this.x+this.width}}function Zu(t,e){return{x:{before:Math.max(0,e.left-t.left),after:Math.max(0,t.right-e.right)},y:{before:Math.max(0,e.top-t.top),after:Math.max(0,t.bottom-e.bottom)}}}function K_(t){const e=t.getBoundingClientRect(),n=getComputedStyle(t),i=n.transform;if(i){let r,s,o,a,l;if(i.startsWith("matrix3d("))r=i.slice(9,-1).split(/, /),s=+r[0],o=+r[5],a=+r[12],l=+r[13];else if(i.startsWith("matrix("))r=i.slice(7,-1).split(/, /),s=+r[0],o=+r[3],a=+r[4],l=+r[5];else return new Hr(e);const c=n.transformOrigin,u=e.x-a-(1-s)*parseFloat(c),d=e.y-l-(1-o)*parseFloat(c.slice(c.indexOf(" ")+1)),f=s?e.width/s:t.offsetWidth+1,h=o?e.height/o:t.offsetHeight+1;return new Hr({x:u,y:d,width:f,height:h})}else return new Hr(e)}function Mp(t,e,n){if(n&&(e={_isVue:!0,$parent:n,$options:e}),e){if(e.$_alreadyWarned=e.$_alreadyWarned||[],e.$_alreadyWarned.includes(t))return;e.$_alreadyWarned.push(t)}return`[Vuetify] ${t}`+(e?Q_(e):"")}function Gr(t,e,n){const i=Mp(t,e,n);i!=null&&console.warn(i)}function Zl(t,e,n){const i=Mp(t,e,n);i!=null&&console.error(i)}const Z_=/(?:^|[-_])(\w)/g,J_=t=>t.replace(Z_,e=>e.toUpperCase()).replace(/[-_]/g,"");function Wa(t,e){if(t.$root===t)return"<Root>";const n=typeof t=="function"&&t.cid!=null?t.options:t._isVue?t.$options||t.constructor.options:t||{};let i=n.name||n._componentTag;const r=n.__file;if(!i&&r){const s=r.match(/([^/\\]+)\.vue$/);i=s==null?void 0:s[1]}return(i?`<${J_(i)}>`:"<Anonymous>")+(r&&e!==!1?` at ${r}`:"")}function Q_(t){if(t._isVue&&t.$parent){const e=[];let n=0;for(;t;){if(e.length>0){const i=e[e.length-1];if(i.constructor===t.constructor){n++,t=t.$parent;continue}else n>0&&(e[e.length-1]=[i,n],n=0)}e.push(t),t=t.$parent}return`

found in

`+e.map((i,r)=>`${r===0?"---> ":" ".repeat(5+r*2)}${Array.isArray(i)?`${Wa(i[0])}... (${i[1]} recursive calls)`:Wa(i)}`).join(`
`)}else return`

(found in ${Wa(t)})`}const e0=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]],t0=t=>t<=.0031308?t*12.92:1.055*t**(1/2.4)-.055,n0=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],i0=t=>t<=.04045?t/12.92:((t+.055)/1.055)**2.4;function wp(t){const e=Array(3),n=t0,i=e0;for(let r=0;r<3;++r)e[r]=Math.round(jl(n(i[r][0]*t[0]+i[r][1]*t[1]+i[r][2]*t[2]))*255);return(e[0]<<16)+(e[1]<<8)+(e[2]<<0)}function $c(t){const e=[0,0,0],n=i0,i=n0,r=n((t>>16&255)/255),s=n((t>>8&255)/255),o=n((t>>0&255)/255);for(let a=0;a<3;++a)e[a]=i[a][0]*r+i[a][1]*s+i[a][2]*o;return e}const na=.20689655172413793,r0=t=>t>na**3?Math.cbrt(t):t/(3*na**2)+4/29,s0=t=>t>na?t**3:3*na**2*(t-4/29);function Ep(t){const e=r0,n=e(t[1]);return[116*n-16,500*(e(t[0]/.95047)-n),200*(n-e(t[2]/1.08883))]}function Cp(t){const e=s0,n=(t[0]+16)/116;return[e(n+t[1]/500)*.95047,e(n),e(n-t[2]/200)*1.08883]}function Ju(t){return!!t&&/^(#|var\(--|(rgb|hsl)a?\()/.test(t)}function ia(t){let e;if(typeof t=="number")e=t;else if(typeof t=="string"){let n=t.startsWith("#")?t.substring(1):t;n.length===3&&(n=n.split("").map(i=>i+i).join("")),n.length!==6&&n.length!==8&&Gr(`'${t}' is not a valid rgb color`),e=parseInt(n,16)}else throw new TypeError(`Colors can only be numbers or strings, recieved ${t==null?t:t.constructor.name} instead`);return e<0?(Gr(`Colors cannot be negative: '${t}'`),e=0):(e>4294967295||isNaN(e))&&(Gr(`'${t}' is not a valid rgb color`),e=16777215),e}function o0(t){let e=t.toString(16);return e.length<6&&(e="0".repeat(6-e.length)+e),"#"+e}function Tp(t){const e=ia(t);return{r:(e&16711680)>>16,g:(e&65280)>>8,b:e&255}}function a0(t,e){const n=Ep($c(t));return n[0]=n[0]+e*10,wp(Cp(n))}function l0(t,e){const n=Ep($c(t));return n[0]=n[0]-e*10,wp(Cp(n))}function c0(t){const e=ia(t);return $c(e)[1]}function Ot(t,e){const n=Ma();if(!n)throw new Error(`[Vuetify] ${t} ${e||"must be called from inside a setup function"}`);return n}function or(){var t;let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"composables";return Gc((t=Ot(e).type)==null?void 0:t.name)}let Ap=0,qo=new WeakMap;function eo(){const t=Ot("getUid");if(qo.has(t))return qo.get(t);{const e=Ap++;return qo.set(t,e),e}}eo.reset=()=>{Ap=0,qo=new WeakMap};function u0(t){const{provides:e}=Ot("injectSelf");if(e&&t in e)return e[t]}const Us=Symbol.for("vuetify:defaults");function f0(t){return Pe(t!=null?t:{})}function Lp(){const t=it(Us);if(!t)throw new Error("[Vuetify] Could not find defaults instance");return t}function yi(t,e){const n=Lp(),i=Pe(t),r=Y(()=>{const s=hn(e==null?void 0:e.scoped),o=hn(e==null?void 0:e.reset),a=hn(e==null?void 0:e.root);let l=Xn(i.value,{prev:n.value});if(s)return l;if(o||a){const c=Number(o||1/0);for(let u=0;u<=c&&l.prev;u++)l=l.prev;return l}return Xn(l.prev,l)});return Tt(Us,r),r}function d0(t,e){var n,i;return((n=t.props)==null?void 0:n.hasOwnProperty(e))||((i=t.props)==null?void 0:i.hasOwnProperty(Gc(e)))}const Ze=function(e){var n;if(e._setup=(n=e._setup)!=null?n:e.setup,!e.name)return Gr("The component is missing an explicit name, unable to generate default prop value"),e;if(e._setup){var i;e.props=(i=e.props)!=null?i:{},e.props._as=String,e.setup=function(s,o){const a=Ma(),l=Lp(),c=wh(),u=xh({...He(s)});_i(()=>{var h;const g=l.value.global,m=l.value[(h=s._as)!=null?h:e.name];if(m){const x=Object.entries(m).filter(w=>{let[y]=w;return y.startsWith("V")});x.length&&(c.value=Object.fromEntries(x))}for(const x of Object.keys(s)){let w;if(d0(a.vnode,x))w=s[x];else{var p,v;w=(p=(v=m==null?void 0:m[x])!=null?v:g==null?void 0:g[x])!=null?p:s[x]}u[x]!==w&&(u[x]=w)}});const d=e._setup(u,o);let f;return Ke(c,(h,g)=>{!h&&f?f.stop():h&&!g&&(f=Ks(),f.run(()=>{var m,p;yi(Xn((m=(p=u0(Us))==null?void 0:p.value)!=null?m:{},h))}))},{immediate:!0}),d}}return e};function ts(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return e=>(t?Ze:rr)(e)}function to(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",n=arguments.length>2?arguments[2]:void 0;return Ze({name:n!=null?n:Ys(rn(t.replace(/__/g,"-"))),props:{tag:{type:String,default:e}},setup(i,r){let{slots:s}=r;return()=>{var o;return Yn(i.tag,{class:t},(o=s.default)==null?void 0:o.call(s))}}})}function Pp(t){if(typeof t.getRootNode!="function"){for(;t.parentNode;)t=t.parentNode;return t!==document?null:document}const e=t.getRootNode();return e!==document&&e.getRootNode({composed:!0})!==document?null:e}const h0="cubic-bezier(0.4, 0, 0.2, 1)";function p0(t){for(;t;){if(qc(t))return t;t=t.parentElement}return document.scrollingElement}function ra(t){const e=[];for(;t;)qc(t)&&e.push(t),t=t.parentElement;return e}function qc(t){if(!t||t.nodeType!==Node.ELEMENT_NODE)return!1;const e=window.getComputedStyle(t);return e.overflowY==="scroll"||e.overflowY==="auto"&&t.scrollHeight>t.clientHeight}function m0(t){for(;t;){if(window.getComputedStyle(t).position==="fixed")return!0;t=t.offsetParent}return!1}function Je(t,e){return n=>Object.keys(t).reduce((i,r)=>{const o=typeof t[r]=="object"&&t[r]!=null&&!Array.isArray(t[r])?t[r]:{type:t[r]};return n&&r in n?i[r]={...o,default:n[r]}:i[r]=o,e&&(i[r].source=e),i},{})}function st(t){const e=Ot("useRender");e.render=t}const sa=Symbol.for("vuetify:layout"),Rp=Symbol.for("vuetify:layout-item"),Qu=1e3,g0=Je({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),v0=Je({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function _0(){const t=it(sa);if(!t)throw new Error("Could not find injected Vuetify layout");return t}function x0(t){var e;const n=it(sa);if(!n)throw new Error("Could not find injected Vuetify layout");const i=(e=t.id)!=null?e:`layout-item-${eo()}`,r=Ot("useLayoutItem");Tt(Rp,{id:i});const s=Pe(!1);Hh(()=>s.value=!0),Vh(()=>s.value=!1);const{layoutItemStyles:o,layoutItemScrimStyles:a}=n.register(r,{...t,active:Y(()=>s.value?!1:t.active.value),id:i});return yn(()=>n.unregister(i)),{layoutItemStyles:o,layoutRect:n.layoutRect,layoutItemScrimStyles:a}}const y0=(t,e,n,i)=>{let r={top:0,left:0,right:0,bottom:0};const s=[{id:"",layer:{...r}}];for(const o of t){const a=e.get(o),l=n.get(o),c=i.get(o);if(!a||!l||!c)continue;const u={...r,[a.value]:parseInt(r[a.value],10)+(c.value?parseInt(l.value,10):0)};s.push({id:o,layer:u}),r=u}return s};function b0(t){const e=it(sa,null),n=Y(()=>e?e.rootZIndex.value-100:Qu),i=Pe([]),r=Ct(new Map),s=Ct(new Map),o=Ct(new Map),a=Ct(new Map),l=Ct(new Map),{resizeRef:c,contentRect:u}=gp(),d=Y(()=>{var M;const T=new Map,L=(M=t.overlaps)!=null?M:[];for(const _ of L.filter(C=>C.includes(":"))){const[C,P]=_.split(":");if(!i.value.includes(C)||!i.value.includes(P))continue;const D=r.get(C),F=r.get(P),W=s.get(C),N=s.get(P);!D||!F||!W||!N||(T.set(P,{position:D.value,amount:parseInt(W.value,10)}),T.set(C,{position:F.value,amount:-parseInt(N.value,10)}))}return T}),f=Y(()=>{const M=[...new Set([...o.values()].map(L=>L.value))].sort((L,_)=>L-_),T=[];for(const L of M){const _=i.value.filter(C=>{var P;return((P=o.get(C))==null?void 0:P.value)===L});T.push(..._)}return y0(T,r,s,a)}),h=Y(()=>!Array.from(l.values()).some(M=>M.value)),g=Y(()=>{const M=f.value[f.value.length-1].layer;return{"--v-layout-left":Re(M.left),"--v-layout-right":Re(M.right),"--v-layout-top":Re(M.top),"--v-layout-bottom":Re(M.bottom),...h.value?void 0:{transition:"none"}}}),m=Y(()=>f.value.slice(1).map((M,T)=>{let{id:L}=M;const{layer:_}=f.value[T],C=s.get(L);return{id:L,..._,size:Number(C.value)}})),p=M=>m.value.find(T=>T.id===M),v=Ot("createLayout"),x=Pe(!1);sr(()=>{x.value=!0}),Tt(sa,{register:(M,T)=>{let{id:L,order:_,position:C,layoutSize:P,elementSize:D,active:F,disableTransitions:W,absolute:N}=T;o.set(L,_),r.set(L,C),s.set(L,P),a.set(L,F),W&&l.set(L,W);const I=As(Rp,v==null?void 0:v.vnode).indexOf(M);I>-1?i.value.splice(I,0,L):i.value.push(L);const V=Y(()=>m.value.findIndex(de=>de.id===L)),$=Y(()=>n.value+f.value.length*2-V.value*2),H=Y(()=>{const de=C.value==="left"||C.value==="right",se=C.value==="right",pe=C.value==="bottom",Me={[C.value]:0,zIndex:$.value,transform:`translate${de?"X":"Y"}(${(F.value?0:-110)*(se||pe?-1:1)}%)`,position:N.value||n.value!==Qu?"absolute":"fixed",...h.value?void 0:{transition:"none"}};if(!x.value)return Me;if(V.value<0)throw new Error(`Layout item "${L}" is missing`);const U=m.value[V.value];if(!U)throw new Error(`Could not find layout item "${L}`);const z=d.value.get(L);return z&&(U[z.position]+=z.amount),{...Me,height:de?`calc(100% - ${U.top}px - ${U.bottom}px)`:D.value?`${D.value}px`:void 0,left:se?void 0:`${U.left}px`,right:se?`${U.right}px`:void 0,top:C.value!=="bottom"?`${U.top}px`:void 0,bottom:C.value!=="top"?`${U.bottom}px`:void 0,width:de?D.value?`${D.value}px`:void 0:`calc(100% - ${U.left}px - ${U.right}px)`}}),J=Y(()=>({zIndex:$.value-1}));return{layoutItemStyles:H,layoutItemScrimStyles:J,zIndex:$}},unregister:M=>{o.delete(M),r.delete(M),s.delete(M),a.delete(M),l.delete(M),i.value=i.value.filter(T=>T!==M)},mainStyles:g,getLayoutItem:p,items:m,layoutRect:u,rootZIndex:n});const w=Y(()=>["v-layout",{"v-layout--full-height":t.fullHeight}]),y=Y(()=>({zIndex:n.value,position:e?"relative":void 0,overflow:e?"hidden":void 0}));return{layoutClasses:w,layoutStyles:y,getLayoutItem:p,items:m,layoutRect:u,layoutRef:c}}const mr=2.4,ef=.2126729,tf=.7151522,nf=.072175,S0=.55,M0=.58,w0=.57,E0=.62,_o=.03,rf=1.45,C0=5e-4,T0=1.25,A0=1.25,sf=.078,of=12.82051282051282,xo=.06,af=.001;function lf(t,e){const n=((t>>16&255)/255)**mr,i=((t>>8&255)/255)**mr,r=((t>>0&255)/255)**mr,s=((e>>16&255)/255)**mr,o=((e>>8&255)/255)**mr,a=((e>>0&255)/255)**mr;let l=n*ef+i*tf+r*nf,c=s*ef+o*tf+a*nf;if(l<=_o&&(l+=(_o-l)**rf),c<=_o&&(c+=(_o-c)**rf),Math.abs(c-l)<C0)return 0;let u;if(c>l){const d=(c**S0-l**M0)*T0;u=d<af?0:d<sf?d-d*of*xo:d-xo}else{const d=(c**E0-l**w0)*A0;u=d>-af?0:d>-sf?d-d*of*xo:d+xo}return u*100}const oa=Symbol.for("vuetify:theme"),Wt=Je({theme:String},"theme"),ds={defaultTheme:"light",variations:{colors:[],lighten:0,darken:0},themes:{light:{dark:!1,colors:{background:"#FFFFFF",surface:"#FFFFFF","surface-variant":"#424242","on-surface-variant":"#EEEEEE",primary:"#6200EE","primary-darken-1":"#3700B3",secondary:"#03DAC6","secondary-darken-1":"#018786",error:"#B00020",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#000000","border-opacity":.12,"high-emphasis-opacity":.87,"medium-emphasis-opacity":.6,"disabled-opacity":.38,"idle-opacity":.04,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.12,"dragged-opacity":.08,"kbd-background-color":"#212529","kbd-color":"#FFFFFF","code-background-color":"#C2C2C2"}},dark:{dark:!0,colors:{background:"#121212",surface:"#212121","surface-variant":"#BDBDBD","on-surface-variant":"#424242",primary:"#BB86FC","primary-darken-1":"#3700B3",secondary:"#03DAC5","secondary-darken-1":"#03DAC5",error:"#CF6679",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#FFFFFF","border-opacity":.12,"high-emphasis-opacity":.87,"medium-emphasis-opacity":.6,"disabled-opacity":.38,"idle-opacity":.1,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.16,"dragged-opacity":.08,"kbd-background-color":"#212529","kbd-color":"#FFFFFF","code-background-color":"#B7B7B7"}}}};function L0(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:ds;if(!t)return{...ds,isDisabled:!0};const e={};for(const[s,o]of Object.entries((n=t.themes)!=null?n:{})){var n,i,r;const a=o.dark?(i=ds.themes)==null?void 0:i.dark:(r=ds.themes)==null?void 0:r.light;e[s]=Xn(a,o)}return Xn(ds,{...t,themes:e})}function P0(t,e){const n=t._context.provides.usehead,i=Ct(L0(e)),r=Pe(i.defaultTheme),s=Pe(i.themes),o=Y(()=>{const u={};for(const[d,f]of Object.entries(s.value)){const h=u[d]={...f,colors:{...f.colors}};if(i.variations)for(const g of i.variations.colors){const m=h.colors[g];for(const p of["lighten","darken"]){const v=p==="lighten"?a0:l0;for(const x of $_(i.variations[p],1))h.colors[`${g}-${p}-${x}`]=o0(v(ia(m),x))}}for(const g of Object.keys(h.colors)){if(/^on-[a-z]/.test(g)||h.colors[`on-${g}`])continue;const m=`on-${g}`,p=ia(h.colors[g]),v=Math.abs(lf(0,p)),x=Math.abs(lf(16777215,p));h.colors[m]=x>Math.min(v,50)?"#fff":"#000"}}return u}),a=Y(()=>o.value[r.value]),l=Y(()=>{const u=[];a.value.dark&&gr(u,":root",["color-scheme: dark"]);for(const[g,m]of Object.entries(o.value)){const{variables:p,dark:v}=m;gr(u,`.v-theme--${g}`,[`color-scheme: ${v?"dark":"normal"}`,...R0(m),...Object.keys(p).map(x=>{const w=p[x],y=typeof w=="string"&&w.startsWith("#")?Tp(w):void 0,M=y?`${y.r}, ${y.g}, ${y.b}`:void 0;return`--v-${x}: ${M!=null?M:w}`})])}const d=[],f=[],h=new Set(Object.values(o.value).flatMap(g=>Object.keys(g.colors)));for(const g of h)/^on-[a-z]/.test(g)?gr(f,`.${g}`,[`color: rgb(var(--v-theme-${g})) !important`]):(gr(d,`.bg-${g}`,[`--v-theme-overlay-multiplier: var(--v-theme-${g}-overlay-multiplier)`,`background: rgb(var(--v-theme-${g})) !important`,`color: rgb(var(--v-theme-on-${g})) !important`]),gr(f,`.text-${g}`,[`color: rgb(var(--v-theme-${g})) !important`]),gr(f,`.border-${g}`,[`--v-border-color: var(--v-theme-${g})`]));return u.push(...d,...f),u.map((g,m)=>m===0?g:`    ${g}`).join("")});if(n)n.addHeadObjs(Y(()=>{const u={children:l.value,type:"text/css",id:"vuetify-theme-stylesheet"};return i.cspNonce&&(u.nonce=i.cspNonce),{style:[u]}})),ct&&_i(()=>n.updateDOM());else{let d=function(){if(!i.isDisabled){if(typeof document<"u"&&!u){const f=document.createElement("style");f.type="text/css",f.id="vuetify-theme-stylesheet",i.cspNonce&&f.setAttribute("nonce",i.cspNonce),u=f,document.head.appendChild(u)}u&&(u.innerHTML=l.value)}},u=ct?document.getElementById("vuetify-theme-stylesheet"):null;Ke(l,d,{immediate:!0})}const c=Y(()=>i.isDisabled?void 0:`v-theme--${r.value}`);return{isDisabled:i.isDisabled,name:r,themes:s,current:a,computedThemes:o,themeClasses:c,styles:l,global:{name:r,current:a}}}function $t(t){Ot("provideTheme");const e=it(oa,null);if(!e)throw new Error("Could not find Vuetify theme injection");const n=Y(()=>{var s;return(s=t.theme)!=null?s:e==null?void 0:e.name.value}),i=Y(()=>e.isDisabled?void 0:`v-theme--${n.value}`),r={...e,name:n,themeClasses:i};return Tt(oa,r),r}function gr(t,e,n){t.push(`${e} {
`,...n.map(i=>`  ${i};
`),`}
`)}function R0(t){const e=t.dark?2:1,n=t.dark?1:2,i=[];for(const[r,s]of Object.entries(t.colors)){const o=Tp(s);i.push(`--v-theme-${r}: ${o.r},${o.g},${o.b}`),r.startsWith("on-")||i.push(`--v-theme-${r}-overlay-multiplier: ${c0(s)>.18?e:n}`)}return i}const D0={badge:"Badge",close:"Close",dataIterator:{noResultsText:"No matching records found",loadingText:"Loading items..."},dataTable:{itemsPerPageText:"Rows per page:",ariaLabel:{sortDescending:"Sorted descending.",sortAscending:"Sorted ascending.",sortNone:"Not sorted.",activateNone:"Activate to remove sorting.",activateDescending:"Activate to sort descending.",activateAscending:"Activate to sort ascending."},sortBy:"Sort by"},dataFooter:{itemsPerPageText:"Items per page:",itemsPerPageAll:"All",nextPage:"Next page",prevPage:"Previous page",firstPage:"First page",lastPage:"Last page",pageText:"{0}-{1} of {2}"},datePicker:{itemsSelected:"{0} selected",nextMonthAriaLabel:"Next month",nextYearAriaLabel:"Next year",prevMonthAriaLabel:"Previous month",prevYearAriaLabel:"Previous year"},noDataText:"No data available",carousel:{prev:"Previous visual",next:"Next visual",ariaLabel:{delimiter:"Carousel slide {0} of {1}"}},calendar:{moreEvents:"{0} more"},fileInput:{counter:"{0} files",counterSize:"{0} files ({1} in total)"},timePicker:{am:"AM",pm:"PM"},pagination:{ariaLabel:{root:"Pagination Navigation",next:"Next page",previous:"Previous page",page:"Goto Page {0}",currentPage:"Page {0}, Current Page",first:"First page",last:"Last page"}},rating:{ariaLabel:{item:"Rating {0} of {1}"}}},I0={af:!1,ar:!0,bg:!1,ca:!1,ckb:!1,cs:!1,de:!1,el:!1,en:!1,es:!1,et:!1,fa:!1,fi:!1,fr:!1,hr:!1,hu:!1,he:!0,id:!1,it:!1,ja:!1,ko:!1,lv:!1,lt:!1,nl:!1,no:!1,pl:!1,pt:!1,ro:!1,ru:!1,sk:!1,sl:!1,srCyrl:!1,srLatn:!1,sv:!1,th:!1,tr:!1,az:!1,uk:!1,vi:!1,zhHans:!1,zhHant:!1},Xc=Symbol.for("vuetify:rtl");function F0(t,e){var n;return N0({rtl:{...I0,...(n=e==null?void 0:e.rtl)!=null?n:{}},isRtl:Pe(!1),rtlClasses:Pe("")},t)}function N0(t,e,n){const i=Y(()=>typeof(n==null?void 0:n.rtl)=="boolean"?n.rtl:e.current.value&&t.rtl.hasOwnProperty(e.current.value)?t.rtl[e.current.value]:t.isRtl.value);return{isRtl:i,rtl:t.rtl,rtlClasses:Y(()=>`v-locale--is-${i.value?"rtl":"ltr"}`)}}function no(){const t=it(Xc);if(!t)throw new Error("[Vuetify] Could not find injected rtl instance");return t}const O0=Ze({name:"VApp",props:{...g0({fullHeight:!0}),...Wt()},setup(t,e){let{slots:n}=e;const i=$t(t),{layoutClasses:r,layoutStyles:s,getLayoutItem:o,items:a,layoutRef:l}=b0(t),{rtlClasses:c}=no();return st(()=>{var u;return k("div",{ref:l,class:["v-application",i.themeClasses.value,r.value,c.value],style:s.value},[k("div",{class:"v-application__wrap"},[(u=n.default)==null?void 0:u.call(n)])])}),{getLayoutItem:o,items:a,theme:i}}});function jc(t){return Wc(()=>{const e=[],n={};return t.value.background&&(Ju(t.value.background)?n.backgroundColor=t.value.background:e.push(`bg-${t.value.background}`)),t.value.text&&(Ju(t.value.text)?(n.color=t.value.text,n.caretColor=t.value.text):e.push(`text-${t.value.text}`)),{colorClasses:e,colorStyles:n}})}function Vs(t,e){const n=Y(()=>({text:rt(t)?t.value:e?t[e]:null})),{colorClasses:i,colorStyles:r}=jc(n);return{textColorClasses:i,textColorStyles:r}}function Ln(t,e){const n=Y(()=>({background:rt(t)?t.value:e?t[e]:null})),{colorClasses:i,colorStyles:r}=jc(n);return{backgroundColorClasses:i,backgroundColorStyles:r}}const Dp=Ze({name:"VDivider",props:{color:String,inset:Boolean,length:[Number,String],thickness:[Number,String],vertical:Boolean,...Wt()},setup(t,e){let{attrs:n}=e;const{themeClasses:i}=$t(t),{backgroundColorClasses:r,backgroundColorStyles:s}=Ln(Ve(t,"color")),o=Y(()=>{const a={};return t.length&&(a[t.vertical?"maxHeight":"maxWidth"]=Re(t.length)),t.thickness&&(a[t.vertical?"borderRightWidth":"borderTopWidth"]=Re(t.thickness)),a});return st(()=>k("hr",{class:[{"v-divider":!0,"v-divider--inset":t.inset,"v-divider--vertical":t.vertical},i.value,r.value],style:[o.value,s.value],"aria-orientation":!n.role||n.role==="separator"?t.vertical?"vertical":"horizontal":void 0,role:`${n.role||"separator"}`},null)),{}}});const Wn=rr({name:"VDefaultsProvider",props:{defaults:Object,reset:[Number,String],root:Boolean,scoped:Boolean},setup(t,e){let{slots:n}=e;const{defaults:i,reset:r,root:s,scoped:o}=Th(t);return yi(i,{reset:r,root:s,scoped:o}),()=>{var a;return(a=n.default)==null?void 0:a.call(n)}}});function qt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"top center 0",n=arguments.length>2?arguments[2]:void 0;return Ze({name:t,props:{group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:{type:String,default:n},origin:{type:String,default:e}},setup(i,r){let{slots:s}=r;return()=>{const o=i.group?L_:xi;return Yn(o,{name:t,mode:i.mode,onBeforeEnter(a){a.style.transformOrigin=i.origin},onLeave(a){if(i.leaveAbsolute){const{offsetTop:l,offsetLeft:c,offsetWidth:u,offsetHeight:d}=a;a._transitionInitialStyles={position:a.style.position,top:a.style.top,left:a.style.left,width:a.style.width,height:a.style.height},a.style.position="absolute",a.style.top=`${l}px`,a.style.left=`${c}px`,a.style.width=`${u}px`,a.style.height=`${d}px`}i.hideOnLeave&&a.style.setProperty("display","none","important")},onAfterLeave(a){if(i.leaveAbsolute&&a!=null&&a._transitionInitialStyles){const{position:l,top:c,left:u,width:d,height:f}=a._transitionInitialStyles;delete a._transitionInitialStyles,a.style.position=l||"",a.style.top=c||"",a.style.left=u||"",a.style.width=d||"",a.style.height=f||""}}},s.default)}}})}function Ip(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return Ze({name:t,props:{mode:{type:String,default:n}},setup(i,r){let{slots:s}=r;return()=>Yn(xi,{name:t,...e},s.default)}})}function Fp(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const n=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",i=rn(`offset-${n}`);return{onBeforeEnter(o){o._parent=o.parentNode,o._initialStyle={transition:o.style.transition,overflow:o.style.overflow,[n]:o.style[n]}},onEnter(o){const a=o._initialStyle;o.style.setProperty("transition","none","important"),o.style.overflow="hidden";const l=`${o[i]}px`;o.style[n]="0",o.offsetHeight,o.style.transition=a.transition,t&&o._parent&&o._parent.classList.add(t),requestAnimationFrame(()=>{o.style[n]=l})},onAfterEnter:s,onEnterCancelled:s,onLeave(o){o._initialStyle={transition:"",overflow:o.style.overflow,[n]:o.style[n]},o.style.overflow="hidden",o.style[n]=`${o[i]}px`,o.offsetHeight,requestAnimationFrame(()=>o.style[n]="0")},onAfterLeave:r,onLeaveCancelled:r};function r(o){t&&o._parent&&o._parent.classList.remove(t),s(o)}function s(o){const a=o._initialStyle[n];o.style.overflow=o._initialStyle.overflow,a!=null&&(o.style[n]=a),delete o._initialStyle}}qt("fab-transition","center center","out-in");qt("dialog-bottom-transition");qt("dialog-top-transition");qt("fade-transition");qt("scale-transition");qt("scroll-x-transition");qt("scroll-x-reverse-transition");qt("scroll-y-transition");qt("scroll-y-reverse-transition");qt("slide-x-transition");qt("slide-x-reverse-transition");qt("slide-y-transition");qt("slide-y-reverse-transition");const B0=Ip("expand-transition",Fp());Ip("expand-x-transition",Fp("",!0));const Jl=Symbol.for("vuetify:list");function Np(){const t=it(Jl,{hasPrepend:Pe(!1),updateHasPrepend:()=>null}),e={hasPrepend:Pe(!1),updateHasPrepend:n=>{n&&(e.hasPrepend.value=n)}};return Tt(Jl,e),t}function Op(){return it(Jl,null)}const z0={collapse:"mdi-chevron-up",complete:"mdi-check",cancel:"mdi-close-circle",close:"mdi-close",delete:"mdi-close-circle",clear:"mdi-close-circle",success:"mdi-check-circle",info:"mdi-information",warning:"mdi-alert-circle",error:"mdi-close-circle",prev:"mdi-chevron-left",next:"mdi-chevron-right",checkboxOn:"mdi-checkbox-marked",checkboxOff:"mdi-checkbox-blank-outline",checkboxIndeterminate:"mdi-minus-box",delimiter:"mdi-circle",sort:"mdi-arrow-up",expand:"mdi-chevron-down",menu:"mdi-menu",subgroup:"mdi-menu-down",dropdown:"mdi-menu-down",radioOn:"mdi-radiobox-marked",radioOff:"mdi-radiobox-blank",edit:"mdi-pencil",ratingEmpty:"mdi-star-outline",ratingFull:"mdi-star",ratingHalf:"mdi-star-half-full",loading:"mdi-cached",first:"mdi-page-first",last:"mdi-page-last",unfold:"mdi-unfold-more-horizontal",file:"mdi-paperclip",plus:"mdi-plus",minus:"mdi-minus"},k0={component:t=>Yn(Bp,{...t,class:"mdi"})},bt=[String,Function,Object],Ql=Symbol.for("vuetify:icons"),Ea=Je({icon:{type:bt,required:!0},tag:{type:String,required:!0}},"icon"),U0=Ze({name:"VComponentIcon",props:Ea(),setup(t){return()=>k(t.tag,null,{default:()=>[k(t.icon,null,null)]})}}),V0=Ze({name:"VSvgIcon",inheritAttrs:!1,props:Ea(),setup(t,e){let{attrs:n}=e;return()=>k(t.tag,Cn(n,{style:null}),{default:()=>[k("svg",{class:"v-icon__svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":"true"},[k("path",{d:t.icon},null)])]})}});Ze({name:"VLigatureIcon",props:Ea(),setup(t){return()=>k(t.tag,null,{default:()=>[t.icon]})}});const Bp=Ze({name:"VClassIcon",props:Ea(),setup(t){return()=>k(t.tag,{class:t.icon},null)}}),H0={svg:{component:V0},class:{component:Bp}};function G0(t){return Xn({defaultSet:"mdi",sets:{...H0,mdi:k0},aliases:z0},t)}const W0=t=>{const e=it(Ql);if(!e)throw new Error("Missing Vuetify Icons provide!");return{iconData:Y(()=>{const i=rt(t)?t.value:t.icon;if(!i)throw new Error("Icon value is undefined or null");let r=i;if(typeof i=="string"&&i.includes("$")){var s;r=(s=e.aliases)==null?void 0:s[i.slice(i.indexOf("$")+1)]}if(!r)throw new Error(`Could not find aliased icon "${i}"`);if(typeof r!="string")return{component:U0,icon:r};const o=Object.keys(e.sets).find(c=>typeof r=="string"&&r.startsWith(`${c}:`)),a=o?r.slice(o.length+1):r;return{component:e.sets[o!=null?o:e.defaultSet].component,icon:a}})}},It=Je({tag:{type:String,default:"div"}},"tag");function Ki(t,e,n){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:l=>l,r=arguments.length>4&&arguments[4]!==void 0?arguments[4]:l=>l;const s=Ot("useProxiedModel"),o=Y(()=>{var l,c;return t[e],!!(s!=null&&(l=s.vnode.props)!=null&&l.hasOwnProperty(e)||s!=null&&(c=s.vnode.props)!=null&&c.hasOwnProperty(Gc(e)))}),a=Pe(i(t[e]));return Y({get(){return o.value?i(t[e]):a.value},set(l){(o.value?i(t[e]):a.value)!==l&&(a.value=l,s==null||s.emit(`update:${e}`,r(l)))}})}const $0={open:t=>{let{id:e,value:n,opened:i,parents:r}=t;if(n){const s=new Set;s.add(e);let o=r.get(e);for(;o!=null;)s.add(o),o=r.get(o);return s}else return i.delete(e),i},select:()=>null},zp={open:t=>{let{id:e,value:n,opened:i,parents:r}=t;if(n){let s=r.get(e);for(i.add(e);s!=null&&s!==e;)i.add(s),s=r.get(s);return i}else i.delete(e);return i},select:()=>null},q0={open:zp.open,select:t=>{let{id:e,value:n,opened:i,parents:r}=t;if(!n)return i;const s=[];let o=r.get(e);for(;o!=null;)s.push(o),o=r.get(o);return new Set(s)}},Yc=t=>{const e={select:n=>{let{id:i,value:r,selected:s}=n;if(t&&!r){const o=Array.from(s.entries()).reduce((a,l)=>{let[c,u]=l;return u==="on"?[...a,c]:a},[]);if(o.length===1&&o[0]===i)return s}return s.set(i,r?"on":"off"),s},in:(n,i,r)=>{let s=new Map;for(const o of n||[])s=e.select({id:o,value:!0,selected:new Map(s),children:i,parents:r});return s},out:n=>{const i=[];for(const[r,s]of n.entries())s==="on"&&i.push(r);return i}};return e},kp=t=>{const e=Yc(t);return{select:i=>{let{selected:r,id:s,...o}=i;const a=r.has(s)?new Map([[s,r.get(s)]]):new Map;return e.select({...o,id:s,selected:a})},in:(i,r,s)=>{let o=new Map;return i!=null&&i.length&&(o=e.in(i.slice(0,1),r,s)),o},out:(i,r,s)=>e.out(i,r,s)}},X0=t=>{const e=Yc(t);return{select:i=>{let{id:r,selected:s,children:o,...a}=i;return o.has(r)?s:e.select({id:r,selected:s,children:o,...a})},in:e.in,out:e.out}},j0=t=>{const e=kp(t);return{select:i=>{let{id:r,selected:s,children:o,...a}=i;return o.has(r)?s:e.select({id:r,selected:s,children:o,...a})},in:e.in,out:e.out}},Y0=t=>{const e={select:n=>{let{id:i,value:r,selected:s,children:o,parents:a}=n;const l=new Map(s),c=[i];for(;c.length;){const d=c.shift();s.set(d,r?"on":"off"),o.has(d)&&c.push(...o.get(d))}let u=a.get(i);for(;u;){const d=o.get(u),f=d.every(g=>s.get(g)==="on"),h=d.every(g=>!s.has(g)||s.get(g)==="off");s.set(u,f?"on":h?"off":"indeterminate"),u=a.get(u)}return t&&!r&&Array.from(s.entries()).reduce((f,h)=>{let[g,m]=h;return m==="on"?[...f,g]:f},[]).length===0?l:s},in:(n,i,r)=>{let s=new Map;for(const o of n||[])s=e.select({id:o,value:!0,selected:new Map(s),children:i,parents:r});return s},out:(n,i)=>{const r=[];for(const[s,o]of n.entries())o==="on"&&!i.has(s)&&r.push(s);return r}};return e},Hs=Symbol.for("vuetify:nested"),Up={id:Pe(),root:{register:()=>null,unregister:()=>null,parents:Pe(new Map),children:Pe(new Map),open:()=>null,select:()=>null,opened:Pe(new Set),selected:Pe(new Map),selectedValues:Pe([])}},K0=Je({selectStrategy:[String,Function],openStrategy:[String,Function],opened:Array,selected:Array,mandatory:Boolean},"nested"),Z0=t=>{let e=!1;const n=Pe(new Map),i=Pe(new Map),r=Ki(t,"opened",t.opened,d=>new Set(d),d=>[...d.values()]),s=Y(()=>{if(typeof t.selectStrategy=="object")return t.selectStrategy;switch(t.selectStrategy){case"single-leaf":return j0(t.mandatory);case"leaf":return X0(t.mandatory);case"independent":return Yc(t.mandatory);case"single-independent":return kp(t.mandatory);case"classic":default:return Y0(t.mandatory)}}),o=Y(()=>{if(typeof t.openStrategy=="function")return t.openStrategy;switch(t.openStrategy){case"list":return q0;case"single":return $0;case"multiple":default:return zp}}),a=Ki(t,"selected",t.selected,d=>s.value.in(d,n.value,i.value),d=>s.value.out(d,n.value,i.value));yn(()=>{e=!0});function l(d){const f=[];let h=d;for(;h!=null;)f.unshift(h),h=i.value.get(h);return f}const c=Ot("nested"),u={id:Pe(),root:{opened:r,selected:a,selectedValues:Y(()=>{const d=[];for(const[f,h]of a.value.entries())h==="on"&&d.push(f);return d}),register:(d,f,h)=>{f&&d!==f&&i.value.set(d,f),h&&n.value.set(d,[]),f!=null&&n.value.set(f,[...n.value.get(f)||[],d])},unregister:d=>{if(e)return;n.value.delete(d);const f=i.value.get(d);if(f){var h;const g=(h=n.value.get(f))!=null?h:[];n.value.set(f,g.filter(m=>m!==d))}i.value.delete(d),r.value.delete(d)},open:(d,f,h)=>{c.emit("click:open",{id:d,value:f,path:l(d),event:h});const g=o.value.open({id:d,value:f,opened:new Set(r.value),children:n.value,parents:i.value,event:h});g&&(r.value=g)},select:(d,f,h)=>{c.emit("click:select",{id:d,value:f,path:l(d),event:h});const g=s.value.select({id:d,value:f,selected:new Map(a.value),children:n.value,parents:i.value,event:h});g&&(a.value=g);const m=o.value.select({id:d,value:f,selected:new Map(a.value),opened:new Set(r.value),children:n.value,parents:i.value,event:h});m&&(r.value=m)},children:n,parents:i}};return Tt(Hs,u),u.root},Vp=(t,e)=>{const n=it(Hs,Up),i=Y(()=>{var s;return(s=t.value)!=null?s:eo().toString()}),r={...n,id:i,open:(s,o)=>n.root.open(i.value,s,o),isOpen:Y(()=>n.root.opened.value.has(i.value)),parent:Y(()=>n.root.parents.value.get(i.value)),select:(s,o)=>n.root.select(i.value,s,o),isSelected:Y(()=>n.root.selected.value.get(i.value)==="on"),isIndeterminate:Y(()=>n.root.selected.value.get(i.value)==="indeterminate"),isLeaf:Y(()=>!n.root.children.value.get(i.value)),isGroupActivator:n.isGroupActivator};return!n.isGroupActivator&&n.root.register(i.value,n.id.value,e),yn(()=>{!n.isGroupActivator&&n.root.unregister(i.value)}),e&&Tt(Hs,r),r},J0=()=>{const t=it(Hs,Up);Tt(Hs,{...t,isGroupActivator:!0})},Q0=Ze({name:"VListGroupActivator",setup(t,e){let{slots:n}=e;return J0(),()=>{var i;return(i=n.default)==null?void 0:i.call(n)}}}),ex=Je({activeColor:String,color:String,collapseIcon:{type:bt,default:"$collapse"},expandIcon:{type:bt,default:"$expand"},prependIcon:bt,appendIcon:bt,fluid:Boolean,subgroup:Boolean,value:null,...It()}),Hp=ts()({name:"VListGroup",props:{title:String,...ex()},setup(t,e){let{slots:n}=e;const{isOpen:i,open:r}=Vp(Ve(t,"value"),!0),s=Op(),o=c=>{r(!i.value,c)},a=Y(()=>({onClick:o,class:"v-list-group__header"})),l=Y(()=>i.value?t.collapseIcon:t.expandIcon);return st(()=>{var c;return k(t.tag,{class:["v-list-group",{"v-list-group--prepend":s==null?void 0:s.hasPrepend.value,"v-list-group--fluid":t.fluid,"v-list-group--subgroup":t.subgroup}]},{default:()=>[n.activator&&k(Wn,{defaults:{VListItem:{active:i.value,activeColor:t.activeColor,color:t.color,prependIcon:t.prependIcon||t.subgroup&&l.value,appendIcon:t.appendIcon||!t.subgroup&&l.value,title:t.title,value:t.value}}},{default:()=>[k(Q0,null,{default:()=>[n.activator({props:a.value,isOpen:i})]})]}),k(B0,null,{default:()=>[Yi(k("div",{class:"v-list-group__items"},[(c=n.default)==null?void 0:c.call(n)]),[[Vc,i.value]])]})]})}),{}}});function tx(t){return yp(t,Object.keys(Hp.props))}const nx=["x-small","small","default","large","x-large"],ns=Je({size:{type:[String,Number],default:"default"}},"size");function io(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:or();return Wc(()=>{let n,i;return ta(nx,t.size)?n=`${e}--size-${t.size}`:t.size&&(i={width:Re(t.size),height:Re(t.size)}),{sizeClasses:n,sizeStyles:i}})}const ix=Je({color:String,start:Boolean,end:Boolean,icon:bt,...ns(),...It({tag:"i"}),...Wt()},"v-icon"),qi=Ze({name:"VIcon",props:ix(),setup(t,e){let{attrs:n,slots:i}=e,r;i.default&&(r=Y(()=>{var u,d;const f=(u=i.default)==null?void 0:u.call(i);if(!!f)return(d=bp(f).filter(h=>h.children&&typeof h.children=="string")[0])==null?void 0:d.children}));const{themeClasses:s}=$t(t),{iconData:o}=W0(r||t),{sizeClasses:a}=io(t),{textColorClasses:l,textColorStyles:c}=Vs(Ve(t,"color"));return st(()=>k(o.value.component,{tag:t.tag,icon:o.value.icon,class:["v-icon","notranslate",s.value,a.value,l.value,{"v-icon--clickable":!!n.onClick,"v-icon--start":t.start,"v-icon--end":t.end}],style:[a.value?void 0:{fontSize:Re(t.size),height:Re(t.size),width:Re(t.size)},c.value],"aria-hidden":"true"},null)),{}}});const ar=Je({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function lr(t){return{dimensionStyles:Y(()=>({height:Re(t.height),maxHeight:Re(t.maxHeight),maxWidth:Re(t.maxWidth),minHeight:Re(t.minHeight),minWidth:Re(t.minWidth),width:Re(t.width)}))}}function rx(t){return{aspectStyles:Y(()=>{const e=Number(t.aspectRatio);return e?{paddingBottom:String(1/e*100)+"%"}:void 0})}}const sx=Ze({name:"VResponsive",props:{aspectRatio:[String,Number],contentClass:String,...ar()},setup(t,e){let{slots:n}=e;const{aspectStyles:i}=rx(t),{dimensionStyles:r}=lr(t);return st(()=>{var s;return k("div",{class:"v-responsive",style:r.value},[k("div",{class:"v-responsive__sizer",style:i.value},null),(s=n.additional)==null?void 0:s.call(n),n.default&&k("div",{class:["v-responsive__content",t.contentClass]},[n.default()])])}),{}}});function ox(t,e){if(!Hc)return;const n=e.modifiers||{},i=e.value,{handler:r,options:s}=typeof i=="object"?i:{handler:i,options:{}},o=new IntersectionObserver(function(){var a;let l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],c=arguments.length>1?arguments[1]:void 0;const u=(a=t._observe)==null?void 0:a[e.instance.$.uid];if(!u)return;const d=l.some(f=>f.isIntersecting);r&&(!n.quiet||u.init)&&(!n.once||d||u.init)&&r(d,l,c),d&&n.once?Gp(t,e):u.init=!0},s);t._observe=Object(t._observe),t._observe[e.instance.$.uid]={init:!1,observer:o},o.observe(t)}function Gp(t,e){var n;const i=(n=t._observe)==null?void 0:n[e.instance.$.uid];!i||(i.observer.unobserve(t),delete t._observe[e.instance.$.uid])}const ax={mounted:ox,unmounted:Gp},lx=ax,Wp=Je({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:t=>t!==!0}},"transition"),ys=(t,e)=>{var n;let{slots:i}=e;const{transition:r,...s}=t;if(!r||typeof r=="boolean")return(n=i.default)==null?void 0:n.call(i);const{component:o=xi,...a}=typeof r=="object"?r:{};return Yn(o,Cn(typeof r=="string"?{name:r}:a,s),i)},Kc=Ze({name:"VImg",directives:{intersect:lx},props:{aspectRatio:[String,Number],alt:String,cover:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},srcset:String,width:[String,Number],...Wp()},emits:["loadstart","load","error"],setup(t,e){let{emit:n,slots:i}=e;const r=Pe(""),s=Pe(),o=Pe(t.eager?"loading":"idle"),a=Pe(),l=Pe(),c=Y(()=>t.src&&typeof t.src=="object"?{src:t.src.src,srcset:t.srcset||t.src.srcset,lazySrc:t.lazySrc||t.src.lazySrc,aspect:Number(t.aspectRatio||t.src.aspect)}:{src:t.src,srcset:t.srcset,lazySrc:t.lazySrc,aspect:Number(t.aspectRatio||0)}),u=Y(()=>c.value.aspect||a.value/l.value||0);Ke(()=>t.src,()=>{d(o.value!=="idle")}),Dc(()=>d());function d(L){if(!(t.eager&&L)&&!(Hc&&!L&&!t.eager)){if(o.value="loading",c.value.lazySrc){const _=new Image;_.src=c.value.lazySrc,m(_,null)}!c.value.src||xn(()=>{var _,C;if(n("loadstart",((_=s.value)==null?void 0:_.currentSrc)||c.value.src),(C=s.value)!=null&&C.complete){if(s.value.naturalWidth||h(),o.value==="error")return;u.value||m(s.value,null),f()}else u.value||m(s.value),g()})}}function f(){var L;g(),o.value="loaded",n("load",((L=s.value)==null?void 0:L.currentSrc)||c.value.src)}function h(){var L;o.value="error",n("error",((L=s.value)==null?void 0:L.currentSrc)||c.value.src)}function g(){const L=s.value;L&&(r.value=L.currentSrc||L.src)}function m(L){let _=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const C=()=>{const{naturalHeight:P,naturalWidth:D}=L;P||D?(a.value=D,l.value=P):!L.complete&&o.value==="loading"&&_!=null?setTimeout(C,_):(L.currentSrc.endsWith(".svg")||L.currentSrc.startsWith("data:image/svg+xml"))&&(a.value=1,l.value=1)};C()}const p=Y(()=>({"v-img__img--cover":t.cover,"v-img__img--contain":!t.cover})),v=Y(()=>{var L;if(!c.value.src||o.value==="idle")return;const _=Yn("img",{class:["v-img__img",p.value],src:c.value.src,srcset:c.value.srcset,alt:"",sizes:t.sizes,ref:s,onLoad:f,onError:h}),C=(L=i.sources)==null?void 0:L.call(i);return k(ys,{transition:t.transition,appear:!0},{default:()=>[Yi(C?k("picture",{class:"v-img__picture"},[C,_]):_,[[Vc,o.value==="loaded"]])]})}),x=Y(()=>k(ys,{transition:t.transition},{default:()=>[c.value.lazySrc&&o.value!=="loaded"&&k("img",{class:["v-img__img","v-img__img--preload",p.value],src:c.value.lazySrc,alt:""},null)]})),w=Y(()=>{if(!!i.placeholder)return k(ys,{transition:t.transition,appear:!0},{default:()=>[(o.value==="loading"||o.value==="error"&&!i.error)&&k("div",{class:"v-img__placeholder"},[i.placeholder()])]})}),y=Y(()=>{if(!!i.error)return k(ys,{transition:t.transition,appear:!0},{default:()=>[o.value==="error"&&k("div",{class:"v-img__error"},[i.error()])]})}),M=Y(()=>{if(!!t.gradient)return k("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${t.gradient})`}},null)}),T=Pe(!1);{const L=Ke(u,_=>{_&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{T.value=!0})}),L())})}return st(()=>Yi(k(sx,{class:["v-img",{"v-img--booting":!T.value}],style:{width:Re(t.width==="auto"?a.value:t.width)},aspectRatio:u.value,"aria-label":t.alt,role:t.alt?"img":void 0},{additional:()=>[v.value,x.value,M.value,w.value,y.value],default:i.default}),[[Js("intersect"),{handler:d,options:t.options},null,{once:!0}]])),{currentSrc:r,image:s,state:o,naturalWidth:a,naturalHeight:l}}}),cx=[null,"default","comfortable","compact"],bi=Je({density:{type:String,default:"default",validator:t=>cx.includes(t)}},"density");function cr(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:or();return{densityClasses:Y(()=>`${e}--density-${t.density}`)}}const Pn=Je({rounded:{type:[Boolean,Number,String],default:void 0}},"rounded");function Kn(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:or();return{roundedClasses:Y(()=>{const i=rt(t)?t.value:t.rounded,r=[];if(i===!0||i==="")r.push(`${e}--rounded`);else if(typeof i=="string"||i===0)for(const s of String(i).split(" "))r.push(`rounded-${s}`);return r})}}const ux=Je({color:String,start:Boolean,end:Boolean,icon:bt,image:String,...bi(),...Pn(),...ns(),...It()}),aa=Ze({name:"VAvatar",props:ux(),setup(t,e){let{slots:n}=e;const{backgroundColorClasses:i,backgroundColorStyles:r}=Ln(Ve(t,"color")),{densityClasses:s}=cr(t),{roundedClasses:o}=Kn(t),{sizeClasses:a,sizeStyles:l}=io(t);return st(()=>{var c;return k(t.tag,{class:["v-avatar",{"v-avatar--start":t.start,"v-avatar--end":t.end},i.value,s.value,o.value,a.value],style:[r.value,l.value]},{default:()=>[t.image?k(Kc,{src:t.image,alt:""},null):t.icon?k(qi,{icon:t.icon},null):(c=n.default)==null?void 0:c.call(n)]})}),{}}}),fx=to("v-list-item-subtitle"),dx=to("v-list-item-title");const ec=Symbol("rippleStop"),hx=80;function cf(t,e){t.style.transform=e,t.style.webkitTransform=e}function $a(t,e){t.style.opacity=`calc(${e} * var(--v-theme-overlay-multiplier))`}function tc(t){return t.constructor.name==="TouchEvent"}function $p(t){return t.constructor.name==="KeyboardEvent"}const px=function(t,e){var n;let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=0,s=0;if(!$p(t)){const f=e.getBoundingClientRect(),h=tc(t)?t.touches[t.touches.length-1]:t;r=h.clientX-f.left,s=h.clientY-f.top}let o=0,a=.3;(n=e._ripple)!=null&&n.circle?(a=.15,o=e.clientWidth/2,o=i.center?o:o+Math.sqrt((r-o)**2+(s-o)**2)/4):o=Math.sqrt(e.clientWidth**2+e.clientHeight**2)/2;const l=`${(e.clientWidth-o*2)/2}px`,c=`${(e.clientHeight-o*2)/2}px`,u=i.center?l:`${r-o}px`,d=i.center?c:`${s-o}px`;return{radius:o,scale:a,x:u,y:d,centerX:l,centerY:c}},la={show(t,e){var n;let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!(e!=null&&(n=e._ripple)!=null&&n.enabled))return;const r=document.createElement("span"),s=document.createElement("span");r.appendChild(s),r.className="v-ripple__container",i.class&&(r.className+=` ${i.class}`);const{radius:o,scale:a,x:l,y:c,centerX:u,centerY:d}=px(t,e,i),f=`${o*2}px`;s.className="v-ripple__animation",s.style.width=f,s.style.height=f,e.appendChild(r);const h=window.getComputedStyle(e);h&&h.position==="static"&&(e.style.position="relative",e.dataset.previousPosition="static"),s.classList.add("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--visible"),cf(s,`translate(${l}, ${c}) scale3d(${a},${a},${a})`),$a(s,0),s.dataset.activated=String(performance.now()),setTimeout(()=>{s.classList.remove("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--in"),cf(s,`translate(${u}, ${d}) scale3d(1,1,1)`),$a(s,.08)},0)},hide(t){var e;if(!(t!=null&&(e=t._ripple)!=null&&e.enabled))return;const n=t.getElementsByClassName("v-ripple__animation");if(n.length===0)return;const i=n[n.length-1];if(i.dataset.isHiding)return;i.dataset.isHiding="true";const r=performance.now()-Number(i.dataset.activated),s=Math.max(250-r,0);setTimeout(()=>{i.classList.remove("v-ripple__animation--in"),i.classList.add("v-ripple__animation--out"),$a(i,0),setTimeout(()=>{t.getElementsByClassName("v-ripple__animation").length===1&&t.dataset.previousPosition&&(t.style.position=t.dataset.previousPosition,delete t.dataset.previousPosition),i.parentNode&&t.removeChild(i.parentNode)},300)},s)}};function qp(t){return typeof t>"u"||!!t}function Gs(t){const e={},n=t.currentTarget;if(!(!(n!=null&&n._ripple)||n._ripple.touched||t[ec])){if(t[ec]=!0,tc(t))n._ripple.touched=!0,n._ripple.isTouch=!0;else if(n._ripple.isTouch)return;if(e.center=n._ripple.centered||$p(t),n._ripple.class&&(e.class=n._ripple.class),tc(t)){if(n._ripple.showTimerCommit)return;n._ripple.showTimerCommit=()=>{la.show(t,n,e)},n._ripple.showTimer=window.setTimeout(()=>{var i;n!=null&&(i=n._ripple)!=null&&i.showTimerCommit&&(n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null)},hx)}else la.show(t,n,e)}}function uf(t){t[ec]=!0}function Ht(t){const e=t.currentTarget;if(!(!e||!e._ripple)){if(window.clearTimeout(e._ripple.showTimer),t.type==="touchend"&&e._ripple.showTimerCommit){e._ripple.showTimerCommit(),e._ripple.showTimerCommit=null,e._ripple.showTimer=window.setTimeout(()=>{Ht(t)});return}window.setTimeout(()=>{e._ripple&&(e._ripple.touched=!1)}),la.hide(e)}}function Xp(t){const e=t.currentTarget;!e||!e._ripple||(e._ripple.showTimerCommit&&(e._ripple.showTimerCommit=null),window.clearTimeout(e._ripple.showTimer))}let Ws=!1;function jp(t){!Ws&&(t.keyCode===ju.enter||t.keyCode===ju.space)&&(Ws=!0,Gs(t))}function Yp(t){Ws=!1,Ht(t)}function Kp(t){Ws&&(Ws=!1,Ht(t))}function Zp(t,e,n){var i;const{value:r,modifiers:s}=e,o=qp(r);if(o||la.hide(t),t._ripple=(i=t._ripple)!=null?i:{},t._ripple.enabled=o,t._ripple.centered=s.center,t._ripple.circle=s.circle,Xl(r)&&r.class&&(t._ripple.class=r.class),o&&!n){if(s.stop){t.addEventListener("touchstart",uf,{passive:!0}),t.addEventListener("mousedown",uf);return}t.addEventListener("touchstart",Gs,{passive:!0}),t.addEventListener("touchend",Ht,{passive:!0}),t.addEventListener("touchmove",Xp,{passive:!0}),t.addEventListener("touchcancel",Ht),t.addEventListener("mousedown",Gs),t.addEventListener("mouseup",Ht),t.addEventListener("mouseleave",Ht),t.addEventListener("keydown",jp),t.addEventListener("keyup",Yp),t.addEventListener("blur",Kp),t.addEventListener("dragstart",Ht,{passive:!0})}else!o&&n&&Jp(t)}function Jp(t){t.removeEventListener("mousedown",Gs),t.removeEventListener("touchstart",Gs),t.removeEventListener("touchend",Ht),t.removeEventListener("touchmove",Xp),t.removeEventListener("touchcancel",Ht),t.removeEventListener("mouseup",Ht),t.removeEventListener("mouseleave",Ht),t.removeEventListener("keydown",jp),t.removeEventListener("keyup",Yp),t.removeEventListener("dragstart",Ht),t.removeEventListener("blur",Kp)}function mx(t,e){Zp(t,e,!1)}function gx(t){delete t._ripple,Jp(t)}function vx(t,e){if(e.value===e.oldValue)return;const n=qp(e.oldValue);Zp(t,e,n)}const Zc={mounted:mx,unmounted:gx,updated:vx},_x=["elevated","flat","tonal","outlined","text","plain"];function Jc(t,e){return k(Et,null,[t&&k("span",{key:"overlay",class:`${e}__overlay`},null),k("span",{key:"underlay",class:`${e}__underlay`},null)])}const ro=Je({color:String,variant:{type:String,default:"elevated",validator:t=>_x.includes(t)}},"variant");function Qc(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:or();const n=Y(()=>{const{variant:s}=hn(t);return`${e}--variant-${s}`}),{colorClasses:i,colorStyles:r}=jc(Y(()=>{const{variant:s,color:o}=hn(t);return{[["elevated","flat"].includes(s)?"background":"text"]:o}}));return{colorClasses:i,colorStyles:r,variantClasses:n}}const is=Je({border:[Boolean,Number,String]},"border");function rs(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:or();return{borderClasses:Y(()=>{const i=rt(t)?t.value:t.border,r=[];if(i===!0||i==="")r.push(`${e}--border`);else if(typeof i=="string"||i===0)for(const s of String(i).split(" "))r.push(`border-${s}`);return r})}}const Si=Je({elevation:{type:[Number,String],validator(t){const e=parseInt(t);return!isNaN(e)&&e>=0&&e<=24}}},"elevation");function ur(t){return{elevationClasses:Y(()=>{const n=rt(t)?t.value:t.elevation,i=[];return n==null||i.push(`elevation-${n}`),i})}}function Qp(){var t,e;return(t=Ot("useRouter"))==null||(e=t.proxy)==null?void 0:e.$router}function eu(t,e){const n=wv("RouterLink"),i=Y(()=>!!(t.href||t.to)),r=Y(()=>(i==null?void 0:i.value)||!!(e.onClick||e.onClickOnce));if(typeof n=="string")return{isLink:i,isClickable:r,href:Ve(t,"href")};const s=t.to?n.useLink(t):void 0;return{...s,isLink:i,isClickable:r,href:Y(()=>t.to?s==null?void 0:s.route.value.href:t.href)}}const tu=Je({href:String,replace:Boolean,to:[String,Object]},"router");let qa=!1;function xx(t,e){let n=!1,i,r;ct&&(xn(()=>{window.addEventListener("popstate",s),i=t==null?void 0:t.beforeEach((o,a,l)=>{qa?n?e(l):l():setTimeout(()=>n?e(l):l()),qa=!0}),r=t==null?void 0:t.afterEach(()=>{qa=!1})}),tr(()=>{var o,a;window.removeEventListener("popstate",s),(o=i)==null||o(),(a=r)==null||a()}));function s(o){var a;(a=o.state)!=null&&a.replaced||(n=!0,setTimeout(()=>n=!1))}}const Bi=ts()({name:"VListItem",directives:{Ripple:Zc},props:{active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:bt,disabled:Boolean,lines:String,link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:bt,subtitle:[String,Number,Boolean],title:[String,Number,Boolean],value:null,...is(),...bi(),...ar(),...Si(),...Pn(),...tu(),...It(),...Wt(),...ro({variant:"text"})},setup(t,e){let{attrs:n,slots:i}=e;const r=eu(t,n),s=Y(()=>{var W;return(W=t.value)!=null?W:r.href.value}),{select:o,isSelected:a,isIndeterminate:l,isGroupActivator:c,root:u,parent:d}=Vp(s,!1),f=Op(),h=Y(()=>{var W;return t.active!==!1&&(t.active||((W=r.isExactActive)==null?void 0:W.value)||a.value)}),g=Y(()=>t.link!==!1&&r.isLink.value),m=Y(()=>!t.disabled&&t.link!==!1&&(t.link||r.isClickable.value||t.value!=null&&!!f)),p=Y(()=>t.rounded||t.nav),v=Y(()=>{var W;return{color:h.value&&(W=t.activeColor)!=null?W:t.color,variant:t.variant}});Ke(()=>{var W;return(W=r.isExactActive)==null?void 0:W.value},W=>{W&&d.value!=null&&u.open(d.value,!0)},{immediate:!0});const{themeClasses:x}=$t(t),{borderClasses:w}=rs(t),{colorClasses:y,colorStyles:M,variantClasses:T}=Qc(v),{densityClasses:L}=cr(t),{dimensionStyles:_}=lr(t),{elevationClasses:C}=ur(t),{roundedClasses:P}=Kn(p),D=Y(()=>t.lines?`v-list-item--${t.lines}-line`:void 0),F=Y(()=>({isActive:h.value,select:o,isSelected:a.value,isIndeterminate:l.value}));return st(()=>{var W,N,Q,I,V,$,H;const J=g.value?"a":t.tag,de=!f||a.value||h.value,se=i.title||t.title,pe=i.subtitle||t.subtitle,Me=!!(i.append||t.appendAvatar||t.appendIcon),U=!!(i.prepend||t.prependAvatar||t.prependIcon);return f==null||f.updateHasPrepend(U),Yi(k(J,{class:["v-list-item",{"v-list-item--active":h.value,"v-list-item--disabled":t.disabled,"v-list-item--link":m.value,"v-list-item--nav":t.nav,"v-list-item--prepend":!U&&(f==null?void 0:f.hasPrepend.value),[`${t.activeClass}`]:h.value},x.value,w.value,de?y.value:void 0,L.value,C.value,D.value,P.value,T.value],style:[de?M.value:void 0,_.value],href:r.href.value,tabindex:m.value?0:void 0,onClick:m.value&&(z=>{var oe;c||((oe=r.navigate)==null||oe.call(r,z),t.value!=null&&o(!a.value,z))})},{default:()=>[Jc(m.value||h.value,"v-list-item"),U&&k(Wn,{key:"prepend",defaults:{VAvatar:{density:t.density,image:t.prependAvatar},VIcon:{density:t.density,icon:t.prependIcon},VListItemAction:{start:!0}}},{default:()=>[k("div",{class:"v-list-item__prepend"},[t.prependAvatar&&k(aa,{key:"prepend-avatar"},null),t.prependIcon&&k(qi,{key:"prepend-icon"},null),(W=i.prepend)==null?void 0:W.call(i,F.value)])]}),k("div",{class:"v-list-item__content"},[se&&k(dx,{key:"title"},{default:()=>[(N=(Q=i.title)==null?void 0:Q.call(i,{title:t.title}))!=null?N:t.title]}),pe&&k(fx,{key:"subtitle"},{default:()=>[(I=(V=i.subtitle)==null?void 0:V.call(i,{subtitle:t.subtitle}))!=null?I:t.subtitle]}),($=i.default)==null?void 0:$.call(i,F.value)]),Me&&k(Wn,{key:"append",defaults:{VAvatar:{density:t.density,image:t.appendAvatar},VIcon:{density:t.density,icon:t.appendIcon},VListItemAction:{end:!0}}},{default:()=>[k("div",{class:"v-list-item__append"},[(H=i.append)==null?void 0:H.call(i,F.value),t.appendIcon&&k(qi,{key:"append-icon"},null),t.appendAvatar&&k(aa,{key:"append-avatar"},null)])]})]}),[[Js("ripple"),m.value]])}),{}}}),yx=Ze({name:"VListSubheader",props:{color:String,inset:Boolean,sticky:Boolean,title:String,...It()},setup(t,e){let{slots:n}=e;const{textColorClasses:i,textColorStyles:r}=Vs(Ve(t,"color"));return st(()=>{var s,o;const a=!!(n.default||t.title);return k(t.tag,{class:["v-list-subheader",{"v-list-subheader--inset":t.inset,"v-list-subheader--sticky":t.sticky},i.value],style:{textColorStyles:r}},{default:()=>[a&&k("div",{class:"v-list-subheader__text"},[(s=(o=n.default)==null?void 0:o.call(n))!=null?s:t.title])]})}),{}}}),em=ts()({name:"VListChildren",props:{items:Array},setup(t,e){let{slots:n}=e;return Np(),()=>{var i,r,s;return(i=(r=n.default)==null?void 0:r.call(n))!=null?i:(s=t.items)==null?void 0:s.map(o=>{let{children:a,props:l,type:c,raw:u}=o;if(c==="divider"){var d,f;return(d=(f=n.divider)==null?void 0:f.call(n,{props:l}))!=null?d:k(Dp,l,null)}if(c==="subheader"){var h,g;return(h=(g=n.subheader)==null?void 0:g.call(n,{props:l}))!=null?h:k(yx,l,{default:n.subheader})}const m={subtitle:n.subtitle?x=>{var w;return(w=n.subtitle)==null?void 0:w.call(n,{...x,item:u})}:void 0,prepend:n.prepend?x=>{var w;return(w=n.prepend)==null?void 0:w.call(n,{...x,item:u})}:void 0,append:n.append?x=>{var w;return(w=n.append)==null?void 0:w.call(n,{...x,item:u})}:void 0,default:n.default?x=>{var w;return(w=n.default)==null?void 0:w.call(n,{...x,item:u})}:void 0,title:n.title?x=>{var w;return(w=n.title)==null?void 0:w.call(n,{...x,item:u})}:void 0},[p,v]=tx(l);return a?k(Hp,Cn({value:l==null?void 0:l.value},p),{activator:x=>{let{props:w}=x;return n.header?n.header({...l,...w}):k(Bi,Cn(l,w),m)},default:()=>k(em,{items:a},n)}):n.item?n.item(l):k(Bi,l,m)})}}}),bx=Je({items:{type:Array,default:()=>[]},itemTitle:{type:[String,Array,Function],default:"title"},itemValue:{type:[String,Array,Function],default:"value"},itemChildren:{type:[Boolean,String,Array,Function],default:"children"},itemProps:{type:[Boolean,String,Array,Function],default:"props"},returnObject:Boolean},"item");function Sx(t,e){const n=fs(e,t.itemType,"item"),i=typeof e=="string"?e:fs(e,t.itemTitle),r=fs(e,t.itemValue,void 0),s=fs(e,t.itemChildren),o=t.itemProps===!0?yp(e,["children"])[1]:fs(e,t.itemProps),a={title:i,value:r,...o};return{type:n,title:a.title,value:a.value,props:a,children:n==="item"&&s?tm(t,s):void 0,raw:e}}function tm(t,e){const n=[];for(const i of e)n.push(Sx(t,i));return n}function Mx(t){return{items:Y(()=>tm(t,t.items))}}const ff=ts()({name:"VList",props:{activeColor:String,activeClass:String,bgColor:String,disabled:Boolean,lines:{type:[Boolean,String],default:"one"},nav:Boolean,...K0({selectStrategy:"single-leaf",openStrategy:"list"}),...is(),...bi(),...ar(),...Si(),itemType:{type:String,default:"type"},...bx(),...Pn(),...It(),...Wt(),...ro({variant:"text"})},emits:{"update:selected":t=>!0,"update:opened":t=>!0,"click:open":t=>!0,"click:select":t=>!0},setup(t,e){let{slots:n}=e;const{items:i}=Mx(t),{themeClasses:r}=$t(t),{backgroundColorClasses:s,backgroundColorStyles:o}=Ln(Ve(t,"bgColor")),{borderClasses:a}=rs(t),{densityClasses:l}=cr(t),{dimensionStyles:c}=lr(t),{elevationClasses:u}=ur(t),{roundedClasses:d}=Kn(t),{open:f,select:h}=Z0(t),g=Y(()=>t.lines?`v-list--${t.lines}-line`:void 0),m=Ve(t,"activeColor"),p=Ve(t,"color");return Np(),yi({VListGroup:{activeColor:m,color:p},VListItem:{activeClass:Ve(t,"activeClass"),activeColor:m,color:p,density:Ve(t,"density"),disabled:Ve(t,"disabled"),lines:Ve(t,"lines"),nav:Ve(t,"nav"),variant:Ve(t,"variant")}}),st(()=>k(t.tag,{class:["v-list",{"v-list--disabled":t.disabled,"v-list--nav":t.nav},r.value,s.value,a.value,l.value,u.value,g.value,d.value],style:[o.value,c.value]},{default:()=>[k(em,{items:i.value},n)]})),{open:f,select:h}}});function nm(){const t=Pe(!1);return sr(()=>{window.requestAnimationFrame(()=>{t.value=!0})}),{ssrBootStyles:Y(()=>t.value?void 0:{transition:"none !important"}),isBooted:Zs(t)}}const wx=Ze({name:"VMain",props:{scrollable:Boolean,...It({tag:"main"})},setup(t,e){let{slots:n}=e;const{mainStyles:i}=_0(),{ssrBootStyles:r}=nm();return st(()=>{var s,o;return k(t.tag,{class:["v-main",{"v-main--scrollable":t.scrollable}],style:[i.value,r.value]},{default:()=>[t.scrollable?k("div",{class:"v-main__scroller"},[(s=n.default)==null?void 0:s.call(n)]):(o=n.default)==null?void 0:o.call(n)]})}),{}}});const nc=Symbol.for("vuetify:display"),df={mobileBreakpoint:"lg",thresholds:{xs:0,sm:600,md:960,lg:1280,xl:1920,xxl:2560}},Ex=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:df;return Xn(df,t)};function hf(t){return ct&&!t?window.innerWidth:0}function pf(t){return ct&&!t?window.innerHeight:0}function Cx(){const t=ct?window.navigator.userAgent:"ssr";function e(g){return Boolean(t.match(g))}const n=e(/android/i),i=e(/iphone|ipad|ipod/i),r=e(/cordova/i),s=e(/electron/i),o=e(/chrome/i),a=e(/edge/i),l=e(/firefox/i),c=e(/opera/i),u=e(/win/i),d=e(/mac/i),f=e(/linux/i),h=e(/ssr/i);return{android:n,ios:i,cordova:r,electron:s,chrome:o,edge:a,firefox:l,opera:c,win:u,mac:d,linux:f,touch:k_,ssr:h}}function Tx(t,e){const{thresholds:n,mobileBreakpoint:i}=Ex(t),r=Pe(pf(e)),s=Cx(),o=Ct({}),a=Pe(hf(e));function l(){r.value=pf(),a.value=hf()}return e&&xn(()=>l()),_i(()=>{const c=a.value<n.sm,u=a.value<n.md&&!c,d=a.value<n.lg&&!(u||c),f=a.value<n.xl&&!(d||u||c),h=a.value<n.xxl&&!(f||d||u||c),g=a.value>=n.xxl,m=c?"xs":u?"sm":d?"md":f?"lg":h?"xl":"xxl",p=typeof i=="number"?i:n[i],v=s.ssr?s.android||s.ios||s.opera:a.value<p;o.xs=c,o.sm=u,o.md=d,o.lg=f,o.xl=h,o.xxl=g,o.smAndUp=!c,o.mdAndUp=!(c||u),o.lgAndUp=!(c||u||d),o.xlAndUp=!(c||u||d||f),o.smAndDown=!(d||f||h||g),o.mdAndDown=!(f||h||g),o.lgAndDown=!(h||g),o.xlAndDown=!g,o.name=m,o.height=r.value,o.width=a.value,o.mobile=v,o.mobileBreakpoint=i,o.platform=s,o.thresholds=n}),ct&&window.addEventListener("resize",l,{passive:!0}),Th(o)}function Ax(){const t=it(nc);if(!t)throw new Error("Could not find Vuetify display injection");return t}const mf=Symbol.for("vuetify:locale-adapter"),yo=Symbol.for("vuetify:locale");function Lx(t){return!!t&&t.hasOwnProperty("getScope")&&t.hasOwnProperty("createScope")&&t.hasOwnProperty("createRoot")}function Px(t,e){const n=Lx(e)?e:Ix(e),i=n.createRoot(t);return t==null||t.provide(Xc,F0(i,e)),n}const gf="$vuetify.",vf=(t,e)=>t.replace(/\{(\d+)\}/g,(n,i)=>String(e[+i])),Rx=(t,e,n)=>function(i){for(var r=arguments.length,s=new Array(r>1?r-1:0),o=1;o<r;o++)s[o-1]=arguments[o];if(!i.startsWith(gf))return vf(i,s);const a=i.replace(gf,""),l=t.value&&n.value[t.value],c=e.value&&n.value[e.value];let u=ql(l,a,null);return u||(Gr(`Translation key "${i}" not found in "${t.value}", trying fallback locale`),u=ql(c,a,null)),u||(Zl(`Translation key "${i}" not found in fallback`),u=i),typeof u!="string"&&(Zl(`Translation key "${i}" has a non-string value`),u=i),vf(u,s)};function Dx(t,e){return(n,i)=>new Intl.NumberFormat([t.value,e.value],i).format(n)}function Ix(t){const e=n=>{const i=Pe(n.current),r=Pe(n.fallback),s=Pe(n.messages);return{current:i,fallback:r,messages:s,t:Rx(i,r,s),n:Dx(i,r)}};return{createRoot:n=>{var i,r,s;const o=e({current:(i=t==null?void 0:t.defaultLocale)!=null?i:"en",fallback:(r=t==null?void 0:t.fallbackLocale)!=null?r:"en",messages:(s=t==null?void 0:t.messages)!=null?s:{en:D0}});if(!n)throw new Error("[Vuetify] Could not find default app instance");return n.provide(yo,o),o},getScope:()=>{const n=it(yo);if(!n)throw new Error("[Vuetify] Could not find injected locale instance");return n},createScope:n=>{const i=it(yo);if(!i)throw new Error("[Vuetify] Could not find injected locale instance");const r=e({current:Y(()=>{var s;return(s=n==null?void 0:n.locale)!=null?s:i.current.value}),fallback:Y(()=>{var s;return(s=n==null?void 0:n.locale)!=null?s:i.fallback.value}),messages:Y(()=>{var s;return(s=n==null?void 0:n.messages)!=null?s:i.messages.value})});return Tt(yo,r),r}}}function Fx(t){let{rootEl:e,isSticky:n,layoutItemStyles:i}=t;const r=Pe(!1),s=Pe(0),o=Y(()=>{const c=typeof r.value=="boolean"?"top":r.value;return[n.value?{top:"auto",bottom:"auto",height:void 0}:void 0,r.value?{[c]:Re(s.value)}:{top:i.value.top}]});sr(()=>{Ke(n,c=>{c?window.addEventListener("scroll",l,{passive:!0}):window.removeEventListener("scroll",l)},{immediate:!0})}),yn(()=>{document.removeEventListener("scroll",l)});let a=0;function l(){var c;const u=a>window.scrollY?"up":"down",d=e.value.getBoundingClientRect(),f=parseFloat((c=i.value.top)!=null?c:0),h=window.scrollY-Math.max(0,s.value-f),g=d.height+Math.max(s.value,f)-window.scrollY-window.innerHeight;d.height<window.innerHeight-f?(r.value="top",s.value=f):u==="up"&&r.value==="bottom"||u==="down"&&r.value==="top"?(s.value=window.scrollY+d.top,r.value=!0):u==="down"&&g<=0?(s.value=0,r.value="bottom"):u==="up"&&h<=0&&(s.value=d.top+h,r.value="top"),a=window.scrollY}return{isStuck:r,stickyStyles:o}}const Nx=100,Ox=20;function _f(t){const e=1.41421356237;return(t<0?-1:1)*Math.sqrt(Math.abs(t))*e}function xf(t){if(t.length<2)return 0;if(t.length===2)return t[1].t===t[0].t?0:(t[1].d-t[0].d)/(t[1].t-t[0].t);let e=0;for(let n=t.length-1;n>0;n--){if(t[n].t===t[n-1].t)continue;const i=_f(e),r=(t[n].d-t[n-1].d)/(t[n].t-t[n-1].t);e+=(r-i)*Math.abs(r),n===t.length-1&&(e*=.5)}return _f(e)*1e3}function Bx(){const t={};function e(r){Array.from(r.changedTouches).forEach(s=>{var o;((o=t[s.identifier])!=null?o:t[s.identifier]=new j_(Ox)).push([r.timeStamp,s])})}function n(r){Array.from(r.changedTouches).forEach(s=>{delete t[s.identifier]})}function i(r){var s;const o=(s=t[r])==null?void 0:s.values().reverse();if(!o)throw new Error(`No samples for touch id ${r}`);const a=o[0],l=[],c=[];for(const u of o){if(a[0]-u[0]>Nx)break;l.push({t:u[0],d:u[1].clientX}),c.push({t:u[0],d:u[1].clientY})}return{x:xf(l),y:xf(c),get direction(){const{x:u,y:d}=this,[f,h]=[Math.abs(u),Math.abs(d)];return f>h&&u>=0?"right":f>h&&u<=0?"left":h>f&&d>=0?"down":h>f&&d<=0?"up":zx()}}}return{addMovement:e,endTouch:n,getVelocity:i}}function zx(){throw new Error}function kx(t){let{isActive:e,isTemporary:n,width:i,touchless:r,position:s}=t;sr(()=>{window.addEventListener("touchstart",v,{passive:!0}),window.addEventListener("touchmove",x,{passive:!1}),window.addEventListener("touchend",w,{passive:!0})}),yn(()=>{window.removeEventListener("touchstart",v),window.removeEventListener("touchmove",x),window.removeEventListener("touchend",w)});const o=Y(()=>s.value!=="bottom"),{addMovement:a,endTouch:l,getVelocity:c}=Bx();let u=!1;const d=Pe(!1),f=Pe(0),h=Pe(0);let g;function m(M,T){return(s.value==="left"?M:s.value==="right"?document.documentElement.clientWidth-M:s.value==="bottom"?document.documentElement.clientHeight-M:vr())-(T?i.value:0)}function p(M){let T=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const L=s.value==="left"?(M-h.value)/i.value:s.value==="right"?(document.documentElement.clientWidth-M-h.value)/i.value:s.value==="bottom"?(document.documentElement.clientHeight-M-h.value)/i.value:vr();return T?Math.max(0,Math.min(1,L)):L}function v(M){if(r.value)return;const T=M.changedTouches[0].clientX,L=M.changedTouches[0].clientY,_=25,C=s.value==="left"?T<_:s.value==="right"?T>document.documentElement.clientWidth-_:s.value==="bottom"?L>document.documentElement.clientHeight-_:vr(),P=e.value&&(s.value==="left"?T<i.value:s.value==="right"?T>document.documentElement.clientWidth-i.value:s.value==="bottom"?L>document.documentElement.clientHeight-i.value:vr());(C||P||e.value&&n.value)&&(u=!0,g=[T,L],h.value=m(o.value?T:L,e.value),f.value=p(o.value?T:L),l(M),a(M))}function x(M){const T=M.changedTouches[0].clientX,L=M.changedTouches[0].clientY;if(u){if(!M.cancelable){u=!1;return}const C=Math.abs(T-g[0]),P=Math.abs(L-g[1]);(o.value?C>P&&C>3:P>C&&P>3)?(d.value=!0,u=!1):(o.value?P:C)>3&&(u=!1)}if(!d.value)return;M.preventDefault(),a(M);const _=p(o.value?T:L,!1);f.value=Math.max(0,Math.min(1,_)),_>1?h.value=m(o.value?T:L,!0):_<0&&(h.value=m(o.value?T:L,!1))}function w(M){if(u=!1,!d.value)return;a(M),d.value=!1;const T=c(M.changedTouches[0].identifier),L=Math.abs(T.x),_=Math.abs(T.y);(o.value?L>_&&L>400:_>L&&_>3)?e.value=T.direction===({left:"right",right:"left",bottom:"up"}[s.value]||vr()):e.value=f.value>.5}const y=Y(()=>d.value?{transform:s.value==="left"?`translateX(calc(-100% + ${f.value*i.value}px))`:s.value==="right"?`translateX(calc(100% - ${f.value*i.value}px))`:s.value==="bottom"?`translateY(calc(100% - ${f.value*i.value}px))`:vr(),transition:"none"}:void 0);return{isDragging:d,dragProgress:f,dragStyles:y}}function vr(){throw new Error}const Ux=["start","end","left","right","bottom"],Vx=Ze({name:"VNavigationDrawer",props:{color:String,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,modelValue:{type:Boolean,default:null},permanent:Boolean,rail:Boolean,railWidth:{type:[Number,String],default:56},scrim:{type:[String,Boolean],default:!0},image:String,temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},location:{type:String,default:"start",validator:t=>Ux.includes(t)},sticky:Boolean,...is(),...Si(),...v0(),...Pn(),...It({tag:"nav"}),...Wt()},emits:{"update:modelValue":t=>!0},setup(t,e){let{attrs:n,slots:i}=e;const{isRtl:r}=no(),{themeClasses:s}=$t(t),{borderClasses:o}=rs(t),{backgroundColorClasses:a,backgroundColorStyles:l}=Ln(Ve(t,"color")),{elevationClasses:c}=ur(t),{mobile:u}=Ax(),{roundedClasses:d}=Kn(t),f=Qp(),h=Ki(t,"modelValue",null,I=>!!I),{ssrBootStyles:g}=nm(),m=Pe(),p=Pe(!1),v=Y(()=>t.rail&&t.expandOnHover&&p.value?Number(t.width):Number(t.rail?t.railWidth:t.width)),x=Y(()=>Kl(t.location,r.value)),w=Y(()=>!t.permanent&&(u.value||t.temporary)),y=Y(()=>t.sticky&&!w.value&&x.value!=="bottom");t.disableResizeWatcher||Ke(w,I=>!t.permanent&&(h.value=!I)),!t.disableRouteWatcher&&f&&Ke(f.currentRoute,()=>w.value&&(h.value=!1)),Ke(()=>t.permanent,I=>{I&&(h.value=!0)}),Dc(()=>{t.modelValue!=null||w.value||(h.value=t.permanent||!u.value)});const{isDragging:M,dragProgress:T,dragStyles:L}=kx({isActive:h,isTemporary:w,width:v,touchless:Ve(t,"touchless"),position:x}),_=Y(()=>{const I=w.value?0:t.rail&&t.expandOnHover?Number(t.railWidth):v.value;return M.value?I*T.value:I}),{layoutItemStyles:C,layoutRect:P,layoutItemScrimStyles:D}=x0({id:t.name,order:Y(()=>parseInt(t.order,10)),position:x,layoutSize:_,elementSize:v,active:Y(()=>h.value||M.value),disableTransitions:Y(()=>M.value),absolute:Y(()=>t.absolute||y.value&&typeof F.value!="string")}),{isStuck:F,stickyStyles:W}=Fx({rootEl:m,isSticky:y,layoutItemStyles:C}),N=Ln(Y(()=>typeof t.scrim=="string"?t.scrim:null)),Q=Y(()=>({...M.value?{opacity:T.value*.2,transition:"none"}:void 0,...P.value?{left:Re(P.value.left),right:Re(P.value.right),top:Re(P.value.top),bottom:Re(P.value.bottom)}:void 0,...D.value}));return yi({VList:{bgColor:"transparent"}}),st(()=>{var I,V,$,H;const J=i.image||t.image;return k(Et,null,[k(t.tag,Cn({ref:m,onMouseenter:()=>p.value=!0,onMouseleave:()=>p.value=!1,class:["v-navigation-drawer",`v-navigation-drawer--${x.value}`,{"v-navigation-drawer--expand-on-hover":t.expandOnHover,"v-navigation-drawer--floating":t.floating,"v-navigation-drawer--is-hovering":p.value,"v-navigation-drawer--rail":t.rail,"v-navigation-drawer--temporary":w.value,"v-navigation-drawer--active":h.value,"v-navigation-drawer--sticky":y.value},s.value,a.value,o.value,c.value,d.value],style:[l.value,C.value,L.value,g.value,W.value]},n),{default:()=>[J&&k("div",{key:"image",class:"v-navigation-drawer__img"},[i.image?(I=i.image)==null?void 0:I.call(i,{image:t.image}):k("img",{src:t.image,alt:""},null)]),i.prepend&&k("div",{class:"v-navigation-drawer__prepend"},[(V=i.prepend)==null?void 0:V.call(i)]),k("div",{class:"v-navigation-drawer__content"},[($=i.default)==null?void 0:$.call(i)]),i.append&&k("div",{class:"v-navigation-drawer__append"},[(H=i.append)==null?void 0:H.call(i)])]}),k(xi,{name:"fade-transition"},{default:()=>[w.value&&(M.value||h.value)&&!!t.scrim&&k("div",{class:["v-navigation-drawer__scrim",N.backgroundColorClasses.value],style:[Q.value,N.backgroundColorStyles.value],onClick:()=>h.value=!1},null)]})])}),{isStuck:F}}}),Hx={name:"App",data:()=>({logo:z_}),methods:{routeHome:function(){this.$router.push("/")},routeProjects:function(){this.$router.push("/projects")}}};function Gx(t,e,n,i,r,s){const o=Fc("router-view");return Vn(),Wi(O0,null,{default:Pt(()=>[k(Vx,{"expand-on-hover":"",rail:""},{default:Pt(()=>[k(ff,null,{default:Pt(()=>[k(Bi,{"prepend-avatar":t.logo,title:"Halite"},null,8,["prepend-avatar"])]),_:1}),k(Dp),k(ff,{density:"compact",nav:""},{default:Pt(()=>[k(Bi,{"prepend-icon":"mdi-home",title:"Home",value:"home",class:"nav-drawer-item",onClick:s.routeHome},null,8,["onClick"]),k(Bi,{"prepend-icon":"mdi-flask-empty-outline",title:"Projects",value:"projects",class:"nav-drawer-item",onClick:s.routeProjects},null,8,["onClick"]),k(Bi,{"prepend-icon":"mdi-account-multiple",title:"About me",value:"aboutme",class:"nav-drawer-item"}),k(Bi,{"prepend-icon":"mdi-book-open",title:"Learn",value:"learn",class:"nav-drawer-item"})]),_:1})]),_:1}),k(wx,null,{default:Pt(()=>[k(o)]),_:1})]),_:1})}const Wx=Qs(Hx,[["render",Gx],["__scopeId","data-v-a00e1a68"]]),$x="modulepreload",qx=function(t){return"/"+t},yf={},im=function(e,n,i){return!n||n.length===0?e():Promise.all(n.map(r=>{if(r=qx(r),r in yf)return;yf[r]=!0;const s=r.endsWith(".css"),o=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${o}`))return;const a=document.createElement("link");if(a.rel=s?"stylesheet":$x,s||(a.as="script",a.crossOrigin=""),a.href=r,document.head.appendChild(a),s)return new Promise((l,c)=>{a.addEventListener("load",l),a.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())};/*!
  * vue-router v4.1.2
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Or=typeof window<"u";function Xx(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Qe=Object.assign;function Xa(t,e){const n={};for(const i in e){const r=e[i];n[i]=gn(r)?r.map(t):t(r)}return n}const Ls=()=>{},gn=Array.isArray,jx=/\/$/,Yx=t=>t.replace(jx,"");function ja(t,e,n="/"){let i,r={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),s=e.slice(l+1,a>-1?a:e.length),r=t(s)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=Qx(i!=null?i:e,n),{fullPath:i+(s&&"?")+s+o,path:i,query:r,hash:o}}function Kx(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function bf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Zx(t,e,n){const i=e.matched.length-1,r=n.matched.length-1;return i>-1&&i===r&&Xr(e.matched[i],n.matched[r])&&rm(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Xr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function rm(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Jx(t[n],e[n]))return!1;return!0}function Jx(t,e){return gn(t)?Sf(t,e):gn(e)?Sf(e,t):t===e}function Sf(t,e){return gn(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function Qx(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/");let r=n.length-1,s,o;for(s=0;s<i.length;s++)if(o=i[s],o!==".")if(o==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+i.slice(s-(s===i.length?1:0)).join("/")}var $s;(function(t){t.pop="pop",t.push="push"})($s||($s={}));var Ps;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ps||(Ps={}));function ey(t){if(!t)if(Or){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Yx(t)}const ty=/^[^#]+#/;function ny(t,e){return t.replace(ty,"#")+e}function iy(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const Ca=()=>({left:window.pageXOffset,top:window.pageYOffset});function ry(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=iy(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Mf(t,e){return(history.state?history.state.position-e:-1)+t}const ic=new Map;function sy(t,e){ic.set(t,e)}function oy(t){const e=ic.get(t);return ic.delete(t),e}let ay=()=>location.protocol+"//"+location.host;function sm(t,e){const{pathname:n,search:i,hash:r}=e,s=t.indexOf("#");if(s>-1){let a=r.includes(t.slice(s))?t.slice(s).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),bf(l,"")}return bf(n,t)+i+r}function ly(t,e,n,i){let r=[],s=[],o=null;const a=({state:f})=>{const h=sm(t,location),g=n.value,m=e.value;let p=0;if(f){if(n.value=h,e.value=f,o&&o===g){o=null;return}p=m?f.position-m.position:0}else i(h);r.forEach(v=>{v(n.value,g,{delta:p,type:$s.pop,direction:p?p>0?Ps.forward:Ps.back:Ps.unknown})})};function l(){o=n.value}function c(f){r.push(f);const h=()=>{const g=r.indexOf(f);g>-1&&r.splice(g,1)};return s.push(h),h}function u(){const{history:f}=window;!f.state||f.replaceState(Qe({},f.state,{scroll:Ca()}),"")}function d(){for(const f of s)f();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:d}}function wf(t,e,n,i=!1,r=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:r?Ca():null}}function cy(t){const{history:e,location:n}=window,i={value:sm(t,n)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const d=t.indexOf("#"),f=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+l:ay()+t+l;try{e[u?"replaceState":"pushState"](c,"",f),r.value=c}catch(h){console.error(h),n[u?"replace":"assign"](f)}}function o(l,c){const u=Qe({},e.state,wf(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),i.value=l}function a(l,c){const u=Qe({},r.value,e.state,{forward:l,scroll:Ca()});s(u.current,u,!0);const d=Qe({},wf(i.value,l,null),{position:u.position+1},c);s(l,d,!1),i.value=l}return{location:i,state:r,push:a,replace:o}}function uy(t){t=ey(t);const e=cy(t),n=ly(t,e.state,e.location,e.replace);function i(s,o=!0){o||n.pauseListeners(),history.go(s)}const r=Qe({location:"",base:t,go:i,createHref:ny.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function fy(t){return typeof t=="string"||t&&typeof t=="object"}function om(t){return typeof t=="string"||typeof t=="symbol"}const ti={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},am=Symbol("");var Ef;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Ef||(Ef={}));function jr(t,e){return Qe(new Error,{type:t,[am]:!0},e)}function ni(t,e){return t instanceof Error&&am in t&&(e==null||!!(t.type&e))}const Cf="[^/]+?",dy={sensitive:!1,strict:!1,start:!0,end:!0},hy=/[.+*?^${}()[\]/\\]/g;function py(t,e){const n=Qe({},dy,e),i=[];let r=n.start?"^":"";const s=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(r+="/");for(let d=0;d<c.length;d++){const f=c[d];let h=40+(n.sensitive?.25:0);if(f.type===0)d||(r+="/"),r+=f.value.replace(hy,"\\$&"),h+=40;else if(f.type===1){const{value:g,repeatable:m,optional:p,regexp:v}=f;s.push({name:g,repeatable:m,optional:p});const x=v||Cf;if(x!==Cf){h+=10;try{new RegExp(`(${x})`)}catch(y){throw new Error(`Invalid custom RegExp for param "${g}" (${x}): `+y.message)}}let w=m?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;d||(w=p&&c.length<2?`(?:/${w})`:"/"+w),p&&(w+="?"),r+=w,h+=20,p&&(h+=-8),m&&(h+=-20),x===".*"&&(h+=-50)}u.push(h)}i.push(u)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(c){const u=c.match(o),d={};if(!u)return null;for(let f=1;f<u.length;f++){const h=u[f]||"",g=s[f-1];d[g.name]=h&&g.repeatable?h.split("/"):h}return d}function l(c){let u="",d=!1;for(const f of t){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const h of f)if(h.type===0)u+=h.value;else if(h.type===1){const{value:g,repeatable:m,optional:p}=h,v=g in c?c[g]:"";if(gn(v)&&!m)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const x=gn(v)?v.join("/"):v;if(!x)if(p)f.length<2&&t.length>1&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${g}"`);u+=x}}return u}return{re:o,score:i,keys:s,parse:a,stringify:l}}function my(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function gy(t,e){let n=0;const i=t.score,r=e.score;for(;n<i.length&&n<r.length;){const s=my(i[n],r[n]);if(s)return s;n++}if(Math.abs(r.length-i.length)===1){if(Tf(i))return 1;if(Tf(r))return-1}return r.length-i.length}function Tf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const vy={type:0,value:""},_y=/[a-zA-Z0-9_]/;function xy(t){if(!t)return[[]];if(t==="/")return[[vy]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(h){throw new Error(`ERR (${n})/"${c}": ${h}`)}let n=0,i=n;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,c="",u="";function d(){!c||(n===0?s.push({type:0,value:c}):n===1||n===2||n===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:l==="/"?(c&&d(),o()):l===":"?(d(),n=1):f();break;case 4:f(),n=i;break;case 1:l==="("?n=2:_y.test(l)?f():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),d(),o(),r}function yy(t,e,n){const i=py(xy(t.path),n),r=Qe(i,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function by(t,e){const n=[],i=new Map;e=Lf({strict:!1,end:!0,sensitive:!1},e);function r(u){return i.get(u)}function s(u,d,f){const h=!f,g=My(u);g.aliasOf=f&&f.record;const m=Lf(e,u),p=[g];if("alias"in u){const w=typeof u.alias=="string"?[u.alias]:u.alias;for(const y of w)p.push(Qe({},g,{components:f?f.record.components:g.components,path:y,aliasOf:f?f.record:g}))}let v,x;for(const w of p){const{path:y}=w;if(d&&y[0]!=="/"){const M=d.record.path,T=M[M.length-1]==="/"?"":"/";w.path=d.record.path+(y&&T+y)}if(v=yy(w,d,m),f?f.alias.push(v):(x=x||v,x!==v&&x.alias.push(v),h&&u.name&&!Af(v)&&o(u.name)),g.children){const M=g.children;for(let T=0;T<M.length;T++)s(M[T],v,f&&f.children[T])}f=f||v,l(v)}return x?()=>{o(x)}:Ls}function o(u){if(om(u)){const d=i.get(u);d&&(i.delete(u),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(u);d>-1&&(n.splice(d,1),u.record.name&&i.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let d=0;for(;d<n.length&&gy(u,n[d])>=0&&(u.record.path!==n[d].record.path||!lm(u,n[d]));)d++;n.splice(d,0,u),u.record.name&&!Af(u)&&i.set(u.record.name,u)}function c(u,d){let f,h={},g,m;if("name"in u&&u.name){if(f=i.get(u.name),!f)throw jr(1,{location:u});m=f.record.name,h=Qe(Sy(d.params,f.keys.filter(x=>!x.optional).map(x=>x.name)),u.params),g=f.stringify(h)}else if("path"in u)g=u.path,f=n.find(x=>x.re.test(g)),f&&(h=f.parse(g),m=f.record.name);else{if(f=d.name?i.get(d.name):n.find(x=>x.re.test(d.path)),!f)throw jr(1,{location:u,currentLocation:d});m=f.record.name,h=Qe({},d.params,u.params),g=f.stringify(h)}const p=[];let v=f;for(;v;)p.unshift(v.record),v=v.parent;return{name:m,path:g,params:h,matched:p,meta:Ey(p)}}return t.forEach(u=>s(u)),{addRoute:s,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function Sy(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function My(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:wy(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function wy(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="boolean"?n:n[i];return e}function Af(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Ey(t){return t.reduce((e,n)=>Qe(e,n.meta),{})}function Lf(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function lm(t,e){return e.children.some(n=>n===t||lm(t,n))}const cm=/#/g,Cy=/&/g,Ty=/\//g,Ay=/=/g,Ly=/\?/g,um=/\+/g,Py=/%5B/g,Ry=/%5D/g,fm=/%5E/g,Dy=/%60/g,dm=/%7B/g,Iy=/%7C/g,hm=/%7D/g,Fy=/%20/g;function nu(t){return encodeURI(""+t).replace(Iy,"|").replace(Py,"[").replace(Ry,"]")}function Ny(t){return nu(t).replace(dm,"{").replace(hm,"}").replace(fm,"^")}function rc(t){return nu(t).replace(um,"%2B").replace(Fy,"+").replace(cm,"%23").replace(Cy,"%26").replace(Dy,"`").replace(dm,"{").replace(hm,"}").replace(fm,"^")}function Oy(t){return rc(t).replace(Ay,"%3D")}function By(t){return nu(t).replace(cm,"%23").replace(Ly,"%3F")}function zy(t){return t==null?"":By(t).replace(Ty,"%2F")}function ca(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function ky(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(um," "),o=s.indexOf("="),a=ca(o<0?s:s.slice(0,o)),l=o<0?null:ca(s.slice(o+1));if(a in e){let c=e[a];gn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Pf(t){let e="";for(let n in t){const i=t[n];if(n=Oy(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(gn(i)?i.map(s=>s&&rc(s)):[i&&rc(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function Uy(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=gn(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const Vy=Symbol(""),Rf=Symbol(""),iu=Symbol(""),pm=Symbol(""),sc=Symbol("");function hs(){let t=[];function e(i){return t.push(i),()=>{const r=t.indexOf(i);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function hi(t,e,n,i,r){const s=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const l=d=>{d===!1?a(jr(4,{from:n,to:e})):d instanceof Error?a(d):fy(d)?a(jr(2,{from:e,to:d})):(s&&i.enterCallbacks[r]===s&&typeof d=="function"&&s.push(d),o())},c=t.call(i&&i.instances[r],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(d=>a(d))})}function Ya(t,e,n,i){const r=[];for(const s of t)for(const o in s.components){let a=s.components[o];if(!(e!=="beforeRouteEnter"&&!s.instances[o]))if(Hy(a)){const c=(a.__vccOpts||a)[e];c&&r.push(hi(c,n,i,s,o))}else{let l=a();r.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const u=Xx(c)?c.default:c;s.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&hi(f,n,i,s,o)()}))}}return r}function Hy(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Df(t){const e=it(iu),n=it(pm),i=Y(()=>e.resolve(hn(t.to))),r=Y(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],d=n.matched;if(!u||!d.length)return-1;const f=d.findIndex(Xr.bind(null,u));if(f>-1)return f;const h=If(l[c-2]);return c>1&&If(u)===h&&d[d.length-1].path!==h?d.findIndex(Xr.bind(null,l[c-2])):f}),s=Y(()=>r.value>-1&&qy(n.params,i.value.params)),o=Y(()=>r.value>-1&&r.value===n.matched.length-1&&rm(n.params,i.value.params));function a(l={}){return $y(l)?e[hn(t.replace)?"replace":"push"](hn(t.to)).catch(Ls):Promise.resolve()}return{route:i,href:Y(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}const Gy=rr({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Df,setup(t,{slots:e}){const n=Ct(Df(t)),{options:i}=it(iu),r=Y(()=>({[Ff(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Ff(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&e.default(n);return t.custom?s:Yn("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},s)}}}),Wy=Gy;function $y(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function qy(t,e){for(const n in e){const i=e[n],r=t[n];if(typeof i=="string"){if(i!==r)return!1}else if(!gn(r)||r.length!==i.length||i.some((s,o)=>s!==r[o]))return!1}return!0}function If(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Ff=(t,e,n)=>t!=null?t:e!=null?e:n,Xy=rr({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=it(sc),r=Y(()=>t.route||i.value),s=it(Rf,0),o=Y(()=>{let c=hn(s);const{matched:u}=r.value;let d;for(;(d=u[c])&&!d.components;)c++;return c}),a=Y(()=>r.value.matched[o.value]);Tt(Rf,Y(()=>o.value+1)),Tt(Vy,a),Tt(sc,r);const l=Pe();return Ke(()=>[l.value,a.value,t.name],([c,u,d],[f,h,g])=>{u&&(u.instances[d]=c,h&&h!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=h.leaveGuards),u.updateGuards.size||(u.updateGuards=h.updateGuards))),c&&u&&(!h||!Xr(u,h)||!f)&&(u.enterCallbacks[d]||[]).forEach(m=>m(c))},{flush:"post"}),()=>{const c=r.value,u=a.value,d=u&&u.components[t.name],f=t.name;if(!d)return Nf(n.default,{Component:d,route:c});const h=u.props[t.name],g=h?h===!0?c.params:typeof h=="function"?h(c):h:null,p=Yn(d,Qe({},g,e,{onVnodeUnmounted:v=>{v.component.isUnmounted&&(u.instances[f]=null)},ref:l}));return Nf(n.default,{Component:p,route:c})||p}}});function Nf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const jy=Xy;function Yy(t){const e=by(t.routes,t),n=t.parseQuery||ky,i=t.stringifyQuery||Pf,r=t.history,s=hs(),o=hs(),a=hs(),l=wh(ti);let c=ti;Or&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Xa.bind(null,U=>""+U),d=Xa.bind(null,zy),f=Xa.bind(null,ca);function h(U,z){let oe,ce;return om(U)?(oe=e.getRecordMatcher(U),ce=z):ce=U,e.addRoute(ce,oe)}function g(U){const z=e.getRecordMatcher(U);z&&e.removeRoute(z)}function m(){return e.getRoutes().map(U=>U.record)}function p(U){return!!e.getRecordMatcher(U)}function v(U,z){if(z=Qe({},z||l.value),typeof U=="string"){const ve=ja(n,U,z.path),E=e.resolve({path:ve.path},z),R=r.createHref(ve.fullPath);return Qe(ve,E,{params:f(E.params),hash:ca(ve.hash),redirectedFrom:void 0,href:R})}let oe;if("path"in U)oe=Qe({},U,{path:ja(n,U.path,z.path).path});else{const ve=Qe({},U.params);for(const E in ve)ve[E]==null&&delete ve[E];oe=Qe({},U,{params:d(U.params)}),z.params=d(z.params)}const ce=e.resolve(oe,z),be=U.hash||"";ce.params=u(f(ce.params));const ge=Kx(i,Qe({},U,{hash:Ny(be),path:ce.path})),Te=r.createHref(ge);return Qe({fullPath:ge,hash:be,query:i===Pf?Uy(U.query):U.query||{}},ce,{redirectedFrom:void 0,href:Te})}function x(U){return typeof U=="string"?ja(n,U,l.value.path):Qe({},U)}function w(U,z){if(c!==U)return jr(8,{from:z,to:U})}function y(U){return L(U)}function M(U){return y(Qe(x(U),{replace:!0}))}function T(U){const z=U.matched[U.matched.length-1];if(z&&z.redirect){const{redirect:oe}=z;let ce=typeof oe=="function"?oe(U):oe;return typeof ce=="string"&&(ce=ce.includes("?")||ce.includes("#")?ce=x(ce):{path:ce},ce.params={}),Qe({query:U.query,hash:U.hash,params:"path"in ce?{}:U.params},ce)}}function L(U,z){const oe=c=v(U),ce=l.value,be=U.state,ge=U.force,Te=U.replace===!0,ve=T(oe);if(ve)return L(Qe(x(ve),{state:be,force:ge,replace:Te}),z||oe);const E=oe;E.redirectedFrom=z;let R;return!ge&&Zx(i,ce,oe)&&(R=jr(16,{to:E,from:ce}),J(ce,ce,!0,!1)),(R?Promise.resolve(R):C(E,ce)).catch(q=>ni(q)?ni(q,2)?q:H(q):V(q,E,ce)).then(q=>{if(q){if(ni(q,2))return L(Qe(x(q.to),{state:be,force:ge,replace:Te}),z||E)}else q=D(E,ce,!0,Te,be);return P(E,ce,q),q})}function _(U,z){const oe=w(U,z);return oe?Promise.reject(oe):Promise.resolve()}function C(U,z){let oe;const[ce,be,ge]=Ky(U,z);oe=Ya(ce.reverse(),"beforeRouteLeave",U,z);for(const ve of ce)ve.leaveGuards.forEach(E=>{oe.push(hi(E,U,z))});const Te=_.bind(null,U,z);return oe.push(Te),_r(oe).then(()=>{oe=[];for(const ve of s.list())oe.push(hi(ve,U,z));return oe.push(Te),_r(oe)}).then(()=>{oe=Ya(be,"beforeRouteUpdate",U,z);for(const ve of be)ve.updateGuards.forEach(E=>{oe.push(hi(E,U,z))});return oe.push(Te),_r(oe)}).then(()=>{oe=[];for(const ve of U.matched)if(ve.beforeEnter&&!z.matched.includes(ve))if(gn(ve.beforeEnter))for(const E of ve.beforeEnter)oe.push(hi(E,U,z));else oe.push(hi(ve.beforeEnter,U,z));return oe.push(Te),_r(oe)}).then(()=>(U.matched.forEach(ve=>ve.enterCallbacks={}),oe=Ya(ge,"beforeRouteEnter",U,z),oe.push(Te),_r(oe))).then(()=>{oe=[];for(const ve of o.list())oe.push(hi(ve,U,z));return oe.push(Te),_r(oe)}).catch(ve=>ni(ve,8)?ve:Promise.reject(ve))}function P(U,z,oe){for(const ce of a.list())ce(U,z,oe)}function D(U,z,oe,ce,be){const ge=w(U,z);if(ge)return ge;const Te=z===ti,ve=Or?history.state:{};oe&&(ce||Te?r.replace(U.fullPath,Qe({scroll:Te&&ve&&ve.scroll},be)):r.push(U.fullPath,be)),l.value=U,J(U,z,oe,Te),H()}let F;function W(){F||(F=r.listen((U,z,oe)=>{if(!Me.listening)return;const ce=v(U),be=T(ce);if(be){L(Qe(be,{replace:!0}),ce).catch(Ls);return}c=ce;const ge=l.value;Or&&sy(Mf(ge.fullPath,oe.delta),Ca()),C(ce,ge).catch(Te=>ni(Te,12)?Te:ni(Te,2)?(L(Te.to,ce).then(ve=>{ni(ve,20)&&!oe.delta&&oe.type===$s.pop&&r.go(-1,!1)}).catch(Ls),Promise.reject()):(oe.delta&&r.go(-oe.delta,!1),V(Te,ce,ge))).then(Te=>{Te=Te||D(ce,ge,!1),Te&&(oe.delta?r.go(-oe.delta,!1):oe.type===$s.pop&&ni(Te,20)&&r.go(-1,!1)),P(ce,ge,Te)}).catch(Ls)}))}let N=hs(),Q=hs(),I;function V(U,z,oe){H(U);const ce=Q.list();return ce.length?ce.forEach(be=>be(U,z,oe)):console.error(U),Promise.reject(U)}function $(){return I&&l.value!==ti?Promise.resolve():new Promise((U,z)=>{N.add([U,z])})}function H(U){return I||(I=!U,W(),N.list().forEach(([z,oe])=>U?oe(U):z()),N.reset()),U}function J(U,z,oe,ce){const{scrollBehavior:be}=t;if(!Or||!be)return Promise.resolve();const ge=!oe&&oy(Mf(U.fullPath,0))||(ce||!oe)&&history.state&&history.state.scroll||null;return xn().then(()=>be(U,z,ge)).then(Te=>Te&&ry(Te)).catch(Te=>V(Te,U,z))}const de=U=>r.go(U);let se;const pe=new Set,Me={currentRoute:l,listening:!0,addRoute:h,removeRoute:g,hasRoute:p,getRoutes:m,resolve:v,options:t,push:y,replace:M,go:de,back:()=>de(-1),forward:()=>de(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:Q.add,isReady:$,install(U){const z=this;U.component("RouterLink",Wy),U.component("RouterView",jy),U.config.globalProperties.$router=z,Object.defineProperty(U.config.globalProperties,"$route",{enumerable:!0,get:()=>hn(l)}),Or&&!se&&l.value===ti&&(se=!0,y(r.location).catch(be=>{}));const oe={};for(const be in ti)oe[be]=Y(()=>l.value[be]);U.provide(iu,z),U.provide(pm,Ct(oe)),U.provide(sc,l);const ce=U.unmount;pe.add(U),U.unmount=function(){pe.delete(U),pe.size<1&&(c=ti,F&&F(),F=null,l.value=ti,se=!1,I=!1),ce()}}};return Me}function _r(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function Ky(t,e){const n=[],i=[],r=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(t.matched.find(c=>Xr(c,a))?i.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Xr(c,l))||r.push(l))}return[n,i,r]}/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ru="143",Zy=0,Of=1,Jy=2,mm=1,Qy=2,bs=3,qs=0,mn=1,Yr=2,eb=1,mi=0,Wr=1,Bf=2,zf=3,kf=4,tb=5,Br=100,nb=101,ib=102,Uf=103,Vf=104,rb=200,sb=201,ob=202,ab=203,gm=204,vm=205,lb=206,cb=207,ub=208,fb=209,db=210,hb=0,pb=1,mb=2,oc=3,gb=4,vb=5,_b=6,xb=7,_m=0,yb=1,bb=2,$n=0,Sb=1,Mb=2,wb=3,Eb=4,Cb=5,xm=300,Kr=301,Zr=302,ac=303,lc=304,Ta=306,cc=1e3,un=1001,uc=1002,Nt=1003,Hf=1004,Gf=1005,Jt=1006,Tb=1007,Aa=1008,Zi=1009,Ab=1010,Lb=1011,ym=1012,Pb=1013,Ui=1014,Vi=1015,Xs=1016,Rb=1017,Db=1018,$r=1020,Ib=1021,Fb=1022,En=1023,Nb=1024,Ob=1025,Xi=1026,Jr=1027,Bb=1028,zb=1029,kb=1030,Ub=1031,Vb=1033,Ka=33776,Za=33777,Ja=33778,Qa=33779,Wf=35840,$f=35841,qf=35842,Xf=35843,Hb=36196,jf=37492,Yf=37496,Kf=37808,Zf=37809,Jf=37810,Qf=37811,ed=37812,td=37813,nd=37814,id=37815,rd=37816,sd=37817,od=37818,ad=37819,ld=37820,cd=37821,ud=36492,Ji=3e3,lt=3001,Gb=3200,Wb=3201,$b=0,qb=1,zn="srgb",Hi="srgb-linear",el=7680,Xb=519,fd=35044,dd="300 es",fc=1035;class ss{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Mt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],tl=Math.PI/180,hd=180/Math.PI;function so(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Mt[t&255]+Mt[t>>8&255]+Mt[t>>16&255]+Mt[t>>24&255]+"-"+Mt[e&255]+Mt[e>>8&255]+"-"+Mt[e>>16&15|64]+Mt[e>>24&255]+"-"+Mt[n&63|128]+Mt[n>>8&255]+"-"+Mt[n>>16&255]+Mt[n>>24&255]+Mt[i&255]+Mt[i>>8&255]+Mt[i>>16&255]+Mt[i>>24&255]).toLowerCase()}function Ut(t,e,n){return Math.max(e,Math.min(n,t))}function jb(t,e){return(t%e+e)%e}function nl(t,e,n){return(1-n)*t+n*e}function pd(t){return(t&t-1)===0&&t!==0}function dc(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}class tt{constructor(e=0,n=0){tt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class tn{constructor(){tn.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],h=i[5],g=i[8],m=r[0],p=r[3],v=r[6],x=r[1],w=r[4],y=r[7],M=r[2],T=r[5],L=r[8];return s[0]=o*m+a*x+l*M,s[3]=o*p+a*w+l*T,s[6]=o*v+a*y+l*L,s[1]=c*m+u*x+d*M,s[4]=c*p+u*w+d*T,s[7]=c*v+u*y+d*L,s[2]=f*m+h*x+g*M,s[5]=f*p+h*w+g*T,s[8]=f*v+h*y+g*L,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,f=a*l-u*s,h=c*s-o*l,g=n*d+i*f+r*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/g;return e[0]=d*m,e[1]=(r*c-u*i)*m,e[2]=(a*i-r*o)*m,e[3]=f*m,e[4]=(u*n-r*l)*m,e[5]=(r*s-a*n)*m,e[6]=h*m,e[7]=(i*l-c*n)*m,e[8]=(o*n-i*s)*m,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=n,i[4]*=n,i[7]*=n,this}rotate(e){const n=Math.cos(e),i=Math.sin(e),r=this.elements,s=r[0],o=r[3],a=r[6],l=r[1],c=r[4],u=r[7];return r[0]=n*s+i*l,r[3]=n*o+i*c,r[6]=n*a+i*u,r[1]=-i*s+n*l,r[4]=-i*o+n*c,r[7]=-i*a+n*u,this}translate(e,n){const i=this.elements;return i[0]+=e*i[2],i[3]+=e*i[5],i[6]+=e*i[8],i[1]+=n*i[2],i[4]+=n*i[5],i[7]+=n*i[8],this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function bm(t){for(let e=t.length-1;e>=0;--e)if(t[e]>65535)return!0;return!1}function ua(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function ji(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Xo(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const il={[zn]:{[Hi]:ji},[Hi]:{[zn]:Xo}},sn={legacyMode:!0,get workingColorSpace(){return Hi},set workingColorSpace(t){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(t,e,n){if(this.legacyMode||e===n||!e||!n)return t;if(il[e]&&il[e][n]!==void 0){const i=il[e][n];return t.r=i(t.r),t.g=i(t.g),t.b=i(t.b),t}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)}},Sm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mt={r:0,g:0,b:0},on={h:0,s:0,l:0},bo={h:0,s:0,l:0};function rl(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}function So(t,e){return e.r=t.r,e.g=t.g,e.b=t.b,e}class nt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,n===void 0&&i===void 0?this.set(e):this.setRGB(e,n,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=zn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,sn.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Hi){return this.r=e,this.g=n,this.b=i,sn.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Hi){if(e=jb(e,1),n=Ut(n,0,1),i=Ut(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=rl(o,s,e+1/3),this.g=rl(o,s,e),this.b=rl(o,s,e-1/3)}return sn.toWorkingColorSpace(this,r),this}setStyle(e,n=zn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,sn.toWorkingColorSpace(this,n),i(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,sn.toWorkingColorSpace(this,n),i(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,c=parseInt(s[2],10)/100,u=parseInt(s[3],10)/100;return i(s[4]),this.setHSL(l,c,u,n)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,sn.toWorkingColorSpace(this,n),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,sn.toWorkingColorSpace(this,n),this}return e&&e.length>0?this.setColorName(e,n):this}setColorName(e,n=zn){const i=Sm[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ji(e.r),this.g=ji(e.g),this.b=ji(e.b),this}copyLinearToSRGB(e){return this.r=Xo(e.r),this.g=Xo(e.g),this.b=Xo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zn){return sn.fromWorkingColorSpace(So(this,mt),e),Ut(mt.r*255,0,255)<<16^Ut(mt.g*255,0,255)<<8^Ut(mt.b*255,0,255)<<0}getHexString(e=zn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Hi){sn.fromWorkingColorSpace(So(this,mt),n);const i=mt.r,r=mt.g,s=mt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=Hi){return sn.fromWorkingColorSpace(So(this,mt),n),e.r=mt.r,e.g=mt.g,e.b=mt.b,e}getStyle(e=zn){return sn.fromWorkingColorSpace(So(this,mt),e),e!==zn?`color(${e} ${mt.r} ${mt.g} ${mt.b})`:`rgb(${mt.r*255|0},${mt.g*255|0},${mt.b*255|0})`}offsetHSL(e,n,i){return this.getHSL(on),on.h+=e,on.s+=n,on.l+=i,this.setHSL(on.h,on.s,on.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(on),e.getHSL(bo);const i=nl(on.h,bo.h,n),r=nl(on.s,bo.s,n),s=nl(on.l,bo.l,n);return this.setHSL(i,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}nt.NAMES=Sm;let xr;class Mm{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{xr===void 0&&(xr=ua("canvas")),xr.width=e.width,xr.height=e.height;const i=xr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=xr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=ua("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ji(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ji(n[i]/255)*255):n[i]=ji(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class wm{constructor(e=null){this.isSource=!0,this.uuid=so(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(sl(r[o].image)):s.push(sl(r[o]))}else s=sl(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function sl(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Mm.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Yb=0;class vn extends ss{constructor(e=vn.DEFAULT_IMAGE,n=vn.DEFAULT_MAPPING,i=un,r=un,s=Jt,o=Aa,a=En,l=Zi,c=1,u=Ji){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yb++}),this.uuid=so(),this.name="",this.source=new wm(e),this.mipmaps=[],this.mapping=n,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new tt(0,0),this.repeat=new tt(1,1),this.center=new tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==xm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case cc:e.x=e.x-Math.floor(e.x);break;case un:e.x=e.x<0?0:1;break;case uc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case cc:e.y=e.y-Math.floor(e.y);break;case un:e.y=e.y<0?0:1;break;case uc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}vn.DEFAULT_IMAGE=null;vn.DEFAULT_MAPPING=xm;class xt{constructor(e=0,n=0,i=0,r=1){xt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],h=l[5],g=l[9],m=l[2],p=l[6],v=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-m)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+m)<.1&&Math.abs(g+p)<.1&&Math.abs(c+h+v-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const w=(c+1)/2,y=(h+1)/2,M=(v+1)/2,T=(u+f)/4,L=(d+m)/4,_=(g+p)/4;return w>y&&w>M?w<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(w),r=T/i,s=L/i):y>M?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=T/r,s=_/r):M<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(M),i=L/s,r=_/s),this.set(i,r,s,n),this}let x=Math.sqrt((p-g)*(p-g)+(d-m)*(d-m)+(f-u)*(f-u));return Math.abs(x)<.001&&(x=1),this.x=(p-g)/x,this.y=(d-m)/x,this.z=(f-u)/x,this.w=Math.acos((c+h+v-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Qi extends ss{constructor(e,n,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new xt(0,0,e,n),this.scissorTest=!1,this.viewport=new xt(0,0,e,n);const r={width:e,height:n,depth:1};this.texture=new vn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Jt,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new wm(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Em extends vn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Kb extends vn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class oo{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3];const f=s[o+0],h=s[o+1],g=s[o+2],m=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d;return}if(a===1){e[n+0]=f,e[n+1]=h,e[n+2]=g,e[n+3]=m;return}if(d!==m||l!==f||c!==h||u!==g){let p=1-a;const v=l*f+c*h+u*g+d*m,x=v>=0?1:-1,w=1-v*v;if(w>Number.EPSILON){const M=Math.sqrt(w),T=Math.atan2(M,v*x);p=Math.sin(p*T)/M,a=Math.sin(a*T)/M}const y=a*x;if(l=l*p+f*y,c=c*p+h*y,u=u*p+g*y,d=d*p+m*y,p===1-a){const M=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=M,c*=M,u*=M,d*=M}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[o],f=s[o+1],h=s[o+2],g=s[o+3];return e[n]=a*g+u*d+l*h-c*f,e[n+1]=l*g+u*f+c*d-a*h,e[n+2]=c*g+u*h+a*f-l*d,e[n+3]=u*g-a*d-l*f-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),d=a(s/2),f=l(i/2),h=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=f*u*d+c*h*g,this._y=c*h*d-f*u*g,this._z=c*u*g+f*h*d,this._w=c*u*d-f*h*g;break;case"YXZ":this._x=f*u*d+c*h*g,this._y=c*h*d-f*u*g,this._z=c*u*g-f*h*d,this._w=c*u*d+f*h*g;break;case"ZXY":this._x=f*u*d-c*h*g,this._y=c*h*d+f*u*g,this._z=c*u*g+f*h*d,this._w=c*u*d-f*h*g;break;case"ZYX":this._x=f*u*d-c*h*g,this._y=c*h*d+f*u*g,this._z=c*u*g-f*h*d,this._w=c*u*d+f*h*g;break;case"YZX":this._x=f*u*d+c*h*g,this._y=c*h*d+f*u*g,this._z=c*u*g-f*h*d,this._w=c*u*d-f*h*g;break;case"XZY":this._x=f*u*d-c*h*g,this._y=c*h*d-f*u*g,this._z=c*u*g+f*h*d,this._w=c*u*d+f*h*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],d=n[10],f=i+a+d;if(f>0){const h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-l)*h,this._y=(s-c)*h,this._z=(o-r)*h}else if(i>a&&i>d){const h=2*Math.sqrt(1+i-a-d);this._w=(u-l)/h,this._x=.25*h,this._y=(r+o)/h,this._z=(s+c)/h}else if(a>d){const h=2*Math.sqrt(1+a-i-d);this._w=(s-c)/h,this._x=(r+o)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+d-i-a);this._w=(o-r)/h,this._x=(s+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ut(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const h=1-n;return this._w=h*o+n*this._w,this._x=h*i+n*this._x,this._y=h*r+n*this._y,this._z=h*s+n*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-n)*u)/c,f=Math.sin(n*u)/c;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(e=0,n=0,i=0){j.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(md.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(md.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*n+o*r-a*i,u=l*i+a*n-s*r,d=l*r+s*i-o*n,f=-s*n-o*i-a*r;return this.x=c*l+f*-s+u*-a-d*-o,this.y=u*l+f*-o+d*-s-c*-a,this.z=d*l+f*-a+c*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ol.copy(this).projectOnVector(e),this.sub(ol)}reflect(e){return this.sub(ol.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ut(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ol=new j,md=new oo;class ao{constructor(e=new j(1/0,1/0,1/0),n=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){let n=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],d=e[l+1],f=e[l+2];u<n&&(n=u),d<i&&(i=d),f<r&&(r=f),u>s&&(s=u),d>o&&(o=d),f>a&&(a=f)}return this.min.set(n,i,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let n=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),d=e.getY(l),f=e.getZ(l);u<n&&(n=u),d<i&&(i=d),f<r&&(r=f),u>s&&(s=u),d>o&&(o=d),f>a&&(a=f)}return this.min.set(n,i,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Li.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(n&&i.attributes!=null&&i.attributes.position!==void 0){const s=i.attributes.position;for(let o=0,a=s.count;o<a;o++)Li.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Li)}else i.boundingBox===null&&i.computeBoundingBox(),al.copy(i.boundingBox),al.applyMatrix4(e.matrixWorld),this.union(al);const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Li),Li.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ps),Mo.subVectors(this.max,ps),yr.subVectors(e.a,ps),br.subVectors(e.b,ps),Sr.subVectors(e.c,ps),ii.subVectors(br,yr),ri.subVectors(Sr,br),Pi.subVectors(yr,Sr);let n=[0,-ii.z,ii.y,0,-ri.z,ri.y,0,-Pi.z,Pi.y,ii.z,0,-ii.x,ri.z,0,-ri.x,Pi.z,0,-Pi.x,-ii.y,ii.x,0,-ri.y,ri.x,0,-Pi.y,Pi.x,0];return!ll(n,yr,br,Sr,Mo)||(n=[1,0,0,0,1,0,0,0,1],!ll(n,yr,br,Sr,Mo))?!1:(wo.crossVectors(ii,ri),n=[wo.x,wo.y,wo.z],ll(n,yr,br,Sr,Mo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Li.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Li).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Dn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Dn=[new j,new j,new j,new j,new j,new j,new j,new j],Li=new j,al=new ao,yr=new j,br=new j,Sr=new j,ii=new j,ri=new j,Pi=new j,ps=new j,Mo=new j,wo=new j,Ri=new j;function ll(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Ri.fromArray(t,s);const a=r.x*Math.abs(Ri.x)+r.y*Math.abs(Ri.y)+r.z*Math.abs(Ri.z),l=e.dot(Ri),c=n.dot(Ri),u=i.dot(Ri);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Zb=new ao,gd=new j,Eo=new j,cl=new j;class su{constructor(e=new j,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Zb.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){cl.subVectors(e,this.center);const n=cl.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.add(cl.multiplyScalar(r/i)),this.radius+=r}return this}union(e){return this.center.equals(e.center)===!0?Eo.set(0,0,1).multiplyScalar(e.radius):Eo.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(gd.copy(e.center).add(Eo)),this.expandByPoint(gd.copy(e.center).sub(Eo)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const In=new j,ul=new j,Co=new j,si=new j,fl=new j,To=new j,dl=new j;class Jb{constructor(e=new j,n=new j(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,In)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=In.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(In.copy(this.direction).multiplyScalar(n).add(this.origin),In.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){ul.copy(e).add(n).multiplyScalar(.5),Co.copy(n).sub(e).normalize(),si.copy(this.origin).sub(ul);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Co),a=si.dot(this.direction),l=-si.dot(Co),c=si.lengthSq(),u=Math.abs(1-o*o);let d,f,h,g;if(u>0)if(d=o*l-a,f=o*a-l,g=s*u,d>=0)if(f>=-g)if(f<=g){const m=1/u;d*=m,f*=m,h=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),h=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-s,-l),s),h=f*(f+2*l)+c):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),h=-d*d+f*(f+2*l)+c);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;return i&&i.copy(this.direction).multiplyScalar(d).add(this.origin),r&&r.copy(Co).multiplyScalar(f).add(ul),h}intersectSphere(e,n){In.subVectors(e.center,this.origin);const i=In.dot(this.direction),r=In.dot(In)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return a<0&&l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||i!==i)&&(i=s),(o<r||r!==r)&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,In)!==null}intersectTriangle(e,n,i,r,s){fl.subVectors(n,e),To.subVectors(i,e),dl.crossVectors(fl,To);let o=this.direction.dot(dl),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;si.subVectors(this.origin,e);const l=a*this.direction.dot(To.crossVectors(si,To));if(l<0)return null;const c=a*this.direction.dot(fl.cross(si));if(c<0||l+c>o)return null;const u=-a*si.dot(dl);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class St{constructor(){St.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,n,i,r,s,o,a,l,c,u,d,f,h,g,m,p){const v=this.elements;return v[0]=e,v[4]=n,v[8]=i,v[12]=r,v[1]=s,v[5]=o,v[9]=a,v[13]=l,v[2]=c,v[6]=u,v[10]=d,v[14]=f,v[3]=h,v[7]=g,v[11]=m,v[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new St().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Mr.setFromMatrixColumn(e,0).length(),s=1/Mr.setFromMatrixColumn(e,1).length(),o=1/Mr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*u,h=o*d,g=a*u,m=a*d;n[0]=l*u,n[4]=-l*d,n[8]=c,n[1]=h+g*c,n[5]=f-m*c,n[9]=-a*l,n[2]=m-f*c,n[6]=g+h*c,n[10]=o*l}else if(e.order==="YXZ"){const f=l*u,h=l*d,g=c*u,m=c*d;n[0]=f+m*a,n[4]=g*a-h,n[8]=o*c,n[1]=o*d,n[5]=o*u,n[9]=-a,n[2]=h*a-g,n[6]=m+f*a,n[10]=o*l}else if(e.order==="ZXY"){const f=l*u,h=l*d,g=c*u,m=c*d;n[0]=f-m*a,n[4]=-o*d,n[8]=g+h*a,n[1]=h+g*a,n[5]=o*u,n[9]=m-f*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const f=o*u,h=o*d,g=a*u,m=a*d;n[0]=l*u,n[4]=g*c-h,n[8]=f*c+m,n[1]=l*d,n[5]=m*c+f,n[9]=h*c-g,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const f=o*l,h=o*c,g=a*l,m=a*c;n[0]=l*u,n[4]=m-f*d,n[8]=g*d+h,n[1]=d,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=h*d+g,n[10]=f-m*d}else if(e.order==="XZY"){const f=o*l,h=o*c,g=a*l,m=a*c;n[0]=l*u,n[4]=-d,n[8]=c*u,n[1]=f*d+m,n[5]=o*u,n[9]=h*d-g,n[2]=g*d-h,n[6]=a*u,n[10]=m*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Qb,e,eS)}lookAt(e,n,i){const r=this.elements;return zt.subVectors(e,n),zt.lengthSq()===0&&(zt.z=1),zt.normalize(),oi.crossVectors(i,zt),oi.lengthSq()===0&&(Math.abs(i.z)===1?zt.x+=1e-4:zt.z+=1e-4,zt.normalize(),oi.crossVectors(i,zt)),oi.normalize(),Ao.crossVectors(zt,oi),r[0]=oi.x,r[4]=Ao.x,r[8]=zt.x,r[1]=oi.y,r[5]=Ao.y,r[9]=zt.y,r[2]=oi.z,r[6]=Ao.z,r[10]=zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],h=i[13],g=i[2],m=i[6],p=i[10],v=i[14],x=i[3],w=i[7],y=i[11],M=i[15],T=r[0],L=r[4],_=r[8],C=r[12],P=r[1],D=r[5],F=r[9],W=r[13],N=r[2],Q=r[6],I=r[10],V=r[14],$=r[3],H=r[7],J=r[11],de=r[15];return s[0]=o*T+a*P+l*N+c*$,s[4]=o*L+a*D+l*Q+c*H,s[8]=o*_+a*F+l*I+c*J,s[12]=o*C+a*W+l*V+c*de,s[1]=u*T+d*P+f*N+h*$,s[5]=u*L+d*D+f*Q+h*H,s[9]=u*_+d*F+f*I+h*J,s[13]=u*C+d*W+f*V+h*de,s[2]=g*T+m*P+p*N+v*$,s[6]=g*L+m*D+p*Q+v*H,s[10]=g*_+m*F+p*I+v*J,s[14]=g*C+m*W+p*V+v*de,s[3]=x*T+w*P+y*N+M*$,s[7]=x*L+w*D+y*Q+M*H,s[11]=x*_+w*F+y*I+M*J,s[15]=x*C+w*W+y*V+M*de,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],h=e[14],g=e[3],m=e[7],p=e[11],v=e[15];return g*(+s*l*d-r*c*d-s*a*f+i*c*f+r*a*h-i*l*h)+m*(+n*l*h-n*c*f+s*o*f-r*o*h+r*c*u-s*l*u)+p*(+n*c*d-n*a*h-s*o*d+i*o*h+s*a*u-i*c*u)+v*(-r*a*u-n*l*d+n*a*f+r*o*d-i*o*f+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],h=e[11],g=e[12],m=e[13],p=e[14],v=e[15],x=d*p*c-m*f*c+m*l*h-a*p*h-d*l*v+a*f*v,w=g*f*c-u*p*c-g*l*h+o*p*h+u*l*v-o*f*v,y=u*m*c-g*d*c+g*a*h-o*m*h-u*a*v+o*d*v,M=g*d*l-u*m*l-g*a*f+o*m*f+u*a*p-o*d*p,T=n*x+i*w+r*y+s*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/T;return e[0]=x*L,e[1]=(m*f*s-d*p*s-m*r*h+i*p*h+d*r*v-i*f*v)*L,e[2]=(a*p*s-m*l*s+m*r*c-i*p*c-a*r*v+i*l*v)*L,e[3]=(d*l*s-a*f*s-d*r*c+i*f*c+a*r*h-i*l*h)*L,e[4]=w*L,e[5]=(u*p*s-g*f*s+g*r*h-n*p*h-u*r*v+n*f*v)*L,e[6]=(g*l*s-o*p*s-g*r*c+n*p*c+o*r*v-n*l*v)*L,e[7]=(o*f*s-u*l*s+u*r*c-n*f*c-o*r*h+n*l*h)*L,e[8]=y*L,e[9]=(g*d*s-u*m*s-g*i*h+n*m*h+u*i*v-n*d*v)*L,e[10]=(o*m*s-g*a*s+g*i*c-n*m*c-o*i*v+n*a*v)*L,e[11]=(u*a*s-o*d*s-u*i*c+n*d*c+o*i*h-n*a*h)*L,e[12]=M*L,e[13]=(u*m*r-g*d*r+g*i*f-n*m*f-u*i*p+n*d*p)*L,e[14]=(g*a*r-o*m*r-g*i*l+n*m*l+o*i*p-n*a*p)*L,e[15]=(o*d*r-u*a*r+u*i*l-n*d*l-o*i*f+n*a*f)*L,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,d=a+a,f=s*c,h=s*u,g=s*d,m=o*u,p=o*d,v=a*d,x=l*c,w=l*u,y=l*d,M=i.x,T=i.y,L=i.z;return r[0]=(1-(m+v))*M,r[1]=(h+y)*M,r[2]=(g-w)*M,r[3]=0,r[4]=(h-y)*T,r[5]=(1-(f+v))*T,r[6]=(p+x)*T,r[7]=0,r[8]=(g+w)*L,r[9]=(p-x)*L,r[10]=(1-(f+m))*L,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Mr.set(r[0],r[1],r[2]).length();const o=Mr.set(r[4],r[5],r[6]).length(),a=Mr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],an.copy(this);const c=1/s,u=1/o,d=1/a;return an.elements[0]*=c,an.elements[1]*=c,an.elements[2]*=c,an.elements[4]*=u,an.elements[5]*=u,an.elements[6]*=u,an.elements[8]*=d,an.elements[9]*=d,an.elements[10]*=d,n.setFromRotationMatrix(an),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o){const a=this.elements,l=2*s/(n-e),c=2*s/(i-r),u=(n+e)/(n-e),d=(i+r)/(i-r),f=-(o+s)/(o-s),h=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=d,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=h,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,n,i,r,s,o){const a=this.elements,l=1/(n-e),c=1/(i-r),u=1/(o-s),d=(n+e)*l,f=(i+r)*c,h=(o+s)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-d,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-h,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Mr=new j,an=new St,Qb=new j(0,0,0),eS=new j(1,1,1),oi=new j,Ao=new j,zt=new j,vd=new St,_d=new oo;class lo{constructor(e=0,n=0,i=0,r=lo.DefaultOrder){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],f=r[6],h=r[10];switch(n){case"XYZ":this._y=Math.asin(Ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ut(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ut(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ut(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ut(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-Ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return vd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vd,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return _d.setFromEuler(this),this.setFromQuaternion(_d,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}lo.DefaultOrder="XYZ";lo.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Cm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let tS=0;const xd=new j,wr=new oo,Fn=new St,Lo=new j,ms=new j,nS=new j,iS=new oo,yd=new j(1,0,0),bd=new j(0,1,0),Sd=new j(0,0,1),rS={type:"added"},Md={type:"removed"};class _n extends ss{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tS++}),this.uuid=so(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_n.DefaultUp.clone();const e=new j,n=new lo,i=new oo,r=new j(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new St},normalMatrix:{value:new tn}}),this.matrix=new St,this.matrixWorld=new St,this.matrixAutoUpdate=_n.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new Cm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return wr.setFromAxisAngle(e,n),this.quaternion.multiply(wr),this}rotateOnWorldAxis(e,n){return wr.setFromAxisAngle(e,n),this.quaternion.premultiply(wr),this}rotateX(e){return this.rotateOnAxis(yd,e)}rotateY(e){return this.rotateOnAxis(bd,e)}rotateZ(e){return this.rotateOnAxis(Sd,e)}translateOnAxis(e,n){return xd.copy(e).applyQuaternion(this.quaternion),this.position.add(xd.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(yd,e)}translateY(e){return this.translateOnAxis(bd,e)}translateZ(e){return this.translateOnAxis(Sd,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Fn.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Lo.copy(e):Lo.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ms.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fn.lookAt(ms,Lo,this.up):Fn.lookAt(Lo,ms,this.up),this.quaternion.setFromRotationMatrix(Fn),r&&(Fn.extractRotation(r.matrixWorld),wr.setFromRotationMatrix(Fn),this.quaternion.premultiply(wr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(rS)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Md)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const n=this.children[e];n.parent=null,n.dispatchEvent(Md)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Fn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Fn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Fn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,e,nS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,iS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),h=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),h.length>0&&(i.animations=h),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}_n.DefaultUp=new j(0,1,0);_n.DefaultMatrixAutoUpdate=!0;const ln=new j,Nn=new j,hl=new j,On=new j,Er=new j,Cr=new j,wd=new j,pl=new j,ml=new j,gl=new j;class Un{constructor(e=new j,n=new j,i=new j){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),ln.subVectors(e,n),r.cross(ln);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){ln.subVectors(r,n),Nn.subVectors(i,n),hl.subVectors(e,n);const o=ln.dot(ln),a=ln.dot(Nn),l=ln.dot(hl),c=Nn.dot(Nn),u=Nn.dot(hl),d=o*c-a*a;if(d===0)return s.set(-2,-1,-1);const f=1/d,h=(c*l-a*u)*f,g=(o*u-a*l)*f;return s.set(1-h-g,g,h)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,On),On.x>=0&&On.y>=0&&On.x+On.y<=1}static getUV(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,On),l.set(0,0),l.addScaledVector(s,On.x),l.addScaledVector(o,On.y),l.addScaledVector(a,On.z),l}static isFrontFacing(e,n,i,r){return ln.subVectors(i,n),Nn.subVectors(e,n),ln.cross(Nn).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ln.subVectors(this.c,this.b),Nn.subVectors(this.a,this.b),ln.cross(Nn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Un.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Un.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return Un.getUV(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Un.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Un.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Er.subVectors(r,i),Cr.subVectors(s,i),pl.subVectors(e,i);const l=Er.dot(pl),c=Cr.dot(pl);if(l<=0&&c<=0)return n.copy(i);ml.subVectors(e,r);const u=Er.dot(ml),d=Cr.dot(ml);if(u>=0&&d<=u)return n.copy(r);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(Er,o);gl.subVectors(e,s);const h=Er.dot(gl),g=Cr.dot(gl);if(g>=0&&h<=g)return n.copy(s);const m=h*c-l*g;if(m<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector(Cr,a);const p=u*g-h*d;if(p<=0&&d-u>=0&&h-g>=0)return wd.subVectors(s,r),a=(d-u)/(d-u+(h-g)),n.copy(r).addScaledVector(wd,a);const v=1/(p+m+f);return o=m*v,a=f*v,n.copy(i).addScaledVector(Er,o).addScaledVector(Cr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let sS=0;class La extends ss{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sS++}),this.uuid=so(),this.name="",this.type="Material",this.blending=Wr,this.side=qs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=gm,this.blendDst=vm,this.blendEquation=Br,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=oc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xb,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=el,this.stencilZFail=el,this.stencilZPass=el,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn("THREE.Material: '"+n+"' parameter is undefined.");continue}if(n==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=i===eb;continue}const r=this[n];if(r===void 0){console.warn("THREE."+this.type+": '"+n+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Wr&&(i.blending=this.blending),this.side!==qs&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ou extends La{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=_m,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ht=new j,Po=new tt;class Tn{constructor(e,n,i){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i===!0,this.usage=fd,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const n=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",r),o=new nt),n[i++]=o.r,n[i++]=o.g,n[i++]=o.b}return this}copyVector2sArray(e){const n=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",r),o=new tt),n[i++]=o.x,n[i++]=o.y}return this}copyVector3sArray(e){const n=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",r),o=new j),n[i++]=o.x,n[i++]=o.y,n[i++]=o.z}return this}copyVector4sArray(e){const n=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",r),o=new xt),n[i++]=o.x,n[i++]=o.y,n[i++]=o.z,n[i++]=o.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Po.fromBufferAttribute(this,n),Po.applyMatrix3(e),this.setXY(n,Po.x,Po.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)ht.fromBufferAttribute(this,n),ht.applyMatrix3(e),this.setXYZ(n,ht.x,ht.y,ht.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)ht.fromBufferAttribute(this,n),ht.applyMatrix4(e),this.setXYZ(n,ht.x,ht.y,ht.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)ht.fromBufferAttribute(this,n),ht.applyNormalMatrix(e),this.setXYZ(n,ht.x,ht.y,ht.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)ht.fromBufferAttribute(this,n),ht.transformDirection(e),this.setXYZ(n,ht.x,ht.y,ht.z);return this}set(e,n=0){return this.array.set(e,n),this}getX(e){return this.array[e*this.itemSize]}setX(e,n){return this.array[e*this.itemSize]=n,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,n){return this.array[e*this.itemSize+1]=n,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,n){return this.array[e*this.itemSize+2]=n,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,n){return this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==fd&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Tm extends Tn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Am extends Tn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class An extends Tn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let oS=0;const Kt=new St,vl=new _n,Tr=new j,kt=new ao,gs=new ao,vt=new j;class Mi extends ss{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:oS++}),this.uuid=so(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(bm(e)?Am:Tm)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new tn().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Kt.makeRotationFromQuaternion(e),this.applyMatrix4(Kt),this}rotateX(e){return Kt.makeRotationX(e),this.applyMatrix4(Kt),this}rotateY(e){return Kt.makeRotationY(e),this.applyMatrix4(Kt),this}rotateZ(e){return Kt.makeRotationZ(e),this.applyMatrix4(Kt),this}translate(e,n,i){return Kt.makeTranslation(e,n,i),this.applyMatrix4(Kt),this}scale(e,n,i){return Kt.makeScale(e,n,i),this.applyMatrix4(Kt),this}lookAt(e){return vl.lookAt(e),vl.updateMatrix(),this.applyMatrix4(vl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Tr).negate(),this.translate(Tr.x,Tr.y,Tr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new An(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ao);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];kt.setFromBufferAttribute(s),this.morphTargetsRelative?(vt.addVectors(this.boundingBox.min,kt.min),this.boundingBox.expandByPoint(vt),vt.addVectors(this.boundingBox.max,kt.max),this.boundingBox.expandByPoint(vt)):(this.boundingBox.expandByPoint(kt.min),this.boundingBox.expandByPoint(kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new su);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new j,1/0);return}if(e){const i=this.boundingSphere.center;if(kt.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];gs.setFromBufferAttribute(a),this.morphTargetsRelative?(vt.addVectors(kt.min,gs.min),kt.expandByPoint(vt),vt.addVectors(kt.max,gs.max),kt.expandByPoint(vt)):(kt.expandByPoint(gs.min),kt.expandByPoint(gs.max))}kt.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)vt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(vt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)vt.fromBufferAttribute(a,c),l&&(Tr.fromBufferAttribute(e,c),vt.add(Tr)),r=Math.max(r,i.distanceToSquared(vt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Tn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let P=0;P<a;P++)c[P]=new j,u[P]=new j;const d=new j,f=new j,h=new j,g=new tt,m=new tt,p=new tt,v=new j,x=new j;function w(P,D,F){d.fromArray(r,P*3),f.fromArray(r,D*3),h.fromArray(r,F*3),g.fromArray(o,P*2),m.fromArray(o,D*2),p.fromArray(o,F*2),f.sub(d),h.sub(d),m.sub(g),p.sub(g);const W=1/(m.x*p.y-p.x*m.y);!isFinite(W)||(v.copy(f).multiplyScalar(p.y).addScaledVector(h,-m.y).multiplyScalar(W),x.copy(h).multiplyScalar(m.x).addScaledVector(f,-p.x).multiplyScalar(W),c[P].add(v),c[D].add(v),c[F].add(v),u[P].add(x),u[D].add(x),u[F].add(x))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let P=0,D=y.length;P<D;++P){const F=y[P],W=F.start,N=F.count;for(let Q=W,I=W+N;Q<I;Q+=3)w(i[Q+0],i[Q+1],i[Q+2])}const M=new j,T=new j,L=new j,_=new j;function C(P){L.fromArray(s,P*3),_.copy(L);const D=c[P];M.copy(D),M.sub(L.multiplyScalar(L.dot(D))).normalize(),T.crossVectors(_,D);const W=T.dot(u[P])<0?-1:1;l[P*4]=M.x,l[P*4+1]=M.y,l[P*4+2]=M.z,l[P*4+3]=W}for(let P=0,D=y.length;P<D;++P){const F=y[P],W=F.start,N=F.count;for(let Q=W,I=W+N;Q<I;Q+=3)C(i[Q+0]),C(i[Q+1]),C(i[Q+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Tn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,h=i.count;f<h;f++)i.setXYZ(f,0,0,0);const r=new j,s=new j,o=new j,a=new j,l=new j,c=new j,u=new j,d=new j;if(e)for(let f=0,h=e.count;f<h;f+=3){const g=e.getX(f+0),m=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,m),o.fromBufferAttribute(n,p),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,m),c.fromBufferAttribute(i,p),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(m,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,h=n.count;f<h;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(e,n){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}n===void 0&&(n=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const i=this.attributes;for(const r in i){if(e.attributes[r]===void 0)continue;const o=i[r].array,a=e.attributes[r],l=a.array,c=a.itemSize*n,u=Math.min(l.length,o.length-c);for(let d=0,f=c;d<u;d++,f++)o[f]=l[d]}return this}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)vt.fromBufferAttribute(e,n),vt.normalize(),e.setXYZ(n,vt.x,vt.y,vt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u);let h=0,g=0;for(let m=0,p=l.length;m<p;m++){a.isInterleavedBufferAttribute?h=l[m]*a.data.stride+a.offset:h=l[m]*u;for(let v=0;v<u;v++)f[g++]=c[h++]}return new Tn(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Mi,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const f=c[u],h=e(f,i);l.push(h)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const h=c[d];u.push(h.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ed=new St,Ar=new Jb,_l=new su,ai=new j,li=new j,ci=new j,xl=new j,yl=new j,bl=new j,Ro=new j,Do=new j,Io=new j,Fo=new tt,No=new tt,Oo=new tt,Sl=new j,Bo=new j;class Hn extends _n{constructor(e=new Mi,n=new ou){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),_l.copy(i.boundingSphere),_l.applyMatrix4(s),e.ray.intersectsSphere(_l)===!1)||(Ed.copy(s).invert(),Ar.copy(e.ray).applyMatrix4(Ed),i.boundingBox!==null&&Ar.intersectsBox(i.boundingBox)===!1))return;let o;const a=i.index,l=i.attributes.position,c=i.morphAttributes.position,u=i.morphTargetsRelative,d=i.attributes.uv,f=i.attributes.uv2,h=i.groups,g=i.drawRange;if(a!==null)if(Array.isArray(r))for(let m=0,p=h.length;m<p;m++){const v=h[m],x=r[v.materialIndex],w=Math.max(v.start,g.start),y=Math.min(a.count,Math.min(v.start+v.count,g.start+g.count));for(let M=w,T=y;M<T;M+=3){const L=a.getX(M),_=a.getX(M+1),C=a.getX(M+2);o=zo(this,x,e,Ar,l,c,u,d,f,L,_,C),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=v.materialIndex,n.push(o))}}else{const m=Math.max(0,g.start),p=Math.min(a.count,g.start+g.count);for(let v=m,x=p;v<x;v+=3){const w=a.getX(v),y=a.getX(v+1),M=a.getX(v+2);o=zo(this,r,e,Ar,l,c,u,d,f,w,y,M),o&&(o.faceIndex=Math.floor(v/3),n.push(o))}}else if(l!==void 0)if(Array.isArray(r))for(let m=0,p=h.length;m<p;m++){const v=h[m],x=r[v.materialIndex],w=Math.max(v.start,g.start),y=Math.min(l.count,Math.min(v.start+v.count,g.start+g.count));for(let M=w,T=y;M<T;M+=3){const L=M,_=M+1,C=M+2;o=zo(this,x,e,Ar,l,c,u,d,f,L,_,C),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=v.materialIndex,n.push(o))}}else{const m=Math.max(0,g.start),p=Math.min(l.count,g.start+g.count);for(let v=m,x=p;v<x;v+=3){const w=v,y=v+1,M=v+2;o=zo(this,r,e,Ar,l,c,u,d,f,w,y,M),o&&(o.faceIndex=Math.floor(v/3),n.push(o))}}}}function aS(t,e,n,i,r,s,o,a){let l;if(e.side===mn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side!==Yr,a),l===null)return null;Bo.copy(a),Bo.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Bo);return c<n.near||c>n.far?null:{distance:c,point:Bo.clone(),object:t}}function zo(t,e,n,i,r,s,o,a,l,c,u,d){ai.fromBufferAttribute(r,c),li.fromBufferAttribute(r,u),ci.fromBufferAttribute(r,d);const f=t.morphTargetInfluences;if(s&&f){Ro.set(0,0,0),Do.set(0,0,0),Io.set(0,0,0);for(let g=0,m=s.length;g<m;g++){const p=f[g],v=s[g];p!==0&&(xl.fromBufferAttribute(v,c),yl.fromBufferAttribute(v,u),bl.fromBufferAttribute(v,d),o?(Ro.addScaledVector(xl,p),Do.addScaledVector(yl,p),Io.addScaledVector(bl,p)):(Ro.addScaledVector(xl.sub(ai),p),Do.addScaledVector(yl.sub(li),p),Io.addScaledVector(bl.sub(ci),p)))}ai.add(Ro),li.add(Do),ci.add(Io)}t.isSkinnedMesh&&(t.boneTransform(c,ai),t.boneTransform(u,li),t.boneTransform(d,ci));const h=aS(t,e,n,i,ai,li,ci,Sl);if(h){a&&(Fo.fromBufferAttribute(a,c),No.fromBufferAttribute(a,u),Oo.fromBufferAttribute(a,d),h.uv=Un.getUV(Sl,ai,li,ci,Fo,No,Oo,new tt)),l&&(Fo.fromBufferAttribute(l,c),No.fromBufferAttribute(l,u),Oo.fromBufferAttribute(l,d),h.uv2=Un.getUV(Sl,ai,li,ci,Fo,No,Oo,new tt));const g={a:c,b:u,c:d,normal:new j,materialIndex:0};Un.getNormal(ai,li,ci,g.normal),h.face=g}return h}class co extends Mi{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let f=0,h=0;g("z","y","x",-1,-1,i,n,e,o,s,0),g("z","y","x",1,-1,i,n,-e,o,s,1),g("x","z","y",1,1,e,i,n,r,o,2),g("x","z","y",1,-1,e,i,-n,r,o,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new An(c,3)),this.setAttribute("normal",new An(u,3)),this.setAttribute("uv",new An(d,2));function g(m,p,v,x,w,y,M,T,L,_,C){const P=y/L,D=M/_,F=y/2,W=M/2,N=T/2,Q=L+1,I=_+1;let V=0,$=0;const H=new j;for(let J=0;J<I;J++){const de=J*D-W;for(let se=0;se<Q;se++){const pe=se*P-F;H[m]=pe*x,H[p]=de*w,H[v]=N,c.push(H.x,H.y,H.z),H[m]=0,H[p]=0,H[v]=T>0?1:-1,u.push(H.x,H.y,H.z),d.push(se/L),d.push(1-J/_),V+=1}}for(let J=0;J<_;J++)for(let de=0;de<L;de++){const se=f+de+Q*J,pe=f+de+Q*(J+1),Me=f+(de+1)+Q*(J+1),U=f+(de+1)+Q*J;l.push(se,pe,U),l.push(pe,Me,U),$+=6}a.addGroup(h,$,C),h+=$,f+=V}}static fromJSON(e){return new co(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Qr(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function wt(t){const e={};for(let n=0;n<t.length;n++){const i=Qr(t[n]);for(const r in i)e[r]=i[r]}return e}function lS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}const cS={clone:Qr,merge:wt};var uS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class er extends La{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=uS,this.fragmentShader=fS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qr(e.uniforms),this.uniformsGroups=lS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Lm extends _n{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new St,this.projectionMatrix=new St,this.projectionMatrixInverse=new St}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(-n[8],-n[9],-n[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Qt extends Lm{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=hd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(tl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return hd*2*Math.atan(Math.tan(tl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(tl*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Lr=90,Pr=1;class dS extends _n{constructor(e,n,i){if(super(),this.type="CubeCamera",i.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=i;const r=new Qt(Lr,Pr,e,n);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new j(1,0,0)),this.add(r);const s=new Qt(Lr,Pr,e,n);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new j(-1,0,0)),this.add(s);const o=new Qt(Lr,Pr,e,n);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new j(0,1,0)),this.add(o);const a=new Qt(Lr,Pr,e,n);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new j(0,-1,0)),this.add(a);const l=new Qt(Lr,Pr,e,n);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new j(0,0,1)),this.add(l);const c=new Qt(Lr,Pr,e,n);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new j(0,0,-1)),this.add(c)}update(e,n){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,s,o,a,l,c]=this.children,u=e.getRenderTarget(),d=e.toneMapping,f=e.xr.enabled;e.toneMapping=$n,e.xr.enabled=!1;const h=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(n,r),e.setRenderTarget(i,1),e.render(n,s),e.setRenderTarget(i,2),e.render(n,o),e.setRenderTarget(i,3),e.render(n,a),e.setRenderTarget(i,4),e.render(n,l),i.texture.generateMipmaps=h,e.setRenderTarget(i,5),e.render(n,c),e.setRenderTarget(u),e.toneMapping=d,e.xr.enabled=f,i.texture.needsPMREMUpdate=!0}}class Pm extends vn{constructor(e,n,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:Kr,super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class hS extends Qi{constructor(e,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Pm(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Jt}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.encoding=n.encoding,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new co(5,5,5),s=new er({name:"CubemapFromEquirect",uniforms:Qr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:mn,blending:mi});s.uniforms.tEquirect.value=n;const o=new Hn(r,s),a=n.minFilter;return n.minFilter===Aa&&(n.minFilter=Jt),new dS(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Ml=new j,pS=new j,mS=new tn;class Ii{constructor(e=new j(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Ml.subVectors(i,n).cross(pS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,n){const i=e.delta(Ml),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(i).multiplyScalar(s).add(e.start)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||mS.getNormalMatrix(e),r=this.coplanarPoint(Ml).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Rr=new su,ko=new j;class Rm{constructor(e=new Ii,n=new Ii,i=new Ii,r=new Ii,s=new Ii,o=new Ii){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const n=this.planes,i=e.elements,r=i[0],s=i[1],o=i[2],a=i[3],l=i[4],c=i[5],u=i[6],d=i[7],f=i[8],h=i[9],g=i[10],m=i[11],p=i[12],v=i[13],x=i[14],w=i[15];return n[0].setComponents(a-r,d-l,m-f,w-p).normalize(),n[1].setComponents(a+r,d+l,m+f,w+p).normalize(),n[2].setComponents(a+s,d+c,m+h,w+v).normalize(),n[3].setComponents(a-s,d-c,m-h,w-v).normalize(),n[4].setComponents(a-o,d-u,m-g,w-x).normalize(),n[5].setComponents(a+o,d+u,m+g,w+x).normalize(),this}intersectsObject(e){const n=e.geometry;return n.boundingSphere===null&&n.computeBoundingSphere(),Rr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Rr)}intersectsSprite(e){return Rr.center.set(0,0,0),Rr.radius=.7071067811865476,Rr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Rr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(ko.x=r.normal.x>0?e.max.x:e.min.x,ko.y=r.normal.y>0?e.max.y:e.min.y,ko.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ko)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Dm(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function gS(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,u){const d=c.array,f=c.usage,h=t.createBuffer();t.bindBuffer(u,h),t.bufferData(u,d,f),c.onUploadCallback();let g;if(d instanceof Float32Array)g=5126;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(d instanceof Int16Array)g=5122;else if(d instanceof Uint32Array)g=5125;else if(d instanceof Int32Array)g=5124;else if(d instanceof Int8Array)g=5120;else if(d instanceof Uint8Array)g=5121;else if(d instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:h,type:g,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,d){const f=u.array,h=u.updateRange;t.bindBuffer(d,c),h.count===-1?t.bufferSubData(d,0,f):(n?t.bufferSubData(d,h.offset*f.BYTES_PER_ELEMENT,f,h.offset,h.count):t.bufferSubData(d,h.offset*f.BYTES_PER_ELEMENT,f.subarray(h.offset,h.offset+h.count)),h.count=-1)}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(t.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);d===void 0?i.set(c,r(c,u)):d.version<c.version&&(s(d.buffer,c,u),d.version=c.version)}return{get:o,remove:a,update:l}}class au extends Mi{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,d=e/a,f=n/l,h=[],g=[],m=[],p=[];for(let v=0;v<u;v++){const x=v*f-o;for(let w=0;w<c;w++){const y=w*d-s;g.push(y,-x,0),m.push(0,0,1),p.push(w/a),p.push(1-v/l)}}for(let v=0;v<l;v++)for(let x=0;x<a;x++){const w=x+c*v,y=x+c*(v+1),M=x+1+c*(v+1),T=x+1+c*v;h.push(w,y,T),h.push(y,M,T)}this.setIndex(h),this.setAttribute("position",new An(g,3)),this.setAttribute("normal",new An(m,3)),this.setAttribute("uv",new An(p,2))}static fromJSON(e){return new au(e.width,e.height,e.widthSegments,e.heightSegments)}}var vS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,_S=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xS=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,yS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,SS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,MS="vec3 transformed = vec3( position );",wS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ES=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,CS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,TS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,AS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,LS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,PS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,RS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,DS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,IS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,FS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,NS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,OS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,BS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,zS=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,kS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,US=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,VS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,HS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,GS="gl_FragColor = linearToOutputTexel( gl_FragColor );",WS=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$S=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,qS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,XS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,jS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,YS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,KS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ZS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,JS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,QS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,eM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,tM=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,nM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,iM=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,rM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,sM=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,oM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,aM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,lM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,uM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,fM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,dM=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,hM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,pM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,mM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,_M=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,xM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,SM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,MM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,EM=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,CM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,TM=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,AM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,LM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,PM=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,RM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,DM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,IM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,FM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,NM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,OM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,BM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,zM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,UM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,VM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,HM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,GM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,WM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$M=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,XM=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,jM=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,YM=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,KM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ZM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,JM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,QM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ew=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,tw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,nw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,iw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rw=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,sw=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,ow=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,aw=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,lw=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,cw=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,uw=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,fw=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,dw=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,hw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const pw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mw=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,gw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vw=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,_w=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,xw=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,yw=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,bw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Sw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Mw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ww=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ew=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Cw=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Tw=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Aw=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lw=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Rw=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dw=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Iw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Fw=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Nw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ow=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Bw=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zw=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Uw=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Vw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Hw=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gw=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ww=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$w=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,ke={alphamap_fragment:vS,alphamap_pars_fragment:_S,alphatest_fragment:xS,alphatest_pars_fragment:yS,aomap_fragment:bS,aomap_pars_fragment:SS,begin_vertex:MS,beginnormal_vertex:wS,bsdfs:ES,iridescence_fragment:CS,bumpmap_pars_fragment:TS,clipping_planes_fragment:AS,clipping_planes_pars_fragment:LS,clipping_planes_pars_vertex:PS,clipping_planes_vertex:RS,color_fragment:DS,color_pars_fragment:IS,color_pars_vertex:FS,color_vertex:NS,common:OS,cube_uv_reflection_fragment:BS,defaultnormal_vertex:zS,displacementmap_pars_vertex:kS,displacementmap_vertex:US,emissivemap_fragment:VS,emissivemap_pars_fragment:HS,encodings_fragment:GS,encodings_pars_fragment:WS,envmap_fragment:$S,envmap_common_pars_fragment:qS,envmap_pars_fragment:XS,envmap_pars_vertex:jS,envmap_physical_pars_fragment:sM,envmap_vertex:YS,fog_vertex:KS,fog_pars_vertex:ZS,fog_fragment:JS,fog_pars_fragment:QS,gradientmap_pars_fragment:eM,lightmap_fragment:tM,lightmap_pars_fragment:nM,lights_lambert_vertex:iM,lights_pars_begin:rM,lights_toon_fragment:oM,lights_toon_pars_fragment:aM,lights_phong_fragment:lM,lights_phong_pars_fragment:cM,lights_physical_fragment:uM,lights_physical_pars_fragment:fM,lights_fragment_begin:dM,lights_fragment_maps:hM,lights_fragment_end:pM,logdepthbuf_fragment:mM,logdepthbuf_pars_fragment:gM,logdepthbuf_pars_vertex:vM,logdepthbuf_vertex:_M,map_fragment:xM,map_pars_fragment:yM,map_particle_fragment:bM,map_particle_pars_fragment:SM,metalnessmap_fragment:MM,metalnessmap_pars_fragment:wM,morphcolor_vertex:EM,morphnormal_vertex:CM,morphtarget_pars_vertex:TM,morphtarget_vertex:AM,normal_fragment_begin:LM,normal_fragment_maps:PM,normal_pars_fragment:RM,normal_pars_vertex:DM,normal_vertex:IM,normalmap_pars_fragment:FM,clearcoat_normal_fragment_begin:NM,clearcoat_normal_fragment_maps:OM,clearcoat_pars_fragment:BM,iridescence_pars_fragment:zM,output_fragment:kM,packing:UM,premultiplied_alpha_fragment:VM,project_vertex:HM,dithering_fragment:GM,dithering_pars_fragment:WM,roughnessmap_fragment:$M,roughnessmap_pars_fragment:qM,shadowmap_pars_fragment:XM,shadowmap_pars_vertex:jM,shadowmap_vertex:YM,shadowmask_pars_fragment:KM,skinbase_vertex:ZM,skinning_pars_vertex:JM,skinning_vertex:QM,skinnormal_vertex:ew,specularmap_fragment:tw,specularmap_pars_fragment:nw,tonemapping_fragment:iw,tonemapping_pars_fragment:rw,transmission_fragment:sw,transmission_pars_fragment:ow,uv_pars_fragment:aw,uv_pars_vertex:lw,uv_vertex:cw,uv2_pars_fragment:uw,uv2_pars_vertex:fw,uv2_vertex:dw,worldpos_vertex:hw,background_vert:pw,background_frag:mw,cube_vert:gw,cube_frag:vw,depth_vert:_w,depth_frag:xw,distanceRGBA_vert:yw,distanceRGBA_frag:bw,equirect_vert:Sw,equirect_frag:Mw,linedashed_vert:ww,linedashed_frag:Ew,meshbasic_vert:Cw,meshbasic_frag:Tw,meshlambert_vert:Aw,meshlambert_frag:Lw,meshmatcap_vert:Pw,meshmatcap_frag:Rw,meshnormal_vert:Dw,meshnormal_frag:Iw,meshphong_vert:Fw,meshphong_frag:Nw,meshphysical_vert:Ow,meshphysical_frag:Bw,meshtoon_vert:zw,meshtoon_frag:kw,points_vert:Uw,points_frag:Vw,shadow_vert:Hw,shadow_frag:Gw,sprite_vert:Ww,sprite_frag:$w},xe={common:{diffuse:{value:new nt(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new tn},uv2Transform:{value:new tn},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new tn}},sprite:{diffuse:{value:new nt(16777215)},opacity:{value:1},center:{value:new tt(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new tn}}},wn={basic:{uniforms:wt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:wt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.fog,xe.lights,{emissive:{value:new nt(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:wt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new nt(0)},specular:{value:new nt(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:wt([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:wt([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new nt(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:wt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:wt([xe.points,xe.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:wt([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:wt([xe.common,xe.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:wt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:wt([xe.sprite,xe.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new tn},t2D:{value:null}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},cube:{uniforms:wt([xe.envmap,{opacity:{value:1}}]),vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:wt([xe.common,xe.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:wt([xe.lights,xe.fog,{color:{value:new nt(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};wn.physical={uniforms:wt([wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new tt(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new nt(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new nt(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new nt(1,1,1)},specularColorMap:{value:null}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};function qw(t,e,n,i,r,s){const o=new nt(0);let a=r===!0?0:1,l,c,u=null,d=0,f=null;function h(m,p){let v=!1,x=p.isScene===!0?p.background:null;x&&x.isTexture&&(x=e.get(x));const w=t.xr,y=w.getSession&&w.getSession();y&&y.environmentBlendMode==="additive"&&(x=null),x===null?g(o,a):x&&x.isColor&&(g(x,1),v=!0),(t.autoClear||v)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Ta)?(c===void 0&&(c=new Hn(new co(1,1,1),new er({name:"BackgroundCubeMaterial",uniforms:Qr(wn.cube.uniforms),vertexShader:wn.cube.vertexShader,fragmentShader:wn.cube.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,T,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,(u!==x||d!==x.version||f!==t.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,f=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Hn(new au(2,2),new er({name:"BackgroundMaterial",uniforms:Qr(wn.background.uniforms),vertexShader:wn.background.vertexShader,fragmentShader:wn.background.fragmentShader,side:qs,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==t.toneMapping)&&(l.material.needsUpdate=!0,u=x,d=x.version,f=t.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function g(m,p){n.buffers.color.setClear(m.r,m.g,m.b,p,s)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),a=p,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(m){a=m,g(o,a)},render:h}}function Xw(t,e,n,i){const r=t.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=p(null);let c=l,u=!1;function d(N,Q,I,V,$){let H=!1;if(o){const J=m(V,I,Q);c!==J&&(c=J,h(c.object)),H=v(N,V,I,$),H&&x(N,V,I,$)}else{const J=Q.wireframe===!0;(c.geometry!==V.id||c.program!==I.id||c.wireframe!==J)&&(c.geometry=V.id,c.program=I.id,c.wireframe=J,H=!0)}$!==null&&n.update($,34963),(H||u)&&(u=!1,_(N,Q,I,V),$!==null&&t.bindBuffer(34963,n.get($).buffer))}function f(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function h(N){return i.isWebGL2?t.bindVertexArray(N):s.bindVertexArrayOES(N)}function g(N){return i.isWebGL2?t.deleteVertexArray(N):s.deleteVertexArrayOES(N)}function m(N,Q,I){const V=I.wireframe===!0;let $=a[N.id];$===void 0&&($={},a[N.id]=$);let H=$[Q.id];H===void 0&&(H={},$[Q.id]=H);let J=H[V];return J===void 0&&(J=p(f()),H[V]=J),J}function p(N){const Q=[],I=[],V=[];for(let $=0;$<r;$++)Q[$]=0,I[$]=0,V[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Q,enabledAttributes:I,attributeDivisors:V,object:N,attributes:{},index:null}}function v(N,Q,I,V){const $=c.attributes,H=Q.attributes;let J=0;const de=I.getAttributes();for(const se in de)if(de[se].location>=0){const Me=$[se];let U=H[se];if(U===void 0&&(se==="instanceMatrix"&&N.instanceMatrix&&(U=N.instanceMatrix),se==="instanceColor"&&N.instanceColor&&(U=N.instanceColor)),Me===void 0||Me.attribute!==U||U&&Me.data!==U.data)return!0;J++}return c.attributesNum!==J||c.index!==V}function x(N,Q,I,V){const $={},H=Q.attributes;let J=0;const de=I.getAttributes();for(const se in de)if(de[se].location>=0){let Me=H[se];Me===void 0&&(se==="instanceMatrix"&&N.instanceMatrix&&(Me=N.instanceMatrix),se==="instanceColor"&&N.instanceColor&&(Me=N.instanceColor));const U={};U.attribute=Me,Me&&Me.data&&(U.data=Me.data),$[se]=U,J++}c.attributes=$,c.attributesNum=J,c.index=V}function w(){const N=c.newAttributes;for(let Q=0,I=N.length;Q<I;Q++)N[Q]=0}function y(N){M(N,0)}function M(N,Q){const I=c.newAttributes,V=c.enabledAttributes,$=c.attributeDivisors;I[N]=1,V[N]===0&&(t.enableVertexAttribArray(N),V[N]=1),$[N]!==Q&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,Q),$[N]=Q)}function T(){const N=c.newAttributes,Q=c.enabledAttributes;for(let I=0,V=Q.length;I<V;I++)Q[I]!==N[I]&&(t.disableVertexAttribArray(I),Q[I]=0)}function L(N,Q,I,V,$,H){i.isWebGL2===!0&&(I===5124||I===5125)?t.vertexAttribIPointer(N,Q,I,$,H):t.vertexAttribPointer(N,Q,I,V,$,H)}function _(N,Q,I,V){if(i.isWebGL2===!1&&(N.isInstancedMesh||V.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;w();const $=V.attributes,H=I.getAttributes(),J=Q.defaultAttributeValues;for(const de in H){const se=H[de];if(se.location>=0){let pe=$[de];if(pe===void 0&&(de==="instanceMatrix"&&N.instanceMatrix&&(pe=N.instanceMatrix),de==="instanceColor"&&N.instanceColor&&(pe=N.instanceColor)),pe!==void 0){const Me=pe.normalized,U=pe.itemSize,z=n.get(pe);if(z===void 0)continue;const oe=z.buffer,ce=z.type,be=z.bytesPerElement;if(pe.isInterleavedBufferAttribute){const ge=pe.data,Te=ge.stride,ve=pe.offset;if(ge.isInstancedInterleavedBuffer){for(let E=0;E<se.locationSize;E++)M(se.location+E,ge.meshPerAttribute);N.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let E=0;E<se.locationSize;E++)y(se.location+E);t.bindBuffer(34962,oe);for(let E=0;E<se.locationSize;E++)L(se.location+E,U/se.locationSize,ce,Me,Te*be,(ve+U/se.locationSize*E)*be)}else{if(pe.isInstancedBufferAttribute){for(let ge=0;ge<se.locationSize;ge++)M(se.location+ge,pe.meshPerAttribute);N.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let ge=0;ge<se.locationSize;ge++)y(se.location+ge);t.bindBuffer(34962,oe);for(let ge=0;ge<se.locationSize;ge++)L(se.location+ge,U/se.locationSize,ce,Me,U*be,U/se.locationSize*ge*be)}}else if(J!==void 0){const Me=J[de];if(Me!==void 0)switch(Me.length){case 2:t.vertexAttrib2fv(se.location,Me);break;case 3:t.vertexAttrib3fv(se.location,Me);break;case 4:t.vertexAttrib4fv(se.location,Me);break;default:t.vertexAttrib1fv(se.location,Me)}}}}T()}function C(){F();for(const N in a){const Q=a[N];for(const I in Q){const V=Q[I];for(const $ in V)g(V[$].object),delete V[$];delete Q[I]}delete a[N]}}function P(N){if(a[N.id]===void 0)return;const Q=a[N.id];for(const I in Q){const V=Q[I];for(const $ in V)g(V[$].object),delete V[$];delete Q[I]}delete a[N.id]}function D(N){for(const Q in a){const I=a[Q];if(I[N.id]===void 0)continue;const V=I[N.id];for(const $ in V)g(V[$].object),delete V[$];delete I[N.id]}}function F(){W(),u=!0,c!==l&&(c=l,h(c.object))}function W(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:F,resetDefaultState:W,dispose:C,releaseStatesOfGeometry:P,releaseStatesOfProgram:D,initAttributes:w,enableAttribute:y,disableUnusedAttributes:T}}function jw(t,e,n,i){const r=i.isWebGL2;let s;function o(c){s=c}function a(c,u){t.drawArrays(s,c,u),n.update(u,s,1)}function l(c,u,d){if(d===0)return;let f,h;if(r)f=t,h="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),h="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[h](s,c,u,d),n.update(u,s,d)}this.setMode=o,this.render=a,this.renderInstances=l}function Yw(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(L){if(L==="highp"){if(t.getShaderPrecisionFormat(35633,36338).precision>0&&t.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";L="mediump"}return L==="mediump"&&t.getShaderPrecisionFormat(35633,36337).precision>0&&t.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&t instanceof WebGL2ComputeRenderingContext;let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=n.logarithmicDepthBuffer===!0,d=t.getParameter(34930),f=t.getParameter(35660),h=t.getParameter(3379),g=t.getParameter(34076),m=t.getParameter(34921),p=t.getParameter(36347),v=t.getParameter(36348),x=t.getParameter(36349),w=f>0,y=o||e.has("OES_texture_float"),M=w&&y,T=o?t.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:f,maxTextureSize:h,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:p,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:w,floatFragmentTextures:y,floatVertexTextures:M,maxSamples:T}}function Kw(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Ii,a=new tn,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f,h){const g=d.length!==0||f||i!==0||r;return r=f,n=u(d,h,0),i=d.length,g},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,c()},this.setState=function(d,f,h){const g=d.clippingPlanes,m=d.clipIntersection,p=d.clipShadows,v=t.get(d);if(!r||g===null||g.length===0||s&&!p)s?u(null):c();else{const x=s?0:i,w=x*4;let y=v.clippingState||null;l.value=y,y=u(g,f,w,h);for(let M=0;M!==w;++M)y[M]=n[M];v.clippingState=y,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,h,g){const m=d!==null?d.length:0;let p=null;if(m!==0){if(p=l.value,g!==!0||p===null){const v=h+m*4,x=f.matrixWorldInverse;a.getNormalMatrix(x),(p===null||p.length<v)&&(p=new Float32Array(v));for(let w=0,y=h;w!==m;++w,y+=4)o.copy(d[w]).applyMatrix4(x,a),o.normal.toArray(p,y),p[y+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,p}}function Zw(t){let e=new WeakMap;function n(o,a){return a===ac?o.mapping=Kr:a===lc&&(o.mapping=Zr),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===ac||a===lc)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new hS(l.height/2);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Jw extends Lm{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const zr=4,Cd=[.125,.215,.35,.446,.526,.582],zi=20,wl=new Jw,Td=new nt;let El=null;const Fi=(1+Math.sqrt(5))/2,Dr=1/Fi,Ad=[new j(1,1,1),new j(-1,1,1),new j(1,1,-1),new j(-1,1,-1),new j(0,Fi,Dr),new j(0,Fi,-Dr),new j(Dr,0,Fi),new j(-Dr,0,Fi),new j(Fi,Dr,0),new j(-Fi,Dr,0)];class Ld{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){El=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Dd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(El),e.scissorTest=!1,Uo(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Kr||e.mapping===Zr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),El=this._renderer.getRenderTarget();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Jt,minFilter:Jt,generateMipmaps:!1,type:Xs,format:En,encoding:Ji,depthBuffer:!1},r=Pd(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pd(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Qw(s)),this._blurMaterial=e1(s,e,n)}return r}_compileMaterial(e){const n=new Hn(this._lodPlanes[0],e);this._renderer.compile(n,wl)}_sceneToCubeUV(e,n,i,r){const a=new Qt(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Td),u.toneMapping=$n,u.autoClear=!1;const h=new ou({name:"PMREM.Background",side:mn,depthWrite:!1,depthTest:!1}),g=new Hn(new co,h);let m=!1;const p=e.background;p?p.isColor&&(h.color.copy(p),e.background=null,m=!0):(h.color.copy(Td),m=!0);for(let v=0;v<6;v++){const x=v%3;x===0?(a.up.set(0,l[v],0),a.lookAt(c[v],0,0)):x===1?(a.up.set(0,0,l[v]),a.lookAt(0,c[v],0)):(a.up.set(0,l[v],0),a.lookAt(0,0,c[v]));const w=this._cubeSize;Uo(r,x*w,v>2?w:0,w,w),u.setRenderTarget(r),m&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Kr||e.mapping===Zr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Dd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rd());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Hn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Uo(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,wl)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Ad[(r-1)%Ad.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Hn(this._lodPlanes[r],c),f=c.uniforms,h=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*zi-1),m=s/g,p=isFinite(s)?1+Math.floor(u*m):zi;p>zi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${zi}`);const v=[];let x=0;for(let L=0;L<zi;++L){const _=L/m,C=Math.exp(-_*_/2);v.push(C),L===0?x+=C:L<p&&(x+=2*C)}for(let L=0;L<v.length;L++)v[L]=v[L]/x;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=v,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:w}=this;f.dTheta.value=g,f.mipInt.value=w-i;const y=this._sizeLods[r],M=3*y*(r>w-zr?r-w+zr:0),T=4*(this._cubeSize-y);Uo(n,M,T,3*y,2*y),l.setRenderTarget(n),l.render(d,wl)}}function Qw(t){const e=[],n=[],i=[];let r=t;const s=t-zr+1+Cd.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-zr?l=Cd[o-t+zr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],h=6,g=6,m=3,p=2,v=1,x=new Float32Array(m*g*h),w=new Float32Array(p*g*h),y=new Float32Array(v*g*h);for(let T=0;T<h;T++){const L=T%3*2/3-1,_=T>2?0:-1,C=[L,_,0,L+2/3,_,0,L+2/3,_+1,0,L,_,0,L+2/3,_+1,0,L,_+1,0];x.set(C,m*g*T),w.set(f,p*g*T);const P=[T,T,T,T,T,T];y.set(P,v*g*T)}const M=new Mi;M.setAttribute("position",new Tn(x,m)),M.setAttribute("uv",new Tn(w,p)),M.setAttribute("faceIndex",new Tn(y,v)),e.push(M),r>zr&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Pd(t,e,n){const i=new Qi(t,e,n);return i.texture.mapping=Ta,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Uo(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function e1(t,e,n){const i=new Float32Array(zi),r=new j(0,1,0);return new er({name:"SphericalGaussianBlur",defines:{n:zi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:lu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function Rd(){return new er({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function Dd(){return new er({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function lu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function t1(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===ac||l===lc,u=l===Kr||l===Zr;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return n===null&&(n=new Ld(t)),d=c?n.fromEquirectangular(a,d):n.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(c&&d&&d.height>0||u&&d&&r(d)){n===null&&(n=new Ld(t));const f=c?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function n1(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function i1(t,e,n,i){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete r[f.id];const h=s.get(f);h&&(e.remove(h),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,n.memory.geometries++),f}function l(d){const f=d.attributes;for(const g in f)e.update(f[g],34962);const h=d.morphAttributes;for(const g in h){const m=h[g];for(let p=0,v=m.length;p<v;p++)e.update(m[p],34962)}}function c(d){const f=[],h=d.index,g=d.attributes.position;let m=0;if(h!==null){const x=h.array;m=h.version;for(let w=0,y=x.length;w<y;w+=3){const M=x[w+0],T=x[w+1],L=x[w+2];f.push(M,T,T,L,L,M)}}else{const x=g.array;m=g.version;for(let w=0,y=x.length/3-1;w<y;w+=3){const M=w+0,T=w+1,L=w+2;f.push(M,T,T,L,L,M)}}const p=new(bm(f)?Am:Tm)(f,1);p.version=m;const v=s.get(d);v&&e.remove(v),s.set(d,p)}function u(d){const f=s.get(d);if(f){const h=d.index;h!==null&&f.version<h.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function r1(t,e,n,i){const r=i.isWebGL2;let s;function o(f){s=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function u(f,h){t.drawElements(s,h,a,f*l),n.update(h,s,1)}function d(f,h,g){if(g===0)return;let m,p;if(r)m=t,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](s,h,a,f*l,g),n.update(h,s,g)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=d}function s1(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case 4:n.triangles+=a*(s/3);break;case 1:n.lines+=a*(s/2);break;case 3:n.lines+=a*(s-1);break;case 2:n.lines+=a*s;break;case 0:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.frame++,n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function o1(t,e){return t[0]-e[0]}function a1(t,e){return Math.abs(e[1])-Math.abs(t[1])}function Cl(t,e){let n=1;const i=e.isInterleavedBufferAttribute?e.data.array:e.array;i instanceof Int8Array?n=127:i instanceof Uint8Array?n=255:i instanceof Uint16Array?n=65535:i instanceof Int16Array?n=32767:i instanceof Int32Array?n=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",i),t.divideScalar(n)}function l1(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new xt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,d,f){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,m=g!==void 0?g.length:0;let p=s.get(u);if(p===void 0||p.count!==m){let Q=function(){W.dispose(),s.delete(u),u.removeEventListener("dispose",Q)};p!==void 0&&p.texture.dispose();const w=u.morphAttributes.position!==void 0,y=u.morphAttributes.normal!==void 0,M=u.morphAttributes.color!==void 0,T=u.morphAttributes.position||[],L=u.morphAttributes.normal||[],_=u.morphAttributes.color||[];let C=0;w===!0&&(C=1),y===!0&&(C=2),M===!0&&(C=3);let P=u.attributes.position.count*C,D=1;P>e.maxTextureSize&&(D=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const F=new Float32Array(P*D*4*m),W=new Em(F,P,D,m);W.type=Vi,W.needsUpdate=!0;const N=C*4;for(let I=0;I<m;I++){const V=T[I],$=L[I],H=_[I],J=P*D*4*I;for(let de=0;de<V.count;de++){const se=de*N;w===!0&&(o.fromBufferAttribute(V,de),V.normalized===!0&&Cl(o,V),F[J+se+0]=o.x,F[J+se+1]=o.y,F[J+se+2]=o.z,F[J+se+3]=0),y===!0&&(o.fromBufferAttribute($,de),$.normalized===!0&&Cl(o,$),F[J+se+4]=o.x,F[J+se+5]=o.y,F[J+se+6]=o.z,F[J+se+7]=0),M===!0&&(o.fromBufferAttribute(H,de),H.normalized===!0&&Cl(o,H),F[J+se+8]=o.x,F[J+se+9]=o.y,F[J+se+10]=o.z,F[J+se+11]=H.itemSize===4?o.w:1)}}p={count:m,texture:W,size:new tt(P,D)},s.set(u,p),u.addEventListener("dispose",Q)}let v=0;for(let w=0;w<h.length;w++)v+=h[w];const x=u.morphTargetsRelative?1:1-v;f.getUniforms().setValue(t,"morphTargetBaseInfluence",x),f.getUniforms().setValue(t,"morphTargetInfluences",h),f.getUniforms().setValue(t,"morphTargetsTexture",p.texture,n),f.getUniforms().setValue(t,"morphTargetsTextureSize",p.size)}else{const g=h===void 0?0:h.length;let m=i[u.id];if(m===void 0||m.length!==g){m=[];for(let y=0;y<g;y++)m[y]=[y,0];i[u.id]=m}for(let y=0;y<g;y++){const M=m[y];M[0]=y,M[1]=h[y]}m.sort(a1);for(let y=0;y<8;y++)y<g&&m[y][1]?(a[y][0]=m[y][0],a[y][1]=m[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(o1);const p=u.morphAttributes.position,v=u.morphAttributes.normal;let x=0;for(let y=0;y<8;y++){const M=a[y],T=M[0],L=M[1];T!==Number.MAX_SAFE_INTEGER&&L?(p&&u.getAttribute("morphTarget"+y)!==p[T]&&u.setAttribute("morphTarget"+y,p[T]),v&&u.getAttribute("morphNormal"+y)!==v[T]&&u.setAttribute("morphNormal"+y,v[T]),r[y]=L,x+=L):(p&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),v&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),r[y]=0)}const w=u.morphTargetsRelative?1:1-x;f.getUniforms().setValue(t,"morphTargetBaseInfluence",w),f.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function c1(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);return r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),n.update(l.instanceMatrix,34962),l.instanceColor!==null&&n.update(l.instanceColor,34962)),d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}const Im=new vn,Fm=new Em,Nm=new Kb,Om=new Pm,Id=[],Fd=[],Nd=new Float32Array(16),Od=new Float32Array(9),Bd=new Float32Array(4);function os(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Id[r];if(s===void 0&&(s=new Float32Array(r),Id[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Rt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Dt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Pa(t,e){let n=Fd[e];n===void 0&&(n=new Int32Array(e),Fd[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function u1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function f1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2fv(this.addr,e),Dt(n,e)}}function d1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Rt(n,e))return;t.uniform3fv(this.addr,e),Dt(n,e)}}function h1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4fv(this.addr,e),Dt(n,e)}}function p1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Dt(n,e)}else{if(Rt(n,i))return;Bd.set(i),t.uniformMatrix2fv(this.addr,!1,Bd),Dt(n,i)}}function m1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Dt(n,e)}else{if(Rt(n,i))return;Od.set(i),t.uniformMatrix3fv(this.addr,!1,Od),Dt(n,i)}}function g1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Dt(n,e)}else{if(Rt(n,i))return;Nd.set(i),t.uniformMatrix4fv(this.addr,!1,Nd),Dt(n,i)}}function v1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function _1(t,e){const n=this.cache;Rt(n,e)||(t.uniform2iv(this.addr,e),Dt(n,e))}function x1(t,e){const n=this.cache;Rt(n,e)||(t.uniform3iv(this.addr,e),Dt(n,e))}function y1(t,e){const n=this.cache;Rt(n,e)||(t.uniform4iv(this.addr,e),Dt(n,e))}function b1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function S1(t,e){const n=this.cache;Rt(n,e)||(t.uniform2uiv(this.addr,e),Dt(n,e))}function M1(t,e){const n=this.cache;Rt(n,e)||(t.uniform3uiv(this.addr,e),Dt(n,e))}function w1(t,e){const n=this.cache;Rt(n,e)||(t.uniform4uiv(this.addr,e),Dt(n,e))}function E1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2D(e||Im,r)}function C1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Nm,r)}function T1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Om,r)}function A1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Fm,r)}function L1(t){switch(t){case 5126:return u1;case 35664:return f1;case 35665:return d1;case 35666:return h1;case 35674:return p1;case 35675:return m1;case 35676:return g1;case 5124:case 35670:return v1;case 35667:case 35671:return _1;case 35668:case 35672:return x1;case 35669:case 35673:return y1;case 5125:return b1;case 36294:return S1;case 36295:return M1;case 36296:return w1;case 35678:case 36198:case 36298:case 36306:case 35682:return E1;case 35679:case 36299:case 36307:return C1;case 35680:case 36300:case 36308:case 36293:return T1;case 36289:case 36303:case 36311:case 36292:return A1}}function P1(t,e){t.uniform1fv(this.addr,e)}function R1(t,e){const n=os(e,this.size,2);t.uniform2fv(this.addr,n)}function D1(t,e){const n=os(e,this.size,3);t.uniform3fv(this.addr,n)}function I1(t,e){const n=os(e,this.size,4);t.uniform4fv(this.addr,n)}function F1(t,e){const n=os(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function N1(t,e){const n=os(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function O1(t,e){const n=os(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function B1(t,e){t.uniform1iv(this.addr,e)}function z1(t,e){t.uniform2iv(this.addr,e)}function k1(t,e){t.uniform3iv(this.addr,e)}function U1(t,e){t.uniform4iv(this.addr,e)}function V1(t,e){t.uniform1uiv(this.addr,e)}function H1(t,e){t.uniform2uiv(this.addr,e)}function G1(t,e){t.uniform3uiv(this.addr,e)}function W1(t,e){t.uniform4uiv(this.addr,e)}function $1(t,e,n){const i=e.length,r=Pa(n,i);t.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)n.setTexture2D(e[s]||Im,r[s])}function q1(t,e,n){const i=e.length,r=Pa(n,i);t.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)n.setTexture3D(e[s]||Nm,r[s])}function X1(t,e,n){const i=e.length,r=Pa(n,i);t.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)n.setTextureCube(e[s]||Om,r[s])}function j1(t,e,n){const i=e.length,r=Pa(n,i);t.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)n.setTexture2DArray(e[s]||Fm,r[s])}function Y1(t){switch(t){case 5126:return P1;case 35664:return R1;case 35665:return D1;case 35666:return I1;case 35674:return F1;case 35675:return N1;case 35676:return O1;case 5124:case 35670:return B1;case 35667:case 35671:return z1;case 35668:case 35672:return k1;case 35669:case 35673:return U1;case 5125:return V1;case 36294:return H1;case 36295:return G1;case 36296:return W1;case 35678:case 36198:case 36298:case 36306:case 35682:return $1;case 35679:case 36299:case 36307:return q1;case 35680:case 36300:case 36308:case 36293:return X1;case 36289:case 36303:case 36311:case 36292:return j1}}class K1{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.setValue=L1(n.type)}}class Z1{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.size=n.size,this.setValue=Y1(n.type)}}class J1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Tl=/(\w+)(\])?(\[|\.)?/g;function zd(t,e){t.seq.push(e),t.map[e.id]=e}function Q1(t,e,n){const i=t.name,r=i.length;for(Tl.lastIndex=0;;){const s=Tl.exec(i),o=Tl.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){zd(n,c===void 0?new K1(a,t,e):new Z1(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new J1(a),zd(n,d)),n=d}}}class jo{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,35718);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);Q1(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function kd(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}let eE=0;function tE(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function nE(t){switch(t){case Ji:return["Linear","( value )"];case lt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",t),["Linear","( value )"]}}function Ud(t,e,n){const i=t.getShaderParameter(e,35713),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+tE(t.getShaderSource(e),o)}else return r}function iE(t,e){const n=nE(e);return"vec4 "+t+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function rE(t,e){let n;switch(e){case Sb:n="Linear";break;case Mb:n="Reinhard";break;case wb:n="OptimizedCineon";break;case Eb:n="ACESFilmic";break;case Cb:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function sE(t){return[t.extensionDerivatives||!!t.envMapCubeUVHeight||t.bumpMap||t.tangentSpaceNormalMap||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ss).join(`
`)}function oE(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function aE(t,e){const n={},i=t.getProgramParameter(e,35721);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Ss(t){return t!==""}function Vd(t,e){return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Hd(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const lE=/^[ \t]*#include +<([\w\d./]+)>/gm;function hc(t){return t.replace(lE,cE)}function cE(t,e){const n=ke[e];if(n===void 0)throw new Error("Can not resolve #include <"+e+">");return hc(n)}const uE=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,fE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gd(t){return t.replace(fE,Bm).replace(uE,dE)}function dE(t,e,n,i){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),Bm(t,e,n,i)}function Bm(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Wd(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function hE(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===mm?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Qy?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===bs&&(e="SHADOWMAP_TYPE_VSM"),e}function pE(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Kr:case Zr:e="ENVMAP_TYPE_CUBE";break;case Ta:e="ENVMAP_TYPE_CUBE_UV";break}return e}function mE(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Zr:e="ENVMAP_MODE_REFRACTION";break}return e}function gE(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case _m:e="ENVMAP_BLENDING_MULTIPLY";break;case yb:e="ENVMAP_BLENDING_MIX";break;case bb:e="ENVMAP_BLENDING_ADD";break}return e}function vE(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function _E(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=hE(n),c=pE(n),u=mE(n),d=gE(n),f=vE(n),h=n.isWebGL2?"":sE(n),g=oE(s),m=r.createProgram();let p,v,x=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=[g].filter(Ss).join(`
`),p.length>0&&(p+=`
`),v=[h,g].filter(Ss).join(`
`),v.length>0&&(v+=`
`)):(p=[Wd(n),"#define SHADER_NAME "+n.shaderName,g,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.supportsVertexTextures?"#define VERTEX_TEXTURES":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.displacementMap&&n.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",n.specularColorMap?"#define USE_SPECULARCOLORMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEENCOLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ss).join(`
`),v=[h,Wd(n),"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",n.specularColorMap?"#define USE_SPECULARCOLORMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEENCOLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==$n?"#define TONE_MAPPING":"",n.toneMapping!==$n?ke.tonemapping_pars_fragment:"",n.toneMapping!==$n?rE("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ke.encodings_pars_fragment,iE("linearToOutputTexel",n.outputEncoding),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ss).join(`
`)),o=hc(o),o=Vd(o,n),o=Hd(o,n),a=hc(a),a=Vd(a,n),a=Hd(a,n),o=Gd(o),a=Gd(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,v=["#define varying in",n.glslVersion===dd?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===dd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const w=x+p+o,y=x+v+a,M=kd(r,35633,w),T=kd(r,35632,y);if(r.attachShader(m,M),r.attachShader(m,T),n.index0AttributeName!==void 0?r.bindAttribLocation(m,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m),t.debug.checkShaderErrors){const C=r.getProgramInfoLog(m).trim(),P=r.getShaderInfoLog(M).trim(),D=r.getShaderInfoLog(T).trim();let F=!0,W=!0;if(r.getProgramParameter(m,35714)===!1){F=!1;const N=Ud(r,M,"vertex"),Q=Ud(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,35715)+`

Program Info Log: `+C+`
`+N+`
`+Q)}else C!==""?console.warn("THREE.WebGLProgram: Program Info Log:",C):(P===""||D==="")&&(W=!1);W&&(this.diagnostics={runnable:F,programLog:C,vertexShader:{log:P,prefix:p},fragmentShader:{log:D,prefix:v}})}r.deleteShader(M),r.deleteShader(T);let L;this.getUniforms=function(){return L===void 0&&(L=new jo(r,m)),L};let _;return this.getAttributes=function(){return _===void 0&&(_=aE(r,m)),_},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.name=n.shaderName,this.id=eE++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=M,this.fragmentShader=T,this}let xE=0;class yE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;return n.has(e)===!1&&n.set(e,new Set),n.get(e)}_getShaderStage(e){const n=this.shaderCache;if(n.has(e)===!1){const i=new bE(e);n.set(e,i)}return n.get(e)}}class bE{constructor(e){this.id=xE++,this.code=e,this.usedTimes=0}}function SE(t,e,n,i,r,s,o){const a=new Cm,l=new yE,c=[],u=r.isWebGL2,d=r.logarithmicDepthBuffer,f=r.vertexTextures;let h=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(_,C,P,D,F){const W=D.fog,N=F.geometry,Q=_.isMeshStandardMaterial?D.environment:null,I=(_.isMeshStandardMaterial?n:e).get(_.envMap||Q),V=!!I&&I.mapping===Ta?I.image.height:null,$=g[_.type];_.precision!==null&&(h=r.getMaxPrecision(_.precision),h!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",h,"instead."));const H=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,J=H!==void 0?H.length:0;let de=0;N.morphAttributes.position!==void 0&&(de=1),N.morphAttributes.normal!==void 0&&(de=2),N.morphAttributes.color!==void 0&&(de=3);let se,pe,Me,U;if($){const Te=wn[$];se=Te.vertexShader,pe=Te.fragmentShader}else se=_.vertexShader,pe=_.fragmentShader,l.update(_),Me=l.getVertexShaderID(_),U=l.getFragmentShaderID(_);const z=t.getRenderTarget(),oe=_.alphaTest>0,ce=_.clearcoat>0,be=_.iridescence>0;return{isWebGL2:u,shaderID:$,shaderName:_.type,vertexShader:se,fragmentShader:pe,defines:_.defines,customVertexShaderID:Me,customFragmentShaderID:U,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:h,instancing:F.isInstancedMesh===!0,instancingColor:F.isInstancedMesh===!0&&F.instanceColor!==null,supportsVertexTextures:f,outputEncoding:z===null?t.outputEncoding:z.isXRRenderTarget===!0?z.texture.encoding:Ji,map:!!_.map,matcap:!!_.matcap,envMap:!!I,envMapMode:I&&I.mapping,envMapCubeUVHeight:V,lightMap:!!_.lightMap,aoMap:!!_.aoMap,emissiveMap:!!_.emissiveMap,bumpMap:!!_.bumpMap,normalMap:!!_.normalMap,objectSpaceNormalMap:_.normalMapType===qb,tangentSpaceNormalMap:_.normalMapType===$b,decodeVideoTexture:!!_.map&&_.map.isVideoTexture===!0&&_.map.encoding===lt,clearcoat:ce,clearcoatMap:ce&&!!_.clearcoatMap,clearcoatRoughnessMap:ce&&!!_.clearcoatRoughnessMap,clearcoatNormalMap:ce&&!!_.clearcoatNormalMap,iridescence:be,iridescenceMap:be&&!!_.iridescenceMap,iridescenceThicknessMap:be&&!!_.iridescenceThicknessMap,displacementMap:!!_.displacementMap,roughnessMap:!!_.roughnessMap,metalnessMap:!!_.metalnessMap,specularMap:!!_.specularMap,specularIntensityMap:!!_.specularIntensityMap,specularColorMap:!!_.specularColorMap,opaque:_.transparent===!1&&_.blending===Wr,alphaMap:!!_.alphaMap,alphaTest:oe,gradientMap:!!_.gradientMap,sheen:_.sheen>0,sheenColorMap:!!_.sheenColorMap,sheenRoughnessMap:!!_.sheenRoughnessMap,transmission:_.transmission>0,transmissionMap:!!_.transmissionMap,thicknessMap:!!_.thicknessMap,combine:_.combine,vertexTangents:!!_.normalMap&&!!N.attributes.tangent,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUvs:!!_.map||!!_.bumpMap||!!_.normalMap||!!_.specularMap||!!_.alphaMap||!!_.emissiveMap||!!_.roughnessMap||!!_.metalnessMap||!!_.clearcoatMap||!!_.clearcoatRoughnessMap||!!_.clearcoatNormalMap||!!_.iridescenceMap||!!_.iridescenceThicknessMap||!!_.displacementMap||!!_.transmissionMap||!!_.thicknessMap||!!_.specularIntensityMap||!!_.specularColorMap||!!_.sheenColorMap||!!_.sheenRoughnessMap,uvsVertexOnly:!(!!_.map||!!_.bumpMap||!!_.normalMap||!!_.specularMap||!!_.alphaMap||!!_.emissiveMap||!!_.roughnessMap||!!_.metalnessMap||!!_.clearcoatNormalMap||!!_.iridescenceMap||!!_.iridescenceThicknessMap||_.transmission>0||!!_.transmissionMap||!!_.thicknessMap||!!_.specularIntensityMap||!!_.specularColorMap||_.sheen>0||!!_.sheenColorMap||!!_.sheenRoughnessMap)&&!!_.displacementMap,fog:!!W,useFog:_.fog===!0,fogExp2:W&&W.isFogExp2,flatShading:!!_.flatShading,sizeAttenuation:_.sizeAttenuation,logarithmicDepthBuffer:d,skinning:F.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:de,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:t.shadowMap.enabled&&P.length>0,shadowMapType:t.shadowMap.type,toneMapping:_.toneMapped?t.toneMapping:$n,physicallyCorrectLights:t.physicallyCorrectLights,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Yr,flipSided:_.side===mn,useDepthPacking:!!_.depthPacking,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionDerivatives:_.extensions&&_.extensions.derivatives,extensionFragDepth:_.extensions&&_.extensions.fragDepth,extensionDrawBuffers:_.extensions&&_.extensions.drawBuffers,extensionShaderTextureLOD:_.extensions&&_.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:_.customProgramCacheKey()}}function p(_){const C=[];if(_.shaderID?C.push(_.shaderID):(C.push(_.customVertexShaderID),C.push(_.customFragmentShaderID)),_.defines!==void 0)for(const P in _.defines)C.push(P),C.push(_.defines[P]);return _.isRawShaderMaterial===!1&&(v(C,_),x(C,_),C.push(t.outputEncoding)),C.push(_.customProgramCacheKey),C.join()}function v(_,C){_.push(C.precision),_.push(C.outputEncoding),_.push(C.envMapMode),_.push(C.envMapCubeUVHeight),_.push(C.combine),_.push(C.vertexUvs),_.push(C.fogExp2),_.push(C.sizeAttenuation),_.push(C.morphTargetsCount),_.push(C.morphAttributeCount),_.push(C.numDirLights),_.push(C.numPointLights),_.push(C.numSpotLights),_.push(C.numHemiLights),_.push(C.numRectAreaLights),_.push(C.numDirLightShadows),_.push(C.numPointLightShadows),_.push(C.numSpotLightShadows),_.push(C.shadowMapType),_.push(C.toneMapping),_.push(C.numClippingPlanes),_.push(C.numClipIntersection),_.push(C.depthPacking)}function x(_,C){a.disableAll(),C.isWebGL2&&a.enable(0),C.supportsVertexTextures&&a.enable(1),C.instancing&&a.enable(2),C.instancingColor&&a.enable(3),C.map&&a.enable(4),C.matcap&&a.enable(5),C.envMap&&a.enable(6),C.lightMap&&a.enable(7),C.aoMap&&a.enable(8),C.emissiveMap&&a.enable(9),C.bumpMap&&a.enable(10),C.normalMap&&a.enable(11),C.objectSpaceNormalMap&&a.enable(12),C.tangentSpaceNormalMap&&a.enable(13),C.clearcoat&&a.enable(14),C.clearcoatMap&&a.enable(15),C.clearcoatRoughnessMap&&a.enable(16),C.clearcoatNormalMap&&a.enable(17),C.iridescence&&a.enable(18),C.iridescenceMap&&a.enable(19),C.iridescenceThicknessMap&&a.enable(20),C.displacementMap&&a.enable(21),C.specularMap&&a.enable(22),C.roughnessMap&&a.enable(23),C.metalnessMap&&a.enable(24),C.gradientMap&&a.enable(25),C.alphaMap&&a.enable(26),C.alphaTest&&a.enable(27),C.vertexColors&&a.enable(28),C.vertexAlphas&&a.enable(29),C.vertexUvs&&a.enable(30),C.vertexTangents&&a.enable(31),C.uvsVertexOnly&&a.enable(32),C.fog&&a.enable(33),_.push(a.mask),a.disableAll(),C.useFog&&a.enable(0),C.flatShading&&a.enable(1),C.logarithmicDepthBuffer&&a.enable(2),C.skinning&&a.enable(3),C.morphTargets&&a.enable(4),C.morphNormals&&a.enable(5),C.morphColors&&a.enable(6),C.premultipliedAlpha&&a.enable(7),C.shadowMapEnabled&&a.enable(8),C.physicallyCorrectLights&&a.enable(9),C.doubleSided&&a.enable(10),C.flipSided&&a.enable(11),C.useDepthPacking&&a.enable(12),C.dithering&&a.enable(13),C.specularIntensityMap&&a.enable(14),C.specularColorMap&&a.enable(15),C.transmission&&a.enable(16),C.transmissionMap&&a.enable(17),C.thicknessMap&&a.enable(18),C.sheen&&a.enable(19),C.sheenColorMap&&a.enable(20),C.sheenRoughnessMap&&a.enable(21),C.decodeVideoTexture&&a.enable(22),C.opaque&&a.enable(23),_.push(a.mask)}function w(_){const C=g[_.type];let P;if(C){const D=wn[C];P=cS.clone(D.uniforms)}else P=_.uniforms;return P}function y(_,C){let P;for(let D=0,F=c.length;D<F;D++){const W=c[D];if(W.cacheKey===C){P=W,++P.usedTimes;break}}return P===void 0&&(P=new _E(t,C,_,s),c.push(P)),P}function M(_){if(--_.usedTimes===0){const C=c.indexOf(_);c[C]=c[c.length-1],c.pop(),_.destroy()}}function T(_){l.remove(_)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:w,acquireProgram:y,releaseProgram:M,releaseShaderCache:T,programs:c,dispose:L}}function ME(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function wE(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function $d(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function qd(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d,f,h,g,m,p){let v=t[e];return v===void 0?(v={id:d.id,object:d,geometry:f,material:h,groupOrder:g,renderOrder:d.renderOrder,z:m,group:p},t[e]=v):(v.id=d.id,v.object=d,v.geometry=f,v.material=h,v.groupOrder=g,v.renderOrder=d.renderOrder,v.z=m,v.group=p),e++,v}function a(d,f,h,g,m,p){const v=o(d,f,h,g,m,p);h.transmission>0?i.push(v):h.transparent===!0?r.push(v):n.push(v)}function l(d,f,h,g,m,p){const v=o(d,f,h,g,m,p);h.transmission>0?i.unshift(v):h.transparent===!0?r.unshift(v):n.unshift(v)}function c(d,f){n.length>1&&n.sort(d||wE),i.length>1&&i.sort(f||$d),r.length>1&&r.sort(f||$d)}function u(){for(let d=e,f=t.length;d<f;d++){const h=t[d];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function EE(){let t=new WeakMap;function e(i,r){let s;return t.has(i)===!1?(s=new qd,t.set(i,[s])):r>=t.get(i).length?(s=new qd,t.get(i).push(s)):s=t.get(i)[r],s}function n(){t=new WeakMap}return{get:e,dispose:n}}function CE(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new j,color:new nt};break;case"SpotLight":n={position:new j,direction:new j,color:new nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new j,color:new nt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new j,skyColor:new nt,groundColor:new nt};break;case"RectAreaLight":n={color:new nt,position:new j,halfWidth:new j,halfHeight:new j};break}return t[e.id]=n,n}}}function TE(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let AE=0;function LE(t,e){return(e.castShadow?1:0)-(t.castShadow?1:0)}function PE(t,e){const n=new CE,i=TE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let u=0;u<9;u++)r.probe.push(new j);const s=new j,o=new St,a=new St;function l(u,d){let f=0,h=0,g=0;for(let C=0;C<9;C++)r.probe[C].set(0,0,0);let m=0,p=0,v=0,x=0,w=0,y=0,M=0,T=0;u.sort(LE);const L=d!==!0?Math.PI:1;for(let C=0,P=u.length;C<P;C++){const D=u[C],F=D.color,W=D.intensity,N=D.distance,Q=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)f+=F.r*W*L,h+=F.g*W*L,g+=F.b*W*L;else if(D.isLightProbe)for(let I=0;I<9;I++)r.probe[I].addScaledVector(D.sh.coefficients[I],W);else if(D.isDirectionalLight){const I=n.get(D);if(I.color.copy(D.color).multiplyScalar(D.intensity*L),D.castShadow){const V=D.shadow,$=i.get(D);$.shadowBias=V.bias,$.shadowNormalBias=V.normalBias,$.shadowRadius=V.radius,$.shadowMapSize=V.mapSize,r.directionalShadow[m]=$,r.directionalShadowMap[m]=Q,r.directionalShadowMatrix[m]=D.shadow.matrix,y++}r.directional[m]=I,m++}else if(D.isSpotLight){const I=n.get(D);if(I.position.setFromMatrixPosition(D.matrixWorld),I.color.copy(F).multiplyScalar(W*L),I.distance=N,I.coneCos=Math.cos(D.angle),I.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),I.decay=D.decay,D.castShadow){const V=D.shadow,$=i.get(D);$.shadowBias=V.bias,$.shadowNormalBias=V.normalBias,$.shadowRadius=V.radius,$.shadowMapSize=V.mapSize,r.spotShadow[v]=$,r.spotShadowMap[v]=Q,r.spotShadowMatrix[v]=D.shadow.matrix,T++}r.spot[v]=I,v++}else if(D.isRectAreaLight){const I=n.get(D);I.color.copy(F).multiplyScalar(W),I.halfWidth.set(D.width*.5,0,0),I.halfHeight.set(0,D.height*.5,0),r.rectArea[x]=I,x++}else if(D.isPointLight){const I=n.get(D);if(I.color.copy(D.color).multiplyScalar(D.intensity*L),I.distance=D.distance,I.decay=D.decay,D.castShadow){const V=D.shadow,$=i.get(D);$.shadowBias=V.bias,$.shadowNormalBias=V.normalBias,$.shadowRadius=V.radius,$.shadowMapSize=V.mapSize,$.shadowCameraNear=V.camera.near,$.shadowCameraFar=V.camera.far,r.pointShadow[p]=$,r.pointShadowMap[p]=Q,r.pointShadowMatrix[p]=D.shadow.matrix,M++}r.point[p]=I,p++}else if(D.isHemisphereLight){const I=n.get(D);I.skyColor.copy(D.color).multiplyScalar(W*L),I.groundColor.copy(D.groundColor).multiplyScalar(W*L),r.hemi[w]=I,w++}}x>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=xe.LTC_FLOAT_1,r.rectAreaLTC2=xe.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=xe.LTC_HALF_1,r.rectAreaLTC2=xe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=h,r.ambient[2]=g;const _=r.hash;(_.directionalLength!==m||_.pointLength!==p||_.spotLength!==v||_.rectAreaLength!==x||_.hemiLength!==w||_.numDirectionalShadows!==y||_.numPointShadows!==M||_.numSpotShadows!==T)&&(r.directional.length=m,r.spot.length=v,r.rectArea.length=x,r.point.length=p,r.hemi.length=w,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=M,r.pointShadowMap.length=M,r.spotShadow.length=T,r.spotShadowMap.length=T,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=M,r.spotShadowMatrix.length=T,_.directionalLength=m,_.pointLength=p,_.spotLength=v,_.rectAreaLength=x,_.hemiLength=w,_.numDirectionalShadows=y,_.numPointShadows=M,_.numSpotShadows=T,r.version=AE++)}function c(u,d){let f=0,h=0,g=0,m=0,p=0;const v=d.matrixWorldInverse;for(let x=0,w=u.length;x<w;x++){const y=u[x];if(y.isDirectionalLight){const M=r.directional[f];M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(v),f++}else if(y.isSpotLight){const M=r.spot[g];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(v),M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(v),g++}else if(y.isRectAreaLight){const M=r.rectArea[m];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(v),a.identity(),o.copy(y.matrixWorld),o.premultiply(v),a.extractRotation(o),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),m++}else if(y.isPointLight){const M=r.point[h];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(v),h++}else if(y.isHemisphereLight){const M=r.hemi[p];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(v),p++}}}return{setup:l,setupView:c,state:r}}function Xd(t,e){const n=new PE(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(d){i.push(d)}function a(d){r.push(d)}function l(d){n.setup(i,d)}function c(d){n.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function RE(t,e){let n=new WeakMap;function i(s,o=0){let a;return n.has(s)===!1?(a=new Xd(t,e),n.set(s,[a])):o>=n.get(s).length?(a=new Xd(t,e),n.get(s).push(a)):a=n.get(s)[o],a}function r(){n=new WeakMap}return{get:i,dispose:r}}class DE extends La{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Gb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class IE extends La{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new j,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const FE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,NE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function OE(t,e,n){let i=new Rm;const r=new tt,s=new tt,o=new xt,a=new DE({depthPacking:Wb}),l=new IE,c={},u=n.maxTextureSize,d={0:mn,1:qs,2:Yr},f=new er({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new tt},radius:{value:4}},vertexShader:FE,fragmentShader:NE}),h=f.clone();h.defines.HORIZONTAL_PASS=1;const g=new Mi;g.setAttribute("position",new Tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new Hn(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=mm,this.render=function(y,M,T){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||y.length===0)return;const L=t.getRenderTarget(),_=t.getActiveCubeFace(),C=t.getActiveMipmapLevel(),P=t.state;P.setBlending(mi),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);for(let D=0,F=y.length;D<F;D++){const W=y[D],N=W.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const Q=N.getFrameExtents();if(r.multiply(Q),s.copy(N.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Q.x),r.x=s.x*Q.x,N.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Q.y),r.y=s.y*Q.y,N.mapSize.y=s.y)),N.map===null){const V=this.type!==bs?{minFilter:Nt,magFilter:Nt}:{};N.map=new Qi(r.x,r.y,V),N.map.texture.name=W.name+".shadowMap",N.camera.updateProjectionMatrix()}t.setRenderTarget(N.map),t.clear();const I=N.getViewportCount();for(let V=0;V<I;V++){const $=N.getViewport(V);o.set(s.x*$.x,s.y*$.y,s.x*$.z,s.y*$.w),P.viewport(o),N.updateMatrices(W,V),i=N.getFrustum(),w(M,T,N.camera,W,this.type)}N.isPointLightShadow!==!0&&this.type===bs&&v(N,T),N.needsUpdate=!1}p.needsUpdate=!1,t.setRenderTarget(L,_,C)};function v(y,M){const T=e.update(m);f.defines.VSM_SAMPLES!==y.blurSamples&&(f.defines.VSM_SAMPLES=y.blurSamples,h.defines.VSM_SAMPLES=y.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new Qi(r.x,r.y)),f.uniforms.shadow_pass.value=y.map.texture,f.uniforms.resolution.value=y.mapSize,f.uniforms.radius.value=y.radius,t.setRenderTarget(y.mapPass),t.clear(),t.renderBufferDirect(M,null,T,f,m,null),h.uniforms.shadow_pass.value=y.mapPass.texture,h.uniforms.resolution.value=y.mapSize,h.uniforms.radius.value=y.radius,t.setRenderTarget(y.map),t.clear(),t.renderBufferDirect(M,null,T,h,m,null)}function x(y,M,T,L,_,C){let P=null;const D=T.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(D!==void 0?P=D:P=T.isPointLight===!0?l:a,t.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0){const F=P.uuid,W=M.uuid;let N=c[F];N===void 0&&(N={},c[F]=N);let Q=N[W];Q===void 0&&(Q=P.clone(),N[W]=Q),P=Q}return P.visible=M.visible,P.wireframe=M.wireframe,C===bs?P.side=M.shadowSide!==null?M.shadowSide:M.side:P.side=M.shadowSide!==null?M.shadowSide:d[M.side],P.alphaMap=M.alphaMap,P.alphaTest=M.alphaTest,P.clipShadows=M.clipShadows,P.clippingPlanes=M.clippingPlanes,P.clipIntersection=M.clipIntersection,P.displacementMap=M.displacementMap,P.displacementScale=M.displacementScale,P.displacementBias=M.displacementBias,P.wireframeLinewidth=M.wireframeLinewidth,P.linewidth=M.linewidth,T.isPointLight===!0&&P.isMeshDistanceMaterial===!0&&(P.referencePosition.setFromMatrixPosition(T.matrixWorld),P.nearDistance=L,P.farDistance=_),P}function w(y,M,T,L,_){if(y.visible===!1)return;if(y.layers.test(M.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&_===bs)&&(!y.frustumCulled||i.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,y.matrixWorld);const D=e.update(y),F=y.material;if(Array.isArray(F)){const W=D.groups;for(let N=0,Q=W.length;N<Q;N++){const I=W[N],V=F[I.materialIndex];if(V&&V.visible){const $=x(y,V,L,T.near,T.far,_);t.renderBufferDirect(T,null,D,$,y,I)}}}else if(F.visible){const W=x(y,F,L,T.near,T.far,_);t.renderBufferDirect(T,null,D,W,y,null)}}const P=y.children;for(let D=0,F=P.length;D<F;D++)w(P[D],M,T,L,_)}}function BE(t,e,n){const i=n.isWebGL2;function r(){let O=!1;const we=new xt;let ne=null;const Ce=new xt(0,0,0,0);return{setMask:function(Ee){ne!==Ee&&!O&&(t.colorMask(Ee,Ee,Ee,Ee),ne=Ee)},setLocked:function(Ee){O=Ee},setClear:function(Ee,qe,gt,ft,Zn){Zn===!0&&(Ee*=ft,qe*=ft,gt*=ft),we.set(Ee,qe,gt,ft),Ce.equals(we)===!1&&(t.clearColor(Ee,qe,gt,ft),Ce.copy(we))},reset:function(){O=!1,ne=null,Ce.set(-1,0,0,0)}}}function s(){let O=!1,we=null,ne=null,Ce=null;return{setTest:function(Ee){Ee?oe(2929):ce(2929)},setMask:function(Ee){we!==Ee&&!O&&(t.depthMask(Ee),we=Ee)},setFunc:function(Ee){if(ne!==Ee){if(Ee)switch(Ee){case hb:t.depthFunc(512);break;case pb:t.depthFunc(519);break;case mb:t.depthFunc(513);break;case oc:t.depthFunc(515);break;case gb:t.depthFunc(514);break;case vb:t.depthFunc(518);break;case _b:t.depthFunc(516);break;case xb:t.depthFunc(517);break;default:t.depthFunc(515)}else t.depthFunc(515);ne=Ee}},setLocked:function(Ee){O=Ee},setClear:function(Ee){Ce!==Ee&&(t.clearDepth(Ee),Ce=Ee)},reset:function(){O=!1,we=null,ne=null,Ce=null}}}function o(){let O=!1,we=null,ne=null,Ce=null,Ee=null,qe=null,gt=null,ft=null,Zn=null;return{setTest:function(ot){O||(ot?oe(2960):ce(2960))},setMask:function(ot){we!==ot&&!O&&(t.stencilMask(ot),we=ot)},setFunc:function(ot,Rn,Xt){(ne!==ot||Ce!==Rn||Ee!==Xt)&&(t.stencilFunc(ot,Rn,Xt),ne=ot,Ce=Rn,Ee=Xt)},setOp:function(ot,Rn,Xt){(qe!==ot||gt!==Rn||ft!==Xt)&&(t.stencilOp(ot,Rn,Xt),qe=ot,gt=Rn,ft=Xt)},setLocked:function(ot){O=ot},setClear:function(ot){Zn!==ot&&(t.clearStencil(ot),Zn=ot)},reset:function(){O=!1,we=null,ne=null,Ce=null,Ee=null,qe=null,gt=null,ft=null,Zn=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,d=new WeakMap;let f={},h={},g=new WeakMap,m=[],p=null,v=!1,x=null,w=null,y=null,M=null,T=null,L=null,_=null,C=!1,P=null,D=null,F=null,W=null,N=null;const Q=t.getParameter(35661);let I=!1,V=0;const $=t.getParameter(7938);$.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec($)[1]),I=V>=1):$.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),I=V>=2);let H=null,J={};const de=t.getParameter(3088),se=t.getParameter(2978),pe=new xt().fromArray(de),Me=new xt().fromArray(se);function U(O,we,ne){const Ce=new Uint8Array(4),Ee=t.createTexture();t.bindTexture(O,Ee),t.texParameteri(O,10241,9728),t.texParameteri(O,10240,9728);for(let qe=0;qe<ne;qe++)t.texImage2D(we+qe,0,6408,1,1,0,6408,5121,Ce);return Ee}const z={};z[3553]=U(3553,3553,1),z[34067]=U(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),oe(2929),l.setFunc(oc),ie(!1),re(Of),oe(2884),R(mi);function oe(O){f[O]!==!0&&(t.enable(O),f[O]=!0)}function ce(O){f[O]!==!1&&(t.disable(O),f[O]=!1)}function be(O,we){return h[O]!==we?(t.bindFramebuffer(O,we),h[O]=we,i&&(O===36009&&(h[36160]=we),O===36160&&(h[36009]=we)),!0):!1}function ge(O,we){let ne=m,Ce=!1;if(O)if(ne=g.get(we),ne===void 0&&(ne=[],g.set(we,ne)),O.isWebGLMultipleRenderTargets){const Ee=O.texture;if(ne.length!==Ee.length||ne[0]!==36064){for(let qe=0,gt=Ee.length;qe<gt;qe++)ne[qe]=36064+qe;ne.length=Ee.length,Ce=!0}}else ne[0]!==36064&&(ne[0]=36064,Ce=!0);else ne[0]!==1029&&(ne[0]=1029,Ce=!0);Ce&&(n.isWebGL2?t.drawBuffers(ne):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ne))}function Te(O){return p!==O?(t.useProgram(O),p=O,!0):!1}const ve={[Br]:32774,[nb]:32778,[ib]:32779};if(i)ve[Uf]=32775,ve[Vf]=32776;else{const O=e.get("EXT_blend_minmax");O!==null&&(ve[Uf]=O.MIN_EXT,ve[Vf]=O.MAX_EXT)}const E={[rb]:0,[sb]:1,[ob]:768,[gm]:770,[db]:776,[ub]:774,[lb]:772,[ab]:769,[vm]:771,[fb]:775,[cb]:773};function R(O,we,ne,Ce,Ee,qe,gt,ft){if(O===mi){v===!0&&(ce(3042),v=!1);return}if(v===!1&&(oe(3042),v=!0),O!==tb){if(O!==x||ft!==C){if((w!==Br||T!==Br)&&(t.blendEquation(32774),w=Br,T=Br),ft)switch(O){case Wr:t.blendFuncSeparate(1,771,1,771);break;case Bf:t.blendFunc(1,1);break;case zf:t.blendFuncSeparate(0,769,0,1);break;case kf:t.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Wr:t.blendFuncSeparate(770,771,1,771);break;case Bf:t.blendFunc(770,1);break;case zf:t.blendFuncSeparate(0,769,0,1);break;case kf:t.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}y=null,M=null,L=null,_=null,x=O,C=ft}return}Ee=Ee||we,qe=qe||ne,gt=gt||Ce,(we!==w||Ee!==T)&&(t.blendEquationSeparate(ve[we],ve[Ee]),w=we,T=Ee),(ne!==y||Ce!==M||qe!==L||gt!==_)&&(t.blendFuncSeparate(E[ne],E[Ce],E[qe],E[gt]),y=ne,M=Ce,L=qe,_=gt),x=O,C=null}function q(O,we){O.side===Yr?ce(2884):oe(2884);let ne=O.side===mn;we&&(ne=!ne),ie(ne),O.blending===Wr&&O.transparent===!1?R(mi):R(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.premultipliedAlpha),l.setFunc(O.depthFunc),l.setTest(O.depthTest),l.setMask(O.depthWrite),a.setMask(O.colorWrite);const Ce=O.stencilWrite;c.setTest(Ce),Ce&&(c.setMask(O.stencilWriteMask),c.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),c.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),fe(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?oe(32926):ce(32926)}function ie(O){P!==O&&(O?t.frontFace(2304):t.frontFace(2305),P=O)}function re(O){O!==Zy?(oe(2884),O!==D&&(O===Of?t.cullFace(1029):O===Jy?t.cullFace(1028):t.cullFace(1032))):ce(2884),D=O}function ue(O){O!==F&&(I&&t.lineWidth(O),F=O)}function fe(O,we,ne){O?(oe(32823),(W!==we||N!==ne)&&(t.polygonOffset(we,ne),W=we,N=ne)):ce(32823)}function he(O){O?oe(3089):ce(3089)}function me(O){O===void 0&&(O=33984+Q-1),H!==O&&(t.activeTexture(O),H=O)}function S(O,we){H===null&&me();let ne=J[H];ne===void 0&&(ne={type:void 0,texture:void 0},J[H]=ne),(ne.type!==O||ne.texture!==we)&&(t.bindTexture(O,we||z[O]),ne.type=O,ne.texture=we)}function b(){const O=J[H];O!==void 0&&O.type!==void 0&&(t.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function B(){try{t.compressedTexImage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function K(){try{t.texSubImage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function te(){try{t.texSubImage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function le(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Se(){try{t.texStorage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function G(){try{t.texStorage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function _e(){try{t.texImage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ye(){try{t.texImage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Le(O){pe.equals(O)===!1&&(t.scissor(O.x,O.y,O.z,O.w),pe.copy(O))}function Ae(O){Me.equals(O)===!1&&(t.viewport(O.x,O.y,O.z,O.w),Me.copy(O))}function Ie(O,we){let ne=d.get(we);ne===void 0&&(ne=new WeakMap,d.set(we,ne));let Ce=ne.get(O);Ce===void 0&&(Ce=t.getUniformBlockIndex(we,O.name),ne.set(O,Ce))}function We(O,we){const Ce=d.get(we).get(O);u.get(O)!==Ce&&(t.uniformBlockBinding(we,Ce,O.__bindingPointIndex),u.set(O,Ce))}function Ue(){t.disable(3042),t.disable(2884),t.disable(2929),t.disable(32823),t.disable(3089),t.disable(2960),t.disable(32926),t.blendEquation(32774),t.blendFunc(1,0),t.blendFuncSeparate(1,0,1,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(513),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(519,0,4294967295),t.stencilOp(7680,7680,7680),t.clearStencil(0),t.cullFace(1029),t.frontFace(2305),t.polygonOffset(0,0),t.activeTexture(33984),t.bindFramebuffer(36160,null),i===!0&&(t.bindFramebuffer(36009,null),t.bindFramebuffer(36008,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),f={},H=null,J={},h={},g=new WeakMap,m=[],p=null,v=!1,x=null,w=null,y=null,M=null,T=null,L=null,_=null,C=!1,P=null,D=null,F=null,W=null,N=null,pe.set(0,0,t.canvas.width,t.canvas.height),Me.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:oe,disable:ce,bindFramebuffer:be,drawBuffers:ge,useProgram:Te,setBlending:R,setMaterial:q,setFlipSided:ie,setCullFace:re,setLineWidth:ue,setPolygonOffset:fe,setScissorTest:he,activeTexture:me,bindTexture:S,unbindTexture:b,compressedTexImage2D:B,texImage2D:_e,texImage3D:ye,updateUBOMapping:Ie,uniformBlockBinding:We,texStorage2D:Se,texStorage3D:G,texSubImage2D:K,texSubImage3D:te,compressedTexSubImage2D:le,scissor:Le,viewport:Ae,reset:Ue}}function zE(t,e,n,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,d=r.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let m;const p=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(S,b){return v?new OffscreenCanvas(S,b):ua("canvas")}function w(S,b,B,K){let te=1;if((S.width>K||S.height>K)&&(te=K/Math.max(S.width,S.height)),te<1||b===!0)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap){const le=b?dc:Math.floor,Se=le(te*S.width),G=le(te*S.height);m===void 0&&(m=x(Se,G));const _e=B?x(Se,G):m;return _e.width=Se,_e.height=G,_e.getContext("2d").drawImage(S,0,0,Se,G),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+S.width+"x"+S.height+") to ("+Se+"x"+G+")."),_e}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+S.width+"x"+S.height+")."),S;return S}function y(S){return pd(S.width)&&pd(S.height)}function M(S){return a?!1:S.wrapS!==un||S.wrapT!==un||S.minFilter!==Nt&&S.minFilter!==Jt}function T(S,b){return S.generateMipmaps&&b&&S.minFilter!==Nt&&S.minFilter!==Jt}function L(S){t.generateMipmap(S)}function _(S,b,B,K,te=!1){if(a===!1)return b;if(S!==null){if(t[S]!==void 0)return t[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let le=b;return b===6403&&(B===5126&&(le=33326),B===5131&&(le=33325),B===5121&&(le=33321)),b===33319&&(B===5126&&(le=33328),B===5131&&(le=33327),B===5121&&(le=33323)),b===6408&&(B===5126&&(le=34836),B===5131&&(le=34842),B===5121&&(le=K===lt&&te===!1?35907:32856),B===32819&&(le=32854),B===32820&&(le=32855)),(le===33325||le===33326||le===33327||le===33328||le===34842||le===34836)&&e.get("EXT_color_buffer_float"),le}function C(S,b,B){return T(S,B)===!0||S.isFramebufferTexture&&S.minFilter!==Nt&&S.minFilter!==Jt?Math.log2(Math.max(b.width,b.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?b.mipmaps.length:1}function P(S){return S===Nt||S===Hf||S===Gf?9728:9729}function D(S){const b=S.target;b.removeEventListener("dispose",D),W(b),b.isVideoTexture&&g.delete(b)}function F(S){const b=S.target;b.removeEventListener("dispose",F),Q(b)}function W(S){const b=i.get(S);if(b.__webglInit===void 0)return;const B=S.source,K=p.get(B);if(K){const te=K[b.__cacheKey];te.usedTimes--,te.usedTimes===0&&N(S),Object.keys(K).length===0&&p.delete(B)}i.remove(S)}function N(S){const b=i.get(S);t.deleteTexture(b.__webglTexture);const B=S.source,K=p.get(B);delete K[b.__cacheKey],o.memory.textures--}function Q(S){const b=S.texture,B=i.get(S),K=i.get(b);if(K.__webglTexture!==void 0&&(t.deleteTexture(K.__webglTexture),o.memory.textures--),S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let te=0;te<6;te++)t.deleteFramebuffer(B.__webglFramebuffer[te]),B.__webglDepthbuffer&&t.deleteRenderbuffer(B.__webglDepthbuffer[te]);else{if(t.deleteFramebuffer(B.__webglFramebuffer),B.__webglDepthbuffer&&t.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&t.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let te=0;te<B.__webglColorRenderbuffer.length;te++)B.__webglColorRenderbuffer[te]&&t.deleteRenderbuffer(B.__webglColorRenderbuffer[te]);B.__webglDepthRenderbuffer&&t.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(S.isWebGLMultipleRenderTargets)for(let te=0,le=b.length;te<le;te++){const Se=i.get(b[te]);Se.__webglTexture&&(t.deleteTexture(Se.__webglTexture),o.memory.textures--),i.remove(b[te])}i.remove(b),i.remove(S)}let I=0;function V(){I=0}function $(){const S=I;return S>=l&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+l),I+=1,S}function H(S){const b=[];return b.push(S.wrapS),b.push(S.wrapT),b.push(S.magFilter),b.push(S.minFilter),b.push(S.anisotropy),b.push(S.internalFormat),b.push(S.format),b.push(S.type),b.push(S.generateMipmaps),b.push(S.premultiplyAlpha),b.push(S.flipY),b.push(S.unpackAlignment),b.push(S.encoding),b.join()}function J(S,b){const B=i.get(S);if(S.isVideoTexture&&he(S),S.isRenderTargetTexture===!1&&S.version>0&&B.__version!==S.version){const K=S.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ce(B,S,b);return}}n.activeTexture(33984+b),n.bindTexture(3553,B.__webglTexture)}function de(S,b){const B=i.get(S);if(S.version>0&&B.__version!==S.version){ce(B,S,b);return}n.activeTexture(33984+b),n.bindTexture(35866,B.__webglTexture)}function se(S,b){const B=i.get(S);if(S.version>0&&B.__version!==S.version){ce(B,S,b);return}n.activeTexture(33984+b),n.bindTexture(32879,B.__webglTexture)}function pe(S,b){const B=i.get(S);if(S.version>0&&B.__version!==S.version){be(B,S,b);return}n.activeTexture(33984+b),n.bindTexture(34067,B.__webglTexture)}const Me={[cc]:10497,[un]:33071,[uc]:33648},U={[Nt]:9728,[Hf]:9984,[Gf]:9986,[Jt]:9729,[Tb]:9985,[Aa]:9987};function z(S,b,B){if(B?(t.texParameteri(S,10242,Me[b.wrapS]),t.texParameteri(S,10243,Me[b.wrapT]),(S===32879||S===35866)&&t.texParameteri(S,32882,Me[b.wrapR]),t.texParameteri(S,10240,U[b.magFilter]),t.texParameteri(S,10241,U[b.minFilter])):(t.texParameteri(S,10242,33071),t.texParameteri(S,10243,33071),(S===32879||S===35866)&&t.texParameteri(S,32882,33071),(b.wrapS!==un||b.wrapT!==un)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(S,10240,P(b.magFilter)),t.texParameteri(S,10241,P(b.minFilter)),b.minFilter!==Nt&&b.minFilter!==Jt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const K=e.get("EXT_texture_filter_anisotropic");if(b.type===Vi&&e.has("OES_texture_float_linear")===!1||a===!1&&b.type===Xs&&e.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||i.get(b).__currentAnisotropy)&&(t.texParameterf(S,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy)}}function oe(S,b){let B=!1;S.__webglInit===void 0&&(S.__webglInit=!0,b.addEventListener("dispose",D));const K=b.source;let te=p.get(K);te===void 0&&(te={},p.set(K,te));const le=H(b);if(le!==S.__cacheKey){te[le]===void 0&&(te[le]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,B=!0),te[le].usedTimes++;const Se=te[S.__cacheKey];Se!==void 0&&(te[S.__cacheKey].usedTimes--,Se.usedTimes===0&&N(b)),S.__cacheKey=le,S.__webglTexture=te[le].texture}return B}function ce(S,b,B){let K=3553;b.isDataArrayTexture&&(K=35866),b.isData3DTexture&&(K=32879);const te=oe(S,b),le=b.source;if(n.activeTexture(33984+B),n.bindTexture(K,S.__webglTexture),le.version!==le.__currentVersion||te===!0){t.pixelStorei(37440,b.flipY),t.pixelStorei(37441,b.premultiplyAlpha),t.pixelStorei(3317,b.unpackAlignment),t.pixelStorei(37443,0);const Se=M(b)&&y(b.image)===!1;let G=w(b.image,Se,!1,u);G=me(b,G);const _e=y(G)||a,ye=s.convert(b.format,b.encoding);let Le=s.convert(b.type),Ae=_(b.internalFormat,ye,Le,b.encoding,b.isVideoTexture);z(K,b,_e);let Ie;const We=b.mipmaps,Ue=a&&b.isVideoTexture!==!0,O=le.__currentVersion===void 0||te===!0,we=C(b,G,_e);if(b.isDepthTexture)Ae=6402,a?b.type===Vi?Ae=36012:b.type===Ui?Ae=33190:b.type===$r?Ae=35056:Ae=33189:b.type===Vi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===Xi&&Ae===6402&&b.type!==ym&&b.type!==Ui&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=Ui,Le=s.convert(b.type)),b.format===Jr&&Ae===6402&&(Ae=34041,b.type!==$r&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=$r,Le=s.convert(b.type))),O&&(Ue?n.texStorage2D(3553,1,Ae,G.width,G.height):n.texImage2D(3553,0,Ae,G.width,G.height,0,ye,Le,null));else if(b.isDataTexture)if(We.length>0&&_e){Ue&&O&&n.texStorage2D(3553,we,Ae,We[0].width,We[0].height);for(let ne=0,Ce=We.length;ne<Ce;ne++)Ie=We[ne],Ue?n.texSubImage2D(3553,ne,0,0,Ie.width,Ie.height,ye,Le,Ie.data):n.texImage2D(3553,ne,Ae,Ie.width,Ie.height,0,ye,Le,Ie.data);b.generateMipmaps=!1}else Ue?(O&&n.texStorage2D(3553,we,Ae,G.width,G.height),n.texSubImage2D(3553,0,0,0,G.width,G.height,ye,Le,G.data)):n.texImage2D(3553,0,Ae,G.width,G.height,0,ye,Le,G.data);else if(b.isCompressedTexture){Ue&&O&&n.texStorage2D(3553,we,Ae,We[0].width,We[0].height);for(let ne=0,Ce=We.length;ne<Ce;ne++)Ie=We[ne],b.format!==En?ye!==null?Ue?n.compressedTexSubImage2D(3553,ne,0,0,Ie.width,Ie.height,ye,Ie.data):n.compressedTexImage2D(3553,ne,Ae,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?n.texSubImage2D(3553,ne,0,0,Ie.width,Ie.height,ye,Le,Ie.data):n.texImage2D(3553,ne,Ae,Ie.width,Ie.height,0,ye,Le,Ie.data)}else if(b.isDataArrayTexture)Ue?(O&&n.texStorage3D(35866,we,Ae,G.width,G.height,G.depth),n.texSubImage3D(35866,0,0,0,0,G.width,G.height,G.depth,ye,Le,G.data)):n.texImage3D(35866,0,Ae,G.width,G.height,G.depth,0,ye,Le,G.data);else if(b.isData3DTexture)Ue?(O&&n.texStorage3D(32879,we,Ae,G.width,G.height,G.depth),n.texSubImage3D(32879,0,0,0,0,G.width,G.height,G.depth,ye,Le,G.data)):n.texImage3D(32879,0,Ae,G.width,G.height,G.depth,0,ye,Le,G.data);else if(b.isFramebufferTexture){if(O)if(Ue)n.texStorage2D(3553,we,Ae,G.width,G.height);else{let ne=G.width,Ce=G.height;for(let Ee=0;Ee<we;Ee++)n.texImage2D(3553,Ee,Ae,ne,Ce,0,ye,Le,null),ne>>=1,Ce>>=1}}else if(We.length>0&&_e){Ue&&O&&n.texStorage2D(3553,we,Ae,We[0].width,We[0].height);for(let ne=0,Ce=We.length;ne<Ce;ne++)Ie=We[ne],Ue?n.texSubImage2D(3553,ne,0,0,ye,Le,Ie):n.texImage2D(3553,ne,Ae,ye,Le,Ie);b.generateMipmaps=!1}else Ue?(O&&n.texStorage2D(3553,we,Ae,G.width,G.height),n.texSubImage2D(3553,0,0,0,ye,Le,G)):n.texImage2D(3553,0,Ae,ye,Le,G);T(b,_e)&&L(K),le.__currentVersion=le.version,b.onUpdate&&b.onUpdate(b)}S.__version=b.version}function be(S,b,B){if(b.image.length!==6)return;const K=oe(S,b),te=b.source;if(n.activeTexture(33984+B),n.bindTexture(34067,S.__webglTexture),te.version!==te.__currentVersion||K===!0){t.pixelStorei(37440,b.flipY),t.pixelStorei(37441,b.premultiplyAlpha),t.pixelStorei(3317,b.unpackAlignment),t.pixelStorei(37443,0);const le=b.isCompressedTexture||b.image[0].isCompressedTexture,Se=b.image[0]&&b.image[0].isDataTexture,G=[];for(let ne=0;ne<6;ne++)!le&&!Se?G[ne]=w(b.image[ne],!1,!0,c):G[ne]=Se?b.image[ne].image:b.image[ne],G[ne]=me(b,G[ne]);const _e=G[0],ye=y(_e)||a,Le=s.convert(b.format,b.encoding),Ae=s.convert(b.type),Ie=_(b.internalFormat,Le,Ae,b.encoding),We=a&&b.isVideoTexture!==!0,Ue=te.__currentVersion===void 0||K===!0;let O=C(b,_e,ye);z(34067,b,ye);let we;if(le){We&&Ue&&n.texStorage2D(34067,O,Ie,_e.width,_e.height);for(let ne=0;ne<6;ne++){we=G[ne].mipmaps;for(let Ce=0;Ce<we.length;Ce++){const Ee=we[Ce];b.format!==En?Le!==null?We?n.compressedTexSubImage2D(34069+ne,Ce,0,0,Ee.width,Ee.height,Le,Ee.data):n.compressedTexImage2D(34069+ne,Ce,Ie,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?n.texSubImage2D(34069+ne,Ce,0,0,Ee.width,Ee.height,Le,Ae,Ee.data):n.texImage2D(34069+ne,Ce,Ie,Ee.width,Ee.height,0,Le,Ae,Ee.data)}}}else{we=b.mipmaps,We&&Ue&&(we.length>0&&O++,n.texStorage2D(34067,O,Ie,G[0].width,G[0].height));for(let ne=0;ne<6;ne++)if(Se){We?n.texSubImage2D(34069+ne,0,0,0,G[ne].width,G[ne].height,Le,Ae,G[ne].data):n.texImage2D(34069+ne,0,Ie,G[ne].width,G[ne].height,0,Le,Ae,G[ne].data);for(let Ce=0;Ce<we.length;Ce++){const qe=we[Ce].image[ne].image;We?n.texSubImage2D(34069+ne,Ce+1,0,0,qe.width,qe.height,Le,Ae,qe.data):n.texImage2D(34069+ne,Ce+1,Ie,qe.width,qe.height,0,Le,Ae,qe.data)}}else{We?n.texSubImage2D(34069+ne,0,0,0,Le,Ae,G[ne]):n.texImage2D(34069+ne,0,Ie,Le,Ae,G[ne]);for(let Ce=0;Ce<we.length;Ce++){const Ee=we[Ce];We?n.texSubImage2D(34069+ne,Ce+1,0,0,Le,Ae,Ee.image[ne]):n.texImage2D(34069+ne,Ce+1,Ie,Le,Ae,Ee.image[ne])}}}T(b,ye)&&L(34067),te.__currentVersion=te.version,b.onUpdate&&b.onUpdate(b)}S.__version=b.version}function ge(S,b,B,K,te){const le=s.convert(B.format,B.encoding),Se=s.convert(B.type),G=_(B.internalFormat,le,Se,B.encoding);i.get(b).__hasExternalTextures||(te===32879||te===35866?n.texImage3D(te,0,G,b.width,b.height,b.depth,0,le,Se,null):n.texImage2D(te,0,G,b.width,b.height,0,le,Se,null)),n.bindFramebuffer(36160,S),fe(b)?f.framebufferTexture2DMultisampleEXT(36160,K,te,i.get(B).__webglTexture,0,ue(b)):t.framebufferTexture2D(36160,K,te,i.get(B).__webglTexture,0),n.bindFramebuffer(36160,null)}function Te(S,b,B){if(t.bindRenderbuffer(36161,S),b.depthBuffer&&!b.stencilBuffer){let K=33189;if(B||fe(b)){const te=b.depthTexture;te&&te.isDepthTexture&&(te.type===Vi?K=36012:te.type===Ui&&(K=33190));const le=ue(b);fe(b)?f.renderbufferStorageMultisampleEXT(36161,le,K,b.width,b.height):t.renderbufferStorageMultisample(36161,le,K,b.width,b.height)}else t.renderbufferStorage(36161,K,b.width,b.height);t.framebufferRenderbuffer(36160,36096,36161,S)}else if(b.depthBuffer&&b.stencilBuffer){const K=ue(b);B&&fe(b)===!1?t.renderbufferStorageMultisample(36161,K,35056,b.width,b.height):fe(b)?f.renderbufferStorageMultisampleEXT(36161,K,35056,b.width,b.height):t.renderbufferStorage(36161,34041,b.width,b.height),t.framebufferRenderbuffer(36160,33306,36161,S)}else{const K=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let te=0;te<K.length;te++){const le=K[te],Se=s.convert(le.format,le.encoding),G=s.convert(le.type),_e=_(le.internalFormat,Se,G,le.encoding),ye=ue(b);B&&fe(b)===!1?t.renderbufferStorageMultisample(36161,ye,_e,b.width,b.height):fe(b)?f.renderbufferStorageMultisampleEXT(36161,ye,_e,b.width,b.height):t.renderbufferStorage(36161,_e,b.width,b.height)}}t.bindRenderbuffer(36161,null)}function ve(S,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(36160,S),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),J(b.depthTexture,0);const K=i.get(b.depthTexture).__webglTexture,te=ue(b);if(b.depthTexture.format===Xi)fe(b)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,K,0,te):t.framebufferTexture2D(36160,36096,3553,K,0);else if(b.depthTexture.format===Jr)fe(b)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,K,0,te):t.framebufferTexture2D(36160,33306,3553,K,0);else throw new Error("Unknown depthTexture format")}function E(S){const b=i.get(S),B=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture&&!b.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");ve(b.__webglFramebuffer,S)}else if(B){b.__webglDepthbuffer=[];for(let K=0;K<6;K++)n.bindFramebuffer(36160,b.__webglFramebuffer[K]),b.__webglDepthbuffer[K]=t.createRenderbuffer(),Te(b.__webglDepthbuffer[K],S,!1)}else n.bindFramebuffer(36160,b.__webglFramebuffer),b.__webglDepthbuffer=t.createRenderbuffer(),Te(b.__webglDepthbuffer,S,!1);n.bindFramebuffer(36160,null)}function R(S,b,B){const K=i.get(S);b!==void 0&&ge(K.__webglFramebuffer,S,S.texture,36064,3553),B!==void 0&&E(S)}function q(S){const b=S.texture,B=i.get(S),K=i.get(b);S.addEventListener("dispose",F),S.isWebGLMultipleRenderTargets!==!0&&(K.__webglTexture===void 0&&(K.__webglTexture=t.createTexture()),K.__version=b.version,o.memory.textures++);const te=S.isWebGLCubeRenderTarget===!0,le=S.isWebGLMultipleRenderTargets===!0,Se=y(S)||a;if(te){B.__webglFramebuffer=[];for(let G=0;G<6;G++)B.__webglFramebuffer[G]=t.createFramebuffer()}else{if(B.__webglFramebuffer=t.createFramebuffer(),le)if(r.drawBuffers){const G=S.texture;for(let _e=0,ye=G.length;_e<ye;_e++){const Le=i.get(G[_e]);Le.__webglTexture===void 0&&(Le.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&S.samples>0&&fe(S)===!1){const G=le?b:[b];B.__webglMultisampledFramebuffer=t.createFramebuffer(),B.__webglColorRenderbuffer=[],n.bindFramebuffer(36160,B.__webglMultisampledFramebuffer);for(let _e=0;_e<G.length;_e++){const ye=G[_e];B.__webglColorRenderbuffer[_e]=t.createRenderbuffer(),t.bindRenderbuffer(36161,B.__webglColorRenderbuffer[_e]);const Le=s.convert(ye.format,ye.encoding),Ae=s.convert(ye.type),Ie=_(ye.internalFormat,Le,Ae,ye.encoding),We=ue(S);t.renderbufferStorageMultisample(36161,We,Ie,S.width,S.height),t.framebufferRenderbuffer(36160,36064+_e,36161,B.__webglColorRenderbuffer[_e])}t.bindRenderbuffer(36161,null),S.depthBuffer&&(B.__webglDepthRenderbuffer=t.createRenderbuffer(),Te(B.__webglDepthRenderbuffer,S,!0)),n.bindFramebuffer(36160,null)}}if(te){n.bindTexture(34067,K.__webglTexture),z(34067,b,Se);for(let G=0;G<6;G++)ge(B.__webglFramebuffer[G],S,b,36064,34069+G);T(b,Se)&&L(34067),n.unbindTexture()}else if(le){const G=S.texture;for(let _e=0,ye=G.length;_e<ye;_e++){const Le=G[_e],Ae=i.get(Le);n.bindTexture(3553,Ae.__webglTexture),z(3553,Le,Se),ge(B.__webglFramebuffer,S,Le,36064+_e,3553),T(Le,Se)&&L(3553)}n.unbindTexture()}else{let G=3553;(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(a?G=S.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(G,K.__webglTexture),z(G,b,Se),ge(B.__webglFramebuffer,S,b,36064,G),T(b,Se)&&L(G),n.unbindTexture()}S.depthBuffer&&E(S)}function ie(S){const b=y(S)||a,B=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let K=0,te=B.length;K<te;K++){const le=B[K];if(T(le,b)){const Se=S.isWebGLCubeRenderTarget?34067:3553,G=i.get(le).__webglTexture;n.bindTexture(Se,G),L(Se),n.unbindTexture()}}}function re(S){if(a&&S.samples>0&&fe(S)===!1){const b=S.isWebGLMultipleRenderTargets?S.texture:[S.texture],B=S.width,K=S.height;let te=16384;const le=[],Se=S.stencilBuffer?33306:36096,G=i.get(S),_e=S.isWebGLMultipleRenderTargets===!0;if(_e)for(let ye=0;ye<b.length;ye++)n.bindFramebuffer(36160,G.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(36160,36064+ye,36161,null),n.bindFramebuffer(36160,G.__webglFramebuffer),t.framebufferTexture2D(36009,36064+ye,3553,null,0);n.bindFramebuffer(36008,G.__webglMultisampledFramebuffer),n.bindFramebuffer(36009,G.__webglFramebuffer);for(let ye=0;ye<b.length;ye++){le.push(36064+ye),S.depthBuffer&&le.push(Se);const Le=G.__ignoreDepthValues!==void 0?G.__ignoreDepthValues:!1;if(Le===!1&&(S.depthBuffer&&(te|=256),S.stencilBuffer&&(te|=1024)),_e&&t.framebufferRenderbuffer(36008,36064,36161,G.__webglColorRenderbuffer[ye]),Le===!0&&(t.invalidateFramebuffer(36008,[Se]),t.invalidateFramebuffer(36009,[Se])),_e){const Ae=i.get(b[ye]).__webglTexture;t.framebufferTexture2D(36009,36064,3553,Ae,0)}t.blitFramebuffer(0,0,B,K,0,0,B,K,te,9728),h&&t.invalidateFramebuffer(36008,le)}if(n.bindFramebuffer(36008,null),n.bindFramebuffer(36009,null),_e)for(let ye=0;ye<b.length;ye++){n.bindFramebuffer(36160,G.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(36160,36064+ye,36161,G.__webglColorRenderbuffer[ye]);const Le=i.get(b[ye]).__webglTexture;n.bindFramebuffer(36160,G.__webglFramebuffer),t.framebufferTexture2D(36009,36064+ye,3553,Le,0)}n.bindFramebuffer(36009,G.__webglMultisampledFramebuffer)}}function ue(S){return Math.min(d,S.samples)}function fe(S){const b=i.get(S);return a&&S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function he(S){const b=o.render.frame;g.get(S)!==b&&(g.set(S,b),S.update())}function me(S,b){const B=S.encoding,K=S.format,te=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||S.format===fc||B!==Ji&&(B===lt?a===!1?e.has("EXT_sRGB")===!0&&K===En?(S.format=fc,S.minFilter=Jt,S.generateMipmaps=!1):b=Mm.sRGBToLinear(b):(K!==En||te!==Zi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",B)),b}this.allocateTextureUnit=$,this.resetTextureUnits=V,this.setTexture2D=J,this.setTexture2DArray=de,this.setTexture3D=se,this.setTextureCube=pe,this.rebindTextures=R,this.setupRenderTarget=q,this.updateRenderTargetMipmap=ie,this.updateMultisampleRenderTarget=re,this.setupDepthRenderbuffer=E,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=fe}function kE(t,e,n){const i=n.isWebGL2;function r(s,o=null){let a;if(s===Zi)return 5121;if(s===Rb)return 32819;if(s===Db)return 32820;if(s===Ab)return 5120;if(s===Lb)return 5122;if(s===ym)return 5123;if(s===Pb)return 5124;if(s===Ui)return 5125;if(s===Vi)return 5126;if(s===Xs)return i?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Ib)return 6406;if(s===En)return 6408;if(s===Nb)return 6409;if(s===Ob)return 6410;if(s===Xi)return 6402;if(s===Jr)return 34041;if(s===Bb)return 6403;if(s===Fb)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===fc)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===zb)return 36244;if(s===kb)return 33319;if(s===Ub)return 33320;if(s===Vb)return 36249;if(s===Ka||s===Za||s===Ja||s===Qa)if(o===lt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Ka)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Za)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ja)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Qa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Ka)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Za)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ja)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Qa)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Wf||s===$f||s===qf||s===Xf)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Wf)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===$f)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===qf)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Xf)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Hb)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===jf||s===Yf)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===jf)return o===lt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Yf)return o===lt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Kf||s===Zf||s===Jf||s===Qf||s===ed||s===td||s===nd||s===id||s===rd||s===sd||s===od||s===ad||s===ld||s===cd)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Kf)return o===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Zf)return o===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Jf)return o===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Qf)return o===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ed)return o===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===td)return o===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===nd)return o===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===id)return o===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===rd)return o===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===sd)return o===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===od)return o===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===ad)return o===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===ld)return o===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===cd)return o===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ud)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===ud)return o===lt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===$r?i?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class UE extends Qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Vo extends _n{constructor(){super(),this.isGroup=!0,this.type="Group"}}const VE={type:"move"};class Al{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const m of e.hand.values()){const p=n.getJointPose(m,i);if(c.joints[m.jointName]===void 0){const x=new Vo;x.matrixAutoUpdate=!1,x.visible=!1,c.joints[m.jointName]=x,c.add(x)}const v=c.joints[m.jointName];p!==null&&(v.matrix.fromArray(p.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.jointRadius=p.radius),v.visible=p!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,g=.005;c.inputState.pinching&&f>h+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=h-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(VE)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}}class HE extends vn{constructor(e,n,i,r,s,o,a,l,c,u){if(u=u!==void 0?u:Xi,u!==Xi&&u!==Jr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Xi&&(i=Ui),i===void 0&&u===Jr&&(i=$r),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Nt,this.minFilter=l!==void 0?l:Nt,this.flipY=!1,this.generateMipmaps=!1}}class GE extends ss{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=null,c=null,u=null,d=null,f=null,h=null;const g=n.getContextAttributes();let m=null,p=null;const v=[],x=[],w=new Qt;w.layers.enable(1),w.viewport=new xt;const y=new Qt;y.layers.enable(2),y.viewport=new xt;const M=[w,y],T=new UE;T.layers.enable(1),T.layers.enable(2);let L=null,_=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let J=v[H];return J===void 0&&(J=new Al,v[H]=J),J.getTargetRaySpace()},this.getControllerGrip=function(H){let J=v[H];return J===void 0&&(J=new Al,v[H]=J),J.getGripSpace()},this.getHand=function(H){let J=v[H];return J===void 0&&(J=new Al,v[H]=J),J.getHandSpace()};function C(H){const J=x.indexOf(H.inputSource);if(J===-1)return;const de=v[J];de!==void 0&&de.dispatchEvent({type:H.type,data:H.inputSource})}function P(){r.removeEventListener("select",C),r.removeEventListener("selectstart",C),r.removeEventListener("selectend",C),r.removeEventListener("squeeze",C),r.removeEventListener("squeezestart",C),r.removeEventListener("squeezeend",C),r.removeEventListener("end",P),r.removeEventListener("inputsourceschange",D);for(let H=0;H<v.length;H++){const J=x[H];J!==null&&(x[H]=null,v[H].disconnect(J))}L=null,_=null,e.setRenderTarget(m),f=null,d=null,u=null,r=null,p=null,$.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){s=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(H){l=H},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return h},this.getSession=function(){return r},this.setSession=async function(H){if(r=H,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",C),r.addEventListener("selectstart",C),r.addEventListener("selectend",C),r.addEventListener("squeeze",C),r.addEventListener("squeezestart",C),r.addEventListener("squeezeend",C),r.addEventListener("end",P),r.addEventListener("inputsourceschange",D),g.xrCompatible!==!0&&await n.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const J={antialias:r.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,n,J),r.updateRenderState({baseLayer:f}),p=new Qi(f.framebufferWidth,f.framebufferHeight,{format:En,type:Zi,encoding:e.outputEncoding})}else{let J=null,de=null,se=null;g.depth&&(se=g.stencil?35056:33190,J=g.stencil?Jr:Xi,de=g.stencil?$r:Ui);const pe={colorFormat:32856,depthFormat:se,scaleFactor:s};u=new XRWebGLBinding(r,n),d=u.createProjectionLayer(pe),r.updateRenderState({layers:[d]}),p=new Qi(d.textureWidth,d.textureHeight,{format:En,type:Zi,depthTexture:new HE(d.textureWidth,d.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const Me=e.properties.get(p);Me.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(1),l=null,o=await r.requestReferenceSpace(a),$.setContext(r),$.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function D(H){for(let J=0;J<H.removed.length;J++){const de=H.removed[J],se=x.indexOf(de);se>=0&&(x[se]=null,v[se].dispatchEvent({type:"disconnected",data:de}))}for(let J=0;J<H.added.length;J++){const de=H.added[J];let se=x.indexOf(de);if(se===-1){for(let Me=0;Me<v.length;Me++)if(Me>=x.length){x.push(de),se=Me;break}else if(x[Me]===null){x[Me]=de,se=Me;break}if(se===-1)break}const pe=v[se];pe&&pe.dispatchEvent({type:"connected",data:de})}}const F=new j,W=new j;function N(H,J,de){F.setFromMatrixPosition(J.matrixWorld),W.setFromMatrixPosition(de.matrixWorld);const se=F.distanceTo(W),pe=J.projectionMatrix.elements,Me=de.projectionMatrix.elements,U=pe[14]/(pe[10]-1),z=pe[14]/(pe[10]+1),oe=(pe[9]+1)/pe[5],ce=(pe[9]-1)/pe[5],be=(pe[8]-1)/pe[0],ge=(Me[8]+1)/Me[0],Te=U*be,ve=U*ge,E=se/(-be+ge),R=E*-be;J.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(R),H.translateZ(E),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();const q=U+E,ie=z+E,re=Te-R,ue=ve+(se-R),fe=oe*z/ie*q,he=ce*z/ie*q;H.projectionMatrix.makePerspective(re,ue,fe,he,q,ie)}function Q(H,J){J===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(J.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(r===null)return;T.near=y.near=w.near=H.near,T.far=y.far=w.far=H.far,(L!==T.near||_!==T.far)&&(r.updateRenderState({depthNear:T.near,depthFar:T.far}),L=T.near,_=T.far);const J=H.parent,de=T.cameras;Q(T,J);for(let pe=0;pe<de.length;pe++)Q(de[pe],J);T.matrixWorld.decompose(T.position,T.quaternion,T.scale),H.position.copy(T.position),H.quaternion.copy(T.quaternion),H.scale.copy(T.scale),H.matrix.copy(T.matrix),H.matrixWorld.copy(T.matrixWorld);const se=H.children;for(let pe=0,Me=se.length;pe<Me;pe++)se[pe].updateMatrixWorld(!0);de.length===2?N(T,w,y):T.projectionMatrix.copy(w.projectionMatrix)},this.getCamera=function(){return T},this.getFoveation=function(){if(d!==null)return d.fixedFoveation;if(f!==null)return f.fixedFoveation},this.setFoveation=function(H){d!==null&&(d.fixedFoveation=H),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=H)};let I=null;function V(H,J){if(c=J.getViewerPose(l||o),h=J,c!==null){const de=c.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let se=!1;de.length!==T.cameras.length&&(T.cameras.length=0,se=!0);for(let pe=0;pe<de.length;pe++){const Me=de[pe];let U=null;if(f!==null)U=f.getViewport(Me);else{const oe=u.getViewSubImage(d,Me);U=oe.viewport,pe===0&&(e.setRenderTargetTextures(p,oe.colorTexture,d.ignoreDepthValues?void 0:oe.depthStencilTexture),e.setRenderTarget(p))}let z=M[pe];z===void 0&&(z=new Qt,z.layers.enable(pe),z.viewport=new xt,M[pe]=z),z.matrix.fromArray(Me.transform.matrix),z.projectionMatrix.fromArray(Me.projectionMatrix),z.viewport.set(U.x,U.y,U.width,U.height),pe===0&&T.matrix.copy(z.matrix),se===!0&&T.cameras.push(z)}}for(let de=0;de<v.length;de++){const se=x[de],pe=v[de];se!==null&&pe!==void 0&&pe.update(se,J,l||o)}I&&I(H,J),h=null}const $=new Dm;$.setAnimationLoop(V),this.setAnimationLoop=function(H){I=H},this.dispose=function(){}}}function WE(t,e){function n(m,p){m.fogColor.value.copy(p.color),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,v,x,w){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),c(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,w)):p.isMeshMatcapMaterial?(r(m,p),h(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),g(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(s(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?a(m,p,v,x):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.bumpMap&&(m.bumpMap.value=p.bumpMap,m.bumpScale.value=p.bumpScale,p.side===mn&&(m.bumpScale.value*=-1)),p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap),p.normalMap&&(m.normalMap.value=p.normalMap,m.normalScale.value.copy(p.normalScale),p.side===mn&&m.normalScale.value.negate()),p.specularMap&&(m.specularMap.value=p.specularMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=e.get(p).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const y=t.physicallyCorrectLights!==!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*y}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity);let x;p.map?x=p.map:p.specularMap?x=p.specularMap:p.displacementMap?x=p.displacementMap:p.normalMap?x=p.normalMap:p.bumpMap?x=p.bumpMap:p.roughnessMap?x=p.roughnessMap:p.metalnessMap?x=p.metalnessMap:p.alphaMap?x=p.alphaMap:p.emissiveMap?x=p.emissiveMap:p.clearcoatMap?x=p.clearcoatMap:p.clearcoatNormalMap?x=p.clearcoatNormalMap:p.clearcoatRoughnessMap?x=p.clearcoatRoughnessMap:p.iridescenceMap?x=p.iridescenceMap:p.iridescenceThicknessMap?x=p.iridescenceThicknessMap:p.specularIntensityMap?x=p.specularIntensityMap:p.specularColorMap?x=p.specularColorMap:p.transmissionMap?x=p.transmissionMap:p.thicknessMap?x=p.thicknessMap:p.sheenColorMap?x=p.sheenColorMap:p.sheenRoughnessMap&&(x=p.sheenRoughnessMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),m.uvTransform.value.copy(x.matrix));let w;p.aoMap?w=p.aoMap:p.lightMap&&(w=p.lightMap),w!==void 0&&(w.isWebGLRenderTarget&&(w=w.texture),w.matrixAutoUpdate===!0&&w.updateMatrix(),m.uv2Transform.value.copy(w.matrix))}function s(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function a(m,p,v,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=x*.5,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let w;p.map?w=p.map:p.alphaMap&&(w=p.alphaMap),w!==void 0&&(w.matrixAutoUpdate===!0&&w.updateMatrix(),m.uvTransform.value.copy(w.matrix))}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let v;p.map?v=p.map:p.alphaMap&&(v=p.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),m.uvTransform.value.copy(v.matrix))}function c(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.roughness.value=p.roughness,m.metalness.value=p.metalness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),m.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===mn&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap)}function h(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){m.referencePosition.value.copy(p.referencePosition),m.nearDistance.value=p.nearDistance,m.farDistance.value=p.farDistance}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function $E(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(35375):0;function l(x,w){const y=w.program;i.uniformBlockBinding(x,y)}function c(x,w){let y=r[x.id];y===void 0&&(g(x),y=u(x),r[x.id]=y,x.addEventListener("dispose",p));const M=w.program;i.updateUBOMapping(x,M);const T=e.render.frame;s[x.id]!==T&&(f(x),s[x.id]=T)}function u(x){const w=d();x.__bindingPointIndex=w;const y=t.createBuffer(),M=x.__size,T=x.usage;return t.bindBuffer(35345,y),t.bufferData(35345,M,T),t.bindBuffer(35345,null),t.bindBufferBase(35345,w,y),y}function d(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const w=r[x.id],y=x.uniforms,M=x.__cache;t.bindBuffer(35345,w);for(let T=0,L=y.length;T<L;T++){const _=y[T];if(h(_,T,M)===!0){const C=_.value,P=_.__offset;typeof C=="number"?(_.__data[0]=C,t.bufferSubData(35345,P,_.__data)):(_.value.isMatrix3?(_.__data[0]=_.value.elements[0],_.__data[1]=_.value.elements[1],_.__data[2]=_.value.elements[2],_.__data[3]=_.value.elements[0],_.__data[4]=_.value.elements[3],_.__data[5]=_.value.elements[4],_.__data[6]=_.value.elements[5],_.__data[7]=_.value.elements[0],_.__data[8]=_.value.elements[6],_.__data[9]=_.value.elements[7],_.__data[10]=_.value.elements[8],_.__data[11]=_.value.elements[0]):C.toArray(_.__data),t.bufferSubData(35345,P,_.__data))}}t.bindBuffer(35345,null)}function h(x,w,y){const M=x.value;if(y[w]===void 0)return typeof M=="number"?y[w]=M:y[w]=M.clone(),!0;if(typeof M=="number"){if(y[w]!==M)return y[w]=M,!0}else{const T=y[w];if(T.equals(M)===!1)return T.copy(M),!0}return!1}function g(x){const w=x.uniforms;let y=0;const M=16;let T=0;for(let L=0,_=w.length;L<_;L++){const C=w[L],P=m(C);if(C.__data=new Float32Array(P.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=y,L>0){T=y%M;const D=M-T;T!==0&&D-P.boundary<0&&(y+=M-T,C.__offset=y)}y+=P.storage}return T=y%M,T>0&&(y+=M-T),x.__size=y,x.__cache={},this}function m(x){const w=x.value,y={boundary:0,storage:0};return typeof w=="number"?(y.boundary=4,y.storage=4):w.isVector2?(y.boundary=8,y.storage=8):w.isVector3||w.isColor?(y.boundary=16,y.storage=12):w.isVector4?(y.boundary=16,y.storage=16):w.isMatrix3?(y.boundary=48,y.storage=48):w.isMatrix4?(y.boundary=64,y.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),y}function p(x){const w=x.target;w.removeEventListener("dispose",p);const y=o.indexOf(w.__bindingPointIndex);o.splice(y,1),t.deleteBuffer(r[w.id]),delete r[w.id],delete s[w.id]}function v(){for(const x in r)t.deleteBuffer(r[x]);o=[],r={},s={}}return{bind:l,update:c,dispose:v}}function qE(){const t=ua("canvas");return t.style.display="block",t}function zm(t={}){this.isWebGLRenderer=!0;const e=t.canvas!==void 0?t.canvas:qE(),n=t.context!==void 0?t.context:null,i=t.depth!==void 0?t.depth:!0,r=t.stencil!==void 0?t.stencil:!0,s=t.antialias!==void 0?t.antialias:!1,o=t.premultipliedAlpha!==void 0?t.premultipliedAlpha:!0,a=t.preserveDrawingBuffer!==void 0?t.preserveDrawingBuffer:!1,l=t.powerPreference!==void 0?t.powerPreference:"default",c=t.failIfMajorPerformanceCaveat!==void 0?t.failIfMajorPerformanceCaveat:!1;let u;n!==null?u=n.getContextAttributes().alpha:u=t.alpha!==void 0?t.alpha:!1;let d=null,f=null;const h=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Ji,this.physicallyCorrectLights=!1,this.toneMapping=$n,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const m=this;let p=!1,v=0,x=0,w=null,y=-1,M=null;const T=new xt,L=new xt;let _=null,C=e.width,P=e.height,D=1,F=null,W=null;const N=new xt(0,0,C,P),Q=new xt(0,0,C,P);let I=!1;const V=new Rm;let $=!1,H=!1,J=null;const de=new St,se=new tt,pe=new j,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function U(){return w===null?D:1}let z=n;function oe(A,X){for(let ee=0;ee<A.length;ee++){const Z=A[ee],ae=e.getContext(Z,X);if(ae!==null)return ae}return null}try{const A={alpha:!0,depth:i,stencil:r,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ru}`),e.addEventListener("webglcontextlost",Ie,!1),e.addEventListener("webglcontextrestored",We,!1),e.addEventListener("webglcontextcreationerror",Ue,!1),z===null){const X=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&X.shift(),z=oe(X,A),z===null)throw oe(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ce,be,ge,Te,ve,E,R,q,ie,re,ue,fe,he,me,S,b,B,K,te,le,Se,G,_e,ye;function Le(){ce=new n1(z),be=new Yw(z,ce,t),ce.init(be),G=new kE(z,ce,be),ge=new BE(z,ce,be),Te=new s1,ve=new ME,E=new zE(z,ce,ge,ve,be,G,Te),R=new Zw(m),q=new t1(m),ie=new gS(z,be),_e=new Xw(z,ce,ie,be),re=new i1(z,ie,Te,_e),ue=new c1(z,re,ie,Te),te=new l1(z,be,E),b=new Kw(ve),fe=new SE(m,R,q,ce,be,_e,b),he=new WE(m,ve),me=new EE,S=new RE(ce,be),K=new qw(m,R,ge,ue,u,o),B=new OE(m,ue,be),ye=new $E(z,Te,be,ge),le=new jw(z,ce,Te,be),Se=new r1(z,ce,Te,be),Te.programs=fe.programs,m.capabilities=be,m.extensions=ce,m.properties=ve,m.renderLists=me,m.shadowMap=B,m.state=ge,m.info=Te}Le();const Ae=new GE(m,z);this.xr=Ae,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const A=ce.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ce.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return D},this.setPixelRatio=function(A){A!==void 0&&(D=A,this.setSize(C,P,!1))},this.getSize=function(A){return A.set(C,P)},this.setSize=function(A,X,ee){if(Ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}C=A,P=X,e.width=Math.floor(A*D),e.height=Math.floor(X*D),ee!==!1&&(e.style.width=A+"px",e.style.height=X+"px"),this.setViewport(0,0,A,X)},this.getDrawingBufferSize=function(A){return A.set(C*D,P*D).floor()},this.setDrawingBufferSize=function(A,X,ee){C=A,P=X,D=ee,e.width=Math.floor(A*ee),e.height=Math.floor(X*ee),this.setViewport(0,0,A,X)},this.getCurrentViewport=function(A){return A.copy(T)},this.getViewport=function(A){return A.copy(N)},this.setViewport=function(A,X,ee,Z){A.isVector4?N.set(A.x,A.y,A.z,A.w):N.set(A,X,ee,Z),ge.viewport(T.copy(N).multiplyScalar(D).floor())},this.getScissor=function(A){return A.copy(Q)},this.setScissor=function(A,X,ee,Z){A.isVector4?Q.set(A.x,A.y,A.z,A.w):Q.set(A,X,ee,Z),ge.scissor(L.copy(Q).multiplyScalar(D).floor())},this.getScissorTest=function(){return I},this.setScissorTest=function(A){ge.setScissorTest(I=A)},this.setOpaqueSort=function(A){F=A},this.setTransparentSort=function(A){W=A},this.getClearColor=function(A){return A.copy(K.getClearColor())},this.setClearColor=function(){K.setClearColor.apply(K,arguments)},this.getClearAlpha=function(){return K.getClearAlpha()},this.setClearAlpha=function(){K.setClearAlpha.apply(K,arguments)},this.clear=function(A=!0,X=!0,ee=!0){let Z=0;A&&(Z|=16384),X&&(Z|=256),ee&&(Z|=1024),z.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ie,!1),e.removeEventListener("webglcontextrestored",We,!1),e.removeEventListener("webglcontextcreationerror",Ue,!1),me.dispose(),S.dispose(),ve.dispose(),R.dispose(),q.dispose(),ue.dispose(),_e.dispose(),ye.dispose(),fe.dispose(),Ae.dispose(),Ae.removeEventListener("sessionstart",qe),Ae.removeEventListener("sessionend",gt),J&&(J.dispose(),J=null),ft.stop()};function Ie(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function We(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const A=Te.autoReset,X=B.enabled,ee=B.autoUpdate,Z=B.needsUpdate,ae=B.type;Le(),Te.autoReset=A,B.enabled=X,B.autoUpdate=ee,B.needsUpdate=Z,B.type=ae}function Ue(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function O(A){const X=A.target;X.removeEventListener("dispose",O),we(X)}function we(A){ne(A),ve.remove(A)}function ne(A){const X=ve.get(A).programs;X!==void 0&&(X.forEach(function(ee){fe.releaseProgram(ee)}),A.isShaderMaterial&&fe.releaseShaderCache(A))}this.renderBufferDirect=function(A,X,ee,Z,ae,Fe){X===null&&(X=Me);const Oe=ae.isMesh&&ae.matrixWorld.determinant()<0,ze=rg(A,X,ee,Z,ae);ge.setMaterial(Z,Oe);let Be=ee.index;const Ye=ee.attributes.position;if(Be===null){if(Ye===void 0||Ye.count===0)return}else if(Be.count===0)return;let $e=1;Z.wireframe===!0&&(Be=re.getWireframeAttribute(ee),$e=2),_e.setup(ae,Z,ze,ee,Be);let Xe,at=le;Be!==null&&(Xe=ie.get(Be),at=Se,at.setIndex(Xe));const wi=Be!==null?Be.count:Ye.count,fr=ee.drawRange.start*$e,dr=ee.drawRange.count*$e,bn=Fe!==null?Fe.start*$e:0,je=Fe!==null?Fe.count*$e:1/0,hr=Math.max(fr,bn),dt=Math.min(wi,fr+dr,bn+je)-1,jt=Math.max(0,dt-hr+1);if(jt!==0){if(ae.isMesh)Z.wireframe===!0?(ge.setLineWidth(Z.wireframeLinewidth*U()),at.setMode(1)):at.setMode(4);else if(ae.isLine){let Jn=Z.linewidth;Jn===void 0&&(Jn=1),ge.setLineWidth(Jn*U()),ae.isLineSegments?at.setMode(1):ae.isLineLoop?at.setMode(2):at.setMode(3)}else ae.isPoints?at.setMode(0):ae.isSprite&&at.setMode(4);if(ae.isInstancedMesh)at.renderInstances(hr,jt,ae.count);else if(ee.isInstancedBufferGeometry){const Jn=Math.min(ee.instanceCount,ee._maxInstanceCount);at.renderInstances(hr,jt,Jn)}else at.render(hr,jt)}},this.compile=function(A,X){f=S.get(A),f.init(),g.push(f),A.traverseVisible(function(ee){ee.isLight&&ee.layers.test(X.layers)&&(f.pushLight(ee),ee.castShadow&&f.pushShadow(ee))}),f.setupLights(m.physicallyCorrectLights),A.traverse(function(ee){const Z=ee.material;if(Z)if(Array.isArray(Z))for(let ae=0;ae<Z.length;ae++){const Fe=Z[ae];Ra(Fe,A,ee)}else Ra(Z,A,ee)}),g.pop(),f=null};let Ce=null;function Ee(A){Ce&&Ce(A)}function qe(){ft.stop()}function gt(){ft.start()}const ft=new Dm;ft.setAnimationLoop(Ee),typeof self<"u"&&ft.setContext(self),this.setAnimationLoop=function(A){Ce=A,Ae.setAnimationLoop(A),A===null?ft.stop():ft.start()},Ae.addEventListener("sessionstart",qe),Ae.addEventListener("sessionend",gt),this.render=function(A,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;A.autoUpdate===!0&&A.updateMatrixWorld(),X.parent===null&&X.updateMatrixWorld(),Ae.enabled===!0&&Ae.isPresenting===!0&&(Ae.cameraAutoUpdate===!0&&Ae.updateCamera(X),X=Ae.getCamera()),A.isScene===!0&&A.onBeforeRender(m,A,X,w),f=S.get(A,g.length),f.init(),g.push(f),de.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),V.setFromProjectionMatrix(de),H=this.localClippingEnabled,$=b.init(this.clippingPlanes,H,X),d=me.get(A,h.length),d.init(),h.push(d),Zn(A,X,0,m.sortObjects),d.finish(),m.sortObjects===!0&&d.sort(F,W),$===!0&&b.beginShadows();const ee=f.state.shadowsArray;if(B.render(ee,A,X),$===!0&&b.endShadows(),this.info.autoReset===!0&&this.info.reset(),K.render(d,A),f.setupLights(m.physicallyCorrectLights),X.isArrayCamera){const Z=X.cameras;for(let ae=0,Fe=Z.length;ae<Fe;ae++){const Oe=Z[ae];ot(d,A,Oe,Oe.viewport)}}else ot(d,A,X);w!==null&&(E.updateMultisampleRenderTarget(w),E.updateRenderTargetMipmap(w)),A.isScene===!0&&A.onAfterRender(m,A,X),_e.resetDefaultState(),y=-1,M=null,g.pop(),g.length>0?f=g[g.length-1]:f=null,h.pop(),h.length>0?d=h[h.length-1]:d=null};function Zn(A,X,ee,Z){if(A.visible===!1)return;if(A.layers.test(X.layers)){if(A.isGroup)ee=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(X);else if(A.isLight)f.pushLight(A),A.castShadow&&f.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||V.intersectsSprite(A)){Z&&pe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(de);const Oe=ue.update(A),ze=A.material;ze.visible&&d.push(A,Oe,ze,ee,pe.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(A.isSkinnedMesh&&A.skeleton.frame!==Te.render.frame&&(A.skeleton.update(),A.skeleton.frame=Te.render.frame),!A.frustumCulled||V.intersectsObject(A))){Z&&pe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(de);const Oe=ue.update(A),ze=A.material;if(Array.isArray(ze)){const Be=Oe.groups;for(let Ye=0,$e=Be.length;Ye<$e;Ye++){const Xe=Be[Ye],at=ze[Xe.materialIndex];at&&at.visible&&d.push(A,Oe,at,ee,pe.z,Xe)}}else ze.visible&&d.push(A,Oe,ze,ee,pe.z,null)}}const Fe=A.children;for(let Oe=0,ze=Fe.length;Oe<ze;Oe++)Zn(Fe[Oe],X,ee,Z)}function ot(A,X,ee,Z){const ae=A.opaque,Fe=A.transmissive,Oe=A.transparent;f.setupLightsView(ee),Fe.length>0&&Rn(ae,X,ee),Z&&ge.viewport(T.copy(Z)),ae.length>0&&Xt(ae,X,ee),Fe.length>0&&Xt(Fe,X,ee),Oe.length>0&&Xt(Oe,X,ee),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function Rn(A,X,ee){const Z=be.isWebGL2;J===null&&(J=new Qi(1,1,{generateMipmaps:!0,type:ce.has("EXT_color_buffer_half_float")?Xs:Zi,minFilter:Aa,samples:Z&&s===!0?4:0})),m.getDrawingBufferSize(se),Z?J.setSize(se.x,se.y):J.setSize(dc(se.x),dc(se.y));const ae=m.getRenderTarget();m.setRenderTarget(J),m.clear();const Fe=m.toneMapping;m.toneMapping=$n,Xt(A,X,ee),m.toneMapping=Fe,E.updateMultisampleRenderTarget(J),E.updateRenderTargetMipmap(J),m.setRenderTarget(ae)}function Xt(A,X,ee){const Z=X.isScene===!0?X.overrideMaterial:null;for(let ae=0,Fe=A.length;ae<Fe;ae++){const Oe=A[ae],ze=Oe.object,Be=Oe.geometry,Ye=Z===null?Oe.material:Z,$e=Oe.group;ze.layers.test(ee.layers)&&ig(ze,X,ee,Be,Ye,$e)}}function ig(A,X,ee,Z,ae,Fe){A.onBeforeRender(m,X,ee,Z,ae,Fe),A.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),ae.onBeforeRender(m,X,ee,Z,A,Fe),ae.transparent===!0&&ae.side===Yr?(ae.side=mn,ae.needsUpdate=!0,m.renderBufferDirect(ee,X,Z,ae,A,Fe),ae.side=qs,ae.needsUpdate=!0,m.renderBufferDirect(ee,X,Z,ae,A,Fe),ae.side=Yr):m.renderBufferDirect(ee,X,Z,ae,A,Fe),A.onAfterRender(m,X,ee,Z,ae,Fe)}function Ra(A,X,ee){X.isScene!==!0&&(X=Me);const Z=ve.get(A),ae=f.state.lights,Fe=f.state.shadowsArray,Oe=ae.state.version,ze=fe.getParameters(A,ae.state,Fe,X,ee),Be=fe.getProgramCacheKey(ze);let Ye=Z.programs;Z.environment=A.isMeshStandardMaterial?X.environment:null,Z.fog=X.fog,Z.envMap=(A.isMeshStandardMaterial?q:R).get(A.envMap||Z.environment),Ye===void 0&&(A.addEventListener("dispose",O),Ye=new Map,Z.programs=Ye);let $e=Ye.get(Be);if($e!==void 0){if(Z.currentProgram===$e&&Z.lightsStateVersion===Oe)return uu(A,ze),$e}else ze.uniforms=fe.getUniforms(A),A.onBuild(ee,ze,m),A.onBeforeCompile(ze,m),$e=fe.acquireProgram(ze,Be),Ye.set(Be,$e),Z.uniforms=ze.uniforms;const Xe=Z.uniforms;(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Xe.clippingPlanes=b.uniform),uu(A,ze),Z.needsLights=og(A),Z.lightsStateVersion=Oe,Z.needsLights&&(Xe.ambientLightColor.value=ae.state.ambient,Xe.lightProbe.value=ae.state.probe,Xe.directionalLights.value=ae.state.directional,Xe.directionalLightShadows.value=ae.state.directionalShadow,Xe.spotLights.value=ae.state.spot,Xe.spotLightShadows.value=ae.state.spotShadow,Xe.rectAreaLights.value=ae.state.rectArea,Xe.ltc_1.value=ae.state.rectAreaLTC1,Xe.ltc_2.value=ae.state.rectAreaLTC2,Xe.pointLights.value=ae.state.point,Xe.pointLightShadows.value=ae.state.pointShadow,Xe.hemisphereLights.value=ae.state.hemi,Xe.directionalShadowMap.value=ae.state.directionalShadowMap,Xe.directionalShadowMatrix.value=ae.state.directionalShadowMatrix,Xe.spotShadowMap.value=ae.state.spotShadowMap,Xe.spotShadowMatrix.value=ae.state.spotShadowMatrix,Xe.pointShadowMap.value=ae.state.pointShadowMap,Xe.pointShadowMatrix.value=ae.state.pointShadowMatrix);const at=$e.getUniforms(),wi=jo.seqWithValue(at.seq,Xe);return Z.currentProgram=$e,Z.uniformsList=wi,$e}function uu(A,X){const ee=ve.get(A);ee.outputEncoding=X.outputEncoding,ee.instancing=X.instancing,ee.skinning=X.skinning,ee.morphTargets=X.morphTargets,ee.morphNormals=X.morphNormals,ee.morphColors=X.morphColors,ee.morphTargetsCount=X.morphTargetsCount,ee.numClippingPlanes=X.numClippingPlanes,ee.numIntersection=X.numClipIntersection,ee.vertexAlphas=X.vertexAlphas,ee.vertexTangents=X.vertexTangents,ee.toneMapping=X.toneMapping}function rg(A,X,ee,Z,ae){X.isScene!==!0&&(X=Me),E.resetTextureUnits();const Fe=X.fog,Oe=Z.isMeshStandardMaterial?X.environment:null,ze=w===null?m.outputEncoding:w.isXRRenderTarget===!0?w.texture.encoding:Ji,Be=(Z.isMeshStandardMaterial?q:R).get(Z.envMap||Oe),Ye=Z.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,$e=!!Z.normalMap&&!!ee.attributes.tangent,Xe=!!ee.morphAttributes.position,at=!!ee.morphAttributes.normal,wi=!!ee.morphAttributes.color,fr=Z.toneMapped?m.toneMapping:$n,dr=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,bn=dr!==void 0?dr.length:0,je=ve.get(Z),hr=f.state.lights;if($===!0&&(H===!0||A!==M)){const Bt=A===M&&Z.id===y;b.setState(Z,A,Bt)}let dt=!1;Z.version===je.__version?(je.needsLights&&je.lightsStateVersion!==hr.state.version||je.outputEncoding!==ze||ae.isInstancedMesh&&je.instancing===!1||!ae.isInstancedMesh&&je.instancing===!0||ae.isSkinnedMesh&&je.skinning===!1||!ae.isSkinnedMesh&&je.skinning===!0||je.envMap!==Be||Z.fog===!0&&je.fog!==Fe||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==b.numPlanes||je.numIntersection!==b.numIntersection)||je.vertexAlphas!==Ye||je.vertexTangents!==$e||je.morphTargets!==Xe||je.morphNormals!==at||je.morphColors!==wi||je.toneMapping!==fr||be.isWebGL2===!0&&je.morphTargetsCount!==bn)&&(dt=!0):(dt=!0,je.__version=Z.version);let jt=je.currentProgram;dt===!0&&(jt=Ra(Z,X,ae));let Jn=!1,as=!1,Da=!1;const At=jt.getUniforms(),ls=je.uniforms;if(ge.useProgram(jt.program)&&(Jn=!0,as=!0,Da=!0),Z.id!==y&&(y=Z.id,as=!0),Jn||M!==A){if(At.setValue(z,"projectionMatrix",A.projectionMatrix),be.logarithmicDepthBuffer&&At.setValue(z,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),M!==A&&(M=A,as=!0,Da=!0),Z.isShaderMaterial||Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshStandardMaterial||Z.envMap){const Bt=At.map.cameraPosition;Bt!==void 0&&Bt.setValue(z,pe.setFromMatrixPosition(A.matrixWorld))}(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&At.setValue(z,"isOrthographic",A.isOrthographicCamera===!0),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial||Z.isShadowMaterial||ae.isSkinnedMesh)&&At.setValue(z,"viewMatrix",A.matrixWorldInverse)}if(ae.isSkinnedMesh){At.setOptional(z,ae,"bindMatrix"),At.setOptional(z,ae,"bindMatrixInverse");const Bt=ae.skeleton;Bt&&(be.floatVertexTextures?(Bt.boneTexture===null&&Bt.computeBoneTexture(),At.setValue(z,"boneTexture",Bt.boneTexture,E),At.setValue(z,"boneTextureSize",Bt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Ia=ee.morphAttributes;if((Ia.position!==void 0||Ia.normal!==void 0||Ia.color!==void 0&&be.isWebGL2===!0)&&te.update(ae,ee,Z,jt),(as||je.receiveShadow!==ae.receiveShadow)&&(je.receiveShadow=ae.receiveShadow,At.setValue(z,"receiveShadow",ae.receiveShadow)),as&&(At.setValue(z,"toneMappingExposure",m.toneMappingExposure),je.needsLights&&sg(ls,Da),Fe&&Z.fog===!0&&he.refreshFogUniforms(ls,Fe),he.refreshMaterialUniforms(ls,Z,D,P,J),jo.upload(z,je.uniformsList,ls,E)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(jo.upload(z,je.uniformsList,ls,E),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&At.setValue(z,"center",ae.center),At.setValue(z,"modelViewMatrix",ae.modelViewMatrix),At.setValue(z,"normalMatrix",ae.normalMatrix),At.setValue(z,"modelMatrix",ae.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const Bt=Z.uniformsGroups;for(let Fa=0,ag=Bt.length;Fa<ag;Fa++)if(be.isWebGL2){const fu=Bt[Fa];ye.update(fu,jt),ye.bind(fu,jt)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return jt}function sg(A,X){A.ambientLightColor.needsUpdate=X,A.lightProbe.needsUpdate=X,A.directionalLights.needsUpdate=X,A.directionalLightShadows.needsUpdate=X,A.pointLights.needsUpdate=X,A.pointLightShadows.needsUpdate=X,A.spotLights.needsUpdate=X,A.spotLightShadows.needsUpdate=X,A.rectAreaLights.needsUpdate=X,A.hemisphereLights.needsUpdate=X}function og(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return x},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(A,X,ee){ve.get(A.texture).__webglTexture=X,ve.get(A.depthTexture).__webglTexture=ee;const Z=ve.get(A);Z.__hasExternalTextures=!0,Z.__hasExternalTextures&&(Z.__autoAllocateDepthBuffer=ee===void 0,Z.__autoAllocateDepthBuffer||ce.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,X){const ee=ve.get(A);ee.__webglFramebuffer=X,ee.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(A,X=0,ee=0){w=A,v=X,x=ee;let Z=!0;if(A){const Be=ve.get(A);Be.__useDefaultFramebuffer!==void 0?(ge.bindFramebuffer(36160,null),Z=!1):Be.__webglFramebuffer===void 0?E.setupRenderTarget(A):Be.__hasExternalTextures&&E.rebindTextures(A,ve.get(A.texture).__webglTexture,ve.get(A.depthTexture).__webglTexture)}let ae=null,Fe=!1,Oe=!1;if(A){const Be=A.texture;(Be.isData3DTexture||Be.isDataArrayTexture)&&(Oe=!0);const Ye=ve.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(ae=Ye[X],Fe=!0):be.isWebGL2&&A.samples>0&&E.useMultisampledRTT(A)===!1?ae=ve.get(A).__webglMultisampledFramebuffer:ae=Ye,T.copy(A.viewport),L.copy(A.scissor),_=A.scissorTest}else T.copy(N).multiplyScalar(D).floor(),L.copy(Q).multiplyScalar(D).floor(),_=I;if(ge.bindFramebuffer(36160,ae)&&be.drawBuffers&&Z&&ge.drawBuffers(A,ae),ge.viewport(T),ge.scissor(L),ge.setScissorTest(_),Fe){const Be=ve.get(A.texture);z.framebufferTexture2D(36160,36064,34069+X,Be.__webglTexture,ee)}else if(Oe){const Be=ve.get(A.texture),Ye=X||0;z.framebufferTextureLayer(36160,36064,Be.__webglTexture,ee||0,Ye)}y=-1},this.readRenderTargetPixels=function(A,X,ee,Z,ae,Fe,Oe){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=ve.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Oe!==void 0&&(ze=ze[Oe]),ze){ge.bindFramebuffer(36160,ze);try{const Be=A.texture,Ye=Be.format,$e=Be.type;if(Ye!==En&&G.convert(Ye)!==z.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Xe=$e===Xs&&(ce.has("EXT_color_buffer_half_float")||be.isWebGL2&&ce.has("EXT_color_buffer_float"));if($e!==Zi&&G.convert($e)!==z.getParameter(35738)&&!($e===Vi&&(be.isWebGL2||ce.has("OES_texture_float")||ce.has("WEBGL_color_buffer_float")))&&!Xe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=A.width-Z&&ee>=0&&ee<=A.height-ae&&z.readPixels(X,ee,Z,ae,G.convert(Ye),G.convert($e),Fe)}finally{const Be=w!==null?ve.get(w).__webglFramebuffer:null;ge.bindFramebuffer(36160,Be)}}},this.copyFramebufferToTexture=function(A,X,ee=0){const Z=Math.pow(2,-ee),ae=Math.floor(X.image.width*Z),Fe=Math.floor(X.image.height*Z);E.setTexture2D(X,0),z.copyTexSubImage2D(3553,ee,0,0,A.x,A.y,ae,Fe),ge.unbindTexture()},this.copyTextureToTexture=function(A,X,ee,Z=0){const ae=X.image.width,Fe=X.image.height,Oe=G.convert(ee.format),ze=G.convert(ee.type);E.setTexture2D(ee,0),z.pixelStorei(37440,ee.flipY),z.pixelStorei(37441,ee.premultiplyAlpha),z.pixelStorei(3317,ee.unpackAlignment),X.isDataTexture?z.texSubImage2D(3553,Z,A.x,A.y,ae,Fe,Oe,ze,X.image.data):X.isCompressedTexture?z.compressedTexSubImage2D(3553,Z,A.x,A.y,X.mipmaps[0].width,X.mipmaps[0].height,Oe,X.mipmaps[0].data):z.texSubImage2D(3553,Z,A.x,A.y,Oe,ze,X.image),Z===0&&ee.generateMipmaps&&z.generateMipmap(3553),ge.unbindTexture()},this.copyTextureToTexture3D=function(A,X,ee,Z,ae=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Fe=A.max.x-A.min.x+1,Oe=A.max.y-A.min.y+1,ze=A.max.z-A.min.z+1,Be=G.convert(Z.format),Ye=G.convert(Z.type);let $e;if(Z.isData3DTexture)E.setTexture3D(Z,0),$e=32879;else if(Z.isDataArrayTexture)E.setTexture2DArray(Z,0),$e=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(37440,Z.flipY),z.pixelStorei(37441,Z.premultiplyAlpha),z.pixelStorei(3317,Z.unpackAlignment);const Xe=z.getParameter(3314),at=z.getParameter(32878),wi=z.getParameter(3316),fr=z.getParameter(3315),dr=z.getParameter(32877),bn=ee.isCompressedTexture?ee.mipmaps[0]:ee.image;z.pixelStorei(3314,bn.width),z.pixelStorei(32878,bn.height),z.pixelStorei(3316,A.min.x),z.pixelStorei(3315,A.min.y),z.pixelStorei(32877,A.min.z),ee.isDataTexture||ee.isData3DTexture?z.texSubImage3D($e,ae,X.x,X.y,X.z,Fe,Oe,ze,Be,Ye,bn.data):ee.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),z.compressedTexSubImage3D($e,ae,X.x,X.y,X.z,Fe,Oe,ze,Be,bn.data)):z.texSubImage3D($e,ae,X.x,X.y,X.z,Fe,Oe,ze,Be,Ye,bn),z.pixelStorei(3314,Xe),z.pixelStorei(32878,at),z.pixelStorei(3316,wi),z.pixelStorei(3315,fr),z.pixelStorei(32877,dr),ae===0&&Z.generateMipmaps&&z.generateMipmap($e),ge.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?E.setTextureCube(A,0):A.isData3DTexture?E.setTexture3D(A,0):A.isDataArrayTexture?E.setTexture2DArray(A,0):E.setTexture2D(A,0),ge.unbindTexture()},this.resetState=function(){v=0,x=0,w=null,ge.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class XE extends zm{}XE.prototype.isWebGL1Renderer=!0;class jE extends _n{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n}}class cu extends Mi{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],d=new j,f=new j,h=[],g=[],m=[],p=[];for(let v=0;v<=i;v++){const x=[],w=v/i;let y=0;v==0&&o==0?y=.5/n:v==i&&l==Math.PI&&(y=-.5/n);for(let M=0;M<=n;M++){const T=M/n;d.x=-e*Math.cos(r+T*s)*Math.sin(o+w*a),d.y=e*Math.cos(o+w*a),d.z=e*Math.sin(r+T*s)*Math.sin(o+w*a),g.push(d.x,d.y,d.z),f.copy(d).normalize(),m.push(f.x,f.y,f.z),p.push(T+y,1-w),x.push(c++)}u.push(x)}for(let v=0;v<i;v++)for(let x=0;x<n;x++){const w=u[v][x+1],y=u[v][x],M=u[v+1][x],T=u[v+1][x+1];(v!==0||o>0)&&h.push(w,y,T),(v!==i-1||l<Math.PI)&&h.push(y,M,T)}this.setIndex(h),this.setAttribute("position",new An(g,3)),this.setAttribute("normal",new An(m,3)),this.setAttribute("uv",new An(p,2))}static fromJSON(e){return new cu(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ru}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ru);function YE(){let t=document.getElementById("container");const e=new zm;e.setSize(window.innerWidth,window.innerHeight),t.appendChild(e.domElement);const n=new Qt(45,window.innerWidth/window.innerHeight,1,500);n.position.set(0,0,100),n.lookAt(0,0,0);const i=new jE;i.background=new nt(1184274);var r=20,s=5,o=5,a=new cu(r,s,o),l=new ou({color:1802319,wireframe:!0}),c=new Hn(a,l);i.add(c);var u=function(){requestAnimationFrame(u),c.rotation.x+=.008,c.rotation.y+=.008,e.render(i,n)};u()}const KE={name:"HelloWorld",data:()=>({}),methods:{init:function(){console.log("init")}},mounted(){YE()}},ZE={id:"container"};function JE(t,e,n,i,r,s){return Vn(),np("div",ZE)}const QE=Qs(KE,[["render",JE]]),eC=rr({name:"HomeView",components:{HelloWorld:QE}});function tC(t,e,n,i,r,s){const o=Fc("HelloWorld");return Vn(),Wi(o)}const nC=Qs(eC,[["render",tC]]),Ir="/assets/img1.12914d41.png",iC="/assets/waveslab.bdff3c3e.png";const rC=Ze({name:"VBtnGroup",props:{divided:Boolean,...is(),...bi(),...Si(),...Pn(),...It(),...Wt(),...ro()},setup(t,e){let{slots:n}=e;const{themeClasses:i}=$t(t),{densityClasses:r}=cr(t),{borderClasses:s}=rs(t),{elevationClasses:o}=ur(t),{roundedClasses:a}=Kn(t);yi({VBtn:{height:"auto",color:Ve(t,"color"),density:Ve(t,"density"),flat:!0,variant:Ve(t,"variant")}}),st(()=>k(t.tag,{class:["v-btn-group",{"v-btn-group--divided":t.divided},i.value,s.value,r.value,o.value,a.value]},n))}}),sC=Je({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),oC=Je({value:null,disabled:Boolean,selectedClass:String},"group-item");function aC(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const i=Ot("useGroupItem");if(!i)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const r=eo();Tt(Symbol.for(`${e.description}:id`),r);const s=it(e,null);if(!s){if(!n)return s;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${e.description}`)}const o=Ve(t,"value"),a=Y(()=>s.disabled.value||t.disabled);s.register({id:r,value:o,disabled:a},i),yn(()=>{s.unregister(r)});const l=Y(()=>s.isSelected(r)),c=Y(()=>l.value&&[s.selectedClass.value,t.selectedClass]);return Ke(l,u=>{i.emit("group:selected",{value:u})}),{id:r,isSelected:l,toggle:()=>s.select(r,!l.value),select:u=>s.select(r,u),selectedClass:c,value:o,disabled:a,group:s}}function lC(t,e){let n=!1;const i=Ct([]),r=Ki(t,"modelValue",[],f=>f==null?[]:km(i,X_(f)),f=>{const h=uC(i,f);return t.multiple?h:h[0]}),s=Ot("useGroup");function o(f,h){const g=f,m=Symbol.for(`${e.description}:id`),v=As(m,s==null?void 0:s.vnode).indexOf(h);v>-1?i.splice(v,0,g):i.push(g)}function a(f){if(n)return;l();const h=i.findIndex(g=>g.id===f);i.splice(h,1)}function l(){const f=i.find(h=>!h.disabled);f&&t.mandatory==="force"&&!r.value.length&&(r.value=[f.id])}sr(()=>{l()}),yn(()=>{n=!0});function c(f,h){const g=i.find(v=>v.id===f);if(!(h&&g!=null&&g.disabled))if(t.multiple){var m;const v=r.value.slice(),x=v.findIndex(y=>y===f),w=~x;if(h=(m=h)!=null?m:!w,w&&t.mandatory&&v.length<=1||!w&&t.max!=null&&v.length+1>t.max)return;x<0&&h?v.push(f):x>=0&&!h&&v.splice(x,1),r.value=v}else{var p;const v=r.value.includes(f);if(t.mandatory&&v)return;r.value=((p=h)!=null?p:!v)?[f]:[]}}function u(f){if(t.multiple&&Gr('This method is not supported when using "multiple" prop'),r.value.length){const h=r.value[0],g=i.findIndex(v=>v.id===h);let m=(g+f)%i.length,p=i[m];for(;p.disabled&&m!==g;)m=(m+f)%i.length,p=i[m];if(p.disabled)return;r.value=[i[m].id]}else{const h=i.find(g=>!g.disabled);h&&(r.value=[h.id])}}const d={register:o,unregister:a,selected:r,select:c,disabled:Ve(t,"disabled"),prev:()=>u(i.length-1),next:()=>u(1),isSelected:f=>r.value.includes(f),selectedClass:Y(()=>t.selectedClass),items:Y(()=>i),getItemIndex:f=>cC(i,f)};return Tt(e,d),d}function cC(t,e){const n=km(t,[e]);return n.length?t.findIndex(i=>i.id===n[0]):-1}function km(t,e){const n=[];for(let i=0;i<t.length;i++){const r=t[i];r.value!=null?e.find(s=>xp(s,r.value))!=null&&n.push(r.id):e.includes(i)&&n.push(r.id)}return n}function uC(t,e){const n=[];for(let i=0;i<t.length;i++){const r=t[i];e.includes(r.id)&&n.push(r.value!=null?r.value:i)}return n}const Um=Symbol.for("vuetify:v-btn-toggle");ts()({name:"VBtnToggle",props:sC({selectedClass:"v-btn--selected"}),emits:{"update:modelValue":t=>!0},setup(t,e){let{slots:n}=e;const{isSelected:i,next:r,prev:s,select:o,selected:a}=lC(t,Um);return st(()=>{var l;return k(rC,{class:"v-btn-toggle"},{default:()=>[(l=n.default)==null?void 0:l.call(n,{isSelected:i,next:r,prev:s,select:o,selected:a})]})}),{next:r,prev:s,select:o}}});function Vm(t){const e=Pe(),n=Pe(!1);if(Hc){const i=new IntersectionObserver(r=>{t==null||t(r,i),n.value=!!r.find(s=>s.isIntersecting)});yn(()=>{i.disconnect()}),Ke(e,(r,s)=>{s&&(i.unobserve(s),n.value=!1),r&&i.observe(r)},{flush:"post"})}return{intersectionRef:e,isIntersecting:n}}const fC=Ze({name:"VProgressCircular",props:{bgColor:String,color:String,indeterminate:[Boolean,String],modelValue:{type:[Number,String],default:0},rotate:{type:[Number,String],default:0},width:{type:[Number,String],default:4},...ns(),...It({tag:"div"}),...Wt()},setup(t,e){let{slots:n}=e;const i=20,r=2*Math.PI*i,s=Pe(),{themeClasses:o}=$t(t),{sizeClasses:a,sizeStyles:l}=io(t),{textColorClasses:c,textColorStyles:u}=Vs(Ve(t,"color")),{textColorClasses:d,textColorStyles:f}=Vs(Ve(t,"bgColor")),{intersectionRef:h,isIntersecting:g}=Vm(),{resizeRef:m,contentRect:p}=gp(),v=Y(()=>Math.max(0,Math.min(100,parseFloat(t.modelValue)))),x=Y(()=>Number(t.width)),w=Y(()=>l.value?Number(t.size):p.value?p.value.width:Math.max(x.value,32)),y=Y(()=>i/(1-x.value/w.value)*2),M=Y(()=>x.value/w.value*y.value),T=Y(()=>Re((100-v.value)/100*r));return _i(()=>{h.value=s.value,m.value=s.value}),st(()=>k(t.tag,{ref:s,class:["v-progress-circular",{"v-progress-circular--indeterminate":!!t.indeterminate,"v-progress-circular--visible":g.value,"v-progress-circular--disable-shrink":t.indeterminate==="disable-shrink"},o.value,a.value,c.value],style:[l.value,u.value],role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":t.indeterminate?void 0:v.value},{default:()=>[k("svg",{style:{transform:`rotate(calc(-90deg + ${Number(t.rotate)}deg))`},xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${y.value} ${y.value}`},[k("circle",{class:["v-progress-circular__underlay",d.value],style:f.value,fill:"transparent",cx:"50%",cy:"50%",r:i,"stroke-width":M.value,"stroke-dasharray":r,"stroke-dashoffset":0},null),k("circle",{class:"v-progress-circular__overlay",fill:"transparent",cx:"50%",cy:"50%",r:i,"stroke-width":M.value,"stroke-dasharray":r,"stroke-dashoffset":T.value},null)]),n.default&&k("div",{class:"v-progress-circular__content"},[n.default({value:v.value})])]})),{}}});const dC=Ze({name:"VProgressLinear",props:{active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...Pn(),...It(),...Wt()},emits:{"update:modelValue":t=>!0},setup(t,e){let{slots:n}=e;const i=Ki(t,"modelValue"),{isRtl:r}=no(),{themeClasses:s}=$t(t),{textColorClasses:o,textColorStyles:a}=Vs(t,"color"),{backgroundColorClasses:l,backgroundColorStyles:c}=Ln(Y(()=>t.bgColor||t.color)),{backgroundColorClasses:u,backgroundColorStyles:d}=Ln(t,"color"),{roundedClasses:f}=Kn(t),{intersectionRef:h,isIntersecting:g}=Vm(),m=Y(()=>parseInt(t.max,10)),p=Y(()=>parseInt(t.height,10)),v=Y(()=>parseFloat(t.bufferValue)/m.value*100),x=Y(()=>parseFloat(i.value)/m.value*100),w=Y(()=>r.value!==t.reverse),y=Y(()=>t.indeterminate?"fade-transition":"slide-x-transition"),M=Y(()=>t.bgOpacity==null?t.bgOpacity:parseFloat(t.bgOpacity));function T(L){if(!h.value)return;const{left:_,right:C,width:P}=h.value.getBoundingClientRect(),D=w.value?P-L.clientX+(C-P):L.clientX-_;i.value=Math.round(D/P*m.value)}return st(()=>k(t.tag,{ref:h,class:["v-progress-linear",{"v-progress-linear--active":t.active&&g.value,"v-progress-linear--reverse":w.value,"v-progress-linear--rounded":t.rounded,"v-progress-linear--rounded-bar":t.roundedBar,"v-progress-linear--striped":t.striped},f.value,s.value],style:{height:t.active?Re(p.value):0,"--v-progress-linear-height":Re(p.value)},role:"progressbar","aria-valuemin":"0","aria-valuemax":t.max,"aria-valuenow":t.indeterminate?void 0:x.value,onClick:t.clickable&&T},{default:()=>[t.stream&&k("div",{key:"stream",class:["v-progress-linear__stream",o.value],style:{...a.value,[w.value?"left":"right"]:Re(-p.value),borderTop:`${Re(p.value/2)} dotted`,opacity:M.value,top:`calc(50% - ${Re(p.value/4)})`,width:Re(100-v.value,"%"),"--v-progress-linear-stream-to":Re(p.value*(w.value?1:-1))}},null),k("div",{class:["v-progress-linear__background",l.value],style:[c.value,{opacity:M.value,width:Re(t.stream?v.value:100,"%")}]},null),k(xi,{name:y.value},{default:()=>[t.indeterminate?k("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map(L=>k("div",{key:L,class:["v-progress-linear__indeterminate",L,u.value],style:d.value},null))]):k("div",{class:["v-progress-linear__determinate",u.value],style:[d.value,{width:Re(x.value,"%")}]},null)]}),n.default&&k("div",{class:"v-progress-linear__content"},[n.default({value:x.value,buffer:v.value})])]})),{}}}),Hm=Je({loading:Boolean},"loader");function Gm(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:or();return{loaderClasses:Y(()=>({[`${e}--loading`]:t.loading}))}}function hC(t,e){var n;let{slots:i}=e;return k("div",{class:`${t.name}__loader`},[((n=i.default)==null?void 0:n.call(i,{color:t.color,isActive:t.active}))||k(dC,{active:t.active,color:t.color,height:"2",indeterminate:!0},null)])}const jd={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},Wm=Je({location:String},"location");function $m(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n=arguments.length>2?arguments[2]:void 0;const{isRtl:i}=no();return{locationStyles:Y(()=>{if(!t.location)return{};const{side:s,align:o}=Yl(t.location.split(" ").length>1?t.location:`${t.location} center`,i.value);function a(c){return n?n(c):0}const l={};return s!=="center"&&(e?l[jd[s]]=`calc(100% - ${a(s)}px)`:l[s]=0),o!=="center"?e?l[jd[o]]=`calc(100% - ${a(o)}px)`:l[o]=0:(s==="center"?l.top=l.left="50%":l[{top:"left",bottom:"left",left:"top",right:"top"}[s]]="50%",l.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[s]),l})}}const pC=["static","relative","fixed","absolute","sticky"],qm=Je({position:{type:String,validator:t=>pC.includes(t)}},"position");function Xm(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:or();return{positionClasses:Y(()=>t.position?`${e}--${t.position}`:void 0)}}function mC(t,e){Ke(()=>{var n;return(n=t.isExactActive)==null?void 0:n.value},n=>{t.isLink.value&&n&&e&&xn(()=>{e(!0)})},{immediate:!0})}const gC=Ze({name:"VBtn",directives:{Ripple:Zc},props:{active:Boolean,symbol:{type:null,default:Um},flat:Boolean,icon:[Boolean,String,Function,Object],prependIcon:bt,appendIcon:bt,block:Boolean,stacked:Boolean,ripple:{type:Boolean,default:!0},...is(),...Pn(),...bi(),...ar(),...Si(),...oC(),...Hm(),...Wm(),...qm(),...tu(),...ns(),...It({tag:"button"}),...Wt(),...ro({variant:"elevated"})},emits:{"group:selected":t=>!0},setup(t,e){let{attrs:n,slots:i}=e;const{themeClasses:r}=$t(t),{borderClasses:s}=rs(t),{colorClasses:o,colorStyles:a,variantClasses:l}=Qc(t),{densityClasses:c}=cr(t),{dimensionStyles:u}=lr(t),{elevationClasses:d}=ur(t),{loaderClasses:f}=Gm(t),{locationStyles:h}=$m(t),{positionClasses:g}=Xm(t),{roundedClasses:m}=Kn(t),{sizeClasses:p}=io(t),v=aC(t,t.symbol,!1),x=eu(t,n),w=Y(()=>(v==null?void 0:v.disabled.value)||t.disabled),y=Y(()=>t.variant==="elevated"&&!(t.disabled||t.flat||t.border));return mC(x,v==null?void 0:v.select),st(()=>{var M,T,L,_,C,P,D,F;const W=x.isLink.value?"a":t.tag,N=!v||v.isSelected.value,Q=!!(t.prependIcon||i.prepend),I=!!(t.appendIcon||i.append);return Yi(k(W,{type:W==="a"?void 0:"button",class:["v-btn",v==null?void 0:v.selectedClass.value,{"v-btn--active":t.active,"v-btn--block":t.block,"v-btn--disabled":w.value,"v-btn--elevated":y.value,"v-btn--flat":t.flat,"v-btn--icon":!!t.icon,"v-btn--loading":t.loading,"v-btn--stacked":t.stacked},r.value,s.value,N?o.value:void 0,c.value,d.value,f.value,g.value,m.value,p.value,l.value],style:[N?a.value:void 0,u.value,h.value],disabled:w.value||void 0,href:x.href.value,onClick:V=>{var $;w.value||(($=x.navigate)==null||$.call(x,V),v==null||v.toggle())}},{default:()=>[Jc(!0,"v-btn"),!t.icon&&Q&&k(Wn,{key:"prepend",defaults:{VIcon:{icon:t.prependIcon}}},{default:()=>[k("span",{class:"v-btn__prepend"},[(M=(T=i.prepend)==null?void 0:T.call(i))!=null?M:k(qi,null,null)])]}),k("span",{class:"v-btn__content","data-no-activator":""},[k(Wn,{key:"content",defaults:{VIcon:{icon:typeof t.icon=="string"?t.icon:void 0}}},{default:()=>[(L=(_=i.default)==null?void 0:_.call(i))!=null?L:typeof t.icon=="string"&&k(qi,{key:"icon"},null)]})]),!t.icon&&I&&k(Wn,{key:"append",defaults:{VIcon:{icon:t.appendIcon}}},{default:()=>[k("span",{class:"v-btn__append"},[(C=(P=i.append)==null?void 0:P.call(i))!=null?C:k(qi,null,null)])]}),!!t.loading&&k("span",{key:"loader",class:"v-btn__loader"},[(D=(F=i.loader)==null?void 0:F.call(i))!=null?D:k(fC,{color:typeof t.loading=="boolean"?void 0:t.loading,indeterminate:!0,size:"23",width:"2"},null)])]}),[[Js("ripple"),!w.value&&t.ripple,null]])}),{}}});const vC=Ze({name:"VCardActions",setup(t,e){let{slots:n}=e;return yi({VBtn:{variant:"text"}}),st(()=>{var i;return k("div",{class:"v-card-actions"},[(i=n.default)==null?void 0:i.call(n)])}),{}}}),jm=to("v-card-subtitle"),Ym=to("v-card-title"),_C=rr({name:"VCardItem",props:{appendAvatar:String,appendIcon:bt,prependAvatar:String,prependIcon:bt,subtitle:String,title:String,...bi()},setup(t,e){let{slots:n}=e;return st(()=>{var i,r,s,o,a,l,c,u,d;const f=!!(t.prependAvatar||t.prependIcon||n.prepend),h=!!(t.appendAvatar||t.appendIcon||n.append),g=!!(t.title||n.title),m=!!(t.subtitle||n.subtitle);return k("div",{class:"v-card-item"},[f&&k(Wn,{key:"prepend",defaults:{VAvatar:{density:t.density,icon:t.prependIcon,image:t.prependAvatar},VIcon:{density:t.density,icon:t.prependIcon}}},{default:()=>[k("div",{class:"v-card-item__prepend"},[(i=(r=n.prepend)==null?void 0:r.call(n))!=null?i:k(aa,null,null)])]}),k("div",{class:"v-card-item__content"},[g&&k(Ym,{key:"title"},{default:()=>[(s=(o=n.title)==null?void 0:o.call(n))!=null?s:t.title]}),m&&k(jm,{key:"subtitle"},{default:()=>[(a=(l=n.subtitle)==null?void 0:l.call(n))!=null?a:t.subtitle]}),(c=n.default)==null?void 0:c.call(n)]),h&&k(Wn,{key:"append",defaults:{VAvatar:{density:t.density,icon:t.appendIcon,image:t.appendAvatar},VIcon:{density:t.density,icon:t.appendIcon}}},{default:()=>[k("div",{class:"v-card-item__append"},[(u=(d=n.append)==null?void 0:d.call(n))!=null?u:k(aa,null,null)])]})])}),{}}}),xC=to("v-card-text"),yC=Ze({name:"VCard",directives:{Ripple:Zc},props:{appendAvatar:String,appendIcon:bt,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:bt,ripple:Boolean,subtitle:String,text:String,title:String,...Wt(),...is(),...bi(),...ar(),...Si(),...Hm(),...Wm(),...qm(),...Pn(),...tu(),...It(),...ro({variant:"elevated"})},setup(t,e){let{attrs:n,slots:i}=e;const{themeClasses:r}=$t(t),{borderClasses:s}=rs(t),{colorClasses:o,colorStyles:a,variantClasses:l}=Qc(t),{densityClasses:c}=cr(t),{dimensionStyles:u}=lr(t),{elevationClasses:d}=ur(t),{loaderClasses:f}=Gm(t),{locationStyles:h}=$m(t),{positionClasses:g}=Xm(t),{roundedClasses:m}=Kn(t),p=eu(t,n),v=Y(()=>t.link!==!1&&p.isLink.value),x=Y(()=>!t.disabled&&t.link!==!1&&(t.link||p.isClickable.value));return st(()=>{var w,y,M,T,L;const _=v.value?"a":t.tag,C=!!(i.title||t.title),P=!!(i.subtitle||t.subtitle),D=C||P,F=!!(i.append||t.appendAvatar||t.appendIcon),W=!!(i.prepend||t.prependAvatar||t.prependIcon),N=!!(i.image||t.image),Q=D||W||F,I=!!(i.text||t.text);return Yi(k(_,{class:["v-card",{"v-card--disabled":t.disabled,"v-card--flat":t.flat,"v-card--hover":t.hover&&!(t.disabled||t.flat),"v-card--link":x.value},r.value,s.value,o.value,c.value,d.value,f.value,g.value,m.value,l.value],style:[a.value,u.value,h.value],href:p.href.value,onClick:x.value&&p.navigate},{default:()=>[N&&k(Wn,{key:"image",defaults:{VImg:{cover:!0,src:t.image}}},{default:()=>[k("div",{class:"v-card__image"},[(w=(y=i.image)==null?void 0:y.call(i))!=null?w:k(Kc,null,null)])]}),k(hC,{name:"v-card",active:!!t.loading,color:typeof t.loading=="boolean"?void 0:t.loading},{default:i.loader}),Q&&k(_C,{key:"item",prependAvatar:t.prependAvatar,prependIcon:t.prependIcon,title:t.title,subtitle:t.subtitle,appendAvatar:t.appendAvatar,appendIcon:t.appendIcon},{default:i.item,prepend:i.prepend,title:i.title,subtitle:i.subtitle,append:i.append}),I&&k(xC,{key:"text"},{default:()=>[(M=(T=i.text)==null?void 0:T.call(i))!=null?M:t.text]}),(L=i.default)==null?void 0:L.call(i),i.actions&&k(vC,null,{default:i.actions}),Jc(x.value,"v-card")]}),[[Js("ripple"),x.value]])}),{}}}),Km=Je({closeDelay:[Number,String],openDelay:[Number,String]},"delay");function Zm(t,e){const n={},i=r=>()=>{if(!ct)return Promise.resolve(!0);const s=r==="openDelay";return n.closeDelay&&window.clearTimeout(n.closeDelay),delete n.closeDelay,n.openDelay&&window.clearTimeout(n.openDelay),delete n.openDelay,new Promise(o=>{var a;const l=parseInt((a=t[r])!=null?a:0,10);n[r]=window.setTimeout(()=>{e==null||e(s),o(s)},l)})};return{runCloseDelay:i("closeDelay"),runOpenDelay:i("openDelay")}}const bC=Ze({name:"VHover",props:{disabled:Boolean,modelValue:{type:Boolean,default:void 0},...Km()},emits:{"update:modelValue":t=>!0},setup(t,e){let{slots:n}=e;const i=Ki(t,"modelValue"),{runOpenDelay:r,runCloseDelay:s}=Zm(t,o=>!t.disabled&&(i.value=o));return()=>{var o;return(o=n.default)==null?void 0:o.call(n,{isHovering:i.value,props:{onMouseenter:r,onMouseleave:s}})}}});const SC=Symbol.for("vuetify:v-menu"),MC=Je({activator:[String,Object],activatorProps:{type:Object,default:()=>({})},openOnClick:{type:Boolean,default:void 0},openOnHover:Boolean,openOnFocus:{type:Boolean,default:void 0},closeOnContentClick:Boolean,...Km()});function wC(t,e){let{isActive:n,isTop:i}=e;const r=Pe();let s=!1,o=!1;const a=Y(()=>t.openOnFocus||t.openOnFocus==null&&t.openOnHover),l=Y(()=>t.openOnClick||t.openOnClick==null&&!t.openOnHover&&!a.value),{runOpenDelay:c,runCloseDelay:u}=Zm(t,v=>{v===(t.openOnHover&&s||a.value&&o)&&!(t.openOnHover&&n.value&&!i.value)&&(n.value=v)}),d={click:v=>{v.stopPropagation(),r.value=v.currentTarget||v.target,n.value=!n.value},mouseenter:v=>{s=!0,r.value=v.currentTarget||v.target,c()},mouseleave:v=>{s=!1,u()},focus:v=>{U_&&!v.target.matches(":focus-visible")||(o=!0,v.stopPropagation(),r.value=v.currentTarget||v.target,c())},blur:v=>{o=!1,v.stopPropagation(),u()}},f=Y(()=>{const v={};return l.value&&(v.click=d.click),t.openOnHover&&(v.mouseenter=d.mouseenter,v.mouseleave=d.mouseleave),a.value&&(v.focus=d.focus,v.blur=d.blur),v}),h=Y(()=>{const v={};if(t.openOnHover&&(v.mouseenter=()=>{s=!0,c()},v.mouseleave=()=>{s=!1,u()}),t.closeOnContentClick){const x=it(SC,null);v.click=()=>{n.value=!1,x==null||x.closeParents()}}return v});Ke(i,v=>{v&&(t.openOnHover&&!s&&(!a.value||!o)||a.value&&!o&&(!t.openOnHover||!s))&&(n.value=!1)});const g=Pe();_i(()=>{!g.value||xn(()=>{const v=g.value;r.value=q_(v)?v.$el:v})});const m=Ot("useActivator");let p;return Ke(()=>!!t.activator,v=>{v&&ct?(p=Ks(),p.run(()=>{EC(t,m,{activatorEl:r,activatorEvents:f})})):p&&p.stop()},{flush:"post",immediate:!0}),{activatorEl:r,activatorRef:g,activatorEvents:f,contentEvents:h}}function EC(t,e,n){let{activatorEl:i,activatorEvents:r}=n;Ke(()=>t.activator,(l,c)=>{if(c&&l!==c){const u=a(c);u&&o(u)}l&&xn(()=>s())},{immediate:!0}),Ke(()=>t.activatorProps,()=>{s()}),tr(()=>{o()});function s(){let l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:a(),c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:t.activatorProps;!l||(Object.entries(r.value).forEach(u=>{let[d,f]=u;l.addEventListener(d,f)}),Object.keys(c).forEach(u=>{c[u]==null?l.removeAttribute(u):l.setAttribute(u,c[u])}))}function o(){let l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:a(),c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:t.activatorProps;!l||(Object.entries(r.value).forEach(u=>{let[d,f]=u;l.removeEventListener(d,f)}),Object.keys(c).forEach(u=>{l.removeAttribute(u)}))}function a(){var l;let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:t.activator,u;if(c)if(c==="parent"){var d,f;let h=e==null||(d=e.proxy)==null||(f=d.$el)==null?void 0:f.parentNode;for(;h.hasAttribute("data-no-activator");)h=h.parentNode;u=h}else typeof c=="string"?u=document.querySelector(c):"$el"in c?u=c.$el:u=c;return i.value=((l=u)==null?void 0:l.nodeType)===Node.ELEMENT_NODE?u:null,i.value}}const CC=Je({eager:Boolean},"lazy");function TC(t,e){const n=Pe(!1),i=Y(()=>n.value||t.eager||e.value);Ke(e,()=>n.value=!0);function r(){t.eager||(n.value=!1)}return{isBooted:n,hasContent:i,onAfterLeave:r}}function Ll(t,e){return{x:t.x+e.x,y:t.y+e.y}}function AC(t,e){return{x:t.x-e.x,y:t.y-e.y}}function Yd(t,e){if(t.side==="top"||t.side==="bottom"){const{side:n,align:i}=t,r=i==="left"?0:i==="center"?e.width/2:i==="right"?e.width:i,s=n==="top"?0:n==="bottom"?e.height:n;return Ll({x:r,y:s},e)}else if(t.side==="left"||t.side==="right"){const{side:n,align:i}=t,r=n==="left"?0:n==="right"?e.width:n,s=i==="top"?0:i==="center"?e.height/2:i==="bottom"?e.height:i;return Ll({x:r,y:s},e)}return Ll({x:e.width/2,y:e.height/2},e)}const Jm={static:RC,connected:IC},LC=Je({locationStrategy:{type:[String,Function],default:"static",validator:t=>typeof t=="function"||t in Jm},location:{type:String,default:"bottom"},origin:{type:String,default:"auto"},offset:[Number,String,Array]});function PC(t,e){const n=Pe({}),i=Pe();let r;_i(async()=>{var o;(o=r)==null||o.stop(),i.value=void 0,ct&&e.isActive.value&&t.locationStrategy&&(r=Ks(),await xn(),r.run(()=>{if(typeof t.locationStrategy=="function"){var a;i.value=(a=t.locationStrategy(e,t,n))==null?void 0:a.updateLocation}else{var l;i.value=(l=Jm[t.locationStrategy](e,t,n))==null?void 0:l.updateLocation}}))}),ct&&window.addEventListener("resize",s,{passive:!0}),tr(()=>{var o;ct&&window.removeEventListener("resize",s),i.value=void 0,(o=r)==null||o.stop()});function s(o){var a;(a=i.value)==null||a.call(i,o)}return{contentStyles:n,updateLocation:i}}function RC(){}function DC(t){const e=K_(t);return e.x-=parseFloat(t.style.left||0),e.y-=parseFloat(t.style.top||0),e}function IC(t,e,n){const i=m0(t.activatorEl.value);i&&Object.assign(n.value,{position:"fixed"});const{preferredAnchor:r,preferredOrigin:s}=Wc(()=>{const h=Yl(e.location,t.isRtl.value),g=e.origin==="overlap"?h:e.origin==="auto"?Ha(h):Yl(e.origin,t.isRtl.value);return h.side===g.side&&h.align===Ga(g).align?{preferredAnchor:Yu(h),preferredOrigin:Yu(g)}:{preferredAnchor:h,preferredOrigin:g}}),[o,a,l,c]=["minWidth","minHeight","maxWidth","maxHeight"].map(h=>Y(()=>{const g=parseFloat(e[h]);return isNaN(g)?1/0:g})),u=Y(()=>{if(Array.isArray(e.offset))return e.offset;if(typeof e.offset=="string"){const h=e.offset.split(" ").map(parseFloat);return h.length<2&&h.push(0),h}return typeof e.offset=="number"?[e.offset,0]:[0,0]});let d=!1;if(ct){const h=new ResizeObserver(()=>{d&&f()});h.observe(t.activatorEl.value),h.observe(t.contentEl.value),tr(()=>{h.disconnect()})}function f(){d=!1,requestAnimationFrame(()=>{requestAnimationFrame(()=>d=!0)});const h=t.activatorEl.value.getBoundingClientRect(),g=DC(t.contentEl.value),m=ra(t.contentEl.value),p=12;m.length||(m.push(document.documentElement),t.contentEl.value.style.top&&t.contentEl.value.style.left||(g.x+=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x")||0),g.y+=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y")||0)));const v=m.reduce((P,D)=>{const F=D.getBoundingClientRect(),W=new Hr({x:D===document.documentElement?0:F.x,y:D===document.documentElement?0:F.y,width:D.clientWidth,height:D.clientHeight});return P?new Hr({x:Math.max(P.left,W.left),y:Math.max(P.top,W.top),width:Math.min(P.right,W.right)-Math.max(P.left,W.left),height:Math.min(P.bottom,W.bottom)-Math.max(P.top,W.top)}):W},void 0);v.x+=p,v.y+=p,v.width-=p*2,v.height-=p*2;let x={anchor:r.value,origin:s.value};function w(P){const D=new Hr(g),F=Yd(P.anchor,h),W=Yd(P.origin,D);let{x:N,y:Q}=AC(F,W);switch(P.anchor.side){case"top":Q-=u.value[0];break;case"bottom":Q+=u.value[0];break;case"left":N-=u.value[0];break;case"right":N+=u.value[0];break}switch(P.anchor.align){case"top":Q-=u.value[1];break;case"bottom":Q+=u.value[1];break;case"left":N-=u.value[1];break;case"right":N+=u.value[1];break}return D.x+=N,D.y+=Q,D.width=Math.min(D.width,l.value),D.height=Math.min(D.height,c.value),{overflows:Zu(D,v),x:N,y:Q}}let y=0,M=0;const T={x:0,y:0},L={x:!1,y:!1};let _=-1;for(;;){if(_++>10){Zl("Infinite loop detected in connectedLocationStrategy");break}const{x:P,y:D,overflows:F}=w(x);y+=P,M+=D,g.x+=P,g.y+=D;{const W=Ku(x.anchor),N=F.x.before||F.x.after,Q=F.y.before||F.y.after;let I=!1;if(["x","y"].forEach(V=>{if(V==="x"&&N&&!L.x||V==="y"&&Q&&!L.y){const $={anchor:{...x.anchor},origin:{...x.origin}},H=V==="x"?W==="y"?Ga:Ha:W==="y"?Ha:Ga;$.anchor=H($.anchor),$.origin=H($.origin);const{overflows:J}=w($);(J[V].before<=F[V].before&&J[V].after<=F[V].after||J[V].before+J[V].after<(F[V].before+F[V].after)/2)&&(x=$,I=L[V]=!0)}}),I)continue}F.x.before&&(y+=F.x.before,g.x+=F.x.before),F.x.after&&(y-=F.x.after,g.x-=F.x.after),F.y.before&&(M+=F.y.before,g.y+=F.y.before),F.y.after&&(M-=F.y.after,g.y-=F.y.after);{const W=Zu(g,v);T.x=v.width-W.x.before-W.x.after,T.y=v.height-W.y.before-W.y.after,y+=W.x.before,g.x+=W.x.before,M+=W.y.before,g.y+=W.y.before}break}const C=Ku(x.anchor);Object.assign(n.value,{"--v-overlay-anchor-origin":`${x.anchor.side} ${x.anchor.align}`,transformOrigin:`${x.origin.side} ${x.origin.align}`,top:Re(Kd(M)),left:Re(Kd(y)),minWidth:Re(C==="y"?Math.min(o.value,h.width):o.value),maxWidth:Re(Zd(jl(T.x,o.value===1/0?0:o.value,l.value))),maxHeight:Re(Zd(jl(T.y,a.value===1/0?0:a.value,c.value)))})}return Ke(()=>[r.value,s.value,e.offset,e.minWidth,e.minHeight,e.maxWidth,e.maxHeight],()=>f(),{immediate:!i}),i&&xn(()=>f()),requestAnimationFrame(()=>{n.value.maxHeight&&f()}),{updateLocation:f}}function Kd(t){return Math.round(t*devicePixelRatio)/devicePixelRatio}function Zd(t){return Math.ceil(t*devicePixelRatio)/devicePixelRatio}let pc=!0;const fa=[];function FC(t){!pc||fa.length?(fa.push(t),mc()):(pc=!1,t(),mc())}let Jd=-1;function mc(){cancelAnimationFrame(Jd),Jd=requestAnimationFrame(()=>{const t=fa.shift();t&&t(),fa.length?mc():pc=!0})}const gc={none:null,close:BC,block:zC,reposition:kC},NC=Je({scrollStrategy:{type:[String,Function],default:"block",validator:t=>typeof t=="function"||t in gc}});function OC(t,e){if(!ct)return;let n;_i(async()=>{var i;(i=n)==null||i.stop(),e.isActive.value&&t.scrollStrategy&&(n=Ks(),await xn(),n.run(()=>{if(typeof t.scrollStrategy=="function")t.scrollStrategy(e);else{var r;(r=gc[t.scrollStrategy])==null||r.call(gc,e)}}))})}function BC(t){var e;function n(i){t.isActive.value=!1}Qm((e=t.activatorEl.value)!=null?e:t.contentEl.value,n)}function zC(t){var e;const n=[...new Set([...ra(t.activatorEl.value),...ra(t.contentEl.value)])].filter(s=>!s.classList.contains("v-overlay-scroll-blocked")),i=window.innerWidth-document.documentElement.offsetWidth,r=(s=>qc(s)&&s)(((e=t.root.value)==null?void 0:e.offsetParent)||document.documentElement);r&&t.root.value.classList.add("v-overlay--scroll-blocked"),n.forEach((s,o)=>{s.style.setProperty("--v-body-scroll-x",Re(-s.scrollLeft)),s.style.setProperty("--v-body-scroll-y",Re(-s.scrollTop)),s.style.setProperty("--v-scrollbar-offset",Re(i)),s.classList.add("v-overlay-scroll-blocked")}),tr(()=>{n.forEach((s,o)=>{const a=parseFloat(s.style.getPropertyValue("--v-body-scroll-x")),l=parseFloat(s.style.getPropertyValue("--v-body-scroll-y"));s.style.removeProperty("--v-body-scroll-x"),s.style.removeProperty("--v-body-scroll-y"),s.style.removeProperty("--v-scrollbar-offset"),s.classList.remove("v-overlay-scroll-blocked"),s.scrollLeft=-a,s.scrollTop=-l}),r&&t.root.value.classList.remove("v-overlay--scroll-blocked")})}function kC(t){var e;let n=!1,i=-1;function r(s){FC(()=>{var o,a;const l=performance.now();(o=(a=t.updateLocation).value)==null||o.call(a,s),n=(performance.now()-l)/(1e3/60)>2})}Qm((e=t.activatorEl.value)!=null?e:t.contentEl.value,s=>{n?(cancelAnimationFrame(i),i=requestAnimationFrame(()=>{i=requestAnimationFrame(()=>{r(s)})})):r(s)})}function Qm(t,e){const n=[document,...ra(t)];n.forEach(i=>{i.addEventListener("scroll",e,{passive:!0})}),tr(()=>{n.forEach(i=>{i.removeEventListener("scroll",e)})})}function eg(t,e){let n;Ke(t,i=>{if(i&&!n)n=Ks(),n.run(e);else{var r;(r=n)==null||r.stop(),n=void 0}},{immediate:!0})}const Qd=Symbol.for("vuetify:stack"),vs=Ct([]);function UC(t,e){const n=Ot("useStack"),i=it(Qd,void 0),r=Ct({activeChildren:new Set});Tt(Qd,r);const s=Pe(+e.value);eg(t,()=>{var l;const c=(l=vs.at(-1))==null?void 0:l[1];s.value=c?c+10:+e.value,vs.push([n.uid,s.value]),i==null||i.activeChildren.add(n.uid),tr(()=>{const u=vs.findIndex(d=>d[0]===n.uid);vs.splice(u,1),i==null||i.activeChildren.delete(n.uid)})});const o=Pe(!0);_i(()=>{var l;const c=((l=vs.at(-1))==null?void 0:l[0])===n.uid;setTimeout(()=>o.value=c)});const a=Y(()=>!r.activeChildren.size);return{globalTop:Zs(o),localTop:a,stackStyles:Y(()=>({zIndex:s.value}))}}function Rs(t){return{teleportTarget:Y(()=>{const n=t.value;if(n===!0||!ct)return;const i=n===!1?document.body:typeof n=="string"?document.querySelector(n):n;if(i==null){Jg(`Unable to locate target ${n}`);return}if(!Rs.cache.has(i)){const r=document.createElement("div");r.className="v-overlay-container",i.appendChild(r),Rs.cache.set(i,r)}return Rs.cache.get(i)})}}Rs.cache=new WeakMap;function VC(){return!0}function tg(t,e,n){if(!t||ng(t,n)===!1)return!1;const i=Pp(e);if(typeof ShadowRoot<"u"&&i instanceof ShadowRoot&&i.host===t.target)return!1;const r=(typeof n.value=="object"&&n.value.include||(()=>[]))();return r.push(e),!r.some(s=>s==null?void 0:s.contains(t.target))}function ng(t,e){return(typeof e.value=="object"&&e.value.closeConditional||VC)(t)}function HC(t,e,n){const i=typeof n.value=="function"?n.value:n.value.handler;e._clickOutside.lastMousedownWasOutside&&tg(t,e,n)&&setTimeout(()=>{ng(t,n)&&i&&i(t)},0)}function eh(t,e){const n=Pp(t);e(document),typeof ShadowRoot<"u"&&n instanceof ShadowRoot&&e(n)}const GC={mounted(t,e){const n=r=>HC(r,t,e),i=r=>{t._clickOutside.lastMousedownWasOutside=tg(r,t,e)};eh(t,r=>{r.addEventListener("click",n,!0),r.addEventListener("mousedown",i,!0)}),t._clickOutside||(t._clickOutside={lastMousedownWasOutside:!0}),t._clickOutside[e.instance.$.uid]={onClick:n,onMousedown:i}},unmounted(t,e){!t._clickOutside||(eh(t,n=>{var i;if(!n||!((i=t._clickOutside)!=null&&i[e.instance.$.uid]))return;const{onClick:r,onMousedown:s}=t._clickOutside[e.instance.$.uid];n.removeEventListener("click",r,!0),n.removeEventListener("mousedown",s,!0)}),delete t._clickOutside[e.instance.$.uid])}};function WC(t){const{modelValue:e,color:n,...i}=t;return k(xi,{name:"fade-transition",appear:!0},{default:()=>[t.modelValue&&k("div",Cn({class:["v-overlay__scrim",t.color.backgroundColorClasses.value],style:t.color.backgroundColorStyles.value},i),null)]})}const $C=ts()({name:"VOverlay",directives:{ClickOutside:GC},inheritAttrs:!1,props:{absolute:Boolean,attach:[Boolean,String,Object],closeOnBack:{type:Boolean,default:!0},contained:Boolean,contentClass:null,contentProps:null,disabled:Boolean,noClickAnimation:Boolean,modelValue:Boolean,persistent:Boolean,scrim:{type:[String,Boolean],default:!0},zIndex:{type:[Number,String],default:2e3},...MC(),...ar(),...CC(),...LC(),...NC(),...Wt(),...Wp()},emits:{"click:outside":t=>!0,"update:modelValue":t=>!0,afterLeave:()=>!0},setup(t,e){let{slots:n,attrs:i,emit:r}=e;const s=Ki(t,"modelValue"),o=Y({get:()=>s.value,set:I=>{I&&t.disabled||(s.value=I)}}),{teleportTarget:a}=Rs(Y(()=>t.attach||t.contained)),{themeClasses:l}=$t(t),{rtlClasses:c,isRtl:u}=no(),{hasContent:d,onAfterLeave:f}=TC(t,o),h=Ln(Y(()=>typeof t.scrim=="string"?t.scrim:null)),{globalTop:g,localTop:m,stackStyles:p}=UC(o,Ve(t,"zIndex")),{activatorEl:v,activatorRef:x,activatorEvents:w,contentEvents:y}=wC(t,{isActive:o,isTop:m}),{dimensionStyles:M}=lr(t);Ke(()=>t.disabled,I=>{I&&(o.value=!1)});const T=Pe(),L=Pe(),{contentStyles:_,updateLocation:C}=PC(t,{isRtl:u,contentEl:L,activatorEl:v,isActive:o});OC(t,{root:T,contentEl:L,activatorEl:v,isActive:o,updateLocation:C});function P(I){r("click:outside",I),t.persistent?Q():o.value=!1}function D(){return o.value&&g.value}ct&&Ke(o,I=>{I?window.addEventListener("keydown",F):window.removeEventListener("keydown",F)},{immediate:!0});function F(I){I.key==="Escape"&&g.value&&(t.persistent?Q():o.value=!1)}const W=Qp();eg(()=>t.closeOnBack,()=>{xx(W,I=>{g.value&&o.value?(I(!1),t.persistent?Q():o.value=!1):I()})});const N=Pe();Ke(()=>o.value&&(t.absolute||t.contained)&&a.value==null,I=>{if(I){const V=p0(T.value);V&&V!==document.scrollingElement&&(N.value=V.scrollTop)}});function Q(){var I;t.noClickAnimation||(I=L.value)==null||I.animate([{transformOrigin:"center"},{transform:"scale(1.03)"},{transformOrigin:"center"}],{duration:150,easing:h0})}return st(()=>{var I,V;return k(Et,null,[(I=n.activator)==null?void 0:I.call(n,{isActive:o.value,props:Cn({ref:x},wu(w.value),t.activatorProps)}),ct&&k($v,{disabled:!a.value,to:a.value},{default:()=>[d.value&&k("div",Cn({class:["v-overlay",{"v-overlay--absolute":t.absolute||t.contained,"v-overlay--active":o.value,"v-overlay--contained":t.contained},l.value,c.value],style:[p.value,{top:Re(N.value)}],ref:T},i),[k(WC,{color:h,modelValue:o.value&&!!t.scrim},null),k(ys,{appear:!0,persisted:!0,transition:t.transition,target:v.value,onAfterLeave:()=>{f(),r("afterLeave")}},{default:()=>[Yi(k("div",Cn({ref:L,class:["v-overlay__content",t.contentClass],style:[M.value,_.value]},wu(y.value),t.contentProps),[(V=n.default)==null?void 0:V.call(n,{isActive:o})]),[[Vc,o.value],[Js("click-outside"),{handler:P,closeConditional:D,include:()=>[v.value]}]])]})])]})])}),{activatorEl:v,animateClick:Q,contentEl:L,globalTop:g,localTop:m,updateLocation:C}}});const qC=Ze({name:"VTimeline",props:{align:{type:String,default:"center",validator:t=>["center","start"].includes(t)},direction:{type:String,default:"vertical",validator:t=>["vertical","horizontal"].includes(t)},side:{type:String,validator:t=>t==null||["start","end"].includes(t)},lineInset:{type:[String,Number],default:0},lineThickness:{type:[String,Number],default:2},lineColor:String,truncateLine:{type:String,validator:t=>["start","end","both"].includes(t)},...bi(),...It(),...Wt()},setup(t,e){let{slots:n}=e;const{themeClasses:i}=$t(t),{densityClasses:r}=cr(t);yi({VTimelineDivider:{lineColor:Ve(t,"lineColor")},VTimelineItem:{density:Ve(t,"density"),lineInset:Ve(t,"lineInset")}});const s=Y(()=>{const a=t.side?t.side:t.density!=="default"?"end":null;return a&&`v-timeline--side-${a}`}),o=Y(()=>{const a=["v-timeline--truncate-line-start","v-timeline--truncate-line-end"];switch(t.truncateLine){case"both":return a;case"start":return a[0];case"end":return a[1];default:return null}});return st(()=>k(t.tag,{class:["v-timeline",`v-timeline--${t.direction}`,`v-timeline--align-${t.align}`,o.value,{"v-timeline--inset-line":!!t.lineInset},i.value,r.value,s.value],style:{"--v-timeline-line-thickness":Re(t.lineThickness)}},n)),{}}}),XC=Ze({name:"VTimelineDivider",props:{dotColor:String,fillDot:Boolean,hideDot:Boolean,icon:bt,iconColor:String,lineColor:String,...Pn(),...ns(),...Si()},setup(t,e){let{slots:n}=e;const{sizeClasses:i,sizeStyles:r}=io(t,"v-timeline-divider__dot"),{backgroundColorStyles:s,backgroundColorClasses:o}=Ln(Ve(t,"dotColor")),{roundedClasses:a}=Kn(t,"v-timeline-divider__dot"),{elevationClasses:l}=ur(t),{backgroundColorClasses:c,backgroundColorStyles:u}=Ln(Ve(t,"lineColor"));return yi({VIcon:{color:Ve(t,"iconColor"),icon:Ve(t,"icon"),size:Ve(t,"size")}}),st(()=>{var d,f;return k("div",{class:["v-timeline-divider",{"v-timeline-divider--fill-dot":t.fillDot}]},[k("div",{class:["v-timeline-divider__before",c.value],style:u.value},null),!t.hideDot&&k("div",{key:"dot",class:["v-timeline-divider__dot",l.value,a.value,i.value],style:r.value},[k("div",{class:["v-timeline-divider__inner-dot",o.value,a.value],style:s.value},[(d=(f=n.default)==null?void 0:f.call(n))!=null?d:t.icon?k(qi,null,null):void 0])]),k("div",{class:["v-timeline-divider__after",c.value],style:u.value},null)])}),{}}}),jC=Ze({name:"VTimelineItem",props:{density:String,dotColor:String,fillDot:Boolean,hideDot:Boolean,hideOpposite:{type:Boolean,default:void 0},icon:bt,iconColor:String,lineInset:[Number,String],...Pn(),...Si(),...ns(),...It(),...ar()},setup(t,e){let{slots:n}=e;const{dimensionStyles:i}=lr(t),r=Pe(0),s=Pe();return Ke(s,o=>{var a,l;!o||(r.value=(a=(l=o.$el.querySelector(".v-timeline-divider__dot"))==null?void 0:l.getBoundingClientRect().width)!=null?a:0)},{flush:"post"}),st(()=>{var o,a;return k("div",{class:["v-timeline-item",{"v-timeline-item--fill-dot":t.fillDot}],style:{"--v-timeline-dot-size":Re(r.value),"--v-timeline-line-inset":t.lineInset?`calc(var(--v-timeline-dot-size) / 2 + ${Re(t.lineInset)})`:Re(0)}},[k("div",{class:"v-timeline-item__body",style:i.value},[(o=n.default)==null?void 0:o.call(n)]),k(XC,{ref:s,hideDot:t.hideDot,icon:t.icon,iconColor:t.iconColor,size:t.size,elevation:t.elevation,dotColor:t.dotColor,fillDot:t.fillDot,rounded:t.rounded},{default:n.icon}),t.density!=="compact"&&k("div",{class:"v-timeline-item__opposite"},[!t.hideOpposite&&((a=n.opposite)==null?void 0:a.call(n))])])}),{}}}),YC={name:"ProjectsComponent",data:()=>({cards:[{title:"Keycode",subtitle:"Simple tool to acquire keycodes",src:Ir,year:2018,route:null},{title:"Snake",subtitle:"A game of snake",src:Ir,year:2018,route:null},{title:"Bresenham",subtitle:"Bresenham algorithm visualized",src:Ir,year:2018,route:null},{title:"Hoppy Hunting",subtitle:"A 2.5D game made in canvas",src:Ir,year:2018,route:null},{title:"Matrix Flight",subtitle:"Flight with matrix math",src:Ir,year:2018,route:null},{title:"Midpoint Displacement",subtitle:"Midpoint displacement visualized",src:Ir,year:2018,route:null},{title:"Waveslab",subtitle:"Audio visualization tool",src:iC,year:2018,route:"https://sdholcomb.github.io/WaveSlab/examples/example_override_style.html"}]})},KC=["textContent"],ZC=ea("View");function JC(t,e,n,i,r,s){return Vn(),Wi(qC,null,{default:Pt(()=>[(Vn(!0),np(Et,null,Ev(t.cards,o=>(Vn(),Wi(jC,{key:o.title,cols:o.flex,"dot-color":"green-lighten-1","fill-dot":"",size:"x-small",width:"75%"},{opposite:Pt(()=>[kc("div",{class:js("pt-1 headline font-weight-bold text-green"),textContent:Na(o.year)},null,8,KC)]),default:Pt(()=>[k(bC,null,{default:Pt(({isHovering:a,props:l})=>[k(yC,hg(rp(l)),{default:Pt(()=>[k(Kc,{src:o.src,"aspect-ratio":16/9,height:"200px",class:"project-img",cover:""},null,8,["src"]),k(Ym,null,{default:Pt(()=>[ea(Na(o.title),1)]),_:2},1024),k(jm,null,{default:Pt(()=>[ea(Na(o.subtitle),1)]),_:2},1024),o.route?(Vn(),Wi($C,{key:0,"model-value":a,contained:"",scrim:"#036358",class:"align-center justify-center"},{default:Pt(()=>[k(gC,{flat:"",href:o.route},{default:Pt(()=>[ZC]),_:2},1032,["href"])]),_:2},1032,["model-value"])):jv("",!0)]),_:2},1040)]),_:2},1024)]),_:2},1032,["cols"]))),128))]),_:1})}const QC=Qs(YC,[["render",JC]]),eT=rr({name:"ProjectsView",components:{ProjectsComponent:QC}});function tT(t,e,n,i,r,s){const o=Fc("ProjectsComponent");return Vn(),Wi(o)}const nT=Qs(eT,[["render",tT]]),iT=Yy({history:uy("/"),routes:[{path:"/",name:"home",component:nC},{path:"/projects",name:"projects",component:nT},{path:"/about",name:"about",component:()=>im(()=>import("./AboutView.295dba49.js"),["assets/AboutView.295dba49.js","assets/AboutView.4d995ba2.css"])}]});const rT=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return{install:n=>{const{blueprint:i,...r}=t,s=Xn(i,r),{aliases:o={},components:a={},directives:l={}}=s;for(const f in l)n.directive(f,l[f]);for(const f in a)n.component(f,a[f]);for(const f in o)n.component(f,Ze({...o[f],name:f}));function c(f){n.provide(Us,f0(s.defaults)),n.provide(nc,Tx(s.display,f)),n.provide(oa,P0(n,s.theme)),n.provide(Ql,G0(s.icons)),n.provide(mf,Px(n,s.locale))}ct||c(),eo.reset();const u=n.mount;n.mount=(f,h,g)=>{c(h);const m=u(f,h,g);return n.mount=u,m};function d(f){var h,g,m;const p=this.$,v=(h=(g=p.parent)==null?void 0:g.provides)!=null?h:(m=p.vnode.appContext)==null?void 0:m.provides;if(v&&f in v)return v[f]}n.mixin({computed:{$vuetify(){return Ct({defaults:d.call(this,Us),display:d.call(this,nc),theme:d.call(this,oa),icons:d.call(this,Ql),locale:d.call(this,mf),rtl:d.call(this,Xc)})}}})}}},sT=rT({theme:{defaultTheme:"dark"}});async function oT(){(await im(()=>import("./webfontloader.b777d690.js").then(e=>e.w),[])).load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}oT();O_(Wx).use(iT).use(sT).mount("#app");export{Qs as _,kc as a,np as c,Vn as o};
