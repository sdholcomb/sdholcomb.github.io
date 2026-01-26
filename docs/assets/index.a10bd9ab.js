(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Zl(t,e){const n=Object.create(null),i=t.split(",");for(let r=0;r<i.length;r++)n[i[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const Im="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Fm=Zl(Im);function Td(t){return!!t||t===""}function Kl(t){if(De(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=mt(i)?Om(i):Kl(i);if(r)for(const s in r)e[s]=r[s]}return e}else{if(mt(t))return t;if(dt(t))return t}}const Nm=/;(?![^(]*\))/g,Bm=/:(.+)/;function Om(t){const e={};return t.split(Nm).forEach(n=>{if(n){const i=n.split(Bm);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Xo(t){let e="";if(mt(t))e=t;else if(De(t))for(let n=0;n<t.length;n++){const i=Xo(t[n]);i&&(e+=i+" ")}else if(dt(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const vs=t=>mt(t)?t:t==null?"":De(t)||dt(t)&&(t.toString===Rd||!Ne(t.toString))?JSON.stringify(t,Ld,2):String(t),Ld=(t,e)=>e&&e.__v_isRef?Ld(t,e.value):Ir(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r])=>(n[`${i} =>`]=r,n),{})}:Pd(e)?{[`Set(${e.size})`]:[...e.values()]}:dt(e)&&!De(e)&&!Id(e)?String(e):e,Qe={},Rr=[],fn=()=>{},km=()=>!1,zm=/^on[^a-z]/,Zo=t=>zm.test(t),Ql=t=>t.startsWith("onUpdate:"),yt=Object.assign,Jl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Um=Object.prototype.hasOwnProperty,Ge=(t,e)=>Um.call(t,e),De=Array.isArray,Ir=t=>Ko(t)==="[object Map]",Pd=t=>Ko(t)==="[object Set]",Ne=t=>typeof t=="function",mt=t=>typeof t=="string",ec=t=>typeof t=="symbol",dt=t=>t!==null&&typeof t=="object",Dd=t=>dt(t)&&Ne(t.then)&&Ne(t.catch),Rd=Object.prototype.toString,Ko=t=>Rd.call(t),Gm=t=>Ko(t).slice(8,-1),Id=t=>Ko(t)==="[object Object]",tc=t=>mt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Po=Zl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Qo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Vm=/-(\w)/g,Jt=Qo(t=>t.replace(Vm,(e,n)=>n?n.toUpperCase():"")),Hm=/\B([A-Z])/g,qr=Qo(t=>t.replace(Hm,"-$1").toLowerCase()),_i=Qo(t=>t.charAt(0).toUpperCase()+t.slice(1)),wa=Qo(t=>t?`on${_i(t)}`:""),ws=(t,e)=>!Object.is(t,e),Aa=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Bo=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Fd=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let qc;const Wm=()=>qc||(qc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Mn;class Nd{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&Mn&&(this.parent=Mn,this.index=(Mn.scopes||(Mn.scopes=[])).push(this)-1)}run(e){if(this.active){const n=Mn;try{return Mn=this,e()}finally{Mn=n}}}on(){Mn=this}off(){Mn=this.parent}stop(e){if(this.active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.active=!1}}}function $m(t){return new Nd(t)}function Ym(t,e=Mn){e&&e.active&&e.effects.push(t)}const nc=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Bd=t=>(t.w&mi)>0,Od=t=>(t.n&mi)>0,qm=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=mi},jm=t=>{const{deps:e}=t;if(e.length){let n=0;for(let i=0;i<e.length;i++){const r=e[i];Bd(r)&&!Od(r)?r.delete(t):e[n++]=r,r.w&=~mi,r.n&=~mi}e.length=n}},ml=new WeakMap;let hs=0,mi=1;const gl=30;let ln;const Hi=Symbol(""),vl=Symbol("");class ic{constructor(e,n=null,i){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Ym(this,i)}run(){if(!this.active)return this.fn();let e=ln,n=di;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=ln,ln=this,di=!0,mi=1<<++hs,hs<=gl?qm(this):jc(this),this.fn()}finally{hs<=gl&&jm(this),mi=1<<--hs,ln=this.parent,di=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ln===this?this.deferStop=!0:this.active&&(jc(this),this.onStop&&this.onStop(),this.active=!1)}}function jc(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let di=!0;const kd=[];function jr(){kd.push(di),di=!1}function Xr(){const t=kd.pop();di=t===void 0?!0:t}function Vt(t,e,n){if(di&&ln){let i=ml.get(t);i||ml.set(t,i=new Map);let r=i.get(n);r||i.set(n,r=nc()),zd(r)}}function zd(t,e){let n=!1;hs<=gl?Od(t)||(t.n|=mi,n=!Bd(t)):n=!t.has(ln),n&&(t.add(ln),ln.deps.push(t))}function Wn(t,e,n,i,r,s){const o=ml.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&De(t))o.forEach((l,c)=>{(c==="length"||c>=i)&&a.push(l)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":De(t)?tc(n)&&a.push(o.get("length")):(a.push(o.get(Hi)),Ir(t)&&a.push(o.get(vl)));break;case"delete":De(t)||(a.push(o.get(Hi)),Ir(t)&&a.push(o.get(vl)));break;case"set":Ir(t)&&a.push(o.get(Hi));break}if(a.length===1)a[0]&&_l(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);_l(nc(l))}}function _l(t,e){const n=De(t)?t:[...t];for(const i of n)i.computed&&Xc(i);for(const i of n)i.computed||Xc(i)}function Xc(t,e){(t!==ln||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Xm=Zl("__proto__,__v_isRef,__isVue"),Ud=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ec)),Zm=rc(),Km=rc(!1,!0),Qm=rc(!0),Zc=Jm();function Jm(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const i=$e(this);for(let s=0,o=this.length;s<o;s++)Vt(i,"get",s+"");const r=i[e](...n);return r===-1||r===!1?i[e](...n.map($e)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){jr();const i=$e(this)[e].apply(this,n);return Xr(),i}}),t}function rc(t=!1,e=!1){return function(i,r,s){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&s===(t?e?mg:$d:e?Wd:Hd).get(i))return i;const o=De(i);if(!t&&o&&Ge(Zc,r))return Reflect.get(Zc,r,s);const a=Reflect.get(i,r,s);return(ec(r)?Ud.has(r):Xm(r))||(t||Vt(i,"get",r),e)?a:it(a)?o&&tc(r)?a:a.value:dt(a)?t?ea(a):Ft(a):a}}const eg=Gd(),tg=Gd(!0);function Gd(t=!1){return function(n,i,r,s){let o=n[i];if(As(o)&&it(o)&&!it(r))return!1;if(!t&&!As(r)&&(xl(r)||(r=$e(r),o=$e(o)),!De(n)&&it(o)&&!it(r)))return o.value=r,!0;const a=De(n)&&tc(i)?Number(i)<n.length:Ge(n,i),l=Reflect.set(n,i,r,s);return n===$e(s)&&(a?ws(r,o)&&Wn(n,"set",i,r):Wn(n,"add",i,r)),l}}function ng(t,e){const n=Ge(t,e);t[e];const i=Reflect.deleteProperty(t,e);return i&&n&&Wn(t,"delete",e,void 0),i}function ig(t,e){const n=Reflect.has(t,e);return(!ec(e)||!Ud.has(e))&&Vt(t,"has",e),n}function rg(t){return Vt(t,"iterate",De(t)?"length":Hi),Reflect.ownKeys(t)}const Vd={get:Zm,set:eg,deleteProperty:ng,has:ig,ownKeys:rg},sg={get:Qm,set(t,e){return!0},deleteProperty(t,e){return!0}},og=yt({},Vd,{get:Km,set:tg}),sc=t=>t,Jo=t=>Reflect.getPrototypeOf(t);function Qs(t,e,n=!1,i=!1){t=t.__v_raw;const r=$e(t),s=$e(e);n||(e!==s&&Vt(r,"get",e),Vt(r,"get",s));const{has:o}=Jo(r),a=i?sc:n?lc:Es;if(o.call(r,e))return a(t.get(e));if(o.call(r,s))return a(t.get(s));t!==r&&t.get(e)}function Js(t,e=!1){const n=this.__v_raw,i=$e(n),r=$e(t);return e||(t!==r&&Vt(i,"has",t),Vt(i,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function eo(t,e=!1){return t=t.__v_raw,!e&&Vt($e(t),"iterate",Hi),Reflect.get(t,"size",t)}function Kc(t){t=$e(t);const e=$e(this);return Jo(e).has.call(e,t)||(e.add(t),Wn(e,"add",t,t)),this}function Qc(t,e){e=$e(e);const n=$e(this),{has:i,get:r}=Jo(n);let s=i.call(n,t);s||(t=$e(t),s=i.call(n,t));const o=r.call(n,t);return n.set(t,e),s?ws(e,o)&&Wn(n,"set",t,e):Wn(n,"add",t,e),this}function Jc(t){const e=$e(this),{has:n,get:i}=Jo(e);let r=n.call(e,t);r||(t=$e(t),r=n.call(e,t)),i&&i.call(e,t);const s=e.delete(t);return r&&Wn(e,"delete",t,void 0),s}function eu(){const t=$e(this),e=t.size!==0,n=t.clear();return e&&Wn(t,"clear",void 0,void 0),n}function to(t,e){return function(i,r){const s=this,o=s.__v_raw,a=$e(o),l=e?sc:t?lc:Es;return!t&&Vt(a,"iterate",Hi),o.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function no(t,e,n){return function(...i){const r=this.__v_raw,s=$e(r),o=Ir(s),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=r[t](...i),u=n?sc:e?lc:Es;return!e&&Vt(s,"iterate",l?vl:Hi),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function Kn(t){return function(...e){return t==="delete"?!1:this}}function ag(){const t={get(s){return Qs(this,s)},get size(){return eo(this)},has:Js,add:Kc,set:Qc,delete:Jc,clear:eu,forEach:to(!1,!1)},e={get(s){return Qs(this,s,!1,!0)},get size(){return eo(this)},has:Js,add:Kc,set:Qc,delete:Jc,clear:eu,forEach:to(!1,!0)},n={get(s){return Qs(this,s,!0)},get size(){return eo(this,!0)},has(s){return Js.call(this,s,!0)},add:Kn("add"),set:Kn("set"),delete:Kn("delete"),clear:Kn("clear"),forEach:to(!0,!1)},i={get(s){return Qs(this,s,!0,!0)},get size(){return eo(this,!0)},has(s){return Js.call(this,s,!0)},add:Kn("add"),set:Kn("set"),delete:Kn("delete"),clear:Kn("clear"),forEach:to(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=no(s,!1,!1),n[s]=no(s,!0,!1),e[s]=no(s,!1,!0),i[s]=no(s,!0,!0)}),[t,n,e,i]}const[lg,cg,ug,fg]=ag();function oc(t,e){const n=e?t?fg:ug:t?cg:lg;return(i,r,s)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(Ge(n,r)&&r in i?n:i,r,s)}const dg={get:oc(!1,!1)},hg={get:oc(!1,!0)},pg={get:oc(!0,!1)},Hd=new WeakMap,Wd=new WeakMap,$d=new WeakMap,mg=new WeakMap;function gg(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function vg(t){return t.__v_skip||!Object.isExtensible(t)?0:gg(Gm(t))}function Ft(t){return As(t)?t:ac(t,!1,Vd,dg,Hd)}function Yd(t){return ac(t,!1,og,hg,Wd)}function ea(t){return ac(t,!0,sg,pg,$d)}function ac(t,e,n,i,r){if(!dt(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=r.get(t);if(s)return s;const o=vg(t);if(o===0)return t;const a=new Proxy(t,o===2?i:n);return r.set(t,a),a}function Fr(t){return As(t)?Fr(t.__v_raw):!!(t&&t.__v_isReactive)}function As(t){return!!(t&&t.__v_isReadonly)}function xl(t){return!!(t&&t.__v_isShallow)}function qd(t){return Fr(t)||As(t)}function $e(t){const e=t&&t.__v_raw;return e?$e(e):t}function jd(t){return Bo(t,"__v_skip",!0),t}const Es=t=>dt(t)?Ft(t):t,lc=t=>dt(t)?ea(t):t;function Xd(t){di&&ln&&(t=$e(t),zd(t.dep||(t.dep=nc())))}function Zd(t,e){t=$e(t),t.dep&&_l(t.dep)}function it(t){return!!(t&&t.__v_isRef===!0)}function Pe(t){return Qd(t,!1)}function Kd(t){return Qd(t,!0)}function Qd(t,e){return it(t)?t:new _g(t,e)}class _g{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:$e(e),this._value=n?e:Es(e)}get value(){return Xd(this),this._value}set value(e){e=this.__v_isShallow?e:$e(e),ws(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:Es(e),Zd(this))}}function dn(t){return it(t)?t.value:t}const xg={get:(t,e,n)=>dn(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return it(r)&&!it(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function Jd(t){return Fr(t)?t:new Proxy(t,xg)}function eh(t){const e=De(t)?new Array(t.length):{};for(const n in t)e[n]=Ve(t,n);return e}class yg{constructor(e,n,i){this._object=e,this._key=n,this._defaultValue=i,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}}function Ve(t,e,n){const i=t[e];return it(i)?i:new yg(t,e,n)}class bg{constructor(e,n,i,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new ic(e,()=>{this._dirty||(this._dirty=!0,Zd(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=$e(this);return Xd(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Sg(t,e,n=!1){let i,r;const s=Ne(t);return s?(i=t,r=fn):(i=t.get,r=t.set),new bg(i,r,s||!r,n)}function hi(t,e,n,i){let r;try{r=i?t(...i):t()}catch(s){ta(s,e,n)}return r}function Qt(t,e,n,i){if(Ne(t)){const s=hi(t,e,n,i);return s&&Dd(s)&&s.catch(o=>{ta(o,e,n)}),s}const r=[];for(let s=0;s<t.length;s++)r.push(Qt(t[s],e,n,i));return r}function ta(t,e,n,i=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=n;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){hi(l,null,10,[t,o,a]);return}}Mg(t,n,r,i)}function Mg(t,e,n,i=!0){console.error(t)}let Oo=!1,yl=!1;const Ut=[];let zn=0;const _s=[];let ps=null,Cr=0;const xs=[];let li=null,Tr=0;const th=Promise.resolve();let cc=null,bl=null;function Gs(t){const e=cc||th;return t?e.then(this?t.bind(this):t):e}function wg(t){let e=zn+1,n=Ut.length;for(;e<n;){const i=e+n>>>1;Cs(Ut[i])<t?e=i+1:n=i}return e}function nh(t){(!Ut.length||!Ut.includes(t,Oo&&t.allowRecurse?zn+1:zn))&&t!==bl&&(t.id==null?Ut.push(t):Ut.splice(wg(t.id),0,t),ih())}function ih(){!Oo&&!yl&&(yl=!0,cc=th.then(oh))}function Ag(t){const e=Ut.indexOf(t);e>zn&&Ut.splice(e,1)}function rh(t,e,n,i){De(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?i+1:i))&&n.push(t),ih()}function Eg(t){rh(t,ps,_s,Cr)}function Cg(t){rh(t,li,xs,Tr)}function na(t,e=null){if(_s.length){for(bl=e,ps=[...new Set(_s)],_s.length=0,Cr=0;Cr<ps.length;Cr++)ps[Cr]();ps=null,Cr=0,bl=null,na(t,e)}}function sh(t){if(na(),xs.length){const e=[...new Set(xs)];if(xs.length=0,li){li.push(...e);return}for(li=e,li.sort((n,i)=>Cs(n)-Cs(i)),Tr=0;Tr<li.length;Tr++)li[Tr]();li=null,Tr=0}}const Cs=t=>t.id==null?1/0:t.id;function oh(t){yl=!1,Oo=!0,na(t),Ut.sort((n,i)=>Cs(n)-Cs(i));const e=fn;try{for(zn=0;zn<Ut.length;zn++){const n=Ut[zn];n&&n.active!==!1&&hi(n,null,14)}}finally{zn=0,Ut.length=0,sh(),Oo=!1,cc=null,(Ut.length||_s.length||xs.length)&&oh(t)}}function Tg(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||Qe;let r=n;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:d}=i[u]||Qe;d&&(r=n.map(p=>p.trim())),f&&(r=n.map(Fd))}let a,l=i[a=wa(e)]||i[a=wa(Jt(e))];!l&&s&&(l=i[a=wa(qr(e))]),l&&Qt(l,t,6,r);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Qt(c,t,6,r)}}function ah(t,e,n=!1){const i=e.emitsCache,r=i.get(t);if(r!==void 0)return r;const s=t.emits;let o={},a=!1;if(!Ne(t)){const l=c=>{const u=ah(c,e,!0);u&&(a=!0,yt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!a?(i.set(t,null),null):(De(s)?s.forEach(l=>o[l]=null):yt(o,s),i.set(t,o),o)}function ia(t,e){return!t||!Zo(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ge(t,e[0].toLowerCase()+e.slice(1))||Ge(t,qr(e))||Ge(t,e))}let Zt=null,lh=null;function ko(t){const e=Zt;return Zt=t,lh=t&&t.type.__scopeId||null,e}function lt(t,e=Zt,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&fu(-1);const s=ko(e),o=t(...r);return ko(s),i._d&&fu(1),o};return i._n=!0,i._c=!0,i._d=!0,i}function Ea(t){const{type:e,vnode:n,proxy:i,withProxy:r,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:f,data:d,setupState:p,ctx:g,inheritAttrs:m}=t;let h,v;const x=ko(t);try{if(n.shapeFlag&4){const w=r||i;h=wn(u.call(w,w,f,s,p,d,g)),v=l}else{const w=e;h=wn(w.length>1?w(s,{attrs:l,slots:a,emit:c}):w(s,null)),v=e.props?l:Lg(l)}}catch(w){ys.length=0,ta(w,t,1),h=k(hn)}let M=h;if(v&&m!==!1){const w=Object.keys(v),{shapeFlag:b}=M;w.length&&b&7&&(o&&w.some(Ql)&&(v=Pg(v,o)),M=gi(M,v))}return n.dirs&&(M=gi(M),M.dirs=M.dirs?M.dirs.concat(n.dirs):n.dirs),n.transition&&(M.transition=n.transition),h=M,ko(x),h}const Lg=t=>{let e;for(const n in t)(n==="class"||n==="style"||Zo(n))&&((e||(e={}))[n]=t[n]);return e},Pg=(t,e)=>{const n={};for(const i in t)(!Ql(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function Dg(t,e,n){const{props:i,children:r,component:s}=t,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?tu(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(o[d]!==i[d]&&!ia(c,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?tu(i,o,c):!0:!!o;return!1}function tu(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==t[s]&&!ia(n,s))return!0}return!1}function Rg({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Ig=t=>t.__isSuspense;function Fg(t,e){e&&e.pendingBranch?De(t)?e.effects.push(...t):e.effects.push(t):Cg(t)}function Lt(t,e){if(_t){let n=_t.provides;const i=_t.parent&&_t.parent.provides;i===n&&(n=_t.provides=Object.create(i)),n[t]=e}}function rt(t,e,n=!1){const i=_t||Zt;if(i){const r=i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&Ne(e)?e.call(i.proxy):e}}function ra(t,e){return uc(t,null,e)}const nu={};function pt(t,e,n){return uc(t,e,n)}function uc(t,e,{immediate:n,deep:i,flush:r,onTrack:s,onTrigger:o}=Qe){const a=_t;let l,c=!1,u=!1;if(it(t)?(l=()=>t.value,c=xl(t)):Fr(t)?(l=()=>t,i=!0):De(t)?(u=!0,c=t.some(v=>Fr(v)||xl(v)),l=()=>t.map(v=>{if(it(v))return v.value;if(Fr(v))return zi(v);if(Ne(v))return hi(v,a,2)})):Ne(t)?e?l=()=>hi(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return f&&f(),Qt(t,a,3,[d])}:l=fn,e&&i){const v=l;l=()=>zi(v())}let f,d=v=>{f=h.onStop=()=>{hi(v,a,4)}};if(Ds)return d=fn,e?n&&Qt(e,a,3,[l(),u?[]:void 0,d]):l(),fn;let p=u?[]:nu;const g=()=>{if(!!h.active)if(e){const v=h.run();(i||c||(u?v.some((x,M)=>ws(x,p[M])):ws(v,p)))&&(f&&f(),Qt(e,a,3,[v,p===nu?void 0:p,d]),p=v)}else h.run()};g.allowRecurse=!!e;let m;r==="sync"?m=g:r==="post"?m=()=>Rt(g,a&&a.suspense):m=()=>Eg(g);const h=new ic(l,m);return e?n?g():p=h.run():r==="post"?Rt(h.run.bind(h),a&&a.suspense):h.run(),()=>{h.stop(),a&&a.scope&&Jl(a.scope.effects,h)}}function Ng(t,e,n){const i=this.proxy,r=mt(t)?t.includes(".")?ch(i,t):()=>i[t]:t.bind(i,i);let s;Ne(e)?s=e:(s=e.handler,n=e);const o=_t;zr(this);const a=uc(r,s.bind(i),n);return o?zr(o):Wi(),a}function ch(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}function zi(t,e){if(!dt(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),it(t))zi(t.value,e);else if(De(t))for(let n=0;n<t.length;n++)zi(t[n],e);else if(Pd(t)||Ir(t))t.forEach(n=>{zi(n,e)});else if(Id(t))for(const n in t)zi(t[n],e);return t}function uh(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ji(()=>{t.isMounted=!0}),xn(()=>{t.isUnmounting=!0}),t}const Yt=[Function,Array],Bg={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Yt,onEnter:Yt,onAfterEnter:Yt,onEnterCancelled:Yt,onBeforeLeave:Yt,onLeave:Yt,onAfterLeave:Yt,onLeaveCancelled:Yt,onBeforeAppear:Yt,onAppear:Yt,onAfterAppear:Yt,onAppearCancelled:Yt},setup(t,{slots:e}){const n=fa(),i=uh();let r;return()=>{const s=e.default&&fc(e.default(),!0);if(!s||!s.length)return;let o=s[0];if(s.length>1){for(const m of s)if(m.type!==hn){o=m;break}}const a=$e(t),{mode:l}=a;if(i.isLeaving)return Ca(o);const c=iu(o);if(!c)return Ca(o);const u=Ts(c,a,i,n);Ls(c,u);const f=n.subTree,d=f&&iu(f);let p=!1;const{getTransitionKey:g}=c.type;if(g){const m=g();r===void 0?r=m:m!==r&&(r=m,p=!0)}if(d&&d.type!==hn&&(!Ni(c,d)||p)){const m=Ts(d,a,i,n);if(Ls(d,m),l==="out-in")return i.isLeaving=!0,m.afterLeave=()=>{i.isLeaving=!1,n.update()},Ca(o);l==="in-out"&&c.type!==hn&&(m.delayLeave=(h,v,x)=>{const M=dh(i,d);M[String(d.key)]=d,h._leaveCb=()=>{v(),h._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=x})}return o}}},fh=Bg;function dh(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function Ts(t,e,n,i){const{appear:r,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:f,onLeave:d,onAfterLeave:p,onLeaveCancelled:g,onBeforeAppear:m,onAppear:h,onAfterAppear:v,onAppearCancelled:x}=e,M=String(t.key),w=dh(n,t),b=(_,E)=>{_&&Qt(_,i,9,E)},T=(_,E)=>{const D=E[1];b(_,E),De(_)?_.every(B=>B.length<=1)&&D():_.length<=1&&D()},L={mode:s,persisted:o,beforeEnter(_){let E=a;if(!n.isMounted)if(r)E=m||a;else return;_._leaveCb&&_._leaveCb(!0);const D=w[M];D&&Ni(t,D)&&D.el._leaveCb&&D.el._leaveCb(),b(E,[_])},enter(_){let E=l,D=c,B=u;if(!n.isMounted)if(r)E=h||l,D=v||c,B=x||u;else return;let V=!1;const Z=_._enterCb=N=>{V||(V=!0,N?b(B,[_]):b(D,[_]),L.delayedLeave&&L.delayedLeave(),_._enterCb=void 0)};E?T(E,[_,Z]):Z()},leave(_,E){const D=String(t.key);if(_._enterCb&&_._enterCb(!0),n.isUnmounting)return E();b(f,[_]);let B=!1;const V=_._leaveCb=Z=>{B||(B=!0,E(),Z?b(g,[_]):b(p,[_]),_._leaveCb=void 0,w[D]===t&&delete w[D])};w[D]=t,d?T(d,[_,V]):V()},clone(_){return Ts(_,e,n,i)}};return L}function Ca(t){if(sa(t))return t=gi(t),t.children=null,t}function iu(t){return sa(t)?t.children?t.children[0]:void 0:t}function Ls(t,e){t.shapeFlag&6&&t.component?Ls(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function fc(t,e=!1,n){let i=[],r=0;for(let s=0;s<t.length;s++){let o=t[s];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:s);o.type===Et?(o.patchFlag&128&&r++,i=i.concat(fc(o.children,e,a))):(e||o.type!==hn)&&i.push(a!=null?gi(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function xi(t){return Ne(t)?{setup:t,name:t.name}:t}const Do=t=>!!t.type.__asyncLoader,sa=t=>t.type.__isKeepAlive;function hh(t,e){mh(t,"a",e)}function ph(t,e){mh(t,"da",e)}function mh(t,e,n=_t){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(oa(e,i,n),n){let r=n.parent;for(;r&&r.parent;)sa(r.parent.vnode)&&Og(i,e,n,r),r=r.parent}}function Og(t,e,n,i){const r=oa(e,t,i,!0);vh(()=>{Jl(i[e],r)},n)}function oa(t,e,n=_t,i=!1){if(n){const r=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;jr(),zr(n);const a=Qt(e,n,t,o);return Wi(),Xr(),a});return i?r.unshift(s):r.push(s),s}}const qn=t=>(e,n=_t)=>(!Ds||t==="sp")&&oa(t,e,n),dc=qn("bm"),Ji=qn("m"),kg=qn("bu"),gh=qn("u"),xn=qn("bum"),vh=qn("um"),zg=qn("sp"),Ug=qn("rtg"),Gg=qn("rtc");function Vg(t,e=_t){oa("ec",t,e)}function kr(t,e){const n=Zt;if(n===null)return t;const i=da(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[o,a,l,c=Qe]=e[s];Ne(o)&&(o={mounted:o,updated:o}),o.deep&&zi(a),r.push({dir:o,instance:i,value:a,oldValue:void 0,arg:l,modifiers:c})}return t}function Ai(t,e,n,i){const r=t.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(jr(),Qt(l,n,8,[t.el,a,t,e]),Xr())}}const hc="components",Hg="directives";function pc(t,e){return mc(hc,t,!0,e)||t}const _h=Symbol();function Wg(t){return mt(t)?mc(hc,t,!1)||t:t||_h}function aa(t){return mc(Hg,t)}function mc(t,e,n=!0,i=!1){const r=Zt||_t;if(r){const s=r.type;if(t===hc){const a=_v(s,!1);if(a&&(a===e||a===Jt(e)||a===_i(Jt(e))))return s}const o=ru(r[t]||s[t],e)||ru(r.appContext[t],e);return!o&&i?s:o}}function ru(t,e){return t&&(t[e]||t[Jt(e)]||t[_i(Jt(e))])}function xh(t,e,n,i){let r;const s=n&&n[i];if(De(t)||mt(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,s&&s[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,s&&s[o])}else if(dt(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];r[a]=e(t[c],c,a,s&&s[a])}}else r=[];return n&&(n[i]=r),r}const Sl=t=>t?Rh(t)?da(t)||t.proxy:Sl(t.parent):null,zo=yt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Sl(t.parent),$root:t=>Sl(t.root),$emit:t=>t.emit,$options:t=>bh(t),$forceUpdate:t=>t.f||(t.f=()=>nh(t.update)),$nextTick:t=>t.n||(t.n=Gs.bind(t.proxy)),$watch:t=>Ng.bind(t)}),$g={get({_:t},e){const{ctx:n,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return s[e]}else{if(i!==Qe&&Ge(i,e))return o[e]=1,i[e];if(r!==Qe&&Ge(r,e))return o[e]=2,r[e];if((c=t.propsOptions[0])&&Ge(c,e))return o[e]=3,s[e];if(n!==Qe&&Ge(n,e))return o[e]=4,n[e];Ml&&(o[e]=0)}}const u=zo[e];let f,d;if(u)return e==="$attrs"&&Vt(t,"get",e),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==Qe&&Ge(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,Ge(d,e))return d[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:s}=t;return r!==Qe&&Ge(r,e)?(r[e]=n,!0):i!==Qe&&Ge(i,e)?(i[e]=n,!0):Ge(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!n[o]||t!==Qe&&Ge(t,o)||e!==Qe&&Ge(e,o)||(a=s[0])&&Ge(a,o)||Ge(i,o)||Ge(zo,o)||Ge(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ge(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Ml=!0;function Yg(t){const e=bh(t),n=t.proxy,i=t.ctx;Ml=!1,e.beforeCreate&&su(e.beforeCreate,t,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:p,updated:g,activated:m,deactivated:h,beforeDestroy:v,beforeUnmount:x,destroyed:M,unmounted:w,render:b,renderTracked:T,renderTriggered:L,errorCaptured:_,serverPrefetch:E,expose:D,inheritAttrs:B,components:V,directives:Z,filters:N}=e;if(c&&qg(c,i,null,t.appContext.config.unwrapInjectedRef),o)for(const X in o){const Y=o[X];Ne(Y)&&(i[X]=Y.bind(n))}if(r){const X=r.call(n,n);dt(X)&&(t.data=Ft(X))}if(Ml=!0,s)for(const X in s){const Y=s[X],G=Ne(Y)?Y.bind(n,n):Ne(Y.get)?Y.get.bind(n,n):fn,J=!Ne(Y)&&Ne(Y.set)?Y.set.bind(n):fn,ue=K({get:G,set:J});Object.defineProperty(i,X,{enumerable:!0,configurable:!0,get:()=>ue.value,set:le=>ue.value=le})}if(a)for(const X in a)yh(a[X],i,n,X);if(l){const X=Ne(l)?l.call(n):l;Reflect.ownKeys(X).forEach(Y=>{Lt(Y,X[Y])})}u&&su(u,t,"c");function z(X,Y){De(Y)?Y.forEach(G=>X(G.bind(n))):Y&&X(Y.bind(n))}if(z(dc,f),z(Ji,d),z(kg,p),z(gh,g),z(hh,m),z(ph,h),z(Vg,_),z(Gg,T),z(Ug,L),z(xn,x),z(vh,w),z(zg,E),De(D))if(D.length){const X=t.exposed||(t.exposed={});D.forEach(Y=>{Object.defineProperty(X,Y,{get:()=>n[Y],set:G=>n[Y]=G})})}else t.exposed||(t.exposed={});b&&t.render===fn&&(t.render=b),B!=null&&(t.inheritAttrs=B),V&&(t.components=V),Z&&(t.directives=Z)}function qg(t,e,n=fn,i=!1){De(t)&&(t=wl(t));for(const r in t){const s=t[r];let o;dt(s)?"default"in s?o=rt(s.from||r,s.default,!0):o=rt(s.from||r):o=rt(s),it(o)&&i?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function su(t,e,n){Qt(De(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function yh(t,e,n,i){const r=i.includes(".")?ch(n,i):()=>n[i];if(mt(t)){const s=e[t];Ne(s)&&pt(r,s)}else if(Ne(t))pt(r,t.bind(n));else if(dt(t))if(De(t))t.forEach(s=>yh(s,e,n,i));else{const s=Ne(t.handler)?t.handler.bind(n):e[t.handler];Ne(s)&&pt(r,s,t)}}function bh(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!n&&!i?l=e:(l={},r.length&&r.forEach(c=>Uo(l,c,o,!0)),Uo(l,e,o)),s.set(e,l),l}function Uo(t,e,n,i=!1){const{mixins:r,extends:s}=e;s&&Uo(t,s,n,!0),r&&r.forEach(o=>Uo(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=jg[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const jg={data:ou,props:Ri,emits:Ri,methods:Ri,computed:Ri,beforeCreate:Tt,created:Tt,beforeMount:Tt,mounted:Tt,beforeUpdate:Tt,updated:Tt,beforeDestroy:Tt,beforeUnmount:Tt,destroyed:Tt,unmounted:Tt,activated:Tt,deactivated:Tt,errorCaptured:Tt,serverPrefetch:Tt,components:Ri,directives:Ri,watch:Zg,provide:ou,inject:Xg};function ou(t,e){return e?t?function(){return yt(Ne(t)?t.call(this,this):t,Ne(e)?e.call(this,this):e)}:e:t}function Xg(t,e){return Ri(wl(t),wl(e))}function wl(t){if(De(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Tt(t,e){return t?[...new Set([].concat(t,e))]:e}function Ri(t,e){return t?yt(yt(Object.create(null),t),e):e}function Zg(t,e){if(!t)return e;if(!e)return t;const n=yt(Object.create(null),t);for(const i in e)n[i]=Tt(t[i],e[i]);return n}function Kg(t,e,n,i=!1){const r={},s={};Bo(s,ca,1),t.propsDefaults=Object.create(null),Sh(t,e,r,s);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=i?r:Yd(r):t.type.props?t.props=r:t.props=s,t.attrs=s}function Qg(t,e,n,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=t,a=$e(r),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(ia(t.emitsOptions,d))continue;const p=e[d];if(l)if(Ge(s,d))p!==s[d]&&(s[d]=p,c=!0);else{const g=Jt(d);r[g]=Al(l,a,g,p,t,!1)}else p!==s[d]&&(s[d]=p,c=!0)}}}else{Sh(t,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!Ge(e,f)&&((u=qr(f))===f||!Ge(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(r[f]=Al(l,a,f,void 0,t,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!Ge(e,f)&&!0)&&(delete s[f],c=!0)}c&&Wn(t,"set","$attrs")}function Sh(t,e,n,i){const[r,s]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Po(l))continue;const c=e[l];let u;r&&Ge(r,u=Jt(l))?!s||!s.includes(u)?n[u]=c:(a||(a={}))[u]=c:ia(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=$e(n),c=a||Qe;for(let u=0;u<s.length;u++){const f=s[u];n[f]=Al(r,l,f,c[f],t,!Ge(c,f))}}return o}function Al(t,e,n,i,r,s){const o=t[n];if(o!=null){const a=Ge(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&Ne(l)){const{propsDefaults:c}=r;n in c?i=c[n]:(zr(r),i=c[n]=l.call(null,e),Wi())}else i=l}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===qr(n))&&(i=!0))}return i}function Mh(t,e,n=!1){const i=e.propsCache,r=i.get(t);if(r)return r;const s=t.props,o={},a=[];let l=!1;if(!Ne(t)){const u=f=>{l=!0;const[d,p]=Mh(f,e,!0);yt(o,d),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!l)return i.set(t,Rr),Rr;if(De(s))for(let u=0;u<s.length;u++){const f=Jt(s[u]);au(f)&&(o[f]=Qe)}else if(s)for(const u in s){const f=Jt(u);if(au(f)){const d=s[u],p=o[f]=De(d)||Ne(d)?{type:d}:d;if(p){const g=uu(Boolean,p.type),m=uu(String,p.type);p[0]=g>-1,p[1]=m<0||g<m,(g>-1||Ge(p,"default"))&&a.push(f)}}}const c=[o,a];return i.set(t,c),c}function au(t){return t[0]!=="$"}function lu(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function cu(t,e){return lu(t)===lu(e)}function uu(t,e){return De(e)?e.findIndex(n=>cu(n,t)):Ne(e)&&cu(e,t)?0:-1}const wh=t=>t[0]==="_"||t==="$stable",gc=t=>De(t)?t.map(wn):[wn(t)],Jg=(t,e,n)=>{if(e._n)return e;const i=lt((...r)=>gc(e(...r)),n);return i._c=!1,i},Ah=(t,e,n)=>{const i=t._ctx;for(const r in t){if(wh(r))continue;const s=t[r];if(Ne(s))e[r]=Jg(r,s,i);else if(s!=null){const o=gc(s);e[r]=()=>o}}},Eh=(t,e)=>{const n=gc(e);t.slots.default=()=>n},ev=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=$e(e),Bo(e,"_",n)):Ah(e,t.slots={})}else t.slots={},e&&Eh(t,e);Bo(t.slots,ca,1)},tv=(t,e,n)=>{const{vnode:i,slots:r}=t;let s=!0,o=Qe;if(i.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:(yt(r,e),!n&&a===1&&delete r._):(s=!e.$stable,Ah(e,r)),o=e}else e&&(Eh(t,e),o={default:1});if(s)for(const a in r)!wh(a)&&!(a in o)&&delete r[a]};function Ch(){return{app:null,config:{isNativeTag:km,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let nv=0;function iv(t,e){return function(i,r=null){Ne(i)||(i=Object.assign({},i)),r!=null&&!dt(r)&&(r=null);const s=Ch(),o=new Set;let a=!1;const l=s.app={_uid:nv++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:yv,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&Ne(c.install)?(o.add(c),c.install(l,...u)):Ne(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,f){if(!a){const d=k(i,r);return d.appContext=s,u&&e?e(d,c):t(d,c,f),a=!0,l._container=c,c.__vue_app__=l,da(d.component)||d.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l}};return l}}function El(t,e,n,i,r=!1){if(De(t)){t.forEach((d,p)=>El(d,e&&(De(e)?e[p]:e),n,i,r));return}if(Do(i)&&!r)return;const s=i.shapeFlag&4?da(i.component)||i.component.proxy:i.el,o=r?null:s,{i:a,r:l}=t,c=e&&e.r,u=a.refs===Qe?a.refs={}:a.refs,f=a.setupState;if(c!=null&&c!==l&&(mt(c)?(u[c]=null,Ge(f,c)&&(f[c]=null)):it(c)&&(c.value=null)),Ne(l))hi(l,a,12,[o,u]);else{const d=mt(l),p=it(l);if(d||p){const g=()=>{if(t.f){const m=d?u[l]:l.value;r?De(m)&&Jl(m,s):De(m)?m.includes(s)||m.push(s):d?(u[l]=[s],Ge(f,l)&&(f[l]=u[l])):(l.value=[s],t.k&&(u[t.k]=l.value))}else d?(u[l]=o,Ge(f,l)&&(f[l]=o)):p&&(l.value=o,t.k&&(u[t.k]=o))};o?(g.id=-1,Rt(g,n)):g()}}}const Rt=Fg;function rv(t){return sv(t)}function sv(t,e){const n=Wm();n.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:p=fn,cloneNode:g,insertStaticContent:m}=t,h=(A,P,H,ie=null,re=null,de=null,he=!1,pe=null,me=!!P.dynamicChildren)=>{if(A===P)return;A&&!Ni(A,P)&&(ie=fe(A),ae(A,re,de,!0),A=null),P.patchFlag===-2&&(me=!1,P.dynamicChildren=null);const{type:S,ref:y,shapeFlag:I}=P;switch(S){case vc:v(A,P,H,ie);break;case hn:x(A,P,H,ie);break;case Ta:A==null&&M(P,H,ie,he);break;case Et:Z(A,P,H,ie,re,de,he,pe,me);break;default:I&1?T(A,P,H,ie,re,de,he,pe,me):I&6?N(A,P,H,ie,re,de,he,pe,me):(I&64||I&128)&&S.process(A,P,H,ie,re,de,he,pe,me,ge)}y!=null&&re&&El(y,A&&A.ref,de,P||A,!P)},v=(A,P,H,ie)=>{if(A==null)i(P.el=a(P.children),H,ie);else{const re=P.el=A.el;P.children!==A.children&&c(re,P.children)}},x=(A,P,H,ie)=>{A==null?i(P.el=l(P.children||""),H,ie):P.el=A.el},M=(A,P,H,ie)=>{[A.el,A.anchor]=m(A.children,P,H,ie,A.el,A.anchor)},w=({el:A,anchor:P},H,ie)=>{let re;for(;A&&A!==P;)re=d(A),i(A,H,ie),A=re;i(P,H,ie)},b=({el:A,anchor:P})=>{let H;for(;A&&A!==P;)H=d(A),r(A),A=H;r(P)},T=(A,P,H,ie,re,de,he,pe,me)=>{he=he||P.type==="svg",A==null?L(P,H,ie,re,de,he,pe,me):D(A,P,re,de,he,pe,me)},L=(A,P,H,ie,re,de,he,pe)=>{let me,S;const{type:y,props:I,shapeFlag:q,transition:ee,patchFlag:ce,dirs:Se}=A;if(A.el&&g!==void 0&&ce===-1)me=A.el=g(A.el);else{if(me=A.el=o(A.type,de,I&&I.is,I),q&8?u(me,A.children):q&16&&E(A.children,me,null,ie,re,de&&y!=="foreignObject",he,pe),Se&&Ai(A,null,ie,"created"),I){for(const _e in I)_e!=="value"&&!Po(_e)&&s(me,_e,null,I[_e],de,A.children,ie,re,se);"value"in I&&s(me,"value",null,I.value),(S=I.onVnodeBeforeMount)&&Sn(S,ie,A)}_(me,A,A.scopeId,he,ie)}Se&&Ai(A,null,ie,"beforeMount");const U=(!re||re&&!re.pendingBranch)&&ee&&!ee.persisted;U&&ee.beforeEnter(me),i(me,P,H),((S=I&&I.onVnodeMounted)||U||Se)&&Rt(()=>{S&&Sn(S,ie,A),U&&ee.enter(me),Se&&Ai(A,null,ie,"mounted")},re)},_=(A,P,H,ie,re)=>{if(H&&p(A,H),ie)for(let de=0;de<ie.length;de++)p(A,ie[de]);if(re){let de=re.subTree;if(P===de){const he=re.vnode;_(A,he,he.scopeId,he.slotScopeIds,re.parent)}}},E=(A,P,H,ie,re,de,he,pe,me=0)=>{for(let S=me;S<A.length;S++){const y=A[S]=pe?ui(A[S]):wn(A[S]);h(null,y,P,H,ie,re,de,he,pe)}},D=(A,P,H,ie,re,de,he)=>{const pe=P.el=A.el;let{patchFlag:me,dynamicChildren:S,dirs:y}=P;me|=A.patchFlag&16;const I=A.props||Qe,q=P.props||Qe;let ee;H&&Ei(H,!1),(ee=q.onVnodeBeforeUpdate)&&Sn(ee,H,P,A),y&&Ai(P,A,H,"beforeUpdate"),H&&Ei(H,!0);const ce=re&&P.type!=="foreignObject";if(S?B(A.dynamicChildren,S,pe,H,ie,ce,de):he||G(A,P,pe,null,H,ie,ce,de,!1),me>0){if(me&16)V(pe,P,I,q,H,ie,re);else if(me&2&&I.class!==q.class&&s(pe,"class",null,q.class,re),me&4&&s(pe,"style",I.style,q.style,re),me&8){const Se=P.dynamicProps;for(let U=0;U<Se.length;U++){const _e=Se[U],ye=I[_e],Le=q[_e];(Le!==ye||_e==="value")&&s(pe,_e,ye,Le,re,A.children,H,ie,se)}}me&1&&A.children!==P.children&&u(pe,P.children)}else!he&&S==null&&V(pe,P,I,q,H,ie,re);((ee=q.onVnodeUpdated)||y)&&Rt(()=>{ee&&Sn(ee,H,P,A),y&&Ai(P,A,H,"updated")},ie)},B=(A,P,H,ie,re,de,he)=>{for(let pe=0;pe<P.length;pe++){const me=A[pe],S=P[pe],y=me.el&&(me.type===Et||!Ni(me,S)||me.shapeFlag&70)?f(me.el):H;h(me,S,y,null,ie,re,de,he,!0)}},V=(A,P,H,ie,re,de,he)=>{if(H!==ie){for(const pe in ie){if(Po(pe))continue;const me=ie[pe],S=H[pe];me!==S&&pe!=="value"&&s(A,pe,S,me,he,P.children,re,de,se)}if(H!==Qe)for(const pe in H)!Po(pe)&&!(pe in ie)&&s(A,pe,H[pe],null,he,P.children,re,de,se);"value"in ie&&s(A,"value",H.value,ie.value)}},Z=(A,P,H,ie,re,de,he,pe,me)=>{const S=P.el=A?A.el:a(""),y=P.anchor=A?A.anchor:a("");let{patchFlag:I,dynamicChildren:q,slotScopeIds:ee}=P;ee&&(pe=pe?pe.concat(ee):ee),A==null?(i(S,H,ie),i(y,H,ie),E(P.children,H,y,re,de,he,pe,me)):I>0&&I&64&&q&&A.dynamicChildren?(B(A.dynamicChildren,q,H,re,de,he,pe),(P.key!=null||re&&P===re.subTree)&&Th(A,P,!0)):G(A,P,H,y,re,de,he,pe,me)},N=(A,P,H,ie,re,de,he,pe,me)=>{P.slotScopeIds=pe,A==null?P.shapeFlag&512?re.ctx.activate(P,H,ie,he,me):ne(P,H,ie,re,de,he,me):z(A,P,me)},ne=(A,P,H,ie,re,de,he)=>{const pe=A.component=hv(A,ie,re);if(sa(A)&&(pe.ctx.renderer=ge),pv(pe),pe.asyncDep){if(re&&re.registerDep(pe,X),!A.el){const me=pe.subTree=k(hn);x(null,me,P,H)}return}X(pe,A,P,H,re,de,he)},z=(A,P,H)=>{const ie=P.component=A.component;if(Dg(A,P,H))if(ie.asyncDep&&!ie.asyncResolved){Y(ie,P,H);return}else ie.next=P,Ag(ie.update),ie.update();else P.el=A.el,ie.vnode=P},X=(A,P,H,ie,re,de,he)=>{const pe=()=>{if(A.isMounted){let{next:y,bu:I,u:q,parent:ee,vnode:ce}=A,Se=y,U;Ei(A,!1),y?(y.el=ce.el,Y(A,y,he)):y=ce,I&&Aa(I),(U=y.props&&y.props.onVnodeBeforeUpdate)&&Sn(U,ee,y,ce),Ei(A,!0);const _e=Ea(A),ye=A.subTree;A.subTree=_e,h(ye,_e,f(ye.el),fe(ye),A,re,de),y.el=_e.el,Se===null&&Rg(A,_e.el),q&&Rt(q,re),(U=y.props&&y.props.onVnodeUpdated)&&Rt(()=>Sn(U,ee,y,ce),re)}else{let y;const{el:I,props:q}=P,{bm:ee,m:ce,parent:Se}=A,U=Do(P);if(Ei(A,!1),ee&&Aa(ee),!U&&(y=q&&q.onVnodeBeforeMount)&&Sn(y,Se,P),Ei(A,!0),I&&ve){const _e=()=>{A.subTree=Ea(A),ve(I,A.subTree,A,re,null)};U?P.type.__asyncLoader().then(()=>!A.isUnmounted&&_e()):_e()}else{const _e=A.subTree=Ea(A);h(null,_e,H,ie,A,re,de),P.el=_e.el}if(ce&&Rt(ce,re),!U&&(y=q&&q.onVnodeMounted)){const _e=P;Rt(()=>Sn(y,Se,_e),re)}(P.shapeFlag&256||Se&&Do(Se.vnode)&&Se.vnode.shapeFlag&256)&&A.a&&Rt(A.a,re),A.isMounted=!0,P=H=ie=null}},me=A.effect=new ic(pe,()=>nh(S),A.scope),S=A.update=()=>me.run();S.id=A.uid,Ei(A,!0),S()},Y=(A,P,H)=>{P.component=A;const ie=A.vnode.props;A.vnode=P,A.next=null,Qg(A,P.props,ie,H),tv(A,P.children,H),jr(),na(void 0,A.update),Xr()},G=(A,P,H,ie,re,de,he,pe,me=!1)=>{const S=A&&A.children,y=A?A.shapeFlag:0,I=P.children,{patchFlag:q,shapeFlag:ee}=P;if(q>0){if(q&128){ue(S,I,H,ie,re,de,he,pe,me);return}else if(q&256){J(S,I,H,ie,re,de,he,pe,me);return}}ee&8?(y&16&&se(S,re,de),I!==S&&u(H,I)):y&16?ee&16?ue(S,I,H,ie,re,de,he,pe,me):se(S,re,de,!0):(y&8&&u(H,""),ee&16&&E(I,H,ie,re,de,he,pe,me))},J=(A,P,H,ie,re,de,he,pe,me)=>{A=A||Rr,P=P||Rr;const S=A.length,y=P.length,I=Math.min(S,y);let q;for(q=0;q<I;q++){const ee=P[q]=me?ui(P[q]):wn(P[q]);h(A[q],ee,H,null,re,de,he,pe,me)}S>y?se(A,re,de,!0,!1,I):E(P,H,ie,re,de,he,pe,me,I)},ue=(A,P,H,ie,re,de,he,pe,me)=>{let S=0;const y=P.length;let I=A.length-1,q=y-1;for(;S<=I&&S<=q;){const ee=A[S],ce=P[S]=me?ui(P[S]):wn(P[S]);if(Ni(ee,ce))h(ee,ce,H,null,re,de,he,pe,me);else break;S++}for(;S<=I&&S<=q;){const ee=A[I],ce=P[q]=me?ui(P[q]):wn(P[q]);if(Ni(ee,ce))h(ee,ce,H,null,re,de,he,pe,me);else break;I--,q--}if(S>I){if(S<=q){const ee=q+1,ce=ee<y?P[ee].el:ie;for(;S<=q;)h(null,P[S]=me?ui(P[S]):wn(P[S]),H,ce,re,de,he,pe,me),S++}}else if(S>q)for(;S<=I;)ae(A[S],re,de,!0),S++;else{const ee=S,ce=S,Se=new Map;for(S=ce;S<=q;S++){const Ue=P[S]=me?ui(P[S]):wn(P[S]);Ue.key!=null&&Se.set(Ue.key,S)}let U,_e=0;const ye=q-ce+1;let Le=!1,Te=0;const Re=new Array(ye);for(S=0;S<ye;S++)Re[S]=0;for(S=ee;S<=I;S++){const Ue=A[S];if(_e>=ye){ae(Ue,re,de,!0);continue}let R;if(Ue.key!=null)R=Se.get(Ue.key);else for(U=ce;U<=q;U++)if(Re[U-ce]===0&&Ni(Ue,P[U])){R=U;break}R===void 0?ae(Ue,re,de,!0):(Re[R-ce]=S+1,R>=Te?Te=R:Le=!0,h(Ue,P[R],H,null,re,de,he,pe,me),_e++)}const He=Le?ov(Re):Rr;for(U=He.length-1,S=ye-1;S>=0;S--){const Ue=ce+S,R=P[Ue],we=Ue+1<y?P[Ue+1].el:ie;Re[S]===0?h(null,R,H,we,re,de,he,pe,me):Le&&(U<0||S!==He[U]?le(R,H,we,2):U--)}}},le=(A,P,H,ie,re=null)=>{const{el:de,type:he,transition:pe,children:me,shapeFlag:S}=A;if(S&6){le(A.component.subTree,P,H,ie);return}if(S&128){A.suspense.move(P,H,ie);return}if(S&64){he.move(A,P,H,ge);return}if(he===Et){i(de,P,H);for(let I=0;I<me.length;I++)le(me[I],P,H,ie);i(A.anchor,P,H);return}if(he===Ta){w(A,P,H);return}if(ie!==2&&S&1&&pe)if(ie===0)pe.beforeEnter(de),i(de,P,H),Rt(()=>pe.enter(de),re);else{const{leave:I,delayLeave:q,afterLeave:ee}=pe,ce=()=>i(de,P,H),Se=()=>{I(de,()=>{ce(),ee&&ee()})};q?q(de,ce,Se):Se()}else i(de,P,H)},ae=(A,P,H,ie=!1,re=!1)=>{const{type:de,props:he,ref:pe,children:me,dynamicChildren:S,shapeFlag:y,patchFlag:I,dirs:q}=A;if(pe!=null&&El(pe,null,H,A,!0),y&256){P.ctx.deactivate(A);return}const ee=y&1&&q,ce=!Do(A);let Se;if(ce&&(Se=he&&he.onVnodeBeforeUnmount)&&Sn(Se,P,A),y&6)F(A.component,H,ie);else{if(y&128){A.suspense.unmount(H,ie);return}ee&&Ai(A,null,P,"beforeUnmount"),y&64?A.type.remove(A,P,H,re,ge,ie):S&&(de!==Et||I>0&&I&64)?se(S,P,H,!1,!0):(de===Et&&I&384||!re&&y&16)&&se(me,P,H),ie&&Me(A)}(ce&&(Se=he&&he.onVnodeUnmounted)||ee)&&Rt(()=>{Se&&Sn(Se,P,A),ee&&Ai(A,null,P,"unmounted")},H)},Me=A=>{const{type:P,el:H,anchor:ie,transition:re}=A;if(P===Et){O(H,ie);return}if(P===Ta){b(A);return}const de=()=>{r(H),re&&!re.persisted&&re.afterLeave&&re.afterLeave()};if(A.shapeFlag&1&&re&&!re.persisted){const{leave:he,delayLeave:pe}=re,me=()=>he(H,de);pe?pe(A.el,de,me):me()}else de()},O=(A,P)=>{let H;for(;A!==P;)H=d(A),r(A),A=H;r(P)},F=(A,P,H)=>{const{bum:ie,scope:re,update:de,subTree:he,um:pe}=A;ie&&Aa(ie),re.stop(),de&&(de.active=!1,ae(he,A,P,H)),pe&&Rt(pe,P),Rt(()=>{A.isUnmounted=!0},P),P&&P.pendingBranch&&!P.isUnmounted&&A.asyncDep&&!A.asyncResolved&&A.suspenseId===P.pendingId&&(P.deps--,P.deps===0&&P.resolve())},se=(A,P,H,ie=!1,re=!1,de=0)=>{for(let he=de;he<A.length;he++)ae(A[he],P,H,ie,re)},fe=A=>A.shapeFlag&6?fe(A.component.subTree):A.shapeFlag&128?A.suspense.next():d(A.anchor||A.el),be=(A,P,H)=>{A==null?P._vnode&&ae(P._vnode,null,null,!0):h(P._vnode||null,A,P,null,null,null,H),sh(),P._vnode=A},ge={p:h,um:ae,m:le,r:Me,mt:ne,mc:E,pc:G,pbc:B,n:fe,o:t};let Ce,ve;return e&&([Ce,ve]=e(ge)),{render:be,hydrate:Ce,createApp:iv(be,Ce)}}function Ei({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Th(t,e,n=!1){const i=t.children,r=e.children;if(De(i)&&De(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=ui(r[s]),a.el=o.el),n||Th(o,a))}}function ov(t){const e=t.slice(),n=[0];let i,r,s,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(r=n[n.length-1],t[r]<c){e[i]=r,n.push(i);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[i]=n[s-1]),n[s]=i)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}const av=t=>t.__isTeleport,Et=Symbol(void 0),vc=Symbol(void 0),hn=Symbol(void 0),Ta=Symbol(void 0),ys=[];let un=null;function Nt(t=!1){ys.push(un=t?null:[])}function lv(){ys.pop(),un=ys[ys.length-1]||null}let Ps=1;function fu(t){Ps+=t}function Lh(t){return t.dynamicChildren=Ps>0?un||Rr:null,lv(),Ps>0&&un&&un.push(t),t}function la(t,e,n,i,r,s){return Lh(ua(t,e,n,i,r,s,!0))}function Cn(t,e,n,i,r){return Lh(k(t,e,n,i,r,!0))}function Cl(t){return t?t.__v_isVNode===!0:!1}function Ni(t,e){return t.type===e.type&&t.key===e.key}const ca="__vInternal",Ph=({key:t})=>t!=null?t:null,Ro=({ref:t,ref_key:e,ref_for:n})=>t!=null?mt(t)||it(t)||Ne(t)?{i:Zt,r:t,k:e,f:!!n}:t:null;function ua(t,e=null,n=null,i=0,r=null,s=t===Et?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ph(e),ref:e&&Ro(e),scopeId:lh,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null};return a?(_c(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=mt(n)?8:16),Ps>0&&!o&&un&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&un.push(l),l}const k=cv;function cv(t,e=null,n=null,i=0,r=null,s=!1){if((!t||t===_h)&&(t=hn),Cl(t)){const a=gi(t,e,!0);return n&&_c(a,n),Ps>0&&!s&&un&&(a.shapeFlag&6?un[un.indexOf(t)]=a:un.push(a)),a.patchFlag|=-2,a}if(xv(t)&&(t=t.__vccOpts),e){e=uv(e);let{class:a,style:l}=e;a&&!mt(a)&&(e.class=Xo(a)),dt(l)&&(qd(l)&&!De(l)&&(l=yt({},l)),e.style=Kl(l))}const o=mt(t)?1:Ig(t)?128:av(t)?64:dt(t)?4:Ne(t)?2:0;return ua(t,e,n,i,r,o,s,!0)}function uv(t){return t?qd(t)||ca in t?yt({},t):t:null}function gi(t,e,n=!1){const{props:i,ref:r,patchFlag:s,children:o}=t,a=e?vi(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Ph(a),ref:e&&e.ref?n&&r?De(r)?r.concat(Ro(e)):[r,Ro(e)]:Ro(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Et?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&gi(t.ssContent),ssFallback:t.ssFallback&&gi(t.ssFallback),el:t.el,anchor:t.anchor}}function ji(t=" ",e=0){return k(vc,null,t,e)}function Dh(t="",e=!1){return e?(Nt(),Cn(hn,null,t)):k(hn,null,t)}function wn(t){return t==null||typeof t=="boolean"?k(hn):De(t)?k(Et,null,t.slice()):typeof t=="object"?ui(t):k(vc,null,String(t))}function ui(t){return t.el===null||t.memo?t:gi(t)}function _c(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(De(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),_c(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(ca in e)?e._ctx=Zt:r===3&&Zt&&(Zt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Ne(e)?(e={default:e,_ctx:Zt},n=32):(e=String(e),i&64?(n=16,e=[ji(e)]):n=8);t.children=e,t.shapeFlag|=n}function vi(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Xo([e.class,i.class]));else if(r==="style")e.style=Kl([e.style,i.style]);else if(Zo(r)){const s=e[r],o=i[r];o&&s!==o&&!(De(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function Sn(t,e,n,i=null){Qt(t,e,7,[n,i])}const fv=Ch();let dv=0;function hv(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||fv,s={uid:dv++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Nd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Mh(i,r),emitsOptions:ah(i,r),emit:null,emitted:null,propsDefaults:Qe,inheritAttrs:i.inheritAttrs,ctx:Qe,data:Qe,props:Qe,attrs:Qe,slots:Qe,refs:Qe,setupState:Qe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Tg.bind(null,s),t.ce&&t.ce(s),s}let _t=null;const fa=()=>_t||Zt,zr=t=>{_t=t,t.scope.on()},Wi=()=>{_t&&_t.scope.off(),_t=null};function Rh(t){return t.vnode.shapeFlag&4}let Ds=!1;function pv(t,e=!1){Ds=e;const{props:n,children:i}=t.vnode,r=Rh(t);Kg(t,n,r,e),ev(t,i);const s=r?mv(t,e):void 0;return Ds=!1,s}function mv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=jd(new Proxy(t.ctx,$g));const{setup:i}=n;if(i){const r=t.setupContext=i.length>1?vv(t):null;zr(t),jr();const s=hi(i,t,0,[t.props,r]);if(Xr(),Wi(),Dd(s)){if(s.then(Wi,Wi),e)return s.then(o=>{du(t,o,e)}).catch(o=>{ta(o,t,0)});t.asyncDep=s}else du(t,s,e)}else Ih(t,e)}function du(t,e,n){Ne(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:dt(e)&&(t.setupState=Jd(e)),Ih(t,n)}let hu;function Ih(t,e,n){const i=t.type;if(!t.render){if(!e&&hu&&!i.render){const r=i.template;if(r){const{isCustomElement:s,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=i,c=yt(yt({isCustomElement:s,delimiters:a},o),l);i.render=hu(r,c)}}t.render=i.render||fn}zr(t),jr(),Yg(t),Xr(),Wi()}function gv(t){return new Proxy(t.attrs,{get(e,n){return Vt(t,"get","$attrs"),e[n]}})}function vv(t){const e=i=>{t.exposed=i||{}};let n;return{get attrs(){return n||(n=gv(t))},slots:t.slots,emit:t.emit,expose:e}}function da(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Jd(jd(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in zo)return zo[n](t)}}))}function _v(t,e=!0){return Ne(t)?t.displayName||t.name:t.name||e&&t.__name}function xv(t){return Ne(t)&&"__vccOpts"in t}const K=(t,e)=>Sg(t,e,Ds);function yn(t,e,n){const i=arguments.length;return i===2?dt(e)&&!De(e)?Cl(e)?k(t,null,[e]):k(t,e):k(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Cl(n)&&(n=[n]),k(t,e,n))}const yv="3.2.37",bv="http://www.w3.org/2000/svg",Bi=typeof document<"u"?document:null,pu=Bi&&Bi.createElement("template"),Sv={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e?Bi.createElementNS(bv,t):Bi.createElement(t,n?{is:n}:void 0);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>Bi.createTextNode(t),createComment:t=>Bi.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Bi.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,i,r,s){const o=n?n.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{pu.innerHTML=i?`<svg>${t}</svg>`:t;const a=pu.content;if(i){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Mv(t,e,n){const i=t._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function wv(t,e,n){const i=t.style,r=mt(n);if(n&&!r){for(const s in n)Tl(i,s,n[s]);if(e&&!mt(e))for(const s in e)n[s]==null&&Tl(i,s,"")}else{const s=i.display;r?e!==n&&(i.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(i.display=s)}}const mu=/\s*!important$/;function Tl(t,e,n){if(De(n))n.forEach(i=>Tl(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=Av(t,e);mu.test(n)?t.setProperty(qr(i),n.replace(mu,""),"important"):t[i]=n}}const gu=["Webkit","Moz","ms"],La={};function Av(t,e){const n=La[e];if(n)return n;let i=Jt(e);if(i!=="filter"&&i in t)return La[e]=i;i=_i(i);for(let r=0;r<gu.length;r++){const s=gu[r]+i;if(s in t)return La[e]=s}return e}const vu="http://www.w3.org/1999/xlink";function Ev(t,e,n,i,r){if(i&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(vu,e.slice(6,e.length)):t.setAttributeNS(vu,e,n);else{const s=Fm(e);n==null||s&&!Td(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function Cv(t,e,n,i,r,s,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,r,s),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const l=n==null?"":n;(t.value!==l||t.tagName==="OPTION")&&(t.value=l),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Td(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}const[Fh,Tv]=(()=>{let t=Date.now,e=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let Ll=0;const Lv=Promise.resolve(),Pv=()=>{Ll=0},Dv=()=>Ll||(Lv.then(Pv),Ll=Fh());function Rv(t,e,n,i){t.addEventListener(e,n,i)}function Iv(t,e,n,i){t.removeEventListener(e,n,i)}function Fv(t,e,n,i,r=null){const s=t._vei||(t._vei={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=Nv(e);if(i){const c=s[e]=Bv(i,r);Rv(t,a,c,l)}else o&&(Iv(t,a,o,l),s[e]=void 0)}}const _u=/(?:Once|Passive|Capture)$/;function Nv(t){let e;if(_u.test(t)){e={};let n;for(;n=t.match(_u);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[qr(t.slice(2)),e]}function Bv(t,e){const n=i=>{const r=i.timeStamp||Fh();(Tv||r>=n.attached-1)&&Qt(Ov(i,n.value),e,5,[i])};return n.value=t,n.attached=Dv(),n}function Ov(t,e){if(De(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const xu=/^on[a-z]/,kv=(t,e,n,i,r=!1,s,o,a,l)=>{e==="class"?Mv(t,i,r):e==="style"?wv(t,n,i):Zo(e)?Ql(e)||Fv(t,e,n,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):zv(t,e,i,r))?Cv(t,e,i,s,o,a,l):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),Ev(t,e,i,r))};function zv(t,e,n,i){return i?!!(e==="innerHTML"||e==="textContent"||e in t&&xu.test(e)&&Ne(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||xu.test(e)&&mt(n)?!1:e in t}const Qn="transition",ss="animation",er=(t,{slots:e})=>yn(fh,Bh(t),e);er.displayName="Transition";const Nh={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Uv=er.props=yt({},fh.props,Nh),Ci=(t,e=[])=>{De(t)?t.forEach(n=>n(...e)):t&&t(...e)},yu=t=>t?De(t)?t.some(e=>e.length>1):t.length>1:!1;function Bh(t){const e={};for(const V in t)V in Nh||(e[V]=t[V]);if(t.css===!1)return e;const{name:n="v",type:i,duration:r,enterFromClass:s=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=t,g=Gv(r),m=g&&g[0],h=g&&g[1],{onBeforeEnter:v,onEnter:x,onEnterCancelled:M,onLeave:w,onLeaveCancelled:b,onBeforeAppear:T=v,onAppear:L=x,onAppearCancelled:_=M}=e,E=(V,Z,N)=>{ci(V,Z?u:a),ci(V,Z?c:o),N&&N()},D=(V,Z)=>{V._isLeaving=!1,ci(V,f),ci(V,p),ci(V,d),Z&&Z()},B=V=>(Z,N)=>{const ne=V?L:x,z=()=>E(Z,V,N);Ci(ne,[Z,z]),bu(()=>{ci(Z,V?l:s),On(Z,V?u:a),yu(ne)||Su(Z,i,m,z)})};return yt(e,{onBeforeEnter(V){Ci(v,[V]),On(V,s),On(V,o)},onBeforeAppear(V){Ci(T,[V]),On(V,l),On(V,c)},onEnter:B(!1),onAppear:B(!0),onLeave(V,Z){V._isLeaving=!0;const N=()=>D(V,Z);On(V,f),kh(),On(V,d),bu(()=>{!V._isLeaving||(ci(V,f),On(V,p),yu(w)||Su(V,i,h,N))}),Ci(w,[V,N])},onEnterCancelled(V){E(V,!1),Ci(M,[V])},onAppearCancelled(V){E(V,!0),Ci(_,[V])},onLeaveCancelled(V){D(V),Ci(b,[V])}})}function Gv(t){if(t==null)return null;if(dt(t))return[Pa(t.enter),Pa(t.leave)];{const e=Pa(t);return[e,e]}}function Pa(t){return Fd(t)}function On(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function ci(t,e){e.split(/\s+/).forEach(i=>i&&t.classList.remove(i));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function bu(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Vv=0;function Su(t,e,n,i){const r=t._endId=++Vv,s=()=>{r===t._endId&&i()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:l}=Oh(t,e);if(!o)return i();const c=o+"end";let u=0;const f=()=>{t.removeEventListener(c,d),s()},d=p=>{p.target===t&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},a+1),t.addEventListener(c,d)}function Oh(t,e){const n=window.getComputedStyle(t),i=g=>(n[g]||"").split(", "),r=i(Qn+"Delay"),s=i(Qn+"Duration"),o=Mu(r,s),a=i(ss+"Delay"),l=i(ss+"Duration"),c=Mu(a,l);let u=null,f=0,d=0;e===Qn?o>0&&(u=Qn,f=o,d=s.length):e===ss?c>0&&(u=ss,f=c,d=l.length):(f=Math.max(o,c),u=f>0?o>c?Qn:ss:null,d=u?u===Qn?s.length:l.length:0);const p=u===Qn&&/\b(transform|all)(,|$)/.test(n[Qn+"Property"]);return{type:u,timeout:f,propCount:d,hasTransform:p}}function Mu(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,i)=>wu(n)+wu(t[i])))}function wu(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function kh(){return document.body.offsetHeight}const zh=new WeakMap,Uh=new WeakMap,Hv={name:"TransitionGroup",props:yt({},Uv,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=fa(),i=uh();let r,s;return gh(()=>{if(!r.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!jv(r[0].el,n.vnode.el,o))return;r.forEach($v),r.forEach(Yv);const a=r.filter(qv);kh(),a.forEach(l=>{const c=l.el,u=c.style;On(c,o),u.transform=u.webkitTransform=u.transitionDuration="";const f=c._moveCb=d=>{d&&d.target!==c||(!d||/transform$/.test(d.propertyName))&&(c.removeEventListener("transitionend",f),c._moveCb=null,ci(c,o))};c.addEventListener("transitionend",f)})}),()=>{const o=$e(t),a=Bh(o);let l=o.tag||Et;r=s,s=e.default?fc(e.default()):[];for(let c=0;c<s.length;c++){const u=s[c];u.key!=null&&Ls(u,Ts(u,a,i,n))}if(r)for(let c=0;c<r.length;c++){const u=r[c];Ls(u,Ts(u,a,i,n)),zh.set(u,u.el.getBoundingClientRect())}return k(l,null,s)}}},Wv=Hv;function $v(t){const e=t.el;e._moveCb&&e._moveCb(),e._enterCb&&e._enterCb()}function Yv(t){Uh.set(t,t.el.getBoundingClientRect())}function qv(t){const e=zh.get(t),n=Uh.get(t),i=e.left-n.left,r=e.top-n.top;if(i||r){const s=t.el.style;return s.transform=s.webkitTransform=`translate(${i}px,${r}px)`,s.transitionDuration="0s",t}}function jv(t,e,n){const i=t.cloneNode();t._vtc&&t._vtc.forEach(o=>{o.split(/\s+/).forEach(a=>a&&i.classList.remove(a))}),n.split(/\s+/).forEach(o=>o&&i.classList.add(o)),i.style.display="none";const r=e.nodeType===1?e:e.parentNode;r.appendChild(i);const{hasTransform:s}=Oh(i);return r.removeChild(i),s}const Gh={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):os(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:i}){!e!=!n&&(i?e?(i.beforeEnter(t),os(t,!0),i.enter(t)):i.leave(t,()=>{os(t,!1)}):os(t,e))},beforeUnmount(t,{value:e}){os(t,e)}};function os(t,e){t.style.display=e?t._vod:"none"}const Xv=yt({patchProp:kv},Sv);let Au;function Zv(){return Au||(Au=rv(Xv))}const Kv=(...t)=>{const e=Zv().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=Qv(i);if(!r)return;const s=e._component;!Ne(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Qv(t){return mt(t)?document.querySelector(t):t}const Jv="/assets/icon.81869c0c.png";const tr=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n};const mn=typeof window<"u",xc=mn&&"IntersectionObserver"in window,e_=mn&&("ontouchstart"in window||window.navigator.maxTouchPoints>0);mn&&CSS.supports("selector(:focus-visible)");function Vh(t){const e=Pe(),n=Pe();if(mn){const i=new ResizeObserver(r=>{t==null||t(r,i),r.length&&(n.value=r[0].contentRect)});xn(()=>{i.disconnect()}),pt(e,(r,s)=>{s&&(i.unobserve(s),n.value=void 0),r&&i.observe(r)},{flush:"post"})}return{resizeRef:e,contentRect:ea(n)}}function Eu(t,e,n){t_(t,e),e.set(t,n)}function t_(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}function n_(t,e,n){var i=Hh(t,e,"set");return i_(t,i,n),n}function i_(t,e,n){if(e.set)e.set.call(t,n);else{if(!e.writable)throw new TypeError("attempted to set read only private field");e.value=n}}function Ti(t,e){var n=Hh(t,e,"get");return r_(t,n)}function Hh(t,e,n){if(!e.has(t))throw new TypeError("attempted to "+n+" private field on non-instance");return e.get(t)}function r_(t,e){return e.get?e.get.call(t):e.value}function Wh(t,e,n){const i=e.length-1;if(i<0)return t===void 0?n:t;for(let r=0;r<i;r++){if(t==null)return n;t=t[e[r]]}return t==null||t[e[i]]===void 0?n:t[e[i]]}function $h(t,e){if(t===e)return!0;if(t instanceof Date&&e instanceof Date&&t.getTime()!==e.getTime()||t!==Object(t)||e!==Object(e))return!1;const n=Object.keys(t);return n.length!==Object.keys(e).length?!1:n.every(i=>$h(t[i],e[i]))}function Pl(t,e,n){return t==null||!e||typeof e!="string"?n:t[e]!==void 0?t[e]:(e=e.replace(/\[(\w+)\]/g,".$1"),e=e.replace(/^\./,""),Wh(t,e.split("."),n))}function as(t,e,n){if(e==null)return t===void 0?n:t;if(t!==Object(t))return n;if(typeof e=="string")return Pl(t,e,n);if(Array.isArray(e))return Wh(t,e,n);if(typeof e!="function")return n;const i=e(t,n);return typeof i>"u"?n:i}function s_(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return Array.from({length:t},(n,i)=>e+i)}function ze(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"px";if(!(t==null||t===""))return isNaN(+t)?String(t):isFinite(+t)?`${Number(t)}${e}`:void 0}function Dl(t){return t!==null&&typeof t=="object"&&!Array.isArray(t)}const Cu=Object.freeze({enter:13,tab:9,delete:46,esc:27,space:32,up:38,down:40,left:37,right:39,end:35,home:36,del:46,backspace:8,insert:45,pageup:33,pagedown:34,shift:16});Object.freeze({enter:"Enter",tab:"Tab",delete:"Delete",esc:"Escape",space:"Space",up:"ArrowUp",down:"ArrowDown",left:"ArrowLeft",right:"ArrowRight",end:"End",home:"Home",del:"Delete",backspace:"Backspace",insert:"Insert",pageup:"PageUp",pagedown:"PageDown",shift:"Shift"});function Yh(t,e){const n=Object.create(null),i=Object.create(null);for(const r in t)e.some(s=>s instanceof RegExp?s.test(r):s===r)?n[r]=t[r]:i[r]=t[r];return[n,i]}function o_(t){return t==null?[]:Array.isArray(t)?t:[t]}function a_(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1;return Math.max(e,Math.min(n,t))}function $n(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;const i={};for(const r in t)i[r]=t[r];for(const r in e){const s=t[r],o=e[r];if(Dl(s)&&Dl(o)){i[r]=$n(s,o,n);continue}if(Array.isArray(s)&&Array.isArray(o)&&n){i[r]=n(s,o);continue}i[r]=o}return i}function qh(t){return t.map(e=>e.type===Et?qh(e.children):e).flat()}function yc(){return(arguments.length>0&&arguments[0]!==void 0?arguments[0]:"").replace(/[^a-z]/gi,"-").replace(/\B([A-Z])/g,"-$1").toLowerCase()}function bs(t,e){if(!e||typeof e!="object")return[];if(Array.isArray(e))return e.map(n=>bs(t,n)).flat(1);if(Array.isArray(e.children))return e.children.map(n=>bs(t,n)).flat(1);if(e.component){if(Object.getOwnPropertySymbols(e.component.provides).includes(t))return[e.component];if(e.component.subTree)return bs(t,e.component.subTree).flat(1)}return[]}var io=new WeakMap,lr=new WeakMap;class l_{constructor(e){Eu(this,io,{writable:!0,value:[]}),Eu(this,lr,{writable:!0,value:0}),this.size=e}push(e){Ti(this,io)[Ti(this,lr)]=e,n_(this,lr,(Ti(this,lr)+1)%this.size)}values(){return Ti(this,io).slice(Ti(this,lr)).concat(Ti(this,io).slice(0,Ti(this,lr)))}}function jh(t){const e={},n=K(t);for(const i in n.value)e[i]=Ve(n.value,i);return pt(n,i=>{for(const r in i)e[r].value=i[r]},{flush:"sync"}),e}function Rl(t,e){return t.includes(e)}const c_=["top","bottom"],u_=["start","end","left","right"];function f_(t,e){let[n,i]=t.split(" ");return i||(i=Rl(c_,n)?"start":Rl(u_,n)?"top":"center"),{side:Il(n,e),align:Il(i,e)}}function Il(t,e){return t==="start"?e?"right":"left":t==="end"?e?"left":"right":t}function Xh(t,e,n){if(n&&(e={_isVue:!0,$parent:n,$options:e}),e){if(e.$_alreadyWarned=e.$_alreadyWarned||[],e.$_alreadyWarned.includes(t))return;e.$_alreadyWarned.push(t)}return`[Vuetify] ${t}`+(e?p_(e):"")}function Nr(t,e,n){const i=Xh(t,e,n);i!=null&&console.warn(i)}function Tu(t,e,n){const i=Xh(t,e,n);i!=null&&console.error(i)}const d_=/(?:^|[-_])(\w)/g,h_=t=>t.replace(d_,e=>e.toUpperCase()).replace(/[-_]/g,"");function Da(t,e){if(t.$root===t)return"<Root>";const n=typeof t=="function"&&t.cid!=null?t.options:t._isVue?t.$options||t.constructor.options:t||{};let i=n.name||n._componentTag;const r=n.__file;if(!i&&r){const s=r.match(/([^/\\]+)\.vue$/);i=s==null?void 0:s[1]}return(i?`<${h_(i)}>`:"<Anonymous>")+(r&&e!==!1?` at ${r}`:"")}function p_(t){if(t._isVue&&t.$parent){const e=[];let n=0;for(;t;){if(e.length>0){const i=e[e.length-1];if(i.constructor===t.constructor){n++,t=t.$parent;continue}else n>0&&(e[e.length-1]=[i,n],n=0)}e.push(t),t=t.$parent}return`

found in

`+e.map((i,r)=>`${r===0?"---> ":" ".repeat(5+r*2)}${Array.isArray(i)?`${Da(i[0])}... (${i[1]} recursive calls)`:Da(i)}`).join(`
`)}else return`

(found in ${Da(t)})`}const m_=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]],g_=t=>t<=.0031308?t*12.92:1.055*t**(1/2.4)-.055,v_=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],__=t=>t<=.04045?t/12.92:((t+.055)/1.055)**2.4;function Zh(t){const e=Array(3),n=g_,i=m_;for(let r=0;r<3;++r)e[r]=Math.round(a_(n(i[r][0]*t[0]+i[r][1]*t[1]+i[r][2]*t[2]))*255);return(e[0]<<16)+(e[1]<<8)+(e[2]<<0)}function bc(t){const e=[0,0,0],n=__,i=v_,r=n((t>>16&255)/255),s=n((t>>8&255)/255),o=n((t>>0&255)/255);for(let a=0;a<3;++a)e[a]=i[a][0]*r+i[a][1]*s+i[a][2]*o;return e}const Go=.20689655172413793,x_=t=>t>Go**3?Math.cbrt(t):t/(3*Go**2)+4/29,y_=t=>t>Go?t**3:3*Go**2*(t-4/29);function Kh(t){const e=x_,n=e(t[1]);return[116*n-16,500*(e(t[0]/.95047)-n),200*(n-e(t[2]/1.08883))]}function Qh(t){const e=y_,n=(t[0]+16)/116;return[e(n+t[1]/500)*.95047,e(n),e(n-t[2]/200)*1.08883]}function Lu(t){return!!t&&/^(#|var\(--|(rgb|hsl)a?\()/.test(t)}function Vo(t){let e;if(typeof t=="number")e=t;else if(typeof t=="string"){let n=t.startsWith("#")?t.substring(1):t;n.length===3&&(n=n.split("").map(i=>i+i).join("")),n.length!==6&&n.length!==8&&Nr(`'${t}' is not a valid rgb color`),e=parseInt(n,16)}else throw new TypeError(`Colors can only be numbers or strings, recieved ${t==null?t:t.constructor.name} instead`);return e<0?(Nr(`Colors cannot be negative: '${t}'`),e=0):(e>4294967295||isNaN(e))&&(Nr(`'${t}' is not a valid rgb color`),e=16777215),e}function b_(t){let e=t.toString(16);return e.length<6&&(e="0".repeat(6-e.length)+e),"#"+e}function Jh(t){const e=Vo(t);return{r:(e&16711680)>>16,g:(e&65280)>>8,b:e&255}}function S_(t,e){const n=Kh(bc(t));return n[0]=n[0]+e*10,Zh(Qh(n))}function M_(t,e){const n=Kh(bc(t));return n[0]=n[0]-e*10,Zh(Qh(n))}function w_(t){const e=Vo(t);return bc(e)[1]}function en(t,e){const n=fa();if(!n)throw new Error(`[Vuetify] ${t} ${e||"must be called from inside a setup function"}`);return n}function nr(){var t;let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"composables";return yc((t=en(e).type)==null?void 0:t.name)}let ep=0,Io=new WeakMap;function Vs(){const t=en("getUid");if(Io.has(t))return Io.get(t);{const e=ep++;return Io.set(t,e),e}}Vs.reset=()=>{ep=0,Io=new WeakMap};function A_(t){const{provides:e}=en("injectSelf");if(e&&t in e)return e[t]}const Rs=Symbol.for("vuetify:defaults");function E_(t){return Pe(t!=null?t:{})}function tp(){const t=rt(Rs);if(!t)throw new Error("[Vuetify] Could not find defaults instance");return t}function yi(t,e){const n=tp(),i=Pe(t),r=K(()=>{const s=dn(e==null?void 0:e.scoped),o=dn(e==null?void 0:e.reset),a=dn(e==null?void 0:e.root);let l=$n(i.value,{prev:n.value});if(s)return l;if(o||a){const c=Number(o||1/0);for(let u=0;u<=c&&l.prev;u++)l=l.prev;return l}return $n(l.prev,l)});return Lt(Rs,r),r}function C_(t,e){var n,i;return((n=t.props)==null?void 0:n.hasOwnProperty(e))||((i=t.props)==null?void 0:i.hasOwnProperty(yc(e)))}const je=function(e){var n;if(e._setup=(n=e._setup)!=null?n:e.setup,!e.name)return Nr("The component is missing an explicit name, unable to generate default prop value"),e;if(e._setup){var i;e.props=(i=e.props)!=null?i:{},e.props._as=String,e.setup=function(s,o){const a=fa(),l=tp(),c=Kd(),u=Yd({...$e(s)});ra(()=>{var p;const g=l.value.global,m=l.value[(p=s._as)!=null?p:e.name];if(m){const x=Object.entries(m).filter(M=>{let[w]=M;return w.startsWith("V")});x.length&&(c.value=Object.fromEntries(x))}for(const x of Object.keys(s)){let M;if(C_(a.vnode,x))M=s[x];else{var h,v;M=(h=(v=m==null?void 0:m[x])!=null?v:g==null?void 0:g[x])!=null?h:s[x]}u[x]!==M&&(u[x]=M)}});const f=e._setup(u,o);let d;return pt(c,(p,g)=>{!p&&d?d.stop():p&&!g&&(d=$m(),d.run(()=>{var m,h;yi($n((m=(h=A_(Rs))==null?void 0:h.value)!=null?m:{},p))}))},{immediate:!0}),f}}return e};function Hs(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return e=>(t?je:xi)(e)}function Ws(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",n=arguments.length>2?arguments[2]:void 0;return je({name:n!=null?n:_i(Jt(t.replace(/__/g,"-"))),props:{tag:{type:String,default:e}},setup(i,r){let{slots:s}=r;return()=>{var o;return yn(i.tag,{class:t},(o=s.default)==null?void 0:o.call(s))}}})}function tt(t,e){return n=>Object.keys(t).reduce((i,r)=>{const o=typeof t[r]=="object"&&t[r]!=null&&!Array.isArray(t[r])?t[r]:{type:t[r]};return n&&r in n?i[r]={...o,default:n[r]}:i[r]=o,e&&(i[r].source=e),i},{})}function nt(t){const e=en("useRender");e.render=t}const Ho=Symbol.for("vuetify:layout"),np=Symbol.for("vuetify:layout-item"),Pu=1e3,T_=tt({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),L_=tt({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function P_(){const t=rt(Ho);if(!t)throw new Error("Could not find injected Vuetify layout");return t}function D_(t){var e;const n=rt(Ho);if(!n)throw new Error("Could not find injected Vuetify layout");const i=(e=t.id)!=null?e:`layout-item-${Vs()}`,r=en("useLayoutItem");Lt(np,{id:i});const s=Pe(!1);ph(()=>s.value=!0),hh(()=>s.value=!1);const{layoutItemStyles:o,layoutItemScrimStyles:a}=n.register(r,{...t,active:K(()=>s.value?!1:t.active.value),id:i});return xn(()=>n.unregister(i)),{layoutItemStyles:o,layoutRect:n.layoutRect,layoutItemScrimStyles:a}}const R_=(t,e,n,i)=>{let r={top:0,left:0,right:0,bottom:0};const s=[{id:"",layer:{...r}}];for(const o of t){const a=e.get(o),l=n.get(o),c=i.get(o);if(!a||!l||!c)continue;const u={...r,[a.value]:parseInt(r[a.value],10)+(c.value?parseInt(l.value,10):0)};s.push({id:o,layer:u}),r=u}return s};function I_(t){const e=rt(Ho,null),n=K(()=>e?e.rootZIndex.value-100:Pu),i=Pe([]),r=Ft(new Map),s=Ft(new Map),o=Ft(new Map),a=Ft(new Map),l=Ft(new Map),{resizeRef:c,contentRect:u}=Vh(),f=K(()=>{var b;const T=new Map,L=(b=t.overlaps)!=null?b:[];for(const _ of L.filter(E=>E.includes(":"))){const[E,D]=_.split(":");if(!i.value.includes(E)||!i.value.includes(D))continue;const B=r.get(E),V=r.get(D),Z=s.get(E),N=s.get(D);!B||!V||!Z||!N||(T.set(D,{position:B.value,amount:parseInt(Z.value,10)}),T.set(E,{position:V.value,amount:-parseInt(N.value,10)}))}return T}),d=K(()=>{const b=[...new Set([...o.values()].map(L=>L.value))].sort((L,_)=>L-_),T=[];for(const L of b){const _=i.value.filter(E=>{var D;return((D=o.get(E))==null?void 0:D.value)===L});T.push(..._)}return R_(T,r,s,a)}),p=K(()=>!Array.from(l.values()).some(b=>b.value)),g=K(()=>{const b=d.value[d.value.length-1].layer;return{"--v-layout-left":ze(b.left),"--v-layout-right":ze(b.right),"--v-layout-top":ze(b.top),"--v-layout-bottom":ze(b.bottom),...p.value?void 0:{transition:"none"}}}),m=K(()=>d.value.slice(1).map((b,T)=>{let{id:L}=b;const{layer:_}=d.value[T],E=s.get(L);return{id:L,..._,size:Number(E.value)}})),h=b=>m.value.find(T=>T.id===b),v=en("createLayout"),x=Pe(!1);Ji(()=>{x.value=!0}),Lt(Ho,{register:(b,T)=>{let{id:L,order:_,position:E,layoutSize:D,elementSize:B,active:V,disableTransitions:Z,absolute:N}=T;o.set(L,_),r.set(L,E),s.set(L,D),a.set(L,V),Z&&l.set(L,Z);const z=bs(np,v==null?void 0:v.vnode).indexOf(b);z>-1?i.value.splice(z,0,L):i.value.push(L);const X=K(()=>m.value.findIndex(ue=>ue.id===L)),Y=K(()=>n.value+d.value.length*2-X.value*2),G=K(()=>{const ue=E.value==="left"||E.value==="right",le=E.value==="right",ae=E.value==="bottom",Me={[E.value]:0,zIndex:Y.value,transform:`translate${ue?"X":"Y"}(${(V.value?0:-110)*(le||ae?-1:1)}%)`,position:N.value||n.value!==Pu?"absolute":"fixed",...p.value?void 0:{transition:"none"}};if(!x.value)return Me;if(X.value<0)throw new Error(`Layout item "${L}" is missing`);const O=m.value[X.value];if(!O)throw new Error(`Could not find layout item "${L}`);const F=f.value.get(L);return F&&(O[F.position]+=F.amount),{...Me,height:ue?`calc(100% - ${O.top}px - ${O.bottom}px)`:B.value?`${B.value}px`:void 0,left:le?void 0:`${O.left}px`,right:le?`${O.right}px`:void 0,top:E.value!=="bottom"?`${O.top}px`:void 0,bottom:E.value!=="top"?`${O.bottom}px`:void 0,width:ue?B.value?`${B.value}px`:void 0:`calc(100% - ${O.left}px - ${O.right}px)`}}),J=K(()=>({zIndex:Y.value-1}));return{layoutItemStyles:G,layoutItemScrimStyles:J,zIndex:Y}},unregister:b=>{o.delete(b),r.delete(b),s.delete(b),a.delete(b),l.delete(b),i.value=i.value.filter(T=>T!==b)},mainStyles:g,getLayoutItem:h,items:m,layoutRect:u,rootZIndex:n});const M=K(()=>["v-layout",{"v-layout--full-height":t.fullHeight}]),w=K(()=>({zIndex:n.value,position:e?"relative":void 0,overflow:e?"hidden":void 0}));return{layoutClasses:M,layoutStyles:w,getLayoutItem:h,items:m,layoutRect:u,layoutRef:c}}const cr=2.4,Du=.2126729,Ru=.7151522,Iu=.072175,F_=.55,N_=.58,B_=.57,O_=.62,ro=.03,Fu=1.45,k_=5e-4,z_=1.25,U_=1.25,Nu=.078,Bu=12.82051282051282,so=.06,Ou=.001;function ku(t,e){const n=((t>>16&255)/255)**cr,i=((t>>8&255)/255)**cr,r=((t>>0&255)/255)**cr,s=((e>>16&255)/255)**cr,o=((e>>8&255)/255)**cr,a=((e>>0&255)/255)**cr;let l=n*Du+i*Ru+r*Iu,c=s*Du+o*Ru+a*Iu;if(l<=ro&&(l+=(ro-l)**Fu),c<=ro&&(c+=(ro-c)**Fu),Math.abs(c-l)<k_)return 0;let u;if(c>l){const f=(c**F_-l**N_)*z_;u=f<Ou?0:f<Nu?f-f*Bu*so:f-so}else{const f=(c**O_-l**B_)*U_;u=f>-Ou?0:f>-Nu?f-f*Bu*so:f+so}return u*100}const Wo=Symbol.for("vuetify:theme"),tn=tt({theme:String},"theme"),ls={defaultTheme:"light",variations:{colors:[],lighten:0,darken:0},themes:{light:{dark:!1,colors:{background:"#FFFFFF",surface:"#FFFFFF","surface-variant":"#424242","on-surface-variant":"#EEEEEE",primary:"#6200EE","primary-darken-1":"#3700B3",secondary:"#03DAC6","secondary-darken-1":"#018786",error:"#B00020",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#000000","border-opacity":.12,"high-emphasis-opacity":.87,"medium-emphasis-opacity":.6,"disabled-opacity":.38,"idle-opacity":.04,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.12,"dragged-opacity":.08,"kbd-background-color":"#212529","kbd-color":"#FFFFFF","code-background-color":"#C2C2C2"}},dark:{dark:!0,colors:{background:"#121212",surface:"#212121","surface-variant":"#BDBDBD","on-surface-variant":"#424242",primary:"#BB86FC","primary-darken-1":"#3700B3",secondary:"#03DAC5","secondary-darken-1":"#03DAC5",error:"#CF6679",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#FFFFFF","border-opacity":.12,"high-emphasis-opacity":.87,"medium-emphasis-opacity":.6,"disabled-opacity":.38,"idle-opacity":.1,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.16,"dragged-opacity":.08,"kbd-background-color":"#212529","kbd-color":"#FFFFFF","code-background-color":"#B7B7B7"}}}};function G_(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:ls;if(!t)return{...ls,isDisabled:!0};const e={};for(const[s,o]of Object.entries((n=t.themes)!=null?n:{})){var n,i,r;const a=o.dark?(i=ls.themes)==null?void 0:i.dark:(r=ls.themes)==null?void 0:r.light;e[s]=$n(a,o)}return $n(ls,{...t,themes:e})}function V_(t,e){const n=t._context.provides.usehead,i=Ft(G_(e)),r=Pe(i.defaultTheme),s=Pe(i.themes),o=K(()=>{const f={};for(const[d,p]of Object.entries(s.value)){const g=f[d]={...p,colors:{...p.colors}};if(i.variations)for(const m of i.variations.colors){const h=g.colors[m];for(const v of["lighten","darken"]){const x=v==="lighten"?S_:M_;for(const M of s_(i.variations[v],1))g.colors[`${m}-${v}-${M}`]=b_(x(Vo(h),M))}}for(const m of Object.keys(g.colors)){if(/^on-[a-z]/.test(m)||g.colors[`on-${m}`])continue;const h=`on-${m}`,v=Vo(g.colors[m]),x=Math.abs(ku(0,v)),M=Math.abs(ku(16777215,v));g.colors[h]=M>Math.min(x,50)?"#fff":"#000"}}return f}),a=K(()=>o.value[r.value]),l=K(()=>{const f=[];a.value.dark&&ur(f,":root",["color-scheme: dark"]);for(const[m,h]of Object.entries(o.value)){const{variables:v,dark:x}=h;ur(f,`.v-theme--${m}`,[`color-scheme: ${x?"dark":"normal"}`,...H_(h),...Object.keys(v).map(M=>{const w=v[M],b=typeof w=="string"&&w.startsWith("#")?Jh(w):void 0,T=b?`${b.r}, ${b.g}, ${b.b}`:void 0;return`--v-${M}: ${T!=null?T:w}`})])}const d=[],p=[],g=new Set(Object.values(o.value).flatMap(m=>Object.keys(m.colors)));for(const m of g)/^on-[a-z]/.test(m)?ur(p,`.${m}`,[`color: rgb(var(--v-theme-${m})) !important`]):(ur(d,`.bg-${m}`,[`--v-theme-overlay-multiplier: var(--v-theme-${m}-overlay-multiplier)`,`background: rgb(var(--v-theme-${m})) !important`,`color: rgb(var(--v-theme-on-${m})) !important`]),ur(p,`.text-${m}`,[`color: rgb(var(--v-theme-${m})) !important`]),ur(p,`.border-${m}`,[`--v-border-color: var(--v-theme-${m})`]));return f.push(...d,...p),f.map((m,h)=>h===0?m:`    ${m}`).join("")});if(n)n.addHeadObjs(K(()=>{const f={children:l.value,type:"text/css",id:"vuetify-theme-stylesheet"};return i.cspNonce&&(f.nonce=i.cspNonce),{style:[f]}})),mn&&ra(()=>n.updateDOM());else{let d=function(){if(!i.isDisabled){if(typeof document<"u"&&!f){const p=document.createElement("style");p.type="text/css",p.id="vuetify-theme-stylesheet",i.cspNonce&&p.setAttribute("nonce",i.cspNonce),f=p,document.head.appendChild(f)}f&&(f.innerHTML=l.value)}};var u=d;let f=mn?document.getElementById("vuetify-theme-stylesheet"):null;pt(l,d,{immediate:!0})}const c=K(()=>i.isDisabled?void 0:`v-theme--${r.value}`);return{isDisabled:i.isDisabled,name:r,themes:s,current:a,computedThemes:o,themeClasses:c,styles:l,global:{name:r,current:a}}}function nn(t){en("provideTheme");const e=rt(Wo,null);if(!e)throw new Error("Could not find Vuetify theme injection");const n=K(()=>{var s;return(s=t.theme)!=null?s:e==null?void 0:e.name.value}),i=K(()=>e.isDisabled?void 0:`v-theme--${n.value}`),r={...e,name:n,themeClasses:i};return Lt(Wo,r),r}function ur(t,e,n){t.push(`${e} {
`,...n.map(i=>`  ${i};
`),`}
`)}function H_(t){const e=t.dark?2:1,n=t.dark?1:2,i=[];for(const[r,s]of Object.entries(t.colors)){const o=Jh(s);i.push(`--v-theme-${r}: ${o.r},${o.g},${o.b}`),r.startsWith("on-")||i.push(`--v-theme-${r}-overlay-multiplier: ${w_(s)>.18?e:n}`)}return i}const W_={badge:"Badge",close:"Close",dataIterator:{noResultsText:"No matching records found",loadingText:"Loading items..."},dataTable:{itemsPerPageText:"Rows per page:",ariaLabel:{sortDescending:"Sorted descending.",sortAscending:"Sorted ascending.",sortNone:"Not sorted.",activateNone:"Activate to remove sorting.",activateDescending:"Activate to sort descending.",activateAscending:"Activate to sort ascending."},sortBy:"Sort by"},dataFooter:{itemsPerPageText:"Items per page:",itemsPerPageAll:"All",nextPage:"Next page",prevPage:"Previous page",firstPage:"First page",lastPage:"Last page",pageText:"{0}-{1} of {2}"},datePicker:{itemsSelected:"{0} selected",nextMonthAriaLabel:"Next month",nextYearAriaLabel:"Next year",prevMonthAriaLabel:"Previous month",prevYearAriaLabel:"Previous year"},noDataText:"No data available",carousel:{prev:"Previous visual",next:"Next visual",ariaLabel:{delimiter:"Carousel slide {0} of {1}"}},calendar:{moreEvents:"{0} more"},fileInput:{counter:"{0} files",counterSize:"{0} files ({1} in total)"},timePicker:{am:"AM",pm:"PM"},pagination:{ariaLabel:{root:"Pagination Navigation",next:"Next page",previous:"Previous page",page:"Goto Page {0}",currentPage:"Page {0}, Current Page",first:"First page",last:"Last page"}},rating:{ariaLabel:{item:"Rating {0} of {1}"}}},$_={af:!1,ar:!0,bg:!1,ca:!1,ckb:!1,cs:!1,de:!1,el:!1,en:!1,es:!1,et:!1,fa:!1,fi:!1,fr:!1,hr:!1,hu:!1,he:!0,id:!1,it:!1,ja:!1,ko:!1,lv:!1,lt:!1,nl:!1,no:!1,pl:!1,pt:!1,ro:!1,ru:!1,sk:!1,sl:!1,srCyrl:!1,srLatn:!1,sv:!1,th:!1,tr:!1,az:!1,uk:!1,vi:!1,zhHans:!1,zhHant:!1},Sc=Symbol.for("vuetify:rtl");function Y_(t,e){var n;return q_({rtl:{...$_,...(n=e==null?void 0:e.rtl)!=null?n:{}},isRtl:Pe(!1),rtlClasses:Pe("")},t)}function q_(t,e,n){const i=K(()=>typeof(n==null?void 0:n.rtl)=="boolean"?n.rtl:e.current.value&&t.rtl.hasOwnProperty(e.current.value)?t.rtl[e.current.value]:t.isRtl.value);return{isRtl:i,rtl:t.rtl,rtlClasses:K(()=>`v-locale--is-${i.value?"rtl":"ltr"}`)}}function ha(){const t=rt(Sc);if(!t)throw new Error("[Vuetify] Could not find injected rtl instance");return t}const j_=je({name:"VApp",props:{...T_({fullHeight:!0}),...tn()},setup(t,e){let{slots:n}=e;const i=nn(t),{layoutClasses:r,layoutStyles:s,getLayoutItem:o,items:a,layoutRef:l}=I_(t),{rtlClasses:c}=ha();return nt(()=>{var u;return k("div",{ref:l,class:["v-application",i.themeClasses.value,r.value,c.value],style:s.value},[k("div",{class:"v-application__wrap"},[(u=n.default)==null?void 0:u.call(n)])])}),{getLayoutItem:o,items:a,theme:i}}});function Mc(t){return jh(()=>{const e=[],n={};return t.value.background&&(Lu(t.value.background)?n.backgroundColor=t.value.background:e.push(`bg-${t.value.background}`)),t.value.text&&(Lu(t.value.text)?(n.color=t.value.text,n.caretColor=t.value.text):e.push(`text-${t.value.text}`)),{colorClasses:e,colorStyles:n}})}function Is(t,e){const n=K(()=>({text:it(t)?t.value:e?t[e]:null})),{colorClasses:i,colorStyles:r}=Mc(n);return{textColorClasses:i,textColorStyles:r}}function Yn(t,e){const n=K(()=>({background:it(t)?t.value:e?t[e]:null})),{colorClasses:i,colorStyles:r}=Mc(n);return{backgroundColorClasses:i,backgroundColorStyles:r}}const ip=je({name:"VDivider",props:{color:String,inset:Boolean,length:[Number,String],thickness:[Number,String],vertical:Boolean,...tn()},setup(t,e){let{attrs:n}=e;const{themeClasses:i}=nn(t),{backgroundColorClasses:r,backgroundColorStyles:s}=Yn(Ve(t,"color")),o=K(()=>{const a={};return t.length&&(a[t.vertical?"maxHeight":"maxWidth"]=ze(t.length)),t.thickness&&(a[t.vertical?"borderRightWidth":"borderTopWidth"]=ze(t.thickness)),a});return nt(()=>k("hr",{class:[{"v-divider":!0,"v-divider--inset":t.inset,"v-divider--vertical":t.vertical},i.value,r.value],style:[o.value,s.value],"aria-orientation":!n.role||n.role==="separator"?t.vertical?"vertical":"horizontal":void 0,role:`${n.role||"separator"}`},null)),{}}});const Vn=xi({name:"VDefaultsProvider",props:{defaults:Object,reset:[Number,String],root:Boolean,scoped:Boolean},setup(t,e){let{slots:n}=e;const{defaults:i,reset:r,root:s,scoped:o}=eh(t);return yi(i,{reset:r,root:s,scoped:o}),()=>{var a;return(a=n.default)==null?void 0:a.call(n)}}});function Ht(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"top center 0",n=arguments.length>2?arguments[2]:void 0;return je({name:t,props:{group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:{type:String,default:n},origin:{type:String,default:e}},setup(i,r){let{slots:s}=r;return()=>{const o=i.group?Wv:er;return yn(o,{name:t,mode:i.mode,onBeforeEnter(a){a.style.transformOrigin=i.origin},onLeave(a){if(i.leaveAbsolute){const{offsetTop:l,offsetLeft:c,offsetWidth:u,offsetHeight:f}=a;a._transitionInitialStyles={position:a.style.position,top:a.style.top,left:a.style.left,width:a.style.width,height:a.style.height},a.style.position="absolute",a.style.top=`${l}px`,a.style.left=`${c}px`,a.style.width=`${u}px`,a.style.height=`${f}px`}i.hideOnLeave&&a.style.setProperty("display","none","important")},onAfterLeave(a){if(i.leaveAbsolute&&a!=null&&a._transitionInitialStyles){const{position:l,top:c,left:u,width:f,height:d}=a._transitionInitialStyles;delete a._transitionInitialStyles,a.style.position=l||"",a.style.top=c||"",a.style.left=u||"",a.style.width=f||"",a.style.height=d||""}}},s.default)}}})}function rp(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return je({name:t,props:{mode:{type:String,default:n}},setup(i,r){let{slots:s}=r;return()=>yn(er,{name:t,...e},s.default)}})}function sp(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const n=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",i=Jt(`offset-${n}`);return{onBeforeEnter(o){o._parent=o.parentNode,o._initialStyle={transition:o.style.transition,overflow:o.style.overflow,[n]:o.style[n]}},onEnter(o){const a=o._initialStyle;o.style.setProperty("transition","none","important"),o.style.overflow="hidden";const l=`${o[i]}px`;o.style[n]="0",o.offsetHeight,o.style.transition=a.transition,t&&o._parent&&o._parent.classList.add(t),requestAnimationFrame(()=>{o.style[n]=l})},onAfterEnter:s,onEnterCancelled:s,onLeave(o){o._initialStyle={transition:"",overflow:o.style.overflow,[n]:o.style[n]},o.style.overflow="hidden",o.style[n]=`${o[i]}px`,o.offsetHeight,requestAnimationFrame(()=>o.style[n]="0")},onAfterLeave:r,onLeaveCancelled:r};function r(o){t&&o._parent&&o._parent.classList.remove(t),s(o)}function s(o){const a=o._initialStyle[n];o.style.overflow=o._initialStyle.overflow,a!=null&&(o.style[n]=a),delete o._initialStyle}}Ht("fab-transition","center center","out-in");Ht("dialog-bottom-transition");Ht("dialog-top-transition");Ht("fade-transition");Ht("scale-transition");Ht("scroll-x-transition");Ht("scroll-x-reverse-transition");Ht("scroll-y-transition");Ht("scroll-y-reverse-transition");Ht("slide-x-transition");Ht("slide-x-reverse-transition");Ht("slide-y-transition");Ht("slide-y-reverse-transition");const X_=rp("expand-transition",sp());rp("expand-x-transition",sp("",!0));const Fl=Symbol.for("vuetify:list");function op(){const t=rt(Fl,{hasPrepend:Pe(!1),updateHasPrepend:()=>null}),e={hasPrepend:Pe(!1),updateHasPrepend:n=>{n&&(e.hasPrepend.value=n)}};return Lt(Fl,e),t}function ap(){return rt(Fl,null)}const Z_={collapse:"mdi-chevron-up",complete:"mdi-check",cancel:"mdi-close-circle",close:"mdi-close",delete:"mdi-close-circle",clear:"mdi-close-circle",success:"mdi-check-circle",info:"mdi-information",warning:"mdi-alert-circle",error:"mdi-close-circle",prev:"mdi-chevron-left",next:"mdi-chevron-right",checkboxOn:"mdi-checkbox-marked",checkboxOff:"mdi-checkbox-blank-outline",checkboxIndeterminate:"mdi-minus-box",delimiter:"mdi-circle",sort:"mdi-arrow-up",expand:"mdi-chevron-down",menu:"mdi-menu",subgroup:"mdi-menu-down",dropdown:"mdi-menu-down",radioOn:"mdi-radiobox-marked",radioOff:"mdi-radiobox-blank",edit:"mdi-pencil",ratingEmpty:"mdi-star-outline",ratingFull:"mdi-star",ratingHalf:"mdi-star-half-full",loading:"mdi-cached",first:"mdi-page-first",last:"mdi-page-last",unfold:"mdi-unfold-more-horizontal",file:"mdi-paperclip",plus:"mdi-plus",minus:"mdi-minus"},K_={component:t=>yn(lp,{...t,class:"mdi"})},St=[String,Function,Object],Nl=Symbol.for("vuetify:icons"),pa=tt({icon:{type:St,required:!0},tag:{type:String,required:!0}},"icon"),Q_=je({name:"VComponentIcon",props:pa(),setup(t){return()=>k(t.tag,null,{default:()=>[k(t.icon,null,null)]})}}),J_=je({name:"VSvgIcon",inheritAttrs:!1,props:pa(),setup(t,e){let{attrs:n}=e;return()=>k(t.tag,vi(n,{style:null}),{default:()=>[k("svg",{class:"v-icon__svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":"true"},[k("path",{d:t.icon},null)])]})}});je({name:"VLigatureIcon",props:pa(),setup(t){return()=>k(t.tag,null,{default:()=>[t.icon]})}});const lp=je({name:"VClassIcon",props:pa(),setup(t){return()=>k(t.tag,{class:t.icon},null)}}),e0={svg:{component:J_},class:{component:lp}};function t0(t){return $n({defaultSet:"mdi",sets:{...e0,mdi:K_},aliases:Z_},t)}const n0=t=>{const e=rt(Nl);if(!e)throw new Error("Missing Vuetify Icons provide!");return{iconData:K(()=>{const i=it(t)?t.value:t.icon;if(!i)throw new Error("Icon value is undefined or null");let r=i;if(typeof i=="string"&&i.includes("$")){var s;r=(s=e.aliases)==null?void 0:s[i.slice(i.indexOf("$")+1)]}if(!r)throw new Error(`Could not find aliased icon "${i}"`);if(typeof r!="string")return{component:Q_,icon:r};const o=Object.keys(e.sets).find(c=>typeof r=="string"&&r.startsWith(`${c}:`)),a=o?r.slice(o.length+1):r;return{component:e.sets[o!=null?o:e.defaultSet].component,icon:a}})}},bt=tt({tag:{type:String,default:"div"}},"tag");function Fs(t,e,n){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:l=>l,r=arguments.length>4&&arguments[4]!==void 0?arguments[4]:l=>l;const s=en("useProxiedModel"),o=K(()=>{var l,c;return t[e],!!(s!=null&&(l=s.vnode.props)!=null&&l.hasOwnProperty(e)||s!=null&&(c=s.vnode.props)!=null&&c.hasOwnProperty(yc(e)))}),a=Pe(i(t[e]));return K({get(){return o.value?i(t[e]):a.value},set(l){(o.value?i(t[e]):a.value)!==l&&(a.value=l,s==null||s.emit(`update:${e}`,r(l)))}})}const i0={open:t=>{let{id:e,value:n,opened:i,parents:r}=t;if(n){const s=new Set;s.add(e);let o=r.get(e);for(;o!=null;)s.add(o),o=r.get(o);return s}else return i.delete(e),i},select:()=>null},cp={open:t=>{let{id:e,value:n,opened:i,parents:r}=t;if(n){let s=r.get(e);for(i.add(e);s!=null&&s!==e;)i.add(s),s=r.get(s);return i}else i.delete(e);return i},select:()=>null},r0={open:cp.open,select:t=>{let{id:e,value:n,opened:i,parents:r}=t;if(!n)return i;const s=[];let o=r.get(e);for(;o!=null;)s.push(o),o=r.get(o);return new Set(s)}},wc=t=>{const e={select:n=>{let{id:i,value:r,selected:s}=n;if(t&&!r){const o=Array.from(s.entries()).reduce((a,l)=>{let[c,u]=l;return u==="on"?[...a,c]:a},[]);if(o.length===1&&o[0]===i)return s}return s.set(i,r?"on":"off"),s},in:(n,i,r)=>{let s=new Map;for(const o of n||[])s=e.select({id:o,value:!0,selected:new Map(s),children:i,parents:r});return s},out:n=>{const i=[];for(const[r,s]of n.entries())s==="on"&&i.push(r);return i}};return e},up=t=>{const e=wc(t);return{select:i=>{let{selected:r,id:s,...o}=i;const a=r.has(s)?new Map([[s,r.get(s)]]):new Map;return e.select({...o,id:s,selected:a})},in:(i,r,s)=>{let o=new Map;return i!=null&&i.length&&(o=e.in(i.slice(0,1),r,s)),o},out:(i,r,s)=>e.out(i,r,s)}},s0=t=>{const e=wc(t);return{select:i=>{let{id:r,selected:s,children:o,...a}=i;return o.has(r)?s:e.select({id:r,selected:s,children:o,...a})},in:e.in,out:e.out}},o0=t=>{const e=up(t);return{select:i=>{let{id:r,selected:s,children:o,...a}=i;return o.has(r)?s:e.select({id:r,selected:s,children:o,...a})},in:e.in,out:e.out}},a0=t=>{const e={select:n=>{let{id:i,value:r,selected:s,children:o,parents:a}=n;const l=new Map(s),c=[i];for(;c.length;){const f=c.shift();s.set(f,r?"on":"off"),o.has(f)&&c.push(...o.get(f))}let u=a.get(i);for(;u;){const f=o.get(u),d=f.every(g=>s.get(g)==="on"),p=f.every(g=>!s.has(g)||s.get(g)==="off");s.set(u,d?"on":p?"off":"indeterminate"),u=a.get(u)}return t&&!r&&Array.from(s.entries()).reduce((d,p)=>{let[g,m]=p;return m==="on"?[...d,g]:d},[]).length===0?l:s},in:(n,i,r)=>{let s=new Map;for(const o of n||[])s=e.select({id:o,value:!0,selected:new Map(s),children:i,parents:r});return s},out:(n,i)=>{const r=[];for(const[s,o]of n.entries())o==="on"&&!i.has(s)&&r.push(s);return r}};return e},Ns=Symbol.for("vuetify:nested"),fp={id:Pe(),root:{register:()=>null,unregister:()=>null,parents:Pe(new Map),children:Pe(new Map),open:()=>null,select:()=>null,opened:Pe(new Set),selected:Pe(new Map),selectedValues:Pe([])}},l0=tt({selectStrategy:[String,Function],openStrategy:[String,Function],opened:Array,selected:Array,mandatory:Boolean},"nested"),c0=t=>{let e=!1;const n=Pe(new Map),i=Pe(new Map),r=Fs(t,"opened",t.opened,f=>new Set(f),f=>[...f.values()]),s=K(()=>{if(typeof t.selectStrategy=="object")return t.selectStrategy;switch(t.selectStrategy){case"single-leaf":return o0(t.mandatory);case"leaf":return s0(t.mandatory);case"independent":return wc(t.mandatory);case"single-independent":return up(t.mandatory);case"classic":default:return a0(t.mandatory)}}),o=K(()=>{if(typeof t.openStrategy=="function")return t.openStrategy;switch(t.openStrategy){case"list":return r0;case"single":return i0;case"multiple":default:return cp}}),a=Fs(t,"selected",t.selected,f=>s.value.in(f,n.value,i.value),f=>s.value.out(f,n.value,i.value));xn(()=>{e=!0});function l(f){const d=[];let p=f;for(;p!=null;)d.unshift(p),p=i.value.get(p);return d}const c=en("nested"),u={id:Pe(),root:{opened:r,selected:a,selectedValues:K(()=>{const f=[];for(const[d,p]of a.value.entries())p==="on"&&f.push(d);return f}),register:(f,d,p)=>{d&&f!==d&&i.value.set(f,d),p&&n.value.set(f,[]),d!=null&&n.value.set(d,[...n.value.get(d)||[],f])},unregister:f=>{if(e)return;n.value.delete(f);const d=i.value.get(f);if(d){var p;const g=(p=n.value.get(d))!=null?p:[];n.value.set(d,g.filter(m=>m!==f))}i.value.delete(f),r.value.delete(f)},open:(f,d,p)=>{c.emit("click:open",{id:f,value:d,path:l(f),event:p});const g=o.value.open({id:f,value:d,opened:new Set(r.value),children:n.value,parents:i.value,event:p});g&&(r.value=g)},select:(f,d,p)=>{c.emit("click:select",{id:f,value:d,path:l(f),event:p});const g=s.value.select({id:f,value:d,selected:new Map(a.value),children:n.value,parents:i.value,event:p});g&&(a.value=g);const m=o.value.select({id:f,value:d,selected:new Map(a.value),opened:new Set(r.value),children:n.value,parents:i.value,event:p});m&&(r.value=m)},children:n,parents:i}};return Lt(Ns,u),u.root},dp=(t,e)=>{const n=rt(Ns,fp),i=K(()=>{var s;return(s=t.value)!=null?s:Vs().toString()}),r={...n,id:i,open:(s,o)=>n.root.open(i.value,s,o),isOpen:K(()=>n.root.opened.value.has(i.value)),parent:K(()=>n.root.parents.value.get(i.value)),select:(s,o)=>n.root.select(i.value,s,o),isSelected:K(()=>n.root.selected.value.get(i.value)==="on"),isIndeterminate:K(()=>n.root.selected.value.get(i.value)==="indeterminate"),isLeaf:K(()=>!n.root.children.value.get(i.value)),isGroupActivator:n.isGroupActivator};return!n.isGroupActivator&&n.root.register(i.value,n.id.value,e),xn(()=>{!n.isGroupActivator&&n.root.unregister(i.value)}),e&&Lt(Ns,r),r},u0=()=>{const t=rt(Ns,fp);Lt(Ns,{...t,isGroupActivator:!0})},f0=je({name:"VListGroupActivator",setup(t,e){let{slots:n}=e;return u0(),()=>{var i;return(i=n.default)==null?void 0:i.call(n)}}}),d0=tt({activeColor:String,color:String,collapseIcon:{type:St,default:"$collapse"},expandIcon:{type:St,default:"$expand"},prependIcon:St,appendIcon:St,fluid:Boolean,subgroup:Boolean,value:null,...bt()}),hp=Hs()({name:"VListGroup",props:{title:String,...d0()},setup(t,e){let{slots:n}=e;const{isOpen:i,open:r}=dp(Ve(t,"value"),!0),s=ap(),o=c=>{r(!i.value,c)},a=K(()=>({onClick:o,class:"v-list-group__header"})),l=K(()=>i.value?t.collapseIcon:t.expandIcon);return nt(()=>{var c;return k(t.tag,{class:["v-list-group",{"v-list-group--prepend":s==null?void 0:s.hasPrepend.value,"v-list-group--fluid":t.fluid,"v-list-group--subgroup":t.subgroup}]},{default:()=>[n.activator&&k(Vn,{defaults:{VListItem:{active:i.value,activeColor:t.activeColor,color:t.color,prependIcon:t.prependIcon||t.subgroup&&l.value,appendIcon:t.appendIcon||!t.subgroup&&l.value,title:t.title,value:t.value}}},{default:()=>[k(f0,null,{default:()=>[n.activator({props:a.value,isOpen:i})]})]}),k(X_,null,{default:()=>[kr(k("div",{class:"v-list-group__items"},[(c=n.default)==null?void 0:c.call(n)]),[[Gh,i.value]])]})]})}),{}}});function h0(t){return Yh(t,Object.keys(hp.props))}const p0=["x-small","small","default","large","x-large"],Zr=tt({size:{type:[String,Number],default:"default"}},"size");function $s(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:nr();return jh(()=>{let n,i;return Rl(p0,t.size)?n=`${e}--size-${t.size}`:t.size&&(i={width:ze(t.size),height:ze(t.size)}),{sizeClasses:n,sizeStyles:i}})}const m0=tt({color:String,start:Boolean,end:Boolean,icon:St,...Zr(),...bt({tag:"i"}),...tn()},"v-icon"),$i=je({name:"VIcon",props:m0(),setup(t,e){let{attrs:n,slots:i}=e,r;i.default&&(r=K(()=>{var u,f;const d=(u=i.default)==null?void 0:u.call(i);if(!!d)return(f=qh(d).filter(p=>p.children&&typeof p.children=="string")[0])==null?void 0:f.children}));const{themeClasses:s}=nn(t),{iconData:o}=n0(r||t),{sizeClasses:a}=$s(t),{textColorClasses:l,textColorStyles:c}=Is(Ve(t,"color"));return nt(()=>k(o.value.component,{tag:t.tag,icon:o.value.icon,class:["v-icon","notranslate",s.value,a.value,l.value,{"v-icon--clickable":!!n.onClick,"v-icon--start":t.start,"v-icon--end":t.end}],style:[a.value?void 0:{fontSize:ze(t.size),height:ze(t.size),width:ze(t.size)},c.value],"aria-hidden":"true"},null)),{}}});const Kr=tt({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function Qr(t){return{dimensionStyles:K(()=>({height:ze(t.height),maxHeight:ze(t.maxHeight),maxWidth:ze(t.maxWidth),minHeight:ze(t.minHeight),minWidth:ze(t.minWidth),width:ze(t.width)}))}}function g0(t){return{aspectStyles:K(()=>{const e=Number(t.aspectRatio);return e?{paddingBottom:String(1/e*100)+"%"}:void 0})}}const v0=je({name:"VResponsive",props:{aspectRatio:[String,Number],contentClass:String,...Kr()},setup(t,e){let{slots:n}=e;const{aspectStyles:i}=g0(t),{dimensionStyles:r}=Qr(t);return nt(()=>{var s;return k("div",{class:"v-responsive",style:r.value},[k("div",{class:"v-responsive__sizer",style:i.value},null),(s=n.additional)==null?void 0:s.call(n),n.default&&k("div",{class:["v-responsive__content",t.contentClass]},[n.default()])])}),{}}});function _0(t,e){if(!xc)return;const n=e.modifiers||{},i=e.value,{handler:r,options:s}=typeof i=="object"?i:{handler:i,options:{}},o=new IntersectionObserver(function(){var a;let l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],c=arguments.length>1?arguments[1]:void 0;const u=(a=t._observe)==null?void 0:a[e.instance.$.uid];if(!u)return;const f=l.some(d=>d.isIntersecting);r&&(!n.quiet||u.init)&&(!n.once||f||u.init)&&r(f,l,c),f&&n.once?pp(t,e):u.init=!0},s);t._observe=Object(t._observe),t._observe[e.instance.$.uid]={init:!1,observer:o},o.observe(t)}function pp(t,e){var n;const i=(n=t._observe)==null?void 0:n[e.instance.$.uid];!i||(i.observer.unobserve(t),delete t._observe[e.instance.$.uid])}const x0={mounted:_0,unmounted:pp},y0=x0,b0=tt({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:t=>t!==!0}},"transition"),oo=(t,e)=>{var n;let{slots:i}=e;const{transition:r,...s}=t;if(!r||typeof r=="boolean")return(n=i.default)==null?void 0:n.call(i);const{component:o=er,...a}=typeof r=="object"?r:{};return yn(o,vi(typeof r=="string"?{name:r}:a,s),i)},Ac=je({name:"VImg",directives:{intersect:y0},props:{aspectRatio:[String,Number],alt:String,cover:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},srcset:String,width:[String,Number],...b0()},emits:["loadstart","load","error"],setup(t,e){let{emit:n,slots:i}=e;const r=Pe(""),s=Pe(),o=Pe(t.eager?"loading":"idle"),a=Pe(),l=Pe(),c=K(()=>t.src&&typeof t.src=="object"?{src:t.src.src,srcset:t.srcset||t.src.srcset,lazySrc:t.lazySrc||t.src.lazySrc,aspect:Number(t.aspectRatio||t.src.aspect)}:{src:t.src,srcset:t.srcset,lazySrc:t.lazySrc,aspect:Number(t.aspectRatio||0)}),u=K(()=>c.value.aspect||a.value/l.value||0);pt(()=>t.src,()=>{f(o.value!=="idle")}),dc(()=>f());function f(L){if(!(t.eager&&L)&&!(xc&&!L&&!t.eager)){if(o.value="loading",c.value.lazySrc){const _=new Image;_.src=c.value.lazySrc,m(_,null)}!c.value.src||Gs(()=>{var _,E;if(n("loadstart",((_=s.value)==null?void 0:_.currentSrc)||c.value.src),(E=s.value)!=null&&E.complete){if(s.value.naturalWidth||p(),o.value==="error")return;u.value||m(s.value,null),d()}else u.value||m(s.value),g()})}}function d(){var L;g(),o.value="loaded",n("load",((L=s.value)==null?void 0:L.currentSrc)||c.value.src)}function p(){var L;o.value="error",n("error",((L=s.value)==null?void 0:L.currentSrc)||c.value.src)}function g(){const L=s.value;L&&(r.value=L.currentSrc||L.src)}function m(L){let _=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const E=()=>{const{naturalHeight:D,naturalWidth:B}=L;D||B?(a.value=B,l.value=D):!L.complete&&o.value==="loading"&&_!=null?setTimeout(E,_):(L.currentSrc.endsWith(".svg")||L.currentSrc.startsWith("data:image/svg+xml"))&&(a.value=1,l.value=1)};E()}const h=K(()=>({"v-img__img--cover":t.cover,"v-img__img--contain":!t.cover})),v=K(()=>{var L;if(!c.value.src||o.value==="idle")return;const _=yn("img",{class:["v-img__img",h.value],src:c.value.src,srcset:c.value.srcset,alt:"",sizes:t.sizes,ref:s,onLoad:d,onError:p}),E=(L=i.sources)==null?void 0:L.call(i);return k(oo,{transition:t.transition,appear:!0},{default:()=>[kr(E?k("picture",{class:"v-img__picture"},[E,_]):_,[[Gh,o.value==="loaded"]])]})}),x=K(()=>k(oo,{transition:t.transition},{default:()=>[c.value.lazySrc&&o.value!=="loaded"&&k("img",{class:["v-img__img","v-img__img--preload",h.value],src:c.value.lazySrc,alt:""},null)]})),M=K(()=>{if(!!i.placeholder)return k(oo,{transition:t.transition,appear:!0},{default:()=>[(o.value==="loading"||o.value==="error"&&!i.error)&&k("div",{class:"v-img__placeholder"},[i.placeholder()])]})}),w=K(()=>{if(!!i.error)return k(oo,{transition:t.transition,appear:!0},{default:()=>[o.value==="error"&&k("div",{class:"v-img__error"},[i.error()])]})}),b=K(()=>{if(!!t.gradient)return k("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${t.gradient})`}},null)}),T=Pe(!1);{const L=pt(u,_=>{_&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{T.value=!0})}),L())})}return nt(()=>kr(k(v0,{class:["v-img",{"v-img--booting":!T.value}],style:{width:ze(t.width==="auto"?a.value:t.width)},aspectRatio:u.value,"aria-label":t.alt,role:t.alt?"img":void 0},{additional:()=>[v.value,x.value,b.value,M.value,w.value],default:i.default}),[[aa("intersect"),{handler:f,options:t.options},null,{once:!0}]])),{currentSrc:r,image:s,state:o,naturalWidth:a,naturalHeight:l}}}),S0=[null,"default","comfortable","compact"],bi=tt({density:{type:String,default:"default",validator:t=>S0.includes(t)}},"density");function ir(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:nr();return{densityClasses:K(()=>`${e}--density-${t.density}`)}}const Pn=tt({rounded:{type:[Boolean,Number,String],default:void 0}},"rounded");function jn(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:nr();return{roundedClasses:K(()=>{const i=it(t)?t.value:t.rounded,r=[];if(i===!0||i==="")r.push(`${e}--rounded`);else if(typeof i=="string"||i===0)for(const s of String(i).split(" "))r.push(`rounded-${s}`);return r})}}const M0=tt({color:String,start:Boolean,end:Boolean,icon:St,image:String,...bi(),...Pn(),...Zr(),...bt()}),$o=je({name:"VAvatar",props:M0(),setup(t,e){let{slots:n}=e;const{backgroundColorClasses:i,backgroundColorStyles:r}=Yn(Ve(t,"color")),{densityClasses:s}=ir(t),{roundedClasses:o}=jn(t),{sizeClasses:a,sizeStyles:l}=$s(t);return nt(()=>{var c;return k(t.tag,{class:["v-avatar",{"v-avatar--start":t.start,"v-avatar--end":t.end},i.value,s.value,o.value,a.value],style:[r.value,l.value]},{default:()=>[t.image?k(Ac,{src:t.image,alt:""},null):t.icon?k($i,{icon:t.icon},null):(c=n.default)==null?void 0:c.call(n)]})}),{}}}),w0=Ws("v-list-item-subtitle"),A0=Ws("v-list-item-title");const Bl=Symbol("rippleStop"),E0=80;function zu(t,e){t.style.transform=e,t.style.webkitTransform=e}function Ra(t,e){t.style.opacity=`calc(${e} * var(--v-theme-overlay-multiplier))`}function Ol(t){return t.constructor.name==="TouchEvent"}function mp(t){return t.constructor.name==="KeyboardEvent"}const C0=function(t,e){var n;let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=0,s=0;if(!mp(t)){const d=e.getBoundingClientRect(),p=Ol(t)?t.touches[t.touches.length-1]:t;r=p.clientX-d.left,s=p.clientY-d.top}let o=0,a=.3;(n=e._ripple)!=null&&n.circle?(a=.15,o=e.clientWidth/2,o=i.center?o:o+Math.sqrt((r-o)**2+(s-o)**2)/4):o=Math.sqrt(e.clientWidth**2+e.clientHeight**2)/2;const l=`${(e.clientWidth-o*2)/2}px`,c=`${(e.clientHeight-o*2)/2}px`,u=i.center?l:`${r-o}px`,f=i.center?c:`${s-o}px`;return{radius:o,scale:a,x:u,y:f,centerX:l,centerY:c}},Yo={show(t,e){var n;let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!(e!=null&&(n=e._ripple)!=null&&n.enabled))return;const r=document.createElement("span"),s=document.createElement("span");r.appendChild(s),r.className="v-ripple__container",i.class&&(r.className+=` ${i.class}`);const{radius:o,scale:a,x:l,y:c,centerX:u,centerY:f}=C0(t,e,i),d=`${o*2}px`;s.className="v-ripple__animation",s.style.width=d,s.style.height=d,e.appendChild(r);const p=window.getComputedStyle(e);p&&p.position==="static"&&(e.style.position="relative",e.dataset.previousPosition="static"),s.classList.add("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--visible"),zu(s,`translate(${l}, ${c}) scale3d(${a},${a},${a})`),Ra(s,0),s.dataset.activated=String(performance.now()),setTimeout(()=>{s.classList.remove("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--in"),zu(s,`translate(${u}, ${f}) scale3d(1,1,1)`),Ra(s,.08)},0)},hide(t){var e;if(!(t!=null&&(e=t._ripple)!=null&&e.enabled))return;const n=t.getElementsByClassName("v-ripple__animation");if(n.length===0)return;const i=n[n.length-1];if(i.dataset.isHiding)return;i.dataset.isHiding="true";const r=performance.now()-Number(i.dataset.activated),s=Math.max(250-r,0);setTimeout(()=>{i.classList.remove("v-ripple__animation--in"),i.classList.add("v-ripple__animation--out"),Ra(i,0),setTimeout(()=>{t.getElementsByClassName("v-ripple__animation").length===1&&t.dataset.previousPosition&&(t.style.position=t.dataset.previousPosition,delete t.dataset.previousPosition),i.parentNode&&t.removeChild(i.parentNode)},300)},s)}};function gp(t){return typeof t>"u"||!!t}function Bs(t){const e={},n=t.currentTarget;if(!(!(n!=null&&n._ripple)||n._ripple.touched||t[Bl])){if(t[Bl]=!0,Ol(t))n._ripple.touched=!0,n._ripple.isTouch=!0;else if(n._ripple.isTouch)return;if(e.center=n._ripple.centered||mp(t),n._ripple.class&&(e.class=n._ripple.class),Ol(t)){if(n._ripple.showTimerCommit)return;n._ripple.showTimerCommit=()=>{Yo.show(t,n,e)},n._ripple.showTimer=window.setTimeout(()=>{var i;n!=null&&(i=n._ripple)!=null&&i.showTimerCommit&&(n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null)},E0)}else Yo.show(t,n,e)}}function Uu(t){t[Bl]=!0}function Gt(t){const e=t.currentTarget;if(!(!e||!e._ripple)){if(window.clearTimeout(e._ripple.showTimer),t.type==="touchend"&&e._ripple.showTimerCommit){e._ripple.showTimerCommit(),e._ripple.showTimerCommit=null,e._ripple.showTimer=window.setTimeout(()=>{Gt(t)});return}window.setTimeout(()=>{e._ripple&&(e._ripple.touched=!1)}),Yo.hide(e)}}function vp(t){const e=t.currentTarget;!e||!e._ripple||(e._ripple.showTimerCommit&&(e._ripple.showTimerCommit=null),window.clearTimeout(e._ripple.showTimer))}let Os=!1;function _p(t){!Os&&(t.keyCode===Cu.enter||t.keyCode===Cu.space)&&(Os=!0,Bs(t))}function xp(t){Os=!1,Gt(t)}function yp(t){Os&&(Os=!1,Gt(t))}function bp(t,e,n){var i;const{value:r,modifiers:s}=e,o=gp(r);if(o||Yo.hide(t),t._ripple=(i=t._ripple)!=null?i:{},t._ripple.enabled=o,t._ripple.centered=s.center,t._ripple.circle=s.circle,Dl(r)&&r.class&&(t._ripple.class=r.class),o&&!n){if(s.stop){t.addEventListener("touchstart",Uu,{passive:!0}),t.addEventListener("mousedown",Uu);return}t.addEventListener("touchstart",Bs,{passive:!0}),t.addEventListener("touchend",Gt,{passive:!0}),t.addEventListener("touchmove",vp,{passive:!0}),t.addEventListener("touchcancel",Gt),t.addEventListener("mousedown",Bs),t.addEventListener("mouseup",Gt),t.addEventListener("mouseleave",Gt),t.addEventListener("keydown",_p),t.addEventListener("keyup",xp),t.addEventListener("blur",yp),t.addEventListener("dragstart",Gt,{passive:!0})}else!o&&n&&Sp(t)}function Sp(t){t.removeEventListener("mousedown",Bs),t.removeEventListener("touchstart",Bs),t.removeEventListener("touchend",Gt),t.removeEventListener("touchmove",vp),t.removeEventListener("touchcancel",Gt),t.removeEventListener("mouseup",Gt),t.removeEventListener("mouseleave",Gt),t.removeEventListener("keydown",_p),t.removeEventListener("keyup",xp),t.removeEventListener("dragstart",Gt),t.removeEventListener("blur",yp)}function T0(t,e){bp(t,e,!1)}function L0(t){delete t._ripple,Sp(t)}function P0(t,e){if(e.value===e.oldValue)return;const n=gp(e.oldValue);bp(t,e,n)}const Ec={mounted:T0,unmounted:L0,updated:P0},D0=["elevated","flat","tonal","outlined","text","plain"];function Cc(t,e){return k(Et,null,[t&&k("span",{key:"overlay",class:`${e}__overlay`},null),k("span",{key:"underlay",class:`${e}__underlay`},null)])}const Ys=tt({color:String,variant:{type:String,default:"elevated",validator:t=>D0.includes(t)}},"variant");function Tc(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:nr();const n=K(()=>{const{variant:s}=dn(t);return`${e}--variant-${s}`}),{colorClasses:i,colorStyles:r}=Mc(K(()=>{const{variant:s,color:o}=dn(t);return{[["elevated","flat"].includes(s)?"background":"text"]:o}}));return{colorClasses:i,colorStyles:r,variantClasses:n}}const Jr=tt({border:[Boolean,Number,String]},"border");function es(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:nr();return{borderClasses:K(()=>{const i=it(t)?t.value:t.border,r=[];if(i===!0||i==="")r.push(`${e}--border`);else if(typeof i=="string"||i===0)for(const s of String(i).split(" "))r.push(`border-${s}`);return r})}}const Si=tt({elevation:{type:[Number,String],validator(t){const e=parseInt(t);return!isNaN(e)&&e>=0&&e<=24}}},"elevation");function rr(t){return{elevationClasses:K(()=>{const n=it(t)?t.value:t.elevation,i=[];return n==null||i.push(`elevation-${n}`),i})}}function R0(){var t,e;return(t=en("useRouter"))==null||(e=t.proxy)==null?void 0:e.$router}function Lc(t,e){const n=Wg("RouterLink"),i=K(()=>!!(t.href||t.to)),r=K(()=>(i==null?void 0:i.value)||!!(e.onClick||e.onClickOnce));if(typeof n=="string")return{isLink:i,isClickable:r,href:Ve(t,"href")};const s=t.to?n.useLink(t):void 0;return{...s,isLink:i,isClickable:r,href:K(()=>t.to?s==null?void 0:s.route.value.href:t.href)}}const Pc=tt({href:String,replace:Boolean,to:[String,Object]},"router"),Oi=Hs()({name:"VListItem",directives:{Ripple:Ec},props:{active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:St,disabled:Boolean,lines:String,link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:St,subtitle:[String,Number,Boolean],title:[String,Number,Boolean],value:null,...Jr(),...bi(),...Kr(),...Si(),...Pn(),...Pc(),...bt(),...tn(),...Ys({variant:"text"})},setup(t,e){let{attrs:n,slots:i}=e;const r=Lc(t,n),s=K(()=>{var Z;return(Z=t.value)!=null?Z:r.href.value}),{select:o,isSelected:a,isIndeterminate:l,isGroupActivator:c,root:u,parent:f}=dp(s,!1),d=ap(),p=K(()=>{var Z;return t.active!==!1&&(t.active||((Z=r.isExactActive)==null?void 0:Z.value)||a.value)}),g=K(()=>t.link!==!1&&r.isLink.value),m=K(()=>!t.disabled&&t.link!==!1&&(t.link||r.isClickable.value||t.value!=null&&!!d)),h=K(()=>t.rounded||t.nav),v=K(()=>{var Z;return{color:p.value&&(Z=t.activeColor)!=null?Z:t.color,variant:t.variant}});pt(()=>{var Z;return(Z=r.isExactActive)==null?void 0:Z.value},Z=>{Z&&f.value!=null&&u.open(f.value,!0)},{immediate:!0});const{themeClasses:x}=nn(t),{borderClasses:M}=es(t),{colorClasses:w,colorStyles:b,variantClasses:T}=Tc(v),{densityClasses:L}=ir(t),{dimensionStyles:_}=Qr(t),{elevationClasses:E}=rr(t),{roundedClasses:D}=jn(h),B=K(()=>t.lines?`v-list-item--${t.lines}-line`:void 0),V=K(()=>({isActive:p.value,select:o,isSelected:a.value,isIndeterminate:l.value}));return nt(()=>{var Z,N,ne,z,X,Y,G;const J=g.value?"a":t.tag,ue=!d||a.value||p.value,le=i.title||t.title,ae=i.subtitle||t.subtitle,Me=!!(i.append||t.appendAvatar||t.appendIcon),O=!!(i.prepend||t.prependAvatar||t.prependIcon);return d==null||d.updateHasPrepend(O),kr(k(J,{class:["v-list-item",{"v-list-item--active":p.value,"v-list-item--disabled":t.disabled,"v-list-item--link":m.value,"v-list-item--nav":t.nav,"v-list-item--prepend":!O&&(d==null?void 0:d.hasPrepend.value),[`${t.activeClass}`]:p.value},x.value,M.value,ue?w.value:void 0,L.value,E.value,B.value,D.value,T.value],style:[ue?b.value:void 0,_.value],href:r.href.value,tabindex:m.value?0:void 0,onClick:m.value&&(F=>{var se;c||((se=r.navigate)==null||se.call(r,F),t.value!=null&&o(!a.value,F))})},{default:()=>[Cc(m.value||p.value,"v-list-item"),O&&k(Vn,{key:"prepend",defaults:{VAvatar:{density:t.density,image:t.prependAvatar},VIcon:{density:t.density,icon:t.prependIcon},VListItemAction:{start:!0}}},{default:()=>[k("div",{class:"v-list-item__prepend"},[t.prependAvatar&&k($o,{key:"prepend-avatar"},null),t.prependIcon&&k($i,{key:"prepend-icon"},null),(Z=i.prepend)==null?void 0:Z.call(i,V.value)])]}),k("div",{class:"v-list-item__content"},[le&&k(A0,{key:"title"},{default:()=>[(N=(ne=i.title)==null?void 0:ne.call(i,{title:t.title}))!=null?N:t.title]}),ae&&k(w0,{key:"subtitle"},{default:()=>[(z=(X=i.subtitle)==null?void 0:X.call(i,{subtitle:t.subtitle}))!=null?z:t.subtitle]}),(Y=i.default)==null?void 0:Y.call(i,V.value)]),Me&&k(Vn,{key:"append",defaults:{VAvatar:{density:t.density,image:t.appendAvatar},VIcon:{density:t.density,icon:t.appendIcon},VListItemAction:{end:!0}}},{default:()=>[k("div",{class:"v-list-item__append"},[(G=i.append)==null?void 0:G.call(i,V.value),t.appendIcon&&k($i,{key:"append-icon"},null),t.appendAvatar&&k($o,{key:"append-avatar"},null)])]})]}),[[aa("ripple"),m.value]])}),{}}}),I0=je({name:"VListSubheader",props:{color:String,inset:Boolean,sticky:Boolean,title:String,...bt()},setup(t,e){let{slots:n}=e;const{textColorClasses:i,textColorStyles:r}=Is(Ve(t,"color"));return nt(()=>{var s,o;const a=!!(n.default||t.title);return k(t.tag,{class:["v-list-subheader",{"v-list-subheader--inset":t.inset,"v-list-subheader--sticky":t.sticky},i.value],style:{textColorStyles:r}},{default:()=>[a&&k("div",{class:"v-list-subheader__text"},[(s=(o=n.default)==null?void 0:o.call(n))!=null?s:t.title])]})}),{}}}),Mp=Hs()({name:"VListChildren",props:{items:Array},setup(t,e){let{slots:n}=e;return op(),()=>{var i,r,s;return(i=(r=n.default)==null?void 0:r.call(n))!=null?i:(s=t.items)==null?void 0:s.map(o=>{let{children:a,props:l,type:c,raw:u}=o;if(c==="divider"){var f,d;return(f=(d=n.divider)==null?void 0:d.call(n,{props:l}))!=null?f:k(ip,l,null)}if(c==="subheader"){var p,g;return(p=(g=n.subheader)==null?void 0:g.call(n,{props:l}))!=null?p:k(I0,l,{default:n.subheader})}const m={subtitle:n.subtitle?x=>{var M;return(M=n.subtitle)==null?void 0:M.call(n,{...x,item:u})}:void 0,prepend:n.prepend?x=>{var M;return(M=n.prepend)==null?void 0:M.call(n,{...x,item:u})}:void 0,append:n.append?x=>{var M;return(M=n.append)==null?void 0:M.call(n,{...x,item:u})}:void 0,default:n.default?x=>{var M;return(M=n.default)==null?void 0:M.call(n,{...x,item:u})}:void 0,title:n.title?x=>{var M;return(M=n.title)==null?void 0:M.call(n,{...x,item:u})}:void 0},[h,v]=h0(l);return a?k(hp,vi({value:l==null?void 0:l.value},h),{activator:x=>{let{props:M}=x;return n.header?n.header({...l,...M}):k(Oi,vi(l,M),m)},default:()=>k(Mp,{items:a},n)}):n.item?n.item(l):k(Oi,l,m)})}}}),F0=tt({items:{type:Array,default:()=>[]},itemTitle:{type:[String,Array,Function],default:"title"},itemValue:{type:[String,Array,Function],default:"value"},itemChildren:{type:[Boolean,String,Array,Function],default:"children"},itemProps:{type:[Boolean,String,Array,Function],default:"props"},returnObject:Boolean},"item");function N0(t,e){const n=as(e,t.itemType,"item"),i=typeof e=="string"?e:as(e,t.itemTitle),r=as(e,t.itemValue,void 0),s=as(e,t.itemChildren),o=t.itemProps===!0?Yh(e,["children"])[1]:as(e,t.itemProps),a={title:i,value:r,...o};return{type:n,title:a.title,value:a.value,props:a,children:n==="item"&&s?wp(t,s):void 0,raw:e}}function wp(t,e){const n=[];for(const i of e)n.push(N0(t,i));return n}function B0(t){return{items:K(()=>wp(t,t.items))}}const Gu=Hs()({name:"VList",props:{activeColor:String,activeClass:String,bgColor:String,disabled:Boolean,lines:{type:[Boolean,String],default:"one"},nav:Boolean,...l0({selectStrategy:"single-leaf",openStrategy:"list"}),...Jr(),...bi(),...Kr(),...Si(),itemType:{type:String,default:"type"},...F0(),...Pn(),...bt(),...tn(),...Ys({variant:"text"})},emits:{"update:selected":t=>!0,"update:opened":t=>!0,"click:open":t=>!0,"click:select":t=>!0},setup(t,e){let{slots:n}=e;const{items:i}=B0(t),{themeClasses:r}=nn(t),{backgroundColorClasses:s,backgroundColorStyles:o}=Yn(Ve(t,"bgColor")),{borderClasses:a}=es(t),{densityClasses:l}=ir(t),{dimensionStyles:c}=Qr(t),{elevationClasses:u}=rr(t),{roundedClasses:f}=jn(t),{open:d,select:p}=c0(t),g=K(()=>t.lines?`v-list--${t.lines}-line`:void 0),m=Ve(t,"activeColor"),h=Ve(t,"color");return op(),yi({VListGroup:{activeColor:m,color:h},VListItem:{activeClass:Ve(t,"activeClass"),activeColor:m,color:h,density:Ve(t,"density"),disabled:Ve(t,"disabled"),lines:Ve(t,"lines"),nav:Ve(t,"nav"),variant:Ve(t,"variant")}}),nt(()=>k(t.tag,{class:["v-list",{"v-list--disabled":t.disabled,"v-list--nav":t.nav},r.value,s.value,a.value,l.value,u.value,g.value,f.value],style:[o.value,c.value]},{default:()=>[k(Mp,{items:i.value},n)]})),{open:d,select:p}}});function Ap(){const t=Pe(!1);return Ji(()=>{window.requestAnimationFrame(()=>{t.value=!0})}),{ssrBootStyles:K(()=>t.value?void 0:{transition:"none !important"}),isBooted:ea(t)}}const O0=je({name:"VMain",props:{scrollable:Boolean,...bt({tag:"main"})},setup(t,e){let{slots:n}=e;const{mainStyles:i}=P_(),{ssrBootStyles:r}=Ap();return nt(()=>{var s,o;return k(t.tag,{class:["v-main",{"v-main--scrollable":t.scrollable}],style:[i.value,r.value]},{default:()=>[t.scrollable?k("div",{class:"v-main__scroller"},[(s=n.default)==null?void 0:s.call(n)]):(o=n.default)==null?void 0:o.call(n)]})}),{}}});const kl=Symbol.for("vuetify:display"),Vu={mobileBreakpoint:"lg",thresholds:{xs:0,sm:600,md:960,lg:1280,xl:1920,xxl:2560}},k0=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Vu;return $n(Vu,t)};function Hu(t){return mn&&!t?window.innerWidth:0}function Wu(t){return mn&&!t?window.innerHeight:0}function z0(){const t=mn?window.navigator.userAgent:"ssr";function e(g){return Boolean(t.match(g))}const n=e(/android/i),i=e(/iphone|ipad|ipod/i),r=e(/cordova/i),s=e(/electron/i),o=e(/chrome/i),a=e(/edge/i),l=e(/firefox/i),c=e(/opera/i),u=e(/win/i),f=e(/mac/i),d=e(/linux/i),p=e(/ssr/i);return{android:n,ios:i,cordova:r,electron:s,chrome:o,edge:a,firefox:l,opera:c,win:u,mac:f,linux:d,touch:e_,ssr:p}}function U0(t,e){const{thresholds:n,mobileBreakpoint:i}=k0(t),r=Pe(Wu(e)),s=z0(),o=Ft({}),a=Pe(Hu(e));function l(){r.value=Wu(),a.value=Hu()}return e&&Gs(()=>l()),ra(()=>{const c=a.value<n.sm,u=a.value<n.md&&!c,f=a.value<n.lg&&!(u||c),d=a.value<n.xl&&!(f||u||c),p=a.value<n.xxl&&!(d||f||u||c),g=a.value>=n.xxl,m=c?"xs":u?"sm":f?"md":d?"lg":p?"xl":"xxl",h=typeof i=="number"?i:n[i],v=s.ssr?s.android||s.ios||s.opera:a.value<h;o.xs=c,o.sm=u,o.md=f,o.lg=d,o.xl=p,o.xxl=g,o.smAndUp=!c,o.mdAndUp=!(c||u),o.lgAndUp=!(c||u||f),o.xlAndUp=!(c||u||f||d),o.smAndDown=!(f||d||p||g),o.mdAndDown=!(d||p||g),o.lgAndDown=!(p||g),o.xlAndDown=!g,o.name=m,o.height=r.value,o.width=a.value,o.mobile=v,o.mobileBreakpoint=i,o.platform=s,o.thresholds=n}),mn&&window.addEventListener("resize",l,{passive:!0}),eh(o)}function G0(){const t=rt(kl);if(!t)throw new Error("Could not find Vuetify display injection");return t}const $u=Symbol.for("vuetify:locale-adapter"),ao=Symbol.for("vuetify:locale");function V0(t){return!!t&&t.hasOwnProperty("getScope")&&t.hasOwnProperty("createScope")&&t.hasOwnProperty("createRoot")}function H0(t,e){const n=V0(e)?e:Y0(e),i=n.createRoot(t);return t==null||t.provide(Sc,Y_(i,e)),n}const Yu="$vuetify.",qu=(t,e)=>t.replace(/\{(\d+)\}/g,(n,i)=>String(e[+i])),W0=(t,e,n)=>function(i){for(var r=arguments.length,s=new Array(r>1?r-1:0),o=1;o<r;o++)s[o-1]=arguments[o];if(!i.startsWith(Yu))return qu(i,s);const a=i.replace(Yu,""),l=t.value&&n.value[t.value],c=e.value&&n.value[e.value];let u=Pl(l,a,null);return u||(Nr(`Translation key "${i}" not found in "${t.value}", trying fallback locale`),u=Pl(c,a,null)),u||(Tu(`Translation key "${i}" not found in fallback`),u=i),typeof u!="string"&&(Tu(`Translation key "${i}" has a non-string value`),u=i),qu(u,s)};function $0(t,e){return(n,i)=>new Intl.NumberFormat([t.value,e.value],i).format(n)}function Y0(t){const e=n=>{const i=Pe(n.current),r=Pe(n.fallback),s=Pe(n.messages);return{current:i,fallback:r,messages:s,t:W0(i,r,s),n:$0(i,r)}};return{createRoot:n=>{var i,r,s;const o=e({current:(i=t==null?void 0:t.defaultLocale)!=null?i:"en",fallback:(r=t==null?void 0:t.fallbackLocale)!=null?r:"en",messages:(s=t==null?void 0:t.messages)!=null?s:{en:W_}});if(!n)throw new Error("[Vuetify] Could not find default app instance");return n.provide(ao,o),o},getScope:()=>{const n=rt(ao);if(!n)throw new Error("[Vuetify] Could not find injected locale instance");return n},createScope:n=>{const i=rt(ao);if(!i)throw new Error("[Vuetify] Could not find injected locale instance");const r=e({current:K(()=>{var s;return(s=n==null?void 0:n.locale)!=null?s:i.current.value}),fallback:K(()=>{var s;return(s=n==null?void 0:n.locale)!=null?s:i.fallback.value}),messages:K(()=>{var s;return(s=n==null?void 0:n.messages)!=null?s:i.messages.value})});return Lt(ao,r),r}}}function q0(t){let{rootEl:e,isSticky:n,layoutItemStyles:i}=t;const r=Pe(!1),s=Pe(0),o=K(()=>{const c=typeof r.value=="boolean"?"top":r.value;return[n.value?{top:"auto",bottom:"auto",height:void 0}:void 0,r.value?{[c]:ze(s.value)}:{top:i.value.top}]});Ji(()=>{pt(n,c=>{c?window.addEventListener("scroll",l,{passive:!0}):window.removeEventListener("scroll",l)},{immediate:!0})}),xn(()=>{document.removeEventListener("scroll",l)});let a=0;function l(){var c;const u=a>window.scrollY?"up":"down",f=e.value.getBoundingClientRect(),d=parseFloat((c=i.value.top)!=null?c:0),p=window.scrollY-Math.max(0,s.value-d),g=f.height+Math.max(s.value,d)-window.scrollY-window.innerHeight;f.height<window.innerHeight-d?(r.value="top",s.value=d):u==="up"&&r.value==="bottom"||u==="down"&&r.value==="top"?(s.value=window.scrollY+f.top,r.value=!0):u==="down"&&g<=0?(s.value=0,r.value="bottom"):u==="up"&&p<=0&&(s.value=f.top+p,r.value="top"),a=window.scrollY}return{isStuck:r,stickyStyles:o}}const j0=100,X0=20;function ju(t){const e=1.41421356237;return(t<0?-1:1)*Math.sqrt(Math.abs(t))*e}function Xu(t){if(t.length<2)return 0;if(t.length===2)return t[1].t===t[0].t?0:(t[1].d-t[0].d)/(t[1].t-t[0].t);let e=0;for(let n=t.length-1;n>0;n--){if(t[n].t===t[n-1].t)continue;const i=ju(e),r=(t[n].d-t[n-1].d)/(t[n].t-t[n-1].t);e+=(r-i)*Math.abs(r),n===t.length-1&&(e*=.5)}return ju(e)*1e3}function Z0(){const t={};function e(r){Array.from(r.changedTouches).forEach(s=>{var o;((o=t[s.identifier])!=null?o:t[s.identifier]=new l_(X0)).push([r.timeStamp,s])})}function n(r){Array.from(r.changedTouches).forEach(s=>{delete t[s.identifier]})}function i(r){var s;const o=(s=t[r])==null?void 0:s.values().reverse();if(!o)throw new Error(`No samples for touch id ${r}`);const a=o[0],l=[],c=[];for(const u of o){if(a[0]-u[0]>j0)break;l.push({t:u[0],d:u[1].clientX}),c.push({t:u[0],d:u[1].clientY})}return{x:Xu(l),y:Xu(c),get direction(){const{x:u,y:f}=this,[d,p]=[Math.abs(u),Math.abs(f)];return d>p&&u>=0?"right":d>p&&u<=0?"left":p>d&&f>=0?"down":p>d&&f<=0?"up":K0()}}}return{addMovement:e,endTouch:n,getVelocity:i}}function K0(){throw new Error}function Q0(t){let{isActive:e,isTemporary:n,width:i,touchless:r,position:s}=t;Ji(()=>{window.addEventListener("touchstart",v,{passive:!0}),window.addEventListener("touchmove",x,{passive:!1}),window.addEventListener("touchend",M,{passive:!0})}),xn(()=>{window.removeEventListener("touchstart",v),window.removeEventListener("touchmove",x),window.removeEventListener("touchend",M)});const o=K(()=>s.value!=="bottom"),{addMovement:a,endTouch:l,getVelocity:c}=Z0();let u=!1;const f=Pe(!1),d=Pe(0),p=Pe(0);let g;function m(b,T){return(s.value==="left"?b:s.value==="right"?document.documentElement.clientWidth-b:s.value==="bottom"?document.documentElement.clientHeight-b:fr())-(T?i.value:0)}function h(b){let T=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const L=s.value==="left"?(b-p.value)/i.value:s.value==="right"?(document.documentElement.clientWidth-b-p.value)/i.value:s.value==="bottom"?(document.documentElement.clientHeight-b-p.value)/i.value:fr();return T?Math.max(0,Math.min(1,L)):L}function v(b){if(r.value)return;const T=b.changedTouches[0].clientX,L=b.changedTouches[0].clientY,_=25,E=s.value==="left"?T<_:s.value==="right"?T>document.documentElement.clientWidth-_:s.value==="bottom"?L>document.documentElement.clientHeight-_:fr(),D=e.value&&(s.value==="left"?T<i.value:s.value==="right"?T>document.documentElement.clientWidth-i.value:s.value==="bottom"?L>document.documentElement.clientHeight-i.value:fr());(E||D||e.value&&n.value)&&(u=!0,g=[T,L],p.value=m(o.value?T:L,e.value),d.value=h(o.value?T:L),l(b),a(b))}function x(b){const T=b.changedTouches[0].clientX,L=b.changedTouches[0].clientY;if(u){if(!b.cancelable){u=!1;return}const E=Math.abs(T-g[0]),D=Math.abs(L-g[1]);(o.value?E>D&&E>3:D>E&&D>3)?(f.value=!0,u=!1):(o.value?D:E)>3&&(u=!1)}if(!f.value)return;b.preventDefault(),a(b);const _=h(o.value?T:L,!1);d.value=Math.max(0,Math.min(1,_)),_>1?p.value=m(o.value?T:L,!0):_<0&&(p.value=m(o.value?T:L,!1))}function M(b){if(u=!1,!f.value)return;a(b),f.value=!1;const T=c(b.changedTouches[0].identifier),L=Math.abs(T.x),_=Math.abs(T.y);(o.value?L>_&&L>400:_>L&&_>3)?e.value=T.direction===({left:"right",right:"left",bottom:"up"}[s.value]||fr()):e.value=d.value>.5}const w=K(()=>f.value?{transform:s.value==="left"?`translateX(calc(-100% + ${d.value*i.value}px))`:s.value==="right"?`translateX(calc(100% - ${d.value*i.value}px))`:s.value==="bottom"?`translateY(calc(100% - ${d.value*i.value}px))`:fr(),transition:"none"}:void 0);return{isDragging:f,dragProgress:d,dragStyles:w}}function fr(){throw new Error}const J0=["start","end","left","right","bottom"],ex=je({name:"VNavigationDrawer",props:{color:String,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,modelValue:{type:Boolean,default:null},permanent:Boolean,rail:Boolean,railWidth:{type:[Number,String],default:56},scrim:{type:[String,Boolean],default:!0},image:String,temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},location:{type:String,default:"start",validator:t=>J0.includes(t)},sticky:Boolean,...Jr(),...Si(),...L_(),...Pn(),...bt({tag:"nav"}),...tn()},emits:{"update:modelValue":t=>!0},setup(t,e){let{attrs:n,slots:i}=e;const{isRtl:r}=ha(),{themeClasses:s}=nn(t),{borderClasses:o}=es(t),{backgroundColorClasses:a,backgroundColorStyles:l}=Yn(Ve(t,"color")),{elevationClasses:c}=rr(t),{mobile:u}=G0(),{roundedClasses:f}=jn(t),d=R0(),p=Fs(t,"modelValue",null,z=>!!z),{ssrBootStyles:g}=Ap(),m=Pe(),h=Pe(!1),v=K(()=>t.rail&&t.expandOnHover&&h.value?Number(t.width):Number(t.rail?t.railWidth:t.width)),x=K(()=>Il(t.location,r.value)),M=K(()=>!t.permanent&&(u.value||t.temporary)),w=K(()=>t.sticky&&!M.value&&x.value!=="bottom");t.disableResizeWatcher||pt(M,z=>!t.permanent&&(p.value=!z)),!t.disableRouteWatcher&&d&&pt(d.currentRoute,()=>M.value&&(p.value=!1)),pt(()=>t.permanent,z=>{z&&(p.value=!0)}),dc(()=>{t.modelValue!=null||M.value||(p.value=t.permanent||!u.value)});const{isDragging:b,dragProgress:T,dragStyles:L}=Q0({isActive:p,isTemporary:M,width:v,touchless:Ve(t,"touchless"),position:x}),_=K(()=>{const z=M.value?0:t.rail&&t.expandOnHover?Number(t.railWidth):v.value;return b.value?z*T.value:z}),{layoutItemStyles:E,layoutRect:D,layoutItemScrimStyles:B}=D_({id:t.name,order:K(()=>parseInt(t.order,10)),position:x,layoutSize:_,elementSize:v,active:K(()=>p.value||b.value),disableTransitions:K(()=>b.value),absolute:K(()=>t.absolute||w.value&&typeof V.value!="string")}),{isStuck:V,stickyStyles:Z}=q0({rootEl:m,isSticky:w,layoutItemStyles:E}),N=Yn(K(()=>typeof t.scrim=="string"?t.scrim:null)),ne=K(()=>({...b.value?{opacity:T.value*.2,transition:"none"}:void 0,...D.value?{left:ze(D.value.left),right:ze(D.value.right),top:ze(D.value.top),bottom:ze(D.value.bottom)}:void 0,...B.value}));return yi({VList:{bgColor:"transparent"}}),nt(()=>{var z,X,Y,G;const J=i.image||t.image;return k(Et,null,[k(t.tag,vi({ref:m,onMouseenter:()=>h.value=!0,onMouseleave:()=>h.value=!1,class:["v-navigation-drawer",`v-navigation-drawer--${x.value}`,{"v-navigation-drawer--expand-on-hover":t.expandOnHover,"v-navigation-drawer--floating":t.floating,"v-navigation-drawer--is-hovering":h.value,"v-navigation-drawer--rail":t.rail,"v-navigation-drawer--temporary":M.value,"v-navigation-drawer--active":p.value,"v-navigation-drawer--sticky":w.value},s.value,a.value,o.value,c.value,f.value],style:[l.value,E.value,L.value,g.value,Z.value]},n),{default:()=>[J&&k("div",{key:"image",class:"v-navigation-drawer__img"},[i.image?(z=i.image)==null?void 0:z.call(i,{image:t.image}):k("img",{src:t.image,alt:""},null)]),i.prepend&&k("div",{class:"v-navigation-drawer__prepend"},[(X=i.prepend)==null?void 0:X.call(i)]),k("div",{class:"v-navigation-drawer__content"},[(Y=i.default)==null?void 0:Y.call(i)]),i.append&&k("div",{class:"v-navigation-drawer__append"},[(G=i.append)==null?void 0:G.call(i)])]}),k(er,{name:"fade-transition"},{default:()=>[M.value&&(b.value||p.value)&&!!t.scrim&&k("div",{class:["v-navigation-drawer__scrim",N.backgroundColorClasses.value],style:[ne.value,N.backgroundColorStyles.value],onClick:()=>p.value=!1},null)]})])}),{isStuck:V}}}),tx={name:"App",data:()=>({logo:Jv}),methods:{routeHome:function(){this.$router.push("/")},routeProjects:function(){this.$router.push("/projects")},routeAboutMe:function(){this.$router.push("/about")},routeLearn:function(){this.$router.push("/learn")}}};function nx(t,e,n,i,r,s){const o=pc("router-view");return Nt(),Cn(j_,null,{default:lt(()=>[k(ex,{"expand-on-hover":"",rail:""},{default:lt(()=>[k(Gu,null,{default:lt(()=>[k(Oi,{"prepend-avatar":t.logo,title:"Sean Holcomb"},null,8,["prepend-avatar"])]),_:1}),k(ip),k(Gu,{density:"compact",nav:""},{default:lt(()=>[k(Oi,{"prepend-icon":"mdi-home",title:"Home",value:"home",class:"nav-drawer-item",onClick:s.routeHome},null,8,["onClick"]),k(Oi,{"prepend-icon":"mdi-flask-empty-outline",title:"Projects",value:"projects",class:"nav-drawer-item",onClick:s.routeProjects},null,8,["onClick"]),k(Oi,{"prepend-icon":"mdi-account-multiple",title:"About me",value:"aboutme",class:"nav-drawer-item",onClick:s.routeAboutMe},null,8,["onClick"]),k(Oi,{"prepend-icon":"mdi-book-open",title:"Learn",value:"learn",class:"nav-drawer-item",onClick:s.routeLearn},null,8,["onClick"])]),_:1})]),_:1}),k(O0,null,{default:lt(()=>[k(o)]),_:1})]),_:1})}const ix=tr(tx,[["render",nx],["__scopeId","data-v-c8366699"]]);/*!
  * vue-router v4.1.2
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Lr=typeof window<"u";function rx(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Ke=Object.assign;function Ia(t,e){const n={};for(const i in e){const r=e[i];n[i]=gn(r)?r.map(t):t(r)}return n}const Ss=()=>{},gn=Array.isArray,sx=/\/$/,ox=t=>t.replace(sx,"");function Fa(t,e,n="/"){let i,r={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),s=e.slice(l+1,a>-1?a:e.length),r=t(s)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=ux(i!=null?i:e,n),{fullPath:i+(s&&"?")+s+o,path:i,query:r,hash:o}}function ax(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Zu(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function lx(t,e,n){const i=e.matched.length-1,r=n.matched.length-1;return i>-1&&i===r&&Ur(e.matched[i],n.matched[r])&&Ep(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Ur(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Ep(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!cx(t[n],e[n]))return!1;return!0}function cx(t,e){return gn(t)?Ku(t,e):gn(e)?Ku(e,t):t===e}function Ku(t,e){return gn(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function ux(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/");let r=n.length-1,s,o;for(s=0;s<i.length;s++)if(o=i[s],o!==".")if(o==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+i.slice(s-(s===i.length?1:0)).join("/")}var ks;(function(t){t.pop="pop",t.push="push"})(ks||(ks={}));var Ms;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ms||(Ms={}));function fx(t){if(!t)if(Lr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),ox(t)}const dx=/^[^#]+#/;function hx(t,e){return t.replace(dx,"#")+e}function px(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const ma=()=>({left:window.pageXOffset,top:window.pageYOffset});function mx(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=px(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Qu(t,e){return(history.state?history.state.position-e:-1)+t}const zl=new Map;function gx(t,e){zl.set(t,e)}function vx(t){const e=zl.get(t);return zl.delete(t),e}let _x=()=>location.protocol+"//"+location.host;function Cp(t,e){const{pathname:n,search:i,hash:r}=e,s=t.indexOf("#");if(s>-1){let a=r.includes(t.slice(s))?t.slice(s).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),Zu(l,"")}return Zu(n,t)+i+r}function xx(t,e,n,i){let r=[],s=[],o=null;const a=({state:d})=>{const p=Cp(t,location),g=n.value,m=e.value;let h=0;if(d){if(n.value=p,e.value=d,o&&o===g){o=null;return}h=m?d.position-m.position:0}else i(p);r.forEach(v=>{v(n.value,g,{delta:h,type:ks.pop,direction:h?h>0?Ms.forward:Ms.back:Ms.unknown})})};function l(){o=n.value}function c(d){r.push(d);const p=()=>{const g=r.indexOf(d);g>-1&&r.splice(g,1)};return s.push(p),p}function u(){const{history:d}=window;!d.state||d.replaceState(Ke({},d.state,{scroll:ma()}),"")}function f(){for(const d of s)d();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:f}}function Ju(t,e,n,i=!1,r=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:r?ma():null}}function yx(t){const{history:e,location:n}=window,i={value:Cp(t,n)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=t.indexOf("#"),d=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+l:_x()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),r.value=c}catch(p){console.error(p),n[u?"replace":"assign"](d)}}function o(l,c){const u=Ke({},e.state,Ju(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),i.value=l}function a(l,c){const u=Ke({},r.value,e.state,{forward:l,scroll:ma()});s(u.current,u,!0);const f=Ke({},Ju(i.value,l,null),{position:u.position+1},c);s(l,f,!1),i.value=l}return{location:i,state:r,push:a,replace:o}}function bx(t){t=fx(t);const e=yx(t),n=xx(t,e.state,e.location,e.replace);function i(s,o=!0){o||n.pauseListeners(),history.go(s)}const r=Ke({location:"",base:t,go:i,createHref:hx.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function Sx(t){return typeof t=="string"||t&&typeof t=="object"}function Tp(t){return typeof t=="string"||typeof t=="symbol"}const Jn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Lp=Symbol("");var ef;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(ef||(ef={}));function Gr(t,e){return Ke(new Error,{type:t,[Lp]:!0},e)}function ei(t,e){return t instanceof Error&&Lp in t&&(e==null||!!(t.type&e))}const tf="[^/]+?",Mx={sensitive:!1,strict:!1,start:!0,end:!0},wx=/[.+*?^${}()[\]/\\]/g;function Ax(t,e){const n=Ke({},Mx,e),i=[];let r=n.start?"^":"";const s=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(r+="/");for(let f=0;f<c.length;f++){const d=c[f];let p=40+(n.sensitive?.25:0);if(d.type===0)f||(r+="/"),r+=d.value.replace(wx,"\\$&"),p+=40;else if(d.type===1){const{value:g,repeatable:m,optional:h,regexp:v}=d;s.push({name:g,repeatable:m,optional:h});const x=v||tf;if(x!==tf){p+=10;try{new RegExp(`(${x})`)}catch(w){throw new Error(`Invalid custom RegExp for param "${g}" (${x}): `+w.message)}}let M=m?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;f||(M=h&&c.length<2?`(?:/${M})`:"/"+M),h&&(M+="?"),r+=M,p+=20,h&&(p+=-8),m&&(p+=-20),x===".*"&&(p+=-50)}u.push(p)}i.push(u)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let d=1;d<u.length;d++){const p=u[d]||"",g=s[d-1];f[g.name]=p&&g.repeatable?p.split("/"):p}return f}function l(c){let u="",f=!1;for(const d of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const p of d)if(p.type===0)u+=p.value;else if(p.type===1){const{value:g,repeatable:m,optional:h}=p,v=g in c?c[g]:"";if(gn(v)&&!m)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const x=gn(v)?v.join("/"):v;if(!x)if(h)d.length<2&&t.length>1&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${g}"`);u+=x}}return u}return{re:o,score:i,keys:s,parse:a,stringify:l}}function Ex(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Cx(t,e){let n=0;const i=t.score,r=e.score;for(;n<i.length&&n<r.length;){const s=Ex(i[n],r[n]);if(s)return s;n++}if(Math.abs(r.length-i.length)===1){if(nf(i))return 1;if(nf(r))return-1}return r.length-i.length}function nf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Tx={type:0,value:""},Lx=/[a-zA-Z0-9_]/;function Px(t){if(!t)return[[]];if(t==="/")return[[Tx]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${c}": ${p}`)}let n=0,i=n;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,c="",u="";function f(){!c||(n===0?s.push({type:0,value:c}):n===1||n===2||n===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:l==="/"?(c&&f(),o()):l===":"?(f(),n=1):d();break;case 4:d(),n=i;break;case 1:l==="("?n=2:Lx.test(l)?d():(f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),r}function Dx(t,e,n){const i=Ax(Px(t.path),n),r=Ke(i,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function Rx(t,e){const n=[],i=new Map;e=sf({strict:!1,end:!0,sensitive:!1},e);function r(u){return i.get(u)}function s(u,f,d){const p=!d,g=Fx(u);g.aliasOf=d&&d.record;const m=sf(e,u),h=[g];if("alias"in u){const M=typeof u.alias=="string"?[u.alias]:u.alias;for(const w of M)h.push(Ke({},g,{components:d?d.record.components:g.components,path:w,aliasOf:d?d.record:g}))}let v,x;for(const M of h){const{path:w}=M;if(f&&w[0]!=="/"){const b=f.record.path,T=b[b.length-1]==="/"?"":"/";M.path=f.record.path+(w&&T+w)}if(v=Dx(M,f,m),d?d.alias.push(v):(x=x||v,x!==v&&x.alias.push(v),p&&u.name&&!rf(v)&&o(u.name)),g.children){const b=g.children;for(let T=0;T<b.length;T++)s(b[T],v,d&&d.children[T])}d=d||v,l(v)}return x?()=>{o(x)}:Ss}function o(u){if(Tp(u)){const f=i.get(u);f&&(i.delete(u),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(u);f>-1&&(n.splice(f,1),u.record.name&&i.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let f=0;for(;f<n.length&&Cx(u,n[f])>=0&&(u.record.path!==n[f].record.path||!Pp(u,n[f]));)f++;n.splice(f,0,u),u.record.name&&!rf(u)&&i.set(u.record.name,u)}function c(u,f){let d,p={},g,m;if("name"in u&&u.name){if(d=i.get(u.name),!d)throw Gr(1,{location:u});m=d.record.name,p=Ke(Ix(f.params,d.keys.filter(x=>!x.optional).map(x=>x.name)),u.params),g=d.stringify(p)}else if("path"in u)g=u.path,d=n.find(x=>x.re.test(g)),d&&(p=d.parse(g),m=d.record.name);else{if(d=f.name?i.get(f.name):n.find(x=>x.re.test(f.path)),!d)throw Gr(1,{location:u,currentLocation:f});m=d.record.name,p=Ke({},f.params,u.params),g=d.stringify(p)}const h=[];let v=d;for(;v;)h.unshift(v.record),v=v.parent;return{name:m,path:g,params:p,matched:h,meta:Bx(h)}}return t.forEach(u=>s(u)),{addRoute:s,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function Ix(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function Fx(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Nx(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Nx(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="boolean"?n:n[i];return e}function rf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Bx(t){return t.reduce((e,n)=>Ke(e,n.meta),{})}function sf(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function Pp(t,e){return e.children.some(n=>n===t||Pp(t,n))}const Dp=/#/g,Ox=/&/g,kx=/\//g,zx=/=/g,Ux=/\?/g,Rp=/\+/g,Gx=/%5B/g,Vx=/%5D/g,Ip=/%5E/g,Hx=/%60/g,Fp=/%7B/g,Wx=/%7C/g,Np=/%7D/g,$x=/%20/g;function Dc(t){return encodeURI(""+t).replace(Wx,"|").replace(Gx,"[").replace(Vx,"]")}function Yx(t){return Dc(t).replace(Fp,"{").replace(Np,"}").replace(Ip,"^")}function Ul(t){return Dc(t).replace(Rp,"%2B").replace($x,"+").replace(Dp,"%23").replace(Ox,"%26").replace(Hx,"`").replace(Fp,"{").replace(Np,"}").replace(Ip,"^")}function qx(t){return Ul(t).replace(zx,"%3D")}function jx(t){return Dc(t).replace(Dp,"%23").replace(Ux,"%3F")}function Xx(t){return t==null?"":jx(t).replace(kx,"%2F")}function qo(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function Zx(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(Rp," "),o=s.indexOf("="),a=qo(o<0?s:s.slice(0,o)),l=o<0?null:qo(s.slice(o+1));if(a in e){let c=e[a];gn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function of(t){let e="";for(let n in t){const i=t[n];if(n=qx(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(gn(i)?i.map(s=>s&&Ul(s)):[i&&Ul(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function Kx(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=gn(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const Qx=Symbol(""),af=Symbol(""),Rc=Symbol(""),Bp=Symbol(""),Gl=Symbol("");function cs(){let t=[];function e(i){return t.push(i),()=>{const r=t.indexOf(i);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function fi(t,e,n,i,r){const s=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const l=f=>{f===!1?a(Gr(4,{from:n,to:e})):f instanceof Error?a(f):Sx(f)?a(Gr(2,{from:e,to:f})):(s&&i.enterCallbacks[r]===s&&typeof f=="function"&&s.push(f),o())},c=t.call(i&&i.instances[r],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(f=>a(f))})}function Na(t,e,n,i){const r=[];for(const s of t)for(const o in s.components){let a=s.components[o];if(!(e!=="beforeRouteEnter"&&!s.instances[o]))if(Jx(a)){const c=(a.__vccOpts||a)[e];c&&r.push(fi(c,n,i,s,o))}else{let l=a();r.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const u=rx(c)?c.default:c;s.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&fi(d,n,i,s,o)()}))}}return r}function Jx(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function lf(t){const e=rt(Rc),n=rt(Bp),i=K(()=>e.resolve(dn(t.to))),r=K(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=n.matched;if(!u||!f.length)return-1;const d=f.findIndex(Ur.bind(null,u));if(d>-1)return d;const p=cf(l[c-2]);return c>1&&cf(u)===p&&f[f.length-1].path!==p?f.findIndex(Ur.bind(null,l[c-2])):d}),s=K(()=>r.value>-1&&iy(n.params,i.value.params)),o=K(()=>r.value>-1&&r.value===n.matched.length-1&&Ep(n.params,i.value.params));function a(l={}){return ny(l)?e[dn(t.replace)?"replace":"push"](dn(t.to)).catch(Ss):Promise.resolve()}return{route:i,href:K(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}const ey=xi({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:lf,setup(t,{slots:e}){const n=Ft(lf(t)),{options:i}=rt(Rc),r=K(()=>({[uf(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[uf(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&e.default(n);return t.custom?s:yn("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},s)}}}),ty=ey;function ny(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function iy(t,e){for(const n in e){const i=e[n],r=t[n];if(typeof i=="string"){if(i!==r)return!1}else if(!gn(r)||r.length!==i.length||i.some((s,o)=>s!==r[o]))return!1}return!0}function cf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const uf=(t,e,n)=>t!=null?t:e!=null?e:n,ry=xi({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=rt(Gl),r=K(()=>t.route||i.value),s=rt(af,0),o=K(()=>{let c=dn(s);const{matched:u}=r.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=K(()=>r.value.matched[o.value]);Lt(af,K(()=>o.value+1)),Lt(Qx,a),Lt(Gl,r);const l=Pe();return pt(()=>[l.value,a.value,t.name],([c,u,f],[d,p,g])=>{u&&(u.instances[f]=c,p&&p!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!Ur(u,p)||!d)&&(u.enterCallbacks[f]||[]).forEach(m=>m(c))},{flush:"post"}),()=>{const c=r.value,u=a.value,f=u&&u.components[t.name],d=t.name;if(!f)return ff(n.default,{Component:f,route:c});const p=u.props[t.name],g=p?p===!0?c.params:typeof p=="function"?p(c):p:null,h=yn(f,Ke({},g,e,{onVnodeUnmounted:v=>{v.component.isUnmounted&&(u.instances[d]=null)},ref:l}));return ff(n.default,{Component:h,route:c})||h}}});function ff(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const sy=ry;function oy(t){const e=Rx(t.routes,t),n=t.parseQuery||Zx,i=t.stringifyQuery||of,r=t.history,s=cs(),o=cs(),a=cs(),l=Kd(Jn);let c=Jn;Lr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ia.bind(null,O=>""+O),f=Ia.bind(null,Xx),d=Ia.bind(null,qo);function p(O,F){let se,fe;return Tp(O)?(se=e.getRecordMatcher(O),fe=F):fe=O,e.addRoute(fe,se)}function g(O){const F=e.getRecordMatcher(O);F&&e.removeRoute(F)}function m(){return e.getRoutes().map(O=>O.record)}function h(O){return!!e.getRecordMatcher(O)}function v(O,F){if(F=Ke({},F||l.value),typeof O=="string"){const ve=Fa(n,O,F.path),A=e.resolve({path:ve.path},F),P=r.createHref(ve.fullPath);return Ke(ve,A,{params:d(A.params),hash:qo(ve.hash),redirectedFrom:void 0,href:P})}let se;if("path"in O)se=Ke({},O,{path:Fa(n,O.path,F.path).path});else{const ve=Ke({},O.params);for(const A in ve)ve[A]==null&&delete ve[A];se=Ke({},O,{params:f(O.params)}),F.params=f(F.params)}const fe=e.resolve(se,F),be=O.hash||"";fe.params=u(d(fe.params));const ge=ax(i,Ke({},O,{hash:Yx(be),path:fe.path})),Ce=r.createHref(ge);return Ke({fullPath:ge,hash:be,query:i===of?Kx(O.query):O.query||{}},fe,{redirectedFrom:void 0,href:Ce})}function x(O){return typeof O=="string"?Fa(n,O,l.value.path):Ke({},O)}function M(O,F){if(c!==O)return Gr(8,{from:F,to:O})}function w(O){return L(O)}function b(O){return w(Ke(x(O),{replace:!0}))}function T(O){const F=O.matched[O.matched.length-1];if(F&&F.redirect){const{redirect:se}=F;let fe=typeof se=="function"?se(O):se;return typeof fe=="string"&&(fe=fe.includes("?")||fe.includes("#")?fe=x(fe):{path:fe},fe.params={}),Ke({query:O.query,hash:O.hash,params:"path"in fe?{}:O.params},fe)}}function L(O,F){const se=c=v(O),fe=l.value,be=O.state,ge=O.force,Ce=O.replace===!0,ve=T(se);if(ve)return L(Ke(x(ve),{state:be,force:ge,replace:Ce}),F||se);const A=se;A.redirectedFrom=F;let P;return!ge&&lx(i,fe,se)&&(P=Gr(16,{to:A,from:fe}),J(fe,fe,!0,!1)),(P?Promise.resolve(P):E(A,fe)).catch(H=>ei(H)?ei(H,2)?H:G(H):X(H,A,fe)).then(H=>{if(H){if(ei(H,2))return L(Ke(x(H.to),{state:be,force:ge,replace:Ce}),F||A)}else H=B(A,fe,!0,Ce,be);return D(A,fe,H),H})}function _(O,F){const se=M(O,F);return se?Promise.reject(se):Promise.resolve()}function E(O,F){let se;const[fe,be,ge]=ay(O,F);se=Na(fe.reverse(),"beforeRouteLeave",O,F);for(const ve of fe)ve.leaveGuards.forEach(A=>{se.push(fi(A,O,F))});const Ce=_.bind(null,O,F);return se.push(Ce),dr(se).then(()=>{se=[];for(const ve of s.list())se.push(fi(ve,O,F));return se.push(Ce),dr(se)}).then(()=>{se=Na(be,"beforeRouteUpdate",O,F);for(const ve of be)ve.updateGuards.forEach(A=>{se.push(fi(A,O,F))});return se.push(Ce),dr(se)}).then(()=>{se=[];for(const ve of O.matched)if(ve.beforeEnter&&!F.matched.includes(ve))if(gn(ve.beforeEnter))for(const A of ve.beforeEnter)se.push(fi(A,O,F));else se.push(fi(ve.beforeEnter,O,F));return se.push(Ce),dr(se)}).then(()=>(O.matched.forEach(ve=>ve.enterCallbacks={}),se=Na(ge,"beforeRouteEnter",O,F),se.push(Ce),dr(se))).then(()=>{se=[];for(const ve of o.list())se.push(fi(ve,O,F));return se.push(Ce),dr(se)}).catch(ve=>ei(ve,8)?ve:Promise.reject(ve))}function D(O,F,se){for(const fe of a.list())fe(O,F,se)}function B(O,F,se,fe,be){const ge=M(O,F);if(ge)return ge;const Ce=F===Jn,ve=Lr?history.state:{};se&&(fe||Ce?r.replace(O.fullPath,Ke({scroll:Ce&&ve&&ve.scroll},be)):r.push(O.fullPath,be)),l.value=O,J(O,F,se,Ce),G()}let V;function Z(){V||(V=r.listen((O,F,se)=>{if(!Me.listening)return;const fe=v(O),be=T(fe);if(be){L(Ke(be,{replace:!0}),fe).catch(Ss);return}c=fe;const ge=l.value;Lr&&gx(Qu(ge.fullPath,se.delta),ma()),E(fe,ge).catch(Ce=>ei(Ce,12)?Ce:ei(Ce,2)?(L(Ce.to,fe).then(ve=>{ei(ve,20)&&!se.delta&&se.type===ks.pop&&r.go(-1,!1)}).catch(Ss),Promise.reject()):(se.delta&&r.go(-se.delta,!1),X(Ce,fe,ge))).then(Ce=>{Ce=Ce||B(fe,ge,!1),Ce&&(se.delta?r.go(-se.delta,!1):se.type===ks.pop&&ei(Ce,20)&&r.go(-1,!1)),D(fe,ge,Ce)}).catch(Ss)}))}let N=cs(),ne=cs(),z;function X(O,F,se){G(O);const fe=ne.list();return fe.length?fe.forEach(be=>be(O,F,se)):console.error(O),Promise.reject(O)}function Y(){return z&&l.value!==Jn?Promise.resolve():new Promise((O,F)=>{N.add([O,F])})}function G(O){return z||(z=!O,Z(),N.list().forEach(([F,se])=>O?se(O):F()),N.reset()),O}function J(O,F,se,fe){const{scrollBehavior:be}=t;if(!Lr||!be)return Promise.resolve();const ge=!se&&vx(Qu(O.fullPath,0))||(fe||!se)&&history.state&&history.state.scroll||null;return Gs().then(()=>be(O,F,ge)).then(Ce=>Ce&&mx(Ce)).catch(Ce=>X(Ce,O,F))}const ue=O=>r.go(O);let le;const ae=new Set,Me={currentRoute:l,listening:!0,addRoute:p,removeRoute:g,hasRoute:h,getRoutes:m,resolve:v,options:t,push:w,replace:b,go:ue,back:()=>ue(-1),forward:()=>ue(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:ne.add,isReady:Y,install(O){const F=this;O.component("RouterLink",ty),O.component("RouterView",sy),O.config.globalProperties.$router=F,Object.defineProperty(O.config.globalProperties,"$route",{enumerable:!0,get:()=>dn(l)}),Lr&&!le&&l.value===Jn&&(le=!0,w(r.location).catch(be=>{}));const se={};for(const be in Jn)se[be]=K(()=>l.value[be]);O.provide(Rc,F),O.provide(Bp,Ft(se)),O.provide(Gl,l);const fe=O.unmount;ae.add(O),O.unmount=function(){ae.delete(O),ae.size<1&&(c=Jn,V&&V(),V=null,l.value=Jn,le=!1,z=!1),fe()}}};return Me}function dr(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function ay(t,e){const n=[],i=[],r=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(t.matched.find(c=>Ur(c,a))?i.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Ur(c,l))||r.push(l))}return[n,i,r]}/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ic="143",ly=0,df=1,cy=2,Op=1,uy=2,ms=3,zs=0,pn=1,Vr=2,fy=1,pi=0,Br=1,hf=2,pf=3,mf=4,dy=5,Pr=100,hy=101,py=102,gf=103,vf=104,my=200,gy=201,vy=202,_y=203,kp=204,zp=205,xy=206,yy=207,by=208,Sy=209,My=210,wy=0,Ay=1,Ey=2,Vl=3,Cy=4,Ty=5,Ly=6,Py=7,Up=0,Dy=1,Ry=2,Hn=0,Iy=1,Fy=2,Ny=3,By=4,Oy=5,Gp=300,Hr=301,Wr=302,Hl=303,Wl=304,ga=306,$l=1e3,cn=1001,Yl=1002,It=1003,_f=1004,xf=1005,jt=1006,ky=1007,va=1008,Xi=1009,zy=1010,Uy=1011,Vp=1012,Gy=1013,Ui=1014,Gi=1015,Us=1016,Vy=1017,Hy=1018,Or=1020,Wy=1021,$y=1022,En=1023,Yy=1024,qy=1025,Yi=1026,$r=1027,jy=1028,Xy=1029,Zy=1030,Ky=1031,Qy=1033,Ba=33776,Oa=33777,ka=33778,za=33779,yf=35840,bf=35841,Sf=35842,Mf=35843,Jy=36196,wf=37492,Af=37496,Ef=37808,Cf=37809,Tf=37810,Lf=37811,Pf=37812,Df=37813,Rf=37814,If=37815,Ff=37816,Nf=37817,Bf=37818,Of=37819,kf=37820,zf=37821,Uf=36492,Zi=3e3,at=3001,eb=3200,tb=3201,nb=0,ib=1,kn="srgb",Vi="srgb-linear",Ua=7680,rb=519,Gf=35044,Vf="300 es",ql=1035;class ts{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ga=Math.PI/180,Hf=180/Math.PI;function qs(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(wt[t&255]+wt[t>>8&255]+wt[t>>16&255]+wt[t>>24&255]+"-"+wt[e&255]+wt[e>>8&255]+"-"+wt[e>>16&15|64]+wt[e>>24&255]+"-"+wt[n&63|128]+wt[n>>8&255]+"-"+wt[n>>16&255]+wt[n>>24&255]+wt[i&255]+wt[i>>8&255]+wt[i>>16&255]+wt[i>>24&255]).toLowerCase()}function zt(t,e,n){return Math.max(e,Math.min(n,t))}function sb(t,e){return(t%e+e)%e}function Va(t,e,n){return(1-n)*t+n*e}function Wf(t){return(t&t-1)===0&&t!==0}function jl(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}class Je{constructor(e=0,n=0){Je.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Kt{constructor(){Kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],p=i[5],g=i[8],m=r[0],h=r[3],v=r[6],x=r[1],M=r[4],w=r[7],b=r[2],T=r[5],L=r[8];return s[0]=o*m+a*x+l*b,s[3]=o*h+a*M+l*T,s[6]=o*v+a*w+l*L,s[1]=c*m+u*x+f*b,s[4]=c*h+u*M+f*T,s[7]=c*v+u*w+f*L,s[2]=d*m+p*x+g*b,s[5]=d*h+p*M+g*T,s[8]=d*v+p*w+g*L,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*s,p=c*s-o*l,g=n*f+i*d+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/g;return e[0]=f*m,e[1]=(r*c-u*i)*m,e[2]=(a*i-r*o)*m,e[3]=d*m,e[4]=(u*n-r*l)*m,e[5]=(r*s-a*n)*m,e[6]=p*m,e[7]=(i*l-c*n)*m,e[8]=(o*n-i*s)*m,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=n,i[4]*=n,i[7]*=n,this}rotate(e){const n=Math.cos(e),i=Math.sin(e),r=this.elements,s=r[0],o=r[3],a=r[6],l=r[1],c=r[4],u=r[7];return r[0]=n*s+i*l,r[3]=n*o+i*c,r[6]=n*a+i*u,r[1]=-i*s+n*l,r[4]=-i*o+n*c,r[7]=-i*a+n*u,this}translate(e,n){const i=this.elements;return i[0]+=e*i[2],i[3]+=e*i[5],i[6]+=e*i[8],i[1]+=n*i[2],i[4]+=n*i[5],i[7]+=n*i[8],this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function Hp(t){for(let e=t.length-1;e>=0;--e)if(t[e]>65535)return!0;return!1}function jo(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function qi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Fo(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const Ha={[kn]:{[Vi]:qi},[Vi]:{[kn]:Fo}},rn={legacyMode:!0,get workingColorSpace(){return Vi},set workingColorSpace(t){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(t,e,n){if(this.legacyMode||e===n||!e||!n)return t;if(Ha[e]&&Ha[e][n]!==void 0){const i=Ha[e][n];return t.r=i(t.r),t.g=i(t.g),t.b=i(t.b),t}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)}},Wp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ht={r:0,g:0,b:0},sn={h:0,s:0,l:0},lo={h:0,s:0,l:0};function Wa(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}function co(t,e){return e.r=t.r,e.g=t.g,e.b=t.b,e}class et{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,n===void 0&&i===void 0?this.set(e):this.setRGB(e,n,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=kn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rn.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Vi){return this.r=e,this.g=n,this.b=i,rn.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Vi){if(e=sb(e,1),n=zt(n,0,1),i=zt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Wa(o,s,e+1/3),this.g=Wa(o,s,e),this.b=Wa(o,s,e-1/3)}return rn.toWorkingColorSpace(this,r),this}setStyle(e,n=kn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,rn.toWorkingColorSpace(this,n),i(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,rn.toWorkingColorSpace(this,n),i(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,c=parseInt(s[2],10)/100,u=parseInt(s[3],10)/100;return i(s[4]),this.setHSL(l,c,u,n)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,rn.toWorkingColorSpace(this,n),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,rn.toWorkingColorSpace(this,n),this}return e&&e.length>0?this.setColorName(e,n):this}setColorName(e,n=kn){const i=Wp[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=qi(e.r),this.g=qi(e.g),this.b=qi(e.b),this}copyLinearToSRGB(e){return this.r=Fo(e.r),this.g=Fo(e.g),this.b=Fo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=kn){return rn.fromWorkingColorSpace(co(this,ht),e),zt(ht.r*255,0,255)<<16^zt(ht.g*255,0,255)<<8^zt(ht.b*255,0,255)<<0}getHexString(e=kn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Vi){rn.fromWorkingColorSpace(co(this,ht),n);const i=ht.r,r=ht.g,s=ht.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=Vi){return rn.fromWorkingColorSpace(co(this,ht),n),e.r=ht.r,e.g=ht.g,e.b=ht.b,e}getStyle(e=kn){return rn.fromWorkingColorSpace(co(this,ht),e),e!==kn?`color(${e} ${ht.r} ${ht.g} ${ht.b})`:`rgb(${ht.r*255|0},${ht.g*255|0},${ht.b*255|0})`}offsetHSL(e,n,i){return this.getHSL(sn),sn.h+=e,sn.s+=n,sn.l+=i,this.setHSL(sn.h,sn.s,sn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(sn),e.getHSL(lo);const i=Va(sn.h,lo.h,n),r=Va(sn.s,lo.s,n),s=Va(sn.l,lo.l,n);return this.setHSL(i,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}et.NAMES=Wp;let hr;class $p{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{hr===void 0&&(hr=jo("canvas")),hr.width=e.width,hr.height=e.height;const i=hr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=hr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=jo("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=qi(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(qi(n[i]/255)*255):n[i]=qi(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Yp{constructor(e=null){this.isSource=!0,this.uuid=qs(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push($a(r[o].image)):s.push($a(r[o]))}else s=$a(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function $a(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?$p.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ob=0;class vn extends ts{constructor(e=vn.DEFAULT_IMAGE,n=vn.DEFAULT_MAPPING,i=cn,r=cn,s=jt,o=va,a=En,l=Xi,c=1,u=Zi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ob++}),this.uuid=qs(),this.name="",this.source=new Yp(e),this.mipmaps=[],this.mapping=n,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Je(0,0),this.repeat=new Je(1,1),this.center=new Je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Gp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $l:e.x=e.x-Math.floor(e.x);break;case cn:e.x=e.x<0?0:1;break;case Yl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $l:e.y=e.y-Math.floor(e.y);break;case cn:e.y=e.y<0?0:1;break;case Yl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}vn.DEFAULT_IMAGE=null;vn.DEFAULT_MAPPING=Gp;class xt{constructor(e=0,n=0,i=0,r=1){xt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],p=l[5],g=l[9],m=l[2],h=l[6],v=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-m)<.01&&Math.abs(g-h)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+m)<.1&&Math.abs(g+h)<.1&&Math.abs(c+p+v-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const M=(c+1)/2,w=(p+1)/2,b=(v+1)/2,T=(u+d)/4,L=(f+m)/4,_=(g+h)/4;return M>w&&M>b?M<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(M),r=T/i,s=L/i):w>b?w<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(w),i=T/r,s=_/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=L/s,r=_/s),this.set(i,r,s,n),this}let x=Math.sqrt((h-g)*(h-g)+(f-m)*(f-m)+(d-u)*(d-u));return Math.abs(x)<.001&&(x=1),this.x=(h-g)/x,this.y=(f-m)/x,this.z=(d-u)/x,this.w=Math.acos((c+p+v-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ki extends ts{constructor(e,n,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new xt(0,0,e,n),this.scissorTest=!1,this.viewport=new xt(0,0,e,n);const r={width:e,height:n,depth:1};this.texture=new vn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:jt,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Yp(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qp extends vn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=It,this.minFilter=It,this.wrapR=cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ab extends vn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=It,this.minFilter=It,this.wrapR=cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class js{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const d=s[o+0],p=s[o+1],g=s[o+2],m=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f;return}if(a===1){e[n+0]=d,e[n+1]=p,e[n+2]=g,e[n+3]=m;return}if(f!==m||l!==d||c!==p||u!==g){let h=1-a;const v=l*d+c*p+u*g+f*m,x=v>=0?1:-1,M=1-v*v;if(M>Number.EPSILON){const b=Math.sqrt(M),T=Math.atan2(b,v*x);h=Math.sin(h*T)/b,a=Math.sin(a*T)/b}const w=a*x;if(l=l*h+d*w,c=c*h+p*w,u=u*h+g*w,f=f*h+m*w,h===1-a){const b=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=b,c*=b,u*=b,f*=b}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],d=s[o+1],p=s[o+2],g=s[o+3];return e[n]=a*g+u*f+l*p-c*d,e[n+1]=l*g+u*d+c*f-a*p,e[n+2]=c*g+u*p+a*d-l*f,e[n+3]=u*g-a*f-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),d=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=d*u*f+c*p*g,this._y=c*p*f-d*u*g,this._z=c*u*g+d*p*f,this._w=c*u*f-d*p*g;break;case"YXZ":this._x=d*u*f+c*p*g,this._y=c*p*f-d*u*g,this._z=c*u*g-d*p*f,this._w=c*u*f+d*p*g;break;case"ZXY":this._x=d*u*f-c*p*g,this._y=c*p*f+d*u*g,this._z=c*u*g+d*p*f,this._w=c*u*f-d*p*g;break;case"ZYX":this._x=d*u*f-c*p*g,this._y=c*p*f+d*u*g,this._z=c*u*g-d*p*f,this._w=c*u*f+d*p*g;break;case"YZX":this._x=d*u*f+c*p*g,this._y=c*p*f+d*u*g,this._z=c*u*g-d*p*f,this._w=c*u*f-d*p*g;break;case"XZY":this._x=d*u*f-c*p*g,this._y=c*p*f-d*u*g,this._z=c*u*g+d*p*f,this._w=c*u*f+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],f=n[10],d=i+a+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(zt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-n)*u)/c,d=Math.sin(n*u)/c;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(e=0,n=0,i=0){$.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion($f.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion($f.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*n+o*r-a*i,u=l*i+a*n-s*r,f=l*r+s*i-o*n,d=-s*n-o*i-a*r;return this.x=c*l+d*-s+u*-a-f*-o,this.y=u*l+d*-o+f*-s-c*-a,this.z=f*l+d*-a+c*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ya.copy(this).projectOnVector(e),this.sub(Ya)}reflect(e){return this.sub(Ya.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ya=new $,$f=new js;class Xs{constructor(e=new $(1/0,1/0,1/0),n=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){let n=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],f=e[l+1],d=e[l+2];u<n&&(n=u),f<i&&(i=f),d<r&&(r=d),u>s&&(s=u),f>o&&(o=f),d>a&&(a=d)}return this.min.set(n,i,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let n=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),f=e.getY(l),d=e.getZ(l);u<n&&(n=u),f<i&&(i=f),d<r&&(r=d),u>s&&(s=u),f>o&&(o=f),d>a&&(a=d)}return this.min.set(n,i,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Li.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(n&&i.attributes!=null&&i.attributes.position!==void 0){const s=i.attributes.position;for(let o=0,a=s.count;o<a;o++)Li.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Li)}else i.boundingBox===null&&i.computeBoundingBox(),qa.copy(i.boundingBox),qa.applyMatrix4(e.matrixWorld),this.union(qa);const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Li),Li.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(us),uo.subVectors(this.max,us),pr.subVectors(e.a,us),mr.subVectors(e.b,us),gr.subVectors(e.c,us),ti.subVectors(mr,pr),ni.subVectors(gr,mr),Pi.subVectors(pr,gr);let n=[0,-ti.z,ti.y,0,-ni.z,ni.y,0,-Pi.z,Pi.y,ti.z,0,-ti.x,ni.z,0,-ni.x,Pi.z,0,-Pi.x,-ti.y,ti.x,0,-ni.y,ni.x,0,-Pi.y,Pi.x,0];return!ja(n,pr,mr,gr,uo)||(n=[1,0,0,0,1,0,0,0,1],!ja(n,pr,mr,gr,uo))?!1:(fo.crossVectors(ti,ni),n=[fo.x,fo.y,fo.z],ja(n,pr,mr,gr,uo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Li.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Li).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Rn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Rn=[new $,new $,new $,new $,new $,new $,new $,new $],Li=new $,qa=new Xs,pr=new $,mr=new $,gr=new $,ti=new $,ni=new $,Pi=new $,us=new $,uo=new $,fo=new $,Di=new $;function ja(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Di.fromArray(t,s);const a=r.x*Math.abs(Di.x)+r.y*Math.abs(Di.y)+r.z*Math.abs(Di.z),l=e.dot(Di),c=n.dot(Di),u=i.dot(Di);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const lb=new Xs,Yf=new $,ho=new $,Xa=new $;class Fc{constructor(e=new $,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):lb.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){Xa.subVectors(e,this.center);const n=Xa.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.add(Xa.multiplyScalar(r/i)),this.radius+=r}return this}union(e){return this.center.equals(e.center)===!0?ho.set(0,0,1).multiplyScalar(e.radius):ho.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(Yf.copy(e.center).add(ho)),this.expandByPoint(Yf.copy(e.center).sub(ho)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const In=new $,Za=new $,po=new $,ii=new $,Ka=new $,mo=new $,Qa=new $;class cb{constructor(e=new $,n=new $(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,In)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=In.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(In.copy(this.direction).multiplyScalar(n).add(this.origin),In.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Za.copy(e).add(n).multiplyScalar(.5),po.copy(n).sub(e).normalize(),ii.copy(this.origin).sub(Za);const s=e.distanceTo(n)*.5,o=-this.direction.dot(po),a=ii.dot(this.direction),l=-ii.dot(po),c=ii.lengthSq(),u=Math.abs(1-o*o);let f,d,p,g;if(u>0)if(f=o*l-a,d=o*a-l,g=s*u,f>=0)if(d>=-g)if(d<=g){const m=1/u;f*=m,d*=m,p=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;return i&&i.copy(this.direction).multiplyScalar(f).add(this.origin),r&&r.copy(po).multiplyScalar(d).add(Za),p}intersectSphere(e,n){In.subVectors(e.center,this.origin);const i=In.dot(this.direction),r=In.dot(In)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return a<0&&l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||i!==i)&&(i=s),(o<r||r!==r)&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,In)!==null}intersectTriangle(e,n,i,r,s){Ka.subVectors(n,e),mo.subVectors(i,e),Qa.crossVectors(Ka,mo);let o=this.direction.dot(Qa),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ii.subVectors(this.origin,e);const l=a*this.direction.dot(mo.crossVectors(ii,mo));if(l<0)return null;const c=a*this.direction.dot(Ka.cross(ii));if(c<0||l+c>o)return null;const u=-a*ii.dot(Qa);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Mt{constructor(){Mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,n,i,r,s,o,a,l,c,u,f,d,p,g,m,h){const v=this.elements;return v[0]=e,v[4]=n,v[8]=i,v[12]=r,v[1]=s,v[5]=o,v[9]=a,v[13]=l,v[2]=c,v[6]=u,v[10]=f,v[14]=d,v[3]=p,v[7]=g,v[11]=m,v[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Mt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/vr.setFromMatrixColumn(e,0).length(),s=1/vr.setFromMatrixColumn(e,1).length(),o=1/vr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*u,p=o*f,g=a*u,m=a*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=p+g*c,n[5]=d-m*c,n[9]=-a*l,n[2]=m-d*c,n[6]=g+p*c,n[10]=o*l}else if(e.order==="YXZ"){const d=l*u,p=l*f,g=c*u,m=c*f;n[0]=d+m*a,n[4]=g*a-p,n[8]=o*c,n[1]=o*f,n[5]=o*u,n[9]=-a,n[2]=p*a-g,n[6]=m+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*u,p=l*f,g=c*u,m=c*f;n[0]=d-m*a,n[4]=-o*f,n[8]=g+p*a,n[1]=p+g*a,n[5]=o*u,n[9]=m-d*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*u,p=o*f,g=a*u,m=a*f;n[0]=l*u,n[4]=g*c-p,n[8]=d*c+m,n[1]=l*f,n[5]=m*c+d,n[9]=p*c-g,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,g=a*l,m=a*c;n[0]=l*u,n[4]=m-d*f,n[8]=g*f+p,n[1]=f,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*f+g,n[10]=d-m*f}else if(e.order==="XZY"){const d=o*l,p=o*c,g=a*l,m=a*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=d*f+m,n[5]=o*u,n[9]=p*f-g,n[2]=g*f-p,n[6]=a*u,n[10]=m*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ub,e,fb)}lookAt(e,n,i){const r=this.elements;return Ot.subVectors(e,n),Ot.lengthSq()===0&&(Ot.z=1),Ot.normalize(),ri.crossVectors(i,Ot),ri.lengthSq()===0&&(Math.abs(i.z)===1?Ot.x+=1e-4:Ot.z+=1e-4,Ot.normalize(),ri.crossVectors(i,Ot)),ri.normalize(),go.crossVectors(Ot,ri),r[0]=ri.x,r[4]=go.x,r[8]=Ot.x,r[1]=ri.y,r[5]=go.y,r[9]=Ot.y,r[2]=ri.z,r[6]=go.z,r[10]=Ot.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],p=i[13],g=i[2],m=i[6],h=i[10],v=i[14],x=i[3],M=i[7],w=i[11],b=i[15],T=r[0],L=r[4],_=r[8],E=r[12],D=r[1],B=r[5],V=r[9],Z=r[13],N=r[2],ne=r[6],z=r[10],X=r[14],Y=r[3],G=r[7],J=r[11],ue=r[15];return s[0]=o*T+a*D+l*N+c*Y,s[4]=o*L+a*B+l*ne+c*G,s[8]=o*_+a*V+l*z+c*J,s[12]=o*E+a*Z+l*X+c*ue,s[1]=u*T+f*D+d*N+p*Y,s[5]=u*L+f*B+d*ne+p*G,s[9]=u*_+f*V+d*z+p*J,s[13]=u*E+f*Z+d*X+p*ue,s[2]=g*T+m*D+h*N+v*Y,s[6]=g*L+m*B+h*ne+v*G,s[10]=g*_+m*V+h*z+v*J,s[14]=g*E+m*Z+h*X+v*ue,s[3]=x*T+M*D+w*N+b*Y,s[7]=x*L+M*B+w*ne+b*G,s[11]=x*_+M*V+w*z+b*J,s[15]=x*E+M*Z+w*X+b*ue,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],p=e[14],g=e[3],m=e[7],h=e[11],v=e[15];return g*(+s*l*f-r*c*f-s*a*d+i*c*d+r*a*p-i*l*p)+m*(+n*l*p-n*c*d+s*o*d-r*o*p+r*c*u-s*l*u)+h*(+n*c*f-n*a*p-s*o*f+i*o*p+s*a*u-i*c*u)+v*(-r*a*u-n*l*f+n*a*d+r*o*f-i*o*d+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],p=e[11],g=e[12],m=e[13],h=e[14],v=e[15],x=f*h*c-m*d*c+m*l*p-a*h*p-f*l*v+a*d*v,M=g*d*c-u*h*c-g*l*p+o*h*p+u*l*v-o*d*v,w=u*m*c-g*f*c+g*a*p-o*m*p-u*a*v+o*f*v,b=g*f*l-u*m*l-g*a*d+o*m*d+u*a*h-o*f*h,T=n*x+i*M+r*w+s*b;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/T;return e[0]=x*L,e[1]=(m*d*s-f*h*s-m*r*p+i*h*p+f*r*v-i*d*v)*L,e[2]=(a*h*s-m*l*s+m*r*c-i*h*c-a*r*v+i*l*v)*L,e[3]=(f*l*s-a*d*s-f*r*c+i*d*c+a*r*p-i*l*p)*L,e[4]=M*L,e[5]=(u*h*s-g*d*s+g*r*p-n*h*p-u*r*v+n*d*v)*L,e[6]=(g*l*s-o*h*s-g*r*c+n*h*c+o*r*v-n*l*v)*L,e[7]=(o*d*s-u*l*s+u*r*c-n*d*c-o*r*p+n*l*p)*L,e[8]=w*L,e[9]=(g*f*s-u*m*s-g*i*p+n*m*p+u*i*v-n*f*v)*L,e[10]=(o*m*s-g*a*s+g*i*c-n*m*c-o*i*v+n*a*v)*L,e[11]=(u*a*s-o*f*s-u*i*c+n*f*c+o*i*p-n*a*p)*L,e[12]=b*L,e[13]=(u*m*r-g*f*r+g*i*d-n*m*d-u*i*h+n*f*h)*L,e[14]=(g*a*r-o*m*r-g*i*l+n*m*l+o*i*h-n*a*h)*L,e[15]=(o*f*r-u*a*r+u*i*l-n*f*l-o*i*d+n*a*d)*L,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,f=a+a,d=s*c,p=s*u,g=s*f,m=o*u,h=o*f,v=a*f,x=l*c,M=l*u,w=l*f,b=i.x,T=i.y,L=i.z;return r[0]=(1-(m+v))*b,r[1]=(p+w)*b,r[2]=(g-M)*b,r[3]=0,r[4]=(p-w)*T,r[5]=(1-(d+v))*T,r[6]=(h+x)*T,r[7]=0,r[8]=(g+M)*L,r[9]=(h-x)*L,r[10]=(1-(d+m))*L,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=vr.set(r[0],r[1],r[2]).length();const o=vr.set(r[4],r[5],r[6]).length(),a=vr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],on.copy(this);const c=1/s,u=1/o,f=1/a;return on.elements[0]*=c,on.elements[1]*=c,on.elements[2]*=c,on.elements[4]*=u,on.elements[5]*=u,on.elements[6]*=u,on.elements[8]*=f,on.elements[9]*=f,on.elements[10]*=f,n.setFromRotationMatrix(on),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o){const a=this.elements,l=2*s/(n-e),c=2*s/(i-r),u=(n+e)/(n-e),f=(i+r)/(i-r),d=-(o+s)/(o-s),p=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=f,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=p,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,n,i,r,s,o){const a=this.elements,l=1/(n-e),c=1/(i-r),u=1/(o-s),f=(n+e)*l,d=(i+r)*c,p=(o+s)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-f,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-p,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const vr=new $,on=new Mt,ub=new $(0,0,0),fb=new $(1,1,1),ri=new $,go=new $,Ot=new $,qf=new Mt,jf=new js;class Zs{constructor(e=0,n=0,i=0,r=Zs.DefaultOrder){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-zt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(zt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-zt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return qf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(qf,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return jf.setFromEuler(this),this.setFromQuaternion(jf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Zs.DefaultOrder="XYZ";Zs.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class jp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let db=0;const Xf=new $,_r=new js,Fn=new Mt,vo=new $,fs=new $,hb=new $,pb=new js,Zf=new $(1,0,0),Kf=new $(0,1,0),Qf=new $(0,0,1),mb={type:"added"},Jf={type:"removed"};class _n extends ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:db++}),this.uuid=qs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_n.DefaultUp.clone();const e=new $,n=new Zs,i=new js,r=new $(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Mt},normalMatrix:{value:new Kt}}),this.matrix=new Mt,this.matrixWorld=new Mt,this.matrixAutoUpdate=_n.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new jp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return _r.setFromAxisAngle(e,n),this.quaternion.multiply(_r),this}rotateOnWorldAxis(e,n){return _r.setFromAxisAngle(e,n),this.quaternion.premultiply(_r),this}rotateX(e){return this.rotateOnAxis(Zf,e)}rotateY(e){return this.rotateOnAxis(Kf,e)}rotateZ(e){return this.rotateOnAxis(Qf,e)}translateOnAxis(e,n){return Xf.copy(e).applyQuaternion(this.quaternion),this.position.add(Xf.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Zf,e)}translateY(e){return this.translateOnAxis(Kf,e)}translateZ(e){return this.translateOnAxis(Qf,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Fn.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?vo.copy(e):vo.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),fs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fn.lookAt(fs,vo,this.up):Fn.lookAt(vo,fs,this.up),this.quaternion.setFromRotationMatrix(Fn),r&&(Fn.extractRotation(r.matrixWorld),_r.setFromRotationMatrix(Fn),this.quaternion.premultiply(_r.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(mb)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Jf)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const n=this.children[e];n.parent=null,n.dispatchEvent(Jf)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Fn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Fn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Fn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fs,e,hb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fs,pb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}_n.DefaultUp=new $(0,1,0);_n.DefaultMatrixAutoUpdate=!0;const an=new $,Nn=new $,Ja=new $,Bn=new $,xr=new $,yr=new $,ed=new $,el=new $,tl=new $,nl=new $;class Un{constructor(e=new $,n=new $,i=new $){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),an.subVectors(e,n),r.cross(an);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){an.subVectors(r,n),Nn.subVectors(i,n),Ja.subVectors(e,n);const o=an.dot(an),a=an.dot(Nn),l=an.dot(Ja),c=Nn.dot(Nn),u=Nn.dot(Ja),f=o*c-a*a;if(f===0)return s.set(-2,-1,-1);const d=1/f,p=(c*l-a*u)*d,g=(o*u-a*l)*d;return s.set(1-p-g,g,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Bn),Bn.x>=0&&Bn.y>=0&&Bn.x+Bn.y<=1}static getUV(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Bn),l.set(0,0),l.addScaledVector(s,Bn.x),l.addScaledVector(o,Bn.y),l.addScaledVector(a,Bn.z),l}static isFrontFacing(e,n,i,r){return an.subVectors(i,n),Nn.subVectors(e,n),an.cross(Nn).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return an.subVectors(this.c,this.b),Nn.subVectors(this.a,this.b),an.cross(Nn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Un.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Un.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return Un.getUV(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Un.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Un.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;xr.subVectors(r,i),yr.subVectors(s,i),el.subVectors(e,i);const l=xr.dot(el),c=yr.dot(el);if(l<=0&&c<=0)return n.copy(i);tl.subVectors(e,r);const u=xr.dot(tl),f=yr.dot(tl);if(u>=0&&f<=u)return n.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(xr,o);nl.subVectors(e,s);const p=xr.dot(nl),g=yr.dot(nl);if(g>=0&&p<=g)return n.copy(s);const m=p*c-l*g;if(m<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector(yr,a);const h=u*g-p*f;if(h<=0&&f-u>=0&&p-g>=0)return ed.subVectors(s,r),a=(f-u)/(f-u+(p-g)),n.copy(r).addScaledVector(ed,a);const v=1/(h+m+d);return o=m*v,a=d*v,n.copy(i).addScaledVector(xr,o).addScaledVector(yr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let gb=0;class _a extends ts{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gb++}),this.uuid=qs(),this.name="",this.type="Material",this.blending=Br,this.side=zs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=kp,this.blendDst=zp,this.blendEquation=Pr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Vl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rb,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ua,this.stencilZFail=Ua,this.stencilZPass=Ua,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn("THREE.Material: '"+n+"' parameter is undefined.");continue}if(n==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=i===fy;continue}const r=this[n];if(r===void 0){console.warn("THREE."+this.type+": '"+n+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Br&&(i.blending=this.blending),this.side!==zs&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Nc extends _a{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Up,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ft=new $,_o=new Je;class Tn{constructor(e,n,i){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i===!0,this.usage=Gf,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const n=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",r),o=new et),n[i++]=o.r,n[i++]=o.g,n[i++]=o.b}return this}copyVector2sArray(e){const n=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",r),o=new Je),n[i++]=o.x,n[i++]=o.y}return this}copyVector3sArray(e){const n=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",r),o=new $),n[i++]=o.x,n[i++]=o.y,n[i++]=o.z}return this}copyVector4sArray(e){const n=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",r),o=new xt),n[i++]=o.x,n[i++]=o.y,n[i++]=o.z,n[i++]=o.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)_o.fromBufferAttribute(this,n),_o.applyMatrix3(e),this.setXY(n,_o.x,_o.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)ft.fromBufferAttribute(this,n),ft.applyMatrix3(e),this.setXYZ(n,ft.x,ft.y,ft.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)ft.fromBufferAttribute(this,n),ft.applyMatrix4(e),this.setXYZ(n,ft.x,ft.y,ft.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)ft.fromBufferAttribute(this,n),ft.applyNormalMatrix(e),this.setXYZ(n,ft.x,ft.y,ft.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)ft.fromBufferAttribute(this,n),ft.transformDirection(e),this.setXYZ(n,ft.x,ft.y,ft.z);return this}set(e,n=0){return this.array.set(e,n),this}getX(e){return this.array[e*this.itemSize]}setX(e,n){return this.array[e*this.itemSize]=n,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,n){return this.array[e*this.itemSize+1]=n,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,n){return this.array[e*this.itemSize+2]=n,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,n){return this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Gf&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Xp extends Tn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Zp extends Tn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Ln extends Tn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let vb=0;const qt=new Mt,il=new _n,br=new $,kt=new Xs,ds=new Xs,vt=new $;class Mi extends ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vb++}),this.uuid=qs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Hp(e)?Zp:Xp)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Kt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return qt.makeRotationFromQuaternion(e),this.applyMatrix4(qt),this}rotateX(e){return qt.makeRotationX(e),this.applyMatrix4(qt),this}rotateY(e){return qt.makeRotationY(e),this.applyMatrix4(qt),this}rotateZ(e){return qt.makeRotationZ(e),this.applyMatrix4(qt),this}translate(e,n,i){return qt.makeTranslation(e,n,i),this.applyMatrix4(qt),this}scale(e,n,i){return qt.makeScale(e,n,i),this.applyMatrix4(qt),this}lookAt(e){return il.lookAt(e),il.updateMatrix(),this.applyMatrix4(il.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(br).negate(),this.translate(br.x,br.y,br.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ln(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xs);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];kt.setFromBufferAttribute(s),this.morphTargetsRelative?(vt.addVectors(this.boundingBox.min,kt.min),this.boundingBox.expandByPoint(vt),vt.addVectors(this.boundingBox.max,kt.max),this.boundingBox.expandByPoint(vt)):(this.boundingBox.expandByPoint(kt.min),this.boundingBox.expandByPoint(kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new $,1/0);return}if(e){const i=this.boundingSphere.center;if(kt.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];ds.setFromBufferAttribute(a),this.morphTargetsRelative?(vt.addVectors(kt.min,ds.min),kt.expandByPoint(vt),vt.addVectors(kt.max,ds.max),kt.expandByPoint(vt)):(kt.expandByPoint(ds.min),kt.expandByPoint(ds.max))}kt.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)vt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(vt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)vt.fromBufferAttribute(a,c),l&&(br.fromBufferAttribute(e,c),vt.add(br)),r=Math.max(r,i.distanceToSquared(vt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Tn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let D=0;D<a;D++)c[D]=new $,u[D]=new $;const f=new $,d=new $,p=new $,g=new Je,m=new Je,h=new Je,v=new $,x=new $;function M(D,B,V){f.fromArray(r,D*3),d.fromArray(r,B*3),p.fromArray(r,V*3),g.fromArray(o,D*2),m.fromArray(o,B*2),h.fromArray(o,V*2),d.sub(f),p.sub(f),m.sub(g),h.sub(g);const Z=1/(m.x*h.y-h.x*m.y);!isFinite(Z)||(v.copy(d).multiplyScalar(h.y).addScaledVector(p,-m.y).multiplyScalar(Z),x.copy(p).multiplyScalar(m.x).addScaledVector(d,-h.x).multiplyScalar(Z),c[D].add(v),c[B].add(v),c[V].add(v),u[D].add(x),u[B].add(x),u[V].add(x))}let w=this.groups;w.length===0&&(w=[{start:0,count:i.length}]);for(let D=0,B=w.length;D<B;++D){const V=w[D],Z=V.start,N=V.count;for(let ne=Z,z=Z+N;ne<z;ne+=3)M(i[ne+0],i[ne+1],i[ne+2])}const b=new $,T=new $,L=new $,_=new $;function E(D){L.fromArray(s,D*3),_.copy(L);const B=c[D];b.copy(B),b.sub(L.multiplyScalar(L.dot(B))).normalize(),T.crossVectors(_,B);const Z=T.dot(u[D])<0?-1:1;l[D*4]=b.x,l[D*4+1]=b.y,l[D*4+2]=b.z,l[D*4+3]=Z}for(let D=0,B=w.length;D<B;++D){const V=w[D],Z=V.start,N=V.count;for(let ne=Z,z=Z+N;ne<z;ne+=3)E(i[ne+0]),E(i[ne+1]),E(i[ne+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Tn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new $,s=new $,o=new $,a=new $,l=new $,c=new $,u=new $,f=new $;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),m=e.getX(d+1),h=e.getX(d+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,m),o.fromBufferAttribute(n,h),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,m),c.fromBufferAttribute(i,h),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(m,l.x,l.y,l.z),i.setXYZ(h,c.x,c.y,c.z)}else for(let d=0,p=n.count;d<p;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(e,n){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}n===void 0&&(n=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const i=this.attributes;for(const r in i){if(e.attributes[r]===void 0)continue;const o=i[r].array,a=e.attributes[r],l=a.array,c=a.itemSize*n,u=Math.min(l.length,o.length-c);for(let f=0,d=c;f<u;f++,d++)o[d]=l[f]}return this}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)vt.fromBufferAttribute(e,n),vt.normalize(),e.setXYZ(n,vt.x,vt.y,vt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let p=0,g=0;for(let m=0,h=l.length;m<h;m++){a.isInterleavedBufferAttribute?p=l[m]*a.data.stride+a.offset:p=l[m]*u;for(let v=0;v<u;v++)d[g++]=c[p++]}return new Tn(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Mi,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],p=e(d,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,p=f.length;d<p;d++)u.push(f[d].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const td=new Mt,Sr=new cb,rl=new Fc,si=new $,oi=new $,ai=new $,sl=new $,ol=new $,al=new $,xo=new $,yo=new $,bo=new $,So=new Je,Mo=new Je,wo=new Je,ll=new $,Ao=new $;class Gn extends _n{constructor(e=new Mi,n=new Nc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),rl.copy(i.boundingSphere),rl.applyMatrix4(s),e.ray.intersectsSphere(rl)===!1)||(td.copy(s).invert(),Sr.copy(e.ray).applyMatrix4(td),i.boundingBox!==null&&Sr.intersectsBox(i.boundingBox)===!1))return;let o;const a=i.index,l=i.attributes.position,c=i.morphAttributes.position,u=i.morphTargetsRelative,f=i.attributes.uv,d=i.attributes.uv2,p=i.groups,g=i.drawRange;if(a!==null)if(Array.isArray(r))for(let m=0,h=p.length;m<h;m++){const v=p[m],x=r[v.materialIndex],M=Math.max(v.start,g.start),w=Math.min(a.count,Math.min(v.start+v.count,g.start+g.count));for(let b=M,T=w;b<T;b+=3){const L=a.getX(b),_=a.getX(b+1),E=a.getX(b+2);o=Eo(this,x,e,Sr,l,c,u,f,d,L,_,E),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=v.materialIndex,n.push(o))}}else{const m=Math.max(0,g.start),h=Math.min(a.count,g.start+g.count);for(let v=m,x=h;v<x;v+=3){const M=a.getX(v),w=a.getX(v+1),b=a.getX(v+2);o=Eo(this,r,e,Sr,l,c,u,f,d,M,w,b),o&&(o.faceIndex=Math.floor(v/3),n.push(o))}}else if(l!==void 0)if(Array.isArray(r))for(let m=0,h=p.length;m<h;m++){const v=p[m],x=r[v.materialIndex],M=Math.max(v.start,g.start),w=Math.min(l.count,Math.min(v.start+v.count,g.start+g.count));for(let b=M,T=w;b<T;b+=3){const L=b,_=b+1,E=b+2;o=Eo(this,x,e,Sr,l,c,u,f,d,L,_,E),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=v.materialIndex,n.push(o))}}else{const m=Math.max(0,g.start),h=Math.min(l.count,g.start+g.count);for(let v=m,x=h;v<x;v+=3){const M=v,w=v+1,b=v+2;o=Eo(this,r,e,Sr,l,c,u,f,d,M,w,b),o&&(o.faceIndex=Math.floor(v/3),n.push(o))}}}}function _b(t,e,n,i,r,s,o,a){let l;if(e.side===pn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side!==Vr,a),l===null)return null;Ao.copy(a),Ao.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Ao);return c<n.near||c>n.far?null:{distance:c,point:Ao.clone(),object:t}}function Eo(t,e,n,i,r,s,o,a,l,c,u,f){si.fromBufferAttribute(r,c),oi.fromBufferAttribute(r,u),ai.fromBufferAttribute(r,f);const d=t.morphTargetInfluences;if(s&&d){xo.set(0,0,0),yo.set(0,0,0),bo.set(0,0,0);for(let g=0,m=s.length;g<m;g++){const h=d[g],v=s[g];h!==0&&(sl.fromBufferAttribute(v,c),ol.fromBufferAttribute(v,u),al.fromBufferAttribute(v,f),o?(xo.addScaledVector(sl,h),yo.addScaledVector(ol,h),bo.addScaledVector(al,h)):(xo.addScaledVector(sl.sub(si),h),yo.addScaledVector(ol.sub(oi),h),bo.addScaledVector(al.sub(ai),h)))}si.add(xo),oi.add(yo),ai.add(bo)}t.isSkinnedMesh&&(t.boneTransform(c,si),t.boneTransform(u,oi),t.boneTransform(f,ai));const p=_b(t,e,n,i,si,oi,ai,ll);if(p){a&&(So.fromBufferAttribute(a,c),Mo.fromBufferAttribute(a,u),wo.fromBufferAttribute(a,f),p.uv=Un.getUV(ll,si,oi,ai,So,Mo,wo,new Je)),l&&(So.fromBufferAttribute(l,c),Mo.fromBufferAttribute(l,u),wo.fromBufferAttribute(l,f),p.uv2=Un.getUV(ll,si,oi,ai,So,Mo,wo,new Je));const g={a:c,b:u,c:f,normal:new $,materialIndex:0};Un.getNormal(si,oi,ai,g.normal),p.face=g}return p}class Ks extends Mi{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,p=0;g("z","y","x",-1,-1,i,n,e,o,s,0),g("z","y","x",1,-1,i,n,-e,o,s,1),g("x","z","y",1,1,e,i,n,r,o,2),g("x","z","y",1,-1,e,i,-n,r,o,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Ln(c,3)),this.setAttribute("normal",new Ln(u,3)),this.setAttribute("uv",new Ln(f,2));function g(m,h,v,x,M,w,b,T,L,_,E){const D=w/L,B=b/_,V=w/2,Z=b/2,N=T/2,ne=L+1,z=_+1;let X=0,Y=0;const G=new $;for(let J=0;J<z;J++){const ue=J*B-Z;for(let le=0;le<ne;le++){const ae=le*D-V;G[m]=ae*x,G[h]=ue*M,G[v]=N,c.push(G.x,G.y,G.z),G[m]=0,G[h]=0,G[v]=T>0?1:-1,u.push(G.x,G.y,G.z),f.push(le/L),f.push(1-J/_),X+=1}}for(let J=0;J<_;J++)for(let ue=0;ue<L;ue++){const le=d+ue+ne*J,ae=d+ue+ne*(J+1),Me=d+(ue+1)+ne*(J+1),O=d+(ue+1)+ne*J;l.push(le,ae,O),l.push(ae,Me,O),Y+=6}a.addGroup(p,Y,E),p+=Y,d+=X}}static fromJSON(e){return new Ks(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Yr(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function At(t){const e={};for(let n=0;n<t.length;n++){const i=Yr(t[n]);for(const r in i)e[r]=i[r]}return e}function xb(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}const yb={clone:Yr,merge:At};var bb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qi extends _a{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bb,this.fragmentShader=Sb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Yr(e.uniforms),this.uniformsGroups=xb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Kp extends _n{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mt,this.projectionMatrix=new Mt,this.projectionMatrixInverse=new Mt}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(-n[8],-n[9],-n[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Xt extends Kp{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Hf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ga*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Hf*2*Math.atan(Math.tan(Ga*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ga*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Mr=90,wr=1;class Mb extends _n{constructor(e,n,i){if(super(),this.type="CubeCamera",i.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=i;const r=new Xt(Mr,wr,e,n);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new $(1,0,0)),this.add(r);const s=new Xt(Mr,wr,e,n);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new $(-1,0,0)),this.add(s);const o=new Xt(Mr,wr,e,n);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new $(0,1,0)),this.add(o);const a=new Xt(Mr,wr,e,n);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new $(0,-1,0)),this.add(a);const l=new Xt(Mr,wr,e,n);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new $(0,0,1)),this.add(l);const c=new Xt(Mr,wr,e,n);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new $(0,0,-1)),this.add(c)}update(e,n){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,s,o,a,l,c]=this.children,u=e.getRenderTarget(),f=e.toneMapping,d=e.xr.enabled;e.toneMapping=Hn,e.xr.enabled=!1;const p=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(n,r),e.setRenderTarget(i,1),e.render(n,s),e.setRenderTarget(i,2),e.render(n,o),e.setRenderTarget(i,3),e.render(n,a),e.setRenderTarget(i,4),e.render(n,l),i.texture.generateMipmaps=p,e.setRenderTarget(i,5),e.render(n,c),e.setRenderTarget(u),e.toneMapping=f,e.xr.enabled=d,i.texture.needsPMREMUpdate=!0}}class Qp extends vn{constructor(e,n,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:Hr,super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class wb extends Ki{constructor(e,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Qp(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:jt}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.encoding=n.encoding,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ks(5,5,5),s=new Qi({name:"CubemapFromEquirect",uniforms:Yr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:pn,blending:pi});s.uniforms.tEquirect.value=n;const o=new Gn(r,s),a=n.minFilter;return n.minFilter===va&&(n.minFilter=jt),new Mb(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const cl=new $,Ab=new $,Eb=new Kt;class Ii{constructor(e=new $(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=cl.subVectors(i,n).cross(Ab.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,n){const i=e.delta(cl),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(i).multiplyScalar(s).add(e.start)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Eb.getNormalMatrix(e),r=this.coplanarPoint(cl).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ar=new Fc,Co=new $;class Jp{constructor(e=new Ii,n=new Ii,i=new Ii,r=new Ii,s=new Ii,o=new Ii){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const n=this.planes,i=e.elements,r=i[0],s=i[1],o=i[2],a=i[3],l=i[4],c=i[5],u=i[6],f=i[7],d=i[8],p=i[9],g=i[10],m=i[11],h=i[12],v=i[13],x=i[14],M=i[15];return n[0].setComponents(a-r,f-l,m-d,M-h).normalize(),n[1].setComponents(a+r,f+l,m+d,M+h).normalize(),n[2].setComponents(a+s,f+c,m+p,M+v).normalize(),n[3].setComponents(a-s,f-c,m-p,M-v).normalize(),n[4].setComponents(a-o,f-u,m-g,M-x).normalize(),n[5].setComponents(a+o,f+u,m+g,M+x).normalize(),this}intersectsObject(e){const n=e.geometry;return n.boundingSphere===null&&n.computeBoundingSphere(),Ar.copy(n.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Ar)}intersectsSprite(e){return Ar.center.set(0,0,0),Ar.radius=.7071067811865476,Ar.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ar)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Co.x=r.normal.x>0?e.max.x:e.min.x,Co.y=r.normal.y>0?e.max.y:e.min.y,Co.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Co)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function em(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function Cb(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,u){const f=c.array,d=c.usage,p=t.createBuffer();t.bindBuffer(u,p),t.bufferData(u,f,d),c.onUploadCallback();let g;if(f instanceof Float32Array)g=5126;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(f instanceof Int16Array)g=5122;else if(f instanceof Uint32Array)g=5125;else if(f instanceof Int32Array)g=5124;else if(f instanceof Int8Array)g=5120;else if(f instanceof Uint8Array)g=5121;else if(f instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:p,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,f){const d=u.array,p=u.updateRange;t.bindBuffer(f,c),p.count===-1?t.bufferSubData(f,0,d):(n?t.bufferSubData(f,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):t.bufferSubData(f,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1)}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(t.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f===void 0?i.set(c,r(c,u)):f.version<c.version&&(s(f.buffer,c,u),f.version=c.version)}return{get:o,remove:a,update:l}}class Bc extends Mi{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,d=n/l,p=[],g=[],m=[],h=[];for(let v=0;v<u;v++){const x=v*d-o;for(let M=0;M<c;M++){const w=M*f-s;g.push(w,-x,0),m.push(0,0,1),h.push(M/a),h.push(1-v/l)}}for(let v=0;v<l;v++)for(let x=0;x<a;x++){const M=x+c*v,w=x+c*(v+1),b=x+1+c*(v+1),T=x+1+c*v;p.push(M,w,T),p.push(w,b,T)}this.setIndex(p),this.setAttribute("position",new Ln(g,3)),this.setAttribute("normal",new Ln(m,3)),this.setAttribute("uv",new Ln(h,2))}static fromJSON(e){return new Bc(e.width,e.height,e.widthSegments,e.heightSegments)}}var Tb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Lb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pb=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Db=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Rb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ib=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Fb="vec3 transformed = vec3( position );",Nb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Bb=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,Ob=`#ifdef USE_IRIDESCENCE
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
#endif`,kb=`#ifdef USE_BUMPMAP
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
#endif`,zb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ub=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Vb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Wb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$b=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Yb=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,qb=`#define PI 3.141592653589793
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
}`,jb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Xb=`vec3 transformedNormal = objectNormal;
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
#endif`,Zb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Kb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Qb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Jb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,eS="gl_FragColor = linearToOutputTexel( gl_FragColor );",tS=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,nS=`#ifdef USE_ENVMAP
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
#endif`,iS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,rS=`#ifdef USE_ENVMAP
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
#endif`,sS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,oS=`#ifdef USE_ENVMAP
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
#endif`,aS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,uS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fS=`#ifdef USE_GRADIENTMAP
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
}`,dS=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,hS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pS=`vec3 diffuse = vec3( 1.0 );
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
#endif`,mS=`uniform bool receiveShadow;
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
#endif`,gS=`#if defined( USE_ENVMAP )
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
#endif`,vS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_S=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,xS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yS=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,bS=`PhysicalMaterial material;
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
#endif`,SS=`struct PhysicalMaterial {
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
}`,MS=`
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
#endif`,wS=`#if defined( RE_IndirectDiffuse )
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
#endif`,AS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,ES=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,CS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,TS=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,LS=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,PS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,DS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,RS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,IS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,FS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,NS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,BS=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,OS=`#ifdef USE_MORPHNORMALS
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
#endif`,kS=`#ifdef USE_MORPHTARGETS
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
#endif`,zS=`#ifdef USE_MORPHTARGETS
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
#endif`,US=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,GS=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,VS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,HS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,WS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$S=`#ifdef USE_NORMALMAP
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
#endif`,YS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,qS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,jS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,XS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ZS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,KS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,QS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,JS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,eM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,tM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,iM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rM=`#ifdef USE_SHADOWMAP
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
#endif`,sM=`#ifdef USE_SHADOWMAP
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
#endif`,oM=`#ifdef USE_SHADOWMAP
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
#endif`,aM=`float getShadowMask() {
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
}`,lM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cM=`#ifdef USE_SKINNING
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
#endif`,uM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fM=`#ifdef USE_SKINNING
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
#endif`,dM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,gM=`#ifdef USE_TRANSMISSION
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
#endif`,vM=`#ifdef USE_TRANSMISSION
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
#endif`,_M=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,xM=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,yM=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,bM=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,SM=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,MM=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,wM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const AM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,EM=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,CM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,TM=`#include <envmap_common_pars_fragment>
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
}`,LM=`#include <common>
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
}`,PM=`#if DEPTH_PACKING == 3200
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
}`,DM=`#define DISTANCE
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
}`,RM=`#define DISTANCE
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
}`,IM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,FM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,NM=`uniform float scale;
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
}`,BM=`uniform vec3 diffuse;
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
}`,OM=`#include <common>
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
}`,kM=`uniform vec3 diffuse;
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
}`,zM=`#define LAMBERT
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
}`,UM=`uniform vec3 diffuse;
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
}`,GM=`#define MATCAP
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
}`,VM=`#define MATCAP
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
}`,HM=`#define NORMAL
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
}`,WM=`#define NORMAL
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
}`,$M=`#define PHONG
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
}`,YM=`#define PHONG
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
}`,qM=`#define STANDARD
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
}`,jM=`#define STANDARD
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
}`,XM=`#define TOON
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
}`,ZM=`#define TOON
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
}`,KM=`uniform float size;
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
}`,QM=`uniform vec3 diffuse;
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
}`,JM=`#include <common>
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
}`,ew=`uniform vec3 color;
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
}`,tw=`uniform float rotation;
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
}`,nw=`uniform vec3 diffuse;
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
}`,ke={alphamap_fragment:Tb,alphamap_pars_fragment:Lb,alphatest_fragment:Pb,alphatest_pars_fragment:Db,aomap_fragment:Rb,aomap_pars_fragment:Ib,begin_vertex:Fb,beginnormal_vertex:Nb,bsdfs:Bb,iridescence_fragment:Ob,bumpmap_pars_fragment:kb,clipping_planes_fragment:zb,clipping_planes_pars_fragment:Ub,clipping_planes_pars_vertex:Gb,clipping_planes_vertex:Vb,color_fragment:Hb,color_pars_fragment:Wb,color_pars_vertex:$b,color_vertex:Yb,common:qb,cube_uv_reflection_fragment:jb,defaultnormal_vertex:Xb,displacementmap_pars_vertex:Zb,displacementmap_vertex:Kb,emissivemap_fragment:Qb,emissivemap_pars_fragment:Jb,encodings_fragment:eS,encodings_pars_fragment:tS,envmap_fragment:nS,envmap_common_pars_fragment:iS,envmap_pars_fragment:rS,envmap_pars_vertex:sS,envmap_physical_pars_fragment:gS,envmap_vertex:oS,fog_vertex:aS,fog_pars_vertex:lS,fog_fragment:cS,fog_pars_fragment:uS,gradientmap_pars_fragment:fS,lightmap_fragment:dS,lightmap_pars_fragment:hS,lights_lambert_vertex:pS,lights_pars_begin:mS,lights_toon_fragment:vS,lights_toon_pars_fragment:_S,lights_phong_fragment:xS,lights_phong_pars_fragment:yS,lights_physical_fragment:bS,lights_physical_pars_fragment:SS,lights_fragment_begin:MS,lights_fragment_maps:wS,lights_fragment_end:AS,logdepthbuf_fragment:ES,logdepthbuf_pars_fragment:CS,logdepthbuf_pars_vertex:TS,logdepthbuf_vertex:LS,map_fragment:PS,map_pars_fragment:DS,map_particle_fragment:RS,map_particle_pars_fragment:IS,metalnessmap_fragment:FS,metalnessmap_pars_fragment:NS,morphcolor_vertex:BS,morphnormal_vertex:OS,morphtarget_pars_vertex:kS,morphtarget_vertex:zS,normal_fragment_begin:US,normal_fragment_maps:GS,normal_pars_fragment:VS,normal_pars_vertex:HS,normal_vertex:WS,normalmap_pars_fragment:$S,clearcoat_normal_fragment_begin:YS,clearcoat_normal_fragment_maps:qS,clearcoat_pars_fragment:jS,iridescence_pars_fragment:XS,output_fragment:ZS,packing:KS,premultiplied_alpha_fragment:QS,project_vertex:JS,dithering_fragment:eM,dithering_pars_fragment:tM,roughnessmap_fragment:nM,roughnessmap_pars_fragment:iM,shadowmap_pars_fragment:rM,shadowmap_pars_vertex:sM,shadowmap_vertex:oM,shadowmask_pars_fragment:aM,skinbase_vertex:lM,skinning_pars_vertex:cM,skinning_vertex:uM,skinnormal_vertex:fM,specularmap_fragment:dM,specularmap_pars_fragment:hM,tonemapping_fragment:pM,tonemapping_pars_fragment:mM,transmission_fragment:gM,transmission_pars_fragment:vM,uv_pars_fragment:_M,uv_pars_vertex:xM,uv_vertex:yM,uv2_pars_fragment:bM,uv2_pars_vertex:SM,uv2_vertex:MM,worldpos_vertex:wM,background_vert:AM,background_frag:EM,cube_vert:CM,cube_frag:TM,depth_vert:LM,depth_frag:PM,distanceRGBA_vert:DM,distanceRGBA_frag:RM,equirect_vert:IM,equirect_frag:FM,linedashed_vert:NM,linedashed_frag:BM,meshbasic_vert:OM,meshbasic_frag:kM,meshlambert_vert:zM,meshlambert_frag:UM,meshmatcap_vert:GM,meshmatcap_frag:VM,meshnormal_vert:HM,meshnormal_frag:WM,meshphong_vert:$M,meshphong_frag:YM,meshphysical_vert:qM,meshphysical_frag:jM,meshtoon_vert:XM,meshtoon_frag:ZM,points_vert:KM,points_frag:QM,shadow_vert:JM,shadow_frag:ew,sprite_vert:tw,sprite_frag:nw},xe={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Kt},uv2Transform:{value:new Kt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Je(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Kt}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new Je(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Kt}}},An={basic:{uniforms:At([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:At([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.fog,xe.lights,{emissive:{value:new et(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:At([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:At([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:At([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new et(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:At([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:At([xe.points,xe.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:At([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:At([xe.common,xe.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:At([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:At([xe.sprite,xe.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Kt},t2D:{value:null}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},cube:{uniforms:At([xe.envmap,{opacity:{value:1}}]),vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:At([xe.common,xe.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:At([xe.lights,xe.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};An.physical={uniforms:At([An.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Je(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};function iw(t,e,n,i,r,s){const o=new et(0);let a=r===!0?0:1,l,c,u=null,f=0,d=null;function p(m,h){let v=!1,x=h.isScene===!0?h.background:null;x&&x.isTexture&&(x=e.get(x));const M=t.xr,w=M.getSession&&M.getSession();w&&w.environmentBlendMode==="additive"&&(x=null),x===null?g(o,a):x&&x.isColor&&(g(x,1),v=!0),(t.autoClear||v)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),x&&(x.isCubeTexture||x.mapping===ga)?(c===void 0&&(c=new Gn(new Ks(1,1,1),new Qi({name:"BackgroundCubeMaterial",uniforms:Yr(An.cube.uniforms),vertexShader:An.cube.vertexShader,fragmentShader:An.cube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,T,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,(u!==x||f!==x.version||d!==t.toneMapping)&&(c.material.needsUpdate=!0,u=x,f=x.version,d=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Gn(new Bc(2,2),new Qi({name:"BackgroundMaterial",uniforms:Yr(An.background.uniforms),vertexShader:An.background.vertexShader,fragmentShader:An.background.fragmentShader,side:zs,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||f!==x.version||d!==t.toneMapping)&&(l.material.needsUpdate=!0,u=x,f=x.version,d=t.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function g(m,h){n.buffers.color.setClear(m.r,m.g,m.b,h,s)}return{getClearColor:function(){return o},setClearColor:function(m,h=1){o.set(m),a=h,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(m){a=m,g(o,a)},render:p}}function rw(t,e,n,i){const r=t.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=h(null);let c=l,u=!1;function f(N,ne,z,X,Y){let G=!1;if(o){const J=m(X,z,ne);c!==J&&(c=J,p(c.object)),G=v(N,X,z,Y),G&&x(N,X,z,Y)}else{const J=ne.wireframe===!0;(c.geometry!==X.id||c.program!==z.id||c.wireframe!==J)&&(c.geometry=X.id,c.program=z.id,c.wireframe=J,G=!0)}Y!==null&&n.update(Y,34963),(G||u)&&(u=!1,_(N,ne,z,X),Y!==null&&t.bindBuffer(34963,n.get(Y).buffer))}function d(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function p(N){return i.isWebGL2?t.bindVertexArray(N):s.bindVertexArrayOES(N)}function g(N){return i.isWebGL2?t.deleteVertexArray(N):s.deleteVertexArrayOES(N)}function m(N,ne,z){const X=z.wireframe===!0;let Y=a[N.id];Y===void 0&&(Y={},a[N.id]=Y);let G=Y[ne.id];G===void 0&&(G={},Y[ne.id]=G);let J=G[X];return J===void 0&&(J=h(d()),G[X]=J),J}function h(N){const ne=[],z=[],X=[];for(let Y=0;Y<r;Y++)ne[Y]=0,z[Y]=0,X[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ne,enabledAttributes:z,attributeDivisors:X,object:N,attributes:{},index:null}}function v(N,ne,z,X){const Y=c.attributes,G=ne.attributes;let J=0;const ue=z.getAttributes();for(const le in ue)if(ue[le].location>=0){const Me=Y[le];let O=G[le];if(O===void 0&&(le==="instanceMatrix"&&N.instanceMatrix&&(O=N.instanceMatrix),le==="instanceColor"&&N.instanceColor&&(O=N.instanceColor)),Me===void 0||Me.attribute!==O||O&&Me.data!==O.data)return!0;J++}return c.attributesNum!==J||c.index!==X}function x(N,ne,z,X){const Y={},G=ne.attributes;let J=0;const ue=z.getAttributes();for(const le in ue)if(ue[le].location>=0){let Me=G[le];Me===void 0&&(le==="instanceMatrix"&&N.instanceMatrix&&(Me=N.instanceMatrix),le==="instanceColor"&&N.instanceColor&&(Me=N.instanceColor));const O={};O.attribute=Me,Me&&Me.data&&(O.data=Me.data),Y[le]=O,J++}c.attributes=Y,c.attributesNum=J,c.index=X}function M(){const N=c.newAttributes;for(let ne=0,z=N.length;ne<z;ne++)N[ne]=0}function w(N){b(N,0)}function b(N,ne){const z=c.newAttributes,X=c.enabledAttributes,Y=c.attributeDivisors;z[N]=1,X[N]===0&&(t.enableVertexAttribArray(N),X[N]=1),Y[N]!==ne&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,ne),Y[N]=ne)}function T(){const N=c.newAttributes,ne=c.enabledAttributes;for(let z=0,X=ne.length;z<X;z++)ne[z]!==N[z]&&(t.disableVertexAttribArray(z),ne[z]=0)}function L(N,ne,z,X,Y,G){i.isWebGL2===!0&&(z===5124||z===5125)?t.vertexAttribIPointer(N,ne,z,Y,G):t.vertexAttribPointer(N,ne,z,X,Y,G)}function _(N,ne,z,X){if(i.isWebGL2===!1&&(N.isInstancedMesh||X.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;M();const Y=X.attributes,G=z.getAttributes(),J=ne.defaultAttributeValues;for(const ue in G){const le=G[ue];if(le.location>=0){let ae=Y[ue];if(ae===void 0&&(ue==="instanceMatrix"&&N.instanceMatrix&&(ae=N.instanceMatrix),ue==="instanceColor"&&N.instanceColor&&(ae=N.instanceColor)),ae!==void 0){const Me=ae.normalized,O=ae.itemSize,F=n.get(ae);if(F===void 0)continue;const se=F.buffer,fe=F.type,be=F.bytesPerElement;if(ae.isInterleavedBufferAttribute){const ge=ae.data,Ce=ge.stride,ve=ae.offset;if(ge.isInstancedInterleavedBuffer){for(let A=0;A<le.locationSize;A++)b(le.location+A,ge.meshPerAttribute);N.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let A=0;A<le.locationSize;A++)w(le.location+A);t.bindBuffer(34962,se);for(let A=0;A<le.locationSize;A++)L(le.location+A,O/le.locationSize,fe,Me,Ce*be,(ve+O/le.locationSize*A)*be)}else{if(ae.isInstancedBufferAttribute){for(let ge=0;ge<le.locationSize;ge++)b(le.location+ge,ae.meshPerAttribute);N.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let ge=0;ge<le.locationSize;ge++)w(le.location+ge);t.bindBuffer(34962,se);for(let ge=0;ge<le.locationSize;ge++)L(le.location+ge,O/le.locationSize,fe,Me,O*be,O/le.locationSize*ge*be)}}else if(J!==void 0){const Me=J[ue];if(Me!==void 0)switch(Me.length){case 2:t.vertexAttrib2fv(le.location,Me);break;case 3:t.vertexAttrib3fv(le.location,Me);break;case 4:t.vertexAttrib4fv(le.location,Me);break;default:t.vertexAttrib1fv(le.location,Me)}}}}T()}function E(){V();for(const N in a){const ne=a[N];for(const z in ne){const X=ne[z];for(const Y in X)g(X[Y].object),delete X[Y];delete ne[z]}delete a[N]}}function D(N){if(a[N.id]===void 0)return;const ne=a[N.id];for(const z in ne){const X=ne[z];for(const Y in X)g(X[Y].object),delete X[Y];delete ne[z]}delete a[N.id]}function B(N){for(const ne in a){const z=a[ne];if(z[N.id]===void 0)continue;const X=z[N.id];for(const Y in X)g(X[Y].object),delete X[Y];delete z[N.id]}}function V(){Z(),u=!0,c!==l&&(c=l,p(c.object))}function Z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:V,resetDefaultState:Z,dispose:E,releaseStatesOfGeometry:D,releaseStatesOfProgram:B,initAttributes:M,enableAttribute:w,disableUnusedAttributes:T}}function sw(t,e,n,i){const r=i.isWebGL2;let s;function o(c){s=c}function a(c,u){t.drawArrays(s,c,u),n.update(u,s,1)}function l(c,u,f){if(f===0)return;let d,p;if(r)d=t,p="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](s,c,u,f),n.update(u,s,f)}this.setMode=o,this.render=a,this.renderInstances=l}function ow(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(L){if(L==="highp"){if(t.getShaderPrecisionFormat(35633,36338).precision>0&&t.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";L="mediump"}return L==="mediump"&&t.getShaderPrecisionFormat(35633,36337).precision>0&&t.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&t instanceof WebGL2ComputeRenderingContext;let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=n.logarithmicDepthBuffer===!0,f=t.getParameter(34930),d=t.getParameter(35660),p=t.getParameter(3379),g=t.getParameter(34076),m=t.getParameter(34921),h=t.getParameter(36347),v=t.getParameter(36348),x=t.getParameter(36349),M=d>0,w=o||e.has("OES_texture_float"),b=M&&w,T=o?t.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:h,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:M,floatFragmentTextures:w,floatVertexTextures:b,maxSamples:T}}function aw(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Ii,a=new Kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d,p){const g=f.length!==0||d||i!==0||r;return r=d,n=u(f,p,0),i=f.length,g},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,c()},this.setState=function(f,d,p){const g=f.clippingPlanes,m=f.clipIntersection,h=f.clipShadows,v=t.get(f);if(!r||g===null||g.length===0||s&&!h)s?u(null):c();else{const x=s?0:i,M=x*4;let w=v.clippingState||null;l.value=w,w=u(g,d,M,p);for(let b=0;b!==M;++b)w[b]=n[b];v.clippingState=w,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,p,g){const m=f!==null?f.length:0;let h=null;if(m!==0){if(h=l.value,g!==!0||h===null){const v=p+m*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(h===null||h.length<v)&&(h=new Float32Array(v));for(let M=0,w=p;M!==m;++M,w+=4)o.copy(f[M]).applyMatrix4(x,a),o.normal.toArray(h,w),h[w+3]=o.constant}l.value=h,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,h}}function lw(t){let e=new WeakMap;function n(o,a){return a===Hl?o.mapping=Hr:a===Wl&&(o.mapping=Wr),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Hl||a===Wl)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new wb(l.height/2);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class cw extends Kp{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Dr=4,nd=[.125,.215,.35,.446,.526,.582],ki=20,ul=new cw,id=new et;let fl=null;const Fi=(1+Math.sqrt(5))/2,Er=1/Fi,rd=[new $(1,1,1),new $(-1,1,1),new $(1,1,-1),new $(-1,1,-1),new $(0,Fi,Er),new $(0,Fi,-Er),new $(Er,0,Fi),new $(-Er,0,Fi),new $(Fi,Er,0),new $(-Fi,Er,0)];class sd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){fl=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ld(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ad(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(fl),e.scissorTest=!1,To(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Hr||e.mapping===Wr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),fl=this._renderer.getRenderTarget();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:jt,minFilter:jt,generateMipmaps:!1,type:Us,format:En,encoding:Zi,depthBuffer:!1},r=od(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=od(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=uw(s)),this._blurMaterial=fw(s,e,n)}return r}_compileMaterial(e){const n=new Gn(this._lodPlanes[0],e);this._renderer.compile(n,ul)}_sceneToCubeUV(e,n,i,r){const a=new Xt(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(id),u.toneMapping=Hn,u.autoClear=!1;const p=new Nc({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1}),g=new Gn(new Ks,p);let m=!1;const h=e.background;h?h.isColor&&(p.color.copy(h),e.background=null,m=!0):(p.color.copy(id),m=!0);for(let v=0;v<6;v++){const x=v%3;x===0?(a.up.set(0,l[v],0),a.lookAt(c[v],0,0)):x===1?(a.up.set(0,0,l[v]),a.lookAt(0,c[v],0)):(a.up.set(0,l[v],0),a.lookAt(0,0,c[v]));const M=this._cubeSize;To(r,x*M,v>2?M:0,M,M),u.setRenderTarget(r),m&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=h}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Hr||e.mapping===Wr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ld()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ad());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Gn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;To(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,ul)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=rd[(r-1)%rd.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Gn(this._lodPlanes[r],c),d=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*ki-1),m=s/g,h=isFinite(s)?1+Math.floor(u*m):ki;h>ki&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${ki}`);const v=[];let x=0;for(let L=0;L<ki;++L){const _=L/m,E=Math.exp(-_*_/2);v.push(E),L===0?x+=E:L<h&&(x+=2*E)}for(let L=0;L<v.length;L++)v[L]=v[L]/x;d.envMap.value=e.texture,d.samples.value=h,d.weights.value=v,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:M}=this;d.dTheta.value=g,d.mipInt.value=M-i;const w=this._sizeLods[r],b=3*w*(r>M-Dr?r-M+Dr:0),T=4*(this._cubeSize-w);To(n,b,T,3*w,2*w),l.setRenderTarget(n),l.render(f,ul)}}function uw(t){const e=[],n=[],i=[];let r=t;const s=t-Dr+1+nd.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Dr?l=nd[o-t+Dr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,g=6,m=3,h=2,v=1,x=new Float32Array(m*g*p),M=new Float32Array(h*g*p),w=new Float32Array(v*g*p);for(let T=0;T<p;T++){const L=T%3*2/3-1,_=T>2?0:-1,E=[L,_,0,L+2/3,_,0,L+2/3,_+1,0,L,_,0,L+2/3,_+1,0,L,_+1,0];x.set(E,m*g*T),M.set(d,h*g*T);const D=[T,T,T,T,T,T];w.set(D,v*g*T)}const b=new Mi;b.setAttribute("position",new Tn(x,m)),b.setAttribute("uv",new Tn(M,h)),b.setAttribute("faceIndex",new Tn(w,v)),e.push(b),r>Dr&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function od(t,e,n){const i=new Ki(t,e,n);return i.texture.mapping=ga,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function To(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function fw(t,e,n){const i=new Float32Array(ki),r=new $(0,1,0);return new Qi({name:"SphericalGaussianBlur",defines:{n:ki,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Oc(),fragmentShader:`

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
		`,blending:pi,depthTest:!1,depthWrite:!1})}function ad(){return new Qi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Oc(),fragmentShader:`

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
		`,blending:pi,depthTest:!1,depthWrite:!1})}function ld(){return new Qi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Oc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Oc(){return`

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
	`}function dw(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Hl||l===Wl,u=l===Hr||l===Wr;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return n===null&&(n=new sd(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||u&&f&&r(f)){n===null&&(n=new sd(t));const d=c?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function hw(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function pw(t,e,n,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const g in d)e.update(d[g],34962);const p=f.morphAttributes;for(const g in p){const m=p[g];for(let h=0,v=m.length;h<v;h++)e.update(m[h],34962)}}function c(f){const d=[],p=f.index,g=f.attributes.position;let m=0;if(p!==null){const x=p.array;m=p.version;for(let M=0,w=x.length;M<w;M+=3){const b=x[M+0],T=x[M+1],L=x[M+2];d.push(b,T,T,L,L,b)}}else{const x=g.array;m=g.version;for(let M=0,w=x.length/3-1;M<w;M+=3){const b=M+0,T=M+1,L=M+2;d.push(b,T,T,L,L,b)}}const h=new(Hp(d)?Zp:Xp)(d,1);h.version=m;const v=s.get(f);v&&e.remove(v),s.set(f,h)}function u(f){const d=s.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function mw(t,e,n,i){const r=i.isWebGL2;let s;function o(d){s=d}let a,l;function c(d){a=d.type,l=d.bytesPerElement}function u(d,p){t.drawElements(s,p,a,d*l),n.update(p,s,1)}function f(d,p,g){if(g===0)return;let m,h;if(r)m=t,h="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[h](s,p,a,d*l,g),n.update(p,s,g)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=f}function gw(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case 4:n.triangles+=a*(s/3);break;case 1:n.lines+=a*(s/2);break;case 3:n.lines+=a*(s-1);break;case 2:n.lines+=a*s;break;case 0:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.frame++,n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function vw(t,e){return t[0]-e[0]}function _w(t,e){return Math.abs(e[1])-Math.abs(t[1])}function dl(t,e){let n=1;const i=e.isInterleavedBufferAttribute?e.data.array:e.array;i instanceof Int8Array?n=127:i instanceof Uint8Array?n=255:i instanceof Uint16Array?n=65535:i instanceof Int16Array?n=32767:i instanceof Int32Array?n=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",i),t.divideScalar(n)}function xw(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new xt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,f,d){const p=c.morphTargetInfluences;if(e.isWebGL2===!0){const m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,h=m!==void 0?m.length:0;let v=s.get(u);if(v===void 0||v.count!==h){let z=function(){N.dispose(),s.delete(u),u.removeEventListener("dispose",z)};var g=z;v!==void 0&&v.texture.dispose();const w=u.morphAttributes.position!==void 0,b=u.morphAttributes.normal!==void 0,T=u.morphAttributes.color!==void 0,L=u.morphAttributes.position||[],_=u.morphAttributes.normal||[],E=u.morphAttributes.color||[];let D=0;w===!0&&(D=1),b===!0&&(D=2),T===!0&&(D=3);let B=u.attributes.position.count*D,V=1;B>e.maxTextureSize&&(V=Math.ceil(B/e.maxTextureSize),B=e.maxTextureSize);const Z=new Float32Array(B*V*4*h),N=new qp(Z,B,V,h);N.type=Gi,N.needsUpdate=!0;const ne=D*4;for(let X=0;X<h;X++){const Y=L[X],G=_[X],J=E[X],ue=B*V*4*X;for(let le=0;le<Y.count;le++){const ae=le*ne;w===!0&&(o.fromBufferAttribute(Y,le),Y.normalized===!0&&dl(o,Y),Z[ue+ae+0]=o.x,Z[ue+ae+1]=o.y,Z[ue+ae+2]=o.z,Z[ue+ae+3]=0),b===!0&&(o.fromBufferAttribute(G,le),G.normalized===!0&&dl(o,G),Z[ue+ae+4]=o.x,Z[ue+ae+5]=o.y,Z[ue+ae+6]=o.z,Z[ue+ae+7]=0),T===!0&&(o.fromBufferAttribute(J,le),J.normalized===!0&&dl(o,J),Z[ue+ae+8]=o.x,Z[ue+ae+9]=o.y,Z[ue+ae+10]=o.z,Z[ue+ae+11]=J.itemSize===4?o.w:1)}}v={count:h,texture:N,size:new Je(B,V)},s.set(u,v),u.addEventListener("dispose",z)}let x=0;for(let w=0;w<p.length;w++)x+=p[w];const M=u.morphTargetsRelative?1:1-x;d.getUniforms().setValue(t,"morphTargetBaseInfluence",M),d.getUniforms().setValue(t,"morphTargetInfluences",p),d.getUniforms().setValue(t,"morphTargetsTexture",v.texture,n),d.getUniforms().setValue(t,"morphTargetsTextureSize",v.size)}else{const m=p===void 0?0:p.length;let h=i[u.id];if(h===void 0||h.length!==m){h=[];for(let b=0;b<m;b++)h[b]=[b,0];i[u.id]=h}for(let b=0;b<m;b++){const T=h[b];T[0]=b,T[1]=p[b]}h.sort(_w);for(let b=0;b<8;b++)b<m&&h[b][1]?(a[b][0]=h[b][0],a[b][1]=h[b][1]):(a[b][0]=Number.MAX_SAFE_INTEGER,a[b][1]=0);a.sort(vw);const v=u.morphAttributes.position,x=u.morphAttributes.normal;let M=0;for(let b=0;b<8;b++){const T=a[b],L=T[0],_=T[1];L!==Number.MAX_SAFE_INTEGER&&_?(v&&u.getAttribute("morphTarget"+b)!==v[L]&&u.setAttribute("morphTarget"+b,v[L]),x&&u.getAttribute("morphNormal"+b)!==x[L]&&u.setAttribute("morphNormal"+b,x[L]),r[b]=_,M+=_):(v&&u.hasAttribute("morphTarget"+b)===!0&&u.deleteAttribute("morphTarget"+b),x&&u.hasAttribute("morphNormal"+b)===!0&&u.deleteAttribute("morphNormal"+b),r[b]=0)}const w=u.morphTargetsRelative?1:1-M;d.getUniforms().setValue(t,"morphTargetBaseInfluence",w),d.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function yw(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);return r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),n.update(l.instanceMatrix,34962),l.instanceColor!==null&&n.update(l.instanceColor,34962)),f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}const tm=new vn,nm=new qp,im=new ab,rm=new Qp,cd=[],ud=[],fd=new Float32Array(16),dd=new Float32Array(9),hd=new Float32Array(4);function ns(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=cd[r];if(s===void 0&&(s=new Float32Array(r),cd[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Pt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Dt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function xa(t,e){let n=ud[e];n===void 0&&(n=new Int32Array(e),ud[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function bw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Sw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Pt(n,e))return;t.uniform2fv(this.addr,e),Dt(n,e)}}function Mw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Pt(n,e))return;t.uniform3fv(this.addr,e),Dt(n,e)}}function ww(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Pt(n,e))return;t.uniform4fv(this.addr,e),Dt(n,e)}}function Aw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Pt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Dt(n,e)}else{if(Pt(n,i))return;hd.set(i),t.uniformMatrix2fv(this.addr,!1,hd),Dt(n,i)}}function Ew(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Pt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Dt(n,e)}else{if(Pt(n,i))return;dd.set(i),t.uniformMatrix3fv(this.addr,!1,dd),Dt(n,i)}}function Cw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Pt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Dt(n,e)}else{if(Pt(n,i))return;fd.set(i),t.uniformMatrix4fv(this.addr,!1,fd),Dt(n,i)}}function Tw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Lw(t,e){const n=this.cache;Pt(n,e)||(t.uniform2iv(this.addr,e),Dt(n,e))}function Pw(t,e){const n=this.cache;Pt(n,e)||(t.uniform3iv(this.addr,e),Dt(n,e))}function Dw(t,e){const n=this.cache;Pt(n,e)||(t.uniform4iv(this.addr,e),Dt(n,e))}function Rw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Iw(t,e){const n=this.cache;Pt(n,e)||(t.uniform2uiv(this.addr,e),Dt(n,e))}function Fw(t,e){const n=this.cache;Pt(n,e)||(t.uniform3uiv(this.addr,e),Dt(n,e))}function Nw(t,e){const n=this.cache;Pt(n,e)||(t.uniform4uiv(this.addr,e),Dt(n,e))}function Bw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2D(e||tm,r)}function Ow(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||im,r)}function kw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||rm,r)}function zw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||nm,r)}function Uw(t){switch(t){case 5126:return bw;case 35664:return Sw;case 35665:return Mw;case 35666:return ww;case 35674:return Aw;case 35675:return Ew;case 35676:return Cw;case 5124:case 35670:return Tw;case 35667:case 35671:return Lw;case 35668:case 35672:return Pw;case 35669:case 35673:return Dw;case 5125:return Rw;case 36294:return Iw;case 36295:return Fw;case 36296:return Nw;case 35678:case 36198:case 36298:case 36306:case 35682:return Bw;case 35679:case 36299:case 36307:return Ow;case 35680:case 36300:case 36308:case 36293:return kw;case 36289:case 36303:case 36311:case 36292:return zw}}function Gw(t,e){t.uniform1fv(this.addr,e)}function Vw(t,e){const n=ns(e,this.size,2);t.uniform2fv(this.addr,n)}function Hw(t,e){const n=ns(e,this.size,3);t.uniform3fv(this.addr,n)}function Ww(t,e){const n=ns(e,this.size,4);t.uniform4fv(this.addr,n)}function $w(t,e){const n=ns(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Yw(t,e){const n=ns(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function qw(t,e){const n=ns(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function jw(t,e){t.uniform1iv(this.addr,e)}function Xw(t,e){t.uniform2iv(this.addr,e)}function Zw(t,e){t.uniform3iv(this.addr,e)}function Kw(t,e){t.uniform4iv(this.addr,e)}function Qw(t,e){t.uniform1uiv(this.addr,e)}function Jw(t,e){t.uniform2uiv(this.addr,e)}function eA(t,e){t.uniform3uiv(this.addr,e)}function tA(t,e){t.uniform4uiv(this.addr,e)}function nA(t,e,n){const i=e.length,r=xa(n,i);t.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)n.setTexture2D(e[s]||tm,r[s])}function iA(t,e,n){const i=e.length,r=xa(n,i);t.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)n.setTexture3D(e[s]||im,r[s])}function rA(t,e,n){const i=e.length,r=xa(n,i);t.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)n.setTextureCube(e[s]||rm,r[s])}function sA(t,e,n){const i=e.length,r=xa(n,i);t.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)n.setTexture2DArray(e[s]||nm,r[s])}function oA(t){switch(t){case 5126:return Gw;case 35664:return Vw;case 35665:return Hw;case 35666:return Ww;case 35674:return $w;case 35675:return Yw;case 35676:return qw;case 5124:case 35670:return jw;case 35667:case 35671:return Xw;case 35668:case 35672:return Zw;case 35669:case 35673:return Kw;case 5125:return Qw;case 36294:return Jw;case 36295:return eA;case 36296:return tA;case 35678:case 36198:case 36298:case 36306:case 35682:return nA;case 35679:case 36299:case 36307:return iA;case 35680:case 36300:case 36308:case 36293:return rA;case 36289:case 36303:case 36311:case 36292:return sA}}class aA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.setValue=Uw(n.type)}}class lA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.size=n.size,this.setValue=oA(n.type)}}class cA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const hl=/(\w+)(\])?(\[|\.)?/g;function pd(t,e){t.seq.push(e),t.map[e.id]=e}function uA(t,e,n){const i=t.name,r=i.length;for(hl.lastIndex=0;;){const s=hl.exec(i),o=hl.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){pd(n,c===void 0?new aA(a,t,e):new lA(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new cA(a),pd(n,f)),n=f}}}class No{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,35718);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);uA(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function md(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}let fA=0;function dA(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function hA(t){switch(t){case Zi:return["Linear","( value )"];case at:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",t),["Linear","( value )"]}}function gd(t,e,n){const i=t.getShaderParameter(e,35713),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+dA(t.getShaderSource(e),o)}else return r}function pA(t,e){const n=hA(e);return"vec4 "+t+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function mA(t,e){let n;switch(e){case Iy:n="Linear";break;case Fy:n="Reinhard";break;case Ny:n="OptimizedCineon";break;case By:n="ACESFilmic";break;case Oy:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function gA(t){return[t.extensionDerivatives||!!t.envMapCubeUVHeight||t.bumpMap||t.tangentSpaceNormalMap||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(gs).join(`
`)}function vA(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function _A(t,e){const n={},i=t.getProgramParameter(e,35721);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function gs(t){return t!==""}function vd(t,e){return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _d(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const xA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xl(t){return t.replace(xA,yA)}function yA(t,e){const n=ke[e];if(n===void 0)throw new Error("Can not resolve #include <"+e+">");return Xl(n)}const bA=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,SA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xd(t){return t.replace(SA,sm).replace(bA,MA)}function MA(t,e,n,i){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),sm(t,e,n,i)}function sm(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function yd(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function wA(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Op?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===uy?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ms&&(e="SHADOWMAP_TYPE_VSM"),e}function AA(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Hr:case Wr:e="ENVMAP_TYPE_CUBE";break;case ga:e="ENVMAP_TYPE_CUBE_UV";break}return e}function EA(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Wr:e="ENVMAP_MODE_REFRACTION";break}return e}function CA(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Up:e="ENVMAP_BLENDING_MULTIPLY";break;case Dy:e="ENVMAP_BLENDING_MIX";break;case Ry:e="ENVMAP_BLENDING_ADD";break}return e}function TA(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function LA(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=wA(n),c=AA(n),u=EA(n),f=CA(n),d=TA(n),p=n.isWebGL2?"":gA(n),g=vA(s),m=r.createProgram();let h,v,x=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(h=[g].filter(gs).join(`
`),h.length>0&&(h+=`
`),v=[p,g].filter(gs).join(`
`),v.length>0&&(v+=`
`)):(h=[yd(n),"#define SHADER_NAME "+n.shaderName,g,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.supportsVertexTextures?"#define VERTEX_TEXTURES":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.displacementMap&&n.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",n.specularColorMap?"#define USE_SPECULARCOLORMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEENCOLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gs).join(`
`),v=[p,yd(n),"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",n.specularColorMap?"#define USE_SPECULARCOLORMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEENCOLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Hn?"#define TONE_MAPPING":"",n.toneMapping!==Hn?ke.tonemapping_pars_fragment:"",n.toneMapping!==Hn?mA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ke.encodings_pars_fragment,pA("linearToOutputTexel",n.outputEncoding),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(gs).join(`
`)),o=Xl(o),o=vd(o,n),o=_d(o,n),a=Xl(a),a=vd(a,n),a=_d(a,n),o=xd(o),a=xd(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,h=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,v=["#define varying in",n.glslVersion===Vf?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Vf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const M=x+h+o,w=x+v+a,b=md(r,35633,M),T=md(r,35632,w);if(r.attachShader(m,b),r.attachShader(m,T),n.index0AttributeName!==void 0?r.bindAttribLocation(m,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m),t.debug.checkShaderErrors){const E=r.getProgramInfoLog(m).trim(),D=r.getShaderInfoLog(b).trim(),B=r.getShaderInfoLog(T).trim();let V=!0,Z=!0;if(r.getProgramParameter(m,35714)===!1){V=!1;const N=gd(r,b,"vertex"),ne=gd(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,35715)+`

Program Info Log: `+E+`
`+N+`
`+ne)}else E!==""?console.warn("THREE.WebGLProgram: Program Info Log:",E):(D===""||B==="")&&(Z=!1);Z&&(this.diagnostics={runnable:V,programLog:E,vertexShader:{log:D,prefix:h},fragmentShader:{log:B,prefix:v}})}r.deleteShader(b),r.deleteShader(T);let L;this.getUniforms=function(){return L===void 0&&(L=new No(r,m)),L};let _;return this.getAttributes=function(){return _===void 0&&(_=_A(r,m)),_},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.name=n.shaderName,this.id=fA++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=T,this}let PA=0;class DA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;return n.has(e)===!1&&n.set(e,new Set),n.get(e)}_getShaderStage(e){const n=this.shaderCache;if(n.has(e)===!1){const i=new RA(e);n.set(e,i)}return n.get(e)}}class RA{constructor(e){this.id=PA++,this.code=e,this.usedTimes=0}}function IA(t,e,n,i,r,s,o){const a=new jp,l=new DA,c=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(_,E,D,B,V){const Z=B.fog,N=V.geometry,ne=_.isMeshStandardMaterial?B.environment:null,z=(_.isMeshStandardMaterial?n:e).get(_.envMap||ne),X=!!z&&z.mapping===ga?z.image.height:null,Y=g[_.type];_.precision!==null&&(p=r.getMaxPrecision(_.precision),p!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",p,"instead."));const G=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,J=G!==void 0?G.length:0;let ue=0;N.morphAttributes.position!==void 0&&(ue=1),N.morphAttributes.normal!==void 0&&(ue=2),N.morphAttributes.color!==void 0&&(ue=3);let le,ae,Me,O;if(Y){const Ce=An[Y];le=Ce.vertexShader,ae=Ce.fragmentShader}else le=_.vertexShader,ae=_.fragmentShader,l.update(_),Me=l.getVertexShaderID(_),O=l.getFragmentShaderID(_);const F=t.getRenderTarget(),se=_.alphaTest>0,fe=_.clearcoat>0,be=_.iridescence>0;return{isWebGL2:u,shaderID:Y,shaderName:_.type,vertexShader:le,fragmentShader:ae,defines:_.defines,customVertexShaderID:Me,customFragmentShaderID:O,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:p,instancing:V.isInstancedMesh===!0,instancingColor:V.isInstancedMesh===!0&&V.instanceColor!==null,supportsVertexTextures:d,outputEncoding:F===null?t.outputEncoding:F.isXRRenderTarget===!0?F.texture.encoding:Zi,map:!!_.map,matcap:!!_.matcap,envMap:!!z,envMapMode:z&&z.mapping,envMapCubeUVHeight:X,lightMap:!!_.lightMap,aoMap:!!_.aoMap,emissiveMap:!!_.emissiveMap,bumpMap:!!_.bumpMap,normalMap:!!_.normalMap,objectSpaceNormalMap:_.normalMapType===ib,tangentSpaceNormalMap:_.normalMapType===nb,decodeVideoTexture:!!_.map&&_.map.isVideoTexture===!0&&_.map.encoding===at,clearcoat:fe,clearcoatMap:fe&&!!_.clearcoatMap,clearcoatRoughnessMap:fe&&!!_.clearcoatRoughnessMap,clearcoatNormalMap:fe&&!!_.clearcoatNormalMap,iridescence:be,iridescenceMap:be&&!!_.iridescenceMap,iridescenceThicknessMap:be&&!!_.iridescenceThicknessMap,displacementMap:!!_.displacementMap,roughnessMap:!!_.roughnessMap,metalnessMap:!!_.metalnessMap,specularMap:!!_.specularMap,specularIntensityMap:!!_.specularIntensityMap,specularColorMap:!!_.specularColorMap,opaque:_.transparent===!1&&_.blending===Br,alphaMap:!!_.alphaMap,alphaTest:se,gradientMap:!!_.gradientMap,sheen:_.sheen>0,sheenColorMap:!!_.sheenColorMap,sheenRoughnessMap:!!_.sheenRoughnessMap,transmission:_.transmission>0,transmissionMap:!!_.transmissionMap,thicknessMap:!!_.thicknessMap,combine:_.combine,vertexTangents:!!_.normalMap&&!!N.attributes.tangent,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUvs:!!_.map||!!_.bumpMap||!!_.normalMap||!!_.specularMap||!!_.alphaMap||!!_.emissiveMap||!!_.roughnessMap||!!_.metalnessMap||!!_.clearcoatMap||!!_.clearcoatRoughnessMap||!!_.clearcoatNormalMap||!!_.iridescenceMap||!!_.iridescenceThicknessMap||!!_.displacementMap||!!_.transmissionMap||!!_.thicknessMap||!!_.specularIntensityMap||!!_.specularColorMap||!!_.sheenColorMap||!!_.sheenRoughnessMap,uvsVertexOnly:!(!!_.map||!!_.bumpMap||!!_.normalMap||!!_.specularMap||!!_.alphaMap||!!_.emissiveMap||!!_.roughnessMap||!!_.metalnessMap||!!_.clearcoatNormalMap||!!_.iridescenceMap||!!_.iridescenceThicknessMap||_.transmission>0||!!_.transmissionMap||!!_.thicknessMap||!!_.specularIntensityMap||!!_.specularColorMap||_.sheen>0||!!_.sheenColorMap||!!_.sheenRoughnessMap)&&!!_.displacementMap,fog:!!Z,useFog:_.fog===!0,fogExp2:Z&&Z.isFogExp2,flatShading:!!_.flatShading,sizeAttenuation:_.sizeAttenuation,logarithmicDepthBuffer:f,skinning:V.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:ue,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:t.shadowMap.enabled&&D.length>0,shadowMapType:t.shadowMap.type,toneMapping:_.toneMapped?t.toneMapping:Hn,physicallyCorrectLights:t.physicallyCorrectLights,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Vr,flipSided:_.side===pn,useDepthPacking:!!_.depthPacking,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionDerivatives:_.extensions&&_.extensions.derivatives,extensionFragDepth:_.extensions&&_.extensions.fragDepth,extensionDrawBuffers:_.extensions&&_.extensions.drawBuffers,extensionShaderTextureLOD:_.extensions&&_.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:_.customProgramCacheKey()}}function h(_){const E=[];if(_.shaderID?E.push(_.shaderID):(E.push(_.customVertexShaderID),E.push(_.customFragmentShaderID)),_.defines!==void 0)for(const D in _.defines)E.push(D),E.push(_.defines[D]);return _.isRawShaderMaterial===!1&&(v(E,_),x(E,_),E.push(t.outputEncoding)),E.push(_.customProgramCacheKey),E.join()}function v(_,E){_.push(E.precision),_.push(E.outputEncoding),_.push(E.envMapMode),_.push(E.envMapCubeUVHeight),_.push(E.combine),_.push(E.vertexUvs),_.push(E.fogExp2),_.push(E.sizeAttenuation),_.push(E.morphTargetsCount),_.push(E.morphAttributeCount),_.push(E.numDirLights),_.push(E.numPointLights),_.push(E.numSpotLights),_.push(E.numHemiLights),_.push(E.numRectAreaLights),_.push(E.numDirLightShadows),_.push(E.numPointLightShadows),_.push(E.numSpotLightShadows),_.push(E.shadowMapType),_.push(E.toneMapping),_.push(E.numClippingPlanes),_.push(E.numClipIntersection),_.push(E.depthPacking)}function x(_,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.map&&a.enable(4),E.matcap&&a.enable(5),E.envMap&&a.enable(6),E.lightMap&&a.enable(7),E.aoMap&&a.enable(8),E.emissiveMap&&a.enable(9),E.bumpMap&&a.enable(10),E.normalMap&&a.enable(11),E.objectSpaceNormalMap&&a.enable(12),E.tangentSpaceNormalMap&&a.enable(13),E.clearcoat&&a.enable(14),E.clearcoatMap&&a.enable(15),E.clearcoatRoughnessMap&&a.enable(16),E.clearcoatNormalMap&&a.enable(17),E.iridescence&&a.enable(18),E.iridescenceMap&&a.enable(19),E.iridescenceThicknessMap&&a.enable(20),E.displacementMap&&a.enable(21),E.specularMap&&a.enable(22),E.roughnessMap&&a.enable(23),E.metalnessMap&&a.enable(24),E.gradientMap&&a.enable(25),E.alphaMap&&a.enable(26),E.alphaTest&&a.enable(27),E.vertexColors&&a.enable(28),E.vertexAlphas&&a.enable(29),E.vertexUvs&&a.enable(30),E.vertexTangents&&a.enable(31),E.uvsVertexOnly&&a.enable(32),E.fog&&a.enable(33),_.push(a.mask),a.disableAll(),E.useFog&&a.enable(0),E.flatShading&&a.enable(1),E.logarithmicDepthBuffer&&a.enable(2),E.skinning&&a.enable(3),E.morphTargets&&a.enable(4),E.morphNormals&&a.enable(5),E.morphColors&&a.enable(6),E.premultipliedAlpha&&a.enable(7),E.shadowMapEnabled&&a.enable(8),E.physicallyCorrectLights&&a.enable(9),E.doubleSided&&a.enable(10),E.flipSided&&a.enable(11),E.useDepthPacking&&a.enable(12),E.dithering&&a.enable(13),E.specularIntensityMap&&a.enable(14),E.specularColorMap&&a.enable(15),E.transmission&&a.enable(16),E.transmissionMap&&a.enable(17),E.thicknessMap&&a.enable(18),E.sheen&&a.enable(19),E.sheenColorMap&&a.enable(20),E.sheenRoughnessMap&&a.enable(21),E.decodeVideoTexture&&a.enable(22),E.opaque&&a.enable(23),_.push(a.mask)}function M(_){const E=g[_.type];let D;if(E){const B=An[E];D=yb.clone(B.uniforms)}else D=_.uniforms;return D}function w(_,E){let D;for(let B=0,V=c.length;B<V;B++){const Z=c[B];if(Z.cacheKey===E){D=Z,++D.usedTimes;break}}return D===void 0&&(D=new LA(t,E,_,s),c.push(D)),D}function b(_){if(--_.usedTimes===0){const E=c.indexOf(_);c[E]=c[c.length-1],c.pop(),_.destroy()}}function T(_){l.remove(_)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:M,acquireProgram:w,releaseProgram:b,releaseShaderCache:T,programs:c,dispose:L}}function FA(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function NA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function bd(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Sd(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,d,p,g,m,h){let v=t[e];return v===void 0?(v={id:f.id,object:f,geometry:d,material:p,groupOrder:g,renderOrder:f.renderOrder,z:m,group:h},t[e]=v):(v.id=f.id,v.object=f,v.geometry=d,v.material=p,v.groupOrder=g,v.renderOrder=f.renderOrder,v.z=m,v.group=h),e++,v}function a(f,d,p,g,m,h){const v=o(f,d,p,g,m,h);p.transmission>0?i.push(v):p.transparent===!0?r.push(v):n.push(v)}function l(f,d,p,g,m,h){const v=o(f,d,p,g,m,h);p.transmission>0?i.unshift(v):p.transparent===!0?r.unshift(v):n.unshift(v)}function c(f,d){n.length>1&&n.sort(f||NA),i.length>1&&i.sort(d||bd),r.length>1&&r.sort(d||bd)}function u(){for(let f=e,d=t.length;f<d;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function BA(){let t=new WeakMap;function e(i,r){let s;return t.has(i)===!1?(s=new Sd,t.set(i,[s])):r>=t.get(i).length?(s=new Sd,t.get(i).push(s)):s=t.get(i)[r],s}function n(){t=new WeakMap}return{get:e,dispose:n}}function OA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new $,color:new et};break;case"SpotLight":n={position:new $,direction:new $,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new $,color:new et,distance:0,decay:0};break;case"HemisphereLight":n={direction:new $,skyColor:new et,groundColor:new et};break;case"RectAreaLight":n={color:new et,position:new $,halfWidth:new $,halfHeight:new $};break}return t[e.id]=n,n}}}function kA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let zA=0;function UA(t,e){return(e.castShadow?1:0)-(t.castShadow?1:0)}function GA(t,e){const n=new OA,i=kA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let u=0;u<9;u++)r.probe.push(new $);const s=new $,o=new Mt,a=new Mt;function l(u,f){let d=0,p=0,g=0;for(let E=0;E<9;E++)r.probe[E].set(0,0,0);let m=0,h=0,v=0,x=0,M=0,w=0,b=0,T=0;u.sort(UA);const L=f!==!0?Math.PI:1;for(let E=0,D=u.length;E<D;E++){const B=u[E],V=B.color,Z=B.intensity,N=B.distance,ne=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)d+=V.r*Z*L,p+=V.g*Z*L,g+=V.b*Z*L;else if(B.isLightProbe)for(let z=0;z<9;z++)r.probe[z].addScaledVector(B.sh.coefficients[z],Z);else if(B.isDirectionalLight){const z=n.get(B);if(z.color.copy(B.color).multiplyScalar(B.intensity*L),B.castShadow){const X=B.shadow,Y=i.get(B);Y.shadowBias=X.bias,Y.shadowNormalBias=X.normalBias,Y.shadowRadius=X.radius,Y.shadowMapSize=X.mapSize,r.directionalShadow[m]=Y,r.directionalShadowMap[m]=ne,r.directionalShadowMatrix[m]=B.shadow.matrix,w++}r.directional[m]=z,m++}else if(B.isSpotLight){const z=n.get(B);if(z.position.setFromMatrixPosition(B.matrixWorld),z.color.copy(V).multiplyScalar(Z*L),z.distance=N,z.coneCos=Math.cos(B.angle),z.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),z.decay=B.decay,B.castShadow){const X=B.shadow,Y=i.get(B);Y.shadowBias=X.bias,Y.shadowNormalBias=X.normalBias,Y.shadowRadius=X.radius,Y.shadowMapSize=X.mapSize,r.spotShadow[v]=Y,r.spotShadowMap[v]=ne,r.spotShadowMatrix[v]=B.shadow.matrix,T++}r.spot[v]=z,v++}else if(B.isRectAreaLight){const z=n.get(B);z.color.copy(V).multiplyScalar(Z),z.halfWidth.set(B.width*.5,0,0),z.halfHeight.set(0,B.height*.5,0),r.rectArea[x]=z,x++}else if(B.isPointLight){const z=n.get(B);if(z.color.copy(B.color).multiplyScalar(B.intensity*L),z.distance=B.distance,z.decay=B.decay,B.castShadow){const X=B.shadow,Y=i.get(B);Y.shadowBias=X.bias,Y.shadowNormalBias=X.normalBias,Y.shadowRadius=X.radius,Y.shadowMapSize=X.mapSize,Y.shadowCameraNear=X.camera.near,Y.shadowCameraFar=X.camera.far,r.pointShadow[h]=Y,r.pointShadowMap[h]=ne,r.pointShadowMatrix[h]=B.shadow.matrix,b++}r.point[h]=z,h++}else if(B.isHemisphereLight){const z=n.get(B);z.skyColor.copy(B.color).multiplyScalar(Z*L),z.groundColor.copy(B.groundColor).multiplyScalar(Z*L),r.hemi[M]=z,M++}}x>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=xe.LTC_FLOAT_1,r.rectAreaLTC2=xe.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=xe.LTC_HALF_1,r.rectAreaLTC2=xe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=p,r.ambient[2]=g;const _=r.hash;(_.directionalLength!==m||_.pointLength!==h||_.spotLength!==v||_.rectAreaLength!==x||_.hemiLength!==M||_.numDirectionalShadows!==w||_.numPointShadows!==b||_.numSpotShadows!==T)&&(r.directional.length=m,r.spot.length=v,r.rectArea.length=x,r.point.length=h,r.hemi.length=M,r.directionalShadow.length=w,r.directionalShadowMap.length=w,r.pointShadow.length=b,r.pointShadowMap.length=b,r.spotShadow.length=T,r.spotShadowMap.length=T,r.directionalShadowMatrix.length=w,r.pointShadowMatrix.length=b,r.spotShadowMatrix.length=T,_.directionalLength=m,_.pointLength=h,_.spotLength=v,_.rectAreaLength=x,_.hemiLength=M,_.numDirectionalShadows=w,_.numPointShadows=b,_.numSpotShadows=T,r.version=zA++)}function c(u,f){let d=0,p=0,g=0,m=0,h=0;const v=f.matrixWorldInverse;for(let x=0,M=u.length;x<M;x++){const w=u[x];if(w.isDirectionalLight){const b=r.directional[d];b.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(v),d++}else if(w.isSpotLight){const b=r.spot[g];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(v),b.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(v),g++}else if(w.isRectAreaLight){const b=r.rectArea[m];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(v),a.identity(),o.copy(w.matrixWorld),o.premultiply(v),a.extractRotation(o),b.halfWidth.set(w.width*.5,0,0),b.halfHeight.set(0,w.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),m++}else if(w.isPointLight){const b=r.point[p];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(v),p++}else if(w.isHemisphereLight){const b=r.hemi[h];b.direction.setFromMatrixPosition(w.matrixWorld),b.direction.transformDirection(v),h++}}}return{setup:l,setupView:c,state:r}}function Md(t,e){const n=new GA(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(f){i.push(f)}function a(f){r.push(f)}function l(f){n.setup(i,f)}function c(f){n.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function VA(t,e){let n=new WeakMap;function i(s,o=0){let a;return n.has(s)===!1?(a=new Md(t,e),n.set(s,[a])):o>=n.get(s).length?(a=new Md(t,e),n.get(s).push(a)):a=n.get(s)[o],a}function r(){n=new WeakMap}return{get:i,dispose:r}}class HA extends _a{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=eb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class WA extends _a{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new $,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const $A=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,YA=`uniform sampler2D shadow_pass;
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
}`;function qA(t,e,n){let i=new Jp;const r=new Je,s=new Je,o=new xt,a=new HA({depthPacking:tb}),l=new WA,c={},u=n.maxTextureSize,f={0:pn,1:zs,2:Vr},d=new Qi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Je},radius:{value:4}},vertexShader:$A,fragmentShader:YA}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Mi;g.setAttribute("position",new Tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new Gn(g,d),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Op,this.render=function(w,b,T){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||w.length===0)return;const L=t.getRenderTarget(),_=t.getActiveCubeFace(),E=t.getActiveMipmapLevel(),D=t.state;D.setBlending(pi),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);for(let B=0,V=w.length;B<V;B++){const Z=w[B],N=Z.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const ne=N.getFrameExtents();if(r.multiply(ne),s.copy(N.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ne.x),r.x=s.x*ne.x,N.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ne.y),r.y=s.y*ne.y,N.mapSize.y=s.y)),N.map===null){const X=this.type!==ms?{minFilter:It,magFilter:It}:{};N.map=new Ki(r.x,r.y,X),N.map.texture.name=Z.name+".shadowMap",N.camera.updateProjectionMatrix()}t.setRenderTarget(N.map),t.clear();const z=N.getViewportCount();for(let X=0;X<z;X++){const Y=N.getViewport(X);o.set(s.x*Y.x,s.y*Y.y,s.x*Y.z,s.y*Y.w),D.viewport(o),N.updateMatrices(Z,X),i=N.getFrustum(),M(b,T,N.camera,Z,this.type)}N.isPointLightShadow!==!0&&this.type===ms&&v(N,T),N.needsUpdate=!1}h.needsUpdate=!1,t.setRenderTarget(L,_,E)};function v(w,b){const T=e.update(m);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Ki(r.x,r.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,t.setRenderTarget(w.mapPass),t.clear(),t.renderBufferDirect(b,null,T,d,m,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,t.setRenderTarget(w.map),t.clear(),t.renderBufferDirect(b,null,T,p,m,null)}function x(w,b,T,L,_,E){let D=null;const B=T.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(B!==void 0?D=B:D=T.isPointLight===!0?l:a,t.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0){const V=D.uuid,Z=b.uuid;let N=c[V];N===void 0&&(N={},c[V]=N);let ne=N[Z];ne===void 0&&(ne=D.clone(),N[Z]=ne),D=ne}return D.visible=b.visible,D.wireframe=b.wireframe,E===ms?D.side=b.shadowSide!==null?b.shadowSide:b.side:D.side=b.shadowSide!==null?b.shadowSide:f[b.side],D.alphaMap=b.alphaMap,D.alphaTest=b.alphaTest,D.clipShadows=b.clipShadows,D.clippingPlanes=b.clippingPlanes,D.clipIntersection=b.clipIntersection,D.displacementMap=b.displacementMap,D.displacementScale=b.displacementScale,D.displacementBias=b.displacementBias,D.wireframeLinewidth=b.wireframeLinewidth,D.linewidth=b.linewidth,T.isPointLight===!0&&D.isMeshDistanceMaterial===!0&&(D.referencePosition.setFromMatrixPosition(T.matrixWorld),D.nearDistance=L,D.farDistance=_),D}function M(w,b,T,L,_){if(w.visible===!1)return;if(w.layers.test(b.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&_===ms)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,w.matrixWorld);const B=e.update(w),V=w.material;if(Array.isArray(V)){const Z=B.groups;for(let N=0,ne=Z.length;N<ne;N++){const z=Z[N],X=V[z.materialIndex];if(X&&X.visible){const Y=x(w,X,L,T.near,T.far,_);t.renderBufferDirect(T,null,B,Y,w,z)}}}else if(V.visible){const Z=x(w,V,L,T.near,T.far,_);t.renderBufferDirect(T,null,B,Z,w,null)}}const D=w.children;for(let B=0,V=D.length;B<V;B++)M(D[B],b,T,L,_)}}function jA(t,e,n){const i=n.isWebGL2;function r(){let R=!1;const we=new xt;let te=null;const Ee=new xt(0,0,0,0);return{setMask:function(Ae){te!==Ae&&!R&&(t.colorMask(Ae,Ae,Ae,Ae),te=Ae)},setLocked:function(Ae){R=Ae},setClear:function(Ae,Ye,gt,ct,Xn){Xn===!0&&(Ae*=ct,Ye*=ct,gt*=ct),we.set(Ae,Ye,gt,ct),Ee.equals(we)===!1&&(t.clearColor(Ae,Ye,gt,ct),Ee.copy(we))},reset:function(){R=!1,te=null,Ee.set(-1,0,0,0)}}}function s(){let R=!1,we=null,te=null,Ee=null;return{setTest:function(Ae){Ae?se(2929):fe(2929)},setMask:function(Ae){we!==Ae&&!R&&(t.depthMask(Ae),we=Ae)},setFunc:function(Ae){if(te!==Ae){if(Ae)switch(Ae){case wy:t.depthFunc(512);break;case Ay:t.depthFunc(519);break;case Ey:t.depthFunc(513);break;case Vl:t.depthFunc(515);break;case Cy:t.depthFunc(514);break;case Ty:t.depthFunc(518);break;case Ly:t.depthFunc(516);break;case Py:t.depthFunc(517);break;default:t.depthFunc(515)}else t.depthFunc(515);te=Ae}},setLocked:function(Ae){R=Ae},setClear:function(Ae){Ee!==Ae&&(t.clearDepth(Ae),Ee=Ae)},reset:function(){R=!1,we=null,te=null,Ee=null}}}function o(){let R=!1,we=null,te=null,Ee=null,Ae=null,Ye=null,gt=null,ct=null,Xn=null;return{setTest:function(st){R||(st?se(2960):fe(2960))},setMask:function(st){we!==st&&!R&&(t.stencilMask(st),we=st)},setFunc:function(st,Dn,Wt){(te!==st||Ee!==Dn||Ae!==Wt)&&(t.stencilFunc(st,Dn,Wt),te=st,Ee=Dn,Ae=Wt)},setOp:function(st,Dn,Wt){(Ye!==st||gt!==Dn||ct!==Wt)&&(t.stencilOp(st,Dn,Wt),Ye=st,gt=Dn,ct=Wt)},setLocked:function(st){R=st},setClear:function(st){Xn!==st&&(t.clearStencil(st),Xn=st)},reset:function(){R=!1,we=null,te=null,Ee=null,Ae=null,Ye=null,gt=null,ct=null,Xn=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,f=new WeakMap;let d={},p={},g=new WeakMap,m=[],h=null,v=!1,x=null,M=null,w=null,b=null,T=null,L=null,_=null,E=!1,D=null,B=null,V=null,Z=null,N=null;const ne=t.getParameter(35661);let z=!1,X=0;const Y=t.getParameter(7938);Y.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(Y)[1]),z=X>=1):Y.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),z=X>=2);let G=null,J={};const ue=t.getParameter(3088),le=t.getParameter(2978),ae=new xt().fromArray(ue),Me=new xt().fromArray(le);function O(R,we,te){const Ee=new Uint8Array(4),Ae=t.createTexture();t.bindTexture(R,Ae),t.texParameteri(R,10241,9728),t.texParameteri(R,10240,9728);for(let Ye=0;Ye<te;Ye++)t.texImage2D(we+Ye,0,6408,1,1,0,6408,5121,Ee);return Ae}const F={};F[3553]=O(3553,3553,1),F[34067]=O(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),se(2929),l.setFunc(Vl),ie(!1),re(df),se(2884),P(pi);function se(R){d[R]!==!0&&(t.enable(R),d[R]=!0)}function fe(R){d[R]!==!1&&(t.disable(R),d[R]=!1)}function be(R,we){return p[R]!==we?(t.bindFramebuffer(R,we),p[R]=we,i&&(R===36009&&(p[36160]=we),R===36160&&(p[36009]=we)),!0):!1}function ge(R,we){let te=m,Ee=!1;if(R)if(te=g.get(we),te===void 0&&(te=[],g.set(we,te)),R.isWebGLMultipleRenderTargets){const Ae=R.texture;if(te.length!==Ae.length||te[0]!==36064){for(let Ye=0,gt=Ae.length;Ye<gt;Ye++)te[Ye]=36064+Ye;te.length=Ae.length,Ee=!0}}else te[0]!==36064&&(te[0]=36064,Ee=!0);else te[0]!==1029&&(te[0]=1029,Ee=!0);Ee&&(n.isWebGL2?t.drawBuffers(te):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(te))}function Ce(R){return h!==R?(t.useProgram(R),h=R,!0):!1}const ve={[Pr]:32774,[hy]:32778,[py]:32779};if(i)ve[gf]=32775,ve[vf]=32776;else{const R=e.get("EXT_blend_minmax");R!==null&&(ve[gf]=R.MIN_EXT,ve[vf]=R.MAX_EXT)}const A={[my]:0,[gy]:1,[vy]:768,[kp]:770,[My]:776,[by]:774,[xy]:772,[_y]:769,[zp]:771,[Sy]:775,[yy]:773};function P(R,we,te,Ee,Ae,Ye,gt,ct){if(R===pi){v===!0&&(fe(3042),v=!1);return}if(v===!1&&(se(3042),v=!0),R!==dy){if(R!==x||ct!==E){if((M!==Pr||T!==Pr)&&(t.blendEquation(32774),M=Pr,T=Pr),ct)switch(R){case Br:t.blendFuncSeparate(1,771,1,771);break;case hf:t.blendFunc(1,1);break;case pf:t.blendFuncSeparate(0,769,0,1);break;case mf:t.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case Br:t.blendFuncSeparate(770,771,1,771);break;case hf:t.blendFunc(770,1);break;case pf:t.blendFuncSeparate(0,769,0,1);break;case mf:t.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}w=null,b=null,L=null,_=null,x=R,E=ct}return}Ae=Ae||we,Ye=Ye||te,gt=gt||Ee,(we!==M||Ae!==T)&&(t.blendEquationSeparate(ve[we],ve[Ae]),M=we,T=Ae),(te!==w||Ee!==b||Ye!==L||gt!==_)&&(t.blendFuncSeparate(A[te],A[Ee],A[Ye],A[gt]),w=te,b=Ee,L=Ye,_=gt),x=R,E=null}function H(R,we){R.side===Vr?fe(2884):se(2884);let te=R.side===pn;we&&(te=!te),ie(te),R.blending===Br&&R.transparent===!1?P(pi):P(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.premultipliedAlpha),l.setFunc(R.depthFunc),l.setTest(R.depthTest),l.setMask(R.depthWrite),a.setMask(R.colorWrite);const Ee=R.stencilWrite;c.setTest(Ee),Ee&&(c.setMask(R.stencilWriteMask),c.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),c.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),he(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?se(32926):fe(32926)}function ie(R){D!==R&&(R?t.frontFace(2304):t.frontFace(2305),D=R)}function re(R){R!==ly?(se(2884),R!==B&&(R===df?t.cullFace(1029):R===cy?t.cullFace(1028):t.cullFace(1032))):fe(2884),B=R}function de(R){R!==V&&(z&&t.lineWidth(R),V=R)}function he(R,we,te){R?(se(32823),(Z!==we||N!==te)&&(t.polygonOffset(we,te),Z=we,N=te)):fe(32823)}function pe(R){R?se(3089):fe(3089)}function me(R){R===void 0&&(R=33984+ne-1),G!==R&&(t.activeTexture(R),G=R)}function S(R,we){G===null&&me();let te=J[G];te===void 0&&(te={type:void 0,texture:void 0},J[G]=te),(te.type!==R||te.texture!==we)&&(t.bindTexture(R,we||F[R]),te.type=R,te.texture=we)}function y(){const R=J[G];R!==void 0&&R.type!==void 0&&(t.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function I(){try{t.compressedTexImage2D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function q(){try{t.texSubImage2D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ee(){try{t.texSubImage3D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ce(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Se(){try{t.texStorage2D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function U(){try{t.texStorage3D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function _e(){try{t.texImage2D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ye(){try{t.texImage3D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Le(R){ae.equals(R)===!1&&(t.scissor(R.x,R.y,R.z,R.w),ae.copy(R))}function Te(R){Me.equals(R)===!1&&(t.viewport(R.x,R.y,R.z,R.w),Me.copy(R))}function Re(R,we){let te=f.get(we);te===void 0&&(te=new WeakMap,f.set(we,te));let Ee=te.get(R);Ee===void 0&&(Ee=t.getUniformBlockIndex(we,R.name),te.set(R,Ee))}function He(R,we){const Ee=f.get(we).get(R);u.get(R)!==Ee&&(t.uniformBlockBinding(we,Ee,R.__bindingPointIndex),u.set(R,Ee))}function Ue(){t.disable(3042),t.disable(2884),t.disable(2929),t.disable(32823),t.disable(3089),t.disable(2960),t.disable(32926),t.blendEquation(32774),t.blendFunc(1,0),t.blendFuncSeparate(1,0,1,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(513),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(519,0,4294967295),t.stencilOp(7680,7680,7680),t.clearStencil(0),t.cullFace(1029),t.frontFace(2305),t.polygonOffset(0,0),t.activeTexture(33984),t.bindFramebuffer(36160,null),i===!0&&(t.bindFramebuffer(36009,null),t.bindFramebuffer(36008,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},G=null,J={},p={},g=new WeakMap,m=[],h=null,v=!1,x=null,M=null,w=null,b=null,T=null,L=null,_=null,E=!1,D=null,B=null,V=null,Z=null,N=null,ae.set(0,0,t.canvas.width,t.canvas.height),Me.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:se,disable:fe,bindFramebuffer:be,drawBuffers:ge,useProgram:Ce,setBlending:P,setMaterial:H,setFlipSided:ie,setCullFace:re,setLineWidth:de,setPolygonOffset:he,setScissorTest:pe,activeTexture:me,bindTexture:S,unbindTexture:y,compressedTexImage2D:I,texImage2D:_e,texImage3D:ye,updateUBOMapping:Re,uniformBlockBinding:He,texStorage2D:Se,texStorage3D:U,texSubImage2D:q,texSubImage3D:ee,compressedTexSubImage2D:ce,scissor:Le,viewport:Te,reset:Ue}}function XA(t,e,n,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,f=r.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let m;const h=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(S,y){return v?new OffscreenCanvas(S,y):jo("canvas")}function M(S,y,I,q){let ee=1;if((S.width>q||S.height>q)&&(ee=q/Math.max(S.width,S.height)),ee<1||y===!0)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap){const ce=y?jl:Math.floor,Se=ce(ee*S.width),U=ce(ee*S.height);m===void 0&&(m=x(Se,U));const _e=I?x(Se,U):m;return _e.width=Se,_e.height=U,_e.getContext("2d").drawImage(S,0,0,Se,U),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+S.width+"x"+S.height+") to ("+Se+"x"+U+")."),_e}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+S.width+"x"+S.height+")."),S;return S}function w(S){return Wf(S.width)&&Wf(S.height)}function b(S){return a?!1:S.wrapS!==cn||S.wrapT!==cn||S.minFilter!==It&&S.minFilter!==jt}function T(S,y){return S.generateMipmaps&&y&&S.minFilter!==It&&S.minFilter!==jt}function L(S){t.generateMipmap(S)}function _(S,y,I,q,ee=!1){if(a===!1)return y;if(S!==null){if(t[S]!==void 0)return t[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let ce=y;return y===6403&&(I===5126&&(ce=33326),I===5131&&(ce=33325),I===5121&&(ce=33321)),y===33319&&(I===5126&&(ce=33328),I===5131&&(ce=33327),I===5121&&(ce=33323)),y===6408&&(I===5126&&(ce=34836),I===5131&&(ce=34842),I===5121&&(ce=q===at&&ee===!1?35907:32856),I===32819&&(ce=32854),I===32820&&(ce=32855)),(ce===33325||ce===33326||ce===33327||ce===33328||ce===34842||ce===34836)&&e.get("EXT_color_buffer_float"),ce}function E(S,y,I){return T(S,I)===!0||S.isFramebufferTexture&&S.minFilter!==It&&S.minFilter!==jt?Math.log2(Math.max(y.width,y.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?y.mipmaps.length:1}function D(S){return S===It||S===_f||S===xf?9728:9729}function B(S){const y=S.target;y.removeEventListener("dispose",B),Z(y),y.isVideoTexture&&g.delete(y)}function V(S){const y=S.target;y.removeEventListener("dispose",V),ne(y)}function Z(S){const y=i.get(S);if(y.__webglInit===void 0)return;const I=S.source,q=h.get(I);if(q){const ee=q[y.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&N(S),Object.keys(q).length===0&&h.delete(I)}i.remove(S)}function N(S){const y=i.get(S);t.deleteTexture(y.__webglTexture);const I=S.source,q=h.get(I);delete q[y.__cacheKey],o.memory.textures--}function ne(S){const y=S.texture,I=i.get(S),q=i.get(y);if(q.__webglTexture!==void 0&&(t.deleteTexture(q.__webglTexture),o.memory.textures--),S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++)t.deleteFramebuffer(I.__webglFramebuffer[ee]),I.__webglDepthbuffer&&t.deleteRenderbuffer(I.__webglDepthbuffer[ee]);else{if(t.deleteFramebuffer(I.__webglFramebuffer),I.__webglDepthbuffer&&t.deleteRenderbuffer(I.__webglDepthbuffer),I.__webglMultisampledFramebuffer&&t.deleteFramebuffer(I.__webglMultisampledFramebuffer),I.__webglColorRenderbuffer)for(let ee=0;ee<I.__webglColorRenderbuffer.length;ee++)I.__webglColorRenderbuffer[ee]&&t.deleteRenderbuffer(I.__webglColorRenderbuffer[ee]);I.__webglDepthRenderbuffer&&t.deleteRenderbuffer(I.__webglDepthRenderbuffer)}if(S.isWebGLMultipleRenderTargets)for(let ee=0,ce=y.length;ee<ce;ee++){const Se=i.get(y[ee]);Se.__webglTexture&&(t.deleteTexture(Se.__webglTexture),o.memory.textures--),i.remove(y[ee])}i.remove(y),i.remove(S)}let z=0;function X(){z=0}function Y(){const S=z;return S>=l&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+l),z+=1,S}function G(S){const y=[];return y.push(S.wrapS),y.push(S.wrapT),y.push(S.magFilter),y.push(S.minFilter),y.push(S.anisotropy),y.push(S.internalFormat),y.push(S.format),y.push(S.type),y.push(S.generateMipmaps),y.push(S.premultiplyAlpha),y.push(S.flipY),y.push(S.unpackAlignment),y.push(S.encoding),y.join()}function J(S,y){const I=i.get(S);if(S.isVideoTexture&&pe(S),S.isRenderTargetTexture===!1&&S.version>0&&I.__version!==S.version){const q=S.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{fe(I,S,y);return}}n.activeTexture(33984+y),n.bindTexture(3553,I.__webglTexture)}function ue(S,y){const I=i.get(S);if(S.version>0&&I.__version!==S.version){fe(I,S,y);return}n.activeTexture(33984+y),n.bindTexture(35866,I.__webglTexture)}function le(S,y){const I=i.get(S);if(S.version>0&&I.__version!==S.version){fe(I,S,y);return}n.activeTexture(33984+y),n.bindTexture(32879,I.__webglTexture)}function ae(S,y){const I=i.get(S);if(S.version>0&&I.__version!==S.version){be(I,S,y);return}n.activeTexture(33984+y),n.bindTexture(34067,I.__webglTexture)}const Me={[$l]:10497,[cn]:33071,[Yl]:33648},O={[It]:9728,[_f]:9984,[xf]:9986,[jt]:9729,[ky]:9985,[va]:9987};function F(S,y,I){if(I?(t.texParameteri(S,10242,Me[y.wrapS]),t.texParameteri(S,10243,Me[y.wrapT]),(S===32879||S===35866)&&t.texParameteri(S,32882,Me[y.wrapR]),t.texParameteri(S,10240,O[y.magFilter]),t.texParameteri(S,10241,O[y.minFilter])):(t.texParameteri(S,10242,33071),t.texParameteri(S,10243,33071),(S===32879||S===35866)&&t.texParameteri(S,32882,33071),(y.wrapS!==cn||y.wrapT!==cn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(S,10240,D(y.magFilter)),t.texParameteri(S,10241,D(y.minFilter)),y.minFilter!==It&&y.minFilter!==jt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const q=e.get("EXT_texture_filter_anisotropic");if(y.type===Gi&&e.has("OES_texture_float_linear")===!1||a===!1&&y.type===Us&&e.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||i.get(y).__currentAnisotropy)&&(t.texParameterf(S,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy)}}function se(S,y){let I=!1;S.__webglInit===void 0&&(S.__webglInit=!0,y.addEventListener("dispose",B));const q=y.source;let ee=h.get(q);ee===void 0&&(ee={},h.set(q,ee));const ce=G(y);if(ce!==S.__cacheKey){ee[ce]===void 0&&(ee[ce]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,I=!0),ee[ce].usedTimes++;const Se=ee[S.__cacheKey];Se!==void 0&&(ee[S.__cacheKey].usedTimes--,Se.usedTimes===0&&N(y)),S.__cacheKey=ce,S.__webglTexture=ee[ce].texture}return I}function fe(S,y,I){let q=3553;y.isDataArrayTexture&&(q=35866),y.isData3DTexture&&(q=32879);const ee=se(S,y),ce=y.source;if(n.activeTexture(33984+I),n.bindTexture(q,S.__webglTexture),ce.version!==ce.__currentVersion||ee===!0){t.pixelStorei(37440,y.flipY),t.pixelStorei(37441,y.premultiplyAlpha),t.pixelStorei(3317,y.unpackAlignment),t.pixelStorei(37443,0);const Se=b(y)&&w(y.image)===!1;let U=M(y.image,Se,!1,u);U=me(y,U);const _e=w(U)||a,ye=s.convert(y.format,y.encoding);let Le=s.convert(y.type),Te=_(y.internalFormat,ye,Le,y.encoding,y.isVideoTexture);F(q,y,_e);let Re;const He=y.mipmaps,Ue=a&&y.isVideoTexture!==!0,R=ce.__currentVersion===void 0||ee===!0,we=E(y,U,_e);if(y.isDepthTexture)Te=6402,a?y.type===Gi?Te=36012:y.type===Ui?Te=33190:y.type===Or?Te=35056:Te=33189:y.type===Gi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===Yi&&Te===6402&&y.type!==Vp&&y.type!==Ui&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=Ui,Le=s.convert(y.type)),y.format===$r&&Te===6402&&(Te=34041,y.type!==Or&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=Or,Le=s.convert(y.type))),R&&(Ue?n.texStorage2D(3553,1,Te,U.width,U.height):n.texImage2D(3553,0,Te,U.width,U.height,0,ye,Le,null));else if(y.isDataTexture)if(He.length>0&&_e){Ue&&R&&n.texStorage2D(3553,we,Te,He[0].width,He[0].height);for(let te=0,Ee=He.length;te<Ee;te++)Re=He[te],Ue?n.texSubImage2D(3553,te,0,0,Re.width,Re.height,ye,Le,Re.data):n.texImage2D(3553,te,Te,Re.width,Re.height,0,ye,Le,Re.data);y.generateMipmaps=!1}else Ue?(R&&n.texStorage2D(3553,we,Te,U.width,U.height),n.texSubImage2D(3553,0,0,0,U.width,U.height,ye,Le,U.data)):n.texImage2D(3553,0,Te,U.width,U.height,0,ye,Le,U.data);else if(y.isCompressedTexture){Ue&&R&&n.texStorage2D(3553,we,Te,He[0].width,He[0].height);for(let te=0,Ee=He.length;te<Ee;te++)Re=He[te],y.format!==En?ye!==null?Ue?n.compressedTexSubImage2D(3553,te,0,0,Re.width,Re.height,ye,Re.data):n.compressedTexImage2D(3553,te,Te,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?n.texSubImage2D(3553,te,0,0,Re.width,Re.height,ye,Le,Re.data):n.texImage2D(3553,te,Te,Re.width,Re.height,0,ye,Le,Re.data)}else if(y.isDataArrayTexture)Ue?(R&&n.texStorage3D(35866,we,Te,U.width,U.height,U.depth),n.texSubImage3D(35866,0,0,0,0,U.width,U.height,U.depth,ye,Le,U.data)):n.texImage3D(35866,0,Te,U.width,U.height,U.depth,0,ye,Le,U.data);else if(y.isData3DTexture)Ue?(R&&n.texStorage3D(32879,we,Te,U.width,U.height,U.depth),n.texSubImage3D(32879,0,0,0,0,U.width,U.height,U.depth,ye,Le,U.data)):n.texImage3D(32879,0,Te,U.width,U.height,U.depth,0,ye,Le,U.data);else if(y.isFramebufferTexture){if(R)if(Ue)n.texStorage2D(3553,we,Te,U.width,U.height);else{let te=U.width,Ee=U.height;for(let Ae=0;Ae<we;Ae++)n.texImage2D(3553,Ae,Te,te,Ee,0,ye,Le,null),te>>=1,Ee>>=1}}else if(He.length>0&&_e){Ue&&R&&n.texStorage2D(3553,we,Te,He[0].width,He[0].height);for(let te=0,Ee=He.length;te<Ee;te++)Re=He[te],Ue?n.texSubImage2D(3553,te,0,0,ye,Le,Re):n.texImage2D(3553,te,Te,ye,Le,Re);y.generateMipmaps=!1}else Ue?(R&&n.texStorage2D(3553,we,Te,U.width,U.height),n.texSubImage2D(3553,0,0,0,ye,Le,U)):n.texImage2D(3553,0,Te,ye,Le,U);T(y,_e)&&L(q),ce.__currentVersion=ce.version,y.onUpdate&&y.onUpdate(y)}S.__version=y.version}function be(S,y,I){if(y.image.length!==6)return;const q=se(S,y),ee=y.source;if(n.activeTexture(33984+I),n.bindTexture(34067,S.__webglTexture),ee.version!==ee.__currentVersion||q===!0){t.pixelStorei(37440,y.flipY),t.pixelStorei(37441,y.premultiplyAlpha),t.pixelStorei(3317,y.unpackAlignment),t.pixelStorei(37443,0);const ce=y.isCompressedTexture||y.image[0].isCompressedTexture,Se=y.image[0]&&y.image[0].isDataTexture,U=[];for(let te=0;te<6;te++)!ce&&!Se?U[te]=M(y.image[te],!1,!0,c):U[te]=Se?y.image[te].image:y.image[te],U[te]=me(y,U[te]);const _e=U[0],ye=w(_e)||a,Le=s.convert(y.format,y.encoding),Te=s.convert(y.type),Re=_(y.internalFormat,Le,Te,y.encoding),He=a&&y.isVideoTexture!==!0,Ue=ee.__currentVersion===void 0||q===!0;let R=E(y,_e,ye);F(34067,y,ye);let we;if(ce){He&&Ue&&n.texStorage2D(34067,R,Re,_e.width,_e.height);for(let te=0;te<6;te++){we=U[te].mipmaps;for(let Ee=0;Ee<we.length;Ee++){const Ae=we[Ee];y.format!==En?Le!==null?He?n.compressedTexSubImage2D(34069+te,Ee,0,0,Ae.width,Ae.height,Le,Ae.data):n.compressedTexImage2D(34069+te,Ee,Re,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?n.texSubImage2D(34069+te,Ee,0,0,Ae.width,Ae.height,Le,Te,Ae.data):n.texImage2D(34069+te,Ee,Re,Ae.width,Ae.height,0,Le,Te,Ae.data)}}}else{we=y.mipmaps,He&&Ue&&(we.length>0&&R++,n.texStorage2D(34067,R,Re,U[0].width,U[0].height));for(let te=0;te<6;te++)if(Se){He?n.texSubImage2D(34069+te,0,0,0,U[te].width,U[te].height,Le,Te,U[te].data):n.texImage2D(34069+te,0,Re,U[te].width,U[te].height,0,Le,Te,U[te].data);for(let Ee=0;Ee<we.length;Ee++){const Ye=we[Ee].image[te].image;He?n.texSubImage2D(34069+te,Ee+1,0,0,Ye.width,Ye.height,Le,Te,Ye.data):n.texImage2D(34069+te,Ee+1,Re,Ye.width,Ye.height,0,Le,Te,Ye.data)}}else{He?n.texSubImage2D(34069+te,0,0,0,Le,Te,U[te]):n.texImage2D(34069+te,0,Re,Le,Te,U[te]);for(let Ee=0;Ee<we.length;Ee++){const Ae=we[Ee];He?n.texSubImage2D(34069+te,Ee+1,0,0,Le,Te,Ae.image[te]):n.texImage2D(34069+te,Ee+1,Re,Le,Te,Ae.image[te])}}}T(y,ye)&&L(34067),ee.__currentVersion=ee.version,y.onUpdate&&y.onUpdate(y)}S.__version=y.version}function ge(S,y,I,q,ee){const ce=s.convert(I.format,I.encoding),Se=s.convert(I.type),U=_(I.internalFormat,ce,Se,I.encoding);i.get(y).__hasExternalTextures||(ee===32879||ee===35866?n.texImage3D(ee,0,U,y.width,y.height,y.depth,0,ce,Se,null):n.texImage2D(ee,0,U,y.width,y.height,0,ce,Se,null)),n.bindFramebuffer(36160,S),he(y)?d.framebufferTexture2DMultisampleEXT(36160,q,ee,i.get(I).__webglTexture,0,de(y)):t.framebufferTexture2D(36160,q,ee,i.get(I).__webglTexture,0),n.bindFramebuffer(36160,null)}function Ce(S,y,I){if(t.bindRenderbuffer(36161,S),y.depthBuffer&&!y.stencilBuffer){let q=33189;if(I||he(y)){const ee=y.depthTexture;ee&&ee.isDepthTexture&&(ee.type===Gi?q=36012:ee.type===Ui&&(q=33190));const ce=de(y);he(y)?d.renderbufferStorageMultisampleEXT(36161,ce,q,y.width,y.height):t.renderbufferStorageMultisample(36161,ce,q,y.width,y.height)}else t.renderbufferStorage(36161,q,y.width,y.height);t.framebufferRenderbuffer(36160,36096,36161,S)}else if(y.depthBuffer&&y.stencilBuffer){const q=de(y);I&&he(y)===!1?t.renderbufferStorageMultisample(36161,q,35056,y.width,y.height):he(y)?d.renderbufferStorageMultisampleEXT(36161,q,35056,y.width,y.height):t.renderbufferStorage(36161,34041,y.width,y.height),t.framebufferRenderbuffer(36160,33306,36161,S)}else{const q=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let ee=0;ee<q.length;ee++){const ce=q[ee],Se=s.convert(ce.format,ce.encoding),U=s.convert(ce.type),_e=_(ce.internalFormat,Se,U,ce.encoding),ye=de(y);I&&he(y)===!1?t.renderbufferStorageMultisample(36161,ye,_e,y.width,y.height):he(y)?d.renderbufferStorageMultisampleEXT(36161,ye,_e,y.width,y.height):t.renderbufferStorage(36161,_e,y.width,y.height)}}t.bindRenderbuffer(36161,null)}function ve(S,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(36160,S),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),J(y.depthTexture,0);const q=i.get(y.depthTexture).__webglTexture,ee=de(y);if(y.depthTexture.format===Yi)he(y)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,q,0,ee):t.framebufferTexture2D(36160,36096,3553,q,0);else if(y.depthTexture.format===$r)he(y)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,q,0,ee):t.framebufferTexture2D(36160,33306,3553,q,0);else throw new Error("Unknown depthTexture format")}function A(S){const y=i.get(S),I=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture&&!y.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");ve(y.__webglFramebuffer,S)}else if(I){y.__webglDepthbuffer=[];for(let q=0;q<6;q++)n.bindFramebuffer(36160,y.__webglFramebuffer[q]),y.__webglDepthbuffer[q]=t.createRenderbuffer(),Ce(y.__webglDepthbuffer[q],S,!1)}else n.bindFramebuffer(36160,y.__webglFramebuffer),y.__webglDepthbuffer=t.createRenderbuffer(),Ce(y.__webglDepthbuffer,S,!1);n.bindFramebuffer(36160,null)}function P(S,y,I){const q=i.get(S);y!==void 0&&ge(q.__webglFramebuffer,S,S.texture,36064,3553),I!==void 0&&A(S)}function H(S){const y=S.texture,I=i.get(S),q=i.get(y);S.addEventListener("dispose",V),S.isWebGLMultipleRenderTargets!==!0&&(q.__webglTexture===void 0&&(q.__webglTexture=t.createTexture()),q.__version=y.version,o.memory.textures++);const ee=S.isWebGLCubeRenderTarget===!0,ce=S.isWebGLMultipleRenderTargets===!0,Se=w(S)||a;if(ee){I.__webglFramebuffer=[];for(let U=0;U<6;U++)I.__webglFramebuffer[U]=t.createFramebuffer()}else{if(I.__webglFramebuffer=t.createFramebuffer(),ce)if(r.drawBuffers){const U=S.texture;for(let _e=0,ye=U.length;_e<ye;_e++){const Le=i.get(U[_e]);Le.__webglTexture===void 0&&(Le.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&S.samples>0&&he(S)===!1){const U=ce?y:[y];I.__webglMultisampledFramebuffer=t.createFramebuffer(),I.__webglColorRenderbuffer=[],n.bindFramebuffer(36160,I.__webglMultisampledFramebuffer);for(let _e=0;_e<U.length;_e++){const ye=U[_e];I.__webglColorRenderbuffer[_e]=t.createRenderbuffer(),t.bindRenderbuffer(36161,I.__webglColorRenderbuffer[_e]);const Le=s.convert(ye.format,ye.encoding),Te=s.convert(ye.type),Re=_(ye.internalFormat,Le,Te,ye.encoding),He=de(S);t.renderbufferStorageMultisample(36161,He,Re,S.width,S.height),t.framebufferRenderbuffer(36160,36064+_e,36161,I.__webglColorRenderbuffer[_e])}t.bindRenderbuffer(36161,null),S.depthBuffer&&(I.__webglDepthRenderbuffer=t.createRenderbuffer(),Ce(I.__webglDepthRenderbuffer,S,!0)),n.bindFramebuffer(36160,null)}}if(ee){n.bindTexture(34067,q.__webglTexture),F(34067,y,Se);for(let U=0;U<6;U++)ge(I.__webglFramebuffer[U],S,y,36064,34069+U);T(y,Se)&&L(34067),n.unbindTexture()}else if(ce){const U=S.texture;for(let _e=0,ye=U.length;_e<ye;_e++){const Le=U[_e],Te=i.get(Le);n.bindTexture(3553,Te.__webglTexture),F(3553,Le,Se),ge(I.__webglFramebuffer,S,Le,36064+_e,3553),T(Le,Se)&&L(3553)}n.unbindTexture()}else{let U=3553;(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(a?U=S.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(U,q.__webglTexture),F(U,y,Se),ge(I.__webglFramebuffer,S,y,36064,U),T(y,Se)&&L(U),n.unbindTexture()}S.depthBuffer&&A(S)}function ie(S){const y=w(S)||a,I=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let q=0,ee=I.length;q<ee;q++){const ce=I[q];if(T(ce,y)){const Se=S.isWebGLCubeRenderTarget?34067:3553,U=i.get(ce).__webglTexture;n.bindTexture(Se,U),L(Se),n.unbindTexture()}}}function re(S){if(a&&S.samples>0&&he(S)===!1){const y=S.isWebGLMultipleRenderTargets?S.texture:[S.texture],I=S.width,q=S.height;let ee=16384;const ce=[],Se=S.stencilBuffer?33306:36096,U=i.get(S),_e=S.isWebGLMultipleRenderTargets===!0;if(_e)for(let ye=0;ye<y.length;ye++)n.bindFramebuffer(36160,U.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(36160,36064+ye,36161,null),n.bindFramebuffer(36160,U.__webglFramebuffer),t.framebufferTexture2D(36009,36064+ye,3553,null,0);n.bindFramebuffer(36008,U.__webglMultisampledFramebuffer),n.bindFramebuffer(36009,U.__webglFramebuffer);for(let ye=0;ye<y.length;ye++){ce.push(36064+ye),S.depthBuffer&&ce.push(Se);const Le=U.__ignoreDepthValues!==void 0?U.__ignoreDepthValues:!1;if(Le===!1&&(S.depthBuffer&&(ee|=256),S.stencilBuffer&&(ee|=1024)),_e&&t.framebufferRenderbuffer(36008,36064,36161,U.__webglColorRenderbuffer[ye]),Le===!0&&(t.invalidateFramebuffer(36008,[Se]),t.invalidateFramebuffer(36009,[Se])),_e){const Te=i.get(y[ye]).__webglTexture;t.framebufferTexture2D(36009,36064,3553,Te,0)}t.blitFramebuffer(0,0,I,q,0,0,I,q,ee,9728),p&&t.invalidateFramebuffer(36008,ce)}if(n.bindFramebuffer(36008,null),n.bindFramebuffer(36009,null),_e)for(let ye=0;ye<y.length;ye++){n.bindFramebuffer(36160,U.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(36160,36064+ye,36161,U.__webglColorRenderbuffer[ye]);const Le=i.get(y[ye]).__webglTexture;n.bindFramebuffer(36160,U.__webglFramebuffer),t.framebufferTexture2D(36009,36064+ye,3553,Le,0)}n.bindFramebuffer(36009,U.__webglMultisampledFramebuffer)}}function de(S){return Math.min(f,S.samples)}function he(S){const y=i.get(S);return a&&S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function pe(S){const y=o.render.frame;g.get(S)!==y&&(g.set(S,y),S.update())}function me(S,y){const I=S.encoding,q=S.format,ee=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||S.format===ql||I!==Zi&&(I===at?a===!1?e.has("EXT_sRGB")===!0&&q===En?(S.format=ql,S.minFilter=jt,S.generateMipmaps=!1):y=$p.sRGBToLinear(y):(q!==En||ee!==Xi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",I)),y}this.allocateTextureUnit=Y,this.resetTextureUnits=X,this.setTexture2D=J,this.setTexture2DArray=ue,this.setTexture3D=le,this.setTextureCube=ae,this.rebindTextures=P,this.setupRenderTarget=H,this.updateRenderTargetMipmap=ie,this.updateMultisampleRenderTarget=re,this.setupDepthRenderbuffer=A,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=he}function ZA(t,e,n){const i=n.isWebGL2;function r(s,o=null){let a;if(s===Xi)return 5121;if(s===Vy)return 32819;if(s===Hy)return 32820;if(s===zy)return 5120;if(s===Uy)return 5122;if(s===Vp)return 5123;if(s===Gy)return 5124;if(s===Ui)return 5125;if(s===Gi)return 5126;if(s===Us)return i?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Wy)return 6406;if(s===En)return 6408;if(s===Yy)return 6409;if(s===qy)return 6410;if(s===Yi)return 6402;if(s===$r)return 34041;if(s===jy)return 6403;if(s===$y)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===ql)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Xy)return 36244;if(s===Zy)return 33319;if(s===Ky)return 33320;if(s===Qy)return 36249;if(s===Ba||s===Oa||s===ka||s===za)if(o===at)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Ba)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Oa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ka)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===za)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Ba)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Oa)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ka)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===za)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===yf||s===bf||s===Sf||s===Mf)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===yf)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===bf)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Sf)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Mf)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Jy)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===wf||s===Af)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===wf)return o===at?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Af)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Ef||s===Cf||s===Tf||s===Lf||s===Pf||s===Df||s===Rf||s===If||s===Ff||s===Nf||s===Bf||s===Of||s===kf||s===zf)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Ef)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Cf)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Tf)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Lf)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Pf)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Df)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Rf)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===If)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Ff)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Nf)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Bf)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Of)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===kf)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===zf)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Uf)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Uf)return o===at?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===Or?i?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class KA extends Xt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Lo extends _n{constructor(){super(),this.isGroup=!0,this.type="Group"}}const QA={type:"move"};class pl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Lo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Lo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Lo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const m of e.hand.values()){const h=n.getJointPose(m,i);if(c.joints[m.jointName]===void 0){const x=new Lo;x.matrixAutoUpdate=!1,x.visible=!1,c.joints[m.jointName]=x,c.add(x)}const v=c.joints[m.jointName];h!==null&&(v.matrix.fromArray(h.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.jointRadius=h.radius),v.visible=h!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(QA)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}}class JA extends vn{constructor(e,n,i,r,s,o,a,l,c,u){if(u=u!==void 0?u:Yi,u!==Yi&&u!==$r)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Yi&&(i=Ui),i===void 0&&u===$r&&(i=Or),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:It,this.minFilter=l!==void 0?l:It,this.flipY=!1,this.generateMipmaps=!1}}class e1 extends ts{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=null,c=null,u=null,f=null,d=null,p=null;const g=n.getContextAttributes();let m=null,h=null;const v=[],x=[],M=new Xt;M.layers.enable(1),M.viewport=new xt;const w=new Xt;w.layers.enable(2),w.viewport=new xt;const b=[M,w],T=new KA;T.layers.enable(1),T.layers.enable(2);let L=null,_=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let J=v[G];return J===void 0&&(J=new pl,v[G]=J),J.getTargetRaySpace()},this.getControllerGrip=function(G){let J=v[G];return J===void 0&&(J=new pl,v[G]=J),J.getGripSpace()},this.getHand=function(G){let J=v[G];return J===void 0&&(J=new pl,v[G]=J),J.getHandSpace()};function E(G){const J=x.indexOf(G.inputSource);if(J===-1)return;const ue=v[J];ue!==void 0&&ue.dispatchEvent({type:G.type,data:G.inputSource})}function D(){r.removeEventListener("select",E),r.removeEventListener("selectstart",E),r.removeEventListener("selectend",E),r.removeEventListener("squeeze",E),r.removeEventListener("squeezestart",E),r.removeEventListener("squeezeend",E),r.removeEventListener("end",D),r.removeEventListener("inputsourceschange",B);for(let G=0;G<v.length;G++){const J=x[G];J!==null&&(x[G]=null,v[G].disconnect(J))}L=null,_=null,e.setRenderTarget(m),d=null,f=null,u=null,r=null,h=null,Y.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(G){l=G},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(G){if(r=G,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",E),r.addEventListener("selectstart",E),r.addEventListener("selectend",E),r.addEventListener("squeeze",E),r.addEventListener("squeezestart",E),r.addEventListener("squeezeend",E),r.addEventListener("end",D),r.addEventListener("inputsourceschange",B),g.xrCompatible!==!0&&await n.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const J={antialias:r.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,n,J),r.updateRenderState({baseLayer:d}),h=new Ki(d.framebufferWidth,d.framebufferHeight,{format:En,type:Xi,encoding:e.outputEncoding})}else{let J=null,ue=null,le=null;g.depth&&(le=g.stencil?35056:33190,J=g.stencil?$r:Yi,ue=g.stencil?Or:Ui);const ae={colorFormat:32856,depthFormat:le,scaleFactor:s};u=new XRWebGLBinding(r,n),f=u.createProjectionLayer(ae),r.updateRenderState({layers:[f]}),h=new Ki(f.textureWidth,f.textureHeight,{format:En,type:Xi,depthTexture:new JA(f.textureWidth,f.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const Me=e.properties.get(h);Me.__ignoreDepthValues=f.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(1),l=null,o=await r.requestReferenceSpace(a),Y.setContext(r),Y.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function B(G){for(let J=0;J<G.removed.length;J++){const ue=G.removed[J],le=x.indexOf(ue);le>=0&&(x[le]=null,v[le].dispatchEvent({type:"disconnected",data:ue}))}for(let J=0;J<G.added.length;J++){const ue=G.added[J];let le=x.indexOf(ue);if(le===-1){for(let Me=0;Me<v.length;Me++)if(Me>=x.length){x.push(ue),le=Me;break}else if(x[Me]===null){x[Me]=ue,le=Me;break}if(le===-1)break}const ae=v[le];ae&&ae.dispatchEvent({type:"connected",data:ue})}}const V=new $,Z=new $;function N(G,J,ue){V.setFromMatrixPosition(J.matrixWorld),Z.setFromMatrixPosition(ue.matrixWorld);const le=V.distanceTo(Z),ae=J.projectionMatrix.elements,Me=ue.projectionMatrix.elements,O=ae[14]/(ae[10]-1),F=ae[14]/(ae[10]+1),se=(ae[9]+1)/ae[5],fe=(ae[9]-1)/ae[5],be=(ae[8]-1)/ae[0],ge=(Me[8]+1)/Me[0],Ce=O*be,ve=O*ge,A=le/(-be+ge),P=A*-be;J.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(P),G.translateZ(A),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const H=O+A,ie=F+A,re=Ce-P,de=ve+(le-P),he=se*F/ie*H,pe=fe*F/ie*H;G.projectionMatrix.makePerspective(re,de,he,pe,H,ie)}function ne(G,J){J===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(J.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;T.near=w.near=M.near=G.near,T.far=w.far=M.far=G.far,(L!==T.near||_!==T.far)&&(r.updateRenderState({depthNear:T.near,depthFar:T.far}),L=T.near,_=T.far);const J=G.parent,ue=T.cameras;ne(T,J);for(let ae=0;ae<ue.length;ae++)ne(ue[ae],J);T.matrixWorld.decompose(T.position,T.quaternion,T.scale),G.position.copy(T.position),G.quaternion.copy(T.quaternion),G.scale.copy(T.scale),G.matrix.copy(T.matrix),G.matrixWorld.copy(T.matrixWorld);const le=G.children;for(let ae=0,Me=le.length;ae<Me;ae++)le[ae].updateMatrixWorld(!0);ue.length===2?N(T,M,w):T.projectionMatrix.copy(M.projectionMatrix)},this.getCamera=function(){return T},this.getFoveation=function(){if(f!==null)return f.fixedFoveation;if(d!==null)return d.fixedFoveation},this.setFoveation=function(G){f!==null&&(f.fixedFoveation=G),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=G)};let z=null;function X(G,J){if(c=J.getViewerPose(l||o),p=J,c!==null){const ue=c.views;d!==null&&(e.setRenderTargetFramebuffer(h,d.framebuffer),e.setRenderTarget(h));let le=!1;ue.length!==T.cameras.length&&(T.cameras.length=0,le=!0);for(let ae=0;ae<ue.length;ae++){const Me=ue[ae];let O=null;if(d!==null)O=d.getViewport(Me);else{const se=u.getViewSubImage(f,Me);O=se.viewport,ae===0&&(e.setRenderTargetTextures(h,se.colorTexture,f.ignoreDepthValues?void 0:se.depthStencilTexture),e.setRenderTarget(h))}let F=b[ae];F===void 0&&(F=new Xt,F.layers.enable(ae),F.viewport=new xt,b[ae]=F),F.matrix.fromArray(Me.transform.matrix),F.projectionMatrix.fromArray(Me.projectionMatrix),F.viewport.set(O.x,O.y,O.width,O.height),ae===0&&T.matrix.copy(F.matrix),le===!0&&T.cameras.push(F)}}for(let ue=0;ue<v.length;ue++){const le=x[ue],ae=v[ue];le!==null&&ae!==void 0&&ae.update(le,J,l||o)}z&&z(G,J),p=null}const Y=new em;Y.setAnimationLoop(X),this.setAnimationLoop=function(G){z=G},this.dispose=function(){}}}function t1(t,e){function n(m,h){m.fogColor.value.copy(h.color),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function i(m,h,v,x,M){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(m,h):h.isMeshToonMaterial?(r(m,h),u(m,h)):h.isMeshPhongMaterial?(r(m,h),c(m,h)):h.isMeshStandardMaterial?(r(m,h),f(m,h),h.isMeshPhysicalMaterial&&d(m,h,M)):h.isMeshMatcapMaterial?(r(m,h),p(m,h)):h.isMeshDepthMaterial?r(m,h):h.isMeshDistanceMaterial?(r(m,h),g(m,h)):h.isMeshNormalMaterial?r(m,h):h.isLineBasicMaterial?(s(m,h),h.isLineDashedMaterial&&o(m,h)):h.isPointsMaterial?a(m,h,v,x):h.isSpriteMaterial?l(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map),h.alphaMap&&(m.alphaMap.value=h.alphaMap),h.bumpMap&&(m.bumpMap.value=h.bumpMap,m.bumpScale.value=h.bumpScale,h.side===pn&&(m.bumpScale.value*=-1)),h.displacementMap&&(m.displacementMap.value=h.displacementMap,m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap),h.normalMap&&(m.normalMap.value=h.normalMap,m.normalScale.value.copy(h.normalScale),h.side===pn&&m.normalScale.value.negate()),h.specularMap&&(m.specularMap.value=h.specularMap),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const v=e.get(h).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap){m.lightMap.value=h.lightMap;const w=t.physicallyCorrectLights!==!0?Math.PI:1;m.lightMapIntensity.value=h.lightMapIntensity*w}h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity);let x;h.map?x=h.map:h.specularMap?x=h.specularMap:h.displacementMap?x=h.displacementMap:h.normalMap?x=h.normalMap:h.bumpMap?x=h.bumpMap:h.roughnessMap?x=h.roughnessMap:h.metalnessMap?x=h.metalnessMap:h.alphaMap?x=h.alphaMap:h.emissiveMap?x=h.emissiveMap:h.clearcoatMap?x=h.clearcoatMap:h.clearcoatNormalMap?x=h.clearcoatNormalMap:h.clearcoatRoughnessMap?x=h.clearcoatRoughnessMap:h.iridescenceMap?x=h.iridescenceMap:h.iridescenceThicknessMap?x=h.iridescenceThicknessMap:h.specularIntensityMap?x=h.specularIntensityMap:h.specularColorMap?x=h.specularColorMap:h.transmissionMap?x=h.transmissionMap:h.thicknessMap?x=h.thicknessMap:h.sheenColorMap?x=h.sheenColorMap:h.sheenRoughnessMap&&(x=h.sheenRoughnessMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),m.uvTransform.value.copy(x.matrix));let M;h.aoMap?M=h.aoMap:h.lightMap&&(M=h.lightMap),M!==void 0&&(M.isWebGLRenderTarget&&(M=M.texture),M.matrixAutoUpdate===!0&&M.updateMatrix(),m.uv2Transform.value.copy(M.matrix))}function s(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity}function o(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function a(m,h,v,x){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*v,m.scale.value=x*.5,h.map&&(m.map.value=h.map),h.alphaMap&&(m.alphaMap.value=h.alphaMap),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);let M;h.map?M=h.map:h.alphaMap&&(M=h.alphaMap),M!==void 0&&(M.matrixAutoUpdate===!0&&M.updateMatrix(),m.uvTransform.value.copy(M.matrix))}function l(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map),h.alphaMap&&(m.alphaMap.value=h.alphaMap),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);let v;h.map?v=h.map:h.alphaMap&&(v=h.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),m.uvTransform.value.copy(v.matrix))}function c(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function u(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function f(m,h){m.roughness.value=h.roughness,m.metalness.value=h.metalness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap),h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap),e.get(h).envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function d(m,h,v){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap)),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap),h.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),m.clearcoatNormalMap.value=h.clearcoatNormalMap,h.side===pn&&m.clearcoatNormalScale.value.negate())),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap)),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap)}function p(m,h){h.matcap&&(m.matcap.value=h.matcap)}function g(m,h){m.referencePosition.value.copy(h.referencePosition),m.nearDistance.value=h.nearDistance,m.farDistance.value=h.farDistance}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function n1(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(35375):0;function l(x,M){const w=M.program;i.uniformBlockBinding(x,w)}function c(x,M){let w=r[x.id];w===void 0&&(g(x),w=u(x),r[x.id]=w,x.addEventListener("dispose",h));const b=M.program;i.updateUBOMapping(x,b);const T=e.render.frame;s[x.id]!==T&&(d(x),s[x.id]=T)}function u(x){const M=f();x.__bindingPointIndex=M;const w=t.createBuffer(),b=x.__size,T=x.usage;return t.bindBuffer(35345,w),t.bufferData(35345,b,T),t.bindBuffer(35345,null),t.bindBufferBase(35345,M,w),w}function f(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const M=r[x.id],w=x.uniforms,b=x.__cache;t.bindBuffer(35345,M);for(let T=0,L=w.length;T<L;T++){const _=w[T];if(p(_,T,b)===!0){const E=_.value,D=_.__offset;typeof E=="number"?(_.__data[0]=E,t.bufferSubData(35345,D,_.__data)):(_.value.isMatrix3?(_.__data[0]=_.value.elements[0],_.__data[1]=_.value.elements[1],_.__data[2]=_.value.elements[2],_.__data[3]=_.value.elements[0],_.__data[4]=_.value.elements[3],_.__data[5]=_.value.elements[4],_.__data[6]=_.value.elements[5],_.__data[7]=_.value.elements[0],_.__data[8]=_.value.elements[6],_.__data[9]=_.value.elements[7],_.__data[10]=_.value.elements[8],_.__data[11]=_.value.elements[0]):E.toArray(_.__data),t.bufferSubData(35345,D,_.__data))}}t.bindBuffer(35345,null)}function p(x,M,w){const b=x.value;if(w[M]===void 0)return typeof b=="number"?w[M]=b:w[M]=b.clone(),!0;if(typeof b=="number"){if(w[M]!==b)return w[M]=b,!0}else{const T=w[M];if(T.equals(b)===!1)return T.copy(b),!0}return!1}function g(x){const M=x.uniforms;let w=0;const b=16;let T=0;for(let L=0,_=M.length;L<_;L++){const E=M[L],D=m(E);if(E.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),E.__offset=w,L>0){T=w%b;const B=b-T;T!==0&&B-D.boundary<0&&(w+=b-T,E.__offset=w)}w+=D.storage}return T=w%b,T>0&&(w+=b-T),x.__size=w,x.__cache={},this}function m(x){const M=x.value,w={boundary:0,storage:0};return typeof M=="number"?(w.boundary=4,w.storage=4):M.isVector2?(w.boundary=8,w.storage=8):M.isVector3||M.isColor?(w.boundary=16,w.storage=12):M.isVector4?(w.boundary=16,w.storage=16):M.isMatrix3?(w.boundary=48,w.storage=48):M.isMatrix4?(w.boundary=64,w.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),w}function h(x){const M=x.target;M.removeEventListener("dispose",h);const w=o.indexOf(M.__bindingPointIndex);o.splice(w,1),t.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function v(){for(const x in r)t.deleteBuffer(r[x]);o=[],r={},s={}}return{bind:l,update:c,dispose:v}}function i1(){const t=jo("canvas");return t.style.display="block",t}function om(t={}){this.isWebGLRenderer=!0;const e=t.canvas!==void 0?t.canvas:i1(),n=t.context!==void 0?t.context:null,i=t.depth!==void 0?t.depth:!0,r=t.stencil!==void 0?t.stencil:!0,s=t.antialias!==void 0?t.antialias:!1,o=t.premultipliedAlpha!==void 0?t.premultipliedAlpha:!0,a=t.preserveDrawingBuffer!==void 0?t.preserveDrawingBuffer:!1,l=t.powerPreference!==void 0?t.powerPreference:"default",c=t.failIfMajorPerformanceCaveat!==void 0?t.failIfMajorPerformanceCaveat:!1;let u;n!==null?u=n.getContextAttributes().alpha:u=t.alpha!==void 0?t.alpha:!1;let f=null,d=null;const p=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Zi,this.physicallyCorrectLights=!1,this.toneMapping=Hn,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const m=this;let h=!1,v=0,x=0,M=null,w=-1,b=null;const T=new xt,L=new xt;let _=null,E=e.width,D=e.height,B=1,V=null,Z=null;const N=new xt(0,0,E,D),ne=new xt(0,0,E,D);let z=!1;const X=new Jp;let Y=!1,G=!1,J=null;const ue=new Mt,le=new Je,ae=new $,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function O(){return M===null?B:1}let F=n;function se(C,W){for(let Q=0;Q<C.length;Q++){const j=C[Q],oe=e.getContext(j,W);if(oe!==null)return oe}return null}try{const C={alpha:!0,depth:i,stencil:r,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ic}`),e.addEventListener("webglcontextlost",Re,!1),e.addEventListener("webglcontextrestored",He,!1),e.addEventListener("webglcontextcreationerror",Ue,!1),F===null){const W=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&W.shift(),F=se(W,C),F===null)throw se(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}F.getShaderPrecisionFormat===void 0&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let fe,be,ge,Ce,ve,A,P,H,ie,re,de,he,pe,me,S,y,I,q,ee,ce,Se,U,_e,ye;function Le(){fe=new hw(F),be=new ow(F,fe,t),fe.init(be),U=new ZA(F,fe,be),ge=new jA(F,fe,be),Ce=new gw,ve=new FA,A=new XA(F,fe,ge,ve,be,U,Ce),P=new lw(m),H=new dw(m),ie=new Cb(F,be),_e=new rw(F,fe,ie,be),re=new pw(F,ie,Ce,_e),de=new yw(F,re,ie,Ce),ee=new xw(F,be,A),y=new aw(ve),he=new IA(m,P,H,fe,be,_e,y),pe=new t1(m,ve),me=new BA,S=new VA(fe,be),q=new iw(m,P,ge,de,u,o),I=new qA(m,de,be),ye=new n1(F,Ce,be,ge),ce=new sw(F,fe,Ce,be),Se=new mw(F,fe,Ce,be),Ce.programs=he.programs,m.capabilities=be,m.extensions=fe,m.properties=ve,m.renderLists=me,m.shadowMap=I,m.state=ge,m.info=Ce}Le();const Te=new e1(m,F);this.xr=Te,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const C=fe.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=fe.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(C){C!==void 0&&(B=C,this.setSize(E,D,!1))},this.getSize=function(C){return C.set(E,D)},this.setSize=function(C,W,Q){if(Te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}E=C,D=W,e.width=Math.floor(C*B),e.height=Math.floor(W*B),Q!==!1&&(e.style.width=C+"px",e.style.height=W+"px"),this.setViewport(0,0,C,W)},this.getDrawingBufferSize=function(C){return C.set(E*B,D*B).floor()},this.setDrawingBufferSize=function(C,W,Q){E=C,D=W,B=Q,e.width=Math.floor(C*Q),e.height=Math.floor(W*Q),this.setViewport(0,0,C,W)},this.getCurrentViewport=function(C){return C.copy(T)},this.getViewport=function(C){return C.copy(N)},this.setViewport=function(C,W,Q,j){C.isVector4?N.set(C.x,C.y,C.z,C.w):N.set(C,W,Q,j),ge.viewport(T.copy(N).multiplyScalar(B).floor())},this.getScissor=function(C){return C.copy(ne)},this.setScissor=function(C,W,Q,j){C.isVector4?ne.set(C.x,C.y,C.z,C.w):ne.set(C,W,Q,j),ge.scissor(L.copy(ne).multiplyScalar(B).floor())},this.getScissorTest=function(){return z},this.setScissorTest=function(C){ge.setScissorTest(z=C)},this.setOpaqueSort=function(C){V=C},this.setTransparentSort=function(C){Z=C},this.getClearColor=function(C){return C.copy(q.getClearColor())},this.setClearColor=function(){q.setClearColor.apply(q,arguments)},this.getClearAlpha=function(){return q.getClearAlpha()},this.setClearAlpha=function(){q.setClearAlpha.apply(q,arguments)},this.clear=function(C=!0,W=!0,Q=!0){let j=0;C&&(j|=16384),W&&(j|=256),Q&&(j|=1024),F.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Re,!1),e.removeEventListener("webglcontextrestored",He,!1),e.removeEventListener("webglcontextcreationerror",Ue,!1),me.dispose(),S.dispose(),ve.dispose(),P.dispose(),H.dispose(),de.dispose(),_e.dispose(),ye.dispose(),he.dispose(),Te.dispose(),Te.removeEventListener("sessionstart",Ye),Te.removeEventListener("sessionend",gt),J&&(J.dispose(),J=null),ct.stop()};function Re(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),h=!0}function He(){console.log("THREE.WebGLRenderer: Context Restored."),h=!1;const C=Ce.autoReset,W=I.enabled,Q=I.autoUpdate,j=I.needsUpdate,oe=I.type;Le(),Ce.autoReset=C,I.enabled=W,I.autoUpdate=Q,I.needsUpdate=j,I.type=oe}function Ue(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function R(C){const W=C.target;W.removeEventListener("dispose",R),we(W)}function we(C){te(C),ve.remove(C)}function te(C){const W=ve.get(C).programs;W!==void 0&&(W.forEach(function(Q){he.releaseProgram(Q)}),C.isShaderMaterial&&he.releaseShaderCache(C))}this.renderBufferDirect=function(C,W,Q,j,oe,Ie){W===null&&(W=Me);const Fe=oe.isMesh&&oe.matrixWorld.determinant()<0,Oe=Lm(C,W,Q,j,oe);ge.setMaterial(j,Fe);let Be=Q.index;const Ze=Q.attributes.position;if(Be===null){if(Ze===void 0||Ze.count===0)return}else if(Be.count===0)return;let We=1;j.wireframe===!0&&(Be=re.getWireframeAttribute(Q),We=2),_e.setup(oe,j,Oe,Q,Be);let qe,ot=ce;Be!==null&&(qe=ie.get(Be),ot=Se,ot.setIndex(qe));const wi=Be!==null?Be.count:Ze.count,sr=Q.drawRange.start*We,or=Q.drawRange.count*We,bn=Ie!==null?Ie.start*We:0,Xe=Ie!==null?Ie.count*We:1/0,ar=Math.max(sr,bn),ut=Math.min(wi,sr+or,bn+Xe)-1,$t=Math.max(0,ut-ar+1);if($t!==0){if(oe.isMesh)j.wireframe===!0?(ge.setLineWidth(j.wireframeLinewidth*O()),ot.setMode(1)):ot.setMode(4);else if(oe.isLine){let Zn=j.linewidth;Zn===void 0&&(Zn=1),ge.setLineWidth(Zn*O()),oe.isLineSegments?ot.setMode(1):oe.isLineLoop?ot.setMode(2):ot.setMode(3)}else oe.isPoints?ot.setMode(0):oe.isSprite&&ot.setMode(4);if(oe.isInstancedMesh)ot.renderInstances(ar,$t,oe.count);else if(Q.isInstancedBufferGeometry){const Zn=Math.min(Q.instanceCount,Q._maxInstanceCount);ot.renderInstances(ar,$t,Zn)}else ot.render(ar,$t)}},this.compile=function(C,W){d=S.get(C),d.init(),g.push(d),C.traverseVisible(function(Q){Q.isLight&&Q.layers.test(W.layers)&&(d.pushLight(Q),Q.castShadow&&d.pushShadow(Q))}),d.setupLights(m.physicallyCorrectLights),C.traverse(function(Q){const j=Q.material;if(j)if(Array.isArray(j))for(let oe=0;oe<j.length;oe++){const Ie=j[oe];ya(Ie,C,Q)}else ya(j,C,Q)}),g.pop(),d=null};let Ee=null;function Ae(C){Ee&&Ee(C)}function Ye(){ct.stop()}function gt(){ct.start()}const ct=new em;ct.setAnimationLoop(Ae),typeof self<"u"&&ct.setContext(self),this.setAnimationLoop=function(C){Ee=C,Te.setAnimationLoop(C),C===null?ct.stop():ct.start()},Te.addEventListener("sessionstart",Ye),Te.addEventListener("sessionend",gt),this.render=function(C,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(h===!0)return;C.autoUpdate===!0&&C.updateMatrixWorld(),W.parent===null&&W.updateMatrixWorld(),Te.enabled===!0&&Te.isPresenting===!0&&(Te.cameraAutoUpdate===!0&&Te.updateCamera(W),W=Te.getCamera()),C.isScene===!0&&C.onBeforeRender(m,C,W,M),d=S.get(C,g.length),d.init(),g.push(d),ue.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),X.setFromProjectionMatrix(ue),G=this.localClippingEnabled,Y=y.init(this.clippingPlanes,G,W),f=me.get(C,p.length),f.init(),p.push(f),Xn(C,W,0,m.sortObjects),f.finish(),m.sortObjects===!0&&f.sort(V,Z),Y===!0&&y.beginShadows();const Q=d.state.shadowsArray;if(I.render(Q,C,W),Y===!0&&y.endShadows(),this.info.autoReset===!0&&this.info.reset(),q.render(f,C),d.setupLights(m.physicallyCorrectLights),W.isArrayCamera){const j=W.cameras;for(let oe=0,Ie=j.length;oe<Ie;oe++){const Fe=j[oe];st(f,C,Fe,Fe.viewport)}}else st(f,C,W);M!==null&&(A.updateMultisampleRenderTarget(M),A.updateRenderTargetMipmap(M)),C.isScene===!0&&C.onAfterRender(m,C,W),_e.resetDefaultState(),w=-1,b=null,g.pop(),g.length>0?d=g[g.length-1]:d=null,p.pop(),p.length>0?f=p[p.length-1]:f=null};function Xn(C,W,Q,j){if(C.visible===!1)return;if(C.layers.test(W.layers)){if(C.isGroup)Q=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(W);else if(C.isLight)d.pushLight(C),C.castShadow&&d.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||X.intersectsSprite(C)){j&&ae.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ue);const Fe=de.update(C),Oe=C.material;Oe.visible&&f.push(C,Fe,Oe,Q,ae.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(C.isSkinnedMesh&&C.skeleton.frame!==Ce.render.frame&&(C.skeleton.update(),C.skeleton.frame=Ce.render.frame),!C.frustumCulled||X.intersectsObject(C))){j&&ae.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ue);const Fe=de.update(C),Oe=C.material;if(Array.isArray(Oe)){const Be=Fe.groups;for(let Ze=0,We=Be.length;Ze<We;Ze++){const qe=Be[Ze],ot=Oe[qe.materialIndex];ot&&ot.visible&&f.push(C,Fe,ot,Q,ae.z,qe)}}else Oe.visible&&f.push(C,Fe,Oe,Q,ae.z,null)}}const Ie=C.children;for(let Fe=0,Oe=Ie.length;Fe<Oe;Fe++)Xn(Ie[Fe],W,Q,j)}function st(C,W,Q,j){const oe=C.opaque,Ie=C.transmissive,Fe=C.transparent;d.setupLightsView(Q),Ie.length>0&&Dn(oe,W,Q),j&&ge.viewport(T.copy(j)),oe.length>0&&Wt(oe,W,Q),Ie.length>0&&Wt(Ie,W,Q),Fe.length>0&&Wt(Fe,W,Q),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function Dn(C,W,Q){const j=be.isWebGL2;J===null&&(J=new Ki(1,1,{generateMipmaps:!0,type:fe.has("EXT_color_buffer_half_float")?Us:Xi,minFilter:va,samples:j&&s===!0?4:0})),m.getDrawingBufferSize(le),j?J.setSize(le.x,le.y):J.setSize(jl(le.x),jl(le.y));const oe=m.getRenderTarget();m.setRenderTarget(J),m.clear();const Ie=m.toneMapping;m.toneMapping=Hn,Wt(C,W,Q),m.toneMapping=Ie,A.updateMultisampleRenderTarget(J),A.updateRenderTargetMipmap(J),m.setRenderTarget(oe)}function Wt(C,W,Q){const j=W.isScene===!0?W.overrideMaterial:null;for(let oe=0,Ie=C.length;oe<Ie;oe++){const Fe=C[oe],Oe=Fe.object,Be=Fe.geometry,Ze=j===null?Fe.material:j,We=Fe.group;Oe.layers.test(Q.layers)&&Tm(Oe,W,Q,Be,Ze,We)}}function Tm(C,W,Q,j,oe,Ie){C.onBeforeRender(m,W,Q,j,oe,Ie),C.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),oe.onBeforeRender(m,W,Q,j,C,Ie),oe.transparent===!0&&oe.side===Vr?(oe.side=pn,oe.needsUpdate=!0,m.renderBufferDirect(Q,W,j,oe,C,Ie),oe.side=zs,oe.needsUpdate=!0,m.renderBufferDirect(Q,W,j,oe,C,Ie),oe.side=Vr):m.renderBufferDirect(Q,W,j,oe,C,Ie),C.onAfterRender(m,W,Q,j,oe,Ie)}function ya(C,W,Q){W.isScene!==!0&&(W=Me);const j=ve.get(C),oe=d.state.lights,Ie=d.state.shadowsArray,Fe=oe.state.version,Oe=he.getParameters(C,oe.state,Ie,W,Q),Be=he.getProgramCacheKey(Oe);let Ze=j.programs;j.environment=C.isMeshStandardMaterial?W.environment:null,j.fog=W.fog,j.envMap=(C.isMeshStandardMaterial?H:P).get(C.envMap||j.environment),Ze===void 0&&(C.addEventListener("dispose",R),Ze=new Map,j.programs=Ze);let We=Ze.get(Be);if(We!==void 0){if(j.currentProgram===We&&j.lightsStateVersion===Fe)return $c(C,Oe),We}else Oe.uniforms=he.getUniforms(C),C.onBuild(Q,Oe,m),C.onBeforeCompile(Oe,m),We=he.acquireProgram(Oe,Be),Ze.set(Be,We),j.uniforms=Oe.uniforms;const qe=j.uniforms;(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(qe.clippingPlanes=y.uniform),$c(C,Oe),j.needsLights=Dm(C),j.lightsStateVersion=Fe,j.needsLights&&(qe.ambientLightColor.value=oe.state.ambient,qe.lightProbe.value=oe.state.probe,qe.directionalLights.value=oe.state.directional,qe.directionalLightShadows.value=oe.state.directionalShadow,qe.spotLights.value=oe.state.spot,qe.spotLightShadows.value=oe.state.spotShadow,qe.rectAreaLights.value=oe.state.rectArea,qe.ltc_1.value=oe.state.rectAreaLTC1,qe.ltc_2.value=oe.state.rectAreaLTC2,qe.pointLights.value=oe.state.point,qe.pointLightShadows.value=oe.state.pointShadow,qe.hemisphereLights.value=oe.state.hemi,qe.directionalShadowMap.value=oe.state.directionalShadowMap,qe.directionalShadowMatrix.value=oe.state.directionalShadowMatrix,qe.spotShadowMap.value=oe.state.spotShadowMap,qe.spotShadowMatrix.value=oe.state.spotShadowMatrix,qe.pointShadowMap.value=oe.state.pointShadowMap,qe.pointShadowMatrix.value=oe.state.pointShadowMatrix);const ot=We.getUniforms(),wi=No.seqWithValue(ot.seq,qe);return j.currentProgram=We,j.uniformsList=wi,We}function $c(C,W){const Q=ve.get(C);Q.outputEncoding=W.outputEncoding,Q.instancing=W.instancing,Q.skinning=W.skinning,Q.morphTargets=W.morphTargets,Q.morphNormals=W.morphNormals,Q.morphColors=W.morphColors,Q.morphTargetsCount=W.morphTargetsCount,Q.numClippingPlanes=W.numClippingPlanes,Q.numIntersection=W.numClipIntersection,Q.vertexAlphas=W.vertexAlphas,Q.vertexTangents=W.vertexTangents,Q.toneMapping=W.toneMapping}function Lm(C,W,Q,j,oe){W.isScene!==!0&&(W=Me),A.resetTextureUnits();const Ie=W.fog,Fe=j.isMeshStandardMaterial?W.environment:null,Oe=M===null?m.outputEncoding:M.isXRRenderTarget===!0?M.texture.encoding:Zi,Be=(j.isMeshStandardMaterial?H:P).get(j.envMap||Fe),Ze=j.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,We=!!j.normalMap&&!!Q.attributes.tangent,qe=!!Q.morphAttributes.position,ot=!!Q.morphAttributes.normal,wi=!!Q.morphAttributes.color,sr=j.toneMapped?m.toneMapping:Hn,or=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,bn=or!==void 0?or.length:0,Xe=ve.get(j),ar=d.state.lights;if(Y===!0&&(G===!0||C!==b)){const Bt=C===b&&j.id===w;y.setState(j,C,Bt)}let ut=!1;j.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==ar.state.version||Xe.outputEncoding!==Oe||oe.isInstancedMesh&&Xe.instancing===!1||!oe.isInstancedMesh&&Xe.instancing===!0||oe.isSkinnedMesh&&Xe.skinning===!1||!oe.isSkinnedMesh&&Xe.skinning===!0||Xe.envMap!==Be||j.fog===!0&&Xe.fog!==Ie||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==y.numPlanes||Xe.numIntersection!==y.numIntersection)||Xe.vertexAlphas!==Ze||Xe.vertexTangents!==We||Xe.morphTargets!==qe||Xe.morphNormals!==ot||Xe.morphColors!==wi||Xe.toneMapping!==sr||be.isWebGL2===!0&&Xe.morphTargetsCount!==bn)&&(ut=!0):(ut=!0,Xe.__version=j.version);let $t=Xe.currentProgram;ut===!0&&($t=ya(j,W,oe));let Zn=!1,is=!1,ba=!1;const Ct=$t.getUniforms(),rs=Xe.uniforms;if(ge.useProgram($t.program)&&(Zn=!0,is=!0,ba=!0),j.id!==w&&(w=j.id,is=!0),Zn||b!==C){if(Ct.setValue(F,"projectionMatrix",C.projectionMatrix),be.logarithmicDepthBuffer&&Ct.setValue(F,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),b!==C&&(b=C,is=!0,ba=!0),j.isShaderMaterial||j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshStandardMaterial||j.envMap){const Bt=Ct.map.cameraPosition;Bt!==void 0&&Bt.setValue(F,ae.setFromMatrixPosition(C.matrixWorld))}(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Ct.setValue(F,"isOrthographic",C.isOrthographicCamera===!0),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial||j.isShadowMaterial||oe.isSkinnedMesh)&&Ct.setValue(F,"viewMatrix",C.matrixWorldInverse)}if(oe.isSkinnedMesh){Ct.setOptional(F,oe,"bindMatrix"),Ct.setOptional(F,oe,"bindMatrixInverse");const Bt=oe.skeleton;Bt&&(be.floatVertexTextures?(Bt.boneTexture===null&&Bt.computeBoneTexture(),Ct.setValue(F,"boneTexture",Bt.boneTexture,A),Ct.setValue(F,"boneTextureSize",Bt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Sa=Q.morphAttributes;if((Sa.position!==void 0||Sa.normal!==void 0||Sa.color!==void 0&&be.isWebGL2===!0)&&ee.update(oe,Q,j,$t),(is||Xe.receiveShadow!==oe.receiveShadow)&&(Xe.receiveShadow=oe.receiveShadow,Ct.setValue(F,"receiveShadow",oe.receiveShadow)),is&&(Ct.setValue(F,"toneMappingExposure",m.toneMappingExposure),Xe.needsLights&&Pm(rs,ba),Ie&&j.fog===!0&&pe.refreshFogUniforms(rs,Ie),pe.refreshMaterialUniforms(rs,j,B,D,J),No.upload(F,Xe.uniformsList,rs,A)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(No.upload(F,Xe.uniformsList,rs,A),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Ct.setValue(F,"center",oe.center),Ct.setValue(F,"modelViewMatrix",oe.modelViewMatrix),Ct.setValue(F,"normalMatrix",oe.normalMatrix),Ct.setValue(F,"modelMatrix",oe.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const Bt=j.uniformsGroups;for(let Ma=0,Rm=Bt.length;Ma<Rm;Ma++)if(be.isWebGL2){const Yc=Bt[Ma];ye.update(Yc,$t),ye.bind(Yc,$t)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return $t}function Pm(C,W){C.ambientLightColor.needsUpdate=W,C.lightProbe.needsUpdate=W,C.directionalLights.needsUpdate=W,C.directionalLightShadows.needsUpdate=W,C.pointLights.needsUpdate=W,C.pointLightShadows.needsUpdate=W,C.spotLights.needsUpdate=W,C.spotLightShadows.needsUpdate=W,C.rectAreaLights.needsUpdate=W,C.hemisphereLights.needsUpdate=W}function Dm(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return x},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(C,W,Q){ve.get(C.texture).__webglTexture=W,ve.get(C.depthTexture).__webglTexture=Q;const j=ve.get(C);j.__hasExternalTextures=!0,j.__hasExternalTextures&&(j.__autoAllocateDepthBuffer=Q===void 0,j.__autoAllocateDepthBuffer||fe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,W){const Q=ve.get(C);Q.__webglFramebuffer=W,Q.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(C,W=0,Q=0){M=C,v=W,x=Q;let j=!0;if(C){const Be=ve.get(C);Be.__useDefaultFramebuffer!==void 0?(ge.bindFramebuffer(36160,null),j=!1):Be.__webglFramebuffer===void 0?A.setupRenderTarget(C):Be.__hasExternalTextures&&A.rebindTextures(C,ve.get(C.texture).__webglTexture,ve.get(C.depthTexture).__webglTexture)}let oe=null,Ie=!1,Fe=!1;if(C){const Be=C.texture;(Be.isData3DTexture||Be.isDataArrayTexture)&&(Fe=!0);const Ze=ve.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(oe=Ze[W],Ie=!0):be.isWebGL2&&C.samples>0&&A.useMultisampledRTT(C)===!1?oe=ve.get(C).__webglMultisampledFramebuffer:oe=Ze,T.copy(C.viewport),L.copy(C.scissor),_=C.scissorTest}else T.copy(N).multiplyScalar(B).floor(),L.copy(ne).multiplyScalar(B).floor(),_=z;if(ge.bindFramebuffer(36160,oe)&&be.drawBuffers&&j&&ge.drawBuffers(C,oe),ge.viewport(T),ge.scissor(L),ge.setScissorTest(_),Ie){const Be=ve.get(C.texture);F.framebufferTexture2D(36160,36064,34069+W,Be.__webglTexture,Q)}else if(Fe){const Be=ve.get(C.texture),Ze=W||0;F.framebufferTextureLayer(36160,36064,Be.__webglTexture,Q||0,Ze)}w=-1},this.readRenderTargetPixels=function(C,W,Q,j,oe,Ie,Fe){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=ve.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Fe!==void 0&&(Oe=Oe[Fe]),Oe){ge.bindFramebuffer(36160,Oe);try{const Be=C.texture,Ze=Be.format,We=Be.type;if(Ze!==En&&U.convert(Ze)!==F.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const qe=We===Us&&(fe.has("EXT_color_buffer_half_float")||be.isWebGL2&&fe.has("EXT_color_buffer_float"));if(We!==Xi&&U.convert(We)!==F.getParameter(35738)&&!(We===Gi&&(be.isWebGL2||fe.has("OES_texture_float")||fe.has("WEBGL_color_buffer_float")))&&!qe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=C.width-j&&Q>=0&&Q<=C.height-oe&&F.readPixels(W,Q,j,oe,U.convert(Ze),U.convert(We),Ie)}finally{const Be=M!==null?ve.get(M).__webglFramebuffer:null;ge.bindFramebuffer(36160,Be)}}},this.copyFramebufferToTexture=function(C,W,Q=0){const j=Math.pow(2,-Q),oe=Math.floor(W.image.width*j),Ie=Math.floor(W.image.height*j);A.setTexture2D(W,0),F.copyTexSubImage2D(3553,Q,0,0,C.x,C.y,oe,Ie),ge.unbindTexture()},this.copyTextureToTexture=function(C,W,Q,j=0){const oe=W.image.width,Ie=W.image.height,Fe=U.convert(Q.format),Oe=U.convert(Q.type);A.setTexture2D(Q,0),F.pixelStorei(37440,Q.flipY),F.pixelStorei(37441,Q.premultiplyAlpha),F.pixelStorei(3317,Q.unpackAlignment),W.isDataTexture?F.texSubImage2D(3553,j,C.x,C.y,oe,Ie,Fe,Oe,W.image.data):W.isCompressedTexture?F.compressedTexSubImage2D(3553,j,C.x,C.y,W.mipmaps[0].width,W.mipmaps[0].height,Fe,W.mipmaps[0].data):F.texSubImage2D(3553,j,C.x,C.y,Fe,Oe,W.image),j===0&&Q.generateMipmaps&&F.generateMipmap(3553),ge.unbindTexture()},this.copyTextureToTexture3D=function(C,W,Q,j,oe=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ie=C.max.x-C.min.x+1,Fe=C.max.y-C.min.y+1,Oe=C.max.z-C.min.z+1,Be=U.convert(j.format),Ze=U.convert(j.type);let We;if(j.isData3DTexture)A.setTexture3D(j,0),We=32879;else if(j.isDataArrayTexture)A.setTexture2DArray(j,0),We=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(37440,j.flipY),F.pixelStorei(37441,j.premultiplyAlpha),F.pixelStorei(3317,j.unpackAlignment);const qe=F.getParameter(3314),ot=F.getParameter(32878),wi=F.getParameter(3316),sr=F.getParameter(3315),or=F.getParameter(32877),bn=Q.isCompressedTexture?Q.mipmaps[0]:Q.image;F.pixelStorei(3314,bn.width),F.pixelStorei(32878,bn.height),F.pixelStorei(3316,C.min.x),F.pixelStorei(3315,C.min.y),F.pixelStorei(32877,C.min.z),Q.isDataTexture||Q.isData3DTexture?F.texSubImage3D(We,oe,W.x,W.y,W.z,Ie,Fe,Oe,Be,Ze,bn.data):Q.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),F.compressedTexSubImage3D(We,oe,W.x,W.y,W.z,Ie,Fe,Oe,Be,bn.data)):F.texSubImage3D(We,oe,W.x,W.y,W.z,Ie,Fe,Oe,Be,Ze,bn),F.pixelStorei(3314,qe),F.pixelStorei(32878,ot),F.pixelStorei(3316,wi),F.pixelStorei(3315,sr),F.pixelStorei(32877,or),oe===0&&j.generateMipmaps&&F.generateMipmap(We),ge.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?A.setTextureCube(C,0):C.isData3DTexture?A.setTexture3D(C,0):C.isDataArrayTexture?A.setTexture2DArray(C,0):A.setTexture2D(C,0),ge.unbindTexture()},this.resetState=function(){v=0,x=0,M=null,ge.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class r1 extends om{}r1.prototype.isWebGL1Renderer=!0;class s1 extends _n{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n}}class kc extends Mi{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new $,d=new $,p=[],g=[],m=[],h=[];for(let v=0;v<=i;v++){const x=[],M=v/i;let w=0;v==0&&o==0?w=.5/n:v==i&&l==Math.PI&&(w=-.5/n);for(let b=0;b<=n;b++){const T=b/n;f.x=-e*Math.cos(r+T*s)*Math.sin(o+M*a),f.y=e*Math.cos(o+M*a),f.z=e*Math.sin(r+T*s)*Math.sin(o+M*a),g.push(f.x,f.y,f.z),d.copy(f).normalize(),m.push(d.x,d.y,d.z),h.push(T+w,1-M),x.push(c++)}u.push(x)}for(let v=0;v<i;v++)for(let x=0;x<n;x++){const M=u[v][x+1],w=u[v][x],b=u[v+1][x],T=u[v+1][x+1];(v!==0||o>0)&&p.push(M,w,T),(v!==i-1||l<Math.PI)&&p.push(w,b,T)}this.setIndex(p),this.setAttribute("position",new Ln(g,3)),this.setAttribute("normal",new Ln(m,3)),this.setAttribute("uv",new Ln(h,2))}static fromJSON(e){return new kc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ic}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ic);function o1(){let t=document.getElementById("container");const e=new om;e.setSize(window.innerWidth,window.innerHeight),t.appendChild(e.domElement);const n=new Xt(45,window.innerWidth/window.innerHeight,1,500);n.position.set(0,0,100),n.lookAt(0,0,0);const i=new s1;i.background=new et(1184274);var r=20,s=5,o=5,a=new kc(r,s,o),l=new Nc({color:1802319,wireframe:!0}),c=new Gn(a,l);i.add(c);var u=function(){requestAnimationFrame(u),c.rotation.x+=.003,c.rotation.y+=.003,e.render(i,n)};u()}const a1={name:"HelloWorld",data:()=>({}),methods:{init:function(){console.log("init")}},mounted(){o1()}},l1={id:"container"};function c1(t,e,n,i,r,s){return Nt(),la("div",l1)}const u1=tr(a1,[["render",c1]]),f1=xi({name:"HomeView",components:{HelloWorld:u1}});function d1(t,e,n,i,r,s){const o=pc("HelloWorld");return Nt(),Cn(o)}const h1=tr(f1,[["render",d1]]),p1="/assets/waveslab.bdff3c3e.png",m1="/assets/midpoint.6c5de331.png",g1="/assets/keycode.996cce5d.png",v1="/assets/bresenham.3f3c1cb9.png",_1="/assets/hoppy_hunting.4425d59e.png",x1="/assets/matrixflight.c1c96f06.png",y1="/assets/loaders.b7810575.png",b1="/assets/ng-logo.8ed150a9.svg",S1="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA8AAAAHMCAMAAAAtVTH7AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAyVBMVEUAAAAAVVUAM00AAIAAOkwAO0wAO00AO00AO00AOkwAPE0AO00AOk4AOk0AO00AO00APkwAO04AO00AK1UAPE0AO00APEwAO00APE4AO00AQFAAO04AO00APU4AO00AO00AQE0AO00AO00AOk0AO00AO00APE4AOkwAO00AO04AO00AO00AO04AO04AO00AO00APE0APEwAO0sAPEwAOkoANlEAOk4AO00APEsAOk4AQEAAO00AO00AO00AO00APE0APEwAO03///+fWmDUAAAAQXRSTlMAAwoCZUruOPRUat8+QurxJUHVBnjQXqxzwRCUdC7UjhSbpc3Gqo1yVsKPo6HP5NvJpz1rMBNYcTNpCPj6sLrwLyjRVb8AAAABYktHREIQ1z30AAAAB3RJTUUH6QsWBhofxpVSJAAAB1NJREFUeNrt0wdWAkEQQEGzYgIxZ8WAiDnncP9LeYNle2VHgfoH6O55b2poSJIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIk9VPDI0rZqC+nbjb2rZSN+3ICGGAJYIAFsAAWwABLAAMsgAWwABbAAhhgCWCABbAAFsAASwADLIAFsAAWwAIYYAlggAWwABbAAlgAAywBDLAAFsACGGAJYIAFsAAWwAJYAAMsAQywABbAAlgAC2CAJYABFsACWAADLAEMsAAWwAJYAAtggCWAARbAAlgAAywBDLAEMMACWAALYIAlgAEWwAJYAAtgAQywBDDAAlgAC2CApb8FPDEZbCq6oTJZpOnompnZWHMAqw8Az0d3VaMbaoWetBBdUw8uWARYAAMsAQywAAYYYAEMMMACGGAJYIAFMMAAC2CAARbAAEsAAyyAAQZYAAMsAQywAAYYYAEMMMACGGAJYIAFMMAAC2CAARbAAEsADwDgpeXOraQ5pZbjlNXgzLUSnreeY+YGwAAnaTPHSVtpTtnOccpOcOZuCc+byDFzD2CAAQYYYIABBhhggAEGGGCAAQYYYIABBhhggAEGGGCAAQYYYIABBhhggAEGGGCAAQYYYIABBhhggAEGGGCAAQYYYIABBhhggAEGGGCAAQYYYIABBhhggAEGGGCAAQYYYIABBhhggAEGGGCAAQYYYIABBhhggAEGGGCAAQYYYIABBhhggAEGGGCAAQYYYIABBhhggAEGGGCAAQYYYIABBhhggAEGGGCAAQYYYIABBhhggAEGGGCAAQYYYIABBhhggAEGGGCAAQYYYIABBhhggAEGGGCAAQYYYIABBhhggAEGGGCAAQYYYIABBhhggAEGGGCAAQYYYIABBhhggAEGGGCAAQYYYIABBhhggAEGGGCAAQYYYIABBhhggAEGGGCAAQYYYIABBhhggAEGGGCAAQYYYIABBhhggAEGGGCAAQYYYIABBhhggAEGGGCAAQYY4DztN7I6KBHw4VFWxwADDPBva5YI+KSrlwIMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAADyTg1mmS2gADDHAJgP9RAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAAD3DOAzypJagIMMMAlAN5Kc8o2wAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwzwvwDcOs/qokTAl1dZXQMMMMCdq0Y3dA1wdnWAAQYYYIABBhhggAEGGGCAAQYYYIABBhhggAEGGGCAAQYYYIABBhhggAEGGGCAAQYYYIABBhhggAEGGGCAAQYYYIABBhhggAEGGGCAAQYYYIABBhhggAEGGGCAAQYYYIABBhhggAEGGGCAAQYYYIABBhhggAEGGGCAAQYYYIABBhhggAEGGGCAAQYYYIABBhhggAEGGGCAAQYYYIABBhhggAEGGGCAAQYYYIABBhhggAEGGGCAAQYYYIABBhhggAEGGGCAAQYYYIABBhhggAEGGGCAAQYYYIABBhhggAEGGGCAAQYYYIABBhhggAEGGGCAAQYYYIABBhhggAEGGGCAAQYYYIABBhhggAEGGGCAAQYYYIABBhhggAEGGGCAAQYYYIABBhhggAEGGGCAAQYYYIABBhhggAEGGGCAAQYYYIABBhhggAEGGGCAAQYYYIABBhhggAEGGGCAAQYY4ELd3HbuLs0p9zlOeQjOnH3s3FNw5nOOmS8AAywBDLAABhhgAQwwwAIYYAlggAUwwAALYIABFsAASwADLIABBlgAAywBDLAABhhgAQwwwAIYYAlggAUwwAALYIABFsAASwADrMEG/NoO9hbd8N4u0kd0zWdwQQNg9QFgASyAAZYABlgAC2ABLIAFMMASwAALYAEsgAH25QQwwBLAAAtgASyAAZYABlgAC2ABLIAFMMASwAALYAEsgAGWAAZYAAtgASyABTDAEsAAC2ABLIAFsAAGWAIYYAEsgAUwwBLAAAtgASyABbAABlgCGGABLIAFsAAWwABLAAMsgAWwAAZYAhhgASyABbAAFsAASwADLIAFsAAGWAIYYAlggNXbLTSUsi9fTpIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZL+pB958oPFK+lLDQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyNS0xMS0yMlQwNjoyNjozMSswMDowMHtjhYQAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjUtMTEtMjJUMDY6MjY6MzErMDA6MDAKPj04AAAAAElFTkSuQmCC";const M1=je({name:"VBtnGroup",props:{divided:Boolean,...Jr(),...bi(),...Si(),...Pn(),...bt(),...tn(),...Ys()},setup(t,e){let{slots:n}=e;const{themeClasses:i}=nn(t),{densityClasses:r}=ir(t),{borderClasses:s}=es(t),{elevationClasses:o}=rr(t),{roundedClasses:a}=jn(t);yi({VBtn:{height:"auto",color:Ve(t,"color"),density:Ve(t,"density"),flat:!0,variant:Ve(t,"variant")}}),nt(()=>k(t.tag,{class:["v-btn-group",{"v-btn-group--divided":t.divided},i.value,s.value,r.value,o.value,a.value]},n))}}),w1=tt({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),A1=tt({value:null,disabled:Boolean,selectedClass:String},"group-item");function E1(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const i=en("useGroupItem");if(!i)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const r=Vs();Lt(Symbol.for(`${e.description}:id`),r);const s=rt(e,null);if(!s){if(!n)return s;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${e.description}`)}const o=Ve(t,"value"),a=K(()=>s.disabled.value||t.disabled);s.register({id:r,value:o,disabled:a},i),xn(()=>{s.unregister(r)});const l=K(()=>s.isSelected(r)),c=K(()=>l.value&&[s.selectedClass.value,t.selectedClass]);return pt(l,u=>{i.emit("group:selected",{value:u})}),{id:r,isSelected:l,toggle:()=>s.select(r,!l.value),select:u=>s.select(r,u),selectedClass:c,value:o,disabled:a,group:s}}function C1(t,e){let n=!1;const i=Ft([]),r=Fs(t,"modelValue",[],d=>d==null?[]:am(i,o_(d)),d=>{const p=L1(i,d);return t.multiple?p:p[0]}),s=en("useGroup");function o(d,p){const g=d,m=Symbol.for(`${e.description}:id`),v=bs(m,s==null?void 0:s.vnode).indexOf(p);v>-1?i.splice(v,0,g):i.push(g)}function a(d){if(n)return;l();const p=i.findIndex(g=>g.id===d);i.splice(p,1)}function l(){const d=i.find(p=>!p.disabled);d&&t.mandatory==="force"&&!r.value.length&&(r.value=[d.id])}Ji(()=>{l()}),xn(()=>{n=!0});function c(d,p){const g=i.find(v=>v.id===d);if(!(p&&g!=null&&g.disabled))if(t.multiple){var m;const v=r.value.slice(),x=v.findIndex(w=>w===d),M=~x;if(p=(m=p)!=null?m:!M,M&&t.mandatory&&v.length<=1||!M&&t.max!=null&&v.length+1>t.max)return;x<0&&p?v.push(d):x>=0&&!p&&v.splice(x,1),r.value=v}else{var h;const v=r.value.includes(d);if(t.mandatory&&v)return;r.value=((h=p)!=null?h:!v)?[d]:[]}}function u(d){if(t.multiple&&Nr('This method is not supported when using "multiple" prop'),r.value.length){const p=r.value[0],g=i.findIndex(v=>v.id===p);let m=(g+d)%i.length,h=i[m];for(;h.disabled&&m!==g;)m=(m+d)%i.length,h=i[m];if(h.disabled)return;r.value=[i[m].id]}else{const p=i.find(g=>!g.disabled);p&&(r.value=[p.id])}}const f={register:o,unregister:a,selected:r,select:c,disabled:Ve(t,"disabled"),prev:()=>u(i.length-1),next:()=>u(1),isSelected:d=>r.value.includes(d),selectedClass:K(()=>t.selectedClass),items:K(()=>i),getItemIndex:d=>T1(i,d)};return Lt(e,f),f}function T1(t,e){const n=am(t,[e]);return n.length?t.findIndex(i=>i.id===n[0]):-1}function am(t,e){const n=[];for(let i=0;i<t.length;i++){const r=t[i];r.value!=null?e.find(s=>$h(s,r.value))!=null&&n.push(r.id):e.includes(i)&&n.push(r.id)}return n}function L1(t,e){const n=[];for(let i=0;i<t.length;i++){const r=t[i];e.includes(r.id)&&n.push(r.value!=null?r.value:i)}return n}const lm=Symbol.for("vuetify:v-btn-toggle");Hs()({name:"VBtnToggle",props:w1({selectedClass:"v-btn--selected"}),emits:{"update:modelValue":t=>!0},setup(t,e){let{slots:n}=e;const{isSelected:i,next:r,prev:s,select:o,selected:a}=C1(t,lm);return nt(()=>{var l;return k(M1,{class:"v-btn-toggle"},{default:()=>[(l=n.default)==null?void 0:l.call(n,{isSelected:i,next:r,prev:s,select:o,selected:a})]})}),{next:r,prev:s,select:o}}});function cm(t){const e=Pe(),n=Pe(!1);if(xc){const i=new IntersectionObserver(r=>{t==null||t(r,i),n.value=!!r.find(s=>s.isIntersecting)});xn(()=>{i.disconnect()}),pt(e,(r,s)=>{s&&(i.unobserve(s),n.value=!1),r&&i.observe(r)},{flush:"post"})}return{intersectionRef:e,isIntersecting:n}}const P1=je({name:"VProgressCircular",props:{bgColor:String,color:String,indeterminate:[Boolean,String],modelValue:{type:[Number,String],default:0},rotate:{type:[Number,String],default:0},width:{type:[Number,String],default:4},...Zr(),...bt({tag:"div"}),...tn()},setup(t,e){let{slots:n}=e;const i=20,r=2*Math.PI*i,s=Pe(),{themeClasses:o}=nn(t),{sizeClasses:a,sizeStyles:l}=$s(t),{textColorClasses:c,textColorStyles:u}=Is(Ve(t,"color")),{textColorClasses:f,textColorStyles:d}=Is(Ve(t,"bgColor")),{intersectionRef:p,isIntersecting:g}=cm(),{resizeRef:m,contentRect:h}=Vh(),v=K(()=>Math.max(0,Math.min(100,parseFloat(t.modelValue)))),x=K(()=>Number(t.width)),M=K(()=>l.value?Number(t.size):h.value?h.value.width:Math.max(x.value,32)),w=K(()=>i/(1-x.value/M.value)*2),b=K(()=>x.value/M.value*w.value),T=K(()=>ze((100-v.value)/100*r));return ra(()=>{p.value=s.value,m.value=s.value}),nt(()=>k(t.tag,{ref:s,class:["v-progress-circular",{"v-progress-circular--indeterminate":!!t.indeterminate,"v-progress-circular--visible":g.value,"v-progress-circular--disable-shrink":t.indeterminate==="disable-shrink"},o.value,a.value,c.value],style:[l.value,u.value],role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":t.indeterminate?void 0:v.value},{default:()=>[k("svg",{style:{transform:`rotate(calc(-90deg + ${Number(t.rotate)}deg))`},xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${w.value} ${w.value}`},[k("circle",{class:["v-progress-circular__underlay",f.value],style:d.value,fill:"transparent",cx:"50%",cy:"50%",r:i,"stroke-width":b.value,"stroke-dasharray":r,"stroke-dashoffset":0},null),k("circle",{class:"v-progress-circular__overlay",fill:"transparent",cx:"50%",cy:"50%",r:i,"stroke-width":b.value,"stroke-dasharray":r,"stroke-dashoffset":T.value},null)]),n.default&&k("div",{class:"v-progress-circular__content"},[n.default({value:v.value})])]})),{}}});const D1=je({name:"VProgressLinear",props:{active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...Pn(),...bt(),...tn()},emits:{"update:modelValue":t=>!0},setup(t,e){let{slots:n}=e;const i=Fs(t,"modelValue"),{isRtl:r}=ha(),{themeClasses:s}=nn(t),{textColorClasses:o,textColorStyles:a}=Is(t,"color"),{backgroundColorClasses:l,backgroundColorStyles:c}=Yn(K(()=>t.bgColor||t.color)),{backgroundColorClasses:u,backgroundColorStyles:f}=Yn(t,"color"),{roundedClasses:d}=jn(t),{intersectionRef:p,isIntersecting:g}=cm(),m=K(()=>parseInt(t.max,10)),h=K(()=>parseInt(t.height,10)),v=K(()=>parseFloat(t.bufferValue)/m.value*100),x=K(()=>parseFloat(i.value)/m.value*100),M=K(()=>r.value!==t.reverse),w=K(()=>t.indeterminate?"fade-transition":"slide-x-transition"),b=K(()=>t.bgOpacity==null?t.bgOpacity:parseFloat(t.bgOpacity));function T(L){if(!p.value)return;const{left:_,right:E,width:D}=p.value.getBoundingClientRect(),B=M.value?D-L.clientX+(E-D):L.clientX-_;i.value=Math.round(B/D*m.value)}return nt(()=>k(t.tag,{ref:p,class:["v-progress-linear",{"v-progress-linear--active":t.active&&g.value,"v-progress-linear--reverse":M.value,"v-progress-linear--rounded":t.rounded,"v-progress-linear--rounded-bar":t.roundedBar,"v-progress-linear--striped":t.striped},d.value,s.value],style:{height:t.active?ze(h.value):0,"--v-progress-linear-height":ze(h.value)},role:"progressbar","aria-valuemin":"0","aria-valuemax":t.max,"aria-valuenow":t.indeterminate?void 0:x.value,onClick:t.clickable&&T},{default:()=>[t.stream&&k("div",{key:"stream",class:["v-progress-linear__stream",o.value],style:{...a.value,[M.value?"left":"right"]:ze(-h.value),borderTop:`${ze(h.value/2)} dotted`,opacity:b.value,top:`calc(50% - ${ze(h.value/4)})`,width:ze(100-v.value,"%"),"--v-progress-linear-stream-to":ze(h.value*(M.value?1:-1))}},null),k("div",{class:["v-progress-linear__background",l.value],style:[c.value,{opacity:b.value,width:ze(t.stream?v.value:100,"%")}]},null),k(er,{name:w.value},{default:()=>[t.indeterminate?k("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map(L=>k("div",{key:L,class:["v-progress-linear__indeterminate",L,u.value],style:f.value},null))]):k("div",{class:["v-progress-linear__determinate",u.value],style:[f.value,{width:ze(x.value,"%")}]},null)]}),n.default&&k("div",{class:"v-progress-linear__content"},[n.default({value:x.value,buffer:v.value})])]})),{}}}),um=tt({loading:Boolean},"loader");function fm(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:nr();return{loaderClasses:K(()=>({[`${e}--loading`]:t.loading}))}}function R1(t,e){var n;let{slots:i}=e;return k("div",{class:`${t.name}__loader`},[((n=i.default)==null?void 0:n.call(i,{color:t.color,isActive:t.active}))||k(D1,{active:t.active,color:t.color,height:"2",indeterminate:!0},null)])}const wd={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},dm=tt({location:String},"location");function hm(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n=arguments.length>2?arguments[2]:void 0;const{isRtl:i}=ha();return{locationStyles:K(()=>{if(!t.location)return{};const{side:s,align:o}=f_(t.location.split(" ").length>1?t.location:`${t.location} center`,i.value);function a(c){return n?n(c):0}const l={};return s!=="center"&&(e?l[wd[s]]=`calc(100% - ${a(s)}px)`:l[s]=0),o!=="center"?e?l[wd[o]]=`calc(100% - ${a(o)}px)`:l[o]=0:(s==="center"?l.top=l.left="50%":l[{top:"left",bottom:"left",left:"top",right:"top"}[s]]="50%",l.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[s]),l})}}const I1=["static","relative","fixed","absolute","sticky"],pm=tt({position:{type:String,validator:t=>I1.includes(t)}},"position");function mm(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:nr();return{positionClasses:K(()=>t.position?`${e}--${t.position}`:void 0)}}function F1(t,e){pt(()=>{var n;return(n=t.isExactActive)==null?void 0:n.value},n=>{t.isLink.value&&n&&e&&Gs(()=>{e(!0)})},{immediate:!0})}const gm=je({name:"VBtn",directives:{Ripple:Ec},props:{active:Boolean,symbol:{type:null,default:lm},flat:Boolean,icon:[Boolean,String,Function,Object],prependIcon:St,appendIcon:St,block:Boolean,stacked:Boolean,ripple:{type:Boolean,default:!0},...Jr(),...Pn(),...bi(),...Kr(),...Si(),...A1(),...um(),...dm(),...pm(),...Pc(),...Zr(),...bt({tag:"button"}),...tn(),...Ys({variant:"elevated"})},emits:{"group:selected":t=>!0},setup(t,e){let{attrs:n,slots:i}=e;const{themeClasses:r}=nn(t),{borderClasses:s}=es(t),{colorClasses:o,colorStyles:a,variantClasses:l}=Tc(t),{densityClasses:c}=ir(t),{dimensionStyles:u}=Qr(t),{elevationClasses:f}=rr(t),{loaderClasses:d}=fm(t),{locationStyles:p}=hm(t),{positionClasses:g}=mm(t),{roundedClasses:m}=jn(t),{sizeClasses:h}=$s(t),v=E1(t,t.symbol,!1),x=Lc(t,n),M=K(()=>(v==null?void 0:v.disabled.value)||t.disabled),w=K(()=>t.variant==="elevated"&&!(t.disabled||t.flat||t.border));return F1(x,v==null?void 0:v.select),nt(()=>{var b,T,L,_,E,D,B,V;const Z=x.isLink.value?"a":t.tag,N=!v||v.isSelected.value,ne=!!(t.prependIcon||i.prepend),z=!!(t.appendIcon||i.append);return kr(k(Z,{type:Z==="a"?void 0:"button",class:["v-btn",v==null?void 0:v.selectedClass.value,{"v-btn--active":t.active,"v-btn--block":t.block,"v-btn--disabled":M.value,"v-btn--elevated":w.value,"v-btn--flat":t.flat,"v-btn--icon":!!t.icon,"v-btn--loading":t.loading,"v-btn--stacked":t.stacked},r.value,s.value,N?o.value:void 0,c.value,f.value,d.value,g.value,m.value,h.value,l.value],style:[N?a.value:void 0,u.value,p.value],disabled:M.value||void 0,href:x.href.value,onClick:X=>{var Y;M.value||((Y=x.navigate)==null||Y.call(x,X),v==null||v.toggle())}},{default:()=>[Cc(!0,"v-btn"),!t.icon&&ne&&k(Vn,{key:"prepend",defaults:{VIcon:{icon:t.prependIcon}}},{default:()=>[k("span",{class:"v-btn__prepend"},[(b=(T=i.prepend)==null?void 0:T.call(i))!=null?b:k($i,null,null)])]}),k("span",{class:"v-btn__content","data-no-activator":""},[k(Vn,{key:"content",defaults:{VIcon:{icon:typeof t.icon=="string"?t.icon:void 0}}},{default:()=>[(L=(_=i.default)==null?void 0:_.call(i))!=null?L:typeof t.icon=="string"&&k($i,{key:"icon"},null)]})]),!t.icon&&z&&k(Vn,{key:"append",defaults:{VIcon:{icon:t.appendIcon}}},{default:()=>[k("span",{class:"v-btn__append"},[(E=(D=i.append)==null?void 0:D.call(i))!=null?E:k($i,null,null)])]}),!!t.loading&&k("span",{key:"loader",class:"v-btn__loader"},[(B=(V=i.loader)==null?void 0:V.call(i))!=null?B:k(P1,{color:typeof t.loading=="boolean"?void 0:t.loading,indeterminate:!0,size:"23",width:"2"},null)])]}),[[aa("ripple"),!M.value&&t.ripple,null]])}),{}}});const zc=je({name:"VCardActions",setup(t,e){let{slots:n}=e;return yi({VBtn:{variant:"text"}}),nt(()=>{var i;return k("div",{class:"v-card-actions"},[(i=n.default)==null?void 0:i.call(n)])}),{}}}),Uc=Ws("v-card-subtitle"),Gc=Ws("v-card-title"),N1=xi({name:"VCardItem",props:{appendAvatar:String,appendIcon:St,prependAvatar:String,prependIcon:St,subtitle:String,title:String,...bi()},setup(t,e){let{slots:n}=e;return nt(()=>{var i,r,s,o,a,l,c,u,f;const d=!!(t.prependAvatar||t.prependIcon||n.prepend),p=!!(t.appendAvatar||t.appendIcon||n.append),g=!!(t.title||n.title),m=!!(t.subtitle||n.subtitle);return k("div",{class:"v-card-item"},[d&&k(Vn,{key:"prepend",defaults:{VAvatar:{density:t.density,icon:t.prependIcon,image:t.prependAvatar},VIcon:{density:t.density,icon:t.prependIcon}}},{default:()=>[k("div",{class:"v-card-item__prepend"},[(i=(r=n.prepend)==null?void 0:r.call(n))!=null?i:k($o,null,null)])]}),k("div",{class:"v-card-item__content"},[g&&k(Gc,{key:"title"},{default:()=>[(s=(o=n.title)==null?void 0:o.call(n))!=null?s:t.title]}),m&&k(Uc,{key:"subtitle"},{default:()=>[(a=(l=n.subtitle)==null?void 0:l.call(n))!=null?a:t.subtitle]}),(c=n.default)==null?void 0:c.call(n)]),p&&k(Vn,{key:"append",defaults:{VAvatar:{density:t.density,icon:t.appendIcon,image:t.appendAvatar},VIcon:{density:t.density,icon:t.appendIcon}}},{default:()=>[k("div",{class:"v-card-item__append"},[(u=(f=n.append)==null?void 0:f.call(n))!=null?u:k($o,null,null)])]})])}),{}}}),B1=Ws("v-card-text"),vm=je({name:"VCard",directives:{Ripple:Ec},props:{appendAvatar:String,appendIcon:St,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:St,ripple:Boolean,subtitle:String,text:String,title:String,...tn(),...Jr(),...bi(),...Kr(),...Si(),...um(),...dm(),...pm(),...Pn(),...Pc(),...bt(),...Ys({variant:"elevated"})},setup(t,e){let{attrs:n,slots:i}=e;const{themeClasses:r}=nn(t),{borderClasses:s}=es(t),{colorClasses:o,colorStyles:a,variantClasses:l}=Tc(t),{densityClasses:c}=ir(t),{dimensionStyles:u}=Qr(t),{elevationClasses:f}=rr(t),{loaderClasses:d}=fm(t),{locationStyles:p}=hm(t),{positionClasses:g}=mm(t),{roundedClasses:m}=jn(t),h=Lc(t,n),v=K(()=>t.link!==!1&&h.isLink.value),x=K(()=>!t.disabled&&t.link!==!1&&(t.link||h.isClickable.value));return nt(()=>{var M,w,b,T,L;const _=v.value?"a":t.tag,E=!!(i.title||t.title),D=!!(i.subtitle||t.subtitle),B=E||D,V=!!(i.append||t.appendAvatar||t.appendIcon),Z=!!(i.prepend||t.prependAvatar||t.prependIcon),N=!!(i.image||t.image),ne=B||Z||V,z=!!(i.text||t.text);return kr(k(_,{class:["v-card",{"v-card--disabled":t.disabled,"v-card--flat":t.flat,"v-card--hover":t.hover&&!(t.disabled||t.flat),"v-card--link":x.value},r.value,s.value,o.value,c.value,f.value,d.value,g.value,m.value,l.value],style:[a.value,u.value,p.value],href:h.href.value,onClick:x.value&&h.navigate},{default:()=>[N&&k(Vn,{key:"image",defaults:{VImg:{cover:!0,src:t.image}}},{default:()=>[k("div",{class:"v-card__image"},[(M=(w=i.image)==null?void 0:w.call(i))!=null?M:k(Ac,null,null)])]}),k(R1,{name:"v-card",active:!!t.loading,color:typeof t.loading=="boolean"?void 0:t.loading},{default:i.loader}),ne&&k(N1,{key:"item",prependAvatar:t.prependAvatar,prependIcon:t.prependIcon,title:t.title,subtitle:t.subtitle,appendAvatar:t.appendAvatar,appendIcon:t.appendIcon},{default:i.item,prepend:i.prepend,title:i.title,subtitle:i.subtitle,append:i.append}),z&&k(B1,{key:"text"},{default:()=>[(b=(T=i.text)==null?void 0:T.call(i))!=null?b:t.text]}),(L=i.default)==null?void 0:L.call(i),i.actions&&k(zc,null,{default:i.actions}),Cc(x.value,"v-card")]}),[[aa("ripple"),x.value]])}),{}}});const O1=je({name:"VTimeline",props:{align:{type:String,default:"center",validator:t=>["center","start"].includes(t)},direction:{type:String,default:"vertical",validator:t=>["vertical","horizontal"].includes(t)},side:{type:String,validator:t=>t==null||["start","end"].includes(t)},lineInset:{type:[String,Number],default:0},lineThickness:{type:[String,Number],default:2},lineColor:String,truncateLine:{type:String,validator:t=>["start","end","both"].includes(t)},...bi(),...bt(),...tn()},setup(t,e){let{slots:n}=e;const{themeClasses:i}=nn(t),{densityClasses:r}=ir(t);yi({VTimelineDivider:{lineColor:Ve(t,"lineColor")},VTimelineItem:{density:Ve(t,"density"),lineInset:Ve(t,"lineInset")}});const s=K(()=>{const a=t.side?t.side:t.density!=="default"?"end":null;return a&&`v-timeline--side-${a}`}),o=K(()=>{const a=["v-timeline--truncate-line-start","v-timeline--truncate-line-end"];switch(t.truncateLine){case"both":return a;case"start":return a[0];case"end":return a[1];default:return null}});return nt(()=>k(t.tag,{class:["v-timeline",`v-timeline--${t.direction}`,`v-timeline--align-${t.align}`,o.value,{"v-timeline--inset-line":!!t.lineInset},i.value,r.value,s.value],style:{"--v-timeline-line-thickness":ze(t.lineThickness)}},n)),{}}}),k1=je({name:"VTimelineDivider",props:{dotColor:String,fillDot:Boolean,hideDot:Boolean,icon:St,iconColor:String,lineColor:String,...Pn(),...Zr(),...Si()},setup(t,e){let{slots:n}=e;const{sizeClasses:i,sizeStyles:r}=$s(t,"v-timeline-divider__dot"),{backgroundColorStyles:s,backgroundColorClasses:o}=Yn(Ve(t,"dotColor")),{roundedClasses:a}=jn(t,"v-timeline-divider__dot"),{elevationClasses:l}=rr(t),{backgroundColorClasses:c,backgroundColorStyles:u}=Yn(Ve(t,"lineColor"));return yi({VIcon:{color:Ve(t,"iconColor"),icon:Ve(t,"icon"),size:Ve(t,"size")}}),nt(()=>{var f,d;return k("div",{class:["v-timeline-divider",{"v-timeline-divider--fill-dot":t.fillDot}]},[k("div",{class:["v-timeline-divider__before",c.value],style:u.value},null),!t.hideDot&&k("div",{key:"dot",class:["v-timeline-divider__dot",l.value,a.value,i.value],style:r.value},[k("div",{class:["v-timeline-divider__inner-dot",o.value,a.value],style:s.value},[(f=(d=n.default)==null?void 0:d.call(n))!=null?f:t.icon?k($i,null,null):void 0])]),k("div",{class:["v-timeline-divider__after",c.value],style:u.value},null)])}),{}}}),z1=je({name:"VTimelineItem",props:{density:String,dotColor:String,fillDot:Boolean,hideDot:Boolean,hideOpposite:{type:Boolean,default:void 0},icon:St,iconColor:String,lineInset:[Number,String],...Pn(),...Si(),...Zr(),...bt(),...Kr()},setup(t,e){let{slots:n}=e;const{dimensionStyles:i}=Qr(t),r=Pe(0),s=Pe();return pt(s,o=>{var a,l;!o||(r.value=(a=(l=o.$el.querySelector(".v-timeline-divider__dot"))==null?void 0:l.getBoundingClientRect().width)!=null?a:0)},{flush:"post"}),nt(()=>{var o,a;return k("div",{class:["v-timeline-item",{"v-timeline-item--fill-dot":t.fillDot}],style:{"--v-timeline-dot-size":ze(r.value),"--v-timeline-line-inset":t.lineInset?`calc(var(--v-timeline-dot-size) / 2 + ${ze(t.lineInset)})`:ze(0)}},[k("div",{class:"v-timeline-item__body",style:i.value},[(o=n.default)==null?void 0:o.call(n)]),k(k1,{ref:s,hideDot:t.hideDot,icon:t.icon,iconColor:t.iconColor,size:t.size,elevation:t.elevation,dotColor:t.dotColor,fillDot:t.fillDot,rounded:t.rounded},{default:n.icon}),t.density!=="compact"&&k("div",{class:"v-timeline-item__opposite"},[!t.hideOpposite&&((a=n.opposite)==null?void 0:a.call(n))])])}),{}}}),U1={name:"ProjectsComponent",data:()=>({cards:[{title:"Keycode",subtitle:"Basic tool for checking keycodes",src:g1,year:2018,route:"/raw/projects/keycode.html",color:"green-lighten-1"},{title:"CSS Loaders",subtitle:"Loading animations in pure CSS",src:y1,year:2018,route:"/raw/projects/loaders.html",color:"green-lighten-1"},{title:"Bresenham",subtitle:"Visualization of bresenham line drawing algorithm",src:v1,year:2018,route:"/raw/projects/bresenham.html",color:"green-lighten-1"},{title:"Hoppy Hunting",subtitle:"Creating a 2.5D game using just an HTML canvas",src:_1,year:2018,route:"/raw/projects/hoppyhunting/index.html",color:"green-lighten-1"},{title:"Matrix Flight",subtitle:"Flight performing matrices operations",src:x1,year:2018,route:"/raw/projects/greengatsby/index.html",color:"green-lighten-1"},{title:"Midpoint Displacement",subtitle:"Visualization of the midpoint displacement algorithm",src:m1,year:2018,route:"/raw/projects/midpoint_displacement/index.html",color:"green-lighten-1"},{title:"Waveslab",subtitle:"Audio visualization tool",src:p1,year:2018,route:"https://sdholcomb.github.io/WaveSlab/examples/example_override_style.html",color:"green-lighten-1"},{title:"Northrop Grumman",subtitle:"Employed at Northrop Grumman working on mission software, simulations, wargaming",src:b1,year:2018,route:null,color:"blue"},{title:"HII",subtitle:"Employed at Huntington Ingalls working on embedded systems",src:S1,year:2024,route:null,color:"blue"}]})},G1=["textContent"],V1=ji("Visit");function H1(t,e,n,i,r,s){return Nt(),Cn(O1,null,{default:lt(()=>[(Nt(!0),la(Et,null,xh(t.cards,o=>(Nt(),Cn(z1,{key:o.title,cols:o.flex,"dot-color":o.color,"fill-dot":"",size:"x-small",width:"75%"},{opposite:lt(()=>[ua("div",{class:Xo("pt-1 headline font-weight-bold text-green"),textContent:vs(o.year)},null,8,G1)]),default:lt(()=>[k(vm,vi(t.props,{border:"md",color:"#212121"}),{default:lt(()=>[k(Ac,{src:o.src,"aspect-ratio":16/9,height:"200px",cover:""},null,8,["src"]),k(Gc,null,{default:lt(()=>[ji(vs(o.title),1)]),_:2},1024),k(Uc,null,{default:lt(()=>[ji(vs(o.subtitle),1)]),_:2},1024),o.route?(Nt(),Cn(zc,{key:0},{default:lt(()=>[k(gm,{variant:"tonal",href:o.route},{default:lt(()=>[V1]),_:2},1032,["href"])]),_:2},1024)):Dh("",!0)]),_:2},1040)]),_:2},1032,["cols","dot-color"]))),128))]),_:1})}const W1=tr(U1,[["render",H1]]),$1=xi({name:"ProjectsView",components:{ProjectsComponent:W1}});function Y1(t,e,n,i,r,s){const o=pc("ProjectsComponent");return Nt(),Cn(o)}const q1=tr($1,[["render",Y1]]),j1={},X1={class:"about"},Z1=ua("h1",null,"One day I'll fill this out...",-1),K1=[Z1];function Q1(t,e){return Nt(),la("div",X1,K1)}const J1=tr(j1,[["render",Q1]]);const eE=je({name:"VContainer",props:{fluid:{type:Boolean,default:!1},...bt()},setup(t,e){let{slots:n}=e;return nt(()=>k(t.tag,{class:["v-container",{"v-container--fluid":t.fluid}]},n)),{}}}),Vc=["sm","md","lg","xl","xxl"],_m=(()=>Vc.reduce((t,e)=>(t[e]={type:[Boolean,String,Number],default:!1},t),{}))(),xm=(()=>Vc.reduce((t,e)=>(t["offset"+_i(e)]={type:[String,Number],default:null},t),{}))(),ym=(()=>Vc.reduce((t,e)=>(t["order"+_i(e)]={type:[String,Number],default:null},t),{}))(),Ad={col:Object.keys(_m),offset:Object.keys(xm),order:Object.keys(ym)};function tE(t,e,n){let i=t;if(!(n==null||n===!1))return e&&(i+=`-${e.replace(t,"")}`),t==="col"&&(i="v-"+i),t==="col"&&(n===""||n===!0)||(i+=`-${n}`),i.toLowerCase()}const nE=["auto","start","end","center","baseline","stretch"],iE=je({name:"VCol",props:{cols:{type:[Boolean,String,Number],default:!1},..._m,offset:{type:[String,Number],default:null},...xm,order:{type:[String,Number],default:null},...ym,alignSelf:{type:String,default:null,validator:t=>nE.includes(t)},...bt()},setup(t,e){let{slots:n}=e;const i=K(()=>{const r=[];let s;for(s in Ad)Ad[s].forEach(a=>{const l=t[a],c=tE(s,a,l);c&&r.push(c)});const o=r.some(a=>a.startsWith("v-col-"));return r.push({"v-col":!o||!t.cols,[`v-col-${t.cols}`]:t.cols,[`offset-${t.offset}`]:t.offset,[`order-${t.order}`]:t.order,[`align-self-${t.alignSelf}`]:t.alignSelf}),r});return()=>{var r;return yn(t.tag,{class:i.value},(r=n.default)==null?void 0:r.call(n))}}}),rE=["sm","md","lg","xl","xxl"],Hc=["start","end","center"],bm=["space-between","space-around","space-evenly"];function Wc(t,e){return rE.reduce((n,i)=>(n[t+_i(i)]=e(),n),{})}const sE=[...Hc,"baseline","stretch"],Sm=t=>sE.includes(t),Mm=Wc("align",()=>({type:String,default:null,validator:Sm})),oE=[...Hc,...bm],wm=t=>oE.includes(t),Am=Wc("justify",()=>({type:String,default:null,validator:wm})),aE=[...Hc,...bm,"stretch"],Em=t=>aE.includes(t),Cm=Wc("alignContent",()=>({type:String,default:null,validator:Em})),Ed={align:Object.keys(Mm),justify:Object.keys(Am),alignContent:Object.keys(Cm)},lE={align:"align",justify:"justify",alignContent:"align-content"};function cE(t,e,n){let i=lE[t];if(n!=null)return e&&(i+=`-${e.replace(t,"")}`),i+=`-${n}`,i.toLowerCase()}const uE=je({name:"VRow",props:{dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:Sm},...Mm,justify:{type:String,default:null,validator:wm},...Am,alignContent:{type:String,default:null,validator:Em},...Cm,...bt()},setup(t,e){let{slots:n}=e;const i=K(()=>{const r=[];let s;for(s in Ed)Ed[s].forEach(o=>{const a=t[o],l=cE(s,o,a);l&&r.push(l)});return r.push({"v-row--no-gutters":t.noGutters,"v-row--dense":t.dense,[`align-${t.align}`]:t.align,[`justify-${t.justify}`]:t.justify,[`align-content-${t.alignContent}`]:t.alignContent}),r});return()=>{var r;return yn(t.tag,{class:["v-row",i.value]},(r=n.default)==null?void 0:r.call(n))}}}),fE=xi({name:"LearnView",components:{},data:()=>({cards:[{title:"Database Notes",subtitle:"Basic tool for checking keycodes",route:"/raw/learn/database1.html"},{title:"Operations Research",subtitle:"Simplex Algorithm, Hessian & Principal Minors, Golden Section Search",route:"/raw/learn/operations1.html"},{title:"R Problems",subtitle:"Using R language to solve various problems",route:"/raw/learn/operations2.html"},{title:"Stats Formulas",subtitle:"Formulas for statistics",route:"/raw/learn/stats_formulas.html"},{title:"Hypothesis Testing",subtitle:"Review on statistics hypothesis testing",route:"/raw/learn/stats.html"}]})}),dE=ji("Visit");function hE(t,e,n,i,r,s){return Nt(),Cn(eE,null,{default:lt(()=>[k(uE,{align:"start"},{default:lt(()=>[(Nt(!0),la(Et,null,xh(t.cards,o=>(Nt(),Cn(iE,null,{default:lt(()=>[k(vm,vi(t.props,{border:"md",color:"#212121"}),{default:lt(()=>[k(Gc,null,{default:lt(()=>[ji(vs(o.title),1)]),_:2},1024),k(Uc,null,{default:lt(()=>[ji(vs(o.subtitle),1)]),_:2},1024),o.route?(Nt(),Cn(zc,{key:0},{default:lt(()=>[k(gm,{variant:"tonal",href:o.route},{default:lt(()=>[dE]),_:2},1032,["href"])]),_:2},1024)):Dh("",!0)]),_:2},1040)]),_:2},1024))),256))]),_:1})]),_:1})}const pE=tr(fE,[["render",hE]]),mE=oy({history:bx("/"),routes:[{path:"/",name:"home",component:h1},{path:"/projects",name:"projects",component:q1},{path:"/about",name:"about",component:J1},{path:"/learn",name:"learn",component:pE}]});const gE=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return{install:n=>{const{blueprint:i,...r}=t,s=$n(i,r),{aliases:o={},components:a={},directives:l={}}=s;for(const d in l)n.directive(d,l[d]);for(const d in a)n.component(d,a[d]);for(const d in o)n.component(d,je({...o[d],name:d}));function c(d){n.provide(Rs,E_(s.defaults)),n.provide(kl,U0(s.display,d)),n.provide(Wo,V_(n,s.theme)),n.provide(Nl,t0(s.icons)),n.provide($u,H0(n,s.locale))}mn||c(),Vs.reset();const u=n.mount;n.mount=(d,p,g)=>{c(p);const m=u(d,p,g);return n.mount=u,m};function f(d){var p,g,m;const h=this.$,v=(p=(g=h.parent)==null?void 0:g.provides)!=null?p:(m=h.vnode.appContext)==null?void 0:m.provides;if(v&&d in v)return v[d]}n.mixin({computed:{$vuetify(){return Ft({defaults:f.call(this,Rs),display:f.call(this,kl),theme:f.call(this,Wo),icons:f.call(this,Nl),locale:f.call(this,$u),rtl:f.call(this,Sc)})}}})}}},vE=gE({theme:{defaultTheme:"dark"}}),_E="modulepreload",xE=function(t){return"/"+t},Cd={},yE=function(e,n,i){return!n||n.length===0?e():Promise.all(n.map(r=>{if(r=xE(r),r in Cd)return;Cd[r]=!0;const s=r.endsWith(".css"),o=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${o}`))return;const a=document.createElement("link");if(a.rel=s?"stylesheet":_E,s||(a.as="script",a.crossOrigin=""),a.href=r,document.head.appendChild(a),s)return new Promise((l,c)=>{a.addEventListener("load",l),a.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())};async function bE(){(await yE(()=>import("./webfontloader.b777d690.js").then(e=>e.w),[])).load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}bE();Kv(ix).use(mE).use(vE).mount("#app");
