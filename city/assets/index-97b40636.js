var n_=Object.defineProperty;var i_=(r,e,t)=>e in r?n_(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var Je=(r,e,t)=>(i_(r,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function lu(r,e){const t=Object.create(null),n=r.split(",");for(let i=0;i<n.length;i++)t[n[i]]=!0;return e?i=>!!t[i.toLowerCase()]:i=>!!t[i]}function cu(r){if(ze(r)){const e={};for(let t=0;t<r.length;t++){const n=r[t],i=Dt(n)?a_(n):cu(n);if(i)for(const s in i)e[s]=i[s]}return e}else{if(Dt(r))return r;if(mt(r))return r}}const r_=/;(?![^(]*\))/g,s_=/:([^]+)/,o_=/\/\*.*?\*\//gs;function a_(r){const e={};return r.replace(o_,"").split(r_).forEach(t=>{if(t){const n=t.split(s_);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function uu(r){let e="";if(Dt(r))e=r;else if(ze(r))for(let t=0;t<r.length;t++){const n=uu(r[t]);n&&(e+=n+" ")}else if(mt(r))for(const t in r)r[t]&&(e+=t+" ");return e.trim()}const l_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",c_=lu(l_);function ip(r){return!!r||r===""}const ot={},is=[],Bn=()=>{},u_=()=>!1,f_=/^on[^a-z]/,Ga=r=>f_.test(r),fu=r=>r.startsWith("onUpdate:"),Yt=Object.assign,hu=(r,e)=>{const t=r.indexOf(e);t>-1&&r.splice(t,1)},h_=Object.prototype.hasOwnProperty,qe=(r,e)=>h_.call(r,e),ze=Array.isArray,to=r=>Ha(r)==="[object Map]",d_=r=>Ha(r)==="[object Set]",ke=r=>typeof r=="function",Dt=r=>typeof r=="string",du=r=>typeof r=="symbol",mt=r=>r!==null&&typeof r=="object",rp=r=>mt(r)&&ke(r.then)&&ke(r.catch),p_=Object.prototype.toString,Ha=r=>p_.call(r),m_=r=>Ha(r).slice(8,-1),g_=r=>Ha(r)==="[object Object]",pu=r=>Dt(r)&&r!=="NaN"&&r[0]!=="-"&&""+parseInt(r,10)===r,ga=lu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Wa=r=>{const e=Object.create(null);return t=>e[t]||(e[t]=r(t))},__=/-(\w)/g,ds=Wa(r=>r.replace(__,(e,t)=>t?t.toUpperCase():"")),x_=/\B([A-Z])/g,Ls=Wa(r=>r.replace(x_,"-$1").toLowerCase()),sp=Wa(r=>r.charAt(0).toUpperCase()+r.slice(1)),gl=Wa(r=>r?`on${sp(r)}`:""),fo=(r,e)=>!Object.is(r,e),_l=(r,e)=>{for(let t=0;t<r.length;t++)r[t](e)},Ta=(r,e,t)=>{Object.defineProperty(r,e,{configurable:!0,enumerable:!1,value:t})},v_=r=>{const e=parseFloat(r);return isNaN(e)?r:e};let df;const y_=()=>df||(df=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let zn;class op{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=zn,!e&&zn&&(this.index=(zn.scopes||(zn.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=zn;try{return zn=this,e()}finally{zn=t}}}on(){zn=this}off(){zn=this.parent}stop(e){if(this._active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function b_(r){return new op(r)}function M_(r,e=zn){e&&e.active&&e.effects.push(r)}function w_(){return zn}const mu=r=>{const e=new Set(r);return e.w=0,e.n=0,e},ap=r=>(r.w&qi)>0,lp=r=>(r.n&qi)>0,S_=({deps:r})=>{if(r.length)for(let e=0;e<r.length;e++)r[e].w|=qi},T_=r=>{const{deps:e}=r;if(e.length){let t=0;for(let n=0;n<e.length;n++){const i=e[n];ap(i)&&!lp(i)?i.delete(r):e[t++]=i,i.w&=~qi,i.n&=~qi}e.length=t}},Mc=new WeakMap;let $s=0,qi=1;const wc=30;let Un;const xr=Symbol(""),Sc=Symbol("");class gu{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,M_(this,n)}run(){if(!this.active)return this.fn();let e=Un,t=Gi;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Un,Un=this,Gi=!0,qi=1<<++$s,$s<=wc?S_(this):pf(this),this.fn()}finally{$s<=wc&&T_(this),qi=1<<--$s,Un=this.parent,Gi=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Un===this?this.deferStop=!0:this.active&&(pf(this),this.onStop&&this.onStop(),this.active=!1)}}function pf(r){const{deps:e}=r;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(r);e.length=0}}let Gi=!0;const cp=[];function Rs(){cp.push(Gi),Gi=!1}function Ds(){const r=cp.pop();Gi=r===void 0?!0:r}function rn(r,e,t){if(Gi&&Un){let n=Mc.get(r);n||Mc.set(r,n=new Map);let i=n.get(t);i||n.set(t,i=mu()),up(i)}}function up(r,e){let t=!1;$s<=wc?lp(r)||(r.n|=qi,t=!ap(r)):t=!r.has(Un),t&&(r.add(Un),Un.deps.push(r))}function Mi(r,e,t,n,i,s){const o=Mc.get(r);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&ze(r)){const l=Number(n);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(t!==void 0&&a.push(o.get(t)),e){case"add":ze(r)?pu(t)&&a.push(o.get("length")):(a.push(o.get(xr)),to(r)&&a.push(o.get(Sc)));break;case"delete":ze(r)||(a.push(o.get(xr)),to(r)&&a.push(o.get(Sc)));break;case"set":to(r)&&a.push(o.get(xr));break}if(a.length===1)a[0]&&Tc(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Tc(mu(l))}}function Tc(r,e){const t=ze(r)?r:[...r];for(const n of t)n.computed&&mf(n);for(const n of t)n.computed||mf(n)}function mf(r,e){(r!==Un||r.allowRecurse)&&(r.scheduler?r.scheduler():r.run())}const E_=lu("__proto__,__v_isRef,__isVue"),fp=new Set(Object.getOwnPropertyNames(Symbol).filter(r=>r!=="arguments"&&r!=="caller").map(r=>Symbol[r]).filter(du)),A_=_u(),C_=_u(!1,!0),P_=_u(!0),gf=L_();function L_(){const r={};return["includes","indexOf","lastIndexOf"].forEach(e=>{r[e]=function(...t){const n=Ze(this);for(let s=0,o=this.length;s<o;s++)rn(n,"get",s+"");const i=n[e](...t);return i===-1||i===!1?n[e](...t.map(Ze)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{r[e]=function(...t){Rs();const n=Ze(this)[e].apply(this,t);return Ds(),n}}),r}function R_(r){const e=Ze(this);return rn(e,"has",r),e.hasOwnProperty(r)}function _u(r=!1,e=!1){return function(n,i,s){if(i==="__v_isReactive")return!r;if(i==="__v_isReadonly")return r;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&s===(r?e?q_:gp:e?mp:pp).get(n))return n;const o=ze(n);if(!r){if(o&&qe(gf,i))return Reflect.get(gf,i,s);if(i==="hasOwnProperty")return R_}const a=Reflect.get(n,i,s);return(du(i)?fp.has(i):E_(i))||(r||rn(n,"get",i),e)?a:zt(a)?o&&pu(i)?a:a.value:mt(a)?r?_p(a):Oo(a):a}}const D_=hp(),I_=hp(!0);function hp(r=!1){return function(t,n,i,s){let o=t[n];if(ps(o)&&zt(o)&&!zt(i))return!1;if(!r&&(!Ea(i)&&!ps(i)&&(o=Ze(o),i=Ze(i)),!ze(t)&&zt(o)&&!zt(i)))return o.value=i,!0;const a=ze(t)&&pu(n)?Number(n)<t.length:qe(t,n),l=Reflect.set(t,n,i,s);return t===Ze(s)&&(a?fo(i,o)&&Mi(t,"set",n,i):Mi(t,"add",n,i)),l}}function O_(r,e){const t=qe(r,e);r[e];const n=Reflect.deleteProperty(r,e);return n&&t&&Mi(r,"delete",e,void 0),n}function F_(r,e){const t=Reflect.has(r,e);return(!du(e)||!fp.has(e))&&rn(r,"has",e),t}function N_(r){return rn(r,"iterate",ze(r)?"length":xr),Reflect.ownKeys(r)}const dp={get:A_,set:D_,deleteProperty:O_,has:F_,ownKeys:N_},z_={get:P_,set(r,e){return!0},deleteProperty(r,e){return!0}},U_=Yt({},dp,{get:C_,set:I_}),xu=r=>r,Xa=r=>Reflect.getPrototypeOf(r);function ko(r,e,t=!1,n=!1){r=r.__v_raw;const i=Ze(r),s=Ze(e);t||(e!==s&&rn(i,"get",e),rn(i,"get",s));const{has:o}=Xa(i),a=n?xu:t?Mu:ho;if(o.call(i,e))return a(r.get(e));if(o.call(i,s))return a(r.get(s));r!==i&&r.get(e)}function Bo(r,e=!1){const t=this.__v_raw,n=Ze(t),i=Ze(r);return e||(r!==i&&rn(n,"has",r),rn(n,"has",i)),r===i?t.has(r):t.has(r)||t.has(i)}function Vo(r,e=!1){return r=r.__v_raw,!e&&rn(Ze(r),"iterate",xr),Reflect.get(r,"size",r)}function _f(r){r=Ze(r);const e=Ze(this);return Xa(e).has.call(e,r)||(e.add(r),Mi(e,"add",r,r)),this}function xf(r,e){e=Ze(e);const t=Ze(this),{has:n,get:i}=Xa(t);let s=n.call(t,r);s||(r=Ze(r),s=n.call(t,r));const o=i.call(t,r);return t.set(r,e),s?fo(e,o)&&Mi(t,"set",r,e):Mi(t,"add",r,e),this}function vf(r){const e=Ze(this),{has:t,get:n}=Xa(e);let i=t.call(e,r);i||(r=Ze(r),i=t.call(e,r)),n&&n.call(e,r);const s=e.delete(r);return i&&Mi(e,"delete",r,void 0),s}function yf(){const r=Ze(this),e=r.size!==0,t=r.clear();return e&&Mi(r,"clear",void 0,void 0),t}function Go(r,e){return function(n,i){const s=this,o=s.__v_raw,a=Ze(o),l=e?xu:r?Mu:ho;return!r&&rn(a,"iterate",xr),o.forEach((c,u)=>n.call(i,l(c),l(u),s))}}function Ho(r,e,t){return function(...n){const i=this.__v_raw,s=Ze(i),o=to(s),a=r==="entries"||r===Symbol.iterator&&o,l=r==="keys"&&o,c=i[r](...n),u=t?xu:e?Mu:ho;return!e&&rn(s,"iterate",l?Sc:xr),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function Ei(r){return function(...e){return r==="delete"?!1:this}}function k_(){const r={get(s){return ko(this,s)},get size(){return Vo(this)},has:Bo,add:_f,set:xf,delete:vf,clear:yf,forEach:Go(!1,!1)},e={get(s){return ko(this,s,!1,!0)},get size(){return Vo(this)},has:Bo,add:_f,set:xf,delete:vf,clear:yf,forEach:Go(!1,!0)},t={get(s){return ko(this,s,!0)},get size(){return Vo(this,!0)},has(s){return Bo.call(this,s,!0)},add:Ei("add"),set:Ei("set"),delete:Ei("delete"),clear:Ei("clear"),forEach:Go(!0,!1)},n={get(s){return ko(this,s,!0,!0)},get size(){return Vo(this,!0)},has(s){return Bo.call(this,s,!0)},add:Ei("add"),set:Ei("set"),delete:Ei("delete"),clear:Ei("clear"),forEach:Go(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{r[s]=Ho(s,!1,!1),t[s]=Ho(s,!0,!1),e[s]=Ho(s,!1,!0),n[s]=Ho(s,!0,!0)}),[r,t,e,n]}const[B_,V_,G_,H_]=k_();function vu(r,e){const t=e?r?H_:G_:r?V_:B_;return(n,i,s)=>i==="__v_isReactive"?!r:i==="__v_isReadonly"?r:i==="__v_raw"?n:Reflect.get(qe(t,i)&&i in n?t:n,i,s)}const W_={get:vu(!1,!1)},X_={get:vu(!1,!0)},j_={get:vu(!0,!1)},pp=new WeakMap,mp=new WeakMap,gp=new WeakMap,q_=new WeakMap;function Y_(r){switch(r){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function $_(r){return r.__v_skip||!Object.isExtensible(r)?0:Y_(m_(r))}function Oo(r){return ps(r)?r:yu(r,!1,dp,W_,pp)}function K_(r){return yu(r,!1,U_,X_,mp)}function _p(r){return yu(r,!0,z_,j_,gp)}function yu(r,e,t,n,i){if(!mt(r)||r.__v_raw&&!(e&&r.__v_isReactive))return r;const s=i.get(r);if(s)return s;const o=$_(r);if(o===0)return r;const a=new Proxy(r,o===2?n:t);return i.set(r,a),a}function rs(r){return ps(r)?rs(r.__v_raw):!!(r&&r.__v_isReactive)}function ps(r){return!!(r&&r.__v_isReadonly)}function Ea(r){return!!(r&&r.__v_isShallow)}function xp(r){return rs(r)||ps(r)}function Ze(r){const e=r&&r.__v_raw;return e?Ze(e):r}function bu(r){return Ta(r,"__v_skip",!0),r}const ho=r=>mt(r)?Oo(r):r,Mu=r=>mt(r)?_p(r):r;function vp(r){Gi&&Un&&(r=Ze(r),up(r.dep||(r.dep=mu())))}function yp(r,e){r=Ze(r);const t=r.dep;t&&Tc(t)}function zt(r){return!!(r&&r.__v_isRef===!0)}function bp(r){return Mp(r,!1)}function Z_(r){return Mp(r,!0)}function Mp(r,e){return zt(r)?r:new J_(r,e)}class J_{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Ze(e),this._value=t?e:ho(e)}get value(){return vp(this),this._value}set value(e){const t=this.__v_isShallow||Ea(e)||ps(e);e=t?e:Ze(e),fo(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:ho(e),yp(this))}}function vr(r){return zt(r)?r.value:r}const Q_={get:(r,e,t)=>vr(Reflect.get(r,e,t)),set:(r,e,t,n)=>{const i=r[e];return zt(i)&&!zt(t)?(i.value=t,!0):Reflect.set(r,e,t,n)}};function wp(r){return rs(r)?r:new Proxy(r,Q_)}var Sp;class e0{constructor(e,t,n,i){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[Sp]=!1,this._dirty=!0,this.effect=new gu(e,()=>{this._dirty||(this._dirty=!0,yp(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=n}get value(){const e=Ze(this);return vp(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Sp="__v_isReadonly";function t0(r,e,t=!1){let n,i;const s=ke(r);return s?(n=r,i=Bn):(n=r.get,i=r.set),new e0(n,i,s||!i,t)}function Hi(r,e,t,n){let i;try{i=n?r(...n):r()}catch(s){ja(s,e,t)}return i}function Vn(r,e,t,n){if(ke(r)){const s=Hi(r,e,t,n);return s&&rp(s)&&s.catch(o=>{ja(o,e,t)}),s}const i=[];for(let s=0;s<r.length;s++)i.push(Vn(r[s],e,t,n));return i}function ja(r,e,t,n=!0){const i=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=t;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](r,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){Hi(l,null,10,[r,o,a]);return}}n0(r,t,i,n)}function n0(r,e,t,n=!0){console.error(r)}let po=!1,Ec=!1;const Ft=[];let Zn=0;const ss=[];let mi=null,dr=0;const Tp=Promise.resolve();let wu=null;function Ep(r){const e=wu||Tp;return r?e.then(this?r.bind(this):r):e}function i0(r){let e=Zn+1,t=Ft.length;for(;e<t;){const n=e+t>>>1;mo(Ft[n])<r?e=n+1:t=n}return e}function Su(r){(!Ft.length||!Ft.includes(r,po&&r.allowRecurse?Zn+1:Zn))&&(r.id==null?Ft.push(r):Ft.splice(i0(r.id),0,r),Ap())}function Ap(){!po&&!Ec&&(Ec=!0,wu=Tp.then(Pp))}function r0(r){const e=Ft.indexOf(r);e>Zn&&Ft.splice(e,1)}function s0(r){ze(r)?ss.push(...r):(!mi||!mi.includes(r,r.allowRecurse?dr+1:dr))&&ss.push(r),Ap()}function bf(r,e=po?Zn+1:0){for(;e<Ft.length;e++){const t=Ft[e];t&&t.pre&&(Ft.splice(e,1),e--,t())}}function Cp(r){if(ss.length){const e=[...new Set(ss)];if(ss.length=0,mi){mi.push(...e);return}for(mi=e,mi.sort((t,n)=>mo(t)-mo(n)),dr=0;dr<mi.length;dr++)mi[dr]();mi=null,dr=0}}const mo=r=>r.id==null?1/0:r.id,o0=(r,e)=>{const t=mo(r)-mo(e);if(t===0){if(r.pre&&!e.pre)return-1;if(e.pre&&!r.pre)return 1}return t};function Pp(r){Ec=!1,po=!0,Ft.sort(o0);const e=Bn;try{for(Zn=0;Zn<Ft.length;Zn++){const t=Ft[Zn];t&&t.active!==!1&&Hi(t,null,14)}}finally{Zn=0,Ft.length=0,Cp(),po=!1,wu=null,(Ft.length||ss.length)&&Pp()}}function a0(r,e,...t){if(r.isUnmounted)return;const n=r.vnode.props||ot;let i=t;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in n){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:h}=n[u]||ot;h&&(i=t.map(p=>Dt(p)?p.trim():p)),f&&(i=t.map(v_))}let a,l=n[a=gl(e)]||n[a=gl(ds(e))];!l&&s&&(l=n[a=gl(Ls(e))]),l&&Vn(l,r,6,i);const c=n[a+"Once"];if(c){if(!r.emitted)r.emitted={};else if(r.emitted[a])return;r.emitted[a]=!0,Vn(c,r,6,i)}}function Lp(r,e,t=!1){const n=e.emitsCache,i=n.get(r);if(i!==void 0)return i;const s=r.emits;let o={},a=!1;if(!ke(r)){const l=c=>{const u=Lp(c,e,!0);u&&(a=!0,Yt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),r.extends&&l(r.extends),r.mixins&&r.mixins.forEach(l)}return!s&&!a?(mt(r)&&n.set(r,null),null):(ze(s)?s.forEach(l=>o[l]=null):Yt(o,s),mt(r)&&n.set(r,o),o)}function qa(r,e){return!r||!Ga(e)?!1:(e=e.slice(2).replace(/Once$/,""),qe(r,e[0].toLowerCase()+e.slice(1))||qe(r,Ls(e))||qe(r,e))}let ni=null,Rp=null;function Aa(r){const e=ni;return ni=r,Rp=r&&r.type.__scopeId||null,e}function l0(r,e=ni,t){if(!e||r._n)return r;const n=(...i)=>{n._d&&Pf(-1);const s=Aa(e);let o;try{o=r(...i)}finally{Aa(s),n._d&&Pf(1)}return o};return n._n=!0,n._c=!0,n._d=!0,n}function xl(r){const{type:e,vnode:t,proxy:n,withProxy:i,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:f,data:h,setupState:p,ctx:g,inheritAttrs:d}=r;let m,_;const v=Aa(r);try{if(t.shapeFlag&4){const y=i||n;m=$n(u.call(y,y,f,s,p,h,g)),_=l}else{const y=e;m=$n(y.length>1?y(s,{attrs:l,slots:a,emit:c}):y(s,null)),_=e.props?l:c0(l)}}catch(y){io.length=0,ja(y,r,1),m=En(go)}let x=m;if(_&&d!==!1){const y=Object.keys(_),{shapeFlag:M}=x;y.length&&M&7&&(o&&y.some(fu)&&(_=u0(_,o)),x=ms(x,_))}return t.dirs&&(x=ms(x),x.dirs=x.dirs?x.dirs.concat(t.dirs):t.dirs),t.transition&&(x.transition=t.transition),m=x,Aa(v),m}const c0=r=>{let e;for(const t in r)(t==="class"||t==="style"||Ga(t))&&((e||(e={}))[t]=r[t]);return e},u0=(r,e)=>{const t={};for(const n in r)(!fu(n)||!(n.slice(9)in e))&&(t[n]=r[n]);return t};function f0(r,e,t){const{props:n,children:i,component:s}=r,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return n?Mf(n,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==n[h]&&!qa(c,h))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:n===o?!1:n?o?Mf(n,o,c):!0:!!o;return!1}function Mf(r,e,t){const n=Object.keys(e);if(n.length!==Object.keys(r).length)return!0;for(let i=0;i<n.length;i++){const s=n[i];if(e[s]!==r[s]&&!qa(t,s))return!0}return!1}function h0({vnode:r,parent:e},t){for(;e&&e.subTree===r;)(r=e.vnode).el=t,e=e.parent}const d0=r=>r.__isSuspense;function p0(r,e){e&&e.pendingBranch?ze(r)?e.effects.push(...r):e.effects.push(r):s0(r)}function _a(r,e){if(bt){let t=bt.provides;const n=bt.parent&&bt.parent.provides;n===t&&(t=bt.provides=Object.create(n)),t[r]=e}}function yi(r,e,t=!1){const n=bt||ni;if(n){const i=n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides;if(i&&r in i)return i[r];if(arguments.length>1)return t&&ke(e)?e.call(n.proxy):e}}const Wo={};function xa(r,e,t){return Dp(r,e,t)}function Dp(r,e,{immediate:t,deep:n,flush:i,onTrack:s,onTrigger:o}=ot){const a=w_()===(bt==null?void 0:bt.scope)?bt:null;let l,c=!1,u=!1;if(zt(r)?(l=()=>r.value,c=Ea(r)):rs(r)?(l=()=>r,n=!0):ze(r)?(u=!0,c=r.some(x=>rs(x)||Ea(x)),l=()=>r.map(x=>{if(zt(x))return x.value;if(rs(x))return Jr(x);if(ke(x))return Hi(x,a,2)})):ke(r)?e?l=()=>Hi(r,a,2):l=()=>{if(!(a&&a.isUnmounted))return f&&f(),Vn(r,a,3,[h])}:l=Bn,e&&n){const x=l;l=()=>Jr(x())}let f,h=x=>{f=_.onStop=()=>{Hi(x,a,4)}},p;if(xo)if(h=Bn,e?t&&Vn(e,a,3,[l(),u?[]:void 0,h]):l(),i==="sync"){const x=ax();p=x.__watcherHandles||(x.__watcherHandles=[])}else return Bn;let g=u?new Array(r.length).fill(Wo):Wo;const d=()=>{if(_.active)if(e){const x=_.run();(n||c||(u?x.some((y,M)=>fo(y,g[M])):fo(x,g)))&&(f&&f(),Vn(e,a,3,[x,g===Wo?void 0:u&&g[0]===Wo?[]:g,h]),g=x)}else _.run()};d.allowRecurse=!!e;let m;i==="sync"?m=d:i==="post"?m=()=>Zt(d,a&&a.suspense):(d.pre=!0,a&&(d.id=a.uid),m=()=>Su(d));const _=new gu(l,m);e?t?d():g=_.run():i==="post"?Zt(_.run.bind(_),a&&a.suspense):_.run();const v=()=>{_.stop(),a&&a.scope&&hu(a.scope.effects,_)};return p&&p.push(v),v}function m0(r,e,t){const n=this.proxy,i=Dt(r)?r.includes(".")?Ip(n,r):()=>n[r]:r.bind(n,n);let s;ke(e)?s=e:(s=e.handler,t=e);const o=bt;gs(this);const a=Dp(i,s.bind(n),t);return o?gs(o):yr(),a}function Ip(r,e){const t=e.split(".");return()=>{let n=r;for(let i=0;i<t.length&&n;i++)n=n[t[i]];return n}}function Jr(r,e){if(!mt(r)||r.__v_skip||(e=e||new Set,e.has(r)))return r;if(e.add(r),zt(r))Jr(r.value,e);else if(ze(r))for(let t=0;t<r.length;t++)Jr(r[t],e);else if(d_(r)||to(r))r.forEach(t=>{Jr(t,e)});else if(g_(r))for(const t in r)Jr(r[t],e);return r}function Ya(r){return ke(r)?{setup:r,name:r.name}:r}const va=r=>!!r.type.__asyncLoader,Op=r=>r.type.__isKeepAlive;function g0(r,e){Fp(r,"a",e)}function _0(r,e){Fp(r,"da",e)}function Fp(r,e,t=bt){const n=r.__wdc||(r.__wdc=()=>{let i=t;for(;i;){if(i.isDeactivated)return;i=i.parent}return r()});if($a(e,n,t),t){let i=t.parent;for(;i&&i.parent;)Op(i.parent.vnode)&&x0(n,e,t,i),i=i.parent}}function x0(r,e,t,n){const i=$a(e,r,n,!0);zp(()=>{hu(n[e],i)},t)}function $a(r,e,t=bt,n=!1){if(t){const i=t[r]||(t[r]=[]),s=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;Rs(),gs(t);const a=Vn(e,t,r,o);return yr(),Ds(),a});return n?i.unshift(s):i.push(s),s}}const Ti=r=>(e,t=bt)=>(!xo||r==="sp")&&$a(r,(...n)=>e(...n),t),v0=Ti("bm"),Np=Ti("m"),y0=Ti("bu"),b0=Ti("u"),M0=Ti("bum"),zp=Ti("um"),w0=Ti("sp"),S0=Ti("rtg"),T0=Ti("rtc");function E0(r,e=bt){$a("ec",r,e)}function nr(r,e,t,n){const i=r.dirs,s=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let l=a.dir[n];l&&(Rs(),Vn(l,t,8,[r.el,a,r,e]),Ds())}}const A0=Symbol(),Ac=r=>r?Kp(r)?Cu(r)||r.proxy:Ac(r.parent):null,no=Yt(Object.create(null),{$:r=>r,$el:r=>r.vnode.el,$data:r=>r.data,$props:r=>r.props,$attrs:r=>r.attrs,$slots:r=>r.slots,$refs:r=>r.refs,$parent:r=>Ac(r.parent),$root:r=>Ac(r.root),$emit:r=>r.emit,$options:r=>Tu(r),$forceUpdate:r=>r.f||(r.f=()=>Su(r.update)),$nextTick:r=>r.n||(r.n=Ep.bind(r.proxy)),$watch:r=>m0.bind(r)}),vl=(r,e)=>r!==ot&&!r.__isScriptSetup&&qe(r,e),C0={get({_:r},e){const{ctx:t,setupState:n,data:i,props:s,accessCache:o,type:a,appContext:l}=r;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return n[e];case 2:return i[e];case 4:return t[e];case 3:return s[e]}else{if(vl(n,e))return o[e]=1,n[e];if(i!==ot&&qe(i,e))return o[e]=2,i[e];if((c=r.propsOptions[0])&&qe(c,e))return o[e]=3,s[e];if(t!==ot&&qe(t,e))return o[e]=4,t[e];Cc&&(o[e]=0)}}const u=no[e];let f,h;if(u)return e==="$attrs"&&rn(r,"get",e),u(r);if((f=a.__cssModules)&&(f=f[e]))return f;if(t!==ot&&qe(t,e))return o[e]=4,t[e];if(h=l.config.globalProperties,qe(h,e))return h[e]},set({_:r},e,t){const{data:n,setupState:i,ctx:s}=r;return vl(i,e)?(i[e]=t,!0):n!==ot&&qe(n,e)?(n[e]=t,!0):qe(r.props,e)||e[0]==="$"&&e.slice(1)in r?!1:(s[e]=t,!0)},has({_:{data:r,setupState:e,accessCache:t,ctx:n,appContext:i,propsOptions:s}},o){let a;return!!t[o]||r!==ot&&qe(r,o)||vl(e,o)||(a=s[0])&&qe(a,o)||qe(n,o)||qe(no,o)||qe(i.config.globalProperties,o)},defineProperty(r,e,t){return t.get!=null?r._.accessCache[e]=0:qe(t,"value")&&this.set(r,e,t.value,null),Reflect.defineProperty(r,e,t)}};let Cc=!0;function P0(r){const e=Tu(r),t=r.proxy,n=r.ctx;Cc=!1,e.beforeCreate&&wf(e.beforeCreate,r,"bc");const{data:i,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:p,updated:g,activated:d,deactivated:m,beforeDestroy:_,beforeUnmount:v,destroyed:x,unmounted:y,render:M,renderTracked:E,renderTriggered:L,errorCaptured:b,serverPrefetch:S,expose:I,inheritAttrs:X,components:H,directives:N,filters:O}=e;if(c&&L0(c,n,null,r.appContext.config.unwrapInjectedRef),o)for(const K in o){const V=o[K];ke(V)&&(n[K]=V.bind(t))}if(i){const K=i.call(t,t);mt(K)&&(r.data=Oo(K))}if(Cc=!0,s)for(const K in s){const V=s[K],ce=ke(V)?V.bind(t,t):ke(V.get)?V.get.bind(t,t):Bn,se=!ke(V)&&ke(V.set)?V.set.bind(t):Bn,Me=wn({get:ce,set:se});Object.defineProperty(n,K,{enumerable:!0,configurable:!0,get:()=>Me.value,set:k=>Me.value=k})}if(a)for(const K in a)Up(a[K],n,t,K);if(l){const K=ke(l)?l.call(t):l;Reflect.ownKeys(K).forEach(V=>{_a(V,K[V])})}u&&wf(u,r,"c");function j(K,V){ze(V)?V.forEach(ce=>K(ce.bind(t))):V&&K(V.bind(t))}if(j(v0,f),j(Np,h),j(y0,p),j(b0,g),j(g0,d),j(_0,m),j(E0,b),j(T0,E),j(S0,L),j(M0,v),j(zp,y),j(w0,S),ze(I))if(I.length){const K=r.exposed||(r.exposed={});I.forEach(V=>{Object.defineProperty(K,V,{get:()=>t[V],set:ce=>t[V]=ce})})}else r.exposed||(r.exposed={});M&&r.render===Bn&&(r.render=M),X!=null&&(r.inheritAttrs=X),H&&(r.components=H),N&&(r.directives=N)}function L0(r,e,t=Bn,n=!1){ze(r)&&(r=Pc(r));for(const i in r){const s=r[i];let o;mt(s)?"default"in s?o=yi(s.from||i,s.default,!0):o=yi(s.from||i):o=yi(s),zt(o)&&n?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[i]=o}}function wf(r,e,t){Vn(ze(r)?r.map(n=>n.bind(e.proxy)):r.bind(e.proxy),e,t)}function Up(r,e,t,n){const i=n.includes(".")?Ip(t,n):()=>t[n];if(Dt(r)){const s=e[r];ke(s)&&xa(i,s)}else if(ke(r))xa(i,r.bind(t));else if(mt(r))if(ze(r))r.forEach(s=>Up(s,e,t,n));else{const s=ke(r.handler)?r.handler.bind(t):e[r.handler];ke(s)&&xa(i,s,r)}}function Tu(r){const e=r.type,{mixins:t,extends:n}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=r.appContext,a=s.get(e);let l;return a?l=a:!i.length&&!t&&!n?l=e:(l={},i.length&&i.forEach(c=>Ca(l,c,o,!0)),Ca(l,e,o)),mt(e)&&s.set(e,l),l}function Ca(r,e,t,n=!1){const{mixins:i,extends:s}=e;s&&Ca(r,s,t,!0),i&&i.forEach(o=>Ca(r,o,t,!0));for(const o in e)if(!(n&&o==="expose")){const a=R0[o]||t&&t[o];r[o]=a?a(r[o],e[o]):e[o]}return r}const R0={data:Sf,props:cr,emits:cr,methods:cr,computed:cr,beforeCreate:Xt,created:Xt,beforeMount:Xt,mounted:Xt,beforeUpdate:Xt,updated:Xt,beforeDestroy:Xt,beforeUnmount:Xt,destroyed:Xt,unmounted:Xt,activated:Xt,deactivated:Xt,errorCaptured:Xt,serverPrefetch:Xt,components:cr,directives:cr,watch:I0,provide:Sf,inject:D0};function Sf(r,e){return e?r?function(){return Yt(ke(r)?r.call(this,this):r,ke(e)?e.call(this,this):e)}:e:r}function D0(r,e){return cr(Pc(r),Pc(e))}function Pc(r){if(ze(r)){const e={};for(let t=0;t<r.length;t++)e[r[t]]=r[t];return e}return r}function Xt(r,e){return r?[...new Set([].concat(r,e))]:e}function cr(r,e){return r?Yt(Yt(Object.create(null),r),e):e}function I0(r,e){if(!r)return e;if(!e)return r;const t=Yt(Object.create(null),r);for(const n in e)t[n]=Xt(r[n],e[n]);return t}function O0(r,e,t,n=!1){const i={},s={};Ta(s,Za,1),r.propsDefaults=Object.create(null),kp(r,e,i,s);for(const o in r.propsOptions[0])o in i||(i[o]=void 0);t?r.props=n?i:K_(i):r.type.props?r.props=i:r.props=s,r.attrs=s}function F0(r,e,t,n){const{props:i,attrs:s,vnode:{patchFlag:o}}=r,a=Ze(i),[l]=r.propsOptions;let c=!1;if((n||o>0)&&!(o&16)){if(o&8){const u=r.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(qa(r.emitsOptions,h))continue;const p=e[h];if(l)if(qe(s,h))p!==s[h]&&(s[h]=p,c=!0);else{const g=ds(h);i[g]=Lc(l,a,g,p,r,!1)}else p!==s[h]&&(s[h]=p,c=!0)}}}else{kp(r,e,i,s)&&(c=!0);let u;for(const f in a)(!e||!qe(e,f)&&((u=Ls(f))===f||!qe(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(i[f]=Lc(l,a,f,void 0,r,!0)):delete i[f]);if(s!==a)for(const f in s)(!e||!qe(e,f))&&(delete s[f],c=!0)}c&&Mi(r,"set","$attrs")}function kp(r,e,t,n){const[i,s]=r.propsOptions;let o=!1,a;if(e)for(let l in e){if(ga(l))continue;const c=e[l];let u;i&&qe(i,u=ds(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:qa(r.emitsOptions,l)||(!(l in n)||c!==n[l])&&(n[l]=c,o=!0)}if(s){const l=Ze(t),c=a||ot;for(let u=0;u<s.length;u++){const f=s[u];t[f]=Lc(i,l,f,c[f],r,!qe(c,f))}}return o}function Lc(r,e,t,n,i,s){const o=r[t];if(o!=null){const a=qe(o,"default");if(a&&n===void 0){const l=o.default;if(o.type!==Function&&ke(l)){const{propsDefaults:c}=i;t in c?n=c[t]:(gs(i),n=c[t]=l.call(null,e),yr())}else n=l}o[0]&&(s&&!a?n=!1:o[1]&&(n===""||n===Ls(t))&&(n=!0))}return n}function Bp(r,e,t=!1){const n=e.propsCache,i=n.get(r);if(i)return i;const s=r.props,o={},a=[];let l=!1;if(!ke(r)){const u=f=>{l=!0;const[h,p]=Bp(f,e,!0);Yt(o,h),p&&a.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(u),r.extends&&u(r.extends),r.mixins&&r.mixins.forEach(u)}if(!s&&!l)return mt(r)&&n.set(r,is),is;if(ze(s))for(let u=0;u<s.length;u++){const f=ds(s[u]);Tf(f)&&(o[f]=ot)}else if(s)for(const u in s){const f=ds(u);if(Tf(f)){const h=s[u],p=o[f]=ze(h)||ke(h)?{type:h}:Object.assign({},h);if(p){const g=Cf(Boolean,p.type),d=Cf(String,p.type);p[0]=g>-1,p[1]=d<0||g<d,(g>-1||qe(p,"default"))&&a.push(f)}}}const c=[o,a];return mt(r)&&n.set(r,c),c}function Tf(r){return r[0]!=="$"}function Ef(r){const e=r&&r.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:r===null?"null":""}function Af(r,e){return Ef(r)===Ef(e)}function Cf(r,e){return ze(e)?e.findIndex(t=>Af(t,r)):ke(e)&&Af(e,r)?0:-1}const Vp=r=>r[0]==="_"||r==="$stable",Eu=r=>ze(r)?r.map($n):[$n(r)],N0=(r,e,t)=>{if(e._n)return e;const n=l0((...i)=>Eu(e(...i)),t);return n._c=!1,n},Gp=(r,e,t)=>{const n=r._ctx;for(const i in r){if(Vp(i))continue;const s=r[i];if(ke(s))e[i]=N0(i,s,n);else if(s!=null){const o=Eu(s);e[i]=()=>o}}},Hp=(r,e)=>{const t=Eu(e);r.slots.default=()=>t},z0=(r,e)=>{if(r.vnode.shapeFlag&32){const t=e._;t?(r.slots=Ze(e),Ta(e,"_",t)):Gp(e,r.slots={})}else r.slots={},e&&Hp(r,e);Ta(r.slots,Za,1)},U0=(r,e,t)=>{const{vnode:n,slots:i}=r;let s=!0,o=ot;if(n.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:(Yt(i,e),!t&&a===1&&delete i._):(s=!e.$stable,Gp(e,i)),o=e}else e&&(Hp(r,e),o={default:1});if(s)for(const a in i)!Vp(a)&&!(a in o)&&delete i[a]};function Wp(){return{app:null,config:{isNativeTag:u_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let k0=0;function B0(r,e){return function(n,i=null){ke(n)||(n=Object.assign({},n)),i!=null&&!mt(i)&&(i=null);const s=Wp(),o=new Set;let a=!1;const l=s.app={_uid:k0++,_component:n,_props:i,_container:null,_context:s,_instance:null,version:lx,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&ke(c.install)?(o.add(c),c.install(l,...u)):ke(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,f){if(!a){const h=En(n,i);return h.appContext=s,u&&e?e(h,c):r(h,c,f),a=!0,l._container=c,c.__vue_app__=l,Cu(h.component)||h.component.proxy}},unmount(){a&&(r(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l}};return l}}function Rc(r,e,t,n,i=!1){if(ze(r)){r.forEach((h,p)=>Rc(h,e&&(ze(e)?e[p]:e),t,n,i));return}if(va(n)&&!i)return;const s=n.shapeFlag&4?Cu(n.component)||n.component.proxy:n.el,o=i?null:s,{i:a,r:l}=r,c=e&&e.r,u=a.refs===ot?a.refs={}:a.refs,f=a.setupState;if(c!=null&&c!==l&&(Dt(c)?(u[c]=null,qe(f,c)&&(f[c]=null)):zt(c)&&(c.value=null)),ke(l))Hi(l,a,12,[o,u]);else{const h=Dt(l),p=zt(l);if(h||p){const g=()=>{if(r.f){const d=h?qe(f,l)?f[l]:u[l]:l.value;i?ze(d)&&hu(d,s):ze(d)?d.includes(s)||d.push(s):h?(u[l]=[s],qe(f,l)&&(f[l]=u[l])):(l.value=[s],r.k&&(u[r.k]=l.value))}else h?(u[l]=o,qe(f,l)&&(f[l]=o)):p&&(l.value=o,r.k&&(u[r.k]=o))};o?(g.id=-1,Zt(g,t)):g()}}}const Zt=p0;function V0(r){return G0(r)}function G0(r,e){const t=y_();t.__VUE__=!0;const{insert:n,remove:i,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:p=Bn,insertStaticContent:g}=r,d=(A,D,q,J=null,te=null,fe=null,me=!1,ae=null,ge=!!D.dynamicChildren)=>{if(A===D)return;A&&!Us(A,D)&&(J=$(A),k(A,te,fe,!0),A=null),D.patchFlag===-2&&(ge=!1,D.dynamicChildren=null);const{type:le,ref:T,shapeFlag:w}=D;switch(le){case Ka:m(A,D,q,J);break;case go:_(A,D,q,J);break;case yl:A==null&&v(D,q,J,me);break;case _i:H(A,D,q,J,te,fe,me,ae,ge);break;default:w&1?M(A,D,q,J,te,fe,me,ae,ge):w&6?N(A,D,q,J,te,fe,me,ae,ge):(w&64||w&128)&&le.process(A,D,q,J,te,fe,me,ae,ge,pe)}T!=null&&te&&Rc(T,A&&A.ref,fe,D||A,!D)},m=(A,D,q,J)=>{if(A==null)n(D.el=a(D.children),q,J);else{const te=D.el=A.el;D.children!==A.children&&c(te,D.children)}},_=(A,D,q,J)=>{A==null?n(D.el=l(D.children||""),q,J):D.el=A.el},v=(A,D,q,J)=>{[A.el,A.anchor]=g(A.children,D,q,J,A.el,A.anchor)},x=({el:A,anchor:D},q,J)=>{let te;for(;A&&A!==D;)te=h(A),n(A,q,J),A=te;n(D,q,J)},y=({el:A,anchor:D})=>{let q;for(;A&&A!==D;)q=h(A),i(A),A=q;i(D)},M=(A,D,q,J,te,fe,me,ae,ge)=>{me=me||D.type==="svg",A==null?E(D,q,J,te,fe,me,ae,ge):S(A,D,te,fe,me,ae,ge)},E=(A,D,q,J,te,fe,me,ae)=>{let ge,le;const{type:T,props:w,shapeFlag:U,transition:Q,dirs:ne}=A;if(ge=A.el=o(A.type,fe,w&&w.is,w),U&8?u(ge,A.children):U&16&&b(A.children,ge,null,J,te,fe&&T!=="foreignObject",me,ae),ne&&nr(A,null,J,"created"),L(ge,A,A.scopeId,me,J),w){for(const xe in w)xe!=="value"&&!ga(xe)&&s(ge,xe,null,w[xe],fe,A.children,J,te,Z);"value"in w&&s(ge,"value",null,w.value),(le=w.onVnodeBeforeMount)&&jn(le,J,A)}ne&&nr(A,null,J,"beforeMount");const he=(!te||te&&!te.pendingBranch)&&Q&&!Q.persisted;he&&Q.beforeEnter(ge),n(ge,D,q),((le=w&&w.onVnodeMounted)||he||ne)&&Zt(()=>{le&&jn(le,J,A),he&&Q.enter(ge),ne&&nr(A,null,J,"mounted")},te)},L=(A,D,q,J,te)=>{if(q&&p(A,q),J)for(let fe=0;fe<J.length;fe++)p(A,J[fe]);if(te){let fe=te.subTree;if(D===fe){const me=te.vnode;L(A,me,me.scopeId,me.slotScopeIds,te.parent)}}},b=(A,D,q,J,te,fe,me,ae,ge=0)=>{for(let le=ge;le<A.length;le++){const T=A[le]=ae?Oi(A[le]):$n(A[le]);d(null,T,D,q,J,te,fe,me,ae)}},S=(A,D,q,J,te,fe,me)=>{const ae=D.el=A.el;let{patchFlag:ge,dynamicChildren:le,dirs:T}=D;ge|=A.patchFlag&16;const w=A.props||ot,U=D.props||ot;let Q;q&&ir(q,!1),(Q=U.onVnodeBeforeUpdate)&&jn(Q,q,D,A),T&&nr(D,A,q,"beforeUpdate"),q&&ir(q,!0);const ne=te&&D.type!=="foreignObject";if(le?I(A.dynamicChildren,le,ae,q,J,ne,fe):me||V(A,D,ae,null,q,J,ne,fe,!1),ge>0){if(ge&16)X(ae,D,w,U,q,J,te);else if(ge&2&&w.class!==U.class&&s(ae,"class",null,U.class,te),ge&4&&s(ae,"style",w.style,U.style,te),ge&8){const he=D.dynamicProps;for(let xe=0;xe<he.length;xe++){const R=he[xe],B=w[R],Se=U[R];(Se!==B||R==="value")&&s(ae,R,B,Se,te,A.children,q,J,Z)}}ge&1&&A.children!==D.children&&u(ae,D.children)}else!me&&le==null&&X(ae,D,w,U,q,J,te);((Q=U.onVnodeUpdated)||T)&&Zt(()=>{Q&&jn(Q,q,D,A),T&&nr(D,A,q,"updated")},J)},I=(A,D,q,J,te,fe,me)=>{for(let ae=0;ae<D.length;ae++){const ge=A[ae],le=D[ae],T=ge.el&&(ge.type===_i||!Us(ge,le)||ge.shapeFlag&70)?f(ge.el):q;d(ge,le,T,null,J,te,fe,me,!0)}},X=(A,D,q,J,te,fe,me)=>{if(q!==J){if(q!==ot)for(const ae in q)!ga(ae)&&!(ae in J)&&s(A,ae,q[ae],null,me,D.children,te,fe,Z);for(const ae in J){if(ga(ae))continue;const ge=J[ae],le=q[ae];ge!==le&&ae!=="value"&&s(A,ae,le,ge,me,D.children,te,fe,Z)}"value"in J&&s(A,"value",q.value,J.value)}},H=(A,D,q,J,te,fe,me,ae,ge)=>{const le=D.el=A?A.el:a(""),T=D.anchor=A?A.anchor:a("");let{patchFlag:w,dynamicChildren:U,slotScopeIds:Q}=D;Q&&(ae=ae?ae.concat(Q):Q),A==null?(n(le,q,J),n(T,q,J),b(D.children,q,T,te,fe,me,ae,ge)):w>0&&w&64&&U&&A.dynamicChildren?(I(A.dynamicChildren,U,q,te,fe,me,ae),(D.key!=null||te&&D===te.subTree)&&Xp(A,D,!0)):V(A,D,q,T,te,fe,me,ae,ge)},N=(A,D,q,J,te,fe,me,ae,ge)=>{D.slotScopeIds=ae,A==null?D.shapeFlag&512?te.ctx.activate(D,q,J,me,ge):O(D,q,J,te,fe,me,ge):W(A,D,ge)},O=(A,D,q,J,te,fe,me)=>{const ae=A.component=ex(A,J,te);if(Op(A)&&(ae.ctx.renderer=pe),tx(ae),ae.asyncDep){if(te&&te.registerDep(ae,j),!A.el){const ge=ae.subTree=En(go);_(null,ge,D,q)}return}j(ae,A,D,q,te,fe,me)},W=(A,D,q)=>{const J=D.component=A.component;if(f0(A,D,q))if(J.asyncDep&&!J.asyncResolved){K(J,D,q);return}else J.next=D,r0(J.update),J.update();else D.el=A.el,J.vnode=D},j=(A,D,q,J,te,fe,me)=>{const ae=()=>{if(A.isMounted){let{next:T,bu:w,u:U,parent:Q,vnode:ne}=A,he=T,xe;ir(A,!1),T?(T.el=ne.el,K(A,T,me)):T=ne,w&&_l(w),(xe=T.props&&T.props.onVnodeBeforeUpdate)&&jn(xe,Q,T,ne),ir(A,!0);const R=xl(A),B=A.subTree;A.subTree=R,d(B,R,f(B.el),$(B),A,te,fe),T.el=R.el,he===null&&h0(A,R.el),U&&Zt(U,te),(xe=T.props&&T.props.onVnodeUpdated)&&Zt(()=>jn(xe,Q,T,ne),te)}else{let T;const{el:w,props:U}=D,{bm:Q,m:ne,parent:he}=A,xe=va(D);if(ir(A,!1),Q&&_l(Q),!xe&&(T=U&&U.onVnodeBeforeMount)&&jn(T,he,D),ir(A,!0),w&&ve){const R=()=>{A.subTree=xl(A),ve(w,A.subTree,A,te,null)};xe?D.type.__asyncLoader().then(()=>!A.isUnmounted&&R()):R()}else{const R=A.subTree=xl(A);d(null,R,q,J,A,te,fe),D.el=R.el}if(ne&&Zt(ne,te),!xe&&(T=U&&U.onVnodeMounted)){const R=D;Zt(()=>jn(T,he,R),te)}(D.shapeFlag&256||he&&va(he.vnode)&&he.vnode.shapeFlag&256)&&A.a&&Zt(A.a,te),A.isMounted=!0,D=q=J=null}},ge=A.effect=new gu(ae,()=>Su(le),A.scope),le=A.update=()=>ge.run();le.id=A.uid,ir(A,!0),le()},K=(A,D,q)=>{D.component=A;const J=A.vnode.props;A.vnode=D,A.next=null,F0(A,D.props,J,q),U0(A,D.children,q),Rs(),bf(),Ds()},V=(A,D,q,J,te,fe,me,ae,ge=!1)=>{const le=A&&A.children,T=A?A.shapeFlag:0,w=D.children,{patchFlag:U,shapeFlag:Q}=D;if(U>0){if(U&128){se(le,w,q,J,te,fe,me,ae,ge);return}else if(U&256){ce(le,w,q,J,te,fe,me,ae,ge);return}}Q&8?(T&16&&Z(le,te,fe),w!==le&&u(q,w)):T&16?Q&16?se(le,w,q,J,te,fe,me,ae,ge):Z(le,te,fe,!0):(T&8&&u(q,""),Q&16&&b(w,q,J,te,fe,me,ae,ge))},ce=(A,D,q,J,te,fe,me,ae,ge)=>{A=A||is,D=D||is;const le=A.length,T=D.length,w=Math.min(le,T);let U;for(U=0;U<w;U++){const Q=D[U]=ge?Oi(D[U]):$n(D[U]);d(A[U],Q,q,null,te,fe,me,ae,ge)}le>T?Z(A,te,fe,!0,!1,w):b(D,q,J,te,fe,me,ae,ge,w)},se=(A,D,q,J,te,fe,me,ae,ge)=>{let le=0;const T=D.length;let w=A.length-1,U=T-1;for(;le<=w&&le<=U;){const Q=A[le],ne=D[le]=ge?Oi(D[le]):$n(D[le]);if(Us(Q,ne))d(Q,ne,q,null,te,fe,me,ae,ge);else break;le++}for(;le<=w&&le<=U;){const Q=A[w],ne=D[U]=ge?Oi(D[U]):$n(D[U]);if(Us(Q,ne))d(Q,ne,q,null,te,fe,me,ae,ge);else break;w--,U--}if(le>w){if(le<=U){const Q=U+1,ne=Q<T?D[Q].el:J;for(;le<=U;)d(null,D[le]=ge?Oi(D[le]):$n(D[le]),q,ne,te,fe,me,ae,ge),le++}}else if(le>U)for(;le<=w;)k(A[le],te,fe,!0),le++;else{const Q=le,ne=le,he=new Map;for(le=ne;le<=U;le++){const Te=D[le]=ge?Oi(D[le]):$n(D[le]);Te.key!=null&&he.set(Te.key,le)}let xe,R=0;const B=U-ne+1;let Se=!1,ye=0;const Ae=new Array(B);for(le=0;le<B;le++)Ae[le]=0;for(le=Q;le<=w;le++){const Te=A[le];if(R>=B){k(Te,te,fe,!0);continue}let Ie;if(Te.key!=null)Ie=he.get(Te.key);else for(xe=ne;xe<=U;xe++)if(Ae[xe-ne]===0&&Us(Te,D[xe])){Ie=xe;break}Ie===void 0?k(Te,te,fe,!0):(Ae[Ie-ne]=le+1,Ie>=ye?ye=Ie:Se=!0,d(Te,D[Ie],q,null,te,fe,me,ae,ge),R++)}const Pe=Se?H0(Ae):is;for(xe=Pe.length-1,le=B-1;le>=0;le--){const Te=ne+le,Ie=D[Te],Ge=Te+1<T?D[Te+1].el:J;Ae[le]===0?d(null,Ie,q,Ge,te,fe,me,ae,ge):Se&&(xe<0||le!==Pe[xe]?Me(Ie,q,Ge,2):xe--)}}},Me=(A,D,q,J,te=null)=>{const{el:fe,type:me,transition:ae,children:ge,shapeFlag:le}=A;if(le&6){Me(A.component.subTree,D,q,J);return}if(le&128){A.suspense.move(D,q,J);return}if(le&64){me.move(A,D,q,pe);return}if(me===_i){n(fe,D,q);for(let w=0;w<ge.length;w++)Me(ge[w],D,q,J);n(A.anchor,D,q);return}if(me===yl){x(A,D,q);return}if(J!==2&&le&1&&ae)if(J===0)ae.beforeEnter(fe),n(fe,D,q),Zt(()=>ae.enter(fe),te);else{const{leave:w,delayLeave:U,afterLeave:Q}=ae,ne=()=>n(fe,D,q),he=()=>{w(fe,()=>{ne(),Q&&Q()})};U?U(fe,ne,he):he()}else n(fe,D,q)},k=(A,D,q,J=!1,te=!1)=>{const{type:fe,props:me,ref:ae,children:ge,dynamicChildren:le,shapeFlag:T,patchFlag:w,dirs:U}=A;if(ae!=null&&Rc(ae,null,q,A,!0),T&256){D.ctx.deactivate(A);return}const Q=T&1&&U,ne=!va(A);let he;if(ne&&(he=me&&me.onVnodeBeforeUnmount)&&jn(he,D,A),T&6)P(A.component,q,J);else{if(T&128){A.suspense.unmount(q,J);return}Q&&nr(A,null,D,"beforeUnmount"),T&64?A.type.remove(A,D,q,te,pe,J):le&&(fe!==_i||w>0&&w&64)?Z(le,D,q,!1,!0):(fe===_i&&w&384||!te&&T&16)&&Z(ge,D,q),J&&ue(A)}(ne&&(he=me&&me.onVnodeUnmounted)||Q)&&Zt(()=>{he&&jn(he,D,A),Q&&nr(A,null,D,"unmounted")},q)},ue=A=>{const{type:D,el:q,anchor:J,transition:te}=A;if(D===_i){de(q,J);return}if(D===yl){y(A);return}const fe=()=>{i(q),te&&!te.persisted&&te.afterLeave&&te.afterLeave()};if(A.shapeFlag&1&&te&&!te.persisted){const{leave:me,delayLeave:ae}=te,ge=()=>me(q,fe);ae?ae(A.el,fe,ge):ge()}else fe()},de=(A,D)=>{let q;for(;A!==D;)q=h(A),i(A),A=q;i(D)},P=(A,D,q)=>{const{bum:J,scope:te,update:fe,subTree:me,um:ae}=A;J&&_l(J),te.stop(),fe&&(fe.active=!1,k(me,A,D,q)),ae&&Zt(ae,D),Zt(()=>{A.isUnmounted=!0},D),D&&D.pendingBranch&&!D.isUnmounted&&A.asyncDep&&!A.asyncResolved&&A.suspenseId===D.pendingId&&(D.deps--,D.deps===0&&D.resolve())},Z=(A,D,q,J=!1,te=!1,fe=0)=>{for(let me=fe;me<A.length;me++)k(A[me],D,q,J,te)},$=A=>A.shapeFlag&6?$(A.component.subTree):A.shapeFlag&128?A.suspense.next():h(A.anchor||A.el),re=(A,D,q)=>{A==null?D._vnode&&k(D._vnode,null,null,!0):d(D._vnode||null,A,D,null,null,null,q),bf(),Cp(),D._vnode=A},pe={p:d,um:k,m:Me,r:ue,mt:O,mc:b,pc:V,pbc:I,n:$,o:r};let we,ve;return e&&([we,ve]=e(pe)),{render:re,hydrate:we,createApp:B0(re,we)}}function ir({effect:r,update:e},t){r.allowRecurse=e.allowRecurse=t}function Xp(r,e,t=!1){const n=r.children,i=e.children;if(ze(n)&&ze(i))for(let s=0;s<n.length;s++){const o=n[s];let a=i[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[s]=Oi(i[s]),a.el=o.el),t||Xp(o,a)),a.type===Ka&&(a.el=o.el)}}function H0(r){const e=r.slice(),t=[0];let n,i,s,o,a;const l=r.length;for(n=0;n<l;n++){const c=r[n];if(c!==0){if(i=t[t.length-1],r[i]<c){e[n]=i,t.push(n);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,r[t[a]]<c?s=a+1:o=a;c<r[t[s]]&&(s>0&&(e[n]=t[s-1]),t[s]=n)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}const W0=r=>r.__isTeleport,_i=Symbol(void 0),Ka=Symbol(void 0),go=Symbol(void 0),yl=Symbol(void 0),io=[];let kn=null;function jp(r=!1){io.push(kn=r?null:[])}function X0(){io.pop(),kn=io[io.length-1]||null}let _o=1;function Pf(r){_o+=r}function qp(r){return r.dynamicChildren=_o>0?kn||is:null,X0(),_o>0&&kn&&kn.push(r),r}function j0(r,e,t,n,i,s){return qp($p(r,e,t,n,i,s,!0))}function q0(r,e,t,n,i){return qp(En(r,e,t,n,i,!0))}function Dc(r){return r?r.__v_isVNode===!0:!1}function Us(r,e){return r.type===e.type&&r.key===e.key}const Za="__vInternal",Yp=({key:r})=>r??null,ya=({ref:r,ref_key:e,ref_for:t})=>r!=null?Dt(r)||zt(r)||ke(r)?{i:ni,r,k:e,f:!!t}:r:null;function $p(r,e=null,t=null,n=0,i=null,s=r===_i?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:r,props:e,key:e&&Yp(e),ref:e&&ya(e),scopeId:Rp,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:n,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:ni};return a?(Au(l,t),s&128&&r.normalize(l)):t&&(l.shapeFlag|=Dt(t)?8:16),_o>0&&!o&&kn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&kn.push(l),l}const En=Y0;function Y0(r,e=null,t=null,n=0,i=null,s=!1){if((!r||r===A0)&&(r=go),Dc(r)){const a=ms(r,e,!0);return t&&Au(a,t),_o>0&&!s&&kn&&(a.shapeFlag&6?kn[kn.indexOf(r)]=a:kn.push(a)),a.patchFlag|=-2,a}if(sx(r)&&(r=r.__vccOpts),e){e=$0(e);let{class:a,style:l}=e;a&&!Dt(a)&&(e.class=uu(a)),mt(l)&&(xp(l)&&!ze(l)&&(l=Yt({},l)),e.style=cu(l))}const o=Dt(r)?1:d0(r)?128:W0(r)?64:mt(r)?4:ke(r)?2:0;return $p(r,e,t,n,i,o,s,!0)}function $0(r){return r?xp(r)||Za in r?Yt({},r):r:null}function ms(r,e,t=!1){const{props:n,ref:i,patchFlag:s,children:o}=r,a=e?Z0(n||{},e):n;return{__v_isVNode:!0,__v_skip:!0,type:r.type,props:a,key:a&&Yp(a),ref:e&&e.ref?t&&i?ze(i)?i.concat(ya(e)):[i,ya(e)]:ya(e):i,scopeId:r.scopeId,slotScopeIds:r.slotScopeIds,children:o,target:r.target,targetAnchor:r.targetAnchor,staticCount:r.staticCount,shapeFlag:r.shapeFlag,patchFlag:e&&r.type!==_i?s===-1?16:s|16:s,dynamicProps:r.dynamicProps,dynamicChildren:r.dynamicChildren,appContext:r.appContext,dirs:r.dirs,transition:r.transition,component:r.component,suspense:r.suspense,ssContent:r.ssContent&&ms(r.ssContent),ssFallback:r.ssFallback&&ms(r.ssFallback),el:r.el,anchor:r.anchor,ctx:r.ctx,ce:r.ce}}function K0(r=" ",e=0){return En(Ka,null,r,e)}function $n(r){return r==null||typeof r=="boolean"?En(go):ze(r)?En(_i,null,r.slice()):typeof r=="object"?Oi(r):En(Ka,null,String(r))}function Oi(r){return r.el===null&&r.patchFlag!==-1||r.memo?r:ms(r)}function Au(r,e){let t=0;const{shapeFlag:n}=r;if(e==null)e=null;else if(ze(e))t=16;else if(typeof e=="object")if(n&65){const i=e.default;i&&(i._c&&(i._d=!1),Au(r,i()),i._c&&(i._d=!0));return}else{t=32;const i=e._;!i&&!(Za in e)?e._ctx=ni:i===3&&ni&&(ni.slots._===1?e._=1:(e._=2,r.patchFlag|=1024))}else ke(e)?(e={default:e,_ctx:ni},t=32):(e=String(e),n&64?(t=16,e=[K0(e)]):t=8);r.children=e,r.shapeFlag|=t}function Z0(...r){const e={};for(let t=0;t<r.length;t++){const n=r[t];for(const i in n)if(i==="class")e.class!==n.class&&(e.class=uu([e.class,n.class]));else if(i==="style")e.style=cu([e.style,n.style]);else if(Ga(i)){const s=e[i],o=n[i];o&&s!==o&&!(ze(s)&&s.includes(o))&&(e[i]=s?[].concat(s,o):o)}else i!==""&&(e[i]=n[i])}return e}function jn(r,e,t,n=null){Vn(r,e,7,[t,n])}const J0=Wp();let Q0=0;function ex(r,e,t){const n=r.type,i=(e?e.appContext:r.appContext)||J0,s={uid:Q0++,vnode:r,type:n,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new op(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Bp(n,i),emitsOptions:Lp(n,i),emit:null,emitted:null,propsDefaults:ot,inheritAttrs:n.inheritAttrs,ctx:ot,data:ot,props:ot,attrs:ot,slots:ot,refs:ot,setupState:ot,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=a0.bind(null,s),r.ce&&r.ce(s),s}let bt=null;const gs=r=>{bt=r,r.scope.on()},yr=()=>{bt&&bt.scope.off(),bt=null};function Kp(r){return r.vnode.shapeFlag&4}let xo=!1;function tx(r,e=!1){xo=e;const{props:t,children:n}=r.vnode,i=Kp(r);O0(r,t,i,e),z0(r,n);const s=i?nx(r,e):void 0;return xo=!1,s}function nx(r,e){const t=r.type;r.accessCache=Object.create(null),r.proxy=bu(new Proxy(r.ctx,C0));const{setup:n}=t;if(n){const i=r.setupContext=n.length>1?rx(r):null;gs(r),Rs();const s=Hi(n,r,0,[r.props,i]);if(Ds(),yr(),rp(s)){if(s.then(yr,yr),e)return s.then(o=>{Lf(r,o,e)}).catch(o=>{ja(o,r,0)});r.asyncDep=s}else Lf(r,s,e)}else Zp(r,e)}function Lf(r,e,t){ke(e)?r.type.__ssrInlineRender?r.ssrRender=e:r.render=e:mt(e)&&(r.setupState=wp(e)),Zp(r,t)}let Rf;function Zp(r,e,t){const n=r.type;if(!r.render){if(!e&&Rf&&!n.render){const i=n.template||Tu(r).template;if(i){const{isCustomElement:s,compilerOptions:o}=r.appContext.config,{delimiters:a,compilerOptions:l}=n,c=Yt(Yt({isCustomElement:s,delimiters:a},o),l);n.render=Rf(i,c)}}r.render=n.render||Bn}gs(r),Rs(),P0(r),Ds(),yr()}function ix(r){return new Proxy(r.attrs,{get(e,t){return rn(r,"get","$attrs"),e[t]}})}function rx(r){const e=n=>{r.exposed=n||{}};let t;return{get attrs(){return t||(t=ix(r))},slots:r.slots,emit:r.emit,expose:e}}function Cu(r){if(r.exposed)return r.exposeProxy||(r.exposeProxy=new Proxy(wp(bu(r.exposed)),{get(e,t){if(t in e)return e[t];if(t in no)return no[t](r)},has(e,t){return t in e||t in no}}))}function sx(r){return ke(r)&&"__vccOpts"in r}const wn=(r,e)=>t0(r,e,xo);function Jp(r,e,t){const n=arguments.length;return n===2?mt(e)&&!ze(e)?Dc(e)?En(r,null,[e]):En(r,e):En(r,null,e):(n>3?t=Array.prototype.slice.call(arguments,2):n===3&&Dc(t)&&(t=[t]),En(r,e,t))}const ox=Symbol(""),ax=()=>yi(ox),lx="3.2.47",cx="http://www.w3.org/2000/svg",pr=typeof document<"u"?document:null,Df=pr&&pr.createElement("template"),ux={insert:(r,e,t)=>{e.insertBefore(r,t||null)},remove:r=>{const e=r.parentNode;e&&e.removeChild(r)},createElement:(r,e,t,n)=>{const i=e?pr.createElementNS(cx,r):pr.createElement(r,t?{is:t}:void 0);return r==="select"&&n&&n.multiple!=null&&i.setAttribute("multiple",n.multiple),i},createText:r=>pr.createTextNode(r),createComment:r=>pr.createComment(r),setText:(r,e)=>{r.nodeValue=e},setElementText:(r,e)=>{r.textContent=e},parentNode:r=>r.parentNode,nextSibling:r=>r.nextSibling,querySelector:r=>pr.querySelector(r),setScopeId(r,e){r.setAttribute(e,"")},insertStaticContent(r,e,t,n,i,s){const o=t?t.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),t),!(i===s||!(i=i.nextSibling)););else{Df.innerHTML=n?`<svg>${r}</svg>`:r;const a=Df.content;if(n){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function fx(r,e,t){const n=r._vtc;n&&(e=(e?[e,...n]:[...n]).join(" ")),e==null?r.removeAttribute("class"):t?r.setAttribute("class",e):r.className=e}function hx(r,e,t){const n=r.style,i=Dt(t);if(t&&!i){if(e&&!Dt(e))for(const s in e)t[s]==null&&Ic(n,s,"");for(const s in t)Ic(n,s,t[s])}else{const s=n.display;i?e!==t&&(n.cssText=t):e&&r.removeAttribute("style"),"_vod"in r&&(n.display=s)}}const If=/\s*!important$/;function Ic(r,e,t){if(ze(t))t.forEach(n=>Ic(r,e,n));else if(t==null&&(t=""),e.startsWith("--"))r.setProperty(e,t);else{const n=dx(r,e);If.test(t)?r.setProperty(Ls(n),t.replace(If,""),"important"):r[n]=t}}const Of=["Webkit","Moz","ms"],bl={};function dx(r,e){const t=bl[e];if(t)return t;let n=ds(e);if(n!=="filter"&&n in r)return bl[e]=n;n=sp(n);for(let i=0;i<Of.length;i++){const s=Of[i]+n;if(s in r)return bl[e]=s}return e}const Ff="http://www.w3.org/1999/xlink";function px(r,e,t,n,i){if(n&&e.startsWith("xlink:"))t==null?r.removeAttributeNS(Ff,e.slice(6,e.length)):r.setAttributeNS(Ff,e,t);else{const s=c_(e);t==null||s&&!ip(t)?r.removeAttribute(e):r.setAttribute(e,s?"":t)}}function mx(r,e,t,n,i,s,o){if(e==="innerHTML"||e==="textContent"){n&&o(n,i,s),r[e]=t??"";return}if(e==="value"&&r.tagName!=="PROGRESS"&&!r.tagName.includes("-")){r._value=t;const l=t??"";(r.value!==l||r.tagName==="OPTION")&&(r.value=l),t==null&&r.removeAttribute(e);return}let a=!1;if(t===""||t==null){const l=typeof r[e];l==="boolean"?t=ip(t):t==null&&l==="string"?(t="",a=!0):l==="number"&&(t=0,a=!0)}try{r[e]=t}catch{}a&&r.removeAttribute(e)}function gx(r,e,t,n){r.addEventListener(e,t,n)}function _x(r,e,t,n){r.removeEventListener(e,t,n)}function xx(r,e,t,n,i=null){const s=r._vei||(r._vei={}),o=s[e];if(n&&o)o.value=n;else{const[a,l]=vx(e);if(n){const c=s[e]=Mx(n,i);gx(r,a,c,l)}else o&&(_x(r,a,o,l),s[e]=void 0)}}const Nf=/(?:Once|Passive|Capture)$/;function vx(r){let e;if(Nf.test(r)){e={};let n;for(;n=r.match(Nf);)r=r.slice(0,r.length-n[0].length),e[n[0].toLowerCase()]=!0}return[r[2]===":"?r.slice(3):Ls(r.slice(2)),e]}let Ml=0;const yx=Promise.resolve(),bx=()=>Ml||(yx.then(()=>Ml=0),Ml=Date.now());function Mx(r,e){const t=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=t.attached)return;Vn(wx(n,t.value),e,5,[n])};return t.value=r,t.attached=bx(),t}function wx(r,e){if(ze(e)){const t=r.stopImmediatePropagation;return r.stopImmediatePropagation=()=>{t.call(r),r._stopped=!0},e.map(n=>i=>!i._stopped&&n&&n(i))}else return e}const zf=/^on[a-z]/,Sx=(r,e,t,n,i=!1,s,o,a,l)=>{e==="class"?fx(r,n,i):e==="style"?hx(r,t,n):Ga(e)?fu(e)||xx(r,e,t,n,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Tx(r,e,n,i))?mx(r,e,n,s,o,a,l):(e==="true-value"?r._trueValue=n:e==="false-value"&&(r._falseValue=n),px(r,e,n,i))};function Tx(r,e,t,n){return n?!!(e==="innerHTML"||e==="textContent"||e in r&&zf.test(e)&&ke(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&r.tagName==="INPUT"||e==="type"&&r.tagName==="TEXTAREA"||zf.test(e)&&Dt(t)?!1:e in r}const Ex=Yt({patchProp:Sx},ux);let Uf;function Ax(){return Uf||(Uf=V0(Ex))}const Cx=(...r)=>{const e=Ax().createApp(...r),{mount:t}=e;return e.mount=n=>{const i=Px(n);if(!i)return;const s=e._component;!ke(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const o=t(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function Px(r){return Dt(r)?document.querySelector(r):r}var Lx=!1;/*!
  * pinia v2.0.33
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Rx=Symbol();var kf;(function(r){r.direct="direct",r.patchObject="patch object",r.patchFunction="patch function"})(kf||(kf={}));function Dx(){const r=b_(!0),e=r.run(()=>bp({}));let t=[],n=[];const i=bu({install(s){i._a=s,s.provide(Rx,i),s.config.globalProperties.$pinia=i,n.forEach(o=>t.push(o)),n=[]},use(s){return!this._a&&!Lx?n.push(s):t.push(s),this},_p:t,_a:null,_e:r,_s:new Map,state:e});return i}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Kr=typeof window<"u";function Ix(r){return r.__esModule||r[Symbol.toStringTag]==="Module"}const et=Object.assign;function wl(r,e){const t={};for(const n in e){const i=e[n];t[n]=Hn(i)?i.map(r):r(i)}return t}const ro=()=>{},Hn=Array.isArray,Ox=/\/$/,Fx=r=>r.replace(Ox,"");function Sl(r,e,t="/"){let n,i={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(n=e.slice(0,l),s=e.slice(l+1,a>-1?a:e.length),i=r(s)),a>-1&&(n=n||e.slice(0,a),o=e.slice(a,e.length)),n=kx(n??e,t),{fullPath:n+(s&&"?")+s+o,path:n,query:i,hash:o}}function Nx(r,e){const t=e.query?r(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function Bf(r,e){return!e||!r.toLowerCase().startsWith(e.toLowerCase())?r:r.slice(e.length)||"/"}function zx(r,e,t){const n=e.matched.length-1,i=t.matched.length-1;return n>-1&&n===i&&_s(e.matched[n],t.matched[i])&&Qp(e.params,t.params)&&r(e.query)===r(t.query)&&e.hash===t.hash}function _s(r,e){return(r.aliasOf||r)===(e.aliasOf||e)}function Qp(r,e){if(Object.keys(r).length!==Object.keys(e).length)return!1;for(const t in r)if(!Ux(r[t],e[t]))return!1;return!0}function Ux(r,e){return Hn(r)?Vf(r,e):Hn(e)?Vf(e,r):r===e}function Vf(r,e){return Hn(e)?r.length===e.length&&r.every((t,n)=>t===e[n]):r.length===1&&r[0]===e}function kx(r,e){if(r.startsWith("/"))return r;if(!r)return e;const t=e.split("/"),n=r.split("/");let i=t.length-1,s,o;for(s=0;s<n.length;s++)if(o=n[s],o!==".")if(o==="..")i>1&&i--;else break;return t.slice(0,i).join("/")+"/"+n.slice(s-(s===n.length?1:0)).join("/")}var vo;(function(r){r.pop="pop",r.push="push"})(vo||(vo={}));var so;(function(r){r.back="back",r.forward="forward",r.unknown=""})(so||(so={}));function Bx(r){if(!r)if(Kr){const e=document.querySelector("base");r=e&&e.getAttribute("href")||"/",r=r.replace(/^\w+:\/\/[^\/]+/,"")}else r="/";return r[0]!=="/"&&r[0]!=="#"&&(r="/"+r),Fx(r)}const Vx=/^[^#]+#/;function Gx(r,e){return r.replace(Vx,"#")+e}function Hx(r,e){const t=document.documentElement.getBoundingClientRect(),n=r.getBoundingClientRect();return{behavior:e.behavior,left:n.left-t.left-(e.left||0),top:n.top-t.top-(e.top||0)}}const Ja=()=>({left:window.pageXOffset,top:window.pageYOffset});function Wx(r){let e;if("el"in r){const t=r.el,n=typeof t=="string"&&t.startsWith("#"),i=typeof t=="string"?n?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!i)return;e=Hx(i,r)}else e=r;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Gf(r,e){return(history.state?history.state.position-e:-1)+r}const Oc=new Map;function Xx(r,e){Oc.set(r,e)}function jx(r){const e=Oc.get(r);return Oc.delete(r),e}let qx=()=>location.protocol+"//"+location.host;function em(r,e){const{pathname:t,search:n,hash:i}=e,s=r.indexOf("#");if(s>-1){let a=i.includes(r.slice(s))?r.slice(s).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),Bf(l,"")}return Bf(t,r)+n+i}function Yx(r,e,t,n){let i=[],s=[],o=null;const a=({state:h})=>{const p=em(r,location),g=t.value,d=e.value;let m=0;if(h){if(t.value=p,e.value=h,o&&o===g){o=null;return}m=d?h.position-d.position:0}else n(p);i.forEach(_=>{_(t.value,g,{delta:m,type:vo.pop,direction:m?m>0?so.forward:so.back:so.unknown})})};function l(){o=t.value}function c(h){i.push(h);const p=()=>{const g=i.indexOf(h);g>-1&&i.splice(g,1)};return s.push(p),p}function u(){const{history:h}=window;h.state&&h.replaceState(et({},h.state,{scroll:Ja()}),"")}function f(){for(const h of s)h();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:f}}function Hf(r,e,t,n=!1,i=!1){return{back:r,current:e,forward:t,replaced:n,position:window.history.length,scroll:i?Ja():null}}function $x(r){const{history:e,location:t}=window,n={value:em(r,t)},i={value:e.state};i.value||s(n.value,{back:null,current:n.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=r.indexOf("#"),h=f>-1?(t.host&&document.querySelector("base")?r:r.slice(f))+l:qx()+r+l;try{e[u?"replaceState":"pushState"](c,"",h),i.value=c}catch(p){console.error(p),t[u?"replace":"assign"](h)}}function o(l,c){const u=et({},e.state,Hf(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});s(l,u,!0),n.value=l}function a(l,c){const u=et({},i.value,e.state,{forward:l,scroll:Ja()});s(u.current,u,!0);const f=et({},Hf(n.value,l,null),{position:u.position+1},c);s(l,f,!1),n.value=l}return{location:n,state:i,push:a,replace:o}}function Kx(r){r=Bx(r);const e=$x(r),t=Yx(r,e.state,e.location,e.replace);function n(s,o=!0){o||t.pauseListeners(),history.go(s)}const i=et({location:"",base:r,go:n,createHref:Gx.bind(null,r)},e,t);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function Zx(r){return typeof r=="string"||r&&typeof r=="object"}function tm(r){return typeof r=="string"||typeof r=="symbol"}const Ai={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},nm=Symbol("");var Wf;(function(r){r[r.aborted=4]="aborted",r[r.cancelled=8]="cancelled",r[r.duplicated=16]="duplicated"})(Wf||(Wf={}));function xs(r,e){return et(new Error,{type:r,[nm]:!0},e)}function li(r,e){return r instanceof Error&&nm in r&&(e==null||!!(r.type&e))}const Xf="[^/]+?",Jx={sensitive:!1,strict:!1,start:!0,end:!0},Qx=/[.+*?^${}()[\]/\\]/g;function ev(r,e){const t=et({},Jx,e),n=[];let i=t.start?"^":"";const s=[];for(const c of r){const u=c.length?[]:[90];t.strict&&!c.length&&(i+="/");for(let f=0;f<c.length;f++){const h=c[f];let p=40+(t.sensitive?.25:0);if(h.type===0)f||(i+="/"),i+=h.value.replace(Qx,"\\$&"),p+=40;else if(h.type===1){const{value:g,repeatable:d,optional:m,regexp:_}=h;s.push({name:g,repeatable:d,optional:m});const v=_||Xf;if(v!==Xf){p+=10;try{new RegExp(`(${v})`)}catch(y){throw new Error(`Invalid custom RegExp for param "${g}" (${v}): `+y.message)}}let x=d?`((?:${v})(?:/(?:${v}))*)`:`(${v})`;f||(x=m&&c.length<2?`(?:/${x})`:"/"+x),m&&(x+="?"),i+=x,p+=20,m&&(p+=-8),d&&(p+=-20),v===".*"&&(p+=-50)}u.push(p)}n.push(u)}if(t.strict&&t.end){const c=n.length-1;n[c][n[c].length-1]+=.7000000000000001}t.strict||(i+="/?"),t.end?i+="$":t.strict&&(i+="(?:/|$)");const o=new RegExp(i,t.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let h=1;h<u.length;h++){const p=u[h]||"",g=s[h-1];f[g.name]=p&&g.repeatable?p.split("/"):p}return f}function l(c){let u="",f=!1;for(const h of r){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const p of h)if(p.type===0)u+=p.value;else if(p.type===1){const{value:g,repeatable:d,optional:m}=p,_=g in c?c[g]:"";if(Hn(_)&&!d)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const v=Hn(_)?_.join("/"):_;if(!v)if(m)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${g}"`);u+=v}}return u||"/"}return{re:o,score:n,keys:s,parse:a,stringify:l}}function tv(r,e){let t=0;for(;t<r.length&&t<e.length;){const n=e[t]-r[t];if(n)return n;t++}return r.length<e.length?r.length===1&&r[0]===40+40?-1:1:r.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function nv(r,e){let t=0;const n=r.score,i=e.score;for(;t<n.length&&t<i.length;){const s=tv(n[t],i[t]);if(s)return s;t++}if(Math.abs(i.length-n.length)===1){if(jf(n))return 1;if(jf(i))return-1}return i.length-n.length}function jf(r){const e=r[r.length-1];return r.length>0&&e[e.length-1]<0}const iv={type:0,value:""},rv=/[a-zA-Z0-9_]/;function sv(r){if(!r)return[[]];if(r==="/")return[[iv]];if(!r.startsWith("/"))throw new Error(`Invalid path "${r}"`);function e(p){throw new Error(`ERR (${t})/"${c}": ${p}`)}let t=0,n=t;const i=[];let s;function o(){s&&i.push(s),s=[]}let a=0,l,c="",u="";function f(){c&&(t===0?s.push({type:0,value:c}):t===1||t===2||t===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;a<r.length;){if(l=r[a++],l==="\\"&&t!==2){n=t,t=4;continue}switch(t){case 0:l==="/"?(c&&f(),o()):l===":"?(f(),t=1):h();break;case 4:h(),t=n;break;case 1:l==="("?t=2:rv.test(l)?h():(f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=3:u+=l;break;case 3:f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),i}function ov(r,e,t){const n=ev(sv(r.path),t),i=et(n,{record:r,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function av(r,e){const t=[],n=new Map;e=$f({strict:!1,end:!0,sensitive:!1},e);function i(u){return n.get(u)}function s(u,f,h){const p=!h,g=lv(u);g.aliasOf=h&&h.record;const d=$f(e,u),m=[g];if("alias"in u){const x=typeof u.alias=="string"?[u.alias]:u.alias;for(const y of x)m.push(et({},g,{components:h?h.record.components:g.components,path:y,aliasOf:h?h.record:g}))}let _,v;for(const x of m){const{path:y}=x;if(f&&y[0]!=="/"){const M=f.record.path,E=M[M.length-1]==="/"?"":"/";x.path=f.record.path+(y&&E+y)}if(_=ov(x,f,d),h?h.alias.push(_):(v=v||_,v!==_&&v.alias.push(_),p&&u.name&&!Yf(_)&&o(u.name)),g.children){const M=g.children;for(let E=0;E<M.length;E++)s(M[E],_,h&&h.children[E])}h=h||_,(_.record.components&&Object.keys(_.record.components).length||_.record.name||_.record.redirect)&&l(_)}return v?()=>{o(v)}:ro}function o(u){if(tm(u)){const f=n.get(u);f&&(n.delete(u),t.splice(t.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=t.indexOf(u);f>-1&&(t.splice(f,1),u.record.name&&n.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return t}function l(u){let f=0;for(;f<t.length&&nv(u,t[f])>=0&&(u.record.path!==t[f].record.path||!im(u,t[f]));)f++;t.splice(f,0,u),u.record.name&&!Yf(u)&&n.set(u.record.name,u)}function c(u,f){let h,p={},g,d;if("name"in u&&u.name){if(h=n.get(u.name),!h)throw xs(1,{location:u});d=h.record.name,p=et(qf(f.params,h.keys.filter(v=>!v.optional).map(v=>v.name)),u.params&&qf(u.params,h.keys.map(v=>v.name))),g=h.stringify(p)}else if("path"in u)g=u.path,h=t.find(v=>v.re.test(g)),h&&(p=h.parse(g),d=h.record.name);else{if(h=f.name?n.get(f.name):t.find(v=>v.re.test(f.path)),!h)throw xs(1,{location:u,currentLocation:f});d=h.record.name,p=et({},f.params,u.params),g=h.stringify(p)}const m=[];let _=h;for(;_;)m.unshift(_.record),_=_.parent;return{name:d,path:g,params:p,matched:m,meta:uv(m)}}return r.forEach(u=>s(u)),{addRoute:s,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function qf(r,e){const t={};for(const n of e)n in r&&(t[n]=r[n]);return t}function lv(r){return{path:r.path,redirect:r.redirect,name:r.name,meta:r.meta||{},aliasOf:void 0,beforeEnter:r.beforeEnter,props:cv(r),children:r.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in r?r.components||null:r.component&&{default:r.component}}}function cv(r){const e={},t=r.props||!1;if("component"in r)e.default=t;else for(const n in r.components)e[n]=typeof t=="boolean"?t:t[n];return e}function Yf(r){for(;r;){if(r.record.aliasOf)return!0;r=r.parent}return!1}function uv(r){return r.reduce((e,t)=>et(e,t.meta),{})}function $f(r,e){const t={};for(const n in r)t[n]=n in e?e[n]:r[n];return t}function im(r,e){return e.children.some(t=>t===r||im(r,t))}const rm=/#/g,fv=/&/g,hv=/\//g,dv=/=/g,pv=/\?/g,sm=/\+/g,mv=/%5B/g,gv=/%5D/g,om=/%5E/g,_v=/%60/g,am=/%7B/g,xv=/%7C/g,lm=/%7D/g,vv=/%20/g;function Pu(r){return encodeURI(""+r).replace(xv,"|").replace(mv,"[").replace(gv,"]")}function yv(r){return Pu(r).replace(am,"{").replace(lm,"}").replace(om,"^")}function Fc(r){return Pu(r).replace(sm,"%2B").replace(vv,"+").replace(rm,"%23").replace(fv,"%26").replace(_v,"`").replace(am,"{").replace(lm,"}").replace(om,"^")}function bv(r){return Fc(r).replace(dv,"%3D")}function Mv(r){return Pu(r).replace(rm,"%23").replace(pv,"%3F")}function wv(r){return r==null?"":Mv(r).replace(hv,"%2F")}function Pa(r){try{return decodeURIComponent(""+r)}catch{}return""+r}function Sv(r){const e={};if(r===""||r==="?")return e;const n=(r[0]==="?"?r.slice(1):r).split("&");for(let i=0;i<n.length;++i){const s=n[i].replace(sm," "),o=s.indexOf("="),a=Pa(o<0?s:s.slice(0,o)),l=o<0?null:Pa(s.slice(o+1));if(a in e){let c=e[a];Hn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Kf(r){let e="";for(let t in r){const n=r[t];if(t=bv(t),n==null){n!==void 0&&(e+=(e.length?"&":"")+t);continue}(Hn(n)?n.map(s=>s&&Fc(s)):[n&&Fc(n)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+t,s!=null&&(e+="="+s))})}return e}function Tv(r){const e={};for(const t in r){const n=r[t];n!==void 0&&(e[t]=Hn(n)?n.map(i=>i==null?null:""+i):n==null?n:""+n)}return e}const Ev=Symbol(""),Zf=Symbol(""),Lu=Symbol(""),cm=Symbol(""),Nc=Symbol("");function ks(){let r=[];function e(n){return r.push(n),()=>{const i=r.indexOf(n);i>-1&&r.splice(i,1)}}function t(){r=[]}return{add:e,list:()=>r,reset:t}}function Fi(r,e,t,n,i){const s=n&&(n.enterCallbacks[i]=n.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const l=f=>{f===!1?a(xs(4,{from:t,to:e})):f instanceof Error?a(f):Zx(f)?a(xs(2,{from:e,to:f})):(s&&n.enterCallbacks[i]===s&&typeof f=="function"&&s.push(f),o())},c=r.call(n&&n.instances[i],e,t,l);let u=Promise.resolve(c);r.length<3&&(u=u.then(l)),u.catch(f=>a(f))})}function Tl(r,e,t,n){const i=[];for(const s of r)for(const o in s.components){let a=s.components[o];if(!(e!=="beforeRouteEnter"&&!s.instances[o]))if(Av(a)){const c=(a.__vccOpts||a)[e];c&&i.push(Fi(c,t,n,s,o))}else{let l=a();i.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const u=Ix(c)?c.default:c;s.components[o]=u;const h=(u.__vccOpts||u)[e];return h&&Fi(h,t,n,s,o)()}))}}return i}function Av(r){return typeof r=="object"||"displayName"in r||"props"in r||"__vccOpts"in r}function Jf(r){const e=yi(Lu),t=yi(cm),n=wn(()=>e.resolve(vr(r.to))),i=wn(()=>{const{matched:l}=n.value,{length:c}=l,u=l[c-1],f=t.matched;if(!u||!f.length)return-1;const h=f.findIndex(_s.bind(null,u));if(h>-1)return h;const p=Qf(l[c-2]);return c>1&&Qf(u)===p&&f[f.length-1].path!==p?f.findIndex(_s.bind(null,l[c-2])):h}),s=wn(()=>i.value>-1&&Rv(t.params,n.value.params)),o=wn(()=>i.value>-1&&i.value===t.matched.length-1&&Qp(t.params,n.value.params));function a(l={}){return Lv(l)?e[vr(r.replace)?"replace":"push"](vr(r.to)).catch(ro):Promise.resolve()}return{route:n,href:wn(()=>n.value.href),isActive:s,isExactActive:o,navigate:a}}const Cv=Ya({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Jf,setup(r,{slots:e}){const t=Oo(Jf(r)),{options:n}=yi(Lu),i=wn(()=>({[eh(r.activeClass,n.linkActiveClass,"router-link-active")]:t.isActive,[eh(r.exactActiveClass,n.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=e.default&&e.default(t);return r.custom?s:Jp("a",{"aria-current":t.isExactActive?r.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:i.value},s)}}}),Pv=Cv;function Lv(r){if(!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)&&!r.defaultPrevented&&!(r.button!==void 0&&r.button!==0)){if(r.currentTarget&&r.currentTarget.getAttribute){const e=r.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return r.preventDefault&&r.preventDefault(),!0}}function Rv(r,e){for(const t in e){const n=e[t],i=r[t];if(typeof n=="string"){if(n!==i)return!1}else if(!Hn(i)||i.length!==n.length||n.some((s,o)=>s!==i[o]))return!1}return!0}function Qf(r){return r?r.aliasOf?r.aliasOf.path:r.path:""}const eh=(r,e,t)=>r??e??t,Dv=Ya({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(r,{attrs:e,slots:t}){const n=yi(Nc),i=wn(()=>r.route||n.value),s=yi(Zf,0),o=wn(()=>{let c=vr(s);const{matched:u}=i.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=wn(()=>i.value.matched[o.value]);_a(Zf,wn(()=>o.value+1)),_a(Ev,a),_a(Nc,i);const l=bp();return xa(()=>[l.value,a.value,r.name],([c,u,f],[h,p,g])=>{u&&(u.instances[f]=c,p&&p!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!_s(u,p)||!h)&&(u.enterCallbacks[f]||[]).forEach(d=>d(c))},{flush:"post"}),()=>{const c=i.value,u=r.name,f=a.value,h=f&&f.components[u];if(!h)return th(t.default,{Component:h,route:c});const p=f.props[u],g=p?p===!0?c.params:typeof p=="function"?p(c):p:null,m=Jp(h,et({},g,e,{onVnodeUnmounted:_=>{_.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return th(t.default,{Component:m,route:c})||m}}});function th(r,e){if(!r)return null;const t=r(e);return t.length===1?t[0]:t}const um=Dv;function Iv(r){const e=av(r.routes,r),t=r.parseQuery||Sv,n=r.stringifyQuery||Kf,i=r.history,s=ks(),o=ks(),a=ks(),l=Z_(Ai);let c=Ai;Kr&&r.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=wl.bind(null,P=>""+P),f=wl.bind(null,wv),h=wl.bind(null,Pa);function p(P,Z){let $,re;return tm(P)?($=e.getRecordMatcher(P),re=Z):re=P,e.addRoute(re,$)}function g(P){const Z=e.getRecordMatcher(P);Z&&e.removeRoute(Z)}function d(){return e.getRoutes().map(P=>P.record)}function m(P){return!!e.getRecordMatcher(P)}function _(P,Z){if(Z=et({},Z||l.value),typeof P=="string"){const A=Sl(t,P,Z.path),D=e.resolve({path:A.path},Z),q=i.createHref(A.fullPath);return et(A,D,{params:h(D.params),hash:Pa(A.hash),redirectedFrom:void 0,href:q})}let $;if("path"in P)$=et({},P,{path:Sl(t,P.path,Z.path).path});else{const A=et({},P.params);for(const D in A)A[D]==null&&delete A[D];$=et({},P,{params:f(P.params)}),Z.params=f(Z.params)}const re=e.resolve($,Z),pe=P.hash||"";re.params=u(h(re.params));const we=Nx(n,et({},P,{hash:yv(pe),path:re.path})),ve=i.createHref(we);return et({fullPath:we,hash:pe,query:n===Kf?Tv(P.query):P.query||{}},re,{redirectedFrom:void 0,href:ve})}function v(P){return typeof P=="string"?Sl(t,P,l.value.path):et({},P)}function x(P,Z){if(c!==P)return xs(8,{from:Z,to:P})}function y(P){return L(P)}function M(P){return y(et(v(P),{replace:!0}))}function E(P){const Z=P.matched[P.matched.length-1];if(Z&&Z.redirect){const{redirect:$}=Z;let re=typeof $=="function"?$(P):$;return typeof re=="string"&&(re=re.includes("?")||re.includes("#")?re=v(re):{path:re},re.params={}),et({query:P.query,hash:P.hash,params:"path"in re?{}:P.params},re)}}function L(P,Z){const $=c=_(P),re=l.value,pe=P.state,we=P.force,ve=P.replace===!0,A=E($);if(A)return L(et(v(A),{state:typeof A=="object"?et({},pe,A.state):pe,force:we,replace:ve}),Z||$);const D=$;D.redirectedFrom=Z;let q;return!we&&zx(n,re,$)&&(q=xs(16,{to:D,from:re}),se(re,re,!0,!1)),(q?Promise.resolve(q):S(D,re)).catch(J=>li(J)?li(J,2)?J:ce(J):K(J,D,re)).then(J=>{if(J){if(li(J,2))return L(et({replace:ve},v(J.to),{state:typeof J.to=="object"?et({},pe,J.to.state):pe,force:we}),Z||D)}else J=X(D,re,!0,ve,pe);return I(D,re,J),J})}function b(P,Z){const $=x(P,Z);return $?Promise.reject($):Promise.resolve()}function S(P,Z){let $;const[re,pe,we]=Ov(P,Z);$=Tl(re.reverse(),"beforeRouteLeave",P,Z);for(const A of re)A.leaveGuards.forEach(D=>{$.push(Fi(D,P,Z))});const ve=b.bind(null,P,Z);return $.push(ve),Dr($).then(()=>{$=[];for(const A of s.list())$.push(Fi(A,P,Z));return $.push(ve),Dr($)}).then(()=>{$=Tl(pe,"beforeRouteUpdate",P,Z);for(const A of pe)A.updateGuards.forEach(D=>{$.push(Fi(D,P,Z))});return $.push(ve),Dr($)}).then(()=>{$=[];for(const A of P.matched)if(A.beforeEnter&&!Z.matched.includes(A))if(Hn(A.beforeEnter))for(const D of A.beforeEnter)$.push(Fi(D,P,Z));else $.push(Fi(A.beforeEnter,P,Z));return $.push(ve),Dr($)}).then(()=>(P.matched.forEach(A=>A.enterCallbacks={}),$=Tl(we,"beforeRouteEnter",P,Z),$.push(ve),Dr($))).then(()=>{$=[];for(const A of o.list())$.push(Fi(A,P,Z));return $.push(ve),Dr($)}).catch(A=>li(A,8)?A:Promise.reject(A))}function I(P,Z,$){for(const re of a.list())re(P,Z,$)}function X(P,Z,$,re,pe){const we=x(P,Z);if(we)return we;const ve=Z===Ai,A=Kr?history.state:{};$&&(re||ve?i.replace(P.fullPath,et({scroll:ve&&A&&A.scroll},pe)):i.push(P.fullPath,pe)),l.value=P,se(P,Z,$,ve),ce()}let H;function N(){H||(H=i.listen((P,Z,$)=>{if(!de.listening)return;const re=_(P),pe=E(re);if(pe){L(et(pe,{replace:!0}),re).catch(ro);return}c=re;const we=l.value;Kr&&Xx(Gf(we.fullPath,$.delta),Ja()),S(re,we).catch(ve=>li(ve,12)?ve:li(ve,2)?(L(ve.to,re).then(A=>{li(A,20)&&!$.delta&&$.type===vo.pop&&i.go(-1,!1)}).catch(ro),Promise.reject()):($.delta&&i.go(-$.delta,!1),K(ve,re,we))).then(ve=>{ve=ve||X(re,we,!1),ve&&($.delta&&!li(ve,8)?i.go(-$.delta,!1):$.type===vo.pop&&li(ve,20)&&i.go(-1,!1)),I(re,we,ve)}).catch(ro)}))}let O=ks(),W=ks(),j;function K(P,Z,$){ce(P);const re=W.list();return re.length?re.forEach(pe=>pe(P,Z,$)):console.error(P),Promise.reject(P)}function V(){return j&&l.value!==Ai?Promise.resolve():new Promise((P,Z)=>{O.add([P,Z])})}function ce(P){return j||(j=!P,N(),O.list().forEach(([Z,$])=>P?$(P):Z()),O.reset()),P}function se(P,Z,$,re){const{scrollBehavior:pe}=r;if(!Kr||!pe)return Promise.resolve();const we=!$&&jx(Gf(P.fullPath,0))||(re||!$)&&history.state&&history.state.scroll||null;return Ep().then(()=>pe(P,Z,we)).then(ve=>ve&&Wx(ve)).catch(ve=>K(ve,P,Z))}const Me=P=>i.go(P);let k;const ue=new Set,de={currentRoute:l,listening:!0,addRoute:p,removeRoute:g,hasRoute:m,getRoutes:d,resolve:_,options:r,push:y,replace:M,go:Me,back:()=>Me(-1),forward:()=>Me(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:W.add,isReady:V,install(P){const Z=this;P.component("RouterLink",Pv),P.component("RouterView",um),P.config.globalProperties.$router=Z,Object.defineProperty(P.config.globalProperties,"$route",{enumerable:!0,get:()=>vr(l)}),Kr&&!k&&l.value===Ai&&(k=!0,y(i.location).catch(pe=>{}));const $={};for(const pe in Ai)$[pe]=wn(()=>l.value[pe]);P.provide(Lu,Z),P.provide(cm,Oo($)),P.provide(Nc,l);const re=P.unmount;ue.add(P),P.unmount=function(){ue.delete(P),ue.size<1&&(c=Ai,H&&H(),H=null,l.value=Ai,k=!1,j=!1),re()}}};return de}function Dr(r){return r.reduce((e,t)=>e.then(()=>t()),Promise.resolve())}function Ov(r,e){const t=[],n=[],i=[],s=Math.max(e.matched.length,r.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(r.matched.find(c=>_s(c,a))?n.push(a):t.push(a));const l=r.matched[o];l&&(e.matched.find(c=>_s(c,l))||i.push(l))}return[t,n,i]}const Fv=Ya({__name:"App",setup(r){return(e,t)=>(jp(),q0(vr(um)))}});/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ru="150",Ir={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Or={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Nv=0,nh=1,zv=2,fm=1,Uv=2,Ks=3,Yi=0,dn=1,hn=2,Wi=0,os=1,ih=2,rh=3,sh=4,kv=5,Zr=100,Bv=101,Vv=102,oh=103,ah=104,Gv=200,Hv=201,Wv=202,Xv=203,hm=204,dm=205,jv=206,qv=207,Yv=208,$v=209,Kv=210,Zv=0,Jv=1,Qv=2,zc=3,ey=4,ty=5,ny=6,iy=7,Qa=0,ry=1,sy=2,bi=0,oy=1,ay=2,ly=3,cy=4,uy=5,pm=300,vs=301,ys=302,La=303,Uc=304,el=306,yo=1e3,un=1001,kc=1002,Ct=1003,lh=1004,El=1005,Mn=1006,fy=1007,bo=1008,Tr=1009,hy=1010,dy=1011,mm=1012,py=1013,gr=1014,Ni=1015,Mo=1016,my=1017,gy=1018,as=1020,_y=1021,Sn=1023,xy=1024,vy=1025,br=1026,bs=1027,yy=1028,by=1029,My=1030,wy=1031,Sy=1033,Al=33776,Cl=33777,Pl=33778,Ll=33779,ch=35840,uh=35841,fh=35842,hh=35843,Ty=36196,dh=37492,ph=37496,mh=37808,gh=37809,_h=37810,xh=37811,vh=37812,yh=37813,bh=37814,Mh=37815,wh=37816,Sh=37817,Th=37818,Eh=37819,Ah=37820,Ch=37821,Rl=36492,Ey=36283,Ph=36284,Lh=36285,Rh=36286,Ra=2300,Da=2301,Dl=2302,Dh=2400,Ih=2401,Oh=2402,Ay=2500,Er=3e3,Qe=3001,Cy=3200,Py=3201,Du=0,Ly=1,Yn="srgb",wo="srgb-linear",gm="display-p3",Il=7680,Ry=519,Fh=35044,Nh="300 es",Bc=1035;class Pr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const It=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let zh=1234567;const ls=Math.PI/180,So=180/Math.PI;function Zi(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(It[r&255]+It[r>>8&255]+It[r>>16&255]+It[r>>24&255]+"-"+It[e&255]+It[e>>8&255]+"-"+It[e>>16&15|64]+It[e>>24&255]+"-"+It[t&63|128]+It[t>>8&255]+"-"+It[t>>16&255]+It[t>>24&255]+It[n&255]+It[n>>8&255]+It[n>>16&255]+It[n>>24&255]).toLowerCase()}function Pt(r,e,t){return Math.max(e,Math.min(t,r))}function Iu(r,e){return(r%e+e)%e}function Dy(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function Iy(r,e,t){return r!==e?(t-r)/(e-r):0}function oo(r,e,t){return(1-t)*r+t*e}function Oy(r,e,t,n){return oo(r,e,1-Math.exp(-t*n))}function Fy(r,e=1){return e-Math.abs(Iu(r,e*2)-e)}function Ny(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function zy(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Uy(r,e){return r+Math.floor(Math.random()*(e-r+1))}function ky(r,e){return r+Math.random()*(e-r)}function By(r){return r*(.5-Math.random())}function Vy(r){r!==void 0&&(zh=r);let e=zh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Gy(r){return r*ls}function Hy(r){return r*So}function Vc(r){return(r&r-1)===0&&r!==0}function _m(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function xm(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Wy(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),f=s((e-n)/2),h=o((e-n)/2),p=s((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":r.set(a*u,l*f,l*h,a*c);break;case"YZY":r.set(l*h,a*u,l*f,a*c);break;case"ZXZ":r.set(l*f,l*h,a*u,a*c);break;case"XZX":r.set(a*u,l*g,l*p,a*c);break;case"YXY":r.set(l*p,a*u,l*g,a*c);break;case"ZYZ":r.set(l*g,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Zs(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function $t(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Jn={DEG2RAD:ls,RAD2DEG:So,generateUUID:Zi,clamp:Pt,euclideanModulo:Iu,mapLinear:Dy,inverseLerp:Iy,lerp:oo,damp:Oy,pingpong:Fy,smoothstep:Ny,smootherstep:zy,randInt:Uy,randFloat:ky,randFloatSpread:By,seededRandom:Vy,degToRad:Gy,radToDeg:Hy,isPowerOfTwo:Vc,ceilPowerOfTwo:_m,floorPowerOfTwo:xm,setQuaternionFromProperEuler:Wy,normalize:$t,denormalize:Zs};class Fe{constructor(e=0,t=0){Fe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ut{constructor(){Ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],p=n[5],g=n[8],d=i[0],m=i[3],_=i[6],v=i[1],x=i[4],y=i[7],M=i[2],E=i[5],L=i[8];return s[0]=o*d+a*v+l*M,s[3]=o*m+a*x+l*E,s[6]=o*_+a*y+l*L,s[1]=c*d+u*v+f*M,s[4]=c*m+u*x+f*E,s[7]=c*_+u*y+f*L,s[2]=h*d+p*v+g*M,s[5]=h*m+p*x+g*E,s[8]=h*_+p*y+g*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,p=c*s-o*l,g=t*f+n*h+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const d=1/g;return e[0]=f*d,e[1]=(i*c-u*n)*d,e[2]=(a*n-i*o)*d,e[3]=h*d,e[4]=(u*t-i*l)*d,e[5]=(i*s-a*t)*d,e[6]=p*d,e[7]=(n*l-c*t)*d,e[8]=(o*t-n*s)*d,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ol.makeScale(e,t)),this}rotate(e){return this.premultiply(Ol.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ol.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ol=new Ut;function vm(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function To(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}class An{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],f=n[i+3];const h=s[o+0],p=s[o+1],g=s[o+2],d=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=p,e[t+2]=g,e[t+3]=d;return}if(f!==d||l!==h||c!==p||u!==g){let m=1-a;const _=l*h+c*p+u*g+f*d,v=_>=0?1:-1,x=1-_*_;if(x>Number.EPSILON){const M=Math.sqrt(x),E=Math.atan2(M,_*v);m=Math.sin(m*E)/M,a=Math.sin(a*E)/M}const y=a*v;if(l=l*m+h*y,c=c*m+p*y,u=u*m+g*y,f=f*m+d*y,m===1-a){const M=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=M,c*=M,u*=M,f*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],f=s[o],h=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+u*f+l*p-c*h,e[t+1]=l*g+u*h+c*f-a*p,e[t+2]=c*g+u*p+a*h-l*f,e[t+3]=u*g-a*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),f=a(s/2),h=l(n/2),p=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f-h*p*g;break;case"YXZ":this._x=h*u*f+c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f+h*p*g;break;case"ZXY":this._x=h*u*f-c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f-h*p*g;break;case"ZYX":this._x=h*u*f-c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f+h*p*g;break;case"YZX":this._x=h*u*f+c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f-h*p*g;break;case"XZY":this._x=h*u*f-c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=n+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-i)*p}else if(n>a&&n>f){const p=2*Math.sqrt(1+n-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(s+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-n-f);this._w=(s-c)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-n-a);this._w=(o-i)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Pt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=n*f+this._x*h,this._y=i*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,t=0,n=0){F.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Uh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Uh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*i-a*n,u=l*n+a*t-s*i,f=l*i+s*n-o*t,h=-s*t-o*n-a*i;return this.x=c*l+h*-s+u*-a-f*-o,this.y=u*l+h*-o+f*-s-c*-a,this.z=f*l+h*-a+c*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Fl.copy(this).projectOnVector(e),this.sub(Fl)}reflect(e){return this.sub(Fl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Fl=new F,Uh=new An;function cs(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Nl(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const Xy=new Ut().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),jy=new Ut().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]),zi=new F;function qy(r){return r.convertSRGBToLinear(),zi.set(r.r,r.g,r.b).applyMatrix3(jy),r.setRGB(zi.x,zi.y,zi.z)}function Yy(r){return zi.set(r.r,r.g,r.b).applyMatrix3(Xy),r.setRGB(zi.x,zi.y,zi.z).convertLinearToSRGB()}const $y={[wo]:r=>r,[Yn]:r=>r.convertSRGBToLinear(),[gm]:qy},Ky={[wo]:r=>r,[Yn]:r=>r.convertLinearToSRGB(),[gm]:Yy},Wt={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(r){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!r},get workingColorSpace(){return wo},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=$y[e],i=Ky[t];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}};let Fr;class ym{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Fr===void 0&&(Fr=To("canvas")),Fr.width=e.width,Fr.height=e.height;const n=Fr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Fr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=To("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=cs(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(cs(t[n]/255)*255):t[n]=cs(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class bm{constructor(e=null){this.isSource=!0,this.uuid=Zi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(zl(i[o].image)):s.push(zl(i[o]))}else s=zl(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function zl(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?ym.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Zy=0;class Rt extends Pr{constructor(e=Rt.DEFAULT_IMAGE,t=Rt.DEFAULT_MAPPING,n=un,i=un,s=Mn,o=bo,a=Sn,l=Tr,c=Rt.DEFAULT_ANISOTROPY,u=Er){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Zy++}),this.uuid=Zi(),this.name="",this.source=new bm(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Fe(0,0),this.repeat=new Fe(1,1),this.center=new Fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==pm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case yo:e.x=e.x-Math.floor(e.x);break;case un:e.x=e.x<0?0:1;break;case kc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case yo:e.y=e.y-Math.floor(e.y);break;case un:e.y=e.y<0?0:1;break;case kc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Rt.DEFAULT_IMAGE=null;Rt.DEFAULT_MAPPING=pm;Rt.DEFAULT_ANISOTROPY=1;class Ke{constructor(e=0,t=0,n=0,i=1){Ke.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],g=l[9],d=l[2],m=l[6],_=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-d)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+d)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,y=(p+1)/2,M=(_+1)/2,E=(u+h)/4,L=(f+d)/4,b=(g+m)/4;return x>y&&x>M?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=E/n,s=L/n):y>M?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=E/i,s=b/i):M<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(M),n=L/s,i=b/s),this.set(n,i,s,t),this}let v=Math.sqrt((m-g)*(m-g)+(f-d)*(f-d)+(h-u)*(h-u));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(f-d)/v,this.z=(h-u)/v,this.w=Math.acos((c+p+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ar extends Pr{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ke(0,0,e,t),this.scissorTest=!1,this.viewport=new Ke(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new Rt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Mn,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new bm(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Mm extends Rt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Jy extends Rt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fo{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],f=e[l+1],h=e[l+2];u<t&&(t=u),f<n&&(n=f),h<i&&(i=h),u>s&&(s=u),f>o&&(o=f),h>a&&(a=h)}return this.min.set(t,n,i),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),f=e.getY(l),h=e.getZ(l);u<t&&(t=u),f<n&&(n=f),h<i&&(i=h),u>s&&(s=u),f>o&&(o=f),h>a&&(a=h)}return this.min.set(t,n,i),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=rr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let o=0,a=s.count;o<a;o++)rr.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(rr)}else n.boundingBox===null&&n.computeBoundingBox(),Ul.copy(n.boundingBox),Ul.applyMatrix4(e.matrixWorld),this.union(Ul);const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,rr),rr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Bs),Xo.subVectors(this.max,Bs),Nr.subVectors(e.a,Bs),zr.subVectors(e.b,Bs),Ur.subVectors(e.c,Bs),Ci.subVectors(zr,Nr),Pi.subVectors(Ur,zr),sr.subVectors(Nr,Ur);let t=[0,-Ci.z,Ci.y,0,-Pi.z,Pi.y,0,-sr.z,sr.y,Ci.z,0,-Ci.x,Pi.z,0,-Pi.x,sr.z,0,-sr.x,-Ci.y,Ci.x,0,-Pi.y,Pi.x,0,-sr.y,sr.x,0];return!kl(t,Nr,zr,Ur,Xo)||(t=[1,0,0,0,1,0,0,0,1],!kl(t,Nr,zr,Ur,Xo))?!1:(jo.crossVectors(Ci,Pi),t=[jo.x,jo.y,jo.z],kl(t,Nr,zr,Ur,Xo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,rr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(rr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ci),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ci=[new F,new F,new F,new F,new F,new F,new F,new F],rr=new F,Ul=new Fo,Nr=new F,zr=new F,Ur=new F,Ci=new F,Pi=new F,sr=new F,Bs=new F,Xo=new F,jo=new F,or=new F;function kl(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){or.fromArray(r,s);const a=i.x*Math.abs(or.x)+i.y*Math.abs(or.y)+i.z*Math.abs(or.z),l=e.dot(or),c=t.dot(or),u=n.dot(or);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Qy=new Fo,Vs=new F,Bl=new F;class tl{constructor(e=new F,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Qy.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vs.subVectors(e,this.center);const t=Vs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Vs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Bl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vs.copy(e.center).add(Bl)),this.expandByPoint(Vs.copy(e.center).sub(Bl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ui=new F,Vl=new F,qo=new F,Li=new F,Gl=new F,Yo=new F,Hl=new F;class Ou{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ui)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ui.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ui.copy(this.origin).addScaledVector(this.direction,t),ui.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Vl.copy(e).add(t).multiplyScalar(.5),qo.copy(t).sub(e).normalize(),Li.copy(this.origin).sub(Vl);const s=e.distanceTo(t)*.5,o=-this.direction.dot(qo),a=Li.dot(this.direction),l=-Li.dot(qo),c=Li.lengthSq(),u=Math.abs(1-o*o);let f,h,p,g;if(u>0)if(f=o*l-a,h=o*a-l,g=s*u,f>=0)if(h>=-g)if(h<=g){const d=1/u;f*=d,h*=d,p=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(Vl).addScaledVector(qo,h),p}intersectSphere(e,t){ui.subVectors(e.center,this.origin);const n=ui.dot(this.direction),i=ui.dot(ui)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,ui)!==null}intersectTriangle(e,t,n,i,s){Gl.subVectors(t,e),Yo.subVectors(n,e),Hl.crossVectors(Gl,Yo);let o=this.direction.dot(Hl),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Li.subVectors(this.origin,e);const l=a*this.direction.dot(Yo.crossVectors(Li,Yo));if(l<0)return null;const c=a*this.direction.dot(Gl.cross(Li));if(c<0||l+c>o)return null;const u=-a*Li.dot(Hl);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Re{constructor(){Re.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,s,o,a,l,c,u,f,h,p,g,d,m){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=s,_[5]=o,_[9]=a,_[13]=l,_[2]=c,_[6]=u,_[10]=f,_[14]=h,_[3]=p,_[7]=g,_[11]=d,_[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Re().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/kr.setFromMatrixColumn(e,0).length(),s=1/kr.setFromMatrixColumn(e,1).length(),o=1/kr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,p=o*f,g=a*u,d=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=p+g*c,t[5]=h-d*c,t[9]=-a*l,t[2]=d-h*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,p=l*f,g=c*u,d=c*f;t[0]=h+d*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=d+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,p=l*f,g=c*u,d=c*f;t[0]=h-d*a,t[4]=-o*f,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=d-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,p=o*f,g=a*u,d=a*f;t[0]=l*u,t[4]=g*c-p,t[8]=h*c+d,t[1]=l*f,t[5]=d*c+h,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,g=a*l,d=a*c;t[0]=l*u,t[4]=d-h*f,t[8]=g*f+p,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*f+g,t[10]=h-d*f}else if(e.order==="XZY"){const h=o*l,p=o*c,g=a*l,d=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+d,t[5]=o*u,t[9]=p*f-g,t[2]=g*f-p,t[6]=a*u,t[10]=d*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(eb,e,tb)}lookAt(e,t,n){const i=this.elements;return an.subVectors(e,t),an.lengthSq()===0&&(an.z=1),an.normalize(),Ri.crossVectors(n,an),Ri.lengthSq()===0&&(Math.abs(n.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),Ri.crossVectors(n,an)),Ri.normalize(),$o.crossVectors(an,Ri),i[0]=Ri.x,i[4]=$o.x,i[8]=an.x,i[1]=Ri.y,i[5]=$o.y,i[9]=an.y,i[2]=Ri.z,i[6]=$o.z,i[10]=an.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],p=n[13],g=n[2],d=n[6],m=n[10],_=n[14],v=n[3],x=n[7],y=n[11],M=n[15],E=i[0],L=i[4],b=i[8],S=i[12],I=i[1],X=i[5],H=i[9],N=i[13],O=i[2],W=i[6],j=i[10],K=i[14],V=i[3],ce=i[7],se=i[11],Me=i[15];return s[0]=o*E+a*I+l*O+c*V,s[4]=o*L+a*X+l*W+c*ce,s[8]=o*b+a*H+l*j+c*se,s[12]=o*S+a*N+l*K+c*Me,s[1]=u*E+f*I+h*O+p*V,s[5]=u*L+f*X+h*W+p*ce,s[9]=u*b+f*H+h*j+p*se,s[13]=u*S+f*N+h*K+p*Me,s[2]=g*E+d*I+m*O+_*V,s[6]=g*L+d*X+m*W+_*ce,s[10]=g*b+d*H+m*j+_*se,s[14]=g*S+d*N+m*K+_*Me,s[3]=v*E+x*I+y*O+M*V,s[7]=v*L+x*X+y*W+M*ce,s[11]=v*b+x*H+y*j+M*se,s[15]=v*S+x*N+y*K+M*Me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],p=e[14],g=e[3],d=e[7],m=e[11],_=e[15];return g*(+s*l*f-i*c*f-s*a*h+n*c*h+i*a*p-n*l*p)+d*(+t*l*p-t*c*h+s*o*h-i*o*p+i*c*u-s*l*u)+m*(+t*c*f-t*a*p-s*o*f+n*o*p+s*a*u-n*c*u)+_*(-i*a*u-t*l*f+t*a*h+i*o*f-n*o*h+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],p=e[11],g=e[12],d=e[13],m=e[14],_=e[15],v=f*m*c-d*h*c+d*l*p-a*m*p-f*l*_+a*h*_,x=g*h*c-u*m*c-g*l*p+o*m*p+u*l*_-o*h*_,y=u*d*c-g*f*c+g*a*p-o*d*p-u*a*_+o*f*_,M=g*f*l-u*d*l-g*a*h+o*d*h+u*a*m-o*f*m,E=t*v+n*x+i*y+s*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/E;return e[0]=v*L,e[1]=(d*h*s-f*m*s-d*i*p+n*m*p+f*i*_-n*h*_)*L,e[2]=(a*m*s-d*l*s+d*i*c-n*m*c-a*i*_+n*l*_)*L,e[3]=(f*l*s-a*h*s-f*i*c+n*h*c+a*i*p-n*l*p)*L,e[4]=x*L,e[5]=(u*m*s-g*h*s+g*i*p-t*m*p-u*i*_+t*h*_)*L,e[6]=(g*l*s-o*m*s-g*i*c+t*m*c+o*i*_-t*l*_)*L,e[7]=(o*h*s-u*l*s+u*i*c-t*h*c-o*i*p+t*l*p)*L,e[8]=y*L,e[9]=(g*f*s-u*d*s-g*n*p+t*d*p+u*n*_-t*f*_)*L,e[10]=(o*d*s-g*a*s+g*n*c-t*d*c-o*n*_+t*a*_)*L,e[11]=(u*a*s-o*f*s-u*n*c+t*f*c+o*n*p-t*a*p)*L,e[12]=M*L,e[13]=(u*d*i-g*f*i+g*n*h-t*d*h-u*n*m+t*f*m)*L,e[14]=(g*a*i-o*d*i-g*n*l+t*d*l+o*n*m-t*a*m)*L,e[15]=(o*f*i-u*a*i+u*n*l-t*f*l-o*n*h+t*a*h)*L,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,h=s*c,p=s*u,g=s*f,d=o*u,m=o*f,_=a*f,v=l*c,x=l*u,y=l*f,M=n.x,E=n.y,L=n.z;return i[0]=(1-(d+_))*M,i[1]=(p+y)*M,i[2]=(g-x)*M,i[3]=0,i[4]=(p-y)*E,i[5]=(1-(h+_))*E,i[6]=(m+v)*E,i[7]=0,i[8]=(g+x)*L,i[9]=(m-v)*L,i[10]=(1-(h+d))*L,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=kr.set(i[0],i[1],i[2]).length();const o=kr.set(i[4],i[5],i[6]).length(),a=kr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],In.copy(this);const c=1/s,u=1/o,f=1/a;return In.elements[0]*=c,In.elements[1]*=c,In.elements[2]*=c,In.elements[4]*=u,In.elements[5]*=u,In.elements[6]*=u,In.elements[8]*=f,In.elements[9]*=f,In.elements[10]*=f,t.setFromRotationMatrix(In),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o){const a=this.elements,l=2*s/(t-e),c=2*s/(n-i),u=(t+e)/(t-e),f=(n+i)/(n-i),h=-(o+s)/(o-s),p=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=f,a[13]=0,a[2]=0,a[6]=0,a[10]=h,a[14]=p,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,s,o){const a=this.elements,l=1/(t-e),c=1/(n-i),u=1/(o-s),f=(t+e)*l,h=(n+i)*c,p=(o+s)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-f,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-h,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-p,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const kr=new F,In=new Re,eb=new F(0,0,0),tb=new F(1,1,1),Ri=new F,$o=new F,an=new F,kh=new Re,Bh=new An;class Cn{constructor(e=0,t=0,n=0,i=Cn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],f=i[2],h=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(Pt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Pt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Pt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Pt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Pt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Pt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return kh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(kh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Bh.setFromEuler(this),this.setFromQuaternion(Bh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Cn.DEFAULT_ORDER="XYZ";class Fu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let nb=0;const Vh=new F,Br=new An,fi=new Re,Ko=new F,Gs=new F,ib=new F,rb=new An,Gh=new F(1,0,0),Hh=new F(0,1,0),Wh=new F(0,0,1),sb={type:"added"},Xh={type:"removed"};class ct extends Pr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nb++}),this.uuid=Zi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ct.DEFAULT_UP.clone();const e=new F,t=new Cn,n=new An,i=new F(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Re},normalMatrix:{value:new Ut}}),this.matrix=new Re,this.matrixWorld=new Re,this.matrixAutoUpdate=ct.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Fu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Br.setFromAxisAngle(e,t),this.quaternion.multiply(Br),this}rotateOnWorldAxis(e,t){return Br.setFromAxisAngle(e,t),this.quaternion.premultiply(Br),this}rotateX(e){return this.rotateOnAxis(Gh,e)}rotateY(e){return this.rotateOnAxis(Hh,e)}rotateZ(e){return this.rotateOnAxis(Wh,e)}translateOnAxis(e,t){return Vh.copy(e).applyQuaternion(this.quaternion),this.position.add(Vh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Gh,e)}translateY(e){return this.translateOnAxis(Hh,e)}translateZ(e){return this.translateOnAxis(Wh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ko.copy(e):Ko.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Gs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fi.lookAt(Gs,Ko,this.up):fi.lookAt(Ko,Gs,this.up),this.quaternion.setFromRotationMatrix(fi),i&&(fi.extractRotation(i.matrixWorld),Br.setFromRotationMatrix(fi),this.quaternion.premultiply(Br.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(sb)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Xh)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Xh)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),fi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fi.multiply(e.parent.matrixWorld)),e.applyMatrix4(fi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,e,ib),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,rb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}ct.DEFAULT_UP=new F(0,1,0);ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const On=new F,hi=new F,Wl=new F,di=new F,Vr=new F,Gr=new F,jh=new F,Xl=new F,jl=new F,ql=new F;class Qn{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),On.subVectors(e,t),i.cross(On);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){On.subVectors(i,t),hi.subVectors(n,t),Wl.subVectors(e,t);const o=On.dot(On),a=On.dot(hi),l=On.dot(Wl),c=hi.dot(hi),u=hi.dot(Wl),f=o*c-a*a;if(f===0)return s.set(-2,-1,-1);const h=1/f,p=(c*l-a*u)*h,g=(o*u-a*l)*h;return s.set(1-p-g,g,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,di),di.x>=0&&di.y>=0&&di.x+di.y<=1}static getUV(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,di),l.set(0,0),l.addScaledVector(s,di.x),l.addScaledVector(o,di.y),l.addScaledVector(a,di.z),l}static isFrontFacing(e,t,n,i){return On.subVectors(n,t),hi.subVectors(e,t),On.cross(hi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return On.subVectors(this.c,this.b),hi.subVectors(this.a,this.b),On.cross(hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Qn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Qn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return Qn.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Qn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Qn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;Vr.subVectors(i,n),Gr.subVectors(s,n),Xl.subVectors(e,n);const l=Vr.dot(Xl),c=Gr.dot(Xl);if(l<=0&&c<=0)return t.copy(n);jl.subVectors(e,i);const u=Vr.dot(jl),f=Gr.dot(jl);if(u>=0&&f<=u)return t.copy(i);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Vr,o);ql.subVectors(e,s);const p=Vr.dot(ql),g=Gr.dot(ql);if(g>=0&&p<=g)return t.copy(s);const d=p*c-l*g;if(d<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Gr,a);const m=u*g-p*f;if(m<=0&&f-u>=0&&p-g>=0)return jh.subVectors(s,i),a=(f-u)/(f-u+(p-g)),t.copy(i).addScaledVector(jh,a);const _=1/(m+d+h);return o=d*_,a=h*_,t.copy(n).addScaledVector(Vr,o).addScaledVector(Gr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let ob=0;class Lr extends Pr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ob++}),this.uuid=Zi(),this.name="",this.type="Material",this.blending=os,this.side=Yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=hm,this.blendDst=dm,this.blendEquation=Zr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=zc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ry,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Il,this.stencilZFail=Il,this.stencilZPass=Il,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==os&&(n.blending=this.blending),this.side!==Yi&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const wm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fn={h:0,s:0,l:0},Zo={h:0,s:0,l:0};function Yl(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class De{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Yn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Wt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Wt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Wt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Wt.workingColorSpace){if(e=Iu(e,1),t=Pt(t,0,1),n=Pt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Yl(o,s,e+1/3),this.g=Yl(o,s,e),this.b=Yl(o,s,e-1/3)}return Wt.toWorkingColorSpace(this,i),this}setStyle(e,t=Yn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Wt.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Wt.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,u=parseFloat(s[3])/100;return n(s[4]),this.setHSL(l,c,u,t)}break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Wt.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Wt.toWorkingColorSpace(this,t),this;console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Yn){const n=wm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=cs(e.r),this.g=cs(e.g),this.b=cs(e.b),this}copyLinearToSRGB(e){return this.r=Nl(e.r),this.g=Nl(e.g),this.b=Nl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Yn){return Wt.fromWorkingColorSpace(Ot.copy(this),e),Pt(Ot.r*255,0,255)<<16^Pt(Ot.g*255,0,255)<<8^Pt(Ot.b*255,0,255)<<0}getHexString(e=Yn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Wt.workingColorSpace){Wt.fromWorkingColorSpace(Ot.copy(this),t);const n=Ot.r,i=Ot.g,s=Ot.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case n:l=(i-s)/f+(i<s?6:0);break;case i:l=(s-n)/f+2;break;case s:l=(n-i)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Wt.workingColorSpace){return Wt.fromWorkingColorSpace(Ot.copy(this),t),e.r=Ot.r,e.g=Ot.g,e.b=Ot.b,e}getStyle(e=Yn){Wt.fromWorkingColorSpace(Ot.copy(this),e);const t=Ot.r,n=Ot.g,i=Ot.b;return e!==Yn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${t*255|0},${n*255|0},${i*255|0})`}offsetHSL(e,t,n){return this.getHSL(Fn),Fn.h+=e,Fn.s+=t,Fn.l+=n,this.setHSL(Fn.h,Fn.s,Fn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Fn),e.getHSL(Zo);const n=oo(Fn.h,Zo.h,t),i=oo(Fn.s,Zo.s,t),s=oo(Fn.l,Zo.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ot=new De;De.NAMES=wm;class Nu extends Lr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Qa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xt=new F,Jo=new Fe;class ii{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Fh,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Jo.fromBufferAttribute(this,t),Jo.applyMatrix3(e),this.setXY(t,Jo.x,Jo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix3(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix4(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyNormalMatrix(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.transformDirection(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Zs(t,this.array)),t}setX(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Zs(t,this.array)),t}setY(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Zs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Zs(t,this.array)),t}setW(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),n=$t(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),n=$t(n,this.array),i=$t(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),n=$t(n,this.array),i=$t(i,this.array),s=$t(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Fh&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class zu extends ii{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Sm extends ii{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ut extends ii{constructor(e,t,n){super(new Float32Array(e),t,n)}}let ab=0;const vn=new Re,$l=new ct,Hr=new F,ln=new Fo,Hs=new Fo,Et=new F;class Qt extends Pr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ab++}),this.uuid=Zi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(vm(e)?Sm:zu)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ut().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return vn.makeRotationFromQuaternion(e),this.applyMatrix4(vn),this}rotateX(e){return vn.makeRotationX(e),this.applyMatrix4(vn),this}rotateY(e){return vn.makeRotationY(e),this.applyMatrix4(vn),this}rotateZ(e){return vn.makeRotationZ(e),this.applyMatrix4(vn),this}translate(e,t,n){return vn.makeTranslation(e,t,n),this.applyMatrix4(vn),this}scale(e,t,n){return vn.makeScale(e,t,n),this.applyMatrix4(vn),this}lookAt(e){return $l.lookAt(e),$l.updateMatrix(),this.applyMatrix4($l.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hr).negate(),this.translate(Hr.x,Hr.y,Hr.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ut(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];ln.setFromBufferAttribute(s),this.morphTargetsRelative?(Et.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Et),Et.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Et)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new tl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new F,1/0);return}if(e){const n=this.boundingSphere.center;if(ln.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Hs.setFromBufferAttribute(a),this.morphTargetsRelative?(Et.addVectors(ln.min,Hs.min),ln.expandByPoint(Et),Et.addVectors(ln.max,Hs.max),ln.expandByPoint(Et)):(ln.expandByPoint(Hs.min),ln.expandByPoint(Hs.max))}ln.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)Et.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Et));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Et.fromBufferAttribute(a,c),l&&(Hr.fromBufferAttribute(e,c),Et.add(Hr)),i=Math.max(i,n.distanceToSquared(Et))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ii(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let I=0;I<a;I++)c[I]=new F,u[I]=new F;const f=new F,h=new F,p=new F,g=new Fe,d=new Fe,m=new Fe,_=new F,v=new F;function x(I,X,H){f.fromArray(i,I*3),h.fromArray(i,X*3),p.fromArray(i,H*3),g.fromArray(o,I*2),d.fromArray(o,X*2),m.fromArray(o,H*2),h.sub(f),p.sub(f),d.sub(g),m.sub(g);const N=1/(d.x*m.y-m.x*d.y);isFinite(N)&&(_.copy(h).multiplyScalar(m.y).addScaledVector(p,-d.y).multiplyScalar(N),v.copy(p).multiplyScalar(d.x).addScaledVector(h,-m.x).multiplyScalar(N),c[I].add(_),c[X].add(_),c[H].add(_),u[I].add(v),u[X].add(v),u[H].add(v))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let I=0,X=y.length;I<X;++I){const H=y[I],N=H.start,O=H.count;for(let W=N,j=N+O;W<j;W+=3)x(n[W+0],n[W+1],n[W+2])}const M=new F,E=new F,L=new F,b=new F;function S(I){L.fromArray(s,I*3),b.copy(L);const X=c[I];M.copy(X),M.sub(L.multiplyScalar(L.dot(X))).normalize(),E.crossVectors(b,X);const N=E.dot(u[I])<0?-1:1;l[I*4]=M.x,l[I*4+1]=M.y,l[I*4+2]=M.z,l[I*4+3]=N}for(let I=0,X=y.length;I<X;++I){const H=y[I],N=H.start,O=H.count;for(let W=N,j=N+O;W<j;W+=3)S(n[W+0]),S(n[W+1]),S(n[W+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ii(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,p=n.count;h<p;h++)n.setXYZ(h,0,0,0);const i=new F,s=new F,o=new F,a=new F,l=new F,c=new F,u=new F,f=new F;if(e)for(let h=0,p=e.count;h<p;h+=3){const g=e.getX(h+0),d=e.getX(h+1),m=e.getX(h+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,d),o.fromBufferAttribute(t,m),u.subVectors(o,s),f.subVectors(i,s),u.cross(f),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,d),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(d,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)i.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),f.subVectors(i,s),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Et.fromBufferAttribute(e,t),Et.normalize(),e.setXYZ(t,Et.x,Et.y,Et.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let p=0,g=0;for(let d=0,m=l.length;d<m;d++){a.isInterleavedBufferAttribute?p=l[d]*a.data.stride+a.offset:p=l[d]*u;for(let _=0;_<u;_++)h[g++]=c[p++]}return new ii(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Qt,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],p=e(h,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const qh=new Re,qn=new Ou,Qo=new tl,Yh=new F,Ws=new F,Xs=new F,js=new F,Kl=new F,ea=new F,ta=new Fe,na=new Fe,ia=new Fe,Zl=new F,ra=new F;class kt extends ct{constructor(e=new Qt,t=new Nu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){ea.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(Kl.fromBufferAttribute(f,e),o?ea.addScaledVector(Kl,u):ea.addScaledVector(Kl.sub(t),u))}t.add(ea)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Qo.copy(n.boundingSphere),Qo.applyMatrix4(s),qn.copy(e.ray).recast(e.near),Qo.containsPoint(qn.origin)===!1&&(qn.intersectSphere(Qo,Yh)===null||qn.origin.distanceToSquared(Yh)>(e.far-e.near)**2))||(qh.copy(s).invert(),qn.copy(e.ray).applyMatrix4(qh),n.boundingBox!==null&&qn.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,l=n.attributes.position,c=n.attributes.uv,u=n.attributes.uv2,f=n.groups,h=n.drawRange;if(a!==null)if(Array.isArray(i))for(let p=0,g=f.length;p<g;p++){const d=f[p],m=i[d.materialIndex],_=Math.max(d.start,h.start),v=Math.min(a.count,Math.min(d.start+d.count,h.start+h.count));for(let x=_,y=v;x<y;x+=3){const M=a.getX(x),E=a.getX(x+1),L=a.getX(x+2);o=sa(this,m,e,qn,c,u,M,E,L),o&&(o.faceIndex=Math.floor(x/3),o.face.materialIndex=d.materialIndex,t.push(o))}}else{const p=Math.max(0,h.start),g=Math.min(a.count,h.start+h.count);for(let d=p,m=g;d<m;d+=3){const _=a.getX(d),v=a.getX(d+1),x=a.getX(d+2);o=sa(this,i,e,qn,c,u,_,v,x),o&&(o.faceIndex=Math.floor(d/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(i))for(let p=0,g=f.length;p<g;p++){const d=f[p],m=i[d.materialIndex],_=Math.max(d.start,h.start),v=Math.min(l.count,Math.min(d.start+d.count,h.start+h.count));for(let x=_,y=v;x<y;x+=3){const M=x,E=x+1,L=x+2;o=sa(this,m,e,qn,c,u,M,E,L),o&&(o.faceIndex=Math.floor(x/3),o.face.materialIndex=d.materialIndex,t.push(o))}}else{const p=Math.max(0,h.start),g=Math.min(l.count,h.start+h.count);for(let d=p,m=g;d<m;d+=3){const _=d,v=d+1,x=d+2;o=sa(this,i,e,qn,c,u,_,v,x),o&&(o.faceIndex=Math.floor(d/3),t.push(o))}}}}function lb(r,e,t,n,i,s,o,a){let l;if(e.side===dn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===Yi,a),l===null)return null;ra.copy(a),ra.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(ra);return c<t.near||c>t.far?null:{distance:c,point:ra.clone(),object:r}}function sa(r,e,t,n,i,s,o,a,l){r.getVertexPosition(o,Ws),r.getVertexPosition(a,Xs),r.getVertexPosition(l,js);const c=lb(r,e,t,n,Ws,Xs,js,Zl);if(c){i&&(ta.fromBufferAttribute(i,o),na.fromBufferAttribute(i,a),ia.fromBufferAttribute(i,l),c.uv=Qn.getUV(Zl,Ws,Xs,js,ta,na,ia,new Fe)),s&&(ta.fromBufferAttribute(s,o),na.fromBufferAttribute(s,a),ia.fromBufferAttribute(s,l),c.uv2=Qn.getUV(Zl,Ws,Xs,js,ta,na,ia,new Fe));const u={a:o,b:a,c:l,normal:new F,materialIndex:0};Qn.getNormal(Ws,Xs,js,u.normal),c.face=u}return c}class No extends Qt{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,p=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new ut(c,3)),this.setAttribute("normal",new ut(u,3)),this.setAttribute("uv",new ut(f,2));function g(d,m,_,v,x,y,M,E,L,b,S){const I=y/L,X=M/b,H=y/2,N=M/2,O=E/2,W=L+1,j=b+1;let K=0,V=0;const ce=new F;for(let se=0;se<j;se++){const Me=se*X-N;for(let k=0;k<W;k++){const ue=k*I-H;ce[d]=ue*v,ce[m]=Me*x,ce[_]=O,c.push(ce.x,ce.y,ce.z),ce[d]=0,ce[m]=0,ce[_]=E>0?1:-1,u.push(ce.x,ce.y,ce.z),f.push(k/L),f.push(1-se/b),K+=1}}for(let se=0;se<b;se++)for(let Me=0;Me<L;Me++){const k=h+Me+W*se,ue=h+Me+W*(se+1),de=h+(Me+1)+W*(se+1),P=h+(Me+1)+W*se;l.push(k,ue,P),l.push(ue,de,P),V+=6}a.addGroup(p,V,S),p+=V,h+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new No(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ms(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function jt(r){const e={};for(let t=0;t<r.length;t++){const n=Ms(r[t]);for(const i in n)e[i]=n[i]}return e}function cb(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Tm(r){return r.getRenderTarget()===null&&r.outputEncoding===Qe?Yn:wo}const ub={clone:Ms,merge:jt};var fb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class mn extends Lr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fb,this.fragmentShader=hb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ms(e.uniforms),this.uniformsGroups=cb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Em extends ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Re,this.projectionMatrix=new Re,this.projectionMatrixInverse=new Re}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class qt extends Em{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=So*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ls*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return So*2*Math.atan(Math.tan(ls*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ls*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Wr=-90,Xr=1;class db extends ct{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new qt(Wr,Xr,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const s=new qt(Wr,Xr,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new qt(Wr,Xr,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new qt(Wr,Xr,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new qt(Wr,Xr,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new qt(Wr,Xr,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,o,a,l,c]=this.children,u=e.getRenderTarget(),f=e.toneMapping,h=e.xr.enabled;e.toneMapping=bi,e.xr.enabled=!1;const p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=p,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=f,e.xr.enabled=h,n.texture.needsPMREMUpdate=!0}}class Am extends Rt{constructor(e,t,n,i,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:vs,super(e,t,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class pb extends Ar{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Am(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Mn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new No(5,5,5),s=new mn({name:"CubemapFromEquirect",uniforms:Ms(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:dn,blending:Wi});s.uniforms.tEquirect.value=t;const o=new kt(i,s),a=t.minFilter;return t.minFilter===bo&&(t.minFilter=Mn),new db(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const Jl=new F,mb=new F,gb=new Ut;class ur{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Jl.subVectors(n,t).cross(mb.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Jl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||gb.getNormalMatrix(e),i=this.coplanarPoint(Jl).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const jr=new tl,oa=new F;class Uu{constructor(e=new ur,t=new ur,n=new ur,i=new ur,s=new ur,o=new ur){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],f=n[7],h=n[8],p=n[9],g=n[10],d=n[11],m=n[12],_=n[13],v=n[14],x=n[15];return t[0].setComponents(a-i,f-l,d-h,x-m).normalize(),t[1].setComponents(a+i,f+l,d+h,x+m).normalize(),t[2].setComponents(a+s,f+c,d+p,x+_).normalize(),t[3].setComponents(a-s,f-c,d-p,x-_).normalize(),t[4].setComponents(a-o,f-u,d-g,x-v).normalize(),t[5].setComponents(a+o,f+u,d+g,x+v).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),jr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(jr)}intersectsSprite(e){return jr.center.set(0,0,0),jr.radius=.7071067811865476,jr.applyMatrix4(e.matrixWorld),this.intersectsSphere(jr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(oa.x=i.normal.x>0?e.max.x:e.min.x,oa.y=i.normal.y>0?e.max.y:e.min.y,oa.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(oa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Cm(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function _b(r,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const f=c.array,h=c.usage,p=r.createBuffer();r.bindBuffer(u,p),r.bufferData(u,f,h),c.onUploadCallback();let g;if(f instanceof Float32Array)g=5126;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(f instanceof Int16Array)g=5122;else if(f instanceof Uint32Array)g=5125;else if(f instanceof Int32Array)g=5124;else if(f instanceof Int8Array)g=5120;else if(f instanceof Uint8Array)g=5121;else if(f instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:p,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,f){const h=u.array,p=u.updateRange;r.bindBuffer(f,c),p.count===-1?r.bufferSubData(f,0,h):(t?r.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):r.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(r.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=n.get(c);(!h||h.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=n.get(c);f===void 0?n.set(c,i(c,u)):f.version<c.version&&(s(f.buffer,c,u),f.version=c.version)}return{get:o,remove:a,update:l}}class nl extends Qt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,f=e/a,h=t/l,p=[],g=[],d=[],m=[];for(let _=0;_<u;_++){const v=_*h-o;for(let x=0;x<c;x++){const y=x*f-s;g.push(y,-v,0),d.push(0,0,1),m.push(x/a),m.push(1-_/l)}}for(let _=0;_<l;_++)for(let v=0;v<a;v++){const x=v+c*_,y=v+c*(_+1),M=v+1+c*(_+1),E=v+1+c*_;p.push(x,y,E),p.push(y,M,E)}this.setIndex(p),this.setAttribute("position",new ut(g,3)),this.setAttribute("normal",new ut(d,3)),this.setAttribute("uv",new ut(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nl(e.width,e.height,e.widthSegments,e.heightSegments)}}var xb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,vb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yb=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,bb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Mb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,wb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sb="vec3 transformed = vec3( position );",Tb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Eb=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,Ab=`#ifdef USE_IRIDESCENCE
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
#endif`,Cb=`#ifdef USE_BUMPMAP
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
#endif`,Pb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Lb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Rb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Db=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ib=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ob=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Fb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Nb=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,zb=`#define PI 3.141592653589793
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
}`,Ub=`#ifdef ENVMAP_TYPE_CUBE_UV
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
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
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
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
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
#endif`,kb=`vec3 transformedNormal = objectNormal;
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
#endif`,Bb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Gb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xb=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,jb=`#ifdef USE_ENVMAP
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
#endif`,qb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Yb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,$b=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Kb=`#ifdef USE_ENVMAP
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
#endif`,Zb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Jb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,eM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,nM=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,iM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,oM=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
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
#endif`,aM=`#if defined( USE_ENVMAP )
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
#endif`,lM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,uM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
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
#endif`,dM=`struct PhysicalMaterial {
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
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
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
}`,pM=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,mM=`#if defined( RE_IndirectDiffuse )
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
#endif`,gM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,_M=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
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
#endif`,yM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,bM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,MM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,TM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,EM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,AM=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
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
#endif`,PM=`#ifdef USE_MORPHTARGETS
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
#endif`,LM=`#ifdef USE_MORPHTARGETS
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
#endif`,RM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
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
vec3 geometryNormal = normal;`,DM=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,IM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,OM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,FM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,NM=`#ifdef USE_NORMALMAP
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
#endif`,zM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,UM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,kM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,BM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,VM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,GM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
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
}`,HM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,WM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,XM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,YM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$M=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
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
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
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
#endif`,KM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,ZM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
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
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,JM=`float getShadowMask() {
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
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
}`,QM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ew=`#ifdef USE_SKINNING
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
#endif`,tw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,nw=`#ifdef USE_SKINNING
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
#endif`,iw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ow=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,aw=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,lw=`#ifdef USE_TRANSMISSION
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
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, vec2 fullSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		
		vec2 lodFudge = pow( 1.95, lod ) / fullSize;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec2 fullSize = vec2( textureSize( sampler, 0 ) );
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), fullSize, floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), fullSize, ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
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
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
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
#endif`,cw=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,uw=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,fw=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,hw=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,dw=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,pw=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,mw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_w=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,xw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,yw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Mw=`#include <common>
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
}`,ww=`#if DEPTH_PACKING == 3200
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
}`,Sw=`#define DISTANCE
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
}`,Tw=`#define DISTANCE
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
}`,Ew=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Aw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Cw=`uniform float scale;
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
}`,Pw=`uniform vec3 diffuse;
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
}`,Lw=`#include <common>
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
}`,Rw=`uniform vec3 diffuse;
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
}`,Dw=`#define LAMBERT
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
}`,Iw=`#define LAMBERT
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
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
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ow=`#define MATCAP
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
}`,Fw=`#define MATCAP
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
}`,Nw=`#define NORMAL
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
}`,zw=`#define NORMAL
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
}`,Uw=`#define PHONG
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
}`,kw=`#define PHONG
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
}`,Bw=`#define STANDARD
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
}`,Vw=`#define STANDARD
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
}`,Gw=`#define TOON
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
}`,Hw=`#define TOON
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
}`,Ww=`uniform float size;
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
}`,Xw=`uniform vec3 diffuse;
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
}`,jw=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
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
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qw=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Yw=`uniform float rotation;
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
}`,Ne={alphamap_fragment:xb,alphamap_pars_fragment:vb,alphatest_fragment:yb,alphatest_pars_fragment:bb,aomap_fragment:Mb,aomap_pars_fragment:wb,begin_vertex:Sb,beginnormal_vertex:Tb,bsdfs:Eb,iridescence_fragment:Ab,bumpmap_pars_fragment:Cb,clipping_planes_fragment:Pb,clipping_planes_pars_fragment:Lb,clipping_planes_pars_vertex:Rb,clipping_planes_vertex:Db,color_fragment:Ib,color_pars_fragment:Ob,color_pars_vertex:Fb,color_vertex:Nb,common:zb,cube_uv_reflection_fragment:Ub,defaultnormal_vertex:kb,displacementmap_pars_vertex:Bb,displacementmap_vertex:Vb,emissivemap_fragment:Gb,emissivemap_pars_fragment:Hb,encodings_fragment:Wb,encodings_pars_fragment:Xb,envmap_fragment:jb,envmap_common_pars_fragment:qb,envmap_pars_fragment:Yb,envmap_pars_vertex:$b,envmap_physical_pars_fragment:aM,envmap_vertex:Kb,fog_vertex:Zb,fog_pars_vertex:Jb,fog_fragment:Qb,fog_pars_fragment:eM,gradientmap_pars_fragment:tM,lightmap_fragment:nM,lightmap_pars_fragment:iM,lights_lambert_fragment:rM,lights_lambert_pars_fragment:sM,lights_pars_begin:oM,lights_toon_fragment:lM,lights_toon_pars_fragment:cM,lights_phong_fragment:uM,lights_phong_pars_fragment:fM,lights_physical_fragment:hM,lights_physical_pars_fragment:dM,lights_fragment_begin:pM,lights_fragment_maps:mM,lights_fragment_end:gM,logdepthbuf_fragment:_M,logdepthbuf_pars_fragment:xM,logdepthbuf_pars_vertex:vM,logdepthbuf_vertex:yM,map_fragment:bM,map_pars_fragment:MM,map_particle_fragment:wM,map_particle_pars_fragment:SM,metalnessmap_fragment:TM,metalnessmap_pars_fragment:EM,morphcolor_vertex:AM,morphnormal_vertex:CM,morphtarget_pars_vertex:PM,morphtarget_vertex:LM,normal_fragment_begin:RM,normal_fragment_maps:DM,normal_pars_fragment:IM,normal_pars_vertex:OM,normal_vertex:FM,normalmap_pars_fragment:NM,clearcoat_normal_fragment_begin:zM,clearcoat_normal_fragment_maps:UM,clearcoat_pars_fragment:kM,iridescence_pars_fragment:BM,output_fragment:VM,packing:GM,premultiplied_alpha_fragment:HM,project_vertex:WM,dithering_fragment:XM,dithering_pars_fragment:jM,roughnessmap_fragment:qM,roughnessmap_pars_fragment:YM,shadowmap_pars_fragment:$M,shadowmap_pars_vertex:KM,shadowmap_vertex:ZM,shadowmask_pars_fragment:JM,skinbase_vertex:QM,skinning_pars_vertex:ew,skinning_vertex:tw,skinnormal_vertex:nw,specularmap_fragment:iw,specularmap_pars_fragment:rw,tonemapping_fragment:sw,tonemapping_pars_fragment:ow,transmission_fragment:aw,transmission_pars_fragment:lw,uv_pars_fragment:cw,uv_pars_vertex:uw,uv_vertex:fw,uv2_pars_fragment:hw,uv2_pars_vertex:dw,uv2_vertex:pw,worldpos_vertex:mw,background_vert:gw,background_frag:_w,backgroundCube_vert:xw,backgroundCube_frag:vw,cube_vert:yw,cube_frag:bw,depth_vert:Mw,depth_frag:ww,distanceRGBA_vert:Sw,distanceRGBA_frag:Tw,equirect_vert:Ew,equirect_frag:Aw,linedashed_vert:Cw,linedashed_frag:Pw,meshbasic_vert:Lw,meshbasic_frag:Rw,meshlambert_vert:Dw,meshlambert_frag:Iw,meshmatcap_vert:Ow,meshmatcap_frag:Fw,meshnormal_vert:Nw,meshnormal_frag:zw,meshphong_vert:Uw,meshphong_frag:kw,meshphysical_vert:Bw,meshphysical_frag:Vw,meshtoon_vert:Gw,meshtoon_frag:Hw,points_vert:Ww,points_frag:Xw,shadow_vert:jw,shadow_frag:qw,sprite_vert:Yw,sprite_frag:$w},be={common:{diffuse:{value:new De(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Ut},uv2Transform:{value:new Ut},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new De(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new De(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ut}},sprite:{diffuse:{value:new De(16777215)},opacity:{value:1},center:{value:new Fe(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ut}}},Kn={basic:{uniforms:jt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:Ne.meshbasic_vert,fragmentShader:Ne.meshbasic_frag},lambert:{uniforms:jt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new De(0)}}]),vertexShader:Ne.meshlambert_vert,fragmentShader:Ne.meshlambert_frag},phong:{uniforms:jt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new De(0)},specular:{value:new De(1118481)},shininess:{value:30}}]),vertexShader:Ne.meshphong_vert,fragmentShader:Ne.meshphong_frag},standard:{uniforms:jt([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new De(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag},toon:{uniforms:jt([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new De(0)}}]),vertexShader:Ne.meshtoon_vert,fragmentShader:Ne.meshtoon_frag},matcap:{uniforms:jt([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:Ne.meshmatcap_vert,fragmentShader:Ne.meshmatcap_frag},points:{uniforms:jt([be.points,be.fog]),vertexShader:Ne.points_vert,fragmentShader:Ne.points_frag},dashed:{uniforms:jt([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ne.linedashed_vert,fragmentShader:Ne.linedashed_frag},depth:{uniforms:jt([be.common,be.displacementmap]),vertexShader:Ne.depth_vert,fragmentShader:Ne.depth_frag},normal:{uniforms:jt([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:Ne.meshnormal_vert,fragmentShader:Ne.meshnormal_frag},sprite:{uniforms:jt([be.sprite,be.fog]),vertexShader:Ne.sprite_vert,fragmentShader:Ne.sprite_frag},background:{uniforms:{uvTransform:{value:new Ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ne.background_vert,fragmentShader:Ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ne.backgroundCube_vert,fragmentShader:Ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ne.cube_vert,fragmentShader:Ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ne.equirect_vert,fragmentShader:Ne.equirect_frag},distanceRGBA:{uniforms:jt([be.common,be.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ne.distanceRGBA_vert,fragmentShader:Ne.distanceRGBA_frag},shadow:{uniforms:jt([be.lights,be.fog,{color:{value:new De(0)},opacity:{value:1}}]),vertexShader:Ne.shadow_vert,fragmentShader:Ne.shadow_frag}};Kn.physical={uniforms:jt([Kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Fe(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new De(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new De(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new De(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag};const aa={r:0,b:0,g:0};function Kw(r,e,t,n,i,s,o){const a=new De(0);let l=s===!0?0:1,c,u,f=null,h=0,p=null;function g(m,_){let v=!1,x=_.isScene===!0?_.background:null;x&&x.isTexture&&(x=(_.backgroundBlurriness>0?t:e).get(x));const y=r.xr,M=y.getSession&&y.getSession();M&&M.environmentBlendMode==="additive"&&(x=null),x===null?d(a,l):x&&x.isColor&&(d(x,1),v=!0),(r.autoClear||v)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),x&&(x.isCubeTexture||x.mapping===el)?(u===void 0&&(u=new kt(new No(1,1,1),new mn({name:"BackgroundCubeMaterial",uniforms:Ms(Kn.backgroundCube.uniforms),vertexShader:Kn.backgroundCube.vertexShader,fragmentShader:Kn.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,L,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.toneMapped=x.encoding!==Qe,(f!==x||h!==x.version||p!==r.toneMapping)&&(u.material.needsUpdate=!0,f=x,h=x.version,p=r.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new kt(new nl(2,2),new mn({name:"BackgroundMaterial",uniforms:Ms(Kn.background.uniforms),vertexShader:Kn.background.vertexShader,fragmentShader:Kn.background.fragmentShader,side:Yi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=x.encoding!==Qe,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||h!==x.version||p!==r.toneMapping)&&(c.material.needsUpdate=!0,f=x,h=x.version,p=r.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function d(m,_){m.getRGB(aa,Tm(r)),n.buffers.color.setClear(aa.r,aa.g,aa.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(m,_=1){a.set(m),l=_,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,d(a,l)},render:g}}function Zw(r,e,t,n){const i=r.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=m(null);let c=l,u=!1;function f(O,W,j,K,V){let ce=!1;if(o){const se=d(K,j,W);c!==se&&(c=se,p(c.object)),ce=_(O,K,j,V),ce&&v(O,K,j,V)}else{const se=W.wireframe===!0;(c.geometry!==K.id||c.program!==j.id||c.wireframe!==se)&&(c.geometry=K.id,c.program=j.id,c.wireframe=se,ce=!0)}V!==null&&t.update(V,34963),(ce||u)&&(u=!1,b(O,W,j,K),V!==null&&r.bindBuffer(34963,t.get(V).buffer))}function h(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function p(O){return n.isWebGL2?r.bindVertexArray(O):s.bindVertexArrayOES(O)}function g(O){return n.isWebGL2?r.deleteVertexArray(O):s.deleteVertexArrayOES(O)}function d(O,W,j){const K=j.wireframe===!0;let V=a[O.id];V===void 0&&(V={},a[O.id]=V);let ce=V[W.id];ce===void 0&&(ce={},V[W.id]=ce);let se=ce[K];return se===void 0&&(se=m(h()),ce[K]=se),se}function m(O){const W=[],j=[],K=[];for(let V=0;V<i;V++)W[V]=0,j[V]=0,K[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:j,attributeDivisors:K,object:O,attributes:{},index:null}}function _(O,W,j,K){const V=c.attributes,ce=W.attributes;let se=0;const Me=j.getAttributes();for(const k in Me)if(Me[k].location>=0){const de=V[k];let P=ce[k];if(P===void 0&&(k==="instanceMatrix"&&O.instanceMatrix&&(P=O.instanceMatrix),k==="instanceColor"&&O.instanceColor&&(P=O.instanceColor)),de===void 0||de.attribute!==P||P&&de.data!==P.data)return!0;se++}return c.attributesNum!==se||c.index!==K}function v(O,W,j,K){const V={},ce=W.attributes;let se=0;const Me=j.getAttributes();for(const k in Me)if(Me[k].location>=0){let de=ce[k];de===void 0&&(k==="instanceMatrix"&&O.instanceMatrix&&(de=O.instanceMatrix),k==="instanceColor"&&O.instanceColor&&(de=O.instanceColor));const P={};P.attribute=de,de&&de.data&&(P.data=de.data),V[k]=P,se++}c.attributes=V,c.attributesNum=se,c.index=K}function x(){const O=c.newAttributes;for(let W=0,j=O.length;W<j;W++)O[W]=0}function y(O){M(O,0)}function M(O,W){const j=c.newAttributes,K=c.enabledAttributes,V=c.attributeDivisors;j[O]=1,K[O]===0&&(r.enableVertexAttribArray(O),K[O]=1),V[O]!==W&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,W),V[O]=W)}function E(){const O=c.newAttributes,W=c.enabledAttributes;for(let j=0,K=W.length;j<K;j++)W[j]!==O[j]&&(r.disableVertexAttribArray(j),W[j]=0)}function L(O,W,j,K,V,ce){n.isWebGL2===!0&&(j===5124||j===5125)?r.vertexAttribIPointer(O,W,j,V,ce):r.vertexAttribPointer(O,W,j,K,V,ce)}function b(O,W,j,K){if(n.isWebGL2===!1&&(O.isInstancedMesh||K.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const V=K.attributes,ce=j.getAttributes(),se=W.defaultAttributeValues;for(const Me in ce){const k=ce[Me];if(k.location>=0){let ue=V[Me];if(ue===void 0&&(Me==="instanceMatrix"&&O.instanceMatrix&&(ue=O.instanceMatrix),Me==="instanceColor"&&O.instanceColor&&(ue=O.instanceColor)),ue!==void 0){const de=ue.normalized,P=ue.itemSize,Z=t.get(ue);if(Z===void 0)continue;const $=Z.buffer,re=Z.type,pe=Z.bytesPerElement;if(ue.isInterleavedBufferAttribute){const we=ue.data,ve=we.stride,A=ue.offset;if(we.isInstancedInterleavedBuffer){for(let D=0;D<k.locationSize;D++)M(k.location+D,we.meshPerAttribute);O.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=we.meshPerAttribute*we.count)}else for(let D=0;D<k.locationSize;D++)y(k.location+D);r.bindBuffer(34962,$);for(let D=0;D<k.locationSize;D++)L(k.location+D,P/k.locationSize,re,de,ve*pe,(A+P/k.locationSize*D)*pe)}else{if(ue.isInstancedBufferAttribute){for(let we=0;we<k.locationSize;we++)M(k.location+we,ue.meshPerAttribute);O.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let we=0;we<k.locationSize;we++)y(k.location+we);r.bindBuffer(34962,$);for(let we=0;we<k.locationSize;we++)L(k.location+we,P/k.locationSize,re,de,P*pe,P/k.locationSize*we*pe)}}else if(se!==void 0){const de=se[Me];if(de!==void 0)switch(de.length){case 2:r.vertexAttrib2fv(k.location,de);break;case 3:r.vertexAttrib3fv(k.location,de);break;case 4:r.vertexAttrib4fv(k.location,de);break;default:r.vertexAttrib1fv(k.location,de)}}}}E()}function S(){H();for(const O in a){const W=a[O];for(const j in W){const K=W[j];for(const V in K)g(K[V].object),delete K[V];delete W[j]}delete a[O]}}function I(O){if(a[O.id]===void 0)return;const W=a[O.id];for(const j in W){const K=W[j];for(const V in K)g(K[V].object),delete K[V];delete W[j]}delete a[O.id]}function X(O){for(const W in a){const j=a[W];if(j[O.id]===void 0)continue;const K=j[O.id];for(const V in K)g(K[V].object),delete K[V];delete j[O.id]}}function H(){N(),u=!0,c!==l&&(c=l,p(c.object))}function N(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:H,resetDefaultState:N,dispose:S,releaseStatesOfGeometry:I,releaseStatesOfProgram:X,initAttributes:x,enableAttribute:y,disableUnusedAttributes:E}}function Jw(r,e,t,n){const i=n.isWebGL2;let s;function o(c){s=c}function a(c,u){r.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,f){if(f===0)return;let h,p;if(i)h=r,p="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[p](s,c,u,f),t.update(u,s,f)}this.setMode=o,this.render=a,this.renderInstances=l}function Qw(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(L){if(L==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";L="mediump"}return L==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r instanceof WebGL2RenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=r.getParameter(34930),h=r.getParameter(35660),p=r.getParameter(3379),g=r.getParameter(34076),d=r.getParameter(34921),m=r.getParameter(36347),_=r.getParameter(36348),v=r.getParameter(36349),x=h>0,y=o||e.has("OES_texture_float"),M=x&&y,E=o?r.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:m,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:x,floatFragmentTextures:y,floatVertexTextures:M,maxSamples:E}}function eS(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new ur,a=new Ut,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||n!==0||i;return i=h,n=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,p){const g=f.clippingPlanes,d=f.clipIntersection,m=f.clipShadows,_=r.get(f);if(!i||g===null||g.length===0||s&&!m)s?u(null):c();else{const v=s?0:n,x=v*4;let y=_.clippingState||null;l.value=y,y=u(g,h,x,p);for(let M=0;M!==x;++M)y[M]=t[M];_.clippingState=y,this.numIntersection=d?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,p,g){const d=f!==null?f.length:0;let m=null;if(d!==0){if(m=l.value,g!==!0||m===null){const _=p+d*4,v=h.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<_)&&(m=new Float32Array(_));for(let x=0,y=p;x!==d;++x,y+=4)o.copy(f[x]).applyMatrix4(v,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=d,e.numIntersection=0,m}}function tS(r){let e=new WeakMap;function t(o,a){return a===La?o.mapping=vs:a===Uc&&(o.mapping=ys),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===La||a===Uc)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new pb(l.height/2);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class ku extends Em{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Qr=4,$h=[.125,.215,.35,.446,.526,.582],mr=20,Ql=new ku,Kh=new De;let ec=null;const fr=(1+Math.sqrt(5))/2,qr=1/fr,Zh=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,fr,qr),new F(0,fr,-qr),new F(qr,0,fr),new F(-qr,0,fr),new F(fr,qr,0),new F(-fr,qr,0)];class Jh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){ec=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=td(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ed(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ec),e.scissorTest=!1,la(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===vs||e.mapping===ys?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ec=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Mn,minFilter:Mn,generateMipmaps:!1,type:Mo,format:Sn,encoding:Er,depthBuffer:!1},i=Qh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qh(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=nS(s)),this._blurMaterial=iS(s,e,t)}return i}_compileMaterial(e){const t=new kt(this._lodPlanes[0],e);this._renderer.compile(t,Ql)}_sceneToCubeUV(e,t,n,i){const a=new qt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Kh),u.toneMapping=bi,u.autoClear=!1;const p=new Nu({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1}),g=new kt(new No,p);let d=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,d=!0):(p.color.copy(Kh),d=!0);for(let _=0;_<6;_++){const v=_%3;v===0?(a.up.set(0,l[_],0),a.lookAt(c[_],0,0)):v===1?(a.up.set(0,0,l[_]),a.lookAt(0,c[_],0)):(a.up.set(0,l[_],0),a.lookAt(0,0,c[_]));const x=this._cubeSize;la(i,v*x,_>2?x:0,x,x),u.setRenderTarget(i),d&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===vs||e.mapping===ys;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=td()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ed());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new kt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;la(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Ql)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Zh[(i-1)%Zh.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new kt(this._lodPlanes[i],c),h=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*mr-1),d=s/g,m=isFinite(s)?1+Math.floor(u*d):mr;m>mr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${mr}`);const _=[];let v=0;for(let L=0;L<mr;++L){const b=L/d,S=Math.exp(-b*b/2);_.push(S),L===0?v+=S:L<m&&(v+=2*S)}for(let L=0;L<_.length;L++)_[L]=_[L]/v;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=_,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:x}=this;h.dTheta.value=g,h.mipInt.value=x-n;const y=this._sizeLods[i],M=3*y*(i>x-Qr?i-x+Qr:0),E=4*(this._cubeSize-y);la(t,M,E,3*y,2*y),l.setRenderTarget(t),l.render(f,Ql)}}function nS(r){const e=[],t=[],n=[];let i=r;const s=r-Qr+1+$h.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-Qr?l=$h[o-r+Qr-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,g=6,d=3,m=2,_=1,v=new Float32Array(d*g*p),x=new Float32Array(m*g*p),y=new Float32Array(_*g*p);for(let E=0;E<p;E++){const L=E%3*2/3-1,b=E>2?0:-1,S=[L,b,0,L+2/3,b,0,L+2/3,b+1,0,L,b,0,L+2/3,b+1,0,L,b+1,0];v.set(S,d*g*E),x.set(h,m*g*E);const I=[E,E,E,E,E,E];y.set(I,_*g*E)}const M=new Qt;M.setAttribute("position",new ii(v,d)),M.setAttribute("uv",new ii(x,m)),M.setAttribute("faceIndex",new ii(y,_)),e.push(M),i>Qr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Qh(r,e,t){const n=new Ar(r,e,t);return n.texture.mapping=el,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function la(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function iS(r,e,t){const n=new Float32Array(mr),i=new F(0,1,0);return new mn({name:"SphericalGaussianBlur",defines:{n:mr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Bu(),fragmentShader:`

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
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function ed(){return new mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bu(),fragmentShader:`

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
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function td(){return new mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function Bu(){return`

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
	`}function rS(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===La||l===Uc,u=l===vs||l===ys;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new Jh(r)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||u&&f&&i(f)){t===null&&(t=new Jh(r));const h=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function sS(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function oS(r,e,t,n){const i={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete i[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return i[h.id]===!0||(h.addEventListener("dispose",o),i[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)e.update(h[g],34962);const p=f.morphAttributes;for(const g in p){const d=p[g];for(let m=0,_=d.length;m<_;m++)e.update(d[m],34962)}}function c(f){const h=[],p=f.index,g=f.attributes.position;let d=0;if(p!==null){const v=p.array;d=p.version;for(let x=0,y=v.length;x<y;x+=3){const M=v[x+0],E=v[x+1],L=v[x+2];h.push(M,E,E,L,L,M)}}else{const v=g.array;d=g.version;for(let x=0,y=v.length/3-1;x<y;x+=3){const M=x+0,E=x+1,L=x+2;h.push(M,E,E,L,L,M)}}const m=new(vm(h)?Sm:zu)(h,1);m.version=d;const _=s.get(f);_&&e.remove(_),s.set(f,m)}function u(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function aS(r,e,t,n){const i=n.isWebGL2;let s;function o(h){s=h}let a,l;function c(h){a=h.type,l=h.bytesPerElement}function u(h,p){r.drawElements(s,p,a,h*l),t.update(p,s,1)}function f(h,p,g){if(g===0)return;let d,m;if(i)d=r,m="drawElementsInstanced";else if(d=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",d===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](s,p,a,h*l,g),t.update(p,s,g)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=f}function lS(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function cS(r,e){return r[0]-e[0]}function uS(r,e){return Math.abs(e[1])-Math.abs(r[1])}function fS(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,o=new Ke,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,f){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,d=g!==void 0?g.length:0;let m=s.get(u);if(m===void 0||m.count!==d){let W=function(){N.dispose(),s.delete(u),u.removeEventListener("dispose",W)};var p=W;m!==void 0&&m.texture.dispose();const x=u.morphAttributes.position!==void 0,y=u.morphAttributes.normal!==void 0,M=u.morphAttributes.color!==void 0,E=u.morphAttributes.position||[],L=u.morphAttributes.normal||[],b=u.morphAttributes.color||[];let S=0;x===!0&&(S=1),y===!0&&(S=2),M===!0&&(S=3);let I=u.attributes.position.count*S,X=1;I>e.maxTextureSize&&(X=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const H=new Float32Array(I*X*4*d),N=new Mm(H,I,X,d);N.type=Ni,N.needsUpdate=!0;const O=S*4;for(let j=0;j<d;j++){const K=E[j],V=L[j],ce=b[j],se=I*X*4*j;for(let Me=0;Me<K.count;Me++){const k=Me*O;x===!0&&(o.fromBufferAttribute(K,Me),H[se+k+0]=o.x,H[se+k+1]=o.y,H[se+k+2]=o.z,H[se+k+3]=0),y===!0&&(o.fromBufferAttribute(V,Me),H[se+k+4]=o.x,H[se+k+5]=o.y,H[se+k+6]=o.z,H[se+k+7]=0),M===!0&&(o.fromBufferAttribute(ce,Me),H[se+k+8]=o.x,H[se+k+9]=o.y,H[se+k+10]=o.z,H[se+k+11]=ce.itemSize===4?o.w:1)}}m={count:d,texture:N,size:new Fe(I,X)},s.set(u,m),u.addEventListener("dispose",W)}let _=0;for(let x=0;x<h.length;x++)_+=h[x];const v=u.morphTargetsRelative?1:1-_;f.getUniforms().setValue(r,"morphTargetBaseInfluence",v),f.getUniforms().setValue(r,"morphTargetInfluences",h),f.getUniforms().setValue(r,"morphTargetsTexture",m.texture,t),f.getUniforms().setValue(r,"morphTargetsTextureSize",m.size)}else{const g=h===void 0?0:h.length;let d=n[u.id];if(d===void 0||d.length!==g){d=[];for(let y=0;y<g;y++)d[y]=[y,0];n[u.id]=d}for(let y=0;y<g;y++){const M=d[y];M[0]=y,M[1]=h[y]}d.sort(uS);for(let y=0;y<8;y++)y<g&&d[y][1]?(a[y][0]=d[y][0],a[y][1]=d[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(cS);const m=u.morphAttributes.position,_=u.morphAttributes.normal;let v=0;for(let y=0;y<8;y++){const M=a[y],E=M[0],L=M[1];E!==Number.MAX_SAFE_INTEGER&&L?(m&&u.getAttribute("morphTarget"+y)!==m[E]&&u.setAttribute("morphTarget"+y,m[E]),_&&u.getAttribute("morphNormal"+y)!==_[E]&&u.setAttribute("morphNormal"+y,_[E]),i[y]=L,v+=L):(m&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),_&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),i[y]=0)}const x=u.morphTargetsRelative?1:1-v;f.getUniforms().setValue(r,"morphTargetBaseInfluence",x),f.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function hS(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,f=e.get(l,u);return i.get(f)!==c&&(e.update(f),i.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),f}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const Pm=new Rt,Lm=new Mm,Rm=new Jy,Dm=new Am,nd=[],id=[],rd=new Float32Array(16),sd=new Float32Array(9),od=new Float32Array(4);function Is(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=nd[i];if(s===void 0&&(s=new Float32Array(i),nd[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function Mt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function wt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function il(r,e){let t=id[e];t===void 0&&(t=new Int32Array(e),id[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function dS(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function pS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;r.uniform2fv(this.addr,e),wt(t,e)}}function mS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Mt(t,e))return;r.uniform3fv(this.addr,e),wt(t,e)}}function gS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;r.uniform4fv(this.addr,e),wt(t,e)}}function _S(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),wt(t,e)}else{if(Mt(t,n))return;od.set(n),r.uniformMatrix2fv(this.addr,!1,od),wt(t,n)}}function xS(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),wt(t,e)}else{if(Mt(t,n))return;sd.set(n),r.uniformMatrix3fv(this.addr,!1,sd),wt(t,n)}}function vS(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),wt(t,e)}else{if(Mt(t,n))return;rd.set(n),r.uniformMatrix4fv(this.addr,!1,rd),wt(t,n)}}function yS(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function bS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;r.uniform2iv(this.addr,e),wt(t,e)}}function MS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;r.uniform3iv(this.addr,e),wt(t,e)}}function wS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;r.uniform4iv(this.addr,e),wt(t,e)}}function SS(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function TS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;r.uniform2uiv(this.addr,e),wt(t,e)}}function ES(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;r.uniform3uiv(this.addr,e),wt(t,e)}}function AS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;r.uniform4uiv(this.addr,e),wt(t,e)}}function CS(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Pm,i)}function PS(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Rm,i)}function LS(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Dm,i)}function RS(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Lm,i)}function DS(r){switch(r){case 5126:return dS;case 35664:return pS;case 35665:return mS;case 35666:return gS;case 35674:return _S;case 35675:return xS;case 35676:return vS;case 5124:case 35670:return yS;case 35667:case 35671:return bS;case 35668:case 35672:return MS;case 35669:case 35673:return wS;case 5125:return SS;case 36294:return TS;case 36295:return ES;case 36296:return AS;case 35678:case 36198:case 36298:case 36306:case 35682:return CS;case 35679:case 36299:case 36307:return PS;case 35680:case 36300:case 36308:case 36293:return LS;case 36289:case 36303:case 36311:case 36292:return RS}}function IS(r,e){r.uniform1fv(this.addr,e)}function OS(r,e){const t=Is(e,this.size,2);r.uniform2fv(this.addr,t)}function FS(r,e){const t=Is(e,this.size,3);r.uniform3fv(this.addr,t)}function NS(r,e){const t=Is(e,this.size,4);r.uniform4fv(this.addr,t)}function zS(r,e){const t=Is(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function US(r,e){const t=Is(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function kS(r,e){const t=Is(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function BS(r,e){r.uniform1iv(this.addr,e)}function VS(r,e){r.uniform2iv(this.addr,e)}function GS(r,e){r.uniform3iv(this.addr,e)}function HS(r,e){r.uniform4iv(this.addr,e)}function WS(r,e){r.uniform1uiv(this.addr,e)}function XS(r,e){r.uniform2uiv(this.addr,e)}function jS(r,e){r.uniform3uiv(this.addr,e)}function qS(r,e){r.uniform4uiv(this.addr,e)}function YS(r,e,t){const n=this.cache,i=e.length,s=il(t,i);Mt(n,s)||(r.uniform1iv(this.addr,s),wt(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Pm,s[o])}function $S(r,e,t){const n=this.cache,i=e.length,s=il(t,i);Mt(n,s)||(r.uniform1iv(this.addr,s),wt(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Rm,s[o])}function KS(r,e,t){const n=this.cache,i=e.length,s=il(t,i);Mt(n,s)||(r.uniform1iv(this.addr,s),wt(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Dm,s[o])}function ZS(r,e,t){const n=this.cache,i=e.length,s=il(t,i);Mt(n,s)||(r.uniform1iv(this.addr,s),wt(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Lm,s[o])}function JS(r){switch(r){case 5126:return IS;case 35664:return OS;case 35665:return FS;case 35666:return NS;case 35674:return zS;case 35675:return US;case 35676:return kS;case 5124:case 35670:return BS;case 35667:case 35671:return VS;case 35668:case 35672:return GS;case 35669:case 35673:return HS;case 5125:return WS;case 36294:return XS;case 36295:return jS;case 36296:return qS;case 35678:case 36198:case 36298:case 36306:case 35682:return YS;case 35679:case 36299:case 36307:return $S;case 35680:case 36300:case 36308:case 36293:return KS;case 36289:case 36303:case 36311:case 36292:return ZS}}class QS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=DS(t.type)}}class e1{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=JS(t.type)}}class t1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const tc=/(\w+)(\])?(\[|\.)?/g;function ad(r,e){r.seq.push(e),r.map[e.id]=e}function n1(r,e,t){const n=r.name,i=n.length;for(tc.lastIndex=0;;){const s=tc.exec(n),o=tc.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){ad(t,c===void 0?new QS(a,r,e):new e1(a,r,e));break}else{let f=t.map[a];f===void 0&&(f=new t1(a),ad(t,f)),t=f}}}class ba{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);n1(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function ld(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}let i1=0;function r1(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function s1(r){switch(r){case Er:return["Linear","( value )"];case Qe:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function cd(r,e,t){const n=r.getShaderParameter(e,35713),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+r1(r.getShaderSource(e),o)}else return i}function o1(r,e){const t=s1(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function a1(r,e){let t;switch(e){case oy:t="Linear";break;case ay:t="Reinhard";break;case ly:t="OptimizedCineon";break;case cy:t="ACESFilmic";break;case uy:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function l1(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Js).join(`
`)}function c1(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function u1(r,e){const t={},n=r.getProgramParameter(e,35721);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function Js(r){return r!==""}function ud(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function fd(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const f1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gc(r){return r.replace(f1,h1)}function h1(r,e){const t=Ne[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Gc(t)}const d1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hd(r){return r.replace(d1,p1)}function p1(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function dd(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function m1(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===fm?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Uv?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Ks&&(e="SHADOWMAP_TYPE_VSM"),e}function g1(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case vs:case ys:e="ENVMAP_TYPE_CUBE";break;case el:e="ENVMAP_TYPE_CUBE_UV";break}return e}function _1(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case ys:e="ENVMAP_MODE_REFRACTION";break}return e}function x1(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Qa:e="ENVMAP_BLENDING_MULTIPLY";break;case ry:e="ENVMAP_BLENDING_MIX";break;case sy:e="ENVMAP_BLENDING_ADD";break}return e}function v1(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function y1(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=m1(t),c=g1(t),u=_1(t),f=x1(t),h=v1(t),p=t.isWebGL2?"":l1(t),g=c1(s),d=i.createProgram();let m,_,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[g].filter(Js).join(`
`),m.length>0&&(m+=`
`),_=[p,g].filter(Js).join(`
`),_.length>0&&(_+=`
`)):(m=[dd(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Js).join(`
`),_=[p,dd(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==bi?"#define TONE_MAPPING":"",t.toneMapping!==bi?Ne.tonemapping_pars_fragment:"",t.toneMapping!==bi?a1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ne.encodings_pars_fragment,o1("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Js).join(`
`)),o=Gc(o),o=ud(o,t),o=fd(o,t),a=Gc(a),a=ud(a,t),a=fd(a,t),o=hd(o),a=hd(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,_=["#define varying in",t.glslVersion===Nh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Nh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const x=v+m+o,y=v+_+a,M=ld(i,35633,x),E=ld(i,35632,y);if(i.attachShader(d,M),i.attachShader(d,E),t.index0AttributeName!==void 0?i.bindAttribLocation(d,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(d,0,"position"),i.linkProgram(d),r.debug.checkShaderErrors){const S=i.getProgramInfoLog(d).trim(),I=i.getShaderInfoLog(M).trim(),X=i.getShaderInfoLog(E).trim();let H=!0,N=!0;if(i.getProgramParameter(d,35714)===!1){H=!1;const O=cd(i,M,"vertex"),W=cd(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(d,35715)+`

Program Info Log: `+S+`
`+O+`
`+W)}else S!==""?console.warn("THREE.WebGLProgram: Program Info Log:",S):(I===""||X==="")&&(N=!1);N&&(this.diagnostics={runnable:H,programLog:S,vertexShader:{log:I,prefix:m},fragmentShader:{log:X,prefix:_}})}i.deleteShader(M),i.deleteShader(E);let L;this.getUniforms=function(){return L===void 0&&(L=new ba(i,d)),L};let b;return this.getAttributes=function(){return b===void 0&&(b=u1(i,d)),b},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(d),this.program=void 0},this.name=t.shaderName,this.id=i1++,this.cacheKey=e,this.usedTimes=1,this.program=d,this.vertexShader=M,this.fragmentShader=E,this}let b1=0;class M1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new w1(e),t.set(e,n)),n}}class w1{constructor(e){this.id=b1++,this.code=e,this.usedTimes=0}}function S1(r,e,t,n,i,s,o){const a=new Fu,l=new M1,c=[],u=i.isWebGL2,f=i.logarithmicDepthBuffer,h=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(b,S,I,X,H){const N=X.fog,O=H.geometry,W=b.isMeshStandardMaterial?X.environment:null,j=(b.isMeshStandardMaterial?t:e).get(b.envMap||W),K=j&&j.mapping===el?j.image.height:null,V=g[b.type];b.precision!==null&&(p=i.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));const ce=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,se=ce!==void 0?ce.length:0;let Me=0;O.morphAttributes.position!==void 0&&(Me=1),O.morphAttributes.normal!==void 0&&(Me=2),O.morphAttributes.color!==void 0&&(Me=3);let k,ue,de,P;if(V){const ve=Kn[V];k=ve.vertexShader,ue=ve.fragmentShader}else k=b.vertexShader,ue=b.fragmentShader,l.update(b),de=l.getVertexShaderID(b),P=l.getFragmentShaderID(b);const Z=r.getRenderTarget(),$=b.alphaTest>0,re=b.clearcoat>0,pe=b.iridescence>0;return{isWebGL2:u,shaderID:V,shaderName:b.type,vertexShader:k,fragmentShader:ue,defines:b.defines,customVertexShaderID:de,customFragmentShaderID:P,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,instancing:H.isInstancedMesh===!0,instancingColor:H.isInstancedMesh===!0&&H.instanceColor!==null,supportsVertexTextures:h,outputEncoding:Z===null?r.outputEncoding:Z.isXRRenderTarget===!0?Z.texture.encoding:Er,map:!!b.map,matcap:!!b.matcap,envMap:!!j,envMapMode:j&&j.mapping,envMapCubeUVHeight:K,lightMap:!!b.lightMap,aoMap:!!b.aoMap,emissiveMap:!!b.emissiveMap,bumpMap:!!b.bumpMap,normalMap:!!b.normalMap,objectSpaceNormalMap:b.normalMapType===Ly,tangentSpaceNormalMap:b.normalMapType===Du,decodeVideoTexture:!!b.map&&b.map.isVideoTexture===!0&&b.map.encoding===Qe,clearcoat:re,clearcoatMap:re&&!!b.clearcoatMap,clearcoatRoughnessMap:re&&!!b.clearcoatRoughnessMap,clearcoatNormalMap:re&&!!b.clearcoatNormalMap,iridescence:pe,iridescenceMap:pe&&!!b.iridescenceMap,iridescenceThicknessMap:pe&&!!b.iridescenceThicknessMap,displacementMap:!!b.displacementMap,roughnessMap:!!b.roughnessMap,metalnessMap:!!b.metalnessMap,specularMap:!!b.specularMap,specularIntensityMap:!!b.specularIntensityMap,specularColorMap:!!b.specularColorMap,opaque:b.transparent===!1&&b.blending===os,alphaMap:!!b.alphaMap,alphaTest:$,gradientMap:!!b.gradientMap,sheen:b.sheen>0,sheenColorMap:!!b.sheenColorMap,sheenRoughnessMap:!!b.sheenRoughnessMap,transmission:b.transmission>0,transmissionMap:!!b.transmissionMap,thicknessMap:!!b.thicknessMap,combine:b.combine,vertexTangents:!!b.normalMap&&!!O.attributes.tangent,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUvs:!!b.map||!!b.bumpMap||!!b.normalMap||!!b.specularMap||!!b.alphaMap||!!b.emissiveMap||!!b.roughnessMap||!!b.metalnessMap||!!b.clearcoatMap||!!b.clearcoatRoughnessMap||!!b.clearcoatNormalMap||!!b.iridescenceMap||!!b.iridescenceThicknessMap||!!b.displacementMap||!!b.transmissionMap||!!b.thicknessMap||!!b.specularIntensityMap||!!b.specularColorMap||!!b.sheenColorMap||!!b.sheenRoughnessMap,uvsVertexOnly:!(b.map||b.bumpMap||b.normalMap||b.specularMap||b.alphaMap||b.emissiveMap||b.roughnessMap||b.metalnessMap||b.clearcoatNormalMap||b.iridescenceMap||b.iridescenceThicknessMap||b.transmission>0||b.transmissionMap||b.thicknessMap||b.specularIntensityMap||b.specularColorMap||b.sheen>0||b.sheenColorMap||b.sheenRoughnessMap)&&!!b.displacementMap,fog:!!N,useFog:b.fog===!0,fogExp2:N&&N.isFogExp2,flatShading:!!b.flatShading,sizeAttenuation:b.sizeAttenuation,logarithmicDepthBuffer:f,skinning:H.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:Me,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:r.shadowMap.enabled&&I.length>0,shadowMapType:r.shadowMap.type,toneMapping:b.toneMapped?r.toneMapping:bi,useLegacyLights:r.useLegacyLights,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===hn,flipSided:b.side===dn,useDepthPacking:!!b.depthPacking,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:b.extensions&&b.extensions.derivatives,extensionFragDepth:b.extensions&&b.extensions.fragDepth,extensionDrawBuffers:b.extensions&&b.extensions.drawBuffers,extensionShaderTextureLOD:b.extensions&&b.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:b.customProgramCacheKey()}}function m(b){const S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(const I in b.defines)S.push(I),S.push(b.defines[I]);return b.isRawShaderMaterial===!1&&(_(S,b),v(S,b),S.push(r.outputEncoding)),S.push(b.customProgramCacheKey),S.join()}function _(b,S){b.push(S.precision),b.push(S.outputEncoding),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.combine),b.push(S.vertexUvs),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function v(b,S){a.disableAll(),S.isWebGL2&&a.enable(0),S.supportsVertexTextures&&a.enable(1),S.instancing&&a.enable(2),S.instancingColor&&a.enable(3),S.map&&a.enable(4),S.matcap&&a.enable(5),S.envMap&&a.enable(6),S.lightMap&&a.enable(7),S.aoMap&&a.enable(8),S.emissiveMap&&a.enable(9),S.bumpMap&&a.enable(10),S.normalMap&&a.enable(11),S.objectSpaceNormalMap&&a.enable(12),S.tangentSpaceNormalMap&&a.enable(13),S.clearcoat&&a.enable(14),S.clearcoatMap&&a.enable(15),S.clearcoatRoughnessMap&&a.enable(16),S.clearcoatNormalMap&&a.enable(17),S.iridescence&&a.enable(18),S.iridescenceMap&&a.enable(19),S.iridescenceThicknessMap&&a.enable(20),S.displacementMap&&a.enable(21),S.specularMap&&a.enable(22),S.roughnessMap&&a.enable(23),S.metalnessMap&&a.enable(24),S.gradientMap&&a.enable(25),S.alphaMap&&a.enable(26),S.alphaTest&&a.enable(27),S.vertexColors&&a.enable(28),S.vertexAlphas&&a.enable(29),S.vertexUvs&&a.enable(30),S.vertexTangents&&a.enable(31),S.uvsVertexOnly&&a.enable(32),b.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.useLegacyLights&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.specularIntensityMap&&a.enable(15),S.specularColorMap&&a.enable(16),S.transmission&&a.enable(17),S.transmissionMap&&a.enable(18),S.thicknessMap&&a.enable(19),S.sheen&&a.enable(20),S.sheenColorMap&&a.enable(21),S.sheenRoughnessMap&&a.enable(22),S.decodeVideoTexture&&a.enable(23),S.opaque&&a.enable(24),b.push(a.mask)}function x(b){const S=g[b.type];let I;if(S){const X=Kn[S];I=ub.clone(X.uniforms)}else I=b.uniforms;return I}function y(b,S){let I;for(let X=0,H=c.length;X<H;X++){const N=c[X];if(N.cacheKey===S){I=N,++I.usedTimes;break}}return I===void 0&&(I=new y1(r,S,b,s),c.push(I)),I}function M(b){if(--b.usedTimes===0){const S=c.indexOf(b);c[S]=c[c.length-1],c.pop(),b.destroy()}}function E(b){l.remove(b)}function L(){l.dispose()}return{getParameters:d,getProgramCacheKey:m,getUniforms:x,acquireProgram:y,releaseProgram:M,releaseShaderCache:E,programs:c,dispose:L}}function T1(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function E1(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function pd(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function md(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(f,h,p,g,d,m){let _=r[e];return _===void 0?(_={id:f.id,object:f,geometry:h,material:p,groupOrder:g,renderOrder:f.renderOrder,z:d,group:m},r[e]=_):(_.id=f.id,_.object=f,_.geometry=h,_.material=p,_.groupOrder=g,_.renderOrder=f.renderOrder,_.z=d,_.group=m),e++,_}function a(f,h,p,g,d,m){const _=o(f,h,p,g,d,m);p.transmission>0?n.push(_):p.transparent===!0?i.push(_):t.push(_)}function l(f,h,p,g,d,m){const _=o(f,h,p,g,d,m);p.transmission>0?n.unshift(_):p.transparent===!0?i.unshift(_):t.unshift(_)}function c(f,h){t.length>1&&t.sort(f||E1),n.length>1&&n.sort(h||pd),i.length>1&&i.sort(h||pd)}function u(){for(let f=e,h=r.length;f<h;f++){const p=r[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function A1(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new md,r.set(n,[o])):i>=s.length?(o=new md,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function C1(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new De};break;case"SpotLight":t={position:new F,direction:new F,color:new De,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new De,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new De,groundColor:new De};break;case"RectAreaLight":t={color:new De,position:new F,halfWidth:new F,halfHeight:new F};break}return r[e.id]=t,t}}}function P1(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let L1=0;function R1(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function D1(r,e){const t=new C1,n=P1(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new F);const s=new F,o=new Re,a=new Re;function l(u,f){let h=0,p=0,g=0;for(let X=0;X<9;X++)i.probe[X].set(0,0,0);let d=0,m=0,_=0,v=0,x=0,y=0,M=0,E=0,L=0,b=0;u.sort(R1);const S=f===!0?Math.PI:1;for(let X=0,H=u.length;X<H;X++){const N=u[X],O=N.color,W=N.intensity,j=N.distance,K=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)h+=O.r*W*S,p+=O.g*W*S,g+=O.b*W*S;else if(N.isLightProbe)for(let V=0;V<9;V++)i.probe[V].addScaledVector(N.sh.coefficients[V],W);else if(N.isDirectionalLight){const V=t.get(N);if(V.color.copy(N.color).multiplyScalar(N.intensity*S),N.castShadow){const ce=N.shadow,se=n.get(N);se.shadowBias=ce.bias,se.shadowNormalBias=ce.normalBias,se.shadowRadius=ce.radius,se.shadowMapSize=ce.mapSize,i.directionalShadow[d]=se,i.directionalShadowMap[d]=K,i.directionalShadowMatrix[d]=N.shadow.matrix,y++}i.directional[d]=V,d++}else if(N.isSpotLight){const V=t.get(N);V.position.setFromMatrixPosition(N.matrixWorld),V.color.copy(O).multiplyScalar(W*S),V.distance=j,V.coneCos=Math.cos(N.angle),V.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),V.decay=N.decay,i.spot[_]=V;const ce=N.shadow;if(N.map&&(i.spotLightMap[L]=N.map,L++,ce.updateMatrices(N),N.castShadow&&b++),i.spotLightMatrix[_]=ce.matrix,N.castShadow){const se=n.get(N);se.shadowBias=ce.bias,se.shadowNormalBias=ce.normalBias,se.shadowRadius=ce.radius,se.shadowMapSize=ce.mapSize,i.spotShadow[_]=se,i.spotShadowMap[_]=K,E++}_++}else if(N.isRectAreaLight){const V=t.get(N);V.color.copy(O).multiplyScalar(W),V.halfWidth.set(N.width*.5,0,0),V.halfHeight.set(0,N.height*.5,0),i.rectArea[v]=V,v++}else if(N.isPointLight){const V=t.get(N);if(V.color.copy(N.color).multiplyScalar(N.intensity*S),V.distance=N.distance,V.decay=N.decay,N.castShadow){const ce=N.shadow,se=n.get(N);se.shadowBias=ce.bias,se.shadowNormalBias=ce.normalBias,se.shadowRadius=ce.radius,se.shadowMapSize=ce.mapSize,se.shadowCameraNear=ce.camera.near,se.shadowCameraFar=ce.camera.far,i.pointShadow[m]=se,i.pointShadowMap[m]=K,i.pointShadowMatrix[m]=N.shadow.matrix,M++}i.point[m]=V,m++}else if(N.isHemisphereLight){const V=t.get(N);V.skyColor.copy(N.color).multiplyScalar(W*S),V.groundColor.copy(N.groundColor).multiplyScalar(W*S),i.hemi[x]=V,x++}}v>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=be.LTC_FLOAT_1,i.rectAreaLTC2=be.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=be.LTC_HALF_1,i.rectAreaLTC2=be.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=h,i.ambient[1]=p,i.ambient[2]=g;const I=i.hash;(I.directionalLength!==d||I.pointLength!==m||I.spotLength!==_||I.rectAreaLength!==v||I.hemiLength!==x||I.numDirectionalShadows!==y||I.numPointShadows!==M||I.numSpotShadows!==E||I.numSpotMaps!==L)&&(i.directional.length=d,i.spot.length=_,i.rectArea.length=v,i.point.length=m,i.hemi.length=x,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=E+L-b,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=b,I.directionalLength=d,I.pointLength=m,I.spotLength=_,I.rectAreaLength=v,I.hemiLength=x,I.numDirectionalShadows=y,I.numPointShadows=M,I.numSpotShadows=E,I.numSpotMaps=L,i.version=L1++)}function c(u,f){let h=0,p=0,g=0,d=0,m=0;const _=f.matrixWorldInverse;for(let v=0,x=u.length;v<x;v++){const y=u[v];if(y.isDirectionalLight){const M=i.directional[h];M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(_),h++}else if(y.isSpotLight){const M=i.spot[g];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(_),M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(_),g++}else if(y.isRectAreaLight){const M=i.rectArea[d];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(_),a.identity(),o.copy(y.matrixWorld),o.premultiply(_),a.extractRotation(o),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),d++}else if(y.isPointLight){const M=i.point[p];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(_),p++}else if(y.isHemisphereLight){const M=i.hemi[m];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(_),m++}}}return{setup:l,setupView:c,state:i}}function gd(r,e){const t=new D1(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(f){n.push(f)}function a(f){i.push(f)}function l(f){t.setup(n,f)}function c(f){t.setupView(n,f)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function I1(r,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new gd(r,e),t.set(s,[l])):o>=a.length?(l=new gd(r,e),a.push(l)):l=a[o],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class O1 extends Lr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Cy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class F1 extends Lr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new F,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const N1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,z1=`uniform sampler2D shadow_pass;
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
}`;function U1(r,e,t){let n=new Uu;const i=new Fe,s=new Fe,o=new Ke,a=new O1({depthPacking:Py}),l=new F1,c={},u=t.maxTextureSize,f={[Yi]:dn,[dn]:Yi,[hn]:hn},h=new mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Fe},radius:{value:4}},vertexShader:N1,fragmentShader:z1}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new Qt;g.setAttribute("position",new ii(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const d=new kt(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fm,this.render=function(y,M,E){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||y.length===0)return;const L=r.getRenderTarget(),b=r.getActiveCubeFace(),S=r.getActiveMipmapLevel(),I=r.state;I.setBlending(Wi),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);for(let X=0,H=y.length;X<H;X++){const N=y[X],O=N.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",N,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;i.copy(O.mapSize);const W=O.getFrameExtents();if(i.multiply(W),s.copy(O.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/W.x),i.x=s.x*W.x,O.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/W.y),i.y=s.y*W.y,O.mapSize.y=s.y)),O.map===null){const K=this.type!==Ks?{minFilter:Ct,magFilter:Ct}:{};O.map=new Ar(i.x,i.y,K),O.map.texture.name=N.name+".shadowMap",O.camera.updateProjectionMatrix()}r.setRenderTarget(O.map),r.clear();const j=O.getViewportCount();for(let K=0;K<j;K++){const V=O.getViewport(K);o.set(s.x*V.x,s.y*V.y,s.x*V.z,s.y*V.w),I.viewport(o),O.updateMatrices(N,K),n=O.getFrustum(),x(M,E,O.camera,N,this.type)}O.isPointLightShadow!==!0&&this.type===Ks&&_(O,E),O.needsUpdate=!1}m.needsUpdate=!1,r.setRenderTarget(L,b,S)};function _(y,M){const E=e.update(d);h.defines.VSM_SAMPLES!==y.blurSamples&&(h.defines.VSM_SAMPLES=y.blurSamples,p.defines.VSM_SAMPLES=y.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new Ar(i.x,i.y)),h.uniforms.shadow_pass.value=y.map.texture,h.uniforms.resolution.value=y.mapSize,h.uniforms.radius.value=y.radius,r.setRenderTarget(y.mapPass),r.clear(),r.renderBufferDirect(M,null,E,h,d,null),p.uniforms.shadow_pass.value=y.mapPass.texture,p.uniforms.resolution.value=y.mapSize,p.uniforms.radius.value=y.radius,r.setRenderTarget(y.map),r.clear(),r.renderBufferDirect(M,null,E,p,d,null)}function v(y,M,E,L,b,S){let I=null;const X=E.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(X!==void 0)I=X;else if(I=E.isPointLight===!0?l:a,r.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const H=I.uuid,N=M.uuid;let O=c[H];O===void 0&&(O={},c[H]=O);let W=O[N];W===void 0&&(W=I.clone(),O[N]=W),I=W}return I.visible=M.visible,I.wireframe=M.wireframe,S===Ks?I.side=M.shadowSide!==null?M.shadowSide:M.side:I.side=M.shadowSide!==null?M.shadowSide:f[M.side],I.alphaMap=M.alphaMap,I.alphaTest=M.alphaTest,I.map=M.map,I.clipShadows=M.clipShadows,I.clippingPlanes=M.clippingPlanes,I.clipIntersection=M.clipIntersection,I.displacementMap=M.displacementMap,I.displacementScale=M.displacementScale,I.displacementBias=M.displacementBias,I.wireframeLinewidth=M.wireframeLinewidth,I.linewidth=M.linewidth,E.isPointLight===!0&&I.isMeshDistanceMaterial===!0&&(I.referencePosition.setFromMatrixPosition(E.matrixWorld),I.nearDistance=L,I.farDistance=b),I}function x(y,M,E,L,b){if(y.visible===!1)return;if(y.layers.test(M.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&b===Ks)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,y.matrixWorld);const X=e.update(y),H=y.material;if(Array.isArray(H)){const N=X.groups;for(let O=0,W=N.length;O<W;O++){const j=N[O],K=H[j.materialIndex];if(K&&K.visible){const V=v(y,K,L,E.near,E.far,b);r.renderBufferDirect(E,null,X,V,y,j)}}}else if(H.visible){const N=v(y,H,L,E.near,E.far,b);r.renderBufferDirect(E,null,X,N,y,null)}}const I=y.children;for(let X=0,H=I.length;X<H;X++)x(I[X],M,E,L,b)}}function k1(r,e,t){const n=t.isWebGL2;function i(){let z=!1;const ie=new Ke;let _e=null;const Ee=new Ke(0,0,0,0);return{setMask:function(Ce){_e!==Ce&&!z&&(r.colorMask(Ce,Ce,Ce,Ce),_e=Ce)},setLocked:function(Ce){z=Ce},setClear:function(Ce,rt,St,Gt,Wn){Wn===!0&&(Ce*=Gt,rt*=Gt,St*=Gt),ie.set(Ce,rt,St,Gt),Ee.equals(ie)===!1&&(r.clearColor(Ce,rt,St,Gt),Ee.copy(ie))},reset:function(){z=!1,_e=null,Ee.set(-1,0,0,0)}}}function s(){let z=!1,ie=null,_e=null,Ee=null;return{setTest:function(Ce){Ce?$(2929):re(2929)},setMask:function(Ce){ie!==Ce&&!z&&(r.depthMask(Ce),ie=Ce)},setFunc:function(Ce){if(_e!==Ce){switch(Ce){case Zv:r.depthFunc(512);break;case Jv:r.depthFunc(519);break;case Qv:r.depthFunc(513);break;case zc:r.depthFunc(515);break;case ey:r.depthFunc(514);break;case ty:r.depthFunc(518);break;case ny:r.depthFunc(516);break;case iy:r.depthFunc(517);break;default:r.depthFunc(515)}_e=Ce}},setLocked:function(Ce){z=Ce},setClear:function(Ce){Ee!==Ce&&(r.clearDepth(Ce),Ee=Ce)},reset:function(){z=!1,ie=null,_e=null,Ee=null}}}function o(){let z=!1,ie=null,_e=null,Ee=null,Ce=null,rt=null,St=null,Gt=null,Wn=null;return{setTest:function(ht){z||(ht?$(2960):re(2960))},setMask:function(ht){ie!==ht&&!z&&(r.stencilMask(ht),ie=ht)},setFunc:function(ht,xn,Xn){(_e!==ht||Ee!==xn||Ce!==Xn)&&(r.stencilFunc(ht,xn,Xn),_e=ht,Ee=xn,Ce=Xn)},setOp:function(ht,xn,Xn){(rt!==ht||St!==xn||Gt!==Xn)&&(r.stencilOp(ht,xn,Xn),rt=ht,St=xn,Gt=Xn)},setLocked:function(ht){z=ht},setClear:function(ht){Wn!==ht&&(r.clearStencil(ht),Wn=ht)},reset:function(){z=!1,ie=null,_e=null,Ee=null,Ce=null,rt=null,St=null,Gt=null,Wn=null}}}const a=new i,l=new s,c=new o,u=new WeakMap,f=new WeakMap;let h={},p={},g=new WeakMap,d=[],m=null,_=!1,v=null,x=null,y=null,M=null,E=null,L=null,b=null,S=!1,I=null,X=null,H=null,N=null,O=null;const W=r.getParameter(35661);let j=!1,K=0;const V=r.getParameter(7938);V.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(V)[1]),j=K>=1):V.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),j=K>=2);let ce=null,se={};const Me=r.getParameter(3088),k=r.getParameter(2978),ue=new Ke().fromArray(Me),de=new Ke().fromArray(k);function P(z,ie,_e){const Ee=new Uint8Array(4),Ce=r.createTexture();r.bindTexture(z,Ce),r.texParameteri(z,10241,9728),r.texParameteri(z,10240,9728);for(let rt=0;rt<_e;rt++)r.texImage2D(ie+rt,0,6408,1,1,0,6408,5121,Ee);return Ce}const Z={};Z[3553]=P(3553,3553,1),Z[34067]=P(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),$(2929),l.setFunc(zc),te(!1),fe(nh),$(2884),q(Wi);function $(z){h[z]!==!0&&(r.enable(z),h[z]=!0)}function re(z){h[z]!==!1&&(r.disable(z),h[z]=!1)}function pe(z,ie){return p[z]!==ie?(r.bindFramebuffer(z,ie),p[z]=ie,n&&(z===36009&&(p[36160]=ie),z===36160&&(p[36009]=ie)),!0):!1}function we(z,ie){let _e=d,Ee=!1;if(z)if(_e=g.get(ie),_e===void 0&&(_e=[],g.set(ie,_e)),z.isWebGLMultipleRenderTargets){const Ce=z.texture;if(_e.length!==Ce.length||_e[0]!==36064){for(let rt=0,St=Ce.length;rt<St;rt++)_e[rt]=36064+rt;_e.length=Ce.length,Ee=!0}}else _e[0]!==36064&&(_e[0]=36064,Ee=!0);else _e[0]!==1029&&(_e[0]=1029,Ee=!0);Ee&&(t.isWebGL2?r.drawBuffers(_e):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(_e))}function ve(z){return m!==z?(r.useProgram(z),m=z,!0):!1}const A={[Zr]:32774,[Bv]:32778,[Vv]:32779};if(n)A[oh]=32775,A[ah]=32776;else{const z=e.get("EXT_blend_minmax");z!==null&&(A[oh]=z.MIN_EXT,A[ah]=z.MAX_EXT)}const D={[Gv]:0,[Hv]:1,[Wv]:768,[hm]:770,[Kv]:776,[Yv]:774,[jv]:772,[Xv]:769,[dm]:771,[$v]:775,[qv]:773};function q(z,ie,_e,Ee,Ce,rt,St,Gt){if(z===Wi){_===!0&&(re(3042),_=!1);return}if(_===!1&&($(3042),_=!0),z!==kv){if(z!==v||Gt!==S){if((x!==Zr||E!==Zr)&&(r.blendEquation(32774),x=Zr,E=Zr),Gt)switch(z){case os:r.blendFuncSeparate(1,771,1,771);break;case ih:r.blendFunc(1,1);break;case rh:r.blendFuncSeparate(0,769,0,1);break;case sh:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case os:r.blendFuncSeparate(770,771,1,771);break;case ih:r.blendFunc(770,1);break;case rh:r.blendFuncSeparate(0,769,0,1);break;case sh:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}y=null,M=null,L=null,b=null,v=z,S=Gt}return}Ce=Ce||ie,rt=rt||_e,St=St||Ee,(ie!==x||Ce!==E)&&(r.blendEquationSeparate(A[ie],A[Ce]),x=ie,E=Ce),(_e!==y||Ee!==M||rt!==L||St!==b)&&(r.blendFuncSeparate(D[_e],D[Ee],D[rt],D[St]),y=_e,M=Ee,L=rt,b=St),v=z,S=!1}function J(z,ie){z.side===hn?re(2884):$(2884);let _e=z.side===dn;ie&&(_e=!_e),te(_e),z.blending===os&&z.transparent===!1?q(Wi):q(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.premultipliedAlpha),l.setFunc(z.depthFunc),l.setTest(z.depthTest),l.setMask(z.depthWrite),a.setMask(z.colorWrite);const Ee=z.stencilWrite;c.setTest(Ee),Ee&&(c.setMask(z.stencilWriteMask),c.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),c.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),ae(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?$(32926):re(32926)}function te(z){I!==z&&(z?r.frontFace(2304):r.frontFace(2305),I=z)}function fe(z){z!==Nv?($(2884),z!==X&&(z===nh?r.cullFace(1029):z===zv?r.cullFace(1028):r.cullFace(1032))):re(2884),X=z}function me(z){z!==H&&(j&&r.lineWidth(z),H=z)}function ae(z,ie,_e){z?($(32823),(N!==ie||O!==_e)&&(r.polygonOffset(ie,_e),N=ie,O=_e)):re(32823)}function ge(z){z?$(3089):re(3089)}function le(z){z===void 0&&(z=33984+W-1),ce!==z&&(r.activeTexture(z),ce=z)}function T(z,ie,_e){_e===void 0&&(ce===null?_e=33984+W-1:_e=ce);let Ee=se[_e];Ee===void 0&&(Ee={type:void 0,texture:void 0},se[_e]=Ee),(Ee.type!==z||Ee.texture!==ie)&&(ce!==_e&&(r.activeTexture(_e),ce=_e),r.bindTexture(z,ie||Z[z]),Ee.type=z,Ee.texture=ie)}function w(){const z=se[ce];z!==void 0&&z.type!==void 0&&(r.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function U(){try{r.compressedTexImage2D.apply(r,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Q(){try{r.compressedTexImage3D.apply(r,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ne(){try{r.texSubImage2D.apply(r,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function he(){try{r.texSubImage3D.apply(r,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function xe(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function R(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function B(){try{r.texStorage2D.apply(r,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Se(){try{r.texStorage3D.apply(r,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ye(){try{r.texImage2D.apply(r,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ae(){try{r.texImage3D.apply(r,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Pe(z){ue.equals(z)===!1&&(r.scissor(z.x,z.y,z.z,z.w),ue.copy(z))}function Te(z){de.equals(z)===!1&&(r.viewport(z.x,z.y,z.z,z.w),de.copy(z))}function Ie(z,ie){let _e=f.get(ie);_e===void 0&&(_e=new WeakMap,f.set(ie,_e));let Ee=_e.get(z);Ee===void 0&&(Ee=r.getUniformBlockIndex(ie,z.name),_e.set(z,Ee))}function Ge(z,ie){const Ee=f.get(ie).get(z);u.get(ie)!==Ee&&(r.uniformBlockBinding(ie,Ee,z.__bindingPointIndex),u.set(ie,Ee))}function tt(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},ce=null,se={},p={},g=new WeakMap,d=[],m=null,_=!1,v=null,x=null,y=null,M=null,E=null,L=null,b=null,S=!1,I=null,X=null,H=null,N=null,O=null,ue.set(0,0,r.canvas.width,r.canvas.height),de.set(0,0,r.canvas.width,r.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:$,disable:re,bindFramebuffer:pe,drawBuffers:we,useProgram:ve,setBlending:q,setMaterial:J,setFlipSided:te,setCullFace:fe,setLineWidth:me,setPolygonOffset:ae,setScissorTest:ge,activeTexture:le,bindTexture:T,unbindTexture:w,compressedTexImage2D:U,compressedTexImage3D:Q,texImage2D:ye,texImage3D:Ae,updateUBOMapping:Ie,uniformBlockBinding:Ge,texStorage2D:B,texStorage3D:Se,texSubImage2D:ne,texSubImage3D:he,compressedTexSubImage2D:xe,compressedTexSubImage3D:R,scissor:Pe,viewport:Te,reset:tt}}function B1(r,e,t,n,i,s,o){const a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,f=i.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let d;const m=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(T,w){return _?new OffscreenCanvas(T,w):To("canvas")}function x(T,w,U,Q){let ne=1;if((T.width>Q||T.height>Q)&&(ne=Q/Math.max(T.width,T.height)),ne<1||w===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const he=w?xm:Math.floor,xe=he(ne*T.width),R=he(ne*T.height);d===void 0&&(d=v(xe,R));const B=U?v(xe,R):d;return B.width=xe,B.height=R,B.getContext("2d").drawImage(T,0,0,xe,R),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+xe+"x"+R+")."),B}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function y(T){return Vc(T.width)&&Vc(T.height)}function M(T){return a?!1:T.wrapS!==un||T.wrapT!==un||T.minFilter!==Ct&&T.minFilter!==Mn}function E(T,w){return T.generateMipmaps&&w&&T.minFilter!==Ct&&T.minFilter!==Mn}function L(T){r.generateMipmap(T)}function b(T,w,U,Q,ne=!1){if(a===!1)return w;if(T!==null){if(r[T]!==void 0)return r[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let he=w;return w===6403&&(U===5126&&(he=33326),U===5131&&(he=33325),U===5121&&(he=33321)),w===33319&&(U===5126&&(he=33328),U===5131&&(he=33327),U===5121&&(he=33323)),w===6408&&(U===5126&&(he=34836),U===5131&&(he=34842),U===5121&&(he=Q===Qe&&ne===!1?35907:32856),U===32819&&(he=32854),U===32820&&(he=32855)),(he===33325||he===33326||he===33327||he===33328||he===34842||he===34836)&&e.get("EXT_color_buffer_float"),he}function S(T,w,U){return E(T,U)===!0||T.isFramebufferTexture&&T.minFilter!==Ct&&T.minFilter!==Mn?Math.log2(Math.max(w.width,w.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?w.mipmaps.length:1}function I(T){return T===Ct||T===lh||T===El?9728:9729}function X(T){const w=T.target;w.removeEventListener("dispose",X),N(w),w.isVideoTexture&&g.delete(w)}function H(T){const w=T.target;w.removeEventListener("dispose",H),W(w)}function N(T){const w=n.get(T);if(w.__webglInit===void 0)return;const U=T.source,Q=m.get(U);if(Q){const ne=Q[w.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&O(T),Object.keys(Q).length===0&&m.delete(U)}n.remove(T)}function O(T){const w=n.get(T);r.deleteTexture(w.__webglTexture);const U=T.source,Q=m.get(U);delete Q[w.__cacheKey],o.memory.textures--}function W(T){const w=T.texture,U=n.get(T),Q=n.get(w);if(Q.__webglTexture!==void 0&&(r.deleteTexture(Q.__webglTexture),o.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++)r.deleteFramebuffer(U.__webglFramebuffer[ne]),U.__webglDepthbuffer&&r.deleteRenderbuffer(U.__webglDepthbuffer[ne]);else{if(r.deleteFramebuffer(U.__webglFramebuffer),U.__webglDepthbuffer&&r.deleteRenderbuffer(U.__webglDepthbuffer),U.__webglMultisampledFramebuffer&&r.deleteFramebuffer(U.__webglMultisampledFramebuffer),U.__webglColorRenderbuffer)for(let ne=0;ne<U.__webglColorRenderbuffer.length;ne++)U.__webglColorRenderbuffer[ne]&&r.deleteRenderbuffer(U.__webglColorRenderbuffer[ne]);U.__webglDepthRenderbuffer&&r.deleteRenderbuffer(U.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let ne=0,he=w.length;ne<he;ne++){const xe=n.get(w[ne]);xe.__webglTexture&&(r.deleteTexture(xe.__webglTexture),o.memory.textures--),n.remove(w[ne])}n.remove(w),n.remove(T)}let j=0;function K(){j=0}function V(){const T=j;return T>=l&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+l),j+=1,T}function ce(T){const w=[];return w.push(T.wrapS),w.push(T.wrapT),w.push(T.wrapR||0),w.push(T.magFilter),w.push(T.minFilter),w.push(T.anisotropy),w.push(T.internalFormat),w.push(T.format),w.push(T.type),w.push(T.generateMipmaps),w.push(T.premultiplyAlpha),w.push(T.flipY),w.push(T.unpackAlignment),w.push(T.encoding),w.join()}function se(T,w){const U=n.get(T);if(T.isVideoTexture&&ge(T),T.isRenderTargetTexture===!1&&T.version>0&&U.__version!==T.version){const Q=T.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{re(U,T,w);return}}t.bindTexture(3553,U.__webglTexture,33984+w)}function Me(T,w){const U=n.get(T);if(T.version>0&&U.__version!==T.version){re(U,T,w);return}t.bindTexture(35866,U.__webglTexture,33984+w)}function k(T,w){const U=n.get(T);if(T.version>0&&U.__version!==T.version){re(U,T,w);return}t.bindTexture(32879,U.__webglTexture,33984+w)}function ue(T,w){const U=n.get(T);if(T.version>0&&U.__version!==T.version){pe(U,T,w);return}t.bindTexture(34067,U.__webglTexture,33984+w)}const de={[yo]:10497,[un]:33071,[kc]:33648},P={[Ct]:9728,[lh]:9984,[El]:9986,[Mn]:9729,[fy]:9985,[bo]:9987};function Z(T,w,U){if(U?(r.texParameteri(T,10242,de[w.wrapS]),r.texParameteri(T,10243,de[w.wrapT]),(T===32879||T===35866)&&r.texParameteri(T,32882,de[w.wrapR]),r.texParameteri(T,10240,P[w.magFilter]),r.texParameteri(T,10241,P[w.minFilter])):(r.texParameteri(T,10242,33071),r.texParameteri(T,10243,33071),(T===32879||T===35866)&&r.texParameteri(T,32882,33071),(w.wrapS!==un||w.wrapT!==un)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(T,10240,I(w.magFilter)),r.texParameteri(T,10241,I(w.minFilter)),w.minFilter!==Ct&&w.minFilter!==Mn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const Q=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===Ct||w.minFilter!==El&&w.minFilter!==bo||w.type===Ni&&e.has("OES_texture_float_linear")===!1||a===!1&&w.type===Mo&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||n.get(w).__currentAnisotropy)&&(r.texParameterf(T,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy)}}function $(T,w){let U=!1;T.__webglInit===void 0&&(T.__webglInit=!0,w.addEventListener("dispose",X));const Q=w.source;let ne=m.get(Q);ne===void 0&&(ne={},m.set(Q,ne));const he=ce(w);if(he!==T.__cacheKey){ne[he]===void 0&&(ne[he]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,U=!0),ne[he].usedTimes++;const xe=ne[T.__cacheKey];xe!==void 0&&(ne[T.__cacheKey].usedTimes--,xe.usedTimes===0&&O(w)),T.__cacheKey=he,T.__webglTexture=ne[he].texture}return U}function re(T,w,U){let Q=3553;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(Q=35866),w.isData3DTexture&&(Q=32879);const ne=$(T,w),he=w.source;t.bindTexture(Q,T.__webglTexture,33984+U);const xe=n.get(he);if(he.version!==xe.__version||ne===!0){t.activeTexture(33984+U),r.pixelStorei(37440,w.flipY),r.pixelStorei(37441,w.premultiplyAlpha),r.pixelStorei(3317,w.unpackAlignment),r.pixelStorei(37443,0);const R=M(w)&&y(w.image)===!1;let B=x(w.image,R,!1,u);B=le(w,B);const Se=y(B)||a,ye=s.convert(w.format,w.encoding);let Ae=s.convert(w.type),Pe=b(w.internalFormat,ye,Ae,w.encoding,w.isVideoTexture);Z(Q,w,Se);let Te;const Ie=w.mipmaps,Ge=a&&w.isVideoTexture!==!0,tt=xe.__version===void 0||ne===!0,z=S(w,B,Se);if(w.isDepthTexture)Pe=6402,a?w.type===Ni?Pe=36012:w.type===gr?Pe=33190:w.type===as?Pe=35056:Pe=33189:w.type===Ni&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===br&&Pe===6402&&w.type!==mm&&w.type!==gr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=gr,Ae=s.convert(w.type)),w.format===bs&&Pe===6402&&(Pe=34041,w.type!==as&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=as,Ae=s.convert(w.type))),tt&&(Ge?t.texStorage2D(3553,1,Pe,B.width,B.height):t.texImage2D(3553,0,Pe,B.width,B.height,0,ye,Ae,null));else if(w.isDataTexture)if(Ie.length>0&&Se){Ge&&tt&&t.texStorage2D(3553,z,Pe,Ie[0].width,Ie[0].height);for(let ie=0,_e=Ie.length;ie<_e;ie++)Te=Ie[ie],Ge?t.texSubImage2D(3553,ie,0,0,Te.width,Te.height,ye,Ae,Te.data):t.texImage2D(3553,ie,Pe,Te.width,Te.height,0,ye,Ae,Te.data);w.generateMipmaps=!1}else Ge?(tt&&t.texStorage2D(3553,z,Pe,B.width,B.height),t.texSubImage2D(3553,0,0,0,B.width,B.height,ye,Ae,B.data)):t.texImage2D(3553,0,Pe,B.width,B.height,0,ye,Ae,B.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Ge&&tt&&t.texStorage3D(35866,z,Pe,Ie[0].width,Ie[0].height,B.depth);for(let ie=0,_e=Ie.length;ie<_e;ie++)Te=Ie[ie],w.format!==Sn?ye!==null?Ge?t.compressedTexSubImage3D(35866,ie,0,0,0,Te.width,Te.height,B.depth,ye,Te.data,0,0):t.compressedTexImage3D(35866,ie,Pe,Te.width,Te.height,B.depth,0,Te.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?t.texSubImage3D(35866,ie,0,0,0,Te.width,Te.height,B.depth,ye,Ae,Te.data):t.texImage3D(35866,ie,Pe,Te.width,Te.height,B.depth,0,ye,Ae,Te.data)}else{Ge&&tt&&t.texStorage2D(3553,z,Pe,Ie[0].width,Ie[0].height);for(let ie=0,_e=Ie.length;ie<_e;ie++)Te=Ie[ie],w.format!==Sn?ye!==null?Ge?t.compressedTexSubImage2D(3553,ie,0,0,Te.width,Te.height,ye,Te.data):t.compressedTexImage2D(3553,ie,Pe,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?t.texSubImage2D(3553,ie,0,0,Te.width,Te.height,ye,Ae,Te.data):t.texImage2D(3553,ie,Pe,Te.width,Te.height,0,ye,Ae,Te.data)}else if(w.isDataArrayTexture)Ge?(tt&&t.texStorage3D(35866,z,Pe,B.width,B.height,B.depth),t.texSubImage3D(35866,0,0,0,0,B.width,B.height,B.depth,ye,Ae,B.data)):t.texImage3D(35866,0,Pe,B.width,B.height,B.depth,0,ye,Ae,B.data);else if(w.isData3DTexture)Ge?(tt&&t.texStorage3D(32879,z,Pe,B.width,B.height,B.depth),t.texSubImage3D(32879,0,0,0,0,B.width,B.height,B.depth,ye,Ae,B.data)):t.texImage3D(32879,0,Pe,B.width,B.height,B.depth,0,ye,Ae,B.data);else if(w.isFramebufferTexture){if(tt)if(Ge)t.texStorage2D(3553,z,Pe,B.width,B.height);else{let ie=B.width,_e=B.height;for(let Ee=0;Ee<z;Ee++)t.texImage2D(3553,Ee,Pe,ie,_e,0,ye,Ae,null),ie>>=1,_e>>=1}}else if(Ie.length>0&&Se){Ge&&tt&&t.texStorage2D(3553,z,Pe,Ie[0].width,Ie[0].height);for(let ie=0,_e=Ie.length;ie<_e;ie++)Te=Ie[ie],Ge?t.texSubImage2D(3553,ie,0,0,ye,Ae,Te):t.texImage2D(3553,ie,Pe,ye,Ae,Te);w.generateMipmaps=!1}else Ge?(tt&&t.texStorage2D(3553,z,Pe,B.width,B.height),t.texSubImage2D(3553,0,0,0,ye,Ae,B)):t.texImage2D(3553,0,Pe,ye,Ae,B);E(w,Se)&&L(Q),xe.__version=he.version,w.onUpdate&&w.onUpdate(w)}T.__version=w.version}function pe(T,w,U){if(w.image.length!==6)return;const Q=$(T,w),ne=w.source;t.bindTexture(34067,T.__webglTexture,33984+U);const he=n.get(ne);if(ne.version!==he.__version||Q===!0){t.activeTexture(33984+U),r.pixelStorei(37440,w.flipY),r.pixelStorei(37441,w.premultiplyAlpha),r.pixelStorei(3317,w.unpackAlignment),r.pixelStorei(37443,0);const xe=w.isCompressedTexture||w.image[0].isCompressedTexture,R=w.image[0]&&w.image[0].isDataTexture,B=[];for(let ie=0;ie<6;ie++)!xe&&!R?B[ie]=x(w.image[ie],!1,!0,c):B[ie]=R?w.image[ie].image:w.image[ie],B[ie]=le(w,B[ie]);const Se=B[0],ye=y(Se)||a,Ae=s.convert(w.format,w.encoding),Pe=s.convert(w.type),Te=b(w.internalFormat,Ae,Pe,w.encoding),Ie=a&&w.isVideoTexture!==!0,Ge=he.__version===void 0||Q===!0;let tt=S(w,Se,ye);Z(34067,w,ye);let z;if(xe){Ie&&Ge&&t.texStorage2D(34067,tt,Te,Se.width,Se.height);for(let ie=0;ie<6;ie++){z=B[ie].mipmaps;for(let _e=0;_e<z.length;_e++){const Ee=z[_e];w.format!==Sn?Ae!==null?Ie?t.compressedTexSubImage2D(34069+ie,_e,0,0,Ee.width,Ee.height,Ae,Ee.data):t.compressedTexImage2D(34069+ie,_e,Te,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ie?t.texSubImage2D(34069+ie,_e,0,0,Ee.width,Ee.height,Ae,Pe,Ee.data):t.texImage2D(34069+ie,_e,Te,Ee.width,Ee.height,0,Ae,Pe,Ee.data)}}}else{z=w.mipmaps,Ie&&Ge&&(z.length>0&&tt++,t.texStorage2D(34067,tt,Te,B[0].width,B[0].height));for(let ie=0;ie<6;ie++)if(R){Ie?t.texSubImage2D(34069+ie,0,0,0,B[ie].width,B[ie].height,Ae,Pe,B[ie].data):t.texImage2D(34069+ie,0,Te,B[ie].width,B[ie].height,0,Ae,Pe,B[ie].data);for(let _e=0;_e<z.length;_e++){const Ce=z[_e].image[ie].image;Ie?t.texSubImage2D(34069+ie,_e+1,0,0,Ce.width,Ce.height,Ae,Pe,Ce.data):t.texImage2D(34069+ie,_e+1,Te,Ce.width,Ce.height,0,Ae,Pe,Ce.data)}}else{Ie?t.texSubImage2D(34069+ie,0,0,0,Ae,Pe,B[ie]):t.texImage2D(34069+ie,0,Te,Ae,Pe,B[ie]);for(let _e=0;_e<z.length;_e++){const Ee=z[_e];Ie?t.texSubImage2D(34069+ie,_e+1,0,0,Ae,Pe,Ee.image[ie]):t.texImage2D(34069+ie,_e+1,Te,Ae,Pe,Ee.image[ie])}}}E(w,ye)&&L(34067),he.__version=ne.version,w.onUpdate&&w.onUpdate(w)}T.__version=w.version}function we(T,w,U,Q,ne){const he=s.convert(U.format,U.encoding),xe=s.convert(U.type),R=b(U.internalFormat,he,xe,U.encoding);n.get(w).__hasExternalTextures||(ne===32879||ne===35866?t.texImage3D(ne,0,R,w.width,w.height,w.depth,0,he,xe,null):t.texImage2D(ne,0,R,w.width,w.height,0,he,xe,null)),t.bindFramebuffer(36160,T),ae(w)?h.framebufferTexture2DMultisampleEXT(36160,Q,ne,n.get(U).__webglTexture,0,me(w)):(ne===3553||ne>=34069&&ne<=34074)&&r.framebufferTexture2D(36160,Q,ne,n.get(U).__webglTexture,0),t.bindFramebuffer(36160,null)}function ve(T,w,U){if(r.bindRenderbuffer(36161,T),w.depthBuffer&&!w.stencilBuffer){let Q=33189;if(U||ae(w)){const ne=w.depthTexture;ne&&ne.isDepthTexture&&(ne.type===Ni?Q=36012:ne.type===gr&&(Q=33190));const he=me(w);ae(w)?h.renderbufferStorageMultisampleEXT(36161,he,Q,w.width,w.height):r.renderbufferStorageMultisample(36161,he,Q,w.width,w.height)}else r.renderbufferStorage(36161,Q,w.width,w.height);r.framebufferRenderbuffer(36160,36096,36161,T)}else if(w.depthBuffer&&w.stencilBuffer){const Q=me(w);U&&ae(w)===!1?r.renderbufferStorageMultisample(36161,Q,35056,w.width,w.height):ae(w)?h.renderbufferStorageMultisampleEXT(36161,Q,35056,w.width,w.height):r.renderbufferStorage(36161,34041,w.width,w.height),r.framebufferRenderbuffer(36160,33306,36161,T)}else{const Q=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let ne=0;ne<Q.length;ne++){const he=Q[ne],xe=s.convert(he.format,he.encoding),R=s.convert(he.type),B=b(he.internalFormat,xe,R,he.encoding),Se=me(w);U&&ae(w)===!1?r.renderbufferStorageMultisample(36161,Se,B,w.width,w.height):ae(w)?h.renderbufferStorageMultisampleEXT(36161,Se,B,w.width,w.height):r.renderbufferStorage(36161,B,w.width,w.height)}}r.bindRenderbuffer(36161,null)}function A(T,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,T),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),se(w.depthTexture,0);const Q=n.get(w.depthTexture).__webglTexture,ne=me(w);if(w.depthTexture.format===br)ae(w)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,Q,0,ne):r.framebufferTexture2D(36160,36096,3553,Q,0);else if(w.depthTexture.format===bs)ae(w)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,Q,0,ne):r.framebufferTexture2D(36160,33306,3553,Q,0);else throw new Error("Unknown depthTexture format")}function D(T){const w=n.get(T),U=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!w.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");A(w.__webglFramebuffer,T)}else if(U){w.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)t.bindFramebuffer(36160,w.__webglFramebuffer[Q]),w.__webglDepthbuffer[Q]=r.createRenderbuffer(),ve(w.__webglDepthbuffer[Q],T,!1)}else t.bindFramebuffer(36160,w.__webglFramebuffer),w.__webglDepthbuffer=r.createRenderbuffer(),ve(w.__webglDepthbuffer,T,!1);t.bindFramebuffer(36160,null)}function q(T,w,U){const Q=n.get(T);w!==void 0&&we(Q.__webglFramebuffer,T,T.texture,36064,3553),U!==void 0&&D(T)}function J(T){const w=T.texture,U=n.get(T),Q=n.get(w);T.addEventListener("dispose",H),T.isWebGLMultipleRenderTargets!==!0&&(Q.__webglTexture===void 0&&(Q.__webglTexture=r.createTexture()),Q.__version=w.version,o.memory.textures++);const ne=T.isWebGLCubeRenderTarget===!0,he=T.isWebGLMultipleRenderTargets===!0,xe=y(T)||a;if(ne){U.__webglFramebuffer=[];for(let R=0;R<6;R++)U.__webglFramebuffer[R]=r.createFramebuffer()}else{if(U.__webglFramebuffer=r.createFramebuffer(),he)if(i.drawBuffers){const R=T.texture;for(let B=0,Se=R.length;B<Se;B++){const ye=n.get(R[B]);ye.__webglTexture===void 0&&(ye.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&T.samples>0&&ae(T)===!1){const R=he?w:[w];U.__webglMultisampledFramebuffer=r.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,U.__webglMultisampledFramebuffer);for(let B=0;B<R.length;B++){const Se=R[B];U.__webglColorRenderbuffer[B]=r.createRenderbuffer(),r.bindRenderbuffer(36161,U.__webglColorRenderbuffer[B]);const ye=s.convert(Se.format,Se.encoding),Ae=s.convert(Se.type),Pe=b(Se.internalFormat,ye,Ae,Se.encoding,T.isXRRenderTarget===!0),Te=me(T);r.renderbufferStorageMultisample(36161,Te,Pe,T.width,T.height),r.framebufferRenderbuffer(36160,36064+B,36161,U.__webglColorRenderbuffer[B])}r.bindRenderbuffer(36161,null),T.depthBuffer&&(U.__webglDepthRenderbuffer=r.createRenderbuffer(),ve(U.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(36160,null)}}if(ne){t.bindTexture(34067,Q.__webglTexture),Z(34067,w,xe);for(let R=0;R<6;R++)we(U.__webglFramebuffer[R],T,w,36064,34069+R);E(w,xe)&&L(34067),t.unbindTexture()}else if(he){const R=T.texture;for(let B=0,Se=R.length;B<Se;B++){const ye=R[B],Ae=n.get(ye);t.bindTexture(3553,Ae.__webglTexture),Z(3553,ye,xe),we(U.__webglFramebuffer,T,ye,36064+B,3553),E(ye,xe)&&L(3553)}t.unbindTexture()}else{let R=3553;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(a?R=T.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(R,Q.__webglTexture),Z(R,w,xe),we(U.__webglFramebuffer,T,w,36064,R),E(w,xe)&&L(R),t.unbindTexture()}T.depthBuffer&&D(T)}function te(T){const w=y(T)||a,U=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let Q=0,ne=U.length;Q<ne;Q++){const he=U[Q];if(E(he,w)){const xe=T.isWebGLCubeRenderTarget?34067:3553,R=n.get(he).__webglTexture;t.bindTexture(xe,R),L(xe),t.unbindTexture()}}}function fe(T){if(a&&T.samples>0&&ae(T)===!1){const w=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],U=T.width,Q=T.height;let ne=16384;const he=[],xe=T.stencilBuffer?33306:36096,R=n.get(T),B=T.isWebGLMultipleRenderTargets===!0;if(B)for(let Se=0;Se<w.length;Se++)t.bindFramebuffer(36160,R.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+Se,36161,null),t.bindFramebuffer(36160,R.__webglFramebuffer),r.framebufferTexture2D(36009,36064+Se,3553,null,0);t.bindFramebuffer(36008,R.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,R.__webglFramebuffer);for(let Se=0;Se<w.length;Se++){he.push(36064+Se),T.depthBuffer&&he.push(xe);const ye=R.__ignoreDepthValues!==void 0?R.__ignoreDepthValues:!1;if(ye===!1&&(T.depthBuffer&&(ne|=256),T.stencilBuffer&&(ne|=1024)),B&&r.framebufferRenderbuffer(36008,36064,36161,R.__webglColorRenderbuffer[Se]),ye===!0&&(r.invalidateFramebuffer(36008,[xe]),r.invalidateFramebuffer(36009,[xe])),B){const Ae=n.get(w[Se]).__webglTexture;r.framebufferTexture2D(36009,36064,3553,Ae,0)}r.blitFramebuffer(0,0,U,Q,0,0,U,Q,ne,9728),p&&r.invalidateFramebuffer(36008,he)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),B)for(let Se=0;Se<w.length;Se++){t.bindFramebuffer(36160,R.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+Se,36161,R.__webglColorRenderbuffer[Se]);const ye=n.get(w[Se]).__webglTexture;t.bindFramebuffer(36160,R.__webglFramebuffer),r.framebufferTexture2D(36009,36064+Se,3553,ye,0)}t.bindFramebuffer(36009,R.__webglMultisampledFramebuffer)}}function me(T){return Math.min(f,T.samples)}function ae(T){const w=n.get(T);return a&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function ge(T){const w=o.render.frame;g.get(T)!==w&&(g.set(T,w),T.update())}function le(T,w){const U=T.encoding,Q=T.format,ne=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===Bc||U!==Er&&(U===Qe?a===!1?e.has("EXT_sRGB")===!0&&Q===Sn?(T.format=Bc,T.minFilter=Mn,T.generateMipmaps=!1):w=ym.sRGBToLinear(w):(Q!==Sn||ne!==Tr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",U)),w}this.allocateTextureUnit=V,this.resetTextureUnits=K,this.setTexture2D=se,this.setTexture2DArray=Me,this.setTexture3D=k,this.setTextureCube=ue,this.rebindTextures=q,this.setupRenderTarget=J,this.updateRenderTargetMipmap=te,this.updateMultisampleRenderTarget=fe,this.setupDepthRenderbuffer=D,this.setupFrameBufferTexture=we,this.useMultisampledRTT=ae}function V1(r,e,t){const n=t.isWebGL2;function i(s,o=null){let a;if(s===Tr)return 5121;if(s===my)return 32819;if(s===gy)return 32820;if(s===hy)return 5120;if(s===dy)return 5122;if(s===mm)return 5123;if(s===py)return 5124;if(s===gr)return 5125;if(s===Ni)return 5126;if(s===Mo)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===_y)return 6406;if(s===Sn)return 6408;if(s===xy)return 6409;if(s===vy)return 6410;if(s===br)return 6402;if(s===bs)return 34041;if(s===Bc)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===yy)return 6403;if(s===by)return 36244;if(s===My)return 33319;if(s===wy)return 33320;if(s===Sy)return 36249;if(s===Al||s===Cl||s===Pl||s===Ll)if(o===Qe)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Al)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Cl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Pl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ll)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Al)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Cl)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Pl)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ll)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ch||s===uh||s===fh||s===hh)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===ch)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===uh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===fh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===hh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Ty)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===dh||s===ph)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===dh)return o===Qe?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===ph)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===mh||s===gh||s===_h||s===xh||s===vh||s===yh||s===bh||s===Mh||s===wh||s===Sh||s===Th||s===Eh||s===Ah||s===Ch)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===mh)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===gh)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===_h)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===xh)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===vh)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===yh)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===bh)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Mh)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===wh)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Sh)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Th)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Eh)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ah)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Ch)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Rl)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Rl)return o===Qe?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===Ey||s===Ph||s===Lh||s===Rh)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Rl)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Ph)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Lh)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Rh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===as?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class G1 extends qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class es extends ct{constructor(){super(),this.isGroup=!0,this.type="Group"}}const H1={type:"move"};class nc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new es,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new es,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new es,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const d of e.hand.values()){const m=t.getJointPose(d,n),_=this._getHandJoint(c,d);m!==null&&(_.matrix.fromArray(m.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=m.radius),_.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&h>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(H1)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new es;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class W1 extends Rt{constructor(e,t,n,i,s,o,a,l,c,u){if(u=u!==void 0?u:br,u!==br&&u!==bs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===br&&(n=gr),n===void 0&&u===bs&&(n=as),super(null,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Ct,this.minFilter=l!==void 0?l:Ct,this.flipY=!1,this.generateMipmaps=!1}}class X1 extends Pr{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,p=null,g=null;const d=t.getContextAttributes();let m=null,_=null;const v=[],x=[],y=new Set,M=new Map,E=new qt;E.layers.enable(1),E.viewport=new Ke;const L=new qt;L.layers.enable(2),L.viewport=new Ke;const b=[E,L],S=new G1;S.layers.enable(1),S.layers.enable(2);let I=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let ue=v[k];return ue===void 0&&(ue=new nc,v[k]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(k){let ue=v[k];return ue===void 0&&(ue=new nc,v[k]=ue),ue.getGripSpace()},this.getHand=function(k){let ue=v[k];return ue===void 0&&(ue=new nc,v[k]=ue),ue.getHandSpace()};function H(k){const ue=x.indexOf(k.inputSource);if(ue===-1)return;const de=v[ue];de!==void 0&&de.dispatchEvent({type:k.type,data:k.inputSource})}function N(){i.removeEventListener("select",H),i.removeEventListener("selectstart",H),i.removeEventListener("selectend",H),i.removeEventListener("squeeze",H),i.removeEventListener("squeezestart",H),i.removeEventListener("squeezeend",H),i.removeEventListener("end",N),i.removeEventListener("inputsourceschange",O);for(let k=0;k<v.length;k++){const ue=x[k];ue!==null&&(x[k]=null,v[k].disconnect(ue))}I=null,X=null,e.setRenderTarget(m),p=null,h=null,f=null,i=null,_=null,Me.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){s=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){a=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(k){c=k},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(k){if(i=k,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",H),i.addEventListener("selectstart",H),i.addEventListener("selectend",H),i.addEventListener("squeeze",H),i.addEventListener("squeezestart",H),i.addEventListener("squeezeend",H),i.addEventListener("end",N),i.addEventListener("inputsourceschange",O),d.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ue={antialias:i.renderState.layers===void 0?d.antialias:!0,alpha:d.alpha,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(i,t,ue),i.updateRenderState({baseLayer:p}),_=new Ar(p.framebufferWidth,p.framebufferHeight,{format:Sn,type:Tr,encoding:e.outputEncoding,stencilBuffer:d.stencil})}else{let ue=null,de=null,P=null;d.depth&&(P=d.stencil?35056:33190,ue=d.stencil?bs:br,de=d.stencil?as:gr);const Z={colorFormat:32856,depthFormat:P,scaleFactor:s};f=new XRWebGLBinding(i,t),h=f.createProjectionLayer(Z),i.updateRenderState({layers:[h]}),_=new Ar(h.textureWidth,h.textureHeight,{format:Sn,type:Tr,depthTexture:new W1(h.textureWidth,h.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:d.stencil,encoding:e.outputEncoding,samples:d.antialias?4:0});const $=e.properties.get(_);$.__ignoreDepthValues=h.ignoreDepthValues}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Me.setContext(i),Me.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function O(k){for(let ue=0;ue<k.removed.length;ue++){const de=k.removed[ue],P=x.indexOf(de);P>=0&&(x[P]=null,v[P].disconnect(de))}for(let ue=0;ue<k.added.length;ue++){const de=k.added[ue];let P=x.indexOf(de);if(P===-1){for(let $=0;$<v.length;$++)if($>=x.length){x.push(de),P=$;break}else if(x[$]===null){x[$]=de,P=$;break}if(P===-1)break}const Z=v[P];Z&&Z.connect(de)}}const W=new F,j=new F;function K(k,ue,de){W.setFromMatrixPosition(ue.matrixWorld),j.setFromMatrixPosition(de.matrixWorld);const P=W.distanceTo(j),Z=ue.projectionMatrix.elements,$=de.projectionMatrix.elements,re=Z[14]/(Z[10]-1),pe=Z[14]/(Z[10]+1),we=(Z[9]+1)/Z[5],ve=(Z[9]-1)/Z[5],A=(Z[8]-1)/Z[0],D=($[8]+1)/$[0],q=re*A,J=re*D,te=P/(-A+D),fe=te*-A;ue.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(fe),k.translateZ(te),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();const me=re+te,ae=pe+te,ge=q-fe,le=J+(P-fe),T=we*pe/ae*me,w=ve*pe/ae*me;k.projectionMatrix.makePerspective(ge,le,T,w,me,ae)}function V(k,ue){ue===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(ue.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(i===null)return;S.near=L.near=E.near=k.near,S.far=L.far=E.far=k.far,(I!==S.near||X!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),I=S.near,X=S.far);const ue=k.parent,de=S.cameras;V(S,ue);for(let Z=0;Z<de.length;Z++)V(de[Z],ue);S.matrixWorld.decompose(S.position,S.quaternion,S.scale),k.matrix.copy(S.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale);const P=k.children;for(let Z=0,$=P.length;Z<$;Z++)P[Z].updateMatrixWorld(!0);de.length===2?K(S,E,L):S.projectionMatrix.copy(E.projectionMatrix)},this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(k){l=k,h!==null&&(h.fixedFoveation=k),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=k)},this.getPlanes=function(){return y};let ce=null;function se(k,ue){if(u=ue.getViewerPose(c||o),g=ue,u!==null){const de=u.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let P=!1;de.length!==S.cameras.length&&(S.cameras.length=0,P=!0);for(let Z=0;Z<de.length;Z++){const $=de[Z];let re=null;if(p!==null)re=p.getViewport($);else{const we=f.getViewSubImage(h,$);re=we.viewport,Z===0&&(e.setRenderTargetTextures(_,we.colorTexture,h.ignoreDepthValues?void 0:we.depthStencilTexture),e.setRenderTarget(_))}let pe=b[Z];pe===void 0&&(pe=new qt,pe.layers.enable(Z),pe.viewport=new Ke,b[Z]=pe),pe.matrix.fromArray($.transform.matrix),pe.projectionMatrix.fromArray($.projectionMatrix),pe.viewport.set(re.x,re.y,re.width,re.height),Z===0&&S.matrix.copy(pe.matrix),P===!0&&S.cameras.push(pe)}}for(let de=0;de<v.length;de++){const P=x[de],Z=v[de];P!==null&&Z!==void 0&&Z.update(P,ue,c||o)}if(ce&&ce(k,ue),ue.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:ue.detectedPlanes});let de=null;for(const P of y)ue.detectedPlanes.has(P)||(de===null&&(de=[]),de.push(P));if(de!==null)for(const P of de)y.delete(P),M.delete(P),n.dispatchEvent({type:"planeremoved",data:P});for(const P of ue.detectedPlanes)if(!y.has(P))y.add(P),M.set(P,ue.lastChangedTime),n.dispatchEvent({type:"planeadded",data:P});else{const Z=M.get(P);P.lastChangedTime>Z&&(M.set(P,P.lastChangedTime),n.dispatchEvent({type:"planechanged",data:P}))}}g=null}const Me=new Cm;Me.setAnimationLoop(se),this.setAnimationLoop=function(k){ce=k},this.dispose=function(){}}}function j1(r,e){function t(d,m){m.color.getRGB(d.fogColor.value,Tm(r)),m.isFog?(d.fogNear.value=m.near,d.fogFar.value=m.far):m.isFogExp2&&(d.fogDensity.value=m.density)}function n(d,m,_,v,x){m.isMeshBasicMaterial||m.isMeshLambertMaterial?i(d,m):m.isMeshToonMaterial?(i(d,m),u(d,m)):m.isMeshPhongMaterial?(i(d,m),c(d,m)):m.isMeshStandardMaterial?(i(d,m),f(d,m),m.isMeshPhysicalMaterial&&h(d,m,x)):m.isMeshMatcapMaterial?(i(d,m),p(d,m)):m.isMeshDepthMaterial?i(d,m):m.isMeshDistanceMaterial?(i(d,m),g(d,m)):m.isMeshNormalMaterial?i(d,m):m.isLineBasicMaterial?(s(d,m),m.isLineDashedMaterial&&o(d,m)):m.isPointsMaterial?a(d,m,_,v):m.isSpriteMaterial?l(d,m):m.isShadowMaterial?(d.color.value.copy(m.color),d.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function i(d,m){d.opacity.value=m.opacity,m.color&&d.diffuse.value.copy(m.color),m.emissive&&d.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(d.map.value=m.map),m.alphaMap&&(d.alphaMap.value=m.alphaMap),m.bumpMap&&(d.bumpMap.value=m.bumpMap,d.bumpScale.value=m.bumpScale,m.side===dn&&(d.bumpScale.value*=-1)),m.displacementMap&&(d.displacementMap.value=m.displacementMap,d.displacementScale.value=m.displacementScale,d.displacementBias.value=m.displacementBias),m.emissiveMap&&(d.emissiveMap.value=m.emissiveMap),m.normalMap&&(d.normalMap.value=m.normalMap,d.normalScale.value.copy(m.normalScale),m.side===dn&&d.normalScale.value.negate()),m.specularMap&&(d.specularMap.value=m.specularMap),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest);const _=e.get(m).envMap;if(_&&(d.envMap.value=_,d.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=m.reflectivity,d.ior.value=m.ior,d.refractionRatio.value=m.refractionRatio),m.lightMap){d.lightMap.value=m.lightMap;const y=r.useLegacyLights===!0?Math.PI:1;d.lightMapIntensity.value=m.lightMapIntensity*y}m.aoMap&&(d.aoMap.value=m.aoMap,d.aoMapIntensity.value=m.aoMapIntensity);let v;m.map?v=m.map:m.specularMap?v=m.specularMap:m.displacementMap?v=m.displacementMap:m.normalMap?v=m.normalMap:m.bumpMap?v=m.bumpMap:m.roughnessMap?v=m.roughnessMap:m.metalnessMap?v=m.metalnessMap:m.alphaMap?v=m.alphaMap:m.emissiveMap?v=m.emissiveMap:m.clearcoatMap?v=m.clearcoatMap:m.clearcoatNormalMap?v=m.clearcoatNormalMap:m.clearcoatRoughnessMap?v=m.clearcoatRoughnessMap:m.iridescenceMap?v=m.iridescenceMap:m.iridescenceThicknessMap?v=m.iridescenceThicknessMap:m.specularIntensityMap?v=m.specularIntensityMap:m.specularColorMap?v=m.specularColorMap:m.transmissionMap?v=m.transmissionMap:m.thicknessMap?v=m.thicknessMap:m.sheenColorMap?v=m.sheenColorMap:m.sheenRoughnessMap&&(v=m.sheenRoughnessMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),d.uvTransform.value.copy(v.matrix));let x;m.aoMap?x=m.aoMap:m.lightMap&&(x=m.lightMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),d.uv2Transform.value.copy(x.matrix))}function s(d,m){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity}function o(d,m){d.dashSize.value=m.dashSize,d.totalSize.value=m.dashSize+m.gapSize,d.scale.value=m.scale}function a(d,m,_,v){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,d.size.value=m.size*_,d.scale.value=v*.5,m.map&&(d.map.value=m.map),m.alphaMap&&(d.alphaMap.value=m.alphaMap),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest);let x;m.map?x=m.map:m.alphaMap&&(x=m.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),d.uvTransform.value.copy(x.matrix))}function l(d,m){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,d.rotation.value=m.rotation,m.map&&(d.map.value=m.map),m.alphaMap&&(d.alphaMap.value=m.alphaMap),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest);let _;m.map?_=m.map:m.alphaMap&&(_=m.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),d.uvTransform.value.copy(_.matrix))}function c(d,m){d.specular.value.copy(m.specular),d.shininess.value=Math.max(m.shininess,1e-4)}function u(d,m){m.gradientMap&&(d.gradientMap.value=m.gradientMap)}function f(d,m){d.roughness.value=m.roughness,d.metalness.value=m.metalness,m.roughnessMap&&(d.roughnessMap.value=m.roughnessMap),m.metalnessMap&&(d.metalnessMap.value=m.metalnessMap),e.get(m).envMap&&(d.envMapIntensity.value=m.envMapIntensity)}function h(d,m,_){d.ior.value=m.ior,m.sheen>0&&(d.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),d.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(d.sheenColorMap.value=m.sheenColorMap),m.sheenRoughnessMap&&(d.sheenRoughnessMap.value=m.sheenRoughnessMap)),m.clearcoat>0&&(d.clearcoat.value=m.clearcoat,d.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(d.clearcoatMap.value=m.clearcoatMap),m.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap),m.clearcoatNormalMap&&(d.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),d.clearcoatNormalMap.value=m.clearcoatNormalMap,m.side===dn&&d.clearcoatNormalScale.value.negate())),m.iridescence>0&&(d.iridescence.value=m.iridescence,d.iridescenceIOR.value=m.iridescenceIOR,d.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(d.iridescenceMap.value=m.iridescenceMap),m.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=m.iridescenceThicknessMap)),m.transmission>0&&(d.transmission.value=m.transmission,d.transmissionSamplerMap.value=_.texture,d.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(d.transmissionMap.value=m.transmissionMap),d.thickness.value=m.thickness,m.thicknessMap&&(d.thicknessMap.value=m.thicknessMap),d.attenuationDistance.value=m.attenuationDistance,d.attenuationColor.value.copy(m.attenuationColor)),d.specularIntensity.value=m.specularIntensity,d.specularColor.value.copy(m.specularColor),m.specularIntensityMap&&(d.specularIntensityMap.value=m.specularIntensityMap),m.specularColorMap&&(d.specularColorMap.value=m.specularColorMap)}function p(d,m){m.matcap&&(d.matcap.value=m.matcap)}function g(d,m){d.referencePosition.value.copy(m.referencePosition),d.nearDistance.value=m.nearDistance,d.farDistance.value=m.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function q1(r,e,t,n){let i={},s={},o=[];const a=t.isWebGL2?r.getParameter(35375):0;function l(v,x){const y=x.program;n.uniformBlockBinding(v,y)}function c(v,x){let y=i[v.id];y===void 0&&(g(v),y=u(v),i[v.id]=y,v.addEventListener("dispose",m));const M=x.program;n.updateUBOMapping(v,M);const E=e.render.frame;s[v.id]!==E&&(h(v),s[v.id]=E)}function u(v){const x=f();v.__bindingPointIndex=x;const y=r.createBuffer(),M=v.__size,E=v.usage;return r.bindBuffer(35345,y),r.bufferData(35345,M,E),r.bindBuffer(35345,null),r.bindBufferBase(35345,x,y),y}function f(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const x=i[v.id],y=v.uniforms,M=v.__cache;r.bindBuffer(35345,x);for(let E=0,L=y.length;E<L;E++){const b=y[E];if(p(b,E,M)===!0){const S=b.__offset,I=Array.isArray(b.value)?b.value:[b.value];let X=0;for(let H=0;H<I.length;H++){const N=I[H],O=d(N);typeof N=="number"?(b.__data[0]=N,r.bufferSubData(35345,S+X,b.__data)):N.isMatrix3?(b.__data[0]=N.elements[0],b.__data[1]=N.elements[1],b.__data[2]=N.elements[2],b.__data[3]=N.elements[0],b.__data[4]=N.elements[3],b.__data[5]=N.elements[4],b.__data[6]=N.elements[5],b.__data[7]=N.elements[0],b.__data[8]=N.elements[6],b.__data[9]=N.elements[7],b.__data[10]=N.elements[8],b.__data[11]=N.elements[0]):(N.toArray(b.__data,X),X+=O.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(35345,S,b.__data)}}r.bindBuffer(35345,null)}function p(v,x,y){const M=v.value;if(y[x]===void 0){if(typeof M=="number")y[x]=M;else{const E=Array.isArray(M)?M:[M],L=[];for(let b=0;b<E.length;b++)L.push(E[b].clone());y[x]=L}return!0}else if(typeof M=="number"){if(y[x]!==M)return y[x]=M,!0}else{const E=Array.isArray(y[x])?y[x]:[y[x]],L=Array.isArray(M)?M:[M];for(let b=0;b<E.length;b++){const S=E[b];if(S.equals(L[b])===!1)return S.copy(L[b]),!0}}return!1}function g(v){const x=v.uniforms;let y=0;const M=16;let E=0;for(let L=0,b=x.length;L<b;L++){const S=x[L],I={boundary:0,storage:0},X=Array.isArray(S.value)?S.value:[S.value];for(let H=0,N=X.length;H<N;H++){const O=X[H],W=d(O);I.boundary+=W.boundary,I.storage+=W.storage}if(S.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=y,L>0){E=y%M;const H=M-E;E!==0&&H-I.boundary<0&&(y+=M-E,S.__offset=y)}y+=I.storage}return E=y%M,E>0&&(y+=M-E),v.__size=y,v.__cache={},this}function d(v){const x={boundary:0,storage:0};return typeof v=="number"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function m(v){const x=v.target;x.removeEventListener("dispose",m);const y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),r.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function _(){for(const v in i)r.deleteBuffer(i[v]);o=[],i={},s={}}return{bind:l,update:c,dispose:_}}function Y1(){const r=To("canvas");return r.style.display="block",r}function Vu(r={}){this.isWebGLRenderer=!0;const e=r.canvas!==void 0?r.canvas:Y1(),t=r.context!==void 0?r.context:null,n=r.depth!==void 0?r.depth:!0,i=r.stencil!==void 0?r.stencil:!0,s=r.antialias!==void 0?r.antialias:!1,o=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,a=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,l=r.powerPreference!==void 0?r.powerPreference:"default",c=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=r.alpha!==void 0?r.alpha:!1;let f=null,h=null;const p=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Er,this.useLegacyLights=!0,this.toneMapping=bi,this.toneMappingExposure=1;const d=this;let m=!1,_=0,v=0,x=null,y=-1,M=null;const E=new Ke,L=new Ke;let b=null,S=e.width,I=e.height,X=1,H=null,N=null;const O=new Ke(0,0,S,I),W=new Ke(0,0,S,I);let j=!1;const K=new Uu;let V=!1,ce=!1,se=null;const Me=new Re,k=new F,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function de(){return x===null?X:1}let P=t;function Z(C,Y){for(let ee=0;ee<C.length;ee++){const G=C[ee],oe=e.getContext(G,Y);if(oe!==null)return oe}return null}try{const C={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ru}`),e.addEventListener("webglcontextlost",Ae,!1),e.addEventListener("webglcontextrestored",Pe,!1),e.addEventListener("webglcontextcreationerror",Te,!1),P===null){const Y=["webgl2","webgl","experimental-webgl"];if(d.isWebGL1Renderer===!0&&Y.shift(),P=Z(Y,C),P===null)throw Z(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}P.getShaderPrecisionFormat===void 0&&(P.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let $,re,pe,we,ve,A,D,q,J,te,fe,me,ae,ge,le,T,w,U,Q,ne,he,xe,R,B;function Se(){$=new sS(P),re=new Qw(P,$,r),$.init(re),xe=new V1(P,$,re),pe=new k1(P,$,re),we=new lS,ve=new T1,A=new B1(P,$,pe,ve,re,xe,we),D=new tS(d),q=new rS(d),J=new _b(P,re),R=new Zw(P,$,J,re),te=new oS(P,J,we,R),fe=new hS(P,te,J,we),Q=new fS(P,re,A),T=new eS(ve),me=new S1(d,D,q,$,re,R,T),ae=new j1(d,ve),ge=new A1,le=new I1($,re),U=new Kw(d,D,q,pe,fe,u,o),w=new U1(d,fe,re),B=new q1(P,we,re,pe),ne=new Jw(P,$,we,re),he=new aS(P,$,we,re),we.programs=me.programs,d.capabilities=re,d.extensions=$,d.properties=ve,d.renderLists=ge,d.shadowMap=w,d.state=pe,d.info=we}Se();const ye=new X1(d,P);this.xr=ye,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const C=$.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=$.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(C){C!==void 0&&(X=C,this.setSize(S,I,!1))},this.getSize=function(C){return C.set(S,I)},this.setSize=function(C,Y,ee=!0){if(ye.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}S=C,I=Y,e.width=Math.floor(C*X),e.height=Math.floor(Y*X),ee===!0&&(e.style.width=C+"px",e.style.height=Y+"px"),this.setViewport(0,0,C,Y)},this.getDrawingBufferSize=function(C){return C.set(S*X,I*X).floor()},this.setDrawingBufferSize=function(C,Y,ee){S=C,I=Y,X=ee,e.width=Math.floor(C*ee),e.height=Math.floor(Y*ee),this.setViewport(0,0,C,Y)},this.getCurrentViewport=function(C){return C.copy(E)},this.getViewport=function(C){return C.copy(O)},this.setViewport=function(C,Y,ee,G){C.isVector4?O.set(C.x,C.y,C.z,C.w):O.set(C,Y,ee,G),pe.viewport(E.copy(O).multiplyScalar(X).floor())},this.getScissor=function(C){return C.copy(W)},this.setScissor=function(C,Y,ee,G){C.isVector4?W.set(C.x,C.y,C.z,C.w):W.set(C,Y,ee,G),pe.scissor(L.copy(W).multiplyScalar(X).floor())},this.getScissorTest=function(){return j},this.setScissorTest=function(C){pe.setScissorTest(j=C)},this.setOpaqueSort=function(C){H=C},this.setTransparentSort=function(C){N=C},this.getClearColor=function(C){return C.copy(U.getClearColor())},this.setClearColor=function(){U.setClearColor.apply(U,arguments)},this.getClearAlpha=function(){return U.getClearAlpha()},this.setClearAlpha=function(){U.setClearAlpha.apply(U,arguments)},this.clear=function(C=!0,Y=!0,ee=!0){let G=0;C&&(G|=16384),Y&&(G|=256),ee&&(G|=1024),P.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ae,!1),e.removeEventListener("webglcontextrestored",Pe,!1),e.removeEventListener("webglcontextcreationerror",Te,!1),ge.dispose(),le.dispose(),ve.dispose(),D.dispose(),q.dispose(),fe.dispose(),R.dispose(),B.dispose(),me.dispose(),ye.dispose(),ye.removeEventListener("sessionstart",_e),ye.removeEventListener("sessionend",Ee),se&&(se.dispose(),se=null),Ce.stop()};function Ae(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),m=!0}function Pe(){console.log("THREE.WebGLRenderer: Context Restored."),m=!1;const C=we.autoReset,Y=w.enabled,ee=w.autoUpdate,G=w.needsUpdate,oe=w.type;Se(),we.autoReset=C,w.enabled=Y,w.autoUpdate=ee,w.needsUpdate=G,w.type=oe}function Te(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Ie(C){const Y=C.target;Y.removeEventListener("dispose",Ie),Ge(Y)}function Ge(C){tt(C),ve.remove(C)}function tt(C){const Y=ve.get(C).programs;Y!==void 0&&(Y.forEach(function(ee){me.releaseProgram(ee)}),C.isShaderMaterial&&me.releaseShaderCache(C))}this.renderBufferDirect=function(C,Y,ee,G,oe,Le){Y===null&&(Y=ue);const Oe=oe.isMesh&&oe.matrixWorld.determinant()<0,Ue=Jg(C,Y,ee,G,oe);pe.setMaterial(G,Oe);let Be=ee.index,Ye=1;G.wireframe===!0&&(Be=te.getWireframeAttribute(ee),Ye=2);const We=ee.drawRange,Xe=ee.attributes.position;let gt=We.start*Ye,sn=(We.start+We.count)*Ye;Le!==null&&(gt=Math.max(gt,Le.start*Ye),sn=Math.min(sn,(Le.start+Le.count)*Ye)),Be!==null?(gt=Math.max(gt,0),sn=Math.min(sn,Be.count)):Xe!=null&&(gt=Math.max(gt,0),sn=Math.min(sn,Xe.count));const ai=sn-gt;if(ai<0||ai===1/0)return;R.setup(oe,G,Ue,ee,Be);let Qi,_t=ne;if(Be!==null&&(Qi=J.get(Be),_t=he,_t.setIndex(Qi)),oe.isMesh)G.wireframe===!0?(pe.setLineWidth(G.wireframeLinewidth*de()),_t.setMode(1)):_t.setMode(4);else if(oe.isLine){let je=G.linewidth;je===void 0&&(je=1),pe.setLineWidth(je*de()),oe.isLineSegments?_t.setMode(1):oe.isLineLoop?_t.setMode(2):_t.setMode(3)}else oe.isPoints?_t.setMode(0):oe.isSprite&&_t.setMode(4);if(oe.isInstancedMesh)_t.renderInstances(gt,ai,oe.count);else if(ee.isInstancedBufferGeometry){const je=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,hl=Math.min(ee.instanceCount,je);_t.renderInstances(gt,ai,hl)}else _t.render(gt,ai)},this.compile=function(C,Y){function ee(G,oe,Le){G.transparent===!0&&G.side===hn&&G.forceSinglePass===!1?(G.side=dn,G.needsUpdate=!0,xn(G,oe,Le),G.side=Yi,G.needsUpdate=!0,xn(G,oe,Le),G.side=hn):xn(G,oe,Le)}h=le.get(C),h.init(),g.push(h),C.traverseVisible(function(G){G.isLight&&G.layers.test(Y.layers)&&(h.pushLight(G),G.castShadow&&h.pushShadow(G))}),h.setupLights(d.useLegacyLights),C.traverse(function(G){const oe=G.material;if(oe)if(Array.isArray(oe))for(let Le=0;Le<oe.length;Le++){const Oe=oe[Le];ee(Oe,C,G)}else ee(oe,C,G)}),g.pop(),h=null};let z=null;function ie(C){z&&z(C)}function _e(){Ce.stop()}function Ee(){Ce.start()}const Ce=new Cm;Ce.setAnimationLoop(ie),typeof self<"u"&&Ce.setContext(self),this.setAnimationLoop=function(C){z=C,ye.setAnimationLoop(C),C===null?Ce.stop():Ce.start()},ye.addEventListener("sessionstart",_e),ye.addEventListener("sessionend",Ee),this.render=function(C,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(m===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),ye.enabled===!0&&ye.isPresenting===!0&&(ye.cameraAutoUpdate===!0&&ye.updateCamera(Y),Y=ye.getCamera()),C.isScene===!0&&C.onBeforeRender(d,C,Y,x),h=le.get(C,g.length),h.init(),g.push(h),Me.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),K.setFromProjectionMatrix(Me),ce=this.localClippingEnabled,V=T.init(this.clippingPlanes,ce),f=ge.get(C,p.length),f.init(),p.push(f),rt(C,Y,0,d.sortObjects),f.finish(),d.sortObjects===!0&&f.sort(H,N),V===!0&&T.beginShadows();const ee=h.state.shadowsArray;if(w.render(ee,C,Y),V===!0&&T.endShadows(),this.info.autoReset===!0&&this.info.reset(),U.render(f,C),h.setupLights(d.useLegacyLights),Y.isArrayCamera){const G=Y.cameras;for(let oe=0,Le=G.length;oe<Le;oe++){const Oe=G[oe];St(f,C,Oe,Oe.viewport)}}else St(f,C,Y);x!==null&&(A.updateMultisampleRenderTarget(x),A.updateRenderTargetMipmap(x)),C.isScene===!0&&C.onAfterRender(d,C,Y),R.resetDefaultState(),y=-1,M=null,g.pop(),g.length>0?h=g[g.length-1]:h=null,p.pop(),p.length>0?f=p[p.length-1]:f=null};function rt(C,Y,ee,G){if(C.visible===!1)return;if(C.layers.test(Y.layers)){if(C.isGroup)ee=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(Y);else if(C.isLight)h.pushLight(C),C.castShadow&&h.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||K.intersectsSprite(C)){G&&k.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Me);const Oe=fe.update(C),Ue=C.material;Ue.visible&&f.push(C,Oe,Ue,ee,k.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(C.isSkinnedMesh&&C.skeleton.frame!==we.render.frame&&(C.skeleton.update(),C.skeleton.frame=we.render.frame),!C.frustumCulled||K.intersectsObject(C))){G&&k.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Me);const Oe=fe.update(C),Ue=C.material;if(Array.isArray(Ue)){const Be=Oe.groups;for(let Ye=0,We=Be.length;Ye<We;Ye++){const Xe=Be[Ye],gt=Ue[Xe.materialIndex];gt&&gt.visible&&f.push(C,Oe,gt,ee,k.z,Xe)}}else Ue.visible&&f.push(C,Oe,Ue,ee,k.z,null)}}const Le=C.children;for(let Oe=0,Ue=Le.length;Oe<Ue;Oe++)rt(Le[Oe],Y,ee,G)}function St(C,Y,ee,G){const oe=C.opaque,Le=C.transmissive,Oe=C.transparent;h.setupLightsView(ee),V===!0&&T.setGlobalState(d.clippingPlanes,ee),Le.length>0&&Gt(oe,Y,ee),G&&pe.viewport(E.copy(G)),oe.length>0&&Wn(oe,Y,ee),Le.length>0&&Wn(Le,Y,ee),Oe.length>0&&Wn(Oe,Y,ee),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function Gt(C,Y,ee){const G=re.isWebGL2;se===null&&(se=new Ar(1024,1024,{generateMipmaps:!0,type:$.has("EXT_color_buffer_half_float")?Mo:Tr,minFilter:bo,samples:G&&s===!0?4:0}));const oe=d.getRenderTarget();d.setRenderTarget(se),d.clear();const Le=d.toneMapping;d.toneMapping=bi,Wn(C,Y,ee),d.toneMapping=Le,A.updateMultisampleRenderTarget(se),A.updateRenderTargetMipmap(se),d.setRenderTarget(oe)}function Wn(C,Y,ee){const G=Y.isScene===!0?Y.overrideMaterial:null;for(let oe=0,Le=C.length;oe<Le;oe++){const Oe=C[oe],Ue=Oe.object,Be=Oe.geometry,Ye=G===null?Oe.material:G,We=Oe.group;Ue.layers.test(ee.layers)&&ht(Ue,Y,ee,Be,Ye,We)}}function ht(C,Y,ee,G,oe,Le){C.onBeforeRender(d,Y,ee,G,oe,Le),C.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),oe.onBeforeRender(d,Y,ee,G,C,Le),oe.transparent===!0&&oe.side===hn&&oe.forceSinglePass===!1?(oe.side=dn,oe.needsUpdate=!0,d.renderBufferDirect(ee,Y,G,oe,C,Le),oe.side=Yi,oe.needsUpdate=!0,d.renderBufferDirect(ee,Y,G,oe,C,Le),oe.side=hn):d.renderBufferDirect(ee,Y,G,oe,C,Le),C.onAfterRender(d,Y,ee,G,oe,Le)}function xn(C,Y,ee){Y.isScene!==!0&&(Y=ue);const G=ve.get(C),oe=h.state.lights,Le=h.state.shadowsArray,Oe=oe.state.version,Ue=me.getParameters(C,oe.state,Le,Y,ee),Be=me.getProgramCacheKey(Ue);let Ye=G.programs;G.environment=C.isMeshStandardMaterial?Y.environment:null,G.fog=Y.fog,G.envMap=(C.isMeshStandardMaterial?q:D).get(C.envMap||G.environment),Ye===void 0&&(C.addEventListener("dispose",Ie),Ye=new Map,G.programs=Ye);let We=Ye.get(Be);if(We!==void 0){if(G.currentProgram===We&&G.lightsStateVersion===Oe)return Xn(C,Ue),We}else Ue.uniforms=me.getUniforms(C),C.onBuild(ee,Ue,d),C.onBeforeCompile(Ue,d),We=me.acquireProgram(Ue,Be),Ye.set(Be,We),G.uniforms=Ue.uniforms;const Xe=G.uniforms;(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Xe.clippingPlanes=T.uniform),Xn(C,Ue),G.needsLights=e_(C),G.lightsStateVersion=Oe,G.needsLights&&(Xe.ambientLightColor.value=oe.state.ambient,Xe.lightProbe.value=oe.state.probe,Xe.directionalLights.value=oe.state.directional,Xe.directionalLightShadows.value=oe.state.directionalShadow,Xe.spotLights.value=oe.state.spot,Xe.spotLightShadows.value=oe.state.spotShadow,Xe.rectAreaLights.value=oe.state.rectArea,Xe.ltc_1.value=oe.state.rectAreaLTC1,Xe.ltc_2.value=oe.state.rectAreaLTC2,Xe.pointLights.value=oe.state.point,Xe.pointLightShadows.value=oe.state.pointShadow,Xe.hemisphereLights.value=oe.state.hemi,Xe.directionalShadowMap.value=oe.state.directionalShadowMap,Xe.directionalShadowMatrix.value=oe.state.directionalShadowMatrix,Xe.spotShadowMap.value=oe.state.spotShadowMap,Xe.spotLightMatrix.value=oe.state.spotLightMatrix,Xe.spotLightMap.value=oe.state.spotLightMap,Xe.pointShadowMap.value=oe.state.pointShadowMap,Xe.pointShadowMatrix.value=oe.state.pointShadowMatrix);const gt=We.getUniforms(),sn=ba.seqWithValue(gt.seq,Xe);return G.currentProgram=We,G.uniformsList=sn,We}function Xn(C,Y){const ee=ve.get(C);ee.outputEncoding=Y.outputEncoding,ee.instancing=Y.instancing,ee.skinning=Y.skinning,ee.morphTargets=Y.morphTargets,ee.morphNormals=Y.morphNormals,ee.morphColors=Y.morphColors,ee.morphTargetsCount=Y.morphTargetsCount,ee.numClippingPlanes=Y.numClippingPlanes,ee.numIntersection=Y.numClipIntersection,ee.vertexAlphas=Y.vertexAlphas,ee.vertexTangents=Y.vertexTangents,ee.toneMapping=Y.toneMapping}function Jg(C,Y,ee,G,oe){Y.isScene!==!0&&(Y=ue),A.resetTextureUnits();const Le=Y.fog,Oe=G.isMeshStandardMaterial?Y.environment:null,Ue=x===null?d.outputEncoding:x.isXRRenderTarget===!0?x.texture.encoding:Er,Be=(G.isMeshStandardMaterial?q:D).get(G.envMap||Oe),Ye=G.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,We=!!G.normalMap&&!!ee.attributes.tangent,Xe=!!ee.morphAttributes.position,gt=!!ee.morphAttributes.normal,sn=!!ee.morphAttributes.color,ai=G.toneMapped?d.toneMapping:bi,Qi=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,_t=Qi!==void 0?Qi.length:0,je=ve.get(G),hl=h.state.lights;if(V===!0&&(ce===!0||C!==M)){const on=C===M&&G.id===y;T.setState(G,C,on)}let Tt=!1;G.version===je.__version?(je.needsLights&&je.lightsStateVersion!==hl.state.version||je.outputEncoding!==Ue||oe.isInstancedMesh&&je.instancing===!1||!oe.isInstancedMesh&&je.instancing===!0||oe.isSkinnedMesh&&je.skinning===!1||!oe.isSkinnedMesh&&je.skinning===!0||je.envMap!==Be||G.fog===!0&&je.fog!==Le||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==T.numPlanes||je.numIntersection!==T.numIntersection)||je.vertexAlphas!==Ye||je.vertexTangents!==We||je.morphTargets!==Xe||je.morphNormals!==gt||je.morphColors!==sn||je.toneMapping!==ai||re.isWebGL2===!0&&je.morphTargetsCount!==_t)&&(Tt=!0):(Tt=!0,je.__version=G.version);let er=je.currentProgram;Tt===!0&&(er=xn(G,Y,oe));let ff=!1,zs=!1,dl=!1;const Ht=er.getUniforms(),tr=je.uniforms;if(pe.useProgram(er.program)&&(ff=!0,zs=!0,dl=!0),G.id!==y&&(y=G.id,zs=!0),ff||M!==C){if(Ht.setValue(P,"projectionMatrix",C.projectionMatrix),re.logarithmicDepthBuffer&&Ht.setValue(P,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),M!==C&&(M=C,zs=!0,dl=!0),G.isShaderMaterial||G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshStandardMaterial||G.envMap){const on=Ht.map.cameraPosition;on!==void 0&&on.setValue(P,k.setFromMatrixPosition(C.matrixWorld))}(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Ht.setValue(P,"isOrthographic",C.isOrthographicCamera===!0),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial||G.isShadowMaterial||oe.isSkinnedMesh)&&Ht.setValue(P,"viewMatrix",C.matrixWorldInverse)}if(oe.isSkinnedMesh){Ht.setOptional(P,oe,"bindMatrix"),Ht.setOptional(P,oe,"bindMatrixInverse");const on=oe.skeleton;on&&(re.floatVertexTextures?(on.boneTexture===null&&on.computeBoneTexture(),Ht.setValue(P,"boneTexture",on.boneTexture,A),Ht.setValue(P,"boneTextureSize",on.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const pl=ee.morphAttributes;if((pl.position!==void 0||pl.normal!==void 0||pl.color!==void 0&&re.isWebGL2===!0)&&Q.update(oe,ee,er),(zs||je.receiveShadow!==oe.receiveShadow)&&(je.receiveShadow=oe.receiveShadow,Ht.setValue(P,"receiveShadow",oe.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(tr.envMap.value=Be,tr.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),zs&&(Ht.setValue(P,"toneMappingExposure",d.toneMappingExposure),je.needsLights&&Qg(tr,dl),Le&&G.fog===!0&&ae.refreshFogUniforms(tr,Le),ae.refreshMaterialUniforms(tr,G,X,I,se),ba.upload(P,je.uniformsList,tr,A)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(ba.upload(P,je.uniformsList,tr,A),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Ht.setValue(P,"center",oe.center),Ht.setValue(P,"modelViewMatrix",oe.modelViewMatrix),Ht.setValue(P,"normalMatrix",oe.normalMatrix),Ht.setValue(P,"modelMatrix",oe.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const on=G.uniformsGroups;for(let ml=0,t_=on.length;ml<t_;ml++)if(re.isWebGL2){const hf=on[ml];B.update(hf,er),B.bind(hf,er)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return er}function Qg(C,Y){C.ambientLightColor.needsUpdate=Y,C.lightProbe.needsUpdate=Y,C.directionalLights.needsUpdate=Y,C.directionalLightShadows.needsUpdate=Y,C.pointLights.needsUpdate=Y,C.pointLightShadows.needsUpdate=Y,C.spotLights.needsUpdate=Y,C.spotLightShadows.needsUpdate=Y,C.rectAreaLights.needsUpdate=Y,C.hemisphereLights.needsUpdate=Y}function e_(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(C,Y,ee){ve.get(C.texture).__webglTexture=Y,ve.get(C.depthTexture).__webglTexture=ee;const G=ve.get(C);G.__hasExternalTextures=!0,G.__hasExternalTextures&&(G.__autoAllocateDepthBuffer=ee===void 0,G.__autoAllocateDepthBuffer||$.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,Y){const ee=ve.get(C);ee.__webglFramebuffer=Y,ee.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(C,Y=0,ee=0){x=C,_=Y,v=ee;let G=!0,oe=null,Le=!1,Oe=!1;if(C){const Be=ve.get(C);Be.__useDefaultFramebuffer!==void 0?(pe.bindFramebuffer(36160,null),G=!1):Be.__webglFramebuffer===void 0?A.setupRenderTarget(C):Be.__hasExternalTextures&&A.rebindTextures(C,ve.get(C.texture).__webglTexture,ve.get(C.depthTexture).__webglTexture);const Ye=C.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(Oe=!0);const We=ve.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(oe=We[Y],Le=!0):re.isWebGL2&&C.samples>0&&A.useMultisampledRTT(C)===!1?oe=ve.get(C).__webglMultisampledFramebuffer:oe=We,E.copy(C.viewport),L.copy(C.scissor),b=C.scissorTest}else E.copy(O).multiplyScalar(X).floor(),L.copy(W).multiplyScalar(X).floor(),b=j;if(pe.bindFramebuffer(36160,oe)&&re.drawBuffers&&G&&pe.drawBuffers(C,oe),pe.viewport(E),pe.scissor(L),pe.setScissorTest(b),Le){const Be=ve.get(C.texture);P.framebufferTexture2D(36160,36064,34069+Y,Be.__webglTexture,ee)}else if(Oe){const Be=ve.get(C.texture),Ye=Y||0;P.framebufferTextureLayer(36160,36064,Be.__webglTexture,ee||0,Ye)}y=-1},this.readRenderTargetPixels=function(C,Y,ee,G,oe,Le,Oe){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=ve.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Oe!==void 0&&(Ue=Ue[Oe]),Ue){pe.bindFramebuffer(36160,Ue);try{const Be=C.texture,Ye=Be.format,We=Be.type;if(Ye!==Sn&&xe.convert(Ye)!==P.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Xe=We===Mo&&($.has("EXT_color_buffer_half_float")||re.isWebGL2&&$.has("EXT_color_buffer_float"));if(We!==Tr&&xe.convert(We)!==P.getParameter(35738)&&!(We===Ni&&(re.isWebGL2||$.has("OES_texture_float")||$.has("WEBGL_color_buffer_float")))&&!Xe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=C.width-G&&ee>=0&&ee<=C.height-oe&&P.readPixels(Y,ee,G,oe,xe.convert(Ye),xe.convert(We),Le)}finally{const Be=x!==null?ve.get(x).__webglFramebuffer:null;pe.bindFramebuffer(36160,Be)}}},this.copyFramebufferToTexture=function(C,Y,ee=0){const G=Math.pow(2,-ee),oe=Math.floor(Y.image.width*G),Le=Math.floor(Y.image.height*G);A.setTexture2D(Y,0),P.copyTexSubImage2D(3553,ee,0,0,C.x,C.y,oe,Le),pe.unbindTexture()},this.copyTextureToTexture=function(C,Y,ee,G=0){const oe=Y.image.width,Le=Y.image.height,Oe=xe.convert(ee.format),Ue=xe.convert(ee.type);A.setTexture2D(ee,0),P.pixelStorei(37440,ee.flipY),P.pixelStorei(37441,ee.premultiplyAlpha),P.pixelStorei(3317,ee.unpackAlignment),Y.isDataTexture?P.texSubImage2D(3553,G,C.x,C.y,oe,Le,Oe,Ue,Y.image.data):Y.isCompressedTexture?P.compressedTexSubImage2D(3553,G,C.x,C.y,Y.mipmaps[0].width,Y.mipmaps[0].height,Oe,Y.mipmaps[0].data):P.texSubImage2D(3553,G,C.x,C.y,Oe,Ue,Y.image),G===0&&ee.generateMipmaps&&P.generateMipmap(3553),pe.unbindTexture()},this.copyTextureToTexture3D=function(C,Y,ee,G,oe=0){if(d.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Le=C.max.x-C.min.x+1,Oe=C.max.y-C.min.y+1,Ue=C.max.z-C.min.z+1,Be=xe.convert(G.format),Ye=xe.convert(G.type);let We;if(G.isData3DTexture)A.setTexture3D(G,0),We=32879;else if(G.isDataArrayTexture)A.setTexture2DArray(G,0),We=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(37440,G.flipY),P.pixelStorei(37441,G.premultiplyAlpha),P.pixelStorei(3317,G.unpackAlignment);const Xe=P.getParameter(3314),gt=P.getParameter(32878),sn=P.getParameter(3316),ai=P.getParameter(3315),Qi=P.getParameter(32877),_t=ee.isCompressedTexture?ee.mipmaps[0]:ee.image;P.pixelStorei(3314,_t.width),P.pixelStorei(32878,_t.height),P.pixelStorei(3316,C.min.x),P.pixelStorei(3315,C.min.y),P.pixelStorei(32877,C.min.z),ee.isDataTexture||ee.isData3DTexture?P.texSubImage3D(We,oe,Y.x,Y.y,Y.z,Le,Oe,Ue,Be,Ye,_t.data):ee.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),P.compressedTexSubImage3D(We,oe,Y.x,Y.y,Y.z,Le,Oe,Ue,Be,_t.data)):P.texSubImage3D(We,oe,Y.x,Y.y,Y.z,Le,Oe,Ue,Be,Ye,_t),P.pixelStorei(3314,Xe),P.pixelStorei(32878,gt),P.pixelStorei(3316,sn),P.pixelStorei(3315,ai),P.pixelStorei(32877,Qi),oe===0&&G.generateMipmaps&&P.generateMipmap(We),pe.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?A.setTextureCube(C,0):C.isData3DTexture?A.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?A.setTexture2DArray(C,0):A.setTexture2D(C,0),pe.unbindTexture()},this.resetState=function(){_=0,v=0,x=null,pe.reset(),R.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Object.defineProperties(Vu.prototype,{physicallyCorrectLights:{get:function(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights},set:function(r){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!r}}});class $1 extends Vu{}$1.prototype.isWebGL1Renderer=!0;class K1 extends ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}const _d=new F,xd=new Ke,vd=new Ke,Z1=new F,yd=new Re;class J1 extends kt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Re,this.bindMatrixInverse=new Re}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ke,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,i=this.geometry;xd.fromBufferAttribute(i.attributes.skinIndex,e),vd.fromBufferAttribute(i.attributes.skinWeight,e),_d.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=vd.getComponent(s);if(o!==0){const a=xd.getComponent(s);yd.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Z1.copy(_d).applyMatrix4(yd),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Hc extends ct{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Q1 extends Rt{constructor(e=null,t=1,n=1,i,s,o,a,l,c=Ct,u=Ct,f,h){super(null,o,a,l,c,u,i,s,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const bd=new Re,eT=new Re;class Gu{constructor(e=[],t=[]){this.uuid=Zi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Re)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Re;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:eT;bd.multiplyMatrices(a,t[s]),bd.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Gu(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=_m(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Q1(t,e,e,Sn,Ni);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new Hc),this.bones.push(o),this.boneInverses.push(new Re().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class Im extends Lr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new De(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Md=new F,wd=new F,Sd=new Re,ic=new Ou,ca=new tl;class Om extends ct{constructor(e=new Qt,t=new Im){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Md.fromBufferAttribute(t,i-1),wd.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Md.distanceTo(wd);e.setAttribute("lineDistance",new ut(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ca.copy(n.boundingSphere),ca.applyMatrix4(i),ca.radius+=s,e.ray.intersectsSphere(ca)===!1)return;Sd.copy(i).invert(),ic.copy(e.ray).applyMatrix4(Sd);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new F,u=new F,f=new F,h=new F,p=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const _=Math.max(0,o.start),v=Math.min(g.count,o.start+o.count);for(let x=_,y=v-1;x<y;x+=p){const M=g.getX(x),E=g.getX(x+1);if(c.fromBufferAttribute(m,M),u.fromBufferAttribute(m,E),ic.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const b=e.ray.origin.distanceTo(h);b<e.near||b>e.far||t.push({distance:b,point:f.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,o.start),v=Math.min(m.count,o.start+o.count);for(let x=_,y=v-1;x<y;x+=p){if(c.fromBufferAttribute(m,x),u.fromBufferAttribute(m,x+1),ic.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const E=e.ray.origin.distanceTo(h);E<e.near||E>e.far||t.push({distance:E,point:f.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const Td=new F,Ed=new F;class tT extends Om{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Td.fromBufferAttribute(t,i),Ed.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Td.distanceTo(Ed);e.setAttribute("lineDistance",new ut(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class nT{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);const u=n[i],h=n[i+1]-u,p=(o-u)/h;return(i+p)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),l=t||(o.isVector2?new Fe:new F);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new F,i=[],s=[],o=[],a=new F,l=new Re;for(let p=0;p<=e;p++){const g=p/e;i[p]=this.getTangentAt(g,new F)}s[0]=new F,o[0]=new F;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),f=Math.abs(i[0].y),h=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),h<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(i[p-1],i[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Pt(i[p-1].dot(i[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(i[p],s[p])}if(t===!0){let p=Math.acos(Pt(s[0].dot(s[e]),-1,1));p/=e,i[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(i[g],p*g)),o[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class rl extends Qt{constructor(e=1,t=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const u=[],f=[],h=[],p=[];let g=0;const d=[],m=n/2;let _=0;v(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new ut(f,3)),this.setAttribute("normal",new ut(h,3)),this.setAttribute("uv",new ut(p,2));function v(){const y=new F,M=new F;let E=0;const L=(t-e)/n;for(let b=0;b<=s;b++){const S=[],I=b/s,X=I*(t-e)+e;for(let H=0;H<=i;H++){const N=H/i,O=N*l+a,W=Math.sin(O),j=Math.cos(O);M.x=X*W,M.y=-I*n+m,M.z=X*j,f.push(M.x,M.y,M.z),y.set(W,L,j).normalize(),h.push(y.x,y.y,y.z),p.push(N,1-I),S.push(g++)}d.push(S)}for(let b=0;b<i;b++)for(let S=0;S<s;S++){const I=d[S][b],X=d[S+1][b],H=d[S+1][b+1],N=d[S][b+1];u.push(I,X,N),u.push(X,H,N),E+=6}c.addGroup(_,E,0),_+=E}function x(y){const M=g,E=new Fe,L=new F;let b=0;const S=y===!0?e:t,I=y===!0?1:-1;for(let H=1;H<=i;H++)f.push(0,m*I,0),h.push(0,I,0),p.push(.5,.5),g++;const X=g;for(let H=0;H<=i;H++){const O=H/i*l+a,W=Math.cos(O),j=Math.sin(O);L.x=S*j,L.y=m*I,L.z=S*W,f.push(L.x,L.y,L.z),h.push(0,I,0),E.x=W*.5+.5,E.y=j*.5*I+.5,p.push(E.x,E.y),g++}for(let H=0;H<i;H++){const N=M+H,O=X+H;y===!0?u.push(O,O+1,N):u.push(O+1,O,N),b+=3}c.addGroup(_,b,y===!0?1:2),_+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rl(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Hu extends rl{constructor(e=1,t=1,n=32,i=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Hu(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const ua=new F,fa=new F,rc=new F,ha=new Qn;class iT extends Qt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),s=Math.cos(ls*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],f=new Array(3),h={},p=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:d,b:m,c:_}=ha;if(d.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),_.fromBufferAttribute(a,c[2]),ha.getNormal(rc),f[0]=`${Math.round(d.x*i)},${Math.round(d.y*i)},${Math.round(d.z*i)}`,f[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,f[2]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let v=0;v<3;v++){const x=(v+1)%3,y=f[v],M=f[x],E=ha[u[v]],L=ha[u[x]],b=`${y}_${M}`,S=`${M}_${y}`;S in h&&h[S]?(rc.dot(h[S].normal)<=s&&(p.push(E.x,E.y,E.z),p.push(L.x,L.y,L.z)),h[S]=null):b in h||(h[b]={index0:c[v],index1:c[x],normal:rc.clone()})}}for(const g in h)if(h[g]){const{index0:d,index1:m}=h[g];ua.fromBufferAttribute(a,d),fa.fromBufferAttribute(a,m),p.push(ua.x,ua.y,ua.z),p.push(fa.x,fa.y,fa.z)}this.setAttribute("position",new ut(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class sl extends Qt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new F,h=new F,p=[],g=[],d=[],m=[];for(let _=0;_<=n;_++){const v=[],x=_/n;let y=0;_==0&&o==0?y=.5/t:_==n&&l==Math.PI&&(y=-.5/t);for(let M=0;M<=t;M++){const E=M/t;f.x=-e*Math.cos(i+E*s)*Math.sin(o+x*a),f.y=e*Math.cos(o+x*a),f.z=e*Math.sin(i+E*s)*Math.sin(o+x*a),g.push(f.x,f.y,f.z),h.copy(f).normalize(),d.push(h.x,h.y,h.z),m.push(E+y,1-x),v.push(c++)}u.push(v)}for(let _=0;_<n;_++)for(let v=0;v<t;v++){const x=u[_][v+1],y=u[_][v],M=u[_+1][v],E=u[_+1][v+1];(_!==0||o>0)&&p.push(x,y,E),(_!==n-1||l<Math.PI)&&p.push(y,M,E)}this.setIndex(p),this.setAttribute("position",new ut(g,3)),this.setAttribute("normal",new ut(d,3)),this.setAttribute("uv",new ut(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class sc extends Lr{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new De(16777215),this.specular=new De(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Du,this.normalScale=new Fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Qa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class rT extends Lr{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Du,this.normalScale=new Fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Qa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function Di(r,e,t){return Fm(r)?new r.constructor(r.subarray(e,t!==void 0?t:r.length)):r.slice(e,t)}function da(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Fm(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function sT(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Ad(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)i[o++]=r[a+l]}return i}function Nm(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}class ol{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class oT extends ol{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Dh,endingEnd:Dh}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,o=e+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ih:s=e,a=2*t-n;break;case Oh:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ih:o=e,l=2*n-t;break;case Oh:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,p=this._weightNext,g=(n-t)/(i-t),d=g*g,m=d*g,_=-h*m+2*h*d-h*g,v=(1+h)*m+(-1.5-2*h)*d+(-.5+h)*g+1,x=(-1-p)*m+(1.5+p)*d+.5*g,y=p*m-p*d;for(let M=0;M!==a;++M)s[M]=_*o[u+M]+v*o[c+M]+x*o[l+M]+y*o[f+M];return s}}class aT extends ol{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),f=1-u;for(let h=0;h!==a;++h)s[h]=o[c+h]*f+o[l+h]*u;return s}}class lT extends ol{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class oi{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=da(t,this.TimeBufferType),this.values=da(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:da(e.times,Array),values:da(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new lT(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new aT(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new oT(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ra:t=this.InterpolantFactoryMethodDiscrete;break;case Da:t=this.InterpolantFactoryMethodLinear;break;case Dl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ra;case this.InterpolantFactoryMethodLinear:return Da;case this.InterpolantFactoryMethodSmooth:return Dl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=Di(n,s,o),this.values=Di(this.values,s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&Fm(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=Di(this.times),t=Di(this.values),n=this.getValueSize(),i=this.getInterpolation()===Dl,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{const f=a*n,h=f-n,p=f+n;for(let g=0;g!==n;++g){const d=t[f+g];if(d!==t[h+g]||d!==t[p+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const f=a*n,h=o*n;for(let p=0;p!==n;++p)t[h+p]=t[f+p]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=Di(e,0,o),this.values=Di(t,0,o*n)):(this.times=e,this.values=t),this}clone(){const e=Di(this.times,0),t=Di(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}oi.prototype.TimeBufferType=Float32Array;oi.prototype.ValueBufferType=Float32Array;oi.prototype.DefaultInterpolation=Da;class Os extends oi{}Os.prototype.ValueTypeName="bool";Os.prototype.ValueBufferType=Array;Os.prototype.DefaultInterpolation=Ra;Os.prototype.InterpolantFactoryMethodLinear=void 0;Os.prototype.InterpolantFactoryMethodSmooth=void 0;class zm extends oi{}zm.prototype.ValueTypeName="color";class Eo extends oi{}Eo.prototype.ValueTypeName="number";class cT extends ol{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let u=c+a;c!==u;c+=4)An.slerpFlat(s,0,o,c-a,o,c,l);return s}}class Fs extends oi{InterpolantFactoryMethodLinear(e){return new cT(this.times,this.values,this.getValueSize(),e)}}Fs.prototype.ValueTypeName="quaternion";Fs.prototype.DefaultInterpolation=Da;Fs.prototype.InterpolantFactoryMethodSmooth=void 0;class Ns extends oi{}Ns.prototype.ValueTypeName="string";Ns.prototype.ValueBufferType=Array;Ns.prototype.DefaultInterpolation=Ra;Ns.prototype.InterpolantFactoryMethodLinear=void 0;Ns.prototype.InterpolantFactoryMethodSmooth=void 0;class Ao extends oi{}Ao.prototype.ValueTypeName="vector";class uT{constructor(e,t=-1,n,i=Ay){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Zi(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(hT(n[o]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(oi.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=sT(l);l=Ad(l,1,u),c=Ad(c,1,u),!i&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new Eo(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const f=u[1];let h=i[f];h||(i[f]=h=[]),h.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(f,h,p,g,d){if(p.length!==0){const m=[],_=[];Nm(p,m,_,g),m.length!==0&&d.push(new f(h,m,_))}},i=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let f=0;f<c.length;f++){const h=c[f].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const p={};let g;for(g=0;g<h.length;g++)if(h[g].morphTargets)for(let d=0;d<h[g].morphTargets.length;d++)p[h[g].morphTargets[d]]=-1;for(const d in p){const m=[],_=[];for(let v=0;v!==h[g].morphTargets.length;++v){const x=h[g];m.push(x.time),_.push(x.morphTarget===d?1:0)}i.push(new Eo(".morphTargetInfluence["+d+"]",m,_))}l=p.length*o}else{const p=".bones["+t[f].name+"]";n(Ao,p+".position",h,"pos",i),n(Fs,p+".quaternion",h,"rot",i),n(Ao,p+".scale",h,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function fT(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Eo;case"vector":case"vector2":case"vector3":case"vector4":return Ao;case"color":return zm;case"quaternion":return Fs;case"bool":case"boolean":return Os;case"string":return Ns}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function hT(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=fT(r.type);if(r.times===void 0){const t=[],n=[];Nm(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const Ia={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class dT{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const p=c[f],g=c[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const pT=new dT;class al{constructor(e){this.manager=e!==void 0?e:pT,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const pi={};class mT extends Error{constructor(e,t){super(e),this.response=t}}class gT extends al{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Ia.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(pi[e]!==void 0){pi[e].push({onLoad:t,onProgress:n,onError:i});return}pi[e]=[],pi[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=pi[e],f=c.body.getReader(),h=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),p=h?parseInt(h):0,g=p!==0;let d=0;const m=new ReadableStream({start(_){v();function v(){f.read().then(({done:x,value:y})=>{if(x)_.close();else{d+=y.byteLength;const M=new ProgressEvent("progress",{lengthComputable:g,loaded:d,total:p});for(let E=0,L=u.length;E<L;E++){const b=u[E];b.onProgress&&b.onProgress(M)}_.enqueue(y),v()}})}}});return new Response(m)}else throw new mT(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),h=f&&f[1]?f[1].toLowerCase():void 0,p=new TextDecoder(h);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{Ia.add(e,c);const u=pi[e];delete pi[e];for(let f=0,h=u.length;f<h;f++){const p=u[f];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=pi[e];if(u===void 0)throw this.manager.itemError(e),c;delete pi[e];for(let f=0,h=u.length;f<h;f++){const p=u[f];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class _T extends al{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Ia.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=To("img");function l(){u(),Ia.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(f){u(),i&&i(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class Um extends al{constructor(e){super(e)}load(e,t,n,i){const s=new Rt,o=new _T(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class ll extends ct{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new De(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const oc=new Re,Cd=new F,Pd=new F;class Wu{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Fe(512,512),this.map=null,this.mapPass=null,this.matrix=new Re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Uu,this._frameExtents=new Fe(1,1),this._viewportCount=1,this._viewports=[new Ke(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Cd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Cd),Pd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Pd),t.updateMatrixWorld(),oc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(oc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(oc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class xT extends Wu{constructor(){super(new qt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=So*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class vT extends ll{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ct.DEFAULT_UP),this.updateMatrix(),this.target=new ct,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new xT}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Ld=new Re,qs=new F,ac=new F;class yT extends Wu{constructor(){super(new qt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Fe(4,2),this._viewportCount=6,this._viewports=[new Ke(2,1,1,1),new Ke(0,1,1,1),new Ke(3,1,1,1),new Ke(1,1,1,1),new Ke(3,0,1,1),new Ke(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),qs.setFromMatrixPosition(e.matrixWorld),n.position.copy(qs),ac.copy(n.position),ac.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ac),n.updateMatrixWorld(),i.makeTranslation(-qs.x,-qs.y,-qs.z),Ld.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ld)}}class Rd extends ll{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new yT}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class bT extends Wu{constructor(){super(new ku(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class km extends ll{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ct.DEFAULT_UP),this.updateMatrix(),this.target=new ct,this.shadow=new bT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Bm extends ll{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class MT{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class wT{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Dd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Dd();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Dd(){return(typeof performance>"u"?Date:performance).now()}const Xu="\\[\\]\\.:\\/",ST=new RegExp("["+Xu+"]","g"),ju="[^"+Xu+"]",TT="[^"+Xu.replace("\\.","")+"]",ET=/((?:WC+[\/:])*)/.source.replace("WC",ju),AT=/(WCOD+)?/.source.replace("WCOD",TT),CT=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ju),PT=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ju),LT=new RegExp("^"+ET+AT+CT+PT+"$"),RT=["material","materials","bones","map"];class DT{constructor(e,t,n){const i=n||$e.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class $e{constructor(e,t,n){this.path=t,this.parsedPath=n||$e.parseTrackName(t),this.node=$e.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new $e.Composite(e,t,n):new $e(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(ST,"")}static parseTrackName(e){const t=LT.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);RT.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=$e.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}$e.Composite=DT;$e.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};$e.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};$e.prototype.GetterByBindingType=[$e.prototype._getValue_direct,$e.prototype._getValue_array,$e.prototype._getValue_arrayElement,$e.prototype._getValue_toArray];$e.prototype.SetterByBindingTypeAndVersioning=[[$e.prototype._setValue_direct,$e.prototype._setValue_direct_setNeedsUpdate,$e.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_array,$e.prototype._setValue_array_setNeedsUpdate,$e.prototype._setValue_array_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_arrayElement,$e.prototype._setValue_arrayElement_setNeedsUpdate,$e.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_fromArray,$e.prototype._setValue_fromArray_setNeedsUpdate,$e.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class IT{constructor(e,t,n=0,i=1/0){this.ray=new Ou(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Fu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Wc(e,this,n,t),n.sort(Id),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Wc(e[i],this,n,t);return n.sort(Id),n}}function Id(r,e){return r.distance-e.distance}function Wc(r,e,t,n){if(r.layers.test(e.layers)&&r.raycast(e,t),n===!0){const i=r.children;for(let s=0,o=i.length;s<o;s++)Wc(i[s],e,t,!0)}}class Od{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Pt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ru}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ru);const ei={mesh:"#1B3045",head:"#ffffff",soundLine:"#4f90bb",risingColor:"#5588aa",liveColor:"#ffffff",radarColor:"#ff8800",wall:"#fab73f",circle:"#00bbff",ball:"#fab73f",cone:"#ffff00"};class OT{constructor(e,t,n){Je(this,"scene");Je(this,"top");Je(this,"height");this.scene=e,this.top=t,this.height=n,this.init({color:ei.cone,height:60,position:{x:0,y:20,z:0}})}init(e){const t=new Hu(15,30,4),n=new mn({uniforms:{u_color:{value:new De(e.color)},u_height:this.height,u_top:this.top},side:hn,depthTest:!1,vertexShader:`
        uniform float u_height;  
        uniform float u_top;  
        void main() {
          float f_angle = u_height / 10.0;
          float new_x = position.x * cos(f_angle) - position.z * sin(f_angle);
          float new_y = position.y;
          float new_z = position.z * cos(f_angle) + position.x * sin(f_angle);

          vec4 v_position = vec4(new_x, new_y + u_top, new_z, 1.0);

          gl_Position = projectionMatrix * modelViewMatrix * v_position;
        }
      `,fragmentShader:`
        uniform vec3 u_color;        
      
        void main() {
          gl_FragColor = vec4(u_color, 0.6);
        }
      `,transparent:!0}),i=new kt(t,n);i.position.copy(new F(e.position.x,e.position.y,e.position.z)),i.rotateZ(Math.PI),this.scene.add(i)}}class FT{constructor(e,t){Je(this,"scene");Je(this,"time");this.scene=e,this.time=t,this.init({color:ei.ball,height:60,opacity:.6,speed:4,position:{x:300,y:0,z:-200}})}init(e){const t=new sl(50,32,32,Math.PI/2,Math.PI*2,0,Math.PI/2),n=new mn({uniforms:{u_color:{value:new De(e.color)},u_height:{value:e.height},u_opacity:{value:e.opacity},u_speed:{value:e.speed},u_time:this.time},side:hn,depthTest:!1,vertexShader:`
        uniform float u_time;
        uniform float u_height;
        uniform float u_speed;
        
        varying float v_opacity;
        
        void main() {
          vec3 v_position = position * mod(u_time / u_speed, 1.0);
          
          v_opacity = mix(1.0, 0.0, position.y / u_height);
          
          gl_Position = projectionMatrix * modelViewMatrix * vec4(v_position, 1.0);
        }
      `,fragmentShader:`
        uniform vec3 u_color;
        uniform float u_opacity;
        
        varying float v_opacity;
      
        void main() {
          gl_FragColor = vec4(u_color, u_opacity * v_opacity);
        }
      `,transparent:!0}),i=new kt(t,n);i.position.copy(new F(e.position.x,e.position.y,e.position.z)),this.scene.add(i)}}/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.6.9
*/var Fd=function(r){return URL.createObjectURL(new Blob([r],{type:"text/javascript"}))};try{URL.revokeObjectURL(Fd(""))}catch{Fd=function(e){return"data:application/javascript;charset=UTF-8,"+encodeURI(e)}}var Tn=Uint8Array,Ui=Uint16Array,Xc=Uint32Array,Vm=new Tn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Gm=new Tn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),NT=new Tn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Hm=function(r,e){for(var t=new Ui(31),n=0;n<31;++n)t[n]=e+=1<<r[n-1];for(var i=new Xc(t[30]),n=1;n<30;++n)for(var s=t[n];s<t[n+1];++s)i[s]=s-t[n]<<5|n;return[t,i]},Wm=Hm(Vm,2),Xm=Wm[0],zT=Wm[1];Xm[28]=258,zT[258]=28;var UT=Hm(Gm,0),kT=UT[0],jc=new Ui(32768);for(var st=0;st<32768;++st){var Ii=(st&43690)>>>1|(st&21845)<<1;Ii=(Ii&52428)>>>2|(Ii&13107)<<2,Ii=(Ii&61680)>>>4|(Ii&3855)<<4,jc[st]=((Ii&65280)>>>8|(Ii&255)<<8)>>>1}var ao=function(r,e,t){for(var n=r.length,i=0,s=new Ui(e);i<n;++i)++s[r[i]-1];var o=new Ui(e);for(i=0;i<e;++i)o[i]=o[i-1]+s[i-1]<<1;var a;if(t){a=new Ui(1<<e);var l=15-e;for(i=0;i<n;++i)if(r[i])for(var c=i<<4|r[i],u=e-r[i],f=o[r[i]-1]++<<u,h=f|(1<<u)-1;f<=h;++f)a[jc[f]>>>l]=c}else for(a=new Ui(n),i=0;i<n;++i)r[i]&&(a[i]=jc[o[r[i]-1]++]>>>15-r[i]);return a},zo=new Tn(288);for(var st=0;st<144;++st)zo[st]=8;for(var st=144;st<256;++st)zo[st]=9;for(var st=256;st<280;++st)zo[st]=7;for(var st=280;st<288;++st)zo[st]=8;var jm=new Tn(32);for(var st=0;st<32;++st)jm[st]=5;var BT=ao(zo,9,1),VT=ao(jm,5,1),lc=function(r){for(var e=r[0],t=1;t<r.length;++t)r[t]>e&&(e=r[t]);return e},Nn=function(r,e,t){var n=e/8|0;return(r[n]|r[n+1]<<8)>>(e&7)&t},cc=function(r,e){var t=e/8|0;return(r[t]|r[t+1]<<8|r[t+2]<<16)>>(e&7)},GT=function(r){return(r/8|0)+(r&7&&1)},HT=function(r,e,t){(e==null||e<0)&&(e=0),(t==null||t>r.length)&&(t=r.length);var n=new(r instanceof Ui?Ui:r instanceof Xc?Xc:Tn)(t-e);return n.set(r.subarray(e,t)),n},WT=function(r,e,t){var n=r.length;if(!n||t&&!t.l&&n<5)return e||new Tn(0);var i=!e||t,s=!t||t.i;t||(t={}),e||(e=new Tn(n*3));var o=function(Z){var $=e.length;if(Z>$){var re=new Tn(Math.max($*2,Z));re.set(e),e=re}},a=t.f||0,l=t.p||0,c=t.b||0,u=t.l,f=t.d,h=t.m,p=t.n,g=n*8;do{if(!u){t.f=a=Nn(r,l,1);var d=Nn(r,l+1,3);if(l+=3,d)if(d==1)u=BT,f=VT,h=9,p=5;else if(d==2){var x=Nn(r,l,31)+257,y=Nn(r,l+10,15)+4,M=x+Nn(r,l+5,31)+1;l+=14;for(var E=new Tn(M),L=new Tn(19),b=0;b<y;++b)L[NT[b]]=Nn(r,l+b*3,7);l+=y*3;for(var S=lc(L),I=(1<<S)-1,X=ao(L,S,1),b=0;b<M;){var H=X[Nn(r,l,I)];l+=H&15;var m=H>>>4;if(m<16)E[b++]=m;else{var N=0,O=0;for(m==16?(O=3+Nn(r,l,3),l+=2,N=E[b-1]):m==17?(O=3+Nn(r,l,7),l+=3):m==18&&(O=11+Nn(r,l,127),l+=7);O--;)E[b++]=N}}var W=E.subarray(0,x),j=E.subarray(x);h=lc(W),p=lc(j),u=ao(W,h,1),f=ao(j,p,1)}else throw"invalid block type";else{var m=GT(l)+4,_=r[m-4]|r[m-3]<<8,v=m+_;if(v>n){if(s)throw"unexpected EOF";break}i&&o(c+_),e.set(r.subarray(m,v),c),t.b=c+=_,t.p=l=v*8;continue}if(l>g){if(s)throw"unexpected EOF";break}}i&&o(c+131072);for(var K=(1<<h)-1,V=(1<<p)-1,ce=l;;ce=l){var N=u[cc(r,l)&K],se=N>>>4;if(l+=N&15,l>g){if(s)throw"unexpected EOF";break}if(!N)throw"invalid length/literal";if(se<256)e[c++]=se;else if(se==256){ce=l,u=null;break}else{var Me=se-254;if(se>264){var b=se-257,k=Vm[b];Me=Nn(r,l,(1<<k)-1)+Xm[b],l+=k}var ue=f[cc(r,l)&V],de=ue>>>4;if(!ue)throw"invalid distance";l+=ue&15;var j=kT[de];if(de>3){var k=Gm[de];j+=cc(r,l)&(1<<k)-1,l+=k}if(l>g){if(s)throw"unexpected EOF";break}i&&o(c+131072);for(var P=c+Me;c<P;c+=4)e[c]=e[c-j],e[c+1]=e[c+1-j],e[c+2]=e[c+2-j],e[c+3]=e[c+3-j];c=P}}t.l=u,t.p=ce,t.b=c,u&&(a=1,t.m=h,t.d=f,t.n=p)}while(!a);return c==e.length?e:HT(e,0,c)},XT=new Tn(0),jT=function(r){if((r[0]&15)!=8||r[0]>>>4>7||(r[0]<<8|r[1])%31)throw"invalid zlib data";if(r[1]&32)throw"invalid zlib data: preset dictionaries not supported"};function qT(r,e){return WT((jT(r),r.subarray(2,-4)),e)}var YT=typeof TextDecoder<"u"&&new TextDecoder,$T=0;try{YT.decode(XT,{stream:!0}),$T=1}catch{}function qm(r,e,t){const n=t.length-r-1;if(e>=t[n])return n-1;if(e<=t[r])return r;let i=r,s=n,o=Math.floor((i+s)/2);for(;e<t[o]||e>=t[o+1];)e<t[o]?s=o:i=o,o=Math.floor((i+s)/2);return o}function KT(r,e,t,n){const i=[],s=[],o=[];i[0]=1;for(let a=1;a<=t;++a){s[a]=e-n[r+1-a],o[a]=n[r+a]-e;let l=0;for(let c=0;c<a;++c){const u=o[c+1],f=s[a-c],h=i[c]/(u+f);i[c]=l+u*h,l=f*h}i[a]=l}return i}function ZT(r,e,t,n){const i=qm(r,n,e),s=KT(i,n,r,e),o=new Ke(0,0,0,0);for(let a=0;a<=r;++a){const l=t[i-r+a],c=s[a],u=l.w*c;o.x+=l.x*u,o.y+=l.y*u,o.z+=l.z*u,o.w+=l.w*c}return o}function JT(r,e,t,n,i){const s=[];for(let f=0;f<=t;++f)s[f]=0;const o=[];for(let f=0;f<=n;++f)o[f]=s.slice(0);const a=[];for(let f=0;f<=t;++f)a[f]=s.slice(0);a[0][0]=1;const l=s.slice(0),c=s.slice(0);for(let f=1;f<=t;++f){l[f]=e-i[r+1-f],c[f]=i[r+f]-e;let h=0;for(let p=0;p<f;++p){const g=c[p+1],d=l[f-p];a[f][p]=g+d;const m=a[p][f-1]/a[f][p];a[p][f]=h+g*m,h=d*m}a[f][f]=h}for(let f=0;f<=t;++f)o[0][f]=a[f][t];for(let f=0;f<=t;++f){let h=0,p=1;const g=[];for(let d=0;d<=t;++d)g[d]=s.slice(0);g[0][0]=1;for(let d=1;d<=n;++d){let m=0;const _=f-d,v=t-d;f>=d&&(g[p][0]=g[h][0]/a[v+1][_],m=g[p][0]*a[_][v]);const x=_>=-1?1:-_,y=f-1<=v?d-1:t-f;for(let E=x;E<=y;++E)g[p][E]=(g[h][E]-g[h][E-1])/a[v+1][_+E],m+=g[p][E]*a[_+E][v];f<=v&&(g[p][d]=-g[h][d-1]/a[v+1][f],m+=g[p][d]*a[f][v]),o[d][f]=m;const M=h;h=p,p=M}}let u=t;for(let f=1;f<=n;++f){for(let h=0;h<=t;++h)o[f][h]*=u;u*=t-f}return o}function QT(r,e,t,n,i){const s=i<r?i:r,o=[],a=qm(r,n,e),l=JT(a,n,r,s,e),c=[];for(let u=0;u<t.length;++u){const f=t[u].clone(),h=f.w;f.x*=h,f.y*=h,f.z*=h,c[u]=f}for(let u=0;u<=s;++u){const f=c[a-r].clone().multiplyScalar(l[u][0]);for(let h=1;h<=r;++h)f.add(c[a-r+h].clone().multiplyScalar(l[u][h]));o[u]=f}for(let u=s+1;u<=i+1;++u)o[u]=new Ke(0,0,0);return o}function eE(r,e){let t=1;for(let i=2;i<=r;++i)t*=i;let n=1;for(let i=2;i<=e;++i)n*=i;for(let i=2;i<=r-e;++i)n*=i;return t/n}function tE(r){const e=r.length,t=[],n=[];for(let s=0;s<e;++s){const o=r[s];t[s]=new F(o.x,o.y,o.z),n[s]=o.w}const i=[];for(let s=0;s<e;++s){const o=t[s].clone();for(let a=1;a<=s;++a)o.sub(i[s-a].clone().multiplyScalar(eE(s,a)*n[a]));i[s]=o.divideScalar(n[0])}return i}function nE(r,e,t,n,i){const s=QT(r,e,t,n,i);return tE(s)}class iE extends nT{constructor(e,t,n,i,s){super(),this.degree=e,this.knots=t,this.controlPoints=[],this.startKnot=i||0,this.endKnot=s||this.knots.length-1;for(let o=0;o<n.length;++o){const a=n[o];this.controlPoints[o]=new Ke(a.x,a.y,a.z,a.w)}}getPoint(e,t=new F){const n=t,i=this.knots[this.startKnot]+e*(this.knots[this.endKnot]-this.knots[this.startKnot]),s=ZT(this.degree,this.knots,this.controlPoints,i);return s.w!==1&&s.divideScalar(s.w),n.set(s.x,s.y,s.z)}getTangent(e,t=new F){const n=t,i=this.knots[0]+e*(this.knots[this.knots.length-1]-this.knots[0]),s=nE(this.degree,this.knots,this.controlPoints,i,1);return n.copy(s[1]).normalize(),n}}let Ve,dt,Kt;class rE extends al{constructor(e){super(e)}load(e,t,n,i){const s=this,o=s.path===""?MT.extractUrlBase(e):s.path,a=new gT(this.manager);a.setPath(s.path),a.setResponseType("arraybuffer"),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(e,function(l){try{t(s.parse(l,o))}catch(c){i?i(c):console.error(c),s.manager.itemError(e)}},n,i)}parse(e,t){if(uE(e))Ve=new cE().parse(e);else{const i=Zm(e);if(!fE(i))throw new Error("THREE.FBXLoader: Unknown format.");if(zd(i)<7e3)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+zd(i));Ve=new lE().parse(i)}const n=new Um(this.manager).setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);return new sE(n,this.manager).parse(Ve)}}class sE{constructor(e,t){this.textureLoader=e,this.manager=t}parse(){dt=this.parseConnections();const e=this.parseImages(),t=this.parseTextures(e),n=this.parseMaterials(t),i=this.parseDeformers(),s=new oE().parse(i);return this.parseScene(i,s,n),Kt}parseConnections(){const e=new Map;return"Connections"in Ve&&Ve.Connections.connections.forEach(function(n){const i=n[0],s=n[1],o=n[2];e.has(i)||e.set(i,{parents:[],children:[]});const a={ID:s,relationship:o};e.get(i).parents.push(a),e.has(s)||e.set(s,{parents:[],children:[]});const l={ID:i,relationship:o};e.get(s).children.push(l)}),e}parseImages(){const e={},t={};if("Video"in Ve.Objects){const n=Ve.Objects.Video;for(const i in n){const s=n[i],o=parseInt(i);if(e[o]=s.RelativeFilename||s.Filename,"Content"in s){const a=s.Content instanceof ArrayBuffer&&s.Content.byteLength>0,l=typeof s.Content=="string"&&s.Content!=="";if(a||l){const c=this.parseImage(n[i]);t[s.RelativeFilename||s.Filename]=c}}}}for(const n in e){const i=e[n];t[i]!==void 0?e[n]=t[i]:e[n]=e[n].split("\\").pop()}return e}parseImage(e){const t=e.Content,n=e.RelativeFilename||e.Filename,i=n.slice(n.lastIndexOf(".")+1).toLowerCase();let s;switch(i){case"bmp":s="image/bmp";break;case"jpg":case"jpeg":s="image/jpeg";break;case"png":s="image/png";break;case"tif":s="image/tiff";break;case"tga":this.manager.getHandler(".tga")===null&&console.warn("FBXLoader: TGA loader not found, skipping ",n),s="image/tga";break;default:console.warn('FBXLoader: Image type "'+i+'" is not supported.');return}if(typeof t=="string")return"data:"+s+";base64,"+t;{const o=new Uint8Array(t);return window.URL.createObjectURL(new Blob([o],{type:s}))}}parseTextures(e){const t=new Map;if("Texture"in Ve.Objects){const n=Ve.Objects.Texture;for(const i in n){const s=this.parseTexture(n[i],e);t.set(parseInt(i),s)}}return t}parseTexture(e,t){const n=this.loadTexture(e,t);n.ID=e.id,n.name=e.attrName;const i=e.WrapModeU,s=e.WrapModeV,o=i!==void 0?i.value:0,a=s!==void 0?s.value:0;if(n.wrapS=o===0?yo:un,n.wrapT=a===0?yo:un,"Scaling"in e){const l=e.Scaling.value;n.repeat.x=l[0],n.repeat.y=l[1]}if("Translation"in e){const l=e.Translation.value;n.offset.x=l[0],n.offset.y=l[1]}return n}loadTexture(e,t){let n;const i=this.textureLoader.path,s=dt.get(e.id).children;s!==void 0&&s.length>0&&t[s[0].ID]!==void 0&&(n=t[s[0].ID],(n.indexOf("blob:")===0||n.indexOf("data:")===0)&&this.textureLoader.setPath(void 0));let o;const a=e.FileName.slice(-3).toLowerCase();if(a==="tga"){const l=this.manager.getHandler(".tga");l===null?(console.warn("FBXLoader: TGA loader not found, creating placeholder texture for",e.RelativeFilename),o=new Rt):(l.setPath(this.textureLoader.path),o=l.load(n))}else a==="psd"?(console.warn("FBXLoader: PSD textures are not supported, creating placeholder texture for",e.RelativeFilename),o=new Rt):o=this.textureLoader.load(n);return this.textureLoader.setPath(i),o}parseMaterials(e){const t=new Map;if("Material"in Ve.Objects){const n=Ve.Objects.Material;for(const i in n){const s=this.parseMaterial(n[i],e);s!==null&&t.set(parseInt(i),s)}}return t}parseMaterial(e,t){const n=e.id,i=e.attrName;let s=e.ShadingModel;if(typeof s=="object"&&(s=s.value),!dt.has(n))return null;const o=this.parseParameters(e,t,n);let a;switch(s.toLowerCase()){case"phong":a=new sc;break;case"lambert":a=new rT;break;default:console.warn('THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.',s),a=new sc;break}return a.setValues(o),a.name=i,a}parseParameters(e,t,n){const i={};e.BumpFactor&&(i.bumpScale=e.BumpFactor.value),e.Diffuse?i.color=new De().fromArray(e.Diffuse.value):e.DiffuseColor&&(e.DiffuseColor.type==="Color"||e.DiffuseColor.type==="ColorRGB")&&(i.color=new De().fromArray(e.DiffuseColor.value)),e.DisplacementFactor&&(i.displacementScale=e.DisplacementFactor.value),e.Emissive?i.emissive=new De().fromArray(e.Emissive.value):e.EmissiveColor&&(e.EmissiveColor.type==="Color"||e.EmissiveColor.type==="ColorRGB")&&(i.emissive=new De().fromArray(e.EmissiveColor.value)),e.EmissiveFactor&&(i.emissiveIntensity=parseFloat(e.EmissiveFactor.value)),e.Opacity&&(i.opacity=parseFloat(e.Opacity.value)),i.opacity<1&&(i.transparent=!0),e.ReflectionFactor&&(i.reflectivity=e.ReflectionFactor.value),e.Shininess&&(i.shininess=e.Shininess.value),e.Specular?i.specular=new De().fromArray(e.Specular.value):e.SpecularColor&&e.SpecularColor.type==="Color"&&(i.specular=new De().fromArray(e.SpecularColor.value));const s=this;return dt.get(n).children.forEach(function(o){const a=o.relationship;switch(a){case"Bump":i.bumpMap=s.getTexture(t,o.ID);break;case"Maya|TEX_ao_map":i.aoMap=s.getTexture(t,o.ID);break;case"DiffuseColor":case"Maya|TEX_color_map":i.map=s.getTexture(t,o.ID),i.map!==void 0&&(i.map.encoding=Qe);break;case"DisplacementColor":i.displacementMap=s.getTexture(t,o.ID);break;case"EmissiveColor":i.emissiveMap=s.getTexture(t,o.ID),i.emissiveMap!==void 0&&(i.emissiveMap.encoding=Qe);break;case"NormalMap":case"Maya|TEX_normal_map":i.normalMap=s.getTexture(t,o.ID);break;case"ReflectionColor":i.envMap=s.getTexture(t,o.ID),i.envMap!==void 0&&(i.envMap.mapping=La,i.envMap.encoding=Qe);break;case"SpecularColor":i.specularMap=s.getTexture(t,o.ID),i.specularMap!==void 0&&(i.specularMap.encoding=Qe);break;case"TransparentColor":case"TransparencyFactor":i.alphaMap=s.getTexture(t,o.ID),i.transparent=!0;break;case"AmbientColor":case"ShininessExponent":case"SpecularFactor":case"VectorDisplacementColor":default:console.warn("THREE.FBXLoader: %s map is not supported in three.js, skipping texture.",a);break}}),i}getTexture(e,t){return"LayeredTexture"in Ve.Objects&&t in Ve.Objects.LayeredTexture&&(console.warn("THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer."),t=dt.get(t).children[0].ID),e.get(t)}parseDeformers(){const e={},t={};if("Deformer"in Ve.Objects){const n=Ve.Objects.Deformer;for(const i in n){const s=n[i],o=dt.get(parseInt(i));if(s.attrType==="Skin"){const a=this.parseSkeleton(o,n);a.ID=i,o.parents.length>1&&console.warn("THREE.FBXLoader: skeleton attached to more than one geometry is not supported."),a.geometryID=o.parents[0].ID,e[i]=a}else if(s.attrType==="BlendShape"){const a={id:i};a.rawTargets=this.parseMorphTargets(o,n),a.id=i,o.parents.length>1&&console.warn("THREE.FBXLoader: morph target attached to more than one geometry is not supported."),t[i]=a}}}return{skeletons:e,morphTargets:t}}parseSkeleton(e,t){const n=[];return e.children.forEach(function(i){const s=t[i.ID];if(s.attrType!=="Cluster")return;const o={ID:i.ID,indices:[],weights:[],transformLink:new Re().fromArray(s.TransformLink.a)};"Indexes"in s&&(o.indices=s.Indexes.a,o.weights=s.Weights.a),n.push(o)}),{rawBones:n,bones:[]}}parseMorphTargets(e,t){const n=[];for(let i=0;i<e.children.length;i++){const s=e.children[i],o=t[s.ID],a={name:o.attrName,initialWeight:o.DeformPercent,id:o.id,fullWeights:o.FullWeights.a};if(o.attrType!=="BlendShapeChannel")return;a.geoID=dt.get(parseInt(s.ID)).children.filter(function(l){return l.relationship===void 0})[0].ID,n.push(a)}return n}parseScene(e,t,n){Kt=new es;const i=this.parseModels(e.skeletons,t,n),s=Ve.Objects.Model,o=this;i.forEach(function(l){const c=s[l.ID];o.setLookAtProperties(l,c),dt.get(l.ID).parents.forEach(function(f){const h=i.get(f.ID);h!==void 0&&h.add(l)}),l.parent===null&&Kt.add(l)}),this.bindSkeleton(e.skeletons,t,i),this.createAmbientLight(),Kt.traverse(function(l){if(l.userData.transformData){l.parent&&(l.userData.transformData.parentMatrix=l.parent.matrix,l.userData.transformData.parentMatrixWorld=l.parent.matrixWorld);const c=$m(l.userData.transformData);l.applyMatrix4(c),l.updateWorldMatrix()}});const a=new aE().parse();Kt.children.length===1&&Kt.children[0].isGroup&&(Kt.children[0].animations=a,Kt=Kt.children[0]),Kt.animations=a}parseModels(e,t,n){const i=new Map,s=Ve.Objects.Model;for(const o in s){const a=parseInt(o),l=s[o],c=dt.get(a);let u=this.buildSkeleton(c,e,a,l.attrName);if(!u){switch(l.attrType){case"Camera":u=this.createCamera(c);break;case"Light":u=this.createLight(c);break;case"Mesh":u=this.createMesh(c,t,n);break;case"NurbsCurve":u=this.createCurve(c,t);break;case"LimbNode":case"Root":u=new Hc;break;case"Null":default:u=new es;break}u.name=l.attrName?$e.sanitizeNodeName(l.attrName):"",u.ID=a}this.getTransformData(u,l),i.set(a,u)}return i}buildSkeleton(e,t,n,i){let s=null;return e.parents.forEach(function(o){for(const a in t){const l=t[a];l.rawBones.forEach(function(c,u){if(c.ID===o.ID){const f=s;s=new Hc,s.matrixWorld.copy(c.transformLink),s.name=i?$e.sanitizeNodeName(i):"",s.ID=n,l.bones[u]=s,f!==null&&s.add(f)}})}}),s}createCamera(e){let t,n;if(e.children.forEach(function(i){const s=Ve.Objects.NodeAttribute[i.ID];s!==void 0&&(n=s)}),n===void 0)t=new ct;else{let i=0;n.CameraProjectionType!==void 0&&n.CameraProjectionType.value===1&&(i=1);let s=1;n.NearPlane!==void 0&&(s=n.NearPlane.value/1e3);let o=1e3;n.FarPlane!==void 0&&(o=n.FarPlane.value/1e3);let a=window.innerWidth,l=window.innerHeight;n.AspectWidth!==void 0&&n.AspectHeight!==void 0&&(a=n.AspectWidth.value,l=n.AspectHeight.value);const c=a/l;let u=45;n.FieldOfView!==void 0&&(u=n.FieldOfView.value);const f=n.FocalLength?n.FocalLength.value:null;switch(i){case 0:t=new qt(u,c,s,o),f!==null&&t.setFocalLength(f);break;case 1:t=new ku(-a/2,a/2,l/2,-l/2,s,o);break;default:console.warn("THREE.FBXLoader: Unknown camera type "+i+"."),t=new ct;break}}return t}createLight(e){let t,n;if(e.children.forEach(function(i){const s=Ve.Objects.NodeAttribute[i.ID];s!==void 0&&(n=s)}),n===void 0)t=new ct;else{let i;n.LightType===void 0?i=0:i=n.LightType.value;let s=16777215;n.Color!==void 0&&(s=new De().fromArray(n.Color.value));let o=n.Intensity===void 0?1:n.Intensity.value/100;n.CastLightOnObject!==void 0&&n.CastLightOnObject.value===0&&(o=0);let a=0;n.FarAttenuationEnd!==void 0&&(n.EnableFarAttenuation!==void 0&&n.EnableFarAttenuation.value===0?a=0:a=n.FarAttenuationEnd.value);const l=1;switch(i){case 0:t=new Rd(s,o,a,l);break;case 1:t=new km(s,o);break;case 2:let c=Math.PI/3;n.InnerAngle!==void 0&&(c=Jn.degToRad(n.InnerAngle.value));let u=0;n.OuterAngle!==void 0&&(u=Jn.degToRad(n.OuterAngle.value),u=Math.max(u,1)),t=new vT(s,o,a,c,u,l);break;default:console.warn("THREE.FBXLoader: Unknown light type "+n.LightType.value+", defaulting to a PointLight."),t=new Rd(s,o);break}n.CastShadows!==void 0&&n.CastShadows.value===1&&(t.castShadow=!0)}return t}createMesh(e,t,n){let i,s=null,o=null;const a=[];return e.children.forEach(function(l){t.has(l.ID)&&(s=t.get(l.ID)),n.has(l.ID)&&a.push(n.get(l.ID))}),a.length>1?o=a:a.length>0?o=a[0]:(o=new sc({color:13421772}),a.push(o)),"color"in s.attributes&&a.forEach(function(l){l.vertexColors=!0}),s.FBX_Deformer?(i=new J1(s,o),i.normalizeSkinWeights()):i=new kt(s,o),i}createCurve(e,t){const n=e.children.reduce(function(s,o){return t.has(o.ID)&&(s=t.get(o.ID)),s},null),i=new Im({color:3342591,linewidth:1});return new Om(n,i)}getTransformData(e,t){const n={};"InheritType"in t&&(n.inheritType=parseInt(t.InheritType.value)),"RotationOrder"in t?n.eulerOrder=Km(t.RotationOrder.value):n.eulerOrder="ZYX","Lcl_Translation"in t&&(n.translation=t.Lcl_Translation.value),"PreRotation"in t&&(n.preRotation=t.PreRotation.value),"Lcl_Rotation"in t&&(n.rotation=t.Lcl_Rotation.value),"PostRotation"in t&&(n.postRotation=t.PostRotation.value),"Lcl_Scaling"in t&&(n.scale=t.Lcl_Scaling.value),"ScalingOffset"in t&&(n.scalingOffset=t.ScalingOffset.value),"ScalingPivot"in t&&(n.scalingPivot=t.ScalingPivot.value),"RotationOffset"in t&&(n.rotationOffset=t.RotationOffset.value),"RotationPivot"in t&&(n.rotationPivot=t.RotationPivot.value),e.userData.transformData=n}setLookAtProperties(e,t){"LookAtProperty"in t&&dt.get(e.ID).children.forEach(function(i){if(i.relationship==="LookAtProperty"){const s=Ve.Objects.Model[i.ID];if("Lcl_Translation"in s){const o=s.Lcl_Translation.value;e.target!==void 0?(e.target.position.fromArray(o),Kt.add(e.target)):e.lookAt(new F().fromArray(o))}}})}bindSkeleton(e,t,n){const i=this.parsePoseNodes();for(const s in e){const o=e[s];dt.get(parseInt(o.ID)).parents.forEach(function(l){if(t.has(l.ID)){const c=l.ID;dt.get(c).parents.forEach(function(f){n.has(f.ID)&&n.get(f.ID).bind(new Gu(o.bones),i[f.ID])})}})}}parsePoseNodes(){const e={};if("Pose"in Ve.Objects){const t=Ve.Objects.Pose;for(const n in t)if(t[n].attrType==="BindPose"&&t[n].NbPoseNodes>0){const i=t[n].PoseNode;Array.isArray(i)?i.forEach(function(s){e[s.Node]=new Re().fromArray(s.Matrix.a)}):e[i.Node]=new Re().fromArray(i.Matrix.a)}}return e}createAmbientLight(){if("GlobalSettings"in Ve&&"AmbientColor"in Ve.GlobalSettings){const e=Ve.GlobalSettings.AmbientColor.value,t=e[0],n=e[1],i=e[2];if(t!==0||n!==0||i!==0){const s=new De(t,n,i);Kt.add(new Bm(s,1))}}}}class oE{constructor(){this.negativeMaterialIndices=!1}parse(e){const t=new Map;if("Geometry"in Ve.Objects){const n=Ve.Objects.Geometry;for(const i in n){const s=dt.get(parseInt(i)),o=this.parseGeometry(s,n[i],e);t.set(parseInt(i),o)}}return this.negativeMaterialIndices===!0&&console.warn("THREE.FBXLoader: The FBX file contains invalid (negative) material indices. The asset might not render as expected."),t}parseGeometry(e,t,n){switch(t.attrType){case"Mesh":return this.parseMeshGeometry(e,t,n);case"NurbsCurve":return this.parseNurbsGeometry(t)}}parseMeshGeometry(e,t,n){const i=n.skeletons,s=[],o=e.parents.map(function(f){return Ve.Objects.Model[f.ID]});if(o.length===0)return;const a=e.children.reduce(function(f,h){return i[h.ID]!==void 0&&(f=i[h.ID]),f},null);e.children.forEach(function(f){n.morphTargets[f.ID]!==void 0&&s.push(n.morphTargets[f.ID])});const l=o[0],c={};"RotationOrder"in l&&(c.eulerOrder=Km(l.RotationOrder.value)),"InheritType"in l&&(c.inheritType=parseInt(l.InheritType.value)),"GeometricTranslation"in l&&(c.translation=l.GeometricTranslation.value),"GeometricRotation"in l&&(c.rotation=l.GeometricRotation.value),"GeometricScaling"in l&&(c.scale=l.GeometricScaling.value);const u=$m(c);return this.genGeometry(t,a,s,u)}genGeometry(e,t,n,i){const s=new Qt;e.attrName&&(s.name=e.attrName);const o=this.parseGeoNode(e,t),a=this.genBuffers(o),l=new ut(a.vertex,3);if(l.applyMatrix4(i),s.setAttribute("position",l),a.colors.length>0&&s.setAttribute("color",new ut(a.colors,3)),t&&(s.setAttribute("skinIndex",new zu(a.weightsIndices,4)),s.setAttribute("skinWeight",new ut(a.vertexWeights,4)),s.FBX_Deformer=t),a.normal.length>0){const c=new Ut().getNormalMatrix(i),u=new ut(a.normal,3);u.applyNormalMatrix(c),s.setAttribute("normal",u)}if(a.uvs.forEach(function(c,u){let f="uv"+(u+1).toString();u===0&&(f="uv"),s.setAttribute(f,new ut(a.uvs[u],2))}),o.material&&o.material.mappingType!=="AllSame"){let c=a.materialIndex[0],u=0;if(a.materialIndex.forEach(function(f,h){f!==c&&(s.addGroup(u,h-u,c),c=f,u=h)}),s.groups.length>0){const f=s.groups[s.groups.length-1],h=f.start+f.count;h!==a.materialIndex.length&&s.addGroup(h,a.materialIndex.length-h,c)}s.groups.length===0&&s.addGroup(0,a.materialIndex.length,a.materialIndex[0])}return this.addMorphTargets(s,e,n,i),s}parseGeoNode(e,t){const n={};if(n.vertexPositions=e.Vertices!==void 0?e.Vertices.a:[],n.vertexIndices=e.PolygonVertexIndex!==void 0?e.PolygonVertexIndex.a:[],e.LayerElementColor&&(n.color=this.parseVertexColors(e.LayerElementColor[0])),e.LayerElementMaterial&&(n.material=this.parseMaterialIndices(e.LayerElementMaterial[0])),e.LayerElementNormal&&(n.normal=this.parseNormals(e.LayerElementNormal[0])),e.LayerElementUV){n.uv=[];let i=0;for(;e.LayerElementUV[i];)e.LayerElementUV[i].UV&&n.uv.push(this.parseUVs(e.LayerElementUV[i])),i++}return n.weightTable={},t!==null&&(n.skeleton=t,t.rawBones.forEach(function(i,s){i.indices.forEach(function(o,a){n.weightTable[o]===void 0&&(n.weightTable[o]=[]),n.weightTable[o].push({id:s,weight:i.weights[a]})})})),n}genBuffers(e){const t={vertex:[],normal:[],colors:[],uvs:[],materialIndex:[],vertexWeights:[],weightsIndices:[]};let n=0,i=0,s=!1,o=[],a=[],l=[],c=[],u=[],f=[];const h=this;return e.vertexIndices.forEach(function(p,g){let d,m=!1;p<0&&(p=p^-1,m=!0);let _=[],v=[];if(o.push(p*3,p*3+1,p*3+2),e.color){const x=pa(g,n,p,e.color);l.push(x[0],x[1],x[2])}if(e.skeleton){if(e.weightTable[p]!==void 0&&e.weightTable[p].forEach(function(x){v.push(x.weight),_.push(x.id)}),v.length>4){s||(console.warn("THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights."),s=!0);const x=[0,0,0,0],y=[0,0,0,0];v.forEach(function(M,E){let L=M,b=_[E];y.forEach(function(S,I,X){if(L>S){X[I]=L,L=S;const H=x[I];x[I]=b,b=H}})}),_=x,v=y}for(;v.length<4;)v.push(0),_.push(0);for(let x=0;x<4;++x)u.push(v[x]),f.push(_[x])}if(e.normal){const x=pa(g,n,p,e.normal);a.push(x[0],x[1],x[2])}e.material&&e.material.mappingType!=="AllSame"&&(d=pa(g,n,p,e.material)[0],d<0&&(h.negativeMaterialIndices=!0,d=0)),e.uv&&e.uv.forEach(function(x,y){const M=pa(g,n,p,x);c[y]===void 0&&(c[y]=[]),c[y].push(M[0]),c[y].push(M[1])}),i++,m&&(i>4&&console.warn("THREE.FBXLoader: Polygons with more than four sides are not supported. Make sure to triangulate the geometry during export."),h.genFace(t,e,o,d,a,l,c,u,f,i),n++,i=0,o=[],a=[],l=[],c=[],u=[],f=[])}),t}genFace(e,t,n,i,s,o,a,l,c,u){for(let f=2;f<u;f++)e.vertex.push(t.vertexPositions[n[0]]),e.vertex.push(t.vertexPositions[n[1]]),e.vertex.push(t.vertexPositions[n[2]]),e.vertex.push(t.vertexPositions[n[(f-1)*3]]),e.vertex.push(t.vertexPositions[n[(f-1)*3+1]]),e.vertex.push(t.vertexPositions[n[(f-1)*3+2]]),e.vertex.push(t.vertexPositions[n[f*3]]),e.vertex.push(t.vertexPositions[n[f*3+1]]),e.vertex.push(t.vertexPositions[n[f*3+2]]),t.skeleton&&(e.vertexWeights.push(l[0]),e.vertexWeights.push(l[1]),e.vertexWeights.push(l[2]),e.vertexWeights.push(l[3]),e.vertexWeights.push(l[(f-1)*4]),e.vertexWeights.push(l[(f-1)*4+1]),e.vertexWeights.push(l[(f-1)*4+2]),e.vertexWeights.push(l[(f-1)*4+3]),e.vertexWeights.push(l[f*4]),e.vertexWeights.push(l[f*4+1]),e.vertexWeights.push(l[f*4+2]),e.vertexWeights.push(l[f*4+3]),e.weightsIndices.push(c[0]),e.weightsIndices.push(c[1]),e.weightsIndices.push(c[2]),e.weightsIndices.push(c[3]),e.weightsIndices.push(c[(f-1)*4]),e.weightsIndices.push(c[(f-1)*4+1]),e.weightsIndices.push(c[(f-1)*4+2]),e.weightsIndices.push(c[(f-1)*4+3]),e.weightsIndices.push(c[f*4]),e.weightsIndices.push(c[f*4+1]),e.weightsIndices.push(c[f*4+2]),e.weightsIndices.push(c[f*4+3])),t.color&&(e.colors.push(o[0]),e.colors.push(o[1]),e.colors.push(o[2]),e.colors.push(o[(f-1)*3]),e.colors.push(o[(f-1)*3+1]),e.colors.push(o[(f-1)*3+2]),e.colors.push(o[f*3]),e.colors.push(o[f*3+1]),e.colors.push(o[f*3+2])),t.material&&t.material.mappingType!=="AllSame"&&(e.materialIndex.push(i),e.materialIndex.push(i),e.materialIndex.push(i)),t.normal&&(e.normal.push(s[0]),e.normal.push(s[1]),e.normal.push(s[2]),e.normal.push(s[(f-1)*3]),e.normal.push(s[(f-1)*3+1]),e.normal.push(s[(f-1)*3+2]),e.normal.push(s[f*3]),e.normal.push(s[f*3+1]),e.normal.push(s[f*3+2])),t.uv&&t.uv.forEach(function(h,p){e.uvs[p]===void 0&&(e.uvs[p]=[]),e.uvs[p].push(a[p][0]),e.uvs[p].push(a[p][1]),e.uvs[p].push(a[p][(f-1)*2]),e.uvs[p].push(a[p][(f-1)*2+1]),e.uvs[p].push(a[p][f*2]),e.uvs[p].push(a[p][f*2+1])})}addMorphTargets(e,t,n,i){if(n.length===0)return;e.morphTargetsRelative=!0,e.morphAttributes.position=[];const s=this;n.forEach(function(o){o.rawTargets.forEach(function(a){const l=Ve.Objects.Geometry[a.geoID];l!==void 0&&s.genMorphGeometry(e,t,l,i,a.name)})})}genMorphGeometry(e,t,n,i,s){const o=t.PolygonVertexIndex!==void 0?t.PolygonVertexIndex.a:[],a=n.Vertices!==void 0?n.Vertices.a:[],l=n.Indexes!==void 0?n.Indexes.a:[],c=e.attributes.position.count*3,u=new Float32Array(c);for(let g=0;g<l.length;g++){const d=l[g]*3;u[d]=a[g*3],u[d+1]=a[g*3+1],u[d+2]=a[g*3+2]}const f={vertexIndices:o,vertexPositions:u},h=this.genBuffers(f),p=new ut(h.vertex,3);p.name=s||n.attrName,p.applyMatrix4(i),e.morphAttributes.position.push(p)}parseNormals(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,i=e.Normals.a;let s=[];return n==="IndexToDirect"&&("NormalIndex"in e?s=e.NormalIndex.a:"NormalsIndex"in e&&(s=e.NormalsIndex.a)),{dataSize:3,buffer:i,indices:s,mappingType:t,referenceType:n}}parseUVs(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,i=e.UV.a;let s=[];return n==="IndexToDirect"&&(s=e.UVIndex.a),{dataSize:2,buffer:i,indices:s,mappingType:t,referenceType:n}}parseVertexColors(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,i=e.Colors.a;let s=[];return n==="IndexToDirect"&&(s=e.ColorIndex.a),{dataSize:4,buffer:i,indices:s,mappingType:t,referenceType:n}}parseMaterialIndices(e){const t=e.MappingInformationType,n=e.ReferenceInformationType;if(t==="NoMappingInformation")return{dataSize:1,buffer:[0],indices:[0],mappingType:"AllSame",referenceType:n};const i=e.Materials.a,s=[];for(let o=0;o<i.length;++o)s.push(o);return{dataSize:1,buffer:i,indices:s,mappingType:t,referenceType:n}}parseNurbsGeometry(e){const t=parseInt(e.Order);if(isNaN(t))return console.error("THREE.FBXLoader: Invalid Order %s given for geometry ID: %s",e.Order,e.id),new Qt;const n=t-1,i=e.KnotVector.a,s=[],o=e.Points.a;for(let f=0,h=o.length;f<h;f+=4)s.push(new Ke().fromArray(o,f));let a,l;if(e.Form==="Closed")s.push(s[0]);else if(e.Form==="Periodic"){a=n,l=i.length-1-a;for(let f=0;f<n;++f)s.push(s[f])}const u=new iE(n,i,s,a,l).getPoints(s.length*12);return new Qt().setFromPoints(u)}}class aE{parse(){const e=[],t=this.parseClips();if(t!==void 0)for(const n in t){const i=t[n],s=this.addClip(i);e.push(s)}return e}parseClips(){if(Ve.Objects.AnimationCurve===void 0)return;const e=this.parseAnimationCurveNodes();this.parseAnimationCurves(e);const t=this.parseAnimationLayers(e);return this.parseAnimStacks(t)}parseAnimationCurveNodes(){const e=Ve.Objects.AnimationCurveNode,t=new Map;for(const n in e){const i=e[n];if(i.attrName.match(/S|R|T|DeformPercent/)!==null){const s={id:i.id,attr:i.attrName,curves:{}};t.set(s.id,s)}}return t}parseAnimationCurves(e){const t=Ve.Objects.AnimationCurve;for(const n in t){const i={id:t[n].id,times:t[n].KeyTime.a.map(hE),values:t[n].KeyValueFloat.a},s=dt.get(i.id);if(s!==void 0){const o=s.parents[0].ID,a=s.parents[0].relationship;a.match(/X/)?e.get(o).curves.x=i:a.match(/Y/)?e.get(o).curves.y=i:a.match(/Z/)?e.get(o).curves.z=i:a.match(/d|DeformPercent/)&&e.has(o)&&(e.get(o).curves.morph=i)}}}parseAnimationLayers(e){const t=Ve.Objects.AnimationLayer,n=new Map;for(const i in t){const s=[],o=dt.get(parseInt(i));o!==void 0&&(o.children.forEach(function(l,c){if(e.has(l.ID)){const u=e.get(l.ID);if(u.curves.x!==void 0||u.curves.y!==void 0||u.curves.z!==void 0){if(s[c]===void 0){const f=dt.get(l.ID).parents.filter(function(h){return h.relationship!==void 0})[0].ID;if(f!==void 0){const h=Ve.Objects.Model[f.toString()];if(h===void 0){console.warn("THREE.FBXLoader: Encountered a unused curve.",l);return}const p={modelName:h.attrName?$e.sanitizeNodeName(h.attrName):"",ID:h.id,initialPosition:[0,0,0],initialRotation:[0,0,0],initialScale:[1,1,1]};Kt.traverse(function(g){g.ID===h.id&&(p.transform=g.matrix,g.userData.transformData&&(p.eulerOrder=g.userData.transformData.eulerOrder))}),p.transform||(p.transform=new Re),"PreRotation"in h&&(p.preRotation=h.PreRotation.value),"PostRotation"in h&&(p.postRotation=h.PostRotation.value),s[c]=p}}s[c]&&(s[c][u.attr]=u)}else if(u.curves.morph!==void 0){if(s[c]===void 0){const f=dt.get(l.ID).parents.filter(function(_){return _.relationship!==void 0})[0].ID,h=dt.get(f).parents[0].ID,p=dt.get(h).parents[0].ID,g=dt.get(p).parents[0].ID,d=Ve.Objects.Model[g],m={modelName:d.attrName?$e.sanitizeNodeName(d.attrName):"",morphName:Ve.Objects.Deformer[f].attrName};s[c]=m}s[c][u.attr]=u}}}),n.set(parseInt(i),s))}return n}parseAnimStacks(e){const t=Ve.Objects.AnimationStack,n={};for(const i in t){const s=dt.get(parseInt(i)).children;s.length>1&&console.warn("THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.");const o=e.get(s[0].ID);n[i]={name:t[i].attrName,layer:o}}return n}addClip(e){let t=[];const n=this;return e.layer.forEach(function(i){t=t.concat(n.generateTracks(i))}),new uT(e.name,-1,t)}generateTracks(e){const t=[];let n=new F,i=new An,s=new F;if(e.transform&&e.transform.decompose(n,i,s),n=n.toArray(),i=new Cn().setFromQuaternion(i,e.eulerOrder).toArray(),s=s.toArray(),e.T!==void 0&&Object.keys(e.T.curves).length>0){const o=this.generateVectorTrack(e.modelName,e.T.curves,n,"position");o!==void 0&&t.push(o)}if(e.R!==void 0&&Object.keys(e.R.curves).length>0){const o=this.generateRotationTrack(e.modelName,e.R.curves,i,e.preRotation,e.postRotation,e.eulerOrder);o!==void 0&&t.push(o)}if(e.S!==void 0&&Object.keys(e.S.curves).length>0){const o=this.generateVectorTrack(e.modelName,e.S.curves,s,"scale");o!==void 0&&t.push(o)}if(e.DeformPercent!==void 0){const o=this.generateMorphTrack(e);o!==void 0&&t.push(o)}return t}generateVectorTrack(e,t,n,i){const s=this.getTimesForAllAxes(t),o=this.getKeyframeTrackValues(s,t,n);return new Ao(e+"."+i,s,o)}generateRotationTrack(e,t,n,i,s,o){t.x!==void 0&&(this.interpolateRotations(t.x),t.x.values=t.x.values.map(Jn.degToRad)),t.y!==void 0&&(this.interpolateRotations(t.y),t.y.values=t.y.values.map(Jn.degToRad)),t.z!==void 0&&(this.interpolateRotations(t.z),t.z.values=t.z.values.map(Jn.degToRad));const a=this.getTimesForAllAxes(t),l=this.getKeyframeTrackValues(a,t,n);i!==void 0&&(i=i.map(Jn.degToRad),i.push(o),i=new Cn().fromArray(i),i=new An().setFromEuler(i)),s!==void 0&&(s=s.map(Jn.degToRad),s.push(o),s=new Cn().fromArray(s),s=new An().setFromEuler(s).invert());const c=new An,u=new Cn,f=[];for(let h=0;h<l.length;h+=3)u.set(l[h],l[h+1],l[h+2],o),c.setFromEuler(u),i!==void 0&&c.premultiply(i),s!==void 0&&c.multiply(s),c.toArray(f,h/3*4);return new Fs(e+".quaternion",a,f)}generateMorphTrack(e){const t=e.DeformPercent.curves.morph,n=t.values.map(function(s){return s/100}),i=Kt.getObjectByName(e.modelName).morphTargetDictionary[e.morphName];return new Eo(e.modelName+".morphTargetInfluences["+i+"]",t.times,n)}getTimesForAllAxes(e){let t=[];if(e.x!==void 0&&(t=t.concat(e.x.times)),e.y!==void 0&&(t=t.concat(e.y.times)),e.z!==void 0&&(t=t.concat(e.z.times)),t=t.sort(function(n,i){return n-i}),t.length>1){let n=1,i=t[0];for(let s=1;s<t.length;s++){const o=t[s];o!==i&&(t[n]=o,i=o,n++)}t=t.slice(0,n)}return t}getKeyframeTrackValues(e,t,n){const i=n,s=[];let o=-1,a=-1,l=-1;return e.forEach(function(c){if(t.x&&(o=t.x.times.indexOf(c)),t.y&&(a=t.y.times.indexOf(c)),t.z&&(l=t.z.times.indexOf(c)),o!==-1){const u=t.x.values[o];s.push(u),i[0]=u}else s.push(i[0]);if(a!==-1){const u=t.y.values[a];s.push(u),i[1]=u}else s.push(i[1]);if(l!==-1){const u=t.z.values[l];s.push(u),i[2]=u}else s.push(i[2])}),s}interpolateRotations(e){for(let t=1;t<e.values.length;t++){const n=e.values[t-1],i=e.values[t]-n,s=Math.abs(i);if(s>=180){const o=s/180,a=i/o;let l=n+a;const c=e.times[t-1],f=(e.times[t]-c)/o;let h=c+f;const p=[],g=[];for(;h<e.times[t];)p.push(h),h+=f,g.push(l),l+=a;e.times=Ud(e.times,t,p),e.values=Ud(e.values,t,g)}}}}class lE{getPrevNode(){return this.nodeStack[this.currentIndent-2]}getCurrentNode(){return this.nodeStack[this.currentIndent-1]}getCurrentProp(){return this.currentProp}pushStack(e){this.nodeStack.push(e),this.currentIndent+=1}popStack(){this.nodeStack.pop(),this.currentIndent-=1}setCurrentProp(e,t){this.currentProp=e,this.currentPropName=t}parse(e){this.currentIndent=0,this.allNodes=new Ym,this.nodeStack=[],this.currentProp=[],this.currentPropName="";const t=this,n=e.split(/[\r\n]+/);return n.forEach(function(i,s){const o=i.match(/^[\s\t]*;/),a=i.match(/^[\s\t]*$/);if(o||a)return;const l=i.match("^\\t{"+t.currentIndent+"}(\\w+):(.*){",""),c=i.match("^\\t{"+t.currentIndent+"}(\\w+):[\\s\\t\\r\\n](.*)"),u=i.match("^\\t{"+(t.currentIndent-1)+"}}");l?t.parseNodeBegin(i,l):c?t.parseNodeProperty(i,c,n[++s]):u?t.popStack():i.match(/^[^\s\t}]/)&&t.parseNodePropertyContinued(i)}),this.allNodes}parseNodeBegin(e,t){const n=t[1].trim().replace(/^"/,"").replace(/"$/,""),i=t[2].split(",").map(function(l){return l.trim().replace(/^"/,"").replace(/"$/,"")}),s={name:n},o=this.parseNodeAttr(i),a=this.getCurrentNode();this.currentIndent===0?this.allNodes.add(n,s):n in a?(n==="PoseNode"?a.PoseNode.push(s):a[n].id!==void 0&&(a[n]={},a[n][a[n].id]=a[n]),o.id!==""&&(a[n][o.id]=s)):typeof o.id=="number"?(a[n]={},a[n][o.id]=s):n!=="Properties70"&&(n==="PoseNode"?a[n]=[s]:a[n]=s),typeof o.id=="number"&&(s.id=o.id),o.name!==""&&(s.attrName=o.name),o.type!==""&&(s.attrType=o.type),this.pushStack(s)}parseNodeAttr(e){let t=e[0];e[0]!==""&&(t=parseInt(e[0]),isNaN(t)&&(t=e[0]));let n="",i="";return e.length>1&&(n=e[1].replace(/^(\w+)::/,""),i=e[2]),{id:t,name:n,type:i}}parseNodeProperty(e,t,n){let i=t[1].replace(/^"/,"").replace(/"$/,"").trim(),s=t[2].replace(/^"/,"").replace(/"$/,"").trim();i==="Content"&&s===","&&(s=n.replace(/"/g,"").replace(/,$/,"").trim());const o=this.getCurrentNode();if(o.name==="Properties70"){this.parseNodeSpecialProperty(e,i,s);return}if(i==="C"){const l=s.split(",").slice(1),c=parseInt(l[0]),u=parseInt(l[1]);let f=s.split(",").slice(3);f=f.map(function(h){return h.trim().replace(/^"/,"")}),i="connections",s=[c,u],pE(s,f),o[i]===void 0&&(o[i]=[])}i==="Node"&&(o.id=s),i in o&&Array.isArray(o[i])?o[i].push(s):i!=="a"?o[i]=s:o.a=s,this.setCurrentProp(o,i),i==="a"&&s.slice(-1)!==","&&(o.a=fc(s))}parseNodePropertyContinued(e){const t=this.getCurrentNode();t.a+=e,e.slice(-1)!==","&&(t.a=fc(t.a))}parseNodeSpecialProperty(e,t,n){const i=n.split('",').map(function(u){return u.trim().replace(/^\"/,"").replace(/\s/,"_")}),s=i[0],o=i[1],a=i[2],l=i[3];let c=i[4];switch(o){case"int":case"enum":case"bool":case"ULongLong":case"double":case"Number":case"FieldOfView":c=parseFloat(c);break;case"Color":case"ColorRGB":case"Vector3D":case"Lcl_Translation":case"Lcl_Rotation":case"Lcl_Scaling":c=fc(c);break}this.getPrevNode()[s]={type:o,type2:a,flag:l,value:c},this.setCurrentProp(this.getPrevNode(),s)}}class cE{parse(e){const t=new Nd(e);t.skip(23);const n=t.getUint32();if(n<6400)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+n);const i=new Ym;for(;!this.endOfContent(t);){const s=this.parseNode(t,n);s!==null&&i.add(s.name,s)}return i}endOfContent(e){return e.size()%16===0?(e.getOffset()+160+16&-16)>=e.size():e.getOffset()+160+16>=e.size()}parseNode(e,t){const n={},i=t>=7500?e.getUint64():e.getUint32(),s=t>=7500?e.getUint64():e.getUint32();t>=7500?e.getUint64():e.getUint32();const o=e.getUint8(),a=e.getString(o);if(i===0)return null;const l=[];for(let h=0;h<s;h++)l.push(this.parseProperty(e));const c=l.length>0?l[0]:"",u=l.length>1?l[1]:"",f=l.length>2?l[2]:"";for(n.singleProperty=s===1&&e.getOffset()===i;i>e.getOffset();){const h=this.parseNode(e,t);h!==null&&this.parseSubNode(a,n,h)}return n.propertyList=l,typeof c=="number"&&(n.id=c),u!==""&&(n.attrName=u),f!==""&&(n.attrType=f),a!==""&&(n.name=a),n}parseSubNode(e,t,n){if(n.singleProperty===!0){const i=n.propertyList[0];Array.isArray(i)?(t[n.name]=n,n.a=i):t[n.name]=i}else if(e==="Connections"&&n.name==="C"){const i=[];n.propertyList.forEach(function(s,o){o!==0&&i.push(s)}),t.connections===void 0&&(t.connections=[]),t.connections.push(i)}else if(n.name==="Properties70")Object.keys(n).forEach(function(s){t[s]=n[s]});else if(e==="Properties70"&&n.name==="P"){let i=n.propertyList[0],s=n.propertyList[1];const o=n.propertyList[2],a=n.propertyList[3];let l;i.indexOf("Lcl ")===0&&(i=i.replace("Lcl ","Lcl_")),s.indexOf("Lcl ")===0&&(s=s.replace("Lcl ","Lcl_")),s==="Color"||s==="ColorRGB"||s==="Vector"||s==="Vector3D"||s.indexOf("Lcl_")===0?l=[n.propertyList[4],n.propertyList[5],n.propertyList[6]]:l=n.propertyList[4],t[i]={type:s,type2:o,flag:a,value:l}}else t[n.name]===void 0?typeof n.id=="number"?(t[n.name]={},t[n.name][n.id]=n):t[n.name]=n:n.name==="PoseNode"?(Array.isArray(t[n.name])||(t[n.name]=[t[n.name]]),t[n.name].push(n)):t[n.name][n.id]===void 0&&(t[n.name][n.id]=n)}parseProperty(e){const t=e.getString(1);let n;switch(t){case"C":return e.getBoolean();case"D":return e.getFloat64();case"F":return e.getFloat32();case"I":return e.getInt32();case"L":return e.getInt64();case"R":return n=e.getUint32(),e.getArrayBuffer(n);case"S":return n=e.getUint32(),e.getString(n);case"Y":return e.getInt16();case"b":case"c":case"d":case"f":case"i":case"l":const i=e.getUint32(),s=e.getUint32(),o=e.getUint32();if(s===0)switch(t){case"b":case"c":return e.getBooleanArray(i);case"d":return e.getFloat64Array(i);case"f":return e.getFloat32Array(i);case"i":return e.getInt32Array(i);case"l":return e.getInt64Array(i)}const a=qT(new Uint8Array(e.getArrayBuffer(o))),l=new Nd(a.buffer);switch(t){case"b":case"c":return l.getBooleanArray(i);case"d":return l.getFloat64Array(i);case"f":return l.getFloat32Array(i);case"i":return l.getInt32Array(i);case"l":return l.getInt64Array(i)}break;default:throw new Error("THREE.FBXLoader: Unknown property type "+t)}}}class Nd{constructor(e,t){this.dv=new DataView(e),this.offset=0,this.littleEndian=t!==void 0?t:!0,this._textDecoder=new TextDecoder}getOffset(){return this.offset}size(){return this.dv.buffer.byteLength}skip(e){this.offset+=e}getBoolean(){return(this.getUint8()&1)===1}getBooleanArray(e){const t=[];for(let n=0;n<e;n++)t.push(this.getBoolean());return t}getUint8(){const e=this.dv.getUint8(this.offset);return this.offset+=1,e}getInt16(){const e=this.dv.getInt16(this.offset,this.littleEndian);return this.offset+=2,e}getInt32(){const e=this.dv.getInt32(this.offset,this.littleEndian);return this.offset+=4,e}getInt32Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getInt32());return t}getUint32(){const e=this.dv.getUint32(this.offset,this.littleEndian);return this.offset+=4,e}getInt64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t&2147483648?(t=~t&4294967295,e=~e&4294967295,e===4294967295&&(t=t+1&4294967295),e=e+1&4294967295,-(t*4294967296+e)):t*4294967296+e}getInt64Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getInt64());return t}getUint64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t*4294967296+e}getFloat32(){const e=this.dv.getFloat32(this.offset,this.littleEndian);return this.offset+=4,e}getFloat32Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getFloat32());return t}getFloat64(){const e=this.dv.getFloat64(this.offset,this.littleEndian);return this.offset+=8,e}getFloat64Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getFloat64());return t}getArrayBuffer(e){const t=this.dv.buffer.slice(this.offset,this.offset+e);return this.offset+=e,t}getString(e){const t=this.offset;let n=new Uint8Array(this.dv.buffer,t,e);this.skip(e);const i=n.indexOf(0);return i>=0&&(n=new Uint8Array(this.dv.buffer,t,i)),this._textDecoder.decode(n)}}class Ym{add(e,t){this[e]=t}}function uE(r){const e="Kaydara FBX Binary  \0";return r.byteLength>=e.length&&e===Zm(r,0,e.length)}function fE(r){const e=["K","a","y","d","a","r","a","\\","F","B","X","\\","B","i","n","a","r","y","\\","\\"];let t=0;function n(i){const s=r[i-1];return r=r.slice(t+i),t++,s}for(let i=0;i<e.length;++i)if(n(1)===e[i])return!1;return!0}function zd(r){const e=/FBXVersion: (\d+)/,t=r.match(e);if(t)return parseInt(t[1]);throw new Error("THREE.FBXLoader: Cannot find the version number for the file given.")}function hE(r){return r/46186158e3}const dE=[];function pa(r,e,t,n){let i;switch(n.mappingType){case"ByPolygonVertex":i=r;break;case"ByPolygon":i=e;break;case"ByVertice":i=t;break;case"AllSame":i=n.indices[0];break;default:console.warn("THREE.FBXLoader: unknown attribute mapping type "+n.mappingType)}n.referenceType==="IndexToDirect"&&(i=n.indices[i]);const s=i*n.dataSize,o=s+n.dataSize;return mE(dE,n.buffer,s,o)}const uc=new Cn,Yr=new F;function $m(r){const e=new Re,t=new Re,n=new Re,i=new Re,s=new Re,o=new Re,a=new Re,l=new Re,c=new Re,u=new Re,f=new Re,h=new Re,p=r.inheritType?r.inheritType:0;if(r.translation&&e.setPosition(Yr.fromArray(r.translation)),r.preRotation){const I=r.preRotation.map(Jn.degToRad);I.push(r.eulerOrder||Cn.DEFAULT_ORDER),t.makeRotationFromEuler(uc.fromArray(I))}if(r.rotation){const I=r.rotation.map(Jn.degToRad);I.push(r.eulerOrder||Cn.DEFAULT_ORDER),n.makeRotationFromEuler(uc.fromArray(I))}if(r.postRotation){const I=r.postRotation.map(Jn.degToRad);I.push(r.eulerOrder||Cn.DEFAULT_ORDER),i.makeRotationFromEuler(uc.fromArray(I)),i.invert()}r.scale&&s.scale(Yr.fromArray(r.scale)),r.scalingOffset&&a.setPosition(Yr.fromArray(r.scalingOffset)),r.scalingPivot&&o.setPosition(Yr.fromArray(r.scalingPivot)),r.rotationOffset&&l.setPosition(Yr.fromArray(r.rotationOffset)),r.rotationPivot&&c.setPosition(Yr.fromArray(r.rotationPivot)),r.parentMatrixWorld&&(f.copy(r.parentMatrix),u.copy(r.parentMatrixWorld));const g=t.clone().multiply(n).multiply(i),d=new Re;d.extractRotation(u);const m=new Re;m.copyPosition(u);const _=m.clone().invert().multiply(u),v=d.clone().invert().multiply(_),x=s,y=new Re;if(p===0)y.copy(d).multiply(g).multiply(v).multiply(x);else if(p===1)y.copy(d).multiply(v).multiply(g).multiply(x);else{const X=new Re().scale(new F().setFromMatrixScale(f)).clone().invert(),H=v.clone().multiply(X);y.copy(d).multiply(g).multiply(H).multiply(x)}const M=c.clone().invert(),E=o.clone().invert();let L=e.clone().multiply(l).multiply(c).multiply(t).multiply(n).multiply(i).multiply(M).multiply(a).multiply(o).multiply(s).multiply(E);const b=new Re().copyPosition(L),S=u.clone().multiply(b);return h.copyPosition(S),L=h.clone().multiply(y),L.premultiply(u.invert()),L}function Km(r){r=r||0;const e=["ZYX","YZX","XZY","ZXY","YXZ","XYZ"];return r===6?(console.warn("THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect."),e[0]):e[r]}function fc(r){return r.split(",").map(function(t){return parseFloat(t)})}function Zm(r,e,t){return e===void 0&&(e=0),t===void 0&&(t=r.byteLength),new TextDecoder().decode(new Uint8Array(r,e,t))}function pE(r,e){for(let t=0,n=r.length,i=e.length;t<i;t++,n++)r[n]=e[t]}function mE(r,e,t,n){for(let i=t,s=0;i<n;i++,s++)r[s]=e[i];return r}function Ud(r,e,t){return r.slice(0,e).concat(t).concat(r.slice(e))}const gE=new rE,_E=r=>new Promise((e,t)=>{gE.load(r,n=>{e(n)},()=>{},n=>{t(n)})});class xE{constructor(e,t,n,i){Je(this,"scene");Je(this,"child");Je(this,"meshColor",ei.mesh);Je(this,"headColor",ei.head);Je(this,"height");Je(this,"time");this.scene=e,this.child=t,this.height=n,this.time=i,this.createMesh(),this.createLine()}computedMesh(){this.child.geometry.computeBoundingBox(),this.child.geometry.computeBoundingSphere()}createMesh(){this.computedMesh();const{max:e,min:t}=this.child.geometry.boundingBox,n=e.z-t.z,i=new mn({uniforms:{u_height:this.height,u_up_color:{value:new De(ei.risingColor)},u_city_color:{value:new De(this.meshColor)},u_head_color:{value:new De(this.headColor)},u_size:{value:n}},vertexShader:`
                varying vec3 v_position;
                void main() {
                  v_position = position;
                  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
              `,fragmentShader:`
                varying vec3 v_position;
                
                uniform vec3 u_city_color;
                uniform vec3 u_head_color;
                uniform float u_size;
                
                uniform vec3 u_up_color;
                uniform float u_height;
                
                void main() {
                  vec3 base_color = u_city_color;
                  base_color = mix(base_color, u_head_color, v_position.z / u_size);
                  
                  if (u_height > v_position.z && u_height < v_position.z + 6.0) {
                    float f_index = (u_height - v_position.z) / 3.0;
                    base_color = mix(u_up_color, base_color, abs(f_index - 1.0));
                  };
                  
                  gl_FragColor = vec4(base_color, 1.0);
                }
              `}),s=new kt(this.child.geometry,i);s.position.copy(this.child.position),s.rotation.copy(this.child.rotation),s.scale.copy(this.child.scale),this.scene.add(s)}createLine(){const e=new iT(this.child.geometry),{max:t,min:n}=this.child.geometry.boundingBox,i=new mn({uniforms:{line_color:{value:new De(ei.soundLine)},u_time:this.time,u_max:{value:t},u_min:{value:n},live_color:{value:new De(ei.liveColor)}},vertexShader:`
        uniform float u_time;
        uniform vec3 u_max;
        uniform vec3 u_min;
        uniform vec3 live_color;
        uniform vec3 line_color;
        
        varying vec3 v_color;
          
        void main() {
        
          // 扫描速度
          float new_time = mod(u_time * 0.1, 1.0);
          // 扫描位置
          float rangeY = mix(u_min.y, u_max.y, new_time);
          
          if (rangeY < position.y && rangeY > position.y - 200.0) {
            float f_index = 1.0 - sin((position.y - rangeY) / 200.0 * 3.14);
            float r = mix(live_color.r, line_color.r, f_index);
            float g = mix(live_color.g, line_color.g, f_index);
            float b = mix(live_color.b, line_color.b, f_index);
            
            v_color = vec3(r, g, b);
          } else {
            v_color = line_color;
          }
          
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        varying vec3 v_color;
        void main() {
          gl_FragColor = vec4(v_color, 1.0);
        }
      `}),s=new tT(e,i);s.scale.copy(this.child.scale),s.rotation.copy(this.child.rotation),s.position.copy(this.child.position),this.scene.add(s)}}class vE{constructor(e){Je(this,"url");Je(this,"scene");this.url="/imgs/black-bg.png",this.scene=e,this.init()}init(){const e=new Um,t=new sl(5e4,32,32),n=new Nu({side:hn,map:e.load(this.url)}),i=new kt(t,n);i.position.set(0,0,0),this.scene.add(i)}}function gi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Jm(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.11.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var pn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ws={duration:.5,overwrite:!1,delay:0},qu,Bt,vt,Pn=1e8,it=1/Pn,qc=Math.PI*2,yE=qc/4,bE=0,Qm=Math.sqrt,ME=Math.cos,wE=Math.sin,At=function(e){return typeof e=="string"},ft=function(e){return typeof e=="function"},wi=function(e){return typeof e=="number"},Yu=function(e){return typeof e>"u"},si=function(e){return typeof e=="object"},en=function(e){return e!==!1},eg=function(){return typeof window<"u"},ma=function(e){return ft(e)||At(e)},tg=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Vt=Array.isArray,Yc=/(?:-?\.?\d|\.)+/gi,ng=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ts=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,hc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,ig=/[+-]=-?[.\d]+/,rg=/[^,'"\[\]\s]+/gi,SE=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,at,bn,$c,$u,gn={},Oa={},sg,og=function(e){return(Oa=Cr(e,gn))&&_n},Ku=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Fa=function(e,t){return!t&&console.warn(e)},ag=function(e,t){return e&&(gn[e]=t)&&Oa&&(Oa[e]=t)||gn},Co=function(){return 0},TE={suppressEvents:!0,isStart:!0,kill:!1},Ma={suppressEvents:!0,kill:!1},EE={suppressEvents:!0},Zu={},Xi=[],Kc={},lg,cn={},dc={},kd=30,wa=[],Ju="",Qu=function(e){var t=e[0],n,i;if(si(t)||ft(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=wa.length;i--&&!wa[i].targetTest(t););n=wa[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Lg(e[i],n)))||e.splice(i,1);return e},Mr=function(e){return e._gsap||Qu(Ln(e))[0]._gsap},cg=function(e,t,n){return(n=e[t])&&ft(n)?e[t]():Yu(n)&&e.getAttribute&&e.getAttribute(t)||n},tn=function(e,t){return(e=e.split(",")).forEach(t)||e},pt=function(e){return Math.round(e*1e5)/1e5||0},Lt=function(e){return Math.round(e*1e7)/1e7||0},us=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},AE=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Na=function(){var e=Xi.length,t=Xi.slice(0),n,i;for(Kc={},Xi.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},ug=function(e,t,n,i){Xi.length&&!Bt&&Na(),e.render(t,n,i||Bt&&t<0&&(e._initted||e._startAt)),Xi.length&&!Bt&&Na()},fg=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(rg).length<2?t:At(e)?e.trim():e},hg=function(e){return e},Dn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},CE=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Cr=function(e,t){for(var n in t)e[n]=t[n];return e},Bd=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=si(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},za=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},lo=function(e){var t=e.parent||at,n=e.keyframes?CE(Vt(e.keyframes)):Dn;if(en(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},PE=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},dg=function(e,t,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},cl=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},$i=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove(e),e._act=0},wr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},LE=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Zc=function(e,t,n,i){return e._startAt&&(Bt?e._startAt.revert(Ma):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},RE=function r(e){return!e||e._ts&&r(e.parent)},Vd=function(e){return e._repeat?Ss(e._tTime,e=e.duration()+e._rDelay)*e:0},Ss=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},Ua=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},ul=function(e){return e._end=Lt(e._start+(e._tDur/Math.abs(e._ts||e._rts||it)||0))},fl=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Lt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),ul(e),n._dirty||wr(n,e)),e},pg=function(e,t){var n;if((t._time||t._initted&&!t._dur)&&(n=Ua(e.rawTime(),t),(!t._dur||Uo(0,t.totalDuration(),n)-t._tTime>it)&&t.render(n,!0)),wr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-it}},ti=function(e,t,n,i){return t.parent&&$i(t),t._start=Lt((wi(n)?n:n||e!==at?yn(e,n,t):e._time)+t._delay),t._end=Lt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),dg(e,t,"_first","_last",e._sort?"_start":0),Jc(t)||(e._recent=t),i||pg(e,t),e._ts<0&&fl(e,e._tTime),e},mg=function(e,t){return(gn.ScrollTrigger||Ku("scrollTrigger",t))&&gn.ScrollTrigger.create(t,e)},gg=function(e,t,n,i,s){if(tf(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!Bt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&lg!==fn.frame)return Xi.push(e),e._lazy=[s,i],1},DE=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Jc=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},IE=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&DE(e)&&!(!e._initted&&Jc(e))||(e._ts<0||e._dp._ts<0)&&!Jc(e))?0:1,a=e._rDelay,l=0,c,u,f;if(a&&e._repeat&&(l=Uo(0,e._tDur,t),u=Ss(l,a),e._yoyo&&u&1&&(o=1-o),u!==Ss(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||Bt||i||e._zTime===it||!t&&e._zTime){if(!e._initted&&gg(e,t,i,n,l))return;for(f=e._zTime,e._zTime=t||(n?it:0),n||(n=t&&!f),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&Zc(e,t,n,!0),e._onUpdate&&!n&&Rn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Rn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&$i(e,1),!n&&!Bt&&(Rn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},OE=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Ts=function(e,t,n,i){var s=e._repeat,o=Lt(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Lt(o*(s+1)+e._rDelay*s):o,a>0&&!i&&fl(e,e._tTime=e._tDur*a),e.parent&&ul(e),n||wr(e.parent,e),e},Gd=function(e){return e instanceof Jt?wr(e):Ts(e,e._dur)},FE={_start:0,endTime:Co,totalDuration:Co},yn=function r(e,t,n){var i=e.labels,s=e._recent||FE,o=e.duration()>=Pn?s.endTime(!1):e._dur,a,l,c;return At(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(Vt(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},co=function(e,t,n){var i=wi(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=en(l.vars.inherit)&&l.parent;o.immediateRender=en(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new yt(t[0],o,t[s+1])},Ji=function(e,t){return e||e===0?t(e):t},Uo=function(e,t,n){return n<e?e:n>t?t:n},Nt=function(e,t){return!At(e)||!(t=SE.exec(e))?"":t[1]},NE=function(e,t,n){return Ji(n,function(i){return Uo(e,t,i)})},Qc=[].slice,_g=function(e,t){return e&&si(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&si(e[0]))&&!e.nodeType&&e!==bn},zE=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return At(i)&&!t||_g(i,1)?(s=n).push.apply(s,Ln(i)):n.push(i)})||n},Ln=function(e,t,n){return vt&&!t&&vt.selector?vt.selector(e):At(e)&&!n&&($c||!Es())?Qc.call((t||$u).querySelectorAll(e),0):Vt(e)?zE(e,n):_g(e)?Qc.call(e,0):e?[e]:[]},eu=function(e){return e=Ln(e)[0]||Fa("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Ln(t,n.querySelectorAll?n:n===e?Fa("Invalid scope")||$u.createElement("div"):e)}},xg=function(e){return e.sort(function(){return .5-Math.random()})},vg=function(e){if(ft(e))return e;var t=si(e)?e:{each:e},n=Sr(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,u=i,f=i;return At(i)?u=f={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],f=i[1]),function(h,p,g){var d=(g||t).length,m=o[d],_,v,x,y,M,E,L,b,S;if(!m){if(S=t.grid==="auto"?0:(t.grid||[1,Pn])[1],!S){for(L=-Pn;L<(L=g[S++].getBoundingClientRect().left)&&S<d;);S--}for(m=o[d]=[],_=l?Math.min(S,d)*u-.5:i%S,v=S===Pn?0:l?d*f/S-.5:i/S|0,L=0,b=Pn,E=0;E<d;E++)x=E%S-_,y=v-(E/S|0),m[E]=M=c?Math.abs(c==="y"?y:x):Qm(x*x+y*y),M>L&&(L=M),M<b&&(b=M);i==="random"&&xg(m),m.max=L-b,m.min=b,m.v=d=(parseFloat(t.amount)||parseFloat(t.each)*(S>d?d-1:c?c==="y"?d/S:S:Math.max(S,d/S))||0)*(i==="edges"?-1:1),m.b=d<0?s-d:s,m.u=Nt(t.amount||t.each)||0,n=n&&d<0?Ag(n):n}return d=(m[h]-m.min)/m.max||0,Lt(m.b+(n?n(d):d)*m.v)+m.u}},tu=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Lt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(wi(n)?0:Nt(n))}},yg=function(e,t){var n=Vt(e),i,s;return!n&&si(e)&&(i=n=e.radius||Pn,e.values?(e=Ln(e.values),(s=!wi(e[0]))&&(i*=i)):e=tu(e.increment)),Ji(t,n?ft(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=Pn,u=0,f=e.length,h,p;f--;)s?(h=e[f].x-a,p=e[f].y-l,h=h*h+p*p):h=Math.abs(e[f]-a),h<c&&(c=h,u=f);return u=!i||c<=i?e[u]:o,s||u===o||wi(o)?u:u+Nt(o)}:tu(e))},bg=function(e,t,n,i){return Ji(Vt(e)?!t:n===!0?!!(n=0):!i,function(){return Vt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},UE=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},kE=function(e,t){return function(n){return e(parseFloat(n))+(t||Nt(n))}},BE=function(e,t,n){return wg(e,t,0,1,n)},Mg=function(e,t,n){return Ji(n,function(i){return e[~~t(i)]})},VE=function r(e,t,n){var i=t-e;return Vt(e)?Mg(e,r(0,e.length),t):Ji(n,function(s){return(i+(s-e)%i)%i+e})},GE=function r(e,t,n){var i=t-e,s=i*2;return Vt(e)?Mg(e,r(0,e.length-1),t):Ji(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},Po=function(e){for(var t=0,n="",i,s,o,a;~(i=e.indexOf("random(",t));)o=e.indexOf(")",i),a=e.charAt(i+7)==="[",s=e.substr(i+7,o-i-7).match(a?rg:Yc),n+=e.substr(t,i-t)+bg(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},wg=function(e,t,n,i,s){var o=t-e,a=i-n;return Ji(s,function(l){return n+((l-e)/o*a||0)})},HE=function r(e,t,n,i){var s=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!s){var o=At(e),a={},l,c,u,f,h;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(Vt(e)&&!Vt(t)){for(u=[],f=e.length,h=f-2,c=1;c<f;c++)u.push(r(e[c-1],e[c]));f--,s=function(g){g*=f;var d=Math.min(h,~~g);return u[d](g-d)},n=t}else i||(e=Cr(Vt(e)?[]:{},e));if(!u){for(l in t)ef.call(a,e,l,"get",t[l]);s=function(g){return sf(g,a)||(o?e.p:e)}}}return Ji(n,s)},Hd=function(e,t,n){var i=e.labels,s=Pn,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Rn=function(e,t,n){var i=e.vars,s=i[t],o=vt,a=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&Xi.length&&Na(),a&&(vt=a),u=l?s.apply(c,l):s.call(c),vt=o,u},Qs=function(e){return $i(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Bt),e.progress()<1&&Rn(e,"onInterrupt"),e},ns,WE=function(e){e=!e.name&&e.default||e;var t=e.name,n=ft(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Co,render:sf,add:ef,kill:oA,modifier:sA,rawVars:0},o={targetTest:0,get:0,getSetter:rf,aliases:{},register:0};if(Es(),e!==i){if(cn[t])return;Dn(i,Dn(za(e,s),o)),Cr(i.prototype,Cr(s,za(e,o))),cn[i.prop=t]=i,e.targetTest&&(wa.push(i),Zu[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}ag(t,i),e.register&&e.register(_n,i,nn)},nt=255,eo={aqua:[0,nt,nt],lime:[0,nt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,nt],navy:[0,0,128],white:[nt,nt,nt],olive:[128,128,0],yellow:[nt,nt,0],orange:[nt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[nt,0,0],pink:[nt,192,203],cyan:[0,nt,nt],transparent:[nt,nt,nt,0]},pc=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*nt+.5|0},Sg=function(e,t,n){var i=e?wi(e)?[e>>16,e>>8&nt,e&nt]:0:eo.black,s,o,a,l,c,u,f,h,p,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),eo[e])i=eo[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&nt,i&nt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&nt,e&nt]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(Yc),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=pc(l+1/3,s,o),i[1]=pc(l,s,o),i[2]=pc(l-1/3,s,o);else if(~e.indexOf("="))return i=e.match(ng),n&&i.length<4&&(i[3]=1),i}else i=e.match(Yc)||eo.transparent;i=i.map(Number)}return t&&!g&&(s=i[0]/nt,o=i[1]/nt,a=i[2]/nt,f=Math.max(s,o,a),h=Math.min(s,o,a),u=(f+h)/2,f===h?l=c=0:(p=f-h,c=u>.5?p/(2-f-h):p/(f+h),l=f===s?(o-a)/p+(o<a?6:0):f===o?(a-s)/p+2:(s-o)/p+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Tg=function(e){var t=[],n=[],i=-1;return e.split(ji).forEach(function(s){var o=s.match(ts)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},Wd=function(e,t,n){var i="",s=(e+i).match(ji),o=t?"hsla(":"rgba(",a=0,l,c,u,f;if(!s)return e;if(s=s.map(function(h){return(h=Sg(h,t,1))&&o+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=Tg(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(ji,"1").split(ts),f=c.length-1;a<f;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(ji),f=c.length-1;a<f;a++)i+=c[a]+s[a];return i+c[f]},ji=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in eo)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),XE=/hsl[a]?\(/,Eg=function(e){var t=e.join(" "),n;if(ji.lastIndex=0,ji.test(t))return n=XE.test(t),e[1]=Wd(e[1],n),e[0]=Wd(e[0],n,Tg(e[1])),!0},Lo,fn=function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,u,f,h,p,g=function d(m){var _=r()-i,v=m===!0,x,y,M,E;if(_>e&&(n+=_-t),i+=_,M=i-n,x=M-o,(x>0||v)&&(E=++f.frame,h=M-f.time*1e3,f.time=M=M/1e3,o+=x+(x>=s?4:s-x),y=1),v||(l=c(d)),y)for(p=0;p<a.length;p++)a[p](M,h,E,m)};return f={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return h/(1e3/(m||60))},wake:function(){sg&&(!$c&&eg()&&(bn=$c=window,$u=bn.document||{},gn.gsap=_n,(bn.gsapVersions||(bn.gsapVersions=[])).push(_n.version),og(Oa||bn.GreenSockGlobals||!bn.gsap&&bn||{}),u=bn.requestAnimationFrame),l&&f.sleep(),c=u||function(m){return setTimeout(m,o-f.time*1e3+1|0)},Lo=1,g(2))},sleep:function(){(u?bn.cancelAnimationFrame:clearTimeout)(l),Lo=0,c=Co},lagSmoothing:function(m,_){e=m||1/0,t=Math.min(_||33,e)},fps:function(m){s=1e3/(m||240),o=f.time*1e3+s},add:function(m,_,v){var x=_?function(y,M,E,L){m(y,M,E,L),f.remove(x)}:m;return f.remove(m),a[v?"unshift":"push"](x),Es(),x},remove:function(m,_){~(_=a.indexOf(m))&&a.splice(_,1)&&p>=_&&p--},_listeners:a},f}(),Es=function(){return!Lo&&fn.wake()},He={},jE=/^[\d.\-M][\d.\-,\s]/,qE=/["']/g,YE=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(qE,"").trim():+c,i=l.substr(a+1).trim();return t},$E=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},KE=function(e){var t=(e+"").split("("),n=He[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[YE(t[1])]:$E(e).split(",").map(fg)):He._CE&&jE.test(e)?He._CE("",e):n},Ag=function(e){return function(t){return 1-e(1-t)}},Cg=function r(e,t){for(var n=e._first,i;n;)n instanceof Jt?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},Sr=function(e,t){return e&&(ft(e)?e:He[e]||KE(e))||t},Rr=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return tn(e,function(a){He[a]=gn[a]=s,He[o=a.toLowerCase()]=n;for(var l in s)He[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=He[a+"."+l]=s[l]}),s},Pg=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},mc=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/qc*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*wE((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:Pg(a);return s=qc/s,l.config=function(c,u){return r(e,c,u)},l},gc=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:Pg(n);return i.config=function(s){return r(e,s)},i};tn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;Rr(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});He.Linear.easeNone=He.none=He.Linear.easeIn;Rr("Elastic",mc("in"),mc("out"),mc());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};Rr("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Rr("Expo",function(r){return r?Math.pow(2,10*(r-1)):0});Rr("Circ",function(r){return-(Qm(1-r*r)-1)});Rr("Sine",function(r){return r===1?1:-ME(r*yE)+1});Rr("Back",gc("in"),gc("out"),gc());He.SteppedEase=He.steps=gn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-it;return function(a){return((i*Uo(0,o,a)|0)+s)*n}}};ws.ease=He["quad.out"];tn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Ju+=r+","+r+"Params,"});var Lg=function(e,t){this.id=bE++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:cg,this.set=t?t.getSetter:rf},As=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ts(this,+t.duration,1,1),this.data=t.data,vt&&(this._ctx=vt,vt.data.push(this)),Lo||fn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Ts(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Es(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(fl(this,n),!s._dp||s.parent||pg(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&ti(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===it||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),ug(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Vd(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Vd(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Ss(this._tTime,s)+1:1},e.timeScale=function(n){if(!arguments.length)return this._rts===-it?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?Ua(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-it?0:this._rts,this.totalTime(Uo(-this._delay,this._tDur,i),!0),ul(this),LE(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Es(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==it&&(this._tTime-=it)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&ti(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(en(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ua(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=EE);var i=Bt;return Bt=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Bt=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(i._ts||1),i=i._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1:this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Gd(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Gd(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(yn(this,n),en(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,en(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-it:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-it,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-it)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this;return new Promise(function(s){var o=ft(n)?n:hg,a=function(){var c=i.then;i.then=null,ft(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),s(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},e.kill=function(){Qs(this)},r}();Dn(As.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-it,_prom:0,_ps:!1,_rts:1});var Jt=function(r){Jm(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=en(n.sortChildren),at&&ti(n.parent||at,gi(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&mg(gi(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return co(0,arguments,this),this},t.from=function(i,s,o){return co(1,arguments,this),this},t.fromTo=function(i,s,o,a){return co(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,lo(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new yt(i,s,yn(this,o),1),this},t.call=function(i,s,o){return ti(this,yt.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new yt(i,o,yn(this,l)),this},t.staggerFrom=function(i,s,o,a,l,c,u){return o.runBackwards=1,lo(o).immediateRender=en(o.immediateRender),this.staggerTo(i,s,o,a,l,c,u)},t.staggerFromTo=function(i,s,o,a,l,c,u,f){return a.startAt=o,lo(a).immediateRender=en(a.immediateRender),this.staggerTo(i,s,a,l,c,u,f)},t.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Lt(i),f=this._zTime<0!=i<0&&(this._initted||!c),h,p,g,d,m,_,v,x,y,M,E,L;if(this!==at&&u>l&&i>=0&&(u=l),u!==this._tTime||o||f){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),h=u,y=this._start,x=this._ts,_=!x,f&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(E=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,o);if(h=Lt(u%m),u===l?(d=this._repeat,h=c):(d=~~(u/m),d&&d===u/m&&(h=c,d--),h>c&&(h=c)),M=Ss(this._tTime,m),!a&&this._tTime&&M!==d&&(M=d),E&&d&1&&(h=c-h,L=1),d!==M&&!this._lock){var b=E&&M&1,S=b===(E&&d&1);if(d<M&&(b=!b),a=b?0:c,this._lock=1,this.render(a||(L?0:Lt(d*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Rn(this,"onRepeat"),this.vars.repeatRefresh&&!L&&(this.invalidate()._lock=1),a&&a!==this._time||_!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,S&&(this._lock=2,a=b?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!L&&this.invalidate()),this._lock=0,!this._ts&&!_)return this;Cg(this,L)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=OE(this,Lt(a),Lt(h)),v&&(u-=h-(h=v._start))),this._tTime=u,this._time=h,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&h&&!s&&(Rn(this,"onStart"),this._tTime!==u))return this;if(h>=a&&i>=0)for(p=this._first;p;){if(g=p._next,(p._act||h>=p._start)&&p._ts&&v!==p){if(p.parent!==this)return this.render(i,s,o);if(p.render(p._ts>0?(h-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(h-p._start)*p._ts,s,o),h!==this._time||!this._ts&&!_){v=0,g&&(u+=this._zTime=-it);break}}p=g}else{p=this._last;for(var I=i<0?i:h;p;){if(g=p._prev,(p._act||I<=p._end)&&p._ts&&v!==p){if(p.parent!==this)return this.render(i,s,o);if(p.render(p._ts>0?(I-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(I-p._start)*p._ts,s,o||Bt&&(p._initted||p._startAt)),h!==this._time||!this._ts&&!_){v=0,g&&(u+=this._zTime=I?-it:it);break}}p=g}}if(v&&!s&&(this.pause(),v.render(h>=a?0:-it)._zTime=h>=a?1:-1,this._ts))return this._start=y,ul(this),this.render(i,s,o);this._onUpdate&&!s&&Rn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(y===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&$i(this,1),!s&&!(i<0&&!a)&&(u||a||!l)&&(Rn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(wi(s)||(s=yn(this,s,i)),!(i instanceof As)){if(Vt(i))return i.forEach(function(a){return o.add(a,s)}),this;if(At(i))return this.addLabel(i,s);if(ft(i))i=yt.delayedCall(0,i);else return this}return this!==i?ti(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Pn);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof yt?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return At(i)?this.removeLabel(i):ft(i)?this.killTweensOf(i):(cl(this,i),i===this._recent&&(this._recent=this._last),wr(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Lt(fn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=yn(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=yt.delayedCall(0,s||Co,o);return a.data="isPause",this._hasPause=1,ti(this,a,yn(this,i))},t.removePause=function(i){var s=this._first;for(i=yn(this,i);s;)s._start===i&&s.data==="isPause"&&$i(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)ki!==a[l]&&a[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=Ln(i),l=this._first,c=wi(s),u;l;)l instanceof yt?AE(l._targets,a)&&(c?(!ki||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=yn(o,i),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,h=l.immediateRender,p,g=yt.to(o,Dn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||it,onStart:function(){if(o.pause(),!p){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==m&&Ts(g,m,0,1).render(g._time,!0,!0),p=1}u&&u.apply(g,f||[])}},s));return h?g.render(0):g},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,Dn({startAt:{time:yn(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Hd(this,yn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Hd(this,yn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+it)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return wr(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),wr(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,l=Pn,c,u,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(f=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,ti(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Ts(o,o===at&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(at._ts&&(ug(at,Ua(i,at)),lg=fn.frame),fn.frame>=kd){kd+=pn.autoSleep||120;var s=at._first;if((!s||!s._ts)&&pn.autoSleep&&fn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||fn.sleep()}}},e}(As);Dn(Jt.prototype,{_lock:0,_hasPause:0,_forcing:0});var ZE=function(e,t,n,i,s,o,a){var l=new nn(this._pt,e,t,0,1,Ng,null,s),c=0,u=0,f,h,p,g,d,m,_,v;for(l.b=n,l.e=i,n+="",i+="",(_=~i.indexOf("random("))&&(i=Po(i)),o&&(v=[n,i],o(v,e,t),n=v[0],i=v[1]),h=n.match(hc)||[];f=hc.exec(i);)g=f[0],d=i.substring(c,f.index),p?p=(p+1)%5:d.substr(-5)==="rgba("&&(p=1),g!==h[u++]&&(m=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:d||u===1?d:",",s:m,c:g.charAt(1)==="="?us(m,g)-m:parseFloat(g)-m,m:p&&p<4?Math.round:0},c=hc.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(ig.test(i)||_)&&(l.e=0),this._pt=l,l},ef=function(e,t,n,i,s,o,a,l,c,u){ft(i)&&(i=i(s||0,e,o));var f=e[t],h=n!=="get"?n:ft(f)?c?e[t.indexOf("set")||!ft(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,p=ft(f)?c?nA:Og:nf,g;if(At(i)&&(~i.indexOf("random(")&&(i=Po(i)),i.charAt(1)==="="&&(g=us(h,i)+(Nt(h)||0),(g||g===0)&&(i=g))),!u||h!==i||nu)return!isNaN(h*i)&&i!==""?(g=new nn(this._pt,e,t,+h||0,i-(h||0),typeof f=="boolean"?rA:Fg,0,p),c&&(g.fp=c),a&&g.modifier(a,this,e),this._pt=g):(!f&&!(t in e)&&Ku(t,i),ZE.call(this,e,t,h,i,p,l||pn.stringFilter,c))},JE=function(e,t,n,i,s){if(ft(e)&&(e=uo(e,s,t,n,i)),!si(e)||e.style&&e.nodeType||Vt(e)||tg(e))return At(e)?uo(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=uo(e[a],s,t,n,i);return o},Rg=function(e,t,n,i,s,o){var a,l,c,u;if(cn[e]&&(a=new cn[e]).init(s,a.rawVars?t[e]:JE(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new nn(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==ns))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},ki,nu,tf=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.onUpdateParams,f=i.callbackScope,h=i.runBackwards,p=i.yoyoEase,g=i.keyframes,d=i.autoRevert,m=e._dur,_=e._startAt,v=e._targets,x=e.parent,y=x&&x.data==="nested"?x.vars.targets:v,M=e._overwrite==="auto"&&!qu,E=e.timeline,L,b,S,I,X,H,N,O,W,j,K,V,ce;if(E&&(!g||!s)&&(s="none"),e._ease=Sr(s,ws.ease),e._yEase=p?Ag(Sr(p===!0?s:p,ws.ease)):0,p&&e._yoyo&&!e._repeat&&(p=e._yEase,e._yEase=e._ease,e._ease=p),e._from=!E&&!!i.runBackwards,!E||g&&!i.stagger){if(O=v[0]?Mr(v[0]).harness:0,V=O&&i[O.prop],L=za(i,Zu),_&&(_._zTime<0&&_.progress(1),t<0&&h&&a&&!d?_.render(-1,!0):_.revert(h&&m?Ma:TE),_._lazy=0),o){if($i(e._startAt=yt.set(v,Dn({data:"isStart",overwrite:!1,parent:x,immediateRender:!0,lazy:!_&&en(l),startAt:null,delay:0,onUpdate:c,onUpdateParams:u,callbackScope:f,stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Bt||!a&&!d)&&e._startAt.revert(Ma),a&&m&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(h&&m&&!_){if(t&&(a=!1),S=Dn({overwrite:!1,data:"isFromStart",lazy:a&&!_&&en(l),immediateRender:a,stagger:0,parent:x},L),V&&(S[O.prop]=V),$i(e._startAt=yt.set(v,S)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Bt?e._startAt.revert(Ma):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,it,it);else if(!t)return}for(e._pt=e._ptCache=0,l=m&&en(l)||l&&!m,b=0;b<v.length;b++){if(X=v[b],N=X._gsap||Qu(v)[b]._gsap,e._ptLookup[b]=j={},Kc[N.id]&&Xi.length&&Na(),K=y===v?b:y.indexOf(X),O&&(W=new O).init(X,V||L,e,K,y)!==!1&&(e._pt=I=new nn(e._pt,X,W.name,0,1,W.render,W,0,W.priority),W._props.forEach(function(se){j[se]=I}),W.priority&&(H=1)),!O||V)for(S in L)cn[S]&&(W=Rg(S,L,e,K,X,y))?W.priority&&(H=1):j[S]=I=ef.call(e,X,S,"get",L[S],K,y,0,i.stringFilter);e._op&&e._op[b]&&e.kill(X,e._op[b]),M&&e._pt&&(ki=e,at.killTweensOf(X,j,e.globalTime(t)),ce=!e.parent,ki=0),e._pt&&l&&(Kc[N.id]=1)}H&&zg(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!ce,g&&t<=0&&E.render(Pn,!0,!0)},QE=function(e,t,n,i,s,o,a){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,u,f,h;if(!l)for(l=e._ptCache[t]=[],f=e._ptLookup,h=e._targets.length;h--;){if(c=f[h][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return nu=1,e.vars[t]="+=0",tf(e,a),nu=0,1;l.push(c)}for(h=l.length;h--;)u=l[h],c=u._pt||u,c.s=(i||i===0)&&!s?i:c.s+(i||0)+o*c.c,c.c=n-c.s,u.e&&(u.e=pt(n)+Nt(u.e)),u.b&&(u.b=c.s+Nt(u.b))},eA=function(e,t){var n=e[0]?Mr(e[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return t;s=Cr({},t);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},tA=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,a;if(Vt(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},uo=function(e,t,n,i,s){return ft(e)?e.call(t,n,i,s):At(e)&&~e.indexOf("random(")?Po(e):e},Dg=Ju+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Ig={};tn(Dg+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Ig[r]=1});var yt=function(r){Jm(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:lo(i))||this;var l=a.vars,c=l.duration,u=l.delay,f=l.immediateRender,h=l.stagger,p=l.overwrite,g=l.keyframes,d=l.defaults,m=l.scrollTrigger,_=l.yoyoEase,v=i.parent||at,x=(Vt(n)||tg(n)?wi(n[0]):"length"in i)?[n]:Ln(n),y,M,E,L,b,S,I,X;if(a._targets=x.length?Qu(x):Fa("GSAP target "+n+" not found. https://greensock.com",!pn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=p,g||h||ma(c)||ma(u)){if(i=a.vars,y=a.timeline=new Jt({data:"nested",defaults:d||{},targets:v&&v.data==="nested"?v.vars.targets:x}),y.kill(),y.parent=y._dp=gi(a),y._start=0,h||ma(c)||ma(u)){if(L=x.length,I=h&&vg(h),si(h))for(b in h)~Dg.indexOf(b)&&(X||(X={}),X[b]=h[b]);for(M=0;M<L;M++)E=za(i,Ig),E.stagger=0,_&&(E.yoyoEase=_),X&&Cr(E,X),S=x[M],E.duration=+uo(c,gi(a),M,S,x),E.delay=(+uo(u,gi(a),M,S,x)||0)-a._delay,!h&&L===1&&E.delay&&(a._delay=u=E.delay,a._start+=u,E.delay=0),y.to(S,E,I?I(M,S,x):0),y._ease=He.none;y.duration()?c=u=0:a.timeline=0}else if(g){lo(Dn(y.vars.defaults,{ease:"none"})),y._ease=Sr(g.ease||i.ease||"none");var H=0,N,O,W;if(Vt(g))g.forEach(function(j){return y.to(x,j,">")}),y.duration();else{E={};for(b in g)b==="ease"||b==="easeEach"||tA(b,g[b],E,g.easeEach);for(b in E)for(N=E[b].sort(function(j,K){return j.t-K.t}),H=0,M=0;M<N.length;M++)O=N[M],W={ease:O.e,duration:(O.t-(M?N[M-1].t:0))/100*c},W[b]=O.v,y.to(x,W,H),H+=W.duration;y.duration()<c&&y.to({},{duration:c-y.duration()})}}c||a.duration(c=y.duration())}else a.timeline=0;return p===!0&&!qu&&(ki=gi(a),at.killTweensOf(x),ki=0),ti(v,gi(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(f||!c&&!g&&a._start===Lt(v._time)&&en(f)&&RE(gi(a))&&v.data!=="nested")&&(a._tTime=-it,a.render(Math.max(0,-u)||0)),m&&mg(gi(a),m),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,f=i>l-it&&!u?l:i<it?0:i,h,p,g,d,m,_,v,x,y;if(!c)IE(this,i,s,o);else if(f!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(h=f,x=this.timeline,this._repeat){if(d=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(d*100+i,s,o);if(h=Lt(f%d),f===l?(g=this._repeat,h=c):(g=~~(f/d),g&&g===f/d&&(h=c,g--),h>c&&(h=c)),_=this._yoyo&&g&1,_&&(y=this._yEase,h=c-h),m=Ss(this._tTime,d),h===a&&!o&&this._initted)return this._tTime=f,this;g!==m&&(x&&this._yEase&&Cg(x,_),this.vars.repeatRefresh&&!_&&!this._lock&&(this._lock=o=1,this.render(Lt(d*g),!0).invalidate()._lock=0))}if(!this._initted){if(gg(this,u?i:h,o,s,f))return this._tTime=0,this;if(a!==this._time)return this;if(c!==this._dur)return this.render(i,s,o)}if(this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=v=(y||this._ease)(h/c),this._from&&(this.ratio=v=1-v),h&&!a&&!s&&(Rn(this,"onStart"),this._tTime!==f))return this;for(p=this._pt;p;)p.r(v,p.d),p=p._next;x&&x.render(i<0?i:!h&&_?-it:x._dur*x._ease(h/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&Zc(this,i,s,o),Rn(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&Rn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&Zc(this,i,!0,!0),(i||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&$i(this,1),!s&&!(u&&!a)&&(f||a||_)&&(Rn(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,a){Lo||fn.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||tf(this,l),c=this._ease(l/this._dur),QE(this,i,s,o,a,c,l)?this.resetTo(i,s,o,a):(fl(this,0),this.parent||dg(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Qs(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,ki&&ki.vars.overwrite!==!0)._first||Qs(this),this.parent&&o!==this.timeline.totalDuration()&&Ts(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?Ln(i):a,c=this._ptLookup,u=this._pt,f,h,p,g,d,m,_;if((!s||s==="all")&&PE(a,l))return s==="all"&&(this._pt=0),Qs(this);for(f=this._op=this._op||[],s!=="all"&&(At(s)&&(d={},tn(s,function(v){return d[v]=1}),s=d),s=eA(a,s)),_=a.length;_--;)if(~l.indexOf(a[_])){h=c[_],s==="all"?(f[_]=s,g=h,p={}):(p=f[_]=f[_]||{},g=s);for(d in g)m=h&&h[d],m&&((!("kill"in m.d)||m.d.kill(d)===!0)&&cl(this,m,"_pt"),delete h[d]),p!=="all"&&(p[d]=1)}return this._initted&&!this._pt&&u&&Qs(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return co(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return co(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return at.killTweensOf(i,s,o)},e}(As);Dn(yt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});tn("staggerTo,staggerFrom,staggerFromTo",function(r){yt[r]=function(){var e=new Jt,t=Qc.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var nf=function(e,t,n){return e[t]=n},Og=function(e,t,n){return e[t](n)},nA=function(e,t,n,i){return e[t](i.fp,n)},iA=function(e,t,n){return e.setAttribute(t,n)},rf=function(e,t){return ft(e[t])?Og:Yu(e[t])&&e.setAttribute?iA:nf},Fg=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},rA=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Ng=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},sf=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},sA=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},oA=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?cl(this,t,"_pt"):t.dep||(n=1),t=i;return!n},aA=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},zg=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},nn=function(){function r(t,n,i,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||Fg,this.d=l||this,this.set=c||nf,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=aA,this.m=n,this.mt=s,this.tween=i},r}();tn(Ju+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return Zu[r]=1});gn.TweenMax=gn.TweenLite=yt;gn.TimelineLite=gn.TimelineMax=Jt;at=new Jt({sortChildren:!1,defaults:ws,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});pn.stringFilter=Eg;var Cs=[],Sa={},lA=[],Xd=0,_c=function(e){return(Sa[e]||lA).map(function(t){return t()})},iu=function(){var e=Date.now(),t=[];e-Xd>2&&(_c("matchMediaInit"),Cs.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=bn.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),_c("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n)}),Xd=e,_c("matchMedia"))},Ug=function(){function r(t,n){this.selector=n&&eu(n),this.data=[],this._r=[],this.isReverted=!1,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){ft(n)&&(s=i,i=n,n=ft);var o=this,a=function(){var c=vt,u=o.selector,f;return c&&c!==o&&c.data.push(o),s&&(o.selector=eu(s)),vt=o,f=i.apply(o,arguments),ft(f)&&o._r.push(f),vt=c,o.selector=u,o.isReverted=!1,f};return o.last=a,n===ft?a(o):n?o[n]=a:a},e.ignore=function(n){var i=vt;vt=null,n(this),vt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof yt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n){var o=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return o.splice(o.indexOf(c),1)}))}),o.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,c){return c.g-l.g||-1}).forEach(function(l){return l.t.revert(n)}),this.data.forEach(function(l){return!(l instanceof As)&&l.revert&&l.revert(n)}),this._r.forEach(function(l){return l(n,s)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),i){var a=Cs.indexOf(this);~a&&Cs.splice(a,1)}},e.revert=function(n){this.kill(n||{})},r}(),cA=function(){function r(t){this.contexts=[],this.scope=t}var e=r.prototype;return e.add=function(n,i,s){si(n)||(n={matches:n});var o=new Ug(0,s||this.scope),a=o.conditions={},l,c,u;this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=bn.matchMedia(n[c]),l&&(Cs.indexOf(o)<0&&Cs.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(iu):l.addEventListener("change",iu)));return u&&i(o),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),ka={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return WE(i)})},timeline:function(e){return new Jt(e)},getTweensOf:function(e,t){return at.getTweensOf(e,t)},getProperty:function(e,t,n,i){At(e)&&(e=Ln(e)[0]);var s=Mr(e||{}).get,o=n?hg:fg;return n==="native"&&(n=""),e&&(t?o((cn[t]&&cn[t].get||s)(e,t,n,i)):function(a,l,c){return o((cn[a]&&cn[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=Ln(e),e.length>1){var i=e.map(function(u){return _n.quickSetter(u,t,n)}),s=i.length;return function(u){for(var f=s;f--;)i[f](u)}}e=e[0]||{};var o=cn[t],a=Mr(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var f=new o;ns._pt=0,f.init(e,n?u+n:u,ns,0,[e]),f.render(1,f),ns._pt&&sf(1,ns)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,s=_n.to(e,Cr((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return at.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Sr(e.ease,ws.ease)),Bd(ws,e||{})},config:function(e){return Bd(pn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!cn[a]&&!gn[a]&&Fa(t+" effect requires "+a+" plugin.")}),dc[t]=function(a,l,c){return n(Ln(a),Dn(l||{},s),c)},o&&(Jt.prototype[t]=function(a,l,c){return this.add(dc[t](a,si(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){He[e]=Sr(t)},parseEase:function(e,t){return arguments.length?Sr(e,t):He},getById:function(e){return at.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Jt(e),i,s;for(n.smoothChildTiming=en(e.smoothChildTiming),at.remove(n),n._dp=0,n._time=n._tTime=at._time,i=at._first;i;)s=i._next,(t||!(!i._dur&&i instanceof yt&&i.vars.onComplete===i._targets[0]))&&ti(n,i,i._start-i._delay),i=s;return ti(at,n,0),n},context:function(e,t){return e?new Ug(e,t):vt},matchMedia:function(e){return new cA(e)},matchMediaRefresh:function(){return Cs.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||iu()},addEventListener:function(e,t){var n=Sa[e]||(Sa[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Sa[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:VE,wrapYoyo:GE,distribute:vg,random:bg,snap:yg,normalize:BE,getUnit:Nt,clamp:NE,splitColor:Sg,toArray:Ln,selector:eu,mapRange:wg,pipe:UE,unitize:kE,interpolate:HE,shuffle:xg},install:og,effects:dc,ticker:fn,updateRoot:Jt.updateRoot,plugins:cn,globalTimeline:at,core:{PropTween:nn,globals:ag,Tween:yt,Timeline:Jt,Animation:As,getCache:Mr,_removeLinkedListItem:cl,reverting:function(){return Bt},context:function(e){return e&&vt&&(vt.data.push(e),e._ctx=vt),vt},suppressOverwrites:function(e){return qu=e}}};tn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return ka[r]=yt[r]});fn.add(Jt.updateRoot);ns=ka.to({},{duration:0});var uA=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},fA=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=uA(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},xc=function(e,t){return{name:e,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(At(s)&&(l={},tn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}fA(a,s)}}}},_n=ka.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)Bt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},xc("roundProps",tu),xc("modifiers"),xc("snap",yg))||ka;yt.version=Jt.version=_n.version="3.11.4";sg=1;eg()&&Es();He.Power0;He.Power1;He.Power2;He.Power3;He.Power4;He.Linear;He.Quad;He.Cubic;He.Quart;He.Quint;He.Strong;He.Elastic;He.Back;He.SteppedEase;He.Bounce;He.Sine;He.Expo;He.Circ;/*!
 * CSSPlugin 3.11.4
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var jd,Bi,fs,of,_r,qd,af,hA=function(){return typeof window<"u"},Si={},hr=180/Math.PI,hs=Math.PI/180,$r=Math.atan2,Yd=1e8,lf=/([A-Z])/g,dA=/(left|right|width|margin|padding|x)/i,pA=/[\s,\(]\S/,vi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},ru=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},mA=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},gA=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},_A=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},kg=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Bg=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},xA=function(e,t,n){return e.style[t]=n},vA=function(e,t,n){return e.style.setProperty(t,n)},yA=function(e,t,n){return e._gsap[t]=n},bA=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},MA=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},wA=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},lt="transform",Gn=lt+"Origin",SA=function(e,t){var n=this,i=this.target,s=i.style;if(e in Si){if(this.tfm=this.tfm||{},e!=="transform"&&(e=vi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=xi(i,o)}):this.tfm[e]=i._gsap.x?i._gsap[e]:xi(i,e)),this.props.indexOf(lt)>=0)return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Gn,t,"")),e=lt}(s||t)&&this.props.push(e,t,s[e])},Vg=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},TA=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].replace(lf,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=af(),s&&!s.isStart&&!n[lt]&&(Vg(n),i.uncache=1)}},Gg=function(e,t){var n={target:e,props:[],revert:TA,save:SA};return t&&t.split(",").forEach(function(i){return n.save(i)}),n},Hg,su=function(e,t){var n=Bi.createElementNS?Bi.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Bi.createElement(e);return n.style?n:Bi.createElement(e)},ri=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(lf,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,Ps(t)||t,1)||""},$d="O,Moz,ms,Ms,Webkit".split(","),Ps=function(e,t,n){var i=t||_r,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!($d[o]+e in s););return o<0?null:(o===3?"ms":o>=0?$d[o]:"")+e},ou=function(){hA()&&window.document&&(jd=window,Bi=jd.document,fs=Bi.documentElement,_r=su("div")||{style:{}},su("div"),lt=Ps(lt),Gn=lt+"Origin",_r.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Hg=!!Ps("perspective"),af=_n.core.reverting,of=1)},vc=function r(e){var t=su("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,s=this.style.cssText,o;if(fs.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=r}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),fs.removeChild(t),this.style.cssText=s,o},Kd=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Wg=function(e){var t;try{t=e.getBBox()}catch{t=vc.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===vc||(t=vc.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+Kd(e,["x","cx","x1"])||0,y:+Kd(e,["y","cy","y1"])||0,width:0,height:0}:t},Xg=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Wg(e))},Ro=function(e,t){if(t){var n=e.style;t in Si&&t!==Gn&&(t=lt),n.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(t.replace(lf,"-$1").toLowerCase())):n.removeAttribute(t)}},Vi=function(e,t,n,i,s,o){var a=new nn(e._pt,t,n,0,1,o?Bg:kg);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},Zd={deg:1,rad:1,turn:1},EA={grid:1,flex:1},Ki=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=_r.style,l=dA.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,h=i==="px",p=i==="%",g,d,m,_;return i===o||!s||Zd[i]||Zd[o]?s:(o!=="px"&&!h&&(s=r(e,t,n,"px")),_=e.getCTM&&Xg(e),(p||o==="%")&&(Si[t]||~t.indexOf("adius"))?(g=_?e.getBBox()[l?"width":"height"]:e[u],pt(p?s/g*f:s/100*g)):(a[l?"width":"height"]=f+(h?o:i),d=~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,_&&(d=(e.ownerSVGElement||{}).parentNode),(!d||d===Bi||!d.appendChild)&&(d=Bi.body),m=d._gsap,m&&p&&m.width&&l&&m.time===fn.time&&!m.uncache?pt(s/m.width*f):((p||o==="%")&&!EA[ri(d,"display")]&&(a.position=ri(e,"position")),d===e&&(a.position="static"),d.appendChild(_r),g=_r[u],d.removeChild(_r),a.position="absolute",l&&p&&(m=Mr(d),m.time=fn.time,m.width=d[u]),pt(h?g*s/f:g&&s?f/g*s:0))))},xi=function(e,t,n,i){var s;return of||ou(),t in vi&&t!=="transform"&&(t=vi[t],~t.indexOf(",")&&(t=t.split(",")[0])),Si[t]&&t!=="transform"?(s=Io(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Va(ri(e,Gn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Ba[t]&&Ba[t](e,t,n)||ri(e,t)||cg(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Ki(e,t,s,n)+n:s},AA=function(e,t,n,i){if(!n||n==="none"){var s=Ps(t,e,1),o=s&&ri(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=ri(e,"borderTopColor"))}var a=new nn(this._pt,e.style,t,0,1,Ng),l=0,c=0,u,f,h,p,g,d,m,_,v,x,y,M;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(e.style[t]=i,i=ri(e,t)||i,e.style[t]=n),u=[n,i],Eg(u),n=u[0],i=u[1],h=n.match(ts)||[],M=i.match(ts)||[],M.length){for(;f=ts.exec(i);)m=f[0],v=i.substring(l,f.index),g?g=(g+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(g=1),m!==(d=h[c++]||"")&&(p=parseFloat(d)||0,y=d.substr((p+"").length),m.charAt(1)==="="&&(m=us(p,m)+y),_=parseFloat(m),x=m.substr((_+"").length),l=ts.lastIndex-x.length,x||(x=x||pn.units[t]||y,l===i.length&&(i+=x,a.e+=x)),y!==x&&(p=Ki(e,t,d,x)||0),a._pt={_next:a._pt,p:v||c===1?v:",",s:p,c:_-p,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?Bg:kg;return ig.test(i)&&(a.e=0),this._pt=a,a},Jd={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},CA=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Jd[n]||n,t[1]=Jd[i]||i,t.join(" ")},PA=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Si[a]&&(l=1,a=a==="transformOrigin"?Gn:lt),Ro(n,a);l&&(Ro(n,lt),o&&(o.svg&&n.removeAttribute("transform"),Io(n,1),o.uncache=1,Vg(i)))}},Ba={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new nn(e._pt,t,n,0,0,PA);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},Do=[1,0,0,1,0,0],jg={},qg=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Qd=function(e){var t=ri(e,lt);return qg(t)?Do:t.substr(7).match(ng).map(pt)},cf=function(e,t){var n=e._gsap||Mr(e),i=e.style,s=Qd(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Do:s):(s===Do&&!e.offsetParent&&e!==fs&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(c=1,a=e.nextElementSibling,fs.appendChild(e)),s=Qd(e),l?i.display=l:Ro(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):fs.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},au=function(e,t,n,i,s,o){var a=e._gsap,l=s||cf(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,f=a.xOffset||0,h=a.yOffset||0,p=l[0],g=l[1],d=l[2],m=l[3],_=l[4],v=l[5],x=t.split(" "),y=parseFloat(x[0])||0,M=parseFloat(x[1])||0,E,L,b,S;n?l!==Do&&(L=p*m-g*d)&&(b=y*(m/L)+M*(-d/L)+(d*v-m*_)/L,S=y*(-g/L)+M*(p/L)-(p*v-g*_)/L,y=b,M=S):(E=Wg(e),y=E.x+(~x[0].indexOf("%")?y/100*E.width:y),M=E.y+(~(x[1]||x[0]).indexOf("%")?M/100*E.height:M)),i||i!==!1&&a.smooth?(_=y-c,v=M-u,a.xOffset=f+(_*p+v*d)-_,a.yOffset=h+(_*g+v*m)-v):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=M,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[Gn]="0px 0px",o&&(Vi(o,a,"xOrigin",c,y),Vi(o,a,"yOrigin",u,M),Vi(o,a,"xOffset",f,a.xOffset),Vi(o,a,"yOffset",h,a.yOffset)),e.setAttribute("data-svg-origin",y+" "+M)},Io=function(e,t){var n=e._gsap||new Lg(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=ri(e,Gn)||"0",u,f,h,p,g,d,m,_,v,x,y,M,E,L,b,S,I,X,H,N,O,W,j,K,V,ce,se,Me,k,ue,de,P;return u=f=h=d=m=_=v=x=y=0,p=g=1,n.svg=!!(e.getCTM&&Xg(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[lt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[lt]!=="none"?l[lt]:"")),i.scale=i.rotate=i.translate="none"),L=cf(e,n.svg),n.svg&&(n.uncache?(V=e.getBBox(),c=n.xOrigin-V.x+"px "+(n.yOrigin-V.y)+"px",K=""):K=!t&&e.getAttribute("data-svg-origin"),au(e,K||c,!!K||n.originIsAbsolute,n.smooth!==!1,L)),M=n.xOrigin||0,E=n.yOrigin||0,L!==Do&&(X=L[0],H=L[1],N=L[2],O=L[3],u=W=L[4],f=j=L[5],L.length===6?(p=Math.sqrt(X*X+H*H),g=Math.sqrt(O*O+N*N),d=X||H?$r(H,X)*hr:0,v=N||O?$r(N,O)*hr+d:0,v&&(g*=Math.abs(Math.cos(v*hs))),n.svg&&(u-=M-(M*X+E*N),f-=E-(M*H+E*O))):(P=L[6],ue=L[7],se=L[8],Me=L[9],k=L[10],de=L[11],u=L[12],f=L[13],h=L[14],b=$r(P,k),m=b*hr,b&&(S=Math.cos(-b),I=Math.sin(-b),K=W*S+se*I,V=j*S+Me*I,ce=P*S+k*I,se=W*-I+se*S,Me=j*-I+Me*S,k=P*-I+k*S,de=ue*-I+de*S,W=K,j=V,P=ce),b=$r(-N,k),_=b*hr,b&&(S=Math.cos(-b),I=Math.sin(-b),K=X*S-se*I,V=H*S-Me*I,ce=N*S-k*I,de=O*I+de*S,X=K,H=V,N=ce),b=$r(H,X),d=b*hr,b&&(S=Math.cos(b),I=Math.sin(b),K=X*S+H*I,V=W*S+j*I,H=H*S-X*I,j=j*S-W*I,X=K,W=V),m&&Math.abs(m)+Math.abs(d)>359.9&&(m=d=0,_=180-_),p=pt(Math.sqrt(X*X+H*H+N*N)),g=pt(Math.sqrt(j*j+P*P)),b=$r(W,j),v=Math.abs(b)>2e-4?b*hr:0,y=de?1/(de<0?-de:de):0),n.svg&&(K=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!qg(ri(e,lt)),K&&e.setAttribute("transform",K))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(p*=-1,v+=d<=0?180:-180,d+=d<=0?180:-180):(g*=-1,v+=v<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=f-((n.yPercent=f&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=h+o,n.scaleX=pt(p),n.scaleY=pt(g),n.rotation=pt(d)+a,n.rotationX=pt(m)+a,n.rotationY=pt(_)+a,n.skewX=v+a,n.skewY=x+a,n.transformPerspective=y+o,(n.zOrigin=parseFloat(c.split(" ")[2])||0)&&(i[Gn]=Va(c)),n.xOffset=n.yOffset=0,n.force3D=pn.force3D,n.renderTransform=n.svg?RA:Hg?Yg:LA,n.uncache=0,n},Va=function(e){return(e=e.split(" "))[0]+" "+e[1]},yc=function(e,t,n){var i=Nt(t);return pt(parseFloat(t)+parseFloat(Ki(e,"x",n+"px",i)))+i},LA=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Yg(e,t)},ar="0deg",Ys="0px",lr=") ",Yg=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,f=n.rotationX,h=n.skewX,p=n.skewY,g=n.scaleX,d=n.scaleY,m=n.transformPerspective,_=n.force3D,v=n.target,x=n.zOrigin,y="",M=_==="auto"&&e&&e!==1||_===!0;if(x&&(f!==ar||u!==ar)){var E=parseFloat(u)*hs,L=Math.sin(E),b=Math.cos(E),S;E=parseFloat(f)*hs,S=Math.cos(E),o=yc(v,o,L*S*-x),a=yc(v,a,-Math.sin(E)*-x),l=yc(v,l,b*S*-x+x)}m!==Ys&&(y+="perspective("+m+lr),(i||s)&&(y+="translate("+i+"%, "+s+"%) "),(M||o!==Ys||a!==Ys||l!==Ys)&&(y+=l!==Ys||M?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+lr),c!==ar&&(y+="rotate("+c+lr),u!==ar&&(y+="rotateY("+u+lr),f!==ar&&(y+="rotateX("+f+lr),(h!==ar||p!==ar)&&(y+="skew("+h+", "+p+lr),(g!==1||d!==1)&&(y+="scale("+g+", "+d+lr),v.style[lt]=y||"translate(0, 0)"},RA=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,f=n.scaleX,h=n.scaleY,p=n.target,g=n.xOrigin,d=n.yOrigin,m=n.xOffset,_=n.yOffset,v=n.forceCSS,x=parseFloat(o),y=parseFloat(a),M,E,L,b,S;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=hs,c*=hs,M=Math.cos(l)*f,E=Math.sin(l)*f,L=Math.sin(l-c)*-h,b=Math.cos(l-c)*h,c&&(u*=hs,S=Math.tan(c-u),S=Math.sqrt(1+S*S),L*=S,b*=S,u&&(S=Math.tan(u),S=Math.sqrt(1+S*S),M*=S,E*=S)),M=pt(M),E=pt(E),L=pt(L),b=pt(b)):(M=f,b=h,E=L=0),(x&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(x=Ki(p,"x",o,"px"),y=Ki(p,"y",a,"px")),(g||d||m||_)&&(x=pt(x+g-(g*M+d*L)+m),y=pt(y+d-(g*E+d*b)+_)),(i||s)&&(S=p.getBBox(),x=pt(x+i/100*S.width),y=pt(y+s/100*S.height)),S="matrix("+M+","+E+","+L+","+b+","+x+","+y+")",p.setAttribute("transform",S),v&&(p.style[lt]=S)},DA=function(e,t,n,i,s){var o=360,a=At(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?hr:1),c=l-i,u=i+c+"deg",f,h;return a&&(f=s.split("_")[1],f==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),f==="cw"&&c<0?c=(c+o*Yd)%o-~~(c/o)*o:f==="ccw"&&c>0&&(c=(c-o*Yd)%o-~~(c/o)*o)),e._pt=h=new nn(e._pt,t,n,i,c,mA),h.e=u,h.u="deg",e._props.push(n),h},ep=function(e,t){for(var n in t)e[n]=t[n];return e},IA=function(e,t,n){var i=ep({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,f,h,p,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[lt]=t,a=Io(n,1),Ro(n,lt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[lt],o[lt]=t,a=Io(n,1),o[lt]=c);for(l in Si)c=i[l],u=a[l],c!==u&&s.indexOf(l)<0&&(p=Nt(c),g=Nt(u),f=p!==g?Ki(n,l,c,g):parseFloat(c),h=parseFloat(u),e._pt=new nn(e._pt,a,l,f,h-f,ru),e._pt.u=g||0,e._props.push(l));ep(a,i)};tn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});Ba[e>1?"border"+r:r]=function(a,l,c,u,f){var h,p;if(arguments.length<4)return h=o.map(function(g){return xi(a,g,c)}),p=h.join(" "),p.split(h[0]).length===5?h[0]:p;h=(u+"").split(" "),p={},o.forEach(function(g,d){return p[g]=h[d]=h[d]||h[(d-1)/2|0]}),a.init(l,p,f)}});var $g={name:"css",register:ou,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,l=n.vars.startAt,c,u,f,h,p,g,d,m,_,v,x,y,M,E,L,b;of||ou(),this.styles=this.styles||Gg(e),b=this.styles.props,this.tween=n;for(d in t)if(d!=="autoRound"&&(u=t[d],!(cn[d]&&Rg(d,t,n,i,e,s)))){if(p=typeof u,g=Ba[d],p==="function"&&(u=u.call(n,i,e,s),p=typeof u),p==="string"&&~u.indexOf("random(")&&(u=Po(u)),g)g(this,e,d,u,n)&&(L=1);else if(d.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(d)+"").trim(),u+="",ji.lastIndex=0,ji.test(c)||(m=Nt(c),_=Nt(u)),_?m!==_&&(c=Ki(e,d,c,_)+_):m&&(u+=m),this.add(a,"setProperty",c,u,i,s,0,0,d),o.push(d),b.push(d,0,a[d]);else if(p!=="undefined"){if(l&&d in l?(c=typeof l[d]=="function"?l[d].call(n,i,e,s):l[d],At(c)&&~c.indexOf("random(")&&(c=Po(c)),Nt(c+"")||(c+=pn.units[d]||Nt(xi(e,d))||""),(c+"").charAt(1)==="="&&(c=xi(e,d))):c=xi(e,d),h=parseFloat(c),v=p==="string"&&u.charAt(1)==="="&&u.substr(0,2),v&&(u=u.substr(2)),f=parseFloat(u),d in vi&&(d==="autoAlpha"&&(h===1&&xi(e,"visibility")==="hidden"&&f&&(h=0),b.push("visibility",0,a.visibility),Vi(this,a,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),d!=="scale"&&d!=="transform"&&(d=vi[d],~d.indexOf(",")&&(d=d.split(",")[0]))),x=d in Si,x){if(this.styles.save(d),y||(M=e._gsap,M.renderTransform&&!t.parseTransform||Io(e,t.parseTransform),E=t.smoothOrigin!==!1&&M.smooth,y=this._pt=new nn(this._pt,a,lt,0,1,M.renderTransform,M,0,-1),y.dep=1),d==="scale")this._pt=new nn(this._pt,M,"scaleY",M.scaleY,(v?us(M.scaleY,v+f):f)-M.scaleY||0,ru),this._pt.u=0,o.push("scaleY",d),d+="X";else if(d==="transformOrigin"){b.push(Gn,0,a[Gn]),u=CA(u),M.svg?au(e,u,0,E,0,this):(_=parseFloat(u.split(" ")[2])||0,_!==M.zOrigin&&Vi(this,M,"zOrigin",M.zOrigin,_),Vi(this,a,d,Va(c),Va(u)));continue}else if(d==="svgOrigin"){au(e,u,1,E,0,this);continue}else if(d in jg){DA(this,M,d,h,v?us(h,v+u):u);continue}else if(d==="smoothOrigin"){Vi(this,M,"smooth",M.smooth,u);continue}else if(d==="force3D"){M[d]=u;continue}else if(d==="transform"){IA(this,u,e);continue}}else d in a||(d=Ps(d)||d);if(x||(f||f===0)&&(h||h===0)&&!pA.test(u)&&d in a)m=(c+"").substr((h+"").length),f||(f=0),_=Nt(u)||(d in pn.units?pn.units[d]:m),m!==_&&(h=Ki(e,d,c,_)),this._pt=new nn(this._pt,x?M:a,d,h,(v?us(h,v+f):f)-h,!x&&(_==="px"||d==="zIndex")&&t.autoRound!==!1?_A:ru),this._pt.u=_||0,m!==_&&_!=="%"&&(this._pt.b=c,this._pt.r=gA);else if(d in a)AA.call(this,e,d,c,v?v+u:u);else if(d in e)this.add(e,d,c||e[d],v?v+u:u,i,s);else if(d!=="parseTransform"){Ku(d,u);continue}x||(d in a?b.push(d,0,a[d]):b.push(d,1,c||e[d])),o.push(d)}}L&&zg(this)},render:function(e,t){if(t.tween._time||!af())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:xi,aliases:vi,getSetter:function(e,t,n){var i=vi[t];return i&&i.indexOf(",")<0&&(t=i),t in Si&&t!==Gn&&(e._gsap.x||xi(e,"x"))?n&&qd===n?t==="scale"?bA:yA:(qd=n||{})&&(t==="scale"?MA:wA):e.style&&!Yu(e.style[t])?xA:~t.indexOf("-")?vA:rf(e,t)},core:{_removeProperty:Ro,_getMatrix:cf}};_n.utils.checkPrefix=Ps;_n.core.getStyleSaver=Gg;(function(r,e,t,n){var i=tn(r+","+e+","+t,function(s){Si[s]=1});tn(e,function(s){pn.units[s]="deg",jg[s]=1}),vi[i[13]]=r+","+e,tn(n,function(s){var o=s.split(":");vi[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");tn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){pn.units[r]="px"});_n.registerPlugin($g);var Kg=_n.registerPlugin($g)||_n;Kg.core.Tween;class OA{constructor(e,t){Je(this,"scene");Je(this,"time");this.scene=e,this.time=t,this.init()}init(){const t=new nl(200,200,32,32),n=new mn({uniforms:{u_color:{value:new De(ei.radarColor)},u_radius:{value:100},u_time:this.time},transparent:!0,side:hn,vertexShader:`
        varying vec2 v_position;
        void main() {
          v_position = vec2(position);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        precision mediump float;
        varying vec2 v_position;
        
        uniform float u_radius;
        uniform float u_time;
        uniform vec3 u_color;
        
        void main() {
          float angle = atan(v_position.x, v_position.y);
          // 饼图可以基于这段
          // float new_angle = mod(angle + 3.14 / 2.0, 3.1415926 * 2.0);
          float new_angle = mod(angle + u_time, 3.1415926 * 2.0);
          // 计算距离
          float dis = distance(vec2(0.0, 0.0), v_position);
          // 外层圆环的宽度
          float borderWidth = 5.0;
          float f_opacity = 0.0;
          if (dis > u_radius - borderWidth) {
            f_opacity = 1.0;
          }
          // 雷达扫描的显示
          if (dis < u_radius - borderWidth) {
            // 饼图可以基于这段
            // if (new_angle > 3.14 / 2.0) {
            //   f_opacity = 0.0;
            // } else {
            //   f_opacity = 1.0;
            // }
            f_opacity = 1.0 - new_angle;
          }
          if (dis > u_radius) {
            f_opacity = 0.0;
          }
          gl_FragColor = vec4(u_color, f_opacity);
        }
      `}),i=new kt(t,n);i.rotation.x=Math.PI/2,i.position.set(300,1,0),this.scene.add(i)}}class Zg{constructor(e,t){Je(this,"scene");Je(this,"time");this.scene=e,this.time=t}init(e){const t=new rl(e.radius,e.radius,e.height,32,1,e.open);t.translate(0,e.height/2,0);const n=new mn({uniforms:{u_color:{value:new De(e.color)},u_height:{value:e.height},u_opacity:{value:e.opacity},u_speed:{value:e.speed},u_time:this.time},side:hn,depthTest:!1,vertexShader:`
        uniform float u_time;
        uniform float u_height;
        uniform float u_speed;
        
        varying float v_opacity;
        
        void main() {
          vec3 v_position = position * mod(u_time / u_speed, 1.0);
          
          v_opacity = mix(1.0, 0.0, position.y / u_height);
          
          gl_Position = projectionMatrix * modelViewMatrix * vec4(v_position, 1.0);
        }
      `,fragmentShader:`
        uniform vec3 u_color;
        uniform float u_opacity;
        
        varying float v_opacity;
      
        void main() {
          gl_FragColor = vec4(u_color, u_opacity * v_opacity);
        }
      `,transparent:!0}),i=new kt(t,n);i.position.copy(new F(e.position.x,e.position.y,e.position.z)),this.scene.add(i)}}class FA{constructor(e,t){Je(this,"scene");Je(this,"time");Je(this,"config",{radius:50,height:40,open:!0,opacity:.6,color:ei.wall,position:{x:0,y:0,z:0},speed:2});this.scene=e,this.time=t,new Zg(this.scene,t).init(this.config)}}class NA{constructor(e,t){Je(this,"scene");Je(this,"time");Je(this,"config",{radius:50,color:ei.circle,opacity:.6,height:1,open:!1,position:{x:300,y:0,z:300},speed:2});this.scene=e,this.time=t,new Zg(e,t).init(this.config)}}class zA{constructor(e,t){Je(this,"scene");Je(this,"camera");Je(this,"height",{value:5});Je(this,"time",{value:0});Je(this,"top",{value:5});Je(this,"flag",!1);this.loadCity(),this.scene=e,this.camera=t}loadCity(){_E("/beijing.fbx").then(e=>{e.traverse(t=>{t.isMesh&&new xE(this.scene,t,this.height,this.time)}),this.initEffect()})}initEffect(){new vE(this.scene),new OA(this.scene,this.time),new FA(this.scene,this.time),new NA(this.scene,this.time),new FT(this.scene,this.time),new OT(this.scene,this.top,this.height)}clickEvent(){let e=!1,t=!1;document.onmousedown=()=>{e=!0},document.onmousemove=()=>{e&&(t=!0)},document.onmouseup=n=>{if(e&&t){e=!1,t=!1;return}const i=n.clientX/window.innerWidth*2-1,s=-(n.clientY/window.innerHeight)*2+1,l=new F(i,s,.5).unproject(this.camera).sub(this.camera.position).normalize(),u=new IT(this.camera.position,l).intersectObjects(this.scene.children,!0);let f=null;u.length&&(f=u[0]),f&&Kg.to(this.camera.position,{x:f.point.x*2,y:f.point.y*2,z:f.point.z*2,duration:1,ease:"linear"})}}start(e){this.height.value+=.4,this.height.value>160&&(this.height.value=5),this.time.value+=e,(this.top.value>15||this.top.value<0)&&(this.flag=!this.flag),this.top.value+=this.flag?-.4:.4}}const tp={type:"change"},bc={type:"start"},np={type:"end"};class UA extends Pr{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ir.ROTATE,MIDDLE:Ir.DOLLY,RIGHT:Ir.PAN},this.touches={ONE:Or.ROTATE,TWO:Or.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(R){R.addEventListener("keydown",le),this._domElementKeyEvents=R},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",le),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(tp),n.update(),s=i.NONE},this.update=function(){const R=new F,B=new An().setFromUnitVectors(e.up,new F(0,1,0)),Se=B.clone().invert(),ye=new F,Ae=new An,Pe=2*Math.PI;return function(){const Ie=n.object.position;R.copy(Ie).sub(n.target),R.applyQuaternion(B),a.setFromVector3(R),n.autoRotate&&s===i.NONE&&S(L()),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Ge=n.minAzimuthAngle,tt=n.maxAzimuthAngle;return isFinite(Ge)&&isFinite(tt)&&(Ge<-Math.PI?Ge+=Pe:Ge>Math.PI&&(Ge-=Pe),tt<-Math.PI?tt+=Pe:tt>Math.PI&&(tt-=Pe),Ge<=tt?a.theta=Math.max(Ge,Math.min(tt,a.theta)):a.theta=a.theta>(Ge+tt)/2?Math.max(Ge,a.theta):Math.min(tt,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=c,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),R.setFromSpherical(a),R.applyQuaternion(Se),Ie.copy(n.target).add(R),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,f||ye.distanceToSquared(n.object.position)>o||8*(1-Ae.dot(n.object.quaternion))>o?(n.dispatchEvent(tp),ye.copy(n.object.position),Ae.copy(n.object.quaternion),f=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",U),n.domElement.removeEventListener("pointerdown",q),n.domElement.removeEventListener("pointercancel",fe),n.domElement.removeEventListener("wheel",ge),n.domElement.removeEventListener("pointermove",J),n.domElement.removeEventListener("pointerup",te),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",le),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const o=1e-6,a=new Od,l=new Od;let c=1;const u=new F;let f=!1;const h=new Fe,p=new Fe,g=new Fe,d=new Fe,m=new Fe,_=new Fe,v=new Fe,x=new Fe,y=new Fe,M=[],E={};function L(){return 2*Math.PI/60/60*n.autoRotateSpeed}function b(){return Math.pow(.95,n.zoomSpeed)}function S(R){l.theta-=R}function I(R){l.phi-=R}const X=function(){const R=new F;return function(Se,ye){R.setFromMatrixColumn(ye,0),R.multiplyScalar(-Se),u.add(R)}}(),H=function(){const R=new F;return function(Se,ye){n.screenSpacePanning===!0?R.setFromMatrixColumn(ye,1):(R.setFromMatrixColumn(ye,0),R.crossVectors(n.object.up,R)),R.multiplyScalar(Se),u.add(R)}}(),N=function(){const R=new F;return function(Se,ye){const Ae=n.domElement;if(n.object.isPerspectiveCamera){const Pe=n.object.position;R.copy(Pe).sub(n.target);let Te=R.length();Te*=Math.tan(n.object.fov/2*Math.PI/180),X(2*Se*Te/Ae.clientHeight,n.object.matrix),H(2*ye*Te/Ae.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(X(Se*(n.object.right-n.object.left)/n.object.zoom/Ae.clientWidth,n.object.matrix),H(ye*(n.object.top-n.object.bottom)/n.object.zoom/Ae.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function O(R){n.object.isPerspectiveCamera?c/=R:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*R)),n.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function W(R){n.object.isPerspectiveCamera?c*=R:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/R)),n.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function j(R){h.set(R.clientX,R.clientY)}function K(R){v.set(R.clientX,R.clientY)}function V(R){d.set(R.clientX,R.clientY)}function ce(R){p.set(R.clientX,R.clientY),g.subVectors(p,h).multiplyScalar(n.rotateSpeed);const B=n.domElement;S(2*Math.PI*g.x/B.clientHeight),I(2*Math.PI*g.y/B.clientHeight),h.copy(p),n.update()}function se(R){x.set(R.clientX,R.clientY),y.subVectors(x,v),y.y>0?O(b()):y.y<0&&W(b()),v.copy(x),n.update()}function Me(R){m.set(R.clientX,R.clientY),_.subVectors(m,d).multiplyScalar(n.panSpeed),N(_.x,_.y),d.copy(m),n.update()}function k(R){R.deltaY<0?W(b()):R.deltaY>0&&O(b()),n.update()}function ue(R){let B=!1;switch(R.code){case n.keys.UP:R.ctrlKey||R.metaKey||R.shiftKey?I(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(0,n.keyPanSpeed),B=!0;break;case n.keys.BOTTOM:R.ctrlKey||R.metaKey||R.shiftKey?I(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(0,-n.keyPanSpeed),B=!0;break;case n.keys.LEFT:R.ctrlKey||R.metaKey||R.shiftKey?S(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(n.keyPanSpeed,0),B=!0;break;case n.keys.RIGHT:R.ctrlKey||R.metaKey||R.shiftKey?S(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(-n.keyPanSpeed,0),B=!0;break}B&&(R.preventDefault(),n.update())}function de(){if(M.length===1)h.set(M[0].pageX,M[0].pageY);else{const R=.5*(M[0].pageX+M[1].pageX),B=.5*(M[0].pageY+M[1].pageY);h.set(R,B)}}function P(){if(M.length===1)d.set(M[0].pageX,M[0].pageY);else{const R=.5*(M[0].pageX+M[1].pageX),B=.5*(M[0].pageY+M[1].pageY);d.set(R,B)}}function Z(){const R=M[0].pageX-M[1].pageX,B=M[0].pageY-M[1].pageY,Se=Math.sqrt(R*R+B*B);v.set(0,Se)}function $(){n.enableZoom&&Z(),n.enablePan&&P()}function re(){n.enableZoom&&Z(),n.enableRotate&&de()}function pe(R){if(M.length==1)p.set(R.pageX,R.pageY);else{const Se=xe(R),ye=.5*(R.pageX+Se.x),Ae=.5*(R.pageY+Se.y);p.set(ye,Ae)}g.subVectors(p,h).multiplyScalar(n.rotateSpeed);const B=n.domElement;S(2*Math.PI*g.x/B.clientHeight),I(2*Math.PI*g.y/B.clientHeight),h.copy(p)}function we(R){if(M.length===1)m.set(R.pageX,R.pageY);else{const B=xe(R),Se=.5*(R.pageX+B.x),ye=.5*(R.pageY+B.y);m.set(Se,ye)}_.subVectors(m,d).multiplyScalar(n.panSpeed),N(_.x,_.y),d.copy(m)}function ve(R){const B=xe(R),Se=R.pageX-B.x,ye=R.pageY-B.y,Ae=Math.sqrt(Se*Se+ye*ye);x.set(0,Ae),y.set(0,Math.pow(x.y/v.y,n.zoomSpeed)),O(y.y),v.copy(x)}function A(R){n.enableZoom&&ve(R),n.enablePan&&we(R)}function D(R){n.enableZoom&&ve(R),n.enableRotate&&pe(R)}function q(R){n.enabled!==!1&&(M.length===0&&(n.domElement.setPointerCapture(R.pointerId),n.domElement.addEventListener("pointermove",J),n.domElement.addEventListener("pointerup",te)),Q(R),R.pointerType==="touch"?T(R):me(R))}function J(R){n.enabled!==!1&&(R.pointerType==="touch"?w(R):ae(R))}function te(R){ne(R),M.length===0&&(n.domElement.releasePointerCapture(R.pointerId),n.domElement.removeEventListener("pointermove",J),n.domElement.removeEventListener("pointerup",te)),n.dispatchEvent(np),s=i.NONE}function fe(R){ne(R)}function me(R){let B;switch(R.button){case 0:B=n.mouseButtons.LEFT;break;case 1:B=n.mouseButtons.MIDDLE;break;case 2:B=n.mouseButtons.RIGHT;break;default:B=-1}switch(B){case Ir.DOLLY:if(n.enableZoom===!1)return;K(R),s=i.DOLLY;break;case Ir.ROTATE:if(R.ctrlKey||R.metaKey||R.shiftKey){if(n.enablePan===!1)return;V(R),s=i.PAN}else{if(n.enableRotate===!1)return;j(R),s=i.ROTATE}break;case Ir.PAN:if(R.ctrlKey||R.metaKey||R.shiftKey){if(n.enableRotate===!1)return;j(R),s=i.ROTATE}else{if(n.enablePan===!1)return;V(R),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(bc)}function ae(R){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;ce(R);break;case i.DOLLY:if(n.enableZoom===!1)return;se(R);break;case i.PAN:if(n.enablePan===!1)return;Me(R);break}}function ge(R){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(R.preventDefault(),n.dispatchEvent(bc),k(R),n.dispatchEvent(np))}function le(R){n.enabled===!1||n.enablePan===!1||ue(R)}function T(R){switch(he(R),M.length){case 1:switch(n.touches.ONE){case Or.ROTATE:if(n.enableRotate===!1)return;de(),s=i.TOUCH_ROTATE;break;case Or.PAN:if(n.enablePan===!1)return;P(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case Or.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;$(),s=i.TOUCH_DOLLY_PAN;break;case Or.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;re(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(bc)}function w(R){switch(he(R),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;pe(R),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;we(R),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;A(R),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;D(R),n.update();break;default:s=i.NONE}}function U(R){n.enabled!==!1&&R.preventDefault()}function Q(R){M.push(R)}function ne(R){delete E[R.pointerId];for(let B=0;B<M.length;B++)if(M[B].pointerId==R.pointerId){M.splice(B,1);return}}function he(R){let B=E[R.pointerId];B===void 0&&(B=new Fe,E[R.pointerId]=B),B.set(R.pageX,R.pageY)}function xe(R){const B=R.pointerId===M[0].pointerId?M[1]:M[0];return E[B.pointerId]}n.domElement.addEventListener("contextmenu",U),n.domElement.addEventListener("pointerdown",q),n.domElement.addEventListener("pointercancel",fe),n.domElement.addEventListener("wheel",ge,{passive:!1}),this.update()}}function kA(){const r=document.getElementById("webgl"),e=new K1,t=new qt(30,window.innerWidth/window.innerHeight,100,1e5);t.position.set(1018,357,-24),e.add(t),e.add(new Bm(2913840557));const n=new km(16777215,1);n.position.set(0,0,1e3),n.castShadow=!0,e.add(n);const i=new Vu({canvas:r});i.setSize(window.innerWidth,window.innerHeight),i.setPixelRatio(Math.min(window.devicePixelRatio,2)),i.setClearColor(new De(0),1);const s=new UA(t,r);s.enableDamping=!0,s.enableZoom=!0,s.minDistance=100,s.maxDistance=2e3;const o=new zA(e,t),a=new wT,l=()=>{o.start(a.getDelta()),i.render(e,t),s.update(),t.updateProjectionMatrix()};i.setAnimationLoop(l),window.addEventListener("resize",()=>{t.aspect=window.innerWidth/window.innerHeight,t.updateProjectionMatrix(),i.setSize(window.innerWidth,window.innerHeight),i.setPixelRatio(Math.min(window.devicePixelRatio,2))})}const BA={id:"webgl"},VA=Ya({__name:"HomeView",setup(r){return Np(()=>{kA()}),(e,t)=>(jp(),j0("canvas",BA))}}),GA=Iv({history:Kx("/"),routes:[{path:"/",name:"home",component:VA}]});const uf=Cx(Fv);uf.use(Dx());uf.use(GA);uf.mount("#app");
