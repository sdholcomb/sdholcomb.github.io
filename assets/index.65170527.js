(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function Ml(n,e){const t=Object.create(null),i=n.split(",");for(let r=0;r<i.length;r++)t[i[r]]=!0;return e?r=>!!t[r.toLowerCase()]:r=>!!t[r]}const Up="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",kp=Ml(Up);function Zf(n){return!!n||n===""}function wl(n){if(Ie(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=vt(i)?Hp(i):wl(i);if(r)for(const s in r)e[s]=r[s]}return e}else{if(vt(n))return n;if(_t(n))return n}}const Vp=/;(?![^(]*\))/g,Gp=/:(.+)/;function Hp(n){const e={};return n.split(Vp).forEach(t=>{if(t){const i=t.split(Gp);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function El(n){let e="";if(vt(n))e=n;else if(Ie(n))for(let t=0;t<n.length;t++){const i=El(n[t]);i&&(e+=i+" ")}else if(_t(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Ye={},ur=[],rn=()=>{},Wp=()=>!1,$p=/^on[^a-z]/,bo=n=>$p.test(n),Tl=n=>n.startsWith("onUpdate:"),mt=Object.assign,Cl=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},qp=Object.prototype.hasOwnProperty,ke=(n,e)=>qp.call(n,e),Ie=Array.isArray,qr=n=>So(n)==="[object Map]",Xp=n=>So(n)==="[object Set]",Ne=n=>typeof n=="function",vt=n=>typeof n=="string",Al=n=>typeof n=="symbol",_t=n=>n!==null&&typeof n=="object",Jf=n=>_t(n)&&Ne(n.then)&&Ne(n.catch),jp=Object.prototype.toString,So=n=>jp.call(n),Yp=n=>So(n).slice(8,-1),Kp=n=>So(n)==="[object Object]",Ll=n=>vt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,eo=Ml(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Mo=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Zp=/-(\w)/g,jt=Mo(n=>n.replace(Zp,(e,t)=>t?t.toUpperCase():"")),Jp=/\B([A-Z])/g,Mr=Mo(n=>n.replace(Jp,"-$1").toLowerCase()),ms=Mo(n=>n.charAt(0).toUpperCase()+n.slice(1)),Ko=Mo(n=>n?`on${ms(n)}`:""),Qr=(n,e)=>!Object.is(n,e),Zo=(n,e)=>{for(let t=0;t<n.length;t++)n[t](e)},ao=(n,e,t)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value:t})},Qf=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let _c;const Qp=()=>_c||(_c=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let hn;class ed{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&hn&&(this.parent=hn,this.index=(hn.scopes||(hn.scopes=[])).push(this)-1)}run(e){if(this.active){const t=hn;try{return hn=this,e()}finally{hn=t}}}on(){hn=this}off(){hn=this.parent}stop(e){if(this.active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.active=!1}}}function em(n){return new ed(n)}function tm(n,e=hn){e&&e.active&&e.effects.push(n)}const Rl=n=>{const e=new Set(n);return e.w=0,e.n=0,e},td=n=>(n.w&ri)>0,nd=n=>(n.n&ri)>0,nm=({deps:n})=>{if(n.length)for(let e=0;e<n.length;e++)n[e].w|=ri},im=n=>{const{deps:e}=n;if(e.length){let t=0;for(let i=0;i<e.length;i++){const r=e[i];td(r)&&!nd(r)?r.delete(n):e[t++]=r,r.w&=~ri,r.n&=~ri}e.length=t}},Va=new WeakMap;let Gr=0,ri=1;const Ga=30;let en;const Ci=Symbol(""),Ha=Symbol("");class Pl{constructor(e,t=null,i){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,tm(this,i)}run(){if(!this.active)return this.fn();let e=en,t=ti;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=en,en=this,ti=!0,ri=1<<++Gr,Gr<=Ga?nm(this):xc(this),this.fn()}finally{Gr<=Ga&&im(this),ri=1<<--Gr,en=this.parent,ti=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){en===this?this.deferStop=!0:this.active&&(xc(this),this.onStop&&this.onStop(),this.active=!1)}}function xc(n){const{deps:e}=n;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(n);e.length=0}}let ti=!0;const id=[];function wr(){id.push(ti),ti=!1}function Er(){const n=id.pop();ti=n===void 0?!0:n}function zt(n,e,t){if(ti&&en){let i=Va.get(n);i||Va.set(n,i=new Map);let r=i.get(t);r||i.set(t,r=Rl()),rd(r)}}function rd(n,e){let t=!1;Gr<=Ga?nd(n)||(n.n|=ri,t=!td(n)):t=!n.has(en),t&&(n.add(en),en.deps.push(n))}function Fn(n,e,t,i,r,s){const o=Va.get(n);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&Ie(n))o.forEach((l,c)=>{(c==="length"||c>=i)&&a.push(l)});else switch(t!==void 0&&a.push(o.get(t)),e){case"add":Ie(n)?Ll(t)&&a.push(o.get("length")):(a.push(o.get(Ci)),qr(n)&&a.push(o.get(Ha)));break;case"delete":Ie(n)||(a.push(o.get(Ci)),qr(n)&&a.push(o.get(Ha)));break;case"set":qr(n)&&a.push(o.get(Ci));break}if(a.length===1)a[0]&&Wa(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Wa(Rl(l))}}function Wa(n,e){const t=Ie(n)?n:[...n];for(const i of t)i.computed&&yc(i);for(const i of t)i.computed||yc(i)}function yc(n,e){(n!==en||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const rm=Ml("__proto__,__v_isRef,__isVue"),sd=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Al)),sm=Dl(),om=Dl(!1,!0),am=Dl(!0),bc=lm();function lm(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const i=He(this);for(let s=0,o=this.length;s<o;s++)zt(i,"get",s+"");const r=i[e](...t);return r===-1||r===!1?i[e](...t.map(He)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){wr();const i=He(this)[e].apply(this,t);return Er(),i}}),n}function Dl(n=!1,e=!1){return function(i,r,s){if(r==="__v_isReactive")return!n;if(r==="__v_isReadonly")return n;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&s===(n?e?wm:ud:e?cd:ld).get(i))return i;const o=Ie(i);if(!n&&o&&ke(bc,r))return Reflect.get(bc,r,s);const a=Reflect.get(i,r,s);return(Al(r)?sd.has(r):rm(r))||(n||zt(i,"get",r),e)?a:Qe(a)?o&&Ll(r)?a:a.value:_t(a)?n?Eo(a):It(a):a}}const cm=od(),um=od(!0);function od(n=!1){return function(t,i,r,s){let o=t[i];if(es(o)&&Qe(o)&&!Qe(r))return!1;if(!n&&!es(r)&&($a(r)||(r=He(r),o=He(o)),!Ie(t)&&Qe(o)&&!Qe(r)))return o.value=r,!0;const a=Ie(t)&&Ll(i)?Number(i)<t.length:ke(t,i),l=Reflect.set(t,i,r,s);return t===He(s)&&(a?Qr(r,o)&&Fn(t,"set",i,r):Fn(t,"add",i,r)),l}}function fm(n,e){const t=ke(n,e);n[e];const i=Reflect.deleteProperty(n,e);return i&&t&&Fn(n,"delete",e,void 0),i}function dm(n,e){const t=Reflect.has(n,e);return(!Al(e)||!sd.has(e))&&zt(n,"has",e),t}function hm(n){return zt(n,"iterate",Ie(n)?"length":Ci),Reflect.ownKeys(n)}const ad={get:sm,set:cm,deleteProperty:fm,has:dm,ownKeys:hm},pm={get:am,set(n,e){return!0},deleteProperty(n,e){return!0}},mm=mt({},ad,{get:om,set:um}),Il=n=>n,wo=n=>Reflect.getPrototypeOf(n);function Ms(n,e,t=!1,i=!1){n=n.__v_raw;const r=He(n),s=He(e);t||(e!==s&&zt(r,"get",e),zt(r,"get",s));const{has:o}=wo(r),a=i?Il:t?Ol:ts;if(o.call(r,e))return a(n.get(e));if(o.call(r,s))return a(n.get(s));n!==r&&n.get(e)}function ws(n,e=!1){const t=this.__v_raw,i=He(t),r=He(n);return e||(n!==r&&zt(i,"has",n),zt(i,"has",r)),n===r?t.has(n):t.has(n)||t.has(r)}function Es(n,e=!1){return n=n.__v_raw,!e&&zt(He(n),"iterate",Ci),Reflect.get(n,"size",n)}function Sc(n){n=He(n);const e=He(this);return wo(e).has.call(e,n)||(e.add(n),Fn(e,"add",n,n)),this}function Mc(n,e){e=He(e);const t=He(this),{has:i,get:r}=wo(t);let s=i.call(t,n);s||(n=He(n),s=i.call(t,n));const o=r.call(t,n);return t.set(n,e),s?Qr(e,o)&&Fn(t,"set",n,e):Fn(t,"add",n,e),this}function wc(n){const e=He(this),{has:t,get:i}=wo(e);let r=t.call(e,n);r||(n=He(n),r=t.call(e,n)),i&&i.call(e,n);const s=e.delete(n);return r&&Fn(e,"delete",n,void 0),s}function Ec(){const n=He(this),e=n.size!==0,t=n.clear();return e&&Fn(n,"clear",void 0,void 0),t}function Ts(n,e){return function(i,r){const s=this,o=s.__v_raw,a=He(o),l=e?Il:n?Ol:ts;return!n&&zt(a,"iterate",Ci),o.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function Cs(n,e,t){return function(...i){const r=this.__v_raw,s=He(r),o=qr(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=t?Il:e?Ol:ts;return!e&&zt(s,"iterate",l?Ha:Ci),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function kn(n){return function(...e){return n==="delete"?!1:this}}function gm(){const n={get(s){return Ms(this,s)},get size(){return Es(this)},has:ws,add:Sc,set:Mc,delete:wc,clear:Ec,forEach:Ts(!1,!1)},e={get(s){return Ms(this,s,!1,!0)},get size(){return Es(this)},has:ws,add:Sc,set:Mc,delete:wc,clear:Ec,forEach:Ts(!1,!0)},t={get(s){return Ms(this,s,!0)},get size(){return Es(this,!0)},has(s){return ws.call(this,s,!0)},add:kn("add"),set:kn("set"),delete:kn("delete"),clear:kn("clear"),forEach:Ts(!0,!1)},i={get(s){return Ms(this,s,!0,!0)},get size(){return Es(this,!0)},has(s){return ws.call(this,s,!0)},add:kn("add"),set:kn("set"),delete:kn("delete"),clear:kn("clear"),forEach:Ts(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Cs(s,!1,!1),t[s]=Cs(s,!0,!1),e[s]=Cs(s,!1,!0),i[s]=Cs(s,!0,!0)}),[n,t,e,i]}const[vm,_m,xm,ym]=gm();function Fl(n,e){const t=e?n?ym:xm:n?_m:vm;return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(ke(t,r)&&r in i?t:i,r,s)}const bm={get:Fl(!1,!1)},Sm={get:Fl(!1,!0)},Mm={get:Fl(!0,!1)},ld=new WeakMap,cd=new WeakMap,ud=new WeakMap,wm=new WeakMap;function Em(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Tm(n){return n.__v_skip||!Object.isExtensible(n)?0:Em(Yp(n))}function It(n){return es(n)?n:Nl(n,!1,ad,bm,ld)}function fd(n){return Nl(n,!1,mm,Sm,cd)}function Eo(n){return Nl(n,!0,pm,Mm,ud)}function Nl(n,e,t,i,r){if(!_t(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=r.get(n);if(s)return s;const o=Tm(n);if(o===0)return n;const a=new Proxy(n,o===2?i:t);return r.set(n,a),a}function fr(n){return es(n)?fr(n.__v_raw):!!(n&&n.__v_isReactive)}function es(n){return!!(n&&n.__v_isReadonly)}function $a(n){return!!(n&&n.__v_isShallow)}function dd(n){return fr(n)||es(n)}function He(n){const e=n&&n.__v_raw;return e?He(e):n}function hd(n){return ao(n,"__v_skip",!0),n}const ts=n=>_t(n)?It(n):n,Ol=n=>_t(n)?Eo(n):n;function pd(n){ti&&en&&(n=He(n),rd(n.dep||(n.dep=Rl())))}function md(n,e){n=He(n),n.dep&&Wa(n.dep)}function Qe(n){return!!(n&&n.__v_isRef===!0)}function De(n){return vd(n,!1)}function gd(n){return vd(n,!0)}function vd(n,e){return Qe(n)?n:new Cm(n,e)}class Cm{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:He(e),this._value=t?e:ts(e)}get value(){return pd(this),this._value}set value(e){e=this.__v_isShallow?e:He(e),Qr(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:ts(e),md(this))}}function sn(n){return Qe(n)?n.value:n}const Am={get:(n,e,t)=>sn(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Qe(r)&&!Qe(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function _d(n){return fr(n)?n:new Proxy(n,Am)}function xd(n){const e=Ie(n)?new Array(n.length):{};for(const t in n)e[t]=lt(n,t);return e}class Lm{constructor(e,t,i){this._object=e,this._key=t,this._defaultValue=i,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}}function lt(n,e,t){const i=n[e];return Qe(i)?i:new Lm(n,e,t)}class Rm{constructor(e,t,i,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Pl(e,()=>{this._dirty||(this._dirty=!0,md(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=He(this);return pd(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Pm(n,e,t=!1){let i,r;const s=Ne(n);return s?(i=n,r=rn):(i=n.get,r=n.set),new Rm(i,r,s||!r,t)}function ni(n,e,t,i){let r;try{r=i?n(...i):n()}catch(s){To(s,e,t)}return r}function Xt(n,e,t,i){if(Ne(n)){const s=ni(n,e,t,i);return s&&Jf(s)&&s.catch(o=>{To(o,e,t)}),s}const r=[];for(let s=0;s<n.length;s++)r.push(Xt(n[s],e,t,i));return r}function To(n,e,t,i=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=t;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](n,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){ni(l,null,10,[n,o,a]);return}}Dm(n,t,r,i)}function Dm(n,e,t,i=!0){console.error(n)}let lo=!1,qa=!1;const Ft=[];let An=0;const Xr=[];let Hr=null,ir=0;const jr=[];let Zn=null,rr=0;const yd=Promise.resolve();let zl=null,Xa=null;function Co(n){const e=zl||yd;return n?e.then(this?n.bind(this):n):e}function Im(n){let e=An+1,t=Ft.length;for(;e<t;){const i=e+t>>>1;ns(Ft[i])<n?e=i+1:t=i}return e}function bd(n){(!Ft.length||!Ft.includes(n,lo&&n.allowRecurse?An+1:An))&&n!==Xa&&(n.id==null?Ft.push(n):Ft.splice(Im(n.id),0,n),Sd())}function Sd(){!lo&&!qa&&(qa=!0,zl=yd.then(Ed))}function Fm(n){const e=Ft.indexOf(n);e>An&&Ft.splice(e,1)}function Md(n,e,t,i){Ie(n)?t.push(...n):(!e||!e.includes(n,n.allowRecurse?i+1:i))&&t.push(n),Sd()}function Nm(n){Md(n,Hr,Xr,ir)}function Om(n){Md(n,Zn,jr,rr)}function Ao(n,e=null){if(Xr.length){for(Xa=e,Hr=[...new Set(Xr)],Xr.length=0,ir=0;ir<Hr.length;ir++)Hr[ir]();Hr=null,ir=0,Xa=null,Ao(n,e)}}function wd(n){if(Ao(),jr.length){const e=[...new Set(jr)];if(jr.length=0,Zn){Zn.push(...e);return}for(Zn=e,Zn.sort((t,i)=>ns(t)-ns(i)),rr=0;rr<Zn.length;rr++)Zn[rr]();Zn=null,rr=0}}const ns=n=>n.id==null?1/0:n.id;function Ed(n){qa=!1,lo=!0,Ao(n),Ft.sort((t,i)=>ns(t)-ns(i));const e=rn;try{for(An=0;An<Ft.length;An++){const t=Ft[An];t&&t.active!==!1&&ni(t,null,14)}}finally{An=0,Ft.length=0,wd(),lo=!1,zl=null,(Ft.length||Xr.length||jr.length)&&Ed(n)}}function zm(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||Ye;let r=t;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:d}=i[u]||Ye;d&&(r=t.map(p=>p.trim())),f&&(r=t.map(Qf))}let a,l=i[a=Ko(e)]||i[a=Ko(jt(e))];!l&&s&&(l=i[a=Ko(Mr(e))]),l&&Xt(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Xt(c,n,6,r)}}function Td(n,e,t=!1){const i=e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!Ne(n)){const l=c=>{const u=Td(c,e,!0);u&&(a=!0,mt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(i.set(n,null),null):(Ie(s)?s.forEach(l=>o[l]=null):mt(o,s),i.set(n,o),o)}function Lo(n,e){return!n||!bo(e)?!1:(e=e.slice(2).replace(/Once$/,""),ke(n,e[0].toLowerCase()+e.slice(1))||ke(n,Mr(e))||ke(n,e))}let $t=null,Cd=null;function co(n){const e=$t;return $t=n,Cd=n&&n.type.__scopeId||null,e}function sr(n,e=$t,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&Oc(-1);const s=co(e),o=n(...r);return co(s),i._d&&Oc(1),o};return i._n=!0,i._c=!0,i._d=!0,i}function Jo(n){const{type:e,vnode:t,proxy:i,withProxy:r,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:f,data:d,setupState:p,ctx:g,inheritAttrs:m}=n;let h,v;const y=co(n);try{if(t.shapeFlag&4){const S=r||i;h=pn(u.call(S,S,f,s,p,d,g)),v=l}else{const S=e;h=pn(S.length>1?S(s,{attrs:l,slots:a,emit:c}):S(s,null)),v=e.props?l:Bm(l)}}catch(S){Yr.length=0,To(S,n,1),h=pe(Dn)}let w=h;if(v&&m!==!1){const S=Object.keys(v),{shapeFlag:M}=w;S.length&&M&7&&(o&&S.some(Tl)&&(v=Um(v,o)),w=si(w,v))}return t.dirs&&(w=si(w),w.dirs=w.dirs?w.dirs.concat(t.dirs):t.dirs),t.transition&&(w.transition=t.transition),h=w,co(y),h}const Bm=n=>{let e;for(const t in n)(t==="class"||t==="style"||bo(t))&&((e||(e={}))[t]=n[t]);return e},Um=(n,e)=>{const t={};for(const i in n)(!Tl(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function km(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Tc(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(o[d]!==i[d]&&!Lo(c,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Tc(i,o,c):!0:!!o;return!1}function Tc(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!Lo(t,s))return!0}return!1}function Vm({vnode:n,parent:e},t){for(;e&&e.subTree===n;)(n=e.vnode).el=t,e=e.parent}const Gm=n=>n.__isSuspense;function Hm(n,e){e&&e.pendingBranch?Ie(n)?e.effects.push(...n):e.effects.push(n):Om(n)}function Ot(n,e){if(ht){let t=ht.provides;const i=ht.parent&&ht.parent.provides;i===t&&(t=ht.provides=Object.create(i)),t[n]=e}}function it(n,e,t=!1){const i=ht||$t;if(i){const r=i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(r&&n in r)return r[n];if(arguments.length>1)return t&&Ne(e)?e.call(i.proxy):e}}function Bl(n,e){return Ul(n,null,e)}const Cc={};function Mt(n,e,t){return Ul(n,e,t)}function Ul(n,e,{immediate:t,deep:i,flush:r,onTrack:s,onTrigger:o}=Ye){const a=ht;let l,c=!1,u=!1;if(Qe(n)?(l=()=>n.value,c=$a(n)):fr(n)?(l=()=>n,i=!0):Ie(n)?(u=!0,c=n.some(v=>fr(v)||$a(v)),l=()=>n.map(v=>{if(Qe(v))return v.value;if(fr(v))return Mi(v);if(Ne(v))return ni(v,a,2)})):Ne(n)?e?l=()=>ni(n,a,2):l=()=>{if(!(a&&a.isUnmounted))return f&&f(),Xt(n,a,3,[d])}:l=rn,e&&i){const v=l;l=()=>Mi(v())}let f,d=v=>{f=h.onStop=()=>{ni(v,a,4)}};if(os)return d=rn,e?t&&Xt(e,a,3,[l(),u?[]:void 0,d]):l(),rn;let p=u?[]:Cc;const g=()=>{if(!!h.active)if(e){const v=h.run();(i||c||(u?v.some((y,w)=>Qr(y,p[w])):Qr(v,p)))&&(f&&f(),Xt(e,a,3,[v,p===Cc?void 0:p,d]),p=v)}else h.run()};g.allowRecurse=!!e;let m;r==="sync"?m=g:r==="post"?m=()=>Tt(g,a&&a.suspense):m=()=>Nm(g);const h=new Pl(l,m);return e?t?g():p=h.run():r==="post"?Tt(h.run.bind(h),a&&a.suspense):h.run(),()=>{h.stop(),a&&a.scope&&Cl(a.scope.effects,h)}}function Wm(n,e,t){const i=this.proxy,r=vt(n)?n.includes(".")?Ad(i,n):()=>i[n]:n.bind(i,i);let s;Ne(e)?s=e:(s=e.handler,t=e);const o=ht;mr(this);const a=Ul(r,s.bind(i),t);return o?mr(o):Ai(),a}function Ad(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}function Mi(n,e){if(!_t(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),Qe(n))Mi(n.value,e);else if(Ie(n))for(let t=0;t<n.length;t++)Mi(n[t],e);else if(Xp(n)||qr(n))n.forEach(t=>{Mi(t,e)});else if(Kp(n))for(const t in n)Mi(n[t],e);return n}function Ld(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Tr(()=>{n.isMounted=!0}),oi(()=>{n.isUnmounting=!0}),n}const Vt=[Function,Array],$m={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Vt,onEnter:Vt,onAfterEnter:Vt,onEnterCancelled:Vt,onBeforeLeave:Vt,onLeave:Vt,onAfterLeave:Vt,onLeaveCancelled:Vt,onBeforeAppear:Vt,onAppear:Vt,onAfterAppear:Vt,onAppearCancelled:Vt},setup(n,{slots:e}){const t=Io(),i=Ld();let r;return()=>{const s=e.default&&kl(e.default(),!0);if(!s||!s.length)return;let o=s[0];if(s.length>1){for(const m of s)if(m.type!==Dn){o=m;break}}const a=He(n),{mode:l}=a;if(i.isLeaving)return Qo(o);const c=Ac(o);if(!c)return Qo(o);const u=is(c,a,i,t);rs(c,u);const f=t.subTree,d=f&&Ac(f);let p=!1;const{getTransitionKey:g}=c.type;if(g){const m=g();r===void 0?r=m:m!==r&&(r=m,p=!0)}if(d&&d.type!==Dn&&(!yi(c,d)||p)){const m=is(d,a,i,t);if(rs(d,m),l==="out-in")return i.isLeaving=!0,m.afterLeave=()=>{i.isLeaving=!1,t.update()},Qo(o);l==="in-out"&&c.type!==Dn&&(m.delayLeave=(h,v,y)=>{const w=Pd(i,d);w[String(d.key)]=d,h._leaveCb=()=>{v(),h._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=y})}return o}}},Rd=$m;function Pd(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function is(n,e,t,i){const{appear:r,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:f,onLeave:d,onAfterLeave:p,onLeaveCancelled:g,onBeforeAppear:m,onAppear:h,onAfterAppear:v,onAppearCancelled:y}=e,w=String(n.key),S=Pd(t,n),M=(_,C)=>{_&&Xt(_,i,9,C)},A=(_,C)=>{const D=C[1];M(_,C),Ie(_)?_.every(O=>O.length<=1)&&D():_.length<=1&&D()},L={mode:s,persisted:o,beforeEnter(_){let C=a;if(!t.isMounted)if(r)C=m||a;else return;_._leaveCb&&_._leaveCb(!0);const D=S[w];D&&yi(n,D)&&D.el._leaveCb&&D.el._leaveCb(),M(C,[_])},enter(_){let C=l,D=c,O=u;if(!t.isMounted)if(r)C=h||l,D=v||c,O=y||u;else return;let k=!1;const J=_._enterCb=N=>{k||(k=!0,N?M(O,[_]):M(D,[_]),L.delayedLeave&&L.delayedLeave(),_._enterCb=void 0)};C?A(C,[_,J]):J()},leave(_,C){const D=String(n.key);if(_._enterCb&&_._enterCb(!0),t.isUnmounting)return C();M(f,[_]);let O=!1;const k=_._leaveCb=J=>{O||(O=!0,C(),J?M(g,[_]):M(p,[_]),_._leaveCb=void 0,S[D]===n&&delete S[D])};S[D]=n,d?A(d,[_,k]):k()},clone(_){return is(_,e,t,i)}};return L}function Qo(n){if(Ro(n))return n=si(n),n.children=null,n}function Ac(n){return Ro(n)?n.children?n.children[0]:void 0:n}function rs(n,e){n.shapeFlag&6&&n.component?rs(n.component.subTree,e):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function kl(n,e=!1,t){let i=[],r=0;for(let s=0;s<n.length;s++){let o=n[s];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:s);o.type===Ct?(o.patchFlag&128&&r++,i=i.concat(kl(o.children,e,a))):(e||o.type!==Dn)&&i.push(a!=null?si(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function gs(n){return Ne(n)?{setup:n,name:n.name}:n}const to=n=>!!n.type.__asyncLoader,Ro=n=>n.type.__isKeepAlive;function Dd(n,e){Fd(n,"a",e)}function Id(n,e){Fd(n,"da",e)}function Fd(n,e,t=ht){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(Po(e,i,t),t){let r=t.parent;for(;r&&r.parent;)Ro(r.parent.vnode)&&qm(i,e,t,r),r=r.parent}}function qm(n,e,t,i){const r=Po(e,n,i,!0);Od(()=>{Cl(i[e],r)},t)}function Po(n,e,t=ht,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;wr(),mr(t);const a=Xt(e,t,n,o);return Ai(),Er(),a});return i?r.unshift(s):r.push(s),s}}const On=n=>(e,t=ht)=>(!os||n==="sp")&&Po(n,e,t),Vl=On("bm"),Tr=On("m"),Xm=On("bu"),Nd=On("u"),oi=On("bum"),Od=On("um"),jm=On("sp"),Ym=On("rtg"),Km=On("rtc");function Zm(n,e=ht){Po("ec",n,e)}function uo(n,e){const t=$t;if(t===null)return n;const i=Fo(t)||t.proxy,r=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[o,a,l,c=Ye]=e[s];Ne(o)&&(o={mounted:o,updated:o}),o.deep&&Mi(a),r.push({dir:o,instance:i,value:a,oldValue:void 0,arg:l,modifiers:c})}return n}function ui(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(wr(),Xt(l,t,8,[n.el,a,n,e]),Er())}}const Gl="components",Jm="directives";function zd(n,e){return Hl(Gl,n,!0,e)||n}const Bd=Symbol();function Qm(n){return vt(n)?Hl(Gl,n,!1)||n:n||Bd}function Ud(n){return Hl(Jm,n)}function Hl(n,e,t=!0,i=!1){const r=$t||ht;if(r){const s=r.type;if(n===Gl){const a=Lg(s,!1);if(a&&(a===e||a===jt(e)||a===ms(jt(e))))return s}const o=Lc(r[n]||s[n],e)||Lc(r.appContext[n],e);return!o&&i?s:o}}function Lc(n,e){return n&&(n[e]||n[jt(e)]||n[ms(jt(e))])}const ja=n=>n?Qd(n)?Fo(n)||n.proxy:ja(n.parent):null,fo=mt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>ja(n.parent),$root:n=>ja(n.root),$emit:n=>n.emit,$options:n=>Vd(n),$forceUpdate:n=>n.f||(n.f=()=>bd(n.update)),$nextTick:n=>n.n||(n.n=Co.bind(n.proxy)),$watch:n=>Wm.bind(n)}),eg={get({_:n},e){const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(i!==Ye&&ke(i,e))return o[e]=1,i[e];if(r!==Ye&&ke(r,e))return o[e]=2,r[e];if((c=n.propsOptions[0])&&ke(c,e))return o[e]=3,s[e];if(t!==Ye&&ke(t,e))return o[e]=4,t[e];Ya&&(o[e]=0)}}const u=fo[e];let f,d;if(u)return e==="$attrs"&&zt(n,"get",e),u(n);if((f=a.__cssModules)&&(f=f[e]))return f;if(t!==Ye&&ke(t,e))return o[e]=4,t[e];if(d=l.config.globalProperties,ke(d,e))return d[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return r!==Ye&&ke(r,e)?(r[e]=t,!0):i!==Ye&&ke(i,e)?(i[e]=t,!0):ke(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!t[o]||n!==Ye&&ke(n,o)||e!==Ye&&ke(e,o)||(a=s[0])&&ke(a,o)||ke(i,o)||ke(fo,o)||ke(r.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:ke(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};let Ya=!0;function tg(n){const e=Vd(n),t=n.proxy,i=n.ctx;Ya=!1,e.beforeCreate&&Rc(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:p,updated:g,activated:m,deactivated:h,beforeDestroy:v,beforeUnmount:y,destroyed:w,unmounted:S,render:M,renderTracked:A,renderTriggered:L,errorCaptured:_,serverPrefetch:C,expose:D,inheritAttrs:O,components:k,directives:J,filters:N}=e;if(c&&ng(c,i,null,n.appContext.config.unwrapInjectedRef),o)for(const j in o){const X=o[j];Ne(X)&&(i[j]=X.bind(t))}if(r){const j=r.call(t,t);_t(j)&&(n.data=It(j))}if(Ya=!0,s)for(const j in s){const X=s[j],V=Ne(X)?X.bind(t,t):Ne(X.get)?X.get.bind(t,t):rn,Y=!Ne(X)&&Ne(X.set)?X.set.bind(t):rn,fe=le({get:V,set:Y});Object.defineProperty(i,j,{enumerable:!0,configurable:!0,get:()=>fe.value,set:ie=>fe.value=ie})}if(a)for(const j in a)kd(a[j],i,t,j);if(l){const j=Ne(l)?l.call(t):l;Reflect.ownKeys(j).forEach(X=>{Ot(X,j[X])})}u&&Rc(u,n,"c");function B(j,X){Ie(X)?X.forEach(V=>j(V.bind(t))):X&&j(X.bind(t))}if(B(Vl,f),B(Tr,d),B(Xm,p),B(Nd,g),B(Dd,m),B(Id,h),B(Zm,_),B(Km,A),B(Ym,L),B(oi,y),B(Od,S),B(jm,C),Ie(D))if(D.length){const j=n.exposed||(n.exposed={});D.forEach(X=>{Object.defineProperty(j,X,{get:()=>t[X],set:V=>t[X]=V})})}else n.exposed||(n.exposed={});M&&n.render===rn&&(n.render=M),O!=null&&(n.inheritAttrs=O),k&&(n.components=k),J&&(n.directives=J)}function ng(n,e,t=rn,i=!1){Ie(n)&&(n=Ka(n));for(const r in n){const s=n[r];let o;_t(s)?"default"in s?o=it(s.from||r,s.default,!0):o=it(s.from||r):o=it(s),Qe(o)&&i?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function Rc(n,e,t){Xt(Ie(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function kd(n,e,t,i){const r=i.includes(".")?Ad(t,i):()=>t[i];if(vt(n)){const s=e[n];Ne(s)&&Mt(r,s)}else if(Ne(n))Mt(r,n.bind(t));else if(_t(n))if(Ie(n))n.forEach(s=>kd(s,e,t,i));else{const s=Ne(n.handler)?n.handler.bind(t):e[n.handler];Ne(s)&&Mt(r,s,n)}}function Vd(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>ho(l,c,o,!0)),ho(l,e,o)),s.set(e,l),l}function ho(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&ho(n,s,t,!0),r&&r.forEach(o=>ho(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=ig[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const ig={data:Pc,props:vi,emits:vi,methods:vi,computed:vi,beforeCreate:St,created:St,beforeMount:St,mounted:St,beforeUpdate:St,updated:St,beforeDestroy:St,beforeUnmount:St,destroyed:St,unmounted:St,activated:St,deactivated:St,errorCaptured:St,serverPrefetch:St,components:vi,directives:vi,watch:sg,provide:Pc,inject:rg};function Pc(n,e){return e?n?function(){return mt(Ne(n)?n.call(this,this):n,Ne(e)?e.call(this,this):e)}:e:n}function rg(n,e){return vi(Ka(n),Ka(e))}function Ka(n){if(Ie(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function St(n,e){return n?[...new Set([].concat(n,e))]:e}function vi(n,e){return n?mt(mt(Object.create(null),n),e):e}function sg(n,e){if(!n)return e;if(!e)return n;const t=mt(Object.create(null),n);for(const i in e)t[i]=St(n[i],e[i]);return t}function og(n,e,t,i=!1){const r={},s={};ao(s,Do,1),n.propsDefaults=Object.create(null),Gd(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:fd(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function ag(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=He(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(Lo(n.emitsOptions,d))continue;const p=e[d];if(l)if(ke(s,d))p!==s[d]&&(s[d]=p,c=!0);else{const g=jt(d);r[g]=Za(l,a,g,p,n,!1)}else p!==s[d]&&(s[d]=p,c=!0)}}}else{Gd(n,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!ke(e,f)&&((u=Mr(f))===f||!ke(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=Za(l,a,f,void 0,n,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!ke(e,f)&&!0)&&(delete s[f],c=!0)}c&&Fn(n,"set","$attrs")}function Gd(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(eo(l))continue;const c=e[l];let u;r&&ke(r,u=jt(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:Lo(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=He(t),c=a||Ye;for(let u=0;u<s.length;u++){const f=s[u];t[f]=Za(r,l,f,c[f],n,!ke(c,f))}}return o}function Za(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=ke(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&Ne(l)){const{propsDefaults:c}=r;t in c?i=c[t]:(mr(r),i=c[t]=l.call(null,e),Ai())}else i=l}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===Mr(t))&&(i=!0))}return i}function Hd(n,e,t=!1){const i=e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!Ne(n)){const u=f=>{l=!0;const[d,p]=Hd(f,e,!0);mt(o,d),p&&a.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return i.set(n,ur),ur;if(Ie(s))for(let u=0;u<s.length;u++){const f=jt(s[u]);Dc(f)&&(o[f]=Ye)}else if(s)for(const u in s){const f=jt(u);if(Dc(f)){const d=s[u],p=o[f]=Ie(d)||Ne(d)?{type:d}:d;if(p){const g=Nc(Boolean,p.type),m=Nc(String,p.type);p[0]=g>-1,p[1]=m<0||g<m,(g>-1||ke(p,"default"))&&a.push(f)}}}const c=[o,a];return i.set(n,c),c}function Dc(n){return n[0]!=="$"}function Ic(n){const e=n&&n.toString().match(/^\s*function (\w+)/);return e?e[1]:n===null?"null":""}function Fc(n,e){return Ic(n)===Ic(e)}function Nc(n,e){return Ie(e)?e.findIndex(t=>Fc(t,n)):Ne(e)&&Fc(e,n)?0:-1}const Wd=n=>n[0]==="_"||n==="$stable",Wl=n=>Ie(n)?n.map(pn):[pn(n)],lg=(n,e,t)=>{if(e._n)return e;const i=sr((...r)=>Wl(e(...r)),t);return i._c=!1,i},$d=(n,e,t)=>{const i=n._ctx;for(const r in n){if(Wd(r))continue;const s=n[r];if(Ne(s))e[r]=lg(r,s,i);else if(s!=null){const o=Wl(s);e[r]=()=>o}}},qd=(n,e)=>{const t=Wl(e);n.slots.default=()=>t},cg=(n,e)=>{if(n.vnode.shapeFlag&32){const t=e._;t?(n.slots=He(e),ao(e,"_",t)):$d(e,n.slots={})}else n.slots={},e&&qd(n,e);ao(n.slots,Do,1)},ug=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=Ye;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:(mt(r,e),!t&&a===1&&delete r._):(s=!e.$stable,$d(e,r)),o=e}else e&&(qd(n,e),o={default:1});if(s)for(const a in r)!Wd(a)&&!(a in o)&&delete r[a]};function Xd(){return{app:null,config:{isNativeTag:Wp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let fg=0;function dg(n,e){return function(i,r=null){Ne(i)||(i=Object.assign({},i)),r!=null&&!_t(r)&&(r=null);const s=Xd(),o=new Set;let a=!1;const l=s.app={_uid:fg++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:Pg,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&Ne(c.install)?(o.add(c),c.install(l,...u)):Ne(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,f){if(!a){const d=pe(i,r);return d.appContext=s,u&&e?e(d,c):n(d,c,f),a=!0,l._container=c,c.__vue_app__=l,Fo(d.component)||d.component.proxy}},unmount(){a&&(n(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l}};return l}}function Ja(n,e,t,i,r=!1){if(Ie(n)){n.forEach((d,p)=>Ja(d,e&&(Ie(e)?e[p]:e),t,i,r));return}if(to(i)&&!r)return;const s=i.shapeFlag&4?Fo(i.component)||i.component.proxy:i.el,o=r?null:s,{i:a,r:l}=n,c=e&&e.r,u=a.refs===Ye?a.refs={}:a.refs,f=a.setupState;if(c!=null&&c!==l&&(vt(c)?(u[c]=null,ke(f,c)&&(f[c]=null)):Qe(c)&&(c.value=null)),Ne(l))ni(l,a,12,[o,u]);else{const d=vt(l),p=Qe(l);if(d||p){const g=()=>{if(n.f){const m=d?u[l]:l.value;r?Ie(m)&&Cl(m,s):Ie(m)?m.includes(s)||m.push(s):d?(u[l]=[s],ke(f,l)&&(f[l]=u[l])):(l.value=[s],n.k&&(u[n.k]=l.value))}else d?(u[l]=o,ke(f,l)&&(f[l]=o)):p&&(l.value=o,n.k&&(u[n.k]=o))};o?(g.id=-1,Tt(g,t)):g()}}}const Tt=Hm;function hg(n){return pg(n)}function pg(n,e){const t=Qp();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:p=rn,cloneNode:g,insertStaticContent:m}=n,h=(E,R,G,te=null,ne=null,ce=null,ue=!1,de=null,me=!!R.dynamicChildren)=>{if(E===R)return;E&&!yi(E,R)&&(te=ae(E),he(E,ne,ce,!0),E=null),R.patchFlag===-2&&(me=!1,R.dynamicChildren=null);const{type:b,ref:x,shapeFlag:I}=R;switch(b){case $l:v(E,R,G,te);break;case Dn:y(E,R,G,te);break;case ea:E==null&&w(R,G,te,ue);break;case Ct:J(E,R,G,te,ne,ce,ue,de,me);break;default:I&1?A(E,R,G,te,ne,ce,ue,de,me):I&6?N(E,R,G,te,ne,ce,ue,de,me):(I&64||I&128)&&b.process(E,R,G,te,ne,ce,ue,de,me,ge)}x!=null&&ne&&Ja(x,E&&E.ref,ce,R||E,!R)},v=(E,R,G,te)=>{if(E==null)i(R.el=a(R.children),G,te);else{const ne=R.el=E.el;R.children!==E.children&&c(ne,R.children)}},y=(E,R,G,te)=>{E==null?i(R.el=l(R.children||""),G,te):R.el=E.el},w=(E,R,G,te)=>{[E.el,E.anchor]=m(E.children,R,G,te,E.el,E.anchor)},S=({el:E,anchor:R},G,te)=>{let ne;for(;E&&E!==R;)ne=d(E),i(E,G,te),E=ne;i(R,G,te)},M=({el:E,anchor:R})=>{let G;for(;E&&E!==R;)G=d(E),r(E),E=G;r(R)},A=(E,R,G,te,ne,ce,ue,de,me)=>{ue=ue||R.type==="svg",E==null?L(R,G,te,ne,ce,ue,de,me):D(E,R,ne,ce,ue,de,me)},L=(E,R,G,te,ne,ce,ue,de)=>{let me,b;const{type:x,props:I,shapeFlag:$,transition:Z,patchFlag:oe,dirs:Se}=E;if(E.el&&g!==void 0&&oe===-1)me=E.el=g(E.el);else{if(me=E.el=o(E.type,ce,I&&I.is,I),$&8?u(me,E.children):$&16&&C(E.children,me,null,te,ne,ce&&x!=="foreignObject",ue,de),Se&&ui(E,null,te,"created"),I){for(const _e in I)_e!=="value"&&!eo(_e)&&s(me,_e,null,I[_e],ce,E.children,te,ne,re);"value"in I&&s(me,"value",null,I.value),(b=I.onVnodeBeforeMount)&&dn(b,te,E)}_(me,E,E.scopeId,ue,te)}Se&&ui(E,null,te,"beforeMount");const U=(!ne||ne&&!ne.pendingBranch)&&Z&&!Z.persisted;U&&Z.beforeEnter(me),i(me,R,G),((b=I&&I.onVnodeMounted)||U||Se)&&Tt(()=>{b&&dn(b,te,E),U&&Z.enter(me),Se&&ui(E,null,te,"mounted")},ne)},_=(E,R,G,te,ne)=>{if(G&&p(E,G),te)for(let ce=0;ce<te.length;ce++)p(E,te[ce]);if(ne){let ce=ne.subTree;if(R===ce){const ue=ne.vnode;_(E,ue,ue.scopeId,ue.slotScopeIds,ne.parent)}}},C=(E,R,G,te,ne,ce,ue,de,me=0)=>{for(let b=me;b<E.length;b++){const x=E[b]=de?Qn(E[b]):pn(E[b]);h(null,x,R,G,te,ne,ce,ue,de)}},D=(E,R,G,te,ne,ce,ue)=>{const de=R.el=E.el;let{patchFlag:me,dynamicChildren:b,dirs:x}=R;me|=E.patchFlag&16;const I=E.props||Ye,$=R.props||Ye;let Z;G&&fi(G,!1),(Z=$.onVnodeBeforeUpdate)&&dn(Z,G,R,E),x&&ui(R,E,G,"beforeUpdate"),G&&fi(G,!0);const oe=ne&&R.type!=="foreignObject";if(b?O(E.dynamicChildren,b,de,G,te,oe,ce):ue||V(E,R,de,null,G,te,oe,ce,!1),me>0){if(me&16)k(de,R,I,$,G,te,ne);else if(me&2&&I.class!==$.class&&s(de,"class",null,$.class,ne),me&4&&s(de,"style",I.style,$.style,ne),me&8){const Se=R.dynamicProps;for(let U=0;U<Se.length;U++){const _e=Se[U],ye=I[_e],Le=$[_e];(Le!==ye||_e==="value")&&s(de,_e,ye,Le,ne,E.children,G,te,re)}}me&1&&E.children!==R.children&&u(de,R.children)}else!ue&&b==null&&k(de,R,I,$,G,te,ne);((Z=$.onVnodeUpdated)||x)&&Tt(()=>{Z&&dn(Z,G,R,E),x&&ui(R,E,G,"updated")},te)},O=(E,R,G,te,ne,ce,ue)=>{for(let de=0;de<R.length;de++){const me=E[de],b=R[de],x=me.el&&(me.type===Ct||!yi(me,b)||me.shapeFlag&70)?f(me.el):G;h(me,b,x,null,te,ne,ce,ue,!0)}},k=(E,R,G,te,ne,ce,ue)=>{if(G!==te){for(const de in te){if(eo(de))continue;const me=te[de],b=G[de];me!==b&&de!=="value"&&s(E,de,b,me,ue,R.children,ne,ce,re)}if(G!==Ye)for(const de in G)!eo(de)&&!(de in te)&&s(E,de,G[de],null,ue,R.children,ne,ce,re);"value"in te&&s(E,"value",G.value,te.value)}},J=(E,R,G,te,ne,ce,ue,de,me)=>{const b=R.el=E?E.el:a(""),x=R.anchor=E?E.anchor:a("");let{patchFlag:I,dynamicChildren:$,slotScopeIds:Z}=R;Z&&(de=de?de.concat(Z):Z),E==null?(i(b,G,te),i(x,G,te),C(R.children,G,x,ne,ce,ue,de,me)):I>0&&I&64&&$&&E.dynamicChildren?(O(E.dynamicChildren,$,G,ne,ce,ue,de),(R.key!=null||ne&&R===ne.subTree)&&jd(E,R,!0)):V(E,R,G,x,ne,ce,ue,de,me)},N=(E,R,G,te,ne,ce,ue,de,me)=>{R.slotScopeIds=de,E==null?R.shapeFlag&512?ne.ctx.activate(R,G,te,ue,me):ee(R,G,te,ne,ce,ue,me):B(E,R,me)},ee=(E,R,G,te,ne,ce,ue)=>{const de=E.component=wg(E,te,ne);if(Ro(E)&&(de.ctx.renderer=ge),Eg(de),de.asyncDep){if(ne&&ne.registerDep(de,j),!E.el){const me=de.subTree=pe(Dn);y(null,me,R,G)}return}j(de,E,R,G,ne,ce,ue)},B=(E,R,G)=>{const te=R.component=E.component;if(km(E,R,G))if(te.asyncDep&&!te.asyncResolved){X(te,R,G);return}else te.next=R,Fm(te.update),te.update();else R.el=E.el,te.vnode=R},j=(E,R,G,te,ne,ce,ue)=>{const de=()=>{if(E.isMounted){let{next:x,bu:I,u:$,parent:Z,vnode:oe}=E,Se=x,U;fi(E,!1),x?(x.el=oe.el,X(E,x,ue)):x=oe,I&&Zo(I),(U=x.props&&x.props.onVnodeBeforeUpdate)&&dn(U,Z,x,oe),fi(E,!0);const _e=Jo(E),ye=E.subTree;E.subTree=_e,h(ye,_e,f(ye.el),ae(ye),E,ne,ce),x.el=_e.el,Se===null&&Vm(E,_e.el),$&&Tt($,ne),(U=x.props&&x.props.onVnodeUpdated)&&Tt(()=>dn(U,Z,x,oe),ne)}else{let x;const{el:I,props:$}=R,{bm:Z,m:oe,parent:Se}=E,U=to(R);if(fi(E,!1),Z&&Zo(Z),!U&&(x=$&&$.onVnodeBeforeMount)&&dn(x,Se,R),fi(E,!0),I&&ve){const _e=()=>{E.subTree=Jo(E),ve(I,E.subTree,E,ne,null)};U?R.type.__asyncLoader().then(()=>!E.isUnmounted&&_e()):_e()}else{const _e=E.subTree=Jo(E);h(null,_e,G,te,E,ne,ce),R.el=_e.el}if(oe&&Tt(oe,ne),!U&&(x=$&&$.onVnodeMounted)){const _e=R;Tt(()=>dn(x,Se,_e),ne)}(R.shapeFlag&256||Se&&to(Se.vnode)&&Se.vnode.shapeFlag&256)&&E.a&&Tt(E.a,ne),E.isMounted=!0,R=G=te=null}},me=E.effect=new Pl(de,()=>bd(b),E.scope),b=E.update=()=>me.run();b.id=E.uid,fi(E,!0),b()},X=(E,R,G)=>{R.component=E;const te=E.vnode.props;E.vnode=R,E.next=null,ag(E,R.props,te,G),ug(E,R.children,G),wr(),Ao(void 0,E.update),Er()},V=(E,R,G,te,ne,ce,ue,de,me=!1)=>{const b=E&&E.children,x=E?E.shapeFlag:0,I=R.children,{patchFlag:$,shapeFlag:Z}=R;if($>0){if($&128){fe(b,I,G,te,ne,ce,ue,de,me);return}else if($&256){Y(b,I,G,te,ne,ce,ue,de,me);return}}Z&8?(x&16&&re(b,ne,ce),I!==b&&u(G,I)):x&16?Z&16?fe(b,I,G,te,ne,ce,ue,de,me):re(b,ne,ce,!0):(x&8&&u(G,""),Z&16&&C(I,G,te,ne,ce,ue,de,me))},Y=(E,R,G,te,ne,ce,ue,de,me)=>{E=E||ur,R=R||ur;const b=E.length,x=R.length,I=Math.min(b,x);let $;for($=0;$<I;$++){const Z=R[$]=me?Qn(R[$]):pn(R[$]);h(E[$],Z,G,null,ne,ce,ue,de,me)}b>x?re(E,ne,ce,!0,!1,I):C(R,G,te,ne,ce,ue,de,me,I)},fe=(E,R,G,te,ne,ce,ue,de,me)=>{let b=0;const x=R.length;let I=E.length-1,$=x-1;for(;b<=I&&b<=$;){const Z=E[b],oe=R[b]=me?Qn(R[b]):pn(R[b]);if(yi(Z,oe))h(Z,oe,G,null,ne,ce,ue,de,me);else break;b++}for(;b<=I&&b<=$;){const Z=E[I],oe=R[$]=me?Qn(R[$]):pn(R[$]);if(yi(Z,oe))h(Z,oe,G,null,ne,ce,ue,de,me);else break;I--,$--}if(b>I){if(b<=$){const Z=$+1,oe=Z<x?R[Z].el:te;for(;b<=$;)h(null,R[b]=me?Qn(R[b]):pn(R[b]),G,oe,ne,ce,ue,de,me),b++}}else if(b>$)for(;b<=I;)he(E[b],ne,ce,!0),b++;else{const Z=b,oe=b,Se=new Map;for(b=oe;b<=$;b++){const Ue=R[b]=me?Qn(R[b]):pn(R[b]);Ue.key!=null&&Se.set(Ue.key,b)}let U,_e=0;const ye=$-oe+1;let Le=!1,Ae=0;const Re=new Array(ye);for(b=0;b<ye;b++)Re[b]=0;for(b=Z;b<=I;b++){const Ue=E[b];if(_e>=ye){he(Ue,ne,ce,!0);continue}let P;if(Ue.key!=null)P=Se.get(Ue.key);else for(U=oe;U<=$;U++)if(Re[U-oe]===0&&yi(Ue,R[U])){P=U;break}P===void 0?he(Ue,ne,ce,!0):(Re[P-oe]=b+1,P>=Ae?Ae=P:Le=!0,h(Ue,R[P],G,null,ne,ce,ue,de,me),_e++)}const Ve=Le?mg(Re):ur;for(U=Ve.length-1,b=ye-1;b>=0;b--){const Ue=oe+b,P=R[Ue],we=Ue+1<x?R[Ue+1].el:te;Re[b]===0?h(null,P,G,we,ne,ce,ue,de,me):Le&&(U<0||b!==Ve[U]?ie(P,G,we,2):U--)}}},ie=(E,R,G,te,ne=null)=>{const{el:ce,type:ue,transition:de,children:me,shapeFlag:b}=E;if(b&6){ie(E.component.subTree,R,G,te);return}if(b&128){E.suspense.move(R,G,te);return}if(b&64){ue.move(E,R,G,ge);return}if(ue===Ct){i(ce,R,G);for(let I=0;I<me.length;I++)ie(me[I],R,G,te);i(E.anchor,R,G);return}if(ue===ea){S(E,R,G);return}if(te!==2&&b&1&&de)if(te===0)de.beforeEnter(ce),i(ce,R,G),Tt(()=>de.enter(ce),ne);else{const{leave:I,delayLeave:$,afterLeave:Z}=de,oe=()=>i(ce,R,G),Se=()=>{I(ce,()=>{oe(),Z&&Z()})};$?$(ce,oe,Se):Se()}else i(ce,R,G)},he=(E,R,G,te=!1,ne=!1)=>{const{type:ce,props:ue,ref:de,children:me,dynamicChildren:b,shapeFlag:x,patchFlag:I,dirs:$}=E;if(de!=null&&Ja(de,null,G,E,!0),x&256){R.ctx.deactivate(E);return}const Z=x&1&&$,oe=!to(E);let Se;if(oe&&(Se=ue&&ue.onVnodeBeforeUnmount)&&dn(Se,R,E),x&6)F(E.component,G,te);else{if(x&128){E.suspense.unmount(G,te);return}Z&&ui(E,null,R,"beforeUnmount"),x&64?E.type.remove(E,R,G,ne,ge,te):b&&(ce!==Ct||I>0&&I&64)?re(b,R,G,!1,!0):(ce===Ct&&I&384||!ne&&x&16)&&re(me,R,G),te&&Me(E)}(oe&&(Se=ue&&ue.onVnodeUnmounted)||Z)&&Tt(()=>{Se&&dn(Se,R,E),Z&&ui(E,null,R,"unmounted")},G)},Me=E=>{const{type:R,el:G,anchor:te,transition:ne}=E;if(R===Ct){z(G,te);return}if(R===ea){M(E);return}const ce=()=>{r(G),ne&&!ne.persisted&&ne.afterLeave&&ne.afterLeave()};if(E.shapeFlag&1&&ne&&!ne.persisted){const{leave:ue,delayLeave:de}=ne,me=()=>ue(G,ce);de?de(E.el,ce,me):me()}else ce()},z=(E,R)=>{let G;for(;E!==R;)G=d(E),r(E),E=G;r(R)},F=(E,R,G)=>{const{bum:te,scope:ne,update:ce,subTree:ue,um:de}=E;te&&Zo(te),ne.stop(),ce&&(ce.active=!1,he(ue,E,R,G)),de&&Tt(de,R),Tt(()=>{E.isUnmounted=!0},R),R&&R.pendingBranch&&!R.isUnmounted&&E.asyncDep&&!E.asyncResolved&&E.suspenseId===R.pendingId&&(R.deps--,R.deps===0&&R.resolve())},re=(E,R,G,te=!1,ne=!1,ce=0)=>{for(let ue=ce;ue<E.length;ue++)he(E[ue],R,G,te,ne)},ae=E=>E.shapeFlag&6?ae(E.component.subTree):E.shapeFlag&128?E.suspense.next():d(E.anchor||E.el),be=(E,R,G)=>{E==null?R._vnode&&he(R._vnode,null,null,!0):h(R._vnode||null,E,R,null,null,null,G),wd(),R._vnode=E},ge={p:h,um:he,m:ie,r:Me,mt:ee,mc:C,pc:V,pbc:O,n:ae,o:n};let Ce,ve;return e&&([Ce,ve]=e(ge)),{render:be,hydrate:Ce,createApp:dg(be,Ce)}}function fi({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function jd(n,e,t=!1){const i=n.children,r=e.children;if(Ie(i)&&Ie(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Qn(r[s]),a.el=o.el),t||jd(o,a))}}function mg(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<c?s=a+1:o=a;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}const gg=n=>n.__isTeleport,Ct=Symbol(void 0),$l=Symbol(void 0),Dn=Symbol(void 0),ea=Symbol(void 0),Yr=[];let nn=null;function ql(n=!1){Yr.push(nn=n?null:[])}function vg(){Yr.pop(),nn=Yr[Yr.length-1]||null}let ss=1;function Oc(n){ss+=n}function Yd(n){return n.dynamicChildren=ss>0?nn||ur:null,vg(),ss>0&&nn&&nn.push(n),n}function _g(n,e,t,i,r,s){return Yd(Jd(n,e,t,i,r,s,!0))}function Kd(n,e,t,i,r){return Yd(pe(n,e,t,i,r,!0))}function Qa(n){return n?n.__v_isVNode===!0:!1}function yi(n,e){return n.type===e.type&&n.key===e.key}const Do="__vInternal",Zd=({key:n})=>n!=null?n:null,no=({ref:n,ref_key:e,ref_for:t})=>n!=null?vt(n)||Qe(n)||Ne(n)?{i:$t,r:n,k:e,f:!!t}:n:null;function Jd(n,e=null,t=null,i=0,r=null,s=n===Ct?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Zd(e),ref:e&&no(e),scopeId:Cd,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null};return a?(Xl(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=vt(t)?8:16),ss>0&&!o&&nn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&nn.push(l),l}const pe=xg;function xg(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===Bd)&&(n=Dn),Qa(n)){const a=si(n,e,!0);return t&&Xl(a,t),ss>0&&!s&&nn&&(a.shapeFlag&6?nn[nn.indexOf(n)]=a:nn.push(a)),a.patchFlag|=-2,a}if(Rg(n)&&(n=n.__vccOpts),e){e=yg(e);let{class:a,style:l}=e;a&&!vt(a)&&(e.class=El(a)),_t(l)&&(dd(l)&&!Ie(l)&&(l=mt({},l)),e.style=wl(l))}const o=vt(n)?1:Gm(n)?128:gg(n)?64:_t(n)?4:Ne(n)?2:0;return Jd(n,e,t,i,r,o,s,!0)}function yg(n){return n?dd(n)||Do in n?mt({},n):n:null}function si(n,e,t=!1){const{props:i,ref:r,patchFlag:s,children:o}=n,a=e?pr(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:a,key:a&&Zd(a),ref:e&&e.ref?t&&r?Ie(r)?r.concat(no(e)):[r,no(e)]:no(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Ct?s===-1?16:s|16:s,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&si(n.ssContent),ssFallback:n.ssFallback&&si(n.ssFallback),el:n.el,anchor:n.anchor}}function bg(n=" ",e=0){return pe($l,null,n,e)}function pn(n){return n==null||typeof n=="boolean"?pe(Dn):Ie(n)?pe(Ct,null,n.slice()):typeof n=="object"?Qn(n):pe($l,null,String(n))}function Qn(n){return n.el===null||n.memo?n:si(n)}function Xl(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Ie(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Xl(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!(Do in e)?e._ctx=$t:r===3&&$t&&($t.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Ne(e)?(e={default:e,_ctx:$t},t=32):(e=String(e),i&64?(t=16,e=[bg(e)]):t=8);n.children=e,n.shapeFlag|=t}function pr(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=El([e.class,i.class]));else if(r==="style")e.style=wl([e.style,i.style]);else if(bo(r)){const s=e[r],o=i[r];o&&s!==o&&!(Ie(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function dn(n,e,t,i=null){Xt(n,e,7,[t,i])}const Sg=Xd();let Mg=0;function wg(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||Sg,s={uid:Mg++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new ed(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Hd(i,r),emitsOptions:Td(i,r),emit:null,emitted:null,propsDefaults:Ye,inheritAttrs:i.inheritAttrs,ctx:Ye,data:Ye,props:Ye,attrs:Ye,slots:Ye,refs:Ye,setupState:Ye,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=zm.bind(null,s),n.ce&&n.ce(s),s}let ht=null;const Io=()=>ht||$t,mr=n=>{ht=n,n.scope.on()},Ai=()=>{ht&&ht.scope.off(),ht=null};function Qd(n){return n.vnode.shapeFlag&4}let os=!1;function Eg(n,e=!1){os=e;const{props:t,children:i}=n.vnode,r=Qd(n);og(n,t,r,e),cg(n,i);const s=r?Tg(n,e):void 0;return os=!1,s}function Tg(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=hd(new Proxy(n.ctx,eg));const{setup:i}=t;if(i){const r=n.setupContext=i.length>1?Ag(n):null;mr(n),wr();const s=ni(i,n,0,[n.props,r]);if(Er(),Ai(),Jf(s)){if(s.then(Ai,Ai),e)return s.then(o=>{zc(n,o,e)}).catch(o=>{To(o,n,0)});n.asyncDep=s}else zc(n,s,e)}else eh(n,e)}function zc(n,e,t){Ne(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:_t(e)&&(n.setupState=_d(e)),eh(n,t)}let Bc;function eh(n,e,t){const i=n.type;if(!n.render){if(!e&&Bc&&!i.render){const r=i.template;if(r){const{isCustomElement:s,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:l}=i,c=mt(mt({isCustomElement:s,delimiters:a},o),l);i.render=Bc(r,c)}}n.render=i.render||rn}mr(n),wr(),tg(n),Er(),Ai()}function Cg(n){return new Proxy(n.attrs,{get(e,t){return zt(n,"get","$attrs"),e[t]}})}function Ag(n){const e=i=>{n.exposed=i||{}};let t;return{get attrs(){return t||(t=Cg(n))},slots:n.slots,emit:n.emit,expose:e}}function Fo(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(_d(hd(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in fo)return fo[t](n)}}))}function Lg(n,e=!0){return Ne(n)?n.displayName||n.name:n.name||e&&n.__name}function Rg(n){return Ne(n)&&"__vccOpts"in n}const le=(n,e)=>Pm(n,e,os);function zn(n,e,t){const i=arguments.length;return i===2?_t(e)&&!Ie(e)?Qa(e)?pe(n,null,[e]):pe(n,e):pe(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&Qa(t)&&(t=[t]),pe(n,e,t))}const Pg="3.2.37",Dg="http://www.w3.org/2000/svg",bi=typeof document<"u"?document:null,Uc=bi&&bi.createElement("template"),Ig={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e?bi.createElementNS(Dg,n):bi.createElement(n,t?{is:t}:void 0);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>bi.createTextNode(n),createComment:n=>bi.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>bi.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},cloneNode(n){const e=n.cloneNode(!0);return"_value"in n&&(e._value=n._value),e},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Uc.innerHTML=i?`<svg>${n}</svg>`:n;const a=Uc.content;if(i){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function Fg(n,e,t){const i=n._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}function Ng(n,e,t){const i=n.style,r=vt(t);if(t&&!r){for(const s in t)el(i,s,t[s]);if(e&&!vt(e))for(const s in e)t[s]==null&&el(i,s,"")}else{const s=i.display;r?e!==t&&(i.cssText=t):e&&n.removeAttribute("style"),"_vod"in n&&(i.display=s)}}const kc=/\s*!important$/;function el(n,e,t){if(Ie(t))t.forEach(i=>el(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Og(n,e);kc.test(t)?n.setProperty(Mr(i),t.replace(kc,""),"important"):n[i]=t}}const Vc=["Webkit","Moz","ms"],ta={};function Og(n,e){const t=ta[e];if(t)return t;let i=jt(e);if(i!=="filter"&&i in n)return ta[e]=i;i=ms(i);for(let r=0;r<Vc.length;r++){const s=Vc[r]+i;if(s in n)return ta[e]=s}return e}const Gc="http://www.w3.org/1999/xlink";function zg(n,e,t,i,r){if(i&&e.startsWith("xlink:"))t==null?n.removeAttributeNS(Gc,e.slice(6,e.length)):n.setAttributeNS(Gc,e,t);else{const s=kp(e);t==null||s&&!Zf(t)?n.removeAttribute(e):n.setAttribute(e,s?"":t)}}function Bg(n,e,t,i,r,s,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,r,s),n[e]=t==null?"":t;return}if(e==="value"&&n.tagName!=="PROGRESS"&&!n.tagName.includes("-")){n._value=t;const l=t==null?"":t;(n.value!==l||n.tagName==="OPTION")&&(n.value=l),t==null&&n.removeAttribute(e);return}let a=!1;if(t===""||t==null){const l=typeof n[e];l==="boolean"?t=Zf(t):t==null&&l==="string"?(t="",a=!0):l==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(e)}const[th,Ug]=(()=>{let n=Date.now,e=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(n=performance.now.bind(performance));const t=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(t&&Number(t[1])<=53)}return[n,e]})();let tl=0;const kg=Promise.resolve(),Vg=()=>{tl=0},Gg=()=>tl||(kg.then(Vg),tl=th());function Hg(n,e,t,i){n.addEventListener(e,t,i)}function Wg(n,e,t,i){n.removeEventListener(e,t,i)}function $g(n,e,t,i,r=null){const s=n._vei||(n._vei={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=qg(e);if(i){const c=s[e]=Xg(i,r);Hg(n,a,c,l)}else o&&(Wg(n,a,o,l),s[e]=void 0)}}const Hc=/(?:Once|Passive|Capture)$/;function qg(n){let e;if(Hc.test(n)){e={};let t;for(;t=n.match(Hc);)n=n.slice(0,n.length-t[0].length),e[t[0].toLowerCase()]=!0}return[Mr(n.slice(2)),e]}function Xg(n,e){const t=i=>{const r=i.timeStamp||th();(Ug||r>=t.attached-1)&&Xt(jg(i,t.value),e,5,[i])};return t.value=n,t.attached=Gg(),t}function jg(n,e){if(Ie(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Wc=/^on[a-z]/,Yg=(n,e,t,i,r=!1,s,o,a,l)=>{e==="class"?Fg(n,i,r):e==="style"?Ng(n,t,i):bo(e)?Tl(e)||$g(n,e,t,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Kg(n,e,i,r))?Bg(n,e,i,s,o,a,l):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),zg(n,e,i,r))};function Kg(n,e,t,i){return i?!!(e==="innerHTML"||e==="textContent"||e in n&&Wc.test(e)&&Ne(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA"||Wc.test(e)&&vt(t)?!1:e in n}const Vn="transition",Fr="animation",Cr=(n,{slots:e})=>zn(Rd,ih(n),e);Cr.displayName="Transition";const nh={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Zg=Cr.props=mt({},Rd.props,nh),di=(n,e=[])=>{Ie(n)?n.forEach(t=>t(...e)):n&&n(...e)},$c=n=>n?Ie(n)?n.some(e=>e.length>1):n.length>1:!1;function ih(n){const e={};for(const k in n)k in nh||(e[k]=n[k]);if(n.css===!1)return e;const{name:t="v",type:i,duration:r,enterFromClass:s=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:f=`${t}-leave-from`,leaveActiveClass:d=`${t}-leave-active`,leaveToClass:p=`${t}-leave-to`}=n,g=Jg(r),m=g&&g[0],h=g&&g[1],{onBeforeEnter:v,onEnter:y,onEnterCancelled:w,onLeave:S,onLeaveCancelled:M,onBeforeAppear:A=v,onAppear:L=y,onAppearCancelled:_=w}=e,C=(k,J,N)=>{Jn(k,J?u:a),Jn(k,J?c:o),N&&N()},D=(k,J)=>{k._isLeaving=!1,Jn(k,f),Jn(k,p),Jn(k,d),J&&J()},O=k=>(J,N)=>{const ee=k?L:y,B=()=>C(J,k,N);di(ee,[J,B]),qc(()=>{Jn(J,k?l:s),Tn(J,k?u:a),$c(ee)||Xc(J,i,m,B)})};return mt(e,{onBeforeEnter(k){di(v,[k]),Tn(k,s),Tn(k,o)},onBeforeAppear(k){di(A,[k]),Tn(k,l),Tn(k,c)},onEnter:O(!1),onAppear:O(!0),onLeave(k,J){k._isLeaving=!0;const N=()=>D(k,J);Tn(k,f),sh(),Tn(k,d),qc(()=>{!k._isLeaving||(Jn(k,f),Tn(k,p),$c(S)||Xc(k,i,h,N))}),di(S,[k,N])},onEnterCancelled(k){C(k,!1),di(w,[k])},onAppearCancelled(k){C(k,!0),di(_,[k])},onLeaveCancelled(k){D(k),di(M,[k])}})}function Jg(n){if(n==null)return null;if(_t(n))return[na(n.enter),na(n.leave)];{const e=na(n);return[e,e]}}function na(n){return Qf(n)}function Tn(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n._vtc||(n._vtc=new Set)).add(e)}function Jn(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const{_vtc:t}=n;t&&(t.delete(e),t.size||(n._vtc=void 0))}function qc(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let Qg=0;function Xc(n,e,t,i){const r=n._endId=++Qg,s=()=>{r===n._endId&&i()};if(t)return setTimeout(s,t);const{type:o,timeout:a,propCount:l}=rh(n,e);if(!o)return i();const c=o+"end";let u=0;const f=()=>{n.removeEventListener(c,d),s()},d=p=>{p.target===n&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},a+1),n.addEventListener(c,d)}function rh(n,e){const t=window.getComputedStyle(n),i=g=>(t[g]||"").split(", "),r=i(Vn+"Delay"),s=i(Vn+"Duration"),o=jc(r,s),a=i(Fr+"Delay"),l=i(Fr+"Duration"),c=jc(a,l);let u=null,f=0,d=0;e===Vn?o>0&&(u=Vn,f=o,d=s.length):e===Fr?c>0&&(u=Fr,f=c,d=l.length):(f=Math.max(o,c),u=f>0?o>c?Vn:Fr:null,d=u?u===Vn?s.length:l.length:0);const p=u===Vn&&/\b(transform|all)(,|$)/.test(t[Vn+"Property"]);return{type:u,timeout:f,propCount:d,hasTransform:p}}function jc(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>Yc(t)+Yc(n[i])))}function Yc(n){return Number(n.slice(0,-1).replace(",","."))*1e3}function sh(){return document.body.offsetHeight}const oh=new WeakMap,ah=new WeakMap,ev={name:"TransitionGroup",props:mt({},Zg,{tag:String,moveClass:String}),setup(n,{slots:e}){const t=Io(),i=Ld();let r,s;return Nd(()=>{if(!r.length)return;const o=n.moveClass||`${n.name||"v"}-move`;if(!sv(r[0].el,t.vnode.el,o))return;r.forEach(nv),r.forEach(iv);const a=r.filter(rv);sh(),a.forEach(l=>{const c=l.el,u=c.style;Tn(c,o),u.transform=u.webkitTransform=u.transitionDuration="";const f=c._moveCb=d=>{d&&d.target!==c||(!d||/transform$/.test(d.propertyName))&&(c.removeEventListener("transitionend",f),c._moveCb=null,Jn(c,o))};c.addEventListener("transitionend",f)})}),()=>{const o=He(n),a=ih(o);let l=o.tag||Ct;r=s,s=e.default?kl(e.default()):[];for(let c=0;c<s.length;c++){const u=s[c];u.key!=null&&rs(u,is(u,a,i,t))}if(r)for(let c=0;c<r.length;c++){const u=r[c];rs(u,is(u,a,i,t)),oh.set(u,u.el.getBoundingClientRect())}return pe(l,null,s)}}},tv=ev;function nv(n){const e=n.el;e._moveCb&&e._moveCb(),e._enterCb&&e._enterCb()}function iv(n){ah.set(n,n.el.getBoundingClientRect())}function rv(n){const e=oh.get(n),t=ah.get(n),i=e.left-t.left,r=e.top-t.top;if(i||r){const s=n.el.style;return s.transform=s.webkitTransform=`translate(${i}px,${r}px)`,s.transitionDuration="0s",n}}function sv(n,e,t){const i=n.cloneNode();n._vtc&&n._vtc.forEach(o=>{o.split(/\s+/).forEach(a=>a&&i.classList.remove(a))}),t.split(/\s+/).forEach(o=>o&&i.classList.add(o)),i.style.display="none";const r=e.nodeType===1?e:e.parentNode;r.appendChild(i);const{hasTransform:s}=rh(i);return r.removeChild(i),s}const lh={beforeMount(n,{value:e},{transition:t}){n._vod=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):Nr(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:i}){!e!=!t&&(i?e?(i.beforeEnter(n),Nr(n,!0),i.enter(n)):i.leave(n,()=>{Nr(n,!1)}):Nr(n,e))},beforeUnmount(n,{value:e}){Nr(n,e)}};function Nr(n,e){n.style.display=e?n._vod:"none"}const ov=mt({patchProp:Yg},Ig);let Kc;function av(){return Kc||(Kc=hg(ov))}const lv=(...n)=>{const e=av().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=cv(i);if(!r)return;const s=e._component;!Ne(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const o=t(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function cv(n){return vt(n)?document.querySelector(n):n}const uv="/assets/icon.0ae8a43c.svg",jl=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t};const an=typeof window<"u",ch=an&&"IntersectionObserver"in window,fv=an&&("ontouchstart"in window||window.navigator.maxTouchPoints>0);an&&CSS.supports("selector(:focus-visible)");function dv(n){const e=De(),t=De();if(an){const i=new ResizeObserver(r=>{n==null||n(r,i),r.length&&(t.value=r[0].contentRect)});oi(()=>{i.disconnect()}),Mt(e,(r,s)=>{s&&(i.unobserve(s),t.value=void 0),r&&i.observe(r)},{flush:"post"})}return{resizeRef:e,contentRect:Eo(t)}}function Zc(n,e,t){hv(n,e),e.set(n,t)}function hv(n,e){if(e.has(n))throw new TypeError("Cannot initialize the same private elements twice on an object")}function pv(n,e,t){var i=uh(n,e,"set");return mv(n,i,t),t}function mv(n,e,t){if(e.set)e.set.call(n,t);else{if(!e.writable)throw new TypeError("attempted to set read only private field");e.value=t}}function hi(n,e){var t=uh(n,e,"get");return gv(n,t)}function uh(n,e,t){if(!e.has(n))throw new TypeError("attempted to "+t+" private field on non-instance");return e.get(n)}function gv(n,e){return e.get?e.get.call(n):e.value}function fh(n,e,t){const i=e.length-1;if(i<0)return n===void 0?t:n;for(let r=0;r<i;r++){if(n==null)return t;n=n[e[r]]}return n==null||n[e[i]]===void 0?t:n[e[i]]}function nl(n,e,t){return n==null||!e||typeof e!="string"?t:n[e]!==void 0?n[e]:(e=e.replace(/\[(\w+)\]/g,".$1"),e=e.replace(/^\./,""),fh(n,e.split("."),t))}function Or(n,e,t){if(e==null)return n===void 0?t:n;if(n!==Object(n))return t;if(typeof e=="string")return nl(n,e,t);if(Array.isArray(e))return fh(n,e,t);if(typeof e!="function")return t;const i=e(n,t);return typeof i>"u"?t:i}function vv(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return Array.from({length:n},(t,i)=>e+i)}function Je(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"px";if(!(n==null||n===""))return isNaN(+n)?String(n):isFinite(+n)?`${Number(n)}${e}`:void 0}function il(n){return n!==null&&typeof n=="object"&&!Array.isArray(n)}const Jc=Object.freeze({enter:13,tab:9,delete:46,esc:27,space:32,up:38,down:40,left:37,right:39,end:35,home:36,del:46,backspace:8,insert:45,pageup:33,pagedown:34,shift:16});Object.freeze({enter:"Enter",tab:"Tab",delete:"Delete",esc:"Escape",space:"Space",up:"ArrowUp",down:"ArrowDown",left:"ArrowLeft",right:"ArrowRight",end:"End",home:"Home",del:"Delete",backspace:"Backspace",insert:"Insert",pageup:"PageUp",pagedown:"PageDown",shift:"Shift"});function dh(n,e){const t=Object.create(null),i=Object.create(null);for(const r in n)e.some(s=>s instanceof RegExp?s.test(r):s===r)?t[r]=n[r]:i[r]=n[r];return[t,i]}function _v(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1;return Math.max(e,Math.min(t,n))}function Nn(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=arguments.length>2?arguments[2]:void 0;const i={};for(const r in n)i[r]=n[r];for(const r in e){const s=n[r],o=e[r];if(il(s)&&il(o)){i[r]=Nn(s,o,t);continue}if(Array.isArray(s)&&Array.isArray(o)&&t){i[r]=t(s,o);continue}i[r]=o}return i}function hh(n){return n.map(e=>e.type===Ct?hh(e.children):e).flat()}function Yl(){return(arguments.length>0&&arguments[0]!==void 0?arguments[0]:"").replace(/[^a-z]/gi,"-").replace(/\B([A-Z])/g,"-$1").toLowerCase()}function io(n,e){if(!e||typeof e!="object")return[];if(Array.isArray(e))return e.map(t=>io(n,t)).flat(1);if(Array.isArray(e.children))return e.children.map(t=>io(n,t)).flat(1);if(e.component){if(Object.getOwnPropertySymbols(e.component.provides).includes(n))return[e.component];if(e.component.subTree)return io(n,e.component.subTree).flat(1)}return[]}var As=new WeakMap,Bi=new WeakMap;class xv{constructor(e){Zc(this,As,{writable:!0,value:[]}),Zc(this,Bi,{writable:!0,value:0}),this.size=e}push(e){hi(this,As)[hi(this,Bi)]=e,pv(this,Bi,(hi(this,Bi)+1)%this.size)}values(){return hi(this,As).slice(hi(this,Bi)).concat(hi(this,As).slice(0,hi(this,Bi)))}}function ph(n){const e={},t=le(n);for(const i in t.value)e[i]=lt(t.value,i);return Mt(t,i=>{for(const r in i)e[r].value=i[r]},{flush:"sync"}),e}function yv(n,e){return n.includes(e)}function bv(n,e){return n==="start"?e?"right":"left":n==="end"?e?"left":"right":n}function mh(n,e,t){if(t&&(e={_isVue:!0,$parent:t,$options:e}),e){if(e.$_alreadyWarned=e.$_alreadyWarned||[],e.$_alreadyWarned.includes(n))return;e.$_alreadyWarned.push(n)}return`[Vuetify] ${n}`+(e?wv(e):"")}function Kr(n,e,t){const i=mh(n,e,t);i!=null&&console.warn(i)}function Qc(n,e,t){const i=mh(n,e,t);i!=null&&console.error(i)}const Sv=/(?:^|[-_])(\w)/g,Mv=n=>n.replace(Sv,e=>e.toUpperCase()).replace(/[-_]/g,"");function ia(n,e){if(n.$root===n)return"<Root>";const t=typeof n=="function"&&n.cid!=null?n.options:n._isVue?n.$options||n.constructor.options:n||{};let i=t.name||t._componentTag;const r=t.__file;if(!i&&r){const s=r.match(/([^/\\]+)\.vue$/);i=s==null?void 0:s[1]}return(i?`<${Mv(i)}>`:"<Anonymous>")+(r&&e!==!1?` at ${r}`:"")}function wv(n){if(n._isVue&&n.$parent){const e=[];let t=0;for(;n;){if(e.length>0){const i=e[e.length-1];if(i.constructor===n.constructor){t++,n=n.$parent;continue}else t>0&&(e[e.length-1]=[i,t],t=0)}e.push(n),n=n.$parent}return`

found in

`+e.map((i,r)=>`${r===0?"---> ":" ".repeat(5+r*2)}${Array.isArray(i)?`${ia(i[0])}... (${i[1]} recursive calls)`:ia(i)}`).join(`
`)}else return`

(found in ${ia(n)})`}const Ev=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]],Tv=n=>n<=.0031308?n*12.92:1.055*n**(1/2.4)-.055,Cv=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],Av=n=>n<=.04045?n/12.92:((n+.055)/1.055)**2.4;function gh(n){const e=Array(3),t=Tv,i=Ev;for(let r=0;r<3;++r)e[r]=Math.round(_v(t(i[r][0]*n[0]+i[r][1]*n[1]+i[r][2]*n[2]))*255);return(e[0]<<16)+(e[1]<<8)+(e[2]<<0)}function Kl(n){const e=[0,0,0],t=Av,i=Cv,r=t((n>>16&255)/255),s=t((n>>8&255)/255),o=t((n>>0&255)/255);for(let a=0;a<3;++a)e[a]=i[a][0]*r+i[a][1]*s+i[a][2]*o;return e}const po=.20689655172413793,Lv=n=>n>po**3?Math.cbrt(n):n/(3*po**2)+4/29,Rv=n=>n>po?n**3:3*po**2*(n-4/29);function vh(n){const e=Lv,t=e(n[1]);return[116*t-16,500*(e(n[0]/.95047)-t),200*(t-e(n[2]/1.08883))]}function _h(n){const e=Rv,t=(n[0]+16)/116;return[e(t+n[1]/500)*.95047,e(t),e(t-n[2]/200)*1.08883]}function eu(n){return!!n&&/^(#|var\(--|(rgb|hsl)a?\()/.test(n)}function mo(n){let e;if(typeof n=="number")e=n;else if(typeof n=="string"){let t=n.startsWith("#")?n.substring(1):n;t.length===3&&(t=t.split("").map(i=>i+i).join("")),t.length!==6&&t.length!==8&&Kr(`'${n}' is not a valid rgb color`),e=parseInt(t,16)}else throw new TypeError(`Colors can only be numbers or strings, recieved ${n==null?n:n.constructor.name} instead`);return e<0?(Kr(`Colors cannot be negative: '${n}'`),e=0):(e>4294967295||isNaN(e))&&(Kr(`'${n}' is not a valid rgb color`),e=16777215),e}function Pv(n){let e=n.toString(16);return e.length<6&&(e="0".repeat(6-e.length)+e),"#"+e}function xh(n){const e=mo(n);return{r:(e&16711680)>>16,g:(e&65280)>>8,b:e&255}}function Dv(n,e){const t=vh(Kl(n));return t[0]=t[0]+e*10,gh(_h(t))}function Iv(n,e){const t=vh(Kl(n));return t[0]=t[0]-e*10,gh(_h(t))}function Fv(n){const e=mo(n);return Kl(e)[1]}function xn(n,e){const t=Io();if(!t)throw new Error(`[Vuetify] ${n} ${e||"must be called from inside a setup function"}`);return t}function vs(){var n;let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"composables";return Yl((n=xn(e).type)==null?void 0:n.name)}let yh=0,ro=new WeakMap;function No(){const n=xn("getUid");if(ro.has(n))return ro.get(n);{const e=yh++;return ro.set(n,e),e}}No.reset=()=>{yh=0,ro=new WeakMap};function Nv(n){const{provides:e}=xn("injectSelf");if(e&&n in e)return e[n]}const as=Symbol.for("vuetify:defaults");function Ov(n){return De(n!=null?n:{})}function bh(){const n=it(as);if(!n)throw new Error("[Vuetify] Could not find defaults instance");return n}function Oo(n,e){const t=bh(),i=De(n),r=le(()=>{const s=sn(e==null?void 0:e.scoped),o=sn(e==null?void 0:e.reset),a=sn(e==null?void 0:e.root);let l=Nn(i.value,{prev:t.value});if(s)return l;if(o||a){const c=Number(o||1/0);for(let u=0;u<=c&&l.prev;u++)l=l.prev;return l}return Nn(l.prev,l)});return Ot(as,r),r}function zv(n,e){var t,i;return((t=n.props)==null?void 0:t.hasOwnProperty(e))||((i=n.props)==null?void 0:i.hasOwnProperty(Yl(e)))}const ct=function(e){var t;if(e._setup=(t=e._setup)!=null?t:e.setup,!e.name)return Kr("The component is missing an explicit name, unable to generate default prop value"),e;if(e._setup){var i;e.props=(i=e.props)!=null?i:{},e.props._as=String,e.setup=function(s,o){const a=Io(),l=bh(),c=gd(),u=fd({...He(s)});Bl(()=>{var p;const g=l.value.global,m=l.value[(p=s._as)!=null?p:e.name];if(m){const y=Object.entries(m).filter(w=>{let[S]=w;return S.startsWith("V")});y.length&&(c.value=Object.fromEntries(y))}for(const y of Object.keys(s)){let w;if(zv(a.vnode,y))w=s[y];else{var h,v;w=(h=(v=m==null?void 0:m[y])!=null?v:g==null?void 0:g[y])!=null?h:s[y]}u[y]!==w&&(u[y]=w)}});const f=e._setup(u,o);let d;return Mt(c,(p,g)=>{!p&&d?d.stop():p&&!g&&(d=em(),d.run(()=>{var m,h;Oo(Nn((m=(h=Nv(as))==null?void 0:h.value)!=null?m:{},p))}))},{immediate:!0}),f}}return e};function zo(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return e=>(n?ct:gs)(e)}function Sh(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",t=arguments.length>2?arguments[2]:void 0;return ct({name:t!=null?t:ms(jt(n.replace(/__/g,"-"))),props:{tag:{type:String,default:e}},setup(i,r){let{slots:s}=r;return()=>{var o;return zn(i.tag,{class:n},(o=s.default)==null?void 0:o.call(s))}}})}function ut(n,e){return t=>Object.keys(n).reduce((i,r)=>{const o=typeof n[r]=="object"&&n[r]!=null&&!Array.isArray(n[r])?n[r]:{type:n[r]};return t&&r in t?i[r]={...o,default:t[r]}:i[r]=o,e&&(i[r].source=e),i},{})}function Yt(n){const e=xn("useRender");e.render=n}const go=Symbol.for("vuetify:layout"),Mh=Symbol.for("vuetify:layout-item"),tu=1e3,Bv=ut({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),Uv=ut({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function kv(){const n=it(go);if(!n)throw new Error("Could not find injected Vuetify layout");return n}function Vv(n){var e;const t=it(go);if(!t)throw new Error("Could not find injected Vuetify layout");const i=(e=n.id)!=null?e:`layout-item-${No()}`,r=xn("useLayoutItem");Ot(Mh,{id:i});const s=De(!1);Id(()=>s.value=!0),Dd(()=>s.value=!1);const{layoutItemStyles:o,layoutItemScrimStyles:a}=t.register(r,{...n,active:le(()=>s.value?!1:n.active.value),id:i});return oi(()=>t.unregister(i)),{layoutItemStyles:o,layoutRect:t.layoutRect,layoutItemScrimStyles:a}}const Gv=(n,e,t,i)=>{let r={top:0,left:0,right:0,bottom:0};const s=[{id:"",layer:{...r}}];for(const o of n){const a=e.get(o),l=t.get(o),c=i.get(o);if(!a||!l||!c)continue;const u={...r,[a.value]:parseInt(r[a.value],10)+(c.value?parseInt(l.value,10):0)};s.push({id:o,layer:u}),r=u}return s};function Hv(n){const e=it(go,null),t=le(()=>e?e.rootZIndex.value-100:tu),i=De([]),r=It(new Map),s=It(new Map),o=It(new Map),a=It(new Map),l=It(new Map),{resizeRef:c,contentRect:u}=dv(),f=le(()=>{var M;const A=new Map,L=(M=n.overlaps)!=null?M:[];for(const _ of L.filter(C=>C.includes(":"))){const[C,D]=_.split(":");if(!i.value.includes(C)||!i.value.includes(D))continue;const O=r.get(C),k=r.get(D),J=s.get(C),N=s.get(D);!O||!k||!J||!N||(A.set(D,{position:O.value,amount:parseInt(J.value,10)}),A.set(C,{position:k.value,amount:-parseInt(N.value,10)}))}return A}),d=le(()=>{const M=[...new Set([...o.values()].map(L=>L.value))].sort((L,_)=>L-_),A=[];for(const L of M){const _=i.value.filter(C=>{var D;return((D=o.get(C))==null?void 0:D.value)===L});A.push(..._)}return Gv(A,r,s,a)}),p=le(()=>!Array.from(l.values()).some(M=>M.value)),g=le(()=>{const M=d.value[d.value.length-1].layer;return{"--v-layout-left":Je(M.left),"--v-layout-right":Je(M.right),"--v-layout-top":Je(M.top),"--v-layout-bottom":Je(M.bottom),...p.value?void 0:{transition:"none"}}}),m=le(()=>d.value.slice(1).map((M,A)=>{let{id:L}=M;const{layer:_}=d.value[A],C=s.get(L);return{id:L,..._,size:Number(C.value)}})),h=M=>m.value.find(A=>A.id===M),v=xn("createLayout"),y=De(!1);Tr(()=>{y.value=!0}),Ot(go,{register:(M,A)=>{let{id:L,order:_,position:C,layoutSize:D,elementSize:O,active:k,disableTransitions:J,absolute:N}=A;o.set(L,_),r.set(L,C),s.set(L,D),a.set(L,k),J&&l.set(L,J);const B=io(Mh,v==null?void 0:v.vnode).indexOf(M);B>-1?i.value.splice(B,0,L):i.value.push(L);const j=le(()=>m.value.findIndex(fe=>fe.id===L)),X=le(()=>t.value+d.value.length*2-j.value*2),V=le(()=>{const fe=C.value==="left"||C.value==="right",ie=C.value==="right",he=C.value==="bottom",Me={[C.value]:0,zIndex:X.value,transform:`translate${fe?"X":"Y"}(${(k.value?0:-110)*(ie||he?-1:1)}%)`,position:N.value||t.value!==tu?"absolute":"fixed",...p.value?void 0:{transition:"none"}};if(!y.value)return Me;if(j.value<0)throw new Error(`Layout item "${L}" is missing`);const z=m.value[j.value];if(!z)throw new Error(`Could not find layout item "${L}`);const F=f.value.get(L);return F&&(z[F.position]+=F.amount),{...Me,height:fe?`calc(100% - ${z.top}px - ${z.bottom}px)`:O.value?`${O.value}px`:void 0,left:ie?void 0:`${z.left}px`,right:ie?`${z.right}px`:void 0,top:C.value!=="bottom"?`${z.top}px`:void 0,bottom:C.value!=="top"?`${z.bottom}px`:void 0,width:fe?O.value?`${O.value}px`:void 0:`calc(100% - ${z.left}px - ${z.right}px)`}}),Y=le(()=>({zIndex:X.value-1}));return{layoutItemStyles:V,layoutItemScrimStyles:Y,zIndex:X}},unregister:M=>{o.delete(M),r.delete(M),s.delete(M),a.delete(M),l.delete(M),i.value=i.value.filter(A=>A!==M)},mainStyles:g,getLayoutItem:h,items:m,layoutRect:u,rootZIndex:t});const w=le(()=>["v-layout",{"v-layout--full-height":n.fullHeight}]),S=le(()=>({zIndex:t.value,position:e?"relative":void 0,overflow:e?"hidden":void 0}));return{layoutClasses:w,layoutStyles:S,getLayoutItem:h,items:m,layoutRect:u,layoutRef:c}}const Ui=2.4,nu=.2126729,iu=.7151522,ru=.072175,Wv=.55,$v=.58,qv=.57,Xv=.62,Ls=.03,su=1.45,jv=5e-4,Yv=1.25,Kv=1.25,ou=.078,au=12.82051282051282,Rs=.06,lu=.001;function cu(n,e){const t=((n>>16&255)/255)**Ui,i=((n>>8&255)/255)**Ui,r=((n>>0&255)/255)**Ui,s=((e>>16&255)/255)**Ui,o=((e>>8&255)/255)**Ui,a=((e>>0&255)/255)**Ui;let l=t*nu+i*iu+r*ru,c=s*nu+o*iu+a*ru;if(l<=Ls&&(l+=(Ls-l)**su),c<=Ls&&(c+=(Ls-c)**su),Math.abs(c-l)<jv)return 0;let u;if(c>l){const f=(c**Wv-l**$v)*Yv;u=f<lu?0:f<ou?f-f*au*Rs:f-Rs}else{const f=(c**Xv-l**qv)*Kv;u=f>-lu?0:f>-ou?f-f*au*Rs:f+Rs}return u*100}const vo=Symbol.for("vuetify:theme"),Ar=ut({theme:String},"theme"),zr={defaultTheme:"light",variations:{colors:[],lighten:0,darken:0},themes:{light:{dark:!1,colors:{background:"#FFFFFF",surface:"#FFFFFF","surface-variant":"#424242","on-surface-variant":"#EEEEEE",primary:"#6200EE","primary-darken-1":"#3700B3",secondary:"#03DAC6","secondary-darken-1":"#018786",error:"#B00020",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#000000","border-opacity":.12,"high-emphasis-opacity":.87,"medium-emphasis-opacity":.6,"disabled-opacity":.38,"idle-opacity":.04,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.12,"dragged-opacity":.08,"kbd-background-color":"#212529","kbd-color":"#FFFFFF","code-background-color":"#C2C2C2"}},dark:{dark:!0,colors:{background:"#121212",surface:"#212121","surface-variant":"#BDBDBD","on-surface-variant":"#424242",primary:"#BB86FC","primary-darken-1":"#3700B3",secondary:"#03DAC5","secondary-darken-1":"#03DAC5",error:"#CF6679",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#FFFFFF","border-opacity":.12,"high-emphasis-opacity":.87,"medium-emphasis-opacity":.6,"disabled-opacity":.38,"idle-opacity":.1,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.16,"dragged-opacity":.08,"kbd-background-color":"#212529","kbd-color":"#FFFFFF","code-background-color":"#B7B7B7"}}}};function Zv(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:zr;if(!n)return{...zr,isDisabled:!0};const e={};for(const[s,o]of Object.entries((t=n.themes)!=null?t:{})){var t,i,r;const a=o.dark?(i=zr.themes)==null?void 0:i.dark:(r=zr.themes)==null?void 0:r.light;e[s]=Nn(a,o)}return Nn(zr,{...n,themes:e})}function Jv(n,e){const t=n._context.provides.usehead,i=It(Zv(e)),r=De(i.defaultTheme),s=De(i.themes),o=le(()=>{const u={};for(const[f,d]of Object.entries(s.value)){const p=u[f]={...d,colors:{...d.colors}};if(i.variations)for(const g of i.variations.colors){const m=p.colors[g];for(const h of["lighten","darken"]){const v=h==="lighten"?Dv:Iv;for(const y of vv(i.variations[h],1))p.colors[`${g}-${h}-${y}`]=Pv(v(mo(m),y))}}for(const g of Object.keys(p.colors)){if(/^on-[a-z]/.test(g)||p.colors[`on-${g}`])continue;const m=`on-${g}`,h=mo(p.colors[g]),v=Math.abs(cu(0,h)),y=Math.abs(cu(16777215,h));p.colors[m]=y>Math.min(v,50)?"#fff":"#000"}}return u}),a=le(()=>o.value[r.value]),l=le(()=>{const u=[];a.value.dark&&ki(u,":root",["color-scheme: dark"]);for(const[g,m]of Object.entries(o.value)){const{variables:h,dark:v}=m;ki(u,`.v-theme--${g}`,[`color-scheme: ${v?"dark":"normal"}`,...Qv(m),...Object.keys(h).map(y=>{const w=h[y],S=typeof w=="string"&&w.startsWith("#")?xh(w):void 0,M=S?`${S.r}, ${S.g}, ${S.b}`:void 0;return`--v-${y}: ${M!=null?M:w}`})])}const f=[],d=[],p=new Set(Object.values(o.value).flatMap(g=>Object.keys(g.colors)));for(const g of p)/^on-[a-z]/.test(g)?ki(d,`.${g}`,[`color: rgb(var(--v-theme-${g})) !important`]):(ki(f,`.bg-${g}`,[`--v-theme-overlay-multiplier: var(--v-theme-${g}-overlay-multiplier)`,`background: rgb(var(--v-theme-${g})) !important`,`color: rgb(var(--v-theme-on-${g})) !important`]),ki(d,`.text-${g}`,[`color: rgb(var(--v-theme-${g})) !important`]),ki(d,`.border-${g}`,[`--v-border-color: var(--v-theme-${g})`]));return u.push(...f,...d),u.map((g,m)=>m===0?g:`    ${g}`).join("")});if(t)t.addHeadObjs(le(()=>{const u={children:l.value,type:"text/css",id:"vuetify-theme-stylesheet"};return i.cspNonce&&(u.nonce=i.cspNonce),{style:[u]}})),an&&Bl(()=>t.updateDOM());else{let f=function(){if(!i.isDisabled){if(typeof document<"u"&&!u){const d=document.createElement("style");d.type="text/css",d.id="vuetify-theme-stylesheet",i.cspNonce&&d.setAttribute("nonce",i.cspNonce),u=d,document.head.appendChild(u)}u&&(u.innerHTML=l.value)}},u=an?document.getElementById("vuetify-theme-stylesheet"):null;Mt(l,f,{immediate:!0})}const c=le(()=>i.isDisabled?void 0:`v-theme--${r.value}`);return{isDisabled:i.isDisabled,name:r,themes:s,current:a,computedThemes:o,themeClasses:c,styles:l,global:{name:r,current:a}}}function Lr(n){xn("provideTheme");const e=it(vo,null);if(!e)throw new Error("Could not find Vuetify theme injection");const t=le(()=>{var s;return(s=n.theme)!=null?s:e==null?void 0:e.name.value}),i=le(()=>e.isDisabled?void 0:`v-theme--${t.value}`),r={...e,name:t,themeClasses:i};return Ot(vo,r),r}function ki(n,e,t){n.push(`${e} {
`,...t.map(i=>`  ${i};
`),`}
`)}function Qv(n){const e=n.dark?2:1,t=n.dark?1:2,i=[];for(const[r,s]of Object.entries(n.colors)){const o=xh(s);i.push(`--v-theme-${r}: ${o.r},${o.g},${o.b}`),r.startsWith("on-")||i.push(`--v-theme-${r}-overlay-multiplier: ${Fv(s)>.18?e:t}`)}return i}const e_={badge:"Badge",close:"Close",dataIterator:{noResultsText:"No matching records found",loadingText:"Loading items..."},dataTable:{itemsPerPageText:"Rows per page:",ariaLabel:{sortDescending:"Sorted descending.",sortAscending:"Sorted ascending.",sortNone:"Not sorted.",activateNone:"Activate to remove sorting.",activateDescending:"Activate to sort descending.",activateAscending:"Activate to sort ascending."},sortBy:"Sort by"},dataFooter:{itemsPerPageText:"Items per page:",itemsPerPageAll:"All",nextPage:"Next page",prevPage:"Previous page",firstPage:"First page",lastPage:"Last page",pageText:"{0}-{1} of {2}"},datePicker:{itemsSelected:"{0} selected",nextMonthAriaLabel:"Next month",nextYearAriaLabel:"Next year",prevMonthAriaLabel:"Previous month",prevYearAriaLabel:"Previous year"},noDataText:"No data available",carousel:{prev:"Previous visual",next:"Next visual",ariaLabel:{delimiter:"Carousel slide {0} of {1}"}},calendar:{moreEvents:"{0} more"},fileInput:{counter:"{0} files",counterSize:"{0} files ({1} in total)"},timePicker:{am:"AM",pm:"PM"},pagination:{ariaLabel:{root:"Pagination Navigation",next:"Next page",previous:"Previous page",page:"Goto Page {0}",currentPage:"Page {0}, Current Page",first:"First page",last:"Last page"}},rating:{ariaLabel:{item:"Rating {0} of {1}"}}},t_={af:!1,ar:!0,bg:!1,ca:!1,ckb:!1,cs:!1,de:!1,el:!1,en:!1,es:!1,et:!1,fa:!1,fi:!1,fr:!1,hr:!1,hu:!1,he:!0,id:!1,it:!1,ja:!1,ko:!1,lv:!1,lt:!1,nl:!1,no:!1,pl:!1,pt:!1,ro:!1,ru:!1,sk:!1,sl:!1,srCyrl:!1,srLatn:!1,sv:!1,th:!1,tr:!1,az:!1,uk:!1,vi:!1,zhHans:!1,zhHant:!1},Zl=Symbol.for("vuetify:rtl");function n_(n,e){var t;return i_({rtl:{...t_,...(t=e==null?void 0:e.rtl)!=null?t:{}},isRtl:De(!1),rtlClasses:De("")},n)}function i_(n,e,t){const i=le(()=>typeof(t==null?void 0:t.rtl)=="boolean"?t.rtl:e.current.value&&n.rtl.hasOwnProperty(e.current.value)?n.rtl[e.current.value]:n.isRtl.value);return{isRtl:i,rtl:n.rtl,rtlClasses:le(()=>`v-locale--is-${i.value?"rtl":"ltr"}`)}}function wh(){const n=it(Zl);if(!n)throw new Error("[Vuetify] Could not find injected rtl instance");return n}const r_=ct({name:"VApp",props:{...Bv({fullHeight:!0}),...Ar()},setup(n,e){let{slots:t}=e;const i=Lr(n),{layoutClasses:r,layoutStyles:s,getLayoutItem:o,items:a,layoutRef:l}=Hv(n),{rtlClasses:c}=wh();return Yt(()=>{var u;return pe("div",{ref:l,class:["v-application",i.themeClasses.value,r.value,c.value],style:s.value},[pe("div",{class:"v-application__wrap"},[(u=t.default)==null?void 0:u.call(t)])])}),{getLayoutItem:o,items:a,theme:i}}});function Jl(n){return ph(()=>{const e=[],t={};return n.value.background&&(eu(n.value.background)?t.backgroundColor=n.value.background:e.push(`bg-${n.value.background}`)),n.value.text&&(eu(n.value.text)?(t.color=n.value.text,t.caretColor=n.value.text):e.push(`text-${n.value.text}`)),{colorClasses:e,colorStyles:t}})}function Eh(n,e){const t=le(()=>({text:Qe(n)?n.value:e?n[e]:null})),{colorClasses:i,colorStyles:r}=Jl(t);return{textColorClasses:i,textColorStyles:r}}function ls(n,e){const t=le(()=>({background:Qe(n)?n.value:e?n[e]:null})),{colorClasses:i,colorStyles:r}=Jl(t);return{backgroundColorClasses:i,backgroundColorStyles:r}}const Th=ct({name:"VDivider",props:{color:String,inset:Boolean,length:[Number,String],thickness:[Number,String],vertical:Boolean,...Ar()},setup(n,e){let{attrs:t}=e;const{themeClasses:i}=Lr(n),{backgroundColorClasses:r,backgroundColorStyles:s}=ls(lt(n,"color")),o=le(()=>{const a={};return n.length&&(a[n.vertical?"maxHeight":"maxWidth"]=Je(n.length)),n.thickness&&(a[n.vertical?"borderRightWidth":"borderTopWidth"]=Je(n.thickness)),a});return Yt(()=>pe("hr",{class:[{"v-divider":!0,"v-divider--inset":n.inset,"v-divider--vertical":n.vertical},i.value,r.value],style:[o.value,s.value],"aria-orientation":!t.role||t.role==="separator"?n.vertical?"vertical":"horizontal":void 0,role:`${t.role||"separator"}`},null)),{}}});const rl=gs({name:"VDefaultsProvider",props:{defaults:Object,reset:[Number,String],root:Boolean,scoped:Boolean},setup(n,e){let{slots:t}=e;const{defaults:i,reset:r,root:s,scoped:o}=xd(n);return Oo(i,{reset:r,root:s,scoped:o}),()=>{var a;return(a=t.default)==null?void 0:a.call(t)}}});function Bt(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"top center 0",t=arguments.length>2?arguments[2]:void 0;return ct({name:n,props:{group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:{type:String,default:t},origin:{type:String,default:e}},setup(i,r){let{slots:s}=r;return()=>{const o=i.group?tv:Cr;return zn(o,{name:n,mode:i.mode,onBeforeEnter(a){a.style.transformOrigin=i.origin},onLeave(a){if(i.leaveAbsolute){const{offsetTop:l,offsetLeft:c,offsetWidth:u,offsetHeight:f}=a;a._transitionInitialStyles={position:a.style.position,top:a.style.top,left:a.style.left,width:a.style.width,height:a.style.height},a.style.position="absolute",a.style.top=`${l}px`,a.style.left=`${c}px`,a.style.width=`${u}px`,a.style.height=`${f}px`}i.hideOnLeave&&a.style.setProperty("display","none","important")},onAfterLeave(a){if(i.leaveAbsolute&&a!=null&&a._transitionInitialStyles){const{position:l,top:c,left:u,width:f,height:d}=a._transitionInitialStyles;delete a._transitionInitialStyles,a.style.position=l||"",a.style.top=c||"",a.style.left=u||"",a.style.width=f||"",a.style.height=d||""}}},s.default)}}})}function Ch(n,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return ct({name:n,props:{mode:{type:String,default:t}},setup(i,r){let{slots:s}=r;return()=>zn(Cr,{name:n,...e},s.default)}})}function Ah(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",i=jt(`offset-${t}`);return{onBeforeEnter(o){o._parent=o.parentNode,o._initialStyle={transition:o.style.transition,overflow:o.style.overflow,[t]:o.style[t]}},onEnter(o){const a=o._initialStyle;o.style.setProperty("transition","none","important"),o.style.overflow="hidden";const l=`${o[i]}px`;o.style[t]="0",o.offsetHeight,o.style.transition=a.transition,n&&o._parent&&o._parent.classList.add(n),requestAnimationFrame(()=>{o.style[t]=l})},onAfterEnter:s,onEnterCancelled:s,onLeave(o){o._initialStyle={transition:"",overflow:o.style.overflow,[t]:o.style[t]},o.style.overflow="hidden",o.style[t]=`${o[i]}px`,o.offsetHeight,requestAnimationFrame(()=>o.style[t]="0")},onAfterLeave:r,onLeaveCancelled:r};function r(o){n&&o._parent&&o._parent.classList.remove(n),s(o)}function s(o){const a=o._initialStyle[t];o.style.overflow=o._initialStyle.overflow,a!=null&&(o.style[t]=a),delete o._initialStyle}}Bt("fab-transition","center center","out-in");Bt("dialog-bottom-transition");Bt("dialog-top-transition");Bt("fade-transition");Bt("scale-transition");Bt("scroll-x-transition");Bt("scroll-x-reverse-transition");Bt("scroll-y-transition");Bt("scroll-y-reverse-transition");Bt("slide-x-transition");Bt("slide-x-reverse-transition");Bt("slide-y-transition");Bt("slide-y-reverse-transition");const s_=Ch("expand-transition",Ah());Ch("expand-x-transition",Ah("",!0));const sl=Symbol.for("vuetify:list");function Lh(){const n=it(sl,{hasPrepend:De(!1),updateHasPrepend:()=>null}),e={hasPrepend:De(!1),updateHasPrepend:t=>{t&&(e.hasPrepend.value=t)}};return Ot(sl,e),n}function Rh(){return it(sl,null)}const o_={collapse:"mdi-chevron-up",complete:"mdi-check",cancel:"mdi-close-circle",close:"mdi-close",delete:"mdi-close-circle",clear:"mdi-close-circle",success:"mdi-check-circle",info:"mdi-information",warning:"mdi-alert-circle",error:"mdi-close-circle",prev:"mdi-chevron-left",next:"mdi-chevron-right",checkboxOn:"mdi-checkbox-marked",checkboxOff:"mdi-checkbox-blank-outline",checkboxIndeterminate:"mdi-minus-box",delimiter:"mdi-circle",sort:"mdi-arrow-up",expand:"mdi-chevron-down",menu:"mdi-menu",subgroup:"mdi-menu-down",dropdown:"mdi-menu-down",radioOn:"mdi-radiobox-marked",radioOff:"mdi-radiobox-blank",edit:"mdi-pencil",ratingEmpty:"mdi-star-outline",ratingFull:"mdi-star",ratingHalf:"mdi-star-half-full",loading:"mdi-cached",first:"mdi-page-first",last:"mdi-page-last",unfold:"mdi-unfold-more-horizontal",file:"mdi-paperclip",plus:"mdi-plus",minus:"mdi-minus"},a_={component:n=>zn(Ph,{...n,class:"mdi"})},Rn=[String,Function,Object],ol=Symbol.for("vuetify:icons"),Bo=ut({icon:{type:Rn,required:!0},tag:{type:String,required:!0}},"icon"),l_=ct({name:"VComponentIcon",props:Bo(),setup(n){return()=>pe(n.tag,null,{default:()=>[pe(n.icon,null,null)]})}}),c_=ct({name:"VSvgIcon",inheritAttrs:!1,props:Bo(),setup(n,e){let{attrs:t}=e;return()=>pe(n.tag,pr(t,{style:null}),{default:()=>[pe("svg",{class:"v-icon__svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":"true"},[pe("path",{d:n.icon},null)])]})}});ct({name:"VLigatureIcon",props:Bo(),setup(n){return()=>pe(n.tag,null,{default:()=>[n.icon]})}});const Ph=ct({name:"VClassIcon",props:Bo(),setup(n){return()=>pe(n.tag,{class:n.icon},null)}}),u_={svg:{component:c_},class:{component:Ph}};function f_(n){return Nn({defaultSet:"mdi",sets:{...u_,mdi:a_},aliases:o_},n)}const d_=n=>{const e=it(ol);if(!e)throw new Error("Missing Vuetify Icons provide!");return{iconData:le(()=>{const i=Qe(n)?n.value:n.icon;if(!i)throw new Error("Icon value is undefined or null");let r=i;if(typeof i=="string"&&i.includes("$")){var s;r=(s=e.aliases)==null?void 0:s[i.slice(i.indexOf("$")+1)]}if(!r)throw new Error(`Could not find aliased icon "${i}"`);if(typeof r!="string")return{component:l_,icon:r};const o=Object.keys(e.sets).find(c=>typeof r=="string"&&r.startsWith(`${c}:`)),a=o?r.slice(o.length+1):r;return{component:e.sets[o!=null?o:e.defaultSet].component,icon:a}})}},ai=ut({tag:{type:String,default:"div"}},"tag");function al(n,e,t){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:l=>l,r=arguments.length>4&&arguments[4]!==void 0?arguments[4]:l=>l;const s=xn("useProxiedModel"),o=le(()=>{var l,c;return n[e],!!(s!=null&&(l=s.vnode.props)!=null&&l.hasOwnProperty(e)||s!=null&&(c=s.vnode.props)!=null&&c.hasOwnProperty(Yl(e)))}),a=De(i(n[e]));return le({get(){return o.value?i(n[e]):a.value},set(l){(o.value?i(n[e]):a.value)!==l&&(a.value=l,s==null||s.emit(`update:${e}`,r(l)))}})}const h_={open:n=>{let{id:e,value:t,opened:i,parents:r}=n;if(t){const s=new Set;s.add(e);let o=r.get(e);for(;o!=null;)s.add(o),o=r.get(o);return s}else return i.delete(e),i},select:()=>null},Dh={open:n=>{let{id:e,value:t,opened:i,parents:r}=n;if(t){let s=r.get(e);for(i.add(e);s!=null&&s!==e;)i.add(s),s=r.get(s);return i}else i.delete(e);return i},select:()=>null},p_={open:Dh.open,select:n=>{let{id:e,value:t,opened:i,parents:r}=n;if(!t)return i;const s=[];let o=r.get(e);for(;o!=null;)s.push(o),o=r.get(o);return new Set(s)}},Ql=n=>{const e={select:t=>{let{id:i,value:r,selected:s}=t;if(n&&!r){const o=Array.from(s.entries()).reduce((a,l)=>{let[c,u]=l;return u==="on"?[...a,c]:a},[]);if(o.length===1&&o[0]===i)return s}return s.set(i,r?"on":"off"),s},in:(t,i,r)=>{let s=new Map;for(const o of t||[])s=e.select({id:o,value:!0,selected:new Map(s),children:i,parents:r});return s},out:t=>{const i=[];for(const[r,s]of t.entries())s==="on"&&i.push(r);return i}};return e},Ih=n=>{const e=Ql(n);return{select:i=>{let{selected:r,id:s,...o}=i;const a=r.has(s)?new Map([[s,r.get(s)]]):new Map;return e.select({...o,id:s,selected:a})},in:(i,r,s)=>{let o=new Map;return i!=null&&i.length&&(o=e.in(i.slice(0,1),r,s)),o},out:(i,r,s)=>e.out(i,r,s)}},m_=n=>{const e=Ql(n);return{select:i=>{let{id:r,selected:s,children:o,...a}=i;return o.has(r)?s:e.select({id:r,selected:s,children:o,...a})},in:e.in,out:e.out}},g_=n=>{const e=Ih(n);return{select:i=>{let{id:r,selected:s,children:o,...a}=i;return o.has(r)?s:e.select({id:r,selected:s,children:o,...a})},in:e.in,out:e.out}},v_=n=>{const e={select:t=>{let{id:i,value:r,selected:s,children:o,parents:a}=t;const l=new Map(s),c=[i];for(;c.length;){const f=c.shift();s.set(f,r?"on":"off"),o.has(f)&&c.push(...o.get(f))}let u=a.get(i);for(;u;){const f=o.get(u),d=f.every(g=>s.get(g)==="on"),p=f.every(g=>!s.has(g)||s.get(g)==="off");s.set(u,d?"on":p?"off":"indeterminate"),u=a.get(u)}return n&&!r&&Array.from(s.entries()).reduce((d,p)=>{let[g,m]=p;return m==="on"?[...d,g]:d},[]).length===0?l:s},in:(t,i,r)=>{let s=new Map;for(const o of t||[])s=e.select({id:o,value:!0,selected:new Map(s),children:i,parents:r});return s},out:(t,i)=>{const r=[];for(const[s,o]of t.entries())o==="on"&&!i.has(s)&&r.push(s);return r}};return e},cs=Symbol.for("vuetify:nested"),Fh={id:De(),root:{register:()=>null,unregister:()=>null,parents:De(new Map),children:De(new Map),open:()=>null,select:()=>null,opened:De(new Set),selected:De(new Map),selectedValues:De([])}},__=ut({selectStrategy:[String,Function],openStrategy:[String,Function],opened:Array,selected:Array,mandatory:Boolean},"nested"),x_=n=>{let e=!1;const t=De(new Map),i=De(new Map),r=al(n,"opened",n.opened,f=>new Set(f),f=>[...f.values()]),s=le(()=>{if(typeof n.selectStrategy=="object")return n.selectStrategy;switch(n.selectStrategy){case"single-leaf":return g_(n.mandatory);case"leaf":return m_(n.mandatory);case"independent":return Ql(n.mandatory);case"single-independent":return Ih(n.mandatory);case"classic":default:return v_(n.mandatory)}}),o=le(()=>{if(typeof n.openStrategy=="function")return n.openStrategy;switch(n.openStrategy){case"list":return p_;case"single":return h_;case"multiple":default:return Dh}}),a=al(n,"selected",n.selected,f=>s.value.in(f,t.value,i.value),f=>s.value.out(f,t.value,i.value));oi(()=>{e=!0});function l(f){const d=[];let p=f;for(;p!=null;)d.unshift(p),p=i.value.get(p);return d}const c=xn("nested"),u={id:De(),root:{opened:r,selected:a,selectedValues:le(()=>{const f=[];for(const[d,p]of a.value.entries())p==="on"&&f.push(d);return f}),register:(f,d,p)=>{d&&f!==d&&i.value.set(f,d),p&&t.value.set(f,[]),d!=null&&t.value.set(d,[...t.value.get(d)||[],f])},unregister:f=>{if(e)return;t.value.delete(f);const d=i.value.get(f);if(d){var p;const g=(p=t.value.get(d))!=null?p:[];t.value.set(d,g.filter(m=>m!==f))}i.value.delete(f),r.value.delete(f)},open:(f,d,p)=>{c.emit("click:open",{id:f,value:d,path:l(f),event:p});const g=o.value.open({id:f,value:d,opened:new Set(r.value),children:t.value,parents:i.value,event:p});g&&(r.value=g)},select:(f,d,p)=>{c.emit("click:select",{id:f,value:d,path:l(f),event:p});const g=s.value.select({id:f,value:d,selected:new Map(a.value),children:t.value,parents:i.value,event:p});g&&(a.value=g);const m=o.value.select({id:f,value:d,selected:new Map(a.value),opened:new Set(r.value),children:t.value,parents:i.value,event:p});m&&(r.value=m)},children:t,parents:i}};return Ot(cs,u),u.root},Nh=(n,e)=>{const t=it(cs,Fh),i=le(()=>{var s;return(s=n.value)!=null?s:No().toString()}),r={...t,id:i,open:(s,o)=>t.root.open(i.value,s,o),isOpen:le(()=>t.root.opened.value.has(i.value)),parent:le(()=>t.root.parents.value.get(i.value)),select:(s,o)=>t.root.select(i.value,s,o),isSelected:le(()=>t.root.selected.value.get(i.value)==="on"),isIndeterminate:le(()=>t.root.selected.value.get(i.value)==="indeterminate"),isLeaf:le(()=>!t.root.children.value.get(i.value)),isGroupActivator:t.isGroupActivator};return!t.isGroupActivator&&t.root.register(i.value,t.id.value,e),oi(()=>{!t.isGroupActivator&&t.root.unregister(i.value)}),e&&Ot(cs,r),r},y_=()=>{const n=it(cs,Fh);Ot(cs,{...n,isGroupActivator:!0})},b_=ct({name:"VListGroupActivator",setup(n,e){let{slots:t}=e;return y_(),()=>{var i;return(i=t.default)==null?void 0:i.call(t)}}}),S_=ut({activeColor:String,color:String,collapseIcon:{type:Rn,default:"$collapse"},expandIcon:{type:Rn,default:"$expand"},prependIcon:Rn,appendIcon:Rn,fluid:Boolean,subgroup:Boolean,value:null,...ai()}),Oh=zo()({name:"VListGroup",props:{title:String,...S_()},setup(n,e){let{slots:t}=e;const{isOpen:i,open:r}=Nh(lt(n,"value"),!0),s=Rh(),o=c=>{r(!i.value,c)},a=le(()=>({onClick:o,class:"v-list-group__header"})),l=le(()=>i.value?n.collapseIcon:n.expandIcon);return Yt(()=>{var c;return pe(n.tag,{class:["v-list-group",{"v-list-group--prepend":s==null?void 0:s.hasPrepend.value,"v-list-group--fluid":n.fluid,"v-list-group--subgroup":n.subgroup}]},{default:()=>[t.activator&&pe(rl,{defaults:{VListItem:{active:i.value,activeColor:n.activeColor,color:n.color,prependIcon:n.prependIcon||n.subgroup&&l.value,appendIcon:n.appendIcon||!n.subgroup&&l.value,title:n.title,value:n.value}}},{default:()=>[pe(b_,null,{default:()=>[t.activator({props:a.value,isOpen:i})]})]}),pe(s_,null,{default:()=>[uo(pe("div",{class:"v-list-group__items"},[(c=t.default)==null?void 0:c.call(t)]),[[lh,i.value]])]})]})}),{}}});function M_(n){return dh(n,Object.keys(Oh.props))}const w_=["x-small","small","default","large","x-large"],zh=ut({size:{type:[String,Number],default:"default"}},"size");function Bh(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:vs();return ph(()=>{let t,i;return yv(w_,n.size)?t=`${e}--size-${n.size}`:n.size&&(i={width:Je(n.size),height:Je(n.size)}),{sizeClasses:t,sizeStyles:i}})}const E_=ut({color:String,start:Boolean,end:Boolean,icon:Rn,...zh(),...ai({tag:"i"}),...Ar()},"v-icon"),ll=ct({name:"VIcon",props:E_(),setup(n,e){let{attrs:t,slots:i}=e,r;i.default&&(r=le(()=>{var u,f;const d=(u=i.default)==null?void 0:u.call(i);if(!!d)return(f=hh(d).filter(p=>p.children&&typeof p.children=="string")[0])==null?void 0:f.children}));const{themeClasses:s}=Lr(n),{iconData:o}=d_(r||n),{sizeClasses:a}=Bh(n),{textColorClasses:l,textColorStyles:c}=Eh(lt(n,"color"));return Yt(()=>pe(o.value.component,{tag:n.tag,icon:o.value.icon,class:["v-icon","notranslate",s.value,a.value,l.value,{"v-icon--clickable":!!t.onClick,"v-icon--start":n.start,"v-icon--end":n.end}],style:[a.value?void 0:{fontSize:Je(n.size),height:Je(n.size),width:Je(n.size)},c.value],"aria-hidden":"true"},null)),{}}});const ec=ut({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function tc(n){return{dimensionStyles:le(()=>({height:Je(n.height),maxHeight:Je(n.maxHeight),maxWidth:Je(n.maxWidth),minHeight:Je(n.minHeight),minWidth:Je(n.minWidth),width:Je(n.width)}))}}function T_(n){return{aspectStyles:le(()=>{const e=Number(n.aspectRatio);return e?{paddingBottom:String(1/e*100)+"%"}:void 0})}}const C_=ct({name:"VResponsive",props:{aspectRatio:[String,Number],contentClass:String,...ec()},setup(n,e){let{slots:t}=e;const{aspectStyles:i}=T_(n),{dimensionStyles:r}=tc(n);return Yt(()=>{var s;return pe("div",{class:"v-responsive",style:r.value},[pe("div",{class:"v-responsive__sizer",style:i.value},null),(s=t.additional)==null?void 0:s.call(t),t.default&&pe("div",{class:["v-responsive__content",n.contentClass]},[t.default()])])}),{}}});function A_(n,e){if(!ch)return;const t=e.modifiers||{},i=e.value,{handler:r,options:s}=typeof i=="object"?i:{handler:i,options:{}},o=new IntersectionObserver(function(){var a;let l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],c=arguments.length>1?arguments[1]:void 0;const u=(a=n._observe)==null?void 0:a[e.instance.$.uid];if(!u)return;const f=l.some(d=>d.isIntersecting);r&&(!t.quiet||u.init)&&(!t.once||f||u.init)&&r(f,l,c),f&&t.once?Uh(n,e):u.init=!0},s);n._observe=Object(n._observe),n._observe[e.instance.$.uid]={init:!1,observer:o},o.observe(n)}function Uh(n,e){var t;const i=(t=n._observe)==null?void 0:t[e.instance.$.uid];!i||(i.observer.unobserve(n),delete n._observe[e.instance.$.uid])}const L_={mounted:A_,unmounted:Uh},R_=L_,P_=ut({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:n=>n!==!0}},"transition"),Ps=(n,e)=>{var t;let{slots:i}=e;const{transition:r,...s}=n;if(!r||typeof r=="boolean")return(t=i.default)==null?void 0:t.call(i);const{component:o=Cr,...a}=typeof r=="object"?r:{};return zn(o,pr(typeof r=="string"?{name:r}:a,s),i)},D_=ct({name:"VImg",directives:{intersect:R_},props:{aspectRatio:[String,Number],alt:String,cover:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},srcset:String,width:[String,Number],...P_()},emits:["loadstart","load","error"],setup(n,e){let{emit:t,slots:i}=e;const r=De(""),s=De(),o=De(n.eager?"loading":"idle"),a=De(),l=De(),c=le(()=>n.src&&typeof n.src=="object"?{src:n.src.src,srcset:n.srcset||n.src.srcset,lazySrc:n.lazySrc||n.src.lazySrc,aspect:Number(n.aspectRatio||n.src.aspect)}:{src:n.src,srcset:n.srcset,lazySrc:n.lazySrc,aspect:Number(n.aspectRatio||0)}),u=le(()=>c.value.aspect||a.value/l.value||0);Mt(()=>n.src,()=>{f(o.value!=="idle")}),Vl(()=>f());function f(L){if(!(n.eager&&L)&&!(ch&&!L&&!n.eager)){if(o.value="loading",c.value.lazySrc){const _=new Image;_.src=c.value.lazySrc,m(_,null)}!c.value.src||Co(()=>{var _,C;if(t("loadstart",((_=s.value)==null?void 0:_.currentSrc)||c.value.src),(C=s.value)!=null&&C.complete){if(s.value.naturalWidth||p(),o.value==="error")return;u.value||m(s.value,null),d()}else u.value||m(s.value),g()})}}function d(){var L;g(),o.value="loaded",t("load",((L=s.value)==null?void 0:L.currentSrc)||c.value.src)}function p(){var L;o.value="error",t("error",((L=s.value)==null?void 0:L.currentSrc)||c.value.src)}function g(){const L=s.value;L&&(r.value=L.currentSrc||L.src)}function m(L){let _=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const C=()=>{const{naturalHeight:D,naturalWidth:O}=L;D||O?(a.value=O,l.value=D):!L.complete&&o.value==="loading"&&_!=null?setTimeout(C,_):(L.currentSrc.endsWith(".svg")||L.currentSrc.startsWith("data:image/svg+xml"))&&(a.value=1,l.value=1)};C()}const h=le(()=>({"v-img__img--cover":n.cover,"v-img__img--contain":!n.cover})),v=le(()=>{var L;if(!c.value.src||o.value==="idle")return;const _=zn("img",{class:["v-img__img",h.value],src:c.value.src,srcset:c.value.srcset,alt:"",sizes:n.sizes,ref:s,onLoad:d,onError:p}),C=(L=i.sources)==null?void 0:L.call(i);return pe(Ps,{transition:n.transition,appear:!0},{default:()=>[uo(C?pe("picture",{class:"v-img__picture"},[C,_]):_,[[lh,o.value==="loaded"]])]})}),y=le(()=>pe(Ps,{transition:n.transition},{default:()=>[c.value.lazySrc&&o.value!=="loaded"&&pe("img",{class:["v-img__img","v-img__img--preload",h.value],src:c.value.lazySrc,alt:""},null)]})),w=le(()=>{if(!!i.placeholder)return pe(Ps,{transition:n.transition,appear:!0},{default:()=>[(o.value==="loading"||o.value==="error"&&!i.error)&&pe("div",{class:"v-img__placeholder"},[i.placeholder()])]})}),S=le(()=>{if(!!i.error)return pe(Ps,{transition:n.transition,appear:!0},{default:()=>[o.value==="error"&&pe("div",{class:"v-img__error"},[i.error()])]})}),M=le(()=>{if(!!n.gradient)return pe("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${n.gradient})`}},null)}),A=De(!1);{const L=Mt(u,_=>{_&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{A.value=!0})}),L())})}return Yt(()=>uo(pe(C_,{class:["v-img",{"v-img--booting":!A.value}],style:{width:Je(n.width==="auto"?a.value:n.width)},aspectRatio:u.value,"aria-label":n.alt,role:n.alt?"img":void 0},{additional:()=>[v.value,y.value,M.value,w.value,S.value],default:i.default}),[[Ud("intersect"),{handler:f,options:n.options},null,{once:!0}]])),{currentSrc:r,image:s,state:o,naturalWidth:a,naturalHeight:l}}}),I_=[null,"default","comfortable","compact"],nc=ut({density:{type:String,default:"default",validator:n=>I_.includes(n)}},"density");function ic(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:vs();return{densityClasses:le(()=>`${e}--density-${n.density}`)}}const Uo=ut({rounded:{type:[Boolean,Number,String],default:void 0}},"rounded");function ko(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:vs();return{roundedClasses:le(()=>{const i=Qe(n)?n.value:n.rounded,r=[];if(i===!0||i==="")r.push(`${e}--rounded`);else if(typeof i=="string"||i===0)for(const s of String(i).split(" "))r.push(`rounded-${s}`);return r})}}const F_=ut({color:String,start:Boolean,end:Boolean,icon:Rn,image:String,...nc(),...Uo(),...zh(),...ai()}),uu=ct({name:"VAvatar",props:F_(),setup(n,e){let{slots:t}=e;const{backgroundColorClasses:i,backgroundColorStyles:r}=ls(lt(n,"color")),{densityClasses:s}=ic(n),{roundedClasses:o}=ko(n),{sizeClasses:a,sizeStyles:l}=Bh(n);return Yt(()=>{var c;return pe(n.tag,{class:["v-avatar",{"v-avatar--start":n.start,"v-avatar--end":n.end},i.value,s.value,o.value,a.value],style:[r.value,l.value]},{default:()=>[n.image?pe(D_,{src:n.image,alt:""},null):n.icon?pe(ll,{icon:n.icon},null):(c=t.default)==null?void 0:c.call(t)]})}),{}}}),N_=Sh("v-list-item-subtitle"),O_=Sh("v-list-item-title");const cl=Symbol("rippleStop"),z_=80;function fu(n,e){n.style.transform=e,n.style.webkitTransform=e}function ra(n,e){n.style.opacity=`calc(${e} * var(--v-theme-overlay-multiplier))`}function ul(n){return n.constructor.name==="TouchEvent"}function kh(n){return n.constructor.name==="KeyboardEvent"}const B_=function(n,e){var t;let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=0,s=0;if(!kh(n)){const d=e.getBoundingClientRect(),p=ul(n)?n.touches[n.touches.length-1]:n;r=p.clientX-d.left,s=p.clientY-d.top}let o=0,a=.3;(t=e._ripple)!=null&&t.circle?(a=.15,o=e.clientWidth/2,o=i.center?o:o+Math.sqrt((r-o)**2+(s-o)**2)/4):o=Math.sqrt(e.clientWidth**2+e.clientHeight**2)/2;const l=`${(e.clientWidth-o*2)/2}px`,c=`${(e.clientHeight-o*2)/2}px`,u=i.center?l:`${r-o}px`,f=i.center?c:`${s-o}px`;return{radius:o,scale:a,x:u,y:f,centerX:l,centerY:c}},_o={show(n,e){var t;let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!(e!=null&&(t=e._ripple)!=null&&t.enabled))return;const r=document.createElement("span"),s=document.createElement("span");r.appendChild(s),r.className="v-ripple__container",i.class&&(r.className+=` ${i.class}`);const{radius:o,scale:a,x:l,y:c,centerX:u,centerY:f}=B_(n,e,i),d=`${o*2}px`;s.className="v-ripple__animation",s.style.width=d,s.style.height=d,e.appendChild(r);const p=window.getComputedStyle(e);p&&p.position==="static"&&(e.style.position="relative",e.dataset.previousPosition="static"),s.classList.add("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--visible"),fu(s,`translate(${l}, ${c}) scale3d(${a},${a},${a})`),ra(s,0),s.dataset.activated=String(performance.now()),setTimeout(()=>{s.classList.remove("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--in"),fu(s,`translate(${u}, ${f}) scale3d(1,1,1)`),ra(s,.08)},0)},hide(n){var e;if(!(n!=null&&(e=n._ripple)!=null&&e.enabled))return;const t=n.getElementsByClassName("v-ripple__animation");if(t.length===0)return;const i=t[t.length-1];if(i.dataset.isHiding)return;i.dataset.isHiding="true";const r=performance.now()-Number(i.dataset.activated),s=Math.max(250-r,0);setTimeout(()=>{i.classList.remove("v-ripple__animation--in"),i.classList.add("v-ripple__animation--out"),ra(i,0),setTimeout(()=>{n.getElementsByClassName("v-ripple__animation").length===1&&n.dataset.previousPosition&&(n.style.position=n.dataset.previousPosition,delete n.dataset.previousPosition),i.parentNode&&n.removeChild(i.parentNode)},300)},s)}};function Vh(n){return typeof n>"u"||!!n}function us(n){const e={},t=n.currentTarget;if(!(!(t!=null&&t._ripple)||t._ripple.touched||n[cl])){if(n[cl]=!0,ul(n))t._ripple.touched=!0,t._ripple.isTouch=!0;else if(t._ripple.isTouch)return;if(e.center=t._ripple.centered||kh(n),t._ripple.class&&(e.class=t._ripple.class),ul(n)){if(t._ripple.showTimerCommit)return;t._ripple.showTimerCommit=()=>{_o.show(n,t,e)},t._ripple.showTimer=window.setTimeout(()=>{var i;t!=null&&(i=t._ripple)!=null&&i.showTimerCommit&&(t._ripple.showTimerCommit(),t._ripple.showTimerCommit=null)},z_)}else _o.show(n,t,e)}}function du(n){n[cl]=!0}function Nt(n){const e=n.currentTarget;if(!(!e||!e._ripple)){if(window.clearTimeout(e._ripple.showTimer),n.type==="touchend"&&e._ripple.showTimerCommit){e._ripple.showTimerCommit(),e._ripple.showTimerCommit=null,e._ripple.showTimer=window.setTimeout(()=>{Nt(n)});return}window.setTimeout(()=>{e._ripple&&(e._ripple.touched=!1)}),_o.hide(e)}}function Gh(n){const e=n.currentTarget;!e||!e._ripple||(e._ripple.showTimerCommit&&(e._ripple.showTimerCommit=null),window.clearTimeout(e._ripple.showTimer))}let fs=!1;function Hh(n){!fs&&(n.keyCode===Jc.enter||n.keyCode===Jc.space)&&(fs=!0,us(n))}function Wh(n){fs=!1,Nt(n)}function $h(n){fs&&(fs=!1,Nt(n))}function qh(n,e,t){var i;const{value:r,modifiers:s}=e,o=Vh(r);if(o||_o.hide(n),n._ripple=(i=n._ripple)!=null?i:{},n._ripple.enabled=o,n._ripple.centered=s.center,n._ripple.circle=s.circle,il(r)&&r.class&&(n._ripple.class=r.class),o&&!t){if(s.stop){n.addEventListener("touchstart",du,{passive:!0}),n.addEventListener("mousedown",du);return}n.addEventListener("touchstart",us,{passive:!0}),n.addEventListener("touchend",Nt,{passive:!0}),n.addEventListener("touchmove",Gh,{passive:!0}),n.addEventListener("touchcancel",Nt),n.addEventListener("mousedown",us),n.addEventListener("mouseup",Nt),n.addEventListener("mouseleave",Nt),n.addEventListener("keydown",Hh),n.addEventListener("keyup",Wh),n.addEventListener("blur",$h),n.addEventListener("dragstart",Nt,{passive:!0})}else!o&&t&&Xh(n)}function Xh(n){n.removeEventListener("mousedown",us),n.removeEventListener("touchstart",us),n.removeEventListener("touchend",Nt),n.removeEventListener("touchmove",Gh),n.removeEventListener("touchcancel",Nt),n.removeEventListener("mouseup",Nt),n.removeEventListener("mouseleave",Nt),n.removeEventListener("keydown",Hh),n.removeEventListener("keyup",Wh),n.removeEventListener("dragstart",Nt),n.removeEventListener("blur",$h)}function U_(n,e){qh(n,e,!1)}function k_(n){delete n._ripple,Xh(n)}function V_(n,e){if(e.value===e.oldValue)return;const t=Vh(e.oldValue);qh(n,e,t)}const G_={mounted:U_,unmounted:k_,updated:V_},H_=["elevated","flat","tonal","outlined","text","plain"];function W_(n,e){return pe(Ct,null,[n&&pe("span",{key:"overlay",class:`${e}__overlay`},null),pe("span",{key:"underlay",class:`${e}__underlay`},null)])}const jh=ut({color:String,variant:{type:String,default:"elevated",validator:n=>H_.includes(n)}},"variant");function $_(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:vs();const t=le(()=>{const{variant:s}=sn(n);return`${e}--variant-${s}`}),{colorClasses:i,colorStyles:r}=Jl(le(()=>{const{variant:s,color:o}=sn(n);return{[["elevated","flat"].includes(s)?"background":"text"]:o}}));return{colorClasses:i,colorStyles:r,variantClasses:t}}const rc=ut({border:[Boolean,Number,String]},"border");function sc(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:vs();return{borderClasses:le(()=>{const i=Qe(n)?n.value:n.border,r=[];if(i===!0||i==="")r.push(`${e}--border`);else if(typeof i=="string"||i===0)for(const s of String(i).split(" "))r.push(`border-${s}`);return r})}}const oc=ut({elevation:{type:[Number,String],validator(n){const e=parseInt(n);return!isNaN(e)&&e>=0&&e<=24}}},"elevation");function ac(n){return{elevationClasses:le(()=>{const t=Qe(n)?n.value:n.elevation,i=[];return t==null||i.push(`elevation-${t}`),i})}}function q_(){var n,e;return(n=xn("useRouter"))==null||(e=n.proxy)==null?void 0:e.$router}function X_(n,e){const t=Qm("RouterLink"),i=le(()=>!!(n.href||n.to)),r=le(()=>(i==null?void 0:i.value)||!!(e.onClick||e.onClickOnce));if(typeof t=="string")return{isLink:i,isClickable:r,href:lt(n,"href")};const s=n.to?t.useLink(n):void 0;return{...s,isLink:i,isClickable:r,href:le(()=>n.to?s==null?void 0:s.route.value.href:n.href)}}const j_=ut({href:String,replace:Boolean,to:[String,Object]},"router"),lr=zo()({name:"VListItem",directives:{Ripple:G_},props:{active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:Rn,disabled:Boolean,lines:String,link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:Rn,subtitle:[String,Number,Boolean],title:[String,Number,Boolean],value:null,...rc(),...nc(),...ec(),...oc(),...Uo(),...j_(),...ai(),...Ar(),...jh({variant:"text"})},setup(n,e){let{attrs:t,slots:i}=e;const r=X_(n,t),s=le(()=>{var J;return(J=n.value)!=null?J:r.href.value}),{select:o,isSelected:a,isIndeterminate:l,isGroupActivator:c,root:u,parent:f}=Nh(s,!1),d=Rh(),p=le(()=>{var J;return n.active!==!1&&(n.active||((J=r.isExactActive)==null?void 0:J.value)||a.value)}),g=le(()=>n.link!==!1&&r.isLink.value),m=le(()=>!n.disabled&&n.link!==!1&&(n.link||r.isClickable.value||n.value!=null&&!!d)),h=le(()=>n.rounded||n.nav),v=le(()=>{var J;return{color:p.value&&(J=n.activeColor)!=null?J:n.color,variant:n.variant}});Mt(()=>{var J;return(J=r.isExactActive)==null?void 0:J.value},J=>{J&&f.value!=null&&u.open(f.value,!0)},{immediate:!0});const{themeClasses:y}=Lr(n),{borderClasses:w}=sc(n),{colorClasses:S,colorStyles:M,variantClasses:A}=$_(v),{densityClasses:L}=ic(n),{dimensionStyles:_}=tc(n),{elevationClasses:C}=ac(n),{roundedClasses:D}=ko(h),O=le(()=>n.lines?`v-list-item--${n.lines}-line`:void 0),k=le(()=>({isActive:p.value,select:o,isSelected:a.value,isIndeterminate:l.value}));return Yt(()=>{var J,N,ee,B,j,X,V;const Y=g.value?"a":n.tag,fe=!d||a.value||p.value,ie=i.title||n.title,he=i.subtitle||n.subtitle,Me=!!(i.append||n.appendAvatar||n.appendIcon),z=!!(i.prepend||n.prependAvatar||n.prependIcon);return d==null||d.updateHasPrepend(z),uo(pe(Y,{class:["v-list-item",{"v-list-item--active":p.value,"v-list-item--disabled":n.disabled,"v-list-item--link":m.value,"v-list-item--nav":n.nav,"v-list-item--prepend":!z&&(d==null?void 0:d.hasPrepend.value),[`${n.activeClass}`]:p.value},y.value,w.value,fe?S.value:void 0,L.value,C.value,O.value,D.value,A.value],style:[fe?M.value:void 0,_.value],href:r.href.value,tabindex:m.value?0:void 0,onClick:m.value&&(F=>{var re;c||((re=r.navigate)==null||re.call(r,F),n.value!=null&&o(!a.value,F))})},{default:()=>[W_(m.value||p.value,"v-list-item"),z&&pe(rl,{key:"prepend",defaults:{VAvatar:{density:n.density,image:n.prependAvatar},VIcon:{density:n.density,icon:n.prependIcon},VListItemAction:{start:!0}}},{default:()=>[pe("div",{class:"v-list-item__prepend"},[n.prependAvatar&&pe(uu,{key:"prepend-avatar"},null),n.prependIcon&&pe(ll,{key:"prepend-icon"},null),(J=i.prepend)==null?void 0:J.call(i,k.value)])]}),pe("div",{class:"v-list-item__content"},[ie&&pe(O_,{key:"title"},{default:()=>[(N=(ee=i.title)==null?void 0:ee.call(i,{title:n.title}))!=null?N:n.title]}),he&&pe(N_,{key:"subtitle"},{default:()=>[(B=(j=i.subtitle)==null?void 0:j.call(i,{subtitle:n.subtitle}))!=null?B:n.subtitle]}),(X=i.default)==null?void 0:X.call(i,k.value)]),Me&&pe(rl,{key:"append",defaults:{VAvatar:{density:n.density,image:n.appendAvatar},VIcon:{density:n.density,icon:n.appendIcon},VListItemAction:{end:!0}}},{default:()=>[pe("div",{class:"v-list-item__append"},[(V=i.append)==null?void 0:V.call(i,k.value),n.appendIcon&&pe(ll,{key:"append-icon"},null),n.appendAvatar&&pe(uu,{key:"append-avatar"},null)])]})]}),[[Ud("ripple"),m.value]])}),{}}}),Y_=ct({name:"VListSubheader",props:{color:String,inset:Boolean,sticky:Boolean,title:String,...ai()},setup(n,e){let{slots:t}=e;const{textColorClasses:i,textColorStyles:r}=Eh(lt(n,"color"));return Yt(()=>{var s,o;const a=!!(t.default||n.title);return pe(n.tag,{class:["v-list-subheader",{"v-list-subheader--inset":n.inset,"v-list-subheader--sticky":n.sticky},i.value],style:{textColorStyles:r}},{default:()=>[a&&pe("div",{class:"v-list-subheader__text"},[(s=(o=t.default)==null?void 0:o.call(t))!=null?s:n.title])]})}),{}}}),Yh=zo()({name:"VListChildren",props:{items:Array},setup(n,e){let{slots:t}=e;return Lh(),()=>{var i,r,s;return(i=(r=t.default)==null?void 0:r.call(t))!=null?i:(s=n.items)==null?void 0:s.map(o=>{let{children:a,props:l,type:c,raw:u}=o;if(c==="divider"){var f,d;return(f=(d=t.divider)==null?void 0:d.call(t,{props:l}))!=null?f:pe(Th,l,null)}if(c==="subheader"){var p,g;return(p=(g=t.subheader)==null?void 0:g.call(t,{props:l}))!=null?p:pe(Y_,l,{default:t.subheader})}const m={subtitle:t.subtitle?y=>{var w;return(w=t.subtitle)==null?void 0:w.call(t,{...y,item:u})}:void 0,prepend:t.prepend?y=>{var w;return(w=t.prepend)==null?void 0:w.call(t,{...y,item:u})}:void 0,append:t.append?y=>{var w;return(w=t.append)==null?void 0:w.call(t,{...y,item:u})}:void 0,default:t.default?y=>{var w;return(w=t.default)==null?void 0:w.call(t,{...y,item:u})}:void 0,title:t.title?y=>{var w;return(w=t.title)==null?void 0:w.call(t,{...y,item:u})}:void 0},[h,v]=M_(l);return a?pe(Oh,pr({value:l==null?void 0:l.value},h),{activator:y=>{let{props:w}=y;return t.header?t.header({...l,...w}):pe(lr,pr(l,w),m)},default:()=>pe(Yh,{items:a},t)}):t.item?t.item(l):pe(lr,l,m)})}}}),K_=ut({items:{type:Array,default:()=>[]},itemTitle:{type:[String,Array,Function],default:"title"},itemValue:{type:[String,Array,Function],default:"value"},itemChildren:{type:[Boolean,String,Array,Function],default:"children"},itemProps:{type:[Boolean,String,Array,Function],default:"props"},returnObject:Boolean},"item");function Z_(n,e){const t=Or(e,n.itemType,"item"),i=typeof e=="string"?e:Or(e,n.itemTitle),r=Or(e,n.itemValue,void 0),s=Or(e,n.itemChildren),o=n.itemProps===!0?dh(e,["children"])[1]:Or(e,n.itemProps),a={title:i,value:r,...o};return{type:t,title:a.title,value:a.value,props:a,children:t==="item"&&s?Kh(n,s):void 0,raw:e}}function Kh(n,e){const t=[];for(const i of e)t.push(Z_(n,i));return t}function J_(n){return{items:le(()=>Kh(n,n.items))}}const hu=zo()({name:"VList",props:{activeColor:String,activeClass:String,bgColor:String,disabled:Boolean,lines:{type:[Boolean,String],default:"one"},nav:Boolean,...__({selectStrategy:"single-leaf",openStrategy:"list"}),...rc(),...nc(),...ec(),...oc(),itemType:{type:String,default:"type"},...K_(),...Uo(),...ai(),...Ar(),...jh({variant:"text"})},emits:{"update:selected":n=>!0,"update:opened":n=>!0,"click:open":n=>!0,"click:select":n=>!0},setup(n,e){let{slots:t}=e;const{items:i}=J_(n),{themeClasses:r}=Lr(n),{backgroundColorClasses:s,backgroundColorStyles:o}=ls(lt(n,"bgColor")),{borderClasses:a}=sc(n),{densityClasses:l}=ic(n),{dimensionStyles:c}=tc(n),{elevationClasses:u}=ac(n),{roundedClasses:f}=ko(n),{open:d,select:p}=x_(n),g=le(()=>n.lines?`v-list--${n.lines}-line`:void 0),m=lt(n,"activeColor"),h=lt(n,"color");return Lh(),Oo({VListGroup:{activeColor:m,color:h},VListItem:{activeClass:lt(n,"activeClass"),activeColor:m,color:h,density:lt(n,"density"),disabled:lt(n,"disabled"),lines:lt(n,"lines"),nav:lt(n,"nav"),variant:lt(n,"variant")}}),Yt(()=>pe(n.tag,{class:["v-list",{"v-list--disabled":n.disabled,"v-list--nav":n.nav},r.value,s.value,a.value,l.value,u.value,g.value,f.value],style:[o.value,c.value]},{default:()=>[pe(Yh,{items:i.value},t)]})),{open:d,select:p}}});function Zh(){const n=De(!1);return Tr(()=>{window.requestAnimationFrame(()=>{n.value=!0})}),{ssrBootStyles:le(()=>n.value?void 0:{transition:"none !important"}),isBooted:Eo(n)}}const Q_=ct({name:"VMain",props:{scrollable:Boolean,...ai({tag:"main"})},setup(n,e){let{slots:t}=e;const{mainStyles:i}=kv(),{ssrBootStyles:r}=Zh();return Yt(()=>{var s,o;return pe(n.tag,{class:["v-main",{"v-main--scrollable":n.scrollable}],style:[i.value,r.value]},{default:()=>[n.scrollable?pe("div",{class:"v-main__scroller"},[(s=t.default)==null?void 0:s.call(t)]):(o=t.default)==null?void 0:o.call(t)]})}),{}}});const fl=Symbol.for("vuetify:display"),pu={mobileBreakpoint:"lg",thresholds:{xs:0,sm:600,md:960,lg:1280,xl:1920,xxl:2560}},e0=function(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:pu;return Nn(pu,n)};function mu(n){return an&&!n?window.innerWidth:0}function gu(n){return an&&!n?window.innerHeight:0}function t0(){const n=an?window.navigator.userAgent:"ssr";function e(g){return Boolean(n.match(g))}const t=e(/android/i),i=e(/iphone|ipad|ipod/i),r=e(/cordova/i),s=e(/electron/i),o=e(/chrome/i),a=e(/edge/i),l=e(/firefox/i),c=e(/opera/i),u=e(/win/i),f=e(/mac/i),d=e(/linux/i),p=e(/ssr/i);return{android:t,ios:i,cordova:r,electron:s,chrome:o,edge:a,firefox:l,opera:c,win:u,mac:f,linux:d,touch:fv,ssr:p}}function n0(n,e){const{thresholds:t,mobileBreakpoint:i}=e0(n),r=De(gu(e)),s=t0(),o=It({}),a=De(mu(e));function l(){r.value=gu(),a.value=mu()}return e&&Co(()=>l()),Bl(()=>{const c=a.value<t.sm,u=a.value<t.md&&!c,f=a.value<t.lg&&!(u||c),d=a.value<t.xl&&!(f||u||c),p=a.value<t.xxl&&!(d||f||u||c),g=a.value>=t.xxl,m=c?"xs":u?"sm":f?"md":d?"lg":p?"xl":"xxl",h=typeof i=="number"?i:t[i],v=s.ssr?s.android||s.ios||s.opera:a.value<h;o.xs=c,o.sm=u,o.md=f,o.lg=d,o.xl=p,o.xxl=g,o.smAndUp=!c,o.mdAndUp=!(c||u),o.lgAndUp=!(c||u||f),o.xlAndUp=!(c||u||f||d),o.smAndDown=!(f||d||p||g),o.mdAndDown=!(d||p||g),o.lgAndDown=!(p||g),o.xlAndDown=!g,o.name=m,o.height=r.value,o.width=a.value,o.mobile=v,o.mobileBreakpoint=i,o.platform=s,o.thresholds=t}),an&&window.addEventListener("resize",l,{passive:!0}),xd(o)}function i0(){const n=it(fl);if(!n)throw new Error("Could not find Vuetify display injection");return n}const vu=Symbol.for("vuetify:locale-adapter"),Ds=Symbol.for("vuetify:locale");function r0(n){return!!n&&n.hasOwnProperty("getScope")&&n.hasOwnProperty("createScope")&&n.hasOwnProperty("createRoot")}function s0(n,e){const t=r0(e)?e:l0(e),i=t.createRoot(n);return n==null||n.provide(Zl,n_(i,e)),t}const _u="$vuetify.",xu=(n,e)=>n.replace(/\{(\d+)\}/g,(t,i)=>String(e[+i])),o0=(n,e,t)=>function(i){for(var r=arguments.length,s=new Array(r>1?r-1:0),o=1;o<r;o++)s[o-1]=arguments[o];if(!i.startsWith(_u))return xu(i,s);const a=i.replace(_u,""),l=n.value&&t.value[n.value],c=e.value&&t.value[e.value];let u=nl(l,a,null);return u||(Kr(`Translation key "${i}" not found in "${n.value}", trying fallback locale`),u=nl(c,a,null)),u||(Qc(`Translation key "${i}" not found in fallback`),u=i),typeof u!="string"&&(Qc(`Translation key "${i}" has a non-string value`),u=i),xu(u,s)};function a0(n,e){return(t,i)=>new Intl.NumberFormat([n.value,e.value],i).format(t)}function l0(n){const e=t=>{const i=De(t.current),r=De(t.fallback),s=De(t.messages);return{current:i,fallback:r,messages:s,t:o0(i,r,s),n:a0(i,r)}};return{createRoot:t=>{var i,r,s;const o=e({current:(i=n==null?void 0:n.defaultLocale)!=null?i:"en",fallback:(r=n==null?void 0:n.fallbackLocale)!=null?r:"en",messages:(s=n==null?void 0:n.messages)!=null?s:{en:e_}});if(!t)throw new Error("[Vuetify] Could not find default app instance");return t.provide(Ds,o),o},getScope:()=>{const t=it(Ds);if(!t)throw new Error("[Vuetify] Could not find injected locale instance");return t},createScope:t=>{const i=it(Ds);if(!i)throw new Error("[Vuetify] Could not find injected locale instance");const r=e({current:le(()=>{var s;return(s=t==null?void 0:t.locale)!=null?s:i.current.value}),fallback:le(()=>{var s;return(s=t==null?void 0:t.locale)!=null?s:i.fallback.value}),messages:le(()=>{var s;return(s=t==null?void 0:t.messages)!=null?s:i.messages.value})});return Ot(Ds,r),r}}}function c0(n){let{rootEl:e,isSticky:t,layoutItemStyles:i}=n;const r=De(!1),s=De(0),o=le(()=>{const c=typeof r.value=="boolean"?"top":r.value;return[t.value?{top:"auto",bottom:"auto",height:void 0}:void 0,r.value?{[c]:Je(s.value)}:{top:i.value.top}]});Tr(()=>{Mt(t,c=>{c?window.addEventListener("scroll",l,{passive:!0}):window.removeEventListener("scroll",l)},{immediate:!0})}),oi(()=>{document.removeEventListener("scroll",l)});let a=0;function l(){var c;const u=a>window.scrollY?"up":"down",f=e.value.getBoundingClientRect(),d=parseFloat((c=i.value.top)!=null?c:0),p=window.scrollY-Math.max(0,s.value-d),g=f.height+Math.max(s.value,d)-window.scrollY-window.innerHeight;f.height<window.innerHeight-d?(r.value="top",s.value=d):u==="up"&&r.value==="bottom"||u==="down"&&r.value==="top"?(s.value=window.scrollY+f.top,r.value=!0):u==="down"&&g<=0?(s.value=0,r.value="bottom"):u==="up"&&p<=0&&(s.value=f.top+p,r.value="top"),a=window.scrollY}return{isStuck:r,stickyStyles:o}}const u0=100,f0=20;function yu(n){const e=1.41421356237;return(n<0?-1:1)*Math.sqrt(Math.abs(n))*e}function bu(n){if(n.length<2)return 0;if(n.length===2)return n[1].t===n[0].t?0:(n[1].d-n[0].d)/(n[1].t-n[0].t);let e=0;for(let t=n.length-1;t>0;t--){if(n[t].t===n[t-1].t)continue;const i=yu(e),r=(n[t].d-n[t-1].d)/(n[t].t-n[t-1].t);e+=(r-i)*Math.abs(r),t===n.length-1&&(e*=.5)}return yu(e)*1e3}function d0(){const n={};function e(r){Array.from(r.changedTouches).forEach(s=>{var o;((o=n[s.identifier])!=null?o:n[s.identifier]=new xv(f0)).push([r.timeStamp,s])})}function t(r){Array.from(r.changedTouches).forEach(s=>{delete n[s.identifier]})}function i(r){var s;const o=(s=n[r])==null?void 0:s.values().reverse();if(!o)throw new Error(`No samples for touch id ${r}`);const a=o[0],l=[],c=[];for(const u of o){if(a[0]-u[0]>u0)break;l.push({t:u[0],d:u[1].clientX}),c.push({t:u[0],d:u[1].clientY})}return{x:bu(l),y:bu(c),get direction(){const{x:u,y:f}=this,[d,p]=[Math.abs(u),Math.abs(f)];return d>p&&u>=0?"right":d>p&&u<=0?"left":p>d&&f>=0?"down":p>d&&f<=0?"up":h0()}}}return{addMovement:e,endTouch:t,getVelocity:i}}function h0(){throw new Error}function p0(n){let{isActive:e,isTemporary:t,width:i,touchless:r,position:s}=n;Tr(()=>{window.addEventListener("touchstart",v,{passive:!0}),window.addEventListener("touchmove",y,{passive:!1}),window.addEventListener("touchend",w,{passive:!0})}),oi(()=>{window.removeEventListener("touchstart",v),window.removeEventListener("touchmove",y),window.removeEventListener("touchend",w)});const o=le(()=>s.value!=="bottom"),{addMovement:a,endTouch:l,getVelocity:c}=d0();let u=!1;const f=De(!1),d=De(0),p=De(0);let g;function m(M,A){return(s.value==="left"?M:s.value==="right"?document.documentElement.clientWidth-M:s.value==="bottom"?document.documentElement.clientHeight-M:Vi())-(A?i.value:0)}function h(M){let A=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const L=s.value==="left"?(M-p.value)/i.value:s.value==="right"?(document.documentElement.clientWidth-M-p.value)/i.value:s.value==="bottom"?(document.documentElement.clientHeight-M-p.value)/i.value:Vi();return A?Math.max(0,Math.min(1,L)):L}function v(M){if(r.value)return;const A=M.changedTouches[0].clientX,L=M.changedTouches[0].clientY,_=25,C=s.value==="left"?A<_:s.value==="right"?A>document.documentElement.clientWidth-_:s.value==="bottom"?L>document.documentElement.clientHeight-_:Vi(),D=e.value&&(s.value==="left"?A<i.value:s.value==="right"?A>document.documentElement.clientWidth-i.value:s.value==="bottom"?L>document.documentElement.clientHeight-i.value:Vi());(C||D||e.value&&t.value)&&(u=!0,g=[A,L],p.value=m(o.value?A:L,e.value),d.value=h(o.value?A:L),l(M),a(M))}function y(M){const A=M.changedTouches[0].clientX,L=M.changedTouches[0].clientY;if(u){if(!M.cancelable){u=!1;return}const C=Math.abs(A-g[0]),D=Math.abs(L-g[1]);(o.value?C>D&&C>3:D>C&&D>3)?(f.value=!0,u=!1):(o.value?D:C)>3&&(u=!1)}if(!f.value)return;M.preventDefault(),a(M);const _=h(o.value?A:L,!1);d.value=Math.max(0,Math.min(1,_)),_>1?p.value=m(o.value?A:L,!0):_<0&&(p.value=m(o.value?A:L,!1))}function w(M){if(u=!1,!f.value)return;a(M),f.value=!1;const A=c(M.changedTouches[0].identifier),L=Math.abs(A.x),_=Math.abs(A.y);(o.value?L>_&&L>400:_>L&&_>3)?e.value=A.direction===({left:"right",right:"left",bottom:"up"}[s.value]||Vi()):e.value=d.value>.5}const S=le(()=>f.value?{transform:s.value==="left"?`translateX(calc(-100% + ${d.value*i.value}px))`:s.value==="right"?`translateX(calc(100% - ${d.value*i.value}px))`:s.value==="bottom"?`translateY(calc(100% - ${d.value*i.value}px))`:Vi(),transition:"none"}:void 0);return{isDragging:f,dragProgress:d,dragStyles:S}}function Vi(){throw new Error}const m0=["start","end","left","right","bottom"],g0=ct({name:"VNavigationDrawer",props:{color:String,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,modelValue:{type:Boolean,default:null},permanent:Boolean,rail:Boolean,railWidth:{type:[Number,String],default:56},scrim:{type:[String,Boolean],default:!0},image:String,temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},location:{type:String,default:"start",validator:n=>m0.includes(n)},sticky:Boolean,...rc(),...oc(),...Uv(),...Uo(),...ai({tag:"nav"}),...Ar()},emits:{"update:modelValue":n=>!0},setup(n,e){let{attrs:t,slots:i}=e;const{isRtl:r}=wh(),{themeClasses:s}=Lr(n),{borderClasses:o}=sc(n),{backgroundColorClasses:a,backgroundColorStyles:l}=ls(lt(n,"color")),{elevationClasses:c}=ac(n),{mobile:u}=i0(),{roundedClasses:f}=ko(n),d=q_(),p=al(n,"modelValue",null,B=>!!B),{ssrBootStyles:g}=Zh(),m=De(),h=De(!1),v=le(()=>n.rail&&n.expandOnHover&&h.value?Number(n.width):Number(n.rail?n.railWidth:n.width)),y=le(()=>bv(n.location,r.value)),w=le(()=>!n.permanent&&(u.value||n.temporary)),S=le(()=>n.sticky&&!w.value&&y.value!=="bottom");n.disableResizeWatcher||Mt(w,B=>!n.permanent&&(p.value=!B)),!n.disableRouteWatcher&&d&&Mt(d.currentRoute,()=>w.value&&(p.value=!1)),Mt(()=>n.permanent,B=>{B&&(p.value=!0)}),Vl(()=>{n.modelValue!=null||w.value||(p.value=n.permanent||!u.value)});const{isDragging:M,dragProgress:A,dragStyles:L}=p0({isActive:p,isTemporary:w,width:v,touchless:lt(n,"touchless"),position:y}),_=le(()=>{const B=w.value?0:n.rail&&n.expandOnHover?Number(n.railWidth):v.value;return M.value?B*A.value:B}),{layoutItemStyles:C,layoutRect:D,layoutItemScrimStyles:O}=Vv({id:n.name,order:le(()=>parseInt(n.order,10)),position:y,layoutSize:_,elementSize:v,active:le(()=>p.value||M.value),disableTransitions:le(()=>M.value),absolute:le(()=>n.absolute||S.value&&typeof k.value!="string")}),{isStuck:k,stickyStyles:J}=c0({rootEl:m,isSticky:S,layoutItemStyles:C}),N=ls(le(()=>typeof n.scrim=="string"?n.scrim:null)),ee=le(()=>({...M.value?{opacity:A.value*.2,transition:"none"}:void 0,...D.value?{left:Je(D.value.left),right:Je(D.value.right),top:Je(D.value.top),bottom:Je(D.value.bottom)}:void 0,...O.value}));return Oo({VList:{bgColor:"transparent"}}),Yt(()=>{var B,j,X,V;const Y=i.image||n.image;return pe(Ct,null,[pe(n.tag,pr({ref:m,onMouseenter:()=>h.value=!0,onMouseleave:()=>h.value=!1,class:["v-navigation-drawer",`v-navigation-drawer--${y.value}`,{"v-navigation-drawer--expand-on-hover":n.expandOnHover,"v-navigation-drawer--floating":n.floating,"v-navigation-drawer--is-hovering":h.value,"v-navigation-drawer--rail":n.rail,"v-navigation-drawer--temporary":w.value,"v-navigation-drawer--active":p.value,"v-navigation-drawer--sticky":S.value},s.value,a.value,o.value,c.value,f.value],style:[l.value,C.value,L.value,g.value,J.value]},t),{default:()=>[Y&&pe("div",{key:"image",class:"v-navigation-drawer__img"},[i.image?(B=i.image)==null?void 0:B.call(i,{image:n.image}):pe("img",{src:n.image,alt:""},null)]),i.prepend&&pe("div",{class:"v-navigation-drawer__prepend"},[(j=i.prepend)==null?void 0:j.call(i)]),pe("div",{class:"v-navigation-drawer__content"},[(X=i.default)==null?void 0:X.call(i)]),i.append&&pe("div",{class:"v-navigation-drawer__append"},[(V=i.append)==null?void 0:V.call(i)])]}),pe(Cr,{name:"fade-transition"},{default:()=>[w.value&&(M.value||p.value)&&!!n.scrim&&pe("div",{class:["v-navigation-drawer__scrim",N.backgroundColorClasses.value],style:[ee.value,N.backgroundColorStyles.value],onClick:()=>p.value=!1},null)]})])}),{isStuck:k}}}),v0={name:"App",data:()=>({logo:uv})};function _0(n,e,t,i,r,s){const o=zd("router-view");return ql(),Kd(r_,null,{default:sr(()=>[pe(g0,{"expand-on-hover":"",rail:""},{default:sr(()=>[pe(hu,null,{default:sr(()=>[pe(lr,{"prepend-avatar":n.logo,title:"Halite"},null,8,["prepend-avatar"])]),_:1}),pe(Th),pe(hu,{density:"compact",nav:""},{default:sr(()=>[pe(lr,{"prepend-icon":"mdi-flask-empty-outline",title:"Projects",value:"myfiles"}),pe(lr,{"prepend-icon":"mdi-account-multiple",title:"About me",value:"shared"}),pe(lr,{"prepend-icon":"mdi-book-open",title:"Learn",value:"starred"})]),_:1})]),_:1}),pe(Q_,null,{default:sr(()=>[pe(o)]),_:1})]),_:1})}const x0=jl(v0,[["render",_0]]),y0="modulepreload",b0=function(n){return"/"+n},Su={},Jh=function(e,t,i){return!t||t.length===0?e():Promise.all(t.map(r=>{if(r=b0(r),r in Su)return;Su[r]=!0;const s=r.endsWith(".css"),o=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${o}`))return;const a=document.createElement("link");if(a.rel=s?"stylesheet":y0,s||(a.as="script",a.crossOrigin=""),a.href=r,document.head.appendChild(a),s)return new Promise((l,c)=>{a.addEventListener("load",l),a.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())};/*!
  * vue-router v4.1.2
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const or=typeof window<"u";function S0(n){return n.__esModule||n[Symbol.toStringTag]==="Module"}const je=Object.assign;function sa(n,e){const t={};for(const i in e){const r=e[i];t[i]=ln(r)?r.map(n):n(r)}return t}const Zr=()=>{},ln=Array.isArray,M0=/\/$/,w0=n=>n.replace(M0,"");function oa(n,e,t="/"){let i,r={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),s=e.slice(l+1,a>-1?a:e.length),r=n(s)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=A0(i!=null?i:e,t),{fullPath:i+(s&&"?")+s+o,path:i,query:r,hash:o}}function E0(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function Mu(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function T0(n,e,t){const i=e.matched.length-1,r=t.matched.length-1;return i>-1&&i===r&&gr(e.matched[i],t.matched[r])&&Qh(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function gr(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function Qh(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!C0(n[t],e[t]))return!1;return!0}function C0(n,e){return ln(n)?wu(n,e):ln(e)?wu(e,n):n===e}function wu(n,e){return ln(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function A0(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/");let r=t.length-1,s,o;for(s=0;s<i.length;s++)if(o=i[s],o!==".")if(o==="..")r>1&&r--;else break;return t.slice(0,r).join("/")+"/"+i.slice(s-(s===i.length?1:0)).join("/")}var ds;(function(n){n.pop="pop",n.push="push"})(ds||(ds={}));var Jr;(function(n){n.back="back",n.forward="forward",n.unknown=""})(Jr||(Jr={}));function L0(n){if(!n)if(or){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),w0(n)}const R0=/^[^#]+#/;function P0(n,e){return n.replace(R0,"#")+e}function D0(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const Vo=()=>({left:window.pageXOffset,top:window.pageYOffset});function I0(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),r=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!r)return;e=D0(r,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Eu(n,e){return(history.state?history.state.position-e:-1)+n}const dl=new Map;function F0(n,e){dl.set(n,e)}function N0(n){const e=dl.get(n);return dl.delete(n),e}let O0=()=>location.protocol+"//"+location.host;function ep(n,e){const{pathname:t,search:i,hash:r}=e,s=n.indexOf("#");if(s>-1){let a=r.includes(n.slice(s))?n.slice(s).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),Mu(l,"")}return Mu(t,n)+i+r}function z0(n,e,t,i){let r=[],s=[],o=null;const a=({state:d})=>{const p=ep(n,location),g=t.value,m=e.value;let h=0;if(d){if(t.value=p,e.value=d,o&&o===g){o=null;return}h=m?d.position-m.position:0}else i(p);r.forEach(v=>{v(t.value,g,{delta:h,type:ds.pop,direction:h?h>0?Jr.forward:Jr.back:Jr.unknown})})};function l(){o=t.value}function c(d){r.push(d);const p=()=>{const g=r.indexOf(d);g>-1&&r.splice(g,1)};return s.push(p),p}function u(){const{history:d}=window;!d.state||d.replaceState(je({},d.state,{scroll:Vo()}),"")}function f(){for(const d of s)d();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:f}}function Tu(n,e,t,i=!1,r=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:r?Vo():null}}function B0(n){const{history:e,location:t}=window,i={value:ep(n,t)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=n.indexOf("#"),d=f>-1?(t.host&&document.querySelector("base")?n:n.slice(f))+l:O0()+n+l;try{e[u?"replaceState":"pushState"](c,"",d),r.value=c}catch(p){console.error(p),t[u?"replace":"assign"](d)}}function o(l,c){const u=je({},e.state,Tu(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),i.value=l}function a(l,c){const u=je({},r.value,e.state,{forward:l,scroll:Vo()});s(u.current,u,!0);const f=je({},Tu(i.value,l,null),{position:u.position+1},c);s(l,f,!1),i.value=l}return{location:i,state:r,push:a,replace:o}}function U0(n){n=L0(n);const e=B0(n),t=z0(n,e.state,e.location,e.replace);function i(s,o=!0){o||t.pauseListeners(),history.go(s)}const r=je({location:"",base:n,go:i,createHref:P0.bind(null,n)},e,t);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function k0(n){return typeof n=="string"||n&&typeof n=="object"}function tp(n){return typeof n=="string"||typeof n=="symbol"}const Gn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},np=Symbol("");var Cu;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(Cu||(Cu={}));function vr(n,e){return je(new Error,{type:n,[np]:!0},e)}function Hn(n,e){return n instanceof Error&&np in n&&(e==null||!!(n.type&e))}const Au="[^/]+?",V0={sensitive:!1,strict:!1,start:!0,end:!0},G0=/[.+*?^${}()[\]/\\]/g;function H0(n,e){const t=je({},V0,e),i=[];let r=t.start?"^":"";const s=[];for(const c of n){const u=c.length?[]:[90];t.strict&&!c.length&&(r+="/");for(let f=0;f<c.length;f++){const d=c[f];let p=40+(t.sensitive?.25:0);if(d.type===0)f||(r+="/"),r+=d.value.replace(G0,"\\$&"),p+=40;else if(d.type===1){const{value:g,repeatable:m,optional:h,regexp:v}=d;s.push({name:g,repeatable:m,optional:h});const y=v||Au;if(y!==Au){p+=10;try{new RegExp(`(${y})`)}catch(S){throw new Error(`Invalid custom RegExp for param "${g}" (${y}): `+S.message)}}let w=m?`((?:${y})(?:/(?:${y}))*)`:`(${y})`;f||(w=h&&c.length<2?`(?:/${w})`:"/"+w),h&&(w+="?"),r+=w,p+=20,h&&(p+=-8),m&&(p+=-20),y===".*"&&(p+=-50)}u.push(p)}i.push(u)}if(t.strict&&t.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}t.strict||(r+="/?"),t.end?r+="$":t.strict&&(r+="(?:/|$)");const o=new RegExp(r,t.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let d=1;d<u.length;d++){const p=u[d]||"",g=s[d-1];f[g.name]=p&&g.repeatable?p.split("/"):p}return f}function l(c){let u="",f=!1;for(const d of n){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const p of d)if(p.type===0)u+=p.value;else if(p.type===1){const{value:g,repeatable:m,optional:h}=p,v=g in c?c[g]:"";if(ln(v)&&!m)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const y=ln(v)?v.join("/"):v;if(!y)if(h)d.length<2&&n.length>1&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${g}"`);u+=y}}return u}return{re:o,score:i,keys:s,parse:a,stringify:l}}function W0(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===40+40?-1:1:n.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function $0(n,e){let t=0;const i=n.score,r=e.score;for(;t<i.length&&t<r.length;){const s=W0(i[t],r[t]);if(s)return s;t++}if(Math.abs(r.length-i.length)===1){if(Lu(i))return 1;if(Lu(r))return-1}return r.length-i.length}function Lu(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const q0={type:0,value:""},X0=/[a-zA-Z0-9_]/;function j0(n){if(!n)return[[]];if(n==="/")return[[q0]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(p){throw new Error(`ERR (${t})/"${c}": ${p}`)}let t=0,i=t;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,c="",u="";function f(){!c||(t===0?s.push({type:0,value:c}):t===1||t===2||t===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&t!==2){i=t,t=4;continue}switch(t){case 0:l==="/"?(c&&f(),o()):l===":"?(f(),t=1):d();break;case 4:d(),t=i;break;case 1:l==="("?t=2:X0.test(l)?d():(f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=3:u+=l;break;case 3:f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),r}function Y0(n,e,t){const i=H0(j0(n.path),t),r=je(i,{record:n,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function K0(n,e){const t=[],i=new Map;e=Pu({strict:!1,end:!0,sensitive:!1},e);function r(u){return i.get(u)}function s(u,f,d){const p=!d,g=J0(u);g.aliasOf=d&&d.record;const m=Pu(e,u),h=[g];if("alias"in u){const w=typeof u.alias=="string"?[u.alias]:u.alias;for(const S of w)h.push(je({},g,{components:d?d.record.components:g.components,path:S,aliasOf:d?d.record:g}))}let v,y;for(const w of h){const{path:S}=w;if(f&&S[0]!=="/"){const M=f.record.path,A=M[M.length-1]==="/"?"":"/";w.path=f.record.path+(S&&A+S)}if(v=Y0(w,f,m),d?d.alias.push(v):(y=y||v,y!==v&&y.alias.push(v),p&&u.name&&!Ru(v)&&o(u.name)),g.children){const M=g.children;for(let A=0;A<M.length;A++)s(M[A],v,d&&d.children[A])}d=d||v,l(v)}return y?()=>{o(y)}:Zr}function o(u){if(tp(u)){const f=i.get(u);f&&(i.delete(u),t.splice(t.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=t.indexOf(u);f>-1&&(t.splice(f,1),u.record.name&&i.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return t}function l(u){let f=0;for(;f<t.length&&$0(u,t[f])>=0&&(u.record.path!==t[f].record.path||!ip(u,t[f]));)f++;t.splice(f,0,u),u.record.name&&!Ru(u)&&i.set(u.record.name,u)}function c(u,f){let d,p={},g,m;if("name"in u&&u.name){if(d=i.get(u.name),!d)throw vr(1,{location:u});m=d.record.name,p=je(Z0(f.params,d.keys.filter(y=>!y.optional).map(y=>y.name)),u.params),g=d.stringify(p)}else if("path"in u)g=u.path,d=t.find(y=>y.re.test(g)),d&&(p=d.parse(g),m=d.record.name);else{if(d=f.name?i.get(f.name):t.find(y=>y.re.test(f.path)),!d)throw vr(1,{location:u,currentLocation:f});m=d.record.name,p=je({},f.params,u.params),g=d.stringify(p)}const h=[];let v=d;for(;v;)h.unshift(v.record),v=v.parent;return{name:m,path:g,params:p,matched:h,meta:ex(h)}}return n.forEach(u=>s(u)),{addRoute:s,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function Z0(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function J0(n){return{path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:void 0,beforeEnter:n.beforeEnter,props:Q0(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}}}function Q0(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="boolean"?t:t[i];return e}function Ru(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function ex(n){return n.reduce((e,t)=>je(e,t.meta),{})}function Pu(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}function ip(n,e){return e.children.some(t=>t===n||ip(n,t))}const rp=/#/g,tx=/&/g,nx=/\//g,ix=/=/g,rx=/\?/g,sp=/\+/g,sx=/%5B/g,ox=/%5D/g,op=/%5E/g,ax=/%60/g,ap=/%7B/g,lx=/%7C/g,lp=/%7D/g,cx=/%20/g;function lc(n){return encodeURI(""+n).replace(lx,"|").replace(sx,"[").replace(ox,"]")}function ux(n){return lc(n).replace(ap,"{").replace(lp,"}").replace(op,"^")}function hl(n){return lc(n).replace(sp,"%2B").replace(cx,"+").replace(rp,"%23").replace(tx,"%26").replace(ax,"`").replace(ap,"{").replace(lp,"}").replace(op,"^")}function fx(n){return hl(n).replace(ix,"%3D")}function dx(n){return lc(n).replace(rp,"%23").replace(rx,"%3F")}function hx(n){return n==null?"":dx(n).replace(nx,"%2F")}function xo(n){try{return decodeURIComponent(""+n)}catch{}return""+n}function px(n){const e={};if(n===""||n==="?")return e;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(sp," "),o=s.indexOf("="),a=xo(o<0?s:s.slice(0,o)),l=o<0?null:xo(s.slice(o+1));if(a in e){let c=e[a];ln(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Du(n){let e="";for(let t in n){const i=n[t];if(t=fx(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(ln(i)?i.map(s=>s&&hl(s)):[i&&hl(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+t,s!=null&&(e+="="+s))})}return e}function mx(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=ln(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const gx=Symbol(""),Iu=Symbol(""),cc=Symbol(""),cp=Symbol(""),pl=Symbol("");function Br(){let n=[];function e(i){return n.push(i),()=>{const r=n.indexOf(i);r>-1&&n.splice(r,1)}}function t(){n=[]}return{add:e,list:()=>n,reset:t}}function ei(n,e,t,i,r){const s=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const l=f=>{f===!1?a(vr(4,{from:t,to:e})):f instanceof Error?a(f):k0(f)?a(vr(2,{from:e,to:f})):(s&&i.enterCallbacks[r]===s&&typeof f=="function"&&s.push(f),o())},c=n.call(i&&i.instances[r],e,t,l);let u=Promise.resolve(c);n.length<3&&(u=u.then(l)),u.catch(f=>a(f))})}function aa(n,e,t,i){const r=[];for(const s of n)for(const o in s.components){let a=s.components[o];if(!(e!=="beforeRouteEnter"&&!s.instances[o]))if(vx(a)){const c=(a.__vccOpts||a)[e];c&&r.push(ei(c,t,i,s,o))}else{let l=a();r.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const u=S0(c)?c.default:c;s.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&ei(d,t,i,s,o)()}))}}return r}function vx(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function Fu(n){const e=it(cc),t=it(cp),i=le(()=>e.resolve(sn(n.to))),r=le(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=t.matched;if(!u||!f.length)return-1;const d=f.findIndex(gr.bind(null,u));if(d>-1)return d;const p=Nu(l[c-2]);return c>1&&Nu(u)===p&&f[f.length-1].path!==p?f.findIndex(gr.bind(null,l[c-2])):d}),s=le(()=>r.value>-1&&bx(t.params,i.value.params)),o=le(()=>r.value>-1&&r.value===t.matched.length-1&&Qh(t.params,i.value.params));function a(l={}){return yx(l)?e[sn(n.replace)?"replace":"push"](sn(n.to)).catch(Zr):Promise.resolve()}return{route:i,href:le(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}const _x=gs({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Fu,setup(n,{slots:e}){const t=It(Fu(n)),{options:i}=it(cc),r=le(()=>({[Ou(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[Ou(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=e.default&&e.default(t);return n.custom?s:zn("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:r.value},s)}}}),xx=_x;function yx(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function bx(n,e){for(const t in e){const i=e[t],r=n[t];if(typeof i=="string"){if(i!==r)return!1}else if(!ln(r)||r.length!==i.length||i.some((s,o)=>s!==r[o]))return!1}return!0}function Nu(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const Ou=(n,e,t)=>n!=null?n:e!=null?e:t,Sx=gs({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=it(pl),r=le(()=>n.route||i.value),s=it(Iu,0),o=le(()=>{let c=sn(s);const{matched:u}=r.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=le(()=>r.value.matched[o.value]);Ot(Iu,le(()=>o.value+1)),Ot(gx,a),Ot(pl,r);const l=De();return Mt(()=>[l.value,a.value,n.name],([c,u,f],[d,p,g])=>{u&&(u.instances[f]=c,p&&p!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!gr(u,p)||!d)&&(u.enterCallbacks[f]||[]).forEach(m=>m(c))},{flush:"post"}),()=>{const c=r.value,u=a.value,f=u&&u.components[n.name],d=n.name;if(!f)return zu(t.default,{Component:f,route:c});const p=u.props[n.name],g=p?p===!0?c.params:typeof p=="function"?p(c):p:null,h=zn(f,je({},g,e,{onVnodeUnmounted:v=>{v.component.isUnmounted&&(u.instances[d]=null)},ref:l}));return zu(t.default,{Component:h,route:c})||h}}});function zu(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const Mx=Sx;function wx(n){const e=K0(n.routes,n),t=n.parseQuery||px,i=n.stringifyQuery||Du,r=n.history,s=Br(),o=Br(),a=Br(),l=gd(Gn);let c=Gn;or&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=sa.bind(null,z=>""+z),f=sa.bind(null,hx),d=sa.bind(null,xo);function p(z,F){let re,ae;return tp(z)?(re=e.getRecordMatcher(z),ae=F):ae=z,e.addRoute(ae,re)}function g(z){const F=e.getRecordMatcher(z);F&&e.removeRoute(F)}function m(){return e.getRoutes().map(z=>z.record)}function h(z){return!!e.getRecordMatcher(z)}function v(z,F){if(F=je({},F||l.value),typeof z=="string"){const ve=oa(t,z,F.path),E=e.resolve({path:ve.path},F),R=r.createHref(ve.fullPath);return je(ve,E,{params:d(E.params),hash:xo(ve.hash),redirectedFrom:void 0,href:R})}let re;if("path"in z)re=je({},z,{path:oa(t,z.path,F.path).path});else{const ve=je({},z.params);for(const E in ve)ve[E]==null&&delete ve[E];re=je({},z,{params:f(z.params)}),F.params=f(F.params)}const ae=e.resolve(re,F),be=z.hash||"";ae.params=u(d(ae.params));const ge=E0(i,je({},z,{hash:ux(be),path:ae.path})),Ce=r.createHref(ge);return je({fullPath:ge,hash:be,query:i===Du?mx(z.query):z.query||{}},ae,{redirectedFrom:void 0,href:Ce})}function y(z){return typeof z=="string"?oa(t,z,l.value.path):je({},z)}function w(z,F){if(c!==z)return vr(8,{from:F,to:z})}function S(z){return L(z)}function M(z){return S(je(y(z),{replace:!0}))}function A(z){const F=z.matched[z.matched.length-1];if(F&&F.redirect){const{redirect:re}=F;let ae=typeof re=="function"?re(z):re;return typeof ae=="string"&&(ae=ae.includes("?")||ae.includes("#")?ae=y(ae):{path:ae},ae.params={}),je({query:z.query,hash:z.hash,params:"path"in ae?{}:z.params},ae)}}function L(z,F){const re=c=v(z),ae=l.value,be=z.state,ge=z.force,Ce=z.replace===!0,ve=A(re);if(ve)return L(je(y(ve),{state:be,force:ge,replace:Ce}),F||re);const E=re;E.redirectedFrom=F;let R;return!ge&&T0(i,ae,re)&&(R=vr(16,{to:E,from:ae}),Y(ae,ae,!0,!1)),(R?Promise.resolve(R):C(E,ae)).catch(G=>Hn(G)?Hn(G,2)?G:V(G):j(G,E,ae)).then(G=>{if(G){if(Hn(G,2))return L(je(y(G.to),{state:be,force:ge,replace:Ce}),F||E)}else G=O(E,ae,!0,Ce,be);return D(E,ae,G),G})}function _(z,F){const re=w(z,F);return re?Promise.reject(re):Promise.resolve()}function C(z,F){let re;const[ae,be,ge]=Ex(z,F);re=aa(ae.reverse(),"beforeRouteLeave",z,F);for(const ve of ae)ve.leaveGuards.forEach(E=>{re.push(ei(E,z,F))});const Ce=_.bind(null,z,F);return re.push(Ce),Gi(re).then(()=>{re=[];for(const ve of s.list())re.push(ei(ve,z,F));return re.push(Ce),Gi(re)}).then(()=>{re=aa(be,"beforeRouteUpdate",z,F);for(const ve of be)ve.updateGuards.forEach(E=>{re.push(ei(E,z,F))});return re.push(Ce),Gi(re)}).then(()=>{re=[];for(const ve of z.matched)if(ve.beforeEnter&&!F.matched.includes(ve))if(ln(ve.beforeEnter))for(const E of ve.beforeEnter)re.push(ei(E,z,F));else re.push(ei(ve.beforeEnter,z,F));return re.push(Ce),Gi(re)}).then(()=>(z.matched.forEach(ve=>ve.enterCallbacks={}),re=aa(ge,"beforeRouteEnter",z,F),re.push(Ce),Gi(re))).then(()=>{re=[];for(const ve of o.list())re.push(ei(ve,z,F));return re.push(Ce),Gi(re)}).catch(ve=>Hn(ve,8)?ve:Promise.reject(ve))}function D(z,F,re){for(const ae of a.list())ae(z,F,re)}function O(z,F,re,ae,be){const ge=w(z,F);if(ge)return ge;const Ce=F===Gn,ve=or?history.state:{};re&&(ae||Ce?r.replace(z.fullPath,je({scroll:Ce&&ve&&ve.scroll},be)):r.push(z.fullPath,be)),l.value=z,Y(z,F,re,Ce),V()}let k;function J(){k||(k=r.listen((z,F,re)=>{if(!Me.listening)return;const ae=v(z),be=A(ae);if(be){L(je(be,{replace:!0}),ae).catch(Zr);return}c=ae;const ge=l.value;or&&F0(Eu(ge.fullPath,re.delta),Vo()),C(ae,ge).catch(Ce=>Hn(Ce,12)?Ce:Hn(Ce,2)?(L(Ce.to,ae).then(ve=>{Hn(ve,20)&&!re.delta&&re.type===ds.pop&&r.go(-1,!1)}).catch(Zr),Promise.reject()):(re.delta&&r.go(-re.delta,!1),j(Ce,ae,ge))).then(Ce=>{Ce=Ce||O(ae,ge,!1),Ce&&(re.delta?r.go(-re.delta,!1):re.type===ds.pop&&Hn(Ce,20)&&r.go(-1,!1)),D(ae,ge,Ce)}).catch(Zr)}))}let N=Br(),ee=Br(),B;function j(z,F,re){V(z);const ae=ee.list();return ae.length?ae.forEach(be=>be(z,F,re)):console.error(z),Promise.reject(z)}function X(){return B&&l.value!==Gn?Promise.resolve():new Promise((z,F)=>{N.add([z,F])})}function V(z){return B||(B=!z,J(),N.list().forEach(([F,re])=>z?re(z):F()),N.reset()),z}function Y(z,F,re,ae){const{scrollBehavior:be}=n;if(!or||!be)return Promise.resolve();const ge=!re&&N0(Eu(z.fullPath,0))||(ae||!re)&&history.state&&history.state.scroll||null;return Co().then(()=>be(z,F,ge)).then(Ce=>Ce&&I0(Ce)).catch(Ce=>j(Ce,z,F))}const fe=z=>r.go(z);let ie;const he=new Set,Me={currentRoute:l,listening:!0,addRoute:p,removeRoute:g,hasRoute:h,getRoutes:m,resolve:v,options:n,push:S,replace:M,go:fe,back:()=>fe(-1),forward:()=>fe(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:ee.add,isReady:X,install(z){const F=this;z.component("RouterLink",xx),z.component("RouterView",Mx),z.config.globalProperties.$router=F,Object.defineProperty(z.config.globalProperties,"$route",{enumerable:!0,get:()=>sn(l)}),or&&!ie&&l.value===Gn&&(ie=!0,S(r.location).catch(be=>{}));const re={};for(const be in Gn)re[be]=le(()=>l.value[be]);z.provide(cc,F),z.provide(cp,It(re)),z.provide(pl,l);const ae=z.unmount;he.add(z),z.unmount=function(){he.delete(z),he.size<1&&(c=Gn,k&&k(),k=null,l.value=Gn,ie=!1,B=!1),ae()}}};return Me}function Gi(n){return n.reduce((e,t)=>e.then(()=>t()),Promise.resolve())}function Ex(n,e){const t=[],i=[],r=[],s=Math.max(e.matched.length,n.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(n.matched.find(c=>gr(c,a))?i.push(a):t.push(a));const l=n.matched[o];l&&(e.matched.find(c=>gr(c,l))||r.push(l))}return[t,i,r]}/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const uc="143",Tx=0,Bu=1,Cx=2,up=1,Ax=2,Wr=3,hs=0,on=1,_r=2,Lx=1,ii=0,dr=1,Uu=2,ku=3,Vu=4,Rx=5,ar=100,Px=101,Dx=102,Gu=103,Hu=104,Ix=200,Fx=201,Nx=202,Ox=203,fp=204,dp=205,zx=206,Bx=207,Ux=208,kx=209,Vx=210,Gx=0,Hx=1,Wx=2,ml=3,$x=4,qx=5,Xx=6,jx=7,hp=0,Yx=1,Kx=2,In=0,Zx=1,Jx=2,Qx=3,ey=4,ty=5,pp=300,xr=301,yr=302,gl=303,vl=304,Go=306,_l=1e3,tn=1001,xl=1002,At=1003,Wu=1004,$u=1005,Ht=1006,ny=1007,Ho=1008,Pi=1009,iy=1010,ry=1011,mp=1012,sy=1013,wi=1014,Ei=1015,ps=1016,oy=1017,ay=1018,hr=1020,ly=1021,cy=1022,gn=1023,uy=1024,fy=1025,Li=1026,br=1027,dy=1028,hy=1029,py=1030,my=1031,gy=1033,la=33776,ca=33777,ua=33778,fa=33779,qu=35840,Xu=35841,ju=35842,Yu=35843,vy=36196,Ku=37492,Zu=37496,Ju=37808,Qu=37809,ef=37810,tf=37811,nf=37812,rf=37813,sf=37814,of=37815,af=37816,lf=37817,cf=37818,uf=37819,ff=37820,df=37821,hf=36492,Di=3e3,nt=3001,_y=3200,xy=3201,yy=0,by=1,Cn="srgb",Ti="srgb-linear",da=7680,Sy=519,pf=35044,mf="300 es",yl=1035;class Rr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ha=Math.PI/180,gf=180/Math.PI;function _s(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(xt[n&255]+xt[n>>8&255]+xt[n>>16&255]+xt[n>>24&255]+"-"+xt[e&255]+xt[e>>8&255]+"-"+xt[e>>16&15|64]+xt[e>>24&255]+"-"+xt[t&63|128]+xt[t>>8&255]+"-"+xt[t>>16&255]+xt[t>>24&255]+xt[i&255]+xt[i>>8&255]+xt[i>>16&255]+xt[i>>24&255]).toLowerCase()}function Dt(n,e,t){return Math.max(e,Math.min(t,n))}function My(n,e){return(n%e+e)%e}function pa(n,e,t){return(1-t)*n+t*e}function vf(n){return(n&n-1)===0&&n!==0}function bl(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}class Ke{constructor(e=0,t=0){Ke.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qt{constructor(){qt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],p=i[5],g=i[8],m=r[0],h=r[3],v=r[6],y=r[1],w=r[4],S=r[7],M=r[2],A=r[5],L=r[8];return s[0]=o*m+a*y+l*M,s[3]=o*h+a*w+l*A,s[6]=o*v+a*S+l*L,s[1]=c*m+u*y+f*M,s[4]=c*h+u*w+f*A,s[7]=c*v+u*S+f*L,s[2]=d*m+p*y+g*M,s[5]=d*h+p*w+g*A,s[8]=d*v+p*S+g*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*s,p=c*s-o*l,g=t*f+i*d+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/g;return e[0]=f*m,e[1]=(r*c-u*i)*m,e[2]=(a*i-r*o)*m,e[3]=d*m,e[4]=(u*t-r*l)*m,e[5]=(r*s-a*t)*m,e[6]=p*m,e[7]=(i*l-c*t)*m,e[8]=(o*t-i*s)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=t,i[4]*=t,i[7]*=t,this}rotate(e){const t=Math.cos(e),i=Math.sin(e),r=this.elements,s=r[0],o=r[3],a=r[6],l=r[1],c=r[4],u=r[7];return r[0]=t*s+i*l,r[3]=t*o+i*c,r[6]=t*a+i*u,r[1]=-i*s+t*l,r[4]=-i*o+t*c,r[7]=-i*a+t*u,this}translate(e,t){const i=this.elements;return i[0]+=e*i[2],i[3]+=e*i[5],i[6]+=e*i[8],i[1]+=t*i[2],i[4]+=t*i[5],i[7]+=t*i[8],this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function gp(n){for(let e=n.length-1;e>=0;--e)if(n[e]>65535)return!0;return!1}function yo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Ri(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function so(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const ma={[Cn]:{[Ti]:Ri},[Ti]:{[Cn]:so}},Kt={legacyMode:!0,get workingColorSpace(){return Ti},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.legacyMode||e===t||!e||!t)return n;if(ma[e]&&ma[e][t]!==void 0){const i=ma[e][t];return n.r=i(n.r),n.g=i(n.g),n.b=i(n.b),n}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}},vp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},at={r:0,g:0,b:0},Zt={h:0,s:0,l:0},Is={h:0,s:0,l:0};function ga(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function Fs(n,e){return e.r=n.r,e.g=n.g,e.b=n.b,e}class Ze{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Cn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Kt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Ti){return this.r=e,this.g=t,this.b=i,Kt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Ti){if(e=My(e,1),t=Dt(t,0,1),i=Dt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=ga(o,s,e+1/3),this.g=ga(o,s,e),this.b=ga(o,s,e-1/3)}return Kt.toWorkingColorSpace(this,r),this}setStyle(e,t=Cn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Kt.toWorkingColorSpace(this,t),i(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Kt.toWorkingColorSpace(this,t),i(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,c=parseInt(s[2],10)/100,u=parseInt(s[3],10)/100;return i(s[4]),this.setHSL(l,c,u,t)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Kt.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Kt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Cn){const i=vp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ri(e.r),this.g=Ri(e.g),this.b=Ri(e.b),this}copyLinearToSRGB(e){return this.r=so(e.r),this.g=so(e.g),this.b=so(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Cn){return Kt.fromWorkingColorSpace(Fs(this,at),e),Dt(at.r*255,0,255)<<16^Dt(at.g*255,0,255)<<8^Dt(at.b*255,0,255)<<0}getHexString(e=Cn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ti){Kt.fromWorkingColorSpace(Fs(this,at),t);const i=at.r,r=at.g,s=at.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ti){return Kt.fromWorkingColorSpace(Fs(this,at),t),e.r=at.r,e.g=at.g,e.b=at.b,e}getStyle(e=Cn){return Kt.fromWorkingColorSpace(Fs(this,at),e),e!==Cn?`color(${e} ${at.r} ${at.g} ${at.b})`:`rgb(${at.r*255|0},${at.g*255|0},${at.b*255|0})`}offsetHSL(e,t,i){return this.getHSL(Zt),Zt.h+=e,Zt.s+=t,Zt.l+=i,this.setHSL(Zt.h,Zt.s,Zt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Zt),e.getHSL(Is);const i=pa(Zt.h,Is.h,t),r=pa(Zt.s,Is.s,t),s=pa(Zt.l,Is.l,t);return this.setHSL(i,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Ze.NAMES=vp;let Hi;class _p{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Hi===void 0&&(Hi=yo("canvas")),Hi.width=e.width,Hi.height=e.height;const i=Hi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Hi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=yo("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ri(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ri(t[i]/255)*255):t[i]=Ri(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class xp{constructor(e=null){this.isSource=!0,this.uuid=_s(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(va(r[o].image)):s.push(va(r[o]))}else s=va(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function va(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?_p.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let wy=0;class cn extends Rr{constructor(e=cn.DEFAULT_IMAGE,t=cn.DEFAULT_MAPPING,i=tn,r=tn,s=Ht,o=Ho,a=gn,l=Pi,c=1,u=Di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wy++}),this.uuid=_s(),this.name="",this.source=new xp(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==pp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _l:e.x=e.x-Math.floor(e.x);break;case tn:e.x=e.x<0?0:1;break;case xl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _l:e.y=e.y-Math.floor(e.y);break;case tn:e.y=e.y<0?0:1;break;case xl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=pp;class pt{constructor(e=0,t=0,i=0,r=1){pt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],p=l[5],g=l[9],m=l[2],h=l[6],v=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-m)<.01&&Math.abs(g-h)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+m)<.1&&Math.abs(g+h)<.1&&Math.abs(c+p+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(c+1)/2,S=(p+1)/2,M=(v+1)/2,A=(u+d)/4,L=(f+m)/4,_=(g+h)/4;return w>S&&w>M?w<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(w),r=A/i,s=L/i):S>M?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=A/r,s=_/r):M<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(M),i=L/s,r=_/s),this.set(i,r,s,t),this}let y=Math.sqrt((h-g)*(h-g)+(f-m)*(f-m)+(d-u)*(d-u));return Math.abs(y)<.001&&(y=1),this.x=(h-g)/y,this.y=(f-m)/y,this.z=(d-u)/y,this.w=Math.acos((c+p+v-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ii extends Rr{constructor(e,t,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new cn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Ht,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new xp(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class yp extends cn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=At,this.minFilter=At,this.wrapR=tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ey extends cn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=At,this.minFilter=At,this.wrapR=tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xs{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const d=s[o+0],p=s[o+1],g=s[o+2],m=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=m;return}if(f!==m||l!==d||c!==p||u!==g){let h=1-a;const v=l*d+c*p+u*g+f*m,y=v>=0?1:-1,w=1-v*v;if(w>Number.EPSILON){const M=Math.sqrt(w),A=Math.atan2(M,v*y);h=Math.sin(h*A)/M,a=Math.sin(a*A)/M}const S=a*y;if(l=l*h+d*S,c=c*h+p*S,u=u*h+g*S,f=f*h+m*S,h===1-a){const M=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=M,c*=M,u*=M,f*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],d=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+u*f+l*p-c*d,e[t+1]=l*g+u*d+c*f-a*p,e[t+2]=c*g+u*p+a*d-l*f,e[t+3]=u*g-a*f-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),d=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=d*u*f+c*p*g,this._y=c*p*f-d*u*g,this._z=c*u*g+d*p*f,this._w=c*u*f-d*p*g;break;case"YXZ":this._x=d*u*f+c*p*g,this._y=c*p*f-d*u*g,this._z=c*u*g-d*p*f,this._w=c*u*f+d*p*g;break;case"ZXY":this._x=d*u*f-c*p*g,this._y=c*p*f+d*u*g,this._z=c*u*g+d*p*f,this._w=c*u*f-d*p*g;break;case"ZYX":this._x=d*u*f-c*p*g,this._y=c*p*f+d*u*g,this._z=c*u*g-d*p*f,this._w=c*u*f+d*p*g;break;case"YZX":this._x=d*u*f+c*p*g,this._y=c*p*f+d*u*g,this._z=c*u*g-d*p*f,this._w=c*u*f-d*p*g;break;case"XZY":this._x=d*u*f-c*p*g,this._y=c*p*f-d*u*g,this._z=c*u*g+d*p*f,this._w=c*u*f+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=i+a+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Dt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,t=0,i=0){W.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(_f.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(_f.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*r-a*i,u=l*i+a*t-s*r,f=l*r+s*i-o*t,d=-s*t-o*i-a*r;return this.x=c*l+d*-s+u*-a-f*-o,this.y=u*l+d*-o+f*-s-c*-a,this.z=f*l+d*-a+c*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return _a.copy(this).projectOnVector(e),this.sub(_a)}reflect(e){return this.sub(_a.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Dt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _a=new W,_f=new xs;class ys{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],f=e[l+1],d=e[l+2];u<t&&(t=u),f<i&&(i=f),d<r&&(r=d),u>s&&(s=u),f>o&&(o=f),d>a&&(a=d)}return this.min.set(t,i,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),f=e.getY(l),d=e.getZ(l);u<t&&(t=u),f<i&&(i=f),d<r&&(r=d),u>s&&(s=u),f>o&&(o=f),d>a&&(a=d)}return this.min.set(t,i,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=pi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){const s=i.attributes.position;for(let o=0,a=s.count;o<a;o++)pi.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(pi)}else i.boundingBox===null&&i.computeBoundingBox(),xa.copy(i.boundingBox),xa.applyMatrix4(e.matrixWorld),this.union(xa);const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,pi),pi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ur),Ns.subVectors(this.max,Ur),Wi.subVectors(e.a,Ur),$i.subVectors(e.b,Ur),qi.subVectors(e.c,Ur),Wn.subVectors($i,Wi),$n.subVectors(qi,$i),mi.subVectors(Wi,qi);let t=[0,-Wn.z,Wn.y,0,-$n.z,$n.y,0,-mi.z,mi.y,Wn.z,0,-Wn.x,$n.z,0,-$n.x,mi.z,0,-mi.x,-Wn.y,Wn.x,0,-$n.y,$n.x,0,-mi.y,mi.x,0];return!ya(t,Wi,$i,qi,Ns)||(t=[1,0,0,0,1,0,0,0,1],!ya(t,Wi,$i,qi,Ns))?!1:(Os.crossVectors(Wn,$n),t=[Os.x,Os.y,Os.z],ya(t,Wi,$i,qi,Ns))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return pi.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(pi).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(bn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const bn=[new W,new W,new W,new W,new W,new W,new W,new W],pi=new W,xa=new ys,Wi=new W,$i=new W,qi=new W,Wn=new W,$n=new W,mi=new W,Ur=new W,Ns=new W,Os=new W,gi=new W;function ya(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){gi.fromArray(n,s);const a=r.x*Math.abs(gi.x)+r.y*Math.abs(gi.y)+r.z*Math.abs(gi.z),l=e.dot(gi),c=t.dot(gi),u=i.dot(gi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Ty=new ys,xf=new W,zs=new W,ba=new W;class fc{constructor(e=new W,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Ty.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){ba.subVectors(e,this.center);const t=ba.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.add(ba.multiplyScalar(r/i)),this.radius+=r}return this}union(e){return this.center.equals(e.center)===!0?zs.set(0,0,1).multiplyScalar(e.radius):zs.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(xf.copy(e.center).add(zs)),this.expandByPoint(xf.copy(e.center).sub(zs)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Sn=new W,Sa=new W,Bs=new W,qn=new W,Ma=new W,Us=new W,wa=new W;class Cy{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Sn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Sn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Sn.copy(this.direction).multiplyScalar(t).add(this.origin),Sn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Sa.copy(e).add(t).multiplyScalar(.5),Bs.copy(t).sub(e).normalize(),qn.copy(this.origin).sub(Sa);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Bs),a=qn.dot(this.direction),l=-qn.dot(Bs),c=qn.lengthSq(),u=Math.abs(1-o*o);let f,d,p,g;if(u>0)if(f=o*l-a,d=o*a-l,g=s*u,f>=0)if(d>=-g)if(d<=g){const m=1/u;f*=m,d*=m,p=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;return i&&i.copy(this.direction).multiplyScalar(f).add(this.origin),r&&r.copy(Bs).multiplyScalar(d).add(Sa),p}intersectSphere(e,t){Sn.subVectors(e.center,this.origin);const i=Sn.dot(this.direction),r=Sn.dot(Sn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||i!==i)&&(i=s),(o<r||r!==r)&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Sn)!==null}intersectTriangle(e,t,i,r,s){Ma.subVectors(t,e),Us.subVectors(i,e),wa.crossVectors(Ma,Us);let o=this.direction.dot(wa),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;qn.subVectors(this.origin,e);const l=a*this.direction.dot(Us.crossVectors(qn,Us));if(l<0)return null;const c=a*this.direction.dot(Ma.cross(qn));if(c<0||l+c>o)return null;const u=-a*qn.dot(wa);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class gt{constructor(){gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,r,s,o,a,l,c,u,f,d,p,g,m,h){const v=this.elements;return v[0]=e,v[4]=t,v[8]=i,v[12]=r,v[1]=s,v[5]=o,v[9]=a,v[13]=l,v[2]=c,v[6]=u,v[10]=f,v[14]=d,v[3]=p,v[7]=g,v[11]=m,v[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new gt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Xi.setFromMatrixColumn(e,0).length(),s=1/Xi.setFromMatrixColumn(e,1).length(),o=1/Xi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*u,p=o*f,g=a*u,m=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=p+g*c,t[5]=d-m*c,t[9]=-a*l,t[2]=m-d*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,p=l*f,g=c*u,m=c*f;t[0]=d+m*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=m+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,p=l*f,g=c*u,m=c*f;t[0]=d-m*a,t[4]=-o*f,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=m-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,p=o*f,g=a*u,m=a*f;t[0]=l*u,t[4]=g*c-p,t[8]=d*c+m,t[1]=l*f,t[5]=m*c+d,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,g=a*l,m=a*c;t[0]=l*u,t[4]=m-d*f,t[8]=g*f+p,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*f+g,t[10]=d-m*f}else if(e.order==="XZY"){const d=o*l,p=o*c,g=a*l,m=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+m,t[5]=o*u,t[9]=p*f-g,t[2]=g*f-p,t[6]=a*u,t[10]=m*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ay,e,Ly)}lookAt(e,t,i){const r=this.elements;return Rt.subVectors(e,t),Rt.lengthSq()===0&&(Rt.z=1),Rt.normalize(),Xn.crossVectors(i,Rt),Xn.lengthSq()===0&&(Math.abs(i.z)===1?Rt.x+=1e-4:Rt.z+=1e-4,Rt.normalize(),Xn.crossVectors(i,Rt)),Xn.normalize(),ks.crossVectors(Rt,Xn),r[0]=Xn.x,r[4]=ks.x,r[8]=Rt.x,r[1]=Xn.y,r[5]=ks.y,r[9]=Rt.y,r[2]=Xn.z,r[6]=ks.z,r[10]=Rt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],p=i[13],g=i[2],m=i[6],h=i[10],v=i[14],y=i[3],w=i[7],S=i[11],M=i[15],A=r[0],L=r[4],_=r[8],C=r[12],D=r[1],O=r[5],k=r[9],J=r[13],N=r[2],ee=r[6],B=r[10],j=r[14],X=r[3],V=r[7],Y=r[11],fe=r[15];return s[0]=o*A+a*D+l*N+c*X,s[4]=o*L+a*O+l*ee+c*V,s[8]=o*_+a*k+l*B+c*Y,s[12]=o*C+a*J+l*j+c*fe,s[1]=u*A+f*D+d*N+p*X,s[5]=u*L+f*O+d*ee+p*V,s[9]=u*_+f*k+d*B+p*Y,s[13]=u*C+f*J+d*j+p*fe,s[2]=g*A+m*D+h*N+v*X,s[6]=g*L+m*O+h*ee+v*V,s[10]=g*_+m*k+h*B+v*Y,s[14]=g*C+m*J+h*j+v*fe,s[3]=y*A+w*D+S*N+M*X,s[7]=y*L+w*O+S*ee+M*V,s[11]=y*_+w*k+S*B+M*Y,s[15]=y*C+w*J+S*j+M*fe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],p=e[14],g=e[3],m=e[7],h=e[11],v=e[15];return g*(+s*l*f-r*c*f-s*a*d+i*c*d+r*a*p-i*l*p)+m*(+t*l*p-t*c*d+s*o*d-r*o*p+r*c*u-s*l*u)+h*(+t*c*f-t*a*p-s*o*f+i*o*p+s*a*u-i*c*u)+v*(-r*a*u-t*l*f+t*a*d+r*o*f-i*o*d+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],p=e[11],g=e[12],m=e[13],h=e[14],v=e[15],y=f*h*c-m*d*c+m*l*p-a*h*p-f*l*v+a*d*v,w=g*d*c-u*h*c-g*l*p+o*h*p+u*l*v-o*d*v,S=u*m*c-g*f*c+g*a*p-o*m*p-u*a*v+o*f*v,M=g*f*l-u*m*l-g*a*d+o*m*d+u*a*h-o*f*h,A=t*y+i*w+r*S+s*M;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/A;return e[0]=y*L,e[1]=(m*d*s-f*h*s-m*r*p+i*h*p+f*r*v-i*d*v)*L,e[2]=(a*h*s-m*l*s+m*r*c-i*h*c-a*r*v+i*l*v)*L,e[3]=(f*l*s-a*d*s-f*r*c+i*d*c+a*r*p-i*l*p)*L,e[4]=w*L,e[5]=(u*h*s-g*d*s+g*r*p-t*h*p-u*r*v+t*d*v)*L,e[6]=(g*l*s-o*h*s-g*r*c+t*h*c+o*r*v-t*l*v)*L,e[7]=(o*d*s-u*l*s+u*r*c-t*d*c-o*r*p+t*l*p)*L,e[8]=S*L,e[9]=(g*f*s-u*m*s-g*i*p+t*m*p+u*i*v-t*f*v)*L,e[10]=(o*m*s-g*a*s+g*i*c-t*m*c-o*i*v+t*a*v)*L,e[11]=(u*a*s-o*f*s-u*i*c+t*f*c+o*i*p-t*a*p)*L,e[12]=M*L,e[13]=(u*m*r-g*f*r+g*i*d-t*m*d-u*i*h+t*f*h)*L,e[14]=(g*a*r-o*m*r-g*i*l+t*m*l+o*i*h-t*a*h)*L,e[15]=(o*f*r-u*a*r+u*i*l-t*f*l-o*i*d+t*a*d)*L,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,d=s*c,p=s*u,g=s*f,m=o*u,h=o*f,v=a*f,y=l*c,w=l*u,S=l*f,M=i.x,A=i.y,L=i.z;return r[0]=(1-(m+v))*M,r[1]=(p+S)*M,r[2]=(g-w)*M,r[3]=0,r[4]=(p-S)*A,r[5]=(1-(d+v))*A,r[6]=(h+y)*A,r[7]=0,r[8]=(g+w)*L,r[9]=(h-y)*L,r[10]=(1-(d+m))*L,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Xi.set(r[0],r[1],r[2]).length();const o=Xi.set(r[4],r[5],r[6]).length(),a=Xi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Jt.copy(this);const c=1/s,u=1/o,f=1/a;return Jt.elements[0]*=c,Jt.elements[1]*=c,Jt.elements[2]*=c,Jt.elements[4]*=u,Jt.elements[5]*=u,Jt.elements[6]*=u,Jt.elements[8]*=f,Jt.elements[9]*=f,Jt.elements[10]*=f,t.setFromRotationMatrix(Jt),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o){const a=this.elements,l=2*s/(t-e),c=2*s/(i-r),u=(t+e)/(t-e),f=(i+r)/(i-r),d=-(o+s)/(o-s),p=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=f,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=p,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,i,r,s,o){const a=this.elements,l=1/(t-e),c=1/(i-r),u=1/(o-s),f=(t+e)*l,d=(i+r)*c,p=(o+s)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-f,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-p,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Xi=new W,Jt=new gt,Ay=new W(0,0,0),Ly=new W(1,1,1),Xn=new W,ks=new W,Rt=new W,yf=new gt,bf=new xs;class bs{constructor(e=0,t=0,i=0,r=bs.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Dt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Dt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Dt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Dt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return yf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(yf,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return bf.setFromEuler(this),this.setFromQuaternion(bf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}bs.DefaultOrder="XYZ";bs.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class bp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ry=0;const Sf=new W,ji=new xs,Mn=new gt,Vs=new W,kr=new W,Py=new W,Dy=new xs,Mf=new W(1,0,0),wf=new W(0,1,0),Ef=new W(0,0,1),Iy={type:"added"},Tf={type:"removed"};class un extends Rr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ry++}),this.uuid=_s(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=un.DefaultUp.clone();const e=new W,t=new bs,i=new xs,r=new W(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new gt},normalMatrix:{value:new qt}}),this.matrix=new gt,this.matrixWorld=new gt,this.matrixAutoUpdate=un.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new bp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ji.setFromAxisAngle(e,t),this.quaternion.multiply(ji),this}rotateOnWorldAxis(e,t){return ji.setFromAxisAngle(e,t),this.quaternion.premultiply(ji),this}rotateX(e){return this.rotateOnAxis(Mf,e)}rotateY(e){return this.rotateOnAxis(wf,e)}rotateZ(e){return this.rotateOnAxis(Ef,e)}translateOnAxis(e,t){return Sf.copy(e).applyQuaternion(this.quaternion),this.position.add(Sf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Mf,e)}translateY(e){return this.translateOnAxis(wf,e)}translateZ(e){return this.translateOnAxis(Ef,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Mn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Vs.copy(e):Vs.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),kr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mn.lookAt(kr,Vs,this.up):Mn.lookAt(Vs,kr,this.up),this.quaternion.setFromRotationMatrix(Mn),r&&(Mn.extractRotation(r.matrixWorld),ji.setFromRotationMatrix(Mn),this.quaternion.premultiply(ji.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Iy)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Tf)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Tf)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Mn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(kr,e,Py),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(kr,Dy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}un.DefaultUp=new W(0,1,0);un.DefaultMatrixAutoUpdate=!0;const Qt=new W,wn=new W,Ea=new W,En=new W,Yi=new W,Ki=new W,Cf=new W,Ta=new W,Ca=new W,Aa=new W;class Ln{constructor(e=new W,t=new W,i=new W){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Qt.subVectors(e,t),r.cross(Qt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Qt.subVectors(r,t),wn.subVectors(i,t),Ea.subVectors(e,t);const o=Qt.dot(Qt),a=Qt.dot(wn),l=Qt.dot(Ea),c=wn.dot(wn),u=wn.dot(Ea),f=o*c-a*a;if(f===0)return s.set(-2,-1,-1);const d=1/f,p=(c*l-a*u)*d,g=(o*u-a*l)*d;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,En),En.x>=0&&En.y>=0&&En.x+En.y<=1}static getUV(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,En),l.set(0,0),l.addScaledVector(s,En.x),l.addScaledVector(o,En.y),l.addScaledVector(a,En.z),l}static isFrontFacing(e,t,i,r){return Qt.subVectors(i,t),wn.subVectors(e,t),Qt.cross(wn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Qt.subVectors(this.c,this.b),wn.subVectors(this.a,this.b),Qt.cross(wn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ln.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ln.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return Ln.getUV(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Ln.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ln.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Yi.subVectors(r,i),Ki.subVectors(s,i),Ta.subVectors(e,i);const l=Yi.dot(Ta),c=Ki.dot(Ta);if(l<=0&&c<=0)return t.copy(i);Ca.subVectors(e,r);const u=Yi.dot(Ca),f=Ki.dot(Ca);if(u>=0&&f<=u)return t.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Yi,o);Aa.subVectors(e,s);const p=Yi.dot(Aa),g=Ki.dot(Aa);if(g>=0&&p<=g)return t.copy(s);const m=p*c-l*g;if(m<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(Ki,a);const h=u*g-p*f;if(h<=0&&f-u>=0&&p-g>=0)return Cf.subVectors(s,r),a=(f-u)/(f-u+(p-g)),t.copy(r).addScaledVector(Cf,a);const v=1/(h+m+d);return o=m*v,a=d*v,t.copy(i).addScaledVector(Yi,o).addScaledVector(Ki,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Fy=0;class Wo extends Rr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fy++}),this.uuid=_s(),this.name="",this.type="Material",this.blending=dr,this.side=hs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=fp,this.blendDst=dp,this.blendEquation=ar,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=ml,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sy,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=da,this.stencilZFail=da,this.stencilZPass=da,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=i===Lx;continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==dr&&(i.blending=this.blending),this.side!==hs&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class dc extends Wo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=hp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ot=new W,Gs=new Ke;class vn{constructor(e,t,i){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i===!0,this.usage=pf,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",r),o=new Ze),t[i++]=o.r,t[i++]=o.g,t[i++]=o.b}return this}copyVector2sArray(e){const t=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",r),o=new Ke),t[i++]=o.x,t[i++]=o.y}return this}copyVector3sArray(e){const t=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",r),o=new W),t[i++]=o.x,t[i++]=o.y,t[i++]=o.z}return this}copyVector4sArray(e){const t=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",r),o=new pt),t[i++]=o.x,t[i++]=o.y,t[i++]=o.z,t[i++]=o.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Gs.fromBufferAttribute(this,t),Gs.applyMatrix3(e),this.setXY(t,Gs.x,Gs.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ot.fromBufferAttribute(this,t),ot.applyMatrix3(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ot.fromBufferAttribute(this,t),ot.applyMatrix4(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ot.fromBufferAttribute(this,t),ot.applyNormalMatrix(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ot.fromBufferAttribute(this,t),ot.transformDirection(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==pf&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Sp extends vn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Mp extends vn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class _n extends vn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Ny=0;const Gt=new gt,La=new un,Zi=new W,Pt=new ys,Vr=new ys,dt=new W;class li extends Rr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ny++}),this.uuid=_s(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(gp(e)?Mp:Sp)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new qt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Gt.makeRotationFromQuaternion(e),this.applyMatrix4(Gt),this}rotateX(e){return Gt.makeRotationX(e),this.applyMatrix4(Gt),this}rotateY(e){return Gt.makeRotationY(e),this.applyMatrix4(Gt),this}rotateZ(e){return Gt.makeRotationZ(e),this.applyMatrix4(Gt),this}translate(e,t,i){return Gt.makeTranslation(e,t,i),this.applyMatrix4(Gt),this}scale(e,t,i){return Gt.makeScale(e,t,i),this.applyMatrix4(Gt),this}lookAt(e){return La.lookAt(e),La.updateMatrix(),this.applyMatrix4(La.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zi).negate(),this.translate(Zi.x,Zi.y,Zi.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new _n(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ys);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Pt.setFromBufferAttribute(s),this.morphTargetsRelative?(dt.addVectors(this.boundingBox.min,Pt.min),this.boundingBox.expandByPoint(dt),dt.addVectors(this.boundingBox.max,Pt.max),this.boundingBox.expandByPoint(dt)):(this.boundingBox.expandByPoint(Pt.min),this.boundingBox.expandByPoint(Pt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new W,1/0);return}if(e){const i=this.boundingSphere.center;if(Pt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Vr.setFromBufferAttribute(a),this.morphTargetsRelative?(dt.addVectors(Pt.min,Vr.min),Pt.expandByPoint(dt),dt.addVectors(Pt.max,Vr.max),Pt.expandByPoint(dt)):(Pt.expandByPoint(Vr.min),Pt.expandByPoint(Vr.max))}Pt.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)dt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(dt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)dt.fromBufferAttribute(a,c),l&&(Zi.fromBufferAttribute(e,c),dt.add(Zi)),r=Math.max(r,i.distanceToSquared(dt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let D=0;D<a;D++)c[D]=new W,u[D]=new W;const f=new W,d=new W,p=new W,g=new Ke,m=new Ke,h=new Ke,v=new W,y=new W;function w(D,O,k){f.fromArray(r,D*3),d.fromArray(r,O*3),p.fromArray(r,k*3),g.fromArray(o,D*2),m.fromArray(o,O*2),h.fromArray(o,k*2),d.sub(f),p.sub(f),m.sub(g),h.sub(g);const J=1/(m.x*h.y-h.x*m.y);!isFinite(J)||(v.copy(d).multiplyScalar(h.y).addScaledVector(p,-m.y).multiplyScalar(J),y.copy(p).multiplyScalar(m.x).addScaledVector(d,-h.x).multiplyScalar(J),c[D].add(v),c[O].add(v),c[k].add(v),u[D].add(y),u[O].add(y),u[k].add(y))}let S=this.groups;S.length===0&&(S=[{start:0,count:i.length}]);for(let D=0,O=S.length;D<O;++D){const k=S[D],J=k.start,N=k.count;for(let ee=J,B=J+N;ee<B;ee+=3)w(i[ee+0],i[ee+1],i[ee+2])}const M=new W,A=new W,L=new W,_=new W;function C(D){L.fromArray(s,D*3),_.copy(L);const O=c[D];M.copy(O),M.sub(L.multiplyScalar(L.dot(O))).normalize(),A.crossVectors(_,O);const J=A.dot(u[D])<0?-1:1;l[D*4]=M.x,l[D*4+1]=M.y,l[D*4+2]=M.z,l[D*4+3]=J}for(let D=0,O=S.length;D<O;++D){const k=S[D],J=k.start,N=k.count;for(let ee=J,B=J+N;ee<B;ee+=3)C(i[ee+0]),C(i[ee+1]),C(i[ee+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new vn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new W,s=new W,o=new W,a=new W,l=new W,c=new W,u=new W,f=new W;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),m=e.getX(d+1),h=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,m),o.fromBufferAttribute(t,h),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,m),c.fromBufferAttribute(i,h),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(m,l.x,l.y,l.z),i.setXYZ(h,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const i=this.attributes;for(const r in i){if(e.attributes[r]===void 0)continue;const o=i[r].array,a=e.attributes[r],l=a.array,c=a.itemSize*t,u=Math.min(l.length,o.length-c);for(let f=0,d=c;f<u;f++,d++)o[d]=l[f]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)dt.fromBufferAttribute(e,t),dt.normalize(),e.setXYZ(t,dt.x,dt.y,dt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let p=0,g=0;for(let m=0,h=l.length;m<h;m++){a.isInterleavedBufferAttribute?p=l[m]*a.data.stride+a.offset:p=l[m]*u;for(let v=0;v<u;v++)d[g++]=c[p++]}return new vn(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new li,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],p=e(d,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,p=f.length;d<p;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Af=new gt,Ji=new Cy,Ra=new fc,jn=new W,Yn=new W,Kn=new W,Pa=new W,Da=new W,Ia=new W,Hs=new W,Ws=new W,$s=new W,qs=new Ke,Xs=new Ke,js=new Ke,Fa=new W,Ys=new W;class Pn extends un{constructor(e=new li,t=new dc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),Ra.copy(i.boundingSphere),Ra.applyMatrix4(s),e.ray.intersectsSphere(Ra)===!1)||(Af.copy(s).invert(),Ji.copy(e.ray).applyMatrix4(Af),i.boundingBox!==null&&Ji.intersectsBox(i.boundingBox)===!1))return;let o;const a=i.index,l=i.attributes.position,c=i.morphAttributes.position,u=i.morphTargetsRelative,f=i.attributes.uv,d=i.attributes.uv2,p=i.groups,g=i.drawRange;if(a!==null)if(Array.isArray(r))for(let m=0,h=p.length;m<h;m++){const v=p[m],y=r[v.materialIndex],w=Math.max(v.start,g.start),S=Math.min(a.count,Math.min(v.start+v.count,g.start+g.count));for(let M=w,A=S;M<A;M+=3){const L=a.getX(M),_=a.getX(M+1),C=a.getX(M+2);o=Ks(this,y,e,Ji,l,c,u,f,d,L,_,C),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=v.materialIndex,t.push(o))}}else{const m=Math.max(0,g.start),h=Math.min(a.count,g.start+g.count);for(let v=m,y=h;v<y;v+=3){const w=a.getX(v),S=a.getX(v+1),M=a.getX(v+2);o=Ks(this,r,e,Ji,l,c,u,f,d,w,S,M),o&&(o.faceIndex=Math.floor(v/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(r))for(let m=0,h=p.length;m<h;m++){const v=p[m],y=r[v.materialIndex],w=Math.max(v.start,g.start),S=Math.min(l.count,Math.min(v.start+v.count,g.start+g.count));for(let M=w,A=S;M<A;M+=3){const L=M,_=M+1,C=M+2;o=Ks(this,y,e,Ji,l,c,u,f,d,L,_,C),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=v.materialIndex,t.push(o))}}else{const m=Math.max(0,g.start),h=Math.min(l.count,g.start+g.count);for(let v=m,y=h;v<y;v+=3){const w=v,S=v+1,M=v+2;o=Ks(this,r,e,Ji,l,c,u,f,d,w,S,M),o&&(o.faceIndex=Math.floor(v/3),t.push(o))}}}}function Oy(n,e,t,i,r,s,o,a){let l;if(e.side===on?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side!==_r,a),l===null)return null;Ys.copy(a),Ys.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Ys);return c<t.near||c>t.far?null:{distance:c,point:Ys.clone(),object:n}}function Ks(n,e,t,i,r,s,o,a,l,c,u,f){jn.fromBufferAttribute(r,c),Yn.fromBufferAttribute(r,u),Kn.fromBufferAttribute(r,f);const d=n.morphTargetInfluences;if(s&&d){Hs.set(0,0,0),Ws.set(0,0,0),$s.set(0,0,0);for(let g=0,m=s.length;g<m;g++){const h=d[g],v=s[g];h!==0&&(Pa.fromBufferAttribute(v,c),Da.fromBufferAttribute(v,u),Ia.fromBufferAttribute(v,f),o?(Hs.addScaledVector(Pa,h),Ws.addScaledVector(Da,h),$s.addScaledVector(Ia,h)):(Hs.addScaledVector(Pa.sub(jn),h),Ws.addScaledVector(Da.sub(Yn),h),$s.addScaledVector(Ia.sub(Kn),h)))}jn.add(Hs),Yn.add(Ws),Kn.add($s)}n.isSkinnedMesh&&(n.boneTransform(c,jn),n.boneTransform(u,Yn),n.boneTransform(f,Kn));const p=Oy(n,e,t,i,jn,Yn,Kn,Fa);if(p){a&&(qs.fromBufferAttribute(a,c),Xs.fromBufferAttribute(a,u),js.fromBufferAttribute(a,f),p.uv=Ln.getUV(Fa,jn,Yn,Kn,qs,Xs,js,new Ke)),l&&(qs.fromBufferAttribute(l,c),Xs.fromBufferAttribute(l,u),js.fromBufferAttribute(l,f),p.uv2=Ln.getUV(Fa,jn,Yn,Kn,qs,Xs,js,new Ke));const g={a:c,b:u,c:f,normal:new W,materialIndex:0};Ln.getNormal(jn,Yn,Kn,g.normal),p.face=g}return p}class Ss extends li{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,p=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new _n(c,3)),this.setAttribute("normal",new _n(u,3)),this.setAttribute("uv",new _n(f,2));function g(m,h,v,y,w,S,M,A,L,_,C){const D=S/L,O=M/_,k=S/2,J=M/2,N=A/2,ee=L+1,B=_+1;let j=0,X=0;const V=new W;for(let Y=0;Y<B;Y++){const fe=Y*O-J;for(let ie=0;ie<ee;ie++){const he=ie*D-k;V[m]=he*y,V[h]=fe*w,V[v]=N,c.push(V.x,V.y,V.z),V[m]=0,V[h]=0,V[v]=A>0?1:-1,u.push(V.x,V.y,V.z),f.push(ie/L),f.push(1-Y/_),j+=1}}for(let Y=0;Y<_;Y++)for(let fe=0;fe<L;fe++){const ie=d+fe+ee*Y,he=d+fe+ee*(Y+1),Me=d+(fe+1)+ee*(Y+1),z=d+(fe+1)+ee*Y;l.push(ie,he,z),l.push(he,Me,z),X+=6}a.addGroup(p,X,C),p+=X,d+=j}}static fromJSON(e){return new Ss(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Sr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function yt(n){const e={};for(let t=0;t<n.length;t++){const i=Sr(n[t]);for(const r in i)e[r]=i[r]}return e}function zy(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}const By={clone:Sr,merge:yt};var Uy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ky=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fi extends Wo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Uy,this.fragmentShader=ky,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Sr(e.uniforms),this.uniformsGroups=zy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class wp extends un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gt,this.projectionMatrix=new gt,this.projectionMatrixInverse=new gt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Wt extends wp{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=gf*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ha*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return gf*2*Math.atan(Math.tan(ha*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ha*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Qi=90,er=1;class Vy extends un{constructor(e,t,i){if(super(),this.type="CubeCamera",i.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=i;const r=new Wt(Qi,er,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new W(1,0,0)),this.add(r);const s=new Wt(Qi,er,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new W(-1,0,0)),this.add(s);const o=new Wt(Qi,er,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new W(0,1,0)),this.add(o);const a=new Wt(Qi,er,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new W(0,-1,0)),this.add(a);const l=new Wt(Qi,er,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new W(0,0,1)),this.add(l);const c=new Wt(Qi,er,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new W(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,s,o,a,l,c]=this.children,u=e.getRenderTarget(),f=e.toneMapping,d=e.xr.enabled;e.toneMapping=In,e.xr.enabled=!1;const p=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,o),e.setRenderTarget(i,3),e.render(t,a),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=p,e.setRenderTarget(i,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=f,e.xr.enabled=d,i.texture.needsPMREMUpdate=!0}}class Ep extends cn{constructor(e,t,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:xr,super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Gy extends Ii{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Ep(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ht}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ss(5,5,5),s=new Fi({name:"CubemapFromEquirect",uniforms:Sr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:on,blending:ii});s.uniforms.tEquirect.value=t;const o=new Pn(r,s),a=t.minFilter;return t.minFilter===Ho&&(t.minFilter=Ht),new Vy(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const Na=new W,Hy=new W,Wy=new qt;class _i{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Na.subVectors(i,t).cross(Hy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const i=e.delta(Na),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(i).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Wy.getNormalMatrix(e),r=this.coplanarPoint(Na).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const tr=new fc,Zs=new W;class Tp{constructor(e=new _i,t=new _i,i=new _i,r=new _i,s=new _i,o=new _i){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,r=i[0],s=i[1],o=i[2],a=i[3],l=i[4],c=i[5],u=i[6],f=i[7],d=i[8],p=i[9],g=i[10],m=i[11],h=i[12],v=i[13],y=i[14],w=i[15];return t[0].setComponents(a-r,f-l,m-d,w-h).normalize(),t[1].setComponents(a+r,f+l,m+d,w+h).normalize(),t[2].setComponents(a+s,f+c,m+p,w+v).normalize(),t[3].setComponents(a-s,f-c,m-p,w-v).normalize(),t[4].setComponents(a-o,f-u,m-g,w-y).normalize(),t[5].setComponents(a+o,f+u,m+g,w+y).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),tr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(tr)}intersectsSprite(e){return tr.center.set(0,0,0),tr.radius=.7071067811865476,tr.applyMatrix4(e.matrixWorld),this.intersectsSphere(tr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Zs.x=r.normal.x>0?e.max.x:e.min.x,Zs.y=r.normal.y>0?e.max.y:e.min.y,Zs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Zs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Cp(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function $y(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,u){const f=c.array,d=c.usage,p=n.createBuffer();n.bindBuffer(u,p),n.bufferData(u,f,d),c.onUploadCallback();let g;if(f instanceof Float32Array)g=5126;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(f instanceof Int16Array)g=5122;else if(f instanceof Uint32Array)g=5125;else if(f instanceof Int32Array)g=5124;else if(f instanceof Int8Array)g=5120;else if(f instanceof Uint8Array)g=5121;else if(f instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:p,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,f){const d=u.array,p=u.updateRange;n.bindBuffer(f,c),p.count===-1?n.bufferSubData(f,0,d):(t?n.bufferSubData(f,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):n.bufferSubData(f,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1)}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f===void 0?i.set(c,r(c,u)):f.version<c.version&&(s(f.buffer,c,u),f.version=c.version)}return{get:o,remove:a,update:l}}class hc extends li{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,d=t/l,p=[],g=[],m=[],h=[];for(let v=0;v<u;v++){const y=v*d-o;for(let w=0;w<c;w++){const S=w*f-s;g.push(S,-y,0),m.push(0,0,1),h.push(w/a),h.push(1-v/l)}}for(let v=0;v<l;v++)for(let y=0;y<a;y++){const w=y+c*v,S=y+c*(v+1),M=y+1+c*(v+1),A=y+1+c*v;p.push(w,S,A),p.push(S,M,A)}this.setIndex(p),this.setAttribute("position",new _n(g,3)),this.setAttribute("normal",new _n(m,3)),this.setAttribute("uv",new _n(h,2))}static fromJSON(e){return new hc(e.width,e.height,e.widthSegments,e.heightSegments)}}var qy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Xy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jy=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Yy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ky=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Zy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jy="vec3 transformed = vec3( position );",Qy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,eb=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,tb=`#ifdef USE_IRIDESCENCE
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
#endif`,nb=`#ifdef USE_BUMPMAP
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
#endif`,ib=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,rb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ob=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ab=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,lb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,cb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ub=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,fb=`#define PI 3.141592653589793
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
}`,db=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,hb=`vec3 transformedNormal = objectNormal;
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
#endif`,pb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,gb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_b="gl_FragColor = linearToOutputTexel( gl_FragColor );",xb=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yb=`#ifdef USE_ENVMAP
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
#endif`,bb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Sb=`#ifdef USE_ENVMAP
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
#endif`,Mb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wb=`#ifdef USE_ENVMAP
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
#endif`,Eb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Tb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Cb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ab=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Lb=`#ifdef USE_GRADIENTMAP
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
}`,Rb=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Pb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Db=`vec3 diffuse = vec3( 1.0 );
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
#endif`,Ib=`uniform bool receiveShadow;
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
#endif`,Fb=`#if defined( USE_ENVMAP )
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
#endif`,Nb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ob=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,zb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Bb=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,Ub=`PhysicalMaterial material;
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
#endif`,kb=`struct PhysicalMaterial {
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
}`,Vb=`
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
#endif`,Gb=`#if defined( RE_IndirectDiffuse )
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
#endif`,Hb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Wb=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$b=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qb=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Xb=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,jb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Yb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Kb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Zb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Qb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,eS=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tS=`#ifdef USE_MORPHNORMALS
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
#endif`,nS=`#ifdef USE_MORPHTARGETS
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
#endif`,iS=`#ifdef USE_MORPHTARGETS
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
#endif`,rS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,sS=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,oS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,aS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,cS=`#ifdef USE_NORMALMAP
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
#endif`,uS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,fS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,dS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,hS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,gS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_S=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,SS=`#ifdef USE_SHADOWMAP
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
#endif`,MS=`#ifdef USE_SHADOWMAP
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
#endif`,wS=`#ifdef USE_SHADOWMAP
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
#endif`,ES=`float getShadowMask() {
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
}`,TS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,CS=`#ifdef USE_SKINNING
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
#endif`,AS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,LS=`#ifdef USE_SKINNING
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
#endif`,RS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,PS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,DS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,IS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,FS=`#ifdef USE_TRANSMISSION
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
#endif`,NS=`#ifdef USE_TRANSMISSION
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
#endif`,OS=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,zS=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,BS=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,US=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,kS=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,VS=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,GS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const HS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,WS=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,$S=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qS=`#include <envmap_common_pars_fragment>
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
}`,XS=`#include <common>
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
}`,jS=`#if DEPTH_PACKING == 3200
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
}`,YS=`#define DISTANCE
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
}`,KS=`#define DISTANCE
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
}`,ZS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,JS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,QS=`uniform float scale;
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
}`,eM=`uniform vec3 diffuse;
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
}`,tM=`#include <common>
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
}`,nM=`uniform vec3 diffuse;
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
}`,iM=`#define LAMBERT
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
}`,rM=`uniform vec3 diffuse;
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
}`,sM=`#define MATCAP
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
}`,oM=`#define MATCAP
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
}`,aM=`#define NORMAL
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
}`,lM=`#define NORMAL
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
}`,cM=`#define PHONG
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
}`,uM=`#define PHONG
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
}`,fM=`#define STANDARD
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
}`,dM=`#define STANDARD
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
}`,hM=`#define TOON
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
}`,pM=`#define TOON
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
}`,mM=`uniform float size;
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
}`,gM=`uniform vec3 diffuse;
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
}`,vM=`#include <common>
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
}`,_M=`uniform vec3 color;
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
}`,xM=`uniform float rotation;
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
}`,yM=`uniform vec3 diffuse;
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
}`,Be={alphamap_fragment:qy,alphamap_pars_fragment:Xy,alphatest_fragment:jy,alphatest_pars_fragment:Yy,aomap_fragment:Ky,aomap_pars_fragment:Zy,begin_vertex:Jy,beginnormal_vertex:Qy,bsdfs:eb,iridescence_fragment:tb,bumpmap_pars_fragment:nb,clipping_planes_fragment:ib,clipping_planes_pars_fragment:rb,clipping_planes_pars_vertex:sb,clipping_planes_vertex:ob,color_fragment:ab,color_pars_fragment:lb,color_pars_vertex:cb,color_vertex:ub,common:fb,cube_uv_reflection_fragment:db,defaultnormal_vertex:hb,displacementmap_pars_vertex:pb,displacementmap_vertex:mb,emissivemap_fragment:gb,emissivemap_pars_fragment:vb,encodings_fragment:_b,encodings_pars_fragment:xb,envmap_fragment:yb,envmap_common_pars_fragment:bb,envmap_pars_fragment:Sb,envmap_pars_vertex:Mb,envmap_physical_pars_fragment:Fb,envmap_vertex:wb,fog_vertex:Eb,fog_pars_vertex:Tb,fog_fragment:Cb,fog_pars_fragment:Ab,gradientmap_pars_fragment:Lb,lightmap_fragment:Rb,lightmap_pars_fragment:Pb,lights_lambert_vertex:Db,lights_pars_begin:Ib,lights_toon_fragment:Nb,lights_toon_pars_fragment:Ob,lights_phong_fragment:zb,lights_phong_pars_fragment:Bb,lights_physical_fragment:Ub,lights_physical_pars_fragment:kb,lights_fragment_begin:Vb,lights_fragment_maps:Gb,lights_fragment_end:Hb,logdepthbuf_fragment:Wb,logdepthbuf_pars_fragment:$b,logdepthbuf_pars_vertex:qb,logdepthbuf_vertex:Xb,map_fragment:jb,map_pars_fragment:Yb,map_particle_fragment:Kb,map_particle_pars_fragment:Zb,metalnessmap_fragment:Jb,metalnessmap_pars_fragment:Qb,morphcolor_vertex:eS,morphnormal_vertex:tS,morphtarget_pars_vertex:nS,morphtarget_vertex:iS,normal_fragment_begin:rS,normal_fragment_maps:sS,normal_pars_fragment:oS,normal_pars_vertex:aS,normal_vertex:lS,normalmap_pars_fragment:cS,clearcoat_normal_fragment_begin:uS,clearcoat_normal_fragment_maps:fS,clearcoat_pars_fragment:dS,iridescence_pars_fragment:hS,output_fragment:pS,packing:mS,premultiplied_alpha_fragment:gS,project_vertex:vS,dithering_fragment:_S,dithering_pars_fragment:xS,roughnessmap_fragment:yS,roughnessmap_pars_fragment:bS,shadowmap_pars_fragment:SS,shadowmap_pars_vertex:MS,shadowmap_vertex:wS,shadowmask_pars_fragment:ES,skinbase_vertex:TS,skinning_pars_vertex:CS,skinning_vertex:AS,skinnormal_vertex:LS,specularmap_fragment:RS,specularmap_pars_fragment:PS,tonemapping_fragment:DS,tonemapping_pars_fragment:IS,transmission_fragment:FS,transmission_pars_fragment:NS,uv_pars_fragment:OS,uv_pars_vertex:zS,uv_vertex:BS,uv2_pars_fragment:US,uv2_pars_vertex:kS,uv2_vertex:VS,worldpos_vertex:GS,background_vert:HS,background_frag:WS,cube_vert:$S,cube_frag:qS,depth_vert:XS,depth_frag:jS,distanceRGBA_vert:YS,distanceRGBA_frag:KS,equirect_vert:ZS,equirect_frag:JS,linedashed_vert:QS,linedashed_frag:eM,meshbasic_vert:tM,meshbasic_frag:nM,meshlambert_vert:iM,meshlambert_frag:rM,meshmatcap_vert:sM,meshmatcap_frag:oM,meshnormal_vert:aM,meshnormal_frag:lM,meshphong_vert:cM,meshphong_frag:uM,meshphysical_vert:fM,meshphysical_frag:dM,meshtoon_vert:hM,meshtoon_frag:pM,points_vert:mM,points_frag:gM,shadow_vert:vM,shadow_frag:_M,sprite_vert:xM,sprite_frag:yM},xe={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new qt},uv2Transform:{value:new qt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new qt}}},mn={basic:{uniforms:yt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:yt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.fog,xe.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:yt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:yt([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:yt([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:yt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:yt([xe.points,xe.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:yt([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:yt([xe.common,xe.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:yt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:yt([xe.sprite,xe.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},cube:{uniforms:yt([xe.envmap,{opacity:{value:1}}]),vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:yt([xe.common,xe.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:yt([xe.lights,xe.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};mn.physical={uniforms:yt([mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};function bM(n,e,t,i,r,s){const o=new Ze(0);let a=r===!0?0:1,l,c,u=null,f=0,d=null;function p(m,h){let v=!1,y=h.isScene===!0?h.background:null;y&&y.isTexture&&(y=e.get(y));const w=n.xr,S=w.getSession&&w.getSession();S&&S.environmentBlendMode==="additive"&&(y=null),y===null?g(o,a):y&&y.isColor&&(g(y,1),v=!0),(n.autoClear||v)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),y&&(y.isCubeTexture||y.mapping===Go)?(c===void 0&&(c=new Pn(new Ss(1,1,1),new Fi({name:"BackgroundCubeMaterial",uniforms:Sr(mn.cube.uniforms),vertexShader:mn.cube.vertexShader,fragmentShader:mn.cube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,A,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,(u!==y||f!==y.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,u=y,f=y.version,d=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Pn(new hc(2,2),new Fi({name:"BackgroundMaterial",uniforms:Sr(mn.background.uniforms),vertexShader:mn.background.vertexShader,fragmentShader:mn.background.fragmentShader,side:hs,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||f!==y.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,u=y,f=y.version,d=n.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function g(m,h){t.buffers.color.setClear(m.r,m.g,m.b,h,s)}return{getClearColor:function(){return o},setClearColor:function(m,h=1){o.set(m),a=h,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(m){a=m,g(o,a)},render:p}}function SM(n,e,t,i){const r=n.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=h(null);let c=l,u=!1;function f(N,ee,B,j,X){let V=!1;if(o){const Y=m(j,B,ee);c!==Y&&(c=Y,p(c.object)),V=v(N,j,B,X),V&&y(N,j,B,X)}else{const Y=ee.wireframe===!0;(c.geometry!==j.id||c.program!==B.id||c.wireframe!==Y)&&(c.geometry=j.id,c.program=B.id,c.wireframe=Y,V=!0)}X!==null&&t.update(X,34963),(V||u)&&(u=!1,_(N,ee,B,j),X!==null&&n.bindBuffer(34963,t.get(X).buffer))}function d(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function p(N){return i.isWebGL2?n.bindVertexArray(N):s.bindVertexArrayOES(N)}function g(N){return i.isWebGL2?n.deleteVertexArray(N):s.deleteVertexArrayOES(N)}function m(N,ee,B){const j=B.wireframe===!0;let X=a[N.id];X===void 0&&(X={},a[N.id]=X);let V=X[ee.id];V===void 0&&(V={},X[ee.id]=V);let Y=V[j];return Y===void 0&&(Y=h(d()),V[j]=Y),Y}function h(N){const ee=[],B=[],j=[];for(let X=0;X<r;X++)ee[X]=0,B[X]=0,j[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ee,enabledAttributes:B,attributeDivisors:j,object:N,attributes:{},index:null}}function v(N,ee,B,j){const X=c.attributes,V=ee.attributes;let Y=0;const fe=B.getAttributes();for(const ie in fe)if(fe[ie].location>=0){const Me=X[ie];let z=V[ie];if(z===void 0&&(ie==="instanceMatrix"&&N.instanceMatrix&&(z=N.instanceMatrix),ie==="instanceColor"&&N.instanceColor&&(z=N.instanceColor)),Me===void 0||Me.attribute!==z||z&&Me.data!==z.data)return!0;Y++}return c.attributesNum!==Y||c.index!==j}function y(N,ee,B,j){const X={},V=ee.attributes;let Y=0;const fe=B.getAttributes();for(const ie in fe)if(fe[ie].location>=0){let Me=V[ie];Me===void 0&&(ie==="instanceMatrix"&&N.instanceMatrix&&(Me=N.instanceMatrix),ie==="instanceColor"&&N.instanceColor&&(Me=N.instanceColor));const z={};z.attribute=Me,Me&&Me.data&&(z.data=Me.data),X[ie]=z,Y++}c.attributes=X,c.attributesNum=Y,c.index=j}function w(){const N=c.newAttributes;for(let ee=0,B=N.length;ee<B;ee++)N[ee]=0}function S(N){M(N,0)}function M(N,ee){const B=c.newAttributes,j=c.enabledAttributes,X=c.attributeDivisors;B[N]=1,j[N]===0&&(n.enableVertexAttribArray(N),j[N]=1),X[N]!==ee&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,ee),X[N]=ee)}function A(){const N=c.newAttributes,ee=c.enabledAttributes;for(let B=0,j=ee.length;B<j;B++)ee[B]!==N[B]&&(n.disableVertexAttribArray(B),ee[B]=0)}function L(N,ee,B,j,X,V){i.isWebGL2===!0&&(B===5124||B===5125)?n.vertexAttribIPointer(N,ee,B,X,V):n.vertexAttribPointer(N,ee,B,j,X,V)}function _(N,ee,B,j){if(i.isWebGL2===!1&&(N.isInstancedMesh||j.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;w();const X=j.attributes,V=B.getAttributes(),Y=ee.defaultAttributeValues;for(const fe in V){const ie=V[fe];if(ie.location>=0){let he=X[fe];if(he===void 0&&(fe==="instanceMatrix"&&N.instanceMatrix&&(he=N.instanceMatrix),fe==="instanceColor"&&N.instanceColor&&(he=N.instanceColor)),he!==void 0){const Me=he.normalized,z=he.itemSize,F=t.get(he);if(F===void 0)continue;const re=F.buffer,ae=F.type,be=F.bytesPerElement;if(he.isInterleavedBufferAttribute){const ge=he.data,Ce=ge.stride,ve=he.offset;if(ge.isInstancedInterleavedBuffer){for(let E=0;E<ie.locationSize;E++)M(ie.location+E,ge.meshPerAttribute);N.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let E=0;E<ie.locationSize;E++)S(ie.location+E);n.bindBuffer(34962,re);for(let E=0;E<ie.locationSize;E++)L(ie.location+E,z/ie.locationSize,ae,Me,Ce*be,(ve+z/ie.locationSize*E)*be)}else{if(he.isInstancedBufferAttribute){for(let ge=0;ge<ie.locationSize;ge++)M(ie.location+ge,he.meshPerAttribute);N.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let ge=0;ge<ie.locationSize;ge++)S(ie.location+ge);n.bindBuffer(34962,re);for(let ge=0;ge<ie.locationSize;ge++)L(ie.location+ge,z/ie.locationSize,ae,Me,z*be,z/ie.locationSize*ge*be)}}else if(Y!==void 0){const Me=Y[fe];if(Me!==void 0)switch(Me.length){case 2:n.vertexAttrib2fv(ie.location,Me);break;case 3:n.vertexAttrib3fv(ie.location,Me);break;case 4:n.vertexAttrib4fv(ie.location,Me);break;default:n.vertexAttrib1fv(ie.location,Me)}}}}A()}function C(){k();for(const N in a){const ee=a[N];for(const B in ee){const j=ee[B];for(const X in j)g(j[X].object),delete j[X];delete ee[B]}delete a[N]}}function D(N){if(a[N.id]===void 0)return;const ee=a[N.id];for(const B in ee){const j=ee[B];for(const X in j)g(j[X].object),delete j[X];delete ee[B]}delete a[N.id]}function O(N){for(const ee in a){const B=a[ee];if(B[N.id]===void 0)continue;const j=B[N.id];for(const X in j)g(j[X].object),delete j[X];delete B[N.id]}}function k(){J(),u=!0,c!==l&&(c=l,p(c.object))}function J(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:k,resetDefaultState:J,dispose:C,releaseStatesOfGeometry:D,releaseStatesOfProgram:O,initAttributes:w,enableAttribute:S,disableUnusedAttributes:A}}function MM(n,e,t,i){const r=i.isWebGL2;let s;function o(c){s=c}function a(c,u){n.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,f){if(f===0)return;let d,p;if(r)d=n,p="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](s,c,u,f),t.update(u,s,f)}this.setMode=o,this.render=a,this.renderInstances=l}function wM(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(L){if(L==="highp"){if(n.getShaderPrecisionFormat(35633,36338).precision>0&&n.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";L="mediump"}return L==="mediump"&&n.getShaderPrecisionFormat(35633,36337).precision>0&&n.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&n instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=n.getParameter(34930),d=n.getParameter(35660),p=n.getParameter(3379),g=n.getParameter(34076),m=n.getParameter(34921),h=n.getParameter(36347),v=n.getParameter(36348),y=n.getParameter(36349),w=d>0,S=o||e.has("OES_texture_float"),M=w&&S,A=o?n.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:h,maxVaryings:v,maxFragmentUniforms:y,vertexTextures:w,floatFragmentTextures:S,floatVertexTextures:M,maxSamples:A}}function EM(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new _i,a=new qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d,p){const g=f.length!==0||d||i!==0||r;return r=d,t=u(f,p,0),i=f.length,g},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,c()},this.setState=function(f,d,p){const g=f.clippingPlanes,m=f.clipIntersection,h=f.clipShadows,v=n.get(f);if(!r||g===null||g.length===0||s&&!h)s?u(null):c();else{const y=s?0:i,w=y*4;let S=v.clippingState||null;l.value=S,S=u(g,d,w,p);for(let M=0;M!==w;++M)S[M]=t[M];v.clippingState=S,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,p,g){const m=f!==null?f.length:0;let h=null;if(m!==0){if(h=l.value,g!==!0||h===null){const v=p+m*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(h===null||h.length<v)&&(h=new Float32Array(v));for(let w=0,S=p;w!==m;++w,S+=4)o.copy(f[w]).applyMatrix4(y,a),o.normal.toArray(h,S),h[S+3]=o.constant}l.value=h,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,h}}function TM(n){let e=new WeakMap;function t(o,a){return a===gl?o.mapping=xr:a===vl&&(o.mapping=yr),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===gl||a===vl)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Gy(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class CM extends wp{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const cr=4,Lf=[.125,.215,.35,.446,.526,.582],Si=20,Oa=new CM,Rf=new Ze;let za=null;const xi=(1+Math.sqrt(5))/2,nr=1/xi,Pf=[new W(1,1,1),new W(-1,1,1),new W(1,1,-1),new W(-1,1,-1),new W(0,xi,nr),new W(0,xi,-nr),new W(nr,0,xi),new W(-nr,0,xi),new W(xi,nr,0),new W(-xi,nr,0)];class Df{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){za=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ff(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(za),e.scissorTest=!1,Js(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===xr||e.mapping===yr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),za=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ht,minFilter:Ht,generateMipmaps:!1,type:ps,format:gn,encoding:Di,depthBuffer:!1},r=If(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=If(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=AM(s)),this._blurMaterial=LM(s,e,t)}return r}_compileMaterial(e){const t=new Pn(this._lodPlanes[0],e);this._renderer.compile(t,Oa)}_sceneToCubeUV(e,t,i,r){const a=new Wt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Rf),u.toneMapping=In,u.autoClear=!1;const p=new dc({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1}),g=new Pn(new Ss,p);let m=!1;const h=e.background;h?h.isColor&&(p.color.copy(h),e.background=null,m=!0):(p.color.copy(Rf),m=!0);for(let v=0;v<6;v++){const y=v%3;y===0?(a.up.set(0,l[v],0),a.lookAt(c[v],0,0)):y===1?(a.up.set(0,0,l[v]),a.lookAt(0,c[v],0)):(a.up.set(0,l[v],0),a.lookAt(0,0,c[v]));const w=this._cubeSize;Js(r,y*w,v>2?w:0,w,w),u.setRenderTarget(r),m&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=h}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===xr||e.mapping===yr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ff());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Pn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Js(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Oa)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Pf[(r-1)%Pf.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Pn(this._lodPlanes[r],c),d=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Si-1),m=s/g,h=isFinite(s)?1+Math.floor(u*m):Si;h>Si&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${Si}`);const v=[];let y=0;for(let L=0;L<Si;++L){const _=L/m,C=Math.exp(-_*_/2);v.push(C),L===0?y+=C:L<h&&(y+=2*C)}for(let L=0;L<v.length;L++)v[L]=v[L]/y;d.envMap.value=e.texture,d.samples.value=h,d.weights.value=v,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:w}=this;d.dTheta.value=g,d.mipInt.value=w-i;const S=this._sizeLods[r],M=3*S*(r>w-cr?r-w+cr:0),A=4*(this._cubeSize-S);Js(t,M,A,3*S,2*S),l.setRenderTarget(t),l.render(f,Oa)}}function AM(n){const e=[],t=[],i=[];let r=n;const s=n-cr+1+Lf.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-cr?l=Lf[o-n+cr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,g=6,m=3,h=2,v=1,y=new Float32Array(m*g*p),w=new Float32Array(h*g*p),S=new Float32Array(v*g*p);for(let A=0;A<p;A++){const L=A%3*2/3-1,_=A>2?0:-1,C=[L,_,0,L+2/3,_,0,L+2/3,_+1,0,L,_,0,L+2/3,_+1,0,L,_+1,0];y.set(C,m*g*A),w.set(d,h*g*A);const D=[A,A,A,A,A,A];S.set(D,v*g*A)}const M=new li;M.setAttribute("position",new vn(y,m)),M.setAttribute("uv",new vn(w,h)),M.setAttribute("faceIndex",new vn(S,v)),e.push(M),r>cr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function If(n,e,t){const i=new Ii(n,e,t);return i.texture.mapping=Go,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Js(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function LM(n,e,t){const i=new Float32Array(Si),r=new W(0,1,0);return new Fi({name:"SphericalGaussianBlur",defines:{n:Si,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:pc(),fragmentShader:`

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
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Ff(){return new Fi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pc(),fragmentShader:`

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
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Nf(){return new Fi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function pc(){return`

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
	`}function RM(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===gl||l===vl,u=l===xr||l===yr;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new Df(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||u&&f&&r(f)){t===null&&(t=new Df(n));const d=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function PM(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function DM(n,e,t,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const g in d)e.update(d[g],34962);const p=f.morphAttributes;for(const g in p){const m=p[g];for(let h=0,v=m.length;h<v;h++)e.update(m[h],34962)}}function c(f){const d=[],p=f.index,g=f.attributes.position;let m=0;if(p!==null){const y=p.array;m=p.version;for(let w=0,S=y.length;w<S;w+=3){const M=y[w+0],A=y[w+1],L=y[w+2];d.push(M,A,A,L,L,M)}}else{const y=g.array;m=g.version;for(let w=0,S=y.length/3-1;w<S;w+=3){const M=w+0,A=w+1,L=w+2;d.push(M,A,A,L,L,M)}}const h=new(gp(d)?Mp:Sp)(d,1);h.version=m;const v=s.get(f);v&&e.remove(v),s.set(f,h)}function u(f){const d=s.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function IM(n,e,t,i){const r=i.isWebGL2;let s;function o(d){s=d}let a,l;function c(d){a=d.type,l=d.bytesPerElement}function u(d,p){n.drawElements(s,p,a,d*l),t.update(p,s,1)}function f(d,p,g){if(g===0)return;let m,h;if(r)m=n,h="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[h](s,p,a,d*l,g),t.update(p,s,g)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=f}function FM(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function NM(n,e){return n[0]-e[0]}function OM(n,e){return Math.abs(e[1])-Math.abs(n[1])}function Ba(n,e){let t=1;const i=e.isInterleavedBufferAttribute?e.data.array:e.array;i instanceof Int8Array?t=127:i instanceof Uint8Array?t=255:i instanceof Uint16Array?t=65535:i instanceof Int16Array?t=32767:i instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",i),n.divideScalar(t)}function zM(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new pt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,f,d){const p=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,m=g!==void 0?g.length:0;let h=s.get(u);if(h===void 0||h.count!==m){let ee=function(){J.dispose(),s.delete(u),u.removeEventListener("dispose",ee)};h!==void 0&&h.texture.dispose();const w=u.morphAttributes.position!==void 0,S=u.morphAttributes.normal!==void 0,M=u.morphAttributes.color!==void 0,A=u.morphAttributes.position||[],L=u.morphAttributes.normal||[],_=u.morphAttributes.color||[];let C=0;w===!0&&(C=1),S===!0&&(C=2),M===!0&&(C=3);let D=u.attributes.position.count*C,O=1;D>e.maxTextureSize&&(O=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const k=new Float32Array(D*O*4*m),J=new yp(k,D,O,m);J.type=Ei,J.needsUpdate=!0;const N=C*4;for(let B=0;B<m;B++){const j=A[B],X=L[B],V=_[B],Y=D*O*4*B;for(let fe=0;fe<j.count;fe++){const ie=fe*N;w===!0&&(o.fromBufferAttribute(j,fe),j.normalized===!0&&Ba(o,j),k[Y+ie+0]=o.x,k[Y+ie+1]=o.y,k[Y+ie+2]=o.z,k[Y+ie+3]=0),S===!0&&(o.fromBufferAttribute(X,fe),X.normalized===!0&&Ba(o,X),k[Y+ie+4]=o.x,k[Y+ie+5]=o.y,k[Y+ie+6]=o.z,k[Y+ie+7]=0),M===!0&&(o.fromBufferAttribute(V,fe),V.normalized===!0&&Ba(o,V),k[Y+ie+8]=o.x,k[Y+ie+9]=o.y,k[Y+ie+10]=o.z,k[Y+ie+11]=V.itemSize===4?o.w:1)}}h={count:m,texture:J,size:new Ke(D,O)},s.set(u,h),u.addEventListener("dispose",ee)}let v=0;for(let w=0;w<p.length;w++)v+=p[w];const y=u.morphTargetsRelative?1:1-v;d.getUniforms().setValue(n,"morphTargetBaseInfluence",y),d.getUniforms().setValue(n,"morphTargetInfluences",p),d.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}else{const g=p===void 0?0:p.length;let m=i[u.id];if(m===void 0||m.length!==g){m=[];for(let S=0;S<g;S++)m[S]=[S,0];i[u.id]=m}for(let S=0;S<g;S++){const M=m[S];M[0]=S,M[1]=p[S]}m.sort(OM);for(let S=0;S<8;S++)S<g&&m[S][1]?(a[S][0]=m[S][0],a[S][1]=m[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort(NM);const h=u.morphAttributes.position,v=u.morphAttributes.normal;let y=0;for(let S=0;S<8;S++){const M=a[S],A=M[0],L=M[1];A!==Number.MAX_SAFE_INTEGER&&L?(h&&u.getAttribute("morphTarget"+S)!==h[A]&&u.setAttribute("morphTarget"+S,h[A]),v&&u.getAttribute("morphNormal"+S)!==v[A]&&u.setAttribute("morphNormal"+S,v[A]),r[S]=L,y+=L):(h&&u.hasAttribute("morphTarget"+S)===!0&&u.deleteAttribute("morphTarget"+S),v&&u.hasAttribute("morphNormal"+S)===!0&&u.deleteAttribute("morphNormal"+S),r[S]=0)}const w=u.morphTargetsRelative?1:1-y;d.getUniforms().setValue(n,"morphTargetBaseInfluence",w),d.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function BM(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);return r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const Ap=new cn,Lp=new yp,Rp=new Ey,Pp=new Ep,Of=[],zf=[],Bf=new Float32Array(16),Uf=new Float32Array(9),kf=new Float32Array(4);function Pr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Of[r];if(s===void 0&&(s=new Float32Array(r),Of[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function wt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Et(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function $o(n,e){let t=zf[e];t===void 0&&(t=new Int32Array(e),zf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function UM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function kM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;n.uniform2fv(this.addr,e),Et(t,e)}}function VM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(wt(t,e))return;n.uniform3fv(this.addr,e),Et(t,e)}}function GM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;n.uniform4fv(this.addr,e),Et(t,e)}}function HM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(wt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Et(t,e)}else{if(wt(t,i))return;kf.set(i),n.uniformMatrix2fv(this.addr,!1,kf),Et(t,i)}}function WM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(wt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Et(t,e)}else{if(wt(t,i))return;Uf.set(i),n.uniformMatrix3fv(this.addr,!1,Uf),Et(t,i)}}function $M(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(wt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Et(t,e)}else{if(wt(t,i))return;Bf.set(i),n.uniformMatrix4fv(this.addr,!1,Bf),Et(t,i)}}function qM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function XM(n,e){const t=this.cache;wt(t,e)||(n.uniform2iv(this.addr,e),Et(t,e))}function jM(n,e){const t=this.cache;wt(t,e)||(n.uniform3iv(this.addr,e),Et(t,e))}function YM(n,e){const t=this.cache;wt(t,e)||(n.uniform4iv(this.addr,e),Et(t,e))}function KM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function ZM(n,e){const t=this.cache;wt(t,e)||(n.uniform2uiv(this.addr,e),Et(t,e))}function JM(n,e){const t=this.cache;wt(t,e)||(n.uniform3uiv(this.addr,e),Et(t,e))}function QM(n,e){const t=this.cache;wt(t,e)||(n.uniform4uiv(this.addr,e),Et(t,e))}function ew(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||Ap,r)}function tw(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Rp,r)}function nw(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Pp,r)}function iw(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Lp,r)}function rw(n){switch(n){case 5126:return UM;case 35664:return kM;case 35665:return VM;case 35666:return GM;case 35674:return HM;case 35675:return WM;case 35676:return $M;case 5124:case 35670:return qM;case 35667:case 35671:return XM;case 35668:case 35672:return jM;case 35669:case 35673:return YM;case 5125:return KM;case 36294:return ZM;case 36295:return JM;case 36296:return QM;case 35678:case 36198:case 36298:case 36306:case 35682:return ew;case 35679:case 36299:case 36307:return tw;case 35680:case 36300:case 36308:case 36293:return nw;case 36289:case 36303:case 36311:case 36292:return iw}}function sw(n,e){n.uniform1fv(this.addr,e)}function ow(n,e){const t=Pr(e,this.size,2);n.uniform2fv(this.addr,t)}function aw(n,e){const t=Pr(e,this.size,3);n.uniform3fv(this.addr,t)}function lw(n,e){const t=Pr(e,this.size,4);n.uniform4fv(this.addr,t)}function cw(n,e){const t=Pr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function uw(n,e){const t=Pr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function fw(n,e){const t=Pr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function dw(n,e){n.uniform1iv(this.addr,e)}function hw(n,e){n.uniform2iv(this.addr,e)}function pw(n,e){n.uniform3iv(this.addr,e)}function mw(n,e){n.uniform4iv(this.addr,e)}function gw(n,e){n.uniform1uiv(this.addr,e)}function vw(n,e){n.uniform2uiv(this.addr,e)}function _w(n,e){n.uniform3uiv(this.addr,e)}function xw(n,e){n.uniform4uiv(this.addr,e)}function yw(n,e,t){const i=e.length,r=$o(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTexture2D(e[s]||Ap,r[s])}function bw(n,e,t){const i=e.length,r=$o(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTexture3D(e[s]||Rp,r[s])}function Sw(n,e,t){const i=e.length,r=$o(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTextureCube(e[s]||Pp,r[s])}function Mw(n,e,t){const i=e.length,r=$o(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTexture2DArray(e[s]||Lp,r[s])}function ww(n){switch(n){case 5126:return sw;case 35664:return ow;case 35665:return aw;case 35666:return lw;case 35674:return cw;case 35675:return uw;case 35676:return fw;case 5124:case 35670:return dw;case 35667:case 35671:return hw;case 35668:case 35672:return pw;case 35669:case 35673:return mw;case 5125:return gw;case 36294:return vw;case 36295:return _w;case 36296:return xw;case 35678:case 36198:case 36298:case 36306:case 35682:return yw;case 35679:case 36299:case 36307:return bw;case 35680:case 36300:case 36308:case 36293:return Sw;case 36289:case 36303:case 36311:case 36292:return Mw}}class Ew{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=rw(t.type)}}class Tw{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=ww(t.type)}}class Cw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Ua=/(\w+)(\])?(\[|\.)?/g;function Vf(n,e){n.seq.push(e),n.map[e.id]=e}function Aw(n,e,t){const i=n.name,r=i.length;for(Ua.lastIndex=0;;){const s=Ua.exec(i),o=Ua.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Vf(t,c===void 0?new Ew(a,n,e):new Tw(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new Cw(a),Vf(t,f)),t=f}}}class oo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,35718);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);Aw(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Gf(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let Lw=0;function Rw(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function Pw(n){switch(n){case Di:return["Linear","( value )"];case nt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}function Hf(n,e,t){const i=n.getShaderParameter(e,35713),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Rw(n.getShaderSource(e),o)}else return r}function Dw(n,e){const t=Pw(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Iw(n,e){let t;switch(e){case Zx:t="Linear";break;case Jx:t="Reinhard";break;case Qx:t="OptimizedCineon";break;case ey:t="ACESFilmic";break;case ty:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Fw(n){return[n.extensionDerivatives||!!n.envMapCubeUVHeight||n.bumpMap||n.tangentSpaceNormalMap||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter($r).join(`
`)}function Nw(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Ow(n,e){const t={},i=n.getProgramParameter(e,35721);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function $r(n){return n!==""}function Wf(n,e){return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $f(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const zw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sl(n){return n.replace(zw,Bw)}function Bw(n,e){const t=Be[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Sl(t)}const Uw=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,kw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qf(n){return n.replace(kw,Dp).replace(Uw,Vw)}function Vw(n,e,t,i){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),Dp(n,e,t,i)}function Dp(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Xf(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Gw(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===up?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Ax?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Wr&&(e="SHADOWMAP_TYPE_VSM"),e}function Hw(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case xr:case yr:e="ENVMAP_TYPE_CUBE";break;case Go:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ww(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case yr:e="ENVMAP_MODE_REFRACTION";break}return e}function $w(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case hp:e="ENVMAP_BLENDING_MULTIPLY";break;case Yx:e="ENVMAP_BLENDING_MIX";break;case Kx:e="ENVMAP_BLENDING_ADD";break}return e}function qw(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Xw(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Gw(t),c=Hw(t),u=Ww(t),f=$w(t),d=qw(t),p=t.isWebGL2?"":Fw(t),g=Nw(s),m=r.createProgram();let h,v,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(h=[g].filter($r).join(`
`),h.length>0&&(h+=`
`),v=[p,g].filter($r).join(`
`),v.length>0&&(v+=`
`)):(h=[Xf(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($r).join(`
`),v=[p,Xf(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==In?"#define TONE_MAPPING":"",t.toneMapping!==In?Be.tonemapping_pars_fragment:"",t.toneMapping!==In?Iw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Be.encodings_pars_fragment,Dw("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter($r).join(`
`)),o=Sl(o),o=Wf(o,t),o=$f(o,t),a=Sl(a),a=Wf(a,t),a=$f(a,t),o=qf(o),a=qf(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,h=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,v=["#define varying in",t.glslVersion===mf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===mf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const w=y+h+o,S=y+v+a,M=Gf(r,35633,w),A=Gf(r,35632,S);if(r.attachShader(m,M),r.attachShader(m,A),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m),n.debug.checkShaderErrors){const C=r.getProgramInfoLog(m).trim(),D=r.getShaderInfoLog(M).trim(),O=r.getShaderInfoLog(A).trim();let k=!0,J=!0;if(r.getProgramParameter(m,35714)===!1){k=!1;const N=Hf(r,M,"vertex"),ee=Hf(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,35715)+`

Program Info Log: `+C+`
`+N+`
`+ee)}else C!==""?console.warn("THREE.WebGLProgram: Program Info Log:",C):(D===""||O==="")&&(J=!1);J&&(this.diagnostics={runnable:k,programLog:C,vertexShader:{log:D,prefix:h},fragmentShader:{log:O,prefix:v}})}r.deleteShader(M),r.deleteShader(A);let L;this.getUniforms=function(){return L===void 0&&(L=new oo(r,m)),L};let _;return this.getAttributes=function(){return _===void 0&&(_=Ow(r,m)),_},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.name=t.shaderName,this.id=Lw++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=M,this.fragmentShader=A,this}let jw=0;class Yw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;return t.has(e)===!1&&t.set(e,new Set),t.get(e)}_getShaderStage(e){const t=this.shaderCache;if(t.has(e)===!1){const i=new Kw(e);t.set(e,i)}return t.get(e)}}class Kw{constructor(e){this.id=jw++,this.code=e,this.usedTimes=0}}function Zw(n,e,t,i,r,s,o){const a=new bp,l=new Yw,c=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(_,C,D,O,k){const J=O.fog,N=k.geometry,ee=_.isMeshStandardMaterial?O.environment:null,B=(_.isMeshStandardMaterial?t:e).get(_.envMap||ee),j=!!B&&B.mapping===Go?B.image.height:null,X=g[_.type];_.precision!==null&&(p=r.getMaxPrecision(_.precision),p!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",p,"instead."));const V=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,Y=V!==void 0?V.length:0;let fe=0;N.morphAttributes.position!==void 0&&(fe=1),N.morphAttributes.normal!==void 0&&(fe=2),N.morphAttributes.color!==void 0&&(fe=3);let ie,he,Me,z;if(X){const Ce=mn[X];ie=Ce.vertexShader,he=Ce.fragmentShader}else ie=_.vertexShader,he=_.fragmentShader,l.update(_),Me=l.getVertexShaderID(_),z=l.getFragmentShaderID(_);const F=n.getRenderTarget(),re=_.alphaTest>0,ae=_.clearcoat>0,be=_.iridescence>0;return{isWebGL2:u,shaderID:X,shaderName:_.type,vertexShader:ie,fragmentShader:he,defines:_.defines,customVertexShaderID:Me,customFragmentShaderID:z,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:p,instancing:k.isInstancedMesh===!0,instancingColor:k.isInstancedMesh===!0&&k.instanceColor!==null,supportsVertexTextures:d,outputEncoding:F===null?n.outputEncoding:F.isXRRenderTarget===!0?F.texture.encoding:Di,map:!!_.map,matcap:!!_.matcap,envMap:!!B,envMapMode:B&&B.mapping,envMapCubeUVHeight:j,lightMap:!!_.lightMap,aoMap:!!_.aoMap,emissiveMap:!!_.emissiveMap,bumpMap:!!_.bumpMap,normalMap:!!_.normalMap,objectSpaceNormalMap:_.normalMapType===by,tangentSpaceNormalMap:_.normalMapType===yy,decodeVideoTexture:!!_.map&&_.map.isVideoTexture===!0&&_.map.encoding===nt,clearcoat:ae,clearcoatMap:ae&&!!_.clearcoatMap,clearcoatRoughnessMap:ae&&!!_.clearcoatRoughnessMap,clearcoatNormalMap:ae&&!!_.clearcoatNormalMap,iridescence:be,iridescenceMap:be&&!!_.iridescenceMap,iridescenceThicknessMap:be&&!!_.iridescenceThicknessMap,displacementMap:!!_.displacementMap,roughnessMap:!!_.roughnessMap,metalnessMap:!!_.metalnessMap,specularMap:!!_.specularMap,specularIntensityMap:!!_.specularIntensityMap,specularColorMap:!!_.specularColorMap,opaque:_.transparent===!1&&_.blending===dr,alphaMap:!!_.alphaMap,alphaTest:re,gradientMap:!!_.gradientMap,sheen:_.sheen>0,sheenColorMap:!!_.sheenColorMap,sheenRoughnessMap:!!_.sheenRoughnessMap,transmission:_.transmission>0,transmissionMap:!!_.transmissionMap,thicknessMap:!!_.thicknessMap,combine:_.combine,vertexTangents:!!_.normalMap&&!!N.attributes.tangent,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUvs:!!_.map||!!_.bumpMap||!!_.normalMap||!!_.specularMap||!!_.alphaMap||!!_.emissiveMap||!!_.roughnessMap||!!_.metalnessMap||!!_.clearcoatMap||!!_.clearcoatRoughnessMap||!!_.clearcoatNormalMap||!!_.iridescenceMap||!!_.iridescenceThicknessMap||!!_.displacementMap||!!_.transmissionMap||!!_.thicknessMap||!!_.specularIntensityMap||!!_.specularColorMap||!!_.sheenColorMap||!!_.sheenRoughnessMap,uvsVertexOnly:!(!!_.map||!!_.bumpMap||!!_.normalMap||!!_.specularMap||!!_.alphaMap||!!_.emissiveMap||!!_.roughnessMap||!!_.metalnessMap||!!_.clearcoatNormalMap||!!_.iridescenceMap||!!_.iridescenceThicknessMap||_.transmission>0||!!_.transmissionMap||!!_.thicknessMap||!!_.specularIntensityMap||!!_.specularColorMap||_.sheen>0||!!_.sheenColorMap||!!_.sheenRoughnessMap)&&!!_.displacementMap,fog:!!J,useFog:_.fog===!0,fogExp2:J&&J.isFogExp2,flatShading:!!_.flatShading,sizeAttenuation:_.sizeAttenuation,logarithmicDepthBuffer:f,skinning:k.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:Y,morphTextureStride:fe,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:_.toneMapped?n.toneMapping:In,physicallyCorrectLights:n.physicallyCorrectLights,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===_r,flipSided:_.side===on,useDepthPacking:!!_.depthPacking,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionDerivatives:_.extensions&&_.extensions.derivatives,extensionFragDepth:_.extensions&&_.extensions.fragDepth,extensionDrawBuffers:_.extensions&&_.extensions.drawBuffers,extensionShaderTextureLOD:_.extensions&&_.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:_.customProgramCacheKey()}}function h(_){const C=[];if(_.shaderID?C.push(_.shaderID):(C.push(_.customVertexShaderID),C.push(_.customFragmentShaderID)),_.defines!==void 0)for(const D in _.defines)C.push(D),C.push(_.defines[D]);return _.isRawShaderMaterial===!1&&(v(C,_),y(C,_),C.push(n.outputEncoding)),C.push(_.customProgramCacheKey),C.join()}function v(_,C){_.push(C.precision),_.push(C.outputEncoding),_.push(C.envMapMode),_.push(C.envMapCubeUVHeight),_.push(C.combine),_.push(C.vertexUvs),_.push(C.fogExp2),_.push(C.sizeAttenuation),_.push(C.morphTargetsCount),_.push(C.morphAttributeCount),_.push(C.numDirLights),_.push(C.numPointLights),_.push(C.numSpotLights),_.push(C.numHemiLights),_.push(C.numRectAreaLights),_.push(C.numDirLightShadows),_.push(C.numPointLightShadows),_.push(C.numSpotLightShadows),_.push(C.shadowMapType),_.push(C.toneMapping),_.push(C.numClippingPlanes),_.push(C.numClipIntersection),_.push(C.depthPacking)}function y(_,C){a.disableAll(),C.isWebGL2&&a.enable(0),C.supportsVertexTextures&&a.enable(1),C.instancing&&a.enable(2),C.instancingColor&&a.enable(3),C.map&&a.enable(4),C.matcap&&a.enable(5),C.envMap&&a.enable(6),C.lightMap&&a.enable(7),C.aoMap&&a.enable(8),C.emissiveMap&&a.enable(9),C.bumpMap&&a.enable(10),C.normalMap&&a.enable(11),C.objectSpaceNormalMap&&a.enable(12),C.tangentSpaceNormalMap&&a.enable(13),C.clearcoat&&a.enable(14),C.clearcoatMap&&a.enable(15),C.clearcoatRoughnessMap&&a.enable(16),C.clearcoatNormalMap&&a.enable(17),C.iridescence&&a.enable(18),C.iridescenceMap&&a.enable(19),C.iridescenceThicknessMap&&a.enable(20),C.displacementMap&&a.enable(21),C.specularMap&&a.enable(22),C.roughnessMap&&a.enable(23),C.metalnessMap&&a.enable(24),C.gradientMap&&a.enable(25),C.alphaMap&&a.enable(26),C.alphaTest&&a.enable(27),C.vertexColors&&a.enable(28),C.vertexAlphas&&a.enable(29),C.vertexUvs&&a.enable(30),C.vertexTangents&&a.enable(31),C.uvsVertexOnly&&a.enable(32),C.fog&&a.enable(33),_.push(a.mask),a.disableAll(),C.useFog&&a.enable(0),C.flatShading&&a.enable(1),C.logarithmicDepthBuffer&&a.enable(2),C.skinning&&a.enable(3),C.morphTargets&&a.enable(4),C.morphNormals&&a.enable(5),C.morphColors&&a.enable(6),C.premultipliedAlpha&&a.enable(7),C.shadowMapEnabled&&a.enable(8),C.physicallyCorrectLights&&a.enable(9),C.doubleSided&&a.enable(10),C.flipSided&&a.enable(11),C.useDepthPacking&&a.enable(12),C.dithering&&a.enable(13),C.specularIntensityMap&&a.enable(14),C.specularColorMap&&a.enable(15),C.transmission&&a.enable(16),C.transmissionMap&&a.enable(17),C.thicknessMap&&a.enable(18),C.sheen&&a.enable(19),C.sheenColorMap&&a.enable(20),C.sheenRoughnessMap&&a.enable(21),C.decodeVideoTexture&&a.enable(22),C.opaque&&a.enable(23),_.push(a.mask)}function w(_){const C=g[_.type];let D;if(C){const O=mn[C];D=By.clone(O.uniforms)}else D=_.uniforms;return D}function S(_,C){let D;for(let O=0,k=c.length;O<k;O++){const J=c[O];if(J.cacheKey===C){D=J,++D.usedTimes;break}}return D===void 0&&(D=new Xw(n,C,_,s),c.push(D)),D}function M(_){if(--_.usedTimes===0){const C=c.indexOf(_);c[C]=c[c.length-1],c.pop(),_.destroy()}}function A(_){l.remove(_)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:w,acquireProgram:S,releaseProgram:M,releaseShaderCache:A,programs:c,dispose:L}}function Jw(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function Qw(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function jf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Yf(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,d,p,g,m,h){let v=n[e];return v===void 0?(v={id:f.id,object:f,geometry:d,material:p,groupOrder:g,renderOrder:f.renderOrder,z:m,group:h},n[e]=v):(v.id=f.id,v.object=f,v.geometry=d,v.material=p,v.groupOrder=g,v.renderOrder=f.renderOrder,v.z=m,v.group=h),e++,v}function a(f,d,p,g,m,h){const v=o(f,d,p,g,m,h);p.transmission>0?i.push(v):p.transparent===!0?r.push(v):t.push(v)}function l(f,d,p,g,m,h){const v=o(f,d,p,g,m,h);p.transmission>0?i.unshift(v):p.transparent===!0?r.unshift(v):t.unshift(v)}function c(f,d){t.length>1&&t.sort(f||Qw),i.length>1&&i.sort(d||jf),r.length>1&&r.sort(d||jf)}function u(){for(let f=e,d=n.length;f<d;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function e1(){let n=new WeakMap;function e(i,r){let s;return n.has(i)===!1?(s=new Yf,n.set(i,[s])):r>=n.get(i).length?(s=new Yf,n.get(i).push(s)):s=n.get(i)[r],s}function t(){n=new WeakMap}return{get:e,dispose:t}}function t1(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new W,color:new Ze};break;case"SpotLight":t={position:new W,direction:new W,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":t={color:new Ze,position:new W,halfWidth:new W,halfHeight:new W};break}return n[e.id]=t,t}}}function n1(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let i1=0;function r1(n,e){return(e.castShadow?1:0)-(n.castShadow?1:0)}function s1(n,e){const t=new t1,i=n1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let u=0;u<9;u++)r.probe.push(new W);const s=new W,o=new gt,a=new gt;function l(u,f){let d=0,p=0,g=0;for(let C=0;C<9;C++)r.probe[C].set(0,0,0);let m=0,h=0,v=0,y=0,w=0,S=0,M=0,A=0;u.sort(r1);const L=f!==!0?Math.PI:1;for(let C=0,D=u.length;C<D;C++){const O=u[C],k=O.color,J=O.intensity,N=O.distance,ee=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)d+=k.r*J*L,p+=k.g*J*L,g+=k.b*J*L;else if(O.isLightProbe)for(let B=0;B<9;B++)r.probe[B].addScaledVector(O.sh.coefficients[B],J);else if(O.isDirectionalLight){const B=t.get(O);if(B.color.copy(O.color).multiplyScalar(O.intensity*L),O.castShadow){const j=O.shadow,X=i.get(O);X.shadowBias=j.bias,X.shadowNormalBias=j.normalBias,X.shadowRadius=j.radius,X.shadowMapSize=j.mapSize,r.directionalShadow[m]=X,r.directionalShadowMap[m]=ee,r.directionalShadowMatrix[m]=O.shadow.matrix,S++}r.directional[m]=B,m++}else if(O.isSpotLight){const B=t.get(O);if(B.position.setFromMatrixPosition(O.matrixWorld),B.color.copy(k).multiplyScalar(J*L),B.distance=N,B.coneCos=Math.cos(O.angle),B.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),B.decay=O.decay,O.castShadow){const j=O.shadow,X=i.get(O);X.shadowBias=j.bias,X.shadowNormalBias=j.normalBias,X.shadowRadius=j.radius,X.shadowMapSize=j.mapSize,r.spotShadow[v]=X,r.spotShadowMap[v]=ee,r.spotShadowMatrix[v]=O.shadow.matrix,A++}r.spot[v]=B,v++}else if(O.isRectAreaLight){const B=t.get(O);B.color.copy(k).multiplyScalar(J),B.halfWidth.set(O.width*.5,0,0),B.halfHeight.set(0,O.height*.5,0),r.rectArea[y]=B,y++}else if(O.isPointLight){const B=t.get(O);if(B.color.copy(O.color).multiplyScalar(O.intensity*L),B.distance=O.distance,B.decay=O.decay,O.castShadow){const j=O.shadow,X=i.get(O);X.shadowBias=j.bias,X.shadowNormalBias=j.normalBias,X.shadowRadius=j.radius,X.shadowMapSize=j.mapSize,X.shadowCameraNear=j.camera.near,X.shadowCameraFar=j.camera.far,r.pointShadow[h]=X,r.pointShadowMap[h]=ee,r.pointShadowMatrix[h]=O.shadow.matrix,M++}r.point[h]=B,h++}else if(O.isHemisphereLight){const B=t.get(O);B.skyColor.copy(O.color).multiplyScalar(J*L),B.groundColor.copy(O.groundColor).multiplyScalar(J*L),r.hemi[w]=B,w++}}y>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=xe.LTC_FLOAT_1,r.rectAreaLTC2=xe.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=xe.LTC_HALF_1,r.rectAreaLTC2=xe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=p,r.ambient[2]=g;const _=r.hash;(_.directionalLength!==m||_.pointLength!==h||_.spotLength!==v||_.rectAreaLength!==y||_.hemiLength!==w||_.numDirectionalShadows!==S||_.numPointShadows!==M||_.numSpotShadows!==A)&&(r.directional.length=m,r.spot.length=v,r.rectArea.length=y,r.point.length=h,r.hemi.length=w,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=M,r.pointShadowMap.length=M,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=M,r.spotShadowMatrix.length=A,_.directionalLength=m,_.pointLength=h,_.spotLength=v,_.rectAreaLength=y,_.hemiLength=w,_.numDirectionalShadows=S,_.numPointShadows=M,_.numSpotShadows=A,r.version=i1++)}function c(u,f){let d=0,p=0,g=0,m=0,h=0;const v=f.matrixWorldInverse;for(let y=0,w=u.length;y<w;y++){const S=u[y];if(S.isDirectionalLight){const M=r.directional[d];M.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(v),d++}else if(S.isSpotLight){const M=r.spot[g];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(v),M.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(v),g++}else if(S.isRectAreaLight){const M=r.rectArea[m];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(v),a.identity(),o.copy(S.matrixWorld),o.premultiply(v),a.extractRotation(o),M.halfWidth.set(S.width*.5,0,0),M.halfHeight.set(0,S.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),m++}else if(S.isPointLight){const M=r.point[p];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(v),p++}else if(S.isHemisphereLight){const M=r.hemi[h];M.direction.setFromMatrixPosition(S.matrixWorld),M.direction.transformDirection(v),h++}}}return{setup:l,setupView:c,state:r}}function Kf(n,e){const t=new s1(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(f){i.push(f)}function a(f){r.push(f)}function l(f){t.setup(i,f)}function c(f){t.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function o1(n,e){let t=new WeakMap;function i(s,o=0){let a;return t.has(s)===!1?(a=new Kf(n,e),t.set(s,[a])):o>=t.get(s).length?(a=new Kf(n,e),t.get(s).push(a)):a=t.get(s)[o],a}function r(){t=new WeakMap}return{get:i,dispose:r}}class a1 extends Wo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_y,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class l1 extends Wo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new W,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const c1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,u1=`uniform sampler2D shadow_pass;
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
}`;function f1(n,e,t){let i=new Tp;const r=new Ke,s=new Ke,o=new pt,a=new a1({depthPacking:xy}),l=new l1,c={},u=t.maxTextureSize,f={0:on,1:hs,2:_r},d=new Fi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:c1,fragmentShader:u1}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new li;g.setAttribute("position",new vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new Pn(g,d),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=up,this.render=function(S,M,A){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||S.length===0)return;const L=n.getRenderTarget(),_=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),D=n.state;D.setBlending(ii),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);for(let O=0,k=S.length;O<k;O++){const J=S[O],N=J.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const ee=N.getFrameExtents();if(r.multiply(ee),s.copy(N.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ee.x),r.x=s.x*ee.x,N.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ee.y),r.y=s.y*ee.y,N.mapSize.y=s.y)),N.map===null){const j=this.type!==Wr?{minFilter:At,magFilter:At}:{};N.map=new Ii(r.x,r.y,j),N.map.texture.name=J.name+".shadowMap",N.camera.updateProjectionMatrix()}n.setRenderTarget(N.map),n.clear();const B=N.getViewportCount();for(let j=0;j<B;j++){const X=N.getViewport(j);o.set(s.x*X.x,s.y*X.y,s.x*X.z,s.y*X.w),D.viewport(o),N.updateMatrices(J,j),i=N.getFrustum(),w(M,A,N.camera,J,this.type)}N.isPointLightShadow!==!0&&this.type===Wr&&v(N,A),N.needsUpdate=!1}h.needsUpdate=!1,n.setRenderTarget(L,_,C)};function v(S,M){const A=e.update(m);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Ii(r.x,r.y)),d.uniforms.shadow_pass.value=S.map.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(M,null,A,d,m,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(M,null,A,p,m,null)}function y(S,M,A,L,_,C){let D=null;const O=A.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(O!==void 0?D=O:D=A.isPointLight===!0?l:a,n.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0){const k=D.uuid,J=M.uuid;let N=c[k];N===void 0&&(N={},c[k]=N);let ee=N[J];ee===void 0&&(ee=D.clone(),N[J]=ee),D=ee}return D.visible=M.visible,D.wireframe=M.wireframe,C===Wr?D.side=M.shadowSide!==null?M.shadowSide:M.side:D.side=M.shadowSide!==null?M.shadowSide:f[M.side],D.alphaMap=M.alphaMap,D.alphaTest=M.alphaTest,D.clipShadows=M.clipShadows,D.clippingPlanes=M.clippingPlanes,D.clipIntersection=M.clipIntersection,D.displacementMap=M.displacementMap,D.displacementScale=M.displacementScale,D.displacementBias=M.displacementBias,D.wireframeLinewidth=M.wireframeLinewidth,D.linewidth=M.linewidth,A.isPointLight===!0&&D.isMeshDistanceMaterial===!0&&(D.referencePosition.setFromMatrixPosition(A.matrixWorld),D.nearDistance=L,D.farDistance=_),D}function w(S,M,A,L,_){if(S.visible===!1)return;if(S.layers.test(M.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&_===Wr)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,S.matrixWorld);const O=e.update(S),k=S.material;if(Array.isArray(k)){const J=O.groups;for(let N=0,ee=J.length;N<ee;N++){const B=J[N],j=k[B.materialIndex];if(j&&j.visible){const X=y(S,j,L,A.near,A.far,_);n.renderBufferDirect(A,null,O,X,S,B)}}}else if(k.visible){const J=y(S,k,L,A.near,A.far,_);n.renderBufferDirect(A,null,O,J,S,null)}}const D=S.children;for(let O=0,k=D.length;O<k;O++)w(D[O],M,A,L,_)}}function d1(n,e,t){const i=t.isWebGL2;function r(){let P=!1;const we=new pt;let Q=null;const Te=new pt(0,0,0,0);return{setMask:function(Ee){Q!==Ee&&!P&&(n.colorMask(Ee,Ee,Ee,Ee),Q=Ee)},setLocked:function(Ee){P=Ee},setClear:function(Ee,We,ft,rt,Bn){Bn===!0&&(Ee*=rt,We*=rt,ft*=rt),we.set(Ee,We,ft,rt),Te.equals(we)===!1&&(n.clearColor(Ee,We,ft,rt),Te.copy(we))},reset:function(){P=!1,Q=null,Te.set(-1,0,0,0)}}}function s(){let P=!1,we=null,Q=null,Te=null;return{setTest:function(Ee){Ee?re(2929):ae(2929)},setMask:function(Ee){we!==Ee&&!P&&(n.depthMask(Ee),we=Ee)},setFunc:function(Ee){if(Q!==Ee){if(Ee)switch(Ee){case Gx:n.depthFunc(512);break;case Hx:n.depthFunc(519);break;case Wx:n.depthFunc(513);break;case ml:n.depthFunc(515);break;case $x:n.depthFunc(514);break;case qx:n.depthFunc(518);break;case Xx:n.depthFunc(516);break;case jx:n.depthFunc(517);break;default:n.depthFunc(515)}else n.depthFunc(515);Q=Ee}},setLocked:function(Ee){P=Ee},setClear:function(Ee){Te!==Ee&&(n.clearDepth(Ee),Te=Ee)},reset:function(){P=!1,we=null,Q=null,Te=null}}}function o(){let P=!1,we=null,Q=null,Te=null,Ee=null,We=null,ft=null,rt=null,Bn=null;return{setTest:function(et){P||(et?re(2960):ae(2960))},setMask:function(et){we!==et&&!P&&(n.stencilMask(et),we=et)},setFunc:function(et,yn,Ut){(Q!==et||Te!==yn||Ee!==Ut)&&(n.stencilFunc(et,yn,Ut),Q=et,Te=yn,Ee=Ut)},setOp:function(et,yn,Ut){(We!==et||ft!==yn||rt!==Ut)&&(n.stencilOp(et,yn,Ut),We=et,ft=yn,rt=Ut)},setLocked:function(et){P=et},setClear:function(et){Bn!==et&&(n.clearStencil(et),Bn=et)},reset:function(){P=!1,we=null,Q=null,Te=null,Ee=null,We=null,ft=null,rt=null,Bn=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,f=new WeakMap;let d={},p={},g=new WeakMap,m=[],h=null,v=!1,y=null,w=null,S=null,M=null,A=null,L=null,_=null,C=!1,D=null,O=null,k=null,J=null,N=null;const ee=n.getParameter(35661);let B=!1,j=0;const X=n.getParameter(7938);X.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(X)[1]),B=j>=1):X.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),B=j>=2);let V=null,Y={};const fe=n.getParameter(3088),ie=n.getParameter(2978),he=new pt().fromArray(fe),Me=new pt().fromArray(ie);function z(P,we,Q){const Te=new Uint8Array(4),Ee=n.createTexture();n.bindTexture(P,Ee),n.texParameteri(P,10241,9728),n.texParameteri(P,10240,9728);for(let We=0;We<Q;We++)n.texImage2D(we+We,0,6408,1,1,0,6408,5121,Te);return Ee}const F={};F[3553]=z(3553,3553,1),F[34067]=z(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),re(2929),l.setFunc(ml),te(!1),ne(Bu),re(2884),R(ii);function re(P){d[P]!==!0&&(n.enable(P),d[P]=!0)}function ae(P){d[P]!==!1&&(n.disable(P),d[P]=!1)}function be(P,we){return p[P]!==we?(n.bindFramebuffer(P,we),p[P]=we,i&&(P===36009&&(p[36160]=we),P===36160&&(p[36009]=we)),!0):!1}function ge(P,we){let Q=m,Te=!1;if(P)if(Q=g.get(we),Q===void 0&&(Q=[],g.set(we,Q)),P.isWebGLMultipleRenderTargets){const Ee=P.texture;if(Q.length!==Ee.length||Q[0]!==36064){for(let We=0,ft=Ee.length;We<ft;We++)Q[We]=36064+We;Q.length=Ee.length,Te=!0}}else Q[0]!==36064&&(Q[0]=36064,Te=!0);else Q[0]!==1029&&(Q[0]=1029,Te=!0);Te&&(t.isWebGL2?n.drawBuffers(Q):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Q))}function Ce(P){return h!==P?(n.useProgram(P),h=P,!0):!1}const ve={[ar]:32774,[Px]:32778,[Dx]:32779};if(i)ve[Gu]=32775,ve[Hu]=32776;else{const P=e.get("EXT_blend_minmax");P!==null&&(ve[Gu]=P.MIN_EXT,ve[Hu]=P.MAX_EXT)}const E={[Ix]:0,[Fx]:1,[Nx]:768,[fp]:770,[Vx]:776,[Ux]:774,[zx]:772,[Ox]:769,[dp]:771,[kx]:775,[Bx]:773};function R(P,we,Q,Te,Ee,We,ft,rt){if(P===ii){v===!0&&(ae(3042),v=!1);return}if(v===!1&&(re(3042),v=!0),P!==Rx){if(P!==y||rt!==C){if((w!==ar||A!==ar)&&(n.blendEquation(32774),w=ar,A=ar),rt)switch(P){case dr:n.blendFuncSeparate(1,771,1,771);break;case Uu:n.blendFunc(1,1);break;case ku:n.blendFuncSeparate(0,769,0,1);break;case Vu:n.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case dr:n.blendFuncSeparate(770,771,1,771);break;case Uu:n.blendFunc(770,1);break;case ku:n.blendFuncSeparate(0,769,0,1);break;case Vu:n.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}S=null,M=null,L=null,_=null,y=P,C=rt}return}Ee=Ee||we,We=We||Q,ft=ft||Te,(we!==w||Ee!==A)&&(n.blendEquationSeparate(ve[we],ve[Ee]),w=we,A=Ee),(Q!==S||Te!==M||We!==L||ft!==_)&&(n.blendFuncSeparate(E[Q],E[Te],E[We],E[ft]),S=Q,M=Te,L=We,_=ft),y=P,C=null}function G(P,we){P.side===_r?ae(2884):re(2884);let Q=P.side===on;we&&(Q=!Q),te(Q),P.blending===dr&&P.transparent===!1?R(ii):R(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),a.setMask(P.colorWrite);const Te=P.stencilWrite;c.setTest(Te),Te&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),ue(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?re(32926):ae(32926)}function te(P){D!==P&&(P?n.frontFace(2304):n.frontFace(2305),D=P)}function ne(P){P!==Tx?(re(2884),P!==O&&(P===Bu?n.cullFace(1029):P===Cx?n.cullFace(1028):n.cullFace(1032))):ae(2884),O=P}function ce(P){P!==k&&(B&&n.lineWidth(P),k=P)}function ue(P,we,Q){P?(re(32823),(J!==we||N!==Q)&&(n.polygonOffset(we,Q),J=we,N=Q)):ae(32823)}function de(P){P?re(3089):ae(3089)}function me(P){P===void 0&&(P=33984+ee-1),V!==P&&(n.activeTexture(P),V=P)}function b(P,we){V===null&&me();let Q=Y[V];Q===void 0&&(Q={type:void 0,texture:void 0},Y[V]=Q),(Q.type!==P||Q.texture!==we)&&(n.bindTexture(P,we||F[P]),Q.type=P,Q.texture=we)}function x(){const P=Y[V];P!==void 0&&P.type!==void 0&&(n.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function I(){try{n.compressedTexImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function $(){try{n.texSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Z(){try{n.texSubImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function oe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Se(){try{n.texStorage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function U(){try{n.texStorage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function _e(){try{n.texImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ye(){try{n.texImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Le(P){he.equals(P)===!1&&(n.scissor(P.x,P.y,P.z,P.w),he.copy(P))}function Ae(P){Me.equals(P)===!1&&(n.viewport(P.x,P.y,P.z,P.w),Me.copy(P))}function Re(P,we){let Q=f.get(we);Q===void 0&&(Q=new WeakMap,f.set(we,Q));let Te=Q.get(P);Te===void 0&&(Te=n.getUniformBlockIndex(we,P.name),Q.set(P,Te))}function Ve(P,we){const Te=f.get(we).get(P);u.get(P)!==Te&&(n.uniformBlockBinding(we,Te,P.__bindingPointIndex),u.set(P,Te))}function Ue(){n.disable(3042),n.disable(2884),n.disable(2929),n.disable(32823),n.disable(3089),n.disable(2960),n.disable(32926),n.blendEquation(32774),n.blendFunc(1,0),n.blendFuncSeparate(1,0,1,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(513),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(519,0,4294967295),n.stencilOp(7680,7680,7680),n.clearStencil(0),n.cullFace(1029),n.frontFace(2305),n.polygonOffset(0,0),n.activeTexture(33984),n.bindFramebuffer(36160,null),i===!0&&(n.bindFramebuffer(36009,null),n.bindFramebuffer(36008,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},V=null,Y={},p={},g=new WeakMap,m=[],h=null,v=!1,y=null,w=null,S=null,M=null,A=null,L=null,_=null,C=!1,D=null,O=null,k=null,J=null,N=null,he.set(0,0,n.canvas.width,n.canvas.height),Me.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:re,disable:ae,bindFramebuffer:be,drawBuffers:ge,useProgram:Ce,setBlending:R,setMaterial:G,setFlipSided:te,setCullFace:ne,setLineWidth:ce,setPolygonOffset:ue,setScissorTest:de,activeTexture:me,bindTexture:b,unbindTexture:x,compressedTexImage2D:I,texImage2D:_e,texImage3D:ye,updateUBOMapping:Re,uniformBlockBinding:Ve,texStorage2D:Se,texStorage3D:U,texSubImage2D:$,texSubImage3D:Z,compressedTexSubImage2D:oe,scissor:Le,viewport:Ae,reset:Ue}}function h1(n,e,t,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,f=r.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let m;const h=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(b,x){return v?new OffscreenCanvas(b,x):yo("canvas")}function w(b,x,I,$){let Z=1;if((b.width>$||b.height>$)&&(Z=$/Math.max(b.width,b.height)),Z<1||x===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const oe=x?bl:Math.floor,Se=oe(Z*b.width),U=oe(Z*b.height);m===void 0&&(m=y(Se,U));const _e=I?y(Se,U):m;return _e.width=Se,_e.height=U,_e.getContext("2d").drawImage(b,0,0,Se,U),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+Se+"x"+U+")."),_e}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function S(b){return vf(b.width)&&vf(b.height)}function M(b){return a?!1:b.wrapS!==tn||b.wrapT!==tn||b.minFilter!==At&&b.minFilter!==Ht}function A(b,x){return b.generateMipmaps&&x&&b.minFilter!==At&&b.minFilter!==Ht}function L(b){n.generateMipmap(b)}function _(b,x,I,$,Z=!1){if(a===!1)return x;if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let oe=x;return x===6403&&(I===5126&&(oe=33326),I===5131&&(oe=33325),I===5121&&(oe=33321)),x===33319&&(I===5126&&(oe=33328),I===5131&&(oe=33327),I===5121&&(oe=33323)),x===6408&&(I===5126&&(oe=34836),I===5131&&(oe=34842),I===5121&&(oe=$===nt&&Z===!1?35907:32856),I===32819&&(oe=32854),I===32820&&(oe=32855)),(oe===33325||oe===33326||oe===33327||oe===33328||oe===34842||oe===34836)&&e.get("EXT_color_buffer_float"),oe}function C(b,x,I){return A(b,I)===!0||b.isFramebufferTexture&&b.minFilter!==At&&b.minFilter!==Ht?Math.log2(Math.max(x.width,x.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?x.mipmaps.length:1}function D(b){return b===At||b===Wu||b===$u?9728:9729}function O(b){const x=b.target;x.removeEventListener("dispose",O),J(x),x.isVideoTexture&&g.delete(x)}function k(b){const x=b.target;x.removeEventListener("dispose",k),ee(x)}function J(b){const x=i.get(b);if(x.__webglInit===void 0)return;const I=b.source,$=h.get(I);if($){const Z=$[x.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&N(b),Object.keys($).length===0&&h.delete(I)}i.remove(b)}function N(b){const x=i.get(b);n.deleteTexture(x.__webglTexture);const I=b.source,$=h.get(I);delete $[x.__cacheKey],o.memory.textures--}function ee(b){const x=b.texture,I=i.get(b),$=i.get(x);if($.__webglTexture!==void 0&&(n.deleteTexture($.__webglTexture),o.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++)n.deleteFramebuffer(I.__webglFramebuffer[Z]),I.__webglDepthbuffer&&n.deleteRenderbuffer(I.__webglDepthbuffer[Z]);else{if(n.deleteFramebuffer(I.__webglFramebuffer),I.__webglDepthbuffer&&n.deleteRenderbuffer(I.__webglDepthbuffer),I.__webglMultisampledFramebuffer&&n.deleteFramebuffer(I.__webglMultisampledFramebuffer),I.__webglColorRenderbuffer)for(let Z=0;Z<I.__webglColorRenderbuffer.length;Z++)I.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(I.__webglColorRenderbuffer[Z]);I.__webglDepthRenderbuffer&&n.deleteRenderbuffer(I.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let Z=0,oe=x.length;Z<oe;Z++){const Se=i.get(x[Z]);Se.__webglTexture&&(n.deleteTexture(Se.__webglTexture),o.memory.textures--),i.remove(x[Z])}i.remove(x),i.remove(b)}let B=0;function j(){B=0}function X(){const b=B;return b>=l&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+l),B+=1,b}function V(b){const x=[];return x.push(b.wrapS),x.push(b.wrapT),x.push(b.magFilter),x.push(b.minFilter),x.push(b.anisotropy),x.push(b.internalFormat),x.push(b.format),x.push(b.type),x.push(b.generateMipmaps),x.push(b.premultiplyAlpha),x.push(b.flipY),x.push(b.unpackAlignment),x.push(b.encoding),x.join()}function Y(b,x){const I=i.get(b);if(b.isVideoTexture&&de(b),b.isRenderTargetTexture===!1&&b.version>0&&I.__version!==b.version){const $=b.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ae(I,b,x);return}}t.activeTexture(33984+x),t.bindTexture(3553,I.__webglTexture)}function fe(b,x){const I=i.get(b);if(b.version>0&&I.__version!==b.version){ae(I,b,x);return}t.activeTexture(33984+x),t.bindTexture(35866,I.__webglTexture)}function ie(b,x){const I=i.get(b);if(b.version>0&&I.__version!==b.version){ae(I,b,x);return}t.activeTexture(33984+x),t.bindTexture(32879,I.__webglTexture)}function he(b,x){const I=i.get(b);if(b.version>0&&I.__version!==b.version){be(I,b,x);return}t.activeTexture(33984+x),t.bindTexture(34067,I.__webglTexture)}const Me={[_l]:10497,[tn]:33071,[xl]:33648},z={[At]:9728,[Wu]:9984,[$u]:9986,[Ht]:9729,[ny]:9985,[Ho]:9987};function F(b,x,I){if(I?(n.texParameteri(b,10242,Me[x.wrapS]),n.texParameteri(b,10243,Me[x.wrapT]),(b===32879||b===35866)&&n.texParameteri(b,32882,Me[x.wrapR]),n.texParameteri(b,10240,z[x.magFilter]),n.texParameteri(b,10241,z[x.minFilter])):(n.texParameteri(b,10242,33071),n.texParameteri(b,10243,33071),(b===32879||b===35866)&&n.texParameteri(b,32882,33071),(x.wrapS!==tn||x.wrapT!==tn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(b,10240,D(x.magFilter)),n.texParameteri(b,10241,D(x.minFilter)),x.minFilter!==At&&x.minFilter!==Ht&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const $=e.get("EXT_texture_filter_anisotropic");if(x.type===Ei&&e.has("OES_texture_float_linear")===!1||a===!1&&x.type===ps&&e.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||i.get(x).__currentAnisotropy)&&(n.texParameterf(b,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy)}}function re(b,x){let I=!1;b.__webglInit===void 0&&(b.__webglInit=!0,x.addEventListener("dispose",O));const $=x.source;let Z=h.get($);Z===void 0&&(Z={},h.set($,Z));const oe=V(x);if(oe!==b.__cacheKey){Z[oe]===void 0&&(Z[oe]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,I=!0),Z[oe].usedTimes++;const Se=Z[b.__cacheKey];Se!==void 0&&(Z[b.__cacheKey].usedTimes--,Se.usedTimes===0&&N(x)),b.__cacheKey=oe,b.__webglTexture=Z[oe].texture}return I}function ae(b,x,I){let $=3553;x.isDataArrayTexture&&($=35866),x.isData3DTexture&&($=32879);const Z=re(b,x),oe=x.source;if(t.activeTexture(33984+I),t.bindTexture($,b.__webglTexture),oe.version!==oe.__currentVersion||Z===!0){n.pixelStorei(37440,x.flipY),n.pixelStorei(37441,x.premultiplyAlpha),n.pixelStorei(3317,x.unpackAlignment),n.pixelStorei(37443,0);const Se=M(x)&&S(x.image)===!1;let U=w(x.image,Se,!1,u);U=me(x,U);const _e=S(U)||a,ye=s.convert(x.format,x.encoding);let Le=s.convert(x.type),Ae=_(x.internalFormat,ye,Le,x.encoding,x.isVideoTexture);F($,x,_e);let Re;const Ve=x.mipmaps,Ue=a&&x.isVideoTexture!==!0,P=oe.__currentVersion===void 0||Z===!0,we=C(x,U,_e);if(x.isDepthTexture)Ae=6402,a?x.type===Ei?Ae=36012:x.type===wi?Ae=33190:x.type===hr?Ae=35056:Ae=33189:x.type===Ei&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===Li&&Ae===6402&&x.type!==mp&&x.type!==wi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=wi,Le=s.convert(x.type)),x.format===br&&Ae===6402&&(Ae=34041,x.type!==hr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=hr,Le=s.convert(x.type))),P&&(Ue?t.texStorage2D(3553,1,Ae,U.width,U.height):t.texImage2D(3553,0,Ae,U.width,U.height,0,ye,Le,null));else if(x.isDataTexture)if(Ve.length>0&&_e){Ue&&P&&t.texStorage2D(3553,we,Ae,Ve[0].width,Ve[0].height);for(let Q=0,Te=Ve.length;Q<Te;Q++)Re=Ve[Q],Ue?t.texSubImage2D(3553,Q,0,0,Re.width,Re.height,ye,Le,Re.data):t.texImage2D(3553,Q,Ae,Re.width,Re.height,0,ye,Le,Re.data);x.generateMipmaps=!1}else Ue?(P&&t.texStorage2D(3553,we,Ae,U.width,U.height),t.texSubImage2D(3553,0,0,0,U.width,U.height,ye,Le,U.data)):t.texImage2D(3553,0,Ae,U.width,U.height,0,ye,Le,U.data);else if(x.isCompressedTexture){Ue&&P&&t.texStorage2D(3553,we,Ae,Ve[0].width,Ve[0].height);for(let Q=0,Te=Ve.length;Q<Te;Q++)Re=Ve[Q],x.format!==gn?ye!==null?Ue?t.compressedTexSubImage2D(3553,Q,0,0,Re.width,Re.height,ye,Re.data):t.compressedTexImage2D(3553,Q,Ae,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?t.texSubImage2D(3553,Q,0,0,Re.width,Re.height,ye,Le,Re.data):t.texImage2D(3553,Q,Ae,Re.width,Re.height,0,ye,Le,Re.data)}else if(x.isDataArrayTexture)Ue?(P&&t.texStorage3D(35866,we,Ae,U.width,U.height,U.depth),t.texSubImage3D(35866,0,0,0,0,U.width,U.height,U.depth,ye,Le,U.data)):t.texImage3D(35866,0,Ae,U.width,U.height,U.depth,0,ye,Le,U.data);else if(x.isData3DTexture)Ue?(P&&t.texStorage3D(32879,we,Ae,U.width,U.height,U.depth),t.texSubImage3D(32879,0,0,0,0,U.width,U.height,U.depth,ye,Le,U.data)):t.texImage3D(32879,0,Ae,U.width,U.height,U.depth,0,ye,Le,U.data);else if(x.isFramebufferTexture){if(P)if(Ue)t.texStorage2D(3553,we,Ae,U.width,U.height);else{let Q=U.width,Te=U.height;for(let Ee=0;Ee<we;Ee++)t.texImage2D(3553,Ee,Ae,Q,Te,0,ye,Le,null),Q>>=1,Te>>=1}}else if(Ve.length>0&&_e){Ue&&P&&t.texStorage2D(3553,we,Ae,Ve[0].width,Ve[0].height);for(let Q=0,Te=Ve.length;Q<Te;Q++)Re=Ve[Q],Ue?t.texSubImage2D(3553,Q,0,0,ye,Le,Re):t.texImage2D(3553,Q,Ae,ye,Le,Re);x.generateMipmaps=!1}else Ue?(P&&t.texStorage2D(3553,we,Ae,U.width,U.height),t.texSubImage2D(3553,0,0,0,ye,Le,U)):t.texImage2D(3553,0,Ae,ye,Le,U);A(x,_e)&&L($),oe.__currentVersion=oe.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function be(b,x,I){if(x.image.length!==6)return;const $=re(b,x),Z=x.source;if(t.activeTexture(33984+I),t.bindTexture(34067,b.__webglTexture),Z.version!==Z.__currentVersion||$===!0){n.pixelStorei(37440,x.flipY),n.pixelStorei(37441,x.premultiplyAlpha),n.pixelStorei(3317,x.unpackAlignment),n.pixelStorei(37443,0);const oe=x.isCompressedTexture||x.image[0].isCompressedTexture,Se=x.image[0]&&x.image[0].isDataTexture,U=[];for(let Q=0;Q<6;Q++)!oe&&!Se?U[Q]=w(x.image[Q],!1,!0,c):U[Q]=Se?x.image[Q].image:x.image[Q],U[Q]=me(x,U[Q]);const _e=U[0],ye=S(_e)||a,Le=s.convert(x.format,x.encoding),Ae=s.convert(x.type),Re=_(x.internalFormat,Le,Ae,x.encoding),Ve=a&&x.isVideoTexture!==!0,Ue=Z.__currentVersion===void 0||$===!0;let P=C(x,_e,ye);F(34067,x,ye);let we;if(oe){Ve&&Ue&&t.texStorage2D(34067,P,Re,_e.width,_e.height);for(let Q=0;Q<6;Q++){we=U[Q].mipmaps;for(let Te=0;Te<we.length;Te++){const Ee=we[Te];x.format!==gn?Le!==null?Ve?t.compressedTexSubImage2D(34069+Q,Te,0,0,Ee.width,Ee.height,Le,Ee.data):t.compressedTexImage2D(34069+Q,Te,Re,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?t.texSubImage2D(34069+Q,Te,0,0,Ee.width,Ee.height,Le,Ae,Ee.data):t.texImage2D(34069+Q,Te,Re,Ee.width,Ee.height,0,Le,Ae,Ee.data)}}}else{we=x.mipmaps,Ve&&Ue&&(we.length>0&&P++,t.texStorage2D(34067,P,Re,U[0].width,U[0].height));for(let Q=0;Q<6;Q++)if(Se){Ve?t.texSubImage2D(34069+Q,0,0,0,U[Q].width,U[Q].height,Le,Ae,U[Q].data):t.texImage2D(34069+Q,0,Re,U[Q].width,U[Q].height,0,Le,Ae,U[Q].data);for(let Te=0;Te<we.length;Te++){const We=we[Te].image[Q].image;Ve?t.texSubImage2D(34069+Q,Te+1,0,0,We.width,We.height,Le,Ae,We.data):t.texImage2D(34069+Q,Te+1,Re,We.width,We.height,0,Le,Ae,We.data)}}else{Ve?t.texSubImage2D(34069+Q,0,0,0,Le,Ae,U[Q]):t.texImage2D(34069+Q,0,Re,Le,Ae,U[Q]);for(let Te=0;Te<we.length;Te++){const Ee=we[Te];Ve?t.texSubImage2D(34069+Q,Te+1,0,0,Le,Ae,Ee.image[Q]):t.texImage2D(34069+Q,Te+1,Re,Le,Ae,Ee.image[Q])}}}A(x,ye)&&L(34067),Z.__currentVersion=Z.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function ge(b,x,I,$,Z){const oe=s.convert(I.format,I.encoding),Se=s.convert(I.type),U=_(I.internalFormat,oe,Se,I.encoding);i.get(x).__hasExternalTextures||(Z===32879||Z===35866?t.texImage3D(Z,0,U,x.width,x.height,x.depth,0,oe,Se,null):t.texImage2D(Z,0,U,x.width,x.height,0,oe,Se,null)),t.bindFramebuffer(36160,b),ue(x)?d.framebufferTexture2DMultisampleEXT(36160,$,Z,i.get(I).__webglTexture,0,ce(x)):n.framebufferTexture2D(36160,$,Z,i.get(I).__webglTexture,0),t.bindFramebuffer(36160,null)}function Ce(b,x,I){if(n.bindRenderbuffer(36161,b),x.depthBuffer&&!x.stencilBuffer){let $=33189;if(I||ue(x)){const Z=x.depthTexture;Z&&Z.isDepthTexture&&(Z.type===Ei?$=36012:Z.type===wi&&($=33190));const oe=ce(x);ue(x)?d.renderbufferStorageMultisampleEXT(36161,oe,$,x.width,x.height):n.renderbufferStorageMultisample(36161,oe,$,x.width,x.height)}else n.renderbufferStorage(36161,$,x.width,x.height);n.framebufferRenderbuffer(36160,36096,36161,b)}else if(x.depthBuffer&&x.stencilBuffer){const $=ce(x);I&&ue(x)===!1?n.renderbufferStorageMultisample(36161,$,35056,x.width,x.height):ue(x)?d.renderbufferStorageMultisampleEXT(36161,$,35056,x.width,x.height):n.renderbufferStorage(36161,34041,x.width,x.height),n.framebufferRenderbuffer(36160,33306,36161,b)}else{const $=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let Z=0;Z<$.length;Z++){const oe=$[Z],Se=s.convert(oe.format,oe.encoding),U=s.convert(oe.type),_e=_(oe.internalFormat,Se,U,oe.encoding),ye=ce(x);I&&ue(x)===!1?n.renderbufferStorageMultisample(36161,ye,_e,x.width,x.height):ue(x)?d.renderbufferStorageMultisampleEXT(36161,ye,_e,x.width,x.height):n.renderbufferStorage(36161,_e,x.width,x.height)}}n.bindRenderbuffer(36161,null)}function ve(b,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,b),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),Y(x.depthTexture,0);const $=i.get(x.depthTexture).__webglTexture,Z=ce(x);if(x.depthTexture.format===Li)ue(x)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,$,0,Z):n.framebufferTexture2D(36160,36096,3553,$,0);else if(x.depthTexture.format===br)ue(x)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,$,0,Z):n.framebufferTexture2D(36160,33306,3553,$,0);else throw new Error("Unknown depthTexture format")}function E(b){const x=i.get(b),I=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!x.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");ve(x.__webglFramebuffer,b)}else if(I){x.__webglDepthbuffer=[];for(let $=0;$<6;$++)t.bindFramebuffer(36160,x.__webglFramebuffer[$]),x.__webglDepthbuffer[$]=n.createRenderbuffer(),Ce(x.__webglDepthbuffer[$],b,!1)}else t.bindFramebuffer(36160,x.__webglFramebuffer),x.__webglDepthbuffer=n.createRenderbuffer(),Ce(x.__webglDepthbuffer,b,!1);t.bindFramebuffer(36160,null)}function R(b,x,I){const $=i.get(b);x!==void 0&&ge($.__webglFramebuffer,b,b.texture,36064,3553),I!==void 0&&E(b)}function G(b){const x=b.texture,I=i.get(b),$=i.get(x);b.addEventListener("dispose",k),b.isWebGLMultipleRenderTargets!==!0&&($.__webglTexture===void 0&&($.__webglTexture=n.createTexture()),$.__version=x.version,o.memory.textures++);const Z=b.isWebGLCubeRenderTarget===!0,oe=b.isWebGLMultipleRenderTargets===!0,Se=S(b)||a;if(Z){I.__webglFramebuffer=[];for(let U=0;U<6;U++)I.__webglFramebuffer[U]=n.createFramebuffer()}else{if(I.__webglFramebuffer=n.createFramebuffer(),oe)if(r.drawBuffers){const U=b.texture;for(let _e=0,ye=U.length;_e<ye;_e++){const Le=i.get(U[_e]);Le.__webglTexture===void 0&&(Le.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&b.samples>0&&ue(b)===!1){const U=oe?x:[x];I.__webglMultisampledFramebuffer=n.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,I.__webglMultisampledFramebuffer);for(let _e=0;_e<U.length;_e++){const ye=U[_e];I.__webglColorRenderbuffer[_e]=n.createRenderbuffer(),n.bindRenderbuffer(36161,I.__webglColorRenderbuffer[_e]);const Le=s.convert(ye.format,ye.encoding),Ae=s.convert(ye.type),Re=_(ye.internalFormat,Le,Ae,ye.encoding),Ve=ce(b);n.renderbufferStorageMultisample(36161,Ve,Re,b.width,b.height),n.framebufferRenderbuffer(36160,36064+_e,36161,I.__webglColorRenderbuffer[_e])}n.bindRenderbuffer(36161,null),b.depthBuffer&&(I.__webglDepthRenderbuffer=n.createRenderbuffer(),Ce(I.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(36160,null)}}if(Z){t.bindTexture(34067,$.__webglTexture),F(34067,x,Se);for(let U=0;U<6;U++)ge(I.__webglFramebuffer[U],b,x,36064,34069+U);A(x,Se)&&L(34067),t.unbindTexture()}else if(oe){const U=b.texture;for(let _e=0,ye=U.length;_e<ye;_e++){const Le=U[_e],Ae=i.get(Le);t.bindTexture(3553,Ae.__webglTexture),F(3553,Le,Se),ge(I.__webglFramebuffer,b,Le,36064+_e,3553),A(Le,Se)&&L(3553)}t.unbindTexture()}else{let U=3553;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(a?U=b.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(U,$.__webglTexture),F(U,x,Se),ge(I.__webglFramebuffer,b,x,36064,U),A(x,Se)&&L(U),t.unbindTexture()}b.depthBuffer&&E(b)}function te(b){const x=S(b)||a,I=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let $=0,Z=I.length;$<Z;$++){const oe=I[$];if(A(oe,x)){const Se=b.isWebGLCubeRenderTarget?34067:3553,U=i.get(oe).__webglTexture;t.bindTexture(Se,U),L(Se),t.unbindTexture()}}}function ne(b){if(a&&b.samples>0&&ue(b)===!1){const x=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],I=b.width,$=b.height;let Z=16384;const oe=[],Se=b.stencilBuffer?33306:36096,U=i.get(b),_e=b.isWebGLMultipleRenderTargets===!0;if(_e)for(let ye=0;ye<x.length;ye++)t.bindFramebuffer(36160,U.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+ye,36161,null),t.bindFramebuffer(36160,U.__webglFramebuffer),n.framebufferTexture2D(36009,36064+ye,3553,null,0);t.bindFramebuffer(36008,U.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,U.__webglFramebuffer);for(let ye=0;ye<x.length;ye++){oe.push(36064+ye),b.depthBuffer&&oe.push(Se);const Le=U.__ignoreDepthValues!==void 0?U.__ignoreDepthValues:!1;if(Le===!1&&(b.depthBuffer&&(Z|=256),b.stencilBuffer&&(Z|=1024)),_e&&n.framebufferRenderbuffer(36008,36064,36161,U.__webglColorRenderbuffer[ye]),Le===!0&&(n.invalidateFramebuffer(36008,[Se]),n.invalidateFramebuffer(36009,[Se])),_e){const Ae=i.get(x[ye]).__webglTexture;n.framebufferTexture2D(36009,36064,3553,Ae,0)}n.blitFramebuffer(0,0,I,$,0,0,I,$,Z,9728),p&&n.invalidateFramebuffer(36008,oe)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),_e)for(let ye=0;ye<x.length;ye++){t.bindFramebuffer(36160,U.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+ye,36161,U.__webglColorRenderbuffer[ye]);const Le=i.get(x[ye]).__webglTexture;t.bindFramebuffer(36160,U.__webglFramebuffer),n.framebufferTexture2D(36009,36064+ye,3553,Le,0)}t.bindFramebuffer(36009,U.__webglMultisampledFramebuffer)}}function ce(b){return Math.min(f,b.samples)}function ue(b){const x=i.get(b);return a&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function de(b){const x=o.render.frame;g.get(b)!==x&&(g.set(b,x),b.update())}function me(b,x){const I=b.encoding,$=b.format,Z=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===yl||I!==Di&&(I===nt?a===!1?e.has("EXT_sRGB")===!0&&$===gn?(b.format=yl,b.minFilter=Ht,b.generateMipmaps=!1):x=_p.sRGBToLinear(x):($!==gn||Z!==Pi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",I)),x}this.allocateTextureUnit=X,this.resetTextureUnits=j,this.setTexture2D=Y,this.setTexture2DArray=fe,this.setTexture3D=ie,this.setTextureCube=he,this.rebindTextures=R,this.setupRenderTarget=G,this.updateRenderTargetMipmap=te,this.updateMultisampleRenderTarget=ne,this.setupDepthRenderbuffer=E,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=ue}function p1(n,e,t){const i=t.isWebGL2;function r(s,o=null){let a;if(s===Pi)return 5121;if(s===oy)return 32819;if(s===ay)return 32820;if(s===iy)return 5120;if(s===ry)return 5122;if(s===mp)return 5123;if(s===sy)return 5124;if(s===wi)return 5125;if(s===Ei)return 5126;if(s===ps)return i?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===ly)return 6406;if(s===gn)return 6408;if(s===uy)return 6409;if(s===fy)return 6410;if(s===Li)return 6402;if(s===br)return 34041;if(s===dy)return 6403;if(s===cy)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===yl)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===hy)return 36244;if(s===py)return 33319;if(s===my)return 33320;if(s===gy)return 36249;if(s===la||s===ca||s===ua||s===fa)if(o===nt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===la)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ca)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ua)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===fa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===la)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ca)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ua)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===fa)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===qu||s===Xu||s===ju||s===Yu)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===qu)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Xu)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ju)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Yu)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===vy)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Ku||s===Zu)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Ku)return o===nt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Zu)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Ju||s===Qu||s===ef||s===tf||s===nf||s===rf||s===sf||s===of||s===af||s===lf||s===cf||s===uf||s===ff||s===df)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Ju)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Qu)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ef)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===tf)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===nf)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===rf)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===sf)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===of)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===af)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===lf)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===cf)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===uf)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===ff)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===df)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===hf)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===hf)return o===nt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===hr?i?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class m1 extends Wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Qs extends un{constructor(){super(),this.isGroup=!0,this.type="Group"}}const g1={type:"move"};class ka{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const m of e.hand.values()){const h=t.getJointPose(m,i);if(c.joints[m.jointName]===void 0){const y=new Qs;y.matrixAutoUpdate=!1,y.visible=!1,c.joints[m.jointName]=y,c.add(y)}const v=c.joints[m.jointName];h!==null&&(v.matrix.fromArray(h.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.jointRadius=h.radius),v.visible=h!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(g1)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}}class v1 extends cn{constructor(e,t,i,r,s,o,a,l,c,u){if(u=u!==void 0?u:Li,u!==Li&&u!==br)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Li&&(i=wi),i===void 0&&u===br&&(i=hr),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:At,this.minFilter=l!==void 0?l:At,this.flipY=!1,this.generateMipmaps=!1}}class _1 extends Rr{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=null,c=null,u=null,f=null,d=null,p=null;const g=t.getContextAttributes();let m=null,h=null;const v=[],y=[],w=new Wt;w.layers.enable(1),w.viewport=new pt;const S=new Wt;S.layers.enable(2),S.viewport=new pt;const M=[w,S],A=new m1;A.layers.enable(1),A.layers.enable(2);let L=null,_=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let Y=v[V];return Y===void 0&&(Y=new ka,v[V]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(V){let Y=v[V];return Y===void 0&&(Y=new ka,v[V]=Y),Y.getGripSpace()},this.getHand=function(V){let Y=v[V];return Y===void 0&&(Y=new ka,v[V]=Y),Y.getHandSpace()};function C(V){const Y=y.indexOf(V.inputSource);if(Y===-1)return;const fe=v[Y];fe!==void 0&&fe.dispatchEvent({type:V.type,data:V.inputSource})}function D(){r.removeEventListener("select",C),r.removeEventListener("selectstart",C),r.removeEventListener("selectend",C),r.removeEventListener("squeeze",C),r.removeEventListener("squeezestart",C),r.removeEventListener("squeezeend",C),r.removeEventListener("end",D),r.removeEventListener("inputsourceschange",O);for(let V=0;V<v.length;V++){const Y=y[V];Y!==null&&(y[V]=null,v[V].disconnect(Y))}L=null,_=null,e.setRenderTarget(m),d=null,f=null,u=null,r=null,h=null,X.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){s=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(V){l=V},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(V){if(r=V,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",C),r.addEventListener("selectstart",C),r.addEventListener("selectend",C),r.addEventListener("squeeze",C),r.addEventListener("squeezestart",C),r.addEventListener("squeezeend",C),r.addEventListener("end",D),r.addEventListener("inputsourceschange",O),g.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Y={antialias:r.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,Y),r.updateRenderState({baseLayer:d}),h=new Ii(d.framebufferWidth,d.framebufferHeight,{format:gn,type:Pi,encoding:e.outputEncoding})}else{let Y=null,fe=null,ie=null;g.depth&&(ie=g.stencil?35056:33190,Y=g.stencil?br:Li,fe=g.stencil?hr:wi);const he={colorFormat:32856,depthFormat:ie,scaleFactor:s};u=new XRWebGLBinding(r,t),f=u.createProjectionLayer(he),r.updateRenderState({layers:[f]}),h=new Ii(f.textureWidth,f.textureHeight,{format:gn,type:Pi,depthTexture:new v1(f.textureWidth,f.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const Me=e.properties.get(h);Me.__ignoreDepthValues=f.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(1),l=null,o=await r.requestReferenceSpace(a),X.setContext(r),X.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function O(V){for(let Y=0;Y<V.removed.length;Y++){const fe=V.removed[Y],ie=y.indexOf(fe);ie>=0&&(y[ie]=null,v[ie].dispatchEvent({type:"disconnected",data:fe}))}for(let Y=0;Y<V.added.length;Y++){const fe=V.added[Y];let ie=y.indexOf(fe);if(ie===-1){for(let Me=0;Me<v.length;Me++)if(Me>=y.length){y.push(fe),ie=Me;break}else if(y[Me]===null){y[Me]=fe,ie=Me;break}if(ie===-1)break}const he=v[ie];he&&he.dispatchEvent({type:"connected",data:fe})}}const k=new W,J=new W;function N(V,Y,fe){k.setFromMatrixPosition(Y.matrixWorld),J.setFromMatrixPosition(fe.matrixWorld);const ie=k.distanceTo(J),he=Y.projectionMatrix.elements,Me=fe.projectionMatrix.elements,z=he[14]/(he[10]-1),F=he[14]/(he[10]+1),re=(he[9]+1)/he[5],ae=(he[9]-1)/he[5],be=(he[8]-1)/he[0],ge=(Me[8]+1)/Me[0],Ce=z*be,ve=z*ge,E=ie/(-be+ge),R=E*-be;Y.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(R),V.translateZ(E),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const G=z+E,te=F+E,ne=Ce-R,ce=ve+(ie-R),ue=re*F/te*G,de=ae*F/te*G;V.projectionMatrix.makePerspective(ne,ce,ue,de,G,te)}function ee(V,Y){Y===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(Y.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(r===null)return;A.near=S.near=w.near=V.near,A.far=S.far=w.far=V.far,(L!==A.near||_!==A.far)&&(r.updateRenderState({depthNear:A.near,depthFar:A.far}),L=A.near,_=A.far);const Y=V.parent,fe=A.cameras;ee(A,Y);for(let he=0;he<fe.length;he++)ee(fe[he],Y);A.matrixWorld.decompose(A.position,A.quaternion,A.scale),V.position.copy(A.position),V.quaternion.copy(A.quaternion),V.scale.copy(A.scale),V.matrix.copy(A.matrix),V.matrixWorld.copy(A.matrixWorld);const ie=V.children;for(let he=0,Me=ie.length;he<Me;he++)ie[he].updateMatrixWorld(!0);fe.length===2?N(A,w,S):A.projectionMatrix.copy(w.projectionMatrix)},this.getCamera=function(){return A},this.getFoveation=function(){if(f!==null)return f.fixedFoveation;if(d!==null)return d.fixedFoveation},this.setFoveation=function(V){f!==null&&(f.fixedFoveation=V),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=V)};let B=null;function j(V,Y){if(c=Y.getViewerPose(l||o),p=Y,c!==null){const fe=c.views;d!==null&&(e.setRenderTargetFramebuffer(h,d.framebuffer),e.setRenderTarget(h));let ie=!1;fe.length!==A.cameras.length&&(A.cameras.length=0,ie=!0);for(let he=0;he<fe.length;he++){const Me=fe[he];let z=null;if(d!==null)z=d.getViewport(Me);else{const re=u.getViewSubImage(f,Me);z=re.viewport,he===0&&(e.setRenderTargetTextures(h,re.colorTexture,f.ignoreDepthValues?void 0:re.depthStencilTexture),e.setRenderTarget(h))}let F=M[he];F===void 0&&(F=new Wt,F.layers.enable(he),F.viewport=new pt,M[he]=F),F.matrix.fromArray(Me.transform.matrix),F.projectionMatrix.fromArray(Me.projectionMatrix),F.viewport.set(z.x,z.y,z.width,z.height),he===0&&A.matrix.copy(F.matrix),ie===!0&&A.cameras.push(F)}}for(let fe=0;fe<v.length;fe++){const ie=y[fe],he=v[fe];ie!==null&&he!==void 0&&he.update(ie,Y,l||o)}B&&B(V,Y),p=null}const X=new Cp;X.setAnimationLoop(j),this.setAnimationLoop=function(V){B=V},this.dispose=function(){}}}function x1(n,e){function t(m,h){m.fogColor.value.copy(h.color),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function i(m,h,v,y,w){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(m,h):h.isMeshToonMaterial?(r(m,h),u(m,h)):h.isMeshPhongMaterial?(r(m,h),c(m,h)):h.isMeshStandardMaterial?(r(m,h),f(m,h),h.isMeshPhysicalMaterial&&d(m,h,w)):h.isMeshMatcapMaterial?(r(m,h),p(m,h)):h.isMeshDepthMaterial?r(m,h):h.isMeshDistanceMaterial?(r(m,h),g(m,h)):h.isMeshNormalMaterial?r(m,h):h.isLineBasicMaterial?(s(m,h),h.isLineDashedMaterial&&o(m,h)):h.isPointsMaterial?a(m,h,v,y):h.isSpriteMaterial?l(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map),h.alphaMap&&(m.alphaMap.value=h.alphaMap),h.bumpMap&&(m.bumpMap.value=h.bumpMap,m.bumpScale.value=h.bumpScale,h.side===on&&(m.bumpScale.value*=-1)),h.displacementMap&&(m.displacementMap.value=h.displacementMap,m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap),h.normalMap&&(m.normalMap.value=h.normalMap,m.normalScale.value.copy(h.normalScale),h.side===on&&m.normalScale.value.negate()),h.specularMap&&(m.specularMap.value=h.specularMap),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const v=e.get(h).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap){m.lightMap.value=h.lightMap;const S=n.physicallyCorrectLights!==!0?Math.PI:1;m.lightMapIntensity.value=h.lightMapIntensity*S}h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity);let y;h.map?y=h.map:h.specularMap?y=h.specularMap:h.displacementMap?y=h.displacementMap:h.normalMap?y=h.normalMap:h.bumpMap?y=h.bumpMap:h.roughnessMap?y=h.roughnessMap:h.metalnessMap?y=h.metalnessMap:h.alphaMap?y=h.alphaMap:h.emissiveMap?y=h.emissiveMap:h.clearcoatMap?y=h.clearcoatMap:h.clearcoatNormalMap?y=h.clearcoatNormalMap:h.clearcoatRoughnessMap?y=h.clearcoatRoughnessMap:h.iridescenceMap?y=h.iridescenceMap:h.iridescenceThicknessMap?y=h.iridescenceThicknessMap:h.specularIntensityMap?y=h.specularIntensityMap:h.specularColorMap?y=h.specularColorMap:h.transmissionMap?y=h.transmissionMap:h.thicknessMap?y=h.thicknessMap:h.sheenColorMap?y=h.sheenColorMap:h.sheenRoughnessMap&&(y=h.sheenRoughnessMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),m.uvTransform.value.copy(y.matrix));let w;h.aoMap?w=h.aoMap:h.lightMap&&(w=h.lightMap),w!==void 0&&(w.isWebGLRenderTarget&&(w=w.texture),w.matrixAutoUpdate===!0&&w.updateMatrix(),m.uv2Transform.value.copy(w.matrix))}function s(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity}function o(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function a(m,h,v,y){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*v,m.scale.value=y*.5,h.map&&(m.map.value=h.map),h.alphaMap&&(m.alphaMap.value=h.alphaMap),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);let w;h.map?w=h.map:h.alphaMap&&(w=h.alphaMap),w!==void 0&&(w.matrixAutoUpdate===!0&&w.updateMatrix(),m.uvTransform.value.copy(w.matrix))}function l(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map),h.alphaMap&&(m.alphaMap.value=h.alphaMap),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);let v;h.map?v=h.map:h.alphaMap&&(v=h.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),m.uvTransform.value.copy(v.matrix))}function c(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function u(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function f(m,h){m.roughness.value=h.roughness,m.metalness.value=h.metalness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap),h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap),e.get(h).envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function d(m,h,v){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap)),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap),h.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),m.clearcoatNormalMap.value=h.clearcoatNormalMap,h.side===on&&m.clearcoatNormalScale.value.negate())),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap)),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap)}function p(m,h){h.matcap&&(m.matcap.value=h.matcap)}function g(m,h){m.referencePosition.value.copy(h.referencePosition),m.nearDistance.value=h.nearDistance,m.farDistance.value=h.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function y1(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(35375):0;function l(y,w){const S=w.program;i.uniformBlockBinding(y,S)}function c(y,w){let S=r[y.id];S===void 0&&(g(y),S=u(y),r[y.id]=S,y.addEventListener("dispose",h));const M=w.program;i.updateUBOMapping(y,M);const A=e.render.frame;s[y.id]!==A&&(d(y),s[y.id]=A)}function u(y){const w=f();y.__bindingPointIndex=w;const S=n.createBuffer(),M=y.__size,A=y.usage;return n.bindBuffer(35345,S),n.bufferData(35345,M,A),n.bindBuffer(35345,null),n.bindBufferBase(35345,w,S),S}function f(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const w=r[y.id],S=y.uniforms,M=y.__cache;n.bindBuffer(35345,w);for(let A=0,L=S.length;A<L;A++){const _=S[A];if(p(_,A,M)===!0){const C=_.value,D=_.__offset;typeof C=="number"?(_.__data[0]=C,n.bufferSubData(35345,D,_.__data)):(_.value.isMatrix3?(_.__data[0]=_.value.elements[0],_.__data[1]=_.value.elements[1],_.__data[2]=_.value.elements[2],_.__data[3]=_.value.elements[0],_.__data[4]=_.value.elements[3],_.__data[5]=_.value.elements[4],_.__data[6]=_.value.elements[5],_.__data[7]=_.value.elements[0],_.__data[8]=_.value.elements[6],_.__data[9]=_.value.elements[7],_.__data[10]=_.value.elements[8],_.__data[11]=_.value.elements[0]):C.toArray(_.__data),n.bufferSubData(35345,D,_.__data))}}n.bindBuffer(35345,null)}function p(y,w,S){const M=y.value;if(S[w]===void 0)return typeof M=="number"?S[w]=M:S[w]=M.clone(),!0;if(typeof M=="number"){if(S[w]!==M)return S[w]=M,!0}else{const A=S[w];if(A.equals(M)===!1)return A.copy(M),!0}return!1}function g(y){const w=y.uniforms;let S=0;const M=16;let A=0;for(let L=0,_=w.length;L<_;L++){const C=w[L],D=m(C);if(C.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=S,L>0){A=S%M;const O=M-A;A!==0&&O-D.boundary<0&&(S+=M-A,C.__offset=S)}S+=D.storage}return A=S%M,A>0&&(S+=M-A),y.__size=S,y.__cache={},this}function m(y){const w=y.value,S={boundary:0,storage:0};return typeof w=="number"?(S.boundary=4,S.storage=4):w.isVector2?(S.boundary=8,S.storage=8):w.isVector3||w.isColor?(S.boundary=16,S.storage=12):w.isVector4?(S.boundary=16,S.storage=16):w.isMatrix3?(S.boundary=48,S.storage=48):w.isMatrix4?(S.boundary=64,S.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),S}function h(y){const w=y.target;w.removeEventListener("dispose",h);const S=o.indexOf(w.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(r[w.id]),delete r[w.id],delete s[w.id]}function v(){for(const y in r)n.deleteBuffer(r[y]);o=[],r={},s={}}return{bind:l,update:c,dispose:v}}function b1(){const n=yo("canvas");return n.style.display="block",n}function Ip(n={}){this.isWebGLRenderer=!0;const e=n.canvas!==void 0?n.canvas:b1(),t=n.context!==void 0?n.context:null,i=n.depth!==void 0?n.depth:!0,r=n.stencil!==void 0?n.stencil:!0,s=n.antialias!==void 0?n.antialias:!1,o=n.premultipliedAlpha!==void 0?n.premultipliedAlpha:!0,a=n.preserveDrawingBuffer!==void 0?n.preserveDrawingBuffer:!1,l=n.powerPreference!==void 0?n.powerPreference:"default",c=n.failIfMajorPerformanceCaveat!==void 0?n.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=n.alpha!==void 0?n.alpha:!1;let f=null,d=null;const p=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Di,this.physicallyCorrectLights=!1,this.toneMapping=In,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const m=this;let h=!1,v=0,y=0,w=null,S=-1,M=null;const A=new pt,L=new pt;let _=null,C=e.width,D=e.height,O=1,k=null,J=null;const N=new pt(0,0,C,D),ee=new pt(0,0,C,D);let B=!1;const j=new Tp;let X=!1,V=!1,Y=null;const fe=new gt,ie=new Ke,he=new W,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function z(){return w===null?O:1}let F=t;function re(T,H){for(let K=0;K<T.length;K++){const q=T[K],se=e.getContext(q,H);if(se!==null)return se}return null}try{const T={alpha:!0,depth:i,stencil:r,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${uc}`),e.addEventListener("webglcontextlost",Re,!1),e.addEventListener("webglcontextrestored",Ve,!1),e.addEventListener("webglcontextcreationerror",Ue,!1),F===null){const H=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&H.shift(),F=re(H,T),F===null)throw re(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}F.getShaderPrecisionFormat===void 0&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let ae,be,ge,Ce,ve,E,R,G,te,ne,ce,ue,de,me,b,x,I,$,Z,oe,Se,U,_e,ye;function Le(){ae=new PM(F),be=new wM(F,ae,n),ae.init(be),U=new p1(F,ae,be),ge=new d1(F,ae,be),Ce=new FM,ve=new Jw,E=new h1(F,ae,ge,ve,be,U,Ce),R=new TM(m),G=new RM(m),te=new $y(F,be),_e=new SM(F,ae,te,be),ne=new DM(F,te,Ce,_e),ce=new BM(F,ne,te,Ce),Z=new zM(F,be,E),x=new EM(ve),ue=new Zw(m,R,G,ae,be,_e,x),de=new x1(m,ve),me=new e1,b=new o1(ae,be),$=new bM(m,R,ge,ce,u,o),I=new f1(m,ce,be),ye=new y1(F,Ce,be,ge),oe=new MM(F,ae,Ce,be),Se=new IM(F,ae,Ce,be),Ce.programs=ue.programs,m.capabilities=be,m.extensions=ae,m.properties=ve,m.renderLists=me,m.shadowMap=I,m.state=ge,m.info=Ce}Le();const Ae=new _1(m,F);this.xr=Ae,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const T=ae.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=ae.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(T){T!==void 0&&(O=T,this.setSize(C,D,!1))},this.getSize=function(T){return T.set(C,D)},this.setSize=function(T,H,K){if(Ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}C=T,D=H,e.width=Math.floor(T*O),e.height=Math.floor(H*O),K!==!1&&(e.style.width=T+"px",e.style.height=H+"px"),this.setViewport(0,0,T,H)},this.getDrawingBufferSize=function(T){return T.set(C*O,D*O).floor()},this.setDrawingBufferSize=function(T,H,K){C=T,D=H,O=K,e.width=Math.floor(T*K),e.height=Math.floor(H*K),this.setViewport(0,0,T,H)},this.getCurrentViewport=function(T){return T.copy(A)},this.getViewport=function(T){return T.copy(N)},this.setViewport=function(T,H,K,q){T.isVector4?N.set(T.x,T.y,T.z,T.w):N.set(T,H,K,q),ge.viewport(A.copy(N).multiplyScalar(O).floor())},this.getScissor=function(T){return T.copy(ee)},this.setScissor=function(T,H,K,q){T.isVector4?ee.set(T.x,T.y,T.z,T.w):ee.set(T,H,K,q),ge.scissor(L.copy(ee).multiplyScalar(O).floor())},this.getScissorTest=function(){return B},this.setScissorTest=function(T){ge.setScissorTest(B=T)},this.setOpaqueSort=function(T){k=T},this.setTransparentSort=function(T){J=T},this.getClearColor=function(T){return T.copy($.getClearColor())},this.setClearColor=function(){$.setClearColor.apply($,arguments)},this.getClearAlpha=function(){return $.getClearAlpha()},this.setClearAlpha=function(){$.setClearAlpha.apply($,arguments)},this.clear=function(T=!0,H=!0,K=!0){let q=0;T&&(q|=16384),H&&(q|=256),K&&(q|=1024),F.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Re,!1),e.removeEventListener("webglcontextrestored",Ve,!1),e.removeEventListener("webglcontextcreationerror",Ue,!1),me.dispose(),b.dispose(),ve.dispose(),R.dispose(),G.dispose(),ce.dispose(),_e.dispose(),ye.dispose(),ue.dispose(),Ae.dispose(),Ae.removeEventListener("sessionstart",We),Ae.removeEventListener("sessionend",ft),Y&&(Y.dispose(),Y=null),rt.stop()};function Re(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),h=!0}function Ve(){console.log("THREE.WebGLRenderer: Context Restored."),h=!1;const T=Ce.autoReset,H=I.enabled,K=I.autoUpdate,q=I.needsUpdate,se=I.type;Le(),Ce.autoReset=T,I.enabled=H,I.autoUpdate=K,I.needsUpdate=q,I.type=se}function Ue(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function P(T){const H=T.target;H.removeEventListener("dispose",P),we(H)}function we(T){Q(T),ve.remove(T)}function Q(T){const H=ve.get(T).programs;H!==void 0&&(H.forEach(function(K){ue.releaseProgram(K)}),T.isShaderMaterial&&ue.releaseShaderCache(T))}this.renderBufferDirect=function(T,H,K,q,se,Pe){H===null&&(H=Me);const Fe=se.isMesh&&se.matrixWorld.determinant()<0,ze=Np(T,H,K,q,se);ge.setMaterial(q,Fe);let Oe=K.index;const Xe=K.attributes.position;if(Oe===null){if(Xe===void 0||Xe.count===0)return}else if(Oe.count===0)return;let Ge=1;q.wireframe===!0&&(Oe=ne.getWireframeAttribute(K),Ge=2),_e.setup(se,q,ze,K,Oe);let $e,tt=oe;Oe!==null&&($e=te.get(Oe),tt=Se,tt.setIndex($e));const ci=Oe!==null?Oe.count:Xe.count,Ni=K.drawRange.start*Ge,Oi=K.drawRange.count*Ge,fn=Pe!==null?Pe.start*Ge:0,qe=Pe!==null?Pe.count*Ge:1/0,zi=Math.max(Ni,fn),st=Math.min(ci,Ni+Oi,fn+qe)-1,kt=Math.max(0,st-zi+1);if(kt!==0){if(se.isMesh)q.wireframe===!0?(ge.setLineWidth(q.wireframeLinewidth*z()),tt.setMode(1)):tt.setMode(4);else if(se.isLine){let Un=q.linewidth;Un===void 0&&(Un=1),ge.setLineWidth(Un*z()),se.isLineSegments?tt.setMode(1):se.isLineLoop?tt.setMode(2):tt.setMode(3)}else se.isPoints?tt.setMode(0):se.isSprite&&tt.setMode(4);if(se.isInstancedMesh)tt.renderInstances(zi,kt,se.count);else if(K.isInstancedBufferGeometry){const Un=Math.min(K.instanceCount,K._maxInstanceCount);tt.renderInstances(zi,kt,Un)}else tt.render(zi,kt)}},this.compile=function(T,H){d=b.get(T),d.init(),g.push(d),T.traverseVisible(function(K){K.isLight&&K.layers.test(H.layers)&&(d.pushLight(K),K.castShadow&&d.pushShadow(K))}),d.setupLights(m.physicallyCorrectLights),T.traverse(function(K){const q=K.material;if(q)if(Array.isArray(q))for(let se=0;se<q.length;se++){const Pe=q[se];qo(Pe,T,K)}else qo(q,T,K)}),g.pop(),d=null};let Te=null;function Ee(T){Te&&Te(T)}function We(){rt.stop()}function ft(){rt.start()}const rt=new Cp;rt.setAnimationLoop(Ee),typeof self<"u"&&rt.setContext(self),this.setAnimationLoop=function(T){Te=T,Ae.setAnimationLoop(T),T===null?rt.stop():rt.start()},Ae.addEventListener("sessionstart",We),Ae.addEventListener("sessionend",ft),this.render=function(T,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(h===!0)return;T.autoUpdate===!0&&T.updateMatrixWorld(),H.parent===null&&H.updateMatrixWorld(),Ae.enabled===!0&&Ae.isPresenting===!0&&(Ae.cameraAutoUpdate===!0&&Ae.updateCamera(H),H=Ae.getCamera()),T.isScene===!0&&T.onBeforeRender(m,T,H,w),d=b.get(T,g.length),d.init(),g.push(d),fe.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),j.setFromProjectionMatrix(fe),V=this.localClippingEnabled,X=x.init(this.clippingPlanes,V,H),f=me.get(T,p.length),f.init(),p.push(f),Bn(T,H,0,m.sortObjects),f.finish(),m.sortObjects===!0&&f.sort(k,J),X===!0&&x.beginShadows();const K=d.state.shadowsArray;if(I.render(K,T,H),X===!0&&x.endShadows(),this.info.autoReset===!0&&this.info.reset(),$.render(f,T),d.setupLights(m.physicallyCorrectLights),H.isArrayCamera){const q=H.cameras;for(let se=0,Pe=q.length;se<Pe;se++){const Fe=q[se];et(f,T,Fe,Fe.viewport)}}else et(f,T,H);w!==null&&(E.updateMultisampleRenderTarget(w),E.updateRenderTargetMipmap(w)),T.isScene===!0&&T.onAfterRender(m,T,H),_e.resetDefaultState(),S=-1,M=null,g.pop(),g.length>0?d=g[g.length-1]:d=null,p.pop(),p.length>0?f=p[p.length-1]:f=null};function Bn(T,H,K,q){if(T.visible===!1)return;if(T.layers.test(H.layers)){if(T.isGroup)K=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(H);else if(T.isLight)d.pushLight(T),T.castShadow&&d.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||j.intersectsSprite(T)){q&&he.setFromMatrixPosition(T.matrixWorld).applyMatrix4(fe);const Fe=ce.update(T),ze=T.material;ze.visible&&f.push(T,Fe,ze,K,he.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(T.isSkinnedMesh&&T.skeleton.frame!==Ce.render.frame&&(T.skeleton.update(),T.skeleton.frame=Ce.render.frame),!T.frustumCulled||j.intersectsObject(T))){q&&he.setFromMatrixPosition(T.matrixWorld).applyMatrix4(fe);const Fe=ce.update(T),ze=T.material;if(Array.isArray(ze)){const Oe=Fe.groups;for(let Xe=0,Ge=Oe.length;Xe<Ge;Xe++){const $e=Oe[Xe],tt=ze[$e.materialIndex];tt&&tt.visible&&f.push(T,Fe,tt,K,he.z,$e)}}else ze.visible&&f.push(T,Fe,ze,K,he.z,null)}}const Pe=T.children;for(let Fe=0,ze=Pe.length;Fe<ze;Fe++)Bn(Pe[Fe],H,K,q)}function et(T,H,K,q){const se=T.opaque,Pe=T.transmissive,Fe=T.transparent;d.setupLightsView(K),Pe.length>0&&yn(se,H,K),q&&ge.viewport(A.copy(q)),se.length>0&&Ut(se,H,K),Pe.length>0&&Ut(Pe,H,K),Fe.length>0&&Ut(Fe,H,K),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function yn(T,H,K){const q=be.isWebGL2;Y===null&&(Y=new Ii(1,1,{generateMipmaps:!0,type:ae.has("EXT_color_buffer_half_float")?ps:Pi,minFilter:Ho,samples:q&&s===!0?4:0})),m.getDrawingBufferSize(ie),q?Y.setSize(ie.x,ie.y):Y.setSize(bl(ie.x),bl(ie.y));const se=m.getRenderTarget();m.setRenderTarget(Y),m.clear();const Pe=m.toneMapping;m.toneMapping=In,Ut(T,H,K),m.toneMapping=Pe,E.updateMultisampleRenderTarget(Y),E.updateRenderTargetMipmap(Y),m.setRenderTarget(se)}function Ut(T,H,K){const q=H.isScene===!0?H.overrideMaterial:null;for(let se=0,Pe=T.length;se<Pe;se++){const Fe=T[se],ze=Fe.object,Oe=Fe.geometry,Xe=q===null?Fe.material:q,Ge=Fe.group;ze.layers.test(K.layers)&&Fp(ze,H,K,Oe,Xe,Ge)}}function Fp(T,H,K,q,se,Pe){T.onBeforeRender(m,H,K,q,se,Pe),T.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),se.onBeforeRender(m,H,K,q,T,Pe),se.transparent===!0&&se.side===_r?(se.side=on,se.needsUpdate=!0,m.renderBufferDirect(K,H,q,se,T,Pe),se.side=hs,se.needsUpdate=!0,m.renderBufferDirect(K,H,q,se,T,Pe),se.side=_r):m.renderBufferDirect(K,H,q,se,T,Pe),T.onAfterRender(m,H,K,q,se,Pe)}function qo(T,H,K){H.isScene!==!0&&(H=Me);const q=ve.get(T),se=d.state.lights,Pe=d.state.shadowsArray,Fe=se.state.version,ze=ue.getParameters(T,se.state,Pe,H,K),Oe=ue.getProgramCacheKey(ze);let Xe=q.programs;q.environment=T.isMeshStandardMaterial?H.environment:null,q.fog=H.fog,q.envMap=(T.isMeshStandardMaterial?G:R).get(T.envMap||q.environment),Xe===void 0&&(T.addEventListener("dispose",P),Xe=new Map,q.programs=Xe);let Ge=Xe.get(Oe);if(Ge!==void 0){if(q.currentProgram===Ge&&q.lightsStateVersion===Fe)return gc(T,ze),Ge}else ze.uniforms=ue.getUniforms(T),T.onBuild(K,ze,m),T.onBeforeCompile(ze,m),Ge=ue.acquireProgram(ze,Oe),Xe.set(Oe,Ge),q.uniforms=ze.uniforms;const $e=q.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&($e.clippingPlanes=x.uniform),gc(T,ze),q.needsLights=zp(T),q.lightsStateVersion=Fe,q.needsLights&&($e.ambientLightColor.value=se.state.ambient,$e.lightProbe.value=se.state.probe,$e.directionalLights.value=se.state.directional,$e.directionalLightShadows.value=se.state.directionalShadow,$e.spotLights.value=se.state.spot,$e.spotLightShadows.value=se.state.spotShadow,$e.rectAreaLights.value=se.state.rectArea,$e.ltc_1.value=se.state.rectAreaLTC1,$e.ltc_2.value=se.state.rectAreaLTC2,$e.pointLights.value=se.state.point,$e.pointLightShadows.value=se.state.pointShadow,$e.hemisphereLights.value=se.state.hemi,$e.directionalShadowMap.value=se.state.directionalShadowMap,$e.directionalShadowMatrix.value=se.state.directionalShadowMatrix,$e.spotShadowMap.value=se.state.spotShadowMap,$e.spotShadowMatrix.value=se.state.spotShadowMatrix,$e.pointShadowMap.value=se.state.pointShadowMap,$e.pointShadowMatrix.value=se.state.pointShadowMatrix);const tt=Ge.getUniforms(),ci=oo.seqWithValue(tt.seq,$e);return q.currentProgram=Ge,q.uniformsList=ci,Ge}function gc(T,H){const K=ve.get(T);K.outputEncoding=H.outputEncoding,K.instancing=H.instancing,K.skinning=H.skinning,K.morphTargets=H.morphTargets,K.morphNormals=H.morphNormals,K.morphColors=H.morphColors,K.morphTargetsCount=H.morphTargetsCount,K.numClippingPlanes=H.numClippingPlanes,K.numIntersection=H.numClipIntersection,K.vertexAlphas=H.vertexAlphas,K.vertexTangents=H.vertexTangents,K.toneMapping=H.toneMapping}function Np(T,H,K,q,se){H.isScene!==!0&&(H=Me),E.resetTextureUnits();const Pe=H.fog,Fe=q.isMeshStandardMaterial?H.environment:null,ze=w===null?m.outputEncoding:w.isXRRenderTarget===!0?w.texture.encoding:Di,Oe=(q.isMeshStandardMaterial?G:R).get(q.envMap||Fe),Xe=q.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Ge=!!q.normalMap&&!!K.attributes.tangent,$e=!!K.morphAttributes.position,tt=!!K.morphAttributes.normal,ci=!!K.morphAttributes.color,Ni=q.toneMapped?m.toneMapping:In,Oi=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,fn=Oi!==void 0?Oi.length:0,qe=ve.get(q),zi=d.state.lights;if(X===!0&&(V===!0||T!==M)){const Lt=T===M&&q.id===S;x.setState(q,T,Lt)}let st=!1;q.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==zi.state.version||qe.outputEncoding!==ze||se.isInstancedMesh&&qe.instancing===!1||!se.isInstancedMesh&&qe.instancing===!0||se.isSkinnedMesh&&qe.skinning===!1||!se.isSkinnedMesh&&qe.skinning===!0||qe.envMap!==Oe||q.fog===!0&&qe.fog!==Pe||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==x.numPlanes||qe.numIntersection!==x.numIntersection)||qe.vertexAlphas!==Xe||qe.vertexTangents!==Ge||qe.morphTargets!==$e||qe.morphNormals!==tt||qe.morphColors!==ci||qe.toneMapping!==Ni||be.isWebGL2===!0&&qe.morphTargetsCount!==fn)&&(st=!0):(st=!0,qe.__version=q.version);let kt=qe.currentProgram;st===!0&&(kt=qo(q,H,se));let Un=!1,Dr=!1,Xo=!1;const bt=kt.getUniforms(),Ir=qe.uniforms;if(ge.useProgram(kt.program)&&(Un=!0,Dr=!0,Xo=!0),q.id!==S&&(S=q.id,Dr=!0),Un||M!==T){if(bt.setValue(F,"projectionMatrix",T.projectionMatrix),be.logarithmicDepthBuffer&&bt.setValue(F,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),M!==T&&(M=T,Dr=!0,Xo=!0),q.isShaderMaterial||q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshStandardMaterial||q.envMap){const Lt=bt.map.cameraPosition;Lt!==void 0&&Lt.setValue(F,he.setFromMatrixPosition(T.matrixWorld))}(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&bt.setValue(F,"isOrthographic",T.isOrthographicCamera===!0),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial||q.isShadowMaterial||se.isSkinnedMesh)&&bt.setValue(F,"viewMatrix",T.matrixWorldInverse)}if(se.isSkinnedMesh){bt.setOptional(F,se,"bindMatrix"),bt.setOptional(F,se,"bindMatrixInverse");const Lt=se.skeleton;Lt&&(be.floatVertexTextures?(Lt.boneTexture===null&&Lt.computeBoneTexture(),bt.setValue(F,"boneTexture",Lt.boneTexture,E),bt.setValue(F,"boneTextureSize",Lt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const jo=K.morphAttributes;if((jo.position!==void 0||jo.normal!==void 0||jo.color!==void 0&&be.isWebGL2===!0)&&Z.update(se,K,q,kt),(Dr||qe.receiveShadow!==se.receiveShadow)&&(qe.receiveShadow=se.receiveShadow,bt.setValue(F,"receiveShadow",se.receiveShadow)),Dr&&(bt.setValue(F,"toneMappingExposure",m.toneMappingExposure),qe.needsLights&&Op(Ir,Xo),Pe&&q.fog===!0&&de.refreshFogUniforms(Ir,Pe),de.refreshMaterialUniforms(Ir,q,O,D,Y),oo.upload(F,qe.uniformsList,Ir,E)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(oo.upload(F,qe.uniformsList,Ir,E),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&bt.setValue(F,"center",se.center),bt.setValue(F,"modelViewMatrix",se.modelViewMatrix),bt.setValue(F,"normalMatrix",se.normalMatrix),bt.setValue(F,"modelMatrix",se.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const Lt=q.uniformsGroups;for(let Yo=0,Bp=Lt.length;Yo<Bp;Yo++)if(be.isWebGL2){const vc=Lt[Yo];ye.update(vc,kt),ye.bind(vc,kt)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return kt}function Op(T,H){T.ambientLightColor.needsUpdate=H,T.lightProbe.needsUpdate=H,T.directionalLights.needsUpdate=H,T.directionalLightShadows.needsUpdate=H,T.pointLights.needsUpdate=H,T.pointLightShadows.needsUpdate=H,T.spotLights.needsUpdate=H,T.spotLightShadows.needsUpdate=H,T.rectAreaLights.needsUpdate=H,T.hemisphereLights.needsUpdate=H}function zp(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(T,H,K){ve.get(T.texture).__webglTexture=H,ve.get(T.depthTexture).__webglTexture=K;const q=ve.get(T);q.__hasExternalTextures=!0,q.__hasExternalTextures&&(q.__autoAllocateDepthBuffer=K===void 0,q.__autoAllocateDepthBuffer||ae.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,H){const K=ve.get(T);K.__webglFramebuffer=H,K.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(T,H=0,K=0){w=T,v=H,y=K;let q=!0;if(T){const Oe=ve.get(T);Oe.__useDefaultFramebuffer!==void 0?(ge.bindFramebuffer(36160,null),q=!1):Oe.__webglFramebuffer===void 0?E.setupRenderTarget(T):Oe.__hasExternalTextures&&E.rebindTextures(T,ve.get(T.texture).__webglTexture,ve.get(T.depthTexture).__webglTexture)}let se=null,Pe=!1,Fe=!1;if(T){const Oe=T.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture)&&(Fe=!0);const Xe=ve.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(se=Xe[H],Pe=!0):be.isWebGL2&&T.samples>0&&E.useMultisampledRTT(T)===!1?se=ve.get(T).__webglMultisampledFramebuffer:se=Xe,A.copy(T.viewport),L.copy(T.scissor),_=T.scissorTest}else A.copy(N).multiplyScalar(O).floor(),L.copy(ee).multiplyScalar(O).floor(),_=B;if(ge.bindFramebuffer(36160,se)&&be.drawBuffers&&q&&ge.drawBuffers(T,se),ge.viewport(A),ge.scissor(L),ge.setScissorTest(_),Pe){const Oe=ve.get(T.texture);F.framebufferTexture2D(36160,36064,34069+H,Oe.__webglTexture,K)}else if(Fe){const Oe=ve.get(T.texture),Xe=H||0;F.framebufferTextureLayer(36160,36064,Oe.__webglTexture,K||0,Xe)}S=-1},this.readRenderTargetPixels=function(T,H,K,q,se,Pe,Fe){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=ve.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Fe!==void 0&&(ze=ze[Fe]),ze){ge.bindFramebuffer(36160,ze);try{const Oe=T.texture,Xe=Oe.format,Ge=Oe.type;if(Xe!==gn&&U.convert(Xe)!==F.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const $e=Ge===ps&&(ae.has("EXT_color_buffer_half_float")||be.isWebGL2&&ae.has("EXT_color_buffer_float"));if(Ge!==Pi&&U.convert(Ge)!==F.getParameter(35738)&&!(Ge===Ei&&(be.isWebGL2||ae.has("OES_texture_float")||ae.has("WEBGL_color_buffer_float")))&&!$e){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=T.width-q&&K>=0&&K<=T.height-se&&F.readPixels(H,K,q,se,U.convert(Xe),U.convert(Ge),Pe)}finally{const Oe=w!==null?ve.get(w).__webglFramebuffer:null;ge.bindFramebuffer(36160,Oe)}}},this.copyFramebufferToTexture=function(T,H,K=0){const q=Math.pow(2,-K),se=Math.floor(H.image.width*q),Pe=Math.floor(H.image.height*q);E.setTexture2D(H,0),F.copyTexSubImage2D(3553,K,0,0,T.x,T.y,se,Pe),ge.unbindTexture()},this.copyTextureToTexture=function(T,H,K,q=0){const se=H.image.width,Pe=H.image.height,Fe=U.convert(K.format),ze=U.convert(K.type);E.setTexture2D(K,0),F.pixelStorei(37440,K.flipY),F.pixelStorei(37441,K.premultiplyAlpha),F.pixelStorei(3317,K.unpackAlignment),H.isDataTexture?F.texSubImage2D(3553,q,T.x,T.y,se,Pe,Fe,ze,H.image.data):H.isCompressedTexture?F.compressedTexSubImage2D(3553,q,T.x,T.y,H.mipmaps[0].width,H.mipmaps[0].height,Fe,H.mipmaps[0].data):F.texSubImage2D(3553,q,T.x,T.y,Fe,ze,H.image),q===0&&K.generateMipmaps&&F.generateMipmap(3553),ge.unbindTexture()},this.copyTextureToTexture3D=function(T,H,K,q,se=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Pe=T.max.x-T.min.x+1,Fe=T.max.y-T.min.y+1,ze=T.max.z-T.min.z+1,Oe=U.convert(q.format),Xe=U.convert(q.type);let Ge;if(q.isData3DTexture)E.setTexture3D(q,0),Ge=32879;else if(q.isDataArrayTexture)E.setTexture2DArray(q,0),Ge=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(37440,q.flipY),F.pixelStorei(37441,q.premultiplyAlpha),F.pixelStorei(3317,q.unpackAlignment);const $e=F.getParameter(3314),tt=F.getParameter(32878),ci=F.getParameter(3316),Ni=F.getParameter(3315),Oi=F.getParameter(32877),fn=K.isCompressedTexture?K.mipmaps[0]:K.image;F.pixelStorei(3314,fn.width),F.pixelStorei(32878,fn.height),F.pixelStorei(3316,T.min.x),F.pixelStorei(3315,T.min.y),F.pixelStorei(32877,T.min.z),K.isDataTexture||K.isData3DTexture?F.texSubImage3D(Ge,se,H.x,H.y,H.z,Pe,Fe,ze,Oe,Xe,fn.data):K.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),F.compressedTexSubImage3D(Ge,se,H.x,H.y,H.z,Pe,Fe,ze,Oe,fn.data)):F.texSubImage3D(Ge,se,H.x,H.y,H.z,Pe,Fe,ze,Oe,Xe,fn),F.pixelStorei(3314,$e),F.pixelStorei(32878,tt),F.pixelStorei(3316,ci),F.pixelStorei(3315,Ni),F.pixelStorei(32877,Oi),se===0&&q.generateMipmaps&&F.generateMipmap(Ge),ge.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?E.setTextureCube(T,0):T.isData3DTexture?E.setTexture3D(T,0):T.isDataArrayTexture?E.setTexture2DArray(T,0):E.setTexture2D(T,0),ge.unbindTexture()},this.resetState=function(){v=0,y=0,w=null,ge.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class S1 extends Ip{}S1.prototype.isWebGL1Renderer=!0;class M1 extends un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}class mc extends li{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new W,d=new W,p=[],g=[],m=[],h=[];for(let v=0;v<=i;v++){const y=[],w=v/i;let S=0;v==0&&o==0?S=.5/t:v==i&&l==Math.PI&&(S=-.5/t);for(let M=0;M<=t;M++){const A=M/t;f.x=-e*Math.cos(r+A*s)*Math.sin(o+w*a),f.y=e*Math.cos(o+w*a),f.z=e*Math.sin(r+A*s)*Math.sin(o+w*a),g.push(f.x,f.y,f.z),d.copy(f).normalize(),m.push(d.x,d.y,d.z),h.push(A+S,1-w),y.push(c++)}u.push(y)}for(let v=0;v<i;v++)for(let y=0;y<t;y++){const w=u[v][y+1],S=u[v][y],M=u[v+1][y],A=u[v+1][y+1];(v!==0||o>0)&&p.push(w,S,A),(v!==i-1||l<Math.PI)&&p.push(S,M,A)}this.setIndex(p),this.setAttribute("position",new _n(g,3)),this.setAttribute("normal",new _n(m,3)),this.setAttribute("uv",new _n(h,2))}static fromJSON(e){return new mc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:uc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=uc);function w1(){let n=document.getElementById("container");const e=new Ip;e.setSize(window.innerWidth,window.innerHeight),n.appendChild(e.domElement);const t=new Wt(45,window.innerWidth/window.innerHeight,1,500);t.position.set(0,0,100),t.lookAt(0,0,0);const i=new M1;i.background=new Ze(1184274);var r=20,s=5,o=5,a=new mc(r,s,o),l=new dc({color:1802319,wireframe:!0}),c=new Pn(a,l);i.add(c);var u=function(){requestAnimationFrame(u),c.rotation.x+=.008,c.rotation.y+=.008,e.render(i,t)};u()}const E1={name:"HelloWorld",data:()=>({}),methods:{init:function(){console.log("init")}},mounted(){w1()}},T1={id:"container"};function C1(n,e,t,i,r,s){return ql(),_g("div",T1)}const A1=jl(E1,[["render",C1]]),L1=gs({name:"HomeView",components:{HelloWorld:A1}});function R1(n,e,t,i,r,s){const o=zd("HelloWorld");return ql(),Kd(o)}const P1=jl(L1,[["render",R1]]),D1=wx({history:U0("/"),routes:[{path:"/",name:"home",component:P1},{path:"/about",name:"about",component:()=>Jh(()=>import("./AboutView.2f2ba70e.js"),["assets/AboutView.2f2ba70e.js","assets/AboutView.4d995ba2.css"])}]});const I1=function(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return{install:t=>{const{blueprint:i,...r}=n,s=Nn(i,r),{aliases:o={},components:a={},directives:l={}}=s;for(const d in l)t.directive(d,l[d]);for(const d in a)t.component(d,a[d]);for(const d in o)t.component(d,ct({...o[d],name:d}));function c(d){t.provide(as,Ov(s.defaults)),t.provide(fl,n0(s.display,d)),t.provide(vo,Jv(t,s.theme)),t.provide(ol,f_(s.icons)),t.provide(vu,s0(t,s.locale))}an||c(),No.reset();const u=t.mount;t.mount=(d,p,g)=>{c(p);const m=u(d,p,g);return t.mount=u,m};function f(d){var p,g,m;const h=this.$,v=(p=(g=h.parent)==null?void 0:g.provides)!=null?p:(m=h.vnode.appContext)==null?void 0:m.provides;if(v&&d in v)return v[d]}t.mixin({computed:{$vuetify(){return It({defaults:f.call(this,as),display:f.call(this,fl),theme:f.call(this,vo),icons:f.call(this,ol),locale:f.call(this,vu),rtl:f.call(this,Zl)})}}})}}},F1=I1({theme:{defaultTheme:"dark"}});async function N1(){(await Jh(()=>import("./webfontloader.b777d690.js").then(e=>e.w),[])).load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}N1();lv(x0).use(D1).use(F1).mount("#app");export{jl as _,Jd as a,_g as c,ql as o};
